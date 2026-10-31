<h1 id="threatjammercom-user-api">ThreatJammer.com User API v1.2.20</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


The public API open to the users. [Read the docs and learn more.](https://threatjammer.com/docs).

## General information

### Description
Threat Jammer supports two end-user REST APIs: the User API and the Report API. The end-user uses the User API to interact with the different databases, heuristics, and machine learning processes. Devices use the Report API to interact with Threat Jammer. This document will explain how to use the User API and interact with the different services, create a token, interpret the quota information, and create the HTTP request to interact with the User API.

### Authentication
The API is protected by a **Bearer authentication** schema. **Bearer authentication** (also called **token authentication**) is an HTTP authentication scheme that involves security tokens called bearer tokens. It is used to authenticate the user. All the different endpoints expect a `Bearer` token in the `Authorization` header.

Example:

```
curl -X 'GET'
  'https://dublin.api.threatjammer.com/test'
  -H 'accept: application/json'
  -H 'Authorization: Bearer YOUR_API_KEY'
```

You can obtain a token after registering on the [ThreatJammer.com](https://threatjammer.com) website for free.


### Region specific tokens
All the `Bearer` tokens contain information about the authorized region. The developers have to use a token created for the region they want to use. A token used in a different region will return a `401 Unauthorized` error.

### Global errors

The API will return the following permanent errors:
- a `401 Unauthorized` error if the token is not valid, or does not belong to the region.
- a `401 Unauthorized` error if the token does not exist.
- a `401 Unauthorized` error if the token is malformed.
- a `403 Forbidden` error if the subscription level is not enough. Some endpoints are only available for paid subscription levels.

And these temporary errors:
- a `429 Too Many Requests` error if the quota is exceeded (see below).

### Quota limits

**Every request to the User API will consume one (1) quota point.**

The API has two rate limiting processes:
- a quota limit of **5000** requests per month for the `FREE` account. The limit is reset every month.
- a quota limit of **10** requests per minute for the `FREE` account. The limit is reset every minute and implements a sliding window mechanism.

Email: <a href="mailto:support@threatjammer.com">ThreatJammer Support</a> 
Web: <a href="https://threatjammer.com/contactus">ThreatJammer Support</a> 

<a href="https://threatjammer.com/docs/index">Threat Jammer Documentation Site</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="threatjammercom-user-api-allowlist-data-query-and-management">Allowlist data query and management</h1>

## Creates a new private allowlist binded to the user.

<a id="opIdcreate_private_allowlist_of_the_user_v1_allowlist_private_post"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/private \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payload": {
      "description": "string",
      "name": "string",
      "resource_type": "UNKNOWN",
      "tags": [
        "string"
      ],
      "ttl": 0
    }
  }'
```

`POST /v1/allowlist/private`

### What
Creates a new allowlist with the information given and binded to the current user. The parameters are:
 - name
 - description
 - tags
 - expiry
 - Time to Live (TTL)
 - Resource Type (`CIDR`, `AS`, `COUNTRY`, `CONTINENT`, `DATACENTER_ID` and `USER AGENT`)

This is an asynchronous operation. It can take several seconds until the operation completes, but the request will immediately return a 202 Accepted response. The operation will also return the UUID of the list.

### Parameters
In the query string the ID of the private allow list to delete.

In the body the following parameters:
- ``name``: A human readable name of the list.
- ``description``: A long detailed information about what the list contains and how it is used.
- ``tags``: A list of tags that describe the list.
- ``ttl``: (Optional) The Time To Live of the list, in seconds. If it does not exist, it will never expire.
- ``resource_type``: The type of resource that the list contains. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT``,    ``DATACENTER_ID`` or ``USER AGENT``.

### Result
It should always return a 202 Accepted response with the UUID of the new list in the body.

### Errors

- If the information is not valid, it will return a `422` (Unprocessable Entity) error.
- If the ttl is negative, it will return a `400` (Bad Request) error.

It will return the API Global errors described in the API description.

> Body parameter

```json
{
  "payload": {
    "description": "string",
    "name": "string",
    "resource_type": "UNKNOWN",
    "tags": [
      "string"
    ],
    "ttl": 0
  }
}
```

<h3 id="creates-a-new-private-allowlist-binded-to-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Body_create_private_allowlist_of_the_user_v1_allowlist_private_post](#schemabody_create_private_allowlist_of_the_user_v1_allowlist_private_post)|true|none|
|» payload|body|object|true|The information needed to create a new allowlist|
|» » description|body|string|true|none|
|» » name|body|string|true|none|
|» » resource_type|body|string|true|none|
|» » tags|body|[string]|true|none|
|» » ttl|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » resource_type|UNKNOWN|
|» » resource_type|CIDR|
|» » resource_type|COUNTRY|
|» » resource_type|CONTINENT|
|» » resource_type|AS|
|» » resource_type|DATACENTER|
|» » resource_type|USERAGENT|

> Example responses

> 200 Response

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="creates-a-new-private-allowlist-binded-to-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the set of private allowlists of the user.

<a id="opIdget_all_private_allowlists_v1_allowlist_private_all_get"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/private/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/allowlist/private/all`

### What
Obtain the set of private allow lists of the user available in the service.

### Parameters
No parameters

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to the status of all the lists.
- ``lists``: a list of JSON objects with the available lists:
    - ``self``: the URI to individual information of the list.
    - ``name``: A human readable name of the list.
    - ``description``: A long detailed information about what the list contains and how it is used.
    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
    - ``created_at``: Unix timestamp in seconds when the list was created.
    - ``updated_at``: Unix timestamp in seconds when the list was updated.
    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
    - ``origins``: list of websites that are using the list as a allowlist.
        - ``self``: the URI to all the list of origins.
        - ``lists``: list of lists that the origin is using.
            - ``self``: the URI to the individual information of the list.
            - ``origin``: the protocol and domain of the website that is using the list.
            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.
            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
            - ``created_at``: Unix timestamp in seconds when the list was created.
            - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "content": "string",
      "created_at": 0,
      "description": "string",
      "list_type": "UNKNOWN",
      "name": "string",
      "origins": {
        "lists": [
          {
            "created_at": 0,
            "origin": "string",
            "self": "string",
            "status": "INACTIVE",
            "updated_at": 0
          }
        ],
        "self": "string"
      },
      "resource_type": "UNKNOWN",
      "self": "string",
      "tags": [
        "string"
      ],
      "ttl": 0,
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

<h3 id="get-the-set-of-private-allowlists-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PrivateAclGroupListCollectionOutput](#schemaprivateaclgrouplistcollectionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the set of private allowlists of the user by resource type.

<a id="opIdget_all_private_allowlists_by_resource_type_v1_allowlist_private_all__resource_type__get"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/private/all/cidr \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/allowlist/private/all/{resource_type}`

### What
Obtain the set of private allow lists of the user available in the service filtering by resource type. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``

### Parameters
The ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to the status of all the lists.
- ``lists``: a list of JSON objects with the available lists:
    - ``self``: the URI to individual information of the list.
    - ``name``: A human readable name of the list.
    - ``description``: A long detailed information about what the list contains and how it is used.
    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
    - ``created_at``: Unix timestamp in seconds when the list was created.
    - ``updated_at``: Unix timestamp in seconds when the list was updated.
    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
    - ``origins``: list of websites that are using the list as a allowlist.
        - ``self``: the URI to all the list of origins.
        - ``lists``: list of lists that the origin is using.
            - ``self``: the URI to the individual information of the list.
            - ``origin``: the protocol and domain of the website that is using the list.
            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.
            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
            - ``created_at``: Unix timestamp in seconds when the list was created.
            - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

- If the resource type is not valid, it will return a ``400`` error.

It will also return the API Global errors described in the API description.

<h3 id="get-the-set-of-private-allowlists-of-the-user-by-resource-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_type|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resource_type|cidr|
|resource_type|country|
|resource_type|continent|
|resource_type|as|
|resource_type|datacenter|
|resource_type|useragent|

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "content": "string",
      "created_at": 0,
      "description": "string",
      "list_type": "UNKNOWN",
      "name": "string",
      "origins": {
        "lists": [
          {
            "created_at": 0,
            "origin": "string",
            "self": "string",
            "status": "INACTIVE",
            "updated_at": 0
          }
        ],
        "self": "string"
      },
      "resource_type": "UNKNOWN",
      "self": "string",
      "tags": [
        "string"
      ],
      "ttl": 0,
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-set-of-private-allowlists-of-the-user-by-resource-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PrivateAclGroupListCollectionOutput](#schemaprivateaclgrouplistcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the different private allowlists where the IP address was found.

<a id="opIdquery_resource_denylists_v1_allowlist_private_ip__address__get"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/private/ip/192.0.2.1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/allowlist/private/ip/{address}`

### What
Obtain the list of all the different private allowlists where the IP address entered by the user. The allowlisted forbidden datasets are the ones submitted manually by the user from files or indidual items.

### Parameters
The endpoint accepts the `address` parameter as query string.

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to individual status.
- ``cidrs``: the URI of the lists of CIDRs where the IP was found.
- ``country``: the URIs where the lists of countries where the IP address was found
- ``continent``: the URI where the continent where the IP address was found.
- ``asn``: the URIs where the list of continents of the ASN where the IP address was found.
- ``datacenter``: the URIs of the lists of datacenters where the IP address was found. If not found, the result is an empty string.
- ``reported``: the URI of the information of the IP address reported by the user. For allowlist should be empty.

### Errors
- a `422 Unprocessable Entity` error if the IP address was malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-the-different-private-allowlists-where-the-ip-address-was-found-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string(ipv4) \| string(ipv6)|true|none|

> Example responses

> 200 Response

```json
{
  "asns": [],
  "cidrs": [],
  "continents": [],
  "countries": [],
  "datacenters": [],
  "reported": [
    "string"
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-different-private-allowlists-where-the-ip-address-was-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AclListCollectionOutput](#schemaacllistcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the details of a specific private allowlist of the user.

<a id="opIdget_single_allowlist_v1_allowlist_private__allowlist_id__get"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/private/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/allowlist/private/{allowlist_id}`

### What
Obtain the details of the private allow list of the user available in the service.

### Parameters
Pass the private allowlist ID as query parameter.

### Result
The result is a JSON object with the following structure:
- ``self``: the URI to individual information of the list.
- ``name``: A human readable name of the list.
- ``description``: A long detailed information about what the list contains and how it is used.
- ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
- ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
- ``created_at``: Unix timestamp in seconds when the list was created.
- ``updated_at``: Unix timestamp in seconds when the list was updated.
- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
- ``origins``: list of websites that are using the list as a allowlist.
    - ``self``: the URI to all the list of origins.
    - ``lists``: list of lists that the origin is using.
        - ``self``: the URI to the individual information of the list.
        - ``origin``: the protocol and domain of the website that is using the list.
        - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.
        - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
        - ``created_at``: Unix timestamp in seconds when the list was created.
        - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

- If the allow list is not a valid UUID, it will return a 422 error.
- If the private allowlist ID does not exist, it will return a ``404`` error.

It will also return the API Global errors described in the API description.

<h3 id="get-the-details-of-a-specific-private-allowlist-of-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowlist_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "created_at": 0,
  "description": "string",
  "list_type": "UNKNOWN",
  "name": "string",
  "origins": {
    "lists": [
      {
        "created_at": 0,
        "origin": "string",
        "self": "string",
        "status": "INACTIVE",
        "updated_at": 0
      }
    ],
    "self": "string"
  },
  "resource_type": "UNKNOWN",
  "self": "string",
  "tags": [
    "string"
  ],
  "ttl": 0,
  "updated_at": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-details-of-a-specific-private-allowlist-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PrivateAclGroupListOutput](#schemaprivateaclgrouplistoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Update the information of an existing private allowlist of the user.

<a id="opIdupdate_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__put"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/private/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string",
    "tags": [
      "string"
    ],
    "ttl": 0
  }'
```

`PUT /v1/allowlist/private/{allowlist_id}`

### What
Updates the information that describes the allowlist of the user in the system. The parameters that can be modified are:
 - name
 - description
 - tags
 - expiry

This is an asynchronous operation. It can take several seconds until the operation completes, but the request will immediately return a 202 Accepted response.

### Parameters
In the query string the ID of the private allow list to delete.

In the body the following parameters:
- ``name``: (Optional) A human readable name of the list.
- ``description``: (Optional) A long detailed information about what the list contains and how it is used.
- ``tags``: (Optional) A list of tags that describe the list.
- ``expiry``: (Optional) Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.

### Result
It should always return a 202 Accepted response with an empty body.

### Errors

- If the list does not exist, it will return a `404` (Not found) error.
- If the list is a default list, it will return a `403` (Forbidden) error.
- If the allow list is not a valid UUID, it will return a `422` (Unprocessable Entity) error.
- If the expiry is not a valid timestamp, it will return a `422` (Unprocessable Entity) error.
- If the expiry is in the past, it will return a `400` (Bad Request) error.
- If the name is not a string, it will return a `422` (Unprocessable Entity) error.
- If the description is not a string, it will return a `422` (Unprocessable Entity) error.

It will return the API Global errors described in the API description.

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "tags": [
    "string"
  ],
  "ttl": 0
}
```

<h3 id="update-the-information-of-an-existing-private-allowlist-of-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowlist_id|path|string(uuid)|true|none|
|body|body|[Body_update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__put](#schemabody_update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__put)|false|none|
|» description|body|string|false|The human readable full description of the list|
|» name|body|string|false|The name of the list|
|» tags|body|[string]|false|The list of tags to associate with the list|
|» ttl|body|integer|false|Optional. The Time To Live (TTL) of a resource in the list in seconds.|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="update-the-information-of-an-existing-private-allowlist-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Delete all the bindings between a user and a private allowlist.

<a id="opIddelete_the_allowlist_v1_allowlist_private__allowlist_id__delete"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/private/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/allowlist/private/{allowlist_id}`

### What
Delete all the bindings between a user and a private allowlist. This will remove the content of the allowlist, the allowlist from the user and also all the origins that are using the allowlist.

This is an asynchronous operation. It can take several seconds until the operation completes, but the request willimmediately return a 202 Accepted response.

### Parameters
In the query string the ID of the private allow list to delete.

### Result
It should always return a 202 Accepted response with an empty body.

### Errors

- If the list does not exist, it will return a 404 error.
- If the allow list is not a valid UUID, it will return a 422 error.

It will return the API Global errors described in the API description.

<h3 id="delete-all-the-bindings-between-a-user-and-a-private-allowlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowlist_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-all-the-bindings-between-a-user-and-a-private-allowlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the content of a private allowlist of the user.

<a id="opIdget_allowlist_content_v1_allowlist_private__allowlist_id__content_get"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/private/497f6eca-6276-4993-bfeb-53cbbbba6f08/content \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/allowlist/private/{allowlist_id}/content`

### What
Returns the content of the private allowlist of the user. The content can be CIDRs, ASNs, countries, continents or    datacenter IDs.

### Parameters
Pass the private allowlist ID as query parameter.

### Result
The result is a JSON object with the following structure:
- ``self``: the URI to the content of the list.
- ``cidrs``: (Optional) list of CIDRs in the list.
- ``asns``: (Optional) list of ASNs in the list.
- ``countries``: (Optional) list of countries in the list.
- ``continents``: (Optional) list of continents in the list.
- ``datacenters``: (Optional) list of datacenters in the list.

### Errors

- If the allow list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.
- If the private allowlist ID does not exist, it will return a ``404`` (Not found) error.

It will also return the API Global errors described in the API description.

<h3 id="get-the-content-of-a-private-allowlist-of-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowlist_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "asns": [
    0
  ],
  "cidrs": [
    "string"
  ],
  "continents": [
    "AF"
  ],
  "countries": [
    "AW"
  ],
  "datacenters": [
    "string"
  ],
  "self": "string",
  "user_agents": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-content-of-a-private-allowlist-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PrivateAclListCollectionOutput](#schemaprivateacllistcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Add or remove content of a private allowlist of the user.

<a id="opIdupdate_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_put"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/private/497f6eca-6276-4993-bfeb-53cbbbba6f08/content \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "append": [
      "string"
    ],
    "remove": [
      "string"
    ]
  }'
```

`PUT /v1/allowlist/private/{allowlist_id}/content`

### What
Add or remove content of a private allowlist of the user. The content can be CIDRs, ASNs, countries, continents or datacenter IDs.

The number of elements allowed in all the lists are limited depending on the plan of the user:
- Free: 100 elements
- Basic: 1000 elements
- Premium: 10000 elements

### Parameters
Pass the private allowlist ID as query parameter.

In the body the following parameters:
- ``append``: (Optional) Add CIDRs, ASNs, countries, continents or datacenter IDs to add to the list. It's not possible to mix different resource types in the same list.
- ``remove``: (Optional) Extract CIDRs, ASNs, countries, continents or datacenter IDs to add to the list. It's not possible to mix different resource types in the same list.


### Result
If successful, it will return a ``202`` (Accepted) response with an empty body. The operation is asynchronous,and can take several seconds to complete.

### Errors

- If the allow list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.
- If the private allowlist ID does not exist, it will return a ``404`` (Not found) error.
- If the ``append`` or ``remove`` parameters are not processable, it will return a ``422`` (Unprocessable Entity) error.
- If the number of elements in the lists is over the limit, it will return a ``413`` (Payload Too Large) error.

It will also return the API Global errors described in the API description.

> Body parameter

```json
{
  "append": [
    "string"
  ],
  "remove": [
    "string"
  ]
}
```

<h3 id="add-or-remove-content-of-a-private-allowlist-of-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowlist_id|path|string(uuid)|true|none|
|body|body|[Body_update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_put](#schemabody_update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_put)|false|none|
|» append|body|[string]|false|The name of the resources to append to the allowlist|
|» remove|body|[string]|false|The name of the resources to remove from the allowlist|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="add-or-remove-content-of-a-private-allowlist-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Delete all the content of a private allowlist of the user.

<a id="opIddelete_the_allowlist_content_v1_allowlist_private__allowlist_id__content_delete"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/private/497f6eca-6276-4993-bfeb-53cbbbba6f08/content \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/allowlist/private/{allowlist_id}/content`

### What
Delete all the content of a private allowlist of the user. This will remove all the elements, and there is no way to recover them.

### Parameters
Pass the private allowlist ID as query parameter.

### Result
If successful, it will return a ``202`` (Accepted) response with an empty body. The operation is asynchronous,and can take several seconds to complete.

### Errors

- If the allow list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.
- If the private allowlist ID does not exist, it will return a ``404`` (Not found) error.

It will also return the API Global errors described in the API description.

<h3 id="delete-all-the-content-of-a-private-allowlist-of-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowlist_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-all-the-content-of-a-private-allowlist-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Toogle the status of the origin in an allow list.

<a id="opIdchange_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_put"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/private/497f6eca-6276-4993-bfeb-53cbbbba6f08/origin \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "origin": "http://example.com",
    "status": "ACTIVE"
  }'
```

`PUT /v1/allowlist/private/{allowlist_id}/origin`

### What
Change the status of the origin of an allow list to ``ACTIVE``, ``INACTIVE`` or ``DELETED``.

An ``ACTIVE`` origin will apply the allow list to the protocol and domain of the origin. An origin can be created and activated simply toogling the ``ACTIVE`` status. As an optional parameter it can be provided an ``ttl`` or Time To Live parameter of the origin in the list in seconds. After the TTL expires, the origin will be removed from the list.  If the TTL is not provided, the origin will never expire.

An ``INACTIVE`` origin will not apply the allow list to the protocol and domain of the origin.

A ``DELETED`` origin will be removed from the list. It will not be used by the service anymore. The user can activate it again with the ``ACTIVE`` status.

This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.

*This operation is not available in the Freemium plan.*

### Parameters
In the query string the ID of the allow list to change the status.
In the body the JSON object with the following fields:
- ``origin``: The protocol and domain of the origin. It can be ``http://example.com`` or ``https://example.com``.
- ``status``: The status of the list. It can be ``ACTIVE``, ``INACTIVE`` or ``DELETED``.

### Result
It should always return a 202 Accepted response with an empty body.

### Errors

If the list does not exist, it will return a 404 error.
If the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.
If the TTL is negative in the past, it will return a 422 error.
If the allow list is not a valid UUID, it will return a 422 error.
If the origin is not a valid URL, it will return a 400 error.
If the allowlist is not active, it will returna 409 error.
If the origin is not found in the set owned by the user, it will return a 404 error.

It will return the API Global errors described in the API description.

> Body parameter

```json
{
  "origin": "http://example.com",
  "status": "ACTIVE"
}
```

<h3 id="toogle-the-status-of-the-origin-in-an-allow-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowlist_id|path|string(uuid)|true|none|
|body|body|[Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_put](#schemabody_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_put)|true|none|
|» origin|body|string(uri)|true|The protocol and domain of the origin to change the status|
|» status|body|string|true|The status of the list. ACTIVE, INACTIVE, DELETED|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE|
|» status|INACTIVE|
|» status|DELETED|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="toogle-the-status-of-the-origin-in-an-allow-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the set of public allowlists.

<a id="opIdget_all_public_allowlists_v1_allowlist_public_all_get"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/public/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/allowlist/public/all`

### What
Obtain the set of public allow lists available in the service and also which ones are already selected by the user and wich ones are not.

### Parameters
No parameters

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to the status of all the lists.
- ``lists``: a list of JSON objects with the available lists:
    - ``self``: the URI to individual information of the list.
    - ``name``: A human readable name of the list.
    - ``description``: A long detailed information about what the list contains and how it is used.
    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
    - ``created_at``: Unix timestamp in seconds when the list was created.
    - ``updated_at``: Unix timestamp in seconds when the list was updated.

If the list is already selected by the user, the JSON object will also contain the following fields:
- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
- ``origins``: list of websites that are using the list as an allowlist.
    - ``self``: the URI to all the list of origins.
    - ``lists``: list of lists that the origin is using.
        - ``self``: the URI to the individual information of the list.
        - ``origin``: the protocol and domain of the website that is using the list.
        - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``        it means that the list is not available anymore if not renewed.
        - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
        - ``created_at``: Unix timestamp in seconds when the list was created.
        - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "created_at": 0,
      "description": "string",
      "list_type": "UNKNOWN",
      "name": "string",
      "origins": {
        "lists": [
          {
            "created_at": 0,
            "origin": "string",
            "self": "string",
            "status": "INACTIVE",
            "updated_at": 0
          }
        ],
        "self": "string"
      },
      "resource_type": "UNKNOWN",
      "self": "string",
      "status": "INACTIVE",
      "tags": [
        "string"
      ],
      "ttl": 0,
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

<h3 id="get-the-set-of-public-allowlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PublicAclGroupListCollectionOutput](#schemapublicaclgrouplistcollectionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the set of public allowlists by resource type.

<a id="opIdget_all_public_allowlists_by_resource_type_v1_allowlist_public_all__resource_type__get"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/public/all/cidr \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/allowlist/public/all/{resource_type}`

### What
Obtain the set of public allow lists available in the service and also which ones are already selected by the user and wich ones are not filtering by the resource type.

### Parameters
The ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to the status of all the lists.
- ``lists``: a list of JSON objects with the available lists:
    - ``self``: the URI to individual information of the list.
    - ``name``: A human readable name of the list.
    - ``description``: A long detailed information about what the list contains and how it is used.
    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
    - ``created_at``: Unix timestamp in seconds when the list was created.
    - ``updated_at``: Unix timestamp in seconds when the list was updated.

If the list is already selected by the user, the JSON object will also contain the following fields:
- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
- ``origins``: list of websites that are using the list as an allowlist.
    - ``self``: the URI to all the list of origins.
    - ``lists``: list of lists that the origin is using.
        - ``self``: the URI to the individual information of the list.
        - ``origin``: the protocol and domain of the website that is using the list.
        - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``        it means that the list is not available anymore if not renewed.
        - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
        - ``created_at``: Unix timestamp in seconds when the list was created.
        - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

It will return the API Global errors described in the API description.

<h3 id="get-the-set-of-public-allowlists-by-resource-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_type|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resource_type|cidr|
|resource_type|country|
|resource_type|continent|
|resource_type|as|
|resource_type|datacenter|
|resource_type|useragent|

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "created_at": 0,
      "description": "string",
      "list_type": "UNKNOWN",
      "name": "string",
      "origins": {
        "lists": [
          {
            "created_at": 0,
            "origin": "string",
            "self": "string",
            "status": "INACTIVE",
            "updated_at": 0
          }
        ],
        "self": "string"
      },
      "resource_type": "UNKNOWN",
      "self": "string",
      "status": "INACTIVE",
      "tags": [
        "string"
      ],
      "ttl": 0,
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-set-of-public-allowlists-by-resource-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PublicAclGroupListCollectionOutput](#schemapublicaclgrouplistcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the different public allowlists where the IP address was found.

<a id="opIdquery_resource_allowlists_v1_allowlist_public_ip__address__get"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/public/ip/192.0.2.1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/allowlist/public/ip/{address}`

### What
Obtain the list of all the different public allowlists where the IP address entered by the user is. The public allowlists are the ones activated by the user, but managed by Threatjammer administrators.

### Parameters
The endpoint accepts the `address` parameter as query string.

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to individual status.
- ``cidrs``: the URI of the lists of CIDRs where the IP was found.
- ``country``: the URIs where the lists of countries where the IP address was found
- ``continent``: the URI where the continent where the IP address was found.
- ``asn``: the URIs where the list of continents of the ASN where the IP address was found.
- ``datacenter``: the URIs of the lists of datacenters where the IP address was found. If not found, the result is an empty string.

### Errors
- a `422 Unprocessable Entity` error if the IP address was malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-the-different-public-allowlists-where-the-ip-address-was-found-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string(ipv4) \| string(ipv6)|true|none|

> Example responses

> 200 Response

```json
{
  "asns": [],
  "cidrs": [],
  "continents": [],
  "countries": [],
  "datacenters": [],
  "reported": [
    "string"
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-different-public-allowlists-where-the-ip-address-was-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AclListCollectionOutput](#schemaacllistcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the set of owned allowlists.

<a id="opIdget_public_allowlists_owned_by_the_user_v1_allowlist_public_owned_get"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/public/owned \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/allowlist/public/owned`

### What
Obtain the set of public allow lists available in the service selected by the user.

### Parameters
No parameters

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to the status of all the lists.
- ``lists``: a list of JSON objects with the available lists:
    - ``self``: the URI to individual information of the list.
    - ``name``: A human readable name of the list.
    - ``description``: A long detailed information about what the list contains and how it is used.
    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
    - ``created_at``: Unix timestamp in seconds when the list was created.
    - ``updated_at``: Unix timestamp in seconds when the list was updated.
    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
    - ``origins``: list of websites that are using the list as an allowlist.
        - ``self``: the URI to all the list of origins.
        - ``lists``: list of lists that the origin is using.
            - ``self``: the URI to the individual information of the list.
            - ``origin``: the protocol and domain of the website that is using the list.
            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.
            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
            - ``created_at``: Unix timestamp in seconds when the list was created.
            - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "created_at": 0,
      "description": "string",
      "list_type": "UNKNOWN",
      "name": "string",
      "origins": {
        "lists": [
          {
            "created_at": 0,
            "origin": "string",
            "self": "string",
            "status": "INACTIVE",
            "updated_at": 0
          }
        ],
        "self": "string"
      },
      "resource_type": "UNKNOWN",
      "self": "string",
      "status": "INACTIVE",
      "tags": [
        "string"
      ],
      "ttl": 0,
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

<h3 id="get-the-set-of-owned-allowlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PublicAclGroupListCollectionOutput](#schemapublicaclgrouplistcollectionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the set of public allowlists of a user by resource type.

<a id="opIdget_all_owned_allowlists_by_resource_type_v1_allowlist_public_owned__resource_type__get"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/public/owned/cidr \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/allowlist/public/owned/{resource_type}`

### What
Obtain the set of public allow lists selected by the user and wich ones are not filtering by the resource type.

### Parameters
The ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to the status of all the lists.
- ``lists``: a list of JSON objects with the available lists:
    - ``self``: the URI to individual information of the list.
    - ``name``: A human readable name of the list.
    - ``description``: A long detailed information about what the list contains and how it is used.
    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
    - ``created_at``: Unix timestamp in seconds when the list was created.
    - ``updated_at``: Unix timestamp in seconds when the list was updated.
    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
    - ``origins``: list of websites that are using the list as an allowlist.
        - ``self``: the URI to all the list of origins.
        - ``lists``: list of lists that the origin is using.
            - ``self``: the URI to the individual information of the list.
            - ``origin``: the protocol and domain of the website that is using the list.
            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.
            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
            - ``created_at``: Unix timestamp in seconds when the list was created.
            - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

It will return the API Global errors described in the API description.

<h3 id="get-the-set-of-public-allowlists-of-a-user-by-resource-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_type|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resource_type|cidr|
|resource_type|country|
|resource_type|continent|
|resource_type|as|
|resource_type|datacenter|
|resource_type|useragent|

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "created_at": 0,
      "description": "string",
      "list_type": "UNKNOWN",
      "name": "string",
      "origins": {
        "lists": [
          {
            "created_at": 0,
            "origin": "string",
            "self": "string",
            "status": "INACTIVE",
            "updated_at": 0
          }
        ],
        "self": "string"
      },
      "resource_type": "UNKNOWN",
      "self": "string",
      "status": "INACTIVE",
      "tags": [
        "string"
      ],
      "ttl": 0,
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-set-of-public-allowlists-of-a-user-by-resource-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PublicAclGroupListCollectionOutput](#schemapublicaclgrouplistcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the details of the allowlist.

<a id="opIdget_single_allowlist_v1_allowlist_public__allowlist_id__get"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/public/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/allowlist/public/{allowlist_id}`

### What
Obtain the details of an allow list available in the service.

### Parameters
No parameters

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to individual information of the list.
- ``name``: A human readable name of the list.
- ``description``: A long detailed information about what the list contains and how it is used.
- ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
- ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
- ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``it means that the list is not available anymore if not renewed.
- ``created_at``: Unix timestamp in seconds when the list was created.
- ``updated_at``: Unix timestamp in seconds when the list was updated.

If the list is already selected by the user, the JSON object will also contain the following fields:
    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
    - ``origins``: list of websites that are using the list as an allowlist.
        - ``self``: the URI to all the list of origins.
        - ``lists``: list of lists that the origin is using.
            - ``self``: the URI to the individual information of the list.
            - ``origin``: the protocol and domain of the website that is using the list.
            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.
            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
            - ``created_at``: Unix timestamp in seconds when the list was created.
            - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

If the list does not exist, it will return a 404 error.

It will return the API Global errors described in the API description.

<h3 id="get-the-details-of-the-allowlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowlist_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": 0,
  "description": "string",
  "list_type": "UNKNOWN",
  "name": "string",
  "origins": {
    "lists": [
      {
        "created_at": 0,
        "origin": "string",
        "self": "string",
        "status": "INACTIVE",
        "updated_at": 0
      }
    ],
    "self": "string"
  },
  "resource_type": "UNKNOWN",
  "self": "string",
  "status": "INACTIVE",
  "tags": [
    "string"
  ],
  "ttl": 0,
  "updated_at": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-details-of-the-allowlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PublicAclGroupListOutput](#schemapublicaclgrouplistoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Toogle the status of an allow list.

<a id="opIdchange_status_of_the_allowlist_v1_allowlist_public__allowlist_id__put"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/public/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": "ACTIVE"
  }'
