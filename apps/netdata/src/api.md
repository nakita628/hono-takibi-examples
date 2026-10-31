<h1 id="netdata-api">Netdata API v1-rolling</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Real-time performance and health monitoring.

## API Versions

Netdata provides three API versions:
- **v1**: The original API, focused on single-node operations
- **v2**: Multi-node API with advanced grouping and aggregation capabilities
- **v3**: The latest API version that combines v1 and v2 endpoints and may include additional features

### v3 API Endpoints

The v3 API provides the current, actively maintained endpoints:
- `/api/v3/data` - Multi-dimensional data queries
- `/api/v3/weights` - Metric scoring/correlation
- `/api/v3/contexts` - Context metadata
- `/api/v3/nodes` - Node information
- `/api/v3/q` - Full-text search
- `/api/v3/alerts` - Alert information
- `/api/v3/alert_transitions` - Alert state transitions
- `/api/v3/alert_config` - Alert configuration
- `/api/v3/functions` - Available functions
- `/api/v3/function` - Execute functions
- `/api/v3/info` - Agent information
- `/api/v3/node_instances` - Node instance information
- `/api/v3/stream_path` - Streaming topology
- `/api/v3/versions` - Version information
- `/api/v3/badge.svg` - Dynamic badges
- `/api/v3/allmetrics` - Export metrics
- `/api/v3/context` - Single context info
- `/api/v3/variable` - Variable information
- `/api/v3/config` - Dynamic configuration
- `/api/v3/settings` - Agent settings
- `/api/v3/me` - Current user information
- `/api/v3/claim` - Agent claiming
- Additional management and streaming endpoints

**Note:** V1 and V2 APIs are deprecated and maintained for backwards compatibility only. New integrations should use V3 exclusively.

Base URLs:

* <a href="https://registry.my-netdata.io">https://registry.my-netdata.io</a>

* <a href="http://registry.my-netdata.io">http://registry.my-netdata.io</a>

* <a href="http://localhost:19999">http://localhost:19999</a>

Email: <a href="mailto:info@netdata.cloud">Netdata Agent API</a> 
Web: <a href="https://netdata.cloud">Netdata Agent API</a> 
License: <a href="https://github.com/netdata/netdata/blob/master/LICENSE">GPL v3+</a>

# Authentication

- HTTP Authentication, scheme: bearer Bearer token authentication for API access when bearer protection is enabled.

**How to obtain a token:**
1. Token must be obtained via `/api/v3/bearer_get_token` endpoint
2. This endpoint is ACLK-only (requires Netdata Cloud access)
3. Token includes role-based access control and expiration time

**How to use:**
```
Authorization: Bearer <token>
```

**When required:**
- When bearer protection is enabled on the agent (via `/api/v3/bearer_protection`)
- Applies to all APIs with `HTTP_ACCESS_ANONYMOUS_DATA` permission
- Applies independently of route ACL, including APIs with `HTTP_ACL_NOCHECK` when they require `HTTP_ACCESS_ANONYMOUS_DATA`
- APIs requiring `HTTP_ACCESS_NONE` do not acquire a generic bearer-token requirement
- Does not apply to ACLK-only APIs (use cloud authentication)

**Token expiration:**
- Tokens are time-limited and must be renewed periodically
- Expired tokens return HTTP 401 Unauthorized

- HTTP Authentication, scheme: bearer ACLK-only authentication - these APIs are ONLY accessible via Netdata Cloud (ACLK).

**Access Requirements:**
- User must be authenticated via Netdata Cloud (`SIGNED_ID`)
- User and agent must be in the same Netdata Cloud space (`SAME_SPACE`)
- Additional role-based permissions may apply per endpoint

**NOT accessible via:**
- Direct HTTP/HTTPS to agent (even with bearer token)
- Local dashboard
- External integrations

**Available only through:**
- Netdata Cloud web interface
- Netdata Cloud API (ACLK tunnel)

**Development mode:**
- Can be made available in dev mode with `ACL_DEV_OPEN_ACCESS` flag

* API Key (ipAcl)
    - Parameter Name: **X-Forwarded-For**, in: header. IP-based Access Control List restrictions (informational only).

**Configuration:**
APIs are subject to IP-based ACL restrictions configured in `netdata.conf`:

```conf
[web]
    allow connections from = *
    allow dashboard from = *
    allow badges from = *
    allow management from = localhost
```

**ACL Categories:**
- `allow dashboard from` - Controls access to metrics, alerts, nodes, functions, config APIs
- `allow badges from` - Controls access to badge generation APIs
- `allow management from` - Controls access to management APIs

**Default behavior:**
- Most APIs allow access from any IP by default
- Management APIs restrict to localhost by default
- Can be customized per deployment

**Note:** This is not a standard authentication mechanism but rather IP filtering.
`HTTP_ACL_NOCHECK` skips only the endpoint's route-table ACL comparison.
Direct HTTP still passes global connection allowlisting, listener/port ACLs, and coarse API admission.

<h1 id="netdata-api-nodes">nodes</h1>

Everything related to monitored nodes

## Nodes Info v2

<a id="opIdgetNodes2"></a>

> Code samples

```bash
curl http://localhost:19999/api/v2/nodes \
  -H 'Accept: application/json'
```

`GET /api/v2/nodes`

<aside class="warning">
This operation is deprecated
</aside>

Get a list of all nodes hosted by this Netdata Agent.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="nodes-info-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|scope_contexts|query|string(simple pattern)|false|A simple pattern limiting the contexts scope of the query. The scope controls both data and metadata response. The default contexts scope is all contexts for which this Agent has data for. Usually the contexts scope is used to slice data on the dashboard (e.g. each context based chart has its own contexts scope, limiting the chart to all the instances of the selected context). Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|contexts|query|string(simple pattern)|false|A simple pattern matching the contexts to be queried. This only controls the data response, not the metadata. Both positive and negative simple pattern expressions are supported.<br>|
|options|query|[string]|false|Options that affect the output of contexts metadata queries.<br>* `minify` - Remove unnecessary spaces and newlines from the output to reduce bandwidth.<br>* `debug` - Provide additional debugging information in the response.<br>* `config` - Include alert configuration information (used by /api/v2/alert_transitions).<br>* `instances` - Include alert/context instance information (used by /api/v2/alerts).<br>* `values` - Include latest metric values (used by /api/v2/alerts).<br>* `summary` - Include summary counters (used by /api/v2/alerts).<br>* `mcp` - Format output for Model Context Protocol (MCP) integration.<br>* `dimensions` - Include dimension information for each context.<br>* `labels` - Include label information for each context.<br>* `priorities` - Include priority information for each context.<br>* `titles` - Include title information for each context.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br><br>Note: Some options like `retention`, `liveness`, `family`, and `units` are automatically included by specific endpoints and cannot be controlled via this parameter.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|minify|
|options|debug|
|options|config|
|options|instances|
|options|values|
|options|summary|
|options|mcp|
|options|dimensions|
|options|labels|
|options|priorities|
|options|titles|
|options|rfc3339|

> Example responses

> 200 Response

```json
{
  "api": 0,
  "agents": [
    {
      "mg": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nd": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nm": "string",
      "ai": 0,
      "now": 0
    }
  ],
  "versions": {
    "nodes_hard_hash": 0,
    "contexts_hard_hash": 0,
    "contexts_soft_hash": 0,
    "alerts_hard_hash": 0,
    "alerts_soft_hash": 0
  },
  "nodes": [
    {
      "mg": "string",
      "nd": "string",
      "nm": "string",
      "ni": 0,
      "st": {
        "ai": 0,
        "code": 0,
        "msg": "string",
        "ms": 0
      },
      "version": "string",
      "hops": 0,
      "state": "reachable"
    }
  ]
}
```

<h3 id="nodes-info-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="nodes-info-v2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|[api](#schemaapi)|false|none|The version of the API used.|
|agents|[agents](#schemaagents)|false|none|An array of Agent definitions consulted to compose this response.<br>|
|versions|[versions](#schemaversions)|false|none|Hashes that allow the caller to detect important database changes of Netdata Agents.<br>|
|nodes|[[nodeFull](#schemanodefull)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Nodes Info v3

<a id="opIdgetNodes3"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/nodes \
  -H 'Accept: application/json'
```

`GET /api/v3/nodes`

Get a list of all nodes hosted by this Netdata Agent.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="nodes-info-v3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|scope_contexts|query|string(simple pattern)|false|A simple pattern limiting the contexts scope of the query. The scope controls both data and metadata response. The default contexts scope is all contexts for which this Agent has data for. Usually the contexts scope is used to slice data on the dashboard (e.g. each context based chart has its own contexts scope, limiting the chart to all the instances of the selected context). Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|contexts|query|string(simple pattern)|false|A simple pattern matching the contexts to be queried. This only controls the data response, not the metadata. Both positive and negative simple pattern expressions are supported.<br>|
|options|query|[string]|false|Options that affect the output of contexts metadata queries.<br>* `minify` - Remove unnecessary spaces and newlines from the output to reduce bandwidth.<br>* `debug` - Provide additional debugging information in the response.<br>* `config` - Include alert configuration information (used by /api/v2/alert_transitions).<br>* `instances` - Include alert/context instance information (used by /api/v2/alerts).<br>* `values` - Include latest metric values (used by /api/v2/alerts).<br>* `summary` - Include summary counters (used by /api/v2/alerts).<br>* `mcp` - Format output for Model Context Protocol (MCP) integration.<br>* `dimensions` - Include dimension information for each context.<br>* `labels` - Include label information for each context.<br>* `priorities` - Include priority information for each context.<br>* `titles` - Include title information for each context.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br><br>Note: Some options like `retention`, `liveness`, `family`, and `units` are automatically included by specific endpoints and cannot be controlled via this parameter.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|minify|
|options|debug|
|options|config|
|options|instances|
|options|values|
|options|summary|
|options|mcp|
|options|dimensions|
|options|labels|
|options|priorities|
|options|titles|
|options|rfc3339|

> Example responses

> 200 Response

```json
{
  "api": 0,
  "agents": [
    {
      "mg": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nd": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nm": "string",
      "ai": 0,
      "now": 0
    }
  ],
  "versions": {
    "nodes_hard_hash": 0,
    "contexts_hard_hash": 0,
    "contexts_soft_hash": 0,
    "alerts_hard_hash": 0,
    "alerts_soft_hash": 0
  },
  "nodes": [
    {
      "mg": "string",
      "nd": "string",
      "nm": "string",
      "ni": 0,
      "st": {
        "ai": 0,
        "code": 0,
        "msg": "string",
        "ms": 0
      },
      "version": "string",
      "hops": 0,
      "state": "reachable"
    }
  ]
}
```

<h3 id="nodes-info-v3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="nodes-info-v3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|[api](#schemaapi)|false|none|The version of the API used.|
|agents|[agents](#schemaagents)|false|none|An array of Agent definitions consulted to compose this response.<br>|
|versions|[versions](#schemaversions)|false|none|Hashes that allow the caller to detect important database changes of Netdata Agents.<br>|
|nodes|[[nodeFull](#schemanodefull)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Node Info v1

<a id="opIdgetNodeInfo1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/info \
  -H 'Accept: application/json'
```

`GET /api/v1/info`

<aside class="warning">
This operation is deprecated
</aside>

The info endpoint returns basic information about netdata. It provides:
* netdata version
* netdata unique id
* list of hosts mirrored (includes itself)
* Operating System, Virtualization, K8s nodes and Container technology information
* List of active collector plugins and modules
* Streaming information
* number of alarms in the host
  * number of alarms in normal state
  * number of alarms in warning state
  * number of alarms in critical state

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


> Example responses

> 200 Response

```json
{
  "version": "1.11.1_rolling",
  "uid": "24e9fe3c-f2ac-11e8-bafc-0242ac110002",
  "mirrored_hosts": [
    "host1.example.com",
    "host2.example.com"
  ],
  "mirrored_hosts_status": [
    {
      "guid": "245e4bff-3b34-47c1-a6e5-5c535a9abfb2",
      "reachable": true,
      "claim_id": "c3b2a66a-3052-498c-ac52-7fe9e8cccb0c"
    }
  ],
  "os_name": "Manjaro Linux",
  "os_id": "manjaro",
  "os_id_like": "arch",
  "os_version": "18.0.4",
  "os_version_id": "unknown",
  "os_detection": "Mixed",
  "kernel_name": "Linux",
  "kernel_version": "4.19.32-1-MANJARO",
  "is_k8s_node": false,
  "architecture": "x86_64",
  "virtualization": "kvm",
  "virt_detection": "systemd-detect-virt",
  "container": "docker",
  "container_detection": "dockerenv",
  "stream_compression": true,
  "labels": {
    "app": "netdata"
  },
  "collectors": [
    {
      "plugin": "python.d.plugin",
      "module": "dockerd"
    }
  ],
  "alarms": {
    "normal": 0,
    "warning": 0,
    "critical": 0
  }
}
```

<h3 id="node-info-v1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|netdata basic information.|[info](#schemainfo)|
|503|Service Unavailable|netdata daemon not ready (used for health checks).|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Retrieve detailed Netdata agent information across all nodes

<a id="opIdinfo_v3"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/info \
  -H 'Accept: application/json'
```

`GET /api/v3/info`

Returns comprehensive information about Netdata agents running across the monitored infrastructure. This endpoint provides detailed metadata about each agent including version information, capabilities, collection status, and system configuration.

**What is Netdata Agent Information?**
The `info` endpoint provides detailed metadata about the Netdata monitoring agent itself, including:
- Agent version and build information
- System capabilities and features enabled
- Collection status and health
- Host configuration and labels
- Database information (storage, retention)
- Plugin and collector status
- Operating system details
- Hardware information

**Difference from /api/v3/nodes:**
- **`/api/v3/nodes`:** Returns lightweight node list with basic identification
- **`/api/v3/info`:** Returns comprehensive agent details with full capabilities and configuration

**Multi-Node Support:**
When queried on a Netdata Parent, this endpoint can return information for:
- The parent agent itself
- All child agents (streaming to the parent)
- Filtered subsets using scope_nodes/nodes parameters

**Use Cases:**
- **Infrastructure Inventory:** Complete catalog of all Netdata installations
- **Version Audits:** Find agents that need updates
- **Capability Discovery:** What features are available on each node
- **Health Monitoring:** Verify agent collection status
- **Configuration Management:** Understand how agents are configured
- **Troubleshooting:** Diagnose agent-specific issues
- **License/Compliance:** Track Netdata deployments

**Information Categories:**

**1. Agent Identity:**
- Unique agent ID (machine_guid)
- Hostname
- Agent version and commit
- Build information

**2. System Information:**
- Operating system and kernel
- CPU architecture
- Virtualization platform
- Container runtime (if applicable)

**3. Database & Storage:**
- Database mode (dbengine, ram, alloc)
- Retention period
- Storage capacity
- Disk space usage

**4. Features & Capabilities:**
- ML/anomaly detection status
- ACLK (cloud connection) status
- Streaming capabilities
- Available collectors

**5. Collection Status:**
- Number of charts collecting
- Number of dimensions
- Collection frequency
- Last collection timestamp

**6. Host Labels:**
- Custom labels assigned to the host
- Automatic labels (OS, architecture, etc.)
- Cloud provider information (if detected)

**Performance Characteristics:**
- Fast query (primarily metadata lookups)
- No time-series data processing
- Results can be cached for reasonable duration
- Supports filtering by node patterns

**Example Usage:**
```
# Get info for all nodes
GET /api/v3/info

# Get info for specific nodes
GET /api/v3/info?nodes=web-server-01,db-server-01

# Get info for nodes matching pattern
GET /api/v3/info?scope_nodes=prod-*

# Include specific options
GET /api/v3/info?options=full
```

**Response Format:**
Returns JSON with agent information grouped by node, including complete details about each agent's capabilities, configuration, and current status.

**Security & Access Control:**
- **Route ACL:** `HTTP_ACL_NOCHECK` skips only this endpoint's route-table ACL comparison
- **Bearer Protection:** `HTTP_ACCESS_NONE` means the generic access gate does not require a bearer token
- **Connection/IP Admission:** Direct HTTP remains subject to `allow connections from`, listener/port ACLs, and coarse API admission
- **Callback:** No additional authorization check is applied after the route gates


<h3 id="retrieve-detailed-netdata-agent-information-across-all-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string|false|Filter to specific nodes using simple pattern matching.<br><br>**Pattern Syntax:**<br>- `*` matches any characters<br>- Space-separated list for multiple patterns<br>- `!` prefix to exclude<br>- Combine with: `web* !web-test*`<br><br>**Examples:**<br>- `scope_nodes=web*` - All web servers<br>- `scope_nodes=prod-*` - All production nodes<br>- `scope_nodes=* !test*` - All except test nodes<br><br>**Use Cases:**<br>- Focus on specific infrastructure tiers<br>- Exclude development/test environments<br>- Group by naming conventions<br><br>When not specified, returns info for all nodes.<br>|
|nodes|query|string|false|Filter to specific nodes by exact names.<br><br>Unlike `scope_nodes`, this requires exact node names (no patterns).<br><br>**Format:** Comma or pipe-separated list<br><br>**Examples:**<br>- `nodes=web-server-01` - Single node<br>- `nodes=web-server-01,db-server-01` - Multiple nodes<br>- `nodes=web-01\|web-02` - Pipe separator<br><br>**Best Practice:**<br>- Use `nodes` when you know exact names<br>- Use `scope_nodes` for pattern-based filtering<br><br>When not specified, returns info for all nodes matching scope_nodes.<br>|
|options|query|string|false|Control the level of detail and what information to include in the response.<br><br>**Available Options:**<br>- `full` or `all` - Include all available information<br>- `labels` - Include host labels<br>- `uuids` - Include UUIDs and identifiers<br>- `deleted` - Include information about deleted/offline nodes<br>- `hidden` - Include hidden agents<br><br>**Examples:**<br>- `options=full` - Complete information<br>- `options=labels,uuids` - Labels and identifiers<br>- `options=labels\|uuids` - Pipe separator also works<br><br>**Default Behavior:**<br>When not specified, returns standard information without deleted/hidden nodes and without excessive detail.<br><br>**Use Cases:**<br>- Inventory systems need `full` detail<br>- Label-based filtering needs `labels`<br>- Historical analysis may need `deleted`<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|timeout|query|integer(int64)|false|Maximum time in milliseconds to wait for the query to complete.<br><br>**Format:** Integer (milliseconds)<br><br>**Default:** Server default timeout<br><br>**Example:**<br>- `timeout=30000` - 30 second timeout<br><br>For agent info queries, timeouts are rarely needed as this is a fast metadata-only operation. However, on very large multi-node setups, you may want to limit query time.<br>|
|cardinality|query|integer|false|Limit the number of nodes returned.<br><br>**Format:** Integer (maximum nodes)<br><br>**Default:** No limit<br><br>**Example:**<br>- `cardinality=100` - Return at most 100 nodes<br><br>**Use Cases:**<br>- Prevent huge responses in very large infrastructures<br>- Get a sample of nodes for testing<br>- Dashboard widgets with limited display space<br><br>When exceeded, response indicates how many nodes were omitted.<br>|

> Example responses

> 200 Response

```json
{}
```

<h3 id="retrieve-detailed-netdata-agent-information-across-all-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Returns detailed Netdata agent information.<br><br>**Response Structure:**<br>The response is a JSON object containing comprehensive agent information grouped by node.<br><br>**Top-Level Structure:**<br>- `agents`: Array of agent information objects, one per node<br><br>**Per-Agent Information Includes:**<br><br>**1. Identity:**<br>- `machine_guid`: Unique agent identifier (UUID)<br>- `hostname`: Node hostname<br>- `agent_version`: Netdata version string<br>- `agent_commit`: Git commit hash of build<br><br>**2. System Information:**<br>- `os_name`: Operating system name<br>- `os_version`: OS version<br>- `kernel_name`: Kernel name<br>- `kernel_version`: Kernel version<br>- `architecture`: CPU architecture (x86_64, aarch64, etc.)<br>- `virtualization`: Virtualization platform (if any)<br>- `container`: Container runtime (Docker, LXC, etc.)<br>- `container_detection`: How container was detected<br><br>**3. Database & Storage:**<br>- `database_mode`: Storage mode (dbengine, ram, alloc, none)<br>- `database_retention`: Data retention period in seconds<br>- `database_size`: Current database size in bytes<br>- `page_cache_size`: Page cache size<br>- `metrics_stored`: Number of unique metrics<br><br>**4. Features & Capabilities:**<br>- `ml_enabled`: Machine learning / anomaly detection enabled<br>- `ml_models_running`: Number of ML models active<br>- `aclk_available`: Cloud connectivity available<br>- `aclk_status`: Cloud connection status<br>- `stream_compression`: Streaming compression supported<br>- `web_enabled`: Web server enabled<br><br>**5. Collection Status:**<br>- `charts_count`: Number of charts being collected<br>- `dimensions_count`: Number of dimensions (time-series)<br>- `collectors_count`: Number of active collectors<br>- `update_every`: Collection frequency in seconds<br>- `history`: Retention in seconds<br>- `memory_mode`: Memory storage mode<br><br>**6. Host Labels:**<br>- `host_labels`: Object containing all host labels<br>  - Includes automatic labels (_os_name, _architecture, etc.)<br>  - Includes custom labels assigned by user<br>  - May include cloud provider labels<br><br>**7. Timestamps:**<br>- `first_time_t`: Timestamp of oldest data point<br>- `last_time_t`: Timestamp of newest data point<br>- `now`: Current server time<br><br>**8. Streaming Information (if applicable):**<br>- `stream_status`: Streaming status (parent/child)<br>- `stream_parents`: Parent nodes (if child)<br>- `stream_children`: Child nodes (if parent)<br><br>**Example Response Structure:**<br>```json<br>{<br>  "agents": [<br>    {<br>      "machine_guid": "550e8400-e29b-41d4-a716-446655440000",<br>      "hostname": "web-server-01",<br>      "agent_version": "v1.40.0",<br>      "os_name": "ubuntu",<br>      "os_version": "22.04",<br>      "kernel_version": "5.15.0",<br>      "architecture": "x86_64",<br>      "database_mode": "dbengine",<br>      "database_retention": 86400,<br>      "ml_enabled": true,<br>      "charts_count": 425,<br>      "dimensions_count": 2850,<br>      "update_every": 1,<br>      "host_labels": {<br>        "_os_name": "ubuntu",<br>        "_architecture": "x86_64",<br>        "environment": "production",<br>        "tier": "web"<br>      }<br>    }<br>  ]<br>}<br>```<br><br>**Response Characteristics:**<br>- Content-Type: application/json<br>- Can be cached (agent info changes infrequently)<br>- Complete metadata without time-series data<br>- Lightweight and fast to generate<br><br>**Filtering:**<br>Response respects scope_nodes/nodes filters and cardinality limits.<br>|Inline|
|400|Bad Request|Bad request. Common causes:<br>- Invalid parameter values<br>- Malformed filter patterns<br>|None|
|500|Internal Server Error|Internal server error during info retrieval.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve chart instances organized by node across the infrastructure

<a id="opIdnode_instances_v3"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/node_instances \
  -H 'Accept: application/json'
```

`GET /api/v3/node_instances`

Returns information about all chart instances grouped by node. This endpoint provides a comprehensive view of what metrics are being collected on each node, organized by chart instances.

**What are Node Instances?**
Node instances represent the specific chart instances (individual monitoring targets) on each node:
- Each node may have multiple instances of the same chart type
- Examples: Multiple disks (sda, sdb, sdc), multiple network interfaces (eth0, eth1)
- Instances represent the specific entities being monitored

**Example:**
For disk monitoring:
- Node: `web-server-01`
  - Instances: `disk.sda`, `disk.sdb`, `disk.nvme0n1`
- Node: `db-server-01`
  - Instances: `disk.sda`, `disk.sdb`

**Difference from Other Endpoints:**
- **`/api/v3/nodes`:** Returns lightweight node list
- **`/api/v3/info`:** Returns detailed agent information
- **`/api/v3/node_instances`:** Returns what chart instances each node has (what's being monitored)
- **`/api/v3/contexts`:** Returns contexts aggregated across all nodes

**Use Cases:**
- **Infrastructure Discovery:** What devices/services are monitored on each node
- **Capacity Planning:** Understand monitoring coverage per node
- **Configuration Verification:** Verify expected charts are collecting
- **Collector Status:** See which collectors are active per node
- **Instance Inventory:** Complete catalog of monitored entities
- **Troubleshooting:** Find which nodes monitor specific instances

**Response Organization:**
Results are organized hierarchically:
1. **By Node:** Top-level grouping by node hostname
2. **By Context:** Charts grouped by their context (e.g., disk.space)
3. **By Instance:** Individual chart instances within each context

**Performance Characteristics:**
- Medium query cost (metadata aggregation across nodes)
- Response size grows with number of nodes and instances
- Can be filtered to reduce response size
- Results can be cached (instances change infrequently)

**Example Query Patterns:**
```
# Get all instances across all nodes
GET /api/v3/node_instances

# Get instances for specific nodes
GET /api/v3/node_instances?nodes=web-server-01,db-server-01

# Get instances for nodes matching pattern
GET /api/v3/node_instances?scope_nodes=prod-*

# Limit response size
GET /api/v3/node_instances?cardinality=100
```

**Response Includes:**
- Node identification (hostname, machine_guid)
- Agent information (version, capabilities)
- All chart instances organized by context
- Instance-specific metadata (labels, units, dimensions)
- Instance collection status

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="retrieve-chart-instances-organized-by-node-across-the-infrastructure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string|false|Filter to specific nodes using pattern matching.<br><br>**Pattern Syntax:**<br>- `*` matches any characters<br>- Space-separated for multiple patterns<br>- `!` prefix excludes<br>- Example: `prod-* !prod-test*`<br><br>**Examples:**<br>- `scope_nodes=web*` - All web servers<br>- `scope_nodes=db-* cache-*` - Database and cache nodes<br>- `scope_nodes=* !test*` - All except test nodes<br><br>When not specified, returns instances from all nodes.<br>|
|nodes|query|string|false|Filter to specific nodes by exact names.<br><br>**Format:** Comma or pipe-separated exact names<br><br>**Examples:**<br>- `nodes=web-server-01` - Single node<br>- `nodes=web-01,db-01` - Multiple nodes<br><br>**Best Practice:** Use `nodes` for exact names, `scope_nodes` for patterns.<br><br>When not specified, returns instances from all nodes.<br>|
|options|query|string|false|Control response detail level and included information.<br><br>**Available Options:**<br>- `full` or `all` - Complete instance information<br>- `labels` - Include instance labels<br>- `uuids` - Include UUIDs and identifiers<br>- `deleted` - Include deleted/offline instances<br>- `hidden` - Include hidden instances<br>- `instances` or `charts` - Include chart instances (default)<br>- `metrics` or `dimensions` - Include dimension details<br><br>**Examples:**<br>- `options=full` - All information<br>- `options=labels,dimensions` - Labels and dimension details<br>- `options=labels\|uuids` - Pipe separator<br><br>**Default:** Returns basic instance information without excessive detail.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|timeout|query|integer(int64)|false|Maximum time in milliseconds to wait for query completion.<br><br>**Format:** Integer (milliseconds)<br><br>**Default:** Server default timeout<br><br>**Example:** `timeout=30000` (30 seconds)<br><br>For large multi-node infrastructures, you may need to increase timeout to allow complete instance enumeration.<br>|
|cardinality|query|integer|false|Limit the number of instances returned per node.<br><br>**Format:** Integer (max instances per node)<br><br>**Default:** No limit<br><br>**Example:** `cardinality=500` - At most 500 instances per node<br><br>**Use Cases:**<br>- Prevent huge responses from nodes with many instances<br>- Sample instances for testing<br>- Dashboard widgets with limited space<br><br>When exceeded, response indicates how many instances were omitted per node.<br>|

> Example responses

> 200 Response

```json
{}
```

<h3 id="retrieve-chart-instances-organized-by-node-across-the-infrastructure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Returns chart instances organized by node.<br><br>**Response Structure:**<br>```json<br>{<br>  "nodes": [<br>    {<br>      "machine_guid": "uuid",<br>      "hostname": "web-server-01",<br>      "agent_version": "v1.40.0",<br>      "contexts": [<br>        {<br>          "context": "disk.space",<br>          "instances": [<br>            {<br>              "id": "disk.sda",<br>              "name": "disk sda",<br>              "family": "sda",<br>              "labels": {...},<br>              "dimensions": [...],<br>              "status": "active"<br>            },<br>            {<br>              "id": "disk.sdb",<br>              "name": "disk sdb",<br>              "family": "sdb",<br>              "labels": {...},<br>              "dimensions": [...],<br>              "status": "active"<br>            }<br>          ]<br>        },<br>        {<br>          "context": "net.net",<br>          "instances": [<br>            {<br>              "id": "net.eth0",<br>              "name": "eth0",<br>              "family": "eth0",<br>              "labels": {...},<br>              "dimensions": [...],<br>              "status": "active"<br>            }<br>          ]<br>        }<br>      ]<br>    }<br>  ]<br>}<br>```<br><br>**Response Fields:**<br><br>**Node Level:**<br>- `machine_guid`: Unique node identifier<br>- `hostname`: Node hostname<br>- `agent_version`: Netdata version on this node<br>- `contexts`: Array of contexts with their instances<br><br>**Context Level:**<br>- `context`: Context name (e.g., "disk.space", "system.cpu")<br>- `instances`: Array of chart instances for this context<br><br>**Instance Level:**<br>- `id`: Chart instance ID (e.g., "disk.sda")<br>- `name`: Human-readable instance name<br>- `family`: Chart family/grouping<br>- `labels`: Instance-specific labels<br>- `dimensions`: Array of dimensions (metrics) collected<br>- `status`: Collection status (active, stale, offline)<br>- `units`: Unit of measurement<br>- `chart_type`: Chart visualization type<br>- `priority`: Display priority<br><br>**Dimension Information (when options=dimensions):**<br>- `id`: Dimension identifier<br>- `name`: Dimension display name<br>- `algorithm`: Aggregation algorithm<br>- `multiplier`, `divisor`: Value transformation<br><br>**Label Information (when options=labels):**<br>- Instance labels provide additional metadata<br>- Examples: disk_type=ssd, interface_speed=1000, mount_point=/<br><br>**Response Characteristics:**<br>- Content-Type: application/json<br>- Cacheable (instances change infrequently)<br>- Size grows with number of nodes and instances<br>- Organized hierarchically for easy navigation<br><br>**Filtering:**<br>Response respects scope_nodes/nodes filters and cardinality limits.<br>|Inline|
|400|Bad Request|Bad request. Common causes:<br>- Invalid parameter values<br>- Malformed filter patterns<br>|None|
|500|Internal Server Error|Internal server error during instance enumeration.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Retrieve streaming topology path for nodes

<a id="opIdstream_path"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/stream_path \
  -H 'Accept: application/json'
```

`GET /api/v3/stream_path`

**V3 SPECIFIC ENDPOINT**

Returns the streaming path and topology showing how nodes are connected in the Netdata infrastructure.
This endpoint reveals the parent-child relationships between nodes, showing which nodes stream data
to which parents, creating a hierarchical view of the monitoring infrastructure.

**Streaming Topology:**
- **Parent nodes**: Nodes that receive streaming data from child nodes
- **Child nodes**: Nodes that send their metrics to parent nodes for centralization
- **Streaming path**: The complete chain from child → parent → grandparent (if any)

**Use Cases:**
- Understand infrastructure hierarchy and data flow
- Identify parent nodes that aggregate data from multiple children
- Debug streaming connectivity issues
- Plan infrastructure changes and reorganization
- Visualize the complete monitoring topology

**Common Usage Patterns:**

1. **Get complete streaming topology:**
   ```
   /api/v3/stream_path
   ```

2. **Filter by specific nodes:**
   ```
   /api/v3/stream_path?nodes=child-node-1|child-node-2
   ```

3. **Scope to nodes matching pattern:**
   ```
   /api/v3/stream_path?scope_nodes=prod-*
   ```

**Response Structure:**
The response includes nodes organized by their streaming relationships, showing:
- Node hostnames and machine GUIDs
- Parent-child relationships
- Streaming connection status (live/stale/offline)
- Complete path from each child to root parent

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="retrieve-streaming-topology-path-for-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string|false|Simple pattern to match node hostnames for scope filtering. Uses Netdata's simple pattern<br>matching (not regex). Matched nodes define the scope for topology analysis.<br><br>**Pattern Syntax:**<br>- `*` matches any number of characters<br>- Use `\|` to separate multiple patterns (OR logic)<br>- Matches are case-insensitive<br>- No regex support - only simple wildcards<br><br>**Examples:**<br>- `prod-*` - All production nodes<br>- `*-web-*` - All web server nodes<br>- `db-*\|cache-*` - All database or cache nodes<br>- `*` - All nodes (default)<br>|
|nodes|query|string|false|Simple pattern to filter which nodes to include in the streaming path response.<br>After scope is determined, this filters the results. Uses the same pattern syntax as scope_nodes.<br><br>**Difference from scope_nodes:**<br>- `scope_nodes` defines what nodes to analyze for relationships<br>- `nodes` filters which nodes to include in the output<br><br>**Examples:**<br>- `web-*` - Only show web server nodes in output<br>- `parent-*` - Only show parent nodes<br>- Specific hostnames: `node1\|node2\|node3`<br>|
|options|query|string|false|Comma-separated list of options to control response content and format.<br><br>**Available Options:**<br>- `minify` - Minimize JSON output (no pretty-printing)<br>- `debug` - Include debug information about streaming connections<br>- `raw` - Include raw streaming metadata<br><br>**Examples:**<br>- `minify` - Compact JSON response<br>- `debug,raw` - Debug mode with raw metadata<br>|
|timeout|query|integer|false|Maximum time in seconds to wait for the query to complete before timing out.<br><br>**Guidelines:**<br>- Recommended: 30-60 seconds for most queries<br>- Large infrastructures may need longer timeouts<br>- Queries timeout if streaming metadata collection takes too long<br>|
|cardinality|query|integer|false|Maximum number of nodes to include in the response to prevent overwhelming large responses.<br>When this limit is exceeded, the response will indicate how many nodes were omitted.<br><br>**Purpose:**<br>- Prevent memory exhaustion from very large infrastructures<br>- Control response size for performance<br>- Useful when exploring large node hierarchies incrementally<br><br>**Recommendations:**<br>- Small infrastructures (< 50 nodes): Use default or increase<br>- Medium infrastructures (50-500 nodes): 200-500<br>- Large infrastructures (> 500 nodes): Use filtering or increase limit carefully<br>|

> Example responses

> 200 Response

```json
{
  "nodes": [
    {
      "hostname": "string",
      "machine_guid": "string",
      "parent": "string",
      "parent_guid": "string",
      "streaming_status": "live",
      "path": [
        "string"
      ]
    }
  ],
  "omitted": 0
}
```

<h3 id="retrieve-streaming-topology-path-for-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved streaming topology path information.<br><br>Returns nodes with their streaming relationships, showing parent-child hierarchy,<br>connection status, and complete paths from children to root parents.<br>|Inline|
|400|Bad Request|Invalid parameters provided (e.g., invalid pattern syntax).|None|
|500|Internal Server Error|Internal server error during streaming topology retrieval.|None|
|504|Gateway Timeout|Query timeout - streaming topology collection took too long.|None|

<h3 id="retrieve-streaming-topology-path-for-nodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodes|[object]|false|none|Array of nodes with streaming path information|
|» hostname|string|false|none|Node hostname|
|» machine_guid|string|false|none|Unique node identifier|
|» parent|string|false|none|Hostname of parent node (if any)|
|» parent_guid|string|false|none|Machine GUID of parent node|
|» streaming_status|string|false|none|Current streaming connection status|
|» path|[string]|false|none|Complete path from this node to root parent|
|omitted|integer|false|none|Number of nodes omitted due to cardinality limit|

#### Enumerated Values

|Property|Value|
|---|---|
|» streaming_status|live|
|» streaming_status|stale|
|» streaming_status|offline|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## OBSOLETE: Get node instances hierarchy (use /api/v3/node_instances instead)

<a id="opIdnodeInstances2"></a>

> Code samples

```bash
curl http://localhost:19999/api/v2/node_instances
```

`GET /api/v2/node_instances`

<aside class="warning">
This operation is deprecated
</aside>

**⚠️ OBSOLETE API - Will be removed in future versions**

This endpoint is deprecated. Use `/api/v3/node_instances` instead, which provides the same functionality.

**Migration:** Replace `/api/v2/node_instances` with `/api/v3/node_instances` in all API calls.

Returns hierarchical organization of chart instances across nodes, showing relationships between
parent and child agents and their monitored components.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="obsolete-get-node-instances-hierarchy-use-apiv3nodeinstances-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|timeout|query|number(integer)|false|Specify a timeout value in milliseconds after which the Agent will abort the query and return a 503 error. A value of 0 indicates no timeout.<br>|
|cardinality_limit|query|integer(int64)|false|Limits the number of unique items returned, to prevent excessive memory usage and response sizes when a request matches a large number of items. For data queries, the query engine keeps the top contributing dimensions and folds the rest into one `remaining` aggregate dimension, so the total number of returned dimensions equals this limit; the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) stays complete unless the `cardinality-limit-all` option is also given. Other endpoints (alerts, contexts) apply this limit to their own result items. Weights endpoints define separate result-limit semantics.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|

<h3 id="obsolete-get-node-instances-hierarchy-use-apiv3nodeinstances-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Node instances successfully retrieved|None|
|400|Bad Request|Invalid parameters|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

<h1 id="netdata-api-charts">charts</h1>

Everything related to chart instances - DO NOT USE IN NEW CODE - use contexts instead

## List all charts v1 - EOL

<a id="opIdgetNodeCharts1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/charts \
  -H 'Accept: application/json'
```

`GET /api/v1/charts`

<aside class="warning">
This operation is deprecated
</aside>

The charts endpoint returns a summary about all charts stored in the netdata server.
**Security & Access Control:** - 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply - **Default Access:** Public (no authentication required) - **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token - **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf - **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools

> Example responses

> 200 Response

```json
{
  "hostname": "string",
  "version": "string",
  "release_channel": "nightly",
  "timezone": "string",
  "os": "macos",
  "history": 0,
  "memory_mode": "string",
  "update_every": 0,
  "charts": {
    "property1": {
      "id": "string",
      "name": "string",
      "type": "string",
      "family": "string",
      "title": "string",
      "priority": 0,
      "enabled": true,
      "units": "string",
      "data_url": "string",
      "chart_type": "line",
      "duration": 0,
      "first_entry": 0,
      "last_entry": 0,
      "update_every": 0,
      "dimensions": {
        "property1": {
          "name": "string"
        },
        "property2": {
          "name": "string"
        }
      },
      "chart_variables": {
        "property1": {
          "varname1": 0,
          "varname2": 0
        },
        "property2": {
          "varname1": 0,
          "varname2": 0
        }
      },
      "green": 0,
      "red": 0
    },
    "property2": {
      "id": "string",
      "name": "string",
      "type": "string",
      "family": "string",
      "title": "string",
      "priority": 0,
      "enabled": true,
      "units": "string",
      "data_url": "string",
      "chart_type": "line",
      "duration": 0,
      "first_entry": 0,
      "last_entry": 0,
      "update_every": 0,
      "dimensions": {
        "property1": {
          "name": "string"
        },
        "property2": {
          "name": "string"
        }
      },
      "chart_variables": {
        "property1": {
          "varname1": 0,
          "varname2": 0
        },
        "property2": {
          "varname1": 0,
          "varname2": 0
        }
      },
      "green": 0,
      "red": 0
    }
  },
  "charts_count": 0,
  "dimensions_count": 0,
  "alarms_count": 0,
  "rrd_memory_bytes": 0
}
```

<h3 id="list-all-charts-v1---eol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of charts.|[chart_summary](#schemachart_summary)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Get one chart v1 - EOL

<a id="opIdgetNodeChart1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/chart \
  -H 'Accept: application/json'
```

`GET /api/v1/chart`

<aside class="warning">
This operation is deprecated
</aside>

The chart endpoint returns detailed information about a chart.
**Security & Access Control:** - 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply - **Default Access:** Public (no authentication required) - **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token - **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf - **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools

<h3 id="get-one-chart-v1---eol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chart|query|string(as returned by `/api/v1/charts`)|false|The id of the chart as returned by the `/api/v1/charts` call.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "type": "string",
  "family": "string",
  "title": "string",
  "priority": 0,
  "enabled": true,
  "units": "string",
  "data_url": "string",
  "chart_type": "line",
  "duration": 0,
  "first_entry": 0,
  "last_entry": 0,
  "update_every": 0,
  "dimensions": {
    "property1": {
      "name": "string"
    },
    "property2": {
      "name": "string"
    }
  },
  "chart_variables": {
    "property1": {
      "varname1": 0,
      "varname2": 0
    },
    "property2": {
      "varname1": 0,
      "varname2": 0
    }
  },
  "green": 0,
  "red": 0
}
```

<h3 id="get-one-chart-v1---eol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A javascript object with detailed information about the chart.|[chart](#schemachart)|
|400|Bad Request|No chart id was supplied in the request.|None|
|404|Not Found|No chart with the given id is found.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

<h1 id="netdata-api-contexts">contexts</h1>

Everything related contexts - in new code, use this instead of charts

## Contexts Info v2

<a id="opIdgetContexts2"></a>

> Code samples

```bash
curl http://localhost:19999/api/v2/contexts \
  -H 'Accept: application/json'
```

`GET /api/v2/contexts`

<aside class="warning">
This operation is deprecated
</aside>

Get a list of all contexts, across all nodes, hosted by this Netdata Agent.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="contexts-info-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|scope_contexts|query|string(simple pattern)|false|A simple pattern limiting the contexts scope of the query. The scope controls both data and metadata response. The default contexts scope is all contexts for which this Agent has data for. Usually the contexts scope is used to slice data on the dashboard (e.g. each context based chart has its own contexts scope, limiting the chart to all the instances of the selected context). Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|contexts|query|string(simple pattern)|false|A simple pattern matching the contexts to be queried. This only controls the data response, not the metadata. Both positive and negative simple pattern expressions are supported.<br>|
|options|query|[string]|false|Options that affect the output of contexts metadata queries.<br>* `minify` - Remove unnecessary spaces and newlines from the output to reduce bandwidth.<br>* `debug` - Provide additional debugging information in the response.<br>* `config` - Include alert configuration information (used by /api/v2/alert_transitions).<br>* `instances` - Include alert/context instance information (used by /api/v2/alerts).<br>* `values` - Include latest metric values (used by /api/v2/alerts).<br>* `summary` - Include summary counters (used by /api/v2/alerts).<br>* `mcp` - Format output for Model Context Protocol (MCP) integration.<br>* `dimensions` - Include dimension information for each context.<br>* `labels` - Include label information for each context.<br>* `priorities` - Include priority information for each context.<br>* `titles` - Include title information for each context.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br><br>Note: Some options like `retention`, `liveness`, `family`, and `units` are automatically included by specific endpoints and cannot be controlled via this parameter.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|minify|
|options|debug|
|options|config|
|options|instances|
|options|values|
|options|summary|
|options|mcp|
|options|dimensions|
|options|labels|
|options|priorities|
|options|titles|
|options|rfc3339|

> Example responses

> 200 Response

```json
{
  "api": 0,
  "agents": [
    {
      "mg": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nd": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nm": "string",
      "ai": 0,
      "now": 0
    }
  ],
  "versions": {
    "nodes_hard_hash": 0,
    "contexts_hard_hash": 0,
    "contexts_soft_hash": 0,
    "alerts_hard_hash": 0,
    "alerts_soft_hash": 0
  },
  "contexts": {
    "property1": {
      "family": "string",
      "priority": 0,
      "first_entry": 0,
      "last_entry": 0,
      "live": true
    },
    "property2": {
      "family": "string",
      "priority": 0,
      "first_entry": 0,
      "last_entry": 0,
      "live": true
    }
  }
}
```

<h3 id="contexts-info-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[contexts2](#schemacontexts2)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Contexts Info v3

<a id="opIdgetContexts3"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/contexts \
  -H 'Accept: application/json'
```

`GET /api/v3/contexts`

Get a list of all contexts, across all nodes, hosted by this Netdata Agent.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="contexts-info-v3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|scope_contexts|query|string(simple pattern)|false|A simple pattern limiting the contexts scope of the query. The scope controls both data and metadata response. The default contexts scope is all contexts for which this Agent has data for. Usually the contexts scope is used to slice data on the dashboard (e.g. each context based chart has its own contexts scope, limiting the chart to all the instances of the selected context). Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|contexts|query|string(simple pattern)|false|A simple pattern matching the contexts to be queried. This only controls the data response, not the metadata. Both positive and negative simple pattern expressions are supported.<br>|
|options|query|[string]|false|Options that affect the output of contexts metadata queries.<br>* `minify` - Remove unnecessary spaces and newlines from the output to reduce bandwidth.<br>* `debug` - Provide additional debugging information in the response.<br>* `config` - Include alert configuration information (used by /api/v2/alert_transitions).<br>* `instances` - Include alert/context instance information (used by /api/v2/alerts).<br>* `values` - Include latest metric values (used by /api/v2/alerts).<br>* `summary` - Include summary counters (used by /api/v2/alerts).<br>* `mcp` - Format output for Model Context Protocol (MCP) integration.<br>* `dimensions` - Include dimension information for each context.<br>* `labels` - Include label information for each context.<br>* `priorities` - Include priority information for each context.<br>* `titles` - Include title information for each context.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br><br>Note: Some options like `retention`, `liveness`, `family`, and `units` are automatically included by specific endpoints and cannot be controlled via this parameter.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|minify|
|options|debug|
|options|config|
|options|instances|
|options|values|
|options|summary|
|options|mcp|
|options|dimensions|
|options|labels|
|options|priorities|
|options|titles|
|options|rfc3339|

> Example responses

> 200 Response

```json
{
  "api": 0,
  "agents": [
    {
      "mg": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nd": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nm": "string",
      "ai": 0,
      "now": 0
    }
  ],
  "versions": {
    "nodes_hard_hash": 0,
    "contexts_hard_hash": 0,
    "contexts_soft_hash": 0,
    "alerts_hard_hash": 0,
    "alerts_soft_hash": 0
  },
  "contexts": {
    "property1": {
      "family": "string",
      "priority": 0,
      "first_entry": 0,
      "last_entry": 0,
      "live": true
    },
    "property2": {
      "family": "string",
      "priority": 0,
      "first_entry": 0,
      "last_entry": 0,
      "live": true
    }
  }
}
```

<h3 id="contexts-info-v3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[contexts2](#schemacontexts2)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Full Text Search v2

<a id="opIdq2"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v2/q?q=string' \
  -H 'Accept: application/json'
```

`GET /api/v2/q`

<aside class="warning">
This operation is deprecated
</aside>

Get a list of contexts, across all nodes, hosted by this Netdata Agent, matching a string expression

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="full-text-search-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string(simple pattern)|true|The strings to search for, formatted as a simple pattern|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|scope_contexts|query|string(simple pattern)|false|A simple pattern limiting the contexts scope of the query. The scope controls both data and metadata response. The default contexts scope is all contexts for which this Agent has data for. Usually the contexts scope is used to slice data on the dashboard (e.g. each context based chart has its own contexts scope, limiting the chart to all the instances of the selected context). Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|contexts|query|string(simple pattern)|false|A simple pattern matching the contexts to be queried. This only controls the data response, not the metadata. Both positive and negative simple pattern expressions are supported.<br>|
|options|query|[string]|false|Options that affect the output of contexts metadata queries.<br>* `minify` - Remove unnecessary spaces and newlines from the output to reduce bandwidth.<br>* `debug` - Provide additional debugging information in the response.<br>* `config` - Include alert configuration information (used by /api/v2/alert_transitions).<br>* `instances` - Include alert/context instance information (used by /api/v2/alerts).<br>* `values` - Include latest metric values (used by /api/v2/alerts).<br>* `summary` - Include summary counters (used by /api/v2/alerts).<br>* `mcp` - Format output for Model Context Protocol (MCP) integration.<br>* `dimensions` - Include dimension information for each context.<br>* `labels` - Include label information for each context.<br>* `priorities` - Include priority information for each context.<br>* `titles` - Include title information for each context.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br><br>Note: Some options like `retention`, `liveness`, `family`, and `units` are automatically included by specific endpoints and cannot be controlled via this parameter.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|minify|
|options|debug|
|options|config|
|options|instances|
|options|values|
|options|summary|
|options|mcp|
|options|dimensions|
|options|labels|
|options|priorities|
|options|titles|
|options|rfc3339|

> Example responses

> 200 Response

```json
{
  "api": 0,
  "agents": [
    {
      "mg": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nd": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nm": "string",
      "ai": 0,
      "now": 0
    }
  ],
  "versions": {
    "nodes_hard_hash": 0,
    "contexts_hard_hash": 0,
    "contexts_soft_hash": 0,
    "alerts_hard_hash": 0,
    "alerts_soft_hash": 0
  },
  "contexts": {
    "property1": {
      "family": "string",
      "priority": 0,
      "first_entry": 0,
      "last_entry": 0,
      "live": true
    },
    "property2": {
      "family": "string",
      "priority": 0,
      "first_entry": 0,
      "last_entry": 0,
      "live": true
    }
  }
}
```

<h3 id="full-text-search-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[contexts2](#schemacontexts2)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Full Text Search v3

<a id="opIdq3"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v3/q?q=string' \
  -H 'Accept: application/json'
```

`GET /api/v3/q`

Get a list of contexts, across all nodes, hosted by this Netdata Agent, matching a string expression.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="full-text-search-v3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string(simple pattern)|true|The strings to search for, formatted as a simple pattern|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|scope_contexts|query|string(simple pattern)|false|A simple pattern limiting the contexts scope of the query. The scope controls both data and metadata response. The default contexts scope is all contexts for which this Agent has data for. Usually the contexts scope is used to slice data on the dashboard (e.g. each context based chart has its own contexts scope, limiting the chart to all the instances of the selected context). Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|contexts|query|string(simple pattern)|false|A simple pattern matching the contexts to be queried. This only controls the data response, not the metadata. Both positive and negative simple pattern expressions are supported.<br>|
|options|query|[string]|false|Options that affect the output of contexts metadata queries.<br>* `minify` - Remove unnecessary spaces and newlines from the output to reduce bandwidth.<br>* `debug` - Provide additional debugging information in the response.<br>* `config` - Include alert configuration information (used by /api/v2/alert_transitions).<br>* `instances` - Include alert/context instance information (used by /api/v2/alerts).<br>* `values` - Include latest metric values (used by /api/v2/alerts).<br>* `summary` - Include summary counters (used by /api/v2/alerts).<br>* `mcp` - Format output for Model Context Protocol (MCP) integration.<br>* `dimensions` - Include dimension information for each context.<br>* `labels` - Include label information for each context.<br>* `priorities` - Include priority information for each context.<br>* `titles` - Include title information for each context.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br><br>Note: Some options like `retention`, `liveness`, `family`, and `units` are automatically included by specific endpoints and cannot be controlled via this parameter.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|minify|
|options|debug|
|options|config|
|options|instances|
|options|values|
|options|summary|
|options|mcp|
|options|dimensions|
|options|labels|
|options|priorities|
|options|titles|
|options|rfc3339|

> Example responses

> 200 Response

```json
{
  "api": 0,
  "agents": [
    {
      "mg": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nd": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nm": "string",
      "ai": 0,
      "now": 0
    }
  ],
  "versions": {
    "nodes_hard_hash": 0,
    "contexts_hard_hash": 0,
    "contexts_soft_hash": 0,
    "alerts_hard_hash": 0,
    "alerts_soft_hash": 0
  },
  "contexts": {
    "property1": {
      "family": "string",
      "priority": 0,
      "first_entry": 0,
      "last_entry": 0,
      "live": true
    },
    "property2": {
      "family": "string",
      "priority": 0,
      "first_entry": 0,
      "last_entry": 0,
      "live": true
    }
  }
}
```

<h3 id="full-text-search-v3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[contexts2](#schemacontexts2)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Get a list of all node contexts available v1

<a id="opIdgetNodeContexts1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/contexts \
  -H 'Accept: application/json'
```

`GET /api/v1/contexts`

<aside class="warning">
This operation is deprecated
</aside>

The contexts endpoint returns a summary about all contexts stored in the netdata server.
**Security & Access Control:** - 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply - **Default Access:** Public (no authentication required) - **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token - **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf - **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools

<h3 id="get-a-list-of-all-node-contexts-available-v1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dimensions|query|string|false|a simple pattern matching dimensions (use comma or pipe as separator)|
|chart_label_key|query|string(key1,key2,key3)|false|Specify the chart label keys that need to match for context queries as comma separated values. At least one matching key is needed to match the corresponding chart.<br>|
|chart_labels_filter|query|string(key1:value1,key2:value2,key3:value3)|false|Specify the chart label keys and values to match for context queries. All keys/values need to match for the chart to be included in the query. The labels are specified as key1:value1,key2:value2<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `full` or `all` - Include all available information.<br>* `charts` - Include chart information.<br>* `dimensions` - Include dimension information.<br>* `labels` - Include label information.<br>* `uuids` - Include UUIDs in the response.<br>* `queue` - Include queue information.<br>* `flags` - Include internal flags.<br>* `deleted` - Include deleted items.<br>* `deepscan` - Perform a deep scan for contexts.<br>* `rfc3339` - Return timestamps in RFC3339 format instead of Unix timestamps.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|full|
|options|all|
|options|charts|
|options|dimensions|
|options|labels|
|options|uuids|
|options|queue|
|options|flags|
|options|deleted|
|options|deepscan|
|options|rfc3339|

> Example responses

> 200 Response

```json
{
  "hostname": "string",
  "machine_guid": "string",
  "node_id": "nightly",
  "claim_id": "string",
  "host_labels": {},
  "context": {
    "property1": {
      "version": "string",
      "hub_version": "string",
      "family": "string",
      "title": "string",
      "priority": 0,
      "units": "string",
      "chart_type": "line",
      "first_time_t": 0,
      "last_time_t": 0,
      "charts": {}
    },
    "property2": {
      "version": "string",
      "hub_version": "string",
      "family": "string",
      "title": "string",
      "priority": 0,
      "units": "string",
      "chart_type": "line",
      "first_time_t": 0,
      "last_time_t": 0,
      "charts": {}
    }
  }
}
```

<h3 id="get-a-list-of-all-node-contexts-available-v1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of contexts.|[context_summary](#schemacontext_summary)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Get info about a specific context

<a id="opIdgetNodeContext1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/context \
  -H 'Accept: application/json'
```

`GET /api/v1/context`

<aside class="warning">
This operation is deprecated
</aside>

The context endpoint returns detailed information about a given context.
The `context` parameter is required for this call.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="get-info-about-a-specific-context-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|context|query|string(as returned by /charts)|false|The context of the chart as returned by the /charts call.|
|dimensions|query|string|false|a simple pattern matching dimensions (use comma or pipe as separator)|
|chart_label_key|query|string(key1,key2,key3)|false|Specify the chart label keys that need to match for context queries as comma separated values. At least one matching key is needed to match the corresponding chart.<br>|
|chart_labels_filter|query|string(key1:value1,key2:value2,key3:value3)|false|Specify the chart label keys and values to match for context queries. All keys/values need to match for the chart to be included in the query. The labels are specified as key1:value1,key2:value2<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `full` or `all` - Include all available information.<br>* `charts` - Include chart information.<br>* `dimensions` - Include dimension information.<br>* `labels` - Include label information.<br>* `uuids` - Include UUIDs in the response.<br>* `queue` - Include queue information.<br>* `flags` - Include internal flags.<br>* `deleted` - Include deleted items.<br>* `deepscan` - Perform a deep scan for contexts.<br>* `rfc3339` - Return timestamps in RFC3339 format instead of Unix timestamps.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|full|
|options|all|
|options|charts|
|options|dimensions|
|options|labels|
|options|uuids|
|options|queue|
|options|flags|
|options|deleted|
|options|deepscan|
|options|rfc3339|

> Example responses

> 200 Response

```json
{
  "version": "string",
  "hub_version": "string",
  "family": "string",
  "title": "string",
  "priority": 0,
  "units": "string",
  "chart_type": "line",
  "first_time_t": 0,
  "last_time_t": 0,
  "charts": {}
}
```

<h3 id="get-info-about-a-specific-context-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A javascript object with detailed information about the context.|[context](#schemacontext)|
|400|Bad Request|No context id was supplied in the request.|None|
|404|Not Found|No context with the given id is found.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Get info about a specific context - Latest API

<a id="opIdgetNodeContext3"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v3/context?context=system.cpu' \
  -H 'Accept: application/json'
```

`GET /api/v3/context`

The context endpoint returns detailed information about a specific monitoring context across all nodes.

This is the latest version (v3) of the context API. It provides the same functionality as v1 but may include additional features in the future.

**What is a Context?**
A context is a grouping of charts that monitor the same type of metric across different instances. For example:
- `system.cpu` - CPU usage (one chart per node)
- `disk.io` - Disk I/O operations (one chart per disk)
- `net.packets` - Network packets (one chart per network interface)

**Use Cases:**
- Get metadata about a specific metric type across all instances and nodes
- Discover which charts belong to a context
- Filter charts by labels or dimensions
- Understand metric families, units, and chart types
- Build dynamic dashboards that adapt to available instances

The response includes all charts that belong to the specified context, with their metadata, dimensions, labels, and current availability status.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="get-info-about-a-specific-context---latest-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|context|query|string|true|The context identifier to query. This is a required parameter.<br><br>A context represents a type of metric collected across multiple instances. Each context groups charts that measure the same thing but for different entities.<br><br>**Common Context Examples:**<br>- `system.cpu` - CPU utilization metrics<br>- `system.ram` - RAM usage metrics<br>- `disk.io` - Disk I/O operations<br>- `disk.ops` - Disk operation counts<br>- `net.packets` - Network packet statistics<br>- `net.drops` - Network packet drops<br>- `cgroup.cpu` - Container CPU usage<br>- `nginx.requests` - Nginx request rates<br><br>**Finding Available Contexts:**<br>Use the `/api/v3/contexts` endpoint to get a list of all available contexts.<br><br>**Alias:** Can also be specified as `ctx` for brevity.<br>|
|dimensions|query|string|false|a simple pattern matching dimensions (use comma or pipe as separator)|
|chart_label_key|query|string(key1,key2,key3)|false|Specify the chart label keys that need to match for context queries as comma separated values. At least one matching key is needed to match the corresponding chart.<br>|
|chart_labels_filter|query|string(key1:value1,key2:value2,key3:value3)|false|Specify the chart label keys and values to match for context queries. All keys/values need to match for the chart to be included in the query. The labels are specified as key1:value1,key2:value2<br>|
|options|query|string|false|Comma or pipe-separated list of options to control the response content and format.<br><br>**Available Options:**<br>- `full` or `all` - Include all possible information (equivalent to enabling all options below)<br>- `charts` - Include the list of charts belonging to this context<br>- `dimensions` - Include dimension information for each chart<br>- `queue` - Include data collection queue statistics<br>- `flags` - Include internal flags and states<br>- `labels` - Include chart labels<br>- `alerts` - Include alert configurations and states for this context<br><br>**Option Combinations:**<br>Options can be combined. For example: `options=charts,dimensions,labels` will include charts with their dimensions and labels.<br><br>**Default Behavior:**<br>When not specified, returns basic context information without detailed chart data.<br><br>**Examples:**<br>- `options=full` - Complete information<br>- `options=charts,dimensions` - Charts with dimension details<br>- `options=charts\|labels` - Charts with labels (pipe separator)<br>|
|after|query|integer(int64)|false|Return only charts that have collected data after this timestamp.<br><br>This filters charts based on their data collection activity, excluding charts that haven't collected data since the specified time.<br><br>**Format:** Unix timestamp in seconds<br><br>**Use Cases:**<br>- Find recently active charts<br>- Exclude stale or obsolete charts<br>- Filter charts by collection timeframe<br><br>**Example:** `after=1609459200` (charts active after January 1, 2021)<br><br>When not specified, all charts are included regardless of their last update time.<br>|
|before|query|integer(int64)|false|Return only charts that have collected data before this timestamp.<br><br>This filters charts based on their data collection activity, excluding charts that only have data after the specified time.<br><br>**Format:** Unix timestamp in seconds<br><br>**Use Cases:**<br>- Historical analysis of chart availability<br>- Find charts that were active during a specific time period<br>- Exclude newer charts from results<br><br>**Example:** `before=1640995200` (charts active before January 1, 2022)<br><br>When combined with `after`, you can specify an exact time window:<br>`after=1609459200&before=1640995200` (charts active during 2021)<br><br>When not specified, all charts are included regardless of their collection timeline.<br>|

> Example responses

> 200 Response

```json
{
  "version": "string",
  "hub_version": "string",
  "family": "string",
  "title": "string",
  "priority": 0,
  "units": "string",
  "chart_type": "line",
  "first_time_t": 0,
  "last_time_t": 0,
  "charts": {}
}
```

<h3 id="get-info-about-a-specific-context---latest-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Returns detailed information about the requested context.<br><br>The response is a JSON object containing:<br>- Context metadata (name, title, family, units, chart type)<br>- List of charts belonging to this context (when options=charts)<br>- Dimension information (when options=dimensions)<br>- Chart labels (when options=labels)<br>- Alert configurations (when options=alerts)<br>- Collection statistics (when options=queue)<br><br>**Response Structure:**<br>The exact structure depends on the options parameter. With `options=full`, you get complete information including all charts, their dimensions, labels, and current states.<br>|[context](#schemacontext)|
|400|Bad Request|Bad request. Common causes:<br>- Missing required 'context' parameter<br>- Invalid parameter values<br>- Malformed filter patterns<br>|None|
|404|Not Found|Not found. The specified context does not exist on this Netdata agent.<br><br>This can occur when:<br>- The context name is misspelled<br>- The context is not being collected on this agent<br>- The context was available but is now obsolete<br>|None|
|500|Internal Server Error|Internal server error. Usually indicates the server is out of memory.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

<h1 id="netdata-api-data">data</h1>

Everything related to data queries

## Data Query v2

<a id="opIddataQuery2"></a>

> Code samples

```bash
curl http://localhost:19999/api/v2/data \
  -H 'Accept: application/json'
```

`GET /api/v2/data`

<aside class="warning">
This operation is deprecated
</aside>

Multi-node, multi-context, multi-instance, multi-dimension data queries, with time and metric aggregation.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="data-query-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_by|query|[string]|false|A comma separated list of the groupings required.<br>All possible values can be combined together, except `selected`. If `selected` is given in the list, all others are ignored.<br>The order they are placed in the list is currently ignored.<br>This parameter is also accepted as `group_by[0]` and `group_by[1]` when multiple grouping passes are required.<br>|
|group_by_label|query|string(comma separated list of label keys to group by)|false|A comma separated list of the label keys to group by their values. The order of the labels in the list is respected.<br>This parameter is also accepted as `group_by_label[0]` and `group_by_label[1]` when multiple grouping passes are required.<br>|
|aggregation|query|string|false|The aggregation function to apply when grouping metrics together.<br>When option `raw` is given, `average` and `avg` behave like `sum` and the caller is expected to calculate the average.<br>This parameter is also accepted as `aggregation[0]` and `aggregation[1]` when multiple grouping passes are required.<br>|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|scope_contexts|query|string(simple pattern)|false|A simple pattern limiting the contexts scope of the query. The scope controls both data and metadata response. The default contexts scope is all contexts for which this Agent has data for. Usually the contexts scope is used to slice data on the dashboard (e.g. each context based chart has its own contexts scope, limiting the chart to all the instances of the selected context). Both positive and negative simple pattern expressions are supported.<br>|
|scope_instances|query|string(simple pattern)|false|A simple pattern limiting the instances scope of the query. The scope controls both data and metadata response. This limits which instances are even considered for the query, including their visibility in the query response metadata. The simple pattern is checked against the instance `id`, the instance `name`, the fully qualified name of the instance `id` and `name`, like `instance@machine_guid`, where `instance` is either its `id` or `name`. Both positive and negative simple pattern expressions are supported.<br>|
|scope_labels|query|string(simple pattern)|false|A simple pattern limiting the labels scope of the query. The scope controls both data and metadata response. This limits which instances are even considered for the query based on their labels. The simple pattern is checked against `name:value` of all the labels of all the eligible instances (as filtered by scope nodes, scope contexts, and scope instances). Only instances having labels that match this pattern will be included in the query. Both positive and negative simple pattern expressions are supported.<br>|
|scope_dimensions|query|string(simple pattern)|false|A simple pattern limiting the dimensions scope of the query. The scope controls both data and metadata response. This limits which dimensions are even considered for the query, including their visibility in the query response metadata. The simple pattern is checked against both the dimension `id` and `name`. Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|contexts|query|string(simple pattern)|false|A simple pattern matching the contexts to be queried. This only controls the data response, not the metadata. Both positive and negative simple pattern expressions are supported.<br>|
|instances|query|string(simple pattern)|false|A simple pattern matching the instances to be queried. The simple pattern is checked against the instance `id`, the instance `name`, the fully qualified name of the instance `id` and `name`, like `instance@machine_guid`, where `instance` is either its `id` or `name`. Both positive and negative simple pattern expressions are supported.<br>|
|labels|query|string(simple pattern)|false|A simple pattern matching the labels to be queried. The simple pattern is checked against `name:value` of all the labels of all the eligible instances (as filtered by all the above: scope nodes, scope contexts, nodes, contexts and instances). Negative simple patterns should not be used in this filter.<br>|
|alerts|query|string(simple pattern)|false|A simple pattern matching the alerts to be queried. The simple pattern is checked against the `name` of alerts and the combination of `name:status`, when status is one of `CLEAR`, `WARNING`, `CRITICAL`, `REMOVED`, `UNDEFINED`, `UNINITIALIZED`, of all the alerts of all the eligible instances (as filtered by all the above). A negative simple pattern will exclude the instances having the labels matched.<br>|
|dimensions|query|string(simple pattern)|false|A simple patterns matching the dimensions to be queried. The simple pattern is checked against and `id` and the `name` of the dimensions of the eligible instances (as filtered by all the above). Both positive and negative simple pattern expressions are supported.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|points|query|number(integer)|false|The number of points to be returned. If not given, or it is <= 0, or it is bigger than the points stored in the database for the given duration, all the available collected values for the given duration will be returned. For `weights` endpoints that do statistical analysis, the `points` define the detail of this analysis (the default is 500).<br>|
|tier|query|number(integer)|false|Use only the given dbengine tier for executing the query. Setting this parameters automatically sets the option `selected-tier` for the query.<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|time_group|query|string|false|Time aggregation function. If multiple collected values are to be grouped in order to return fewer points, this parameters defines the method of grouping. If the `absolute` option is set, the values are turned positive before applying this calculation.<br>|
|time_group_options|query|string|false|When the time grouping function supports additional parameters, this field can be used to pass them to it. `percentage-of-samples` (alias `countif`), `percentage-of-time`, `number-of-flaps` and `number-of-times` take a CONDITION; `trimmed-mean`, `trimmed-median` and `percentile` take a number.<br>A condition is an operator followed by a value. The operators are `>`, `>=` (or `>:`), `<`, `<=` (or `<:`), `=` (or `==` or `:`) and `!=` (or `!:`, `!` or `<>`); with no operator the value compares equal. The value is one of:<br>- a number, e.g. `>10`<br>- a gap token - `gap`, `nan`, `null` or `empty` are synonyms for "no data was collected", e.g. `==gap` matches the slots with no data and `!=gap` matches the collected ones. For `percentage-of-samples`, `number-of-flaps` and `number-of-times`, naming a gap token is what makes gaps participate at all; without one they are invisible for these three aggregations. `percentage-of-time` always counts uncollected time in its denominator, whatever the condition compares against.<br>- the previous collected sample - `previous` or `last`, e.g. `<previous` matches every sample lower than the one before it, which counts counter resets (reboots). Gaps are skipped, so a drop across a gap is still a drop, and the first sample of a query never matches.<br>An omitted, empty or whitespace-only condition means `==0`. An operator without a value applies to zero, so `>` means `>0`.<br>There are no and/or compounds.<br>Over a window long enough to read lower-resolution data `percentage-of-time`, `number-of-flaps` and `number-of-times` return estimates. `percentage-of-time` is exact over whole stored intervals for a fully collected 0-or-1 signal sampled at a steady cadence. Partial intervals, cadence changes and other signals or conditions are approximate. Gaps hidden inside a stored interval can overstate availability and understate missing time. `number-of-flaps` and `number-of-times` are exact only when each stored interval contains at most one relevant transition or match; otherwise they report at most one event for that interval. Every result bucket covering the same stored interval reports that interval's estimate. `percentage-of-time` always measures against the SELECTED duration, not against the collected part of it. When gaps remain separately represented in storage, uncollected time does not enter the numerator for a numeric condition, so a window with one matching sample and the rest missing answers a small percentage, not 100%. A condition such as `==gap` or `==null` includes uncollected time in the numerator instead. `percentage-of-samples` does not estimate and stays blind to gaps unless the condition names one - it evaluates each stored point as one sample. Use `tier=0` for the highest-resolution available result. When the response includes `db.per_tier`, such as with `format=json2`, inspect it to verify the selected tier; exactness still depends on the stored interval resolution.<br>|
|time_resampling|query|number(integer)|false|For incremental values that are "per second", this value is used to resample them to "per minute` (60) or "per hour" (3600). It can only be used in conjunction with group=average.<br>|
|format|query|string|false|The format of the data to be returned.|
|cardinality_limit|query|integer(int64)|false|Limits the number of unique items returned, to prevent excessive memory usage and response sizes when a request matches a large number of items. For data queries, the query engine keeps the top contributing dimensions and folds the rest into one `remaining` aggregate dimension, so the total number of returned dimensions equals this limit; the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) stays complete unless the `cardinality-limit-all` option is also given. Other endpoints (alerts, contexts) apply this limit to their own result items. Weights endpoints define separate result-limit semantics.<br>|
|limit|query|integer(int64)|false|Limits the number of dimensions returned by a data query to the top-N contributors: the query engine keeps the `limit` highest-contributing dimensions and folds the rest into one `remaining` aggregate dimension (equivalent to `cardinality_limit` = `limit` + 1; `cardinality_limit`, when given, takes precedence). Agents that predate this parameter ignore it and return all dimensions, so clients can use it without version gating.<br>|
|timeout|query|number(integer)|false|Specify a timeout value in milliseconds after which the Agent will abort the query and return a 503 error. A value of 0 indicates no timeout.<br>|
|callback|query|string|false|For JSONP responses, the callback function name.<br>|
|filename|query|string|false|Add `Content-Disposition: attachment; filename=` header to the response, that will instruct the browser to save the response with the given filename."<br>|
|tqx|query|string|false|[Google Visualization API](https://developers.google.com/chart/interactive/docs/dev/implementing_data_source?hl=en) formatted parameter.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|group_by|dimension|
|group_by|instance|
|group_by|percentage-of-instance|
|group_by|label|
|group_by|node|
|group_by|context|
|group_by|units|
|group_by|selected|
|aggregation|min|
|aggregation|max|
|aggregation|avg|
|aggregation|average|
|aggregation|sum|
|aggregation|percentage|
|aggregation|extremes|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|
|time_group|min|
|time_group|max|
|time_group|avg|
|time_group|average|
|time_group|median|
|time_group|stddev|
|time_group|sum|
|time_group|incremental-sum|
|time_group|ses|
|time_group|des|
|time_group|cv|
|time_group|percentage-of-samples|
|time_group|countif|
|time_group|percentage-of-time|
|time_group|number-of-flaps|
|time_group|number-of-times|
|time_group|percentile|
|time_group|percentile25|
|time_group|percentile50|
|time_group|percentile75|
|time_group|percentile80|
|time_group|percentile90|
|time_group|percentile95|
|time_group|percentile97|
|time_group|percentile98|
|time_group|percentile99|
|time_group|trimmed-mean|
|time_group|trimmed-mean1|
|time_group|trimmed-mean2|
|time_group|trimmed-mean3|
|time_group|trimmed-mean5|
|time_group|trimmed-mean10|
|time_group|trimmed-mean15|
|time_group|trimmed-mean20|
|time_group|trimmed-mean25|
|time_group|trimmed-median|
|time_group|trimmed-median1|
|time_group|trimmed-median2|
|time_group|trimmed-median3|
|time_group|trimmed-median5|
|time_group|trimmed-median10|
|time_group|trimmed-median15|
|time_group|trimmed-median20|
|time_group|trimmed-median25|
|time_group|ema|
|time_group|extremes|
|time_group|latest|
|format|json|
|format|json2|
|format|jsonp|
|format|csv|
|format|tsv|
|format|tsv-excel|
|format|ssv|
|format|ssvcomma|
|format|datatable|
|format|datasource|
|format|html|
|format|markdown|
|format|array|
|format|csvjsonarray|

> Example responses

> 200 Response

```json
{
  "api": 0,
  "agents": [
    {
      "mg": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nd": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nm": "string",
      "ai": 0,
      "now": 0
    }
  ],
  "versions": {
    "nodes_hard_hash": 0,
    "contexts_hard_hash": 0,
    "contexts_soft_hash": 0,
    "alerts_hard_hash": 0,
    "alerts_soft_hash": 0
  },
  "summary": {
    "nodes": [
      {
        "mg": "string",
        "nd": "string",
        "nm": "string",
        "ni": 0,
        "st": {
          "ai": 0,
          "code": 0,
          "msg": "string",
          "ms": 0
        },
        "is": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "al": {
          "nm": "string",
          "cl": 0,
          "wr": 0,
          "cr": 0,
          "ot": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        }
      }
    ],
    "contexts": [
      {
        "id": "string",
        "is": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "al": {
          "nm": "string",
          "cl": 0,
          "wr": 0,
          "cr": 0,
          "ot": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        }
      }
    ],
    "instances": [
      {
        "id": "string",
        "nm": "string",
        "ni": null,
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "al": {
          "nm": "string",
          "cl": 0,
          "wr": 0,
          "cr": 0,
          "ot": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        }
      }
    ],
    "dimensions": [
      {
        "id": "string",
        "nm": "string",
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        }
      }
    ],
    "labels": [
      {
        "id": "string",
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        },
        "vl": [
          {
            "id": "string",
            "ds": {
              "sl": 0,
              "ex": 0,
              "qr": 0,
              "fl": 0
            },
            "sts": {
              "min": 0,
              "max": 0,
              "avg": 0,
              "arp": 0,
              "con": 0
            }
          }
        ]
      }
    ],
    "alerts": [
      {
        "nm": "string",
        "cl": 0,
        "wr": 0,
        "cr": 0,
        "ot": 0
      }
    ]
  },
  "totals": {
    "nodes": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "contexts": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "instances": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "dimensions": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "label_keys": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "label_key_values": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    }
  },
  "functions": [
    "string"
  ],
  "db": {
    "tiers": 0,
    "update_every": 0,
    "first_entry": 0,
    "last_entry": 0,
    "per_tier": [
      {
        "tier": 0,
        "queries": 0,
        "points": 0,
        "update_every": 0,
        "first_entry": 0,
        "last_entry": null
      }
    ],
    "units": "string",
    "dimensions": {
      "ids": [
        "string"
      ],
      "units": [
        "string"
      ],
      "sts": {
        "min": 0,
        "max": 0,
        "avg": 0,
        "arp": 0,
        "con": 0
      }
    }
  },
  "view": {
    "title": "string",
    "format": "string",
    "options": [
      "string"
    ],
    "time_group": "string",
    "after": 0,
    "before": 0,
    "cardinality": {
      "folded": 0,
      "cut": 0
    },
    "partial_data_trimming": {
      "max_update_every": 0,
      "expected_after": 0,
      "trimmed_after": 0
    },
    "points": 0,
    "units": "string",
    "chart_type": "line",
    "dimensions": {
      "grouped_by": [
        "selected"
      ],
      "ids": [
        "string"
      ],
      "names": [
        "string"
      ],
      "priorities": [
        0
      ],
      "aggregated": [
        0
      ],
      "units": [
        "string"
      ],
      "sts": {
        "min": 0,
        "max": 0,
        "avg": 0,
        "arp": 0,
        "con": 0
      },
      "labels": {
        "label_key1": [
          [
            "string"
          ]
        ]
      }
    },
    "min": 0,
    "max": 0
  },
  "result": {
    "labels": [
      "string"
    ],
    "point": {
      "value": 0,
      "arp": 0,
      "pa": 0,
      "count": 0,
      "hidden": null
    },
    "data": [
      0
    ]
  },
  "timings": {}
}
```

<h3 id="data-query-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The call was successful. The response includes the data in the format requested.<br>|Inline|
|400|Bad Request|Bad request - the body will include a message stating what is wrong.<br>|None|
|500|Internal Server Error|Internal server error. This usually means the server is out of memory.<br>|None|

<h3 id="data-query-v2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[jsonwrap2](#schemajsonwrap2)|false|none|Data response with `format=json2`<br>|
|*oneOf*|[data_json_formats2](#schemadata_json_formats2)|false|none|Depending on the `format` given to a data query, any of the following may be returned.<br>|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Data Query v3

<a id="opIddataQuery3"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/data \
  -H 'Accept: application/json'
```

`GET /api/v3/data`

Multi-node, multi-context, multi-instance, multi-dimension data queries, with time and metric aggregation.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="data-query-v3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_by|query|[string]|false|A comma separated list of the groupings required.<br>All possible values can be combined together, except `selected`. If `selected` is given in the list, all others are ignored.<br>The order they are placed in the list is currently ignored.<br>This parameter is also accepted as `group_by[0]` and `group_by[1]` when multiple grouping passes are required.<br>|
|group_by_label|query|string(comma separated list of label keys to group by)|false|A comma separated list of the label keys to group by their values. The order of the labels in the list is respected.<br>This parameter is also accepted as `group_by_label[0]` and `group_by_label[1]` when multiple grouping passes are required.<br>|
|aggregation|query|string|false|The aggregation function to apply when grouping metrics together.<br>When option `raw` is given, `average` and `avg` behave like `sum` and the caller is expected to calculate the average.<br>This parameter is also accepted as `aggregation[0]` and `aggregation[1]` when multiple grouping passes are required.<br>|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|scope_contexts|query|string(simple pattern)|false|A simple pattern limiting the contexts scope of the query. The scope controls both data and metadata response. The default contexts scope is all contexts for which this Agent has data for. Usually the contexts scope is used to slice data on the dashboard (e.g. each context based chart has its own contexts scope, limiting the chart to all the instances of the selected context). Both positive and negative simple pattern expressions are supported.<br>|
|scope_instances|query|string(simple pattern)|false|A simple pattern limiting the instances scope of the query. The scope controls both data and metadata response. This limits which instances are even considered for the query, including their visibility in the query response metadata. The simple pattern is checked against the instance `id`, the instance `name`, the fully qualified name of the instance `id` and `name`, like `instance@machine_guid`, where `instance` is either its `id` or `name`. Both positive and negative simple pattern expressions are supported.<br>|
|scope_labels|query|string(simple pattern)|false|A simple pattern limiting the labels scope of the query. The scope controls both data and metadata response. This limits which instances are even considered for the query based on their labels. The simple pattern is checked against `name:value` of all the labels of all the eligible instances (as filtered by scope nodes, scope contexts, and scope instances). Only instances having labels that match this pattern will be included in the query. Both positive and negative simple pattern expressions are supported.<br>|
|scope_dimensions|query|string(simple pattern)|false|A simple pattern limiting the dimensions scope of the query. The scope controls both data and metadata response. This limits which dimensions are even considered for the query, including their visibility in the query response metadata. The simple pattern is checked against both the dimension `id` and `name`. Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|contexts|query|string(simple pattern)|false|A simple pattern matching the contexts to be queried. This only controls the data response, not the metadata. Both positive and negative simple pattern expressions are supported.<br>|
|instances|query|string(simple pattern)|false|A simple pattern matching the instances to be queried. The simple pattern is checked against the instance `id`, the instance `name`, the fully qualified name of the instance `id` and `name`, like `instance@machine_guid`, where `instance` is either its `id` or `name`. Both positive and negative simple pattern expressions are supported.<br>|
|labels|query|string(simple pattern)|false|A simple pattern matching the labels to be queried. The simple pattern is checked against `name:value` of all the labels of all the eligible instances (as filtered by all the above: scope nodes, scope contexts, nodes, contexts and instances). Negative simple patterns should not be used in this filter.<br>|
|alerts|query|string(simple pattern)|false|A simple pattern matching the alerts to be queried. The simple pattern is checked against the `name` of alerts and the combination of `name:status`, when status is one of `CLEAR`, `WARNING`, `CRITICAL`, `REMOVED`, `UNDEFINED`, `UNINITIALIZED`, of all the alerts of all the eligible instances (as filtered by all the above). A negative simple pattern will exclude the instances having the labels matched.<br>|
|dimensions|query|string(simple pattern)|false|A simple patterns matching the dimensions to be queried. The simple pattern is checked against and `id` and the `name` of the dimensions of the eligible instances (as filtered by all the above). Both positive and negative simple pattern expressions are supported.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|points|query|number(integer)|false|The number of points to be returned. If not given, or it is <= 0, or it is bigger than the points stored in the database for the given duration, all the available collected values for the given duration will be returned. For `weights` endpoints that do statistical analysis, the `points` define the detail of this analysis (the default is 500).<br>|
|tier|query|number(integer)|false|Use only the given dbengine tier for executing the query. Setting this parameters automatically sets the option `selected-tier` for the query.<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|time_group|query|string|false|Time aggregation function. If multiple collected values are to be grouped in order to return fewer points, this parameters defines the method of grouping. If the `absolute` option is set, the values are turned positive before applying this calculation.<br>|
|time_group_options|query|string|false|When the time grouping function supports additional parameters, this field can be used to pass them to it. `percentage-of-samples` (alias `countif`), `percentage-of-time`, `number-of-flaps` and `number-of-times` take a CONDITION; `trimmed-mean`, `trimmed-median` and `percentile` take a number.<br>A condition is an operator followed by a value. The operators are `>`, `>=` (or `>:`), `<`, `<=` (or `<:`), `=` (or `==` or `:`) and `!=` (or `!:`, `!` or `<>`); with no operator the value compares equal. The value is one of:<br>- a number, e.g. `>10`<br>- a gap token - `gap`, `nan`, `null` or `empty` are synonyms for "no data was collected", e.g. `==gap` matches the slots with no data and `!=gap` matches the collected ones. For `percentage-of-samples`, `number-of-flaps` and `number-of-times`, naming a gap token is what makes gaps participate at all; without one they are invisible for these three aggregations. `percentage-of-time` always counts uncollected time in its denominator, whatever the condition compares against.<br>- the previous collected sample - `previous` or `last`, e.g. `<previous` matches every sample lower than the one before it, which counts counter resets (reboots). Gaps are skipped, so a drop across a gap is still a drop, and the first sample of a query never matches.<br>An omitted, empty or whitespace-only condition means `==0`. An operator without a value applies to zero, so `>` means `>0`.<br>There are no and/or compounds.<br>Over a window long enough to read lower-resolution data `percentage-of-time`, `number-of-flaps` and `number-of-times` return estimates. `percentage-of-time` is exact over whole stored intervals for a fully collected 0-or-1 signal sampled at a steady cadence. Partial intervals, cadence changes and other signals or conditions are approximate. Gaps hidden inside a stored interval can overstate availability and understate missing time. `number-of-flaps` and `number-of-times` are exact only when each stored interval contains at most one relevant transition or match; otherwise they report at most one event for that interval. Every result bucket covering the same stored interval reports that interval's estimate. `percentage-of-time` always measures against the SELECTED duration, not against the collected part of it. When gaps remain separately represented in storage, uncollected time does not enter the numerator for a numeric condition, so a window with one matching sample and the rest missing answers a small percentage, not 100%. A condition such as `==gap` or `==null` includes uncollected time in the numerator instead. `percentage-of-samples` does not estimate and stays blind to gaps unless the condition names one - it evaluates each stored point as one sample. Use `tier=0` for the highest-resolution available result. When the response includes `db.per_tier`, such as with `format=json2`, inspect it to verify the selected tier; exactness still depends on the stored interval resolution.<br>|
|time_resampling|query|number(integer)|false|For incremental values that are "per second", this value is used to resample them to "per minute` (60) or "per hour" (3600). It can only be used in conjunction with group=average.<br>|
|format|query|string|false|The format of the data to be returned.|
|cardinality_limit|query|integer(int64)|false|Limits the number of unique items returned, to prevent excessive memory usage and response sizes when a request matches a large number of items. For data queries, the query engine keeps the top contributing dimensions and folds the rest into one `remaining` aggregate dimension, so the total number of returned dimensions equals this limit; the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) stays complete unless the `cardinality-limit-all` option is also given. Other endpoints (alerts, contexts) apply this limit to their own result items. Weights endpoints define separate result-limit semantics.<br>|
|limit|query|integer(int64)|false|Limits the number of dimensions returned by a data query to the top-N contributors: the query engine keeps the `limit` highest-contributing dimensions and folds the rest into one `remaining` aggregate dimension (equivalent to `cardinality_limit` = `limit` + 1; `cardinality_limit`, when given, takes precedence). Agents that predate this parameter ignore it and return all dimensions, so clients can use it without version gating.<br>|
|timeout|query|number(integer)|false|Specify a timeout value in milliseconds after which the Agent will abort the query and return a 503 error. A value of 0 indicates no timeout.<br>|
|callback|query|string|false|For JSONP responses, the callback function name.<br>|
|filename|query|string|false|Add `Content-Disposition: attachment; filename=` header to the response, that will instruct the browser to save the response with the given filename."<br>|
|tqx|query|string|false|[Google Visualization API](https://developers.google.com/chart/interactive/docs/dev/implementing_data_source?hl=en) formatted parameter.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|group_by|dimension|
|group_by|instance|
|group_by|percentage-of-instance|
|group_by|label|
|group_by|node|
|group_by|context|
|group_by|units|
|group_by|selected|
|aggregation|min|
|aggregation|max|
|aggregation|avg|
|aggregation|average|
|aggregation|sum|
|aggregation|percentage|
|aggregation|extremes|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|
|time_group|min|
|time_group|max|
|time_group|avg|
|time_group|average|
|time_group|median|
|time_group|stddev|
|time_group|sum|
|time_group|incremental-sum|
|time_group|ses|
|time_group|des|
|time_group|cv|
|time_group|percentage-of-samples|
|time_group|countif|
|time_group|percentage-of-time|
|time_group|number-of-flaps|
|time_group|number-of-times|
|time_group|percentile|
|time_group|percentile25|
|time_group|percentile50|
|time_group|percentile75|
|time_group|percentile80|
|time_group|percentile90|
|time_group|percentile95|
|time_group|percentile97|
|time_group|percentile98|
|time_group|percentile99|
|time_group|trimmed-mean|
|time_group|trimmed-mean1|
|time_group|trimmed-mean2|
|time_group|trimmed-mean3|
|time_group|trimmed-mean5|
|time_group|trimmed-mean10|
|time_group|trimmed-mean15|
|time_group|trimmed-mean20|
|time_group|trimmed-mean25|
|time_group|trimmed-median|
|time_group|trimmed-median1|
|time_group|trimmed-median2|
|time_group|trimmed-median3|
|time_group|trimmed-median5|
|time_group|trimmed-median10|
|time_group|trimmed-median15|
|time_group|trimmed-median20|
|time_group|trimmed-median25|
|time_group|ema|
|time_group|extremes|
|time_group|latest|
|format|json|
|format|json2|
|format|jsonp|
|format|csv|
|format|tsv|
|format|tsv-excel|
|format|ssv|
|format|ssvcomma|
|format|datatable|
|format|datasource|
|format|html|
|format|markdown|
|format|array|
|format|csvjsonarray|

> Example responses

> 200 Response

```json
{
  "api": 0,
  "agents": [
    {
      "mg": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nd": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nm": "string",
      "ai": 0,
      "now": 0
    }
  ],
  "versions": {
    "nodes_hard_hash": 0,
    "contexts_hard_hash": 0,
    "contexts_soft_hash": 0,
    "alerts_hard_hash": 0,
    "alerts_soft_hash": 0
  },
  "summary": {
    "nodes": [
      {
        "mg": "string",
        "nd": "string",
        "nm": "string",
        "ni": 0,
        "st": {
          "ai": 0,
          "code": 0,
          "msg": "string",
          "ms": 0
        },
        "is": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "al": {
          "nm": "string",
          "cl": 0,
          "wr": 0,
          "cr": 0,
          "ot": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        }
      }
    ],
    "contexts": [
      {
        "id": "string",
        "is": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "al": {
          "nm": "string",
          "cl": 0,
          "wr": 0,
          "cr": 0,
          "ot": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        }
      }
    ],
    "instances": [
      {
        "id": "string",
        "nm": "string",
        "ni": null,
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "al": {
          "nm": "string",
          "cl": 0,
          "wr": 0,
          "cr": 0,
          "ot": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        }
      }
    ],
    "dimensions": [
      {
        "id": "string",
        "nm": "string",
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        }
      }
    ],
    "labels": [
      {
        "id": "string",
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        },
        "vl": [
          {
            "id": "string",
            "ds": {
              "sl": 0,
              "ex": 0,
              "qr": 0,
              "fl": 0
            },
            "sts": {
              "min": 0,
              "max": 0,
              "avg": 0,
              "arp": 0,
              "con": 0
            }
          }
        ]
      }
    ],
    "alerts": [
      {
        "nm": "string",
        "cl": 0,
        "wr": 0,
        "cr": 0,
        "ot": 0
      }
    ]
  },
  "totals": {
    "nodes": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "contexts": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "instances": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "dimensions": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "label_keys": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "label_key_values": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    }
  },
  "functions": [
    "string"
  ],
  "db": {
    "tiers": 0,
    "update_every": 0,
    "first_entry": 0,
    "last_entry": 0,
    "per_tier": [
      {
        "tier": 0,
        "queries": 0,
        "points": 0,
        "update_every": 0,
        "first_entry": 0,
        "last_entry": null
      }
    ],
    "units": "string",
    "dimensions": {
      "ids": [
        "string"
      ],
      "units": [
        "string"
      ],
      "sts": {
        "min": 0,
        "max": 0,
        "avg": 0,
        "arp": 0,
        "con": 0
      }
    }
  },
  "view": {
    "title": "string",
    "format": "string",
    "options": [
      "string"
    ],
    "time_group": "string",
    "after": 0,
    "before": 0,
    "cardinality": {
      "folded": 0,
      "cut": 0
    },
    "partial_data_trimming": {
      "max_update_every": 0,
      "expected_after": 0,
      "trimmed_after": 0
    },
    "points": 0,
    "units": "string",
    "chart_type": "line",
    "dimensions": {
      "grouped_by": [
        "selected"
      ],
      "ids": [
        "string"
      ],
      "names": [
        "string"
      ],
      "priorities": [
        0
      ],
      "aggregated": [
        0
      ],
      "units": [
        "string"
      ],
      "sts": {
        "min": 0,
        "max": 0,
        "avg": 0,
        "arp": 0,
        "con": 0
      },
      "labels": {
        "label_key1": [
          [
            "string"
          ]
        ]
      }
    },
    "min": 0,
    "max": 0
  },
  "result": {
    "labels": [
      "string"
    ],
    "point": {
      "value": 0,
      "arp": 0,
      "pa": 0,
      "count": 0,
      "hidden": null
    },
    "data": [
      0
    ]
  },
  "timings": {}
}
```

<h3 id="data-query-v3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The call was successful. The response includes the data in the format requested.<br>|Inline|
|400|Bad Request|Bad request - the body will include a message stating what is wrong.<br>|None|
|500|Internal Server Error|Internal server error. This usually means the server is out of memory.<br>|None|

<h3 id="data-query-v3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[jsonwrap2](#schemajsonwrap2)|false|none|Data response with `format=json2`<br>|
|*oneOf*|[data_json_formats2](#schemadata_json_formats2)|false|none|Depending on the `format` given to a data query, any of the following may be returned.<br>|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Data Query v1 - Single node, single chart or context queries. without group-by.

<a id="opIddataQuery1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/data \
  -H 'Accept: application/json'
```

`GET /api/v1/data`

<aside class="warning">
This operation is deprecated
</aside>

Query metric data of a chart or context of a node and return a dataset having time-series data for all dimensions available.
For group-by functionality, use `/api/v2/data`.
At least a `chart` or a `context` have to be given for the data query to be executed.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="data-query-v1---single-node-single-chart-or-context-queries-without-group-by-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chart|query|string(as returned by `/api/v1/charts`)|false|The id of the chart as returned by the `/api/v1/charts` call.|
|context|query|string(as returned by /charts)|false|The context of the chart as returned by the /charts call.|
|dimension|query|[string(as returned by /charts)]|false|Zero, one or more dimension ids or names, as returned by the /chart call, separated with comma or pipe. Netdata simple patterns are supported.|
|chart_label_key|query|string(key1,key2,key3)|false|Specify the chart label keys that need to match for context queries as comma separated values. At least one matching key is needed to match the corresponding chart.<br>|
|chart_labels_filter|query|string(key1:value1,key2:value2,key3:value3)|false|Specify the chart label keys and values to match for context queries. All keys/values need to match for the chart to be included in the query. The labels are specified as key1:value1,key2:value2<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|points|query|number(integer)|false|The number of points to be returned. If not given, or it is <= 0, or it is bigger than the points stored in the database for the given duration, all the available collected values for the given duration will be returned. For `weights` endpoints that do statistical analysis, the `points` define the detail of this analysis (the default is 500).<br>|
|tier|query|number(integer)|false|Use only the given dbengine tier for executing the query. Setting this parameters automatically sets the option `selected-tier` for the query.<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|format|query|string|false|The format of the data to be returned.|
|group|query|string|false|Time aggregation function. If multiple collected values are to be grouped in order to return fewer points, this parameters defines the method of grouping. If the `absolute` option is set, the values are turned positive before applying this calculation.<br>|
|group_options|query|string|false|When the time grouping function supports additional parameters, this field can be used to pass them to it. `percentage-of-samples` (alias `countif`), `percentage-of-time`, `number-of-flaps` and `number-of-times` take a CONDITION; `trimmed-mean`, `trimmed-median` and `percentile` take a number.<br>A condition is an operator followed by a value. The operators are `>`, `>=` (or `>:`), `<`, `<=` (or `<:`), `=` (or `==` or `:`) and `!=` (or `!:`, `!` or `<>`); with no operator the value compares equal. The value is one of:<br>- a number, e.g. `>10`<br>- a gap token - `gap`, `nan`, `null` or `empty` are synonyms for "no data was collected", e.g. `==gap` matches the slots with no data and `!=gap` matches the collected ones. For `percentage-of-samples`, `number-of-flaps` and `number-of-times`, naming a gap token is what makes gaps participate at all; without one they are invisible for these three aggregations. `percentage-of-time` always counts uncollected time in its denominator, whatever the condition compares against.<br>- the previous collected sample - `previous` or `last`, e.g. `<previous` matches every sample lower than the one before it, which counts counter resets (reboots). Gaps are skipped, so a drop across a gap is still a drop, and the first sample of a query never matches.<br>An omitted, empty or whitespace-only condition means `==0`. An operator without a value applies to zero, so `>` means `>0`.<br>There are no and/or compounds.<br>Over a window long enough to read lower-resolution data `percentage-of-time`, `number-of-flaps` and `number-of-times` return estimates. `percentage-of-time` is exact over whole stored intervals for a fully collected 0-or-1 signal sampled at a steady cadence. Partial intervals, cadence changes and other signals or conditions are approximate. Gaps hidden inside a stored interval can overstate availability and understate missing time. `number-of-flaps` and `number-of-times` are exact only when each stored interval contains at most one relevant transition or match; otherwise they report at most one event for that interval. Every result bucket covering the same stored interval reports that interval's estimate. `percentage-of-time` always measures against the SELECTED duration, not against the collected part of it. When gaps remain separately represented in storage, uncollected time does not enter the numerator for a numeric condition, so a window with one matching sample and the rest missing answers a small percentage, not 100%. A condition such as `==gap` or `==null` includes uncollected time in the numerator instead. `percentage-of-samples` does not estimate and stays blind to gaps unless the condition names one - it evaluates each stored point as one sample. Use `tier=0` for the highest-resolution available result. When the response includes `db.per_tier`, such as with `format=json2`, inspect it to verify the selected tier; exactness still depends on the stored interval resolution.<br>|
|gtime|query|number(integer)|false|The grouping number of seconds. This is used in conjunction with group=average to change the units of metrics (ie when the data is per-second, setting gtime=60 will turn them to per-minute).<br>|
|timeout|query|number(integer)|false|Specify a timeout value in milliseconds after which the Agent will abort the query and return a 503 error. A value of 0 indicates no timeout.<br>|
|callback|query|string|false|For JSONP responses, the callback function name.<br>|
|filename|query|string|false|Add `Content-Disposition: attachment; filename=` header to the response, that will instruct the browser to save the response with the given filename."<br>|
|tqx|query|string|false|[Google Visualization API](https://developers.google.com/chart/interactive/docs/dev/implementing_data_source?hl=en) formatted parameter.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|
|format|json|
|format|jsonp|
|format|csv|
|format|tsv|
|format|tsv-excel|
|format|ssv|
|format|ssvcomma|
|format|datatable|
|format|datasource|
|format|html|
|format|markdown|
|format|array|
|format|csvjsonarray|
|group|min|
|group|max|
|group|avg|
|group|average|
|group|median|
|group|stddev|
|group|sum|
|group|incremental-sum|
|group|ses|
|group|des|
|group|cv|
|group|percentage-of-samples|
|group|countif|
|group|percentage-of-time|
|group|number-of-flaps|
|group|number-of-times|
|group|percentile|
|group|percentile25|
|group|percentile50|
|group|percentile75|
|group|percentile80|
|group|percentile90|
|group|percentile95|
|group|percentile97|
|group|percentile98|
|group|percentile99|
|group|trimmed-mean|
|group|trimmed-mean1|
|group|trimmed-mean2|
|group|trimmed-mean3|
|group|trimmed-mean5|
|group|trimmed-mean10|
|group|trimmed-mean15|
|group|trimmed-mean20|
|group|trimmed-mean25|
|group|trimmed-median|
|group|trimmed-median1|
|group|trimmed-median2|
|group|trimmed-median3|
|group|trimmed-median5|
|group|trimmed-median10|
|group|trimmed-median15|
|group|trimmed-median20|
|group|trimmed-median25|
|group|ema|
|group|extremes|
|group|latest|

> Example responses

> 200 Response

```json
{
  "api": 0,
  "id": "string",
  "name": "string",
  "update_every": 0,
  "view_update_every": 0,
  "first_entry": 0,
  "last_entry": 0,
  "after": 0,
  "before": 0,
  "min": 0,
  "max": 0,
  "dimension_names": [
    "string"
  ],
  "dimension_ids": [
    "string"
  ],
  "latest_values": [
    "string"
  ],
  "view_latest_values": [
    "string"
  ],
  "dimensions": 0,
  "points": 0,
  "format": "string",
  "chart_variables": {
    "property1": {
      "varname1": 0,
      "varname2": 0
    },
    "property2": {
      "varname1": 0,
      "varname2": 0
    }
  },
  "result": {
    "labels": [
      "string"
    ],
    "data": [
      0
    ]
  }
}
```

<h3 id="data-query-v1---single-node-single-chart-or-context-queries-without-group-by-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The call was successful. The response includes the data in the format requested.<br>|Inline|
|400|Bad Request|Bad request - the body will include a message stating what is wrong.|None|
|404|Not Found|Chart or context is not found. The supplied chart or context will be reported.|None|
|500|Internal Server Error|Internal server error. This usually means the server is out of memory.|None|

<h3 id="data-query-v1---single-node-single-chart-or-context-queries-without-group-by-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[jsonwrap1](#schemajsonwrap1)|false|none|Response will contain the appropriate subtype, e.g. data_json depending on the requested format.|
|*oneOf*|[data_json_formats1](#schemadata_json_formats1)|false|none|Depending on the `format` given to a data query, any of the following may be returned.<br>|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## All Metrics v1 - Fetch latest value for all metrics

<a id="opIdallMetrics1"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v1/allmetrics?format=shell'
```

`GET /api/v1/allmetrics`

<aside class="warning">
This operation is deprecated
</aside>

The `allmetrics` endpoint returns the latest value of all metrics maintained for a netdata node.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="all-metrics-v1---fetch-latest-value-for-all-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|true|The format of the response to be returned.|
|filter|query|string(any text)|false|Allows to filter charts out using simple patterns.|
|variables|query|string|false|When enabled, netdata will expose various system configuration variables.<br>|
|timestamps|query|string|false|Enable or disable timestamps in prometheus output.<br>|
|names|query|string|false|When enabled netdata will report dimension names. When disabled netdata will report dimension IDs. The default is controlled in netdata.conf.<br>|
|oldunits|query|string|false|When enabled, netdata will show metric names for the default `source=average` as they appeared before 1.12, by using the legacy unit naming conventions.<br>|
|hideunits|query|string|false|When enabled, netdata will not include the units in the metric names, for the default `source=average`.<br>|
|server|query|string(any text)|false|Set a distinct name of the client querying prometheus metrics. Netdata will use the client IP if this is not set.<br>|
|prefix|query|string(any text)|false|Prefix all prometheus metrics with this string.<br>|
|data|query|string|false|Select the prometheus response data source. There is a setting in netdata.conf for the default.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|shell|
|format|prometheus|
|format|prometheus_all_hosts|
|format|json|
|variables|yes|
|variables|no|
|variables|1|
|variables|0|
|variables|true|
|variables|false|
|timestamps|yes|
|timestamps|no|
|timestamps|1|
|timestamps|0|
|timestamps|true|
|timestamps|false|
|names|yes|
|names|no|
|names|1|
|names|0|
|names|true|
|names|false|
|oldunits|yes|
|oldunits|no|
|oldunits|1|
|oldunits|0|
|oldunits|true|
|oldunits|false|
|hideunits|yes|
|hideunits|no|
|hideunits|1|
|hideunits|0|
|hideunits|true|
|hideunits|false|
|data|as-collected|
|data|average|
|data|sum|

<h3 id="all-metrics-v1---fetch-latest-value-for-all-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All the metrics returned in the format requested.|None|
|400|Bad Request|The format requested is not supported.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## All Metrics v3 - Export all metrics in various formats - Latest API

<a id="opIdallMetrics3"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v3/allmetrics?format=shell' \
  -H 'Accept: application/json'
```

`GET /api/v3/allmetrics`

The `allmetrics` endpoint exports the latest values of all metrics collected by Netdata in various formats suitable for integration with external monitoring systems, shell scripts, or APIs.

This is the latest version (v3) of the allmetrics API. It provides the same functionality as v1 but may include additional features in the future.

**Supported Export Formats:**
- **shell**: Bash-compatible variable assignments for scripting (NETDATA_CHARTNAME_DIMENSIONNAME="value")
- **prometheus**: Prometheus exposition format for a single host
- **prometheus_all_hosts**: Prometheus format including metrics from all child nodes
- **json**: JSON format with full chart and dimension metadata

**Use Cases:**
- Integration with Prometheus or other metric collectors
- Shell script automation and monitoring
- Custom metric exporters
- Multi-host metric aggregation

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="all-metrics-v3---export-all-metrics-in-various-formats---latest-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|true|The export format for the metrics. Required parameter.<br><br>**Formats:**<br>- `shell`: Bash variables (default) - Exports as NETDATA_CHARTNAME_DIMENSIONNAME="value"<br>- `prometheus`: Prometheus format (single host) - Compatible with Prometheus scraping<br>- `prometheus_all_hosts`: Prometheus format (all hosts) - Includes metrics from child nodes with host labels<br>- `json`: JSON format - Full metadata including chart names, families, contexts, units, and timestamps<br><br>**Format Details:**<br>- Shell format includes alarm status variables (NETDATA_ALARM_CHART_ALARM_STATUS, NETDATA_ALARM_CHART_ALARM_VALUE)<br>- Prometheus formats respect Prometheus metric naming conventions<br>- JSON format provides complete chart and dimension information<br>|
|filter|query|string|false|Simple pattern filter to include only specific charts. Uses Netdata simple pattern matching.<br><br>**Pattern Syntax:**<br>- Exact match: `system.cpu`<br>- Wildcard: `system.*` (all system charts)<br>- Multiple patterns: `system.* disk.*` (space-separated)<br>- Negation: `!system.cpu` (exclude specific chart)<br><br>When not specified, all charts are exported.<br><br>**Examples:**<br>- `system.*` - Export only system charts<br>- `disk.* net.*` - Export disk and network charts<br>- `* !*.mdstat` - Export all except mdstat charts<br>|
|variables|query|string|false|**Prometheus format only**: Include or exclude system configuration variables in the output.<br><br>When enabled (yes/1/true), Netdata exposes various system configuration variables as Prometheus metrics. This includes:<br>- Netdata configuration parameters<br>- System environment information<br>- Collection plugin states<br><br>Note: Only affects Prometheus format output. Ignored for shell and json formats.<br>|
|timestamps|query|string|false|**Prometheus format only**: Include or exclude timestamps in Prometheus metrics.<br><br>When enabled (default), each metric includes a timestamp of when it was collected.<br>When disabled, metrics are exported without timestamps (Prometheus will use scrape time).<br><br>Note: Only affects Prometheus format output. Ignored for shell and json formats.<br>|
|names|query|string|false|**Prometheus format only**: Use dimension names vs IDs in metric names.<br><br>When enabled (default), Prometheus metrics use human-readable dimension names.<br>When disabled, metrics use dimension IDs (which never change).<br><br>**Example:**<br>- names=yes: `netdata_system_cpu_percentage_average{dimension="user"}`<br>- names=no: `netdata_system_cpu_percentage_average{dimension="user"}`<br><br>The default is controlled by the global Netdata configuration. This parameter allows per-request override.<br><br>Note: Only affects Prometheus format output.<br>|
|oldunits|query|string|false|**Prometheus format only**: Use legacy unit naming conventions (pre-1.12 format).<br><br>When enabled, metric names for `source=average` use the old unit naming conventions as they appeared before Netdata version 1.12.<br><br>This is provided for backward compatibility with existing Prometheus configurations.<br><br>Note: Only affects Prometheus format with source=average.<br>|
|hideunits|query|string|false|**Prometheus format only**: Exclude units from metric names for source=average.<br><br>When enabled, units are not included in the Prometheus metric names for the default `source=average` data.<br><br>**Example:**<br>- hideunits=no: `netdata_system_cpu_percentage_average`<br>- hideunits=yes: `netdata_system_cpu_average`<br><br>Note: Only affects Prometheus format with source=average.<br>|
|server|query|string|false|**Prometheus format only**: Set a custom identifier for the client scraping the metrics.<br><br>This parameter is used to identify the client in Prometheus metric labels. If not specified, Netdata uses the client's IP address.<br><br>Useful when multiple Prometheus instances scrape the same Netdata agent, or when scraping through a proxy.<br><br>**Example:** `server=prometheus-prod-1`<br><br>Note: Only affects Prometheus format output. This value appears in metric labels to distinguish scraping sources.<br>|
|prefix|query|string|false|**Prometheus format only**: Prefix all Prometheus metric names with a custom string.<br><br>Useful for namespacing metrics when aggregating from multiple sources or to comply with organizational metric naming conventions.<br><br>**Example:** `prefix=mycompany_` produces metrics like `mycompany_system_cpu_percentage_average`<br><br>The default prefix is controlled by the global Netdata configuration. This parameter allows per-request override.<br><br>Note: Only affects Prometheus format output.<br>|
|data|query|string|false|**Prometheus format only**: Select the data source/aggregation method for Prometheus metrics.<br><br>**Options:**<br>- `as-collected`: Raw values as collected by data collection plugins (no aggregation)<br>- `average`: Average values over the collection interval (default)<br>- `sum`: Sum of values over the collection interval<br><br>The `as-collected` source provides the most recent raw sample, while `average` and `sum` provide values aggregated over the chart's update interval.<br><br>The default is controlled by the global Netdata exporting configuration. This parameter allows per-request override.<br><br>**Use Cases:**<br>- `as-collected`: For counter metrics that Prometheus will rate()<br>- `average`: For gauge metrics showing typical values<br>- `sum`: For accumulating metrics<br><br>Aliases: `source`, `data source`, `data-source`, `data_source`, `datasource`<br><br>Note: Only affects Prometheus format output.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|shell|
|format|prometheus|
|format|prometheus_all_hosts|
|format|json|
|variables|yes|
|variables|no|
|variables|1|
|variables|0|
|variables|true|
|variables|false|
|timestamps|yes|
|timestamps|no|
|timestamps|1|
|timestamps|0|
|timestamps|true|
|timestamps|false|
|names|yes|
|names|no|
|names|1|
|names|0|
|names|true|
|names|false|
|oldunits|yes|
|oldunits|no|
|oldunits|1|
|oldunits|0|
|oldunits|true|
|oldunits|false|
|hideunits|yes|
|hideunits|no|
|hideunits|1|
|hideunits|0|
|hideunits|true|
|hideunits|false|
|data|as-collected|
|data|average|
|data|sum|

> Example responses

> 200 Response

```json
{}
```

<h3 id="all-metrics-v3---export-all-metrics-in-various-formats---latest-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Metrics exported in the requested format.<br><br>**Content Types:**<br>- shell: text/plain<br>- json: application/json<br>- prometheus/prometheus_all_hosts: application/openmetrics-text (Prometheus format)<br><br>**Response Characteristics:**<br>- Shell format: Variables ready for sourcing in bash scripts<br>- JSON format: Complete chart metadata with current values<br>- Prometheus format: Ready for Prometheus scraping<br><br>The response is not cacheable as it contains current metric values.<br>|Inline|
|400|Bad Request|Bad request. The response body contains an error message.<br><br>Common causes:<br>- Invalid or missing 'format' parameter<br>- Unsupported format value<br>- Invalid filter pattern syntax<br>|None|
|500|Internal Server Error|Internal server error. Usually indicates the server is out of memory or a collection plugin has crashed.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## [DEPRECATED] Get a chart variable value

<a id="opIdvariable1"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v1/variable?chart=system.cpu&variable=used'
```

`GET /api/v1/variable`

<aside class="warning">
This operation is deprecated
</aside>

**[DEPRECATED - Use `/api/v3/variable` instead]**

**Chart Variable Retrieval**

This endpoint returns the current value of a chart variable. Variables are values computed by Netdata that can be used in alert expressions and calculations. Each chart can have multiple variables representing different aspects of its data.

**Common Variables:**
- Calculated values (averages, sums, percentages)
- Threshold values used in alerts
- State information (counts, flags)
- Time-based values (last update, collection duration)

**Use Cases:**
- **Alert Debugging:** Check variable values used in alert conditions
- **Custom Calculations:** Retrieve computed values for external processing
- **Monitoring Verification:** Verify that calculated variables match expectations
- **Integration:** Feed variable values to external monitoring systems

**Migration to v3:**
Use `/api/v3/variable` which provides the same functionality with enhanced error handling and clearer response format.

**Security:**
- Requires appropriate data access permissions
- Variables may contain sensitive metrics information

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="deprecated-get-a-chart-variable-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chart|query|string|true|Chart ID for which to retrieve the variable. This is the full chart ID as shown in the dashboard.<br><br>**Examples:**<br>- `system.cpu` - System CPU usage chart<br>- `disk.sda.io` - Disk I/O for sda<br>- `nginx_local.connections` - Nginx connections<br>|
|variable|query|string|true|Variable name to retrieve. Each chart has different variables available depending on its configuration and alert definitions.<br><br>**Common Variables:**<br>- `used` - Used value (for utilization charts)<br>- `free` - Free value (for utilization charts)<br>- `value` - Current value<br>- `avg` - Average value<br>- `sum` - Sum of all dimensions<br>- Custom variable names defined in alert configurations<br>|

> Example responses

> 200 Response

```json
42.5
```

<h3 id="deprecated-get-a-chart-variable-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Variable value returned successfully|Inline|
|400|Bad Request|Bad request - missing chart or variable parameter|None|
|404|Not Found|Chart or variable not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

<h1 id="netdata-api-badges">badges</h1>

Everything related to dynamic badges based on metric data

## Generate a badge in form of SVG image for a chart (or dimension)

<a id="opIdbadge1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/badge.svg
```

`GET /api/v1/badge.svg`

<aside class="warning">
This operation is deprecated
</aside>

Successful responses are SVG images.
**Security & Access Control:** - 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply - **Default Access:** Public (no authentication required) - **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token - **IP Restrictions:** Subject to `allow badges from` in netdata.conf - **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools

<h3 id="generate-a-badge-in-form-of-svg-image-for-a-chart-or-dimension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chart|query|string(as returned by `/api/v1/charts`)|false|The id of the chart as returned by the `/api/v1/charts` call.|
|dimension|query|[string(as returned by /charts)]|false|Zero, one or more dimension ids or names, as returned by the /chart call, separated with comma or pipe. Netdata simple patterns are supported.|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|group|query|string|false|Time aggregation function. If multiple collected values are to be grouped in order to return fewer points, this parameters defines the method of grouping. If the `absolute` option is set, the values are turned positive before applying this calculation.<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|alarm|query|string(any text)|false|The name of an alarm linked to the chart.|
|label|query|string(any text)|false|A text to be used as the label.|
|units|query|string(any text)|false|A text to be used as the units.|
|label_color|query|string \| string(^([0-9a-fA-F]{3}\|[0-9a-fA-F]{6})$)|false|A color to be used for the background of the label side(left side) of the badge. One of predefined colors or specific color in hex `RGB` or `RRGGBB` format (without preceding `#` character). If value wrong or not given default color will be used.<br>|
|value_color|query|string(any text)|false|A color to be used for the background of the value *(right)* part of badge. You can set multiple using a pipe with a condition each, like this: `color<value\|color:null` The following operators are supported: >, <, >=, <=, =, :null (to check if no value exists). Each color can be specified in same manner as for `label_color` parameter. Currently only integers are supported as values.<br>|
|text_color_lbl|query|string \| string(^([0-9a-fA-F]{3}\|[0-9a-fA-F]{6})$)|false|Font color for label *(left)* part of the badge. One of predefined colors or as HTML hexadecimal color without preceding `#` character. Formats allowed `RGB` or `RRGGBB`. If no or wrong value given default color will be used.<br>|
|text_color_val|query|string \| string(^([0-9a-fA-F]{3}\|[0-9a-fA-F]{6})$)|false|Font color for value *(right)* part of the badge. One of predefined colors or as HTML hexadecimal color without preceding `#` character. Formats allowed `RGB` or `RRGGBB`. If no or wrong value given default color will be used.<br>|
|multiply|query|number(integer)|false|Multiply the value with this number for rendering it at the image (integer value required).|
|divide|query|number(integer)|false|Divide the value with this number for rendering it at the image (integer value required).|
|scale|query|number(integer)|false|Set the scale of the badge (greater or equal to 100).|
|fixed_width_lbl|query|number(integer)|false|This parameter overrides auto-sizing of badge and creates it with fixed width. This parameter determines the size of the label's left side *(label/name)*. You must set this parameter together with `fixed_width_val` otherwise it will be ignored. You should set the label/value widths wide enough to provide space for all the possible values/contents of the badge you're requesting. In case the text cannot fit the space given it will be clipped. The `scale` parameter still applies on the values you give to `fixed_width_lbl` and `fixed_width_val`.<br>|
|fixed_width_val|query|number(integer)|false|This parameter overrides auto-sizing of badge and creates it with fixed width. This parameter determines the size of the label's right side *(value)*. You must set this parameter together with `fixed_width_lbl` otherwise it will be ignored. You should set the label/value widths wide enough to provide space for all the possible values/contents of the badge you're requesting. In case the text cannot fit the space given it will be clipped. The `scale` parameter still applies on the values you give to `fixed_width_lbl` and `fixed_width_val`.<br>|
|points|query|integer|false|The number of points to use for the calculation. Default is 1.|
|group_options|query|string|false|Additional options for the grouping function. `percentage-of-samples` (alias `countif`), `percentage-of-time`, `number-of-flaps` and `number-of-times` take a condition: an optional operator (`>`, `>=` or `>:`, `<`, `<=` or `<:`, `=`, `==` or `:`, `!=`, `!:`, `!` or `<>`) followed by a number, a gap token (`gap`, `nan`, `null`, `empty`) or the previous collected sample (`previous`, `last`). A bare value means equality; omitted or empty input means `==0`; an operator without a value applies to zero. There are no and/or compounds. `trimmed-mean`, `trimmed-median` and `percentile` take a number. For `percentage-of-time`, uncollected time always remains in the denominator and enters the numerator only when the condition matches gaps.|
|precision|query|integer|false|Number of decimal places to show in the value. Default is -1 (automatic).|
|refresh|query|string \| integer|false|Auto-refresh interval in seconds. Use "auto" to automatically determine refresh interval based on the time range or alarm update frequency. For alarms, defaults to the alarm's update_every. For charts with RRDR_OPTION_NOT_ALIGNED, defaults to the chart's update_every. Otherwise calculated from the time range (before - after).<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|group|min|
|group|max|
|group|avg|
|group|average|
|group|median|
|group|stddev|
|group|sum|
|group|incremental-sum|
|group|ses|
|group|des|
|group|cv|
|group|percentage-of-samples|
|group|countif|
|group|percentage-of-time|
|group|number-of-flaps|
|group|number-of-times|
|group|percentile|
|group|percentile25|
|group|percentile50|
|group|percentile75|
|group|percentile80|
|group|percentile90|
|group|percentile95|
|group|percentile97|
|group|percentile98|
|group|percentile99|
|group|trimmed-mean|
|group|trimmed-mean1|
|group|trimmed-mean2|
|group|trimmed-mean3|
|group|trimmed-mean5|
|group|trimmed-mean10|
|group|trimmed-mean15|
|group|trimmed-mean20|
|group|trimmed-mean25|
|group|trimmed-median|
|group|trimmed-median1|
|group|trimmed-median2|
|group|trimmed-median3|
|group|trimmed-median5|
|group|trimmed-median10|
|group|trimmed-median15|
|group|trimmed-median20|
|group|trimmed-median25|
|group|ema|
|group|extremes|
|group|latest|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|

<h3 id="generate-a-badge-in-form-of-svg-image-for-a-chart-or-dimension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The call was successful. The response should be an SVG image.|None|
|400|Bad Request|Bad request - the body will include a message stating what is wrong.|None|
|404|Not Found|No chart with the given id is found.|None|
|500|Internal Server Error|Internal server error. This usually means the server is out of memory.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Generate a badge in form of SVG image for a chart (or dimension) - Latest API

<a id="opIdbadge3"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/badge.svg
```

`GET /api/v3/badge.svg`

Generates an SVG badge displaying real-time metric values from Netdata charts or alarms.
This is the latest version (v3) of the badge API. It provides the same functionality as v1 but may include additional features in the future.

The badge can display:
- Current value of a chart dimension
- Current status and value of an alarm
- Custom labels and units
- Dynamic colors based on value thresholds or alarm status

Successful responses are SVG images that can be embedded in web pages or documentation.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow badges from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="generate-a-badge-in-form-of-svg-image-for-a-chart-or-dimension---latest-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chart|query|string(as returned by `/api/v1/charts`)|false|The id of the chart as returned by the `/api/v1/charts` call.|
|dimension|query|[string(as returned by /charts)]|false|Zero, one or more dimension ids or names, as returned by the /chart call, separated with comma or pipe. Netdata simple patterns are supported.|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|group|query|string|false|Time aggregation function. If multiple collected values are to be grouped in order to return fewer points, this parameters defines the method of grouping. If the `absolute` option is set, the values are turned positive before applying this calculation.<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|alarm|query|string|false|The name of an alarm linked to the chart. When specified, the badge will display the alarm's current value and use alarm status for color selection.|
|label|query|string|false|Custom text to use as the badge label (left side). If not specified:<br>- For alarms: uses the alarm name (with underscores replaced by spaces)<br>- For dimensions: uses the dimension name<br>- Otherwise: uses the chart name<br>|
|units|query|string|false|Custom text to use as the units suffix. If not specified:<br>- For alarms: uses the alarm's configured units or empty string<br>- For percentage queries: uses "%"<br>- Otherwise: uses the chart's units<br>|
|label_color|query|string \| string(^([0-9a-fA-F]{3}\|[0-9a-fA-F]{6})$)|false|Background color for the label (left) side of the badge. Can be:<br>- One of the predefined color names<br>- Hex RGB format (3 digits): e.g., "f00" for red<br>- Hex RRGGBB format (6 digits): e.g., "ff0000" for red<br>Note: Do not include the '#' character. If value is invalid, default color will be used.<br>|
|value_color|query|string|false|Background color for the value (right) side of the badge. Supports conditional coloring based on the value.<br><br>Can be specified as:<br>- Simple color: Same format as label_color<br>- Conditional: Multiple color rules separated by pipe (\|), each with format: `color<operator>value`<br><br>Supported operators:<br>- `>`: greater than<br>- `<`: less than<br>- `>=`: greater than or equal<br>- `<=`: less than or equal<br>- `=`: equal to<br>- `:null`: true when no value exists<br><br>Example: `green<80\|yellow<95\|red` (green if value < 80, yellow if < 95, otherwise red)<br><br>Note: Currently only integers are supported as values. Colors follow same format as label_color.<br>|
|text_color_lbl|query|string \| string(^([0-9a-fA-F]{3}\|[0-9a-fA-F]{6})$)|false|Font color for the label (left) side text. Can be:<br>- One of the predefined color names<br>- Hex RGB or RRGGBB format without '#' character<br>If not specified or invalid, default color will be used.<br>|
|text_color_val|query|string \| string(^([0-9a-fA-F]{3}\|[0-9a-fA-F]{6})$)|false|Font color for the value (right) side text. Can be:<br>- One of the predefined color names<br>- Hex RGB or RRGGBB format without '#' character<br>If not specified or invalid, default color will be used.<br>|
|multiply|query|integer|false|Multiply the displayed value by this number before rendering. Integer value required.<br>Useful for unit conversions or scaling. Default is 1.<br>|
|divide|query|integer|false|Divide the displayed value by this number before rendering. Integer value required.<br>Useful for unit conversions or scaling. Default is 1.<br>|
|scale|query|integer|false|Scale factor for the badge size as a percentage. Must be >= 100.<br>- 100 = normal size (default)<br>- 150 = 1.5x larger<br>- 200 = 2x larger<br>|
|fixed_width_lbl|query|integer|false|Fixed width for the label (left) side in pixels. Must be used together with `fixed_width_val`.<br><br>This overrides automatic sizing and creates a badge with fixed dimensions. Ensure the width is sufficient for your content - text that doesn't fit will be clipped.<br><br>The `scale` parameter still applies to these fixed width values.<br>|
|fixed_width_val|query|integer|false|Fixed width for the value (right) side in pixels. Must be used together with `fixed_width_lbl`.<br><br>This overrides automatic sizing and creates a badge with fixed dimensions. Ensure the width is sufficient for your content - text that doesn't fit will be clipped.<br><br>The `scale` parameter still applies to these fixed width values.<br>|
|points|query|integer|false|Number of data points to use for the calculation. Default is 1.<br>Higher values provide averaging over more samples.<br>|
|group_options|query|string|false|Additional options for the time-series grouping function. Format depends on the selected group method: `percentage-of-samples` (alias `countif`), `percentage-of-time`, `number-of-flaps` and `number-of-times` take a condition - an optional operator (`>`, `>=` or `>:`, `<`, `<=` or `<:`, `=`, `==` or `:`, `!=`, `!:`, `!` or `<>`) followed by a number, a gap token (`gap`, `nan`, `null`, `empty`) or the previous collected sample (`previous`, `last`). A bare value means equality; omitted or empty input means `==0`; an operator without a value applies to zero. There are no and/or compounds; `trimmed-mean`, `trimmed-median` and `percentile` take a number. For `percentage-of-time`, uncollected time always remains in the denominator and enters the numerator only when the condition matches gaps.|
|precision|query|integer|false|Number of decimal places to display in the value.<br>- Positive number: exact decimal places (e.g., 2 = "12.34")<br>- -1 (default): automatic precision based on value magnitude<br>|
|refresh|query|string \| integer|false|Auto-refresh interval for the badge. Can be:<br>- "auto": Automatically determine refresh based on context<br>  - For alarms: uses the alarm's update_every interval<br>  - For non-aligned charts: uses the chart's update_every<br>  - For time-range queries: uses the query time span<br>- Integer: Specific refresh interval in seconds<br><br>When refresh is set, the response includes a Refresh HTTP header.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|group|min|
|group|max|
|group|avg|
|group|average|
|group|median|
|group|stddev|
|group|sum|
|group|incremental-sum|
|group|ses|
|group|des|
|group|cv|
|group|percentage-of-samples|
|group|countif|
|group|percentage-of-time|
|group|number-of-flaps|
|group|number-of-times|
|group|percentile|
|group|percentile25|
|group|percentile50|
|group|percentile75|
|group|percentile80|
|group|percentile90|
|group|percentile95|
|group|percentile97|
|group|percentile98|
|group|percentile99|
|group|trimmed-mean|
|group|trimmed-mean1|
|group|trimmed-mean2|
|group|trimmed-mean3|
|group|trimmed-mean5|
|group|trimmed-mean10|
|group|trimmed-mean15|
|group|trimmed-mean20|
|group|trimmed-mean25|
|group|trimmed-median|
|group|trimmed-median1|
|group|trimmed-median2|
|group|trimmed-median3|
|group|trimmed-median5|
|group|trimmed-median10|
|group|trimmed-median15|
|group|trimmed-median20|
|group|trimmed-median25|
|group|ema|
|group|extremes|
|group|latest|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|

<h3 id="generate-a-badge-in-form-of-svg-image-for-a-chart-or-dimension---latest-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. The response is an SVG image that can be embedded in HTML or Markdown.<br><br>When refresh parameter is set, the response includes:<br>- Refresh header with the interval<br>- Appropriate Cache-Control headers<br>|Inline|
|400|Bad Request|Bad request. The response body contains an error message explaining what is wrong.<br>Common causes:<br>- Missing required 'chart' parameter<br>- Invalid parameter values<br>|None|
|404|Not Found|Not found. Possible causes:<br>- Chart with the specified ID does not exist<br>- Specified alarm does not exist on the chart<br>|None|
|500|Internal Server Error|Internal server error. Usually indicates the server is out of memory.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

<h1 id="netdata-api-weights">weights</h1>

Everything related to scoring / weighting metrics

## Score or weight all or some of the metrics, across all nodes, according to various algorithms.

<a id="opIdweights2"></a>

> Code samples

```bash
curl http://localhost:19999/api/v2/weights \
  -H 'Accept: application/json'
```

`GET /api/v2/weights`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint goes through all metrics and scores them according to an algorithm.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="score-or-weight-all-or-some-of-the-metrics-across-all-nodes-according-to-various-algorithms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|method|query|string|false|The weighting / scoring algorithm.|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|scope_contexts|query|string(simple pattern)|false|A simple pattern limiting the contexts scope of the query. The scope controls both data and metadata response. The default contexts scope is all contexts for which this Agent has data for. Usually the contexts scope is used to slice data on the dashboard (e.g. each context based chart has its own contexts scope, limiting the chart to all the instances of the selected context). Both positive and negative simple pattern expressions are supported.<br>|
|scope_instances|query|string(simple pattern)|false|A simple pattern limiting the instances scope of the query. The scope controls both data and metadata response. This limits which instances are even considered for the query, including their visibility in the query response metadata. The simple pattern is checked against the instance `id`, the instance `name`, the fully qualified name of the instance `id` and `name`, like `instance@machine_guid`, where `instance` is either its `id` or `name`. Both positive and negative simple pattern expressions are supported.<br>|
|scope_labels|query|string(simple pattern)|false|A simple pattern limiting the labels scope of the query. The scope controls both data and metadata response. This limits which instances are even considered for the query based on their labels. The simple pattern is checked against `name:value` of all the labels of all the eligible instances (as filtered by scope nodes, scope contexts, and scope instances). Only instances having labels that match this pattern will be included in the query. Both positive and negative simple pattern expressions are supported.<br>|
|scope_dimensions|query|string(simple pattern)|false|A simple pattern limiting the dimensions scope of the query. The scope controls both data and metadata response. This limits which dimensions are even considered for the query, including their visibility in the query response metadata. The simple pattern is checked against both the dimension `id` and `name`. Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|contexts|query|string(simple pattern)|false|A simple pattern matching the contexts to be queried. This only controls the data response, not the metadata. Both positive and negative simple pattern expressions are supported.<br>|
|instances|query|string(simple pattern)|false|A simple pattern matching the instances to be queried. The simple pattern is checked against the instance `id`, the instance `name`, the fully qualified name of the instance `id` and `name`, like `instance@machine_guid`, where `instance` is either its `id` or `name`. Both positive and negative simple pattern expressions are supported.<br>|
|labels|query|string(simple pattern)|false|A simple pattern matching the labels to be queried. The simple pattern is checked against `name:value` of all the labels of all the eligible instances (as filtered by all the above: scope nodes, scope contexts, nodes, contexts and instances). Negative simple patterns should not be used in this filter.<br>|
|alerts|query|string(simple pattern)|false|A simple pattern matching the alerts to be queried. The simple pattern is checked against the `name` of alerts and the combination of `name:status`, when status is one of `CLEAR`, `WARNING`, `CRITICAL`, `REMOVED`, `UNDEFINED`, `UNINITIALIZED`, of all the alerts of all the eligible instances (as filtered by all the above). A negative simple pattern will exclude the instances having the labels matched.<br>|
|dimensions|query|string(simple pattern)|false|A simple patterns matching the dimensions to be queried. The simple pattern is checked against and `id` and the `name` of the dimensions of the eligible instances (as filtered by all the above). Both positive and negative simple pattern expressions are supported.<br>|
|baseline_after|query|integer|false|`baseline_after` and `baseline_before` define the baseline time-frame of a comparative query. `baseline_after` can be a negative number of seconds, up to 3 years (-94608000), relative to `baseline_before`. If not set, it is usually assumed to be -300.<br>|
|baseline_before|query|integer|false|`baseline_after` and `baseline_before` define the baseline time-frame of a comparative query. `baseline_before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `baseline_before` is positive, it is assumed to be a unix epoch timestamp.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|tier|query|number(integer)|false|Use only the given dbengine tier for executing the query. Setting this parameters automatically sets the option `selected-tier` for the query.<br>|
|points|query|number(integer)|false|The number of points to be returned. If not given, or it is <= 0, or it is bigger than the points stored in the database for the given duration, all the available collected values for the given duration will be returned. For `weights` endpoints that do statistical analysis, the `points` define the detail of this analysis (the default is 500).<br>|
|timeout|query|number(integer)|false|Specify a timeout value in milliseconds after which the Agent will abort the query and return a 503 error. A value of 0 indicates no timeout.<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|time_group|query|string|false|Time aggregation function. If multiple collected values are to be grouped in order to return fewer points, this parameters defines the method of grouping. If the `absolute` option is set, the values are turned positive before applying this calculation.<br>|
|time_group_options|query|string|false|When the time grouping function supports additional parameters, this field can be used to pass them to it. `percentage-of-samples` (alias `countif`), `percentage-of-time`, `number-of-flaps` and `number-of-times` take a CONDITION; `trimmed-mean`, `trimmed-median` and `percentile` take a number.<br>A condition is an operator followed by a value. The operators are `>`, `>=` (or `>:`), `<`, `<=` (or `<:`), `=` (or `==` or `:`) and `!=` (or `!:`, `!` or `<>`); with no operator the value compares equal. The value is one of:<br>- a number, e.g. `>10`<br>- a gap token - `gap`, `nan`, `null` or `empty` are synonyms for "no data was collected", e.g. `==gap` matches the slots with no data and `!=gap` matches the collected ones. For `percentage-of-samples`, `number-of-flaps` and `number-of-times`, naming a gap token is what makes gaps participate at all; without one they are invisible for these three aggregations. `percentage-of-time` always counts uncollected time in its denominator, whatever the condition compares against.<br>- the previous collected sample - `previous` or `last`, e.g. `<previous` matches every sample lower than the one before it, which counts counter resets (reboots). Gaps are skipped, so a drop across a gap is still a drop, and the first sample of a query never matches.<br>An omitted, empty or whitespace-only condition means `==0`. An operator without a value applies to zero, so `>` means `>0`.<br>There are no and/or compounds.<br>Over a window long enough to read lower-resolution data `percentage-of-time`, `number-of-flaps` and `number-of-times` return estimates. `percentage-of-time` is exact over whole stored intervals for a fully collected 0-or-1 signal sampled at a steady cadence. Partial intervals, cadence changes and other signals or conditions are approximate. Gaps hidden inside a stored interval can overstate availability and understate missing time. `number-of-flaps` and `number-of-times` are exact only when each stored interval contains at most one relevant transition or match; otherwise they report at most one event for that interval. Every result bucket covering the same stored interval reports that interval's estimate. `percentage-of-time` always measures against the SELECTED duration, not against the collected part of it. When gaps remain separately represented in storage, uncollected time does not enter the numerator for a numeric condition, so a window with one matching sample and the rest missing answers a small percentage, not 100%. A condition such as `==gap` or `==null` includes uncollected time in the numerator instead. `percentage-of-samples` does not estimate and stays blind to gaps unless the condition names one - it evaluates each stored point as one sample. Use `tier=0` for the highest-resolution available result. When the response includes `db.per_tier`, such as with `format=json2`, inspect it to verify the selected tier; exactness still depends on the stored interval resolution.<br>|
|limit|query|integer|false|Returns at most N strongest physical time series, or N complete groups when group_by is used. Parent instance, context, and node rows do not count toward N and retain their complete-query summaries. No remaining bucket is added. All matching metrics are still evaluated and normalized before selection; this bounds response size, not query work or duration.<br><br>Raw scores and method=value rank higher values first. Normalized scores rank lower values first. Groups rank by the requested aggregation after complete aggregation. Equal scores use stable node/context/instance/dimension identities (group IDs for groups). Metric dictionaries include only retained entries; node metadata remains complete. correlated_dimensions and total_dimensions_count describe the complete query. A positive cap adds result_limit metadata with summary_scope=all.<br><br>Legacy v1 dimension objects retain their display-name keys. Duplicate display names can collapse in clients that decode these objects into maps; returned counts emitted physical entries, not unique display-name keys. The v2/v3 dimension dictionaries use metric IDs.<br><br>Omitted, empty, or zero means unlimited. Values must be nonnegative decimal integers within the Agent's size_t range; malformed, negative, fractional, and overflowing values return HTTP 400. Repeated values use the last nonempty value of each alias, but every nonempty supplied value must be valid. cardinality_limit takes precedence, including zero. Agents without weights result-limit support may ignore either parameter; clients must inspect result_limit before claiming that results were capped.<br>|
|cardinality_limit|query|integer|false|Alias of the weights limit parameter with identical strongest-result selection and complete-query summary semantics. Takes precedence over limit when both are supplied, including zero (unlimited). Unlike data-query cardinality_limit, it does not reserve a slot for a remaining bucket. See limit for validation, repeated-value, ranking, and compatibility behavior.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|method|ks2|
|method|volume|
|method|anomaly-rate|
|method|value|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|
|time_group|min|
|time_group|max|
|time_group|avg|
|time_group|average|
|time_group|median|
|time_group|stddev|
|time_group|sum|
|time_group|incremental-sum|
|time_group|ses|
|time_group|des|
|time_group|cv|
|time_group|percentage-of-samples|
|time_group|countif|
|time_group|percentage-of-time|
|time_group|number-of-flaps|
|time_group|number-of-times|
|time_group|percentile|
|time_group|percentile25|
|time_group|percentile50|
|time_group|percentile75|
|time_group|percentile80|
|time_group|percentile90|
|time_group|percentile95|
|time_group|percentile97|
|time_group|percentile98|
|time_group|percentile99|
|time_group|trimmed-mean|
|time_group|trimmed-mean1|
|time_group|trimmed-mean2|
|time_group|trimmed-mean3|
|time_group|trimmed-mean5|
|time_group|trimmed-mean10|
|time_group|trimmed-mean15|
|time_group|trimmed-mean20|
|time_group|trimmed-mean25|
|time_group|trimmed-median|
|time_group|trimmed-median1|
|time_group|trimmed-median2|
|time_group|trimmed-median3|
|time_group|trimmed-median5|
|time_group|trimmed-median10|
|time_group|trimmed-median15|
|time_group|trimmed-median20|
|time_group|trimmed-median25|
|time_group|ema|
|time_group|extremes|
|time_group|latest|

> Example responses

> 200 Response

```json
{
  "result_limit": {
    "limit": 1,
    "total": 0,
    "returned": 0,
    "unit": "dimensions",
    "truncated": true,
    "summary_scope": "all"
  },
  "correlated_dimensions": 0,
  "total_dimensions_count": 0
}
```

<h3 id="score-or-weight-all-or-some-of-the-metrics-across-all-nodes-according-to-various-algorithms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object with weights for each context, chart and dimension.|[weights2](#schemaweights2)|
|400|Bad Request|The given parameters are invalid.|None|
|403|Forbidden|metrics correlations are not enabled on this Netdata Agent.|None|
|404|Not Found|No charts could be found, or the method that correlated the metrics did not produce any result.<br>|None|
|504|Gateway Timeout|Timeout - the query took too long and has been cancelled.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Score or weight all or some of the metrics, across all nodes, according to various algorithms.

<a id="opIdweights3"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/weights \
  -H 'Accept: application/json'
```

`GET /api/v3/weights`

This endpoint goes through all metrics and scores them according to an algorithm.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="score-or-weight-all-or-some-of-the-metrics-across-all-nodes-according-to-various-algorithms-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|method|query|string|false|The weighting / scoring algorithm.|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|scope_contexts|query|string(simple pattern)|false|A simple pattern limiting the contexts scope of the query. The scope controls both data and metadata response. The default contexts scope is all contexts for which this Agent has data for. Usually the contexts scope is used to slice data on the dashboard (e.g. each context based chart has its own contexts scope, limiting the chart to all the instances of the selected context). Both positive and negative simple pattern expressions are supported.<br>|
|scope_instances|query|string(simple pattern)|false|A simple pattern limiting the instances scope of the query. The scope controls both data and metadata response. This limits which instances are even considered for the query, including their visibility in the query response metadata. The simple pattern is checked against the instance `id`, the instance `name`, the fully qualified name of the instance `id` and `name`, like `instance@machine_guid`, where `instance` is either its `id` or `name`. Both positive and negative simple pattern expressions are supported.<br>|
|scope_labels|query|string(simple pattern)|false|A simple pattern limiting the labels scope of the query. The scope controls both data and metadata response. This limits which instances are even considered for the query based on their labels. The simple pattern is checked against `name:value` of all the labels of all the eligible instances (as filtered by scope nodes, scope contexts, and scope instances). Only instances having labels that match this pattern will be included in the query. Both positive and negative simple pattern expressions are supported.<br>|
|scope_dimensions|query|string(simple pattern)|false|A simple pattern limiting the dimensions scope of the query. The scope controls both data and metadata response. This limits which dimensions are even considered for the query, including their visibility in the query response metadata. The simple pattern is checked against both the dimension `id` and `name`. Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|contexts|query|string(simple pattern)|false|A simple pattern matching the contexts to be queried. This only controls the data response, not the metadata. Both positive and negative simple pattern expressions are supported.<br>|
|instances|query|string(simple pattern)|false|A simple pattern matching the instances to be queried. The simple pattern is checked against the instance `id`, the instance `name`, the fully qualified name of the instance `id` and `name`, like `instance@machine_guid`, where `instance` is either its `id` or `name`. Both positive and negative simple pattern expressions are supported.<br>|
|labels|query|string(simple pattern)|false|A simple pattern matching the labels to be queried. The simple pattern is checked against `name:value` of all the labels of all the eligible instances (as filtered by all the above: scope nodes, scope contexts, nodes, contexts and instances). Negative simple patterns should not be used in this filter.<br>|
|alerts|query|string(simple pattern)|false|A simple pattern matching the alerts to be queried. The simple pattern is checked against the `name` of alerts and the combination of `name:status`, when status is one of `CLEAR`, `WARNING`, `CRITICAL`, `REMOVED`, `UNDEFINED`, `UNINITIALIZED`, of all the alerts of all the eligible instances (as filtered by all the above). A negative simple pattern will exclude the instances having the labels matched.<br>|
|dimensions|query|string(simple pattern)|false|A simple patterns matching the dimensions to be queried. The simple pattern is checked against and `id` and the `name` of the dimensions of the eligible instances (as filtered by all the above). Both positive and negative simple pattern expressions are supported.<br>|
|baseline_after|query|integer|false|`baseline_after` and `baseline_before` define the baseline time-frame of a comparative query. `baseline_after` can be a negative number of seconds, up to 3 years (-94608000), relative to `baseline_before`. If not set, it is usually assumed to be -300.<br>|
|baseline_before|query|integer|false|`baseline_after` and `baseline_before` define the baseline time-frame of a comparative query. `baseline_before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `baseline_before` is positive, it is assumed to be a unix epoch timestamp.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|tier|query|number(integer)|false|Use only the given dbengine tier for executing the query. Setting this parameters automatically sets the option `selected-tier` for the query.<br>|
|points|query|number(integer)|false|The number of points to be returned. If not given, or it is <= 0, or it is bigger than the points stored in the database for the given duration, all the available collected values for the given duration will be returned. For `weights` endpoints that do statistical analysis, the `points` define the detail of this analysis (the default is 500).<br>|
|timeout|query|number(integer)|false|Specify a timeout value in milliseconds after which the Agent will abort the query and return a 503 error. A value of 0 indicates no timeout.<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|time_group|query|string|false|Time aggregation function. If multiple collected values are to be grouped in order to return fewer points, this parameters defines the method of grouping. If the `absolute` option is set, the values are turned positive before applying this calculation.<br>|
|time_group_options|query|string|false|When the time grouping function supports additional parameters, this field can be used to pass them to it. `percentage-of-samples` (alias `countif`), `percentage-of-time`, `number-of-flaps` and `number-of-times` take a CONDITION; `trimmed-mean`, `trimmed-median` and `percentile` take a number.<br>A condition is an operator followed by a value. The operators are `>`, `>=` (or `>:`), `<`, `<=` (or `<:`), `=` (or `==` or `:`) and `!=` (or `!:`, `!` or `<>`); with no operator the value compares equal. The value is one of:<br>- a number, e.g. `>10`<br>- a gap token - `gap`, `nan`, `null` or `empty` are synonyms for "no data was collected", e.g. `==gap` matches the slots with no data and `!=gap` matches the collected ones. For `percentage-of-samples`, `number-of-flaps` and `number-of-times`, naming a gap token is what makes gaps participate at all; without one they are invisible for these three aggregations. `percentage-of-time` always counts uncollected time in its denominator, whatever the condition compares against.<br>- the previous collected sample - `previous` or `last`, e.g. `<previous` matches every sample lower than the one before it, which counts counter resets (reboots). Gaps are skipped, so a drop across a gap is still a drop, and the first sample of a query never matches.<br>An omitted, empty or whitespace-only condition means `==0`. An operator without a value applies to zero, so `>` means `>0`.<br>There are no and/or compounds.<br>Over a window long enough to read lower-resolution data `percentage-of-time`, `number-of-flaps` and `number-of-times` return estimates. `percentage-of-time` is exact over whole stored intervals for a fully collected 0-or-1 signal sampled at a steady cadence. Partial intervals, cadence changes and other signals or conditions are approximate. Gaps hidden inside a stored interval can overstate availability and understate missing time. `number-of-flaps` and `number-of-times` are exact only when each stored interval contains at most one relevant transition or match; otherwise they report at most one event for that interval. Every result bucket covering the same stored interval reports that interval's estimate. `percentage-of-time` always measures against the SELECTED duration, not against the collected part of it. When gaps remain separately represented in storage, uncollected time does not enter the numerator for a numeric condition, so a window with one matching sample and the rest missing answers a small percentage, not 100%. A condition such as `==gap` or `==null` includes uncollected time in the numerator instead. `percentage-of-samples` does not estimate and stays blind to gaps unless the condition names one - it evaluates each stored point as one sample. Use `tier=0` for the highest-resolution available result. When the response includes `db.per_tier`, such as with `format=json2`, inspect it to verify the selected tier; exactness still depends on the stored interval resolution.<br>|
|limit|query|integer|false|Returns at most N strongest physical time series, or N complete groups when group_by is used. Parent instance, context, and node rows do not count toward N and retain their complete-query summaries. No remaining bucket is added. All matching metrics are still evaluated and normalized before selection; this bounds response size, not query work or duration.<br><br>Raw scores and method=value rank higher values first. Normalized scores rank lower values first. Groups rank by the requested aggregation after complete aggregation. Equal scores use stable node/context/instance/dimension identities (group IDs for groups). Metric dictionaries include only retained entries; node metadata remains complete. correlated_dimensions and total_dimensions_count describe the complete query. A positive cap adds result_limit metadata with summary_scope=all.<br><br>Legacy v1 dimension objects retain their display-name keys. Duplicate display names can collapse in clients that decode these objects into maps; returned counts emitted physical entries, not unique display-name keys. The v2/v3 dimension dictionaries use metric IDs.<br><br>Omitted, empty, or zero means unlimited. Values must be nonnegative decimal integers within the Agent's size_t range; malformed, negative, fractional, and overflowing values return HTTP 400. Repeated values use the last nonempty value of each alias, but every nonempty supplied value must be valid. cardinality_limit takes precedence, including zero. Agents without weights result-limit support may ignore either parameter; clients must inspect result_limit before claiming that results were capped.<br>|
|cardinality_limit|query|integer|false|Alias of the weights limit parameter with identical strongest-result selection and complete-query summary semantics. Takes precedence over limit when both are supplied, including zero (unlimited). Unlike data-query cardinality_limit, it does not reserve a slot for a remaining bucket. See limit for validation, repeated-value, ranking, and compatibility behavior.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|method|ks2|
|method|volume|
|method|anomaly-rate|
|method|value|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|
|time_group|min|
|time_group|max|
|time_group|avg|
|time_group|average|
|time_group|median|
|time_group|stddev|
|time_group|sum|
|time_group|incremental-sum|
|time_group|ses|
|time_group|des|
|time_group|cv|
|time_group|percentage-of-samples|
|time_group|countif|
|time_group|percentage-of-time|
|time_group|number-of-flaps|
|time_group|number-of-times|
|time_group|percentile|
|time_group|percentile25|
|time_group|percentile50|
|time_group|percentile75|
|time_group|percentile80|
|time_group|percentile90|
|time_group|percentile95|
|time_group|percentile97|
|time_group|percentile98|
|time_group|percentile99|
|time_group|trimmed-mean|
|time_group|trimmed-mean1|
|time_group|trimmed-mean2|
|time_group|trimmed-mean3|
|time_group|trimmed-mean5|
|time_group|trimmed-mean10|
|time_group|trimmed-mean15|
|time_group|trimmed-mean20|
|time_group|trimmed-mean25|
|time_group|trimmed-median|
|time_group|trimmed-median1|
|time_group|trimmed-median2|
|time_group|trimmed-median3|
|time_group|trimmed-median5|
|time_group|trimmed-median10|
|time_group|trimmed-median15|
|time_group|trimmed-median20|
|time_group|trimmed-median25|
|time_group|ema|
|time_group|extremes|
|time_group|latest|

> Example responses

> 200 Response

```json
{
  "result_limit": {
    "limit": 1,
    "total": 0,
    "returned": 0,
    "unit": "dimensions",
    "truncated": true,
    "summary_scope": "all"
  },
  "correlated_dimensions": 0,
  "total_dimensions_count": 0
}
```

<h3 id="score-or-weight-all-or-some-of-the-metrics-across-all-nodes-according-to-various-algorithms-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object with weights for each context, chart and dimension.|[weights2](#schemaweights2)|
|400|Bad Request|The given parameters are invalid.|None|
|403|Forbidden|metrics correlations are not enabled on this Netdata Agent.|None|
|404|Not Found|No charts could be found, or the method that correlated the metrics did not produce any result.<br>|None|
|504|Gateway Timeout|Timeout - the query took too long and has been cancelled.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Score or weight all or some of the metrics of a single node, according to various algorithms.

<a id="opIdweights1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/weights \
  -H 'Accept: application/json'
```

`GET /api/v1/weights`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint goes through all metrics and scores them according to an algorithm.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="score-or-weight-all-or-some-of-the-metrics-of-a-single-node-according-to-various-algorithms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|method|query|string|false|The weighting / scoring algorithm.|
|context|query|string(as returned by /charts)|false|The context of the chart as returned by the /charts call.|
|baseline_after|query|integer|false|`baseline_after` and `baseline_before` define the baseline time-frame of a comparative query. `baseline_after` can be a negative number of seconds, up to 3 years (-94608000), relative to `baseline_before`. If not set, it is usually assumed to be -300.<br>|
|baseline_before|query|integer|false|`baseline_after` and `baseline_before` define the baseline time-frame of a comparative query. `baseline_before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `baseline_before` is positive, it is assumed to be a unix epoch timestamp.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|tier|query|number(integer)|false|Use only the given dbengine tier for executing the query. Setting this parameters automatically sets the option `selected-tier` for the query.<br>|
|points|query|number(integer)|false|The number of points to be returned. If not given, or it is <= 0, or it is bigger than the points stored in the database for the given duration, all the available collected values for the given duration will be returned. For `weights` endpoints that do statistical analysis, the `points` define the detail of this analysis (the default is 500).<br>|
|timeout|query|number(integer)|false|Specify a timeout value in milliseconds after which the Agent will abort the query and return a 503 error. A value of 0 indicates no timeout.<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|group|query|string|false|Time aggregation function. If multiple collected values are to be grouped in order to return fewer points, this parameters defines the method of grouping. If the `absolute` option is set, the values are turned positive before applying this calculation.<br>|
|group_options|query|string|false|When the time grouping function supports additional parameters, this field can be used to pass them to it. `percentage-of-samples` (alias `countif`), `percentage-of-time`, `number-of-flaps` and `number-of-times` take a CONDITION; `trimmed-mean`, `trimmed-median` and `percentile` take a number.<br>A condition is an operator followed by a value. The operators are `>`, `>=` (or `>:`), `<`, `<=` (or `<:`), `=` (or `==` or `:`) and `!=` (or `!:`, `!` or `<>`); with no operator the value compares equal. The value is one of:<br>- a number, e.g. `>10`<br>- a gap token - `gap`, `nan`, `null` or `empty` are synonyms for "no data was collected", e.g. `==gap` matches the slots with no data and `!=gap` matches the collected ones. For `percentage-of-samples`, `number-of-flaps` and `number-of-times`, naming a gap token is what makes gaps participate at all; without one they are invisible for these three aggregations. `percentage-of-time` always counts uncollected time in its denominator, whatever the condition compares against.<br>- the previous collected sample - `previous` or `last`, e.g. `<previous` matches every sample lower than the one before it, which counts counter resets (reboots). Gaps are skipped, so a drop across a gap is still a drop, and the first sample of a query never matches.<br>An omitted, empty or whitespace-only condition means `==0`. An operator without a value applies to zero, so `>` means `>0`.<br>There are no and/or compounds.<br>Over a window long enough to read lower-resolution data `percentage-of-time`, `number-of-flaps` and `number-of-times` return estimates. `percentage-of-time` is exact over whole stored intervals for a fully collected 0-or-1 signal sampled at a steady cadence. Partial intervals, cadence changes and other signals or conditions are approximate. Gaps hidden inside a stored interval can overstate availability and understate missing time. `number-of-flaps` and `number-of-times` are exact only when each stored interval contains at most one relevant transition or match; otherwise they report at most one event for that interval. Every result bucket covering the same stored interval reports that interval's estimate. `percentage-of-time` always measures against the SELECTED duration, not against the collected part of it. When gaps remain separately represented in storage, uncollected time does not enter the numerator for a numeric condition, so a window with one matching sample and the rest missing answers a small percentage, not 100%. A condition such as `==gap` or `==null` includes uncollected time in the numerator instead. `percentage-of-samples` does not estimate and stays blind to gaps unless the condition names one - it evaluates each stored point as one sample. Use `tier=0` for the highest-resolution available result. When the response includes `db.per_tier`, such as with `format=json2`, inspect it to verify the selected tier; exactness still depends on the stored interval resolution.<br>|
|limit|query|integer|false|Returns at most N strongest physical time series, or N complete groups when group_by is used. Parent instance, context, and node rows do not count toward N and retain their complete-query summaries. No remaining bucket is added. All matching metrics are still evaluated and normalized before selection; this bounds response size, not query work or duration.<br><br>Raw scores and method=value rank higher values first. Normalized scores rank lower values first. Groups rank by the requested aggregation after complete aggregation. Equal scores use stable node/context/instance/dimension identities (group IDs for groups). Metric dictionaries include only retained entries; node metadata remains complete. correlated_dimensions and total_dimensions_count describe the complete query. A positive cap adds result_limit metadata with summary_scope=all.<br><br>Legacy v1 dimension objects retain their display-name keys. Duplicate display names can collapse in clients that decode these objects into maps; returned counts emitted physical entries, not unique display-name keys. The v2/v3 dimension dictionaries use metric IDs.<br><br>Omitted, empty, or zero means unlimited. Values must be nonnegative decimal integers within the Agent's size_t range; malformed, negative, fractional, and overflowing values return HTTP 400. Repeated values use the last nonempty value of each alias, but every nonempty supplied value must be valid. cardinality_limit takes precedence, including zero. Agents without weights result-limit support may ignore either parameter; clients must inspect result_limit before claiming that results were capped.<br>|
|cardinality_limit|query|integer|false|Alias of the weights limit parameter with identical strongest-result selection and complete-query summary semantics. Takes precedence over limit when both are supplied, including zero (unlimited). Unlike data-query cardinality_limit, it does not reserve a slot for a remaining bucket. See limit for validation, repeated-value, ranking, and compatibility behavior.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|method|ks2|
|method|volume|
|method|anomaly-rate|
|method|value|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|
|group|min|
|group|max|
|group|avg|
|group|average|
|group|median|
|group|stddev|
|group|sum|
|group|incremental-sum|
|group|ses|
|group|des|
|group|cv|
|group|percentage-of-samples|
|group|countif|
|group|percentage-of-time|
|group|number-of-flaps|
|group|number-of-times|
|group|percentile|
|group|percentile25|
|group|percentile50|
|group|percentile75|
|group|percentile80|
|group|percentile90|
|group|percentile95|
|group|percentile97|
|group|percentile98|
|group|percentile99|
|group|trimmed-mean|
|group|trimmed-mean1|
|group|trimmed-mean2|
|group|trimmed-mean3|
|group|trimmed-mean5|
|group|trimmed-mean10|
|group|trimmed-mean15|
|group|trimmed-mean20|
|group|trimmed-mean25|
|group|trimmed-median|
|group|trimmed-median1|
|group|trimmed-median2|
|group|trimmed-median3|
|group|trimmed-median5|
|group|trimmed-median10|
|group|trimmed-median15|
|group|trimmed-median20|
|group|trimmed-median25|
|group|ema|
|group|extremes|
|group|latest|

> Example responses

> 200 Response

```json
{
  "result_limit": {
    "limit": 1,
    "total": 0,
    "returned": 0,
    "unit": "dimensions",
    "truncated": true,
    "summary_scope": "all"
  },
  "after": 0,
  "before": 0,
  "duration": 0,
  "points": 0,
  "baseline_after": 0,
  "baseline_before": 0,
  "baseline_duration": 0,
  "baseline_points": 0,
  "group": "string",
  "method": "string",
  "options": "string",
  "correlated_dimensions": null,
  "total_dimensions_count": 0,
  "statistics": {
    "query_time_ms": 0,
    "db_queries": 0,
    "db_points_read": 0,
    "query_result_points": 0,
    "binary_searches": 0
  },
  "contexts": {
    "property1": {
      "weight": 0,
      "charts": {
        "property1": {
          "weight": 0,
          "dimensions": {
            "property1": 0,
            "property2": 0
          }
        },
        "property2": {
          "weight": 0,
          "dimensions": {
            "property1": 0,
            "property2": 0
          }
        }
      }
    },
    "property2": {
      "weight": 0,
      "charts": {
        "property1": {
          "weight": 0,
          "dimensions": {
            "property1": 0,
            "property2": 0
          }
        },
        "property2": {
          "weight": 0,
          "dimensions": {
            "property1": 0,
            "property2": 0
          }
        }
      }
    }
  }
}
```

<h3 id="score-or-weight-all-or-some-of-the-metrics-of-a-single-node-according-to-various-algorithms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object with weights for each context, chart and dimension.|[weights](#schemaweights)|
|400|Bad Request|The given parameters are invalid.|None|
|403|Forbidden|metrics correlations are not enabled on this Netdata Agent.|None|
|404|Not Found|No charts could be found, or the method that correlated the metrics did not produce any result.|None|
|504|Gateway Timeout|Timeout - the query took too long and has been cancelled.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Analyze all the metrics to find their correlations - EOL

<a id="opIdmetricCorrelations1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/metric_correlations \
  -H 'Accept: application/json'
```

`GET /api/v1/metric_correlations`

<aside class="warning">
This operation is deprecated
</aside>

THIS ENDPOINT IS OBSOLETE. Use the /weights endpoint. Given two time-windows (baseline, highlight), it goes through all the available metrics, querying both windows and tries to find how these two windows relate to each other. It supports multiple algorithms to do so. The result is a list of all metrics evaluated, weighted for 0.0 (the two windows are more different) to 1.0 (the two windows are similar). The algorithm adjusts automatically the baseline window to be a power of two multiple of the highlighted (1, 2, 4, 8, etc).

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="analyze-all-the-metrics-to-find-their-correlations---eol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|method|query|string|false|The weighting / scoring algorithm.|
|baseline_after|query|integer|false|`baseline_after` and `baseline_before` define the baseline time-frame of a comparative query. `baseline_after` can be a negative number of seconds, up to 3 years (-94608000), relative to `baseline_before`. If not set, it is usually assumed to be -300.<br>|
|baseline_before|query|integer|false|`baseline_after` and `baseline_before` define the baseline time-frame of a comparative query. `baseline_before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `baseline_before` is positive, it is assumed to be a unix epoch timestamp.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|points|query|number(integer)|false|The number of points to be returned. If not given, or it is <= 0, or it is bigger than the points stored in the database for the given duration, all the available collected values for the given duration will be returned. For `weights` endpoints that do statistical analysis, the `points` define the detail of this analysis (the default is 500).<br>|
|tier|query|number(integer)|false|Use only the given dbengine tier for executing the query. Setting this parameters automatically sets the option `selected-tier` for the query.<br>|
|timeout|query|number(integer)|false|Specify a timeout value in milliseconds after which the Agent will abort the query and return a 503 error. A value of 0 indicates no timeout.<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|group|query|string|false|Time aggregation function. If multiple collected values are to be grouped in order to return fewer points, this parameters defines the method of grouping. If the `absolute` option is set, the values are turned positive before applying this calculation.<br>|
|group_options|query|string|false|When the time grouping function supports additional parameters, this field can be used to pass them to it. `percentage-of-samples` (alias `countif`), `percentage-of-time`, `number-of-flaps` and `number-of-times` take a CONDITION; `trimmed-mean`, `trimmed-median` and `percentile` take a number.<br>A condition is an operator followed by a value. The operators are `>`, `>=` (or `>:`), `<`, `<=` (or `<:`), `=` (or `==` or `:`) and `!=` (or `!:`, `!` or `<>`); with no operator the value compares equal. The value is one of:<br>- a number, e.g. `>10`<br>- a gap token - `gap`, `nan`, `null` or `empty` are synonyms for "no data was collected", e.g. `==gap` matches the slots with no data and `!=gap` matches the collected ones. For `percentage-of-samples`, `number-of-flaps` and `number-of-times`, naming a gap token is what makes gaps participate at all; without one they are invisible for these three aggregations. `percentage-of-time` always counts uncollected time in its denominator, whatever the condition compares against.<br>- the previous collected sample - `previous` or `last`, e.g. `<previous` matches every sample lower than the one before it, which counts counter resets (reboots). Gaps are skipped, so a drop across a gap is still a drop, and the first sample of a query never matches.<br>An omitted, empty or whitespace-only condition means `==0`. An operator without a value applies to zero, so `>` means `>0`.<br>There are no and/or compounds.<br>Over a window long enough to read lower-resolution data `percentage-of-time`, `number-of-flaps` and `number-of-times` return estimates. `percentage-of-time` is exact over whole stored intervals for a fully collected 0-or-1 signal sampled at a steady cadence. Partial intervals, cadence changes and other signals or conditions are approximate. Gaps hidden inside a stored interval can overstate availability and understate missing time. `number-of-flaps` and `number-of-times` are exact only when each stored interval contains at most one relevant transition or match; otherwise they report at most one event for that interval. Every result bucket covering the same stored interval reports that interval's estimate. `percentage-of-time` always measures against the SELECTED duration, not against the collected part of it. When gaps remain separately represented in storage, uncollected time does not enter the numerator for a numeric condition, so a window with one matching sample and the rest missing answers a small percentage, not 100%. A condition such as `==gap` or `==null` includes uncollected time in the numerator instead. `percentage-of-samples` does not estimate and stays blind to gaps unless the condition names one - it evaluates each stored point as one sample. Use `tier=0` for the highest-resolution available result. When the response includes `db.per_tier`, such as with `format=json2`, inspect it to verify the selected tier; exactness still depends on the stored interval resolution.<br>|
|limit|query|integer|false|Returns at most N strongest physical time series, or N complete groups when group_by is used. Parent instance, context, and node rows do not count toward N and retain their complete-query summaries. No remaining bucket is added. All matching metrics are still evaluated and normalized before selection; this bounds response size, not query work or duration.<br><br>Raw scores and method=value rank higher values first. Normalized scores rank lower values first. Groups rank by the requested aggregation after complete aggregation. Equal scores use stable node/context/instance/dimension identities (group IDs for groups). Metric dictionaries include only retained entries; node metadata remains complete. correlated_dimensions and total_dimensions_count describe the complete query. A positive cap adds result_limit metadata with summary_scope=all.<br><br>Legacy v1 dimension objects retain their display-name keys. Duplicate display names can collapse in clients that decode these objects into maps; returned counts emitted physical entries, not unique display-name keys. The v2/v3 dimension dictionaries use metric IDs.<br><br>Omitted, empty, or zero means unlimited. Values must be nonnegative decimal integers within the Agent's size_t range; malformed, negative, fractional, and overflowing values return HTTP 400. Repeated values use the last nonempty value of each alias, but every nonempty supplied value must be valid. cardinality_limit takes precedence, including zero. Agents without weights result-limit support may ignore either parameter; clients must inspect result_limit before claiming that results were capped.<br>|
|cardinality_limit|query|integer|false|Alias of the weights limit parameter with identical strongest-result selection and complete-query summary semantics. Takes precedence over limit when both are supplied, including zero (unlimited). Unlike data-query cardinality_limit, it does not reserve a slot for a remaining bucket. See limit for validation, repeated-value, ranking, and compatibility behavior.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|method|ks2|
|method|volume|
|method|anomaly-rate|
|method|value|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|
|group|min|
|group|max|
|group|avg|
|group|average|
|group|median|
|group|stddev|
|group|sum|
|group|incremental-sum|
|group|ses|
|group|des|
|group|cv|
|group|percentage-of-samples|
|group|countif|
|group|percentage-of-time|
|group|number-of-flaps|
|group|number-of-times|
|group|percentile|
|group|percentile25|
|group|percentile50|
|group|percentile75|
|group|percentile80|
|group|percentile90|
|group|percentile95|
|group|percentile97|
|group|percentile98|
|group|percentile99|
|group|trimmed-mean|
|group|trimmed-mean1|
|group|trimmed-mean2|
|group|trimmed-mean3|
|group|trimmed-mean5|
|group|trimmed-mean10|
|group|trimmed-mean15|
|group|trimmed-mean20|
|group|trimmed-mean25|
|group|trimmed-median|
|group|trimmed-median1|
|group|trimmed-median2|
|group|trimmed-median3|
|group|trimmed-median5|
|group|trimmed-median10|
|group|trimmed-median15|
|group|trimmed-median20|
|group|trimmed-median25|
|group|ema|
|group|extremes|
|group|latest|

> Example responses

> 200 Response

```json
{
  "result_limit": {
    "limit": 1,
    "total": 0,
    "returned": 0,
    "unit": "dimensions",
    "truncated": true,
    "summary_scope": "all"
  },
  "after": 0,
  "before": 0,
  "duration": 0,
  "points": 0,
  "baseline_after": 0,
  "baseline_before": 0,
  "baseline_duration": 0,
  "baseline_points": 0,
  "group": "string",
  "method": "string",
  "options": "string",
  "correlated_dimensions": null,
  "total_dimensions_count": 0,
  "statistics": {
    "query_time_ms": 0,
    "db_queries": 0,
    "db_points_read": 0,
    "query_result_points": 0,
    "binary_searches": 0
  },
  "correlated_charts": {
    "chart-id1": {
      "context": "string",
      "dimensions": {
        "dimension1-name": 0,
        "dimension2-name": 0
      }
    },
    "chart-id2": {
      "context": "string",
      "dimensions": {
        "dimension1-name": 0,
        "dimension2-name": 0
      }
    }
  }
}
```

<h3 id="analyze-all-the-metrics-to-find-their-correlations---eol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object with weights for each chart and dimension.|[metric_correlations](#schemametric_correlations)|
|400|Bad Request|The given parameters are invalid.|None|
|403|Forbidden|metrics correlations are not enabled on this Netdata Agent.|None|
|404|Not Found|No charts could be found, or the method that correlated the metrics did not produce any result.|None|
|504|Gateway Timeout|Timeout - the query took too long and has been cancelled.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

<h1 id="netdata-api-functions">functions</h1>

Everything related to functions

## Track progress of long-running function executions

<a id="opIdprogress3"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v3/progress?transaction=550e8400-e29b-41d4-a716-446655440000' \
  -H 'Accept: application/json'
```

`GET /api/v3/progress`

Monitors the progress of long-running Netdata function executions identified by a transaction ID.
When executing functions that may take significant time (e.g., data collection, analysis, exports),
this endpoint allows clients to poll for progress updates and track completion status.

**Function Execution Flow:**
1. Client initiates a function execution (e.g., via `/api/v3/function`)
2. Function returns immediately with a transaction ID
3. Client polls `/api/v3/progress?transaction=<id>` for status updates
4. Progress endpoint returns completion percentage and status
5. When complete, client retrieves final results

**Progress Information Includes:**
- **Percentage complete**: 0-100% progress indicator
- **Status**: running, completed, failed, cancelled
- **Message**: Human-readable status description
- **Remaining time estimate**: If available

**Use Cases:**
- **Long data exports**: Track progress of large data export operations
- **Analysis functions**: Monitor CPU-intensive analysis tasks
- **Batch operations**: Track multi-step batch processing
- **User experience**: Provide progress feedback in UI applications

**Polling Best Practices:**
- Poll every 1-2 seconds for responsive updates
- Implement exponential backoff for completed/failed states
- Set reasonable timeouts (functions may take minutes)
- Handle cancellation gracefully

**Common Usage Patterns:**

1. **Poll for function progress:**
   ```
   /api/v3/progress?transaction=550e8400-e29b-41d4-a716-446655440000
   ```

2. **Integration with function execution:**
   ```javascript
   // 1. Start function
   const response = await fetch('/api/v3/function?...');
   const { transaction } = await response.json();

   // 2. Poll for progress
   const interval = setInterval(async () => {
     const progress = await fetch(`/api/v3/progress?transaction=${transaction}`);
     const { percentage, status } = await progress.json();

     if (status === 'completed') {
       clearInterval(interval);
       // Fetch final results
     }
   }, 1000);
   ```

**Transaction ID Format:**
- UUID v4 format: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`
- Returned by function execution endpoints
- Valid for the lifetime of the function execution
- Expires after completion or timeout

**Security & Access Control:**
- **Route ACL:** `HTTP_ACL_NOCHECK` skips only this endpoint's route-table ACL comparison
- **Bearer Protection:** This route requires `HTTP_ACCESS_ANONYMOUS_DATA`; when bearer protection is enabled, an unauthenticated request is rejected
- **Connection/IP Admission:** Direct HTTP remains subject to `allow connections from`, listener/port ACLs, and coarse API admission
- **Callback:** No additional authorization check is applied after the route gates


<h3 id="track-progress-of-long-running-function-executions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction|query|string(uuid)|true|Transaction ID (UUID) of the function execution to track. This ID is returned<br>when initiating a function execution via `/api/v3/function` or similar endpoints.<br><br>**UUID Format:**<br>- Standard UUID v4 format<br>- Example: `550e8400-e29b-41d4-a716-446655440000`<br>- Case-insensitive<br><br>**Transaction Lifecycle:**<br>- **Created**: When function execution starts<br>- **Active**: While function is running<br>- **Expired**: After completion, failure, or timeout<br>- **Retention**: Transaction state kept briefly after completion for final status retrieval<br><br>**Invalid Transaction Handling:**<br>- Missing transaction: Returns 400 Bad Request<br>- Malformed UUID: Returns 400 Bad Request<br>- Expired transaction: Returns 404 Not Found<br>- Unknown transaction: Returns 404 Not Found<br>|

> Example responses

> 200 Response

```json
{
  "transaction": "550e8400-e29b-41d4-a716-446655440000",
  "status": "running",
  "percentage": 45,
  "message": "Processing data...",
  "done": 450,
  "all": 1000,
  "eta_seconds": 30
}
```

<h3 id="track-progress-of-long-running-function-executions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved progress information for the transaction.<br><br>Returns current progress status including percentage complete, state, and optional message.<br>|Inline|
|400|Bad Request|Bad request. Common causes:<br>- Missing transaction parameter<br>- Malformed UUID format<br>- Invalid transaction ID format<br>|None|
|404|Not Found|Transaction not found. Possible reasons:<br>- Transaction ID does not exist<br>- Transaction has expired (completed/failed long ago)<br>- Transaction was never created<br>|None|
|500|Internal Server Error|Internal server error during progress tracking.|None|

<h3 id="track-progress-of-long-running-function-executions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction|string(uuid)|false|none|The transaction ID being tracked|
|status|string|false|none|Current status of the function execution|
|percentage|integer|false|none|Completion percentage (0-100)|
|message|string|false|none|Human-readable status message or error description|
|done|integer|false|none|Number of items processed (if applicable)|
|all|integer|false|none|Total number of items to process (if applicable)|
|eta_seconds|integer|false|none|Estimated time remaining in seconds (if available)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|status|completed|
|status|failed|
|status|cancelled|

<aside class="success">
This operation does not require authentication
</aside>

## Execute a Netdata function on a specific node

<a id="opIdfunction3"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v3/function?function=processes' \
  -H 'Accept: application/json'
```

`GET /api/v3/function`

Executes a named function on a Netdata agent to retrieve live information or trigger actions.
Functions are plugin-provided operations that can query system state, collect real-time data,
or perform administrative tasks.

**What are Netdata Functions?**
Functions extend Netdata beyond passive metric collection by allowing:
- **Live data queries**: Get current system state (processes, connections, services)
- **Interactive diagnostics**: Run on-demand checks and analysis
- **Administrative operations**: Trigger actions like cache clearing or config reloading
- **Plugin-specific features**: Access specialized capabilities provided by plugins

**Common Functions Include:**
- `systemd-list-units` - List systemd services and their status
- `processes` - List currently running processes with resource usage
- `network-connections` - Show active network connections
- `mount-points` - Display mounted filesystems
- `docker-containers` - List Docker containers (if Docker plugin enabled)
- Many more plugin-specific functions

**Function Discovery:**
Use `/api/v3/functions` to discover available functions on each node.

**Execution Model:**
- Functions execute on the target node's agent
- Results are collected and returned in real-time
- Long-running functions return a transaction ID for progress tracking
- Functions may require specific permissions or capabilities

**Use Cases:**
- **System diagnostics**: Query live system state for troubleshooting
- **Capacity planning**: Get current resource utilization details
- **Security auditing**: List processes, connections, open ports
- **Service management**: Check service status across infrastructure
- **Interactive dashboards**: Provide drill-down capabilities

**Common Usage Patterns:**

1. **List running processes:**
   ```
   /api/v3/function?function=processes
   ```

2. **List systemd services:**
   ```
   /api/v3/function?function=systemd-list-units&timeout=30
   ```

3. **Get network connections:**
   ```
   /api/v3/function?function=network-connections
   ```

4. **Execute with custom timeout for slow operations:**
   ```
   /api/v3/function?function=docker-containers&timeout=60
   ```

**Function Response Formats:**
- Most functions return JSON data
- Some may return plain text or formatted output
- Check Content-Type header for response format
- Long operations may return transaction ID for `/api/v3/progress` polling

**Security Considerations:**
- Functions respect user authentication and authorization
- Some functions may require elevated permissions
- Function execution is subject to ACL checks
- Sensitive operations may be restricted by configuration

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="execute-a-netdata-function-on-a-specific-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|function|query|string|true|Name of the function to execute. Each Netdata plugin can provide multiple functions<br>with different capabilities.<br><br>**Function Names:**<br>- Kebab-case naming: `function-name-here`<br>- Provided by plugins: different plugins provide different functions<br>- Discoverable via `/api/v3/functions` endpoint<br>- Case-sensitive<br><br>**Common Built-in Functions:**<br>- `systemd-list-units` - List systemd services<br>- `processes` - Running processes with CPU/memory usage<br>- `network-connections` - Active network connections and sockets<br>- `mount-points` - Mounted filesystems and usage<br>- `ipmi-sensors` - IPMI hardware sensors (if available)<br><br>**Plugin-Specific Functions:**<br>- Docker plugin: `docker-containers`, `docker-images`<br>- Apps plugin: `apps-processes`<br>- Logs plugin: `logs-query`<br>- And many more depending on enabled plugins<br><br>**Invalid Function Names:**<br>- Missing function: Returns 400 Bad Request<br>- Unknown function: Returns 404 Not Found or function-specific error<br>- Disabled function: Returns 403 Forbidden<br>|
|timeout|query|integer|false|Maximum time in seconds to wait for function execution before timing out.<br>Different functions have different execution times.<br><br>**Timeout Guidelines by Function Type:**<br>- **Fast queries** (< 1s): processes, mount-points<br>  Recommended: 10-30 seconds<br>- **Medium queries** (1-5s): systemd-list-units, network-connections<br>  Recommended: 30-60 seconds<br>- **Slow operations** (5-30s): docker operations, log queries<br>  Recommended: 60-300 seconds<br><br>**Timeout Behavior:**<br>- If execution completes before timeout: Returns results immediately<br>- If timeout expires: Function is cancelled and error returned<br>- For async functions: Returns transaction ID immediately, timeout applies to overall operation<br><br>**Best Practices:**<br>- Set conservative timeouts for production systems<br>- Consider network latency for remote nodes<br>- Monitor timeout errors and adjust accordingly<br>|

> Example responses

> 200 Response

```json
{
  "processes": [
    {
      "pid": 1234,
      "name": "nginx",
      "cpu": 2.5,
      "memory": 45678
    },
    {
      "pid": 5678,
      "name": "postgres",
      "cpu": 15.3,
      "memory": 234567
    }
  ]
}
```

> 202 Response

```json
{
  "transaction": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "message": "string"
}
```

<h3 id="execute-a-netdata-function-on-a-specific-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Function executed successfully and returned results.<br><br>The response format depends on the specific function:<br>- Most functions return JSON data<br>- Some return plain text or formatted output<br>- Check Content-Type header<br>|Inline|
|202|Accepted|Function execution started asynchronously. Use the returned transaction ID<br>to poll `/api/v3/progress` for status and results.<br>|Inline|
|400|Bad Request|Bad request. Common causes:<br>- Missing required `function` parameter<br>- Invalid function name format<br>- Invalid request body for the function<br>|None|
|403|Forbidden|Forbidden. Possible reasons:<br>- Function requires higher permissions than current user has<br>- Function is disabled in configuration<br>- ACL restrictions prevent execution<br>|None|
|404|Not Found|Function not found. The specified function does not exist or is not available on this node.<br>|None|
|500|Internal Server Error|Internal server error during function execution.|None|
|503|Service Unavailable|Service unavailable. Netdata agent is not ready or function execution system is overloaded.<br>|None|
|504|Gateway Timeout|Function execution timeout - operation took longer than specified timeout.|None|

<h3 id="execute-a-netdata-function-on-a-specific-node-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction|string(uuid)|false|none|Transaction ID for progress tracking|
|message|string|false|none|Status message|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Execute a Netdata function with request body parameters

<a id="opIdfunction3_post"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v3/function?function=processes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /api/v3/function`

Same as GET /api/v3/function, but allows passing parameters via request body for functions
that require complex input or configuration data.

Use this method when:
- Function requires complex parameters that don't fit in query string
- Passing sensitive data that shouldn't be in URL
- Function accepts JSON configuration or structured data

See GET /api/v3/function for complete documentation on functions, timeouts, and responses.


> Body parameter

```json
{}
```

<h3 id="execute-a-netdata-function-with-request-body-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|function|query|string|true|Name of the function to execute (see GET method for details)|
|timeout|query|integer|false|Maximum time in seconds to wait for function execution (see GET method for details)|
|body|body|object|false|Optional request body for functions that accept parameters or configuration.<br>The format and content depend on the specific function being executed.<br><br>**When to Use Request Body:**<br>- Functions that accept filtering parameters<br>- Functions that need configuration data<br>- Functions with complex input requirements<br><br>**Common Patterns:**<br>- JSON object with function-specific parameters<br>- Plain text for simple commands<br>- Format specified by function documentation<br><br>**Example for logs-query function:**<br>```json<br>{<br>  "after": -3600,<br>  "before": 0,<br>  "filter": "error",<br>  "limit": 100<br>}<br>```<br>|

> Example responses

> 200 Response

```json
{}
```

<h3 id="execute-a-netdata-function-with-request-body-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Function executed successfully (see GET method for response details)|Inline|
|202|Accepted|Function execution started asynchronously (see GET method for details)|None|
|400|Bad Request|Bad request (see GET method for details)|None|
|403|Forbidden|Forbidden (see GET method for details)|None|
|404|Not Found|Function not found (see GET method for details)|None|
|500|Internal Server Error|Internal server error (see GET method for details)|None|
|503|Service Unavailable|Service unavailable (see GET method for details)|None|
|504|Gateway Timeout|Function execution timeout (see GET method for details)|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## List available functions across all nodes

<a id="opIdfunctions3"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/functions \
  -H 'Accept: application/json'
```

`GET /api/v3/functions`

Retrieves a catalog of available functions across the monitored infrastructure.
Functions are plugin-provided operations that extend Netdata's capabilities beyond
passive metric collection, allowing live queries, diagnostics, and administrative actions.

**What This Endpoint Returns:**
- **Function inventory**: All functions available across your nodes
- **Per-node availability**: Which functions each node supports
- **Function metadata**: Descriptions, parameters, requirements
- **Plugin information**: Which plugin provides each function

**Function Categories:**
- **System queries**: processes, mount-points, network-connections
- **Service management**: systemd-list-units, docker-containers
- **Hardware**: ipmi-sensors, smart-disk-info
- **Application-specific**: mysql-queries, redis-info, nginx-status
- **Diagnostics**: performance-analysis, log-queries
- **Administrative**: config-reload, cache-clear

**Use Cases:**
- **Capability discovery**: Determine what operations are available
- **Multi-node comparison**: See which nodes support which functions
- **Plugin verification**: Confirm plugins are loaded and functional
- **UI generation**: Build dynamic interfaces based on available functions
- **Documentation**: Generate function reference for your infrastructure

**Common Usage Patterns:**

1. **List all functions across all nodes:**
   ```
   /api/v3/functions
   ```

2. **Functions for specific nodes:**
   ```
   /api/v3/functions?nodes=web-*
   ```

3. **Scope to production infrastructure:**
   ```
   /api/v3/functions?scope_nodes=prod-*
   ```

4. **Get detailed function information:**
   ```
   /api/v3/functions?options=debug
   ```

**Response Organization:**
Results grouped by:
- **Node**: Functions available on each node
- **Function name**: Unique identifier
- **Plugin**: Source plugin providing the function
- **Capabilities**: What the function can do

**Integration with /api/v3/function:**
1. Use `/api/v3/functions` to discover available functions
2. Use `/api/v3/function?function=<name>` to execute specific functions
3. Results tell you which nodes support which operations

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="list-available-functions-across-all-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string|false|Simple pattern to match node hostnames for scope filtering. Uses Netdata's simple pattern<br>matching (not regex). Matched nodes define the scope for function discovery.<br><br>**Pattern Syntax:**<br>- `*` matches any number of characters<br>- Use `\|` to separate multiple patterns (OR logic)<br>- Matches are case-insensitive<br>- No regex support - only simple wildcards<br><br>**Examples:**<br>- `prod-*` - All production nodes<br>- `*-web-*` - All web server nodes<br>- `db-*\|cache-*` - All database or cache nodes<br>- `*` - All nodes (default)<br>|
|nodes|query|string|false|Simple pattern to filter which nodes to include in the functions list.<br>After scope is determined, this filters the results. Uses the same pattern syntax as scope_nodes.<br><br>**Difference from scope_nodes:**<br>- `scope_nodes` defines what nodes to query for functions<br>- `nodes` filters which nodes appear in the output<br><br>**Examples:**<br>- `web-*` - Only show functions from web servers<br>- Specific hostnames: `node1\|node2\|node3`<br>|
|options|query|string|false|Comma-separated list of options to control response content and format.<br><br>**Available Options:**<br>- `minify` - Minimize JSON output (no pretty-printing)<br>- `debug` - Include detailed function metadata and plugin information<br>- `raw` - Include raw function definitions<br><br>**Examples:**<br>- `minify` - Compact JSON response<br>- `debug,raw` - Full debug information<br>|
|timeout|query|integer|false|Maximum time in seconds to wait for the query to complete before timing out.<br><br>**Guidelines:**<br>- Recommended: 10-30 seconds for most queries<br>- Function listing is usually fast<br>- Timeout mainly applies to very large infrastructures<br>|
|cardinality|query|integer|false|Maximum number of nodes to include in the response to prevent overwhelming large responses.<br>When this limit is exceeded, the response will indicate how many nodes were omitted.<br><br>**Purpose:**<br>- Prevent memory exhaustion from very large infrastructures<br>- Control response size for performance<br>- Useful when exploring large node sets incrementally<br><br>**Recommendations:**<br>- Small infrastructures (< 100 nodes): Use default<br>- Medium infrastructures (100-1000 nodes): 500-1000<br>- Large infrastructures (> 1000 nodes): Use filtering or increase limit carefully<br>|

> Example responses

> 200 Response

```json
{
  "nodes": [
    {
      "hostname": "web-server-1",
      "machine_guid": "12345678-1234-1234-1234-123456789012",
      "functions": [
        {
          "name": "processes",
          "plugin": "apps.plugin",
          "description": "List running processes with resource usage"
        },
        {
          "name": "systemd-list-units",
          "plugin": "systemd.plugin",
          "description": "List systemd services and their status"
        },
        {
          "name": "network-connections",
          "plugin": "network.plugin",
          "description": "Show active network connections"
        }
      ]
    }
  ]
}
```

<h3 id="list-available-functions-across-all-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved functions catalog.<br><br>Returns available functions organized by node, with metadata about each function<br>including name, description, plugin source, and parameter requirements.<br>|Inline|
|400|Bad Request|Invalid parameters provided (e.g., invalid pattern syntax).|None|
|500|Internal Server Error|Internal server error during functions listing.|None|
|504|Gateway Timeout|Query timeout - functions collection took too long.|None|

<h3 id="list-available-functions-across-all-nodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodes|[object]|false|none|Array of nodes with their available functions|
|» hostname|string|false|none|Node hostname|
|» machine_guid|string|false|none|Unique node identifier|
|» functions|[object]|false|none|Functions available on this node|
|» » name|string|false|none|Function name|
|» » plugin|string|false|none|Plugin providing this function|
|» » description|string|false|none|Human-readable function description|
|» » parameters|[object]|false|none|Required or optional parameters|
|» » » name|string|false|none|none|
|» » » required|boolean|false|none|none|
|» » » description|string|false|none|none|
|omitted|integer|false|none|Number of nodes omitted due to cardinality limit|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## OBSOLETE: Track async operation progress (use /api/v3/progress instead)

<a id="opIdprogress2"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v2/progress?transaction=497f6eca-6276-4993-bfeb-53cbbbba6f08'
```

`GET /api/v2/progress`

<aside class="warning">
This operation is deprecated
</aside>

**⚠️ OBSOLETE API - Will be removed in future versions**

This endpoint is deprecated. Use `/api/v3/progress` instead, which provides the same functionality.

**Migration:** Replace `/api/v2/progress` with `/api/v3/progress` in all API calls.

Tracks progress of long-running asynchronous operations using transaction UUID.
Used for polling function execution status and completion percentage.

**Security & Access Control:**
- **Route ACL:** `HTTP_ACL_NOCHECK` skips only this endpoint's route-table ACL comparison
- **Bearer Protection:** This route requires `HTTP_ACCESS_ANONYMOUS_DATA`; when bearer protection is enabled, an unauthenticated request is rejected
- **Connection/IP Admission:** Direct HTTP remains subject to `allow connections from`, listener/port ACLs, and coarse API admission
- **Callback:** No additional authorization check is applied after the route gates


<h3 id="obsolete-track-async-operation-progress-use-apiv3progress-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction|query|string(uuid)|true|Transaction UUID from async operation|

<h3 id="obsolete-track-async-operation-progress-use-apiv3progress-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Progress information successfully retrieved|None|
|400|Bad Request|Missing or invalid transaction parameter|None|

<aside class="success">
This operation does not require authentication
</aside>

## OBSOLETE: List available functions (use /api/v3/functions instead)

<a id="opIdfunctions2"></a>

> Code samples

```bash
curl http://localhost:19999/api/v2/functions
```

`GET /api/v2/functions`

<aside class="warning">
This operation is deprecated
</aside>

**⚠️ OBSOLETE API - Will be removed in future versions**

This endpoint is deprecated. Use `/api/v3/functions` instead, which provides the same functionality.

**Migration:** Replace `/api/v2/functions` with `/api/v3/functions` in all API calls.

Lists all functions available on agents, including their descriptions, parameters, and capabilities.
Functions provide live operational data and diagnostic capabilities.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="obsolete-list-available-functions-use-apiv3functions-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|timeout|query|number(integer)|false|Specify a timeout value in milliseconds after which the Agent will abort the query and return a 503 error. A value of 0 indicates no timeout.<br>|
|cardinality_limit|query|integer(int64)|false|Limits the number of unique items returned, to prevent excessive memory usage and response sizes when a request matches a large number of items. For data queries, the query engine keeps the top contributing dimensions and folds the rest into one `remaining` aggregate dimension, so the total number of returned dimensions equals this limit; the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) stays complete unless the `cardinality-limit-all` option is also given. Other endpoints (alerts, contexts) apply this limit to their own result items. Weights endpoints define separate result-limit semantics.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|

<h3 id="obsolete-list-available-functions-use-apiv3functions-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Functions list successfully retrieved|None|
|400|Bad Request|Invalid parameters|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## function1

<a id="opIdfunction1"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v1/function?function=string'
```

`GET /api/v1/function`

<aside class="warning">
This operation is deprecated
</aside>

|

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="function1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|function|query|string|true|The name of the function, as returned by the collector.|
|timeout|query|number(integer)|false|Specify a timeout value in seconds after which the Agent will abort the query and return a 504 error. A value of 0 indicates no timeout, but some endpoints, like `weights`, do not accept infinite timeouts (they have a predefined default), so to disable the timeout it must be set to a really high value.<br>|

<h3 id="function1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The collector function has been executed successfully. Each collector may return a different type of content.|None|
|400|Bad Request|The request was rejected by the collector.|None|
|404|Not Found|The requested function is not found.|None|
|500|Internal Server Error|Other internal error, getting this error means there is a bug in Netdata.|None|
|503|Service Unavailable|The collector to execute the function is not currently available.|None|
|504|Gateway Timeout|Timeout while waiting for the collector to execute the function.|None|
|591|591|The collector sent a response, but it was invalid or corrupted.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Get a list of all registered collector functions.

<a id="opIdfunctions1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/functions
```

`GET /api/v1/functions`

<aside class="warning">
This operation is deprecated
</aside>

Collector functions are programs that can be executed on demand.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="get-a-list-of-all-registered-collector-functions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing one object per supported function.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

<h1 id="netdata-api-alerts">alerts</h1>

Everything related to alerts

## Current Alert Status - Multi-node Alert Information - Latest API

<a id="opIdalerts3"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/alerts \
  -H 'Accept: application/json'
```

`GET /api/v3/alerts`

Returns the current status of all alerts across all nodes monitored by this Netdata agent.

This is the latest version (v3) of the alerts API. It provides the same functionality as v2 but may include additional features in the future.

**What This API Provides:**
- Current state of all active, warning, and critical alerts
- Alert values and thresholds
- Alert configuration summaries
- Multi-node alert aggregation
- Filtering by alert name, context, node, or status

**Use Cases:**
- Dashboard alert widgets showing current system health
- Alert management interfaces
- Integration with external alerting systems
- Monitoring alert coverage across infrastructure
- Finding all alerts in specific states (warning/critical)

**Response Content:**
The response includes comprehensive information about alerts including their current values, configured thresholds, time in current state, and associated context/chart information.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="current-alert-status---multi-node-alert-information---latest-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|scope_contexts|query|string(simple pattern)|false|A simple pattern limiting the contexts scope of the query. The scope controls both data and metadata response. The default contexts scope is all contexts for which this Agent has data for. Usually the contexts scope is used to slice data on the dashboard (e.g. each context based chart has its own contexts scope, limiting the chart to all the instances of the selected context). Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|contexts|query|string(simple pattern)|false|A simple pattern matching the contexts to be queried. This only controls the data response, not the metadata. Both positive and negative simple pattern expressions are supported.<br>|
|alert|query|string|false|Filter alerts by alert name pattern. Uses Netdata simple pattern matching.<br><br>**Pattern Syntax:**<br>- Exact match: `cpu_usage`<br>- Wildcard: `cpu_*` (all CPU-related alerts)<br>- Multiple patterns: `cpu_* ram_*` (space-separated)<br>- Negation: `!cpu_usage` (all except this alert)<br><br>**Common Alert Names:**<br>- `ram_in_use` - RAM utilization<br>- `disk_space_usage` - Disk space<br>- `10min_cpu_usage` - CPU usage over 10 minutes<br>- `tcp_listen_overflows` - TCP connection queue overflows<br>- `disk_backlog` - Disk I/O backlog<br><br>When not specified, all alerts are included.<br><br>**Examples:**<br>- `alert=ram_in_use` - Only RAM usage alert<br>- `alert=*cpu*` - All CPU-related alerts<br>- `alert=* !*_critical` - All alerts except those ending with _critical<br>|
|status|query|string|false|Filter alerts by their current status. Can specify multiple statuses.<br><br>**Alert Statuses:**<br>- `CRITICAL` - Alert is in critical state (highest severity)<br>- `WARNING` - Alert is in warning state<br>- `CLEAR` - Alert is in normal state (not triggered)<br>- `UNDEFINED` - Alert could not be evaluated (e.g., division by zero, missing data)<br>- `UNINITIALIZED` - Alert has not been evaluated yet (no data collected)<br><br>**Multiple Statuses:**<br>To show multiple statuses, separate them with commas: `status=CRITICAL,WARNING`<br><br>**Use Cases:**<br>- `status=CRITICAL` - Show only critical alerts requiring immediate attention<br>- `status=CRITICAL,WARNING` - Show all alerts that need attention<br>- `status=CLEAR` - Show alerts that are currently in normal state<br>- Not specified - Show alerts in all states<br><br>**Default:** When not specified, typically returns only alerts in WARNING or CRITICAL state (this depends on options parameter).<br>|
|options|query|string|false|Comma or pipe-separated list of options to control response content.<br><br>**Alert-Specific Options:**<br>- `summary` - Include summary counters (total alerts, by status, by type)<br><br>**General Options:**<br>- `contexts` - Include context information<br>- `instances` - Include alert instance details<br>- `values` - Include current alert values<br>- `configurations` - Include alert configuration details<br><br>**Examples:**<br>- `options=summary` - Include alert count summaries<br>- `options=summary,values` - Summaries and current values<br>- `options=summary\|configurations` - Summaries and configs (pipe separator)<br><br>When not specified, returns basic alert information without detailed configs or summaries.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|timeout|query|integer(int64)|false|Maximum time in milliseconds to wait for the query to complete.<br><br>This is useful for preventing long-running queries from blocking when querying large infrastructures with many nodes and alerts.<br><br>**Format:** Integer (milliseconds)<br><br>**Default:** Server default timeout (typically 30000ms = 30 seconds)<br><br>**Examples:**<br>- `timeout=5000` - 5 second timeout<br>- `timeout=60000` - 60 second timeout<br><br>When the timeout is exceeded, the server returns a partial result with whatever data was collected before the timeout.<br>|
|cardinality|query|integer|false|Limit the number of alert instances returned to prevent response explosion.<br><br>When monitoring large infrastructures, some alert types may have hundreds or thousands of instances (e.g., disk space alerts for every disk on every node).<br><br>This parameter limits the number of unique alert instances in the response.<br><br>**Format:** Integer (maximum number of alert instances)<br><br>**Default:** No limit<br><br>**Use Cases:**<br>- Preventing huge responses when there are many alert instances<br>- Getting a sample of alerts rather than complete list<br>- Dashboard widgets with limited display space<br><br>**Example:**<br>- `cardinality=100` - Return at most 100 alert instances<br><br>**Alias:** Can also be specified as `cardinality_limit`<br><br>When the limit is exceeded, the response may indicate how many alerts were omitted.<br>|

> Example responses

> 200 Response

```json
{}
```

<h3 id="current-alert-status---multi-node-alert-information---latest-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Returns current alert status information.<br><br>**Response Structure:**<br>- Summary counters (when options=summary): counts by status, type, classification<br>- Alert instances with their current states<br>- Alert values and thresholds (when options=values)<br>- Alert configurations (when options=configurations)<br>- Node and context associations<br><br>The response is grouped by contexts and includes metadata about each alert including its current status, value, time in current state, and associated chart/dimension.<br><br>**Response Characteristics:**<br>- JSON format<br>- Not cacheable (alerts change frequently)<br>- May include partial results if timeout is exceeded<br>- Cardinality-limited if specified<br>|Inline|
|400|Bad Request|Bad request. Common causes:<br>- Invalid parameter values<br>- Malformed filter patterns<br>- Invalid status values<br>- Invalid timeout or cardinality values<br>|None|
|500|Internal Server Error|Internal server error. Usually indicates the server is out of memory.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Retrieve alert state transition history across all nodes with advanced filtering

<a id="opIdalert_transitions_v3"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v3/alert_transitions?last=100' \
  -H 'Accept: application/json'
```

`GET /api/v3/alert_transitions`

Returns the historical record of alert state changes (transitions) across the monitored infrastructure. This endpoint provides detailed information about when alerts changed state (e.g., from CLEAR to WARNING to CRITICAL), allowing you to analyze alert patterns, investigate incidents, and understand system behavior over time.

**What is an Alert Transition?**
An alert transition is a record of an alert changing from one state to another. Each transition includes:
- Previous and new alert status (CLEAR, WARNING, CRITICAL, etc.)
- When the transition occurred
- How long the alert stayed in the previous state (duration)
- Alert value at the time of transition
- Complete alert metadata (name, context, node, etc.)

**Key Features:**
- **Multi-Node Support:** Query transitions across entire infrastructure
- **Advanced Filtering:** Filter by status, type, component, role, node, alert name, context
- **Faceted Search:** Use multiple filter facets simultaneously (e.g., "CRITICAL status on database nodes")
- **Pagination:** Navigate through large result sets using anchor_gi
- **Time Range:** Specify exact time windows for historical analysis

**Use Cases:**
- Incident investigation: "What alerts fired during the outage?"
- Alert pattern analysis: "How often does this alert transition to CRITICAL?"
- Alert tuning: "Which alerts flap between states most frequently?"
- Compliance reporting: "Show all CRITICAL alerts in the last 30 days"
- Root cause analysis: "What changed before this alert fired?"

**Faceted Filtering:**
This endpoint supports 9 different facets for precise filtering:
- f_status: Filter by alert status (CRITICAL, WARNING, etc.)
- f_type: Filter by alert type (e.g., "System", "Database", "Network")
- f_role: Filter by recipient role (who should be notified)
- f_class: Filter by alert classification
- f_component: Filter by alert component
- f_node: Filter by specific node hostname
- f_alert: Filter by alert name
- f_instance: Filter by chart instance name
- f_context: Filter by metric context

**Examples:**
1. Recent critical transitions: `?last=100&f_status=CRITICAL`
2. Database alerts: `?f_type=Database&after=-86400`
3. Specific alert history: `?f_alert=disk_space_usage&last=50`
4. Node-specific transitions: `?f_node=web-server-01&after=-604800`

**Response Format:**
Returns a JSON array of transition records, ordered by time (newest first by default). Each record includes complete transition metadata, alert details, and timing information.

**Performance Considerations:**
- Use time ranges (after/before) to limit query scope
- Use cardinality limits for large result sets
- Timeout parameter prevents long-running queries
- Pagination via anchor_gi for processing large datasets

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="retrieve-alert-state-transition-history-across-all-nodes-with-advanced-filtering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string|false|Filter transitions to only include specific nodes using simple pattern matching.<br><br>This parameter defines which nodes to include in the search using Netdata's simple pattern syntax (not regex).<br><br>**Pattern Syntax:**<br>- `*` matches any number of characters (including none)<br>- `node1 node2` space-separated list matches any of the nodes<br>- `!node3` exclude specific nodes (prefix with !)<br>- Can combine inclusion and exclusion: `web* !web-test*`<br><br>**Examples:**<br>- `scope_nodes=web*` - All nodes starting with "web"<br>- `scope_nodes=web* db*` - All web and database nodes<br>- `scope_nodes=* !test*` - All nodes except test nodes<br>- `scope_nodes=prod-web-01` - Specific node only<br><br>**Use Cases:**<br>- Focus on specific node groups (production vs staging)<br>- Exclude test/development nodes from analysis<br>- Investigate issues on specific infrastructure tiers<br><br>When not specified, transitions from all nodes are included.<br>|
|nodes|query|string|false|Filter transitions to specific nodes by their exact names.<br><br>Unlike `scope_nodes` which supports patterns, this parameter requires exact node names. Multiple nodes are separated by comma or pipe.<br><br>**Format:** Comma or pipe-separated list of exact node names<br><br>**Examples:**<br>- `nodes=web-server-01` - Single specific node<br>- `nodes=web-server-01,web-server-02,db-server-01` - Multiple specific nodes<br>- `nodes=web-server-01\|web-server-02` - Pipe separator also works<br><br>**Difference from scope_nodes:**<br>- `scope_nodes`: Pattern matching, filters at query time<br>- `nodes`: Exact names, more efficient for known node names<br><br>**Best Practice:** Use `nodes` when you know exact node names, use `scope_nodes` for pattern-based filtering.<br><br>When not specified, transitions from all nodes matching scope_nodes (or all nodes if scope_nodes is also not specified) are included.<br>|
|scope_contexts|query|string|false|Filter transitions to only include alerts from specific metric contexts using pattern matching.<br><br>Contexts group similar metrics across instances (e.g., `system.cpu` groups CPU metrics from all nodes, `disk.io` groups disk I/O from all disks).<br><br>**Pattern Syntax:**<br>- `*` matches any number of characters<br>- `context1 context2` space-separated list matches any of the contexts<br>- `!context3` exclude specific contexts<br>- Can combine: `system.* !system.io*`<br><br>**Common Context Patterns:**<br>- `system.*` - All system-level metrics<br>- `disk.*` - All disk-related metrics<br>- `net.*` - All network-related metrics<br>- `mysql.*` - All MySQL metrics<br>- `nginx.*` - All Nginx metrics<br><br>**Examples:**<br>- `scope_contexts=system.cpu` - Only CPU alerts<br>- `scope_contexts=disk.* net.*` - All disk and network alerts<br>- `scope_contexts=* !system.ip*` - All contexts except IP-related<br><br>**Use Cases:**<br>- Focus on specific subsystem (e.g., storage, network)<br>- Exclude noisy alert types<br>- Component-specific incident investigation<br><br>When not specified, transitions from all contexts are included.<br>|
|contexts|query|string|false|Filter transitions to specific contexts by their exact names.<br><br>Unlike `scope_contexts` which supports patterns, this parameter requires exact context names.<br><br>**Format:** Comma or pipe-separated list of exact context names<br><br>**Examples:**<br>- `contexts=system.cpu` - Single specific context<br>- `contexts=system.cpu,system.load,system.ram` - Multiple contexts<br>- `contexts=disk.space\|disk.inodes` - Pipe separator<br><br>**Difference from scope_contexts:**<br>- `scope_contexts`: Pattern matching for flexible filtering<br>- `contexts`: Exact names for precise filtering<br><br>When not specified, transitions from all contexts matching scope_contexts are included.<br>|
|alert|query|string|false|Filter transitions to a specific alert by its exact name.<br><br>Alert names are unique identifiers for specific alert configurations.<br><br>**Format:** Exact alert name (case-sensitive)<br><br>**Examples:**<br>- `alert=disk_space_usage` - Transitions for disk space alert<br>- `alert=cpu_usage` - Transitions for CPU usage alert<br>- `alert=ram_in_use` - Transitions for RAM usage alert<br><br>**Use Cases:**<br>- Analyze history of a specific alert<br>- Tune alert thresholds based on historical behavior<br>- Investigate alert flapping (rapid state changes)<br>- Track alert effectiveness<br><br>**Tip:** To find available alert names, query `/api/v3/alerts` first or use the `/api/v3/alert_config` endpoint.<br><br>When not specified, transitions for all alerts are included.<br>|
|transition|query|string|false|Filter to a specific transition by its unique identifier.<br><br>Each transition has a unique ID (UUID). This parameter is rarely used but can retrieve exact transition records.<br><br>**Format:** UUID string<br><br>**Use Case:** Retrieve exact transition details when you have the transition ID from another query or notification.<br><br>When not specified, all transitions matching other filters are included.<br>|
|last|query|integer|true|Limit the number of transition records returned.<br><br>This controls how many transition records to include in the response, ordered by time (most recent first).<br><br>**Format:** Positive integer<br><br>**Default:** 1 (returns only the most recent transition)<br><br>**Examples:**<br>- `last=1` - Most recent transition only (default)<br>- `last=100` - Last 100 transitions<br>- `last=1000` - Last 1000 transitions<br><br>**Use Cases:**<br>- Dashboard widgets showing recent N alerts<br>- API clients with pagination<br>- Limiting response size for performance<br><br>**Pagination:**<br>For datasets larger than `last`, use the `anchor_gi` parameter to navigate to the next page:<br>1. Make request with `last=100`<br>2. Note the `global_id` of the last transition in response<br>3. Make next request with `last=100&anchor_gi=<global_id>`<br><br>**Performance Note:** Smaller values of `last` result in faster queries and smaller responses.<br><br>**IMPORTANT:** This parameter is required. If not specified, defaults to 1.<br>|
|anchor_gi|query|integer(int64)|false|Global ID anchor for pagination through large result sets.<br><br>Each transition has a unique global_id (an incrementing number). Use this parameter to paginate through results by specifying the global_id of the last transition from the previous page.<br><br>**How Pagination Works:**<br>1. First request: `?last=100` - Returns first 100 transitions<br>2. Extract `global_id` of the 100th (last) transition from response<br>3. Next request: `?last=100&anchor_gi=<global_id>` - Returns next 100 transitions<br><br>**Format:** Positive integer (global_id from previous response)<br><br>**Examples:**<br>- `anchor_gi=12345` - Start from transition with global_id 12345<br>- Combined with last: `last=100&anchor_gi=12345` - Get 100 transitions starting after global_id 12345<br><br>**Use Cases:**<br>- Processing large alert history datasets<br>- Implementing "load more" in UIs<br>- Batch processing of transition records<br>- Exporting complete alert history<br><br>**Direction:**<br>- Results are ordered by global_id (which correlates with time)<br>- Anchor specifies "start after this ID"<br>- Each page contains `last` number of records<br><br>When not specified, pagination starts from the most recent transition.<br>|
|f_status|query|string|false|**Facet Filter:** Filter transitions by their NEW status (the status the alert transitioned TO).<br><br>**Available Status Values:**<br>- `CRITICAL` - Alert in critical state (highest severity)<br>- `WARNING` - Alert in warning state<br>- `CLEAR` - Alert returned to normal state<br>- `UNDEFINED` - Alert evaluation failed (e.g., metric missing, division by zero)<br>- `UNINITIALIZED` - Alert not yet evaluated (no data yet)<br>- `REMOVED` - Alert was removed (plugin stopped, configuration changed)<br><br>**Format:** Comma-separated list of status values<br><br>**Examples:**<br>- `f_status=CRITICAL` - Only transitions TO critical state<br>- `f_status=CRITICAL,WARNING` - Transitions to critical or warning<br>- `f_status=CLEAR` - When alerts cleared (returned to normal)<br><br>**Use Cases:**<br>- Find when alerts became critical: `f_status=CRITICAL`<br>- Track alert recovery: `f_status=CLEAR`<br>- Find alert failures: `f_status=UNDEFINED`<br>- Incident timeline: `f_status=CRITICAL,WARNING`<br><br>**Note:** This filters by the NEW status. To see transitions FROM a status to another, you'll need to examine the old_status field in the response.<br><br>When not specified, transitions to all statuses are included.<br>|
|f_type|query|string|false|**Facet Filter:** Filter transitions by alert type.<br><br>Alert types categorize alerts by the technology domain they monitor (e.g., "System", "Database", "Web Server").<br><br>**Format:** Comma-separated list of alert type names<br><br>**Common Alert Types:**<br>- `System` - Host operating system resources (CPU, memory, disks, filesystems, host networking)<br>- `Database` - Databases, key-value stores and search engines<br>- `Web Server` - Web servers, proxies and gateways (NGINX, Apache)<br>- `Network` - Network devices and network infrastructure services<br>- `Storage` - Storage systems and storage services (Ceph, HDFS, object storage)<br><br>**Examples:**<br>- `f_type=System` - Only system alerts<br>- `f_type=Database,Web Server` - Database and web server alerts<br><br>**Use Cases:**<br>- Focus on specific infrastructure component types<br>- Filter by technology stack (databases, web servers, etc.)<br>- Team-specific alert filtering<br><br>**Note:** Stock alerts use the types documented in the health configuration reference (`src/health/REFERENCE.md`); your own alert configurations may use other values. Query `/api/v3/alerts` to see the types in your installation.<br><br>When not specified, transitions of all types are included.<br>|
|f_role|query|string|false|**Facet Filter:** Filter transitions by recipient role.<br><br>Roles define who should be notified about alerts (e.g., "sysadmin", "dba", "webmaster").<br><br>**Format:** Comma-separated list of role names<br><br>**Common Roles:**<br>- `sysadmin` - System administrators<br>- `dba` - Database administrators<br>- `webmaster` - Web server administrators<br>- `devops` - DevOps team<br>- `security` - Security team<br><br>**Examples:**<br>- `f_role=sysadmin` - Alerts for sysadmin role<br>- `f_role=sysadmin,dba` - Alerts for sysadmins and DBAs<br><br>**Use Cases:**<br>- Team-specific alert filtering<br>- Role-based alert analysis<br>- Notification audit trails<br><br>**Note:** Roles are defined in your alert configurations. The exact role values depend on your Netdata setup.<br><br>When not specified, transitions for all roles are included.<br>|
|f_class|query|string|false|**Facet Filter:** Filter transitions by alert classification.<br><br>Alert classifications categorize alerts by their nature (e.g., "Errors", "Latency", "Utilization").<br><br>**Format:** Comma-separated list of classification names<br><br>**Common Classifications:**<br>- `Errors` - Error-related alerts<br>- `Latency` - Performance/latency alerts<br>- `Utilization` - Resource utilization alerts<br>- `Availability` - Availability/uptime alerts<br>- `Workload` - Workload-related alerts<br><br>**Examples:**<br>- `f_class=Errors` - Only error-related transitions<br>- `f_class=Latency,Utilization` - Performance and utilization alerts<br><br>**Use Cases:**<br>- Focus on specific problem categories<br>- SLA/SLO tracking by classification<br>- Alert categorization analysis<br><br>When not specified, transitions of all classifications are included.<br>|
|f_component|query|string|false|**Facet Filter:** Filter transitions by alert component.<br><br>Components narrow the alert type: the subsystem for `System` and `Netdata` alerts (e.g., "Network", "Disk", "Memory"), the component kind, management interface, device class or check kind for `Kubernetes`, `Hardware` and `Synthetic` alerts (e.g., "Kubelet", "Redfish", "HTTP endpoint"), otherwise the product, service or protocol (e.g., "PostgreSQL", "Redis", "BGP"). The health configuration reference (`src/health/REFERENCE.md`) lists the rules.<br><br>**Format:** Comma-separated list of component names<br><br>**Common Components:**<br>- `Network` - Host networking alerts<br>- `Disk` - Disk alerts<br>- `Memory` - Memory alerts<br>- `CPU` - CPU alerts<br>- `PostgreSQL` - PostgreSQL alerts<br><br>**Examples:**<br>- `f_component=Disk` - Only disk-related transitions<br>- `f_component=Network,Disk` - Host networking and disk alerts<br><br>**Use Cases:**<br>- Component-specific incident investigation<br>- Infrastructure subsystem analysis<br>- Capacity planning by component<br><br>When not specified, transitions for all components are included.<br>|
|f_node|query|string|false|**Facet Filter:** Filter transitions by exact node hostname.<br><br>This is a facet filter alternative to the `nodes` parameter, typically used when you want to combine it with other facets.<br><br>**Format:** Comma-separated list of exact node hostnames<br><br>**Examples:**<br>- `f_node=web-server-01` - Single specific node<br>- `f_node=web-server-01,db-server-01` - Multiple nodes<br><br>**Difference from `nodes` parameter:**<br>- Both accept exact node names<br>- `f_node` is a facet filter (can be combined with other f_* filters)<br>- `nodes` is a direct filter parameter<br><br>**Best Practice:** Use `nodes` for simple node filtering, use `f_node` when combining with other facets in complex queries.<br><br>When not specified, all nodes are included.<br>|
|f_alert|query|string|false|**Facet Filter:** Filter transitions by exact alert name.<br><br>This is a facet filter alternative to the `alert` parameter.<br><br>**Format:** Comma-separated list of exact alert names<br><br>**Examples:**<br>- `f_alert=disk_space_usage` - Single alert<br>- `f_alert=cpu_usage,ram_in_use` - Multiple alerts<br><br>**Difference from `alert` parameter:**<br>- `alert`: Single alert name<br>- `f_alert`: Multiple alert names, facet filter<br><br>When not specified, all alerts are included.<br>|
|f_instance|query|string|false|**Facet Filter:** Filter transitions by chart instance name.<br><br>Chart instances are specific monitored entities (e.g., "disk_sda", "eth0", "mysql_localhost").<br><br>**Format:** Comma-separated list of instance names<br><br>**Examples:**<br>- `f_instance=sda` - Alerts for disk sda<br>- `f_instance=eth0,eth1` - Alerts for network interfaces eth0 and eth1<br><br>**Use Cases:**<br>- Device-specific alert history (specific disk, NIC, etc.)<br>- Instance-level troubleshooting<br>- Resource-specific analysis<br><br>**Note:** Instance names depend on your system configuration and what's being monitored.<br><br>When not specified, all instances are included.<br>|
|f_context|query|string|false|**Facet Filter:** Filter transitions by exact metric context.<br><br>This is a facet filter alternative to the `contexts` parameter.<br><br>**Format:** Comma-separated list of exact context names<br><br>**Examples:**<br>- `f_context=system.cpu` - CPU context only<br>- `f_context=disk.space,disk.inodes` - Disk space and inodes<br><br>**Difference from `contexts` parameter:**<br>- Both accept exact context names<br>- `f_context` is a facet filter (can be combined with other f_* filters)<br>- `contexts` is a direct filter parameter<br><br>When not specified, all contexts are included.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|timeout|query|integer(int64)|false|Maximum time in milliseconds to wait for the query to complete.<br><br>Alert transition queries can be expensive when searching large time ranges or across many nodes.<br><br>**Format:** Integer (milliseconds)<br><br>**Default:** Server default timeout (typically 30000ms = 30 seconds)<br><br>**Examples:**<br>- `timeout=5000` - 5 second timeout<br>- `timeout=60000` - 60 second timeout (for large queries)<br><br>**Use Cases:**<br>- Prevent long-running queries from blocking<br>- API clients with strict latency requirements<br>- Dashboard widgets needing fast responses<br><br>When timeout is exceeded, the server returns a partial result with whatever transitions were collected before timeout, or an error if no results were ready.<br>|
|cardinality|query|integer|false|Limit the number of transition records returned to prevent response explosion.<br><br>**Format:** Integer (maximum number of transitions)<br><br>**Default:** No limit (but respects `last` parameter)<br><br>**Relationship with `last`:**<br>- `last`: Controls result set size (pagination)<br>- `cardinality`: Hard limit on response size<br><br>**Use Cases:**<br>- Ensure responses stay within size limits<br>- Protect against accidentally requesting huge result sets<br>- API clients with memory constraints<br><br>**Example:**<br>- `cardinality=1000` - Never return more than 1000 transitions<br><br>**Alias:** Can also be specified as `cardinality_limit`<br><br>**Best Practice:** Use `last` for normal pagination, use `cardinality` as a safety limit.<br><br>When the limit is exceeded, the response may indicate how many transitions were omitted.<br>|

> Example responses

> 200 Response

```json
{}
```

<h3 id="retrieve-alert-state-transition-history-across-all-nodes-with-advanced-filtering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Returns alert transition history records.<br><br>**Response Structure:**<br>- Array of transition records, ordered by time (newest first by default)<br>- Each record includes:<br>  - `global_id`: Unique transition ID for pagination<br>  - `transition_id`: UUID of this specific transition<br>  - `alert_name`: Name of the alert<br>  - `chart`, `chart_context`: What metric triggered the alert<br>  - `old_status`, `new_status`: Status change (e.g., WARNING → CRITICAL)<br>  - `old_value`, `new_value`: Metric values at transition<br>  - `when_key`: When the transition occurred (timestamp)<br>  - `duration`: How long the alert was in old_status<br>  - `non_clear_duration`: Time spent in non-CLEAR states<br>  - Alert metadata: type, classification, component, role, recipient<br>  - Execution details: exec, exec_code, exec_run_timestamp<br>  - Node information: machine_guid, hostname<br><br>**Facets:**<br>When not in MCP mode, the response includes facet information showing all available values for each facet filter (f_status, f_type, etc.) with counts.<br><br>**Pagination:**<br>- Use the `global_id` from the last record with `anchor_gi` parameter for next page<br>- Response indicates if more results are available<br><br>**Response Characteristics:**<br>- JSON format<br>- Not cacheable (new transitions constantly added)<br>- May be cardinality-limited if specified<br>- May be timeout-limited (partial results)<br><br>**Example Usage:**<br>```<br>GET /api/v3/alert_transitions?last=100&f_status=CRITICAL&after=-86400<br>```<br>Returns last 100 transitions to CRITICAL state in the past 24 hours.<br>|Inline|
|400|Bad Request|Bad request. Common causes:<br>- Invalid parameter values<br>- Malformed filter patterns<br>- Invalid facet values<br>- Invalid timeout or cardinality values<br>- Invalid global_id for anchor_gi<br>|None|
|500|Internal Server Error|Internal server error during transition query execution.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Retrieve the configuration of a specific alert by its config hash ID

<a id="opIdalert_config_v3"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v3/alert_config?config=550e8400-e29b-41d4-a716-446655440000' \
  -H 'Accept: application/json'
```

`GET /api/v3/alert_config`

Returns the complete configuration of an alert identified by its unique configuration hash ID (UUID). This endpoint provides detailed information about how an alert is configured, including its thresholds, evaluation logic, notification settings, and metadata.

**What is an Alert Configuration?**
Each alert in Netdata has a unique configuration that defines:
- Threshold values (warning and critical)
- The metric expression being evaluated
- Evaluation frequency and hysteresis
- Who to notify (recipients and roles)
- Notification settings and delays
- Alert metadata (name, info, summary, classification)

**Configuration Hash ID:**
The `config` parameter is a UUID that uniquely identifies an alert configuration. Multiple alert instances may share the same configuration hash if they use identical alert rules.

**How to Get Config Hash IDs:**
- From `/api/v3/alerts` response - each alert includes its `config_hash_id`
- From `/api/v3/alert_transitions` response - transitions include `config_hash_id`
- From alert notifications - config hash is often included in alert payloads

**Use Cases:**
- **Alert Investigation:** Understand exactly what thresholds triggered an alert
- **Alert Tuning:** Review current configuration before making changes
- **Documentation:** Generate documentation of alert configurations
- **Audit Trails:** Track what alert configurations were in effect at specific times
- **Troubleshooting:** Verify alert logic when investigating false positives/negatives
- **Configuration Management:** Compare configurations across environments

**Response Content:**
The endpoint returns the complete alert configuration in the format it was defined (typically the Netdata health configuration syntax), including:
- Alert name and type
- The metric expression (`on` clause)
- Warning and critical threshold expressions
- Calculation method and dimensions
- Lookup parameters (duration, method)
- Notification recipients and roles
- Alert metadata (info, summary, classification, component)
- Delay settings and hysteresis rules

**Example Workflow:**
1. Query alerts: `GET /api/v3/alerts?alert=disk_space_usage`
2. Extract `config_hash_id` from response
3. Get config: `GET /api/v3/alert_config?config=<uuid>`
4. Review/analyze the alert configuration details

**Note:** This endpoint requires the exact config hash UUID. Invalid or non-existent UUIDs will return a 400 Bad Request error.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="retrieve-the-configuration-of-a-specific-alert-by-its-config-hash-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|config|query|string(uuid)|true|The unique configuration hash ID (UUID) of the alert whose configuration to retrieve.<br><br>**Format:** UUID string (with or without hyphens)<br><br>**Where to Find Config Hash IDs:**<br>1. **From /api/v3/alerts Response:**<br>   Each alert in the response includes a `config_hash_id` field containing the UUID<br><br>2. **From /api/v3/alert_transitions Response:**<br>   Transition records include `config_hash_id` showing which config was active<br><br>3. **From Alert Notifications:**<br>   Alert notifications (email, Slack, etc.) often include the config hash<br><br>4. **From Logs:**<br>   Netdata logs may reference config hashes when loading alert configurations<br><br>**UUID Format Examples:**<br>- With hyphens: `550e8400-e29b-41d4-a716-446655440000`<br>- Without hyphens: `550e8400e29b41d4a716446655440000`<br>- Both formats are accepted<br><br>**Important Notes:**<br>- This parameter is **REQUIRED**<br>- Must be a valid UUID format<br>- Must reference an existing alert configuration<br>- Case-insensitive<br><br>**Common Errors:**<br>- Missing config parameter → 400 Bad Request with message "A config hash ID is required"<br>- Invalid UUID format → 400 Bad Request<br>- Non-existent UUID → 404 or empty result<br><br>**Example Usage:**<br>```<br>GET /api/v3/alert_config?config=550e8400-e29b-41d4-a716-446655440000<br>```<br><br>**Tip:** To find all config hash IDs for a specific alert name, query the alerts endpoint first:<br>```<br>GET /api/v3/alerts?alert=disk_space_usage<br>```<br>Then extract the `config_hash_id` from the response.<br>|

> Example responses

> 200 Response

```json
{}
```

<h3 id="retrieve-the-configuration-of-a-specific-alert-by-its-config-hash-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Returns the complete alert configuration.<br><br>**Response Format:**<br>The response contains the alert configuration in a structured format, typically including:<br><br>**Core Configuration:**<br>- `name`: Alert name/identifier<br>- `type`: Alert classification type<br>- `on`: Metric expression being monitored<br>- `class`: Alert classification category<br>- `component`: System component being monitored<br>- `lookup`: Metric lookup parameters (method, duration, dimensions)<br><br>**Thresholds:**<br>- `warn`: Warning threshold expression<br>- `crit`: Critical threshold expression<br>- `units`: Unit of measurement for values<br><br>**Evaluation:**<br>- `every`: How often the alert is evaluated<br>- `green` / `red`: Hysteresis settings (when to clear/trigger)<br>- `calc`: Calculation expression (if any)<br><br>**Notifications:**<br>- `to`: Notification recipients<br>- `exec`: Script to execute on alert<br>- `delay`: Notification delay settings<br>- `repeat`: Repeat notification settings<br><br>**Metadata:**<br>- `info`: Detailed alert description<br>- `summary`: Brief alert summary<br>- `host_labels`: Labels for host filtering<br><br>**Response Characteristics:**<br>- Content-Type: Typically `text/plain` or `application/json` depending on format<br>- Not cacheable (configurations may change)<br>- Complete configuration as it exists in the system<br><br>**Example Response Structure (JSON format):**<br>```json<br>{<br>  "name": "disk_space_usage",<br>  "on": "disk.space",<br>  "class": "Utilization",<br>  "type": "System",<br>  "component": "Disk",<br>  "lookup": "average -1m percentage of used",<br>  "units": "%",<br>  "warn": "$this > 80",<br>  "crit": "$this > 95",<br>  "info": "Disk space utilization is high",<br>  "to": "sysadmin"<br>}<br>```<br><br>The exact format and fields depend on the alert configuration and may vary between different alert types.<br>|Inline|
|400|Bad Request|Bad request. Common causes:<br>- Missing `config` parameter (error: "A config hash ID is required. Add ?config=UUID query param")<br>- Invalid UUID format<br>- Malformed request<br><br>**Error Response:**<br>Returns plain text error message explaining what went wrong.<br>|None|
|404|Not Found|Configuration not found. The specified config hash ID does not exist or has been removed.<br><br>**Common Reasons:**<br>- Alert configuration was deleted<br>- Alert configuration was modified (gets a new hash)<br>- UUID was mistyped<br>- Configuration is from a different Netdata instance<br>|None|
|500|Internal Server Error|Internal server error during configuration retrieval.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## OBSOLETE: Get current alert status across all nodes (use /api/v3/alerts instead)

<a id="opIdalerts2"></a>

> Code samples

```bash
curl http://localhost:19999/api/v2/alerts
```

`GET /api/v2/alerts`

<aside class="warning">
This operation is deprecated
</aside>

**⚠️ OBSOLETE API - Will be removed in future versions**

This endpoint is deprecated. Use `/api/v3/alerts` instead, which provides the same functionality.

**Migration:** Replace `/api/v2/alerts` with `/api/v3/alerts` in all API calls.

Returns the current status of health monitoring alerts across all nodes in the infrastructure.
Supports filtering by status, alert name, and node selection.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="obsolete-get-current-alert-status-across-all-nodes-use-apiv3alerts-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|scope_contexts|query|string(simple pattern)|false|A simple pattern limiting the contexts scope of the query. The scope controls both data and metadata response. The default contexts scope is all contexts for which this Agent has data for. Usually the contexts scope is used to slice data on the dashboard (e.g. each context based chart has its own contexts scope, limiting the chart to all the instances of the selected context). Both positive and negative simple pattern expressions are supported.<br>|
|contexts|query|string(simple pattern)|false|A simple pattern matching the contexts to be queried. This only controls the data response, not the metadata. Both positive and negative simple pattern expressions are supported.<br>|
|status|query|string|false|Filter alerts by status (e.g., CRITICAL, WARNING, CLEAR)|
|alert|query|string|false|Filter by alert name pattern|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|timeout|query|number(integer)|false|Specify a timeout value in milliseconds after which the Agent will abort the query and return a 503 error. A value of 0 indicates no timeout.<br>|
|cardinality_limit|query|integer(int64)|false|Limits the number of unique items returned, to prevent excessive memory usage and response sizes when a request matches a large number of items. For data queries, the query engine keeps the top contributing dimensions and folds the rest into one `remaining` aggregate dimension, so the total number of returned dimensions equals this limit; the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) stays complete unless the `cardinality-limit-all` option is also given. Other endpoints (alerts, contexts) apply this limit to their own result items. Weights endpoints define separate result-limit semantics.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|

<h3 id="obsolete-get-current-alert-status-across-all-nodes-use-apiv3alerts-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Alert status successfully retrieved|None|
|400|Bad Request|Invalid parameters|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## OBSOLETE: Get alert state transition history (use /api/v3/alert_transitions instead)

<a id="opIdalertTransitions2"></a>

> Code samples

```bash
curl http://localhost:19999/api/v2/alert_transitions
```

`GET /api/v2/alert_transitions`

<aside class="warning">
This operation is deprecated
</aside>

**⚠️ OBSOLETE API - Will be removed in future versions**

This endpoint is deprecated. Use `/api/v3/alert_transitions` instead, which provides the same functionality.

**Migration:** Replace `/api/v2/alert_transitions` with `/api/v3/alert_transitions` in all API calls.

Returns historical alert state transitions showing how alerts changed over time.
Supports faceted filtering by status, type, role, class, component, node, alert name, chart name, and context.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="obsolete-get-alert-state-transition-history-use-apiv3alerttransitions-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|scope_contexts|query|string(simple pattern)|false|A simple pattern limiting the contexts scope of the query. The scope controls both data and metadata response. The default contexts scope is all contexts for which this Agent has data for. Usually the contexts scope is used to slice data on the dashboard (e.g. each context based chart has its own contexts scope, limiting the chart to all the instances of the selected context). Both positive and negative simple pattern expressions are supported.<br>|
|contexts|query|string(simple pattern)|false|A simple pattern matching the contexts to be queried. This only controls the data response, not the metadata. Both positive and negative simple pattern expressions are supported.<br>|
|alert|query|string|false|Filter by alert name|
|transition|query|string|false|Filter by transition type|
|last|query|integer|false|Return only the last N transitions|
|anchor_gi|query|integer(int64)|false|Global ID anchor for pagination|
|f_status|query|string|false|Facet filter for alert status|
|f_type|query|string|false|Facet filter for alert type|
|f_role|query|string|false|Facet filter for recipient role|
|f_class|query|string|false|Facet filter for alert class|
|f_component|query|string|false|Facet filter for alert component|
|f_node|query|string|false|Facet filter for node|
|f_alert|query|string|false|Facet filter for alert name|
|f_instance|query|string|false|Facet filter for chart/instance name|
|f_context|query|string|false|Facet filter for context|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|timeout|query|number(integer)|false|Specify a timeout value in milliseconds after which the Agent will abort the query and return a 503 error. A value of 0 indicates no timeout.<br>|
|cardinality_limit|query|integer(int64)|false|Limits the number of unique items returned, to prevent excessive memory usage and response sizes when a request matches a large number of items. For data queries, the query engine keeps the top contributing dimensions and folds the rest into one `remaining` aggregate dimension, so the total number of returned dimensions equals this limit; the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) stays complete unless the `cardinality-limit-all` option is also given. Other endpoints (alerts, contexts) apply this limit to their own result items. Weights endpoints define separate result-limit semantics.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|

<h3 id="obsolete-get-alert-state-transition-history-use-apiv3alerttransitions-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Alert transitions successfully retrieved|None|
|400|Bad Request|Invalid parameters|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## OBSOLETE: Get alert configuration by hash ID (use /api/v3/alert_config instead)

<a id="opIdalertConfig2"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v2/alert_config?config=497f6eca-6276-4993-bfeb-53cbbbba6f08'
```

`GET /api/v2/alert_config`

<aside class="warning">
This operation is deprecated
</aside>

**⚠️ OBSOLETE API - Will be removed in future versions**

This endpoint is deprecated. Use `/api/v3/alert_config` instead, which provides the same functionality.

**Migration:** Replace `/api/v2/alert_config` with `/api/v3/alert_config` in all API calls.

Retrieves the complete configuration for a specific alert using its configuration hash (UUID).
Returns alert definition including conditions, thresholds, and notification settings.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="obsolete-get-alert-configuration-by-hash-id-use-apiv3alertconfig-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|config|query|string(uuid)|true|Alert configuration hash ID (UUID)|

<h3 id="obsolete-get-alert-configuration-by-hash-id-use-apiv3alertconfig-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Alert configuration successfully retrieved|None|
|400|Bad Request|Missing or invalid config parameter|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Get a list of active or raised alarms on the server

<a id="opIdalerts1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/alarms \
  -H 'Accept: application/json'
```

`GET /api/v1/alarms`

<aside class="warning">
This operation is deprecated
</aside>

The alarms endpoint returns the list of all raised or enabled alarms on the netdata server. Called without any parameters, the raised alarms in state WARNING or CRITICAL are returned. By passing "?all", all the enabled alarms are returned.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="get-a-list-of-active-or-raised-alarms-on-the-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|If passed, all enabled alarms are returned.|
|active|query|boolean|false|If passed, the raised alarms in state WARNING or CRITICAL are returned.|

> Example responses

> 200 Response

```json
{
  "hostname": "string",
  "latest_alarm_log_unique_id": 0,
  "status": true,
  "now": 0,
  "alarms": {
    "chart-name.alarm-name": {
      "id": 0,
      "name": "string",
      "chart": "string",
      "family": "string",
      "active": true,
      "disabled": true,
      "silenced": true,
      "exec": "string",
      "recipient": "string",
      "source": "string",
      "units": "string",
      "info": "string",
      "status": "string",
      "last_status_change": 0,
      "last_updated": 0,
      "next_update": 0,
      "update_every": 0,
      "delay_up_duration": 0,
      "delay_down_duration": 0,
      "delay_max_duration": 0,
      "delay_multiplier": 0,
      "delay": 0,
      "delay_up_to_timestamp": 0,
      "value_string": "string",
      "no_clear_notification": true,
      "lookup_dimensions": "string",
      "db_after": 0,
      "db_before": 0,
      "lookup_method": "string",
      "lookup_after": 0,
      "lookup_before": 0,
      "lookup_options": "string",
      "calc": "string",
      "calc_parsed": "string",
      "warn": "string",
      "warn_parsed": "string",
      "crit": "string",
      "crit_parsed": "string",
      "warn_repeat_every": 0,
      "crit_repeat_every": 0,
      "green": "string",
      "red": "string",
      "value": 0
    }
  }
}
```

<h3 id="get-a-list-of-active-or-raised-alarms-on-the-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object containing general info and a linked list of alarms.|[alarms](#schemaalarms)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Get a list of active or raised alarms on the server

<a id="opIdalertValues1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/alarms_values \
  -H 'Accept: application/json'
```

`GET /api/v1/alarms_values`

<aside class="warning">
This operation is deprecated
</aside>

The alarms_values endpoint returns the list of all raised or enabled alarms on the netdata server. Called without any parameters, the raised alarms in state WARNING or CRITICAL are returned. By passing '?all', all the enabled alarms are returned. This option output differs from `/alarms` in the number of variables delivered. This endpoint gives to user `id`, `value`, `last_updated` time, and alarm `status`.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="get-a-list-of-active-or-raised-alarms-on-the-server-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|If passed, all enabled alarms are returned.|
|active|query|boolean|false|If passed, the raised alarms in state WARNING or CRITICAL are returned.|

> Example responses

> 200 Response

```json
{
  "hostname": "string",
  "alarms": {
    "property1": {
      "id": 0,
      "value": 0,
      "last_updated": 0,
      "status": "REMOVED"
    },
    "property2": {
      "id": 0,
      "value": 0,
      "last_updated": 0,
      "status": "REMOVED"
    }
  }
}
```

<h3 id="get-a-list-of-active-or-raised-alarms-on-the-server-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object containing general info and a linked list of alarms.|[alarms_values](#schemaalarms_values)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Retrieves the entries of the alarm log

<a id="opIdalertsLog1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/alarm_log \
  -H 'Accept: application/json'
```

`GET /api/v1/alarm_log`

<aside class="warning">
This operation is deprecated
</aside>

Returns an array of alarm_log entries, with historical information on raised and cleared alarms.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="retrieves-the-entries-of-the-alarm-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|integer|false|Passing the parameter after=UNIQUEID returns all the events in the alarm log that occurred after UNIQUEID. An automated series of calls would call the interface once without after=, store the last UNIQUEID of the returned set, and give it back to get incrementally the next events.<br>|

> Example responses

> 200 Response

```json
[
  {
    "hostname": "string",
    "unique_id": 0,
    "alarm_id": 0,
    "alarm_event_id": 0,
    "name": "string",
    "chart": "string",
    "family": "string",
    "processed": true,
    "updated": true,
    "exec_run": 0,
    "exec_failed": true,
    "exec": "string",
    "recipient": "string",
    "exec_code": 0,
    "source": "string",
    "units": "string",
    "when": 0,
    "duration": 0,
    "non_clear_duration": 0,
    "status": "string",
    "old_status": "string",
    "delay": 0,
    "delay_up_to_timestamp": 0,
    "updated_by_id": 0,
    "updates_id": 0,
    "value_string": "string",
    "old_value_string": "string",
    "silenced": "string",
    "info": "string",
    "value": 0,
    "old_value": 0
  }
]
```

<h3 id="retrieves-the-entries-of-the-alarm-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of alarm log entries.|Inline|

<h3 id="retrieves-the-entries-of-the-alarm-log-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[alarm_log_entry](#schemaalarm_log_entry)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Get an overall status of the chart

<a id="opIdalertsCount1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/alarm_count \
  -H 'Accept: application/json'
```

`GET /api/v1/alarm_count`

<aside class="warning">
This operation is deprecated
</aside>

Checks multiple charts with the same context and counts number of alarms with given status.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="get-an-overall-status-of-the-chart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|context|query|string(as returned by /charts)|false|The context of the chart as returned by the /charts call.|
|status|query|string|false|Specify alarm status to count.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|REMOVED|
|status|UNDEFINED|
|status|UNINITIALIZED|
|status|CLEAR|
|status|RAISED|
|status|WARNING|
|status|CRITICAL|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="get-an-overall-status-of-the-chart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object containing a count of alarms with given status for given contexts.|Inline|
|500|Internal Server Error|Internal server error. This usually means the server is out of memory.|None|

<h3 id="get-an-overall-status-of-the-chart-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[number]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## List variables available to configure alarms for a chart

<a id="opIdgetNodeAlertVariables1"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v1/alarm_variables?chart=system.cpu' \
  -H 'Accept: application/json'
```

`GET /api/v1/alarm_variables`

<aside class="warning">
This operation is deprecated
</aside>

Returns the basic information of a chart and all the variables that can be used in alarm and template health configurations for the particular chart or family.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="list-variables-available-to-configure-alarms-for-a-chart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chart|query|string(as returned by /charts)|true|The id of the chart as returned by the /charts call.|

> Example responses

> 200 Response

```json
{
  "chart": "string",
  "chart_name": "string",
  "cnart_context": "string",
  "family": "string",
  "host": "string",
  "chart_variables": {
    "property1": {
      "varname1": 0,
      "varname2": 0
    },
    "property2": {
      "varname1": 0,
      "varname2": 0
    }
  },
  "family_variables": {
    "varname1": 0,
    "varname2": 0
  },
  "host_variables": {
    "varname1": 0,
    "varname2": 0
  }
}
```

<h3 id="list-variables-available-to-configure-alarms-for-a-chart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A javascript object with information about the chart and the available variables.|[alarm_variables](#schemaalarm_variables)|
|400|Bad Request|Bad request - the body will include a message stating what is wrong.|None|
|404|Not Found|No chart with the given id is found.|None|
|500|Internal Server Error|Internal server error. This usually means the server is out of memory.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

<h1 id="netdata-api-management">management</h1>

Everything related to managing netdata Agents

## Accesses the health management API to control health checks and notifications at runtime.

<a id="opIdhealth1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/manage/health
```

`GET /api/v1/manage/health`

<aside class="warning">
This operation is deprecated
</aside>

Available from Netdata v1.12 and above, protected via bearer authorization. Especially useful for maintenance periods, the API allows you to disable health checks completely, silence alarm notifications, or Disable/Silence specific alarms that match selectors on alarm/template name, chart, context, host and family. For the simple disable/silence all scenarios, only the cmd parameter is required. The other parameters are used to define alarm selectors. For more information and examples, refer to the netdata documentation.

**Security & Access Control:**
- 🔧 **Management API** - Subject to management ACL restrictions
- **IP Restrictions:** Controlled by `allow management from` in netdata.conf (default: localhost only)
- **Internal Permissions:** Each management action has its own permission requirements
- **No Bearer Protection:** Not subject to bearer token authentication


<h3 id="accesses-the-health-management-api-to-control-health-checks-and-notifications-at-runtime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cmd|query|string|false|DISABLE ALL: No alarm criteria are evaluated, nothing is written in the alarm log. SILENCE ALL: No notifications are sent. RESET: Return to the default state. DISABLE/SILENCE: Set the mode to be used for the alarms matching the criteria of the alarm selectors. LIST: Show active configuration.<br>|
|alarm|query|string|false|The expression provided will match both `alarm` and `template` names.|
|chart|query|string|false|Chart ids/names, as shown on the dashboard. These will match the `on` entry of a configured `alarm`.|
|context|query|string|false|Chart context, as shown on the dashboard. These will match the `on` entry of a configured `template`.|
|hosts|query|string|false|The hostnames that will need to match.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cmd|DISABLE ALL|
|cmd|SILENCE ALL|
|cmd|DISABLE|
|cmd|SILENCE|
|cmd|RESET|
|cmd|LIST|

<h3 id="accesses-the-health-management-api-to-control-health-checks-and-notifications-at-runtime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A plain text response based on the result of the command.|None|
|403|Forbidden|Bearer authentication error.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get information about current ACLK state

<a id="opIdaclk1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/aclk \
  -H 'Accept: application/json'
```

`GET /api/v1/aclk`

<aside class="warning">
This operation is deprecated
</aside>

ACLK endpoint returns detailed information about current state of ACLK (Agent to Cloud communication).

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


> Example responses

> 200 Response

```json
{
  "aclk-available": "string",
  "aclk-version": 0,
  "protocols-supported": [
    "string"
  ],
  "Agent-claimed": true,
  "claimed_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "online": true,
  "used-cloud-protocol": "Old"
}
```

<h3 id="get-information-about-current-aclk-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object with ACLK information.|[aclk_state](#schemaaclk_state)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## [DEPRECATED] Get DBEngine storage statistics

<a id="opIddbengine_stats1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/dbengine_stats \
  -H 'Accept: application/json'
```

`GET /api/v1/dbengine_stats`

<aside class="warning">
This operation is deprecated
</aside>

**[DEPRECATED - Use Netdata Cloud or internal metrics for storage monitoring]**

**DBEngine Storage Statistics**

Returns detailed statistics about Netdata's DBEngine storage system for all configured storage tiers. DBEngine is Netdata's high-performance time-series database that stores metrics on disk.

**Statistics Provided (per tier):**

**Datafiles:**
- Active datafiles count
- Total datafiles (active + archived)
- Datafile size limits

**Extents:**
- Number of extents (storage chunks)
- Extent compression statistics
- Extent allocation and fragmentation

**Pages:**
- Page cache statistics
- Page types (hot, cold, compressed)
- Page I/O statistics

**Compression:**
- Compression ratios achieved
- Compression algorithm efficiency
- Space saved by compression

**Retention:**
- Actual retention achieved
- Retention limits and targets
- Disk space usage

**Performance:**
- Read/write rates
- Cache hit ratios
- I/O wait times

**Use Cases:**
- **Capacity Planning:** Monitor disk space usage trends
- **Performance Tuning:** Analyze cache efficiency and I/O patterns
- **Storage Optimization:** Review compression ratios and retention
- **Troubleshooting:** Diagnose DBEngine performance issues

**Storage Tiers:**
Netdata supports multiple storage tiers with different retention periods:
- **Tier 0:** High resolution (1-second), short retention
- **Tier 1:** Medium resolution, medium retention
- **Tier 2:** Low resolution, long retention

**Availability:**
This endpoint only works if DBEngine is enabled. Returns 404 if DBEngine is disabled.

**Migration:**
Modern Netdata installations should use:
- Netdata Cloud for storage monitoring across agents
- Internal metrics: `netdata.dbengine_*` charts
- System info API for aggregate statistics

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


> Example responses

> 200 Response

```json
{
  "tier0": {
    "datafiles_active": 4,
    "datafiles_total": 12,
    "extents_total": 156789,
    "pages_total": 8934567,
    "compression_ratio": 3.2,
    "disk_space_bytes": 524288000,
    "retention_seconds": 86400
  },
  "tier1": {
    "datafiles_active": 2,
    "datafiles_total": 6,
    "extents_total": 45678,
    "pages_total": 1234567,
    "compression_ratio": 4.1,
    "disk_space_bytes": 134217728,
    "retention_seconds": 604800
  }
}
```

<h3 id="deprecated-get-dbengine-storage-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|DBEngine statistics for all tiers|Inline|
|404|Not Found|DBEngine is not enabled|None|
|503|Service Unavailable|Service unavailable - Netdata not ready|None|

<h3 id="deprecated-get-dbengine-storage-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|Statistics for this specific tier|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## [DEPRECATED] Get machine learning detection information

<a id="opIdml_info1"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/ml_info \
  -H 'Accept: application/json'
```

`GET /api/v1/ml_info`

<aside class="warning">
This operation is deprecated
</aside>

**[DEPRECATED - Use internal metrics and Netdata Cloud for ML monitoring]**

**Machine Learning Detection Info**

Returns information about Netdata's built-in machine learning (ML) anomaly detection system for the specified host. Netdata trains ML models on every metric to detect anomalous behavior in real-time.

**Information Provided:**

**Training Status:**
- Whether ML is enabled and trained
- Training progress and completion percentage
- Number of models trained
- Training time and resource usage

**Detection Configuration:**
- Detection sensitivity settings
- Anomaly detection thresholds
- Update frequency
- Model parameters

**Model Statistics:**
- Number of dimensions being modeled
- Model types in use (k-means, etc.)
- Model accuracy metrics
- Training data requirements

**Detection State:**
- Current anomaly detection status
- Recent anomaly counts
- Detection performance metrics

**Use Cases:**
- **ML Verification:** Confirm ML is trained and detecting anomalies
- **Troubleshooting:** Diagnose why ML isn't detecting issues
- **Configuration:** Verify ML settings are applied correctly
- **Monitoring:** Track ML training progress on new agents

**Availability:**
This endpoint only works if:
- Netdata was compiled with ML support (`ENABLE_ML`)
- ML is enabled in configuration
- The agent has finished initial startup

Returns 503 (Service Unavailable) if ML is not compiled in or not ready.

**Machine Learning in Netdata:**
- Trains individual k-means models for every metric dimension
- Updates models continuously as new data arrives
- Detects anomalies in real-time (within seconds)
- No configuration required - works out of the box
- Models stored locally, no data sent to cloud

**Migration:**
Modern deployments should:
- Use internal metrics: `netdata.ml_*` charts
- Check Netdata Cloud for ML insights
- Use alert transitions API to see ML-based alerts
- Monitor anomaly rates via `/api/v2/data` with appropriate options

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


> Example responses

> 200 Response

```json
{
  "enabled": true,
  "trained": true,
  "training_progress": 100,
  "models_trained": 1247,
  "dimensions_monitored": 1247,
  "detection_enabled": true,
  "anomaly_detection_running": true
}
```

<h3 id="deprecated-get-machine-learning-detection-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ML detection information for the host|Inline|
|503|Service Unavailable|Service unavailable - ML not compiled in, not enabled, or Netdata not ready|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

<h1 id="netdata-api-dyncfg">dyncfg</h1>

## getConfig

<a id="opIdgetConfig"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/config \
  -H 'Accept: application/json'
```

`GET /api/v1/config`

<aside class="warning">
This operation is deprecated
</aside>

Get dynamic configuration information.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="getconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|false|The type of information required|
|id|query|string|false|The ID of the dynamic configuration entity|
|path|query|string|false|Top level path of the configuration entities, used with action 'tree'|
|timeout|query|number|false|The timeout in seconds|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|tree|
|action|schema|
|action|get|
|action|enable|
|action|disable|
|action|restart|

> Example responses

> 200 Response

```json
{
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 400 Response

```json
{
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 404 Response

```json
{
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="getconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The call was successful.|Inline|
|400|Bad Request|Something is wrong with the request.|[config_default_response](#schemaconfig_default_response)|
|404|Not Found|The configurable entity requests is not found.|[config_default_response](#schemaconfig_default_response)|

<h3 id="getconfig-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[config_default_response](#schemaconfig_default_response)|false|none|none|
|*oneOf*|[config_tree](#schemaconfig_tree)|false|none|none|
|*oneOf*|[config_schema](#schemaconfig_schema)|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## postConfig

<a id="opIdpostConfig"></a>

> Code samples

```bash
curl http://localhost:19999/api/v1/config \
  -X POST \
  -H 'Accept: application/json'
```

`POST /api/v1/config`

Post dynamic configuration to Netdata.


<h3 id="postconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|false|The type of action required.|
|id|query|string|false|The ID of the dynamic configuration entity to configure.|
|name|query|string|false|Name of the dynamic configuration entity, used with action 'add'|
|timeout|query|number|false|The timeout in seconds|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|add|
|action|test|
|action|update|

> Example responses

> 200 Response

```json
{
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 202 Response

```json
{
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 299 Response

```json
{
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 400 Response

```json
{
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 404 Response

```json
{
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="postconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The call was successful. This also means the configuration is currently running.|[config_default_response](#schemaconfig_default_response)|
|202|Accepted|The call was successful. The configuration has been accepted, but its status is not yet known.|[config_default_response](#schemaconfig_default_response)|
|299|299|The call was successful. The configuration has been accepted, but a restart is required to apply it.|[config_default_response](#schemaconfig_default_response)|
|400|Bad Request|Something is wrong with the request.|[config_default_response](#schemaconfig_default_response)|
|404|Not Found|The configurable entity requests is not found.|[config_default_response](#schemaconfig_default_response)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="netdata-api-variables">variables</h1>

## Retrieve the value of a specific chart variable used in alert expressions

<a id="opIdvariable_v3"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v3/variable?chart=system.ram&variable=used' \
  -H 'Accept: application/json'
```

`GET /api/v3/variable`

Returns the current value of a variable associated with a specific chart. Variables are used in alert expressions for dynamic threshold calculations, data transformations, and alert logic evaluation.

**What are Chart Variables?**
Variables in Netdata are named values that can be:
- **Chart-specific metrics:** Current values from dimensions (e.g., `$used`, `$total`)
- **Calculated values:** Derived from chart data (e.g., percentages, ratios)
- **Statistical values:** Min, max, average values over time windows
- **Alert-related values:** Previous alert states, thresholds
- **System variables:** Host labels, node information

**Common Use Cases:**
- **Alert Threshold Debugging:** Understand what value triggered an alert
- **Alert Expression Development:** Test variable values while writing alert expressions
- **Troubleshooting:** Verify variable calculations are correct
- **Dynamic Configuration:** Check runtime values used in alert logic

**Variable Types:**
1. **Dimension Variables:** Direct dimension values (e.g., `used`, `free`, `cached`)
2. **Lookup Variables:** Result of lookup operations over time ranges
3. **Calculated Variables:** Custom calculations defined in alert configs
4. **Chart Variables:** Chart-level metadata (family, units, etc.)
5. **Host Variables:** Host-specific values and labels

**Example Variables:**
- `$this` - The current calculated value
- `$used` - Value of "used" dimension
- `$total` - Value of "total" dimension
- `$1hour_cpu_usage` - CPU usage over last hour (lookup variable)
- `$ram_percentage` - Calculated RAM usage percentage

**How Variables Work in Alerts:**
Alert expressions like `$this > 80` use variables to dynamically evaluate conditions. This endpoint lets you see the actual runtime values of these variables.

**Workflow for Alert Development:**
1. Identify the chart: `GET /api/v1/charts` or `GET /api/v3/contexts`
2. Get variable value: `GET /api/v3/variable?chart=system.ram&variable=$used`
3. Test alert expression with actual values
4. Refine alert thresholds based on variable behavior

**Response Format:**
Returns JSON with the variable value and metadata about how it was calculated, including:
- Current value
- Calculation trace (how the value was computed)
- Source dimensions
- Any transformations applied

**Note:** This is a specialized endpoint primarily used for alert development and troubleshooting. For general metric values, use `/api/v3/data` instead.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="retrieve-the-value-of-a-specific-chart-variable-used-in-alert-expressions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chart|query|string|true|The chart identifier (ID or name) where the variable is defined.<br><br>**Chart Identifier Format:**<br>Charts can be specified by either their unique ID or their name.<br><br>**Chart ID Format:**<br>- Format: `type.name` (e.g., `system.cpu`, `disk.sda_io`, `mysql.queries`)<br>- This is the canonical identifier shown in chart metadata<br>- Case-sensitive<br>- More reliable as it doesn't change<br><br>**Chart Name Format:**<br>- Human-readable name (e.g., "System CPU")<br>- May contain spaces<br>- Less reliable as it can change<br>- The API will try to find by name if ID lookup fails<br><br>**How to Find Chart IDs:**<br>1. **From /api/v1/charts:**<br>   ```<br>   GET /api/v1/charts<br>   ```<br>   Response includes all chart IDs in the system<br><br>2. **From /api/v3/contexts:**<br>   ```<br>   GET /api/v3/contexts<br>   ```<br>   Lists contexts and their chart instances<br><br>3. **From Alert Configuration:**<br>   Alert configs reference charts in their `on` clause<br><br>4. **From Netdata Dashboard:**<br>   Chart IDs are shown in chart metadata<br><br>**Examples:**<br>- `chart=system.cpu` - System CPU chart<br>- `chart=system.ram` - System RAM chart<br>- `chart=disk.sda_io` - Disk sda I/O chart<br>- `chart=mysql.queries` - MySQL queries chart<br><br>**Common Chart IDs by Category:**<br>- **System:** `system.cpu`, `system.load`, `system.ram`, `system.io`<br>- **Disk:** `disk.space`, `disk.io`, `disk.inodes`<br>- **Network:** `net.eth0`, `net.packets`<br>- **Databases:** `mysql.queries`, `postgres.connections`, `redis.memory`<br><br>**Important Notes:**<br>- This parameter is **REQUIRED**<br>- Must reference an existing chart on the specified host<br>- Chart must be actively collecting data<br>- Case-sensitive<br><br>**Error Handling:**<br>- Missing parameter → 400 Bad Request: "A chart= and a variable= are required."<br>- Invalid/non-existent chart → 404 Not Found: "Chart is not found: <chart>"<br>|
|variable|query|string|true|The variable name to look up within the specified chart.<br><br>**Variable Name Format:**<br>Variable names typically follow these conventions:<br>- Start with `$` in alert expressions, but the `$` is optional in this parameter<br>- Names are case-sensitive<br>- Can reference dimensions, calculated values, or lookups<br><br>**Variable Name Categories:**<br><br>**1. Dimension Variables (most common):**<br>Direct references to chart dimensions:<br>- `used` - Value of "used" dimension<br>- `free` - Value of "free" dimension<br>- `cached` - Value of "cached" dimension<br>- `buffers` - Value of "buffers" dimension<br>- `read` - Read operations/bytes<br>- `write` - Write operations/bytes<br><br>**2. Special Variables:**<br>- `this` - The calculated/evaluated value from alert expression<br>- `status` - Current alert status<br>- `value` - Current metric value<br><br>**3. Lookup Variables:**<br>Variables created via lookup operations:<br>- Format: `<duration>_<dimension>_<method>`<br>- Example: `1hour_cpu_avg` - Average CPU over last hour<br>- Example: `5min_disk_used_max` - Max disk used in last 5 minutes<br><br>**4. Calculated Variables:**<br>Custom variables defined in alert configurations:<br>- `ram_percentage` - (used / total) * 100<br>- `disk_usage_ratio` - used / total<br>- `error_rate` - errors / total_requests<br><br>**5. Chart Metadata Variables:**<br>- `family` - Chart family/category<br>- `units` - Chart units<br>- `chart_type` - Chart type<br><br>**How to Discover Available Variables:**<br>1. **From Alert Configuration:**<br>   Alert expressions reveal which variables are available<br>   ```<br>   GET /api/v3/alert_config?config=<uuid><br>   ```<br><br>2. **From /api/v1/alarm_variables:**<br>   Lists all variables for a chart<br>   ```<br>   GET /api/v1/alarm_variables?chart=system.ram<br>   ```<br><br>3. **From Chart Dimensions:**<br>   Dimension names are typically available as variables<br>   ```<br>   GET /api/v1/chart?chart=system.ram<br>   ```<br><br>**Common Variable Examples by Chart:**<br><br>**For system.ram:**<br>- `used`, `free`, `cached`, `buffers`<br><br>**For system.cpu:**<br>- `user`, `system`, `nice`, `idle`, `iowait`<br><br>**For disk.space:**<br>- `used`, `avail` (available), `reserved`<br><br>**For disk.io:**<br>- `read`, `write`<br><br>**For mysql.queries:**<br>- `select`, `insert`, `update`, `delete`<br><br>**Important Notes:**<br>- This parameter is **REQUIRED**<br>- Variable name must exist in the chart's variable set<br>- Case-sensitive<br>- The `$` prefix is optional (both `$used` and `used` work)<br><br>**Error Handling:**<br>- Missing parameter → 400 Bad Request: "A chart= and a variable= are required."<br>- Non-existent variable → Returns trace showing variable not found<br>|

> Example responses

> 200 Response

```json
{}
```

<h3 id="retrieve-the-value-of-a-specific-chart-variable-used-in-alert-expressions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Returns the variable value and calculation trace.<br><br>**Response Structure:**<br>The response is a JSON object containing:<br><br>**Variable Lookup Trace:**<br>Shows the step-by-step process of how the variable value was calculated:<br>- Variable name being looked up<br>- Source dimensions queried<br>- Calculation methods applied<br>- Intermediate values<br>- Final calculated value<br><br>**Example Response:**<br>```json<br>{<br>  "variable": "$used",<br>  "chart": "system.ram",<br>  "value": 8589934592,<br>  "units": "B",<br>  "trace": [<br>    {<br>      "step": "lookup_dimension",<br>      "dimension": "used",<br>      "raw_value": 8589934592<br>    },<br>    {<br>      "step": "final_value",<br>      "value": 8589934592,<br>      "units": "B"<br>    }<br>  ]<br>}<br>```<br><br>**Response Fields:**<br>- `variable`: The requested variable name<br>- `chart`: The chart ID where variable was found<br>- `value`: Current numeric value of the variable<br>- `units`: Unit of measurement<br>- `trace`: Array of calculation steps showing how value was derived<br><br>**Trace Information:**<br>The trace provides transparency into variable evaluation, showing:<br>- Dimension lookups performed<br>- Data aggregation methods used<br>- Time ranges evaluated<br>- Transformations applied<br>- Why certain values were selected<br><br>**Use Cases for Trace:**<br>- **Debugging Alerts:** Understand why an alert triggered<br>- **Validating Logic:** Verify alert expressions evaluate correctly<br>- **Performance Analysis:** See which dimensions contribute to variable<br>- **Education:** Learn how alert variables are calculated<br><br>**Response Characteristics:**<br>- Content-Type: application/json<br>- Not cacheable (values change constantly)<br>- Real-time evaluation at query time<br>- Includes calculation metadata<br><br>**Note:** The exact trace format depends on the complexity of the variable lookup. Simple dimension variables have short traces, while complex calculated variables or lookups have detailed multi-step traces.<br>|Inline|
|400|Bad Request|Bad request. Common causes:<br>- Missing `chart` parameter (error: "A chart= and a variable= are required.")<br>- Missing `variable` parameter (error: "A chart= and a variable= are required.")<br>- Empty parameter values<br>- Malformed request<br><br>**Error Response:**<br>Returns plain text error message explaining what went wrong.<br><br>**Example Error:**<br>```<br>A chart= and a variable= are required.<br>```<br>|None|
|404|Not Found|Chart not found. The specified chart ID or name does not exist.<br><br>**Error Response:**<br>Returns plain text message indicating chart was not found.<br><br>**Example Error:**<br>```<br>Chart is not found: system.nonexistent<br>```<br><br>**Common Reasons:**<br>- Chart ID was mistyped<br>- Chart doesn't exist on this host<br>- Chart was removed (plugin stopped collecting)<br>- Chart is on a different node (check node parameter if in multi-node setup)<br><br>**Troubleshooting:**<br>1. List available charts: `GET /api/v1/charts`<br>2. Verify chart ID spelling and capitalization<br>3. Check if chart is actively collecting data<br>4. Ensure you're querying the correct node<br>|None|
|500|Internal Server Error|Internal server error during variable lookup.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

<h1 id="netdata-api-versions">versions</h1>

## Retrieve Netdata agent version information across nodes

<a id="opIdversions3"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/versions \
  -H 'Accept: application/json'
```

`GET /api/v3/versions`

Returns version information for Netdata agents running on monitored nodes.
This endpoint provides visibility into the software versions deployed across your infrastructure,
helping identify version mismatches, outdated agents, and upgrade planning.

**Version Information Includes:**
- Netdata agent version string (e.g., "v1.40.0")
- Build information and commit hash
- Protocol versions supported
- Feature capabilities based on version

**Use Cases:**
- **Version audit**: Identify which nodes run which versions
- **Upgrade planning**: Find nodes that need updates
- **Compatibility checking**: Ensure version compatibility across infrastructure
- **Feature availability**: Determine which features are available on which nodes
- **Security compliance**: Identify nodes running vulnerable versions

**Common Usage Patterns:**

1. **Get versions of all nodes:**
   ```
   /api/v3/versions
   ```

2. **Check versions of specific nodes:**
   ```
   /api/v3/versions?nodes=prod-*
   ```

3. **Scope to production infrastructure:**
   ```
   /api/v3/versions?scope_nodes=prod-*
   ```

**Response Structure:**
Returns version information grouped by node, showing:
- Agent version string
- Build timestamp
- Git commit hash
- Protocol versions
- Feature flags and capabilities

**Security & Access Control:**
- **Route ACL:** `HTTP_ACL_NOCHECK` skips only this endpoint's route-table ACL comparison
- **Bearer Protection:** This route requires `HTTP_ACCESS_ANONYMOUS_DATA`; when bearer protection is enabled, an unauthenticated request is rejected
- **Connection/IP Admission:** Direct HTTP remains subject to `allow connections from`, listener/port ACLs, and coarse API admission
- **Callback:** No additional authorization check is applied after the route gates


<h3 id="retrieve-netdata-agent-version-information-across-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string|false|Simple pattern to match node hostnames for scope filtering. Uses Netdata's simple pattern<br>matching (not regex). Matched nodes define the scope for version information retrieval.<br><br>**Pattern Syntax:**<br>- `*` matches any number of characters<br>- Use `\|` to separate multiple patterns (OR logic)<br>- Matches are case-insensitive<br>- No regex support - only simple wildcards<br><br>**Examples:**<br>- `prod-*` - All production nodes<br>- `*-db-*` - All database nodes<br>- `web-*\|app-*` - All web or application nodes<br>- `*` - All nodes (default)<br>|
|nodes|query|string|false|Simple pattern to filter which nodes to include in the version information response.<br>After scope is determined, this filters the results. Uses the same pattern syntax as scope_nodes.<br><br>**Difference from scope_nodes:**<br>- `scope_nodes` defines what nodes to analyze<br>- `nodes` filters which nodes appear in the output<br><br>**Examples:**<br>- `old-*` - Only show nodes matching "old-*" pattern<br>- Specific hostnames: `node1\|node2\|node3`<br>|
|options|query|string|false|Comma-separated list of options to control response content and format.<br><br>**Available Options:**<br>- `minify` - Minimize JSON output (no pretty-printing)<br>- `debug` - Include additional debug information<br>- `raw` - Include raw version metadata<br><br>**Examples:**<br>- `minify` - Compact JSON response<br>- `debug,raw` - Debug mode with raw metadata<br>|
|timeout|query|integer|false|Maximum time in seconds to wait for the query to complete before timing out.<br><br>**Guidelines:**<br>- Recommended: 10-30 seconds for most queries<br>- Version information is usually quick to retrieve<br>- Timeout mainly applies to very large infrastructures<br>|
|cardinality|query|integer|false|Maximum number of nodes to include in the response to prevent overwhelming large responses.<br>When this limit is exceeded, the response will indicate how many nodes were omitted.<br><br>**Purpose:**<br>- Prevent memory exhaustion from very large infrastructures<br>- Control response size for performance<br>- Useful when exploring large node sets incrementally<br><br>**Recommendations:**<br>- Small infrastructures (< 100 nodes): Use default<br>- Medium infrastructures (100-1000 nodes): 500-1000<br>- Large infrastructures (> 1000 nodes): Use filtering or increase limit carefully<br>|

> Example responses

> 200 Response

```json
{
  "versions": [
    {
      "hostname": "string",
      "machine_guid": "string",
      "version": "v1.40.0",
      "build_info": "string",
      "commit_hash": "string",
      "protocol_version": 0,
      "features": [
        "string"
      ]
    }
  ],
  "omitted": 0
}
```

<h3 id="retrieve-netdata-agent-version-information-across-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved version information.<br><br>Returns version data for each node including agent version, build info,<br>protocol versions, and feature capabilities.<br>|Inline|
|400|Bad Request|Invalid parameters provided (e.g., invalid pattern syntax).|None|
|500|Internal Server Error|Internal server error during version information retrieval.|None|
|504|Gateway Timeout|Query timeout - version collection took too long.|None|

<h3 id="retrieve-netdata-agent-version-information-across-nodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versions|[object]|false|none|Array of version information per node|
|» hostname|string|false|none|Node hostname|
|» machine_guid|string|false|none|Unique node identifier|
|» version|string|false|none|Netdata agent version string|
|» build_info|string|false|none|Build information and timestamp|
|» commit_hash|string|false|none|Git commit hash of the build|
|» protocol_version|integer|false|none|Streaming protocol version supported|
|» features|[string]|false|none|Feature flags and capabilities|
|omitted|integer|false|none|Number of nodes omitted due to cardinality limit|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="netdata-api-config">config</h1>

## Manage Netdata dynamic configuration

<a id="opIdconfig3"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/config \
  -H 'Accept: application/json'
```

`GET /api/v3/config`

Provides access to Netdata's dynamic configuration system, allowing retrieval, modification,
and management of configuration across plugins and data collectors.

**Dynamic Configuration System:**
Netdata's dyncfg system allows runtime configuration management without restarting the agent:
- **View configuration tree**: Browse all configurable components
- **Get current config**: Retrieve active configuration for any component
- **Update configuration**: Modify settings on-the-fly
- **Add/remove jobs**: Manage data collection jobs dynamically
- **Enable/disable**: Toggle components without editing files
- **Test configuration**: Validate changes before applying

**Configuration Hierarchy:**
```
/ (root)
├── collectors/
│   ├── plugins.d/
│   ├── python.d/
│   ├── go.d/
│   └── ...
├── health/
└── streaming/
```

**Common Actions:**
- `tree` - Browse configuration hierarchy
- `get` - Retrieve current configuration
- `schema` - Get configuration schema/template
- `update` - Modify existing configuration
- `add` - Create new job/instance
- `remove` - Delete job/instance
- `enable` - Activate disabled component
- `disable` - Deactivate component
- `test` - Validate configuration without applying
- `restart` - Restart component with new config
- `userconfig` - Get user-editable configuration

**Use Cases:**
- **Configuration management**: Centrally manage agent configuration
- **Job provisioning**: Add new data collection jobs without restart
- **A/B testing**: Test configuration changes before deployment
- **Automation**: Integrate with configuration management tools
- **Troubleshooting**: View and modify settings for debugging

**Common Usage Patterns:**

1. **Browse configuration tree:**
   ```
   /api/v3/config?action=tree&path=/
   ```

2. **Get configuration for a specific component:**
   ```
   /api/v3/config?action=get&id=collectors:go.d:prometheus
   ```

3. **Get configuration schema:**
   ```
   /api/v3/config?action=schema&id=collectors:go.d:prometheus
   ```

4. **Add new data collection job:**
   ```
   POST /api/v3/config?action=add&id=collectors:go.d:prometheus&name=my-app
   Content-Type: application/json

   {
     "url": "http://my-app:9090/metrics",
     "update_every": 10
   }
   ```

5. **Update existing configuration:**
   ```
   POST /api/v3/config?action=update&id=collectors:go.d:prometheus:my-app
   Content-Type: application/json

   {
     "update_every": 5
   }
   ```

6. **Test configuration before applying:**
   ```
   POST /api/v3/config?action=test&id=collectors:go.d:prometheus&name=test-job
   [configuration JSON]
   ```

**ID Format:**
Configuration IDs use colon-separated hierarchical paths:
- `collectors:go.d:prometheus` - Plugin/collector level
- `collectors:go.d:prometheus:job-name` - Specific job/instance
- `health:notifications` - Health alert notifications

**Request Body:**
For `update`, `add`, and `test` actions, provide configuration as JSON in request body.
Use `schema` action to get the expected configuration structure.

**Security:**
- Configuration changes require appropriate permissions
- Some actions may be restricted by ACL
- Changes are logged for audit trail

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="manage-netdata-dynamic-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|false|Configuration action to perform. Different actions require different additional parameters.<br><br>**Available Actions:**<br><br>- **`tree`** (default): Browse configuration hierarchy<br>  - Additional params: `path` (optional, default "/"), `id` (optional)<br>  - Returns: Tree structure of configurable components<br><br>- **`get`**: Retrieve current configuration<br>  - Required params: `id`<br>  - Returns: Current active configuration<br><br>- **`schema`**: Get configuration schema/template<br>  - Required params: `id`<br>  - Returns: Schema defining valid configuration structure<br><br>- **`update`**: Modify existing configuration<br>  - Required params: `id`<br>  - Request body: JSON with configuration changes<br>  - Returns: Success/error status<br><br>- **`add`**: Create new job/instance<br>  - Required params: `id`, `name`<br>  - Request body: JSON with initial configuration<br>  - Returns: Success/error status<br><br>- **`remove`**: Delete job/instance<br>  - Required params: `id`<br>  - Returns: Success/error status<br><br>- **`enable`**: Activate disabled component<br>  - Required params: `id`<br>  - Returns: Success/error status<br><br>- **`disable`**: Deactivate component without removing<br>  - Required params: `id`<br>  - Returns: Success/error status<br><br>- **`test`**: Validate configuration without applying<br>  - Required params: `id`, `name`<br>  - Request body: JSON with configuration to test<br>  - Returns: Validation results<br><br>- **`restart`**: Restart component with new configuration<br>  - Required params: `id`<br>  - Returns: Success/error status<br><br>- **`userconfig`**: Get user-editable configuration file<br>  - Required params: `id`<br>  - Returns: Configuration in user-editable format<br>|
|path|query|string|false|Path in configuration tree when using `action=tree`.<br>Specifies which branch of the configuration hierarchy to explore.<br><br>**Path Format:**<br>- Root: `/`<br>- Collectors: `/collectors`<br>- Specific plugin: `/collectors/go.d`<br>- Health: `/health`<br><br>**Examples:**<br>- `/` - Root level (all categories)<br>- `/collectors` - All collectors<br>- `/collectors/go.d` - Go collectors<br>|
|id|query|string|false|Configuration component ID using colon-separated hierarchical notation.<br>Required for most actions except `tree`.<br><br>**ID Format:**<br>`category:plugin:collector[:job-name]`<br><br>**Examples:**<br>- `collectors:go.d:prometheus` - Prometheus collector<br>- `collectors:go.d:prometheus:local` - Specific Prometheus job "local"<br>- `collectors:python.d:nginx` - Nginx Python collector<br>- `health:notifications` - Health notification settings<br><br>**ID Validation:**<br>- Alphanumeric characters, dots, underscores, hyphens<br>- Colons separate hierarchy levels<br>- Invalid IDs return 400 Bad Request<br>|
|name|query|string|false|Name for new job/instance when using `action=add` or `action=test`.<br><br>**Name Requirements:**<br>- Alphanumeric characters, dots, underscores, hyphens<br>- Must be unique within the collector/plugin<br>- Will be appended to `id` to form full configuration path<br><br>**Examples:**<br>- If `id=collectors:go.d:prometheus` and `name=my-app`<br>- Full config ID becomes: `collectors:go.d:prometheus:my-app`<br><br>**Invalid Names:**<br>- Empty or missing (when required): Returns 400 Bad Request<br>- Special characters: Returns 400 Bad Request<br>- Duplicate name: May return error or override behavior depends on action<br>|
|timeout|query|integer|false|Maximum time in seconds to wait for configuration operation to complete.<br><br>**Timeout Guidelines:**<br>- Read operations (get, schema, tree): 10-30 seconds<br>- Write operations (update, add, remove): 30-120 seconds<br>- Test operations: 60-120 seconds (may involve validation checks)<br>- Restart operations: 120-300 seconds (component restart time)<br><br>**Minimum:** 10 seconds (enforced by code)<br>**Default:** 120 seconds<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|tree|
|action|get|
|action|schema|
|action|update|
|action|add|
|action|remove|
|action|enable|
|action|disable|
|action|test|
|action|restart|
|action|userconfig|

> Example responses

> 200 Response

```json
{}
```

<h3 id="manage-netdata-dynamic-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Configuration operation completed successfully.<br><br>Response format depends on the action:<br>- `tree`: Configuration hierarchy tree<br>- `get`: Current configuration JSON<br>- `schema`: Configuration schema/template<br>- `update`/`add`/`remove`: Success confirmation<br>- `test`: Validation results<br>|Inline|
|400|Bad Request|Bad request. Common causes:<br>- Invalid action name<br>- Missing required parameters (`id`, `name`)<br>- Invalid `id` or `name` format<br>- Malformed request body JSON<br>|None|
|403|Forbidden|Forbidden. Configuration change requires higher permissions.<br>|None|
|404|Not Found|Configuration component not found. The specified `id` does not exist.<br>|None|
|500|Internal Server Error|Internal server error during configuration operation.|None|
|504|Gateway Timeout|Configuration operation timeout.|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Manage Netdata configuration with request body data

<a id="opIdconfig3_post"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /api/v3/config`

Same as GET /api/v3/config, but allows passing configuration data via request body
for actions like `update`, `add`, and `test`.

Use this method when:
- Updating existing configuration (`action=update`)
- Adding new jobs/instances (`action=add`)
- Testing configuration before applying (`action=test`)

See GET /api/v3/config for complete documentation on actions, parameters, and responses.


> Body parameter

```json
{}
```

<h3 id="manage-netdata-configuration-with-request-body-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|false|Configuration action to perform (see GET method for details)|
|path|query|string|false|Path in configuration tree (see GET method for details)|
|id|query|string|false|Configuration component ID (see GET method for details)|
|name|query|string|false|Name for new job/instance (see GET method for details)|
|timeout|query|integer|false|Maximum timeout in seconds (see GET method for details)|
|body|body|object|false|Configuration data for `update`, `add`, and `test` actions.<br><br>**Format:**<br>- Content-Type: application/json<br>- Structure depends on the specific configuration component<br>- Use `action=schema` to get the expected structure<br><br>**Example for adding Prometheus job:**<br>```json<br>{<br>  "url": "http://localhost:9090/metrics",<br>  "update_every": 10,<br>  "autodetection_retry": 0<br>}<br>```<br><br>**Example for updating existing config:**<br>```json<br>{<br>  "update_every": 5,<br>  "timeout": 30<br>}<br>```<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|tree|
|action|get|
|action|schema|
|action|update|
|action|add|
|action|remove|
|action|enable|
|action|disable|
|action|test|
|action|restart|
|action|userconfig|

> Example responses

> 200 Response

```json
{}
```

<h3 id="manage-netdata-configuration-with-request-body-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Configuration operation completed successfully (see GET method for response details)|Inline|
|400|Bad Request|Bad request (see GET method for details)|None|
|403|Forbidden|Forbidden (see GET method for details)|None|
|404|Not Found|Configuration component not found (see GET method for details)|None|
|500|Internal Server Error|Internal server error (see GET method for details)|None|
|504|Gateway Timeout|Configuration operation timeout (see GET method for details)|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

<h1 id="netdata-api-settings">settings</h1>

## Retrieve user settings/preferences (GET)

<a id="opIdsettings_get"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/settings \
  -H 'Accept: application/json'
```

`GET /api/v3/settings`

**V3 SPECIFIC ENDPOINT**

Retrieves stored user settings and preferences from Netdata's settings storage.
The settings API provides persistent key-value storage for UI preferences, dashboard layouts,
alert configurations, and other user-specific data.

**Settings System:**
- **Persistent storage**: Settings survive agent restarts
- **Version-controlled**: Each update increments version for conflict detection
- **User-scoped**: Authenticated users can have multiple named settings files
- **Anonymous access**: Limited to 'default' file only
- **JSON format**: All settings stored as JSON with mandatory 'version' field

**File-Based Storage:**
Settings are stored as individual files in Netdata's var/lib directory:
- Anonymous users: Only `file=default` allowed
- Authenticated users: Can create custom files (e.g., `file=my-dashboard`)
- File names: Alphanumeric, dashes, underscores only

**Version Control:**
Each settings object has a `version` field:
- Starts at version 1 for new files
- Auto-incremented on each PUT operation
- Used for optimistic locking to prevent conflicts

**Use Cases:**
- **Dashboard preferences**: Store layout, theme, selected metrics
- **Alert customization**: Save user-specific alert thresholds
- **UI state**: Remember filters, time ranges, node selections
- **Multi-device sync**: Share settings across browsers/devices (for authenticated users)

**Common Usage Patterns:**

1. **Get default settings (anonymous user):**
   ```
   GET /api/v3/settings?file=default
   ```

2. **Get named settings file (authenticated):**
   ```
   GET /api/v3/settings?file=production-dashboard
   ```

**Response Structure:**
```json
{
  "version": 3,
  "theme": "dark",
  "defaultTimeRange": "-3600",
  "favoriteMetrics": ["system.cpu", "system.ram"]
}
```

**New Files:**
If requested file doesn't exist, returns initial version:
```json
{
  "version": 1
}
```

**Size Limit:**
Maximum settings file size: 20 MiB

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="retrieve-user-settingspreferences-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|query|string|false|Name of the settings file to retrieve.<br><br>**File Naming Rules:**<br>- Alphanumeric characters only<br>- Dashes (-) and underscores (_) allowed<br>- No spaces or special characters<br>- Case-sensitive<br><br>**Access Control:**<br>- **Anonymous users**: Only `file=default` allowed<br>- **Authenticated users (bearer token)**: Any valid file name<br><br>**Examples:**<br>- `default` - Default settings file<br>- `my-dashboard` - Custom dashboard settings<br>- `prod-alerts` - Production alert preferences<br>- `mobile-view` - Mobile UI settings<br><br>**Invalid File Names:**<br>- Missing or empty: Returns 400 Bad Request<br>- Special characters: Returns 400 Bad Request<br>- Non-default for anonymous: Returns 400 Bad Request<br>|

> Example responses

> 200 Response

```json
{
  "version": 1
}
```

<h3 id="retrieve-user-settingspreferences-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings file retrieved successfully.<br><br>Returns JSON object with at minimum a `version` field.<br>May contain any additional user-defined fields.<br>|Inline|
|400|Bad Request|Bad request. Common causes:<br>- Invalid file name (contains special characters)<br>- Anonymous user trying to access non-default file<br>- Empty file name<br>|None|
|500|Internal Server Error|Internal server error during settings retrieval.|None|

<h3 id="retrieve-user-settingspreferences-get-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|integer|true|none|Current version number (auto-incremented on updates)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Create or update user settings/preferences (PUT)

<a id="opIdsettings_put"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "version": 0,
    "theme": "dark",
    "language": "en"
  }'
```

`PUT /api/v3/settings`

**V3 SPECIFIC ENDPOINT**

Creates or updates user settings with optimistic locking to prevent concurrent modification conflicts.

**Update Process:**
1. Client GET current settings (to get current version)
2. Client modifies settings locally
3. Client PUT updated settings WITH ORIGINAL VERSION
4. Netdata validates version matches current file
5. If match: Update succeeds, version auto-incremented
6. If mismatch: Returns 409 Conflict

**Conflict Resolution (409 Response):**
When you receive 409 Conflict:
1. Another client updated the file
2. GET the file again to retrieve latest version
3. Reapply your changes to the new version
4. PUT again with the new version number

**Optimistic Locking Flow:**
```javascript
// 1. Get current settings
const response = await fetch('/api/v3/settings?file=my-dashboard');
const settings = await response.json(); // { version: 3, ... }

// 2. Modify settings
settings.theme = 'dark';

// 3. PUT with ORIGINAL version (still 3)
const result = await fetch('/api/v3/settings?file=my-dashboard', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(settings) // version: 3
});

if (result.status === 409) {
  // Conflict! File was updated by another client
  // Must GET again and retry
}
// If successful, file now has version: 4
```

**Payload Requirements:**
- MUST be valid JSON
- MUST include `version` field with current file version
- MAY include any additional fields
- Maximum size: 20 MiB (20,971,520 bytes); larger payloads return 413 Payload Too Large

**Version Management:**
- Client provides current version in payload
- Netdata verifies version matches file on disk
- Netdata increments version before saving
- Saved file has version + 1

**Use Cases:**
- Save dashboard configuration changes
- Update user preferences
- Store UI state
- Persist alert customizations

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


> Body parameter

```json
{
  "version": 0,
  "theme": "dark",
  "language": "en"
}
```

<h3 id="create-or-update-user-settingspreferences-put-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|query|string|false|Name of the settings file to create or update.<br><br>**File Naming Rules:**<br>- Alphanumeric characters only<br>- Dashes (-) and underscores (_) allowed<br>- No spaces or special characters<br>- Case-sensitive<br><br>**Access Control:**<br>- **Anonymous users**: Only `file=default` allowed<br>- **Authenticated users (bearer token)**: Any valid file name<br><br>**File Creation:**<br>- If file doesn't exist: Created with initial payload<br>- If file exists: Updated with new payload (version check applies)<br>|
|body|body|object|true|JSON object containing settings data with mandatory `version` field.<br><br>**Required Fields:**<br>- `version`: Integer matching current file version (or 0 for non-existent files)<br><br>**Optional Fields:**<br>- Any user-defined fields<br><br>**Size Limit:**<br>Maximum 20 MiB (20,971,520 bytes); larger payloads return 413 Payload Too Large<br><br>**Version Rules:**<br>- New file: version can be 0 or 1<br>- Existing file: version MUST match current file version exactly<br>- Mismatch causes 409 Conflict<br>|
|» version|body|integer|true|Current version from GET request|

> Example responses

> 200 Response

```json
{
  "message": "OK"
}
```

> 409 Response

```json
{
  "message": "Payload version does not match the version of the stored object"
}
```

<h3 id="create-or-update-user-settingspreferences-put-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings updated successfully. Version has been incremented.<br>|Inline|
|400|Bad Request|Bad request. Common causes:<br>- Invalid file name<br>- Missing `version` field in payload<br>- Invalid JSON payload<br>- Empty payload<br>- Anonymous user trying to access non-default file<br>|None|
|409|Conflict|Conflict. Version mismatch detected.<br><br>**Resolution Steps:**<br>1. GET current settings to retrieve latest version<br>2. Reapply your changes to the new version<br>3. PUT again with updated version number<br><br>This prevents lost updates when multiple clients modify settings concurrently.<br>|Inline|
|413|Payload Too Large|Payload too large. The PUT payload exceeds the 20 MiB (20,971,520-byte) maximum.|None|
|500|Internal Server Error|Internal server error during settings update.|None|

<h3 id="create-or-update-user-settingspreferences-put-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

<h1 id="netdata-api-streaming">streaming</h1>

## Get streaming information and statistics

<a id="opIdstream_info"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/stream_info \
  -H 'Accept: application/json'
```

`GET /api/v3/stream_info`

**V3 SPECIFIC ENDPOINT**

Returns detailed information about Netdata's streaming connections, including sender/receiver
statistics, buffer usage, compression ratios, and connection health metrics.

**Streaming Overview:**
Netdata supports hierarchical streaming where:
- **Child nodes** send metrics to **parent nodes** for centralization
- **Parent nodes** aggregate and store metrics from multiple children
- Streaming uses efficient binary protocol with compression
- Connections can be TLS-encrypted and authenticated

**Information Provided:**
- **Connection status**: Active, established, disconnected
- **Streaming statistics**: Bytes sent/received, compression ratios
- **Buffer usage**: Current buffer fill levels, drops
- **Performance metrics**: Streaming latency, throughput
- **Replication status**: Data replication lag and progress
- **Protocol version**: Streaming protocol version in use

**Use Cases:**
- **Monitor streaming health**: Ensure children are connected and streaming
- **Troubleshoot connectivity**: Identify disconnections and buffer issues
- **Performance analysis**: Check compression ratios and throughput
- **Capacity planning**: Monitor buffer usage and network bandwidth
- **Replication monitoring**: Track data replication status

**Common Usage Patterns:**

1. **Get streaming info for localhost:**
   ```
   /api/v3/stream_info
   ```

2. **Get streaming info for specific node:**
   ```
   /api/v3/stream_info?machine_guid=12345678-1234-1234-1234-123456789012
   ```

**Response Structure:**
Returns streaming information including:
- Parent/child relationship status
- Connection uptime and reconnection count
- Bytes sent/received with compression ratios
- Buffer usage (current size, maximum size, drops)
- Replication lag and status
- Stream protocol version

**Streaming Modes:**
- **Sender mode**: Node is streaming data TO a parent
- **Receiver mode**: Node is receiving data FROM children
- **Both**: Node can be both sender and receiver

**Health Indicators:**
- `connected: true/false` - Connection status
- `buffer_used_percentage` - Buffer fill level
- `compression_ratio` - Data compression efficiency
- `replication_lag_seconds` - Data replication delay

**Security & Access Control:**
- **Route ACL:** `HTTP_ACL_NOCHECK` skips only this endpoint's route-table ACL comparison
- **Bearer Protection:** `HTTP_ACCESS_NONE` means the generic access gate does not require a bearer token
- **Connection/IP Admission:** Direct HTTP remains subject to `allow connections from`, listener/port ACLs, and coarse API admission
- **Callback:** No additional authorization check is applied after the route gates


<h3 id="get-streaming-information-and-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|machine_guid|query|string(uuid)|false|Machine GUID (unique node identifier) to query streaming information for.<br>If not specified, returns streaming information for the local agent.<br><br>**GUID Format:**<br>- UUID format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`<br>- Case-insensitive<br>- Can be obtained from `/api/v3/nodes` endpoint<br><br>**Use Cases:**<br>- Query specific child node's streaming status<br>- Check parent node's connection to specific child<br>- Diagnostic queries for particular node<br><br>**Examples:**<br>- `12345678-1234-1234-1234-123456789012` - Specific node<br>- Empty/omitted - Local agent (default)<br><br>**Invalid GUIDs:**<br>- Malformed UUID: May return error or empty result<br>- Non-existent GUID: Returns empty or not-found response<br>|

> Example responses

> 200 Response

```json
{
  "machine_guid": "12345678-1234-1234-1234-123456789012",
  "hostname": "child-node-1",
  "streaming_mode": "sender",
  "sender": {
    "connected": true,
    "parent_hostname": "parent-node",
    "uptime_seconds": 86400,
    "reconnects": 2,
    "bytes_sent": 524288000,
    "bytes_compressed": 104857600,
    "compression_ratio": 5,
    "buffer_used_bytes": 1048576,
    "buffer_max_bytes": 10485760,
    "buffer_used_percentage": 10,
    "drops": 0
  },
  "protocol_version": 3
}
```

<h3 id="get-streaming-information-and-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved streaming information.<br><br>Returns streaming connection details, statistics, and health metrics.<br>|Inline|
|400|Bad Request|Invalid machine_guid format.|None|
|404|Not Found|Node with specified machine_guid not found.|None|
|500|Internal Server Error|Internal server error during streaming info retrieval.|None|

<h3 id="get-streaming-information-and-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|machine_guid|string(uuid)|false|none|Node machine GUID|
|hostname|string|false|none|Node hostname|
|streaming_mode|string|false|none|Streaming mode of this node|
|sender|object|false|none|Sender (child→parent) streaming information|
|» connected|boolean|false|none|Whether sender is currently connected to parent|
|» parent_hostname|string|false|none|Hostname of parent node|
|» uptime_seconds|integer|false|none|Connection uptime in seconds|
|» reconnects|integer|false|none|Number of reconnection attempts|
|» bytes_sent|integer|false|none|Total bytes sent|
|» bytes_compressed|integer|false|none|Bytes after compression|
|» compression_ratio|number|false|none|Compression ratio (original/compressed)|
|» buffer_used_bytes|integer|false|none|Current send buffer usage|
|» buffer_max_bytes|integer|false|none|Maximum send buffer size|
|» buffer_used_percentage|number|false|none|Buffer fill percentage|
|» drops|integer|false|none|Number of dropped metrics due to buffer overflow|
|receiver|object|false|none|Receiver (parent←children) streaming information|
|» children|[object]|false|none|Connected child nodes|
|» » machine_guid|string(uuid)|false|none|none|
|» » hostname|string|false|none|none|
|» » connected|boolean|false|none|none|
|» » uptime_seconds|integer|false|none|none|
|» » bytes_received|integer|false|none|none|
|» » replication_lag_seconds|integer|false|none|none|
|protocol_version|integer|false|none|Streaming protocol version|

#### Enumerated Values

|Property|Value|
|---|---|
|streaming_mode|sender|
|streaming_mode|receiver|
|streaming_mode|both|
|streaming_mode|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="netdata-api-webrtc">webrtc</h1>

## Establish WebRTC peer connection by exchanging SDP offer/answer

<a id="opIdrtcOffer3"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/rtc_offer \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'v=0
o=- 123456789 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0
m=application 9 UDP/DTLS/SCTP webrtc-datachannel
c=IN IP4 0.0.0.0
a=ice-ufrag:abcd1234
a=ice-pwd:efgh5678ijkl9012mnop3456
a=fingerprint:sha-256 AB:CD:EF:01:23:45:67:89:AB:CD:EF:01:23:45:67:89:AB:CD:EF:01:23:45:67:89:AB:CD:EF:01:23:45:67:89:AB
a=setup:actpass
a=mid:0
a=sctp-port:5000
a=max-message-size:65536
'
```

`POST /api/v3/rtc_offer`

**WebRTC Connection Establishment**

This endpoint implements the WebRTC signaling process for establishing peer-to-peer data connections with the Netdata agent. It follows the standard WebRTC negotiation flow using SDP (Session Description Protocol) offer/answer exchange.

**How It Works:**
1. Client creates a WebRTC peer connection and generates an SDP offer
2. Client sends the SDP offer to this endpoint via POST request body
3. Server processes the offer, configures ICE servers and connection parameters
4. Server generates and returns an SDP answer with ICE candidates
5. Client sets the answer to complete the WebRTC connection handshake
6. Data channels can then be established for real-time communication

**Use Cases:**
- **Real-time dashboards:** Stream live metrics with minimal latency using WebRTC data channels
- **Browser-based monitoring:** Enable direct peer-to-peer connections from web browsers to agents
- **NAT traversal:** Establish connections through firewalls and NATs using ICE/STUN/TURN
- **Low-latency updates:** Bypass HTTP polling for instant metric updates via WebRTC
- **Bi-directional communication:** Enable interactive control and monitoring in real-time

**Connection Configuration:**
- Maximum message size: 5 MiB (local), negotiated with remote peer
- ICE transport policy: All (both UDP and TCP)
- Automatic ICE candidate gathering
- Support for STUN/TURN servers
- Automatic port range selection
- MTU auto-detection

**Important Notes:**
- WebRTC must be enabled in agent configuration (enabled by default in debug builds)
- The endpoint waits for ICE gathering to complete before returning the answer
- The SDP offer must be valid and include media descriptions
- Response includes both SDP answer and gathered ICE candidates
- Connections are automatically cleaned up on timeout or disconnection

**Example SDP Offer Structure:**
```
v=0
o=- 123456789 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0
a=msid-semantic: WMS
m=application 9 UDP/DTLS/SCTP webrtc-datachannel
c=IN IP4 0.0.0.0
a=ice-ufrag:XXXX
a=ice-pwd:YYYY
a=fingerprint:sha-256 ZZ:ZZ:...
a=setup:actpass
a=mid:0
a=sctp-port:5000
a=max-message-size:65536
```

**Performance Characteristics:**
- Synchronous operation (blocks until ICE gathering completes)
- Typical response time: 100-500ms (depending on ICE gathering)
- Supports multiple concurrent connections
- Automatic connection cleanup on idle timeout

**Security & Access Control:**
- ⚠️ **ACLK-Only API** - This endpoint is ONLY accessible via Netdata Cloud (ACLK connection)
- **NOT accessible via:** Direct HTTP/HTTPS to agent, local dashboard, or external tools
- **Authentication:** Requires Netdata Cloud authentication (`SIGNED_ID` + `SAME_SPACE`)
- **User Requirements:** User must be authenticated and in the same cloud space as the agent
- **Development Mode:** Can be enabled for testing with `ACL_DEV_OPEN_ACCESS` flag


> Body parameter

```text
v=0
o=- 123456789 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0
m=application 9 UDP/DTLS/SCTP webrtc-datachannel
c=IN IP4 0.0.0.0
a=ice-ufrag:abcd1234
a=ice-pwd:efgh5678ijkl9012mnop3456
a=fingerprint:sha-256 AB:CD:EF:01:23:45:67:89:AB:CD:EF:01:23:45:67:89:AB:CD:EF:01:23:45:67:89:AB:CD:EF:01:23:45:67:89:AB
a=setup:actpass
a=mid:0
a=sctp-port:5000
a=max-message-size:65536

```

<h3 id="establish-webrtc-peer-connection-by-exchanging-sdp-offeranswer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "sdp": "v=0\no=- 987654321 2 IN IP4 192.168.1.100\ns=-\nt=0 0\na=group:BUNDLE 0\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\nc=IN IP4 192.168.1.100\na=candidate:1 1 udp 2130706431 192.168.1.100 54321 typ host\na=candidate:2 1 udp 1694498815 203.0.113.1 54321 typ srflx raddr 192.168.1.100 rport 54321\na=ice-ufrag:wxyz9876\na=ice-pwd:stuv5432wxyz1098abcd7654\na=fingerprint:sha-256 12:34:56:78:9A:BC:DE:F0:12:34:56:78:9A:BC:DE:F0:12:34:56:78:9A:BC:DE:F0:12:34:56:78:9A:BC:DE:F0:12\na=setup:active\na=mid:0\na=sctp-port:5000\na=max-message-size:5242880\n",
  "type": "answer"
}
```

<h3 id="establish-webrtc-peer-connection-by-exchanging-sdp-offeranswer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SDP answer successfully generated. The response contains the server's SDP answer<br>including all gathered ICE candidates. The client should set this as the remote<br>description to complete the WebRTC handshake.<br>|Inline|
|400|Bad Request|Bad request due to one of the following reasons:<br>- WebRTC is not enabled on this agent (check configuration)<br>- No SDP offer provided in request body<br>- Invalid SDP format or content<br>- Missing required SDP fields (ice-ufrag, ice-pwd, fingerprint)<br>|None|
|500|Internal Server Error|Internal server error during WebRTC connection establishment or ICE gathering.|None|

<h3 id="establish-webrtc-peer-connection-by-exchanging-sdp-offeranswer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sdp|string|false|none|SDP answer from the server containing session information, media descriptions,<br>ICE credentials, DTLS fingerprint, and all gathered ICE candidates.<br>|
|type|string|false|none|SDP message type (always "answer" for responses)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|answer|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aclkAuth
</aside>

## OBSOLETE: Establish WebRTC connection (use /api/v3/rtc_offer instead)

<a id="opIdrtcOffer2"></a>

> Code samples

```bash
curl http://localhost:19999/api/v2/rtc_offer \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'string'
```

`POST /api/v2/rtc_offer`

<aside class="warning">
This operation is deprecated
</aside>

**⚠️ OBSOLETE API - Will be removed in future versions**

This endpoint is deprecated. Use `/api/v3/rtc_offer` instead, which provides the same functionality.

**Migration:** Replace `/api/v2/rtc_offer` with `/api/v3/rtc_offer` in all API calls.

Establishes WebRTC peer-to-peer connection by exchanging SDP offer/answer for real-time data channels.

**Security & Access Control:**
- ⚠️ **ACLK-Only API** - Accessible only via Netdata Cloud (ACLK connection)
- Same access requirements as v3 version


> Body parameter

```text
string
```

<h3 id="obsolete-establish-webrtc-connection-use-apiv3rtcoffer-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|none|

<h3 id="obsolete-establish-webrtc-connection-use-apiv3rtcoffer-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SDP answer successfully generated|None|
|400|Bad Request|Invalid or missing SDP offer|None|
|500|Internal Server Error|Internal error during WebRTC connection establishment|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aclkAuth
</aside>

<h1 id="netdata-api-claiming">claiming</h1>

## Claim agent to Netdata Cloud

<a id="opIdclaim3"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/claim \
  -H 'Accept: application/json'
```

`GET /api/v3/claim`

**Agent Claiming to Netdata Cloud**

This endpoint initiates the process of claiming (connecting) a Netdata agent to Netdata Cloud. Claiming establishes a secure, authenticated connection between the agent and Netdata Cloud, enabling centralized monitoring, team collaboration, and cloud-based features.

**Claiming Process Flow:**
1. **Get Claim Info:** Call endpoint without parameters to get claiming status and verification command
2. **Generate Verification Key:** Server generates random session ID and saves it to `/var/lib/netdata/netdata_random_session_id`
3. **Verify Server Ownership:** Administrator runs provided OS-specific command to retrieve the verification key
4. **Submit Claim Request:** Call endpoint with key, token, URL, and optionally rooms to complete claiming
5. **Establish Connection:** Server connects to Netdata Cloud and registers the agent
6. **Reload Connection:** Agent reloads cloud connection and waits for online status

**Use Cases:**
- **Initial Setup:** Claim a new agent to connect it to Netdata Cloud for the first time
- **Team Onboarding:** Add agents to specific cloud rooms for team organization
- **Infrastructure Management:** Connect agents across distributed infrastructure to centralized monitoring
- **Security Verification:** Ensure only authorized users can claim agents through server access verification
- **Status Checking:** Query current claiming status and cloud connection state

**Claiming States:**
- **AVAILABLE:** Agent can be claimed (not yet connected to cloud)
- **OFFLINE:** Agent was claimed but is currently offline from cloud
- **INDIRECT:** Agent is connected through a parent agent
- **ONLINE:** Agent is claimed and online (cannot be re-claimed without unclaiming first)
- **BANNED:** Agent is banned from cloud (cannot be claimed)

**Security Features:**
- Random session key verification prevents unauthorized claiming
- Key is regenerated after each claim attempt (successful or failed)
- Key stored in file system requires server access to retrieve
- Parameter validation ensures only safe characters (alphanumeric, dots, commas, dashes, colons, slashes, underscores)
- Different OS-specific commands for key retrieval (Linux/Docker/Windows)

**Platform-Specific Key Retrieval:**
- **Linux:** `sudo cat /var/lib/netdata/netdata_random_session_id`
- **Docker:** `docker exec netdata cat /var/lib/netdata/netdata_random_session_id`
- **Windows:** `more C:\path\to\netdata_random_session_id`

**Response Formats:**
- **Info Response:** Returns cloud status, can_be_claimed flag, verification command, and agents info
- **Success Response:** Includes success=true, message="ok", updated cloud status
- **Error Response:** Includes success=false, error message, can_be_claimed flag, new verification key

**Important Notes:**
- Agent must be in AVAILABLE, OFFLINE, or INDIRECT state to be claimed
- Claiming token is obtained from Netdata Cloud UI (Space settings → Nodes tab → Add Nodes)
- Base URL typically points to Netdata Cloud API (e.g., https://api.netdata.cloud)
- Rooms parameter is optional - agent will be added to specified war rooms if provided
- After successful claiming, agent automatically reloads connection and waits for online status
- Failed claim attempts regenerate the verification key for security

**Example Workflow:**
```bash
# 1. Get claiming info and verification command
curl http://localhost:19999/api/v3/claim

# 2. Run the command shown in response to get the key
sudo cat /var/lib/netdata/netdata_random_session_id
# Output: 12345678-1234-1234-1234-123456789abc

# 3. Submit claim request with key from step 2 and token from Netdata Cloud
curl "http://localhost:19999/api/v3/claim?key=12345678-1234-1234-1234-123456789abc&token=YOUR_CLAIM_TOKEN&url=https://api.netdata.cloud&rooms=room1,room2"
```

**Security & Access Control:**
- **Route ACL:** `HTTP_ACL_NOCHECK` skips only this endpoint's route-table ACL comparison
- **Bearer Protection:** `HTTP_ACCESS_NONE` means the generic access gate does not require a bearer token
- **Connection/IP Admission:** Direct HTTP remains subject to `allow connections from`, listener/port ACLs, and coarse API admission
- **Claim Mutation:** Reading status needs no callback-local credential; changing claim state requires the current rotating random session key and valid claim parameters


<h3 id="claim-agent-to-netdata-cloud-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string(uuid)|false|**Verification key (UUID) obtained from the server's file system.**<br><br>This is a randomly generated session ID that proves the requester has access to the server.<br>To obtain this key:<br>1. Call the endpoint without parameters to get the OS-specific command<br>2. Run the command on the server (requires sudo/admin access)<br>3. Copy the UUID from the file content<br>4. Use it in the claim request<br><br>**Security Notes:**<br>- Key is randomly generated on each info request<br>- Key is regenerated after each claim attempt (prevents reuse)<br>- Mismatched key triggers new key generation (prevents brute force)<br>- Validates server ownership through file system access<br><br>**When to Include:**<br>- Omit when requesting claiming info/status<br>- Include when submitting actual claim request<br><br>Example: `12345678-1234-1234-1234-123456789abc`<br>|
|token|query|string|false|**Claiming token from Netdata Cloud.**<br><br>This token authorizes the agent to connect to a specific Netdata Cloud space.<br>Obtained from Netdata Cloud UI: Space settings → Nodes tab → Add Nodes → Copy claim token<br><br>**Validation:**<br>- Must contain only alphanumeric characters, dots, commas, dashes, colons, slashes, underscores<br>- Required when key parameter is provided<br>- Invalid token triggers error and key regeneration<br><br>**Token Characteristics:**<br>- Space-specific (each cloud space has different tokens)<br>- Can be regenerated in cloud UI if compromised<br>- Does not expire (remains valid until regenerated)<br><br>Example: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`<br>|
|url|query|string(uri)|false|**Netdata Cloud API base URL.**<br><br>The endpoint URL for Netdata Cloud API where the agent will connect.<br><br>**Standard Values:**<br>- Production: `https://api.netdata.cloud`<br>- Staging/Testing: `https://api-staging.netdata.cloud` (if applicable)<br><br>**Validation:**<br>- Must contain only alphanumeric characters, dots, commas, dashes, colons, slashes, underscores<br>- Required when key parameter is provided<br>- Should be valid HTTPS URL pointing to Netdata Cloud API<br><br>**Important Notes:**<br>- Use the URL provided in Netdata Cloud UI claim instructions<br>- Different cloud regions may have different URLs<br>- Invalid URL prevents successful claiming<br><br>Example: `https://api.netdata.cloud`<br>|
|rooms|query|string|false|**Comma-separated list of war room IDs to add the agent to.**<br><br>War rooms are organizational units within a Netdata Cloud space for grouping related nodes.<br><br>**Format:**<br>- Comma-separated room IDs (no spaces)<br>- Each room ID validated for safe characters<br>- Optional parameter (agent claimed to space without specific rooms if omitted)<br><br>**Validation:**<br>- Must contain only alphanumeric characters, dots, commas, dashes, colons, slashes, underscores<br>- Invalid format triggers error and key regeneration<br><br>**Room IDs:**<br>- Obtained from Netdata Cloud UI (room settings)<br>- Room must exist in the target space<br>- Agent added to all specified rooms after claiming<br>- Can be modified later in cloud UI<br><br>**Use Cases:**<br>- Add agent to production monitoring room<br>- Organize by environment (dev, staging, prod)<br>- Group by application or service type<br><br>Example: `room-1234-5678-90ab,room-cdef-0123-4567`<br>|

> Example responses

> 200 Response

```json
{
  "cloud": {
    "id": 0,
    "status": "available",
    "since": 1720000000,
    "age": 120,
    "url": "https://app.netdata.cloud",
    "reason": "Agent is not claimed yet"
  },
  "can_be_claimed": true,
  "key_filename": "/var/lib/netdata/netdata_random_session_id",
  "cmd": "sudo cat /var/lib/netdata/netdata_random_session_id",
  "help": "We need to verify this server is yours. SSH to this server and run this command. It will give you a UUID. Copy and paste this UUID to this box:",
  "agents": [
    {
      "hostname": "my-server",
      "machine_guid": "12345678-1234-1234-1234-123456789abc"
    }
  ]
}
```

<h3 id="claim-agent-to-netdata-cloud-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Claiming request processed successfully. Check the `success` field to determine if claiming succeeded.<br>- **Info response** (no key provided): Returns cloud status, verification command, and can_be_claimed flag<br>- **Success response** (key provided, claim succeeded): Returns success=true with updated cloud status<br>- **Action failed response** (key provided, claim failed): Returns success=false with failure reason<br>|Inline|
|400|Bad Request|Bad request (only in v2 API or earlier). V3 returns errors as JSON with HTTP 200.<br>Reasons include:<br>- Invalid key (doesn't match generated session ID)<br>- Invalid parameters (missing token/url, or invalid characters)<br>- Cloud connection failure<br>|None|

<h3 id="claim-agent-to-netdata-cloud-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|Present only for claim action responses (when key is provided).<br>true = claiming succeeded, false = claiming failed.<br>Not present in info responses (when requesting claim status without key).<br>|
|message|string|false|none|Result message. Present only for claim action responses.<br>- Success: "ok"<br>- Failure: Reason for failure (e.g., "invalid key", "invalid parameters", cloud connection error)<br>|
|cloud|object|true|none|Current Netdata Cloud connection state.|
|» id|integer|true|none|Cloud connection ID counter.|
|» status|string|true|none|Current cloud connection status of the agent.<br>- available: Not claimed yet, can be claimed<br>- offline: Claimed but currently disconnected<br>- indirect: Connected through parent agent<br>- online: Claimed and connected (cannot re-claim)<br>- banned: Banned from cloud (cannot claim)<br>|
|» since|integer(int64)|true|none|Unix timestamp of the latest cloud connection state change.|
|» age|integer(int64)|true|none|Signed difference in seconds between response generation time and `since`; may be negative after a backward system-clock adjustment.|
|» url|string \| null|true|none|Netdata Cloud URL. Emitted for every status and may be null when the active ACLK URL is unavailable.<br>For banned status, the current runtime emits this member twice from two URL sources; OpenAPI represents it as one logical property.<br>|
|» reason|string|true|none|Status explanation or connection error; an empty string when online.|
|» claim_id|string|false|none|Present for banned, offline, online, and indirect statuses.<br>Contains the canonical claim UUID when one is available; it can be empty when no claim ID is available.<br>|
|» next_check|integer(int64)|false|none|Unix timestamp of the next connection attempt; present only for offline status when scheduled in the future.|
|» next_in|integer(int64)|false|none|Seconds until `next_check`; present only when `next_check` is present.|
|can_be_claimed|boolean|false|none|Whether the agent can currently be claimed. Present in info and error responses.<br>true for available/offline/indirect states, false for online/banned.<br>|
|key_filename|string|false|none|Full path to the file containing the verification key.<br>Present in info and error responses after the verification key file has been published successfully at least once.<br>Not present after a successful claim or if no verification key file has ever been published successfully.<br>Platform-specific path (Linux: /var/lib/netdata/..., Windows: C:\...).<br>|
|cmd|string|false|none|OS-specific command to retrieve the verification key.<br>Present in info and error responses after the verification key file has been published successfully at least once.<br>- Linux: "sudo cat /var/lib/netdata/netdata_random_session_id"<br>- Docker: "docker exec netdata cat /var/lib/netdata/netdata_random_session_id"<br>- Windows: "more C:\path\to\netdata_random_session_id"<br>|
|help|string|false|none|Human-readable instructions for obtaining the verification key.<br>Present in info and error responses after the verification key file has been published successfully at least once.<br>|
|agents|[object]|false|none|Agent information for the claimed node(s)|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|available|
|» status|offline|
|» status|indirect|
|» status|online|
|» status|banned|

<aside class="success">
This operation does not require authentication
</aside>

## OBSOLETE: Claim agent to Netdata Cloud (use /api/v3/claim instead)

<a id="opIdclaim2"></a>

> Code samples

```bash
curl http://localhost:19999/api/v2/claim
```

`GET /api/v2/claim`

<aside class="warning">
This operation is deprecated
</aside>

**⚠️ OBSOLETE API - Will be removed in future versions**

This endpoint is deprecated. Use `/api/v3/claim` instead, which provides improved error handling.

**Migration:** Replace `/api/v2/claim` with `/api/v3/claim` in all API calls.
Parameters are identical, but v3 returns errors as JSON instead of plain text for better integration.

Claims (connects) agent to Netdata Cloud using server ownership verification.
Enables centralized monitoring and team collaboration features.

**Security & Access Control:**
- **Route ACL:** `HTTP_ACL_NOCHECK` skips only this endpoint's route-table ACL comparison
- **Bearer Protection:** `HTTP_ACCESS_NONE` means the generic access gate does not require a bearer token
- **Connection/IP Admission:** Direct HTTP remains subject to `allow connections from`, listener/port ACLs, and coarse API admission
- **Claim Mutation:** Reading status needs no callback-local credential; changing claim state requires the current rotating random session key and valid claim parameters


<h3 id="obsolete-claim-agent-to-netdata-cloud-use-apiv3claim-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string(uuid)|false|Verification key obtained from server file system|
|token|query|string|false|Claiming token from Netdata Cloud|
|url|query|string(uri)|false|Netdata Cloud API base URL|
|rooms|query|string|false|Comma-separated war room IDs|

<h3 id="obsolete-claim-agent-to-netdata-cloud-use-apiv3claim-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Claim operation processed (check response for success/failure)|None|
|400|Bad Request|Invalid parameters (v2 returns plain text errors)|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="netdata-api-authentication">authentication</h1>

## Enable or disable bearer token authentication requirement

<a id="opIdbearerProtection3"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v3/bearer_protection?claim_id=string&machine_guid=string&node_id=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/bearer_protection`

**Bearer Token Authentication Control**

This endpoint controls whether the Netdata agent requires bearer token authentication for API access. Bearer protection adds an additional security layer by downgrading unauthenticated requests to `HTTP_ACCESS_NONE` when enabled. To reach routes whose required access includes `HTTP_ACCESS_ANONYMOUS_DATA`, an unauthenticated direct HTTP request must present a valid bearer token in the `Authorization` header. API messages sent over an established WebRTC data channel are not parsed for an `Authorization` header (unlike the initial HTTP `rtc_offer` signaling request, which is), so an unauthenticated call made over the data channel cannot supply a bearer token and is rejected for such routes. Already-authenticated sessions (for example Netdata Cloud/ACLK) keep their permissions and are unaffected. Routes declared with `HTTP_ACCESS_NONE` do not acquire a generic bearer-token requirement; their own ACL, transport, and callback authorization still apply.

**Use Cases:**
- **Cloud Integration:** Enable bearer protection when agent is claimed to Netdata Cloud
- **Security Hardening:** Add token-based authentication to prevent unauthorized API access
- **Multi-Tenant Environments:** Enforce authentication in shared infrastructure
- **Dynamic Security:** Toggle authentication requirements based on operational needs
- **Remote Management:** Netdata Cloud can enable protection when claiming agents

**How It Works:**
1. When bearer protection is enabled, routes requiring `HTTP_ACCESS_ANONYMOUS_DATA` reject unauthenticated requests
2. Tokens are obtained via `/api/v3/bearer_get_token` endpoint
3. Tokens have expiration times and must be renewed periodically
4. Invalid or missing tokens fail routes whose required access is not granted
5. Routes requiring `HTTP_ACCESS_NONE`, including claim, do not acquire a generic bearer requirement; their other route and callback gates still apply

**Security Verification:**
- **claim_id:** Must match the agent's current claim ID (prevents requests to wrong agent)
- **machine_guid:** Must match the agent's machine GUID (hardware fingerprint)
- **node_id:** Must match the agent's node UUID (persistent identity)
- All three identifiers must be present and match for the operation to succeed

**Protection States:**
- **Enabled (true):** An unauthenticated direct HTTP request needs a valid bearer token (in the `Authorization` header) to reach routes whose required access includes `HTTP_ACCESS_ANONYMOUS_DATA`; unauthenticated API messages sent over an established WebRTC data channel carry no `Authorization` header and so are rejected for such routes; already-authenticated sessions keep their permissions, and `HTTP_ACCESS_NONE` routes (such as claim) do not acquire a generic bearer-token requirement, though their own ACL, transport, and callback authorization still apply
- **Disabled (false):** API requests do not require bearer tokens (default for unclaimed agents)

**Important Notes:**
- This endpoint itself requires authentication (typically called by Netdata Cloud during claiming)
- Changing protection state affects all subsequent API requests immediately
- Netdata Cloud automatically enables bearer protection when an agent is claimed
- Local access may still work without bearer token depending on configuration
- The endpoint validates that the request is for the correct agent using claim_id, machine_guid, and node_id
- Mismatched identifiers return HTTP 400 Bad Request

**Typical Workflow:**
1. Agent is claimed to Netdata Cloud
2. Cloud calls this endpoint to enable bearer protection
3. Unauthenticated direct HTTP calls to routes whose required access includes `HTTP_ACCESS_ANONYMOUS_DATA` then require a bearer token, while unauthenticated API messages sent over an established WebRTC data channel (which carry no `Authorization` header) are rejected for such routes (already-authenticated sessions keep their permissions)
4. Cloud obtains tokens via `/api/v3/bearer_get_token` as needed
5. Tokens are included in Authorization headers for authenticated requests

**Security & Access Control:**
- ⚠️ **ACLK-Only API** - This endpoint is ONLY accessible via Netdata Cloud (ACLK connection)
- **NOT accessible via:** Direct HTTP/HTTPS to agent, even with bearer token
- **Authentication:** Requires Netdata Cloud authentication with elevated permissions
- **Required Permissions:** `SIGNED_ID` + `SAME_SPACE` + `VIEW_AGENT_CONFIG` + `EDIT_AGENT_CONFIG`
- **User Roles:** Typically Admin or Manager role required
- **Development Mode:** Can be enabled for testing with `ACL_DEV_OPEN_ACCESS` flag


<h3 id="enable-or-disable-bearer-token-authentication-requirement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bearer_protection|query|string|false|**Whether to enable or disable bearer token authentication requirement.**<br><br>**Valid Values:**<br>- Enable: `on`, `true`, `yes`<br>- Disable: `off`, `false`, `no`<br><br>**Default Behavior:**<br>- If omitted, maintains current bearer protection state<br>- When agent is unclaimed, defaults to disabled<br>- When agent is claimed, typically enabled by Netdata Cloud<br><br>**Effect:**<br>- When enabled: an unauthenticated direct HTTP request must include a valid bearer token in the `Authorization` header to reach routes whose required access includes `HTTP_ACCESS_ANONYMOUS_DATA`; unauthenticated API messages sent over an established WebRTC data channel carry no `Authorization` header and are rejected for such routes; already-authenticated sessions keep their permissions, and `HTTP_ACCESS_NONE` routes do not acquire a generic bearer-token requirement, though their own ACL, transport, and callback authorization still apply<br>- When disabled: API requests work without bearer tokens (less secure)<br><br>Example: `bearer_protection=on`<br>|
|claim_id|query|string|true|**Claim ID of the agent from Netdata Cloud.**<br><br>This identifies which Netdata Cloud space the agent is claimed to.<br>Used to verify the request is for the correct agent.<br><br>**Validation:**<br>- Must match the agent's current claim ID<br>- Request fails with HTTP 400 if claim ID doesn't match<br>- Prevents accidentally enabling protection on wrong agent<br><br>**Where to Find:**<br>- Obtained from cloud when agent is claimed<br>- Available in agent's claiming configuration<br>- Included in cloud API responses<br><br>Example: `claim_id=1234567890abcdef`<br>|
|machine_guid|query|string|true|**Machine GUID of the agent.**<br><br>Hardware-based unique identifier for the agent instance.<br>Generated based on machine characteristics.<br><br>**Purpose:**<br>- Verifies request is for the specific agent instance<br>- Prevents applying protection to wrong node<br>- Part of multi-factor agent identification<br><br>**Characteristics:**<br>- Persists across agent restarts<br>- May change if hardware changes significantly<br>- Matches the `machine_guid` in agent info<br><br>**Where to Find:**<br>- Available in `/api/v3/info` response<br>- Stored in agent's state files<br>- Shown in Netdata Cloud node details<br><br>Example: `machine_guid=12345678-1234-1234-1234-123456789abc`<br>|
|node_id|query|string(uuid)|true|**Node UUID of the agent.**<br><br>Persistent unique identifier for the agent.<br>More stable than machine_guid.<br><br>**Purpose:**<br>- Provides additional verification layer<br>- Ensures request targets correct node<br>- Used alongside claim_id and machine_guid for security<br><br>**Characteristics:**<br>- Generated once and persists<br>- Does not change with hardware changes<br>- Unique across all Netdata installations<br><br>**Where to Find:**<br>- Available in `/api/v3/info` response<br>- Stored in agent's persistent state<br>- Used by Netdata Cloud for node identification<br><br>Example: `node_id=23456789-2345-2345-2345-234567890abc`<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|bearer_protection|on|
|bearer_protection|off|
|bearer_protection|true|
|bearer_protection|false|
|bearer_protection|yes|
|bearer_protection|no|

> Example responses

> 200 Response

```json
{
  "bearer_protection": true
}
```

<h3 id="enable-or-disable-bearer-token-authentication-requirement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bearer protection state successfully changed.|Inline|
|400|Bad Request|Bad request due to one of the following:<br>- claim_id doesn't match the agent's claim ID<br>- machine_guid doesn't match the agent's machine GUID<br>- node_id doesn't match or is missing<br>- Invalid parameter values<br>|None|

<h3 id="enable-or-disable-bearer-token-authentication-requirement-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bearer_protection|boolean|false|none|Current bearer protection state after the operation (true = enabled, false = disabled)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aclkAuth
</aside>

## Obtain bearer authentication token

<a id="opIdbearerGetToken3"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v3/bearer_get_token?claim_id=string&machine_guid=string&node_id=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v3/bearer_get_token`

**Bearer Token Generation**

This endpoint generates a bearer authentication token that can be used to authenticate API requests when bearer protection is enabled. Tokens are time-limited and include role-based access control information.

**Use Cases:**
- **Netdata Cloud Access:** Cloud obtains tokens to query agent metrics and execute functions
- **API Integration:** Applications get tokens to access protected agent APIs
- **User Authentication:** Generate tokens for users based on their roles and permissions
- **Automated Monitoring:** Scripts obtain tokens for scheduled metric collection
- **Temporary Access:** Create limited-lifetime tokens for specific operations

**Token Characteristics:**
- **Time-Limited:** Tokens expire after a set duration (configurable)
- **Role-Based:** Tokens include user role information (admin, manager, viewer, etc.)
- **Access-Scoped:** Tokens specify allowed access levels (data, functions, etc.)
- **Cloud-Linked:** Can be associated with cloud account ID for tracking
- **Client-Identified:** Can include client name for audit logging

**Token Usage:**
```
# Obtain token
TOKEN=$(curl "http://localhost:19999/api/v3/bearer_get_token?claim_id=...&machine_guid=...&node_id=..." | jq -r .token)

# Use token in subsequent requests
curl -H "Authorization: Bearer $TOKEN" http://localhost:19999/api/v3/data?chart=system.cpu
```

**Security Verification:**
- **claim_id:** Must match the agent's claim ID (ensures request is for correct agent)
- **machine_guid:** Must match the agent's machine GUID (hardware verification)
- **node_id:** Must match the agent's node UUID (persistent identity)
- All three identifiers must be present and exact matches

**Remote Agent Support:**
- If requested for a child/remote agent (not localhost), request is forwarded via function call
- Token is generated on the remote agent with appropriate permissions
- Response includes remote agent's machine_guid

**Token Expiration:**
- Tokens have finite lifetime (typically hours)
- Expired tokens return HTTP 401 Unauthorized
- Applications should refresh tokens before expiration
- Expiration time included in response for planning renewal

**Important Notes:**
- This endpoint typically requires existing authentication (cloud or admin access)
- Generated token inherits user role and access permissions from requester
- Tokens are cryptographically secure random UUIDs
- Response includes current bearer protection state
- Failed verification attempts do not generate tokens
- Mismatched identifiers return HTTP 400 Bad Request

**Typical Workflow:**
1. Netdata Cloud or authorized client calls this endpoint with agent identifiers
2. Agent verifies claim_id, machine_guid, and node_id all match
3. Agent generates bearer token with specified role/access/account info
4. Token and expiration time returned in JSON response
5. Client includes token in Authorization header for subsequent API calls
6. Token is validated on each API request until expiration
7. Client requests new token before expiration to maintain access

**Security & Access Control:**
- ⚠️ **ACLK-Only API** - This endpoint is ONLY accessible via Netdata Cloud (ACLK connection)
- **NOT accessible via:** Direct HTTP/HTTPS to agent, local dashboard, or external tools
- **Authentication:** Requires Netdata Cloud authentication (`SIGNED_ID` + `SAME_SPACE`)
- **User Requirements:** User must be authenticated and in the same cloud space as the agent
- **Token Scope:** Generated tokens inherit the requester's role and access permissions
- **Development Mode:** Can be enabled for testing with `ACL_DEV_OPEN_ACCESS` flag


<h3 id="obtain-bearer-authentication-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|claim_id|query|string|true|**Claim ID of the agent from Netdata Cloud.**<br><br>Identifies which Netdata Cloud space the agent belongs to.<br>Used to verify the token request is for the correct agent.<br><br>**Validation:**<br>- Must match the agent's current claim ID<br>- Request fails with HTTP 400 if claim ID doesn't match<br>- Can use `claim_id_matches_any()` for multi-agent parents<br><br>**Security:**<br>- Prevents token generation for wrong agent<br>- Ensures cloud can only get tokens for agents it manages<br>- Part of multi-factor agent verification<br><br>Example: `claim_id=1234567890abcdef`<br>|
|machine_guid|query|string|true|**Machine GUID of the target agent.**<br><br>Hardware-based unique identifier for the agent instance.<br><br>**Purpose:**<br>- Verifies request is for the specific agent instance<br>- Prevents token generation for wrong node<br>- Must match exactly or request fails<br><br>**Where to Find:**<br>- Available in `/api/v3/info` response<br>- Included in cloud agent registration<br>- Stored in agent state files<br><br>**Validation:**<br>- Compared against host->machine_guid<br>- Both claim_id and machine_guid must match<br>- node_id also verified for triple authentication<br><br>Example: `machine_guid=12345678-1234-1234-1234-123456789abc`<br>|
|node_id|query|string(uuid)|true|**Node UUID of the target agent.**<br><br>Persistent unique identifier for the agent node.<br><br>**Purpose:**<br>- Additional verification layer beyond machine_guid<br>- Ensures correct node identification<br>- Used in combination with other identifiers<br><br>**Characteristics:**<br>- More stable than machine_guid<br>- Persists across hardware changes<br>- Unique across all Netdata installations<br><br>**Validation:**<br>- Must be non-zero UUID<br>- Must match host->node_id exactly<br>- Compared in lowercase format<br><br>Example: `node_id=23456789-2345-2345-2345-234567890abc`<br>|

> Example responses

> 200 Response

```json
{
  "status": 200,
  "mg": "12345678-1234-1234-1234-123456789abc",
  "bearer_protection": true,
  "token": "34567890-3456-3456-3456-345678901234",
  "expiration": 1704110400
}
```

<h3 id="obtain-bearer-authentication-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bearer token successfully generated.|Inline|
|400|Bad Request|Bad request due to one of the following:<br>- claim_id doesn't match any claimed agent<br>- machine_guid doesn't match the agent's machine GUID<br>- node_id is missing, invalid, or doesn't match<br>- Request is for a different agent than the one being called<br>|None|

<h3 id="obtain-bearer-authentication-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code (always 200 for success)|
|mg|string|false|none|Machine GUID of the agent that generated the token|
|bearer_protection|boolean|false|none|Current bearer protection state (true = enabled, false = disabled)|
|token|string(uuid)|false|none|Bearer token UUID to use in Authorization header.<br>Format: `Authorization: Bearer <token>`<br>|
|expiration|integer(int64)|false|none|Unix timestamp (seconds since epoch) when the token expires|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aclkAuth
</aside>

## Get current authenticated user information

<a id="opIdme3"></a>

> Code samples

```bash
curl http://localhost:19999/api/v3/me \
  -H 'Accept: application/json'
```

`GET /api/v3/me`

**Current User Authentication Info**

This endpoint returns information about the currently authenticated user or session. It provides details about the authentication method, user role, access permissions, and associated cloud account if applicable.

**Use Cases:**
- **Authentication Verification:** Verify that authentication is working and check what method was used
- **Permission Checking:** Determine what access levels the current session has
- **Role Discovery:** Find out the user role (admin, manager, viewer, etc.) for authorization decisions
- **Cloud Integration:** Get cloud account ID for linking with Netdata Cloud features
- **Client Identification:** Retrieve client name for audit logging or display purposes
- **Security Auditing:** Log authentication methods and access levels for security reviews

**Authentication Methods:**
- **cloud:** Authenticated via Netdata Cloud (most common for claimed agents)
- **bearer:** Authenticated using bearer token (obtained via `/api/v3/bearer_get_token`)
- **god:** God mode authentication (debug/development builds only)
- **none:** No authentication (default for unclaimed agents without bearer protection)

**User Roles:**
Roles determine what operations a user can perform:
- **admin:** Full administrative access (all operations allowed)
- **manager:** Management access (most operations allowed, some restrictions)
- **troubleshooter:** Diagnostic access (read metrics, execute diagnostic functions)
- **observer:** Read-only access to metrics (no configuration changes)
- **member:** Basic member access
- **billing:** Billing-related access
- **none:** No specific role assigned

**Access Permissions:**
Access is a bitmask of allowed operations:
- **registry:** Can access agent registry features
- **dashboard:** Can view dashboards
- **data:** Can query metrics data
- **functions:** Can execute agent functions
- **badges:** Can generate badges
- **mgmt:** Can perform management operations
- **stream:** Can receive streaming data
- **SSL_FORCE:** SSL/TLS is required
- **signed_id:** Has signed/verified identity
- **sensitive_data:** Can access sensitive configuration data

**Cloud Integration:**
- **cloud_account_id:** UUID linking session to Netdata Cloud account
- Present when authenticated via Netdata Cloud
- Used for tracking and authorization in cloud features
- Zero UUID (00000000-0000-0000-0000-000000000000) when not cloud-authenticated

**Client Identification:**
- **client_name:** Human-readable name identifying the client application
- Examples: "Netdata Cloud", "API Script", "Custom Dashboard"
- Useful for audit logs and debugging
- May be empty for anonymous/local access

**Important Notes:**
- After request admission, this endpoint succeeds (returns HTTP 200) even without authentication
- For unauthenticated requests, auth="none" and minimal permissions returned
- The response reflects the current session's authentication state
- Access permissions are cumulative (multiple permissions can be granted)
- God mode is only available in debug builds with NETDATA_GOD_MODE defined
- Bearer tokens inherit role and access from the user/cloud account that requested them

**Security Considerations:**
- Use this endpoint to verify authentication before performing sensitive operations
- Check both user_role and access permissions for proper authorization
- Cloud account ID can be used for cross-referencing with cloud audit logs
- Authentication method indicates security level (cloud/bearer > none)

**Example Responses:**

**Netdata Cloud User:**
```json
{
  "auth": "cloud",
  "cloud_account_id": "12345678-1234-1234-1234-123456789abc",
  "client_name": "Netdata Cloud",
  "access": ["registry", "dashboard", "data", "functions", "badges", "mgmt", "stream", "signed_id"],
  "user_role": "admin"
}
```

**Bearer Token User:**
```json
{
  "auth": "bearer",
  "cloud_account_id": "12345678-1234-1234-1234-123456789abc",
  "client_name": "API Client",
  "access": ["data", "functions", "signed_id"],
  "user_role": "observer"
}
```

**Unauthenticated Local Access:**
```json
{
  "auth": "none",
  "cloud_account_id": "00000000-0000-0000-0000-000000000000",
  "client_name": "",
  "access": ["registry", "dashboard", "data", "badges"],
  "user_role": "none"
}
```

**Security & Access Control:**
- **Route ACL:** `HTTP_ACL_NOCHECK` skips only this endpoint's route-table ACL comparison
- **Bearer Protection:** `HTTP_ACCESS_NONE` means the generic access gate does not require a bearer token
- **Connection/IP Admission:** Direct HTTP remains subject to `allow connections from`, listener/port ACLs, and coarse API admission
- **Callback:** No additional authorization check is applied after the route gates


> Example responses

> 200 Response

```json
{
  "auth": "cloud",
  "cloud_account_id": "12345678-1234-1234-1234-123456789abc",
  "client_name": "Netdata Cloud",
  "access": [
    "registry",
    "dashboard",
    "data",
    "functions",
    "badges",
    "mgmt",
    "stream",
    "signed_id"
  ],
  "user_role": "admin"
}
```

<h3 id="get-current-authenticated-user-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current user information successfully retrieved.|Inline|

<h3 id="get-current-authenticated-user-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth|string|false|none|Authentication method used for the current session.<br>- cloud: Authenticated via Netdata Cloud<br>- bearer: Authenticated using bearer token<br>- god: God mode (debug builds only)<br>- none: No authentication<br>|
|cloud_account_id|string(uuid)|false|none|Cloud account UUID associated with this session.<br>Zero UUID (00000000-0000-0000-0000-000000000000) when not cloud-authenticated.<br>|
|client_name|string|false|none|Human-readable name of the client application.<br>May be empty for anonymous/local access.<br>Examples: "Netdata Cloud", "API Script", "Custom Dashboard"<br>|
|access|[string]|false|none|Array of access permissions granted to this session.<br>Permissions are cumulative (multiple can be granted).<br>|
|user_role|string|false|none|User role determining what operations are allowed.<br>- admin: Full administrative access<br>- manager: Management access with some restrictions<br>- troubleshooter: Diagnostic and troubleshooting access<br>- observer: Read-only access to metrics<br>- member: Basic member access<br>- billing: Billing-related access<br>- none: No specific role<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|auth|cloud|
|auth|bearer|
|auth|god|
|auth|none|
|access|registry|
|access|dashboard|
|access|data|
|access|functions|
|access|badges|
|access|mgmt|
|access|stream|
|access|SSL_FORCE|
|access|signed_id|
|access|sensitive_data|
|user_role|admin|
|user_role|manager|
|user_role|troubleshooter|
|user_role|observer|
|user_role|member|
|user_role|billing|
|user_role|none|

<aside class="success">
This operation does not require authentication
</aside>

## OBSOLETE: Enable/disable bearer authentication (use /api/v3/bearer_protection instead)

<a id="opIdbearerProtection2"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v2/bearer_protection?claim_id=string&machine_guid=string&node_id=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/bearer_protection`

<aside class="warning">
This operation is deprecated
</aside>

**⚠️ OBSOLETE API - Will be removed in future versions**

This endpoint is deprecated. Use `/api/v3/bearer_protection` instead, which provides the same functionality.

**Migration:** Replace `/api/v2/bearer_protection` with `/api/v3/bearer_protection` in all API calls.

Controls whether agent requires bearer token authentication for API access.
Used by Netdata Cloud to secure agents after claiming.

**Security & Access Control:**
- ⚠️ **ACLK-Only API** - Accessible only via Netdata Cloud (ACLK connection)
- Requires elevated permissions (Admin/Manager role)
- Same access requirements as v3 version


<h3 id="obsolete-enabledisable-bearer-authentication-use-apiv3bearerprotection-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bearer_protection|query|string|false|Enable or disable bearer protection|
|claim_id|query|string|true|Agent's claim ID|
|machine_guid|query|string|true|Agent's machine GUID|
|node_id|query|string(uuid)|true|Agent's node UUID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|bearer_protection|on|
|bearer_protection|off|
|bearer_protection|true|
|bearer_protection|false|
|bearer_protection|yes|
|bearer_protection|no|

<h3 id="obsolete-enabledisable-bearer-authentication-use-apiv3bearerprotection-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bearer protection state successfully changed|None|
|400|Bad Request|Invalid parameters or verification failed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aclkAuth
</aside>

## OBSOLETE: Get bearer authentication token (use /api/v3/bearer_get_token instead)

<a id="opIdbearerGetToken2"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v2/bearer_get_token?claim_id=string&machine_guid=string&node_id=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/bearer_get_token`

<aside class="warning">
This operation is deprecated
</aside>

**⚠️ OBSOLETE API - Will be removed in future versions**

This endpoint is deprecated. Use `/api/v3/bearer_get_token` instead, which provides the same functionality.

**Migration:** Replace `/api/v2/bearer_get_token` with `/api/v3/bearer_get_token` in all API calls.

Generates time-limited bearer token for authenticating API requests when bearer protection is enabled.

**Security & Access Control:**
- ⚠️ **ACLK-Only API** - Accessible only via Netdata Cloud (ACLK connection)
- Same access requirements as v3 version


<h3 id="obsolete-get-bearer-authentication-token-use-apiv3bearergettoken-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|claim_id|query|string|true|Agent's claim ID|
|machine_guid|query|string|true|Agent's machine GUID|
|node_id|query|string(uuid)|true|Agent's node UUID|

<h3 id="obsolete-get-bearer-authentication-token-use-apiv3bearergettoken-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bearer token successfully generated|None|
|400|Bad Request|Invalid parameters or verification failed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
aclkAuth
</aside>

<h1 id="netdata-api-agent">agent</h1>

## OBSOLETE: Get agent information (use /api/v3/info instead)

<a id="opIdinfo2"></a>

> Code samples

```bash
curl http://localhost:19999/api/v2/info
```

`GET /api/v2/info`

<aside class="warning">
This operation is deprecated
</aside>

**⚠️ OBSOLETE API - Will be removed in future versions**

This endpoint is deprecated. Use `/api/v3/info` instead, which provides the same functionality.

**Migration:** Replace `/api/v2/info` with `/api/v3/info` in all API calls.

Returns comprehensive agent information including version, capabilities, OS details, hardware specs,
and configuration. Essential for discovering agent capabilities before querying metrics.

**Security & Access Control:**
- **Route ACL:** `HTTP_ACL_NOCHECK` skips only this endpoint's route-table ACL comparison
- **Bearer Protection:** This route requires `HTTP_ACCESS_ANONYMOUS_DATA`; when bearer protection is enabled, an unauthenticated request is rejected
- **Connection/IP Admission:** Direct HTTP remains subject to `allow connections from`, listener/port ACLs, and coarse API admission
- **Callback:** No additional authorization check is applied after the route gates


<h3 id="obsolete-get-agent-information-use-apiv3info-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|after|query|integer|false|`after` and `before` define the time-frame of a query. `after` can be a negative number of seconds, up to 3 years (-94608000), relative to `before`. If not set, it is usually assumed to be -600. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|before|query|integer|false|`after` and `before` define the time-frame of a query. `before` can be a negative number of seconds, up to 3 years (-94608000), relative to current clock. If not set, it is assumed to be the current clock time. When `before` is positive, it is assumed to be a unix epoch timestamp. When non-data endpoints support the `after` and `before`, they use the time-frame to limit their response for objects having data retention within the time-frame given.<br>|
|timeout|query|number(integer)|false|Specify a timeout value in milliseconds after which the Agent will abort the query and return a 503 error. A value of 0 indicates no timeout.<br>|
|cardinality_limit|query|integer(int64)|false|Limits the number of unique items returned, to prevent excessive memory usage and response sizes when a request matches a large number of items. For data queries, the query engine keeps the top contributing dimensions and folds the rest into one `remaining` aggregate dimension, so the total number of returned dimensions equals this limit; the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) stays complete unless the `cardinality-limit-all` option is also given. Other endpoints (alerts, contexts) apply this limit to their own result items. Weights endpoints define separate result-limit semantics.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|

<h3 id="obsolete-get-agent-information-use-apiv3info-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent information successfully retrieved|None|
|400|Bad Request|Invalid parameters|None|

<aside class="success">
This operation does not require authentication
</aside>

## OBSOLETE: Get agent version information (use /api/v3/versions instead)

<a id="opIdversions2"></a>

> Code samples

```bash
curl http://localhost:19999/api/v2/versions
```

`GET /api/v2/versions`

<aside class="warning">
This operation is deprecated
</aside>

**⚠️ OBSOLETE API - Will be removed in future versions**

This endpoint is deprecated. Use `/api/v3/versions` instead, which provides the same functionality.

**Migration:** Replace `/api/v2/versions` with `/api/v3/versions` in all API calls.

Returns agent version information across all nodes, useful for upgrade planning and compatibility checking.

**Security & Access Control:**
- 📊 **Public Data API** - Bearer token optional, IP-based ACL restrictions apply
- **Default Access:** Public (no authentication required)
- **Bearer Protection:** When enabled via `/api/v3/bearer_protection`, requires bearer token
- **IP Restrictions:** Subject to `allow dashboard from` in netdata.conf
- **Access Methods:** Direct HTTP/HTTPS, Netdata Cloud, external tools


<h3 id="obsolete-get-agent-version-information-use-apiv3versions-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope_nodes|query|string(simple pattern)|false|A simple pattern limiting the nodes scope of the query. The scope controls both data and metadata response. The simple pattern is checked against the nodes' machine guid, node id and hostname. The default nodes scope is all nodes for which this Agent has data for. Usually the nodes scope is used to slice the entire dashboard (e.g. the Global Nodes Selector at the Netdata Cloud overview dashboard). Both positive and negative simple pattern expressions are supported.<br>|
|nodes|query|string(simple pattern)|false|A simple pattern matching the nodes to be queried. This only controls the data response, not the metadata. The simple pattern is checked against the nodes' machine guid, node id, hostname. The default nodes selector is all the nodes matched by the nodes scope. Both positive and negative simple pattern expressions are supported.<br>|
|options|query|[string]|false|Options that affect data generation.<br>* `jsonwrap` - Wrap the output in a JSON object with metadata about the query.<br>* `raw` - change the output so that it is aggregatable across multiple such queries. Supported by `/api/v2` data queries and `json2` format.<br>* `minify` - Remove unnecessary spaces and newlines from the output.<br>* `debug` - Provide additional information in `jsonwrap` output to help tracing issues.<br>* `nonzero` - Do not return dimensions that all their values are zero, to improve the visual appearance of charts. They will still be returned if all the dimensions are entirely zero.<br>* `null2zero` - Replace `null` values with `0`.<br>* `absolute` or `abs` - Traditionally Netdata returns select dimensions negative to improve visual appearance. This option turns this feature off.<br>* `display-absolute` - Only used by badges, to do color calculation using the signed value, but render the value without a sign.<br>* `flip` or `reversed` - Order the timestamps array in reverse order (newest to oldest).<br>* `min2max` - When flattening multi-dimensional data into a single metric format, use `max - min` instead of `sum`. This is EOL - use `/api/v2` to control aggregation across dimensions.<br>* `percentage` - Convert all values into a percentage vs the row total. When enabled, Netdata will query all dimensions, even the ones that have not been selected or are hidden, to find the row total, in order to calculate the percentage of each dimension selected.<br>* `seconds` - Output timestamps in seconds instead of dates.<br>* `milliseconds` or `ms` - Output timestamps in milliseconds instead of dates.<br>* `unaligned` - by default queries are aligned to the the view, so that as time passes past data returned do not change. When a data query will not be used for visualization, `unaligned` can be given to avoid aligning the query time-frame for visual precision.<br>* `match-ids`, `match-names`. By default filters match both IDs and names when they are available. Setting either of the two options will disable the other.<br>* `anomaly-bit` - query the anomaly information instead of metric values. This is EOL, use `/api/v2` and `json2` format which always returns this information and many more.<br>* `jw-anomaly-rates` - return anomaly rates as a separate result set in the same `json` format response. This is EOL, use `/api/v2` and `json2` format which always returns information and many more. <br>* `details` - `/api/v2/data` returns in `jsonwrap` the full tree of dimensions that have been matched by the query.<br>* `group-by-labels` - `/api/v2/data` returns in `jsonwrap` flattened labels per output dimension. These are used to identify the instances that have been aggregated into each dimension, making it possible to provide a map, like Netdata does for Kubernetes.<br>* `natural-points` - return timestamps as found in the database. The result is again fixed-step, but the query engine attempts to align them with the timestamps found in the database.<br>* `virtual-points` - return timestamps independent of the database alignment. This is needed aggregating data across multiple Netdata Agents, to ensure that their outputs do not need to be interpolated to be merged.<br>* `selected-tier` - use data exclusively from the selected tier given with the `tier` parameter. This option is set automatically when the `tier` parameter is set.<br>* `all-dimensions` - In `/api/v1` `jsonwrap` include metadata for all candidate metrics examined. In `/api/v2` this is standard behavior and no option is needed.<br>* `label-quotes` - In `csv` output format, enclose each header label in quotes.<br>* `objectrows` - Each row of value should be an object, not an array (only for `json` format).<br>* `google_json` - Comply with google JSON/JSONP specs (only for `json` format).<br>* `minimal-stats` or `minimal` - Reduce the amount of statistics returned in `jsonwrap` format to save bandwidth.<br>* `long-json-keys` or `long-keys` - Use descriptive key names in JSON output instead of abbreviated ones.<br>* `mcp-info` - Include additional metadata useful for the Model Context Protocol (MCP) integration.<br>* `rfc3339` - Return timestamps in RFC3339 format (e.g., "2023-01-01T00:00:00Z") instead of Unix timestamps.<br>* `cardinality-limit-all` - Apply the `cardinality_limit` parameter to the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) too. Without this option `cardinality_limit` reduces only the result dataset (the top contributing dimensions plus one `remaining` aggregate), keeping the summary complete so dashboards can still build their filtering menus.<br>|
|timeout|query|number(integer)|false|Specify a timeout value in milliseconds after which the Agent will abort the query and return a 503 error. A value of 0 indicates no timeout.<br>|
|cardinality_limit|query|integer(int64)|false|Limits the number of unique items returned, to prevent excessive memory usage and response sizes when a request matches a large number of items. For data queries, the query engine keeps the top contributing dimensions and folds the rest into one `remaining` aggregate dimension, so the total number of returned dimensions equals this limit; the `jsonwrap` summary metadata (nodes, instances, dimensions, labels) stays complete unless the `cardinality-limit-all` option is also given. Other endpoints (alerts, contexts) apply this limit to their own result items. Weights endpoints define separate result-limit semantics.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|options|jsonwrap|
|options|raw|
|options|minify|
|options|debug|
|options|nonzero|
|options|null2zero|
|options|abs|
|options|absolute|
|options|display-absolute|
|options|flip|
|options|reversed|
|options|min2max|
|options|percentage|
|options|seconds|
|options|ms|
|options|milliseconds|
|options|unaligned|
|options|match-ids|
|options|match-names|
|options|anomaly-bit|
|options|jw-anomaly-rates|
|options|details|
|options|group-by-labels|
|options|natural-points|
|options|virtual-points|
|options|selected-tier|
|options|all-dimensions|
|options|label-quotes|
|options|objectrows|
|options|google_json|
|options|minimal-stats|
|options|minimal|
|options|long-json-keys|
|options|long-keys|
|options|mcp-info|
|options|rfc3339|
|options|cardinality-limit-all|

<h3 id="obsolete-get-agent-version-information-use-apiv3versions-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Version information successfully retrieved|None|
|400|Bad Request|Invalid parameters|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

<h1 id="netdata-api-registry">registry</h1>

## [DEPRECATED] Registry operations for tracking dashboard access

<a id="opIdregistry1"></a>

> Code samples

```bash
curl 'http://localhost:19999/api/v1/registry?action=access' \
  -H 'Accept: application/json'
```

`GET /api/v1/registry`

<aside class="warning">
This operation is deprecated
</aside>

**[DEPRECATED - Registry functionality being phased out]**

**Dashboard Access Registry**

The registry API tracks which dashboards (browsers) have accessed which Netdata agents, enabling features like:
- Dashboard synchronization across multiple agents
- Tracking which users/machines accessed which agents
- Migrating dashboard preferences between agents

**Actions:**

**1. hello** - Initial registry contact
- Identifies the dashboard to the registry
- Returns person_guid for tracking this dashboard

**2. access** - Record dashboard accessing an agent
- Called when a dashboard accesses a Netdata agent
- Tracks the relationship between dashboard and agent
- Parameters: machine, url, name

**3. delete** - Remove a tracked agent URL
- Removes a specific agent URL from dashboard's history
- Parameters: machine, url, name, delete_url

**4. search** - Find all agents accessed by a dashboard
- Returns list of all agents this dashboard has accessed
- Parameter: for (machine_guid to search for)

**5. switch** - Migrate dashboard identity
- Transfers tracking from one person_guid to another
- Parameters: machine, url, name, to (new person_guid)

**Use Cases:**
- **Multi-Agent Dashboards:** Track which agents a user has accessed
- **Dashboard Migration:** Move identity between browsers/machines
- **Access History:** See which dashboards accessed an agent
- **Cleanup:** Remove old/invalid agent entries

**Security Notes:**
- Registry stores dashboard-agent relationships
- person_guid is stored in browser cookies
- machine_guid identifies Netdata agents
- Cookie or bearer identity may supply person_guid; authorization is enforced by the callback ACL checks below

**Deprecation:**
Registry functionality is being phased out. Modern deployments should use Netdata Cloud for multi-agent management.

**Security & Access Control:**
- **Route Gates:** The route table requires `HTTP_ACL_NONE` and `HTTP_ACCESS_NONE`; the generic bearer gate therefore does not require a token
- **Connection/IP Admission:** Direct HTTP remains subject to `allow connections from`, listener/port ACLs, and coarse API admission
- **Callback ACL:** `hello` requires dashboard ACL; every other action requires registry ACL
- **Identity:** Cookie or bearer data identifies person_guid but does not replace callback authorization


<h3 id="deprecated-registry-operations-for-tracking-dashboard-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|true|Registry action to perform.<br><br>**Available Actions:**<br>- `hello` - Initial contact with registry<br>- `access` - Record dashboard access to agent<br>- `delete` - Remove agent URL from dashboard history<br>- `search` - Find all agents accessed by dashboard<br>- `switch` - Migrate dashboard identity to new person_guid<br>|
|machine|query|string(uuid)|false|Machine GUID of the dashboard making the request. This is typically stored in browser cookies and identifies the specific browser/client.<br>|
|name|query|string|false|Human-readable name for the dashboard/machine (typically hostname). Used for display purposes in registry listings.<br>|
|url|query|string(uri)|false|URL of the Netdata agent being accessed. This is the full URL including protocol and port.<br>|
|delete_url|query|string(uri)|false|URL to delete from the registry (used with action=delete). Must match a previously registered URL.<br>|
|for|query|string(uuid)|false|Machine GUID to search for (used with action=search). Returns all agents accessed by this machine.<br>|
|to|query|string(uuid)|false|New person_guid to switch to (used with action=switch). Migrates the dashboard identity to a new person_guid.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|hello|
|action|access|
|action|delete|
|action|search|
|action|switch|

> Example responses

> 200 Response

```json
{}
```

<h3 id="deprecated-registry-operations-for-tracking-dashboard-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Registry operation successful|Inline|
|400|Bad Request|Invalid action or missing required parameters|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_info">info</h2>
<!-- backwards compatibility -->
<a id="schemainfo"></a>
<a id="schema_info"></a>
<a id="tocSinfo"></a>
<a id="tocsinfo"></a>

```json
{
  "version": "1.11.1_rolling",
  "uid": "24e9fe3c-f2ac-11e8-bafc-0242ac110002",
  "mirrored_hosts": [
    "host1.example.com",
    "host2.example.com"
  ],
  "mirrored_hosts_status": [
    {
      "guid": "245e4bff-3b34-47c1-a6e5-5c535a9abfb2",
      "reachable": true,
      "claim_id": "c3b2a66a-3052-498c-ac52-7fe9e8cccb0c"
    }
  ],
  "os_name": "Manjaro Linux",
  "os_id": "manjaro",
  "os_id_like": "arch",
  "os_version": "18.0.4",
  "os_version_id": "unknown",
  "os_detection": "Mixed",
  "kernel_name": "Linux",
  "kernel_version": "4.19.32-1-MANJARO",
  "is_k8s_node": false,
  "architecture": "x86_64",
  "virtualization": "kvm",
  "virt_detection": "systemd-detect-virt",
  "container": "docker",
  "container_detection": "dockerenv",
  "stream_compression": true,
  "labels": {
    "app": "netdata"
  },
  "collectors": [
    {
      "plugin": "python.d.plugin",
      "module": "dockerd"
    }
  ],
  "alarms": {
    "normal": 0,
    "warning": 0,
    "critical": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|netdata version of the server.|
|uid|string|false|none|netdata unique id of the server.|
|mirrored_hosts|[string]|false|none|List of hosts mirrored of the server (include itself).|
|mirrored_hosts_status|[object]|false|none|List of details of hosts mirrored to this served (including self). Indexes correspond to indexes in "mirrored_hosts".|
|os_name|string|false|none|Operating System Name.|
|os_id|string|false|none|Operating System ID.|
|os_id_like|string|false|none|Known OS similar to this OS.|
|os_version|string|false|none|Operating System Version.|
|os_version_id|string|false|none|Operating System Version ID.|
|os_detection|string|false|none|OS parameters detection method.|
|kernel_name|string|false|none|Kernel Name.|
|kernel_version|string|false|none|Kernel Version.|
|is_k8s_node|boolean|false|none|Netdata is running on a K8s node.|
|architecture|string|false|none|Kernel architecture.|
|virtualization|string|false|none|Virtualization Type. Linux/macOS values follow the systemd-detect-virt taxonomy (kvm, qemu, vmware, xen, microsoft, oracle, amazon, ...). Windows agents emit the same canonical values when the windows-api probe chain can identify the hypervisor (for example microsoft for Hyper-V guests including Microsoft Hv markers, vmware for VMware guests, oracle for VirtualBox, kvm/qemu for KVM/QEMU guests, none for bare metal) and emit unknown when Windows confirms virtualization but cannot safely name the platform.|
|virt_detection|string|false|none|Virtualization detection method. systemd-detect-virt on Linux, lscpu/dmidecode/sysctl fallbacks on Linux, windows-api on Windows.|
|container|string|false|none|Container technology. Linux values follow the systemd-detect-virt -c taxonomy (docker, lxc, systemd-nspawn, ...) plus heuristics (container, docker, jail); Windows agents emit container for Kubernetes pods or windows-container for Windows Server containers.|
|container_detection|string|false|none|Container technology detection method. Linux values include systemd-detect-virt, dockerenv, containerenv, kubernetes, process, /bin/running-in-container, sysctl; Windows values include kubernetes (env-var probe) and windows-api (WMI container marker).|
|stream_compression|boolean|false|none|Stream transmission compression method.|
|labels|object|false|none|List of host labels.|
|collectors|[object]|false|none|none|
|alarms|object|false|none|Number of alarms in the server.|

<h2 id="tocS_chart_summary">chart_summary</h2>
<!-- backwards compatibility -->
<a id="schemachart_summary"></a>
<a id="schema_chart_summary"></a>
<a id="tocSchart_summary"></a>
<a id="tocschart_summary"></a>

```json
{
  "hostname": "string",
  "version": "string",
  "release_channel": "nightly",
  "timezone": "string",
  "os": "macos",
  "history": 0,
  "memory_mode": "string",
  "update_every": 0,
  "charts": {
    "property1": {
      "id": "string",
      "name": "string",
      "type": "string",
      "family": "string",
      "title": "string",
      "priority": 0,
      "enabled": true,
      "units": "string",
      "data_url": "string",
      "chart_type": "line",
      "duration": 0,
      "first_entry": 0,
      "last_entry": 0,
      "update_every": 0,
      "dimensions": {
        "property1": {
          "name": "string"
        },
        "property2": {
          "name": "string"
        }
      },
      "chart_variables": {
        "property1": {
          "varname1": 0,
          "varname2": 0
        },
        "property2": {
          "varname1": 0,
          "varname2": 0
        }
      },
      "green": 0,
      "red": 0
    },
    "property2": {
      "id": "string",
      "name": "string",
      "type": "string",
      "family": "string",
      "title": "string",
      "priority": 0,
      "enabled": true,
      "units": "string",
      "data_url": "string",
      "chart_type": "line",
      "duration": 0,
      "first_entry": 0,
      "last_entry": 0,
      "update_every": 0,
      "dimensions": {
        "property1": {
          "name": "string"
        },
        "property2": {
          "name": "string"
        }
      },
      "chart_variables": {
        "property1": {
          "varname1": 0,
          "varname2": 0
        },
        "property2": {
          "varname1": 0,
          "varname2": 0
        }
      },
      "green": 0,
      "red": 0
    }
  },
  "charts_count": 0,
  "dimensions_count": 0,
  "alarms_count": 0,
  "rrd_memory_bytes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|The hostname of the netdata server.|
|version|string|false|none|netdata version of the server.|
|release_channel|string|false|none|The release channel of the build on the server.|
|timezone|string|false|none|The current timezone on the server.|
|os|string|false|none|The netdata server host operating system.|
|history|number|false|none|The duration, in seconds, of the round robin database maintained by netdata.|
|memory_mode|string|false|none|The name of the database memory mode on the server.|
|update_every|number|false|none|The default update frequency of the netdata server. All charts have an update frequency equal or bigger than this.|
|charts|object|false|none|An object containing all the chart objects available at the netdata server. This is used as an indexed array. The key of each chart object is the id of the chart.|
|charts_count|number|false|none|The number of charts.|
|dimensions_count|number|false|none|The total number of dimensions.|
|alarms_count|number|false|none|The number of alarms.|
|rrd_memory_bytes|number|false|none|The size of the round robin database in bytes.|

#### Enumerated Values

|Property|Value|
|---|---|
|os|macos|
|os|linux|
|os|freebsd|

<h2 id="tocS_chart">chart</h2>
<!-- backwards compatibility -->
<a id="schemachart"></a>
<a id="schema_chart"></a>
<a id="tocSchart"></a>
<a id="tocschart"></a>

```json
{
  "id": "string",
  "name": "string",
  "type": "string",
  "family": "string",
  "title": "string",
  "priority": 0,
  "enabled": true,
  "units": "string",
  "data_url": "string",
  "chart_type": "line",
  "duration": 0,
  "first_entry": 0,
  "last_entry": 0,
  "update_every": 0,
  "dimensions": {
    "property1": {
      "name": "string"
    },
    "property2": {
      "name": "string"
    }
  },
  "chart_variables": {
    "property1": {
      "varname1": 0,
      "varname2": 0
    },
    "property2": {
      "varname1": 0,
      "varname2": 0
    }
  },
  "green": 0,
  "red": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique id of the chart.|
|name|string|false|none|The name of the chart.|
|type|string|false|none|The type of the chart. Types are not handled by netdata. You can use this field for anything you like.|
|family|string|false|none|The family of the chart. Families are not handled by netdata. You can use this field for anything you like.|
|title|string|false|none|The title of the chart.|
|priority|number|false|none|The relative priority of the chart. Netdata does not care about priorities. This is just an indication of importance for the chart viewers to sort charts of higher priority (lower number) closer to the top. Priority sorting should only be used among charts of the same type or family.|
|enabled|boolean|false|none|True when the chart is enabled. Disabled charts do not currently collect values, but they may have historical values available.|
|units|string|false|none|The unit of measurement for the values of all dimensions of the chart.|
|data_url|string|false|none|The absolute path to get data values for this chart. You are expected to use this path as the base when constructing the URL to fetch data values for this chart.|
|chart_type|string|false|none|The chart type.|
|duration|number|false|none|The duration, in seconds, of the round robin database maintained by netdata.|
|first_entry|number|false|none|The UNIX timestamp of the first entry (the oldest) in the round robin database.|
|last_entry|number|false|none|The UNIX timestamp of the latest entry in the round robin database.|
|update_every|number|false|none|The update frequency of this chart, in seconds. One value every this amount of time is kept in the round robin database.|
|dimensions|object|false|none|An object containing all the chart dimensions available for the chart. This is used as an indexed array. For each pair in the dictionary: the key is the id of the dimension and the value is a dictionary containing the name."<br>|
|chart_variables|object|false|none|none|
|green|number \| null|false|none|Chart health green threshold.|
|red|number \| null|false|none|Chart health red threshold.|

#### Enumerated Values

|Property|Value|
|---|---|
|chart_type|line|
|chart_type|area|
|chart_type|stacked|

<h2 id="tocS_context_summary">context_summary</h2>
<!-- backwards compatibility -->
<a id="schemacontext_summary"></a>
<a id="schema_context_summary"></a>
<a id="tocScontext_summary"></a>
<a id="tocscontext_summary"></a>

```json
{
  "hostname": "string",
  "machine_guid": "string",
  "node_id": "nightly",
  "claim_id": "string",
  "host_labels": {},
  "context": {
    "property1": {
      "version": "string",
      "hub_version": "string",
      "family": "string",
      "title": "string",
      "priority": 0,
      "units": "string",
      "chart_type": "line",
      "first_time_t": 0,
      "last_time_t": 0,
      "charts": {}
    },
    "property2": {
      "version": "string",
      "hub_version": "string",
      "family": "string",
      "title": "string",
      "priority": 0,
      "units": "string",
      "chart_type": "line",
      "first_time_t": 0,
      "last_time_t": 0,
      "charts": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|The hostname of the netdata server.|
|machine_guid|string|false|none|The unique installation id of this netdata server.|
|node_id|string|false|none|The unique node id of this netdata server at the hub.|
|claim_id|string|false|none|The unique handshake id of this netdata server and the hub.|
|host_labels|object|false|none|The host labels associated with this netdata server.|
|context|object|false|none|An object containing all the context objects available at the netdata server. This is used as an indexed array. The key of each context object is the id of the context.|

<h2 id="tocS_context">context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
{
  "version": "string",
  "hub_version": "string",
  "family": "string",
  "title": "string",
  "priority": 0,
  "units": "string",
  "chart_type": "line",
  "first_time_t": 0,
  "last_time_t": 0,
  "charts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|The version of this context. The number are not sequential, but bigger numbers depict a newer object.|
|hub_version|string|false|none|The version of this context, as known by hub.|
|family|string|false|none|The family of the context. When multiple charts of a context have different families, the netdata server replaces the different parts with [x], so that the context can have only one family.|
|title|string|false|none|The title of the context. When multiple charts of a context have different titles, the netdata server replaces the different parts with [x], so that the context can have only one title.|
|priority|number|false|none|The relative priority of the context. When multiple contexts have different priorities, the minimum among them is selected as the priority of the context.|
|units|string|false|none|The unit of measurement for the values of all dimensions of the context. If multiple charts of context have different units, the latest collected is selected.|
|chart_type|string|false|none|The chart type.|
|first_time_t|number|false|none|The UNIX timestamp of the first entry (the oldest) in the database.|
|last_time_t|number|false|none|The UNIX timestamp of the latest entry in the database.|
|charts|object|false|none|An object containing all the charts available for the chart. This is used as an indexed array. For each pair in the dictionary, the key is the id of the chart and the value provides all details about the chart.|

#### Enumerated Values

|Property|Value|
|---|---|
|chart_type|line|
|chart_type|area|
|chart_type|stacked|

<h2 id="tocS_alarm_variables">alarm_variables</h2>
<!-- backwards compatibility -->
<a id="schemaalarm_variables"></a>
<a id="schema_alarm_variables"></a>
<a id="tocSalarm_variables"></a>
<a id="tocsalarm_variables"></a>

```json
{
  "chart": "string",
  "chart_name": "string",
  "cnart_context": "string",
  "family": "string",
  "host": "string",
  "chart_variables": {
    "property1": {
      "varname1": 0,
      "varname2": 0
    },
    "property2": {
      "varname1": 0,
      "varname2": 0
    }
  },
  "family_variables": {
    "varname1": 0,
    "varname2": 0
  },
  "host_variables": {
    "varname1": 0,
    "varname2": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chart|string|false|none|The unique id of the chart.|
|chart_name|string|false|none|The name of the chart.|
|cnart_context|string|false|none|The context of the chart. It is shared across multiple monitored software or hardware instances and used in alarm templates.|
|family|string|false|none|The family of the chart.|
|host|string|false|none|The host containing the chart.|
|chart_variables|object|false|none|none|
|family_variables|object|false|none|none|
|host_variables|object|false|none|none|

<h2 id="tocS_chart_variables">chart_variables</h2>
<!-- backwards compatibility -->
<a id="schemachart_variables"></a>
<a id="schema_chart_variables"></a>
<a id="tocSchart_variables"></a>
<a id="tocschart_variables"></a>

```json
{
  "varname1": 0,
  "varname2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|varname1|number(float)|false|none|none|
|varname2|number(float)|false|none|none|

<h2 id="tocS_jsonwrap2">jsonwrap2</h2>
<!-- backwards compatibility -->
<a id="schemajsonwrap2"></a>
<a id="schema_jsonwrap2"></a>
<a id="tocSjsonwrap2"></a>
<a id="tocsjsonwrap2"></a>

```json
{
  "api": 0,
  "agents": [
    {
      "mg": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nd": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nm": "string",
      "ai": 0,
      "now": 0
    }
  ],
  "versions": {
    "nodes_hard_hash": 0,
    "contexts_hard_hash": 0,
    "contexts_soft_hash": 0,
    "alerts_hard_hash": 0,
    "alerts_soft_hash": 0
  },
  "summary": {
    "nodes": [
      {
        "mg": "string",
        "nd": "string",
        "nm": "string",
        "ni": 0,
        "st": {
          "ai": 0,
          "code": 0,
          "msg": "string",
          "ms": 0
        },
        "is": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "al": {
          "nm": "string",
          "cl": 0,
          "wr": 0,
          "cr": 0,
          "ot": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        }
      }
    ],
    "contexts": [
      {
        "id": "string",
        "is": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "al": {
          "nm": "string",
          "cl": 0,
          "wr": 0,
          "cr": 0,
          "ot": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        }
      }
    ],
    "instances": [
      {
        "id": "string",
        "nm": "string",
        "ni": null,
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "al": {
          "nm": "string",
          "cl": 0,
          "wr": 0,
          "cr": 0,
          "ot": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        }
      }
    ],
    "dimensions": [
      {
        "id": "string",
        "nm": "string",
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        }
      }
    ],
    "labels": [
      {
        "id": "string",
        "ds": {
          "sl": 0,
          "ex": 0,
          "qr": 0,
          "fl": 0
        },
        "sts": {
          "min": 0,
          "max": 0,
          "avg": 0,
          "arp": 0,
          "con": 0
        },
        "vl": [
          {
            "id": "string",
            "ds": {
              "sl": 0,
              "ex": 0,
              "qr": 0,
              "fl": 0
            },
            "sts": {
              "min": 0,
              "max": 0,
              "avg": 0,
              "arp": 0,
              "con": 0
            }
          }
        ]
      }
    ],
    "alerts": [
      {
        "nm": "string",
        "cl": 0,
        "wr": 0,
        "cr": 0,
        "ot": 0
      }
    ]
  },
  "totals": {
    "nodes": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "contexts": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "instances": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "dimensions": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "label_keys": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    },
    "label_key_values": {
      "sl": 0,
      "ex": 0,
      "qr": 0,
      "fl": 0
    }
  },
  "functions": [
    "string"
  ],
  "db": {
    "tiers": 0,
    "update_every": 0,
    "first_entry": 0,
    "last_entry": 0,
    "per_tier": [
      {
        "tier": 0,
        "queries": 0,
        "points": 0,
        "update_every": 0,
        "first_entry": 0,
        "last_entry": null
      }
    ],
    "units": "string",
    "dimensions": {
      "ids": [
        "string"
      ],
      "units": [
        "string"
      ],
      "sts": {
        "min": 0,
        "max": 0,
        "avg": 0,
        "arp": 0,
        "con": 0
      }
    }
  },
  "view": {
    "title": "string",
    "format": "string",
    "options": [
      "string"
    ],
    "time_group": "string",
    "after": 0,
    "before": 0,
    "cardinality": {
      "folded": 0,
      "cut": 0
    },
    "partial_data_trimming": {
      "max_update_every": 0,
      "expected_after": 0,
      "trimmed_after": 0
    },
    "points": 0,
    "units": "string",
    "chart_type": "line",
    "dimensions": {
      "grouped_by": [
        "selected"
      ],
      "ids": [
        "string"
      ],
      "names": [
        "string"
      ],
      "priorities": [
        0
      ],
      "aggregated": [
        0
      ],
      "units": [
        "string"
      ],
      "sts": {
        "min": 0,
        "max": 0,
        "avg": 0,
        "arp": 0,
        "con": 0
      },
      "labels": {
        "label_key1": [
          [
            "string"
          ]
        ]
      }
    },
    "min": 0,
    "max": 0
  },
  "result": {
    "labels": [
      "string"
    ],
    "point": {
      "value": 0,
      "arp": 0,
      "pa": 0,
      "count": 0,
      "hidden": null
    },
    "data": [
      0
    ]
  },
  "timings": {}
}
```

Data response with `format=json2`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|[api](#schemaapi)|false|none|The version of the API used.|
|agents|[agents](#schemaagents)|false|none|An array of Agent definitions consulted to compose this response.<br>|
|versions|[versions](#schemaversions)|false|none|Hashes that allow the caller to detect important database changes of Netdata Agents.<br>|
|summary|object|false|none|Summarized information about nodes, contexts, instances, labels, alerts, and dimensions. The items returned are determined by the scope of the query only, however the statistical data in them are influenced by the filters of the query. Using this information the dashboard allows users to slice and dice the data by filtering and grouping.<br>|
|totals|object|false|none|none|
|functions|[string]|false|none|none|
|db|object|false|none|none|
|view|object|false|none|none|
|result|[data_json_formats2](#schemadata_json_formats2)|false|none|Depending on the `format` given to a data query, any of the following may be returned.<br>|
|timings|object|false|none|none|

<h2 id="tocS_jsonwrap2_sts">jsonwrap2_sts</h2>
<!-- backwards compatibility -->
<a id="schemajsonwrap2_sts"></a>
<a id="schema_jsonwrap2_sts"></a>
<a id="tocSjsonwrap2_sts"></a>
<a id="tocsjsonwrap2_sts"></a>

```json
{
  "min": 0,
  "max": 0,
  "avg": 0,
  "arp": 0,
  "con": 0
}
```

Statistical values

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|min|number|false|none|The minimum value of all metrics aggregated|
|max|number|false|none|The maximum value of all metrics aggregated|
|avg|number|false|none|The average value of all metrics aggregated|
|arp|number|false|none|The average anomaly rate of all metrics aggregated|
|con|number|false|none|The contribution percentage of all the metrics aggregated|

<h2 id="tocS_jsonwrap2_sts_raw">jsonwrap2_sts_raw</h2>
<!-- backwards compatibility -->
<a id="schemajsonwrap2_sts_raw"></a>
<a id="schema_jsonwrap2_sts_raw"></a>
<a id="tocSjsonwrap2_sts_raw"></a>
<a id="tocsjsonwrap2_sts_raw"></a>

```json
{
  "min": 0,
  "max": 0,
  "sum": 0,
  "ars": 0,
  "vol": 0,
  "cnt": 0
}
```

Statistical values when `raw` option is given.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|min|number|false|none|The minimum value of all metrics aggregated|
|max|number|false|none|The maximum value of all metrics aggregated|
|sum|number|false|none|The sum value of all metrics aggregated|
|ars|number|false|none|The sum anomaly rate of all metrics aggregated|
|vol|number|false|none|The volume of all the metrics aggregated|
|cnt|integer|false|none|The count of all metrics aggregated|

<h2 id="tocS_jsonwrap2_items_count">jsonwrap2_items_count</h2>
<!-- backwards compatibility -->
<a id="schemajsonwrap2_items_count"></a>
<a id="schema_jsonwrap2_items_count"></a>
<a id="tocSjsonwrap2_items_count"></a>
<a id="tocsjsonwrap2_items_count"></a>

```json
{
  "sl": 0,
  "ex": 0,
  "qr": 0,
  "fl": 0
}
```

Depending on the placement of this object, `items` may be `nodes`, `contexts`, `instances`, `dimensions`, `label keys`, `label key-value pairs`. Furthermore, if the whole object is missing it should be assumed that all its members are zero.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sl|integer|false|none|The number of items `selected` to query. If absent it is zero.|
|ex|integer|false|none|The number of items `excluded` from querying. If absent it is zero.|
|qr|integer|false|none|The number of items (out of `selected`) the query successfully `queried`.  If absent it is zero.|
|fl|integer|false|none|The number of items (from `selected`) that `failed` to be queried.  If absent it is zero.|

<h2 id="tocS_jsonwrap2_alerts_count">jsonwrap2_alerts_count</h2>
<!-- backwards compatibility -->
<a id="schemajsonwrap2_alerts_count"></a>
<a id="schema_jsonwrap2_alerts_count"></a>
<a id="tocSjsonwrap2_alerts_count"></a>
<a id="tocsjsonwrap2_alerts_count"></a>

```json
{
  "nm": "string",
  "cl": 0,
  "wr": 0,
  "cr": 0,
  "ot": 0
}
```

Counters about alert statuses. If this object is missing, it is assumed that all its members are zero.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nm|string|false|none|The name of the alert. Can be absent when the counters refer to more than one alert instances.|
|cl|integer|false|none|The number of CLEAR alerts. If absent, it is zero.|
|wr|integer|false|none|The number of WARNING alerts. If absent, it is zero.|
|cr|integer|false|none|The number of CRITICAL alerts. If absent, it is zero.|
|ot|integer|false|none|The number of alerts that are not CLEAR, WARNING, CRITICAL (so, they are "other").  If absent, it is zero.<br>|

<h2 id="tocS_api">api</h2>
<!-- backwards compatibility -->
<a id="schemaapi"></a>
<a id="schema_api"></a>
<a id="tocSapi"></a>
<a id="tocsapi"></a>

```json
0
```

The version of the API used.

<h2 id="tocS_agents">agents</h2>
<!-- backwards compatibility -->
<a id="schemaagents"></a>
<a id="schema_agents"></a>
<a id="tocSagents"></a>
<a id="tocsagents"></a>

```json
[
  {
    "mg": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "nd": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "nm": "string",
    "ai": 0,
    "now": 0
  }
]
```

An array of Agent definitions consulted to compose this response.

<h2 id="tocS_versions">versions</h2>
<!-- backwards compatibility -->
<a id="schemaversions"></a>
<a id="schema_versions"></a>
<a id="tocSversions"></a>
<a id="tocsversions"></a>

```json
{
  "nodes_hard_hash": 0,
  "contexts_hard_hash": 0,
  "contexts_soft_hash": 0,
  "alerts_hard_hash": 0,
  "alerts_soft_hash": 0
}
```

Hashes that allow the caller to detect important database changes of Netdata Agents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodes_hard_hash|integer|false|none|An auto-increment value that reflects the number of changes to the number of nodes maintained by the server. Everytime a node is added or removed, this number gets incremented.<br>|
|contexts_hard_hash|integer|false|none|An auto-increment value that reflects the number of changes to the number of contexts maintained by the server. Everytime a context is added or removed, this number gets incremented.<br>|
|contexts_soft_hash|integer|false|none|An auto-increment value that reflects the number of changes to the queue that sends contexts updates to Netdata Cloud. Everytime the contents of a context are updated, this number gets incremented.<br>|
|alerts_hard_hash|integer|false|none|An auto-increment value that reflects the number of changes to the number of alerts. Everytime an alert is added or removed, this number gets incremented.<br>|
|alerts_soft_hash|integer|false|none|An auto-increment value that reflects the number of alerts transitions. Everytime an alert transitions to a new state, this number gets incremented.<br>|

<h2 id="tocS_nodeBasic">nodeBasic</h2>
<!-- backwards compatibility -->
<a id="schemanodebasic"></a>
<a id="schema_nodeBasic"></a>
<a id="tocSnodebasic"></a>
<a id="tocsnodebasic"></a>

```json
{
  "mg": "string",
  "nd": "string",
  "nm": "string",
  "ni": 0,
  "st": {
    "ai": 0,
    "code": 0,
    "msg": "string",
    "ms": 0
  }
}
```

Basic information about a node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mg|string(UUID)|false|none|The machine guid of the node. May not be available if the request is served by the Netdata Cloud.|
|nd|string(UUID)|false|none|The node id of the node. May not be available if the node is not registered to Netdata Cloud.|
|nm|string|false|none|The name (hostname) of the node.|
|ni|integer|true|none|The node index id, a number that uniquely identifies this node for this query.|
|st|object|true|none|Status information about the communication with this node.|

<h2 id="tocS_nodeWithDataStatistics">nodeWithDataStatistics</h2>
<!-- backwards compatibility -->
<a id="schemanodewithdatastatistics"></a>
<a id="schema_nodeWithDataStatistics"></a>
<a id="tocSnodewithdatastatistics"></a>
<a id="tocsnodewithdatastatistics"></a>

```json
{
  "mg": "string",
  "nd": "string",
  "nm": "string",
  "ni": 0,
  "st": {
    "ai": 0,
    "code": 0,
    "msg": "string",
    "ms": 0
  },
  "is": {
    "sl": 0,
    "ex": 0,
    "qr": 0,
    "fl": 0
  },
  "ds": {
    "sl": 0,
    "ex": 0,
    "qr": 0,
    "fl": 0
  },
  "al": {
    "nm": "string",
    "cl": 0,
    "wr": 0,
    "cr": 0,
    "ot": 0
  },
  "sts": {
    "min": 0,
    "max": 0,
    "avg": 0,
    "arp": 0,
    "con": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mg|string(UUID)|false|none|The machine guid of the node. May not be available if the request is served by the Netdata Cloud.|
|nd|string(UUID)|false|none|The node id of the node. May not be available if the node is not registered to Netdata Cloud.|
|nm|string|false|none|The name (hostname) of the node.|
|ni|integer|true|none|The node index id, a number that uniquely identifies this node for this query.|
|st|object|true|none|Status information about the communication with this node.|
|is|[jsonwrap2_items_count](#schemajsonwrap2_items_count)|false|none|Depending on the placement of this object, `items` may be `nodes`, `contexts`, `instances`, `dimensions`, `label keys`, `label key-value pairs`. Furthermore, if the whole object is missing it should be assumed that all its members are zero.<br>|
|ds|[jsonwrap2_items_count](#schemajsonwrap2_items_count)|false|none|Depending on the placement of this object, `items` may be `nodes`, `contexts`, `instances`, `dimensions`, `label keys`, `label key-value pairs`. Furthermore, if the whole object is missing it should be assumed that all its members are zero.<br>|
|al|[jsonwrap2_alerts_count](#schemajsonwrap2_alerts_count)|false|none|Counters about alert statuses. If this object is missing, it is assumed that all its members are zero.<br>|
|sts|[jsonwrap2_sts](#schemajsonwrap2_sts) \| [jsonwrap2_sts_raw](#schemajsonwrap2_sts_raw)|false|none|none|

<h2 id="tocS_nodeFull">nodeFull</h2>
<!-- backwards compatibility -->
<a id="schemanodefull"></a>
<a id="schema_nodeFull"></a>
<a id="tocSnodefull"></a>
<a id="tocsnodefull"></a>

```json
{
  "mg": "string",
  "nd": "string",
  "nm": "string",
  "ni": 0,
  "st": {
    "ai": 0,
    "code": 0,
    "msg": "string",
    "ms": 0
  },
  "version": "string",
  "hops": 0,
  "state": "reachable"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mg|string(UUID)|false|none|The machine guid of the node. May not be available if the request is served by the Netdata Cloud.|
|nd|string(UUID)|false|none|The node id of the node. May not be available if the node is not registered to Netdata Cloud.|
|nm|string|false|none|The name (hostname) of the node.|
|ni|integer|true|none|The node index id, a number that uniquely identifies this node for this query.|
|st|object|true|none|Status information about the communication with this node.|
|version|string|false|none|The version of the Netdata Agent the node runs.|
|hops|integer|false|none|How many hops away from the origin node, the queried one is. 0 means the Agent itself is the origin node.|
|state|string|false|none|The current state of the node on this Agent.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|reachable|
|state|stale|
|state|offline|

<h2 id="tocS_context2Basic">context2Basic</h2>
<!-- backwards compatibility -->
<a id="schemacontext2basic"></a>
<a id="schema_context2Basic"></a>
<a id="tocScontext2basic"></a>
<a id="tocscontext2basic"></a>

```json
{
  "family": "string",
  "priority": 0,
  "first_entry": 0,
  "last_entry": 0,
  "live": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|family|string|false|none|none|
|priority|integer|false|none|none|
|first_entry|integer|false|none|none|
|last_entry|integer|false|none|none|
|live|boolean|false|none|none|

<h2 id="tocS_contexts2">contexts2</h2>
<!-- backwards compatibility -->
<a id="schemacontexts2"></a>
<a id="schema_contexts2"></a>
<a id="tocScontexts2"></a>
<a id="tocscontexts2"></a>

```json
{
  "api": 0,
  "agents": [
    {
      "mg": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nd": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "nm": "string",
      "ai": 0,
      "now": 0
    }
  ],
  "versions": {
    "nodes_hard_hash": 0,
    "contexts_hard_hash": 0,
    "contexts_soft_hash": 0,
    "alerts_hard_hash": 0,
    "alerts_soft_hash": 0
  },
  "contexts": {
    "property1": {
      "family": "string",
      "priority": 0,
      "first_entry": 0,
      "last_entry": 0,
      "live": true
    },
    "property2": {
      "family": "string",
      "priority": 0,
      "first_entry": 0,
      "last_entry": 0,
      "live": true
    }
  }
}
```

`/api/v2/contexts` and `/api/v2/q` response about multi-node contexts hosted by a Netdata Agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|[api](#schemaapi)|false|none|The version of the API used.|
|agents|[agents](#schemaagents)|false|none|An array of Agent definitions consulted to compose this response.<br>|
|versions|[versions](#schemaversions)|false|none|Hashes that allow the caller to detect important database changes of Netdata Agents.<br>|
|contexts|object|false|none|none|

<h2 id="tocS_jsonwrap1">jsonwrap1</h2>
<!-- backwards compatibility -->
<a id="schemajsonwrap1"></a>
<a id="schema_jsonwrap1"></a>
<a id="tocSjsonwrap1"></a>
<a id="tocsjsonwrap1"></a>

```json
{
  "api": 0,
  "id": "string",
  "name": "string",
  "update_every": 0,
  "view_update_every": 0,
  "first_entry": 0,
  "last_entry": 0,
  "after": 0,
  "before": 0,
  "min": 0,
  "max": 0,
  "dimension_names": [
    "string"
  ],
  "dimension_ids": [
    "string"
  ],
  "latest_values": [
    "string"
  ],
  "view_latest_values": [
    "string"
  ],
  "dimensions": 0,
  "points": 0,
  "format": "string",
  "chart_variables": {
    "property1": {
      "varname1": 0,
      "varname2": 0
    },
    "property2": {
      "varname1": 0,
      "varname2": 0
    }
  },
  "result": {
    "labels": [
      "string"
    ],
    "data": [
      0
    ]
  }
}
```

Response will contain the appropriate subtype, e.g. data_json depending on the requested format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|number|false|none|The API version this conforms to.|
|id|string|false|none|The unique id of the chart.|
|name|string|false|none|The name of the chart.|
|update_every|number|false|none|The update frequency of this chart, in seconds. One value every this amount of time is kept in the round robin database (independently of the current view).|
|view_update_every|number|false|none|The current view appropriate update frequency of this chart, in seconds. There is no point to request chart refreshes, using the same settings, more frequently than this.|
|first_entry|number|false|none|The UNIX timestamp of the first entry (the oldest) in the round robin database (independently of the current view).|
|last_entry|number|false|none|The UNIX timestamp of the latest entry in the round robin database (independently of the current view).|
|after|number|false|none|The UNIX timestamp of the first entry (the oldest) returned in this response.|
|before|number|false|none|The UNIX timestamp of the latest entry returned in this response.|
|min|number|false|none|The minimum value returned in the current view. This can be used to size the y-series of the chart.|
|max|number|false|none|The maximum value returned in the current view. This can be used to size the y-series of the chart.|
|dimension_names|[string]|false|none|The dimension names of the chart as returned in the current view.|
|dimension_ids|[string]|false|none|The dimension IDs of the chart as returned in the current view.|
|latest_values|[string]|false|none|The latest values collected for the chart (independently of the current view).|
|view_latest_values|[string]|false|none|The latest values returned with this response.|
|dimensions|number|false|none|The number of dimensions returned.|
|points|number|false|none|The number of rows / points returned.|
|format|string|false|none|The format of the result returned.|
|chart_variables|object|false|none|none|
|result|[data_json_formats1](#schemadata_json_formats1)|false|none|Depending on the `format` given to a data query, any of the following may be returned.<br>|

<h2 id="tocS_data_json_formats1">data_json_formats1</h2>
<!-- backwards compatibility -->
<a id="schemadata_json_formats1"></a>
<a id="schema_data_json_formats1"></a>
<a id="tocSdata_json_formats1"></a>
<a id="tocsdata_json_formats1"></a>

```json
{
  "labels": [
    "string"
  ],
  "data": [
    0
  ]
}
```

Depending on the `format` given to a data query, any of the following may be returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[data_json](#schemadata_json)|false|none|Data response in `json` format.|
|*oneOf*|[data_datatable](#schemadata_datatable)|false|none|Data response in datatable / datasource formats (suitable for Google Charts).<br>|
|*oneOf*|[data_csvjsonarray](#schemadata_csvjsonarray)|false|none|The first inner array contains strings showing the labels of each column, each subsequent array contains the values for each point in time.<br>|
|*oneOf*|[data_array](#schemadata_array)|false|none|Data response in `array` format.|
|*oneOf*|[data_txt](#schemadata_txt)|false|none|Data response in `csv`, `tsv`, `tsv-excel`, `ssv`, `ssv-comma`, `markdown`, `html` formats.<br>|

<h2 id="tocS_data_json_formats2">data_json_formats2</h2>
<!-- backwards compatibility -->
<a id="schemadata_json_formats2"></a>
<a id="schema_data_json_formats2"></a>
<a id="tocSdata_json_formats2"></a>
<a id="tocsdata_json_formats2"></a>

```json
{
  "labels": [
    "string"
  ],
  "point": {
    "value": 0,
    "arp": 0,
    "pa": 0,
    "count": 0,
    "hidden": null
  },
  "data": [
    0
  ]
}
```

Depending on the `format` given to a data query, any of the following may be returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[data_json2](#schemadata_json2)|false|none|none|
|*oneOf*|[data_json_formats1](#schemadata_json_formats1)|false|none|Depending on the `format` given to a data query, any of the following may be returned.<br>|

<h2 id="tocS_data_json2">data_json2</h2>
<!-- backwards compatibility -->
<a id="schemadata_json2"></a>
<a id="schema_data_json2"></a>
<a id="tocSdata_json2"></a>
<a id="tocsdata_json2"></a>

```json
{
  "labels": [
    "string"
  ],
  "point": {
    "value": 0,
    "arp": 0,
    "pa": 0,
    "count": 0,
    "hidden": null
  },
  "data": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[string]|false|none|The IDs of the dimensions returned. The first is always `time`.<br>|
|point|object|false|none|The format of each point returned.<br>|
|data|[integer \| [number]]|false|none|none|

<h2 id="tocS_data_json">data_json</h2>
<!-- backwards compatibility -->
<a id="schemadata_json"></a>
<a id="schema_data_json"></a>
<a id="tocSdata_json"></a>
<a id="tocsdata_json"></a>

```json
{
  "labels": [
    "string"
  ],
  "data": [
    0
  ]
}
```

Data response in `json` format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[string]|false|none|The dimensions retrieved from the chart.|
|data|[number]|false|none|The data requested, one element per sample with each element containing the values of the dimensions described in the labels value.<br>|

<h2 id="tocS_data_txt">data_txt</h2>
<!-- backwards compatibility -->
<a id="schemadata_txt"></a>
<a id="schema_data_txt"></a>
<a id="tocSdata_txt"></a>
<a id="tocsdata_txt"></a>

```json
"string"
```

Data response in `csv`, `tsv`, `tsv-excel`, `ssv`, `ssv-comma`, `markdown`, `html` formats.

<h2 id="tocS_data_array">data_array</h2>
<!-- backwards compatibility -->
<a id="schemadata_array"></a>
<a id="schema_data_array"></a>
<a id="tocSdata_array"></a>
<a id="tocsdata_array"></a>

```json
[
  0
]
```

Data response in `array` format.

<h2 id="tocS_data_csvjsonarray">data_csvjsonarray</h2>
<!-- backwards compatibility -->
<a id="schemadata_csvjsonarray"></a>
<a id="schema_data_csvjsonarray"></a>
<a id="tocSdata_csvjsonarray"></a>
<a id="tocsdata_csvjsonarray"></a>

```json
[
  [
    null
  ]
]
```

The first inner array contains strings showing the labels of each column, each subsequent array contains the values for each point in time.

<h2 id="tocS_data_datatable">data_datatable</h2>
<!-- backwards compatibility -->
<a id="schemadata_datatable"></a>
<a id="schema_data_datatable"></a>
<a id="tocSdata_datatable"></a>
<a id="tocsdata_datatable"></a>

```json
{
  "cols": [
    {
      "id": null,
      "label": null,
      "pattern": null,
      "type": null,
      "p": null
    }
  ],
  "rows": [
    {
      "c": [
        {
          "v": null
        }
      ]
    }
  ]
}
```

Data response in datatable / datasource formats (suitable for Google Charts).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cols|[object]|false|none|none|
|rows|[object]|false|none|none|

<h2 id="tocS_alarms">alarms</h2>
<!-- backwards compatibility -->
<a id="schemaalarms"></a>
<a id="schema_alarms"></a>
<a id="tocSalarms"></a>
<a id="tocsalarms"></a>

```json
{
  "hostname": "string",
  "latest_alarm_log_unique_id": 0,
  "status": true,
  "now": 0,
  "alarms": {
    "chart-name.alarm-name": {
      "id": 0,
      "name": "string",
      "chart": "string",
      "family": "string",
      "active": true,
      "disabled": true,
      "silenced": true,
      "exec": "string",
      "recipient": "string",
      "source": "string",
      "units": "string",
      "info": "string",
      "status": "string",
      "last_status_change": 0,
      "last_updated": 0,
      "next_update": 0,
      "update_every": 0,
      "delay_up_duration": 0,
      "delay_down_duration": 0,
      "delay_max_duration": 0,
      "delay_multiplier": 0,
      "delay": 0,
      "delay_up_to_timestamp": 0,
      "value_string": "string",
      "no_clear_notification": true,
      "lookup_dimensions": "string",
      "db_after": 0,
      "db_before": 0,
      "lookup_method": "string",
      "lookup_after": 0,
      "lookup_before": 0,
      "lookup_options": "string",
      "calc": "string",
      "calc_parsed": "string",
      "warn": "string",
      "warn_parsed": "string",
      "crit": "string",
      "crit_parsed": "string",
      "warn_repeat_every": 0,
      "crit_repeat_every": 0,
      "green": "string",
      "red": "string",
      "value": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|none|
|latest_alarm_log_unique_id|integer(int32)|false|none|none|
|status|boolean|false|none|none|
|now|integer(int32)|false|none|none|
|alarms|object|false|none|none|

<h2 id="tocS_alarm_log_entry">alarm_log_entry</h2>
<!-- backwards compatibility -->
<a id="schemaalarm_log_entry"></a>
<a id="schema_alarm_log_entry"></a>
<a id="tocSalarm_log_entry"></a>
<a id="tocsalarm_log_entry"></a>

```json
{
  "hostname": "string",
  "unique_id": 0,
  "alarm_id": 0,
  "alarm_event_id": 0,
  "name": "string",
  "chart": "string",
  "family": "string",
  "processed": true,
  "updated": true,
  "exec_run": 0,
  "exec_failed": true,
  "exec": "string",
  "recipient": "string",
  "exec_code": 0,
  "source": "string",
  "units": "string",
  "when": 0,
  "duration": 0,
  "non_clear_duration": 0,
  "status": "string",
  "old_status": "string",
  "delay": 0,
  "delay_up_to_timestamp": 0,
  "updated_by_id": 0,
  "updates_id": 0,
  "value_string": "string",
  "old_value_string": "string",
  "silenced": "string",
  "info": "string",
  "value": 0,
  "old_value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|none|
|unique_id|integer(int32)|false|none|none|
|alarm_id|integer(int32)|false|none|none|
|alarm_event_id|integer(int32)|false|none|none|
|name|string|false|none|none|
|chart|string|false|none|none|
|family|string|false|none|none|
|processed|boolean|false|none|none|
|updated|boolean|false|none|none|
|exec_run|integer(int32)|false|none|none|
|exec_failed|boolean|false|none|none|
|exec|string|false|none|none|
|recipient|string|false|none|none|
|exec_code|integer(int32)|false|none|none|
|source|string|false|none|none|
|units|string|false|none|none|
|when|integer(int32)|false|none|none|
|duration|integer(int32)|false|none|none|
|non_clear_duration|integer(int32)|false|none|none|
|status|string|false|none|none|
|old_status|string|false|none|none|
|delay|integer(int32)|false|none|none|
|delay_up_to_timestamp|integer(int32)|false|none|none|
|updated_by_id|integer(int32)|false|none|none|
|updates_id|integer(int32)|false|none|none|
|value_string|string|false|none|none|
|old_value_string|string|false|none|none|
|silenced|string|false|none|none|
|info|string|false|none|none|
|value|number \| null|false|none|none|
|old_value|number \| null|false|none|none|

<h2 id="tocS_alarms_values">alarms_values</h2>
<!-- backwards compatibility -->
<a id="schemaalarms_values"></a>
<a id="schema_alarms_values"></a>
<a id="tocSalarms_values"></a>
<a id="tocsalarms_values"></a>

```json
{
  "hostname": "string",
  "alarms": {
    "property1": {
      "id": 0,
      "value": 0,
      "last_updated": 0,
      "status": "REMOVED"
    },
    "property2": {
      "id": 0,
      "value": 0,
      "last_updated": 0,
      "status": "REMOVED"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|none|
|alarms|object|false|none|HashMap with keys being alarm names|

<h2 id="tocS_aclk_state">aclk_state</h2>
<!-- backwards compatibility -->
<a id="schemaaclk_state"></a>
<a id="schema_aclk_state"></a>
<a id="tocSaclk_state"></a>
<a id="tocsaclk_state"></a>

```json
{
  "aclk-available": "string",
  "aclk-version": 0,
  "protocols-supported": [
    "string"
  ],
  "Agent-claimed": true,
  "claimed_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "online": true,
  "used-cloud-protocol": "Old"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aclk-available|string|false|none|Describes whether this Agent is capable of connection to the Cloud. False means Agent has been built without ACLK component either on purpose (user choice) or due to missing dependency.<br>|
|aclk-version|integer|false|none|Describes which ACLK version is currently used.|
|protocols-supported|[string]|false|none|List of supported protocols for communication with Cloud.|
|Agent-claimed|boolean|false|none|Informs whether this Agent has been added to a space in the cloud (User has to perform claiming). If false (user didn't perform claiming) Agent will never attempt any cloud connection.|
|claimed_id|string(uuid)|false|none|Unique ID this Agent uses to identify when connecting to cloud|
|online|boolean|false|none|Informs if this Agent was connected to the cloud at the time this request has been processed.|
|used-cloud-protocol|string|false|none|Informs which protocol is used to communicate with cloud|

#### Enumerated Values

|Property|Value|
|---|---|
|used-cloud-protocol|Old|
|used-cloud-protocol|New|

<h2 id="tocS_metric_correlations">metric_correlations</h2>
<!-- backwards compatibility -->
<a id="schemametric_correlations"></a>
<a id="schema_metric_correlations"></a>
<a id="tocSmetric_correlations"></a>
<a id="tocsmetric_correlations"></a>

```json
{
  "result_limit": {
    "limit": 1,
    "total": 0,
    "returned": 0,
    "unit": "dimensions",
    "truncated": true,
    "summary_scope": "all"
  },
  "after": 0,
  "before": 0,
  "duration": 0,
  "points": 0,
  "baseline_after": 0,
  "baseline_before": 0,
  "baseline_duration": 0,
  "baseline_points": 0,
  "group": "string",
  "method": "string",
  "options": "string",
  "correlated_dimensions": null,
  "total_dimensions_count": 0,
  "statistics": {
    "query_time_ms": 0,
    "db_queries": 0,
    "db_points_read": 0,
    "query_result_points": 0,
    "binary_searches": 0
  },
  "correlated_charts": {
    "chart-id1": {
      "context": "string",
      "dimensions": {
        "dimension1-name": 0,
        "dimension2-name": 0
      }
    },
    "chart-id2": {
      "context": "string",
      "dimensions": {
        "dimension1-name": 0,
        "dimension2-name": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result_limit|[weightsResultLimit](#schemaweightsresultlimit)|false|none|Present only for a positive weights result cap. Parent summaries and analyzed counts cover the complete query.|
|after|integer|false|none|the start time of the highlighted window|
|before|integer|false|none|the end time of the highlighted window|
|duration|integer|false|none|the duration of the highlighted window|
|points|integer|false|none|the points of the highlighted window|
|baseline_after|integer|false|none|the start time of the baseline window|
|baseline_before|integer|false|none|the end time of the baseline window|
|baseline_duration|integer|false|none|the duration of the baseline window|
|baseline_points|integer|false|none|the points of the baseline window|
|group|string|false|none|the grouping method across time|
|method|string|false|none|the correlation method used|
|options|string|false|none|a comma separated list of the query options set|
|correlated_dimensions|object|false|none|the number of contributing dimensions before result limiting|
|total_dimensions_count|integer|false|none|the total number of dimensions evaluated|
|statistics|object|false|none|none|
|correlated_charts|object|false|none|An object containing chart objects with their metrics correlations.|

<h2 id="tocS_weights2">weights2</h2>
<!-- backwards compatibility -->
<a id="schemaweights2"></a>
<a id="schema_weights2"></a>
<a id="tocSweights2"></a>
<a id="tocsweights2"></a>

```json
{
  "result_limit": {
    "limit": 1,
    "total": 0,
    "returned": 0,
    "unit": "dimensions",
    "truncated": true,
    "summary_scope": "all"
  },
  "correlated_dimensions": 0,
  "total_dimensions_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result_limit|[weightsResultLimit](#schemaweightsresultlimit)|false|none|Present only for a positive weights result cap. Parent summaries and analyzed counts cover the complete query.|
|correlated_dimensions|integer|false|none|the number of contributing physical dimensions before result limiting or grouping|
|total_dimensions_count|integer|false|none|the total number of dimensions evaluated before result limiting|

<h2 id="tocS_weightsResultLimit">weightsResultLimit</h2>
<!-- backwards compatibility -->
<a id="schemaweightsresultlimit"></a>
<a id="schema_weightsResultLimit"></a>
<a id="tocSweightsresultlimit"></a>
<a id="tocsweightsresultlimit"></a>

```json
{
  "limit": 1,
  "total": 0,
  "returned": 0,
  "unit": "dimensions",
  "truncated": true,
  "summary_scope": "all"
}
```

Present only for a positive weights result cap. Parent summaries and analyzed counts cover the complete query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer|true|none|requested cap after alias precedence|
|total|integer|true|none|eligible dimensions or complete groups before limiting|
|returned|integer|true|none|retained dimensions or groups, excluding parent rows|
|unit|string|true|none|none|
|truncated|boolean|true|none|true exactly when total is greater than returned|
|summary_scope|string|true|none|retained parent summaries cover all contributing metrics, including omitted children|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|dimensions|
|unit|groups|
|summary_scope|all|

<h2 id="tocS_weights">weights</h2>
<!-- backwards compatibility -->
<a id="schemaweights"></a>
<a id="schema_weights"></a>
<a id="tocSweights"></a>
<a id="tocsweights"></a>

```json
{
  "result_limit": {
    "limit": 1,
    "total": 0,
    "returned": 0,
    "unit": "dimensions",
    "truncated": true,
    "summary_scope": "all"
  },
  "after": 0,
  "before": 0,
  "duration": 0,
  "points": 0,
  "baseline_after": 0,
  "baseline_before": 0,
  "baseline_duration": 0,
  "baseline_points": 0,
  "group": "string",
  "method": "string",
  "options": "string",
  "correlated_dimensions": null,
  "total_dimensions_count": 0,
  "statistics": {
    "query_time_ms": 0,
    "db_queries": 0,
    "db_points_read": 0,
    "query_result_points": 0,
    "binary_searches": 0
  },
  "contexts": {
    "property1": {
      "weight": 0,
      "charts": {
        "property1": {
          "weight": 0,
          "dimensions": {
            "property1": 0,
            "property2": 0
          }
        },
        "property2": {
          "weight": 0,
          "dimensions": {
            "property1": 0,
            "property2": 0
          }
        }
      }
    },
    "property2": {
      "weight": 0,
      "charts": {
        "property1": {
          "weight": 0,
          "dimensions": {
            "property1": 0,
            "property2": 0
          }
        },
        "property2": {
          "weight": 0,
          "dimensions": {
            "property1": 0,
            "property2": 0
          }
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result_limit|[weightsResultLimit](#schemaweightsresultlimit)|false|none|Present only for a positive weights result cap. Parent summaries and analyzed counts cover the complete query.|
|after|integer|false|none|the start time of the highlighted window|
|before|integer|false|none|the end time of the highlighted window|
|duration|integer|false|none|the duration of the highlighted window|
|points|integer|false|none|the points of the highlighted window|
|baseline_after|integer|false|none|the start time of the baseline window|
|baseline_before|integer|false|none|the end time of the baseline window|
|baseline_duration|integer|false|none|the duration of the baseline window|
|baseline_points|integer|false|none|the points of the baseline window|
|group|string|false|none|the grouping method across time|
|method|string|false|none|the correlation method used|
|options|string|false|none|a comma separated list of the query options set|
|correlated_dimensions|object|false|none|the number of contributing dimensions before result limiting|
|total_dimensions_count|integer|false|none|the total number of dimensions evaluated|
|statistics|object|false|none|none|
|contexts|object|false|none|A dictionary of weighted context objects.|

<h2 id="tocS_weighted_context">weighted_context</h2>
<!-- backwards compatibility -->
<a id="schemaweighted_context"></a>
<a id="schema_weighted_context"></a>
<a id="tocSweighted_context"></a>
<a id="tocsweighted_context"></a>

```json
{
  "weight": 0,
  "charts": {
    "property1": {
      "weight": 0,
      "dimensions": {
        "property1": 0,
        "property2": 0
      }
    },
    "property2": {
      "weight": 0,
      "dimensions": {
        "property1": 0,
        "property2": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|weight|number|false|none|The average weight of the context.|
|charts|object|false|none|A dictionary of weighted chart objects.|

<h2 id="tocS_weighted_chart">weighted_chart</h2>
<!-- backwards compatibility -->
<a id="schemaweighted_chart"></a>
<a id="schema_weighted_chart"></a>
<a id="tocSweighted_chart"></a>
<a id="tocsweighted_chart"></a>

```json
{
  "weight": 0,
  "dimensions": {
    "property1": 0,
    "property2": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|weight|number|false|none|The average weight of the context.|
|dimensions|object|false|none|A dictionary of weighted dimensions.|

<h2 id="tocS_weighted_dimension">weighted_dimension</h2>
<!-- backwards compatibility -->
<a id="schemaweighted_dimension"></a>
<a id="schema_weighted_dimension"></a>
<a id="tocSweighted_dimension"></a>
<a id="tocsweighted_dimension"></a>

```json
0
```

<h2 id="tocS_config_schema">config_schema</h2>
<!-- backwards compatibility -->
<a id="schemaconfig_schema"></a>
<a id="schema_config_schema"></a>
<a id="tocSconfig_schema"></a>
<a id="tocsconfig_schema"></a>

```json
{
  "jsonSchema": {},
  "uiSchema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jsonSchema|object|false|none|Standard JSON Schema object describing the schema of each configurable entity.|
|uiSchema|object|false|none|Schema for react-json-schema-form to drive the UI. Provides additional UI-specific configuration.|

<h2 id="tocS_config_tree">config_tree</h2>
<!-- backwards compatibility -->
<a id="schemaconfig_tree"></a>
<a id="schema_config_tree"></a>
<a id="tocSconfig_tree"></a>
<a id="tocsconfig_tree"></a>

```json
{
  "version": 0,
  "tree": {
    "property1": {
      "property1": {
        "type": "string",
        "status": "string",
        "cmds": [
          "string"
        ],
        "source_type": "string",
        "source": "string",
        "sync": true,
        "user_disabled": true,
        "restart_required": true,
        "plugin_rejected": true,
        "payload": {
          "available": true
        },
        "saves": 0,
        "created_ut": 0,
        "modified_ut": 0,
        "template": "string"
      },
      "property2": {
        "type": "string",
        "status": "string",
        "cmds": [
          "string"
        ],
        "source_type": "string",
        "source": "string",
        "sync": true,
        "user_disabled": true,
        "restart_required": true,
        "plugin_rejected": true,
        "payload": {
          "available": true
        },
        "saves": 0,
        "created_ut": 0,
        "modified_ut": 0,
        "template": "string"
      }
    },
    "property2": {
      "property1": {
        "type": "string",
        "status": "string",
        "cmds": [
          "string"
        ],
        "source_type": "string",
        "source": "string",
        "sync": true,
        "user_disabled": true,
        "restart_required": true,
        "plugin_rejected": true,
        "payload": {
          "available": true
        },
        "saves": 0,
        "created_ut": 0,
        "modified_ut": 0,
        "template": "string"
      },
      "property2": {
        "type": "string",
        "status": "string",
        "cmds": [
          "string"
        ],
        "source_type": "string",
        "source": "string",
        "sync": true,
        "user_disabled": true,
        "restart_required": true,
        "plugin_rejected": true,
        "payload": {
          "available": true
        },
        "saves": 0,
        "created_ut": 0,
        "modified_ut": 0,
        "template": "string"
      }
    }
  },
  "attention": {
    "degraded": true,
    "restart_required": 0,
    "plugin_rejected": 0,
    "status_failed": 0,
    "status_incomplete": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|integer|false|none|The version of dynamic configuration supported by the Netdata Agent.|
|tree|object|false|none|A map of configuration entity paths, each containing one or more configurable entities.|
|attention|[config_attention](#schemaconfig_attention)|false|none|none|

<h2 id="tocS_config_entity">config_entity</h2>
<!-- backwards compatibility -->
<a id="schemaconfig_entity"></a>
<a id="schema_config_entity"></a>
<a id="tocSconfig_entity"></a>
<a id="tocsconfig_entity"></a>

```json
{
  "type": "string",
  "status": "string",
  "cmds": [
    "string"
  ],
  "source_type": "string",
  "source": "string",
  "sync": true,
  "user_disabled": true,
  "restart_required": true,
  "plugin_rejected": true,
  "payload": {
    "available": true
  },
  "saves": 0,
  "created_ut": 0,
  "modified_ut": 0,
  "template": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Can be 'single' for entities appearing once, 'template' for entities supporting multiple instances, or 'job' for jobs belonging to a template.|
|status|string|false|none|The current status of the entity. Values include 'accepted', 'running', 'failed', 'disabled', 'incomplete', or 'orphan'.|
|cmds|[string]|false|none|An array of the possible actions supported by this entity.|
|source_type|string|false|none|The source type of the configuration (e.g., 'internal', 'stock', 'user', 'discovered', 'dyncfg').|
|source|string|false|none|Additional information about the source, formatted as comma-separated name-value pairs.|
|sync|boolean|false|none|Indicates if this is an internal module (true) or an external plugin (false).|
|user_disabled|boolean|false|none|True if the entity is disabled by the user.|
|restart_required|boolean|false|none|True if the entity requires a restart after addition or update.|
|plugin_rejected|boolean|false|none|True if a previously saved configuration failed to apply after a restart.|
|payload|object|false|none|Object containing at least an 'available' boolean indicating if there's a saved configuration for this entity.|
|saves|integer|false|none|The number of times this configuration has been saved to disk by the dynamic configuration manager.|
|created_ut|integer(int64)|false|none|The timestamp in microseconds when this dynamic configuration was first created.|
|modified_ut|integer(int64)|false|none|The timestamp in microseconds when this dynamic configuration was last modified.|
|template|string|false|none|Shows the template the job belongs to, applicable when type is 'job'.|

<h2 id="tocS_config_attention">config_attention</h2>
<!-- backwards compatibility -->
<a id="schemaconfig_attention"></a>
<a id="schema_config_attention"></a>
<a id="tocSconfig_attention"></a>
<a id="tocsconfig_attention"></a>

```json
{
  "degraded": true,
  "restart_required": 0,
  "plugin_rejected": 0,
  "status_failed": 0,
  "status_incomplete": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|degraded|boolean|false|none|none|
|restart_required|integer|false|none|none|
|plugin_rejected|integer|false|none|none|
|status_failed|integer|false|none|none|
|status_incomplete|integer|false|none|none|

<h2 id="tocS_config_default_response">config_default_response</h2>
<!-- backwards compatibility -->
<a id="schemaconfig_default_response"></a>
<a id="schema_config_default_response"></a>
<a id="tocSconfig_default_response"></a>
<a id="tocsconfig_default_response"></a>

```json
{
  "status": 0,
  "message": "string",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|The HTTP status code of the response.|
|message|string|false|none|A descriptive message about the response or the action taken.|
|data|object|false|none|The data payload of the response, contents vary depending on the specific request and action.|
