<h1 id="hetzner-cloud-api">Hetzner Cloud API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the official API documentation for the Public Hetzner Cloud.

## Introduction

The Hetzner Cloud API operates over HTTPS and uses JSON as its data format. The API is a RESTful API and utilizes HTTP methods and HTTP status codes to specify requests and responses.

As an alternative to working directly with our API you may also consider to use:
* Our CLI program [hcloud](https://github.com/hetznercloud/cli)
* Our [library for Go](https://github.com/hetznercloud/hcloud-go)
* Our [library for Python](https://github.com/hetznercloud/hcloud-python)

Also you can find a [list of libraries, tools, and integrations on GitHub](https://github.com/hetznercloud/awesome-hcloud).

If you are developing integrations based on our API and your product is Open Source you may be eligible for a free one time €50 (excl. VAT) credit on your account. Please contact us via the the support page on your Cloud Console and let us know the following:
* The type of integration you would like to develop
* Link to the GitHub repo you will use for the Project
* Link to some other Open Source work you have already done (if you have done so)

## Getting Started
To get started using the API you first need an API token. Sign in into the [Hetzner Cloud Console](https://console.hetzner.cloud/) choose a Project, go to `Security` → `API Tokens`, and generate a new token. Make sure to copy the token because it won’t be shown to you again. A token is bound to a Project, to interact with the API of another Project you have to create a new token inside the Project. Let’s say your new token is `jEheVytlAoFl7F8MqUQ7jAo2hOXASztX`.

You’re now ready to do your first request against the API. To get a list of all Servers in your Project, issue the example request on the right side using [curl](https://curl.haxx.se/).

Make sure to replace the token in the example command with the token you have just created. Since your Project probably does not contain any Servers yet, the example response will look like the response on the right side. We will almost always provide a resource root like `servers` inside the example response. A response can also contain a `meta` object with information like [Pagination](https://docs.hetzner.cloud/#overview-pagination).

**Example Request**
```bash
curl -H "Authorization: Bearer jEheVytlAoFl7F8MqUQ7jAo2hOXASztX" \
    https://api.hetzner.cloud/v1/servers
```

**Example Response**
```json
{
    "servers": [],
    "meta": {
        "pagination": {
            "page": 1,
            "per_page": 25,
            "previous_page": null,
            "next_page": null,
            "last_page": 1,
            "total_entries": 0
        }
    }
}
```

## Authentication
All requests to the Hetzner Cloud API must be authenticated via a API token. Include your secret API token in every request you send to the API with the `Authorization` HTTP header.

To create a new API token for your Project, switch into the [Hetzner Cloud Console](https://console.hetzner.cloud/) choose a Project, go to `Security` → `API Tokens`, and generate a new token.

**Example Authorization header**
```html
Authorization: Bearer LRK9DAWQ1ZAEFSrCNEEzLCUwhYX1U3g7wMg4dTlkkDC96fyDuyJ39nVbVjCKSDfj
```

## Errors
Errors are indicated by HTTP status codes. Further, the response of the request which generated the error contains an error code, an error message, and, optionally, error details. The schema of the error details object depends on the error code.

The error response contains the following keys:

| Keys      | Meaning                                                               |
|-----------|-----------------------------------------------------------------------|
| `code`    | Short string indicating the type of error (machine-parsable)          |
| `message` | Textual description on what has gone wrong                            |
| `details` | An object providing for details on the error (schema depends on code) |

**Example response**
```json
{
  "error": {
    "code": "invalid_input",
    "message": "invalid input in field 'broken_field': is too long",
    "details": {
      "fields": [
        {
          "name": "broken_field",
          "messages": ["is too long"]
        }
      ]
    }
  }
}
```

### Error Codes

| Code                      | Description                                                                      |
|---------------------------|----------------------------------------------------------------------------------|
| `forbidden`               | Insufficient permissions for this request                                        |
| `invalid_input`           | Error while parsing or processing the input                                      |
| `json_error`              | Invalid JSON input in your request                                               |
| `locked`                  | The item you are trying to access is locked (there is already an Action running) |
| `not_found`               | Entity not found                                                                 |
| `rate_limit_exceeded`     | Error when sending too many requests                                             |
| `resource_limit_exceeded` | Error when exceeding the maximum quantity of a resource for an account           |
| `resource_unavailable`    | The requested resource is currently unavailable                                  |
| `service_error`           | Error within a service                                                           |
| `uniqueness_error`        | One or more of the objects fields must be unique                                 |
| `protected`               | The Action you are trying to start is protected for this resource                |
| `maintenance`             | Cannot perform operation due to maintenance                                      |
| `conflict`                | The resource has changed during the request, please retry                        |
| `unsupported_error`       | The corresponding resource does not support the Action                           |
| `token_readonly`          | The token is only allowed to perform GET requests                                |
| `unavailable`             | A service or product is currently not available                                  |

**invalid_input**
```json
{
  "error": {
    "code": "invalid_input",
    "message": "invalid input in field 'broken_field': is too long",
    "details": {
      "fields": [
        {
          "name": "broken_field",
          "messages": ["is too long"]
        }
      ]
    }
  }
}
```

**uniqueness_error**
```json
{
  "error": {
    "code": "uniqueness_error",
    "message": "SSH key with the same fingerprint already exists",
    "details": {
      "fields": [
        {
          "name": "public_key"
        }
      ]
    }
  }
}
```

**resource_limit_exceeded**
```json
{
  "error": {
    "code": "resource_limit_exceeded",
    "message": "project limit exceeded",
    "details": {
      "limits": [
        {
          "name": "project_limit"
        }
      ]
    }
  }
}
```

## Labels
Labels are `key/value` pairs that can be attached to all resources.

Valid label keys have two segments: an optional prefix and name, separated by a slash (`/`). The name segment is required and must be a string of 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (`.`), not longer than 253 characters in total, followed by a slash (`/`).

Valid label values must be a string of 63 characters or less and must be empty or begin and end with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between.

The `hetzner.cloud/` prefix is reserved and cannot be used.

**Example Labels**
```json
{
  "labels": {
    "environment":"development",
    "service":"backend",
    "example.com/my":"label",
    "just-a-key":""
  }
}
```

## Label Selector
For resources with labels, you can filter resources by their labels using the label selector query language.

| Expression           | Meaning                                                             |
|----------------------|---------------------------------------------------------------------|
| `k==v` / `k=v`       | Value of key `k` does equal value `v`                               |
| `k!=v`               | Value of key `k` does not equal value `v`                           |
| `k`                  | Key `k` is present                                                  |
| `!k`                 | Key `k` is not present                                              |
| `k in (v1,v2,v3)`    | Value of key `k` is `v1`, `v2`, or `v3`                             |
| `k notin (v1,v2,v3)` | Value of key `k` is neither `v1`, nor `v2`, nor `v3`                |
| `k1==v,!k2`          | Value of key `k1` is `v` and key `k2` is not present                |

### Examples
* Returns all resources that have a `env=production` label and that don't have a `type=database` label:

  `env=production,type!=database`
* Returns all resources that have a `env=testing` or `env=staging` label:

    `env in (testing,staging)`
* Returns all resources that don't have a `type` label:

    `!type`

## Pagination
Responses which return multiple items support pagination. If they do support pagination, it can be controlled with following query string parameters:

* A `page` parameter specifies the page to fetch. The number of the first page is 1.
* A `per_page` parameter specifies the number of items returned per page. The default value is 25, the maximum value is 50 except otherwise specified in the documentation.

Responses contain a `Link` header with pagination information.

Additionally, if the response body is JSON and the root object is an object, that object has a `pagination` object inside the `meta` object with pagination information:

**Example Pagination**
```json
{
    "servers": [...],
    "meta": {
        "pagination": {
            "page": 2,
            "per_page": 25,
            "previous_page": 1,
            "next_page": 3,
            "last_page": 4,
            "total_entries": 100
        }
    }
}
```

The keys `previous_page`, `next_page`, `last_page`, and `total_entries` may be `null` when on the first page, last page, or when the total number of entries is unknown.

**Example Pagination Link header**
```bash
Link: <https://api.hetzner.cloud/v1/actions?page=2&per_page=5>; rel="prev",
      <https://api.hetzner.cloud/v1/actions?page=4&per_page=5>; rel="next",
      <https://api.hetzner.cloud/v1/actions?page=6&per_page=5>; rel="last"
```

Line breaks have been added for display purposes only and responses may only contain some of the above `rel` values.

## Rate Limiting
All requests, whether they are authenticated or not, are subject to rate limiting. If you have reached your limit, your requests will be handled with a `429 Too Many Requests` error. Burst requests are allowed. Responses contain serveral headers which provide information about your current rate limit status.

* The `RateLimit-Limit` header contains the total number of requests you can perform per hour.
* The `RateLimit-Remaining` header contains the number of requests remaining in the current rate limit time frame.
* The `RateLimit-Reset` header contains a UNIX timestamp of the point in time when your rate limit will have recovered and you will have the full number of requests available again.

The default limit is 3600 requests per hour and per Project. The number of remaining requests increases gradually. For example, when your limit is 3600 requests per hour, the number of remaining requests will increase by 1 every second.

## Server Metadata
Your Server can discover metadata about itself by doing a HTTP request to specific URLs. The following data is available:

| Data              | Format | Contents                                                     |
|-------------------|--------|--------------------------------------------------------------|
| hostname          | text   | Name of the Server as set in the api                         |
| instance-id       | number | ID of the server                                             |
| public-ipv4       | text   | Primary public IPv4 address                                  |
| private-networks  | yaml   | Details about the private networks the Server is attached to |
| availability-zone | text   | Name of the availability zone that Server runs in            |
| region            | text   | Network zone, e.g. eu-central                                |

**Example: Summary**
```bash
$ curl http://169.254.169.254/hetzner/v1/metadata
```

```yaml
availability-zone: hel1-dc2
hostname: my-server
instance-id: 42
public-ipv4: 1.2.3.4
region: eu-central
```

**Example: Hostname**
```bash
$ curl http://169.254.169.254/hetzner/v1/metadata/hostname
my-server
```

**Example: Instance ID**
```bash
$ curl http://169.254.169.254/hetzner/v1/metadata/instance-id
42
```

**Example: Public IPv4**
```bash
$ curl http://169.254.169.254/hetzner/v1/metadata/public-ipv4
1.2.3.4
```

**Example: Private Networks**
```bash
$ curl http://169.254.169.254/hetzner/v1/metadata/private-networks
```

```json
- ip: 10.0.0.2
  alias_ips: [10.0.0.3, 10.0.0.4]
  interface_num: 1
  mac_address: 86:00:00:2a:7d:e0
  network_id: 1234
  network_name: nw-test1
  network: 10.0.0.0/8
  subnet: 10.0.0.0/24
  gateway: 10.0.0.1
- ip: 192.168.0.2
  alias_ips: []
  interface_num: 2
  mac_address: 86:00:00:2a:7d:e1
  network_id: 4321
  network_name: nw-test2
  network: 192.168.0.0/16
  subnet: 192.168.0.0/24
  gateway: 192.168.0.1
```

**Example: Availability Zone**
```bash
$ curl http://169.254.169.254/hetzner/v1/metadata/availability-zone
hel1-dc2
```

**Example: Region**
```bash
$ curl http://169.254.169.254/hetzner/v1/metadata/region
eu-central
```

## Sorting
Some responses which return multiple items support sorting. If they do support sorting the documentation states which fields can be used for sorting. You specify sorting with the `sort` query string parameter. You can sort by multiple fields. You can set the sort direction by appending `:asc` or `:desc` to the field name. By default, ascending sorting is used.

**Example: Sorting**
```bash
https://api.hetzner.cloud/v1/actions?sort=status
https://api.hetzner.cloud/v1/actions?sort=status:asc
https://api.hetzner.cloud/v1/actions?sort=status:desc
https://api.hetzner.cloud/v1/actions?sort=status:asc&sort=command:desc
```

Base URLs:

* <a href="https://api.hetzner.cloud/v1">https://api.hetzner.cloud/v1</a>

<h1 id="hetzner-cloud-api-actions">Actions</h1>

Actions show the results and progress of asynchronous requests to the API.

## Get all Actions

> Code samples

```bash
curl https://example.com/actions \
  -H 'Accept: application/json'
```

`GET /actions`

Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.

<h3 id="get-all-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|false|Can be used multiple times, the response will contain only Actions with specified IDs|
|sort|query|string|false|Can be used multiple times.|
|status|query|string|false|Can be used multiple times, the response will contain only Actions with specified statuses|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|command|
|sort|command:asc|
|sort|command:desc|
|sort|status|
|sort|status:asc|
|sort|status:desc|
|sort|progress|
|sort|progress:asc|
|sort|progress:desc|
|sort|started|
|sort|started:asc|
|sort|started:desc|
|sort|finished|
|sort|finished:asc|
|sort|finished:desc|
|status|running|
|status|success|
|status|error|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "command": "start_server",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2016-01-30T23:55:00+00:00",
      "id": 42,
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "started": "2016-01-30T23:55:00+00:00",
      "status": "success"
    }
  ],
  "meta": {
    "pagination": {
      "last_page": 4,
      "next_page": 4,
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "total_entries": 100
    }
  }
}
```

<h3 id="get-all-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `actions` key contains a list of Actions|Inline|

<h3 id="get-all-actions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Action

> Code samples

```bash
curl https://example.com/actions/0 \
  -H 'Accept: application/json'
```

`GET /actions/{id}`

Returns a specific Action object.

<h3 id="get-an-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Resource|

> Example responses

> 200 Response

```json
{
  "action": {
    "command": "start_server",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:55:00+00:00",
    "id": 42,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="get-an-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `action` key in the reply has this structure|Inline|

<h3 id="get-an-action-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-certificates">Certificates</h1>

TLS/SSL Certificates prove the identity of a Server and are used to encrypt client traffic.

## Get all Certificates

> Code samples

```bash
curl https://example.com/certificates \
  -H 'Accept: application/json'
```

`GET /certificates`

Returns all Certificate objects.

<h3 id="get-all-certificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Can be used multiple times.|
|name|query|string|false|Can be used to filter resources by their name. The response will only contain the resources matching the specified name|
|label_selector|query|string|false|Can be used to filter resources by labels. The response will only contain resources matching the label selector.|
|type|query|string|false|Can be used multiple times. The response will only contain Certificates matching the type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|name|
|sort|name:asc|
|sort|name:desc|
|sort|created|
|sort|created:asc|
|sort|created:desc|
|type|uploaded|
|type|managed|

> Example responses

> 200 Response

```json
{
  "certificates": [
    {
      "certificate": "-----BEGIN CERTIFICATE-----\n...",
      "created": "2019-01-08T12:10:00+00:00",
      "domain_names": [
        "example.com",
        "webmail.example.com",
        "www.example.com"
      ],
      "fingerprint": "03:c7:55:9b:2a:d1:04:17:09:f6:d0:7f:18:34:63:d4:3e:5f",
      "id": 897,
      "labels": {
        "env": "dev"
      },
      "name": "my website cert",
      "not_valid_after": "2019-07-08T09:59:59+00:00",
      "not_valid_before": "2019-01-08T10:00:00+00:00",
      "status": null,
      "type": "uploaded",
      "used_by": [
        {
          "id": 4711,
          "type": "load_balancer"
        }
      ]
    }
  ]
}
```

<h3 id="get-all-certificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `certificates` key contains an array of Certificate objects|Inline|

<h3 id="get-all-certificates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificates|[object]|true|none|none|
|» certificate|string \| null|true|none|Certificate and chain in PEM format, in order so that each record directly certifies the one preceding|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» domain_names|[string]|true|none|Domains and subdomains covered by the Certificate|
|» fingerprint|string \| null|true|none|SHA256 fingerprint of the Certificate|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» not_valid_after|string \| null|true|none|Point in time when the Certificate stops being valid (in ISO-8601 format)|
|» not_valid_before|string \| null|true|none|Point in time when the Certificate becomes valid (in ISO-8601 format)|
|» status|object \| null|false|none|Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates|
|» » error|object \| null|false|none|If issuance or renewal reports `failed`, this property contains information about what happened|
|» » » code|string|false|none|none|
|» » » message|string|false|none|none|
|» » issuance|string|false|none|Status of the issuance process of the Certificate|
|» » renewal|string|false|none|Status of the renewal process of the Certificate.|
|» type|string|false|none|Type of the Certificate|
|» used_by|[object]|true|none|Resources currently using the Certificate|
|» » id|integer|true|none|ID of resource referenced|
|» » type|string|true|none|Type of resource referenced|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » issuance|pending|
|» » issuance|completed|
|» » issuance|failed|
|» » renewal|scheduled|
|» » renewal|pending|
|» » renewal|failed|
|» » renewal|unavailable|
|» type|uploaded|
|» type|managed|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Certificate

> Code samples

```bash
curl https://example.com/certificates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "domain_names": [
      "example.com",
      "webmail.example.com",
      "www.example.com"
    ],
    "name": "my website cert",
    "type": "managed"
  }'
```

`POST /certificates`

Creates a new Certificate.

The default type **uploaded** allows for uploading your existing `certificate` and `private_key` in PEM format. You have to monitor its expiration date and handle renewal yourself.

In contrast, type **managed** requests a new Certificate from *Let's Encrypt* for the specified `domain_names`. Only domains managed by *Hetzner DNS* are supported. We handle renewal and timely alert the project owner via email if problems occur.

For type `managed` Certificates the `action` key of the response contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.


> Body parameter

```json
{
  "domain_names": [
    "example.com",
    "webmail.example.com",
    "www.example.com"
  ],
  "name": "my website cert",
  "type": "managed"
}
```

<h3 id="create-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» certificate|body|string|false|Certificate and chain in PEM format, in order so that each record directly certifies the one preceding. Required for type `uploaded` Certificates.|
|» domain_names|body|[string]|false|Domains and subdomains that should be contained in the Certificate issued by *Let's Encrypt*. Required for type `managed` Certificates.|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» name|body|string|true|Name of the Certificate|
|» private_key|body|string|false|Certificate key in PEM format. Required for type `uploaded` Certificates.|
|» type|body|string|false|Choose between uploading a Certificate in PEM format or requesting a managed *Let's Encrypt* Certificate. If omitted defaults to `uploaded`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|uploaded|
|» type|managed|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "create_certificate",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 879,
        "type": "certificate"
      }
    ],
    "started": "2019-01-08T12:10:00+00:00",
    "status": "running"
  },
  "certificate": {
    "certificate": null,
    "created": "2019-01-08T12:10:00+00:00",
    "domain_names": [
      "example.com",
      "webmail.example.com",
      "www.example.com"
    ],
    "fingerprint": null,
    "id": 897,
    "labels": {
      "env": "dev"
    },
    "name": "my website cert",
    "not_valid_after": null,
    "not_valid_before": null,
    "status": {
      "error": null,
      "issuance": "pending",
      "renewal": "unavailable"
    },
    "type": "managed",
    "used_by": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ]
  }
}
```

<h3 id="create-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `certificate` key contains the Certificate that was just created. For type `managed` Certificates the `action` key contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.|Inline|

<h3 id="create-a-certificate-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object \| null|false|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|certificate|object|true|none|none|
|» certificate|string \| null|true|none|Certificate and chain in PEM format, in order so that each record directly certifies the one preceding|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» domain_names|[string]|true|none|Domains and subdomains covered by the Certificate|
|» fingerprint|string \| null|true|none|SHA256 fingerprint of the Certificate|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» not_valid_after|string \| null|true|none|Point in time when the Certificate stops being valid (in ISO-8601 format)|
|» not_valid_before|string \| null|true|none|Point in time when the Certificate becomes valid (in ISO-8601 format)|
|» status|object \| null|false|none|Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates|
|» » error|object \| null|false|none|If issuance or renewal reports `failed`, this property contains information about what happened|
|» » » code|string|false|none|none|
|» » » message|string|false|none|none|
|» » issuance|string|false|none|Status of the issuance process of the Certificate|
|» » renewal|string|false|none|Status of the renewal process of the Certificate.|
|» type|string|false|none|Type of the Certificate|
|» used_by|[object]|true|none|Resources currently using the Certificate|
|» » id|integer|true|none|ID of resource referenced|
|» » type|string|true|none|Type of resource referenced|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|
|» » issuance|pending|
|» » issuance|completed|
|» » issuance|failed|
|» » renewal|scheduled|
|» » renewal|pending|
|» » renewal|failed|
|» » renewal|unavailable|
|» type|uploaded|
|» type|managed|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Certificate

> Code samples

```bash
curl https://example.com/certificates/0 \
  -H 'Accept: application/json'
```

`GET /certificates/{id}`

Gets a specific Certificate object.

<h3 id="get-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "certificate": {
    "certificate": "-----BEGIN CERTIFICATE-----\n...",
    "created": "2019-01-08T12:10:00+00:00",
    "domain_names": [
      "example.com",
      "webmail.example.com",
      "www.example.com"
    ],
    "fingerprint": "03:c7:55:9b:2a:d1:04:17:09:f6:d0:7f:18:34:63:d4:3e:5f",
    "id": 897,
    "labels": {
      "env": "dev"
    },
    "name": "my website cert",
    "not_valid_after": "2019-07-08T09:59:59+00:00",
    "not_valid_before": "2019-01-08T10:00:00+00:00",
    "status": null,
    "type": "uploaded",
    "used_by": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ]
  }
}
```

<h3 id="get-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `certificate` key contains a Certificate object|Inline|

<h3 id="get-a-certificate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|object|true|none|none|
|» certificate|string \| null|true|none|Certificate and chain in PEM format, in order so that each record directly certifies the one preceding|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» domain_names|[string]|true|none|Domains and subdomains covered by the Certificate|
|» fingerprint|string \| null|true|none|SHA256 fingerprint of the Certificate|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» not_valid_after|string \| null|true|none|Point in time when the Certificate stops being valid (in ISO-8601 format)|
|» not_valid_before|string \| null|true|none|Point in time when the Certificate becomes valid (in ISO-8601 format)|
|» status|object \| null|false|none|Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates|
|» » error|object \| null|false|none|If issuance or renewal reports `failed`, this property contains information about what happened|
|» » » code|string|false|none|none|
|» » » message|string|false|none|none|
|» » issuance|string|false|none|Status of the issuance process of the Certificate|
|» » renewal|string|false|none|Status of the renewal process of the Certificate.|
|» type|string|false|none|Type of the Certificate|
|» used_by|[object]|true|none|Resources currently using the Certificate|
|» » id|integer|true|none|ID of resource referenced|
|» » type|string|true|none|Type of resource referenced|

#### Enumerated Values

|Property|Value|
|---|---|
|» » issuance|pending|
|» » issuance|completed|
|» » issuance|failed|
|» » renewal|scheduled|
|» » renewal|pending|
|» » renewal|failed|
|» » renewal|unavailable|
|» type|uploaded|
|» type|managed|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Certificate

> Code samples

```bash
curl https://example.com/certificates/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labels": {
      "labelkey": "value"
    },
    "name": "my website cert"
  }'
```

`PUT /certificates/{id}`

Updates the Certificate properties.

Note that when updating labels, the Certificate’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the Certificate object changes during the request, the response will be a “conflict” error.


> Body parameter

```json
{
  "labels": {
    "labelkey": "value"
  },
  "name": "my website cert"
}
```

<h3 id="update-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the resource|
|body|body|object|false|none|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» name|body|string|false|New Certificate name|

> Example responses

> 200 Response

```json
{
  "certificate": {
    "certificate": "-----BEGIN CERTIFICATE-----\n...",
    "created": "2019-01-08T12:10:00+00:00",
    "domain_names": [
      "example.com",
      "webmail.example.com",
      "www.example.com"
    ],
    "fingerprint": "03:c7:55:9b:2a:d1:04:17:09:f6:d0:7f:18:34:63:d4:3e:5f",
    "id": 897,
    "labels": {
      "labelkey": "value"
    },
    "name": "my website cert",
    "not_valid_after": "2019-07-08T09:59:59+00:00",
    "not_valid_before": "2019-01-08T10:00:00+00:00",
    "status": null,
    "type": "uploaded",
    "used_by": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ]
  }
}
```

<h3 id="update-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `certificate` key contains the Certificate that was just updated|Inline|

<h3 id="update-a-certificate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|object|true|none|none|
|» certificate|string \| null|true|none|Certificate and chain in PEM format, in order so that each record directly certifies the one preceding|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» domain_names|[string]|true|none|Domains and subdomains covered by the Certificate|
|» fingerprint|string \| null|true|none|SHA256 fingerprint of the Certificate|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» not_valid_after|string \| null|true|none|Point in time when the Certificate stops being valid (in ISO-8601 format)|
|» not_valid_before|string \| null|true|none|Point in time when the Certificate becomes valid (in ISO-8601 format)|
|» status|object \| null|false|none|Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates|
|» » error|object \| null|false|none|If issuance or renewal reports `failed`, this property contains information about what happened|
|» » » code|string|false|none|none|
|» » » message|string|false|none|none|
|» » issuance|string|false|none|Status of the issuance process of the Certificate|
|» » renewal|string|false|none|Status of the renewal process of the Certificate.|
|» type|string|false|none|Type of the Certificate|
|» used_by|[object]|true|none|Resources currently using the Certificate|
|» » id|integer|true|none|ID of resource referenced|
|» » type|string|true|none|Type of resource referenced|

#### Enumerated Values

|Property|Value|
|---|---|
|» » issuance|pending|
|» » issuance|completed|
|» » issuance|failed|
|» » renewal|scheduled|
|» » renewal|pending|
|» » renewal|failed|
|» » renewal|unavailable|
|» type|uploaded|
|» type|managed|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Certificate

> Code samples

```bash
curl https://example.com/certificates/0 \
  -X DELETE
```

`DELETE /certificates/{id}`

Deletes a Certificate.

<h3 id="delete-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the resource|

<h3 id="delete-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Certificate deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-certificate-actions">Certificate Actions</h1>

## Get all Actions for a Certificate

> Code samples

```bash
curl https://example.com/certificates/0/actions \
  -H 'Accept: application/json'
```

`GET /certificates/{id}/actions`

Returns all Action objects for a Certificate. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

Only type `managed` Certificates can have Actions. For type `uploaded` Certificates the `actions` key will always contain an empty array.


<h3 id="get-all-actions-for-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Resource|
|sort|query|string|false|Can be used multiple times.|
|status|query|string|false|Can be used multiple times, the response will contain only Actions with specified statuses|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|command|
|sort|command:asc|
|sort|command:desc|
|sort|status|
|sort|status:asc|
|sort|status:desc|
|sort|progress|
|sort|progress:asc|
|sort|progress:desc|
|sort|started|
|sort|started:asc|
|sort|started:desc|
|sort|finished|
|sort|finished:asc|
|sort|finished:desc|
|status|running|
|status|success|
|status|error|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "command": "issue_certificate",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2021-01-30T23:57:00+00:00",
      "id": 14,
      "progress": 100,
      "resources": [
        {
          "id": 896,
          "type": "certificate"
        }
      ],
      "started": "2021-01-30T23:55:00+00:00",
      "status": "success"
    }
  ]
}
```

<h3 id="get-all-actions-for-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `actions` key contains a list of Actions|Inline|

<h3 id="get-all-actions-for-a-certificate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Retry Issuance or Renewal

> Code samples

```bash
curl https://example.com/certificates/0/actions/retry \
  -X POST \
  -H 'Accept: application/json'
```

`POST /certificates/{id}/actions/retry`

Retry a failed Certificate issuance or renewal.

Only applicable if the type of the Certificate is `managed` and the issuance or renewal status is `failed`.

#### Call specific error codes

| Code                                                    | Description                                                               |
|---------------------------------------------------------|---------------------------------------------------------------------------|
| `caa_record_does_not_allow_ca`                          | CAA record does not allow certificate authority                           |
| `ca_dns_validation_failed`                              | Certificate Authority: DNS validation failed                              |
| `ca_too_many_authorizations_failed_recently`            | Certificate Authority: Too many authorizations failed recently            |
| `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |
| `ca_too_many_duplicate_certificates`                    | Certificate Authority: Too many duplicate certificates                    |
| `could_not_verify_domain_delegated_to_zone`             | Could not verify domain delegated to zone                                 |
| `dns_zone_not_found`                                    | DNS zone not found                                                        |
| `dns_zone_is_secondary_zone`                            | DNS zone is a secondary zone                                              |


<h3 id="retry-issuance-or-renewal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Certificate|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "issue_certificate",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2021-01-30T23:57:00+00:00",
    "id": 14,
    "progress": 100,
    "resources": [
      {
        "id": 896,
        "type": "certificate"
      }
    ],
    "started": "2021-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="retry-issuance-or-renewal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the resulting Action|Inline|

<h3 id="retry-issuance-or-renewal-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Action for a Certificate

> Code samples

```bash
curl https://example.com/certificates/0/actions/0 \
  -H 'Accept: application/json'
```

`GET /certificates/{id}/actions/{action_id}`

Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions.

<h3 id="get-an-action-for-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Certificate|
|action_id|path|integer|true|ID of the Action|

> Example responses

> 200 Response

```json
{
  "action": {
    "command": "issue_certificate",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2021-01-30T23:57:00+00:00",
    "id": 14,
    "progress": 100,
    "resources": [
      {
        "id": 896,
        "type": "certificate"
      }
    ],
    "started": "2021-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="get-an-action-for-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `action` key contains the Certificate Action|Inline|

<h3 id="get-an-action-for-a-certificate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-datacenters">Datacenters</h1>

Each Datacenter represents a *virtual* Datacenter which is made up of possible many physical Datacenters where Servers are hosted.

Datacenter names are composed from their Location and virtual Datacenter number, for example `fsn1-dc14` means virtual Datacenter `14` in Location `fsn1`.

Right now there is only one Datacenter for each Location. The Datacenter numbers for `fsn`, `nbg` and `hel` are arbitrarily set to `14`, `3` and `2` for historic reasons and do not represent real physical Hetzner datacenters.


## Get all Datacenters

> Code samples

```bash
curl https://example.com/datacenters \
  -H 'Accept: application/json'
```

`GET /datacenters`

Returns all Datacenter objects.

<h3 id="get-all-datacenters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Can be used to filter Datacenters by their name. The response will only contain the Datacenter matching the specified name. When the name does not match the Datacenter name format, an `invalid_input` error is returned.|

> Example responses

> 200 Response

```json
{
  "datacenters": [
    {
      "description": "Falkenstein DC Park 8",
      "id": 42,
      "location": {
        "city": "Falkenstein",
        "country": "DE",
        "description": "Falkenstein DC Park 1",
        "id": 1,
        "latitude": 50.47612,
        "longitude": 12.370071,
        "name": "fsn1",
        "network_zone": "eu-central"
      },
      "name": "fsn1-dc8",
      "server_types": {
        "available": [
          1,
          2,
          3
        ],
        "available_for_migration": [
          1,
          2,
          3
        ],
        "supported": [
          1,
          2,
          3
        ]
      }
    }
  ],
  "recommendation": 1
}
```

<h3 id="get-all-datacenters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The reply contains the `datacenters` and `recommendation` keys|Inline|

<h3 id="get-all-datacenters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datacenters|[object]|true|none|none|
|» description|string|true|none|Description of the Datacenter|
|» id|integer|true|none|ID of the Resource|
|» location|object|true|none|none|
|» » city|string|true|none|City the Location is closest to|
|» » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » description|string|true|none|Description of the Location|
|» » id|number|true|none|ID of the Location|
|» » latitude|number|true|none|Latitude of the city closest to the Location|
|» » longitude|number|true|none|Longitude of the city closest to the Location|
|» » name|string|true|none|Unique identifier of the Location|
|» » network_zone|string|true|none|Name of network zone this Location resides in|
|» name|string|true|none|Unique identifier of the Datacenter|
|» server_types|object|true|none|The Server types the Datacenter can handle|
|» » available|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » available_for_migration|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » supported|[number]|true|none|IDs of Server types that are supported in the Datacenter|
|recommendation|number|true|none|The Datacenter which is recommended to be used to create new Servers.|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Datacenter

> Code samples

```bash
curl https://example.com/datacenters/0 \
  -H 'Accept: application/json'
```

`GET /datacenters/{id}`

Returns a specific Datacenter object.

<h3 id="get-a-datacenter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of Datacenter|

> Example responses

> 200 Response

```json
{
  "datacenter": {
    "description": "Falkenstein DC Park 8",
    "id": 42,
    "location": {
      "city": "Falkenstein",
      "country": "DE",
      "description": "Falkenstein DC Park 1",
      "id": 1,
      "latitude": 50.47612,
      "longitude": 12.370071,
      "name": "fsn1",
      "network_zone": "eu-central"
    },
    "name": "fsn1-dc8",
    "server_types": {
      "available": [
        1,
        2,
        3
      ],
      "available_for_migration": [
        1,
        2,
        3
      ],
      "supported": [
        1,
        2,
        3
      ]
    }
  }
}
```

<h3 id="get-a-datacenter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `datacenter` key in the reply contains a Datacenter object with this structure|Inline|

<h3 id="get-a-datacenter-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datacenter|object|true|none|none|
|» description|string|true|none|Description of the Datacenter|
|» id|integer|true|none|ID of the Resource|
|» location|object|true|none|none|
|» » city|string|true|none|City the Location is closest to|
|» » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » description|string|true|none|Description of the Location|
|» » id|number|true|none|ID of the Location|
|» » latitude|number|true|none|Latitude of the city closest to the Location|
|» » longitude|number|true|none|Longitude of the city closest to the Location|
|» » name|string|true|none|Unique identifier of the Location|
|» » network_zone|string|true|none|Name of network zone this Location resides in|
|» name|string|true|none|Unique identifier of the Datacenter|
|» server_types|object|true|none|The Server types the Datacenter can handle|
|» » available|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » available_for_migration|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » supported|[number]|true|none|IDs of Server types that are supported in the Datacenter|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-firewalls">Firewalls</h1>

Firewalls can limit the network access to or from your resources.

* When applying a firewall with no `in` rule all inbound traffic will be dropped. The default for `in` is `DROP`.
* When applying a firewall with no `out` rule all outbound traffic will be accepted. The default for `out` is `ACCEPT`.


## Get all Firewalls

> Code samples

```bash
curl https://example.com/firewalls \
  -H 'Accept: application/json'
```

`GET /firewalls`

Returns all Firewall objects.

<h3 id="get-all-firewalls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Can be used multiple times.|
|name|query|string|false|Can be used to filter resources by their name. The response will only contain the resources matching the specified name|
|label_selector|query|string|false|Can be used to filter resources by labels. The response will only contain resources matching the label selector.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|name|
|sort|name:asc|
|sort|name:desc|
|sort|created|
|sort|created:asc|
|sort|created:desc|

> Example responses

> 200 Response

```json
{
  "firewalls": [
    {
      "applied_to": [
        {
          "applied_to_resources": [
            {
              "server": {
                "id": 42
              },
              "type": "server"
            }
          ],
          "label_selector": {
            "selector": "env=prod"
          },
          "server": {
            "id": 42
          },
          "type": "server"
        }
      ],
      "created": "2016-01-30T23:55:00+00:00",
      "id": 42,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "my-resource",
      "rules": [
        {
          "description": "string",
          "destination_ips": [
            "28.239.13.1/32",
            "28.239.14.0/24",
            "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"
          ],
          "direction": "in",
          "port": "80",
          "protocol": "tcp",
          "source_ips": [
            "28.239.13.1/32",
            "28.239.14.0/24",
            "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"
          ]
        }
      ]
    }
  ],
  "meta": {
    "pagination": {
      "last_page": 4,
      "next_page": 4,
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "total_entries": 100
    }
  }
}
```

<h3 id="get-all-firewalls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `firewalls` key contains an array of Firewall objects|Inline|

<h3 id="get-all-firewalls-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firewalls|[object]|true|none|none|
|» applied_to|[object]|true|none|none|
|» » applied_to_resources|[object]|false|none|none|
|» » » server|object|false|none|none|
|» » » » id|integer|true|none|ID of the Resource|
|» » » type|string|false|none|Type of resource referenced|
|» » label_selector|object|false|none|none|
|» » » selector|string|true|none|Label selector|
|» » server|object|false|none|none|
|» » » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Resource|
|» labels|object|false|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» rules|[object]|true|none|none|
|» » description|string \| null|false|none|Description of the Rule|
|» » destination_ips|[string]|false|none|List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.|
|» » direction|string|true|none|Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.|
|» » port|string|false|none|Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.|
|» » protocol|string|true|none|Type of traffic to allow|
|» » source_ips|[string]|false|none|List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » type|server|
|» » type|server|
|» » type|label_selector|
|» » direction|in|
|» » direction|out|
|» » protocol|tcp|
|» » protocol|udp|
|» » protocol|icmp|
|» » protocol|esp|
|» » protocol|gre|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Firewall

> Code samples

```bash
curl https://example.com/firewalls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "apply_to": [
      {
        "server": {
          "id": 42
        },
        "type": "server"
      }
    ],
    "labels": {
      "env": "dev"
    },
    "name": "Corporate Intranet Protection",
    "rules": [
      {
        "description": "Allow port 80",
        "direction": "in",
        "port": "80",
        "protocol": "tcp",
        "source_ips": [
          "28.239.13.1/32",
          "28.239.14.0/24",
          "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"
        ]
      }
    ]
  }'
```

`POST /firewalls`

Creates a new Firewall.

#### Call specific error codes

| Code                          | Description                                                   |
|------------------------------ |-------------------------------------------------------------- |
| `server_already_added`        | Server added more than one time to resource                   |
| `incompatible_network_type`   | The Network type is incompatible for the given resource       |
| `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |


> Body parameter

```json
{
  "apply_to": [
    {
      "server": {
        "id": 42
      },
      "type": "server"
    }
  ],
  "labels": {
    "env": "dev"
  },
  "name": "Corporate Intranet Protection",
  "rules": [
    {
      "description": "Allow port 80",
      "direction": "in",
      "port": "80",
      "protocol": "tcp",
      "source_ips": [
        "28.239.13.1/32",
        "28.239.14.0/24",
        "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"
      ]
    }
  ]
}
```

<h3 id="create-a-firewall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apply_to|body|[object]|false|Resources the Firewall should be applied to after creation|
|» » label_selector|body|object|false|Configuration for type LabelSelector, required if type is `label_selector`|
|» » » selector|body|string|true|Label selector|
|» » server|body|object|false|Configuration for type Server, required if type is `server`|
|» » » id|body|integer|true|ID of the Server|
|» » type|body|string|true|Type of the resource|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» name|body|string|true|Name of the Firewall|
|» rules|body|[object]|false|Array of rules|
|» » description|body|string \| null|false|Description of the Rule|
|» » destination_ips|body|[string]|false|List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.|
|» » direction|body|string|true|Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.|
|» » port|body|string|false|Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.|
|» » protocol|body|string|true|Type of traffic to allow|
|» » source_ips|body|[string]|false|List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|server|
|» » type|label_selector|
|» » direction|in|
|» » direction|out|
|» » protocol|tcp|
|» » protocol|udp|
|» » protocol|icmp|
|» » protocol|esp|
|» » protocol|gre|

