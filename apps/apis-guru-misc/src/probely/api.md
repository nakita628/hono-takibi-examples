<h1 id="probely-developers">Probely Developers v1.2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Probely is a Web Vulnerability Scanning suite for Agile Teams. It provides
continuous scanning of your Web Applications and lets you efficiently
manage the lifecycle of the vulnerabilities found, in a sleek and
intuitive ~~web interface~~ API.

## Quick-Start

### Authentication

To use the API, you first need to create a token (API Key).
To create a token, select a target from the drop-down list, go to the
"Settings" page, and click on the "Integrations" tab.

Write a name for the API Key. For example, if you want to use the API Key
for travis,
you could name it "travis". In this example, we chose "**example.com_key**"

![Creating API key][1]

  [1]: assets/qs/create_api_key_1.png



The API key was created successfully:

![API key created][2]

  [2]: assets/qs/create_api_key_2.png


On every request, you need to pass this token in the authorization header,
like this:


```yaml
Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJBRlNJQlp
3elFsMDEiLCJ1c2VybmFtZSI6IkNIZ2tkSUROdzV0NSJ9.90UwiPGS2hlvgOLktFU0LfKuatNKm
mEP79u17VnqT9M
```


**WARNING: Treat this token as a password. With this token, you have the
power to fully manage the target.**

In the following examples, the token will be named as *PROBELY_AUTH_TOKEN*.


### Scan target

First let's view our target list:

```bash
curl https://api.probely.com/targets/ \
  -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT PROBELY_AUTH_TOKEN"
```


From the results, we need the **target id**:

```json
{
   "count":1,
   "page_total":1,
   "page":1,
   "length":10,
   "results":[
      {
         "id":"AxtkqTE0v3E-",
         "name":"test-site",
         "desc":"",
         "url":"https://test-site.example.com",
         "settings":
            "(...)"
         ,
         "stack":
            "(...)"
         ,
         "verified":true,
         "(...)": "(...)"
      }
   ]
}
```


Now we can send a request to start a scan on target id **AxtkqTE0v3E-**

```bash
curl https://api.probely.com/targets/AxtkqTE0v3E-/scan_now/ \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT PROBELY_AUTH_TOKEN"
```


And we get a response saying that the scan is scheduled: the status is **queued**, and we've got a **scan id**:

```json
{
   "changed":"2017-08-01T13:37:00.843339Z",
   "started":null,
   "completed":null,
   "mediums":0,
   "changed_by":
    "(...)"
   ,
   "highs":0,
   "status":"queued",
   "id":"S6dOMPn0SnoH",
   "created_by":
    "(...)"
   ,
   "target":
    "(...)"
   ,
   "created":"2017-08-01T13:37:00.843339Z",
   "lows":0
}
```


Using the scan id **S6dOMPn0SnoH**, we can pool the scan status:

```bash
curl https://api.probely.com/targets/AxtkqTE0v3E-/scans/S6dOMPn0SnoH/ \
  -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT PROBELY_AUTH_TOKEN"
```


And we get a response saying that the scan status is now **started**:

```json
{
   "id":"S6dOMPn0SnoH",
   "changed":"2017-08-01T13:38:12.623650Z",
   "started":null,
   "completed":null,
   "mediums":0,
   "changed_by":
    "(...)"
   ,
   "highs":0,
   "status":"started",
   "created_by":
    "(...)"
   ,
   "target":
    "(...)"
   ,
   "created":"2017-08-01T13:37:00.843339Z",
   "lows":0
}
```


The possible statuses are:

| Status | Name | Description |
| ------ | ---- | ----------- |
| queued | Queued | The scan is queued to start |
| started | Started | The scan is currently running |
| under_review | Under Review | The scan is complete but has some findings under review |
| completed | Completed | The scan is complete |
| completed_with_errors | Completed with errors | The scan is complete even after getting some error(s) |
| failed | Failed | The scan failed |
| canceled | Canceled | The scan was canceled |
| canceling | Canceling | The scan is being canceled |


During the scan, the keys "lows", "mediums", and "highs" will be updated
with the findings, as they are being found.

After we get either the status **completed** or **completed_with_errors**,
we can view the findings.


### Get vulnerabilities

Using the previous scan id **S6dOMPn0SnoH**, we can get the scan results:

```bash
curl https://api.probely.com/targets/AxtkqTE0v3E-/scans/S6dOMPn0SnoH/ \
  -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT PROBELY_AUTH_TOKEN"
```

We get a response saying that the scan status is now **completed**, and
that **45** vulnerabilities were found. **14** low, **11** medium and
**20** high:

```json
{
   "id":"S6dOMPn0SnoH",
   "target":
    "(...)"
   ,
   "status":"completed",
   "started":"2017-08-01T13:37:12.623650Z",
   "completed":"2017-08-01T14:17:48.559514Z",
   "lows":14,
   "mediums":11,
   "highs":20,
   "created":"2017-08-01T13:37:00.843339Z",
   "created_by":
    "(...)"
   ,
   "changed":"2017-08-01T14:17:48.559514Z",
   "changed_by":
    "(...)"
}
```

You can now view the results of this scan, or the target findings.


Let's start with the scan results:

```bash
curl https://api.probely.com/targets/AxtkqTE0v3E-/findings/?scan=S6dOMPn0SnoH&page=1 \
  -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT PROBELY_AUTH_TOKEN"
```

```json
{
   "count":45,
   "page_total":5,
   "page":1,
   "length":10,
   "results":[
      {
         "id":79,
         "target":
          "(...)"
         ,
         "scans":
          "(...)"
         ,
         "labels":
          "(...)"
         ,
         "fix":"To fix an SQL Injection in PHP, you should use Prepared Statements. Prepared Statements can be thought of as a kind of compiled template for the SQL that an application wants to run, that can be customized using variable parameters.\n\nPHP's PDO extension supports Prepared Statements, so that's probably your best option.\n\nIn the example below you can see the use of prepared statements. Variables ```$username``` and ```$hashedPassword``` come from user input.\n\n```\n$stmt = $dbg->prepare(\"SELECT id, name FROM users\n                       WHERE username=? AND password=?\");\n$stmt->bindParam(1, $username);\n$stmt->bindParam(2, $hashedPassword);\nif ($stmt->execute()) {\n\t$user = $stmt->fetch();\n\tif ($user) {\n\t\t$_SESSION['authID'] = $user['id'];\n\t\techo \"Hello \" . $user['name'];\n\t} else {\n\t\techo \"Invalid Login\";\n\t}\n}\n```  \n\nAs an added bonus, if you're executing the same query several times, then it'll be even faster than when you're not using prepared statements. This is because when using prepared statements, the query needs to be parsed (prepared) only once, but can be executed multiple times with the same or different parameters. \n",
         "requests":[
            {
               "request":"(...)",
               "response":"(...)"
            },
            {
               "request":"(...)",
               "response":"(...)"
            }
         ],
         "evidence":null,
         "extra":"",
         "definition":{
            "id":"xnV8PJVmSoLS",
            "name":"SQL Injection",
            "desc":"SQL Injections are the most common form of injections because SQL databases are very popular in dynamic web applications. This vulnerability allows an attacker to tamper existing SQL queries performed by the web application. Depending on the queries, the attacker might be able to access, modify or even destroy data from the database.\n\nSince databases are commonly used to store private data, such as authentication information, personal user data and site content, if an attacker gains access to it, the consequences are typically very severe, ranging from defacement of the web application to users data leakage or loss, or even full control of the web application or database server.",
         },
         "url":"http://test-site.example.com/login.php",
         "path":"login.php",
         "method":"post",
         "parameter":"username",
         "value":"",
         "params":{
            "username":[
               "probely'"
            ],
            "password":[
               "probely"
            ]
         },
         "reporter":
          "(...)"
         ,
         "assignee":null,
         "state":"notfixed",
         "severity":30,
         "last_found":"2017-08-01T14:03:56.207794Z",
         "changed":"2017-08-01T14:03:56.207794Z",
         "changed_by":
          "(...)"
         ,
         "comment":""
      },
      "(...)"
   ]
}
```

You can also view all the target findings, which will show all the findings
that are not yet fixed. \\
The structure is similar to the previous result.

```bash
curl https://api.probely.com/targets/AxtkqTE0v3E-/findings/ \
  -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT PROBELY_AUTH_TOKEN"
```


### Get vulnerability details

You can also get details for a particular finding in a target. \\
In this example we will get the details for the same finding as in the previous
section:

```bash
curl https://api.probely.com/targets/AxtkqTE0v3E-/findings/79/ \
  -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT PROBELY_AUTH_TOKEN"
```


This will result on the same information, but just for this particular finding:

```json
{
   "id":79,
   "target":
    "(...)"
   ,
   "scans":
    "(...)"
   ,
   "labels":
    "(...)"
   ,
   "fix":"To fix an SQL Injection in PHP, you should use Prepared Statements. Prepared Statements can be thought of as a kind of compiled template for the SQL that an application wants to run, that can be customized using variable parameters.\n\nPHP's PDO extension supports Prepared Statements, so that's probably your best option.\n\nIn the example below you can see the use of prepared statements. Variables ```$username``` and ```$hashedPassword``` come from user input.\n\n```\n$stmt = $dbg->prepare(\"SELECT id, name FROM users\n                       WHERE username=? AND password=?\");\n$stmt->bindParam(1, $username);\n$stmt->bindParam(2, $hashedPassword);\nif ($stmt->execute()) {\n\t$user = $stmt->fetch();\n\tif ($user) {\n\t\t$_SESSION['authID'] = $user['id'];\n\t\techo \"Hello \" . $user['name'];\n\t} else {\n\t\techo \"Invalid Login\";\n\t}\n}\n```  \n\nAs an added bonus, if you're executing the same query several times, then it'll be even faster than when you're not using prepared statements. This is because when using prepared statements, the query needs to be parsed (prepared) only once, but can be executed multiple times with the same or different parameters. \n",
   "requests":[
      {
         "request":"(...)",
         "response":"(...)"
      },
      {
         "request":"(...)",
         "response":"(...)"
      }
   ],
   "evidence":null,
   "extra":"",
   "definition":{
      "id":"xnV8PJVmSoLS",
      "name":"SQL Injection",
      "desc":"SQL Injections are the most common form of injections because SQL databases are very popular in dynamic web applications. This vulnerability allows an attacker to tamper existing SQL queries performed by the web application. Depending on the queries, the attacker might be able to access, modify or even destroy data from the database.\n\nSince databases are commonly used to store private data, such as authentication information, personal user data and site content, if an attacker gains access to it, the consequences are typically very severe, ranging from defacement of the web application to users data leakage or loss, or even full control of the web application or database server.",
   },
   "url":"http://test-site.example.com/login.php",
   "path":"login.php",
   "method":"post",
   "parameter":"username",
   "value":"",
   "params":{
      "username":[
         "probely'"
      ],
      "password":[
         "probely"
      ]
   },
   "reporter":
    "(...)"
   ,
   "assignee":null,
   "state":"notfixed",
   "severity":30,
   "last_found":"2017-08-01T14:03:56.207794Z",
   "changed":"2017-08-01T14:03:56.207794Z",
   "changed_by":
    "(...)"
   ,
   "comment":""
}
```

## Concepts

The short version is that you run *scans* on *targets*, and *findings* are
created for any issue that is found.
However, there are a few more concepts that must be explained in order to
get a complete picture of how Probely works.
We will spend the next few sections detailing the most important concepts.


### Target

A *target* defines the scope of a scan, what will and won't be included
in the scan plan.
This is done by filling a *target*'s *site* and *assets*.

The entry point for the web application (and authentication) is setup
in the *target*'s *site*.

In modern web applications, you are probably loading resources from
multiple domains.
A single page app, for example, will usualy load the page from one domain
and make AJAX requests to another.
This is what *assets* are for: they specify what domains our scanner should
follow and create requests for.


### Site
A URL is probably not the only thing you will need to setup when scannning your application.
Does the application have an authenticated area? Does it use basic auth?
Does it expect a certain cookie or header?
These parameters are all configured in the *target*'s *site*.


We need to ensure that only allowed web applications are scanned.
Therefore, we must verify that you have control of any site you wish to include.
This can be done by:
  * Placing a file on a well-known location, on the site's server;
  * Creating specific DNS records.


### Asset

An *asset* is very similar to a *site*. The difference is that it is a domain instead
of a URL. Additionally, an *asset* has no login or basic auth support.
You can still have custom cookies and headers per *asset*.

As with the *site*, you will need to prove an *asset*'s ownership. We have added some
rules to make your life easier, if you already have verified
a *site* and the domains match, the validation is fast-tracked.

### Scans

This is what you're here for.
After configuring your *target*, you will want to run *scans* against it.
You can either start a one off scan, or schedule one for later - recurring
or not.

During the *scan*, we will spider and run several modules to check for
security issues, which we call *findings*.
You can check the *findings* even before a scan ends.
If everything goes well, the scan will complete and that is it.

With some *findings*, our automated processes may have difficulties
determining if it is a false positive or a legitimate issue.
In these instances, a scan will be marked as under review, and we will
further analyze the finding before making a decision.
We will only show findings that, for some degree of confidence, are true
positives.
A finding that we are not sure of will never be displayed.

As much as we try to prevent it, a *scan* (or a sub-module) can malfunction.
If this happens, a *scan* is marked as:
  * "failed": the problem was irrecoverable;
  * "completed with errors": some module failed but the scan itself completed.

During a scan, we try to determine what *frameworks* you are using
and add this information to the *site* and *asset* objects discussed
previously.


### Findings

The last core concept is the *finding*, this is a security issue that
we have found during our scans.
If the same issue is found in a new scan it will not open a new finding but
update the previous.

A *finding* will have a lot of information about the issue.
Namely, where it was found, URL, insertion point (e.g. cookie), parameter,
and method.
Evidence we gathered, and the full request and response that we used.
Sugestions of how to go about fixing it.
A full description of the vulnerability is also present in the
*definition* property.
We also assign a severity and calculate the CVSS score for each.

Besides all this, there are also actions that you can perform on a *finding*.
You can assign it to one user, leave comments for your team or add labels,
and reduce or increase the severity.

If you don't plan on fixing the *finding* and accept the risk, or you think
we reported a false positive, you can mark the finding to reflect that.

Base URLs:

* <a href="https://api.probely.com">https://api.probely.com</a> - Production server

Email: <a href="mailto:support@probely.com">Probely Support</a> 
Web: <a href="https://probely.com">Probely Support</a> 

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="probely-developers-login">Login</h1>

Login users and verify token. For login we make use of [JSON web tokens](https://jwt.io/).


## Authenticate user

> Code samples

```bash
curl https://example.com/auth/obtain/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "password": "dolphins",
    "username": "example@probely.com"
  }'
```

`POST /auth/obtain/`

The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.


> Body parameter

```json
{
  "password": "dolphins",
  "username": "example@probely.com"
}
```

<h3 id="authenticate-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Login](#schemalogin)|true|none|
|» password|body|[password](#schemapassword)|true|none|
|» username|body|[username](#schemausername-1)|true|none|

> Example responses

> 200 Response

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
  "ttl": 31536000
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 500 Response

```json
{
  "detail": "Internal server error."
}
```

<h3 id="authenticate-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token and respective time to live|Inline|
|400|Bad Request|Bad Request|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="authenticate-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|[token](#schematoken)|false|read-only|Authentication token|
|ttl|[ttl](#schemattl)|false|none|Token time to live in seconds|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Replace token with a new one

> Code samples

```bash
curl https://example.com/auth/refresh/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk"
  }'
```

`POST /auth/refresh/`

> Body parameter

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk"
}
```

<h3 id="replace-token-with-a-new-one-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|[tokenBody](#schematokenbody)|false|Authentication token|

> Example responses

> 200 Response

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
  "ttl": 31536000
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 500 Response

```json
{
  "detail": "Internal server error."
}
```

<h3 id="replace-token-with-a-new-one-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token and respective time to live|Inline|
|400|Bad Request|Bad Request|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="replace-token-with-a-new-one-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|[token](#schematoken)|false|read-only|Authentication token|
|ttl|[ttl](#schemattl)|false|none|Token time to live in seconds|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Revoke a token

> Code samples

```bash
curl https://example.com/auth/revoke/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk"
  }'
```

`POST /auth/revoke/`

> Body parameter

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk"
}
```

<h3 id="revoke-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|[tokenBody](#schematokenbody)|false|Authentication token|

> Example responses

> 200 Response

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
  "ttl": 31536000
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 500 Response

```json
{
  "detail": "Internal server error."
}
```

<h3 id="revoke-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token and respective time to live|Inline|
|400|Bad Request|Bad Request|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="revoke-a-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|[token](#schematoken)|false|read-only|Authentication token|
|ttl|[ttl](#schemattl)|false|none|Token time to live in seconds|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Verify a token

> Code samples

```bash
curl https://example.com/auth/verify/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk"
  }'
```

`POST /auth/verify/`

Check for the validity of a user token.


> Body parameter

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk"
}
```

<h3 id="verify-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|[tokenBody](#schematokenbody)|false|Authentication token|

> Example responses

> 200 Response

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
  "ttl": 31536000
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 500 Response

```json
{
  "detail": "Internal server error."
}
```