```

`PUT /v1/allowlist/public/{allowlist_id}`

### What
Change the status of an allow list to ``ACTIVE`` or ``INACTIVE``. An ``INACTIVE`` list will not be used by the service. An ``ACTIVE`` list will be used by the service. As an optional parameter it can be provided an ``expiry`` date in seconds since epoch. If not provided, the list will never expire.

 This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.

### Parameters
In the query string the ID of the allow list to change the status.
In the body the JSON object with the following fields:
- ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE``.
- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.

### Result
It should always return a 202 Accepted response with an empty body.

### Errors

If the list does not exist, it will return a 404 error.
If the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.
If the expiry is not a valid timestamp, it will return a 422 error.
If the allow list is not a valid UUID, it will return a 422 error.

It will return the API Global errors described in the API description.

> Body parameter

```json
{
  "status": "ACTIVE"
}
```

<h3 id="toogle-the-status-of-an-allow-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowlist_id|path|string(uuid)|true|none|
|body|body|[Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__put](#schemabody_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__put)|true|none|
|» status|body|string|true|The status of the list. ACTIVE or INACTIVE|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE|
|» status|INACTIVE|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="toogle-the-status-of-an-allow-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Delete all the bindings between a user and an allowlist.

<a id="opIddelete_the_allowlist_v1_allowlist_public__allowlist_id__delete"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/public/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/allowlist/public/{allowlist_id}`

### What
Delete all the bindings between a user and an allowlist. This will remove the allowlist from the user and also all the origins that are using the allowlist.

 This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.

### Parameters
In the query string the ID of the allow list to change the status.

### Result
It should always return a 202 Accepted response with an empty body.

### Errors

If the list does not exist, it will return a 404 error.
If the allow list is not a valid UUID, it will return a 422 error.

It will return the API Global errors described in the API description.

<h3 id="delete-all-the-bindings-between-a-user-and-an-allowlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowlist_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-all-the-bindings-between-a-user-and-an-allowlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Toogle the status of the origin in an allow list.

<a id="opIdchange_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_put"></a>

> Code samples

```bash
curl https://example.com/v1/allowlist/public/497f6eca-6276-4993-bfeb-53cbbbba6f08/origin \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "origin": "http://example.com",
    "status": "ACTIVE"
  }'
```

`PUT /v1/allowlist/public/{allowlist_id}/origin`

### What
Change the status of the origin of an allow list to ``ACTIVE``, ``INACTIVE`` or ``DELETED``.

An ``ACTIVE`` origin will apply the allow list to the protocol and domain of the origin. An origin can be created and activated simply toogling the ``ACTIVE`` status. As an optional parameter it can be provided an ``ttl`` or Time To Live parameter of the origin in the list in seconds. After the TTL expires, the origin will be removed from the list.  If the TTL is not provided, the origin will never expire.

An ``INACTIVE`` origin will not apply the allow list to the protocol and domain of the origin.

A ``DELETED`` origin will be removed from the list. It will not be used by the service anymore. The user can activate it again with the ``ACTIVE`` status.

This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.

*This operation is not available in the Freemium plan.*

### Parameters
In the query string the ID of the allow list to change the status.
In the body the JSON object with the following fields:
- ``origin``: The protocol and domain of the origin. It can be ``http://example.com`` or ``https://example.com``.
- ``status``: The status of the list. It can be ``ACTIVE``, ``INACTIVE`` or ``DELETED``.

### Result
It should always return a 202 Accepted response with an empty body.

### Errors

If the list does not exist, it will return a 404 error.
If the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.
If the TTL is negative in the past, it will return a 422 error.
If the allow list is not a valid UUID, it will return a 422 error.
If the origin is not a valid URL, it will return a 400 error.
If the allowlist is not active, it will returna 409 error.
If the origin is not found in the set owned by the user, it will return a 404 error.

It will return the API Global errors described in the API description.

> Body parameter

```json
{
  "origin": "http://example.com",
  "status": "ACTIVE"
}
```

<h3 id="toogle-the-status-of-the-origin-in-an-allow-list-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allowlist_id|path|string(uuid)|true|none|
|body|body|[Body_change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_put](#schemabody_change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_put)|true|none|
|» origin|body|string(uri)|true|The protocol and domain of the origin to change the status|
|» status|body|string|true|The status of the list. ACTIVE, INACTIVE, DELETED|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE|
|» status|INACTIVE|
|» status|DELETED|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="toogle-the-status-of-the-origin-in-an-allow-list-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

<h1 id="threatjammercom-user-api-autonomous-systems-information">Autonomous Systems information</h1>

## Get the IPv4 or IPv6 prefix of the IP address given.

<a id="opIdquery_IP_address_network_information_v1_asn_ip__ip_address__get"></a>

> Code samples

```bash
curl https://example.com/v1/asn/ip/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/asn/ip/{ip_address}`

### What
Obtain the IPv4 or IPv6 prefix and the Autonomous System information of the IP address passed as a parameter.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``ip_address``: (Mandatory) The IPv4 or IPv6 address to be queried.

### Result
The result is a JSON object with the following structure:
- ``self``: the URI to individual IPv4 prefix.
- ``asn``: the URI to query the full details of the ASN.
- ``object_type``: the type of the prefix. The allowed values are: IPv4 or IPv6.
- ``maintainer``: the information about the maintainer of this prefix in the registry.
- ``description``: the description of the prefix as registered in the registry.
- ``registry_date``: the date of registration of the prefix in the registry. The format is YYYY-MM-DD.
- ``registry_status``: the URI of the status of the prefix as stored in the registry.
- ``score``: The risk score of the prefix. It ranges from 0 to 99.
- ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.

### Errors
The endpoint will return the following errors:
- a `404 Not Found` error if the prefix information was not found.
- a `422 Unprocessable Entity` error if the IP address is malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-the-ipv4-or-ipv6-prefix-of-the-ip-address-given-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip_address|path|string(ipvanyaddress)|true|none|

> Example responses

> 200 Response

```json
{
  "asn": "string",
  "description": "string",
  "mantainer": "string",
  "object_type": "string",
  "registry_date": "string",
  "registry_status": "string",
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-ipv4-or-ipv6-prefix-of-the-ip-address-given-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AutonomousSystemPrefixOutput](#schemaautonomoussystemprefixoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the IPv4 or IPv6 prefix of the CIDR given.

<a id="opIdquery_asn_prefix_information_v1_asn_prefix_post"></a>

> Code samples

```bash
curl https://example.com/v1/asn/prefix \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "prefix": "string"
  }'
```

`POST /v1/asn/prefix`

### What
Obtain the IPv4 or IPv6 prefix and the Autonomous System information of the CIDR passed in the body as a POST method. This endpoint works around the problem of passing '/' addresses in the URI.

### Parameters
The endpoint accepts only the following parameter in the body as a JSON object:
- ``prefix``: (Mandatory) The CIDR v4 or v6 to be queried.

### Result
The result is a JSON object with the following structure:
- ``self``: the URI to individual IPv4 prefix.
- ``asn``: the URI to query the full details of the ASN.
- ``object_type``: the type of the prefix. The allowed values are: IPv4 or IPv6.
- ``maintainer``: the information about the maintainer of this prefix in the registry.
- ``description``: the description of the prefix as registered in the registry.
- ``registry_date``: the date of registration of the prefix in the registry. The format is YYYY-MM-DD.
- ``registry_status``: the URI of the status of the prefix as stored in the registry.
- ``score``: The risk score of the prefix. It ranges from 0 to 99.
- ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.

### Errors
The endpoint will return the following errors:
- a `404 Not Found` error if the prefix information was not found.
- a `422 Unprocessable Entity` error if the CIDR is malformed.

It will also return the API Global errors described in the API description.

> Body parameter

```json
{
  "prefix": "string"
}
```

<h3 id="get-the-ipv4-or-ipv6-prefix-of-the-cidr-given-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Body_query_asn_prefix_information_v1_asn_prefix_post](#schemabody_query_asn_prefix_information_v1_asn_prefix_post)|true|none|
|» prefix|body|string(ipvanynetwork)|true|none|

> Example responses

> 200 Response

```json
{
  "asn": "string",
  "description": "string",
  "mantainer": "string",
  "object_type": "string",
  "registry_date": "string",
  "registry_status": "string",
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-ipv4-or-ipv6-prefix-of-the-cidr-given-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AutonomousSystemPrefixOutput](#schemaautonomoussystemprefixoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the list of the Regional Internet Registries (RIRs) entities worldwide.

<a id="opIdquery_registry_names_v1_asn_registry_all_get"></a>

> Code samples

```bash
curl https://example.com/v1/asn/registry/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/asn/registry/all`

### What
Obtain the list of Regional Internet Registries (RIRs) entities worldwide.

### Parameters
No parameters are required.

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to individual RIR.
- ``name``: the RIR name.
- ``code``: the internal code of the RIR in the system. Possible values are: iana, arin, ripencc, afrinic, apnic, lacnic.

### Errors
It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
[
  {
    "code": "string",
    "name": "string",
    "self": "string"
  }
]
```

<h3 id="get-the-list-of-the-regional-internet-registries-rirs-entities-worldwide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<h3 id="get-the-list-of-the-regional-internet-registries-rirs-entities-worldwide-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AutonomousSystemRegistryOutput](#schemaautonomoussystemregistryoutput)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the information of a Regional Internet Registries (RIRs) given.

<a id="opIdquery_registry_by_the_name_v1_asn_registry__code__get"></a>

> Code samples

```bash
curl https://example.com/v1/asn/registry/iana \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/asn/registry/{code}`

### What
Obtain the information about the Regional Internet Registries (RIRs) given as a parameter.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``code``: (Mandatory) The code that identifies uniquely the RIR. Possible values are: iana, arin, ripencc, afrinic, apnic, lacnic.

### Result
The result is a JSON object with the following structure:
- ``self``: the URI to individual RIR.
- ``name``: the RIR name.
- ``code``: the internal code of the RIR in the system.

### Errors
- a `422 Unprocessable Entity` error if the code is not one of the available.

It will also return the API Global errors described in the API description.

<h3 id="get-the-information-of-a-regional-internet-registries-rirs-given-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|code|iana|
|code|arin|
|code|ripencc|
|code|afrinic|
|code|apnic|
|code|lacnic|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "name": "string",
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-information-of-a-regional-internet-registries-rirs-given-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AutonomousSystemRegistryOutput](#schemaautonomoussystemregistryoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the list of status of an object in a registry.

<a id="opIdquery_status_names_v1_asn_status_all_get"></a>

> Code samples

```bash
curl https://example.com/v1/asn/status/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/asn/status/all`

### What
Obtain the list of status of an object can be in a registry.

### Parameters
No parameters are required.

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to individual status.
- ``name``: the code name.
- ``code``: the internal code of the status in the system. Possible values are: assigned, reserved, allocated, available.

### Errors
It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
[
  {
    "code": "string",
    "name": "string",
    "self": "string"
  }
]
```

<h3 id="get-the-list-of-status-of-an-object-in-a-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<h3 id="get-the-list-of-status-of-an-object-in-a-registry-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AutonomousSystemStatusOutput](#schemaautonomoussystemstatusoutput)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the information of a status given.

<a id="opIdquery_status_by_the_name_v1_asn_status__code__get"></a>

> Code samples

```bash
curl https://example.com/v1/asn/status/assigned \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/asn/status/{code}`

### What
Obtain the information about the status of an object in the registry as a parameter.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``code``: (Mandatory) The code that identifies uniquely the status in the registry. Possible values are: assigned, reserved, allocated, available.


### Result
The result is a JSON object with the following structure:
- ``self``: the URI to individual status.
- ``name``: the human readable name of the status.
- ``code``: the internal code of the status in the system.

### Errors
- a `422 Unprocessable Entity` error if the code is not one of the available.

It will also return the API Global errors described in the API description.

<h3 id="get-the-information-of-a-status-given-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|code|assigned|
|code|reserved|
|code|available|
|code|allocated|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "name": "string",
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-information-of-a-status-given-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AutonomousSystemStatusOutput](#schemaautonomoussystemstatusoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the Autonomous System details of the AS number given.

<a id="opIdquery_asn_v1_asn__number__get"></a>

> Code samples

```bash
curl https://example.com/v1/asn/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/asn/{number}`

### What
Obtain the full details of the Autonomous System Number (ASN) passed as a parameter.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``number``: (Mandatory) The ASN number to be queried.

### Result
The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``name``: the name of the Autonomous System as registered in the registries databases.
- ``description``: the description of the Autonomous System as registered in the registries databases.
- ``country_code``: the ISO 3166-1 alpha-2 country code of the Autonomous System.
- ``registry_date``: the date of registration of the Autonomous System in the registry. The format is YYYY-MM-DD.
- ``registry``: the URI of the registry where the Autonomous System is registered.
- ``status``: the status of the Autonomous System as stored in the registry.
- ``prefixes``: the URI to the list of prefixes that belong to the Autonomous System.
- ``score``: The risk score of the Autonomous System. It ranges from 0 to 99.
- ``risk``: The risk of the Autonomous System. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.


### Errors
The endpoint will return the following errors:
- a `404 Not Found` error if the AS was not found.
- a `422 Unprocessable Entity` error if the AS number is malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-the-autonomous-system-details-of-the-as-number-given-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "country_code": "AF",
  "description": "string",
  "name": "string",
  "prefixes": "string",
  "registry": "string",
  "registry_date": "string",
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string",
  "status": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-autonomous-system-details-of-the-as-number-given-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AutonomousSystemOutput](#schemaautonomoussystemoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the list of IPv4 and IPv6 prefixes of the AS number given.

<a id="opIdquery_asn_prefixes_list_v1_asn__number__prefixes_get"></a>

> Code samples

```bash
curl https://example.com/v1/asn/0/prefixes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/asn/{number}/prefixes`

### What
Obtain the full list of IPv4 and IPv6 prefixes of the Autonomous System Number (ASN) passed as a parameter.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``number``: (Mandatory) The ASN number to be queried.

### Result
The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``asn``: the URI to query the full details of the ASN.
- ``prefixes_v4``: the list of IPv4 prefixes that belong to the ASN. Each element of the list is a JSON object with the following structure:
    - ``self``: the URI to individual IPv4 prefix.
    - ``asn``: the URI to query the full details of the ASN.
    - ``object_type``: the type of the prefix. The allowed values are: IPv4.
    - ``maintainer``: the information about the maintainer of this prefix in the registry.
    - ``description``: the description of the prefix as registered in the registry.
    - ``registry_date``: the date of registration of the prefix in the registry. The format is YYYY-MM-DD.
    - ``registry_status``: the URI of the status of the prefix as stored in the registry.
    - ``score``: The risk score of the prefix. It ranges from 0 to 99.
    - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
- ``prefixes_v6``: the list of IPv6 prefixes that belong to the ASN. Each element of the list is a JSON object with the following structure:
    - ``self``: the URI to individual IPv6 prefix.
    - ``asn``: the URI to query the full details of the ASN.
    - ``object_type``: the type of the prefix. The allowed values are: IPv6.
    - ``maintainer``: the information about the maintainer of this prefix in the registry.
    - ``description``: the description of the prefix as registered in the registry.
    - ``registry_date``: the date of registration of the prefix in the registry. The format is YYYY-MM-DD.
    - ``registry_status``: the URI of the status of the prefix as stored in the registry.
    - ``score``: The risk score of the prefix. It ranges from 0 to 99.
    - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.

### Errors
The endpoint will return the following errors:
- a `404 Not Found` error if the AS was not found.
- a `422 Unprocessable Entity` error if the AS number is malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-the-list-of-ipv4-and-ipv6-prefixes-of-the-as-number-given-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "asn": "string",
  "prefixes_v4": [
    {
      "asn": "string",
      "description": "string",
      "mantainer": "string",
      "object_type": "string",
      "registry_date": "string",
      "registry_status": "string",
      "risk": "UNKNOWN",
      "score": 0,
      "self": "string"
    }
  ],
  "prefixes_v6": [
    {
      "asn": "string",
      "description": "string",
      "mantainer": "string",
      "object_type": "string",
      "registry_date": "string",
      "registry_status": "string",
      "risk": "UNKNOWN",
      "score": 0,
      "self": "string"
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-list-of-ipv4-and-ipv6-prefixes-of-the-as-number-given-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AutonomousSystemPrefixesOutput](#schemaautonomoussystemprefixesoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

<h1 id="threatjammercom-user-api-data-assessment">Data assessment</h1>

## Get the risk score of all IP address passed in the body and other data signals.

<a id="opIdassess_ip_set_v1_assess_ip_post"></a>

> Code samples

```bash
curl https://example.com/v1/assess/ip \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`POST /v1/assess/ip`

### What
Obtain a numerical score and a risk assessment of all the IP addresses passed as argument.

### Parameters
A list of public IPv4 or IPv6 addresses is required in the body of the request.

### Result
The result contains a list of the result for each IP address, with two main sets of data:
- The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.

- The list of information gathered from the IP address to obtain the score.

The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``score``: The score of the IP address. It ranges from 0 to 99.
- ``risk``: The risk of the IP address. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
- ``reason``: It's a human readable representation of the reason of the risk.
- ``datasets``: The IP address was found in the these lists of datasets used to obtain the risk score. Datasets are described as a list of URIs.
- ``sources``: The IP address was found in the these source lists at an specific time with a specific risk score. Sources are described as a list of URIs.
- ``log``: The activity of the IP address in the different datasets used to obtain the risk score. The log is a URI reference.
- ``asn``: The information about the Autonomous System (AS) of the IP address. The AS is described as an URI.
- ``asn_prefix``: The information about the Autonomous System (AS) network prefix of the IP address. The prefix is described as an URI.
- ``datacenter``: If the IP address is part of a datacenter pool, the information about the datacenter is described as an URI.
- ``datacenter_prefix``: The information about the Datacenter network prefix of the IP address. The `asn_prefix` and `datacenter_prefix` can be the same, but it is not mandatory. The prefix is described as an URI.
- ``denylisted``: If the IP address was denylisted by the user, the information about the denylisted IP address is described as an URI.
- ``first_appearence``: URI to the first appearance of the IP address in the different datasets used to obtain the risk score.
- ``last_appearence``: URI to the last appearance of the IP address in the different datasets used to obtain the risk score.

### Errors
The endpoint will return the following errors:
- a `422 Unprocessable Entity` error if the IP address is malformed.

The private IP addresses will be ignored, if any.

It will also return the API Global errors described in the API description.

> Body parameter

```json
[
  "string"
]
```

<h3 id="get-the-risk-score-of-all-ip-address-passed-in-the-body-and-other-data-signals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string(ipvanyaddress)]|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "allowlisted": "string",
      "asn": "string",
      "asn_prefix": "string",
      "datacenter": "string",
      "datacenter_prefix": "string",
      "datasets": [
        "string"
      ],
      "denylisted": "string",
      "first_appearance": [
        "string"
      ],
      "last_appearance": [
        "string"
      ],
      "reason": "string",
      "risk": "UNKNOWN",
      "score": 0,
      "self": "string",
      "sources": [
        "string"
      ]
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-risk-score-of-all-ip-address-passed-in-the-body-and-other-data-signals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The server will return a valid answer in the following cases:|[IPAssessmentCollectionOutput](#schemaipassessmentcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the risk score of all IP address uploaded and other data signals.

<a id="opIdassess_ip_set_csv_v1_assess_ip_csv_post"></a>

> Code samples

```bash
curl https://example.com/v1/assess/ip/csv \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'csv_file=@/path/to/file'
```

`POST /v1/assess/ip/csv`

### What
Obtain a numerical score and a risk assessment of all the IP addresses uploaded with a text file.

### Parameters
- A text file with a list of public IPv4 or IPv6 addresses.
- A header `Content-Type: multipart/form-data` is required.
- (optional) in the query string the parameeter `strict_parse`: If set to `true`, no malformed IP addresses allowed, returning an error. If set to `false`, malformed IP addresses will be ignored.

Example:
```
curl -X 'POST' \
  'https://dublin.api.threatjammer.com/v1/asses/ip/csv[?strict_parse=true|false]' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: multipart/form-data' \
  -F 'csv_file=@YOUR_TEXT_FILE;type=text/csv'
```

### Result
The result contains a list of the result for each IP address, with two main sets of data:
- The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.

- The list of information gathered from the IP address to obtain the score.

The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``score``: The score of the IP address. It ranges from 0 to 99.
- ``risk``: The risk of the IP address. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
- ``reason``: It's a human readable representation of the reason of the risk.
- ``datasets``: The IP address was found in the these lists of datasets used to obtain the risk score. Datasets are described as a list of URIs.
- ``sources``: The IP address was found in the these source lists at an specific time with a specific risk score. Sources are described as a list of URIs.
- ``log``: The activity of the IP address in the different datasets used to obtain the risk score. The log is a URI reference.
- ``asn``: The information about the Autonomous System (AS) of the IP address. The AS is described as an URI.
- ``asn_prefix``: The information about the Autonomous System (AS) network prefix of the IP address. The prefix is described as an URI.
- ``datacenter``: If the IP address is part of a datacenter pool, the information about the datacenter is described as an URI.
- ``datacenter_prefix``: The information about the Datacenter network prefix of the IP address. The `asn_prefix` and `datacenter_prefix` can be the same, but it is not mandatory. The prefix is described as an URI.
- ``denylisted``: If the IP address was denylisted by the user, the information about the denylisted IP address is described as an URI.
- ``first_appearence``: URI to the first appearance of the IP address in the different datasets used to obtain the risk score.
- ``last_appearence``: URI to the last appearance of the IP address in the different datasets used to obtain the risk score.

### Errors
The endpoint will return the following errors:
- a `422 Unprocessable Entity` error if the IP address is malformed.

The private IP addresses will be ignored, if any.

When the `strict_parse` parameter is set to `true`, the endpoint will return the following errors:
- a `400 Bad Request`.

It will also return the API Global errors described in the API description.

> Body parameter

```yaml
csv_file: string
```

<h3 id="get-the-risk-score-of-all-ip-address-uploaded-and-other-data-signals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|strict_parse|query|boolean|false|When `true`, if any IP address entry in the file is malformed, the assessment is canceled. If `false`, the malformed IP addresses are ignored. Default is `false`.|
|body|body|[Body_assess_ip_set_csv_v1_assess_ip_csv_post](#schemabody_assess_ip_set_csv_v1_assess_ip_csv_post)|true|none|
|» csv_file|body|string(binary)|true|The CSV file with the IP addresses|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "allowlisted": "string",
      "asn": "string",
      "asn_prefix": "string",
      "datacenter": "string",
      "datacenter_prefix": "string",
      "datasets": [
        "string"
      ],
      "denylisted": "string",
      "first_appearance": [
        "string"
      ],
      "last_appearance": [
        "string"
      ],
      "reason": "string",
      "risk": "UNKNOWN",
      "score": 0,
      "self": "string",
      "sources": [
        "string"
      ]
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-risk-score-of-all-ip-address-uploaded-and-other-data-signals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The server will return a valid answer in the following cases:|[IPAssessmentCollectionOutput](#schemaipassessmentcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get a risk score of the IP address and different data signals.

<a id="opIdassess_ip_v1_assess_ip__ip_address__get"></a>

> Code samples

```bash
curl https://example.com/v1/assess/ip/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/assess/ip/{ip_address}`

### What
Obtain a numerical score and a risk assessment of the IP address passed as argument.

### Parameters
The only argument accepted in the query string is a public IPv4 or IPv6 addresses.

### Result
The result contains two main sets of data:
- The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.

- The list of information gathered from the IP address to obtain the score.

The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``score``: The score of the IP address. It ranges from 0 to 99.
- ``risk``: The risk of the IP address. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
- ``reason``: It's a human readable representation of the reason of the risk.
- ``datasets``: The IP address was found in the these lists of datasets used to obtain the risk score. Datasets are described as a list of URIs.
- ``sources``: The IP address was found in the these source lists at an specific time with a specific risk score. Sources are described as a list of URIs.
- ``log``: The activity of the IP address in the different datasets used to obtain the risk score. The log is a URI reference.
- ``asn``: The information about the Autonomous System (AS) of the IP address. The AS is described as an URI.
- ``asn_prefix``: The information about the Autonomous System (AS) network prefix of the IP address. The prefix is described as an URI.
- ``datacenter``: If the IP address is part of a datacenter pool, the information about the datacenter is described as an URI.
- ``datacenter_prefix``: The information about the Datacenter network prefix of the IP address. The `asn_prefix` and `datacenter_prefix` can be the same, but it is not mandatory. The prefix is described as an URI.
- ``denylisted``: If the IP address was denylisted by the user, the information about the denylisted IP address is described as an URI.
- ``first_appearence``: URI to the first appearance of the IP address in the different datasets used to obtain the risk score.
- ``last_appearence``: URI to the last appearance of the IP address in the different datasets used to obtain the risk score.

### Errors
The endpoint will return the following errors:
- a `400 Bad Request` error if the IP address is not public.
- a `422 Unprocessable Entity` error if the IP address is malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-a-risk-score-of-the-ip-address-and-different-data-signals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip_address|path|string(ipvanyaddress)|true|none|

> Example responses

> 200 Response

```json
{
  "allowlisted": "string",
  "asn": "string",
  "asn_prefix": "string",
  "datacenter": "string",
  "datacenter_prefix": "string",
  "datasets": [
    "string"
  ],
  "denylisted": "string",
  "first_appearance": [
    "string"
  ],
  "last_appearance": [
    "string"
  ],
  "reason": "string",
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string",
  "sources": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-a-risk-score-of-the-ip-address-and-different-data-signals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The server will return a valid answer in the following cases:|[IPAssessmentOutput](#schemaipassessmentoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

<h1 id="threatjammercom-user-api-datacenter-information">Datacenter information</h1>

## Get the IPv4 or IPv6 prefix of the IP address given.

<a id="opIdquery_IP_address_network_information_v1_datacenter_ip__ip_address__get"></a>

> Code samples

```bash
curl https://example.com/v1/datacenter/ip/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/datacenter/ip/{ip_address}`

### What
Obtain the IPv4 or IPv6 prefix and the Datacenter information of the IP address passed as a parameter.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``ip_address``: (Mandatory) The IPv4 or IPv6 address to be queried.

### Result
- The result is a JSON object with the following structure:
    - ``self``: the URI to individual IPv4 prefix.
    - ``datacenter_id``: the URI to query the full details of the Datacenter.
    - ``score``: The risk score of the prefix. It ranges from 0 to 99.
    - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
    - ``min_score``: The minimum risk score of the prefix. It ranges from 0 to 99.
    - ``max_score``: The maximum risk score of the prefix. It ranges from 0 to 99.
    - ``ip_abuse_total``: The total number of IPs that have been reported as abuse in the range.


### Errors
The endpoint will return the following errors:
- a `404 Not Found` error if the prefix information was not found.
- a `422 Unprocessable Entity` error if the IP address is malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-the-ipv4-or-ipv6-prefix-of-the-ip-address-given-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip_address|path|string(ipvanyaddress)|true|none|

> Example responses

> 200 Response

```json
{
  "datacenter": "string",
  "ip_abuse_total": 0,
  "max_score": 0,
  "min_score": 0,
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-ipv4-or-ipv6-prefix-of-the-ip-address-given-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DatacenterPrefixOutput](#schemadatacenterprefixoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the IPv4 or IPv6 prefix of the CIDR given.

<a id="opIdquery_datacenter_prefix_information_v1_datacenter_prefix_post"></a>

> Code samples

```bash
curl https://example.com/v1/datacenter/prefix \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "prefix": "string"
  }'
```

`POST /v1/datacenter/prefix`

### What
Obtain the IPv4 or IPv6 prefix and the Datacenter information of the CIDR passed in the body as a POST method. This endpoint works around the problem of passing '/' addresses in the URI.

### Parameters
The endpoint accepts only the following parameter in the body as a JSON object:
- ``prefix``: (Mandatory) The CIDR v4 or v6 to be queried.

### Result
- The result is a JSON object with the following structure:
    - ``self``: the URI to individual IPv4 prefix.
    - ``datacenter_id``: the URI to query the full details of the Datacenter.
    - ``score``: The risk score of the prefix. It ranges from 0 to 99.
    - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
    - ``min_score``: The minimum risk score of the prefix. It ranges from 0 to 99.
    - ``max_score``: The maximum risk score of the prefix. It ranges from 0 to 99.
    - ``ip_abuse_total``: The total number of IPs that have been reported as abuse in the range.


### Errors
The endpoint will return the following errors:
- a `404 Not Found` error if the prefix information was not found.
- a `422 Unprocessable Entity` error if the CIDR is malformed.

It will also return the API Global errors described in the API description.

> Body parameter

```json
{
  "prefix": "string"
}
```

<h3 id="get-the-ipv4-or-ipv6-prefix-of-the-cidr-given-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Body_query_datacenter_prefix_information_v1_datacenter_prefix_post](#schemabody_query_datacenter_prefix_information_v1_datacenter_prefix_post)|true|none|
|» prefix|body|string(ipvanynetwork)|true|none|

> Example responses

> 200 Response

```json
{
  "datacenter": "string",
  "ip_abuse_total": 0,
  "max_score": 0,
  "min_score": 0,
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-ipv4-or-ipv6-prefix-of-the-cidr-given-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DatacenterPrefixOutput](#schemadatacenterprefixoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the Datacenter details of datacente given.

<a id="opIdquery_datacenter_v1_datacenter__datacenter_id__get"></a>

> Code samples

```bash
curl https://example.com/v1/datacenter/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/datacenter/{datacenter_id}`

### What
Obtain the details of the Datacenter ID passed as a parameter.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``datacenter_id``: (Mandatory) The internal Datacenter ID to be queried.

### Result
The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``name``: the generic name of the Datacenter. The database takes the name from different sources, so it may be different from the real name.
- ``description``: a full name of the Datacenter. It contains more details about the Datacenter.
- ``source``: website of the company that owns the Datacenter.
- ``asn``: the URI to the ASN of the Datacenter.
- ``status``: the status of the Datacenter. It can be: `enabled` or `disabled`.
- ``prefixes``: the URI to the list of prefixes that belong to the Datacenter.
- ``score``: The risk score of the Datacenter. It ranges from 0 to 99.
- ``risk``: The risk of the Datacenter. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.


### Errors
The endpoint will return the following errors:
- a `404 Not Found` error if the Datacenter was not found.
- a `422 Unprocessable Entity` error if the Datacenter is malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-the-datacenter-details-of-datacente-given-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datacenter_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "asn": "string",
  "description": "string",
  "name": "string",
  "prefixes": "string",
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string",
  "source": "string",
  "status": "enabled"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-datacenter-details-of-datacente-given-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DatacenterOutput](#schemadatacenteroutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the list of IPv4 and IPv6 prefixes of the Datacenter given.

<a id="opIdquery_datacenter_prefixes_list_v1_datacenter__datacenter_id__prefixes_get"></a>

> Code samples

```bash
curl https://example.com/v1/datacenter/string/prefixes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/datacenter/{datacenter_id}/prefixes`

### What
Obtain the full list of IPv4 and IPv6 prefixes of the Datacenter passed as a parameter.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``datacenter_id``: (Mandatory) The internal Datacenter ID to be queried.

### Result
The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``datacenter_id``: the URI to query the full details of the Datacenter.
- ``prefixes_v4``: the list of IPv4 prefixes that belong to the Datacenter. Each element of the list is a JSON object with the following structure:

    - ``self``: the URI to individual IPv4 prefix.
    - ``datacenter_id``: the URI to query the full details of the Datacenter.
    - ``score``: The risk score of the prefix. It ranges from 0 to 99.
    - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
    - ``min_score``: The minimum risk score of the prefix. It ranges from 0 to 99.
    - ``max_score``: The maximum risk score of the prefix. It ranges from 0 to 99.
    - ``ip_abuse_total``: The total number of IPs that have been reported as abuse in the range.

- ``prefixes_v6``: the list of IPv6 prefixes that belong to the Datacenter. Each element of the list is a JSON object with the following structure:

    - ``self``: the URI to individual IPv4 prefix.
    - ``datacenter_id``: the URI to query the full details of the Datacenter.
    - ``score``: The risk score of the prefix. It ranges from 0 to 99.
    - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
    - ``min_score``: The minimum risk score of the prefix. It ranges from 0 to 99.
    - ``max_score``: The maximum risk score of the prefix. It ranges from 0 to 99.
    - ``ip_abuse_total``: The total number of IPs that have been reported as abuse in the range.


### Errors
The endpoint will return the following errors:
- a `404 Not Found` error if the Datacenter was not found.
- a `422 Unprocessable Entity` error if the Datacenter number is malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-the-list-of-ipv4-and-ipv6-prefixes-of-the-datacenter-given-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datacenter_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "prefixes_v4": [
    {
      "datacenter": "string",
      "ip_abuse_total": 0,
      "max_score": 0,
      "min_score": 0,
      "risk": "UNKNOWN",
      "score": 0,
      "self": "string"
    }
  ],
  "prefixes_v6": [
    {
      "datacenter": "string",
      "ip_abuse_total": 0,
      "max_score": 0,
      "min_score": 0,
      "risk": "UNKNOWN",
      "score": 0,
      "self": "string"
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-list-of-ipv4-and-ipv6-prefixes-of-the-datacenter-given-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DatacenterPrefixesOutput](#schemadatacenterprefixesoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

<h1 id="threatjammercom-user-api-platform-datasets">Platform datasets</h1>

## Get the list of all the datasets available in the platform.

<a id="opIdquery_datataset_information_of_all_the_resource_types_v1_dataset_ip_get"></a>

> Code samples

```bash
curl https://example.com/v1/dataset/ip \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/dataset/ip`

### What
Obtain the list of all the datasets available in the platform. A dataset is a collection of different data sources that are related to a specific topic. The name of the dataset describes the specific topic.

### Parameters
No parameters are required.

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to individual status.
- ``types``: a list of JSON objects with the following fields:
    - ``self``: the URI to individual dataset information.
    - ``type``: what type of dataset is this. The only allowed value is ``ip``.
    - ``name``: the name of the dataset in human readable form.
    - ``description``: a human readable long description of the dataset.
    - ``status``: the status of the dataset. The only allowed value is ``ENABLED``.
    - ``items``: the number of 'live' items in the dataset when the request is performed.

### Errors
It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
{
  "self": "string",
  "types": [
    {
      "description": "string",
      "items": 0,
      "name": "string",
      "self": "string",
      "status": "ENABLED",
      "type": "ip"
    }
  ]
}
```

<h3 id="get-the-list-of-all-the-datasets-available-in-the-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DatasetTypeCollectionOutput](#schemadatasettypecollectionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the detailed information of the dataset queried.

<a id="opIdquery_datataset_information_of_the_resource_type_v1_dataset_ip__name__get"></a>

> Code samples

```bash
curl https://example.com/v1/dataset/ip/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/dataset/ip/{name}`

### What
Get the detailed information of the dataset queried by the name. A dataset is a collection of different data sources that are related to a specific topic. The name of the dataset describes the specific topic.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``name``: (Mandatory) The code name that identifies uniquely the dataset in the platform. It must be composed of uppercase letters, numbers and underscores.

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to individual dataset information.
- ``type``: what type of dataset is this. The only allowed value is ``ip``.
- ``name``: the name of the dataset in human readable form.
- ``description``: a human readable long description of the dataset.
- ``status``: the status of the dataset. The only allowed value is ``ENABLED``.
- ``items``: the number of 'live' items in the dataset when the request is performed.

### Errors
- a `404 Not Found` error if the dataset code name was not found.
- a `422 Unprocessable Entity` error if dataset code name does not follow the naming convention.

It will also return the API Global errors described in the API description.

<h3 id="get-the-detailed-information-of-the-dataset-queried-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "items": 0,
  "name": "string",
  "self": "string",
  "status": "ENABLED",
  "type": "ip"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-detailed-information-of-the-dataset-queried-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DatasetTypeOutput](#schemadatasettypeoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

<h1 id="threatjammercom-user-api-denylist-data-query-and-management">Denylist data query and management</h1>

## Creates a new private denylist binded to the user.

<a id="opIdcreate_private_denylist_of_the_user_v1_denylist_private_post"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/private \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payload": {
      "description": "string",
      "name": "string",
      "resource_type": "UNKNOWN",
      "tags": [
        "string"
      ],
      "ttl": 0
    }
  }'
```

`POST /v1/denylist/private`

### What
Creates a new denylist with the information given and binded to the current user. The parameters are:
 - name
 - description
 - tags
 - expiry
 - Time to Live (TTL)
 - Resource Type (`CIDR`, `AS`, `COUNTRY`, `CONTINENT`, `DATACENTER_ID` and `USER AGENT`)

This is an asynchronous operation. It can take several seconds until the operation completes, but the request will immediately return a 202 Accepted response. The operation will also return the UUID of the list.

### Parameters
In the query string the ID of the private deny list to delete.

In the body the following parameters:
- ``name``: A human readable name of the list.
- ``description``: A long detailed information about what the list contains and how it is used.
- ``tags``: A list of tags that describe the list.
- ``ttl``: (Optional) The Time To Live of the list, in seconds. If it does not exist, it will never expire.
- ``resource_type``: The type of resource that the list contains. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT``,    ``DATACENTER_ID`` or ``USER AGENT``.

### Result
It should always return a 202 Accepted response with the UUID of the new list in the body.

### Errors

- If the information is not valid, it will return a `422` (Unprocessable Entity) error.
- If the ttl is negative, it will return a `400` (Bad Request) error.

It will return the API Global errors described in the API description.

> Body parameter

```json
{
  "payload": {
    "description": "string",
    "name": "string",
    "resource_type": "UNKNOWN",
    "tags": [
      "string"
    ],
    "ttl": 0
  }
}
```

<h3 id="creates-a-new-private-denylist-binded-to-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Body_create_private_denylist_of_the_user_v1_denylist_private_post](#schemabody_create_private_denylist_of_the_user_v1_denylist_private_post)|true|none|
|» payload|body|object|true|The information needed to create a new denylist|
|» » description|body|string|true|none|
|» » name|body|string|true|none|
|» » resource_type|body|string|true|none|
|» » tags|body|[string]|true|none|
|» » ttl|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » resource_type|UNKNOWN|
|» » resource_type|CIDR|
|» » resource_type|COUNTRY|
|» » resource_type|CONTINENT|
|» » resource_type|AS|
|» » resource_type|DATACENTER|
|» » resource_type|USERAGENT|

> Example responses

> 200 Response

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="creates-a-new-private-denylist-binded-to-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the set of private denylists of the user.

<a id="opIdget_all_private_denylists_v1_denylist_private_all_get"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/private/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/denylist/private/all`

### What
Obtain the set of private deny lists of the user available in the service. These lists are different datasets:
- Lists that are part of the automatically reported data from the Report IP, focused on honeypots and automaticreporting from external sources. The name is `External sources reported CIDRs`.
- Lists that are part of the automatically denylisted by the Threat Jammer service. The name is `Default denylist`.
- Lists that are created by the user.

### Parameters
No parameters

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to the status of all the lists.
- ``lists``: a list of JSON objects with the available lists:
    - ``self``: the URI to individual information of the list.
    - ``name``: A human readable name of the list.
    - ``description``: A long detailed information about what the list contains and how it is used.
    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
    - ``created_at``: Unix timestamp in seconds when the list was created.
    - ``updated_at``: Unix timestamp in seconds when the list was updated.
    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
    - ``origins``: list of websites that are using the list as a denylist.
        - ``self``: the URI to all the list of origins.
        - ``lists``: list of lists that the origin is using.
            - ``self``: the URI to the individual information of the list.
            - ``origin``: the protocol and domain of the website that is using the list.
            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.
            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
            - ``created_at``: Unix timestamp in seconds when the list was created.
            - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "content": "string",
      "created_at": 0,
      "description": "string",
      "list_type": "UNKNOWN",
      "name": "string",
      "origins": {
        "lists": [
          {
            "created_at": 0,
            "origin": "string",
            "self": "string",
            "status": "INACTIVE",
            "updated_at": 0
          }
        ],
        "self": "string"
      },
      "resource_type": "UNKNOWN",
      "self": "string",
      "tags": [
        "string"
      ],
      "ttl": 0,
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

<h3 id="get-the-set-of-private-denylists-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PrivateAclGroupListCollectionOutput](#schemaprivateaclgrouplistcollectionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the set of private denylists of the user by resource type.

<a id="opIdget_all_private_denylists_by_resource_type_v1_denylist_private_all__resource_type__get"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/private/all/cidr \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/denylist/private/all/{resource_type}`

### What
Obtain the set of private deny lists of the user available in the service filtering by resource type. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``

 These lists are different datasets:
- Lists that are part of the automatically reported data from the Report IP, focused on honeypots and automaticreporting from external sources. The name is `External sources reported CIDRs`. The resource type is ``CIDR``.
- Lists that are part of the automatically denylisted by the Threat Jammer service. The name is `Default denylist`. The resource type is ``CIDR``.
- Lists that are created by the user.

### Parameters
The ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to the status of all the lists.
- ``lists``: a list of JSON objects with the available lists:
    - ``self``: the URI to individual information of the list.
    - ``name``: A human readable name of the list.
    - ``description``: A long detailed information about what the list contains and how it is used.
    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
    - ``created_at``: Unix timestamp in seconds when the list was created.
    - ``updated_at``: Unix timestamp in seconds when the list was updated.
    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
    - ``origins``: list of websites that are using the list as a denylist.
        - ``self``: the URI to all the list of origins.
        - ``lists``: list of lists that the origin is using.
            - ``self``: the URI to the individual information of the list.
            - ``origin``: the protocol and domain of the website that is using the list.
            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.
            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
            - ``created_at``: Unix timestamp in seconds when the list was created.
            - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

- If the resource type is not valid, it will return a ``422`` (Unprocessable Entity) error.

It will also return the API Global errors described in the API description.

<h3 id="get-the-set-of-private-denylists-of-the-user-by-resource-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_type|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resource_type|cidr|
|resource_type|country|
|resource_type|continent|
|resource_type|as|
|resource_type|datacenter|
|resource_type|useragent|

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "content": "string",
      "created_at": 0,
      "description": "string",
      "list_type": "UNKNOWN",
      "name": "string",
      "origins": {
        "lists": [
          {
            "created_at": 0,
            "origin": "string",
            "self": "string",
            "status": "INACTIVE",
            "updated_at": 0
          }
        ],
        "self": "string"
      },
      "resource_type": "UNKNOWN",
      "self": "string",
      "tags": [
        "string"
      ],
      "ttl": 0,
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-set-of-private-denylists-of-the-user-by-resource-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PrivateAclGroupListCollectionOutput](#schemaprivateaclgrouplistcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the different denylists where the IP address was found.

<a id="opIdquery_resource_denylists_v1_denylist_private_ip__address__get"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/private/ip/192.0.2.1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/denylist/private/ip/{address}`

### What
Obtain the list of all the different denylists where the IP address entered by the user. The denylisted forbidden datasets are the ones submitted manually by the user from files or indidual items.

### Parameters
The endpoint accepts the `address` parameter as query string.

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to individual status.
- ``cidrs``: the URI of the lists of CIDRs where the IP was found.
- ``country``: the URIs where the lists of countries where the IP address was found
- ``continent``: the URI where the continent where the IP address was found.
- ``asn``: the URIs where the list of continents of the ASN where the IP address was found.
- ``datacenter``: the URIs of the lists of datacenters where the IP address was found. If not found, the result is an empty string.
- ``reported``: the URI of the information of the IP address reported by the user.

### Errors
- a `422 Unprocessable Entity` error if the IP address was malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-the-different-denylists-where-the-ip-address-was-found-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string(ipv4) \| string(ipv6)|true|none|

> Example responses

> 200 Response

```json
{
  "asns": [],
  "cidrs": [],
  "continents": [],
  "countries": [],
  "datacenters": [],
  "reported": [
    "string"
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-different-denylists-where-the-ip-address-was-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AclListCollectionOutput](#schemaacllistcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the details of a specific private denylist of the user.

<a id="opIdget_single_denylist_v1_denylist_private__denylist_id__get"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/private/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/denylist/private/{denylist_id}`

### What
Obtain the details of the private deny list of the user available in the service.

### Parameters
Pass the private denylist ID as query parameter.

### Result
The result is a JSON object with the following structure:
- ``self``: the URI to individual information of the list.
- ``name``: A human readable name of the list.
- ``description``: A long detailed information about what the list contains and how it is used.
- ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
- ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
- ``created_at``: Unix timestamp in seconds when the list was created.
- ``updated_at``: Unix timestamp in seconds when the list was updated.
- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
- ``origins``: list of websites that are using the list as a denylist.
    - ``self``: the URI to all the list of origins.
    - ``lists``: list of lists that the origin is using.
        - ``self``: the URI to the individual information of the list.
        - ``origin``: the protocol and domain of the website that is using the list.
        - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.
        - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
        - ``created_at``: Unix timestamp in seconds when the list was created.
        - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

- If the deny list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.
- If the private denylist ID does not exist, it will return a ``404`` (Not found) error.

It will also return the API Global errors described in the API description.

<h3 id="get-the-details-of-a-specific-private-denylist-of-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|denylist_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "created_at": 0,
  "description": "string",
  "list_type": "UNKNOWN",
  "name": "string",
  "origins": {
    "lists": [
      {
        "created_at": 0,
        "origin": "string",
        "self": "string",
        "status": "INACTIVE",
        "updated_at": 0
      }
    ],
    "self": "string"
  },
  "resource_type": "UNKNOWN",
  "self": "string",
  "tags": [
    "string"
  ],
  "ttl": 0,
  "updated_at": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-details-of-a-specific-private-denylist-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PrivateAclGroupListOutput](#schemaprivateaclgrouplistoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Update the information of an existing private denylist of the user.

<a id="opIdupdate_private_denylist_of_the_user_v1_denylist_private__denylist_id__put"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/private/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string",
    "tags": [
      "string"
    ],
    "ttl": 0
  }'
```

`PUT /v1/denylist/private/{denylist_id}`

### What
Updates the information that describes the denylist of the user in the system. The parameters that can be modified are:
 - name
 - description
 - tags
 - expiry

This is an asynchronous operation. It can take several seconds until the operation completes, but the request will immediately return a 202 Accepted response.

The default lists ``External sources reported CIDRs`` and ``Default denylist`` cannot be updated.

### Parameters
In the query string the ID of the private deny list to delete.

In the body the following parameters:
- ``name``: (Optional) A human readable name of the list.
- ``description``: (Optional) A long detailed information about what the list contains and how it is used.
- ``tags``: (Optional) A list of tags that describe the list.
- ``expiry``: (Optional) Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.

### Result
It should always return a 202 Accepted response with an empty body.

### Errors

- If the list does not exist, it will return a `404` (Not found) error.
- If the list is a default list, it will return a `403` (Forbidden) error.
- If the deny list is not a valid UUID, it will return a `422` (Unprocessable Entity) error.
- If the expiry is not a valid timestamp, it will return a `422` (Unprocessable Entity) error.
- If the expiry is in the past, it will return a `400` (Bad Request) error.
- If the name is not a string, it will return a `422` (Unprocessable Entity) error.
- If the description is not a string, it will return a `422` (Unprocessable Entity) error.

It will return the API Global errors described in the API description.

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "tags": [
    "string"
  ],
  "ttl": 0
}
```

<h3 id="update-the-information-of-an-existing-private-denylist-of-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|denylist_id|path|string(uuid)|true|none|
|body|body|[Body_update_private_denylist_of_the_user_v1_denylist_private__denylist_id__put](#schemabody_update_private_denylist_of_the_user_v1_denylist_private__denylist_id__put)|false|none|
|» description|body|string|false|The human readable full description of the list|
|» name|body|string|false|The name of the list|
|» tags|body|[string]|false|The list of tags to associate with the list|
|» ttl|body|integer|false|Optional. The Time To Live (TTL) of a resource in the list in seconds.|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="update-the-information-of-an-existing-private-denylist-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Delete all the bindings between a user and a private denylist.

<a id="opIddelete_the_denylist_v1_denylist_private__denylist_id__delete"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/private/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/denylist/private/{denylist_id}`

### What
Delete all the bindings between a user and a private denylist. This will remove the content of the denylist, the denylist from the user and also all the origins that are using the denylist.

This is an asynchronous operation. It can take several seconds until the operation completes, but the request willimmediately return a 202 Accepted response.

The default lists ``External sources reported CIDRs`` and ``Default denylist`` cannot be deleted, but can be emptied. Please refer to the documentation to delete the content.

### Parameters
In the query string the ID of the private deny list to delete.

### Result
It should always return a 202 Accepted response with an empty body.

### Errors

- If the list does not exist, it will return a `404` (Not found) error.
- If the list is a default list, it will return a `403` (Forbidden) error.
- If the deny list is not a valid UUID, it will return a `422` (Unprocessable Entity) error.

It will return the API Global errors described in the API description.

<h3 id="delete-all-the-bindings-between-a-user-and-a-private-denylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|denylist_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-all-the-bindings-between-a-user-and-a-private-denylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the content of a private denylist of the user.

<a id="opIdget_denylist_content_v1_denylist_private__denylist_id__content_get"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/private/497f6eca-6276-4993-bfeb-53cbbbba6f08/content \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/denylist/private/{denylist_id}/content`

### What
Returns the content of the private denylist of the user. The content can be CIDRs, ASNs, countries, continents or    datacenter IDs.

### Parameters
Pass the private denylist ID as query parameter.

### Result
The result is a JSON object with the following structure:
- ``self``: the URI to the content of the list.
- ``cidrs``: (Optional) list of CIDRs in the list.
- ``asns``: (Optional) list of ASNs in the list.
- ``countries``: (Optional) list of countries in the list.
- ``continents``: (Optional) list of continents in the list.
- ``datacenters``: (Optional) list of datacenters in the list.

### Errors

- If the deny list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.
- If the private denylist ID does not exist, it will return a ``404`` (Not found) error.

It will also return the API Global errors described in the API description.

<h3 id="get-the-content-of-a-private-denylist-of-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|denylist_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "asns": [
    0
  ],
  "cidrs": [
    "string"
  ],
  "continents": [
    "AF"
  ],
  "countries": [
    "AW"
  ],
  "datacenters": [
    "string"
  ],
  "self": "string",
  "user_agents": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-content-of-a-private-denylist-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PrivateAclListCollectionOutput](#schemaprivateacllistcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Add or remove content of a private denylist of the user.

<a id="opIdupdate_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_put"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/private/497f6eca-6276-4993-bfeb-53cbbbba6f08/content \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "append": [
      "string"
    ],
    "remove": [
      "string"
    ]
  }'
```

`PUT /v1/denylist/private/{denylist_id}/content`

### What
Add or remove content of a private denylist of the user. The content can be CIDRs, ASNs, countries, continents or datacenter IDs.

 The number of elements allowed in all the lists are limited depending on the plan of the user:
- Free: 100 elements
- Basic: 1000 elements
- Premium: 10000 elements

### Parameters
Pass the private denylist ID as query parameter.

In the body the following parameters:
- ``append``: (Optional) Add CIDRs, ASNs, countries, continents or datacenter IDs to add to the list. It's not possible to mix different resource types in the same list.
- ``remove``: (Optional) Extract CIDRs, ASNs, countries, continents or datacenter IDs to add to the list. It's not possible to mix different resource types in the same list.


### Result
If successful, it will return a ``202`` (Accepted) response with an empty body. The operation is asynchronous,and can take several seconds to complete.

### Errors

- If the deny list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.
- If the private denylist ID does not exist, it will return a ``404`` (Not found) error.
- If the ``append`` or ``remove`` parameters are not processable, it will return a ``422`` (Unprocessable Entity) error.
- If the number of elements in the lists is over the limit, it will return a ``413`` (Payload Too Large) error.

It will also return the API Global errors described in the API description.

> Body parameter

```json
{
  "append": [
    "string"
  ],
  "remove": [
    "string"
  ]
}
```

<h3 id="add-or-remove-content-of-a-private-denylist-of-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|denylist_id|path|string(uuid)|true|none|
|body|body|[Body_update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_put](#schemabody_update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_put)|false|none|
|» append|body|[string]|false|The name of the resources to append to the denylist|
|» remove|body|[string]|false|The name of the resources to remove from the denylist|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="add-or-remove-content-of-a-private-denylist-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Delete all the content of a private denylist of the user.

<a id="opIddelete_the_denylist_content_v1_denylist_private__denylist_id__content_delete"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/private/497f6eca-6276-4993-bfeb-53cbbbba6f08/content \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/denylist/private/{denylist_id}/content`

### What
Delete all the content of a private denylist of the user. This will remove all the elements, and there is no way to recover them.

### Parameters
Pass the private denylist ID as query parameter.

### Result
If successful, it will return a ``202`` (Accepted) response with an empty body. The operation is asynchronous,and can take several seconds to complete.

### Errors

- If the deny list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.
- If the private denylist ID does not exist, it will return a ``404`` (Not found) error.

It will also return the API Global errors described in the API description.

<h3 id="delete-all-the-content-of-a-private-denylist-of-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|denylist_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-all-the-content-of-a-private-denylist-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Toogle the status of the origin in a deny list.

<a id="opIdchange_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_put"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/private/497f6eca-6276-4993-bfeb-53cbbbba6f08/origin \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "origin": "http://example.com",
    "status": "ACTIVE"
  }'