> Example responses

> 201 Response

```json
{
  "actions": [
    {
      "command": "set_firewall_rules",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2016-01-30T23:56:00+00:00",
      "id": 13,
      "progress": 100,
      "resources": [
        {
          "id": 38,
          "type": "firewall"
        }
      ],
      "started": "2016-01-30T23:55:00+00:00",
      "status": "success"
    },
    {
      "command": "apply_firewall",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2016-01-30T23:56:00+00:00",
      "id": 14,
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        },
        {
          "id": 38,
          "type": "firewall"
        }
      ],
      "started": "2016-01-30T23:55:00+00:00",
      "status": "success"
    }
  ],
  "firewall": {
    "applied_to": [
      {
        "applied_to_resources": [
          {
            "server": {
              "id": 42
            },
            "type": "server"
          }
        ],
        "label_selector": {
          "selector": "env=prod"
        },
        "server": {
          "id": 42
        },
        "type": "server"
      }
    ],
    "created": "2016-01-30T23:55:00+00:00",
    "id": 42,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "my-resource",
    "rules": [
      {
        "description": "string",
        "destination_ips": [
          "28.239.13.1/32",
          "28.239.14.0/24",
          "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"
        ],
        "direction": "in",
        "port": "80",
        "protocol": "tcp",
        "source_ips": [
          "28.239.13.1/32",
          "28.239.14.0/24",
          "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"
        ]
      }
    ]
  }
}
```

<h3 id="create-a-firewall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `firewall` key contains the Firewall that was just created|Inline|

<h3 id="create-a-firewall-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|false|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|firewall|object|false|none|none|
|» applied_to|[object]|true|none|none|
|» » applied_to_resources|[object]|false|none|none|
|» » » server|object|false|none|none|
|» » » » id|integer|true|none|ID of the Resource|
|» » » type|string|false|none|Type of resource referenced|
|» » label_selector|object|false|none|none|
|» » » selector|string|true|none|Label selector|
|» » server|object|false|none|none|
|» » » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Resource|
|» labels|object|false|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» rules|[object]|true|none|none|
|» » description|string \| null|false|none|Description of the Rule|
|» » destination_ips|[string]|false|none|List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.|
|» » direction|string|true|none|Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.|
|» » port|string|false|none|Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.|
|» » protocol|string|true|none|Type of traffic to allow|
|» » source_ips|[string]|false|none|List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|
|» » » type|server|
|» » type|server|
|» » type|label_selector|
|» » direction|in|
|» » direction|out|
|» » protocol|tcp|
|» » protocol|udp|
|» » protocol|icmp|
|» » protocol|esp|
|» » protocol|gre|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Firewall

> Code samples

```bash
curl https://example.com/firewalls/0 \
  -H 'Accept: application/json'
```

`GET /firewalls/{id}`

Gets a specific Firewall object.

<h3 id="get-a-firewall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "firewall": {
    "applied_to": [
      {
        "applied_to_resources": [
          {
            "server": {
              "id": 42
            },
            "type": "server"
          }
        ],
        "label_selector": {
          "selector": "env=prod"
        },
        "server": {
          "id": 42
        },
        "type": "server"
      }
    ],
    "created": "2016-01-30T23:55:00+00:00",
    "id": 42,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "my-resource",
    "rules": [
      {
        "description": "string",
        "destination_ips": [
          "28.239.13.1/32",
          "28.239.14.0/24",
          "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"
        ],
        "direction": "in",
        "port": "80",
        "protocol": "tcp",
        "source_ips": [
          "28.239.13.1/32",
          "28.239.14.0/24",
          "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"
        ]
      }
    ]
  }
}
```

<h3 id="get-a-firewall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `firewall` key contains a Firewall object|Inline|

<h3 id="get-a-firewall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firewall|object|true|none|none|
|» applied_to|[object]|true|none|none|
|» » applied_to_resources|[object]|false|none|none|
|» » » server|object|false|none|none|
|» » » » id|integer|true|none|ID of the Resource|
|» » » type|string|false|none|Type of resource referenced|
|» » label_selector|object|false|none|none|
|» » » selector|string|true|none|Label selector|
|» » server|object|false|none|none|
|» » » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Resource|
|» labels|object|false|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» rules|[object]|true|none|none|
|» » description|string \| null|false|none|Description of the Rule|
|» » destination_ips|[string]|false|none|List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.|
|» » direction|string|true|none|Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.|
|» » port|string|false|none|Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.|
|» » protocol|string|true|none|Type of traffic to allow|
|» » source_ips|[string]|false|none|List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » type|server|
|» » type|server|
|» » type|label_selector|
|» » direction|in|
|» » direction|out|
|» » protocol|tcp|
|» » protocol|udp|
|» » protocol|icmp|
|» » protocol|esp|
|» » protocol|gre|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Firewall

> Code samples

```bash
curl https://example.com/firewalls/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labels": {
      "labelkey": "value"
    },
    "name": "new-name"
  }'
```

`PUT /firewalls/{id}`

Updates the Firewall.

Note that when updating labels, the Firewall's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the Firewall object changes during the request, the response will be a “conflict” error.


> Body parameter

```json
{
  "labels": {
    "labelkey": "value"
  },
  "name": "new-name"
}
```

<h3 id="update-a-firewall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the resource|
|body|body|object|false|none|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» name|body|string|false|New Firewall name|

> Example responses

> 200 Response

```json
{
  "firewall": {
    "applied_to": [
      {
        "applied_to_resources": [
          {
            "server": {
              "id": 42
            },
            "type": "server"
          }
        ],
        "label_selector": {
          "selector": "env=prod"
        },
        "server": {
          "id": 42
        },
        "type": "server"
      }
    ],
    "created": "2016-01-30T23:55:00+00:00",
    "id": 42,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "my-resource",
    "rules": [
      {
        "description": "string",
        "destination_ips": [
          "28.239.13.1/32",
          "28.239.14.0/24",
          "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"
        ],
        "direction": "in",
        "port": "80",
        "protocol": "tcp",
        "source_ips": [
          "28.239.13.1/32",
          "28.239.14.0/24",
          "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"
        ]
      }
    ]
  }
}
```

<h3 id="update-a-firewall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `firewall` key contains the Firewall that was just updated|Inline|

<h3 id="update-a-firewall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firewall|object|true|none|none|
|» applied_to|[object]|true|none|none|
|» » applied_to_resources|[object]|false|none|none|
|» » » server|object|false|none|none|
|» » » » id|integer|true|none|ID of the Resource|
|» » » type|string|false|none|Type of resource referenced|
|» » label_selector|object|false|none|none|
|» » » selector|string|true|none|Label selector|
|» » server|object|false|none|none|
|» » » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Resource|
|» labels|object|false|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» rules|[object]|true|none|none|
|» » description|string \| null|false|none|Description of the Rule|
|» » destination_ips|[string]|false|none|List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.|
|» » direction|string|true|none|Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.|
|» » port|string|false|none|Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.|
|» » protocol|string|true|none|Type of traffic to allow|
|» » source_ips|[string]|false|none|List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » type|server|
|» » type|server|
|» » type|label_selector|
|» » direction|in|
|» » direction|out|
|» » protocol|tcp|
|» » protocol|udp|
|» » protocol|icmp|
|» » protocol|esp|
|» » protocol|gre|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Firewall

> Code samples

```bash
curl https://example.com/firewalls/0 \
  -X DELETE
```

`DELETE /firewalls/{id}`

Deletes a Firewall.

#### Call specific error codes

| Code                 | Description                               |
|--------------------- |-------------------------------------------|
| `resource_in_use`    | Firewall must not be in use to be deleted |


<h3 id="delete-a-firewall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the resource|

<h3 id="delete-a-firewall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Firewall deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-firewall-actions">Firewall Actions</h1>

## Get all Actions for a Firewall

> Code samples

```bash
curl https://example.com/firewalls/0/actions \
  -H 'Accept: application/json'
```

`GET /firewalls/{id}/actions`

Returns all Action objects for a Firewall. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

<h3 id="get-all-actions-for-a-firewall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Resource|
|sort|query|string|false|Can be used multiple times.|
|status|query|string|false|Can be used multiple times, the response will contain only Actions with specified statuses|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|command|
|sort|command:asc|
|sort|command:desc|
|sort|status|
|sort|status:asc|
|sort|status:desc|
|sort|progress|
|sort|progress:asc|
|sort|progress:desc|
|sort|started|
|sort|started:asc|
|sort|started:desc|
|sort|finished|
|sort|finished:asc|
|sort|finished:desc|
|status|running|
|status|success|
|status|error|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "command": "set_firewall_rules",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2016-01-30T23:56:00+00:00",
      "id": 13,
      "progress": 100,
      "resources": [
        {
          "id": 38,
          "type": "firewall"
        }
      ],
      "started": "2016-01-30T23:55:00+00:00",
      "status": "success"
    }
  ]
}
```

<h3 id="get-all-actions-for-a-firewall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `actions` key contains a list of Actions|Inline|

<h3 id="get-all-actions-for-a-firewall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Apply to Resources

> Code samples

```bash
curl https://example.com/firewalls/0/actions/apply_to_resources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "apply_to": [
      {
        "server": {
          "id": 42
        },
        "type": "server"
      }
    ]
  }'
```

`POST /firewalls/{id}/actions/apply_to_resources`

Applies one Firewall to multiple resources.

Currently servers (public network interface) and label selectors are supported.

#### Call specific error codes

| Code                          | Description                                                   |
|-------------------------------|---------------------------------------------------------------|
| `firewall_already_applied`    | Firewall was already applied on resource                      |
| `incompatible_network_type`   | The Network type is incompatible for the given resource       |
| `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |


> Body parameter

```json
{
  "apply_to": [
    {
      "server": {
        "id": 42
      },
      "type": "server"
    }
  ]
}
```

<h3 id="apply-to-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Firewall|
|body|body|object|false|none|
|» apply_to|body|[object]|true|Resources the Firewall should be applied to|
|» » label_selector|body|object|false|Configuration for type label_selector, required if type is `label_selector`|
|» » » selector|body|string|true|Label selector|
|» » server|body|object|false|Configuration for type server, required if type is `server`|
|» » » id|body|integer|true|ID of the Server|
|» » type|body|string|false|Type of the resource|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|server|
|» » type|label_selector|

> Example responses

> 201 Response

```json
{
  "actions": [
    {
      "command": "apply_firewall",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2016-01-30T23:56:00+00:00",
      "id": 14,
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        },
        {
          "id": 38,
          "type": "firewall"
        }
      ],
      "started": "2016-01-30T23:55:00+00:00",
      "status": "success"
    }
  ]
}
```

<h3 id="apply-to-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `actions` key contains multiple `apply_firewall` Actions|Inline|

<h3 id="apply-to-resources-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Remove from Resources

> Code samples

```bash
curl https://example.com/firewalls/0/actions/remove_from_resources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "remove_from": [
      {
        "server": {
          "id": 42
        },
        "type": "server"
      }
    ]
  }'
```

`POST /firewalls/{id}/actions/remove_from_resources`

Removes one Firewall from multiple resources.

Currently only Servers (and their public network interfaces) are supported.

#### Call specific error codes

| Code                                  | Description                                                            |
|---------------------------------------|------------------------------------------------------------------------|
| `firewall_already_removed`            | Firewall was already removed from the resource                         |
| `firewall_resource_not_found`         | The resource the Firewall should be attached to was not found          |
| `firewall_managed_by_label_selector`  | Firewall was applied via label selector and cannot be removed manually |


> Body parameter

```json
{
  "remove_from": [
    {
      "server": {
        "id": 42
      },
      "type": "server"
    }
  ]
}
```

<h3 id="remove-from-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Firewall|
|body|body|object|false|none|
|» remove_from|body|[object]|true|Resources the Firewall should be removed from|
|» » label_selector|body|object|false|Configuration for type label_selector, required if type is `label_selector`|
|» » » selector|body|string|true|Label selector|
|» » server|body|object|false|Configuration for type server, required if type is `server`|
|» » » id|body|integer|true|ID of the Server|
|» » type|body|string|false|Type of the resource|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|server|
|» » type|label_selector|

> Example responses

> 201 Response

```json
{
  "actions": [
    {
      "command": "remove_firewall",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2016-01-30T23:56:00+00:00",
      "id": 14,
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        },
        {
          "id": 38,
          "type": "firewall"
        }
      ],
      "started": "2016-01-30T23:55:00+00:00",
      "status": "success"
    }
  ]
}
```

<h3 id="remove-from-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `actions` key contains multiple `remove_firewall` Actions|Inline|

<h3 id="remove-from-resources-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Set Rules

> Code samples

```bash
curl https://example.com/firewalls/0/actions/set_rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "rules": [
      {
        "description": "Allow port 80",
        "direction": "in",
        "port": "80",
        "protocol": "tcp",
        "source_ips": [
          "28.239.13.1/32",
          "28.239.14.0/24",
          "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"
        ]
      }
    ]
  }'
```

`POST /firewalls/{id}/actions/set_rules`

Sets the rules of a Firewall.

All existing rules will be overwritten. Pass an empty `rules` array to remove all rules.
The maximum amount of rules that can be defined is 50.

#### Call specific error codes

| Code                          | Description                                                   |
|-------------------------------|---------------------------------------------------------------|
| `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |


> Body parameter

```json
{
  "rules": [
    {
      "description": "Allow port 80",
      "direction": "in",
      "port": "80",
      "protocol": "tcp",
      "source_ips": [
        "28.239.13.1/32",
        "28.239.14.0/24",
        "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"
      ]
    }
  ]
}
```

<h3 id="set-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Firewall|
|body|body|object|false|none|
|» rules|body|[object]|true|Array of rules|
|» » description|body|string \| null|false|Description of the Rule|
|» » destination_ips|body|[string]|false|List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.|
|» » direction|body|string|true|Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.|
|» » port|body|string|false|Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.|
|» » protocol|body|string|true|Type of traffic to allow|
|» » source_ips|body|[string]|false|List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » direction|in|
|» » direction|out|
|» » protocol|tcp|
|» » protocol|udp|
|» » protocol|icmp|
|» » protocol|esp|
|» » protocol|gre|

> Example responses

> 201 Response

```json
{
  "actions": [
    {
      "command": "set_firewall_rules",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2016-01-30T23:56:00+00:00",
      "id": 13,
      "progress": 100,
      "resources": [
        {
          "id": 38,
          "type": "firewall"
        }
      ],
      "started": "2016-01-30T23:55:00+00:00",
      "status": "success"
    },
    {
      "command": "apply_firewall",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2016-01-30T23:56:00+00:00",
      "id": 14,
      "progress": 100,
      "resources": [
        {
          "id": 38,
          "type": "firewall"
        },
        {
          "id": 42,
          "type": "server"
        }
      ],
      "started": "2016-01-30T23:55:00+00:00",
      "status": "success"
    }
  ]
}
```

<h3 id="set-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains one `set_firewall_rules` Action plus one `apply_firewall` Action per resource where the Firewall is active|Inline|

<h3 id="set-rules-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Action for a Firewall

> Code samples

```bash
curl https://example.com/firewalls/0/actions/0 \
  -H 'Accept: application/json'
```

`GET /firewalls/{id}/actions/{action_id}`

Returns a specific Action for a Firewall.

<h3 id="get-an-action-for-a-firewall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Firewall|
|action_id|path|integer|true|ID of the Action|

> Example responses

> 200 Response

```json
{
  "action": {
    "command": "set_firewall_rules",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 38,
        "type": "firewall"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="get-an-action-for-a-firewall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `action` key contains the Firewall Action|Inline|

<h3 id="get-an-action-for-a-firewall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-floating-ips">Floating IPs</h1>

Floating IPs help you to create highly available setups. You can assign a Floating IP to any Server. The Server can then use this IP. You can reassign it to a different Server at any time, or you can choose to unassign the IP from Servers all together.

Floating IPs can be used globally. This means you can assign a Floating IP to a Server in one Location and later reassign it to a Server in a different Location. For optimal routing and latency Floating IPs should be used in the Location they were created in.

For Floating IPs to work with your Server, you must configure them inside your operation system.

Floating IPs of type `ipv4` use a single IPv4 address as their `ip` property. Floating IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.

Floating IPs are billed on a monthly basis.


## Get all Floating IPs

> Code samples

```bash
curl https://example.com/floating_ips \
  -H 'Accept: application/json'
```

`GET /floating_ips`

Returns all Floating IP objects.

<h3 id="get-all-floating-ips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Can be used to filter Floating IPs by their name. The response will only contain the Floating IP matching the specified name.|
|label_selector|query|string|false|Can be used to filter Floating IPs by labels. The response will only contain Floating IPs matching the label selector.|
|sort|query|string|false|Can be used multiple times. Choices id id:asc id:desc created created:asc created:desc|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|created|
|sort|created:asc|
|sort|created:desc|

> Example responses

> 200 Response

```json
{
  "floating_ips": [
    {
      "blocked": false,
      "created": "2016-01-30T23:55:00+00:00",
      "description": "this describes my resource",
      "dns_ptr": [
        {
          "dns_ptr": "server.example.com",
          "ip": "2001:db8::1"
        }
      ],
      "home_location": {
        "city": "Falkenstein",
        "country": "DE",
        "description": "Falkenstein DC Park 1",
        "id": 1,
        "latitude": 50.47612,
        "longitude": 12.370071,
        "name": "fsn1",
        "network_zone": "eu-central"
      },
      "id": 42,
      "ip": "131.232.99.1",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "my-resource",
      "protection": {
        "delete": false
      },
      "server": 42,
      "type": "ipv4"
    }
  ],
  "meta": {
    "pagination": {
      "last_page": 4,
      "next_page": 4,
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "total_entries": 100
    }
  }
}
```

<h3 id="get-all-floating-ips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `floating_ips` key in the reply contains an array of Floating IP objects with this structure|Inline|

<h3 id="get-all-floating-ips-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|floating_ips|[object]|true|none|none|
|» blocked|boolean|true|none|Whether the IP is blocked|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» description|string \| null|true|none|Description of the Resource|
|» dns_ptr|[object]|true|none|Array of reverse DNS entries|
|» » dns_ptr|string|true|none|DNS pointer for the specific IP address|
|» » ip|string|true|none|Single IPv4 or IPv6 address|
|» home_location|object|true|none|Location the Floating IP was created in. Routing is optimized for this Location.|
|» » city|string|true|none|City the Location is closest to|
|» » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » description|string|true|none|Description of the Location|
|» » id|number|true|none|ID of the Location|
|» » latitude|number|true|none|Latitude of the city closest to the Location|
|» » longitude|number|true|none|Longitude of the city closest to the Location|
|» » name|string|true|none|Unique identifier of the Location|
|» » network_zone|string|true|none|Name of network zone this Location resides in|
|» id|integer|true|none|ID of the Resource|
|» ip|string|true|none|IP address|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» server|integer \| null|true|none|ID of the Server the Floating IP is assigned to, null if it is not assigned at all|
|» type|string|true|none|Type of the Floating IP|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|ipv4|
|» type|ipv6|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Floating IP

> Code samples

```bash
curl https://example.com/floating_ips \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "Web Frontend",
    "home_location": "fsn1",
    "labels": {
      "labelkey": "value"
    },
    "name": "Web Frontend",
    "server": 42,
    "type": "ipv4"
  }'
```

`POST /floating_ips`

Creates a new Floating IP assigned to a Server. If you want to create a Floating IP that is not bound to a Server, you need to provide the `home_location` key instead of `server`. This can be either the ID or the name of the Location this IP shall be created in. Note that a Floating IP can be assigned to a Server in any Location later on. For optimal routing it is advised to use the Floating IP in the same Location it was created in.

> Body parameter

```json
{
  "description": "Web Frontend",
  "home_location": "fsn1",
  "labels": {
    "labelkey": "value"
  },
  "name": "Web Frontend",
  "server": 42,
  "type": "ipv4"
}
```

<h3 id="create-a-floating-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|The `type` argument is required while `home_location` and `server` are mutually exclusive.|
|» description|body|string|false|none|
|» home_location|body|string|false|Home Location (routing is optimized for that Location). Only optional if Server argument is passed.|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» name|body|string|false|none|
|» server|body|integer|false|Server to assign the Floating IP to|
|» type|body|string|true|Floating IP type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|ipv4|
|» type|ipv6|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "create_floating_ip",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  },
  "floating_ip": {
    "blocked": false,
    "created": "2016-01-30T23:50:00+00:00",
    "description": "Web Frontend",
    "dns_ptr": [
      {
        "dns_ptr": "server.example.com",
        "ip": "2001:db8::1"
      }
    ],
    "home_location": {
      "city": "Falkenstein",
      "country": "DE",
      "description": "Falkenstein DC Park 1",
      "id": 1,
      "latitude": 50.47612,
      "longitude": 12.370071,
      "name": "fsn1",
      "network_zone": "eu-central"
    },
    "id": 4711,
    "ip": "131.232.99.1",
    "labels": {
      "env": "dev"
    },
    "name": "Web Frontend",
    "protection": {
      "delete": false
    },
    "server": 42,
    "type": "ipv4"
  }
}
```

<h3 id="create-a-floating-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `floating_ip` key in the reply contains the object that was just created|Inline|

<h3 id="create-a-floating-ip-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|floating_ip|object|true|none|none|
|» blocked|boolean|true|none|Whether the IP is blocked|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» description|string \| null|true|none|Description of the Resource|
|» dns_ptr|[object]|true|none|Array of reverse DNS entries|
|» » dns_ptr|string|true|none|DNS pointer for the specific IP address|
|» » ip|string|true|none|Single IPv4 or IPv6 address|
|» home_location|object|true|none|Location the Floating IP was created in. Routing is optimized for this Location.|
|» » city|string|true|none|City the Location is closest to|
|» » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » description|string|true|none|Description of the Location|
|» » id|number|true|none|ID of the Location|
|» » latitude|number|true|none|Latitude of the city closest to the Location|
|» » longitude|number|true|none|Longitude of the city closest to the Location|
|» » name|string|true|none|Unique identifier of the Location|
|» » network_zone|string|true|none|Name of network zone this Location resides in|
|» id|integer|true|none|ID of the Resource|
|» ip|string|true|none|IP address|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» server|integer \| null|true|none|ID of the Server the Floating IP is assigned to, null if it is not assigned at all|
|» type|string|true|none|Type of the Floating IP|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|
|» type|ipv4|
|» type|ipv6|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Floating IP

> Code samples

```bash
curl https://example.com/floating_ips/0 \
  -H 'Accept: application/json'
```

`GET /floating_ips/{id}`

Returns a specific Floating IP object.

<h3 id="get-a-floating-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Floating IP|

> Example responses

> 200 Response

```json
{
  "floating_ip": {
    "blocked": false,
    "created": "2016-01-30T23:55:00+00:00",
    "description": "this describes my resource",
    "dns_ptr": [
      {
        "dns_ptr": "server.example.com",
        "ip": "2001:db8::1"
      }
    ],
    "home_location": {
      "city": "Falkenstein",
      "country": "DE",
      "description": "Falkenstein DC Park 1",
      "id": 1,
      "latitude": 50.47612,
      "longitude": 12.370071,
      "name": "fsn1",
      "network_zone": "eu-central"
    },
    "id": 42,
    "ip": "131.232.99.1",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "my-resource",
    "protection": {
      "delete": false
    },
    "server": 42,
    "type": "ipv4"
  }
}
```

<h3 id="get-a-floating-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `floating_ip` key in the reply contains a Floating IP object with this structure|Inline|

<h3 id="get-a-floating-ip-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|floating_ip|object|true|none|none|
|» blocked|boolean|true|none|Whether the IP is blocked|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» description|string \| null|true|none|Description of the Resource|
|» dns_ptr|[object]|true|none|Array of reverse DNS entries|
|» » dns_ptr|string|true|none|DNS pointer for the specific IP address|
|» » ip|string|true|none|Single IPv4 or IPv6 address|
|» home_location|object|true|none|Location the Floating IP was created in. Routing is optimized for this Location.|
|» » city|string|true|none|City the Location is closest to|
|» » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » description|string|true|none|Description of the Location|
|» » id|number|true|none|ID of the Location|
|» » latitude|number|true|none|Latitude of the city closest to the Location|
|» » longitude|number|true|none|Longitude of the city closest to the Location|
|» » name|string|true|none|Unique identifier of the Location|
|» » network_zone|string|true|none|Name of network zone this Location resides in|
|» id|integer|true|none|ID of the Resource|
|» ip|string|true|none|IP address|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» server|integer \| null|true|none|ID of the Server the Floating IP is assigned to, null if it is not assigned at all|
|» type|string|true|none|Type of the Floating IP|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|ipv4|
|» type|ipv6|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Floating IP

> Code samples

```bash
curl https://example.com/floating_ips/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "Web Frontend",
    "labels": {
      "labelkey": "value"
    },
    "name": "Web Frontend"
  }'
```

`PUT /floating_ips/{id}`

Updates the description or labels of a Floating IP.
Also note that when updating labels, the Floating IP’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

> Body parameter

```json
{
  "description": "Web Frontend",
  "labels": {
    "labelkey": "value"
  },
  "name": "Web Frontend"
}
```

<h3 id="update-a-floating-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Floating IP|
|body|body|object|false|none|
|» description|body|string|false|New Description to set|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» name|body|string|false|New unique name to set|

> Example responses

> 200 Response

```json
{
  "floating_ip": {
    "blocked": false,
    "created": "2016-01-30T23:50:00+00:00",
    "description": "Web Frontend",
    "dns_ptr": [
      {
        "dns_ptr": "server.example.com",
        "ip": "2001:db8::1"
      }
    ],
    "home_location": {
      "city": "Falkenstein",
      "country": "DE",
      "description": "Falkenstein DC Park 1",
      "id": 1,
      "latitude": 50.47612,
      "longitude": 12.370071,
      "name": "fsn1",
      "network_zone": "eu-central"
    },
    "id": 4711,
    "ip": "131.232.99.1",
    "labels": {
      "labelkey": "value"
    },
    "name": "Web Frontend",
    "protection": {
      "delete": false
    },
    "server": 42,
    "type": "ipv4"
  }
}
```

<h3 id="update-a-floating-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `floating_ip` key in the reply contains the modified Floating IP object with the new description|Inline|

<h3 id="update-a-floating-ip-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|floating_ip|object|true|none|none|
|» blocked|boolean|true|none|Whether the IP is blocked|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» description|string \| null|true|none|Description of the Resource|
|» dns_ptr|[object]|true|none|Array of reverse DNS entries|
|» » dns_ptr|string|true|none|DNS pointer for the specific IP address|
|» » ip|string|true|none|Single IPv4 or IPv6 address|
|» home_location|object|true|none|Location the Floating IP was created in. Routing is optimized for this Location.|
|» » city|string|true|none|City the Location is closest to|
|» » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » description|string|true|none|Description of the Location|
|» » id|number|true|none|ID of the Location|
|» » latitude|number|true|none|Latitude of the city closest to the Location|
|» » longitude|number|true|none|Longitude of the city closest to the Location|
|» » name|string|true|none|Unique identifier of the Location|
|» » network_zone|string|true|none|Name of network zone this Location resides in|
|» id|integer|true|none|ID of the Resource|
|» ip|string|true|none|IP address|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» server|integer \| null|true|none|ID of the Server the Floating IP is assigned to, null if it is not assigned at all|
|» type|string|true|none|Type of the Floating IP|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|ipv4|
|» type|ipv6|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Floating IP

> Code samples

```bash
curl https://example.com/floating_ips/0 \
  -X DELETE
```

`DELETE /floating_ips/{id}`

Deletes a Floating IP. If it is currently assigned to a Server it will automatically get unassigned.

<h3 id="delete-a-floating-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Floating IP|

<h3 id="delete-a-floating-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Floating IP deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-floating-ip-actions">Floating IP Actions</h1>

## Get all Actions for a Floating IP

> Code samples

```bash
curl https://example.com/floating_ips/0/actions \
  -H 'Accept: application/json'
```

`GET /floating_ips/{id}/actions`

Returns all Action objects for a Floating IP. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

<h3 id="get-all-actions-for-a-floating-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Floating IP|
|sort|query|string|false|Can be used multiple times.|
|status|query|string|false|Can be used multiple times, the response will contain only Actions with specified statuses|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|command|
|sort|command:asc|
|sort|command:desc|
|sort|status|
|sort|status:asc|
|sort|status:desc|
|sort|progress|
|sort|progress:asc|
|sort|progress:desc|
|sort|started|
|sort|started:asc|
|sort|started:desc|
|sort|finished|
|sort|finished:asc|
|sort|finished:desc|
|status|running|
|status|success|
|status|error|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "command": "assign_floating_ip",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2016-01-30T23:56:00+00:00",
      "id": 13,
      "progress": 100,
      "resources": [
        {
          "id": 4711,
          "type": "server"
        },
        {
          "id": 4712,
          "type": "floating_ip"
        }
      ],
      "started": "2016-01-30T23:55:00+00:00",
      "status": "success"
    }
  ]
}
```

<h3 id="get-all-actions-for-a-floating-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `actions` key contains a list of Actions|Inline|

<h3 id="get-all-actions-for-a-floating-ip-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Assign a Floating IP to a Server

> Code samples

```bash
curl https://example.com/floating_ips/0/actions/assign \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "server": 42
  }'
```

`POST /floating_ips/{id}/actions/assign`

Assigns a Floating IP to a Server.

> Body parameter

```json
{
  "server": 42
}
```

<h3 id="assign-a-floating-ip-to-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Floating IP|
|body|body|object|false|none|
|» server|body|integer|true|ID of the Server the Floating IP shall be assigned to|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "assign_floating_ip",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "floating_ip"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="assign-a-floating-ip-to-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `assign` Action|Inline|

<h3 id="assign-a-floating-ip-to-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change reverse DNS entry for a Floating IP

> Code samples

```bash
curl https://example.com/floating_ips/0/actions/change_dns_ptr \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dns_ptr": "server02.example.com",
    "ip": "1.2.3.4"
  }'
```

`POST /floating_ips/{id}/actions/change_dns_ptr`

Changes the hostname that will appear when getting the hostname belonging to this Floating IP.

> Body parameter

```json
{
  "dns_ptr": "server02.example.com",
  "ip": "1.2.3.4"
}
```

<h3 id="change-reverse-dns-entry-for-a-floating-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Floating IP|
|body|body|object|false|Select the IP address for which to change the DNS entry by passing `ip`. For a Floating IP of type `ipv4` this must exactly match the IP address of the Floating IP. For a Floating IP of type `ipv6` this must be a single IP within the IPv6 /64 range that belongs to this Floating IP.<br><br>The target hostname is set by passing `dns_ptr`.<br>|
|» dns_ptr|body|string \| null|true|Hostname to set as a reverse DNS PTR entry, will reset to original default value if `null`|
|» ip|body|string|true|IP address for which to set the reverse DNS entry|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_dns_ptr",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "floating_ip"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="change-reverse-dns-entry-for-a-floating-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `change_dns_ptr` Action|Inline|

<h3 id="change-reverse-dns-entry-for-a-floating-ip-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change Floating IP Protection

> Code samples

```bash
curl https://example.com/floating_ips/0/actions/change_protection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "delete": true
  }'
```

`POST /floating_ips/{id}/actions/change_protection`

Changes the protection configuration of the Floating IP.

> Body parameter

```json
{
  "delete": true
}
```

<h3 id="change-floating-ip-protection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Floating IP|
|body|body|object|false|none|
|» delete|body|boolean|false|If true, prevents the Floating IP from being deleted|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_protection",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "floating_ip"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="change-floating-ip-protection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `change_protection` Action|Inline|

<h3 id="change-floating-ip-protection-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Unassign a Floating IP

> Code samples

```bash
curl https://example.com/floating_ips/0/actions/unassign \
  -X POST \
  -H 'Accept: application/json'
```

`POST /floating_ips/{id}/actions/unassign`

Unassigns a Floating IP, resulting in it being unreachable. You may assign it to a Server again at a later time.

<h3 id="unassign-a-floating-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Floating IP|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "unassign_floating_ip",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "floating_ip"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="unassign-a-floating-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `unassign` Action|Inline|

<h3 id="unassign-a-floating-ip-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Action for a Floating IP

> Code samples

```bash
curl https://example.com/floating_ips/0/actions/0 \
  -H 'Accept: application/json'
```

`GET /floating_ips/{id}/actions/{action_id}`

Returns a specific Action object for a Floating IP.

<h3 id="get-an-action-for-a-floating-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Floating IP|
|action_id|path|integer|true|ID of the Action|

> Example responses

> 200 Response

```json
{
  "action": {
    "command": "assign_floating_ip",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "floating_ip"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="get-an-action-for-a-floating-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `action` key in the reply has this structure|Inline|

<h3 id="get-an-action-for-a-floating-ip-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-images">Images</h1>

Images are blueprints for your VM disks. They can be of different types:

### System Images
Distribution Images maintained by us, e.g. “Ubuntu 20.04”

### Snapshot Images
Maintained by you, for example “Ubuntu 20.04 with my own settings”. These are billed per GB per month.

### Backup Images
Daily Backups of your Server. Will automatically be created for Servers which have backups enabled (`POST /servers/{id}/actions/enable_backup`)

Bound to exactly one Server. If you delete the Server, you also delete all backups bound to it. You may convert backup Images to snapshot Images to keep them.

These are billed at 20% of your instance price for 7 backup slots.

### App Images
Prebuild images with specific software configurations, e.g. “Wordpress”. All app images are created by us.


## Get all Images

> Code samples

```bash
curl https://example.com/images \
  -H 'Accept: application/json'
```

`GET /images`

Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters.

<h3 id="get-all-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Can be used multiple times.|
|type|query|string|false|Can be used multiple times.|
|status|query|string|false|Can be used multiple times. The response will only contain Images matching the status.|
|bound_to|query|string|false|Can be used multiple times. Server ID linked to the Image. Only available for Images of type `backup`|
|include_deprecated|query|boolean|false|Can be used multiple times.|
|name|query|string|false|Can be used to filter resources by their name. The response will only contain the resources matching the specified name|
|label_selector|query|string|false|Can be used to filter resources by labels. The response will only contain resources matching the label selector.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|name|
|sort|name:asc|
|sort|name:desc|
|sort|created|
|sort|created:asc|
|sort|created:desc|
|type|system|
|type|snapshot|
|type|backup|
|type|app|
|status|available|
|status|creating|

> Example responses

> 200 Response

```json
{
  "images": [
    {
      "bound_to": null,
      "created": "2016-01-30T23:55:00+00:00",
      "created_from": {
        "id": 1,
        "name": "Server"
      },
      "deleted": null,
      "deprecated": "2018-02-28T00:00:00+00:00",
      "description": "Ubuntu 20.04 Standard 64 bit",
      "disk_size": 10,
      "id": 42,
      "image_size": 2.3,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "ubuntu-20.04",
      "os_flavor": "ubuntu",
      "os_version": "20.04",
      "protection": {
        "delete": false
      },
      "rapid_deploy": false,
      "status": "available",
      "type": "snapshot"
    }
  ],
  "meta": {
    "pagination": {
      "last_page": 4,
      "next_page": 4,
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "total_entries": 100
    }
  }
}
```

<h3 id="get-all-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `images` key in the reply contains an array of Image objects with this structure|Inline|

<h3 id="get-all-images-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|[object]|true|none|none|
|» bound_to|integer \| null|true|none|ID of Server the Image is bound to. Only set for Images of type `backup`.|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» created_from|object \| null|true|none|Information about the Server the Image was created from|
|» » id|integer|true|none|ID of the Server the Image was created from|
|» » name|string|true|none|Server name at the time the Image was created|
|» deleted|string \| null|true|none|Point in time where the Image was deleted (in ISO-8601 format)|
|» deprecated|string \| null|true|none|Point in time when the Image is considered to be deprecated (in ISO-8601 format)|
|» description|string|true|none|Description of the Image|
|» disk_size|number|true|none|Size of the disk contained in the Image in GB|
|» id|integer|true|none|ID of the Resource|
|» image_size|number \| null|true|none|Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string \| null|true|none|Unique identifier of the Image. This value is only set for system Images.|
|» os_flavor|string|true|none|Flavor of operating system contained in the Image|
|» os_version|string \| null|true|none|Operating system version|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» rapid_deploy|boolean|false|none|Indicates that rapid deploy of the Image is available|
|» status|string|true|none|Whether the Image can be used or if it's still being created or unavailable|
|» type|string|true|none|Type of the Image|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» os_flavor|ubuntu|
|» os_flavor|centos|
|» os_flavor|debian|
|» os_flavor|fedora|
|» os_flavor|unknown|
|» status|available|
|» status|creating|
|» status|unavailable|
|» type|system|
|» type|app|
|» type|snapshot|
|» type|backup|
|» type|temporary|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Image

> Code samples

```bash
curl https://example.com/images/0 \
  -H 'Accept: application/json'
```

`GET /images/{id}`

Returns a specific Image object.

<h3 id="get-an-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Image|

> Example responses

> 200 Response

```json
{
  "image": {
    "bound_to": null,
    "created": "2016-01-30T23:55:00+00:00",
    "created_from": {
      "id": 1,
      "name": "Server"
    },
    "deleted": null,
    "deprecated": "2018-02-28T00:00:00+00:00",
    "description": "Ubuntu 20.04 Standard 64 bit",
    "disk_size": 10,
    "id": 42,
    "image_size": 2.3,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "ubuntu-20.04",
    "os_flavor": "ubuntu",
    "os_version": "20.04",
    "protection": {
      "delete": false
    },
    "rapid_deploy": false,
    "status": "available",
    "type": "snapshot"
  }
}
```

<h3 id="get-an-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `image` key in the reply contains an Image object with this structure|Inline|

<h3 id="get-an-image-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|object|false|none|none|
|» bound_to|integer \| null|true|none|ID of Server the Image is bound to. Only set for Images of type `backup`.|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» created_from|object \| null|true|none|Information about the Server the Image was created from|
|» » id|integer|true|none|ID of the Server the Image was created from|
|» » name|string|true|none|Server name at the time the Image was created|
|» deleted|string \| null|true|none|Point in time where the Image was deleted (in ISO-8601 format)|
|» deprecated|string \| null|true|none|Point in time when the Image is considered to be deprecated (in ISO-8601 format)|
|» description|string|true|none|Description of the Image|
|» disk_size|number|true|none|Size of the disk contained in the Image in GB|
|» id|integer|true|none|ID of the Resource|
|» image_size|number \| null|true|none|Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string \| null|true|none|Unique identifier of the Image. This value is only set for system Images.|
|» os_flavor|string|true|none|Flavor of operating system contained in the Image|
|» os_version|string \| null|true|none|Operating system version|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» rapid_deploy|boolean|false|none|Indicates that rapid deploy of the Image is available|
|» status|string|true|none|Whether the Image can be used or if it's still being created or unavailable|
|» type|string|true|none|Type of the Image|

#### Enumerated Values

|Property|Value|
|---|---|
|» os_flavor|ubuntu|
|» os_flavor|centos|
|» os_flavor|debian|
|» os_flavor|fedora|
|» os_flavor|unknown|
|» status|available|
|» status|creating|
|» status|unavailable|
|» type|system|
|» type|app|
|» type|snapshot|
|» type|backup|
|» type|temporary|

<aside class="success">
This operation does not require authentication
</aside>

## Update an Image

> Code samples

```bash
curl https://example.com/images/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "My new Image description",
    "labels": {
      "labelkey": "value"
    },
    "type": "snapshot"
  }'
```

`PUT /images/{id}`

Updates the Image. You may change the description, convert a Backup Image to a Snapshot Image or change the Image labels. Only Images of type `snapshot` and `backup` can be updated.

Note that when updating labels, the current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.


> Body parameter

```json
{
  "description": "My new Image description",
  "labels": {
    "labelkey": "value"
  },
  "type": "snapshot"
}
```

<h3 id="update-an-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Image|
|body|body|object|false|none|
|» description|body|string|false|New description of Image|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» type|body|string|false|Destination Image type to convert to|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|snapshot|

> Example responses

> 200 Response

```json
{
  "image": {
    "bound_to": null,
    "build_id": "c313fe40383af26094a5a92026054320ab55abc7",
    "created": "2016-01-30T23:50:00+00:00",
    "created_from": {
      "id": 1,
      "name": "Server"
    },
    "deleted": null,
    "deprecated": "2018-02-28T00:00:00+00:00",
    "description": "My new Image description",
    "disk_size": 10,
    "id": 4711,
    "image_size": 2.3,
    "labels": {
      "labelkey": "value"
    },
    "name": null,
    "os_flavor": "ubuntu",
    "os_version": "20.04",
    "protection": {
      "delete": false
    },
    "rapid_deploy": false,
    "status": "available",
    "type": "snapshot"
  }
}
```

<h3 id="update-an-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The image key in the reply contains the modified Image object|Inline|

<h3 id="update-an-image-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|object|false|none|none|
|» bound_to|integer \| null|true|none|ID of Server the Image is bound to. Only set for Images of type `backup`.|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» created_from|object \| null|true|none|Information about the Server the Image was created from|
|» » id|integer|true|none|ID of the Server the Image was created from|
|» » name|string|true|none|Server name at the time the Image was created|
|» deleted|string \| null|true|none|Point in time where the Image was deleted (in ISO-8601 format)|
|» deprecated|string \| null|true|none|Point in time when the Image is considered to be deprecated (in ISO-8601 format)|
|» description|string|true|none|Description of the Image|
|» disk_size|number|true|none|Size of the disk contained in the Image in GB|
|» id|integer|true|none|ID of the Resource|
|» image_size|number \| null|true|none|Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string \| null|true|none|Unique identifier of the Image. This value is only set for system Images.|
|» os_flavor|string|true|none|Flavor of operating system contained in the Image|
|» os_version|string \| null|true|none|Operating system version|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» rapid_deploy|boolean|false|none|Indicates that rapid deploy of the Image is available|
|» status|string|true|none|Whether the Image can be used or if it's still being created or unavailable|
|» type|string|true|none|Type of the Image|

#### Enumerated Values

|Property|Value|
|---|---|
|» os_flavor|ubuntu|
|» os_flavor|centos|
|» os_flavor|debian|
|» os_flavor|fedora|
|» os_flavor|unknown|
|» status|available|
|» status|creating|
|» status|unavailable|
|» type|system|
|» type|app|
|» type|snapshot|
|» type|backup|
|» type|temporary|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an Image

> Code samples

```bash
curl https://example.com/images/0 \
  -X DELETE
```

`DELETE /images/{id}`

Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted.

<h3 id="delete-an-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Image|

<h3 id="delete-an-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Image deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-image-actions">Image Actions</h1>

## Get all Actions for an Image

> Code samples

```bash
curl https://example.com/images/0/actions \
  -H 'Accept: application/json'
```

`GET /images/{id}/actions`

Returns all Action objects for an Image. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

<h3 id="get-all-actions-for-an-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Image|
|sort|query|string|false|Can be used multiple times.|
|status|query|string|false|Can be used multiple times, the response will contain only Actions with specified statuses|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|command|
|sort|command:asc|
|sort|command:desc|
|sort|status|
|sort|status:asc|
|sort|status:desc|
|sort|progress|
|sort|progress:asc|
|sort|progress:desc|
|sort|started|
|sort|started:asc|
|sort|started:desc|
|sort|finished|
|sort|finished:asc|
|sort|finished:desc|
|status|running|
|status|success|
|status|error|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "command": "change_protection",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2016-01-30T23:56:00+00:00",
      "id": 13,
      "progress": 100,
      "resources": [
        {
          "id": 4711,
          "type": "image"
        }
      ],
      "started": "2016-01-30T23:55:00+00:00",
      "status": "success"
    }
  ]
}
```

<h3 id="get-all-actions-for-an-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `actions` key contains a list of Actions|Inline|

<h3 id="get-all-actions-for-an-image-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change Image Protection

> Code samples

```bash
curl https://example.com/images/0/actions/change_protection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "delete": true
  }'
