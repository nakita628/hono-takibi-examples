<h1 id="mimic-rest-api">MIMIC REST API v21.00</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the API for MIMIC client to connect to MIMIC daemon.

Base URLs:

* <a href="http://gambitcomm.local">http://gambitcomm.local</a>

* <a href="http://127.0.0.1">http://127.0.0.1</a> - Gambit Communications MIMIC simulator REST API

<a href="https://www.gambitcomm.com/terms/">Terms of service</a>
Email: <a href="mailto:support@gambitcomm.com">support@gambitcomm.com</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="https://www.gambitcomm.com/site/about.php">Find out more about Gambit</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="mimic-rest-api-access">Access</h1>

## Adds/Overwrites the user entry in the access control database.

<a id="opIdaccess_add"></a>

> Code samples

```bash
curl https://example.com/mimic/access/add/string/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/access/add/{user}/{agents}/{mask}`

Adds/Overwrites the user entry in the access control database.

<h3 id="addsoverwrites-the-user-entry-in-the-access-control-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|Username of the simulator hosting system|
|agents|path|string|true|Agent range in minimal range representation|
|mask|path|string|true|Currently not used|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="addsoverwrites-the-user-entry-in-the-access-control-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Clears a users entry from access control database.

<a id="opIdaccess_del"></a>

> Code samples

```bash
curl https://example.com/mimic/access/del/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/access/del/{user}`

Using '*' for user clears all the users.

<h3 id="clears-a-users-entry-from-access-control-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|username of the simulator hosting system|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="clears-a-users-entry-from-access-control-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns the current access control database in use.

<a id="opIdaccess_get_acldb"></a>

> Code samples

```bash
curl https://example.com/mimic/access/get/acldb \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/access/get/acldb`

If nothing is specified then this returns "".

> Example responses

> 200 Response

```json
"string"
```

<h3 id="returns-the-current-access-control-database-in-use-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns the current admin directory.

<a id="opIdaccess_get_admindir"></a>

> Code samples

```bash
curl https://example.com/mimic/access/get/admindir \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/access/get/admindir`

If nothing is specified in admin/settings.cfg then returns "". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )

> Example responses

> 200 Response

```json
"string"
```

<h3 id="returns-the-current-admin-directory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns the current administrator.

<a id="opIdaccess_get_adminuser"></a>

> Code samples

```bash
curl https://example.com/mimic/access/get/adminuser \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/access/get/adminuser`

If nothing is specified in admin/settings.cfg then returns "".

> Example responses

> 200 Response

```json
"string"
```

<h3 id="returns-the-current-administrator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns the state of access control checking.

<a id="opIdaccess_get_enabled"></a>

> Code samples

```bash
curl https://example.com/mimic/access/get/enabled \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/access/get/enabled`

0 indicates that it is disabled, 1 indicates it is enabled.

> Example responses

> 200 Response

```json
"string"
```

<h3 id="returns-the-state-of-access-control-checking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns an array of entries.

<a id="opIdaccess_list"></a>

> Code samples

```bash
curl https://example.com/mimic/access/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/access/list`

Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).

> Example responses

> 200 Response

```json
[
  {
    "access_mask": "string",
    "agent_range": "string",
    "user": "string"
  }
]
```

<h3 id="returns-an-array-of-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="returns-an-array-of-entries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AccessEntry](#schemaaccessentry)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Loads the specified file for access control data.

<a id="opIdaccess_load"></a>

> Code samples

```bash
curl https://example.com/mimic/access/load/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/access/load/{filename}`

If filename is not specified then the currently set 'acldb' parameter is used.

<h3 id="loads-the-specified-file-for-access-control-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Filename to load|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="loads-the-specified-file-for-access-control-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="loads-the-specified-file-for-access-control-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Saves current access control data in specified file.

<a id="opIdaccess_save"></a>

> Code samples

```bash
curl https://example.com/mimic/access/save/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/access/save/{filename}`

If filename is not specified then the currently set 'acldb' parameter is used.

<h3 id="saves-current-access-control-data-in-specified-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Filename to save|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="saves-current-access-control-data-in-specified-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="saves-current-access-control-data-in-specified-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Allows setting the name of the current access control database.

<a id="opIdaccess_set_acldb"></a>

> Code samples

```bash
curl https://example.com/mimic/access/set/acldb/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/access/set/acldb/{databaseName}`

This will be used for subsequent load and save operations.

<h3 id="allows-setting-the-name-of-the-current-access-control-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseName|path|string|true|Database name to use|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="allows-setting-the-name-of-the-current-access-control-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Allows the user to enable/disable the access control check.

<a id="opIdaccess_set_enabled"></a>

> Code samples

```bash
curl https://example.com/mimic/access/set/enabled/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/access/set/enabled/{enabledOrNot}`

0 indicates disabled, 1 indicates enabled.

<h3 id="allows-the-user-to-enabledisable-the-access-control-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enabledOrNot|path|string|true|indicator|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="allows-the-user-to-enabledisable-the-access-control-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-agent">Agent</h1>

## Add an agent.

<a id="opIdnew"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/add/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "device": "string",
      "mib": "string",
      "scenario": 0
    }
  ]'
```

`POST /mimic/agent/{agentNum}/add/{IP}`

Add an agent.

> Body parameter

```json
[
  {
    "device": "string",
    "mib": "string",
    "scenario": 0
  }
]
```

<h3 id="add-an-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the primary IP|
|IP|path|string|true|Primary IP|
|body|body|[[Triplet](#schematriplet)]|true|Created agent object|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="add-an-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Add a source address that the agent will accept messages from.

<a id="opIdfrom_add"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/from/add/string/0 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/agent/{agentNum}/from/add/{IP}/{port}`

An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.

<h3 id="add-a-source-address-that-the-agent-will-accept-messages-from-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the IP source|
|IP|path|string|true|IP of the port, 0.0.0.0 for any|
|port|path|integer(int32)|true|port of the source, 0 for any|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="add-a-source-address-that-the-agent-will-accept-messages-from-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## delete a source address that the agent will accept messages from.

<a id="opIdfrom_del"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/from/delete/string/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/from/delete/{IP}/{port}`

An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.

<h3 id="delete-a-source-address-that-the-agent-will-accept-messages-from-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to delete the IP source|
|IP|path|string|true|IP of the source|
|port|path|integer(int32)|true|port of the source|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="delete-a-source-address-that-the-agent-will-accept-messages-from-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## List the source addresses that the agent will accept messages from.

<a id="opIdfrom_list"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/from/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/from/list`

This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.

<h3 id="list-the-source-addresses-that-the-agent-will-accept-messages-from-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the IP sources|

> Example responses

> 200 Response

```json
[
  {
    "IP": "string",
    "port": 0
  }
]
```

<h3 id="list-the-source-addresses-that-the-agent-will-accept-messages-from-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="list-the-source-addresses-that-the-agent-will-accept-messages-from-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IPSource](#schemaipsource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## has the agent value space changed?

<a id="opIdget_changed"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/changed \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/changed`

has the agent value space changed?

<h3 id="has-the-agent-value-space-changed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the indicator|

> Example responses

> 200 Response

```json
0
```

<h3 id="has-the-agent-value-space-changed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## has the lab configuration changed?

<a id="opIdget_config_changed"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/config_changed \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/config_changed`

has the lab configuration changed?

<h3 id="has-the-lab-configuration-changed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the indicator|

> Example responses

> 200 Response

```json
0
```

<h3 id="has-the-lab-configuration-changed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## one-way transit delay in msec.

<a id="opIdget_delay"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/delay \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/delay`

The minimum granularity is 10 msec.

<h3 id="one-way-transit-delay-in-msec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the delay time|

> Example responses

> 200 Response

```json
0
```

<h3 id="one-way-transit-delay-in-msec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## drop rate (every N-th PDU). 0 means no drops.

<a id="opIdget_drops"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/drops \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/drops`

drop rate (every N-th PDU). 0 means no drops.

<h3 id="drop-rate-every-n-th-pdu-0-means-no-drops-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the drop rate|

> Example responses

> 200 Response

```json
0
```

<h3 id="drop-rate-every-n-th-pdu-0-means-no-drops-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## host address of the agent.

<a id="opIdget_host"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/host \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/host`

Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.

<h3 id="host-address-of-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(string)|true|Agent to return the primary IP|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="host-address-of-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## timeout in seconds for retransmitting INFORM PDUs.

<a id="opIdget_inform_timeout"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/inform_timeout \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/inform_timeout`

The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.

<h3 id="timeout-in-seconds-for-retransmitting-inform-pdus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the timeout setting|

> Example responses

> 200 Response

```json
0
```

<h3 id="timeout-in-seconds-for-retransmitting-inform-pdus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## network interface card for the agent.

<a id="opIdget_interface"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/interface \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/interface`

network interface card for the agent.

<h3 id="network-interface-card-for-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(string)|true|Agent to return the primary interface|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="network-interface-card-for-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## subnet mask of the agent.

<a id="opIdget_mask"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/mask \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/mask`

subnet mask of the agent.

<h3 id="subnet-mask-of-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(string)|true|Agent to return the primary interface|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="subnet-mask-of-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## set of MIBs, simulations and scenarios

<a id="opIdget_mibs"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/mibs \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/mibs`

set of MIBs, simulations and scenarios

<h3 id="set-of-mibs-simulations-and-scenarios-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the MIB triplets|

> Example responses

> 200 Response

```json
[
  {
    "device": "string",
    "mib": "string",
    "scenario": 0
  }
]
```

<h3 id="set-of-mibs-simulations-and-scenarios-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-of-mibs-simulations-and-scenarios-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Triplet](#schematriplet)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## number of starts for the agent.

<a id="opIdget_number_starts"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/num_starts \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/num_starts`

This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.

<h3 id="number-of-starts-for-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the count|

> Example responses

> 200 Response

```json
0
```

<h3 id="number-of-starts-for-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## MIB directory of the agent.

<a id="opIdget_oiddir"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/oiddir \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/oiddir`

MIB directory of the agent.

<h3 id="mib-directory-of-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the directory path|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="mib-directory-of-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## owner of the agent.

<a id="opIdget_owner"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/owner \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/owner`

owner of the agent.

<h3 id="owner-of-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the owner|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="owner-of-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## maximum PDU size.

<a id="opIdget_pdusize"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/pdusize \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/pdusize`

The limit for this configurable is 65536.

<h3 id="maximum-pdu-size-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the PDU size|

> Example responses

> 200 Response

```json
0
```

<h3 id="maximum-pdu-size-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## port number

<a id="opIdget_port"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/port \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/port`

port number

<h3 id="port-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the primary SNMP port|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="port-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## private directory of the agent.

<a id="opIdget_privdir"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/privdir \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/privdir`

private directory of the agent.

<h3 id="private-directory-of-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the directory path|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="private-directory-of-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## protocols supported by agent

<a id="opIdget_protocols"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/protocol \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/protocol`

protocols supported by agent as an array of strings

<h3 id="protocols-supported-by-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the protocols arrary|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="protocols-supported-by-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="protocols-supported-by-agent-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## read community string

<a id="opIdget_read_community"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/read \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/read`

read community string

<h3 id="read-community-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the SNMP read community string|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="read-community-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## first scenario name

<a id="opIdget_scen"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/scen \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/scen`

first scenario name

<h3 id="first-scenario-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the first scenario number|

> Example responses

> 200 Response

```json
0
```

<h3 id="first-scenario-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## first simulation name

<a id="opIdget_sim"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/sim \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/sim`

first simulation name

<h3 id="first-simulation-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the first simulation name|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="first-simulation-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## relative start time

<a id="opIdget_starttime"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/start \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/start`

relative start time

<h3 id="relative-start-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the relative start time|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="relative-start-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## current running state of the agent

<a id="opIdget_agent_state"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/state \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/state`

0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping

<h3 id="current-running-state-of-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the state|

> Example responses

> 200 Response

```json
0
```

<h3 id="current-running-state-of-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## has the agent state changed?

<a id="opIdget_state_changed"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/state_changed \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/state_changed`

has the agent state changed?

<h3 id="has-the-agent-state-changed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the indicator|

> Example responses

> 200 Response

```json
0
```

<h3 id="has-the-agent-state-changed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## current statistics of the agent instance

<a id="opIdget_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/statistics`

The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT

<h3 id="current-statistics-of-the-agent-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="current-statistics-of-the-agent-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="current-statistics-of-the-agent-instance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## SNMP PDU tracing

<a id="opIdget_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/trace`

SNMP PDU tracing

<h3 id="snmp-pdu-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the indicator|

> Example responses

> 200 Response

```json
0
```

<h3 id="snmp-pdu-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## SNMP SET validation policy.

<a id="opIdget_validate"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/validate \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/validate`

Is a bitmask in which with the following bits (from LSB) check for type, length, range, access

<h3 id="snmp-set-validation-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the bitmask integer|

> Example responses

> 200 Response

```json
0
```

<h3 id="snmp-set-validation-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## write community string

<a id="opIdget_write_community"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/get/write \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/get/write`

write community string

<h3 id="write-community-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the SNMP write community string|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="write-community-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Halt the current agent.

<a id="opIdhalt"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/halt \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/halt`

Halt the current agent.

<h3 id="halt-the-current-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the primary IP|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="halt-the-current-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Adds a new ipalias for the agent.

<a id="opIdadd_ipalias"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/ipalias/add/string/0/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/agent/{agentNum}/ipalias/add/{IP}/{port}/{mask}/{interface}`

port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.

<h3 id="adds-a-new-ipalias-for-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the IP alias|
|IP|path|string|true|IP address , IPv4 or IPv6|
|port|path|integer(int32)|true|SNMP port , 0 or empty for default|
|mask|path|string|true|Netmask, empty for default|
|interface|path|string|true|Interface. Empty for default|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="adds-a-new-ipalias-for-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Deletes an existing ipalias from the agent.

<a id="opIddel_ipalias"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/ipalias/delete/string/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/ipalias/delete/{IP}/{port}`

port defaults to 161 if not specified.

<h3 id="deletes-an-existing-ipalias-from-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to delete the IP alias|
|IP|path|string|true|IP address , IPv4 or IPv6|
|port|path|integer(int32)|true|SNMP port , 0 or empty for default|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="deletes-an-existing-ipalias-from-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Lists all the additional ipaliases configured for the agent.

<a id="opIdlist_ipaliases"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/ipalias/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/ipalias/list`

The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.

<h3 id="lists-all-the-additional-ipaliases-configured-for-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the IP alias list|

> Example responses

> 200 Response

```json
[
  {
    "IP": "string",
    "interface": "string",
    "mask": "string",
    "port": 0
  }
]
```

<h3 id="lists-all-the-additional-ipaliases-configured-for-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="lists-all-the-additional-ipaliases-configured-for-the-agent-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IPAlias](#schemaipalias)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Starts an existing ipalias for the agent.

<a id="opIdstart_ipalias"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/ipalias/start/string/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/ipalias/start/{IP}/{port}`

port defaults to 161 if not specified.

<h3 id="starts-an-existing-ipalias-for-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to start the IP alias|
|IP|path|string|true|IP address , IPv4 or IPv6|
|port|path|integer(int32)|true|SNMP port , 0 or empty for default|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="starts-an-existing-ipalias-for-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns the status (0=down, 1=up) of an existing ipalias for the agent.

<a id="opIdstatus_ipalias"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/ipalias/status/string/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/ipalias/status/{IP}/{port}`

port defaults to 161 if not specified.

<h3 id="returns-the-status-0down-1up-of-an-existing-ipalias-for-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show status of the IP alias|
|IP|path|string|true|IP address , IPv4 or IPv6|
|port|path|integer(int32)|true|SNMP port , 0 or empty for default|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="returns-the-status-0down-1up-of-an-existing-ipalias-for-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Stops an existing ipalias for the agent.

<a id="opIdstop_ipalias"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/ipalias/stop/string/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/ipalias/stop/{IP}/{port}`

port defaults to 161 if not specified.

<h3 id="stops-an-existing-ipalias-for-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to stop the IP alias|
|IP|path|string|true|IP address , IPv4 or IPv6|
|port|path|integer(int32)|true|SNMP port , 0 or empty for default|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="stops-an-existing-ipalias-for-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Pause the current agent.

<a id="opIdpause_now"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/pause \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/pause`

Pause the current agent.

<h3 id="pause-the-current-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the primary IP|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="pause-the-current-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns the protocol's configuration.

<a id="opIdprotocol_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/string/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/{prot}/get/config`

Returns the protocol's configuration.

<h3 id="returns-the-protocols-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the protocol configuration|
|prot|path|string|true|Protocol to show configuration|

> Example responses

> 200 Response

```json
{}
```

<h3 id="returns-the-protocols-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Reload the current agent.

<a id="opIdreload"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/reload \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/reload`

This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).

<h3 id="reload-the-current-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the primary IP|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="reload-the-current-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Remove the current agent.

<a id="opIdagent_remove"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/remove \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/remove`

For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.

<h3 id="remove-the-current-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the primary IP|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="remove-the-current-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Resume the current agent.

<a id="opIdresume"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/resume \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/resume`

Resume the current agent.

<h3 id="resume-the-current-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the primary IP|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="resume-the-current-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Save agent MIB values.

<a id="opIdsave"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/save \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/save`

Save agent MIB values.

<h3 id="save-agent-mib-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to save|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="save-agent-mib-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## one-way transit delay in msec

<a id="opIdset_delay"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/delay/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/delay/{delay}`

The minimum granularity is 10 msec.

<h3 id="one-way-transit-delay-in-msec-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the delay time|
|delay|path|integer(int32)|true|Delay time of the agent|

> Example responses

> 200 Response

```json
0
```

<h3 id="one-way-transit-delay-in-msec-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## drop rate (every N-th PDU)

<a id="opIdset_drops"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/drops/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/drops/{drops}`

0 means no drops

<h3 id="drop-rate-every-n-th-pdu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the drop rate|
|drops|path|integer(int32)|true|Drop rate of the agent|

> Example responses

> 200 Response

```json
0
```

<h3 id="drop-rate-every-n-th-pdu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## host address of the agent.

<a id="opIdset_host"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/host/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/host/{host}`

Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.

<h3 id="host-address-of-the-agent-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(string)|true|Agent to set the primary IP|
|host|path|string|true|Primary IP of the agent|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="host-address-of-the-agent-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## timeout in seconds for retransmitting INFORM PDUs

<a id="opIdset_inform_timeout"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/inform_timeout/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/inform_timeout/{inform_timeout}`

The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.

<h3 id="timeout-in-seconds-for-retransmitting-inform-pdus-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the timeout setting|
|inform_timeout|path|integer(int32)|true|Tmeout setting|

> Example responses

> 200 Response

```json
0
```

<h3 id="timeout-in-seconds-for-retransmitting-inform-pdus-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## network interface card for the agent

<a id="opIdset_interface"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/interface/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/interface/{interface}`

network interface card for the agent

<h3 id="network-interface-card-for-the-agent-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(string)|true|Agent to set the primary interface|
|interface|path|string|true|Primary interface of the agent|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="network-interface-card-for-the-agent-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## subnet mask of the agent.

<a id="opIdset_mask"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/mask/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/mask/{mask}`

subnet mask of the agent.

<h3 id="subnet-mask-of-the-agent-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(string)|true|Agent to set the primary IP address mask|
|mask|path|string|true|Mask to set for the agent primary IP address|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="subnet-mask-of-the-agent-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## set of MIBs, simulations and scenarios

<a id="opIdset_mibs"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/mibs \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "device": "string",
      "mib": "string",
      "scenario": 0
    }
  ]'