```

`PUT /v1/denylist/private/{denylist_id}/origin`

### What
Change the status of the origin of a deny list to ``ACTIVE``, ``INACTIVE`` or ``DELETED``.

An ``ACTIVE`` origin will apply the deny list to the protocol and domain of the origin. An origin can be created and activated simply toogling the ``ACTIVE`` status. As an optional parameter it can be provided an ``ttl`` or Time To Live parameter of the origin in the list in seconds. After the TTL expires, the origin will be removed from the list.  If the TTL is not provided, the origin will never expire.

An ``INACTIVE`` origin will not apply the deny list to the protocol and domain of the origin.

A ``DELETED`` origin will be removed from the list. It will not be used by the service anymore. The user can activate it again with the ``ACTIVE`` status.

This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.

*This operation is not available in the Freemium plan.*

### Parameters
In the query string the ID of the deny list to change the status.
In the body the JSON object with the following fields:
- ``origin``: The protocol and domain of the origin. It can be ``http://example.com`` or ``https://example.com``.
- ``status``: The status of the list. It can be ``ACTIVE``, ``INACTIVE`` or ``DELETED``.

### Result
It should always return a 202 Accepted response with an empty body.

### Errors

If the list does not exist, it will return a 404 error.
If the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.
If the TTL is negative in the past, it will return a 422 error.
If the deny list is not a valid UUID, it will return a 422 error.
If the origin is not a valid URL, it will return a 400 error.
If the denylist is not active, it will returna 409 error.
If the origin is not found in the set owned by the user, it will return a 404 error.

It will return the API Global errors described in the API description.

> Body parameter

```json
{
  "origin": "http://example.com",
  "status": "ACTIVE"
}
```

<h3 id="toogle-the-status-of-the-origin-in-a-deny-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|denylist_id|path|string(uuid)|true|none|
|body|body|[Body_change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_put](#schemabody_change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_put)|true|none|
|» origin|body|string(uri)|true|The protocol and domain of the origin to change the status|
|» status|body|string|true|The status of the list. ACTIVE, INACTIVE, DELETED|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE|
|» status|INACTIVE|
|» status|DELETED|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="toogle-the-status-of-the-origin-in-a-deny-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the set of public denylists.

<a id="opIdget_all_public_denylists_v1_denylist_public_all_get"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/public/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/denylist/public/all`

### What
Obtain the set of public deny lists available in the service and also which ones are already selected by the user and wich ones are not.

### Parameters
No parameters

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to the status of all the lists.
- ``lists``: a list of JSON objects with the available lists:
    - ``self``: the URI to individual information of the list.
    - ``name``: A human readable name of the list.
    - ``description``: A long detailed information about what the list contains and how it is used.
    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
    - ``created_at``: Unix timestamp in seconds when the list was created.
    - ``updated_at``: Unix timestamp in seconds when the list was updated.

If the list is already selected by the user, the JSON object will also contain the following fields:
- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
- ``origins``: list of websites that are using the list as an denylist.
    - ``self``: the URI to all the list of origins.
    - ``lists``: list of lists that the origin is using.
        - ``self``: the URI to the individual information of the list.
        - ``origin``: the protocol and domain of the website that is using the list.
        - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``        it means that the list is not available anymore if not renewed.
        - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
        - ``created_at``: Unix timestamp in seconds when the list was created.
        - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "created_at": 0,
      "description": "string",
      "list_type": "UNKNOWN",
      "name": "string",
      "origins": {
        "lists": [
          {
            "created_at": 0,
            "origin": "string",
            "self": "string",
            "status": "INACTIVE",
            "updated_at": 0
          }
        ],
        "self": "string"
      },
      "resource_type": "UNKNOWN",
      "self": "string",
      "status": "INACTIVE",
      "tags": [
        "string"
      ],
      "ttl": 0,
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

<h3 id="get-the-set-of-public-denylists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PublicAclGroupListCollectionOutput](#schemapublicaclgrouplistcollectionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the set of public denylists by resource type.

<a id="opIdget_all_public_denylists_by_resource_type_v1_denylist_public_all__resource_type__get"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/public/all/cidr \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/denylist/public/all/{resource_type}`

### What
Obtain the set of public deny lists available in the service and also which ones are already selected by the user and wich ones are not filtering by the resource type.

### Parameters
The ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to the status of all the lists.
- ``lists``: a list of JSON objects with the available lists:
    - ``self``: the URI to individual information of the list.
    - ``name``: A human readable name of the list.
    - ``description``: A long detailed information about what the list contains and how it is used.
    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
    - ``created_at``: Unix timestamp in seconds when the list was created.
    - ``updated_at``: Unix timestamp in seconds when the list was updated.

If the list is already selected by the user, the JSON object will also contain the following fields:
- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
- ``origins``: list of websites that are using the list as an denylist.
    - ``self``: the URI to all the list of origins.
    - ``lists``: list of lists that the origin is using.
        - ``self``: the URI to the individual information of the list.
        - ``origin``: the protocol and domain of the website that is using the list.
        - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``        it means that the list is not available anymore if not renewed.
        - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
        - ``created_at``: Unix timestamp in seconds when the list was created.
        - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

It will return the API Global errors described in the API description.

<h3 id="get-the-set-of-public-denylists-by-resource-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_type|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resource_type|cidr|
|resource_type|country|
|resource_type|continent|
|resource_type|as|
|resource_type|datacenter|
|resource_type|useragent|

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "created_at": 0,
      "description": "string",
      "list_type": "UNKNOWN",
      "name": "string",
      "origins": {
        "lists": [
          {
            "created_at": 0,
            "origin": "string",
            "self": "string",
            "status": "INACTIVE",
            "updated_at": 0
          }
        ],
        "self": "string"
      },
      "resource_type": "UNKNOWN",
      "self": "string",
      "status": "INACTIVE",
      "tags": [
        "string"
      ],
      "ttl": 0,
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-set-of-public-denylists-by-resource-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PublicAclGroupListCollectionOutput](#schemapublicaclgrouplistcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the different public denylists where the IP address was found.

<a id="opIdquery_resource_denylists_v1_denylist_public_ip__address__get"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/public/ip/192.0.2.1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/denylist/public/ip/{address}`

### What
Obtain the list of all the different public denylists where the IP address entered by the user is. The public denylists are the ones activated by the user, but managed by Threatjammer administrators.

### Parameters
The endpoint accepts the `address` parameter as query string.

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to individual status.
- ``cidrs``: the URI of the lists of CIDRs where the IP was found.
- ``country``: the URIs where the lists of countries where the IP address was found
- ``continent``: the URI where the continent where the IP address was found.
- ``asn``: the URIs where the list of continents of the ASN where the IP address was found.
- ``datacenter``: the URIs of the lists of datacenters where the IP address was found. If not found, the result is an empty string.

### Errors
- a `422 Unprocessable Entity` error if the IP address was malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-the-different-public-denylists-where-the-ip-address-was-found-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string(ipv4) \| string(ipv6)|true|none|

> Example responses

> 200 Response

```json
{
  "asns": [],
  "cidrs": [],
  "continents": [],
  "countries": [],
  "datacenters": [],
  "reported": [
    "string"
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-different-public-denylists-where-the-ip-address-was-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AclListCollectionOutput](#schemaacllistcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the set of owned denylists.

<a id="opIdget_public_denylists_owned_by_the_user_v1_denylist_public_owned_get"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/public/owned \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/denylist/public/owned`

### What
Obtain the set of public deny lists available in the service selected by the user.

### Parameters
No parameters

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to the status of all the lists.
- ``lists``: a list of JSON objects with the available lists:
    - ``self``: the URI to individual information of the list.
    - ``name``: A human readable name of the list.
    - ``description``: A long detailed information about what the list contains and how it is used.
    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
    - ``created_at``: Unix timestamp in seconds when the list was created.
    - ``updated_at``: Unix timestamp in seconds when the list was updated.
    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
    - ``origins``: list of websites that are using the list as an denylist.
        - ``self``: the URI to all the list of origins.
        - ``lists``: list of lists that the origin is using.
            - ``self``: the URI to the individual information of the list.
            - ``origin``: the protocol and domain of the website that is using the list.
            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.
            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
            - ``created_at``: Unix timestamp in seconds when the list was created.
            - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "created_at": 0,
      "description": "string",
      "list_type": "UNKNOWN",
      "name": "string",
      "origins": {
        "lists": [
          {
            "created_at": 0,
            "origin": "string",
            "self": "string",
            "status": "INACTIVE",
            "updated_at": 0
          }
        ],
        "self": "string"
      },
      "resource_type": "UNKNOWN",
      "self": "string",
      "status": "INACTIVE",
      "tags": [
        "string"
      ],
      "ttl": 0,
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

<h3 id="get-the-set-of-owned-denylists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PublicAclGroupListCollectionOutput](#schemapublicaclgrouplistcollectionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the set of public denylists of a user by resource type.