```

`POST /images/{id}/actions/change_protection`

Changes the protection configuration of the Image. Can only be used on snapshots.

> Body parameter

```json
{
  "delete": true
}
```

<h3 id="change-image-protection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Image|
|body|body|object|false|none|
|» delete|body|boolean|false|If true, prevents the snapshot from being deleted|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_protection",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "image"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="change-image-protection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `change_protection` Action|Inline|

<h3 id="change-image-protection-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Action for an Image

> Code samples

```bash
curl https://example.com/images/0/actions/0 \
  -H 'Accept: application/json'
```

`GET /images/{id}/actions/{action_id}`

Returns a specific Action for an Image.

<h3 id="get-an-action-for-an-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Image|
|action_id|path|integer|true|ID of the Action|

> Example responses

> 200 Response

```json
{
  "action": {
    "command": "change_protection",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "image"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="get-an-action-for-an-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `action` key contains the Image Action|Inline|

<h3 id="get-an-action-for-an-image-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-isos">ISOs</h1>

ISOs are read-only Images of DVDs. While we recommend using our Image functionality to install your Servers we also provide some stock ISOs so you can install more exotic operating systems by yourself.

On request our support uploads a private ISO just for you. These are marked with type `private` and only visible in your Project.

To attach an ISO to your Server use `POST /servers/{id}/actions/attach_iso`.


## Get all ISOs

> Code samples

```bash
curl https://example.com/isos \
  -H 'Accept: application/json'
```

`GET /isos`

Returns all available ISO objects.

<h3 id="get-all-isos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Can be used to filter ISOs by their name. The response will only contain the ISO matching the specified name.|

> Example responses

> 200 Response

```json
{
  "isos": [
    {
      "deprecated": "2018-02-28T00:00:00+00:00",
      "description": "FreeBSD 11.0 x64",
      "id": 42,
      "name": "FreeBSD-11.0-RELEASE-amd64-dvd1",
      "type": "public"
    }
  ],
  "meta": {
    "pagination": {
      "last_page": 4,
      "next_page": 4,
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "total_entries": 100
    }
  }
}
```

<h3 id="get-all-isos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `isos` key in the reply contains an array of iso objects with this structure|Inline|

<h3 id="get-all-isos-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isos|[object]|true|none|none|
|» deprecated|string \| null|true|none|ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.|
|» description|string|true|none|Description of the ISO|
|» id|integer|true|none|ID of the Resource|
|» name|string \| null|true|none|Unique identifier of the ISO. Only set for public ISOs|
|» type|string|true|none|Type of the ISO|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|public|
|» type|private|

<aside class="success">
This operation does not require authentication
</aside>

## Get an ISO

> Code samples

```bash
curl https://example.com/isos/0 \
  -H 'Accept: application/json'
```

`GET /isos/{id}`

Returns a specific ISO object.

<h3 id="get-an-iso-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the ISO|

> Example responses

> 200 Response

```json
{
  "iso": {
    "deprecated": "2018-02-28T00:00:00+00:00",
    "description": "FreeBSD 11.0 x64",
    "id": 42,
    "name": "FreeBSD-11.0-RELEASE-amd64-dvd1",
    "type": "public"
  }
}
```

<h3 id="get-an-iso-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `iso` key in the reply contains an array of ISO objects with this structure|Inline|

<h3 id="get-an-iso-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iso|object|true|none|none|
|» deprecated|string \| null|true|none|ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.|
|» description|string|true|none|Description of the ISO|
|» id|integer|true|none|ID of the Resource|
|» name|string \| null|true|none|Unique identifier of the ISO. Only set for public ISOs|
|» type|string|true|none|Type of the ISO|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|public|
|» type|private|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-load-balancers">Load Balancers</h1>

## Get all Load Balancers

> Code samples

```bash
curl https://example.com/load_balancers \
  -H 'Accept: application/json'
```

`GET /load_balancers`

Gets all existing Load Balancers that you have available.

<h3 id="get-all-load-balancers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Can be used multiple times.|
|name|query|string|false|Can be used to filter resources by their name. The response will only contain the resources matching the specified name|
|label_selector|query|string|false|Can be used to filter resources by labels. The response will only contain resources matching the label selector.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|name|
|sort|name:asc|
|sort|name:desc|
|sort|created|
|sort|created:asc|
|sort|created:desc|

> Example responses

> 200 Response

```json
{
  "load_balancers": [
    {
      "algorithm": {
        "type": "round_robin"
      },
      "created": "2016-01-30T23:55:00+00:00",
      "id": 42,
      "included_traffic": 10000,
      "ingoing_traffic": 0,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "load_balancer_type": {
        "deprecated": "2016-01-30T23:50:00+00:00",
        "description": "LB11",
        "id": 1,
        "max_assigned_certificates": 10,
        "max_connections": 20000,
        "max_services": 5,
        "max_targets": 25,
        "name": "lb11",
        "prices": [
          {
            "location": "fsn1",
            "price_hourly": {
              "gross": "1.1900000000000000",
              "net": "1.0000000000"
            },
            "price_monthly": {
              "gross": "1.1900000000000000",
              "net": "1.0000000000"
            }
          }
        ]
      },
      "location": {
        "city": "Falkenstein",
        "country": "DE",
        "description": "Falkenstein DC Park 1",
        "id": 1,
        "latitude": 50.47612,
        "longitude": 12.370071,
        "name": "fsn1",
        "network_zone": "eu-central"
      },
      "name": "my-resource",
      "outgoing_traffic": 0,
      "private_net": [
        {
          "ip": "10.0.0.2",
          "network": 4711
        }
      ],
      "protection": {
        "delete": false
      },
      "public_net": {
        "enabled": true,
        "ipv4": {
          "dns_ptr": "lb1.example.com",
          "ip": "1.2.3.4"
        },
        "ipv6": {
          "dns_ptr": "lb1.example.com",
          "ip": "2001:db8::1"
        }
      },
      "services": [
        {
          "destination_port": 80,
          "health_check": {
            "http": {
              "domain": "example.com",
              "path": "/",
              "response": "{\"status\": \"ok\"}",
              "status_codes": [
                "2??",
                "3??"
              ],
              "tls": false
            },
            "interval": 15,
            "port": 4711,
            "protocol": "http",
            "retries": 3,
            "timeout": 10
          },
          "http": {
            "certificates": [
              897
            ],
            "cookie_lifetime": 300,
            "cookie_name": "HCLBSTICKY",
            "redirect_http": true,
            "sticky_sessions": true
          },
          "listen_port": 443,
          "protocol": "https",
          "proxyprotocol": false
        }
      ],
      "targets": [
        {
          "health_status": [
            {
              "listen_port": 443,
              "status": "healthy"
            }
          ],
          "ip": {
            "ip": "203.0.113.1"
          },
          "label_selector": {
            "selector": "env=prod"
          },
          "server": {
            "id": 80
          },
          "targets": [
            {
              "health_status": [
                {
                  "listen_port": 443,
                  "status": "healthy"
                }
              ],
              "server": {
                "id": 85
              },
              "type": "server",
              "use_private_ip": false
            }
          ],
          "type": "server",
          "use_private_ip": true
        }
      ]
    }
  ],
  "meta": {
    "pagination": {
      "last_page": 4,
      "next_page": 4,
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "total_entries": 100
    }
  }
}
```

<h3 id="get-all-load-balancers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `load_balancers` key contains a list of Load Balancers|Inline|

<h3 id="get-all-load-balancers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|load_balancers|[object]|true|none|none|
|» algorithm|object|true|none|Algorithm of the Load Balancer|
|» » type|string|true|none|Type of the algorithm|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Resource|
|» included_traffic|integer|true|none|Free Traffic for the current billing period in bytes|
|» ingoing_traffic|integer \| null|true|none|Inbound Traffic for the current billing period in bytes|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» load_balancer_type|object|true|none|none|
|» » deprecated|string \| null|true|none|Point in time when the Load Balancer type is deprecated (in ISO-8601 format)|
|» » description|string|true|none|Description of the Load Balancer type|
|» » id|number|true|none|ID of the Load Balancer type|
|» » max_assigned_certificates|number|true|none|Number of SSL Certificates that can be assigned to a single Load Balancer|
|» » max_connections|number|true|none|Number of maximum simultaneous open connections|
|» » max_services|number|true|none|Number of services a Load Balancer of this type can have|
|» » max_targets|number|true|none|Number of targets a single Load Balancer can have|
|» » name|string|true|none|Unique identifier of the Load Balancer type|
|» » prices|[object]|true|none|Prices in different network zones|
|» » » location|string|true|none|Name of the Location the price is for|
|» » » price_hourly|object|true|none|Hourly costs for a Resource in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » » price_monthly|object|true|none|Monthly costs for a Resource in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» location|object|true|none|none|
|» » city|string|true|none|City the Location is closest to|
|» » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » description|string|true|none|Description of the Location|
|» » id|number|true|none|ID of the Location|
|» » latitude|number|true|none|Latitude of the city closest to the Location|
|» » longitude|number|true|none|Longitude of the city closest to the Location|
|» » name|string|true|none|Unique identifier of the Location|
|» » network_zone|string|true|none|Name of network zone this Location resides in|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» outgoing_traffic|integer \| null|true|none|Outbound Traffic for the current billing period in bytes|
|» private_net|[object]|true|none|Private networks information|
|» » ip|string|false|none|none|
|» » network|integer|false|none|none|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» public_net|object|true|none|Public network information|
|» » enabled|boolean|true|none|Public Interface enabled or not|
|» » ipv4|object|true|none|IP address (v4)|
|» » » dns_ptr|string \| null|false|none|Reverse DNS PTR entry for the IPv4 address of this Load Balancer|
|» » » ip|string \| null|false|none|IP address (v4) of this Load Balancer|
|» » ipv6|object|true|none|IP address (v6)|
|» » » dns_ptr|string \| null|false|none|Reverse DNS PTR entry for the IPv6 address of this Load Balancer|
|» » » ip|string \| null|false|none|IP address (v6) of this Load Balancer|
|» services|[object]|true|none|List of services that belong to this Load Balancer|
|» » destination_port|integer|true|none|Port the Load Balancer will balance to|
|» » health_check|object|true|none|Service health check|
|» » » http|object|false|none|Additional configuration for protocol http|
|» » » » domain|string \| null|true|none|Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.|
|» » » » path|string|true|none|HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.|
|» » » » response|string|false|none|String that must be contained in HTTP response in order to pass the health check|
|» » » » status_codes|[string]|false|none|List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??.|
|» » » » tls|boolean|false|none|Use HTTPS for health check|
|» » » interval|integer|true|none|Time interval in seconds health checks are performed|
|» » » port|integer|true|none|Port the health check will be performed on|
|» » » protocol|string|true|none|Type of the health check|
|» » » retries|integer|true|none|Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again|
|» » » timeout|integer|true|none|Time in seconds after an attempt is considered a timeout|
|» » http|object|false|none|Configuration option for protocols http and https|
|» » » certificates|[integer]|false|none|IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http"|
|» » » cookie_lifetime|integer|false|none|Lifetime of the cookie used for sticky sessions|
|» » » cookie_name|string|false|none|Name of the cookie used for sticky sessions|
|» » » redirect_http|boolean|false|none|Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false`|
|» » » sticky_sessions|boolean|false|none|Use sticky sessions. Only available if protocol is "http" or "https". Default `false`|
|» » listen_port|integer|true|none|Port the Load Balancer listens on|
|» » protocol|string|true|none|Protocol of the Load Balancer|
|» » proxyprotocol|boolean|true|none|Is Proxyprotocol enabled or not|
|» targets|[object]|true|none|List of targets that belong to this Load Balancer|
|» » health_status|[object]|false|none|List of health statuses of the services on this target|
|» » » listen_port|integer|false|none|none|
|» » » status|string|false|none|none|
|» » ip|object|false|none|IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.|
|» » » ip|string|true|none|IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.|
|» » label_selector|object|false|none|Label selector and a list of selected targets|
|» » » selector|string|true|none|Label selector|
|» » server|object|false|none|Server where the traffic should be routed through|
|» » » id|integer|true|none|ID of the Server|
|» » targets|[object]|false|none|List of selected targets|
|» » » health_status|[object]|false|none|none|
|» » » » listen_port|integer|false|none|none|
|» » » » status|string|false|none|none|
|» » » server|object|false|none|none|
|» » » » id|integer|true|none|ID of the Server|
|» » » type|string|false|none|none|
|» » » use_private_ip|boolean|false|none|none|
|» » type|string|true|none|Type of the resource|
|» » use_private_ip|boolean|false|none|Use the private network IP instead of the public IP. Default value is false.|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|round_robin|
|» » type|least_connections|
|» » » protocol|tcp|
|» » » protocol|http|
|» » protocol|tcp|
|» » protocol|http|
|» » protocol|https|
|» » » status|healthy|
|» » » status|unhealthy|
|» » » status|unknown|
|» » » » status|healthy|
|» » » » status|unhealthy|
|» » » » status|unknown|
|» » type|server|
|» » type|label_selector|
|» » type|ip|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Load Balancer

> Code samples

```bash
curl https://example.com/load_balancers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "algorithm": {
      "type": "round_robin"
    },
    "labels": {
      "labelkey": "value"
    },
    "load_balancer_type": "lb11",
    "location": "string",
    "name": "Web Frontend",
    "network": 123,
    "network_zone": "eu-central",
    "public_interface": true,
    "services": [
      {
        "destination_port": 80,
        "health_check": {
          "http": {
            "domain": "example.com",
            "path": "/",
            "response": "{\"status\": \"ok\"}",
            "status_codes": [
              "2??",
              "3??"
            ],
            "tls": false
          },
          "interval": 15,
          "port": 4711,
          "protocol": "http",
          "retries": 3,
          "timeout": 10
        },
        "http": {
          "certificates": [
            897
          ],
          "cookie_lifetime": 300,
          "cookie_name": "HCLBSTICKY",
          "redirect_http": true,
          "sticky_sessions": true
        },
        "listen_port": 443,
        "protocol": "https",
        "proxyprotocol": false
      }
    ],
    "targets": [
      {
        "health_status": [
          {
            "listen_port": 443,
            "status": "healthy"
          }
        ],
        "ip": {
          "ip": "203.0.113.1"
        },
        "label_selector": {
          "selector": "env=prod"
        },
        "server": {
          "id": 80
        },
        "targets": [
          {
            "health_status": [
              {
                "listen_port": 443,
                "status": "healthy"
              }
            ],
            "server": {
              "id": 85
            },
            "type": "server",
            "use_private_ip": false
          }
        ],
        "type": "server",
        "use_private_ip": true
      }
    ]
  }'
```

`POST /load_balancers`

Creates a Load Balancer.

#### Call specific error codes

| Code                                    | Description                                                                                           |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------|
| `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
| `ip_not_owned`                          | The IP is not owned by the owner of the project of the Load Balancer                                  |
| `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
| `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
| `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
| `source_port_already_used`              | The source port you are trying to add is already in use                                               |
| `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |


> Body parameter

```json
{
  "algorithm": {
    "type": "round_robin"
  },
  "labels": {
    "labelkey": "value"
  },
  "load_balancer_type": "lb11",
  "location": "string",
  "name": "Web Frontend",
  "network": 123,
  "network_zone": "eu-central",
  "public_interface": true,
  "services": [
    {
      "destination_port": 80,
      "health_check": {
        "http": {
          "domain": "example.com",
          "path": "/",
          "response": "{\"status\": \"ok\"}",
          "status_codes": [
            "2??",
            "3??"
          ],
          "tls": false
        },
        "interval": 15,
        "port": 4711,
        "protocol": "http",
        "retries": 3,
        "timeout": 10
      },
      "http": {
        "certificates": [
          897
        ],
        "cookie_lifetime": 300,
        "cookie_name": "HCLBSTICKY",
        "redirect_http": true,
        "sticky_sessions": true
      },
      "listen_port": 443,
      "protocol": "https",
      "proxyprotocol": false
    }
  ],
  "targets": [
    {
      "health_status": [
        {
          "listen_port": 443,
          "status": "healthy"
        }
      ],
      "ip": {
        "ip": "203.0.113.1"
      },
      "label_selector": {
        "selector": "env=prod"
      },
      "server": {
        "id": 80
      },
      "targets": [
        {
          "health_status": [
            {
              "listen_port": 443,
              "status": "healthy"
            }
          ],
          "server": {
            "id": 85
          },
          "type": "server",
          "use_private_ip": false
        }
      ],
      "type": "server",
      "use_private_ip": true
    }
  ]
}
```

<h3 id="create-a-load-balancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» algorithm|body|object|true|Algorithm of the Load Balancer|
|» » type|body|string|true|Type of the algorithm|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» » labelkey|body|string|false|New label|
|» load_balancer_type|body|string|true|ID or name of the Load Balancer type this Load Balancer should be created with|
|» location|body|string|false|ID or name of Location to create Load Balancer in|
|» name|body|string|true|Name of the Load Balancer|
|» network|body|integer|false|ID of the network the Load Balancer should be attached to on creation|
|» network_zone|body|string|false|Name of network zone|
|» public_interface|body|boolean|false|Enable or disable the public interface of the Load Balancer|
|» services|body|[object]|false|Array of services|
|» » destination_port|body|integer|true|Port the Load Balancer will balance to|
|» » health_check|body|object|true|Service health check|
|» » » http|body|object|false|Additional configuration for protocol http|
|» » » » domain|body|string \| null|true|Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.|
|» » » » path|body|string|true|HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.|
|» » » » response|body|string|false|String that must be contained in HTTP response in order to pass the health check|
|» » » » status_codes|body|[string]|false|List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??.|
|» » » » tls|body|boolean|false|Use HTTPS for health check|
|» » » interval|body|integer|true|Time interval in seconds health checks are performed|
|» » » port|body|integer|true|Port the health check will be performed on|
|» » » protocol|body|string|true|Type of the health check|
|» » » retries|body|integer|true|Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again|
|» » » timeout|body|integer|true|Time in seconds after an attempt is considered a timeout|
|» » http|body|object|false|Configuration option for protocols http and https|
|» » » certificates|body|[integer]|false|IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http"|
|» » » cookie_lifetime|body|integer|false|Lifetime of the cookie used for sticky sessions|
|» » » cookie_name|body|string|false|Name of the cookie used for sticky sessions|
|» » » redirect_http|body|boolean|false|Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false`|
|» » » sticky_sessions|body|boolean|false|Use sticky sessions. Only available if protocol is "http" or "https". Default `false`|
|» » listen_port|body|integer|true|Port the Load Balancer listens on|
|» » protocol|body|string|true|Protocol of the Load Balancer|
|» » proxyprotocol|body|boolean|true|Is Proxyprotocol enabled or not|
|» targets|body|[object]|false|Array of targets|
|» » health_status|body|[object]|false|List of health statuses of the services on this target|
|» » » listen_port|body|integer|false|none|
|» » » status|body|string|false|none|
|» » ip|body|object|false|IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.|
|» » » ip|body|string|true|IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.|
|» » label_selector|body|object|false|Label selector and a list of selected targets|
|» » » selector|body|string|true|Label selector|
|» » server|body|object|false|Server where the traffic should be routed through|
|» » » id|body|integer|true|ID of the Server|
|» » targets|body|[object]|false|List of selected targets|
|» » » health_status|body|[object]|false|none|
|» » » » listen_port|body|integer|false|none|
|» » » » status|body|string|false|none|
|» » » server|body|object|false|none|
|» » » » id|body|integer|true|ID of the Server|
|» » » type|body|string|false|none|
|» » » use_private_ip|body|boolean|false|none|
|» » type|body|string|true|Type of the resource|
|» » use_private_ip|body|boolean|false|Use the private network IP instead of the public IP. Default value is false.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|round_robin|
|» » type|least_connections|
|» » » protocol|tcp|
|» » » protocol|http|
|» » protocol|tcp|
|» » protocol|http|
|» » protocol|https|
|» » » status|healthy|
|» » » status|unhealthy|
|» » » status|unknown|
|» » » » status|healthy|
|» » » » status|unhealthy|
|» » » » status|unknown|
|» » type|server|
|» » type|label_selector|
|» » type|ip|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "create_load_balancer",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  },
  "load_balancer": {
    "algorithm": {
      "type": "round_robin"
    },
    "created": "2016-01-30T23:50:00+00:00",
    "id": 4711,
    "included_traffic": 654321,
    "ingoing_traffic": 123456,
    "labels": {
      "env": "dev"
    },
    "load_balancer_type": {
      "deprecated": "2016-01-30T23:50:00+00:00",
      "description": "LB11",
      "id": 1,
      "max_assigned_certificates": 10,
      "max_connections": 20000,
      "max_services": 5,
      "max_targets": 25,
      "name": "lb11",
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          },
          "price_monthly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          }
        }
      ]
    },
    "location": {
      "city": "Falkenstein",
      "country": "DE",
      "description": "Falkenstein DC Park 1",
      "id": 1,
      "latitude": 50.47612,
      "longitude": 12.370071,
      "name": "fsn1",
      "network_zone": "eu-central"
    },
    "name": "Web Frontend",
    "outgoing_traffic": 123456,
    "private_net": [
      {
        "ip": "10.0.0.2",
        "network": 4711
      }
    ],
    "protection": {
      "delete": false
    },
    "public_net": {
      "enabled": false,
      "ipv4": {
        "ip": "1.2.3.4"
      },
      "ipv6": {
        "ip": "2001:db8::1"
      }
    },
    "services": [
      {
        "destination_port": 80,
        "health_check": {
          "http": {
            "domain": "example.com",
            "path": "/",
            "response": "{\"status\": \"ok\"}",
            "status_codes": [
              "2??,3??"
            ],
            "tls": false
          },
          "interval": 15,
          "port": 4711,
          "protocol": "http",
          "retries": 3,
          "timeout": 10
        },
        "http": {
          "certificates": [
            897
          ],
          "cookie_lifetime": 300,
          "cookie_name": "HCLBSTICKY",
          "redirect_http": true,
          "sticky_sessions": true
        },
        "listen_port": 443,
        "protocol": "http",
        "proxyprotocol": false
      }
    ],
    "targets": [
      {
        "health_status": [
          {
            "listen_port": 443,
            "status": "healthy"
          }
        ],
        "server": {
          "id": 80
        },
        "targets": [
          {
            "health_status": [
              {
                "listen_port": 443,
                "status": "healthy"
              }
            ],
            "label_selector": null,
            "server": {
              "id": 80
            },
            "type": "server",
            "use_private_ip": true
          }
        ],
        "type": "server",
        "use_private_ip": true
      }
    ]
  }
}
```

<h3 id="create-a-load-balancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `load_balancer` key contains the Load Balancer that was just created|Inline|

<h3 id="create-a-load-balancer-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|load_balancer|object|true|none|none|
|» algorithm|object|true|none|Algorithm of the Load Balancer|
|» » type|string|true|none|Type of the algorithm|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Resource|
|» included_traffic|integer|true|none|Free Traffic for the current billing period in bytes|
|» ingoing_traffic|integer \| null|true|none|Inbound Traffic for the current billing period in bytes|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» load_balancer_type|object|true|none|none|
|» » deprecated|string \| null|true|none|Point in time when the Load Balancer type is deprecated (in ISO-8601 format)|
|» » description|string|true|none|Description of the Load Balancer type|
|» » id|number|true|none|ID of the Load Balancer type|
|» » max_assigned_certificates|number|true|none|Number of SSL Certificates that can be assigned to a single Load Balancer|
|» » max_connections|number|true|none|Number of maximum simultaneous open connections|
|» » max_services|number|true|none|Number of services a Load Balancer of this type can have|
|» » max_targets|number|true|none|Number of targets a single Load Balancer can have|
|» » name|string|true|none|Unique identifier of the Load Balancer type|
|» » prices|[object]|true|none|Prices in different network zones|
|» » » location|string|true|none|Name of the Location the price is for|
|» » » price_hourly|object|true|none|Hourly costs for a Resource in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » » price_monthly|object|true|none|Monthly costs for a Resource in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» location|object|true|none|none|
|» » city|string|true|none|City the Location is closest to|
|» » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » description|string|true|none|Description of the Location|
|» » id|number|true|none|ID of the Location|
|» » latitude|number|true|none|Latitude of the city closest to the Location|
|» » longitude|number|true|none|Longitude of the city closest to the Location|
|» » name|string|true|none|Unique identifier of the Location|
|» » network_zone|string|true|none|Name of network zone this Location resides in|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» outgoing_traffic|integer \| null|true|none|Outbound Traffic for the current billing period in bytes|
|» private_net|[object]|true|none|Private networks information|
|» » ip|string|false|none|none|
|» » network|integer|false|none|none|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» public_net|object|true|none|Public network information|
|» » enabled|boolean|true|none|Public Interface enabled or not|
|» » ipv4|object|true|none|IP address (v4)|
|» » » dns_ptr|string \| null|false|none|Reverse DNS PTR entry for the IPv4 address of this Load Balancer|
|» » » ip|string \| null|false|none|IP address (v4) of this Load Balancer|
|» » ipv6|object|true|none|IP address (v6)|
|» » » dns_ptr|string \| null|false|none|Reverse DNS PTR entry for the IPv6 address of this Load Balancer|
|» » » ip|string \| null|false|none|IP address (v6) of this Load Balancer|
|» services|[object]|true|none|List of services that belong to this Load Balancer|
|» » destination_port|integer|true|none|Port the Load Balancer will balance to|
|» » health_check|object|true|none|Service health check|
|» » » http|object|false|none|Additional configuration for protocol http|
|» » » » domain|string \| null|true|none|Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.|
|» » » » path|string|true|none|HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.|
|» » » » response|string|false|none|String that must be contained in HTTP response in order to pass the health check|
|» » » » status_codes|[string]|false|none|List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??.|
|» » » » tls|boolean|false|none|Use HTTPS for health check|
|» » » interval|integer|true|none|Time interval in seconds health checks are performed|
|» » » port|integer|true|none|Port the health check will be performed on|
|» » » protocol|string|true|none|Type of the health check|
|» » » retries|integer|true|none|Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again|
|» » » timeout|integer|true|none|Time in seconds after an attempt is considered a timeout|
|» » http|object|false|none|Configuration option for protocols http and https|
|» » » certificates|[integer]|false|none|IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http"|
|» » » cookie_lifetime|integer|false|none|Lifetime of the cookie used for sticky sessions|
|» » » cookie_name|string|false|none|Name of the cookie used for sticky sessions|
|» » » redirect_http|boolean|false|none|Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false`|
|» » » sticky_sessions|boolean|false|none|Use sticky sessions. Only available if protocol is "http" or "https". Default `false`|
|» » listen_port|integer|true|none|Port the Load Balancer listens on|
|» » protocol|string|true|none|Protocol of the Load Balancer|
|» » proxyprotocol|boolean|true|none|Is Proxyprotocol enabled or not|
|» targets|[object]|true|none|List of targets that belong to this Load Balancer|
|» » health_status|[object]|false|none|List of health statuses of the services on this target|
|» » » listen_port|integer|false|none|none|
|» » » status|string|false|none|none|
|» » ip|object|false|none|IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.|
|» » » ip|string|true|none|IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.|
|» » label_selector|object|false|none|Label selector and a list of selected targets|
|» » » selector|string|true|none|Label selector|
|» » server|object|false|none|Server where the traffic should be routed through|
|» » » id|integer|true|none|ID of the Server|
|» » targets|[object]|false|none|List of selected targets|
|» » » health_status|[object]|false|none|none|
|» » » » listen_port|integer|false|none|none|
|» » » » status|string|false|none|none|
|» » » server|object|false|none|none|
|» » » » id|integer|true|none|ID of the Server|
|» » » type|string|false|none|none|
|» » » use_private_ip|boolean|false|none|none|
|» » type|string|true|none|Type of the resource|
|» » use_private_ip|boolean|false|none|Use the private network IP instead of the public IP. Default value is false.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|
|» » type|round_robin|
|» » type|least_connections|
|» » » protocol|tcp|
|» » » protocol|http|
|» » protocol|tcp|
|» » protocol|http|
|» » protocol|https|
|» » » status|healthy|
|» » » status|unhealthy|
|» » » status|unknown|
|» » » » status|healthy|
|» » » » status|unhealthy|
|» » » » status|unknown|
|» » type|server|
|» » type|label_selector|
|» » type|ip|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Load Balancer

> Code samples

```bash
curl https://example.com/load_balancers/0 \
  -H 'Accept: application/json'
```

`GET /load_balancers/{id}`

Gets a specific Load Balancer object.

<h3 id="get-a-load-balancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|

> Example responses

> 200 Response

```json
{
  "load_balancer": {
    "algorithm": {
      "type": "round_robin"
    },
    "created": "2016-01-30T23:55:00+00:00",
    "id": 42,
    "included_traffic": 10000,
    "ingoing_traffic": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "load_balancer_type": {
      "deprecated": "2016-01-30T23:50:00+00:00",
      "description": "LB11",
      "id": 1,
      "max_assigned_certificates": 10,
      "max_connections": 20000,
      "max_services": 5,
      "max_targets": 25,
      "name": "lb11",
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          },
          "price_monthly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          }
        }
      ]
    },
    "location": {
      "city": "Falkenstein",
      "country": "DE",
      "description": "Falkenstein DC Park 1",
      "id": 1,
      "latitude": 50.47612,
      "longitude": 12.370071,
      "name": "fsn1",
      "network_zone": "eu-central"
    },
    "name": "my-resource",
    "outgoing_traffic": 0,
    "private_net": [
      {
        "ip": "10.0.0.2",
        "network": 4711
      }
    ],
    "protection": {
      "delete": false
    },
    "public_net": {
      "enabled": true,
      "ipv4": {
        "dns_ptr": "lb1.example.com",
        "ip": "1.2.3.4"
      },
      "ipv6": {
        "dns_ptr": "lb1.example.com",
        "ip": "2001:db8::1"
      }
    },
    "services": [
      {
        "destination_port": 80,
        "health_check": {
          "http": {
            "domain": "example.com",
            "path": "/",
            "response": "{\"status\": \"ok\"}",
            "status_codes": [
              "2??",
              "3??"
            ],
            "tls": false
          },
          "interval": 15,
          "port": 4711,
          "protocol": "http",
          "retries": 3,
          "timeout": 10
        },
        "http": {
          "certificates": [
            897
          ],
          "cookie_lifetime": 300,
          "cookie_name": "HCLBSTICKY",
          "redirect_http": true,
          "sticky_sessions": true
        },
        "listen_port": 443,
        "protocol": "https",
        "proxyprotocol": false
      }
    ],
    "targets": [
      {
        "health_status": [
          {
            "listen_port": 443,
            "status": "healthy"
          }
        ],
        "ip": {
          "ip": "203.0.113.1"
        },
        "label_selector": {
          "selector": "env=prod"
        },
        "server": {
          "id": 80
        },
        "targets": [
          {
            "health_status": [
              {
                "listen_port": 443,
                "status": "healthy"
              }
            ],
            "server": {
              "id": 85
            },
            "type": "server",
            "use_private_ip": false
          }
        ],
        "type": "server",
        "use_private_ip": true
      }
    ]
  }
}
```

<h3 id="get-a-load-balancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `load_balancer` key contains the Load Balancer|Inline|

<h3 id="get-a-load-balancer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|load_balancer|object|true|none|none|
|» algorithm|object|true|none|Algorithm of the Load Balancer|
|» » type|string|true|none|Type of the algorithm|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Resource|
|» included_traffic|integer|true|none|Free Traffic for the current billing period in bytes|
|» ingoing_traffic|integer \| null|true|none|Inbound Traffic for the current billing period in bytes|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» load_balancer_type|object|true|none|none|
|» » deprecated|string \| null|true|none|Point in time when the Load Balancer type is deprecated (in ISO-8601 format)|
|» » description|string|true|none|Description of the Load Balancer type|
|» » id|number|true|none|ID of the Load Balancer type|
|» » max_assigned_certificates|number|true|none|Number of SSL Certificates that can be assigned to a single Load Balancer|
|» » max_connections|number|true|none|Number of maximum simultaneous open connections|
|» » max_services|number|true|none|Number of services a Load Balancer of this type can have|
|» » max_targets|number|true|none|Number of targets a single Load Balancer can have|
|» » name|string|true|none|Unique identifier of the Load Balancer type|
|» » prices|[object]|true|none|Prices in different network zones|
|» » » location|string|true|none|Name of the Location the price is for|
|» » » price_hourly|object|true|none|Hourly costs for a Resource in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » » price_monthly|object|true|none|Monthly costs for a Resource in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» location|object|true|none|none|
|» » city|string|true|none|City the Location is closest to|
|» » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » description|string|true|none|Description of the Location|
|» » id|number|true|none|ID of the Location|
|» » latitude|number|true|none|Latitude of the city closest to the Location|
|» » longitude|number|true|none|Longitude of the city closest to the Location|
|» » name|string|true|none|Unique identifier of the Location|
|» » network_zone|string|true|none|Name of network zone this Location resides in|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» outgoing_traffic|integer \| null|true|none|Outbound Traffic for the current billing period in bytes|
|» private_net|[object]|true|none|Private networks information|
|» » ip|string|false|none|none|
|» » network|integer|false|none|none|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» public_net|object|true|none|Public network information|
|» » enabled|boolean|true|none|Public Interface enabled or not|
|» » ipv4|object|true|none|IP address (v4)|
|» » » dns_ptr|string \| null|false|none|Reverse DNS PTR entry for the IPv4 address of this Load Balancer|
|» » » ip|string \| null|false|none|IP address (v4) of this Load Balancer|
|» » ipv6|object|true|none|IP address (v6)|
|» » » dns_ptr|string \| null|false|none|Reverse DNS PTR entry for the IPv6 address of this Load Balancer|
|» » » ip|string \| null|false|none|IP address (v6) of this Load Balancer|
|» services|[object]|true|none|List of services that belong to this Load Balancer|
|» » destination_port|integer|true|none|Port the Load Balancer will balance to|
|» » health_check|object|true|none|Service health check|
|» » » http|object|false|none|Additional configuration for protocol http|
|» » » » domain|string \| null|true|none|Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.|
|» » » » path|string|true|none|HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.|
|» » » » response|string|false|none|String that must be contained in HTTP response in order to pass the health check|
|» » » » status_codes|[string]|false|none|List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??.|
|» » » » tls|boolean|false|none|Use HTTPS for health check|
|» » » interval|integer|true|none|Time interval in seconds health checks are performed|
|» » » port|integer|true|none|Port the health check will be performed on|
|» » » protocol|string|true|none|Type of the health check|
|» » » retries|integer|true|none|Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again|
|» » » timeout|integer|true|none|Time in seconds after an attempt is considered a timeout|
|» » http|object|false|none|Configuration option for protocols http and https|
|» » » certificates|[integer]|false|none|IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http"|
|» » » cookie_lifetime|integer|false|none|Lifetime of the cookie used for sticky sessions|
|» » » cookie_name|string|false|none|Name of the cookie used for sticky sessions|
|» » » redirect_http|boolean|false|none|Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false`|
|» » » sticky_sessions|boolean|false|none|Use sticky sessions. Only available if protocol is "http" or "https". Default `false`|
|» » listen_port|integer|true|none|Port the Load Balancer listens on|
|» » protocol|string|true|none|Protocol of the Load Balancer|
|» » proxyprotocol|boolean|true|none|Is Proxyprotocol enabled or not|
|» targets|[object]|true|none|List of targets that belong to this Load Balancer|
|» » health_status|[object]|false|none|List of health statuses of the services on this target|
|» » » listen_port|integer|false|none|none|
|» » » status|string|false|none|none|
|» » ip|object|false|none|IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.|
|» » » ip|string|true|none|IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.|
|» » label_selector|object|false|none|Label selector and a list of selected targets|
|» » » selector|string|true|none|Label selector|
|» » server|object|false|none|Server where the traffic should be routed through|
|» » » id|integer|true|none|ID of the Server|
|» » targets|[object]|false|none|List of selected targets|
|» » » health_status|[object]|false|none|none|
|» » » » listen_port|integer|false|none|none|
|» » » » status|string|false|none|none|
|» » » server|object|false|none|none|
|» » » » id|integer|true|none|ID of the Server|
|» » » type|string|false|none|none|
|» » » use_private_ip|boolean|false|none|none|
|» » type|string|true|none|Type of the resource|
|» » use_private_ip|boolean|false|none|Use the private network IP instead of the public IP. Default value is false.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|round_robin|
|» » type|least_connections|
|» » » protocol|tcp|
|» » » protocol|http|
|» » protocol|tcp|
|» » protocol|http|
|» » protocol|https|
|» » » status|healthy|
|» » » status|unhealthy|
|» » » status|unknown|
|» » » » status|healthy|
|» » » » status|unhealthy|
|» » » » status|unknown|
|» » type|server|
|» » type|label_selector|
|» » type|ip|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Load Balancer