```

`PUT /mimic/agent/{agentNum}/set/mibs`

set of MIBs, simulations and scenarios

> Body parameter

```json
[
  {
    "device": "string",
    "mib": "string",
    "scenario": 0
  }
]
```

<h3 id="set-of-mibs-simulations-and-scenarios-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the MIB triplets|
|body|body|[[Triplet](#schematriplet)]|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-of-mibs-simulations-and-scenarios-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## MIB directory of the agent.

<a id="opIdset_oiddir"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/oiddir/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/oiddir/{oiddir}`

MIB directory of the agent.

<h3 id="mib-directory-of-the-agent-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the directory path|
|oiddir|path|string|true|Directory path for the agent|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="mib-directory-of-the-agent-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## owner of the agent

<a id="opIdset_owner"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/owner/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/owner/{owner}`

owner of the agent

<h3 id="owner-of-the-agent-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the owner|
|owner|path|string|true|Owner of the agent|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="owner-of-the-agent-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## maximum PDU size

<a id="opIdset_pdusize"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/pdusize/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/pdusize/{pdusize}`

The limit for this configurable is 65536

<h3 id="maximum-pdu-size-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the PDU size|
|pdusize|path|integer(int32)|true|PDU size setting for the agent|

> Example responses

> 200 Response

```json
0
```

<h3 id="maximum-pdu-size-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## port number

<a id="opIdset_port"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/port/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/port/{port}`

port number

<h3 id="port-number-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the primary SNMP port|
|port|path|integer(int32)|true|Primary SNMP port of the agent|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="port-number-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## private directory of the agent.

<a id="opIdset_privdir"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/privdir/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/privdir/{privdir}`

private directory of the agent.

<h3 id="private-directory-of-the-agent-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the directory path|
|privdir|path|string|true|Directory path for the agent|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="private-directory-of-the-agent-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## protocols supported by agent as a comma-separated list

<a id="opIdset_protocols"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/protocol \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    "string"
  ]'
```

`PUT /mimic/agent/{agentNum}/set/protocol`

protocols supported by agent as a comma-separated list

> Body parameter

```json
[
  "string"
]
```

<h3 id="protocols-supported-by-agent-as-a-comma-separated-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the protocols arrary|
|body|body|[string]|true|Created agent object|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="protocols-supported-by-agent-as-a-comma-separated-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="protocols-supported-by-agent-as-a-comma-separated-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(string)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## read community string

<a id="opIdset_read_community"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/read/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/read/{read}`

read community string

<h3 id="read-community-string-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the SNMP read community string|
|read|path|string|true|SNMP read community string|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="read-community-string-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## relative start time

<a id="opIdset_starttime"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/start/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/start/{start}`

relative start time

<h3 id="relative-start-time-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the relative start time|
|start|path|integer(int32)|true|Relative start time of the agent|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="relative-start-time-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## SNMP PDU tracing

<a id="opIdset_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/trace/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/trace/{trace}`

SNMP PDU tracing

<h3 id="snmp-pdu-tracing-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set trace setting|
|trace|path|integer(int32)|true|Trace setting for the agent|

> Example responses

> 200 Response

```json
0
```

<h3 id="snmp-pdu-tracing-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## SNMP SET validation policy

<a id="opIdset_validate"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/validate/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/validate/{validate}`

Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.

<h3 id="snmp-set-validation-policy-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the bitmask integer|
|validate|path|integer(int32)|true|Bitmask integer to set|

> Example responses

> 200 Response

```json
0
```

<h3 id="snmp-set-validation-policy-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## write community string

<a id="opIdset_write_community"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/set/write/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/set/write/{write}`

write community string

<h3 id="write-community-string-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SNMP write community string|
|write|path|string|true|SNMP write community string|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="write-community-string-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Start the current agent.

<a id="opIdstart"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/start \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/start`

For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.

<h3 id="start-the-current-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the primary IP|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="start-the-current-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's primary IP address

<a id="opIdstop"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/stop \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/stop`

Agent primary IP address

<h3 id="show-the-agents-primary-ip-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the primary IP|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="show-the-agents-primary-ip-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## This command copies the variable store from the other agent to this agent.

<a id="opIdagent_store_copy"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/store/copy/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/store/copy/{otherAgent}`

This command copies the variable store from the other agent to this agent.

<h3 id="this-command-copies-the-variable-store-from-the-other-agent-to-this-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|otherAgent|path|integer(int32)|true|Agent of the value space|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="this-command-copies-the-variable-store-from-the-other-agent-to-this-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## This command can be used as a predicate to ascertain the existence of a given variable.

<a id="opIdagent_store_exists"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/store/exists/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/store/exists/{var}`

It returns "1" if the variable exists, else "0".

<h3 id="this-command-can-be-used-as-a-predicate-to-ascertain-the-existence-of-a-given-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|var|path|string|true|Variable name|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="this-command-can-be-used-as-a-predicate-to-ascertain-the-existence-of-a-given-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Fetches the value associated with a variable.

<a id="opIdagent_store_get"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/store/get/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/store/get/{var}`

The value will be returned as a string (like all Tcl values).

<h3 id="fetches-the-value-associated-with-a-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|var|path|string|true|Variable name|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="fetches-the-value-associated-with-a-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## This command will return the list of variables in the said scope.

<a id="opIdagent_store_list"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/store/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/store/list`

The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.

<h3 id="this-command-will-return-the-list-of-variables-in-the-said-scope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="this-command-will-return-the-list-of-variables-in-the-said-scope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="this-command-will-return-the-list-of-variables-in-the-said-scope-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.

<a id="opIdagent_store_lreplace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/store/lreplace/string/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '"string"'
```

`PUT /mimic/agent/{agentNum}/store/lreplace/{var}/{index}`

These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.

> Body parameter

```json
"string"
```

<h3 id="these-commands-treat-the-variable-as-a-list-and-allow-to-replace-an-entry-in-the-list-at-the-specified-index-with-the-specified-value-the-variable-has-to-already-exist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|var|path|string|true|Variable name|
|index|path|integer(int32)|true|Index|
|body|body|string|false|Value|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="these-commands-treat-the-variable-as-a-list-and-allow-to-replace-an-entry-in-the-list-at-the-specified-index-with-the-specified-value-the-variable-has-to-already-exist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## This command can be used as a predicate to ascertain the persistence of a given variable.

<a id="opIdagent_store_persists"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/store/persists/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/store/persists/{var}`

It returns "1" if the variable is persistent, else "0".

<h3 id="this-command-can-be-used-as-a-predicate-to-ascertain-the-persistence-of-a-given-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|var|path|string|true|Variable name|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="this-command-can-be-used-as-a-predicate-to-ascertain-the-persistence-of-a-given-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## These commands allow the creation of a new variable, or changing an existing value.

<a id="opIdagent_store_set"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/store/set/string/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '"string"'
```

`PUT /mimic/agent/{agentNum}/store/set/{var}/{persist}`

The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.

> Body parameter

```json
"string"
```

<h3 id="these-commands-allow-the-creation-of-a-new-variable-or-changing-an-existing-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|var|path|string|true|Variable name|
|persist|path|integer(int32)|true|Persistent setting|
|body|body|string|false|Value|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="these-commands-allow-the-creation-of-a-new-variable-or-changing-an-existing-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Deletes a variable which is currently defined.

<a id="opIdagent_store_unset"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/store/unset/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/store/unset/{var}`

This will cleanup persistent variables if needed

<h3 id="deletes-a-variable-which-is-currently-defined-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|var|path|string|true|Variable name|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="deletes-a-variable-which-is-currently-defined-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Add a new timer script to be executed at specified interval (in msec) with the specified argument.

<a id="opIdadd_timer_script"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/timer/script/add/string/0/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/agent/{agentNum}/timer/script/add/{script}/{interval}/{arg}`

Add a new timer script to be executed at specified interval (in msec) with the specified argument.

<h3 id="add-a-new-timer-script-to-be-executed-at-specified-interval-in-msec-with-the-specified-argument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the timer script list|
|script|path|string|true|Script name|
|interval|path|integer(int32)|true|Interval in msec|
|arg|path|string|true|Arguments to the script|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="add-a-new-timer-script-to-be-executed-at-specified-interval-in-msec-with-the-specified-argument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Remove a timer script from the execution list.

<a id="opIddel_timer_script"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/timer/script/delete/string/0/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/timer/script/delete/{script}/{interval}/{arg}`

The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.

<h3 id="remove-a-timer-script-from-the-execution-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the timer script list|
|script|path|string|true|Script name|
|interval|path|integer(int32)|true|Interval in msec|
|arg|path|string|true|Arguments to the script|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="remove-a-timer-script-from-the-execution-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## List the timer scripts currently running along with the their intervals.

<a id="opIdlist_timer_scripts"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/timer/script/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/timer/script/list`

The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.

<h3 id="list-the-timer-scripts-currently-running-along-with-the-their-intervals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to return the timer script list|

> Example responses

> 200 Response

```json
[
  {
    "arg": "string",
    "interval": 0,
    "script": "string"
  }
]
```

<h3 id="list-the-timer-scripts-currently-running-along-with-the-their-intervals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="list-the-timer-scripts-currently-running-along-with-the-their-intervals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TimerScript](#schematimerscript)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Add a trap destination to the set of destinations.

<a id="opIdtrap_config_add"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/trap/config/add/string/0 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/agent/{agentNum}/trap/config/add/{IP}/{port}`

Add a trap destination to the set of destinations.

<h3 id="add-a-trap-destination-to-the-set-of-destinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the destination|
|IP|path|string|true|IP of the destination|
|port|path|integer(int32)|true|port of the destination|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="add-a-trap-destination-to-the-set-of-destinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Remove a trap destination from the set of destinations.

<a id="opIdtrap_config_del"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/trap/config/delete/string/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/trap/config/delete/{IP}/{port}`

Remove a trap destination from the set of destinations.

<h3 id="remove-a-trap-destination-from-the-set-of-destinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to delete the destination|
|IP|path|string|true|IP of the destination|
|port|path|integer(int32)|true|port of the destination|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="remove-a-trap-destination-from-the-set-of-destinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## List the set of trap destinations for this agent instance.

<a id="opIdtrap_config_list"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/trap/config/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/trap/config/list`

Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.

<h3 id="list-the-set-of-trap-destinations-for-this-agent-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the IP alias list|

> Example responses

> 200 Response

```json
[
  {
    "IP": "string",
    "port": 0
  }
]
```

<h3 id="list-the-set-of-trap-destinations-for-this-agent-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="list-the-set-of-trap-destinations-for-this-agent-instance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TrapDest](#schematrapdest)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## List the outstanding asynchronous traps for this agent instance.

<a id="opIdtrap_list"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/trap/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/trap/list`

List the outstanding asynchronous traps for this agent instance.

<h3 id="list-the-outstanding-asynchronous-traps-for-this-agent-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to list the traps|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-the-outstanding-asynchronous-traps-for-this-agent-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-the-outstanding-asynchronous-traps-for-this-agent-instance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-coap">COAP</h1>

## Show the agent's COAP argument structure

<a id="opIdprotocol_coap_get_args"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/coap/get/args \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/coap/get/args`

Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-coap-argument-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the COAP argument structure|

> Example responses

> 200 Response

```json
{}
```

<h3 id="show-the-agents-coap-argument-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's COAP configuration

<a id="opIdprotocol_coap_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/coap/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/coap/get/config`

Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-coap-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the COAP configuration|

> Example responses

> 200 Response

```json
{
  "keystore": "string",
  "primary_port": 0,
  "rule": "string",
  "secure_port": 0
}
```

<h3 id="show-the-agents-coap-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigCOAP](#schemaconfigcoap)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's COAP statistics

<a id="opIdprotocol_coap_get_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/coap/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/coap/get/statistics`

Statistics of fields indicated in the headers

<h3 id="show-the-agents-coap-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show COAP statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-coap-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-coap-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's COAP traffic tracing

<a id="opIdprotocol_coap_get_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/coap/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/coap/get/trace`

Trace 1 means enabled, 0 means not

<h3 id="show-the-agents-coap-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show whether COAP tracing is enabled|

> Example responses

> 200 Response

```json
{
  "keystore": "string",
  "primary_port": 0,
  "rule": "string",
  "secure_port": 0
}
```

<h3 id="show-the-agents-coap-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigCOAP](#schemaconfigcoap)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's COAP configuration

<a id="opIdprotocol_coap_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/coap/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/coap/set/config/{argument}/{value}`

Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="set-the-agents-coap-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the COAP configuration|
|argument|path|string|true|Parameter to set the COAP configuration|
|value|path|string|true|Value to set the COAP configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-coap-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's COAP traffic tracing

<a id="opIdprotocol_coap_set_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/coap/set/trace/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/coap/set/trace/{enableOrNot}`

1 to enable, 0 to disable

<h3 id="set-the-agents-coap-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the COAP tracing|
|enableOrNot|path|string|true|Value to set the COAP tracing|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-coap-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the COAP statistics headers

<a id="opIdprotocol_coap_get_stats_hdr"></a>

> Code samples

```bash
curl https://example.com/mimic/protocol/msg/coap/get/stats_hdr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/protocol/msg/coap/get/stats_hdr`

The headers of statistics fields

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-coap-statistics-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-coap-statistics-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-dhcp">DHCP</h1>

## Show the agent's DHCP argument structure

<a id="opIdprotocol_dhcp_get_args"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/dhcp/get/args \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/dhcp/get/args`

Agent's DHCP configuration particulars

<h3 id="show-the-agents-dhcp-argument-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the DHCP argument structure|

> Example responses

> 200 Response

```json
{}
```

<h3 id="show-the-agents-dhcp-argument-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's DHCP configuration

<a id="opIdprotocol_dhcp_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/dhcp/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/dhcp/get/config`

Agent's DHCP configuration hwaddr,classid,add_options,script

<h3 id="show-the-agents-dhcp-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the DHCP configuration|

> Example responses

> 200 Response

```json
{
  "add_options": "string",
  "classid": "string",
  "hwaddr": "string",
  "script": "string"
}
```

<h3 id="show-the-agents-dhcp-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigDHCP](#schemaconfigdhcp)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's DHCP statistics

<a id="opIdprotocol_dhcp_get_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/dhcp/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/dhcp/get/statistics`

Statistics of fields indicated in the headers

<h3 id="show-the-agents-dhcp-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show DHCP statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-dhcp-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-dhcp-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's DHCP traffic tracing

<a id="opIdprotocol_dhcp_get_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/dhcp/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/dhcp/get/trace`

Trace 1 means enabled, 0 means not

<h3 id="show-the-agents-dhcp-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show whether DHCP tracing is enabled|

> Example responses

> 200 Response

```json
{
  "add_options": "string",
  "classid": "string",
  "hwaddr": "string",
  "script": "string"
}
```

<h3 id="show-the-agents-dhcp-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigDHCP](#schemaconfigdhcp)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the parameters configured by the server in its DHCP-OFFER message

<a id="opIdprotocol_dhcp_params"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/dhcp/params \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/dhcp/params`

DHCP-OFFER message parameters

<h3 id="show-the-parameters-configured-by-the-server-in-its-dhcp-offer-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show DHCP DHCP-OFFER message|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="show-the-parameters-configured-by-the-server-in-its-dhcp-offer-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-parameters-configured-by-the-server-in-its-dhcp-offer-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's DHCP configuration

<a id="opIdprotocol_dhcp_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/dhcp/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/dhcp/set/config/{argument}/{value}`

Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="set-the-agents-dhcp-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the DHCP configuration|
|argument|path|string|true|Parameter to set the DHCP configuration|
|value|path|string|true|Value to set the DHCP configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-dhcp-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's DHCP traffic tracing

<a id="opIdprotocol_dhcp_set_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/dhcp/set/trace/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/dhcp/set/trace/{enableOrNot}`

1 to enable, 0 to disable

<h3 id="set-the-agents-dhcp-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the DHCP tracing|
|enableOrNot|path|string|true|Value to set the DHCP tracing|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-dhcp-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the DHCP statistics headers

<a id="opIdprotocol_dhcp_get_stats_hdr"></a>

> Code samples

```bash
curl https://example.com/mimic/protocol/msg/dhcp/get/stats_hdr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/protocol/msg/dhcp/get/stats_hdr`

The headers of statistics fields

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-dhcp-statistics-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-dhcp-statistics-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-ipmi">IPMI</h1>

## Show the agent's IPMI argument structure

<a id="opIdprotocol_ipmi_get_args"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ipmi/get/args \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/ipmi/get/args`

Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-ipmi-argument-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the IPMI argument structure|

> Example responses

> 200 Response

```json
{}
```

<h3 id="show-the-agents-ipmi-argument-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's IPMI configuration

<a id="opIdprotocol_ipmi_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ipmi/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/ipmi/get/config`

Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-ipmi-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the IPMI configuration|

> Example responses

> 200 Response

```json
{
  "primary_port": 0,
  "secure_port": 0,
  "version": "string"
}
```

<h3 id="show-the-agents-ipmi-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigIPMI](#schemaconfigipmi)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's IPMI statistics

<a id="opIdprotocol_ipmi_get_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ipmi/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/ipmi/get/statistics`

Statistics of fields indicated in the headers

<h3 id="show-the-agents-ipmi-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show IPMI statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-ipmi-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-ipmi-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's IPMI traffic tracing

<a id="opIdprotocol_ipmi_get_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ipmi/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/ipmi/get/trace`

Trace 1 means enabled, 0 means not

<h3 id="show-the-agents-ipmi-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show whether IPMI tracing is enabled|

> Example responses

> 200 Response

```json
{
  "primary_port": 0,
  "secure_port": 0,
  "version": "string"
}
```

<h3 id="show-the-agents-ipmi-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigIPMI](#schemaconfigipmi)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the outgoing message's attributes

<a id="opIdprotocol_ipmi_get_attr"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ipmi/get/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/ipmi/get/{attr}`

Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N

<h3 id="show-the-outgoing-messages-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the IPMI tracing|
|attr|path|string|true|Attribute|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="show-the-outgoing-messages-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's IPMI configuration

<a id="opIdprotocol_ipmi_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ipmi/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/ipmi/set/config/{argument}/{value}`

Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="set-the-agents-ipmi-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the IPMI configuration|
|argument|path|string|true|Parameter to set the IPMI configuration|
|value|path|string|true|Value to set the IPMI configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-ipmi-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's IPMI traffic tracing

<a id="opIdprotocol_ipmi_set_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ipmi/set/trace/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/ipmi/set/trace/{enableOrNot}`

1 to enable, 0 to disable

<h3 id="set-the-agents-ipmi-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the IPMI tracing|
|enableOrNot|path|string|true|Value to set the IPMI tracing|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-ipmi-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the outgoing message's attributes

<a id="opIdprotocol_ipmi_set_attr"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ipmi/set/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/ipmi/set/{attr}/{value}`

Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N

<h3 id="set-the-outgoing-messages-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the IPMI tracing|
|attr|path|string|true|Attribute|
|value|path|string|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-outgoing-messages-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the IPMI statistics headers

<a id="opIdprotocol_ipmi_get_stats_hdr"></a>

> Code samples

```bash
curl https://example.com/mimic/protocol/msg/ipmi/get/stats_hdr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/protocol/msg/ipmi/get/stats_hdr`

The headers of statistics fields

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-ipmi-statistics-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-ipmi-statistics-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-mqtt">MQTT</h1>

## Show the agent's MQTT TCP connection state

<a id="opIdprotocol_mqtt_client_get_protstate"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/get/protstate \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/protstate`

0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state

<h3 id="show-the-agents-mqtt-tcp-connection-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show MQTT state|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-mqtt-tcp-connection-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-mqtt-tcp-connection-state-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's MQTT state

<a id="opIdprotocol_mqtt_client_get_state"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/get/state \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/state`

0 means stopped, 1 means running

<h3 id="show-the-agents-mqtt-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show MQTT state|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-mqtt-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-mqtt-state-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's current messages' cardinality

<a id="opIdprotocol_mqtt_client_message_card"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/message/card \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/card`

0 or more

<h3 id="show-the-agents-current-messages-cardinality-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show MQTT message state|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-current-messages-cardinality-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-current-messages-cardinality-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's message attributes

<a id="opIdprotocol_mqtt_client_message_get"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/message/get/0/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/get/{msgNum}/{attr}`

Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)