<a id="opIdget_all_owned_denylists_by_resource_type_v1_denylist_public_owned__resource_type__get"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/public/owned/cidr \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/denylist/public/owned/{resource_type}`

### What
Obtain the set of public deny lists selected by the user and wich ones are not filtering by the resource type.

### Parameters
The ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to the status of all the lists.
- ``lists``: a list of JSON objects with the available lists:
    - ``self``: the URI to individual information of the list.
    - ``name``: A human readable name of the list.
    - ``description``: A long detailed information about what the list contains and how it is used.
    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.
    - ``created_at``: Unix timestamp in seconds when the list was created.
    - ``updated_at``: Unix timestamp in seconds when the list was updated.
    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
    - ``origins``: list of websites that are using the list as an denylist.
        - ``self``: the URI to all the list of origins.
        - ``lists``: list of lists that the origin is using.
            - ``self``: the URI to the individual information of the list.
            - ``origin``: the protocol and domain of the website that is using the list.
            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.
            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
            - ``created_at``: Unix timestamp in seconds when the list was created.
            - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

It will return the API Global errors described in the API description.

<h3 id="get-the-set-of-public-denylists-of-a-user-by-resource-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_type|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resource_type|cidr|
|resource_type|country|
|resource_type|continent|
|resource_type|as|
|resource_type|datacenter|
|resource_type|useragent|

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "created_at": 0,
      "description": "string",
      "list_type": "UNKNOWN",
      "name": "string",
      "origins": {
        "lists": [
          {
            "created_at": 0,
            "origin": "string",
            "self": "string",
            "status": "INACTIVE",
            "updated_at": 0
          }
        ],
        "self": "string"
      },
      "resource_type": "UNKNOWN",
      "self": "string",
      "status": "INACTIVE",
      "tags": [
        "string"
      ],
      "ttl": 0,
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-set-of-public-denylists-of-a-user-by-resource-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PublicAclGroupListCollectionOutput](#schemapublicaclgrouplistcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the details of the denylist.

<a id="opIdget_single_denylist_v1_denylist_public__denylist_id__get"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/public/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/denylist/public/{denylist_id}`

### What
Obtain the details of an deny list available in the service.

### Parameters
No parameters

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to individual information of the list.
- ``name``: A human readable name of the list.
- ``description``: A long detailed information about what the list contains and how it is used.
- ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.
- ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.
- ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``it means that the list is not available anymore if not renewed.
- ``created_at``: Unix timestamp in seconds when the list was created.
- ``updated_at``: Unix timestamp in seconds when the list was updated.

If the list is already selected by the user, the JSON object will also contain the following fields:
    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
    - ``origins``: list of websites that are using the list as an denylist.
        - ``self``: the URI to all the list of origins.
        - ``lists``: list of lists that the origin is using.
            - ``self``: the URI to the individual information of the list.
            - ``origin``: the protocol and domain of the website that is using the list.
            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.
            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.
            - ``created_at``: Unix timestamp in seconds when the list was created.
            - ``updated_at``: Unix timestamp in seconds when the list was updated.

### Errors

If the list does not exist, it will return a 404 error.

It will return the API Global errors described in the API description.

<h3 id="get-the-details-of-the-denylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|denylist_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": 0,
  "description": "string",
  "list_type": "UNKNOWN",
  "name": "string",
  "origins": {
    "lists": [
      {
        "created_at": 0,
        "origin": "string",
        "self": "string",
        "status": "INACTIVE",
        "updated_at": 0
      }
    ],
    "self": "string"
  },
  "resource_type": "UNKNOWN",
  "self": "string",
  "status": "INACTIVE",
  "tags": [
    "string"
  ],
  "ttl": 0,
  "updated_at": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-details-of-the-denylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PublicAclGroupListOutput](#schemapublicaclgrouplistoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Toogle the status of an deny list.

<a id="opIdchange_status_of_the_denylist_v1_denylist_public__denylist_id__put"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/public/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": "ACTIVE"
  }'
```

`PUT /v1/denylist/public/{denylist_id}`

### What
Change the status of an deny list to ``ACTIVE`` or ``INACTIVE``. An ``INACTIVE`` list will not be used by the service. An ``ACTIVE`` list will be used by the service. As an optional parameter it can be provided an ``expiry`` date in seconds since epoch. If not provided, the list will never expire.

 This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.

### Parameters
In the query string the ID of the deny list to change the status.
In the body the JSON object with the following fields:
- ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE``.
- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.

### Result
It should always return a 202 Accepted response with an empty body.

### Errors

If the list does not exist, it will return a 404 error.
If the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.
If the expiry is not a valid timestamp, it will return a 422 error.
If the deny list is not a valid UUID, it will return a 422 error.

It will return the API Global errors described in the API description.

> Body parameter

```json
{
  "status": "ACTIVE"
}
```

<h3 id="toogle-the-status-of-an-deny-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|denylist_id|path|string(uuid)|true|none|
|body|body|[Body_change_status_of_the_denylist_v1_denylist_public__denylist_id__put](#schemabody_change_status_of_the_denylist_v1_denylist_public__denylist_id__put)|true|none|
|» status|body|string|true|The status of the list. ACTIVE or INACTIVE|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE|
|» status|INACTIVE|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="toogle-the-status-of-an-deny-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Delete all the bindings between a user and an denylist.

<a id="opIddelete_the_denylist_v1_denylist_public__denylist_id__delete"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/public/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/denylist/public/{denylist_id}`

### What
Delete all the bindings between a user and an denylist. This will remove the denylist from the user and also all the origins that are using the denylist.

 This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.

### Parameters
In the query string the ID of the deny list to change the status.

### Result
It should always return a 202 Accepted response with an empty body.

### Errors

If the list does not exist, it will return a 404 error.
If the deny list is not a valid UUID, it will return a 422 error.

It will return the API Global errors described in the API description.

<h3 id="delete-all-the-bindings-between-a-user-and-an-denylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|denylist_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-all-the-bindings-between-a-user-and-an-denylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Toogle the status of the origin in a deny list.

<a id="opIdchange_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_put"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/public/497f6eca-6276-4993-bfeb-53cbbbba6f08/origin \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "origin": "http://example.com",
    "status": "ACTIVE"
  }'
```

`PUT /v1/denylist/public/{denylist_id}/origin`

### What
Change the status of the origin of a deny list to ``ACTIVE``, ``INACTIVE`` or ``DELETED``.

An ``ACTIVE`` origin will apply the deny list to the protocol and domain of the origin. An origin can be created and activated simply toogling the ``ACTIVE`` status. As an optional parameter it can be provided an ``ttl`` or Time To Live parameter of the origin in the list in seconds. After the TTL expires, the origin will be removed from the list.  If the TTL is not provided, the origin will never expire.

An ``INACTIVE`` origin will not apply the deny list to the protocol and domain of the origin.

A ``DELETED`` origin will be removed from the list. It will not be used by the service anymore. The user can activate it again with the ``ACTIVE`` status.

This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.

*This operation is not available in the Freemium plan.*

### Parameters
In the query string the ID of the deny list to change the status.
In the body the JSON object with the following fields:
- ``origin``: The protocol and domain of the origin. It can be ``http://example.com`` or ``https://example.com``.
- ``status``: The status of the list. It can be ``ACTIVE``, ``INACTIVE`` or ``DELETED``.

### Result
It should always return a 202 Accepted response with an empty body.

### Errors

If the list does not exist, it will return a 404 error.
If the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.
If the TTL is negative in the past, it will return a 422 error.
If the deny list is not a valid UUID, it will return a 422 error.
If the origin is not a valid URL, it will return a 400 error.
If the denylist is not active, it will returna 409 error.
If the origin is not found in the set owned by the user, it will return a 404 error.

It will return the API Global errors described in the API description.

> Body parameter

```json
{
  "origin": "http://example.com",
  "status": "ACTIVE"
}
```

<h3 id="toogle-the-status-of-the-origin-in-a-deny-list-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|denylist_id|path|string(uuid)|true|none|
|body|body|[Body_change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_put](#schemabody_change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_put)|true|none|
|» origin|body|string(uri)|true|The protocol and domain of the origin to change the status|
|» status|body|string|true|The status of the list. ACTIVE, INACTIVE, DELETED|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE|
|» status|INACTIVE|
|» status|DELETED|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="toogle-the-status-of-the-origin-in-a-deny-list-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the list of automatically reported IP addresses by the user.

<a id="opIdquery_all_the_ip_addresses_reported_by_the_user_v1_denylist_reported_ip_get"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/reported/ip \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/denylist/reported/ip`

### What
Obtain the list of all the IPv4 or IPv6 addresses that have been automatically reported by the user. A user can report automatically an IP address with the asynchronous API. The reported IP addresses differ from the ones managed with the endpoint ``/v1/denylist/private/ip/%s``. As a rule of thumb,
 the reported IP addresses are the ones submitted by devices like honeypots, firewalls, log engines, etc. The denylisted IP addresses are the ones submitted manually by the user from files or indidual items.

### Parameters
The endpoint accepts the following parameters in the query string:
- ``dataset``: (Optional) Name of the dataset to filter the query. If not given, then all datasets are queried. If given, then only the changes logged in the given dataset are returned. The list of datasets is obtained from the ``/v1/dataset/ip`` endpoint.
- ``reported_before``: (Optional) The UNIX timestamp in milliseconds of the earliest reported date to be included in the query. If not given, then the earliest date is current time.
- ``reported_after``: (Optional) The UNIX timestamp in milliseconds of the oldest reported date to be included in the query. If not given, then the oldest date is the first event logged.
- ``expires_before``: (Optional) The UNIX timestamp in milliseconds of the earliest expiry date to be included in the query. If not given, then the earliest date is current time.
- ``expires_after``: (Optional) The UNIX timestamp in milliseconds of the oldest expiry date to be included in the query. If not given, then the oldest date is the first event logged.
- ``greater_than``: (Optional) Restricts the result displaying only the IP addresses reported more times than the given value. It must be an integer greater than 0.
- ``less_than``: (Optional) Restricts the result displaying only the IP addresses reported less times than the given value. It must be an integer greater than 0.
- ``ip_protocol_version``: (Optional) Restricts the result displaying only the IP addresses with the given IP protocol version. Values are: ALL, IPV4, IPV6. If not given, then all IP addresses are returned.
- ``output_format``: (Optional) The format of the output. Values are: JSON, CSV, AWS-WAF. If not given, then the default format is JSON. AWS-WAF is the format used by AWS WAF to import ipsets in the service. You can find more information about AWS WAF import [here](https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateIPSet.html).

### Result
The result is a JSON object with a list of the following JSON objects:
- ``self``: the URI to individual status.
- ``addresses``: a list of JSON objects with the following fields:
    - ``self``: the URI to individual reported IP information.
    - ``last_report``: Unix timestamp in milliseconds when the IP address was last reported.
    - ``expiry``: Unix timestamp in milliseconds when the IP address will expire and be removed.
    - ``total_reports``: Total number of reports for the IP address.
    - ``protocol``: IP protocol version of the IP address. Same value as the ``ip_protocol_version`` parameter if given.
    - ``dataset``: Name of the dataset where the IP address was reported. Must be a value from the ``/v1/dataset/ip`` endpoint.
    - ``tags``: A list of strings with the tags associated to the IP address at the origin device. It helps to classify the origin of the report.

### Errors
- a `400 Bad Request` error if any timestamp is in the future.
- a `400 Bad Request` error if the dataset is not a string that can have numbers, upper and lower case letters, and underscores.
- a `404 Not Found` error if the dataset was not found.
- a `422 Unprocessable Entity` error if some of the parameters are malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-the-list-of-automatically-reported-ip-addresses-by-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset|query|string|false|The dataset list type to filter for. Must be uppercase, numbers and underscore|
|reported_before|query|integer|false|Restricts the result displaying only the IP addresses reported before `reported_before`. It must be a UNIX timestamp in seconds.|
|reported_after|query|integer|false|Restricts the result displaying only the IP addresses reported after `reported_after`. It must be a UNIX timestamp in seconds.|
|expires_before|query|integer|false|Restricts the result displaying only the IP addresses that will expire before `expires_before`. It must be a UNIX timestamp in seconds greater than the current UNIX timestamp.|
|expires_after|query|integer|false|Restricts the result displaying only the IP addresses that will expire after `expires_after`. It must be a UNIX timestamp in seconds greater than the current UNIX timestamp.|
|greater_than|query|integer|false|Restricts the result displaying only the IP addresses reported more times than `greater_than`. It must be an integer greater than 0.|
|less_than|query|integer|false|Restricts the result displaying only the IP addresses reported less times than `less_than`. It must be an integer greater than 1.|
|ip_protocol_version|query|string|false|Restrict the result displaying the IP protocol version requested (IPV4 or IPV6) or both (ALL). Some output formats MUST filter by IP protocol version first.|
|output_format|query|string|false|The output format of the datasets.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ip_protocol_version|ALL|
|ip_protocol_version|IPV4|
|ip_protocol_version|IPV6|
|output_format|JSON|
|output_format|CSV|
|output_format|AWS-WAF|

> Example responses

> 200 Response

```json
{
  "addresses": [
    {
      "dataset": "string",
      "expiry": 0,
      "last_report": 0,
      "protocol": "ALL",
      "self": "string",
      "tags": [
        "string"
      ],
      "total_reports": 0
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-list-of-automatically-reported-ip-addresses-by-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[IPListCollectionOutput](#schemaiplistcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Delete all the automatically reported IP addresses by the user.

<a id="opIddelete_all_ip_addresses_reported_by_the_user_v1_denylist_reported_ip_all_delete"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/reported/ip/all \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/denylist/reported/ip/all`

### What
Delete all the IP addresses that have been automatically reported by the user. This option cannot be reverted.

### Parameters
No parameters are required.

### Result
A successful result is an empty response with the the HTTP status code ``204 No Content``.

### Errors
It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-all-the-automatically-reported-ip-addresses-by-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the details of an automatically reported IP addresses by the user.