> Code samples

```bash
curl https://example.com/load_balancers/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labels": {
      "labelkey": "value"
    },
    "name": "new-name"
  }'
```

`PUT /load_balancers/{id}`

Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.

Note that when updating labels, the Load Balancer’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the Load Balancer object changes during the request, the response will be a “conflict” error.


> Body parameter

```json
{
  "labels": {
    "labelkey": "value"
  },
  "name": "new-name"
}
```

<h3 id="update-a-load-balancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|body|body|object|false|none|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» name|body|string|false|New Load Balancer name|

> Example responses

> 200 Response

```json
{
  "load_balancer": {
    "algorithm": {
      "type": "round_robin"
    },
    "created": "2016-01-30T23:50:00+00:00",
    "id": 4711,
    "included_traffic": 654321,
    "ingoing_traffic": 123456,
    "labels": {
      "labelkey": "value"
    },
    "load_balancer_type": {
      "deprecated": "2016-01-30T23:50:00+00:00",
      "description": "LB11",
      "id": 1,
      "max_assigned_certificates": 10,
      "max_connections": 20000,
      "max_services": 5,
      "max_targets": 25,
      "name": "lb11",
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          },
          "price_monthly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          }
        }
      ]
    },
    "location": {
      "city": "Falkenstein",
      "country": "DE",
      "description": "Falkenstein DC Park 1",
      "id": 1,
      "latitude": 50.47612,
      "longitude": 12.370071,
      "name": "fsn1",
      "network_zone": "eu-central"
    },
    "name": "new-name",
    "outgoing_traffic": 123456,
    "private_net": [
      {
        "ip": "10.0.0.2",
        "network": 4711
      }
    ],
    "protection": {
      "delete": false
    },
    "public_net": {
      "enabled": false,
      "ipv4": {
        "ip": "1.2.3.4"
      },
      "ipv6": {
        "ip": "2001:db8::1"
      }
    },
    "services": [
      {
        "destination_port": 80,
        "health_check": {
          "http": {
            "domain": "example.com",
            "path": "/",
            "response": "{\"status\": \"ok\"}",
            "status_codes": [
              "2??,3??"
            ],
            "tls": false
          },
          "interval": 15,
          "port": 4711,
          "protocol": "http",
          "retries": 3,
          "timeout": 10
        },
        "http": {
          "certificates": [
            897
          ],
          "cookie_lifetime": 300,
          "cookie_name": "HCLBSTICKY",
          "redirect_http": true,
          "sticky_sessions": true
        },
        "listen_port": 443,
        "protocol": "http",
        "proxyprotocol": false
      }
    ],
    "targets": [
      {
        "health_status": [
          {
            "listen_port": 443,
            "status": "healthy"
          }
        ],
        "ip": {
          "ip": "203.0.113.1"
        },
        "label_selector": {
          "selector": "env=prod"
        },
        "server": {
          "id": 80
        },
        "targets": [
          {
            "health_status": [
              {
                "listen_port": 443,
                "status": "healthy"
              }
            ],
            "label_selector": null,
            "server": {
              "id": 80
            },
            "type": "server",
            "use_private_ip": true
          }
        ],
        "type": "server",
        "use_private_ip": true
      }
    ]
  }
}
```

<h3 id="update-a-load-balancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `load_balancer` key contains the updated Load Balancer|Inline|

<h3 id="update-a-load-balancer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|load_balancer|object|true|none|none|
|» algorithm|object|true|none|Algorithm of the Load Balancer|
|» » type|string|true|none|Type of the algorithm|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Resource|
|» included_traffic|integer|true|none|Free Traffic for the current billing period in bytes|
|» ingoing_traffic|integer \| null|true|none|Inbound Traffic for the current billing period in bytes|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» load_balancer_type|object|true|none|none|
|» » deprecated|string \| null|true|none|Point in time when the Load Balancer type is deprecated (in ISO-8601 format)|
|» » description|string|true|none|Description of the Load Balancer type|
|» » id|number|true|none|ID of the Load Balancer type|
|» » max_assigned_certificates|number|true|none|Number of SSL Certificates that can be assigned to a single Load Balancer|
|» » max_connections|number|true|none|Number of maximum simultaneous open connections|
|» » max_services|number|true|none|Number of services a Load Balancer of this type can have|
|» » max_targets|number|true|none|Number of targets a single Load Balancer can have|
|» » name|string|true|none|Unique identifier of the Load Balancer type|
|» » prices|[object]|true|none|Prices in different network zones|
|» » » location|string|true|none|Name of the Location the price is for|
|» » » price_hourly|object|true|none|Hourly costs for a Resource in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » » price_monthly|object|true|none|Monthly costs for a Resource in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» location|object|true|none|none|
|» » city|string|true|none|City the Location is closest to|
|» » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » description|string|true|none|Description of the Location|
|» » id|number|true|none|ID of the Location|
|» » latitude|number|true|none|Latitude of the city closest to the Location|
|» » longitude|number|true|none|Longitude of the city closest to the Location|
|» » name|string|true|none|Unique identifier of the Location|
|» » network_zone|string|true|none|Name of network zone this Location resides in|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» outgoing_traffic|integer \| null|true|none|Outbound Traffic for the current billing period in bytes|
|» private_net|[object]|true|none|Private networks information|
|» » ip|string|false|none|none|
|» » network|integer|false|none|none|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» public_net|object|true|none|Public network information|
|» » enabled|boolean|true|none|Public Interface enabled or not|
|» » ipv4|object|true|none|IP address (v4)|
|» » » dns_ptr|string \| null|false|none|Reverse DNS PTR entry for the IPv4 address of this Load Balancer|
|» » » ip|string \| null|false|none|IP address (v4) of this Load Balancer|
|» » ipv6|object|true|none|IP address (v6)|
|» » » dns_ptr|string \| null|false|none|Reverse DNS PTR entry for the IPv6 address of this Load Balancer|
|» » » ip|string \| null|false|none|IP address (v6) of this Load Balancer|
|» services|[object]|true|none|List of services that belong to this Load Balancer|
|» » destination_port|integer|true|none|Port the Load Balancer will balance to|
|» » health_check|object|true|none|Service health check|
|» » » http|object|false|none|Additional configuration for protocol http|
|» » » » domain|string \| null|true|none|Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.|
|» » » » path|string|true|none|HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.|
|» » » » response|string|false|none|String that must be contained in HTTP response in order to pass the health check|
|» » » » status_codes|[string]|false|none|List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??.|
|» » » » tls|boolean|false|none|Use HTTPS for health check|
|» » » interval|integer|true|none|Time interval in seconds health checks are performed|
|» » » port|integer|true|none|Port the health check will be performed on|
|» » » protocol|string|true|none|Type of the health check|
|» » » retries|integer|true|none|Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again|
|» » » timeout|integer|true|none|Time in seconds after an attempt is considered a timeout|
|» » http|object|false|none|Configuration option for protocols http and https|
|» » » certificates|[integer]|false|none|IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http"|
|» » » cookie_lifetime|integer|false|none|Lifetime of the cookie used for sticky sessions|
|» » » cookie_name|string|false|none|Name of the cookie used for sticky sessions|
|» » » redirect_http|boolean|false|none|Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false`|
|» » » sticky_sessions|boolean|false|none|Use sticky sessions. Only available if protocol is "http" or "https". Default `false`|
|» » listen_port|integer|true|none|Port the Load Balancer listens on|
|» » protocol|string|true|none|Protocol of the Load Balancer|
|» » proxyprotocol|boolean|true|none|Is Proxyprotocol enabled or not|
|» targets|[object]|true|none|List of targets that belong to this Load Balancer|
|» » health_status|[object]|false|none|List of health statuses of the services on this target|
|» » » listen_port|integer|false|none|none|
|» » » status|string|false|none|none|
|» » ip|object|false|none|IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.|
|» » » ip|string|true|none|IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.|
|» » label_selector|object|false|none|Label selector and a list of selected targets|
|» » » selector|string|true|none|Label selector|
|» » server|object|false|none|Server where the traffic should be routed through|
|» » » id|integer|true|none|ID of the Server|
|» » targets|[object]|false|none|List of selected targets|
|» » » health_status|[object]|false|none|none|
|» » » » listen_port|integer|false|none|none|
|» » » » status|string|false|none|none|
|» » » server|object|false|none|none|
|» » » » id|integer|true|none|ID of the Server|
|» » » type|string|false|none|none|
|» » » use_private_ip|boolean|false|none|none|
|» » type|string|true|none|Type of the resource|
|» » use_private_ip|boolean|false|none|Use the private network IP instead of the public IP. Default value is false.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|round_robin|
|» » type|least_connections|
|» » » protocol|tcp|
|» » » protocol|http|
|» » protocol|tcp|
|» » protocol|http|
|» » protocol|https|
|» » » status|healthy|
|» » » status|unhealthy|
|» » » status|unknown|
|» » » » status|healthy|
|» » » » status|unhealthy|
|» » » » status|unknown|
|» » type|server|
|» » type|label_selector|
|» » type|ip|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Load Balancer

> Code samples

```bash
curl https://example.com/load_balancers/0 \
  -X DELETE
```

`DELETE /load_balancers/{id}`

Deletes a Load Balancer.

<h3 id="delete-a-load-balancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|

<h3 id="delete-a-load-balancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Load Balancer deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Metrics for a LoadBalancer

> Code samples

```bash
curl 'https://example.com/load_balancers/0/metrics?type=open_connections&start=string&end=string' \
  -H 'Accept: application/json'
```

`GET /load_balancers/{id}/metrics`

You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `bandwidth`. You can also specify more than one type by comma separation, e.g. `requests_per_second,bandwidth`.

Depending on the type you will get different time series data:

|Type | Timeseries | Unit | Description |
|---- |------------|------|-------------|
| open_connections | open_connections | number | Open connections |
| connections_per_second | connections_per_second | connections/s | Connections per second |
| requests_per_second | requests_per_second | requests/s | Requests per second |
| bandwidth | bandwidth.in | bytes/s | Ingress bandwidth |
|| bandwidth.out | bytes/s | Egress bandwidth |

Metrics are available for the last 30 days only.

If you do not provide the step argument we will automatically adjust it so that 200 samples are returned.

We limit the number of samples to a maximum of 500 and will adjust the step parameter accordingly.


<h3 id="get-metrics-for-a-loadbalancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|type|query|string|true|Type of metrics to get|
|start|query|string|true|Start of period to get Metrics for (in ISO-8601 format)|
|end|query|string|true|End of period to get Metrics for (in ISO-8601 format)|
|step|query|string|false|Resolution of results in seconds|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|open_connections|
|type|connections_per_second|
|type|requests_per_second|
|type|bandwidth|

> Example responses

> 200 Response

```json
{
  "metrics": {
    "end": "2017-01-01T23:00:00+00:00",
    "start": "2017-01-01T00:00:00+00:00",
    "step": 60,
    "time_series": {
      "name_of_timeseries": {
        "values": [
          [
            1435781470.622,
            "42"
          ],
          [
            1435781471.622,
            "43"
          ]
        ]
      }
    }
  }
}
```

<h3 id="get-metrics-for-a-loadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `metrics` key in the reply contains a metrics object with this structure|Inline|

<h3 id="get-metrics-for-a-loadbalancer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|object|true|none|none|
|» end|string|true|none|End of period of metrics reported (in ISO-8601 format)|
|» start|string|true|none|Start of period of metrics reported (in ISO-8601 format)|
|» step|number|true|none|Resolution of results in seconds.|
|» time_series|object|true|none|Hash with timeseries information, containing the name of timeseries as key|
|» » **additionalProperties**|object|false|none|none|
|» » » values|[[number \| string]]|true|none|Metrics Timestamps with values|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-load-balancer-actions">Load Balancer Actions</h1>

## Get all Actions for a Load Balancer

> Code samples

```bash
curl https://example.com/load_balancers/0/actions \
  -H 'Accept: application/json'
```

`GET /load_balancers/{id}/actions`

Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

<h3 id="get-all-actions-for-a-load-balancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|sort|query|string|false|Can be used multiple times.|
|status|query|string|false|Can be used multiple times, the response will contain only Actions with specified statuses|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|command|
|sort|command:asc|
|sort|command:desc|
|sort|status|
|sort|status:asc|
|sort|status:desc|
|sort|progress|
|sort|progress:asc|
|sort|progress:desc|
|sort|started|
|sort|started:asc|
|sort|started:desc|
|sort|finished|
|sort|finished:asc|
|sort|finished:desc|
|status|running|
|status|success|
|status|error|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "command": "add_service",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2016-01-30T23:56:00+00:00",
      "id": 13,
      "progress": 100,
      "resources": [
        {
          "id": 4711,
          "type": "load_balancer"
        }
      ],
      "started": "2016-01-30T23:55:00+00:00",
      "status": "success"
    }
  ]
}
```

<h3 id="get-all-actions-for-a-load-balancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `actions` key contains a list of Actions|Inline|

<h3 id="get-all-actions-for-a-load-balancer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Add Service

> Code samples

```bash
curl https://example.com/load_balancers/0/actions/add_service \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destination_port": 80,
    "health_check": {
      "http": {
        "domain": "example.com",
        "path": "/",
        "response": "{\"status\": \"ok\"}",
        "status_codes": [
          "2??",
          "3??"
        ],
        "tls": false
      },
      "interval": 15,
      "port": 4711,
      "protocol": "http",
      "retries": 3,
      "timeout": 10
    },
    "http": {
      "certificates": [
        897
      ],
      "cookie_lifetime": 300,
      "cookie_name": "HCLBSTICKY",
      "redirect_http": true,
      "sticky_sessions": true
    },
    "listen_port": 443,
    "protocol": "https",
    "proxyprotocol": false
  }'
```

`POST /load_balancers/{id}/actions/add_service`

Adds a service to a Load Balancer.

#### Call specific error codes

| Code                       | Description                                             |
|----------------------------|---------------------------------------------------------|
| `source_port_already_used` | The source port you are trying to add is already in use |


> Body parameter

```json
{
  "destination_port": 80,
  "health_check": {
    "http": {
      "domain": "example.com",
      "path": "/",
      "response": "{\"status\": \"ok\"}",
      "status_codes": [
        "2??",
        "3??"
      ],
      "tls": false
    },
    "interval": 15,
    "port": 4711,
    "protocol": "http",
    "retries": 3,
    "timeout": 10
  },
  "http": {
    "certificates": [
      897
    ],
    "cookie_lifetime": 300,
    "cookie_name": "HCLBSTICKY",
    "redirect_http": true,
    "sticky_sessions": true
  },
  "listen_port": 443,
  "protocol": "https",
  "proxyprotocol": false
}
```

<h3 id="add-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|body|body|object|false|none|
|» destination_port|body|integer|true|Port the Load Balancer will balance to|
|» health_check|body|object|true|Service health check|
|» » http|body|object|false|Additional configuration for protocol http|
|» » » domain|body|string \| null|true|Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.|
|» » » path|body|string|true|HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.|
|» » » response|body|string|false|String that must be contained in HTTP response in order to pass the health check|
|» » » status_codes|body|[string]|false|List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??.|
|» » » tls|body|boolean|false|Use HTTPS for health check|
|» » interval|body|integer|true|Time interval in seconds health checks are performed|
|» » port|body|integer|true|Port the health check will be performed on|
|» » protocol|body|string|true|Type of the health check|
|» » retries|body|integer|true|Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again|
|» » timeout|body|integer|true|Time in seconds after an attempt is considered a timeout|
|» http|body|object|false|Configuration option for protocols http and https|
|» » certificates|body|[integer]|false|IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http"|
|» » cookie_lifetime|body|integer|false|Lifetime of the cookie used for sticky sessions|
|» » cookie_name|body|string|false|Name of the cookie used for sticky sessions|
|» » redirect_http|body|boolean|false|Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false`|
|» » sticky_sessions|body|boolean|false|Use sticky sessions. Only available if protocol is "http" or "https". Default `false`|
|» listen_port|body|integer|true|Port the Load Balancer listens on|
|» protocol|body|string|true|Protocol of the Load Balancer|
|» proxyprotocol|body|boolean|true|Is Proxyprotocol enabled or not|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » protocol|tcp|
|» » protocol|http|
|» protocol|tcp|
|» protocol|http|
|» protocol|https|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "add_service",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="add-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `add_service` Action|Inline|

<h3 id="add-service-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Add Target

> Code samples

```bash
curl https://example.com/load_balancers/0/actions/add_target \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ip": {
      "ip": "203.0.113.1"
    },
    "label_selector": {
      "selector": "env=prod"
    },
    "server": {
      "id": 80
    },
    "type": "server",
    "use_private_ip": true
  }'
```

`POST /load_balancers/{id}/actions/add_target`

Adds a target to a Load Balancer.

#### Call specific error codes

| Code                                    | Description                                                                                           |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------|
| `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
| `ip_not_owned`                          | The IP you are trying to add as a target is not owned by the Project owner                            |
| `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
| `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
| `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
| `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |


> Body parameter

```json
{
  "ip": {
    "ip": "203.0.113.1"
  },
  "label_selector": {
    "selector": "env=prod"
  },
  "server": {
    "id": 80
  },
  "type": "server",
  "use_private_ip": true
}
```

<h3 id="add-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|body|body|object|false|none|
|» ip|body|object|false|IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.|
|» » ip|body|string|true|IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.|
|» label_selector|body|object|false|Configuration for label selector targets, required if type is `label_selector`|
|» » selector|body|string|true|Label selector|
|» server|body|object|false|Configuration for type Server, required if type is `server`|
|» » id|body|number|true|ID of the Server|
|» type|body|string|true|Type of the resource|
|» use_private_ip|body|boolean|false|Use the private network IP instead of the public IP of the Server, requires the Server and Load Balancer to be in the same network. Default value is false.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|server|
|» type|label_selector|
|» type|ip|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "add_target",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="add-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `add_target` Action|Inline|

<h3 id="add-target-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Attach a Load Balancer to a Network

> Code samples

```bash
curl https://example.com/load_balancers/0/actions/attach_to_network \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ip": "10.0.1.1",
    "network": 4711
  }'
```

`POST /load_balancers/{id}/actions/attach_to_network`

Attach a Load Balancer to a Network.

**Call specific error codes**

| Code                             | Description                                                           |
|----------------------------------|-----------------------------------------------------------------------|
| `load_balancer_already_attached` | The Load Balancer is already attached to a network                    |
| `ip_not_available`               | The provided Network IP is not available                              |
| `no_subnet_available`            | No Subnet or IP is available for the Load Balancer within the network |


> Body parameter

```json
{
  "ip": "10.0.1.1",
  "network": 4711
}
```

<h3 id="attach-a-load-balancer-to-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|body|body|object|false|none|
|» ip|body|string|false|IP to request to be assigned to this Load Balancer; if you do not provide this then you will be auto assigned an IP address|
|» network|body|number|true|ID of an existing network to attach the Load Balancer to|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "attach_to_network",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="attach-a-load-balancer-to-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `attach_to_network` Action|Inline|

<h3 id="attach-a-load-balancer-to-a-network-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change Algorithm

> Code samples

```bash
curl https://example.com/load_balancers/0/actions/change_algorithm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "type": "round_robin"
  }'
```

`POST /load_balancers/{id}/actions/change_algorithm`

Change the algorithm that determines to which target new requests are sent.

> Body parameter

```json
{
  "type": "round_robin"
}
```

<h3 id="change-algorithm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|body|body|object|false|none|
|» type|body|string|true|Algorithm of the Load Balancer|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|round_robin|
|» type|least_connections|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_algorithm",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="change-algorithm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `change_algorithm` Action|Inline|

<h3 id="change-algorithm-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change reverse DNS entry for this Load Balancer

> Code samples

```bash
curl https://example.com/load_balancers/0/actions/change_dns_ptr \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dns_ptr": "lb1.example.com",
    "ip": "1.2.3.4"
  }'
```

`POST /load_balancers/{id}/actions/change_dns_ptr`

Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load Balancer.

Floating IPs assigned to the Server are not affected by this.


> Body parameter

```json
{
  "dns_ptr": "lb1.example.com",
  "ip": "1.2.3.4"
}
```

<h3 id="change-reverse-dns-entry-for-this-load-balancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|body|body|object|false|Select the IP address for which to change the DNS entry by passing `ip`. It can be either IPv4 or IPv6. The target hostname is set by passing `dns_ptr`.|
|» dns_ptr|body|string \| null|true|Hostname to set as a reverse DNS PTR entry|
|» ip|body|string|true|Public IP address for which the reverse DNS entry should be set|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_dns_ptr",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "load_balancer"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="change-reverse-dns-entry-for-this-load-balancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="change-reverse-dns-entry-for-this-load-balancer-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change Load Balancer Protection

> Code samples

```bash
curl https://example.com/load_balancers/0/actions/change_protection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "delete": true
  }'
```

`POST /load_balancers/{id}/actions/change_protection`

Changes the protection configuration of a Load Balancer.

> Body parameter

```json
{
  "delete": true
}
```

<h3 id="change-load-balancer-protection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|body|body|object|false|none|
|» delete|body|boolean|false|If true, prevents the Load Balancer from being deleted|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_protection",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="change-load-balancer-protection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `change_protection` Action|Inline|

<h3 id="change-load-balancer-protection-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change the Type of a Load Balancer

> Code samples

```bash
curl https://example.com/load_balancers/0/actions/change_type \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "load_balancer_type": "lb21"
  }'
```

`POST /load_balancers/{id}/actions/change_type`

Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.

**Call specific error codes**

| Code                         | Description                                                     |
|------------------------------|-----------------------------------------------------------------|
| `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |


> Body parameter

```json
{
  "load_balancer_type": "lb21"
}
```

<h3 id="change-the-type-of-a-load-balancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|body|body|object|false|none|
|» load_balancer_type|body|string|true|ID or name of Load Balancer type the Load Balancer should migrate to|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_load_balancer_type",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="change-the-type-of-a-load-balancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `change_load_balancer_type` Action|Inline|

<h3 id="change-the-type-of-a-load-balancer-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Service

> Code samples

```bash
curl https://example.com/load_balancers/0/actions/delete_service \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "listen_port": 4711
  }'
```

`POST /load_balancers/{id}/actions/delete_service`

Delete a service of a Load Balancer.

> Body parameter

```json
{
  "listen_port": 4711
}
```

<h3 id="delete-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|body|body|object|false|none|
|» listen_port|body|number|true|The listen port of the service you want to delete|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "delete_service",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="delete-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `delete_service` Action|Inline|

<h3 id="delete-service-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Detach a Load Balancer from a Network

> Code samples

```bash
curl https://example.com/load_balancers/0/actions/detach_from_network \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "network": 4711
  }'
```

`POST /load_balancers/{id}/actions/detach_from_network`

Detaches a Load Balancer from a network.

> Body parameter

```json
{
  "network": 4711
}
```

<h3 id="detach-a-load-balancer-from-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|body|body|object|false|none|
|» network|body|number|true|ID of an existing network to detach the Load Balancer from|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "detach_from_network",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="detach-a-load-balancer-from-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `detach_from_network` Action|Inline|

<h3 id="detach-a-load-balancer-from-a-network-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Disable the public interface of a Load Balancer

> Code samples

```bash
curl https://example.com/load_balancers/0/actions/disable_public_interface \
  -X POST \
  -H 'Accept: application/json'
```

`POST /load_balancers/{id}/actions/disable_public_interface`

Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its public IPs.

#### Call specific error codes

| Code                                      | Description                                                                    |
|-------------------------------------------|--------------------------------------------------------------------------------|
| `load_balancer_not_attached_to_network`   |  The Load Balancer is not attached to a network                                |
| `targets_without_use_private_ip`          | The Load Balancer has targets that use the public IP instead of the private IP |


<h3 id="disable-the-public-interface-of-a-load-balancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "disable_public_interface",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="disable-the-public-interface-of-a-load-balancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `disable_public_interface` Action|Inline|

<h3 id="disable-the-public-interface-of-a-load-balancer-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Enable the public interface of a Load Balancer

> Code samples

```bash
curl https://example.com/load_balancers/0/actions/enable_public_interface \
  -X POST \
  -H 'Accept: application/json'
```

`POST /load_balancers/{id}/actions/enable_public_interface`

Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.

<h3 id="enable-the-public-interface-of-a-load-balancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "enable_public_interface",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="enable-the-public-interface-of-a-load-balancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `enable_public_interface` Action|Inline|

<h3 id="enable-the-public-interface-of-a-load-balancer-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Target

> Code samples

```bash
curl https://example.com/load_balancers/0/actions/remove_target \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ip": {
      "ip": "203.0.113.1"
    },
    "label_selector": {
      "selector": "env=prod"
    },
    "server": {
      "id": 80
    },
    "type": "server"
  }'
```

`POST /load_balancers/{id}/actions/remove_target`

Removes a target from a Load Balancer.

> Body parameter

```json
{
  "ip": {
    "ip": "203.0.113.1"
  },
  "label_selector": {
    "selector": "env=prod"
  },
  "server": {
    "id": 80
  },
  "type": "server"
}
```

<h3 id="remove-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|body|body|object|false|none|
|» ip|body|object|false|IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.|
|» » ip|body|string|true|IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.|
|» label_selector|body|object|false|Configuration for label selector targets, required if type is `label_selector`|
|» » selector|body|string|true|Label selector|
|» server|body|object|false|Configuration for type Server, required if type is `server`|
|» » id|body|number|true|ID of the Server|
|» type|body|string|true|Type of the resource|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|server|
|» type|label_selector|
|» type|ip|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "remove_target",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="remove-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `remove_target` Action|Inline|

<h3 id="remove-target-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Update Service

> Code samples

```bash
curl https://example.com/load_balancers/0/actions/update_service \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destination_port": 80,
    "health_check": {
      "http": {
        "domain": "example.com",
        "path": "/",
        "response": "{\"status\": \"ok\"}",
        "status_codes": [
          "2??",
          "3??"
        ],
        "tls": false
      },
      "interval": 15,
      "port": 4711,
      "protocol": "http",
      "retries": 3,
      "timeout": 10
    },
    "http": {
      "certificates": [
        897
      ],
      "cookie_lifetime": 300,
      "cookie_name": "HCLBSTICKY",
      "redirect_http": true,
      "sticky_sessions": true
    },
    "listen_port": 443,
    "protocol": "https",
    "proxyprotocol": false
  }'
```

`POST /load_balancers/{id}/actions/update_service`

Updates a Load Balancer Service.

#### Call specific error codes

| Code                       | Description                                             |
|----------------------------|---------------------------------------------------------|
| `source_port_already_used` | The source port you are trying to add is already in use |


> Body parameter

```json
{
  "destination_port": 80,
  "health_check": {
    "http": {
      "domain": "example.com",
      "path": "/",
      "response": "{\"status\": \"ok\"}",
      "status_codes": [
        "2??",
        "3??"
      ],
      "tls": false
    },
    "interval": 15,
    "port": 4711,
    "protocol": "http",
    "retries": 3,
    "timeout": 10
  },
  "http": {
    "certificates": [
      897
    ],
    "cookie_lifetime": 300,
    "cookie_name": "HCLBSTICKY",
    "redirect_http": true,
    "sticky_sessions": true
  },
  "listen_port": 443,
  "protocol": "https",
  "proxyprotocol": false
}
```

<h3 id="update-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|body|body|object|false|none|
|» destination_port|body|integer|true|Port the Load Balancer will balance to|
|» health_check|body|object|true|Service health check|
|» » http|body|object|false|Additional configuration for protocol http|
|» » » domain|body|string \| null|true|Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.|
|» » » path|body|string|true|HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.|
|» » » response|body|string|false|String that must be contained in HTTP response in order to pass the health check|
|» » » status_codes|body|[string]|false|List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??.|
|» » » tls|body|boolean|false|Use HTTPS for health check|
|» » interval|body|integer|true|Time interval in seconds health checks are performed|
|» » port|body|integer|true|Port the health check will be performed on|
|» » protocol|body|string|true|Type of the health check|
|» » retries|body|integer|true|Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again|
|» » timeout|body|integer|true|Time in seconds after an attempt is considered a timeout|
|» http|body|object|false|Configuration option for protocols http and https|
|» » certificates|body|[integer]|false|IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http"|
|» » cookie_lifetime|body|integer|false|Lifetime of the cookie used for sticky sessions|
|» » cookie_name|body|string|false|Name of the cookie used for sticky sessions|
|» » redirect_http|body|boolean|false|Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false`|
|» » sticky_sessions|body|boolean|false|Use sticky sessions. Only available if protocol is "http" or "https". Default `false`|
|» listen_port|body|integer|true|Port the Load Balancer listens on|
|» protocol|body|string|true|Protocol of the Load Balancer|
|» proxyprotocol|body|boolean|true|Is Proxyprotocol enabled or not|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » protocol|tcp|
|» » protocol|http|
|» protocol|tcp|
|» protocol|http|
|» protocol|https|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "update_service",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="update-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `update_service` Action|Inline|

<h3 id="update-service-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Action for a Load Balancer

> Code samples

```bash
curl https://example.com/load_balancers/0/actions/0 \
  -H 'Accept: application/json'
```

`GET /load_balancers/{id}/actions/{action_id}`

Returns a specific Action for a Load Balancer.

<h3 id="get-an-action-for-a-load-balancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Load Balancer|
|action_id|path|integer|true|ID of the Action|

> Example responses

> 200 Response

```json
{
  "action": {
    "command": "change_protection",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="get-an-action-for-a-load-balancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `action` key contains the Load Balancer Action|Inline|

<h3 id="get-an-action-for-a-load-balancer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-load-balancer-types">Load Balancer Types</h1>

Load Balancer types define kinds of Load Balancers offered. Each type has an hourly and a monthly cost. You will pay whichever amount is lower for your usage of this specific Load Balancer. Costs may differ between Locations.

Currency for all amounts is €. All prices exclude VAT.


## Get all Load Balancer Types

> Code samples

```bash
curl https://example.com/load_balancer_types \
  -H 'Accept: application/json'
```

`GET /load_balancer_types`

Gets all Load Balancer type objects.

<h3 id="get-all-load-balancer-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Can be used to filter Load Balancer types by their name. The response will only contain the Load Balancer type matching the specified name.|

> Example responses

> 200 Response

```json
{
  "load_balancer_types": [
    {
      "deprecated": "2016-01-30T23:50:00+00:00",
      "description": "LB11",
      "id": 1,
      "max_assigned_certificates": 10,
      "max_connections": 20000,
      "max_services": 5,
      "max_targets": 25,
      "name": "lb11",
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          },
          "price_monthly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          }
        }
      ]
    }
  ]
}
```

<h3 id="get-all-load-balancer-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `load_balancer_types` key in the reply contains an array of Load Balancer type objects with this structure|Inline|

<h3 id="get-all-load-balancer-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|load_balancer_types|[object]|true|none|none|
|» deprecated|string \| null|true|none|Point in time when the Load Balancer type is deprecated (in ISO-8601 format)|
|» description|string|true|none|Description of the Load Balancer type|
|» id|number|true|none|ID of the Load Balancer type|
|» max_assigned_certificates|number|true|none|Number of SSL Certificates that can be assigned to a single Load Balancer|
|» max_connections|number|true|none|Number of maximum simultaneous open connections|
|» max_services|number|true|none|Number of services a Load Balancer of this type can have|
|» max_targets|number|true|none|Number of targets a single Load Balancer can have|
|» name|string|true|none|Unique identifier of the Load Balancer type|
|» prices|[object]|true|none|Prices in different network zones|
|» » location|string|true|none|Name of the Location the price is for|
|» » price_hourly|object|true|none|Hourly costs for a Resource in this Location|
|» » » gross|string|true|none|Price with VAT added|
|» » » net|string|true|none|Price without VAT|
|» » price_monthly|object|true|none|Monthly costs for a Resource in this Location|
|» » » gross|string|true|none|Price with VAT added|
|» » » net|string|true|none|Price without VAT|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Load Balancer Type

> Code samples

```bash
curl https://example.com/load_balancer_types/0 \
  -H 'Accept: application/json'
```

`GET /load_balancer_types/{id}`

Gets a specific Load Balancer type object.

<h3 id="get-a-load-balancer-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of Load Balancer type|

> Example responses

> 200 Response

```json
{
  "load_balancer_type": {
    "deprecated": "2016-01-30T23:50:00+00:00",
    "description": "LB11",
    "id": 1,
    "max_assigned_certificates": 10,
    "max_connections": 20000,
    "max_services": 5,
    "max_targets": 25,
    "name": "lb11",
    "prices": [
      {
        "location": "fsn1",
        "price_hourly": {
          "gross": "1.1900000000000000",
          "net": "1.0000000000"
        },
        "price_monthly": {
          "gross": "1.1900000000000000",
          "net": "1.0000000000"
        }
      }
    ]
  }
}
```

<h3 id="get-a-load-balancer-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `load_balancer_type` key in the reply contains a Load Balancer type object with this structure|Inline|

<h3 id="get-a-load-balancer-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|load_balancer_type|object|false|none|none|
|» deprecated|string \| null|true|none|Point in time when the Load Balancer type is deprecated (in ISO-8601 format)|
|» description|string|true|none|Description of the Load Balancer type|
|» id|number|true|none|ID of the Load Balancer type|
|» max_assigned_certificates|number|true|none|Number of SSL Certificates that can be assigned to a single Load Balancer|
|» max_connections|number|true|none|Number of maximum simultaneous open connections|
|» max_services|number|true|none|Number of services a Load Balancer of this type can have|
|» max_targets|number|true|none|Number of targets a single Load Balancer can have|
|» name|string|true|none|Unique identifier of the Load Balancer type|
|» prices|[object]|true|none|Prices in different network zones|
|» » location|string|true|none|Name of the Location the price is for|
|» » price_hourly|object|true|none|Hourly costs for a Resource in this Location|
|» » » gross|string|true|none|Price with VAT added|
|» » » net|string|true|none|Price without VAT|
|» » price_monthly|object|true|none|Monthly costs for a Resource in this Location|
|» » » gross|string|true|none|Price with VAT added|
|» » » net|string|true|none|Price without VAT|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-locations">Locations</h1>

Datacenters are organized by Locations. Datacenters in the same Location are connected with very low latency links.

## Get all Locations

> Code samples

```bash
curl https://example.com/locations \
  -H 'Accept: application/json'
```

`GET /locations`

Returns all Location objects.

<h3 id="get-all-locations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Can be used to filter Locations by their name. The response will only contain the Location matching the specified name.|

> Example responses

> 200 Response

```json
{
  "locations": [
    {
      "city": "Falkenstein",
      "country": "DE",
      "description": "Falkenstein DC Park 1",
      "id": 1,
      "latitude": 50.47612,
      "longitude": 12.370071,
      "name": "fsn1",
      "network_zone": "eu-central"
    }
  ]
}
```

<h3 id="get-all-locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `locations` key in the reply contains an array of Location objects with this structure|Inline|

<h3 id="get-all-locations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[object]|true|none|none|
|» city|string|true|none|City the Location is closest to|
|» country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» description|string|true|none|Description of the Location|
|» id|number|true|none|ID of the Location|
|» latitude|number|true|none|Latitude of the city closest to the Location|
|» longitude|number|true|none|Longitude of the city closest to the Location|
|» name|string|true|none|Unique identifier of the Location|
|» network_zone|string|true|none|Name of network zone this Location resides in|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Location

> Code samples

```bash
curl https://example.com/locations/0 \
  -H 'Accept: application/json'
