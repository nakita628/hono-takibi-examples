<h1 id="snyk-api">Snyk API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Snyk API is available to customers on [Business and Enterprise plans](https://snyk.io/plans) and allows you to programatically integrate with Snyk.

## REST API

We are in the process of building a new, improved API (`https://api.snyk.io/rest`) built using the OpenAPI and JSON API standards. We welcome you to try it out as we shape and release endpoints until it, ultimately, becomes a full replacement for our current API.

Looking for our REST API docs? Please head over to [https://apidocs.snyk.io](https://apidocs.snyk.io)

## API vs CLI vs Snyk integration

The API detailed below has the ability to test a package for issues, as they are defined by Snyk. It is important to note that for many package managers, using this API will be less accurate than running the [Snyk CLI](https://snyk.io/docs/using-snyk) as part of your build pipe, or just using it locally on your package. The reason for this is that more than one package version fit the requirements given in manifest files. Running the CLI locally tests the actual deployed code, and has an accurate snapshot of the dependency versions in use, while the API can only infer it, with inferior accuracy. It should be noted that the Snyk CLI has the ability to output machine-readable JSON output (with the `--json` flag to `snyk test`).

A third option, is to allow Snyk access to your development flow via the existing [Snyk integrations](https://snyk.io/docs/). The advantage to this approach is having Snyk monitor every new pull request, and suggest fixes by opening new pull requests. This can be achieved either by integrating Snyk directly to your source code management (SCM) tool, or via a broker to allow greater security and auditability.

If those are not viable options, this API is your best choice.

## API url

The base URL for all API endpoints is https://api.snyk.io/api/v1/

## Authorization

To use this API, you must get your token from Snyk. It can be seen on https://snyk.io/account/ after you register with Snyk and login.

The token should be supplied in an `Authorization` header with the token, preceded by `token`:

```http
Authorization: token API_KEY
```

Otherwise, a 401 "Unauthorized" response will be returned.

```http
HTTP/1.1 401 Unauthorized

        {
            "code": 401,
            "error": "Not authorised",
            "message": "Not authorised"
        }
```

## Overview and entities

The API is a REST API. It has the following entities:

### Test result

The test result is the object returned from the API giving the results of testing a package for issues. It has the following fields:

| Property        | Type    | Description                                           | Example                                                         |
|----------------:|---------|-------------------------------------------------------|-----------------------------------------------------------------|
| ok              | boolean | Does this package have one or more issues?             | false                                                           |
| issues          | object  | The issues found. See below for details.              | See below                                                       |
| dependencyCount | number  | The number of dependencies the package has.           | 9                                                               |
| org             | object  | The organization this test was carried out for.       | {"name": "anOrg", "id": "5d7013d9-2a57-4c89-993c-0304d960193c"} |
| licensesPolicy  | object  | The organization's licenses policy used for this test | See in the examples                                             |
| packageManager  | string  | The package manager for this package                  | "maven"                                                         |
|                 |         |                                                       |                                                                 |

### Issue

An issue is either a vulnerability or a license issue, according to the organization's policy. It has the following fields:

| Property       | Type          | Description                                                                                                                | Example                                |
|---------------:|---------------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| id             | string        | The issue ID                                                                                                               | "SNYK-JS-BACKBONE-10054"               |
| url            | string        | A link to the issue details on snyk.io                                                                                     | "https://snyk.io/vuln/SNYK-JS-BACKBONE-10054 |
| title          | string        | The issue title                                                                                                            | "Cross Site Scripting"                 |
| type           | string        | The issue type: "license" or "vulnerability".                                                                              | "license"                              |
| paths          | array         | The paths to the dependencies which have an issue, and their corresponding upgrade path (if an upgrade is available). [More information about from and upgrade paths](#introduction/overview-and-entities/from-and-upgrade-paths) | [<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"from": ["a@1.0.0", "b@4.8.1"],<br>&nbsp;&nbsp;&nbsp;&nbsp;"upgrade": [false, "b@4.8.2"]<br>&nbsp;&nbsp;}<br>] |
| package        | string        | The package identifier according to its package manager                                                                    | "backbone", "org.apache.flex.blazeds:blazeds"|
| version        | string        | The package version this issue is applicable to.                                                                           | "0.4.0"                                |
| severity       | string        | The Snyk defined severity level: "critical", "high", "medium" or "low".                                                    | "high"                                 |
| language       | string        | The package's programming language                                                                                         | "js"                                   |
| packageManager | string        | The package manager                                                                                                        | "npm"                                  |
| semver         | array[string] OR map[string]array[string] | One or more [semver](https://semver.org) ranges this issue is applicable to. The format varies according to package manager. | ["<0.5.0, >=0.4.0", "<0.3.8, >=0.3.6"] OR { "vulnerable": ["[2.0.0, 3.0.0)"], "unaffected": ["[1, 2)", "[3, )"] } |

### Vulnerability

A vulnerability in a package. In addition to all the fields present in an issue, a vulnerability also has these fields:

Property        | Type    | Description                                                                                                                                                                                                                      | Example                                        |
----------------:|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
 publicationTime | Date    | The vulnerability publication time                                                                                                                                                                                               | "2016-02-11T07:16:18.857Z"                     |
 disclosureTime  | Date    | The time this vulnerability was originally disclosed to the package maintainers                                                                                                                                                   | "2016-02-11T07:16:18.857Z"                     |
 isUpgradable    | boolean | Is this vulnerability fixable by upgrading a dependency?                                                                                                                                                                         | true                                           |
 description     | string  | The detailed description of the vulnerability, why and how it is exploitable. Provided in markdown format. | "## Overview\n[`org.apache.logging.log4j:log4j-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22log4j-core%22)\nIn Apache Log4j 2.x before 2.8.2, when using the TCP socket server or UDP socket server to receive serialized log events from another application, a specially crafted binary payload can be sent that, when deserialized, can execute arbitrary code.\n\n# Details\nSerialization is a process of converting an object into a sequence of bytes which can be persisted to a disk or database or can be sent through streams. The reverse process of creating object from sequence of bytes is called deserialization. Serialization is commonly used for communication (sharing objects between multiple hosts) and persistence (store the object state in a file or a database). It is an integral part of popular protocols like _Remote Method Invocation (RMI)_, _Java Management Extension (JMX)_, _Java Messaging System (JMS)_, _Action Message Format (AMF)_, _Java Server Faces (JSF) ViewState_, etc.\n\n_Deserialization of untrusted data_ ([CWE-502](https://cwe.mitre.org/data/definitions/502.html)), is when the application deserializes untrusted data without sufficiently verifying that the resulting data will be valid, letting the attacker to control the state or the flow of the execution. \n\nJava deserialization issues have been known for years. However, interest in the issue intensified greatly in 2015, when classes that could be abused to achieve remote code execution were found in a [popular library (Apache Commons Collection)](https://snyk.io/vuln/SNYK-JAVA-COMMONSCOLLECTIONS-30078). These classes were used in zero-days affecting IBM WebSphere, Oracle WebLogic and many other products.\n\nAn attacker just needs to identify a piece of software that has both a vulnerable class on its path, and performs deserialization on untrusted data. Then all they need to do is send the payload into the deserializer, getting the command executed.\n\n> Developers put too much trust in Java Object Serialization. Some even de-serialize objects pre-authentication. When deserializing an Object in Java you typically cast it to an expected type, and therefore Java's strict type system will ensure you only get valid object trees. Unfortunately, by the time the type checking happens, platform code has already created and executed significant logic. So, before the final type is checked a lot of code is executed from the readObject() methods of various objects, all of which is out of the developer's control. By combining the readObject() methods of various classes which are available on the classpath of the vulnerable application an attacker can execute functions (including calling Runtime.exec() to execute local OS commands).\n- Apache Blog\n\n\n## References\n- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5645)\n- [jira issue](https://issues.apache.org/jira/browse/LOG4J2-1863)\n" |
 isPatchable     | boolean | Is this vulnerability fixable by using a Snyk supplied patch?                                                                                                                                                                    | true                                           |
 isPinnable      | boolean | Is this vulnerability fixable by pinning a transitive dependency                                                                                                                                                                 | true                                           |
 identifiers     | object  | Additional vulnerability identifiers                                                                                                                                                                                             | {"CWE": [], "CVE": ["CVE-2016-2402]}           |
 credit          | string  | The reporter of the vulnerability                                                                                                                                                                                                | "Snyk Security Team"                           |
 CVSSv3          | string  | Common Vulnerability Scoring System (CVSS) provides a way to capture the principal characteristics of a vulnerability, and produce a numerical score reflecting its severity, as well as a textual representation of that score. | "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N" |
 cvssScore       | number  | CVSS Score                                                                                                                                                                                                                       | 5.3                                            |
 patches         | array   | Patches to fix this issue, by snyk                                                                                                                                                                                               | see "Patch" below.                             |
 upgradePath     | object  | The path to upgrade this issue, if applicable                                                                                                                                                                                    | see below                                      |
 isPatched       | boolean | Is this vulnerability patched?                                                                                                                                                                                                   | false                                          |
 exploitMaturity | string  | The snyk exploit maturity level

#### Patch

A patch is an object like this one:

```json
{
  "urls": [
    "https://snyk-patches.s3.amazonaws.com/npm/backbone/20110701/backbone_20110701_0_0_0cdc525961d3fa98e810ffae6bcc8e3838e36d93.patch"
  ],
  "version": "<0.5.0 >=0.3.3",
  "modificationTime": "2015-11-06T02:09:36.180Z",
  "comments": [
    "https://github.com/jashkenas/backbone/commit/0cdc525961d3fa98e810ffae6bcc8e3838e36d93.patch"
  ],
  "id": "patch:npm:backbone:20110701:0"
}
```

### From and upgrade paths

Both from and upgrade paths are arrays, where each item within the array is a package `name@version`.

Take the following `from` path:

```
[
  "my-project@1.0.0",
  "actionpack@4.2.5",
  "rack@1.6.4"
]
```

Assuming this was returned as a result of a test, then we know:

- The package that was tested was `my-project@1.0.0`

- The dependency with an issue was included in the tested package via the direct dependency `actionpack@4.2.5`

- The dependency with an issue was [rack@1.6.4](https://snyk.io/vuln/rubygems:rack@1.6.4)

Take the following `upgrade` path:

```
[
  false,
  "actionpack@5.0.0",
  "rack@2.0.1"
]
```

Assuming this was returned as a result of a test, then we know:

- The package that was tested is not upgradable (`false`)

- The direct dependency `actionpack` should be upgraded to at least version `5.0.0` in order to fix the issue

- Upgrading `actionpack` to version `5.0.0` will cause `rack` to be installed at version `2.0.1`

If the `upgrade` path comes back as an empty array (`[]`) then this means that there is no upgrade path available which would fix the issue.

### License issue

A license issue has no additional fields other than the ones in "Issue".

### Snyk organization

The organization in Snyk this request is applicable to. The organization determines the access rights, licenses policy and is the unit of billing for private projects.

A Snyk organization has these fields:

Property    | Type   | Description                   | Example                                |
-----------:| ------ | ----------------------------- | -------------------------------------- |
name        | string | The organization display name | "deelmaker"                            |
id          | string | The ID of the organization    | "3ab0f8d3-b17d-4953-ab6d-e1cbfe1df385" |

## Errors

This is a beta release of this API. Therefore, despite our efforts, errors might occur. In the unlikely event of such an error, it will have the following structure as JSON in the body:

Property    | Type   | Description                   | Example                                |
-----------:| ------ | ----------------------------- | -------------------------------------- |
message     | string | Error message with reference  | Error calling Snyk api (reference: 39db46b1-ad57-47e6-a87d-e34f6968030b) |
errorRef    | V4 uuid | An error ref to contact Snyk with | 39db46b1-ad57-47e6-a87d-e34f6968030b |

The error reference will also be supplied in the `x-error-reference` header in the server reply.

Example response:

```http
HTTP/1.1 500 Internal Server Error
x-error-reference: a45ec9c1-065b-4f7b-baf8-dbd1552ffc9f
Content-Type: application/json; charset=utf-8
Content-Length: 1848
Vary: Accept-Encoding
Date: Sun, 10 Sep 2017 06:48:40 GMT
```

## Rate Limiting

To ensure resilience against increasing request rates, we are starting to introduce rate-limiting.
We are monitoring the rate-limiting system to ensure minimal impact on users while ensuring system stability.
Current limit is up to 2000 requests per minute, per user. This limit is above industry standards, and is subject to change. As such, we recommend calls to the API are throttled regardless of the current limit.
All requests above the limit will get a response with status code `429` - `Too many requests` until requests stop for the duration of the rate-limiting interval (currently a minute).

## Consuming Webhooks

Webhooks are delivered with a `Content-Type` of `application/json`, with the event payload as JSON in the request body. We also send the following headers:

- `X-Snyk-Event` - the name of the event

- `X-Snyk-Transport-ID` - a GUID to identify this delivery

- `X-Snyk-Timestamp` - an ISO 8601 timestamp for when the event occurred, for example: `2020-09-25T15:27:53Z`

- `X-Hub-Signature` - the HMAC hex digest of the request body, used to secure your webhooks and ensure the request did indeed come from Snyk

- `User-Agent` - identifies the origin of the request, for example: `Snyk-Webhooks/XXX`

---

After your server is configured to receive payloads, it listens for any payload sent to the endpoint you configured. For security reasons, you should limit requests to those coming from Snyk.

### Validating payloads

All transports sent to your webhooks have a `X-Hub-Signature` header, which contains the hash signature for the transport. The signature is a HMAC hexdigest of the request body, generated using sha256 and your `secret` as the HMAC key.

You could use a function in Node.JS such as the following to validate these signatures on incoming requests from Snyk:

```javascript
import * as crypto from 'crypto';

function verifySignature(request, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const buffer = JSON.stringify(request.body);
  hmac.update(buffer, 'utf8');

  const signature = `sha256=${hmac.digest('hex')}`;

  return signature === request.headers['x-hub-signature'];
}
```

### Payload versioning

Payloads may evolve over time, and so are versioned. Payload versions are supplied as a suffix to the `X-Snyk-Event` header. For example, `project_snapshot/v0` indicates that the payload is `v0` of the `project_snapshot` event.

Version numbers only increment when a breaking change is made; for example, removing a field that used to exist, or changing the name of a field. Version numbers do not increment when making an additive change, such as adding a new field that never existed before.

**Note:** During the BETA phase, the structure of webhook payloads may change at any time, so we  recommend you check the payload version.

### Event types

While consuming a webhook event, `X-Snyk-Event` header must be checked, as an end-point may receive multiple event types.

#### ping

The ping event happens after a new webhook is created, and can also be manually triggered using the ping webhook API. This is useful to test that your webhook receives data from Snyk correctly.

The `ping` event makes the following request:

```jsx
POST /webhook-handler/snyk123 HTTP/1.1
Host: my.app.com
X-Snyk-Event: ping/v0
X-Snyk-Transport-ID: 998fe884-18a0-45db-8ae0-e379eea3bc0a
X-Snyk-Timestamp: 2020-09-25T15:27:53Z
X-Hub-Signature: sha256=7d38cdd689735b008b3c702edd92eea23791c5f6
User-Agent: Snyk-Webhooks/044aadd
Content-Type: application/json
{
  "webhookId": "d3cf26b3-2d77-497b-bce2-23b33cc15362"
}
```

#### project_snapshot

This event is triggered every time an existing project is tested and a new snapshot is created. It is triggered on every test of a project, whether or not there are new issues. This event is not triggered when a new project is created or imported. Currently supported targets/scan types are Open Source and container.

```jsx
POST /webhook-handler/snyk123 HTTP/1.1
Host: my.app.com
X-Snyk-Event: project_snapshot/v0
X-Snyk-Transport-ID: 998fe884-18a0-45db-8ae0-e379eea3bc0a
X-Snyk-Timestamp: 2020-09-25T15:27:53Z
X-Hub-Signature: sha256=7d38cdd689735b008b3c702edd92eea23791c5f6
User-Agent: Snyk-Webhooks/044aadd
Content-Type: application/json
{
  "project": { ... }, // project object matching API responses
  "org": { ... }, // organization object matching API responses
  "group": { ... }, // group object matching API responses
  "newIssues": [], // array of issues object matching API responses
  "removedIssues": [], // array of issues object matching API responses
}
```

####  Detailed example of a payload

##### project

see: [https://snyk.docs.apiary.io/#reference/projects](https://snyk.docs.apiary.io/#reference/projects)

```tsx
"project": {
  "name": "snyk/goof",
  "id": "af137b96-6966-46c1-826b-2e79ac49bbd9",
  "created": "2018-10-29T09:50:54.014Z",
  "origin": "github",
  "type": "maven",
  "readOnly": false,
  "testFrequency": "daily",
  "totalDependencies": 42,
  "issueCountsBySeverity": {
    "low": 13,
    "medium": 8,
    "high": 4,
    "critical": 5
  },
  "imageId": "sha256:caf27325b298a6730837023a8a342699c8b7b388b8d878966b064a1320043019",
  "imageTag": "latest",
  "imageBaseImage": "alpine:3",
  "imagePlatform": "linux/arm64",
  "imageCluster": "Production",
  "hostname": null,
  "remoteRepoUrl": "https://github.com/snyk/goof.git",
  "lastTestedDate": "2019-02-05T08:54:07.704Z",
  "browseUrl": "https://app.snyk.io/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/af137b96-6966-46c1-826b-2e79ac49bbd9",
  "importingUser": {
    "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",
    "name": "example-user@snyk.io",
    "username": "exampleUser",
    "email": "example-user@snyk.io"
  },
  "isMonitored": false,
  "branch": null,
  "targetReference": null,
  "tags": [
    {
      "key": "example-tag-key",
      "value": "example-tag-value"
    }
  ],
  "attributes": {
    "criticality": [
      "high"
    ],
    "environment": [
      "backend"
    ],
    "lifecycle": [
      "development"
    ]
  },
  "remediation": {
    "upgrade": {},
    "patch": {},
    "pin": {}
  }
}
```

##### org

see: [https://snyk.docs.apiary.io/#reference/organizations](https://snyk.docs.apiary.io/#reference/organizations)

```tsx
"org": {
  "name": "My Org",
  "id": "a04d9cbd-ae6e-44af-b573-0556b0ad4bd2",
  "slug": "my-org",
  "url": "https://api.snyk.io/org/my-org",
  "created": "2020-11-18T10:39:00.983Z"
}
```

##### group

see: [https://snyk.docs.apiary.io/#reference/groups](https://snyk.docs.apiary.io/#reference/groups)

```tsx
"group": {
  "name": "ACME Inc.",
   "id": "a060a49f-636e-480f-9e14-38e773b2a97f"
}
```

##### issue

see: https://snyk.docs.apiary.io/#reference/users/user-organization-notification-settings/list-all-aggregated-issues

```tsx
{
  "id": "npm:ms:20170412",
  "issueType": "vuln",
  "pkgName": "ms",
  "pkgVersions": [
    "1.0.0"
  ],
  "issueData": {
    "id": "npm:ms:20170412",
    "title": "Regular Expression Denial of Service (ReDoS)",
    "severity": "low",
    "url": "https://snyk.io/vuln/npm:ms:20170412",
    "description": "Lorem ipsum",
    "identifiers": {
      "CVE": [],
      "CWE": [
        "CWE-400"
      ],
      "ALTERNATIVE": [
        "SNYK-JS-MS-10509"
      ]
    },
    "credit": [
      "Snyk Security Research Team"
    ],
    "exploitMaturity": "no-known-exploit",
    "semver": {
      "vulnerable": [
        ">=0.7.1 <2.0.0"
      ]
    },
    "publicationTime": "2017-05-15T06:02:45Z",
    "disclosureTime": "2017-04-11T21:00:00Z",
    "CVSSv3": "CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:L",
    "cvssScore": 3.7,
    "language": "js",
    "patches": [
      {
        "id": "patch:npm:ms:20170412:2",
        "urls": [
          "https://snyk-patches.s3.amazonaws.com/npm/ms/20170412/ms_071.patch"
        ],
        "version": "=0.7.1",
        "comments": [],
        "modificationTime": "2019-12-03T11:40:45.866206Z"
      }
    ],
    "nearestFixedInVersion": "2.0.0"
  },
  "isPatched": false,
  "isIgnored": false,
  "fixInfo": {
    "isUpgradable": false,
    "isPinnable": false,
    "isPatchable": true,
    "nearestFixedInVersion": "2.0.0"
  },
  "priority": {
    "score": 399,
    "factors": [
      {
        "name": "isFixable",
        "description": "Has a fix available"
      },
      {
        "name": "cvssScore",
        "description": "CVSS 3.7"
      }
    ]
  }
}
```

Base URLs:

* <a href="https://api.snyk.io/api/v1">https://api.snyk.io/api/v1</a>

<h1 id="snyk-api-users">Users</h1>

For more information users and different user types see [Snyk docs](https://docs.snyk.io/introducing-snyk/snyks-core-concepts/groups-organizations-and-users#user-access-member-types).

## Get My Details

<a id="opIdGet My Details"></a>

> Code samples

```bash
curl https://example.com/user/me \
  -H 'Accept: application/json'
```

`GET /user/me`

> Example responses

> 200 Response

```json
{
  "email": "",
  "id": "",
  "orgs": [],
  "username": ""
}
```

> 401 Response

```json
{}
```

<h3 id="get-my-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|`API_KEY` is invalid.|None|

<h3 id="get-my-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email of the user.|
|id|string|false|none|The id of the user.|
|orgs|object|false|none|The organizations that the user belongs to.|
|username|string|false|none|The username of the user.|

<aside class="success">
This operation does not require authentication
</aside>

## Get organization notification settings

<a id="opIdGet organization notification settings"></a>

> Code samples

```bash
curl https://example.com/user/me/notification-settings/org/4a18d42f-0706-4ad0-b127-24078731fbed \
  -H 'Accept: application/json'
```

`GET /user/me/notification-settings/org/{orgId}`

<h3 id="get-organization-notification-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|

> Example responses

> 200 Response

```json
{
  "new-issues-remediations": {
    "enabled": true,
    "inherited": false,
    "issueSeverity": "high",
    "issueType": "vuln"
  },
  "project-imported": {
    "enabled": true,
    "inherited": false
  },
  "test-limit": {
    "enabled": true,
    "inherited": false
  },
  "weekly-report": {
    "enabled": true,
    "inherited": false
  }
}
```

<h3 id="get-organization-notification-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-organization-notification-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new-issues-remediations|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|» issueSeverity|string|true|none|The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)|
|» issueType|string|true|none|Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)|
|project-imported|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|test-limit|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|weekly-report|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|

#### Enumerated Values

|Property|Value|
|---|---|
|» issueSeverity|all|
|» issueSeverity|high|
|» issueType|all|
|» issueType|vuln|
|» issueType|license|
|» issueType|none|

<aside class="success">
This operation does not require authentication
</aside>

## Modify organization notification settings

<a id="opIdModify organization notification settings"></a>

> Code samples

```bash
curl https://example.com/user/me/notification-settings/org/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "new-issues-remediations": {
      "enabled": true,
      "issueSeverity": "high",
      "issueType": "vuln"
    },
    "project-imported": {
      "enabled": true
    },
    "test-limit": {
      "enabled": true
    },
    "weekly-report": {
      "enabled": true
    }
  }'
```

`PUT /user/me/notification-settings/org/{orgId}`

> Body parameter

```json
{
  "new-issues-remediations": {
    "enabled": true,
    "issueSeverity": "high",
    "issueType": "vuln"
  },
  "project-imported": {
    "enabled": true
  },
  "test-limit": {
    "enabled": true
  },
  "weekly-report": {
    "enabled": true
  }
}
```

<h3 id="modify-organization-notification-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|Automatically added|
|body|body|object|false|none|
|» new-issues-remediations|body|object|false|none|
|» » enabled|body|boolean|true|Whether notifications should be sent|
|» » issueSeverity|body|string|true|The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)|
|» » issueType|body|string|true|Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)|
|» project-imported|body|object|false|none|
|» » enabled|body|boolean|true|Whether notifications should be sent|
|» test-limit|body|object|false|none|
|» » enabled|body|boolean|true|Whether notifications should be sent|
|» weekly-report|body|object|false|none|
|» » enabled|body|boolean|true|Whether notifications should be sent|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » issueSeverity|all|
|» » issueSeverity|high|
|» » issueType|all|
|» » issueType|vuln|
|» » issueType|license|
|» » issueType|none|

> Example responses

> 200 Response

```json
{
  "new-issues-remediations": {
    "enabled": true,
    "inherited": false,
    "issueSeverity": "high",
    "issueType": "vuln"
  },
  "project-imported": {
    "enabled": true,
    "inherited": false
  },
  "test-limit": {
    "enabled": true,
    "inherited": false
  },
  "weekly-report": {
    "enabled": true,
    "inherited": false
  }
}
```

<h3 id="modify-organization-notification-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="modify-organization-notification-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new-issues-remediations|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|» issueSeverity|string|true|none|The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)|
|» issueType|string|true|none|Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)|
|project-imported|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|test-limit|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|weekly-report|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|

#### Enumerated Values

|Property|Value|
|---|---|
|» issueSeverity|all|
|» issueSeverity|high|
|» issueType|all|
|» issueType|vuln|
|» issueType|license|
|» issueType|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get project notification settings

<a id="opIdGet project notification settings"></a>

> Code samples

```bash
curl https://example.com/user/me/notification-settings/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/6d5813be-7e6d-4ab8-80c2-1e3e2a454545 \
  -H 'Accept: application/json'
```

`GET /user/me/notification-settings/org/{orgId}/project/{projectId}`

<h3 id="get-project-notification-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID to return notification settings for.|

> Example responses

> 200 Response

```json
{
  "new-issues-remediations": {
    "enabled": true,
    "inherited": false,
    "issueSeverity": "high",
    "issueType": "vuln"
  },
  "project-imported": {
    "enabled": true,
    "inherited": false
  },
  "test-limit": {
    "enabled": true,
    "inherited": false
  },
  "weekly-report": {
    "enabled": true,
    "inherited": false
  }
}
```

<h3 id="get-project-notification-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-project-notification-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new-issues-remediations|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|» issueSeverity|string|true|none|The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)|
|» issueType|string|true|none|Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)|
|project-imported|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|test-limit|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|weekly-report|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|

#### Enumerated Values

|Property|Value|
|---|---|
|» issueSeverity|all|
|» issueSeverity|high|
|» issueType|all|
|» issueType|vuln|
|» issueType|license|
|» issueType|none|

<aside class="success">
This operation does not require authentication
</aside>

## Modify project notification settings

<a id="opIdModify project notification settings"></a>

> Code samples

```bash
curl https://example.com/user/me/notification-settings/org/string/project/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "new-issues-remediations": {
      "enabled": true,
      "issueSeverity": "high",
      "issueType": "vuln"
    }
  }'
```

`PUT /user/me/notification-settings/org/{orgId}/project/{projectId}`

> Body parameter

```json
{
  "new-issues-remediations": {
    "enabled": true,
    "issueSeverity": "high",
    "issueType": "vuln"
  }
}
```

<h3 id="modify-project-notification-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|Automatically added|
|projectId|path|string|true|Automatically added|
|body|body|object|false|none|
|» new-issues-remediations|body|object|false|none|
|» » enabled|body|boolean|true|Whether notifications should be sent|
|» » issueSeverity|body|string|true|The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)|
|» » issueType|body|string|true|Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » issueSeverity|all|
|» » issueSeverity|high|
|» » issueType|all|
|» » issueType|vuln|
|» » issueType|license|
|» » issueType|none|

<h3 id="modify-project-notification-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get User Details

<a id="opIdGet User Details"></a>

> Code samples

```bash
curl https://example.com/user/4a18d42f-0706-4ad0-b127-24078731fbed \
  -H 'Accept: application/json'
```

`GET /user/{userId}`

<h3 id="get-user-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The users ID. The `API_KEY` must have admin access to at least one group or organization where the requested user is a member and must have the `api` entitlement on their preferred organization.|

> Example responses

> 200 Response

```json
{
  "email": "",
  "id": "",
  "name": "",
  "username": ""
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{}
```

> 404 Response

```json
{}
```

<h3 id="get-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The provided `id` is not in a valid format.|None|
|401|Unauthorized|`API_KEY` is invalid.|None|
|404|Not Found|The requested user could not be found or caller does not have sufficient permissions.|None|

<h3 id="get-user-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email of the user.|
|id|string|false|none|The id of the user.|
|name|string|false|none|The name of the user.|
|username|string|false|none|The username of the user.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="snyk-api-groups">Groups</h1>

Groups can contain multiple organizations, allowing you to collaborate with multiple teams. For more information on Groups, organizations, and users see [Snyk docs](https://docs.snyk.io/introducing-snyk/snyks-core-concepts/groups-organizations-and-users).

## List all members in a group

<a id="opIdList all members in a group"></a>

> Code samples

```bash
curl https://example.com/group/4a18d42f-0706-4ad0-b127-24078731fbed/members \
  -H 'Accept: application/json'
```

`GET /group/{groupId}/members`

<h3 id="list-all-members-in-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The group ID. The `API_KEY` must have access admin to this group.|

> Example responses

> 200 Response

```json
[
  {
    "email": "",
    "groupRole": "",
    "id": "",
    "name": "",
    "orgs": [
      {
        "name": "",
        "role": ""
      }
    ],
    "username": ""
  }
]
```

<h3 id="list-all-members-in-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-members-in-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add a member to an organization within a group

<a id="opIdAdd a member to an organization within a group"></a>

> Code samples

```bash
curl https://example.com/group/4a18d42f-0706-4ad0-b127-24078731fbed/org/4a18d42f-0706-4ad0-b127-24078731fbed/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "role": "",
    "userId": ""
  }'
```

`POST /group/{groupId}/org/{orgId}/members`

> Body parameter

```json
{
  "role": "",
  "userId": ""
}
```

<h3 id="add-a-member-to-an-organization-within-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The group ID. The `API_KEY` must have access admin to this group.|
|orgId|path|string|true|The organization ID we want to add the member to. The `API_KEY` must have access to this organization.|
|body|body|object|false|none|
|» role|body|string|false|The role of the user, "admin" or "collaborator".|
|» userId|body|string|false|The id of the user.|

<h3 id="add-a-member-to-an-organization-within-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all organizations in a group

<a id="opIdList all organizations in a group"></a>

> Code samples

```bash
curl https://example.com/group/a060a49f-636e-480f-9e14-38e773b2a97f/orgs \
  -H 'Accept: application/json'
```

`GET /group/{groupId}/orgs`

<h3 id="list-all-organizations-in-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The group ID. The `API_KEY` must have READ access to this group and LIST organizations access in this group.|
|perPage|query|number|false|The number of results to return (maximum is 100).|
|page|query|number|false|For pagination - offset (from which to start returning results).|
|name|query|string|false|Only organizations that have a name that **starts with** this value (case insensitive) will be returned.|

> Example responses

> 200 Response

```json
{
  "created": "2021-06-07T00:00:00.000Z",
  "id": "a060a49f-636e-480f-9e14-38e773b2a97f",
  "name": "ACME Inc.",
  "orgs": [
    {
      "created": "2021-06-07T00:00:00.000Z",
      "id": "689ce7f9-7943-4a71-b704-2ba575f01089",
      "name": "myDefaultOrg",
      "slug": "my-default-org",
      "url": "https://api.snyk.io/org/default-org"
    },
    {
      "created": "2021-06-07T00:00:00.000Z",
      "id": "a04d9cbd-ae6e-44af-b573-0556b0ad4bd2",
      "name": "My Other Org",
      "slug": "my-other-org",
      "url": "https://api.snyk.io/org/my-other-org"
    }
  ],
  "url": "https://api.snyk.io/group/0dfc509a-e7a9-48ef-9d39-649d6468fc09"
}
```

<h3 id="list-all-organizations-in-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all roles in a group

<a id="opIdList all roles in a group"></a>

> Code samples

```bash
curl https://example.com/group/a060a49f-636e-480f-9e14-38e773b2a97f/roles \
  -H 'Accept: application/json'
```

`GET /group/{groupId}/roles`

<h3 id="list-all-roles-in-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The group ID. The `API_KEY` must have READ access to this group.|

> Example responses

> 200 Response

```json
[
  {
    "created": "2021-04-22T16:02:53.233Z",
    "description": "Collaborator",
    "modified": "2021-04-22T16:02:53.332Z",
    "name": "Org Collaborator",
    "publicId": "6525b356-a400-465f-b2e5-3eee1161e69f"
  },
  {
    "created": "2021-04-22T16:02:53.233Z",
    "description": "Admin",
    "modified": "2021-04-22T16:02:53.332Z",
    "name": "Org Admin",
    "publicId": "af047fef-69f3-4bd9-9760-8957ce0d2ece"
  }
]
```

<h3 id="list-all-roles-in-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## View group settings

<a id="opIdView group settings"></a>

> Code samples

```bash
curl https://example.com/group/b61bc07c-27c6-42b3-8b04-0f228ed31a67/settings
```

`GET /group/{groupId}/settings`

<h3 id="view-group-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The group ID. The `API_KEY` must have admin access to this group.|

<h3 id="view-group-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="view-group-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestAccess|object|false|none|Can only be updated if `API_KEY` has edit access to request access settings.|
|» enabled|boolean|true|none|Choose whether a user may request access to Snyk orgs in this group that they are not a member of.|
|sessionLength|number|false|none|The new session length for the group in minutes. This must be an integer between 1 and 43200 (30 days). Setting this value to null will result in this group inheriting from the global default of 30 days.|

<aside class="success">
This operation does not require authentication
</aside>

## Update group settings

<a id="opIdUpdate group settings"></a>

> Code samples

```bash
curl https://example.com/group/string/settings \
  -X PUT
```

`PUT /group/{groupId}/settings`

<h3 id="update-group-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|Automatically added|

<h3 id="update-group-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-group-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestAccess|object|false|none|Can only be updated if `API_KEY` has edit access to request access settings.|
|» enabled|boolean|true|none|Choose whether a user may request access to Snyk orgs in this group that they are not a member of.|
|sessionLength|number|false|none|The new session length for the group in minutes. This must be an integer between 1 and 43200 (30 days). Setting this value to null will result in this group inheriting from the global default of 30 days.|

<aside class="success">
This operation does not require authentication
</aside>

## List all tags in a group

<a id="opIdList all tags in a group"></a>

> Code samples

```bash
curl https://example.com/group/4a18d42f-0706-4ad0-b127-24078731fbed/tags \
  -H 'Accept: application/json'
```

`GET /group/{groupId}/tags`

<h3 id="list-all-tags-in-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The group ID. The `API_KEY` must have access admin to this group.|
|perPage|query|number|false|The number of results to return (the default is 1000).|
|page|query|number|false|The offset from which to start returning results from.|

> Example responses

> 200 Response

```json
{
  "tags": [
    {
      "key": "meta",
      "value": "Alfa"
    },
    {
      "key": "meta",
      "value": "Bravo"
    },
    {
      "key": "meta",
      "value": "Charlie"
    },
    {
      "key": "meta",
      "value": "Delta"
    },
    {
      "key": "meta",
      "value": "Echo"
    },
    {
      "key": "meta",
      "value": "Foxtrot"
    },
    {
      "key": "meta",
      "value": "Golf"
    },
    {
      "key": "meta",
      "value": "Hotel"
    },
    {
      "key": "meta",
      "value": "India"
    },
    {
      "key": "meta",
      "value": "Juliet"
    }
  ]
}
```

<h3 id="list-all-tags-in-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-tags-in-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[object]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete tag from group

<a id="opIdDelete tag from group"></a>

> Code samples

```bash
curl https://example.com/group/4a18d42f-0706-4ad0-b127-24078731fbed/tags/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "force": false,
    "key": "",
    "value": ""
  }'
```

`POST /group/{groupId}/tags/delete`

> Body parameter

```json
{
  "force": false,
  "key": "",
  "value": ""
}
```

<h3 id="delete-tag-from-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The group ID. The `API_KEY` must have access admin to this group.|
|body|body|object|false|none|
|» force|body|boolean|false|force delete tag that has entities (default is `false`).|
|» key|body|string|false|Valid tag key.|
|» value|body|string|false|Valid tag value.|

> Example responses

> 200 Response

```json
{
  "force": false,
  "key": "",
  "value": ""
}
```

<h3 id="delete-tag-from-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="delete-tag-from-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|force|boolean|false|none|force delete tag that has entities (default is `false`).|
|key|string|false|none|Valid tag key.|
|value|string|false|none|Valid tag value.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="snyk-api-organizations">Organizations</h1>

For more information on organizations see [Snyk docs](https://docs.snyk.io/introducing-snyk/snyks-core-concepts/groups-organizations-and-users#snyk-organizations).

## Create a new organization

<a id="opIdCreate a new organization"></a>

> Code samples

```bash
curl https://example.com/org \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "groupId": "4a18d42f-0706-4ad0-b127-24078731fbed",
    "name": "new-org",
    "sourceOrgId": "6b4a3261-b68f-43a0-9218-1f082e77f879"
  }'
```

`POST /org`

> Body parameter

```json
{
  "groupId": "4a18d42f-0706-4ad0-b127-24078731fbed",
  "name": "new-org",
  "sourceOrgId": "6b4a3261-b68f-43a0-9218-1f082e77f879"
}
```

<h3 id="create-a-new-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» groupId|body|string|false|The group ID. The `API_KEY` must have access to this group.|
|» name|body|string|true|The name of the new organization|
|» sourceOrgId|body|string|false|The id of an organization to copy settings from.<br><br>If provided, this organization must be associated with the same group.<br><br>The items that will be copied are: <br>Source control integrations (GitHub, GitLab, BitBucket)<br>\+ Container registries integrations (ACR, Docker Hub, ECR, GCR)<br>\+ Container orchestrators integrations (Kubernetes)<br>\+ PaaS and Serverless Integrations (Heroku, AWS Lambda)<br>\+ Notification integrations (Slack, Jira)<br>\+ Policies<br>\+ Ignore settings<br>\+ Language settings<br>\+ Infrastructure as Code settings<br>\+ Snyk Code settings<br><br>The following will not be copied across:<br>Service accounts<br>\+ Members<br>\+ Projects<br>\+ Notification preferences|

> Example responses

> 201 Response

```json
{
  "created": "2021-01-07T16:07:16.237Z",
  "group": {
    "id": "4a18d42f-0706-4ad0-b127-24078731fbed",
    "name": "test-group"
  },
  "id": "0356f641-c55c-488f-af05-c2122590f369",
  "name": "new-org",
  "slug": "new-org",
  "url": "https://snyk.io/org/new-org"
}
```

> 400 Response

```json
{
  "errorRef": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "errorRef": "string",
  "message": "string"
}
```

> 422 Response

```json
{
  "errorRef": "string",
  "message": "string"
}
```

<h3 id="create-a-new-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|400|Bad Request|A group of errors that happened in the process of creating a new organization and were unexpected|Inline|
|401|Unauthorized|Authorization errors.|Inline|
|422|Unprocessable Entity|A group of errors that show input errors about the parameters provided in the request.|Inline|

<h3 id="create-a-new-organization-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorRef|string|false|none|[UUID] An error ref to contact Snyk with|
|message|string|false|none|The error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorRef|string|false|none|[UUID] An error ref to contact Snyk with|
|message|string|false|none|The error message|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorRef|string|false|none|[UUID] An error ref to contact Snyk with|
|message|string|false|none|The error message|

<aside class="success">
This operation does not require authentication
</aside>

## Remove organization

<a id="opIdRemove organization"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed \
  -X DELETE
```

`DELETE /org/{orgId}`

<h3 id="remove-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have permission to delete the provided organization. Currently this operation is only supported for organizations without any projects.|

<h3 id="remove-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Invite users

<a id="opIdInvite users"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "email": ""
  }'
```

`POST /org/{orgId}/invite`

> Body parameter

```json
{
  "email": ""
}
```

<h3 id="invite-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have admin access to this organization.|
|body|body|object|false|none|
|» email|body|string|false|The email of the user.|
|» isAdmin|body|boolean|false|(optional) Set the role as admin.|

<h3 id="invite-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List Members

<a id="opIdList Members"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/members \
  -H 'Accept: application/json'
```

`GET /org/{orgId}/members`

<h3 id="list-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID.|
|includeGroupAdmins|query|boolean|false|Include group administrators who also have access to this organization.|

> Example responses

> 200 Response

```json
[
  {
    "email": "",
    "id": "",
    "name": "",
    "role": "",
    "username": ""
  }
]
```

<h3 id="list-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update a member's role in the organization

<a id="opIdUpdate a member's role in the organization"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/members/update/4a18d42f-0706-4ad0-b127-24078731fbed \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "rolePublicId": ""
  }'
```

`PUT /org/{orgId}/members/update/{userId}`

> Body parameter

```json
{
  "rolePublicId": ""
}
```

<h3 id="update-a-members-role-in-the-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have admin access to this organization.|
|userId|path|string|true|The user ID.|
|body|body|object|false|none|
|» rolePublicId|body|string|false|The new role public ID to update the user to.|

<h3 id="update-a-members-role-in-the-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a member in the organization

<a id="opIdUpdate a member in the organization"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/members/4a18d42f-0706-4ad0-b127-24078731fbed \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "role": ""
  }'
```

`PUT /org/{orgId}/members/{userId}`

> Body parameter

```json
{
  "role": ""
}
```

<h3 id="update-a-member-in-the-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have admin access to this organization.|
|userId|path|string|true|The user ID.|
|body|body|object|false|none|
|» role|body|string|false|The new role of the user, "admin" or "collaborator".|

<h3 id="update-a-member-in-the-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a member from the organization

<a id="opIdRemove a member from the organization"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/members/4a18d42f-0706-4ad0-b127-24078731fbed \
  -X DELETE
```

`DELETE /org/{orgId}/members/{userId}`

<h3 id="remove-a-member-from-the-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must admin have access to this organization.|
|userId|path|string|true|The user ID we want to remove.|

<h3 id="remove-a-member-from-the-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get organization notification settings

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/notification-settings \
  -H 'Accept: application/json'
```

`GET /org/{orgId}/notification-settings`

<h3 id="get-organization-notification-settings-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|

> Example responses

> 200 Response

```json
{
  "new-issues-remediations": {
    "enabled": true,
    "inherited": false,
    "issueSeverity": "high",
    "issueType": "vuln"
  },
  "project-imported": {
    "enabled": true,
    "inherited": false
  },
  "test-limit": {
    "enabled": true,
    "inherited": false
  },
  "weekly-report": {
    "enabled": true,
    "inherited": false
  }
}
```

<h3 id="get-organization-notification-settings-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-organization-notification-settings-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new-issues-remediations|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|» issueSeverity|string|true|none|The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)|
|» issueType|string|true|none|Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)|
|project-imported|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|test-limit|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|weekly-report|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|

#### Enumerated Values

|Property|Value|
|---|---|
|» issueSeverity|all|
|» issueSeverity|high|
|» issueType|all|
|» issueType|vuln|
|» issueType|license|
|» issueType|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set notification settings

<a id="opIdSet notification settings"></a>

> Code samples

```bash
curl https://example.com/org/string/notification-settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "new-issues-remediations": {
      "enabled": true,
      "issueSeverity": "high",
      "issueType": "vuln"
    },
    "project-imported": {
      "enabled": true
    },
    "test-limit": {
      "enabled": true
    },
    "weekly-report": {
      "enabled": true
    }
  }'
```

`PUT /org/{orgId}/notification-settings`

> Body parameter

```json
{
  "new-issues-remediations": {
    "enabled": true,
    "issueSeverity": "high",
    "issueType": "vuln"
  },
  "project-imported": {
    "enabled": true
  },
  "test-limit": {
    "enabled": true
  },
  "weekly-report": {
    "enabled": true
  }
}
```

<h3 id="set-notification-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|Automatically added|
|body|body|object|false|none|
|» new-issues-remediations|body|object|false|none|
|» » enabled|body|boolean|true|Whether notifications should be sent|
|» » issueSeverity|body|string|true|The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)|
|» » issueType|body|string|true|Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)|
|» project-imported|body|object|false|none|
|» » enabled|body|boolean|true|Whether notifications should be sent|
|» test-limit|body|object|false|none|
|» » enabled|body|boolean|true|Whether notifications should be sent|
|» weekly-report|body|object|false|none|
|» » enabled|body|boolean|true|Whether notifications should be sent|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » issueSeverity|all|
|» » issueSeverity|high|
|» » issueType|all|
|» » issueType|vuln|
|» » issueType|license|
|» » issueType|none|

> Example responses

> 200 Response

```json
{
  "new-issues-remediations": {
    "enabled": true,
    "inherited": false,
    "issueSeverity": "high",
    "issueType": "vuln"
  },
  "project-imported": {
    "enabled": true,
    "inherited": false
  },
  "test-limit": {
    "enabled": true,
    "inherited": false
  },
  "weekly-report": {
    "enabled": true,
    "inherited": false
  }
}
```

<h3 id="set-notification-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="set-notification-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new-issues-remediations|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|» issueSeverity|string|true|none|The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)|
|» issueType|string|true|none|Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)|
|project-imported|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|test-limit|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|
|weekly-report|object|false|none|none|
|» enabled|boolean|true|none|Whether notifications should be sent|
|» inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|

#### Enumerated Values

|Property|Value|
|---|---|
|» issueSeverity|all|
|» issueSeverity|high|
|» issueType|all|
|» issueType|vuln|
|» issueType|license|
|» issueType|none|

<aside class="success">
This operation does not require authentication
</aside>

## List pending user provisions

<a id="opIdList pending user provisions"></a>

> Code samples

```bash
curl https://example.com/org/25065eb1-109c-4c3e-9503-68fc56ef6f44/provision \
  -H 'Accept: application/json'
```

`GET /org/{orgId}/provision`

<h3 id="list-pending-user-provisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID.|

> Example responses

> 200 Response

```json
[
  {
    "created": "",
    "email": "",
    "role": "",
    "rolePublicId": ""
  }
]
```

<h3 id="list-pending-user-provisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|403|Forbidden|Provided `API_KEY` has no user provision permission or does not have permissions in role being provisioned.|None|

<h3 id="list-pending-user-provisions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Provision a user to the organization

<a id="opIdProvision a user to the organization"></a>

> Code samples

```bash
curl https://example.com/org/25065eb1-109c-4c3e-9503-68fc56ef6f44/provision \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "",
    "role": "",
    "rolePublicId": ""
  }'
```

`POST /org/{orgId}/provision`

> Body parameter

```json
{
  "email": "",
  "role": "",
  "rolePublicId": ""
}
```

<h3 id="provision-a-user-to-the-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must not exceed the permissions being granted to the provisioned user.|
|body|body|object|false|none|
|» email|body|string|true|The email of the user.|
|» role|body|string|false|Deprecated. Name of the role to grant this user. Must be one of `ADMIN`, `COLLABORATOR`, or `RESTRICTED_COLLABORATOR`. This field is invalid if `rolePublicId` is supplied with the request.|
|» rolePublicId|body|string|false|ID of the role to grant this user.|

> Example responses

> 200 Response

```json
{
  "created": "",
  "email": "",
  "role": "",
  "rolePublicId": ""
}
```

<h3 id="provision-a-user-to-the-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|403|Forbidden|Provided `API_KEY` has no user provision permission or does not have permissions in role being provisioned.|None|

<h3 id="provision-a-user-to-the-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string|false|none|Timestamp of when this provision record was created.|
|email|string|false|none|The email of the user.|
|role|string|false|none|Name of the role granted for this user.|
|rolePublicId|string|false|none|ID of the role to granted for this user.|

<aside class="success">
This operation does not require authentication
</aside>

## Delete pending user provision

<a id="opIdDelete pending user provision"></a>

> Code samples

```bash
curl https://example.com/org/25065eb1-109c-4c3e-9503-68fc56ef6f44/provision \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /org/{orgId}/provision`

<h3 id="delete-pending-user-provision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID.|

> Example responses

> 200 Response

```json
{
  "ok": false
}
```

<h3 id="delete-pending-user-provision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|403|Forbidden|Provided `API_KEY` has no user provision permission or does not have permissions in role being provisioned.|None|

<h3 id="delete-pending-user-provision-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|Deletion succeeded.|

<aside class="success">
This operation does not require authentication
</aside>

## View organization settings

<a id="opIdView organization settings"></a>

> Code samples

```bash
curl https://example.com/org/25065eb1-109c-4c3e-9503-68fc56ef6f44/settings \
  -H 'Accept: application/json'
```

`GET /org/{orgId}/settings`

<h3 id="view-organization-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|

> Example responses

> 200 Response

```json
{
  "requestAccess": {
    "enabled": true
  }
}
```

<h3 id="view-organization-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="view-organization-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestAccess|object|false|none|Will only be returned if `API_KEY` has read access to request access settings.|
|» enabled|boolean|true|none|Whether requesting access to the organization is enabled.|

<aside class="success">
This operation does not require authentication
</aside>

## Update organization settings

<a id="opIdUpdate organization settings"></a>

> Code samples

```bash
curl https://example.com/org/25065eb1-109c-4c3e-9503-68fc56ef6f44/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "requestAccess": {
      "enabled": true
    }
  }'
```

`PUT /org/{orgId}/settings`

Settings that are not provided will not be modified.

> Body parameter

```json
{
  "requestAccess": {
    "enabled": true
  }
}
```

<h3 id="update-organization-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have admin access to this organization.|
|body|body|object|false|none|
|» requestAccess|body|object|false|Can only be updated if `API_KEY` has edit access to request access settings.|
|» » enabled|body|boolean|true|Whether requesting access to the organization is enabled.|

> Example responses

> 200 Response

```json
{
  "requestAccess": {
    "enabled": true
  }
}
```

<h3 id="update-organization-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|403|Forbidden|If provided a setting that the `API_KEY` has no edit permission for.|None|

<h3 id="update-organization-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestAccess|object|false|none|Will only be returned if `API_KEY` has read access to request access settings.|
|» enabled|boolean|true|none|Whether requesting access to the organization is enabled.|

<aside class="success">
This operation does not require authentication
</aside>

## List all the organizations a user belongs to

<a id="opIdList all the organizations a user belongs to"></a>

> Code samples

```bash
curl https://example.com/orgs \
  -H 'Accept: application/json'
```

`GET /orgs`

> Example responses

> 200 Response

```json
{
  "orgs": [
    {
      "group": null,
      "id": "689ce7f9-7943-4a71-b704-2ba575f01089",
      "name": "defaultOrg",
      "slug": "default-org",
      "url": "https://api.snyk.io/org/default-org"
    },
    {
      "group": {
        "id": "a060a49f-636e-480f-9e14-38e773b2a97f",
        "name": "ACME Inc."
      },
      "id": "a04d9cbd-ae6e-44af-b573-0556b0ad4bd2",
      "name": "My Other Org",
      "slug": "my-other-org",
      "url": "https://api.snyk.io/org/my-other-org"
    }
  ]
}
```

<h3 id="list-all-the-organizations-a-user-belongs-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="snyk-api-integrations">Integrations</h1>

Integrations are connections to places where code lives. They can be configured from the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) page.

## List

<a id="opIdList"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/integrations \
  -H 'Accept: application/json'
```

`GET /org/{orgId}/integrations`

<h3 id="list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization public ID. The `API_KEY` must have admin access to this organization.|

> Example responses

> 200 Response

```json
{
  "bitbucket-cloud": "6jje4c92-e7rn-t59a-f456-8n5675432fe9",
  "github": "9a3e5d90-b782-468a-a042-9a2073736f0b",
  "gitlab": "1b3e3d90-c678-347a-n232-6a3453738h1e"
}
```

<h3 id="list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Add new integration

<a id="opIdAdd new integration"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/integrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "credentials": {
      "token": "GITHUB_TOKEN"
    },
    "type": "github"
  }'
```

`POST /org/{orgId}/integrations`

Add new integration for given organization.

> Body parameter

```json
{
  "credentials": {
    "token": "GITHUB_TOKEN"
  },
  "type": "github"
}
```

<h3 id="add-new-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have admin access to this organization.|
|body|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» credentials|body|object|true|credentials for given integration|
|» » *oneOf*|body|object|false|none|
|» » AcrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `name.azurecr.io`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » ArtifactoryCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `name.jfrog.io`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » AzureReposCredentials|body|object|false|none|
|» » » url|body|string|true|none|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » BitbucketCloudCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » BitbucketServerCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » url|body|string|true|none|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » DigitalOceanCrCredentials|body|object|false|none|
|» » » token|body|string|true|Personal Access Token|
|» » *oneOf*|body|object|false|none|
|» » DockerHubCredentials|body|object|false|none|
|» » » password|body|string|true|Access Token|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » EcrCredentials|body|object|false|none|
|» » » region|body|string|true|e.g.: `eu-west-3`|
|» » » roleArn|body|string|true|e.g.: `arn:aws:iam::<account-id>:role/<newRole>`|
|» » *oneOf*|body|object|false|none|
|» » GcrCredentials|body|object|false|none|
|» » » password|body|string|true|JSON key file|
|» » » registryBase|body|string|true|e.g.: `gcr.io`, `us.gcr.io`, `eu.gcr.io`, `asia.gcr.io`|
|» » *oneOf*|body|object|false|none|
|» » GitHubCredentials|body|object|false|none|
|» » » token|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » GitHubCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `ghcr.io`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » GitHubEnterpriseCredentials|body|object|false|none|
|» » » token|body|string|true|none|
|» » » url|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » GitLabCredentials|body|object|false|none|
|» » » token|body|string|true|none|
|» » » url|body|string|false|for self-hosted GitLab only|
|» » *oneOf*|body|object|false|none|
|» » GitLabCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `your.gitlab.host`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » GoogleArtifactCrCredentials|body|object|false|none|
|» » » password|body|string|true|JSON key file|
|» » » registryBase|body|string|true|e.g.: `us-east1-docker.pkg.dev`, `europe-west1-docker.pkg.dev`|
|» » *oneOf*|body|object|false|none|
|» » HarborCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `your.harbor.host`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » NexusCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `your.nexus.host`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » QuayCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `quay.io`, `your.quay.host`|
|» » » username|body|string|true|none|
|» type|body|string|true|integration type|
|» *anyOf*|body|object|false|none|
|» broker|body|object|true|brokered integration settings|
|» » enabled|body|boolean|false|none|
|» type|body|string|true|integration type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|acr|
|» type|artifactory-cr|
|» type|azure-repos|
|» type|bitbucket-cloud|
|» type|bitbucket-server|
|» type|digitalocean-cr|
|» type|docker-hub|
|» type|ecr|
|» type|gcr|
|» type|github|
|» type|github-cr|
|» type|github-enterprise|
|» type|gitlab|
|» type|gitlab-cr|
|» type|google-artifact-cr|
|» type|harbor-cr|
|» type|nexus-cr|
|» type|quay-cr|
|» type|acr|
|» type|artifactory-cr|
|» type|azure-repos|
|» type|bitbucket-cloud|
|» type|bitbucket-server|
|» type|digitalocean-cr|
|» type|docker-hub|
|» type|ecr|
|» type|gcr|
|» type|github|
|» type|github-cr|
|» type|github-enterprise|
|» type|gitlab|
|» type|gitlab-cr|
|» type|google-artifact-cr|
|» type|harbor-cr|
|» type|nexus-cr|
|» type|quay-cr|

> Example responses

> 200 Response

```json
{
  "brokerToken": "4a18d42f-0706-4ad0-b127-24078731fbed",
  "id": "9a3e5d90-b782-468a-a042-9a2073736f0b"
}
```

<h3 id="add-new-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update existing integration

<a id="opIdUpdate existing integration"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/integrations/9a3e5d90-b782-468a-a042-9a2073736f0b \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "broker": {
      "enabled": true
    },
    "type": "github"
  }'
```

`PUT /org/{orgId}/integrations/{integrationId}`

+ Update integration's credentials for given organization. Integration must be **not brokered**

+ Enable or disable brokered integration for given organization. *Credentials required for disabling brokered integration*

Examples in right section:

1. Set up a broker for an existing integration

2. Update credentials for an existing non-brokered integration

3. Disable broker for an existing integration

> Body parameter

```json
{
  "broker": {
    "enabled": true
  },
  "type": "github"
}
```

<h3 id="update-existing-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have admin access to this organization.|
|integrationId|path|string|true|The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.|
|body|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» broker|body|object|true|brokered integration settings|
|» » enabled|body|boolean|false|none|
|» type|body|string|true|integration type|
|» *anyOf*|body|object|false|none|
|» credentials|body|object|true|credentials for given integration|
|» » *oneOf*|body|object|false|none|
|» » AcrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `name.azurecr.io`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » ArtifactoryCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `name.jfrog.io`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » AzureReposCredentials|body|object|false|none|
|» » » url|body|string|true|none|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » BitbucketCloudCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » BitbucketServerCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » url|body|string|true|none|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » DigitalOceanCrCredentials|body|object|false|none|
|» » » token|body|string|true|Personal Access Token|
|» » *oneOf*|body|object|false|none|
|» » DockerHubCredentials|body|object|false|none|
|» » » password|body|string|true|Access Token|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » EcrCredentials|body|object|false|none|
|» » » region|body|string|true|e.g.: `eu-west-3`|
|» » » roleArn|body|string|true|e.g.: `arn:aws:iam::<account-id>:role/<newRole>`|
|» » *oneOf*|body|object|false|none|
|» » GcrCredentials|body|object|false|none|
|» » » password|body|string|true|JSON key file|
|» » » registryBase|body|string|true|e.g.: `gcr.io`, `us.gcr.io`, `eu.gcr.io`, `asia.gcr.io`|
|» » *oneOf*|body|object|false|none|
|» » GitHubCredentials|body|object|false|none|
|» » » token|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » GitHubCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `ghcr.io`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » GitHubEnterpriseCredentials|body|object|false|none|
|» » » token|body|string|true|none|
|» » » url|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » GitLabCredentials|body|object|false|none|
|» » » token|body|string|true|none|
|» » » url|body|string|false|for self-hosted GitLab only|
|» » *oneOf*|body|object|false|none|
|» » GitLabCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `your.gitlab.host`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » GoogleArtifactCrCredentials|body|object|false|none|
|» » » password|body|string|true|JSON key file|
|» » » registryBase|body|string|true|e.g.: `us-east1-docker.pkg.dev`, `europe-west1-docker.pkg.dev`|
|» » *oneOf*|body|object|false|none|
|» » HarborCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `your.harbor.host`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » NexusCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `your.nexus.host`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » QuayCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `quay.io`, `your.quay.host`|
|» » » username|body|string|true|none|
|» type|body|string|true|integration type|
|» *anyOf*|body|object|false|none|
|» broker|body|object|true|brokered integration settings|
|» » enabled|body|boolean|false|none|
|» credentials|body|object|true|credentials for given integration|
|» » *oneOf*|body|object|false|none|
|» » AcrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `name.azurecr.io`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » ArtifactoryCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `name.jfrog.io`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » AzureReposCredentials|body|object|false|none|
|» » » url|body|string|true|none|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » BitbucketCloudCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » BitbucketServerCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » url|body|string|true|none|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » DigitalOceanCrCredentials|body|object|false|none|
|» » » token|body|string|true|Personal Access Token|
|» » *oneOf*|body|object|false|none|
|» » DockerHubCredentials|body|object|false|none|
|» » » password|body|string|true|Access Token|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » EcrCredentials|body|object|false|none|
|» » » region|body|string|true|e.g.: `eu-west-3`|
|» » » roleArn|body|string|true|e.g.: `arn:aws:iam::<account-id>:role/<newRole>`|
|» » *oneOf*|body|object|false|none|
|» » GcrCredentials|body|object|false|none|
|» » » password|body|string|true|JSON key file|
|» » » registryBase|body|string|true|e.g.: `gcr.io`, `us.gcr.io`, `eu.gcr.io`, `asia.gcr.io`|
|» » *oneOf*|body|object|false|none|
|» » GitHubCredentials|body|object|false|none|
|» » » token|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » GitHubCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `ghcr.io`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » GitHubEnterpriseCredentials|body|object|false|none|
|» » » token|body|string|true|none|
|» » » url|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » GitLabCredentials|body|object|false|none|
|» » » token|body|string|true|none|
|» » » url|body|string|false|for self-hosted GitLab only|
|» » *oneOf*|body|object|false|none|
|» » GitLabCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `your.gitlab.host`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » GoogleArtifactCrCredentials|body|object|false|none|
|» » » password|body|string|true|JSON key file|
|» » » registryBase|body|string|true|e.g.: `us-east1-docker.pkg.dev`, `europe-west1-docker.pkg.dev`|
|» » *oneOf*|body|object|false|none|
|» » HarborCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `your.harbor.host`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » NexusCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `your.nexus.host`|
|» » » username|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » QuayCrCredentials|body|object|false|none|
|» » » password|body|string|true|none|
|» » » registryBase|body|string|true|e.g.: `quay.io`, `your.quay.host`|
|» » » username|body|string|true|none|
|» type|body|string|true|integration type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|acr|
|» type|artifactory-cr|
|» type|azure-repos|
|» type|bitbucket-cloud|
|» type|bitbucket-server|
|» type|digitalocean-cr|
|» type|docker-hub|
|» type|ecr|
|» type|gcr|
|» type|github|
|» type|github-cr|
|» type|github-enterprise|
|» type|gitlab|
|» type|gitlab-cr|
|» type|google-artifact-cr|
|» type|harbor-cr|
|» type|nexus-cr|
|» type|quay-cr|
|» type|acr|
|» type|artifactory-cr|
|» type|azure-repos|
|» type|bitbucket-cloud|
|» type|bitbucket-server|
|» type|digitalocean-cr|
|» type|docker-hub|
|» type|ecr|
|» type|gcr|
|» type|github|
|» type|github-cr|
|» type|github-enterprise|
|» type|gitlab|
|» type|gitlab-cr|
|» type|google-artifact-cr|
|» type|harbor-cr|
|» type|nexus-cr|
|» type|quay-cr|
|» type|acr|
|» type|artifactory-cr|
|» type|azure-repos|
|» type|bitbucket-cloud|
|» type|bitbucket-server|
|» type|digitalocean-cr|
|» type|docker-hub|
|» type|ecr|
|» type|gcr|
|» type|github|
|» type|github-cr|
|» type|github-enterprise|
|» type|gitlab|
|» type|gitlab-cr|
|» type|google-artifact-cr|
|» type|harbor-cr|
|» type|nexus-cr|
|» type|quay-cr|

> Example responses

> 200 Response

```json
{
  "id": "9a3e5d90-b782-468a-a042-9a2073736f0b"
}
```

<h3 id="update-existing-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete credentials

<a id="opIdDelete credentials"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/integrations/4a18d42f-0706-4ad0-b127-24078731fbed/authentication \
  -X DELETE
```

`DELETE /org/{orgId}/integrations/{integrationId}/authentication`

Removes any credentials set for this integration. If this is a brokered connection the operation will have no effect.

<h3 id="delete-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|
|integrationId|path|string|true|The integration ID.|

<h3 id="delete-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Provision new broker token

<a id="opIdProvision new broker token"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/integrations/4a18d42f-0706-4ad0-b127-24078731fbed/authentication/provision-token \
  -X POST \
  -H 'Accept: application/json'
```

`POST /org/{orgId}/integrations/{integrationId}/authentication/provision-token`

Issue a new and unique provisional broker token for the brokered integration.

Used for zero down-time token rotation with the Snyk Broker. Once provisioned, the token can be used to initialize a new broker client before using the switch API to update the token in use by the integration.

The new provisional token will fail to be created if the integration, or any other integration in the same group, already has one provisioned.

<h3 id="provision-new-broker-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The `API_KEY` must have access to this organization.|
|integrationId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "9a3e5d90-b782-468a-a042-9a2073736f0b",
  "provisionalBrokerToken": "4a18d42f-0706-4ad0-b127-24078731fbed"
}
```

<h3 id="provision-new-broker-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Switch between broker tokens

<a id="opIdSwitch between broker tokens"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/integrations/4a18d42f-0706-4ad0-b127-24078731fbed/authentication/switch-token \
  -X POST
```

`POST /org/{orgId}/integrations/{integrationId}/authentication/switch-token`

Switch the existing broker token with the provisioned token for this integration and any other in the same group.
Only perform this action when you have a Broker client running with the provisioned token.
This action will fail if there is no token provisioned for this integration or any integration in the same group.

<h3 id="switch-between-broker-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The `API_KEY` must have access to this organization.|
|integrationId|path|string|true|none|

<h3 id="switch-between-broker-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Clone an integration (with settings and credentials)

<a id="opIdClone an integration (with settings and credentials)"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/integrations/4a18d42f-0706-4ad0-b127-24078731fbed/clone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationOrgPublicId": "9a3e5d90-b782-468a-a042-9a2073736f0b1"
  }'
```

`POST /org/{orgId}/integrations/{integrationId}/clone`

Clone an integration, including all of its settings and credentials from one organization to another organization in the same group.
This API supports both brokered and non-brokered integrations.

Use this API for when you want to share a Broker token between several Snyk organizations (integrations).

> Body parameter

```json
{
  "destinationOrgPublicId": "9a3e5d90-b782-468a-a042-9a2073736f0b1"
}
```

<h3 id="clone-an-integration-with-settings-and-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|Source organization public ID to clone integration settings from. The `API_KEY` must have access to this organization.|
|integrationId|path|string|true|Source integration public ID to clone.|
|body|body|object|false|none|
|» destinationOrgPublicId|body|string|true|The organization public ID. The `API_KEY` must have access to this organization.|

> Example responses

> 200 Response

```json
{
  "newIntegrationId": "9a3e5d90-b782-468a-a042-9a2073736f0b"
}
```

<h3 id="clone-an-integration-with-settings-and-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve

<a id="opIdRetrieve"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/integrations/9a3e5d90-b782-468a-a042-9a2073736f0b/settings
```

`GET /org/{orgId}/integrations/{integrationId}/settings`

<h3 id="retrieve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have admin access to this organization.|
|integrationId|path|string|true|The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.|

<h3 id="retrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="retrieve-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoDepUpgradeEnabled|boolean|false|none|Defines if the functionality is enabled|
|autoDepUpgradeIgnoredDependencies|[object]|false|none|A list of strings defining what dependencies should be ignored|
|autoDepUpgradeLimit|number|false|none|A limit on how many automatic dependency upgrade PRs can be opened simultaneously|
|autoDepUpgradeMinAge|number|false|none|The age (in days) that an automatic dependency check is valid for|
|autoRemediationPrs|object|false|none|Defines automatic remediation policies|
|» backlogPrsEnabled|boolean|false|none|If true, allows automatic remediation of prioritized backlog issues|
|» freshPrsEnabled|boolean|false|none|If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified|
|» usePatchRemediation|boolean|false|none|If true, allows using patched remediation|
|dockerfileSCMEnabled|boolean|false|none|If true, will automatically detect and scan Dockerfiles in your Git repositories, surface base image vulnerabilities and recommend possible fixes|
|manualRemediationPrs|object|false|none|Defines manual remediation policies|
|» usePatchRemediation|boolean|false|none|If true, allows using patched remediation|
|pullRequestAssignment|object|false|none|assign Snyk pull requests|
|» assignees|[object]|false|none|an array of usernames that have contributed to the organization's project(s).|
|» enabled|boolean|false|none|if the organization's project(s) will assign Snyk pull requests.|
|» type|string|false|none|a string representing the type of assignment your projects require.|
|pullRequestFailOnAnyVulns|boolean|false|none|If an opened PR should fail to be validated if any vulnerable dependencies have been detected|
|pullRequestFailOnlyForHighSeverity|boolean|false|none|If an opened PR only should fail its validation if any dependencies are marked as being of high severity|
|pullRequestTestEnabled|boolean|false|none|If opened PRs should be tested|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|auto|
|» type|manual|

<aside class="success">
This operation does not require authentication
</aside>

## Update

<a id="opIdUpdate"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/integrations/9a3e5d90-b782-468a-a042-9a2073736f0b/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "autoDepUpgradeEnabled": false,
    "autoDepUpgradeIgnoredDependencies": [],
    "autoDepUpgradeLimit": 2,
    "autoDepUpgradeMinAge": 21,
    "autoRemediationPrs": {
      "backlogPrsEnabled": false,
      "freshPrsEnabled": true,
      "usePatchRemediation": false
    },
    "dockerfileSCMEnabled": true,
    "manualRemediationPrs": {
      "useManualPatchRemediation": false
    },
    "pullRequestAssignment": {
      "assignees": [
        "username"
      ],
      "enabled": true,
      "type": "manual"
    },
    "pullRequestFailOnAnyVulns": false,
    "pullRequestFailOnlyForHighSeverity": true,
    "pullRequestTestEnabled": true
  }'
```

`PUT /org/{orgId}/integrations/{integrationId}/settings`

> Body parameter

```json
{
  "autoDepUpgradeEnabled": false,
  "autoDepUpgradeIgnoredDependencies": [],
  "autoDepUpgradeLimit": 2,
  "autoDepUpgradeMinAge": 21,
  "autoRemediationPrs": {
    "backlogPrsEnabled": false,
    "freshPrsEnabled": true,
    "usePatchRemediation": false
  },
  "dockerfileSCMEnabled": true,
  "manualRemediationPrs": {
    "useManualPatchRemediation": false
  },
  "pullRequestAssignment": {
    "assignees": [
      "username"
    ],
    "enabled": true,
    "type": "manual"
  },
  "pullRequestFailOnAnyVulns": false,
  "pullRequestFailOnlyForHighSeverity": true,
  "pullRequestTestEnabled": true
}
```

<h3 id="update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have admin access to this organization.|
|integrationId|path|string|true|The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.|
|body|body|object|false|none|
|» autoDepUpgradeEnabled|body|boolean|false|Defines if the functionality is enabled|
|» autoDepUpgradeIgnoredDependencies|body|[object]|false|A list of strings defining what dependencies should be ignored|
|» autoDepUpgradeLimit|body|number|false|A limit on how many automatic dependency upgrade PRs can be opened simultaneously|
|» autoDepUpgradeMinAge|body|number|false|The age (in days) that an automatic dependency check is valid for|
|» autoRemediationPrs|body|object|false|Defines automatic remediation policies|
|» » backlogPrsEnabled|body|boolean|false|If true, allows automatic remediation of prioritized backlog issues|
|» » freshPrsEnabled|body|boolean|false|If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified|
|» » usePatchRemediation|body|boolean|false|If true, allows using patched remediation|
|» dockerfileSCMEnabled|body|boolean|false|If true, will automatically detect and scan Dockerfiles in your Git repositories, surface base image vulnerabilities and recommend possible fixes|
|» manualRemediationPrs|body|object|false|Defines manual remediation policies|
|» » usePatchRemediation|body|boolean|false|If true, allows using patched remediation|
|» pullRequestAssignment|body|object|false|assign Snyk pull requests|
|» » assignees|body|[object]|false|an array of usernames that have contributed to the organization's project(s).|
|» » enabled|body|boolean|false|if the organization's project(s) will assign Snyk pull requests.|
|» » type|body|string|false|a string representing the type of assignment your projects require.|
|» pullRequestFailOnAnyVulns|body|boolean|false|If an opened PR should fail to be validated if any vulnerable dependencies have been detected|
|» pullRequestFailOnlyForHighSeverity|body|boolean|false|If an opened PR only should fail its validation if any dependencies are marked as being of high severity|
|» pullRequestTestEnabled|body|boolean|false|If opened PRs should be tested|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|auto|
|» » type|manual|

> Example responses

> 200 Response

```json
{
  "autoDepUpgradeEnabled": false,
  "autoDepUpgradeIgnoredDependencies": [],
  "autoDepUpgradeLimit": 2,
  "autoDepUpgradeMinAge": 21,
  "autoRemediationPrs": {
    "backlogPrsEnabled": false,
    "freshPrsEnabled": true,
    "usePatchRemediation": false
  },
  "dockerfileSCMEnabled": true,
  "manualRemediationPrs": {
    "useManualPatchRemediation": false
  },
  "pullRequestAssignment": {
    "assignees": [
      "username"
    ],
    "enabled": true,
    "type": "manual"
  },
  "pullRequestFailOnAnyVulns": false,
  "pullRequestFailOnlyForHighSeverity": true,
  "pullRequestTestEnabled": true
}
```

<h3 id="update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoDepUpgradeEnabled|boolean|false|none|Defines if the functionality is enabled|
|autoDepUpgradeIgnoredDependencies|[object]|false|none|A list of strings defining what dependencies should be ignored|
|autoDepUpgradeLimit|number|false|none|A limit on how many automatic dependency upgrade PRs can be opened simultaneously|
|autoDepUpgradeMinAge|number|false|none|The age (in days) that an automatic dependency check is valid for|
|autoRemediationPrs|object|false|none|Defines automatic remediation policies|
|» backlogPrsEnabled|boolean|false|none|If true, allows automatic remediation of prioritized backlog issues|
|» freshPrsEnabled|boolean|false|none|If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified|
|» usePatchRemediation|boolean|false|none|If true, allows using patched remediation|
|dockerfileSCMEnabled|boolean|false|none|If true, will automatically detect and scan Dockerfiles in your Git repositories, surface base image vulnerabilities and recommend possible fixes|
|manualRemediationPrs|object|false|none|Defines manual remediation policies|
|» usePatchRemediation|boolean|false|none|If true, allows using patched remediation|
|pullRequestAssignment|object|false|none|assign Snyk pull requests|
|» assignees|[object]|false|none|an array of usernames that have contributed to the organization's project(s).|
|» enabled|boolean|false|none|if the organization's project(s) will assign Snyk pull requests.|
|» type|string|false|none|a string representing the type of assignment your projects require.|
|pullRequestFailOnAnyVulns|boolean|false|none|If an opened PR should fail to be validated if any vulnerable dependencies have been detected|
|pullRequestFailOnlyForHighSeverity|boolean|false|none|If an opened PR only should fail its validation if any dependencies are marked as being of high severity|
|pullRequestTestEnabled|boolean|false|none|If opened PRs should be tested|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|auto|
|» type|manual|

<aside class="success">
This operation does not require authentication
</aside>

## Get existing integration by type

<a id="opIdGet existing integration by type"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/integrations/github \
  -H 'Accept: application/json'
```

`GET /org/{orgId}/integrations/{type}`

<h3 id="get-existing-integration-by-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The `API_KEY` must have admin access to this organization.|
|type|path|string|true|Integration type.|

> Example responses

> 200 Response

```json
{
  "id": "9a3e5d90-b782-468a-a042-9a2073736f0b"
}
```

<h3 id="get-existing-integration-by-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-existing-integration-by-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Alphanumeric UUID including - with a limit of 36 characters|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="snyk-api-import-projects">Import Projects</h1>

Import projects into Snyk. Projects can be Git repositories, Docker images, containers, configuration files and much more. See the [Projects and Targets documentation](https://docs.snyk.io/getting-started/introduction-to-snyk-projects#targets) for more information. A typical import would start with requesting a target to be processed and then polling the Import Job API for further details on completion and resulting Snyk projects.

## Import targets

<a id="opIdImport targets"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/integrations/9a3e5d90-b782-468a-a042-9a2073736f0b/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "files": [
      {
        "path": "example/package.json"
      }
    ],
    "target": {
      "branch": "main",
      "name": "goof",
      "owner": "org-security"
    }
  }'
```

`POST /org/{orgId}/integrations/{integrationId}/import`

> Body parameter

```json
{
  "files": [
    {
      "path": "example/package.json"
    }
  ],
  "target": {
    "branch": "main",
    "name": "goof",
    "owner": "org-security"
  }
}
```

<h3 id="import-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have admin access to this organization.|
|integrationId|path|string|true|The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.|
|body|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» exclusionGlobs|body|string|false|a comma-separated list of up to 10 folder names to exclude from scanning (each folder name must not exceed 100 characters). If not specified, it will default to "fixtures, tests, \_\_tests\_\_, node_modules". If an empty string is provided - no folders will be excluded. This attribute is only respected with Open Source and Container scan targets.|
|» files|body|[object]|false|an array of file objects|
|» target|body|object|false|none|
|» » branch|body|string|true|default branch of the repo (Please contact support if you want to import a non default repo branch)|
|» » name|body|string|true|name of the repo|
|» » owner|body|string|true|for Github: account owner of the repository; for Azure Repos, this is `Project ID`; for Bitbucket Cloud, this is the `Workspace ID`|
|» *anyOf*|body|object|false|none|
|» exclusionGlobs|body|string|false|a comma-separated list of up to 10 folder names to exclude from scanning. If not specified, it will default to "fixtures, tests, \_\_tests\_\_, node_modules". If an empty string is provided - no folders will be excluded. This attribute is only respected with Open Source and Container scan targets.|
|» files|body|[object]|false|an array of file objects|
|» target|body|object|false|none|
|» » branch|body|string|true|repo branch|
|» » id|body|number|true|id of the repo|
|» *anyOf*|body|object|false|none|
|» exclusionGlobs|body|string|false|a comma-separated list of up to 10 folder names to exclude from scanning. If not specified, it will default to "fixtures, tests, \_\_tests\_\_, node_modules". If an empty string is provided - no folders will be excluded. This attribute is only respected with Open Source and Container scan targets.|
|» files|body|[object]|false|an array of file objects|
|» target|body|object|false|none|
|» » branch|body|string|false|target branch name|
|» » name|body|string|false|custom name for the project|
|» » projectKey|body|string|true|project key|
|» » repoSlug|body|string|true|slug of the repo|
|» *anyOf*|body|object|false|none|
|» files|body|[object]|false|an array of file objects|
|» target|body|object|false|none|
|» » appId|body|string|true|ID of the app|
|» » slugId|body|string|true|ID of the slug|
|» *anyOf*|body|object|false|none|
|» files|body|[object]|false|an array of file objects|
|» target|body|object|false|none|
|» » functionId|body|string|true|ID of the app|
|» *anyOf*|body|object|false|none|
|» files|body|[object]|false|an array of file objects|
|» target|body|object|false|none|
|» » appId|body|string|true|ID of the app|
|» *anyOf*|body|object|false|none|
|» target|body|object|false|none|
|» » name|body|string|true|image name including tag prefixed by organization name|
|» *anyOf*|body|object|false|none|
|» target|body|object|false|none|
|» » name|body|string|true|image name including tag|
|» *anyOf*|body|object|false|none|
|» target|body|object|false|none|
|» » name|body|string|true|image name including tag prefixed by project id or project name|

<h3 id="import-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get import job details

<a id="opIdGet import job details"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/integrations/9a3e5d90-b782-468a-a042-9a2073736f0b/import/1a325d9d-b782-468a-a242-9a2073734f0b \
  -H 'Accept: application/json'
```

`GET /org/{orgId}/integrations/{integrationId}/import/{jobId}`

<h3 id="get-import-job-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have admin access to this organization.|
|integrationId|path|string|true|The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.|
|jobId|path|string|true|The ID of the job. This can be found in the Location response header from the corresponding POST request that triggered the import job.|

> Example responses

> 200 Response

```json
{
  "created": "2018-07-23T15:21:10.611Z",
  "id": "dce061f7-ce0f-4ccf-b49b-4335d1205bd9",
  "logs": [
    {
      "created": "2018-07-23T15:21:10.643Z",
      "name": "org1/repo1",
      "projects": [],
      "status": "failed"
    },
    {
      "created": "2018-07-23T15:21:10.644Z",
      "name": "org2/repo2",
      "projects": [
        {
          "projectUrl": "https://snyk.io/org/org-name/project/7eeaee25-5f9b-4d05-8818-4cca2c9d9adc",
          "success": true,
          "targetFile": "package.json"
        }
      ],
      "status": "complete"
    },
    {
      "created": "2018-07-23T15:21:10.643Z",
      "name": "org3/repo3",
      "projects": [
        {
          "projectUrl": "https://snyk.io/org/org-name/project/0382897c-0617-4429-86df-51187dfd42f6",
          "success": true,
          "targetFile": "package.json"
        }
      ],
      "status": "pending"
    }
  ],
  "status": "pending"
}
```

<h3 id="get-import-job-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-import-job-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string|false|none|the time when an import job was created represented as a [UTC (ISO-8601)](https://tools.ietf.org/html/rfc3339) string|
|id|string|false|none|A uuid representing the job's id|
|logs|[object]|false|none|all organizations imported by the job|
|status|string|false|none|a string representing the status of a job.<br><br>One of: pending, failed, aborted or complete.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="snyk-api-projects">Projects</h1>

A project is a package that is actively tracked by Snyk.

## Retrieve a single project

<a id="opIdRetrieve a single project"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/463c1ee5-31bc-428c-b451-b79a3270db08 \
  -H 'Accept: application/json'
```

`GET /org/{orgId}/project/{projectId}`

<h3 id="retrieve-a-single-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID the project belongs to. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID.|

> Example responses

> 200 Response

```json
{
  "attributes": {
    "criticality": [
      "high"
    ],
    "environment": [
      "backend"
    ],
    "lifecycle": [
      "development"
    ]
  },
  "branch": null,
  "browseUrl": "https://app.snyk.io/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/af137b96-6966-46c1-826b-2e79ac49bbd9",
  "created": "2018-10-29T09:50:54.014Z",
  "hostname": null,
  "id": "af137b96-6966-46c1-826b-2e79ac49bbd9",
  "imageBaseImage": "alpine:3",
  "imageCluster": "Production",
  "imageId": "sha256:caf27325b298a6730837023a8a342699c8b7b388b8d878966b064a1320043019",
  "imagePlatform": "linux/arm64",
  "imageTag": "latest",
  "importingUser": {
    "email": "example-user@snyk.io",
    "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",
    "name": "example-user@snyk.io",
    "username": "exampleUser"
  },
  "isMonitored": false,
  "issueCountsBySeverity": {
    "critical": 3,
    "high": 1,
    "low": 13,
    "medium": 8
  },
  "lastTestedDate": "2019-02-05T08:54:07.704Z",
  "name": "snyk/goof",
  "origin": "github",
  "owner": null,
  "readOnly": false,
  "remediation": {
    "patch": {},
    "pin": {},
    "upgrade": {}
  },
  "remoteRepoUrl": "https://github.com/snyk/goof.git",
  "tags": [
    {
      "key": "example-tag-key",
      "value": "example-tag-value"
    }
  ],
  "targetReference": null,
  "testFrequency": "daily",
  "totalDependencies": 42,
  "type": "maven"
}
```

<h3 id="retrieve-a-single-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="retrieve-a-single-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Applied project attributes|
|» criticality|[object]|false|none|none|
|» environment|[object]|false|none|none|
|» lifecycle|[object]|false|none|none|
|branch|string \| null|false|none|The monitored branch (if available)|
|browseUrl|string|false|none|URL with project overview|
|created|string|false|none|The date that the project was created on|
|hostname|string \| null|false|none|The hostname for a CLI project, null if not set|
|id|string|false|none|The project identifier|
|imageBaseImage|string|false|none|For docker projects shows the base image|
|imageCluster|string|false|none|For Kubernetes projects shows the origin cluster name|
|imageId|string|false|none|For docker projects shows the ID of the image|
|imagePlatform|string|false|none|For docker projects shows the platform of the image|
|imageTag|string|false|none|For docker projects shows the tag of the image|
|importingUser|object|false|none|The user who imported the project|
|» email|string|false|none|The email of the user.|
|» id|string|false|none|The ID of the user.|
|» name|string|false|none|The name of the user.|
|» username|string|false|none|The username of the user.|
|isMonitored|boolean|false|none|Describes if a project is currently monitored or it is de-activated|
|issueCountsBySeverity|object|false|none|Number of known vulnerabilities in the project, not including ignored issues|
|» critical|number|false|none|Number of critical severity vulnerabilities|
|» high|number|false|none|Number of high severity vulnerabilities|
|» low|number|false|none|Number of low severity vulnerabilities|
|» medium|number|false|none|Number of medium severity vulnerabilities|
|lastTestedDate|string|false|none|The date on which the most recent test was conducted for this project|
|name|string|false|none|none|
|origin|string|false|none|The origin the project was added from|
|owner|object \| null|false|none|The user who owns the project, null if not set<br><br>{<br>    "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",<br>    "name": "example-user@snyk.io",<br>    "username": "exampleUser",<br>    "email": "example-user@snyk.io"<br>}|
|readOnly|boolean|false|none|Whether the project is read-only|
|remediation|object|false|none|Remediation data (if available)|
|» patch|object|false|none|Recommended patches to apply to the project<br><br>(object)<br>   paths (array) - List of paths to the vulnerable dependency that can be patched|
|» pin|object|false|none|Recommended pins to apply to the project (Python only)<br><br>(object)<br>    + upgradeTo (string, required) - `package@version` to upgrade to<br>    + vulns (array[string], required) - List of vulnerability ids that will be fixed as part of this upgrade<br>    + isTransitive (boolean) - Describes if the dependency to be pinned is a transitive dependency|
|» upgrade|object|false|none|Recommended upgrades to apply to the project<br><br>(object)<br>    + upgradeTo (string, required) - `package@version` to upgrade to<br>    + upgrades (array[string], required) -  List of `package@version` that will be upgraded as part of this upgrade<br>    + vulns (array[string], required) - List of vulnerability ids that will be fixed as part of this upgrade|
|remoteRepoUrl|string|false|none|The project remote repository url. Only set for projects imported via the Snyk CLI tool.|
|tags|[object]|false|none|List of applied tags|
|targetReference|string \| null|false|none|The identifier for which revision of the resource is scanned by Snyk. For example this may be a branch for SCM project, or a tag for a container image|
|testFrequency|string|false|none|The frequency of automated Snyk re-test. Can be 'daily', 'weekly or 'never'|
|totalDependencies|number|false|none|Number of dependencies of the project|
|type|string|false|none|The package manager of the project|

<aside class="success">
This operation does not require authentication
</aside>

## Update a project

<a id="opIdUpdate a project"></a>

> Code samples

```bash
curl https://example.com/org/string/project/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "branch": "main",
    "owner": {
      "id": "1acd4d09-5602-4d04-9640-045fe928aaea"
    }
  }'
```

`PUT /org/{orgId}/project/{projectId}`

> Body parameter

```json
{
  "branch": "main",
  "owner": {
    "id": "1acd4d09-5602-4d04-9640-045fe928aaea"
  }
}
```

<h3 id="update-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|Automatically added|
|projectId|path|string|true|Automatically added|
|body|body|object|false|none|
|» branch|body|string|false|The branch that this project should be monitoring|
|» owner|body|object|false|Set to `null` to remove all ownership. User must be a member of the same organization as the project.|
|» » id|body|string|false|A user to assign as the project owner.|

> Example responses

> 200 Response

```json
{
  "attributes": {
    "criticality": [
      "high"
    ],
    "environment": [
      "backend"
    ],
    "lifecycle": [
      "development"
    ]
  },
  "branch": null,
  "browseUrl": "https://app.snyk.io/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/af137b96-6966-46c1-826b-2e79ac49bbd9",
  "created": "2018-10-29T09:50:54.014Z",
  "hostname": null,
  "id": "af137b96-6966-46c1-826b-2e79ac49bbd9",
  "imageBaseImage": "alpine:3",
  "imageCluster": "Production",
  "imageId": "sha256:caf27325b298a6730837023a8a342699c8b7b388b8d878966b064a1320043019",
  "imagePlatform": "linux/arm64",
  "imageTag": "latest",
  "importingUser": {
    "email": "example-user@snyk.io",
    "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",
    "name": "example-user@snyk.io",
    "username": "exampleUser"
  },
  "isMonitored": false,
  "issueCountsBySeverity": {
    "critical": 3,
    "high": 1,
    "low": 13,
    "medium": 8
  },
  "lastTestedDate": "2019-02-05T08:54:07.704Z",
  "name": "snyk/goof",
  "origin": "github",
  "owner": null,
  "readOnly": false,
  "remediation": {
    "patch": {},
    "pin": {},
    "upgrade": {}
  },
  "remoteRepoUrl": "https://github.com/snyk/goof.git",
  "tags": [
    {
      "key": "example-tag-key",
      "value": "example-tag-value"
    }
  ],
  "targetReference": null,
  "testFrequency": "daily",
  "totalDependencies": 42,
  "type": "maven"
}
```

<h3 id="update-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-a-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Applied project attributes|
|» criticality|[object]|false|none|none|
|» environment|[object]|false|none|none|
|» lifecycle|[object]|false|none|none|
|branch|string \| null|false|none|The monitored branch (if available)|
|browseUrl|string|false|none|URL with project overview|
|created|string|false|none|The date that the project was created on|
|hostname|string \| null|false|none|The hostname for a CLI project, null if not set|
|id|string|false|none|The project identifier|
|imageBaseImage|string|false|none|For docker projects shows the base image|
|imageCluster|string|false|none|For Kubernetes projects shows the origin cluster name|
|imageId|string|false|none|For docker projects shows the ID of the image|
|imagePlatform|string|false|none|For docker projects shows the platform of the image|
|imageTag|string|false|none|For docker projects shows the tag of the image|
|importingUser|object|false|none|The user who imported the project|
|» email|string|false|none|The email of the user.|
|» id|string|false|none|The ID of the user.|
|» name|string|false|none|The name of the user.|
|» username|string|false|none|The username of the user.|
|isMonitored|boolean|false|none|Describes if a project is currently monitored or it is de-activated|
|issueCountsBySeverity|object|false|none|Number of known vulnerabilities in the project, not including ignored issues|
|» critical|number|false|none|Number of critical severity vulnerabilities|
|» high|number|false|none|Number of high severity vulnerabilities|
|» low|number|false|none|Number of low severity vulnerabilities|
|» medium|number|false|none|Number of medium severity vulnerabilities|
|lastTestedDate|string|false|none|The date on which the most recent test was conducted for this project|
|name|string|false|none|none|
|origin|string|false|none|The origin the project was added from|
|owner|object \| null|false|none|The user who owns the project, null if not set<br><br>{<br>    "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",<br>    "name": "example-user@snyk.io",<br>    "username": "exampleUser",<br>    "email": "example-user@snyk.io"<br>}|
|readOnly|boolean|false|none|Whether the project is read-only|
|remediation|object|false|none|Remediation data (if available)|
|» patch|object|false|none|Recommended patches to apply to the project<br><br>(object)<br>   paths (array) - List of paths to the vulnerable dependency that can be patched|
|» pin|object|false|none|Recommended pins to apply to the project (Python only)<br><br>(object)<br>    + upgradeTo (string, required) - `package@version` to upgrade to<br>    + vulns (array[string], required) - List of vulnerability ids that will be fixed as part of this upgrade<br>    + isTransitive (boolean) - Describes if the dependency to be pinned is a transitive dependency|
|» upgrade|object|false|none|Recommended upgrades to apply to the project<br><br>(object)<br>    + upgradeTo (string, required) - `package@version` to upgrade to<br>    + upgrades (array[string], required) -  List of `package@version` that will be upgraded as part of this upgrade<br>    + vulns (array[string], required) - List of vulnerability ids that will be fixed as part of this upgrade|
|remoteRepoUrl|string|false|none|The project remote repository url. Only set for projects imported via the Snyk CLI tool.|
|tags|[object]|false|none|List of applied tags|
|targetReference|string \| null|false|none|The identifier for which revision of the resource is scanned by Snyk. For example this may be a branch for SCM project, or a tag for a container image|
|testFrequency|string|false|none|The frequency of automated Snyk re-test. Can be 'daily', 'weekly or 'never'|
|totalDependencies|number|false|none|Number of dependencies of the project|
|type|string|false|none|The package manager of the project|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a project

<a id="opIdDelete a project"></a>

> Code samples

```bash
curl https://example.com/org/string/project/string \
  -X DELETE
```

`DELETE /org/{orgId}/project/{projectId}`

<h3 id="delete-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|Automatically added|
|projectId|path|string|true|Automatically added|

<h3 id="delete-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Activate

<a id="opIdActivate"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/463c1ee5-31bc-428c-b451-b79a3270db08/activate \
  -X POST
```

`POST /org/{orgId}/project/{projectId}/activate`

Activating a project will:

- Add a repository webhook for supported integrations.

- Enable pull request tests for new vulnerabilities.

- Open Fix pull request for newly disclosed vulnerabilities.

- Enable recurring tests, sending email alerts about newly disclosed vulnerabilities.

<h3 id="activate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID the project belongs to. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID.|

<h3 id="activate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all Aggregated issues

<a id="opIdList all Aggregated issues"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/6d5813be-7e6d-4ab8-80c2-1e3e2a454545/aggregated-issues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "includeDescription": false,
    "includeIntroducedThrough": false
  }'
```

`POST /org/{orgId}/project/{projectId}/aggregated-issues`

> Body parameter

```json
{
  "includeDescription": false,
  "includeIntroducedThrough": false
}
```

<h3 id="list-all-aggregated-issues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID to return issues for.|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » exploitMaturity|body|[object]|false|The exploit maturity levels of issues to filter the results by (Non-IaC projects only)|
|» » ignored|body|boolean|false|If set to `true`, only include issues which are ignored, if set to `false`, only include issues which are not ignored|
|» » patched|body|boolean|false|If set to `true`, only include issues which are patched, if set to `false`, only include issues which are not patched (Non-IaC projects only)|
|» » priority|body|object|false|The priority to filter the issues by (Non-IaC projects only)|
|» » » score|body|object|false|Include issues where the priority score is between min and max|
|» » » » max|body|number|false|none|
|» » » » min|body|number|false|none|
|» » severities|body|[object]|false|The severity levels of issues to filter the results by|
|» » types|body|[object]|false|The type of issues to filter the results by (Non-IaC projects only)|
|» includeDescription|body|boolean|false|If set to `true`, Include issue's description, if set to `false` (by default), it won't (Non-IaC projects only)|
|» includeIntroducedThrough|body|boolean|false|If set to `true`, Include issue's introducedThrough, if set to `false` (by default), it won't. It's for container only projects (Non-IaC projects only)|

> Example responses

> 200 Response

```json
{
  "issues": [
    {
      "fixInfo": {
        "fixedIn": [
          "2.0.0"
        ],
        "isFixable": false,
        "isPartiallyFixable": false,
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "nearestFixedInVersion": "2.0.0"
      },
      "id": "npm:ms:20170412",
      "ignoreReasons": [
        {
          "expires": "",
          "reason": "",
          "source": "cli"
        }
      ],
      "introducedThrough": [
        {
          "data": {},
          "kind": "imageLayer"
        }
      ],
      "isIgnored": false,
      "isPatched": false,
      "issueData": {
        "CVSSv3": "CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:L",
        "credit": [
          "Snyk Security Research Team"
        ],
        "cvssScore": 3.7,
        "description": "`## Overview\\r\\n[`ms`](https://www.npmjs.com/package/ms) is a tiny millisecond conversion utility.\\r\\n\\r\\nAffected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) due to an incomplete fix for previously reported vulnerability [npm:ms:20151024](https://snyk.io/vuln/npm:ms:20151024). The fix limited the length of accepted input string to 10,000 characters, and turned to be insufficient making it possible to block the event loop for 0.3 seconds (on a typical laptop) with a specially crafted string passed to `ms",
        "disclosureTime": "2017-04-11T21:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "id": "npm:ms:20170412",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-400"
          ],
          "OSVDB": []
        },
        "isMaliciousPackage": true,
        "language": "js",
        "nearestFixedInVersion": "2.0.0",
        "originalSeverity": "high",
        "patches": [
          {
            "comments": [],
            "id": "patch:npm:ms:20170412:0",
            "modificationTime": "2019-12-03T11:40:45.863964Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/ms/20170412/ms_100.patch"
            ],
            "version": "=1.0.0"
          }
        ],
        "path": "[DocId: 1].input.spec.template.spec.containers[snyk2].securityContext.privileged",
        "publicationTime": "2017-05-15T06:02:45Z",
        "semver": {
          "unaffected": "",
          "vulnerable": [
            ">=0.7.1 <2.0.0"
          ]
        },
        "severity": "low",
        "title": "Regular Expression Denial of Service (ReDoS)",
        "url": "https://snyk.io/vuln/npm:ms:20170412",
        "violatedPolicyPublicId": "SNYK-CC-K8S-1"
      },
      "issueType": "vuln",
      "links": {
        "paths": ""
      },
      "pkgName": "ms",
      "pkgVersions": [
        "1.0.0"
      ],
      "priority": {
        "factors": [
          "name: `isFixable`",
          "description: `Has a fix available`"
        ],
        "score": 399
      }
    }
  ]
}
```

<h3 id="list-all-aggregated-issues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-aggregated-issues-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|[object]|false|none|An array of identified issues|
|» fixInfo|object|false|none|Information about fix/upgrade/pinnable options for the issue (Non-IaC projects only)|
|» » fixedIn|[object]|false|none|The set of versions in which this issue has been fixed. If the issue spanned multiple versions (i.e. `1.x` and `2.x`) then there will be multiple `fixedIn` entries|
|» » isFixable|boolean|false|none|Whether all of the issue's paths are fixable. Paths that are already patched are not considered fixable unless they have an alternative remediation (e.g. pinning or upgrading). An upgrade path where the only changes are in transitive dependencies is only considered fixable if the package manager supports it.|
|» » isPartiallyFixable|boolean|false|none|Whether any of the issue's paths can be fixed. Paths that are already patched are not considered fixable unless they have an alternative remediation (e.g. pinning or upgrading).  An upgrade path where the only changes are in transitive dependencies is only considered fixable if the package manager supports it.|
|» » isPatchable|boolean|false|none|Whether all the of issue's paths are patchable|
|» » isPinnable|boolean|false|none|Whether the issue can be fixed by pinning a transitive|
|» » isUpgradable|boolean|false|none|Whether all of the issue's paths are upgradable|
|» » nearestFixedInVersion|string|false|none|Nearest version which includes a fix for the issue. This is populated for container projects only.|
|» id|string|true|none|The identifier of the issue|
|» ignoreReasons|[object]|false|none|The list of reasons why the issue was ignored|
|» introducedThrough|[object]|false|none|The list of what introduced the issue (it is available only for container project with Dockerfile)|
|» isIgnored|boolean|true|none|Whether the issue has been ignored|
|» isPatched|boolean|true|none|Whether the issue has been patched (Non-IaC projects only)|
|» issueData|object|true|none|The details of the issue|
|» » CVSSv3|string|true|none|The CVSS v3 string that signifies how the CVSS score was calculated (Non-IaC projects only)|
|» » credit|[object]|true|none|The list of people responsible for first uncovering or reporting the issue (Non-IaC projects only)|
|» » cvssScore|number|true|none|The CVSS score that results from running the CVSSv3 string (Non-IaC projects only)|
|» » description|string|true|none|none|
|» » disclosureTime|string|true|none|The date that the vulnerability was first disclosed|
|» » exploitMaturity|string|true|none|The exploit maturity of the issue|
|» » id|string|true|none|The identifier of the issue|
|» » identifiers|object|true|none|External identifiers assigned to the issue (Non-IaC projects only)|
|» » » CVE|[object]|false|none|Common Vulnerability Enumeration identifiers|
|» » » CWE|[object]|false|none|Common Weakness Enumeration identifiers|
|» » » OSVDB|[object]|false|none|Identifiers assigned by the Open Source Vulnerability Database (OSVDB)|
|» » isMaliciousPackage|boolean|true|none|Whether the issue is intentional, indicating a malicious package|
|» » language|string|true|none|The language of the issue (Non-IaC projects only)|
|» » nearestFixedInVersion|string|true|none|Nearest version which includes a fix for the issue. This is populated for container projects only. (Non-IaC projects only)|
|» » originalSeverity|string|true|none|The original severity status of the issue, as retrieved from Snyk Vulnerability database, before policies are applied|
|» » patches|[object]|true|none|A list of patches available for the given issue (Non-IaC projects only)|
|» » path|string|true|none|Path to the resource property violating the policy within the scanned project. (IaC projects only)|
|» » publicationTime|string|true|none|The date that the vulnerability was first published by Snyk (Non-IaC projects only)|
|» » semver|object|true|none|The ranges that are vulnerable and unaffected by the issue (Non-IaC projects only)|
|» » » unaffected|string|false|none|The ranges that are unaffected by the issue|
|» » » vulnerable|[object]|false|none|The ranges that are vulnerable to the issue. May be an array or a string.|
|» » severity|string|true|none|The severity status of the issue, after policies are applied|
|» » title|string|true|none|The issue title|
|» » url|string|true|none|URL to a page containing information about the issue|
|» » violatedPolicyPublicId|string|true|none|The ID of the violated policy in the issue (IaC projects only)|
|» issueType|string|true|none|type of the issue ('vuln', 'license' or 'configuration')|
|» links|object|false|none|Onward links from this record (Non-IaC projects only)|
|» » paths|string|false|none|The URL for the dependency paths that introduce this issue|
|» pkgName|string|true|none|The package name (Non-IaC projects only)|
|» pkgVersions|[string]|true|none|List of affected package versions (Non-IaC projects only)|
|» priority|object|false|none|Information about the priority of the issue (Non-IaC projects only)|
|» » factors|[object]|false|none|The list of factors that contributed to the priority of the issue|
|» » score|number|false|none|The priority score of the issue|

<aside class="success">
This operation does not require authentication
</aside>

## Applying attributes

<a id="opIdApplying attributes"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/6d5813be-7e6d-4ab8-80c2-1e3e2a454545/attributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "criticality": [
      "high"
    ],
    "environment": [
      "backend"
    ],
    "lifecycle": [
      "development"
    ]
  }'
```

`POST /org/{orgId}/project/{projectId}/attributes`

Applies an attribute to the provided project.
It is possible to assign multiple values to each attribute, but you can only assign values to one of the predefined attribute categories, using the predefined options for this category.
Assigning an attribute requires the caller to be either an Organization Administrator or a Group Administrator.
Assigning an attribute will override any existing values that the specific attribute already has set.
In order to clear out an attribute value, an empty array can be set.

> Body parameter

```json
{
  "criticality": [
    "high"
  ],
  "environment": [
    "backend"
  ],
  "lifecycle": [
    "development"
  ]
}
```

<h3 id="applying-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID to remove a tag from|
|body|body|object|false|none|
|» criticality|body|[object]|false|none|
|» environment|body|[object]|false|none|
|» lifecycle|body|[object]|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {
    "criticality": [
      "high"
    ],
    "environment": [
      "backend"
    ],
    "lifecycle": [
      "development"
    ]
  }
}
```

<h3 id="applying-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="applying-attributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Attributes now applied to the project|
|» criticality|[object]|false|none|none|
|» environment|[object]|false|none|none|
|» lifecycle|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Deactivate

<a id="opIdDeactivate"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/463c1ee5-31bc-428c-b451-b79a3270db08/deactivate \
  -X POST
```

`POST /org/{orgId}/project/{projectId}/deactivate`

Deactivating a project will:

- Disable pull request tests for new vulnerabilities.

- Disable Fix pull request from being opened for newly disclosed vulnerabilities.

- Disable recurring tests - email alerts about newly disclosed vulnerabilities will be turned off.

- If the repository has no other active projects, then remove any webhooks related to the project.

<h3 id="deactivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID the project belongs to. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID.|

<h3 id="deactivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Project dependency graph

<a id="opIdGet Project dependency graph"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/6d5813be-7e6d-4ab8-80c2-1e3e2a454545/dep-graph \
  -H 'Accept: application/json'
```

`GET /org/{orgId}/project/{projectId}/dep-graph`

<h3 id="get-project-dependency-graph-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID to return issues for.|

> Example responses

> 200 Response

```json
{
  "depGraph": {
    "graph": {
      "nodes": [
        {
          "deps": [
            {
              "nodeId": "express@4.4.0"
            },
            {
              "nodeId": "ws@1.0.0"
            }
          ],
          "nodeId": "root-node",
          "pkgId": "demo-app-for-test@1.1.1"
        },
        {
          "deps": [],
          "nodeId": "express@4.4.0",
          "pkgId": "express@4.4.0"
        },
        {
          "deps": [],
          "nodeId": "ws@1.0.0",
          "pkgId": "ws@1.0.0"
        }
      ],
      "rootNodeId": "root-node"
    },
    "pkgManager": {
      "name": "npm"
    },
    "pkgs": [
      {
        "id": "demo-app-for-test@1.1.1",
        "info": {
          "name": "demo-app-for-test",
          "version": "1.1.1"
        }
      },
      {
        "id": "express@4.4.0",
        "info": {
          "name": "express",
          "version": "4.4.0"
        }
      },
      {
        "id": "ws@1.0.0",
        "info": {
          "name": "ws",
          "version": "1.0.0"
        }
      }
    ],
    "schemaVersion": "1.1.0"
  }
}
```

<h3 id="get-project-dependency-graph-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|* A reference implementation of the graph, as well as conversion functions to/from legacy tree format, can be found at: https://github.com/snyk/dep-graph.<br><br>* The object might contain additional fields in the future, in a backward-compatible way (`schemaVersion` will change accordingly).|Inline|

<h3 id="get-project-dependency-graph-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depGraph|object|true|none|The dependency-graph object|
|» graph|object|true|none|A directional graph of the packages in the project|
|» » nodes|[object]|false|none|A list of the first-level packages|
|» » » deps|[object]|true|none|A list of the direct dependencies of the package|
|» » » » nodeId|string|true|none|The id of the node|
|» » » nodeId|string|true|none|The internal id of the node|
|» » » pkgId|string|true|none|The id of the package|
|» » rootNodeId|string|true|none|The internal id of the root node|
|» pkgManager|object|true|none|The package manager of the project|
|» » name|string|true|none|The name of the package manager|
|» » repositories|[object]|false|none|none|
|» » » alias|string|true|none|none|
|» » version|string|false|none|The version of the package manager|
|» pkgs|[object]|true|none|A list of dependencies in the project|
|» » id|string|true|none|The internal id of the package|
|» » info|object|true|none|none|
|» » » name|string|true|none|The name of the package|
|» » » version|string|false|none|The version of the package|
|» schemaVersion|string|true|none|The scheme version of the depGraph object|

<aside class="success">
This operation does not require authentication
</aside>

## List all project snapshots

<a id="opIdList all project snapshots"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/6d5813be-7e6d-4ab8-80c2-1e3e2a454545/history \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "filters": {
      "imageId": "sha256:a368cbcfa6789bc347345f6d78902afe138b62ff5373d2aa5f37120277c90a67"
    }
  }'
```

`POST /org/{orgId}/project/{projectId}/history`

> Body parameter

```json
{
  "filters": {
    "imageId": "sha256:a368cbcfa6789bc347345f6d78902afe138b62ff5373d2aa5f37120277c90a67"
  }
}
```

<h3 id="list-all-project-snapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID to return snapshots for.|
|perPage|query|number|false|The number of results to return (the default is 10, the maximum is 100).|
|page|query|number|false|The offset from which to start returning results from.|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » imageId|body|string|false|For container projects, filter by the ID of the image|

> Example responses

> 200 Response

```json
{
  "snapshots": [
    {
      "baseImageName": "fedora:32",
      "created": "2019-02-05T06:21:00.000Z",
      "id": "6d5813be-7e6d-4ab8-80c2-1e3e2a454545",
      "imageId": "sha256:a368cbcfa6789bc347345f6d78902afe138b62ff5373d2aa5f37120277c90a67",
      "imagePlatform": "linux/amd64",
      "imageTag": "latest",
      "issueCounts": {
        "license": {
          "critical": 0,
          "high": 13,
          "low": 8,
          "medium": 15
        },
        "vuln": {
          "critical": 0,
          "high": 13,
          "low": 8,
          "medium": 15
        }
      },
      "method": "web-test",
      "totalDependencies": 438
    },
    {
      "baseImageName": "fedora:32",
      "created": "2019-02-04T06:19:00.000Z",
      "id": "6d5813be-7e6d-4ab8-80c2-1e3e2a454553",
      "imageId": "sha256:a368cbcfa6789bc347345f6d78902afe138b62ff5373d2aa5f37120277c90a67",
      "imagePlatform": "linux/amd64",
      "imageTag": "latest",
      "issueCounts": {
        "license": {
          "critical": 0,
          "high": 13,
          "low": 8,
          "medium": 15
        },
        "vuln": {
          "critical": 0,
          "high": 13,
          "low": 8,
          "medium": 15
        }
      },
      "method": "web-test",
      "totalDependencies": 438
    }
  ],
  "total": 2
}
```

<h3 id="list-all-project-snapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-project-snapshots-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshots|[object]|false|none|A list of the project's snapshots, ordered according to date (latest first).|
|» created|string|true|none|The date that the snapshot was taken|
|» id|string|true|none|The snapshot identifier|
|» imageBaseImage|string|false|none|none|
|» imageId|string|false|none|none|
|» imagePlatform|string|false|none|none|
|» imageTag|string|false|none|none|
|» issueCounts|object|true|none|Number of known vulnerabilities in the project, not including ignored issues|
|» » license|object|false|none|none|
|» » » critical|number|true|none|Number of critical severity vulnerabilities|
|» » » high|number|true|none|Number of high severity vulnerabilities|
|» » » low|number|true|none|Number of low severity vulnerabilities|
|» » » medium|number|true|none|Number of medium severity vulnerabilities|
|» » sast|object|false|none|none|
|» » » critical|number|true|none|Number of critical severity vulnerabilities|
|» » » high|number|true|none|Number of high severity vulnerabilities|
|» » » low|number|true|none|Number of low severity vulnerabilities|
|» » » medium|number|true|none|Number of medium severity vulnerabilities|
|» » vuln|object|false|none|none|
|» » » critical|number|true|none|Number of critical severity vulnerabilities|
|» » » high|number|true|none|Number of high severity vulnerabilities|
|» » » low|number|true|none|Number of low severity vulnerabilities|
|» » » medium|number|true|none|Number of medium severity vulnerabilities|
|» method|string|false|none|The method by which this snapshot was created.|
|» totalDependencies|number|true|none|Number of dependencies of the project|
|total|number|false|none|The total number of results|

#### Enumerated Values

|Property|Value|
|---|---|
|» method|api|
|» method|cli|
|» method|recurring|
|» method|web|
|» method|web-test|
|» method|wizard|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## List all project snapshot aggregated issues

<a id="opIdList all project snapshot aggregated issues"></a>

> Code samples

```bash
curl https://example.com/org/2d5c4d0c-c6d6-4658-a703-c2721c135b26/project/6d5813be-7e6d-4ab8-80c2-1e3e2a454545/history/6d5813be-7e6d-4ab8-80c2-1e3e2a454553/aggregated-issues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "includeDescription": false,
    "includeIntroducedThrough": false
  }'
```

`POST /org/{orgId}/project/{projectId}/history/{snapshotId}/aggregated-issues`

> Body parameter

```json
{
  "includeDescription": false,
  "includeIntroducedThrough": false
}
```

<h3 id="list-all-project-snapshot-aggregated-issues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID.|
|snapshotId|path|string|true|The snapshot ID. If set to latest, the most recent snapshot will be used.|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » exploitMaturity|body|[object]|false|The exploit maturity levels of issues to filter the results by (Non-IaC projects only)|
|» » ignored|body|boolean|false|If set to `true`, only include issues which are ignored, if set to `false`, only include issues which are not ignored|
|» » patched|body|boolean|false|If set to `true`, only include issues which are patched, if set to `false`, only include issues which are not patched (Non-IaC projects only)|
|» » priority|body|object|false|The priority to filter the issues by (Non-IaC projects only)|
|» » » score|body|object|false|Include issues where the priority score is between min and max|
|» » » » max|body|number|false|none|
|» » » » min|body|number|false|none|
|» » severities|body|[object]|false|The severity levels of issues to filter the results by|
|» » types|body|[object]|false|The type of issues to filter the results by (Non-IaC projects only)|
|» includeDescription|body|boolean|false|If set to `true`, Include issue's description, if set to `false` (by default), it won't (Non-IaC projects only)|
|» includeIntroducedThrough|body|boolean|false|If set to `true`, Include issue's introducedThrough, if set to `false` (by default), it won't. It's for container only projects (Non-IaC projects only)|

> Example responses

> 200 Response

```json
{
  "issues": [
    {
      "fixInfo": {
        "fixedIn": [
          "2.0.0"
        ],
        "isFixable": false,
        "isPartiallyFixable": false,
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "nearestFixedInVersion": "2.0.0"
      },
      "id": "npm:ms:20170412",
      "ignoreReasons": [
        {
          "expires": "",
          "reason": "",
          "source": "cli"
        }
      ],
      "introducedThrough": [
        {
          "data": {},
          "kind": "imageLayer"
        }
      ],
      "isIgnored": false,
      "isPatched": false,
      "issueData": {
        "CVSSv3": "CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:L",
        "credit": [
          "Snyk Security Research Team"
        ],
        "cvssScore": 3.7,
        "description": "`## Overview\\r\\n[`ms`](https://www.npmjs.com/package/ms) is a tiny millisecond conversion utility.\\r\\n\\r\\nAffected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) due to an incomplete fix for previously reported vulnerability [npm:ms:20151024](https://snyk.io/vuln/npm:ms:20151024). The fix limited the length of accepted input string to 10,000 characters, and turned to be insufficient making it possible to block the event loop for 0.3 seconds (on a typical laptop) with a specially crafted string passed to `ms",
        "disclosureTime": "2017-04-11T21:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "id": "npm:ms:20170412",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-400"
          ],
          "OSVDB": []
        },
        "isMaliciousPackage": true,
        "language": "js",
        "nearestFixedInVersion": "2.0.0",
        "originalSeverity": "high",
        "patches": [
          {
            "comments": [],
            "id": "patch:npm:ms:20170412:0",
            "modificationTime": "2019-12-03T11:40:45.863964Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/ms/20170412/ms_100.patch"
            ],
            "version": "=1.0.0"
          }
        ],
        "path": "[DocId: 1].input.spec.template.spec.containers[snyk2].securityContext.privileged",
        "publicationTime": "2017-05-15T06:02:45Z",
        "semver": {
          "unaffected": "",
          "vulnerable": [
            ">=0.7.1 <2.0.0"
          ]
        },
        "severity": "low",
        "title": "Regular Expression Denial of Service (ReDoS)",
        "url": "https://snyk.io/vuln/npm:ms:20170412",
        "violatedPolicyPublicId": "SNYK-CC-K8S-1"
      },
      "issueType": "vuln",
      "links": {
        "paths": ""
      },
      "pkgName": "ms",
      "pkgVersions": [
        "1.0.0"
      ],
      "priority": {
        "factors": [
          "name: `isFixable`",
          "description: `Has a fix available`"
        ],
        "score": 399
      }
    }
  ]
}
```

<h3 id="list-all-project-snapshot-aggregated-issues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-project-snapshot-aggregated-issues-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|[object]|false|none|An array of identified issues|
|» fixInfo|object|false|none|Information about fix/upgrade/pinnable options for the issue (Non-IaC projects only)|
|» » fixedIn|[object]|false|none|The set of versions in which this issue has been fixed. If the issue spanned multiple versions (i.e. `1.x` and `2.x`) then there will be multiple `fixedIn` entries|
|» » isFixable|boolean|false|none|Whether all of the issue's paths are fixable. Paths that are already patched are not considered fixable unless they have an alternative remediation (e.g. pinning or upgrading). An upgrade path where the only changes are in transitive dependencies is only considered fixable if the package manager supports it.|
|» » isPartiallyFixable|boolean|false|none|Whether any of the issue's paths can be fixed. Paths that are already patched are not considered fixable unless they have an alternative remediation (e.g. pinning or upgrading).  An upgrade path where the only changes are in transitive dependencies is only considered fixable if the package manager supports it.|
|» » isPatchable|boolean|false|none|Whether all the of issue's paths are patchable|
|» » isPinnable|boolean|false|none|Whether the issue can be fixed by pinning a transitive|
|» » isUpgradable|boolean|false|none|Whether all of the issue's paths are upgradable|
|» » nearestFixedInVersion|string|false|none|Nearest version which includes a fix for the issue. This is populated for container projects only.|
|» id|string|true|none|The identifier of the issue|
|» ignoreReasons|[object]|false|none|The list of reasons why the issue was ignored|
|» introducedThrough|[object]|false|none|The list of what introduced the issue (it is available only for container project with Dockerfile)|
|» isIgnored|boolean|true|none|Whether the issue has been ignored|
|» isPatched|boolean|true|none|Whether the issue has been patched (Non-IaC projects only)|
|» issueData|object|true|none|The details of the issue|
|» » CVSSv3|string|true|none|The CVSS v3 string that signifies how the CVSS score was calculated (Non-IaC projects only)|
|» » credit|[object]|true|none|The list of people responsible for first uncovering or reporting the issue (Non-IaC projects only)|
|» » cvssScore|number|true|none|The CVSS score that results from running the CVSSv3 string (Non-IaC projects only)|
|» » description|string|true|none|none|
|» » disclosureTime|string|true|none|The date that the vulnerability was first disclosed|
|» » exploitMaturity|string|true|none|The exploit maturity of the issue|
|» » id|string|true|none|The identifier of the issue|
|» » identifiers|object|true|none|External identifiers assigned to the issue (Non-IaC projects only)|
|» » » CVE|[object]|false|none|Common Vulnerability Enumeration identifiers|
|» » » CWE|[object]|false|none|Common Weakness Enumeration identifiers|
|» » » OSVDB|[object]|false|none|Identifiers assigned by the Open Source Vulnerability Database (OSVDB)|
|» » isMaliciousPackage|boolean|true|none|Whether the issue is intentional, indicating a malicious package|
|» » language|string|true|none|The language of the issue (Non-IaC projects only)|
|» » nearestFixedInVersion|string|true|none|Nearest version which includes a fix for the issue. This is populated for container projects only. (Non-IaC projects only)|
|» » originalSeverity|string|true|none|The original severity status of the issue, as retrieved from Snyk Vulnerability database, before policies are applied|
|» » patches|[object]|true|none|A list of patches available for the given issue (Non-IaC projects only)|
|» » path|string|true|none|Path to the resource property violating the policy within the scanned project. (IaC projects only)|
|» » publicationTime|string|true|none|The date that the vulnerability was first published by Snyk (Non-IaC projects only)|
|» » semver|object|true|none|The ranges that are vulnerable and unaffected by the issue (Non-IaC projects only)|
|» » » unaffected|string|false|none|The ranges that are unaffected by the issue|
|» » » vulnerable|[object]|false|none|The ranges that are vulnerable to the issue. May be an array or a string.|
|» » severity|string|true|none|The severity status of the issue, after policies are applied|
|» » title|string|true|none|The issue title|
|» » url|string|true|none|URL to a page containing information about the issue|
|» » violatedPolicyPublicId|string|true|none|The ID of the violated policy in the issue (IaC projects only)|
|» issueType|string|true|none|type of the issue ('vuln', 'license' or 'configuration')|
|» links|object|false|none|Onward links from this record (Non-IaC projects only)|
|» » paths|string|false|none|The URL for the dependency paths that introduce this issue|
|» pkgName|string|true|none|The package name (Non-IaC projects only)|
|» pkgVersions|[string]|true|none|List of affected package versions (Non-IaC projects only)|
|» priority|object|false|none|Information about the priority of the issue (Non-IaC projects only)|
|» » factors|[object]|false|none|The list of factors that contributed to the priority of the issue|
|» » score|number|false|none|The priority score of the issue|

<aside class="success">
This operation does not require authentication
</aside>

## List all project snapshot issue paths

<a id="opIdList all project snapshot issue paths"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/6d5813be-7e6d-4ab8-80c2-1e3e2a454545/history/6d5813be-7e6d-4ab8-80c2-1e3e2a454553/issue/SNYK-JS-LODASH-590103/paths
```

`GET /org/{orgId}/project/{projectId}/history/{snapshotId}/issue/{issueId}/paths`

<h3 id="list-all-project-snapshot-issue-paths-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID for which to return issue paths.|
|snapshotId|path|string|true|The project snapshot ID for which to return issue paths. If set to `latest`, the most recent snapshot will be used. Use the "List all project snapshots" endpoint to find suitable values for this.|
|issueId|path|string|true|The issue ID for which to return issue paths.|
|perPage|query|number|false|The number of results to return per page (1 - 1000, inclusive).|
|page|query|number|false|The page of results to return.|

<h3 id="list-all-project-snapshot-issue-paths-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-project-snapshot-issue-paths-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|false|none|Onward links from this record|
|» last|string|false|none|The URL of the last page of paths for the issue|
|» next|string|false|none|The URL of the next page of paths for the issue, if not on the last page|
|» prev|string|false|none|The URL of the previous page of paths for the issue, if not on the first page|
|paths|[[object]]|false|none|A list of the dependency paths that introduce the issue|
|snapshotId|string|false|none|The identifier of the snapshot for which the paths have been found|
|total|number|false|none|The total number of results|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve ignore

<a id="opIdRetrieve ignore"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/463c1ee5-31bc-428c-b451-b79a3270db08/ignore/npm%3Aqs%3A20140806-1 \
  -H 'Accept: application/json'
```

`GET /org/{orgId}/project/{projectId}/ignore/{issueId}`

<h3 id="retrieve-ignore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID to modify ignores for. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID to modify ignores for.|
|issueId|path|string|true|The issue ID to modify ignores for. Can be a vulnerability or a license Issue.|

> Example responses

> 200 Response

```json
[
  {
    "*": {
      "created": "2017-10-31T11:24:00.932Z",
      "disregardIfFixable": true,
      "ignoredBy": {
        "email": "jbloggs@gmail.com",
        "id": "a3952187-0d8e-45d8-9aa2-036642857b4f",
        "name": "Joe Bloggs"
      },
      "reason": "No fix available",
      "reasonType": "temporary-ignore"
    }
  }
]
```

<h3 id="retrieve-ignore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ignorePath](#schemaignorepath)|

<aside class="success">
This operation does not require authentication
</aside>

## Replace ignores

<a id="opIdReplace ignores"></a>

> Code samples

```bash
curl https://example.com/org/string/project/string/ignore/string \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /org/{orgId}/project/{projectId}/ignore/{issueId}`

<h3 id="replace-ignores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|Automatically added|
|projectId|path|string|true|Automatically added|
|issueId|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "*": {
      "created": "2017-10-31T11:24:00.932Z",
      "disregardIfFixable": true,
      "ignoredBy": {
        "email": "jbloggs@gmail.com",
        "id": "a3952187-0d8e-45d8-9aa2-036642857b4f",
        "name": "Joe Bloggs"
      },
      "reason": "No fix available",
      "reasonType": "temporary-ignore"
    }
  }
]
```

<h3 id="replace-ignores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="replace-ignores-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add ignore

<a id="opIdAdd ignore"></a>

> Code samples

```bash
curl https://example.com/org/string/project/string/ignore/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "disregardIfFixable": false,
    "expires": "",
    "ignorePath": "",
    "reason": "",
    "reasonType": "not-vulnerable"
  }'
```

`POST /org/{orgId}/project/{projectId}/ignore/{issueId}`

> Body parameter

```json
{
  "disregardIfFixable": false,
  "expires": "",
  "ignorePath": "",
  "reason": "",
  "reasonType": "not-vulnerable"
}
```

<h3 id="add-ignore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|Automatically added|
|projectId|path|string|true|Automatically added|
|issueId|path|string|true|Automatically added|
|body|body|object|false|none|
|» disregardIfFixable|body|boolean|true|Only ignore the issue if no upgrade or patch is available.|
|» expires|body|string|false|The timestamp that the issue will no longer be ignored.|
|» ignorePath|body|string|false|The path to ignore (default is `*` which represents all paths).|
|» reason|body|string|false|The reason that the issue was ignored.|
|» reasonType|body|string|true|The classification of the ignore.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» reasonType|not-vulnerable|
|» reasonType|wont-fix|
|» reasonType|temporary-ignore|

> Example responses

> 200 Response

```json
{
  "*": {
    "created": "2017-10-31T11:24:00.932Z",
    "disregardIfFixable": true,
    "ignoredBy": {
      "email": "jbloggs@gmail.com",
      "id": "a3952187-0d8e-45d8-9aa2-036642857b4f",
      "name": "Joe Bloggs"
    },
    "reason": "No fix available",
    "reasonType": "temporary-ignore"
  }
}
```

<h3 id="add-ignore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ignorePath](#schemaignorepath)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete ignores

<a id="opIdDelete ignores"></a>

> Code samples

```bash
curl https://example.com/org/string/project/string/ignore/string \
  -X DELETE
```

`DELETE /org/{orgId}/project/{projectId}/ignore/{issueId}`

<h3 id="delete-ignores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|Automatically added|
|projectId|path|string|true|Automatically added|
|issueId|path|string|true|Automatically added|

<h3 id="delete-ignores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all ignores

<a id="opIdList all ignores"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/463c1ee5-31bc-428c-b451-b79a3270db08/ignores \
  -H 'Accept: application/json'
```

`GET /org/{orgId}/project/{projectId}/ignores`

Temporary ignores include an `expires` attribute, while permanent ignores do not.

<h3 id="list-all-ignores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID to list ignores for. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID to list ignores for.|

> Example responses

> 200 Response

```json
{
  "npm:electron:20170426": [
    {
      "*": {
        "created": "2017-10-31T11:25:17.138Z",
        "disregardIfFixable": false,
        "ignoredBy": {
          "email": "jbloggs@gmail.com",
          "id": "a3952187-0d8e-45d8-9aa2-036642857b4f",
          "name": "Joe Bloggs"
        },
        "reason": "Low impact",
        "reasonType": "wont-fix"
      }
    }
  ],
  "npm:negotiator:20160616": [
    {
      "*": {
        "created": "2017-10-31T11:24:45.365Z",
        "disregardIfFixable": false,
        "ignoredBy": {
          "email": "jbloggs@gmail.com",
          "id": "a3952187-0d8e-45d8-9aa2-036642857b4f",
          "name": "Joe Bloggs"
        },
        "reason": "Not vulnerable via this path",
        "reasonType": "not-vulnerable"
      }
    }
  ],
  "npm:qs:20140806-1": [
    {
      "*": {
        "created": "2017-10-31T11:24:00.932Z",
        "disregardIfFixable": true,
        "expires": "2017-12-10T15:39:38.099Z",
        "ignoredBy": {
          "email": "jbloggs@gmail.com",
          "id": "a3952187-0d8e-45d8-9aa2-036642857b4f",
          "name": "Joe Bloggs"
        },
        "reason": "No fix available",
        "reasonType": "temporary-ignore"
      }
    }
  ]
}
```

<h3 id="list-all-ignores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[issueId](#schemaissueid)|

<aside class="success">
This operation does not require authentication
</aside>

## Create jira issue

<a id="opIdCreate jira issue"></a>

> Code samples

```bash
curl https://example.com/org/string/project/string/issue/npm%3Aqs%3A20140806-1/jira-issue \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "fields": {
      "issuetype": {},
      "project": {},
      "summary": ""
    }
  }'
```

`POST /org/{orgId}/project/{projectId}/issue/{issueId}/jira-issue`

> Body parameter

```json
{
  "fields": {
    "issuetype": {},
    "project": {},
    "summary": ""
  }
}
```

<h3 id="create-jira-issue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueId|path|string|true|The issue ID to create Jira issue for.|
|orgId|path|string|true|Automatically added|
|projectId|path|string|true|Automatically added|
|body|body|object|false|none|
|» fields|body|object|false|none|
|» » issuetype|body|object|false|See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post for details of what to send as fields.|
|» » project|body|object|false|See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post for details of what to send as fields.|
|» » summary|body|string|false|See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post for details of what to send as fields.|

<h3 id="create-jira-issue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-jira-issue-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jiraIssue|object|false|none|The details about the jira issue.|
|» id|string|false|none|The id of the issue in Jira.|
|» key|string|false|none|The key of the issue in Jira.|

<aside class="success">
This operation does not require authentication
</aside>

## List all project issue paths

<a id="opIdList all project issue paths"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/6d5813be-7e6d-4ab8-80c2-1e3e2a454545/issue/SNYK-JS-LODASH-590103/paths
```

`GET /org/{orgId}/project/{projectId}/issue/{issueId}/paths`

<h3 id="list-all-project-issue-paths-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID for which to return issue paths.|
|issueId|path|string|true|The issue ID for which to return issue paths.|
|snapshotId|query|string|false|The project snapshot ID for which to return issue paths. If set to `latest`, the most recent snapshot will be used. Use the "List all project snapshots" endpoint to find suitable values for this.|
|perPage|query|number|false|The number of results to return per page (1 - 1000, inclusive).|
|page|query|number|false|The page of results to return.|

<h3 id="list-all-project-issue-paths-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-project-issue-paths-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|false|none|Onward links from this record|
|» last|string|false|none|The URL of the last page of paths for the issue|
|» next|string|false|none|The URL of the next page of paths for the issue, if not on the last page|
|» prev|string|false|none|The URL of the previous page of paths for the issue, if not on the first page|
|paths|[[object]]|false|none|A list of the dependency paths that introduce the issue|
|snapshotId|string|false|none|The identifier of the snapshot for which the paths have been found|
|total|number|false|none|The total number of results|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## List all jira issues

<a id="opIdList all jira issues"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/463c1ee5-31bc-428c-b451-b79a3270db08/jira-issues
```

`GET /org/{orgId}/project/{projectId}/jira-issues`

<h3 id="list-all-jira-issues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID to list Jira issues for. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID to list Jira issues for.|

<h3 id="list-all-jira-issues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[issueId](#schemaissueid)|

<aside class="success">
This operation does not require authentication
</aside>

## Move project to a different organization

<a id="opIdMove project to a different organization"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/463c1ee5-31bc-428c-b451-b79a3270db08/move \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "targetOrgId": "4a18d42f-0706-4ad0-b127-24078731fbed"
  }'
```

`PUT /org/{orgId}/project/{projectId}/move`

Note: when moving a project to a new organization, the historical data used for reporting does not move with it.

> Body parameter

```json
{
  "targetOrgId": "4a18d42f-0706-4ad0-b127-24078731fbed"
}
```

<h3 id="move-project-to-a-different-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID to which the project belongs. The API_KEY must have group admin permissions. If the project is moved to a new group, a personal level API key is needed.|
|projectId|path|string|true|The project ID.|
|body|body|object|false|none|
|» targetOrgId|body|string|false|The ID of the organization that the project should be moved to. The API_KEY must have group admin permissions. If the project is moved to a new group, a personal level API key is needed.|

> Example responses

> 200 Response

```json
{
  "destinationOrg": "4a18d42f-0706-4ad0-b127-24078731fbed",
  "movedProject": "463c1ee5-31bc-428c-b451-b79a3270db08",
  "originOrg": "4a18d42f-0706-4ad0-b127-24078731fbed"
}
```

<h3 id="move-project-to-a-different-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List project settings

<a id="opIdList project settings"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/463c1ee5-31bc-428c-b451-b79a3270db08/settings \
  -H 'Accept: application/json'
```

`GET /org/{orgId}/project/{projectId}/settings`

<h3 id="list-project-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID to which the project belongs. The API_KEY must have access to this organization.|
|projectId|path|string|true|The project ID|

> Example responses

> 200 Response

```json
{
  "autoDepUpgradeEnabled": false,
  "autoDepUpgradeIgnoredDependencies": [
    "tap",
    "ava"
  ],
  "autoDepUpgradeLimit": 2,
  "autoDepUpgradeMinAge": 21,
  "autoRemediationPrs": {
    "backlogPrsEnabled": false,
    "freshPrsEnabled": true,
    "usePatchRemediation": true
  },
  "pullRequestAssignment": {
    "assignees": [
      "username"
    ],
    "enabled": true,
    "type": "manual"
  },
  "pullRequestFailOnAnyVulns": false,
  "pullRequestFailOnlyForHighSeverity": true,
  "pullRequestTestEnabled": true
}
```

<h3 id="list-project-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response will contain only attributes that can be updated (see `ATTRIBUTES` section in `Update project settings`) and that have been previously set.|Inline|

<h3 id="list-project-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoDepUpgradeEnabled|boolean|false|none|If set to `true`, Snyk will raise dependency upgrade PRs automatically.|
|autoDepUpgradeIgnoredDependencies|[object]|false|none|An array of comma-separated strings with names of dependencies you wish Snyk to ignore to upgrade.|
|autoDepUpgradeLimit|number|false|none|The limit on auto dependency upgrade PRs.|
|autoDepUpgradeMinAge|number|false|none|The age (in days) that an automatic dependency check is valid for|
|autoRemediationPrs|object|false|none|Defines automatic remediation policies|
|» backlogPrsEnabled|boolean|false|none|If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified|
|» freshPrsEnabled|boolean|false|none|If true, allows automatic remediation of prioritized backlog issues|
|» usePatchRemediation|boolean|false|none|If true, allows using patched remediation|
|pullRequestAssignment|object|false|none|assign Snyk pull requests|
|» assignees|[object]|false|none|an array of usernames that have contributed to the organization's project(s).|
|» enabled|boolean|false|none|if the organization's project(s) will assign Snyk pull requests.|
|» type|string|false|none|a string representing the type of assignment your projects require.|
|pullRequestFailOnAnyVulns|boolean|false|none|If set to `true`, fail Snyk Test if the repo has any vulnerabilities. Otherwise, fail only when the PR is adding a vulnerable dependency.|
|pullRequestFailOnlyForHighSeverity|boolean|false|none|If set to `true`, fail Snyk Test only for high and critical severity vulnerabilities|
|pullRequestTestEnabled|boolean|false|none|If set to `true`, Snyk Test checks PRs for vulnerabilities.:cq|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|auto|
|» type|manual|

<aside class="success">
This operation does not require authentication
</aside>

## Update project settings

<a id="opIdUpdate project settings"></a>

> Code samples

```bash
curl https://example.com/org/string/project/string/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "autoDepUpgradeEnabled": false,
    "autoDepUpgradeIgnoredDependencies": [
      "tap",
      "ava"
    ],
    "autoDepUpgradeLimit": 2,
    "autoDepUpgradeMinAge": 21,
    "autoRemediationPrs": {
      "backlogPrsEnabled": false,
      "freshPrsEnabled": true,
      "usePatchRemediation": false
    },
    "pullRequestAssignment": {
      "assignees": [
        "username"
      ],
      "enabled": true,
      "type": "manual"
    },
    "pullRequestFailOnAnyVulns": false,
    "pullRequestFailOnlyForHighSeverity": true,
    "pullRequestTestEnabled": true
  }'
```

`PUT /org/{orgId}/project/{projectId}/settings`

> Body parameter

```json
{
  "autoDepUpgradeEnabled": false,
  "autoDepUpgradeIgnoredDependencies": [
    "tap",
    "ava"
  ],
  "autoDepUpgradeLimit": 2,
  "autoDepUpgradeMinAge": 21,
  "autoRemediationPrs": {
    "backlogPrsEnabled": false,
    "freshPrsEnabled": true,
    "usePatchRemediation": false
  },
  "pullRequestAssignment": {
    "assignees": [
      "username"
    ],
    "enabled": true,
    "type": "manual"
  },
  "pullRequestFailOnAnyVulns": false,
  "pullRequestFailOnlyForHighSeverity": true,
  "pullRequestTestEnabled": true
}
```

<h3 id="update-project-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|Automatically added|
|projectId|path|string|true|Automatically added|
|body|body|object|false|none|
|» autoDepUpgradeEnabled|body|boolean|false|If set to `true`, Snyk will raise dependency upgrade PRs automatically.|
|» autoDepUpgradeIgnoredDependencies|body|[object]|false|An array of comma-separated strings with names of dependencies you wish Snyk to ignore to upgrade.|
|» autoDepUpgradeLimit|body|number|false|The limit on auto dependency upgrade PRs.|
|» autoDepUpgradeMinAge|body|number|false|The age (in days) that an automatic dependency check is valid for|
|» autoRemediationPrs|body|object|false|Defines automatic remediation policies|
|» » backlogPrsEnabled|body|boolean|false|If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified|
|» » freshPrsEnabled|body|boolean|false|If true, allows automatic remediation of prioritized backlog issues|
|» » usePatchRemediation|body|boolean|false|If true, allows using patched remediation|
|» pullRequestAssignment|body|object|false|assign Snyk pull requests|
|» » assignees|body|[object]|false|an array of usernames that have contributed to the organization's project(s).|
|» » enabled|body|boolean|false|if the organization's project(s) will assign Snyk pull requests.|
|» » type|body|string|false|a string representing the type of assignment your projects require.|
|» pullRequestFailOnAnyVulns|body|boolean|false|If set to `true`, fail Snyk Test if the repo has any vulnerabilities. Otherwise, fail only when the PR is adding a vulnerable dependency.|
|» pullRequestFailOnlyForHighSeverity|body|boolean|false|If set to `true`, fail Snyk Test only for high and critical severity vulnerabilities|
|» pullRequestTestEnabled|body|boolean|false|If set to `true`, Snyk Test checks PRs for vulnerabilities.:cq|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|auto|
|» » type|manual|

> Example responses

> 200 Response

```json
{
  "autoDepUpgradeEnabled": false,
  "autoDepUpgradeIgnoredDependencies": [
    "tap",
    "ava"
  ],
  "autoDepUpgradeLimit": 2,
  "autoDepUpgradeMinAge": 21,
  "autoRemediationPrs": {
    "backlogPrsEnabled": false,
    "freshPrsEnabled": true,
    "usePatchRemediation": false
  },
  "pullRequestAssignment": {
    "assignees": [
      "username"
    ],
    "enabled": true,
    "type": "manual"
  },
  "pullRequestFailOnAnyVulns": false,
  "pullRequestFailOnlyForHighSeverity": true,
  "pullRequestTestEnabled": true
}
```

<h3 id="update-project-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response will contain the attributes and values that have been sent in the request and successfully updated.|Inline|

<h3 id="update-project-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoDepUpgradeEnabled|boolean|false|none|If set to `true`, Snyk will raise dependency upgrade PRs automatically.|
|autoDepUpgradeIgnoredDependencies|[object]|false|none|An array of comma-separated strings with names of dependencies you wish Snyk to ignore to upgrade.|
|autoDepUpgradeLimit|number|false|none|The limit on auto dependency upgrade PRs.|
|autoDepUpgradeMinAge|number|false|none|The age (in days) that an automatic dependency check is valid for|
|autoRemediationPrs|object|false|none|Defines automatic remediation policies|
|» backlogPrsEnabled|boolean|false|none|If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified|
|» freshPrsEnabled|boolean|false|none|If true, allows automatic remediation of prioritized backlog issues|
|» usePatchRemediation|boolean|false|none|If true, allows using patched remediation|
|pullRequestAssignment|object|false|none|assign Snyk pull requests|
|» assignees|[object]|false|none|an array of usernames that have contributed to the organization's project(s).|
|» enabled|boolean|false|none|if the organization's project(s) will assign Snyk pull requests.|
|» type|string|false|none|a string representing the type of assignment your projects require.|
|pullRequestFailOnAnyVulns|boolean|false|none|If set to `true`, fail Snyk Test if the repo has any vulnerabilities. Otherwise, fail only when the PR is adding a vulnerable dependency.|
|pullRequestFailOnlyForHighSeverity|boolean|false|none|If set to `true`, fail Snyk Test only for high and critical severity vulnerabilities|
|pullRequestTestEnabled|boolean|false|none|If set to `true`, Snyk Test checks PRs for vulnerabilities.:cq|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|auto|
|» type|manual|

<aside class="success">
This operation does not require authentication
</aside>

## Delete project settings

<a id="opIdDelete project settings"></a>

> Code samples

```bash
curl https://example.com/org/string/project/string/settings \
  -X DELETE
```

`DELETE /org/{orgId}/project/{projectId}/settings`

Deleting project settings will set the project to inherit default settings from its integration.

<h3 id="delete-project-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|Automatically added|
|projectId|path|string|true|Automatically added|

<h3 id="delete-project-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a tag to a project

<a id="opIdAdd a tag to a project"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/6d5813be-7e6d-4ab8-80c2-1e3e2a454545/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "example-tag-key",
    "value": "example-tag-value"
  }'
```

`POST /org/{orgId}/project/{projectId}/tags`

​

> Body parameter

```json
{
  "key": "example-tag-key",
  "value": "example-tag-value"
}
```

<h3 id="add-a-tag-to-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID to apply the tag to|
|body|body|object|false|none|
|» key|body|string|false|Alphanumeric including - and _ with a limit of 30 characters|
|» value|body|string|false|Alphanumeric including - and _ with a limit of 50 characters|

> Example responses

> 200 Response

```json
{
  "tags": [
    {
      "key": "example-tag-key",
      "value": "example-tag-value"
    }
  ]
}
```

<h3 id="add-a-tag-to-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="add-a-tag-to-a-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[object]|false|none|Tags now applied to the project|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a tag from a project

<a id="opIdRemove a tag from a project"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/6d5813be-7e6d-4ab8-80c2-1e3e2a454545/tags/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "example-tag-key",
    "value": "example-tag-value"
  }'
```

`POST /org/{orgId}/project/{projectId}/tags/remove`

> Body parameter

```json
{
  "key": "example-tag-key",
  "value": "example-tag-value"
}
```

<h3 id="remove-a-tag-from-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|
|projectId|path|string|true|The project ID to remove a tag from|
|body|body|object|false|none|
|» key|body|string|false|Alphanumeric including - and _ with a limit of 30 characters|
|» value|body|string|false|Alphanumeric including - and _ with a limit of 50 characters|

> Example responses

> 200 Response

```json
{
  "tags": [
    {
      "key": "example-tag-key",
      "value": "example-tag-value"
    }
  ]
}
```

<h3 id="remove-a-tag-from-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="remove-a-tag-from-a-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[object]|false|none|Tags now applied to the project|

<aside class="success">
This operation does not require authentication
</aside>

## List all projects

<a id="opIdList all projects"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "filters": {
      "attributes": {
        "criticality": [
          "high"
        ],
        "environment": [
          "backend"
        ],
        "lifecycle": [
          "development"
        ]
      },
      "name": "snyk/goof",
      "origin": "github",
      "tags": {
        "includes": [
          {
            "key": "example-tag-key",
            "value": "example-tag-value"
          }
        ]
      },
      "type": "maven"
    }
  }'
```

`POST /org/{orgId}/projects`

> Body parameter

```json
{
  "filters": {
    "attributes": {
      "criticality": [
        "high"
      ],
      "environment": [
        "backend"
      ],
      "lifecycle": [
        "development"
      ]
    },
    "name": "snyk/goof",
    "origin": "github",
    "tags": {
      "includes": [
        {
          "key": "example-tag-key",
          "value": "example-tag-value"
        }
      ]
    },
    "type": "maven"
  }
}
```

<h3 id="list-all-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID to list projects for. The `API_KEY` must have access to this organization.|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » attributes|body|object|false|When you filter by multiple values on a single attribute, you will return projects that have been assigned one or more of the values in the filter.<br><br>When you filter by multiple attributes, you will return projects which have been assigned values of both attributes in the filter.|
|» » » criticality|body|[object]|false|none|
|» » » environment|body|[object]|false|none|
|» » » lifecycle|body|[object]|false|none|
|» » isMonitored|body|boolean|false|If set to `true`, only include projects which are monitored, if set to `false`, only include projects which are not monitored|
|» » name|body|string|false|If supplied, only projects that have a name that **starts with** this value will be returned|
|» » origin|body|string|false|If supplied, only projects that exactly match this origin will be returned|
|» » tags|body|object|false|none|
|» » » includes|body|[object]|false|A project must have all provided tags in order to be included in the response. A maximum of 3 tags can be supplied.|
|» » type|body|string|false|If supplied, only projects that exactly match this type will be returned|

> Example responses

> 200 Response

```json
{
  "org": {
    "id": "689ce7f9-7943-4a71-b704-2ba575f01089",
    "name": "defaultOrg"
  },
  "projects": [
    {
      "branch": "master",
      "created": "2018-10-29T09:50:54.014Z",
      "id": "6d5813be-7e6d-4ab8-80c2-1e3e2a454545",
      "importingUser": {
        "email": "example-user@snyk.io",
        "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",
        "name": "example-user@snyk.io",
        "username": "exampleUser"
      },
      "isMonitored": true,
      "issueCountsBySeverity": {
        "critical": 3,
        "high": 10,
        "low": 8,
        "medium": 15
      },
      "lastTestedDate": "2019-02-05T06:21:00.000Z",
      "name": "atokeneduser/goof",
      "origin": "cli",
      "owner": {
        "email": "example-user@snyk.io",
        "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",
        "name": "example-user@snyk.io",
        "username": "exampleUser"
      },
      "readOnly": false,
      "remoteRepoUrl": "https://github.com/snyk/goof.git",
      "tags": [
        {
          "key": "example-tag-key",
          "value": "example-tag-value"
        }
      ],
      "targetReference": "master",
      "testFrequency": "daily",
      "totalDependencies": 438,
      "type": "npm"
    },
    {
      "branch": "master",
      "created": "2018-10-29T09:50:54.014Z",
      "id": "af127b96-6966-46c1-826b-2e79ac49bbd9",
      "importingUser": {
        "email": "example-user@snyk.io",
        "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",
        "name": "example-user@snyk.io",
        "username": "exampleUser"
      },
      "isMonitored": false,
      "issueCountsBySeverity": {
        "critical": 10,
        "high": 3,
        "low": 8,
        "medium": 21
      },
      "lastTestedDate": "2019-02-05T07:01:00.000Z",
      "name": "atokeneduser/clojure",
      "origin": "github",
      "owner": {
        "email": "example-user2@snyk.io",
        "id": "42ce0e0f-6288-4874-9266-ef799e7f31bb",
        "name": "example-user2@snyk.io",
        "username": "exampleUser2"
      },
      "readOnly": false,
      "remoteRepoUrl": "https://github.com/clojure/clojure.git",
      "tags": [
        {
          "key": "example-tag-key",
          "value": "example-tag-value"
        }
      ],
      "targetReference": "master",
      "testFrequency": "daily",
      "totalDependencies": 42,
      "type": "maven"
    },
    {
      "branch": "master",
      "created": "2019-02-04T08:54:07.704Z",
      "id": "f6c8339d-57e1-4d64-90c1-81af0e811f7e",
      "imageId": "sha256:caf27325b298a6730837023a8a342699c8b7b388b8d878966b064a1320043019",
      "imageTag": "latest",
      "importingUser": null,
      "isMonitored": false,
      "issueCountsBySeverity": {
        "critical": 0,
        "high": 0,
        "low": 0,
        "medium": 0
      },
      "lastTestedDate": "2019-02-05T08:54:07.704Z",
      "name": "docker-image|alpine",
      "origin": "cli",
      "owner": null,
      "readOnly": false,
      "tags": [
        {
          "key": "example-tag-key",
          "value": "example-tag-value"
        }
      ],
      "targetReference": "master",
      "testFrequency": "daily",
      "totalDependencies": 14,
      "type": "apk"
    }
  ]
}
```

<h3 id="list-all-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|org|object|false|none|none|
|» id|string|false|none|The identifier of the org|
|» name|string|false|none|none|
|projects|[object]|false|none|A list of org's projects|
|» attributes|object|false|none|Applied project attributes|
|» » criticality|[object]|false|none|none|
|» » environment|[object]|false|none|none|
|» » lifecycle|[object]|false|none|none|
|» branch|string \| null|false|none|The monitored branch (if available)|
|» browseUrl|string|false|none|URL with project overview|
|» created|string|false|none|The date that the project was created on|
|» id|string|false|none|The project identifier|
|» imageBaseImage|string|false|none|For docker projects shows the base image|
|» imageCluster|string|false|none|For Kubernetes projects shows the origin cluster name|
|» imageId|string|false|none|For docker projects shows the ID of the image|
|» imagePlatform|string|false|none|For docker projects shows the platform of the image|
|» imageTag|string|false|none|For docker projects shows the tag of the image|
|» importingUser|object|false|none|The user who imported the project|
|» » email|string|false|none|The email of the user.|
|» » id|string|false|none|The ID of the user.|
|» » name|string|false|none|The name of the user.|
|» » username|string|false|none|The username of the user.|
|» isMonitored|boolean|false|none|Describes if a project is currently monitored or it is de-activated|
|» issueCountsBySeverity|object|false|none|Number of known vulnerabilities in the project, not including ignored issues|
|» » critical|number|false|none|Number of critical severity vulnerabilities|
|» » high|number|false|none|Number of high severity vulnerabilities|
|» » low|number|false|none|Number of low severity vulnerabilities|
|» » medium|number|false|none|Number of medium severity vulnerabilities|
|» lastTestedDate|string|false|none|The date on which the most recent test was conducted for this project|
|» name|string|false|none|none|
|» origin|string|false|none|The origin the project was added from|
|» owner|object \| null|false|none|The user who owns the project, null if not set<br><br>{<br>    "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",<br>    "name": "example-user@snyk.io",<br>    "username": "exampleUser",<br>    "email": "example-user@snyk.io"<br>}|
|» readOnly|boolean|false|none|Whether the project is read-only|
|» remoteRepoUrl|string|false|none|The project remote repository url. Only set for projects imported via the Snyk CLI tool.|
|» tags|[object]|false|none|List of applied tags|
|» targetReference|string \| null|false|none|The identifier for which revision of the resource is scanned by Snyk. For example this may be a branch for SCM project, or a tag for a container image|
|» testFrequency|string|false|none|The frequency of automated Snyk re-test. Can be 'daily', 'weekly or 'never'|
|» totalDependencies|number|false|none|Number of dependencies of the project|
|» type|string|false|none|The package manager of the project|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="snyk-api-dependencies">Dependencies</h1>

Dependencies are packages/modules that your projects depend on.

Current rate limit is up to 150 requests per minute, per user.
For more information about rate-limiting see: [https://snyk.docs.apiary.io/#introduction/rate-limiting](https://snyk.docs.apiary.io/#introduction/rate-limiting)

## List all dependencies

<a id="opIdList all dependencies"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/dependencies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "filters": {
      "depStatus": "",
      "dependencies": [],
      "languages": [
        "cpp",
        "dockerfile",
        "dotnet",
        "elixir",
        "golang",
        "helm",
        "java",
        "javascript",
        "kubernetes",
        "linux",
        "php",
        "python",
        "ruby",
        "scala",
        "swift",
        "terraform"
      ],
      "licenses": [],
      "projects": [],
      "severity": [
        "critical",
        "high",
        "medium",
        "low"
      ]
    }
  }'
```

`POST /org/{orgId}/dependencies`

> Body parameter

```json
{
  "filters": {
    "depStatus": "",
    "dependencies": [],
    "languages": [
      "cpp",
      "dockerfile",
      "dotnet",
      "elixir",
      "golang",
      "helm",
      "java",
      "javascript",
      "kubernetes",
      "linux",
      "php",
      "python",
      "ruby",
      "scala",
      "swift",
      "terraform"
    ],
    "licenses": [],
    "projects": [],
    "severity": [
      "critical",
      "high",
      "medium",
      "low"
    ]
  }
}
```

<h3 id="list-all-dependencies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID to list projects for. The `API_KEY` must have access to this organization.|
|sortBy|query|string|false|The field to sort results by.|
|order|query|string|false|The direction to sort results by.|
|page|query|number|false|The page of results to fetch.|
|perPage|query|number|false|The number of results to fetch per page (maximum is 1000).|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » depStatus|body|string|false|Status of the dependency. Requires reporting entitlement. Options: `deprecated` - Include only deprecated packages; `notDeprecated` - Include all packages that are not marked as deprecated; `any` - Include all packages (default)|
|» » dependencies|body|object|false|The list of dependency IDs to filter the results by (i.e amdefine@1.0.1 or org.javassist:javassist@3.18.1-GA)|
|» » languages|body|[object]|false|The type of languages to filter the results by|
|» » licenses|body|object|false|The list of license IDs to filter the results by|
|» » projects|body|object|false|The list of project IDs to filter the results by|
|» » severity|body|[object]|false|The severities to filter the results by|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortBy|projects|
|sortBy|dependency|
|sortBy|severity|
|sortBy|dependenciesWithIssues|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "copyright": [
        "Copyright (c) 2013-2018 Blaine Bublitz <blaine.bublitz@gmail.com>",
        "Copyright (c) Eric Schoffstall <yo@contra.io> and other contributors"
      ],
      "dependenciesWithIssues": [
        "minimatch@2.0.10",
        "minimatch@0.2.14"
      ],
      "deprecatedVersions": [
        "0.0.1",
        "0.0.2",
        "0.0.3"
      ],
      "firstPublishedDate": "2013-07-04T23:27:07.828Z",
      "id": "gulp@3.9.1",
      "isDeprecated": false,
      "latestVersion": "4.0.0",
      "latestVersionPublishedDate": "2018-01-01T01:29:06.863Z",
      "licenses": [
        {
          "id": "snyk:lic:npm:gulp:MIT",
          "license": "MIT",
          "title": "MIT license"
        }
      ],
      "name": "gulp",
      "projects": [
        {
          "id": "6d5813be-7e6d-4ab8-80c2-1e3e2a454545",
          "name": "atokeneduser/goof"
        }
      ],
      "type": "npm",
      "version": "3.9.1"
    }
  ],
  "total": 1
}
```

<h3 id="list-all-dependencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-dependencies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of issues|
|» copyright|[object]|false|none|The copyright notices for the package|
|» dependenciesWithIssues|[object]|false|none|The identifiers of dependencies with issues that are depended upon as a result of this dependency|
|» deprecatedVersions|[object]|false|none|The numbers for those versions that are marked as deprecated|
|» firstPublishedDate|string|false|none|The timestamp for when the specified package was first published.|
|» id|string|true|none|The identifier of the package|
|» isDeprecated|boolean|false|none|True if the latest version of the package is marked as deprecated; False otherwise.|
|» issuesCritical|number|false|none|The number of critical severity issues in this dependency|
|» issuesHigh|number|false|none|The number of high severity issues in this dependency|
|» issuesLow|number|false|none|The number of low severity issues in this dependency|
|» issuesMedium|number|false|none|The number of medium severity issues in this dependency|
|» latestVersion|string|false|none|The latest version available for the specified package|
|» latestVersionPublishedDate|string|false|none|The timestamp for when the latest version of the specified package was published.|
|» licenses|[object]|true|none|The licenses of the dependency|
|» » id|string|true|none|The identifier of the license|
|» » license|string|true|none|The type of the license|
|» » title|string|true|none|The title of the license|
|» name|string|true|none|The name of the package|
|» projects|[object]|true|none|The projects which depend on the dependency|
|» » id|string|true|none|The identifier of the project|
|» » name|string|true|none|The name of the project|
|» type|string|true|none|The package type of the dependency|
|» version|string|true|none|The version of the package|
|total|number|false|none|The number of results returned|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="snyk-api-licenses">Licenses</h1>

The licenses which the packages/modules in your projects use.

## List all licenses

<a id="opIdList all licenses"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/licenses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "filters": {
      "dependencies": [],
      "languages": [
        "node",
        "ruby",
        "java"
      ],
      "licenses": [],
      "projects": [],
      "severity": [
        "none",
        "high",
        "medium",
        "low"
      ]
    }
  }'
```

`POST /org/{orgId}/licenses`

> Body parameter

```json
{
  "filters": {
    "dependencies": [],
    "languages": [
      "node",
      "ruby",
      "java"
    ],
    "licenses": [],
    "projects": [],
    "severity": [
      "none",
      "high",
      "medium",
      "low"
    ]
  }
}
```

<h3 id="list-all-licenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID to list projects for. The `API_KEY` must have access to this organization.|
|sortBy|query|string|false|The field to sort results by.|
|order|query|string|false|The direction to sort results by.|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » dependencies|body|object|false|The list of dependency IDs to filter the results by|
|» » languages|body|[object]|false|The type of languages to filter the results by|
|» » licenses|body|object|false|The list of license IDs to filter the results by|
|» » projects|body|object|false|The list of project IDs to filter the results by|
|» » severity|body|[object]|false|The severities to filter the results by|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortBy|license|
|sortBy|dependencies|
|sortBy|projects|
|sortBy|severity|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "dependencies": [
        {
          "id": "accepts@1.0.0",
          "name": "accepts",
          "packageManager": "npm",
          "version": "1.0.0"
        }
      ],
      "id": "MIT",
      "instructions": "",
      "projects": [
        {
          "id": "6d5813be-7e6d-4ab8-80c2-1e3e2a454545",
          "name": "atokeneduser/goof"
        }
      ],
      "severity": "none"
    }
  ],
  "total": 1
}
```

<h3 id="list-all-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-licenses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of licenses|
|» dependencies|[object]|true|none|The dependencies of projects in the organization which have the license|
|» » id|string|true|none|The identifier of the package|
|» » name|string|true|none|The name of the package|
|» » packageManager|string|true|none|The package manager of the dependency|
|» » version|string|true|none|The version of the package|
|» id|string|true|none|The identifier of the license|
|» instructions|string|false|none|Custom instructions assigned to this license|
|» projects|[object]|true|none|The projects which contain the license|
|» » id|string|true|none|The identifier of the project|
|» » name|string|true|none|The name of the project|
|» severity|string|false|none|The severity assigned to this license|
|total|number|false|none|The number of results returned|

#### Enumerated Values

|Property|Value|
|---|---|
|» severity|none|
|» severity|high|
|» severity|medium|
|» severity|low|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="snyk-api-entitlements">Entitlements</h1>

Entitlements are specific abilities an organization has enabled.

## Get an organization's entitlement value

<a id="opIdGet an organization's entitlement value"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/entitlement/reports \
  -H 'Accept: application/json'
```

`GET /org/{orgId}/entitlement/{entitlementKey}`

<h3 id="get-an-organizations-entitlement-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID to query the entitlement for. The `API_KEY` must have access to this organization.|
|entitlementKey|path|string|true|The entitlement to query.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|entitlementKey|licenses|
|entitlementKey|reports|
|entitlementKey|fullVulnDB|

> Example responses

> 200 Response

```json
true
```

<h3 id="get-an-organizations-entitlement-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all entitlements

<a id="opIdList all entitlements"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/entitlements \
  -H 'Accept: application/json'
```

`GET /org/{orgId}/entitlements`

<h3 id="list-all-entitlements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID to list entitlements for. The `API_KEY` must have access to this organization.|

> Example responses

> 200 Response

```json
{
  "fullVulnDB": false,
  "licenses": true,
  "reports": true
}
```

<h3 id="list-all-entitlements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="snyk-api-test">Test</h1>

Test a package for issues with Snyk.

## Test composer.json &amp; composer.lock file

<a id="opIdTest composer.json &amp; composer.lock file"></a>

> Code samples

```bash
curl https://example.com/test/composer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "encoding": "base64",
    "files": {
      "additional": [
        {
          "contents": "{\"_readme\":[\"This file locks the dependencies of your project to a known state\",\"Read more about it at https://getcomposer.org/doc/01-basic-usage.md#composer-lock-the-lock-file\",\"This file is @generated automatically\"],\"content-hash\":\"3a3771e545494c4c098e639bd68602ba\",\"packages\":[{\"name\":\"aws/aws-sdk-php\",\"version\":\"3.0.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/aws/aws-sdk-php.git\",\"reference\":\"4018c8f14a9e53003bb0417fa859c6a7ad57b53b\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/aws/aws-sdk-php/zipball/4018c8f14a9e53003bb0417fa859c6a7ad57b53b\",\"reference\":\"4018c8f14a9e53003bb0417fa859c6a7ad57b53b\",\"shasum\":\"\"},\"require\":{\"guzzlehttp/guzzle\":\"^5.3 || ^6.0.1\",\"guzzlehttp/promises\":\"^1.0.0\",\"guzzlehttp/psr7\":\"^1.0.0\",\"mtdowling/jmespath.php\":\"^2.2\",\"php\":\">=5.5\"},\"require-dev\":{\"ext-dom\":\"*\",\"ext-json\":\"*\",\"ext-openssl\":\"*\",\"ext-pcre\":\"*\",\"ext-simplexml\":\"*\",\"ext-spl\":\"*\",\"phpunit/phpunit\":\"^4.0\"},\"suggest\":{\"ext-curl\":\"To send requests using cURL\",\"ext-openssl\":\"Allows working with CloudFront private distributions and verifying received SNS messages\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"3.0-dev\"}},\"autoload\":{\"psr-4\":{\"Aws\\\":\"src/\"},\"files\":[\"src/functions.php\"]},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"Apache-2.0\"],\"authors\":[{\"name\":\"Amazon Web Services\",\"homepage\":\"http://aws.amazon.com\"}],\"description\":\"AWS SDK for PHP - Use Amazon Web Services in your PHP project\",\"homepage\":\"http://aws.amazon.com/sdkforphp\",\"keywords\":[\"amazon\",\"aws\",\"cloud\",\"dynamodb\",\"ec2\",\"glacier\",\"s3\",\"sdk\"],\"time\":\"2015-05-27T20:07:42+00:00\"},{\"name\":\"doctrine/annotations\",\"version\":\"v1.5.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/doctrine/annotations.git\",\"reference\":\"5beebb01b025c94e93686b7a0ed3edae81fe3e7f\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/doctrine/annotations/zipball/5beebb01b025c94e93686b7a0ed3edae81fe3e7f\",\"reference\":\"5beebb01b025c94e93686b7a0ed3edae81fe3e7f\",\"shasum\":\"\"},\"require\":{\"doctrine/lexer\":\"1.*\",\"php\":\"^7.1\"},\"require-dev\":{\"doctrine/cache\":\"1.*\",\"phpunit/phpunit\":\"^5.7\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.5.x-dev\"}},\"autoload\":{\"psr-4\":{\"Doctrine\\Common\\Annotations\\\":\"lib/Doctrine/Common/Annotations\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Roman Borschel\",\"email\":\"roman@code-factory.org\"},{\"name\":\"Benjamin Eberlei\",\"email\":\"kontakt@beberlei.de\"},{\"name\":\"Guilherme Blanco\",\"email\":\"guilhermeblanco@gmail.com\"},{\"name\":\"Jonathan Wage\",\"email\":\"jonwage@gmail.com\"},{\"name\":\"Johannes Schmitt\",\"email\":\"schmittjoh@gmail.com\"}],\"description\":\"Docblock Annotations Parser\",\"homepage\":\"http://www.doctrine-project.org\",\"keywords\":[\"annotations\",\"docblock\",\"parser\"],\"time\":\"2017-07-22T10:58:02+00:00\"},{\"name\":\"doctrine/cache\",\"version\":\"v1.7.1\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/doctrine/cache.git\",\"reference\":\"b3217d58609e9c8e661cd41357a54d926c4a2a1a\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/doctrine/cache/zipball/b3217d58609e9c8e661cd41357a54d926c4a2a1a\",\"reference\":\"b3217d58609e9c8e661cd41357a54d926c4a2a1a\",\"shasum\":\"\"},\"require\":{\"php\":\"~7.1\"},\"conflict\":{\"doctrine/common\":\">2.2,<2.4\"},\"require-dev\":{\"alcaeus/mongo-php-adapter\":\"^1.1\",\"mongodb/mongodb\":\"^1.1\",\"phpunit/phpunit\":\"^5.7\",\"predis/predis\":\"~1.0\"},\"suggest\":{\"alcaeus/mongo-php-adapter\":\"Required to use legacy MongoDB driver\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.7.x-dev\"}},\"autoload\":{\"psr-4\":{\"Doctrine\\Common\\Cache\\\":\"lib/Doctrine/Common/Cache\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Roman Borschel\",\"email\":\"roman@code-factory.org\"},{\"name\":\"Benjamin Eberlei\",\"email\":\"kontakt@beberlei.de\"},{\"name\":\"Guilherme Blanco\",\"email\":\"guilhermeblanco@gmail.com\"},{\"name\":\"Jonathan Wage\",\"email\":\"jonwage@gmail.com\"},{\"name\":\"Johannes Schmitt\",\"email\":\"schmittjoh@gmail.com\"}],\"description\":\"Caching library offering an object-oriented API for many cache backends\",\"homepage\":\"http://www.doctrine-project.org\",\"keywords\":[\"cache\",\"caching\"],\"time\":\"2017-08-25T07:02:50+00:00\"},{\"name\":\"doctrine/collections\",\"version\":\"v1.5.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/doctrine/collections.git\",\"reference\":\"a01ee38fcd999f34d9bfbcee59dbda5105449cbf\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/doctrine/collections/zipball/a01ee38fcd999f34d9bfbcee59dbda5105449cbf\",\"reference\":\"a01ee38fcd999f34d9bfbcee59dbda5105449cbf\",\"shasum\":\"\"},\"require\":{\"php\":\"^7.1\"},\"require-dev\":{\"doctrine/coding-standard\":\"~0.1@dev\",\"phpunit/phpunit\":\"^5.7\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.3.x-dev\"}},\"autoload\":{\"psr-0\":{\"Doctrine\\Common\\Collections\\\":\"lib/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Roman Borschel\",\"email\":\"roman@code-factory.org\"},{\"name\":\"Benjamin Eberlei\",\"email\":\"kontakt@beberlei.de\"},{\"name\":\"Guilherme Blanco\",\"email\":\"guilhermeblanco@gmail.com\"},{\"name\":\"Jonathan Wage\",\"email\":\"jonwage@gmail.com\"},{\"name\":\"Johannes Schmitt\",\"email\":\"schmittjoh@gmail.com\"}],\"description\":\"Collections Abstraction library\",\"homepage\":\"http://www.doctrine-project.org\",\"keywords\":[\"array\",\"collections\",\"iterator\"],\"time\":\"2017-07-22T10:37:32+00:00\"},{\"name\":\"doctrine/common\",\"version\":\"v2.5.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/doctrine/common.git\",\"reference\":\"cd8daf2501e10c63dced7b8b9b905844316ae9d3\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/doctrine/common/zipball/cd8daf2501e10c63dced7b8b9b905844316ae9d3\",\"reference\":\"cd8daf2501e10c63dced7b8b9b905844316ae9d3\",\"shasum\":\"\"},\"require\":{\"doctrine/annotations\":\"1.*\",\"doctrine/cache\":\"1.*\",\"doctrine/collections\":\"1.*\",\"doctrine/inflector\":\"1.*\",\"doctrine/lexer\":\"1.*\",\"php\":\">=5.3.2\"},\"require-dev\":{\"phpunit/phpunit\":\"~3.7\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"2.6.x-dev\"}},\"autoload\":{\"psr-0\":{\"Doctrine\\Common\\\":\"lib/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Roman Borschel\",\"email\":\"roman@code-factory.org\"},{\"name\":\"Benjamin Eberlei\",\"email\":\"kontakt@beberlei.de\"},{\"name\":\"Guilherme Blanco\",\"email\":\"guilhermeblanco@gmail.com\"},{\"name\":\"Jonathan Wage\",\"email\":\"jonwage@gmail.com\"},{\"name\":\"Johannes Schmitt\",\"email\":\"schmittjoh@gmail.com\"}],\"description\":\"Common Library for Doctrine projects\",\"homepage\":\"http://www.doctrine-project.org\",\"keywords\":[\"annotations\",\"collections\",\"eventmanager\",\"persistence\",\"spl\"],\"time\":\"2015-04-02T19:55:44+00:00\"},{\"name\":\"doctrine/inflector\",\"version\":\"v1.2.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/doctrine/inflector.git\",\"reference\":\"e11d84c6e018beedd929cff5220969a3c6d1d462\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/doctrine/inflector/zipball/e11d84c6e018beedd929cff5220969a3c6d1d462\",\"reference\":\"e11d84c6e018beedd929cff5220969a3c6d1d462\",\"shasum\":\"\"},\"require\":{\"php\":\"^7.0\"},\"require-dev\":{\"phpunit/phpunit\":\"^6.2\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.2.x-dev\"}},\"autoload\":{\"psr-4\":{\"Doctrine\\Common\\Inflector\\\":\"lib/Doctrine/Common/Inflector\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Roman Borschel\",\"email\":\"roman@code-factory.org\"},{\"name\":\"Benjamin Eberlei\",\"email\":\"kontakt@beberlei.de\"},{\"name\":\"Guilherme Blanco\",\"email\":\"guilhermeblanco@gmail.com\"},{\"name\":\"Jonathan Wage\",\"email\":\"jonwage@gmail.com\"},{\"name\":\"Johannes Schmitt\",\"email\":\"schmittjoh@gmail.com\"}],\"description\":\"Common String Manipulations with regard to casing and singular/plural rules.\",\"homepage\":\"http://www.doctrine-project.org\",\"keywords\":[\"inflection\",\"pluralize\",\"singularize\",\"string\"],\"time\":\"2017-07-22T12:18:28+00:00\"},{\"name\":\"doctrine/lexer\",\"version\":\"v1.0.1\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/doctrine/lexer.git\",\"reference\":\"83893c552fd2045dd78aef794c31e694c37c0b8c\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/doctrine/lexer/zipball/83893c552fd2045dd78aef794c31e694c37c0b8c\",\"reference\":\"83893c552fd2045dd78aef794c31e694c37c0b8c\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.3.2\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.0.x-dev\"}},\"autoload\":{\"psr-0\":{\"Doctrine\\Common\\Lexer\\\":\"lib/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Roman Borschel\",\"email\":\"roman@code-factory.org\"},{\"name\":\"Guilherme Blanco\",\"email\":\"guilhermeblanco@gmail.com\"},{\"name\":\"Johannes Schmitt\",\"email\":\"schmittjoh@gmail.com\"}],\"description\":\"Base library for a lexer that can be used in Top-Down, Recursive Descent Parsers.\",\"homepage\":\"http://www.doctrine-project.org\",\"keywords\":[\"lexer\",\"parser\"],\"time\":\"2014-09-09T13:34:57+00:00\"},{\"name\":\"guzzlehttp/guzzle\",\"version\":\"6.3.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/guzzle/guzzle.git\",\"reference\":\"f4db5a78a5ea468d4831de7f0bf9d9415e348699\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/guzzle/guzzle/zipball/f4db5a78a5ea468d4831de7f0bf9d9415e348699\",\"reference\":\"f4db5a78a5ea468d4831de7f0bf9d9415e348699\",\"shasum\":\"\"},\"require\":{\"guzzlehttp/promises\":\"^1.0\",\"guzzlehttp/psr7\":\"^1.4\",\"php\":\">=5.5\"},\"require-dev\":{\"ext-curl\":\"*\",\"phpunit/phpunit\":\"^4.0 || ^5.0\",\"psr/log\":\"^1.0\"},\"suggest\":{\"psr/log\":\"Required for using the Log middleware\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"6.2-dev\"}},\"autoload\":{\"files\":[\"src/functions_include.php\"],\"psr-4\":{\"GuzzleHttp\\\":\"src/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Michael Dowling\",\"email\":\"mtdowling@gmail.com\",\"homepage\":\"https://github.com/mtdowling\"}],\"description\":\"Guzzle is a PHP HTTP client library\",\"homepage\":\"http://guzzlephp.org/\",\"keywords\":[\"client\",\"curl\",\"framework\",\"http\",\"http client\",\"rest\",\"web service\"],\"time\":\"2017-06-22T18:50:49+00:00\"},{\"name\":\"guzzlehttp/promises\",\"version\":\"v1.3.1\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/guzzle/promises.git\",\"reference\":\"a59da6cf61d80060647ff4d3eb2c03a2bc694646\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/guzzle/promises/zipball/a59da6cf61d80060647ff4d3eb2c03a2bc694646\",\"reference\":\"a59da6cf61d80060647ff4d3eb2c03a2bc694646\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.5.0\"},\"require-dev\":{\"phpunit/phpunit\":\"^4.0\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.4-dev\"}},\"autoload\":{\"psr-4\":{\"GuzzleHttp\\Promise\\\":\"src/\"},\"files\":[\"src/functions_include.php\"]},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Michael Dowling\",\"email\":\"mtdowling@gmail.com\",\"homepage\":\"https://github.com/mtdowling\"}],\"description\":\"Guzzle promises library\",\"keywords\":[\"promise\"],\"time\":\"2016-12-20T10:07:11+00:00\"},{\"name\":\"guzzlehttp/psr7\",\"version\":\"1.4.2\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/guzzle/psr7.git\",\"reference\":\"f5b8a8512e2b58b0071a7280e39f14f72e05d87c\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/guzzle/psr7/zipball/f5b8a8512e2b58b0071a7280e39f14f72e05d87c\",\"reference\":\"f5b8a8512e2b58b0071a7280e39f14f72e05d87c\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.4.0\",\"psr/http-message\":\"~1.0\"},\"provide\":{\"psr/http-message-implementation\":\"1.0\"},\"require-dev\":{\"phpunit/phpunit\":\"~4.0\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.4-dev\"}},\"autoload\":{\"psr-4\":{\"GuzzleHttp\\Psr7\\\":\"src/\"},\"files\":[\"src/functions_include.php\"]},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Michael Dowling\",\"email\":\"mtdowling@gmail.com\",\"homepage\":\"https://github.com/mtdowling\"},{\"name\":\"Tobias Schultze\",\"homepage\":\"https://github.com/Tobion\"}],\"description\":\"PSR-7 message implementation that also provides common utility methods\",\"keywords\":[\"http\",\"message\",\"request\",\"response\",\"stream\",\"uri\",\"url\"],\"time\":\"2017-03-20T17:10:46+00:00\"},{\"name\":\"mtdowling/jmespath.php\",\"version\":\"2.4.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/jmespath/jmespath.php.git\",\"reference\":\"adcc9531682cf87dfda21e1fd5d0e7a41d292fac\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/jmespath/jmespath.php/zipball/adcc9531682cf87dfda21e1fd5d0e7a41d292fac\",\"reference\":\"adcc9531682cf87dfda21e1fd5d0e7a41d292fac\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.4.0\"},\"require-dev\":{\"phpunit/phpunit\":\"~4.0\"},\"bin\":[\"bin/jp.php\"],\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"2.0-dev\"}},\"autoload\":{\"psr-4\":{\"JmesPath\\\":\"src/\"},\"files\":[\"src/JmesPath.php\"]},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Michael Dowling\",\"email\":\"mtdowling@gmail.com\",\"homepage\":\"https://github.com/mtdowling\"}],\"description\":\"Declaratively specify how to extract elements from a JSON document\",\"keywords\":[\"json\",\"jsonpath\"],\"time\":\"2016-12-03T22:08:25+00:00\"},{\"name\":\"psr/http-message\",\"version\":\"1.0.1\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/php-fig/http-message.git\",\"reference\":\"f6561bf28d520154e4b0ec72be95418abe6d9363\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/php-fig/http-message/zipball/f6561bf28d520154e4b0ec72be95418abe6d9363\",\"reference\":\"f6561bf28d520154e4b0ec72be95418abe6d9363\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.3.0\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.0.x-dev\"}},\"autoload\":{\"psr-4\":{\"Psr\\Http\\Message\\\":\"src/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"PHP-FIG\",\"homepage\":\"http://www.php-fig.org/\"}],\"description\":\"Common interface for HTTP messages\",\"homepage\":\"https://github.com/php-fig/http-message\",\"keywords\":[\"http\",\"http-message\",\"psr\",\"psr-7\",\"request\",\"response\"],\"time\":\"2016-08-06T14:39:51+00:00\"},{\"name\":\"psr/log\",\"version\":\"1.0.2\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/php-fig/log.git\",\"reference\":\"4ebe3a8bf773a19edfe0a84b6585ba3d401b724d\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/php-fig/log/zipball/4ebe3a8bf773a19edfe0a84b6585ba3d401b724d\",\"reference\":\"4ebe3a8bf773a19edfe0a84b6585ba3d401b724d\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.3.0\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.0.x-dev\"}},\"autoload\":{\"psr-4\":{\"Psr\\Log\\\":\"Psr/Log/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"PHP-FIG\",\"homepage\":\"http://www.php-fig.org/\"}],\"description\":\"Common interface for logging libraries\",\"homepage\":\"https://github.com/php-fig/log\",\"keywords\":[\"log\",\"psr\",\"psr-3\"],\"time\":\"2016-10-10T12:19:37+00:00\"},{\"name\":\"symfony/icu\",\"version\":\"v1.2.2\",\"target-dir\":\"Symfony/Component/Icu\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/symfony/icu.git\",\"reference\":\"d4d85d6055b87f394d941b45ddd3a9173e1e3d2a\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/symfony/icu/zipball/d4d85d6055b87f394d941b45ddd3a9173e1e3d2a\",\"reference\":\"d4d85d6055b87f394d941b45ddd3a9173e1e3d2a\",\"shasum\":\"\"},\"require\":{\"ext-intl\":\"*\",\"lib-icu\":\">=4.4\",\"php\":\">=5.3.3\",\"symfony/intl\":\"~2.3\"},\"type\":\"library\",\"autoload\":{\"psr-0\":{\"Symfony\\Component\\Icu\\\":\"\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Symfony Community\",\"homepage\":\"http://symfony.com/contributors\"},{\"name\":\"Bernhard Schussek\",\"email\":\"bschussek@gmail.com\"}],\"description\":\"Contains an excerpt of the ICU data and classes to load it.\",\"homepage\":\"http://symfony.com\",\"keywords\":[\"icu\",\"intl\"],\"abandoned\":\"symfony/intl\",\"time\":\"2014-07-25T09:58:17+00:00\"},{\"name\":\"symfony/symfony\",\"version\":\"v2.3.1\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/symfony/symfony.git\",\"reference\":\"0902c606b4df1161f5b786ae89f37b71380b1f23\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/symfony/symfony/zipball/0902c606b4df1161f5b786ae89f37b71380b1f23\",\"reference\":\"0902c606b4df1161f5b786ae89f37b71380b1f23\",\"shasum\":\"\"},\"require\":{\"doctrine/common\":\"~2.2\",\"php\":\">=5.3.3\",\"psr/log\":\"~1.0\",\"symfony/icu\":\"~1.0\",\"twig/twig\":\"~1.11\"},\"replace\":{\"symfony/browser-kit\":\"self.version\",\"symfony/class-loader\":\"self.version\",\"symfony/config\":\"self.version\",\"symfony/console\":\"self.version\",\"symfony/css-selector\":\"self.version\",\"symfony/debug\":\"self.version\",\"symfony/dependency-injection\":\"self.version\",\"symfony/doctrine-bridge\":\"self.version\",\"symfony/dom-crawler\":\"self.version\",\"symfony/event-dispatcher\":\"self.version\",\"symfony/filesystem\":\"self.version\",\"symfony/finder\":\"self.version\",\"symfony/form\":\"self.version\",\"symfony/framework-bundle\":\"self.version\",\"symfony/http-foundation\":\"self.version\",\"symfony/http-kernel\":\"self.version\",\"symfony/intl\":\"self.version\",\"symfony/locale\":\"self.version\",\"symfony/monolog-bridge\":\"self.version\",\"symfony/options-resolver\":\"self.version\",\"symfony/process\":\"self.version\",\"symfony/propel1-bridge\":\"self.version\",\"symfony/property-access\":\"self.version\",\"symfony/proxy-manager-bridge\":\"self.version\",\"symfony/routing\":\"self.version\",\"symfony/security\":\"self.version\",\"symfony/security-bundle\":\"self.version\",\"symfony/serializer\":\"self.version\",\"symfony/stopwatch\":\"self.version\",\"symfony/swiftmailer-bridge\":\"self.version\",\"symfony/templating\":\"self.version\",\"symfony/translation\":\"self.version\",\"symfony/twig-bridge\":\"self.version\",\"symfony/twig-bundle\":\"self.version\",\"symfony/validator\":\"self.version\",\"symfony/web-profiler-bundle\":\"self.version\",\"symfony/yaml\":\"self.version\"},\"require-dev\":{\"doctrine/data-fixtures\":\"1.0.*\",\"doctrine/dbal\":\"~2.2\",\"doctrine/orm\":\"~2.2,>=2.2.3\",\"ircmaxell/password-compat\":\"1.0.*\",\"monolog/monolog\":\"~1.3\",\"ocramius/proxy-manager\":\">=0.3.1,<0.4-dev\",\"propel/propel1\":\"1.6.*\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"2.3-dev\"}},\"autoload\":{\"psr-0\":{\"Symfony\\\":\"src/\"},\"classmap\":[\"src/Symfony/Component/HttpFoundation/Resources/stubs\",\"src/Symfony/Component/Intl/Resources/stubs\"],\"files\":[\"src/Symfony/Component/Intl/Resources/stubs/functions.php\"]},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Symfony Community\",\"homepage\":\"http://symfony.com/contributors\"},{\"name\":\"Fabien Potencier\",\"email\":\"fabien@symfony.com\"}],\"description\":\"The Symfony PHP framework\",\"homepage\":\"http://symfony.com\",\"keywords\":[\"framework\"],\"time\":\"2013-06-11T11:46:38+00:00\"},{\"name\":\"twig/twig\",\"version\":\"v1.35.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/twigphp/Twig.git\",\"reference\":\"daa657073e55b0a78cce8fdd22682fddecc6385f\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/twigphp/Twig/zipball/daa657073e55b0a78cce8fdd22682fddecc6385f\",\"reference\":\"daa657073e55b0a78cce8fdd22682fddecc6385f\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.3.3\"},\"require-dev\":{\"psr/container\":\"^1.0\",\"symfony/debug\":\"~2.7\",\"symfony/phpunit-bridge\":\"~3.3@dev\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.35-dev\"}},\"autoload\":{\"psr-0\":{\"Twig_\":\"lib/\"},\"psr-4\":{\"Twig\\\":\"src/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"BSD-3-Clause\"],\"authors\":[{\"name\":\"Fabien Potencier\",\"email\":\"fabien@symfony.com\",\"homepage\":\"http://fabien.potencier.org\",\"role\":\"Lead Developer\"},{\"name\":\"Armin Ronacher\",\"email\":\"armin.ronacher@active-4.com\",\"role\":\"Project Founder\"},{\"name\":\"Twig Team\",\"homepage\":\"http://twig.sensiolabs.org/contributors\",\"role\":\"Contributors\"}],\"description\":\"Twig, the flexible, fast, and secure template language for PHP\",\"homepage\":\"http://twig.sensiolabs.org\",\"keywords\":[\"templating\"],\"time\":\"2017-09-27T18:06:46+00:00\"},{\"name\":\"yiisoft/yii\",\"version\":\"1.1.14\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/yiisoft/yii.git\",\"reference\":\"f0fee98ee84f70f1f3652f65562c9670e919cb4e\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/yiisoft/yii/zipball/f0fee98ee84f70f1f3652f65562c9670e919cb4e\",\"reference\":\"f0fee98ee84f70f1f3652f65562c9670e919cb4e\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.1.0\"},\"bin\":[\"framework/yiic\"],\"type\":\"library\",\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"BSD-3-Clause\"],\"authors\":[{\"name\":\"Qiang Xue\",\"email\":\"qiang.xue@gmail.com\",\"homepage\":\"http://www.yiiframework.com/\",\"role\":\"Founder and project lead\"},{\"name\":\"Alexander Makarov\",\"email\":\"sam@rmcreative.ru\",\"homepage\":\"http://rmcreative.ru/\",\"role\":\"Core framework development\"},{\"name\":\"Maurizio Domba\",\"homepage\":\"http://mdomba.info/\",\"role\":\"Core framework development\"},{\"name\":\"Carsten Brandt\",\"email\":\"mail@cebe.cc\",\"homepage\":\"http://cebe.cc/\",\"role\":\"Core framework development\"},{\"name\":\"Wei Zhuo\",\"email\":\"weizhuo@gmail.com\",\"role\":\"Project site maintenance and development\"},{\"name\":\"Sebastián Thierer\",\"email\":\"sebas@artfos.com\",\"role\":\"Component development\"},{\"name\":\"Jeffrey Winesett\",\"email\":\"jefftulsa@gmail.com\",\"role\":\"Documentation and marketing\"},{\"name\":\"Timur Ruziev\",\"email\":\"resurtm@gmail.com\",\"homepage\":\"http://resurtm.com/\",\"role\":\"Core framework development\"},{\"name\":\"Paul Klimov\",\"email\":\"klimov.paul@gmail.com\",\"role\":\"Core framework development\"}],\"description\":\"Yii Web Programming Framework\",\"homepage\":\"http://www.yiiframework.com/\",\"keywords\":[\"framework\",\"yii\"],\"time\":\"2013-08-12T00:12:08+00:00\"},{\"name\":\"zendframework/zendframework\",\"version\":\"2.1.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/zendframework/zendframework.git\",\"reference\":\"345a8cbedbe8de8a25bf18579fe54d169ac5075a\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/zendframework/zendframework/zipball/345a8cbedbe8de8a25bf18579fe54d169ac5075a\",\"reference\":\"345a8cbedbe8de8a25bf18579fe54d169ac5075a\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.3.3\"},\"replace\":{\"zendframework/zend-authentication\":\"self.version\",\"zendframework/zend-barcode\":\"self.version\",\"zendframework/zend-cache\":\"self.version\",\"zendframework/zend-captcha\":\"self.version\",\"zendframework/zend-code\":\"self.version\",\"zendframework/zend-config\":\"self.version\",\"zendframework/zend-console\":\"self.version\",\"zendframework/zend-crypt\":\"self.version\",\"zendframework/zend-db\":\"self.version\",\"zendframework/zend-debug\":\"self.version\",\"zendframework/zend-di\":\"self.version\",\"zendframework/zend-dom\":\"self.version\",\"zendframework/zend-escaper\":\"self.version\",\"zendframework/zend-eventmanager\":\"self.version\",\"zendframework/zend-feed\":\"self.version\",\"zendframework/zend-file\":\"self.version\",\"zendframework/zend-filter\":\"self.version\",\"zendframework/zend-form\":\"self.version\",\"zendframework/zend-http\":\"self.version\",\"zendframework/zend-i18n\":\"self.version\",\"zendframework/zend-inputfilter\":\"self.version\",\"zendframework/zend-json\":\"self.version\",\"zendframework/zend-ldap\":\"self.version\",\"zendframework/zend-loader\":\"self.version\",\"zendframework/zend-log\":\"self.version\",\"zendframework/zend-mail\":\"self.version\",\"zendframework/zend-math\":\"self.version\",\"zendframework/zend-memory\":\"self.version\",\"zendframework/zend-mime\":\"self.version\",\"zendframework/zend-modulemanager\":\"self.version\",\"zendframework/zend-mvc\":\"self.version\",\"zendframework/zend-navigation\":\"self.version\",\"zendframework/zend-paginator\":\"self.version\",\"zendframework/zend-permissions-acl\":\"self.version\",\"zendframework/zend-permissions-rbac\":\"self.version\",\"zendframework/zend-progressbar\":\"self.version\",\"zendframework/zend-serializer\":\"self.version\",\"zendframework/zend-server\":\"self.version\",\"zendframework/zend-servicemanager\":\"self.version\",\"zendframework/zend-session\":\"self.version\",\"zendframework/zend-soap\":\"self.version\",\"zendframework/zend-stdlib\":\"self.version\",\"zendframework/zend-tag\":\"self.version\",\"zendframework/zend-test\":\"self.version\",\"zendframework/zend-text\":\"self.version\",\"zendframework/zend-uri\":\"self.version\",\"zendframework/zend-validator\":\"self.version\",\"zendframework/zend-version\":\"self.version\",\"zendframework/zend-view\":\"self.version\",\"zendframework/zend-xmlrpc\":\"self.version\"},\"require-dev\":{\"doctrine/common\":\">=2.1\",\"phpunit/phpunit\":\"3.7.*\"},\"suggest\":{\"doctrine/common\":\"Doctrine\\Common >=2.1 for annotation features\",\"ext-intl\":\"ext/intl for i18n features\",\"pecl-weakref\":\"Implementation of weak references for Zend\\Stdlib\\CallbackHandler\",\"zendframework/zendpdf\":\"ZendPdf for creating PDF representations of barcodes\",\"zendframework/zendservice-recaptcha\":\"ZendService\\ReCaptcha for rendering ReCaptchas in Zend\\Captcha and/or Zend\\Form\"},\"bin\":[\"bin/classmap_generator.php\"],\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"2.1-dev\",\"dev-develop\":\"2.2-dev\"}},\"autoload\":{\"psr-0\":{\"Zend\\\":\"library/\",\"ZendTest\\\":\"tests/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"BSD-3-Clause\"],\"description\":\"Zend Framework 2\",\"homepage\":\"http://framework.zend.com/\",\"keywords\":[\"framework\",\"zf2\"],\"time\":\"2013-01-30T16:46:21+00:00\"}],\"packages-dev\":[],\"aliases\":[],\"minimum-stability\":\"stable\",\"stability-flags\":[],\"prefer-stable\":false,\"prefer-lowest\":false,\"platform\":{\"php\":\">=5.3.2\"},\"platform-dev\":[]}"
        }
      ],
      "target": {
        "contents": "{\"name\": \"vulnerable/project\",\"description\": \"A sample vulnerable project\",\"require\": {\"php\": \">=5.3.2\",\"symfony/symfony\": \"v2.3.1\",\"yiisoft/yii\": \"1.1.14\",\"zendframework/zendframework\": \"2.1.0\",\"aws/aws-sdk-php\": \"3.0.0\",\"doctrine/common\": \"2.5.0\"}}"
      }
    }
  }'
```

`POST /test/composer`

You can test your Composer packages for issues according to their manifest file & lockfile using this action. It takes a JSON object containing a "target" `composer.json` and a `composer.lock`.

> Body parameter

```json
{
  "encoding": "base64",
  "files": {
    "additional": [
      {
        "contents": "{\"_readme\":[\"This file locks the dependencies of your project to a known state\",\"Read more about it at https://getcomposer.org/doc/01-basic-usage.md#composer-lock-the-lock-file\",\"This file is @generated automatically\"],\"content-hash\":\"3a3771e545494c4c098e639bd68602ba\",\"packages\":[{\"name\":\"aws/aws-sdk-php\",\"version\":\"3.0.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/aws/aws-sdk-php.git\",\"reference\":\"4018c8f14a9e53003bb0417fa859c6a7ad57b53b\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/aws/aws-sdk-php/zipball/4018c8f14a9e53003bb0417fa859c6a7ad57b53b\",\"reference\":\"4018c8f14a9e53003bb0417fa859c6a7ad57b53b\",\"shasum\":\"\"},\"require\":{\"guzzlehttp/guzzle\":\"^5.3 || ^6.0.1\",\"guzzlehttp/promises\":\"^1.0.0\",\"guzzlehttp/psr7\":\"^1.0.0\",\"mtdowling/jmespath.php\":\"^2.2\",\"php\":\">=5.5\"},\"require-dev\":{\"ext-dom\":\"*\",\"ext-json\":\"*\",\"ext-openssl\":\"*\",\"ext-pcre\":\"*\",\"ext-simplexml\":\"*\",\"ext-spl\":\"*\",\"phpunit/phpunit\":\"^4.0\"},\"suggest\":{\"ext-curl\":\"To send requests using cURL\",\"ext-openssl\":\"Allows working with CloudFront private distributions and verifying received SNS messages\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"3.0-dev\"}},\"autoload\":{\"psr-4\":{\"Aws\\\":\"src/\"},\"files\":[\"src/functions.php\"]},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"Apache-2.0\"],\"authors\":[{\"name\":\"Amazon Web Services\",\"homepage\":\"http://aws.amazon.com\"}],\"description\":\"AWS SDK for PHP - Use Amazon Web Services in your PHP project\",\"homepage\":\"http://aws.amazon.com/sdkforphp\",\"keywords\":[\"amazon\",\"aws\",\"cloud\",\"dynamodb\",\"ec2\",\"glacier\",\"s3\",\"sdk\"],\"time\":\"2015-05-27T20:07:42+00:00\"},{\"name\":\"doctrine/annotations\",\"version\":\"v1.5.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/doctrine/annotations.git\",\"reference\":\"5beebb01b025c94e93686b7a0ed3edae81fe3e7f\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/doctrine/annotations/zipball/5beebb01b025c94e93686b7a0ed3edae81fe3e7f\",\"reference\":\"5beebb01b025c94e93686b7a0ed3edae81fe3e7f\",\"shasum\":\"\"},\"require\":{\"doctrine/lexer\":\"1.*\",\"php\":\"^7.1\"},\"require-dev\":{\"doctrine/cache\":\"1.*\",\"phpunit/phpunit\":\"^5.7\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.5.x-dev\"}},\"autoload\":{\"psr-4\":{\"Doctrine\\Common\\Annotations\\\":\"lib/Doctrine/Common/Annotations\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Roman Borschel\",\"email\":\"roman@code-factory.org\"},{\"name\":\"Benjamin Eberlei\",\"email\":\"kontakt@beberlei.de\"},{\"name\":\"Guilherme Blanco\",\"email\":\"guilhermeblanco@gmail.com\"},{\"name\":\"Jonathan Wage\",\"email\":\"jonwage@gmail.com\"},{\"name\":\"Johannes Schmitt\",\"email\":\"schmittjoh@gmail.com\"}],\"description\":\"Docblock Annotations Parser\",\"homepage\":\"http://www.doctrine-project.org\",\"keywords\":[\"annotations\",\"docblock\",\"parser\"],\"time\":\"2017-07-22T10:58:02+00:00\"},{\"name\":\"doctrine/cache\",\"version\":\"v1.7.1\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/doctrine/cache.git\",\"reference\":\"b3217d58609e9c8e661cd41357a54d926c4a2a1a\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/doctrine/cache/zipball/b3217d58609e9c8e661cd41357a54d926c4a2a1a\",\"reference\":\"b3217d58609e9c8e661cd41357a54d926c4a2a1a\",\"shasum\":\"\"},\"require\":{\"php\":\"~7.1\"},\"conflict\":{\"doctrine/common\":\">2.2,<2.4\"},\"require-dev\":{\"alcaeus/mongo-php-adapter\":\"^1.1\",\"mongodb/mongodb\":\"^1.1\",\"phpunit/phpunit\":\"^5.7\",\"predis/predis\":\"~1.0\"},\"suggest\":{\"alcaeus/mongo-php-adapter\":\"Required to use legacy MongoDB driver\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.7.x-dev\"}},\"autoload\":{\"psr-4\":{\"Doctrine\\Common\\Cache\\\":\"lib/Doctrine/Common/Cache\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Roman Borschel\",\"email\":\"roman@code-factory.org\"},{\"name\":\"Benjamin Eberlei\",\"email\":\"kontakt@beberlei.de\"},{\"name\":\"Guilherme Blanco\",\"email\":\"guilhermeblanco@gmail.com\"},{\"name\":\"Jonathan Wage\",\"email\":\"jonwage@gmail.com\"},{\"name\":\"Johannes Schmitt\",\"email\":\"schmittjoh@gmail.com\"}],\"description\":\"Caching library offering an object-oriented API for many cache backends\",\"homepage\":\"http://www.doctrine-project.org\",\"keywords\":[\"cache\",\"caching\"],\"time\":\"2017-08-25T07:02:50+00:00\"},{\"name\":\"doctrine/collections\",\"version\":\"v1.5.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/doctrine/collections.git\",\"reference\":\"a01ee38fcd999f34d9bfbcee59dbda5105449cbf\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/doctrine/collections/zipball/a01ee38fcd999f34d9bfbcee59dbda5105449cbf\",\"reference\":\"a01ee38fcd999f34d9bfbcee59dbda5105449cbf\",\"shasum\":\"\"},\"require\":{\"php\":\"^7.1\"},\"require-dev\":{\"doctrine/coding-standard\":\"~0.1@dev\",\"phpunit/phpunit\":\"^5.7\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.3.x-dev\"}},\"autoload\":{\"psr-0\":{\"Doctrine\\Common\\Collections\\\":\"lib/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Roman Borschel\",\"email\":\"roman@code-factory.org\"},{\"name\":\"Benjamin Eberlei\",\"email\":\"kontakt@beberlei.de\"},{\"name\":\"Guilherme Blanco\",\"email\":\"guilhermeblanco@gmail.com\"},{\"name\":\"Jonathan Wage\",\"email\":\"jonwage@gmail.com\"},{\"name\":\"Johannes Schmitt\",\"email\":\"schmittjoh@gmail.com\"}],\"description\":\"Collections Abstraction library\",\"homepage\":\"http://www.doctrine-project.org\",\"keywords\":[\"array\",\"collections\",\"iterator\"],\"time\":\"2017-07-22T10:37:32+00:00\"},{\"name\":\"doctrine/common\",\"version\":\"v2.5.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/doctrine/common.git\",\"reference\":\"cd8daf2501e10c63dced7b8b9b905844316ae9d3\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/doctrine/common/zipball/cd8daf2501e10c63dced7b8b9b905844316ae9d3\",\"reference\":\"cd8daf2501e10c63dced7b8b9b905844316ae9d3\",\"shasum\":\"\"},\"require\":{\"doctrine/annotations\":\"1.*\",\"doctrine/cache\":\"1.*\",\"doctrine/collections\":\"1.*\",\"doctrine/inflector\":\"1.*\",\"doctrine/lexer\":\"1.*\",\"php\":\">=5.3.2\"},\"require-dev\":{\"phpunit/phpunit\":\"~3.7\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"2.6.x-dev\"}},\"autoload\":{\"psr-0\":{\"Doctrine\\Common\\\":\"lib/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Roman Borschel\",\"email\":\"roman@code-factory.org\"},{\"name\":\"Benjamin Eberlei\",\"email\":\"kontakt@beberlei.de\"},{\"name\":\"Guilherme Blanco\",\"email\":\"guilhermeblanco@gmail.com\"},{\"name\":\"Jonathan Wage\",\"email\":\"jonwage@gmail.com\"},{\"name\":\"Johannes Schmitt\",\"email\":\"schmittjoh@gmail.com\"}],\"description\":\"Common Library for Doctrine projects\",\"homepage\":\"http://www.doctrine-project.org\",\"keywords\":[\"annotations\",\"collections\",\"eventmanager\",\"persistence\",\"spl\"],\"time\":\"2015-04-02T19:55:44+00:00\"},{\"name\":\"doctrine/inflector\",\"version\":\"v1.2.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/doctrine/inflector.git\",\"reference\":\"e11d84c6e018beedd929cff5220969a3c6d1d462\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/doctrine/inflector/zipball/e11d84c6e018beedd929cff5220969a3c6d1d462\",\"reference\":\"e11d84c6e018beedd929cff5220969a3c6d1d462\",\"shasum\":\"\"},\"require\":{\"php\":\"^7.0\"},\"require-dev\":{\"phpunit/phpunit\":\"^6.2\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.2.x-dev\"}},\"autoload\":{\"psr-4\":{\"Doctrine\\Common\\Inflector\\\":\"lib/Doctrine/Common/Inflector\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Roman Borschel\",\"email\":\"roman@code-factory.org\"},{\"name\":\"Benjamin Eberlei\",\"email\":\"kontakt@beberlei.de\"},{\"name\":\"Guilherme Blanco\",\"email\":\"guilhermeblanco@gmail.com\"},{\"name\":\"Jonathan Wage\",\"email\":\"jonwage@gmail.com\"},{\"name\":\"Johannes Schmitt\",\"email\":\"schmittjoh@gmail.com\"}],\"description\":\"Common String Manipulations with regard to casing and singular/plural rules.\",\"homepage\":\"http://www.doctrine-project.org\",\"keywords\":[\"inflection\",\"pluralize\",\"singularize\",\"string\"],\"time\":\"2017-07-22T12:18:28+00:00\"},{\"name\":\"doctrine/lexer\",\"version\":\"v1.0.1\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/doctrine/lexer.git\",\"reference\":\"83893c552fd2045dd78aef794c31e694c37c0b8c\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/doctrine/lexer/zipball/83893c552fd2045dd78aef794c31e694c37c0b8c\",\"reference\":\"83893c552fd2045dd78aef794c31e694c37c0b8c\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.3.2\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.0.x-dev\"}},\"autoload\":{\"psr-0\":{\"Doctrine\\Common\\Lexer\\\":\"lib/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Roman Borschel\",\"email\":\"roman@code-factory.org\"},{\"name\":\"Guilherme Blanco\",\"email\":\"guilhermeblanco@gmail.com\"},{\"name\":\"Johannes Schmitt\",\"email\":\"schmittjoh@gmail.com\"}],\"description\":\"Base library for a lexer that can be used in Top-Down, Recursive Descent Parsers.\",\"homepage\":\"http://www.doctrine-project.org\",\"keywords\":[\"lexer\",\"parser\"],\"time\":\"2014-09-09T13:34:57+00:00\"},{\"name\":\"guzzlehttp/guzzle\",\"version\":\"6.3.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/guzzle/guzzle.git\",\"reference\":\"f4db5a78a5ea468d4831de7f0bf9d9415e348699\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/guzzle/guzzle/zipball/f4db5a78a5ea468d4831de7f0bf9d9415e348699\",\"reference\":\"f4db5a78a5ea468d4831de7f0bf9d9415e348699\",\"shasum\":\"\"},\"require\":{\"guzzlehttp/promises\":\"^1.0\",\"guzzlehttp/psr7\":\"^1.4\",\"php\":\">=5.5\"},\"require-dev\":{\"ext-curl\":\"*\",\"phpunit/phpunit\":\"^4.0 || ^5.0\",\"psr/log\":\"^1.0\"},\"suggest\":{\"psr/log\":\"Required for using the Log middleware\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"6.2-dev\"}},\"autoload\":{\"files\":[\"src/functions_include.php\"],\"psr-4\":{\"GuzzleHttp\\\":\"src/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Michael Dowling\",\"email\":\"mtdowling@gmail.com\",\"homepage\":\"https://github.com/mtdowling\"}],\"description\":\"Guzzle is a PHP HTTP client library\",\"homepage\":\"http://guzzlephp.org/\",\"keywords\":[\"client\",\"curl\",\"framework\",\"http\",\"http client\",\"rest\",\"web service\"],\"time\":\"2017-06-22T18:50:49+00:00\"},{\"name\":\"guzzlehttp/promises\",\"version\":\"v1.3.1\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/guzzle/promises.git\",\"reference\":\"a59da6cf61d80060647ff4d3eb2c03a2bc694646\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/guzzle/promises/zipball/a59da6cf61d80060647ff4d3eb2c03a2bc694646\",\"reference\":\"a59da6cf61d80060647ff4d3eb2c03a2bc694646\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.5.0\"},\"require-dev\":{\"phpunit/phpunit\":\"^4.0\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.4-dev\"}},\"autoload\":{\"psr-4\":{\"GuzzleHttp\\Promise\\\":\"src/\"},\"files\":[\"src/functions_include.php\"]},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Michael Dowling\",\"email\":\"mtdowling@gmail.com\",\"homepage\":\"https://github.com/mtdowling\"}],\"description\":\"Guzzle promises library\",\"keywords\":[\"promise\"],\"time\":\"2016-12-20T10:07:11+00:00\"},{\"name\":\"guzzlehttp/psr7\",\"version\":\"1.4.2\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/guzzle/psr7.git\",\"reference\":\"f5b8a8512e2b58b0071a7280e39f14f72e05d87c\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/guzzle/psr7/zipball/f5b8a8512e2b58b0071a7280e39f14f72e05d87c\",\"reference\":\"f5b8a8512e2b58b0071a7280e39f14f72e05d87c\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.4.0\",\"psr/http-message\":\"~1.0\"},\"provide\":{\"psr/http-message-implementation\":\"1.0\"},\"require-dev\":{\"phpunit/phpunit\":\"~4.0\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.4-dev\"}},\"autoload\":{\"psr-4\":{\"GuzzleHttp\\Psr7\\\":\"src/\"},\"files\":[\"src/functions_include.php\"]},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Michael Dowling\",\"email\":\"mtdowling@gmail.com\",\"homepage\":\"https://github.com/mtdowling\"},{\"name\":\"Tobias Schultze\",\"homepage\":\"https://github.com/Tobion\"}],\"description\":\"PSR-7 message implementation that also provides common utility methods\",\"keywords\":[\"http\",\"message\",\"request\",\"response\",\"stream\",\"uri\",\"url\"],\"time\":\"2017-03-20T17:10:46+00:00\"},{\"name\":\"mtdowling/jmespath.php\",\"version\":\"2.4.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/jmespath/jmespath.php.git\",\"reference\":\"adcc9531682cf87dfda21e1fd5d0e7a41d292fac\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/jmespath/jmespath.php/zipball/adcc9531682cf87dfda21e1fd5d0e7a41d292fac\",\"reference\":\"adcc9531682cf87dfda21e1fd5d0e7a41d292fac\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.4.0\"},\"require-dev\":{\"phpunit/phpunit\":\"~4.0\"},\"bin\":[\"bin/jp.php\"],\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"2.0-dev\"}},\"autoload\":{\"psr-4\":{\"JmesPath\\\":\"src/\"},\"files\":[\"src/JmesPath.php\"]},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Michael Dowling\",\"email\":\"mtdowling@gmail.com\",\"homepage\":\"https://github.com/mtdowling\"}],\"description\":\"Declaratively specify how to extract elements from a JSON document\",\"keywords\":[\"json\",\"jsonpath\"],\"time\":\"2016-12-03T22:08:25+00:00\"},{\"name\":\"psr/http-message\",\"version\":\"1.0.1\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/php-fig/http-message.git\",\"reference\":\"f6561bf28d520154e4b0ec72be95418abe6d9363\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/php-fig/http-message/zipball/f6561bf28d520154e4b0ec72be95418abe6d9363\",\"reference\":\"f6561bf28d520154e4b0ec72be95418abe6d9363\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.3.0\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.0.x-dev\"}},\"autoload\":{\"psr-4\":{\"Psr\\Http\\Message\\\":\"src/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"PHP-FIG\",\"homepage\":\"http://www.php-fig.org/\"}],\"description\":\"Common interface for HTTP messages\",\"homepage\":\"https://github.com/php-fig/http-message\",\"keywords\":[\"http\",\"http-message\",\"psr\",\"psr-7\",\"request\",\"response\"],\"time\":\"2016-08-06T14:39:51+00:00\"},{\"name\":\"psr/log\",\"version\":\"1.0.2\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/php-fig/log.git\",\"reference\":\"4ebe3a8bf773a19edfe0a84b6585ba3d401b724d\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/php-fig/log/zipball/4ebe3a8bf773a19edfe0a84b6585ba3d401b724d\",\"reference\":\"4ebe3a8bf773a19edfe0a84b6585ba3d401b724d\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.3.0\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.0.x-dev\"}},\"autoload\":{\"psr-4\":{\"Psr\\Log\\\":\"Psr/Log/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"PHP-FIG\",\"homepage\":\"http://www.php-fig.org/\"}],\"description\":\"Common interface for logging libraries\",\"homepage\":\"https://github.com/php-fig/log\",\"keywords\":[\"log\",\"psr\",\"psr-3\"],\"time\":\"2016-10-10T12:19:37+00:00\"},{\"name\":\"symfony/icu\",\"version\":\"v1.2.2\",\"target-dir\":\"Symfony/Component/Icu\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/symfony/icu.git\",\"reference\":\"d4d85d6055b87f394d941b45ddd3a9173e1e3d2a\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/symfony/icu/zipball/d4d85d6055b87f394d941b45ddd3a9173e1e3d2a\",\"reference\":\"d4d85d6055b87f394d941b45ddd3a9173e1e3d2a\",\"shasum\":\"\"},\"require\":{\"ext-intl\":\"*\",\"lib-icu\":\">=4.4\",\"php\":\">=5.3.3\",\"symfony/intl\":\"~2.3\"},\"type\":\"library\",\"autoload\":{\"psr-0\":{\"Symfony\\Component\\Icu\\\":\"\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Symfony Community\",\"homepage\":\"http://symfony.com/contributors\"},{\"name\":\"Bernhard Schussek\",\"email\":\"bschussek@gmail.com\"}],\"description\":\"Contains an excerpt of the ICU data and classes to load it.\",\"homepage\":\"http://symfony.com\",\"keywords\":[\"icu\",\"intl\"],\"abandoned\":\"symfony/intl\",\"time\":\"2014-07-25T09:58:17+00:00\"},{\"name\":\"symfony/symfony\",\"version\":\"v2.3.1\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/symfony/symfony.git\",\"reference\":\"0902c606b4df1161f5b786ae89f37b71380b1f23\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/symfony/symfony/zipball/0902c606b4df1161f5b786ae89f37b71380b1f23\",\"reference\":\"0902c606b4df1161f5b786ae89f37b71380b1f23\",\"shasum\":\"\"},\"require\":{\"doctrine/common\":\"~2.2\",\"php\":\">=5.3.3\",\"psr/log\":\"~1.0\",\"symfony/icu\":\"~1.0\",\"twig/twig\":\"~1.11\"},\"replace\":{\"symfony/browser-kit\":\"self.version\",\"symfony/class-loader\":\"self.version\",\"symfony/config\":\"self.version\",\"symfony/console\":\"self.version\",\"symfony/css-selector\":\"self.version\",\"symfony/debug\":\"self.version\",\"symfony/dependency-injection\":\"self.version\",\"symfony/doctrine-bridge\":\"self.version\",\"symfony/dom-crawler\":\"self.version\",\"symfony/event-dispatcher\":\"self.version\",\"symfony/filesystem\":\"self.version\",\"symfony/finder\":\"self.version\",\"symfony/form\":\"self.version\",\"symfony/framework-bundle\":\"self.version\",\"symfony/http-foundation\":\"self.version\",\"symfony/http-kernel\":\"self.version\",\"symfony/intl\":\"self.version\",\"symfony/locale\":\"self.version\",\"symfony/monolog-bridge\":\"self.version\",\"symfony/options-resolver\":\"self.version\",\"symfony/process\":\"self.version\",\"symfony/propel1-bridge\":\"self.version\",\"symfony/property-access\":\"self.version\",\"symfony/proxy-manager-bridge\":\"self.version\",\"symfony/routing\":\"self.version\",\"symfony/security\":\"self.version\",\"symfony/security-bundle\":\"self.version\",\"symfony/serializer\":\"self.version\",\"symfony/stopwatch\":\"self.version\",\"symfony/swiftmailer-bridge\":\"self.version\",\"symfony/templating\":\"self.version\",\"symfony/translation\":\"self.version\",\"symfony/twig-bridge\":\"self.version\",\"symfony/twig-bundle\":\"self.version\",\"symfony/validator\":\"self.version\",\"symfony/web-profiler-bundle\":\"self.version\",\"symfony/yaml\":\"self.version\"},\"require-dev\":{\"doctrine/data-fixtures\":\"1.0.*\",\"doctrine/dbal\":\"~2.2\",\"doctrine/orm\":\"~2.2,>=2.2.3\",\"ircmaxell/password-compat\":\"1.0.*\",\"monolog/monolog\":\"~1.3\",\"ocramius/proxy-manager\":\">=0.3.1,<0.4-dev\",\"propel/propel1\":\"1.6.*\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"2.3-dev\"}},\"autoload\":{\"psr-0\":{\"Symfony\\\":\"src/\"},\"classmap\":[\"src/Symfony/Component/HttpFoundation/Resources/stubs\",\"src/Symfony/Component/Intl/Resources/stubs\"],\"files\":[\"src/Symfony/Component/Intl/Resources/stubs/functions.php\"]},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"MIT\"],\"authors\":[{\"name\":\"Symfony Community\",\"homepage\":\"http://symfony.com/contributors\"},{\"name\":\"Fabien Potencier\",\"email\":\"fabien@symfony.com\"}],\"description\":\"The Symfony PHP framework\",\"homepage\":\"http://symfony.com\",\"keywords\":[\"framework\"],\"time\":\"2013-06-11T11:46:38+00:00\"},{\"name\":\"twig/twig\",\"version\":\"v1.35.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/twigphp/Twig.git\",\"reference\":\"daa657073e55b0a78cce8fdd22682fddecc6385f\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/twigphp/Twig/zipball/daa657073e55b0a78cce8fdd22682fddecc6385f\",\"reference\":\"daa657073e55b0a78cce8fdd22682fddecc6385f\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.3.3\"},\"require-dev\":{\"psr/container\":\"^1.0\",\"symfony/debug\":\"~2.7\",\"symfony/phpunit-bridge\":\"~3.3@dev\"},\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"1.35-dev\"}},\"autoload\":{\"psr-0\":{\"Twig_\":\"lib/\"},\"psr-4\":{\"Twig\\\":\"src/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"BSD-3-Clause\"],\"authors\":[{\"name\":\"Fabien Potencier\",\"email\":\"fabien@symfony.com\",\"homepage\":\"http://fabien.potencier.org\",\"role\":\"Lead Developer\"},{\"name\":\"Armin Ronacher\",\"email\":\"armin.ronacher@active-4.com\",\"role\":\"Project Founder\"},{\"name\":\"Twig Team\",\"homepage\":\"http://twig.sensiolabs.org/contributors\",\"role\":\"Contributors\"}],\"description\":\"Twig, the flexible, fast, and secure template language for PHP\",\"homepage\":\"http://twig.sensiolabs.org\",\"keywords\":[\"templating\"],\"time\":\"2017-09-27T18:06:46+00:00\"},{\"name\":\"yiisoft/yii\",\"version\":\"1.1.14\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/yiisoft/yii.git\",\"reference\":\"f0fee98ee84f70f1f3652f65562c9670e919cb4e\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/yiisoft/yii/zipball/f0fee98ee84f70f1f3652f65562c9670e919cb4e\",\"reference\":\"f0fee98ee84f70f1f3652f65562c9670e919cb4e\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.1.0\"},\"bin\":[\"framework/yiic\"],\"type\":\"library\",\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"BSD-3-Clause\"],\"authors\":[{\"name\":\"Qiang Xue\",\"email\":\"qiang.xue@gmail.com\",\"homepage\":\"http://www.yiiframework.com/\",\"role\":\"Founder and project lead\"},{\"name\":\"Alexander Makarov\",\"email\":\"sam@rmcreative.ru\",\"homepage\":\"http://rmcreative.ru/\",\"role\":\"Core framework development\"},{\"name\":\"Maurizio Domba\",\"homepage\":\"http://mdomba.info/\",\"role\":\"Core framework development\"},{\"name\":\"Carsten Brandt\",\"email\":\"mail@cebe.cc\",\"homepage\":\"http://cebe.cc/\",\"role\":\"Core framework development\"},{\"name\":\"Wei Zhuo\",\"email\":\"weizhuo@gmail.com\",\"role\":\"Project site maintenance and development\"},{\"name\":\"Sebastián Thierer\",\"email\":\"sebas@artfos.com\",\"role\":\"Component development\"},{\"name\":\"Jeffrey Winesett\",\"email\":\"jefftulsa@gmail.com\",\"role\":\"Documentation and marketing\"},{\"name\":\"Timur Ruziev\",\"email\":\"resurtm@gmail.com\",\"homepage\":\"http://resurtm.com/\",\"role\":\"Core framework development\"},{\"name\":\"Paul Klimov\",\"email\":\"klimov.paul@gmail.com\",\"role\":\"Core framework development\"}],\"description\":\"Yii Web Programming Framework\",\"homepage\":\"http://www.yiiframework.com/\",\"keywords\":[\"framework\",\"yii\"],\"time\":\"2013-08-12T00:12:08+00:00\"},{\"name\":\"zendframework/zendframework\",\"version\":\"2.1.0\",\"source\":{\"type\":\"git\",\"url\":\"https://github.com/zendframework/zendframework.git\",\"reference\":\"345a8cbedbe8de8a25bf18579fe54d169ac5075a\"},\"dist\":{\"type\":\"zip\",\"url\":\"https://api.github.com/repos/zendframework/zendframework/zipball/345a8cbedbe8de8a25bf18579fe54d169ac5075a\",\"reference\":\"345a8cbedbe8de8a25bf18579fe54d169ac5075a\",\"shasum\":\"\"},\"require\":{\"php\":\">=5.3.3\"},\"replace\":{\"zendframework/zend-authentication\":\"self.version\",\"zendframework/zend-barcode\":\"self.version\",\"zendframework/zend-cache\":\"self.version\",\"zendframework/zend-captcha\":\"self.version\",\"zendframework/zend-code\":\"self.version\",\"zendframework/zend-config\":\"self.version\",\"zendframework/zend-console\":\"self.version\",\"zendframework/zend-crypt\":\"self.version\",\"zendframework/zend-db\":\"self.version\",\"zendframework/zend-debug\":\"self.version\",\"zendframework/zend-di\":\"self.version\",\"zendframework/zend-dom\":\"self.version\",\"zendframework/zend-escaper\":\"self.version\",\"zendframework/zend-eventmanager\":\"self.version\",\"zendframework/zend-feed\":\"self.version\",\"zendframework/zend-file\":\"self.version\",\"zendframework/zend-filter\":\"self.version\",\"zendframework/zend-form\":\"self.version\",\"zendframework/zend-http\":\"self.version\",\"zendframework/zend-i18n\":\"self.version\",\"zendframework/zend-inputfilter\":\"self.version\",\"zendframework/zend-json\":\"self.version\",\"zendframework/zend-ldap\":\"self.version\",\"zendframework/zend-loader\":\"self.version\",\"zendframework/zend-log\":\"self.version\",\"zendframework/zend-mail\":\"self.version\",\"zendframework/zend-math\":\"self.version\",\"zendframework/zend-memory\":\"self.version\",\"zendframework/zend-mime\":\"self.version\",\"zendframework/zend-modulemanager\":\"self.version\",\"zendframework/zend-mvc\":\"self.version\",\"zendframework/zend-navigation\":\"self.version\",\"zendframework/zend-paginator\":\"self.version\",\"zendframework/zend-permissions-acl\":\"self.version\",\"zendframework/zend-permissions-rbac\":\"self.version\",\"zendframework/zend-progressbar\":\"self.version\",\"zendframework/zend-serializer\":\"self.version\",\"zendframework/zend-server\":\"self.version\",\"zendframework/zend-servicemanager\":\"self.version\",\"zendframework/zend-session\":\"self.version\",\"zendframework/zend-soap\":\"self.version\",\"zendframework/zend-stdlib\":\"self.version\",\"zendframework/zend-tag\":\"self.version\",\"zendframework/zend-test\":\"self.version\",\"zendframework/zend-text\":\"self.version\",\"zendframework/zend-uri\":\"self.version\",\"zendframework/zend-validator\":\"self.version\",\"zendframework/zend-version\":\"self.version\",\"zendframework/zend-view\":\"self.version\",\"zendframework/zend-xmlrpc\":\"self.version\"},\"require-dev\":{\"doctrine/common\":\">=2.1\",\"phpunit/phpunit\":\"3.7.*\"},\"suggest\":{\"doctrine/common\":\"Doctrine\\Common >=2.1 for annotation features\",\"ext-intl\":\"ext/intl for i18n features\",\"pecl-weakref\":\"Implementation of weak references for Zend\\Stdlib\\CallbackHandler\",\"zendframework/zendpdf\":\"ZendPdf for creating PDF representations of barcodes\",\"zendframework/zendservice-recaptcha\":\"ZendService\\ReCaptcha for rendering ReCaptchas in Zend\\Captcha and/or Zend\\Form\"},\"bin\":[\"bin/classmap_generator.php\"],\"type\":\"library\",\"extra\":{\"branch-alias\":{\"dev-master\":\"2.1-dev\",\"dev-develop\":\"2.2-dev\"}},\"autoload\":{\"psr-0\":{\"Zend\\\":\"library/\",\"ZendTest\\\":\"tests/\"}},\"notification-url\":\"https://packagist.org/downloads/\",\"license\":[\"BSD-3-Clause\"],\"description\":\"Zend Framework 2\",\"homepage\":\"http://framework.zend.com/\",\"keywords\":[\"framework\",\"zf2\"],\"time\":\"2013-01-30T16:46:21+00:00\"}],\"packages-dev\":[],\"aliases\":[],\"minimum-stability\":\"stable\",\"stability-flags\":[],\"prefer-stable\":false,\"prefer-lowest\":false,\"platform\":{\"php\":\">=5.3.2\"},\"platform-dev\":[]}"
      }
    ],
    "target": {
      "contents": "{\"name\": \"vulnerable/project\",\"description\": \"A sample vulnerable project\",\"require\": {\"php\": \">=5.3.2\",\"symfony/symfony\": \"v2.3.1\",\"yiisoft/yii\": \"1.1.14\",\"zendframework/zendframework\": \"2.1.0\",\"aws/aws-sdk-php\": \"3.0.0\",\"doctrine/common\": \"2.5.0\"}}"
    }
  }
}
```

<h3 id="test-composerjson-composerlock-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» encoding|body|string|false|the encoding for the manifest files sent.|
|» files|body|object|true|The manifest files:|
|» » additional|body|[object]|true|a lockfile encoded according the the "encoding" field.|
|» » target|body|object|true|the `composer.json` file, encoded according the the "encoding" field.|
|» » » contents|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encoding|plain|
|» encoding|base64|

> Example responses

> 200 Response

````json
{
  "dependencyCount": 31,
  "issues": {
    "licenses": [],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
        "credit": [
          "Ryan Lane"
        ],
        "cvssScore": 7.8,
        "description": "## Overview\n  Affected versions of [`aws/aws-sdk-php`](https://packagist.org/packages/aws/aws-sdk-php) are vulnerable to Arbitrary Code Execution.\n\nDoctrine Annotations before 1.2.7, Cache before 1.3.2 and 1.4.x before 1.4.2, Common before 2.4.3 and 2.5.x before 2.5.1, ORM before 2.4.8 or 2.5.x before 2.5.1, MongoDB ODM before 1.0.2, and MongoDB ODM Bundle before 3.0.1 use world-writable permissions for cache directories, which allows local users to execute arbitrary PHP code with additional privileges by leveraging an application with the umask set to 0 and that executes cache entries as code.\n\n## Remediation\nUpgrade `aws/aws-sdk-php` to version 3.2.1 or higher.\n\n## References\n- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2015-5723)\n- [Github ChangeLog](https://github.com/aws/aws-sdk-php/blob/master/CHANGELOG.md#321---2015-07-23)\n",
        "disclosureTime": "2015-07-24T00:41:41Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "aws/aws-sdk-php@3.0.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-AWSAWSSDKPHP-70003",
        "identifiers": {
          "CVE": [
            "CVE-2015-5723"
          ],
          "CWE": [
            "CWE-264"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "aws/aws-sdk-php",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2015-07-24T00:41:41Z",
        "semver": {
          "vulnerable": [
            "<3.2.1"
          ]
        },
        "severity": "high",
        "title": "Arbitrary Code Execution",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-AWSAWSSDKPHP-70003",
        "version": "3.0.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
        "credit": [
          "Ryan Lane"
        ],
        "cvssScore": 7.8,
        "description": "## Overview\nAffected versions of [`doctrine/common`](https://packagist.org/packages/doctrine/common) are vulnerable to Arbitrary Code Execution.\n\nDoctrine Annotations before 1.2.7, Cache before 1.3.2 and 1.4.x before 1.4.2, Common before 2.4.3 and 2.5.x before 2.5.1, ORM before 2.4.8 or 2.5.x before 2.5.1, MongoDB ODM before 1.0.2, and MongoDB ODM Bundle before 3.0.1 use world-writable permissions for cache directories, which allows local users to execute arbitrary PHP code with additional privileges by leveraging an application with the umask set to 0 and that executes cache entries as code.\n\n## Remediation\nUpgrade `doctrine/common` to version 2.5.1, 2.4.3 or higher.\n\n## References\n- [Doctrine Release Notes](http://www.doctrine-project.org/2015/08/31/security_misconfiguration_vulnerability_in_various_doctrine_projects.html)\n",
        "disclosureTime": "2015-08-31T14:42:59Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "doctrine/common@2.5.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-DOCTRINECOMMON-70024",
        "identifiers": {
          "CVE": [
            "CVE-2015-5723"
          ],
          "CWE": [
            "CWE-94"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "doctrine/common",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2015-08-31T14:42:59Z",
        "semver": {
          "vulnerable": [
            "<2.4.3",
            ">=2.5.0, <2.5.1"
          ]
        },
        "severity": "high",
        "title": "Arbitrary Code Execution",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-DOCTRINECOMMON-70024",
        "version": "2.5.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
        "credit": [
          "Ryan Lane"
        ],
        "cvssScore": 7.8,
        "description": "## Overview\nAffected versions of [`doctrine/common`](https://packagist.org/packages/doctrine/common) are vulnerable to Arbitrary Code Execution.\n\nDoctrine Annotations before 1.2.7, Cache before 1.3.2 and 1.4.x before 1.4.2, Common before 2.4.3 and 2.5.x before 2.5.1, ORM before 2.4.8 or 2.5.x before 2.5.1, MongoDB ODM before 1.0.2, and MongoDB ODM Bundle before 3.0.1 use world-writable permissions for cache directories, which allows local users to execute arbitrary PHP code with additional privileges by leveraging an application with the umask set to 0 and that executes cache entries as code.\n\n## Remediation\nUpgrade `doctrine/common` to version 2.5.1, 2.4.3 or higher.\n\n## References\n- [Doctrine Release Notes](http://www.doctrine-project.org/2015/08/31/security_misconfiguration_vulnerability_in_various_doctrine_projects.html)\n",
        "disclosureTime": "2015-08-31T14:42:59Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1",
          "doctrine/common@2.5.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-DOCTRINECOMMON-70024",
        "identifiers": {
          "CVE": [
            "CVE-2015-5723"
          ],
          "CWE": [
            "CWE-94"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "doctrine/common",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2015-08-31T14:42:59Z",
        "semver": {
          "vulnerable": [
            "<2.4.3",
            ">=2.5.0, <2.5.1"
          ]
        },
        "severity": "high",
        "title": "Arbitrary Code Execution",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-DOCTRINECOMMON-70024",
        "version": "2.5.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 6.1,
        "description": "## Overview\n\n[symfony/symfony](https://packagist.org/packages/symfony/symfony) is a PHP framework for web applications and a set of reusable PHP components.\n\n\nAffected versions of this package are vulnerable to Cross-site Scripting (XSS).\nA remote attacker could inject arbitrary web script or HTML via the \"file\" parameter in a URL.\n\n## Details\nA cross-site scripting attack occurs when the attacker tricks a legitimate web-based application or site to accept a request as originating from a trusted source.\r\n\r\nThis is done by escaping the context of the web application; the web application then delivers that data to its users along with other trusted dynamic content, without validating it. The browser unknowingly executes malicious script on the client side (through client-side languages; usually JavaScript or HTML)  in order to perform actions that are otherwise typically blocked by the browser’s Same Origin Policy.\r\n\r\nֿInjecting malicious code is the most prevalent manner by which XSS is exploited; for this reason, escaping characters in order to prevent this manipulation is the top method for securing code against this vulnerability.\r\n\r\nEscaping means that the application is coded to mark key characters, and particularly key characters included in user input, to prevent those characters from being interpreted in a dangerous context. For example, in HTML, `<` can be coded as  `&lt`; and `>` can be coded as `&gt`; in order to be interpreted and displayed as themselves in text, while within the code itself, they are used for HTML tags. If malicious content is injected into an application that escapes special characters and that malicious content uses `<` and `>` as HTML tags, those characters are nonetheless not interpreted as HTML tags by the browser if they’ve been correctly escaped in the application code and in this way the attempted attack is diverted.\r\n \r\nThe most prominent use of XSS is to steal cookies (source: OWASP HttpOnly) and hijack user sessions, but XSS exploits have been used to expose sensitive information, enable access to privileged services and functionality and deliver malware. \r\n\r\n### Types of attacks\r\nThere are a few methods by which XSS can be manipulated:\r\n\r\n|Type|Origin|Description|\r\n|--|--|--|\r\n|**Stored**|Server|The malicious code is inserted in the application (usually as a link) by the attacker. The code is activated every time a user clicks the link.|\r\n|**Reflected**|Server|The attacker delivers a malicious link externally from the vulnerable web site application to a user. When clicked, malicious code is sent to the vulnerable web site, which reflects the attack back to the user’s browser.| \r\n|**DOM-based**|Client|The attacker forces the user’s browser to render a malicious page. The data in the page itself delivers the cross-site scripting data.|\r\n|**Mutated**| |The attacker injects code that appears safe, but is then rewritten and modified by the browser, while parsing the markup. An example is rebalancing unclosed quotation marks or even adding quotation marks to unquoted parameters.|\r\n\r\n### Affected environments\r\nThe following environments are susceptible to an XSS attack:\r\n\r\n* Web servers\r\n* Application servers\r\n* Web application environments\r\n\r\n### How to prevent\r\nThis section describes the top best practices designed to specifically protect your code: \r\n\r\n* Sanitize data input in an HTTP request before reflecting it back, ensuring all data is validated, filtered or escaped before echoing anything back to the user, such as the values of query parameters during searches. \r\n* Convert special characters such as `?`, `&`, `/`, `<`, `>` and spaces to their respective HTML or URL encoded equivalents. \r\n* Give users the option to disable client-side scripts.\r\n* Redirect invalid requests.\r\n* Detect simultaneous logins, including those from two separate IP addresses, and invalidate those sessions.\r\n* Use and enforce a Content Security Policy (source: Wikipedia) to disable any features that might be manipulated for an XSS attack.\r\n* Read the documentation for any of the libraries referenced in your code to understand which elements allow for embedded HTML.\n\n## Remediation\n\nUpgrade `symfony/symfony` to version 4.1 or higher.\n\n\n## References\n\n- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-12040)\n",
        "disclosureTime": "2018-06-08T00:35:49Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-173743",
        "identifiers": {
          "CVE": [
            "CVE-2018-12040"
          ],
          "CWE": [
            "CWE-79"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2018-06-14T00:35:49Z",
        "semver": {
          "vulnerable": [
            "<4.1"
          ]
        },
        "severity": "medium",
        "title": "Cross-site Scripting (XSS)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-173743",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:C/C:L/I:L/A:N",
        "credit": [
          "Chaosversum"
        ],
        "cvssScore": 7.2,
        "description": "## Overview\n\n[symfony/symfony](https://packagist.org/packages/symfony/symfony) is a PHP framework for web applications and a set of reusable PHP components.\n\n\nAffected versions of this package are vulnerable to Host Header Injection.\nWhen using `HttpCache`, the values of the `X-Forwarded-Host` headers are implicitly set as trusted while this should be forbidden, leading to potential host header injection.\n\n## Remediation\n\nUpgrade `symfony/symfony` to version 2.7.49, 2.8.44, 3.3.18, 3.4.14, 4.0.14, 4.1.2 or higher.\n\n\n## References\n\n- [GitHub Commit](https://github.com/symfony/symfony/commit/725dee4cd8b4ccd52e335ae4b4522242cea9bd4a)\n\n- [GitHub Release Tag 4.1.3](https://github.com/symfony/symfony/releases/tag/v4.1.3)\n\n- [Symphony Security Blog](https://symfony.com/blog/cve-2018-14774-possible-host-header-injection-when-using-httpcache)\n",
        "disclosureTime": "2018-07-31T17:24:43Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-173744",
        "identifiers": {
          "CVE": [
            "CVE-2018-14774"
          ],
          "CWE": [
            "CWE-444"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2018-08-05T13:44:27Z",
        "semver": {
          "vulnerable": [
            "<2.7.49",
            ">=2.8.0, <2.8.44",
            ">=3.3.0, <3.3.18",
            ">=3.4.0, <3.4.14",
            ">=4.0.0, <4.0.14",
            ">=4.1.0, <4.1.2"
          ]
        },
        "severity": "high",
        "title": "Host Header Injection",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-173744",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 6.1,
        "description": "## Overview\n\n[symfony/symfony](https://packagist.org/packages/symfony/symfony) is a PHP framework for web applications and a set of reusable PHP components.\n\n\nAffected versions of this package are vulnerable to Cross-site Scripting (XSS)\nvia the content page.\n\n## Details\nA cross-site scripting attack occurs when the attacker tricks a legitimate web-based application or site to accept a request as originating from a trusted source.\r\n\r\nThis is done by escaping the context of the web application; the web application then delivers that data to its users along with other trusted dynamic content, without validating it. The browser unknowingly executes malicious script on the client side (through client-side languages; usually JavaScript or HTML)  in order to perform actions that are otherwise typically blocked by the browser’s Same Origin Policy.\r\n\r\nֿInjecting malicious code is the most prevalent manner by which XSS is exploited; for this reason, escaping characters in order to prevent this manipulation is the top method for securing code against this vulnerability.\r\n\r\nEscaping means that the application is coded to mark key characters, and particularly key characters included in user input, to prevent those characters from being interpreted in a dangerous context. For example, in HTML, `<` can be coded as  `&lt`; and `>` can be coded as `&gt`; in order to be interpreted and displayed as themselves in text, while within the code itself, they are used for HTML tags. If malicious content is injected into an application that escapes special characters and that malicious content uses `<` and `>` as HTML tags, those characters are nonetheless not interpreted as HTML tags by the browser if they’ve been correctly escaped in the application code and in this way the attempted attack is diverted.\r\n \r\nThe most prominent use of XSS is to steal cookies (source: OWASP HttpOnly) and hijack user sessions, but XSS exploits have been used to expose sensitive information, enable access to privileged services and functionality and deliver malware. \r\n\r\n### Types of attacks\r\nThere are a few methods by which XSS can be manipulated:\r\n\r\n|Type|Origin|Description|\r\n|--|--|--|\r\n|**Stored**|Server|The malicious code is inserted in the application (usually as a link) by the attacker. The code is activated every time a user clicks the link.|\r\n|**Reflected**|Server|The attacker delivers a malicious link externally from the vulnerable web site application to a user. When clicked, malicious code is sent to the vulnerable web site, which reflects the attack back to the user’s browser.| \r\n|**DOM-based**|Client|The attacker forces the user’s browser to render a malicious page. The data in the page itself delivers the cross-site scripting data.|\r\n|**Mutated**| |The attacker injects code that appears safe, but is then rewritten and modified by the browser, while parsing the markup. An example is rebalancing unclosed quotation marks or even adding quotation marks to unquoted parameters.|\r\n\r\n### Affected environments\r\nThe following environments are susceptible to an XSS attack:\r\n\r\n* Web servers\r\n* Application servers\r\n* Web application environments\r\n\r\n### How to prevent\r\nThis section describes the top best practices designed to specifically protect your code: \r\n\r\n* Sanitize data input in an HTTP request before reflecting it back, ensuring all data is validated, filtered or escaped before echoing anything back to the user, such as the values of query parameters during searches. \r\n* Convert special characters such as `?`, `&`, `/`, `<`, `>` and spaces to their respective HTML or URL encoded equivalents. \r\n* Give users the option to disable client-side scripts.\r\n* Redirect invalid requests.\r\n* Detect simultaneous logins, including those from two separate IP addresses, and invalidate those sessions.\r\n* Use and enforce a Content Security Policy (source: Wikipedia) to disable any features that might be manipulated for an XSS attack.\r\n* Read the documentation for any of the libraries referenced in your code to understand which elements allow for embedded HTML.\n\n## Remediation\n\nUpgrade `symfony/symfony` to version 2.7.7 or higher.\n\n\n## References\n\n- [GitHub Commit](https://github.com/symphonycms/symphony-2/commit/1ace6b31867cc83267b3550686271c9c65ac3ec0)\n\n- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-12043)\n",
        "disclosureTime": "2018-06-07T21:05:47Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-173745",
        "identifiers": {
          "CVE": [
            "CVE-2018-12043"
          ],
          "CWE": [
            "CWE-79"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2018-06-13T10:56:51Z",
        "semver": {
          "vulnerable": [
            "<2.7.7"
          ]
        },
        "severity": "medium",
        "title": "Cross-site Scripting (XSS)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-173745",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:N",
        "credit": [
          "Alexandre Salome"
        ],
        "cvssScore": 3.7,
        "description": "## Overview\nAffected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Loss of Information.\n\nWhen using the Validator component, if Symfony\\\\Component\\\\Validator\\\\Mapping\\\\Cache\\\\ApcCache is enabled (or any other cache implementing Symfony\\\\Component\\\\Validator\\\\Mapping\\\\Cache\\\\CacheInterface), some information is lost during serialization (the collectionCascaded and the collectionCascadedDeeply fields).\n\n## Remediation\nUpgrade `symfony/symfony` to version 2.3.3, 2.1.12, 2.2.5, 2.0.24 or higher.\n\n## References\n- [Symfony Release Notes](http://symfony.com/blog/security-releases-symfony-2-0-24-2-1-12-2-2-5-and-2-3-3-released)\n",
        "disclosureTime": "2013-08-17T07:55:32Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-70207",
        "identifiers": {
          "CVE": [
            "CVE-2013-4751"
          ],
          "CWE": [
            "CWE-221"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2013-08-17T07:55:32Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.3",
            ">=2.1.0, <2.1.12",
            ">=2.2.0, <2.2.5",
            ">=2, <2.0.24"
          ]
        },
        "severity": "low",
        "title": "Loss of Information",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70207",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:L/A:N",
        "credit": [
          "Jordan Alliot"
        ],
        "cvssScore": 8.2,
        "description": "## Overview\nAffected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to HTTP Host Header Poisoning.\n\n## Remediation\nUpgrade `symfony/symfony` to version 2.3.3, 2.1.12, 2.2.5, 2.0.24 or higher.\n\n## References\n- [Symfony Release Notes](http://symfony.com/blog/security-releases-symfony-2-0-24-2-1-12-2-2-5-and-2-3-3-released)\n",
        "disclosureTime": "2013-08-17T09:14:49Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-70208",
        "identifiers": {
          "CVE": [
            "CVE-2013-4752"
          ],
          "CWE": [
            "CWE-74"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2013-08-17T09:14:49Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.3",
            ">=2.1.0, <2.1.12",
            ">=2.2.0, <2.2.5",
            ">=2, <2.0.24"
          ]
        },
        "severity": "high",
        "title": "HTTP Host Header Poisoning",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70208",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 5.3,
        "description": "## Overview\nAffected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Denial of Service (DoS).\n\nThe Security component in Symfony 2.0.x before 2.0.25, 2.1.x before 2.1.13, 2.2.x before 2.2.9, and 2.3.x before 2.3.6 allows remote attackers to cause a denial of service (CPU consumption) via a long password that triggers an expensive hash computation, as demonstrated by a PBKDF2 computation, a similar issue to [CVE-2013-5750](https://snyk.io/vuln/SNYK-PHP-FRIENDSOFSYMFONYUSERBUNDLE-70102).\n\n## Details\nDenial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its intended and legitimate users.\r\n\r\nUnlike other vulnerabilities, DoS attacks usually do not aim at breaching security. Rather, they are focused on making websites and services unavailable to genuine users resulting in downtime.\r\n\r\nOne popular Denial of Service vulnerability is DDoS (a Distributed Denial of Service), an attack that attempts to clog network pipes to the system by generating a large volume of traffic from many machines.\r\n\r\nWhen it comes to open source libraries, DoS vulnerabilities allow attackers to trigger such a crash or crippling of the service by using a flaw either in the application code or from the use of open source libraries.\r\n\r\nTwo common types of DoS vulnerabilities:\r\n\r\n* High CPU/Memory Consumption- An attacker sending crafted requests that could cause the system to take a disproportionate amount of time to process. For example, [commons-fileupload:commons-fileupload](SNYK-JAVA-COMMONSFILEUPLOAD-30082).\r\n\r\n* Crash - An attacker sending crafted requests that could cause the system to crash. For Example,  [npm `ws` package](npm:ws:20171108)\n\n## Remediation\nUpgrade `symfony/symfony` to version 2.3.6, 2.1.13, 2.2.9, 2.0.25 or higher.\n\n## References\n- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2013-5958)\n- [Symfony Release Notes](http://symfony.com/blog/security-releases-cve-2013-5958-symfony-2-0-25-2-1-13-2-2-9-and-2-3-6-released)\n",
        "disclosureTime": "2013-10-10T08:30:51Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-70209",
        "identifiers": {
          "CVE": [
            "CVE-2013-5958"
          ],
          "CWE": [
            "CWE-400"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2013-10-10T08:30:51Z",
        "semver": {
          "vulnerable": [
            ">=2, <2.0.25",
            ">=2.1.0, <2.1.13",
            ">=2.2.0, <2.2.9",
            ">=2.3.0, <2.3.6"
          ]
        },
        "severity": "medium",
        "title": "Denial of Service (DoS)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70209",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:L",
        "credit": [
          "Jeremy Derussé"
        ],
        "cvssScore": 5.6,
        "description": "## Overview\nAffected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Arbitrary Code Injection.\n\n## Remediation\nUpgrade `symfony/symfony` to version 2.3.19, 2.2.0, 2.4.9, 2.5.4, 2.3.0, 2.1.0 or higher.\n\n## References\n- [Symfony Release Notes](http://symfony.com/blog/security-releases-cve-2014-4931-symfony-2-3-18-2-4-8-and-2-5-2-released)\n- [GitHub Commit](https://github.com/symfony/symfony/commit/06a80fbdbe744ad6f3010479ba64ef5cf35dd9af)\n",
        "disclosureTime": "2014-07-25T22:18:02Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-70210",
        "identifiers": {
          "CVE": [
            "CVE-2014-4931"
          ],
          "CWE": [
            "CWE-94"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2014-07-25T22:18:02Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.19",
            ">=2.1.0, <2.2.0",
            ">=2.4.0, <2.4.9",
            ">=2.5.0, <2.5.4",
            ">=2.2.0, <2.3.0",
            ">=2, <2.1.0"
          ]
        },
        "severity": "medium",
        "title": "Arbitrary Code Injection",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70210",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 5.3,
        "description": "## Overview\nAffected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Denial of Service (DoS).\n\n## Details\nDenial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its intended and legitimate users.\r\n\r\nUnlike other vulnerabilities, DoS attacks usually do not aim at breaching security. Rather, they are focused on making websites and services unavailable to genuine users resulting in downtime.\r\n\r\nOne popular Denial of Service vulnerability is DDoS (a Distributed Denial of Service), an attack that attempts to clog network pipes to the system by generating a large volume of traffic from many machines.\r\n\r\nWhen it comes to open source libraries, DoS vulnerabilities allow attackers to trigger such a crash or crippling of the service by using a flaw either in the application code or from the use of open source libraries.\r\n\r\nTwo common types of DoS vulnerabilities:\r\n\r\n* High CPU/Memory Consumption- An attacker sending crafted requests that could cause the system to take a disproportionate amount of time to process. For example, [commons-fileupload:commons-fileupload](SNYK-JAVA-COMMONSFILEUPLOAD-30082).\r\n\r\n* Crash - An attacker sending crafted requests that could cause the system to crash. For Example,  [npm `ws` package](npm:ws:20171108)\n\n## Remediation\nUpgrade `symfony/symfony` to version 2.3.19, 2.4.9, 2.5.4 or higher.\n\n## References\n- [Symfony Release Notes](http://symfony.com/blog/cve-2014-5244-denial-of-service-with-a-malicious-http-host-header)\n- [GitHub PR](https://github.com/symfony/symfony/pull/11828)\n- [GitHub Commit](https://github.com/symfony/symfony/commit/1ee96a8b1b0987ffe2a62dca7ad268bf9edfa9b8)\n",
        "disclosureTime": "2014-09-03T07:37:21Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-70211",
        "identifiers": {
          "CVE": [
            "CVE-2014-5244"
          ],
          "CWE": [
            "CWE-400"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2014-09-03T07:37:21Z",
        "semver": {
          "vulnerable": [
            ">=2, <2.3.19",
            ">=2.4.0, <2.4.9",
            ">=2.5.0, <2.5.4"
          ]
        },
        "severity": "medium",
        "title": "Denial of Service (DoS)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70211",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:N",
        "credit": [
          "Cédric Nirousset",
          "Trent Steel",
          "Christophe Coevoet"
        ],
        "cvssScore": 3.7,
        "description": "## Overview\nAffected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Information Exposure.\n\nWhen you enable the ESI feature and when you are using a proxy like Varnish that you configured as a trusted proxy, the FragmentHandler considered requests to render fragments as coming from a trusted source, even if the client was requesting them directly. Symfony can not distinguish between ESI requests done on behalf of the client by Varnish and faked fragment requests coming directly from the client.\n\n## Remediation\nUpgrade `symfony/symfony` to version 2.3.19, 2.2.0, 2.4.9, 2.5.4, 2.3.0, 2.1.0 or higher.\n\n## References\n- [Symfony Release Notes](http://symfony.com/blog/cve-2014-5245-direct-access-of-esi-urls-behind-a-trusted-proxy)\n- [GitHub PR](https://github.com/symfony/symfony/pull/11831)\n",
        "disclosureTime": "2014-09-03T07:40:02Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-70212",
        "identifiers": {
          "CVE": [
            "CVE-2014-5245"
          ],
          "CWE": [
            "CWE-200"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2014-09-03T07:40:02Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.19",
            ">=2.1.0, <2.2.0",
            ">=2.4.0, <2.4.9",
            ">=2.5.0, <2.5.4",
            ">=2.2.0, <2.3.0",
            ">=2, <2.1.0"
          ]
        },
        "severity": "low",
        "title": "Information Exposure",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70212",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:N",
        "credit": [
          "Damien Tournoud"
        ],
        "cvssScore": 3.7,
        "description": "## Overview\nAffected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Authentication Bypass.\n\nWhen an application uses an HTTP basic or digest authentication, Symfony does not parse the Authorization header properly, which could be exploited in some server setups (no exploits have been demonstrated though.)\n\n## Remediation\nUpgrade `symfony/symfony` to version 2.3.19, 2.2.0, 2.4.9, 2.5.4, 2.3.0, 2.1.0 or higher.\n\n## References\n- [Symfony Release Notes](http://symfony.com/blog/cve-2014-6061-security-issue-when-parsing-the-authorization-header)\n- [GitHub Issue](https://github.com/symfony/symfony/pull/11829)\n",
        "disclosureTime": "2014-09-03T07:38:23Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-70213",
        "identifiers": {
          "CVE": [
            "CVE-2014-6061"
          ],
          "CWE": [
            "CWE-592"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2014-09-03T07:38:23Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.19",
            ">=2.1.0, <2.2.0",
            ">=2.4.0, <2.4.9",
            ">=2.5.0, <2.5.4",
            ">=2.2.0, <2.3.0",
            ">=2, <2.1.0"
          ]
        },
        "severity": "low",
        "title": "Authentication Bypass",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70213",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:L",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 6.3,
        "description": "## Overview\nAffected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Cross-site Request Forgery (CSRF).\n\n## Remediation\nUpgrade `symfony/symfony` to version 2.3.19, 2.2.0, 2.4.9, 2.5.4, 2.3.0, 2.1.0 or higher.\n\n## References\n- [Symfony Release Notes](http://symfony.com/blog/cve-2014-6072-csrf-vulnerability-in-the-web-profiler)\n",
        "disclosureTime": "2014-09-03T07:40:30Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-70214",
        "identifiers": {
          "CVE": [
            "CVE-2014-6072"
          ],
          "CWE": [
            "CWE-352"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2014-09-03T07:40:30Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.19",
            ">=2.1.0, <2.2.0",
            ">=2.4.0, <2.4.9",
            ">=2.5.0, <2.5.4",
            ">=2.2.0, <2.3.0",
            ">=2, <2.1.0"
          ]
        },
        "severity": "medium",
        "title": "Cross-site Request Forgery (CSRF)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70214",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:L",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 6.3,
        "description": "## Overview\nAffected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Arbitrary Code Injection.\n\nEval injection vulnerability in the HttpCache class in HttpKernel in Symfony 2.x before 2.3.27, 2.4.x and 2.5.x before 2.5.11, and 2.6.x before 2.6.6 allows remote attackers to execute arbitrary PHP code via a `language=\"php\"` attribute of a SCRIPT element.\n\n## Remediation\nUpgrade `symfony/symfony` to version 2.3.27, 2.6.6, 2.2.0, 2.5.0, 2.5.11, 2.3.0, 2.1.0 or higher.\n\n## References\n- [Symfony Release Notes](http://symfony.com/blog/cve-2015-2308-esi-code-injection)\n",
        "disclosureTime": "2015-04-01T18:55:26Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-70215",
        "identifiers": {
          "CVE": [
            "CVE-2015-2308"
          ],
          "CWE": [
            "CWE-94"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2015-04-01T18:55:26Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.27",
            ">=2.6.0, <2.6.6",
            ">=2.1.0, <2.2.0",
            ">=2.4.0, <2.5.0",
            ">=2.5.0, <2.5.11",
            ">=2.2.0, <2.3.0",
            ">=2, <2.1.0"
          ]
        },
        "severity": "medium",
        "title": "Arbitrary Code Injection",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70215",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N",
        "credit": [
          "Dmitrii Chekaliuk"
        ],
        "cvssScore": 6.5,
        "description": "## Overview\nAffected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Man-in-the-Middle (MitM).\n\nThe `Symfony\\Component\\HttpFoundation\\Request` class provides a mechanism that ensures it does not trust HTTP header values coming from a \"non-trusted\" client. Unfortunately, it assumes that the remote address is always a trusted client if at least one trusted proxy is involved in the request; this allows a man-in-the-middle attack between the latest trusted proxy and the web server.\n\n## Remediation\nUpgrade `symfony/symfony` to version 2.3.27, 2.5.11, 2.6.6 or higher.\n\n## References\n- [Symfony Release Notes](http://symfony.com/blog/cve-2015-2309-unsafe-methods-in-the-request-class)\n",
        "disclosureTime": "2015-04-01T18:55:26Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-70216",
        "identifiers": {
          "CVE": [
            "CVE-2015-2309"
          ],
          "CWE": [
            "CWE-300"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2015-04-01T18:55:26Z",
        "semver": {
          "vulnerable": [
            ">=2, <2.3.27",
            ">=2.4.0, <2.5.11",
            ">=2.6.0, <2.6.6"
          ]
        },
        "severity": "medium",
        "title": "Man-in-the-Middle (MitM)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70216",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:L",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 6.3,
        "description": "## Overview\nAffected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Session Fixation.\n\n## Remediation\nUpgrade `symfony/symfony` to version 2.3.35, 2.6.12, 2.5.0, 2.7.7, 2.6.0 or higher.\n\n## References\n- [Symfony Release Notes](http://symfony.com/blog/cve-2015-8124-session-fixation-in-the-remember-me-login-feature)\n",
        "disclosureTime": "2015-11-23T11:45:06Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-70218",
        "identifiers": {
          "CVE": [
            "CVE-2015-8124"
          ],
          "CWE": [
            "CWE-384"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2015-11-23T11:45:06Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.35",
            ">=2.6.0, <2.6.12",
            ">=2.4.0, <2.5.0",
            ">=2.7.0, <2.7.7",
            ">=2.5.0, <2.6.0"
          ]
        },
        "severity": "medium",
        "title": "Session Fixation",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70218",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:L",
        "credit": [
          "Sebastiaan Stok"
        ],
        "cvssScore": 7.3,
        "description": "## Overview\nAffected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Timing Attack.\n\nSymfony 2.3.x before 2.3.35, 2.6.x before 2.6.12, and 2.7.x before 2.7.7 might allow remote attackers to have unspecified impact via a timing attack involving:\n* Symfony/Component/Security/Http/RememberMe/PersistentTokenBasedRememberMeServices or\n* Symfony/Component/Security/Http/Firewall/DigestAuthenticationListener class in the Symfony Security Component, or\n* legacy CSRF implementation from the Symfony/Component/Form/Extension/Csrf/CsrfProvider/DefaultCsrfProvider class in the Symfony Form component.\n\n## Remediation\nUpgrade `symfony/symfony` to version 2.3.35, 2.6.12, 2.5.0, 2.7.7, 2.6.0 or higher.\n\n## References\n- [Symfony Release Notes](http://symfony.com/blog/cve-2015-8125-potential-remote-timing-attack-vulnerability-in-security-remember-me-service)\n",
        "disclosureTime": "2015-11-23T11:45:06Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-70219",
        "identifiers": {
          "CVE": [
            "CVE-2015-8125"
          ],
          "CWE": [
            "CWE-208"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2015-11-23T11:45:06Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.35",
            ">=2.6.0, <2.6.12",
            ">=2.4.0, <2.5.0",
            ">=2.7.0, <2.7.7",
            ">=2.5.0, <2.6.0"
          ]
        },
        "severity": "high",
        "title": "Timing Attack",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70219",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\nAffected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Insecure Randomness .\n\nThe nextBytes function in the SecureRandom class in Symfony before 2.3.37, 2.6.x before 2.6.13, and 2.7.x before 2.7.9 does not properly generate random numbers when used with PHP 5.x without the paragonie/random_compat library and the openssl_random_pseudo_bytes function fails, which makes it easier for attackers to defeat cryptographic protection mechanisms via unspecified vectors.\n\n## Remediation\nUpgrade `symfony/symfony` to version 2.3.37, 2.6.13, 2.5.0, 2.7.9, 2.6.0 or higher.\n\n## References\n- [Symfony Release Notes](http://symfony.com/blog/cve-2016-1902-securerandom-s-fallback-not-secure-when-openssl-fails)\n",
        "disclosureTime": "2016-01-14T09:59:32Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-70220",
        "identifiers": {
          "CVE": [
            "CVE-2016-1902"
          ],
          "CWE": [
            "CWE-330"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2016-01-14T09:59:32Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.37",
            ">=2.6.0, <2.6.13",
            ">=2.4.0, <2.5.0",
            ">=2.7.0, <2.7.9",
            ">=2.5.0, <2.6.0"
          ]
        },
        "severity": "high",
        "title": "Insecure Randomness",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70220",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
        "credit": [
          "Marek Alaksa"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\nAffected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Denial of Service (DoS).\n\nThe attemptAuthentication function in Component/Security/Http/Firewall/UsernamePasswordFormAuthenticationListener.php in Symfony before 2.3.41, 2.7.x before 2.7.13, 2.8.x before 2.8.6, and 3.0.x before 3.0.6 does not limit the length of a username stored in a session, which allows remote attackers to cause a denial of service (session storage consumption) via a series of authentication attempts with long, non-existent usernames.\n\n## Details\nDenial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its intended and legitimate users.\r\n\r\nUnlike other vulnerabilities, DoS attacks usually do not aim at breaching security. Rather, they are focused on making websites and services unavailable to genuine users resulting in downtime.\r\n\r\nOne popular Denial of Service vulnerability is DDoS (a Distributed Denial of Service), an attack that attempts to clog network pipes to the system by generating a large volume of traffic from many machines.\r\n\r\nWhen it comes to open source libraries, DoS vulnerabilities allow attackers to trigger such a crash or crippling of the service by using a flaw either in the application code or from the use of open source libraries.\r\n\r\nTwo common types of DoS vulnerabilities:\r\n\r\n* High CPU/Memory Consumption- An attacker sending crafted requests that could cause the system to take a disproportionate amount of time to process. For example, [commons-fileupload:commons-fileupload](SNYK-JAVA-COMMONSFILEUPLOAD-30082).\r\n\r\n* Crash - An attacker sending crafted requests that could cause the system to crash. For Example,  [npm `ws` package](npm:ws:20171108)\n\n## Remediation\nUpgrade `symfony/symfony` to version 2.3.41, 2.7.0, 2.5.0, 2.7.13, 2.6.0, 2.8.6, 3.0.6 or higher.\n\n## References\n- [Symfony Release Notes](http://symfony.com/blog/cve-2016-4423-large-username-storage-in-session)\n- [GitHub PR](https://github.com/symfony/symfony/pull/18733)\n",
        "disclosureTime": "2016-05-09T21:31:02Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-70222",
        "identifiers": {
          "CVE": [
            "CVE-2016-4423"
          ],
          "CWE": [
            "CWE-400"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2016-05-09T21:31:02Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.41",
            ">=2.6.0, <2.7.0",
            ">=2.4.0, <2.5.0",
            ">=2.7.0, <2.7.13",
            ">=2.5.0, <2.6.0",
            ">=2.8.0, <2.8.6",
            ">=3, <3.0.6"
          ]
        },
        "severity": "high",
        "title": "Denial of Service (DoS)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70222",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H",
        "credit": [
          "Federico Stange"
        ],
        "cvssScore": 5.9,
        "description": "## Overview\n[symfony/symfony](https://packagist.org/packages/symfony/symfony) is a set of reusable PHP components.\n\nAffected versions of this package are vulnerable to Denial of Service (DoS) attacks via the `PDOSessionHandler` class.\n\n**An application is vulnerable when:**\n\n* It uses `PDOSessionHandler` to store its sessions\n* And it uses MySQL as a backend for sessions managed by `PDOSessionHandler`\n* And the SQL mode does not contain `STRICT_ALL_TABLES` or `STRICT_TRANS_TABLES`.\n\nWith this configuration, An attacker may conduct a denial of service by a well-crafted session, which leads to an infinite loop in the code.\n\n## Details\nDenial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its intended and legitimate users.\r\n\r\nUnlike other vulnerabilities, DoS attacks usually do not aim at breaching security. Rather, they are focused on making websites and services unavailable to genuine users resulting in downtime.\r\n\r\nOne popular Denial of Service vulnerability is DDoS (a Distributed Denial of Service), an attack that attempts to clog network pipes to the system by generating a large volume of traffic from many machines.\r\n\r\nWhen it comes to open source libraries, DoS vulnerabilities allow attackers to trigger such a crash or crippling of the service by using a flaw either in the application code or from the use of open source libraries.\r\n\r\nTwo common types of DoS vulnerabilities:\r\n\r\n* High CPU/Memory Consumption- An attacker sending crafted requests that could cause the system to take a disproportionate amount of time to process. For example, [commons-fileupload:commons-fileupload](SNYK-JAVA-COMMONSFILEUPLOAD-30082).\r\n\r\n* Crash - An attacker sending crafted requests that could cause the system to crash. For Example,  [npm `ws` package](npm:ws:20171108)\n\n## Remediation\nUpgrade `symfony/symfony` to versions 2.7.48, 2.8.41, 3.3.17, 3.4.11, 4.0.11 or higher.\n\n## References\n- [Symphony Security Advisory](https://symfony.com/cve-2018-11386)\n",
        "disclosureTime": "2018-05-30T03:25:45.531000Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-72196",
        "identifiers": {
          "CVE": [
            "CVE-2018-11386"
          ],
          "CWE": [
            "CWE-835"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2018-05-30T11:36:38.154000Z",
        "semver": {
          "vulnerable": [
            "<2.7.48",
            ">=2.8.0, <2.8.41",
            ">=3.0.0, <3.3.17",
            ">=3.4.0, <3.4.11",
            ">=4.0.0, <4.0.11"
          ]
        },
        "severity": "medium",
        "title": "Denial of Service (DoS)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-72196",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
        "credit": [
          "Theo Bouge"
        ],
        "cvssScore": 9.8,
        "description": "## Overview\n[symfony/symfony](https://packagist.org/packages/symfony/symfony) is a set of PHP components.\n\nAffected versions of this package are vulnerable to Access Restriction Bypass. A misconfigured LDAP server allowed unauthorized access, due to a missing check for `null` passwords.\n\n**Note:** This is related to [CVE-2016-2403](https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70221).\n\n## Remediation\nUpgrade `symfony/symfony` to versions 2.8.37, 3.3.17, 3.4.7, 4.0.7 or higher.\n\n## References\n- [Symphony Security Advisory](https://symfony.com/cve-2018-11407)\n",
        "disclosureTime": "2018-05-30T03:25:45.532000Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-72197",
        "identifiers": {
          "CVE": [
            "CVE-2018-11407"
          ],
          "CWE": [
            "CWE-284"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2018-05-30T11:36:38.236000Z",
        "semver": {
          "vulnerable": [
            "<2.8.37",
            ">=3.0.0, <3.3.17",
            ">=3.4.0, <3.4.7",
            ">=4.0.0, <4.0.7"
          ]
        },
        "severity": "critical",
        "title": "Access Restriction Bypass",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-72197",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H",
        "credit": [
          "Kevin Liagre"
        ],
        "cvssScore": 8.8,
        "description": "## Overview\n[symfony/symfony](https://packagist.org/packages/symfony/symfony) is a set of reusable PHP components.\n\nAffected versions of this package are vulnerable to CSRF Token Fixation. CSRF tokens where not erased during logout, when the `invalidate_session` option was disabled. By default, a user’s session is invalidated when the user is logged out.\n\n## Remediation\nUpgrade `symfony/symfony` to versions 2.7.48, 2.8.41, 3.3.17, 3.4.11, 4.0.11 or higher.\n\n## References\n- [Symphony Security Advisory](https://symfony.com/cve-2018-11406)\n",
        "disclosureTime": "2018-05-30T03:25:45.533000Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-72198",
        "identifiers": {
          "CVE": [
            "CVE-2018-11406"
          ],
          "CWE": [
            "CWE-384"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2018-05-30T11:36:38.318000Z",
        "semver": {
          "vulnerable": [
            "<2.7.48",
            ">=2.8.0, <2.8.41",
            ">=3.0.0, <3.3.17",
            ">=3.4.0, <3.4.11",
            ">=4.0.0, <4.0.11"
          ]
        },
        "severity": "high",
        "title": "CSRF Token Fixation",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-72198",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",
        "credit": [
          "Antal Aron"
        ],
        "cvssScore": 6.1,
        "description": "## Overview\n[symfony/symfony](https://packagist.org/packages/symfony/symfony) is a set of reusable PHP components.\n\nAffected versions of this package are vulnerable to Open Redirect. This is due to an incomplete fix for [CVE-2017-16652](https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-70381). There was an an edge case when the `security.http_utils` was inlined by the container.\n\n## Remediation\nUpgrade `symfony/symfony` to versions 2.7.48, 2.8.41, 3.3.17, 3.4.11, 4.0.11 or higher.\n\n## References\n- [Symphony Security Advisory](https://symfony.com/cve-2018-11408)\n",
        "disclosureTime": "2018-05-30T03:25:45.535000Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-72199",
        "identifiers": {
          "CVE": [
            "CVE-2018-11408"
          ],
          "CWE": [
            "CWE-601"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2018-05-30T11:36:38.403000Z",
        "semver": {
          "vulnerable": [
            "<2.7.48",
            ">=2.8.0, <2.8.41",
            ">=3.0.0, <3.3.17",
            ">=3.4.0, <3.4.11",
            ">=4.0.0, <4.0.11"
          ]
        },
        "severity": "medium",
        "title": "Open Redirect",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-72199",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H",
        "credit": [
          "Chris Wilkinson"
        ],
        "cvssScore": 8.1,
        "description": "## Overview\n[symfony/symfony](https://packagist.org/packages/symfony/symfony) is a set of reusable PHP components.\n\nAffected versions of this package are vulnerable to Session Fixation via the `Guard` login feature. An attacker may be able to impersonate the victim towards the web application if the session id value was previously known to the attacker. This allows the attacker to access a Symfony web application with the attacked user's permissions.\n\n**Note:**\n* The `Guard authentication` login feature must be enabled for the attack to be applicable.\n* The attacker must have access to the `PHPSESSID` cookie value or has successfully set a new value in the user's browser.\n\n## Remediation\nUpgrade `symfony/symfony` to versions 2.7.48, 2.8.41, 3.3.17, 3.4.11, 4.0.11 or higher.\n\n## References\n- [Symphony Security Advisory](https://symfony.com/cve-2018-11385)\n",
        "disclosureTime": "2018-05-30T03:25:45.536000Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-72200",
        "identifiers": {
          "CVE": [
            "CVE-2018-11385"
          ],
          "CWE": [
            "CWE-384"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2018-05-30T11:36:38.526000Z",
        "semver": {
          "vulnerable": [
            "<2.7.48",
            ">=2.8.0, <2.8.41",
            ">=3.0.0, <3.3.17",
            ">=3.4.0, <3.4.11",
            ">=4.0.0, <4.0.11"
          ]
        },
        "severity": "high",
        "title": "Session Fixation",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-72200",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 6.1,
        "description": "## Overview\n[symfony/symfony](https://packagist.org/packages/symfony/symfony) is the The Symfony PHP framework.\n\nAffected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks via the `ExceptionHandler.php` method.\n\n## Details\nA cross-site scripting attack occurs when the attacker tricks a legitimate web-based application or site to accept a request as originating from a trusted source.\r\n\r\nThis is done by escaping the context of the web application; the web application then delivers that data to its users along with other trusted dynamic content, without validating it. The browser unknowingly executes malicious script on the client side (through client-side languages; usually JavaScript or HTML)  in order to perform actions that are otherwise typically blocked by the browser’s Same Origin Policy.\r\n\r\nֿInjecting malicious code is the most prevalent manner by which XSS is exploited; for this reason, escaping characters in order to prevent this manipulation is the top method for securing code against this vulnerability.\r\n\r\nEscaping means that the application is coded to mark key characters, and particularly key characters included in user input, to prevent those characters from being interpreted in a dangerous context. For example, in HTML, `<` can be coded as  `&lt`; and `>` can be coded as `&gt`; in order to be interpreted and displayed as themselves in text, while within the code itself, they are used for HTML tags. If malicious content is injected into an application that escapes special characters and that malicious content uses `<` and `>` as HTML tags, those characters are nonetheless not interpreted as HTML tags by the browser if they’ve been correctly escaped in the application code and in this way the attempted attack is diverted.\r\n \r\nThe most prominent use of XSS is to steal cookies (source: OWASP HttpOnly) and hijack user sessions, but XSS exploits have been used to expose sensitive information, enable access to privileged services and functionality and deliver malware. \r\n\r\n### Types of attacks\r\nThere are a few methods by which XSS can be manipulated:\r\n\r\n|Type|Origin|Description|\r\n|--|--|--|\r\n|**Stored**|Server|The malicious code is inserted in the application (usually as a link) by the attacker. The code is activated every time a user clicks the link.|\r\n|**Reflected**|Server|The attacker delivers a malicious link externally from the vulnerable web site application to a user. When clicked, malicious code is sent to the vulnerable web site, which reflects the attack back to the user’s browser.| \r\n|**DOM-based**|Client|The attacker forces the user’s browser to render a malicious page. The data in the page itself delivers the cross-site scripting data.|\r\n|**Mutated**| |The attacker injects code that appears safe, but is then rewritten and modified by the browser, while parsing the markup. An example is rebalancing unclosed quotation marks or even adding quotation marks to unquoted parameters.|\r\n\r\n### Affected environments\r\nThe following environments are susceptible to an XSS attack:\r\n\r\n* Web servers\r\n* Application servers\r\n* Web application environments\r\n\r\n### How to prevent\r\nThis section describes the top best practices designed to specifically protect your code: \r\n\r\n* Sanitize data input in an HTTP request before reflecting it back, ensuring all data is validated, filtered or escaped before echoing anything back to the user, such as the values of query parameters during searches. \r\n* Convert special characters such as `?`, `&`, `/`, `<`, `>` and spaces to their respective HTML or URL encoded equivalents. \r\n* Give users the option to disable client-side scripts.\r\n* Redirect invalid requests.\r\n* Detect simultaneous logins, including those from two separate IP addresses, and invalidate those sessions.\r\n* Use and enforce a Content Security Policy (source: Wikipedia) to disable any features that might be manipulated for an XSS attack.\r\n* Read the documentation for any of the libraries referenced in your code to understand which elements allow for embedded HTML.\n\n\n## Remediation\nUpgrade `symfony/symfony` to versions 2.7.33, 2.8.26, 3.2.13, 3.3.6 or higher.\n\n## References\n- [GitHub PR](https://github.com/symfony/symfony/pull/23684)\n- [GitHub Issue](https://github.com/symfony/symfony/issues/27987)\n",
        "disclosureTime": "2018-07-20T00:54:33.251000Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1"
        ],
        "functions": [],
        "id": "SNYK-PHP-SYMFONYSYMFONY-72246",
        "identifiers": {
          "CVE": [
            "CVE-2017-18343"
          ],
          "CWE": [
            "CWE-79"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "symfony/symfony",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2018-07-30T13:57:42.005000Z",
        "semver": {
          "vulnerable": [
            "<2.7.33",
            ">=2.8.0, <2.8.26",
            ">=3.0.0, <3.2.13",
            ">=3.3.0, <3.3.6"
          ]
        },
        "severity": "medium",
        "title": "Cross-site Scripting (XSS)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-SYMFONYSYMFONY-72246",
        "version": "2.3.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:H/PR:L/UI:R/S:U/C:H/I:N/A:N/RL:O",
        "credit": [
          "Fabien Potencier"
        ],
        "cvssScore": 4.8,
        "description": "## Overview\n\n[twig/twig](https://packagist.org/packages/twig/twig) is a flexible, fast, and secure template language for PHP.\n\n\nAffected versions of this package are vulnerable to Information Exposure\ndue to allowing the evaluation of non-trusted templates in a sandbox, where everything is forbidden if not explicitly allowed by a sandbox policy (tags, filters, functions, method calls, ...).\r\n\r\n*Note: If you are not using the sandbox, your code is not affected.*\n\n## Remediation\n\nUpgrade `twig/twig` to version 1.38.0, 2.7.0 or higher.\n\n\n## References\n\n- [GitHub Commit](https://github.com/twigphp/Twig/commit/0f3af98ef6e71929ad67fb6e5f3ad65777c1c4c5)\n\n- [Twig Security Advisory](https://symfony.com/blog/twig-sandbox-information-disclosure)\n",
        "disclosureTime": "2019-03-12T13:58:49Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1",
          "twig/twig@1.35.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-TWIGTWIG-173776",
        "identifiers": {
          "CVE": [
            "CVE-2019-9942"
          ],
          "CWE": [
            "CWE-200"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "twig/twig",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2019-03-12T13:58:49Z",
        "semver": {
          "vulnerable": [
            ">=1.0.0, <1.38.0",
            ">=2.0.0, <2.7.0"
          ]
        },
        "severity": "medium",
        "title": "Information Exposure",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-TWIGTWIG-173776",
        "version": "1.35.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 9.8,
        "description": "## Overview\n[twig/twig](https://packagist.org/packages/twig/twig) is a flexible, fast, and secure template language for PHP.\n\nAffected versions of this package are vulnerable to Server Side Template Injection (SSTI) via the `search_key` parameter.\n\n## Remediation\nUpgrade `twig/twig` to version 2.4.4 or higher.\n\n## References\n- [Exploit-DB](https://www.exploit-db.com/exploits/44102/)\n- [GitHub Commit](https://github.com/twigphp/Twig/commit/eddb97148ad779f27e670e1e3f19fb323aedafeb)\n- [GitHub ChangLog](https://github.com/twigphp/Twig/blob/2.x/CHANGELOG)\n",
        "disclosureTime": "2018-07-10T15:06:02.373000Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "symfony/symfony@2.3.1",
          "twig/twig@1.35.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-TWIGTWIG-72239",
        "identifiers": {
          "CVE": [
            "CVE-2018-13818"
          ],
          "CWE": [
            "CWE-94"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "twig/twig",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2018-07-23T13:46:08.115000Z",
        "semver": {
          "vulnerable": [
            "<2.4.4"
          ]
        },
        "severity": "critical",
        "title": "Server Side Template Injection (SSTI)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-TWIGTWIG-72239",
        "version": "1.35.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:L",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 7.3,
        "description": "## Overview\nAffected versions of [`yiisoft/yii`](https://packagist.org/packages/yiisoft/yii) are vulnerable to Arbitrary Code Execution.\n\nThe CDetailView widget in Yii PHP Framework 1.1.14 allows remote attackers to execute arbitrary PHP scripts via vectors related to the value property.\n\n## Remediation\nUpgrade `yiisoft/yii` to version 1.1.15 or higher.\n\n## References\n- [Yii Framework Security Advisory](http://www.yiiframework.com/news/78/yii-1-1-15-is-released-security-fix/)\n",
        "disclosureTime": "2014-06-30T07:15:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "yiisoft/yii@1.1.14"
        ],
        "functions": [],
        "id": "SNYK-PHP-YIISOFTYII-70295",
        "identifiers": {
          "CVE": [
            "CVE-2014-4672"
          ],
          "CWE": [
            "CWE-94"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "yiisoft/yii",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2014-06-30T07:15:00Z",
        "semver": {
          "vulnerable": [
            "<1.1.15"
          ]
        },
        "severity": "high",
        "title": "Arbitrary Code Execution",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-YIISOFTYII-70295",
        "version": "1.1.14"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N",
        "credit": [
          "codemagician"
        ],
        "cvssScore": 6.5,
        "description": "## Overview\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to Route Parameter Injection.\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.1.4, 2.0.8 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2013-01)\n",
        "disclosureTime": "2013-03-13T08:39:38Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70321",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-74"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2013-03-13T08:39:38Z",
        "semver": {
          "vulnerable": [
            ">=2.1.0, <2.1.4",
            ">=2, <2.0.8"
          ]
        },
        "severity": "medium",
        "title": "Route Parameter Injection",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70321",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:N",
        "credit": [
          "Pádraic Brady"
        ],
        "cvssScore": 3.7,
        "description": "## Overview\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to Information Exposure.\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.1.4, 2.0.8 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2013-02)\n",
        "disclosureTime": "2013-03-13T15:05:23Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70322",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-200"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2013-03-13T15:05:23Z",
        "semver": {
          "vulnerable": [
            ">=2.1.0, <2.1.4",
            ">=2, <2.0.8"
          ]
        },
        "severity": "low",
        "title": "Information Exposure",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70322",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:L",
        "credit": [
          "Axel Helmert"
        ],
        "cvssScore": 6.3,
        "description": "## Overview\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to SQL Injection due to execution of platform-specific SQL containing interpolations.\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.1.4, 2.0.8 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2013-03)\n",
        "disclosureTime": "2013-03-13T15:04:50Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70323",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-89"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2013-03-13T15:04:50Z",
        "semver": {
          "vulnerable": [
            ">=2.1.0, <2.1.4",
            ">=2, <2.0.8"
          ]
        },
        "severity": "medium",
        "title": "SQL Injection",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70323",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:N",
        "credit": [
          "Steve Talbot"
        ],
        "cvssScore": 5.3,
        "description": "## Overview\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to Potential IP Spoofing.\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.2.5 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2013-04)\n",
        "disclosureTime": "2013-10-31T10:35:17Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70324",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-290"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2013-10-31T10:35:17Z",
        "semver": {
          "vulnerable": [
            "<2.2.5"
          ]
        },
        "severity": "medium",
        "title": "IP Spoofing",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70324",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:L",
        "credit": [
          "Lukas Reschke"
        ],
        "cvssScore": 7.3,
        "description": "## Overview\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to XML External Entity (XXE) Injection.\n\n## Details\n\nXXE Injection is a type of attack against an application that parses XML input.\r\nXML is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. By default, many XML processors allow specification of an external entity, a URI that is dereferenced and evaluated during XML processing. When an XML document is being parsed, the parser can make a request and include the content at the specified URI inside of the XML document.\r\n\r\nAttacks can include disclosing local files, which may contain sensitive data such as passwords or private user data, using file: schemes or relative paths in the system identifier.\r\n\r\nFor example, below is a sample XML document, containing an XML element- username.\r\n\r\n```xml\r\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\r\n   <username>John</username>\r\n</xml>\r\n```\r\n\r\nAn external XML entity - `xxe`, is defined using a system identifier and present within a DOCTYPE header. These entities can access local or remote content. For example the below code contains an external XML entity that would fetch the content of  `/etc/passwd` and display it to the user rendered by `username`.\r\n\r\n```xml\r\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\r\n<!DOCTYPE foo [\r\n   <!ENTITY xxe SYSTEM \"file:///etc/passwd\" >]>\r\n   <username>&xxe;</username>\r\n</xml>\r\n```\r\n\r\nOther XXE Injection attacks can access local resources that may not stop returning data, possibly impacting application availability and leading to Denial of Service.\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.1.6, 2.2.6 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2014-01)\n",
        "disclosureTime": "2014-02-26T16:02:02Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70325",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-611"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2014-02-26T16:02:02Z",
        "semver": {
          "vulnerable": [
            ">=2.1.0, <2.1.6",
            ">=2.2.0, <2.2.6"
          ]
        },
        "severity": "high",
        "title": "XML External Entity (XXE) Injection",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70325",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 6.5,
        "description": "## Overview\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to Cross-site Scripting (XSS).\n\n## Details\nA cross-site scripting attack occurs when the attacker tricks a legitimate web-based application or site to accept a request as originating from a trusted source.\r\n\r\nThis is done by escaping the context of the web application; the web application then delivers that data to its users along with other trusted dynamic content, without validating it. The browser unknowingly executes malicious script on the client side (through client-side languages; usually JavaScript or HTML)  in order to perform actions that are otherwise typically blocked by the browser’s Same Origin Policy.\r\n\r\nֿInjecting malicious code is the most prevalent manner by which XSS is exploited; for this reason, escaping characters in order to prevent this manipulation is the top method for securing code against this vulnerability.\r\n\r\nEscaping means that the application is coded to mark key characters, and particularly key characters included in user input, to prevent those characters from being interpreted in a dangerous context. For example, in HTML, `<` can be coded as  `&lt`; and `>` can be coded as `&gt`; in order to be interpreted and displayed as themselves in text, while within the code itself, they are used for HTML tags. If malicious content is injected into an application that escapes special characters and that malicious content uses `<` and `>` as HTML tags, those characters are nonetheless not interpreted as HTML tags by the browser if they’ve been correctly escaped in the application code and in this way the attempted attack is diverted.\r\n \r\nThe most prominent use of XSS is to steal cookies (source: OWASP HttpOnly) and hijack user sessions, but XSS exploits have been used to expose sensitive information, enable access to privileged services and functionality and deliver malware. \r\n\r\n### Types of attacks\r\nThere are a few methods by which XSS can be manipulated:\r\n\r\n|Type|Origin|Description|\r\n|--|--|--|\r\n|**Stored**|Server|The malicious code is inserted in the application (usually as a link) by the attacker. The code is activated every time a user clicks the link.|\r\n|**Reflected**|Server|The attacker delivers a malicious link externally from the vulnerable web site application to a user. When clicked, malicious code is sent to the vulnerable web site, which reflects the attack back to the user’s browser.| \r\n|**DOM-based**|Client|The attacker forces the user’s browser to render a malicious page. The data in the page itself delivers the cross-site scripting data.|\r\n|**Mutated**| |The attacker injects code that appears safe, but is then rewritten and modified by the browser, while parsing the markup. An example is rebalancing unclosed quotation marks or even adding quotation marks to unquoted parameters.|\r\n\r\n### Affected environments\r\nThe following environments are susceptible to an XSS attack:\r\n\r\n* Web servers\r\n* Application servers\r\n* Web application environments\r\n\r\n### How to prevent\r\nThis section describes the top best practices designed to specifically protect your code: \r\n\r\n* Sanitize data input in an HTTP request before reflecting it back, ensuring all data is validated, filtered or escaped before echoing anything back to the user, such as the values of query parameters during searches. \r\n* Convert special characters such as `?`, `&`, `/`, `<`, `>` and spaces to their respective HTML or URL encoded equivalents. \r\n* Give users the option to disable client-side scripts.\r\n* Redirect invalid requests.\r\n* Detect simultaneous logins, including those from two separate IP addresses, and invalidate those sessions.\r\n* Use and enforce a Content Security Policy (source: Wikipedia) to disable any features that might be manipulated for an XSS attack.\r\n* Read the documentation for any of the libraries referenced in your code to understand which elements allow for embedded HTML.\n\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.3.1, 2.2.7 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2014-03)\n",
        "disclosureTime": "2014-02-26T16:02:02Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70326",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-79"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2014-02-26T16:02:02Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.1",
            ">=2, <2.2.7"
          ]
        },
        "severity": "medium",
        "title": "Cross-site Scripting (XSS)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70326",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:N",
        "credit": [
          "Matthew Daley"
        ],
        "cvssScore": 5.3,
        "description": "## Overview\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to Authentication Bypass.\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.3.3, 2.2.8 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2014-05)\n",
        "disclosureTime": "2014-09-16T22:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70327",
        "identifiers": {
          "CVE": [
            "CVE-2014-8088"
          ],
          "CWE": [
            "CWE-592"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2014-09-16T22:00:00Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.3",
            ">=2, <2.2.8"
          ]
        },
        "severity": "medium",
        "title": "Authentication Bypass",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70327",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:L",
        "credit": [
          "Jonas Sandström"
        ],
        "cvssScore": 6.3,
        "description": "## Overview\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to SQL Injection vector when manually quoting values for sqlsrv extension, using null byte.\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.3.3, 2.2.8 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2014-06)\n",
        "disclosureTime": "2014-09-16T22:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70328",
        "identifiers": {
          "CVE": [
            "CVE-2014-8089"
          ],
          "CWE": [
            "CWE-89"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2014-09-16T22:00:00Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.3",
            ">=2, <2.2.8"
          ]
        },
        "severity": "medium",
        "title": "SQL Injection",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70328",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
        "credit": [
          "Yuriy Dyachenko"
        ],
        "cvssScore": 5.3,
        "description": "## Overview\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to Insufficient Session Validation.\n\n`Zend\\Session` session validators do not work as expected if set prior to the start of a session.\n\nThe implication is that subsequent calls to `Zend\\Session\\SessionManager#start()` (in later requests, assuming a session was created) will not have any validator metadata attached, which causes any validator metadata to be re-built from scratch, thus marking the session as valid.\n\nAn attacker is thus able to simply ignore session validators such as `RemoteAddr` or `HttpUserAgent`, since the \"signature\" that these validators check against is not being stored in the session.\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.3.4, 2.2.9 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2015-01)\n",
        "disclosureTime": "2015-01-14T22:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70329",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-284"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2015-01-14T22:00:00Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.4",
            ">=2, <2.2.9"
          ]
        },
        "severity": "medium",
        "title": "Insufficient Session Validation",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70329",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:L",
        "credit": [
          "Grigory Ivanov"
        ],
        "cvssScore": 6.3,
        "description": "## Overview\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to SQL Injection.\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.3.5, 2.2.10 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2015-02)\n",
        "disclosureTime": "2015-02-18T19:15:09Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70330",
        "identifiers": {
          "CVE": [
            "CVE-2015-0270"
          ],
          "CWE": [
            "CWE-89"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2015-02-18T19:15:09Z",
        "semver": {
          "vulnerable": [
            ">=2.3.0, <2.3.5",
            ">=2, <2.2.10"
          ]
        },
        "severity": "medium",
        "title": "SQL Injection",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70330",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:N",
        "credit": [
          "Filippo Tessarotto",
          "Maks3w"
        ],
        "cvssScore": 5.3,
        "description": "## Overview\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to Potential CRLF injection attacks in mail and HTTP headers.\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.3.8, 2.4.1 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2015-04)\n",
        "disclosureTime": "2015-05-07T08:53:42Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70332",
        "identifiers": {
          "CVE": [
            "CVE-2015-3154"
          ],
          "CWE": [
            "CWE-113"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2015-05-07T08:53:42Z",
        "semver": {
          "vulnerable": [
            "<2.3.8",
            ">=2.4.0, <2.4.1"
          ]
        },
        "severity": "medium",
        "title": "CRLF Injection",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70332",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:L/E:P/RL:O/RC:R",
        "credit": [
          "Dawid Golunski"
        ],
        "cvssScore": 6.3,
        "description": "## Overview\r\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to XML External Entity (XXE) Injection.\r\n\r\n## Details\r\n\r\nXXE Injection is a type of attack against an application that parses XML input.\r\nXML is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. By default, many XML processors allow specification of an external entity, a URI that is dereferenced and evaluated during XML processing. When an XML document is being parsed, the parser can make a request and include the content at the specified URI inside of the XML document.\r\n\r\nAttacks can include disclosing local files, which may contain sensitive data such as passwords or private user data, using file: schemes or relative paths in the system identifier.\r\n\r\nFor example, below is a sample XML document, containing an XML element- username.\r\n\r\n```xml\r\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\r\n   <username>John</username>\r\n</xml>\r\n```\r\n\r\nAn external XML entity - `xxe`, is defined using a system identifier and present within a DOCTYPE header. These entities can access local or remote content. For example the below code contains an external XML entity that would fetch the content of  `/etc/passwd` and display it to the user rendered by `username`.\r\n\r\n```xml\r\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\r\n<!DOCTYPE foo [\r\n   <!ENTITY xxe SYSTEM \"file:///etc/passwd\" >]>\r\n   <username>&xxe;</username>\r\n</xml>\r\n```\r\n\r\nOther XXE Injection attacks can access local resources that may not stop returning data, possibly impacting application availability and leading to Denial of Service.\r\n\r\n## Remediation\r\nUpgrade `zendframework/zendframework` to version 2.4.6, 2.5.1 or higher.\r\n\r\n## References\r\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2015-06)",
        "disclosureTime": "2015-08-03T15:13:58Z",
        "exploitMaturity": "proof-of-concept",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70333",
        "identifiers": {
          "CVE": [
            "CVE-2015-5161"
          ],
          "CWE": [
            "CWE-611"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2015-08-03T15:13:58Z",
        "semver": {
          "vulnerable": [
            "<2.4.6",
            ">=2.5.0, <2.5.1"
          ]
        },
        "severity": "medium",
        "title": "XML External Entity (XXE) Injection",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70333",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:N",
        "credit": [
          "Vincent Herbulot"
        ],
        "cvssScore": 3.7,
        "description": "## Overview\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to Information Exposure.\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.4.9 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2015-09)\n",
        "disclosureTime": "2015-11-23T14:30:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70335",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-200"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2015-11-23T14:30:00Z",
        "semver": {
          "vulnerable": [
            "<2.4.9"
          ]
        },
        "severity": "low",
        "title": "Information Exposure",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70335",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to Information Exposure.\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.4.9 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2015-10)\n",
        "disclosureTime": "2015-11-23T14:30:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70336",
        "identifiers": {
          "CVE": [
            "CVE-2015-7503"
          ],
          "CWE": [
            "CWE-200"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2015-11-23T14:30:00Z",
        "semver": {
          "vulnerable": [
            ">=2, <2.4.9"
          ]
        },
        "severity": "high",
        "title": "Information Exposure",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70336",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:L",
        "credit": [
          "Dawid Golunski"
        ],
        "cvssScore": 7.3,
        "description": "## Overview\nAffected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to Arbitrary Code Execution.\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.4.11 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2016-04)\n",
        "disclosureTime": "2016-12-19T15:29:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70337",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-94"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2016-12-19T15:29:00Z",
        "semver": {
          "vulnerable": [
            "<2.4.11"
          ]
        },
        "severity": "high",
        "title": "Arbitrary Code Execution",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-70337",
        "version": "2.1.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
        "credit": [
          "Drupal Security Team"
        ],
        "cvssScore": 5.3,
        "description": "## Overview\n[zendframework/zendframework](https://packagist.org/packages/zendframework/zendframework) provides functionality for consuming RSS and Atom feeds.\n\nAffected versions of this package are vulnerable to Arbitrary URL Rewrite. The request URI marshaling process contains logic that inspects HTTP request headers that are specific to a given server-side URL rewrite mechanism. \n\nWhen these headers are present on systems not running the specific URL rewriting mechanism, the URLs are subject to rewriting, allowing a malicious client or proxy to emulate the headers to request arbitrary content.\n\n## Remediation\nUpgrade `zendframework/zendframework` to version 2.5.0 or higher.\n\n## References\n- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2018-01)\n",
        "disclosureTime": "2018-08-02T16:29:46.707000Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "zendframework/zendframework@2.1.0"
        ],
        "functions": [],
        "id": "SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-72268",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-601"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "php",
        "package": "zendframework/zendframework",
        "packageManager": "composer",
        "patches": [],
        "publicationTime": "2018-08-15T08:34:54.643000Z",
        "semver": {
          "vulnerable": [
            "<2.5.0"
          ]
        },
        "severity": "medium",
        "title": "Arbitrary URL Rewrite",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PHP-ZENDFRAMEWORKZENDFRAMEWORK-72268",
        "version": "2.1.0"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "4a18d42f-0706-4ad0-b127-24078731fbed",
    "name": "atokeneduser"
  },
  "packageManager": "composer"
}
````

<h3 id="test-composerjson-composerlock-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test Dep Graph

<a id="opIdTest Dep Graph"></a>

> Code samples

```bash
curl https://example.com/test/dep-graph \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "depGraph": {
      "graph": {
        "nodes": [
          {
            "deps": [
              {
                "nodeId": "ch.qos.logback:logback-core@1.0.13"
              }
            ],
            "nodeId": "root-node",
            "pkgId": "app@1.0.0"
          },
          {
            "deps": [],
            "nodeId": "ch.qos.logback:logback-core@1.0.13",
            "pkgId": "ch.qos.logback:logback-core@1.0.13"
          }
        ],
        "rootNodeId": "root-node"
      },
      "pkgManager": {
        "name": "maven"
      },
      "pkgs": [
        {
          "id": "app@1.0.0",
          "info": {
            "name": "app",
            "version": "1.0.0"
          }
        },
        {
          "id": "ch.qos.logback:logback-core@1.0.13",
          "info": {
            "name": "ch.qos.logback:logback-core",
            "version": "1.0.13"
          }
        }
      ],
      "schemaVersion": "1.2.0"
    }
  }'
```

`POST /test/dep-graph`

Use this endpoint to find issues in a [DepGraph data object](https://github.com/snyk/dep-graph#depgraphdata).

> Body parameter

```json
{
  "depGraph": {
    "graph": {
      "nodes": [
        {
          "deps": [
            {
              "nodeId": "ch.qos.logback:logback-core@1.0.13"
            }
          ],
          "nodeId": "root-node",
          "pkgId": "app@1.0.0"
        },
        {
          "deps": [],
          "nodeId": "ch.qos.logback:logback-core@1.0.13",
          "pkgId": "ch.qos.logback:logback-core@1.0.13"
        }
      ],
      "rootNodeId": "root-node"
    },
    "pkgManager": {
      "name": "maven"
    },
    "pkgs": [
      {
        "id": "app@1.0.0",
        "info": {
          "name": "app",
          "version": "1.0.0"
        }
      },
      {
        "id": "ch.qos.logback:logback-core@1.0.13",
        "info": {
          "name": "ch.qos.logback:logback-core",
          "version": "1.0.13"
        }
      }
    ],
    "schemaVersion": "1.2.0"
  }
}
```

<h3 id="test-dep-graph-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org|query|string|false|The organization to test the package with. See "The Snyk organization for a request" above.|
|body|body|object|false|none|
|» depGraph|body|object|true|A [DepGraph data object](https://github.com/snyk/dep-graph#depgraphdata) defining all packages and their relationships.|
|» » graph|body|object|true|Graph object references each pkg and how they depend on each other through the deps property.|
|» » » nodes|body|[object]|true|Array of node objects.|
|» » » rootNodeId|body|string|true|Root node id.|
|» » pkgManager|body|object|true|Package manager information.|
|» » » name|body|string|true|Package manager name.|
|» » » repositories|body|[object]|false|A list of package repositories (i.e. maven-central, or npm) that defaults to the canonical package registry for the given package manager.|
|» » pkgs|body|[object]|true|Array of package dependencies.|
|» » schemaVersion|body|string|true|Snyk DepGraph library schema version.|

> Example responses

> 200 Response

```json
{
  "issues": [
    {
      "fixInfo": {},
      "issueId": "SNYK-JAVA-CHQOSLOGBACK-30208",
      "pkgName": "ch.qos.logback:logback-core",
      "pkgVersion": "1.0.13"
    }
  ],
  "issuesData": {
    "SNYK-JAVA-CHQOSLOGBACK-30208": {
      "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
      "credit": [
        "Unknown"
      ],
      "cvssScore": 9.8,
      "description": "## Overview\n\n[ch.qos.logback:logback-core](https://mvnrepository.com/artifact/ch.qos.logback/logback-core) is a logback-core module.\n\n\nAffected versions of this package are vulnerable to Arbitrary Code Execution.\nA configuration can be turned on to allow remote logging through interfaces that accept untrusted serialized data. Authenticated attackers on the adjacent network can exploit this vulnerability to run arbitrary code through the deserialization of custom gadget chains.\n\n## Details\nSerialization is a process of converting an object into a sequence of bytes which can be persisted to a disk or database or can be sent through streams. The reverse process of creating object from sequence of bytes is called deserialization. Serialization is commonly used for communication (sharing objects between multiple hosts) and persistence (store the object state in a file or a database). It is an integral part of popular protocols like _Remote Method Invocation (RMI)_, _Java Management Extension (JMX)_, _Java Messaging System (JMS)_, _Action Message Format (AMF)_, _Java Server Faces (JSF) ViewState_, etc.\r\n\r\n  \r\n\r\n_Deserialization of untrusted data_ ([CWE-502](https://cwe.mitre.org/data/definitions/502.html)), is when the application deserializes untrusted data without sufficiently verifying that the resulting data will be valid, letting the attacker to control the state or the flow of the execution.\r\n\r\n  \r\n\r\nJava deserialization issues have been known for years. However, interest in the issue intensified greatly in 2015, when classes that could be abused to achieve remote code execution were found in a [popular library (Apache Commons Collection)](https://snyk.io/vuln/SNYK-JAVA-COMMONSCOLLECTIONS-30078). These classes were used in zero-days affecting IBM WebSphere, Oracle WebLogic and many other products.\r\n\r\n  \r\n\r\nAn attacker just needs to identify a piece of software that has both a vulnerable class on its path, and performs deserialization on untrusted data. Then all they need to do is send the payload into the deserializer, getting the command executed.\r\n\r\n  \r\n\r\n> Developers put too much trust in Java Object Serialization. Some even de-serialize objects pre-authentication. When deserializing an Object in Java you typically cast it to an expected type, and therefore Java's strict type system will ensure you only get valid object trees. Unfortunately, by the time the type checking happens, platform code has already created and executed significant logic. So, before the final type is checked a lot of code is executed from the readObject() methods of various objects, all of which is out of the developer's control. By combining the readObject() methods of various classes which are available on the classpath of the vulnerable application an attacker can execute functions (including calling Runtime.exec() to execute local OS commands).\r\n\r\n- Apache Blog\r\n\r\n  \r\n\r\nThe vulnerability, also know as _Mad Gadget_\r\n\r\n> Mad Gadget is one of the most pernicious vulnerabilities we’ve seen. By merely existing on the Java classpath, seven “gadget” classes in Apache Commons Collections (versions 3.0, 3.1, 3.2, 3.2.1, and 4.0) make object deserialization for the entire JVM process Turing complete with an exec function. Since many business applications use object deserialization to send messages across the network, it would be like hiring a bank teller who was trained to hand over all the money in the vault if asked to do so politely, and then entrusting that teller with the key. The only thing that would keep a bank safe in such a circumstance is that most people wouldn’t consider asking such a question.\r\n\r\n- Google\n\n## Remediation\n\nUpgrade `ch.qos.logback:logback-core` to version 1.1.11 or higher.\n\n\n## References\n\n- [Logback News](https://logback.qos.ch/news.html)\n\n- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5929/)\n",
      "disclosureTime": "2017-03-13T06:59:00Z",
      "fixedIn": [
        "1.1.11"
      ],
      "id": "SNYK-JAVA-CHQOSLOGBACK-30208",
      "identifiers": {
        "CVE": [
          "CVE-2017-5929"
        ],
        "CWE": [
          "CWE-502"
        ]
      },
      "language": "java",
      "mavenModuleName": {
        "artifactId": "logback-core",
        "groupId": "ch.qos.logback"
      },
      "moduleName": "ch.qos.logback:logback-core",
      "packageManager": "maven",
      "packageName": "ch.qos.logback:logback-core",
      "patches": [],
      "semver": {
        "vulnerable": [
          "[, 1.1.11)"
        ]
      },
      "severity": "critical",
      "title": "Arbitrary Code Execution"
    }
  },
  "ok": false,
  "org": {
    "id": "4a18d42f-0706-4ad0-b127-24078731fbed",
    "name": "atokeneduser"
  },
  "packageManager": "maven"
}
```

<h3 id="test-dep-graph-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test Gopkg.toml &amp; Gopkg.lock File

<a id="opIdTest Gopkg.toml &amp; Gopkg.lock File"></a>

> Code samples

```bash
curl https://example.com/test/golangdep \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "encoding": "base64",
    "files": {
      "additional": [
        {
          "contents": "\"# This file is autogenerated, do not edit; changes may be undone by the next '\''dep ensure'\''.\\r\\n\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\\"master\\\"\\r\\n  digest = \\\"1:e2a1ff1174d564ed4b75a62757f4a9081ed3b8c99ed17e47eb252b048b4ff018\\\"\\r\\n  name = \\\"github.com/asaskevich/EventBus\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"d46933a94f05c6657d7b923fcf5ac563ee37ec79\\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\\"master\\\"\\r\\n  digest = \\\"1:b95c3763b72359370262246870366418c1d17446195e3c73921135c2537b9655\\\"\\r\\n  name = \\\"github.com/cloudevents/sdk-go\\\"\\r\\n  packages = [\\r\\n    \\\".\\\",\\r\\n    \\\"v02\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"3a3d34a7231e937edfa20964dc25c29081c3ebea\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:abeb38ade3f32a92943e5be54f55ed6d6e3b6602761d74b4aab4c9dd45c18abd\\\"\\r\\n  name = \\\"github.com/fsnotify/fsnotify\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"c2828203cd70a50dcccfb2761f8b1f8ceef9a8e9\\\"\\r\\n  version = \\\"v1.4.7\\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\\"master\\\"\\r\\n  digest = \\\"1:36fe9527deed01d2a317617e59304eb2c4ce9f8a24115bcc5c2e37b3aee5bae4\\\"\\r\\n  name = \\\"github.com/gin-contrib/sse\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"22d885f9ecc78bf4ee5d72b937e4bbcdc58e8cae\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:d5083934eb25e45d17f72ffa86cae3814f4a9d6c073c4f16b64147169b245606\\\"\\r\\n  name = \\\"github.com/gin-gonic/gin\\\"\\r\\n  packages = [\\r\\n    \\\".\\\",\\r\\n    \\\"binding\\\",\\r\\n    \\\"json\\\",\\r\\n    \\\"render\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"b869fe1415e4b9eb52f247441830d502aece2d4d\\\"\\r\\n  version = \\\"v1.3.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:4c0989ca0bcd10799064318923b9bc2db6b4d6338dd75f3f2d86c3511aaaf5cf\\\"\\r\\n  name = \\\"github.com/golang/protobuf\\\"\\r\\n  packages = [\\r\\n    \\\"proto\\\",\\r\\n    \\\"ptypes\\\",\\r\\n    \\\"ptypes/any\\\",\\r\\n    \\\"ptypes/duration\\\",\\r\\n    \\\"ptypes/timestamp\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"aa810b61a9c79d51363740d207bb46cf8e620ed5\\\"\\r\\n  version = \\\"v1.2.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:4e0e5d786c35c402574cda1906195d9fbd76a35d2c921eb10199741faf4f0256\\\"\\r\\n  name = \\\"github.com/goph/emperror\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"b1b4a9b847ebc56299eb729faa942b89e9d8a562\\\"\\r\\n  version = \\\"v0.14.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:dd95856542089c3e0487299d6ac92f5f2941e97625b5a5754a483c7730e8dc89\\\"\\r\\n  name = \\\"github.com/goph/logur\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"111a952ccfacab0a90b9e4496da21d9f15187769\\\"\\r\\n  version = \\\"v0.5.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:c0d19ab64b32ce9fe5cf4ddceba78d5bc9807f0016db6b1183599da3dcc24d10\\\"\\r\\n  name = \\\"github.com/hashicorp/hcl\\\"\\r\\n  packages = [\\r\\n    \\\".\\\",\\r\\n    \\\"hcl/ast\\\",\\r\\n    \\\"hcl/parser\\\",\\r\\n    \\\"hcl/printer\\\",\\r\\n    \\\"hcl/scanner\\\",\\r\\n    \\\"hcl/strconv\\\",\\r\\n    \\\"hcl/token\\\",\\r\\n    \\\"json/parser\\\",\\r\\n    \\\"json/scanner\\\",\\r\\n    \\\"json/token\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"8cb6e5b959231cc1119e43259c4a608f9c51a241\\\"\\r\\n  version = \\\"v1.0.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:be97e109f627d3ba8edfef50c9c74f0d0c17cbe3a2e924a8985e4804a894f282\\\"\\r\\n  name = \\\"github.com/json-iterator/go\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"36b14963da70d11297d313183d7e6388c8510e1e\\\"\\r\\n  version = \\\"1.0.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:0a69a1c0db3591fcefb47f115b224592c8dfa4368b7ba9fae509d5e16cdc95c8\\\"\\r\\n  name = \\\"github.com/konsorten/go-windows-terminal-sequences\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"5c8c8bd35d3832f5d134ae1e1e375b69a4d25242\\\"\\r\\n  version = \\\"v1.0.1\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:c568d7727aa262c32bdf8a3f7db83614f7af0ed661474b24588de635c20024c7\\\"\\r\\n  name = \\\"github.com/magiconair/properties\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"c2353362d570a7bfa228149c62842019201cfb71\\\"\\r\\n  version = \\\"v1.8.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:fa610f9fe6a93f4a75e64c83673dfff9bf1a34bbb21e6102021b6bc7850834a3\\\"\\r\\n  name = \\\"github.com/mattn/go-isatty\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"57fdcb988a5c543893cc61bce354a6e24ab70022\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:53bc4cd4914cd7cd52139990d5170d6dc99067ae31c56530621b18b35fc30318\\\"\\r\\n  name = \\\"github.com/mitchellh/mapstructure\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"3536a929edddb9a5b34bd6861dc4a9647cb459fe\\\"\\r\\n  version = \\\"v1.1.2\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:808cdddf087fb64baeae67b8dfaee2069034d9704923a3cb8bd96a995421a625\\\"\\r\\n  name = \\\"github.com/patrickmn/go-cache\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"a3647f8e31d79543b2d0f0ae2fe5c379d72cedc0\\\"\\r\\n  version = \\\"v2.1.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:95741de3af260a92cc5c7f3f3061e85273f5a81b5db20d4bd68da74bd521675e\\\"\\r\\n  name = \\\"github.com/pelletier/go-toml\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"c01d1270ff3e442a8a57cddc1c92dc1138598194\\\"\\r\\n  version = \\\"v1.2.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:40e195917a951a8bf867cd05de2a46aaf1806c50cf92eebf4c16f78cd196f747\\\"\\r\\n  name = \\\"github.com/pkg/errors\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"645ef00459ed84a119197bfb8d8205042c6df63d\\\"\\r\\n  version = \\\"v0.8.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:274f67cb6fed9588ea2521ecdac05a6d62a8c51c074c1fccc6a49a40ba80e925\\\"\\r\\n  name = \\\"github.com/satori/go.uuid\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"f58768cc1a7a7e77a3bd49e98cdd21419399b6a3\\\"\\r\\n  version = \\\"v1.2.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:69b1cc331fca23d702bd72f860c6a647afd0aa9fcbc1d0659b1365e26546dd70\\\"\\r\\n  name = \\\"github.com/sirupsen/logrus\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"bcd833dfe83d3cebad139e4a29ed79cb2318bf95\\\"\\r\\n  version = \\\"v1.2.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:d707dbc1330c0ed177d4642d6ae102d5e2c847ebd0eb84562d0dc4f024531cfc\\\"\\r\\n  name = \\\"github.com/spf13/afero\\\"\\r\\n  packages = [\\r\\n    \\\".\\\",\\r\\n    \\\"mem\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"a5d6946387efe7d64d09dcba68cdd523dc1273a3\\\"\\r\\n  version = \\\"v1.2.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:08d65904057412fc0270fc4812a1c90c594186819243160dc779a402d4b6d0bc\\\"\\r\\n  name = \\\"github.com/spf13/cast\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"8c9545af88b134710ab1cd196795e7f2388358d7\\\"\\r\\n  version = \\\"v1.3.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:68ea4e23713989dc20b1bded5d9da2c5f9be14ff9885beef481848edd18c26cb\\\"\\r\\n  name = \\\"github.com/spf13/jwalterweatherman\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"4a4406e478ca629068e7768fc33f3f044173c0a6\\\"\\r\\n  version = \\\"v1.0.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:c1b1102241e7f645bc8e0c22ae352e8f0dc6484b6cb4d132fa9f24174e0119e2\\\"\\r\\n  name = \\\"github.com/spf13/pflag\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"298182f68c66c05229eb03ac171abe6e309ee79a\\\"\\r\\n  version = \\\"v1.0.3\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:de37e343c64582d7026bf8ab6ac5b22a72eac54f3a57020db31524affed9f423\\\"\\r\\n  name = \\\"github.com/spf13/viper\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"6d33b5a963d922d182c91e8a1c88d81fd150cfd4\\\"\\r\\n  version = \\\"v1.3.1\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:c268acaa4a4d94a467980e5e91452eb61c460145765293dc0aed48e5e9919cc6\\\"\\r\\n  name = \\\"github.com/ugorji/go\\\"\\r\\n  packages = [\\\"codec\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"c88ee250d0221a57af388746f5cf03768c21d6e2\\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\\"master\\\"\\r\\n  digest = \\\"1:38f553aff0273ad6f367cb0a0f8b6eecbaef8dc6cb8b50e57b6a81c1d5b1e332\\\"\\r\\n  name = \\\"golang.org/x/crypto\\\"\\r\\n  packages = [\\\"ssh/terminal\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"505ab145d0a99da450461ae2c1a9f6cd10d1f447\\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\\"master\\\"\\r\\n  digest = \\\"1:89a0cb976397aa9157a45bb2b896d0bcd07ee095ac975e0f03c53250c402265e\\\"\\r\\n  name = \\\"golang.org/x/net\\\"\\r\\n  packages = [\\r\\n    \\\"context\\\",\\r\\n    \\\"http/httpguts\\\",\\r\\n    \\\"http2\\\",\\r\\n    \\\"http2/hpack\\\",\\r\\n    \\\"idna\\\",\\r\\n    \\\"internal/timeseries\\\",\\r\\n    \\\"trace\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"e147a9138326bc0e9d4e179541ffd8af41cff8a9\\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\\"master\\\"\\r\\n  digest = \\\"1:ba8cbf57cfd92d5f8592b4aca1a35d92c162363d32aeabd5b12555f8896635e7\\\"\\r\\n  name = \\\"golang.org/x/sys\\\"\\r\\n  packages = [\\r\\n    \\\"unix\\\",\\r\\n    \\\"windows\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"4d1cda033e0619309c606fc686de3adcf599539e\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:a2ab62866c75542dd18d2b069fec854577a20211d7c0ea6ae746072a1dccdd18\\\"\\r\\n  name = \\\"golang.org/x/text\\\"\\r\\n  packages = [\\r\\n    \\\"collate\\\",\\r\\n    \\\"collate/build\\\",\\r\\n    \\\"internal/colltab\\\",\\r\\n    \\\"internal/gen\\\",\\r\\n    \\\"internal/tag\\\",\\r\\n    \\\"internal/triegen\\\",\\r\\n    \\\"internal/ucd\\\",\\r\\n    \\\"language\\\",\\r\\n    \\\"secure/bidirule\\\",\\r\\n    \\\"transform\\\",\\r\\n    \\\"unicode/bidi\\\",\\r\\n    \\\"unicode/cldr\\\",\\r\\n    \\\"unicode/norm\\\",\\r\\n    \\\"unicode/rangetable\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"f21a4dfb5e38f5895301dc265a8def02365cc3d0\\\"\\r\\n  version = \\\"v0.3.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\\"master\\\"\\r\\n  digest = \\\"1:077c1c599507b3b3e9156d17d36e1e61928ee9b53a5b420f10f28ebd4a0b275c\\\"\\r\\n  name = \\\"google.golang.org/genproto\\\"\\r\\n  packages = [\\\"googleapis/rpc/status\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"bd91e49a0898e27abb88c339b432fa53d7497ac0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:9edd250a3c46675d0679d87540b30c9ed253b19bd1fd1af08f4f5fb3c79fc487\\\"\\r\\n  name = \\\"google.golang.org/grpc\\\"\\r\\n  packages = [\\r\\n    \\\".\\\",\\r\\n    \\\"balancer\\\",\\r\\n    \\\"balancer/base\\\",\\r\\n    \\\"balancer/roundrobin\\\",\\r\\n    \\\"binarylog/grpc_binarylog_v1\\\",\\r\\n    \\\"codes\\\",\\r\\n    \\\"connectivity\\\",\\r\\n    \\\"credentials\\\",\\r\\n    \\\"credentials/internal\\\",\\r\\n    \\\"encoding\\\",\\r\\n    \\\"encoding/proto\\\",\\r\\n    \\\"grpclog\\\",\\r\\n    \\\"internal\\\",\\r\\n    \\\"internal/backoff\\\",\\r\\n    \\\"internal/binarylog\\\",\\r\\n    \\\"internal/channelz\\\",\\r\\n    \\\"internal/envconfig\\\",\\r\\n    \\\"internal/grpcrand\\\",\\r\\n    \\\"internal/grpcsync\\\",\\r\\n    \\\"internal/syscall\\\",\\r\\n    \\\"internal/transport\\\",\\r\\n    \\\"keepalive\\\",\\r\\n    \\\"metadata\\\",\\r\\n    \\\"naming\\\",\\r\\n    \\\"peer\\\",\\r\\n    \\\"resolver\\\",\\r\\n    \\\"resolver/dns\\\",\\r\\n    \\\"resolver/passthrough\\\",\\r\\n    \\\"stats\\\",\\r\\n    \\\"status\\\",\\r\\n    \\\"tap\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"df014850f6dee74ba2fc94874043a9f3f75fbfd8\\\"\\r\\n  version = \\\"v1.17.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:cbc72c4c4886a918d6ab4b95e347ffe259846260f99ebdd8a198c2331cf2b2e9\\\"\\r\\n  name = \\\"gopkg.in/go-playground/validator.v8\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"5f1438d3fca68893a817e4a66806cea46a9e4ebf\\\"\\r\\n  version = \\\"v8.18.2\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:4d2e5a73dc1500038e504a8d78b986630e3626dc027bc030ba5c75da257cdb96\\\"\\r\\n  name = \\\"gopkg.in/yaml.v2\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"51d6538a90f86fe93ac480b35f37b2be17fef232\\\"\\r\\n  version = \\\"v2.2.2\\\"\\r\\n\\r\\n[solve-meta]\\r\\n  analyzer-name = \\\"dep\\\"\\r\\n  analyzer-version = 1\\r\\n  input-imports = [\\r\\n    \\\"github.com/asaskevich/EventBus\\\",\\r\\n    \\\"github.com/cloudevents/sdk-go/v02\\\",\\r\\n    \\\"github.com/gin-gonic/gin\\\",\\r\\n    \\\"github.com/golang/protobuf/proto\\\",\\r\\n    \\\"github.com/goph/emperror\\\",\\r\\n    \\\"github.com/goph/logur\\\",\\r\\n    \\\"github.com/karlseguin/ccache\\\",\\r\\n    \\\"github.com/patrickmn/go-cache\\\",\\r\\n    \\\"github.com/pkg/errors\\\",\\r\\n    \\\"github.com/satori/go.uuid\\\",\\r\\n    \\\"github.com/sirupsen/logrus\\\",\\r\\n    \\\"github.com/spf13/cast\\\",\\r\\n    \\\"github.com/spf13/pflag\\\",\\r\\n    \\\"github.com/spf13/viper\\\",\\r\\n    \\\"golang.org/x/net/context\\\",\\r\\n    \\\"google.golang.org/grpc\\\",\\r\\n    \\\"gopkg.in/go-playground/validator.v8\\\",\\r\\n    \\\"gopkg.in/yaml.v2\\\",\\r\\n  ]\\r\\n  solver-name = \\\"gps-cdcl\\\"\\r\\n  solver-version = 1\""
        }
      ],
      "target": {
        "contents": "\"# Gopkg.toml example\\r\\n#\\r\\n# Refer to https://golang.github.io/dep/docs/Gopkg.toml.html\\r\\n# for detailed Gopkg.toml documentation.\\r\\n#\\r\\n# required = [\\\"github.com/user/thing/cmd/thing\\\"]\\r\\n# ignored = [\\\"github.com/user/project/pkgX\\\", \\\"bitbucket.org/user/project/pkgA/pkgY\\\"]\\r\\n#\\r\\n# [[constraint]]\\r\\n#   name = \\\"github.com/user/project\\\"\\r\\n#   version = \\\"1.0.0\\\"\\r\\n#\\r\\n# [[constraint]]\\r\\n#   name = \\\"github.com/user/project2\\\"\\r\\n#   branch = \\\"dev\\\"\\r\\n#   source = \\\"github.com/myfork/project2\\\"\\r\\n#\\r\\n# [[override]]\\r\\n#   name = \\\"github.com/x/y\\\"\\r\\n#   version = \\\"2.4.0\\\"\\r\\n#\\r\\n# [prune]\\r\\n#   non-go = false\\r\\n#   go-tests = true\\r\\n#   unused-packages = true\\r\\n\\r\\n\\r\\n[[constraint]]\\r\\n  branch = \\\"master\\\"\\r\\n  name = \\\"github.com/asaskevich/EventBus\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  branch = \\\"master\\\"\\r\\n  name = \\\"github.com/cloudevents/sdk-go\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/gin-gonic/gin\\\"\\r\\n  version = \\\"1.3.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/golang/protobuf\\\"\\r\\n  version = \\\"1.2.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/goph/emperror\\\"\\r\\n  version = \\\"0.14.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/goph/logur\\\"\\r\\n  version = \\\"0.5.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/patrickmn/go-cache\\\"\\r\\n  version = \\\"2.1.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/pkg/errors\\\"\\r\\n  version = \\\"0.8.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/satori/go.uuid\\\"\\r\\n  version = \\\"1.2.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/sirupsen/logrus\\\"\\r\\n  version = \\\"1.2.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/spf13/cast\\\"\\r\\n  version = \\\"1.3.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/spf13/pflag\\\"\\r\\n  version = \\\"1.0.3\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/spf13/viper\\\"\\r\\n  version = \\\"1.3.1\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  branch = \\\"master\\\"\\r\\n  name = \\\"golang.org/x/net\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"google.golang.org/grpc\\\"\\r\\n  version = \\\"1.17.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"gopkg.in/go-playground/validator.v8\\\"\\r\\n  version = \\\"8.18.2\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"gopkg.in/yaml.v2\\\"\\r\\n  version = \\\"2.2.2\\\"\\r\\n\\r\\n[prune]\\r\\n  go-tests = true\\r\\n  unused-packages = true\""
      }
    }
  }'
```

`POST /test/golangdep`

You can test your Go dep packages for issues according to their manifest file & lockfile using this action. It takes a JSON object containing a "target" `Gopkg.toml` and a `Gopkg.lock`.

> Body parameter

```json
{
  "encoding": "base64",
  "files": {
    "additional": [
      {
        "contents": "\"# This file is autogenerated, do not edit; changes may be undone by the next 'dep ensure'.\\r\\n\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\\"master\\\"\\r\\n  digest = \\\"1:e2a1ff1174d564ed4b75a62757f4a9081ed3b8c99ed17e47eb252b048b4ff018\\\"\\r\\n  name = \\\"github.com/asaskevich/EventBus\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"d46933a94f05c6657d7b923fcf5ac563ee37ec79\\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\\"master\\\"\\r\\n  digest = \\\"1:b95c3763b72359370262246870366418c1d17446195e3c73921135c2537b9655\\\"\\r\\n  name = \\\"github.com/cloudevents/sdk-go\\\"\\r\\n  packages = [\\r\\n    \\\".\\\",\\r\\n    \\\"v02\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"3a3d34a7231e937edfa20964dc25c29081c3ebea\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:abeb38ade3f32a92943e5be54f55ed6d6e3b6602761d74b4aab4c9dd45c18abd\\\"\\r\\n  name = \\\"github.com/fsnotify/fsnotify\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"c2828203cd70a50dcccfb2761f8b1f8ceef9a8e9\\\"\\r\\n  version = \\\"v1.4.7\\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\\"master\\\"\\r\\n  digest = \\\"1:36fe9527deed01d2a317617e59304eb2c4ce9f8a24115bcc5c2e37b3aee5bae4\\\"\\r\\n  name = \\\"github.com/gin-contrib/sse\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"22d885f9ecc78bf4ee5d72b937e4bbcdc58e8cae\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:d5083934eb25e45d17f72ffa86cae3814f4a9d6c073c4f16b64147169b245606\\\"\\r\\n  name = \\\"github.com/gin-gonic/gin\\\"\\r\\n  packages = [\\r\\n    \\\".\\\",\\r\\n    \\\"binding\\\",\\r\\n    \\\"json\\\",\\r\\n    \\\"render\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"b869fe1415e4b9eb52f247441830d502aece2d4d\\\"\\r\\n  version = \\\"v1.3.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:4c0989ca0bcd10799064318923b9bc2db6b4d6338dd75f3f2d86c3511aaaf5cf\\\"\\r\\n  name = \\\"github.com/golang/protobuf\\\"\\r\\n  packages = [\\r\\n    \\\"proto\\\",\\r\\n    \\\"ptypes\\\",\\r\\n    \\\"ptypes/any\\\",\\r\\n    \\\"ptypes/duration\\\",\\r\\n    \\\"ptypes/timestamp\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"aa810b61a9c79d51363740d207bb46cf8e620ed5\\\"\\r\\n  version = \\\"v1.2.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:4e0e5d786c35c402574cda1906195d9fbd76a35d2c921eb10199741faf4f0256\\\"\\r\\n  name = \\\"github.com/goph/emperror\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"b1b4a9b847ebc56299eb729faa942b89e9d8a562\\\"\\r\\n  version = \\\"v0.14.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:dd95856542089c3e0487299d6ac92f5f2941e97625b5a5754a483c7730e8dc89\\\"\\r\\n  name = \\\"github.com/goph/logur\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"111a952ccfacab0a90b9e4496da21d9f15187769\\\"\\r\\n  version = \\\"v0.5.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:c0d19ab64b32ce9fe5cf4ddceba78d5bc9807f0016db6b1183599da3dcc24d10\\\"\\r\\n  name = \\\"github.com/hashicorp/hcl\\\"\\r\\n  packages = [\\r\\n    \\\".\\\",\\r\\n    \\\"hcl/ast\\\",\\r\\n    \\\"hcl/parser\\\",\\r\\n    \\\"hcl/printer\\\",\\r\\n    \\\"hcl/scanner\\\",\\r\\n    \\\"hcl/strconv\\\",\\r\\n    \\\"hcl/token\\\",\\r\\n    \\\"json/parser\\\",\\r\\n    \\\"json/scanner\\\",\\r\\n    \\\"json/token\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"8cb6e5b959231cc1119e43259c4a608f9c51a241\\\"\\r\\n  version = \\\"v1.0.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:be97e109f627d3ba8edfef50c9c74f0d0c17cbe3a2e924a8985e4804a894f282\\\"\\r\\n  name = \\\"github.com/json-iterator/go\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"36b14963da70d11297d313183d7e6388c8510e1e\\\"\\r\\n  version = \\\"1.0.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:0a69a1c0db3591fcefb47f115b224592c8dfa4368b7ba9fae509d5e16cdc95c8\\\"\\r\\n  name = \\\"github.com/konsorten/go-windows-terminal-sequences\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"5c8c8bd35d3832f5d134ae1e1e375b69a4d25242\\\"\\r\\n  version = \\\"v1.0.1\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:c568d7727aa262c32bdf8a3f7db83614f7af0ed661474b24588de635c20024c7\\\"\\r\\n  name = \\\"github.com/magiconair/properties\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"c2353362d570a7bfa228149c62842019201cfb71\\\"\\r\\n  version = \\\"v1.8.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:fa610f9fe6a93f4a75e64c83673dfff9bf1a34bbb21e6102021b6bc7850834a3\\\"\\r\\n  name = \\\"github.com/mattn/go-isatty\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"57fdcb988a5c543893cc61bce354a6e24ab70022\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:53bc4cd4914cd7cd52139990d5170d6dc99067ae31c56530621b18b35fc30318\\\"\\r\\n  name = \\\"github.com/mitchellh/mapstructure\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"3536a929edddb9a5b34bd6861dc4a9647cb459fe\\\"\\r\\n  version = \\\"v1.1.2\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:808cdddf087fb64baeae67b8dfaee2069034d9704923a3cb8bd96a995421a625\\\"\\r\\n  name = \\\"github.com/patrickmn/go-cache\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"a3647f8e31d79543b2d0f0ae2fe5c379d72cedc0\\\"\\r\\n  version = \\\"v2.1.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:95741de3af260a92cc5c7f3f3061e85273f5a81b5db20d4bd68da74bd521675e\\\"\\r\\n  name = \\\"github.com/pelletier/go-toml\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"c01d1270ff3e442a8a57cddc1c92dc1138598194\\\"\\r\\n  version = \\\"v1.2.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:40e195917a951a8bf867cd05de2a46aaf1806c50cf92eebf4c16f78cd196f747\\\"\\r\\n  name = \\\"github.com/pkg/errors\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"645ef00459ed84a119197bfb8d8205042c6df63d\\\"\\r\\n  version = \\\"v0.8.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:274f67cb6fed9588ea2521ecdac05a6d62a8c51c074c1fccc6a49a40ba80e925\\\"\\r\\n  name = \\\"github.com/satori/go.uuid\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"f58768cc1a7a7e77a3bd49e98cdd21419399b6a3\\\"\\r\\n  version = \\\"v1.2.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:69b1cc331fca23d702bd72f860c6a647afd0aa9fcbc1d0659b1365e26546dd70\\\"\\r\\n  name = \\\"github.com/sirupsen/logrus\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"bcd833dfe83d3cebad139e4a29ed79cb2318bf95\\\"\\r\\n  version = \\\"v1.2.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:d707dbc1330c0ed177d4642d6ae102d5e2c847ebd0eb84562d0dc4f024531cfc\\\"\\r\\n  name = \\\"github.com/spf13/afero\\\"\\r\\n  packages = [\\r\\n    \\\".\\\",\\r\\n    \\\"mem\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"a5d6946387efe7d64d09dcba68cdd523dc1273a3\\\"\\r\\n  version = \\\"v1.2.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:08d65904057412fc0270fc4812a1c90c594186819243160dc779a402d4b6d0bc\\\"\\r\\n  name = \\\"github.com/spf13/cast\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"8c9545af88b134710ab1cd196795e7f2388358d7\\\"\\r\\n  version = \\\"v1.3.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:68ea4e23713989dc20b1bded5d9da2c5f9be14ff9885beef481848edd18c26cb\\\"\\r\\n  name = \\\"github.com/spf13/jwalterweatherman\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"4a4406e478ca629068e7768fc33f3f044173c0a6\\\"\\r\\n  version = \\\"v1.0.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:c1b1102241e7f645bc8e0c22ae352e8f0dc6484b6cb4d132fa9f24174e0119e2\\\"\\r\\n  name = \\\"github.com/spf13/pflag\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"298182f68c66c05229eb03ac171abe6e309ee79a\\\"\\r\\n  version = \\\"v1.0.3\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:de37e343c64582d7026bf8ab6ac5b22a72eac54f3a57020db31524affed9f423\\\"\\r\\n  name = \\\"github.com/spf13/viper\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"6d33b5a963d922d182c91e8a1c88d81fd150cfd4\\\"\\r\\n  version = \\\"v1.3.1\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:c268acaa4a4d94a467980e5e91452eb61c460145765293dc0aed48e5e9919cc6\\\"\\r\\n  name = \\\"github.com/ugorji/go\\\"\\r\\n  packages = [\\\"codec\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"c88ee250d0221a57af388746f5cf03768c21d6e2\\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\\"master\\\"\\r\\n  digest = \\\"1:38f553aff0273ad6f367cb0a0f8b6eecbaef8dc6cb8b50e57b6a81c1d5b1e332\\\"\\r\\n  name = \\\"golang.org/x/crypto\\\"\\r\\n  packages = [\\\"ssh/terminal\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"505ab145d0a99da450461ae2c1a9f6cd10d1f447\\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\\"master\\\"\\r\\n  digest = \\\"1:89a0cb976397aa9157a45bb2b896d0bcd07ee095ac975e0f03c53250c402265e\\\"\\r\\n  name = \\\"golang.org/x/net\\\"\\r\\n  packages = [\\r\\n    \\\"context\\\",\\r\\n    \\\"http/httpguts\\\",\\r\\n    \\\"http2\\\",\\r\\n    \\\"http2/hpack\\\",\\r\\n    \\\"idna\\\",\\r\\n    \\\"internal/timeseries\\\",\\r\\n    \\\"trace\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"e147a9138326bc0e9d4e179541ffd8af41cff8a9\\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\\"master\\\"\\r\\n  digest = \\\"1:ba8cbf57cfd92d5f8592b4aca1a35d92c162363d32aeabd5b12555f8896635e7\\\"\\r\\n  name = \\\"golang.org/x/sys\\\"\\r\\n  packages = [\\r\\n    \\\"unix\\\",\\r\\n    \\\"windows\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"4d1cda033e0619309c606fc686de3adcf599539e\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:a2ab62866c75542dd18d2b069fec854577a20211d7c0ea6ae746072a1dccdd18\\\"\\r\\n  name = \\\"golang.org/x/text\\\"\\r\\n  packages = [\\r\\n    \\\"collate\\\",\\r\\n    \\\"collate/build\\\",\\r\\n    \\\"internal/colltab\\\",\\r\\n    \\\"internal/gen\\\",\\r\\n    \\\"internal/tag\\\",\\r\\n    \\\"internal/triegen\\\",\\r\\n    \\\"internal/ucd\\\",\\r\\n    \\\"language\\\",\\r\\n    \\\"secure/bidirule\\\",\\r\\n    \\\"transform\\\",\\r\\n    \\\"unicode/bidi\\\",\\r\\n    \\\"unicode/cldr\\\",\\r\\n    \\\"unicode/norm\\\",\\r\\n    \\\"unicode/rangetable\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"f21a4dfb5e38f5895301dc265a8def02365cc3d0\\\"\\r\\n  version = \\\"v0.3.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\\"master\\\"\\r\\n  digest = \\\"1:077c1c599507b3b3e9156d17d36e1e61928ee9b53a5b420f10f28ebd4a0b275c\\\"\\r\\n  name = \\\"google.golang.org/genproto\\\"\\r\\n  packages = [\\\"googleapis/rpc/status\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"bd91e49a0898e27abb88c339b432fa53d7497ac0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:9edd250a3c46675d0679d87540b30c9ed253b19bd1fd1af08f4f5fb3c79fc487\\\"\\r\\n  name = \\\"google.golang.org/grpc\\\"\\r\\n  packages = [\\r\\n    \\\".\\\",\\r\\n    \\\"balancer\\\",\\r\\n    \\\"balancer/base\\\",\\r\\n    \\\"balancer/roundrobin\\\",\\r\\n    \\\"binarylog/grpc_binarylog_v1\\\",\\r\\n    \\\"codes\\\",\\r\\n    \\\"connectivity\\\",\\r\\n    \\\"credentials\\\",\\r\\n    \\\"credentials/internal\\\",\\r\\n    \\\"encoding\\\",\\r\\n    \\\"encoding/proto\\\",\\r\\n    \\\"grpclog\\\",\\r\\n    \\\"internal\\\",\\r\\n    \\\"internal/backoff\\\",\\r\\n    \\\"internal/binarylog\\\",\\r\\n    \\\"internal/channelz\\\",\\r\\n    \\\"internal/envconfig\\\",\\r\\n    \\\"internal/grpcrand\\\",\\r\\n    \\\"internal/grpcsync\\\",\\r\\n    \\\"internal/syscall\\\",\\r\\n    \\\"internal/transport\\\",\\r\\n    \\\"keepalive\\\",\\r\\n    \\\"metadata\\\",\\r\\n    \\\"naming\\\",\\r\\n    \\\"peer\\\",\\r\\n    \\\"resolver\\\",\\r\\n    \\\"resolver/dns\\\",\\r\\n    \\\"resolver/passthrough\\\",\\r\\n    \\\"stats\\\",\\r\\n    \\\"status\\\",\\r\\n    \\\"tap\\\",\\r\\n  ]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"df014850f6dee74ba2fc94874043a9f3f75fbfd8\\\"\\r\\n  version = \\\"v1.17.0\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:cbc72c4c4886a918d6ab4b95e347ffe259846260f99ebdd8a198c2331cf2b2e9\\\"\\r\\n  name = \\\"gopkg.in/go-playground/validator.v8\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"5f1438d3fca68893a817e4a66806cea46a9e4ebf\\\"\\r\\n  version = \\\"v8.18.2\\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\\"1:4d2e5a73dc1500038e504a8d78b986630e3626dc027bc030ba5c75da257cdb96\\\"\\r\\n  name = \\\"gopkg.in/yaml.v2\\\"\\r\\n  packages = [\\\".\\\"]\\r\\n  pruneopts = \\\"UT\\\"\\r\\n  revision = \\\"51d6538a90f86fe93ac480b35f37b2be17fef232\\\"\\r\\n  version = \\\"v2.2.2\\\"\\r\\n\\r\\n[solve-meta]\\r\\n  analyzer-name = \\\"dep\\\"\\r\\n  analyzer-version = 1\\r\\n  input-imports = [\\r\\n    \\\"github.com/asaskevich/EventBus\\\",\\r\\n    \\\"github.com/cloudevents/sdk-go/v02\\\",\\r\\n    \\\"github.com/gin-gonic/gin\\\",\\r\\n    \\\"github.com/golang/protobuf/proto\\\",\\r\\n    \\\"github.com/goph/emperror\\\",\\r\\n    \\\"github.com/goph/logur\\\",\\r\\n    \\\"github.com/karlseguin/ccache\\\",\\r\\n    \\\"github.com/patrickmn/go-cache\\\",\\r\\n    \\\"github.com/pkg/errors\\\",\\r\\n    \\\"github.com/satori/go.uuid\\\",\\r\\n    \\\"github.com/sirupsen/logrus\\\",\\r\\n    \\\"github.com/spf13/cast\\\",\\r\\n    \\\"github.com/spf13/pflag\\\",\\r\\n    \\\"github.com/spf13/viper\\\",\\r\\n    \\\"golang.org/x/net/context\\\",\\r\\n    \\\"google.golang.org/grpc\\\",\\r\\n    \\\"gopkg.in/go-playground/validator.v8\\\",\\r\\n    \\\"gopkg.in/yaml.v2\\\",\\r\\n  ]\\r\\n  solver-name = \\\"gps-cdcl\\\"\\r\\n  solver-version = 1\""
      }
    ],
    "target": {
      "contents": "\"# Gopkg.toml example\\r\\n#\\r\\n# Refer to https://golang.github.io/dep/docs/Gopkg.toml.html\\r\\n# for detailed Gopkg.toml documentation.\\r\\n#\\r\\n# required = [\\\"github.com/user/thing/cmd/thing\\\"]\\r\\n# ignored = [\\\"github.com/user/project/pkgX\\\", \\\"bitbucket.org/user/project/pkgA/pkgY\\\"]\\r\\n#\\r\\n# [[constraint]]\\r\\n#   name = \\\"github.com/user/project\\\"\\r\\n#   version = \\\"1.0.0\\\"\\r\\n#\\r\\n# [[constraint]]\\r\\n#   name = \\\"github.com/user/project2\\\"\\r\\n#   branch = \\\"dev\\\"\\r\\n#   source = \\\"github.com/myfork/project2\\\"\\r\\n#\\r\\n# [[override]]\\r\\n#   name = \\\"github.com/x/y\\\"\\r\\n#   version = \\\"2.4.0\\\"\\r\\n#\\r\\n# [prune]\\r\\n#   non-go = false\\r\\n#   go-tests = true\\r\\n#   unused-packages = true\\r\\n\\r\\n\\r\\n[[constraint]]\\r\\n  branch = \\\"master\\\"\\r\\n  name = \\\"github.com/asaskevich/EventBus\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  branch = \\\"master\\\"\\r\\n  name = \\\"github.com/cloudevents/sdk-go\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/gin-gonic/gin\\\"\\r\\n  version = \\\"1.3.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/golang/protobuf\\\"\\r\\n  version = \\\"1.2.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/goph/emperror\\\"\\r\\n  version = \\\"0.14.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/goph/logur\\\"\\r\\n  version = \\\"0.5.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/patrickmn/go-cache\\\"\\r\\n  version = \\\"2.1.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/pkg/errors\\\"\\r\\n  version = \\\"0.8.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/satori/go.uuid\\\"\\r\\n  version = \\\"1.2.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/sirupsen/logrus\\\"\\r\\n  version = \\\"1.2.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/spf13/cast\\\"\\r\\n  version = \\\"1.3.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/spf13/pflag\\\"\\r\\n  version = \\\"1.0.3\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"github.com/spf13/viper\\\"\\r\\n  version = \\\"1.3.1\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  branch = \\\"master\\\"\\r\\n  name = \\\"golang.org/x/net\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"google.golang.org/grpc\\\"\\r\\n  version = \\\"1.17.0\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"gopkg.in/go-playground/validator.v8\\\"\\r\\n  version = \\\"8.18.2\\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\\"gopkg.in/yaml.v2\\\"\\r\\n  version = \\\"2.2.2\\\"\\r\\n\\r\\n[prune]\\r\\n  go-tests = true\\r\\n  unused-packages = true\""
    }
  }
}
```

<h3 id="test-gopkgtoml-gopkglock-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org|query|string|false|The organization to test the package with. See "The Snyk organization for a request" above.|
|body|body|object|false|none|
|» encoding|body|string|false|the encoding for the manifest files sent.|
|» files|body|object|true|The manifest files:|
|» » additional|body|[object]|true|a lockfile encoded according the the "encoding" field.|
|» » target|body|object|true|the `Gopkg.toml` file, encoded according the the "encoding" field.|
|» » » contents|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encoding|plain|
|» encoding|base64|

> Example responses

> 200 Response

```json
{
  "dependencyCount": 101,
  "issues": {
    "licenses": [
      {
        "from": [
          "github.com/hashicorp/hcl/json/token@v1.0.0"
        ],
        "id": "snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "language": "golang",
        "package": "github.com/hashicorp/hcl/json/token",
        "packageManager": "golang",
        "semver": {
          "vulnerable": [
            ">=0"
          ],
          "vulnerableHashes": [
            "*"
          ]
        },
        "severity": "medium",
        "title": "MPL-2.0 license",
        "type": "license",
        "url": "http://localhost:34612/vuln/snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "version": "v1.0.0"
      },
      {
        "from": [
          "github.com/hashicorp/hcl/json/scanner@v1.0.0"
        ],
        "id": "snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "language": "golang",
        "package": "github.com/hashicorp/hcl/json/scanner",
        "packageManager": "golang",
        "semver": {
          "vulnerable": [
            ">=0"
          ],
          "vulnerableHashes": [
            "*"
          ]
        },
        "severity": "medium",
        "title": "MPL-2.0 license",
        "type": "license",
        "url": "http://localhost:34612/vuln/snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "version": "v1.0.0"
      },
      {
        "from": [
          "github.com/hashicorp/hcl/json/parser@v1.0.0"
        ],
        "id": "snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "language": "golang",
        "package": "github.com/hashicorp/hcl/json/parser",
        "packageManager": "golang",
        "semver": {
          "vulnerable": [
            ">=0"
          ],
          "vulnerableHashes": [
            "*"
          ]
        },
        "severity": "medium",
        "title": "MPL-2.0 license",
        "type": "license",
        "url": "http://localhost:34612/vuln/snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "version": "v1.0.0"
      },
      {
        "from": [
          "github.com/hashicorp/hcl/hcl/token@v1.0.0"
        ],
        "id": "snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "language": "golang",
        "package": "github.com/hashicorp/hcl/hcl/token",
        "packageManager": "golang",
        "semver": {
          "vulnerable": [
            ">=0"
          ],
          "vulnerableHashes": [
            "*"
          ]
        },
        "severity": "medium",
        "title": "MPL-2.0 license",
        "type": "license",
        "url": "http://localhost:34612/vuln/snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "version": "v1.0.0"
      },
      {
        "from": [
          "github.com/hashicorp/hcl/hcl/strconv@v1.0.0"
        ],
        "id": "snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "language": "golang",
        "package": "github.com/hashicorp/hcl/hcl/strconv",
        "packageManager": "golang",
        "semver": {
          "vulnerable": [
            ">=0"
          ],
          "vulnerableHashes": [
            "*"
          ]
        },
        "severity": "medium",
        "title": "MPL-2.0 license",
        "type": "license",
        "url": "http://localhost:34612/vuln/snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "version": "v1.0.0"
      },
      {
        "from": [
          "github.com/hashicorp/hcl/hcl/scanner@v1.0.0"
        ],
        "id": "snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "language": "golang",
        "package": "github.com/hashicorp/hcl/hcl/scanner",
        "packageManager": "golang",
        "semver": {
          "vulnerable": [
            ">=0"
          ],
          "vulnerableHashes": [
            "*"
          ]
        },
        "severity": "medium",
        "title": "MPL-2.0 license",
        "type": "license",
        "url": "http://localhost:34612/vuln/snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "version": "v1.0.0"
      },
      {
        "from": [
          "github.com/hashicorp/hcl/hcl/printer@v1.0.0"
        ],
        "id": "snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "language": "golang",
        "package": "github.com/hashicorp/hcl/hcl/printer",
        "packageManager": "golang",
        "semver": {
          "vulnerable": [
            ">=0"
          ],
          "vulnerableHashes": [
            "*"
          ]
        },
        "severity": "medium",
        "title": "MPL-2.0 license",
        "type": "license",
        "url": "http://localhost:34612/vuln/snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "version": "v1.0.0"
      },
      {
        "from": [
          "github.com/hashicorp/hcl/hcl/parser@v1.0.0"
        ],
        "id": "snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "language": "golang",
        "package": "github.com/hashicorp/hcl/hcl/parser",
        "packageManager": "golang",
        "semver": {
          "vulnerable": [
            ">=0"
          ],
          "vulnerableHashes": [
            "*"
          ]
        },
        "severity": "medium",
        "title": "MPL-2.0 license",
        "type": "license",
        "url": "http://localhost:34612/vuln/snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "version": "v1.0.0"
      },
      {
        "from": [
          "github.com/hashicorp/hcl/hcl/ast@v1.0.0"
        ],
        "id": "snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "language": "golang",
        "package": "github.com/hashicorp/hcl/hcl/ast",
        "packageManager": "golang",
        "semver": {
          "vulnerable": [
            ">=0"
          ],
          "vulnerableHashes": [
            "*"
          ]
        },
        "severity": "medium",
        "title": "MPL-2.0 license",
        "type": "license",
        "url": "http://localhost:34612/vuln/snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "version": "v1.0.0"
      },
      {
        "from": [
          "github.com/hashicorp/hcl@v1.0.0"
        ],
        "id": "snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "language": "golang",
        "package": "github.com/hashicorp/hcl",
        "packageManager": "golang",
        "semver": {
          "vulnerable": [
            ">=0"
          ],
          "vulnerableHashes": [
            "*"
          ]
        },
        "severity": "medium",
        "title": "MPL-2.0 license",
        "type": "license",
        "url": "http://localhost:34612/vuln/snyk:lic:golang:github.com:hashicorp:hcl:MPL-2.0",
        "version": "v1.0.0"
      }
    ],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H",
        "credit": [
          "josselin-c"
        ],
        "cvssScore": 8.1,
        "description": "## Overview\n[github.com/satori/go.uuid](https://github.com/satori/go.uuid) provides pure Go implementation of Universally Unique Identifier (UUID).\r\n\r\nAffected versions of this package are vulnerable to Insecure Randomness producing predictable `UUID` identifiers due to the limited number of bytes read when using the `g.rand.Read` function.\r\n \r\n## Disclosure Timeline\r\n* Jun 3th, 2018 - The vulnerability introduced by replacing the function `rand.Read()` with the function `g.rand.Read()` (https://github.com/satori/go.uuid/commit/0ef6afb2f6cdd6cdaeee3885a95099c63f18fc8c)\r\n* Mar 23th, 2018- An issue was reported.\r\n* Oct 16th, 2018 Issue fixed\r\n\r\n## Remediation\r\nA fix was merged into the master branch but not yet published.\n\n## References\n- [GitHub Commit](https://github.com/satori/go.uuid/commit/d91630c8510268e75203009fe7daf2b8e1d60c45)\n- [Github Issue](https://github.com/satori/go.uuid/issues/73)\n",
        "disclosureTime": "2018-03-23T08:57:24Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "github.com/satori/go.uuid@v1.2.0"
        ],
        "functions": [],
        "id": "SNYK-GOLANG-GITHUBCOMSATORIGOUUID-72488",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-338"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "golang",
        "package": "github.com/satori/go.uuid",
        "packageManager": "golang",
        "patches": [],
        "publicationTime": "2018-10-24T08:56:41Z",
        "semver": {
          "hashesRange": [
            ">=0ef6afb2f6cdd6cdaeee3885a95099c63f18fc8c <d91630c8510268e75203009fe7daf2b8e1d60c45"
          ],
          "vulnerable": [
            "=1.2.0"
          ],
          "vulnerableHashes": [
            "c596ec57260fd2ad47b2ae6809d6890a2f99c3b2",
            "36e9d2ebbde5e3f13ab2e25625fd453271d6522e",
            "f6920249aa08fc2a2c2e8274ea9648d0bb1e9364",
            "0ef6afb2f6cdd6cdaeee3885a95099c63f18fc8c"
          ]
        },
        "severity": "high",
        "title": "Insecure Randomness",
        "type": "vuln",
        "upgradePath": [],
        "url": "http://localhost:34612/vuln/SNYK-GOLANG-GITHUBCOMSATORIGOUUID-72488",
        "version": "v1.2.0"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "689ce7f9-7943-4a71-b704-2ba575f01089",
    "name": "atokeneduser"
  },
  "packageManager": "golangdep"
}
```

<h3 id="test-gopkgtoml-gopkglock-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test vendor.json File

<a id="opIdTest vendor.json File"></a>

> Code samples

```bash
curl https://example.com/test/govendor \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "encoding": "base64",
    "files": {
      "target": {
        "contents": "{\\\"comment\\\":\\\"\\\",\\\"ignore\\\":\\\"test\\\",\\\"package\\\":[{\\\"checksumSHA1\\\":\\\"o/3cn04KAiwC7NqNVvmfVTD+hgA=\\\",\\\"path\\\":\\\"github.com/Microsoft/go-winio\\\",\\\"revision\\\":\\\"78439966b38d69bf38227fbf57ac8a6fee70f69a\\\",\\\"revisionTime\\\":\\\"2017-08-04T20:09:54Z\\\"},{\\\"checksumSHA1\\\":\\\"GqIrOttKaO7k6HIaHQLPr3cY7rY=\\\",\\\"path\\\":\\\"github.com/containerd/continuity/pathdriver\\\",\\\"revision\\\":\\\"617902de2ab5e18974efd88a58eeef67ac82d127\\\",\\\"revisionTime\\\":\\\"2017-09-25T16:43:31Z\\\"},{\\\"checksumSHA1\\\":\\\"ndnAFCfsGC3upNQ6jAEwzxcurww=\\\",\\\"path\\\":\\\"github.com/docker/docker/pkg/longpath\\\",\\\"revision\\\":\\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\\",\\\"revisionTime\\\":\\\"2017-09-26T16:09:50Z\\\"},{\\\"checksumSHA1\\\":\\\"IVWozKA/coqhti24Ss2b1nLrTSg=\\\",\\\"path\\\":\\\"github.com/docker/docker/pkg/mount\\\",\\\"revision\\\":\\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\\",\\\"revisionTime\\\":\\\"2017-09-26T16:09:50Z\\\"},{\\\"checksumSHA1\\\":\\\"YdUAOhhc/C0zu+eYrJOJjDwr1/4=\\\",\\\"path\\\":\\\"github.com/docker/docker/pkg/symlink\\\",\\\"revision\\\":\\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\\",\\\"revisionTime\\\":\\\"2017-09-26T16:09:50Z\\\"},{\\\"checksumSHA1\\\":\\\"UEMAKQqAyL9hs6RWxesQuYMQ3+I=\\\",\\\"path\\\":\\\"github.com/docker/docker/pkg/system\\\",\\\"revision\\\":\\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\\",\\\"revisionTime\\\":\\\"2017-09-26T16:09:50Z\\\"},{\\\"checksumSHA1\\\":\\\"UmXGieuTJQOzJPspPJTVKKKMiUA=\\\",\\\"path\\\":\\\"github.com/docker/go-units\\\",\\\"revision\\\":\\\"0dadbb0345b35ec7ef35e228dabb8de89a65bf52\\\",\\\"revisionTime\\\":\\\"2017-01-27T09:51:30Z\\\"},{\\\"checksumSHA1\\\":\\\"RCARG9BoOH6jwbqnuix2Ne3K26w=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"OVGl5SGmF1HZmaG6JRmkyWiycYA=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/cgroups\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"q56oWh80PeIBiE/8nQ/Emz18ZZ8=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/cgroups/fs\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"3NQtWwKOT4BlnSWn0tTsy/N+XhU=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/console\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"WPIuCuWS1RkrGCHBRZuOJku7ZBc=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/devices\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"HLo2E8AWKNCwE2p7ndEkKc4SPnM=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/label\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"KYcr4bHkervvLS5wuH9w1+EhflY=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/mount\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"tvHnvhbm17pLR/fA2WXWYlY9aDs=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/mount/nodes\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"k9+kwIouq8vqmodLrGFp+9I7Jxs=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/netlink\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"ndpCrSi/XKZNCCrkjpQ2cgMIxKA=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/network\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"cfgnX7wKfSHOJ4mbhKyjAWizl+s=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/selinux\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"M7/2WUk1uzgdqc5Ce/k9UcSyv1M=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/system\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"2ZMmNaPI3TM4WyMjCw+h1jErSr0=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/utils\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"rJab1YdNhQooDiBWNnt7TLWPyBU=\\\",\\\"path\\\":\\\"github.com/pkg/errors\\\",\\\"revision\\\":\\\"2b3a18b5f0fb6b4f9190549597d3f962c02bc5eb\\\",\\\"revisionTime\\\":\\\"2017-09-10T13:46:14Z\\\"},{\\\"checksumSHA1\\\":\\\"BYvROBsiyAXK4sq6yhDe8RgT4LM=\\\",\\\"path\\\":\\\"github.com/sirupsen/logrus\\\",\\\"revision\\\":\\\"89742aefa4b206dcf400792f3bd35b542998eb3b\\\",\\\"revisionTime\\\":\\\"2017-08-22T13:27:46Z\\\"},{\\\"checksumSHA1\\\":\\\"nqWNlnMmVpt628zzvyo6Yv2CX5Q=\\\",\\\"path\\\":\\\"golang.org/x/crypto/ssh/terminal\\\",\\\"revision\\\":\\\"847319b7fc94cab682988f93da778204da164588\\\",\\\"revisionTime\\\":\\\"2017-08-18T09:57:21Z\\\"},{\\\"checksumSHA1\\\":\\\"uggjqMBFNJd11oNco2kbkAT641w=\\\",\\\"path\\\":\\\"golang.org/x/sys/unix\\\",\\\"revision\\\":\\\"429f518978ab01db8bb6f44b66785088e7fba58b\\\",\\\"revisionTime\\\":\\\"2017-09-20T21:38:28Z\\\"},{\\\"checksumSHA1\\\":\\\"pBPFzDGt3AVSRffB7ffiUnruFUk=\\\",\\\"path\\\":\\\"golang.org/x/sys/windows\\\",\\\"revision\\\":\\\"429f518978ab01db8bb6f44b66785088e7fba58b\\\",\\\"revisionTime\\\":\\\"2017-09-20T21:38:28Z\\\"},{\\\"checksumSHA1\\\":\\\"o5NrWoSkC+ugoK9D6ragLSrXHw0=\\\",\\\"path\\\":\\\"gopkg.in/square/go-jose.v2\\\",\\\"revision\\\":\\\"296c7f1463ec9b712176dc804dea0173d06dc728\\\",\\\"revisionTime\\\":\\\"2016-11-17T00:42:38Z\\\",\\\"version\\\":\\\"v2.0\\\",\\\"versionExact\\\":\\\"v2.0.1\\\"},{\\\"checksumSHA1\\\":\\\"j94zYNLTvPSnfnqVKJ4LUf++uX4=\\\",\\\"path\\\":\\\"gopkg.in/square/go-jose.v2/cipher\\\",\\\"revision\\\":\\\"296c7f1463ec9b712176dc804dea0173d06dc728\\\",\\\"revisionTime\\\":\\\"2016-11-17T00:42:38Z\\\",\\\"version\\\":\\\"v2.0\\\",\\\"versionExact\\\":\\\"v2.0.1\\\"},{\\\"checksumSHA1\\\":\\\"JFun0lWY9eqd80Js2iWsehu1gc4=\\\",\\\"path\\\":\\\"gopkg.in/square/go-jose.v2/json\\\",\\\"revision\\\":\\\"296c7f1463ec9b712176dc804dea0173d06dc728\\\",\\\"revisionTime\\\":\\\"2016-11-17T00:42:38Z\\\",\\\"version\\\":\\\"v2.0\\\",\\\"versionExact\\\":\\\"v2.0.1\\\"}],\\\"rootPath\\\":\\\"with-vuln\\\"}"
      }
    }
  }'
```

`POST /test/govendor`

You can test your Go vendor packages for issues according to their manifest file using this action. It takes a JSON object containing a "target" `vendor.json`.

> Body parameter

```json
{
  "encoding": "base64",
  "files": {
    "target": {
      "contents": "{\\\"comment\\\":\\\"\\\",\\\"ignore\\\":\\\"test\\\",\\\"package\\\":[{\\\"checksumSHA1\\\":\\\"o/3cn04KAiwC7NqNVvmfVTD+hgA=\\\",\\\"path\\\":\\\"github.com/Microsoft/go-winio\\\",\\\"revision\\\":\\\"78439966b38d69bf38227fbf57ac8a6fee70f69a\\\",\\\"revisionTime\\\":\\\"2017-08-04T20:09:54Z\\\"},{\\\"checksumSHA1\\\":\\\"GqIrOttKaO7k6HIaHQLPr3cY7rY=\\\",\\\"path\\\":\\\"github.com/containerd/continuity/pathdriver\\\",\\\"revision\\\":\\\"617902de2ab5e18974efd88a58eeef67ac82d127\\\",\\\"revisionTime\\\":\\\"2017-09-25T16:43:31Z\\\"},{\\\"checksumSHA1\\\":\\\"ndnAFCfsGC3upNQ6jAEwzxcurww=\\\",\\\"path\\\":\\\"github.com/docker/docker/pkg/longpath\\\",\\\"revision\\\":\\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\\",\\\"revisionTime\\\":\\\"2017-09-26T16:09:50Z\\\"},{\\\"checksumSHA1\\\":\\\"IVWozKA/coqhti24Ss2b1nLrTSg=\\\",\\\"path\\\":\\\"github.com/docker/docker/pkg/mount\\\",\\\"revision\\\":\\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\\",\\\"revisionTime\\\":\\\"2017-09-26T16:09:50Z\\\"},{\\\"checksumSHA1\\\":\\\"YdUAOhhc/C0zu+eYrJOJjDwr1/4=\\\",\\\"path\\\":\\\"github.com/docker/docker/pkg/symlink\\\",\\\"revision\\\":\\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\\",\\\"revisionTime\\\":\\\"2017-09-26T16:09:50Z\\\"},{\\\"checksumSHA1\\\":\\\"UEMAKQqAyL9hs6RWxesQuYMQ3+I=\\\",\\\"path\\\":\\\"github.com/docker/docker/pkg/system\\\",\\\"revision\\\":\\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\\",\\\"revisionTime\\\":\\\"2017-09-26T16:09:50Z\\\"},{\\\"checksumSHA1\\\":\\\"UmXGieuTJQOzJPspPJTVKKKMiUA=\\\",\\\"path\\\":\\\"github.com/docker/go-units\\\",\\\"revision\\\":\\\"0dadbb0345b35ec7ef35e228dabb8de89a65bf52\\\",\\\"revisionTime\\\":\\\"2017-01-27T09:51:30Z\\\"},{\\\"checksumSHA1\\\":\\\"RCARG9BoOH6jwbqnuix2Ne3K26w=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"OVGl5SGmF1HZmaG6JRmkyWiycYA=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/cgroups\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"q56oWh80PeIBiE/8nQ/Emz18ZZ8=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/cgroups/fs\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"3NQtWwKOT4BlnSWn0tTsy/N+XhU=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/console\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"WPIuCuWS1RkrGCHBRZuOJku7ZBc=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/devices\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"HLo2E8AWKNCwE2p7ndEkKc4SPnM=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/label\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"KYcr4bHkervvLS5wuH9w1+EhflY=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/mount\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"tvHnvhbm17pLR/fA2WXWYlY9aDs=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/mount/nodes\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"k9+kwIouq8vqmodLrGFp+9I7Jxs=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/netlink\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"ndpCrSi/XKZNCCrkjpQ2cgMIxKA=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/network\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"cfgnX7wKfSHOJ4mbhKyjAWizl+s=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/selinux\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"M7/2WUk1uzgdqc5Ce/k9UcSyv1M=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/system\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"2ZMmNaPI3TM4WyMjCw+h1jErSr0=\\\",\\\"path\\\":\\\"github.com/docker/libcontainer/utils\\\",\\\"revision\\\":\\\"53eca435e63db58b06cf796d3a9326db5fd42253\\\",\\\"revisionTime\\\":\\\"2014-12-02T23:28:38Z\\\",\\\"version\\\":\\\"v1.4\\\",\\\"versionExact\\\":\\\"v1.4.0\\\"},{\\\"checksumSHA1\\\":\\\"rJab1YdNhQooDiBWNnt7TLWPyBU=\\\",\\\"path\\\":\\\"github.com/pkg/errors\\\",\\\"revision\\\":\\\"2b3a18b5f0fb6b4f9190549597d3f962c02bc5eb\\\",\\\"revisionTime\\\":\\\"2017-09-10T13:46:14Z\\\"},{\\\"checksumSHA1\\\":\\\"BYvROBsiyAXK4sq6yhDe8RgT4LM=\\\",\\\"path\\\":\\\"github.com/sirupsen/logrus\\\",\\\"revision\\\":\\\"89742aefa4b206dcf400792f3bd35b542998eb3b\\\",\\\"revisionTime\\\":\\\"2017-08-22T13:27:46Z\\\"},{\\\"checksumSHA1\\\":\\\"nqWNlnMmVpt628zzvyo6Yv2CX5Q=\\\",\\\"path\\\":\\\"golang.org/x/crypto/ssh/terminal\\\",\\\"revision\\\":\\\"847319b7fc94cab682988f93da778204da164588\\\",\\\"revisionTime\\\":\\\"2017-08-18T09:57:21Z\\\"},{\\\"checksumSHA1\\\":\\\"uggjqMBFNJd11oNco2kbkAT641w=\\\",\\\"path\\\":\\\"golang.org/x/sys/unix\\\",\\\"revision\\\":\\\"429f518978ab01db8bb6f44b66785088e7fba58b\\\",\\\"revisionTime\\\":\\\"2017-09-20T21:38:28Z\\\"},{\\\"checksumSHA1\\\":\\\"pBPFzDGt3AVSRffB7ffiUnruFUk=\\\",\\\"path\\\":\\\"golang.org/x/sys/windows\\\",\\\"revision\\\":\\\"429f518978ab01db8bb6f44b66785088e7fba58b\\\",\\\"revisionTime\\\":\\\"2017-09-20T21:38:28Z\\\"},{\\\"checksumSHA1\\\":\\\"o5NrWoSkC+ugoK9D6ragLSrXHw0=\\\",\\\"path\\\":\\\"gopkg.in/square/go-jose.v2\\\",\\\"revision\\\":\\\"296c7f1463ec9b712176dc804dea0173d06dc728\\\",\\\"revisionTime\\\":\\\"2016-11-17T00:42:38Z\\\",\\\"version\\\":\\\"v2.0\\\",\\\"versionExact\\\":\\\"v2.0.1\\\"},{\\\"checksumSHA1\\\":\\\"j94zYNLTvPSnfnqVKJ4LUf++uX4=\\\",\\\"path\\\":\\\"gopkg.in/square/go-jose.v2/cipher\\\",\\\"revision\\\":\\\"296c7f1463ec9b712176dc804dea0173d06dc728\\\",\\\"revisionTime\\\":\\\"2016-11-17T00:42:38Z\\\",\\\"version\\\":\\\"v2.0\\\",\\\"versionExact\\\":\\\"v2.0.1\\\"},{\\\"checksumSHA1\\\":\\\"JFun0lWY9eqd80Js2iWsehu1gc4=\\\",\\\"path\\\":\\\"gopkg.in/square/go-jose.v2/json\\\",\\\"revision\\\":\\\"296c7f1463ec9b712176dc804dea0173d06dc728\\\",\\\"revisionTime\\\":\\\"2016-11-17T00:42:38Z\\\",\\\"version\\\":\\\"v2.0\\\",\\\"versionExact\\\":\\\"v2.0.1\\\"}],\\\"rootPath\\\":\\\"with-vuln\\\"}"
    }
  }
}
```

<h3 id="test-vendorjson-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» encoding|body|string|false|the encoding for the manifest files sent.|
|» files|body|object|true|The manifest files:|
|» » target|body|object|true|the `vendor.json` file, encoded according the the "encoding" field.|
|» » » contents|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encoding|plain|
|» encoding|base64|

> Example responses

> 200 Response

```json
{
  "dependencyCount": 28,
  "issues": {
    "licenses": [],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:L/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
        "credit": [
          "Tõnis Tiigi"
        ],
        "cvssScore": 8.4,
        "description": "## Overview\nAffected version of [`github.com/docker/libcontainer`](https://github.com/docker/libcontainer) are vulnerable to Symlink Attacks.\nLibcontainer and Docker Engine before 1.6.1 opens the file-descriptor passed to the pid-1 process before performing the chroot, which allows local users to gain privileges via a symlink attack in an image.\n\n## References\n- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-3627)\n- [GitHub Commit](https://github.com/docker/libcontainer/commit/46132cebcf391b56842f5cf9b247d508c59bc625)\n- [Packetstorm Security](http://packetstormsecurity.com/files/131835/Docker-Privilege-Escalation-Information-Disclosure.html)\n- [Seclists](http://seclists.org/fulldisclosure/2015/May/28)\n- [Docker Security Advisory](https://groups.google.com/forum/#%21searchin/docker-user/1.6.1/docker-user/47GZrihtr-4/nwgeOOFLexIJ)\n",
        "disclosureTime": "2015-05-18T15:59:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "github.com/docker/libcontainer@v1.4.0"
        ],
        "functions": [],
        "id": "SNYK-GOLANG-GITHUBCOMDOCKERLIBCONTAINER-50012",
        "identifiers": {
          "CVE": [
            "CVE-2015-3627"
          ],
          "CWE": [
            "CWE-59"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "golang",
        "package": "github.com/docker/libcontainer",
        "packageManager": "golang",
        "patches": [],
        "publicationTime": "2015-08-06T00:00:00Z",
        "semver": {
          "hashesRange": [
            ">=5c246d038fc47b8d57a474e1b212ffe646764ee9 <46132cebcf391b56842f5cf9b247d508c59bc625"
          ],
          "vulnerable": [
            "<1.6.1"
          ],
          "vulnerableHashes": [
            "cab4b9bce1bece1b6c575e1826f3e5b221faebf3",
            "4a72e540feb67091156b907c4700e580a99f5a9d",
            "eb74393a3d2daeafbef4f5f27c0821cbdd67559c",
            "4332ffcfc6765245e8e9151a2907b0e4b76f218f",
            "7eceabd47f41328d6e894418ae167ce8377bda22",
            "ecace12e5a3e309d82c5b3b1548a3251b3bc4e2a",
            "afb167a417ed8379c008b070fb5c0b1bc84bbcba",
            "2b4512809110033e5ec532167efd6fabf2dd596d",
            "c2403c32dbf8a67870ab2ba7524c117fc0652256",
            "4077c254a6ac99930d720a9b95709dbd2614bc61",
            "1b755bf962ec1d29e9e5e66e2cc15704fac088e7",
            "1c9de5b4d21b94499a1e91c9b94ba06831ac5393",
            "e3184f97e040c3121502dc382d41ac58a98b685a",
            "0dee9793d5efd9842a2e8890fa0f8981d20b196e",
            "3e9299d6da5749b263fc3dc93d50b5c854fa199c",
            "152107f44ae9e38b38609fdbc75ac6f9f56c4fed",
            "623fe598e4d5e75e70440f45298eecec414788b3",
            "e30793aed7a30772054abfb1b3f3f703f119b55b",
            "0596e6384a586223c56c5ea7d14467ebf5d17247",
            "42fed751fbab3f340461d06edb896cd10cd49812",
            "e451df796aaa605413a0b84ddd1bf39ec4a751a0",
            "b0eece8d7d945e1e7fc98c2ae3b7dd0a860a7c2a",
            "5c246d038fc47b8d57a474e1b212ffe646764ee9",
            "bfa67ab988f434fd6836c1868eb5d7d1d7864e8a",
            "9bebc660423ca974192599a6a5ea8e016a6fe1fc",
            "e22b58954324b3593737438032412f15ed9602e9",
            "af371eae767ceb51b8804f212bf97584d876feb3",
            "f61899ece3fc1da206a0eb28fada0595ab381887",
            "0d0402712b5a13d1b54a345a63ec67982e2e0089",
            "d1ae7cd67310f482af22de3abeb26d28e65274bf",
            "9f2c67332f48c0050846ac86e01cb5dadbd1d8fe",
            "62bdfc482d8edaa618b544fb2beafdf0c44dce5e",
            "699429e60f23ab0fa3bdd97b6326316be08791ad",
            "35c01f9eb3c228201a3fc5d2301d1fc7a00bde13",
            "a72f710d89eaabf23dad7c084082bccb26e6336f",
            "eb84dd1b73df035e6e64c8513daaa476c72dedfc",
            "5b73860e65598203b26d57aabc96ae0f52c9f9ab",
            "d64cfe5c05448935c75c92f65d604c751bbf5153",
            "62626677876330d60fe3512f59f1fd8f82799ca5",
            "43842efeccbd8077dba8f85fc9e772e0647b82cb",
            "d6cd7ce43faa53d212052dbbcf209029ec2ec951",
            "ebefcddc3c4b99ae312ac575c288856e177ed6ef",
            "83add60f217d32561ff0ff62ebf1d6db6a2a11a3",
            "14af6755f04233fbe55cb354a9351fe05afd43a0",
            "8530167f7f5b5eb329f5377b6b74a904482a10ed",
            "000d36e109f5d04bad5342bb779e02b2b9b252f7",
            "1db687f4f480c06e6cadfdb0971985df4313ddc7",
            "689e8ec9493a4294856dc1568f5ef667e106707c",
            "0eb8a1aac3d903b3c7925208c34f09c02910e7aa",
            "edb31ce0a6fd7956bffc0829000c60bdd56b9f32",
            "53fce307557cbffdbc54647ef63956b2cb0cee86",
            "c22d5c90cf907f4f34d2bc13cad9c82a7fce9077",
            "ef1c1c4289559e818d3ec77ce9c1b6a77d2ac764",
            "2da44f8c7b703f87e9c07164c9cc1cdd31031783",
            "ee102305fb35a23668136b102ed4d0dd5b3d9ce5",
            "3ca0e1ff95c54577c65b5fbb734c267c23782974",
            "f115a5f6c8c2a3cc6340408e6644236a88dcaad0",
            "29ba9b3179d014cc87129af5c51b1263443f387b",
            "c1ca18404fa63209e0a65abf443669155991b4df",
            "5bb81469895d669ddcb4b49e83809a980d57d6b1",
            "6feb7bda04b3130e81cf9606ddb7a156d4a63f7a",
            "7c8550af53b4d428d8f3a7c19c0c4a8ebca8ff21",
            "7766c1e07bd49fdc290f0557268950d35b867823",
            "4903df2ed52a01f08626739ad35937752de82a09",
            "58feafa848d9657dda34e5ccc3a196e359566bda",
            "9e787db1b108941edab18209a7468e6c555002ce",
            "e7953c3609b62a25b0bfedcd9d3885ca1b99d2fb",
            "8c3b6b18689796bc9625258258e8664746b24e85",
            "dd3cb8822352fd4acc0b8b426bd86e47e98f6853",
            "cc524f1b729cb5d7592d0a0b07cb3ff1fe6eda98",
            "c22ac4876f0a218584ae862900f3058470be38a3",
            "c1fb904d1047359e8c4dadafaa0ab065efe9e03e",
            "1f176f3c0dae283d66df5360de8a93ec14b4fbd0",
            "50f0faa795dc62773857a0cc3cfb6d5681ba3562",
            "3fbf1856025f54b6eab6e73b7ff8aa4d1020e1c1",
            "f4a4391e4ef7e886e56816ae59cbe99d8cff91d9",
            "2d9ef3af72e89ad9df164bd0f435371aa4fa0dea",
            "187792e35bb47c89fdfe34409162c814627daacc",
            "b322073f27b0e9e60b2ab07eff7f4e96a24cb3f9",
            "f78bf211f023d28392c6aa0d1934bb1001b3a180",
            "20af7e70e2511b4da0e035bf2fa2d6295f198970",
            "f8eb40433c4a8617a20ad36119973af6f9dd2cd0",
            "d7dea0e925315bab640115053204c16718839b1e",
            "295c70865d10d7c57ba13cbef45c1d276ebfa83e",
            "5a87153824b838be92503b57e76e96519b84b522",
            "fec4c5ab0a75d7e6a46955bda0818bed7f8fecf3",
            "6a76ecb1ce53d9e623826b238033b86f072395a9",
            "2c037b7fd98e1c03e0c67ceccfd8e3300457e07e",
            "4ce8d973204ebace2970c662f6f841ab11a3cc13",
            "870119e763b5976d7331fbd8656ed65207ba95ad",
            "58fc93160e03387a4f41dcf4aed2e376c4a92db4",
            "a3b0209cc61301941810e54bc3678ccff9af71c1",
            "ec005e73b9169d17651618b91836a5d86eb7b24c",
            "2fac2dad91e390acb8937ede6154c265b7011cf9",
            "0195469398f4fc1d42c0c20172b51e03ccf9ff1a",
            "8d0b06257ba659ee91fa3862ed358cecbee37f73",
            "6516e6ce8c7c71e44f95332ef740ea4082cfee39",
            "55d61e22c5e0e4dc00c99847ba20a8ffa1e3a3d4",
            "ca73d7aede7eaa05f4a0acb4bd5cb17a9408cd27",
            "43fabe36d18fa36326d9e5efd2cca8b9376a7fdf",
            "c06f92353f4f74cdb1c66ee0bbae1cdbb46934ce",
            "d6fae7bb26807a386f5dd9a1ec2dc5ac51c24498",
            "bde8bf2ebc5630399c7d0965f58b502100180400",
            "444cc2989aca50986b45a56bfd8a32bd7ea23c1c",
            "f5dfd9a702ad163be35023fe08c9573a614d6121",
            "6c2f20eeeca488b98a613e013712d7c9a3d1e619",
            "cc42996625afaf38d281f2457b08551a3df0d7bc",
            "903680701ad5cf25484d0ac3e78152807dfa90b3",
            "69228248334a576549a9af9df389b3cbfe0c211c",
            "6460fd79667466d2d9ec03f77f319a241c58d40b",
            "7d9244eab20fc96230636a066f88ad5165c34bc7",
            "9387ebb6ba5fca526aedb54c7df684102639caa3",
            "b21b19e0607582cceb8d715b85d27ec113a0b799",
            "c4821b6f3e0a41af6bf3ed1cfa168c13381b9554",
            "397b675315d00a34a09f058dd7e462af6f715da3",
            "c504f85aabbff0d7380ca9da3f6051c56905c7c0",
            "0f8f0601ae5668510ab7bde03041dafd39b18ec6",
            "c3ab8d0cb4b439b7691edf7b63fcecd169834250",
            "22df5551ed7367eb9cbb0cc22aea46351d2495ad",
            "d284fdfaa36d37cbba5749562d6f9303ebab7d2f",
            "a9a503082e492575be352c9c82040c1f4ed468d1",
            "5fedffd8fd387b24b25186622c9566325ab3db1b",
            "dc827aa0ee51829d292524fdf3a7a163feadabe2",
            "f925aa3503eeba9d372c74d1fe2b17c8ecd97960",
            "bc1d229dbe94a0100f4530b47e9c918f27b8cecd",
            "71a57166c1209103dcd4355d21c161bd0f09e481",
            "a9644c209f7764f9155db0c4aeb4f690c0cdb585",
            "bcfdee970e8a32d04b472cd2c5712e10a5e425fe",
            "3c474b9e2aad7c577faefca6c35a8512140c0c65",
            "c34b3d5ce90a6b2828d5b97f553f4b49f64081af",
            "286fffa4eeda7745f3b36dc938dae3e155d1b204",
            "d1f0d5705debbe4d4b1aed7e087d5c49300eb271",
            "08fdb50b03dc810ca8c4386f4f8271a8d51d4445",
            "c44ab12c86689065978950d2ed92bb131b2a932c",
            "5df859ad240af502aebef01ca28da3ef24951e05",
            "ef4efd065cb6c136c7fcbdd65285cff549b745ac",
            "2f1b2ce204490854938fab57142b557caa4ab66d",
            "a36d471a0ef4e119ecfb41257aad246464024a40",
            "83663f82e3d76f57ea57faf80b8fd7eb96933b9b",
            "e8f5b543010eb0db146fd2593284ed19af93eccd",
            "c8512754166539461fd860451ff1a0af7491c197",
            "dc4c502efd85727abfed95af7789caa7f10d020d",
            "4940cee052ece5a8b2ea477699e7bb232de1e1f8",
            "025e6be6c5dc3d535286461088416afa74c42927",
            "b4cda7a6cabf1966daf67f291c2c41ff9a1369f4",
            "074441b495052c456f4b96524bd7a80d00db42e8",
            "5847aacb32742fd734fa2c0584cae65636bba370",
            "f9590b0927744d22ad0e1b737eecd07a48bb4c2f",
            "e05f807a8936b4491632290f13958ca26d0aaace",
            "fd0087d3acdc4c5865de1829d4accee5e3ebb658",
            "38f729e577e07b2c3333ed4b04146e1d64f665a8",
            "8a8eb57746e5372080a5f5e5b6fb9dce178c8220",
            "afa8443118347a1f909941aec2732039d28a9034",
            "d6eb76f8a2184688489fc3a611d80de36ef50877",
            "0f397d4e145fb4053792d42b3424dd2143fb23ad",
            "ba613c5a847ff30d312726eeff444714f8e31cde",
            "445bebc1b16b1f2646a3cae841fe0e1266d79ada",
            "e2ed997ae5b675fc8e78e7d0f9e6918c8b87503c",
            "3b95acdfa1e54de15cae2fc3083147a185a31792",
            "cacc15360ec04abb4c45f918e83bf33203946e32",
            "09809b551ce9f05e96fc3055ae7a23329604415b",
            "2a9511a0266afd48251609a03533094afe22fce2",
            "b6cf7a6c8520fd21e75f8b3becec6dc355d844b0",
            "fc3981ea5c10fb21cae6d6a8e78755be5b169999",
            "dc34fe188385f42198997f6aedc170487c57c7eb",
            "e9f8f8528abef64b8e1b8bc046a008b009ab2417",
            "fe9f7668957641a404b0d2c8850f104df591e7f2",
            "8da9c6878fa29f33dcfd74b1146d457a576d738a",
            "4622c8ac9541790365eda22b6ce65d038f4026fe",
            "3977c892e78d91a0c6d2a34fd2512a6c53c8d924",
            "1bd146ed82f771395f991851f7d896d9ae778f3c",
            "77085907a44039fe1cf9fe24d9c7675aa53d2f9b",
            "107bad0ee5141bb847257a6f57dff2469dd584da",
            "2da159823d0a54756308e73dc0e58a420daffad4",
            "94fb37f5573e1484ba686b195079684cace18eb0",
            "5c6332687d5d7c902cdd954e4e6a107ed6c60848",
            "8b77eba9a6b506c71d1542d2fab1495249a7f7b6",
            "da32455210de558c829f089e8c3a3d1ed8c34a5b",
            "e1c14b3ca245fd06ef538005cd3a250904be5b4c",
            "f0d1a8fc27830b899c5789ba2f80dfa9458792a4",
            "846e522ffc157c12ba244c2c8a2c6adb1ed789f7",
            "2a452c17aa2417cd89b5e25e8549f9e09c94a0dc",
            "3cd416efe1e5b7d1679a20a91a73d757d481633b",
            "e0de51f53c6b2711f39f4f29eb58b63a9ebf2c5c",
            "f7837f4f717a9f09cf34fc325061ee8e38d1100a",
            "13a5703d853fbd311e1fcfc5c95d459021781951",
            "2aebf7d849e47ca927de332b82983ba8fe03d062",
            "56bc1485df0ac0c2fe8ae5e0499e50a0580f2522",
            "8d0f911e1d9265a8f362a7a16b893f7c40aee434",
            "dc82e30089dbba31a1d0cf459321486a9b546fa0",
            "4d863b7bd0d7da6ca1108031fd7d7997bf504496",
            "73ba097bf596249068513559225d6e18c1767b47",
            "da109f3af037352af24f935b1ea57ba8a7f26cad",
            "3c52181f613353cc3b8aefbbf637c15a11cb8242",
            "c96cde4e5db0da7e798e2712c2312f2468720a98",
            "52a8c004ca94cf98f6866536de828c71eb42d1ec",
            "b89112c542edcc9cf5af75694c16af28a3e4f12b",
            "c099a20eb8bd084c17d9348bd0f6bef066ea514f",
            "8067e34ec01588d2952d57e21c8c637fd3d3d114",
            "9d4f6b3d3d4feba35ea13097be415bf099b670ce",
            "334b1963711b743bf014502c5513a82a23eb65cc",
            "190e50b08dbd72fd1d9f21f20581fa27a498481c",
            "4c43b0f49880840966cb5df13abeeb19aa8e16d7",
            "9946e299af9e911a54c83626f245dff20127e442",
            "9825a26db570697e058a4580ec3b71ab3d82fc24",
            "f8daab8a96fe2c73974073696d00deb4ffb40d47",
            "88989e66d3a1ab960deb37f3dd7f824d85e1b9bc",
            "c5eef904604b7e22083927bb99ea0c196d4cb8b9",
            "4661c239dc6394aba960ba73144f2a7e3859537f",
            "9303a8f15f6e55931a08542636922c1bf041ad52",
            "9d91f080ced0bbfcbd3c003e2a20c9cdc81bc4ff",
            "99233fde8c4f58853a474a5831ef0bcf6bf866c5",
            "14a7d2f468404e25577dced6982248e80ddce79a",
            "b6a1b889852cd6b365833ce2b04a0c1092867f75",
            "5d6c507d7cfeff97172deedf3db13b5295bcacef",
            "b89cd0cf5cf5deec2ed6fdc0d8ed4e4f3167aeb4",
            "be02944484da197166020d6b3f08a19d7d7d244c",
            "c37b9125ecaad0c100b6851baacf97adfa2339d6",
            "045e9ae4a0fa8bff397b3c4f2614a3e609e6dd66",
            "9744d72c740dd8cdfbb8cb4c58fb235355e0a0b4",
            "74005ed4e0cdbc87ce40c6b79edfd599ba2355e9",
            "1d7207079fc6ab5b2cbfedda3fc8993bc4441b02",
            "8961fd20e6e213bf967db90166e24d38da065807",
            "dd5576b2b3f5667811f882d1f64a11e13164791a",
            "8600e6f3158bafe927706f0613c1520971d16c32",
            "e9c1b0144ae784df9d26f59bfadd8cb2fc3a1d69",
            "6423c8d2613e5130e9c37620773d2173c76f0acd",
            "b48acf4613cc5347ca10b6d6edd6e1b94a5378c4",
            "6c285c1d4964662ac64f0b98620d154caf423d79",
            "312f997de638b8c18f92a59596a984bdb1a06a4e",
            "11d14f2621370a527d2401c8bba10d2408819131",
            "a6044b701c166fe538fc760f9e2dcea3d737cd2a",
            "91a3f162afc90339b1d8f8d2f22d9c4271eddb84",
            "54301f55934f42598b8f7c88effc4bd588e5f3e7",
            "29f5cb6b391eea625c512df1f2ae7d9efccfbae9",
            "087caf69e8cabd8f1f66f6239079b60172c9fb78",
            "21ed4766b1523373b0463af497ef1c6b3b98c2ca",
            "30b33064169e09e1c5daacb38ed461ed5820d0d2",
            "a8a798a7c9b1da5beea8acfec16409d015ad85a7",
            "a4f2e1e1878c1ce541aec24e6e2a690855cc8003",
            "d06a2dab9f185c8cd2c21c0c97342cbdb7b9f38b",
            "12a63757dbde3b0be25b49bc9e7625059088d319",
            "35ae1c48710ff5a4db20645bc98c719cfb695b9a",
            "85cd86999f70339509692b92cf182ec36697edcf",
            "10d49f830b52ed05d9b41e18c8e1ff4a44a85fb3",
            "3f35b26b8b2dcd856b12b985f9091260d5c5bd71",
            "1a37242fa2af5db30ea72b95f948285efcd63d52",
            "b49bd705dcddd496aedb6e797ce8691d276236af",
            "eb2ae34c80f6b8ffb1bdfc55287d967c6e18cd81",
            "39fbf0a90423a1e6e31c6c042acd9aea00793a18",
            "d658fb8a2566cab11600af4db164c5f1f8656116",
            "f4cf808a3d184c556a51cd53d98a2f4ea05acee4",
            "bdff595cad6a42ba9675f99505bebecdb28209f0",
            "9377591781a5346ed84517688787c305ed6554c4",
            "19099e065da7c810f93e83d68c0776c2336e5e03",
            "a1ac9b101571477a81e1cb3c6999f818bbbf0738",
            "54968f68bc2ba50f59a66fba9f6823215a0bc4f6",
            "9455a8ce3aaccceb4c282ef6c84d7edb36dd0d4c",
            "21c344a479a8fd359a9c875f3056a7e72fe4d5fb",
            "00abcf89d9ad026ddce4af0038db7953b01d8b8b",
            "1a246dd54326124df57cb0e8e051f57abb549c9f",
            "07db66a6ef857edee2c731d1b66f42a4f32d9622",
            "d4867a6583c17001a60590684d91237a580e786a",
            "46573774a27c7a4d20d508f1f07ba72d34616bc3",
            "9184d9473d7b5ecb0dddca4052171534523602be",
            "f6593810da73cf8e1cc982d9020850260fc1ff52",
            "a9442e6660e71fd2058310e6155de3ef5e4f5fdf",
            "cee97cb0ccad90c369b10d6a9512d678a0535cac",
            "aaca2848a1e1eefa71ce2987b19abae2d34cf3aa",
            "3125b53b1aef485ed2239d514b131ef80ad577c1",
            "2990f254f030e62ab15b9399e26368aa3e291d15",
            "b19b8a9677ae9e657e0195ac85a4849a67729cf6",
            "e3b14402ebded2a7ec8f38809bf907ac72692ede",
            "37d229d0262b6fa7dfb96184eff3f7882ddd487e",
            "8002fd226367c0882973c69673bf8379df2fc198",
            "a1c3e0db94579f59cc821132f958187339e68d88",
            "4fdec5a8e10f95a5dbfd84cf382f2755f0342fda",
            "ef73d7e235c4d4ab41402835193ac9ba0c4cc485",
            "ad3d14f1da33d00ee3506f12922fb3faf87b65d7",
            "a1d509759b9195a1c022f2eb9585b74d07a0f084",
            "b7e54b0b41757cd36dd03fb29367b385c5fa3be0",
            "d909440c48b7b64b016478de1e6ee78e2faa9e13",
            "2ca9dc306e8c667eb9f00376898be52d8b980c88",
            "031524c73df6fd40b13e89c44e86d4a62d77075b",
            "6fae0d4fa68a85a1d552c5ae3140dd39f7a05c88",
            "fb27b4238cd6c33bd899e240ead4b5fb8a2a24b1",
            "0890cc54a92627c03119654c94c584a2e3c744ca",
            "339edce03ed7fe59ec4a778abff243fa4cabaa23",
            "2329014b6dbc473326291fa6e101e6d63c4dbd25",
            "872663148e00c4d272fc67e8d369a5012ccbac5a",
            "0e3b1262a168d51512014c4f7df6c37edce0f05d",
            "606d9064b0a6abd82da3731fda9f1558ec1f153c",
            "4bd39999a06fa1f710daae54c6cc8ca7d5784f58",
            "562cd20d05e0427e6b18daa279a3a5f3b08c889d",
            "4bbd44784c7c4eede8e53011a2c4981c16598d1f",
            "dc4bd4cece9a6de7926e85a09f152fe4697a8bc5",
            "770e2583907fa38e2b78601a90799b6ae7ab15eb",
            "f34b3b765fb964dee979ac7646b6d609adbeb2ba",
            "aa10040b570386c1ae311c6245b9e21295b2b83a",
            "fff015f4094ab80ff2eb4978f8cdb3711187c50a",
            "5b2be7d9d8444e0a5b706944c878cd0048ef026a",
            "2cd0ee8cf21eecaa9d39d699692284be44cf6ca2",
            "451043367be65468dd96bbf5868af666b25f1663",
            "4fc29224cf362988a741dc07804225f730a326ec",
            "dd6bc28afb3bafdde93ad7ed9f58b3a0aec2be99",
            "1597c68f7b941fd97881155d7f077852e2914e7b",
            "e59984353acde7207aa1115e261847bf4ddd9a8f",
            "ee1000e153e1b7c8f223bb573bb8169d2033f4af",
            "1d3b2589d734dc94a1719a3af40b87ed8319f329"
          ]
        },
        "severity": "critical",
        "title": "Symlink Attack",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-GOLANG-GITHUBCOMDOCKERLIBCONTAINER-50012",
        "version": "v1.4.0"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "689ce7f9-7943-4a71-b704-2ba575f01089",
    "name": "atokeneduser"
  },
  "packageManager": "govendor"
}
```

<h3 id="test-vendorjson-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test gradle file

<a id="opIdTest gradle file"></a>

> Code samples

```bash
curl https://example.com/test/gradle \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "encoding": "base64",
    "files": {
      "target": {
        "contents": "dependencies { compile '\''axis:axis:1.4'\'' }"
      }
    }
  }'
```

`POST /test/gradle`

You can test your Gradle packages for issues according to their manifest file using this action. It takes a JSON object containing the "target" `build.gradle`.

> Body parameter

```json
{
  "encoding": "base64",
  "files": {
    "target": {
      "contents": "dependencies { compile 'axis:axis:1.4' }"
    }
  }
}
```

<h3 id="test-gradle-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» encoding|body|string|false|the encoding for the manifest files sent.|
|» files|body|object|true|The manifest files:|
|» » target|body|object|true|the manifest file, encoded according the the "encoding" field.|
|» » » contents|body|string|true|The contents of the file, encoded according to the `encoding` field.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encoding|plain|
|» encoding|base64|

> Example responses

> 200 Response

```json
{
  "dependencyCount": 6,
  "issues": {
    "licenses": [],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:N",
        "credit": [
          "David Jorm",
          "Arun Neelicattu"
        ],
        "cvssScore": 5.4,
        "description": "## Overview\n\n[axis:axis](https://search.maven.org/search?q=g:axis) is an implementation of the SOAP (\"Simple Object Access Protocol\") submission to W3C.\n\n\nAffected versions of this package are vulnerable to Man-in-the-Middle (MitM).\nIt does not verify the requesting server's hostname against existing domain names in the SSL Certificate. \r\n\r\n## Details\r\nThe `getCN` function in Apache Axis 1.4 and earlier does not properly verify that the server hostname matches a domain name in the subject's `Common Name (CN)` or `subjectAltName` field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via a certificate with a subject that specifies a common name in a field that is not the CN field.  \r\n\r\n**NOTE:** this issue exists because of an incomplete fix for [CVE-2012-5784](https://snyk.io/vuln/SNYK-JAVA-AXIS-30189).\n\n## Remediation\n\nThere is no fixed version for `axis:axis`.\n\n\n## References\n\n- [Axis Issue](https://issues.apache.org/jira/browse/AXIS-2905)\n\n- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3596)\n\n- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-3596)\n",
        "disclosureTime": "2014-08-18T16:51:53Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "axis:axis@1.4"
        ],
        "functions": [],
        "id": "SNYK-JAVA-AXIS-30071",
        "identifiers": {
          "CVE": [
            "CVE-2014-3596"
          ],
          "CWE": [
            "CWE-297"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "java",
        "package": "axis:axis",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2014-08-18T16:51:53Z",
        "semver": {
          "vulnerable": [
            "[0,]"
          ]
        },
        "severity": "medium",
        "title": "Man-in-the-Middle (MitM)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-JAVA-AXIS-30071",
        "version": "1.4"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:N",
        "credit": [
          "Alberto Fernández"
        ],
        "cvssScore": 5.4,
        "description": "## Overview\n\n[axis:axis](https://search.maven.org/search?q=g:axis) is an implementation of the SOAP (\"Simple Object Access Protocol\") submission to W3C.\n\n\nAffected versions of this package are vulnerable to Man-in-the-Middle (MitM).\nIt does not verify the requesting server's hostname against existing domain names in the SSL Certificate.\r\n\r\n## Details\r\nApache Axis 1.4 and earlier does not properly verify that the server hostname matches a domain name in the subject's `Common Name (CN)` or `subjectAltName` field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an arbitrary valid certificate.\n\n## Remediation\n\nThere is no fixed version for `axis:axis`.\n\n\n## References\n\n- [Jira Issue](https://issues.apache.org/jira/browse/AXIS-2883)\n\n- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5784)\n\n- [Texas University](http://www.cs.utexas.edu/~shmat/shmat_ccs12.pdf)\n",
        "disclosureTime": "2012-11-04T22:55:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "axis:axis@1.4"
        ],
        "functions": [],
        "id": "SNYK-JAVA-AXIS-30189",
        "identifiers": {
          "CVE": [
            "CVE-2012-5784"
          ],
          "CWE": [
            "CWE-20"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "java",
        "package": "axis:axis",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2017-03-13T08:00:21Z",
        "semver": {
          "vulnerable": [
            "[0,]"
          ]
        },
        "severity": "medium",
        "title": "Man-in-the-Middle (MitM)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-JAVA-AXIS-30189",
        "version": "1.4"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "4a18d42f-0706-4ad0-b127-24078731fbed",
    "name": "atokeneduser"
  },
  "packageManager": "gradle"
}
```

<h3 id="test-gradle-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test for issues in a public package by group, name and version

<a id="opIdTest for issues in a public package by group, name and version"></a>

> Code samples

```bash
curl https://example.com/test/gradle/org.apache.flex.blazeds/blazeds/4.7.2 \
  -H 'Accept: application/json'
```

`GET /test/gradle/{group}/{name}/{version}`

You can test `gradle` packages for issues according to their group, name and version. This is done via the maven endpoint (for Java), since the packages are hosted on maven central or a compatible repository. See "Maven" above for details.

<h3 id="test-for-issues-in-a-public-package-by-group-name-and-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group|path|string|true|The package's group ID.|
|name|path|string|true|The package's artifact ID.|
|version|path|string|true|The package version to test.|
|org|query|string|false|The organization to test the package with. See "The Snyk organization for a request" above.|
|repository|query|string|false|The repository hosting this package. The default value is Maven Central. More than one value is supported, in order.|

> Example responses

> 200 Response

````json
{
  "dependencyCount": 1,
  "issues": {
    "licenses": [],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
        "credit": [
          "Markus Wulftange"
        ],
        "cvssScore": 9.8,
        "description": "## Overview\n\n[org.apache.flex.blazeds:blazeds](https://github.com/apache/flex-blazeds) is an application development framework for easily building Flash-based applications for mobile devices, web browsers, and desktops.\n\n\nAffected versions of this package are vulnerable to Arbitrary Code Execution.\nThe AMF deserialization implementation of Flex BlazeDS is vulnerable to Deserialization of Untrusted Data. By sending a specially crafted AMF message, it is possible to make the server establish a connection to an endpoint specified in the message and request an RMI remote object from that endpoint. This can result in the execution of arbitrary code on the server via Java deserialization.\r\n\r\nStarting with BlazeDS version `4.7.3`, Deserialization of XML is disabled completely per default, while the `ClassDeserializationValidator` allows deserialization of whitelisted classes only. BlazeDS internally comes with the following whitelist:\r\n```\r\nflex.messaging.io.amf.ASObject\r\nflex.messaging.io.amf.SerializedObject\r\nflex.messaging.io.ArrayCollection\r\nflex.messaging.io.ArrayList\r\nflex.messaging.messages.AcknowledgeMessage\r\nflex.messaging.messages.AcknowledgeMessageExt\r\nflex.messaging.messages.AsyncMessage\r\nflex.messaging.messages.AsyncMessageExt\r\nflex.messaging.messages.CommandMessage\r\nflex.messaging.messages.CommandMessageExt\r\nflex.messaging.messages.ErrorMessage\r\nflex.messaging.messages.HTTPMessage\r\nflex.messaging.messages.RemotingMessage\r\nflex.messaging.messages.SOAPMessage\r\njava.lang.Boolean\r\njava.lang.Byte\r\njava.lang.Character\r\njava.lang.Double\r\njava.lang.Float\r\njava.lang.Integer\r\njava.lang.Long\r\njava.lang.Object\r\njava.lang.Short\r\njava.lang.String\r\njava.util.ArrayList\r\njava.util.Date\r\njava.util.HashMap\r\norg.w3c.dom.Document\r\n```\n\n## Remediation\n\nUpgrade `org.apache.flex.blazeds:blazeds` to version 4.7.3 or higher.\n\n\n## References\n\n- [CVE-2017-3066](https://nvd.nist.gov/vuln/detail/CVE-2017-5641)\n\n- [Github Commit](https://github.com/apache/flex-blazeds/commit/f861f0993c35e664906609cad275e45a71e2aaf1)\n\n- [Github Release Notes](https://github.com/apache/flex-blazeds/blob/master/RELEASE_NOTES)\n\n- [Securitytracker Issue](http://www.securitytracker.com/id/1038364)\n",
        "disclosureTime": "2017-04-25T21:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "org.apache.flex.blazeds:blazeds@4.7.2"
        ],
        "functions": [],
        "id": "SNYK-JAVA-ORGAPACHEFLEXBLAZEDS-31455",
        "identifiers": {
          "CVE": [
            "CVE-2017-5641"
          ],
          "CWE": [
            "CWE-502"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.apache.flex.blazeds:blazeds",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2017-08-09T14:17:08Z",
        "semver": {
          "vulnerable": [
            "[,4.7.3)"
          ]
        },
        "severity": "critical",
        "title": "Arbitrary Code Execution",
        "type": "vuln",
        "upgradePath": [
          "org.apache.flex.blazeds:blazeds@4.7.3"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGAPACHEFLEXBLAZEDS-31455",
        "version": "4.7.2"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "689ce7f9-7943-4a71-b704-2ba575f01089",
    "name": "atokeneduser"
  },
  "packageManager": "maven"
}
````

<h3 id="test-for-issues-in-a-public-package-by-group-name-and-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test maven file

<a id="opIdTest maven file"></a>

> Code samples

```bash
curl https://example.com/test/maven \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "encoding": "base64",
    "files": {
      "additional": [
        {
          "contents": "<project xmlns=\"http://maven.apache.org/POM/4.0.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"  xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd\"> <modelVersion>4.0.0</modelVersion> <artifactId>io.snyk.example</artifactId> <groupId>parent</groupId> <version>1.0-SNAPSHOT</version> <dependencies> <dependency> <groupId>org.apache.zookeeper</groupId> <artifactId>zookeeper</artifactId> <version>3.5</version> </dependency> <dependency> <groupId>org.aspectj</groupId> <artifactId>aspectjweaver</artifactId> <version>1.8.2</version> </dependency> </dependencies> </project>\\n"
        }
      ],
      "target": {
        "contents": "<project xmlns=\"http://maven.apache.org/POM/4.0.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"  xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd\"> <modelVersion>4.0.0</modelVersion> <parent> <artifactId>io.snyk.example</artifactId> <groupId>parent</groupId> <version>1.0-SNAPSHOT</version> </parent> <artifactId>my-project</artifactId> <dependencies> <dependency> <groupId>axis</groupId> <artifactId>axis</artifactId> <version>1.4</version> </dependency> </dependencies> </project>\\n"
      }
    }
  }'
```

`POST /test/maven`

You can test your Maven packages for issues according to their manifest file using this action. It takes a JSON object containing a the "target" `pom.xml`.

Additional manifest files, if they are needed, like parent `pom.xml` files, child poms, etc., according the the definitions in the target `pom.xml` file, should be supplied in the `additional` body parameter.

> Body parameter

```json
{
  "encoding": "base64",
  "files": {
    "additional": [
      {
        "contents": "<project xmlns=\"http://maven.apache.org/POM/4.0.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"  xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd\"> <modelVersion>4.0.0</modelVersion> <artifactId>io.snyk.example</artifactId> <groupId>parent</groupId> <version>1.0-SNAPSHOT</version> <dependencies> <dependency> <groupId>org.apache.zookeeper</groupId> <artifactId>zookeeper</artifactId> <version>3.5</version> </dependency> <dependency> <groupId>org.aspectj</groupId> <artifactId>aspectjweaver</artifactId> <version>1.8.2</version> </dependency> </dependencies> </project>\\n"
      }
    ],
    "target": {
      "contents": "<project xmlns=\"http://maven.apache.org/POM/4.0.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"  xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd\"> <modelVersion>4.0.0</modelVersion> <parent> <artifactId>io.snyk.example</artifactId> <groupId>parent</groupId> <version>1.0-SNAPSHOT</version> </parent> <artifactId>my-project</artifactId> <dependencies> <dependency> <groupId>axis</groupId> <artifactId>axis</artifactId> <version>1.4</version> </dependency> </dependencies> </project>\\n"
    }
  }
}
```

<h3 id="test-maven-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org|query|string|false|The organization to test the package with. See "The Snyk organization for a request" above.|
|repository|query|string|false|The Maven repository hosting this package. The default value is Maven Central. More than one value is supported, in order.|
|body|body|object|false|none|
|» encoding|body|string|false|the encoding for the manifest files sent.|
|» files|body|object|true|The manifest files:|
|» » additional|body|[object]|false|additional manifest files (if needed), encoded according the the "encoding" field.|
|» » target|body|object|true|the main/root manifest file, encoded according the the "encoding" field.|
|» » » contents|body|string|true|The contents of the file, encoded according to the `encoding` field.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encoding|plain|
|» encoding|base64|

> Example responses

> 200 Response

```json
{
  "dependencyCount": 8,
  "issues": {
    "licenses": [],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:N",
        "credit": [
          "David Jorm",
          "Arun Neelicattu"
        ],
        "cvssScore": 5.4,
        "description": "## Overview\n\n[axis:axis](https://search.maven.org/search?q=g:axis) is an implementation of the SOAP (\"Simple Object Access Protocol\") submission to W3C.\n\n\nAffected versions of this package are vulnerable to Man-in-the-Middle (MitM).\nIt does not verify the requesting server's hostname against existing domain names in the SSL Certificate. \r\n\r\n## Details\r\nThe `getCN` function in Apache Axis 1.4 and earlier does not properly verify that the server hostname matches a domain name in the subject's `Common Name (CN)` or `subjectAltName` field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via a certificate with a subject that specifies a common name in a field that is not the CN field.  \r\n\r\n**NOTE:** this issue exists because of an incomplete fix for [CVE-2012-5784](https://snyk.io/vuln/SNYK-JAVA-AXIS-30189).\n\n## Remediation\n\nThere is no fixed version for `axis:axis`.\n\n\n## References\n\n- [Axis Issue](https://issues.apache.org/jira/browse/AXIS-2905)\n\n- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3596)\n\n- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-3596)\n",
        "disclosureTime": "2014-08-18T16:51:53Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "axis:axis@1.4"
        ],
        "functions": [],
        "id": "SNYK-JAVA-AXIS-30071",
        "identifiers": {
          "CVE": [
            "CVE-2014-3596"
          ],
          "CWE": [
            "CWE-297"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "java",
        "package": "axis:axis",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2014-08-18T16:51:53Z",
        "semver": {
          "vulnerable": [
            "[0,]"
          ]
        },
        "severity": "medium",
        "title": "Man-in-the-Middle (MitM)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-JAVA-AXIS-30071",
        "version": "1.4"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:N",
        "credit": [
          "Alberto Fernández"
        ],
        "cvssScore": 5.4,
        "description": "## Overview\n\n[axis:axis](https://search.maven.org/search?q=g:axis) is an implementation of the SOAP (\"Simple Object Access Protocol\") submission to W3C.\n\n\nAffected versions of this package are vulnerable to Man-in-the-Middle (MitM).\nIt does not verify the requesting server's hostname against existing domain names in the SSL Certificate.\r\n\r\n## Details\r\nApache Axis 1.4 and earlier does not properly verify that the server hostname matches a domain name in the subject's `Common Name (CN)` or `subjectAltName` field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an arbitrary valid certificate.\n\n## Remediation\n\nThere is no fixed version for `axis:axis`.\n\n\n## References\n\n- [Jira Issue](https://issues.apache.org/jira/browse/AXIS-2883)\n\n- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5784)\n\n- [Texas University](http://www.cs.utexas.edu/~shmat/shmat_ccs12.pdf)\n",
        "disclosureTime": "2012-11-04T22:55:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "axis:axis@1.4"
        ],
        "functions": [],
        "id": "SNYK-JAVA-AXIS-30189",
        "identifiers": {
          "CVE": [
            "CVE-2012-5784"
          ],
          "CWE": [
            "CWE-20"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "java",
        "package": "axis:axis",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2017-03-13T08:00:21Z",
        "semver": {
          "vulnerable": [
            "[0,]"
          ]
        },
        "severity": "medium",
        "title": "Man-in-the-Middle (MitM)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-JAVA-AXIS-30189",
        "version": "1.4"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N/E:P/RL:O",
        "credit": [
          "Harrison Neal"
        ],
        "cvssScore": 4.3,
        "description": "## Overview\n\n[org.apache.zookeeper:zookeeper](http://zookeeper.apache.org/) is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services.\n\n\nAffected versions of this package are vulnerable to Access Control Bypass.\nZooKeeper’s `getACL()` method doesn’t check any permission when retrieving the ACLs of the requested node and returns all information contained in the ACL `Id` field as plain text string. \r\nIf Digest Authentication is in use, the unsalted hash value will be disclosed by the `getACL()` method for unauthenticated or unprivileged users.\n\n## Remediation\n\nUpgrade `org.apache.zookeeper:zookeeper` to version 3.4.14, 3.5.5 or higher.\n\n\n## References\n\n- [GitHub Commit](https://github.com/apache/zookeeper/commit/af741cb319d4760cfab1cd3b560635adacd8deca)\n\n- [Jira Issue](https://issues.apache.org/jira/browse/ZOOKEEPER-1392)\n\n- [ZooKeeper Security](https://zookeeper.apache.org/security.html#CVE-2019-0201)\n",
        "disclosureTime": "2019-05-23T15:00:13Z",
        "exploitMaturity": "proof-of-concept",
        "from": [
          "org.apache.zookeeper:zookeeper@3.5"
        ],
        "functions": [],
        "id": "SNYK-JAVA-ORGAPACHEZOOKEEPER-174781",
        "identifiers": {
          "CVE": [
            "CVE-2019-0201"
          ],
          "CWE": [
            "CWE-288"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.apache.zookeeper:zookeeper",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2019-05-23T15:00:13Z",
        "semver": {
          "vulnerable": [
            "[,3.4.14)",
            "[3.5.0-alpha, 3.5.5)"
          ]
        },
        "severity": "medium",
        "title": "Access Control Bypass",
        "type": "vuln",
        "upgradePath": [
          "org.apache.zookeeper:zookeeper@3.5.5"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGAPACHEZOOKEEPER-174781",
        "version": "3.5"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:L/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 4,
        "description": "## Overview\n\n[org.apache.zookeeper:zookeeper](http://zookeeper.apache.org/) is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services.\n\n\nAffected versions of this package are vulnerable to Insufficiently Protected Credentials.\nThe logs cleartext admin passwords, which allows local users to obtain sensitive information by reading the log.\n\n## Remediation\n\nUpgrade `org.apache.zookeeper:zookeeper` to version 3.4.7, 3.5.1-alpha or higher.\n\n\n## References\n\n- [Jira Issue](https://issues.apache.org/jira/browse/ZOOKEEPER-1917)\n\n- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1067265)\n",
        "disclosureTime": "2014-04-17T14:55:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "org.apache.zookeeper:zookeeper@3.5"
        ],
        "functions": [],
        "id": "SNYK-JAVA-ORGAPACHEZOOKEEPER-31035",
        "identifiers": {
          "CVE": [
            "CVE-2014-0085"
          ],
          "CWE": [
            "CWE-522"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.apache.zookeeper:zookeeper",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2016-10-05T08:19:32Z",
        "semver": {
          "vulnerable": [
            "[3.3.0,3.4.7)",
            "[3.5.0-alpha,3.5.1-alpha)"
          ]
        },
        "severity": "medium",
        "title": "Insufficiently Protected Credentials",
        "type": "vuln",
        "upgradePath": [
          "org.apache.zookeeper:zookeeper@3.5.5"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGAPACHEZOOKEEPER-31035",
        "version": "3.5"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\n\n[org.apache.zookeeper:zookeeper](http://zookeeper.apache.org/) is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services.\n\n\nAffected versions of this package are vulnerable to Denial of Service (DoS).\nFour letter zookeeper commands (such as `wchp`/`wchc` ) are not properly handled, which leads to the server unable to serve legitimate client requests.\n\n## Details\nDenial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its intended and legitimate users.\r\n\r\nUnlike other vulnerabilities, DoS attacks usually do not aim at breaching security. Rather, they are focused on making websites and services unavailable to genuine users resulting in downtime.\r\n\r\nOne popular Denial of Service vulnerability is DDoS (a Distributed Denial of Service), an attack that attempts to clog network pipes to the system by generating a large volume of traffic from many machines.\r\n\r\nWhen it comes to open source libraries, DoS vulnerabilities allow attackers to trigger such a crash or crippling of the service by using a flaw either in the application code or from the use of open source libraries.\r\n\r\nTwo common types of DoS vulnerabilities:\r\n\r\n* High CPU/Memory Consumption- An attacker sending crafted requests that could cause the system to take a disproportionate amount of time to process. For example, [commons-fileupload:commons-fileupload](SNYK-JAVA-COMMONSFILEUPLOAD-30082).\r\n\r\n* Crash - An attacker sending crafted requests that could cause the system to crash. For Example,  [npm `ws` package](npm:ws:20171108)\n\n## Remediation\n\nUpgrade `org.apache.zookeeper:zookeeper` to version 3.4.10, 3.5.3-beta or higher.\n\n\n## References\n\n- [GitHub Commit](https://github.com/apache/zookeeper/pull/179/commits/b4c421d5f42d8af376b1d422e73cc210133d367f)\n\n- [Jira Issue](https://issues.apache.org/jira/browse/ZOOKEEPER-2693)\n\n- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5637)\n",
        "disclosureTime": "2017-02-15T06:56:48Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "org.apache.zookeeper:zookeeper@3.5"
        ],
        "functions": [
          {
            "functionId": {
              "className": "org.apache.zookeeper.server.NIOServerCnxn",
              "functionName": "checkFourLetterWord"
            },
            "version": [
              "[,3.3.7)"
            ]
          },
          {
            "functionId": {
              "className": "org.apache.zookeeper.server.NettyServerCnxn",
              "functionName": "checkFourLetterWord"
            },
            "version": [
              "[3.3.7, 3.4.10)",
              "[3.5,3.5.3)"
            ]
          }
        ],
        "id": "SNYK-JAVA-ORGAPACHEZOOKEEPER-31428",
        "identifiers": {
          "CVE": [
            "CVE-2017-5637"
          ],
          "CWE": [
            "CWE-400"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.apache.zookeeper:zookeeper",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2017-05-21T07:52:38Z",
        "semver": {
          "vulnerable": [
            "[3.4.6, 3.4.10)",
            "[3.5.0-alpha, 3.5.3-beta)"
          ]
        },
        "severity": "high",
        "title": "Denial of Service (DoS)",
        "type": "vuln",
        "upgradePath": [
          "org.apache.zookeeper:zookeeper@3.5.5"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGAPACHEZOOKEEPER-31428",
        "version": "3.5"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N",
        "credit": [
          "Foldi Tamas",
          "Eugene Koontz"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\n\n[org.apache.zookeeper:zookeeper](http://zookeeper.apache.org/) is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services.\n\n\nAffected versions of this package are vulnerable to Authentication Bypass.\nNo authentication/authorization is enforced when a server attempts to join a quorum, as a result an arbitrary end point could join the cluster and begin propagating counterfeit changes to the leader.\n\n## Remediation\n\nUpgrade `org.apache.zookeeper:zookeeper` to version 3.4.10, 3.5.4-beta or higher.\n\n\n## References\n\n- [Apache Mail Archives](https://lists.apache.org/thread.html/c75147028c1c79bdebd4f8fa5db2b77da85de2b05ecc0d54d708b393@%3Cdev.zookeeper.apache.org%3E)\n",
        "disclosureTime": "2018-05-21T18:49:04Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "org.apache.zookeeper:zookeeper@3.5"
        ],
        "functions": [],
        "id": "SNYK-JAVA-ORGAPACHEZOOKEEPER-32301",
        "identifiers": {
          "CVE": [
            "CVE-2018-8012"
          ],
          "CWE": [
            "CWE-592"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.apache.zookeeper:zookeeper",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2018-05-22T13:32:24Z",
        "semver": {
          "vulnerable": [
            "[,3.4.10)",
            "[3.5.0-alpha, 3.5.4-beta)"
          ]
        },
        "severity": "high",
        "title": "Authentication Bypass",
        "type": "vuln",
        "upgradePath": [
          "org.apache.zookeeper:zookeeper@3.5.5"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGAPACHEZOOKEEPER-32301",
        "version": "3.5"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "b94596b8-9d3e-45ae-ac1d-2bf7fa83d848",
    "name": "mySnykOrganization"
  },
  "packageManager": "maven"
}
```

<h3 id="test-maven-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test for issues in a public package by group id, artifact id and version

<a id="opIdTest for issues in a public package by group id, artifact id and version"></a>

> Code samples

```bash
curl https://example.com/test/maven/org.apache.flex.blazeds/blazeds/4.7.2 \
  -H 'Accept: application/json'
```

`GET /test/maven/{groupId}/{artifactId}/{version}`

You can test `maven` packages for issues according to their [coordinates](https://maven.apache.org/pom.html#Maven_Coordinates): group ID, artifact ID and version. The repository hosting the package may also be customized (see the `repository` query parameter).

<h3 id="test-for-issues-in-a-public-package-by-group-id-artifact-id-and-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The package's group ID.|
|artifactId|path|string|true|The package's artifact ID.|
|version|path|string|true|The package version to test.|
|org|query|string|false|The organization to test the package with. See "The Snyk organization for a request" above.|
|repository|query|string|false|The Maven repository hosting this package. The default value is Maven Central. More than one value is supported, in order.|

> Example responses

> 200 Response

````json
{
  "dependencyCount": 1,
  "issues": {
    "licenses": [],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
        "credit": [
          "Markus Wulftange"
        ],
        "cvssScore": 9.8,
        "description": "## Overview\n\n[org.apache.flex.blazeds:blazeds](https://github.com/apache/flex-blazeds) is an application development framework for easily building Flash-based applications for mobile devices, web browsers, and desktops.\n\n\nAffected versions of this package are vulnerable to Arbitrary Code Execution.\nThe AMF deserialization implementation of Flex BlazeDS is vulnerable to Deserialization of Untrusted Data. By sending a specially crafted AMF message, it is possible to make the server establish a connection to an endpoint specified in the message and request an RMI remote object from that endpoint. This can result in the execution of arbitrary code on the server via Java deserialization.\r\n\r\nStarting with BlazeDS version `4.7.3`, Deserialization of XML is disabled completely per default, while the `ClassDeserializationValidator` allows deserialization of whitelisted classes only. BlazeDS internally comes with the following whitelist:\r\n```\r\nflex.messaging.io.amf.ASObject\r\nflex.messaging.io.amf.SerializedObject\r\nflex.messaging.io.ArrayCollection\r\nflex.messaging.io.ArrayList\r\nflex.messaging.messages.AcknowledgeMessage\r\nflex.messaging.messages.AcknowledgeMessageExt\r\nflex.messaging.messages.AsyncMessage\r\nflex.messaging.messages.AsyncMessageExt\r\nflex.messaging.messages.CommandMessage\r\nflex.messaging.messages.CommandMessageExt\r\nflex.messaging.messages.ErrorMessage\r\nflex.messaging.messages.HTTPMessage\r\nflex.messaging.messages.RemotingMessage\r\nflex.messaging.messages.SOAPMessage\r\njava.lang.Boolean\r\njava.lang.Byte\r\njava.lang.Character\r\njava.lang.Double\r\njava.lang.Float\r\njava.lang.Integer\r\njava.lang.Long\r\njava.lang.Object\r\njava.lang.Short\r\njava.lang.String\r\njava.util.ArrayList\r\njava.util.Date\r\njava.util.HashMap\r\norg.w3c.dom.Document\r\n```\n\n## Remediation\n\nUpgrade `org.apache.flex.blazeds:blazeds` to version 4.7.3 or higher.\n\n\n## References\n\n- [CVE-2017-3066](https://nvd.nist.gov/vuln/detail/CVE-2017-5641)\n\n- [Github Commit](https://github.com/apache/flex-blazeds/commit/f861f0993c35e664906609cad275e45a71e2aaf1)\n\n- [Github Release Notes](https://github.com/apache/flex-blazeds/blob/master/RELEASE_NOTES)\n\n- [Securitytracker Issue](http://www.securitytracker.com/id/1038364)\n",
        "disclosureTime": "2017-04-25T21:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "org.apache.flex.blazeds:blazeds@4.7.2"
        ],
        "functions": [],
        "id": "SNYK-JAVA-ORGAPACHEFLEXBLAZEDS-31455",
        "identifiers": {
          "CVE": [
            "CVE-2017-5641"
          ],
          "CWE": [
            "CWE-502"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.apache.flex.blazeds:blazeds",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2017-08-09T14:17:08Z",
        "semver": {
          "vulnerable": [
            "[,4.7.3)"
          ]
        },
        "severity": "critical",
        "title": "Arbitrary Code Execution",
        "type": "vuln",
        "upgradePath": [
          "org.apache.flex.blazeds:blazeds@4.7.3"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGAPACHEFLEXBLAZEDS-31455",
        "version": "4.7.2"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "689ce7f9-7943-4a71-b704-2ba575f01089",
    "name": "atokeneduser"
  },
  "packageManager": "maven"
}
````

<h3 id="test-for-issues-in-a-public-package-by-group-id-artifact-id-and-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test package.json &amp; package-lock.json File

<a id="opIdTest package.json &amp; package-lock.json File"></a>

> Code samples

```bash
curl https://example.com/test/npm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "encoding": "base64",
    "files": {
      "additional": [
        {
          "contents": "eyAibmFtZSI6ICJzaGFsbG93LWdvb2YiLCAidmVyc2lvbiI6ICIwLjAuMSIsICJsb2NrZmlsZVZlcnNpb24iOiAxLCAicmVxdWlyZXMiOiB0cnVlLCAiZGVwZW5kZW5jaWVzIjogeyAibm9kZS11dWlkIjogeyAidmVyc2lvbiI6ICIxLjQuMCIsICJyZXNvbHZlZCI6ICJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9ub2RlLXV1aWQvLS9ub2RlLXV1aWQtMS40LjAudGd6IiwgImludGVncml0eSI6ICJzaGExLUIvbXlNM1Z5LzJKMXgzWGgxSVVUODZSZGVtVT0iIH0sICJxcyI6IHsgInZlcnNpb24iOiAiMC4wLjYiLCAicmVzb2x2ZWQiOiAiaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvcXMvLS9xcy0wLjAuNi50Z3oiLCAiaW50ZWdyaXR5IjogInNoYTEtU0JaWnQrVy9hbDZvbUFFTjVhN1RYclJwNFNRPSIgfSB9IH0K"
        }
      ],
      "target": {
        "contents": "eyAibmFtZSI6ICJzaGFsbG93LWdvb2YiLCAidmVyc2lvbiI6ICIwLjAuMSIsICJkZXNjcmlwdGlvbiI6ICJBIHZ1bG5lcmFibGUgZGVtbyBhcHBsaWNhdGlvbiIsICJob21lcGFnZSI6ICJodHRwczovL3NueWsuaW8vIiwgInJlcG9zaXRvcnkiOiB7ICJ0eXBlIjogImdpdCIsICJ1cmwiOiAiaHR0cHM6Ly9naXRodWIuY29tL1NueWsvc2hhbGxvdy1nb29mIiB9LCAiZGVwZW5kZW5jaWVzIjogeyAibm9kZS11dWlkIjogIjEuNC4wIiwgInFzIjogIjAuMC42IiB9IH0K"
      }
    }
  }'
```

`POST /test/npm`

You can test your npm packages for issues according to their manifest file & optional lockfile using this action. It takes a JSON object containing a "target" `package.json` and optionally a `package-lock.json`.

> Body parameter

```json
{
  "encoding": "base64",
  "files": {
    "additional": [
      {
        "contents": "eyAibmFtZSI6ICJzaGFsbG93LWdvb2YiLCAidmVyc2lvbiI6ICIwLjAuMSIsICJsb2NrZmlsZVZlcnNpb24iOiAxLCAicmVxdWlyZXMiOiB0cnVlLCAiZGVwZW5kZW5jaWVzIjogeyAibm9kZS11dWlkIjogeyAidmVyc2lvbiI6ICIxLjQuMCIsICJyZXNvbHZlZCI6ICJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9ub2RlLXV1aWQvLS9ub2RlLXV1aWQtMS40LjAudGd6IiwgImludGVncml0eSI6ICJzaGExLUIvbXlNM1Z5LzJKMXgzWGgxSVVUODZSZGVtVT0iIH0sICJxcyI6IHsgInZlcnNpb24iOiAiMC4wLjYiLCAicmVzb2x2ZWQiOiAiaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvcXMvLS9xcy0wLjAuNi50Z3oiLCAiaW50ZWdyaXR5IjogInNoYTEtU0JaWnQrVy9hbDZvbUFFTjVhN1RYclJwNFNRPSIgfSB9IH0K"
      }
    ],
    "target": {
      "contents": "eyAibmFtZSI6ICJzaGFsbG93LWdvb2YiLCAidmVyc2lvbiI6ICIwLjAuMSIsICJkZXNjcmlwdGlvbiI6ICJBIHZ1bG5lcmFibGUgZGVtbyBhcHBsaWNhdGlvbiIsICJob21lcGFnZSI6ICJodHRwczovL3NueWsuaW8vIiwgInJlcG9zaXRvcnkiOiB7ICJ0eXBlIjogImdpdCIsICJ1cmwiOiAiaHR0cHM6Ly9naXRodWIuY29tL1NueWsvc2hhbGxvdy1nb29mIiB9LCAiZGVwZW5kZW5jaWVzIjogeyAibm9kZS11dWlkIjogIjEuNC4wIiwgInFzIjogIjAuMC42IiB9IH0K"
    }
  }
}
```

<h3 id="test-packagejson-package-lockjson-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» encoding|body|string|false|the encoding for the manifest files sent.|
|» files|body|object|true|The manifest files:|
|» » additional|body|[object]|false|a lockfile can be sent (if needed), encoded according the the "encoding" field.|
|» » target|body|object|true|the `package.json` file, encoded according the the "encoding" field.|
|» » » contents|body|string|true|the contents of `package.json` as a string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encoding|plain|
|» encoding|base64|

> Example responses

> 200 Response

````json
{
  "dependencyCount": 2,
  "issues": {
    "licenses": [],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:A/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:N",
        "credit": [
          "Fedot Praslov"
        ],
        "cvssScore": 4.2,
        "description": "## Overview\n[`node-uuid`](https://github.com/kelektiv/node-uuid) is a Simple, fast generation of RFC4122 UUIDS.\n\nAffected versions of this package are vulnerable to Insecure Randomness. It uses the cryptographically insecure `Math.random` which can produce predictable values and should not be used in security-sensitive context.\n\n## Remediation\nUpgrade `node-uuid` to version 1.4.4 or greater.\n\n## References\n- [GitHub Issue](https://github.com/broofa/node-uuid/issues/108)\n- [GitHub Issue 2](https://github.com/broofa/node-uuid/issues/122)\n",
        "disclosureTime": "2016-03-28T21:29:30Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "node-uuid@1.4.0"
        ],
        "functions": [],
        "id": "npm:node-uuid:20160328",
        "identifiers": {
          "ALTERNATIVE": [
            "SNYK-JS-NODEUUID-10089"
          ],
          "CVE": [],
          "CWE": [
            "CWE-330"
          ],
          "NSP": [
            93
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "js",
        "package": "node-uuid",
        "packageManager": "npm",
        "patches": [
          {
            "comments": [],
            "id": "patch:npm:node-uuid:20160328:0",
            "modificationTime": "2019-12-03T11:40:45.815314Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/node-uuid/20160328/node-uuid_20160328_0_0_616ad3800f35cf58089215f420db9654801a5a02.patch"
            ],
            "version": "<=1.4.3 >=1.4.2"
          }
        ],
        "publicationTime": "2016-03-28T22:00:02.566000Z",
        "semver": {
          "vulnerable": [
            "<1.4.4"
          ]
        },
        "severity": "medium",
        "title": "Insecure Randomness",
        "type": "vuln",
        "upgradePath": [
          "node-uuid@1.4.6"
        ],
        "url": "https://snyk.io/vuln/npm:node-uuid:20160328",
        "version": "1.4.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
        "credit": [
          "Dustin Shiver"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\n\n[qs](https://www.npmjs.com/package/qs) is a querystring parser that supports nesting and arrays, with a depth limit.\n\n\nAffected versions of this package are vulnerable to Denial of Service (Memory Exhaustion).\nDuring parsing, the `qs` module may create a sparse area (an array where no elements are filled), and grow that array to the necessary size based on the indices used on it. An attacker can specify a high index value in a query string, thus making the server allocate a respectively big array. Truly large values can cause the server to run out of memory and cause it to crash - thus enabling a Denial-of-Service attack.\n\n## Remediation\n\nUpgrade `qs` to version 1.0.0 or higher.\n\n\n## Details\nDenial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its intended and legitimate users.\r\n\r\nUnlike other vulnerabilities, DoS attacks usually do not aim at breaching security. Rather, they are focused on making websites and services unavailable to genuine users resulting in downtime.\r\n\r\nOne popular Denial of Service vulnerability is DDoS (a Distributed Denial of Service), an attack that attempts to clog network pipes to the system by generating a large volume of traffic from many machines.\r\n\r\nWhen it comes to open source libraries, DoS vulnerabilities allow attackers to trigger such a crash or crippling of the service by using a flaw either in the application code or from the use of open source libraries.\r\n\r\nTwo common types of DoS vulnerabilities:\r\n\r\n* High CPU/Memory Consumption- An attacker sending crafted requests that could cause the system to take a disproportionate amount of time to process. For example, [commons-fileupload:commons-fileupload](SNYK-JAVA-COMMONSFILEUPLOAD-30082).\r\n\r\n* Crash - An attacker sending crafted requests that could cause the system to crash. For Example,  [npm `ws` package](npm:ws:20171108)\n\n## References\n\n- [GitHub Commit](https://github.com/tj/node-querystring/pull/114/commits/43a604b7847e56bba49d0ce3e222fe89569354d8)\n\n- [GitHub Issue](https://github.com/visionmedia/node-querystring/issues/104)\n\n- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2014-7191)\n",
        "disclosureTime": "2014-08-06T06:10:22Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "qs@0.0.6"
        ],
        "functions": [
          {
            "functionId": {
              "filePath": "index.js",
              "functionName": "compact"
            },
            "version": [
              "<1.0.0"
            ]
          }
        ],
        "id": "npm:qs:20140806",
        "identifiers": {
          "ALTERNATIVE": [
            "SNYK-JS-QS-10019"
          ],
          "CVE": [
            "CVE-2014-7191"
          ],
          "CWE": [
            "CWE-400"
          ],
          "NSP": [
            29
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "js",
        "package": "qs",
        "packageManager": "npm",
        "patches": [
          {
            "comments": [],
            "id": "patch:npm:qs:20140806:0",
            "modificationTime": "2019-12-03T11:40:45.741062Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20140806/qs_20140806_0_0_43a604b7847e56bba49d0ce3e222fe89569354d8_snyk.patch"
            ],
            "version": "<1.0.0 >=0.6.5"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20140806:1",
            "modificationTime": "2019-12-03T11:40:45.728930Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20140806/qs_20140806_0_1_snyk_npm.patch"
            ],
            "version": "=0.5.6"
          }
        ],
        "publicationTime": "2014-08-06T06:10:22Z",
        "semver": {
          "vulnerable": [
            "<1.0.0"
          ]
        },
        "severity": "high",
        "title": "Denial of Service (Memory Exhaustion)",
        "type": "vuln",
        "upgradePath": [
          "qs@1.0.0"
        ],
        "url": "https://snyk.io/vuln/npm:qs:20140806",
        "version": "0.0.6"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
        "credit": [
          "Tom Steele"
        ],
        "cvssScore": 6.5,
        "description": "## Overview\n\n[qs](https://www.npmjs.com/package/qs) is a querystring parser that supports nesting and arrays, with a depth limit.\n\n\nAffected versions of this package are vulnerable to Denial of Service (Event Loop Blocking).\nWhen parsing a string representing a deeply nested object, qs will block the event loop for long periods of time. Such a delay may hold up the server's resources, keeping it from processing other requests in the meantime, thus enabling a Denial-of-Service attack.\n\n## Details\nDenial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its intended and legitimate users.\r\n\r\nUnlike other vulnerabilities, DoS attacks usually do not aim at breaching security. Rather, they are focused on making websites and services unavailable to genuine users resulting in downtime.\r\n\r\nOne popular Denial of Service vulnerability is DDoS (a Distributed Denial of Service), an attack that attempts to clog network pipes to the system by generating a large volume of traffic from many machines.\r\n\r\nWhen it comes to open source libraries, DoS vulnerabilities allow attackers to trigger such a crash or crippling of the service by using a flaw either in the application code or from the use of open source libraries.\r\n\r\nTwo common types of DoS vulnerabilities:\r\n\r\n* High CPU/Memory Consumption- An attacker sending crafted requests that could cause the system to take a disproportionate amount of time to process. For example, [commons-fileupload:commons-fileupload](SNYK-JAVA-COMMONSFILEUPLOAD-30082).\r\n\r\n* Crash - An attacker sending crafted requests that could cause the system to crash. For Example,  [npm `ws` package](npm:ws:20171108)\n\n## Remediation\n\nUpgrade `qs` to version 1.0.0 or higher.\n\n\n## References\n\n- [Node Security Advisory](https://nodesecurity.io/advisories/28)\n",
        "disclosureTime": "2014-08-06T06:10:23Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "qs@0.0.6"
        ],
        "functions": [],
        "id": "npm:qs:20140806-1",
        "identifiers": {
          "ALTERNATIVE": [
            "SNYK-JS-QS-10020"
          ],
          "CVE": [
            "CVE-2014-10064"
          ],
          "CWE": [
            "CWE-400"
          ],
          "NSP": [
            28
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "js",
        "package": "qs",
        "packageManager": "npm",
        "patches": [
          {
            "comments": [],
            "id": "patch:npm:qs:20140806-1:1",
            "modificationTime": "2019-12-03T11:40:45.744535Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20140806-1/qs_20140806-1_0_1_snyk.patch"
            ],
            "version": "=0.5.6"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20140806-1:0",
            "modificationTime": "2019-12-03T11:40:45.742148Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20140806-1/qs_20140806-1_0_0_snyk.patch"
            ],
            "version": "<1.0.0 >=0.6.5"
          }
        ],
        "publicationTime": "2014-08-06T06:10:23Z",
        "semver": {
          "vulnerable": [
            "<1.0.0"
          ]
        },
        "severity": "medium",
        "title": "Denial of Service (Event Loop Blocking)",
        "type": "vuln",
        "upgradePath": [
          "qs@1.0.0"
        ],
        "url": "https://snyk.io/vuln/npm:qs:20140806-1",
        "version": "0.0.6"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
        "credit": [
          "Snyk Security Research Team"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\n\n[qs](https://www.npmjs.com/package/qs) is a querystring parser that supports nesting and arrays, with a depth limit.\n\n\nAffected versions of this package are vulnerable to Prototype Override Protection Bypass.\nBy default `qs` protects against attacks that attempt to overwrite an object's existing prototype properties, such as `toString()`, `hasOwnProperty()`,etc.\r\n\r\nFrom [`qs` documentation](https://github.com/ljharb/qs):\r\n> By default parameters that would overwrite properties on the object prototype are ignored, if you wish to keep the data from those fields either use plainObjects as mentioned above, or set allowPrototypes to true which will allow user input to overwrite those properties. WARNING It is generally a bad idea to enable this option as it can cause problems when attempting to use the properties that have been overwritten. Always be careful with this option.\r\n\r\nOverwriting these properties can impact application logic, potentially allowing attackers to work around security controls, modify data, make the application unstable and more.\r\n\r\nIn versions of the package affected by this vulnerability, it is possible to circumvent this protection and overwrite prototype properties and functions by prefixing the name of the parameter with `[` or `]`. e.g. `qs.parse(\"]=toString\")` will return `{toString = true}`, as a result, calling `toString()` on the object will throw an exception.\r\n\r\n**Example:**\r\n```js\r\nqs.parse('toString=foo', { allowPrototypes: false })\r\n// {}\r\n\r\nqs.parse(\"]=toString\", { allowPrototypes: false })\r\n// {toString = true} <== prototype overwritten\r\n```\r\n\r\nFor more information, you can check out our [blog](https://snyk.io/blog/high-severity-vulnerability-qs/).\r\n\r\n## Disclosure Timeline\r\n- February 13th, 2017 - Reported the issue to package owner.\r\n- February 13th, 2017 - Issue acknowledged by package owner.\r\n- February 16th, 2017 - Partial fix released in versions `6.0.3`, `6.1.1`, `6.2.2`, `6.3.1`.\r\n- March 6th, 2017     - Final fix released in versions `6.4.0`,`6.3.2`, `6.2.3`, `6.1.2` and `6.0.4`\n\n## Remediation\n\nUpgrade `qs` to version 6.0.4, 6.1.2, 6.2.3, 6.3.2 or higher.\n\n\n## References\n\n- [GitHub Commit](https://github.com/ljharb/qs/commit/beade029171b8cef9cee0d03ebe577e2dd84976d)\n\n- [Report of an insufficient fix](https://github.com/ljharb/qs/issues/200)\n",
        "disclosureTime": "2017-02-13T00:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "qs@0.0.6"
        ],
        "functions": [
          {
            "functionId": {
              "filePath": "lib/parse.js",
              "functionName": "internals.parseObject"
            },
            "version": [
              "<6.0.4"
            ]
          },
          {
            "functionId": {
              "filePath": "lib/parse.js",
              "functionName": "parseObject"
            },
            "version": [
              ">=6.2.0 <6.2.3",
              "6.3.0"
            ]
          },
          {
            "functionId": {
              "filePath": "lib/parse.js",
              "functionName": "parseObjectRecursive"
            },
            "version": [
              ">=6.3.1 <6.3.2"
            ]
          }
        ],
        "id": "npm:qs:20170213",
        "identifiers": {
          "ALTERNATIVE": [
            "SNYK-JS-QS-10407"
          ],
          "CVE": [
            "CVE-2017-1000048"
          ],
          "CWE": [
            "CWE-20"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "js",
        "package": "qs",
        "packageManager": "npm",
        "patches": [
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:7",
            "modificationTime": "2019-12-03T11:40:45.862615Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/603_604.patch"
            ],
            "version": "=6.0.3"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:6",
            "modificationTime": "2019-12-03T11:40:45.861504Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/602_604.patch"
            ],
            "version": "=6.0.2"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:5",
            "modificationTime": "2019-12-03T11:40:45.860523Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/611_612.patch"
            ],
            "version": "=6.1.1"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:4",
            "modificationTime": "2019-12-03T11:40:45.859411Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/610_612.patch"
            ],
            "version": "=6.1.0"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:3",
            "modificationTime": "2019-12-03T11:40:45.858334Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/622_623.patch"
            ],
            "version": "=6.2.2"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:2",
            "modificationTime": "2019-12-03T11:40:45.857318Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/621_623.patch"
            ],
            "version": "=6.2.1"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:1",
            "modificationTime": "2019-12-03T11:40:45.856271Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/631_632.patch"
            ],
            "version": "=6.3.1"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:0",
            "modificationTime": "2019-12-03T11:40:45.855245Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/630_632.patch"
            ],
            "version": "=6.3.0"
          }
        ],
        "publicationTime": "2017-03-01T10:00:54Z",
        "semver": {
          "vulnerable": [
            "<6.0.4",
            ">=6.1.0 <6.1.2",
            ">=6.2.0 <6.2.3",
            ">=6.3.0 <6.3.2"
          ]
        },
        "severity": "high",
        "title": "Prototype Override Protection Bypass",
        "type": "vuln",
        "upgradePath": [
          "qs@6.0.4"
        ],
        "url": "https://snyk.io/vuln/npm:qs:20170213",
        "version": "0.0.6"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "4a18d42f-0706-4ad0-b127-24078731fbed",
    "name": "atokeneduser"
  },
  "packageManager": "npm"
}
````

<h3 id="test-packagejson-package-lockjson-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test for issues in a public package by name and version

<a id="opIdTest for issues in a public package by name and version"></a>

> Code samples

```bash
curl https://example.com/test/npm/ms/0.7.0 \
  -H 'Accept: application/json'
```

`GET /test/npm/{packageName}/{version}`

You can test `npm` packages for issues according to their name and version.

<h3 id="test-for-issues-in-a-public-package-by-name-and-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|The package name. For scoped packages, **must** be url-encoded, so to test "@angular/core" version 4.3.2, one should `GET /test/npm/%40angular%2Fcore/4.3.2`.|
|version|path|string|true|The Package version to test.|
|org|query|string|false|The organization to test the package with. See "The Snyk organization for a request" above.|

> Example responses

> 200 Response

````json
{
  "dependencyCount": 1,
  "issues": {
    "licenses": [],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
        "credit": [
          "Adam Baldwin"
        ],
        "cvssScore": 5.3,
        "description": "## Overview\n\n[ms](https://www.npmjs.com/package/ms) is a tiny millisecond conversion utility.\n\n\nAffected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS)\nattack when converting a time period string (i.e. `\"2 days\"`, `\"1h\"`) into a milliseconds integer. A malicious user could pass extremely long strings to `ms()`, causing the server to take a long time to process, subsequently blocking the event loop for that extended period.\n\n## Details\nDenial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its original and legitimate users. There are many types of DoS attacks, ranging from trying to clog the network pipes to the system by generating a large volume of traffic from many machines (a Distributed Denial of Service - DDoS - attack) to sending crafted requests that cause a system to crash or take a disproportional amount of time to process.\r\n\r\nThe Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Regular expressions are incredibly powerful, but they aren't very intuitive and can ultimately end up making it easy for attackers to take your site down.\r\n\r\nLet’s take the following regular expression as an example:\r\n```js\r\nregex = /A(B|C+)+D/\r\n```\r\n\r\nThis regular expression accomplishes the following:\r\n- `A` The string must start with the letter 'A'\r\n- `(B|C+)+` The string must then follow the letter A with either the letter 'B' or some number of occurrences of the letter 'C' (the `+` matches one or more times). The `+` at the end of this section states that we can look for one or more matches of this section.\r\n- `D` Finally, we ensure this section of the string ends with a 'D'\r\n\r\nThe expression would match inputs such as `ABBD`, `ABCCCCD`, `ABCBCCCD` and `ACCCCCD`\r\n\r\nIt most cases, it doesn't take very long for a regex engine to find a match:\r\n\r\n```bash\r\n$ time node -e '/A(B|C+)+D/.test(\"ACCCCCCCCCCCCCCCCCCCCCCCCCCCCD\")'\r\n0.04s user 0.01s system 95% cpu 0.052 total\r\n\r\n$ time node -e '/A(B|C+)+D/.test(\"ACCCCCCCCCCCCCCCCCCCCCCCCCCCCX\")'\r\n1.79s user 0.02s system 99% cpu 1.812 total\r\n```\r\n\r\nThe entire process of testing it against a 30 characters long string takes around ~52ms. But when given an invalid string, it takes nearly two seconds to complete the test, over ten times as long as it took to test a valid string. The dramatic difference is due to the way regular expressions get evaluated.\r\n\r\nMost Regex engines will work very similarly (with minor differences). The engine will match the first possible way to accept the current character and proceed to the next one. If it then fails to match the next one, it will backtrack and see if there was another way to digest the previous character. If it goes too far down the rabbit hole only to find out the string doesn’t match in the end, and if many characters have multiple valid regex paths, the number of backtracking steps can become very large, resulting in what is known as _catastrophic backtracking_.\r\n\r\nLet's look at how our expression runs into this problem, using a shorter string: \"ACCCX\". While it seems fairly straightforward, there are still four different ways that the engine could match those three C's:\r\n1. CCC\r\n2. CC+C\r\n3. C+CC\r\n4. C+C+C.\r\n\r\nThe engine has to try each of those combinations to see if any of them potentially match against the expression. When you combine that with the other steps the engine must take, we can use [RegEx 101 debugger](https://regex101.com/debugger) to see the engine has to take a total of 38 steps before it can determine the string doesn't match.\r\n\r\nFrom there, the number of steps the engine must use to validate a string just continues to grow.\r\n\r\n| String | Number of C's | Number of steps |\r\n| -------|-------------:| -----:|\r\n| ACCCX | 3 | 38\r\n| ACCCCX | 4 | 71\r\n| ACCCCCX | 5 | 136\r\n| ACCCCCCCCCCCCCCX | 14 | 65,553\r\n\r\n\r\nBy the time the string includes 14 C's, the engine has to take over 65,000 steps just to see if the string is valid. These extreme situations can cause them to work very slowly (exponentially related to input size, as shown above), allowing an attacker to exploit this and can cause the service to excessively consume CPU, resulting in a Denial of Service.\n\n## Remediation\n\nUpgrade `ms` to version 0.7.1 or higher.\n\n\n## References\n\n- [OSS Security advisory](https://www.openwall.com/lists/oss-security/2016/04/20/11)\n\n- [OWASP - ReDoS](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)\n\n- [Security Focus](https://www.securityfocus.com/bid/96389)\n",
        "disclosureTime": "2015-10-24T20:39:59Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "ms@0.7.0"
        ],
        "functions": [
          {
            "functionId": {
              "filePath": "ms.js",
              "functionName": "parse"
            },
            "version": [
              ">0.1.0 <=0.3.0"
            ]
          },
          {
            "functionId": {
              "filePath": "index.js",
              "functionName": "parse"
            },
            "version": [
              ">0.3.0 <0.7.1"
            ]
          }
        ],
        "id": "npm:ms:20151024",
        "identifiers": {
          "ALTERNATIVE": [
            "SNYK-JS-MS-10064"
          ],
          "CVE": [
            "CVE-2015-8315"
          ],
          "CWE": [
            "CWE-400"
          ],
          "NSP": [
            46
          ]
        },
        "isPatchable": true,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "js",
        "package": "ms",
        "packageManager": "npm",
        "patches": [
          {
            "comments": [],
            "id": "patch:npm:ms:20151024:5",
            "modificationTime": "2019-12-03T11:40:45.777474Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/ms/20151024/ms_20151024_5_0_48701f029417faf65e6f5e0b61a3cebe5436b07b_snyk5.patch"
            ],
            "version": "=0.1.0"
          },
          {
            "comments": [],
            "id": "patch:npm:ms:20151024:4",
            "modificationTime": "2019-12-03T11:40:45.776329Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/ms/20151024/ms_20151024_4_0_48701f029417faf65e6f5e0b61a3cebe5436b07b_snyk4.patch"
            ],
            "version": "=0.2.0"
          },
          {
            "comments": [],
            "id": "patch:npm:ms:20151024:3",
            "modificationTime": "2019-12-03T11:40:45.775292Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/ms/20151024/ms_20151024_3_0_48701f029417faf65e6f5e0b61a3cebe5436b07b_snyk3.patch"
            ],
            "version": "=0.3.0"
          },
          {
            "comments": [],
            "id": "patch:npm:ms:20151024:2",
            "modificationTime": "2019-12-03T11:40:45.774221Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/ms/20151024/ms_20151024_2_0_48701f029417faf65e6f5e0b61a3cebe5436b07b_snyk2.patch"
            ],
            "version": "<0.6.0 >0.3.0"
          },
          {
            "comments": [],
            "id": "patch:npm:ms:20151024:1",
            "modificationTime": "2019-12-03T11:40:45.773094Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/ms/20151024/ms_20151024_1_0_48701f029417faf65e6f5e0b61a3cebe5436b07b_snyk.patch"
            ],
            "version": "<0.7.0 >=0.6.0"
          },
          {
            "comments": [],
            "id": "patch:npm:ms:20151024:0",
            "modificationTime": "2019-12-03T11:40:45.772009Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/ms/20151024/ms_20151024_0_0_48701f029417faf65e6f5e0b61a3cebe5436b07b.patch"
            ],
            "version": "=0.7.0"
          }
        ],
        "publicationTime": "2015-11-06T02:09:36Z",
        "semver": {
          "vulnerable": [
            "<0.7.1"
          ]
        },
        "severity": "medium",
        "title": "Regular Expression Denial of Service (ReDoS)",
        "type": "vuln",
        "upgradePath": [
          "ms@0.7.1"
        ],
        "url": "https://snyk.io/vuln/npm:ms:20151024",
        "version": "0.7.0"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "4a18d42f-0706-4ad0-b127-24078731fbed",
    "name": "atokeneduser"
  },
  "packageManager": "npm"
}
````

<h3 id="test-for-issues-in-a-public-package-by-name-and-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test requirements.txt file

<a id="opIdTest requirements.txt file"></a>

> Code samples

```bash
curl https://example.com/test/pip \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "encoding": "base64",
    "files": {
      "target": {
        "contents": "supervisor==3.1\\noauth2==1.5.211"
      }
    }
  }'
```

`POST /test/pip`

You can test your pip packages for issues according to their manifest file using this action. It takes a JSON object containing a the "target" `requirements.txt`.

> Body parameter

```json
{
  "encoding": "base64",
  "files": {
    "target": {
      "contents": "supervisor==3.1\\noauth2==1.5.211"
    }
  }
}
```

<h3 id="test-requirementstxt-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» encoding|body|string|false|the encoding for the manifest files sent.|
|» files|body|object|true|The manifest files:|
|» » target|body|object|true|the `requirements.txt` file, encoded according the the "encoding" field.|
|» » » contents|body|string|true|the contents of `requirements.txt` as a string, encoded according to `encoding` above.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encoding|plain|
|» encoding|base64|

> Example responses

> 200 Response

````json
{
  "dependencyCount": 4,
  "issues": {
    "licenses": [],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:L/A:N",
        "credit": [
          "André Cruz"
        ],
        "cvssScore": 4.3,
        "description": "## Overview\r\n[`oauth2`](https://pypi.python.org/pypi/oauth2) is a library for OAuth version 1.9\r\nThe Server.verify_request function in SimpleGeo python-oauth2 does not check the nonce, which allows remote attackers to perform replay attacks via a signed URL.\r\n\r\n## Remediation\r\nUpgrade to version `1.9rc1` or greater.\r\n\r\n## References\r\n- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2013-4346)\r\n- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-4346)\r\n- [GitHub Issue](https://github.com/simplegeo/python-oauth2/issues/129)\r\n",
        "disclosureTime": "2013-02-05T12:31:58Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "oauth2@1.5.211"
        ],
        "functions": [],
        "id": "SNYK-PYTHON-OAUTH2-40013",
        "identifiers": {
          "CVE": [
            "CVE-2013-4346"
          ],
          "CWE": [
            "CWE-310"
          ]
        },
        "isPatchable": false,
        "isPinnable": true,
        "isUpgradable": false,
        "language": "python",
        "package": "oauth2",
        "packageManager": "pip",
        "patches": [],
        "publicationTime": "2013-02-05T12:31:58Z",
        "semver": {
          "vulnerable": [
            "[,1.9rc1)"
          ]
        },
        "severity": "medium",
        "title": "Replay Attack",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PYTHON-OAUTH2-40013",
        "version": "1.5.211"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 5.4,
        "description": "## Overview\r\n[`oauth2`](https://pypi.python.org/pypi/oauth2) is a library for OAuth version 1.9\r\n\r\nAffected versions of this package are vulnerable to Insecure Randomness.\r\nThe (1) make_nonce, (2) generate_nonce, and (3) generate_verifier functions in SimpleGeo python-oauth2 uses weak random numbers to generate nonces, which makes it easier for remote attackers to guess the nonce via a brute force attack.\r\n\r\n## Remediation\r\nUpgrade to version `1.9rc1` or greater.\r\n\r\n## References\r\n- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-4347)\r\n- [GitHub Issue](https://github.com/simplegeo/python-oauth2/issues/9)\r\n- [Openwall](http://www.openwall.com/lists/oss-security/2013/09/12/7)\r\n- [GitHub PR](https://github.com/simplegeo/python-oauth2/pull/146)\r\n",
        "disclosureTime": "2014-05-20T14:55:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "oauth2@1.5.211"
        ],
        "functions": [],
        "id": "SNYK-PYTHON-OAUTH2-40014",
        "identifiers": {
          "CVE": [
            "CVE-2013-4347"
          ],
          "CWE": [
            "CWE-310"
          ]
        },
        "isPatchable": false,
        "isPinnable": true,
        "isUpgradable": false,
        "language": "python",
        "package": "oauth2",
        "packageManager": "pip",
        "patches": [],
        "publicationTime": "2017-04-13T12:31:58Z",
        "semver": {
          "vulnerable": [
            "[,1.9rc1)"
          ]
        },
        "severity": "medium",
        "title": "Insecure Randomness",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PYTHON-OAUTH2-40014",
        "version": "1.5.211"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H/E:H/RL:O/RC:C",
        "credit": [
          "Maor Shwartz"
        ],
        "cvssScore": 8.8,
        "description": "## Overview\r\n[`supervisor`](https://pypi.python.org/pypi/supervisor/) is a client/server system that allows its users to monitor and control a number of processes on UNIX-like operating systems.\r\n\r\nAffected versions of the package are vulnerable to Arbitrary Command Execution. A vulnerability has been found where an authenticated client can send a malicious XML-RPC request to `supervisord` that will run arbitrary shell commands on the server. The commands will be run as the same user as `supervisord`. Depending on how `supervisord` has been configured, this may be root.\r\n\r\n## Details\r\n* `supervisord` is the server component and is responsible for starting child processes, responding to commands from clients, and other commands.\r\n* `supervisorctl` is the command line component, providing a shell-like interface to the features provided by `supervisord`.\r\n\r\n`supervisord` can be configured to run an HTTP server on a TCP socket and/or a Unix domain socket. This HTTP server is how `supervisorctl` communicates with `supervisord`. If an HTTP server has been enabled, it will always serve both HTML pages and an XML-RPC interface. A vulnerability has been found where an authenticated client can send a malicious XML-RPC request to `supervisord` that will run arbitrary shell commands on the server. The commands will be run as the same user as `supervisord`. Depending on how `supervisord` has been configured, this may be root.\r\nThis vulnerability can only be exploited by an authenticated client or if `supervisord` has been configured to run an HTTP server without authentication. If authentication has not been enabled, `supervisord` will log a message at the critical level every time it starts.\r\n\r\n## PoC by Maor Shwartz\r\n\r\nCreate a config file `supervisord.conf`:\r\n\r\n```conf\r\n[supervisord]\r\nloglevel = trace\r\n\r\n[inet_http_server]\r\nport = 127.0.0.1:9001\r\n\r\n[rpcinterface:supervisor]\r\nsupervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface\r\n```\r\n\r\nStart supervisord in the foreground with that config file:\r\n\r\n```\r\n$ supervisord -n -c supervisord.conf\r\n```\r\n\r\nIn a new terminal:\r\n\r\n```py\r\n$ python2\r\n>>> from xmlrpclib import ServerProxy\r\n>>> server = ServerProxy('http://127.0.0.1:9001/RPC2')\r\n>>> server.supervisor.supervisord.options.execve('/bin/sh', [], {})\r\n  ```\r\n\r\nIf the `supervisord` version is vulnerable, the `execve` will be executed and the `supervisord` process will be replaced with /bin/sh (or any other command given). If the `supervisord` version is not vulnerable, it will return an `UNKNOWN_METHOD` fault.\r\n\r\n\r\n## Remediation\r\nUpgrade `supervisor` to version 3.3.3 or higher.\r\n\r\n## References\r\n- [Github Issue](https://github.com/Supervisor/supervisor/issues/964)\r\n- [Github Commit 3.0.1](https://github.com/Supervisor/supervisor/commit/83060f3383ebd26add094398174f1de34cf7b7f0)\r\n- [Github Commit 3.1.4](https://github.com/Supervisor/supervisor/commit/dbe0f55871a122eac75760aef511efc3a8830b88)\r\n- [Github Commit 3.2.4](https://github.com/Supervisor/supervisor/commit/aac3c21893cab7361f5c35c8e20341b298f6462e)\r\n- [Github Commit 3.3.3](https://github.com/Supervisor/supervisor/commit/058f46141e346b18dee0497ba11203cb81ecb19e)",
        "disclosureTime": "2017-07-18T21:00:00Z",
        "exploitMaturity": "mature",
        "from": [
          "supervisor@3.1.0"
        ],
        "functions": [],
        "id": "SNYK-PYTHON-SUPERVISOR-40610",
        "identifiers": {
          "CVE": [
            "CVE-2017-11610"
          ],
          "CWE": [
            "CWE-94"
          ]
        },
        "isPatchable": false,
        "isPinnable": true,
        "isUpgradable": false,
        "language": "python",
        "package": "supervisor",
        "packageManager": "pip",
        "patches": [],
        "publicationTime": "2017-08-08T06:59:14Z",
        "semver": {
          "vulnerable": [
            "[3.0a1,3.0.1)",
            "[3.1.0,3.1.4)",
            "[3.2.0,3.2.4)",
            "[3.3.0,3.3.3)"
          ]
        },
        "severity": "high",
        "title": "Arbitrary Command Execution",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PYTHON-SUPERVISOR-40610",
        "version": "3.1.0"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "4a18d42f-0706-4ad0-b127-24078731fbed",
    "name": "atokeneduser"
  },
  "packageManager": "pip"
}
````

<h3 id="test-requirementstxt-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test for issues in a public package by name and version

> Code samples

```bash
curl https://example.com/test/pip/rsa/3.3 \
  -H 'Accept: application/json'
```

`GET /test/pip/{packageName}/{version}`

You can test `pip` packages for issues according to their name and version.

<h3 id="test-for-issues-in-a-public-package-by-name-and-version-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|The package name.|
|version|path|string|true|The Package version to test.|
|org|query|string|false|The organization to test the package with. See "The Snyk organization for a request" above.|

> Example responses

> 200 Response

```json
{
  "dependencyCount": 2,
  "issues": {
    "licenses": [],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
        "credit": [
          "Manuel Aude Morales"
        ],
        "cvssScore": 5.3,
        "description": "## Overview\n[`rsa`](https://pypi.python.org/pypi/rsa) is a Pure-Python RSA implementation.\n\nAffected versions of this package are vulnerable to Timing attacks.\n\n## References\n- [GitHub Issue](https://github.com/sybrenstuvel/python-rsa/issues/19)\n- [GitHub Commit](https://github.com/sybrenstuvel/python-rsa/commit/2310b34bdb530e0bad793d42f589c9f848ff181b)\n",
        "disclosureTime": "2013-11-15T02:34:45.265000Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "rsa@3.3"
        ],
        "functions": [],
        "id": "SNYK-PYTHON-RSA-40541",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-208"
          ]
        },
        "isPatchable": false,
        "isPinnable": true,
        "isUpgradable": false,
        "language": "python",
        "package": "rsa",
        "packageManager": "pip",
        "patches": [],
        "publicationTime": "2013-11-15T02:34:45.265000Z",
        "semver": {
          "vulnerable": [
            "[3.0,3.4.0)"
          ]
        },
        "severity": "medium",
        "title": "Timing Attack",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PYTHON-RSA-40541",
        "version": "3.3"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
        "credit": [
          "Sergio Lerner"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\n[`rsa`](https://pypi.python.org/pypi/rsa) is a Pure-Python RSA implementation.\n\nAffected versions of this package are vulnerable to Authentication Bypass due to not implementing authentication encryption or use MACs to validate messages before decrypting public key encrypted messages.\n\n## References\n- [GitHub Issue](https://github.com/sybrenstuvel/python-rsa/issues/13)\n- [GitHub Commit](https://github.com/sybrenstuvel/python-rsa/commit/1681a0b2f84a4a252c71b87de870a2816de06fdf)\n",
        "disclosureTime": "2012-12-07T03:15:00.052000Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "rsa@3.3"
        ],
        "functions": [],
        "id": "SNYK-PYTHON-RSA-40542",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-287"
          ]
        },
        "isPatchable": false,
        "isPinnable": true,
        "isUpgradable": false,
        "language": "python",
        "package": "rsa",
        "packageManager": "pip",
        "patches": [],
        "publicationTime": "2012-12-07T03:15:00.052000Z",
        "semver": {
          "vulnerable": [
            "[3.0,3.4)"
          ]
        },
        "severity": "high",
        "title": "Authentication Bypass",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-PYTHON-RSA-40542",
        "version": "3.3"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "229b76f3-802c-4553-aa1d-01d4d86f7f61",
    "name": "gitphill"
  },
  "packageManager": "pip"
}
```

<h3 id="test-for-issues-in-a-public-package-by-name-and-version-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test gemfile.lock file

<a id="opIdTest gemfile.lock file"></a>

> Code samples

```bash
curl https://example.com/test/rubygems \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "encoding": "base64",
    "files": {
      "target": {
        "contents": "GEM\\n remote: http://rubygems.org/\\n specs:\\n actionpack (4.2.5)\\n actionview (= 4.2.5)\\n activesupport (= 4.2.5)\\n rack (~> 1.6)\\n rack-test (~> 0.6.2)\\n rails-dom-testing (~> 1.0, >= 1.0.5)\\n rails-html-sanitizer (~> 1.0, >= 1.0.2)\\n actionview (4.2.5)\\n activesupport (= 4.2.5)\\n builder (~> 3.1)\\n erubis (~> 2.7.0)\\n rails-dom-testing (~> 1.0, >= 1.0.5)\\n rails-html-sanitizer (~> 1.0, >= 1.0.2)\\n activesupport (4.2.5)\\n i18n (~> 0.7)\\n json (~> 1.7, >= 1.7.7)\\n minitest (~> 5.1)\\n thread_safe (~> 0.3, >= 0.3.4)\\n tzinfo (~> 1.1)\\n builder (3.2.2)\\n erubis (2.7.0)\\n haml (3.1.4)\\n httparty (0.8.1)\\n multi_json\\n multi_xml\\n i18n (0.7.0)\\n json (1.8.3)\\n loofah (2.0.3)\\n nokogiri (>= 1.5.9)\\n mini_portile2 (2.1.0)\\n minitest (5.9.1)\\n multi_json (1.12.1)\\n multi_xml (0.5.5)\\n nokogiri (1.6.8.1)\\n mini_portile2 (~> 2.1.0)\\n rack (1.6.4)\\n rack-protection (1.5.3)\\n rack\\n rack-test (0.6.3)\\n rack (>= 1.0)\\n rails-deprecated_sanitizer (1.0.3)\\n activesupport (>= 4.2.0.alpha)\\n rails-dom-testing (1.0.7)\\n activesupport (>= 4.2.0.beta, < 5.0)\\n nokogiri (~> 1.6.0)\\n rails-deprecated_sanitizer (>= 1.0.1)\\n rails-html-sanitizer (1.0.3)\\n loofah (~> 2.0)\\n sinatra (1.3.2)\\n rack (~> 1.3, >= 1.3.6)\\n rack-protection (~> 1.2)\\n tilt (~> 1.3, >= 1.3.3)\\n thread_safe (0.3.5)\\n tilt (1.4.1)\\n tzinfo (1.2.2)\\n thread_safe (~> 0.1)\\n \\n PLATFORMS\\n ruby\\n \\n DEPENDENCIES\\n actionpack\\n haml\\n httparty\\n sinatra\\n \\n BUNDLED WITH\\n 1.13.2"
      }
    }
  }'
```

`POST /test/rubygems`

You can test your rubygems applications for issues according to their lockfile using this action. It takes a JSON object containing a the "target" `Gemfile.lock`.

> Body parameter

```json
{
  "encoding": "base64",
  "files": {
    "target": {
      "contents": "GEM\\n remote: http://rubygems.org/\\n specs:\\n actionpack (4.2.5)\\n actionview (= 4.2.5)\\n activesupport (= 4.2.5)\\n rack (~> 1.6)\\n rack-test (~> 0.6.2)\\n rails-dom-testing (~> 1.0, >= 1.0.5)\\n rails-html-sanitizer (~> 1.0, >= 1.0.2)\\n actionview (4.2.5)\\n activesupport (= 4.2.5)\\n builder (~> 3.1)\\n erubis (~> 2.7.0)\\n rails-dom-testing (~> 1.0, >= 1.0.5)\\n rails-html-sanitizer (~> 1.0, >= 1.0.2)\\n activesupport (4.2.5)\\n i18n (~> 0.7)\\n json (~> 1.7, >= 1.7.7)\\n minitest (~> 5.1)\\n thread_safe (~> 0.3, >= 0.3.4)\\n tzinfo (~> 1.1)\\n builder (3.2.2)\\n erubis (2.7.0)\\n haml (3.1.4)\\n httparty (0.8.1)\\n multi_json\\n multi_xml\\n i18n (0.7.0)\\n json (1.8.3)\\n loofah (2.0.3)\\n nokogiri (>= 1.5.9)\\n mini_portile2 (2.1.0)\\n minitest (5.9.1)\\n multi_json (1.12.1)\\n multi_xml (0.5.5)\\n nokogiri (1.6.8.1)\\n mini_portile2 (~> 2.1.0)\\n rack (1.6.4)\\n rack-protection (1.5.3)\\n rack\\n rack-test (0.6.3)\\n rack (>= 1.0)\\n rails-deprecated_sanitizer (1.0.3)\\n activesupport (>= 4.2.0.alpha)\\n rails-dom-testing (1.0.7)\\n activesupport (>= 4.2.0.beta, < 5.0)\\n nokogiri (~> 1.6.0)\\n rails-deprecated_sanitizer (>= 1.0.1)\\n rails-html-sanitizer (1.0.3)\\n loofah (~> 2.0)\\n sinatra (1.3.2)\\n rack (~> 1.3, >= 1.3.6)\\n rack-protection (~> 1.2)\\n tilt (~> 1.3, >= 1.3.3)\\n thread_safe (0.3.5)\\n tilt (1.4.1)\\n tzinfo (1.2.2)\\n thread_safe (~> 0.1)\\n \\n PLATFORMS\\n ruby\\n \\n DEPENDENCIES\\n actionpack\\n haml\\n httparty\\n sinatra\\n \\n BUNDLED WITH\\n 1.13.2"
    }
  }
}
```

<h3 id="test-gemfilelock-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» encoding|body|string|false|the encoding for the manifest files sent.|
|» files|body|object|true|The manifest files:|
|» » target|body|object|true|the `Gemfile.lock` file, encoded according the the "encoding" field.|
|» » » contents|body|string|true|the contents of `Gemfile.lock` as a string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encoding|plain|
|» encoding|base64|

> Example responses

> 200 Response

````json
{
  "dependencyCount": 6,
  "issues": {
    "licenses": [],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\n\nThe [`json`](https://rubygems.org/gems/json) gem is a JSON implementation as a Ruby extension in C.\nAffected versions of this Gem contain an overflow condition. This is triggered when user-supplied input is not properly validated while handling specially crafted data. This can allow a remote attacker to cause a stack-based buffer overflow, resulting in a denial of service, or potentially allowing the [execution of arbitrary code](https://snyk.io/vuln/SNYK-RUBY-JSON-20209).\n\n## Details\nDenial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its intended and legitimate users.\r\n\r\nUnlike other vulnerabilities, DoS attacks usually do not aim at breaching security. Rather, they are focused on making websites and services unavailable to genuine users resulting in downtime.\r\n\r\nOne popular Denial of Service vulnerability is DDoS (a Distributed Denial of Service), an attack that attempts to clog network pipes to the system by generating a large volume of traffic from many machines.\r\n\r\nWhen it comes to open source libraries, DoS vulnerabilities allow attackers to trigger such a crash or crippling of the service by using a flaw either in the application code or from the use of open source libraries.\r\n\r\nTwo common types of DoS vulnerabilities:\r\n\r\n* High CPU/Memory Consumption- An attacker sending crafted requests that could cause the system to take a disproportionate amount of time to process. For example, [commons-fileupload:commons-fileupload](SNYK-JAVA-COMMONSFILEUPLOAD-30082).\r\n\r\n* Crash - An attacker sending crafted requests that could cause the system to crash. For Example,  [npm `ws` package](npm:ws:20171108)\n\n## References\n- http://rubysec.com/advisories/OSVDB-101157\n",
        "disclosureTime": "2007-05-20T21:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "json@1.0.0"
        ],
        "functions": [],
        "id": "SNYK-RUBY-JSON-20000",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-400"
          ],
          "OSVDB": [
            "OSVDB-101157"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "ruby",
        "package": "json",
        "packageManager": "rubygems",
        "patches": [],
        "publicationTime": "2007-05-20T21:00:00Z",
        "semver": {
          "vulnerable": [
            "< 1.1.0"
          ]
        },
        "severity": "high",
        "title": "Denial of Service (DoS)",
        "type": "vuln",
        "upgradePath": [
          "json@1.1.0"
        ],
        "url": "https://snyk.io/vuln/SNYK-RUBY-JSON-20000",
        "version": "1.0.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:L",
        "credit": [
          "Thomas Hollstegge",
          "Ben Murphy"
        ],
        "cvssScore": 7.3,
        "description": "## Overview\nThe [`json`](https://rubygems.org/gems/json) gem is a JSON implementation as a Ruby extension in C.\nAffected versions of this Gem are vulnerable to Denial of Service (DoS) attacks and unsafe object creation vulnerabilities. When parsing certain JSON documents, the JSON gem tricked into creating Ruby symbols in a target system.\n\n## Details\n\nWhen parsing certain JSON documents, the JSON gem can be coerced in to creating Ruby symbols in a target system.  Since Ruby symbols are not garbage collected, this can result in a denial of service attack.\n\nThe same technique can be used to create objects in a target system that act like internal objects.  These \"act alike\" objects can be used to bypass certain security mechanisms and can be used as a spring board for SQL injection attacks in Ruby on Rails.\n\nImpacted code looks like this:\n```js\nJSON.parse(user_input)\n```\nWhere the `user_input` variable will have a JSON document like this:\n```json\n{\"json_class\":\"foo\"}\n```\nThe JSON gem will attempt to look up the constant \"foo\".  Looking up this constant will create a symbol.\n\nIn JSON version 1.7.x, objects with arbitrary attributes can be created using JSON documents like this:\n```json\n{\"json_class\":\"JSON::GenericObject\",\"foo\":\"bar\"}\n```\nThis document will result in an instance of `JSON::GenericObject`, with the attribute \"foo\" that has the value \"bar\".  Instantiating these objects will result in arbitrary symbol creation and in some cases can be used to bypass security measures.\n\nPLEASE NOTE: this behavior *does not change* when using `JSON.load`.  `JSON.load` should *never* be given input from unknown sources.  If you are processing JSON from an unknown source, *always* use `JSON.parse`.\n\n## References\n- https://www.ruby-lang.org/en/news/2013/02/22/json-dos-cve-2013-0269/\n- https://gist.github.com/rsierra/4943505\n",
        "disclosureTime": "2013-02-10T22:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "json@1.0.0"
        ],
        "functions": [],
        "id": "SNYK-RUBY-JSON-20060",
        "identifiers": {
          "CVE": [
            "CVE-2013-0269"
          ],
          "CWE": [
            "CWE-400"
          ],
          "OSVDB": [
            "OSVDB-90074"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "ruby",
        "package": "json",
        "packageManager": "rubygems",
        "patches": [],
        "publicationTime": "2013-02-10T22:00:00Z",
        "semver": {
          "vulnerable": [
            "< 1.7.7, >= 1.7",
            "< 1.6.8, >= 1.6",
            "< 1.5.5"
          ]
        },
        "severity": "high",
        "title": "Denial of Service (DoS)",
        "type": "vuln",
        "upgradePath": [
          "json@1.5.5"
        ],
        "url": "https://snyk.io/vuln/SNYK-RUBY-JSON-20060",
        "version": "1.0.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\n\nThe [`json`](https://rubygems.org/gems/json) gem is a JSON implementation as a Ruby extension in C.\n\nAffected versions of this Gem contain an overflow condition. This is triggered when user-supplied input is not properly validated while handling specially crafted data. This can allow a remote attacker to cause a stack-based buffer overflow, resulting in a [denial of service](https://snyk.io/vuln/SNYK-RUBY-JSON-20000), or potentially allowing the execution of arbitrary code.\n\n## References\n\n- http://rubysec.com/advisories/OSVDB-101157\n",
        "disclosureTime": "2007-05-20T21:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "json@1.0.0"
        ],
        "functions": [],
        "id": "SNYK-RUBY-JSON-20209",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-94"
          ],
          "OSVDB": [
            "OSVDB-101157-1"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "ruby",
        "package": "json",
        "packageManager": "rubygems",
        "patches": [],
        "publicationTime": "2007-05-20T21:00:00Z",
        "semver": {
          "vulnerable": [
            "< 1.1.0"
          ]
        },
        "severity": "high",
        "title": "Arbitrary Code Execution",
        "type": "vuln",
        "upgradePath": [
          "json@1.1.0"
        ],
        "url": "https://snyk.io/vuln/SNYK-RUBY-JSON-20209",
        "version": "1.0.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
        "credit": [
          "Will Leinweber"
        ],
        "cvssScore": 5.3,
        "description": "## Overview\n\n[rack](https://rack.github.io/) is a minimal, modular and adaptable interface for developing web applications in Ruby. By wrapping HTTP requests and responses in the simplest way possible, it unifies and distills the API for web servers, web frameworks, and software in between (the so-called middleware) into a single method call.\n\n\nAffected versions of this package are vulnerable to Information Exposure.\nAttackers may be able to find and hijack sessions by using timing attacks targeting the session id. Session ids are usually stored and indexed in a database that uses some kind of scheme for speeding up lookups of that session id. By carefully measuring the amount of time it takes to look up a session, an attacker may be able to find a valid session id and hijack the session.\n\n## Remediation\n\nUpgrade `rack` to version 1.6.12, 2.0.8 or higher.\n\n\n## References\n\n- [GitHub Fix Commit](https://github.com/rack/rack/commit/7fecaee81f59926b6e1913511c90650e76673b38)\n\n- [GitHub Security Advisory](https://github.com/rack/rack/security/advisories/GHSA-hrqr-hxpp-chr3)\n",
        "disclosureTime": "2019-12-18T20:24:49Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "redis-rack-cache@1.1",
          "rack-cache@1.1",
          "rack@2.0.1"
        ],
        "functions": [],
        "id": "SNYK-RUBY-RACK-538324",
        "identifiers": {
          "CVE": [
            "CVE-2019-16782"
          ],
          "CWE": [
            "CWE-200"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "ruby",
        "package": "rack",
        "packageManager": "rubygems",
        "patches": [],
        "publicationTime": "2019-12-19T20:24:49Z",
        "semver": {
          "vulnerable": [
            "<1.6.12",
            ">=2.0.0.alpha, <2.0.8"
          ]
        },
        "severity": "medium",
        "title": "Information Exposure",
        "type": "vuln",
        "upgradePath": [
          "redis-rack-cache@1.1",
          "rack-cache@1.1",
          "rack@2.0.8"
        ],
        "url": "https://snyk.io/vuln/SNYK-RUBY-RACK-538324",
        "version": "2.0.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",
        "credit": [
          "Aaron Patterson"
        ],
        "cvssScore": 6.1,
        "description": "## Overview\n\n[rack](https://rack.github.io/) is a minimal, modular and adaptable interface for developing web applications in Ruby. By wrapping HTTP requests and responses in the simplest way possible, it unifies and distills the API for web servers, web frameworks, and software in between (the so-called middleware) into a single method call.\n\n\nAffected versions of this package are vulnerable to Cross-site Scripting (XSS)\nvia the `scheme` method on `Rack::Request`.\n\n## Remediation\n\nUpgrade `rack` to version 1.6.11, 2.0.6 or higher.\n\n\n## References\n\n- [GitHub Commit](https://github.com/rack/rack/commit/313dd6a05a5924ed6c82072299c53fed09e39ae7)\n\n- [Google Security Forum](https://groups.google.com/forum/#!msg/rubyonrails-security/GKsAFT924Ag/DYtk-Xl6AAAJ)\n\n- [RedHat Bugzilla Bug](https://bugzilla.redhat.com/show_bug.cgi?id=1646818)\n",
        "disclosureTime": "2018-08-22T15:56:49Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "redis-rack-cache@1.1",
          "rack-cache@1.1",
          "rack@2.0.1"
        ],
        "functions": [],
        "id": "SNYK-RUBY-RACK-72567",
        "identifiers": {
          "CVE": [
            "CVE-2018-16470"
          ],
          "CWE": [
            "CWE-79"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "ruby",
        "package": "rack",
        "packageManager": "rubygems",
        "patches": [],
        "publicationTime": "2018-11-06T16:08:37Z",
        "semver": {
          "vulnerable": [
            "<1.6.11",
            ">=2.0.0, <2.0.6"
          ]
        },
        "severity": "medium",
        "title": "Cross-site Scripting (XSS)",
        "type": "vuln",
        "upgradePath": [
          "redis-rack-cache@1.1",
          "rack-cache@1.1",
          "rack@2.0.6"
        ],
        "url": "https://snyk.io/vuln/SNYK-RUBY-RACK-72567",
        "version": "2.0.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:L",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 7.3,
        "description": "## Overview\n[rack-cache](https://rubygems.org/gems/rack-cache) enables HTTP caching for Rack-based applications.\nAffected versions of this gem contain a flaw related to the rubygem caching sensitive HTTP headers. This will result in a weakness that may make it easier for an attacker to gain access to a user's session via a specially crafted header.\n\n## References\n- http://rubysec.com/advisories/CVE-2012-2671\n",
        "disclosureTime": "2012-06-05T21:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "redis-rack-cache@1.1",
          "rack-cache@1.1"
        ],
        "functions": [],
        "id": "SNYK-RUBY-RACKCACHE-20031",
        "identifiers": {
          "CVE": [
            "CVE-2012-2671"
          ],
          "CWE": [
            "CWE-444"
          ],
          "OSVDB": [
            "OSVDB-83077"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "ruby",
        "package": "rack-cache",
        "packageManager": "rubygems",
        "patches": [],
        "publicationTime": "2012-06-05T21:00:00Z",
        "semver": {
          "vulnerable": [
            "< 1.2"
          ]
        },
        "severity": "high",
        "title": "HTTP Header Caching Weakness",
        "type": "vuln",
        "upgradePath": [
          "redis-rack-cache@1.2",
          "rack-cache@1.2"
        ],
        "url": "https://snyk.io/vuln/SNYK-RUBY-RACKCACHE-20031",
        "version": "1.1"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
        "credit": [
          "Dylan Katz"
        ],
        "cvssScore": 9.8,
        "description": "## Overview\n[`redis-store`](https://rubygems.org/gems/redis-store) is a namespaced Rack::Session, Rack::Cache, I18n and cache Redis stores for Ruby web frameworks.\n\nAffected versions of the package are vulnerable to Deserialization of Untrusted Data.\n\n# Details\nSerialization is a process of converting an object into a sequence of bytes which can be persisted to a disk or database or can be sent through streams. The reverse process of creating object from sequence of bytes is called deserialization. Serialization is commonly used for communication (sharing objects between multiple hosts) and persistence (store the object state in a file or a database). It is an integral part of popular protocols like _Remote Method Invocation (RMI)_, _Java Management Extension (JMX)_, _Java Messaging System (JMS)_, _Action Message Format (AMF)_, _Java Server Faces (JSF) ViewState_, etc.\n\n_Deserialization of untrusted data_ ([CWE-502](https://cwe.mitre.org/data/definitions/502.html)), is when the application deserializes untrusted data without sufficiently verifying that the resulting data will be valid, letting the attacker to control the state or the flow of the execution.\n\nAn attacker just needs to identify a piece of software that has both a vulnerable class on its path, and performs deserialization on untrusted data. Then all they need to do is send the payload into the deserializer, getting the command executed.\n\n## Remediation\nUpgrade `redis-store` to version 1.4.0 or higher.\n\n## References\n- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1000248)\n- [GitHub PR](https://github.com/redis-store/redis-store/pull/290)\n- [GitHub Issue](https://github.com/redis-store/redis-store/issues/289)\n- [GitHub Commit](https://github.com/redis-store/redis-store/commit/e0c1398d54a9661c8c70267c3a925ba6b192142e)\n",
        "disclosureTime": "2017-08-10T21:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "redis-rack-cache@1.1",
          "redis-store@1.1.0"
        ],
        "functions": [],
        "id": "SNYK-RUBY-REDISSTORE-20452",
        "identifiers": {
          "CVE": [
            "CVE-2017-1000248"
          ],
          "CWE": [
            "CWE-502"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "ruby",
        "package": "redis-store",
        "packageManager": "rubygems",
        "patches": [],
        "publicationTime": "2017-12-07T09:52:33.659000Z",
        "semver": {
          "vulnerable": [
            "<1.4.0"
          ]
        },
        "severity": "critical",
        "title": "Deserialization of Untrusted Data",
        "type": "vuln",
        "upgradePath": [
          "redis-rack-cache@2.0.2",
          "redis-store@1.4.0"
        ],
        "url": "https://snyk.io/vuln/SNYK-RUBY-REDISSTORE-20452",
        "version": "1.1.0"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "4a18d42f-0706-4ad0-b127-24078731fbed",
    "name": "atokeneduser"
  },
  "packageManager": "rubygems"
}
````

<h3 id="test-gemfilelock-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test for issues in a public gem by name and version

<a id="opIdTest for issues in a public gem by name and version"></a>

> Code samples

```bash
curl https://example.com/test/rubygems/rails-html-sanitizer/1.0.3 \
  -H 'Accept: application/json'
```

`GET /test/rubygems/{gemName}/{version}`

You can test `rubygems` packages for issues according to their name and version.

<h3 id="test-for-issues-in-a-public-gem-by-name-and-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gemName|path|string|true|The gem name.|
|version|path|string|true|The gem version to test.|
|org|query|string|false|The organization to test the package with. See "The Snyk organization for a request" above.|

> Example responses

> 200 Response

```json
{
  "dependencyCount": 5,
  "issues": {
    "licenses": [],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",
        "credit": [
          "Kaarlo Haikonen"
        ],
        "cvssScore": 6.1,
        "description": "## Overview\n[rails-html-sanitizer](https://github.com/rails/rails-html-sanitizer)\n\nAffected versions of this package are vulnerable to Cross-site Scripting (XSS). The gem allows non-whitelisted attributes to be present in sanitized output when input with specially-crafted HTML fragments, and these attributes can lead to an XSS attack on target applications.\n\nThis issue is similar to [CVE-2018-8048](https://snyk.io/vuln/SNYK-RUBY-LOOFAH-22023) in Loofah.\n\n## Details\nA cross-site scripting attack occurs when the attacker tricks a legitimate web-based application or site to accept a request as originating from a trusted source.\r\n\r\nThis is done by escaping the context of the web application; the web application then delivers that data to its users along with other trusted dynamic content, without validating it. The browser unknowingly executes malicious script on the client side (through client-side languages; usually JavaScript or HTML)  in order to perform actions that are otherwise typically blocked by the browser’s Same Origin Policy.\r\n\r\nֿInjecting malicious code is the most prevalent manner by which XSS is exploited; for this reason, escaping characters in order to prevent this manipulation is the top method for securing code against this vulnerability.\r\n\r\nEscaping means that the application is coded to mark key characters, and particularly key characters included in user input, to prevent those characters from being interpreted in a dangerous context. For example, in HTML, `<` can be coded as  `&lt`; and `>` can be coded as `&gt`; in order to be interpreted and displayed as themselves in text, while within the code itself, they are used for HTML tags. If malicious content is injected into an application that escapes special characters and that malicious content uses `<` and `>` as HTML tags, those characters are nonetheless not interpreted as HTML tags by the browser if they’ve been correctly escaped in the application code and in this way the attempted attack is diverted.\r\n \r\nThe most prominent use of XSS is to steal cookies (source: OWASP HttpOnly) and hijack user sessions, but XSS exploits have been used to expose sensitive information, enable access to privileged services and functionality and deliver malware. \r\n\r\n### Types of attacks\r\nThere are a few methods by which XSS can be manipulated:\r\n\r\n|Type|Origin|Description|\r\n|--|--|--|\r\n|**Stored**|Server|The malicious code is inserted in the application (usually as a link) by the attacker. The code is activated every time a user clicks the link.|\r\n|**Reflected**|Server|The attacker delivers a malicious link externally from the vulnerable web site application to a user. When clicked, malicious code is sent to the vulnerable web site, which reflects the attack back to the user’s browser.| \r\n|**DOM-based**|Client|The attacker forces the user’s browser to render a malicious page. The data in the page itself delivers the cross-site scripting data.|\r\n|**Mutated**| |The attacker injects code that appears safe, but is then rewritten and modified by the browser, while parsing the markup. An example is rebalancing unclosed quotation marks or even adding quotation marks to unquoted parameters.|\r\n\r\n### Affected environments\r\nThe following environments are susceptible to an XSS attack:\r\n\r\n* Web servers\r\n* Application servers\r\n* Web application environments\r\n\r\n### How to prevent\r\nThis section describes the top best practices designed to specifically protect your code: \r\n\r\n* Sanitize data input in an HTTP request before reflecting it back, ensuring all data is validated, filtered or escaped before echoing anything back to the user, such as the values of query parameters during searches. \r\n* Convert special characters such as `?`, `&`, `/`, `<`, `>` and spaces to their respective HTML or URL encoded equivalents. \r\n* Give users the option to disable client-side scripts.\r\n* Redirect invalid requests.\r\n* Detect simultaneous logins, including those from two separate IP addresses, and invalidate those sessions.\r\n* Use and enforce a Content Security Policy (source: Wikipedia) to disable any features that might be manipulated for an XSS attack.\r\n* Read the documentation for any of the libraries referenced in your code to understand which elements allow for embedded HTML.\n\n\n## Remediation\nUpgrade `rails-html-sanitizer` to version 1.0.4 or higher.\n\n## References\n- [Ruby on Rails Security Google Forum](https://groups.google.com/d/msg/rubyonrails-security/tP7W3kLc5u4/uDy2Br7xBgAJ)\n- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-3741)\n",
        "disclosureTime": "2018-03-22T21:46:15.453000Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "rails-html-sanitizer@1.0.3"
        ],
        "functions": [],
        "id": "SNYK-RUBY-RAILSHTMLSANITIZER-22025",
        "identifiers": {
          "CVE": [
            "CVE-2018-3741"
          ],
          "CWE": [
            "CWE-79"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "ruby",
        "package": "rails-html-sanitizer",
        "packageManager": "rubygems",
        "patches": [],
        "publicationTime": "2018-03-27T07:42:10.777000Z",
        "semver": {
          "vulnerable": [
            "<1.0.4"
          ]
        },
        "severity": "medium",
        "title": "Cross-site Scripting (XSS)",
        "type": "vuln",
        "upgradePath": [
          "rails-html-sanitizer@1.0.4"
        ],
        "url": "https://snyk.io/vuln/SNYK-RUBY-RAILSHTMLSANITIZER-22025",
        "version": "1.0.3"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "4a18d42f-0706-4ad0-b127-24078731fbed",
    "name": "atokeneduser"
  },
  "packageManager": "rubygems"
}
```

<h3 id="test-for-issues-in-a-public-gem-by-name-and-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test sbt file

<a id="opIdTest sbt file"></a>

> Code samples

```bash
curl https://example.com/test/sbt \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "encoding": "base64",
    "files": {
      "target": {
        "contents": "\\nname := \\\"subsearch\\\"\\n\\nassemblyJarName in assembly := s\\\"subsearch-0.2.0.jar\\\"\\n\\nscalaVersion := \\\"2.11.8\\\"\\n\\nscalacOptions ++= Seq(\\\"-unchecked\\\", \\\"-deprecation\\\")\\n\\nresolvers += Resolver.sonatypeRepo(\\\"public\\\")\\n\\nlibraryDependencies += \\\"org.scalatest\\\" % \\\"scalatest_2.11\\\" % \\\"2.2.1\\\" % \\\"test\\\"\\nlibraryDependencies += \\\"org.scalamock\\\" %% \\\"scalamock-scalatest-support\\\" % \\\"3.2.2\\\" % \\\"test\\\"\\nlibraryDependencies += \\\"net.databinder.dispatch\\\" %% \\\"dispatch-core\\\" % \\\"0.11.2\\\"\\nlibraryDependencies += \\\"org.slf4j\\\" % \\\"slf4j-simple\\\" % \\\"1.6.6\\\"\\nlibraryDependencies += \\\"com.github.scopt\\\" %% \\\"scopt\\\" % \\\"3.4.0\\\"\\nlibraryDependencies += \\\"pl.project13.scala\\\" %% \\\"rainbow\\\" % \\\"0.2\\\"\\nlibraryDependencies += \\\"dnsjava\\\" % \\\"dnsjava\\\" % \\\"2.1.7\\\"\\nlibraryDependencies += \\\"com.typesafe.akka\\\" %% \\\"akka-actor\\\" % \\\"2.4.1\\\"\\nlibraryDependencies += \\\"org.scala-lang.modules\\\" % \\\"scala-jline\\\" % \\\"2.12.1\\\"\\nlibraryDependencies += \\\"net.ruippeixotog\\\" %% \\\"scala-scraper\\\" % \\\"1.0.0\\\""
      }
    }
  }'
```

`POST /test/sbt`

You can test your `sbt` packages for issues according to their manifest file using this action. It takes a JSON object containing a the "target" `build.sbt`.

> Body parameter

```json
{
  "encoding": "base64",
  "files": {
    "target": {
      "contents": "\\nname := \\\"subsearch\\\"\\n\\nassemblyJarName in assembly := s\\\"subsearch-0.2.0.jar\\\"\\n\\nscalaVersion := \\\"2.11.8\\\"\\n\\nscalacOptions ++= Seq(\\\"-unchecked\\\", \\\"-deprecation\\\")\\n\\nresolvers += Resolver.sonatypeRepo(\\\"public\\\")\\n\\nlibraryDependencies += \\\"org.scalatest\\\" % \\\"scalatest_2.11\\\" % \\\"2.2.1\\\" % \\\"test\\\"\\nlibraryDependencies += \\\"org.scalamock\\\" %% \\\"scalamock-scalatest-support\\\" % \\\"3.2.2\\\" % \\\"test\\\"\\nlibraryDependencies += \\\"net.databinder.dispatch\\\" %% \\\"dispatch-core\\\" % \\\"0.11.2\\\"\\nlibraryDependencies += \\\"org.slf4j\\\" % \\\"slf4j-simple\\\" % \\\"1.6.6\\\"\\nlibraryDependencies += \\\"com.github.scopt\\\" %% \\\"scopt\\\" % \\\"3.4.0\\\"\\nlibraryDependencies += \\\"pl.project13.scala\\\" %% \\\"rainbow\\\" % \\\"0.2\\\"\\nlibraryDependencies += \\\"dnsjava\\\" % \\\"dnsjava\\\" % \\\"2.1.7\\\"\\nlibraryDependencies += \\\"com.typesafe.akka\\\" %% \\\"akka-actor\\\" % \\\"2.4.1\\\"\\nlibraryDependencies += \\\"org.scala-lang.modules\\\" % \\\"scala-jline\\\" % \\\"2.12.1\\\"\\nlibraryDependencies += \\\"net.ruippeixotog\\\" %% \\\"scala-scraper\\\" % \\\"1.0.0\\\""
    }
  }
}
```

<h3 id="test-sbt-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» encoding|body|string|false|the encoding for the manifest files sent.|
|» files|body|object|true|The manifest files:|
|» » target|body|object|true|the manifest file, encoded according the the "encoding" field.|
|» » » contents|body|string|true|The contents of the file, encoded according to the `encoding` field.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encoding|plain|
|» encoding|base64|

> Example responses

> 200 Response

````json
{
  "dependencyCount": 44,
  "issues": {
    "licenses": [
      {
        "from": [
          "net.databinder.dispatch:dispatch-core_2.11@0.11.2"
        ],
        "id": "snyk:lic:maven:net.databinder.dispatch:dispatch-core_2.11:LGPL-3.0",
        "language": "java",
        "package": "net.databinder.dispatch:dispatch-core_2.11",
        "packageManager": "maven",
        "semver": {
          "vulnerable": [
            "[0,)"
          ]
        },
        "severity": "medium",
        "title": "LGPL-3.0 license",
        "type": "license",
        "url": "https://snyk.io/vuln/snyk:lic:maven:net.databinder.dispatch:dispatch-core_2.11:LGPL-3.0",
        "version": "0.11.2"
      },
      {
        "from": [
          "net.ruippeixotog:scala-scraper_2.11@1.0.0",
          "net.sourceforge.htmlunit:htmlunit@2.20",
          "net.sourceforge.cssparser:cssparser@0.9.18"
        ],
        "id": "snyk:lic:maven:net.sourceforge.cssparser:cssparser:LGPL-2.0",
        "language": "java",
        "package": "net.sourceforge.cssparser:cssparser",
        "packageManager": "maven",
        "semver": {
          "vulnerable": [
            "[0.9.6, 0.9.19)"
          ]
        },
        "severity": "medium",
        "title": "LGPL-2.0 license",
        "type": "license",
        "url": "https://snyk.io/vuln/snyk:lic:maven:net.sourceforge.cssparser:cssparser:LGPL-2.0",
        "version": "0.9.18"
      },
      {
        "from": [
          "net.ruippeixotog:scala-scraper_2.11@1.0.0",
          "net.sourceforge.htmlunit:htmlunit@2.20",
          "net.sourceforge.htmlunit:htmlunit-core-js@2.17"
        ],
        "id": "snyk:lic:maven:net.sourceforge.htmlunit:htmlunit-core-js:MPL-2.0",
        "language": "java",
        "package": "net.sourceforge.htmlunit:htmlunit-core-js",
        "packageManager": "maven",
        "semver": {
          "vulnerable": [
            "[2.11,)"
          ]
        },
        "severity": "medium",
        "title": "MPL-2.0 license",
        "type": "license",
        "url": "https://snyk.io/vuln/snyk:lic:maven:net.sourceforge.htmlunit:htmlunit-core-js:MPL-2.0",
        "version": "2.17"
      }
    ],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:L/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 4.3,
        "description": "## Overview\n[`com.ning:async-http-client`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22async-http-client%22)\nAsync Http Client (aka AHC or async-http-client) before 1.9.0 skips X.509 certificate verification unless both a keyStore location and a trustStore location are explicitly set, which allows man-in-the-middle attackers to spoof HTTPS servers by presenting an arbitrary certificate during use of a typical AHC configuration, as demonstrated by a configuration that does not send client certificates.\n\n## References\n- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-7397)\n- [OSS Security](http://openwall.com/lists/oss-security/2014/08/26/1)\n- [GitHub Issue](https://github.com/AsyncHttpClient/async-http-client/issues/352)\n- [GitHub Commit](https://github.com/AsyncHttpClient/async-http-client/commit/dfacb8e05d0822c7b2024c452554bd8e1d6221d8)\n",
        "disclosureTime": "2015-06-24T16:59:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "net.databinder.dispatch:dispatch-core_2.11@0.11.2",
          "com.ning:async-http-client@1.8.10"
        ],
        "functions": [],
        "id": "SNYK-JAVA-COMNING-30317",
        "identifiers": {
          "CVE": [
            "CVE-2013-7397"
          ],
          "CWE": [
            "CWE-345"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "com.ning:async-http-client",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2017-03-28T08:29:28.375000Z",
        "semver": {
          "vulnerable": [
            "[,1.9.0)"
          ]
        },
        "severity": "medium",
        "title": "Insufficient Verification of Data Authenticity",
        "type": "vuln",
        "upgradePath": [
          "net.databinder.dispatch:dispatch-core_2.11@0.11.3",
          "com.ning:async-http-client@1.9.11"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-COMNING-30317",
        "version": "1.8.10"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:L/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 4.3,
        "description": "## Overview\n[`com.ning:async-http-client`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22async-http-client%22)\nmain/java/com/ning/http/client/AsyncHttpClientConfig.java in Async Http Client (aka AHC or async-http-client) before 1.9.0 does not require a hostname match during verification of X.509 certificates, which allows man-in-the-middle attackers to spoof HTTPS servers via an arbitrary valid certificate.\n\n## References\n- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-7398)\n- [GitHub Commit](https://github.com/AsyncHttpClient/async-http-client/issues/197)\n- [GitHub Commit](https://github.com/AsyncHttpClient/async-http-client/commit/dfacb8e05d0822c7b2024c452554bd8e1d6221d8)\n- [OSS Security](http://openwall.com/lists/oss-security/2014/08/26/1)\n",
        "disclosureTime": "2015-06-24T16:59:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "net.databinder.dispatch:dispatch-core_2.11@0.11.2",
          "com.ning:async-http-client@1.8.10"
        ],
        "functions": [],
        "id": "SNYK-JAVA-COMNING-30318",
        "identifiers": {
          "CVE": [
            "CVE-2013-7398"
          ],
          "CWE": [
            "CWE-345"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "com.ning:async-http-client",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2017-03-28T08:29:28.445000Z",
        "semver": {
          "vulnerable": [
            "[,1.9.0)"
          ]
        },
        "severity": "medium",
        "title": "Insufficient Verification of Data Authenticity",
        "type": "vuln",
        "upgradePath": [
          "net.databinder.dispatch:dispatch-core_2.11@0.11.3",
          "com.ning:async-http-client@1.9.11"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-COMNING-30318",
        "version": "1.8.10"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
        "credit": [
          "Roman Shafigullin",
          "Luca Carettoni",
          "Mukul Khullar"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\n\n[io.netty:netty](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22netty%22) is a NIO client server framework which enables quick and easy development of network applications such as protocol servers and clients.\n\n\nAffected versions of this package are vulnerable to Information Disclosure.\nIt does not validate cookie name and value characters, allowing attackers to potentially bypass the `httpOnly` flag on sensitive cookies.\n\n## Remediation\n\nUpgrade `io.netty:netty` to version 3.9.8.Final, 3.10.3.Final or higher.\n\n\n## References\n\n- [GitHub Commit 3.10.3](https://github.com/netty/netty/commit/2caa38a2795fe1f1ae6ceda4d69e826ed7c55e55)\n\n- [GitHub Commit 3.9.8](https://github.com/netty/netty/commit/31815598a2af37f0b71ea94eada70d6659c23752)\n\n- [GitHub Commit 4.0.8](https://github.com/netty/netty/pull/3748/commits/4ac519f534493bb0ca7a77e1c779138a54faa7b9)\n\n- [GitHub PR 3.9.8 and 3.10.3](https://github.com/netty/netty/pull/3754)\n\n- [GitHub PR 4.0.28](https://github.com/netty/netty/pull/3748)\n\n- [Linkedin Security Blog](https://engineering.linkedin.com/security/look-netty_s-recent-security-update-cve--2015--2156)\n\n- [Release Notes 3.9.8 and 3.10.3](http://netty.io/news/2015/05/08/3-9-8-Final-and-3.html)\n\n- [Release Notes 4.0.28](http://netty.io/news/2015/05/07/4-0-28-Final.html)\n",
        "disclosureTime": "2015-04-08T21:44:31Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "net.databinder.dispatch:dispatch-core_2.11@0.11.2",
          "com.ning:async-http-client@1.8.10",
          "io.netty:netty@3.9.2.Final"
        ],
        "functions": [
          {
            "functionId": {
              "className": "org.jboss.netty.handler.codec.http.CookieEncoder",
              "functionName": "encode"
            },
            "version": [
              "[3.10.0,3.10.2)",
              "[3.3.0,3.9.7)"
            ]
          },
          {
            "functionId": {
              "className": "org.jboss.netty.handler.codec.http.cookie.ServerCookieEncoder",
              "functionName": "encode"
            },
            "version": [
              "[3.9.7,3.9.8.Final)",
              "[3.10.2,3.10.3.Final)"
            ]
          }
        ],
        "id": "SNYK-JAVA-IONETTY-30430",
        "identifiers": {
          "CVE": [
            "CVE-2015-2156"
          ],
          "CWE": [
            "CWE-200"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "io.netty:netty",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2015-04-08T21:44:31Z",
        "semver": {
          "vulnerable": [
            "[3.3.0.Final,3.9.8.Final)",
            "[3.10.0.Final,3.10.3.Final)"
          ]
        },
        "severity": "high",
        "title": "Information Disclosure",
        "type": "vuln",
        "upgradePath": [
          "net.databinder.dispatch:dispatch-core_2.11@0.11.4",
          "com.ning:async-http-client@1.9.40",
          "io.netty:netty@3.10.6.Final"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-IONETTY-30430",
        "version": "3.9.2.Final"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N/E:U/RL:O/RC:R",
        "credit": [
          "axeBig"
        ],
        "cvssScore": 6.5,
        "description": "## Overview\n\n[io.netty:netty](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22netty%22) is a NIO client server framework which enables quick and easy development of network applications such as protocol servers and clients.\n\n\nAffected versions of this package are vulnerable to HTTP Request Smuggling.\nNetty mishandles whitespace before the colon in HTTP headers such as a `Transfer-Encoding : chunked` line. This can lead to HTTP request smuggling where an attacker can bypass security controls, gain unauthorized access to sensitive data, and directly compromise other application users.\n\n## Remediation\n\nThere is no fixed version for `io.netty:netty`.\n\n\n## References\n\n- [GitHub Fix Commit](https://github.com/netty/netty/commit/017a9658c97ff1a1355c31a6a1f8bd1ea6f21c8d)\n\n- [GitHub Issue](https://github.com/netty/netty/issues/9571)\n\n- [GitHub PR](https://github.com/netty/netty/pull/9585)\n",
        "disclosureTime": "2019-09-26T17:08:57Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "net.databinder.dispatch:dispatch-core_2.11@0.11.2",
          "com.ning:async-http-client@1.8.10",
          "io.netty:netty@3.9.2.Final"
        ],
        "functions": [],
        "id": "SNYK-JAVA-IONETTY-473694",
        "identifiers": {
          "CVE": [
            "CVE-2019-16869"
          ],
          "CWE": [
            "CWE-113"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "java",
        "package": "io.netty:netty",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2019-09-26T17:08:57Z",
        "semver": {
          "vulnerable": [
            "[0,]"
          ]
        },
        "severity": "medium",
        "title": "HTTP Request Smuggling",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-JAVA-IONETTY-473694",
        "version": "3.9.2.Final"
      },
      {
        "CVSSv3": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:L/E:U/RL:O/RC:R",
        "credit": [
          "ICHIHARA Ryohei"
        ],
        "cvssScore": 5.6,
        "description": "## Overview\n\n[net.sourceforge.htmlunit:htmlunit](http://htmlunit.sourceforge.net) is a GUI-Less browser for Java programs\n\n\nAffected versions of this package are vulnerable to Remote Code Execution (RCE).\nIt initializes Rhino engine improperly, hence a malicious JavaScript code can execute arbitrary Java code on the application.\n\n## Remediation\n\nUpgrade `net.sourceforge.htmlunit:htmlunit` to version 2.37.0 or higher.\n\n\n## References\n\n- [GitHub Commit](https://github.com/HtmlUnit/htmlunit/commit/bc1f58d483cc8854a9c4c1739abd5e04a2eb0367)\n\n- [JvNDB](https://jvn.jp/en/jp/JVN34535327/)\n",
        "disclosureTime": "2020-02-10T09:35:13Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "net.ruippeixotog:scala-scraper_2.11@1.0.0",
          "net.sourceforge.htmlunit:htmlunit@2.20"
        ],
        "functions": [],
        "id": "SNYK-JAVA-NETSOURCEFORGEHTMLUNIT-548471",
        "identifiers": {
          "CVE": [
            "CVE-2020-5529"
          ],
          "CWE": [
            "CWE-284",
            "CWE-94"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": false,
        "language": "java",
        "package": "net.sourceforge.htmlunit:htmlunit",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2020-02-11T09:35:13Z",
        "semver": {
          "vulnerable": [
            "[,2.37.0)"
          ]
        },
        "severity": "medium",
        "title": "Remote Code Execution (RCE)",
        "type": "vuln",
        "upgradePath": [],
        "url": "https://snyk.io/vuln/SNYK-JAVA-NETSOURCEFORGEHTMLUNIT-548471",
        "version": "2.20"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
        "credit": [
          "James Kettle"
        ],
        "cvssScore": 5.3,
        "description": "## Overview\n\n[org.apache.httpcomponents:httpclient](http://hc.apache.org/) is a HttpClient component of the Apache HttpComponents project.\n\n\nAffected versions of this package are vulnerable to Directory Traversal.\nString input by user is not validated for the presence of leading character `/` and is passed to the constructor as `path` information, resulting in a Directory Traversal vulnerability.\n\n## Details\nA Directory Traversal attack (also known as path traversal) aims to access files and directories that are stored outside the intended folder. By manipulating files with \"dot-dot-slash (../)\" sequences and its variations, or by using absolute file paths, it may be possible to access arbitrary files and directories stored on file system, including application source code, configuration, and other critical system files.\r\n\r\nDirectory Traversal vulnerabilities can be generally divided into two types:\r\n\r\n- **Information Disclosure**: Allows the attacker to gain information about the folder structure or read the contents of sensitive files on the system.\r\n\r\n`st` is a module for serving static files on web pages, and contains a [vulnerability of this type](https://snyk.io/vuln/npm:st:20140206). In our example, we will serve files from the `public` route.\r\n\r\nIf an attacker requests the following URL from our server, it will in turn leak the sensitive private key of the root user.\r\n\r\n```\r\ncurl http://localhost:8080/public/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/root/.ssh/id_rsa\r\n```\r\n**Note** `%2e` is the URL encoded version of `.` (dot).\r\n\r\n- **Writing arbitrary files**: Allows the attacker to create or replace existing files. This type of vulnerability is also known as `Zip-Slip`. \r\n\r\nOne way to achieve this is by using a malicious `zip` archive that holds path traversal filenames. When each filename in the zip archive gets concatenated to the target extraction folder, without validation, the final path ends up outside of the target folder. If an executable or a configuration file is overwritten with a file containing malicious code, the problem can turn into an arbitrary code execution issue quite easily.\r\n\r\nThe following is an example of a `zip` archive with one benign file and one malicious file. Extracting the malicious file will result in traversing out of the target folder, ending up in `/root/.ssh/` overwriting the `authorized_keys` file:\r\n\r\n```\r\n2018-04-15 22:04:29 .....           19           19  good.txt\r\n2018-04-15 22:04:42 .....           20           20  ../../../../../../root/.ssh/authorized_keys\r\n```\n\n\n## Remediation\n\nUpgrade `org.apache.httpcomponents:httpclient` to version 4.5.3 or higher.\n\n\n## References\n\n- [Github Commit](https://github.com/apache/httpcomponents-client/commit/0554271750599756d4946c0d7ba43d04b1a7b220)\n\n- [Jira Issue](https://issues.apache.org/jira/browse/HTTPCLIENT-1803)\n\n- [Researcher blog post](http://blog.portswigger.net/2017/07/cracking-lens-targeting-https-hidden.html)\n",
        "disclosureTime": "2017-01-17T00:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "net.ruippeixotog:scala-scraper_2.11@1.0.0",
          "net.sourceforge.htmlunit:htmlunit@2.20",
          "org.apache.httpcomponents:httpclient@4.5.2"
        ],
        "functions": [
          {
            "functionId": {
              "className": "org.apache.http.client.utils.URIUtils",
              "functionName": "normalizePath"
            },
            "version": [
              "[4.1,4.1.3]"
            ]
          },
          {
            "functionId": {
              "className": "org.apache.http.client.utils.URIBuilder",
              "functionName": "normalizePath"
            },
            "version": [
              "[4.2.1 ,4.5.2)"
            ]
          }
        ],
        "id": "SNYK-JAVA-ORGAPACHEHTTPCOMPONENTS-31517",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-23"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.apache.httpcomponents:httpclient",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2017-09-20T00:00:00Z",
        "semver": {
          "vulnerable": [
            "[,4.5.3)"
          ]
        },
        "severity": "medium",
        "title": "Directory Traversal",
        "type": "vuln",
        "upgradePath": [
          "net.ruippeixotog:scala-scraper_2.11@1.2.1",
          "net.sourceforge.htmlunit:htmlunit@2.26"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGAPACHEHTTPCOMPONENTS-31517",
        "version": "4.5.2"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
        "credit": [
          "James Kettle"
        ],
        "cvssScore": 5.3,
        "description": "## Overview\n\n[org.apache.httpcomponents:httpclient](http://hc.apache.org/) is a HttpClient component of the Apache HttpComponents project.\n\n\nAffected versions of this package are vulnerable to Directory Traversal.\nString input by user is not validated for the presence of leading character `/` and is passed to the constructor as `path` information, resulting in a Directory Traversal vulnerability.\n\n## Details\nA Directory Traversal attack (also known as path traversal) aims to access files and directories that are stored outside the intended folder. By manipulating files with \"dot-dot-slash (../)\" sequences and its variations, or by using absolute file paths, it may be possible to access arbitrary files and directories stored on file system, including application source code, configuration, and other critical system files.\r\n\r\nDirectory Traversal vulnerabilities can be generally divided into two types:\r\n\r\n- **Information Disclosure**: Allows the attacker to gain information about the folder structure or read the contents of sensitive files on the system.\r\n\r\n`st` is a module for serving static files on web pages, and contains a [vulnerability of this type](https://snyk.io/vuln/npm:st:20140206). In our example, we will serve files from the `public` route.\r\n\r\nIf an attacker requests the following URL from our server, it will in turn leak the sensitive private key of the root user.\r\n\r\n```\r\ncurl http://localhost:8080/public/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/root/.ssh/id_rsa\r\n```\r\n**Note** `%2e` is the URL encoded version of `.` (dot).\r\n\r\n- **Writing arbitrary files**: Allows the attacker to create or replace existing files. This type of vulnerability is also known as `Zip-Slip`. \r\n\r\nOne way to achieve this is by using a malicious `zip` archive that holds path traversal filenames. When each filename in the zip archive gets concatenated to the target extraction folder, without validation, the final path ends up outside of the target folder. If an executable or a configuration file is overwritten with a file containing malicious code, the problem can turn into an arbitrary code execution issue quite easily.\r\n\r\nThe following is an example of a `zip` archive with one benign file and one malicious file. Extracting the malicious file will result in traversing out of the target folder, ending up in `/root/.ssh/` overwriting the `authorized_keys` file:\r\n\r\n```\r\n2018-04-15 22:04:29 .....           19           19  good.txt\r\n2018-04-15 22:04:42 .....           20           20  ../../../../../../root/.ssh/authorized_keys\r\n```\n\n\n## Remediation\n\nUpgrade `org.apache.httpcomponents:httpclient` to version 4.5.3 or higher.\n\n\n## References\n\n- [Github Commit](https://github.com/apache/httpcomponents-client/commit/0554271750599756d4946c0d7ba43d04b1a7b220)\n\n- [Jira Issue](https://issues.apache.org/jira/browse/HTTPCLIENT-1803)\n\n- [Researcher blog post](http://blog.portswigger.net/2017/07/cracking-lens-targeting-https-hidden.html)\n",
        "disclosureTime": "2017-01-17T00:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "net.ruippeixotog:scala-scraper_2.11@1.0.0",
          "net.sourceforge.htmlunit:htmlunit@2.20",
          "org.apache.httpcomponents:httpmime@4.5.2",
          "org.apache.httpcomponents:httpclient@4.5.2"
        ],
        "functions": [
          {
            "functionId": {
              "className": "org.apache.http.client.utils.URIUtils",
              "functionName": "normalizePath"
            },
            "version": [
              "[4.1,4.1.3]"
            ]
          },
          {
            "functionId": {
              "className": "org.apache.http.client.utils.URIBuilder",
              "functionName": "normalizePath"
            },
            "version": [
              "[4.2.1 ,4.5.2)"
            ]
          }
        ],
        "id": "SNYK-JAVA-ORGAPACHEHTTPCOMPONENTS-31517",
        "identifiers": {
          "CVE": [],
          "CWE": [
            "CWE-23"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.apache.httpcomponents:httpclient",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2017-09-20T00:00:00Z",
        "semver": {
          "vulnerable": [
            "[,4.5.3)"
          ]
        },
        "severity": "medium",
        "title": "Directory Traversal",
        "type": "vuln",
        "upgradePath": [
          "net.ruippeixotog:scala-scraper_2.11@1.2.1",
          "net.sourceforge.htmlunit:htmlunit@2.26",
          "org.apache.httpcomponents:httpmime@4.5.3",
          "org.apache.httpcomponents:httpclient@4.5.3"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGAPACHEHTTPCOMPONENTS-31517",
        "version": "4.5.2"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:N/I:L/A:N/E:F",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 4.7,
        "description": "## Overview\n\n[org.eclipse.jetty:jetty-util](https://www.eclipse.org/jetty) is a Web Container & Clients - supports HTTP/2, HTTP/1.1, HTTP/1.0, websocket, servlets, and more.\n\n\nAffected versions of this package are vulnerable to Cross-site Scripting (XSS)\nwhen a remote client uses a specially formatted URL against the `DefaultServlet` or `ResourceHandler` that is configured for showing a listing of directory contents.\n\n## Details\nA cross-site scripting attack occurs when the attacker tricks a legitimate web-based application or site to accept a request as originating from a trusted source.\r\n\r\nThis is done by escaping the context of the web application; the web application then delivers that data to its users along with other trusted dynamic content, without validating it. The browser unknowingly executes malicious script on the client side (through client-side languages; usually JavaScript or HTML)  in order to perform actions that are otherwise typically blocked by the browser’s Same Origin Policy.\r\n\r\nֿInjecting malicious code is the most prevalent manner by which XSS is exploited; for this reason, escaping characters in order to prevent this manipulation is the top method for securing code against this vulnerability.\r\n\r\nEscaping means that the application is coded to mark key characters, and particularly key characters included in user input, to prevent those characters from being interpreted in a dangerous context. For example, in HTML, `<` can be coded as  `&lt`; and `>` can be coded as `&gt`; in order to be interpreted and displayed as themselves in text, while within the code itself, they are used for HTML tags. If malicious content is injected into an application that escapes special characters and that malicious content uses `<` and `>` as HTML tags, those characters are nonetheless not interpreted as HTML tags by the browser if they’ve been correctly escaped in the application code and in this way the attempted attack is diverted.\r\n \r\nThe most prominent use of XSS is to steal cookies (source: OWASP HttpOnly) and hijack user sessions, but XSS exploits have been used to expose sensitive information, enable access to privileged services and functionality and deliver malware. \r\n\r\n### Types of attacks\r\nThere are a few methods by which XSS can be manipulated:\r\n\r\n|Type|Origin|Description|\r\n|--|--|--|\r\n|**Stored**|Server|The malicious code is inserted in the application (usually as a link) by the attacker. The code is activated every time a user clicks the link.|\r\n|**Reflected**|Server|The attacker delivers a malicious link externally from the vulnerable web site application to a user. When clicked, malicious code is sent to the vulnerable web site, which reflects the attack back to the user’s browser.| \r\n|**DOM-based**|Client|The attacker forces the user’s browser to render a malicious page. The data in the page itself delivers the cross-site scripting data.|\r\n|**Mutated**| |The attacker injects code that appears safe, but is then rewritten and modified by the browser, while parsing the markup. An example is rebalancing unclosed quotation marks or even adding quotation marks to unquoted parameters.|\r\n\r\n### Affected environments\r\nThe following environments are susceptible to an XSS attack:\r\n\r\n* Web servers\r\n* Application servers\r\n* Web application environments\r\n\r\n### How to prevent\r\nThis section describes the top best practices designed to specifically protect your code: \r\n\r\n* Sanitize data input in an HTTP request before reflecting it back, ensuring all data is validated, filtered or escaped before echoing anything back to the user, such as the values of query parameters during searches. \r\n* Convert special characters such as `?`, `&`, `/`, `<`, `>` and spaces to their respective HTML or URL encoded equivalents. \r\n* Give users the option to disable client-side scripts.\r\n* Redirect invalid requests.\r\n* Detect simultaneous logins, including those from two separate IP addresses, and invalidate those sessions.\r\n* Use and enforce a Content Security Policy (source: Wikipedia) to disable any features that might be manipulated for an XSS attack.\r\n* Read the documentation for any of the libraries referenced in your code to understand which elements allow for embedded HTML.\n\n## Remediation\n\nUpgrade `org.eclipse.jetty:jetty-util` to version 9.2.27.v20190403, 9.3.26.v20190403, 9.4.16.v20190411 or higher.\n\n\n## References\n\n- [Eclipse Report](https://bugs.eclipse.org/bugs/show_bug.cgi?id=546121)\n\n- [GitHub Commit](https://github.com/eclipse/jetty.project/commit/ca77bd384a2970cabbbdab25cf6251c6fb76cd21)\n",
        "disclosureTime": "2019-04-22T21:08:57Z",
        "exploitMaturity": "mature",
        "from": [
          "net.ruippeixotog:scala-scraper_2.11@1.0.0",
          "net.sourceforge.htmlunit:htmlunit@2.20",
          "org.eclipse.jetty.websocket:websocket-client@9.2.15.v20160210",
          "org.eclipse.jetty:jetty-util@9.2.15.v20160210"
        ],
        "functions": [],
        "id": "SNYK-JAVA-ORGECLIPSEJETTY-174479",
        "identifiers": {
          "CVE": [
            "CVE-2019-10241"
          ],
          "CWE": [
            "CWE-79"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.eclipse.jetty:jetty-util",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2019-04-22T21:08:57Z",
        "semver": {
          "vulnerable": [
            "[9.2.0.M0,9.2.27.v20190403)",
            "[9.3.0.M0, 9.3.26.v20190403)",
            "[9.4.15.v20190215, 9.4.16.v20190411)"
          ]
        },
        "severity": "medium",
        "title": "Cross-site Scripting (XSS)",
        "type": "vuln",
        "upgradePath": [
          "net.ruippeixotog:scala-scraper_2.11@1.2.1",
          "net.sourceforge.htmlunit:htmlunit@2.26",
          "org.eclipse.jetty.websocket:websocket-client@9.4.3.v20170317",
          "org.eclipse.jetty:jetty-util@9.4.3.v20170317"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGECLIPSEJETTY-174479",
        "version": "9.2.15.v20160210"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:N/I:L/A:N/E:F",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 4.7,
        "description": "## Overview\n\n[org.eclipse.jetty:jetty-util](https://www.eclipse.org/jetty) is a Web Container & Clients - supports HTTP/2, HTTP/1.1, HTTP/1.0, websocket, servlets, and more.\n\n\nAffected versions of this package are vulnerable to Cross-site Scripting (XSS)\nwhen a remote client uses a specially formatted URL against the `DefaultServlet` or `ResourceHandler` that is configured for showing a listing of directory contents.\n\n## Details\nA cross-site scripting attack occurs when the attacker tricks a legitimate web-based application or site to accept a request as originating from a trusted source.\r\n\r\nThis is done by escaping the context of the web application; the web application then delivers that data to its users along with other trusted dynamic content, without validating it. The browser unknowingly executes malicious script on the client side (through client-side languages; usually JavaScript or HTML)  in order to perform actions that are otherwise typically blocked by the browser’s Same Origin Policy.\r\n\r\nֿInjecting malicious code is the most prevalent manner by which XSS is exploited; for this reason, escaping characters in order to prevent this manipulation is the top method for securing code against this vulnerability.\r\n\r\nEscaping means that the application is coded to mark key characters, and particularly key characters included in user input, to prevent those characters from being interpreted in a dangerous context. For example, in HTML, `<` can be coded as  `&lt`; and `>` can be coded as `&gt`; in order to be interpreted and displayed as themselves in text, while within the code itself, they are used for HTML tags. If malicious content is injected into an application that escapes special characters and that malicious content uses `<` and `>` as HTML tags, those characters are nonetheless not interpreted as HTML tags by the browser if they’ve been correctly escaped in the application code and in this way the attempted attack is diverted.\r\n \r\nThe most prominent use of XSS is to steal cookies (source: OWASP HttpOnly) and hijack user sessions, but XSS exploits have been used to expose sensitive information, enable access to privileged services and functionality and deliver malware. \r\n\r\n### Types of attacks\r\nThere are a few methods by which XSS can be manipulated:\r\n\r\n|Type|Origin|Description|\r\n|--|--|--|\r\n|**Stored**|Server|The malicious code is inserted in the application (usually as a link) by the attacker. The code is activated every time a user clicks the link.|\r\n|**Reflected**|Server|The attacker delivers a malicious link externally from the vulnerable web site application to a user. When clicked, malicious code is sent to the vulnerable web site, which reflects the attack back to the user’s browser.| \r\n|**DOM-based**|Client|The attacker forces the user’s browser to render a malicious page. The data in the page itself delivers the cross-site scripting data.|\r\n|**Mutated**| |The attacker injects code that appears safe, but is then rewritten and modified by the browser, while parsing the markup. An example is rebalancing unclosed quotation marks or even adding quotation marks to unquoted parameters.|\r\n\r\n### Affected environments\r\nThe following environments are susceptible to an XSS attack:\r\n\r\n* Web servers\r\n* Application servers\r\n* Web application environments\r\n\r\n### How to prevent\r\nThis section describes the top best practices designed to specifically protect your code: \r\n\r\n* Sanitize data input in an HTTP request before reflecting it back, ensuring all data is validated, filtered or escaped before echoing anything back to the user, such as the values of query parameters during searches. \r\n* Convert special characters such as `?`, `&`, `/`, `<`, `>` and spaces to their respective HTML or URL encoded equivalents. \r\n* Give users the option to disable client-side scripts.\r\n* Redirect invalid requests.\r\n* Detect simultaneous logins, including those from two separate IP addresses, and invalidate those sessions.\r\n* Use and enforce a Content Security Policy (source: Wikipedia) to disable any features that might be manipulated for an XSS attack.\r\n* Read the documentation for any of the libraries referenced in your code to understand which elements allow for embedded HTML.\n\n## Remediation\n\nUpgrade `org.eclipse.jetty:jetty-util` to version 9.2.27.v20190403, 9.3.26.v20190403, 9.4.16.v20190411 or higher.\n\n\n## References\n\n- [Eclipse Report](https://bugs.eclipse.org/bugs/show_bug.cgi?id=546121)\n\n- [GitHub Commit](https://github.com/eclipse/jetty.project/commit/ca77bd384a2970cabbbdab25cf6251c6fb76cd21)\n",
        "disclosureTime": "2019-04-22T21:08:57Z",
        "exploitMaturity": "mature",
        "from": [
          "net.ruippeixotog:scala-scraper_2.11@1.0.0",
          "net.sourceforge.htmlunit:htmlunit@2.20",
          "org.eclipse.jetty.websocket:websocket-client@9.2.15.v20160210",
          "org.eclipse.jetty:jetty-io@9.2.15.v20160210",
          "org.eclipse.jetty:jetty-util@9.2.15.v20160210"
        ],
        "functions": [],
        "id": "SNYK-JAVA-ORGECLIPSEJETTY-174479",
        "identifiers": {
          "CVE": [
            "CVE-2019-10241"
          ],
          "CWE": [
            "CWE-79"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.eclipse.jetty:jetty-util",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2019-04-22T21:08:57Z",
        "semver": {
          "vulnerable": [
            "[9.2.0.M0,9.2.27.v20190403)",
            "[9.3.0.M0, 9.3.26.v20190403)",
            "[9.4.15.v20190215, 9.4.16.v20190411)"
          ]
        },
        "severity": "medium",
        "title": "Cross-site Scripting (XSS)",
        "type": "vuln",
        "upgradePath": [
          "net.ruippeixotog:scala-scraper_2.11@1.2.1",
          "net.sourceforge.htmlunit:htmlunit@2.26",
          "org.eclipse.jetty.websocket:websocket-client@9.4.3.v20170317",
          "org.eclipse.jetty:jetty-io@9.4.3.v20170317",
          "org.eclipse.jetty:jetty-util@9.4.3.v20170317"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGECLIPSEJETTY-174479",
        "version": "9.2.15.v20160210"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:N/I:L/A:N/E:F",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 4.7,
        "description": "## Overview\n\n[org.eclipse.jetty:jetty-util](https://www.eclipse.org/jetty) is a Web Container & Clients - supports HTTP/2, HTTP/1.1, HTTP/1.0, websocket, servlets, and more.\n\n\nAffected versions of this package are vulnerable to Cross-site Scripting (XSS)\nwhen a remote client uses a specially formatted URL against the `DefaultServlet` or `ResourceHandler` that is configured for showing a listing of directory contents.\n\n## Details\nA cross-site scripting attack occurs when the attacker tricks a legitimate web-based application or site to accept a request as originating from a trusted source.\r\n\r\nThis is done by escaping the context of the web application; the web application then delivers that data to its users along with other trusted dynamic content, without validating it. The browser unknowingly executes malicious script on the client side (through client-side languages; usually JavaScript or HTML)  in order to perform actions that are otherwise typically blocked by the browser’s Same Origin Policy.\r\n\r\nֿInjecting malicious code is the most prevalent manner by which XSS is exploited; for this reason, escaping characters in order to prevent this manipulation is the top method for securing code against this vulnerability.\r\n\r\nEscaping means that the application is coded to mark key characters, and particularly key characters included in user input, to prevent those characters from being interpreted in a dangerous context. For example, in HTML, `<` can be coded as  `&lt`; and `>` can be coded as `&gt`; in order to be interpreted and displayed as themselves in text, while within the code itself, they are used for HTML tags. If malicious content is injected into an application that escapes special characters and that malicious content uses `<` and `>` as HTML tags, those characters are nonetheless not interpreted as HTML tags by the browser if they’ve been correctly escaped in the application code and in this way the attempted attack is diverted.\r\n \r\nThe most prominent use of XSS is to steal cookies (source: OWASP HttpOnly) and hijack user sessions, but XSS exploits have been used to expose sensitive information, enable access to privileged services and functionality and deliver malware. \r\n\r\n### Types of attacks\r\nThere are a few methods by which XSS can be manipulated:\r\n\r\n|Type|Origin|Description|\r\n|--|--|--|\r\n|**Stored**|Server|The malicious code is inserted in the application (usually as a link) by the attacker. The code is activated every time a user clicks the link.|\r\n|**Reflected**|Server|The attacker delivers a malicious link externally from the vulnerable web site application to a user. When clicked, malicious code is sent to the vulnerable web site, which reflects the attack back to the user’s browser.| \r\n|**DOM-based**|Client|The attacker forces the user’s browser to render a malicious page. The data in the page itself delivers the cross-site scripting data.|\r\n|**Mutated**| |The attacker injects code that appears safe, but is then rewritten and modified by the browser, while parsing the markup. An example is rebalancing unclosed quotation marks or even adding quotation marks to unquoted parameters.|\r\n\r\n### Affected environments\r\nThe following environments are susceptible to an XSS attack:\r\n\r\n* Web servers\r\n* Application servers\r\n* Web application environments\r\n\r\n### How to prevent\r\nThis section describes the top best practices designed to specifically protect your code: \r\n\r\n* Sanitize data input in an HTTP request before reflecting it back, ensuring all data is validated, filtered or escaped before echoing anything back to the user, such as the values of query parameters during searches. \r\n* Convert special characters such as `?`, `&`, `/`, `<`, `>` and spaces to their respective HTML or URL encoded equivalents. \r\n* Give users the option to disable client-side scripts.\r\n* Redirect invalid requests.\r\n* Detect simultaneous logins, including those from two separate IP addresses, and invalidate those sessions.\r\n* Use and enforce a Content Security Policy (source: Wikipedia) to disable any features that might be manipulated for an XSS attack.\r\n* Read the documentation for any of the libraries referenced in your code to understand which elements allow for embedded HTML.\n\n## Remediation\n\nUpgrade `org.eclipse.jetty:jetty-util` to version 9.2.27.v20190403, 9.3.26.v20190403, 9.4.16.v20190411 or higher.\n\n\n## References\n\n- [Eclipse Report](https://bugs.eclipse.org/bugs/show_bug.cgi?id=546121)\n\n- [GitHub Commit](https://github.com/eclipse/jetty.project/commit/ca77bd384a2970cabbbdab25cf6251c6fb76cd21)\n",
        "disclosureTime": "2019-04-22T21:08:57Z",
        "exploitMaturity": "mature",
        "from": [
          "net.ruippeixotog:scala-scraper_2.11@1.0.0",
          "net.sourceforge.htmlunit:htmlunit@2.20",
          "org.eclipse.jetty.websocket:websocket-client@9.2.15.v20160210",
          "org.eclipse.jetty.websocket:websocket-common@9.2.15.v20160210",
          "org.eclipse.jetty:jetty-util@9.2.15.v20160210"
        ],
        "functions": [],
        "id": "SNYK-JAVA-ORGECLIPSEJETTY-174479",
        "identifiers": {
          "CVE": [
            "CVE-2019-10241"
          ],
          "CWE": [
            "CWE-79"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.eclipse.jetty:jetty-util",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2019-04-22T21:08:57Z",
        "semver": {
          "vulnerable": [
            "[9.2.0.M0,9.2.27.v20190403)",
            "[9.3.0.M0, 9.3.26.v20190403)",
            "[9.4.15.v20190215, 9.4.16.v20190411)"
          ]
        },
        "severity": "medium",
        "title": "Cross-site Scripting (XSS)",
        "type": "vuln",
        "upgradePath": [
          "net.ruippeixotog:scala-scraper_2.11@1.2.1",
          "net.sourceforge.htmlunit:htmlunit@2.26",
          "org.eclipse.jetty.websocket:websocket-client@9.4.3.v20170317",
          "org.eclipse.jetty.websocket:websocket-common@9.4.3.v20170317",
          "org.eclipse.jetty:jetty-util@9.4.3.v20170317"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGECLIPSEJETTY-174479",
        "version": "9.2.15.v20160210"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:N/I:L/A:N/E:F",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 4.7,
        "description": "## Overview\n\n[org.eclipse.jetty:jetty-util](https://www.eclipse.org/jetty) is a Web Container & Clients - supports HTTP/2, HTTP/1.1, HTTP/1.0, websocket, servlets, and more.\n\n\nAffected versions of this package are vulnerable to Cross-site Scripting (XSS)\nwhen a remote client uses a specially formatted URL against the `DefaultServlet` or `ResourceHandler` that is configured for showing a listing of directory contents.\n\n## Details\nA cross-site scripting attack occurs when the attacker tricks a legitimate web-based application or site to accept a request as originating from a trusted source.\r\n\r\nThis is done by escaping the context of the web application; the web application then delivers that data to its users along with other trusted dynamic content, without validating it. The browser unknowingly executes malicious script on the client side (through client-side languages; usually JavaScript or HTML)  in order to perform actions that are otherwise typically blocked by the browser’s Same Origin Policy.\r\n\r\nֿInjecting malicious code is the most prevalent manner by which XSS is exploited; for this reason, escaping characters in order to prevent this manipulation is the top method for securing code against this vulnerability.\r\n\r\nEscaping means that the application is coded to mark key characters, and particularly key characters included in user input, to prevent those characters from being interpreted in a dangerous context. For example, in HTML, `<` can be coded as  `&lt`; and `>` can be coded as `&gt`; in order to be interpreted and displayed as themselves in text, while within the code itself, they are used for HTML tags. If malicious content is injected into an application that escapes special characters and that malicious content uses `<` and `>` as HTML tags, those characters are nonetheless not interpreted as HTML tags by the browser if they’ve been correctly escaped in the application code and in this way the attempted attack is diverted.\r\n \r\nThe most prominent use of XSS is to steal cookies (source: OWASP HttpOnly) and hijack user sessions, but XSS exploits have been used to expose sensitive information, enable access to privileged services and functionality and deliver malware. \r\n\r\n### Types of attacks\r\nThere are a few methods by which XSS can be manipulated:\r\n\r\n|Type|Origin|Description|\r\n|--|--|--|\r\n|**Stored**|Server|The malicious code is inserted in the application (usually as a link) by the attacker. The code is activated every time a user clicks the link.|\r\n|**Reflected**|Server|The attacker delivers a malicious link externally from the vulnerable web site application to a user. When clicked, malicious code is sent to the vulnerable web site, which reflects the attack back to the user’s browser.| \r\n|**DOM-based**|Client|The attacker forces the user’s browser to render a malicious page. The data in the page itself delivers the cross-site scripting data.|\r\n|**Mutated**| |The attacker injects code that appears safe, but is then rewritten and modified by the browser, while parsing the markup. An example is rebalancing unclosed quotation marks or even adding quotation marks to unquoted parameters.|\r\n\r\n### Affected environments\r\nThe following environments are susceptible to an XSS attack:\r\n\r\n* Web servers\r\n* Application servers\r\n* Web application environments\r\n\r\n### How to prevent\r\nThis section describes the top best practices designed to specifically protect your code: \r\n\r\n* Sanitize data input in an HTTP request before reflecting it back, ensuring all data is validated, filtered or escaped before echoing anything back to the user, such as the values of query parameters during searches. \r\n* Convert special characters such as `?`, `&`, `/`, `<`, `>` and spaces to their respective HTML or URL encoded equivalents. \r\n* Give users the option to disable client-side scripts.\r\n* Redirect invalid requests.\r\n* Detect simultaneous logins, including those from two separate IP addresses, and invalidate those sessions.\r\n* Use and enforce a Content Security Policy (source: Wikipedia) to disable any features that might be manipulated for an XSS attack.\r\n* Read the documentation for any of the libraries referenced in your code to understand which elements allow for embedded HTML.\n\n## Remediation\n\nUpgrade `org.eclipse.jetty:jetty-util` to version 9.2.27.v20190403, 9.3.26.v20190403, 9.4.16.v20190411 or higher.\n\n\n## References\n\n- [Eclipse Report](https://bugs.eclipse.org/bugs/show_bug.cgi?id=546121)\n\n- [GitHub Commit](https://github.com/eclipse/jetty.project/commit/ca77bd384a2970cabbbdab25cf6251c6fb76cd21)\n",
        "disclosureTime": "2019-04-22T21:08:57Z",
        "exploitMaturity": "mature",
        "from": [
          "net.ruippeixotog:scala-scraper_2.11@1.0.0",
          "net.sourceforge.htmlunit:htmlunit@2.20",
          "org.eclipse.jetty.websocket:websocket-client@9.2.15.v20160210",
          "org.eclipse.jetty.websocket:websocket-common@9.2.15.v20160210",
          "org.eclipse.jetty:jetty-io@9.2.15.v20160210",
          "org.eclipse.jetty:jetty-util@9.2.15.v20160210"
        ],
        "functions": [],
        "id": "SNYK-JAVA-ORGECLIPSEJETTY-174479",
        "identifiers": {
          "CVE": [
            "CVE-2019-10241"
          ],
          "CWE": [
            "CWE-79"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.eclipse.jetty:jetty-util",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2019-04-22T21:08:57Z",
        "semver": {
          "vulnerable": [
            "[9.2.0.M0,9.2.27.v20190403)",
            "[9.3.0.M0, 9.3.26.v20190403)",
            "[9.4.15.v20190215, 9.4.16.v20190411)"
          ]
        },
        "severity": "medium",
        "title": "Cross-site Scripting (XSS)",
        "type": "vuln",
        "upgradePath": [
          "net.ruippeixotog:scala-scraper_2.11@1.2.1",
          "net.sourceforge.htmlunit:htmlunit@2.26",
          "org.eclipse.jetty.websocket:websocket-client@9.4.3.v20170317",
          "org.eclipse.jetty.websocket:websocket-common@9.4.3.v20170317",
          "org.eclipse.jetty:jetty-io@9.4.3.v20170317",
          "org.eclipse.jetty:jetty-util@9.4.3.v20170317"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGECLIPSEJETTY-174479",
        "version": "9.2.15.v20160210"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\r\n[org.eclipse.jetty:jetty-util](https://github.com/eclipse/jetty.project)  is a lightweight highly scalable java based web server and servlet engine.\r\n\r\nAffected versions of this package are vulnerable to Timing Attacks. A flaw in the `util/security/Password.java` class makes it easier for remote attackers to obtain access by observing elapsed times before rejection of incorrect passwords.\r\n\r\n## Remediation\r\nUpgrade `org.eclipse.jetty:jetty-util` to versions 9.2.22, 9.3.20, 9.4.6 or higher.\r\n\r\n## References\r\n- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-9735)\r\n- [GitHub Issue](https://github.com/eclipse/jetty.project/issues/1556)",
        "disclosureTime": "2017-06-16T21:29:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "net.ruippeixotog:scala-scraper_2.11@1.0.0",
          "net.sourceforge.htmlunit:htmlunit@2.20",
          "org.eclipse.jetty.websocket:websocket-client@9.2.15.v20160210",
          "org.eclipse.jetty:jetty-util@9.2.15.v20160210"
        ],
        "functions": [
          {
            "functionId": {
              "className": "org.eclipse.jetty.util.security.Credential",
              "functionName": "check"
            },
            "version": [
              "(8.0.4.v20111024 ,9.2.22.v20170606)",
              "[9.3.0, 9.3.20.v20170531)",
              "[9.4.0, 9.4.6.v20170531)"
            ]
          },
          {
            "functionId": {
              "className": "org.eclipse.jetty.util.security.Password",
              "functionName": "check"
            },
            "version": [
              "(8.0.4.v20111024 ,9.2.22.v20170606)",
              "[9.3.0, 9.3.20.v20170531)",
              "[9.4.0, 9.4.6.v20170531)"
            ]
          }
        ],
        "id": "SNYK-JAVA-ORGECLIPSEJETTY-32151",
        "identifiers": {
          "CVE": [
            "CVE-2017-9735"
          ],
          "CWE": [
            "CWE-200"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.eclipse.jetty:jetty-util",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2018-04-03T08:07:27Z",
        "semver": {
          "vulnerable": [
            "[,9.2.22.v20170606)",
            "[9.3.0.M0, 9.3.20.v20170531)",
            "[9.4.0.M0, 9.4.6.v20170531)"
          ]
        },
        "severity": "high",
        "title": "Timing Attack",
        "type": "vuln",
        "upgradePath": [
          "net.ruippeixotog:scala-scraper_2.11@2.1.0",
          "net.sourceforge.htmlunit:htmlunit@2.29",
          "org.eclipse.jetty.websocket:websocket-client@9.4.8.v20171121",
          "org.eclipse.jetty:jetty-util@9.4.8.v20171121"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGECLIPSEJETTY-32151",
        "version": "9.2.15.v20160210"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\r\n[org.eclipse.jetty:jetty-util](https://github.com/eclipse/jetty.project)  is a lightweight highly scalable java based web server and servlet engine.\r\n\r\nAffected versions of this package are vulnerable to Timing Attacks. A flaw in the `util/security/Password.java` class makes it easier for remote attackers to obtain access by observing elapsed times before rejection of incorrect passwords.\r\n\r\n## Remediation\r\nUpgrade `org.eclipse.jetty:jetty-util` to versions 9.2.22, 9.3.20, 9.4.6 or higher.\r\n\r\n## References\r\n- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-9735)\r\n- [GitHub Issue](https://github.com/eclipse/jetty.project/issues/1556)",
        "disclosureTime": "2017-06-16T21:29:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "net.ruippeixotog:scala-scraper_2.11@1.0.0",
          "net.sourceforge.htmlunit:htmlunit@2.20",
          "org.eclipse.jetty.websocket:websocket-client@9.2.15.v20160210",
          "org.eclipse.jetty:jetty-io@9.2.15.v20160210",
          "org.eclipse.jetty:jetty-util@9.2.15.v20160210"
        ],
        "functions": [
          {
            "functionId": {
              "className": "org.eclipse.jetty.util.security.Credential",
              "functionName": "check"
            },
            "version": [
              "(8.0.4.v20111024 ,9.2.22.v20170606)",
              "[9.3.0, 9.3.20.v20170531)",
              "[9.4.0, 9.4.6.v20170531)"
            ]
          },
          {
            "functionId": {
              "className": "org.eclipse.jetty.util.security.Password",
              "functionName": "check"
            },
            "version": [
              "(8.0.4.v20111024 ,9.2.22.v20170606)",
              "[9.3.0, 9.3.20.v20170531)",
              "[9.4.0, 9.4.6.v20170531)"
            ]
          }
        ],
        "id": "SNYK-JAVA-ORGECLIPSEJETTY-32151",
        "identifiers": {
          "CVE": [
            "CVE-2017-9735"
          ],
          "CWE": [
            "CWE-200"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.eclipse.jetty:jetty-util",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2018-04-03T08:07:27Z",
        "semver": {
          "vulnerable": [
            "[,9.2.22.v20170606)",
            "[9.3.0.M0, 9.3.20.v20170531)",
            "[9.4.0.M0, 9.4.6.v20170531)"
          ]
        },
        "severity": "high",
        "title": "Timing Attack",
        "type": "vuln",
        "upgradePath": [
          "net.ruippeixotog:scala-scraper_2.11@2.1.0",
          "net.sourceforge.htmlunit:htmlunit@2.29",
          "org.eclipse.jetty.websocket:websocket-client@9.4.8.v20171121",
          "org.eclipse.jetty:jetty-io@9.4.8.v20171121",
          "org.eclipse.jetty:jetty-util@9.4.8.v20171121"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGECLIPSEJETTY-32151",
        "version": "9.2.15.v20160210"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\r\n[org.eclipse.jetty:jetty-util](https://github.com/eclipse/jetty.project)  is a lightweight highly scalable java based web server and servlet engine.\r\n\r\nAffected versions of this package are vulnerable to Timing Attacks. A flaw in the `util/security/Password.java` class makes it easier for remote attackers to obtain access by observing elapsed times before rejection of incorrect passwords.\r\n\r\n## Remediation\r\nUpgrade `org.eclipse.jetty:jetty-util` to versions 9.2.22, 9.3.20, 9.4.6 or higher.\r\n\r\n## References\r\n- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-9735)\r\n- [GitHub Issue](https://github.com/eclipse/jetty.project/issues/1556)",
        "disclosureTime": "2017-06-16T21:29:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "net.ruippeixotog:scala-scraper_2.11@1.0.0",
          "net.sourceforge.htmlunit:htmlunit@2.20",
          "org.eclipse.jetty.websocket:websocket-client@9.2.15.v20160210",
          "org.eclipse.jetty.websocket:websocket-common@9.2.15.v20160210",
          "org.eclipse.jetty:jetty-util@9.2.15.v20160210"
        ],
        "functions": [
          {
            "functionId": {
              "className": "org.eclipse.jetty.util.security.Credential",
              "functionName": "check"
            },
            "version": [
              "(8.0.4.v20111024 ,9.2.22.v20170606)",
              "[9.3.0, 9.3.20.v20170531)",
              "[9.4.0, 9.4.6.v20170531)"
            ]
          },
          {
            "functionId": {
              "className": "org.eclipse.jetty.util.security.Password",
              "functionName": "check"
            },
            "version": [
              "(8.0.4.v20111024 ,9.2.22.v20170606)",
              "[9.3.0, 9.3.20.v20170531)",
              "[9.4.0, 9.4.6.v20170531)"
            ]
          }
        ],
        "id": "SNYK-JAVA-ORGECLIPSEJETTY-32151",
        "identifiers": {
          "CVE": [
            "CVE-2017-9735"
          ],
          "CWE": [
            "CWE-200"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.eclipse.jetty:jetty-util",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2018-04-03T08:07:27Z",
        "semver": {
          "vulnerable": [
            "[,9.2.22.v20170606)",
            "[9.3.0.M0, 9.3.20.v20170531)",
            "[9.4.0.M0, 9.4.6.v20170531)"
          ]
        },
        "severity": "high",
        "title": "Timing Attack",
        "type": "vuln",
        "upgradePath": [
          "net.ruippeixotog:scala-scraper_2.11@2.1.0",
          "net.sourceforge.htmlunit:htmlunit@2.29",
          "org.eclipse.jetty.websocket:websocket-client@9.4.8.v20171121",
          "org.eclipse.jetty.websocket:websocket-common@9.4.8.v20171121",
          "org.eclipse.jetty:jetty-util@9.4.8.v20171121"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGECLIPSEJETTY-32151",
        "version": "9.2.15.v20160210"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\r\n[org.eclipse.jetty:jetty-util](https://github.com/eclipse/jetty.project)  is a lightweight highly scalable java based web server and servlet engine.\r\n\r\nAffected versions of this package are vulnerable to Timing Attacks. A flaw in the `util/security/Password.java` class makes it easier for remote attackers to obtain access by observing elapsed times before rejection of incorrect passwords.\r\n\r\n## Remediation\r\nUpgrade `org.eclipse.jetty:jetty-util` to versions 9.2.22, 9.3.20, 9.4.6 or higher.\r\n\r\n## References\r\n- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-9735)\r\n- [GitHub Issue](https://github.com/eclipse/jetty.project/issues/1556)",
        "disclosureTime": "2017-06-16T21:29:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "net.ruippeixotog:scala-scraper_2.11@1.0.0",
          "net.sourceforge.htmlunit:htmlunit@2.20",
          "org.eclipse.jetty.websocket:websocket-client@9.2.15.v20160210",
          "org.eclipse.jetty.websocket:websocket-common@9.2.15.v20160210",
          "org.eclipse.jetty:jetty-io@9.2.15.v20160210",
          "org.eclipse.jetty:jetty-util@9.2.15.v20160210"
        ],
        "functions": [
          {
            "functionId": {
              "className": "org.eclipse.jetty.util.security.Credential",
              "functionName": "check"
            },
            "version": [
              "(8.0.4.v20111024 ,9.2.22.v20170606)",
              "[9.3.0, 9.3.20.v20170531)",
              "[9.4.0, 9.4.6.v20170531)"
            ]
          },
          {
            "functionId": {
              "className": "org.eclipse.jetty.util.security.Password",
              "functionName": "check"
            },
            "version": [
              "(8.0.4.v20111024 ,9.2.22.v20170606)",
              "[9.3.0, 9.3.20.v20170531)",
              "[9.4.0, 9.4.6.v20170531)"
            ]
          }
        ],
        "id": "SNYK-JAVA-ORGECLIPSEJETTY-32151",
        "identifiers": {
          "CVE": [
            "CVE-2017-9735"
          ],
          "CWE": [
            "CWE-200"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.eclipse.jetty:jetty-util",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2018-04-03T08:07:27Z",
        "semver": {
          "vulnerable": [
            "[,9.2.22.v20170606)",
            "[9.3.0.M0, 9.3.20.v20170531)",
            "[9.4.0.M0, 9.4.6.v20170531)"
          ]
        },
        "severity": "high",
        "title": "Timing Attack",
        "type": "vuln",
        "upgradePath": [
          "net.ruippeixotog:scala-scraper_2.11@2.1.0",
          "net.sourceforge.htmlunit:htmlunit@2.29",
          "org.eclipse.jetty.websocket:websocket-client@9.4.8.v20171121",
          "org.eclipse.jetty.websocket:websocket-common@9.4.8.v20171121",
          "org.eclipse.jetty:jetty-io@9.4.8.v20171121",
          "org.eclipse.jetty:jetty-util@9.4.8.v20171121"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGECLIPSEJETTY-32151",
        "version": "9.2.15.v20160210"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
        "credit": [
          "Unknown"
        ],
        "cvssScore": 7.8,
        "description": "## Overview\nAffected versions of [`org.scala-lang:scala-compiler`](https://scala-lang.org) are vulnerable to Arbitrary Code Execution.\n\nThe compilation daemon in Scala before 2.10.7, 2.11.x before 2.11.12, and 2.12.x before 2.12.4 uses weak permissions for private files in /tmp/scala-devel/${USER:shared}/scalac-compile-server-port, which allows local users to write to arbitrary class files and consequently gain privileges.\n\n## Remediation\nUpgrade `org.scala-lang:scala-compiler` to version 2.12.4 or higher.\n\n## References\n- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-15288)\n- [GitHub PR #1](https://github.com/scala/scala/pull/6108)\n- [GitHub PR #2](https://github.com/scala/scala/pull/6120)\n- [GitHub PR #3](https://github.com/scala/scala/pull/6128)\n- [GitHub Commit #1](https://github.com/scala/scala/commit/f3419fc358a8ea6e366538126279da88d4d1fb1f)\n- [GitHub Commit #2](https://github.com/scala/scala/commit/67fcf5ce4496000574676d81ed72e4a6cb9e7757)\n- [GitHub Commit #3](https://github.com/scala/scala/commit/0f624c5e5bdb39967e208c7c16067c3e6c903f1f)\n",
        "disclosureTime": "2017-10-02T21:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "net.ruippeixotog:scala-scraper_2.11@1.0.0",
          "org.scala-lang:scala-compiler@2.11.8"
        ],
        "functions": [],
        "id": "SNYK-JAVA-ORGSCALALANG-31592",
        "identifiers": {
          "CVE": [
            "CVE-2017-15288"
          ],
          "CWE": [
            "CWE-94"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.scala-lang:scala-compiler",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2017-11-28T14:47:22.036000Z",
        "semver": {
          "vulnerable": [
            "[,2.10.7),[2.11,2.11.12),[2.12,2.12.4)"
          ]
        },
        "severity": "high",
        "title": "Arbitrary Code Execution",
        "type": "vuln",
        "upgradePath": [
          "net.ruippeixotog:scala-scraper_2.11@1.1.0"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGSCALALANG-31592",
        "version": "2.11.8"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "4a18d42f-0706-4ad0-b127-24078731fbed",
    "name": "atokeneduser"
  },
  "packageManager": "sbt"
}
````

<h3 id="test-sbt-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test for issues in a public package by group id, artifact id and version

> Code samples

```bash
curl https://example.com/test/sbt/org.apache.flex.blazeds/blazeds/4.7.2 \
  -H 'Accept: application/json'
```

`GET /test/sbt/{groupId}/{artifactId}/{version}`

You can test `sbt` packages for issues according to their group ID, artifact ID and version. This is done via the maven endpoint (for Java), since the packages are hosted on maven central or a compatible repository. See "Maven" above for details.

<h3 id="test-for-issues-in-a-public-package-by-group-id-artifact-id-and-version-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The package's group ID.|
|artifactId|path|string|true|The package's artifact ID.|
|version|path|string|true|The package version to test.|
|org|query|string|false|The organization to test the package with. See "The Snyk organization for a request" above.|
|repository|query|string|false|The repository hosting this package. The default value is Maven Central. More than one value is supported, in order.|

> Example responses

> 200 Response

````json
{
  "dependencyCount": 1,
  "issues": {
    "licenses": [],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
        "credit": [
          "Markus Wulftange"
        ],
        "cvssScore": 9.8,
        "description": "## Overview\n\n[org.apache.flex.blazeds:blazeds](https://github.com/apache/flex-blazeds) is an application development framework for easily building Flash-based applications for mobile devices, web browsers, and desktops.\n\n\nAffected versions of this package are vulnerable to Arbitrary Code Execution.\nThe AMF deserialization implementation of Flex BlazeDS is vulnerable to Deserialization of Untrusted Data. By sending a specially crafted AMF message, it is possible to make the server establish a connection to an endpoint specified in the message and request an RMI remote object from that endpoint. This can result in the execution of arbitrary code on the server via Java deserialization.\r\n\r\nStarting with BlazeDS version `4.7.3`, Deserialization of XML is disabled completely per default, while the `ClassDeserializationValidator` allows deserialization of whitelisted classes only. BlazeDS internally comes with the following whitelist:\r\n```\r\nflex.messaging.io.amf.ASObject\r\nflex.messaging.io.amf.SerializedObject\r\nflex.messaging.io.ArrayCollection\r\nflex.messaging.io.ArrayList\r\nflex.messaging.messages.AcknowledgeMessage\r\nflex.messaging.messages.AcknowledgeMessageExt\r\nflex.messaging.messages.AsyncMessage\r\nflex.messaging.messages.AsyncMessageExt\r\nflex.messaging.messages.CommandMessage\r\nflex.messaging.messages.CommandMessageExt\r\nflex.messaging.messages.ErrorMessage\r\nflex.messaging.messages.HTTPMessage\r\nflex.messaging.messages.RemotingMessage\r\nflex.messaging.messages.SOAPMessage\r\njava.lang.Boolean\r\njava.lang.Byte\r\njava.lang.Character\r\njava.lang.Double\r\njava.lang.Float\r\njava.lang.Integer\r\njava.lang.Long\r\njava.lang.Object\r\njava.lang.Short\r\njava.lang.String\r\njava.util.ArrayList\r\njava.util.Date\r\njava.util.HashMap\r\norg.w3c.dom.Document\r\n```\n\n## Remediation\n\nUpgrade `org.apache.flex.blazeds:blazeds` to version 4.7.3 or higher.\n\n\n## References\n\n- [CVE-2017-3066](https://nvd.nist.gov/vuln/detail/CVE-2017-5641)\n\n- [Github Commit](https://github.com/apache/flex-blazeds/commit/f861f0993c35e664906609cad275e45a71e2aaf1)\n\n- [Github Release Notes](https://github.com/apache/flex-blazeds/blob/master/RELEASE_NOTES)\n\n- [Securitytracker Issue](http://www.securitytracker.com/id/1038364)\n",
        "disclosureTime": "2017-04-25T21:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "org.apache.flex.blazeds:blazeds@4.7.2"
        ],
        "functions": [],
        "id": "SNYK-JAVA-ORGAPACHEFLEXBLAZEDS-31455",
        "identifiers": {
          "CVE": [
            "CVE-2017-5641"
          ],
          "CWE": [
            "CWE-502"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "java",
        "package": "org.apache.flex.blazeds:blazeds",
        "packageManager": "maven",
        "patches": [],
        "publicationTime": "2017-08-09T14:17:08Z",
        "semver": {
          "vulnerable": [
            "[,4.7.3)"
          ]
        },
        "severity": "critical",
        "title": "Arbitrary Code Execution",
        "type": "vuln",
        "upgradePath": [
          "org.apache.flex.blazeds:blazeds@4.7.3"
        ],
        "url": "https://snyk.io/vuln/SNYK-JAVA-ORGAPACHEFLEXBLAZEDS-31455",
        "version": "4.7.2"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "689ce7f9-7943-4a71-b704-2ba575f01089",
    "name": "atokeneduser"
  },
  "packageManager": "maven"
}
````

<h3 id="test-for-issues-in-a-public-package-by-group-id-artifact-id-and-version-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Test package.json &amp; yarn.lock File

<a id="opIdTest package.json &amp; yarn.lock File"></a>

> Code samples

```bash
curl https://example.com/test/yarn \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "encoding": "plain",
    "files": {
      "additional": [
        {
          "contents": "# THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.\\r\\n# yarn lockfile v1\\r\\n\\r\\n\\r\\nnode-uuid@1.4.0:\\r\\n  version \\\"1.4.0\\\"\\r\\n  resolved \\\"https:\\/\\/registry.yarnpkg.com\\/node-uuid\\/-\\/node-uuid-1.4.0.tgz#07f9b2337572ff6275c775e1d48513f3a45d7a65\\\"\\r\\n  integrity sha1-B\\/myM3Vy\\/2J1x3Xh1IUT86RdemU=\\r\\n\\r\\nqs@0.0.6:\\r\\n  version \\\"0.0.6\\\"\\r\\n  resolved \\\"https:\\/\\/registry.yarnpkg.com\\/qs\\/-\\/qs-0.0.6.tgz#481659b7e5bf6a5ea898010de5aed35eb469e124\\\"\\r\\n  integrity sha1-SBZZt+W\\/al6omAEN5a7TXrRp4SQ=\\r\\n"
        }
      ],
      "target": {
        "contents": "{ \"name\": \"shallow-goof\", \"version\": \"0.0.1\", \"description\": \"A vulnerable demo application\", \"homepage\": \"https://snyk.io/\", \"repository\": { \"type\": \"git\", \"url\": \"https://github.com/Snyk/shallow-goof\" }, \"dependencies\": { \"node-uuid\": \"1.4.0\", \"qs\": \"0.0.6\" } }"
      }
    }
  }'
```

`POST /test/yarn`

You can test your yarn packages for issues according to their manifest file & lockfile using this action. It takes a JSON object containing a "target" `package.json` and a `yarn.lock`.

> Body parameter

```json
{
  "encoding": "plain",
  "files": {
    "additional": [
      {
        "contents": "# THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.\\r\\n# yarn lockfile v1\\r\\n\\r\\n\\r\\nnode-uuid@1.4.0:\\r\\n  version \\\"1.4.0\\\"\\r\\n  resolved \\\"https:\\/\\/registry.yarnpkg.com\\/node-uuid\\/-\\/node-uuid-1.4.0.tgz#07f9b2337572ff6275c775e1d48513f3a45d7a65\\\"\\r\\n  integrity sha1-B\\/myM3Vy\\/2J1x3Xh1IUT86RdemU=\\r\\n\\r\\nqs@0.0.6:\\r\\n  version \\\"0.0.6\\\"\\r\\n  resolved \\\"https:\\/\\/registry.yarnpkg.com\\/qs\\/-\\/qs-0.0.6.tgz#481659b7e5bf6a5ea898010de5aed35eb469e124\\\"\\r\\n  integrity sha1-SBZZt+W\\/al6omAEN5a7TXrRp4SQ=\\r\\n"
      }
    ],
    "target": {
      "contents": "{ \"name\": \"shallow-goof\", \"version\": \"0.0.1\", \"description\": \"A vulnerable demo application\", \"homepage\": \"https://snyk.io/\", \"repository\": { \"type\": \"git\", \"url\": \"https://github.com/Snyk/shallow-goof\" }, \"dependencies\": { \"node-uuid\": \"1.4.0\", \"qs\": \"0.0.6\" } }"
    }
  }
}
```

<h3 id="test-packagejson-yarnlock-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» encoding|body|string|false|the encoding for the manifest files sent.|
|» files|body|object|true|The manifest files:|
|» » additional|body|[object]|false|a lockfile can be sent (if needed), encoded according the the "encoding" field.|
|» » target|body|object|true|the `package.json` file, encoded according the the "encoding" field.|
|» » » contents|body|string|true|the contents of `package.json` as a string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encoding|plain|
|» encoding|base64|

> Example responses

> 200 Response

````json
{
  "dependencyCount": 2,
  "issues": {
    "licenses": [],
    "vulnerabilities": [
      {
        "CVSSv3": "CVSS:3.0/AV:A/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:N",
        "credit": [
          "Fedot Praslov"
        ],
        "cvssScore": 4.2,
        "description": "## Overview\n[`node-uuid`](https://github.com/kelektiv/node-uuid) is a Simple, fast generation of RFC4122 UUIDS.\n\nAffected versions of this package are vulnerable to Insecure Randomness. It uses the cryptographically insecure `Math.random` which can produce predictable values and should not be used in security-sensitive context.\n\n## Remediation\nUpgrade `node-uuid` to version 1.4.4 or greater.\n\n## References\n- [GitHub Issue](https://github.com/broofa/node-uuid/issues/108)\n- [GitHub Issue 2](https://github.com/broofa/node-uuid/issues/122)\n",
        "disclosureTime": "2016-03-28T21:29:30Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "node-uuid@1.4.0"
        ],
        "functions": [],
        "id": "npm:node-uuid:20160328",
        "identifiers": {
          "ALTERNATIVE": [
            "SNYK-JS-NODEUUID-10089"
          ],
          "CVE": [],
          "CWE": [
            "CWE-330"
          ],
          "NSP": [
            93
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "js",
        "package": "node-uuid",
        "packageManager": "npm",
        "patches": [
          {
            "comments": [],
            "id": "patch:npm:node-uuid:20160328:0",
            "modificationTime": "2019-12-03T11:40:45.815314Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/node-uuid/20160328/node-uuid_20160328_0_0_616ad3800f35cf58089215f420db9654801a5a02.patch"
            ],
            "version": "<=1.4.3 >=1.4.2"
          }
        ],
        "publicationTime": "2016-03-28T22:00:02.566000Z",
        "semver": {
          "vulnerable": [
            "<1.4.4"
          ]
        },
        "severity": "medium",
        "title": "Insecure Randomness",
        "type": "vuln",
        "upgradePath": [
          "node-uuid@1.4.6"
        ],
        "url": "https://snyk.io/vuln/npm:node-uuid:20160328",
        "version": "1.4.0"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
        "credit": [
          "Dustin Shiver"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\n\n[qs](https://www.npmjs.com/package/qs) is a querystring parser that supports nesting and arrays, with a depth limit.\n\n\nAffected versions of this package are vulnerable to Denial of Service (Memory Exhaustion).\nDuring parsing, the `qs` module may create a sparse area (an array where no elements are filled), and grow that array to the necessary size based on the indices used on it. An attacker can specify a high index value in a query string, thus making the server allocate a respectively big array. Truly large values can cause the server to run out of memory and cause it to crash - thus enabling a Denial-of-Service attack.\n\n## Remediation\n\nUpgrade `qs` to version 1.0.0 or higher.\n\n\n## Details\nDenial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its intended and legitimate users.\r\n\r\nUnlike other vulnerabilities, DoS attacks usually do not aim at breaching security. Rather, they are focused on making websites and services unavailable to genuine users resulting in downtime.\r\n\r\nOne popular Denial of Service vulnerability is DDoS (a Distributed Denial of Service), an attack that attempts to clog network pipes to the system by generating a large volume of traffic from many machines.\r\n\r\nWhen it comes to open source libraries, DoS vulnerabilities allow attackers to trigger such a crash or crippling of the service by using a flaw either in the application code or from the use of open source libraries.\r\n\r\nTwo common types of DoS vulnerabilities:\r\n\r\n* High CPU/Memory Consumption- An attacker sending crafted requests that could cause the system to take a disproportionate amount of time to process. For example, [commons-fileupload:commons-fileupload](SNYK-JAVA-COMMONSFILEUPLOAD-30082).\r\n\r\n* Crash - An attacker sending crafted requests that could cause the system to crash. For Example,  [npm `ws` package](npm:ws:20171108)\n\n## References\n\n- [GitHub Commit](https://github.com/tj/node-querystring/pull/114/commits/43a604b7847e56bba49d0ce3e222fe89569354d8)\n\n- [GitHub Issue](https://github.com/visionmedia/node-querystring/issues/104)\n\n- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2014-7191)\n",
        "disclosureTime": "2014-08-06T06:10:22Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "qs@0.0.6"
        ],
        "functions": [
          {
            "functionId": {
              "filePath": "index.js",
              "functionName": "compact"
            },
            "version": [
              "<1.0.0"
            ]
          }
        ],
        "id": "npm:qs:20140806",
        "identifiers": {
          "ALTERNATIVE": [
            "SNYK-JS-QS-10019"
          ],
          "CVE": [
            "CVE-2014-7191"
          ],
          "CWE": [
            "CWE-400"
          ],
          "NSP": [
            29
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "js",
        "package": "qs",
        "packageManager": "npm",
        "patches": [
          {
            "comments": [],
            "id": "patch:npm:qs:20140806:0",
            "modificationTime": "2019-12-03T11:40:45.741062Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20140806/qs_20140806_0_0_43a604b7847e56bba49d0ce3e222fe89569354d8_snyk.patch"
            ],
            "version": "<1.0.0 >=0.6.5"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20140806:1",
            "modificationTime": "2019-12-03T11:40:45.728930Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20140806/qs_20140806_0_1_snyk_npm.patch"
            ],
            "version": "=0.5.6"
          }
        ],
        "publicationTime": "2014-08-06T06:10:22Z",
        "semver": {
          "vulnerable": [
            "<1.0.0"
          ]
        },
        "severity": "high",
        "title": "Denial of Service (Memory Exhaustion)",
        "type": "vuln",
        "upgradePath": [
          "qs@1.0.0"
        ],
        "url": "https://snyk.io/vuln/npm:qs:20140806",
        "version": "0.0.6"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
        "credit": [
          "Tom Steele"
        ],
        "cvssScore": 6.5,
        "description": "## Overview\n\n[qs](https://www.npmjs.com/package/qs) is a querystring parser that supports nesting and arrays, with a depth limit.\n\n\nAffected versions of this package are vulnerable to Denial of Service (Event Loop Blocking).\nWhen parsing a string representing a deeply nested object, qs will block the event loop for long periods of time. Such a delay may hold up the server's resources, keeping it from processing other requests in the meantime, thus enabling a Denial-of-Service attack.\n\n## Details\nDenial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its intended and legitimate users.\r\n\r\nUnlike other vulnerabilities, DoS attacks usually do not aim at breaching security. Rather, they are focused on making websites and services unavailable to genuine users resulting in downtime.\r\n\r\nOne popular Denial of Service vulnerability is DDoS (a Distributed Denial of Service), an attack that attempts to clog network pipes to the system by generating a large volume of traffic from many machines.\r\n\r\nWhen it comes to open source libraries, DoS vulnerabilities allow attackers to trigger such a crash or crippling of the service by using a flaw either in the application code or from the use of open source libraries.\r\n\r\nTwo common types of DoS vulnerabilities:\r\n\r\n* High CPU/Memory Consumption- An attacker sending crafted requests that could cause the system to take a disproportionate amount of time to process. For example, [commons-fileupload:commons-fileupload](SNYK-JAVA-COMMONSFILEUPLOAD-30082).\r\n\r\n* Crash - An attacker sending crafted requests that could cause the system to crash. For Example,  [npm `ws` package](npm:ws:20171108)\n\n## Remediation\n\nUpgrade `qs` to version 1.0.0 or higher.\n\n\n## References\n\n- [Node Security Advisory](https://nodesecurity.io/advisories/28)\n",
        "disclosureTime": "2014-08-06T06:10:23Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "qs@0.0.6"
        ],
        "functions": [],
        "id": "npm:qs:20140806-1",
        "identifiers": {
          "ALTERNATIVE": [
            "SNYK-JS-QS-10020"
          ],
          "CVE": [
            "CVE-2014-10064"
          ],
          "CWE": [
            "CWE-400"
          ],
          "NSP": [
            28
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "js",
        "package": "qs",
        "packageManager": "npm",
        "patches": [
          {
            "comments": [],
            "id": "patch:npm:qs:20140806-1:1",
            "modificationTime": "2019-12-03T11:40:45.744535Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20140806-1/qs_20140806-1_0_1_snyk.patch"
            ],
            "version": "=0.5.6"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20140806-1:0",
            "modificationTime": "2019-12-03T11:40:45.742148Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20140806-1/qs_20140806-1_0_0_snyk.patch"
            ],
            "version": "<1.0.0 >=0.6.5"
          }
        ],
        "publicationTime": "2014-08-06T06:10:23Z",
        "semver": {
          "vulnerable": [
            "<1.0.0"
          ]
        },
        "severity": "medium",
        "title": "Denial of Service (Event Loop Blocking)",
        "type": "vuln",
        "upgradePath": [
          "qs@1.0.0"
        ],
        "url": "https://snyk.io/vuln/npm:qs:20140806-1",
        "version": "0.0.6"
      },
      {
        "CVSSv3": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
        "credit": [
          "Snyk Security Research Team"
        ],
        "cvssScore": 7.5,
        "description": "## Overview\n\n[qs](https://www.npmjs.com/package/qs) is a querystring parser that supports nesting and arrays, with a depth limit.\n\n\nAffected versions of this package are vulnerable to Prototype Override Protection Bypass.\nBy default `qs` protects against attacks that attempt to overwrite an object's existing prototype properties, such as `toString()`, `hasOwnProperty()`,etc.\r\n\r\nFrom [`qs` documentation](https://github.com/ljharb/qs):\r\n> By default parameters that would overwrite properties on the object prototype are ignored, if you wish to keep the data from those fields either use plainObjects as mentioned above, or set allowPrototypes to true which will allow user input to overwrite those properties. WARNING It is generally a bad idea to enable this option as it can cause problems when attempting to use the properties that have been overwritten. Always be careful with this option.\r\n\r\nOverwriting these properties can impact application logic, potentially allowing attackers to work around security controls, modify data, make the application unstable and more.\r\n\r\nIn versions of the package affected by this vulnerability, it is possible to circumvent this protection and overwrite prototype properties and functions by prefixing the name of the parameter with `[` or `]`. e.g. `qs.parse(\"]=toString\")` will return `{toString = true}`, as a result, calling `toString()` on the object will throw an exception.\r\n\r\n**Example:**\r\n```js\r\nqs.parse('toString=foo', { allowPrototypes: false })\r\n// {}\r\n\r\nqs.parse(\"]=toString\", { allowPrototypes: false })\r\n// {toString = true} <== prototype overwritten\r\n```\r\n\r\nFor more information, you can check out our [blog](https://snyk.io/blog/high-severity-vulnerability-qs/).\r\n\r\n## Disclosure Timeline\r\n- February 13th, 2017 - Reported the issue to package owner.\r\n- February 13th, 2017 - Issue acknowledged by package owner.\r\n- February 16th, 2017 - Partial fix released in versions `6.0.3`, `6.1.1`, `6.2.2`, `6.3.1`.\r\n- March 6th, 2017     - Final fix released in versions `6.4.0`,`6.3.2`, `6.2.3`, `6.1.2` and `6.0.4`\n\n## Remediation\n\nUpgrade `qs` to version 6.0.4, 6.1.2, 6.2.3, 6.3.2 or higher.\n\n\n## References\n\n- [GitHub Commit](https://github.com/ljharb/qs/commit/beade029171b8cef9cee0d03ebe577e2dd84976d)\n\n- [Report of an insufficient fix](https://github.com/ljharb/qs/issues/200)\n",
        "disclosureTime": "2017-02-13T00:00:00Z",
        "exploitMaturity": "no-known-exploit",
        "from": [
          "qs@0.0.6"
        ],
        "functions": [
          {
            "functionId": {
              "filePath": "lib/parse.js",
              "functionName": "internals.parseObject"
            },
            "version": [
              "<6.0.4"
            ]
          },
          {
            "functionId": {
              "filePath": "lib/parse.js",
              "functionName": "parseObject"
            },
            "version": [
              ">=6.2.0 <6.2.3",
              "6.3.0"
            ]
          },
          {
            "functionId": {
              "filePath": "lib/parse.js",
              "functionName": "parseObjectRecursive"
            },
            "version": [
              ">=6.3.1 <6.3.2"
            ]
          }
        ],
        "id": "npm:qs:20170213",
        "identifiers": {
          "ALTERNATIVE": [
            "SNYK-JS-QS-10407"
          ],
          "CVE": [
            "CVE-2017-1000048"
          ],
          "CWE": [
            "CWE-20"
          ]
        },
        "isPatchable": false,
        "isPinnable": false,
        "isUpgradable": true,
        "language": "js",
        "package": "qs",
        "packageManager": "npm",
        "patches": [
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:7",
            "modificationTime": "2019-12-03T11:40:45.862615Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/603_604.patch"
            ],
            "version": "=6.0.3"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:6",
            "modificationTime": "2019-12-03T11:40:45.861504Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/602_604.patch"
            ],
            "version": "=6.0.2"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:5",
            "modificationTime": "2019-12-03T11:40:45.860523Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/611_612.patch"
            ],
            "version": "=6.1.1"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:4",
            "modificationTime": "2019-12-03T11:40:45.859411Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/610_612.patch"
            ],
            "version": "=6.1.0"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:3",
            "modificationTime": "2019-12-03T11:40:45.858334Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/622_623.patch"
            ],
            "version": "=6.2.2"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:2",
            "modificationTime": "2019-12-03T11:40:45.857318Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/621_623.patch"
            ],
            "version": "=6.2.1"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:1",
            "modificationTime": "2019-12-03T11:40:45.856271Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/631_632.patch"
            ],
            "version": "=6.3.1"
          },
          {
            "comments": [],
            "id": "patch:npm:qs:20170213:0",
            "modificationTime": "2019-12-03T11:40:45.855245Z",
            "urls": [
              "https://snyk-patches.s3.amazonaws.com/npm/qs/20170213/630_632.patch"
            ],
            "version": "=6.3.0"
          }
        ],
        "publicationTime": "2017-03-01T10:00:54Z",
        "semver": {
          "vulnerable": [
            "<6.0.4",
            ">=6.1.0 <6.1.2",
            ">=6.2.0 <6.2.3",
            ">=6.3.0 <6.3.2"
          ]
        },
        "severity": "high",
        "title": "Prototype Override Protection Bypass",
        "type": "vuln",
        "upgradePath": [
          "qs@6.0.4"
        ],
        "url": "https://snyk.io/vuln/npm:qs:20170213",
        "version": "0.0.6"
      }
    ]
  },
  "licensesPolicy": null,
  "ok": false,
  "org": {
    "id": "689ce7f9-7943-4a71-b704-2ba575f01089",
    "name": "atokeneduser"
  },
  "packageManager": "yarn"
}
````

<h3 id="test-packagejson-yarnlock-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="snyk-api-monitor">Monitor</h1>

Snyk constantly discloses new vulnerabilities. Monitor gives you a way to regularly test your project for
new vulnerabilities and be alerted when action is required in order to keep your project secure.

## Monitor Dep Graph

<a id="opIdMonitor Dep Graph"></a>

> Code samples

```bash
curl https://example.com/monitor/dep-graph \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "depGraph": {
      "graph": {
        "nodes": [
          {
            "deps": [
              {
                "nodeId": "ch.qos.logback:logback-core@1.0.13"
              }
            ],
            "nodeId": "root-node",
            "pkgId": "my-maven-app@1.0.0"
          },
          {
            "deps": [],
            "nodeId": "ch.qos.logback:logback-core@1.0.13",
            "pkgId": "ch.qos.logback:logback-core@1.0.13"
          }
        ],
        "rootNodeId": "root-node"
      },
      "pkgManager": {
        "name": "maven"
      },
      "pkgs": [
        {
          "id": "my-maven-app@1.0.0",
          "info": {
            "name": "my-maven-app",
            "version": "1.0.0"
          }
        },
        {
          "id": "ch.qos.logback:logback-core@1.0.13",
          "info": {
            "name": "ch.qos.logback:logback-core",
            "version": "1.0.13"
          }
        }
      ],
      "schemaVersion": "1.2.0"
    }
  }'
```

`POST /monitor/dep-graph`

Use this endpoint to monitor a [DepGraph data object](https://github.com/snyk/dep-graph#depgraphdata).

> Body parameter

```json
{
  "depGraph": {
    "graph": {
      "nodes": [
        {
          "deps": [
            {
              "nodeId": "ch.qos.logback:logback-core@1.0.13"
            }
          ],
          "nodeId": "root-node",
          "pkgId": "my-maven-app@1.0.0"
        },
        {
          "deps": [],
          "nodeId": "ch.qos.logback:logback-core@1.0.13",
          "pkgId": "ch.qos.logback:logback-core@1.0.13"
        }
      ],
      "rootNodeId": "root-node"
    },
    "pkgManager": {
      "name": "maven"
    },
    "pkgs": [
      {
        "id": "my-maven-app@1.0.0",
        "info": {
          "name": "my-maven-app",
          "version": "1.0.0"
        }
      },
      {
        "id": "ch.qos.logback:logback-core@1.0.13",
        "info": {
          "name": "ch.qos.logback:logback-core",
          "version": "1.0.13"
        }
      }
    ],
    "schemaVersion": "1.2.0"
  }
}
```

<h3 id="monitor-dep-graph-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org|query|string|false|The organization to test the package with. See "The Snyk organization for a request" above.|
|body|body|object|false|none|
|» depGraph|body|object|true|A [DepGraph data object](https://github.com/snyk/dep-graph#depgraphdata) defining all packages and their relationships.|
|» » graph|body|object|true|Graph object references each pkg and how they depend on each other through the deps property.|
|» » » nodes|body|[object]|true|Array of node objects.|
|» » » rootNodeId|body|string|true|Root node id. Note the root node name is used as your project name.|
|» » pkgManager|body|object|true|Package manager information.|
|» » » name|body|string|true|Package manager name.|
|» » » repositories|body|[object]|false|A list of package repositories (i.e. maven-central, or npm) that defaults to the canonical package registry for the given package manager.|
|» » pkgs|body|[object]|true|Array of package dependencies.|
|» » schemaVersion|body|string|true|Snyk DepGraph library schema version.|
|» meta|body|object|false|Project metadata|
|» » targetFramework|body|string|false|Required for a NuGet or Paket DepGraph only. Specify the target framework in your project file using Target Framework Monikers (TFMs). For example, netstandard1.0, netcoreapp1.0 or net452. Test each framework separately if you have multiple defined.|

> Example responses

> 200 Response

```json
{
  "id": "f7c065cd-5850-462d-a0ca-9719d07e3e38",
  "ok": true,
  "uri": "https://app.snyk.io/org/my-org/project/f7c065cd-5850-462d-a0ca-9719d07e3e38/history/39d14036-31f3-4f22-8037-1d979e0516ef"
}
```

<h3 id="monitor-dep-graph-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="snyk-api-reporting-api">Reporting API</h1>

Note: The endpoints in this category only support Snyk legacy reporting, not the latest release.

The reporting API powers our reports section.

With it you can find answers to questions like how many issues your organisation has, or how many tests have been conducted in a given time frame.

Current rate limit is up to 70 requests per minute, per user.
All requests above the limit will get a response with status code `429` - `Too many requests` until requests stop for the duration of the rate-limiting interval (currently a minute).
For more information about rate-limiting see: [https://snyk.docs.apiary.io/#introduction/rate-limiting](https://snyk.docs.apiary.io/#introduction/rate-limiting)

## Get issue counts

<a id="opIdGet issue counts"></a>

> Code samples

```bash
curl 'https://example.com/reporting/counts/issues?from=2017-07-01&to=2017-07-03' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "filters": {
      "fixable": false,
      "ignored": false,
      "isPatchable": false,
      "isPinnable": false,
      "isUpgradable": false,
      "languages": [
        "node",
        "javascript",
        "ruby",
        "java",
        "scala",
        "python",
        "golang",
        "php",
        "dotnet",
        "swift-objective-c",
        "elixir",
        "docker",
        "linux",
        "dockerfile",
        "terraform",
        "kubernetes",
        "helm",
        "cloudformation"
      ],
      "orgs": [],
      "patched": false,
      "priorityScore": {
        "max": 1000,
        "min": 0
      },
      "projects": [],
      "severity": [
        "critical",
        "high",
        "medium",
        "low"
      ],
      "types": [
        "vuln",
        "license",
        "configuration"
      ]
    }
  }'
```

`POST /reporting/counts/issues`

> Body parameter

```json
{
  "filters": {
    "fixable": false,
    "ignored": false,
    "isPatchable": false,
    "isPinnable": false,
    "isUpgradable": false,
    "languages": [
      "node",
      "javascript",
      "ruby",
      "java",
      "scala",
      "python",
      "golang",
      "php",
      "dotnet",
      "swift-objective-c",
      "elixir",
      "docker",
      "linux",
      "dockerfile",
      "terraform",
      "kubernetes",
      "helm",
      "cloudformation"
    ],
    "orgs": [],
    "patched": false,
    "priorityScore": {
      "max": 1000,
      "min": 0
    },
    "projects": [],
    "severity": [
      "critical",
      "high",
      "medium",
      "low"
    ],
    "types": [
      "vuln",
      "license",
      "configuration"
    ]
  }
}
```

<h3 id="get-issue-counts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|string|true|The date you wish to fetch results from, in the format `YYYY-MM-DD`|
|to|query|string|true|The date you wish to fetch results until, in the format `YYYY-MM-DD`|
|groupBy|query|string|false|The field to group results by|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » fixable|body|boolean|false|If set to `true`, only include issues which are fixable, if set to `false`, only include issues which are not fixable. An issue is fixable if it is either upgradable, patchable or pinnable. Also see isUpgradable, isPatchable and isPinnable filters.|
|» » ignored|body|boolean|false|If set to `true`, only include issues which are ignored, if set to `false`, only include issues which are not ignored|
|» » isPatchable|body|boolean|false|If set to `true`, only include issues which are patchable, if set to `false`, only include issues which are not patchable|
|» » isPinnable|body|boolean|false|If set to `true`, only include issues which are pinnable, if set to `false`, only include issues which are not pinnable|
|» » isUpgradable|body|boolean|false|If set to `true`, only include issues which are upgradable, if set to `false`, only include issues which are not upgradable|
|» » languages|body|[object]|false|The type of languages to filter the results by|
|» » orgs|body|object|true|The list of org IDs to filter the results by|
|» » patched|body|boolean|false|If set to `true`, only include issues which are patched, if set to `false`, only include issues which are not patched|
|» » priorityScore|body|object|false|The priority score ranging between 0-1000|
|» » » max|body|number|false|none|
|» » » min|body|number|false|none|
|» » projects|body|object|false|The list of project IDs to filter issues by, max projects allowed is 1000|
|» » severity|body|[object]|false|The severity levels of issues to filter the results by|
|» » types|body|[object]|false|The type of issues to filter the results by|

#### Enumerated Values

|Parameter|Value|
|---|---|
|groupBy|severity|
|groupBy|fixable|
|groupBy|project,[severity\|fixable]|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "count": 0,
      "day": "2017-07-01",
      "severity": {
        "critical": 0,
        "high": 0,
        "low": 0,
        "medium": 0
      }
    },
    {
      "count": 0,
      "day": "2017-07-02",
      "severity": {
        "critical": 0,
        "high": 0,
        "low": 0,
        "medium": 0
      }
    },
    {
      "count": 0,
      "day": "2017-07-03",
      "severity": {
        "critical": 0,
        "high": 0,
        "low": 0,
        "medium": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": 400,
  "error": {
    "innerErrors": [
      "invalid type filters.types is an invalid type unsupported-type"
    ],
    "name": "ValidationError"
  },
  "ok": false
}
```

<h3 id="get-issue-counts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-issue-counts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of issue counts by day|
|» count|number|true|none|The number of issues|
|» day|string|true|none|The date in the format `YYYY-MM-DD`|
|» fixable|object|false|none|none|
|» » false|number|false|none|The number of non-fixable issues|
|» » true|number|false|none|The number of fixable issues|
|» severity|object|false|none|none|
|» » critical|number|false|none|The number of critical severity issues|
|» » high|number|false|none|The number of high severity issues|
|» » low|number|false|none|The number of low severity issues|
|» » medium|number|false|none|The number of medium severity issues|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|number|true|none|The error response code|
|error|object|true|none|none|
|» innerErrors|[object]|false|none|A list of additional reasons why the error occurred|
|» name|string|true|none|A descriptive message of the error|
|ok|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get latest issue counts

<a id="opIdGet latest issue counts"></a>

> Code samples

```bash
curl https://example.com/reporting/counts/issues/latest \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "filters": {
      "fixable": false,
      "ignored": false,
      "isPatchable": false,
      "isPinnable": false,
      "isUpgradable": false,
      "languages": [
        "node",
        "javascript",
        "ruby",
        "java",
        "scala",
        "python",
        "golang",
        "php",
        "dotnet",
        "swift-objective-c",
        "elixir",
        "docker",
        "linux",
        "dockerfile",
        "terraform",
        "kubernetes",
        "helm",
        "cloudformation"
      ],
      "orgs": [],
      "patched": false,
      "priorityScore": {
        "max": 1000,
        "min": 0
      },
      "projects": [],
      "severity": [
        "critical",
        "high",
        "medium",
        "low"
      ],
      "types": [
        "vuln",
        "license",
        "configuration"
      ]
    }
  }'
```

`POST /reporting/counts/issues/latest`

> Body parameter

```json
{
  "filters": {
    "fixable": false,
    "ignored": false,
    "isPatchable": false,
    "isPinnable": false,
    "isUpgradable": false,
    "languages": [
      "node",
      "javascript",
      "ruby",
      "java",
      "scala",
      "python",
      "golang",
      "php",
      "dotnet",
      "swift-objective-c",
      "elixir",
      "docker",
      "linux",
      "dockerfile",
      "terraform",
      "kubernetes",
      "helm",
      "cloudformation"
    ],
    "orgs": [],
    "patched": false,
    "priorityScore": {
      "max": 1000,
      "min": 0
    },
    "projects": [],
    "severity": [
      "critical",
      "high",
      "medium",
      "low"
    ],
    "types": [
      "vuln",
      "license",
      "configuration"
    ]
  }
}
```

<h3 id="get-latest-issue-counts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupBy|query|string|false|The field to group results by|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » fixable|body|boolean|false|If set to `true`, only include issues which are fixable, if set to `false`, only include issues which are not fixable. An issue is fixable if it is either upgradable, patchable or pinnable. Also see isUpgradable, isPatchable and isPinnable filters.|
|» » ignored|body|boolean|false|If set to `true`, only include issues which are ignored, if set to `false`, only include issues which are not ignored|
|» » isPatchable|body|boolean|false|If set to `true`, only include issues which are patchable, if set to `false`, only include issues which are not patchable|
|» » isPinnable|body|boolean|false|If set to `true`, only include issues which are pinnable, if set to `false`, only include issues which are not pinnable|
|» » isUpgradable|body|boolean|false|If set to `true`, only include issues which are upgradable, if set to `false`, only include issues which are not upgradable|
|» » languages|body|[object]|false|The type of languages to filter the results by|
|» » orgs|body|object|true|The list of org IDs to filter the results by|
|» » patched|body|boolean|false|If set to `true`, only include issues which are patched, if set to `false`, only include issues which are not patched|
|» » priorityScore|body|object|false|The priority score ranging between 0-1000|
|» » » max|body|number|false|none|
|» » » min|body|number|false|none|
|» » projects|body|object|false|The list of project IDs to filter issues by, max projects allowed is 1000|
|» » severity|body|[object]|false|The severity levels of issues to filter the results by|
|» » types|body|[object]|false|The type of issues to filter the results by|

#### Enumerated Values

|Parameter|Value|
|---|---|
|groupBy|severity|
|groupBy|fixable|
|groupBy|project,[severity\|fixable]|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "count": 0,
      "day": "string",
      "fixable": {
        "false": 0,
        "true": 0
      },
      "severity": {
        "critical": 0,
        "high": 0,
        "low": 0,
        "medium": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": 400,
  "error": {
    "innerErrors": [
      "invalid type filters.types is an invalid type unsupported-type"
    ],
    "name": "ValidationError"
  },
  "ok": false
}
```

<h3 id="get-latest-issue-counts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-latest-issue-counts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of issue counts by day|
|» count|number|true|none|The number of issues|
|» day|string|true|none|The date in the format `YYYY-MM-DD`|
|» fixable|object|false|none|none|
|» » false|number|false|none|The number of non-fixable issues|
|» » true|number|false|none|The number of fixable issues|
|» severity|object|false|none|none|
|» » critical|number|false|none|The number of critical severity issues|
|» » high|number|false|none|The number of high severity issues|
|» » low|number|false|none|The number of low severity issues|
|» » medium|number|false|none|The number of medium severity issues|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|number|true|none|The error response code|
|error|object|true|none|none|
|» innerErrors|[object]|false|none|A list of additional reasons why the error occurred|
|» name|string|true|none|A descriptive message of the error|
|ok|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get project counts

<a id="opIdGet project counts"></a>

> Code samples

```bash
curl 'https://example.com/reporting/counts/projects?from=2017-07-01&to=2017-07-03' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "filters": {
      "languages": [
        "node",
        "javascript",
        "ruby",
        "java",
        "scala",
        "python",
        "golang",
        "php",
        "dotnet",
        "swift-objective-c",
        "elixir",
        "docker",
        "linux",
        "dockerfile",
        "terraform",
        "kubernetes",
        "helm",
        "cloudformation"
      ],
      "orgs": [],
      "projects": []
    }
  }'
```

`POST /reporting/counts/projects`

> Body parameter

```json
{
  "filters": {
    "languages": [
      "node",
      "javascript",
      "ruby",
      "java",
      "scala",
      "python",
      "golang",
      "php",
      "dotnet",
      "swift-objective-c",
      "elixir",
      "docker",
      "linux",
      "dockerfile",
      "terraform",
      "kubernetes",
      "helm",
      "cloudformation"
    ],
    "orgs": [],
    "projects": []
  }
}
```

<h3 id="get-project-counts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|string|true|The date you wish to fetch results from, in the format `YYYY-MM-DD`|
|to|query|string|true|The date you wish to fetch results until, in the format `YYYY-MM-DD`|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » languages|body|[object]|false|The type of languages to filter the results by|
|» » orgs|body|object|true|The list of org IDs to filter the results by|
|» » projects|body|object|false|The list of project IDs to filter the results by, max projects allowed is 1000|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "count": 0,
      "day": "2017-07-01"
    },
    {
      "count": 0,
      "day": "2017-07-02"
    },
    {
      "count": 0,
      "day": "2017-07-03"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 400,
  "error": {
    "innerErrors": [
      "invalid type filters.projects is an invalid project unsupported-project"
    ],
    "name": "ValidationError"
  },
  "ok": false
}
```

<h3 id="get-project-counts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-project-counts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of project counts by day|
|» count|number|true|none|The number of projects|
|» day|string|true|none|The date in the format `YYYY-MM-DD`|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|number|true|none|The error response code|
|error|object|true|none|none|
|» innerErrors|[object]|false|none|A list of additional reasons why the error occurred|
|» name|string|true|none|A descriptive message of the error|
|ok|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get latest project counts

<a id="opIdGet latest project counts"></a>

> Code samples

```bash
curl https://example.com/reporting/counts/projects/latest \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "filters": {
      "languages": [
        "node",
        "javascript",
        "ruby",
        "java",
        "scala",
        "python",
        "golang",
        "php",
        "dotnet",
        "swift-objective-c",
        "elixir",
        "docker",
        "linux",
        "dockerfile",
        "terraform",
        "kubernetes",
        "helm",
        "cloudformation"
      ],
      "orgs": [],
      "projects": []
    }
  }'
```

`POST /reporting/counts/projects/latest`

> Body parameter

```json
{
  "filters": {
    "languages": [
      "node",
      "javascript",
      "ruby",
      "java",
      "scala",
      "python",
      "golang",
      "php",
      "dotnet",
      "swift-objective-c",
      "elixir",
      "docker",
      "linux",
      "dockerfile",
      "terraform",
      "kubernetes",
      "helm",
      "cloudformation"
    ],
    "orgs": [],
    "projects": []
  }
}
```

<h3 id="get-latest-project-counts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » languages|body|[object]|false|The type of languages to filter the results by|
|» » orgs|body|object|true|The list of org IDs to filter the results by|
|» » projects|body|object|false|The list of project IDs to filter the results by, max projects allowed is 1000|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "count": 0,
      "day": "2017-07-01"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 400,
  "error": {
    "innerErrors": [
      "invalid type filters.projects is an invalid project unsupported-project"
    ],
    "name": "ValidationError"
  },
  "ok": false
}
```

<h3 id="get-latest-project-counts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-latest-project-counts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of project counts by day|
|» count|number|true|none|The number of projects|
|» day|string|true|none|The date in the format `YYYY-MM-DD`|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|number|true|none|The error response code|
|error|object|true|none|none|
|» innerErrors|[object]|false|none|A list of additional reasons why the error occurred|
|» name|string|true|none|A descriptive message of the error|
|ok|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get test counts

<a id="opIdGet test counts"></a>

> Code samples

```bash
curl 'https://example.com/reporting/counts/tests?from=2017-07-01&to=2017-07-03' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "filters": {
      "isPrivate": false,
      "issuesPrevented": false,
      "orgs": [],
      "projects": []
    }
  }'
```

`POST /reporting/counts/tests`

> Body parameter

```json
{
  "filters": {
    "isPrivate": false,
    "issuesPrevented": false,
    "orgs": [],
    "projects": []
  }
}
```

<h3 id="get-test-counts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|string|true|The date you wish to count tests from, in the format `YYYY-MM-DD`|
|to|query|string|true|The date you wish to count tests until, in the format `YYYY-MM-DD`|
|groupBy|query|string|false|The field to group results by|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » isPrivate|body|boolean|false|If set to `true`, only include tests which were conducted against private projects, if set to `false` only include tests which were conducted against public projects|
|» » issuesPrevented|body|boolean|false|If set to `true`, only include tests which prevented issues from being introduced, if set to `false` only include tests which did not prevent issues from being introduced|
|» » orgs|body|object|true|The list of org IDs to filter the results by|
|» » projects|body|object|false|The list of project IDs to filter issues by, max projects allowed is 1000|

#### Enumerated Values

|Parameter|Value|
|---|---|
|groupBy|isPrivate|
|groupBy|issuesPrevented|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "count": 0,
      "isPrivate": {
        "false": 0,
        "true": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": 400,
  "error": {
    "innerErrors": [
      "invalid type filters.isPrivate is not a Boolean"
    ],
    "name": "ValidationError"
  },
  "ok": false
}
```

<h3 id="get-test-counts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-test-counts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of test counts|
|» count|number|true|none|The number of tests conducted|
|» isPrivate|object|false|none|none|
|» » false|number|false|none|The number of tests conducted against public projects|
|» » true|number|false|none|The number of tests conducted against private projects|
|» issuesPrevented|object|false|none|none|
|» » false|number|false|none|The number of tests that did not prevent issues from being introduced|
|» » true|number|false|none|The number of tests that prevented issues from being introduced|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|number|true|none|The error response code|
|error|object|true|none|none|
|» innerErrors|[object]|false|none|A list of additional reasons why the error occurred|
|» name|string|true|none|A descriptive message of the error|
|ok|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of issues

<a id="opIdGet list of issues"></a>

> Code samples

```bash
curl 'https://example.com/reporting/issues/?from=2017-07-01&to=2017-07-07' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "filters": {
      "exploitMaturity": [
        "mature",
        "proof-of-concept",
        "no-known-exploit",
        "no-data"
      ],
      "fixable": false,
      "identifier": "",
      "ignored": false,
      "isFixed": false,
      "isPatchable": false,
      "isPinnable": false,
      "isUpgradable": false,
      "issues": [],
      "languages": [
        "node",
        "javascript",
        "ruby",
        "java",
        "scala",
        "python",
        "golang",
        "php",
        "dotnet",
        "swift-objective-c",
        "elixir",
        "docker",
        "linux",
        "dockerfile",
        "terraform",
        "kubernetes",
        "helm",
        "cloudformation",
        "arm"
      ],
      "orgs": [],
      "patched": false,
      "priorityScore": {
        "max": 1000,
        "min": 0
      },
      "projects": [],
      "severity": [
        "critical",
        "high",
        "medium",
        "low"
      ],
      "types": [
        "vuln",
        "license",
        "configuration"
      ]
    }
  }'
```

`POST /reporting/issues/`

> Body parameter

```json
{
  "filters": {
    "exploitMaturity": [
      "mature",
      "proof-of-concept",
      "no-known-exploit",
      "no-data"
    ],
    "fixable": false,
    "identifier": "",
    "ignored": false,
    "isFixed": false,
    "isPatchable": false,
    "isPinnable": false,
    "isUpgradable": false,
    "issues": [],
    "languages": [
      "node",
      "javascript",
      "ruby",
      "java",
      "scala",
      "python",
      "golang",
      "php",
      "dotnet",
      "swift-objective-c",
      "elixir",
      "docker",
      "linux",
      "dockerfile",
      "terraform",
      "kubernetes",
      "helm",
      "cloudformation",
      "arm"
    ],
    "orgs": [],
    "patched": false,
    "priorityScore": {
      "max": 1000,
      "min": 0
    },
    "projects": [],
    "severity": [
      "critical",
      "high",
      "medium",
      "low"
    ],
    "types": [
      "vuln",
      "license",
      "configuration"
    ]
  }
}
```

<h3 id="get-list-of-issues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|string|true|The date you wish to fetch results from, in the format `YYYY-MM-DD`|
|to|query|string|true|The date you wish to fetch results until, in the format `YYYY-MM-DD`|
|page|query|number|false|The page of results to request|
|perPage|query|number|false|The number of results to return per page (Maximum: 1000)|
|sortBy|query|string|false|The key to sort results by|
|order|query|string|false|The direction to sort results.|
|groupBy|query|string|false|Set to issue to group the same issue in multiple projects|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » exploitMaturity|body|[object]|false|The exploit maturity levels of issues to filter the results by|
|» » fixable|body|boolean|false|If set to `true`, only include issues which are fixable, if set to `false`, only include issues which are not fixable. An issue is fixable if it is either upgradable, patchable or pinnable. Also see isUpgradable, isPatchable and isPinnable filters.|
|» » identifier|body|string|false|Search term to filter issue name by, or an exact CVE or CWE|
|» » ignored|body|boolean|false|If set to `true`, only include issues which are ignored, if set to `false`, only include issues which are not ignored|
|» » isFixed|body|boolean|false|If set to `true`, only include issues which are fixed, if set to `false`, only include issues which are not fixed|
|» » isPatchable|body|boolean|false|If set to `true`, only include issues which are patchable, if set to `false`, only include issues which are not patchable|
|» » isPinnable|body|boolean|false|If set to `true`, only include issues which are pinnable, if set to `false`, only include issues which are not pinnable|
|» » isUpgradable|body|boolean|false|If set to `true`, only include issues which are upgradable, if set to `false`, only include issues which are not upgradable|
|» » issues|body|object|false|The list of issue IDs to filter issues by|
|» » languages|body|[object]|false|The type of languages to filter the results by|
|» » orgs|body|object|true|The list of org IDs to filter the results by|
|» » patched|body|boolean|false|If set to `true`, only include issues which are patched, if set to `false`, only include issues which are not patched|
|» » priorityScore|body|object|false|The priority score ranging between 0-1000|
|» » » max|body|number|false|none|
|» » » min|body|number|false|none|
|» » projects|body|object|false|The list of project IDs to filter issues by, max projects allowed is 1000|
|» » severity|body|[object]|false|The severity levels of issues to filter the results by|
|» » types|body|[object]|false|The type of issues to filter the results by|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortBy|severity|
|sortBy|issueTitle|
|sortBy|projectName|
|sortBy|isFixed|
|sortBy|isPatched|
|sortBy|isIgnored|
|sortBy|introducedDate|
|sortBy|isUpgradable|
|sortBy|isPatchable|
|sortBy|priorityScore|
|groupBy|issue|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "fixedDate": "",
      "introducedDate": "",
      "isFixed": false,
      "issue": {
        "CVSSv3": "",
        "credit": [],
        "cvssScore": 0,
        "disclosureTime": "",
        "exploitMaturity": "",
        "id": "",
        "identifiers": {
          "CVE": [],
          "CWE": [],
          "OSVDB": []
        },
        "ignored": [
          {
            "expires": "",
            "reason": "",
            "source": "cli"
          }
        ],
        "isIgnored": false,
        "isPatchable": false,
        "isPatched": false,
        "isPinnable": false,
        "isUpgradable": false,
        "jiraIssueUrl": "",
        "language": "",
        "originalSeverity": "",
        "package": "",
        "packageManager": "",
        "patches": [
          {
            "comments": [],
            "id": "",
            "modificationTime": "",
            "urls": [],
            "version": ""
          }
        ],
        "priorityScore": 0,
        "publicationTime": "",
        "semver": {
          "unaffected": "",
          "vulnerable": []
        },
        "severity": "",
        "title": "",
        "type": "",
        "uniqueSeveritiesList": [],
        "url": "",
        "version": ""
      },
      "patchedDate": "",
      "projects": [
        {
          "id": "",
          "name": "",
          "packageManager": "",
          "source": "",
          "targetFile": "",
          "url": ""
        }
      ]
    }
  ],
  "total": 0
}
```

> 400 Response

```json
{
  "code": 400,
  "error": {
    "innerErrors": [
      "invalid type filters.types is an invalid type unsupported-type"
    ],
    "name": "ValidationError"
  },
  "ok": false
}
```

<h3 id="get-list-of-issues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-list-of-issues-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of issues|
|» fixedDate|string|false|none|The date that the issue was fixed|
|» introducedDate|string|true|none|The date that the issue was introduced into the project|
|» isFixed|boolean|true|none|Whether the issue has been fixed|
|» issue|object|true|none|none|
|» » CVSSv3|string|false|none|The CVSS v3 string that signifies how the CVSS score was calculated (not applicable to licenses)|
|» » credit|[object]|false|none|The list of people responsible for first uncovering or reporting the issue (not applicable to licenses)|
|» » cvssScore|number|false|none|The CVSS score that results from running the CVSSv3 string (not applicable to licenses)|
|» » disclosureTime|string|false|none|The date that the vulnerability was first disclosed (not applicable to licenses)|
|» » exploitMaturity|string|true|none|The exploit maturity of the issue|
|» » id|string|true|none|The identifier of the issue|
|» » identifiers|object|false|none|External identifiers assigned to the issue (not applicable to licenses)|
|» » » CVE|[object]|false|none|Common Vulnerability Enumeration identifiers|
|» » » CWE|[object]|false|none|Common Weakness Enumeration identifiers|
|» » » OSVDB|[object]|false|none|Identifiers assigned by the Open Source Vulnerability Database (OSVDB)|
|» » ignored|[object]|false|none|The list of ignore rules that were applied to the issue (only present if issue was ignored and no `groupBy` in the API request)|
|» » isIgnored|boolean|false|none|Whether the issue has been ignored (only present if there is no `groupBy` in the API request)|
|» » isPatchable|boolean|false|none|Whether the issue can be patched|
|» » isPatched|boolean|false|none|Whether the issue has been patched (not applicable to licenses and only present if there is no `groupBy` in the API request)|
|» » isPinnable|boolean|false|none|Whether the issue can be pinned|
|» » isUpgradable|boolean|false|none|Whether the issue can be fixed by upgrading to a later version of the dependency|
|» » jiraIssueUrl|string|false|none|The link to the Jira issue attached to the vulnerability|
|» » language|string|false|none|The language of the issue|
|» » originalSeverity|string|true|none|The original severity status of the issue, as retrieved from Snyk Vulnerability database, before policies are applied|
|» » package|string|true|none|The name of the package that the issue relates to|
|» » packageManager|string|false|none|The package manager of the issue|
|» » patches|[object]|false|none|A list of patches available for the given issue (not applicable to licenses)|
|» » priorityScore|number|false|none|The priority score ranging between 0-1000|
|» » publicationTime|string|false|none|The date that the vulnerability was first published by Snyk (not applicable to licenses)|
|» » semver|object|false|none|The ranges that are vulnerable and unaffected by the issue|
|» » » unaffected|string|false|none|The ranges that are unaffected by the issue|
|» » » vulnerable|[object]|false|none|The ranges that are vulnerable to the issue|
|» » severity|string|true|none|The severity status of the issue, after policies are applied|
|» » title|string|true|none|The issue title|
|» » type|string|true|none|The issue type, can be "vuln", "license"|
|» » uniqueSeveritiesList|[object]|false|none|A list of all severities in issue per projects|
|» » url|string|true|none|URL to a page containing information about the issue|
|» » version|string|true|none|The version of the package that the issue relates to|
|» patchedDate|string|false|none|The date that the issue was patched|
|» *oneOf*|object|false|none|none|
|» projects|[object]|true|none|When `groupBy` is used, multiple projects may be returned per issue|
|» *oneOf*|object|false|none|none|
|» project|object|true|none|When no `groupBy` is used, a single project is returned per issue|
|» » id|string|true|none|The identifier of the project|
|» » name|string|true|none|The name of the project|
|» » packageManager|string|true|none|The package manager for the project (e.g. npm, rubygems etc)|
|» » source|string|true|none|The source of the project (e.g. github, heroku etc)|
|» » targetFile|string|false|none|The file path to the dependency manifest or lock file (e.g. package.json, Gemfile.lock etc)|
|» » url|string|true|none|URL to a page containing information about the project|
|total|number|true|none|The total number of results found|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|number|true|none|The error response code|
|error|object|true|none|none|
|» innerErrors|[object]|false|none|A list of additional reasons why the error occurred|
|» name|string|true|none|A descriptive message of the error|
|ok|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of latest issues

<a id="opIdGet list of latest issues"></a>

> Code samples

```bash
curl https://example.com/reporting/issues/latest \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "filters": {
      "exploitMaturity": [
        "mature",
        "proof-of-concept",
        "no-known-exploit",
        "no-data"
      ],
      "fixable": false,
      "identifier": "",
      "ignored": false,
      "isFixed": false,
      "isPatchable": false,
      "isPinnable": false,
      "isUpgradable": false,
      "issues": [],
      "languages": [
        "node",
        "javascript",
        "ruby",
        "java",
        "scala",
        "python",
        "golang",
        "php",
        "dotnet",
        "swift-objective-c",
        "elixir",
        "docker",
        "linux",
        "dockerfile",
        "terraform",
        "kubernetes",
        "helm",
        "cloudformation",
        "arm"
      ],
      "orgs": [],
      "patched": false,
      "priorityScore": {
        "max": 1000,
        "min": 0
      },
      "projects": [],
      "severity": [
        "critical",
        "high",
        "medium",
        "low"
      ],
      "types": [
        "vuln",
        "license",
        "configuration"
      ]
    }
  }'
```

`POST /reporting/issues/latest`

> Body parameter

```json
{
  "filters": {
    "exploitMaturity": [
      "mature",
      "proof-of-concept",
      "no-known-exploit",
      "no-data"
    ],
    "fixable": false,
    "identifier": "",
    "ignored": false,
    "isFixed": false,
    "isPatchable": false,
    "isPinnable": false,
    "isUpgradable": false,
    "issues": [],
    "languages": [
      "node",
      "javascript",
      "ruby",
      "java",
      "scala",
      "python",
      "golang",
      "php",
      "dotnet",
      "swift-objective-c",
      "elixir",
      "docker",
      "linux",
      "dockerfile",
      "terraform",
      "kubernetes",
      "helm",
      "cloudformation",
      "arm"
    ],
    "orgs": [],
    "patched": false,
    "priorityScore": {
      "max": 1000,
      "min": 0
    },
    "projects": [],
    "severity": [
      "critical",
      "high",
      "medium",
      "low"
    ],
    "types": [
      "vuln",
      "license",
      "configuration"
    ]
  }
}
```

<h3 id="get-list-of-latest-issues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|The page of results to request|
|perPage|query|number|false|The number of results to return per page (Maximum: 1000)|
|sortBy|query|string|false|The key to sort results by|
|order|query|string|false|The direction to sort results.|
|groupBy|query|string|false|Set to issue to group the same issue in multiple projects|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » exploitMaturity|body|[object]|false|The exploit maturity levels of issues to filter the results by|
|» » fixable|body|boolean|false|If set to `true`, only include issues which are fixable, if set to `false`, only include issues which are not fixable. An issue is fixable if it is either upgradable, patchable or pinnable. Also see isUpgradable, isPatchable and isPinnable filters.|
|» » identifier|body|string|false|Search term to filter issue name by, or an exact CVE or CWE|
|» » ignored|body|boolean|false|If set to `true`, only include issues which are ignored, if set to `false`, only include issues which are not ignored|
|» » isFixed|body|boolean|false|If set to `true`, only include issues which are fixed, if set to `false`, only include issues which are not fixed|
|» » isPatchable|body|boolean|false|If set to `true`, only include issues which are patchable, if set to `false`, only include issues which are not patchable|
|» » isPinnable|body|boolean|false|If set to `true`, only include issues which are pinnable, if set to `false`, only include issues which are not pinnable|
|» » isUpgradable|body|boolean|false|If set to `true`, only include issues which are upgradable, if set to `false`, only include issues which are not upgradable|
|» » issues|body|object|false|The list of issue IDs to filter issues by|
|» » languages|body|[object]|false|The type of languages to filter the results by|
|» » orgs|body|object|true|The list of org IDs to filter the results by|
|» » patched|body|boolean|false|If set to `true`, only include issues which are patched, if set to `false`, only include issues which are not patched|
|» » priorityScore|body|object|false|The priority score ranging between 0-1000|
|» » » max|body|number|false|none|
|» » » min|body|number|false|none|
|» » projects|body|object|false|The list of project IDs to filter issues by, max projects allowed is 1000|
|» » severity|body|[object]|false|The severity levels of issues to filter the results by|
|» » types|body|[object]|false|The type of issues to filter the results by|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortBy|severity|
|sortBy|issueTitle|
|sortBy|projectName|
|sortBy|isFixed|
|sortBy|isPatched|
|sortBy|isIgnored|
|sortBy|introducedDate|
|sortBy|isUpgradable|
|sortBy|isPatchable|
|sortBy|priorityScore|
|groupBy|issue|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "fixedDate": "",
      "introducedDate": "",
      "isFixed": false,
      "issue": {
        "CVSSv3": "",
        "credit": [],
        "cvssScore": 0,
        "disclosureTime": "",
        "exploitMaturity": "",
        "id": "",
        "identifiers": {
          "CVE": [],
          "CWE": [],
          "OSVDB": []
        },
        "ignored": [
          {
            "expires": "",
            "reason": "",
            "source": "cli"
          }
        ],
        "isIgnored": false,
        "isPatchable": false,
        "isPatched": false,
        "isPinnable": false,
        "isUpgradable": false,
        "jiraIssueUrl": "",
        "language": "",
        "originalSeverity": "",
        "package": "",
        "packageManager": "",
        "patches": [
          {
            "comments": [],
            "id": "",
            "modificationTime": "",
            "urls": [],
            "version": ""
          }
        ],
        "priorityScore": 0,
        "publicationTime": "",
        "semver": {
          "unaffected": "",
          "vulnerable": []
        },
        "severity": "",
        "title": "",
        "type": "",
        "uniqueSeveritiesList": [],
        "url": "",
        "version": ""
      },
      "patchedDate": "",
      "projects": [
        {
          "id": "",
          "name": "",
          "packageManager": "",
          "source": "",
          "targetFile": "",
          "url": ""
        }
      ]
    }
  ],
  "total": 0
}
```

> 400 Response

```json
{
  "code": 400,
  "error": {
    "innerErrors": [
      "invalid type filters.types is an invalid type unsupported-type"
    ],
    "name": "ValidationError"
  },
  "ok": false
}
```

<h3 id="get-list-of-latest-issues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-list-of-latest-issues-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of issues|
|» fixedDate|string|false|none|The date that the issue was fixed|
|» introducedDate|string|true|none|The date that the issue was introduced into the project|
|» isFixed|boolean|true|none|Whether the issue has been fixed|
|» issue|object|true|none|none|
|» » CVSSv3|string|false|none|The CVSS v3 string that signifies how the CVSS score was calculated (not applicable to licenses)|
|» » credit|[object]|false|none|The list of people responsible for first uncovering or reporting the issue (not applicable to licenses)|
|» » cvssScore|number|false|none|The CVSS score that results from running the CVSSv3 string (not applicable to licenses)|
|» » disclosureTime|string|false|none|The date that the vulnerability was first disclosed (not applicable to licenses)|
|» » exploitMaturity|string|true|none|The exploit maturity of the issue|
|» » id|string|true|none|The identifier of the issue|
|» » identifiers|object|false|none|External identifiers assigned to the issue (not applicable to licenses)|
|» » » CVE|[object]|false|none|Common Vulnerability Enumeration identifiers|
|» » » CWE|[object]|false|none|Common Weakness Enumeration identifiers|
|» » » OSVDB|[object]|false|none|Identifiers assigned by the Open Source Vulnerability Database (OSVDB)|
|» » ignored|[object]|false|none|The list of ignore rules that were applied to the issue (only present if issue was ignored and no `groupBy` in the API request)|
|» » isIgnored|boolean|false|none|Whether the issue has been ignored (only present if there is no `groupBy` in the API request)|
|» » isPatchable|boolean|false|none|Whether the issue can be patched|
|» » isPatched|boolean|false|none|Whether the issue has been patched (not applicable to licenses and only present if there is no `groupBy` in the API request)|
|» » isPinnable|boolean|false|none|Whether the issue can be pinned|
|» » isUpgradable|boolean|false|none|Whether the issue can be fixed by upgrading to a later version of the dependency|
|» » jiraIssueUrl|string|false|none|The link to the Jira issue attached to the vulnerability|
|» » language|string|false|none|The language of the issue|
|» » originalSeverity|string|true|none|The original severity status of the issue, as retrieved from Snyk Vulnerability database, before policies are applied|
|» » package|string|true|none|The name of the package that the issue relates to|
|» » packageManager|string|false|none|The package manager of the issue|
|» » patches|[object]|false|none|A list of patches available for the given issue (not applicable to licenses)|
|» » priorityScore|number|false|none|The priority score ranging between 0-1000|
|» » publicationTime|string|false|none|The date that the vulnerability was first published by Snyk (not applicable to licenses)|
|» » semver|object|false|none|The ranges that are vulnerable and unaffected by the issue|
|» » » unaffected|string|false|none|The ranges that are unaffected by the issue|
|» » » vulnerable|[object]|false|none|The ranges that are vulnerable to the issue|
|» » severity|string|true|none|The severity status of the issue, after policies are applied|
|» » title|string|true|none|The issue title|
|» » type|string|true|none|The issue type, can be "vuln", "license"|
|» » uniqueSeveritiesList|[object]|false|none|A list of all severities in issue per projects|
|» » url|string|true|none|URL to a page containing information about the issue|
|» » version|string|true|none|The version of the package that the issue relates to|
|» patchedDate|string|false|none|The date that the issue was patched|
|» *oneOf*|object|false|none|none|
|» projects|[object]|true|none|When `groupBy` is used, multiple projects may be returned per issue|
|» *oneOf*|object|false|none|none|
|» project|object|true|none|When no `groupBy` is used, a single project is returned per issue|
|» » id|string|true|none|The identifier of the project|
|» » name|string|true|none|The name of the project|
|» » packageManager|string|true|none|The package manager for the project (e.g. npm, rubygems etc)|
|» » source|string|true|none|The source of the project (e.g. github, heroku etc)|
|» » targetFile|string|false|none|The file path to the dependency manifest or lock file (e.g. package.json, Gemfile.lock etc)|
|» » url|string|true|none|URL to a page containing information about the project|
|total|number|true|none|The total number of results found|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|number|true|none|The error response code|
|error|object|true|none|none|
|» innerErrors|[object]|false|none|A list of additional reasons why the error occurred|
|» name|string|true|none|A descriptive message of the error|
|ok|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="snyk-api-audit-logs">Audit logs</h1>

Get audit logs of your group or organization. Logs are only available for past 3 months. Note that the API returns personally identifiable information and requires the use of either a personal Snyk API token or a Snyk service account token with Group Admin level permission.

## Get group level audit logs

<a id="opIdGet group level audit logs"></a>

> Code samples

```bash
curl https://example.com/group/4a18d42f-0706-4ad0-b127-24078731fbea/audit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "filters": {
      "event": "api.access",
      "excludeEvent": "api.access"
    }
  }'
```

`POST /group/{groupId}/audit`

> Body parameter

```json
{
  "filters": {
    "event": "api.access",
    "excludeEvent": "api.access"
  }
}
```

<h3 id="get-group-level-audit-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The group ID. The `API_KEY` must have access to this group.|
|from|query|string|false|The date you wish to fetch results from, in the format YYYY-MM-DD. Default is 3 months ago. Please note that logs are only available for past 3 months.|
|to|query|string|false|The date you wish to fetch results until, in the format YYYY-MM-DD. Default is today. Please note that logs are only available for past 3 months.|
|page|query|number|false|The page of results to request. Audit logs are returned in page sizes of 100|
|sortOrder|query|string|false|The sort order of the returned audit logs by date. Values: `ASC`, `DESC`. Default: `DESC`.|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » email|body|string|false|User email address. Will fetch only audit logs originated from this user's actions. Ignored if the userId filter is set.|
|» » event|body|string|false|Will return only logs for this specific event. Only one of event and excludeEvent may be specified in a request.|
|» » excludeEvent|body|string|false|Will return logs except logs for this event. Only one of event and excludeEvent may be specified in a request.|
|» » projectId|body|string|false|Will return only logs for this specific project.|
|» » userId|body|string|false|User public ID. Will fetch only audit logs originated from this user's actions.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » event|api.access|
|» » event|group.cloud_config.settings.edit|
|» » event|group.create|
|» » event|group.delete|
|» » event|group.edit|
|» » event|group.feature_flags.edit|
|» » event|group.notification_settings.edit|
|» » event|group.org.add|
|» » event|group.org.remove|
|» » event|group.policy.create|
|» » event|group.policy.delete|
|» » event|group.policy.edit|
|» » event|group.request_access_settings.edit|
|» » event|group.role.create|
|» » event|group.role.edit|
|» » event|group.service_account.create|
|» » event|group.service_account.delete|
|» » event|group.service_account.edit|
|» » event|group.settings.edit|
|» » event|group.settings.feature_flag.edit|
|» » event|group.sso.auth0_connection.create|
|» » event|group.sso.auth0_connection.edit|
|» » event|group.sso.create|
|» » event|group.sso.edit|
|» » event|group.tag.create|
|» » event|group.tag.delete|
|» » event|group.user.add|
|» » event|group.user.provision.accept|
|» » event|group.user.provision.create|
|» » event|group.user.provision.delete|
|» » event|group.user.remove|
|» » event|group.user.role.edit|
|» » excludeEvent|api.access|
|» » excludeEvent|group.cloud_config.settings.edit|
|» » excludeEvent|group.create|
|» » excludeEvent|group.delete|
|» » excludeEvent|group.edit|
|» » excludeEvent|group.feature_flags.edit|
|» » excludeEvent|group.notification_settings.edit|
|» » excludeEvent|group.org.add|
|» » excludeEvent|group.org.remove|
|» » excludeEvent|group.policy.create|
|» » excludeEvent|group.policy.delete|
|» » excludeEvent|group.policy.edit|
|» » excludeEvent|group.request_access_settings.edit|
|» » excludeEvent|group.role.create|
|» » excludeEvent|group.role.edit|
|» » excludeEvent|group.service_account.create|
|» » excludeEvent|group.service_account.delete|
|» » excludeEvent|group.service_account.edit|
|» » excludeEvent|group.settings.edit|
|» » excludeEvent|group.settings.feature_flag.edit|
|» » excludeEvent|group.sso.auth0_connection.create|
|» » excludeEvent|group.sso.auth0_connection.edit|
|» » excludeEvent|group.sso.create|
|» » excludeEvent|group.sso.edit|
|» » excludeEvent|group.tag.create|
|» » excludeEvent|group.tag.delete|
|» » excludeEvent|group.user.add|
|» » excludeEvent|group.user.provision.accept|
|» » excludeEvent|group.user.provision.create|
|» » excludeEvent|group.user.provision.delete|
|» » excludeEvent|group.user.remove|
|» » excludeEvent|group.user.role.edit|

> Example responses

> 200 Response

```json
[
  {
    "content": {
      "after": {
        "name": "Group Current Name"
      },
      "before": {
        "name": "Group Previous Name"
      }
    },
    "created": "2017-04-11T21:00:00.000Z",
    "event": "group.edit",
    "groupId": "4a18d42f-0706-4ad0-b127-24078731fbea",
    "orgId": "4a18d42f-0706-4ad0-b127-24078731fbea",
    "projectId": null,
    "userId": "4a18d42f-0706-4ad0-b127-24078731fbea"
  }
]
```

<h3 id="get-group-level-audit-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get organization level audit logs

<a id="opIdGet organization level audit logs"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbea/audit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "filters": {
      "event": "api.access",
      "excludeEvent": "api.access"
    }
  }'
```

`POST /org/{orgId}/audit`

> Body parameter

```json
{
  "filters": {
    "event": "api.access",
    "excludeEvent": "api.access"
  }
}
```

<h3 id="get-organization-level-audit-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID. The `API_KEY` must have access to this organization.|
|from|query|string|false|The date you wish to fetch results from, in the format YYYY-MM-DD. Default is 3 months ago. Please note that logs are only available for past 3 months.|
|to|query|string|false|The date you wish to fetch results until, in the format YYYY-MM-DD. Default is today. Please note that logs are only available for past 3 months.|
|page|query|number|false|The page of results to request. Audit logs are returned in page sizes of 100.|
|sortOrder|query|string|false|The sort order of the returned audit logs by date. Values: `ASC`, `DESC`. Default: `DESC`.|
|body|body|object|false|none|
|» filters|body|object|false|none|
|» » email|body|string|false|User email address. Will fetch only audit logs originated from this user's actions. Ignored if the userId filter is set.|
|» » event|body|string|false|Will return only logs for this specific event. Only one of event and excludeEvent may be specified in a request.|
|» » excludeEvent|body|string|false|Will return logs except logs for this event. Only one of event and excludeEvent may be specified in a request.|
|» » projectId|body|string|false|Will return only logs for this specific project.|
|» » userId|body|string|false|User public ID. Will fetch only audit logs originated from this user's actions.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » event|api.access|
|» » event|org.billing.info.edit|
|» » event|org.billing.subscription.edit|
|» » event|org.cloud_config.settings.edit|
|» » event|org.create|
|» » event|org.delete|
|» » event|org.edit|
|» » event|org.ignore_policy.edit|
|» » event|org.integration.create|
|» » event|org.integration.delete|
|» » event|org.integration.edit|
|» » event|org.integration.settings.edit|
|» » event|org.language_settings.edit|
|» » event|org.license_rule.create|
|» » event|org.license_rule.delete|
|» » event|org.license_rule.edit|
|» » event|org.notification_settings.edit|
|» » event|org.policy.edit|
|» » event|org.project.add|
|» » event|org.project.attributes.edit|
|» » event|org.project.delete|
|» » event|org.project.edit|
|» » event|org.project.fix_pr.auto_open|
|» » event|org.project.fix_pr.manual_open|
|» » event|org.project.ignore.create|
|» » event|org.project.ignore.delete|
|» » event|org.project.ignore.edit|
|» » event|org.project.monitor|
|» » event|org.project.pr_check.edit|
|» » event|org.project.remove|
|» » event|org.project.settings.delete|
|» » event|org.project.settings.edit|
|» » event|org.project.stop_monitor|
|» » event|org.project.tag.add|
|» » event|org.project.tag.remove|
|» » event|org.project.test|
|» » event|org.request_access_settings.edit|
|» » event|org.sast_settings.edit|
|» » event|org.service_account.create|
|» » event|org.service_account.delete|
|» » event|org.service_account.edit|
|» » event|org.service_account.membership.upsert|
|» » event|org.settings.feature_flag.edit|
|» » event|org.target.create|
|» » event|org.target.delete|
|» » event|org.user.add|
|» » event|org.user.invite|
|» » event|org.user.invite.accept|
|» » event|org.user.invite.revoke|
|» » event|org.user.invite_link.accept|
|» » event|org.user.invite_link.create|
|» » event|org.user.invite_link.revoke|
|» » event|org.user.leave|
|» » event|org.user.provision.accept|
|» » event|org.user.provision.create|
|» » event|org.user.provision.delete|
|» » event|org.user.remove|
|» » event|org.user.role.create|
|» » event|org.user.role.delete|
|» » event|org.user.role.details.edit|
|» » event|org.user.role.edit|
|» » event|org.user.role.permissions.edit|
|» » event|org.webhook.add|
|» » event|org.webhook.delete|
|» » excludeEvent|api.access|
|» » excludeEvent|org.billing.info.edit|
|» » excludeEvent|org.billing.subscription.edit|
|» » excludeEvent|org.cloud_config.settings.edit|
|» » excludeEvent|org.create|
|» » excludeEvent|org.delete|
|» » excludeEvent|org.edit|
|» » excludeEvent|org.ignore_policy.edit|
|» » excludeEvent|org.integration.create|
|» » excludeEvent|org.integration.delete|
|» » excludeEvent|org.integration.edit|
|» » excludeEvent|org.integration.settings.edit|
|» » excludeEvent|org.language_settings.edit|
|» » excludeEvent|org.license_rule.create|
|» » excludeEvent|org.license_rule.delete|
|» » excludeEvent|org.license_rule.edit|
|» » excludeEvent|org.notification_settings.edit|
|» » excludeEvent|org.policy.edit|
|» » excludeEvent|org.project.add|
|» » excludeEvent|org.project.attributes.edit|
|» » excludeEvent|org.project.delete|
|» » excludeEvent|org.project.edit|
|» » excludeEvent|org.project.fix_pr.auto_open|
|» » excludeEvent|org.project.fix_pr.manual_open|
|» » excludeEvent|org.project.ignore.create|
|» » excludeEvent|org.project.ignore.delete|
|» » excludeEvent|org.project.ignore.edit|
|» » excludeEvent|org.project.monitor|
|» » excludeEvent|org.project.pr_check.edit|
|» » excludeEvent|org.project.remove|
|» » excludeEvent|org.project.settings.delete|
|» » excludeEvent|org.project.settings.edit|
|» » excludeEvent|org.project.stop_monitor|
|» » excludeEvent|org.project.tag.add|
|» » excludeEvent|org.project.tag.remove|
|» » excludeEvent|org.project.test|
|» » excludeEvent|org.request_access_settings.edit|
|» » excludeEvent|org.sast_settings.edit|
|» » excludeEvent|org.service_account.create|
|» » excludeEvent|org.service_account.delete|
|» » excludeEvent|org.service_account.edit|
|» » excludeEvent|org.service_account.membership.upsert|
|» » excludeEvent|org.settings.feature_flag.edit|
|» » excludeEvent|org.target.create|
|» » excludeEvent|org.target.delete|
|» » excludeEvent|org.user.add|
|» » excludeEvent|org.user.invite|
|» » excludeEvent|org.user.invite.accept|
|» » excludeEvent|org.user.invite.revoke|
|» » excludeEvent|org.user.invite_link.accept|
|» » excludeEvent|org.user.invite_link.create|
|» » excludeEvent|org.user.invite_link.revoke|
|» » excludeEvent|org.user.leave|
|» » excludeEvent|org.user.provision.accept|
|» » excludeEvent|org.user.provision.create|
|» » excludeEvent|org.user.provision.delete|
|» » excludeEvent|org.user.remove|
|» » excludeEvent|org.user.role.create|
|» » excludeEvent|org.user.role.delete|
|» » excludeEvent|org.user.role.details.edit|
|» » excludeEvent|org.user.role.edit|
|» » excludeEvent|org.user.role.permissions.edit|
|» » excludeEvent|org.webhook.add|
|» » excludeEvent|org.webhook.delete|

> Example responses

> 200 Response

```json
[
  {
    "content": {
      "email": "someone@snyk.io",
      "isAdmin": false
    },
    "created": "2017-04-11T21:00:00.000Z",
    "event": "org.user.invite",
    "groupId": "4a18d42f-0706-4ad0-b127-24078731fbea",
    "orgId": "4a18d42f-0706-4ad0-b127-24078731fbea",
    "projectId": null,
    "userId": "4a18d42f-0706-4ad0-b127-24078731fbea"
  },
  {
    "content": {
      "after": "ADMIN",
      "before": "COLLABORATOR",
      "userPublicId": "4a18d42f-0706-4ad0-b127-24078731fbea"
    },
    "created": "2017-05-15T06:02:45.497Z",
    "event": "org.user.role.edit",
    "groupId": "4a18d42f-0706-4ad0-b127-24078731fbea",
    "orgId": "4a18d42f-0706-4ad0-b127-24078731fbea",
    "projectId": null,
    "userId": "4a18d42f-0706-4ad0-b127-24078731fbea"
  }
]
```

<h3 id="get-organization-level-audit-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="snyk-api-webhooks">Webhooks</h1>

## Intro

> Warning: the webhooks feature is currently in beta. While in this status, we may change the API and the structure of webhook payloads at any time, without notice.

Webhooks allow you to be notified of events taking place in the Snyk system and react to changes in your projects.

Webhooks associate an event type with a URL. When something triggers that event type, Snyk sends an HTTP POST request to the URL with a payload containing information about the event. Currently supported targets/scan types are Open Source and container.

## Who can access this feature?

Only Business and Enterprise customers.

## Configuring webhooks

Webhooks can be configured using our API at organization level, by organization admins.

## List webhooks

<a id="opIdList webhooks"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/webhooks
```

`GET /org/{orgId}/webhooks`

<h3 id="list-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID to list projects for. The `API_KEY` must have access to this organization.|

<h3 id="list-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a webhook

<a id="opIdCreate a webhook"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "secret": "string",
    "url": "string"
  }'
```

`POST /org/{orgId}/webhooks`

> Body parameter

```json
{
  "secret": "string",
  "url": "string"
}
```

<h3 id="create-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID to list projects for. The `API_KEY` must have access to this organization.|
|body|body|object|false|none|
|» secret|body|string|false|This is a password you create, that Snyk uses to sign our transports to you, so you be sure the notification is authentic. Your `secret` should: Be a random string with high entropy; Not be used for anything else; Only known to Snyk and your webhook transport consuming code;|
|» url|body|string|false|Webhooks can only be configured for URLs using the `https` protocol. `http` is not allowed.|

<h3 id="create-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a webhook

<a id="opIdRetrieve a webhook"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/webhooks/463c1ee5-31bc-428c-b451-b79a3270db08
```

`GET /org/{orgId}/webhooks/{webhookId}`

<h3 id="retrieve-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID the project belongs to. The `API_KEY` must have access to this organization.|
|webhookId|path|string|true|The webhook ID.|

<h3 id="retrieve-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a webhook

<a id="opIdDelete a webhook"></a>

> Code samples

```bash
curl https://example.com/org/string/webhooks/string \
  -X DELETE
```

`DELETE /org/{orgId}/webhooks/{webhookId}`

<h3 id="delete-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|Automatically added|
|webhookId|path|string|true|Automatically added|

<h3 id="delete-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Ping a webhook

<a id="opIdPing a webhook"></a>

> Code samples

```bash
curl https://example.com/org/4a18d42f-0706-4ad0-b127-24078731fbed/webhooks/463c1ee5-31bc-428c-b451-b79a3270db08/ping \
  -X POST
```

`POST /org/{orgId}/webhooks/{webhookId}/ping`

<h3 id="ping-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgId|path|string|true|The organization ID the project belongs to. The `API_KEY` must have access to this organization.|
|webhookId|path|string|true|The webhook ID.|

<h3 id="ping-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_A_specific_entitlement_by_organization">A_specific_entitlement_by_organization</h2>
<!-- backwards compatibility -->
<a id="schemaa_specific_entitlement_by_organization"></a>
<a id="schema_A_specific_entitlement_by_organization"></a>
<a id="tocSa_specific_entitlement_by_organization"></a>
<a id="tocsa_specific_entitlement_by_organization"></a>

```json
null
```

<h2 id="tocS_Activate_an_individual_project">Activate_an_individual_project</h2>
<!-- backwards compatibility -->
<a id="schemaactivate_an_individual_project"></a>
<a id="schema_Activate_an_individual_project"></a>
<a id="tocSactivate_an_individual_project"></a>
<a id="tocsactivate_an_individual_project"></a>

```json
null
```

<h2 id="tocS_Add_member_body">Add_member_body</h2>
<!-- backwards compatibility -->
<a id="schemaadd_member_body"></a>
<a id="schema_Add_member_body"></a>
<a id="tocSadd_member_body"></a>
<a id="tocsadd_member_body"></a>

```json
{
  "role": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|false|none|The role of the user, "admin" or "collaborator".|
|userId|string|false|none|The id of the user.|

<h2 id="tocS_Aggregated_Project_Snapshot_Issues">Aggregated_Project_Snapshot_Issues</h2>
<!-- backwards compatibility -->
<a id="schemaaggregated_project_snapshot_issues"></a>
<a id="schema_Aggregated_Project_Snapshot_Issues"></a>
<a id="tocSaggregated_project_snapshot_issues"></a>
<a id="tocsaggregated_project_snapshot_issues"></a>

```json
null
```

<h2 id="tocS_Aggregated_Project_issues">Aggregated_Project_issues</h2>
<!-- backwards compatibility -->
<a id="schemaaggregated_project_issues"></a>
<a id="schema_Aggregated_Project_issues"></a>
<a id="tocSaggregated_project_issues"></a>
<a id="tocsaggregated_project_issues"></a>

```json
null
```

<h2 id="tocS_Aggregated_project_issues">Aggregated_project_issues</h2>
<!-- backwards compatibility -->
<a id="schemaaggregated_project_issues-1"></a>
<a id="schema_Aggregated_project_issues"></a>
<a id="tocSaggregated_project_issues-1"></a>
<a id="tocsaggregated_project_issues-1"></a>

```json
{
  "issues": [
    {
      "fixInfo": {
        "fixedIn": [
          null
        ],
        "isFixable": true,
        "isPartiallyFixable": true,
        "isPatchable": true,
        "isPinnable": true,
        "isUpgradable": true,
        "nearestFixedInVersion": "string"
      },
      "id": "string",
      "ignoreReasons": [
        null
      ],
      "introducedThrough": [
        null
      ],
      "isIgnored": true,
      "isPatched": true,
      "issueData": {
        "CVSSv3": "string",
        "credit": [
          null
        ],
        "cvssScore": 0,
        "description": "string",
        "disclosureTime": "string",
        "exploitMaturity": "string",
        "id": "string",
        "identifiers": {
          "CVE": [
            null
          ],
          "CWE": [
            null
          ],
          "OSVDB": [
            null
          ]
        },
        "isMaliciousPackage": true,
        "language": "string",
        "nearestFixedInVersion": "string",
        "originalSeverity": "string",
        "patches": [
          null
        ],
        "path": "string",
        "publicationTime": "string",
        "semver": {
          "unaffected": "string",
          "vulnerable": [
            null
          ]
        },
        "severity": "string",
        "title": "string",
        "url": "string",
        "violatedPolicyPublicId": "string"
      },
      "issueType": "string",
      "links": {
        "paths": "string"
      },
      "pkgName": "string",
      "pkgVersions": [
        "string"
      ],
      "priority": {
        "factors": [
          null
        ],
        "score": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|[object]|false|none|An array of identified issues|

<h2 id="tocS_Aggregated_project_issues_filters">Aggregated_project_issues_filters</h2>
<!-- backwards compatibility -->
<a id="schemaaggregated_project_issues_filters"></a>
<a id="schema_Aggregated_project_issues_filters"></a>
<a id="tocSaggregated_project_issues_filters"></a>
<a id="tocsaggregated_project_issues_filters"></a>

```json
{
  "filters": {
    "exploitMaturity": [
      null
    ],
    "ignored": true,
    "patched": true,
    "priority": {
      "score": {
        "max": 0,
        "min": 0
      }
    },
    "severities": [
      null
    ],
    "types": [
      null
    ]
  },
  "includeDescription": true,
  "includeIntroducedThrough": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|includeDescription|boolean|false|none|If set to `true`, Include issue's description, if set to `false` (by default), it won't (Non-IaC projects only)|
|includeIntroducedThrough|boolean|false|none|If set to `true`, Include issue's introducedThrough, if set to `false` (by default), it won't. It's for container only projects (Non-IaC projects only)|

<h2 id="tocS_All_ignores">All_ignores</h2>
<!-- backwards compatibility -->
<a id="schemaall_ignores"></a>
<a id="schema_All_ignores"></a>
<a id="tocSall_ignores"></a>
<a id="tocsall_ignores"></a>

```json
{
  "issueId": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueId|[object]|true|none|The issue ID that should be ignored.|

<h2 id="tocS_All_jira_issues">All_jira_issues</h2>
<!-- backwards compatibility -->
<a id="schemaall_jira_issues"></a>
<a id="schema_All_jira_issues"></a>
<a id="tocSall_jira_issues"></a>
<a id="tocsall_jira_issues"></a>

```json
{
  "issueId": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueId|[object]|true|none|The issue ID and relating jira issue.|

<h2 id="tocS_All_projects">All_projects</h2>
<!-- backwards compatibility -->
<a id="schemaall_projects"></a>
<a id="schema_All_projects"></a>
<a id="tocSall_projects"></a>
<a id="tocsall_projects"></a>

```json
null
```

<h2 id="tocS_AssignmentType">AssignmentType</h2>
<!-- backwards compatibility -->
<a id="schemaassignmenttype"></a>
<a id="schema_AssignmentType"></a>
<a id="tocSassignmenttype"></a>
<a id="tocsassignmenttype"></a>

```json
"auto"
```

<h2 id="tocS_AutoRemediationPrs">AutoRemediationPrs</h2>
<!-- backwards compatibility -->
<a id="schemaautoremediationprs"></a>
<a id="schema_AutoRemediationPrs"></a>
<a id="tocSautoremediationprs"></a>
<a id="tocsautoremediationprs"></a>

```json
{
  "backlogPrsEnabled": true,
  "freshPrsEnabled": true,
  "usePatchRemediation": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backlogPrsEnabled|boolean|false|none|If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified|
|freshPrsEnabled|boolean|false|none|If true, allows automatic remediation of prioritized backlog issues|
|usePatchRemediation|boolean|false|none|If true, allows using patched remediation|

<h2 id="tocS_BrokerSettings">BrokerSettings</h2>
<!-- backwards compatibility -->
<a id="schemabrokersettings"></a>
<a id="schema_BrokerSettings"></a>
<a id="tocSbrokersettings"></a>
<a id="tocsbrokersettings"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|

<h2 id="tocS_ComposerLock">ComposerLock</h2>
<!-- backwards compatibility -->
<a id="schemacomposerlock"></a>
<a id="schema_ComposerLock"></a>
<a id="tocScomposerlock"></a>
<a id="tocscomposerlock"></a>

```json
{
  "contents": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|string|false|none|none|

<h2 id="tocS_Create_organization">Create_organization</h2>
<!-- backwards compatibility -->
<a id="schemacreate_organization"></a>
<a id="schema_Create_organization"></a>
<a id="tocScreate_organization"></a>
<a id="tocscreate_organization"></a>

```json
null
```

<h2 id="tocS_Create_organizations_body">Create_organizations_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_organizations_body"></a>
<a id="schema_Create_organizations_body"></a>
<a id="tocScreate_organizations_body"></a>
<a id="tocscreate_organizations_body"></a>

```json
{
  "groupId": "string",
  "name": "string",
  "sourceOrgId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupId|string|false|none|The group ID. The `API_KEY` must have access to this group.|
|name|string|true|none|The name of the new organization|
|sourceOrgId|string|false|none|The id of an organization to copy settings from.<br><br>If provided, this organization must be associated with the same group.<br><br>The items that will be copied are: <br>Source control integrations (GitHub, GitLab, BitBucket)<br>\+ Container registries integrations (ACR, Docker Hub, ECR, GCR)<br>\+ Container orchestrators integrations (Kubernetes)<br>\+ PaaS and Serverless Integrations (Heroku, AWS Lambda)<br>\+ Notification integrations (Slack, Jira)<br>\+ Policies<br>\+ Ignore settings<br>\+ Language settings<br>\+ Infrastructure as Code settings<br>\+ Snyk Code settings<br><br>The following will not be copied across:<br>Service accounts<br>\+ Members<br>\+ Projects<br>\+ Notification preferences|

<h2 id="tocS_Deactivate_an_individual_project">Deactivate_an_individual_project</h2>
<!-- backwards compatibility -->
<a id="schemadeactivate_an_individual_project"></a>
<a id="schema_Deactivate_an_individual_project"></a>
<a id="tocSdeactivate_an_individual_project"></a>
<a id="tocsdeactivate_an_individual_project"></a>

```json
null
```

<h2 id="tocS_Delete_Tag_From_Group">Delete_Tag_From_Group</h2>
<!-- backwards compatibility -->
<a id="schemadelete_tag_from_group"></a>
<a id="schema_Delete_Tag_From_Group"></a>
<a id="tocSdelete_tag_from_group"></a>
<a id="tocsdelete_tag_from_group"></a>

```json
null
```

<h2 id="tocS_Delete_tag_body">Delete_tag_body</h2>
<!-- backwards compatibility -->
<a id="schemadelete_tag_body"></a>
<a id="schema_Delete_tag_body"></a>
<a id="tocSdelete_tag_body"></a>
<a id="tocsdelete_tag_body"></a>

```json
{
  "force": true,
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|force|boolean|false|none|force delete tag that has entities (default is `false`).|
|key|string|false|none|Valid tag key.|
|value|string|false|none|Valid tag value.|

<h2 id="tocS_DepGraph">DepGraph</h2>
<!-- backwards compatibility -->
<a id="schemadepgraph"></a>
<a id="schema_DepGraph"></a>
<a id="tocSdepgraph"></a>
<a id="tocsdepgraph"></a>

```json
null
```

<h2 id="tocS_DepGraphData">DepGraphData</h2>
<!-- backwards compatibility -->
<a id="schemadepgraphdata"></a>
<a id="schema_DepGraphData"></a>
<a id="tocSdepgraphdata"></a>
<a id="tocsdepgraphdata"></a>

```json
{
  "graph": {
    "nodes": [
      null
    ],
    "rootNodeId": "string"
  },
  "pkgManager": {
    "name": "string",
    "repositories": [
      null
    ]
  },
  "pkgs": [
    null
  ],
  "schemaVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|graph|[Graph](#schemagraph)|true|none|none|
|pkgManager|[PkgManager](#schemapkgmanager)|true|none|none|
|pkgs|[object]|true|none|Array of package dependencies.|
|schemaVersion|string|true|none|Snyk DepGraph library schema version.|

<h2 id="tocS_Dep_Graph">Dep_Graph</h2>
<!-- backwards compatibility -->
<a id="schemadep_graph"></a>
<a id="schema_Dep_Graph"></a>
<a id="tocSdep_graph"></a>
<a id="tocsdep_graph"></a>

```json
null
```

<h2 id="tocS_Dependencies">Dependencies</h2>
<!-- backwards compatibility -->
<a id="schemadependencies"></a>
<a id="schema_Dependencies"></a>
<a id="tocSdependencies"></a>
<a id="tocsdependencies"></a>

```json
{
  "results": [
    {
      "copyright": [
        null
      ],
      "dependenciesWithIssues": [
        null
      ],
      "deprecatedVersions": [
        null
      ],
      "firstPublishedDate": "string",
      "id": "string",
      "isDeprecated": true,
      "issuesCritical": 0,
      "issuesHigh": 0,
      "issuesLow": 0,
      "issuesMedium": 0,
      "latestVersion": "string",
      "latestVersionPublishedDate": "string",
      "licenses": [
        {
          "id": "string",
          "license": "string",
          "title": "string"
        }
      ],
      "name": "string",
      "projects": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "type": "string",
      "version": "string"
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of issues|
|total|number|false|none|The number of results returned|

<h2 id="tocS_Dependencies_by_organization">Dependencies_by_organization</h2>
<!-- backwards compatibility -->
<a id="schemadependencies_by_organization"></a>
<a id="schema_Dependencies_by_organization"></a>
<a id="tocSdependencies_by_organization"></a>
<a id="tocsdependencies_by_organization"></a>

```json
null
```

<h2 id="tocS_Dependencies_filters">Dependencies_filters</h2>
<!-- backwards compatibility -->
<a id="schemadependencies_filters"></a>
<a id="schema_Dependencies_filters"></a>
<a id="tocSdependencies_filters"></a>
<a id="tocsdependencies_filters"></a>

```json
{
  "filters": {
    "depStatus": "string",
    "dependencies": [
      null
    ],
    "languages": [
      null
    ],
    "licenses": [
      null
    ],
    "projects": [
      null
    ],
    "severity": [
      null
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|

<h2 id="tocS_Entitlements_by_organization">Entitlements_by_organization</h2>
<!-- backwards compatibility -->
<a id="schemaentitlements_by_organization"></a>
<a id="schema_Entitlements_by_organization"></a>
<a id="tocSentitlements_by_organization"></a>
<a id="tocsentitlements_by_organization"></a>

```json
null
```

<h2 id="tocS_Error_Response">Error_Response</h2>
<!-- backwards compatibility -->
<a id="schemaerror_response"></a>
<a id="schema_Error_Response"></a>
<a id="tocSerror_response"></a>
<a id="tocserror_response"></a>

```json
{
  "code": 0,
  "error": {
    "innerErrors": [
      null
    ],
    "name": "string"
  },
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|number|true|none|The error response code|
|error|object|true|none|none|
|ok|boolean|true|none|none|

<h2 id="tocS_Function">Function</h2>
<!-- backwards compatibility -->
<a id="schemafunction"></a>
<a id="schema_Function"></a>
<a id="tocSfunction"></a>
<a id="tocsfunction"></a>

```json
{
  "functionId": {
    "className?": "string",
    "filePath?": "string",
    "functionName": "string"
  },
  "version": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionId|[FunctionId](#schemafunctionid)|false|none|none|
|version|[object]|false|none|Versions this function relates to.|

<h2 id="tocS_FunctionId">FunctionId</h2>
<!-- backwards compatibility -->
<a id="schemafunctionid"></a>
<a id="schema_FunctionId"></a>
<a id="tocSfunctionid"></a>
<a id="tocsfunctionid"></a>

```json
{
  "className?": "string",
  "filePath?": "string",
  "functionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|className?|string|false|none|Class name (Java only).|
|filePath?|string|false|none|Path to file (Javascript only).|
|functionName|string|false|none|Function name.|

<h2 id="tocS_GoPkgLock">GoPkgLock</h2>
<!-- backwards compatibility -->
<a id="schemagopkglock"></a>
<a id="schema_GoPkgLock"></a>
<a id="tocSgopkglock"></a>
<a id="tocsgopkglock"></a>

```json
{
  "contents": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|string|false|none|none|

<h2 id="tocS_Gradle">Gradle</h2>
<!-- backwards compatibility -->
<a id="schemagradle"></a>
<a id="schema_Gradle"></a>
<a id="tocSgradle"></a>
<a id="tocsgradle"></a>

```json
null
```

<h2 id="tocS_GradleFile">GradleFile</h2>
<!-- backwards compatibility -->
<a id="schemagradlefile"></a>
<a id="schema_GradleFile"></a>
<a id="tocSgradlefile"></a>
<a id="tocsgradlefile"></a>

```json
{
  "contents": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|string|true|none|The contents of the file, encoded according to the `encoding` field.|

<h2 id="tocS_Gradle_request_payload">Gradle_request_payload</h2>
<!-- backwards compatibility -->
<a id="schemagradle_request_payload"></a>
<a id="schema_Gradle_request_payload"></a>
<a id="tocSgradle_request_payload"></a>
<a id="tocsgradle_request_payload"></a>

```json
{
  "encoding": "plain",
  "files": {
    "target": {
      "contents": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoding|string|false|none|the encoding for the manifest files sent.|
|files|object|true|none|The manifest files:|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding|plain|
|encoding|base64|

<h2 id="tocS_Graph">Graph</h2>
<!-- backwards compatibility -->
<a id="schemagraph"></a>
<a id="schema_Graph"></a>
<a id="tocSgraph"></a>
<a id="tocsgraph"></a>

```json
{
  "nodes": [
    null
  ],
  "rootNodeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodes|[object]|true|none|Array of node objects.|
|rootNodeId|string|true|none|Root node id.|

<h2 id="tocS_GraphDependency">GraphDependency</h2>
<!-- backwards compatibility -->
<a id="schemagraphdependency"></a>
<a id="schema_GraphDependency"></a>
<a id="tocSgraphdependency"></a>
<a id="tocsgraphdependency"></a>

```json
{
  "nodeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeId|string|true|none|Node id unique across the graph.|

<h2 id="tocS_Group_level_audit_logs">Group_level_audit_logs</h2>
<!-- backwards compatibility -->
<a id="schemagroup_level_audit_logs"></a>
<a id="schema_Group_level_audit_logs"></a>
<a id="tocSgroup_level_audit_logs"></a>
<a id="tocsgroup_level_audit_logs"></a>

```json
null
```

<h2 id="tocS_Group_settings">Group_settings</h2>
<!-- backwards compatibility -->
<a id="schemagroup_settings"></a>
<a id="schema_Group_settings"></a>
<a id="tocSgroup_settings"></a>
<a id="tocsgroup_settings"></a>

```json
{
  "requestAccess": {
    "enabled": true
  },
  "sessionLength": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestAccess|object|false|none|Can only be updated if `API_KEY` has edit access to request access settings.|
|sessionLength|number|false|none|The new session length for the group in minutes. This must be an integer between 1 and 43200 (30 days). Setting this value to null will result in this group inheriting from the global default of 30 days.|

<h2 id="tocS_Groups_Audit_logs_filters">Groups_Audit_logs_filters</h2>
<!-- backwards compatibility -->
<a id="schemagroups_audit_logs_filters"></a>
<a id="schema_Groups_Audit_logs_filters"></a>
<a id="tocSgroups_audit_logs_filters"></a>
<a id="tocsgroups_audit_logs_filters"></a>

```json
{
  "filters": {
    "email": "string",
    "event": "api.access",
    "excludeEvent": "api.access",
    "projectId": "string",
    "userId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|

<h2 id="tocS_Ignore">Ignore</h2>
<!-- backwards compatibility -->
<a id="schemaignore"></a>
<a id="schema_Ignore"></a>
<a id="tocSignore"></a>
<a id="tocsignore"></a>

```json
{
  "ignorePath": {
    "created": "string",
    "disregardIfFixable": true,
    "expires": "string",
    "ignoredBy": {
      "email": "string",
      "id": "string",
      "name": "string"
    },
    "reason": "string",
    "reasonType": "not-vulnerable"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ignorePath|object|true|none|The path that should be ignored. Wildcards can be specified with a `*`.|

<h2 id="tocS_Ignore_rule">Ignore_rule</h2>
<!-- backwards compatibility -->
<a id="schemaignore_rule"></a>
<a id="schema_Ignore_rule"></a>
<a id="tocSignore_rule"></a>
<a id="tocsignore_rule"></a>

```json
{
  "disregardIfFixable": true,
  "expires": "string",
  "ignorePath": "string",
  "reason": "string",
  "reasonType": "not-vulnerable"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disregardIfFixable|boolean|true|none|Only ignore the issue if no upgrade or patch is available.|
|expires|string|false|none|The timestamp that the issue will no longer be ignored.|
|ignorePath|string|false|none|The path to ignore (default is `*` which represents all paths).|
|reason|string|false|none|The reason that the issue was ignored.|
|reasonType|string|true|none|The classification of the ignore.|

#### Enumerated Values

|Property|Value|
|---|---|
|reasonType|not-vulnerable|
|reasonType|wont-fix|
|reasonType|temporary-ignore|

<h2 id="tocS_Ignore_rules">Ignore_rules</h2>
<!-- backwards compatibility -->
<a id="schemaignore_rules"></a>
<a id="schema_Ignore_rules"></a>
<a id="tocSignore_rules"></a>
<a id="tocsignore_rules"></a>

```json
[
  null
]
```

<h2 id="tocS_Ignored_issues">Ignored_issues</h2>
<!-- backwards compatibility -->
<a id="schemaignored_issues"></a>
<a id="schema_Ignored_issues"></a>
<a id="tocSignored_issues"></a>
<a id="tocsignored_issues"></a>

```json
null
```

<h2 id="tocS_Ignores">Ignores</h2>
<!-- backwards compatibility -->
<a id="schemaignores"></a>
<a id="schema_Ignores"></a>
<a id="tocSignores"></a>
<a id="tocsignores"></a>

```json
[
  null
]
```

<h2 id="tocS_Import">Import</h2>
<!-- backwards compatibility -->
<a id="schemaimport"></a>
<a id="schema_Import"></a>
<a id="tocSimport"></a>
<a id="tocsimport"></a>

```json
null
```

<h2 id="tocS_Import_job">Import_job</h2>
<!-- backwards compatibility -->
<a id="schemaimport_job"></a>
<a id="schema_Import_job"></a>
<a id="tocSimport_job"></a>
<a id="tocsimport_job"></a>

```json
null
```

<h2 id="tocS_Individual_project">Individual_project</h2>
<!-- backwards compatibility -->
<a id="schemaindividual_project"></a>
<a id="schema_Individual_project"></a>
<a id="tocSindividual_project"></a>
<a id="tocsindividual_project"></a>

```json
null
```

<h2 id="tocS_Integration">Integration</h2>
<!-- backwards compatibility -->
<a id="schemaintegration"></a>
<a id="schema_Integration"></a>
<a id="tocSintegration"></a>
<a id="tocsintegration"></a>

```json
null
```

<h2 id="tocS_IntegrationCredentials">IntegrationCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationcredentials"></a>
<a id="schema_IntegrationCredentials"></a>
<a id="tocSintegrationcredentials"></a>
<a id="tocsintegrationcredentials"></a>

```json
{}
```

<h2 id="tocS_IntegrationType">IntegrationType</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationtype"></a>
<a id="schema_IntegrationType"></a>
<a id="tocSintegrationtype"></a>
<a id="tocsintegrationtype"></a>

```json
"acr"
```

<h2 id="tocS_Integration_authentication">Integration_authentication</h2>
<!-- backwards compatibility -->
<a id="schemaintegration_authentication"></a>
<a id="schema_Integration_authentication"></a>
<a id="tocSintegration_authentication"></a>
<a id="tocsintegration_authentication"></a>

```json
null
```

<h2 id="tocS_Integration_broker_token_provisioning">Integration_broker_token_provisioning</h2>
<!-- backwards compatibility -->
<a id="schemaintegration_broker_token_provisioning"></a>
<a id="schema_Integration_broker_token_provisioning"></a>
<a id="tocSintegration_broker_token_provisioning"></a>
<a id="tocsintegration_broker_token_provisioning"></a>

```json
null
```

<h2 id="tocS_Integration_broker_token_switching">Integration_broker_token_switching</h2>
<!-- backwards compatibility -->
<a id="schemaintegration_broker_token_switching"></a>
<a id="schema_Integration_broker_token_switching"></a>
<a id="tocSintegration_broker_token_switching"></a>
<a id="tocsintegration_broker_token_switching"></a>

```json
null
```

<h2 id="tocS_Integration_by_type">Integration_by_type</h2>
<!-- backwards compatibility -->
<a id="schemaintegration_by_type"></a>
<a id="schema_Integration_by_type"></a>
<a id="tocSintegration_by_type"></a>
<a id="tocsintegration_by_type"></a>

```json
null
```

<h2 id="tocS_Integration_cloning">Integration_cloning</h2>
<!-- backwards compatibility -->
<a id="schemaintegration_cloning"></a>
<a id="schema_Integration_cloning"></a>
<a id="tocSintegration_cloning"></a>
<a id="tocsintegration_cloning"></a>

```json
null
```

<h2 id="tocS_Integration_settings">Integration_settings</h2>
<!-- backwards compatibility -->
<a id="schemaintegration_settings"></a>
<a id="schema_Integration_settings"></a>
<a id="tocSintegration_settings"></a>
<a id="tocsintegration_settings"></a>

```json
{
  "autoDepUpgradeEnabled": true,
  "autoDepUpgradeIgnoredDependencies": [
    null
  ],
  "autoDepUpgradeLimit": 0,
  "autoDepUpgradeMinAge": 0,
  "autoRemediationPrs": {
    "backlogPrsEnabled": true,
    "freshPrsEnabled": true,
    "usePatchRemediation": true
  },
  "dockerfileSCMEnabled": true,
  "manualRemediationPrs": {
    "usePatchRemediation": true
  },
  "pullRequestAssignment": {
    "assignees": [
      null
    ],
    "enabled": true,
    "type": "auto"
  },
  "pullRequestFailOnAnyVulns": true,
  "pullRequestFailOnlyForHighSeverity": true,
  "pullRequestTestEnabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoDepUpgradeEnabled|boolean|false|none|Defines if the functionality is enabled|
|autoDepUpgradeIgnoredDependencies|[object]|false|none|A list of strings defining what dependencies should be ignored|
|autoDepUpgradeLimit|number|false|none|A limit on how many automatic dependency upgrade PRs can be opened simultaneously|
|autoDepUpgradeMinAge|number|false|none|The age (in days) that an automatic dependency check is valid for|
|autoRemediationPrs|object|false|none|Defines automatic remediation policies|
|dockerfileSCMEnabled|boolean|false|none|If true, will automatically detect and scan Dockerfiles in your Git repositories, surface base image vulnerabilities and recommend possible fixes|
|manualRemediationPrs|object|false|none|Defines manual remediation policies|
|pullRequestAssignment|[PullRequestAssignment](#schemapullrequestassignment)|false|none|none|
|pullRequestFailOnAnyVulns|boolean|false|none|If an opened PR should fail to be validated if any vulnerable dependencies have been detected|
|pullRequestFailOnlyForHighSeverity|boolean|false|none|If an opened PR only should fail its validation if any dependencies are marked as being of high severity|
|pullRequestTestEnabled|boolean|false|none|If opened PRs should be tested|

<h2 id="tocS_Integrations">Integrations</h2>
<!-- backwards compatibility -->
<a id="schemaintegrations"></a>
<a id="schema_Integrations"></a>
<a id="tocSintegrations"></a>
<a id="tocsintegrations"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The name of an integration|
|value|string|false|none|Alphanumeric UUID including - with a limit of 36 characters|

<h2 id="tocS_Integrations_body">Integrations_body</h2>
<!-- backwards compatibility -->
<a id="schemaintegrations_body"></a>
<a id="schema_Integrations_body"></a>
<a id="tocSintegrations_body"></a>
<a id="tocsintegrations_body"></a>

```json
{}
```

<h2 id="tocS_Issue_Counts">Issue_Counts</h2>
<!-- backwards compatibility -->
<a id="schemaissue_counts"></a>
<a id="schema_Issue_Counts"></a>
<a id="tocSissue_counts"></a>
<a id="tocsissue_counts"></a>

```json
{
  "results": [
    {
      "count": 0,
      "day": "string",
      "fixable": {
        "false": 0,
        "true": 0
      },
      "severity": {
        "critical": 0,
        "high": 0,
        "low": 0,
        "medium": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of issue counts by day|

<h2 id="tocS_Issue_Counts_Filters">Issue_Counts_Filters</h2>
<!-- backwards compatibility -->
<a id="schemaissue_counts_filters"></a>
<a id="schema_Issue_Counts_Filters"></a>
<a id="tocSissue_counts_filters"></a>
<a id="tocsissue_counts_filters"></a>

```json
{
  "filters": {
    "fixable": true,
    "ignored": true,
    "isPatchable": true,
    "isPinnable": true,
    "isUpgradable": true,
    "languages": [
      null
    ],
    "orgs": [
      null
    ],
    "patched": true,
    "priorityScore": {
      "max": 0,
      "min": 0
    },
    "projects": [
      null
    ],
    "severity": [
      null
    ],
    "types": [
      null
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|

<h2 id="tocS_Issue_counts_over_time">Issue_counts_over_time</h2>
<!-- backwards compatibility -->
<a id="schemaissue_counts_over_time"></a>
<a id="schema_Issue_counts_over_time"></a>
<a id="tocSissue_counts_over_time"></a>
<a id="tocsissue_counts_over_time"></a>

```json
null
```

<h2 id="tocS_Issue_paths">Issue_paths</h2>
<!-- backwards compatibility -->
<a id="schemaissue_paths"></a>
<a id="schema_Issue_paths"></a>
<a id="tocSissue_paths"></a>
<a id="tocsissue_paths"></a>

```json
{
  "links": {
    "last": "string",
    "next": "string",
    "prev": "string"
  },
  "paths": [
    [
      {
        "fixVersion": "string",
        "name": "string",
        "version": "string"
      }
    ]
  ],
  "snapshotId": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|false|none|Onward links from this record|
|paths|[[object]]|false|none|A list of the dependency paths that introduce the issue|
|snapshotId|string|false|none|The identifier of the snapshot for which the paths have been found|
|total|number|false|none|The total number of results|

<h2 id="tocS_Issues">Issues</h2>
<!-- backwards compatibility -->
<a id="schemaissues"></a>
<a id="schema_Issues"></a>
<a id="tocSissues"></a>
<a id="tocsissues"></a>

```json
{
  "results": [
    {
      "fixedDate": "string",
      "introducedDate": "string",
      "isFixed": true,
      "issue": {
        "CVSSv3": "string",
        "credit": [
          null
        ],
        "cvssScore": 0,
        "disclosureTime": "string",
        "exploitMaturity": "string",
        "id": "string",
        "identifiers": {
          "CVE": [
            null
          ],
          "CWE": [
            null
          ],
          "OSVDB": [
            null
          ]
        },
        "ignored": [
          null
        ],
        "isIgnored": true,
        "isPatchable": true,
        "isPatched": true,
        "isPinnable": true,
        "isUpgradable": true,
        "jiraIssueUrl": "string",
        "language": "string",
        "originalSeverity": "string",
        "package": "string",
        "packageManager": "string",
        "patches": [
          null
        ],
        "priorityScore": 0,
        "publicationTime": "string",
        "semver": {
          "unaffected": "string",
          "vulnerable": [
            null
          ]
        },
        "severity": "string",
        "title": "string",
        "type": "string",
        "uniqueSeveritiesList": [
          null
        ],
        "url": "string",
        "version": "string"
      },
      "patchedDate": "string"
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of issues|
|total|number|true|none|The total number of results found|

<h2 id="tocS_Issues_Filters">Issues_Filters</h2>
<!-- backwards compatibility -->
<a id="schemaissues_filters"></a>
<a id="schema_Issues_Filters"></a>
<a id="tocSissues_filters"></a>
<a id="tocsissues_filters"></a>

```json
{
  "filters": {
    "exploitMaturity": [
      null
    ],
    "fixable": true,
    "identifier": "string",
    "ignored": true,
    "isFixed": true,
    "isPatchable": true,
    "isPinnable": true,
    "isUpgradable": true,
    "issues": [
      null
    ],
    "languages": [
      null
    ],
    "orgs": [
      null
    ],
    "patched": true,
    "priorityScore": {
      "max": 0,
      "min": 0
    },
    "projects": [
      null
    ],
    "severity": [
      null
    ],
    "types": [
      null
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|

<h2 id="tocS_Jira_issue">Jira_issue</h2>
<!-- backwards compatibility -->
<a id="schemajira_issue"></a>
<a id="schema_Jira_issue"></a>
<a id="tocSjira_issue"></a>
<a id="tocsjira_issue"></a>

```json
{
  "jiraIssue": {
    "id": "string",
    "key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jiraIssue|object|false|none|The details about the jira issue.|

<h2 id="tocS_Jira_issue_request">Jira_issue_request</h2>
<!-- backwards compatibility -->
<a id="schemajira_issue_request"></a>
<a id="schema_Jira_issue_request"></a>
<a id="tocSjira_issue_request"></a>
<a id="tocsjira_issue_request"></a>

```json
{
  "fields": {
    "issuetype": {},
    "project": {},
    "summary": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|object|false|none|none|

<h2 id="tocS_Latest_Issues">Latest_Issues</h2>
<!-- backwards compatibility -->
<a id="schemalatest_issues"></a>
<a id="schema_Latest_Issues"></a>
<a id="tocSlatest_issues"></a>
<a id="tocslatest_issues"></a>

```json
null
```

<h2 id="tocS_Latest_issue_counts">Latest_issue_counts</h2>
<!-- backwards compatibility -->
<a id="schemalatest_issue_counts"></a>
<a id="schema_Latest_issue_counts"></a>
<a id="tocSlatest_issue_counts"></a>
<a id="tocslatest_issue_counts"></a>

```json
null
```

<h2 id="tocS_Latest_project_counts">Latest_project_counts</h2>
<!-- backwards compatibility -->
<a id="schemalatest_project_counts"></a>
<a id="schema_Latest_project_counts"></a>
<a id="tocSlatest_project_counts"></a>
<a id="tocslatest_project_counts"></a>

```json
null
```

<h2 id="tocS_Licenses">Licenses</h2>
<!-- backwards compatibility -->
<a id="schemalicenses"></a>
<a id="schema_Licenses"></a>
<a id="tocSlicenses"></a>
<a id="tocslicenses"></a>

```json
{
  "results": [
    {
      "dependencies": [
        {
          "id": "string",
          "name": "string",
          "packageManager": "string",
          "version": "string"
        }
      ],
      "id": "string",
      "instructions": "string",
      "projects": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "severity": "none"
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of licenses|
|total|number|false|none|The number of results returned|

<h2 id="tocS_Licenses_by_organization">Licenses_by_organization</h2>
<!-- backwards compatibility -->
<a id="schemalicenses_by_organization"></a>
<a id="schema_Licenses_by_organization"></a>
<a id="tocSlicenses_by_organization"></a>
<a id="tocslicenses_by_organization"></a>

```json
null
```

<h2 id="tocS_Licenses_filters">Licenses_filters</h2>
<!-- backwards compatibility -->
<a id="schemalicenses_filters"></a>
<a id="schema_Licenses_filters"></a>
<a id="tocSlicenses_filters"></a>
<a id="tocslicenses_filters"></a>

```json
{
  "filters": {
    "dependencies": [
      null
    ],
    "languages": [
      null
    ],
    "licenses": [
      null
    ],
    "projects": [
      null
    ],
    "severity": [
      null
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|

<h2 id="tocS_List_all_organizations_in_a_group">List_all_organizations_in_a_group</h2>
<!-- backwards compatibility -->
<a id="schemalist_all_organizations_in_a_group"></a>
<a id="schema_List_all_organizations_in_a_group"></a>
<a id="tocSlist_all_organizations_in_a_group"></a>
<a id="tocslist_all_organizations_in_a_group"></a>

```json
null
```

<h2 id="tocS_List_all_projects">List_all_projects</h2>
<!-- backwards compatibility -->
<a id="schemalist_all_projects"></a>
<a id="schema_List_all_projects"></a>
<a id="tocSlist_all_projects"></a>
<a id="tocslist_all_projects"></a>

```json
{
  "org": {
    "id": "string",
    "name": "string"
  },
  "projects": [
    {
      "attributes": {
        "criticality": [
          null
        ],
        "environment": [
          null
        ],
        "lifecycle": [
          null
        ]
      },
      "branch": "string",
      "browseUrl": "string",
      "created": "string",
      "id": "string",
      "imageBaseImage": "string",
      "imageCluster": "string",
      "imageId": "string",
      "imagePlatform": "string",
      "imageTag": "string",
      "importingUser": {
        "email": "string",
        "id": "string",
        "name": "string",
        "username": "string"
      },
      "isMonitored": true,
      "issueCountsBySeverity": {
        "critical": 0,
        "high": 0,
        "low": 0,
        "medium": 0
      },
      "lastTestedDate": "string",
      "name": "string",
      "origin": "string",
      "owner": {},
      "readOnly": true,
      "remoteRepoUrl": "string",
      "tags": [
        null
      ],
      "targetReference": "string",
      "testFrequency": "string",
      "totalDependencies": 0,
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|org|object|false|none|none|
|projects|[[Project_without_remediation](#schemaproject_without_remediation)]|false|none|A list of org's projects|

<h2 id="tocS_List_all_roles_in_a_group">List_all_roles_in_a_group</h2>
<!-- backwards compatibility -->
<a id="schemalist_all_roles_in_a_group"></a>
<a id="schema_List_all_roles_in_a_group"></a>
<a id="tocSlist_all_roles_in_a_group"></a>
<a id="tocslist_all_roles_in_a_group"></a>

```json
null
```

<h2 id="tocS_List_all_tags_in_a_group">List_all_tags_in_a_group</h2>
<!-- backwards compatibility -->
<a id="schemalist_all_tags_in_a_group"></a>
<a id="schema_List_all_tags_in_a_group"></a>
<a id="tocSlist_all_tags_in_a_group"></a>
<a id="tocslist_all_tags_in_a_group"></a>

```json
null
```

<h2 id="tocS_List_members_in_a_group">List_members_in_a_group</h2>
<!-- backwards compatibility -->
<a id="schemalist_members_in_a_group"></a>
<a id="schema_List_members_in_a_group"></a>
<a id="tocSlist_members_in_a_group"></a>
<a id="tocslist_members_in_a_group"></a>

```json
null
```

<h2 id="tocS_Manage_organization">Manage_organization</h2>
<!-- backwards compatibility -->
<a id="schemamanage_organization"></a>
<a id="schema_Manage_organization"></a>
<a id="tocSmanage_organization"></a>
<a id="tocsmanage_organization"></a>

```json
null
```

<h2 id="tocS_Manage_roles_in_organization">Manage_roles_in_organization</h2>
<!-- backwards compatibility -->
<a id="schemamanage_roles_in_organization"></a>
<a id="schema_Manage_roles_in_organization"></a>
<a id="tocSmanage_roles_in_organization"></a>
<a id="tocsmanage_roles_in_organization"></a>

```json
null
```

<h2 id="tocS_Maven">Maven</h2>
<!-- backwards compatibility -->
<a id="schemamaven"></a>
<a id="schema_Maven"></a>
<a id="tocSmaven"></a>
<a id="tocsmaven"></a>

```json
null
```

<h2 id="tocS_MavenAdditionalFile">MavenAdditionalFile</h2>
<!-- backwards compatibility -->
<a id="schemamavenadditionalfile"></a>
<a id="schema_MavenAdditionalFile"></a>
<a id="tocSmavenadditionalfile"></a>
<a id="tocsmavenadditionalfile"></a>

```json
{
  "contents": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|string|true|none|The contents of the file, encoded according to the `encoding` field.|

<h2 id="tocS_MavenFile">MavenFile</h2>
<!-- backwards compatibility -->
<a id="schemamavenfile"></a>
<a id="schema_MavenFile"></a>
<a id="tocSmavenfile"></a>
<a id="tocsmavenfile"></a>

```json
{
  "contents": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|string|true|none|The contents of the file, encoded according to the `encoding` field.|

<h2 id="tocS_Maven_request_payload">Maven_request_payload</h2>
<!-- backwards compatibility -->
<a id="schemamaven_request_payload"></a>
<a id="schema_Maven_request_payload"></a>
<a id="tocSmaven_request_payload"></a>
<a id="tocsmaven_request_payload"></a>

```json
{
  "encoding": "plain",
  "files": {
    "additional": [
      null
    ],
    "target": {
      "contents": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoding|string|false|none|the encoding for the manifest files sent.|
|files|object|true|none|The manifest files:|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding|plain|
|encoding|base64|

<h2 id="tocS_Members_in_an_organization_of_a_group">Members_in_an_organization_of_a_group</h2>
<!-- backwards compatibility -->
<a id="schemamembers_in_an_organization_of_a_group"></a>
<a id="schema_Members_in_an_organization_of_a_group"></a>
<a id="tocSmembers_in_an_organization_of_a_group"></a>
<a id="tocsmembers_in_an_organization_of_a_group"></a>

```json
null
```

<h2 id="tocS_Members_in_organization">Members_in_organization</h2>
<!-- backwards compatibility -->
<a id="schemamembers_in_organization"></a>
<a id="schema_Members_in_organization"></a>
<a id="tocSmembers_in_organization"></a>
<a id="tocsmembers_in_organization"></a>

```json
null
```

<h2 id="tocS_MonitorDepGraphData">MonitorDepGraphData</h2>
<!-- backwards compatibility -->
<a id="schemamonitordepgraphdata"></a>
<a id="schema_MonitorDepGraphData"></a>
<a id="tocSmonitordepgraphdata"></a>
<a id="tocsmonitordepgraphdata"></a>

```json
{
  "graph": {
    "nodes": [
      null
    ],
    "rootNodeId": "string"
  },
  "pkgManager": {
    "name": "string",
    "repositories": [
      null
    ]
  },
  "pkgs": [
    null
  ],
  "schemaVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|graph|[MonitorGraph](#schemamonitorgraph)|true|none|none|
|pkgManager|[MonitorPkgManager](#schemamonitorpkgmanager)|true|none|none|
|pkgs|[object]|true|none|Array of package dependencies.|
|schemaVersion|string|true|none|Snyk DepGraph library schema version.|

<h2 id="tocS_MonitorGraph">MonitorGraph</h2>
<!-- backwards compatibility -->
<a id="schemamonitorgraph"></a>
<a id="schema_MonitorGraph"></a>
<a id="tocSmonitorgraph"></a>
<a id="tocsmonitorgraph"></a>

```json
{
  "nodes": [
    null
  ],
  "rootNodeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodes|[object]|true|none|Array of node objects.|
|rootNodeId|string|true|none|Root node id. Note the root node name is used as your project name.|

<h2 id="tocS_MonitorGraphDependency">MonitorGraphDependency</h2>
<!-- backwards compatibility -->
<a id="schemamonitorgraphdependency"></a>
<a id="schema_MonitorGraphDependency"></a>
<a id="tocSmonitorgraphdependency"></a>
<a id="tocsmonitorgraphdependency"></a>

```json
{
  "nodeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeId|string|true|none|Node id unique across the graph.|

<h2 id="tocS_MonitorMetaData">MonitorMetaData</h2>
<!-- backwards compatibility -->
<a id="schemamonitormetadata"></a>
<a id="schema_MonitorMetaData"></a>
<a id="tocSmonitormetadata"></a>
<a id="tocsmonitormetadata"></a>

```json
{
  "targetFramework": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetFramework|string|false|none|Required for a NuGet or Paket DepGraph only. Specify the target framework in your project file using Target Framework Monikers (TFMs). For example, netstandard1.0, netcoreapp1.0 or net452. Test each framework separately if you have multiple defined.|

<h2 id="tocS_MonitorNode">MonitorNode</h2>
<!-- backwards compatibility -->
<a id="schemamonitornode"></a>
<a id="schema_MonitorNode"></a>
<a id="tocSmonitornode"></a>
<a id="tocsmonitornode"></a>

```json
{
  "deps": [
    null
  ],
  "nodeId": "string",
  "pkgId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deps|[object]|false|none|An array of package ids this package depends on.|
|nodeId|string|true|none|Node id unique across the graph.|
|pkgId|string|true|none|Package id reference should match id in pkg array and take the format name@version.|

<h2 id="tocS_MonitorPackage">MonitorPackage</h2>
<!-- backwards compatibility -->
<a id="schemamonitorpackage"></a>
<a id="schema_MonitorPackage"></a>
<a id="tocSmonitorpackage"></a>
<a id="tocsmonitorpackage"></a>

```json
{
  "id": "string",
  "info": {
    "name": "string",
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique package identifier, should take the format name@version.|
|info|[MonitorPackageInfo](#schemamonitorpackageinfo)|true|none|none|

<h2 id="tocS_MonitorPackageInfo">MonitorPackageInfo</h2>
<!-- backwards compatibility -->
<a id="schemamonitorpackageinfo"></a>
<a id="schema_MonitorPackageInfo"></a>
<a id="tocSmonitorpackageinfo"></a>
<a id="tocsmonitorpackageinfo"></a>

```json
{
  "name": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Package name.|
|version|string|true|none|Package version.|

<h2 id="tocS_MonitorPkgManager">MonitorPkgManager</h2>
<!-- backwards compatibility -->
<a id="schemamonitorpkgmanager"></a>
<a id="schema_MonitorPkgManager"></a>
<a id="tocSmonitorpkgmanager"></a>
<a id="tocsmonitorpkgmanager"></a>

```json
{
  "name": "string",
  "repositories": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Package manager name.|
|repositories|[object]|false|none|A list of package repositories (i.e. maven-central, or npm) that defaults to the canonical package registry for the given package manager.|

<h2 id="tocS_MonitorRepository">MonitorRepository</h2>
<!-- backwards compatibility -->
<a id="schemamonitorrepository"></a>
<a id="schema_MonitorRepository"></a>
<a id="tocSmonitorrepository"></a>
<a id="tocsmonitorrepository"></a>

```json
{
  "alias": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|deb, apk and rpm package managers should use an alias to indicate the target Operating System, for example 'debian:10'.|

<h2 id="tocS_Move_project">Move_project</h2>
<!-- backwards compatibility -->
<a id="schemamove_project"></a>
<a id="schema_Move_project"></a>
<a id="tocSmove_project"></a>
<a id="tocsmove_project"></a>

```json
null
```

<h2 id="tocS_My_User_Details">My_User_Details</h2>
<!-- backwards compatibility -->
<a id="schemamy_user_details"></a>
<a id="schema_My_User_Details"></a>
<a id="tocSmy_user_details"></a>
<a id="tocsmy_user_details"></a>

```json
null
```

<h2 id="tocS_New_issues_notification_setting_request">New_issues_notification_setting_request</h2>
<!-- backwards compatibility -->
<a id="schemanew_issues_notification_setting_request"></a>
<a id="schema_New_issues_notification_setting_request"></a>
<a id="tocSnew_issues_notification_setting_request"></a>
<a id="tocsnew_issues_notification_setting_request"></a>

```json
{
  "enabled": true,
  "issueSeverity": "all",
  "issueType": "all"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Whether notifications should be sent|
|issueSeverity|string|true|none|The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)|
|issueType|string|true|none|Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)|

#### Enumerated Values

|Property|Value|
|---|---|
|issueSeverity|all|
|issueSeverity|high|
|issueType|all|
|issueType|vuln|
|issueType|license|
|issueType|none|

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{
  "deps": [
    null
  ],
  "nodeId": "string",
  "pkgId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deps|[object]|false|none|An array of package ids this package depends on.|
|nodeId|string|true|none|Node id unique across the graph.|
|pkgId|string|true|none|Package id reference should match id in pkg array and take the format name@version.|

<h2 id="tocS_Notification_setting_response">Notification_setting_response</h2>
<!-- backwards compatibility -->
<a id="schemanotification_setting_response"></a>
<a id="schema_Notification_setting_response"></a>
<a id="tocSnotification_setting_response"></a>
<a id="tocsnotification_setting_response"></a>

```json
{
  "enabled": true,
  "issueSeverity": "all",
  "issueType": "all",
  "inherited": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Whether notifications should be sent|
|issueSeverity|string|true|none|The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)|
|issueType|string|true|none|Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)|
|inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|

#### Enumerated Values

|Property|Value|
|---|---|
|issueSeverity|all|
|issueSeverity|high|
|issueType|all|
|issueType|vuln|
|issueType|license|
|issueType|none|

<h2 id="tocS_Notification_settings">Notification_settings</h2>
<!-- backwards compatibility -->
<a id="schemanotification_settings"></a>
<a id="schema_Notification_settings"></a>
<a id="tocSnotification_settings"></a>
<a id="tocsnotification_settings"></a>

```json
null
```

<h2 id="tocS_Notification_settings_request">Notification_settings_request</h2>
<!-- backwards compatibility -->
<a id="schemanotification_settings_request"></a>
<a id="schema_Notification_settings_request"></a>
<a id="tocSnotification_settings_request"></a>
<a id="tocsnotification_settings_request"></a>

```json
{
  "new-issues-remediations": {
    "enabled": true,
    "issueSeverity": "all",
    "issueType": "all"
  },
  "project-imported": {
    "enabled": true
  },
  "test-limit": {
    "enabled": true
  },
  "weekly-report": {
    "enabled": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new-issues-remediations|[New_issues_notification_setting_request](#schemanew_issues_notification_setting_request)|false|none|none|
|project-imported|[Simple_notification_setting_request](#schemasimple_notification_setting_request)|false|none|none|
|test-limit|[Simple_notification_setting_request](#schemasimple_notification_setting_request)|false|none|none|
|weekly-report|[Simple_notification_setting_request](#schemasimple_notification_setting_request)|false|none|none|

<h2 id="tocS_Notification_settings_response">Notification_settings_response</h2>
<!-- backwards compatibility -->
<a id="schemanotification_settings_response"></a>
<a id="schema_Notification_settings_response"></a>
<a id="tocSnotification_settings_response"></a>
<a id="tocsnotification_settings_response"></a>

```json
{
  "new-issues-remediations": {
    "enabled": true,
    "issueSeverity": "all",
    "issueType": "all",
    "inherited": true
  },
  "project-imported": {
    "enabled": true,
    "inherited": true
  },
  "test-limit": {
    "enabled": true,
    "inherited": true
  },
  "weekly-report": {
    "enabled": true,
    "inherited": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new-issues-remediations|[Notification_setting_response](#schemanotification_setting_response)|false|none|none|
|project-imported|[Simple_notification_setting_response](#schemasimple_notification_setting_response)|false|none|none|
|test-limit|[Simple_notification_setting_response](#schemasimple_notification_setting_response)|false|none|none|
|weekly-report|[Simple_notification_setting_response](#schemasimple_notification_setting_response)|false|none|none|

<h2 id="tocS_Org_Audit_logs_filters">Org_Audit_logs_filters</h2>
<!-- backwards compatibility -->
<a id="schemaorg_audit_logs_filters"></a>
<a id="schema_Org_Audit_logs_filters"></a>
<a id="tocSorg_audit_logs_filters"></a>
<a id="tocsorg_audit_logs_filters"></a>

```json
{
  "filters": {
    "email": "string",
    "event": "api.access",
    "excludeEvent": "api.access",
    "projectId": "string",
    "userId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|

<h2 id="tocS_Org_settings_request">Org_settings_request</h2>
<!-- backwards compatibility -->
<a id="schemaorg_settings_request"></a>
<a id="schema_Org_settings_request"></a>
<a id="tocSorg_settings_request"></a>
<a id="tocsorg_settings_request"></a>

```json
{
  "requestAccess": {
    "enabled": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestAccess|object|false|none|Can only be updated if `API_KEY` has edit access to request access settings.|

<h2 id="tocS_Org_settings_response">Org_settings_response</h2>
<!-- backwards compatibility -->
<a id="schemaorg_settings_response"></a>
<a id="schema_Org_settings_response"></a>
<a id="tocSorg_settings_response"></a>
<a id="tocsorg_settings_response"></a>

```json
{
  "requestAccess": {
    "enabled": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestAccess|object|false|none|Will only be returned if `API_KEY` has read access to request access settings.|

<h2 id="tocS_Organization_level_audit_logs">Organization_level_audit_logs</h2>
<!-- backwards compatibility -->
<a id="schemaorganization_level_audit_logs"></a>
<a id="schema_Organization_level_audit_logs"></a>
<a id="tocSorganization_level_audit_logs"></a>
<a id="tocsorganization_level_audit_logs"></a>

```json
null
```

<h2 id="tocS_Organization_settings">Organization_settings</h2>
<!-- backwards compatibility -->
<a id="schemaorganization_settings"></a>
<a id="schema_Organization_settings"></a>
<a id="tocSorganization_settings"></a>
<a id="tocsorganization_settings"></a>

```json
null
```

<h2 id="tocS_Organizations_in_a_group">Organizations_in_a_group</h2>
<!-- backwards compatibility -->
<a id="schemaorganizations_in_a_group"></a>
<a id="schema_Organizations_in_a_group"></a>
<a id="tocSorganizations_in_a_group"></a>
<a id="tocsorganizations_in_a_group"></a>

```json
null
```

<h2 id="tocS_Package">Package</h2>
<!-- backwards compatibility -->
<a id="schemapackage"></a>
<a id="schema_Package"></a>
<a id="tocSpackage"></a>
<a id="tocspackage"></a>

```json
{
  "id": "string",
  "info": {
    "name": "string",
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique package identifier, should take the format name@version.|
|info|[PackageInfo](#schemapackageinfo)|true|none|none|

<h2 id="tocS_PackageInfo">PackageInfo</h2>
<!-- backwards compatibility -->
<a id="schemapackageinfo"></a>
<a id="schema_PackageInfo"></a>
<a id="tocSpackageinfo"></a>
<a id="tocspackageinfo"></a>

```json
{
  "name": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Package name.|
|version|string|true|none|Package version.|

<h2 id="tocS_PackageLockJsonFile">PackageLockJsonFile</h2>
<!-- backwards compatibility -->
<a id="schemapackagelockjsonfile"></a>
<a id="schema_PackageLockJsonFile"></a>
<a id="tocSpackagelockjsonfile"></a>
<a id="tocspackagelockjsonfile"></a>

```json
{
  "contents": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|string|false|none|The contents of the file, encoded according to the `encoding` field.|

<h2 id="tocS_Patch">Patch</h2>
<!-- backwards compatibility -->
<a id="schemapatch"></a>
<a id="schema_Patch"></a>
<a id="tocSpatch"></a>
<a id="tocspatch"></a>

```json
{
  "comments": [
    null
  ],
  "id": "string",
  "modificationTime": "string",
  "urls": [
    null
  ],
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|[object]|false|none|none|
|id|string|false|none|none|
|modificationTime|string|false|none|none|
|urls|[object]|false|none|Links to patch files to fix an issue.|
|version|string|false|none|Versions this patch is applicable to, in semver format.|

<h2 id="tocS_Ping">Ping</h2>
<!-- backwards compatibility -->
<a id="schemaping"></a>
<a id="schema_Ping"></a>
<a id="tocSping"></a>
<a id="tocsping"></a>

```json
null
```

<h2 id="tocS_PkgManager">PkgManager</h2>
<!-- backwards compatibility -->
<a id="schemapkgmanager"></a>
<a id="schema_PkgManager"></a>
<a id="tocSpkgmanager"></a>
<a id="tocspkgmanager"></a>

```json
{
  "name": "string",
  "repositories": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Package manager name.|
|repositories|[object]|false|none|A list of package repositories (i.e. maven-central, or npm) that defaults to the canonical package registry for the given package manager.|

<h2 id="tocS_PriorityScore">PriorityScore</h2>
<!-- backwards compatibility -->
<a id="schemapriorityscore"></a>
<a id="schema_PriorityScore"></a>
<a id="tocSpriorityscore"></a>
<a id="tocspriorityscore"></a>

```json
{
  "max": 0,
  "min": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max|number|false|none|none|
|min|number|false|none|none|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "attributes": {
    "criticality": [
      null
    ],
    "environment": [
      null
    ],
    "lifecycle": [
      null
    ]
  },
  "branch": "string",
  "browseUrl": "string",
  "created": "string",
  "hostname": "string",
  "id": "string",
  "imageBaseImage": "string",
  "imageCluster": "string",
  "imageId": "string",
  "imagePlatform": "string",
  "imageTag": "string",
  "importingUser": {
    "email": "string",
    "id": "string",
    "name": "string",
    "username": "string"
  },
  "isMonitored": true,
  "issueCountsBySeverity": {
    "critical": 0,
    "high": 0,
    "low": 0,
    "medium": 0
  },
  "lastTestedDate": "string",
  "name": "string",
  "origin": "string",
  "owner": {},
  "readOnly": true,
  "remediation": {
    "patch": {},
    "pin": {},
    "upgrade": {}
  },
  "remoteRepoUrl": "string",
  "tags": [
    null
  ],
  "targetReference": "string",
  "testFrequency": "string",
  "totalDependencies": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[Project_attributes](#schemaproject_attributes-1)|false|none|none|
|branch|string \| null|false|none|The monitored branch (if available)|
|browseUrl|string|false|none|URL with project overview|
|created|string|false|none|The date that the project was created on|
|hostname|string \| null|false|none|The hostname for a CLI project, null if not set|
|id|string|false|none|The project identifier|
|imageBaseImage|string|false|none|For docker projects shows the base image|
|imageCluster|string|false|none|For Kubernetes projects shows the origin cluster name|
|imageId|string|false|none|For docker projects shows the ID of the image|
|imagePlatform|string|false|none|For docker projects shows the platform of the image|
|imageTag|string|false|none|For docker projects shows the tag of the image|
|importingUser|object|false|none|The user who imported the project|
|isMonitored|boolean|false|none|Describes if a project is currently monitored or it is de-activated|
|issueCountsBySeverity|object|false|none|Number of known vulnerabilities in the project, not including ignored issues|
|lastTestedDate|string|false|none|The date on which the most recent test was conducted for this project|
|name|string|false|none|none|
|origin|string|false|none|The origin the project was added from|
|owner|object \| null|false|none|The user who owns the project, null if not set<br><br>{<br>    "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",<br>    "name": "example-user@snyk.io",<br>    "username": "exampleUser",<br>    "email": "example-user@snyk.io"<br>}|
|readOnly|boolean|false|none|Whether the project is read-only|
|remediation|object|false|none|Remediation data (if available)|
|remoteRepoUrl|string|false|none|The project remote repository url. Only set for projects imported via the Snyk CLI tool.|
|tags|[object]|false|none|List of applied tags|
|targetReference|string \| null|false|none|The identifier for which revision of the resource is scanned by Snyk. For example this may be a branch for SCM project, or a tag for a container image|
|testFrequency|string|false|none|The frequency of automated Snyk re-test. Can be 'daily', 'weekly or 'never'|
|totalDependencies|number|false|none|Number of dependencies of the project|
|type|string|false|none|The package manager of the project|

<h2 id="tocS_Project_Attributes">Project_Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaproject_attributes"></a>
<a id="schema_Project_Attributes"></a>
<a id="tocSproject_attributes"></a>
<a id="tocsproject_attributes"></a>

```json
null
```

<h2 id="tocS_Project_Counts">Project_Counts</h2>
<!-- backwards compatibility -->
<a id="schemaproject_counts"></a>
<a id="schema_Project_Counts"></a>
<a id="tocSproject_counts"></a>
<a id="tocsproject_counts"></a>

```json
{
  "results": [
    {
      "count": 0,
      "day": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of project counts by day|

<h2 id="tocS_Project_Counts_Filters">Project_Counts_Filters</h2>
<!-- backwards compatibility -->
<a id="schemaproject_counts_filters"></a>
<a id="schema_Project_Counts_Filters"></a>
<a id="tocSproject_counts_filters"></a>
<a id="tocsproject_counts_filters"></a>

```json
{
  "filters": {
    "languages": [
      null
    ],
    "orgs": [
      null
    ],
    "projects": [
      null
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|

<h2 id="tocS_Project_History">Project_History</h2>
<!-- backwards compatibility -->
<a id="schemaproject_history"></a>
<a id="schema_Project_History"></a>
<a id="tocSproject_history"></a>
<a id="tocsproject_history"></a>

```json
null
```

<h2 id="tocS_Project_Issue_Paths">Project_Issue_Paths</h2>
<!-- backwards compatibility -->
<a id="schemaproject_issue_paths"></a>
<a id="schema_Project_Issue_Paths"></a>
<a id="tocSproject_issue_paths"></a>
<a id="tocsproject_issue_paths"></a>

```json
null
```

<h2 id="tocS_Project_Snapshot_Issue_Paths">Project_Snapshot_Issue_Paths</h2>
<!-- backwards compatibility -->
<a id="schemaproject_snapshot_issue_paths"></a>
<a id="schema_Project_Snapshot_Issue_Paths"></a>
<a id="tocSproject_snapshot_issue_paths"></a>
<a id="tocsproject_snapshot_issue_paths"></a>

```json
null
```

<h2 id="tocS_Project_attributes">Project_attributes</h2>
<!-- backwards compatibility -->
<a id="schemaproject_attributes-1"></a>
<a id="schema_Project_attributes"></a>
<a id="tocSproject_attributes-1"></a>
<a id="tocsproject_attributes-1"></a>

```json
{
  "criticality": [
    null
  ],
  "environment": [
    null
  ],
  "lifecycle": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|criticality|[object]|false|none|none|
|environment|[object]|false|none|none|
|lifecycle|[object]|false|none|none|

<h2 id="tocS_Project_counts_over_time">Project_counts_over_time</h2>
<!-- backwards compatibility -->
<a id="schemaproject_counts_over_time"></a>
<a id="schema_Project_counts_over_time"></a>
<a id="tocSproject_counts_over_time"></a>
<a id="tocsproject_counts_over_time"></a>

```json
null
```

<h2 id="tocS_Project_dependency_graph">Project_dependency_graph</h2>
<!-- backwards compatibility -->
<a id="schemaproject_dependency_graph"></a>
<a id="schema_Project_dependency_graph"></a>
<a id="tocSproject_dependency_graph"></a>
<a id="tocsproject_dependency_graph"></a>

```json
{
  "depGraph": {
    "graph": {
      "nodes": [
        {
          "deps": [
            {
              "nodeId": "string"
            }
          ],
          "nodeId": "string",
          "pkgId": "string"
        }
      ],
      "rootNodeId": "string"
    },
    "pkgManager": {
      "name": "string",
      "repositories": [
        {
          "alias": "string"
        }
      ],
      "version": "string"
    },
    "pkgs": [
      {
        "id": "string",
        "info": {
          "name": "string",
          "version": "string"
        }
      }
    ],
    "schemaVersion": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depGraph|object|true|none|The dependency-graph object|

<h2 id="tocS_Project_ignores">Project_ignores</h2>
<!-- backwards compatibility -->
<a id="schemaproject_ignores"></a>
<a id="schema_Project_ignores"></a>
<a id="tocSproject_ignores"></a>
<a id="tocsproject_ignores"></a>

```json
null
```

<h2 id="tocS_Project_issues_filters">Project_issues_filters</h2>
<!-- backwards compatibility -->
<a id="schemaproject_issues_filters"></a>
<a id="schema_Project_issues_filters"></a>
<a id="tocSproject_issues_filters"></a>
<a id="tocsproject_issues_filters"></a>

```json
{
  "filters": {
    "exploitMaturity": [
      null
    ],
    "ignored": true,
    "patched": true,
    "priorityScore": {
      "max": 0,
      "min": 0
    },
    "severities": [
      null
    ],
    "types": [
      null
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|

<h2 id="tocS_Project_jira_issues">Project_jira_issues</h2>
<!-- backwards compatibility -->
<a id="schemaproject_jira_issues"></a>
<a id="schema_Project_jira_issues"></a>
<a id="tocSproject_jira_issues"></a>
<a id="tocsproject_jira_issues"></a>

```json
null
```

<h2 id="tocS_Project_move">Project_move</h2>
<!-- backwards compatibility -->
<a id="schemaproject_move"></a>
<a id="schema_Project_move"></a>
<a id="tocSproject_move"></a>
<a id="tocsproject_move"></a>

```json
{
  "targetOrgId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetOrgId|string|false|none|The ID of the organization that the project should be moved to. The API_KEY must have group admin permissions. If the project is moved to a new group, a personal level API key is needed.|

<h2 id="tocS_Project_settings">Project_settings</h2>
<!-- backwards compatibility -->
<a id="schemaproject_settings"></a>
<a id="schema_Project_settings"></a>
<a id="tocSproject_settings"></a>
<a id="tocsproject_settings"></a>

```json
{
  "autoDepUpgradeEnabled": true,
  "autoDepUpgradeIgnoredDependencies": [
    null
  ],
  "autoDepUpgradeLimit": 0,
  "autoDepUpgradeMinAge": 0,
  "autoRemediationPrs": {
    "backlogPrsEnabled": true,
    "freshPrsEnabled": true,
    "usePatchRemediation": true
  },
  "pullRequestAssignment": {
    "assignees": [
      null
    ],
    "enabled": true,
    "type": "auto"
  },
  "pullRequestFailOnAnyVulns": true,
  "pullRequestFailOnlyForHighSeverity": true,
  "pullRequestTestEnabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoDepUpgradeEnabled|boolean|false|none|If set to `true`, Snyk will raise dependency upgrade PRs automatically.|
|autoDepUpgradeIgnoredDependencies|[object]|false|none|An array of comma-separated strings with names of dependencies you wish Snyk to ignore to upgrade.|
|autoDepUpgradeLimit|number|false|none|The limit on auto dependency upgrade PRs.|
|autoDepUpgradeMinAge|number|false|none|The age (in days) that an automatic dependency check is valid for|
|autoRemediationPrs|[AutoRemediationPrs](#schemaautoremediationprs)|false|none|none|
|pullRequestAssignment|[PullRequestAssignment](#schemapullrequestassignment)|false|none|none|
|pullRequestFailOnAnyVulns|boolean|false|none|If set to `true`, fail Snyk Test if the repo has any vulnerabilities. Otherwise, fail only when the PR is adding a vulnerable dependency.|
|pullRequestFailOnlyForHighSeverity|boolean|false|none|If set to `true`, fail Snyk Test only for high and critical severity vulnerabilities|
|pullRequestTestEnabled|boolean|false|none|If set to `true`, Snyk Test checks PRs for vulnerabilities.:cq|

<h2 id="tocS_Project_snapshots">Project_snapshots</h2>
<!-- backwards compatibility -->
<a id="schemaproject_snapshots"></a>
<a id="schema_Project_snapshots"></a>
<a id="tocSproject_snapshots"></a>
<a id="tocsproject_snapshots"></a>

```json
{
  "snapshots": [
    {
      "created": "string",
      "id": "string",
      "imageBaseImage": "string",
      "imageId": "string",
      "imagePlatform": "string",
      "imageTag": "string",
      "issueCounts": {
        "license": {
          "critical": 0,
          "high": 0,
          "low": 0,
          "medium": 0
        },
        "sast": {
          "critical": 0,
          "high": 0,
          "low": 0,
          "medium": 0
        },
        "vuln": {
          "critical": 0,
          "high": 0,
          "low": 0,
          "medium": 0
        }
      },
      "method": "api",
      "totalDependencies": 0
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshots|[object]|false|none|A list of the project's snapshots, ordered according to date (latest first).|
|total|number|false|none|The total number of results|

<h2 id="tocS_Project_snapshots_filters">Project_snapshots_filters</h2>
<!-- backwards compatibility -->
<a id="schemaproject_snapshots_filters"></a>
<a id="schema_Project_snapshots_filters"></a>
<a id="tocSproject_snapshots_filters"></a>
<a id="tocsproject_snapshots_filters"></a>

```json
{
  "filters": {
    "imageId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|

<h2 id="tocS_Project_tags">Project_tags</h2>
<!-- backwards compatibility -->
<a id="schemaproject_tags"></a>
<a id="schema_Project_tags"></a>
<a id="tocSproject_tags"></a>
<a id="tocsproject_tags"></a>

```json
null
```

<h2 id="tocS_Project_without_remediation">Project_without_remediation</h2>
<!-- backwards compatibility -->
<a id="schemaproject_without_remediation"></a>
<a id="schema_Project_without_remediation"></a>
<a id="tocSproject_without_remediation"></a>
<a id="tocsproject_without_remediation"></a>

```json
{
  "attributes": {
    "criticality": [
      null
    ],
    "environment": [
      null
    ],
    "lifecycle": [
      null
    ]
  },
  "branch": "string",
  "browseUrl": "string",
  "created": "string",
  "id": "string",
  "imageBaseImage": "string",
  "imageCluster": "string",
  "imageId": "string",
  "imagePlatform": "string",
  "imageTag": "string",
  "importingUser": {
    "email": "string",
    "id": "string",
    "name": "string",
    "username": "string"
  },
  "isMonitored": true,
  "issueCountsBySeverity": {
    "critical": 0,
    "high": 0,
    "low": 0,
    "medium": 0
  },
  "lastTestedDate": "string",
  "name": "string",
  "origin": "string",
  "owner": {},
  "readOnly": true,
  "remoteRepoUrl": "string",
  "tags": [
    null
  ],
  "targetReference": "string",
  "testFrequency": "string",
  "totalDependencies": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[Project_attributes](#schemaproject_attributes-1)|false|none|none|
|branch|string \| null|false|none|The monitored branch (if available)|
|browseUrl|string|false|none|URL with project overview|
|created|string|false|none|The date that the project was created on|
|id|string|false|none|The project identifier|
|imageBaseImage|string|false|none|For docker projects shows the base image|
|imageCluster|string|false|none|For Kubernetes projects shows the origin cluster name|
|imageId|string|false|none|For docker projects shows the ID of the image|
|imagePlatform|string|false|none|For docker projects shows the platform of the image|
|imageTag|string|false|none|For docker projects shows the tag of the image|
|importingUser|object|false|none|The user who imported the project|
|isMonitored|boolean|false|none|Describes if a project is currently monitored or it is de-activated|
|issueCountsBySeverity|object|false|none|Number of known vulnerabilities in the project, not including ignored issues|
|lastTestedDate|string|false|none|The date on which the most recent test was conducted for this project|
|name|string|false|none|none|
|origin|string|false|none|The origin the project was added from|
|owner|object \| null|false|none|The user who owns the project, null if not set<br><br>{<br>    "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",<br>    "name": "example-user@snyk.io",<br>    "username": "exampleUser",<br>    "email": "example-user@snyk.io"<br>}|
|readOnly|boolean|false|none|Whether the project is read-only|
|remoteRepoUrl|string|false|none|The project remote repository url. Only set for projects imported via the Snyk CLI tool.|
|tags|[object]|false|none|List of applied tags|
|targetReference|string \| null|false|none|The identifier for which revision of the resource is scanned by Snyk. For example this may be a branch for SCM project, or a tag for a container image|
|testFrequency|string|false|none|The frequency of automated Snyk re-test. Can be 'daily', 'weekly or 'never'|
|totalDependencies|number|false|none|Number of dependencies of the project|
|type|string|false|none|The package manager of the project|

<h2 id="tocS_Projects_filters">Projects_filters</h2>
<!-- backwards compatibility -->
<a id="schemaprojects_filters"></a>
<a id="schema_Projects_filters"></a>
<a id="tocSprojects_filters"></a>
<a id="tocsprojects_filters"></a>

```json
{
  "filters": {
    "attributes": {
      "criticality": [
        null
      ],
      "environment": [
        null
      ],
      "lifecycle": [
        null
      ]
    },
    "isMonitored": true,
    "name": "string",
    "origin": "string",
    "tags": {
      "includes": [
        null
      ]
    },
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|

<h2 id="tocS_Provision_user">Provision_user</h2>
<!-- backwards compatibility -->
<a id="schemaprovision_user"></a>
<a id="schema_Provision_user"></a>
<a id="tocSprovision_user"></a>
<a id="tocsprovision_user"></a>

```json
null
```

<h2 id="tocS_PullRequestAssignment">PullRequestAssignment</h2>
<!-- backwards compatibility -->
<a id="schemapullrequestassignment"></a>
<a id="schema_PullRequestAssignment"></a>
<a id="tocSpullrequestassignment"></a>
<a id="tocspullrequestassignment"></a>

```json
{
  "assignees": [
    null
  ],
  "enabled": true,
  "type": "auto"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignees|[object]|false|none|an array of usernames that have contributed to the organization's project(s).|
|enabled|boolean|false|none|if the organization's project(s) will assign Snyk pull requests.|
|type|[AssignmentType](#schemaassignmenttype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|auto|
|type|manual|

<h2 id="tocS_Remove_project_tag">Remove_project_tag</h2>
<!-- backwards compatibility -->
<a id="schemaremove_project_tag"></a>
<a id="schema_Remove_project_tag"></a>
<a id="tocSremove_project_tag"></a>
<a id="tocsremove_project_tag"></a>

```json
null
```

<h2 id="tocS_Repository">Repository</h2>
<!-- backwards compatibility -->
<a id="schemarepository"></a>
<a id="schema_Repository"></a>
<a id="tocSrepository"></a>
<a id="tocsrepository"></a>

```json
{
  "alias": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|deb, apk and rpm package managers should use an alias to indicate the target Operating System, for example 'debian:10'.|

<h2 id="tocS_SBTFile">SBTFile</h2>
<!-- backwards compatibility -->
<a id="schemasbtfile"></a>
<a id="schema_SBTFile"></a>
<a id="tocSsbtfile"></a>
<a id="tocssbtfile"></a>

```json
{
  "contents": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|string|true|none|The contents of the file, encoded according to the `encoding` field.|

<h2 id="tocS_SemverObject">SemverObject</h2>
<!-- backwards compatibility -->
<a id="schemasemverobject"></a>
<a id="schema_SemverObject"></a>
<a id="tocSsemverobject"></a>
<a id="tocssemverobject"></a>

```json
{
  "unaffected": "string",
  "vulnerable": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unaffected|string|false|none|The (semver) range of versions NOT vulnerable to this issue. *Deprecated* and should not be used.|
|vulnerable|string|false|none|The (semver) range of versions vulnerable to this issue.|

<h2 id="tocS_Simple_notification_setting_request">Simple_notification_setting_request</h2>
<!-- backwards compatibility -->
<a id="schemasimple_notification_setting_request"></a>
<a id="schema_Simple_notification_setting_request"></a>
<a id="tocSsimple_notification_setting_request"></a>
<a id="tocssimple_notification_setting_request"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Whether notifications should be sent|

<h2 id="tocS_Simple_notification_setting_response">Simple_notification_setting_response</h2>
<!-- backwards compatibility -->
<a id="schemasimple_notification_setting_response"></a>
<a id="schema_Simple_notification_setting_response"></a>
<a id="tocSsimple_notification_setting_response"></a>
<a id="tocssimple_notification_setting_response"></a>

```json
{
  "enabled": true,
  "inherited": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Whether notifications should be sent|
|inherited|boolean|false|none|Whether the setting was found on the requested context directly or inherited from a parent|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Alphanumeric including - and _ with a limit of 30 characters|
|value|string|false|none|Alphanumeric including - and _ with a limit of 50 characters|

<h2 id="tocS_Tag_body">Tag_body</h2>
<!-- backwards compatibility -->
<a id="schematag_body"></a>
<a id="schema_Tag_body"></a>
<a id="tocStag_body"></a>
<a id="tocstag_body"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Valid tag key.|
|value|string|false|none|Valid tag value.|

<h2 id="tocS_Test_Counts">Test_Counts</h2>
<!-- backwards compatibility -->
<a id="schematest_counts"></a>
<a id="schema_Test_Counts"></a>
<a id="tocStest_counts"></a>
<a id="tocstest_counts"></a>

```json
{
  "results": [
    {
      "count": 0,
      "isPrivate": {
        "false": 0,
        "true": 0
      },
      "issuesPrevented": {
        "false": 0,
        "true": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|A list of test counts|

<h2 id="tocS_Test_counts">Test_counts</h2>
<!-- backwards compatibility -->
<a id="schematest_counts-1"></a>
<a id="schema_Test_counts"></a>
<a id="tocStest_counts-1"></a>
<a id="tocstest_counts-1"></a>

```json
null
```

<h2 id="tocS_Tests_Filters">Tests_Filters</h2>
<!-- backwards compatibility -->
<a id="schematests_filters"></a>
<a id="schema_Tests_Filters"></a>
<a id="tocStests_filters"></a>
<a id="tocstests_filters"></a>

```json
{
  "filters": {
    "isPrivate": true,
    "issuesPrevented": true,
    "orgs": [
      null
    ],
    "projects": [
      null
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|

<h2 id="tocS_The_Snyk_organization_for_a_request">The_Snyk_organization_for_a_request</h2>
<!-- backwards compatibility -->
<a id="schemathe_snyk_organization_for_a_request"></a>
<a id="schema_The_Snyk_organization_for_a_request"></a>
<a id="tocSthe_snyk_organization_for_a_request"></a>
<a id="tocsthe_snyk_organization_for_a_request"></a>

```json
null
```

<h2 id="tocS_Update_member_roles_in_your_organization">Update_member_roles_in_your_organization</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_member_roles_in_your_organization"></a>
<a id="schema_Update_member_roles_in_your_organization"></a>
<a id="tocSupdate_member_roles_in_your_organization"></a>
<a id="tocsupdate_member_roles_in_your_organization"></a>

```json
null
```

<h2 id="tocS_User_Details">User_Details</h2>
<!-- backwards compatibility -->
<a id="schemauser_details"></a>
<a id="schema_User_Details"></a>
<a id="tocSuser_details"></a>
<a id="tocsuser_details"></a>

```json
null
```

<h2 id="tocS_User_invitation_to_organization">User_invitation_to_organization</h2>
<!-- backwards compatibility -->
<a id="schemauser_invitation_to_organization"></a>
<a id="schema_User_invitation_to_organization"></a>
<a id="tocSuser_invitation_to_organization"></a>
<a id="tocsuser_invitation_to_organization"></a>

```json
null
```

<h2 id="tocS_User_organization_notification_settings">User_organization_notification_settings</h2>
<!-- backwards compatibility -->
<a id="schemauser_organization_notification_settings"></a>
<a id="schema_User_organization_notification_settings"></a>
<a id="tocSuser_organization_notification_settings"></a>
<a id="tocsuser_organization_notification_settings"></a>

```json
null
```

<h2 id="tocS_User_project_notification_settings">User_project_notification_settings</h2>
<!-- backwards compatibility -->
<a id="schemauser_project_notification_settings"></a>
<a id="schema_User_project_notification_settings"></a>
<a id="tocSuser_project_notification_settings"></a>
<a id="tocsuser_project_notification_settings"></a>

```json
null
```

<h2 id="tocS_Vulnerability">Vulnerability</h2>
<!-- backwards compatibility -->
<a id="schemavulnerability"></a>
<a id="schema_Vulnerability"></a>
<a id="tocSvulnerability"></a>
<a id="tocsvulnerability"></a>

```json
{
  "CVSSv3": "string",
  "alternativeIds": {},
  "creationTime": "string",
  "credit": {},
  "cvssScore": 0,
  "description": "string",
  "disclosureTime": "string",
  "exploitMaturity": "string",
  "from": {},
  "functions": [
    null
  ],
  "identifiers": {},
  "isPatchable": true,
  "isPinnable": true,
  "isUpgradable": true,
  "language": "string",
  "modificationTime": "string",
  "packageManager `npm`": "string",
  "packageName": "string",
  "patches": [
    null
  ],
  "publicationTime": "string",
  "semver": {
    "unaffected": "string",
    "vulnerable": "string"
  },
  "severity": "string",
  "title": "string",
  "upgradePath": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CVSSv3|string|false|none|Common Vulnerability Scoring System (CVSS) provides a way to capture the principal characteristics of a vulnerability, and produce a numerical score reflecting its severity, as well as a textual representation of that score.|
|alternativeIds|object|false|none|none|
|creationTime|string|false|none|none|
|credit|object|false|none|The reporter of the vulnerability|
|cvssScore|number|false|none|CVSS Score.|
|description|string|false|none|The description of the vulnerability|
|disclosureTime|string|false|none|none|
|exploitMaturity|string|false|none|Snyk exploit maturity for this issue. One of: `mature`, `proof-of-concept`, `no-known-exploit` or `no-data`.|
|from|object|false|none|Paths from which the vulnerable package is required in the code base.|
|functions|[object]|false|none|List of vulnerable functions inside the vulnerable packages.|
|identifiers|object|false|none|Additional identifiers for this issue (CVE, CWE, etc).|
|isPatchable|boolean|false|none|Is a patch by Snyk available to fix this vulnerability?|
|isPinnable|boolean|false|none|Will pinning this package to a newer version fix the vulnerability?|
|isUpgradable|boolean|false|none|Will upgrading a top-level dependency fix the vulnerability?|
|language|string|false|none|The programming language for this package.|
|modificationTime|string|false|none|none|
|packageManager `npm`|string|false|none|none|
|packageName|string|false|none|The name of the vulnerable package.|
|patches|[object]|false|none|Patches to fix this issue, by Snyk.|
|publicationTime|string|false|none|none|
|semver|[SemverObject](#schemasemverobject)|false|none|none|
|severity|string|false|none|Snyk severity for this issue. One of: `critical`, `medium`, `high`, `medium` or `low`.|
|title|string|false|none|The title of the vulnerability|
|upgradePath|object|false|none|none|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
null
```

<h2 id="tocS_Webhook_Collection">Webhook_Collection</h2>
<!-- backwards compatibility -->
<a id="schemawebhook_collection"></a>
<a id="schema_Webhook_Collection"></a>
<a id="tocSwebhook_collection"></a>
<a id="tocswebhook_collection"></a>

```json
null
```

<h2 id="tocS_YarnLockFile">YarnLockFile</h2>
<!-- backwards compatibility -->
<a id="schemayarnlockfile"></a>
<a id="schema_YarnLockFile"></a>
<a id="tocSyarnlockfile"></a>
<a id="tocsyarnlockfile"></a>

```json
{
  "contents": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|string|false|none|none|

<h2 id="tocS_composer">composer</h2>
<!-- backwards compatibility -->
<a id="schemacomposer"></a>
<a id="schema_composer"></a>
<a id="tocScomposer"></a>
<a id="tocscomposer"></a>

```json
null
```

<h2 id="tocS_composer_request_payload">composer_request_payload</h2>
<!-- backwards compatibility -->
<a id="schemacomposer_request_payload"></a>
<a id="schema_composer_request_payload"></a>
<a id="tocScomposer_request_payload"></a>
<a id="tocscomposer_request_payload"></a>

```json
{
  "encoding": "plain",
  "files": {
    "additional": [
      null
    ],
    "target": {
      "contents": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoding|string|false|none|the encoding for the manifest files sent.|
|files|object|true|none|The manifest files:|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding|plain|
|encoding|base64|

<h2 id="tocS_dep">dep</h2>
<!-- backwards compatibility -->
<a id="schemadep"></a>
<a id="schema_dep"></a>
<a id="tocSdep"></a>
<a id="tocsdep"></a>

```json
null
```

<h2 id="tocS_golangdep_request_payload">golangdep_request_payload</h2>
<!-- backwards compatibility -->
<a id="schemagolangdep_request_payload"></a>
<a id="schema_golangdep_request_payload"></a>
<a id="tocSgolangdep_request_payload"></a>
<a id="tocsgolangdep_request_payload"></a>

```json
{
  "encoding": "plain",
  "files": {
    "additional": [
      null
    ],
    "target": {
      "contents": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoding|string|false|none|the encoding for the manifest files sent.|
|files|object|true|none|The manifest files:|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding|plain|
|encoding|base64|

<h2 id="tocS_govendor_request_payload">govendor_request_payload</h2>
<!-- backwards compatibility -->
<a id="schemagovendor_request_payload"></a>
<a id="schema_govendor_request_payload"></a>
<a id="tocSgovendor_request_payload"></a>
<a id="tocsgovendor_request_payload"></a>

```json
{
  "encoding": "plain",
  "files": {
    "target": {
      "contents": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoding|string|false|none|the encoding for the manifest files sent.|
|files|object|true|none|The manifest files:|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding|plain|
|encoding|base64|

<h2 id="tocS_graph_request_payload">graph_request_payload</h2>
<!-- backwards compatibility -->
<a id="schemagraph_request_payload"></a>
<a id="schema_graph_request_payload"></a>
<a id="tocSgraph_request_payload"></a>
<a id="tocsgraph_request_payload"></a>

```json
{
  "depGraph": {
    "graph": {
      "nodes": [
        null
      ],
      "rootNodeId": "string"
    },
    "pkgManager": {
      "name": "string",
      "repositories": [
        null
      ]
    },
    "pkgs": [
      null
    ],
    "schemaVersion": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depGraph|[DepGraphData](#schemadepgraphdata)|true|none|none|

<h2 id="tocS_ignorePath">ignorePath</h2>
<!-- backwards compatibility -->
<a id="schemaignorepath"></a>
<a id="schema_ignorePath"></a>
<a id="tocSignorepath"></a>
<a id="tocsignorepath"></a>

```json
null
```

<h2 id="tocS_issueId">issueId</h2>
<!-- backwards compatibility -->
<a id="schemaissueid"></a>
<a id="schema_issueId"></a>
<a id="tocSissueid"></a>
<a id="tocsissueid"></a>

```json
null
```

<h2 id="tocS_monitor_graph_payload">monitor_graph_payload</h2>
<!-- backwards compatibility -->
<a id="schemamonitor_graph_payload"></a>
<a id="schema_monitor_graph_payload"></a>
<a id="tocSmonitor_graph_payload"></a>
<a id="tocsmonitor_graph_payload"></a>

```json
{
  "depGraph": {
    "graph": {
      "nodes": [
        null
      ],
      "rootNodeId": "string"
    },
    "pkgManager": {
      "name": "string",
      "repositories": [
        null
      ]
    },
    "pkgs": [
      null
    ],
    "schemaVersion": "string"
  },
  "meta": {
    "targetFramework": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depGraph|[MonitorDepGraphData](#schemamonitordepgraphdata)|true|none|none|
|meta|[MonitorMetaData](#schemamonitormetadata)|false|none|none|

<h2 id="tocS_npm">npm</h2>
<!-- backwards compatibility -->
<a id="schemanpm"></a>
<a id="schema_npm"></a>
<a id="tocSnpm"></a>
<a id="tocsnpm"></a>

```json
null
```

<h2 id="tocS_npm_request_payload">npm_request_payload</h2>
<!-- backwards compatibility -->
<a id="schemanpm_request_payload"></a>
<a id="schema_npm_request_payload"></a>
<a id="tocSnpm_request_payload"></a>
<a id="tocsnpm_request_payload"></a>

```json
{
  "encoding": "plain",
  "files": {
    "additional": [
      null
    ],
    "target": {
      "contents": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoding|string|false|none|the encoding for the manifest files sent.|
|files|object|true|none|The manifest files:|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding|plain|
|encoding|base64|

<h2 id="tocS_pip">pip</h2>
<!-- backwards compatibility -->
<a id="schemapip"></a>
<a id="schema_pip"></a>
<a id="tocSpip"></a>
<a id="tocspip"></a>

```json
null
```

<h2 id="tocS_pip_request_payload">pip_request_payload</h2>
<!-- backwards compatibility -->
<a id="schemapip_request_payload"></a>
<a id="schema_pip_request_payload"></a>
<a id="tocSpip_request_payload"></a>
<a id="tocspip_request_payload"></a>

```json
{
  "encoding": "plain",
  "files": {
    "target": {
      "contents": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoding|string|false|none|the encoding for the manifest files sent.|
|files|object|true|none|The manifest files:|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding|plain|
|encoding|base64|

<h2 id="tocS_rubygems">rubygems</h2>
<!-- backwards compatibility -->
<a id="schemarubygems"></a>
<a id="schema_rubygems"></a>
<a id="tocSrubygems"></a>
<a id="tocsrubygems"></a>

```json
null
```

<h2 id="tocS_rubygems_request_payload">rubygems_request_payload</h2>
<!-- backwards compatibility -->
<a id="schemarubygems_request_payload"></a>
<a id="schema_rubygems_request_payload"></a>
<a id="tocSrubygems_request_payload"></a>
<a id="tocsrubygems_request_payload"></a>

```json
{
  "encoding": "plain",
  "files": {
    "target": {
      "contents": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoding|string|false|none|the encoding for the manifest files sent.|
|files|object|true|none|The manifest files:|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding|plain|
|encoding|base64|

<h2 id="tocS_sbt">sbt</h2>
<!-- backwards compatibility -->
<a id="schemasbt"></a>
<a id="schema_sbt"></a>
<a id="tocSsbt"></a>
<a id="tocssbt"></a>

```json
null
```

<h2 id="tocS_sbt_request_payload">sbt_request_payload</h2>
<!-- backwards compatibility -->
<a id="schemasbt_request_payload"></a>
<a id="schema_sbt_request_payload"></a>
<a id="tocSsbt_request_payload"></a>
<a id="tocssbt_request_payload"></a>

```json
{
  "encoding": "plain",
  "files": {
    "target": {
      "contents": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoding|string|false|none|the encoding for the manifest files sent.|
|files|object|true|none|The manifest files:|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding|plain|
|encoding|base64|

<h2 id="tocS_vendor">vendor</h2>
<!-- backwards compatibility -->
<a id="schemavendor"></a>
<a id="schema_vendor"></a>
<a id="tocSvendor"></a>
<a id="tocsvendor"></a>

```json
null
```

<h2 id="tocS_yarn">yarn</h2>
<!-- backwards compatibility -->
<a id="schemayarn"></a>
<a id="schema_yarn"></a>
<a id="tocSyarn"></a>
<a id="tocsyarn"></a>

```json
null
```

<h2 id="tocS_yarn_request_payload">yarn_request_payload</h2>
<!-- backwards compatibility -->
<a id="schemayarn_request_payload"></a>
<a id="schema_yarn_request_payload"></a>
<a id="tocSyarn_request_payload"></a>
<a id="tocsyarn_request_payload"></a>

```json
{
  "encoding": "plain",
  "files": {
    "additional": [
      null
    ],
    "target": {
      "contents": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoding|string|false|none|the encoding for the manifest files sent.|
|files|object|true|none|The manifest files:|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding|plain|
|encoding|base64|