<h3 id="show-the-agents-message-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show MQTT state|
|msgNum|path|integer(int32)|true|Message Number|
|attr|path|string|true|Attribute|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-agents-message-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-message-attributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's message attributes

<a id="opIdprotocol_mqtt_client_message_set"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/message/set/0/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/set/{msgNum}/{attr}/{value}`

Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.

<h3 id="set-the-agents-message-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show MQTT state|
|msgNum|path|integer(int32)|true|Message Number|
|attr|path|string|true|Attribute|
|value|path|string|true|Value|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="set-the-agents-message-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-the-agents-message-attributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Restart receiving messages from a subcription of the agent

<a id="opIdprotocol_mqtt_client_resubscribe"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/resubscribe/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/resubscribe/{subNum}`

Restarts a subscription

<h3 id="restart-receiving-messages-from-a-subcription-of-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to change MQTT state|
|subNum|path|integer(int32)|true|Subscription Number|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="restart-receiving-messages-from-a-subcription-of-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Abort agent's MQTT TCP session without sending DISCONNECT command

<a id="opIdprotocol_mqtt_client_runtime_abort"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/runtime/abort \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/abort`

Abort a connection

<h3 id="abort-agents-mqtt-tcp-session-without-sending-disconnect-command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT behavior|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="abort-agents-mqtt-tcp-session-without-sending-disconnect-command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="abort-agents-mqtt-tcp-session-without-sending-disconnect-command-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Start agent's MQTT TCP session

<a id="opIdprotocol_mqtt_client_runtime_connect"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/runtime/connect \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/connect`

Start a connection

<h3 id="start-agents-mqtt-tcp-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT behavior|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="start-agents-mqtt-tcp-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="start-agents-mqtt-tcp-session-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Disconnect agent's MQTT TCP session by sending DISCONNECT command

<a id="opIdprotocol_mqtt_client_runtime_disconnect"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/runtime/disconnect \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/disconnect`

Graceful disconnect

<h3 id="disconnect-agents-mqtt-tcp-session-by-sending-disconnect-command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT behavior|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="disconnect-agents-mqtt-tcp-session-by-sending-disconnect-command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="disconnect-agents-mqtt-tcp-session-by-sending-disconnect-command-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's MQTT TCP connection target broker

<a id="opIdprotocol_mqtt_client_set_broker"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/set/broker/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/broker/{brokerAddr}`

Broker IP address

<h3 id="set-the-agents-mqtt-tcp-connection-target-broker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT config|
|brokerAddr|path|string|true|Broker address|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="set-the-agents-mqtt-tcp-connection-target-broker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-the-agents-mqtt-tcp-connection-target-broker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's MQTT session

<a id="opIdprotocol_mqtt_client_set_cleansession"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/set/cleansession/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/cleansession/{cleanOrNot}`

1 for clean session , 0 not

<h3 id="set-the-agents-mqtt-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT config|
|cleanOrNot|path|integer(int32)|true|Clean session|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="set-the-agents-mqtt-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-the-agents-mqtt-session-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's MQTT client ID

<a id="opIdprotocol_mqtt_client_set_clientid"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/set/clientid/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/clientid/{clientID}`

MQTT client ID

<h3 id="set-the-agents-mqtt-client-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT config|
|clientID|path|string|true|Client ID|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="set-the-agents-mqtt-client-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-the-agents-mqtt-client-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's MQTT TCP keepalive

<a id="opIdprotocol_mqtt_client_set_keepalive"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/set/keepalive/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/keepalive/{aliveTime}`

Keep alive the TCP connection

<h3 id="set-the-agents-mqtt-tcp-keepalive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT config|
|aliveTime|path|integer(int32)|true|period to send keepalive messages|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="set-the-agents-mqtt-tcp-keepalive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-the-agents-mqtt-tcp-keepalive-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's MQTT disconnection action

<a id="opIdprotocol_mqtt_client_set_on_disconnect"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/set/on_disconnect/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/on_disconnect/{action}`

Action to take when MQTT session is disconnected

<h3 id="set-the-agents-mqtt-disconnection-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT config|
|action|path|string|true|Action to take|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="set-the-agents-mqtt-disconnection-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-the-agents-mqtt-disconnection-action-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's MQTT client password

<a id="opIdprotocol_mqtt_client_set_password"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/set/password/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/password/{password}`

Client password

<h3 id="set-the-agents-mqtt-client-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT config|
|password|path|string|true|Password|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="set-the-agents-mqtt-client-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-the-agents-mqtt-client-password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's MQTT TCP connection target port

<a id="opIdprotocol_mqtt_client_set_port"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/set/port/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/port/{port}`

target TCP port

<h3 id="set-the-agents-mqtt-tcp-connection-target-port-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT config|
|port|path|string|true|TCP port|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="set-the-agents-mqtt-tcp-connection-target-port-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-the-agents-mqtt-tcp-connection-target-port-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's MQTT client username

<a id="opIdprotocol_mqtt_client_set_username"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/set/username/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/username/{username}`

Client username

<h3 id="set-the-agents-mqtt-client-username-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT config|
|username|path|string|true|User name|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="set-the-agents-mqtt-client-username-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-the-agents-mqtt-client-username-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's MQTT client's will

<a id="opIdprotocol_mqtt_client_set_willmsg"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/set/willmsg/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willmsg/{msg}`

Will message

<h3 id="set-the-agents-mqtt-clients-will-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT config|
|msg|path|string|true|Will message|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="set-the-agents-mqtt-clients-will-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-the-agents-mqtt-clients-will-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's MQTT will message's QOS field

<a id="opIdprotocol_mqtt_client_set_willqos"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/set/willqos/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willqos/{qos}`

QOS field

<h3 id="set-the-agents-mqtt-will-messages-qos-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT config|
|qos|path|string|true|Quality of service field|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="set-the-agents-mqtt-will-messages-qos-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-the-agents-mqtt-will-messages-qos-field-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's MQTT retained will

<a id="opIdprotocol_mqtt_client_set_willretain"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/set/willretain/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willretain/{retain}`

Retaining will

<h3 id="set-the-agents-mqtt-retained-will-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT config|
|retain|path|string|true|Retaining will|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="set-the-agents-mqtt-retained-will-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-the-agents-mqtt-retained-will-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's MQTT client will's topic

<a id="opIdprotocol_mqtt_client_set_willtopic"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/set/willtopic/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willtopic/{topic}`

Will topic for the will message

<h3 id="set-the-agents-mqtt-client-wills-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set MQTT config|
|topic|path|string|true|topic|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="set-the-agents-mqtt-client-wills-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-the-agents-mqtt-client-wills-topic-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's current subscriptions' cardinality

<a id="opIdprotocol_mqtt_client_subscribe_card"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/subscribe/card \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/card`

0 or more

<h3 id="show-the-agents-current-subscriptions-cardinality-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show MQTT subscription state|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-current-subscriptions-cardinality-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-current-subscriptions-cardinality-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's subscription attributes

<a id="opIdprotocol_mqtt_client_subscribe_get"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/subscribe/get/0/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/get/{subNum}/{attr}`

Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)

<h3 id="show-the-agents-subscription-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show MQTT state|
|subNum|path|integer(int32)|true|Subscribe Number|
|attr|path|string|true|Attribute|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-agents-subscription-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-subscription-attributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's subscribe attributes

<a id="opIdprotocol_mqtt_client_subscribe_set"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/subscribe/set/0/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/set/{subNum}/{attr}/{value}`

Attribute can not be properties .

<h3 id="set-the-agents-subscribe-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show MQTT state|
|subNum|path|integer(int32)|true|Subscribe Number|
|attr|path|string|true|Attribute|
|value|path|string|true|Value|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="set-the-agents-subscribe-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="set-the-agents-subscribe-attributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Stops receiving messages from a subcription of the agent

<a id="opIdprotocol_mqtt_client_unsubscribe"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/client/unsubscribe/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/client/unsubscribe/{subNum}`

Stops a subscription

<h3 id="stops-receiving-messages-from-a-subcription-of-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to change MQTT state|
|subNum|path|integer(int32)|true|Subscription Number|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="stops-receiving-messages-from-a-subcription-of-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's MQTT argument structure

<a id="opIdprotocol_mqtt_get_args"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/get/args \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/mqtt/get/args`

Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-mqtt-argument-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the MQTT argument structure|

> Example responses

> 200 Response

```json
{}
```

<h3 id="show-the-agents-mqtt-argument-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's MQTT configuration

<a id="opIdprotocol_mqtt_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/mqtt/get/config`

Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-mqtt-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the MQTT configuration|

> Example responses

> 200 Response

```json
{
  "broker": "string",
  "clientid": "string",
  "filename": "string",
  "is_tls": "string",
  "password": "string",
  "port": 0,
  "tls_conf_filename": "string",
  "username": "string",
  "version": "string"
}
```

<h3 id="show-the-agents-mqtt-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigMQTT](#schemaconfigmqtt)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's MQTT statistics

<a id="opIdprotocol_mqtt_get_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/mqtt/get/statistics`

Statistics of fields indicated in the headers

<h3 id="show-the-agents-mqtt-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show MQTT statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-mqtt-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-mqtt-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's MQTT traffic tracing

<a id="opIdprotocol_mqtt_get_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/mqtt/get/trace`

Trace 1 means enabled, 0 means not

<h3 id="show-the-agents-mqtt-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show whether MQTT tracing is enabled|

> Example responses

> 200 Response

```json
{
  "broker": "string",
  "clientid": "string",
  "filename": "string",
  "is_tls": "string",
  "password": "string",
  "port": 0,
  "tls_conf_filename": "string",
  "username": "string",
  "version": "string"
}
```

<h3 id="show-the-agents-mqtt-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigMQTT](#schemaconfigmqtt)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's MQTT configuration

<a id="opIdprotocol_mqtt_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/set/config/{argument}/{value}`

Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="set-the-agents-mqtt-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the MQTT configuration|
|argument|path|string|true|Parameter to set the MQTT configuration|
|value|path|string|true|Value to set the MQTT configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-mqtt-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's MQTT traffic tracing

<a id="opIdprotocol_mqtt_set_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/mqtt/set/trace/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/mqtt/set/trace/{enableOrNot}`

1 to enable, 0 to disable

<h3 id="set-the-agents-mqtt-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the MQTT tracing|
|enableOrNot|path|string|true|Value to set the MQTT tracing|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-mqtt-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the MQTT statistics headers

<a id="opIdprotocol_mqtt_get_stats_hdr"></a>

> Code samples

```bash
curl https://example.com/mimic/protocol/msg/mqtt/get/stats_hdr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/protocol/msg/mqtt/get/stats_hdr`

The headers of statistics fields

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-mqtt-statistics-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-mqtt-statistics-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-netflow">NETFLOW</h1>

## Change NETFLOW data export interval

<a id="opIdprotocol_netflow_change_dfs"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/flow/change/dfs_interval/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/dfs_interval/{interval}`

Interval in msec .

<h3 id="change-netflow-data-export-interval-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the NETFLOW|
|interval|path|integer(int32)|true|NETFLOW export interval|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="change-netflow-data-export-interval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Change NETFLOW template export interval

<a id="opIdprotocol_netflow_change_tfs"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/flow/change/tfs_interval/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/tfs_interval/{interval}`

Interval in msec .

<h3 id="change-netflow-template-export-interval-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the NETFLOW|
|interval|path|integer(int32)|true|NETFLOW export interval|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="change-netflow-template-export-interval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Change NETFLOW export attributes

<a id="opIdprotocol_netflow_change_attr"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/flow/change/0/0/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/{flowset-uid}/{field-num}/{attr}/{value}`

Change attributes

<h3 id="change-netflow-export-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the NETFLOW|
|flowset-uid|path|integer(int32)|true|none|
|field-num|path|integer(int32)|true|none|
|attr|path|string|true|none|
|value|path|string|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="change-netflow-export-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show list of NETFLOW exports

<a id="opIdprotocol_netflow_list"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/flow/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/netflow/flow/list`

Show list of NETFLOW exports

<h3 id="show-list-of-netflow-exports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show NETFLOW statistics|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="show-list-of-netflow-exports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-list-of-netflow-exports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's NETFLOW argument structure

<a id="opIdprotocol_netflow_get_args"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/get/args \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/netflow/get/args`

Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-netflow-argument-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the NETFLOW argument structure|

> Example responses

> 200 Response

```json
{}
```

<h3 id="show-the-agents-netflow-argument-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's NETFLOW configuration

<a id="opIdprotocol_netflow_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/netflow/get/config`

Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-netflow-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the NETFLOW configuration|

> Example responses

> 200 Response

```json
{
  "bundleflowsets": 0,
  "collector": "string",
  "collectorport": 0,
  "filename": "string"
}
```

<h3 id="show-the-agents-netflow-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigNETFLOW](#schemaconfignetflow)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's NETFLOW statistics

<a id="opIdprotocol_netflow_get_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/netflow/get/statistics`

Statistics of fields indicated in the headers

<h3 id="show-the-agents-netflow-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show NETFLOW statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-netflow-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-netflow-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's NETFLOW traffic tracing

<a id="opIdprotocol_netflow_get_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/netflow/get/trace`

Trace 1 means enabled, 0 means not

<h3 id="show-the-agents-netflow-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show whether NETFLOW tracing is enabled|

> Example responses

> 200 Response

```json
{
  "bundleflowsets": 0,
  "collector": "string",
  "collectorport": 0,
  "filename": "string"
}
```

<h3 id="show-the-agents-netflow-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigNETFLOW](#schemaconfignetflow)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Halt NETFLOW traffic

<a id="opIdprotocol_netflow_halt"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/halt \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/netflow/halt`

Halt NETFLOW traffic

<h3 id="halt-netflow-traffic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the NETFLOW|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="halt-netflow-traffic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Reload NETFLOW configuration before resuming traffic

<a id="opIdprotocol_netflow_reload"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/reload \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/netflow/reload`

Reload NETFLOW configuration before resuming traffic

<h3 id="reload-netflow-configuration-before-resuming-traffic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the NETFLOW|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="reload-netflow-configuration-before-resuming-traffic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Resuming traffic

<a id="opIdprotocol_netflow_resume"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/resume \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/netflow/resume`

Resuming traffic

<h3 id="resuming-traffic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the NETFLOW|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="resuming-traffic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Swap NETFLOW collector

<a id="opIdprotocol_netflow_set_collector"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/set/collector/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/netflow/set/collector/{collectorIP}`

Allow changing collector without stopping agent

<h3 id="swap-netflow-collector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the NETFLOW|
|collectorIP|path|string|true|file name to load config|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="swap-netflow-collector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's NETFLOW configuration

<a id="opIdprotocol_netflow_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/netflow/set/config/{argument}/{value}`

Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="set-the-agents-netflow-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the NETFLOW configuration|
|argument|path|string|true|Parameter to set the NETFLOW configuration|
|value|path|string|true|Value to set the NETFLOW configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-netflow-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Swap NETFLOW configuration file