<a id="opIdquery_an_ip_addresses_reported_by_the_user_v1_denylist_reported_ip__ip_address__get"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/reported/ip/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/denylist/reported/ip/{ip_address}`

### What
Obtain the details of an IPv4 or IPv6 addresses that have been automatically reported by the user. A user can report automatically an IP address with the asynchronous API. The reported IP address differs from the ones managed with the endpoint ``/v1/denylist/private/ip/%s``. As a rule of thumb,
 the reported IP addresses are the ones submitted by devices like honeypots, firewalls, log engines, etc. The denylisted IP addresses are the ones submitted manually by the user from files or indidual items.

### Parameters
The endpoint accepts the following parameters in the path:
- ``ip_address``: (Mandatory) The public IPv4 or IPv6 addresses to be queried.

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to individual reported IP information.
- ``last_report``: Unix timestamp in milliseconds when the IP address was last reported.
- ``expiry``: Unix timestamp in milliseconds when the IP address will expire and be removed.
- ``total_reports``: Total number of reports for the IP address.
- ``protocol``: IP protocol version of the IP address. Values can be IPV4 or IPV6.
- ``dataset``: Name of the dataset where the IP address was reported. Must be a value from the ``/v1/dataset/ip`` endpoint.
- ``tags``: A list of strings with the tags associated to the IP address at the origin device. It helps to classify the origin of the report.

### Errors
- a `422 Unprocessable Entity` error if the IP address is malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-the-details-of-an-automatically-reported-ip-addresses-by-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip_address|path|string(ipvanyaddress)|true|none|

> Example responses

> 200 Response

```json
{
  "dataset": "string",
  "expiry": 0,
  "last_report": 0,
  "protocol": "ALL",
  "self": "string",
  "tags": [
    "string"
  ],
  "total_reports": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-details-of-an-automatically-reported-ip-addresses-by-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[IPListOutput](#schemaiplistoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Delete the automatically reported IP address by the user.

<a id="opIddelete_an_ip_address_reported_by_the_user_v1_denylist_reported_ip__ip_address__delete"></a>

> Code samples

```bash
curl https://example.com/v1/denylist/reported/ip/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/denylist/reported/ip/{ip_address}`

### What
Delete an IP address that was automatically reported by the user. This option cannot be reverted.

### Parameters
The endpoint accepts the following parameters in the path:
- ``ip_address``: (Mandatory) The public IPv4 or IPv6 addresses to be deleted.

### Result
A successful result is an empty response with the the HTTP status code ``204 No Content``.

### Errors
- a `422 Unprocessable Entity` error if the IP address is malformed.

It will also return the API Global errors described in the API description.

<h3 id="delete-the-automatically-reported-ip-address-by-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip_address|path|string(ipvanyaddress)|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-the-automatically-reported-ip-address-by-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

<h1 id="threatjammercom-user-api-geolocation">Geolocation</h1>

## Get the geolocation data of the IP addresses set.

<a id="opIdgeolocate_ip_set_v1_geo_post"></a>

> Code samples

```bash
curl https://example.com/v1/geo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`POST /v1/geo`

### What
Get the geo location data of all the IP addresses passed as argument. This information includes:
- Latitude and longitude
- Time zone
- Accuracy radius
- Postal code
- City name
- Region
- Country
- Country of the service provider
- Continent
- Reverse PTR hostnames

### Parameters
A list of public IPv4 or IPv6 addresses is required in the body of the request.

### Result
The result contains a list of the result for each IP address, with the following data set:

The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``accuracy_radius``:  The radius in kilometers around the specified location where the IP address is likely to be.
- ``asn_country_iso_code``: The ISO code of the country of the Autonomous System (AS) owner of the IP address.
- ``city_geoname_code``:``: City geoname code. The geoname code by [GeoNames](https://en.wikipedia.org/wiki/GeoNames) is a unique identifier assigned to each geographical point on the globe.
- ``city_name``:``: City name, in english. The developer can use the geoname code to localize the name of the city.
- ``continent_code``: The continent code. It can be any of the following: AF, AN, AS, EU, NA, OC, SA.
- ``country_iso_code``: The country ISO 3166-1 alpha-2 code.
- ``hostnames``: The list of hostnames associated with the IP address obtained from the reverse DNS lookup.
- ``latitude``: The latitude of the geolocation.
- ``longitude``: The longitude of the geolocation.
- ``postal_code``:``: The postal code of the city.
- ``region_geoname_code``:``: The geoname code of the region.
- ``region_name``:``: The region name, in english. The developer can use the geoname code to localize the name of the region.
- ``time_zone``: The name of the time zone.


### Errors
The endpoint will return the following errors:
- a `422 Unprocessable Entity` error if the IP address is malformed.

The private IP addresses will be ignored, if any.

It will also return the API Global errors described in the API description.

> Body parameter

```json
[
  "string"
]
```

<h3 id="get-the-geolocation-data-of-the-ip-addresses-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string(ipvanyaddress)]|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "accuracy_radius": 0,
      "asn_country_iso_code": "string",
      "city_geoname_code": 0,
      "city_name": "string",
      "continent_code": "string",
      "country_iso_code": "string",
      "hostnames": [
        "string"
      ],
      "latitude": 0,
      "longitude": 0,
      "postal_code": "string",
      "region_geoname_code": 0,
      "region_name": "string",
      "self": "string",
      "time_zone": "string"
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-geolocation-data-of-the-ip-addresses-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The server will return a valid answer in the following cases:|[GeoIPCollectionOutput](#schemageoipcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the geolocation data of all the IP addresses uploaded.

<a id="opIdassess_ip_set_csv_v1_geo_csv_post"></a>

> Code samples

```bash
curl https://example.com/v1/geo/csv \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'csv_file=@/path/to/file'
```

`POST /v1/geo/csv`

### What
Get the geo location data of all the IP addresses uploaded in a text file. This information includes:
- Latitude and longitude
- Time zone
- Accuracy radius
- Postal code
- City name
- Region
- Country
- Country of the service provider
- Continent
- Reverse PTR hostnames

### Parameters
- A text file with a list of public IPv4 or IPv6 addresses.
- A header `Content-Type: multipart/form-data` is required.
- (optional) in the query string the parameeter `strict_parse`: If set to `true`, no malformed IP addresses allowed, returning an error. If set to `false`, malformed IP addresses will be ignored.

Example:
```
curl -X 'POST' \
  'https://dublin.api.threatjammer.com/v1/geo/csv[?strict_parse=true|false]' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: multipart/form-data' \
  -F 'csv_file=@YOUR_TEXT_FILE;type=text/csv'
```

### Result
The result contains a list of the result for each IP address, with the following data set:

The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``accuracy_radius``:  The radius in kilometers around the specified location where the IP address is likely to be.
- ``asn_country_iso_code``: The ISO code of the country of the Autonomous System (AS) owner of the IP address.
- ``city_geoname_code``:``: City geoname code. The geoname code by [GeoNames](https://en.wikipedia.org/wiki/GeoNames) is a unique identifier assigned to each geographical point on the globe.
- ``city_name``:``: City name, in english. The developer can use the geoname code to localize the name of the city.
- ``continent_code``: The continent code. It can be any of the following: AF, AN, AS, EU, NA, OC, SA.
- ``country_iso_code``: The country ISO 3166-1 alpha-2 code.
- ``hostnames``: The list of hostnames associated with the IP address obtained from the reverse DNS lookup.
- ``latitude``: The latitude of the geolocation.
- ``longitude``: The longitude of the geolocation.
- ``postal_code``:``: The postal code of the city.
- ``region_geoname_code``:``: The geoname code of the region.
- ``region_name``:``: The region name, in english. The developer can use the geoname code to localize the name of the region.
- ``time_zone``: The name of the time zone.


### Errors
The endpoint will return the following errors:
- a `422 Unprocessable Entity` error if the IP address is malformed.

The private IP addresses will be ignored, if any.

When the `strict_parse` parameter is set to `true`, the endpoint will return the following errors:
- a `400 Bad Request`.

It will also return the API Global errors described in the API description.

> Body parameter

```yaml
csv_file: string
```

<h3 id="get-the-geolocation-data-of-all-the-ip-addresses-uploaded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|strict_parse|query|boolean|false|When `true`, if any IP address entry in the file is malformed, the assessment is canceled. If `false`, the malformed IP addresses are ignored. Default is `false`.|
|body|body|[Body_assess_ip_set_csv_v1_geo_csv_post](#schemabody_assess_ip_set_csv_v1_geo_csv_post)|true|none|
|» csv_file|body|string(binary)|true|The CSV file with the IP addresses|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "accuracy_radius": 0,
      "asn_country_iso_code": "string",
      "city_geoname_code": 0,
      "city_name": "string",
      "continent_code": "string",
      "country_iso_code": "string",
      "hostnames": [
        "string"
      ],
      "latitude": 0,
      "longitude": 0,
      "postal_code": "string",
      "region_geoname_code": 0,
      "region_name": "string",
      "self": "string",
      "time_zone": "string"
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-geolocation-data-of-all-the-ip-addresses-uploaded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The server will return a valid answer in the following cases:|[GeoIPCollectionOutput](#schemageoipcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the geo location data of the IP address.

<a id="opIdgeolocate_ip_v1_geo__ip_address__get"></a>

> Code samples

```bash
curl https://example.com/v1/geo/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/geo/{ip_address}`

### What
Get the geo location data of the IP address passed as argument. This information includes:
- Latitude and longitude
- Time zone
- Accuracy radius
- Postal code
- City name
- Region
- Country
- Country of the service provider
- Continent
- Reverse PTR hostnames


### Parameters
The only argument accepted in the query string is a public IPv4 or IPv6 addresses.

### Result
The result contains the following set of data:

The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``accuracy_radius``:  The radius in kilometers around the specified location where the IP address is likely to be.
- ``asn_country_iso_code``: The ISO code of the country of the Autonomous System (AS) owner of the IP address.
- ``city_geoname_code``:``: City geoname code. The geoname code by [GeoNames](https://en.wikipedia.org/wiki/GeoNames) is a unique identifier assigned to each geographical point on the globe.
- ``city_name``:``: City name, in english. The developer can use the geoname code to localize the name of the city.
- ``continent_code``: The continent code. It can be any of the following: AF, AN, AS, EU, NA, OC, SA.
- ``country_iso_code``: The country ISO 3166-1 alpha-2 code.
- ``hostnames``: The list of hostnames associated with the IP address obtained from the reverse DNS lookup.
- ``latitude``: The latitude of the geolocation.
- ``longitude``: The longitude of the geolocation.
- ``postal_code``:``: The postal code of the city.
- ``region_geoname_code``:``: The geoname code of the region.
- ``region_name``:``: The region name, in english. The developer can use the geoname code to localize the name of the region.
- ``time_zone``: The name of the time zone.


### Errors
The endpoint will return the following errors:
- a `400 Bad Request` error if the IP address is not public.
- a `422 Unprocessable Entity` error if the IP address is malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-the-geo-location-data-of-the-ip-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip_address|path|string(ipvanyaddress)|true|none|

> Example responses

> 200 Response

```json
{
  "accuracy_radius": 0,
  "asn_country_iso_code": "string",
  "city_geoname_code": 0,
  "city_name": "string",
  "continent_code": "string",
  "country_iso_code": "string",
  "hostnames": [
    "string"
  ],
  "latitude": 0,
  "longitude": 0,
  "postal_code": "string",
  "region_geoname_code": 0,
  "region_name": "string",
  "self": "string",
  "time_zone": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-geo-location-data-of-the-ip-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The server will return a valid answer in the following cases:|[GeoIPOutput](#schemageoipoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

<h1 id="threatjammercom-user-api-data-logging">Data logging</h1>

## Get a log event.

<a id="opIdlog_change_id_v1_log_ip_id__logchange_id__get"></a>

> Code samples

```bash
curl https://example.com/v1/log/ip/id/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/log/ip/id/{logchange_id}`

### What
Obtain the full detail of a specific log change.

### Parameters
The endpoint accepts only the following parameters in the path:
- ``logchange_id``: (Mandatory) A unique integer of the change event log.

### Result
The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``cidr``: The CIDR affected by the change.
- ``score``: The score of the IP address when the event happened. It ranges from 0 to 99.
- ``risk``: The risk of the IP address when the event happened. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.
- ``dataset``: The URI of the dataset where the change was logged.
- ``source``: The URI of the data source where the change was found.
- ``lapse``: The time elapsed between the event found and the moment the source was queried. The possible values are: 1H, 6H, 12H, 1D, 7D, 30D, 90D, 180D, 365D.
- ``action``: The action that was performed on the IP address. The allowed values are: ADD, DELETE.
- ``timestamp``: The UNIX timestamp in milliseconds when the change was logged.


### Errors
The endpoint will return the following errors:
- a `404 Not Found` error if there is no event in the log with the ``logchange_ID`` given.
- a `422 Unprocessable Entity` error if the ``logchange_ID`` is malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-a-log-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logchange_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "action": "ADD",
  "cidr": "string",
  "dataset": "string",
  "lapse": "1H",
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string",
  "source": "string",
  "timestamp": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-a-log-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[IPLogOutput](#schemaiplogoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the changes logged in the different datasets of an IP address.

<a id="opIdlogchanges_ip_v1_log_ip__ip_address__get"></a>

> Code samples

```bash
curl https://example.com/v1/log/ip/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/log/ip/{ip_address}`

### What
Obtain a list of changes logged in the different datasets of the IP address given.

### Parameters
The endpoint accepts the following parameters in the path:
- ``ip_address``: (Mandatory) The public IPv4 or IPv6 addresses to be queried.

The endpoint accepts the following parameters in the query string:
- ``dataset``: (Optional) Name of the dataset to filter the query. If not given, then all datasets are queried. If given, then only the changes logged in the given dataset are returned. The list of datasets is obtained from the ``/v1/dataset/ip`` endpoint.
- ``logged_after``: (Optional) The UNIX timestamp in milliseconds of the earliest date to be included in the query. If not given, then the earliest date is the date of the first change logged in the dataset.


### Result
The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``logs``: The list of log changes. Each element of the list is a JSON object of a specific log change with the structure described in the endpoint ``/v1/log/ip/id/logchange_id``.
### Errors
The endpoint will return the following errors:
- a `400 Bad Request` error if the IP address is not public.
- a `400 Bad Request` error if the timestamp is in the future.
- a `400 Bad Request` error if the dataset is not a string that can have numbers, upper and lower case letters, and underscores.
- a `404 Not Found` error if the dataset was not found.
- a `422 Unprocessable Entity` error if the IP address is malformed.

It will also return the API Global errors described in the API description.

<h3 id="get-the-changes-logged-in-the-different-datasets-of-an-ip-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip_address|path|string(ipvanyaddress)|true|The IPv4 or IPv6 address to asses the risk|
|dataset|query|string|false|The name of the dataset to restrict the query|
|logged_after|query|integer|false|A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after this value.|

> Example responses

> 200 Response

```json
{
  "logs": [
    {
      "action": "ADD",
      "cidr": "string",
      "dataset": "string",
      "lapse": "1H",
      "risk": "UNKNOWN",
      "score": 0,
      "self": "string",
      "source": "string",
      "timestamp": 0
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-changes-logged-in-the-different-datasets-of-an-ip-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[IPLogCollectionOutput](#schemaiplogcollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

<h1 id="threatjammercom-user-api-origin-management-in-this-region">Origin management in this region</h1>

## Get the information of an origin of the user in the region.

<a id="opIdquery_origin_information_v1_origin_get"></a>

> Code samples

```bash
curl 'https://example.com/v1/origin?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/origin`

### What
Obtain the attributes of the origin of the user passed as argument in the selected region. The purpose of this function is to display the information of configuration of the origin and also access to the live data of the origin.

The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
 Hence, the protocol and domain of the origin must be the one where the javascript is loaded.

### Parameters
In the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.
2. Domain: The domain of the origin.

Then, the origin must be urlencoded. Example:
```
https://example.com
```

```
https%3A%2F%2Fexample.com
```

The querystring must be like this:
```
?query=https%3A%2F%2Fexample.com
```

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to the request to obtain the full details of an origin.
- ``origin``: the protocol and the domain where the origin token is valid.
- ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.
- ``token``: the URI to the request to obtain the token of the origin.
- ``data``: a JSON object containing all the parameters of the origin as key-value pairs.
- ``logs``: the URI to the request to obtain the log activity in the origin.
- ``addresses``: the URI to the request to obtain the list of IP addresses active in the origin.
- ``cookies``: the URI to the request to obtain the list of cookies active in the origin.
- ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.
- ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.

### Errors
- a `404 Not Found` error if the origin token is not found.
- a `400 Bad Request` error if the origin does not have the correct format.

It will return the API Global errors described in the API description.

<h3 id="get-the-information-of-an-origin-of-the-user-in-the-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The origin site to query|

> Example responses

> 200 Response

```json
{
  "actions": "string",
  "addresses": "string",
  "config": {},
  "cookies": "string",
  "created_at": 0,
  "logs": "string",
  "origin": "string",
  "scripts": "string",
  "self": "string",
  "status": "ENABLED",
  "token": "string",
  "updated_at": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-information-of-an-origin-of-the-user-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OriginOutput](#schemaoriginoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Update the configuration of an origin of the user in the region.

<a id="opIdupdate_configuration_origin_v1_origin_put"></a>

> Code samples

```bash
curl https://example.com/v1/origin \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {},
    "origin": "string"
  }'
```

`PUT /v1/origin`

### What
Modify the configuration metadata of the origin of the user in the selected region.

The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
 Hence, the protocol and domain of the origin must be the one where the javascript is loaded.

### Parameters
In the body of the request, add the `origin` of the user and the `config` parameter with the following format for the `origin`:1. Protocol: Can be ``http`` or ``https``.
2. Domain: The domain of the origin.

The `config` parameter is a JSON object containing the configuration of the origin. It only accepts the existing parameters obtained from the `GET` request of the origin. If the parameter is not present in the `config` object, it will fail to store it. It's not necessary to send all the parameters, only the ones that need to be updated.

### Result
The result is the JSON object with all the new values of the origin configuration.

### Errors
- a `404 Not Found` error if the origin token is not found.
- a `400 Bad Request` error if the origin does not have the correct format.
- a `400 Bad Request` error if the `config` parameter is not a JSON object or unknown parameters are sent.

It will return the API Global errors described in the API description.

> Body parameter

```json
{
  "config": {},
  "origin": "string"
}
```

<h3 id="update-the-configuration-of-an-origin-of-the-user-in-the-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Body_update_configuration_origin_v1_origin_put](#schemabody_update_configuration_origin_v1_origin_put)|true|none|
|» config|body|object|false|The configuration information to store in the origin.|
|» origin|body|string|true|The origin site to modify the configruation|

> Example responses

> 200 Response

```json
{}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="update-the-configuration-of-an-origin-of-the-user-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the address status of the origin of the user in the region.

<a id="opIdquery_origin_address_status_information_v1_origin_addresses_get"></a>

> Code samples

```bash
curl 'https://example.com/v1/origin/addresses?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/origin/addresses`

### What

Obtain the status that trigger the change in the status of the origin of a specific IP address. The status will also describe the current state of the status and the information that triggered the change.

The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
 Hence, the protocol and domain of the origin must be the one where the javascript is loaded.

### Parameters
In the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.
2. Domain: The domain of the origin.

Then, the origin must be urlencoded. Example:
```
https://example.com
```

```
https%3A%2F%2Fexample.com
```

The querystring must be like this:
```
?query=https%3A%2F%2Fexample.com
```

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to the request to obtain the full details of the status of an origin.
- ``addresses``: a list of JSON objects with the following fields:
    - ``address``: the IP address of the origin.
    - ``status``: the status of IP address for the given origin.
    - ``log_id``: the ID of the log that triggered the change in the status of the origin.
    - ``expiry``: the date and time when the origin status will expire in UNIX timestamp in milliseconds.
    - ``created_at``: the date and time when the origin status was created in UNIX timestamp in milliseconds.
    - ``updated_at``: the date and time when the origin status was last updated in UNIX timestamp in milliseconds.

### Errors
- a `404 Not Found` error if the origin is not found.
- a `400 Bad Request` error if the origin does not have the correct format.

It will return the API Global errors described in the API description.

<h3 id="get-the-address-status-of-the-origin-of-the-user-in-the-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The origin site to query|
|page|query|integer|false|The page to be returned|
|page_size|query|integer|false|The number of items per page|

> Example responses

> 200 Response

```json
{
  "addresses": [
    {
      "address": "string",
      "created_at": 0,
      "expiry": 0,
      "log_id": "string",
      "status": "string",
      "updated_at": 0
    }
  ],
  "page": 0,
  "page_size": 0,
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-address-status-of-the-origin-of-the-user-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OriginAddressStatusCollectionOutput](#schemaoriginaddressstatuscollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the information of the origins of the user in the region.

<a id="opIdquery_all_origin_information_v1_origin_all_get"></a>

> Code samples

```bash
curl https://example.com/v1/origin/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/origin/all`

### What
Obtain the attributes of all the origins of the user in the selected region. The purpose of this function is to display the information of configuration of the origins and also access to the live data of the origins.

The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
 Hence, the protocol and domain of the origin must be the one where the javascript is loaded.

### Parameters
No parameters are required.

### Result
The result is a list of JSON objects with the following fields:
- ``self``: the URI to the request to obtain all the origins of the user.
- ``origins``: A list of JSON objects with the following fields:
    - ``self``: the URI to the request to obtain the full details of an origin.
    - ``origin``: the protocol and the domain where the origin token is valid.
    - ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.
    - ``token``: the URI to the request to obtain the token of the origin.
    - ``data``: a JSON object containing all the parameters of the origin as key-value pairs.
    - ``logs``: the URI to the request to obtain the log activity in the origin.
    - ``addresses``: the URI to the request to obtain the list of IP addresses active in the origin.
    - ``cookies``: the URI to the request to obtain the list of cookies active in the origin.
    - ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.
    - ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.

### Errors
It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
{
  "origins": [
    {
      "actions": "string",
      "addresses": "string",
      "config": {},
      "cookies": "string",
      "created_at": 0,
      "logs": "string",
      "origin": "string",
      "scripts": "string",
      "self": "string",
      "status": "ENABLED",
      "token": "string",
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

<h3 id="get-the-information-of-the-origins-of-the-user-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OriginCollectionOutput](#schemaorigincollectionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the type of clients of the trafffic of the origin.

<a id="opIdquery_origin_traffic_client_v1_origin_client_analysis_get"></a>

> Code samples

```bash
curl 'https://example.com/v1/origin/client/analysis?query=string&interval=HOURLY&from_timestamp=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/origin/client/analysis`

### What
Obtain the type of clients of trhe traffic in the specified time range and interval. Thequery will return the number of requests and the different type of CLIENTs and CRAWLERs.

The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
 Hence, the protocol and domain of the origin must be the one where the javascript is loaded.

### Parameters
In the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.
2. Domain: The domain of the origin.

Then, the origin must be urlencoded. Example:
```
https://example.com
```

```
https%3A%2F%2Fexample.com
```

The querystring must be like this:
```
?query=https%3A%2F%2Fexample.com
```

To restrict the query to a specific time range, add the following parameters to the querystring:
- ``from_timestamp``: the start date and time of the analysis in UNIX timestamp in milliseconds.
- ``to_timestamp``: (Optional) the end date and time of the analysis in UNIX timestamp in milliseconds.
- ``interval``: (Optional) the interval of the analysis in minutes. The default value is 60 minutes (HOURLY). Possible values are: ``HOURLY``.

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to the request to obtain the traffic client analysis for the origin.
- ``from_timestamp``: the start date and time of the analysis in UNIX timestamp in milliseconds.
- ``to_timestamp``: the end date and time of the analysis in UNIX timestamp in milliseconds.
- ``interval``: the interval of the analysis. Possible values are: ``HOURLY``.
- ``data``: a JSON list with the following elements each one with the following fields:
    - ``timestamp``: the date and time of the analysis in UNIX timestamp in milliseconds.
    - ``total``: the total number of requests.
    - ``client_*``: the number of requests from a specific client. The possible clients are: ``browser``, ``crawler``, ``email``, ``library``, ``mobile_browser``, ``multimedia_player``, ``offline_browser``, ``unrecognized``, ``ua_anonymizer``, ``validator``, ``wap_browser``.
    - ``crawler_*``: the number of requests from a specific crawler. The possible crawlers are:``feed_fetcher``, ``link_checker``, ``marketing``, ``screenshot_creator``, ``search_engine_bot``,``site_monitor``, ``speed_tester``, ``tool``, ``uncategorized``, ``unrecognized``, ``virus_scanner``,``vulnerability_scanner``, ``web_scraper``.

### Errors
- a `404 Not Found` error if the origin token is not found.
- a `400 Bad Request` error if the origin does not have the correct format.

It will return the API Global errors described in the API description.

<h3 id="get-the-type-of-clients-of-the-trafffic-of-the-origin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The origin site to query|
|interval|query|string|true|The data inteval to aggregate the result dataset|
|from_timestamp|query|integer|true|A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after or equal to this value.|
|to_timestamp|query|integer|false|A UNIX timestamp in milliseconds to restrict the results of the query to entries logged before this value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|interval|HOURLY|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "client_browser": 0,
      "client_crawler": 0,
      "client_email": 0,
      "client_library": 0,
      "client_mobile_browser": 0,
      "client_multimedia_player": 0,
      "client_offline_browser": 0,
      "client_total": 0,
      "client_ua_anonymizer": 0,
      "client_unrecognized": 0,
      "client_validator": 0,
      "client_wap_browser": 0,
      "crawler_feed_fetcher": 0,
      "crawler_link_checker": 0,
      "crawler_marketing": 0,
      "crawler_screenshot_creator": 0,
      "crawler_search_engine_bot": 0,
      "crawler_site_monitor": 0,
      "crawler_speed_tester": 0,
      "crawler_tool": 0,
      "crawler_total": 0,
      "crawler_uncategorised": 0,
      "crawler_unrecognized": 0,
      "crawler_virus_scanner": 0,
      "crawler_vulnerability_scanner": 0,
      "crawler_web_scraper": 0,
      "timestamp": 0,
      "total": 0
    }
  ],
  "from_timestamp": 0,
  "interval": "string",
  "self": "string",
  "to_timestamp": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-type-of-clients-of-the-trafffic-of-the-origin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OriginClientAnalysisCollectionOutput](#schemaoriginclientanalysiscollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the tracking cookie ID status of the origin of the user in the region.

<a id="opIdquery_origin_cookie_id_status_information_v1_origin_cookies_get"></a>

> Code samples

```bash
curl 'https://example.com/v1/origin/cookies?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/origin/cookies`

### What

Obtain the status that trigger the change in the status of the origin of the cookie ID used to track the users. The status will also describe the current state of the status and the information that triggered the change.

The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
 Hence, the protocol and domain of the origin must be the one where the javascript is loaded.

### Parameters
In the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.
2. Domain: The domain of the origin.

Then, the origin must be urlencoded. Example:
```
https://example.com
```

```
https%3A%2F%2Fexample.com
```

The querystring must be like this:
```
?query=https%3A%2F%2Fexample.com
```

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to the request to obtain the full details of the status of an origin.
- ``addresses``: a list of JSON objects with the following fields:
    - ``cookie_id``: the ID of the tracking cookie for the origin.
    - ``status``: the status of tracking cookie ID for the given origin.
    - ``log_id``: the ID of the log that triggered the change in the status of the origin.
    - ``expiry``: the date and time when the origin status will expire in UNIX timestamp in milliseconds.
    - ``created_at``: the date and time when the origin status was created in UNIX timestamp in milliseconds.
    - ``updated_at``: the date and time when the origin status was last updated in UNIX timestamp in milliseconds.

### Errors
- a `404 Not Found` error if the origin is not found.
- a `400 Bad Request` error if the origin does not have the correct format.

It will return the API Global errors described in the API description.

<h3 id="get-the-tracking-cookie-id-status-of-the-origin-of-the-user-in-the-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The origin site to query|
|page|query|integer|false|The page to be returned|
|page_size|query|integer|false|The number of items per page|

> Example responses

> 200 Response

```json
{
  "cookie_ids": [
    {
      "cookie_id": "string",
      "created_at": 0,
      "expiry": 0,
      "log_id": "string",
      "status": "string",
      "updated_at": 0
    }
  ],
  "page": 0,
  "page_size": 0,
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-tracking-cookie-id-status-of-the-origin-of-the-user-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OriginCookieIdStatusCollectionOutput](#schemaorigincookieidstatuscollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the code snippets of an origin of the user in the region.

<a id="opIdquery_origin_scripts_v1_origin_scripts_get"></a>

> Code samples

```bash
curl 'https://example.com/v1/origin/scripts?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/origin/scripts`

### What
Obtain the code snippets of the origin of the user passed as argument in the selected region. The purpose of this function is to help the user to integrate the javascript library in their website with a preconfigured script that contains the origin token.

### Parameters
In the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.
2. Domain: The domain of the origin.

Then, the origin must be urlencoded. Example:
```
https://example.com
```

```
https%3A%2F%2Fexample.com
```

The querystring must be like this:
```
?query=https%3A%2F%2Fexample.com
```

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to the request to obtain the full details of an origin.
- ``detection``: code snippet to integrate into the website described in the origin to detect malicious activity.

### Errors
- a `404 Not Found` error if the origin token is not found.
- a `400 Bad Request` error if the origin does not have the correct format.

It will return the API Global errors described in the API description.

<h3 id="get-the-code-snippets-of-an-origin-of-the-user-in-the-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The origin site to query|

> Example responses

> 200 Response

```json
{
  "detection": "string",
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-code-snippets-of-an-origin-of-the-user-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OriginScriptsOutput](#schemaoriginscriptsoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the current cookie ID and IP address status of the origin of user in the region.

<a id="opIdquery_origin_status_v1_origin_status_post"></a>

> Code samples

```bash
curl 'https://example.com/v1/origin/status?query=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "192.0.2.1",
    "cookie_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/origin/status`

### What

Obtain the current status of the origin for a given IP address and/or cookie ID. The values can be correlated, but they are not required to be. The status will also describe the following information:
- `PASS`: The traffic should not be intercepted, but should be analyzed and a positive detection should trigger a change in the status.
- `BLOCK`: The traffic must be intercepted and redirected to a blocking page. Only a timeout of the IP address or Cookie ID, a solved challenge or a manual status change can change the status.
- `CHALLENGE`: The traffic must be intercepted and redirected to a page where the user must solve a challenge. If the challenge is succesfully solved the status will change to `PASS`. If the user fails to change the challenge a specific amount of times, the status can change to `BLOCK`.
- `BYPASS`: The traffic should not be tapped even if it is suspected to be malicious, as long as the timeout has not expired. When the timeout is reached, it should revert to a previous state instead of going to `PASS`.
- `IGNORE`: Whatever happens to the traffic of the user, it should not be tapped. Once the time expires, it should return to the state PASS.

The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
 Hence, the protocol and domain of the origin must be the one where the javascript is loaded.

### Parameters
In the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.
2. Domain: The domain of the origin.

Then, the origin must be urlencoded. Example:
```
https://example.com
```

```
https%3A%2F%2Fexample.com
```

The querystring must be like this:
```
?query=https%3A%2F%2Fexample.com
```

The body should have at least one of the following fields:
- `address`: The IP address of the user to query.
- `cookie_id`: The ID of the tracking cookie of the user to query.

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to the request to obtain the full details of the `cookie_id` and `address` status of an origin.
- ``cookie_id``: a JSON object with the following fields:
    - ``cookie_id``: the ID of the tracking cookie for the origin.
    - ``status``: the URI to the status detail of the cookie ID.
    - ``log_id``: (Optional) the ID of the log that triggered the change in the status of the origin.
    - ``expiry``: (Optional) the date and time when the origin status will expire in UNIX timestamp in milliseconds.
    - ``created_at``: (Optional) the date and time when the origin status was created in UNIX timestamp in milliseconds.
    - ``updated_at``: (Optional) the date and time when the origin status was last updated in UNIX timestamp in milliseconds.
- ``address``: a JSON object with the following fields:
    - ``address``: the address for the origin.
    - ``status``: the URI to the status detail of the cookie ID.
    - ``log_id``: (Optional) the ID of the log that triggered the change in the status of the origin.
    - ``expiry``: (Optional) the date and time when the origin status will expire in UNIX timestamp in milliseconds.
    - ``created_at``: (Optional) the date and time when the origin status was created in UNIX timestamp in milliseconds.
    - ``updated_at``: (Optional) the date and time when the origin status was last updated in UNIX timestamp in milliseconds.

### Errors
- a `404 Not Found` error if the origin is not found.
- a `400 Bad Request` error if the origin does not have the correct format.

It will return the API Global errors described in the API description.

> Body parameter

```json
{
  "address": "192.0.2.1",
  "cookie_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-the-current-cookie-id-and-ip-address-status-of-the-origin-of-user-in-the-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The origin site to query|
|body|body|[Body_query_origin_status_v1_origin_status_post](#schemabody_query_origin_status_v1_origin_status_post)|false|none|
|» address|body|string(ipv4) \| string(ipv6)|false|The IP address to query the status|
|» » *anyOf*|body|string(ipv4)|false|none|
|» » *anyOf*|body|string(ipv6)|false|none|
|» cookie_id|body|string(uuid)|false|The cookie id to query the status|

> Example responses

> 200 Response

```json
{
  "address": {
    "address": "string",
    "created_at": 0,
    "expiry": 0,
    "log_id": "string",
    "status": "string",
    "updated_at": 0
  },
  "cookie_id": {
    "cookie_id": "string",
    "created_at": 0,
    "expiry": 0,
    "log_id": "string",
    "status": "string",
    "updated_at": 0
  },
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-current-cookie-id-and-ip-address-status-of-the-origin-of-user-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OriginStatusOutput](#schemaoriginstatusoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get detail of a status available in the platform.

<a id="opIdquery_origin_status_detail_v1_origin_status_detail__status_id__get"></a>

> Code samples

```bash
curl https://example.com/v1/origin/status/detail/pass \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/origin/status/detail/{status_id}`

### What
Obtain the description of a status available in the platform.

### Parameters
A `status_id` parameter in the path of the request:
- `PASS`
- `BLOCK`
- `CHALLENGE`
- `BYPASS`
- `IGNORE`

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to the status detail.
- ``description``: a human readable description of the status.
- ``cardinality``: The number describing the cardinality of the status.

### Errors
- a `400 Bad Request` error if the origin status is not any of the available ones.

It will return the API Global errors described in the API description.

<h3 id="get-detail-of-a-status-available-in-the-platform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status_id|path|string|true|The status id to query the details|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status_id|pass|
|status_id|block|
|status_id|challenge|
|status_id|bypass|
|status_id|ignore|

> Example responses

> 200 Response

```json
{
  "cardinality": 0,
  "description": "string",
  "self": "string",
  "status": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-detail-of-a-status-available-in-the-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OriginStatusDetailsOutput](#schemaoriginstatusdetailsoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the list of different status available in the platform.

<a id="opIdquery_origin_status_details_v1_origin_status_details_get"></a>

> Code samples

```bash
curl https://example.com/v1/origin/status/details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/origin/status/details`

### What
Obtain the full list and description of the different status available in the platform.

### Parameters
No parameters needed.

### Result
The result is a JSON list with the following fields:
- ``self``: the URI to the request to obtain the list.
- ``list``: a JSON list with the following elements each one with the following fields:
    - ``self``: the URI to the status detail.
    - ``description``: a human readable description of the status.
    - ``cardinality``: The number describing the cardinality of the status.

### Errors
It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "cardinality": 0,
      "description": "string",
      "self": "string",
      "status": "string"
    }
  ],
  "self": "string"
}
```

<h3 id="get-the-list-of-different-status-available-in-the-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OriginStatusDetailsCollectionOutput](#schemaoriginstatusdetailscollectionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the traffic analysis of the origin.

<a id="opIdquery_origin_traffic_analysis_v1_origin_traffic_analysis_get"></a>

> Code samples

```bash
curl 'https://example.com/v1/origin/traffic/analysis?query=string&interval=HOURLY&from_timestamp=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/origin/traffic/analysis`

### What
Obtain the traffic analysis of the origin in the specified time range and interval. Theanalysis will return the number of requests and the anomalies detected like:

- number of requests
- overall score
- malicious synthetic traffic (bad bot traffic)
- IP in a denylist
- IP in a datacenter
- user uses a headless webdriver
- Autonomous System (ASN) of the IP is risky
- The location of the IP address and the ASN is different

The origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
 Hence, the protocol and domain of the origin must be the one where the javascript is loaded.

### Parameters
In the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.
2. Domain: The domain of the origin.

Then, the origin must be urlencoded. Example:
```
https://example.com
```

```
https%3A%2F%2Fexample.com
```

The querystring must be like this:
```
?query=https%3A%2F%2Fexample.com
```

To restrict the analysis to a specific time range, add the following parameters to the querystring:
- ``from_timestamp``: the start date and time of the analysis in UNIX timestamp in milliseconds.
- ``to_timestamp``: (Optional) the end date and time of the analysis in UNIX timestamp in milliseconds.
- ``interval``: (Optional) the interval of the analysis in minutes. The default value is 60 minutes (HOURLY). Possible values are: ``HOURLY``.

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to the request to obtain the traffic analysis for the origin.
- ``from_timestamp``: the start date and time of the analysis in UNIX timestamp in milliseconds.
- ``to_timestamp``: the end date and time of the analysis in UNIX timestamp in milliseconds.
- ``interval``: the interval of the analysis. Possible values are: ``HOURLY``.
- ``data``: a JSON list with the following elements each one with the following fields:
    - ``timestamp``: the date and time of the analysis in UNIX timestamp in milliseconds.
    - ``total``: the total number of requests.
    - ``score_high``: the number of requests with a high score (bad traffic).
    - ``bots``: the number of requests from bad bots.
    - ``denylists``: the number of requests from IPs in a denylist.
    - ``datacenters``: the number of requests from IPs in a datacenter.
    - ``webdrivers``: the number of requests from IPs using a headless webdriver.
    - ``asn_risky``: the number of requests from IPs with a risky ASN.
    - ``network_country_mismatches``: the number of requests from IPs with a different location than the ASN.

### Errors
- a `404 Not Found` error if the origin token is not found.
- a `400 Bad Request` error if the origin does not have the correct format.

It will return the API Global errors described in the API description.

<h3 id="get-the-traffic-analysis-of-the-origin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The origin site to query|
|interval|query|string|true|The data inteval to aggregate the result dataset|
|from_timestamp|query|integer|true|A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after or equal to this value.|
|to_timestamp|query|integer|false|A UNIX timestamp in milliseconds to restrict the results of the query to entries logged before this value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|interval|HOURLY|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "asn_risky": 0,
      "bots": 0,
      "datacenters": 0,
      "denylists": 0,
      "network_country_mismatches": 0,
      "score_high": 0,
      "timestamp": 0,
      "total": 0,
      "webdrivers": 0
    }
  ],
  "from_timestamp": 0,
  "interval": "string",
  "self": "string",
  "to_timestamp": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-traffic-analysis-of-the-origin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OriginTrafficAnalysisCollectionOutput](#schemaorigintrafficanalysiscollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

<h1 id="threatjammercom-user-api-origin-token-management-in-this-region">Origin Token management in this region</h1>

## Get the information of an origin token of the user in the region.

<a id="opIdquery_origin_token_info_v1_origin_token_post"></a>

> Code samples

```bash
curl https://example.com/v1/origin_token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "origin_token_id": "string"
  }'
```

`POST /v1/origin_token`

### What
Obtain the attributes of the given origin token of the user in the selected region. The purpose of this function is to show what protocol and domain is linked to the token.

The origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
 Hence, the protocol and domain of the origin must be the one where the javascript is loaded.

### Parameters
The Origin Token is required in the body of the request in the parameter `origin_token_id`.

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to individual origin token information.
- ``region_id``: the name of the region where the origin token is valid.
- ``origin``: the protocol and the domain where the origin token is valid.
- ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.
- ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.
- ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.

### Errors
It will return the API Global errors described in the API description.

> Body parameter

```json
{
  "origin_token_id": "string"
}
```

<h3 id="get-the-information-of-an-origin-token-of-the-user-in-the-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Body_query_origin_token_info_v1_origin_token_post](#schemabody_query_origin_token_info_v1_origin_token_post)|true|none|
|» origin_token_id|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": 0,
  "origin": "string",
  "region_id": "string",
  "self": "string",
  "status": "ENABLED",
  "updated_at": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-information-of-an-origin-token-of-the-user-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OriginTokenOutput](#schemaorigintokenoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Delete an origin token of the user in the region.

<a id="opIddelete_token_v1_origin_token_delete"></a>

> Code samples

```bash
curl https://example.com/v1/origin_token \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "origin_token_id": "string"
  }'
```

`DELETE /v1/origin_token`

### What
Deletes the origin token passed as argument of the user in the selected region. Once the token is deleted, it will no longer be valid and the protocol and domain of the origin will no longer be under protection.

To delete an origin token, the user must be the owner and the token must be ``DISABLED`` first.

### Parameters
The Origin Token is required in the body of the request in the parameter `origin_token_id`.

### Result
If successful, the result will be an empty response with a status code of `204 No Content`.

### Errors
It will return the API Global errors described in the API description.

It will also return the following errors:
- a `404 Not Found` error if the origin token is not found.
- a `409 Conflict` error if the origin token is not disabled.

> Body parameter

```json
{
  "origin_token_id": "string"
}
```

<h3 id="delete-an-origin-token-of-the-user-in-the-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Body_delete_token_v1_origin_token_delete](#schemabody_delete_token_v1_origin_token_delete)|true|none|
|» origin_token_id|body|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-an-origin-token-of-the-user-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the information of the origin tokens of the user in the region.

<a id="opIdquery_all_origin_tokens_in_the_region_v1_origin_token_all_get"></a>

> Code samples

```bash
curl https://example.com/v1/origin_token/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/origin_token/all`

### What
Obtain the attributes of all the origin tokens of the user in the selected region. The purpose of this function is to show what protocol and domain is linked to all the tokens.

The origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
 Hence, the protocol and domain of the origin must be the one where the javascript is loaded.

### Parameters
No parameters are required.

### Result
The result is a list of JSON objects with the following fields:
- ``self``: the URI to individual origin token information.
- ``region_id``: the name of the region where the origin token is valid.
- ``origin``: the protocol and the domain where the origin token is valid.
- ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.
- ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.
- ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.

### Errors
It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
{
  "self": "string",
  "tokens": [
    {
      "created_at": 0,
      "origin": "string",
      "region_id": "string",
      "self": "string",
      "status": "ENABLED",
      "updated_at": 0
    }
  ]
}
```

<h3 id="get-the-information-of-the-origin-tokens-of-the-user-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OriginTokenCollectionOutput](#schemaorigintokencollectionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Disable a enabled origin token of the user in the region.

<a id="opIddisable_origin_token_v1_origin_token_disable_put"></a>

> Code samples

```bash
curl https://example.com/v1/origin_token/disable \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "origin_token_id": "string"
  }'
```

`PUT /v1/origin_token/disable`

### What
Disable an enabled origin token passed as argument of the user in the selected region. When a token is enabled, it will participate in the protection of the origin protocol and domain. If the token is disabled, it will not participate in the protection of the origin protocol and domain.

To disable an origin token, the user must be the owner. If the token is already disabled, the function will not perform any action. If the token is enabled, it will be disabled.

### Parameters
The Origin Token is required in the body of the request in the parameter `origin_token_id`.

### Result
If successful, the result will be an empty response with a status code of `204 No Content`.

### Errors
It will return the API Global errors described in the API description.

It will also return the following errors:
- a `404 Not Found` error if the origin token is not found.

> Body parameter

```json
{
  "origin_token_id": "string"
}
```

<h3 id="disable-a-enabled-origin-token-of-the-user-in-the-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Body_disable_origin_token_v1_origin_token_disable_put](#schemabody_disable_origin_token_v1_origin_token_disable_put)|true|none|
|» origin_token_id|body|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="disable-a-enabled-origin-token-of-the-user-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Enable a disabled origin token of the user in the region.

<a id="opIdenable_origin_token_v1_origin_token_enable_put"></a>

> Code samples

```bash
curl https://example.com/v1/origin_token/enable \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "origin_token_id": "string"
  }'
```

`PUT /v1/origin_token/enable`

### What
Enable a disabled origin token passed as argument of the user in the selected region. When a token is enabled, it will participate in the protection of the origin protocol and domain. If the token is disabled, it will not participate in the protection of the origin protocol and domain.

To enable an origin token, the user must be the owner. If the token is already enabled, the function will not perform any action. If the token is disabled, it will be enabled.

### Parameters
The Origin Token is required in the body of the request in the parameter `origin_token_id`.

### Result
If successful, the result will be an empty response with a status code of `204 No Content`.

### Errors
It will return the API Global errors described in the API description.

It will also return the following errors:
- a `404 Not Found` error if the origin token is not found.

> Body parameter

```json
{
  "origin_token_id": "string"
}
```

<h3 id="enable-a-disabled-origin-token-of-the-user-in-the-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Body_enable_origin_token_v1_origin_token_enable_put](#schemabody_enable_origin_token_v1_origin_token_enable_put)|true|none|
|» origin_token_id|body|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="enable-a-disabled-origin-token-of-the-user-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Create an origin token of the user in the region.

<a id="opIdcreate_a_new_origin_token_v1_origin_token_new_post"></a>

> Code samples

```bash
curl https://example.com/v1/origin_token/new \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "origin": "string"
  }'
```

`POST /v1/origin_token/new`

### What
Creates a new origin token for the user passing as argument the origin. The origin parameter is the protocol and the domain where the origin token is valid.

The origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.
 Hence, the protocol and domain of the origin must be the one where the javascript is loaded.

### Parameters
The origin with the protocol and domain is required in the body of the request in the parameter ``origin``. The allowed protocols are ``https://``, and ``http://``.

### Result
The result is a JSON object with the new origin token and the following fields:
- ``self``: the URI to individual origin token information.
- ``region_id``: the name of the region where the origin token is valid.
- ``origin``: the protocol and the domain where the origin token is valid.
- ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.
- ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.
- ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.

### Errors
It will return the API Global errors described in the API description.

It will also return the following errors:
- a `400 Bad Request` error if the origin does not have the correct format.
- a `409 Conflict` error if the origin token already exists.

> Body parameter

```json
{
  "origin": "string"
}
```

<h3 id="create-an-origin-token-of-the-user-in-the-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OriginTokenInput](#schemaorigintokeninput)|true|none|
|» origin|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": 0,
  "origin": "string",
  "region_id": "string",
  "self": "string",
  "status": "ENABLED",
  "updated_at": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="create-an-origin-token-of-the-user-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OriginTokenOutput](#schemaorigintokenoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

<h1 id="threatjammercom-user-api-data-sources">Data sources</h1>

## Get the full information of all the source lists for the subscription level given.

<a id="opIdget_all_sources_v1_source_ip_get"></a>

> Code samples

```bash
curl https://example.com/v1/source/ip \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/source/ip`

### What
Obtain the full meta information of all the source lists available for the subscription level of the user. A source list is a collection of resources combined together with other sources to create a dataset.

 A source list has some unique properties. The most relevant ones are the score and risk. The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.

 Each source list groups several collections of resource by the lapse of time or time range that they are related to according to their age. Each group by time range has a score and a risk.

### Parameters
The endpoint does not accept any parameter. The subscription level is obtained from the token provided in the header.

### Result
The result is a JSON object with a self reference and a list of JSON objects with the following fields:
- ``self``: the URI to individual source list information.
- ``dataset``: the URI to the dataset that aggregates the resources of this list.
- ``name``: the unique name of the source list. Must be uppercase letters, numbers and underscores.
- ``description``: a human readable long description of the source list.
- ``source``: Origin of the list.
- ``url``: The URL where the source list was found.
- ``refresh``: The refresh period of the source list.
- ``minimum_score``: The minimum score found in the different source list time ranges. Is in the range 0-99.
- ``maximum_score``: The maximum score found in the different source list time ranges. Is in the range 0-99.
- ``minimum_risk``: The minimum human readable risk score found in the different source list time ranges. Can be UNKNOWN, LOW, MEDIUM or HIGH.
- ``maximum_risk``: The maximum human readable risk score found in the different source list time ranges. Can be UNKNOWN, LOW, MEDIUM or HIGH.
- ``time_range``: the list of URIs pointing to the different source list time ranges information.
- ``updated_at``: The UNIX timestamp in milliseconds of last update of the source list.