```

`GET /locations/{id}`

Returns a specific Location object.

<h3 id="get-a-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of Location|

> Example responses

> 200 Response

```json
{
  "location": {
    "city": "Falkenstein",
    "country": "DE",
    "description": "Falkenstein DC Park 1",
    "id": 1,
    "latitude": 50.47612,
    "longitude": 12.370071,
    "name": "fsn1",
    "network_zone": "eu-central"
  }
}
```

<h3 id="get-a-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `location` key in the reply contains a Location object with this structure|Inline|

<h3 id="get-a-location-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|object|true|none|none|
|» city|string|true|none|City the Location is closest to|
|» country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» description|string|true|none|Description of the Location|
|» id|number|true|none|ID of the Location|
|» latitude|number|true|none|Latitude of the city closest to the Location|
|» longitude|number|true|none|Longitude of the city closest to the Location|
|» name|string|true|none|Unique identifier of the Location|
|» network_zone|string|true|none|Name of network zone this Location resides in|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-primary-ips">Primary IPs</h1>

Primary IPs help you to create more flexible networking setups. You can assign at most one Primary IP of type `ipv4` and one of type `ipv6` per Server. This Server then uses these IPs.

You can only unassign a Primary IP from a Server when it's powered off. This Primary IP can then be assigned to a different powered off Server, or you can keep it around for later use.

Primary IPs are bound to a specific Datacenter. You can not assign a Primary IP from one Datacenter to a Server in a different Datacenter. If you need this capability use Floating IPs instead.

If your Server's operating system supports cloud-init there is no further configuration needed to make Primary IPs work.

Primary IPs of type `ipv4` use a single IPv4 address as their `ip` property. Primary IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.

Primary IPs are billed on an hourly basis.


## Get all Primary IPs

> Code samples

```bash
curl https://example.com/primary_ips \
  -H 'Accept: application/json'
```

`GET /primary_ips`

Returns all Primary IP objects.

<h3 id="get-all-primary-ips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Can be used to filter resources by their name. The response will only contain the resources matching the specified name|
|label_selector|query|string|false|Can be used to filter resources by labels. The response will only contain resources matching the label selector.|
|ip|query|string|false|Can be used to filter resources by their ip. The response will only contain the resources matching the specified ip.|
|sort|query|string|false|Can be used multiple times. Choices id id:asc id:desc created created:asc created:desc|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|created|
|sort|created:asc|
|sort|created:desc|

> Example responses

> 200 Response

```json
{
  "meta": {
    "pagination": {
      "last_page": 4,
      "next_page": 4,
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "total_entries": 100
    }
  },
  "primary_ips": [
    {
      "assignee_id": 17,
      "assignee_type": "server",
      "auto_delete": true,
      "blocked": false,
      "created": "2016-01-30T23:55:00+00:00",
      "datacenter": {
        "description": "Falkenstein DC Park 8",
        "id": 42,
        "location": {
          "city": "Falkenstein",
          "country": "DE",
          "description": "Falkenstein DC Park 1",
          "id": 1,
          "latitude": 50.47612,
          "longitude": 12.370071,
          "name": "fsn1",
          "network_zone": "eu-central"
        },
        "name": "fsn1-dc8",
        "server_types": {
          "available": [
            1,
            2,
            3
          ],
          "available_for_migration": [
            1,
            2,
            3
          ],
          "supported": [
            1,
            2,
            3
          ]
        }
      },
      "dns_ptr": [
        {
          "dns_ptr": "server.example.com",
          "ip": "131.232.99.1"
        }
      ],
      "id": 42,
      "ip": "131.232.99.1",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "my-resource",
      "protection": {
        "delete": false
      },
      "type": "ipv4"
    }
  ]
}
```

<h3 id="get-all-primary-ips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `primary_ips` key contains an array of Primary IP objects|Inline|

<h3 id="get-all-primary-ips-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|
|primary_ips|[object]|true|none|none|
|» assignee_id|integer \| null|true|none|ID of the resource the Primary IP is assigned to, null if it is not assigned at all|
|» assignee_type|string|true|none|Resource type the Primary IP can be assigned to|
|» auto_delete|boolean|true|none|Delete this Primary IP when the resource it is assigned to is deleted|
|» blocked|boolean|true|none|Whether the IP is blocked|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» datacenter|object|true|none|Datacenter this Primary IP is located at|
|» » description|string|true|none|Description of the Datacenter|
|» » id|integer|true|none|ID of the Resource|
|» » location|object|true|none|none|
|» » » city|string|true|none|City the Location is closest to|
|» » » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » » description|string|true|none|Description of the Location|
|» » » id|number|true|none|ID of the Location|
|» » » latitude|number|true|none|Latitude of the city closest to the Location|
|» » » longitude|number|true|none|Longitude of the city closest to the Location|
|» » » name|string|true|none|Unique identifier of the Location|
|» » » network_zone|string|true|none|Name of network zone this Location resides in|
|» » name|string|true|none|Unique identifier of the Datacenter|
|» » server_types|object|true|none|The Server types the Datacenter can handle|
|» » » available|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » available_for_migration|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » supported|[number]|true|none|IDs of Server types that are supported in the Datacenter|
|» dns_ptr|[object]|true|none|Array of reverse DNS entries|
|» » dns_ptr|string|true|none|DNS pointer for the specific IP address|
|» » ip|string|true|none|Single IPv4 or IPv6 address|
|» id|integer|true|none|ID of the Resource|
|» ip|string|true|none|IP address|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» type|string|true|none|Type of the Primary IP|

#### Enumerated Values

|Property|Value|
|---|---|
|» assignee_type|server|
|» type|ipv4|
|» type|ipv6|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Primary IP

> Code samples

```bash
curl https://example.com/primary_ips \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "assignee_id": 17,
    "assignee_type": "server",
    "auto_delete": false,
    "datacenter": "fsn1-dc8",
    "labels": {
      "labelkey": "value"
    },
    "name": "my-ip",
    "type": "ipv4"
  }'
```

`POST /primary_ips`

Creates a new Primary IP, optionally assigned to a Server.

If you want to create a Primary IP that is not assigned to a Server, you need to provide the `datacenter` key instead of `assignee_id`. This can be either the ID or the name of the Datacenter this Primary IP shall be created in.

Note that a Primary IP can only be assigned to a Server in the same Datacenter later on.

#### Call specific error codes

| Code                          | Description                                                   |
|------------------------------ |-------------------------------------------------------------- |
| `server_not_stopped`          | The specified server is running, but needs to be powered off  |
| `server_has_ipv4`             | The server already has an ipv4 address                        |
| `server_has_ipv6`             | The server already has an ipv6 address                        |


> Body parameter

```json
{
  "assignee_id": 17,
  "assignee_type": "server",
  "auto_delete": false,
  "datacenter": "fsn1-dc8",
  "labels": {
    "labelkey": "value"
  },
  "name": "my-ip",
  "type": "ipv4"
}
```

<h3 id="create-a-primary-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|The `type` argument is required while `datacenter` and `assignee_id` are mutually exclusive.|
|» assignee_id|body|integer|false|ID of the resource the Primary IP should be assigned to. Omitted if it should not be assigned.|
|» assignee_type|body|string|true|Resource type the Primary IP can be assigned to|
|» auto_delete|body|boolean|false|Delete the Primary IP when the Server it is assigned to is deleted. If omitted defaults to `false`.|
|» datacenter|body|string|false|ID or name of Datacenter the Primary IP will be bound to. Needs to be omitted if `assignee_id` is passed.|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» name|body|string|true|none|
|» type|body|string|true|Primary IP type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» assignee_type|server|
|» type|ipv4|
|» type|ipv6|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "create_primary_ip",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 17,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  },
  "primary_ip": {
    "assignee_id": 17,
    "assignee_type": "server",
    "auto_delete": true,
    "blocked": false,
    "created": "2016-01-30T23:50:00+00:00",
    "datacenter": {
      "description": "Falkenstein DC Park 8",
      "id": 42,
      "location": {
        "city": "Falkenstein",
        "country": "DE",
        "description": "Falkenstein DC Park 1",
        "id": 1,
        "latitude": 50.47612,
        "longitude": 12.370071,
        "name": "fsn1",
        "network_zone": "eu-central"
      },
      "name": "fsn1-dc8",
      "server_types": {
        "available": [
          1,
          2,
          3
        ],
        "available_for_migration": [
          1,
          2,
          3
        ],
        "supported": [
          1,
          2,
          3
        ]
      }
    },
    "dns_ptr": [
      {
        "dns_ptr": "server.example.com",
        "ip": "2001:db8::1"
      }
    ],
    "id": 42,
    "ip": "131.232.99.1",
    "labels": {
      "labelkey": "value"
    },
    "name": "my-ip",
    "protection": {
      "delete": false
    },
    "type": "ipv4"
  }
}
```

<h3 id="create-a-primary-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `primary_ip` key contains the Primary IP that was just created|Inline|

<h3 id="create-a-primary-ip-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|primary_ip|object|true|none|none|
|» assignee_id|integer \| null|true|none|ID of the resource the Primary IP is assigned to, null if it is not assigned at all|
|» assignee_type|string|true|none|Resource type the Primary IP can be assigned to|
|» auto_delete|boolean|true|none|Delete this Primary IP when the resource it is assigned to is deleted|
|» blocked|boolean|true|none|Whether the IP is blocked|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» datacenter|object|true|none|Datacenter this Primary IP is located at|
|» » description|string|true|none|Description of the Datacenter|
|» » id|integer|true|none|ID of the Resource|
|» » location|object|true|none|none|
|» » » city|string|true|none|City the Location is closest to|
|» » » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » » description|string|true|none|Description of the Location|
|» » » id|number|true|none|ID of the Location|
|» » » latitude|number|true|none|Latitude of the city closest to the Location|
|» » » longitude|number|true|none|Longitude of the city closest to the Location|
|» » » name|string|true|none|Unique identifier of the Location|
|» » » network_zone|string|true|none|Name of network zone this Location resides in|
|» » name|string|true|none|Unique identifier of the Datacenter|
|» » server_types|object|true|none|The Server types the Datacenter can handle|
|» » » available|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » available_for_migration|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » supported|[number]|true|none|IDs of Server types that are supported in the Datacenter|
|» dns_ptr|[object]|true|none|Array of reverse DNS entries|
|» » dns_ptr|string|true|none|DNS pointer for the specific IP address|
|» » ip|string|true|none|Single IPv4 or IPv6 address|
|» id|integer|true|none|ID of the Resource|
|» ip|string|true|none|IP address|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» type|string|true|none|Type of the Primary IP|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|
|» assignee_type|server|
|» type|ipv4|
|» type|ipv6|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Primary IP

> Code samples

```bash
curl https://example.com/primary_ips/0 \
  -H 'Accept: application/json'
```

`GET /primary_ips/{id}`

Returns a specific Primary IP object.

<h3 id="get-a-primary-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "primary_ip": {
    "assignee_id": 17,
    "assignee_type": "server",
    "auto_delete": true,
    "blocked": false,
    "created": "2016-01-30T23:55:00+00:00",
    "datacenter": {
      "description": "Falkenstein DC Park 8",
      "id": 42,
      "location": {
        "city": "Falkenstein",
        "country": "DE",
        "description": "Falkenstein DC Park 1",
        "id": 1,
        "latitude": 50.47612,
        "longitude": 12.370071,
        "name": "fsn1",
        "network_zone": "eu-central"
      },
      "name": "fsn1-dc8",
      "server_types": {
        "available": [
          1,
          2,
          3
        ],
        "available_for_migration": [
          1,
          2,
          3
        ],
        "supported": [
          1,
          2,
          3
        ]
      }
    },
    "dns_ptr": [
      {
        "dns_ptr": "server.example.com",
        "ip": "131.232.99.1"
      }
    ],
    "id": 42,
    "ip": "131.232.99.1",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "my-resource",
    "protection": {
      "delete": false
    },
    "type": "ipv4"
  }
}
```

<h3 id="get-a-primary-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `primary_ip` key contains a Primary IP object|Inline|

<h3 id="get-a-primary-ip-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primary_ip|object|true|none|none|
|» assignee_id|integer \| null|true|none|ID of the resource the Primary IP is assigned to, null if it is not assigned at all|
|» assignee_type|string|true|none|Resource type the Primary IP can be assigned to|
|» auto_delete|boolean|true|none|Delete this Primary IP when the resource it is assigned to is deleted|
|» blocked|boolean|true|none|Whether the IP is blocked|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» datacenter|object|true|none|Datacenter this Primary IP is located at|
|» » description|string|true|none|Description of the Datacenter|
|» » id|integer|true|none|ID of the Resource|
|» » location|object|true|none|none|
|» » » city|string|true|none|City the Location is closest to|
|» » » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » » description|string|true|none|Description of the Location|
|» » » id|number|true|none|ID of the Location|
|» » » latitude|number|true|none|Latitude of the city closest to the Location|
|» » » longitude|number|true|none|Longitude of the city closest to the Location|
|» » » name|string|true|none|Unique identifier of the Location|
|» » » network_zone|string|true|none|Name of network zone this Location resides in|
|» » name|string|true|none|Unique identifier of the Datacenter|
|» » server_types|object|true|none|The Server types the Datacenter can handle|
|» » » available|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » available_for_migration|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » supported|[number]|true|none|IDs of Server types that are supported in the Datacenter|
|» dns_ptr|[object]|true|none|Array of reverse DNS entries|
|» » dns_ptr|string|true|none|DNS pointer for the specific IP address|
|» » ip|string|true|none|Single IPv4 or IPv6 address|
|» id|integer|true|none|ID of the Resource|
|» ip|string|true|none|IP address|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» type|string|true|none|Type of the Primary IP|

#### Enumerated Values

|Property|Value|
|---|---|
|» assignee_type|server|
|» type|ipv4|
|» type|ipv6|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Primary IP

> Code samples

```bash
curl https://example.com/primary_ips/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "auto_delete": true,
    "labels": {
      "labelkey": "value"
    },
    "name": "my-ip"
  }'
```

`PUT /primary_ips/{id}`

Updates the Primary IP.

Note that when updating labels, the Primary IP's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

If the Primary IP object changes during the request, the response will be a “conflict” error.


> Body parameter

```json
{
  "auto_delete": true,
  "labels": {
    "labelkey": "value"
  },
  "name": "my-ip"
}
```

<h3 id="update-a-primary-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the resource|
|body|body|object|false|none|
|» auto_delete|body|boolean|false|Delete this Primary IP when the resource it is assigned to is deleted|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» name|body|string|false|New unique name to set|

> Example responses

> 200 Response

```json
{
  "primary_ip": {
    "assignee_id": 17,
    "assignee_type": "server",
    "auto_delete": true,
    "blocked": false,
    "created": "2016-01-30T23:55:00+00:00",
    "datacenter": {
      "description": "Falkenstein DC Park 8",
      "id": 42,
      "location": {
        "city": "Falkenstein",
        "country": "DE",
        "description": "Falkenstein DC Park 1",
        "id": 1,
        "latitude": 50.47612,
        "longitude": 12.370071,
        "name": "fsn1",
        "network_zone": "eu-central"
      },
      "name": "fsn1-dc8",
      "server_types": {
        "available": [
          1,
          2,
          3
        ],
        "available_for_migration": [
          1,
          2,
          3
        ],
        "supported": [
          1,
          2,
          3
        ]
      }
    },
    "dns_ptr": [
      {
        "dns_ptr": "server.example.com",
        "ip": "131.232.99.1"
      }
    ],
    "id": 42,
    "ip": "131.232.99.1",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "my-resource",
    "protection": {
      "delete": false
    },
    "type": "ipv4"
  }
}
```

<h3 id="update-a-primary-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `primary_ip` key contains the Primary IP that was just updated|Inline|

<h3 id="update-a-primary-ip-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primary_ip|object|true|none|none|
|» assignee_id|integer \| null|true|none|ID of the resource the Primary IP is assigned to, null if it is not assigned at all|
|» assignee_type|string|true|none|Resource type the Primary IP can be assigned to|
|» auto_delete|boolean|true|none|Delete this Primary IP when the resource it is assigned to is deleted|
|» blocked|boolean|true|none|Whether the IP is blocked|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» datacenter|object|true|none|Datacenter this Primary IP is located at|
|» » description|string|true|none|Description of the Datacenter|
|» » id|integer|true|none|ID of the Resource|
|» » location|object|true|none|none|
|» » » city|string|true|none|City the Location is closest to|
|» » » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » » description|string|true|none|Description of the Location|
|» » » id|number|true|none|ID of the Location|
|» » » latitude|number|true|none|Latitude of the city closest to the Location|
|» » » longitude|number|true|none|Longitude of the city closest to the Location|
|» » » name|string|true|none|Unique identifier of the Location|
|» » » network_zone|string|true|none|Name of network zone this Location resides in|
|» » name|string|true|none|Unique identifier of the Datacenter|
|» » server_types|object|true|none|The Server types the Datacenter can handle|
|» » » available|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » available_for_migration|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » supported|[number]|true|none|IDs of Server types that are supported in the Datacenter|
|» dns_ptr|[object]|true|none|Array of reverse DNS entries|
|» » dns_ptr|string|true|none|DNS pointer for the specific IP address|
|» » ip|string|true|none|Single IPv4 or IPv6 address|
|» id|integer|true|none|ID of the Resource|
|» ip|string|true|none|IP address|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» type|string|true|none|Type of the Primary IP|

#### Enumerated Values

|Property|Value|
|---|---|
|» assignee_type|server|
|» type|ipv4|
|» type|ipv6|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Primary IP

> Code samples

```bash
curl https://example.com/primary_ips/0 \
  -X DELETE
```

`DELETE /primary_ips/{id}`

Deletes a Primary IP.

The Primary IP may be assigned to a Server. In this case it is unassigned automatically. The Server must be powered off (status `off`) in order for this operation to succeed.


<h3 id="delete-a-primary-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the resource|

<h3 id="delete-a-primary-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Primary IP deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-primary-ip-actions">Primary IP Actions</h1>

## Assign a Primary IP to a resource

> Code samples

```bash
curl https://example.com/primary_ips/0/actions/assign \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "assignee_id": 4711,
    "assignee_type": "server"
  }'
```

`POST /primary_ips/{id}/actions/assign`

Assigns a Primary IP to a Server.

A Server can only have one Primary IP of type `ipv4` and one of type `ipv6` assigned. If you need more IPs use Floating IPs.

The Server must be powered off (status `off`) in order for this operation to succeed.

#### Call specific error codes

| Code                          | Description                                                   |
|------------------------------ |-------------------------------------------------------------- |
| `server_not_stopped`          | The server is running, but needs to be powered off            |
| `primary_ip_already_assigned` | Primary ip is already assigned to a different server          |
| `server_has_ipv4`             | The server already has an ipv4 address                        |
| `server_has_ipv6`             | The server already has an ipv6 address                        |


> Body parameter

```json
{
  "assignee_id": 4711,
  "assignee_type": "server"
}
```

<h3 id="assign-a-primary-ip-to-a-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Primary IP|
|body|body|object|false|none|
|» assignee_id|body|integer|true|ID of a resource of type `assignee_type`|
|» assignee_type|body|string|true|Type of resource assigning the Primary IP to|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» assignee_type|server|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "assign_primary_ip",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "primary_ip"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="assign-a-primary-ip-to-a-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="assign-a-primary-ip-to-a-resource-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change reverse DNS entry for a Primary IP

> Code samples

```bash
curl https://example.com/primary_ips/0/actions/change_dns_ptr \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dns_ptr": "server02.example.com",
    "ip": "1.2.3.4"
  }'
```

`POST /primary_ips/{id}/actions/change_dns_ptr`

Changes the hostname that will appear when getting the hostname belonging to this Primary IP.

> Body parameter

```json
{
  "dns_ptr": "server02.example.com",
  "ip": "1.2.3.4"
}
```

<h3 id="change-reverse-dns-entry-for-a-primary-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Primary IP|
|body|body|object|false|Select the IP address for which to change the DNS entry by passing `ip`. For a Primary IP of type `ipv4` this must exactly match the IP address of the Primary IP. For a Primary IP of type `ipv6` this must be a single IP within the IPv6 /64 range that belongs to this Primary IP.<br><br>The target hostname is set by passing `dns_ptr`.<br>|
|» dns_ptr|body|string \| null|true|Hostname to set as a reverse DNS PTR entry, will reset to original default value if `null`|
|» ip|body|string|true|IP address for which to set the reverse DNS entry|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_dns_ptr",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "primary_ip"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="change-reverse-dns-entry-for-a-primary-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `change_dns_ptr` Action|Inline|

<h3 id="change-reverse-dns-entry-for-a-primary-ip-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change Primary IP Protection

> Code samples

```bash
curl https://example.com/primary_ips/0/actions/change_protection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "delete": true
  }'
```

`POST /primary_ips/{id}/actions/change_protection`

Changes the protection configuration of a Primary IP.

A Primary IP can only be delete protected if its `auto_delete` property is set to `false`.


> Body parameter

```json
{
  "delete": true
}
```

<h3 id="change-primary-ip-protection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Primary IP|
|body|body|object|false|none|
|» delete|body|boolean|false|If true, prevents the Primary IP from being deleted|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_protection",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "primary_ip"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="change-primary-ip-protection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `change_protection` Action|Inline|

<h3 id="change-primary-ip-protection-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Unassign a Primary IP from a resource

> Code samples

```bash
curl https://example.com/primary_ips/0/actions/unassign \
  -X POST \
  -H 'Accept: application/json'
```

`POST /primary_ips/{id}/actions/unassign`

Unassigns a Primary IP from a Server.

The Server must be powered off (status `off`) in order for this operation to succeed.

Note that only Servers that have at least one network interface (public or private) attached can be powered on.

#### Call specific error codes

| Code                              | Description                                                   |
|---------------------------------- |-------------------------------------------------------------- |
| `server_not_stopped`              | The server is running, but needs to be powered off            |
| `server_is_load_balancer_target`  | The server ipv4 address is a loadbalancer target              |


<h3 id="unassign-a-primary-ip-from-a-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Primary IP|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "unassign_primary_ip",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "primary_ip"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="unassign-a-primary-ip-from-a-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="unassign-a-primary-ip-from-a-resource-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-networks">Networks</h1>

Networks is a private networks feature. These Networks are optional and they coexist with the public network that every Server has by default.

They allow Servers to talk to each other over a dedicated network interface using private IP addresses not available publicly.

The IP addresses are allocated and managed via the API, they must conform to [RFC1918](https://tools.ietf.org/html/rfc1918#section-3) standard. IPs and network interfaces defined under Networks do not provide public internet connectivity, you will need to use the already existing public network interface for that.

Each network has a user selected `ip_range` which defines all available IP addresses which can be used for Subnets within the Network.

To assign individual IPs to Servers you will need to create Network Subnets, described below.

Currently Networks support IPv4 only.

### Subnets
Subnets divide the `ip_range` from the parent Network object into multiple Subnetworks that you can use for different specific purposes.

For each subnet you need to specify its own `ip_range` which must be contained within the parent Network’s `ip_range`. Additionally each subnet must belong to one of the available Network Zones described below. Subnets can not have overlapping IP ranges.

Currently there are three types of subnet:
* type `cloud` is used to connect cloud Resources into your Network.
* type `server` was used to connect only cloud Servers into your Network. This type is deprecated and is replaced by type cloud.
* type `vswitch` allows you to connect [Dedicated Server vSwitch](https://docs.hetzner.com/robot/dedicated-server/network/vswitch) - and all Dedicated Servers attached to it - into your Network

Subnets of type `vswitch` must set a `vswitch_id` which is the ID of the existing vSwitch in Hetzner Robot that should be coupled.

### Network Zones
Network Zones are groups of Locations which have special high-speed network connections between them. The [Location object](https://docs.hetzner.cloud/#locations-get-a-location) contains the `network_zone` property each Location belongs to. Currently these network zones exist:

|Network Zone|Contains Locations|
|------------|------------------|
|eu-central  | nbg1, fsn1, hel1 |
|us-east     | ash              |

### IP address management
When a cloud Server is attached to a network without the user specifying an IP it automatically gets an IP address assigned from a subnet of type `server` in the same network zone. If you specify the optional `ip` parameter when attaching then we will try to assign that IP. Keep in mind that the Server’s location must be covered by the Subnet’s Network Zone if you specify an IP, or that at least one Subnet with the zone covering Server’s location must exist.

A cloud Server can also have more than one IP address in a Network by specifying aliases. For details see the [attach to network action](https://docs.hetzner.cloud/#server-actions-attach-a-server-to-a-network).

The following IP addresses are reserved in networks and can not be used:
  * the first IP of the network `ip_range` as it will be used as a default gateway for the private Network interface.
  * `172.31.1.1` as it is being used as default gateway for our public Network interfaces.

### Coupling Dedicated Servers

By using subnets of type `vswitch` you can couple the Cloud Networks with an existing [Dedicated Server vSwitch](https://docs.hetzner.com/robot/dedicated-server/network/vswitch) and enable dedicated and cloud servers to
talk to each other over the Network.
In order for this to work the dedicated servers may only use IPs from the subnet and must have a special network configuration. Please refer to [FAQ](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch). vSwitch Layer 2 features are not supported.

### Routes
Networks also support the notion of routes which are automatically applied to private traffic. A route makes sure that all packets for a given `destination` IP prefix will be sent to the address specified in its `gateway`.


## Get all Networks

> Code samples

```bash
curl https://example.com/networks \
  -H 'Accept: application/json'
```

`GET /networks`

Gets all existing networks that you have available.

<h3 id="get-all-networks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Can be used to filter networks by their name. The response will only contain the networks matching the specified name.|
|label_selector|query|string|false|Can be used to filter networks by labels. The response will only contain networks with a matching label selector pattern.|

> Example responses

> 200 Response

```json
{
  "meta": {
    "pagination": {
      "last_page": 4,
      "next_page": 4,
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "total_entries": 100
    }
  },
  "networks": [
    {
      "created": "2016-01-30T23:50:00+00:00",
      "id": 4711,
      "ip_range": "10.0.0.0/16",
      "labels": {},
      "load_balancers": [
        42
      ],
      "name": "mynet",
      "protection": {
        "delete": false
      },
      "routes": [
        {
          "destination": "10.100.1.0/24",
          "gateway": "10.0.1.1"
        }
      ],
      "servers": [
        42
      ],
      "subnets": [
        {
          "gateway": "10.0.0.1",
          "ip_range": "10.0.1.0/24",
          "network_zone": "eu-central",
          "type": "cloud"
        }
      ]
    }
  ]
}
```

<h3 id="get-all-networks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `networks` key contains a list of networks|Inline|

<h3 id="get-all-networks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|
|networks|[object]|true|none|none|
|» created|string|true|none|Point in time when the Network was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Network|
|» ip_range|string|true|none|IPv4 prefix of the whole Network|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» load_balancers|[integer]|false|none|Array of IDs of Load Balancers attached to this Network|
|» name|string|true|none|Name of the Network|
|» protection|object|true|none|Protection configuration for the Network|
|» » delete|boolean|true|none|If true, prevents the Network from being deleted|
|» routes|[object]|true|none|Array of routes set in this Network|
|» » destination|string|true|none|Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.|
|» » gateway|string|true|none|Gateway for the route. Cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1 as this IP is being used as a gateway for the public network interface of Servers.|
|» servers|[integer]|true|none|Array of IDs of Servers attached to this Network|
|» subnets|[object]|true|none|Array subnets allocated in this Network|
|» » gateway|string|true|none|Gateway for Servers attached to this subnet. For subnets of type Server this is always the first IP of the network IP range.|
|» » ip_range|string|false|none|Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask.|
|» » network_zone|string|true|none|Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.|
|» » type|string|true|none|Type of Subnetwork|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|cloud|
|» » type|server|
|» » type|vswitch|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Network

> Code samples

```bash
curl https://example.com/networks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ip_range": "10.0.0.0/16",
    "labels": {
      "labelkey": "value"
    },
    "name": "mynet",
    "routes": [
      {
        "destination": "10.100.1.0/24",
        "gateway": "10.0.1.1"
      }
    ],
    "subnets": [
      {
        "ip_range": "10.0.1.0/24",
        "network_zone": "eu-central",
        "type": "cloud"
      }
    ]
  }'
```

`POST /networks`

Creates a network with the specified `ip_range`.

You may specify one or more `subnets`. You can also add more Subnets later by using the [add subnet action](https://docs.hetzner.cloud/#network-actions-add-a-subnet-to-a-network). If you do not specify an `ip_range` in the subnet we will automatically pick the first available /24 range for you.

You may specify one or more routes in `routes`. You can also add more routes later by using the [add route action](https://docs.hetzner.cloud/#network-actions-add-a-route-to-a-network).


> Body parameter

```json
{
  "ip_range": "10.0.0.0/16",
  "labels": {
    "labelkey": "value"
  },
  "name": "mynet",
  "routes": [
    {
      "destination": "10.100.1.0/24",
      "gateway": "10.0.1.1"
    }
  ],
  "subnets": [
    {
      "ip_range": "10.0.1.0/24",
      "network_zone": "eu-central",
      "type": "cloud"
    }
  ]
}
```

<h3 id="create-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» ip_range|body|string|true|IP range of the whole network which must span all included subnets. Must be one of the private IPv4 ranges of RFC1918. Minimum network size is /24. We highly recommend that you pick a larger network with a /16 netmask.|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» » labelkey|body|string|false|New label|
|» name|body|string|true|Name of the network|
|» routes|body|[object]|false|Array of routes set in this network. The destination of the route must be one of the private IPv4 ranges of RFC1918. The gateway must be a subnet/IP of the ip_range of the network object. The destination must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. The gateway cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1.|
|» » destination|body|string|true|Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.|
|» » gateway|body|string|true|Gateway for the route. Cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1 as this IP is being used as a gateway for the public network interface of Servers.|
|» subnets|body|[object]|false|Array of subnets allocated.|
|» » ip_range|body|string|false|Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask.|
|» » network_zone|body|string|true|Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.|
|» » type|body|string|true|Type of Subnetwork|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|cloud|
|» » type|server|
|» » type|vswitch|

> Example responses

> 201 Response

```json
{
  "network": {
    "created": "2016-01-30T23:50:00+00:00",
    "id": 4711,
    "ip_range": "10.0.0.0/16",
    "labels": {},
    "load_balancers": [
      42
    ],
    "name": "mynet",
    "protection": {
      "delete": false
    },
    "routes": [
      {
        "destination": "10.100.1.0/24",
        "gateway": "10.0.1.1"
      }
    ],
    "servers": [
      42
    ],
    "subnets": [
      {
        "gateway": "10.0.0.1",
        "ip_range": "10.0.1.0/24",
        "network_zone": "eu-central",
        "type": "cloud"
      }
    ]
  }
}
```

<h3 id="create-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `network` key contains the network that was just created|Inline|

<h3 id="create-a-network-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|network|object|false|none|none|
|» created|string|true|none|Point in time when the Network was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Network|
|» ip_range|string|true|none|IPv4 prefix of the whole Network|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» load_balancers|[integer]|false|none|Array of IDs of Load Balancers attached to this Network|
|» name|string|true|none|Name of the Network|
|» protection|object|true|none|Protection configuration for the Network|
|» » delete|boolean|true|none|If true, prevents the Network from being deleted|
|» routes|[object]|true|none|Array of routes set in this Network|
|» » destination|string|true|none|Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.|
|» » gateway|string|true|none|Gateway for the route. Cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1 as this IP is being used as a gateway for the public network interface of Servers.|
|» servers|[integer]|true|none|Array of IDs of Servers attached to this Network|
|» subnets|[object]|true|none|Array subnets allocated in this Network|
|» » gateway|string|true|none|Gateway for Servers attached to this subnet. For subnets of type Server this is always the first IP of the network IP range.|
|» » ip_range|string|false|none|Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask.|
|» » network_zone|string|true|none|Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.|
|» » type|string|true|none|Type of Subnetwork|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|cloud|
|» » type|server|
|» » type|vswitch|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Network

> Code samples

```bash
curl https://example.com/networks/0 \
  -H 'Accept: application/json'
```

`GET /networks/{id}`

Gets a specific network object.

<h3 id="get-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the network|

> Example responses

> 200 Response

```json
{
  "network": {
    "created": "2016-01-30T23:50:00+00:00",
    "id": 4711,
    "ip_range": "10.0.0.0/16",
    "labels": {},
    "load_balancers": [
      42
    ],
    "name": "mynet",
    "protection": {
      "delete": false
    },
    "routes": [
      {
        "destination": "10.100.1.0/24",
        "gateway": "10.0.1.1"
      }
    ],
    "servers": [
      42
    ],
    "subnets": [
      {
        "gateway": "10.0.0.1",
        "ip_range": "10.0.1.0/24",
        "network_zone": "eu-central",
        "type": "cloud"
      }
    ]
  }
}
```

<h3 id="get-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `network` key contains the network|Inline|

<h3 id="get-a-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|network|object|false|none|none|
|» created|string|true|none|Point in time when the Network was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Network|
|» ip_range|string|true|none|IPv4 prefix of the whole Network|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» load_balancers|[integer]|false|none|Array of IDs of Load Balancers attached to this Network|
|» name|string|true|none|Name of the Network|
|» protection|object|true|none|Protection configuration for the Network|
|» » delete|boolean|true|none|If true, prevents the Network from being deleted|
|» routes|[object]|true|none|Array of routes set in this Network|
|» » destination|string|true|none|Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.|
|» » gateway|string|true|none|Gateway for the route. Cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1 as this IP is being used as a gateway for the public network interface of Servers.|
|» servers|[integer]|true|none|Array of IDs of Servers attached to this Network|
|» subnets|[object]|true|none|Array subnets allocated in this Network|
|» » gateway|string|true|none|Gateway for Servers attached to this subnet. For subnets of type Server this is always the first IP of the network IP range.|
|» » ip_range|string|false|none|Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask.|
|» » network_zone|string|true|none|Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.|
|» » type|string|true|none|Type of Subnetwork|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|cloud|
|» » type|server|
|» » type|vswitch|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Network

> Code samples

```bash
curl https://example.com/networks/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labels": {
      "labelkey": "value"
    },
    "name": "new-name"
  }'
```

`PUT /networks/{id}`

Updates the network properties.

Note that when updating labels, the network’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the network object changes during the request, the response will be a “conflict” error.


> Body parameter

```json
{
  "labels": {
    "labelkey": "value"
  },
  "name": "new-name"
}
```

<h3 id="update-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the network|
|body|body|object|false|none|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» » labelkey|body|string|false|none|
|» name|body|string|false|New network name|

> Example responses

> 200 Response

```json
{
  "network": {
    "created": "2016-01-30T23:50:00+00:00",
    "id": 4711,
    "ip_range": "10.0.0.0/16",
    "labels": {
      "labelkey": "value"
    },
    "load_balancers": [
      42
    ],
    "name": "new-name",
    "protection": {
      "delete": false
    },
    "routes": [
      {
        "destination": "10.100.1.0/24",
        "gateway": "10.0.1.1"
      }
    ],
    "servers": [
      42
    ],
    "subnets": [
      {
        "gateway": "10.0.0.1",
        "ip_range": "10.0.1.0/24",
        "network_zone": "eu-central",
        "type": "cloud"
      }
    ]
  }
}
```

<h3 id="update-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `network` key contains the updated network|Inline|

<h3 id="update-a-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|network|object|false|none|none|
|» created|string|true|none|Point in time when the Network was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Network|
|» ip_range|string|true|none|IPv4 prefix of the whole Network|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» load_balancers|[integer]|false|none|Array of IDs of Load Balancers attached to this Network|
|» name|string|true|none|Name of the Network|
|» protection|object|true|none|Protection configuration for the Network|
|» » delete|boolean|true|none|If true, prevents the Network from being deleted|
|» routes|[object]|true|none|Array of routes set in this Network|
|» » destination|string|true|none|Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.|
|» » gateway|string|true|none|Gateway for the route. Cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1 as this IP is being used as a gateway for the public network interface of Servers.|
|» servers|[integer]|true|none|Array of IDs of Servers attached to this Network|
|» subnets|[object]|true|none|Array subnets allocated in this Network|
|» » gateway|string|true|none|Gateway for Servers attached to this subnet. For subnets of type Server this is always the first IP of the network IP range.|
|» » ip_range|string|false|none|Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask.|
|» » network_zone|string|true|none|Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.|
|» » type|string|true|none|Type of Subnetwork|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|cloud|
|» » type|server|
|» » type|vswitch|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Network

> Code samples

```bash
curl https://example.com/networks/0 \
  -X DELETE
```

`DELETE /networks/{id}`

Deletes a network. If there are Servers attached they will be detached in the background.

Note: if the network object changes during the request, the response will be a “conflict” error.


<h3 id="delete-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the network|

<h3 id="delete-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Network deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-network-actions">Network Actions</h1>

## Get all Actions for a Network

> Code samples

```bash
curl https://example.com/networks/0/actions \
  -H 'Accept: application/json'
```

`GET /networks/{id}/actions`

Returns all Action objects for a Network. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

<h3 id="get-all-actions-for-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Network|
|sort|query|string|false|Can be used multiple times.|
|status|query|string|false|Can be used multiple times, the response will contain only Actions with specified statuses|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|command|
|sort|command:asc|
|sort|command:desc|
|sort|status|
|sort|status:asc|
|sort|status:desc|
|sort|progress|
|sort|progress:asc|
|sort|progress:desc|
|sort|started|
|sort|started:asc|
|sort|started:desc|
|sort|finished|
|sort|finished:asc|
|sort|finished:desc|
|status|running|
|status|success|
|status|error|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "command": "add_subnet",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2016-01-30T23:56:00+00:00",
      "id": 13,
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "started": "2016-01-30T23:55:00+00:00",
      "status": "success"
    }
  ]
}
```

<h3 id="get-all-actions-for-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `actions` key contains a list of Actions|Inline|

<h3 id="get-all-actions-for-a-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Add a route to a Network

> Code samples

```bash
curl https://example.com/networks/0/actions/add_route \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destination": "10.100.1.0/24",
    "gateway": "10.0.1.1"
  }'
```

`POST /networks/{id}/actions/add_route`

Adds a route entry to a Network.

Note: if the Network object changes during the request, the response will be a “conflict” error.


> Body parameter

```json
{
  "destination": "10.100.1.0/24",
  "gateway": "10.0.1.1"
}
```

<h3 id="add-a-route-to-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Network|
|body|body|object|false|none|
|» destination|body|string|true|Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.|
|» gateway|body|string|true|Gateway for the route. Cannot be the first IP of the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP is being used as a gateway for the public network interface of Servers.|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "add_route",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="add-a-route-to-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `add_route` Action|Inline|

<h3 id="add-a-route-to-a-network-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Add a subnet to a Network

> Code samples

```bash
curl https://example.com/networks/0/actions/add_subnet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ip_range": "10.0.1.0/24",
    "network_zone": "eu-central",
    "type": "cloud",
    "vswitch_id": 1000
  }'
```

`POST /networks/{id}/actions/add_subnet`

Adds a new subnet object to the Network. If you do not specify an `ip_range` for the subnet we will automatically pick the first available /24 range for you if possible.

Note: if the parent Network object changes during the request, the response will be a “conflict” error.


> Body parameter

```json
{
  "ip_range": "10.0.1.0/24",
  "network_zone": "eu-central",
  "type": "cloud",
  "vswitch_id": 1000
}
```

<h3 id="add-a-subnet-to-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Network|
|body|body|object|false|none|
|» ip_range|body|string|false|Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. If the Subnet is of type vSwitch, it also can not overlap with any gateway in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask.|
|» network_zone|body|string|true|Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.|
|» type|body|string|true|Type of Subnetwork|
|» vswitch_id|body|integer|false|ID of the robot vSwitch. Must be supplied if the subnet is of type vswitch.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|cloud|
|» type|server|
|» type|vswitch|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "add_subnet",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="add-a-subnet-to-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `add_subnet` Action|Inline|