<a id="opIdprotocol_netflow_set_fileName"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/set/filename/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/netflow/set/filename/{fileName}`

Allow reloading the configuration file for an agent without stopping agent

<h3 id="swap-netflow-configuration-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the NETFLOW|
|fileName|path|string|true|file name to load config|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="swap-netflow-configuration-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's NETFLOW traffic tracing

<a id="opIdprotocol_netflow_set_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/netflow/set/trace/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/netflow/set/trace/{enableOrNot}`

1 to enable, 0 to disable

<h3 id="set-the-agents-netflow-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the NETFLOW tracing|
|enableOrNot|path|string|true|Value to set the NETFLOW tracing|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-netflow-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the NETFLOW statistics headers

<a id="opIdprotocol_netflow_get_stats_hdr"></a>

> Code samples

```bash
curl https://example.com/mimic/protocol/msg/netflow/get/stats_hdr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/protocol/msg/netflow/get/stats_hdr`

The headers of statistics fields

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-netflow-statistics-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-netflow-statistics-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-proxy">PROXY</h1>

## Show the agent's PROXY argument structure

<a id="opIdprotocol_proxy_get_args"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/proxy/get/args \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/proxy/get/args`

Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-proxy-argument-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the PROXY argument structure|

> Example responses

> 200 Response

```json
{}
```

<h3 id="show-the-agents-proxy-argument-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's PROXY configuration

<a id="opIdprotocol_proxy_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/proxy/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/proxy/get/config`

Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-proxy-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the PROXY configuration|

> Example responses

> 200 Response

```json
{
  "TCP_NODELAY": 0,
  "client_to_server": "string",
  "disconnect_delay": 0,
  "max_connects": 0,
  "portno": 0,
  "pre_connect": "string",
  "server_to_client": "string",
  "target": "string",
  "transport": "string"
}
```

<h3 id="show-the-agents-proxy-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigPROXY](#schemaconfigproxy)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's PROXY statistics

<a id="opIdprotocol_proxy_get_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/proxy/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/proxy/get/statistics`

Statistics of fields indicated in the headers

<h3 id="show-the-agents-proxy-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show PROXY statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-proxy-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-proxy-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's PROXY traffic tracing

<a id="opIdprotocol_proxy_get_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/proxy/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/proxy/get/trace`

Trace 1 means enabled, 0 means not

<h3 id="show-the-agents-proxy-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show whether PROXY tracing is enabled|

> Example responses

> 200 Response

```json
{
  "TCP_NODELAY": 0,
  "client_to_server": "string",
  "disconnect_delay": 0,
  "max_connects": 0,
  "portno": 0,
  "pre_connect": "string",
  "server_to_client": "string",
  "target": "string",
  "transport": "string"
}
```

<h3 id="show-the-agents-proxy-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigPROXY](#schemaconfigproxy)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Add individual proxy target on the agent and the simulator host

<a id="opIdprotocol_proxy_port_add"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/proxy/port/add/0/string/0 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/agent/{agentNum}/protocol/msg/proxy/port/add/{port}/{target}/{targetPort}`

Additional proxy target

<h3 id="add-individual-proxy-target-on-the-agent-and-the-simulator-host-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate PROXY target|
|port|path|integer(int32)|true|none|
|target|path|string|true|none|
|targetPort|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="add-individual-proxy-target-on-the-agent-and-the-simulator-host-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Check individual target

<a id="opIdprotocol_proxy_port_isstarted"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/proxy/port/isStarted/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/proxy/port/isStarted/{port}`

Check individual target

<h3 id="check-individual-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate PROXY target|
|port|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="check-individual-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## List all proxy targets

<a id="opIdprotocol_proxy_port_list"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/proxy/port/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/proxy/port/list`

<h3 id="list-all-proxy-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate PROXY target|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="list-all-proxy-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="list-all-proxy-targets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Remove individual proxy target on the agent and the simulator host

<a id="opIdprotocol_proxy_port_remove"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/proxy/port/remove/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/protocol/msg/proxy/port/remove/{port}`

Remove proxy target

<h3 id="remove-individual-proxy-target-on-the-agent-and-the-simulator-host-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate PROXY target|
|port|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="remove-individual-proxy-target-on-the-agent-and-the-simulator-host-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Start additional target

<a id="opIdprotocol_proxy_port_start"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/proxy/port/start/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/proxy/port/start/{port}`

Start additional target

<h3 id="start-additional-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate PROXY target|
|port|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="start-additional-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Stop additional target

<a id="opIdprotocol_proxy_port_stop"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/proxy/port/stop/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/proxy/port/stop/{port}`

Stop additional target

<h3 id="stop-additional-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate PROXY target|
|port|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="stop-additional-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's PROXY configuration

<a id="opIdprotocol_proxy_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/proxy/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/proxy/set/config/{argument}/{value}`

Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="set-the-agents-proxy-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the PROXY configuration|
|argument|path|string|true|Parameter to set the PROXY configuration|
|value|path|string|true|Value to set the PROXY configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-proxy-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's PROXY traffic tracing

<a id="opIdprotocol_proxy_set_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/proxy/set/trace/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/proxy/set/trace/{enableOrNot}`

1 to enable, 0 to disable

<h3 id="set-the-agents-proxy-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the PROXY tracing|
|enableOrNot|path|string|true|Value to set the PROXY tracing|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-proxy-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the PROXY statistics headers

<a id="opIdprotocol_proxy_get_stats_hdr"></a>

> Code samples

```bash
curl https://example.com/mimic/protocol/msg/proxy/get/stats_hdr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/protocol/msg/proxy/get/stats_hdr`

The headers of statistics fields

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-proxy-statistics-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-proxy-statistics-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-sflow">SFLOW</h1>

## Show the agent's SFLOW argument structure

<a id="opIdprotocol_sflow_get_args"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/sflow/get/args \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/sflow/get/args`

Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-sflow-argument-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SFLOW argument structure|

> Example responses

> 200 Response

```json
{}
```

<h3 id="show-the-agents-sflow-argument-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's SFLOW configuration

<a id="opIdprotocol_sflow_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/sflow/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/sflow/get/config`

Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-sflow-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SFLOW configuration|

> Example responses

> 200 Response

```json
{
  "collector": "string",
  "collectorport": 0,
  "encoding_type": "string",
  "filename": "string",
  "flows_per_min": 0,
  "include_samples": "string",
  "records_per_sample": "string",
  "samples_per_datagram": "string"
}
```

<h3 id="show-the-agents-sflow-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigSFLOW](#schemaconfigsflow)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's SFLOW statistics

<a id="opIdprotocol_sflow_get_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/sflow/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/sflow/get/statistics`

Statistics of fields indicated in the headers

<h3 id="show-the-agents-sflow-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show SFLOW statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-sflow-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-sflow-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's SFLOW traffic tracing

<a id="opIdprotocol_sflow_get_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/sflow/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/sflow/get/trace`

Trace 1 means enabled, 0 means not

<h3 id="show-the-agents-sflow-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show whether SFLOW tracing is enabled|

> Example responses

> 200 Response

```json
{
  "collector": "string",
  "collectorport": 0,
  "encoding_type": "string",
  "filename": "string",
  "flows_per_min": 0,
  "include_samples": "string",
  "records_per_sample": "string",
  "samples_per_datagram": "string"
}
```

<h3 id="show-the-agents-sflow-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigSFLOW](#schemaconfigsflow)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Halt SFLOW traffic

<a id="opIdprotocol_sflow_halt"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/sflow/halt \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/sflow/halt`

Halt SFLOW traffic

<h3 id="halt-sflow-traffic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SFLOW|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="halt-sflow-traffic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Reload SFLOW configuration before resuming traffic

<a id="opIdprotocol_sflow_reload"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/sflow/reload \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/sflow/reload`

Reload SFLOW configuration before resuming traffic

<h3 id="reload-sflow-configuration-before-resuming-traffic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SFLOW|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="reload-sflow-configuration-before-resuming-traffic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Resuming traffic

<a id="opIdprotocol_sflow_resume"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/sflow/resume \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/sflow/resume`

Resuming traffic

<h3 id="resuming-traffic-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SFLOW|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="resuming-traffic-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's SFLOW configuration

<a id="opIdprotocol_sflow_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/sflow/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/sflow/set/config/{argument}/{value}`

Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="set-the-agents-sflow-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SFLOW configuration|
|argument|path|string|true|Parameter to set the SFLOW configuration|
|value|path|string|true|Value to set the SFLOW configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-sflow-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's SFLOW traffic tracing

<a id="opIdprotocol_sflow_set_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/sflow/set/trace/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/sflow/set/trace/{enableOrNot}`

1 to enable, 0 to disable

<h3 id="set-the-agents-sflow-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SFLOW tracing|
|enableOrNot|path|string|true|Value to set the SFLOW tracing|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-sflow-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the SFLOW statistics headers

<a id="opIdprotocol_sflow_get_stats_hdr"></a>

> Code samples

```bash
curl https://example.com/mimic/protocol/msg/sflow/get/stats_hdr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/protocol/msg/sflow/get/stats_hdr`

The headers of statistics fields

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-sflow-statistics-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-sflow-statistics-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-snmptcp">SNMPTCP</h1>

## Show the agent's SNMPTCP argument structure

<a id="opIdprotocol_snmptcp_get_args"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmptcp/get/args \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmptcp/get/args`

Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-snmptcp-argument-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPTCP argument structure|

> Example responses

> 200 Response

```json
{}
```

<h3 id="show-the-agents-snmptcp-argument-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's SNMPTCP configuration

<a id="opIdprotocol_snmptcp_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmptcp/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmptcp/get/config`

Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-snmptcp-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPTCP configuration|

> Example responses

> 200 Response

```json
{
  "connections": 0
}
```

<h3 id="show-the-agents-snmptcp-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigSNMPTCP](#schemaconfigsnmptcp)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's SNMPTCP statistics

<a id="opIdprotocol_snmptcp_get_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmptcp/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmptcp/get/statistics`

Statistics of fields indicated in the headers

<h3 id="show-the-agents-snmptcp-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show SNMPTCP statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-snmptcp-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-snmptcp-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's SNMPTCP traffic tracing

<a id="opIdprotocol_snmptcp_get_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmptcp/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmptcp/get/trace`

Trace 1 means enabled, 0 means not

<h3 id="show-the-agents-snmptcp-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show whether SNMPTCP tracing is enabled|

> Example responses

> 200 Response

```json
{
  "connections": 0
}
```

<h3 id="show-the-agents-snmptcp-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigSNMPTCP](#schemaconfigsnmptcp)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Disable individual IP aliases on the agent and the simulator host

<a id="opIdprotocol_snmptcp_ipalias_disable"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmptcp/ipalias/disable/string/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/disable/{ipaddress}/{port}`

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

<h3 id="disable-individual-ip-aliases-on-the-agent-and-the-simulator-host-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate SNMPTCP IP alias|
|ipaddress|path|string|true|none|
|port|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="disable-individual-ip-aliases-on-the-agent-and-the-simulator-host-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Enable individual IP aliases on the agent and the simulator host

<a id="opIdprotocol_snmptcp_ipalias_enable"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmptcp/ipalias/enable/string/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/enable/{ipaddress}/{port}`

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

<h3 id="enable-individual-ip-aliases-on-the-agent-and-the-simulator-host-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate SNMPTCP IP alias|
|ipaddress|path|string|true|none|
|port|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="enable-individual-ip-aliases-on-the-agent-and-the-simulator-host-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Check individual IP aliases on the agent and the simulator host

<a id="opIdprotocol_snmptcp_ipalias_isenabled"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmptcp/ipalias/isenabled/string/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/isenabled/{ipaddress}/{port}`

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

<h3 id="check-individual-ip-aliases-on-the-agent-and-the-simulator-host-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate SNMPTCP IP alias|
|ipaddress|path|string|true|none|
|port|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="check-individual-ip-aliases-on-the-agent-and-the-simulator-host-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## List all IP aliases on the agent and the simulator host

<a id="opIdprotocol_snmptcp_ipalias_list"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmptcp/ipalias/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/list`

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

<h3 id="list-all-ip-aliases-on-the-agent-and-the-simulator-host-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate SNMPTCP IP alias|

> Example responses

> 200 Response

```json
[
  {
    "IP": "string",
    "interface": "string",
    "mask": "string",
    "port": 0
  }
]
```