### Errors
It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
{
  "self": "string",
  "sources": [
    {
      "dataset": "string",
      "description": "string",
      "maximum_risk": "UNKNOWN",
      "maximum_score": 0,
      "minimum_risk": "UNKNOWN",
      "minimum_score": 0,
      "name": "string",
      "refresh": "1H",
      "self": "string",
      "source": "string",
      "time_ranges": [
        "string"
      ],
      "updated_at": 0,
      "url": "string"
    }
  ]
}
```

<h3 id="get-the-full-information-of-all-the-source-lists-for-the-subscription-level-given-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The server will return a valid answer in the following cases:|[SourceCollectionOutput](#schemasourcecollectionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the full information of the source list given as argument.

<a id="opIdget_source_info_v1_source_ip__source__get"></a>

> Code samples

```bash
curl https://example.com/v1/source/ip/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/source/ip/{source}`

### What
Obtain the full meta information of the source list given as argument. A source list is a collection of resources combined together with other sources to create a dataset. A source list has some unique properties. The most relevant ones are the score and risk. The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.

 Each source list groups several collections of resource by the lapse of time or time range that they are related to according to their age. Each group by time range has a score and a risk.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``source``: (Mandatory) The code name that identifies uniquely the source list in the platform. It must be composed of uppercase letters, numbers and underscores.

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to individual source list information.
- ``dataset``: the URI to the dataset that aggregates the resources of this list.
- ``name``: the unique name of the source list. Must be uppercase letters, numbers and underscores.
- ``description``: a human readable long description of the source list.
- ``source``: Origin of the list.
- ``url``: The URL where the source list was found.
- ``refresh``: The refresh period of the source list.
- ``minimum_score``: The minimum score found in the different source list time ranges. Is in the range 0-99.
- ``maximum_score``: The maximum score found in the different source list time ranges. Is in the range 0-99.
- ``minimum_risk``: The minimum human readable risk score found in the different source list time ranges. Can be UNKNOWN, LOW, MEDIUM or HIGH.
- ``maximum_risk``: The maximum human readable risk score found in the different source list time ranges. Can be UNKNOWN, LOW, MEDIUM or HIGH.
- ``time_range``: the list of URIs pointing to the different source list time ranges information.
- ``updated_at``: The UNIX timestamp in milliseconds of last update of the source list.

### Errors
- a `404 Not Found` error if the source list code name was not found.
- a `422 Unprocessable Entity` error if source list code name does not follow the naming convention.

It will return the API Global errors described in the API description.