<h3 id="add-a-subnet-to-a-network-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change IP range of a Network

> Code samples

```bash
curl https://example.com/networks/0/actions/change_ip_range \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ip_range": "10.0.0.0/12"
  }'
```

`POST /networks/{id}/actions/change_ip_range`

Changes the IP range of a Network. IP ranges can only be extended and never shrunk. You can only add IPs at the end of an existing IP range. This means that the IP part of your existing range must stay the same and you can only change its netmask.

For example if you have a range `10.0.0.0/16` you want to extend then your new range must also start with the IP `10.0.0.0`. Your CIDR netmask `/16` may change to a number that is smaller than `16` thereby increasing the IP range. So valid entries would be `10.0.0.0/15`, `10.0.0.0/14`, `10.0.0.0/13` and so on.

After changing the IP range you will have to adjust the routes on your connected Servers by either rebooting them or manually changing the routes to your private Network interface.

Note: if the Network object changes during the request, the response will be a “conflict” error.


> Body parameter

```json
{
  "ip_range": "10.0.0.0/12"
}
```

<h3 id="change-ip-range-of-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Network|
|body|body|object|false|none|
|» ip_range|body|string|true|The new prefix for the whole Network|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_ip_range",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="change-ip-range-of-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `change_ip_range` Action|Inline|

<h3 id="change-ip-range-of-a-network-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change Network Protection

> Code samples

```bash
curl https://example.com/networks/0/actions/change_protection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "delete": true
  }'
```

`POST /networks/{id}/actions/change_protection`

Changes the protection configuration of a Network.

Note: if the Network object changes during the request, the response will be a “conflict” error.


> Body parameter

```json
{
  "delete": true
}
```

<h3 id="change-network-protection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Network|
|body|body|object|false|none|
|» delete|body|boolean|false|If true, prevents the Network from being deleted|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_protection",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="change-network-protection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `change_protection` Action|Inline|

<h3 id="change-network-protection-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a route from a Network

> Code samples

```bash
curl https://example.com/networks/0/actions/delete_route \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destination": "10.100.1.0/24",
    "gateway": "10.0.1.1"
  }'
```

`POST /networks/{id}/actions/delete_route`

Delete a route entry from a Network.

Note: if the Network object changes during the request, the response will be a “conflict” error.


> Body parameter

```json
{
  "destination": "10.100.1.0/24",
  "gateway": "10.0.1.1"
}
```

<h3 id="delete-a-route-from-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Network|
|body|body|object|false|none|
|» destination|body|string|true|Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.|
|» gateway|body|string|true|Gateway for the route. Cannot be the first IP of the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP is being used as a gateway for the public network interface of Servers.|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "delete_route",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="delete-a-route-from-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `delete_route` Action|Inline|

<h3 id="delete-a-route-from-a-network-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a subnet from a Network

> Code samples

```bash
curl https://example.com/networks/0/actions/delete_subnet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ip_range": "10.0.1.0/24"
  }'
```

`POST /networks/{id}/actions/delete_subnet`

Deletes a single subnet entry from a Network. You cannot delete subnets which still have Servers attached. If you have Servers attached you first need to detach all Servers that use IPs from this subnet before you can delete the subnet.

Note: if the Network object changes during the request, the response will be a “conflict” error.


> Body parameter

```json
{
  "ip_range": "10.0.1.0/24"
}
```

<h3 id="delete-a-subnet-from-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Network|
|body|body|object|false|none|
|» ip_range|body|string|true|IP range of subnet to delete|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "delete_subnet",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="delete-a-subnet-from-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `delete_subnet` Action|Inline|

<h3 id="delete-a-subnet-from-a-network-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Action for a Network

> Code samples

```bash
curl https://example.com/networks/0/actions/0 \
  -H 'Accept: application/json'
```

`GET /networks/{id}/actions/{action_id}`

Returns a specific Action for a Network.

<h3 id="get-an-action-for-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Network|
|action_id|path|integer|true|ID of the Action|

> Example responses

> 200 Response

```json
{
  "action": {
    "command": "add_subnet",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="get-an-action-for-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `action` key contains the Network Action|Inline|

<h3 id="get-an-action-for-a-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-placement-groups">Placement Groups</h1>

Placement groups are used to influence the location of interdependent virtual servers in our data centers. The distribution of the different instances within a group is based on a pattern specified in the type. By enforcing certain rules on the placement of instances within our infrastructure, availability can be influenced in a way that fits your needs best.

In `spread` placement groups, all virtual servers will run on different physical servers. This decreases the probability that some instances might fail together.


## Get all PlacementGroups

> Code samples

```bash
curl https://example.com/placement_groups \
  -H 'Accept: application/json'
```

`GET /placement_groups`

Returns all PlacementGroup objects.

<h3 id="get-all-placementgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Can be used multiple times.|
|name|query|string|false|Can be used to filter resources by their name. The response will only contain the resources matching the specified name|
|label_selector|query|string|false|Can be used to filter resources by labels. The response will only contain resources matching the label selector.|
|type|query|string|false|Can be used multiple times. The response will only contain PlacementGroups matching the type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|name|
|sort|name:asc|
|sort|name:desc|
|sort|created|
|sort|created:asc|
|sort|created:desc|
|type|spread|

> Example responses

> 200 Response

```json
{
  "placement_groups": [
    {
      "created": "2019-01-08T12:10:00+00:00",
      "id": 897,
      "labels": {
        "key": "value"
      },
      "name": "my Placement Group",
      "servers": [
        4711,
        4712
      ],
      "type": "spread"
    }
  ]
}
```

<h3 id="get-all-placementgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `placement_groups` key contains an array of PlacementGroup objects|Inline|

<h3 id="get-all-placementgroups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|
|placement_groups|[object]|true|none|none|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» servers|[integer]|true|none|Array of IDs of Servers that are part of this Placement Group|
|» type|string|true|none|Type of the Placement Group|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|spread|

<aside class="success">
This operation does not require authentication
</aside>

## Create a PlacementGroup

> Code samples

```bash
curl https://example.com/placement_groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my Placement Group",
    "type": "spread"
  }'
```

`POST /placement_groups`

Creates a new PlacementGroup.


> Body parameter

```json
{
  "name": "my Placement Group",
  "type": "spread"
}
```

<h3 id="create-a-placementgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» name|body|string|true|Name of the PlacementGroup|
|» type|body|string|true|Define the Placement Group Type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|spread|

> Example responses

> 201 Response

```json
{
  "placement_group": {
    "created": "2019-01-08T12:10:00+00:00",
    "id": 897,
    "labels": {
      "key": "value"
    },
    "name": "my Placement Group",
    "servers": [],
    "type": "spread"
  }
}
```

<h3 id="create-a-placementgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `PlacementGroup` key contains the PlacementGroup that was just created.|Inline|

<h3 id="create-a-placementgroup-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object \| null|false|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|placement_group|object|true|none|none|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» servers|[integer]|true|none|Array of IDs of Servers that are part of this Placement Group|
|» type|string|true|none|Type of the Placement Group|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|
|» type|spread|

<aside class="success">
This operation does not require authentication
</aside>

## Get a PlacementGroup

> Code samples

```bash
curl https://example.com/placement_groups/0 \
  -H 'Accept: application/json'
```

`GET /placement_groups/{id}`

Gets a specific PlacementGroup object.

<h3 id="get-a-placementgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the resource|

> Example responses

> 200 Response

```json
{
  "placement_group": {
    "created": "2019-01-08T12:10:00+00:00",
    "id": 897,
    "labels": {
      "key": "value"
    },
    "name": "my Placement Group",
    "servers": [
      4711,
      4712
    ],
    "type": "spread"
  }
}
```

<h3 id="get-a-placementgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `placement_group` key contains a PlacementGroup object|Inline|

<h3 id="get-a-placementgroup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placement_group|object|true|none|none|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» servers|[integer]|true|none|Array of IDs of Servers that are part of this Placement Group|
|» type|string|true|none|Type of the Placement Group|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|spread|

<aside class="success">
This operation does not require authentication
</aside>

## Update a PlacementGroup

> Code samples

```bash
curl https://example.com/placement_groups/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labels": {
      "labelkey": "value"
    },
    "name": "my Placement Group"
  }'
```

`PUT /placement_groups/{id}`

Updates the PlacementGroup properties.

Note that when updating labels, the PlacementGroup’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the PlacementGroup object changes during the request, the response will be a “conflict” error.


> Body parameter

```json
{
  "labels": {
    "labelkey": "value"
  },
  "name": "my Placement Group"
}
```

<h3 id="update-a-placementgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the resource|
|body|body|object|false|none|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» name|body|string|false|New PlacementGroup name|

> Example responses

> 200 Response

```json
{
  "placement_group": {
    "created": "2019-01-08T12:10:00+00:00",
    "id": 897,
    "labels": {
      "key": "value"
    },
    "name": "my Placement Group",
    "servers": [
      4711,
      4712
    ],
    "type": "spread"
  }
}
```

<h3 id="update-a-placementgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `certificate` key contains the PlacementGroup that was just updated|Inline|

<h3 id="update-a-placementgroup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placement_group|object|true|none|none|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» servers|[integer]|true|none|Array of IDs of Servers that are part of this Placement Group|
|» type|string|true|none|Type of the Placement Group|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|spread|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a PlacementGroup

> Code samples

```bash
curl https://example.com/placement_groups/0 \
  -X DELETE
```

`DELETE /placement_groups/{id}`

Deletes a PlacementGroup.

<h3 id="delete-a-placementgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the resource|

<h3 id="delete-a-placementgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|PlacementGroup deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-pricing">Pricing</h1>

Returns prices for resources.

## Get all prices

> Code samples

```bash
curl https://example.com/pricing \
  -H 'Accept: application/json'
```

`GET /pricing`

Returns prices for all resources available on the platform. VAT and currency of the Project owner are used for calculations.

Both net and gross prices are included in the response.


> Example responses

> 200 Response

```json
{
  "pricing": {
    "currency": "EUR",
    "floating_ip": {
      "price_monthly": {
        "gross": "1.1900000000000000",
        "net": "1.0000000000"
      }
    },
    "floating_ips": [
      {
        "prices": [
          {
            "location": "fsn1",
            "price_monthly": {
              "gross": "1.1900000000000000",
              "net": "1.0000000000"
            }
          }
        ],
        "type": "ipv4"
      }
    ],
    "image": {
      "price_per_gb_month": {
        "gross": "1.1900000000000000",
        "net": "1.0000000000"
      }
    },
    "load_balancer_types": [
      {
        "id": 1,
        "name": "lb11",
        "prices": [
          {
            "location": "fsn1",
            "price_hourly": {
              "gross": "1.1900000000000000",
              "net": "1.0000000000"
            },
            "price_monthly": {
              "gross": "1.1900000000000000",
              "net": "1.0000000000"
            }
          }
        ]
      }
    ],
    "primary_ips": [
      {
        "prices": [
          {
            "location": "fsn1",
            "price_hourly": {
              "gross": "1.1900000000000000",
              "net": "1.0000000000"
            },
            "price_monthly": {
              "gross": "1.1900000000000000",
              "net": "1.0000000000"
            }
          }
        ],
        "type": "ipv4"
      }
    ],
    "server_backup": {
      "percentage": "20.0000000000"
    },
    "server_types": [
      {
        "id": 4,
        "name": "cx11",
        "prices": [
          {
            "location": "fsn1",
            "price_hourly": {
              "gross": "1.1900000000000000",
              "net": "1.0000000000"
            },
            "price_monthly": {
              "gross": "1.1900000000000000",
              "net": "1.0000000000"
            }
          }
        ]
      }
    ],
    "traffic": {
      "price_per_tb": {
        "gross": "1.1900000000000000",
        "net": "1.0000000000"
      }
    },
    "vat_rate": "19.000000",
    "volume": {
      "price_per_gb_month": {
        "gross": "1.1900000000000000",
        "net": "1.0000000000"
      }
    }
  }
}
```

<h3 id="get-all-prices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `pricing` key in the reply contains an pricing object with this structure|Inline|

<h3 id="get-all-prices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pricing|object|true|none|none|
|» currency|string|true|none|Currency the returned prices are expressed in, coded according to ISO 4217|
|» floating_ip|object|true|none|The cost of one Floating IP per month|
|» » price_monthly|object|true|none|none|
|» » » gross|string|true|none|Price with VAT added|
|» » » net|string|true|none|Price without VAT|
|» floating_ips|[object]|true|none|Costs of Floating IPs types per Location and type|
|» » prices|[object]|true|none|Floating IP type costs per Location|
|» » » location|string|true|none|Name of the Location the price is for|
|» » » price_monthly|object|true|none|Monthly costs for a Floating IP type in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » type|string|true|none|The type of the Floating IP|
|» image|object|true|none|The cost of Image per GB/month|
|» » price_per_gb_month|object|true|none|none|
|» » » gross|string|true|none|Price with VAT added|
|» » » net|string|true|none|Price without VAT|
|» load_balancer_types|[object]|true|none|Costs of Load Balancer types per Location and type|
|» » id|number|true|none|ID of the Load Balancer type the price is for|
|» » name|string|true|none|Name of the Load Balancer type the price is for|
|» » prices|[object]|true|none|Load Balancer type costs per Location|
|» » » location|string|true|none|Name of the Location the price is for|
|» » » price_hourly|object|true|none|Hourly costs for a Load Balancer type in this network zone|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » » price_monthly|object|true|none|Monthly costs for a Load Balancer type in this network zone|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» primary_ips|[object]|true|none|Costs of Primary IPs types per Location|
|» » prices|[object]|true|none|Primary IP type costs per Location|
|» » » location|string|true|none|Name of the Location the price is for|
|» » » price_hourly|object|true|none|Hourly costs for a Primary IP type in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » » price_monthly|object|true|none|Monthly costs for a Primary IP type in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » type|string|true|none|The type of the Primary IP|
|» server_backup|object|true|none|Will increase base Server costs by specific percentage|
|» » percentage|string|true|none|Percentage by how much the base price will increase|
|» server_types|[object]|true|none|Costs of Server types per Location and type|
|» » id|number|true|none|ID of the Server type the price is for|
|» » name|string|true|none|Name of the Server type the price is for|
|» » prices|[object]|true|none|Server type costs per Location|
|» » » location|string|true|none|Name of the Location the price is for|
|» » » price_hourly|object|true|none|Hourly costs for a Server type in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » » price_monthly|object|true|none|Monthly costs for a Server type in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» traffic|object|true|none|The cost of additional traffic per TB|
|» » price_per_tb|object|true|none|none|
|» » » gross|string|true|none|Price with VAT added|
|» » » net|string|true|none|Price without VAT|
|» vat_rate|string|true|none|The VAT rate used for calculating prices with VAT|
|» volume|object|true|none|The cost of Volume per GB/month|
|» » price_per_gb_month|object|true|none|none|
|» » » gross|string|true|none|Price with VAT added|
|» » » net|string|true|none|Price without VAT|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|ipv4|
|» » type|ipv6|
|» » type|ipv4|
|» » type|ipv6|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-servers">Servers</h1>

Servers are virtual machines that can be provisioned.

## Get all Servers

> Code samples

```bash
curl https://example.com/servers \
  -H 'Accept: application/json'
```

`GET /servers`

Returns all existing Server objects

<h3 id="get-all-servers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Can be used to filter resources by their name. The response will only contain the resources matching the specified name|
|label_selector|query|string|false|Can be used to filter resources by labels. The response will only contain resources matching the label selector.|
|sort|query|string|false|Can be used multiple times.|
|status|query|string|false|Can be used multiple times. The response will only contain Server matching the status|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|name|
|sort|name:asc|
|sort|name:desc|
|sort|created|
|sort|created:asc|
|sort|created:desc|
|status|initializing|
|status|starting|
|status|running|
|status|stopping|
|status|off|
|status|deleting|
|status|rebuilding|
|status|migrating|
|status|unknown|

> Example responses

> 200 Response

```json
{
  "meta": {
    "pagination": {
      "last_page": 4,
      "next_page": 4,
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "total_entries": 100
    }
  },
  "servers": [
    {
      "backup_window": "22-02",
      "created": "2016-01-30T23:55:00+00:00",
      "datacenter": {
        "description": "Falkenstein DC Park 8",
        "id": 42,
        "location": {
          "city": "Falkenstein",
          "country": "DE",
          "description": "Falkenstein DC Park 1",
          "id": 1,
          "latitude": 50.47612,
          "longitude": 12.370071,
          "name": "fsn1",
          "network_zone": "eu-central"
        },
        "name": "fsn1-dc8",
        "server_types": {
          "available": [
            1,
            2,
            3
          ],
          "available_for_migration": [
            1,
            2,
            3
          ],
          "supported": [
            1,
            2,
            3
          ]
        }
      },
      "id": 42,
      "image": {
        "bound_to": null,
        "created": "2016-01-30T23:55:00+00:00",
        "created_from": {
          "id": 1,
          "name": "Server"
        },
        "deleted": null,
        "deprecated": "2018-02-28T00:00:00+00:00",
        "description": "Ubuntu 20.04 Standard 64 bit",
        "disk_size": 10,
        "id": 42,
        "image_size": 2.3,
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "ubuntu-20.04",
        "os_flavor": "ubuntu",
        "os_version": "20.04",
        "protection": {
          "delete": false
        },
        "rapid_deploy": false,
        "status": "available",
        "type": "snapshot"
      },
      "included_traffic": 654321,
      "ingoing_traffic": 123456,
      "iso": {
        "deprecated": "2018-02-28T00:00:00+00:00",
        "description": "FreeBSD 11.0 x64",
        "id": 42,
        "name": "FreeBSD-11.0-RELEASE-amd64-dvd1",
        "type": "public"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "load_balancers": [
        0
      ],
      "locked": false,
      "name": "my-resource",
      "outgoing_traffic": 123456,
      "placement_group": {
        "created": "2016-01-30T23:55:00+00:00",
        "id": 42,
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "my-resource",
        "servers": [
          42
        ],
        "type": "spread"
      },
      "primary_disk_size": 50,
      "private_net": [
        {
          "alias_ips": [
            "string"
          ],
          "ip": "10.0.0.2",
          "mac_address": "86:00:ff:2a:7d:e1",
          "network": 4711
        }
      ],
      "protection": {
        "delete": false,
        "rebuild": false
      },
      "public_net": {
        "firewalls": [
          {
            "id": 42,
            "status": "applied"
          }
        ],
        "floating_ips": [
          478
        ],
        "ipv4": {
          "blocked": false,
          "dns_ptr": "server01.example.com",
          "id": 42,
          "ip": "1.2.3.4"
        },
        "ipv6": {
          "blocked": false,
          "dns_ptr": [
            {
              "dns_ptr": "server.example.com",
              "ip": "2001:db8::1"
            }
          ],
          "id": 42,
          "ip": "2001:db8::/64"
        }
      },
      "rescue_enabled": false,
      "server_type": {
        "cores": 1,
        "cpu_type": "shared",
        "deprecated": false,
        "description": "CX11",
        "disk": 25,
        "id": 1,
        "memory": 1,
        "name": "cx11",
        "prices": [
          {
            "location": "fsn1",
            "price_hourly": {
              "gross": "1.1900000000000000",
              "net": "1.0000000000"
            },
            "price_monthly": {
              "gross": "1.1900000000000000",
              "net": "1.0000000000"
            }
          }
        ],
        "storage_type": "local"
      },
      "status": "running",
      "volumes": [
        0
      ]
    }
  ]
}
```

<h3 id="get-all-servers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paged array of servers|Inline|

<h3 id="get-all-servers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|
|servers|[object]|true|none|none|
|» backup_window|string \| null|true|none|Time window (UTC) in which the backup will run, or null if the backups are not enabled|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» datacenter|object|true|none|Datacenter this Resource is located at|
|» » description|string|true|none|Description of the Datacenter|
|» » id|integer|true|none|ID of the Resource|
|» » location|object|true|none|none|
|» » » city|string|true|none|City the Location is closest to|
|» » » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » » description|string|true|none|Description of the Location|
|» » » id|number|true|none|ID of the Location|
|» » » latitude|number|true|none|Latitude of the city closest to the Location|
|» » » longitude|number|true|none|Longitude of the city closest to the Location|
|» » » name|string|true|none|Unique identifier of the Location|
|» » » network_zone|string|true|none|Name of network zone this Location resides in|
|» » name|string|true|none|Unique identifier of the Datacenter|
|» » server_types|object|true|none|The Server types the Datacenter can handle|
|» » » available|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » available_for_migration|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » supported|[number]|true|none|IDs of Server types that are supported in the Datacenter|
|» id|integer|true|none|ID of the Resource|
|» image|object \| null|true|none|none|
|» » bound_to|integer \| null|true|none|ID of Server the Image is bound to. Only set for Images of type `backup`.|
|» » created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» » created_from|object \| null|true|none|Information about the Server the Image was created from|
|» » » id|integer|true|none|ID of the Server the Image was created from|
|» » » name|string|true|none|Server name at the time the Image was created|
|» » deleted|string \| null|true|none|Point in time where the Image was deleted (in ISO-8601 format)|
|» » deprecated|string \| null|true|none|Point in time when the Image is considered to be deprecated (in ISO-8601 format)|
|» » description|string|true|none|Description of the Image|
|» » disk_size|number|true|none|Size of the disk contained in the Image in GB|
|» » id|integer|true|none|ID of the Resource|
|» » image_size|number \| null|true|none|Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.|
|» » labels|object|true|none|User-defined labels (key-value pairs)|
|» » » **additionalProperties**|string|false|none|none|
|» » name|string \| null|true|none|Unique identifier of the Image. This value is only set for system Images.|
|» » os_flavor|string|true|none|Flavor of operating system contained in the Image|
|» » os_version|string \| null|true|none|Operating system version|
|» » protection|object|true|none|Protection configuration for the Resource|
|» » » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» » rapid_deploy|boolean|false|none|Indicates that rapid deploy of the Image is available|
|» » status|string|true|none|Whether the Image can be used or if it's still being created or unavailable|
|» » type|string|true|none|Type of the Image|
|» included_traffic|number \| null|true|none|Free Traffic for the current billing period in bytes|
|» ingoing_traffic|number \| null|true|none|Inbound Traffic for the current billing period in bytes|
|» iso|object \| null|true|none|ISO Image that is attached to this Server. Null if no ISO is attached.|
|» » deprecated|string \| null|true|none|ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.|
|» » description|string|true|none|Description of the ISO|
|» » id|integer|true|none|ID of the Resource|
|» » name|string \| null|true|none|Unique identifier of the ISO. Only set for public ISOs|
|» » type|string|true|none|Type of the ISO|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» load_balancers|[integer]|false|none|none|
|» locked|boolean|true|none|True if Server has been locked and is not available to user|
|» name|string|true|none|Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)|
|» outgoing_traffic|number \| null|true|none|Outbound Traffic for the current billing period in bytes|
|» placement_group|object \| null|false|none|none|
|» » created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» » id|integer|true|none|ID of the Resource|
|» » labels|object|true|none|User-defined labels (key-value pairs)|
|» » » **additionalProperties**|string|false|none|none|
|» » name|string|true|none|Name of the Resource. Must be unique per Project.|
|» » servers|[integer]|true|none|Array of IDs of Servers that are part of this Placement Group|
|» » type|string|true|none|Type of the Placement Group|
|» primary_disk_size|number|true|none|Size of the primary Disk|
|» private_net|[object]|true|none|Private networks information|
|» » alias_ips|[string]|false|none|none|
|» » ip|string|false|none|none|
|» » mac_address|string|false|none|none|
|» » network|integer|false|none|none|
|» protection|object|true|none|Protection configuration for the Server|
|» » delete|boolean|true|none|If true, prevents the Server from being deleted|
|» » rebuild|boolean|true|none|If true, prevents the Server from being rebuilt|
|» public_net|object|true|none|Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`|
|» » firewalls|[object]|false|none|Firewalls applied to the public network interface of this Server|
|» » » id|integer|false|none|ID of the Resource|
|» » » status|string|false|none|Status of the Firewall on the Server|
|» » floating_ips|[integer]|true|none|IDs of Floating IPs assigned to this Server|
|» » ipv4|object \| null|true|none|IP address (v4) and its reverse DNS entry of this Server|
|» » » blocked|boolean|true|none|If the IP is blocked by our anti abuse dept|
|» » » dns_ptr|string|true|none|Reverse DNS PTR entry for the IPv4 addresses of this Server|
|» » » id|integer|false|none|ID of the Resource|
|» » » ip|string|true|none|IP address (v4) of this Server|
|» » ipv6|object \| null|true|none|IPv6 network assigned to this Server and its reverse DNS entry|
|» » » blocked|boolean|true|none|If the IP is blocked by our anti abuse dept|
|» » » dns_ptr|[object]|true|none|Reverse DNS PTR entries for the IPv6 addresses of this Server, `null` by default|
|» » » » dns_ptr|string|true|none|DNS pointer for the specific IP address|
|» » » » ip|string|true|none|Single IPv6 address of this Server for which the reverse DNS entry has been set up|
|» » » id|integer|false|none|ID of the Resource|
|» » » ip|string|true|none|IP address (v6) of this Server|
|» rescue_enabled|boolean|true|none|True if rescue mode is enabled. Server will then boot into rescue system on next reboot|
|» server_type|object|true|none|Type of Server - determines how much ram, disk and cpu a Server has|
|» » cores|number|true|none|Number of cpu cores a Server of this type will have|
|» » cpu_type|string|true|none|Type of cpu|
|» » deprecated|boolean|true|none|True if Server type is deprecated|
|» » description|string|true|none|Description of the Server type|
|» » disk|number|true|none|Disk size a Server of this type will have in GB|
|» » id|integer|true|none|ID of the Server type|
|» » memory|number|true|none|Memory a Server of this type will have in GB|
|» » name|string|true|none|Unique identifier of the Server type|
|» » prices|[object]|true|none|Prices in different Locations|
|» » » location|string|true|none|Name of the Location the price is for|
|» » » price_hourly|object|true|none|Hourly costs for a Server type in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » » price_monthly|object|true|none|Monthly costs for a Server type in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » storage_type|string|true|none|Type of Server boot drive. Local has higher speed. Network has better availability.|
|» status|string|true|none|Status of the Server|
|» volumes|[integer]|false|none|IDs of Volumes assigned to this Server|

#### Enumerated Values

|Property|Value|
|---|---|
|» » os_flavor|ubuntu|
|» » os_flavor|centos|
|» » os_flavor|debian|
|» » os_flavor|fedora|
|» » os_flavor|unknown|
|» » status|available|
|» » status|creating|
|» » status|unavailable|
|» » type|system|
|» » type|app|
|» » type|snapshot|
|» » type|backup|
|» » type|temporary|
|» » type|public|
|» » type|private|
|» » type|spread|
|» » » status|applied|
|» » » status|pending|
|» » cpu_type|shared|
|» » cpu_type|dedicated|
|» » storage_type|local|
|» » storage_type|network|
|» status|running|
|» status|initializing|
|» status|starting|
|» status|stopping|
|» status|off|
|» status|deleting|
|» status|migrating|
|» status|rebuilding|
|» status|unknown|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-next|string||A link to the next page of responses|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Server

> Code samples

```bash
curl https://example.com/servers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "automount": false,
    "datacenter": "nbg1-dc3",
    "firewalls": [
      {
        "firewall": 38
      }
    ],
    "image": "ubuntu-20.04",
    "labels": {},
    "location": "nbg1",
    "name": "my-server",
    "networks": [
      456
    ],
    "placement_group": 1,
    "public_net": {
      "enable_ipv4": true,
      "enable_ipv6": true,
      "ipv4": 0,
      "ipv6": 0
    },
    "server_type": "cx11",
    "ssh_keys": [
      "my-ssh-key"
    ],
    "start_after_create": true,
    "user_data": "#cloud-config\nruncmd:\n- [touch, /root/cloud-init-worked]\n",
    "volumes": [
      123
    ]
  }'
```

`POST /servers`

Creates a new Server. Returns preliminary information about the Server as well as an Action that covers progress of creation.

> Body parameter

```json
{
  "automount": false,
  "datacenter": "nbg1-dc3",
  "firewalls": [
    {
      "firewall": 38
    }
  ],
  "image": "ubuntu-20.04",
  "labels": {},
  "location": "nbg1",
  "name": "my-server",
  "networks": [
    456
  ],
  "placement_group": 1,
  "public_net": {
    "enable_ipv4": true,
    "enable_ipv6": true,
    "ipv4": 0,
    "ipv6": 0
  },
  "server_type": "cx11",
  "ssh_keys": [
    "my-ssh-key"
  ],
  "start_after_create": true,
  "user_data": "#cloud-config\nruncmd:\n- [touch, /root/cloud-init-worked]\n",
  "volumes": [
    123
  ]
}
```

<h3 id="create-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).<br><br>For `server_type` you can either use the ID as listed in `/server_types` or its name.<br><br>For `image` you can either use the ID as listed in `/images` or its name.<br><br>If you want to create the Server in a Location, you must set `location` to the ID or name as listed in `/locations`. This is the recommended way. You can be even more specific by setting `datacenter` to the ID or name as listed in `/datacenters`. However we only recommend this if you want to assign a specific Primary IP to the Server which is located in the specified Datacenter.<br><br>Some properties like `start_after_create` or `automount` will trigger Actions after the Server is created. Those Actions are listed in the `next_actions` field in the response.<br><br>For accessing your Server we strongly recommend to use SSH keys by passing the respective key IDs in `ssh_keys`. If you do not specify any `ssh_keys` we will generate a root password for you and return it in the response.<br><br>Please note that provided user-data is stored in our systems. While we take measures to protect it we highly recommend that you don’t use it to store passwords or other sensitive information.<br><br>#### Call specific error codes<br><br>\| Code                             \| Description                                                \|<br>\|----------------------------------\|------------------------------------------------------------\|<br>\| `placement_error`                \| An error during the placement occurred                     \|<br>\| `primary_ip_assigned`            \| The specified Primary IP is already assigned to a server   \|<br>\| `primary_ip_datacenter_mismatch` \| The specified Primary IP is in a different datacenter      \|<br>\| `primary_ip_version_mismatch`    \| The specified Primary IP has the wrong IP Version          \|<br>|
|» automount|body|boolean|false|Auto-mount Volumes after attach|
|» datacenter|body|string|false|ID or name of Datacenter to create Server in (must not be used together with location)|
|» firewalls|body|[object]|false|Firewalls which should be applied on the Server's public network interface at creation time|
|» » firewall|body|integer|false|ID of the Firewall|
|» image|body|string|true|ID or name of the Image the Server is created from|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» location|body|string|false|ID or name of Location to create Server in (must not be used together with datacenter)|
|» name|body|string|true|Name of the Server to create (must be unique per Project and a valid hostname as per RFC 1123)|
|» networks|body|[integer]|false|Network IDs which should be attached to the Server private network interface at the creation time|
|» placement_group|body|integer|false|ID of the Placement Group the server should be in|
|» public_net|body|object|false|Public Network options|
|» » enable_ipv4|body|boolean|false|Attach an IPv4 on the public NIC. If false, no IPv4 address will be attached. Defaults to true.|
|» » enable_ipv6|body|boolean|false|Attach an IPv6 on the public NIC. If false, no IPv6 address will be attached. Defaults to true.|
|» » ipv4|body|integer \| null|false|ID of the ipv4 Primary IP to use. If omitted and enable_ipv4 is true, a new ipv4 Primary IP will automatically be created.|
|» » ipv6|body|integer \| null|false|ID of the ipv6 Primary IP to use. If omitted and enable_ipv6 is true, a new ipv6 Primary IP will automatically be created.|
|» server_type|body|string|true|ID or name of the Server type this Server should be created with|
|» ssh_keys|body|[string]|false|SSH key IDs (`integer`) or names (`string`) which should be injected into the Server at creation time|
|» start_after_create|body|boolean|false|Start Server right after creation. Defaults to true.|
|» user_data|body|string|false|Cloud-Init user data to use during Server creation. This field is limited to 32KiB.|
|» volumes|body|[integer]|false|Volume IDs which should be attached to the Server at the creation time. Volumes must be in the same Location.|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "create_server",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 1,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  },
  "next_actions": [
    {
      "command": "start_server",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": null,
      "id": 13,
      "progress": 0,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "started": "2016-01-30T23:50:00+00:00",
      "status": "running"
    }
  ],
  "root_password": "YItygq1v3GYjjMomLaKc",
  "server": {
    "backup_window": "22-02",
    "created": "2016-01-30T23:50:00+00:00",
    "datacenter": {
      "description": "Falkenstein 1 DC 8",
      "id": 1,
      "location": {
        "city": "Falkenstein",
        "country": "DE",
        "description": "Falkenstein DC Park 1",
        "id": 1,
        "latitude": 50.47612,
        "longitude": 12.370071,
        "name": "fsn1",
        "network_zone": "eu-central"
      },
      "name": "fsn1-dc8",
      "server_types": {
        "available": [
          1,
          2,
          3
        ],
        "available_for_migration": [
          1,
          2,
          3
        ],
        "supported": [
          1,
          2,
          3
        ]
      }
    },
    "id": 42,
    "image": {
      "bound_to": null,
      "created": "2016-01-30T23:50:00+00:00",
      "created_from": {
        "id": 1,
        "name": "Server"
      },
      "deleted": null,
      "deprecated": "2018-02-28T00:00:00+00:00",
      "description": "Ubuntu 20.04 Standard 64 bit",
      "disk_size": 10,
      "id": 4711,
      "image_size": 2.3,
      "labels": {
        "env": "dev"
      },
      "name": "ubuntu-20.04",
      "os_flavor": "ubuntu",
      "os_version": "20.04",
      "protection": {
        "delete": false
      },
      "rapid_deploy": false,
      "status": "available",
      "type": "snapshot"
    },
    "included_traffic": 654321,
    "ingoing_traffic": 123456,
    "iso": {
      "deprecated": "2018-02-28T00:00:00+00:00",
      "description": "FreeBSD 11.0 x64",
      "id": 4711,
      "name": "FreeBSD-11.0-RELEASE-amd64-dvd1",
      "type": "public"
    },
    "labels": {
      "env": "dev"
    },
    "load_balancers": [],
    "locked": false,
    "name": "my-server",
    "outgoing_traffic": 123456,
    "primary_disk_size": 50,
    "private_net": [
      {
        "alias_ips": [],
        "ip": "10.0.0.2",
        "mac_address": "86:00:ff:2a:7d:e1",
        "network": 4711
      }
    ],
    "protection": {
      "delete": false,
      "rebuild": false
    },
    "public_net": {
      "firewalls": [
        {
          "id": 38,
          "status": "applied"
        }
      ],
      "floating_ips": [
        478
      ],
      "ipv4": {
        "blocked": false,
        "dns_ptr": "server01.example.com",
        "ip": "1.2.3.4"
      },
      "ipv6": {
        "blocked": false,
        "dns_ptr": [
          {
            "dns_ptr": "server.example.com",
            "ip": "2001:db8::1"
          }
        ],
        "ip": "2001:db8::/64"
      }
    },
    "rescue_enabled": false,
    "server_type": {
      "cores": 1,
      "cpu_type": "shared",
      "deprecated": true,
      "description": "CX11",
      "disk": 25,
      "id": 1,
      "memory": 1,
      "name": "cx11",
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          },
          "price_monthly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          }
        }
      ],
      "storage_type": "local"
    },
    "status": "initializing",
    "volumes": []
  }
}
```

<h3 id="create-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `server` key in the reply contains a Server object with this structure|Inline|

<h3 id="create-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|next_actions|[object]|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|root_password|string \| null|true|none|Root password when no SSH keys have been specified|
|server|object|true|none|none|
|» backup_window|string \| null|true|none|Time window (UTC) in which the backup will run, or null if the backups are not enabled|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» datacenter|object|true|none|Datacenter this Resource is located at|
|» » description|string|true|none|Description of the Datacenter|
|» » id|integer|true|none|ID of the Resource|
|» » location|object|true|none|none|
|» » » city|string|true|none|City the Location is closest to|
|» » » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » » description|string|true|none|Description of the Location|
|» » » id|number|true|none|ID of the Location|
|» » » latitude|number|true|none|Latitude of the city closest to the Location|
|» » » longitude|number|true|none|Longitude of the city closest to the Location|
|» » » name|string|true|none|Unique identifier of the Location|
|» » » network_zone|string|true|none|Name of network zone this Location resides in|
|» » name|string|true|none|Unique identifier of the Datacenter|
|» » server_types|object|true|none|The Server types the Datacenter can handle|
|» » » available|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » available_for_migration|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » supported|[number]|true|none|IDs of Server types that are supported in the Datacenter|
|» id|integer|true|none|ID of the Resource|
|» image|object \| null|true|none|none|
|» » bound_to|integer \| null|true|none|ID of Server the Image is bound to. Only set for Images of type `backup`.|
|» » created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» » created_from|object \| null|true|none|Information about the Server the Image was created from|
|» » » id|integer|true|none|ID of the Server the Image was created from|
|» » » name|string|true|none|Server name at the time the Image was created|
|» » deleted|string \| null|true|none|Point in time where the Image was deleted (in ISO-8601 format)|
|» » deprecated|string \| null|true|none|Point in time when the Image is considered to be deprecated (in ISO-8601 format)|
|» » description|string|true|none|Description of the Image|
|» » disk_size|number|true|none|Size of the disk contained in the Image in GB|
|» » id|integer|true|none|ID of the Resource|
|» » image_size|number \| null|true|none|Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.|
|» » labels|object|true|none|User-defined labels (key-value pairs)|
|» » » **additionalProperties**|string|false|none|none|
|» » name|string \| null|true|none|Unique identifier of the Image. This value is only set for system Images.|
|» » os_flavor|string|true|none|Flavor of operating system contained in the Image|
|» » os_version|string \| null|true|none|Operating system version|
|» » protection|object|true|none|Protection configuration for the Resource|
|» » » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» » rapid_deploy|boolean|false|none|Indicates that rapid deploy of the Image is available|
|» » status|string|true|none|Whether the Image can be used or if it's still being created or unavailable|
|» » type|string|true|none|Type of the Image|
|» included_traffic|number \| null|true|none|Free Traffic for the current billing period in bytes|
|» ingoing_traffic|number \| null|true|none|Inbound Traffic for the current billing period in bytes|
|» iso|object \| null|true|none|ISO Image that is attached to this Server. Null if no ISO is attached.|
|» » deprecated|string \| null|true|none|ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.|
|» » description|string|true|none|Description of the ISO|
|» » id|integer|true|none|ID of the Resource|
|» » name|string \| null|true|none|Unique identifier of the ISO. Only set for public ISOs|
|» » type|string|true|none|Type of the ISO|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» load_balancers|[integer]|false|none|none|
|» locked|boolean|true|none|True if Server has been locked and is not available to user|
|» name|string|true|none|Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)|
|» outgoing_traffic|number \| null|true|none|Outbound Traffic for the current billing period in bytes|
|» placement_group|object \| null|false|none|none|
|» » created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» » id|integer|true|none|ID of the Resource|
|» » labels|object|true|none|User-defined labels (key-value pairs)|
|» » » **additionalProperties**|string|false|none|none|
|» » name|string|true|none|Name of the Resource. Must be unique per Project.|
|» » servers|[integer]|true|none|Array of IDs of Servers that are part of this Placement Group|
|» » type|string|true|none|Type of the Placement Group|
|» primary_disk_size|number|true|none|Size of the primary Disk|
|» private_net|[object]|true|none|Private networks information|
|» » alias_ips|[string]|false|none|none|
|» » ip|string|false|none|none|
|» » mac_address|string|false|none|none|
|» » network|integer|false|none|none|
|» protection|object|true|none|Protection configuration for the Server|
|» » delete|boolean|true|none|If true, prevents the Server from being deleted|
|» » rebuild|boolean|true|none|If true, prevents the Server from being rebuilt|
|» public_net|object|true|none|Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`|
|» » firewalls|[object]|false|none|Firewalls applied to the public network interface of this Server|
|» » » id|integer|false|none|ID of the Resource|
|» » » status|string|false|none|Status of the Firewall on the Server|
|» » floating_ips|[integer]|true|none|IDs of Floating IPs assigned to this Server|
|» » ipv4|object \| null|true|none|IP address (v4) and its reverse DNS entry of this Server|
|» » » blocked|boolean|true|none|If the IP is blocked by our anti abuse dept|
|» » » dns_ptr|string|true|none|Reverse DNS PTR entry for the IPv4 addresses of this Server|
|» » » id|integer|false|none|ID of the Resource|
|» » » ip|string|true|none|IP address (v4) of this Server|
|» » ipv6|object \| null|true|none|IPv6 network assigned to this Server and its reverse DNS entry|
|» » » blocked|boolean|true|none|If the IP is blocked by our anti abuse dept|
|» » » dns_ptr|[object]|true|none|Reverse DNS PTR entries for the IPv6 addresses of this Server, `null` by default|
|» » » » dns_ptr|string|true|none|DNS pointer for the specific IP address|
|» » » » ip|string|true|none|Single IPv6 address of this Server for which the reverse DNS entry has been set up|
|» » » id|integer|false|none|ID of the Resource|
|» » » ip|string|true|none|IP address (v6) of this Server|
|» rescue_enabled|boolean|true|none|True if rescue mode is enabled. Server will then boot into rescue system on next reboot|
|» server_type|object|true|none|Type of Server - determines how much ram, disk and cpu a Server has|
|» » cores|number|true|none|Number of cpu cores a Server of this type will have|
|» » cpu_type|string|true|none|Type of cpu|
|» » deprecated|boolean|true|none|True if Server type is deprecated|
|» » description|string|true|none|Description of the Server type|
|» » disk|number|true|none|Disk size a Server of this type will have in GB|
|» » id|integer|true|none|ID of the Server type|
|» » memory|number|true|none|Memory a Server of this type will have in GB|
|» » name|string|true|none|Unique identifier of the Server type|
|» » prices|[object]|true|none|Prices in different Locations|
|» » » location|string|true|none|Name of the Location the price is for|
|» » » price_hourly|object|true|none|Hourly costs for a Server type in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » » price_monthly|object|true|none|Monthly costs for a Server type in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » storage_type|string|true|none|Type of Server boot drive. Local has higher speed. Network has better availability.|
|» status|string|true|none|Status of the Server|
|» volumes|[integer]|false|none|IDs of Volumes assigned to this Server|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|
|» status|success|
|» status|running|
|» status|error|
|» » os_flavor|ubuntu|
|» » os_flavor|centos|
|» » os_flavor|debian|
|» » os_flavor|fedora|
|» » os_flavor|unknown|
|» » status|available|
|» » status|creating|
|» » status|unavailable|
|» » type|system|
|» » type|app|
|» » type|snapshot|
|» » type|backup|
|» » type|temporary|
|» » type|public|
|» » type|private|
|» » type|spread|
|» » » status|applied|
|» » » status|pending|
|» » cpu_type|shared|
|» » cpu_type|dedicated|
|» » storage_type|local|
|» » storage_type|network|
|» status|running|
|» status|initializing|
|» status|starting|
|» status|stopping|
|» status|off|
|» status|deleting|
|» status|migrating|
|» status|rebuilding|
|» status|unknown|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Server