<h3 id="list-all-ip-aliases-on-the-agent-and-the-simulator-host-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="list-all-ip-aliases-on-the-agent-and-the-simulator-host-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IPAlias](#schemaipalias)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's SNMPTCP configuration

<a id="opIdprotocol_snmptcp_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmptcp/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/snmptcp/set/config/{argument}/{value}`

Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="set-the-agents-snmptcp-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SNMPTCP configuration|
|argument|path|string|true|Parameter to set the SNMPTCP configuration|
|value|path|string|true|Value to set the SNMPTCP configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-snmptcp-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's SNMPTCP traffic tracing

<a id="opIdprotocol_snmptcp_set_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmptcp/set/trace/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/snmptcp/set/trace/{enableOrNot}`

1 to enable, 0 to disable

<h3 id="set-the-agents-snmptcp-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SNMPTCP tracing|
|enableOrNot|path|string|true|Value to set the SNMPTCP tracing|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-snmptcp-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the SNMPTCP statistics headers

<a id="opIdprotocol_snmptcp_get_stats_hdr"></a>

> Code samples

```bash
curl https://example.com/mimic/protocol/msg/snmptcp/get/stats_hdr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/protocol/msg/snmptcp/get/stats_hdr`

The headers of statistics fields

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-snmptcp-statistics-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-snmptcp-statistics-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-snmpv3">SNMPv3</h1>

## Adds a new access entry with the specified parameters.

<a id="opIdprotocol_snmpv3_access_add"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/access/add/string/string/string/string/string/string/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/agent/{agentNum}/protocol/msg/snmpv3/access/add/{groupName}/{prefix}/{securityModel}/{securityLevel}/{contextMatch}/{readView}/{writeView}/{notifyView}`

Adds a new access entry with the specified parameters.

<h3 id="adds-a-new-access-entry-with-the-specified-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the SNMPv3 access|
|groupName|path|string|true|SNMPv3 access name|
|prefix|path|string|true|SNMPv3 prefix|
|securityModel|path|string|true|SNMPv3 access security model|
|securityLevel|path|string|true|SNMPv3 access security level|
|contextMatch|path|string|true|SNMPv3 access context match|
|readView|path|string|true|SNMPv3 access read view|
|writeView|path|string|true|SNMPv3 access write view|
|notifyView|path|string|true|SNMPv3 access notify view|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="adds-a-new-access-entry-with-the-specified-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Clears all access entries.

<a id="opIdprotocol_snmpv3_access_clear"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/access/clear \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/protocol/msg/snmpv3/access/clear`

Clears all access entries.

<h3 id="clears-all-access-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the SNMPv3 access|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="clears-all-access-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Deletes the specified access entry.

<a id="opIdprotocol_snmpv3_access_del"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/access/del/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/protocol/msg/snmpv3/access/del/{accessName}`

Deletes the specified access entry.

<h3 id="deletes-the-specified-access-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the SNMPv3 access|
|accessName|path|string|true|SNMPv3 access name|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="deletes-the-specified-access-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns the current acccess entries as an array of strings.

<a id="opIdprotocol_snmpv3_access_list"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/access/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmpv3/access/list`

Returns the current acccess entries as an array of strings.

<h3 id="returns-the-current-acccess-entries-as-an-array-of-strings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPv3 configuration|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="returns-the-current-acccess-entries-as-an-array-of-strings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="returns-the-current-acccess-entries-as-an-array-of-strings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns the SNMPv3 configuration.

<a id="opIdprotocol_snmpv3_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmpv3/get/config`

Returns the SNMPv3 configuration.

<h3 id="returns-the-snmpv3-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPv3 configuration|

> Example responses

> 200 Response

```json
{
  "context_engine_id": "string",
  "engine_id": "string",
  "usm_db": "string",
  "vacm_db": "string"
}
```

<h3 id="returns-the-snmpv3-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigSNMPv3](#schemaconfigsnmpv3)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Retrieves the contextEngineID for the agent instance.

<a id="opIdprotocol_snmpv3_get_context_engineid"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/get/context_engineid \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmpv3/get/context_engineid`

Retrieves the contextEngineID for the agent instance.

<h3 id="retrieves-the-contextengineid-for-the-agent-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPv3 engine|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="retrieves-the-contextengineid-for-the-agent-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Retrieves the number of times the agent has been restarted.

<a id="opIdprotocol_snmpv3_get_engineboots"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/get/engineboots \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineboots`

Retrieves the number of times the agent has been restarted.

<h3 id="retrieves-the-number-of-times-the-agent-has-been-restarted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPv3 engine|

> Example responses

> 200 Response

```json
0
```

<h3 id="retrieves-the-number-of-times-the-agent-has-been-restarted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## For started agents, retrieves the current engineID in use by the snmpv3 module.

<a id="opIdprotocol_snmpv3_get_engineid"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/get/engineid \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineid`

For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...

<h3 id="for-started-agents-retrieves-the-current-engineid-in-use-by-the-snmpv3-module-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPv3 configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="for-started-agents-retrieves-the-current-engineid-in-use-by-the-snmpv3-module-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Retrieves the time in seconds for which the agent has been running.

<a id="opIdprotocol_snmpv3_get_enginetime"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/get/enginetime \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmpv3/get/enginetime`

Retrieves the time in seconds for which the agent has been running.

<h3 id="retrieves-the-time-in-seconds-for-which-the-agent-has-been-running-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPv3 engine|

> Example responses

> 200 Response

```json
0
```

<h3 id="retrieves-the-time-in-seconds-for-which-the-agent-has-been-running-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Adds a new group entry with the specified parameters.

<a id="opIdprotocol_snmpv3_group_add"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/group/add/string/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/agent/{agentNum}/protocol/msg/snmpv3/group/add/{groupName}/{securityModel}/{securityName}`

Adds a new group entry with the specified parameters.

<h3 id="adds-a-new-group-entry-with-the-specified-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the SNMPv3 group|
|groupName|path|string|true|SNMPv3 group name|
|securityModel|path|string|true|SNMPv3 group security model|
|securityName|path|string|true|SNMPv3 group security name|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="adds-a-new-group-entry-with-the-specified-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Clears all group entries.

<a id="opIdprotocol_snmpv3_group_clear"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/group/clear \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/protocol/msg/snmpv3/group/clear`

Clears all group entries.

<h3 id="clears-all-group-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the SNMPv3 group|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="clears-all-group-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Deletes the specified group entry.

<a id="opIdprotocol_snmpv3_group_del"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/group/del/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/protocol/msg/snmpv3/group/del/{groupName}`

Deletes the specified group entry.

<h3 id="deletes-the-specified-group-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the SNMPv3 group|
|groupName|path|string|true|SNMPv3 group name|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="deletes-the-specified-group-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns the current group entries as an array of strings.

<a id="opIdprotocol_snmpv3_group_list"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/group/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmpv3/group/list`

Returns the current group entries as an array of strings.

<h3 id="returns-the-current-group-entries-as-an-array-of-strings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPv3 configuration|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="returns-the-current-group-entries-as-an-array-of-strings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="returns-the-current-group-entries-as-an-array-of-strings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Changes the SNMPv3 configuration.

<a id="opIdprotocol_snmpv3_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/snmpv3/set/config/{parameter}/{value}`

Changes the SNMPv3 configuration.

<h3 id="changes-the-snmpv3-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPv3 configuration|
|parameter|path|string|true|SNMPv3 configuration parameter|
|value|path|string|true|SNMPv3 parameter value|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="changes-the-snmpv3-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Adds a new user entry with the specified parameters.

<a id="opIdprotocol_snmpv3_user_add"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/user/add/string/string/string/string/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/agent/{agentNum}/protocol/msg/snmpv3/user/add/{userName}/{securityName}/{authProtocol}/{authKey}/{privProtocol}/{privKey}`

Adds a new user entry with the specified parameters.

<h3 id="adds-a-new-user-entry-with-the-specified-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the SNMPv3 user|
|userName|path|string|true|SNMPv3 user name|
|securityName|path|string|true|SNMPv3 user security name|
|authProtocol|path|string|true|SNMPv3 user authentication protocol|
|authKey|path|string|true|SNMPv3 user authentication key|
|privProtocol|path|string|true|SNMPv3 user privacy encryption protocol|
|privKey|path|string|true|SNMPv3 user privacy encryption key|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="adds-a-new-user-entry-with-the-specified-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Clears all user entries.

<a id="opIdprotocol_snmpv3_user_clear"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/user/clear \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/protocol/msg/snmpv3/user/clear`

Clears all user entries.

<h3 id="clears-all-user-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the SNMPv3 user|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="clears-all-user-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Deletes the specified user entry.

<a id="opIdprotocol_snmpv3_user_del"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/user/del/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/protocol/msg/snmpv3/user/del/{userName}`

Deletes the specified user entry.

<h3 id="deletes-the-specified-user-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the SNMPv3 user|
|userName|path|string|true|SNMPv3 user name|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="deletes-the-specified-user-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns the current user entries as a Tcl list.

<a id="opIdprotocol_snmpv3_user_list"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/user/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmpv3/user/list`

Returns the current user entries as a Tcl list.

<h3 id="returns-the-current-user-entries-as-a-tcl-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPv3 configuration|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="returns-the-current-user-entries-as-a-tcl-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="returns-the-current-user-entries-as-a-tcl-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Saves current user settings in the currently loaded USM config file.

<a id="opIdprotocol_snmpv3_usm_save"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/usm/save \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/save`

Saves current user settings in the currently loaded USM config file.

<h3 id="saves-current-user-settings-in-the-currently-loaded-usm-config-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPv3 configuration|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="saves-current-user-settings-in-the-currently-loaded-usm-config-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="saves-current-user-settings-in-the-currently-loaded-usm-config-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Saves current user settings in the specified USM config file.

<a id="opIdprotocol_snmpv3_usm_saveas"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/usm/saveas/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/saveas/{filename}`

Saves current user settings in the specified USM config file.

<h3 id="saves-current-user-settings-in-the-specified-usm-config-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPv3 configuration|
|filename|path|string|true|Filename to save|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="saves-current-user-settings-in-the-specified-usm-config-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="saves-current-user-settings-in-the-specified-usm-config-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Saves current group, access, view settings in the currently loaded VACM config file.

<a id="opIdprotocol_snmpv3_vacm_save"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/vacm/save \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/save`

Saves current group, access, view settings in the currently loaded VACM config file.

<h3 id="saves-current-group-access-view-settings-in-the-currently-loaded-vacm-config-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPv3 configuration|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="saves-current-group-access-view-settings-in-the-currently-loaded-vacm-config-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="saves-current-group-access-view-settings-in-the-currently-loaded-vacm-config-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Saves current group, access, view settings in the specified VACM config file.

<a id="opIdprotocol_snmpv3_vacm_saveas"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/vacm/saveas/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/saveas/{filename}`

Saves current group, access, view settings in the specified VACM config file.

<h3 id="saves-current-group-access-view-settings-in-the-specified-vacm-config-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPv3 configuration|
|filename|path|string|true|Filename to save|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="saves-current-group-access-view-settings-in-the-specified-vacm-config-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="saves-current-group-access-view-settings-in-the-specified-vacm-config-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Adds a new view entry with the specified parameters.

<a id="opIdprotocol_snmpv3_view_add"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/view/add/string/string/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/agent/{agentNum}/protocol/msg/snmpv3/view/add/{viewName}/{viewType}/{subtree}/{mask}`

Adds a new view entry with the specified parameters.

<h3 id="adds-a-new-view-entry-with-the-specified-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the SNMPv3 view|
|viewName|path|string|true|SNMPv3 view name|
|viewType|path|string|true|SNMPv3 view type|
|subtree|path|string|true|SNMPv3 view subtree|
|mask|path|string|true|SNMPv3 view mask|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="adds-a-new-view-entry-with-the-specified-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Clears all view entries.

<a id="opIdprotocol_snmpv3_view_clear"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/view/clear \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/protocol/msg/snmpv3/view/clear`

Clears all view entries.

<h3 id="clears-all-view-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the SNMPv3 view|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="clears-all-view-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Deletes the specified view entry.

<a id="opIdprotocol_snmpv3_view_del"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/view/del/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/protocol/msg/snmpv3/view/del/{viewName}`

Deletes the specified view entry.

<h3 id="deletes-the-specified-view-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add the SNMPv3 view|
|viewName|path|string|true|SNMPv3 view name|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="deletes-the-specified-view-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns the current view entries as an array of strings.

<a id="opIdprotocol_snmpv3_view_list"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/snmpv3/view/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/snmpv3/view/list`

Returns the current view entries as an array of strings.

<h3 id="returns-the-current-view-entries-as-an-array-of-strings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SNMPv3 configuration|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="returns-the-current-view-entries-as-an-array-of-strings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="returns-the-current-view-entries-as-an-array-of-strings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-ssh">SSH</h1>

## Show the agent's SSH argument structure

<a id="opIdprotocol_ssh_get_args"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ssh/get/args \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/ssh/get/args`

Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-ssh-argument-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SSH argument structure|

> Example responses

> 200 Response

```json
{}
```

<h3 id="show-the-agents-ssh-argument-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's SSH configuration

<a id="opIdprotocol_ssh_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ssh/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/ssh/get/config`

Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-ssh-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SSH configuration|

> Example responses

> 200 Response

```json
{
  "port": 0,
  "version": "string"
}
```

<h3 id="show-the-agents-ssh-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigSSH](#schemaconfigssh)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's SSH statistics

<a id="opIdprotocol_ssh_get_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ssh/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/ssh/get/statistics`

Statistics of fields indicated in the headers

<h3 id="show-the-agents-ssh-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show SSH statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-ssh-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-ssh-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's SSH traffic tracing

<a id="opIdprotocol_ssh_get_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ssh/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/ssh/get/trace`

Trace 1 means enabled, 0 means not

<h3 id="show-the-agents-ssh-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show whether SSH tracing is enabled|

> Example responses

> 200 Response

```json
{
  "port": 0,
  "version": "string"
}
```

<h3 id="show-the-agents-ssh-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigSSH](#schemaconfigssh)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Disable individual IP aliases on the agent and the simulator host

<a id="opIdprotocol_ssh_ipalias_disable"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ssh/ipalias/disable/string/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/disable/{ipaddress}/{port}`

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

<h3 id="disable-individual-ip-aliases-on-the-agent-and-the-simulator-host-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate SSH IP alias|
|ipaddress|path|string|true|none|
|port|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="disable-individual-ip-aliases-on-the-agent-and-the-simulator-host-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Enable individual IP aliases on the agent and the simulator host

<a id="opIdprotocol_ssh_ipalias_enable"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ssh/ipalias/enable/string/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/enable/{ipaddress}/{port}`

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

<h3 id="enable-individual-ip-aliases-on-the-agent-and-the-simulator-host-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate SSH IP alias|
|ipaddress|path|string|true|none|
|port|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="enable-individual-ip-aliases-on-the-agent-and-the-simulator-host-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Check individual IP aliases on the agent and the simulator host

<a id="opIdprotocol_ssh_ipalias_isenabled"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ssh/ipalias/isenabled/string/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/isenabled/{ipaddress}/{port}`

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

<h3 id="check-individual-ip-aliases-on-the-agent-and-the-simulator-host-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate SSH IP alias|
|ipaddress|path|string|true|none|
|port|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="check-individual-ip-aliases-on-the-agent-and-the-simulator-host-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## List all IP aliases on the agent and the simulator host

<a id="opIdprotocol_ssh_ipalias_list"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ssh/ipalias/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/list`

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

<h3 id="list-all-ip-aliases-on-the-agent-and-the-simulator-host-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate SSH IP alias|

> Example responses

> 200 Response

```json
[
  {
    "IP": "string",
    "interface": "string",
    "mask": "string",
    "port": 0
  }
]
```

<h3 id="list-all-ip-aliases-on-the-agent-and-the-simulator-host-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="list-all-ip-aliases-on-the-agent-and-the-simulator-host-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IPAlias](#schemaipalias)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's SSH configuration

<a id="opIdprotocol_ssh_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ssh/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/ssh/set/config/{argument}/{value}`

Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="set-the-agents-ssh-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SSH configuration|
|argument|path|string|true|Parameter to set the SSH configuration|
|value|path|string|true|Value to set the SSH configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-ssh-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's SSH traffic tracing

<a id="opIdprotocol_ssh_set_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/ssh/set/trace/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/ssh/set/trace/{enableOrNot}`

1 to enable, 0 to disable

<h3 id="set-the-agents-ssh-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SSH tracing|
|enableOrNot|path|string|true|Value to set the SSH tracing|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-ssh-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the SSH statistics headers

<a id="opIdprotocol_ssh_get_stats_hdr"></a>

> Code samples

```bash
curl https://example.com/mimic/protocol/msg/ssh/get/stats_hdr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/protocol/msg/ssh/get/stats_hdr`

The headers of statistics fields

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-ssh-statistics-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-ssh-statistics-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-syslog">SYSLOG</h1>

## Show the agent's SYSLOG argument structure

<a id="opIdprotocol_syslog_get_args"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/syslog/get/args \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/syslog/get/args`

Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-syslog-argument-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SYSLOG argument structure|

> Example responses

> 200 Response

```json
{}
```

<h3 id="show-the-agents-syslog-argument-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's SYSLOG configuration

<a id="opIdprotocol_syslog_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/syslog/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/syslog/get/config`

Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-syslog-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the SYSLOG configuration|

> Example responses

> 200 Response

```json
{
  "client": "string",
  "hostname": "string",
  "localport": 0,
  "separator": "string",
  "sequence": 0,
  "server": "string",
  "serverport": 0,
  "timestamp": "string"
}
```

<h3 id="show-the-agents-syslog-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigSYSLOG](#schemaconfigsyslog)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's SYSLOG statistics

<a id="opIdprotocol_syslog_get_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/syslog/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/syslog/get/statistics`

Statistics of fields indicated in the headers

<h3 id="show-the-agents-syslog-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show SYSLOG statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-syslog-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-syslog-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's SYSLOG traffic tracing

<a id="opIdprotocol_syslog_get_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/syslog/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/syslog/get/trace`

Trace 1 means enabled, 0 means not

<h3 id="show-the-agents-syslog-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show whether SYSLOG tracing is enabled|

> Example responses

> 200 Response

```json
{
  "client": "string",
  "hostname": "string",
  "localport": 0,
  "separator": "string",
  "sequence": 0,
  "server": "string",
  "serverport": 0,
  "timestamp": "string"
}
```

<h3 id="show-the-agents-syslog-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigSYSLOG](#schemaconfigsyslog)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the outgoing message's attributes

<a id="opIdprotocol_syslog_get_attr"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/syslog/get/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/syslog/get/{attr}`

Attribute can be server , sequence , separator , hostname , timestamp

<h3 id="show-the-outgoing-messages-attributes-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SYSLOG tracing|
|attr|path|string|true|Attribute|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="show-the-outgoing-messages-attributes-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's SYSLOG traffic tracing

<a id="opIdprotocol_syslog_send"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/syslog/send/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "hostname": "string",
    "message": "string",
    "separator": "string",
    "sequence": "string",
    "timestamp": "string"
  }'
```

`POST /mimic/agent/{agentNum}/protocol/msg/syslog/send/{pri}`

1 to enable, 0 to disable

> Body parameter

```json
{
  "hostname": "string",
  "message": "string",
  "separator": "string",
  "sequence": "string",
  "timestamp": "string"
}
```

<h3 id="set-the-agents-syslog-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SYSLOG tracing|
|pri|path|integer(int32)|true|Message Priority|
|body|body|[SyslogMsg](#schemasyslogmsg)|true|none|
|» hostname|body|string|false|none|
|» message|body|string|false|none|
|» separator|body|string|false|none|
|» sequence|body|string|false|none|
|» timestamp|body|string|false|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-syslog-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's SYSLOG configuration

<a id="opIdprotocol_syslog_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/syslog/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/syslog/set/config/{argument}/{value}`

Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="set-the-agents-syslog-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SYSLOG configuration|
|argument|path|string|true|Parameter to set the SYSLOG configuration|
|value|path|string|true|Value to set the SYSLOG configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-syslog-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's SYSLOG traffic tracing

<a id="opIdprotocol_syslog_set_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/syslog/set/trace/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/syslog/set/trace/{enableOrNot}`

1 to enable, 0 to disable

<h3 id="set-the-agents-syslog-traffic-tracing-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SYSLOG tracing|
|enableOrNot|path|string|true|Value to set the SYSLOG tracing|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-syslog-traffic-tracing-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the outgoing message's attributes

<a id="opIdprotocol_syslog_set_attr"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/syslog/set/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/syslog/set/{attr}/{value}`

Attribute can be server , sequence , separator , hostname , timestamp

<h3 id="set-the-outgoing-messages-attributes-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the SYSLOG tracing|
|attr|path|string|true|Attribute|
|value|path|string|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-outgoing-messages-attributes-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the SYSLOG statistics headers

<a id="opIdprotocol_syslog_get_stats_hdr"></a>

> Code samples

```bash
curl https://example.com/mimic/protocol/msg/syslog/get/stats_hdr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/protocol/msg/syslog/get/stats_hdr`

The headers of statistics fields

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-syslog-statistics-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-syslog-statistics-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-telnet">TELNET</h1>

## Changes the connection's current logon.

<a id="opIdprotocol_telnet_connection_logon"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/connection/logon/0/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/telnet/connection/logon/{connectionID}/{user}/{password}`

Logon change allows (hidden) commands for a different access mode to run.

<h3 id="changes-the-connections-current-logon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate TELNET connection|
|connectionID|path|integer(int32)|true|none|
|user|path|string|true|none|
|password|path|string|true|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="changes-the-connections-current-logon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="changes-the-connections-current-logon-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Executes the command asynchronously .

<a id="opIdprotocol_telnet_connection_request"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/connection/request/0/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/telnet/connection/request/{connectionID}/{command}`

Equivalent of the command typed in by the user.

<h3 id="executes-the-command-asynchronously--parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate TELNET connection|
|connectionID|path|integer(int32)|true|none|
|command|path|string|true|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="executes-the-command-asynchronously--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="executes-the-command-asynchronously--responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Triggers the asynchronous signal event with the specified signal name

<a id="opIdprotocol_telnet_connection_signal"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/connection/signal/0/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/telnet/connection/signal/{connectionID}/{signalName}`

Signal name is either connect or idle

<h3 id="triggers-the-asynchronous-signal-event-with-the-specified-signal-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate TELNET connection|
|connectionID|path|integer(int32)|true|none|
|signalName|path|string|true|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="triggers-the-asynchronous-signal-event-with-the-specified-signal-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="triggers-the-asynchronous-signal-event-with-the-specified-signal-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TELNET argument structure

<a id="opIdprotocol_telnet_get_args"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/get/args \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/telnet/get/args`

Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-telnet-argument-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the TELNET argument structure|

> Example responses

> 200 Response

```json
{}
```

<h3 id="show-the-agents-telnet-argument-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TELNET configuration

<a id="opIdprotocol_telnet_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/telnet/get/config`

Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-telnet-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the TELNET configuration|

> Example responses

> 200 Response

```json
{
  "keymap": "string",
  "paging_prompt": "string",
  "port": 0,
  "prompt": "string",
  "rule": "string",
  "userdb": "string"
}
```

<h3 id="show-the-agents-telnet-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigTELNET](#schemaconfigtelnet)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TELNET statistics

<a id="opIdprotocol_telnet_get_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/telnet/get/statistics`

Statistics of fields indicated in the headers

<h3 id="show-the-agents-telnet-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show TELNET statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-telnet-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-telnet-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TELNET traffic tracing

<a id="opIdprotocol_telnet_get_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/telnet/get/trace`

Trace 1 means enabled, 0 means not

<h3 id="show-the-agents-telnet-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show whether TELNET tracing is enabled|

> Example responses

> 200 Response

```json
{
  "keymap": "string",
  "paging_prompt": "string",
  "port": 0,
  "prompt": "string",
  "rule": "string",
  "userdb": "string"
}
```

<h3 id="show-the-agents-telnet-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigTELNET](#schemaconfigtelnet)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Disable individual IP aliases on the agent and the simulator host

<a id="opIdprotocol_telnet_ipalias_disable"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/ipalias/disable/string/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/disable/{ipaddress}/{port}`

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

<h3 id="disable-individual-ip-aliases-on-the-agent-and-the-simulator-host-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate TELNET IP alias|
|ipaddress|path|string|true|none|
|port|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="disable-individual-ip-aliases-on-the-agent-and-the-simulator-host-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Enable individual IP aliases on the agent and the simulator host

<a id="opIdprotocol_telnet_ipalias_enable"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/ipalias/enable/string/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/enable/{ipaddress}/{port}`

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

<h3 id="enable-individual-ip-aliases-on-the-agent-and-the-simulator-host-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate TELNET IP alias|
|ipaddress|path|string|true|none|
|port|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="enable-individual-ip-aliases-on-the-agent-and-the-simulator-host-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Check individual IP aliases on the agent and the simulator host

<a id="opIdprotocol_telnet_ipalias_isenabled"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/ipalias/isenabled/string/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/isenabled/{ipaddress}/{port}`

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

<h3 id="check-individual-ip-aliases-on-the-agent-and-the-simulator-host-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate TELNET IP alias|
|ipaddress|path|string|true|none|
|port|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="check-individual-ip-aliases-on-the-agent-and-the-simulator-host-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## List all IP aliases on the agent and the simulator host

<a id="opIdprotocol_telnet_ipalias_list"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/ipalias/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/list`

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

<h3 id="list-all-ip-aliases-on-the-agent-and-the-simulator-host-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to manipulate TELNET IP alias|

> Example responses

> 200 Response

```json
[
  {
    "IP": "string",
    "interface": "string",
    "mask": "string",
    "port": 0
  }
]
```

<h3 id="list-all-ip-aliases-on-the-agent-and-the-simulator-host-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="list-all-ip-aliases-on-the-agent-and-the-simulator-host-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IPAlias](#schemaipalias)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TELNET connections

<a id="opIdprotocol_telnet_server_get_connections"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/server/get/connections \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/telnet/server/get/connections`

IDs of all connected connections

<h3 id="show-the-agents-telnet-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show TELNET configuration|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-telnet-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-telnet-connections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TELNET keymap file name

<a id="opIdprotocol_telnet_server_get_keymap"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/server/get/keymap \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/telnet/server/get/keymap`

Keymap file name

<h3 id="show-the-agents-telnet-keymap-file-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show TELNET statistics|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-agents-telnet-keymap-file-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-telnet-keymap-file-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TELNET rules db file name

<a id="opIdprotocol_telnet_server_get_rulesdb"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/server/get/rulesdb \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/telnet/server/get/rulesdb`

Rules db file name

<h3 id="show-the-agents-telnet-rules-db-file-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show TELNET statistics|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-agents-telnet-rules-db-file-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-telnet-rules-db-file-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TELNET server state

<a id="opIdprotocol_telnet_server_get_state"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/server/get/state \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/telnet/server/get/state`

Return 1 means accepting connections, 0 not

<h3 id="show-the-agents-telnet-server-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show TELNET statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-telnet-server-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-telnet-server-state-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TELNET user db file name

<a id="opIdprotocol_telnet_server_get_userdb"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/server/get/userdb \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/telnet/server/get/userdb`

User db file name

<h3 id="show-the-agents-telnet-user-db-file-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show TELNET statistics|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-agents-telnet-user-db-file-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-telnet-user-db-file-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TELNET users

<a id="opIdprotocol_telnet_server_get_users"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/server/get/users \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/telnet/server/get/users`

List of users

<h3 id="show-the-agents-telnet-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show TELNET configuration|

> Example responses

> 200 Response

```json
[
  {
    "groups": [
      "string"
    ],
    "hasPassword": 0,
    "password": "string",
    "username": "string"
  }
]
```

<h3 id="show-the-agents-telnet-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-telnet-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TelnetUser](#schematelnetuser)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's TELNET configuration

<a id="opIdprotocol_telnet_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/telnet/set/config/{argument}/{value}`

Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="set-the-agents-telnet-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the TELNET configuration|
|argument|path|string|true|Parameter to set the TELNET configuration|
|value|path|string|true|Value to set the TELNET configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-telnet-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's TELNET traffic tracing

<a id="opIdprotocol_telnet_set_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/telnet/set/trace/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/telnet/set/trace/{enableOrNot}`

1 to enable, 0 to disable

<h3 id="set-the-agents-telnet-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the TELNET tracing|
|enableOrNot|path|string|true|Value to set the TELNET tracing|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-telnet-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the TELNET statistics headers

<a id="opIdprotocol_telnet_get_stats_hdr"></a>

> Code samples

```bash
curl https://example.com/mimic/protocol/msg/telnet/get/stats_hdr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/protocol/msg/telnet/get/stats_hdr`

The headers of statistics fields

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-telnet-statistics-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-telnet-statistics-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-tftp">TFTP</h1>

## Show the agent's TFTP argument structure

<a id="opIdprotocol_tftp_get_args"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tftp/get/args \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/tftp/get/args`

Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-tftp-argument-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the TFTP argument structure|

> Example responses

> 200 Response

```json
{}
```

<h3 id="show-the-agents-tftp-argument-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TFTP configuration

<a id="opIdprotocol_tftp_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tftp/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/tftp/get/config`

Agent's TFTP configuration

<h3 id="show-the-agents-tftp-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the TFTP configuration|

> Example responses

> 200 Response

```json
{
  "cache": 0,
  "client": "string",
  "dstfile": "string",
  "mode": "string",
  "port": 0,
  "retries": 0,
  "script": "string",
  "server": "string",
  "srcfile": "string",
  "timeout": 0,
  "trace": "string"
}
```

<h3 id="show-the-agents-tftp-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigTFTP](#schemaconfigtftp)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TFTP statistics

<a id="opIdprotocol_tftp_get_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tftp/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/tftp/get/statistics`

Statistics of fields indicated in the headers

<h3 id="show-the-agents-tftp-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show TFTP statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-tftp-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-tftp-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TFTP traffic tracing

<a id="opIdprotocol_tftp_get_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tftp/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/tftp/get/trace`

Trace 1 means enabled, 0 means not

<h3 id="show-the-agents-tftp-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show whether TFTP tracing is enabled|

> Example responses

> 200 Response

```json
{
  "cache": 0,
  "client": "string",
  "dstfile": "string",
  "mode": "string",
  "port": 0,
  "retries": 0,
  "script": "string",
  "server": "string",
  "srcfile": "string",
  "timeout": 0,
  "trace": "string"
}
```

<h3 id="show-the-agents-tftp-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigTFTP](#schemaconfigtftp)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create a read session to download srcfile from server

<a id="opIdprotocol_tftp_session_read"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tftp/session/read/server/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/agent/{agentNum}/protocol/msg/tftp/session/read/server/{srcfile}`

Session ID is returned

<h3 id="create-a-read-session-to-download-srcfile-from-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show TFTP statistics|
|srcfile|path|string|true|File name to retrieve from server|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="create-a-read-session-to-download-srcfile-from-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="create-a-read-session-to-download-srcfile-from-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create a read session to upload srcfile to server

<a id="opIdprotocol_tftp_session_write"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tftp/session/write/server/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/agent/{agentNum}/protocol/msg/tftp/session/write/server/{srcfile}`

Session ID is returned

<h3 id="create-a-read-session-to-upload-srcfile-to-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show TFTP statistics|
|srcfile|path|string|true|File name to upload to server|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="create-a-read-session-to-upload-srcfile-to-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="create-a-read-session-to-upload-srcfile-to-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's TFTP configuration

<a id="opIdprotocol_tftp_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tftp/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/tftp/set/config/{argument}/{value}`

Agent's TFTP configuration

<h3 id="set-the-agents-tftp-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the TFTP configuration|
|argument|path|string|true|Parameter to set the TFTP configuration|
|value|path|string|true|Value to set the TFTP configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-tftp-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's TFTP traffic tracing

<a id="opIdprotocol_tftp_set_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tftp/set/trace/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/tftp/set/trace/{enableOrNot}`

1 to enable, 0 to disable

<h3 id="set-the-agents-tftp-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the TFTP tracing|
|enableOrNot|path|string|true|Value to set the TFTP tracing|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-tftp-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show a parameter of a TFTP sesssion

<a id="opIdprotocol_tftp_session_get_parameter"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tftp/string/get/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/get/{parameter}`

Parameter is server , port , or dstfile

<h3 id="show-a-parameter-of-a-tftp-sesssion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show TFTP parameter|
|sessionID|path|string|true|SessionID|
|parameter|path|string|true|Parameter to show|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="show-a-parameter-of-a-tftp-sesssion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set a parameter of a TFTP sesssion

<a id="opIdprotocol_tftp_session_set_parameter"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tftp/string/set/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/set/{parameter}/{value}`

Parameter is server , port , or dstfile

<h3 id="set-a-parameter-of-a-tftp-sesssion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set TFTP parameter|
|sessionID|path|string|true|SessionID|
|parameter|path|string|true|Parameter to set|
|value|path|string|true|Value to set|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-a-parameter-of-a-tftp-sesssion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Start a TFTP sesssion

<a id="opIdprotocol_tftp_session_start"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tftp/string/start \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/start`

Start uploading or downloading the file

<h3 id="start-a-tftp-sesssion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to start TFTP transaction|
|sessionID|path|string|true|SessionID|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="start-a-tftp-sesssion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Check a TFTP sesssion's status

<a id="opIdprotocol_tftp_session_status"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tftp/string/status \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/status`

Status includes running state, bytes transfered, and time elapsed

<h3 id="check-a-tftp-sesssions-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show TFTP transaction|
|sessionID|path|string|true|SessionID|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="check-a-tftp-sesssions-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Stop a TFTP sesssion

<a id="opIdprotocol_tftp_session_stop"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tftp/string/stop \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/stop`

Stop uploading or downloading the file

<h3 id="stop-a-tftp-sesssion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to stop TFTP transaction|
|sessionID|path|string|true|SessionID|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="stop-a-tftp-sesssion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the TFTP statistics headers

<a id="opIdprotocol_tftp_get_stats_hdr"></a>

> Code samples

```bash
curl https://example.com/mimic/protocol/msg/tftp/get/stats_hdr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/protocol/msg/tftp/get/stats_hdr`

The headers of statistics fields

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-tftp-statistics-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-tftp-statistics-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-tod">TOD</h1>

## Show the agent's TOD argument structure

<a id="opIdprotocol_tod_get_args"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tod/get/args \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/tod/get/args`

Agent's TOD configuration

<h3 id="show-the-agents-tod-argument-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the TOD argument structure|

> Example responses

> 200 Response

```json
{}
```

<h3 id="show-the-agents-tod-argument-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TOD configuration

<a id="opIdprotocol_tod_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tod/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/tod/get/config`

Agent's TOD configuration

<h3 id="show-the-agents-tod-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the TOD configuration|

> Example responses

> 200 Response

```json
{
  "port": 0,
  "retries": 0,
  "script": "string",
  "server": "string",
  "timeout": 0
}
```

<h3 id="show-the-agents-tod-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigTOD](#schemaconfigtod)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TOD statistics

<a id="opIdprotocol_tod_get_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tod/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/tod/get/statistics`

Statistics of fields indicated in the headers

<h3 id="show-the-agents-tod-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show TOD statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-tod-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-tod-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's TOD traffic tracing

<a id="opIdprotocol_tod_get_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tod/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/tod/get/trace`

Trace 1 means enabled, 0 means not

<h3 id="show-the-agents-tod-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show whether TOD tracing is enabled|

> Example responses

> 200 Response

```json
{
  "port": 0,
  "retries": 0,
  "script": "string",
  "server": "string",
  "timeout": 0
}
```

<h3 id="show-the-agents-tod-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigTOD](#schemaconfigtod)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Retrieve TOD time

<a id="opIdprotocol_tod_gettime"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tod/gettime/server/string/port/0/script/string/timeout/0/retries/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/tod/gettime/server/{serverAddr}/port/{portNum}/script/{scriptName}/timeout/{timeSec}/retries/{numRetries}`

Retrive time from server

<h3 id="retrieve-tod-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show TOD return|
|serverAddr|path|string|true|serverAddr|
|portNum|path|integer(int32)|true|portNum|
|scriptName|path|string|true|scriptName|
|timeSec|path|integer(int32)|true|timeSec|
|numRetries|path|integer(int32)|true|numRetries|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="retrieve-tod-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="retrieve-tod-time-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's TOD configuration

<a id="opIdprotocol_tod_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tod/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/tod/set/config/{argument}/{value}`

Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="set-the-agents-tod-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the TOD configuration|
|argument|path|string|true|Parameter to set the TOD configuration|
|value|path|string|true|Value to set the TOD configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-tod-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's TOD traffic tracing

<a id="opIdprotocol_tod_set_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/tod/set/trace/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/tod/set/trace/{enableOrNot}`

1 to enable, 0 to disable

<h3 id="set-the-agents-tod-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the TOD tracing|
|enableOrNot|path|string|true|Value to set the TOD tracing|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-tod-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the TOD statistics headers

<a id="opIdprotocol_tod_get_stats_hdr"></a>

> Code samples

```bash
curl https://example.com/mimic/protocol/msg/tod/get/stats_hdr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/protocol/msg/tod/get/stats_hdr`

The headers of statistics fields

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-tod-statistics-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-tod-statistics-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-web">WEB</h1>

## Show the agent's WEB argument structure

<a id="opIdprotocol_web_get_args"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/web/get/args \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/web/get/args`

Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-web-argument-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the WEB argument structure|

> Example responses

> 200 Response

```json
{}
```

<h3 id="show-the-agents-web-argument-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's WEB configuration

<a id="opIdprotocol_web_get_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/web/get/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/web/get/config`

Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="show-the-agents-web-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the WEB configuration|

> Example responses

> 200 Response

```json
{
  "is_persistent_connections": 0,
  "password": "string",
  "port": 0,
  "rule": "string",
  "username": "string",
  "wsdl": "string"
}
```

<h3 id="show-the-agents-web-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigWEB](#schemaconfigweb)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's WEB statistics

<a id="opIdprotocol_web_get_statistics"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/web/get/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/web/get/statistics`

Statistics of fields indicated in the headers

<h3 id="show-the-agents-web-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show WEB statistics|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="show-the-agents-web-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-web-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's WEB traffic tracing

<a id="opIdprotocol_web_get_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/web/get/trace \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/web/get/trace`

Trace 1 means enabled, 0 means not

<h3 id="show-the-agents-web-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show whether WEB tracing is enabled|

> Example responses

> 200 Response

```json
{
  "is_persistent_connections": 0,
  "password": "string",
  "port": 0,
  "rule": "string",
  "username": "string",
  "wsdl": "string"
}
```

<h3 id="show-the-agents-web-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConfigWEB](#schemaconfigweb)|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Add the agent's WEB port

<a id="opIdprotocol_web_port_add"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/web/port/add/0 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/agent/{agentNum}/protocol/msg/web/port/add/{port}`

Add port

<h3 id="add-the-agents-web-port-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to add WEB port|
|port|path|integer(int32)|true|TCP port|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="add-the-agents-web-port-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the agent's WEB port

<a id="opIdprotocol_web_port_exists"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/web/port/exists/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/protocol/msg/web/port/exists/{port}`

Check the port. 1 means existing, 0 means not

<h3 id="show-the-agents-web-port-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show WEB configuration|
|port|path|integer(int32)|true|TCP port|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-agents-web-port-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-agents-web-port-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Remove the agent's WEB port

<a id="opIdprotocol_web_port_remove"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/web/port/remove/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/protocol/msg/web/port/remove/{port}`

Remove port

<h3 id="remove-the-agents-web-port-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to remove WEB port|
|port|path|integer(int32)|true|TCP port|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="remove-the-agents-web-port-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's WEB port attribute

<a id="opIdprotocol_web_port_set"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/web/port/set/0/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/web/port/set/{port}/{protocol}/{version}`

Set port

<h3 id="set-the-agents-web-port-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set WEB port|
|port|path|integer(int32)|true|TCP port|
|protocol|path|string|true|Encryption or related protocol|
|version|path|string|true|Encryption or related protocol version|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-web-port-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Start the agent's WEB port

<a id="opIdprotocol_web_port_start"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/web/port/start/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/web/port/start/{port}`

Start port

<h3 id="start-the-agents-web-port-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to start WEB port|
|port|path|integer(int32)|true|TCP port|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="start-the-agents-web-port-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Stop the agent's WEB port

<a id="opIdprotocol_web_port_stop"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/web/port/stop/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/web/port/stop/{port}`

Stop port

<h3 id="stop-the-agents-web-port-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to stop WEB port|
|port|path|integer(int32)|true|TCP port|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="stop-the-agents-web-port-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's WEB configuration

<a id="opIdprotocol_web_set_config"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/web/set/config/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/web/set/config/{argument}/{value}`

Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap

<h3 id="set-the-agents-web-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the WEB configuration|
|argument|path|string|true|Parameter to set the WEB configuration|
|value|path|string|true|Value to set the WEB configuration|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-web-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the agent's WEB traffic tracing

<a id="opIdprotocol_web_set_trace"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/protocol/msg/web/set/trace/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/protocol/msg/web/set/trace/{enableOrNot}`

1 to enable, 0 to disable

<h3 id="set-the-agents-web-traffic-tracing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to set the WEB tracing|
|enableOrNot|path|string|true|Value to set the WEB tracing|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-agents-web-traffic-tracing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Show the WEB statistics headers

<a id="opIdprotocol_web_get_stats_hdr"></a>

> Code samples

```bash
curl https://example.com/mimic/protocol/msg/web/get/stats_hdr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/protocol/msg/web/get/stats_hdr`

The headers of statistics fields

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="show-the-web-statistics-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="show-the-web-statistics-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-valuespace">Valuespace</h1>

## Add an entry to a table.

<a id="opIdadd"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/add/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/agent/{agentNum}/value/add/{object}/{instance}`

The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.

<h3 id="add-an-entry-to-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|object|path|string|true|Object (column) of the table in the agent's value space|
|instance|path|string|true|Object (column) of the table in the agent's value space|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="add-an-entry-to-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.

<a id="opIdeval_value"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/eval/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/value/eval/{object}/{instance}`

Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.

<h3 id="evaluate-the-values-of-the-specified-instance-instance-for-each-specified-mib-object-object-and-return-it-as-it-would-through-snmp-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|object|path|string|true|Single instance object or object (column) of the table in the agent's value space.|
|instance|path|string|true|Row of the table in the agent's value space. 0 for single instance objects|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="evaluate-the-values-of-the-specified-instance-instance-for-each-specified-mib-object-object-and-return-it-as-it-would-through-snmp-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get a variable in the Value Space.

<a id="opIdget_value"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/get/string/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/value/get/{object}/{instance}/{variable}`

Get a variable in the Value Space.

<h3 id="get-a-variable-in-the-value-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|object|path|string|true|Object (column) of the table in the agent's value space|
|instance|path|string|true|Object (column) of the table in the agent's value space|
|variable|path|string|true|Object (column) of the table in the agent's value space|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-a-variable-in-the-value-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.

<a id="opIdget_info"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/info/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/value/info/{object}`

Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.

<h3 id="return-the-syntactical-information-for-the-specified-object-such-as-type-size-range-enumerations-and-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the information of the object|
|object|path|string|true|Object|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="return-the-syntactical-information-for-the-specified-object-such-as-type-size-range-enumerations-and-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Display the MIB object instances for the specified object.

<a id="opIdget_instances"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/instances/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/value/instances/{object}`

This enables MIB browsing of the MIB on the current agent.

<h3 id="display-the-mib-object-instances-for-the-specified-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|object|path|string|true|Object (column) of the table in the agent's value space|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="display-the-mib-object-instances-for-the-specified-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="display-the-mib-object-instances-for-the-specified-object-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Display the MIB objects below the current position

<a id="opIdget_objects"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/list/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/value/list/{OID}`

This command is similar to the ls or dir operating system commands to list filesystem directories.

<h3 id="display-the-mib-objects-below-the-current-position-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the OID branches|
|OID|path|string|true|Current OID|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="display-the-mib-objects-below-the-current-position-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="display-the-mib-objects-below-the-current-position-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.

<a id="opIdmeval_value"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/meval/%5B%22string%22%5D \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/value/meval/{objInsArray}`

Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.

<h3 id="evaluate-the-values-of-the-specified-instance-instance-for-each-specified-mib-object-object-and-return-it-as-it-would-through-snmp-requests-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|objInsArray|path|[[string]]|true|Multiple objects or object (column) of the table in the agent's value space.|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="evaluate-the-values-of-the-specified-instance-instance-for-each-specified-mib-object-object-and-return-it-as-it-would-through-snmp-requests-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="evaluate-the-values-of-the-specified-instance-instance-for-each-specified-mib-object-object-and-return-it-as-it-would-through-snmp-requests-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get multiple variables in the Value Space.

<a id="opIdmget_value"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/mget/%5B%22string%22%5D \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/value/mget/{objInsVarArray}`

This is a performance optimization of the mimic value get command, to be used when many variables are requested.

<h3 id="get-multiple-variables-in-the-value-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|objInsVarArray|path|[[string]]|true|Multiple objects or object (column) of the table in the agent's value space.|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-multiple-variables-in-the-value-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="get-multiple-variables-in-the-value-space-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Return the MIB that defines the specified object.

<a id="opIdget_mib"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/mib/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/value/mib/{object}`

This will only return a MIB name if the object is unmistakeably defined in a MIB.

<h3 id="return-the-mib-that-defines-the-specified-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the MIB|
|object|path|string|true|Object|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="return-the-mib-that-defines-the-specified-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set multiple variables in the Value Space.

<a id="opIdmset_value"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/mset \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    [
      "string"
    ]
  ]'
```

`PUT /mimic/agent/{agentNum}/value/mset`

This is a performance optimization of the mimic value set command, to be used when many variables are to be set.

> Body parameter

```json
[
  [
    "string"
  ]
]
```

<h3 id="set-multiple-variables-in-the-value-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|body|body|[[string]]|false|objInsVarValArray|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-multiple-variables-in-the-value-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Unset multiple variables in the Value Space

<a id="opIdmunset_value"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/munset \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    [
      "string"
    ]
  ]'
```

`PUT /mimic/agent/{agentNum}/value/munset`

This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.

> Body parameter

```json
[
  [
    "string"
  ]
]
```

<h3 id="unset-multiple-variables-in-the-value-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|body|body|[[string]]|false|objInsVarArray|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="unset-multiple-variables-in-the-value-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Return the symbolic name of the specified object identifier.

<a id="opIdget_name"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/name/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/value/name/{OID}`

Return the symbolic name of the specified object identifier.

<h3 id="return-the-symbolic-name-of-the-specified-object-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the object|
|OID|path|string|true|OID|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="return-the-symbolic-name-of-the-specified-object-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Return the numeric OID of the specified object.

<a id="opIdget_oid"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/oid/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/value/oid/{object}`

Return the numeric OID of the specified object.

<h3 id="return-the-numeric-oid-of-the-specified-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent to show the OID|
|object|path|string|true|Object|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="return-the-numeric-oid-of-the-specified-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Remove an entry from a table.

<a id="opIdremove"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/remove/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/agent/{agentNum}/value/remove/{object}/{instance}`

The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.

<h3 id="remove-an-entry-from-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|object|path|string|true|Object (column) of the table in the agent's value space|
|instance|path|string|true|Object (column) of the table in the agent's value space|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="remove-an-entry-from-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set a variable in the Value Space.

<a id="opIdset_value"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/set/string/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '"string"'
```

`PUT /mimic/agent/{agentNum}/value/set/{object}/{instance}/{variable}`

NOTE to set a binary string value, specify a string starting with \\x followed by pairs of hexadecimal digits, eg. "\\x 01 23 45". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - "1", "2c", "2" and "3". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.

> Body parameter

```json
"string"
```

<h3 id="set-a-variable-in-the-value-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|object|path|string|true|Single instance object or object (column) of the table in the agent's value space.|
|instance|path|string|true|Row of the table in the agent's value space. 0 for single instance objects|
|variable|path|string|true|Variable|
|body|body|string|false|Value|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-a-variable-in-the-value-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Split the numerical OID into the object OID and instance OID.

<a id="opIdsplit_oid"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/split/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/value/split/{OID}`

This is useful if you have an OID which is a combination of object and instance.

<h3 id="split-the-numerical-oid-into-the-object-oid-and-instance-oid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|OID|path|string|true|OID|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="split-the-numerical-oid-into-the-object-oid-and-instance-oid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="split-the-numerical-oid-into-the-object-oid-and-instance-oid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get the state of a MIB object object.

<a id="opIdget_state"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/state/get/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/value/state/get/{object}`

To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.

<h3 id="get-the-state-of-a-mib-object-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|object|path|string|true|Object|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-the-state-of-a-mib-object-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the state of a MIB object object

<a id="opIdset_state"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/state/set/string/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/value/state/set/{object}/{state}`

To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.

<h3 id="set-the-state-of-a-mib-object-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|object|path|string|true|Object|
|state|path|integer(int32)|true|State|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-state-of-a-mib-object-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Unset a variable in the Value Space in order to free its memory.

<a id="opIdunset_value"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/unset/string/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/agent/{agentNum}/value/unset/{object}/{instance}/{variable}`

Only variables that have previously been set can be unset.

<h3 id="unset-a-variable-in-the-value-space-in-order-to-free-its-memory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|object|path|string|true|Single instance object or object (column) of the table in the agent's value space.|
|instance|path|string|true|Row of the table in the agent's value space. 0 for single instance objects|
|variable|path|string|true|Variable|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="unset-a-variable-in-the-value-space-in-order-to-free-its-memory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Display the variables for the specified instance instance for the specified MIB object object

<a id="opIdget_variables"></a>

> Code samples

```bash
curl https://example.com/mimic/agent/0/value/variables/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/agent/{agentNum}/value/variables/{object}/{instance}`

This enables variable browsing of the MIB on the current agent.

<h3 id="display-the-variables-for-the-specified-instance-instance-for-the-specified-mib-object-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentNum|path|integer(int32)|true|Agent of the value space|
|object|path|string|true|Single instance object or object (column) of the table in the agent's value space.|
|instance|path|string|true|Row of the table in the agent's value space. 0 for single instance objects|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="display-the-variables-for-the-specified-instance-instance-for-the-specified-mib-object-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="display-the-variables-for-the-specified-instance-instance-for-the-specified-mib-object-object-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="mimic-rest-api-daemon">Daemon</h1>

## Clear the lab configuration.

<a id="opIdcfg_new"></a>

> Code samples

```bash
curl https://example.com/mimic/clear/0/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/clear/{firstAgentNum}/{lastAgentNum}`

Clear the lab configuration.

<h3 id="clear-the-lab-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstAgentNum|path|integer(int32)|true|Agent number to start clearing|
|lastAgentNum|path|integer(int32)|true|Agent number to end the clearing|

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="clear-the-lab-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="clear-the-lab-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.

<a id="opIdget_active_data_list"></a>

> Code samples

```bash
curl https://example.com/mimic/get/active_data_list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/active_data_list`

This list is guaranteed to be sorted into increasing order.

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="the-list-of-agentnum-statistics-for-agents-that-are-currently-active-and-whose-statistics-have-changed-since-the-last-invocation-of-this-command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-list-of-agentnum-statistics-for-agents-that-are-currently-active-and-whose-statistics-have-changed-since-the-last-invocation-of-this-command-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The list of {agentnum} that are currently active (running or paused).

<a id="opIdget_active_list"></a>

> Code samples

```bash
curl https://example.com/mimic/get/active_list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/active_list`

This list is guaranteed to be sorted into increasing order.

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="the-list-of-agentnum-that-are-currently-active-running-or-paused-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-list-of-agentnum-that-are-currently-active-running-or-paused-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The currently loaded lab configuration file for the particular user.

<a id="opIdget_cfgfile"></a>

> Code samples

```bash
curl https://example.com/mimic/get/cfgfile \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/cfgfile`

In the case of multi-user access this command returns a different configuration file loaded for each user.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="the-currently-loaded-lab-configuration-file-for-the-particular-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-currently-loaded-lab-configuration-file-for-the-particular-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## This predicate indicates if the currently loaded agent configuration file has changed.

<a id="opIdget_cfg_file_changed"></a>

> Code samples

```bash
curl https://example.com/mimic/get/cfgfile_changed \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/cfgfile_changed`

Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="this-predicate-indicates-if-the-currently-loaded-agent-configuration-file-has-changed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="this-predicate-indicates-if-the-currently-loaded-agent-configuration-file-has-changed-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The list of {agentnum} for which a configurable parameter changed.

<a id="opIdget_changed_config_list"></a>

> Code samples

```bash
curl https://example.com/mimic/get/changed_config_list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/changed_config_list`

This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="the-list-of-agentnum-for-which-a-configurable-parameter-changed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-list-of-agentnum-for-which-a-configurable-parameter-changed-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The list of {agentnum state} for which the state changed.

<a id="opIdget_changed_state_list"></a>

> Code samples

```bash
curl https://example.com/mimic/get/changed_state_list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/changed_state_list`

This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.

> Example responses

> 200 Response

```json
[
  {
    "agentNum": 0,
    "state": 0
  }
]
```

<h3 id="the-list-of-agentnum-state-for-which-the-state-changed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-list-of-agentnum-state-for-which-the-state-changed-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AgentState](#schemaagentstate)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The number of clients currently connected to the daemon.

<a id="opIdget_clients"></a>

> Code samples

```bash
curl https://example.com/mimic/get/clients \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/clients`

The number of clients currently connected to the daemon.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="the-number-of-clients-currently-connected-to-the-daemon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-number-of-clients-currently-connected-to-the-daemon-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The list of {agentnum} that are currently configured.

<a id="opIdget_configured_list"></a>

> Code samples

```bash
curl https://example.com/mimic/get/configured_list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/configured_list`

This list is guaranteed to be sorted into increasing order.

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="the-list-of-agentnum-that-are-currently-configured-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-list-of-agentnum-that-are-currently-configured-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The set of network interfaces that can be used for simulations.

<a id="opIdget_interfaces"></a>

> Code samples

```bash
curl https://example.com/mimic/get/interfaces \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/interfaces`

The set of network interfaces that can be used for simulations.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="the-set-of-network-interfaces-that-can-be-used-for-simulations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-set-of-network-interfaces-that-can-be-used-for-simulations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The last configured agent instance.

<a id="opIdget_last"></a>

> Code samples

```bash
curl https://example.com/mimic/get/last \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/last`

The last configured agent instance.

> Example responses

> 200 Response

```json
0
```

<h3 id="the-last-configured-agent-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The current log file for the Simulator.

<a id="opIdget_log"></a>

> Code samples

```bash
curl https://example.com/mimic/get/log \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/log`

The current log file for the Simulator.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="the-current-log-file-for-the-simulator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-current-log-file-for-the-simulator-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The maximum number of agent instances.

<a id="opIdget_max"></a>

> Code samples

```bash
curl https://example.com/mimic/get/max \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/max`

The maximum number of agent instances.

> Example responses

> 200 Response

```json
0
```

<h3 id="the-maximum-number-of-agent-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The network address of the host where the MIMIC simulator is running.

<a id="opIdget_netaddr"></a>

> Code samples

```bash
curl https://example.com/mimic/get/netaddr \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/netaddr`

The network address of the host where the MIMIC simulator is running.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="the-network-address-of-the-host-where-the-mimic-simulator-is-running-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-network-address-of-the-host-where-the-mimic-simulator-is-running-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The default network device to be used for agent addresses.

<a id="opIdget_netdev"></a>

> Code samples

```bash
curl https://example.com/mimic/get/netdev \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/netdev`

The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="the-default-network-device-to-be-used-for-agent-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-default-network-device-to-be-used-for-agent-addresses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The product number that is licensed.

<a id="opIdget_product"></a>

> Code samples

```bash
curl https://example.com/mimic/get/product \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/product`

The product number that is licensed.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="the-product-number-that-is-licensed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-product-number-that-is-licensed-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The set of protocols supported by the Simulator.

<a id="opIdget_daemon_protocols"></a>

> Code samples

```bash
curl https://example.com/mimic/get/protocols \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/protocols`

The set of protocols supported by the Simulator.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="the-set-of-protocols-supported-by-the-simulator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-set-of-protocols-supported-by-the-simulator-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The return mode.

<a id="opIdget_return"></a>

> Code samples

```bash
curl https://example.com/mimic/get/return \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/return`

The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="the-return-mode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-return-mode-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The version of the MIMIC command interface.

<a id="opIdget_version"></a>

> Code samples

```bash
curl https://example.com/mimic/get/version \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/get/version`

The version of the MIMIC command interface.

> Example responses

> 200 Response

```json
"string"
```

<h3 id="the-version-of-the-mimic-command-interface-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Load the lab configuration file file.

<a id="opIdcfg_load"></a>

> Code samples

```bash
curl https://example.com/mimic/load/string/0/0/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/load/{cfgFile}/{firstAgentNum}/{lastAgentNum}/{startAgentNum}`

Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration

<h3 id="load-the-lab-configuration-file-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cfgFile|path|string|true|MIMIC agent configuration file to load|
|firstAgentNum|path|integer(int32)|true|Agent number in cfgFile to start the loading|
|lastAgentNum|path|integer(int32)|true|Agent number in cfgFile to end the loading|
|startAgentNum|path|integer(int32)|true|Agent number in current configuration to start placing the new agents|

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="load-the-lab-configuration-file-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="load-the-lab-configuration-file-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.

<a id="opIdmget_info"></a>

> Code samples

```bash
curl https://example.com/mimic/mget/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/mget/{infoArray}`

Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.

<h3 id="get-multiple-sets-of-information-about-mimic-where-infoarray-is-one-of-the-parameters-defined-in-the-mimic-get-command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|infoArray|path|[string]|true|Multiple strings of info.|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="get-multiple-sets-of-information-about-mimic-where-infoarray-is-one-of-the-parameters-defined-in-the-mimic-get-command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid info string|None|

<h3 id="get-multiple-sets-of-information-about-mimic-where-infoarray-is-one-of-the-parameters-defined-in-the-mimic-get-command-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Save the lab configuration.

<a id="opIdcfg_save"></a>

> Code samples

```bash
curl https://example.com/mimic/save \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/save`

Save the lab configuration.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="save-the-lab-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="save-the-lab-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Save the lab configuration in file.

<a id="opIdcfg_saveas"></a>

> Code samples

```bash
curl https://example.com/mimic/saveas/string/0/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/saveas/{cfgFile}/{firstAgentNum}/{lastAgentNum}`

Save the lab configuration in file.

<h3 id="save-the-lab-configuration-in-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cfgFile|path|string|true|MIMIC agent configuration file to save|
|firstAgentNum|path|integer(int32)|true|Agent number in cfgFile to start the loading|
|lastAgentNum|path|integer(int32)|true|Agent number in cfgFile to end the loading|

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="save-the-lab-configuration-in-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="save-the-lab-configuration-in-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The current log file for the Simulator.

<a id="opIdset_log"></a>

> Code samples

```bash
curl https://example.com/mimic/set/log \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '"string"'
```

`PUT /mimic/set/log`

The current log file for the Simulator.

> Body parameter

```json
"string"
```

<h3 id="the-current-log-file-for-the-simulator-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|The file name of the new log file|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="the-current-log-file-for-the-simulator-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## The network address of the host where the MIMIC simulator is running.

<a id="opIdset_netdev"></a>

> Code samples

```bash
curl https://example.com/mimic/set/netdev \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/set/netdev`

The network address of the host where the MIMIC simulator is running.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="the-network-address-of-the-host-where-the-mimic-simulator-is-running-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="the-network-address-of-the-host-where-the-mimic-simulator-is-running-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## This operation flushes all global objects which need to be made persistent to disk.

<a id="opIdstore_save"></a>

> Code samples

```bash
curl https://example.com/mimic/set/persistent \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/set/persistent`

The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="this-operation-flushes-all-global-objects-which-need-to-be-made-persistent-to-disk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="this-operation-flushes-all-global-objects-which-need-to-be-made-persistent-to-disk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Start MIMIC.

<a id="opIdstart_all_agents"></a>

> Code samples

```bash
curl https://example.com/mimic/start \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/start`

Start MIMIC.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="start-mimic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="start-mimic-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Stop MIMIC.

<a id="opIdstop_all_agents"></a>

> Code samples

```bash
curl https://example.com/mimic/stop \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/stop`

Stop MIMIC.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="stop-mimic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="stop-mimic-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## This command can be used as a predicate to ascertain the existence of a given variable.

<a id="opIdstore_exists"></a>

> Code samples

```bash
curl https://example.com/mimic/store/exists/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/store/exists/{var}`

It returns "1" if the variable exists, else "0".

<h3 id="this-command-can-be-used-as-a-predicate-to-ascertain-the-existence-of-a-given-variable-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|var|path|string|true|Variable name|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="this-command-can-be-used-as-a-predicate-to-ascertain-the-existence-of-a-given-variable-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Fetches the value associated with a variable.

<a id="opIdstore_get"></a>

> Code samples

```bash
curl https://example.com/mimic/store/get/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/store/get/{var}`

The value will be returned as a string (like all Tcl values).

<h3 id="fetches-the-value-associated-with-a-variable-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|var|path|string|true|Variable name|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="fetches-the-value-associated-with-a-variable-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## This command will return the list of variables in the said scope.

<a id="opIdstore_list"></a>

> Code samples

```bash
curl https://example.com/mimic/store/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/store/list`

The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="this-command-will-return-the-list-of-variables-in-the-said-scope-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="this-command-will-return-the-list-of-variables-in-the-said-scope-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.

<a id="opIdstore_lreplace"></a>

> Code samples

```bash
curl https://example.com/mimic/store/lreplace/string/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '"string"'
```

`PUT /mimic/store/lreplace/{var}/{index}`

These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.

> Body parameter

```json
"string"
```

<h3 id="these-commands-treat-the-variable-as-a-list-and-allow-to-replace-an-entry-in-the-list-at-the-specified-index-with-the-specified-value-the-variable-has-to-already-exist-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|var|path|string|true|Variable name|
|index|path|integer(int32)|true|Index|
|body|body|string|false|Value|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="these-commands-treat-the-variable-as-a-list-and-allow-to-replace-an-entry-in-the-list-at-the-specified-index-with-the-specified-value-the-variable-has-to-already-exist-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## This command can be used as a predicate to ascertain the persistence of a given variable.

<a id="opIdstore_persists"></a>

> Code samples

```bash
curl https://example.com/mimic/store/persists/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/store/persists/{var}`

It returns "1" if the variable is persistent, else "0".

<h3 id="this-command-can-be-used-as-a-predicate-to-ascertain-the-persistence-of-a-given-variable-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|var|path|string|true|Variable name|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="this-command-can-be-used-as-a-predicate-to-ascertain-the-persistence-of-a-given-variable-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Set the variable store for the global storage

<a id="opIdstore_set"></a>

> Code samples

```bash
curl https://example.com/mimic/store/set/string/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '"string"'
```

`PUT /mimic/store/set/{var}/{persist}`

Persist 1 means persistent , 0 means non-persistent

> Body parameter

```json
"string"
```

<h3 id="set-the-variable-store-for-the-global-storage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|var|path|string|true|Variable name|
|persist|path|integer(int32)|true|Persistent setting|
|body|body|string|false|Value|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="set-the-variable-store-for-the-global-storage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Deletes a variable which is currently defined.

<a id="opIdstore_unset"></a>

> Code samples

```bash
curl https://example.com/mimic/store/unset/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/store/unset/{var}`

This will cleanup persistent variables if needed

<h3 id="deletes-a-variable-which-is-currently-defined-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|var|path|string|true|Variable name|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="deletes-a-variable-which-is-currently-defined-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Terminate the MIMIC daemon.

<a id="opIdterminate"></a>

> Code samples

```bash
curl https://example.com/mimic/terminate \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /mimic/terminate`

Terminate the MIMIC daemon.

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="terminate-the-mimic-daemon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="terminate-the-mimic-daemon-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Add a new timer script to be executed at specified interval (in msec) with the specified argument.

<a id="opIdadd_daemon_timer_script"></a>

> Code samples

```bash
curl https://example.com/mimic/timer/script/add/string/0/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /mimic/timer/script/add/{script}/{interval}/{arg}`

Add a new timer script to be executed at specified interval (in msec) with the specified argument.

<h3 id="add-a-new-timer-script-to-be-executed-at-specified-interval-in-msec-with-the-specified-argument-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|script|path|string|true|Script name|
|interval|path|integer(int32)|true|Interval in msec|
|arg|path|string|true|Arguments to the script|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="add-a-new-timer-script-to-be-executed-at-specified-interval-in-msec-with-the-specified-argument-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Remove a timer script from the execution list.

<a id="opIddel_daemon_timer_script"></a>

> Code samples

```bash
curl https://example.com/mimic/timer/script/delete/string/0/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /mimic/timer/script/delete/{script}/{interval}/{arg}`

The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.

<h3 id="remove-a-timer-script-from-the-execution-list-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|script|path|string|true|Script name|
|interval|path|integer(int32)|true|Interval in msec|
|arg|path|string|true|Arguments to the script|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="remove-a-timer-script-from-the-execution-list-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## List the timer scripts currently running along with the their intervals.

<a id="opIdlist_daemon_timer_scripts"></a>

> Code samples

```bash
curl https://example.com/mimic/timer/script/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mimic/timer/script/list`

The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.

> Example responses

> 200 Response

```json
[
  {
    "arg": "string",
    "interval": 0,
    "script": "string"
  }
]
```

<h3 id="list-the-timer-scripts-currently-running-along-with-the-their-intervals-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid agent number value|None|

<h3 id="list-the-timer-scripts-currently-running-along-with-the-their-intervals-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TimerScript](#schematimerscript)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

# Schemas

<h2 id="tocS_AccessEntry">AccessEntry</h2>
<!-- backwards compatibility -->
<a id="schemaaccessentry"></a>
<a id="schema_AccessEntry"></a>
<a id="tocSaccessentry"></a>
<a id="tocsaccessentry"></a>

```json
{
  "access_mask": "string",
  "agent_range": "string",
  "user": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_mask|string|false|none|none|
|agent_range|string|false|none|none|
|user|string|false|none|none|

<h2 id="tocS_AgentState">AgentState</h2>
<!-- backwards compatibility -->
<a id="schemaagentstate"></a>
<a id="schema_AgentState"></a>
<a id="tocSagentstate"></a>
<a id="tocsagentstate"></a>

```json
{
  "agentNum": 0,
  "state": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentNum|integer(int32)|false|none|none|
|state|integer(int32)|false|none|none|

<h2 id="tocS_ConfigCOAP">ConfigCOAP</h2>
<!-- backwards compatibility -->
<a id="schemaconfigcoap"></a>
<a id="schema_ConfigCOAP"></a>
<a id="tocSconfigcoap"></a>
<a id="tocsconfigcoap"></a>

```json
{
  "keystore": "string",
  "primary_port": 0,
  "rule": "string",
  "secure_port": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keystore|string|false|none|none|
|primary_port|integer(int32)|false|none|none|
|rule|string|false|none|none|
|secure_port|integer(int32)|false|none|none|

<h2 id="tocS_ConfigDHCP">ConfigDHCP</h2>
<!-- backwards compatibility -->
<a id="schemaconfigdhcp"></a>
<a id="schema_ConfigDHCP"></a>
<a id="tocSconfigdhcp"></a>
<a id="tocsconfigdhcp"></a>

```json
{
  "add_options": "string",
  "classid": "string",
  "hwaddr": "string",
  "script": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_options|string|false|none|none|
|classid|string|false|none|none|
|hwaddr|string|false|none|none|
|script|string|false|none|none|

<h2 id="tocS_ConfigIPMI">ConfigIPMI</h2>
<!-- backwards compatibility -->
<a id="schemaconfigipmi"></a>
<a id="schema_ConfigIPMI"></a>
<a id="tocSconfigipmi"></a>
<a id="tocsconfigipmi"></a>

```json
{
  "primary_port": 0,
  "secure_port": 0,
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primary_port|integer(int32)|false|none|none|
|secure_port|integer(int32)|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_ConfigMQTT">ConfigMQTT</h2>
<!-- backwards compatibility -->
<a id="schemaconfigmqtt"></a>
<a id="schema_ConfigMQTT"></a>
<a id="tocSconfigmqtt"></a>
<a id="tocsconfigmqtt"></a>

```json
{
  "broker": "string",
  "clientid": "string",
  "filename": "string",
  "is_tls": "string",
  "password": "string",
  "port": 0,
  "tls_conf_filename": "string",
  "username": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broker|string|false|none|none|
|clientid|string|false|none|none|
|filename|string|false|none|none|
|is_tls|string|false|none|none|
|password|string|false|none|none|
|port|integer(int32)|false|none|none|
|tls_conf_filename|string|false|none|none|
|username|string|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_ConfigNETFLOW">ConfigNETFLOW</h2>
<!-- backwards compatibility -->
<a id="schemaconfignetflow"></a>
<a id="schema_ConfigNETFLOW"></a>
<a id="tocSconfignetflow"></a>
<a id="tocsconfignetflow"></a>

```json
{
  "bundleflowsets": 0,
  "collector": "string",
  "collectorport": 0,
  "filename": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundleflowsets|integer(int32)|false|none|none|
|collector|string|false|none|none|
|collectorport|integer(int32)|false|none|none|
|filename|string|false|none|none|

<h2 id="tocS_ConfigPROXY">ConfigPROXY</h2>
<!-- backwards compatibility -->
<a id="schemaconfigproxy"></a>
<a id="schema_ConfigPROXY"></a>
<a id="tocSconfigproxy"></a>
<a id="tocsconfigproxy"></a>

```json
{
  "TCP_NODELAY": 0,
  "client_to_server": "string",
  "disconnect_delay": 0,
  "max_connects": 0,
  "portno": 0,
  "pre_connect": "string",
  "server_to_client": "string",
  "target": "string",
  "transport": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TCP_NODELAY|integer(int32)|false|none|none|
|client_to_server|string|false|none|none|
|disconnect_delay|integer(int32)|false|none|none|
|max_connects|integer(int32)|false|none|none|
|portno|integer(int32)|false|none|none|
|pre_connect|string|false|none|none|
|server_to_client|string|false|none|none|
|target|string|false|none|none|
|transport|string|false|none|none|

<h2 id="tocS_ConfigSFLOW">ConfigSFLOW</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsflow"></a>
<a id="schema_ConfigSFLOW"></a>
<a id="tocSconfigsflow"></a>
<a id="tocsconfigsflow"></a>

```json
{
  "collector": "string",
  "collectorport": 0,
  "encoding_type": "string",
  "filename": "string",
  "flows_per_min": 0,
  "include_samples": "string",
  "records_per_sample": "string",
  "samples_per_datagram": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collector|string|false|none|none|
|collectorport|integer(int32)|false|none|none|
|encoding_type|string|false|none|none|
|filename|string|false|none|none|
|flows_per_min|integer(int32)|false|none|none|
|include_samples|string|false|none|none|
|records_per_sample|string|false|none|none|
|samples_per_datagram|string|false|none|none|

<h2 id="tocS_ConfigSNMPTCP">ConfigSNMPTCP</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsnmptcp"></a>
<a id="schema_ConfigSNMPTCP"></a>
<a id="tocSconfigsnmptcp"></a>
<a id="tocsconfigsnmptcp"></a>

```json
{
  "connections": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|integer(int32)|false|none|none|

<h2 id="tocS_ConfigSNMPv3">ConfigSNMPv3</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsnmpv3"></a>
<a id="schema_ConfigSNMPv3"></a>
<a id="tocSconfigsnmpv3"></a>
<a id="tocsconfigsnmpv3"></a>

```json
{
  "context_engine_id": "string",
  "engine_id": "string",
  "usm_db": "string",
  "vacm_db": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context_engine_id|string|false|none|none|
|engine_id|string|false|none|none|
|usm_db|string|false|none|none|
|vacm_db|string|false|none|none|

<h2 id="tocS_ConfigSSH">ConfigSSH</h2>
<!-- backwards compatibility -->
<a id="schemaconfigssh"></a>
<a id="schema_ConfigSSH"></a>
<a id="tocSconfigssh"></a>
<a id="tocsconfigssh"></a>

```json
{
  "port": 0,
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|port|integer(int32)|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_ConfigSYSLOG">ConfigSYSLOG</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsyslog"></a>
<a id="schema_ConfigSYSLOG"></a>
<a id="tocSconfigsyslog"></a>
<a id="tocsconfigsyslog"></a>

```json
{
  "client": "string",
  "hostname": "string",
  "localport": 0,
  "separator": "string",
  "sequence": 0,
  "server": "string",
  "serverport": 0,
  "timestamp": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|string|false|none|none|
|hostname|string|false|none|none|
|localport|integer(int32)|false|none|none|
|separator|string|false|none|none|
|sequence|integer(int32)|false|none|none|
|server|string|false|none|none|
|serverport|integer(int32)|false|none|none|
|timestamp|string|false|none|none|

<h2 id="tocS_ConfigTELNET">ConfigTELNET</h2>
<!-- backwards compatibility -->
<a id="schemaconfigtelnet"></a>
<a id="schema_ConfigTELNET"></a>
<a id="tocSconfigtelnet"></a>
<a id="tocsconfigtelnet"></a>

```json
{
  "keymap": "string",
  "paging_prompt": "string",
  "port": 0,
  "prompt": "string",
  "rule": "string",
  "userdb": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keymap|string|false|none|none|
|paging_prompt|string|false|none|none|
|port|integer(int32)|false|none|none|
|prompt|string|false|none|none|
|rule|string|false|none|none|
|userdb|string|false|none|none|

<h2 id="tocS_ConfigTFTP">ConfigTFTP</h2>
<!-- backwards compatibility -->
<a id="schemaconfigtftp"></a>
<a id="schema_ConfigTFTP"></a>
<a id="tocSconfigtftp"></a>
<a id="tocsconfigtftp"></a>

```json
{
  "cache": 0,
  "client": "string",
  "dstfile": "string",
  "mode": "string",
  "port": 0,
  "retries": 0,
  "script": "string",
  "server": "string",
  "srcfile": "string",
  "timeout": 0,
  "trace": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache|integer(int32)|false|none|none|
|client|string|false|none|none|
|dstfile|string|false|none|none|
|mode|string|false|none|none|
|port|integer(int32)|false|none|none|
|retries|integer(int32)|false|none|none|
|script|string|false|none|none|
|server|string|false|none|none|
|srcfile|string|false|none|none|
|timeout|integer(int32)|false|none|none|
|trace|string|false|none|none|

<h2 id="tocS_ConfigTOD">ConfigTOD</h2>
<!-- backwards compatibility -->
<a id="schemaconfigtod"></a>
<a id="schema_ConfigTOD"></a>
<a id="tocSconfigtod"></a>
<a id="tocsconfigtod"></a>

```json
{
  "port": 0,
  "retries": 0,
  "script": "string",
  "server": "string",
  "timeout": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|port|integer(int32)|false|none|none|
|retries|integer(int32)|false|none|none|
|script|string|false|none|none|
|server|string|false|none|none|
|timeout|integer(int32)|false|none|none|

<h2 id="tocS_ConfigWEB">ConfigWEB</h2>
<!-- backwards compatibility -->
<a id="schemaconfigweb"></a>
<a id="schema_ConfigWEB"></a>
<a id="tocSconfigweb"></a>
<a id="tocsconfigweb"></a>

```json
{
  "is_persistent_connections": 0,
  "password": "string",
  "port": 0,
  "rule": "string",
  "username": "string",
  "wsdl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_persistent_connections|integer(int32)|false|none|none|
|password|string|false|none|none|
|port|integer(int32)|false|none|none|
|rule|string|false|none|none|
|username|string|false|none|none|
|wsdl|string|false|none|none|

<h2 id="tocS_IPAlias">IPAlias</h2>
<!-- backwards compatibility -->
<a id="schemaipalias"></a>
<a id="schema_IPAlias"></a>
<a id="tocSipalias"></a>
<a id="tocsipalias"></a>

```json
{
  "IP": "string",
  "interface": "string",
  "mask": "string",
  "port": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IP|string|false|none|none|
|interface|string|false|none|none|
|mask|string|false|none|none|
|port|integer(int32)|false|none|none|

<h2 id="tocS_IPSource">IPSource</h2>
<!-- backwards compatibility -->
<a id="schemaipsource"></a>
<a id="schema_IPSource"></a>
<a id="tocSipsource"></a>
<a id="tocsipsource"></a>

```json
{
  "IP": "string",
  "port": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IP|string|false|none|none|
|port|integer(int32)|false|none|none|

<h2 id="tocS_SyslogMsg">SyslogMsg</h2>
<!-- backwards compatibility -->
<a id="schemasyslogmsg"></a>
<a id="schema_SyslogMsg"></a>
<a id="tocSsyslogmsg"></a>
<a id="tocssyslogmsg"></a>

```json
{
  "hostname": "string",
  "message": "string",
  "separator": "string",
  "sequence": "string",
  "timestamp": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|none|
|message|string|false|none|none|
|separator|string|false|none|none|
|sequence|string|false|none|none|
|timestamp|string|false|none|none|

<h2 id="tocS_TelnetUser">TelnetUser</h2>
<!-- backwards compatibility -->
<a id="schematelnetuser"></a>
<a id="schema_TelnetUser"></a>
<a id="tocStelnetuser"></a>
<a id="tocstelnetuser"></a>

```json
{
  "groups": [
    "string"
  ],
  "hasPassword": 0,
  "password": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[string]|false|none|none|
|hasPassword|integer(int32)|false|none|none|
|password|string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_TimerScript">TimerScript</h2>
<!-- backwards compatibility -->
<a id="schematimerscript"></a>
<a id="schema_TimerScript"></a>
<a id="tocStimerscript"></a>
<a id="tocstimerscript"></a>

```json
{
  "arg": "string",
  "interval": 0,
  "script": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arg|string|false|none|none|
|interval|integer(int32)|false|none|none|
|script|string|false|none|none|

<h2 id="tocS_TrapDest">TrapDest</h2>
<!-- backwards compatibility -->
<a id="schematrapdest"></a>
<a id="schema_TrapDest"></a>
<a id="tocStrapdest"></a>
<a id="tocstrapdest"></a>

```json
{
  "IP": "string",
  "port": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IP|string|false|none|none|
|port|integer(int32)|false|none|none|

<h2 id="tocS_Triplet">Triplet</h2>
<!-- backwards compatibility -->
<a id="schematriplet"></a>
<a id="schema_Triplet"></a>
<a id="tocStriplet"></a>
<a id="tocstriplet"></a>

```json
{
  "device": "string",
  "mib": "string",
  "scenario": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|string|false|none|none|
|mib|string|false|none|none|
|scenario|integer(int32)|false|none|none|