<h3 id="verify-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token and respective time to live|Inline|
|400|Bad Request|Bad Request|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="verify-a-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|[token](#schematoken)|false|read-only|Authentication token|
|ttl|[ttl](#schemattl)|false|none|Token time to live in seconds|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Enterprise user authentication

> Code samples

```bash
curl https://example.com/enterprise/auth/obtain/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "password": "dolphins",
    "username": "example@probely.com"
  }'
```

`POST /enterprise/auth/obtain/`

The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.


> Body parameter

```json
{
  "password": "dolphins",
  "username": "example@probely.com"
}
```

<h3 id="enterprise-user-authentication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Login](#schemalogin)|true|none|
|» password|body|[password](#schemapassword)|true|none|
|» username|body|[username](#schemausername-1)|true|none|

> Example responses

> 200 Response

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
  "ttl": 31536000
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 500 Response

```json
{
  "detail": "Internal server error."
}
```

<h3 id="enterprise-user-authentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token and respective time to live|Inline|
|400|Bad Request|Bad Request|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="enterprise-user-authentication-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|[token](#schematoken)|false|read-only|Authentication token|
|ttl|[ttl](#schemattl)|false|none|Token time to live in seconds|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Enterprise token refresh

> Code samples

```bash
curl https://example.com/enterprise/auth/refresh/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk"
  }'
```

`POST /enterprise/auth/refresh/`

> Body parameter

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk"
}
```

<h3 id="enterprise-token-refresh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|[tokenBody](#schematokenbody)|false|Authentication token|

> Example responses

> 200 Response

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
  "ttl": 31536000
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 500 Response

```json
{
  "detail": "Internal server error."
}
```

<h3 id="enterprise-token-refresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token and respective time to live|Inline|
|400|Bad Request|Bad Request|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="enterprise-token-refresh-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|[token](#schematoken)|false|read-only|Authentication token|
|ttl|[ttl](#schemattl)|false|none|Token time to live in seconds|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Enterprise token revokation

> Code samples

```bash
curl https://example.com/enterprise/auth/revoke/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk"
  }'
```

`POST /enterprise/auth/revoke/`

> Body parameter

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk"
}
```

<h3 id="enterprise-token-revokation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|[tokenBody](#schematokenbody)|false|Authentication token|

> Example responses

> 200 Response

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
  "ttl": 31536000
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 500 Response

```json
{
  "detail": "Internal server error."
}
```

<h3 id="enterprise-token-revokation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token and respective time to live|Inline|
|400|Bad Request|Bad Request|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="enterprise-token-revokation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|[token](#schematoken)|false|read-only|Authentication token|
|ttl|[ttl](#schemattl)|false|none|Token time to live in seconds|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Enterprise token verification

> Code samples

```bash
curl https://example.com/enterprise/auth/verify/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk"
  }'
```

`POST /enterprise/auth/verify/`

Check for the validity of a user token.


> Body parameter

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk"
}
```

<h3 id="enterprise-token-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|[tokenBody](#schematokenbody)|false|Authentication token|

> Example responses

> 200 Response

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
  "ttl": 31536000
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 500 Response

```json
{
  "detail": "Internal server error."
}
```

<h3 id="enterprise-token-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token and respective time to live|Inline|
|400|Bad Request|Bad Request|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="enterprise-token-verification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|[token](#schematoken)|false|read-only|Authentication token|
|ttl|[ttl](#schemattl)|false|none|Token time to live in seconds|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="probely-developers-targets">Targets</h1>

In Probely, a target is what defines what is being scanned.
Connected to a target there are two other objects: a site and a list of
assets.

The site is the where the scan starts and will usually be the main
entry point for your web application.

As things are today, a single URL is not enough to describe all of the
resources an application uses.
For example, a modern single page web application might load the main
page from one domain and make AJAX requests to one or more other domains.
This where assets come in, they are used to add extra domains that
our scanner should follow.


## List targets

> Code samples

```bash
curl https://example.com/targets/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/`

<h3 id="list-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number within the paginated result set|
|length|query|integer|false|Number of results to return per page|
|ordering|query|string|false|Which field to use when ordering the results, prefix with `-` to invert ordering.<br>|
|search|query|string|false|Search term|

> Example responses

> 200 Response

```json
{
  "length": 10,
  "page": 1,
  "page_total": 1,
  "pagination_count": 6,
  "results": [
    {
      "allowed_scan_profiles": [
        {
          "id": "normal",
          "name": "string"
        }
      ],
      "assets": [
        {
          "changed": "2018-01-31T16:32:17.238553Z",
          "changed_by": {
            "email": "example@probely.com",
            "id": "jMXUw-BE_2vd",
            "name": "Henrique Cimento"
          },
          "cookies": [
            {
              "name": "cookie_1",
              "value": "cookie_value"
            }
          ],
          "desc": "Object description",
          "headers": [
            {
              "name": "X-Custom-Header",
              "value": "XXXXX"
            }
          ],
          "host": "string",
          "id": "jMXUw-BE_2vd",
          "include": true,
          "name": "Object name",
          "stack": [
            "nginx"
          ],
          "verification_date": "2018-01-31T16:32:52.226652Z",
          "verification_last_error": "string",
          "verification_method": "dns",
          "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
          "verified": false
        }
      ],
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "connected_target": "string",
      "enabled": true,
      "environment": "testing",
      "id": "jMXUw-BE_2vd",
      "labels": [
        "string"
      ],
      "name": "Object name",
      "report_type": "default",
      "scan_profile": "normal",
      "site": {
        "basic_auth": {
          "password": "dolphins",
          "username": "probely"
        },
        "changed": "2018-01-31T16:32:17.238553Z",
        "changed_by": {
          "email": "example@probely.com",
          "id": "jMXUw-BE_2vd",
          "name": "Henrique Cimento"
        },
        "cookies": [
          {
            "name": "cookie_1",
            "value": "cookie_value"
          }
        ],
        "desc": "Object description",
        "form_login": [
          {
            "name": "username",
            "value": "probely"
          }
        ],
        "form_login_check_pattern": "",
        "form_login_url": "https://app.probely.com/",
        "has_basic_auth": true,
        "has_form_login": true,
        "headers": [
          {
            "name": "X-Custom-Header",
            "value": "XXXXX"
          }
        ],
        "host": "app.probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Object name",
        "stack": [
          "nginx"
        ],
        "url": "https://app.probely.com",
        "verification_date": "2018-01-31T16:32:52.226652Z",
        "verification_last_error": "string",
        "verification_method": "dns",
        "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
        "verified": false,
        "whitelist": [
          "/private/path/"
        ]
      },
      "type": "single"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 500 Response

```json
{
  "detail": "Internal server error."
}
```

<h3 id="list-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of targets|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="list-targets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|pagination_count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|results|[[Target](#schematarget)]|false|none|Target objects|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Create target

> Code samples

```bash
curl https://example.com/targets/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connected_target": "string",
    "environment": "testing",
    "labels": [
      "string"
    ],
    "name": "Object name",
    "report_type": "default",
    "scan_profile": "normal",
    "site": {
      "basic_auth": {
        "password": "dolphins",
        "username": "probely"
      },
      "cookies": [
        {
          "name": "cookie_1",
          "value": "cookie_value"
        }
      ],
      "desc": "Object description",
      "form_login": [
        {
          "name": "username",
          "value": "probely"
        }
      ],
      "form_login_check_pattern": "",
      "form_login_url": "https://app.probely.com/",
      "has_basic_auth": true,
      "has_form_login": true,
      "headers": [
        {
          "name": "X-Custom-Header",
          "value": "XXXXX"
        }
      ],
      "name": "Object name",
      "url": "https://app.probely.com",
      "whitelist": [
        "/private/path/"
      ]
    },
    "type": "single"
  }'
```

`POST /targets/`

> Body parameter

```json
{
  "connected_target": "string",
  "environment": "testing",
  "labels": [
    "string"
  ],
  "name": "Object name",
  "report_type": "default",
  "scan_profile": "normal",
  "site": {
    "basic_auth": {
      "password": "dolphins",
      "username": "probely"
    },
    "cookies": [
      {
        "name": "cookie_1",
        "value": "cookie_value"
      }
    ],
    "desc": "Object description",
    "form_login": [
      {
        "name": "username",
        "value": "probely"
      }
    ],
    "form_login_check_pattern": "",
    "form_login_url": "https://app.probely.com/",
    "has_basic_auth": true,
    "has_form_login": true,
    "headers": [
      {
        "name": "X-Custom-Header",
        "value": "XXXXX"
      }
    ],
    "name": "Object name",
    "url": "https://app.probely.com",
    "whitelist": [
      "/private/path/"
    ]
  },
  "type": "single"
}
```

<h3 id="create-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Target](#schematarget)|false|none|
|» connected_target|body|[connectedTarget](#schemaconnectedtarget)|false|Id of the connected target in a multi-environment targets.<br>|
|» environment|body|[environment](#schemaenvironment)|false|Multi-environment targets can identify environments using this property.<br>|
|» labels|body|[string]|false|User labels for the scope. (This feature is currently only available for certain accounts,<br>please contact our support if you are interested in using it)<br>|
|» name|body|[name](#schemaname)|false|Custom name for the resource|
|» report_type|body|[reportType](#schemareporttype)|false|* default - default report, no extra information added<br>* owasp - adds table on OWASP Top 10 most critical web application risks<br>* pci - adds table on PCI requirements<br>|
|» scan_profile|body|[scanProfile](#schemascanprofile)|false|* lightning - fast simple scan<br>* normal - default profile<br>* full - does everything the default profile does and adds boolean based<br>SQL injection tests<br>* safe - doesn't use any content changing methods (no POST, DELETE, etc)<br>and tries fewer payloads for SQL injection tests<br>|
|» site|body|[Site](#schemasite)|false|Main resource associated with a target|
|» type|body|[targetType](#schematargettype)|false|The type of a target determines what the limitations imposed on a<br>target.<br>* free - Every account is allowed to have 5 free targets, these targets<br>do not need to be verified but can only perform lightning<br>scans.<br>* single - Single environment targets need to be verified but are<br>allowed to run any type of scan allowed by the plan.<br>* multi - Multi environment targets are used when you want<br>to scan the same application in different environments.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|testing|
|» environment|production|
|» report_type|default|
|» report_type|owasp|
|» report_type|pci|
|» scan_profile|safe|
|» scan_profile|normal|
|» scan_profile|full|
|» scan_profile|lightning|
|» type|free|
|» type|single|
|» type|multi|

> Example responses

> 201 Response

```json
{
  "allowed_scan_profiles": [
    {
      "id": "normal",
      "name": "string"
    }
  ],
  "assets": [
    {
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "cookies": [
        {
          "name": "cookie_1",
          "value": "cookie_value"
        }
      ],
      "desc": "Object description",
      "headers": [
        {
          "name": "X-Custom-Header",
          "value": "XXXXX"
        }
      ],
      "host": "string",
      "id": "jMXUw-BE_2vd",
      "include": true,
      "name": "Object name",
      "stack": [
        "nginx"
      ],
      "verification_date": "2018-01-31T16:32:52.226652Z",
      "verification_last_error": "string",
      "verification_method": "dns",
      "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
      "verified": false
    }
  ],
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "connected_target": "string",
  "enabled": true,
  "environment": "testing",
  "id": "jMXUw-BE_2vd",
  "labels": [
    "string"
  ],
  "name": "Object name",
  "report_type": "default",
  "scan_profile": "normal",
  "site": {
    "basic_auth": {
      "password": "dolphins",
      "username": "probely"
    },
    "changed": "2018-01-31T16:32:17.238553Z",
    "changed_by": {
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "name": "Henrique Cimento"
    },
    "cookies": [
      {
        "name": "cookie_1",
        "value": "cookie_value"
      }
    ],
    "desc": "Object description",
    "form_login": [
      {
        "name": "username",
        "value": "probely"
      }
    ],
    "form_login_check_pattern": "",
    "form_login_url": "https://app.probely.com/",
    "has_basic_auth": true,
    "has_form_login": true,
    "headers": [
      {
        "name": "X-Custom-Header",
        "value": "XXXXX"
      }
    ],
    "host": "app.probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "https://app.probely.com",
    "verification_date": "2018-01-31T16:32:52.226652Z",
    "verification_last_error": "string",
    "verification_method": "dns",
    "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
    "verified": false,
    "whitelist": [
      "/private/path/"
    ]
  },
  "type": "single"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 500 Response

```json
{
  "detail": "Internal server error."
}
```

<h3 id="create-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Target object|[Target](#schematarget)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="create-target-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve target

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{id}/`

<h3 id="retrieve-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "allowed_scan_profiles": [
    {
      "id": "normal",
      "name": "string"
    }
  ],
  "assets": [
    {
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "cookies": [
        {
          "name": "cookie_1",
          "value": "cookie_value"
        }
      ],
      "desc": "Object description",
      "headers": [
        {
          "name": "X-Custom-Header",
          "value": "XXXXX"
        }
      ],
      "host": "string",
      "id": "jMXUw-BE_2vd",
      "include": true,
      "name": "Object name",
      "stack": [
        "nginx"
      ],
      "verification_date": "2018-01-31T16:32:52.226652Z",
      "verification_last_error": "string",
      "verification_method": "dns",
      "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
      "verified": false
    }
  ],
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "connected_target": "string",
  "enabled": true,
  "environment": "testing",
  "id": "jMXUw-BE_2vd",
  "labels": [
    "string"
  ],
  "name": "Object name",
  "report_type": "default",
  "scan_profile": "normal",
  "site": {
    "basic_auth": {
      "password": "dolphins",
      "username": "probely"
    },
    "changed": "2018-01-31T16:32:17.238553Z",
    "changed_by": {
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "name": "Henrique Cimento"
    },
    "cookies": [
      {
        "name": "cookie_1",
        "value": "cookie_value"
      }
    ],
    "desc": "Object description",
    "form_login": [
      {
        "name": "username",
        "value": "probely"
      }
    ],
    "form_login_check_pattern": "",
    "form_login_url": "https://app.probely.com/",
    "has_basic_auth": true,
    "has_form_login": true,
    "headers": [
      {
        "name": "X-Custom-Header",
        "value": "XXXXX"
      }
    ],
    "host": "app.probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "https://app.probely.com",
    "verification_date": "2018-01-31T16:32:52.226652Z",
    "verification_last_error": "string",
    "verification_method": "dns",
    "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
    "verified": false,
    "whitelist": [
      "/private/path/"
    ]
  },
  "type": "single"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 500 Response

```json
{
  "detail": "Internal server error."
}
```

<h3 id="retrieve-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Target object|[Target](#schematarget)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="retrieve-target-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update target

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connected_target": "string",
    "environment": "testing",
    "labels": [
      "string"
    ],
    "name": "Object name",
    "report_type": "default",
    "scan_profile": "normal",
    "site": {
      "basic_auth": {
        "password": "dolphins",
        "username": "probely"
      },
      "cookies": [
        {
          "name": "cookie_1",
          "value": "cookie_value"
        }
      ],
      "desc": "Object description",
      "form_login": [
        {
          "name": "username",
          "value": "probely"
        }
      ],
      "form_login_check_pattern": "",
      "form_login_url": "https://app.probely.com/",
      "has_basic_auth": true,
      "has_form_login": true,
      "headers": [
        {
          "name": "X-Custom-Header",
          "value": "XXXXX"
        }
      ],
      "name": "Object name",
      "url": "https://app.probely.com",
      "whitelist": [
        "/private/path/"
      ]
    },
    "type": "single"
  }'
```

`PUT /targets/{id}/`

> Body parameter

```json
{
  "connected_target": "string",
  "environment": "testing",
  "labels": [
    "string"
  ],
  "name": "Object name",
  "report_type": "default",
  "scan_profile": "normal",
  "site": {
    "basic_auth": {
      "password": "dolphins",
      "username": "probely"
    },
    "cookies": [
      {
        "name": "cookie_1",
        "value": "cookie_value"
      }
    ],
    "desc": "Object description",
    "form_login": [
      {
        "name": "username",
        "value": "probely"
      }
    ],
    "form_login_check_pattern": "",
    "form_login_url": "https://app.probely.com/",
    "has_basic_auth": true,
    "has_form_login": true,
    "headers": [
      {
        "name": "X-Custom-Header",
        "value": "XXXXX"
      }
    ],
    "name": "Object name",
    "url": "https://app.probely.com",
    "whitelist": [
      "/private/path/"
    ]
  },
  "type": "single"
}
```

<h3 id="update-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[Target](#schematarget)|false|none|
|» connected_target|body|[connectedTarget](#schemaconnectedtarget)|false|Id of the connected target in a multi-environment targets.<br>|
|» environment|body|[environment](#schemaenvironment)|false|Multi-environment targets can identify environments using this property.<br>|
|» labels|body|[string]|false|User labels for the scope. (This feature is currently only available for certain accounts,<br>please contact our support if you are interested in using it)<br>|
|» name|body|[name](#schemaname)|false|Custom name for the resource|
|» report_type|body|[reportType](#schemareporttype)|false|* default - default report, no extra information added<br>* owasp - adds table on OWASP Top 10 most critical web application risks<br>* pci - adds table on PCI requirements<br>|
|» scan_profile|body|[scanProfile](#schemascanprofile)|false|* lightning - fast simple scan<br>* normal - default profile<br>* full - does everything the default profile does and adds boolean based<br>SQL injection tests<br>* safe - doesn't use any content changing methods (no POST, DELETE, etc)<br>and tries fewer payloads for SQL injection tests<br>|
|» site|body|[Site](#schemasite)|false|Main resource associated with a target|
|» type|body|[targetType](#schematargettype)|false|The type of a target determines what the limitations imposed on a<br>target.<br>* free - Every account is allowed to have 5 free targets, these targets<br>do not need to be verified but can only perform lightning<br>scans.<br>* single - Single environment targets need to be verified but are<br>allowed to run any type of scan allowed by the plan.<br>* multi - Multi environment targets are used when you want<br>to scan the same application in different environments.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|testing|
|» environment|production|
|» report_type|default|
|» report_type|owasp|
|» report_type|pci|
|» scan_profile|safe|
|» scan_profile|normal|
|» scan_profile|full|
|» scan_profile|lightning|
|» type|free|
|» type|single|
|» type|multi|

> Example responses

> 200 Response

```json
{
  "allowed_scan_profiles": [
    {
      "id": "normal",
      "name": "string"
    }
  ],
  "assets": [
    {
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "cookies": [
        {
          "name": "cookie_1",
          "value": "cookie_value"
        }
      ],
      "desc": "Object description",
      "headers": [
        {
          "name": "X-Custom-Header",
          "value": "XXXXX"
        }
      ],
      "host": "string",
      "id": "jMXUw-BE_2vd",
      "include": true,
      "name": "Object name",
      "stack": [
        "nginx"
      ],
      "verification_date": "2018-01-31T16:32:52.226652Z",
      "verification_last_error": "string",
      "verification_method": "dns",
      "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
      "verified": false
    }
  ],
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "connected_target": "string",
  "enabled": true,
  "environment": "testing",
  "id": "jMXUw-BE_2vd",
  "labels": [
    "string"
  ],
  "name": "Object name",
  "report_type": "default",
  "scan_profile": "normal",
  "site": {
    "basic_auth": {
      "password": "dolphins",
      "username": "probely"
    },
    "changed": "2018-01-31T16:32:17.238553Z",
    "changed_by": {
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "name": "Henrique Cimento"
    },
    "cookies": [
      {
        "name": "cookie_1",
        "value": "cookie_value"
      }
    ],
    "desc": "Object description",
    "form_login": [
      {
        "name": "username",
        "value": "probely"
      }
    ],
    "form_login_check_pattern": "",
    "form_login_url": "https://app.probely.com/",
    "has_basic_auth": true,
    "has_form_login": true,
    "headers": [
      {
        "name": "X-Custom-Header",
        "value": "XXXXX"
      }
    ],
    "host": "app.probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "https://app.probely.com",
    "verification_date": "2018-01-31T16:32:52.226652Z",
    "verification_last_error": "string",
    "verification_method": "dns",
    "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
    "verified": false,
    "whitelist": [
      "/private/path/"
    ]
  },
  "type": "single"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Target object|[Target](#schematarget)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-target-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Delete target

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /targets/{id}/`

<h3 id="delete-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="delete-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="delete-target-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Partial update target

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connected_target": "string",
    "environment": "testing",
    "labels": [
      "string"
    ],
    "name": "Object name",
    "report_type": "default",
    "scan_profile": "normal",
    "site": {
      "basic_auth": {
        "password": "dolphins",
        "username": "probely"
      },
      "cookies": [
        {
          "name": "cookie_1",
          "value": "cookie_value"
        }
      ],
      "desc": "Object description",
      "form_login": [
        {
          "name": "username",
          "value": "probely"
        }
      ],
      "form_login_check_pattern": "",
      "form_login_url": "https://app.probely.com/",
      "has_basic_auth": true,
      "has_form_login": true,
      "headers": [
        {
          "name": "X-Custom-Header",
          "value": "XXXXX"
        }
      ],
      "name": "Object name",
      "url": "https://app.probely.com",
      "whitelist": [
        "/private/path/"
      ]
    },
    "type": "single"
  }'
```

`PATCH /targets/{id}/`

> Body parameter

```json
{
  "connected_target": "string",
  "environment": "testing",
  "labels": [
    "string"
  ],
  "name": "Object name",
  "report_type": "default",
  "scan_profile": "normal",
  "site": {
    "basic_auth": {
      "password": "dolphins",
      "username": "probely"
    },
    "cookies": [
      {
        "name": "cookie_1",
        "value": "cookie_value"
      }
    ],
    "desc": "Object description",
    "form_login": [
      {
        "name": "username",
        "value": "probely"
      }
    ],
    "form_login_check_pattern": "",
    "form_login_url": "https://app.probely.com/",
    "has_basic_auth": true,
    "has_form_login": true,
    "headers": [
      {
        "name": "X-Custom-Header",
        "value": "XXXXX"
      }
    ],
    "name": "Object name",
    "url": "https://app.probely.com",
    "whitelist": [
      "/private/path/"
    ]
  },
  "type": "single"
}
```

<h3 id="partial-update-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[Target](#schematarget)|false|none|
|» connected_target|body|[connectedTarget](#schemaconnectedtarget)|false|Id of the connected target in a multi-environment targets.<br>|
|» environment|body|[environment](#schemaenvironment)|false|Multi-environment targets can identify environments using this property.<br>|
|» labels|body|[string]|false|User labels for the scope. (This feature is currently only available for certain accounts,<br>please contact our support if you are interested in using it)<br>|
|» name|body|[name](#schemaname)|false|Custom name for the resource|
|» report_type|body|[reportType](#schemareporttype)|false|* default - default report, no extra information added<br>* owasp - adds table on OWASP Top 10 most critical web application risks<br>* pci - adds table on PCI requirements<br>|
|» scan_profile|body|[scanProfile](#schemascanprofile)|false|* lightning - fast simple scan<br>* normal - default profile<br>* full - does everything the default profile does and adds boolean based<br>SQL injection tests<br>* safe - doesn't use any content changing methods (no POST, DELETE, etc)<br>and tries fewer payloads for SQL injection tests<br>|
|» site|body|[Site](#schemasite)|false|Main resource associated with a target|
|» type|body|[targetType](#schematargettype)|false|The type of a target determines what the limitations imposed on a<br>target.<br>* free - Every account is allowed to have 5 free targets, these targets<br>do not need to be verified but can only perform lightning<br>scans.<br>* single - Single environment targets need to be verified but are<br>allowed to run any type of scan allowed by the plan.<br>* multi - Multi environment targets are used when you want<br>to scan the same application in different environments.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» environment|testing|
|» environment|production|
|» report_type|default|
|» report_type|owasp|
|» report_type|pci|
|» scan_profile|safe|
|» scan_profile|normal|
|» scan_profile|full|
|» scan_profile|lightning|
|» type|free|
|» type|single|
|» type|multi|

> Example responses

> 200 Response

```json
{
  "allowed_scan_profiles": [
    {
      "id": "normal",
      "name": "string"
    }
  ],
  "assets": [
    {
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "cookies": [
        {
          "name": "cookie_1",
          "value": "cookie_value"
        }
      ],
      "desc": "Object description",
      "headers": [
        {
          "name": "X-Custom-Header",
          "value": "XXXXX"
        }
      ],
      "host": "string",
      "id": "jMXUw-BE_2vd",
      "include": true,
      "name": "Object name",
      "stack": [
        "nginx"
      ],
      "verification_date": "2018-01-31T16:32:52.226652Z",
      "verification_last_error": "string",
      "verification_method": "dns",
      "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
      "verified": false
    }
  ],
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "connected_target": "string",
  "enabled": true,
  "environment": "testing",
  "id": "jMXUw-BE_2vd",
  "labels": [
    "string"
  ],
  "name": "Object name",
  "report_type": "default",
  "scan_profile": "normal",
  "site": {
    "basic_auth": {
      "password": "dolphins",
      "username": "probely"
    },
    "changed": "2018-01-31T16:32:17.238553Z",
    "changed_by": {
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "name": "Henrique Cimento"
    },
    "cookies": [
      {
        "name": "cookie_1",
        "value": "cookie_value"
      }
    ],
    "desc": "Object description",
    "form_login": [
      {
        "name": "username",
        "value": "probely"
      }
    ],
    "form_login_check_pattern": "",
    "form_login_url": "https://app.probely.com/",
    "has_basic_auth": true,
    "has_form_login": true,
    "headers": [
      {
        "name": "X-Custom-Header",
        "value": "XXXXX"
      }
    ],
    "host": "app.probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "https://app.probely.com",
    "verification_date": "2018-01-31T16:32:52.226652Z",
    "verification_last_error": "string",
    "verification_method": "dns",
    "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
    "verified": false,
    "whitelist": [
      "/private/path/"
    ]
  },
  "type": "single"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="partial-update-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Target object|[Target](#schematarget)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="partial-update-target-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-site">Site</h1>

Every target has a site object, it contains the main entry URL for scans.
Other settings are also connected to a site like login parameters,
basic auth, and custom headers and cookies.


## Retrieve target's site

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/site/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/site/`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="retrieve-targets-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|

> Example responses

> 200 Response

```json
{
  "basic_auth": {
    "password": "dolphins",
    "username": "probely"
  },
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "cookies": [
    {
      "name": "cookie_1",
      "value": "cookie_value"
    }
  ],
  "desc": "Object description",
  "form_login": [
    {
      "name": "username",
      "value": "probely"
    }
  ],
  "form_login_check_pattern": "",
  "form_login_url": "https://app.probely.com/",
  "has_basic_auth": true,
  "has_form_login": true,
  "headers": [
    {
      "name": "X-Custom-Header",
      "value": "XXXXX"
    }
  ],
  "host": "app.probely.com",
  "id": "jMXUw-BE_2vd",
  "name": "Object name",
  "stack": [
    "nginx"
  ],
  "url": "https://app.probely.com",
  "verification_date": "2018-01-31T16:32:52.226652Z",
  "verification_last_error": "string",
  "verification_method": "dns",
  "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
  "verified": false,
  "whitelist": [
    "/private/path/"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-targets-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Site object|[Site](#schemasite)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-targets-site-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update target's site

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/site/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "basic_auth": {
      "password": "dolphins",
      "username": "probely"
    },
    "cookies": [
      {
        "name": "cookie_1",
        "value": "cookie_value"
      }
    ],
    "desc": "Object description",
    "form_login": [
      {
        "name": "username",
        "value": "probely"
      }
    ],
    "form_login_check_pattern": "",
    "form_login_url": "https://app.probely.com/",
    "has_basic_auth": true,
    "has_form_login": true,
    "headers": [
      {
        "name": "X-Custom-Header",
        "value": "XXXXX"
      }
    ],
    "name": "Object name",
    "url": "https://app.probely.com",
    "whitelist": [
      "/private/path/"
    ]
  }'
```

`PUT /targets/{target_id}/site/`

<aside class="warning">
This operation is deprecated
</aside>

Note that the URL can only be set once.

> Body parameter

```json
{
  "basic_auth": {
    "password": "dolphins",
    "username": "probely"
  },
  "cookies": [
    {
      "name": "cookie_1",
      "value": "cookie_value"
    }
  ],
  "desc": "Object description",
  "form_login": [
    {
      "name": "username",
      "value": "probely"
    }
  ],
  "form_login_check_pattern": "",
  "form_login_url": "https://app.probely.com/",
  "has_basic_auth": true,
  "has_form_login": true,
  "headers": [
    {
      "name": "X-Custom-Header",
      "value": "XXXXX"
    }
  ],
  "name": "Object name",
  "url": "https://app.probely.com",
  "whitelist": [
    "/private/path/"
  ]
}
```

<h3 id="update-targets-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|[Site](#schemasite)|true|none|
|» basic_auth|body|[BasicAuth](#schemabasicauth)|false|Basic authentication credentials|
|» cookies|body|[Cookies](#schemacookies)|false|Custom cookies name/value pairs|
|» desc|body|[desc](#schemadesc)|false|Custom description for the resource|
|» form_login|body|[FormLogin](#schemaformlogin)|false|Form login field name, field input pairs|
|» form_login_check_pattern|body|[formLoginCheckPattern](#schemaformlogincheckpattern)|false|Pattern to check successful authentication (not used)|
|» form_login_url|body|[formLoginUrl](#schemaformloginurl)|false|URL for the form login|
|» has_basic_auth|body|[hasBasicAuth](#schemahasbasicauth)|false|Use basic authentication in scan|
|» has_form_login|body|[hasFormLogin](#schemahasformlogin)|false|Does the resource use form login|
|» headers|body|[Headers](#schemaheaders)|false|Custom headers name value pairs|
|» name|body|[name](#schemaname)|false|Custom name for the resource|
|» url|body|[siteUrl](#schemasiteurl)|false|Site URL, it should include the path if the site is not located at the root. This URL can only be set once.<br>|
|» whitelist|body|[Whitelist](#schemawhitelist)|false|none|

> Example responses

> 200 Response

```json
{
  "basic_auth": {
    "password": "dolphins",
    "username": "probely"
  },
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "cookies": [
    {
      "name": "cookie_1",
      "value": "cookie_value"
    }
  ],
  "desc": "Object description",
  "form_login": [
    {
      "name": "username",
      "value": "probely"
    }
  ],
  "form_login_check_pattern": "",
  "form_login_url": "https://app.probely.com/",
  "has_basic_auth": true,
  "has_form_login": true,
  "headers": [
    {
      "name": "X-Custom-Header",
      "value": "XXXXX"
    }
  ],
  "host": "app.probely.com",
  "id": "jMXUw-BE_2vd",
  "name": "Object name",
  "stack": [
    "nginx"
  ],
  "url": "https://app.probely.com",
  "verification_date": "2018-01-31T16:32:52.226652Z",
  "verification_last_error": "string",
  "verification_method": "dns",
  "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
  "verified": false,
  "whitelist": [
    "/private/path/"
  ]
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-targets-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Site object|[Site](#schemasite)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-targets-site-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Partial update target's site

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/site/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "basic_auth": {
      "password": "dolphins",
      "username": "probely"
    },
    "cookies": [
      {
        "name": "cookie_1",
        "value": "cookie_value"
      }
    ],
    "desc": "Object description",
    "form_login": [
      {
        "name": "username",
        "value": "probely"
      }
    ],
    "form_login_check_pattern": "",
    "form_login_url": "https://app.probely.com/",
    "has_basic_auth": true,
    "has_form_login": true,
    "headers": [
      {
        "name": "X-Custom-Header",
        "value": "XXXXX"
      }
    ],
    "name": "Object name",
    "url": "https://app.probely.com",
    "whitelist": [
      "/private/path/"
    ]
  }'
```

`PATCH /targets/{target_id}/site/`

<aside class="warning">
This operation is deprecated
</aside>

Note that the URL can only be set once.

> Body parameter

```json
{
  "basic_auth": {
    "password": "dolphins",
    "username": "probely"
  },
  "cookies": [
    {
      "name": "cookie_1",
      "value": "cookie_value"
    }
  ],
  "desc": "Object description",
  "form_login": [
    {
      "name": "username",
      "value": "probely"
    }
  ],
  "form_login_check_pattern": "",
  "form_login_url": "https://app.probely.com/",
  "has_basic_auth": true,
  "has_form_login": true,
  "headers": [
    {
      "name": "X-Custom-Header",
      "value": "XXXXX"
    }
  ],
  "name": "Object name",
  "url": "https://app.probely.com",
  "whitelist": [
    "/private/path/"
  ]
}
```

<h3 id="partial-update-targets-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|[Site](#schemasite)|true|none|
|» basic_auth|body|[BasicAuth](#schemabasicauth)|false|Basic authentication credentials|
|» cookies|body|[Cookies](#schemacookies)|false|Custom cookies name/value pairs|
|» desc|body|[desc](#schemadesc)|false|Custom description for the resource|
|» form_login|body|[FormLogin](#schemaformlogin)|false|Form login field name, field input pairs|
|» form_login_check_pattern|body|[formLoginCheckPattern](#schemaformlogincheckpattern)|false|Pattern to check successful authentication (not used)|
|» form_login_url|body|[formLoginUrl](#schemaformloginurl)|false|URL for the form login|
|» has_basic_auth|body|[hasBasicAuth](#schemahasbasicauth)|false|Use basic authentication in scan|
|» has_form_login|body|[hasFormLogin](#schemahasformlogin)|false|Does the resource use form login|
|» headers|body|[Headers](#schemaheaders)|false|Custom headers name value pairs|
|» name|body|[name](#schemaname)|false|Custom name for the resource|
|» url|body|[siteUrl](#schemasiteurl)|false|Site URL, it should include the path if the site is not located at the root. This URL can only be set once.<br>|
|» whitelist|body|[Whitelist](#schemawhitelist)|false|none|

> Example responses

> 200 Response

```json
{
  "basic_auth": {
    "password": "dolphins",
    "username": "probely"
  },
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "cookies": [
    {
      "name": "cookie_1",
      "value": "cookie_value"
    }
  ],
  "desc": "Object description",
  "form_login": [
    {
      "name": "username",
      "value": "probely"
    }
  ],
  "form_login_check_pattern": "",
  "form_login_url": "https://app.probely.com/",
  "has_basic_auth": true,
  "has_form_login": true,
  "headers": [
    {
      "name": "X-Custom-Header",
      "value": "XXXXX"
    }
  ],
  "host": "app.probely.com",
  "id": "jMXUw-BE_2vd",
  "name": "Object name",
  "stack": [
    "nginx"
  ],
  "url": "https://app.probely.com",
  "verification_date": "2018-01-31T16:32:52.226652Z",
  "verification_last_error": "string",
  "verification_method": "dns",
  "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
  "verified": false,
  "whitelist": [
    "/private/path/"
  ]
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="partial-update-targets-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Site object|[Site](#schemasite)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="partial-update-targets-site-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Verify site ownership

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/site/verify/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "dns"
  }'
```

`POST /targets/{target_id}/site/verify/`

<aside class="warning">
This operation is deprecated
</aside>

> Body parameter

```json
{
  "type": "dns"
}
```

<h3 id="verify-site-ownership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|object|true|none|
|» type|body|[verificationType](#schemaverificationtype)|true|Type of verification:<br>* dns - we look or a TXT record on the host you registered containing<br>`Probely=<verification_token>`<br>* file - on the root of the path you registered we look for a file<br>named `<verification token>` containing `Probely`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|dns|
|» type|file|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="verify-site-ownership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="verify-site-ownership-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Message|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-assets">Assets</h1>

Other resources a scan required access to (e.g. the domain where an
API is being served) should be added here.
You can also configure custom headers and cookies for each asset.


## List target's assets

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/assets/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/assets/`

<h3 id="list-targets-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|page|query|integer|false|Page number within the paginated result set|
|length|query|integer|false|Number of results to return per page|
|ordering|query|string|false|Which field to use when ordering the results, prefix with `-` to invert ordering.<br>|
|search|query|string|false|Search term|

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "cookies": [
        {
          "name": "cookie_1",
          "value": "cookie_value"
        }
      ],
      "desc": "Object description",
      "headers": [
        {
          "name": "X-Custom-Header",
          "value": "XXXXX"
        }
      ],
      "host": "string",
      "id": "jMXUw-BE_2vd",
      "include": true,
      "name": "Object name",
      "stack": [
        "nginx"
      ],
      "verification_date": "2018-01-31T16:32:52.226652Z",
      "verification_last_error": "string",
      "verification_method": "dns",
      "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
      "verified": false
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-targets-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="list-targets-assets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[Asset](#schemaasset)]|false|none|Asset objects.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Create new asset

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/assets/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cookies": [
      {
        "name": "cookie_1",
        "value": "cookie_value"
      }
    ],
    "desc": "Object description",
    "headers": [
      {
        "name": "X-Custom-Header",
        "value": "XXXXX"
      }
    ],
    "host": "string",
    "include": true,
    "name": "Object name"
  }'
```

`POST /targets/{target_id}/assets/`

> Body parameter

```json
{
  "cookies": [
    {
      "name": "cookie_1",
      "value": "cookie_value"
    }
  ],
  "desc": "Object description",
  "headers": [
    {
      "name": "X-Custom-Header",
      "value": "XXXXX"
    }
  ],
  "host": "string",
  "include": true,
  "name": "Object name"
}
```

<h3 id="create-new-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|[Asset](#schemaasset)|true|none|
|» cookies|body|[Cookies](#schemacookies)|false|Custom cookies name/value pairs|
|» desc|body|[desc](#schemadesc)|false|Custom description for the resource|
|» headers|body|[Headers](#schemaheaders)|false|Custom headers name value pairs|
|» host|body|[host](#schemahost)|false|Fully qualified hostname|
|» include|body|[include](#schemainclude)|false|Use this asset in scans.|
|» name|body|[name](#schemaname)|false|Custom name for the resource|

> Example responses

> 201 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "cookies": [
    {
      "name": "cookie_1",
      "value": "cookie_value"
    }
  ],
  "desc": "Object description",
  "headers": [
    {
      "name": "X-Custom-Header",
      "value": "XXXXX"
    }
  ],
  "host": "string",
  "id": "jMXUw-BE_2vd",
  "include": true,
  "name": "Object name",
  "stack": [
    "nginx"
  ],
  "verification_date": "2018-01-31T16:32:52.226652Z",
  "verification_last_error": "string",
  "verification_method": "dns",
  "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
  "verified": false
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="create-new-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Asset object|[Asset](#schemaasset)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="create-new-asset-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve asset

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/assets/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/assets/{id}/`

<h3 id="retrieve-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "cookies": [
    {
      "name": "cookie_1",
      "value": "cookie_value"
    }
  ],
  "desc": "Object description",
  "headers": [
    {
      "name": "X-Custom-Header",
      "value": "XXXXX"
    }
  ],
  "host": "string",
  "id": "jMXUw-BE_2vd",
  "include": true,
  "name": "Object name",
  "stack": [
    "nginx"
  ],
  "verification_date": "2018-01-31T16:32:52.226652Z",
  "verification_last_error": "string",
  "verification_method": "dns",
  "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
  "verified": false
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset object|[Asset](#schemaasset)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-asset-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update asset

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/assets/jMXUw-BE_2vd/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cookies": [
      {
        "name": "cookie_1",
        "value": "cookie_value"
      }
    ],
    "desc": "Object description",
    "headers": [
      {
        "name": "X-Custom-Header",
        "value": "XXXXX"
      }
    ],
    "host": "string",
    "include": true,
    "name": "Object name"
  }'
```

`PUT /targets/{target_id}/assets/{id}/`

> Body parameter

```json
{
  "cookies": [
    {
      "name": "cookie_1",
      "value": "cookie_value"
    }
  ],
  "desc": "Object description",
  "headers": [
    {
      "name": "X-Custom-Header",
      "value": "XXXXX"
    }
  ],
  "host": "string",
  "include": true,
  "name": "Object name"
}
```

<h3 id="update-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[Asset](#schemaasset)|true|none|
|» cookies|body|[Cookies](#schemacookies)|false|Custom cookies name/value pairs|
|» desc|body|[desc](#schemadesc)|false|Custom description for the resource|
|» headers|body|[Headers](#schemaheaders)|false|Custom headers name value pairs|
|» host|body|[host](#schemahost)|false|Fully qualified hostname|
|» include|body|[include](#schemainclude)|false|Use this asset in scans.|
|» name|body|[name](#schemaname)|false|Custom name for the resource|

> Example responses

> 200 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "cookies": [
    {
      "name": "cookie_1",
      "value": "cookie_value"
    }
  ],
  "desc": "Object description",
  "headers": [
    {
      "name": "X-Custom-Header",
      "value": "XXXXX"
    }
  ],
  "host": "string",
  "id": "jMXUw-BE_2vd",
  "include": true,
  "name": "Object name",
  "stack": [
    "nginx"
  ],
  "verification_date": "2018-01-31T16:32:52.226652Z",
  "verification_last_error": "string",
  "verification_method": "dns",
  "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
  "verified": false
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset object|[Asset](#schemaasset)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-asset-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Delete asset

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/assets/jMXUw-BE_2vd/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /targets/{target_id}/assets/{id}/`

<h3 id="delete-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="delete-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="delete-asset-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Partial update assets

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/assets/jMXUw-BE_2vd/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cookies": [
      {
        "name": "cookie_1",
        "value": "cookie_value"
      }
    ],
    "desc": "Object description",
    "headers": [
      {
        "name": "X-Custom-Header",
        "value": "XXXXX"
      }
    ],
    "host": "string",
    "include": true,
    "name": "Object name"
  }'
```

`PATCH /targets/{target_id}/assets/{id}/`

> Body parameter

```json
{
  "cookies": [
    {
      "name": "cookie_1",
      "value": "cookie_value"
    }
  ],
  "desc": "Object description",
  "headers": [
    {
      "name": "X-Custom-Header",
      "value": "XXXXX"
    }
  ],
  "host": "string",
  "include": true,
  "name": "Object name"
}
```

<h3 id="partial-update-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[Asset](#schemaasset)|true|none|
|» cookies|body|[Cookies](#schemacookies)|false|Custom cookies name/value pairs|
|» desc|body|[desc](#schemadesc)|false|Custom description for the resource|
|» headers|body|[Headers](#schemaheaders)|false|Custom headers name value pairs|
|» host|body|[host](#schemahost)|false|Fully qualified hostname|
|» include|body|[include](#schemainclude)|false|Use this asset in scans.|
|» name|body|[name](#schemaname)|false|Custom name for the resource|

> Example responses

> 200 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "cookies": [
    {
      "name": "cookie_1",
      "value": "cookie_value"
    }
  ],
  "desc": "Object description",
  "headers": [
    {
      "name": "X-Custom-Header",
      "value": "XXXXX"
    }
  ],
  "host": "string",
  "id": "jMXUw-BE_2vd",
  "include": true,
  "name": "Object name",
  "stack": [
    "nginx"
  ],
  "verification_date": "2018-01-31T16:32:52.226652Z",
  "verification_last_error": "string",
  "verification_method": "dns",
  "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
  "verified": false
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="partial-update-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset object|[Asset](#schemaasset)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="partial-update-assets-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Verify asset ownership

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/assets/jMXUw-BE_2vd/verify/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "dns"
  }'
```

`POST /targets/{target_id}/assets/{id}/verify/`

> Body parameter

```json
{
  "type": "dns"
}
```

<h3 id="verify-asset-ownership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|object|true|none|
|» type|body|[verificationType](#schemaverificationtype)|true|Type of verification:<br>* dns - we look or a TXT record on the host you registered containing<br>`Probely=<verification_token>`<br>* file - on the root of the path you registered we look for a file<br>named `<verification token>` containing `Probely`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|dns|
|» type|file|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="verify-asset-ownership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="verify-asset-ownership-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Message|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-scans">Scans</h1>

Start and manage scans against the target.
You can also produce reports and access the list of scanned endpoints.


## List scans for all targets

> Code samples

```bash
curl https://example.com/targets/all/scans/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/all/scans/`

<h3 id="list-scans-for-all-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number within the paginated result set|
|length|query|integer|false|Number of results to return per page|
|ordering|query|string|false|Which field to use when ordering the results, prefix with `-` to invert ordering.<br>|
|search|query|string|false|Search term|
|started|query|[string(date)]|false|Filter by scan start dates|
|status|query|[scanStatus](#schemascanstatus)|false|Filter by scan statuses|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|queued|
|status|started|
|status|under_review|
|status|completed|
|status|completed_with_errors|
|status|failed|
|status|canceled|
|status|canceling|

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "completed": "2018-01-31T16:32:17.238553Z",
      "crawler": {
        "error": [
          "string"
        ],
        "state": "started",
        "status": {
          "0": 0,
          "1": 0
        },
        "warning": [
          "string"
        ]
      },
      "created": "2018-01-31T16:32:17.238553Z",
      "created_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "fingerprinter": {
        "count": 0,
        "error": [
          "string"
        ],
        "state": "started",
        "warning": [
          "string"
        ]
      },
      "highs": 0,
      "id": "jMXUw-BE_2vd",
      "lows": 0,
      "mediums": 0,
      "scan_profile": "normal",
      "scanner": {
        "error": [
          "string"
        ],
        "state": "started",
        "status": {
          "0": 0,
          "1": 0
        },
        "warning": [
          "string"
        ]
      },
      "started": "2018-01-31T16:32:17.238553Z",
      "status": "queued",
      "target": {
        "desc": "Object description",
        "id": "jMXUw-BE_2vd",
        "name": "Object name",
        "stack": [
          "nginx"
        ],
        "url": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

<h3 id="list-scans-for-all-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scan list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|

<h3 id="list-scans-for-all-targets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[Scan](#schemascan)]|false|none|Scan objects|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Start a scan on the target

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scan_now/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "scan_profile": "safe"
  }'
```

`POST /targets/{target_id}/scan_now/`

> Body parameter

```json
{
  "scan_profile": "safe"
}
```

<h3 id="start-a-scan-on-the-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|object|false|none|
|» scan_profile|body|string|false|Override the target's `scan_profile`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scan_profile|safe|
|» scan_profile|normal|
|» scan_profile|full|
|» scan_profile|lightning|

> Example responses

> 200 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "completed": "2018-01-31T16:32:17.238553Z",
  "crawler": {
    "error": [
      "string"
    ],
    "state": "started",
    "status": {
      "0": 0,
      "1": 0
    },
    "warning": [
      "string"
    ]
  },
  "created": "2018-01-31T16:32:17.238553Z",
  "created_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "fingerprinter": {
    "count": 0,
    "error": [
      "string"
    ],
    "state": "started",
    "warning": [
      "string"
    ]
  },
  "highs": 0,
  "id": "jMXUw-BE_2vd",
  "lows": 0,
  "mediums": 0,
  "scan_profile": "normal",
  "scanner": {
    "error": [
      "string"
    ],
    "state": "started",
    "status": {
      "0": 0,
      "1": 0
    },
    "warning": [
      "string"
    ]
  },
  "started": "2018-01-31T16:32:17.238553Z",
  "status": "queued",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  }
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="start-a-scan-on-the-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scan object|[Scan](#schemascan)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="start-a-scan-on-the-target-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## List scans

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scans/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/scans/`

<h3 id="list-scans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|page|query|integer|false|Page number within the paginated result set|
|length|query|integer|false|Number of results to return per page|
|ordering|query|string|false|Which field to use when ordering the results, prefix with `-` to invert ordering.<br>|
|search|query|string|false|Search term|
|started|query|[string(date)]|false|Filter by scan start dates|
|status|query|[scanStatus](#schemascanstatus)|false|Filter by scan statuses|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|queued|
|status|started|
|status|under_review|
|status|completed|
|status|completed_with_errors|
|status|failed|
|status|canceled|
|status|canceling|

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "completed": "2018-01-31T16:32:17.238553Z",
      "crawler": {
        "error": [
          "string"
        ],
        "state": "started",
        "status": {
          "0": 0,
          "1": 0
        },
        "warning": [
          "string"
        ]
      },
      "created": "2018-01-31T16:32:17.238553Z",
      "created_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "fingerprinter": {
        "count": 0,
        "error": [
          "string"
        ],
        "state": "started",
        "warning": [
          "string"
        ]
      },
      "highs": 0,
      "id": "jMXUw-BE_2vd",
      "lows": 0,
      "mediums": 0,
      "scan_profile": "normal",
      "scanner": {
        "error": [
          "string"
        ],
        "state": "started",
        "status": {
          "0": 0,
          "1": 0
        },
        "warning": [
          "string"
        ]
      },
      "started": "2018-01-31T16:32:17.238553Z",
      "status": "queued",
      "target": {
        "desc": "Object description",
        "id": "jMXUw-BE_2vd",
        "name": "Object name",
        "stack": [
          "nginx"
        ],
        "url": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-scans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scan list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="list-scans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[Scan](#schemascan)]|false|none|Scan objects|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Dates where scans have ocurred

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scans/dates/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/scans/dates/`

<h3 id="dates-where-scans-have-ocurred-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|

> Example responses

> 200 Response

```json
[
  "2017-06-12",
  "2017-06-22"
]
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="dates-where-scans-have-ocurred-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dates for which there are scans|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="dates-where-scans-have-ocurred-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string(date)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Scan page

> Code samples

```bash
curl 'https://example.com/targets/jMXUw-BE_2vd/scans/retrieve_page/?date=1970-01-01' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/scans/retrieve_page/`

Given a date return the page number

<h3 id="scan-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|length|query|integer|false|Number of results to return per page|
|date|query|string(date)|true|Date|

> Example responses

> 200 Response

```json
{
  "page": 0
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="scan-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Page number for supplied date|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="scan-page-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|false|none|Page number|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve scan

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scans/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/scans/{id}/`

<h3 id="retrieve-scan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "completed": "2018-01-31T16:32:17.238553Z",
  "crawler": {
    "error": [
      "string"
    ],
    "state": "started",
    "status": {
      "0": 0,
      "1": 0
    },
    "warning": [
      "string"
    ]
  },
  "created": "2018-01-31T16:32:17.238553Z",
  "created_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "fingerprinter": {
    "count": 0,
    "error": [
      "string"
    ],
    "state": "started",
    "warning": [
      "string"
    ]
  },
  "highs": 0,
  "id": "jMXUw-BE_2vd",
  "lows": 0,
  "mediums": 0,
  "scan_profile": "normal",
  "scanner": {
    "error": [
      "string"
    ],
    "state": "started",
    "status": {
      "0": 0,
      "1": 0
    },
    "warning": [
      "string"
    ]
  },
  "started": "2018-01-31T16:32:17.238553Z",
  "status": "queued",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  }
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-scan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scan object|[Scan](#schemascan)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-scan-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Cancel running scan

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scans/jMXUw-BE_2vd/cancel/ \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /targets/{target_id}/scans/{id}/cancel/`

<h3 id="cancel-running-scan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "completed": "2018-01-31T16:32:17.238553Z",
  "crawler": {
    "error": [
      "string"
    ],
    "state": "started",
    "status": {
      "0": 0,
      "1": 0
    },
    "warning": [
      "string"
    ]
  },
  "created": "2018-01-31T16:32:17.238553Z",
  "created_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "fingerprinter": {
    "count": 0,
    "error": [
      "string"
    ],
    "state": "started",
    "warning": [
      "string"
    ]
  },
  "highs": 0,
  "id": "jMXUw-BE_2vd",
  "lows": 0,
  "mediums": 0,
  "scan_profile": "normal",
  "scanner": {
    "error": [
      "string"
    ],
    "state": "started",
    "status": {
      "0": 0,
      "1": 0
    },
    "warning": [
      "string"
    ]
  },
  "started": "2018-01-31T16:32:17.238553Z",
  "status": "queued",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  }
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="cancel-running-scan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scan object|[Scan](#schemascan)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="cancel-running-scan-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Scan endpoints file

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scans/jMXUw-BE_2vd/endpoints/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/scans/{id}/endpoints/`

<h3 id="scan-endpoints-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="scan-endpoints-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Endpoint list CSV file|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="scan-endpoints-file-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Scan report PDF, using the report type specified for the target

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scans/jMXUw-BE_2vd/report/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/scans/{id}/report/`

<h3 id="scan-report-pdf-using-the-report-type-specified-for-the-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="scan-report-pdf-using-the-report-type-specified-for-the-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scan report PDF|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="scan-report-pdf-using-the-report-type-specified-for-the-target-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Scan report PDF, using the default report type

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scans/jMXUw-BE_2vd/report/default/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/scans/{id}/report/default/`

<h3 id="scan-report-pdf-using-the-default-report-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="scan-report-pdf-using-the-default-report-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scan report PDF|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="scan-report-pdf-using-the-default-report-type-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Scan report PDF, using the OWASP report type

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scans/jMXUw-BE_2vd/report/owasp/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/scans/{id}/report/owasp/`

<h3 id="scan-report-pdf-using-the-owasp-report-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="scan-report-pdf-using-the-owasp-report-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scan report PDF|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="scan-report-pdf-using-the-owasp-report-type-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Scan report PDF, using the PCI report type

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scans/jMXUw-BE_2vd/report/pci/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/scans/{id}/report/pci/`

<h3 id="scan-report-pdf-using-the-pci-report-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="scan-report-pdf-using-the-pci-report-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scan report PDF|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="scan-report-pdf-using-the-pci-report-type-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-scheduled">Scheduled</h1>

You can schedule scans for the future as a one off, or on a recurring
basis.


## List scheduled scans for all targets expanding recurrence

> Code samples

```bash
curl https://example.com/targets/all/scheduledscans/expanded/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/all/scheduledscans/expanded/`

<h3 id="list-scheduled-scans-for-all-targets-expanding-recurrence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|length|query|integer|false|Number of results to return per page|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "date_time": "1970-01-01T00:00:00Z",
      "id": "QJxMvgPebu0e",
      "recurrence": "d",
      "target": {
        "desc": "Object description",
        "id": "jMXUw-BE_2vd",
        "name": "Object name",
        "stack": [
          "nginx"
        ],
        "url": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-scheduled-scans-for-all-targets-expanding-recurrence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Next scheduled scans|Inline|
|404|Not Found|Not found|Inline|

<h3 id="list-scheduled-scans-for-all-targets-expanding-recurrence-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Scheduled](#schemascheduled)]|false|none|Scheduled scan objects|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## List scheduled scans

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scheduledscans/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/scheduledscans/`

<h3 id="list-scheduled-scans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|page|query|integer|false|Page number within the paginated result set|
|length|query|integer|false|Number of results to return per page|
|ordering|query|string|false|Which field to use when ordering the results, prefix with `-` to invert ordering.<br>|
|search|query|string|false|Search term|

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "date_time": "1970-01-01T00:00:00Z",
      "id": "QJxMvgPebu0e",
      "recurrence": "d",
      "target": {
        "desc": "Object description",
        "id": "jMXUw-BE_2vd",
        "name": "Object name",
        "stack": [
          "nginx"
        ],
        "url": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-scheduled-scans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scheduled scan list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="list-scheduled-scans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[Scheduled](#schemascheduled)]|false|none|Scheduled scan objects|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Create new scheduled scan

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scheduledscans/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "date_time": "1970-01-01T00:00:00Z",
    "recurrence": "d"
  }'
```

`POST /targets/{target_id}/scheduledscans/`

> Body parameter

```json
{
  "date_time": "1970-01-01T00:00:00Z",
  "recurrence": "d"
}
```

<h3 id="create-new-scheduled-scan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|object|true|none|
|» date_time|body|[scanDateTime](#schemascandatetime)|true|Date time of next scan|
|» recurrence|body|[recurrence](#schemarecurrence)|false|Scan recurrence:<br>  * d - daily<br>  * w - weekly<br>  * m - monthly<br>  * q - quarterly<br>  * '' - no recurrence<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» recurrence|d|
|» recurrence|w|
|» recurrence|m|
|» recurrence|q|
|» recurrence|""|

> Example responses

> 201 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "date_time": "1970-01-01T00:00:00Z",
  "id": "QJxMvgPebu0e",
  "recurrence": "d",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  }
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="create-new-scheduled-scan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Scheduled scan object|[Scheduled](#schemascheduled)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="create-new-scheduled-scan-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## List scheduled scans expanding recurrence

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scheduledscans/expanded/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/scheduledscans/expanded/`

<h3 id="list-scheduled-scans-expanding-recurrence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|length|query|integer|false|Number of results to return per page|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "date_time": "1970-01-01T00:00:00Z",
      "id": "QJxMvgPebu0e",
      "recurrence": "d",
      "target": {
        "desc": "Object description",
        "id": "jMXUw-BE_2vd",
        "name": "Object name",
        "stack": [
          "nginx"
        ],
        "url": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-scheduled-scans-expanding-recurrence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Next scheduled scans|Inline|
|404|Not Found|Not found|Inline|

<h3 id="list-scheduled-scans-expanding-recurrence-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Scheduled](#schemascheduled)]|false|none|Scheduled scan objects|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve a scheduled scan

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scheduledscans/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/scheduledscans/{id}/`

<h3 id="retrieve-a-scheduled-scan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "date_time": "1970-01-01T00:00:00Z",
  "id": "QJxMvgPebu0e",
  "recurrence": "d",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  }
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-a-scheduled-scan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scheduled scan object|[Scheduled](#schemascheduled)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-a-scheduled-scan-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update a scheduled scan

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scheduledscans/jMXUw-BE_2vd/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "date_time": "1970-01-01T00:00:00Z",
    "recurrence": "d"
  }'
```

`PUT /targets/{target_id}/scheduledscans/{id}/`

> Body parameter

```json
{
  "date_time": "1970-01-01T00:00:00Z",
  "recurrence": "d"
}
```

<h3 id="update-a-scheduled-scan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|object|true|none|
|» date_time|body|[scanDateTime](#schemascandatetime)|true|Date time of next scan|
|» recurrence|body|[recurrence](#schemarecurrence)|false|Scan recurrence:<br>  * d - daily<br>  * w - weekly<br>  * m - monthly<br>  * q - quarterly<br>  * '' - no recurrence<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» recurrence|d|
|» recurrence|w|
|» recurrence|m|
|» recurrence|q|
|» recurrence|""|

> Example responses

> 200 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "date_time": "1970-01-01T00:00:00Z",
  "id": "QJxMvgPebu0e",
  "recurrence": "d",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  }
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-a-scheduled-scan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scheduled scan object|[Scheduled](#schemascheduled)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-a-scheduled-scan-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Delete

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scheduledscans/jMXUw-BE_2vd/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /targets/{target_id}/scheduledscans/{id}/`

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="delete-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Partial update

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/scheduledscans/jMXUw-BE_2vd/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "date_time": "1970-01-01T00:00:00Z",
    "recurrence": "d"
  }'
```

`PATCH /targets/{target_id}/scheduledscans/{id}/`

> Body parameter

```json
{
  "date_time": "1970-01-01T00:00:00Z",
  "recurrence": "d"
}
```

<h3 id="partial-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|object|true|none|
|» date_time|body|[scanDateTime](#schemascandatetime)|true|Date time of next scan|
|» recurrence|body|[recurrence](#schemarecurrence)|false|Scan recurrence:<br>  * d - daily<br>  * w - weekly<br>  * m - monthly<br>  * q - quarterly<br>  * '' - no recurrence<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» recurrence|d|
|» recurrence|w|
|» recurrence|m|
|» recurrence|q|
|» recurrence|""|

> Example responses

> 200 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "date_time": "1970-01-01T00:00:00Z",
  "id": "QJxMvgPebu0e",
  "recurrence": "d",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  }
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="partial-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scheduled scan object|[Scheduled](#schemascheduled)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="partial-update-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-findings">Findings</h1>

Findings are security issues found during scans.
We try hard to present valid findings only. We give as much information
as possible to help you know exactly what to do, without having to
resort to outside resources.

Findings come with all the data we gathered during the scan, a
suggestion on how to fix it, and a description of the vulnerability.


## List target findings

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/findings/`

<h3 id="list-target-findings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|scan|query|[string]|false|Filter by scan ids|
|severity|query|[findingSeverity](#schemafindingseverity)|false|Filter by finding severity|
|state|query|[findingState](#schemafindingstate)|false|Filter by finding states|
|assignee|query|[string]|false|Filter by assignee ids|
|label|query|[string]|false|Filter by finding labels|
|page|query|integer|false|Page number within the paginated result set|
|length|query|integer|false|Number of results to return per page|
|ordering|query|string|false|Which field to use when ordering the results, prefix with `-` to invert ordering.<br>|
|search|query|string|false|Search term|

#### Enumerated Values

|Parameter|Value|
|---|---|
|severity|10|
|severity|20|
|severity|30|
|state|notfixed|
|state|invalid|
|state|accepted|
|state|fixed|

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "assignee": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "comment": "string",
      "cvss_score": 6.5,
      "cvss_vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N",
      "definition": {
        "desc": "string",
        "id": "string",
        "name": "string"
      },
      "evidence": "string",
      "extra": "string",
      "fix": "string",
      "id": "jMXUw-BE_2vd",
      "insertion_point": "cookie",
      "labels": [
        "string"
      ],
      "last_found": "2018-02-19T18:58:50.906015Z",
      "method": "GET",
      "parameter": "string",
      "params": "string",
      "path": "string",
      "reporter": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "requests": [
        {
          "request": "string",
          "response": "string"
        }
      ],
      "scans": [
        "string"
      ],
      "severity": 10,
      "state": "notfixed",
      "target": {
        "desc": "Object description",
        "id": "jMXUw-BE_2vd",
        "name": "Object name",
        "stack": [
          "nginx"
        ],
        "url": "string"
      },
      "url": "string",
      "value": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-target-findings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Finding list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="list-target-findings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[Finding](#schemafinding)]|false|none|Finding objects.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Finding report

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/bulk/report/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`POST /targets/{target_id}/findings/bulk/report/`

> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="finding-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|[FindingBulkIds](#schemafindingbulkids)|true|none|
|» ids|body|[string]|true|Array of finding ids|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="finding-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token to retrieve report.<br>|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="finding-report-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Bulk retest findings

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/bulk/retest/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      "string"
    ],
    "scan_profile": "normal"
  }'
```

`POST /targets/{target_id}/findings/bulk/retest/`

> Body parameter

```json
{
  "ids": [
    "string"
  ],
  "scan_profile": "normal"
}
```

<h3 id="bulk-retest-findings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|[FindingBulkRetest](#schemafindingbulkretest)|true|none|
|» ids|body|[string]|true|Array of finding ids|
|» scan_profile|body|[scanProfile](#schemascanprofile)|false|* lightning - fast simple scan<br>* normal - default profile<br>* full - does everything the default profile does and adds boolean based<br>SQL injection tests<br>* safe - doesn't use any content changing methods (no POST, DELETE, etc)<br>and tries fewer payloads for SQL injection tests<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scan_profile|safe|
|» scan_profile|normal|
|» scan_profile|full|
|» scan_profile|lightning|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="bulk-retest-findings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of assessment IDs.<br>|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="bulk-retest-findings-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Bulk update findings

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/bulk/update/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      "string"
    ],
    "assignee": {
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "name": "Henrique Cimento"
    },
    "comment": "string",
    "labels": [
      "string"
    ],
    "severity": 10,
    "state": "notfixed"
  }'
```

`PATCH /targets/{target_id}/findings/bulk/update/`

> Body parameter

```json
{
  "ids": [
    "string"
  ],
  "assignee": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "comment": "string",
  "labels": [
    "string"
  ],
  "severity": 10,
  "state": "notfixed"
}
```

<h3 id="bulk-update-findings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|[FindingBulkUpdate](#schemafindingbulkupdate)|true|none|
|» ids|body|[string]|true|Array of finding ids|
|» assignee|body|[Assignee](#schemaassignee)|false|Assigned user|
|» comment|body|string|false|User comment left on the finding.|
|» labels|body|[string]|false|User labels for the finding.|
|» severity|body|[findingSeverity](#schemafindingseverity)|false|Severity, how serious the issue is considered:<br>  * 10 - low<br>  * 20 - medium<br>  * 30 - high<br>|
|» state|body|[findingState](#schemafindingstate)|false|Finding state:<br>  * notfixed - Issue can still be exploited<br>  * invalid - Issue determined to be a false positive<br>  * accepted - Issue will not be solved and the risk was accepted<br>  * fixed - No problem here anymore<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» severity|10|
|» severity|20|
|» severity|30|
|» state|notfixed|
|» state|invalid|
|» state|accepted|
|» state|fixed|

> Example responses

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="bulk-update-findings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="bulk-update-findings-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve finding report PDF format

> Code samples

```bash
curl 'https://example.com/targets/jMXUw-BE_2vd/findings/report/?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/findings/report/`

<h3 id="retrieve-finding-report-pdf-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|token|query|string|true|Token received from the finding report endpoint.|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-finding-report-pdf-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scan report PDF|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-finding-report-pdf-format-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve finding

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/findings/{id}/`

<h3 id="retrieve-finding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "assignee": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "comment": "string",
  "cvss_score": 6.5,
  "cvss_vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N",
  "definition": {
    "desc": "string",
    "id": "string",
    "name": "string"
  },
  "evidence": "string",
  "extra": "string",
  "fix": "string",
  "id": "jMXUw-BE_2vd",
  "insertion_point": "cookie",
  "labels": [
    "string"
  ],
  "last_found": "2018-02-19T18:58:50.906015Z",
  "method": "GET",
  "parameter": "string",
  "params": "string",
  "path": "string",
  "reporter": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "requests": [
    {
      "request": "string",
      "response": "string"
    }
  ],
  "scans": [
    "string"
  ],
  "severity": 10,
  "state": "notfixed",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  },
  "url": "string",
  "value": "string"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-finding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Finding object|[Finding](#schemafinding)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-finding-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update finding

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/jMXUw-BE_2vd/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assignee": {
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "name": "Henrique Cimento"
    },
    "comment": "string",
    "labels": [
      "string"
    ],
    "severity": 10,
    "state": "notfixed"
  }'
```

`PUT /targets/{target_id}/findings/{id}/`

> Body parameter

```json
{
  "assignee": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "comment": "string",
  "labels": [
    "string"
  ],
  "severity": 10,
  "state": "notfixed"
}
```

<h3 id="update-finding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[FindingUpdate](#schemafindingupdate)|true|none|
|» assignee|body|[Assignee](#schemaassignee)|false|Assigned user|
|» comment|body|string|false|User comment left on the finding.|
|» labels|body|[string]|false|User labels for the finding.|
|» severity|body|[findingSeverity](#schemafindingseverity)|false|Severity, how serious the issue is considered:<br>  * 10 - low<br>  * 20 - medium<br>  * 30 - high<br>|
|» state|body|[findingState](#schemafindingstate)|false|Finding state:<br>  * notfixed - Issue can still be exploited<br>  * invalid - Issue determined to be a false positive<br>  * accepted - Issue will not be solved and the risk was accepted<br>  * fixed - No problem here anymore<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» severity|10|
|» severity|20|
|» severity|30|
|» state|notfixed|
|» state|invalid|
|» state|accepted|
|» state|fixed|

> Example responses

> 200 Response

```json
{
  "assignee": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "comment": "string",
  "cvss_score": 6.5,
  "cvss_vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N",
  "definition": {
    "desc": "string",
    "id": "string",
    "name": "string"
  },
  "evidence": "string",
  "extra": "string",
  "fix": "string",
  "id": "jMXUw-BE_2vd",
  "insertion_point": "cookie",
  "labels": [
    "string"
  ],
  "last_found": "2018-02-19T18:58:50.906015Z",
  "method": "GET",
  "parameter": "string",
  "params": "string",
  "path": "string",
  "reporter": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "requests": [
    {
      "request": "string",
      "response": "string"
    }
  ],
  "scans": [
    "string"
  ],
  "severity": 10,
  "state": "notfixed",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  },
  "url": "string",
  "value": "string"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-finding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Finding object|[Finding](#schemafinding)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-finding-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Partial update finding

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/jMXUw-BE_2vd/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assignee": {
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "name": "Henrique Cimento"
    },
    "comment": "string",
    "labels": [
      "string"
    ],
    "severity": 10,
    "state": "notfixed"
  }'
```

`PATCH /targets/{target_id}/findings/{id}/`

> Body parameter

```json
{
  "assignee": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "comment": "string",
  "labels": [
    "string"
  ],
  "severity": 10,
  "state": "notfixed"
}
```

<h3 id="partial-update-finding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[FindingUpdate](#schemafindingupdate)|true|none|
|» assignee|body|[Assignee](#schemaassignee)|false|Assigned user|
|» comment|body|string|false|User comment left on the finding.|
|» labels|body|[string]|false|User labels for the finding.|
|» severity|body|[findingSeverity](#schemafindingseverity)|false|Severity, how serious the issue is considered:<br>  * 10 - low<br>  * 20 - medium<br>  * 30 - high<br>|
|» state|body|[findingState](#schemafindingstate)|false|Finding state:<br>  * notfixed - Issue can still be exploited<br>  * invalid - Issue determined to be a false positive<br>  * accepted - Issue will not be solved and the risk was accepted<br>  * fixed - No problem here anymore<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» severity|10|
|» severity|20|
|» severity|30|
|» state|notfixed|
|» state|invalid|
|» state|accepted|
|» state|fixed|

> Example responses

> 200 Response

```json
{
  "assignee": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "comment": "string",
  "cvss_score": 6.5,
  "cvss_vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N",
  "definition": {
    "desc": "string",
    "id": "string",
    "name": "string"
  },
  "evidence": "string",
  "extra": "string",
  "fix": "string",
  "id": "jMXUw-BE_2vd",
  "insertion_point": "cookie",
  "labels": [
    "string"
  ],
  "last_found": "2018-02-19T18:58:50.906015Z",
  "method": "GET",
  "parameter": "string",
  "params": "string",
  "path": "string",
  "reporter": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "requests": [
    {
      "request": "string",
      "response": "string"
    }
  ],
  "scans": [
    "string"
  ],
  "severity": 10,
  "state": "notfixed",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  },
  "url": "string",
  "value": "string"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="partial-update-finding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Finding object|[Finding](#schemafinding)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="partial-update-finding-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Finding activity log.

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/jMXUw-BE_2vd/log/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/findings/{id}/log/`

Finding activity log.

<h3 id="finding-activity-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
[
  {
    "change": "created",
    "changed": "2018-01-31T16:32:17.238553Z",
    "changed_by": {
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "name": "Henrique Cimento"
    },
    "field": "string",
    "old_value": "string",
    "value": "string"
  }
]
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="finding-activity-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Finding activity log|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="finding-activity-log-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Activity](#schemaactivity)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retest finding

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/jMXUw-BE_2vd/retest/ \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /targets/{target_id}/findings/{id}/retest/`

<h3 id="retest-finding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 201 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "completed": "2018-01-31T16:32:17.238553Z",
  "crawler": {
    "error": [
      "string"
    ],
    "state": "started",
    "status": {
      "0": 0,
      "1": 0
    },
    "warning": [
      "string"
    ]
  },
  "created": "2018-01-31T16:32:17.238553Z",
  "created_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "fingerprinter": {
    "count": 0,
    "error": [
      "string"
    ],
    "state": "started",
    "warning": [
      "string"
    ]
  },
  "highs": 0,
  "id": "jMXUw-BE_2vd",
  "lows": 0,
  "mediums": 0,
  "scan_profile": "normal",
  "scanner": {
    "error": [
      "string"
    ],
    "state": "started",
    "status": {
      "0": 0,
      "1": 0
    },
    "warning": [
      "string"
    ]
  },
  "started": "2018-01-31T16:32:17.238553Z",
  "status": "queued",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  }
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retest-finding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Scan object|[Scan](#schemascan)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retest-finding-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-frameworks">Frameworks</h1>

During the scans we run fingerprinters against the target and record the
result on the site and assets.
You can access our list of frameworks/software here.


## List frameworks

> Code samples

```bash
curl https://example.com/frameworks/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /frameworks/`

<h3 id="list-frameworks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number within the paginated result set|
|length|query|integer|false|Number of results to return per page|
|ordering|query|string|false|Which field to use when ordering the results, prefix with `-` to invert ordering.<br>|
|search|query|string|false|Search term|

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "desc": "string",
      "id": "jMXUw-BE_2vd",
      "name": "jMXUw-BE_2vd"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

<h3 id="list-frameworks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Framework list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|

<h3 id="list-frameworks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[Framework](#schemaframework)]|false|none|Framework objects|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve framework

> Code samples

```bash
curl https://example.com/frameworks/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /frameworks/{id}/`

<h3 id="retrieve-framework-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "desc": "string",
  "id": "jMXUw-BE_2vd",
  "name": "jMXUw-BE_2vd"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-framework-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Framework object|[Framework](#schemaframework)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-framework-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-labels">Labels</h1>

You can add labels to findings to help you keep track of you development.
Use these endpoints to manage your labels.


## List labels

> Code samples

```bash
curl https://example.com/labels/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /labels/`

<h3 id="list-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number within the paginated result set|
|length|query|integer|false|Number of results to return per page|
|ordering|query|string|false|Which field to use when ordering the results, prefix with `-` to invert ordering.<br>|
|search|query|string|false|Search term|

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "id": "jMXUw-BE_2vd",
      "name": "Object name"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

<h3 id="list-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Label list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|

<h3 id="list-labels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[Label](#schemalabel)]|false|none|label objects.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Create label

> Code samples

```bash
curl https://example.com/labels/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Object name"
  }'
```

`POST /labels/`

> Body parameter

```json
{
  "name": "Object name"
}
```

<h3 id="create-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Label](#schemalabel)|true|none|
|» name|body|[name](#schemaname)|false|Custom name for the resource|

> Example responses

> 201 Response

```json
{
  "id": "jMXUw-BE_2vd",
  "name": "Object name"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

<h3 id="create-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Label object|[Label](#schemalabel)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|

<h3 id="create-label-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve framework

> Code samples

```bash
curl https://example.com/labels/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /labels/{id}/`

<h3 id="retrieve-framework-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "id": "jMXUw-BE_2vd",
  "name": "Object name"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-framework-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Label object|[Label](#schemalabel)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-framework-1-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update label

> Code samples

```bash
curl https://example.com/labels/jMXUw-BE_2vd/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Object name"
  }'
```

`PUT /labels/{id}/`

> Body parameter

```json
{
  "name": "Object name"
}
```

<h3 id="update-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[Label](#schemalabel)|true|none|
|» name|body|[name](#schemaname)|false|Custom name for the resource|

> Example responses

> 200 Response

```json
{
  "id": "jMXUw-BE_2vd",
  "name": "Object name"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Label object|[Label](#schemalabel)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-label-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Delete label

> Code samples

```bash
curl https://example.com/labels/jMXUw-BE_2vd/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /labels/{id}/`

<h3 id="delete-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

<h3 id="delete-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Access token is missing or invalid|Inline|

<h3 id="delete-label-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Partial update

> Code samples

```bash
curl https://example.com/labels/jMXUw-BE_2vd/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Object name"
  }'
```

`PATCH /labels/{id}/`

> Body parameter

```json
{
  "name": "Object name"
}
```

<h3 id="partial-update-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[Label](#schemalabel)|true|none|
|» name|body|[name](#schemaname)|false|Custom name for the resource|

> Example responses

> 200 Response

```json
{
  "id": "jMXUw-BE_2vd",
  "name": "Object name"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="partial-update-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Label object|[Label](#schemalabel)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="partial-update-1-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-vulnerabilities">Vulnerabilities</h1>

In Probely findings are connected to vulnerability definitions.
This is how we keep track what type of vulnerability it is, it also
includes a name and description.


## List vulnerability definitions

> Code samples

```bash
curl https://example.com/vulnerability_definitions/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vulnerability_definitions/`

<h3 id="list-vulnerability-definitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number within the paginated result set|
|length|query|integer|false|Number of results to return per page|
|ordering|query|string|false|Which field to use when ordering the results, prefix with `-` to invert ordering.<br>|
|search|query|string|false|Search term|

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "changed": "2018-01-31T16:32:17.238553Z",
      "desc": "Object description",
      "id": "jMXUw-BE_2vd",
      "name": "Object name"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

<h3 id="list-vulnerability-definitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vulnerability defitions list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|

<h3 id="list-vulnerability-definitions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[VulnerabilityDefinition](#schemavulnerabilitydefinition)]|false|none|Vulnerability definition objects.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve vulnerability definition

> Code samples

```bash
curl https://example.com/vulnerability_definitions/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vulnerability_definitions/{id}/`

<h3 id="retrieve-vulnerability-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "desc": "Object description",
  "id": "jMXUw-BE_2vd",
  "name": "Object name"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

<h3 id="retrieve-vulnerability-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vulnerability definition object|[VulnerabilityDefinition](#schemavulnerabilitydefinition)|
|401|Unauthorized|Access token is missing or invalid|Inline|

<h3 id="retrieve-vulnerability-definition-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-api-keys">API Keys</h1>

API keys allow you to perform operations without using your regular user.
There are two endpoints for API keys:
  * one to create keys that can only access the current scope;
  * one that allows the user to perform operations like creating targets.


## List API keys allowed to operate on account

> Code samples

```bash
curl https://example.com/keys/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /keys/`

<h3 id="list-api-keys-allowed-to-operate-on-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number within the paginated result set|
|length|query|integer|false|Number of results to return per page|
|ordering|query|string|false|Which field to use when ordering the results, prefix with `-` to invert ordering.<br>|
|search|query|string|false|Search term|

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "id": "jMXUw-BE_2vd",
      "key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
      "name": "jMXUw-BE_2vd"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-api-keys-allowed-to-operate-on-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Key list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="list-api-keys-allowed-to-operate-on-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[Key](#schemakey)]|false|none|API key objects|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Create account API key

> Code samples

```bash
curl https://example.com/keys/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Object name"
  }'
```

`POST /keys/`

> Body parameter

```json
{
  "name": "Object name"
}
```

<h3 id="create-account-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[APIKey](#schemaapikey)|true|none|
|» name|body|[name](#schemaname)|false|Custom name for the resource|

> Example responses

> 201 Response

```json
{
  "id": "jMXUw-BE_2vd",
  "key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
  "name": "Object name"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="create-account-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|API Key object|[APIKey](#schemaapikey)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="create-account-api-key-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve account API key

> Code samples

```bash
curl https://example.com/keys/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /keys/{id}/`

<h3 id="retrieve-account-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "id": "jMXUw-BE_2vd",
  "key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
  "name": "Object name"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-account-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Key object|[APIKey](#schemaapikey)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="retrieve-account-api-key-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Delete account API key

> Code samples

```bash
curl https://example.com/keys/jMXUw-BE_2vd/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /keys/{id}/`

<h3 id="delete-account-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="delete-account-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="delete-account-api-key-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## List target specific API keys

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/keys/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/keys/`

<h3 id="list-target-specific-api-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|page|query|integer|false|Page number within the paginated result set|
|length|query|integer|false|Number of results to return per page|
|ordering|query|string|false|Which field to use when ordering the results, prefix with `-` to invert ordering.<br>|
|search|query|string|false|Search term|

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "id": "jMXUw-BE_2vd",
      "key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
      "name": "jMXUw-BE_2vd"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-target-specific-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Key list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="list-target-specific-api-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[Key](#schemakey)]|false|none|API key objects|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Create target API key

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/keys/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Object name"
  }'
```

`POST /targets/{target_id}/keys/`

> Body parameter

```json
{
  "name": "Object name"
}
```

<h3 id="create-target-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|[APIKey](#schemaapikey)|true|none|
|» name|body|[name](#schemaname)|false|Custom name for the resource|

> Example responses

> 201 Response

```json
{
  "id": "jMXUw-BE_2vd",
  "key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
  "name": "Object name"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="create-target-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|API Key object|[APIKey](#schemaapikey)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="create-target-api-key-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve target API key

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/keys/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/keys/{id}/`

<h3 id="retrieve-target-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "id": "jMXUw-BE_2vd",
  "key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
  "name": "Object name"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-target-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Key object|[APIKey](#schemaapikey)|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-target-api-key-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Delete target API key

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/keys/jMXUw-BE_2vd/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /targets/{target_id}/keys/{id}/`

<h3 id="delete-target-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="delete-target-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="delete-target-api-key-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-password-reset">Password Reset</h1>

Use these endpoints to reset a user's password.


## Check validity of password reset token

> Code samples

```bash
curl https://example.com/check/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "KJUUCY2VIVEHO5KJGVHQ====-PJZXGNKSGNQVSODFPJGQ====-GYZDKOI=-8065bfbf8a0192774f3f/"
  }'
```

`POST /check/`

> Body parameter

```json
{
  "token": "KJUUCY2VIVEHO5KJGVHQ====-PJZXGNKSGNQVSODFPJGQ====-GYZDKOI=-8065bfbf8a0192774f3f/"
}
```

<h3 id="check-validity-of-password-reset-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|[emailToken](#schemaemailtoken)|true|Reset token received in the user email|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
{
  "error": "string"
}
```

<h3 id="check-validity-of-password-reset-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="check-validity-of-password-reset-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Message|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message|

<aside class="success">
This operation does not require authentication
</aside>

## Send reset password email

> Code samples

```bash
curl https://example.com/reset/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "example@probely.com"
  }'
```

`POST /reset/`

> Body parameter

```json
{
  "email": "example@probely.com"
}
```

<h3 id="send-reset-password-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» email|body|[username](#schemausername-1)|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
{
  "error": "string"
}
```

<h3 id="send-reset-password-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="send-reset-password-email-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Message|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message|

<aside class="success">
This operation does not require authentication
</aside>

## Reset password after asking for a reset (with the token sent by email).

> Code samples

```bash
curl https://example.com/setpassword/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "confpassword": {},
    "password": {},
    "token": "KJUUCY2VIVEHO5KJGVHQ====-PJZXGNKSGNQVSODFPJGQ====-GYZDKOI=-8065bfbf8a0192774f3f/"
  }'
```

`POST /setpassword/`

> Body parameter

```json
{
  "confpassword": {},
  "password": {},
  "token": "KJUUCY2VIVEHO5KJGVHQ====-PJZXGNKSGNQVSODFPJGQ====-GYZDKOI=-8065bfbf8a0192774f3f/"
}
```

<h3 id="reset-password-after-asking-for-a-reset-with-the-token-sent-by-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» confpassword|body|object|true|none|
|» password|body|object|true|none|
|» token|body|[emailToken](#schemaemailtoken)|true|Reset token received in the user email|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
{
  "error": "string"
}
```

<h3 id="reset-password-after-asking-for-a-reset-with-the-token-sent-by-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="reset-password-after-asking-for-a-reset-with-the-token-sent-by-email-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Message|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="probely-developers-users">Users</h1>

Manage self and other users.

## User data

> Code samples

```bash
curl https://example.com/profile/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /profile/`

<h3 id="user-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number within the paginated result set|
|length|query|integer|false|Number of results to return per page|
|ordering|query|string|false|Which field to use when ordering the results, prefix with `-` to invert ordering.<br>|
|search|query|string|false|Search term|

> Example responses

> 200 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "email": "example@probely.com",
  "id": "jMXUw-BE_2vd",
  "is_active": true,
  "is_admin": true,
  "is_billing_admin": true,
  "name": "Henrique Cimento",
  "title": "ceo"
}
```

<h3 id="user-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User object|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Change user password

> Code samples

```bash
curl https://example.com/profile/change_password/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "confpassword": {},
    "current_password": {},
    "password": {}
  }'
```

`POST /profile/change_password/`

Our password policy requires a minimum password length of 10 chars with
at least one symbol or number.


> Body parameter

```json
{
  "confpassword": {},
  "current_password": {},
  "password": {}
}
```

<h3 id="change-user-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» confpassword|body|object|true|none|
|» current_password|body|object|true|none|
|» password|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

<h3 id="change-user-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|

<h3 id="change-user-password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Message|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## List users

> Code samples

```bash
curl https://example.com/users/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/`

<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number within the paginated result set|
|length|query|integer|false|Number of results to return per page|
|ordering|query|string|false|Which field to use when ordering the results, prefix with `-` to invert ordering.<br>|
|search|query|string|false|Search term|

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "is_active": true,
      "is_admin": true,
      "is_billing_admin": true,
      "name": "Henrique Cimento",
      "title": "ceo"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|

<h3 id="list-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[User](#schemauser)]|false|none|User objects|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Create/Reactivate a user.

> Code samples

```bash
curl https://example.com/users/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "example@probely.com",
    "name": "Henrique Cimento",
    "title": "ceo"
  }'
```

`POST /users/`

> Body parameter

```json
{
  "email": "example@probely.com",
  "name": "Henrique Cimento",
  "title": "ceo"
}
```

<h3 id="createreactivate-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» email|body|[userEmail](#schemauseremail)|true|User's email (changing this resets the user's password and revokes existing tokens)|
|» name|body|[userName](#schemausername)|true|User's name|
|» title|body|[userTitle](#schemausertitle)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» title|ceo|
|» title|cto|
|» title|cso|
|» title|seceng|
|» title|dev|
|» title|devop|
|» title|manager|
|» title|other|

> Example responses

> 201 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "email": "example@probely.com",
  "id": "jMXUw-BE_2vd",
  "is_active": true,
  "is_admin": true,
  "is_billing_admin": true,
  "name": "Henrique Cimento",
  "title": "ceo"
}
```

<h3 id="createreactivate-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|User object|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve user

> Code samples

```bash
curl https://example.com/users/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{id}/`

<h3 id="retrieve-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "email": "example@probely.com",
  "id": "jMXUw-BE_2vd",
  "is_active": true,
  "is_admin": true,
  "is_billing_admin": true,
  "name": "Henrique Cimento",
  "title": "ceo"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User object|[User](#schemauser)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-user-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update user

> Code samples

```bash
curl https://example.com/users/jMXUw-BE_2vd/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "example@probely.com",
    "name": "Henrique Cimento",
    "title": "ceo"
  }'
```

`PUT /users/{id}/`

> Body parameter

```json
{
  "email": "example@probely.com",
  "name": "Henrique Cimento",
  "title": "ceo"
}
```

<h3 id="update-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|object|true|none|
|» email|body|[userEmail](#schemauseremail)|true|User's email (changing this resets the user's password and revokes existing tokens)|
|» name|body|[userName](#schemausername)|true|User's name|
|» title|body|[userTitle](#schemausertitle)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» title|ceo|
|» title|cto|
|» title|cso|
|» title|seceng|
|» title|dev|
|» title|devop|
|» title|manager|
|» title|other|

> Example responses

> 200 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "email": "example@probely.com",
  "id": "jMXUw-BE_2vd",
  "is_active": true,
  "is_admin": true,
  "is_billing_admin": true,
  "name": "Henrique Cimento",
  "title": "ceo"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User object|[User](#schemauser)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-user-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Deactivate a user

> Code samples

```bash
curl https://example.com/users/jMXUw-BE_2vd/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/{id}/`

<h3 id="deactivate-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="deactivate-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="deactivate-a-user-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Partial update user

> Code samples

```bash
curl https://example.com/users/jMXUw-BE_2vd/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "example@probely.com",
    "name": "Henrique Cimento",
    "title": "ceo"
  }'
```

`PATCH /users/{id}/`

> Body parameter

```json
{
  "email": "example@probely.com",
  "name": "Henrique Cimento",
  "title": "ceo"
}
```

<h3 id="partial-update-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|object|true|none|
|» email|body|[userEmail](#schemauseremail)|true|User's email (changing this resets the user's password and revokes existing tokens)|
|» name|body|[userName](#schemausername)|true|User's name|
|» title|body|[userTitle](#schemausertitle)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» title|ceo|
|» title|cto|
|» title|cso|
|» title|seceng|
|» title|dev|
|» title|devop|
|» title|manager|
|» title|other|

> Example responses

> 200 Response

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "email": "example@probely.com",
  "id": "jMXUw-BE_2vd",
  "is_active": true,
  "is_admin": true,
  "is_billing_admin": true,
  "name": "Henrique Cimento",
  "title": "ceo"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="partial-update-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User object|[User](#schemauser)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="partial-update-user-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-account">Account</h1>

Account management.

## Retrieve account information

> Code samples

```bash
curl https://example.com/account/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/`

> Example responses

> 200 Response

```json
{
  "auto_collection": "on",
  "balance": 0,
  "balance_currency_code": "EUR",
  "free_target_quantity": 3,
  "has_used_trial": true,
  "heroku": true,
  "next_billing_at": "2018-01-31T16:32:17.238553Z",
  "plan": {
    "allowed_scan_profiles": [
      "normal"
    ],
    "charge_model": "per_unit",
    "currency_code": "EUR",
    "description": "Object description",
    "id": "jMXUw-BE_2vd",
    "is_trial": false,
    "name": "Object name",
    "period": 1,
    "period_unit": "month",
    "price": 5000
  },
  "plan_target_quantity": 3,
  "pool_size": 5,
  "status": "active",
  "trialEnd": "2018-01-31T16:32:52.226652Z"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

<h3 id="retrieve-account-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account data|[Account](#schemaaccount)|
|401|Unauthorized|Access token is missing or invalid|Inline|

<h3 id="retrieve-account-information-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve billing information

> Code samples

```bash
curl https://example.com/billing/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /billing/`

> Example responses

> 200 Response

```json
{
  "address": "string",
  "city": "Munich",
  "country": "DE",
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "other": "string",
  "reg_number": "string",
  "vat_number": "string",
  "zip": "string"
}
```

<h3 id="retrieve-billing-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Billing information|[Billing](#schemabilling)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update billing information

> Code samples

```bash
curl https://example.com/billing/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "city": "Munich",
    "country": "DE",
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "other": "string",
    "reg_number": "string",
    "vat_number": "string",
    "zip": "string"
  }'
```

`PUT /billing/`

> Body parameter

```json
{
  "address": "string",
  "city": "Munich",
  "country": "DE",
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "other": "string",
  "reg_number": "string",
  "vat_number": "string",
  "zip": "string"
}
```

<h3 id="update-billing-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Billing](#schemabilling)|true|none|
|» address|body|[address](#schemaaddress)|true|Address|
|» city|body|[city](#schemacity)|true|City|
|» country|body|[country](#schemacountry)|true|ISO 3166 alpha-2 country code|
|» email|body|[email](#schemaemail)|true|Contact email|
|» first_name|body|[firstName](#schemafirstname)|true|First name|
|» last_name|body|[lastName](#schemalastname)|true|Last name|
|» other|body|string|false|Extra data|
|» reg_number|body|[registrationNumber](#schemaregistrationnumber)|false|Company registration number|
|» vat_number|body|[vat](#schemavat)|true|Company VAT registration number|
|» zip|body|[zipCode](#schemazipcode)|true|Address ZIP code|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "city": "Munich",
  "country": "DE",
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "other": "string",
  "reg_number": "string",
  "vat_number": "string",
  "zip": "string"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-billing-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Billing information|[Billing](#schemabilling)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="update-billing-information-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Partial update billing information

> Code samples

```bash
curl https://example.com/billing/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "city": "Munich",
    "country": "DE",
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "other": "string",
    "reg_number": "string",
    "vat_number": "string",
    "zip": "string"
  }'
```

`PATCH /billing/`

> Body parameter

```json
{
  "address": "string",
  "city": "Munich",
  "country": "DE",
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "other": "string",
  "reg_number": "string",
  "vat_number": "string",
  "zip": "string"
}
```

<h3 id="partial-update-billing-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Billing](#schemabilling)|true|none|
|» address|body|[address](#schemaaddress)|true|Address|
|» city|body|[city](#schemacity)|true|City|
|» country|body|[country](#schemacountry)|true|ISO 3166 alpha-2 country code|
|» email|body|[email](#schemaemail)|true|Contact email|
|» first_name|body|[firstName](#schemafirstname)|true|First name|
|» last_name|body|[lastName](#schemalastname)|true|Last name|
|» other|body|string|false|Extra data|
|» reg_number|body|[registrationNumber](#schemaregistrationnumber)|false|Company registration number|
|» vat_number|body|[vat](#schemavat)|true|Company VAT registration number|
|» zip|body|[zipCode](#schemazipcode)|true|Address ZIP code|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "city": "Munich",
  "country": "DE",
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "other": "string",
  "reg_number": "string",
  "vat_number": "string",
  "zip": "string"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="partial-update-billing-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Billing information|[Billing](#schemabilling)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="partial-update-billing-information-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Action that should be taken to enable the selected targets

> Code samples

```bash
curl https://example.com/billing/actions/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "jMXUw-BE_2vd"
  ]'
```

`POST /billing/actions/`

> Body parameter

```json
[
  "jMXUw-BE_2vd"
]
```

<h3 id="action-that-should-be-taken-to-enable-the-selected-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[targetIds](#schematargetids)|true|none|

> Example responses

> 200 Response

```json
{
  "action": null
}
```

<h3 id="action-that-should-be-taken-to-enable-the-selected-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Required action to enable targets|[Action](#schemaaction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Estimate costs of updating a subscription

> Code samples

```bash
curl https://example.com/billing/estimate/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "coupon_ids": [
      "string"
    ],
    "target_ids": [
      "jMXUw-BE_2vd"
    ]
  }'
```

`POST /billing/estimate/`

> Body parameter

```json
{
  "coupon_ids": [
    "string"
  ],
  "target_ids": [
    "jMXUw-BE_2vd"
  ]
}
```

<h3 id="estimate-costs-of-updating-a-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Subscription](#schemasubscription)|true|none|
|» coupon_ids|body|[coupons](#schemacoupons)|false|Coupon ids|
|» target_ids|body|[targetIds](#schematargetids)|false|none|

> Example responses

> 200 Response

```json
{
  "amount_due": 0,
  "amount_paid": 0,
  "currency_code": "EUR",
  "discounts": [
    {
      "amount": 0,
      "description": "string"
    }
  ],
  "line_items": [
    {
      "amount": 0,
      "description": "string",
      "discount_amount": 0,
      "quantity": 0,
      "tax_amount": 0,
      "unit_amount": 0
    }
  ],
  "plan": "string",
  "plan_id": "jMXUw-BE_2vd",
  "sub_total": 0,
  "taxes": [
    {
      "tax_amount": 0,
      "tax_name": "string",
      "tax_rate": 0
    }
  ],
  "total": 0
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="estimate-costs-of-updating-a-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Charges|[Invoice](#schemainvoice)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="estimate-costs-of-updating-a-subscription-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update a subscription

> Code samples

```bash
curl https://example.com/billing/subscribe/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "coupon_ids": [
      "string"
    ],
    "target_ids": [
      "jMXUw-BE_2vd"
    ]
  }'
```

`POST /billing/subscribe/`

> Body parameter

```json
{
  "coupon_ids": [
    "string"
  ],
  "target_ids": [
    "jMXUw-BE_2vd"
  ]
}
```

<h3 id="update-a-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Subscription](#schemasubscription)|true|none|
|» coupon_ids|body|[coupons](#schemacoupons)|false|Coupon ids|
|» target_ids|body|[targetIds](#schematargetids)|false|none|

> Example responses

> 200 Response

```json
{
  "amount_due": 0,
  "amount_paid": 0,
  "currency_code": "EUR",
  "discounts": [
    {
      "amount": 0,
      "description": "string"
    }
  ],
  "line_items": [
    {
      "amount": 0,
      "description": "string",
      "discount_amount": 0,
      "quantity": 0,
      "tax_amount": 0,
      "unit_amount": 0
    }
  ],
  "plan": "string",
  "plan_id": "jMXUw-BE_2vd",
  "sub_total": 0,
  "taxes": [
    {
      "tax_amount": 0,
      "tax_name": "string",
      "tax_rate": 0
    }
  ],
  "total": 0
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-a-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Charges|[Invoice](#schemainvoice)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="update-a-subscription-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Available actions for the selected targets

> Code samples

```bash
curl https://example.com/target-actions/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "jMXUw-BE_2vd"
  ]'
```

`POST /target-actions/`

> Body parameter

```json
[
  "jMXUw-BE_2vd"
]
```

<h3 id="available-actions-for-the-selected-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[targetIds](#schematargetids)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "action": "edit",
    "label": "string"
  }
]
```

<h3 id="available-actions-for-the-selected-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Available actions for targets|[Actions](#schemaactions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-statistics">Statistics</h1>

Probely has several graphs and tables that it uses to
display statistics of the current state of a target or account.


## Average fix time graph data (all targets)

> Code samples

```bash
curl https://example.com/targets/all/average_fix_time/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/all/average_fix_time/`

> Example responses

> 200 Response

```json
{
  "results": {
    "high": 2,
    "low": 3,
    "medium": 5
  }
}
```

<h3 id="average-fix-time-graph-data-all-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Average fix time plot data|Inline|

<h3 id="average-fix-time-graph-data-all-targets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|false|none|none|
|» high|integer|false|none|Average fix time in seconds for high severity findings|
|» low|integer|false|none|Average fix time in seconds for low severity findings|
|» medium|integer|false|none|Average fix time in seconds for medium severity findings|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Targets with open vulnerabilities pie chart data

> Code samples

```bash
curl https://example.com/targets/all/needs_attention_pie/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/all/needs_attention_pie/`

> Example responses

> 200 Response

```json
{
  "0": {
    "0": "needing attention",
    "1": 0,
    "2": "needs_atention"
  },
  "1": {
    "0": "no issues found",
    "1": 0,
    "2": "no_issues_found"
  }
}
```

<h3 id="targets-with-open-vulnerabilities-pie-chart-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="targets-with-open-vulnerabilities-pie-chart-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|0|object|false|none|These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.<br>|
|» 0|string|false|none|needing attention|
|» 1|integer|false|none|Number of targets|
|» 2|string|false|none|needs_atention|
|1|object|false|none|These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.<br>|
|» 0|string|false|none|no issues found|
|» 1|integer|false|none|Number of targets|
|» 2|string|false|none|no_issues_found|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Targets with open vulnerabilities

> Code samples

```bash
curl https://example.com/targets/all/needs_attention_top/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/all/needs_attention_top/`

> Example responses

> 200 Response

```json
[
  {
    "highs": 3,
    "id": "QJxMvgPebu0e",
    "lows": 4,
    "mediums": 8,
    "name": "Probely",
    "url": "https://probely.com"
  }
]
```

<h3 id="targets-with-open-vulnerabilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="targets-with-open-vulnerabilities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» highs|integer|false|none|Number of high severity findings|
|» id|string|false|none|Target id|
|» lows|integer|false|none|Number of low severity findings|
|» mediums|integer|false|none|Number of medium severity findings|
|» name|string|false|none|Name|
|» url|string|false|none|Target's site URL|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Risk trend graph data (all targets)

> Code samples

```bash
curl https://example.com/targets/all/risk_trend/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/all/risk_trend/`

> Example responses

> 200 Response

```json
[
  {
    "0": "1970-01-01T00:00:00Z",
    "1": 0
  }
]
```

<h3 id="risk-trend-graph-data-all-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Risk trend plot data|Inline|

<h3 id="risk-trend-graph-data-all-targets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» 0|string(date-time)|false|none|Date time|
|» 1|integer|false|none|Risk score|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Severity trend graph data (all targets)

> Code samples

```bash
curl https://example.com/targets/all/severity_trend/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/all/severity_trend/`

> Example responses

> 200 Response

```json
{
  "results": {
    "high": [
      {
        "0": "1970-01-01T00:00:00Z",
        "1": 0
      }
    ],
    "low": [
      {
        "0": "1970-01-01T00:00:00Z",
        "1": 0
      }
    ],
    "medium": [
      {
        "0": "1970-01-01T00:00:00Z",
        "1": 0
      }
    ]
  },
  "step": 86400
}
```

<h3 id="severity-trend-graph-data-all-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Severity trend plot data|Inline|

<h3 id="severity-trend-graph-data-all-targets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|false|none|none|
|» high|[object]|false|none|none|
|» » 0|string(date-time)|false|none|Date time|
|» » 1|integer|false|none|Risk score|
|» low|[object]|false|none|none|
|» » 0|string(date-time)|false|none|Date time|
|» » 1|integer|false|none|Risk score|
|» medium|[object]|false|none|none|
|» » 0|string(date-time)|false|none|Date time|
|» » 1|integer|false|none|Risk score|
|step|number(float)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Top 5 vulnerabilities (all targets).

> Code samples

```bash
curl https://example.com/targets/all/top_vulns/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/all/top_vulns/`

> Example responses

> 200 Response

```json
[
  {
    "0": "string",
    "1": "string"
  }
]
```

<h3 id="top-5-vulnerabilities-all-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Top vulnerabilities plot data|Inline|

<h3 id="top-5-vulnerabilities-all-targets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» 0|string|false|none|Vulnerability name|
|» 1|string|false|none|Vulnerability count|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Average vulnerability trend graph data

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/average_fix_time/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/average_fix_time/`

<h3 id="average-vulnerability-trend-graph-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|

> Example responses

> 200 Response

```json
{
  "results": {
    "high": 2,
    "low": 3,
    "medium": 5
  }
}
```

<h3 id="average-vulnerability-trend-graph-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Average fix time plot data|Inline|

<h3 id="average-vulnerability-trend-graph-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|false|none|none|
|» high|integer|false|none|Average fix time in seconds for high severity findings|
|» low|integer|false|none|Average fix time in seconds for low severity findings|
|» medium|integer|false|none|Average fix time in seconds for medium severity findings|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Risk trend graph data

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/risk_trend/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/risk_trend/`

<h3 id="risk-trend-graph-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|

> Example responses

> 200 Response

```json
[
  {
    "0": "1970-01-01T00:00:00Z",
    "1": 0
  }
]
```

<h3 id="risk-trend-graph-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Risk trend plot data|Inline|

<h3 id="risk-trend-graph-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» 0|string(date-time)|false|none|Date time|
|» 1|integer|false|none|Risk score|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Severity trend graph data.

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/severity_trend/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/severity_trend/`

<h3 id="severity-trend-graph-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|

> Example responses

> 200 Response

```json
{
  "results": {
    "high": [
      {
        "0": "1970-01-01T00:00:00Z",
        "1": 0
      }
    ],
    "low": [
      {
        "0": "1970-01-01T00:00:00Z",
        "1": 0
      }
    ],
    "medium": [
      {
        "0": "1970-01-01T00:00:00Z",
        "1": 0
      }
    ]
  },
  "step": 86400
}
```

<h3 id="severity-trend-graph-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Severity trend plot data|Inline|

<h3 id="severity-trend-graph-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|false|none|none|
|» high|[object]|false|none|none|
|» » 0|string(date-time)|false|none|Date time|
|» » 1|integer|false|none|Risk score|
|» low|[object]|false|none|none|
|» » 0|string(date-time)|false|none|Date time|
|» » 1|integer|false|none|Risk score|
|» medium|[object]|false|none|none|
|» » 0|string(date-time)|false|none|Date time|
|» » 1|integer|false|none|Risk score|
|step|number(float)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Top 5 vulnerabilities

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/top_vulns/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/top_vulns/`

<h3 id="top-5-vulnerabilities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|

> Example responses

> 200 Response

```json
[
  {
    "0": "string",
    "1": "string"
  }
]
```

<h3 id="top-5-vulnerabilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Top vulnerabilities plot data|Inline|

<h3 id="top-5-vulnerabilities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» 0|string|false|none|Vulnerability name|
|» 1|string|false|none|Vulnerability count|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-archive">Archive</h1>

If you only require a small number of active targets at a time but don't
want to lose their history by deleting one to add another it is now
possible to archive targets.
This feature is still experimental, please contact our support if you
are interested.


## Activate targets

> Code samples

```bash
curl https://example.com/targets/activate/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "jMXUw-BE_2vd"
  ]'
```

`POST /targets/activate/`

> Body parameter

```json
[
  "jMXUw-BE_2vd"
]
```

<h3 id="activate-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[targetIds](#schematargetids)|true|none|

> Example responses

> 200 Response

```json
[
  "jMXUw-BE_2vd"
]
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="activate-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Target id list|[targetIds](#schematargetids)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="activate-targets-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Archive targets

> Code samples

```bash
curl https://example.com/targets/archive/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "jMXUw-BE_2vd"
  ]'
```

`POST /targets/archive/`

> Body parameter

```json
[
  "jMXUw-BE_2vd"
]
```

<h3 id="archive-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[targetIds](#schematargetids)|true|none|

> Example responses

> 200 Response

```json
[
  "jMXUw-BE_2vd"
]
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="archive-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Target id list|[targetIds](#schematargetids)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="archive-targets-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## List archived targets

> Code samples

```bash
curl https://example.com/targets/archived/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "jMXUw-BE_2vd"
  ]'
```

`POST /targets/archived/`

> Body parameter

```json
[
  "jMXUw-BE_2vd"
]
```

<h3 id="list-archived-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[targetIds](#schematargetids)|true|none|

> Example responses

> 200 Response

```json
{
  "length": 10,
  "page": 1,
  "page_total": 1,
  "pagination_count": 6,
  "results": [
    {
      "allowed_scan_profiles": [
        {
          "id": "normal",
          "name": "string"
        }
      ],
      "assets": [
        {
          "changed": "2018-01-31T16:32:17.238553Z",
          "changed_by": {
            "email": "example@probely.com",
            "id": "jMXUw-BE_2vd",
            "name": "Henrique Cimento"
          },
          "cookies": [
            {
              "name": "cookie_1",
              "value": "cookie_value"
            }
          ],
          "desc": "Object description",
          "headers": [
            {
              "name": "X-Custom-Header",
              "value": "XXXXX"
            }
          ],
          "host": "string",
          "id": "jMXUw-BE_2vd",
          "include": true,
          "name": "Object name",
          "stack": [
            "nginx"
          ],
          "verification_date": "2018-01-31T16:32:52.226652Z",
          "verification_last_error": "string",
          "verification_method": "dns",
          "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
          "verified": false
        }
      ],
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "connected_target": "string",
      "enabled": true,
      "environment": "testing",
      "id": "jMXUw-BE_2vd",
      "labels": [
        "string"
      ],
      "name": "Object name",
      "report_type": "default",
      "scan_profile": "normal",
      "site": {
        "basic_auth": {
          "password": "dolphins",
          "username": "probely"
        },
        "changed": "2018-01-31T16:32:17.238553Z",
        "changed_by": {
          "email": "example@probely.com",
          "id": "jMXUw-BE_2vd",
          "name": "Henrique Cimento"
        },
        "cookies": [
          {
            "name": "cookie_1",
            "value": "cookie_value"
          }
        ],
        "desc": "Object description",
        "form_login": [
          {
            "name": "username",
            "value": "probely"
          }
        ],
        "form_login_check_pattern": "",
        "form_login_url": "https://app.probely.com/",
        "has_basic_auth": true,
        "has_form_login": true,
        "headers": [
          {
            "name": "X-Custom-Header",
            "value": "XXXXX"
          }
        ],
        "host": "app.probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Object name",
        "stack": [
          "nginx"
        ],
        "url": "https://app.probely.com",
        "verification_date": "2018-01-31T16:32:52.226652Z",
        "verification_last_error": "string",
        "verification_method": "dns",
        "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
        "verified": false,
        "whitelist": [
          "/private/path/"
        ]
      },
      "type": "single"
    }
  ]
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-archived-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of targets|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="list-archived-targets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|pagination_count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|results|[[Target](#schematarget)]|false|none|Target objects|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-events">Events</h1>

Important events in your Probely account are recorded as events.
An event is comprised of the resource acted on, when it occurred and
what kind of event (ex: `target_created`).

Besides fetching these events using their endpoints you are also able
to receive them in real-time by registering webhooks.
The event is sent to every registered webhook URL as JSON and an HTTP
success status code (2XX) is expected in the response.
In case a webhook fails it will be retried with an exponential back-off
(maxing out at 4 hours) during 2 days, at the end of which an email is
sent to the users informing of this failure.
For security we suggest using an unique hard to guess identifier for the
webhook:
```
https://webhook.example.com/d69179e3b06549469817560c650be98f/
```
Webhook URL's are required to be HTTPS.

When registering a webhook according to the chosen endpoint you can
receive any event for the account or only events for a single target.
A target webhook will not receive `user_created`, `user_deleted` and
`target_created` events and all events received pertain to the target
the webhook was created for.


## List account events

> Code samples

```bash
curl https://example.com/events/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /events/`

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "content": {
        "changed": "2018-01-31T16:32:17.238553Z",
        "changed_by": {
          "email": "example@probely.com",
          "id": "jMXUw-BE_2vd",
          "name": "Henrique Cimento"
        },
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "is_active": true,
        "is_admin": true,
        "is_billing_admin": true,
        "name": "Henrique Cimento",
        "title": "ceo"
      },
      "event_type": "scan_started",
      "id": "jMXUw-BE_2vd",
      "object_type": "user",
      "ocurred_at": "2018-01-31T16:32:17.238553Z",
      "webhooks": [
        {
          "api_version": "v1",
          "changed": "2018-01-31T16:32:17.238553Z",
          "changed_by": {
            "email": "example@probely.com",
            "id": "jMXUw-BE_2vd",
            "name": "Henrique Cimento"
          },
          "check_cert": true,
          "created": "2018-01-31T16:32:17.238553Z",
          "created_by": {
            "email": "example@probely.com",
            "id": "jMXUw-BE_2vd",
            "name": "Henrique Cimento"
          },
          "id": "jMXUw-BE_2vd",
          "name": "Object name",
          "url": "string"
        }
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-account-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Event list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="list-account-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[Event](#schemaevent)]|false|none|Event objects|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve account event

> Code samples

```bash
curl https://example.com/events/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /events/{id}/`

<h3 id="retrieve-account-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "content": {
    "changed": "2018-01-31T16:32:17.238553Z",
    "changed_by": {
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "name": "Henrique Cimento"
    },
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "is_active": true,
    "is_admin": true,
    "is_billing_admin": true,
    "name": "Henrique Cimento",
    "title": "ceo"
  },
  "event_type": "scan_started",
  "id": "jMXUw-BE_2vd",
  "object_type": "user",
  "ocurred_at": "2018-01-31T16:32:17.238553Z",
  "webhooks": [
    {
      "api_version": "v1",
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "check_cert": true,
      "created": "2018-01-31T16:32:17.238553Z",
      "created_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "id": "jMXUw-BE_2vd",
      "name": "Object name",
      "url": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-account-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A Probely event|[Event](#schemaevent)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-account-event-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## List target events

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/events/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/events/`

<h3 id="list-target-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "content": {
        "changed": "2018-01-31T16:32:17.238553Z",
        "changed_by": {
          "email": "example@probely.com",
          "id": "jMXUw-BE_2vd",
          "name": "Henrique Cimento"
        },
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "is_active": true,
        "is_admin": true,
        "is_billing_admin": true,
        "name": "Henrique Cimento",
        "title": "ceo"
      },
      "event_type": "scan_started",
      "id": "jMXUw-BE_2vd",
      "object_type": "user",
      "ocurred_at": "2018-01-31T16:32:17.238553Z",
      "webhooks": [
        {
          "api_version": "v1",
          "changed": "2018-01-31T16:32:17.238553Z",
          "changed_by": {
            "email": "example@probely.com",
            "id": "jMXUw-BE_2vd",
            "name": "Henrique Cimento"
          },
          "check_cert": true,
          "created": "2018-01-31T16:32:17.238553Z",
          "created_by": {
            "email": "example@probely.com",
            "id": "jMXUw-BE_2vd",
            "name": "Henrique Cimento"
          },
          "id": "jMXUw-BE_2vd",
          "name": "Object name",
          "url": "string"
        }
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-target-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Event list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="list-target-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[Event](#schemaevent)]|false|none|Event objects|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve target event

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/events/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/events/{id}/`

<h3 id="retrieve-target-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "content": {
    "changed": "2018-01-31T16:32:17.238553Z",
    "changed_by": {
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "name": "Henrique Cimento"
    },
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "is_active": true,
    "is_admin": true,
    "is_billing_admin": true,
    "name": "Henrique Cimento",
    "title": "ceo"
  },
  "event_type": "scan_started",
  "id": "jMXUw-BE_2vd",
  "object_type": "user",
  "ocurred_at": "2018-01-31T16:32:17.238553Z",
  "webhooks": [
    {
      "api_version": "v1",
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "check_cert": true,
      "created": "2018-01-31T16:32:17.238553Z",
      "created_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "id": "jMXUw-BE_2vd",
      "name": "Object name",
      "url": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-target-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A Probely event|[Event](#schemaevent)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-target-event-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## List target webhooks

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/webhooks/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/webhooks/`

<h3 id="list-target-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "api_version": "v1",
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "check_cert": true,
      "created": "2018-01-31T16:32:17.238553Z",
      "created_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "id": "jMXUw-BE_2vd",
      "name": "Object name",
      "url": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-target-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="list-target-webhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[Webhook](#schemawebhook)]|false|none|Webhook objects|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Create new target webhook

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/webhooks/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "api_version": "v1",
    "check_cert": true,
    "name": "Object name",
    "url": "string"
  }'
```

`POST /targets/{target_id}/webhooks/`

> Body parameter

```json
{
  "api_version": "v1",
  "check_cert": true,
  "name": "Object name",
  "url": "string"
}
```

<h3 id="create-new-target-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|[Webhook](#schemawebhook)|true|none|
|» api_version|body|[webhookApiVersion](#schemawebhookapiversion)|false|API version for the webhook|
|» check_cert|body|[webhookCheckCert](#schemawebhookcheckcert)|false|Verify webhook URL HTTPS certificate|
|» name|body|[name](#schemaname)|false|Custom name for the resource|
|» url|body|[webhookURL](#schemawebhookurl)|true|URL to post events to (must be https)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» api_version|v1|

> Example responses

> 201 Response

```json
{
  "api_version": "v1",
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "check_cert": true,
  "created": "2018-01-31T16:32:17.238553Z",
  "created_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "id": "jMXUw-BE_2vd",
  "name": "Object name",
  "url": "string"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="create-new-target-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Webhooks|[Webhook](#schemawebhook)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="create-new-target-webhook-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve target webhook

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/webhooks/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/webhooks/{id}/`

<h3 id="retrieve-target-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "api_version": "v1",
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "check_cert": true,
  "created": "2018-01-31T16:32:17.238553Z",
  "created_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "id": "jMXUw-BE_2vd",
  "name": "Object name",
  "url": "string"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-target-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhooks|[Webhook](#schemawebhook)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="retrieve-target-webhook-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update target webhook

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/webhooks/jMXUw-BE_2vd/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "api_version": "v1",
    "check_cert": true,
    "name": "Object name",
    "url": "string"
  }'
```

`PUT /targets/{target_id}/webhooks/{id}/`

> Body parameter

```json
{
  "api_version": "v1",
  "check_cert": true,
  "name": "Object name",
  "url": "string"
}
```

<h3 id="update-target-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[Webhook](#schemawebhook)|true|none|
|» api_version|body|[webhookApiVersion](#schemawebhookapiversion)|false|API version for the webhook|
|» check_cert|body|[webhookCheckCert](#schemawebhookcheckcert)|false|Verify webhook URL HTTPS certificate|
|» name|body|[name](#schemaname)|false|Custom name for the resource|
|» url|body|[webhookURL](#schemawebhookurl)|true|URL to post events to (must be https)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» api_version|v1|

> Example responses

> 200 Response

```json
{
  "api_version": "v1",
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "check_cert": true,
  "created": "2018-01-31T16:32:17.238553Z",
  "created_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "id": "jMXUw-BE_2vd",
  "name": "Object name",
  "url": "string"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-target-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhooks|[Webhook](#schemawebhook)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-target-webhook-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Delete target webhook

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/webhooks/jMXUw-BE_2vd/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /targets/{target_id}/webhooks/{id}/`

<h3 id="delete-target-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="delete-target-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="delete-target-webhook-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Partial update target webhook

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/webhooks/jMXUw-BE_2vd/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "api_version": "v1",
    "check_cert": true,
    "name": "Object name",
    "url": "string"
  }'
```

`PATCH /targets/{target_id}/webhooks/{id}/`

> Body parameter

```json
{
  "api_version": "v1",
  "check_cert": true,
  "name": "Object name",
  "url": "string"
}
```

<h3 id="partial-update-target-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[Webhook](#schemawebhook)|true|none|
|» api_version|body|[webhookApiVersion](#schemawebhookapiversion)|false|API version for the webhook|
|» check_cert|body|[webhookCheckCert](#schemawebhookcheckcert)|false|Verify webhook URL HTTPS certificate|
|» name|body|[name](#schemaname)|false|Custom name for the resource|
|» url|body|[webhookURL](#schemawebhookurl)|true|URL to post events to (must be https)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» api_version|v1|

> Example responses

> 200 Response

```json
{
  "api_version": "v1",
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "check_cert": true,
  "created": "2018-01-31T16:32:17.238553Z",
  "created_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "id": "jMXUw-BE_2vd",
  "name": "Object name",
  "url": "string"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="partial-update-target-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhooks|[Webhook](#schemawebhook)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="partial-update-target-webhook-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## List account webhooks

> Code samples

```bash
curl https://example.com/webhooks/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/`

> Example responses

> 200 Response

```json
{
  "count": 6,
  "length": 10,
  "page": 1,
  "page_total": 1,
  "results": [
    {
      "api_version": "v1",
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "check_cert": true,
      "created": "2018-01-31T16:32:17.238553Z",
      "created_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "id": "jMXUw-BE_2vd",
      "name": "Object name",
      "url": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-account-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook list|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="list-account-webhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[paginationCount](#schemapaginationcount)|false|none|Number of objects in the response.|
|length|[paginationLength](#schemapaginationlength)|false|none|Number of objects per page.|
|page|[paginationPage](#schemapaginationpage)|false|none|Current page.|
|page_total|[paginationPageTotal](#schemapaginationpagetotal)|false|none|Number of pages.|
|results|[[Webhook](#schemawebhook)]|false|none|Webhook objects|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Create new account webhook

> Code samples

```bash
curl https://example.com/webhooks/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "api_version": "v1",
    "check_cert": true,
    "name": "Object name",
    "url": "string"
  }'
```

`POST /webhooks/`

> Body parameter

```json
{
  "api_version": "v1",
  "check_cert": true,
  "name": "Object name",
  "url": "string"
}
```

<h3 id="create-new-account-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Webhook](#schemawebhook)|true|none|
|» api_version|body|[webhookApiVersion](#schemawebhookapiversion)|false|API version for the webhook|
|» check_cert|body|[webhookCheckCert](#schemawebhookcheckcert)|false|Verify webhook URL HTTPS certificate|
|» name|body|[name](#schemaname)|false|Custom name for the resource|
|» url|body|[webhookURL](#schemawebhookurl)|true|URL to post events to (must be https)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» api_version|v1|

> Example responses

> 201 Response

```json
{
  "api_version": "v1",
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "check_cert": true,
  "created": "2018-01-31T16:32:17.238553Z",
  "created_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "id": "jMXUw-BE_2vd",
  "name": "Object name",
  "url": "string"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="create-new-account-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Webhooks|[Webhook](#schemawebhook)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="create-new-account-webhook-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve account webhook

> Code samples

```bash
curl https://example.com/webhooks/jMXUw-BE_2vd/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{id}/`

<h3 id="retrieve-account-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "api_version": "v1",
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "check_cert": true,
  "created": "2018-01-31T16:32:17.238553Z",
  "created_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "id": "jMXUw-BE_2vd",
  "name": "Object name",
  "url": "string"
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-account-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhooks|[Webhook](#schemawebhook)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="retrieve-account-webhook-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update account webhook

> Code samples

```bash
curl https://example.com/webhooks/jMXUw-BE_2vd/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "api_version": "v1",
    "check_cert": true,
    "name": "Object name",
    "url": "string"
  }'
```

`PUT /webhooks/{id}/`

> Body parameter

```json
{
  "api_version": "v1",
  "check_cert": true,
  "name": "Object name",
  "url": "string"
}
```

<h3 id="update-account-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[Webhook](#schemawebhook)|true|none|
|» api_version|body|[webhookApiVersion](#schemawebhookapiversion)|false|API version for the webhook|
|» check_cert|body|[webhookCheckCert](#schemawebhookcheckcert)|false|Verify webhook URL HTTPS certificate|
|» name|body|[name](#schemaname)|false|Custom name for the resource|
|» url|body|[webhookURL](#schemawebhookurl)|true|URL to post events to (must be https)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» api_version|v1|

> Example responses

> 200 Response

```json
{
  "api_version": "v1",
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "check_cert": true,
  "created": "2018-01-31T16:32:17.238553Z",
  "created_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "id": "jMXUw-BE_2vd",
  "name": "Object name",
  "url": "string"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-account-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhooks|[Webhook](#schemawebhook)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-account-webhook-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Delete account webhook

> Code samples

```bash
curl https://example.com/webhooks/jMXUw-BE_2vd/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webhooks/{id}/`

<h3 id="delete-account-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="delete-account-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="delete-account-webhook-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Partial update account webhook

> Code samples

```bash
curl https://example.com/webhooks/jMXUw-BE_2vd/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "api_version": "v1",
    "check_cert": true,
    "name": "Object name",
    "url": "string"
  }'
```

`PATCH /webhooks/{id}/`

> Body parameter

```json
{
  "api_version": "v1",
  "check_cert": true,
  "name": "Object name",
  "url": "string"
}
```

<h3 id="partial-update-account-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[Webhook](#schemawebhook)|true|none|
|» api_version|body|[webhookApiVersion](#schemawebhookapiversion)|false|API version for the webhook|
|» check_cert|body|[webhookCheckCert](#schemawebhookcheckcert)|false|Verify webhook URL HTTPS certificate|
|» name|body|[name](#schemaname)|false|Custom name for the resource|
|» url|body|[webhookURL](#schemawebhookurl)|true|URL to post events to (must be https)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» api_version|v1|

> Example responses

> 200 Response

```json
{
  "api_version": "v1",
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "check_cert": true,
  "created": "2018-01-31T16:32:17.238553Z",
  "created_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "id": "jMXUw-BE_2vd",
  "name": "Object name",
  "url": "string"
}
```

> 400 Response

```json
{
  "<field name>": [
    "string"
  ],
  "non_field_errors": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="partial-update-account-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhooks|[Webhook](#schemawebhook)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="partial-update-account-webhook-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|<field name>|[string]|false|none|none|
|non_field_errors|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-integrations">Integrations</h1>

List available and installed integrations

## Integrations available and installed in the account

> Code samples

```bash
curl https://example.com/integrations/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/`

> Example responses

> 200 Response

```json
{
  "available": {
    "heroku": true,
    "jira_cloud": true,
    "jira_server": true,
    "slack": true
  },
  "installed": {
    "heroku": true,
    "jira_cloud": true,
    "jira_server": true,
    "slack": true
  }
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="integrations-available-and-installed-in-the-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Available and installed integrations in the account|[Integrations](#schemaintegrations)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="integrations-available-and-installed-in-the-account-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Integrations available and installed for the target

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/integrations/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/integrations/`

<h3 id="integrations-available-and-installed-for-the-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|

> Example responses

> 200 Response

```json
{
  "available": {
    "heroku": true,
    "jira_cloud": true,
    "jira_server": true,
    "slack": true
  },
  "installed": {
    "heroku": true,
    "jira_cloud": true,
    "jira_server": true,
    "slack": true
  }
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="integrations-available-and-installed-for-the-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Available and installed integrations for the target|[Integrations](#schemaintegrations)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="integrations-available-and-installed-for-the-target-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-slack-integration">Slack Integration</h1>

Receive slack notifications on Probely events.


## Retrieve slack integration data

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/integrations/slack/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/integrations/slack/`

<h3 id="retrieve-slack-integration-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|

> Example responses

> 200 Response

```json
{
  "notify_finding_fixed": false,
  "notify_high_findings": false,
  "notify_low_findings": false,
  "notify_medium_findings": false,
  "notify_scan_completed": false,
  "notify_scan_started": false,
  "webhook_url": ""
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-slack-integration-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Slack integration|[Slack](#schemaslack)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="retrieve-slack-integration-data-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update slack integration data

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/integrations/slack/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "notify_finding_fixed": false,
    "notify_high_findings": false,
    "notify_low_findings": false,
    "notify_medium_findings": false,
    "notify_scan_completed": false,
    "notify_scan_started": false,
    "webhook_url": ""
  }'
```

`PUT /targets/{target_id}/integrations/slack/`

> Body parameter

```json
{
  "notify_finding_fixed": false,
  "notify_high_findings": false,
  "notify_low_findings": false,
  "notify_medium_findings": false,
  "notify_scan_completed": false,
  "notify_scan_started": false,
  "webhook_url": ""
}
```

<h3 id="update-slack-integration-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|[Slack](#schemaslack)|true|none|
|» notify_finding_fixed|body|boolean|false|Notify of fixed findings.|
|» notify_high_findings|body|boolean|false|Notify of new high severity findings.|
|» notify_low_findings|body|boolean|false|Notify of new low severity findings.|
|» notify_medium_findings|body|boolean|false|Notify of new medium severity findings.|
|» notify_scan_completed|body|boolean|false|Notify of completed scans.|
|» notify_scan_started|body|boolean|false|Notify of started scans.|
|» webhook_url|body|string|false|Slack notification webhook url.|

> Example responses

> 200 Response

```json
{
  "notify_finding_fixed": false,
  "notify_high_findings": false,
  "notify_low_findings": false,
  "notify_medium_findings": false,
  "notify_scan_completed": false,
  "notify_scan_started": false,
  "webhook_url": ""
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-slack-integration-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Slack integration|[Slack](#schemaslack)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-slack-integration-data-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update slack integration data

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/integrations/slack/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "notify_finding_fixed": false,
    "notify_high_findings": false,
    "notify_low_findings": false,
    "notify_medium_findings": false,
    "notify_scan_completed": false,
    "notify_scan_started": false,
    "webhook_url": ""
  }'
```

`PATCH /targets/{target_id}/integrations/slack/`

> Body parameter

```json
{
  "notify_finding_fixed": false,
  "notify_high_findings": false,
  "notify_low_findings": false,
  "notify_medium_findings": false,
  "notify_scan_completed": false,
  "notify_scan_started": false,
  "webhook_url": ""
}
```

<h3 id="update-slack-integration-data-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|[Slack](#schemaslack)|true|none|
|» notify_finding_fixed|body|boolean|false|Notify of fixed findings.|
|» notify_high_findings|body|boolean|false|Notify of new high severity findings.|
|» notify_low_findings|body|boolean|false|Notify of new low severity findings.|
|» notify_medium_findings|body|boolean|false|Notify of new medium severity findings.|
|» notify_scan_completed|body|boolean|false|Notify of completed scans.|
|» notify_scan_started|body|boolean|false|Notify of started scans.|
|» webhook_url|body|string|false|Slack notification webhook url.|

> Example responses

> 200 Response

```json
{
  "notify_finding_fixed": false,
  "notify_high_findings": false,
  "notify_low_findings": false,
  "notify_medium_findings": false,
  "notify_scan_completed": false,
  "notify_scan_started": false,
  "webhook_url": ""
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-slack-integration-data-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Slack integration|[Slack](#schemaslack)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-slack-integration-data-1-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-jira-cloud-integration">Jira Cloud Integration</h1>

To start integrating Probely with Jira you will first need to add the
Probely app to your Jira instance.
Go to the marketplace, search for Probely and install the application.
When prompted click the "Get Started" button and follow the steps described
to connect both accounts.
A short explanation of the sync options can be found
[here](https://help.probely.com/integrations/jira-syncronization-settings).


## List Jira Projects

> Code samples

```bash
curl https://example.com/integrations/jira-cloud/projects/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/jira-cloud/projects/`

> Example responses

> 200 Response

```json
[
  {
    "id": "10001",
    "name": "Project"
  }
]
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-jira-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira projects|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="list-jira-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[JiraProject](#schemajiraproject)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve project issue types

> Code samples

```bash
curl https://example.com/integrations/jira-cloud/projects/10001/issue_types/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/jira-cloud/projects/{project_id}/issue_types/`

<h3 id="retrieve-project-issue-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Jira Project Id|

> Example responses

> 200 Response

```json
[
  {
    "id": "10003",
    "name": "Story"
  }
]
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-project-issue-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira issue types available in project|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-project-issue-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[JiraIssueType](#schemajiraissuetype)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve issue priorities

> Code samples

```bash
curl https://example.com/integrations/jira-cloud/projects/10001/issue_types/10003/priorities/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/jira-cloud/projects/{project_id}/issue_types/{issue_type_id}/priorities/`

<h3 id="retrieve-issue-priorities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Jira Project Id|
|issue_type_id|path|string|true|Jira issue type id|

> Example responses

> 200 Response

```json
[
  {
    "id": "3",
    "name": "Medium"
  }
]
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-issue-priorities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira issue priorities|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="retrieve-issue-priorities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[JiraIssuePriority](#schemajiraissuepriority)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve issue statuses

> Code samples

```bash
curl https://example.com/integrations/jira-cloud/projects/10001/issue_types/10003/status/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/jira-cloud/projects/{project_id}/issue_types/{issue_type_id}/status/`

<h3 id="retrieve-issue-statuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Jira Project Id|
|issue_type_id|path|string|true|Jira issue type id|

> Example responses

> 200 Response

```json
[
  {
    "id": "10003",
    "name": "Backlog"
  }
]
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-issue-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira issue statuses|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-issue-statuses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[JiraIssueStatus](#schemajiraissuestatus)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve Jira Cloud finding configuration

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/jMXUw-BE_2vd/integrations/jira-cloud/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/findings/{id}/integrations/jira-cloud/`

<h3 id="retrieve-jira-cloud-finding-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "issue_id": "string",
  "selective_sync": true
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-jira-cloud-finding-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira Cloud Finding configuration|[JiraFinding](#schemajirafinding)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="retrieve-jira-cloud-finding-configuration-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update Jira Cloud finding configuration

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/jMXUw-BE_2vd/integrations/jira-cloud/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "issue_id": "string",
    "selective_sync": true
  }'
```

`PUT /targets/{target_id}/findings/{id}/integrations/jira-cloud/`

> Body parameter

```json
{
  "issue_id": "string",
  "selective_sync": true
}
```

<h3 id="update-jira-cloud-finding-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[JiraFinding](#schemajirafinding)|true|none|
|» issue_id|body|[jira_issue_id](#schemajira_issue_id)|false|Jira issue id connected to this finding|
|» selective_sync|body|[jira_selective_sync](#schemajira_selective_sync)|false|Selective sync active for this finding.|

> Example responses

> 200 Response

```json
{
  "issue_id": "string",
  "selective_sync": true
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-jira-cloud-finding-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira Cloud Finding configuration|[JiraFinding](#schemajirafinding)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-jira-cloud-finding-configuration-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update Jira Cloud finding configuration

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/jMXUw-BE_2vd/integrations/jira-cloud/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "issue_id": "string",
    "selective_sync": true
  }'
```

`PATCH /targets/{target_id}/findings/{id}/integrations/jira-cloud/`

> Body parameter

```json
{
  "issue_id": "string",
  "selective_sync": true
}
```

<h3 id="update-jira-cloud-finding-configuration-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[JiraFinding](#schemajirafinding)|true|none|
|» issue_id|body|[jira_issue_id](#schemajira_issue_id)|false|Jira issue id connected to this finding|
|» selective_sync|body|[jira_selective_sync](#schemajira_selective_sync)|false|Selective sync active for this finding.|

> Example responses

> 200 Response

```json
{
  "issue_id": "string",
  "selective_sync": true
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-jira-cloud-finding-configuration-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira Cloud Finding configuration|[JiraFinding](#schemajirafinding)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-jira-cloud-finding-configuration-1-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve Jira Cloud Target configuration

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/integrations/jira-cloud/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/integrations/jira-cloud/`

<h3 id="retrieve-jira-cloud-target-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|

> Example responses

> 200 Response

```json
{
  "allow_jira": true,
  "auto_sync": true,
  "issue_type_id": "string",
  "priority_mapping": {
    "10": "string",
    "20": "string",
    "30": "string"
  },
  "project_id": "string",
  "status_mapping": {
    "accepted": "string",
    "fixed": "string",
    "invalid": "string",
    "notfixed": "string"
  }
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-jira-cloud-target-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira Cloud Target configuration|[JiraScope](#schemajirascope)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="retrieve-jira-cloud-target-configuration-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update Jira Cloud target configuration

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/integrations/jira-cloud/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allow_jira": true,
    "auto_sync": true,
    "issue_type_id": "string",
    "priority_mapping": {
      "10": "string",
      "20": "string",
      "30": "string"
    },
    "project_id": "string",
    "status_mapping": {
      "accepted": "string",
      "fixed": "string",
      "invalid": "string",
      "notfixed": "string"
    }
  }'
```

`PUT /targets/{target_id}/integrations/jira-cloud/`

> Body parameter

```json
{
  "allow_jira": true,
  "auto_sync": true,
  "issue_type_id": "string",
  "priority_mapping": {
    "10": "string",
    "20": "string",
    "30": "string"
  },
  "project_id": "string",
  "status_mapping": {
    "accepted": "string",
    "fixed": "string",
    "invalid": "string",
    "notfixed": "string"
  }
}
```

<h3 id="update-jira-cloud-target-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|[JiraScope](#schemajirascope)|true|none|
|» allow_jira|body|[jira_allow_jira](#schemajira_allow_jira)|false|Is this target allowed Jira integration.|
|» auto_sync|body|[jira_auto_sync](#schemajira_auto_sync)|false|Automatically synchronise all findings to Jira issues.|
|» issue_type_id|body|[jira_issue_type_id](#schemajira_issue_type_id)|false|Id of the issue type to be created in Jira.|
|» priority_mapping|body|[jira_priority_mapping](#schemajira_priority_mapping)|false|none|
|» project_id|body|[jira_project_id](#schemajira_project_id)|false|Id of the Jira project where issues for this target will be created.|
|» status_mapping|body|[jira_status_mapping](#schemajira_status_mapping)|false|none|

> Example responses

> 200 Response

```json
{
  "allow_jira": true,
  "auto_sync": true,
  "issue_type_id": "string",
  "priority_mapping": {
    "10": "string",
    "20": "string",
    "30": "string"
  },
  "project_id": "string",
  "status_mapping": {
    "accepted": "string",
    "fixed": "string",
    "invalid": "string",
    "notfixed": "string"
  }
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-jira-cloud-target-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira Cloud Target configuration|[JiraScope](#schemajirascope)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-jira-cloud-target-configuration-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update Jira Cloud target configuration

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/integrations/jira-cloud/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allow_jira": true,
    "auto_sync": true,
    "issue_type_id": "string",
    "priority_mapping": {
      "10": "string",
      "20": "string",
      "30": "string"
    },
    "project_id": "string",
    "status_mapping": {
      "accepted": "string",
      "fixed": "string",
      "invalid": "string",
      "notfixed": "string"
    }
  }'
```

`PATCH /targets/{target_id}/integrations/jira-cloud/`

> Body parameter

```json
{
  "allow_jira": true,
  "auto_sync": true,
  "issue_type_id": "string",
  "priority_mapping": {
    "10": "string",
    "20": "string",
    "30": "string"
  },
  "project_id": "string",
  "status_mapping": {
    "accepted": "string",
    "fixed": "string",
    "invalid": "string",
    "notfixed": "string"
  }
}
```

<h3 id="update-jira-cloud-target-configuration-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|[JiraScope](#schemajirascope)|true|none|
|» allow_jira|body|[jira_allow_jira](#schemajira_allow_jira)|false|Is this target allowed Jira integration.|
|» auto_sync|body|[jira_auto_sync](#schemajira_auto_sync)|false|Automatically synchronise all findings to Jira issues.|
|» issue_type_id|body|[jira_issue_type_id](#schemajira_issue_type_id)|false|Id of the issue type to be created in Jira.|
|» priority_mapping|body|[jira_priority_mapping](#schemajira_priority_mapping)|false|none|
|» project_id|body|[jira_project_id](#schemajira_project_id)|false|Id of the Jira project where issues for this target will be created.|
|» status_mapping|body|[jira_status_mapping](#schemajira_status_mapping)|false|none|

> Example responses

> 200 Response

```json
{
  "allow_jira": true,
  "auto_sync": true,
  "issue_type_id": "string",
  "priority_mapping": {
    "10": "string",
    "20": "string",
    "30": "string"
  },
  "project_id": "string",
  "status_mapping": {
    "accepted": "string",
    "fixed": "string",
    "invalid": "string",
    "notfixed": "string"
  }
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-jira-cloud-target-configuration-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira Cloud Target configuration|[JiraScope](#schemajirascope)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-jira-cloud-target-configuration-1-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-jira-server-integration">Jira Server Integration</h1>

Find instructions on how to configure this integration for your Jira
deployment [here](https://help.probely.com/integrations/how-to-integrate-probely-with-jira-server).
A short explanation of the sync options can be found
[here](https://help.probely.com/integrations/jira-syncronization-settings).


## List Jira Projects

> Code samples

```bash
curl https://example.com/integrations/jira-server/projects/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/jira-server/projects/`

> Example responses

> 200 Response

```json
[
  {
    "id": "10001",
    "name": "Project"
  }
]
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="list-jira-projects-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira projects|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="list-jira-projects-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[JiraProject](#schemajiraproject)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve project issue types

> Code samples

```bash
curl https://example.com/integrations/jira-server/projects/10001/issue_types/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/jira-server/projects/{project_id}/issue_types/`

<h3 id="retrieve-project-issue-types-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Jira Project Id|

> Example responses

> 200 Response

```json
[
  {
    "id": "10003",
    "name": "Story"
  }
]
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-project-issue-types-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira issue types available in project|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-project-issue-types-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[JiraIssueType](#schemajiraissuetype)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve issue priorities

> Code samples

```bash
curl https://example.com/integrations/jira-server/projects/10001/issue_types/10003/priorities/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/jira-server/projects/{project_id}/issue_types/{issue_type_id}/priorities/`

<h3 id="retrieve-issue-priorities-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Jira Project Id|
|issue_type_id|path|string|true|Jira issue type id|

> Example responses

> 200 Response

```json
[
  {
    "id": "3",
    "name": "Medium"
  }
]
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-issue-priorities-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira issue priorities|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="retrieve-issue-priorities-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[JiraIssuePriority](#schemajiraissuepriority)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve issue statuses

> Code samples

```bash
curl https://example.com/integrations/jira-server/projects/10001/issue_types/10003/status/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/jira-server/projects/{project_id}/issue_types/{issue_type_id}/status/`

<h3 id="retrieve-issue-statuses-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|Jira Project Id|
|issue_type_id|path|string|true|Jira issue type id|

> Example responses

> 200 Response

```json
[
  {
    "id": "10003",
    "name": "Backlog"
  }
]
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-issue-statuses-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira issue statuses|Inline|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="retrieve-issue-statuses-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[JiraIssueStatus](#schemajiraissuestatus)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve Jira Server finding configuration

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/jMXUw-BE_2vd/integrations/jira-server/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/findings/{id}/integrations/jira-server/`

<h3 id="retrieve-jira-server-finding-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|

> Example responses

> 200 Response

```json
{
  "issue_id": "string",
  "selective_sync": true
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-jira-server-finding-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira Server finding configuration|[JiraFinding](#schemajirafinding)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="retrieve-jira-server-finding-configuration-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update Jira Server finding configuration

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/jMXUw-BE_2vd/integrations/jira-server/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "issue_id": "string",
    "selective_sync": true
  }'
```

`PUT /targets/{target_id}/findings/{id}/integrations/jira-server/`

> Body parameter

```json
{
  "issue_id": "string",
  "selective_sync": true
}
```

<h3 id="update-jira-server-finding-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[JiraFinding](#schemajirafinding)|true|none|
|» issue_id|body|[jira_issue_id](#schemajira_issue_id)|false|Jira issue id connected to this finding|
|» selective_sync|body|[jira_selective_sync](#schemajira_selective_sync)|false|Selective sync active for this finding.|

> Example responses

> 200 Response

```json
{
  "issue_id": "string",
  "selective_sync": true
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-jira-server-finding-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira Server finding configuration|[JiraFinding](#schemajirafinding)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-jira-server-finding-configuration-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update Jira Server finding configuration

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/findings/jMXUw-BE_2vd/integrations/jira-server/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "issue_id": "string",
    "selective_sync": true
  }'
```

`PATCH /targets/{target_id}/findings/{id}/integrations/jira-server/`

> Body parameter

```json
{
  "issue_id": "string",
  "selective_sync": true
}
```

<h3 id="update-jira-server-finding-configuration-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|id|path|[id](#schemaid)|true|Object Id|
|body|body|[JiraFinding](#schemajirafinding)|true|none|
|» issue_id|body|[jira_issue_id](#schemajira_issue_id)|false|Jira issue id connected to this finding|
|» selective_sync|body|[jira_selective_sync](#schemajira_selective_sync)|false|Selective sync active for this finding.|

> Example responses

> 200 Response

```json
{
  "issue_id": "string",
  "selective_sync": true
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-jira-server-finding-configuration-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira Server finding configuration|[JiraFinding](#schemajirafinding)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-jira-server-finding-configuration-1-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Retrieve Jira Server Target configuration

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/integrations/jira-server/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /targets/{target_id}/integrations/jira-server/`

<h3 id="retrieve-jira-server-target-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|

> Example responses

> 200 Response

```json
{
  "allow_jira": true,
  "auto_sync": true,
  "issue_type_id": "string",
  "priority_mapping": {
    "10": "string",
    "20": "string",
    "30": "string"
  },
  "project_id": "string",
  "status_mapping": {
    "accepted": "string",
    "fixed": "string",
    "invalid": "string",
    "notfixed": "string"
  }
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="retrieve-jira-server-target-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira Server target configuration|[JiraScope](#schemajirascope)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|

<h3 id="retrieve-jira-server-target-configuration-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update Jira Server target configuration

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/integrations/jira-server/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allow_jira": true,
    "auto_sync": true,
    "issue_type_id": "string",
    "priority_mapping": {
      "10": "string",
      "20": "string",
      "30": "string"
    },
    "project_id": "string",
    "status_mapping": {
      "accepted": "string",
      "fixed": "string",
      "invalid": "string",
      "notfixed": "string"
    }
  }'
```

`PUT /targets/{target_id}/integrations/jira-server/`

> Body parameter

```json
{
  "allow_jira": true,
  "auto_sync": true,
  "issue_type_id": "string",
  "priority_mapping": {
    "10": "string",
    "20": "string",
    "30": "string"
  },
  "project_id": "string",
  "status_mapping": {
    "accepted": "string",
    "fixed": "string",
    "invalid": "string",
    "notfixed": "string"
  }
}
```

<h3 id="update-jira-server-target-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|[JiraScope](#schemajirascope)|true|none|
|» allow_jira|body|[jira_allow_jira](#schemajira_allow_jira)|false|Is this target allowed Jira integration.|
|» auto_sync|body|[jira_auto_sync](#schemajira_auto_sync)|false|Automatically synchronise all findings to Jira issues.|
|» issue_type_id|body|[jira_issue_type_id](#schemajira_issue_type_id)|false|Id of the issue type to be created in Jira.|
|» priority_mapping|body|[jira_priority_mapping](#schemajira_priority_mapping)|false|none|
|» project_id|body|[jira_project_id](#schemajira_project_id)|false|Id of the Jira project where issues for this target will be created.|
|» status_mapping|body|[jira_status_mapping](#schemajira_status_mapping)|false|none|

> Example responses

> 200 Response

```json
{
  "allow_jira": true,
  "auto_sync": true,
  "issue_type_id": "string",
  "priority_mapping": {
    "10": "string",
    "20": "string",
    "30": "string"
  },
  "project_id": "string",
  "status_mapping": {
    "accepted": "string",
    "fixed": "string",
    "invalid": "string",
    "notfixed": "string"
  }
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-jira-server-target-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira Server target configuration|[JiraScope](#schemajirascope)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-jira-server-target-configuration-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## Update Jira Server target configuration

> Code samples

```bash
curl https://example.com/targets/jMXUw-BE_2vd/integrations/jira-server/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allow_jira": true,
    "auto_sync": true,
    "issue_type_id": "string",
    "priority_mapping": {
      "10": "string",
      "20": "string",
      "30": "string"
    },
    "project_id": "string",
    "status_mapping": {
      "accepted": "string",
      "fixed": "string",
      "invalid": "string",
      "notfixed": "string"
    }
  }'
```

`PATCH /targets/{target_id}/integrations/jira-server/`

> Body parameter

```json
{
  "allow_jira": true,
  "auto_sync": true,
  "issue_type_id": "string",
  "priority_mapping": {
    "10": "string",
    "20": "string",
    "30": "string"
  },
  "project_id": "string",
  "status_mapping": {
    "accepted": "string",
    "fixed": "string",
    "invalid": "string",
    "notfixed": "string"
  }
}
```

<h3 id="update-jira-server-target-configuration-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_id|path|[id](#schemaid)|true|Target id|
|body|body|[JiraScope](#schemajirascope)|true|none|
|» allow_jira|body|[jira_allow_jira](#schemajira_allow_jira)|false|Is this target allowed Jira integration.|
|» auto_sync|body|[jira_auto_sync](#schemajira_auto_sync)|false|Automatically synchronise all findings to Jira issues.|
|» issue_type_id|body|[jira_issue_type_id](#schemajira_issue_type_id)|false|Id of the issue type to be created in Jira.|
|» priority_mapping|body|[jira_priority_mapping](#schemajira_priority_mapping)|false|none|
|» project_id|body|[jira_project_id](#schemajira_project_id)|false|Id of the Jira project where issues for this target will be created.|
|» status_mapping|body|[jira_status_mapping](#schemajira_status_mapping)|false|none|

> Example responses

> 200 Response

```json
{
  "allow_jira": true,
  "auto_sync": true,
  "issue_type_id": "string",
  "priority_mapping": {
    "10": "string",
    "20": "string",
    "30": "string"
  },
  "project_id": "string",
  "status_mapping": {
    "accepted": "string",
    "fixed": "string",
    "invalid": "string",
    "notfixed": "string"
  }
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

<h3 id="update-jira-server-target-configuration-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Jira Server target configuration|[JiraScope](#schemajirascope)|
|401|Unauthorized|Access token is missing or invalid|Inline|
|403|Forbidden|Not allowed to perform operation|Inline|
|404|Not Found|Not found|Inline|

<h3 id="update-jira-server-target-configuration-1-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Not found.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="probely-developers-plan">Plan</h1>

## Subscription plans

> Code samples

```bash
curl https://example.com/plans/ \
  -H 'Accept: application/json'
```

`GET /plans/`

> Example responses

> 200 Response

```json
[
  {
    "allowed_scan_profiles": [
      "normal"
    ],
    "charge_model": "per_unit",
    "currency_code": "EUR",
    "description": "Object description",
    "id": "jMXUw-BE_2vd",
    "is_trial": false,
    "name": "Object name",
    "period": 1,
    "period_unit": "month",
    "price": 5000
  }
]
```

<h3 id="subscription-plans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Plan list|Inline|

<h3 id="subscription-plans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Plan](#schemaplan)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_APIKey">APIKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_APIKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "id": "jMXUw-BE_2vd",
  "key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
  "name": "Object name"
}
```

API Key object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|read-only|Object id.|
|key|[token](#schematoken)|false|read-only|Authentication token|
|name|[name](#schemaname)|false|none|Custom name for the resource|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "auto_collection": "on",
  "balance": 0,
  "balance_currency_code": "EUR",
  "free_target_quantity": 3,
  "has_used_trial": true,
  "heroku": true,
  "next_billing_at": "2018-01-31T16:32:17.238553Z",
  "plan": {
    "allowed_scan_profiles": [
      "normal"
    ],
    "charge_model": "per_unit",
    "currency_code": "EUR",
    "description": "Object description",
    "id": "jMXUw-BE_2vd",
    "is_trial": false,
    "name": "Object name",
    "period": 1,
    "period_unit": "month",
    "price": 5000
  },
  "plan_target_quantity": 3,
  "pool_size": 5,
  "status": "active",
  "trialEnd": "2018-01-31T16:32:52.226652Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_collection|[accountAutoCollection](#schemaaccountautocollection)|false|read-only|Collection for the next billing period is autommatic/manual|
|balance|[accountBalance](#schemaaccountbalance)|false|none|Account balance in cents|
|balance_currency_code|[currencyCode](#schemacurrencycode)|false|none|3 letter currency code|
|free_target_quantity|[freeTargetQuantity](#schemafreetargetquantity)|false|none|Number of free targets|
|has_used_trial|[hasUsedTrial](#schemahasusedtrial)|false|none|Has account used up it's trial|
|heroku|boolean|false|none|Heroku accounts (for future use)|
|next_billing_at|[accountNextBillingAt](#schemaaccountnextbillingat)|false|read-only|Date of next billing|
|plan|[Plan](#schemaplan)|false|none|none|
|plan_target_quantity|[planTargetQuantity](#schemaplantargetquantity)|false|none|Number of subscribed targets|
|pool_size|[poolSize](#schemapoolsize)|false|none|Maximum number of subscribed target for pool plans|
|status|[accountStatus](#schemaaccountstatus)|false|read-only|* active - active subscription, either trial or paying<br>* trial_ended - trial ended and subscription was discontinued<br>* canceled - subscription canceled<br>|
|trialEnd|[trialEnd](#schematrialend)|false|none|Trial termination date|

#### Enumerated Values

|Property|Value|
|---|---|
|auto_collection|on|
|auto_collection|off|
|status|active|
|status|trial_ended|
|status|canceled|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "action": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Action to enable targets:<br>* null - no action required<br>* trial - start a trial<br>* plan - select a plan to subscribe<br>* subscribe - add target to subscribed plan<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|action|null|
|action|trial|
|action|plan|
|action|subscribe|

<h2 id="tocS_Actions">Actions</h2>
<!-- backwards compatibility -->
<a id="schemaactions"></a>
<a id="schema_Actions"></a>
<a id="tocSactions"></a>
<a id="tocsactions"></a>

```json
[
  {
    "action": "edit",
    "label": "string"
  }
]
```

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "change": "created",
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "field": "string",
  "old_value": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|change|integer|false|none|Type of change:<br>  * created - First time the issue is found<br>  * comment - User left a comment in the timeline<br>  * found - Found again in a later scan<br>  * changed - One of the parameters of the finding was changed<br>   (e.g. severity)<br>|
|changed|[changed](#schemachanged)|false|read-only|Date time of the last change|
|changed_by|[ChangedBy](#schemachangedby)|false|read-only|User that last modified the object|
|field|string|false|none|Field that was changed|
|old_value|string|false|none|Previous value|
|value|string|false|none|New value|

#### Enumerated Values

|Property|Value|
|---|---|
|change|created|
|change|comment|
|change|found|
|change|changed|

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "cookies": [
    {
      "name": "cookie_1",
      "value": "cookie_value"
    }
  ],
  "desc": "Object description",
  "headers": [
    {
      "name": "X-Custom-Header",
      "value": "XXXXX"
    }
  ],
  "host": "string",
  "id": "jMXUw-BE_2vd",
  "include": true,
  "name": "Object name",
  "stack": [
    "nginx"
  ],
  "verification_date": "2018-01-31T16:32:52.226652Z",
  "verification_last_error": "string",
  "verification_method": "dns",
  "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
  "verified": false
}
```

Secondary domain of a target

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed|[changed](#schemachanged)|false|read-only|Date time of the last change|
|changed_by|[ChangedBy](#schemachangedby)|false|read-only|User that last modified the object|
|cookies|[Cookies](#schemacookies)|false|none|Custom cookies name/value pairs|
|desc|[desc](#schemadesc)|false|none|Custom description for the resource|
|headers|[Headers](#schemaheaders)|false|none|Custom headers name value pairs|
|host|[host](#schemahost)|false|none|Fully qualified hostname|
|id|[id](#schemaid)|false|read-only|Object id.|
|include|[include](#schemainclude)|false|none|Use this asset in scans.|
|name|[name](#schemaname)|false|none|Custom name for the resource|
|stack|[Stack](#schemastack)|false|read-only|List of frameworks detected on this resource|
|verification_date|[verificationDate](#schemaverificationdate)|false|read-only|Verification date time|
|verification_last_error|[verificationLastError](#schemaverificationlasterror)|false|read-only|Reason for last verification failure.|
|verification_method|[verificationMethod](#schemaverificationmethod)|false|read-only|Type of verification:<br>* dns - we look or a TXT record on the host you registered containing<br>`Probely=<verification_token>`<br>* file - on the root of the path you registered we look for a file<br>named `<verification token>` containing `Probely`.<br>|
|verification_token|[verificationToken](#schemaverificationtoken)|false|read-only|Token used to verify|
|verified|[verified](#schemaverified)|false|read-only|Has resource ownership been verified|

#### Enumerated Values

|Property|Value|
|---|---|
|verification_method|dns|
|verification_method|file|

<h2 id="tocS_Assignee">Assignee</h2>
<!-- backwards compatibility -->
<a id="schemaassignee"></a>
<a id="schema_Assignee"></a>
<a id="tocSassignee"></a>
<a id="tocsassignee"></a>

```json
{
  "email": "example@probely.com",
  "id": "jMXUw-BE_2vd",
  "name": "Henrique Cimento"
}
```

Assigned user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|[userEmail](#schemauseremail)|false|none|User's email (changing this resets the user's password and revokes existing tokens)|
|id|[userId](#schemauserid)|false|none|User's id|
|name|[userName](#schemausername)|false|none|User's name|

<h2 id="tocS_BasicAuth">BasicAuth</h2>
<!-- backwards compatibility -->
<a id="schemabasicauth"></a>
<a id="schema_BasicAuth"></a>
<a id="tocSbasicauth"></a>
<a id="tocsbasicauth"></a>

```json
{
  "password": "dolphins",
  "username": "probely"
}
```

Basic authentication credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|[password](#schemapassword)|false|none|none|
|username|[basicAuthUsername](#schemabasicauthusername)|false|none|Username|

<h2 id="tocS_Billing">Billing</h2>
<!-- backwards compatibility -->
<a id="schemabilling"></a>
<a id="schema_Billing"></a>
<a id="tocSbilling"></a>
<a id="tocsbilling"></a>

```json
{
  "address": "string",
  "city": "Munich",
  "country": "DE",
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "other": "string",
  "reg_number": "string",
  "vat_number": "string",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[address](#schemaaddress)|true|none|Address|
|city|[city](#schemacity)|true|none|City|
|country|[country](#schemacountry)|true|none|ISO 3166 alpha-2 country code|
|email|[email](#schemaemail)|true|none|Contact email|
|first_name|[firstName](#schemafirstname)|true|none|First name|
|last_name|[lastName](#schemalastname)|true|none|Last name|
|other|string|false|none|Extra data|
|reg_number|[registrationNumber](#schemaregistrationnumber)|false|none|Company registration number|
|vat_number|[vat](#schemavat)|true|none|Company VAT registration number|
|zip|[zipCode](#schemazipcode)|true|none|Address ZIP code|

<h2 id="tocS_ChangedBy">ChangedBy</h2>
<!-- backwards compatibility -->
<a id="schemachangedby"></a>
<a id="schema_ChangedBy"></a>
<a id="tocSchangedby"></a>
<a id="tocschangedby"></a>

```json
{
  "email": "example@probely.com",
  "id": "jMXUw-BE_2vd",
  "name": "Henrique Cimento"
}
```

User that last modified the object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|[userEmail](#schemauseremail)|false|none|User's email (changing this resets the user's password and revokes existing tokens)|
|id|[userId](#schemauserid)|false|none|User's id|
|name|[userName](#schemausername)|false|none|User's name|

<h2 id="tocS_Cookies">Cookies</h2>
<!-- backwards compatibility -->
<a id="schemacookies"></a>
<a id="schema_Cookies"></a>
<a id="tocScookies"></a>
<a id="tocscookies"></a>

```json
[
  {
    "name": "cookie_1",
    "value": "cookie_value"
  }
]
```

Custom cookies name/value pairs

<h2 id="tocS_CreatedBy">CreatedBy</h2>
<!-- backwards compatibility -->
<a id="schemacreatedby"></a>
<a id="schema_CreatedBy"></a>
<a id="tocScreatedby"></a>
<a id="tocscreatedby"></a>

```json
{
  "email": "example@probely.com",
  "id": "jMXUw-BE_2vd",
  "name": "Henrique Cimento"
}
```

User that created the object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|[userEmail](#schemauseremail)|false|none|User's email (changing this resets the user's password and revokes existing tokens)|
|id|[userId](#schemauserid)|false|none|User's id|
|name|[userName](#schemausername)|false|none|User's name|

<h2 id="tocS_Definition">Definition</h2>
<!-- backwards compatibility -->
<a id="schemadefinition"></a>
<a id="schema_Definition"></a>
<a id="tocSdefinition"></a>
<a id="tocsdefinition"></a>

```json
{
  "desc": "string",
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desc|string|false|none|Vulnerability definition description.|
|id|string|false|none|Vulnerability definition id.|
|name|string|false|none|Vulnerability definition name.|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "content": {
    "changed": "2018-01-31T16:32:17.238553Z",
    "changed_by": {
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "name": "Henrique Cimento"
    },
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "is_active": true,
    "is_admin": true,
    "is_billing_admin": true,
    "name": "Henrique Cimento",
    "title": "ceo"
  },
  "event_type": "scan_started",
  "id": "jMXUw-BE_2vd",
  "object_type": "user",
  "ocurred_at": "2018-01-31T16:32:17.238553Z",
  "webhooks": [
    {
      "api_version": "v1",
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "check_cert": true,
      "created": "2018-01-31T16:32:17.238553Z",
      "created_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "id": "jMXUw-BE_2vd",
      "name": "Object name",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[EventContent](#schemaeventcontent)|false|read-only|Event object.|
|event_type|[eventType](#schemaeventtype)|false|read-only|Event type:<br>- `user_created` new user added to account<br>- `user_deleted` user deleted from account<br>- `target_created` new target added to account<br>- `target_deleted` target deleted from account<br>- `target_verified` target ownership verified<br>- `target_verification_failed` target ownership verification failed<br>- `scan_started` scan started on target<br>- `scan_canceled` scan on target canceled<br>- `scan_completed` scan finished with successfuly<br>- `scan_failed` scan finished unsuccessfuly<br>- `finding_detected` new finding detected (not found before)<br>- `finding_fixed` finding was fixed<br>|
|id|[id](#schemaid)|false|read-only|Object id.|
|object_type|[eventObjectType](#schemaeventobjecttype)|false|read-only|Type of object in the event content.<br>|
|ocurred_at|[eventOccurredAt](#schemaeventoccurredat)|false|read-only|Date time of when the event occurred|
|webhooks|[WebhookList](#schemawebhooklist)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|user_created|
|event_type|user_deleted|
|event_type|target_created|
|event_type|target_deleted|
|event_type|target_verified|
|event_type|target_verification_failed|
|event_type|scan_started|
|event_type|scan_canceled|
|event_type|scan_completed|
|event_type|scan_failed|
|event_type|finding_detected|
|event_type|finding_fixed|
|object_type|user|
|object_type|target|
|object_type|scan|
|object_type|finding|

<h2 id="tocS_EventContent">EventContent</h2>
<!-- backwards compatibility -->
<a id="schemaeventcontent"></a>
<a id="schema_EventContent"></a>
<a id="tocSeventcontent"></a>
<a id="tocseventcontent"></a>

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "email": "example@probely.com",
  "id": "jMXUw-BE_2vd",
  "is_active": true,
  "is_admin": true,
  "is_billing_admin": true,
  "name": "Henrique Cimento",
  "title": "ceo"
}
```

Event object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[User](#schemauser)|false|none|none|
|*oneOf*|[Target](#schematarget)|false|none|none|
|*oneOf*|[Scan](#schemascan)|false|none|none|
|*oneOf*|[Finding](#schemafinding)|false|none|none|

<h2 id="tocS_Finding">Finding</h2>
<!-- backwards compatibility -->
<a id="schemafinding"></a>
<a id="schema_Finding"></a>
<a id="tocSfinding"></a>
<a id="tocsfinding"></a>

```json
{
  "assignee": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "comment": "string",
  "cvss_score": 6.5,
  "cvss_vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N",
  "definition": {
    "desc": "string",
    "id": "string",
    "name": "string"
  },
  "evidence": "string",
  "extra": "string",
  "fix": "string",
  "id": "jMXUw-BE_2vd",
  "insertion_point": "cookie",
  "labels": [
    "string"
  ],
  "last_found": "2018-02-19T18:58:50.906015Z",
  "method": "GET",
  "parameter": "string",
  "params": "string",
  "path": "string",
  "reporter": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "requests": [
    {
      "request": "string",
      "response": "string"
    }
  ],
  "scans": [
    "string"
  ],
  "severity": 10,
  "state": "notfixed",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  },
  "url": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignee|[Assignee](#schemaassignee)|false|none|Assigned user|
|changed|[changed](#schemachanged)|false|read-only|Date time of the last change|
|changed_by|[ChangedBy](#schemachangedby)|false|read-only|User that last modified the object|
|comment|string|false|none|User comment left on the finding.|
|cvss_score|[findingCVSSScore](#schemafindingcvssscore)|false|read-only|CVSS score|
|cvss_vector|[findingCVSSVector](#schemafindingcvssvector)|false|read-only|CVSS vector|
|definition|[Definition](#schemadefinition)|false|read-only|none|
|evidence|string|false|read-only|Evidence for the finding.|
|extra|string|false|read-only|Extra data for the finding.|
|fix|string|false|read-only|Fix sugestion for the vulnerability and framework|
|id|[id](#schemaid)|false|read-only|Object id.|
|insertion_point|[findingInsertionPoint](#schemafindinginsertionpoint)|false|read-only|An insertion point is the place in the HTTP request where the<br>malicious payload is injected to exploit the vulnerability.<br>  * cookie - Payload injected into the value of an HTTP cookie<br>  * header - Payload injected into the header of an HTTP request<br>  * parameter - Payload injected into the value of a query string<br>  parameter<br>  * arbitrary_url_param - Payload injected into the value of an<br>  arbitrarily added query string parameter<br>  * url_filename - Payload injected into the URL filename part<br>  * url_folder - Payload injected into the URL folder part<br>  * multipart_parameter - Payload is inserted into the value of a<br>  parameter attribute within a multi-part message body (such as<br>  the name of an uploaded file).<br>  * <empty> - No payload to inject.<br>|
|labels|[string]|false|none|User labels for the finding.|
|last_found|string(date-time)|false|read-only|Date time of the last time the vulnerability was found.|
|method|[method](#schemamethod)|false|read-only|HTTP method|
|parameter|string|false|read-only|Vulnerable paramenter.|
|params|string|false|read-only|Request parameters|
|path|string|false|read-only|Finding path.|
|reporter|[Reporter](#schemareporter)|false|read-only|Reporting user|
|requests|[Requests](#schemarequests)|false|read-only|Request response pairs that produced the finding|
|scans|[string]|false|read-only|Scan ids where this finding was present.|
|severity|[findingSeverity](#schemafindingseverity)|false|none|Severity, how serious the issue is considered:<br>  * 10 - low<br>  * 20 - medium<br>  * 30 - high<br>|
|state|[findingState](#schemafindingstate)|false|none|Finding state:<br>  * notfixed - Issue can still be exploited<br>  * invalid - Issue determined to be a false positive<br>  * accepted - Issue will not be solved and the risk was accepted<br>  * fixed - No problem here anymore<br>|
|target|[TargetSimple](#schematargetsimple)|false|read-only|none|
|url|string|false|read-only|Full finding URL|
|value|string|false|read-only|Value for parameter.|

#### Enumerated Values

|Property|Value|
|---|---|
|insertion_point|cookie|
|insertion_point|header|
|insertion_point|parameter|
|insertion_point|arbitrary_url_param_name|
|insertion_point|url_path_folder|
|insertion_point|""|
|method|GET|
|method|OPTIONS|
|method|POST|
|method|PUT|
|method|PATCH|
|method|DELETE|
|method|HEAD|
|severity|10|
|severity|20|
|severity|30|
|state|notfixed|
|state|invalid|
|state|accepted|
|state|fixed|

<h2 id="tocS_FindingBulkIds">FindingBulkIds</h2>
<!-- backwards compatibility -->
<a id="schemafindingbulkids"></a>
<a id="schema_FindingBulkIds"></a>
<a id="tocSfindingbulkids"></a>
<a id="tocsfindingbulkids"></a>

```json
{
  "ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|true|none|Array of finding ids|

<h2 id="tocS_FindingBulkRetest">FindingBulkRetest</h2>
<!-- backwards compatibility -->
<a id="schemafindingbulkretest"></a>
<a id="schema_FindingBulkRetest"></a>
<a id="tocSfindingbulkretest"></a>
<a id="tocsfindingbulkretest"></a>

```json
{
  "ids": [
    "string"
  ],
  "scan_profile": "normal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|true|none|Array of finding ids|
|scan_profile|[scanProfile](#schemascanprofile)|false|none|* lightning - fast simple scan<br>* normal - default profile<br>* full - does everything the default profile does and adds boolean based<br>SQL injection tests<br>* safe - doesn't use any content changing methods (no POST, DELETE, etc)<br>and tries fewer payloads for SQL injection tests<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|scan_profile|safe|
|scan_profile|normal|
|scan_profile|full|
|scan_profile|lightning|

<h2 id="tocS_FindingBulkUpdate">FindingBulkUpdate</h2>
<!-- backwards compatibility -->
<a id="schemafindingbulkupdate"></a>
<a id="schema_FindingBulkUpdate"></a>
<a id="tocSfindingbulkupdate"></a>
<a id="tocsfindingbulkupdate"></a>

```json
{
  "ids": [
    "string"
  ],
  "assignee": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "comment": "string",
  "cvss_score": 6.5,
  "cvss_vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N",
  "definition": {
    "desc": "string",
    "id": "string",
    "name": "string"
  },
  "evidence": "string",
  "extra": "string",
  "fix": "string",
  "id": "jMXUw-BE_2vd",
  "insertion_point": "cookie",
  "labels": [
    "string"
  ],
  "last_found": "2018-02-19T18:58:50.906015Z",
  "method": "GET",
  "parameter": "string",
  "params": "string",
  "path": "string",
  "reporter": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "requests": [
    {
      "request": "string",
      "response": "string"
    }
  ],
  "scans": [
    "string"
  ],
  "severity": 10,
  "state": "notfixed",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  },
  "url": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|true|none|Array of finding ids|
|assignee|[Assignee](#schemaassignee)|false|none|Assigned user|
|changed|[changed](#schemachanged)|false|read-only|Date time of the last change|
|changed_by|[ChangedBy](#schemachangedby)|false|read-only|User that last modified the object|
|comment|string|false|none|User comment left on the finding.|
|cvss_score|[findingCVSSScore](#schemafindingcvssscore)|false|read-only|CVSS score|
|cvss_vector|[findingCVSSVector](#schemafindingcvssvector)|false|read-only|CVSS vector|
|definition|[Definition](#schemadefinition)|false|read-only|none|
|evidence|string|false|read-only|Evidence for the finding.|
|extra|string|false|read-only|Extra data for the finding.|
|fix|string|false|read-only|Fix sugestion for the vulnerability and framework|
|id|[id](#schemaid)|false|read-only|Object id.|
|insertion_point|[findingInsertionPoint](#schemafindinginsertionpoint)|false|read-only|An insertion point is the place in the HTTP request where the<br>malicious payload is injected to exploit the vulnerability.<br>  * cookie - Payload injected into the value of an HTTP cookie<br>  * header - Payload injected into the header of an HTTP request<br>  * parameter - Payload injected into the value of a query string<br>  parameter<br>  * arbitrary_url_param - Payload injected into the value of an<br>  arbitrarily added query string parameter<br>  * url_filename - Payload injected into the URL filename part<br>  * url_folder - Payload injected into the URL folder part<br>  * multipart_parameter - Payload is inserted into the value of a<br>  parameter attribute within a multi-part message body (such as<br>  the name of an uploaded file).<br>  * <empty> - No payload to inject.<br>|
|labels|[string]|false|none|User labels for the finding.|
|last_found|string(date-time)|false|read-only|Date time of the last time the vulnerability was found.|
|method|[method](#schemamethod)|false|read-only|HTTP method|
|parameter|string|false|read-only|Vulnerable paramenter.|
|params|string|false|read-only|Request parameters|
|path|string|false|read-only|Finding path.|
|reporter|[Reporter](#schemareporter)|false|read-only|Reporting user|
|requests|[Requests](#schemarequests)|false|read-only|Request response pairs that produced the finding|
|scans|[string]|false|read-only|Scan ids where this finding was present.|
|severity|[findingSeverity](#schemafindingseverity)|false|none|Severity, how serious the issue is considered:<br>  * 10 - low<br>  * 20 - medium<br>  * 30 - high<br>|
|state|[findingState](#schemafindingstate)|false|none|Finding state:<br>  * notfixed - Issue can still be exploited<br>  * invalid - Issue determined to be a false positive<br>  * accepted - Issue will not be solved and the risk was accepted<br>  * fixed - No problem here anymore<br>|
|target|[TargetSimple](#schematargetsimple)|false|read-only|none|
|url|string|false|read-only|Full finding URL|
|value|string|false|read-only|Value for parameter.|

#### Enumerated Values

|Property|Value|
|---|---|
|insertion_point|cookie|
|insertion_point|header|
|insertion_point|parameter|
|insertion_point|arbitrary_url_param_name|
|insertion_point|url_path_folder|
|insertion_point|""|
|method|GET|
|method|OPTIONS|
|method|POST|
|method|PUT|
|method|PATCH|
|method|DELETE|
|method|HEAD|
|severity|10|
|severity|20|
|severity|30|
|state|notfixed|
|state|invalid|
|state|accepted|
|state|fixed|

<h2 id="tocS_FindingUpdate">FindingUpdate</h2>
<!-- backwards compatibility -->
<a id="schemafindingupdate"></a>
<a id="schema_FindingUpdate"></a>
<a id="tocSfindingupdate"></a>
<a id="tocsfindingupdate"></a>

```json
{
  "assignee": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "comment": "string",
  "cvss_score": 6.5,
  "cvss_vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N",
  "definition": {
    "desc": "string",
    "id": "string",
    "name": "string"
  },
  "evidence": "string",
  "extra": "string",
  "fix": "string",
  "id": "jMXUw-BE_2vd",
  "insertion_point": "cookie",
  "labels": [
    "string"
  ],
  "last_found": "2018-02-19T18:58:50.906015Z",
  "method": "GET",
  "parameter": "string",
  "params": "string",
  "path": "string",
  "reporter": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "requests": [
    {
      "request": "string",
      "response": "string"
    }
  ],
  "scans": [
    "string"
  ],
  "severity": 10,
  "state": "notfixed",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  },
  "url": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignee|[Assignee](#schemaassignee)|false|none|Assigned user|
|changed|[changed](#schemachanged)|false|read-only|Date time of the last change|
|changed_by|[ChangedBy](#schemachangedby)|false|read-only|User that last modified the object|
|comment|string|false|none|User comment left on the finding.|
|cvss_score|[findingCVSSScore](#schemafindingcvssscore)|false|read-only|CVSS score|
|cvss_vector|[findingCVSSVector](#schemafindingcvssvector)|false|read-only|CVSS vector|
|definition|[Definition](#schemadefinition)|false|read-only|none|
|evidence|string|false|read-only|Evidence for the finding.|
|extra|string|false|read-only|Extra data for the finding.|
|fix|string|false|read-only|Fix sugestion for the vulnerability and framework|
|id|[id](#schemaid)|false|read-only|Object id.|
|insertion_point|[findingInsertionPoint](#schemafindinginsertionpoint)|false|read-only|An insertion point is the place in the HTTP request where the<br>malicious payload is injected to exploit the vulnerability.<br>  * cookie - Payload injected into the value of an HTTP cookie<br>  * header - Payload injected into the header of an HTTP request<br>  * parameter - Payload injected into the value of a query string<br>  parameter<br>  * arbitrary_url_param - Payload injected into the value of an<br>  arbitrarily added query string parameter<br>  * url_filename - Payload injected into the URL filename part<br>  * url_folder - Payload injected into the URL folder part<br>  * multipart_parameter - Payload is inserted into the value of a<br>  parameter attribute within a multi-part message body (such as<br>  the name of an uploaded file).<br>  * <empty> - No payload to inject.<br>|
|labels|[string]|false|none|User labels for the finding.|
|last_found|string(date-time)|false|read-only|Date time of the last time the vulnerability was found.|
|method|[method](#schemamethod)|false|read-only|HTTP method|
|parameter|string|false|read-only|Vulnerable paramenter.|
|params|string|false|read-only|Request parameters|
|path|string|false|read-only|Finding path.|
|reporter|[Reporter](#schemareporter)|false|read-only|Reporting user|
|requests|[Requests](#schemarequests)|false|read-only|Request response pairs that produced the finding|
|scans|[string]|false|read-only|Scan ids where this finding was present.|
|severity|[findingSeverity](#schemafindingseverity)|false|none|Severity, how serious the issue is considered:<br>  * 10 - low<br>  * 20 - medium<br>  * 30 - high<br>|
|state|[findingState](#schemafindingstate)|false|none|Finding state:<br>  * notfixed - Issue can still be exploited<br>  * invalid - Issue determined to be a false positive<br>  * accepted - Issue will not be solved and the risk was accepted<br>  * fixed - No problem here anymore<br>|
|target|[TargetSimple](#schematargetsimple)|false|read-only|none|
|url|string|false|read-only|Full finding URL|
|value|string|false|read-only|Value for parameter.|

#### Enumerated Values

|Property|Value|
|---|---|
|insertion_point|cookie|
|insertion_point|header|
|insertion_point|parameter|
|insertion_point|arbitrary_url_param_name|
|insertion_point|url_path_folder|
|insertion_point|""|
|method|GET|
|method|OPTIONS|
|method|POST|
|method|PUT|
|method|PATCH|
|method|DELETE|
|method|HEAD|
|severity|10|
|severity|20|
|severity|30|
|state|notfixed|
|state|invalid|
|state|accepted|
|state|fixed|

<h2 id="tocS_FormLogin">FormLogin</h2>
<!-- backwards compatibility -->
<a id="schemaformlogin"></a>
<a id="schema_FormLogin"></a>
<a id="tocSformlogin"></a>
<a id="tocsformlogin"></a>

```json
[
  {
    "name": "username",
    "value": "probely"
  }
]
```

Form login field name, field input pairs

<h2 id="tocS_Framework">Framework</h2>
<!-- backwards compatibility -->
<a id="schemaframework"></a>
<a id="schema_Framework"></a>
<a id="tocSframework"></a>
<a id="tocsframework"></a>

```json
{
  "desc": "string",
  "id": "jMXUw-BE_2vd",
  "name": "jMXUw-BE_2vd"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desc|string|false|none|Framework description|
|id|[id](#schemaid)|false|read-only|Object id.|
|name|[id](#schemaid)|false|read-only|Object id.|

<h2 id="tocS_Headers">Headers</h2>
<!-- backwards compatibility -->
<a id="schemaheaders"></a>
<a id="schema_Headers"></a>
<a id="tocSheaders"></a>
<a id="tocsheaders"></a>

```json
[
  {
    "name": "X-Custom-Header",
    "value": "XXXXX"
  }
]
```

Custom headers name value pairs

<h2 id="tocS_IntegrationFields">IntegrationFields</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationfields"></a>
<a id="schema_IntegrationFields"></a>
<a id="tocSintegrationfields"></a>
<a id="tocsintegrationfields"></a>

```json
{
  "heroku": true,
  "jira_cloud": true,
  "jira_server": true,
  "slack": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|heroku|boolean|false|none|none|
|jira_cloud|boolean|false|none|none|
|jira_server|boolean|false|none|none|
|slack|boolean|false|none|none|

<h2 id="tocS_Integrations">Integrations</h2>
<!-- backwards compatibility -->
<a id="schemaintegrations"></a>
<a id="schema_Integrations"></a>
<a id="tocSintegrations"></a>
<a id="tocsintegrations"></a>

```json
{
  "available": {
    "heroku": true,
    "jira_cloud": true,
    "jira_server": true,
    "slack": true
  },
  "installed": {
    "heroku": true,
    "jira_cloud": true,
    "jira_server": true,
    "slack": true
  }
}
```

Available and installed integrations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|[IntegrationFields](#schemaintegrationfields)|false|none|none|
|installed|[IntegrationFields](#schemaintegrationfields)|false|none|none|

<h2 id="tocS_Invoice">Invoice</h2>
<!-- backwards compatibility -->
<a id="schemainvoice"></a>
<a id="schema_Invoice"></a>
<a id="tocSinvoice"></a>
<a id="tocsinvoice"></a>

```json
{
  "amount_due": 0,
  "amount_paid": 0,
  "currency_code": "EUR",
  "discounts": [
    {
      "amount": 0,
      "description": "string"
    }
  ],
  "line_items": [
    {
      "amount": 0,
      "description": "string",
      "discount_amount": 0,
      "quantity": 0,
      "tax_amount": 0,
      "unit_amount": 0
    }
  ],
  "plan": "string",
  "plan_id": "jMXUw-BE_2vd",
  "sub_total": 0,
  "taxes": [
    {
      "tax_amount": 0,
      "tax_name": "string",
      "tax_rate": 0
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount_due|integer|false|none|Amount remaining to pay in cents|
|amount_paid|integer|false|none|Amount already paid in cents|
|currency_code|[currencyCode](#schemacurrencycode)|false|none|3 letter currency code|
|discounts|[object]|false|none|none|
|line_items|[object]|false|none|none|
|plan|string|false|none|Plan name|
|plan_id|[accountPlanId](#schemaaccountplanid)|false|read-only|Current plan id|
|sub_total|integer|false|none|Price before taxes in cents|
|taxes|[object]|false|none|none|
|total|integer|false|none|Price after taxes in cents|

<h2 id="tocS_JiraFinding">JiraFinding</h2>
<!-- backwards compatibility -->
<a id="schemajirafinding"></a>
<a id="schema_JiraFinding"></a>
<a id="tocSjirafinding"></a>
<a id="tocsjirafinding"></a>

```json
{
  "issue_id": "string",
  "selective_sync": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issue_id|[jira_issue_id](#schemajira_issue_id)|false|none|Jira issue id connected to this finding|
|selective_sync|[jira_selective_sync](#schemajira_selective_sync)|false|none|Selective sync active for this finding.|

<h2 id="tocS_JiraIssuePriority">JiraIssuePriority</h2>
<!-- backwards compatibility -->
<a id="schemajiraissuepriority"></a>
<a id="schema_JiraIssuePriority"></a>
<a id="tocSjiraissuepriority"></a>
<a id="tocsjiraissuepriority"></a>

```json
{
  "id": "3",
  "name": "Medium"
}
```

Jira issue priority.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Jira issue priority id|
|name|string|false|none|Jira issue priority name|

<h2 id="tocS_JiraIssueStatus">JiraIssueStatus</h2>
<!-- backwards compatibility -->
<a id="schemajiraissuestatus"></a>
<a id="schema_JiraIssueStatus"></a>
<a id="tocSjiraissuestatus"></a>
<a id="tocsjiraissuestatus"></a>

```json
{
  "id": "10003",
  "name": "Backlog"
}
```

Jira issue status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Jira issue status id|
|name|string|false|none|Jira issue status name|

<h2 id="tocS_JiraIssueType">JiraIssueType</h2>
<!-- backwards compatibility -->
<a id="schemajiraissuetype"></a>
<a id="schema_JiraIssueType"></a>
<a id="tocSjiraissuetype"></a>
<a id="tocsjiraissuetype"></a>

```json
{
  "id": "10003",
  "name": "Story"
}
```

Jira issue type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Jira issue type id|
|name|string|false|none|Jira issue type name|

<h2 id="tocS_JiraProject">JiraProject</h2>
<!-- backwards compatibility -->
<a id="schemajiraproject"></a>
<a id="schema_JiraProject"></a>
<a id="tocSjiraproject"></a>
<a id="tocsjiraproject"></a>

```json
{
  "id": "10001",
  "name": "Project"
}
```

Jira project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Jira project id|
|name|string|false|none|Jira project name|

<h2 id="tocS_JiraScope">JiraScope</h2>
<!-- backwards compatibility -->
<a id="schemajirascope"></a>
<a id="schema_JiraScope"></a>
<a id="tocSjirascope"></a>
<a id="tocsjirascope"></a>

```json
{
  "allow_jira": true,
  "auto_sync": true,
  "issue_type_id": "string",
  "priority_mapping": {
    "10": "string",
    "20": "string",
    "30": "string"
  },
  "project_id": "string",
  "status_mapping": {
    "accepted": "string",
    "fixed": "string",
    "invalid": "string",
    "notfixed": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_jira|[jira_allow_jira](#schemajira_allow_jira)|false|none|Is this target allowed Jira integration.|
|auto_sync|[jira_auto_sync](#schemajira_auto_sync)|false|none|Automatically synchronise all findings to Jira issues.|
|issue_type_id|[jira_issue_type_id](#schemajira_issue_type_id)|false|none|Id of the issue type to be created in Jira.|
|priority_mapping|[jira_priority_mapping](#schemajira_priority_mapping)|false|none|none|
|project_id|[jira_project_id](#schemajira_project_id)|false|none|Id of the Jira project where issues for this target will be created.|
|status_mapping|[jira_status_mapping](#schemajira_status_mapping)|false|none|none|

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
{
  "id": "jMXUw-BE_2vd",
  "key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk",
  "name": "jMXUw-BE_2vd"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|read-only|Object id.|
|key|[token](#schematoken)|false|read-only|Authentication token|
|name|[id](#schemaid)|false|read-only|Object id.|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "id": "jMXUw-BE_2vd",
  "name": "Object name"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|read-only|Object id.|
|name|[name](#schemaname)|false|none|Custom name for the resource|

<h2 id="tocS_Login">Login</h2>
<!-- backwards compatibility -->
<a id="schemalogin"></a>
<a id="schema_Login"></a>
<a id="tocSlogin"></a>
<a id="tocslogin"></a>

```json
{
  "password": "dolphins",
  "username": "example@probely.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|[password](#schemapassword)|true|none|none|
|username|[username](#schemausername-1)|true|none|none|

<h2 id="tocS_Plan">Plan</h2>
<!-- backwards compatibility -->
<a id="schemaplan"></a>
<a id="schema_Plan"></a>
<a id="tocSplan"></a>
<a id="tocsplan"></a>

```json
{
  "allowed_scan_profiles": [
    "normal"
  ],
  "charge_model": "per_unit",
  "currency_code": "EUR",
  "description": "Object description",
  "id": "jMXUw-BE_2vd",
  "is_trial": false,
  "name": "Object name",
  "period": 1,
  "period_unit": "month",
  "price": 5000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_scan_profiles|[planAllowedScanProfiles](#schemaplanallowedscanprofiles)|false|none|List of scan profiles allowed by the plan|
|charge_model|[planChargeModel](#schemaplanchargemodel)|false|read-only|* per_unit - each target is paid independently<br>* flat_fee - targets are paid as a pool<br>|
|currency_code|[currencyCode](#schemacurrencycode)|false|none|3 letter currency code|
|description|[desc](#schemadesc)|false|none|Custom description for the resource|
|id|[id](#schemaid)|false|read-only|Object id.|
|is_trial|[planIsTrial](#schemaplanistrial)|false|none|Is this a trial plan|
|name|[name](#schemaname)|false|none|Custom name for the resource|
|period|[billingPeriod](#schemabillingperiod)|false|none|Number of of period unit between charges|
|period_unit|[billingPeriodUnit](#schemabillingperiodunit)|false|none|Unit of billing period|
|price|[price](#schemaprice)|false|none|Price in cents|

#### Enumerated Values

|Property|Value|
|---|---|
|charge_model|per_unit|
|charge_model|flat_fee|
|period_unit|month|
|period_unit|year|

<h2 id="tocS_Reporter">Reporter</h2>
<!-- backwards compatibility -->
<a id="schemareporter"></a>
<a id="schema_Reporter"></a>
<a id="tocSreporter"></a>
<a id="tocsreporter"></a>

```json
{
  "email": "example@probely.com",
  "id": "jMXUw-BE_2vd",
  "name": "Henrique Cimento"
}
```

Reporting user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|[userEmail](#schemauseremail)|false|none|User's email (changing this resets the user's password and revokes existing tokens)|
|id|[userId](#schemauserid)|false|none|User's id|
|name|[userName](#schemausername)|false|none|User's name|

<h2 id="tocS_Requests">Requests</h2>
<!-- backwards compatibility -->
<a id="schemarequests"></a>
<a id="schema_Requests"></a>
<a id="tocSrequests"></a>
<a id="tocsrequests"></a>

```json
[
  {
    "request": "string",
    "response": "string"
  }
]
```

Request response pairs that produced the finding

<h2 id="tocS_Scan">Scan</h2>
<!-- backwards compatibility -->
<a id="schemascan"></a>
<a id="schema_Scan"></a>
<a id="tocSscan"></a>
<a id="tocsscan"></a>

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "completed": "2018-01-31T16:32:17.238553Z",
  "crawler": {
    "error": [
      "string"
    ],
    "state": "started",
    "status": {
      "0": 0,
      "1": 0
    },
    "warning": [
      "string"
    ]
  },
  "created": "2018-01-31T16:32:17.238553Z",
  "created_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "fingerprinter": {
    "count": 0,
    "error": [
      "string"
    ],
    "state": "started",
    "warning": [
      "string"
    ]
  },
  "highs": 0,
  "id": "jMXUw-BE_2vd",
  "lows": 0,
  "mediums": 0,
  "scan_profile": "normal",
  "scanner": {
    "error": [
      "string"
    ],
    "state": "started",
    "status": {
      "0": 0,
      "1": 0
    },
    "warning": [
      "string"
    ]
  },
  "started": "2018-01-31T16:32:17.238553Z",
  "status": "queued",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed|[changed](#schemachanged)|false|read-only|Date time of the last change|
|changed_by|[ChangedBy](#schemachangedby)|false|read-only|User that last modified the object|
|completed|[scanCompleted](#schemascancompleted)|false|read-only|Date time of scan completion|
|crawler|object|false|none|Information on the status of the crawling step of the scanning process|
|created|[created](#schemacreated)|false|read-only|Date time of creation|
|created_by|[CreatedBy](#schemacreatedby)|false|read-only|User that created the object|
|fingerprinter|object|false|none|Information on the status of the crawling step of the scanning process|
|highs|integer|false|none|Number of high severity findings in this scan|
|id|[id](#schemaid)|false|read-only|Object id.|
|lows|integer|false|none|Number of low severity findings in this scan|
|mediums|integer|false|none|Number of medium severity findings in this scan|
|scan_profile|[scanProfile](#schemascanprofile)|false|none|* lightning - fast simple scan<br>* normal - default profile<br>* full - does everything the default profile does and adds boolean based<br>SQL injection tests<br>* safe - doesn't use any content changing methods (no POST, DELETE, etc)<br>and tries fewer payloads for SQL injection tests<br>|
|scanner|object|false|none|Information on the status of the search for vulnerabilities of the scanning process|
|started|[scanStarted](#schemascanstarted)|false|read-only|Date time of scan start|
|status|[scanStatus](#schemascanstatus)|false|none|Current scan status:<br>  * queued - Scan queued to start<br>  * started - Scan currently running<br>  * under_review - Scan is complete but we need to verify some findings<br>  * completed - Scan complete<br>  * completed_with_errors - Scan complete with error(s) in non essential modules<br>  * failed - Something went seriously wrong during the scan<br>  * canceled - Scan was canceled<br>  * canceling - Stopping scan<br>|
|target|[TargetSimple](#schematargetsimple)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scan_profile|safe|
|scan_profile|normal|
|scan_profile|full|
|scan_profile|lightning|
|status|queued|
|status|started|
|status|under_review|
|status|completed|
|status|completed_with_errors|
|status|failed|
|status|canceled|
|status|canceling|

<h2 id="tocS_Scheduled">Scheduled</h2>
<!-- backwards compatibility -->
<a id="schemascheduled"></a>
<a id="schema_Scheduled"></a>
<a id="tocSscheduled"></a>
<a id="tocsscheduled"></a>

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "date_time": "1970-01-01T00:00:00Z",
  "id": "QJxMvgPebu0e",
  "recurrence": "d",
  "target": {
    "desc": "Object description",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed|[changed](#schemachanged)|false|read-only|Date time of the last change|
|changed_by|[ChangedBy](#schemachangedby)|false|read-only|User that last modified the object|
|date_time|[scanDateTime](#schemascandatetime)|false|none|Date time of next scan|
|id|string|false|none|Scheduled object id|
|recurrence|[recurrence](#schemarecurrence)|false|none|Scan recurrence:<br>  * d - daily<br>  * w - weekly<br>  * m - monthly<br>  * q - quarterly<br>  * '' - no recurrence<br>|
|target|[TargetSimple](#schematargetsimple)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recurrence|d|
|recurrence|w|
|recurrence|m|
|recurrence|q|
|recurrence|""|

<h2 id="tocS_Site">Site</h2>
<!-- backwards compatibility -->
<a id="schemasite"></a>
<a id="schema_Site"></a>
<a id="tocSsite"></a>
<a id="tocssite"></a>

```json
{
  "basic_auth": {
    "password": "dolphins",
    "username": "probely"
  },
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "cookies": [
    {
      "name": "cookie_1",
      "value": "cookie_value"
    }
  ],
  "desc": "Object description",
  "form_login": [
    {
      "name": "username",
      "value": "probely"
    }
  ],
  "form_login_check_pattern": "",
  "form_login_url": "https://app.probely.com/",
  "has_basic_auth": true,
  "has_form_login": true,
  "headers": [
    {
      "name": "X-Custom-Header",
      "value": "XXXXX"
    }
  ],
  "host": "app.probely.com",
  "id": "jMXUw-BE_2vd",
  "name": "Object name",
  "stack": [
    "nginx"
  ],
  "url": "https://app.probely.com",
  "verification_date": "2018-01-31T16:32:52.226652Z",
  "verification_last_error": "string",
  "verification_method": "dns",
  "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
  "verified": false,
  "whitelist": [
    "/private/path/"
  ]
}
```

Main resource associated with a target

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basic_auth|[BasicAuth](#schemabasicauth)|false|none|Basic authentication credentials|
|changed|[changed](#schemachanged)|false|read-only|Date time of the last change|
|changed_by|[ChangedBy](#schemachangedby)|false|read-only|User that last modified the object|
|cookies|[Cookies](#schemacookies)|false|none|Custom cookies name/value pairs|
|desc|[desc](#schemadesc)|false|none|Custom description for the resource|
|form_login|[FormLogin](#schemaformlogin)|false|none|Form login field name, field input pairs|
|form_login_check_pattern|[formLoginCheckPattern](#schemaformlogincheckpattern)|false|none|Pattern to check successful authentication (not used)|
|form_login_url|[formLoginUrl](#schemaformloginurl)|false|none|URL for the form login|
|has_basic_auth|[hasBasicAuth](#schemahasbasicauth)|false|none|Use basic authentication in scan|
|has_form_login|[hasFormLogin](#schemahasformlogin)|false|none|Does the resource use form login|
|headers|[Headers](#schemaheaders)|false|none|Custom headers name value pairs|
|host|[siteHost](#schemasitehost)|false|read-only|Site host|
|id|[id](#schemaid)|false|read-only|Object id.|
|name|[name](#schemaname)|false|none|Custom name for the resource|
|stack|[Stack](#schemastack)|false|read-only|List of frameworks detected on this resource|
|url|[siteUrl](#schemasiteurl)|false|none|Site URL, it should include the path if the site is not located at the root. This URL can only be set once.<br>|
|verification_date|[verificationDate](#schemaverificationdate)|false|read-only|Verification date time|
|verification_last_error|[verificationLastError](#schemaverificationlasterror)|false|read-only|Reason for last verification failure.|
|verification_method|[verificationMethod](#schemaverificationmethod)|false|read-only|Type of verification:<br>* dns - we look or a TXT record on the host you registered containing<br>`Probely=<verification_token>`<br>* file - on the root of the path you registered we look for a file<br>named `<verification token>` containing `Probely`.<br>|
|verification_token|[verificationToken](#schemaverificationtoken)|false|read-only|Token used to verify|
|verified|[verified](#schemaverified)|false|read-only|Has resource ownership been verified|
|whitelist|[Whitelist](#schemawhitelist)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|verification_method|dns|
|verification_method|file|

<h2 id="tocS_Slack">Slack</h2>
<!-- backwards compatibility -->
<a id="schemaslack"></a>
<a id="schema_Slack"></a>
<a id="tocSslack"></a>
<a id="tocsslack"></a>

```json
{
  "notify_finding_fixed": false,
  "notify_high_findings": false,
  "notify_low_findings": false,
  "notify_medium_findings": false,
  "notify_scan_completed": false,
  "notify_scan_started": false,
  "webhook_url": ""
}
```

Options for slack notifications

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notify_finding_fixed|boolean|false|none|Notify of fixed findings.|
|notify_high_findings|boolean|false|none|Notify of new high severity findings.|
|notify_low_findings|boolean|false|none|Notify of new low severity findings.|
|notify_medium_findings|boolean|false|none|Notify of new medium severity findings.|
|notify_scan_completed|boolean|false|none|Notify of completed scans.|
|notify_scan_started|boolean|false|none|Notify of started scans.|
|webhook_url|string|false|none|Slack notification webhook url.|

<h2 id="tocS_Stack">Stack</h2>
<!-- backwards compatibility -->
<a id="schemastack"></a>
<a id="schema_Stack"></a>
<a id="tocSstack"></a>
<a id="tocsstack"></a>

```json
[
  "nginx"
]
```

List of frameworks detected on this resource

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "coupon_ids": [
    "string"
  ],
  "plan_id": "jMXUw-BE_2vd",
  "target_ids": [
    "jMXUw-BE_2vd"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coupon_ids|[coupons](#schemacoupons)|false|write-only|Coupon ids|
|plan_id|[accountPlanId](#schemaaccountplanid)|false|read-only|Current plan id|
|target_ids|[targetIds](#schematargetids)|false|none|none|

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "allowed_scan_profiles": [
    {
      "id": "normal",
      "name": "string"
    }
  ],
  "assets": [
    {
      "changed": "2018-01-31T16:32:17.238553Z",
      "changed_by": {
        "email": "example@probely.com",
        "id": "jMXUw-BE_2vd",
        "name": "Henrique Cimento"
      },
      "cookies": [
        {
          "name": "cookie_1",
          "value": "cookie_value"
        }
      ],
      "desc": "Object description",
      "headers": [
        {
          "name": "X-Custom-Header",
          "value": "XXXXX"
        }
      ],
      "host": "string",
      "id": "jMXUw-BE_2vd",
      "include": true,
      "name": "Object name",
      "stack": [
        "nginx"
      ],
      "verification_date": "2018-01-31T16:32:52.226652Z",
      "verification_last_error": "string",
      "verification_method": "dns",
      "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
      "verified": false
    }
  ],
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "connected_target": "string",
  "enabled": true,
  "environment": "testing",
  "id": "jMXUw-BE_2vd",
  "labels": [
    "string"
  ],
  "name": "Object name",
  "report_type": "default",
  "scan_profile": "normal",
  "site": {
    "basic_auth": {
      "password": "dolphins",
      "username": "probely"
    },
    "changed": "2018-01-31T16:32:17.238553Z",
    "changed_by": {
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "name": "Henrique Cimento"
    },
    "cookies": [
      {
        "name": "cookie_1",
        "value": "cookie_value"
      }
    ],
    "desc": "Object description",
    "form_login": [
      {
        "name": "username",
        "value": "probely"
      }
    ],
    "form_login_check_pattern": "",
    "form_login_url": "https://app.probely.com/",
    "has_basic_auth": true,
    "has_form_login": true,
    "headers": [
      {
        "name": "X-Custom-Header",
        "value": "XXXXX"
      }
    ],
    "host": "app.probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "stack": [
      "nginx"
    ],
    "url": "https://app.probely.com",
    "verification_date": "2018-01-31T16:32:52.226652Z",
    "verification_last_error": "string",
    "verification_method": "dns",
    "verification_token": "a38351cb-ede8-4dc8-9366-80d3a7042d9a",
    "verified": false,
    "whitelist": [
      "/private/path/"
    ]
  },
  "type": "single"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_scan_profiles|[object]|false|read-only|Valid scan profiles for the target.|
|assets|[[Asset](#schemaasset)]|false|read-only|Secondary domains that should be scanned|
|changed|[changed](#schemachanged)|false|read-only|Date time of the last change|
|changed_by|[ChangedBy](#schemachangedby)|false|read-only|User that last modified the object|
|connected_target|[connectedTarget](#schemaconnectedtarget)|false|none|Id of the connected target in a multi-environment targets.<br>|
|enabled|[enabled](#schemaenabled)|false|read-only|Certain operations (e.g. changing a target's `type`) may require going through billing. Until the change is reverted or the billing is settled.<br>|
|environment|[environment](#schemaenvironment)|false|none|Multi-environment targets can identify environments using this property.<br>|
|id|[id](#schemaid)|false|read-only|Object id.|
|labels|[string]|false|none|User labels for the scope. (This feature is currently only available for certain accounts,<br>please contact our support if you are interested in using it)<br>|
|name|[name](#schemaname)|false|none|Custom name for the resource|
|report_type|[reportType](#schemareporttype)|false|none|* default - default report, no extra information added<br>* owasp - adds table on OWASP Top 10 most critical web application risks<br>* pci - adds table on PCI requirements<br>|
|scan_profile|[scanProfile](#schemascanprofile)|false|none|* lightning - fast simple scan<br>* normal - default profile<br>* full - does everything the default profile does and adds boolean based<br>SQL injection tests<br>* safe - doesn't use any content changing methods (no POST, DELETE, etc)<br>and tries fewer payloads for SQL injection tests<br>|
|site|[Site](#schemasite)|false|none|Main resource associated with a target|
|type|[targetType](#schematargettype)|false|none|The type of a target determines what the limitations imposed on a<br>target.<br>* free - Every account is allowed to have 5 free targets, these targets<br>do not need to be verified but can only perform lightning<br>scans.<br>* single - Single environment targets need to be verified but are<br>allowed to run any type of scan allowed by the plan.<br>* multi - Multi environment targets are used when you want<br>to scan the same application in different environments.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|testing|
|environment|production|
|report_type|default|
|report_type|owasp|
|report_type|pci|
|scan_profile|safe|
|scan_profile|normal|
|scan_profile|full|
|scan_profile|lightning|
|type|free|
|type|single|
|type|multi|

<h2 id="tocS_TargetSimple">TargetSimple</h2>
<!-- backwards compatibility -->
<a id="schematargetsimple"></a>
<a id="schema_TargetSimple"></a>
<a id="tocStargetsimple"></a>
<a id="tocstargetsimple"></a>

```json
{
  "desc": "Object description",
  "id": "jMXUw-BE_2vd",
  "name": "Object name",
  "stack": [
    "nginx"
  ],
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desc|[desc](#schemadesc)|false|none|Custom description for the resource|
|id|[id](#schemaid)|false|read-only|Object id.|
|name|[name](#schemaname)|false|none|Custom name for the resource|
|stack|[Stack](#schemastack)|false|read-only|List of frameworks detected on this resource|
|url|string|false|none|Target's site URL|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "email": "example@probely.com",
  "id": "jMXUw-BE_2vd",
  "is_active": true,
  "is_admin": true,
  "is_billing_admin": true,
  "name": "Henrique Cimento",
  "title": "ceo"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed|[changed](#schemachanged)|false|read-only|Date time of the last change|
|changed_by|[ChangedBy](#schemachangedby)|false|read-only|User that last modified the object|
|email|[userEmail](#schemauseremail)|false|none|User's email (changing this resets the user's password and revokes existing tokens)|
|id|[id](#schemaid)|false|read-only|Object id.|
|is_active|[userIsActive](#schemauserisactive)|false|none|Deleted users are marked as not active|
|is_admin|[userIsAdmin](#schemauserisadmin)|false|read-only|Account admin|
|is_billing_admin|[userIsBillingAdmin](#schemauserisbillingadmin)|false|none|Billing contact for the account|
|name|[userName](#schemausername)|false|none|User's name|
|title|[userTitle](#schemausertitle)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|title|ceo|
|title|cto|
|title|cso|
|title|seceng|
|title|dev|
|title|devop|
|title|manager|
|title|other|

<h2 id="tocS_VulnerabilityDefinition">VulnerabilityDefinition</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilitydefinition"></a>
<a id="schema_VulnerabilityDefinition"></a>
<a id="tocSvulnerabilitydefinition"></a>
<a id="tocsvulnerabilitydefinition"></a>

```json
{
  "changed": "2018-01-31T16:32:17.238553Z",
  "desc": "Object description",
  "id": "jMXUw-BE_2vd",
  "name": "Object name"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed|[changed](#schemachanged)|false|read-only|Date time of the last change|
|desc|[desc](#schemadesc)|false|none|Custom description for the resource|
|id|[id](#schemaid)|false|read-only|Object id.|
|name|[name](#schemaname)|false|none|Custom name for the resource|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "api_version": "v1",
  "changed": "2018-01-31T16:32:17.238553Z",
  "changed_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "check_cert": true,
  "created": "2018-01-31T16:32:17.238553Z",
  "created_by": {
    "email": "example@probely.com",
    "id": "jMXUw-BE_2vd",
    "name": "Henrique Cimento"
  },
  "id": "jMXUw-BE_2vd",
  "name": "Object name",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_version|[webhookApiVersion](#schemawebhookapiversion)|false|none|API version for the webhook|
|changed|[changed](#schemachanged)|false|read-only|Date time of the last change|
|changed_by|[ChangedBy](#schemachangedby)|false|read-only|User that last modified the object|
|check_cert|[webhookCheckCert](#schemawebhookcheckcert)|false|none|Verify webhook URL HTTPS certificate|
|created|[changed](#schemachanged)|false|read-only|Date time of the last change|
|created_by|[ChangedBy](#schemachangedby)|false|read-only|User that last modified the object|
|id|[id](#schemaid)|false|read-only|Object id.|
|name|[name](#schemaname)|false|none|Custom name for the resource|
|url|[webhookURL](#schemawebhookurl)|true|none|URL to post events to (must be https)|

#### Enumerated Values

|Property|Value|
|---|---|
|api_version|v1|

<h2 id="tocS_WebhookList">WebhookList</h2>
<!-- backwards compatibility -->
<a id="schemawebhooklist"></a>
<a id="schema_WebhookList"></a>
<a id="tocSwebhooklist"></a>
<a id="tocswebhooklist"></a>

```json
[
  {
    "api_version": "v1",
    "changed": "2018-01-31T16:32:17.238553Z",
    "changed_by": {
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "name": "Henrique Cimento"
    },
    "check_cert": true,
    "created": "2018-01-31T16:32:17.238553Z",
    "created_by": {
      "email": "example@probely.com",
      "id": "jMXUw-BE_2vd",
      "name": "Henrique Cimento"
    },
    "id": "jMXUw-BE_2vd",
    "name": "Object name",
    "url": "string"
  }
]
```

<h2 id="tocS_Whitelist">Whitelist</h2>
<!-- backwards compatibility -->
<a id="schemawhitelist"></a>
<a id="schema_Whitelist"></a>
<a id="tocSwhitelist"></a>
<a id="tocswhitelist"></a>

```json
[
  "/private/path/"
]
```

<h2 id="tocS_accountAutoCollection">accountAutoCollection</h2>
<!-- backwards compatibility -->
<a id="schemaaccountautocollection"></a>
<a id="schema_accountAutoCollection"></a>
<a id="tocSaccountautocollection"></a>
<a id="tocsaccountautocollection"></a>

```json
"on"
```

Collection for the next billing period is autommatic/manual

<h2 id="tocS_accountBalance">accountBalance</h2>
<!-- backwards compatibility -->
<a id="schemaaccountbalance"></a>
<a id="schema_accountBalance"></a>
<a id="tocSaccountbalance"></a>
<a id="tocsaccountbalance"></a>

```json
0
```

Account balance in cents

<h2 id="tocS_accountNextBillingAt">accountNextBillingAt</h2>
<!-- backwards compatibility -->
<a id="schemaaccountnextbillingat"></a>
<a id="schema_accountNextBillingAt"></a>
<a id="tocSaccountnextbillingat"></a>
<a id="tocsaccountnextbillingat"></a>

```json
"2018-01-31T16:32:17.238553Z"
```

Date of next billing

<h2 id="tocS_accountPlanId">accountPlanId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountplanid"></a>
<a id="schema_accountPlanId"></a>
<a id="tocSaccountplanid"></a>
<a id="tocsaccountplanid"></a>

```json
"jMXUw-BE_2vd"
```

Current plan id

<h2 id="tocS_accountStatus">accountStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountstatus"></a>
<a id="schema_accountStatus"></a>
<a id="tocSaccountstatus"></a>
<a id="tocsaccountstatus"></a>

```json
"active"
```

* active - active subscription, either trial or paying
* trial_ended - trial ended and subscription was discontinued
* canceled - subscription canceled

<h2 id="tocS_address">address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
"string"
```

Address

<h2 id="tocS_basicAuthUsername">basicAuthUsername</h2>
<!-- backwards compatibility -->
<a id="schemabasicauthusername"></a>
<a id="schema_basicAuthUsername"></a>
<a id="tocSbasicauthusername"></a>
<a id="tocsbasicauthusername"></a>

```json
"probely"
```

Username

<h2 id="tocS_billingPeriod">billingPeriod</h2>
<!-- backwards compatibility -->
<a id="schemabillingperiod"></a>
<a id="schema_billingPeriod"></a>
<a id="tocSbillingperiod"></a>
<a id="tocsbillingperiod"></a>

```json
1
```

Number of of period unit between charges

<h2 id="tocS_billingPeriodUnit">billingPeriodUnit</h2>
<!-- backwards compatibility -->
<a id="schemabillingperiodunit"></a>
<a id="schema_billingPeriodUnit"></a>
<a id="tocSbillingperiodunit"></a>
<a id="tocsbillingperiodunit"></a>

```json
"month"
```

Unit of billing period

<h2 id="tocS_changed">changed</h2>
<!-- backwards compatibility -->
<a id="schemachanged"></a>
<a id="schema_changed"></a>
<a id="tocSchanged"></a>
<a id="tocschanged"></a>

```json
"2018-01-31T16:32:17.238553Z"
```

Date time of the last change

<h2 id="tocS_city">city</h2>
<!-- backwards compatibility -->
<a id="schemacity"></a>
<a id="schema_city"></a>
<a id="tocScity"></a>
<a id="tocscity"></a>

```json
"Munich"
```

City

<h2 id="tocS_connectedTarget">connectedTarget</h2>
<!-- backwards compatibility -->
<a id="schemaconnectedtarget"></a>
<a id="schema_connectedTarget"></a>
<a id="tocSconnectedtarget"></a>
<a id="tocsconnectedtarget"></a>

```json
"string"
```

Id of the connected target in a multi-environment targets.

<h2 id="tocS_country">country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
"DE"
```

ISO 3166 alpha-2 country code

<h2 id="tocS_coupons">coupons</h2>
<!-- backwards compatibility -->
<a id="schemacoupons"></a>
<a id="schema_coupons"></a>
<a id="tocScoupons"></a>
<a id="tocscoupons"></a>

```json
[
  "string"
]
```

Coupon ids

<h2 id="tocS_created">created</h2>
<!-- backwards compatibility -->
<a id="schemacreated"></a>
<a id="schema_created"></a>
<a id="tocScreated"></a>
<a id="tocscreated"></a>

```json
"2018-01-31T16:32:17.238553Z"
```

Date time of creation

<h2 id="tocS_currencyCode">currencyCode</h2>
<!-- backwards compatibility -->
<a id="schemacurrencycode"></a>
<a id="schema_currencyCode"></a>
<a id="tocScurrencycode"></a>
<a id="tocscurrencycode"></a>

```json
"EUR"
```

3 letter currency code

<h2 id="tocS_desc">desc</h2>
<!-- backwards compatibility -->
<a id="schemadesc"></a>
<a id="schema_desc"></a>
<a id="tocSdesc"></a>
<a id="tocsdesc"></a>

```json
"Object description"
```

Custom description for the resource

<h2 id="tocS_email">email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"string"
```

Contact email

<h2 id="tocS_emailToken">emailToken</h2>
<!-- backwards compatibility -->
<a id="schemaemailtoken"></a>
<a id="schema_emailToken"></a>
<a id="tocSemailtoken"></a>
<a id="tocsemailtoken"></a>

```json
"KJUUCY2VIVEHO5KJGVHQ====-PJZXGNKSGNQVSODFPJGQ====-GYZDKOI=-8065bfbf8a0192774f3f/"
```

Reset token received in the user email

<h2 id="tocS_enabled">enabled</h2>
<!-- backwards compatibility -->
<a id="schemaenabled"></a>
<a id="schema_enabled"></a>
<a id="tocSenabled"></a>
<a id="tocsenabled"></a>

```json
true
```

Certain operations (e.g. changing a target's `type`) may require going through billing. Until the change is reverted or the billing is settled.

<h2 id="tocS_environment">environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
"testing"
```

Multi-environment targets can identify environments using this property.

<h2 id="tocS_eventObjectType">eventObjectType</h2>
<!-- backwards compatibility -->
<a id="schemaeventobjecttype"></a>
<a id="schema_eventObjectType"></a>
<a id="tocSeventobjecttype"></a>
<a id="tocseventobjecttype"></a>

```json
"user"
```

Type of object in the event content.

<h2 id="tocS_eventOccurredAt">eventOccurredAt</h2>
<!-- backwards compatibility -->
<a id="schemaeventoccurredat"></a>
<a id="schema_eventOccurredAt"></a>
<a id="tocSeventoccurredat"></a>
<a id="tocseventoccurredat"></a>

```json
"2018-01-31T16:32:17.238553Z"
```

Date time of when the event occurred

<h2 id="tocS_eventType">eventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_eventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"scan_started"
```

Event type:
- `user_created` new user added to account
- `user_deleted` user deleted from account
- `target_created` new target added to account
- `target_deleted` target deleted from account
- `target_verified` target ownership verified
- `target_verification_failed` target ownership verification failed
- `scan_started` scan started on target
- `scan_canceled` scan on target canceled
- `scan_completed` scan finished with successfuly
- `scan_failed` scan finished unsuccessfuly
- `finding_detected` new finding detected (not found before)
- `finding_fixed` finding was fixed

<h2 id="tocS_findingCVSSScore">findingCVSSScore</h2>
<!-- backwards compatibility -->
<a id="schemafindingcvssscore"></a>
<a id="schema_findingCVSSScore"></a>
<a id="tocSfindingcvssscore"></a>
<a id="tocsfindingcvssscore"></a>

```json
6.5
```

CVSS score

<h2 id="tocS_findingCVSSVector">findingCVSSVector</h2>
<!-- backwards compatibility -->
<a id="schemafindingcvssvector"></a>
<a id="schema_findingCVSSVector"></a>
<a id="tocSfindingcvssvector"></a>
<a id="tocsfindingcvssvector"></a>

```json
"CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N"
```

CVSS vector

<h2 id="tocS_findingInsertionPoint">findingInsertionPoint</h2>
<!-- backwards compatibility -->
<a id="schemafindinginsertionpoint"></a>
<a id="schema_findingInsertionPoint"></a>
<a id="tocSfindinginsertionpoint"></a>
<a id="tocsfindinginsertionpoint"></a>

```json
"cookie"
```

An insertion point is the place in the HTTP request where the
malicious payload is injected to exploit the vulnerability.
  * cookie - Payload injected into the value of an HTTP cookie
  * header - Payload injected into the header of an HTTP request
  * parameter - Payload injected into the value of a query string
  parameter
  * arbitrary_url_param - Payload injected into the value of an
  arbitrarily added query string parameter
  * url_filename - Payload injected into the URL filename part
  * url_folder - Payload injected into the URL folder part
  * multipart_parameter - Payload is inserted into the value of a
  parameter attribute within a multi-part message body (such as
  the name of an uploaded file).
  * <empty> - No payload to inject.

<h2 id="tocS_findingSeverity">findingSeverity</h2>
<!-- backwards compatibility -->
<a id="schemafindingseverity"></a>
<a id="schema_findingSeverity"></a>
<a id="tocSfindingseverity"></a>
<a id="tocsfindingseverity"></a>

```json
10
```

Severity, how serious the issue is considered:
  * 10 - low
  * 20 - medium
  * 30 - high

<h2 id="tocS_findingState">findingState</h2>
<!-- backwards compatibility -->
<a id="schemafindingstate"></a>
<a id="schema_findingState"></a>
<a id="tocSfindingstate"></a>
<a id="tocsfindingstate"></a>

```json
"notfixed"
```

Finding state:
  * notfixed - Issue can still be exploited
  * invalid - Issue determined to be a false positive
  * accepted - Issue will not be solved and the risk was accepted
  * fixed - No problem here anymore

<h2 id="tocS_firstName">firstName</h2>
<!-- backwards compatibility -->
<a id="schemafirstname"></a>
<a id="schema_firstName"></a>
<a id="tocSfirstname"></a>
<a id="tocsfirstname"></a>

```json
"string"
```

First name

<h2 id="tocS_formLoginCheckPattern">formLoginCheckPattern</h2>
<!-- backwards compatibility -->
<a id="schemaformlogincheckpattern"></a>
<a id="schema_formLoginCheckPattern"></a>
<a id="tocSformlogincheckpattern"></a>
<a id="tocsformlogincheckpattern"></a>

```json
""
```

Pattern to check successful authentication (not used)

<h2 id="tocS_formLoginUrl">formLoginUrl</h2>
<!-- backwards compatibility -->
<a id="schemaformloginurl"></a>
<a id="schema_formLoginUrl"></a>
<a id="tocSformloginurl"></a>
<a id="tocsformloginurl"></a>

```json
"https://app.probely.com/"
```

URL for the form login

<h2 id="tocS_frameworkNames">frameworkNames</h2>
<!-- backwards compatibility -->
<a id="schemaframeworknames"></a>
<a id="schema_frameworkNames"></a>
<a id="tocSframeworknames"></a>
<a id="tocsframeworknames"></a>

```json
"nginx"
```

Framework/Software name.

<h2 id="tocS_freeTargetQuantity">freeTargetQuantity</h2>
<!-- backwards compatibility -->
<a id="schemafreetargetquantity"></a>
<a id="schema_freeTargetQuantity"></a>
<a id="tocSfreetargetquantity"></a>
<a id="tocsfreetargetquantity"></a>

```json
3
```

Number of free targets

<h2 id="tocS_hasBasicAuth">hasBasicAuth</h2>
<!-- backwards compatibility -->
<a id="schemahasbasicauth"></a>
<a id="schema_hasBasicAuth"></a>
<a id="tocShasbasicauth"></a>
<a id="tocshasbasicauth"></a>

```json
true
```

Use basic authentication in scan

<h2 id="tocS_hasFormLogin">hasFormLogin</h2>
<!-- backwards compatibility -->
<a id="schemahasformlogin"></a>
<a id="schema_hasFormLogin"></a>
<a id="tocShasformlogin"></a>
<a id="tocshasformlogin"></a>

```json
true
```

Does the resource use form login

<h2 id="tocS_hasUsedTrial">hasUsedTrial</h2>
<!-- backwards compatibility -->
<a id="schemahasusedtrial"></a>
<a id="schema_hasUsedTrial"></a>
<a id="tocShasusedtrial"></a>
<a id="tocshasusedtrial"></a>

```json
true
```

Has account used up it's trial

<h2 id="tocS_host">host</h2>
<!-- backwards compatibility -->
<a id="schemahost"></a>
<a id="schema_host"></a>
<a id="tocShost"></a>
<a id="tocshost"></a>

```json
"string"
```

Fully qualified hostname

<h2 id="tocS_id">id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"jMXUw-BE_2vd"
```

Object id.

<h2 id="tocS_include">include</h2>
<!-- backwards compatibility -->
<a id="schemainclude"></a>
<a id="schema_include"></a>
<a id="tocSinclude"></a>
<a id="tocsinclude"></a>

```json
true
```

Use this asset in scans.

<h2 id="tocS_jira_allow_jira">jira_allow_jira</h2>
<!-- backwards compatibility -->
<a id="schemajira_allow_jira"></a>
<a id="schema_jira_allow_jira"></a>
<a id="tocSjira_allow_jira"></a>
<a id="tocsjira_allow_jira"></a>

```json
true
```

Is this target allowed Jira integration.

<h2 id="tocS_jira_auto_sync">jira_auto_sync</h2>
<!-- backwards compatibility -->
<a id="schemajira_auto_sync"></a>
<a id="schema_jira_auto_sync"></a>
<a id="tocSjira_auto_sync"></a>
<a id="tocsjira_auto_sync"></a>

```json
true
```

Automatically synchronise all findings to Jira issues.

<h2 id="tocS_jira_issue_id">jira_issue_id</h2>
<!-- backwards compatibility -->
<a id="schemajira_issue_id"></a>
<a id="schema_jira_issue_id"></a>
<a id="tocSjira_issue_id"></a>
<a id="tocsjira_issue_id"></a>

```json
"string"
```

Jira issue id connected to this finding

<h2 id="tocS_jira_issue_type_id">jira_issue_type_id</h2>
<!-- backwards compatibility -->
<a id="schemajira_issue_type_id"></a>
<a id="schema_jira_issue_type_id"></a>
<a id="tocSjira_issue_type_id"></a>
<a id="tocsjira_issue_type_id"></a>

```json
"string"
```

Id of the issue type to be created in Jira.

<h2 id="tocS_jira_priority_mapping">jira_priority_mapping</h2>
<!-- backwards compatibility -->
<a id="schemajira_priority_mapping"></a>
<a id="schema_jira_priority_mapping"></a>
<a id="tocSjira_priority_mapping"></a>
<a id="tocsjira_priority_mapping"></a>

```json
{
  "10": "string",
  "20": "string",
  "30": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|10|string|false|none|Id of the Jira priority that low severity findings should be mapped to.|
|20|string|false|none|Id of the Jira priority that medium severity findings should be mapped to.|
|30|string|false|none|Id of the Jira status that high severity findings should be mapped to.|

<h2 id="tocS_jira_project_id">jira_project_id</h2>
<!-- backwards compatibility -->
<a id="schemajira_project_id"></a>
<a id="schema_jira_project_id"></a>
<a id="tocSjira_project_id"></a>
<a id="tocsjira_project_id"></a>

```json
"string"
```

Id of the Jira project where issues for this target will be created.

<h2 id="tocS_jira_selective_sync">jira_selective_sync</h2>
<!-- backwards compatibility -->
<a id="schemajira_selective_sync"></a>
<a id="schema_jira_selective_sync"></a>
<a id="tocSjira_selective_sync"></a>
<a id="tocsjira_selective_sync"></a>

```json
true
```

Selective sync active for this finding.

<h2 id="tocS_jira_status_mapping">jira_status_mapping</h2>
<!-- backwards compatibility -->
<a id="schemajira_status_mapping"></a>
<a id="schema_jira_status_mapping"></a>
<a id="tocSjira_status_mapping"></a>
<a id="tocsjira_status_mapping"></a>

```json
{
  "accepted": "string",
  "fixed": "string",
  "invalid": "string",
  "notfixed": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accepted|string|false|none|Id of the Jira status that `accepted` findings should be mapped to.|
|fixed|string|false|none|Id of the Jira status that `fixed` findings should be mapped to.|
|invalid|string|false|none|Id of the Jira status that `invalid` findings should be mapped to.|
|notfixed|string|false|none|Id of the Jira status that `notfixed` findings should be mapped to.|

<h2 id="tocS_lastName">lastName</h2>
<!-- backwards compatibility -->
<a id="schemalastname"></a>
<a id="schema_lastName"></a>
<a id="tocSlastname"></a>
<a id="tocslastname"></a>

```json
"string"
```

Last name

<h2 id="tocS_method">method</h2>
<!-- backwards compatibility -->
<a id="schemamethod"></a>
<a id="schema_method"></a>
<a id="tocSmethod"></a>
<a id="tocsmethod"></a>

```json
"GET"
```

HTTP method

<h2 id="tocS_name">name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"Object name"
```

Custom name for the resource

<h2 id="tocS_paginationCount">paginationCount</h2>
<!-- backwards compatibility -->
<a id="schemapaginationcount"></a>
<a id="schema_paginationCount"></a>
<a id="tocSpaginationcount"></a>
<a id="tocspaginationcount"></a>

```json
6
```

Number of objects in the response.

<h2 id="tocS_paginationLength">paginationLength</h2>
<!-- backwards compatibility -->
<a id="schemapaginationlength"></a>
<a id="schema_paginationLength"></a>
<a id="tocSpaginationlength"></a>
<a id="tocspaginationlength"></a>

```json
10
```

Number of objects per page.

<h2 id="tocS_paginationPage">paginationPage</h2>
<!-- backwards compatibility -->
<a id="schemapaginationpage"></a>
<a id="schema_paginationPage"></a>
<a id="tocSpaginationpage"></a>
<a id="tocspaginationpage"></a>

```json
1
```

Current page.

<h2 id="tocS_paginationPageTotal">paginationPageTotal</h2>
<!-- backwards compatibility -->
<a id="schemapaginationpagetotal"></a>
<a id="schema_paginationPageTotal"></a>
<a id="tocSpaginationpagetotal"></a>
<a id="tocspaginationpagetotal"></a>

```json
1
```

Number of pages.

<h2 id="tocS_password">password</h2>
<!-- backwards compatibility -->
<a id="schemapassword"></a>
<a id="schema_password"></a>
<a id="tocSpassword"></a>
<a id="tocspassword"></a>

```json
"dolphins"
```

<h2 id="tocS_planAllowedScanProfiles">planAllowedScanProfiles</h2>
<!-- backwards compatibility -->
<a id="schemaplanallowedscanprofiles"></a>
<a id="schema_planAllowedScanProfiles"></a>
<a id="tocSplanallowedscanprofiles"></a>
<a id="tocsplanallowedscanprofiles"></a>

```json
[
  "normal"
]
```

List of scan profiles allowed by the plan

<h2 id="tocS_planChargeModel">planChargeModel</h2>
<!-- backwards compatibility -->
<a id="schemaplanchargemodel"></a>
<a id="schema_planChargeModel"></a>
<a id="tocSplanchargemodel"></a>
<a id="tocsplanchargemodel"></a>

```json
"per_unit"
```

* per_unit - each target is paid independently
* flat_fee - targets are paid as a pool

<h2 id="tocS_planIsTrial">planIsTrial</h2>
<!-- backwards compatibility -->
<a id="schemaplanistrial"></a>
<a id="schema_planIsTrial"></a>
<a id="tocSplanistrial"></a>
<a id="tocsplanistrial"></a>

```json
false
```

Is this a trial plan

<h2 id="tocS_planTargetQuantity">planTargetQuantity</h2>
<!-- backwards compatibility -->
<a id="schemaplantargetquantity"></a>
<a id="schema_planTargetQuantity"></a>
<a id="tocSplantargetquantity"></a>
<a id="tocsplantargetquantity"></a>

```json
3
```

Number of subscribed targets

<h2 id="tocS_poolSize">poolSize</h2>
<!-- backwards compatibility -->
<a id="schemapoolsize"></a>
<a id="schema_poolSize"></a>
<a id="tocSpoolsize"></a>
<a id="tocspoolsize"></a>

```json
5
```

Maximum number of subscribed target for pool plans

<h2 id="tocS_price">price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
5000
```

Price in cents

<h2 id="tocS_recurrence">recurrence</h2>
<!-- backwards compatibility -->
<a id="schemarecurrence"></a>
<a id="schema_recurrence"></a>
<a id="tocSrecurrence"></a>
<a id="tocsrecurrence"></a>

```json
"d"
```

Scan recurrence:
  * d - daily
  * w - weekly
  * m - monthly
  * q - quarterly
  * '' - no recurrence

<h2 id="tocS_registrationNumber">registrationNumber</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationnumber"></a>
<a id="schema_registrationNumber"></a>
<a id="tocSregistrationnumber"></a>
<a id="tocsregistrationnumber"></a>

```json
"string"
```

Company registration number

<h2 id="tocS_reportType">reportType</h2>
<!-- backwards compatibility -->
<a id="schemareporttype"></a>
<a id="schema_reportType"></a>
<a id="tocSreporttype"></a>
<a id="tocsreporttype"></a>

```json
"default"
```

* default - default report, no extra information added
* owasp - adds table on OWASP Top 10 most critical web application risks
* pci - adds table on PCI requirements

<h2 id="tocS_scanCompleted">scanCompleted</h2>
<!-- backwards compatibility -->
<a id="schemascancompleted"></a>
<a id="schema_scanCompleted"></a>
<a id="tocSscancompleted"></a>
<a id="tocsscancompleted"></a>

```json
"2018-01-31T16:32:17.238553Z"
```

Date time of scan completion

<h2 id="tocS_scanDateTime">scanDateTime</h2>
<!-- backwards compatibility -->
<a id="schemascandatetime"></a>
<a id="schema_scanDateTime"></a>
<a id="tocSscandatetime"></a>
<a id="tocsscandatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

Date time of next scan

<h2 id="tocS_scanProfile">scanProfile</h2>
<!-- backwards compatibility -->
<a id="schemascanprofile"></a>
<a id="schema_scanProfile"></a>
<a id="tocSscanprofile"></a>
<a id="tocsscanprofile"></a>

```json
"normal"
```

* lightning - fast simple scan
* normal - default profile
* full - does everything the default profile does and adds boolean based
SQL injection tests
* safe - doesn't use any content changing methods (no POST, DELETE, etc)
and tries fewer payloads for SQL injection tests

<h2 id="tocS_scanStarted">scanStarted</h2>
<!-- backwards compatibility -->
<a id="schemascanstarted"></a>
<a id="schema_scanStarted"></a>
<a id="tocSscanstarted"></a>
<a id="tocsscanstarted"></a>

```json
"2018-01-31T16:32:17.238553Z"
```

Date time of scan start

<h2 id="tocS_scanStatus">scanStatus</h2>
<!-- backwards compatibility -->
<a id="schemascanstatus"></a>
<a id="schema_scanStatus"></a>
<a id="tocSscanstatus"></a>
<a id="tocsscanstatus"></a>

```json
"queued"
```

Current scan status:
  * queued - Scan queued to start
  * started - Scan currently running
  * under_review - Scan is complete but we need to verify some findings
  * completed - Scan complete
  * completed_with_errors - Scan complete with error(s) in non essential modules
  * failed - Something went seriously wrong during the scan
  * canceled - Scan was canceled
  * canceling - Stopping scan

<h2 id="tocS_siteHost">siteHost</h2>
<!-- backwards compatibility -->
<a id="schemasitehost"></a>
<a id="schema_siteHost"></a>
<a id="tocSsitehost"></a>
<a id="tocssitehost"></a>

```json
"app.probely.com"
```

Site host

<h2 id="tocS_siteUrl">siteUrl</h2>
<!-- backwards compatibility -->
<a id="schemasiteurl"></a>
<a id="schema_siteUrl"></a>
<a id="tocSsiteurl"></a>
<a id="tocssiteurl"></a>

```json
"https://app.probely.com"
```

Site URL, it should include the path if the site is not located at the root. This URL can only be set once.

<h2 id="tocS_targetIds">targetIds</h2>
<!-- backwards compatibility -->
<a id="schematargetids"></a>
<a id="schema_targetIds"></a>
<a id="tocStargetids"></a>
<a id="tocstargetids"></a>

```json
[
  "jMXUw-BE_2vd"
]
```

<h2 id="tocS_targetType">targetType</h2>
<!-- backwards compatibility -->
<a id="schematargettype"></a>
<a id="schema_targetType"></a>
<a id="tocStargettype"></a>
<a id="tocstargettype"></a>

```json
"single"
```

The type of a target determines what the limitations imposed on a
target.
* free - Every account is allowed to have 5 free targets, these targets
do not need to be verified but can only perform lightning
scans.
* single - Single environment targets need to be verified but are
allowed to run any type of scan allowed by the plan.
* multi - Multi environment targets are used when you want
to scan the same application in different environments.

<h2 id="tocS_token">token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk"
```

Authentication token

<h2 id="tocS_tokenBody">tokenBody</h2>
<!-- backwards compatibility -->
<a id="schematokenbody"></a>
<a id="schema_tokenBody"></a>
<a id="tocStokenbody"></a>
<a id="tocstokenbody"></a>

```json
"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk"
```

Authentication token

<h2 id="tocS_trialEnd">trialEnd</h2>
<!-- backwards compatibility -->
<a id="schematrialend"></a>
<a id="schema_trialEnd"></a>
<a id="tocStrialend"></a>
<a id="tocstrialend"></a>

```json
"2018-01-31T16:32:52.226652Z"
```

Trial termination date

<h2 id="tocS_ttl">ttl</h2>
<!-- backwards compatibility -->
<a id="schemattl"></a>
<a id="schema_ttl"></a>
<a id="tocSttl"></a>
<a id="tocsttl"></a>

```json
31536000
```

Token time to live in seconds

<h2 id="tocS_userEmail">userEmail</h2>
<!-- backwards compatibility -->
<a id="schemauseremail"></a>
<a id="schema_userEmail"></a>
<a id="tocSuseremail"></a>
<a id="tocsuseremail"></a>

```json
"example@probely.com"
```

User's email (changing this resets the user's password and revokes existing tokens)

<h2 id="tocS_userId">userId</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_userId"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"jMXUw-BE_2vd"
```

User's id

<h2 id="tocS_userIsActive">userIsActive</h2>
<!-- backwards compatibility -->
<a id="schemauserisactive"></a>
<a id="schema_userIsActive"></a>
<a id="tocSuserisactive"></a>
<a id="tocsuserisactive"></a>

```json
true
```

Deleted users are marked as not active

<h2 id="tocS_userIsAdmin">userIsAdmin</h2>
<!-- backwards compatibility -->
<a id="schemauserisadmin"></a>
<a id="schema_userIsAdmin"></a>
<a id="tocSuserisadmin"></a>
<a id="tocsuserisadmin"></a>

```json
true
```

Account admin

<h2 id="tocS_userIsBillingAdmin">userIsBillingAdmin</h2>
<!-- backwards compatibility -->
<a id="schemauserisbillingadmin"></a>
<a id="schema_userIsBillingAdmin"></a>
<a id="tocSuserisbillingadmin"></a>
<a id="tocsuserisbillingadmin"></a>

```json
true
```

Billing contact for the account

<h2 id="tocS_userName">userName</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_userName"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
"Henrique Cimento"
```

User's name

<h2 id="tocS_userTitle">userTitle</h2>
<!-- backwards compatibility -->
<a id="schemausertitle"></a>
<a id="schema_userTitle"></a>
<a id="tocSusertitle"></a>
<a id="tocsusertitle"></a>

```json
"ceo"
```

<h2 id="tocS_username">username</h2>
<!-- backwards compatibility -->
<a id="schemausername-1"></a>
<a id="schema_username"></a>
<a id="tocSusername-1"></a>
<a id="tocsusername-1"></a>

```json
"example@probely.com"
```

<h2 id="tocS_vat">vat</h2>
<!-- backwards compatibility -->
<a id="schemavat"></a>
<a id="schema_vat"></a>
<a id="tocSvat"></a>
<a id="tocsvat"></a>

```json
"string"
```

Company VAT registration number

<h2 id="tocS_verificationDate">verificationDate</h2>
<!-- backwards compatibility -->
<a id="schemaverificationdate"></a>
<a id="schema_verificationDate"></a>
<a id="tocSverificationdate"></a>
<a id="tocsverificationdate"></a>

```json
"2018-01-31T16:32:52.226652Z"
```

Verification date time

<h2 id="tocS_verificationLastError">verificationLastError</h2>
<!-- backwards compatibility -->
<a id="schemaverificationlasterror"></a>
<a id="schema_verificationLastError"></a>
<a id="tocSverificationlasterror"></a>
<a id="tocsverificationlasterror"></a>

```json
"string"
```

Reason for last verification failure.

<h2 id="tocS_verificationMethod">verificationMethod</h2>
<!-- backwards compatibility -->
<a id="schemaverificationmethod"></a>
<a id="schema_verificationMethod"></a>
<a id="tocSverificationmethod"></a>
<a id="tocsverificationmethod"></a>

```json
"dns"
```

Type of verification:
* dns - we look or a TXT record on the host you registered containing
`Probely=<verification_token>`
* file - on the root of the path you registered we look for a file
named `<verification token>` containing `Probely`.

<h2 id="tocS_verificationToken">verificationToken</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtoken"></a>
<a id="schema_verificationToken"></a>
<a id="tocSverificationtoken"></a>
<a id="tocsverificationtoken"></a>

```json
"a38351cb-ede8-4dc8-9366-80d3a7042d9a"
```

Token used to verify

<h2 id="tocS_verificationType">verificationType</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtype"></a>
<a id="schema_verificationType"></a>
<a id="tocSverificationtype"></a>
<a id="tocsverificationtype"></a>

```json
"dns"
```

Type of verification:
* dns - we look or a TXT record on the host you registered containing
`Probely=<verification_token>`
* file - on the root of the path you registered we look for a file
named `<verification token>` containing `Probely`.

<h2 id="tocS_verified">verified</h2>
<!-- backwards compatibility -->
<a id="schemaverified"></a>
<a id="schema_verified"></a>
<a id="tocSverified"></a>
<a id="tocsverified"></a>

```json
false
```

Has resource ownership been verified

<h2 id="tocS_webhookApiVersion">webhookApiVersion</h2>
<!-- backwards compatibility -->
<a id="schemawebhookapiversion"></a>
<a id="schema_webhookApiVersion"></a>
<a id="tocSwebhookapiversion"></a>
<a id="tocswebhookapiversion"></a>

```json
"v1"
```

API version for the webhook

<h2 id="tocS_webhookCheckCert">webhookCheckCert</h2>
<!-- backwards compatibility -->
<a id="schemawebhookcheckcert"></a>
<a id="schema_webhookCheckCert"></a>
<a id="tocSwebhookcheckcert"></a>
<a id="tocswebhookcheckcert"></a>

```json
true
```

Verify webhook URL HTTPS certificate

<h2 id="tocS_webhookURL">webhookURL</h2>
<!-- backwards compatibility -->
<a id="schemawebhookurl"></a>
<a id="schema_webhookURL"></a>
<a id="tocSwebhookurl"></a>
<a id="tocswebhookurl"></a>

```json
"string"
```

URL to post events to (must be https)

<h2 id="tocS_zipCode">zipCode</h2>
<!-- backwards compatibility -->
<a id="schemazipcode"></a>
<a id="schema_zipCode"></a>
<a id="tocSzipcode"></a>
<a id="tocszipcode"></a>

```json
"string"
```

Address ZIP code