> Code samples

```bash
curl https://example.com/servers/0 \
  -H 'Accept: application/json'
```

`GET /servers/{id}`

Returns a specific Server object. The Server must exist inside the Project

<h3 id="get-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|

> Example responses

> 200 Response

```json
{
  "server": {
    "backup_window": "22-02",
    "created": "2016-01-30T23:55:00+00:00",
    "datacenter": {
      "description": "Falkenstein DC Park 8",
      "id": 42,
      "location": {
        "city": "Falkenstein",
        "country": "DE",
        "description": "Falkenstein DC Park 1",
        "id": 1,
        "latitude": 50.47612,
        "longitude": 12.370071,
        "name": "fsn1",
        "network_zone": "eu-central"
      },
      "name": "fsn1-dc8",
      "server_types": {
        "available": [
          1,
          2,
          3
        ],
        "available_for_migration": [
          1,
          2,
          3
        ],
        "supported": [
          1,
          2,
          3
        ]
      }
    },
    "id": 42,
    "image": {
      "bound_to": null,
      "created": "2016-01-30T23:55:00+00:00",
      "created_from": {
        "id": 1,
        "name": "Server"
      },
      "deleted": null,
      "deprecated": "2018-02-28T00:00:00+00:00",
      "description": "Ubuntu 20.04 Standard 64 bit",
      "disk_size": 10,
      "id": 42,
      "image_size": 2.3,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "ubuntu-20.04",
      "os_flavor": "ubuntu",
      "os_version": "20.04",
      "protection": {
        "delete": false
      },
      "rapid_deploy": false,
      "status": "available",
      "type": "snapshot"
    },
    "included_traffic": 654321,
    "ingoing_traffic": 123456,
    "iso": {
      "deprecated": "2018-02-28T00:00:00+00:00",
      "description": "FreeBSD 11.0 x64",
      "id": 42,
      "name": "FreeBSD-11.0-RELEASE-amd64-dvd1",
      "type": "public"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "load_balancers": [
      0
    ],
    "locked": false,
    "name": "my-resource",
    "outgoing_traffic": 123456,
    "placement_group": {
      "created": "2016-01-30T23:55:00+00:00",
      "id": 42,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "my-resource",
      "servers": [
        42
      ],
      "type": "spread"
    },
    "primary_disk_size": 50,
    "private_net": [
      {
        "alias_ips": [
          "string"
        ],
        "ip": "10.0.0.2",
        "mac_address": "86:00:ff:2a:7d:e1",
        "network": 4711
      }
    ],
    "protection": {
      "delete": false,
      "rebuild": false
    },
    "public_net": {
      "firewalls": [
        {
          "id": 42,
          "status": "applied"
        }
      ],
      "floating_ips": [
        478
      ],
      "ipv4": {
        "blocked": false,
        "dns_ptr": "server01.example.com",
        "id": 42,
        "ip": "1.2.3.4"
      },
      "ipv6": {
        "blocked": false,
        "dns_ptr": [
          {
            "dns_ptr": "server.example.com",
            "ip": "2001:db8::1"
          }
        ],
        "id": 42,
        "ip": "2001:db8::/64"
      }
    },
    "rescue_enabled": false,
    "server_type": {
      "cores": 1,
      "cpu_type": "shared",
      "deprecated": false,
      "description": "CX11",
      "disk": 25,
      "id": 1,
      "memory": 1,
      "name": "cx11",
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          },
          "price_monthly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          }
        }
      ],
      "storage_type": "local"
    },
    "status": "running",
    "volumes": [
      0
    ]
  }
}
```

<h3 id="get-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `server` key in the reply contains a Server object with this structure|Inline|

<h3 id="get-a-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server|object|false|none|none|
|» backup_window|string \| null|true|none|Time window (UTC) in which the backup will run, or null if the backups are not enabled|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» datacenter|object|true|none|Datacenter this Resource is located at|
|» » description|string|true|none|Description of the Datacenter|
|» » id|integer|true|none|ID of the Resource|
|» » location|object|true|none|none|
|» » » city|string|true|none|City the Location is closest to|
|» » » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » » description|string|true|none|Description of the Location|
|» » » id|number|true|none|ID of the Location|
|» » » latitude|number|true|none|Latitude of the city closest to the Location|
|» » » longitude|number|true|none|Longitude of the city closest to the Location|
|» » » name|string|true|none|Unique identifier of the Location|
|» » » network_zone|string|true|none|Name of network zone this Location resides in|
|» » name|string|true|none|Unique identifier of the Datacenter|
|» » server_types|object|true|none|The Server types the Datacenter can handle|
|» » » available|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » available_for_migration|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » supported|[number]|true|none|IDs of Server types that are supported in the Datacenter|
|» id|integer|true|none|ID of the Resource|
|» image|object \| null|true|none|none|
|» » bound_to|integer \| null|true|none|ID of Server the Image is bound to. Only set for Images of type `backup`.|
|» » created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» » created_from|object \| null|true|none|Information about the Server the Image was created from|
|» » » id|integer|true|none|ID of the Server the Image was created from|
|» » » name|string|true|none|Server name at the time the Image was created|
|» » deleted|string \| null|true|none|Point in time where the Image was deleted (in ISO-8601 format)|
|» » deprecated|string \| null|true|none|Point in time when the Image is considered to be deprecated (in ISO-8601 format)|
|» » description|string|true|none|Description of the Image|
|» » disk_size|number|true|none|Size of the disk contained in the Image in GB|
|» » id|integer|true|none|ID of the Resource|
|» » image_size|number \| null|true|none|Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.|
|» » labels|object|true|none|User-defined labels (key-value pairs)|
|» » » **additionalProperties**|string|false|none|none|
|» » name|string \| null|true|none|Unique identifier of the Image. This value is only set for system Images.|
|» » os_flavor|string|true|none|Flavor of operating system contained in the Image|
|» » os_version|string \| null|true|none|Operating system version|
|» » protection|object|true|none|Protection configuration for the Resource|
|» » » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» » rapid_deploy|boolean|false|none|Indicates that rapid deploy of the Image is available|
|» » status|string|true|none|Whether the Image can be used or if it's still being created or unavailable|
|» » type|string|true|none|Type of the Image|
|» included_traffic|number \| null|true|none|Free Traffic for the current billing period in bytes|
|» ingoing_traffic|number \| null|true|none|Inbound Traffic for the current billing period in bytes|
|» iso|object \| null|true|none|ISO Image that is attached to this Server. Null if no ISO is attached.|
|» » deprecated|string \| null|true|none|ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.|
|» » description|string|true|none|Description of the ISO|
|» » id|integer|true|none|ID of the Resource|
|» » name|string \| null|true|none|Unique identifier of the ISO. Only set for public ISOs|
|» » type|string|true|none|Type of the ISO|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» load_balancers|[integer]|false|none|none|
|» locked|boolean|true|none|True if Server has been locked and is not available to user|
|» name|string|true|none|Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)|
|» outgoing_traffic|number \| null|true|none|Outbound Traffic for the current billing period in bytes|
|» placement_group|object \| null|false|none|none|
|» » created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» » id|integer|true|none|ID of the Resource|
|» » labels|object|true|none|User-defined labels (key-value pairs)|
|» » » **additionalProperties**|string|false|none|none|
|» » name|string|true|none|Name of the Resource. Must be unique per Project.|
|» » servers|[integer]|true|none|Array of IDs of Servers that are part of this Placement Group|
|» » type|string|true|none|Type of the Placement Group|
|» primary_disk_size|number|true|none|Size of the primary Disk|
|» private_net|[object]|true|none|Private networks information|
|» » alias_ips|[string]|false|none|none|
|» » ip|string|false|none|none|
|» » mac_address|string|false|none|none|
|» » network|integer|false|none|none|
|» protection|object|true|none|Protection configuration for the Server|
|» » delete|boolean|true|none|If true, prevents the Server from being deleted|
|» » rebuild|boolean|true|none|If true, prevents the Server from being rebuilt|
|» public_net|object|true|none|Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`|
|» » firewalls|[object]|false|none|Firewalls applied to the public network interface of this Server|
|» » » id|integer|false|none|ID of the Resource|
|» » » status|string|false|none|Status of the Firewall on the Server|
|» » floating_ips|[integer]|true|none|IDs of Floating IPs assigned to this Server|
|» » ipv4|object \| null|true|none|IP address (v4) and its reverse DNS entry of this Server|
|» » » blocked|boolean|true|none|If the IP is blocked by our anti abuse dept|
|» » » dns_ptr|string|true|none|Reverse DNS PTR entry for the IPv4 addresses of this Server|
|» » » id|integer|false|none|ID of the Resource|
|» » » ip|string|true|none|IP address (v4) of this Server|
|» » ipv6|object \| null|true|none|IPv6 network assigned to this Server and its reverse DNS entry|
|» » » blocked|boolean|true|none|If the IP is blocked by our anti abuse dept|
|» » » dns_ptr|[object]|true|none|Reverse DNS PTR entries for the IPv6 addresses of this Server, `null` by default|
|» » » » dns_ptr|string|true|none|DNS pointer for the specific IP address|
|» » » » ip|string|true|none|Single IPv6 address of this Server for which the reverse DNS entry has been set up|
|» » » id|integer|false|none|ID of the Resource|
|» » » ip|string|true|none|IP address (v6) of this Server|
|» rescue_enabled|boolean|true|none|True if rescue mode is enabled. Server will then boot into rescue system on next reboot|
|» server_type|object|true|none|Type of Server - determines how much ram, disk and cpu a Server has|
|» » cores|number|true|none|Number of cpu cores a Server of this type will have|
|» » cpu_type|string|true|none|Type of cpu|
|» » deprecated|boolean|true|none|True if Server type is deprecated|
|» » description|string|true|none|Description of the Server type|
|» » disk|number|true|none|Disk size a Server of this type will have in GB|
|» » id|integer|true|none|ID of the Server type|
|» » memory|number|true|none|Memory a Server of this type will have in GB|
|» » name|string|true|none|Unique identifier of the Server type|
|» » prices|[object]|true|none|Prices in different Locations|
|» » » location|string|true|none|Name of the Location the price is for|
|» » » price_hourly|object|true|none|Hourly costs for a Server type in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » » price_monthly|object|true|none|Monthly costs for a Server type in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » storage_type|string|true|none|Type of Server boot drive. Local has higher speed. Network has better availability.|
|» status|string|true|none|Status of the Server|
|» volumes|[integer]|false|none|IDs of Volumes assigned to this Server|

#### Enumerated Values

|Property|Value|
|---|---|
|» » os_flavor|ubuntu|
|» » os_flavor|centos|
|» » os_flavor|debian|
|» » os_flavor|fedora|
|» » os_flavor|unknown|
|» » status|available|
|» » status|creating|
|» » status|unavailable|
|» » type|system|
|» » type|app|
|» » type|snapshot|
|» » type|backup|
|» » type|temporary|
|» » type|public|
|» » type|private|
|» » type|spread|
|» » » status|applied|
|» » » status|pending|
|» » cpu_type|shared|
|» » cpu_type|dedicated|
|» » storage_type|local|
|» » storage_type|network|
|» status|running|
|» status|initializing|
|» status|starting|
|» status|stopping|
|» status|off|
|» status|deleting|
|» status|migrating|
|» status|rebuilding|
|» status|unknown|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Server

> Code samples

```bash
curl https://example.com/servers/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labels": {
      "labelkey": "value"
    },
    "name": "my-server"
  }'
```

`PUT /servers/{id}`

Updates a Server. You can update a Server’s name and a Server’s labels.
Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).
Also note that when updating labels, the Server’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

> Body parameter

```json
{
  "labels": {
    "labelkey": "value"
  },
  "name": "my-server"
}
```

<h3 id="update-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|
|body|body|object|false|none|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» name|body|string|false|New name to set|

> Example responses

> 200 Response

```json
{
  "server": {
    "backup_window": "22-02",
    "created": "2016-01-30T23:55:00+00:00",
    "datacenter": {
      "description": "Falkenstein DC Park 8",
      "id": 42,
      "location": {
        "city": "Falkenstein",
        "country": "DE",
        "description": "Falkenstein DC Park 1",
        "id": 1,
        "latitude": 50.47612,
        "longitude": 12.370071,
        "name": "fsn1",
        "network_zone": "eu-central"
      },
      "name": "fsn1-dc8",
      "server_types": {
        "available": [
          1,
          2,
          3
        ],
        "available_for_migration": [
          1,
          2,
          3
        ],
        "supported": [
          1,
          2,
          3
        ]
      }
    },
    "id": 42,
    "image": {
      "bound_to": null,
      "created": "2016-01-30T23:55:00+00:00",
      "created_from": {
        "id": 1,
        "name": "Server"
      },
      "deleted": null,
      "deprecated": "2018-02-28T00:00:00+00:00",
      "description": "Ubuntu 20.04 Standard 64 bit",
      "disk_size": 10,
      "id": 42,
      "image_size": 2.3,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "ubuntu-20.04",
      "os_flavor": "ubuntu",
      "os_version": "20.04",
      "protection": {
        "delete": false
      },
      "rapid_deploy": false,
      "status": "available",
      "type": "snapshot"
    },
    "included_traffic": 654321,
    "ingoing_traffic": 123456,
    "iso": {
      "deprecated": "2018-02-28T00:00:00+00:00",
      "description": "FreeBSD 11.0 x64",
      "id": 42,
      "name": "FreeBSD-11.0-RELEASE-amd64-dvd1",
      "type": "public"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "load_balancers": [
      0
    ],
    "locked": false,
    "name": "my-resource",
    "outgoing_traffic": 123456,
    "placement_group": {
      "created": "2016-01-30T23:55:00+00:00",
      "id": 42,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "my-resource",
      "servers": [
        42
      ],
      "type": "spread"
    },
    "primary_disk_size": 50,
    "private_net": [
      {
        "alias_ips": [
          "string"
        ],
        "ip": "10.0.0.2",
        "mac_address": "86:00:ff:2a:7d:e1",
        "network": 4711
      }
    ],
    "protection": {
      "delete": false,
      "rebuild": false
    },
    "public_net": {
      "firewalls": [
        {
          "id": 42,
          "status": "applied"
        }
      ],
      "floating_ips": [
        478
      ],
      "ipv4": {
        "blocked": false,
        "dns_ptr": "server01.example.com",
        "id": 42,
        "ip": "1.2.3.4"
      },
      "ipv6": {
        "blocked": false,
        "dns_ptr": [
          {
            "dns_ptr": "server.example.com",
            "ip": "2001:db8::1"
          }
        ],
        "id": 42,
        "ip": "2001:db8::/64"
      }
    },
    "rescue_enabled": false,
    "server_type": {
      "cores": 1,
      "cpu_type": "shared",
      "deprecated": false,
      "description": "CX11",
      "disk": 25,
      "id": 1,
      "memory": 1,
      "name": "cx11",
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          },
          "price_monthly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          }
        }
      ],
      "storage_type": "local"
    },
    "status": "running",
    "volumes": [
      0
    ]
  }
}
```

<h3 id="update-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `server` key in the reply contains the updated Server|Inline|

<h3 id="update-a-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server|object|false|none|none|
|» backup_window|string \| null|true|none|Time window (UTC) in which the backup will run, or null if the backups are not enabled|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» datacenter|object|true|none|Datacenter this Resource is located at|
|» » description|string|true|none|Description of the Datacenter|
|» » id|integer|true|none|ID of the Resource|
|» » location|object|true|none|none|
|» » » city|string|true|none|City the Location is closest to|
|» » » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » » description|string|true|none|Description of the Location|
|» » » id|number|true|none|ID of the Location|
|» » » latitude|number|true|none|Latitude of the city closest to the Location|
|» » » longitude|number|true|none|Longitude of the city closest to the Location|
|» » » name|string|true|none|Unique identifier of the Location|
|» » » network_zone|string|true|none|Name of network zone this Location resides in|
|» » name|string|true|none|Unique identifier of the Datacenter|
|» » server_types|object|true|none|The Server types the Datacenter can handle|
|» » » available|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » available_for_migration|[number]|true|none|IDs of Server types that are supported and for which the Datacenter has enough resources left|
|» » » supported|[number]|true|none|IDs of Server types that are supported in the Datacenter|
|» id|integer|true|none|ID of the Resource|
|» image|object \| null|true|none|none|
|» » bound_to|integer \| null|true|none|ID of Server the Image is bound to. Only set for Images of type `backup`.|
|» » created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» » created_from|object \| null|true|none|Information about the Server the Image was created from|
|» » » id|integer|true|none|ID of the Server the Image was created from|
|» » » name|string|true|none|Server name at the time the Image was created|
|» » deleted|string \| null|true|none|Point in time where the Image was deleted (in ISO-8601 format)|
|» » deprecated|string \| null|true|none|Point in time when the Image is considered to be deprecated (in ISO-8601 format)|
|» » description|string|true|none|Description of the Image|
|» » disk_size|number|true|none|Size of the disk contained in the Image in GB|
|» » id|integer|true|none|ID of the Resource|
|» » image_size|number \| null|true|none|Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.|
|» » labels|object|true|none|User-defined labels (key-value pairs)|
|» » » **additionalProperties**|string|false|none|none|
|» » name|string \| null|true|none|Unique identifier of the Image. This value is only set for system Images.|
|» » os_flavor|string|true|none|Flavor of operating system contained in the Image|
|» » os_version|string \| null|true|none|Operating system version|
|» » protection|object|true|none|Protection configuration for the Resource|
|» » » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» » rapid_deploy|boolean|false|none|Indicates that rapid deploy of the Image is available|
|» » status|string|true|none|Whether the Image can be used or if it's still being created or unavailable|
|» » type|string|true|none|Type of the Image|
|» included_traffic|number \| null|true|none|Free Traffic for the current billing period in bytes|
|» ingoing_traffic|number \| null|true|none|Inbound Traffic for the current billing period in bytes|
|» iso|object \| null|true|none|ISO Image that is attached to this Server. Null if no ISO is attached.|
|» » deprecated|string \| null|true|none|ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.|
|» » description|string|true|none|Description of the ISO|
|» » id|integer|true|none|ID of the Resource|
|» » name|string \| null|true|none|Unique identifier of the ISO. Only set for public ISOs|
|» » type|string|true|none|Type of the ISO|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» load_balancers|[integer]|false|none|none|
|» locked|boolean|true|none|True if Server has been locked and is not available to user|
|» name|string|true|none|Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)|
|» outgoing_traffic|number \| null|true|none|Outbound Traffic for the current billing period in bytes|
|» placement_group|object \| null|false|none|none|
|» » created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» » id|integer|true|none|ID of the Resource|
|» » labels|object|true|none|User-defined labels (key-value pairs)|
|» » » **additionalProperties**|string|false|none|none|
|» » name|string|true|none|Name of the Resource. Must be unique per Project.|
|» » servers|[integer]|true|none|Array of IDs of Servers that are part of this Placement Group|
|» » type|string|true|none|Type of the Placement Group|
|» primary_disk_size|number|true|none|Size of the primary Disk|
|» private_net|[object]|true|none|Private networks information|
|» » alias_ips|[string]|false|none|none|
|» » ip|string|false|none|none|
|» » mac_address|string|false|none|none|
|» » network|integer|false|none|none|
|» protection|object|true|none|Protection configuration for the Server|
|» » delete|boolean|true|none|If true, prevents the Server from being deleted|
|» » rebuild|boolean|true|none|If true, prevents the Server from being rebuilt|
|» public_net|object|true|none|Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`|
|» » firewalls|[object]|false|none|Firewalls applied to the public network interface of this Server|
|» » » id|integer|false|none|ID of the Resource|
|» » » status|string|false|none|Status of the Firewall on the Server|
|» » floating_ips|[integer]|true|none|IDs of Floating IPs assigned to this Server|
|» » ipv4|object \| null|true|none|IP address (v4) and its reverse DNS entry of this Server|
|» » » blocked|boolean|true|none|If the IP is blocked by our anti abuse dept|
|» » » dns_ptr|string|true|none|Reverse DNS PTR entry for the IPv4 addresses of this Server|
|» » » id|integer|false|none|ID of the Resource|
|» » » ip|string|true|none|IP address (v4) of this Server|
|» » ipv6|object \| null|true|none|IPv6 network assigned to this Server and its reverse DNS entry|
|» » » blocked|boolean|true|none|If the IP is blocked by our anti abuse dept|
|» » » dns_ptr|[object]|true|none|Reverse DNS PTR entries for the IPv6 addresses of this Server, `null` by default|
|» » » » dns_ptr|string|true|none|DNS pointer for the specific IP address|
|» » » » ip|string|true|none|Single IPv6 address of this Server for which the reverse DNS entry has been set up|
|» » » id|integer|false|none|ID of the Resource|
|» » » ip|string|true|none|IP address (v6) of this Server|
|» rescue_enabled|boolean|true|none|True if rescue mode is enabled. Server will then boot into rescue system on next reboot|
|» server_type|object|true|none|Type of Server - determines how much ram, disk and cpu a Server has|
|» » cores|number|true|none|Number of cpu cores a Server of this type will have|
|» » cpu_type|string|true|none|Type of cpu|
|» » deprecated|boolean|true|none|True if Server type is deprecated|
|» » description|string|true|none|Description of the Server type|
|» » disk|number|true|none|Disk size a Server of this type will have in GB|
|» » id|integer|true|none|ID of the Server type|
|» » memory|number|true|none|Memory a Server of this type will have in GB|
|» » name|string|true|none|Unique identifier of the Server type|
|» » prices|[object]|true|none|Prices in different Locations|
|» » » location|string|true|none|Name of the Location the price is for|
|» » » price_hourly|object|true|none|Hourly costs for a Server type in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » » price_monthly|object|true|none|Monthly costs for a Server type in this Location|
|» » » » gross|string|true|none|Price with VAT added|
|» » » » net|string|true|none|Price without VAT|
|» » storage_type|string|true|none|Type of Server boot drive. Local has higher speed. Network has better availability.|
|» status|string|true|none|Status of the Server|
|» volumes|[integer]|false|none|IDs of Volumes assigned to this Server|

#### Enumerated Values

|Property|Value|
|---|---|
|» » os_flavor|ubuntu|
|» » os_flavor|centos|
|» » os_flavor|debian|
|» » os_flavor|fedora|
|» » os_flavor|unknown|
|» » status|available|
|» » status|creating|
|» » status|unavailable|
|» » type|system|
|» » type|app|
|» » type|snapshot|
|» » type|backup|
|» » type|temporary|
|» » type|public|
|» » type|private|
|» » type|spread|
|» » » status|applied|
|» » » status|pending|
|» » cpu_type|shared|
|» » cpu_type|dedicated|
|» » storage_type|local|
|» » storage_type|network|
|» status|running|
|» status|initializing|
|» status|starting|
|» status|stopping|
|» status|off|
|» status|deleting|
|» status|migrating|
|» status|rebuilding|
|» status|unknown|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Server

> Code samples

```bash
curl https://example.com/servers/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /servers/{id}`

Deletes a Server. This immediately removes the Server from your account, and it is no longer accessible.

<h3 id="delete-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|

> Example responses

> 200 Response

```json
{
  "action": {
    "command": "start_server",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:55:00+00:00",
    "id": 42,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="delete-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="delete-a-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Get Metrics for a Server

> Code samples

```bash
curl 'https://example.com/servers/0/metrics?type=cpu&start=string&end=string' \
  -H 'Accept: application/json'
```

`GET /servers/{id}/metrics`

Get Metrics for specified Server.

You must specify the type of metric to get: cpu, disk or network. You can also specify more than one type by comma separation, e.g. cpu,disk.

Depending on the type you will get different time series data

| Type    | Timeseries              | Unit      | Description                                          |
|---------|-------------------------|-----------|------------------------------------------------------|
| cpu     | cpu                     | percent   | Percent CPU usage                                    |
| disk    | disk.0.iops.read        | iop/s     | Number of read IO operations per second              |
|         | disk.0.iops.write       | iop/s     | Number of write IO operations per second             |
|         | disk.0.bandwidth.read   | bytes/s   | Bytes read per second                                |
|         | disk.0.bandwidth.write  | bytes/s   | Bytes written per second                             |
| network | network.0.pps.in        | packets/s | Public Network interface packets per second received |
|         | network.0.pps.out       | packets/s | Public Network interface packets per second sent     |
|         | network.0.bandwidth.in  | bytes/s   | Public Network interface bytes/s received            |
|         | network.0.bandwidth.out | bytes/s   | Public Network interface bytes/s sent                |

Metrics are available for the last 30 days only.

If you do not provide the step argument we will automatically adjust it so that a maximum of 200 samples are returned.

We limit the number of samples returned to a maximum of 500 and will adjust the step parameter accordingly.


<h3 id="get-metrics-for-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|
|type|query|string|true|Type of metrics to get|
|start|query|string|true|Start of period to get Metrics for (in ISO-8601 format)|
|end|query|string|true|End of period to get Metrics for (in ISO-8601 format)|
|step|query|string|false|Resolution of results in seconds|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|cpu|
|type|disk|
|type|network|

> Example responses

> 200 Response

```json
{
  "metrics": {
    "end": "2017-01-01T23:00:00+00:00",
    "start": "2017-01-01T00:00:00+00:00",
    "step": 60,
    "time_series": {
      "name_of_timeseries": {
        "values": [
          [
            1435781470.622,
            "42"
          ],
          [
            1435781471.622,
            "43"
          ]
        ]
      }
    }
  }
}
```

<h3 id="get-metrics-for-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `metrics` key in the reply contains a metrics object with this structure|Inline|

<h3 id="get-metrics-for-a-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|object|true|none|none|
|» end|string|true|none|End of period of metrics reported (in ISO-8601 format)|
|» start|string|true|none|Start of period of metrics reported (in ISO-8601 format)|
|» step|number|true|none|Resolution of results in seconds.|
|» time_series|object|true|none|Hash with timeseries information, containing the name of timeseries as key|
|» » **additionalProperties**|object|false|none|none|
|» » » values|[[number \| string]]|true|none|Metrics Timestamps with values|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-server-actions">Server Actions</h1>

## Get all Actions for a Server

> Code samples

```bash
curl https://example.com/servers/0/actions \
  -H 'Accept: application/json'
```

`GET /servers/{id}/actions`

Returns all Action objects for a Server. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.

<h3 id="get-all-actions-for-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Resource|
|sort|query|string|false|Can be used multiple times.|
|status|query|string|false|Can be used multiple times, the response will contain only Actions with specified statuses|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|command|
|sort|command:asc|
|sort|command:desc|
|sort|status|
|sort|status:asc|
|sort|status:desc|
|sort|progress|
|sort|progress:asc|
|sort|progress:desc|
|sort|started|
|sort|started:asc|
|sort|started:desc|
|sort|finished|
|sort|finished:asc|
|sort|finished:desc|
|status|running|
|status|success|
|status|error|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "command": "start_server",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2016-01-30T23:56:00+00:00",
      "id": 13,
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "started": "2016-01-30T23:55:00+00:00",
      "status": "success"
    }
  ]
}
```

<h3 id="get-all-actions-for-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `actions` key contains a list of Actions|Inline|

<h3 id="get-all-actions-for-a-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Add a Server to a Placement Group

> Code samples

```bash
curl https://example.com/servers/0/actions/add_to_placement_group \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "placement_group": 1
  }'
```

`POST /servers/{id}/actions/add_to_placement_group`

Adds a Server to a Placement Group.

Server must be powered off for this command to succeed.

#### Call specific error codes

| Code                          | Description                                                          |
|-------------------------------|----------------------------------------------------------------------|
| `server_not_stopped`          | The action requires a stopped server                                 |


> Body parameter

```json
{
  "placement_group": 1
}
```

<h3 id="add-a-server-to-a-placement-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|
|body|body|object|false|none|
|» placement_group|body|integer|true|ID of Placement Group the Server should be added to|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "add_to_placement_group",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="add-a-server-to-a-placement-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="add-a-server-to-a-placement-group-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Attach an ISO to a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/attach_iso \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "iso": "FreeBSD-11.0-RELEASE-amd64-dvd1"
  }'
```

`POST /servers/{id}/actions/attach_iso`

Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automatically be detached before the new ISO is attached.

Servers with attached ISOs have a modified boot order: They will try to boot from the ISO first before falling back to hard disk.


> Body parameter

```json
{
  "iso": "FreeBSD-11.0-RELEASE-amd64-dvd1"
}
```

<h3 id="attach-an-iso-to-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|
|body|body|object|false|none|
|» iso|body|string|true|ID or name of ISO to attach to the Server as listed in GET `/isos`|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "attach_iso",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="attach-an-iso-to-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="attach-an-iso-to-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Attach a Server to a Network

> Code samples

```bash
curl https://example.com/servers/0/actions/attach_to_network \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "alias_ips": [
      "10.0.1.2"
    ],
    "ip": "10.0.1.1",
    "network": 4711
  }'
```

`POST /servers/{id}/actions/attach_to_network`

Attaches a Server to a network. This will complement the fixed public Server interface by adding an additional ethernet interface to the Server which is connected to the specified network.

The Server will get an IP auto assigned from a subnet of type `server` in the same `network_zone`.

Using the `alias_ips` attribute you can also define one or more additional IPs to the Servers. Please note that you will have to configure these IPs by hand on your Server since only the primary IP will be given out by DHCP.

**Call specific error codes**

| Code                             | Description                                                           |
|----------------------------------|-----------------------------------------------------------------------|
| `server_already_attached`        | The server is already attached to the network                         |
| `ip_not_available`               | The provided Network IP is not available                              |
| `no_subnet_available`            | No Subnet or IP is available for the Server within the network        |
| `networks_overlap`               | The network IP range overlaps with one of the server networks         |


> Body parameter

```json
{
  "alias_ips": [
    "10.0.1.2"
  ],
  "ip": "10.0.1.1",
  "network": 4711
}
```

<h3 id="attach-a-server-to-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|
|body|body|object|false|none|
|» alias_ips|body|[string]|false|Additional IPs to be assigned to this Server|
|» ip|body|string|false|IP to request to be assigned to this Server; if you do not provide this then you will be auto assigned an IP address|
|» network|body|integer|true|ID of an existing network to attach the Server to|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "attach_to_network",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="attach-a-server-to-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="attach-a-server-to-a-network-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change alias IPs of a Network

> Code samples

```bash
curl https://example.com/servers/0/actions/change_alias_ips \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "alias_ips": [
      "10.0.1.2"
    ],
    "network": 4711
  }'
```

`POST /servers/{id}/actions/change_alias_ips`

Changes the alias IPs of an already attached Network. Note that the existing aliases for the specified Network will be replaced with these provided in the request body. So if you want to add an alias IP, you have to provide the existing ones from the Network plus the new alias IP in the request body.

> Body parameter

```json
{
  "alias_ips": [
    "10.0.1.2"
  ],
  "network": 4711
}
```

<h3 id="change-alias-ips-of-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|
|body|body|object|false|none|
|» alias_ips|body|[string]|true|New alias IPs to set for this Server|
|» network|body|integer|true|ID of an existing Network already attached to the Server|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_alias_ips",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="change-alias-ips-of-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="change-alias-ips-of-a-network-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change reverse DNS entry for this Server

> Code samples

```bash
curl https://example.com/servers/0/actions/change_dns_ptr \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dns_ptr": "server01.example.com",
    "ip": "1.2.3.4"
  }'
```

`POST /servers/{id}/actions/change_dns_ptr`

Changes the hostname that will appear when getting the hostname belonging to the primary IPs (IPv4 and IPv6) of this Server.

Floating IPs assigned to the Server are not affected by this.


> Body parameter

```json
{
  "dns_ptr": "server01.example.com",
  "ip": "1.2.3.4"
}
```

<h3 id="change-reverse-dns-entry-for-this-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|
|body|body|object|false|Select the IP address for which to change the DNS entry by passing `ip`. It can be either IPv4 or IPv6. The target hostname is set by passing `dns_ptr`.|
|» dns_ptr|body|string \| null|true|Hostname to set as a reverse DNS PTR entry, reset to original value if `null`|
|» ip|body|string|true|Primary IP address for which the reverse DNS entry should be set|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_dns_ptr",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="change-reverse-dns-entry-for-this-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="change-reverse-dns-entry-for-this-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change Server Protection

> Code samples

```bash
curl https://example.com/servers/0/actions/change_protection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "delete": true,
    "rebuild": true
  }'
```

`POST /servers/{id}/actions/change_protection`

Changes the protection configuration of the Server.

> Body parameter

```json
{
  "delete": true,
  "rebuild": true
}
```

<h3 id="change-server-protection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|
|body|body|object|false|none|
|» delete|body|boolean|false|If true, prevents the Server from being deleted (currently delete and rebuild attribute needs to have the same value)|
|» rebuild|body|boolean|false|If true, prevents the Server from being rebuilt (currently delete and rebuild attribute needs to have the same value)|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_protection",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="change-server-protection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="change-server-protection-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change the Type of a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/change_type \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "server_type": "cx11",
    "upgrade_disk": true
  }'
```

`POST /servers/{id}/actions/change_type`

Changes the type (Cores, RAM and disk sizes) of a Server.

Server must be powered off for this command to succeed.

This copies the content of its disk, and starts it again.

You can only migrate to Server types with the same `storage_type` and equal or bigger disks. Shrinking disks is not possible as it might destroy data.

If the disk gets upgraded, the Server type can not be downgraded any more. If you plan to downgrade the Server type, set `upgrade_disk` to `false`.

#### Call specific error codes

| Code                          | Description                                                          |
|-------------------------------|----------------------------------------------------------------------|
| `invalid_server_type`         | The server type does not fit for the given server or is deprecated   |
| `server_not_stopped`          | The action requires a stopped server                                 |


> Body parameter

```json
{
  "server_type": "cx11",
  "upgrade_disk": true
}
```

<h3 id="change-the-type-of-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|
|body|body|object|false|none|
|» server_type|body|string|true|ID or name of Server type the Server should migrate to|
|» upgrade_disk|body|boolean|true|If false, do not upgrade the disk (this allows downgrading the Server type later)|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_server_type",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="change-the-type-of-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="change-the-type-of-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Create Image from a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/create_image \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "my image",
    "labels": {
      "labelkey": "value"
    },
    "type": "snapshot"
  }'