<h3 id="get-the-full-information-of-the-source-list-given-as-argument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "dataset": "string",
  "description": "string",
  "maximum_risk": "UNKNOWN",
  "maximum_score": 0,
  "minimum_risk": "UNKNOWN",
  "minimum_score": 0,
  "name": "string",
  "refresh": "1H",
  "self": "string",
  "source": "string",
  "time_ranges": [
    "string"
  ],
  "updated_at": 0,
  "url": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-full-information-of-the-source-list-given-as-argument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The server will return a valid answer in the following cases:|[v1__models__source__SourceOutput](#schemav1__models__source__sourceoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the information of the source list given for a specific time range.

<a id="opIdget_source_and_timerange_info_v1_source_ip__source__range__time_range__get"></a>

> Code samples

```bash
curl https://example.com/v1/source/ip/string/range/1H \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/source/ip/{source}/range/{time_range}`

### What
Obtain the meta information of the source list and the time range given as arguments. A source list is a collection of resources combined together with other sources to create a dataset. A source list has some unique properties. The most relevant ones are the score and risk. The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.

 The time ranges or lapse of time of each source are how the resources are stored according to their age. Each group by time range has a score and a risk.

### Parameters
The endpoint accepts the following two parameters in the path:
- ``source``: (Mandatory) The code name that identifies uniquely the source list in the platform. It must be composed of uppercase letters, numbers and underscores.
- ``time_range``: (Mandatory) The code name that identifies uniquely the time ranges. Must be: 1H, 6H, 12H, 1D, 7D, 30D, 90D, 180D y 365D.

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to individual source list and time range information.
- ``source``: the URI to individual source list information.
- ``items``: Number of elements in the source list in the time range given.
- ``lapse``: The lapse of time or time range of the specific source list. Can be 1H, 6H, 12H, 1D, 7D, 30D, 90D, 180D or 365D.
- ``score``: The score found in the source list time range. Is in the range 0-99.
- ``risk``: The human readable risk score found in the source list time range. Can be UNKNOWN, LOW, MEDIUM or HIGH.
- ``updated_at``: The UNIX timestamp in milliseconds of last update of the source list.

### Errors
- a `404 Not Found` error if the source list code name was not found.
- a `404 Not Found` error if the time range was not found.
- a `422 Unprocessable Entity` error if source list code name or time ranges does not follow the naming convention.

It will return the API Global errors described in the API description.

<h3 id="get-the-information-of-the-source-list-given-for-a-specific-time-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|none|
|time_range|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|time_range|1H|
|time_range|6H|
|time_range|12H|
|time_range|1D|
|time_range|7D|
|time_range|30D|
|time_range|90D|
|time_range|180D|
|time_range|365D|

> Example responses

> 200 Response

```json
{
  "items": 0,
  "lapse": "1H",
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string",
  "source": "string",
  "updated_at": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-information-of-the-source-list-given-for-a-specific-time-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The server will return a valid answer in the following cases:|[SourceTimeRangeOutput](#schemasourcetimerangeoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

<h1 id="threatjammercom-user-api-authentication-token-management-in-this-region">Authentication Token management in this region</h1>

## Get the information of the user's token in the region.

<a id="opIdquery_token_info_v1_token_get"></a>

> Code samples

```bash
curl https://example.com/v1/token \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/token`

### What
Obtain the list of all the token attributes of the current user in the selected region. The purpose of this function is to show the current values of the user's quota.

### Parameters
No parameters are required. The token is obtained automatically from the `Bearer` in the header.

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to individual token information.
- ``region_id``: the name of the region where the token is valid.
- ``last_month_bucket_init_value``: the initial value of the monthly bucket.
- ``last_month_bucket_value``: the current value of consumed quota in the monthly bucket.
- ``last_month_bucket_refresh``: Unix timestamp in milliseconds of the next monthly bucket reset.
- ``last_minute_bucket_init_value``: the initial value of the per minute bucket.
- ``last_minute_bucket_value``: the current value of consumed quota in the per minute bucket.
- ``last_minute_bucket_refresh``: Unix timestamp in milliseconds of the next per minute bucket reset.
- ``last_minute_bucket_refill_ratio``: the number of tokens to add every second to the per minute bucket.
- ``status``: the status of the token. The only allowed value is ``ENABLED``.
- ``created_at``: the date and time when the token was created in UNIX timestamp in milliseconds.
- ``updated_at``: the date and time when the token was last updated in UNIX timestamp in milliseconds.

### Errors
It will return the API Global errors described in the API description.

> Example responses

> 200 Response

```json
{
  "created_at": 0,
  "last_minute_bucket_init_value": 0,
  "last_minute_bucket_refill_ratio": 0,
  "last_minute_bucket_refresh": 0,
  "last_minute_bucket_value": 0,
  "last_month_bucket_init_value": 0,
  "last_month_bucket_refresh": 0,
  "last_month_bucket_value": 0,
  "region_id": "string",
  "self": "string",
  "status": "ENABLED",
  "updated_at": 0
}
```

<h3 id="get-the-information-of-the-users-token-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TokenOutput](#schematokenoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the activity information of the token in the region.

<a id="opIdquery_token_activity_v1_token_activity_get"></a>

> Code samples

```bash
curl https://example.com/v1/token/activity \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/token/activity`

### What
Obtain the list of all the activity events of the current user in the selected region. The purpose of this function is to show what actions performed a user with the specific token.

### Parameters
The following pagination parameters are required as query string parameters:
- ``page``: (Optional) the page number to retrieve. The first page is 1. Default is 1.
- ``page_size``: (Optional) the number of items per page. Default is 20.

The token is obtained automatically from the `Bearer` in the header.

### Result
The result is a JSON object with the following fields:
- ``self``: the URI to all activities of the token.
- ``activities``: a list of activities performed by the user with the token.
    - ``self``: the URI to individual activity information.
    - ``event``: ID of the reference of the event type.
    - ``description``: Human readable description of the event.
    - ``data``: the payload of the event. It can be empty.
    - ``source``: A JSON object with the following fields:
        - ``address``: the IP address of the client.
        - ``ua_string``: the user agent string of the client.
        - ``status_code``: the HTTP status code of the response.
        - ``uri``: the URI of the request.
        - ``body``: the body of the request.
        - ``method``: the HTTP method of the request.
    - ``created_at``: the date and time when the token was created in UNIX timestamp in milliseconds.

### Errors
It will return the API Global errors described in the API description.

<h3 id="get-the-activity-information-of-the-token-in-the-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|The page to be returned|
|page_size|query|integer|false|The number of items per page|

> Example responses

> 200 Response

```json
{
  "activities": [
    {
      "created_at": 0,
      "data": {},
      "description": "string",
      "event": "string",
      "self": "string",
      "source": {
        "address": "string",
        "body": "string",
        "method": "string",
        "status_code": 0,
        "ua_string": "string",
        "uri": "string"
      }
    }
  ],
  "page": 0,
  "page_size": 0,
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-activity-information-of-the-token-in-the-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ActivityCollectionOutput](#schemaactivitycollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

<h1 id="threatjammercom-user-api-user-agent">User Agent</h1>

## Get the information found in a set of User Agents.

<a id="opIdparse_user_agents_v1_ua_post"></a>

> Code samples

```bash
curl https://example.com/v1/ua \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`POST /v1/ua`

### What
Get the information found in the list of User Agents passed as argument. This information includes:
- Type
- Render Engine
- Version
- Vendor
- Operating System
- Device
- How common is the agent worldwide

### Parameters
A list of User Agents are required in the body of the request.

### Result
The result contains a list of the result for each User Agent, with the following data set:

The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``string``:  The full user agent string passed as argument.
- ``classification``: The classification of the user agent. It can be one of the following: ``CRAWLER``, ``CLIENT``, ``UNKNOWN``.
- ``type``: An URI to the type of user agent used to identify the client (browser, bot, crawler, etc.).
- ``agent``: Name of the agent and the version, if any.
- ``engine``: Agent render engine.
- ``version``: Version of the agent.
- ``latest``: Latests known version of the agent.
- ``family``: URI to the family of the agent.
- ``vendor``: URI to the vendor or company that produces the agent.
- ``os``: URI to the operating system used by the agent.
- ``device``: URI to the device used by the agent.
- ``frequent``: If the agent is frequently used worlwide or not. The values are ``COMMON``, ``RARE``, and ``UNKNOWN``.


### Errors
The endpoint will return the API Global errors described in the API description.

> Body parameter

```json
[
  "string"
]
```

<h3 id="get-the-information-found-in-a-set-of-user-agents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "agent": "string",
      "classification": "CRAWLER",
      "device": "string",
      "engine": "string",
      "family": "string",
      "frequent": "COMMON",
      "latest": "string",
      "os": "string",
      "self": "string",
      "string": "string",
      "type": "string",
      "vendor": "string",
      "version": "string"
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-information-found-in-a-set-of-user-agents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The server will return a valid answer in the following cases:|[UACollectionOutput](#schemauacollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the information found in the set of User Agents uploaded.

<a id="opIdparse_user_agents_csv_v1_ua_csv_post"></a>

> Code samples

```bash
curl https://example.com/v1/ua/csv \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'csv_file=@/path/to/file'
```

`POST /v1/ua/csv`

### What
Get the information found in the list of User Agents uploaded as a CSV file. This information includes:
- Type
- Render Engine
- Version
- Vendor
- Operating System
- Device
- How common is the agent worldwide

### Parameters
- A text file with a list of User Agents.
- A header `Content-Type: multipart/form-data` is required.

Example:
```
curl -X 'POST' \
  'https://dublin.api.threatjammer.com/v1/ua/csv' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: multipart/form-data' \
  -F 'csv_file=@YOUR_TEXT_FILE;type=text/csv'
```

### Result
The result contains a list of the result for each User Agent, with the following data set:

The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``string``:  The full user agent string passed as argument.
- ``classification``: The classification of the user agent. It can be one of the following: ``CRAWLER``, ``CLIENT``, ``UNKNOWN``.
- ``type``: An URI to the type of user agent used to identify the client (browser, bot, crawler, etc.).
- ``agent``: Name of the agent and the version, if any.
- ``engine``: Agent render engine.
- ``version``: Version of the agent.
- ``latest``: Latests known version of the agent.
- ``family``: URI to the family of the agent.
- ``vendor``: URI to the vendor or company that produces the agent.
- ``os``: URI to the operating system used by the agent.
- ``device``: URI to the device used by the agent.
- ``frequent``: If the agent is frequently used worlwide or not. The values are ``COMMON``, ``RARE``, and ``UNKNOWN``.


### Errors
The endpoint will return the API Global errors described in the API description.

> Body parameter

```yaml
csv_file: string
```

<h3 id="get-the-information-found-in-the-set-of-user-agents-uploaded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Body_parse_user_agents_csv_v1_ua_csv_post](#schemabody_parse_user_agents_csv_v1_ua_csv_post)|true|none|
|» csv_file|body|string(binary)|true|The CSV file with the User Agents to parse|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "agent": "string",
      "classification": "CRAWLER",
      "device": "string",
      "engine": "string",
      "family": "string",
      "frequent": "COMMON",
      "latest": "string",
      "os": "string",
      "self": "string",
      "string": "string",
      "type": "string",
      "vendor": "string",
      "version": "string"
    }
  ],
  "self": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-information-found-in-the-set-of-user-agents-uploaded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The server will return a valid answer in the following cases:|[UACollectionOutput](#schemauacollectionoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the information of the device of a user agent.

<a id="opIdquery_device_by_code_v1_ua_device__code__get"></a>

> Code samples

```bash
curl https://example.com/v1/ua/device/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/ua/device/{code}`

### What
Obtain the details of a device of a User Agent.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``code``: (Mandatory) The code that identifies uniquely the device origin of a User Agent. The value must be an alphanumeric upper case string.


### Result
The result is a JSON object with the following structure:
- ``self``: the URI to the device.
- ``description``: the human readable description of the device.
- ``code``: the internal code of the device in the system.

### Errors
- a `422 Unprocessable Entity` error if the code is not one of the available.

It will also return the API Global errors described in the API description.

<h3 id="get-the-information-of-the-device-of-a-user-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "description": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-information-of-the-device-of-a-user-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DeviceOutput](#schemadeviceoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the information of the family of a user agent.

<a id="opIdquery_family_by_code_v1_ua_family__code__get"></a>

> Code samples

```bash
curl https://example.com/v1/ua/family/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/ua/family/{code}`

### What
Obtain the details of a family of a User Agent.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``code``: (Mandatory) The code that identifies uniquely the family of a User Agent. The value must be an alphanumeric upper case string.


### Result
The result is a JSON object with the following structure:
- ``self``: the URI to the family.
- ``description``: the human readable description of the famly.
- ``code``: the internal code of the family in the system.

### Errors
- a `422 Unprocessable Entity` error if the code is not one of the available.

It will also return the API Global errors described in the API description.

<h3 id="get-the-information-of-the-family-of-a-user-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "description": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-information-of-the-family-of-a-user-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[FamilyOutput](#schemafamilyoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the information of the Operating System of a user agent.

<a id="opIdquery_os_by_code_v1_ua_os__code__get"></a>

> Code samples

```bash
curl https://example.com/v1/ua/os/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/ua/os/{code}`

### What
Obtain the details of the Operating System of a User Agent.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``code``: (Mandatory) The code that identifies uniquely the Operating System at the origin of a User Agent. The value must be an alphanumeric upper case string.


### Result
The result is a JSON object with the following structure:
- ``self``: the URI to the OS.
- ``description``: the human readable description of the OS.
- ``code``: the internal code of the OS in the system.
- ``family``: the family of the OS.
- ``vendor``: the vendor or manufacturer of the OS.

### Errors
- a `422 Unprocessable Entity` error if the code is not one of the available.

It will also return the API Global errors described in the API description.

<h3 id="get-the-information-of-the-operating-system-of-a-user-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "description": "string",
  "family": "string",
  "vendor": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-information-of-the-operating-system-of-a-user-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OSOutput](#schemaosoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the information of the type of a user agent.

<a id="opIdquery_type_by_code_v1_ua_type__code__get"></a>

> Code samples

```bash
curl https://example.com/v1/ua/type/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/ua/type/{code}`

### What
Obtain the details of a type of a User Agent.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``code``: (Mandatory) The code that identifies uniquely the type of a User Agent. The value must be an alphanumeric upper case string.


### Result
The result is a JSON object with the following structure:
- ``self``: the URI to the type.
- ``description``: the human readable description of the type.
- ``code``: the internal code of the type in the system.
- ``type``: the type of the User Agent. Can be ``INTERACTIVE``, ``CRAWLER`` or ``UNKNOWN`` if the type is not known.

### Errors
- a `422 Unprocessable Entity` error if the code is not one of the available.

It will also return the API Global errors described in the API description.

<h3 id="get-the-information-of-the-type-of-a-user-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "description": "string",
  "type": "INTERACTIVE"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-information-of-the-type-of-a-user-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TypeOutput](#schematypeoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the information of the vendor of a user agent.

<a id="opIdquery_vendor_by_code_v1_ua_vendor__code__get"></a>

> Code samples

```bash
curl https://example.com/v1/ua/vendor/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/ua/vendor/{code}`

### What
Obtain the details of a vendor of a User Agent.

### Parameters
The endpoint accepts only the following parameter in the path:
- ``code``: (Mandatory) The code that identifies uniquely the vendor or manufacurer of a User Agent. The value must be an alphanumeric upper case string.


### Result
The result is a JSON object with the following structure:
- ``self``: the URI to the vendor.
- ``description``: the human readable description of the vendor.
- ``code``: the internal code of the vendor in the system.

### Errors
- a `422 Unprocessable Entity` error if the code is not one of the available.

It will also return the API Global errors described in the API description.

<h3 id="get-the-information-of-the-vendor-of-a-user-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "description": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-information-of-the-vendor-of-a-user-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VendorOutput](#schemavendoroutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Get the information found in an User Agent.

<a id="opIdparse_user_agent_v1_ua__user_agent_urlencoded__get"></a>

> Code samples

```bash
curl https://example.com/v1/ua/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/ua/{user_agent_urlencoded}`

### What
Get the information found in the User Agent passed as argument. This information includes:
- Type
- Render Engine
- Version
- Vendor
- Operating System
- Device
- How common is the agent worldwide


### Parameters
The only argument accepted in the query string is an URL encoded User Agent string.

### Result
The result contains the following set of data:

The result is a JSON object with the following structure:
- ``self``: the URI of the API call
- ``string``:  The full user agent string passed as argument.
- ``classification``: The classification of the user agent. It can be one of the following: ``CRAWLER``, ``CLIENT``, ``UNKNOWN``.
- ``type``: An URI to the type of user agent used to identify the client (browser, bot, crawler, etc.).
- ``agent``: Name of the agent and the version, if any.
- ``engine``: Agent render engine.
- ``version``: Version of the agent.
- ``latest``: Latests known version of the agent.
- ``family``: URI to the family of the agent.
- ``vendor``: URI to the vendor or company that produces the agent.
- ``os``: URI to the operating system used by the agent.
- ``device``: URI to the device used by the agent.
- ``frequent``: If the agent is frequently used worlwide or not. The values are ``COMMON``, ``RARE``, and ``UNKNOWN``.


### Errors
The endpoint will return the API Global errors described in the API description.

<h3 id="get-the-information-found-in-an-user-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_agent_urlencoded|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "agent": "string",
  "classification": "CRAWLER",
  "device": "string",
  "engine": "string",
  "family": "string",
  "frequent": "COMMON",
  "latest": "string",
  "os": "string",
  "self": "string",
  "string": "string",
  "type": "string",
  "vendor": "string",
  "version": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-information-found-in-an-user-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The server will return a valid answer in the following cases:|[UAOutput](#schemauaoutput)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

# Schemas

<h2 id="tocS_AclGroupOriginCollectionOutput">AclGroupOriginCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaclgrouporigincollectionoutput"></a>
<a id="schema_AclGroupOriginCollectionOutput"></a>
<a id="tocSaclgrouporigincollectionoutput"></a>
<a id="tocsaclgrouporigincollectionoutput"></a>

```json
{
  "lists": [
    {
      "created_at": 0,
      "origin": "string",
      "self": "string",
      "status": "INACTIVE",
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lists|[[AclGroupOriginOutput](#schemaaclgrouporiginoutput)]|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_AclGroupOriginOutput">AclGroupOriginOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaclgrouporiginoutput"></a>
<a id="schema_AclGroupOriginOutput"></a>
<a id="tocSaclgrouporiginoutput"></a>
<a id="tocsaclgrouporiginoutput"></a>

```json
{
  "created_at": 0,
  "origin": "string",
  "self": "string",
  "status": "INACTIVE",
  "updated_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|true|none|none|
|origin|string|true|none|none|
|self|string|true|none|none|
|status|string|true|none|none|
|updated_at|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|INACTIVE|
|status|ACTIVE|
|status|EXPIRED|

<h2 id="tocS_AclListCollectionOutput">AclListCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaacllistcollectionoutput"></a>
<a id="schema_AclListCollectionOutput"></a>
<a id="tocSacllistcollectionoutput"></a>
<a id="tocsacllistcollectionoutput"></a>

```json
{
  "asns": [],
  "cidrs": [],
  "continents": [],
  "countries": [],
  "datacenters": [],
  "reported": [
    "string"
  ],
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asns|[string]|false|none|none|
|cidrs|[string]|false|none|none|
|continents|[string]|false|none|none|
|countries|[string]|false|none|none|
|datacenters|[string]|false|none|none|
|reported|[string]|false|none|none|
|self|string|true|none|none|

<h2 id="tocS_ActivityCollectionOutput">ActivityCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaactivitycollectionoutput"></a>
<a id="schema_ActivityCollectionOutput"></a>
<a id="tocSactivitycollectionoutput"></a>
<a id="tocsactivitycollectionoutput"></a>

```json
{
  "activities": [
    {
      "created_at": 0,
      "data": {},
      "description": "string",
      "event": "string",
      "self": "string",
      "source": {
        "address": "string",
        "body": "string",
        "method": "string",
        "status_code": 0,
        "ua_string": "string",
        "uri": "string"
      }
    }
  ],
  "page": 0,
  "page_size": 0,
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activities|[[ActivityOutput](#schemaactivityoutput)]|true|none|none|
|page|integer|true|none|none|
|page_size|integer|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_ActivityOutput">ActivityOutput</h2>
<!-- backwards compatibility -->
<a id="schemaactivityoutput"></a>
<a id="schema_ActivityOutput"></a>
<a id="tocSactivityoutput"></a>
<a id="tocsactivityoutput"></a>

```json
{
  "created_at": 0,
  "data": {},
  "description": "string",
  "event": "string",
  "self": "string",
  "source": {
    "address": "string",
    "body": "string",
    "method": "string",
    "status_code": 0,
    "ua_string": "string",
    "uri": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|true|none|none|
|data|object|true|none|none|
|description|string|true|none|none|
|event|string|true|none|none|
|self|string|true|none|none|
|source|[v1__models__token__SourceOutput](#schemav1__models__token__sourceoutput)|true|none|none|

<h2 id="tocS_AutonomousSystemOutput">AutonomousSystemOutput</h2>
<!-- backwards compatibility -->
<a id="schemaautonomoussystemoutput"></a>
<a id="schema_AutonomousSystemOutput"></a>
<a id="tocSautonomoussystemoutput"></a>
<a id="tocsautonomoussystemoutput"></a>

```json
{
  "country_code": "AF",
  "description": "string",
  "name": "string",
  "prefixes": "string",
  "registry": "string",
  "registry_date": "string",
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_code|string|true|none|none|
|description|string|false|none|none|
|name|string|true|none|none|
|prefixes|string|true|none|none|
|registry|string|true|none|none|
|registry_date|string|false|none|none|
|risk|string|false|none|none|
|score|integer|false|none|none|
|self|string|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|country_code|AF|
|country_code|AP|
|country_code|AX|
|country_code|AL|
|country_code|DZ|
|country_code|AS|
|country_code|AD|
|country_code|AO|
|country_code|AI|
|country_code|AQ|
|country_code|AG|
|country_code|AR|
|country_code|AM|
|country_code|AW|
|country_code|AU|
|country_code|AT|
|country_code|AZ|
|country_code|BS|
|country_code|BH|
|country_code|BD|
|country_code|BB|
|country_code|BY|
|country_code|BE|
|country_code|BZ|
|country_code|BJ|
|country_code|BM|
|country_code|BT|
|country_code|BO|
|country_code|BQ|
|country_code|BA|
|country_code|BW|
|country_code|BV|
|country_code|BR|
|country_code|IO|
|country_code|BN|
|country_code|BG|
|country_code|BF|
|country_code|BI|
|country_code|CV|
|country_code|KH|
|country_code|CM|
|country_code|CA|
|country_code|KY|
|country_code|CF|
|country_code|TD|
|country_code|CL|
|country_code|CN|
|country_code|CX|
|country_code|CC|
|country_code|CO|
|country_code|KM|
|country_code|CG|
|country_code|CD|
|country_code|CK|
|country_code|CR|
|country_code|CI|
|country_code|HR|
|country_code|CU|
|country_code|CW|
|country_code|CY|
|country_code|CZ|
|country_code|DK|
|country_code|DJ|
|country_code|DM|
|country_code|DO|
|country_code|EC|
|country_code|EG|
|country_code|SV|
|country_code|GQ|
|country_code|ER|
|country_code|EE|
|country_code|ET|
|country_code|FK|
|country_code|FO|
|country_code|FJ|
|country_code|FI|
|country_code|FR|
|country_code|GF|
|country_code|PF|
|country_code|TF|
|country_code|GA|
|country_code|GM|
|country_code|GE|
|country_code|DE|
|country_code|GH|
|country_code|GI|
|country_code|GR|
|country_code|GL|
|country_code|GD|
|country_code|GP|
|country_code|GU|
|country_code|GT|
|country_code|GG|
|country_code|GN|
|country_code|GW|
|country_code|GY|
|country_code|HT|
|country_code|HM|
|country_code|VA|
|country_code|HN|
|country_code|HK|
|country_code|HU|
|country_code|IS|
|country_code|IN|
|country_code|ID|
|country_code|IR|
|country_code|IQ|
|country_code|IE|
|country_code|IM|
|country_code|IL|
|country_code|IT|
|country_code|JM|
|country_code|JP|
|country_code|JE|
|country_code|JO|
|country_code|KZ|
|country_code|KE|
|country_code|KI|
|country_code|KP|
|country_code|KR|
|country_code|KW|
|country_code|KG|
|country_code|LA|
|country_code|LV|
|country_code|LB|
|country_code|LS|
|country_code|LR|
|country_code|LY|
|country_code|LI|
|country_code|LT|
|country_code|LU|
|country_code|MO|
|country_code|MK|
|country_code|MG|
|country_code|MW|
|country_code|MY|
|country_code|MV|
|country_code|ML|
|country_code|MT|
|country_code|MH|
|country_code|MQ|
|country_code|MR|
|country_code|MU|
|country_code|YT|
|country_code|MX|
|country_code|FM|
|country_code|MD|
|country_code|MC|
|country_code|MN|
|country_code|ME|
|country_code|MS|
|country_code|MA|
|country_code|MZ|
|country_code|MM|
|country_code|NA|
|country_code|NR|
|country_code|NP|
|country_code|NL|
|country_code|NC|
|country_code|NZ|
|country_code|NI|
|country_code|NE|
|country_code|NG|
|country_code|NU|
|country_code|NF|
|country_code|MP|
|country_code|NO|
|country_code|OM|
|country_code|PK|
|country_code|PW|
|country_code|PS|
|country_code|PA|
|country_code|PG|
|country_code|PY|
|country_code|PE|
|country_code|PH|
|country_code|PN|
|country_code|PL|
|country_code|PT|
|country_code|PR|
|country_code|QA|
|country_code|RE|
|country_code|RO|
|country_code|RU|
|country_code|RW|
|country_code|BL|
|country_code|SH|
|country_code|KN|
|country_code|LC|
|country_code|MF|
|country_code|PM|
|country_code|VC|
|country_code|WS|
|country_code|SM|
|country_code|ST|
|country_code|SA|
|country_code|SN|
|country_code|RS|
|country_code|SC|
|country_code|SL|
|country_code|SG|
|country_code|SX|
|country_code|SK|
|country_code|SI|
|country_code|SB|
|country_code|SO|
|country_code|ZA|
|country_code|GS|
|country_code|SS|
|country_code|ES|
|country_code|LK|
|country_code|SD|
|country_code|SR|
|country_code|SJ|
|country_code|SZ|
|country_code|SE|
|country_code|CH|
|country_code|SY|
|country_code|TW|
|country_code|TJ|
|country_code|TZ|
|country_code|TH|
|country_code|TL|
|country_code|TG|
|country_code|TK|
|country_code|TO|
|country_code|TT|
|country_code|TN|
|country_code|TR|
|country_code|TM|
|country_code|TC|
|country_code|TV|
|country_code|UG|
|country_code|UA|
|country_code|AE|
|country_code|GB|
|country_code|US|
|country_code|UM|
|country_code|UY|
|country_code|UZ|
|country_code|VU|
|country_code|VE|
|country_code|VN|
|country_code|VG|
|country_code|VI|
|country_code|WF|
|country_code|EH|
|country_code|YE|
|country_code|ZM|
|country_code|ZW|
|country_code|ZZ|
|country_code|EU|
|country_code|RESERVED BY RFC6793|
|risk|UNKNOWN|
|risk|LOW|
|risk|MEDIUM|
|risk|HIGH|

<h2 id="tocS_AutonomousSystemPrefixOutput">AutonomousSystemPrefixOutput</h2>
<!-- backwards compatibility -->
<a id="schemaautonomoussystemprefixoutput"></a>
<a id="schema_AutonomousSystemPrefixOutput"></a>
<a id="tocSautonomoussystemprefixoutput"></a>
<a id="tocsautonomoussystemprefixoutput"></a>

```json
{
  "asn": "string",
  "description": "string",
  "mantainer": "string",
  "object_type": "string",
  "registry_date": "string",
  "registry_status": "string",
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string"
}
```

AutonomousSystemPrefixResponse class to return the information to the user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asn|string|false|none|none|
|description|string|true|none|none|
|mantainer|string|true|none|none|
|object_type|string|true|none|none|
|registry_date|string|false|none|none|
|registry_status|string|false|none|none|
|risk|string|false|none|none|
|score|integer|false|none|none|
|self|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|risk|UNKNOWN|
|risk|LOW|
|risk|MEDIUM|
|risk|HIGH|

<h2 id="tocS_AutonomousSystemPrefixesOutput">AutonomousSystemPrefixesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaautonomoussystemprefixesoutput"></a>
<a id="schema_AutonomousSystemPrefixesOutput"></a>
<a id="tocSautonomoussystemprefixesoutput"></a>
<a id="tocsautonomoussystemprefixesoutput"></a>

```json
{
  "asn": "string",
  "prefixes_v4": [
    {
      "asn": "string",
      "description": "string",
      "mantainer": "string",
      "object_type": "string",
      "registry_date": "string",
      "registry_status": "string",
      "risk": "UNKNOWN",
      "score": 0,
      "self": "string"
    }
  ],
  "prefixes_v6": [
    {
      "asn": "string",
      "description": "string",
      "mantainer": "string",
      "object_type": "string",
      "registry_date": "string",
      "registry_status": "string",
      "risk": "UNKNOWN",
      "score": 0,
      "self": "string"
    }
  ],
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asn|string|false|none|none|
|prefixes_v4|[[AutonomousSystemPrefixOutput](#schemaautonomoussystemprefixoutput)]|true|none|none|
|prefixes_v6|[[AutonomousSystemPrefixOutput](#schemaautonomoussystemprefixoutput)]|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_AutonomousSystemRegistryOutput">AutonomousSystemRegistryOutput</h2>
<!-- backwards compatibility -->
<a id="schemaautonomoussystemregistryoutput"></a>
<a id="schema_AutonomousSystemRegistryOutput"></a>
<a id="tocSautonomoussystemregistryoutput"></a>
<a id="tocsautonomoussystemregistryoutput"></a>

```json
{
  "code": "string",
  "name": "string",
  "self": "string"
}
```

The Registry information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|name|string|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_AutonomousSystemStatusOutput">AutonomousSystemStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemaautonomoussystemstatusoutput"></a>
<a id="schema_AutonomousSystemStatusOutput"></a>
<a id="tocSautonomoussystemstatusoutput"></a>
<a id="tocsautonomoussystemstatusoutput"></a>

```json
{
  "code": "string",
  "name": "string",
  "self": "string"
}
```

The Status information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|name|string|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_Body_assess_ip_set_csv_v1_assess_ip_csv_post">Body_assess_ip_set_csv_v1_assess_ip_csv_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_assess_ip_set_csv_v1_assess_ip_csv_post"></a>
<a id="schema_Body_assess_ip_set_csv_v1_assess_ip_csv_post"></a>
<a id="tocSbody_assess_ip_set_csv_v1_assess_ip_csv_post"></a>
<a id="tocsbody_assess_ip_set_csv_v1_assess_ip_csv_post"></a>

```json
{
  "csv_file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csv_file|string(binary)|true|none|The CSV file with the IP addresses|

<h2 id="tocS_Body_assess_ip_set_csv_v1_geo_csv_post">Body_assess_ip_set_csv_v1_geo_csv_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_assess_ip_set_csv_v1_geo_csv_post"></a>
<a id="schema_Body_assess_ip_set_csv_v1_geo_csv_post"></a>
<a id="tocSbody_assess_ip_set_csv_v1_geo_csv_post"></a>
<a id="tocsbody_assess_ip_set_csv_v1_geo_csv_post"></a>

```json
{
  "csv_file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csv_file|string(binary)|true|none|The CSV file with the IP addresses|

<h2 id="tocS_Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__put">Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__put</h2>
<!-- backwards compatibility -->
<a id="schemabody_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__put"></a>
<a id="schema_Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__put"></a>
<a id="tocSbody_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__put"></a>
<a id="tocsbody_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__put"></a>

```json
{
  "status": "ACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of the list. ACTIVE or INACTIVE|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|

<h2 id="tocS_Body_change_status_of_the_denylist_v1_denylist_public__denylist_id__put">Body_change_status_of_the_denylist_v1_denylist_public__denylist_id__put</h2>
<!-- backwards compatibility -->
<a id="schemabody_change_status_of_the_denylist_v1_denylist_public__denylist_id__put"></a>
<a id="schema_Body_change_status_of_the_denylist_v1_denylist_public__denylist_id__put"></a>
<a id="tocSbody_change_status_of_the_denylist_v1_denylist_public__denylist_id__put"></a>
<a id="tocsbody_change_status_of_the_denylist_v1_denylist_public__denylist_id__put"></a>

```json
{
  "status": "ACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of the list. ACTIVE or INACTIVE|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|

<h2 id="tocS_Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_put">Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_put</h2>
<!-- backwards compatibility -->
<a id="schemabody_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_put"></a>
<a id="schema_Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_put"></a>
<a id="tocSbody_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_put"></a>
<a id="tocsbody_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_put"></a>

```json
{
  "origin": "http://example.com",
  "status": "ACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|origin|string(uri)|true|none|The protocol and domain of the origin to change the status|
|status|string|true|none|The status of the list. ACTIVE, INACTIVE, DELETED|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|DELETED|

<h2 id="tocS_Body_change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_put">Body_change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_put</h2>
<!-- backwards compatibility -->
<a id="schemabody_change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_put"></a>
<a id="schema_Body_change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_put"></a>
<a id="tocSbody_change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_put"></a>
<a id="tocsbody_change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_put"></a>

```json
{
  "origin": "http://example.com",
  "status": "ACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|origin|string(uri)|true|none|The protocol and domain of the origin to change the status|
|status|string|true|none|The status of the list. ACTIVE, INACTIVE, DELETED|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|DELETED|

<h2 id="tocS_Body_change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_put">Body_change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_put</h2>
<!-- backwards compatibility -->
<a id="schemabody_change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_put"></a>
<a id="schema_Body_change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_put"></a>
<a id="tocSbody_change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_put"></a>
<a id="tocsbody_change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_put"></a>

```json
{
  "origin": "http://example.com",
  "status": "ACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|origin|string(uri)|true|none|The protocol and domain of the origin to change the status|
|status|string|true|none|The status of the list. ACTIVE, INACTIVE, DELETED|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|DELETED|

<h2 id="tocS_Body_change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_put">Body_change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_put</h2>
<!-- backwards compatibility -->
<a id="schemabody_change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_put"></a>
<a id="schema_Body_change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_put"></a>
<a id="tocSbody_change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_put"></a>
<a id="tocsbody_change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_put"></a>

```json
{
  "origin": "http://example.com",
  "status": "ACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|origin|string(uri)|true|none|The protocol and domain of the origin to change the status|
|status|string|true|none|The status of the list. ACTIVE, INACTIVE, DELETED|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|DELETED|

<h2 id="tocS_Body_create_private_allowlist_of_the_user_v1_allowlist_private_post">Body_create_private_allowlist_of_the_user_v1_allowlist_private_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_create_private_allowlist_of_the_user_v1_allowlist_private_post"></a>
<a id="schema_Body_create_private_allowlist_of_the_user_v1_allowlist_private_post"></a>
<a id="tocSbody_create_private_allowlist_of_the_user_v1_allowlist_private_post"></a>
<a id="tocsbody_create_private_allowlist_of_the_user_v1_allowlist_private_post"></a>

```json
{
  "payload": {
    "description": "string",
    "name": "string",
    "resource_type": "UNKNOWN",
    "tags": [
      "string"
    ],
    "ttl": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|object|true|none|The information needed to create a new allowlist|

<h2 id="tocS_Body_create_private_denylist_of_the_user_v1_denylist_private_post">Body_create_private_denylist_of_the_user_v1_denylist_private_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_create_private_denylist_of_the_user_v1_denylist_private_post"></a>
<a id="schema_Body_create_private_denylist_of_the_user_v1_denylist_private_post"></a>
<a id="tocSbody_create_private_denylist_of_the_user_v1_denylist_private_post"></a>
<a id="tocsbody_create_private_denylist_of_the_user_v1_denylist_private_post"></a>

```json
{
  "payload": {
    "description": "string",
    "name": "string",
    "resource_type": "UNKNOWN",
    "tags": [
      "string"
    ],
    "ttl": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|object|true|none|The information needed to create a new denylist|

<h2 id="tocS_Body_delete_token_v1_origin_token_delete">Body_delete_token_v1_origin_token_delete</h2>
<!-- backwards compatibility -->
<a id="schemabody_delete_token_v1_origin_token_delete"></a>
<a id="schema_Body_delete_token_v1_origin_token_delete"></a>
<a id="tocSbody_delete_token_v1_origin_token_delete"></a>
<a id="tocsbody_delete_token_v1_origin_token_delete"></a>

```json
{
  "origin_token_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|origin_token_id|string|true|none|none|

<h2 id="tocS_Body_disable_origin_token_v1_origin_token_disable_put">Body_disable_origin_token_v1_origin_token_disable_put</h2>
<!-- backwards compatibility -->
<a id="schemabody_disable_origin_token_v1_origin_token_disable_put"></a>
<a id="schema_Body_disable_origin_token_v1_origin_token_disable_put"></a>
<a id="tocSbody_disable_origin_token_v1_origin_token_disable_put"></a>
<a id="tocsbody_disable_origin_token_v1_origin_token_disable_put"></a>

```json
{
  "origin_token_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|origin_token_id|string|true|none|none|

<h2 id="tocS_Body_enable_origin_token_v1_origin_token_enable_put">Body_enable_origin_token_v1_origin_token_enable_put</h2>
<!-- backwards compatibility -->
<a id="schemabody_enable_origin_token_v1_origin_token_enable_put"></a>
<a id="schema_Body_enable_origin_token_v1_origin_token_enable_put"></a>
<a id="tocSbody_enable_origin_token_v1_origin_token_enable_put"></a>
<a id="tocsbody_enable_origin_token_v1_origin_token_enable_put"></a>

```json
{
  "origin_token_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|origin_token_id|string|true|none|none|

<h2 id="tocS_Body_parse_user_agents_csv_v1_ua_csv_post">Body_parse_user_agents_csv_v1_ua_csv_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_parse_user_agents_csv_v1_ua_csv_post"></a>
<a id="schema_Body_parse_user_agents_csv_v1_ua_csv_post"></a>
<a id="tocSbody_parse_user_agents_csv_v1_ua_csv_post"></a>
<a id="tocsbody_parse_user_agents_csv_v1_ua_csv_post"></a>

```json
{
  "csv_file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csv_file|string(binary)|true|none|The CSV file with the User Agents to parse|

<h2 id="tocS_Body_query_asn_prefix_information_v1_asn_prefix_post">Body_query_asn_prefix_information_v1_asn_prefix_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_query_asn_prefix_information_v1_asn_prefix_post"></a>
<a id="schema_Body_query_asn_prefix_information_v1_asn_prefix_post"></a>
<a id="tocSbody_query_asn_prefix_information_v1_asn_prefix_post"></a>
<a id="tocsbody_query_asn_prefix_information_v1_asn_prefix_post"></a>

```json
{
  "prefix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefix|string(ipvanynetwork)|true|none|none|

<h2 id="tocS_Body_query_datacenter_prefix_information_v1_datacenter_prefix_post">Body_query_datacenter_prefix_information_v1_datacenter_prefix_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_query_datacenter_prefix_information_v1_datacenter_prefix_post"></a>
<a id="schema_Body_query_datacenter_prefix_information_v1_datacenter_prefix_post"></a>
<a id="tocSbody_query_datacenter_prefix_information_v1_datacenter_prefix_post"></a>
<a id="tocsbody_query_datacenter_prefix_information_v1_datacenter_prefix_post"></a>

```json
{
  "prefix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefix|string(ipvanynetwork)|true|none|none|

<h2 id="tocS_Body_query_origin_status_v1_origin_status_post">Body_query_origin_status_v1_origin_status_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_query_origin_status_v1_origin_status_post"></a>
<a id="schema_Body_query_origin_status_v1_origin_status_post"></a>
<a id="tocSbody_query_origin_status_v1_origin_status_post"></a>
<a id="tocsbody_query_origin_status_v1_origin_status_post"></a>

```json
{
  "address": "192.0.2.1",
  "cookie_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string(ipv4) \| string(ipv6)|false|none|The IP address to query the status|
|cookie_id|string(uuid)|false|none|The cookie id to query the status|

<h2 id="tocS_Body_query_origin_token_info_v1_origin_token_post">Body_query_origin_token_info_v1_origin_token_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_query_origin_token_info_v1_origin_token_post"></a>
<a id="schema_Body_query_origin_token_info_v1_origin_token_post"></a>
<a id="tocSbody_query_origin_token_info_v1_origin_token_post"></a>
<a id="tocsbody_query_origin_token_info_v1_origin_token_post"></a>

```json
{
  "origin_token_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|origin_token_id|string|true|none|none|

<h2 id="tocS_Body_update_configuration_origin_v1_origin_put">Body_update_configuration_origin_v1_origin_put</h2>
<!-- backwards compatibility -->
<a id="schemabody_update_configuration_origin_v1_origin_put"></a>
<a id="schema_Body_update_configuration_origin_v1_origin_put"></a>
<a id="tocSbody_update_configuration_origin_v1_origin_put"></a>
<a id="tocsbody_update_configuration_origin_v1_origin_put"></a>

```json
{
  "config": {},
  "origin": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|The configuration information to store in the origin.|
|origin|string|true|none|The origin site to modify the configruation|

<h2 id="tocS_Body_update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__put">Body_update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__put</h2>
<!-- backwards compatibility -->
<a id="schemabody_update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__put"></a>
<a id="schema_Body_update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__put"></a>
<a id="tocSbody_update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__put"></a>
<a id="tocsbody_update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__put"></a>

```json
{
  "description": "string",
  "name": "string",
  "tags": [
    "string"
  ],
  "ttl": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The human readable full description of the list|
|name|string|false|none|The name of the list|
|tags|[string]|false|none|The list of tags to associate with the list|
|ttl|integer|false|none|Optional. The Time To Live (TTL) of a resource in the list in seconds.|

<h2 id="tocS_Body_update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_put">Body_update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_put</h2>
<!-- backwards compatibility -->
<a id="schemabody_update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_put"></a>
<a id="schema_Body_update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_put"></a>
<a id="tocSbody_update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_put"></a>
<a id="tocsbody_update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_put"></a>

```json
{
  "append": [
    "string"
  ],
  "remove": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|append|[string]|false|none|The name of the resources to append to the allowlist|
|remove|[string]|false|none|The name of the resources to remove from the allowlist|

<h2 id="tocS_Body_update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_put">Body_update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_put</h2>
<!-- backwards compatibility -->
<a id="schemabody_update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_put"></a>
<a id="schema_Body_update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_put"></a>
<a id="tocSbody_update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_put"></a>
<a id="tocsbody_update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_put"></a>

```json
{
  "append": [
    "string"
  ],
  "remove": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|append|[string]|false|none|The name of the resources to append to the denylist|
|remove|[string]|false|none|The name of the resources to remove from the denylist|

<h2 id="tocS_Body_update_private_denylist_of_the_user_v1_denylist_private__denylist_id__put">Body_update_private_denylist_of_the_user_v1_denylist_private__denylist_id__put</h2>
<!-- backwards compatibility -->
<a id="schemabody_update_private_denylist_of_the_user_v1_denylist_private__denylist_id__put"></a>
<a id="schema_Body_update_private_denylist_of_the_user_v1_denylist_private__denylist_id__put"></a>
<a id="tocSbody_update_private_denylist_of_the_user_v1_denylist_private__denylist_id__put"></a>
<a id="tocsbody_update_private_denylist_of_the_user_v1_denylist_private__denylist_id__put"></a>

```json
{
  "description": "string",
  "name": "string",
  "tags": [
    "string"
  ],
  "ttl": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The human readable full description of the list|
|name|string|false|none|The name of the list|
|tags|[string]|false|none|The list of tags to associate with the list|
|ttl|integer|false|none|Optional. The Time To Live (TTL) of a resource in the list in seconds.|

<h2 id="tocS_DatacenterOutput">DatacenterOutput</h2>
<!-- backwards compatibility -->
<a id="schemadatacenteroutput"></a>
<a id="schema_DatacenterOutput"></a>
<a id="tocSdatacenteroutput"></a>
<a id="tocsdatacenteroutput"></a>

```json
{
  "asn": "string",
  "description": "string",
  "name": "string",
  "prefixes": "string",
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string",
  "source": "string",
  "status": "enabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asn|string|true|none|none|
|description|string|false|none|none|
|name|string|true|none|none|
|prefixes|string|true|none|none|
|risk|string|false|none|none|
|score|integer|false|none|none|
|self|string|true|none|none|
|source|string|true|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|risk|UNKNOWN|
|risk|LOW|
|risk|MEDIUM|
|risk|HIGH|
|status|disabled|
|status|enabled|

<h2 id="tocS_DatacenterPrefixOutput">DatacenterPrefixOutput</h2>
<!-- backwards compatibility -->
<a id="schemadatacenterprefixoutput"></a>
<a id="schema_DatacenterPrefixOutput"></a>
<a id="tocSdatacenterprefixoutput"></a>
<a id="tocsdatacenterprefixoutput"></a>

```json
{
  "datacenter": "string",
  "ip_abuse_total": 0,
  "max_score": 0,
  "min_score": 0,
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datacenter|string|true|none|none|
|ip_abuse_total|integer|false|none|none|
|max_score|integer|false|none|none|
|min_score|integer|false|none|none|
|risk|string|false|none|none|
|score|integer|false|none|none|
|self|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|risk|UNKNOWN|
|risk|LOW|
|risk|MEDIUM|
|risk|HIGH|

<h2 id="tocS_DatacenterPrefixesOutput">DatacenterPrefixesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadatacenterprefixesoutput"></a>
<a id="schema_DatacenterPrefixesOutput"></a>
<a id="tocSdatacenterprefixesoutput"></a>
<a id="tocsdatacenterprefixesoutput"></a>

```json
{
  "prefixes_v4": [
    {
      "datacenter": "string",
      "ip_abuse_total": 0,
      "max_score": 0,
      "min_score": 0,
      "risk": "UNKNOWN",
      "score": 0,
      "self": "string"
    }
  ],
  "prefixes_v6": [
    {
      "datacenter": "string",
      "ip_abuse_total": 0,
      "max_score": 0,
      "min_score": 0,
      "risk": "UNKNOWN",
      "score": 0,
      "self": "string"
    }
  ],
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefixes_v4|[[DatacenterPrefixOutput](#schemadatacenterprefixoutput)]|true|none|none|
|prefixes_v6|[[DatacenterPrefixOutput](#schemadatacenterprefixoutput)]|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_DatasetTypeCollectionOutput">DatasetTypeCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadatasettypecollectionoutput"></a>
<a id="schema_DatasetTypeCollectionOutput"></a>
<a id="tocSdatasettypecollectionoutput"></a>
<a id="tocsdatasettypecollectionoutput"></a>

```json
{
  "self": "string",
  "types": [
    {
      "description": "string",
      "items": 0,
      "name": "string",
      "self": "string",
      "status": "ENABLED",
      "type": "ip"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string|true|none|none|
|types|[[DatasetTypeOutput](#schemadatasettypeoutput)]|true|none|none|

<h2 id="tocS_DatasetTypeOutput">DatasetTypeOutput</h2>
<!-- backwards compatibility -->
<a id="schemadatasettypeoutput"></a>
<a id="schema_DatasetTypeOutput"></a>
<a id="tocSdatasettypeoutput"></a>
<a id="tocsdatasettypeoutput"></a>

```json
{
  "description": "string",
  "items": 0,
  "name": "string",
  "self": "string",
  "status": "ENABLED",
  "type": "ip"
}
```

The Status information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|items|integer|true|none|none|
|name|string|true|none|none|
|self|string|true|none|none|
|status|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ENABLED|
|status|DISABLED|
|type|ip|
|type|domain|

<h2 id="tocS_DeviceOutput">DeviceOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeviceoutput"></a>
<a id="schema_DeviceOutput"></a>
<a id="tocSdeviceoutput"></a>
<a id="tocsdeviceoutput"></a>

```json
{
  "code": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|description|string|true|none|none|

<h2 id="tocS_FamilyOutput">FamilyOutput</h2>
<!-- backwards compatibility -->
<a id="schemafamilyoutput"></a>
<a id="schema_FamilyOutput"></a>
<a id="tocSfamilyoutput"></a>
<a id="tocsfamilyoutput"></a>

```json
{
  "code": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|description|string|true|none|none|

<h2 id="tocS_GeoIPCollectionOutput">GeoIPCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemageoipcollectionoutput"></a>
<a id="schema_GeoIPCollectionOutput"></a>
<a id="tocSgeoipcollectionoutput"></a>
<a id="tocsgeoipcollectionoutput"></a>

```json
{
  "results": [
    {
      "accuracy_radius": 0,
      "asn_country_iso_code": "string",
      "city_geoname_code": 0,
      "city_name": "string",
      "continent_code": "string",
      "country_iso_code": "string",
      "hostnames": [
        "string"
      ],
      "latitude": 0,
      "longitude": 0,
      "postal_code": "string",
      "region_geoname_code": 0,
      "region_name": "string",
      "self": "string",
      "time_zone": "string"
    }
  ],
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[GeoIPOutput](#schemageoipoutput)]|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_GeoIPOutput">GeoIPOutput</h2>
<!-- backwards compatibility -->
<a id="schemageoipoutput"></a>
<a id="schema_GeoIPOutput"></a>
<a id="tocSgeoipoutput"></a>
<a id="tocsgeoipoutput"></a>

```json
{
  "accuracy_radius": 0,
  "asn_country_iso_code": "string",
  "city_geoname_code": 0,
  "city_name": "string",
  "continent_code": "string",
  "country_iso_code": "string",
  "hostnames": [
    "string"
  ],
  "latitude": 0,
  "longitude": 0,
  "postal_code": "string",
  "region_geoname_code": 0,
  "region_name": "string",
  "self": "string",
  "time_zone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accuracy_radius|number|true|none|none|
|asn_country_iso_code|string|true|none|none|
|city_geoname_code|integer|true|none|none|
|city_name|string|true|none|none|
|continent_code|string|true|none|none|
|country_iso_code|string|true|none|none|
|hostnames|[string]|true|none|none|
|latitude|number|true|none|none|
|longitude|number|true|none|none|
|postal_code|string|true|none|none|
|region_geoname_code|integer|true|none|none|
|region_name|string|true|none|none|
|self|string|false|none|none|
|time_zone|string|true|none|none|

<h2 id="tocS_HTTPValidationError">HTTPValidationError</h2>
<!-- backwards compatibility -->
<a id="schemahttpvalidationerror"></a>
<a id="schema_HTTPValidationError"></a>
<a id="tocShttpvalidationerror"></a>
<a id="tocshttpvalidationerror"></a>

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[[ValidationError](#schemavalidationerror)]|false|none|none|

<h2 id="tocS_IPAssessmentCollectionOutput">IPAssessmentCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaipassessmentcollectionoutput"></a>
<a id="schema_IPAssessmentCollectionOutput"></a>
<a id="tocSipassessmentcollectionoutput"></a>
<a id="tocsipassessmentcollectionoutput"></a>

```json
{
  "results": [
    {
      "allowlisted": "string",
      "asn": "string",
      "asn_prefix": "string",
      "datacenter": "string",
      "datacenter_prefix": "string",
      "datasets": [
        "string"
      ],
      "denylisted": "string",
      "first_appearance": [
        "string"
      ],
      "last_appearance": [
        "string"
      ],
      "reason": "string",
      "risk": "UNKNOWN",
      "score": 0,
      "self": "string",
      "sources": [
        "string"
      ]
    }
  ],
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[IPAssessmentOutput](#schemaipassessmentoutput)]|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_IPAssessmentOutput">IPAssessmentOutput</h2>
<!-- backwards compatibility -->
<a id="schemaipassessmentoutput"></a>
<a id="schema_IPAssessmentOutput"></a>
<a id="tocSipassessmentoutput"></a>
<a id="tocsipassessmentoutput"></a>

```json
{
  "allowlisted": "string",
  "asn": "string",
  "asn_prefix": "string",
  "datacenter": "string",
  "datacenter_prefix": "string",
  "datasets": [
    "string"
  ],
  "denylisted": "string",
  "first_appearance": [
    "string"
  ],
  "last_appearance": [
    "string"
  ],
  "reason": "string",
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string",
  "sources": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowlisted|string|true|none|none|
|asn|string|true|none|none|
|asn_prefix|string|true|none|none|
|datacenter|string|true|none|none|
|datacenter_prefix|string|true|none|none|
|datasets|[string]|true|none|none|
|denylisted|string|true|none|none|
|first_appearance|[string]|true|none|none|
|last_appearance|[string]|true|none|none|
|reason|string|true|none|none|
|risk|string|true|none|none|
|score|integer|false|none|none|
|self|string|false|none|none|
|sources|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|risk|UNKNOWN|
|risk|LOW|
|risk|MEDIUM|
|risk|HIGH|

<h2 id="tocS_IPListCollectionOutput">IPListCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaiplistcollectionoutput"></a>
<a id="schema_IPListCollectionOutput"></a>
<a id="tocSiplistcollectionoutput"></a>
<a id="tocsiplistcollectionoutput"></a>

```json
{
  "addresses": [
    {
      "dataset": "string",
      "expiry": 0,
      "last_report": 0,
      "protocol": "ALL",
      "self": "string",
      "tags": [
        "string"
      ],
      "total_reports": 0
    }
  ],
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[[IPListOutput](#schemaiplistoutput)]|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_IPListOutput">IPListOutput</h2>
<!-- backwards compatibility -->
<a id="schemaiplistoutput"></a>
<a id="schema_IPListOutput"></a>
<a id="tocSiplistoutput"></a>
<a id="tocsiplistoutput"></a>

```json
{
  "dataset": "string",
  "expiry": 0,
  "last_report": 0,
  "protocol": "ALL",
  "self": "string",
  "tags": [
    "string"
  ],
  "total_reports": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|string|true|none|none|
|expiry|integer|true|none|none|
|last_report|integer|true|none|none|
|protocol|string|true|none|none|
|self|string|true|none|none|
|tags|[string]|false|none|none|
|total_reports|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|ALL|
|protocol|IPV4|
|protocol|IPV6|

<h2 id="tocS_IPLogCollectionOutput">IPLogCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaiplogcollectionoutput"></a>
<a id="schema_IPLogCollectionOutput"></a>
<a id="tocSiplogcollectionoutput"></a>
<a id="tocsiplogcollectionoutput"></a>

```json
{
  "logs": [
    {
      "action": "ADD",
      "cidr": "string",
      "dataset": "string",
      "lapse": "1H",
      "risk": "UNKNOWN",
      "score": 0,
      "self": "string",
      "source": "string",
      "timestamp": 0
    }
  ],
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logs|[[IPLogOutput](#schemaiplogoutput)]|true|none|none|
|self|string|false|none|none|

<h2 id="tocS_IPLogOutput">IPLogOutput</h2>
<!-- backwards compatibility -->
<a id="schemaiplogoutput"></a>
<a id="schema_IPLogOutput"></a>
<a id="tocSiplogoutput"></a>
<a id="tocsiplogoutput"></a>

```json
{
  "action": "ADD",
  "cidr": "string",
  "dataset": "string",
  "lapse": "1H",
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string",
  "source": "string",
  "timestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|none|
|cidr|string|false|none|none|
|dataset|string|true|none|none|
|lapse|string|true|none|none|
|risk|string|true|none|none|
|score|integer|false|none|none|
|self|string|false|none|none|
|source|string|true|none|none|
|timestamp|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ADD|
|action|DELETE|
|lapse|1H|
|lapse|6H|
|lapse|12H|
|lapse|1D|
|lapse|7D|
|lapse|30D|
|lapse|90D|
|lapse|180D|
|lapse|365D|
|risk|UNKNOWN|
|risk|LOW|
|risk|MEDIUM|
|risk|HIGH|

<h2 id="tocS_OSOutput">OSOutput</h2>
<!-- backwards compatibility -->
<a id="schemaosoutput"></a>
<a id="schema_OSOutput"></a>
<a id="tocSosoutput"></a>
<a id="tocsosoutput"></a>

```json
{
  "code": "string",
  "description": "string",
  "family": "string",
  "vendor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|description|string|true|none|none|
|family|string|true|none|none|
|vendor|string|true|none|none|

<h2 id="tocS_OriginAddressStatusCollectionOutput">OriginAddressStatusCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaoriginaddressstatuscollectionoutput"></a>
<a id="schema_OriginAddressStatusCollectionOutput"></a>
<a id="tocSoriginaddressstatuscollectionoutput"></a>
<a id="tocsoriginaddressstatuscollectionoutput"></a>

```json
{
  "addresses": [
    {
      "address": "string",
      "created_at": 0,
      "expiry": 0,
      "log_id": "string",
      "status": "string",
      "updated_at": 0
    }
  ],
  "page": 0,
  "page_size": 0,
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[[OriginAddressStatusOutput](#schemaoriginaddressstatusoutput)]|true|none|none|
|page|integer|true|none|none|
|page_size|integer|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_OriginAddressStatusOutput">OriginAddressStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemaoriginaddressstatusoutput"></a>
<a id="schema_OriginAddressStatusOutput"></a>
<a id="tocSoriginaddressstatusoutput"></a>
<a id="tocsoriginaddressstatusoutput"></a>

```json
{
  "address": "string",
  "created_at": 0,
  "expiry": 0,
  "log_id": "string",
  "status": "string",
  "updated_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|none|
|created_at|integer|false|none|none|
|expiry|integer|false|none|none|
|log_id|string|false|none|none|
|status|string|true|none|none|
|updated_at|integer|false|none|none|

<h2 id="tocS_OriginClientAnalysisCollectionOutput">OriginClientAnalysisCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaoriginclientanalysiscollectionoutput"></a>
<a id="schema_OriginClientAnalysisCollectionOutput"></a>
<a id="tocSoriginclientanalysiscollectionoutput"></a>
<a id="tocsoriginclientanalysiscollectionoutput"></a>

```json
{
  "data": [
    {
      "client_browser": 0,
      "client_crawler": 0,
      "client_email": 0,
      "client_library": 0,
      "client_mobile_browser": 0,
      "client_multimedia_player": 0,
      "client_offline_browser": 0,
      "client_total": 0,
      "client_ua_anonymizer": 0,
      "client_unrecognized": 0,
      "client_validator": 0,
      "client_wap_browser": 0,
      "crawler_feed_fetcher": 0,
      "crawler_link_checker": 0,
      "crawler_marketing": 0,
      "crawler_screenshot_creator": 0,
      "crawler_search_engine_bot": 0,
      "crawler_site_monitor": 0,
      "crawler_speed_tester": 0,
      "crawler_tool": 0,
      "crawler_total": 0,
      "crawler_uncategorised": 0,
      "crawler_unrecognized": 0,
      "crawler_virus_scanner": 0,
      "crawler_vulnerability_scanner": 0,
      "crawler_web_scraper": 0,
      "timestamp": 0,
      "total": 0
    }
  ],
  "from_timestamp": 0,
  "interval": "string",
  "self": "string",
  "to_timestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[OriginClientAnalysisOutput](#schemaoriginclientanalysisoutput)]|true|none|none|
|from_timestamp|integer|true|none|none|
|interval|string|true|none|none|
|self|string|true|none|none|
|to_timestamp|integer|true|none|none|

<h2 id="tocS_OriginClientAnalysisOutput">OriginClientAnalysisOutput</h2>
<!-- backwards compatibility -->
<a id="schemaoriginclientanalysisoutput"></a>
<a id="schema_OriginClientAnalysisOutput"></a>
<a id="tocSoriginclientanalysisoutput"></a>
<a id="tocsoriginclientanalysisoutput"></a>

```json
{
  "client_browser": 0,
  "client_crawler": 0,
  "client_email": 0,
  "client_library": 0,
  "client_mobile_browser": 0,
  "client_multimedia_player": 0,
  "client_offline_browser": 0,
  "client_total": 0,
  "client_ua_anonymizer": 0,
  "client_unrecognized": 0,
  "client_validator": 0,
  "client_wap_browser": 0,
  "crawler_feed_fetcher": 0,
  "crawler_link_checker": 0,
  "crawler_marketing": 0,
  "crawler_screenshot_creator": 0,
  "crawler_search_engine_bot": 0,
  "crawler_site_monitor": 0,
  "crawler_speed_tester": 0,
  "crawler_tool": 0,
  "crawler_total": 0,
  "crawler_uncategorised": 0,
  "crawler_unrecognized": 0,
  "crawler_virus_scanner": 0,
  "crawler_vulnerability_scanner": 0,
  "crawler_web_scraper": 0,
  "timestamp": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_browser|integer|true|none|none|
|client_crawler|integer|true|none|none|
|client_email|integer|true|none|none|
|client_library|integer|true|none|none|
|client_mobile_browser|integer|true|none|none|
|client_multimedia_player|integer|true|none|none|
|client_offline_browser|integer|true|none|none|
|client_total|integer|true|none|none|
|client_ua_anonymizer|integer|true|none|none|
|client_unrecognized|integer|true|none|none|
|client_validator|integer|true|none|none|
|client_wap_browser|integer|true|none|none|
|crawler_feed_fetcher|integer|true|none|none|
|crawler_link_checker|integer|true|none|none|
|crawler_marketing|integer|true|none|none|
|crawler_screenshot_creator|integer|true|none|none|
|crawler_search_engine_bot|integer|true|none|none|
|crawler_site_monitor|integer|true|none|none|
|crawler_speed_tester|integer|true|none|none|
|crawler_tool|integer|true|none|none|
|crawler_total|integer|true|none|none|
|crawler_uncategorised|integer|true|none|none|
|crawler_unrecognized|integer|true|none|none|
|crawler_virus_scanner|integer|true|none|none|
|crawler_vulnerability_scanner|integer|true|none|none|
|crawler_web_scraper|integer|true|none|none|
|timestamp|integer|true|none|none|
|total|integer|true|none|none|

<h2 id="tocS_OriginCollectionOutput">OriginCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaorigincollectionoutput"></a>
<a id="schema_OriginCollectionOutput"></a>
<a id="tocSorigincollectionoutput"></a>
<a id="tocsorigincollectionoutput"></a>

```json
{
  "origins": [
    {
      "actions": "string",
      "addresses": "string",
      "config": {},
      "cookies": "string",
      "created_at": 0,
      "logs": "string",
      "origin": "string",
      "scripts": "string",
      "self": "string",
      "status": "ENABLED",
      "token": "string",
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|origins|[[OriginOutput](#schemaoriginoutput)]|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_OriginCookieIdStatusCollectionOutput">OriginCookieIdStatusCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaorigincookieidstatuscollectionoutput"></a>
<a id="schema_OriginCookieIdStatusCollectionOutput"></a>
<a id="tocSorigincookieidstatuscollectionoutput"></a>
<a id="tocsorigincookieidstatuscollectionoutput"></a>

```json
{
  "cookie_ids": [
    {
      "cookie_id": "string",
      "created_at": 0,
      "expiry": 0,
      "log_id": "string",
      "status": "string",
      "updated_at": 0
    }
  ],
  "page": 0,
  "page_size": 0,
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cookie_ids|[[OriginCookieIdStatusOutput](#schemaorigincookieidstatusoutput)]|true|none|none|
|page|integer|true|none|none|
|page_size|integer|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_OriginCookieIdStatusOutput">OriginCookieIdStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemaorigincookieidstatusoutput"></a>
<a id="schema_OriginCookieIdStatusOutput"></a>
<a id="tocSorigincookieidstatusoutput"></a>
<a id="tocsorigincookieidstatusoutput"></a>

```json
{
  "cookie_id": "string",
  "created_at": 0,
  "expiry": 0,
  "log_id": "string",
  "status": "string",
  "updated_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cookie_id|string|true|none|none|
|created_at|integer|false|none|none|
|expiry|integer|false|none|none|
|log_id|string|false|none|none|
|status|string|true|none|none|
|updated_at|integer|false|none|none|

<h2 id="tocS_OriginOutput">OriginOutput</h2>
<!-- backwards compatibility -->
<a id="schemaoriginoutput"></a>
<a id="schema_OriginOutput"></a>
<a id="tocSoriginoutput"></a>
<a id="tocsoriginoutput"></a>

```json
{
  "actions": "string",
  "addresses": "string",
  "config": {},
  "cookies": "string",
  "created_at": 0,
  "logs": "string",
  "origin": "string",
  "scripts": "string",
  "self": "string",
  "status": "ENABLED",
  "token": "string",
  "updated_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|string|true|none|none|
|addresses|string|true|none|none|
|config|object|true|none|none|
|cookies|string|true|none|none|
|created_at|integer|true|none|none|
|logs|string|true|none|none|
|origin|string|true|none|none|
|scripts|string|true|none|none|
|self|string|true|none|none|
|status|string|true|none|none|
|token|string|true|none|none|
|updated_at|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ENABLED|
|status|DISABLED|

<h2 id="tocS_OriginScriptsOutput">OriginScriptsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaoriginscriptsoutput"></a>
<a id="schema_OriginScriptsOutput"></a>
<a id="tocSoriginscriptsoutput"></a>
<a id="tocsoriginscriptsoutput"></a>

```json
{
  "detection": "string",
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detection|string|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_OriginStatusDetailsCollectionOutput">OriginStatusDetailsCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaoriginstatusdetailscollectionoutput"></a>
<a id="schema_OriginStatusDetailsCollectionOutput"></a>
<a id="tocSoriginstatusdetailscollectionoutput"></a>
<a id="tocsoriginstatusdetailscollectionoutput"></a>

```json
{
  "list": [
    {
      "cardinality": 0,
      "description": "string",
      "self": "string",
      "status": "string"
    }
  ],
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[[OriginStatusDetailsOutput](#schemaoriginstatusdetailsoutput)]|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_OriginStatusDetailsOutput">OriginStatusDetailsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaoriginstatusdetailsoutput"></a>
<a id="schema_OriginStatusDetailsOutput"></a>
<a id="tocSoriginstatusdetailsoutput"></a>
<a id="tocsoriginstatusdetailsoutput"></a>

```json
{
  "cardinality": 0,
  "description": "string",
  "self": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardinality|integer|true|none|none|
|description|string|true|none|none|
|self|string|true|none|none|
|status|string|true|none|none|

<h2 id="tocS_OriginStatusOutput">OriginStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemaoriginstatusoutput"></a>
<a id="schema_OriginStatusOutput"></a>
<a id="tocSoriginstatusoutput"></a>
<a id="tocsoriginstatusoutput"></a>

```json
{
  "address": {
    "address": "string",
    "created_at": 0,
    "expiry": 0,
    "log_id": "string",
    "status": "string",
    "updated_at": 0
  },
  "cookie_id": {
    "cookie_id": "string",
    "created_at": 0,
    "expiry": 0,
    "log_id": "string",
    "status": "string",
    "updated_at": 0
  },
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[OriginAddressStatusOutput](#schemaoriginaddressstatusoutput)|false|none|none|
|cookie_id|[OriginCookieIdStatusOutput](#schemaorigincookieidstatusoutput)|false|none|none|
|self|string|true|none|none|

<h2 id="tocS_OriginTokenCollectionOutput">OriginTokenCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaorigintokencollectionoutput"></a>
<a id="schema_OriginTokenCollectionOutput"></a>
<a id="tocSorigintokencollectionoutput"></a>
<a id="tocsorigintokencollectionoutput"></a>

```json
{
  "self": "string",
  "tokens": [
    {
      "created_at": 0,
      "origin": "string",
      "region_id": "string",
      "self": "string",
      "status": "ENABLED",
      "updated_at": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string|true|none|none|
|tokens|[[OriginTokenOutput](#schemaorigintokenoutput)]|true|none|none|

<h2 id="tocS_OriginTokenInput">OriginTokenInput</h2>
<!-- backwards compatibility -->
<a id="schemaorigintokeninput"></a>
<a id="schema_OriginTokenInput"></a>
<a id="tocSorigintokeninput"></a>
<a id="tocsorigintokeninput"></a>

```json
{
  "origin": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|origin|string|true|none|none|

<h2 id="tocS_OriginTokenOutput">OriginTokenOutput</h2>
<!-- backwards compatibility -->
<a id="schemaorigintokenoutput"></a>
<a id="schema_OriginTokenOutput"></a>
<a id="tocSorigintokenoutput"></a>
<a id="tocsorigintokenoutput"></a>

```json
{
  "created_at": 0,
  "origin": "string",
  "region_id": "string",
  "self": "string",
  "status": "ENABLED",
  "updated_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|true|none|none|
|origin|string|true|none|none|
|region_id|string|true|none|none|
|self|string|true|none|none|
|status|string|true|none|none|
|updated_at|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ENABLED|
|status|DISABLED|

<h2 id="tocS_OriginTrafficAnalysisCollectionOutput">OriginTrafficAnalysisCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaorigintrafficanalysiscollectionoutput"></a>
<a id="schema_OriginTrafficAnalysisCollectionOutput"></a>
<a id="tocSorigintrafficanalysiscollectionoutput"></a>
<a id="tocsorigintrafficanalysiscollectionoutput"></a>

```json
{
  "data": [
    {
      "asn_risky": 0,
      "bots": 0,
      "datacenters": 0,
      "denylists": 0,
      "network_country_mismatches": 0,
      "score_high": 0,
      "timestamp": 0,
      "total": 0,
      "webdrivers": 0
    }
  ],
  "from_timestamp": 0,
  "interval": "string",
  "self": "string",
  "to_timestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[OriginTrafficAnalysisOutput](#schemaorigintrafficanalysisoutput)]|true|none|none|
|from_timestamp|integer|true|none|none|
|interval|string|true|none|none|
|self|string|true|none|none|
|to_timestamp|integer|true|none|none|

<h2 id="tocS_OriginTrafficAnalysisOutput">OriginTrafficAnalysisOutput</h2>
<!-- backwards compatibility -->
<a id="schemaorigintrafficanalysisoutput"></a>
<a id="schema_OriginTrafficAnalysisOutput"></a>
<a id="tocSorigintrafficanalysisoutput"></a>
<a id="tocsorigintrafficanalysisoutput"></a>

```json
{
  "asn_risky": 0,
  "bots": 0,
  "datacenters": 0,
  "denylists": 0,
  "network_country_mismatches": 0,
  "score_high": 0,
  "timestamp": 0,
  "total": 0,
  "webdrivers": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asn_risky|integer|true|none|none|
|bots|integer|true|none|none|
|datacenters|integer|true|none|none|
|denylists|integer|true|none|none|
|network_country_mismatches|integer|true|none|none|
|score_high|integer|true|none|none|
|timestamp|integer|true|none|none|
|total|integer|true|none|none|
|webdrivers|integer|true|none|none|

<h2 id="tocS_PrivateAclGroupListCollectionOutput">PrivateAclGroupListCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaprivateaclgrouplistcollectionoutput"></a>
<a id="schema_PrivateAclGroupListCollectionOutput"></a>
<a id="tocSprivateaclgrouplistcollectionoutput"></a>
<a id="tocsprivateaclgrouplistcollectionoutput"></a>

```json
{
  "lists": [
    {
      "content": "string",
      "created_at": 0,
      "description": "string",
      "list_type": "UNKNOWN",
      "name": "string",
      "origins": {
        "lists": [
          {
            "created_at": 0,
            "origin": "string",
            "self": "string",
            "status": "INACTIVE",
            "updated_at": 0
          }
        ],
        "self": "string"
      },
      "resource_type": "UNKNOWN",
      "self": "string",
      "tags": [
        "string"
      ],
      "ttl": 0,
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lists|[[PrivateAclGroupListOutput](#schemaprivateaclgrouplistoutput)]|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_PrivateAclGroupListInput">PrivateAclGroupListInput</h2>
<!-- backwards compatibility -->
<a id="schemaprivateaclgrouplistinput"></a>
<a id="schema_PrivateAclGroupListInput"></a>
<a id="tocSprivateaclgrouplistinput"></a>
<a id="tocsprivateaclgrouplistinput"></a>

```json
{
  "description": "string",
  "name": "string",
  "resource_type": "UNKNOWN",
  "tags": [
    "string"
  ],
  "ttl": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|name|string|true|none|none|
|resource_type|string|true|none|none|
|tags|[string]|true|none|none|
|ttl|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|resource_type|UNKNOWN|
|resource_type|CIDR|
|resource_type|COUNTRY|
|resource_type|CONTINENT|
|resource_type|AS|
|resource_type|DATACENTER|
|resource_type|USERAGENT|

<h2 id="tocS_PrivateAclGroupListOutput">PrivateAclGroupListOutput</h2>
<!-- backwards compatibility -->
<a id="schemaprivateaclgrouplistoutput"></a>
<a id="schema_PrivateAclGroupListOutput"></a>
<a id="tocSprivateaclgrouplistoutput"></a>
<a id="tocsprivateaclgrouplistoutput"></a>

```json
{
  "content": "string",
  "created_at": 0,
  "description": "string",
  "list_type": "UNKNOWN",
  "name": "string",
  "origins": {
    "lists": [
      {
        "created_at": 0,
        "origin": "string",
        "self": "string",
        "status": "INACTIVE",
        "updated_at": 0
      }
    ],
    "self": "string"
  },
  "resource_type": "UNKNOWN",
  "self": "string",
  "tags": [
    "string"
  ],
  "ttl": 0,
  "updated_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|none|
|created_at|integer|true|none|none|
|description|string|true|none|none|
|list_type|string|true|none|none|
|name|string|true|none|none|
|origins|[AclGroupOriginCollectionOutput](#schemaaclgrouporigincollectionoutput)|false|none|none|
|resource_type|string|true|none|none|
|self|string|true|none|none|
|tags|[string]|true|none|none|
|ttl|integer|false|none|none|
|updated_at|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|list_type|UNKNOWN|
|list_type|ALLOW|
|list_type|DENY|
|resource_type|UNKNOWN|
|resource_type|CIDR|
|resource_type|COUNTRY|
|resource_type|CONTINENT|
|resource_type|AS|
|resource_type|DATACENTER|
|resource_type|USERAGENT|

<h2 id="tocS_PrivateAclListCollectionOutput">PrivateAclListCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaprivateacllistcollectionoutput"></a>
<a id="schema_PrivateAclListCollectionOutput"></a>
<a id="tocSprivateacllistcollectionoutput"></a>
<a id="tocsprivateacllistcollectionoutput"></a>

```json
{
  "asns": [
    0
  ],
  "cidrs": [
    "string"
  ],
  "continents": [
    "AF"
  ],
  "countries": [
    "AW"
  ],
  "datacenters": [
    "string"
  ],
  "self": "string",
  "user_agents": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asns|[integer]|false|none|none|
|cidrs|[string(ipv4network) \| string(ipv6network)]|false|none|none|
|continents|[string]|false|none|none|
|countries|[string]|false|none|none|
|datacenters|[string]|false|none|none|
|self|string|true|none|none|
|user_agents|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|continents|AF|
|continents|AN|
|continents|AS|
|continents|EU|
|continents|NA|
|continents|OC|
|continents|SA|
|countries|AW|
|countries|AF|
|countries|AO|
|countries|AI|
|countries|AX|
|countries|AL|
|countries|AD|
|countries|AE|
|countries|AR|
|countries|AM|
|countries|AS|
|countries|AQ|
|countries|TF|
|countries|AG|
|countries|AU|
|countries|AT|
|countries|AZ|
|countries|BI|
|countries|BE|
|countries|BJ|
|countries|BQ|
|countries|BF|
|countries|BD|
|countries|BG|
|countries|BH|
|countries|BS|
|countries|BA|
|countries|BL|
|countries|BY|
|countries|BZ|
|countries|BM|
|countries|BO|
|countries|BR|
|countries|BB|
|countries|BN|
|countries|BT|
|countries|BV|
|countries|BW|
|countries|CF|
|countries|CA|
|countries|CC|
|countries|CH|
|countries|CL|
|countries|CN|
|countries|CI|
|countries|CM|
|countries|CD|
|countries|CG|
|countries|CK|
|countries|CO|
|countries|KM|
|countries|CV|
|countries|CR|
|countries|CU|
|countries|CW|
|countries|CX|
|countries|KY|
|countries|CY|
|countries|CZ|
|countries|DE|
|countries|DJ|
|countries|DM|
|countries|DK|
|countries|DO|
|countries|DZ|
|countries|EC|
|countries|EG|
|countries|ER|
|countries|EH|
|countries|ES|
|countries|EE|
|countries|ET|
|countries|FI|
|countries|FJ|
|countries|FK|
|countries|FR|
|countries|FO|
|countries|FM|
|countries|GA|
|countries|GB|
|countries|GE|
|countries|GG|
|countries|GH|
|countries|GI|
|countries|GN|
|countries|GP|
|countries|GM|
|countries|GW|
|countries|GQ|
|countries|GR|
|countries|GD|
|countries|GL|
|countries|GT|
|countries|GF|
|countries|GU|
|countries|GY|
|countries|HK|
|countries|HM|
|countries|HN|
|countries|HR|
|countries|HT|
|countries|HU|
|countries|ID|
|countries|IM|
|countries|IN|
|countries|IO|
|countries|IE|
|countries|IR|
|countries|IQ|
|countries|IS|
|countries|IL|
|countries|IT|
|countries|JM|
|countries|JE|
|countries|JO|
|countries|JP|
|countries|KZ|
|countries|KE|
|countries|KG|
|countries|KH|
|countries|KI|
|countries|KN|
|countries|KR|
|countries|KW|
|countries|LA|
|countries|LB|
|countries|LR|
|countries|LY|
|countries|LC|
|countries|LI|
|countries|LK|
|countries|LS|
|countries|LT|
|countries|LU|
|countries|LV|
|countries|MO|
|countries|MF|
|countries|MA|
|countries|MC|
|countries|MD|
|countries|MG|
|countries|MV|
|countries|MX|
|countries|MH|
|countries|MK|
|countries|ML|
|countries|MT|
|countries|MM|
|countries|ME|
|countries|MN|
|countries|MP|
|countries|MZ|
|countries|MR|
|countries|MS|
|countries|MQ|
|countries|MU|
|countries|MW|
|countries|MY|
|countries|YT|
|countries|NA|
|countries|NC|
|countries|NE|
|countries|NF|
|countries|NG|
|countries|NI|
|countries|NU|
|countries|NL|
|countries|NO|
|countries|NP|
|countries|NR|
|countries|NZ|
|countries|OM|
|countries|PK|
|countries|PA|
|countries|PN|
|countries|PE|
|countries|PH|
|countries|PW|
|countries|PG|
|countries|PL|
|countries|PR|
|countries|KP|
|countries|PT|
|countries|PY|
|countries|PS|
|countries|PF|
|countries|QA|
|countries|RE|
|countries|RO|
|countries|RU|
|countries|RW|
|countries|SA|
|countries|SD|
|countries|SN|
|countries|SG|
|countries|GS|
|countries|SH|
|countries|SJ|
|countries|SB|
|countries|SL|
|countries|SV|
|countries|SM|
|countries|SO|
|countries|PM|
|countries|RS|
|countries|SS|
|countries|ST|
|countries|SR|
|countries|SK|
|countries|SI|
|countries|SE|
|countries|SZ|
|countries|SX|
|countries|SC|
|countries|SY|
|countries|TC|
|countries|TD|
|countries|TG|
|countries|TH|
|countries|TJ|
|countries|TK|
|countries|TM|
|countries|TL|
|countries|TO|
|countries|TT|
|countries|TN|
|countries|TR|
|countries|TV|
|countries|TW|
|countries|TZ|
|countries|UG|
|countries|UA|
|countries|UM|
|countries|UY|
|countries|US|
|countries|UZ|
|countries|VA|
|countries|VC|
|countries|VE|
|countries|VG|
|countries|VI|
|countries|VN|
|countries|VU|
|countries|WF|
|countries|WS|
|countries|YE|
|countries|ZA|
|countries|ZM|
|countries|ZW|

<h2 id="tocS_PublicAclGroupListCollectionOutput">PublicAclGroupListCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemapublicaclgrouplistcollectionoutput"></a>
<a id="schema_PublicAclGroupListCollectionOutput"></a>
<a id="tocSpublicaclgrouplistcollectionoutput"></a>
<a id="tocspublicaclgrouplistcollectionoutput"></a>

```json
{
  "lists": [
    {
      "created_at": 0,
      "description": "string",
      "list_type": "UNKNOWN",
      "name": "string",
      "origins": {
        "lists": [
          {
            "created_at": 0,
            "origin": "string",
            "self": "string",
            "status": "INACTIVE",
            "updated_at": 0
          }
        ],
        "self": "string"
      },
      "resource_type": "UNKNOWN",
      "self": "string",
      "status": "INACTIVE",
      "tags": [
        "string"
      ],
      "ttl": 0,
      "updated_at": 0
    }
  ],
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lists|[[PublicAclGroupListOutput](#schemapublicaclgrouplistoutput)]|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_PublicAclGroupListOutput">PublicAclGroupListOutput</h2>
<!-- backwards compatibility -->
<a id="schemapublicaclgrouplistoutput"></a>
<a id="schema_PublicAclGroupListOutput"></a>
<a id="tocSpublicaclgrouplistoutput"></a>
<a id="tocspublicaclgrouplistoutput"></a>

```json
{
  "created_at": 0,
  "description": "string",
  "list_type": "UNKNOWN",
  "name": "string",
  "origins": {
    "lists": [
      {
        "created_at": 0,
        "origin": "string",
        "self": "string",
        "status": "INACTIVE",
        "updated_at": 0
      }
    ],
    "self": "string"
  },
  "resource_type": "UNKNOWN",
  "self": "string",
  "status": "INACTIVE",
  "tags": [
    "string"
  ],
  "ttl": 0,
  "updated_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|true|none|none|
|description|string|true|none|none|
|list_type|string|true|none|none|
|name|string|true|none|none|
|origins|[AclGroupOriginCollectionOutput](#schemaaclgrouporigincollectionoutput)|false|none|none|
|resource_type|string|true|none|none|
|self|string|true|none|none|
|status|string|false|none|none|
|tags|[string]|true|none|none|
|ttl|integer|false|none|none|
|updated_at|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|list_type|UNKNOWN|
|list_type|ALLOW|
|list_type|DENY|
|resource_type|UNKNOWN|
|resource_type|CIDR|
|resource_type|COUNTRY|
|resource_type|CONTINENT|
|resource_type|AS|
|resource_type|DATACENTER|
|resource_type|USERAGENT|
|status|INACTIVE|
|status|ACTIVE|
|status|EXPIRED|

<h2 id="tocS_SourceCollectionOutput">SourceCollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemasourcecollectionoutput"></a>
<a id="schema_SourceCollectionOutput"></a>
<a id="tocSsourcecollectionoutput"></a>
<a id="tocssourcecollectionoutput"></a>

```json
{
  "self": "string",
  "sources": [
    {
      "dataset": "string",
      "description": "string",
      "maximum_risk": "UNKNOWN",
      "maximum_score": 0,
      "minimum_risk": "UNKNOWN",
      "minimum_score": 0,
      "name": "string",
      "refresh": "1H",
      "self": "string",
      "source": "string",
      "time_ranges": [
        "string"
      ],
      "updated_at": 0,
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string|true|none|none|
|sources|[[v1__models__source__SourceOutput](#schemav1__models__source__sourceoutput)]|true|none|none|

<h2 id="tocS_SourceTimeRangeOutput">SourceTimeRangeOutput</h2>
<!-- backwards compatibility -->
<a id="schemasourcetimerangeoutput"></a>
<a id="schema_SourceTimeRangeOutput"></a>
<a id="tocSsourcetimerangeoutput"></a>
<a id="tocssourcetimerangeoutput"></a>

```json
{
  "items": 0,
  "lapse": "1H",
  "risk": "UNKNOWN",
  "score": 0,
  "self": "string",
  "source": "string",
  "updated_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|integer|true|none|none|
|lapse|string|true|none|none|
|risk|string|true|none|none|
|score|integer|true|none|none|
|self|string|true|none|none|
|source|string|true|none|none|
|updated_at|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|lapse|1H|
|lapse|6H|
|lapse|12H|
|lapse|1D|
|lapse|7D|
|lapse|30D|
|lapse|90D|
|lapse|180D|
|lapse|365D|
|risk|UNKNOWN|
|risk|LOW|
|risk|MEDIUM|
|risk|HIGH|

<h2 id="tocS_TokenOutput">TokenOutput</h2>
<!-- backwards compatibility -->
<a id="schematokenoutput"></a>
<a id="schema_TokenOutput"></a>
<a id="tocStokenoutput"></a>
<a id="tocstokenoutput"></a>

```json
{
  "created_at": 0,
  "last_minute_bucket_init_value": 0,
  "last_minute_bucket_refill_ratio": 0,
  "last_minute_bucket_refresh": 0,
  "last_minute_bucket_value": 0,
  "last_month_bucket_init_value": 0,
  "last_month_bucket_refresh": 0,
  "last_month_bucket_value": 0,
  "region_id": "string",
  "self": "string",
  "status": "ENABLED",
  "updated_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|true|none|none|
|last_minute_bucket_init_value|integer|true|none|none|
|last_minute_bucket_refill_ratio|integer|true|none|none|
|last_minute_bucket_refresh|integer|true|none|none|
|last_minute_bucket_value|integer|true|none|none|
|last_month_bucket_init_value|integer|true|none|none|
|last_month_bucket_refresh|integer|true|none|none|
|last_month_bucket_value|integer|true|none|none|
|region_id|string|true|none|none|
|self|string|true|none|none|
|status|string|true|none|none|
|updated_at|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ENABLED|
|status|DISABLED|

<h2 id="tocS_TypeOutput">TypeOutput</h2>
<!-- backwards compatibility -->
<a id="schematypeoutput"></a>
<a id="schema_TypeOutput"></a>
<a id="tocStypeoutput"></a>
<a id="tocstypeoutput"></a>

```json
{
  "code": "string",
  "description": "string",
  "type": "INTERACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|description|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|INTERACTIVE|
|type|CRAWLER|
|type|UNKNOWN|

<h2 id="tocS_UACollectionOutput">UACollectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemauacollectionoutput"></a>
<a id="schema_UACollectionOutput"></a>
<a id="tocSuacollectionoutput"></a>
<a id="tocsuacollectionoutput"></a>

```json
{
  "results": [
    {
      "agent": "string",
      "classification": "CRAWLER",
      "device": "string",
      "engine": "string",
      "family": "string",
      "frequent": "COMMON",
      "latest": "string",
      "os": "string",
      "self": "string",
      "string": "string",
      "type": "string",
      "vendor": "string",
      "version": "string"
    }
  ],
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[UAOutput](#schemauaoutput)]|true|none|none|
|self|string|true|none|none|

<h2 id="tocS_UAOutput">UAOutput</h2>
<!-- backwards compatibility -->
<a id="schemauaoutput"></a>
<a id="schema_UAOutput"></a>
<a id="tocSuaoutput"></a>
<a id="tocsuaoutput"></a>

```json
{
  "agent": "string",
  "classification": "CRAWLER",
  "device": "string",
  "engine": "string",
  "family": "string",
  "frequent": "COMMON",
  "latest": "string",
  "os": "string",
  "self": "string",
  "string": "string",
  "type": "string",
  "vendor": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent|string|true|none|none|
|classification|string|true|none|none|
|device|string|true|none|none|
|engine|string|true|none|none|
|family|string|true|none|none|
|frequent|string|true|none|none|
|latest|string|true|none|none|
|os|string|true|none|none|
|self|string|false|none|none|
|string|string|true|none|none|
|type|string|true|none|none|
|vendor|string|true|none|none|
|version|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|classification|CRAWLER|
|classification|CLIENT|
|classification|UNKNOWN|
|frequent|COMMON|
|frequent|RARE|
|frequent|VERY_RARE|
|frequent|UNKNOWN|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "loc": [
    "string"
  ],
  "msg": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loc|[string \| integer]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_VendorOutput">VendorOutput</h2>
<!-- backwards compatibility -->
<a id="schemavendoroutput"></a>
<a id="schema_VendorOutput"></a>
<a id="tocSvendoroutput"></a>
<a id="tocsvendoroutput"></a>

```json
{
  "code": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|description|string|true|none|none|

<h2 id="tocS_v1__models__source__SourceOutput">v1__models__source__SourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemav1__models__source__sourceoutput"></a>
<a id="schema_v1__models__source__SourceOutput"></a>
<a id="tocSv1__models__source__sourceoutput"></a>
<a id="tocsv1__models__source__sourceoutput"></a>

```json
{
  "dataset": "string",
  "description": "string",
  "maximum_risk": "UNKNOWN",
  "maximum_score": 0,
  "minimum_risk": "UNKNOWN",
  "minimum_score": 0,
  "name": "string",
  "refresh": "1H",
  "self": "string",
  "source": "string",
  "time_ranges": [
    "string"
  ],
  "updated_at": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|string|true|none|none|
|description|string|true|none|none|
|maximum_risk|string|true|none|none|
|maximum_score|integer|true|none|none|
|minimum_risk|string|true|none|none|
|minimum_score|integer|true|none|none|
|name|string|true|none|none|
|refresh|string|true|none|none|
|self|string|true|none|none|
|source|string|true|none|none|
|time_ranges|[string]|true|none|none|
|updated_at|integer|true|none|none|
|url|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|maximum_risk|UNKNOWN|
|maximum_risk|LOW|
|maximum_risk|MEDIUM|
|maximum_risk|HIGH|
|minimum_risk|UNKNOWN|
|minimum_risk|LOW|
|minimum_risk|MEDIUM|
|minimum_risk|HIGH|
|refresh|1H|
|refresh|6H|
|refresh|12H|
|refresh|1D|
|refresh|7D|
|refresh|30D|
|refresh|90D|
|refresh|180D|
|refresh|365D|

<h2 id="tocS_v1__models__token__SourceOutput">v1__models__token__SourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemav1__models__token__sourceoutput"></a>
<a id="schema_v1__models__token__SourceOutput"></a>
<a id="tocSv1__models__token__sourceoutput"></a>
<a id="tocsv1__models__token__sourceoutput"></a>

```json
{
  "address": "string",
  "body": "string",
  "method": "string",
  "status_code": 0,
  "ua_string": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|none|
|body|string|true|none|none|
|method|string|true|none|none|
|status_code|integer|true|none|none|
|ua_string|string|true|none|none|
|uri|string|true|none|none|