```

`POST /servers/{id}/actions/create_image`

Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.

To make sure disk content is consistent, we recommend to shut down the Server prior to creating an Image.

You can either create a `backup` Image that is bound to the Server and therefore will be deleted when the Server is deleted, or you can create an `snapshot` Image which is completely independent of the Server it was created from and will survive Server deletion. Backup Images are only available when the backup option is enabled for the Server. Snapshot Images are billed on a per GB basis.


> Body parameter

```json
{
  "description": "my image",
  "labels": {
    "labelkey": "value"
  },
  "type": "snapshot"
}
```

<h3 id="create-image-from-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|
|body|body|object|false|none|
|» description|body|string|false|Description of the Image, will be auto-generated if not set|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» » labelkey|body|string|false|New label|
|» type|body|string|false|Type of Image to create (default: `snapshot`)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|snapshot|
|» type|backup|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "create_image",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  },
  "image": {
    "bound_to": null,
    "created": "2016-01-30T23:50:00+00:00",
    "created_from": {
      "id": 1,
      "name": "Server"
    },
    "deleted": null,
    "deprecated": "2018-02-28T00:00:00+00:00",
    "description": "my image",
    "disk_size": 10,
    "id": 4711,
    "image_size": 2.3,
    "labels": {
      "env": "dev"
    },
    "name": null,
    "os_flavor": "ubuntu",
    "os_version": "20.04",
    "protection": {
      "delete": false
    },
    "rapid_deploy": false,
    "status": "creating",
    "type": "snapshot"
  }
}
```

<h3 id="create-image-from-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `image` key in the reply contains an the created Image, which is an object with this structure<br><br>The `action` key in the reply contains an Action object with this structure<br>|Inline|

<h3 id="create-image-from-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|image|object|false|none|none|
|» bound_to|integer \| null|true|none|ID of Server the Image is bound to. Only set for Images of type `backup`.|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» created_from|object \| null|true|none|Information about the Server the Image was created from|
|» » id|integer|true|none|ID of the Server the Image was created from|
|» » name|string|true|none|Server name at the time the Image was created|
|» deleted|string \| null|true|none|Point in time where the Image was deleted (in ISO-8601 format)|
|» deprecated|string \| null|true|none|Point in time when the Image is considered to be deprecated (in ISO-8601 format)|
|» description|string|true|none|Description of the Image|
|» disk_size|number|true|none|Size of the disk contained in the Image in GB|
|» id|integer|true|none|ID of the Resource|
|» image_size|number \| null|true|none|Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string \| null|true|none|Unique identifier of the Image. This value is only set for system Images.|
|» os_flavor|string|true|none|Flavor of operating system contained in the Image|
|» os_version|string \| null|true|none|Operating system version|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» rapid_deploy|boolean|false|none|Indicates that rapid deploy of the Image is available|
|» status|string|true|none|Whether the Image can be used or if it's still being created or unavailable|
|» type|string|true|none|Type of the Image|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|
|» os_flavor|ubuntu|
|» os_flavor|centos|
|» os_flavor|debian|
|» os_flavor|fedora|
|» os_flavor|unknown|
|» status|available|
|» status|creating|
|» status|unavailable|
|» type|system|
|» type|app|
|» type|snapshot|
|» type|backup|
|» type|temporary|

<aside class="success">
This operation does not require authentication
</aside>

## Detach a Server from a Network

> Code samples

```bash
curl https://example.com/servers/0/actions/detach_from_network \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "network": 4711
  }'
```

`POST /servers/{id}/actions/detach_from_network`

Detaches a Server from a network. The interface for this network will vanish.

> Body parameter

```json
{
  "network": 4711
}
```

<h3 id="detach-a-server-from-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|
|body|body|object|false|none|
|» network|body|integer|true|ID of an existing network to detach the Server from|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "detach_from_network",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="detach-a-server-from-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="detach-a-server-from-a-network-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Detach an ISO from a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/detach_iso \
  -X POST \
  -H 'Accept: application/json'
```

`POST /servers/{id}/actions/detach_iso`

Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is immediately set to `success`

<h3 id="detach-an-iso-from-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "detach_iso",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="detach-an-iso-from-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="detach-an-iso-from-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Disable Backups for a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/disable_backup \
  -X POST \
  -H 'Accept: application/json'
```

`POST /servers/{id}/actions/disable_backup`

Disables the automatic backup option and deletes all existing Backups for a Server. No more additional charges for backups will be made.

Caution: This immediately removes all existing backups for the Server!


<h3 id="disable-backups-for-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "disable_backup",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="disable-backups-for-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="disable-backups-for-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Disable Rescue Mode for a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/disable_rescue \
  -X POST \
  -H 'Accept: application/json'
```

`POST /servers/{id}/actions/disable_rescue`

Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.

Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.

Disabling rescue mode will not reboot your Server — you will have to do this yourself.


<h3 id="disable-rescue-mode-for-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "disable_rescue",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="disable-rescue-mode-for-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="disable-rescue-mode-for-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Enable and Configure Backups for a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/enable_backup \
  -X POST \
  -H 'Accept: application/json'
```

`POST /servers/{id}/actions/enable_backup`

Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the price of the Server by 20%. In return, you will get seven slots where Images of type backup can be stored.

Backups are automatically created daily.


<h3 id="enable-and-configure-backups-for-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "enable_backup",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="enable-and-configure-backups-for-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="enable-and-configure-backups-for-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Enable Rescue Mode for a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/enable_rescue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ssh_keys": [
      2323
    ],
    "type": "linux64"
  }'
```

`POST /servers/{id}/actions/enable_rescue`

Enable the Hetzner Rescue System for this Server. The next time a Server with enabled rescue mode boots it will start a special minimal Linux distribution designed for repair and reinstall.

In case a Server cannot boot on its own you can use this to access a Server’s disks.

Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.

Enabling rescue mode will not [reboot](https://docs.hetzner.cloud/#server-actions-soft-reboot-a-server) your Server — you will have to do this yourself.


> Body parameter

```json
{
  "ssh_keys": [
    2323
  ],
  "type": "linux64"
}
```

<h3 id="enable-rescue-mode-for-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|
|body|body|object|false|none|
|» ssh_keys|body|[integer]|false|Array of SSH key IDs which should be injected into the rescue system.|
|» type|body|string|false|Type of rescue system to boot (default: `linux64`)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|linux64|
|» type|linux32|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "enable_rescue",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  },
  "root_password": "zCWbFhnu950dUTko5f40"
}
```

<h3 id="enable-rescue-mode-for-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `root_password` key in the reply contains the root password that can be used to access the booted rescue system.<br><br>The `action` key in the reply contains an Action object with this structure<br>|Inline|

<h3 id="enable-rescue-mode-for-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|root_password|string|false|none|Password that will be set for this Server once the Action succeeds|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Power off a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/poweroff \
  -X POST \
  -H 'Accept: application/json'
```

`POST /servers/{id}/actions/poweroff`

Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.

<h3 id="power-off-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "stop_server",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="power-off-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="power-off-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Power on a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/poweron \
  -X POST \
  -H 'Accept: application/json'
```

`POST /servers/{id}/actions/poweron`

Starts a Server by turning its power on.

<h3 id="power-on-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "start_server",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="power-on-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="power-on-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Soft-reboot a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/reboot \
  -X POST \
  -H 'Accept: application/json'
```

`POST /servers/{id}/actions/reboot`

Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.

<h3 id="soft-reboot-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "reboot_server",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="soft-reboot-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="soft-reboot-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Rebuild a Server from an Image

> Code samples

```bash
curl https://example.com/servers/0/actions/rebuild \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "image": "ubuntu-20.04"
  }'
```

`POST /servers/{id}/actions/rebuild`

Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Server

The Image can either be one you have created earlier (`backup` or `snapshot` Image) or it can be a completely fresh `system` Image provided by us. You can get a list of all available Images with `GET /images`.

Your Server will automatically be powered off before the rebuild command executes.


> Body parameter

```json
{
  "image": "ubuntu-20.04"
}
```

<h3 id="rebuild-a-server-from-an-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|
|body|body|object|false|To select which Image to rebuild from you can either pass an ID or a name as the `image` argument. Passing a name only works for `system` Images since the other Image types do not have a name set.|
|» image|body|string|true|ID or name of Image to rebuilt from.|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "rebuild_server",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  },
  "root_password": null
}
```

<h3 id="rebuild-a-server-from-an-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="rebuild-a-server-from-an-image-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|root_password|string \| null|false|none|New root password when not using SSH keys|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Remove from Placement Group

> Code samples

```bash
curl https://example.com/servers/0/actions/remove_from_placement_group \
  -X POST \
  -H 'Accept: application/json'
```

`POST /servers/{id}/actions/remove_from_placement_group`

Removes a Server from a Placement Group.


<h3 id="remove-from-placement-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "remove_from_placement_group",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="remove-from-placement-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="remove-from-placement-group-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Request Console for a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/request_console \
  -X POST \
  -H 'Accept: application/json'
```

`POST /servers/{id}/actions/request_console`

Requests credentials for remote access via VNC over websocket to keyboard, monitor, and mouse for a Server. The provided URL is valid for 1 minute, after this period a new url needs to be created to connect to the Server. How long the connection is open after the initial connect is not subject to this timeout.

<h3 id="request-console-for-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "request_console",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  },
  "password": "9MQaTg2VAGI0FIpc10k3UpRXcHj2wQ6x",
  "wss_url": "wss://console.hetzner.cloud/?server_id=1&token=3db32d15-af2f-459c-8bf8-dee1fd05f49c"
}
```

<h3 id="request-console-for-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="request-console-for-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|password|string|true|none|VNC password to use for this connection (this password only works in combination with a wss_url with valid token)|
|wss_url|string|true|none|URL of websocket proxy to use; this includes a token which is valid for a limited time only|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Reset a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/reset \
  -X POST \
  -H 'Accept: application/json'
```

`POST /servers/{id}/actions/reset`

Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.

<h3 id="reset-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "reset_server",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="reset-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="reset-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Reset root Password of a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/reset_password \
  -X POST \
  -H 'Accept: application/json'
```

`POST /servers/{id}/actions/reset_password`

Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on (status `running`) in order for this operation to succeed.

This will generate a new password for this Server and return it.

If this does not succeed you can use the rescue system to netboot the Server and manually change your Server password by hand.


<h3 id="reset-root-password-of-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "reset_password",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  },
  "root_password": "zCWbFhnu950dUTko5f40"
}
```

<h3 id="reset-root-password-of-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `root_password` key in the reply contains the new root password that will be active if the Action succeeds.<br><br>The `action` key in the reply contains an Action object with this structure:<br>|Inline|

<h3 id="reset-root-password-of-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|root_password|string|false|none|Password that will be set for this Server once the Action succeeds|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Shutdown a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/shutdown \
  -X POST \
  -H 'Accept: application/json'
```

`POST /servers/{id}/actions/shutdown`

Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI and react to the request, otherwise the Server will not shut down.

<h3 id="shutdown-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "shutdown_server",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="shutdown-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key in the reply contains an Action object with this structure|Inline|

<h3 id="shutdown-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Action for a Server

> Code samples

```bash
curl https://example.com/servers/0/actions/0 \
  -H 'Accept: application/json'
```

`GET /servers/{id}/actions/{action_id}`

Returns a specific Action object for a Server.

<h3 id="get-an-action-for-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Server|
|action_id|path|integer|true|ID of the Action|

> Example responses

> 200 Response

```json
{
  "action": {
    "command": "start_server",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="get-an-action-for-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `action` key in the reply has this structure|Inline|

<h3 id="get-an-action-for-a-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-server-types">Server Types</h1>

Server types define kinds of Servers offered. Each type has an hourly and a monthly cost. You will pay whichever cost is lower for your usage of this specific Server. Costs may differ between Locations.

Currency for all amounts is €. All prices exclude VAT.


## Get all Server Types

> Code samples

```bash
curl https://example.com/server_types \
  -H 'Accept: application/json'
```

`GET /server_types`

Gets all Server type objects.

<h3 id="get-all-server-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Can be used to filter Server types by their name. The response will only contain the Server type matching the specified name.|

> Example responses

> 200 Response

```json
{
  "server_types": [
    {
      "cores": 1,
      "cpu_type": "shared",
      "deprecated": false,
      "description": "CX11",
      "disk": 24,
      "id": 1,
      "memory": 1,
      "name": "cx11",
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          },
          "price_monthly": {
            "gross": "1.1900000000000000",
            "net": "1.0000000000"
          }
        }
      ],
      "storage_type": "local"
    }
  ]
}
```

<h3 id="get-all-server-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `server_types` key in the reply contains an array of Server type objects with this structure|Inline|

<h3 id="get-all-server-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server_types|[object]|true|none|none|
|» cores|number|true|none|Number of cpu cores a Server of this type will have|
|» cpu_type|string|true|none|Type of cpu|
|» deprecated|boolean|true|none|True if Server type is deprecated|
|» description|string|true|none|Description of the Server type|
|» disk|number|true|none|Disk size a Server of this type will have in GB|
|» id|number|true|none|ID of the Server type|
|» memory|number|true|none|Memory a Server of this type will have in GB|
|» name|string|true|none|Unique identifier of the Server type|
|» prices|[object]|true|none|Prices in different Locations|
|» » location|string|true|none|Name of the Location the price is for|
|» » price_hourly|object|true|none|Hourly costs for a Server type in this Location|
|» » » gross|string|true|none|Price with VAT added|
|» » » net|string|true|none|Price without VAT|
|» » price_monthly|object|true|none|Monthly costs for a Server type in this Location|
|» » » gross|string|true|none|Price with VAT added|
|» » » net|string|true|none|Price without VAT|
|» storage_type|string|true|none|Type of Server boot drive. Local has higher speed. Network has better availability.|

#### Enumerated Values

|Property|Value|
|---|---|
|» cpu_type|shared|
|» cpu_type|dedicated|
|» storage_type|local|
|» storage_type|network|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Server Type

> Code samples

```bash
curl https://example.com/server_types/0 \
  -H 'Accept: application/json'
```

`GET /server_types/{id}`

Gets a specific Server type object.

<h3 id="get-a-server-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of Server Type|

> Example responses

> 200 Response

```json
{
  "server_type": {
    "cores": 1,
    "cpu_type": "shared",
    "deprecated": false,
    "description": "CX11",
    "disk": 24,
    "id": 1,
    "memory": 1,
    "name": "cx11",
    "prices": [
      {
        "location": "fsn1",
        "price_hourly": {
          "gross": "1.1900000000000000",
          "net": "1.0000000000"
        },
        "price_monthly": {
          "gross": "1.1900000000000000",
          "net": "1.0000000000"
        }
      }
    ],
    "storage_type": "local"
  }
}
```

<h3 id="get-a-server-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `server_type` key in the reply contains a Server type object with this structure|Inline|

<h3 id="get-a-server-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server_type|object|true|none|none|
|» cores|number|true|none|Number of cpu cores a Server of this type will have|
|» cpu_type|string|true|none|Type of cpu|
|» deprecated|boolean|true|none|True if Server type is deprecated|
|» description|string|true|none|Description of the Server type|
|» disk|number|true|none|Disk size a Server of this type will have in GB|
|» id|number|true|none|ID of the Server type|
|» memory|number|true|none|Memory a Server of this type will have in GB|
|» name|string|true|none|Unique identifier of the Server type|
|» prices|[object]|true|none|Prices in different Locations|
|» » location|string|true|none|Name of the Location the price is for|
|» » price_hourly|object|true|none|Hourly costs for a Server type in this Location|
|» » » gross|string|true|none|Price with VAT added|
|» » » net|string|true|none|Price without VAT|
|» » price_monthly|object|true|none|Monthly costs for a Server type in this Location|
|» » » gross|string|true|none|Price with VAT added|
|» » » net|string|true|none|Price without VAT|
|» storage_type|string|true|none|Type of Server boot drive. Local has higher speed. Network has better availability.|

#### Enumerated Values

|Property|Value|
|---|---|
|» cpu_type|shared|
|» cpu_type|dedicated|
|» storage_type|local|
|» storage_type|network|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-ssh-keys">SSH Keys</h1>

SSH keys are public keys you provide to the cloud system. They can be injected into Servers at creation time. We highly recommend that you use keys instead of passwords to manage your Servers.

## Get all SSH keys

> Code samples

```bash
curl https://example.com/ssh_keys \
  -H 'Accept: application/json'
```

`GET /ssh_keys`

Returns all SSH key objects.

<h3 id="get-all-ssh-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Can be used multiple times.|
|name|query|string|false|Can be used to filter resources by their name. The response will only contain the resources matching the specified name|
|fingerprint|query|string|false|Can be used to filter SSH keys by their fingerprint. The response will only contain the SSH key matching the specified fingerprint.|
|label_selector|query|string|false|Can be used to filter resources by labels. The response will only contain resources matching the label selector.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|name|
|sort|name:asc|
|sort|name:desc|

> Example responses

> 200 Response

```json
{
  "meta": {
    "pagination": {
      "last_page": 4,
      "next_page": 4,
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "total_entries": 100
    }
  },
  "ssh_keys": [
    {
      "created": "2016-01-30T23:55:00+00:00",
      "fingerprint": "b7:2f:30:a0:2f:6c:58:6c:21:04:58:61:ba:06:3b:2f",
      "id": 42,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "my-resource",
      "public_key": "ssh-rsa AAAjjk76kgf...Xt"
    }
  ]
}
```

<h3 id="get-all-ssh-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `ssh_keys` key in the reply contains an array of SSH key objects with this structure|Inline|

<h3 id="get-all-ssh-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|
|ssh_keys|[object]|true|none|none|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» fingerprint|string|true|none|Fingerprint of public key|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» public_key|string|true|none|Public key|

<aside class="success">
This operation does not require authentication
</aside>

## Create an SSH key

> Code samples

```bash
curl https://example.com/ssh_keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labels": {},
    "name": "My ssh key",
    "public_key": "ssh-rsa AAAjjk76kgf...Xt"
  }'
```

`POST /ssh_keys`

Creates a new SSH key with the given `name` and `public_key`. Once an SSH key is created, it can be used in other calls such as creating Servers.

> Body parameter

```json
{
  "labels": {},
  "name": "My ssh key",
  "public_key": "ssh-rsa AAAjjk76kgf...Xt"
}
```

<h3 id="create-an-ssh-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» name|body|string|true|Name of the SSH key|
|» public_key|body|string|true|Public key|

> Example responses

> 201 Response

```json
{
  "ssh_key": {
    "created": "2016-01-30T23:55:00+00:00",
    "fingerprint": "b7:2f:30:a0:2f:6c:58:6c:21:04:58:61:ba:06:3b:2f",
    "id": 42,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "my-resource",
    "public_key": "ssh-rsa AAAjjk76kgf...Xt"
  }
}
```

<h3 id="create-an-ssh-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `ssh_key` key in the reply contains the object that was just created|Inline|

<h3 id="create-an-ssh-key-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ssh_key|object|true|none|none|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» fingerprint|string|true|none|Fingerprint of public key|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» public_key|string|true|none|Public key|

<aside class="success">
This operation does not require authentication
</aside>

## Get a SSH key

> Code samples

```bash
curl https://example.com/ssh_keys/0 \
  -H 'Accept: application/json'
```

`GET /ssh_keys/{id}`

Returns a specific SSH key object.

<h3 id="get-a-ssh-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the SSH key|

> Example responses

> 200 Response

```json
{
  "ssh_key": {
    "created": "2016-01-30T23:55:00+00:00",
    "fingerprint": "b7:2f:30:a0:2f:6c:58:6c:21:04:58:61:ba:06:3b:2f",
    "id": 42,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "my-resource",
    "public_key": "ssh-rsa AAAjjk76kgf...Xt"
  }
}
```

<h3 id="get-a-ssh-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `ssh_key` key in the reply contains an SSH key object with this structure|Inline|

<h3 id="get-a-ssh-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ssh_key|object|true|none|none|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» fingerprint|string|true|none|Fingerprint of public key|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» public_key|string|true|none|Public key|

<aside class="success">
This operation does not require authentication
</aside>

## Update an SSH key

> Code samples

```bash
curl https://example.com/ssh_keys/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labels": {
      "labelkey": "value"
    },
    "name": "My ssh key"
  }'
```

`PUT /ssh_keys/{id}`

Updates an SSH key. You can update an SSH key name and an SSH key labels.

Please note that when updating labels, the SSH key current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.


> Body parameter

```json
{
  "labels": {
    "labelkey": "value"
  },
  "name": "My ssh key"
}
```

<h3 id="update-an-ssh-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the SSH key|
|body|body|object|false|none|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» name|body|string|false|New name Name to set|

> Example responses

> 200 Response

```json
{
  "ssh_key": {
    "created": "2016-01-30T23:50:00+00:00",
    "fingerprint": "b7:2f:30:a0:2f:6c:58:6c:21:04:58:61:ba:06:3b:2f",
    "id": 2323,
    "labels": {
      "labelkey": "value"
    },
    "name": "My ssh key",
    "public_key": "ssh-rsa AAAjjk76kgf...Xt"
  }
}
```

<h3 id="update-an-ssh-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `ssh_key` key in the reply contains the modified SSH key object with the new description|Inline|

<h3 id="update-an-ssh-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ssh_key|object|true|none|none|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» fingerprint|string|true|none|Fingerprint of public key|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» public_key|string|true|none|Public key|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an SSH key

> Code samples

```bash
curl https://example.com/ssh_keys/string \
  -X DELETE
```

`DELETE /ssh_keys/{id}`

Deletes an SSH key. It cannot be used anymore.

<h3 id="delete-an-ssh-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the SSH key|

<h3 id="delete-an-ssh-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|SSH key deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-volumes">Volumes</h1>

A Volume is a highly-available, scalable, and SSD-based block storage for Servers.

Pricing for Volumes depends on the Volume size and Location, not the actual used storage.

Please see [Hetzner Docs](https://docs.hetzner.com/cloud/#Volumes) for more details about Volumes.


## Get all Volumes

> Code samples

```bash
curl https://example.com/volumes \
  -H 'Accept: application/json'
```

`GET /volumes`

Gets all existing Volumes that you have available.

<h3 id="get-all-volumes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Can be used multiple times. The response will only contain Volumes matching the status.|
|sort|query|string|false|Can be used multiple times.|
|name|query|string|false|Can be used to filter resources by their name. The response will only contain the resources matching the specified name|
|label_selector|query|string|false|Can be used to filter resources by labels. The response will only contain resources matching the label selector.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|available|
|status|creating|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|name|
|sort|name:asc|
|sort|name:desc|
|sort|created|
|sort|created:asc|
|sort|created:desc|

> Example responses

> 200 Response

```json
{
  "meta": {
    "pagination": {
      "last_page": 4,
      "next_page": 4,
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "total_entries": 100
    }
  },
  "volumes": [
    {
      "created": "2016-01-30T23:55:00+00:00",
      "format": "xfs",
      "id": 42,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "linux_device": "/dev/disk/by-id/scsi-0HC_Volume_4711",
      "location": {
        "city": "Falkenstein",
        "country": "DE",
        "description": "Falkenstein DC Park 1",
        "id": 1,
        "latitude": 50.47612,
        "longitude": 12.370071,
        "name": "fsn1",
        "network_zone": "eu-central"
      },
      "name": "my-resource",
      "protection": {
        "delete": false
      },
      "server": 12,
      "size": 42,
      "status": "available"
    }
  ]
}
```

<h3 id="get-all-volumes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `volumes` key contains a list of volumes|Inline|

<h3 id="get-all-volumes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|
|volumes|[object]|true|none|none|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» format|string \| null|true|none|Filesystem of the Volume if formatted on creation, null if not formatted on creation|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» linux_device|string|true|none|Device path on the file system for the Volume|
|» location|object|true|none|Location of the Volume. Volume can only be attached to Servers in the same Location.|
|» » city|string|true|none|City the Location is closest to|
|» » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » description|string|true|none|Description of the Location|
|» » id|number|true|none|ID of the Location|
|» » latitude|number|true|none|Latitude of the city closest to the Location|
|» » longitude|number|true|none|Longitude of the city closest to the Location|
|» » name|string|true|none|Unique identifier of the Location|
|» » network_zone|string|true|none|Name of network zone this Location resides in|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» server|integer \| null|true|none|ID of the Server the Volume is attached to, null if it is not attached at all|
|» size|number|true|none|Size in GB of the Volume|
|» status|string|true|none|Current status of the Volume|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|creating|
|» status|available|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Volume

> Code samples

```bash
curl https://example.com/volumes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "automount": false,
    "format": "xfs",
    "labels": {
      "labelkey": "value"
    },
    "location": "nbg1",
    "name": "test-database",
    "size": 42
  }'
```

`POST /volumes`

Creates a new Volume attached to a Server. If you want to create a Volume that is not attached to a Server, you need to provide the `location` key instead of `server`. This can be either the ID or the name of the Location this Volume will be created in. Note that a Volume can be attached to a Server only in the same Location as the Volume itself.

Specifying the Server during Volume creation will automatically attach the Volume to that Server after it has been initialized. In that case, the `next_actions` key in the response is an array which contains a single `attach_volume` action.

The minimum Volume size is 10GB and the maximum size is 10TB (10240GB).

A volume’s name can consist of alphanumeric characters, dashes, underscores, and dots, but has to start and end with an alphanumeric character. The total length is limited to 64 characters. Volume names must be unique per Project.

#### Call specific error codes

| Code                                | Description                                         |
|-------------------------------------|-----------------------------------------------------|
| `no_space_left_in_location`         | There is no volume space left in the given location |


> Body parameter

```json
{
  "automount": false,
  "format": "xfs",
  "labels": {
    "labelkey": "value"
  },
  "location": "nbg1",
  "name": "test-database",
  "size": 42
}
```

<h3 id="create-a-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» automount|body|boolean|false|Auto-mount Volume after attach. `server` must be provided.|
|» format|body|string|false|Format Volume after creation. One of: `xfs`, `ext4`|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» location|body|string|false|Location to create the Volume in (can be omitted if Server is specified)|
|» name|body|string|true|Name of the volume|
|» server|body|integer|false|Server to which to attach the Volume once it's created (Volume will be created in the same Location as the server)|
|» size|body|integer|true|Size of the Volume in GB|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "create_volume",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 554,
        "type": "volume"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  },
  "next_actions": [
    {
      "command": "attach_volume",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": null,
      "id": 13,
      "progress": 0,
      "resources": [
        {
          "id": 42,
          "type": "server"
        },
        {
          "id": 554,
          "type": "volume"
        }
      ],
      "started": "2016-01-30T23:50:00+00:00",
      "status": "running"
    }
  ],
  "volume": {
    "created": "2016-01-30T23:50:11+00:00",
    "format": "xfs",
    "id": 4711,
    "labels": {
      "env": "dev"
    },
    "linux_device": "/dev/disk/by-id/scsi-0HC_Volume_4711",
    "location": {
      "city": "Falkenstein",
      "country": "DE",
      "description": "Falkenstein DC Park 1",
      "id": 1,
      "latitude": 50.47612,
      "longitude": 12.370071,
      "name": "fsn1",
      "network_zone": "eu-central"
    },
    "name": "database-storage",
    "protection": {
      "delete": false
    },
    "server": 12,
    "size": 42,
    "status": "available"
  }
}
```

<h3 id="create-a-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `volume` key contains the Volume that was just created<br><br>The `action` key contains the Action tracking Volume creation<br>|Inline|

<h3 id="create-a-volume-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|next_actions|[object]|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|volume|object|true|none|none|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» format|string \| null|true|none|Filesystem of the Volume if formatted on creation, null if not formatted on creation|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» linux_device|string|true|none|Device path on the file system for the Volume|
|» location|object|true|none|Location of the Volume. Volume can only be attached to Servers in the same Location.|
|» » city|string|true|none|City the Location is closest to|
|» » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » description|string|true|none|Description of the Location|
|» » id|number|true|none|ID of the Location|
|» » latitude|number|true|none|Latitude of the city closest to the Location|
|» » longitude|number|true|none|Longitude of the city closest to the Location|
|» » name|string|true|none|Unique identifier of the Location|
|» » network_zone|string|true|none|Name of network zone this Location resides in|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» server|integer \| null|true|none|ID of the Server the Volume is attached to, null if it is not attached at all|
|» size|number|true|none|Size in GB of the Volume|
|» status|string|true|none|Current status of the Volume|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|
|» status|success|
|» status|running|
|» status|error|
|» status|creating|
|» status|available|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Volume

> Code samples

```bash
curl https://example.com/volumes/0 \
  -H 'Accept: application/json'
```

`GET /volumes/{id}`

Gets a specific Volume object.

<h3 id="get-a-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Volume|

> Example responses

> 200 Response

```json
{
  "volume": {
    "created": "2016-01-30T23:55:00+00:00",
    "format": "xfs",
    "id": 42,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "linux_device": "/dev/disk/by-id/scsi-0HC_Volume_4711",
    "location": {
      "city": "Falkenstein",
      "country": "DE",
      "description": "Falkenstein DC Park 1",
      "id": 1,
      "latitude": 50.47612,
      "longitude": 12.370071,
      "name": "fsn1",
      "network_zone": "eu-central"
    },
    "name": "my-resource",
    "protection": {
      "delete": false
    },
    "server": 12,
    "size": 42,
    "status": "available"
  }
}
```

<h3 id="get-a-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `volume` key contains the volume|Inline|

<h3 id="get-a-volume-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|volume|object|true|none|none|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» format|string \| null|true|none|Filesystem of the Volume if formatted on creation, null if not formatted on creation|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» linux_device|string|true|none|Device path on the file system for the Volume|
|» location|object|true|none|Location of the Volume. Volume can only be attached to Servers in the same Location.|
|» » city|string|true|none|City the Location is closest to|
|» » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » description|string|true|none|Description of the Location|
|» » id|number|true|none|ID of the Location|
|» » latitude|number|true|none|Latitude of the city closest to the Location|
|» » longitude|number|true|none|Longitude of the city closest to the Location|
|» » name|string|true|none|Unique identifier of the Location|
|» » network_zone|string|true|none|Name of network zone this Location resides in|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» server|integer \| null|true|none|ID of the Server the Volume is attached to, null if it is not attached at all|
|» size|number|true|none|Size in GB of the Volume|
|» status|string|true|none|Current status of the Volume|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|creating|
|» status|available|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Volume

> Code samples

```bash
curl https://example.com/volumes/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "labels": {
      "labelkey": "value"
    },
    "name": "database-storage"
  }'
```

`PUT /volumes/{id}`

Updates the Volume properties.

Note that when updating labels, the volume’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.


> Body parameter

```json
{
  "labels": {
    "labelkey": "value"
  },
  "name": "database-storage"
}
```

<h3 id="update-a-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the Volume to update|
|body|body|object|false|none|
|» labels|body|object|false|User-defined labels (key-value pairs)|
|» » labelkey|body|string|false|none|
|» name|body|string|true|New Volume name|

> Example responses

> 200 Response

```json
{
  "volume": {
    "created": "2016-01-30T23:50:11+00:00",
    "format": "xfs",
    "id": 4711,
    "labels": {
      "labelkey": "value"
    },
    "linux_device": "/dev/disk/by-id/scsi-0HC_Volume_4711",
    "location": {
      "city": "Falkenstein",
      "country": "DE",
      "description": "Falkenstein DC Park 1",
      "id": 1,
      "latitude": 50.47612,
      "longitude": 12.370071,
      "name": "fsn1",
      "network_zone": "eu-central"
    },
    "name": "database-storage",
    "protection": {
      "delete": false
    },
    "server": 12,
    "size": 42,
    "status": "available"
  }
}
```

<h3 id="update-a-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `volume` key contains the updated volume|Inline|

<h3 id="update-a-volume-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|volume|object|true|none|none|
|» created|string|true|none|Point in time when the Resource was created (in ISO-8601 format)|
|» format|string \| null|true|none|Filesystem of the Volume if formatted on creation, null if not formatted on creation|
|» id|integer|true|none|ID of the Resource|
|» labels|object|true|none|User-defined labels (key-value pairs)|
|» » **additionalProperties**|string|false|none|none|
|» linux_device|string|true|none|Device path on the file system for the Volume|
|» location|object|true|none|Location of the Volume. Volume can only be attached to Servers in the same Location.|
|» » city|string|true|none|City the Location is closest to|
|» » country|string|true|none|ISO 3166-1 alpha-2 code of the country the Location resides in|
|» » description|string|true|none|Description of the Location|
|» » id|number|true|none|ID of the Location|
|» » latitude|number|true|none|Latitude of the city closest to the Location|
|» » longitude|number|true|none|Longitude of the city closest to the Location|
|» » name|string|true|none|Unique identifier of the Location|
|» » network_zone|string|true|none|Name of network zone this Location resides in|
|» name|string|true|none|Name of the Resource. Must be unique per Project.|
|» protection|object|true|none|Protection configuration for the Resource|
|» » delete|boolean|true|none|If true, prevents the Resource from being deleted|
|» server|integer \| null|true|none|ID of the Server the Volume is attached to, null if it is not attached at all|
|» size|number|true|none|Size in GB of the Volume|
|» status|string|true|none|Current status of the Volume|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|creating|
|» status|available|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Volume

> Code samples

```bash
curl https://example.com/volumes/string \
  -X DELETE
```

`DELETE /volumes/{id}`

Deletes a volume. All Volume data is irreversibly destroyed. The Volume must not be attached to a Server and it must not have delete protection enabled.

<h3 id="delete-a-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the Volume|

<h3 id="delete-a-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Volume deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hetzner-cloud-api-volume-actions">Volume Actions</h1>

## Get all Actions for a Volume

> Code samples

```bash
curl https://example.com/volumes/0/actions \
  -H 'Accept: application/json'
```

`GET /volumes/{id}/actions`

Returns all Action objects for a Volume. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.

<h3 id="get-all-actions-for-a-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Volume|
|sort|query|string|false|Can be used multiple times.|
|status|query|string|false|Can be used multiple times, the response will contain only Actions with specified statuses|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|id:asc|
|sort|id:desc|
|sort|command|
|sort|command:asc|
|sort|command:desc|
|sort|status|
|sort|status:asc|
|sort|status:desc|
|sort|progress|
|sort|progress:asc|
|sort|progress:desc|
|sort|started|
|sort|started:asc|
|sort|started:desc|
|sort|finished|
|sort|finished:asc|
|sort|finished:desc|
|status|running|
|status|success|
|status|error|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "command": "attach_volume",
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      },
      "finished": "2016-01-30T23:56:00+00:00",
      "id": 13,
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        },
        {
          "id": 13,
          "type": "volume"
        }
      ],
      "started": "2016-01-30T23:55:00+00:00",
      "status": "success"
    }
  ]
}
```

<h3 id="get-all-actions-for-a-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `actions` key contains a list of Actions|Inline|

<h3 id="get-all-actions-for-a-volume-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|
|meta|object|false|none|none|
|» pagination|object|true|none|none|
|» » last_page|number \| null|true|none|ID of the last page available. Can be null if the current page is the last one.|
|» » next_page|number \| null|true|none|ID of the next page. Can be null if the current page is the last one.|
|» » page|number|true|none|Current page number|
|» » per_page|number|true|none|Maximum number of items shown per page in the response|
|» » previous_page|number \| null|true|none|ID of the previous page. Can be null if the current page is the first one.|
|» » total_entries|number \| null|true|none|The total number of entries that exist in the database for this query. Nullable if unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Attach Volume to a Server

> Code samples

```bash
curl https://example.com/volumes/0/actions/attach \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "automount": false,
    "server": 43
  }'
```

`POST /volumes/{id}/actions/attach`

Attaches a Volume to a Server. Works only if the Server is in the same Location as the Volume.

> Body parameter

```json
{
  "automount": false,
  "server": 43
}
```

<h3 id="attach-volume-to-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Volume|
|body|body|object|false|none|
|» automount|body|boolean|false|Auto-mount the Volume after attaching it|
|» server|body|integer|true|ID of the Server the Volume will be attached to|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "attach_volume",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 43,
        "type": "server"
      },
      {
        "id": 554,
        "type": "volume"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="attach-volume-to-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `attach_volume` Action|Inline|

<h3 id="attach-volume-to-a-server-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Change Volume Protection

> Code samples

```bash
curl https://example.com/volumes/0/actions/change_protection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "delete": true
  }'
```

`POST /volumes/{id}/actions/change_protection`

Changes the protection configuration of a Volume.

> Body parameter

```json
{
  "delete": true
}
```

<h3 id="change-volume-protection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Volume|
|body|body|object|false|none|
|» delete|body|boolean|false|If true, prevents the Volume from being deleted|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "change_protection",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 554,
        "type": "volume"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="change-volume-protection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `change_protection` Action|Inline|

<h3 id="change-volume-protection-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Detach Volume

> Code samples

```bash
curl https://example.com/volumes/0/actions/detach \
  -X POST \
  -H 'Accept: application/json'
```

`POST /volumes/{id}/actions/detach`

Detaches a Volume from the Server it’s attached to. You may attach it to a Server again at a later time.

<h3 id="detach-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Volume|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "detach_volume",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="detach-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `detach_volume` Action|Inline|

<h3 id="detach-volume-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Resize Volume

> Code samples

```bash
curl https://example.com/volumes/0/actions/resize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "size": 50
  }'
```

`POST /volumes/{id}/actions/resize`

Changes the size of a Volume. Note that downsizing a Volume is not possible.

> Body parameter

```json
{
  "size": 50
}
```

<h3 id="resize-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Volume|
|body|body|object|false|none|
|» size|body|number|true|New Volume size in GB (must be greater than current size)|

> Example responses

> 201 Response

```json
{
  "action": {
    "command": "resize_volume",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": null,
    "id": 13,
    "progress": 0,
    "resources": [
      {
        "id": 554,
        "type": "volume"
      }
    ],
    "started": "2016-01-30T23:50:00+00:00",
    "status": "running"
  }
}
```

<h3 id="resize-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `action` key contains the `resize_volume` Action|Inline|

<h3 id="resize-volume-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Action for a Volume

> Code samples

```bash
curl https://example.com/volumes/0/actions/0 \
  -H 'Accept: application/json'
```

`GET /volumes/{id}/actions/{action_id}`

Returns a specific Action for a Volume.

<h3 id="get-an-action-for-a-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the Volume|
|action_id|path|integer|true|ID of the Action|

> Example responses

> 200 Response

```json
{
  "action": {
    "command": "attach_volume",
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    },
    "finished": "2016-01-30T23:56:00+00:00",
    "id": 13,
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "started": "2016-01-30T23:55:00+00:00",
    "status": "success"
  }
}
```

<h3 id="get-an-action-for-a-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `action` key contains the Volume Action|Inline|

<h3 id="get-an-action-for-a-volume-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|» command|string|true|none|Command executed in the Action|
|» error|object \| null|true|none|Error message for the Action if error occurred, otherwise null|
|» » code|string|true|none|Fixed machine readable code|
|» » message|string|true|none|Humanized error message|
|» finished|string \| null|true|none|Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.|
|» id|integer|true|none|ID of the Resource|
|» progress|number|true|none|Progress of Action in percent|
|» resources|[object]|true|none|Resources the Action relates to|
|» » id|integer|true|none|ID of the Resource|
|» » type|string|true|none|Type of resource referenced|
|» started|string|true|none|Point in time when the Action was started (in ISO-8601 format)|
|» status|string|true|none|Status of the Action|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|running|
|» status|error|

<aside class="success">
This operation does not require authentication
</aside>
