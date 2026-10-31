<h1 id="rumble-api-deprecated">Rumble API (deprecated) v2.15.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p><b><i>Rumble Network Discovery is now runZero. <a href="https://www.runzero.com/blog/introducing-runzero/">Read the announcement</a></i></b>.</p> <p>This API is frozen and no longer being updated as of version 2.15.0.</p> <p>See our latest API documentation at <a href="https://app.swaggerhub.com/apis-docs/runZero/runZero">swaggerhub.com/apis-docs/runZero/runZero</a>.</p>

Base URLs:

* <a href="https://console.rumble.run/api/v1.0">https://console.rumble.run/api/v1.0</a> - Rumble Console

Email: <a href="mailto:support@runzero.com">support@runzero.com</a> 
License: <a href="https://www.runzero.com/legal/terms">Commercial</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="rumble-api-deprecated-organization">Organization</h1>

Requires Organization Key

## Get organization details

<a id="opIdgetOrganization"></a>

> Code samples

```bash
curl https://example.com/org \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org`

> Example responses

> 200 Response

```json
{
  "asset_count": 100,
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "deactivated_at": 0,
  "description": "All subdivisions of my company",
  "download_token": "DT11226D9EEEA2B035D42569585900",
  "download_token_created_at": 1576300370,
  "expiration_assets_offline": 365,
  "expiration_assets_stale": 365,
  "expiration_scans": 365,
  "export_token": "ET11226D9EEEA2B035D42569585900",
  "export_token_counter": 0,
  "export_token_created_at": 1576300370,
  "export_token_last_used_at": 0,
  "export_token_last_used_by": "127.0.0.1",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "inactive": false,
  "name": "My Company",
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "permanent": true,
  "project": false,
  "service_count": 10,
  "service_count_arp": 1,
  "service_count_icmp": 1,
  "service_count_tcp": 7,
  "service_count_udp": 1,
  "updated_at": 1576300370
}
```

<h3 id="get-organization-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|organization details|[Organization](#schemaorganization)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update organization details

<a id="opIdupdateOrganization"></a>

> Code samples

```bash
curl https://example.com/org \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "Wobbly Widgets, Inc.",
    "expiration_assets_offline": "365",
    "expiration_assets_stale": "365",
    "expiration_scans": "365",
    "export_token": "ETXXXXXXXXXXXXXXXX",
    "name": "My Organization",
    "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "project": false
  }'
```

`PATCH /org`

> Body parameter

```json
{
  "description": "Wobbly Widgets, Inc.",
  "expiration_assets_offline": "365",
  "expiration_assets_stale": "365",
  "expiration_scans": "365",
  "export_token": "ETXXXXXXXXXXXXXXXX",
  "name": "My Organization",
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "project": false
}
```

<h3 id="update-organization-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OrgOptions](#schemaorgoptions)|true|organization options|
|» description|body|string|false|none|
|» expiration_assets_offline|body|string(number)|false|none|
|» expiration_assets_stale|body|string(number)|false|none|
|» expiration_scans|body|string(number)|false|none|
|» export_token|body|string|false|none|
|» name|body|string|false|none|
|» parent_id|body|string(uuid)|false|none|
|» project|body|string(boolean)|false|none|

> Example responses

> 200 Response

```json
{
  "asset_count": 100,
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "deactivated_at": 0,
  "description": "All subdivisions of my company",
  "download_token": "DT11226D9EEEA2B035D42569585900",
  "download_token_created_at": 1576300370,
  "expiration_assets_offline": 365,
  "expiration_assets_stale": 365,
  "expiration_scans": 365,
  "export_token": "ET11226D9EEEA2B035D42569585900",
  "export_token_counter": 0,
  "export_token_created_at": 1576300370,
  "export_token_last_used_at": 0,
  "export_token_last_used_by": "127.0.0.1",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "inactive": false,
  "name": "My Company",
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "permanent": true,
  "project": false,
  "service_count": 10,
  "service_count_arp": 1,
  "service_count_icmp": 1,
  "service_count_tcp": 7,
  "service_count_udp": 1,
  "updated_at": 1576300370
}
```

<h3 id="update-organization-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|organization details|[Organization](#schemaorganization)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all agents

<a id="opIdgetAgents"></a>

> Code samples

```bash
curl https://example.com/org/agents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/agents`

> Example responses

> 200 Response

```json
[
  {
    "arch": "amd64",
    "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "connected": true,
    "created_at": 1576300370,
    "deactivated_at": 0,
    "external_ip": "1.1.1.1",
    "host_id": "6f9e6fe52271da70962e007183c5c9c9",
    "hub_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "inactive": false,
    "internal_ip": "192.168.0.1",
    "last_checkin": 1576300370,
    "name": "RUMBLE-AGENT",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "os": "Windows",
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "system_info": {},
    "updated_at": 1576300370,
    "version": "1.2.3 (build 20191219224016) [fc50c5eefdc3ff5c60533c3c345d14d336396272]"
  }
]
```

<h3 id="get-all-agents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|array of agents|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="get-all-agents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Agent](#schemaagent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get details for a single agent

<a id="opIdgetAgent"></a>

> Code samples

```bash
curl https://example.com/org/agents/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/agents/{agent_id}`

<h3 id="get-details-for-a-single-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|string(uuid)|true|UUID of the agent|

> Example responses

> 200 Response

```json
{
  "arch": "amd64",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "connected": true,
  "created_at": 1576300370,
  "deactivated_at": 0,
  "external_ip": "1.1.1.1",
  "host_id": "6f9e6fe52271da70962e007183c5c9c9",
  "hub_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "inactive": false,
  "internal_ip": "192.168.0.1",
  "last_checkin": 1576300370,
  "name": "RUMBLE-AGENT",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "os": "Windows",
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "system_info": {},
  "updated_at": 1576300370,
  "version": "1.2.3 (build 20191219224016) [fc50c5eefdc3ff5c60533c3c345d14d336396272]"
}
```

<h3 id="get-details-for-a-single-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|agent details|[Agent](#schemaagent)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove and uninstall an agent

<a id="opIdremoveAgent"></a>

> Code samples

```bash
curl https://example.com/org/agents/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /org/agents/{agent_id}`

<h3 id="remove-and-uninstall-an-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|string(uuid)|true|UUID of the agent to remove|

<h3 id="remove-and-uninstall-an-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|empty response|None|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update the site associated with agent

<a id="opIdupdateAgentSite"></a>

> Code samples

```bash
curl https://example.com/org/agents/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"
  }'
```

`PATCH /org/agents/{agent_id}`

> Body parameter

```json
{
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"
}
```

<h3 id="update-the-site-associated-with-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|string(uuid)|true|UUID of the agent to update|
|body|body|[AgentSiteID](#schemaagentsiteid)|true|site_id to associate with the agent|
|» site_id|body|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "arch": "amd64",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "connected": true,
  "created_at": 1576300370,
  "deactivated_at": 0,
  "external_ip": "1.1.1.1",
  "host_id": "6f9e6fe52271da70962e007183c5c9c9",
  "hub_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "inactive": false,
  "internal_ip": "192.168.0.1",
  "last_checkin": 1576300370,
  "name": "RUMBLE-AGENT",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "os": "Windows",
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "system_info": {},
  "updated_at": 1576300370,
  "version": "1.2.3 (build 20191219224016) [fc50c5eefdc3ff5c60533c3c345d14d336396272]"
}
```

<h3 id="update-the-site-associated-with-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|agent details|[Agent](#schemaagent)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Force an agent to update and restart

<a id="opIdupgradeAgent"></a>

> Code samples

```bash
curl https://example.com/org/agents/497f6eca-6276-4993-bfeb-53cbbbba6f08/update \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /org/agents/{agent_id}/update`

<h3 id="force-an-agent-to-update-and-restart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|string(uuid)|true|UUID of the agent to update|

<h3 id="force-an-agent-to-update-and-restart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|empty response|None|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all assets

<a id="opIdgetAssets"></a>

> Code samples

```bash
curl https://example.com/org/assets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/assets`

<h3 id="get-all-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|

> Example responses

> 200 Response

```json
[
  {
    "addresses": [
      "192.168.0.1"
    ],
    "addresses_extra": [
      "192.168.100.1"
    ],
    "agent_name": "LAPTOP-F4P1R6",
    "alive": true,
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "comments": "File Server",
    "created_at": 1576300370,
    "credentials": {
      "property1": {
        "property1": true,
        "property2": true
      },
      "property2": {
        "property1": true,
        "property2": true
      }
    },
    "detected_by": "icmp",
    "domains": [
      "www"
    ],
    "first_seen": 1576300370,
    "hw": "Dell PowerEdge 2500",
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "last_seen": 1576300370,
    "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "lowest_rtt": 1,
    "lowest_ttl": 0,
    "mac_vendors": [
      "Dell"
    ],
    "macs": [
      "11:22:33:44:55:66"
    ],
    "names": [
      "www"
    ],
    "newest_mac": "11:22:33:44:55:66",
    "newest_mac_age": 1304035200000000000,
    "newest_mac_vendor": "Intel Corporate",
    "org_name": "Test Labs",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "os": "Ubuntu Linux",
    "os_version": 18.04,
    "rtts": {},
    "service_count": 10,
    "service_count_arp": 1,
    "service_count_icmp": 1,
    "service_count_tcp": 7,
    "service_count_udp": 1,
    "service_ports_products": [
      "bind"
    ],
    "service_ports_protocols": [
      "ssh"
    ],
    "service_ports_tcp": [
      22
    ],
    "service_ports_udp": [
      53
    ],
    "services": {
      "property1": {
        "property1": "string",
        "property2": "string"
      },
      "property2": {
        "property1": "string",
        "property2": "string"
      }
    },
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "site_name": "Primary",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "Server",
    "updated_at": 1576300370
  }
]
```

<h3 id="get-all-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|array of assets|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="get-all-assets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Asset](#schemaasset)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Clear all tags across multiple assets based on a search query

<a id="opIdclearBulkAssetTags"></a>

> Code samples

```bash
curl https://example.com/org/assets/bulk/clearTags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "search": "alive:true and os:windows"
  }'
```

`POST /org/assets/bulk/clearTags`

> Body parameter

```json
{
  "search": "alive:true and os:windows"
}
```

<h3 id="clear-all-tags-across-multiple-assets-based-on-a-search-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Search](#schemasearch)|true|search query to filter|
|» search|body|string|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="clear-all-tags-across-multiple-assets-based-on-a-search-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|status message|Inline|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update tags across multiple assets based on a search query

<a id="opIdupdateBulkAssetTags"></a>

> Code samples

```bash
curl https://example.com/org/assets/bulk/tags \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "search": "alive:true and os:windows",
    "tags": "ThisTag=Value -OldTag"
  }'
```

`PATCH /org/assets/bulk/tags`

> Body parameter

```json
{
  "search": "alive:true and os:windows",
  "tags": "ThisTag=Value -OldTag"
}
```

<h3 id="update-tags-across-multiple-assets-based-on-a-search-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AssetTagsWithSearch](#schemaassettagswithsearch)|true|search query to filter and tags to apply|
|» search|body|string|true|none|
|» tags|body|string|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="update-tags-across-multiple-assets-based-on-a-search-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|status message|Inline|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get asset details

<a id="opIdgetAsset"></a>

> Code samples

```bash
curl https://example.com/org/assets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/assets/{asset_id}`

<h3 id="get-asset-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|path|string(uuid)|true|UUID of the asset to retrieve|

> Example responses

> 200 Response

```json
{
  "addresses": [
    "192.168.0.1"
  ],
  "addresses_extra": [
    "192.168.100.1"
  ],
  "agent_name": "LAPTOP-F4P1R6",
  "alive": true,
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "comments": "File Server",
  "created_at": 1576300370,
  "credentials": {
    "property1": {
      "property1": true,
      "property2": true
    },
    "property2": {
      "property1": true,
      "property2": true
    }
  },
  "detected_by": "icmp",
  "domains": [
    "www"
  ],
  "first_seen": 1576300370,
  "hw": "Dell PowerEdge 2500",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_seen": 1576300370,
  "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "lowest_rtt": 1,
  "lowest_ttl": 0,
  "mac_vendors": [
    "Dell"
  ],
  "macs": [
    "11:22:33:44:55:66"
  ],
  "names": [
    "www"
  ],
  "newest_mac": "11:22:33:44:55:66",
  "newest_mac_age": 1304035200000000000,
  "newest_mac_vendor": "Intel Corporate",
  "org_name": "Test Labs",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "os": "Ubuntu Linux",
  "os_version": 18.04,
  "rtts": {},
  "service_count": 10,
  "service_count_arp": 1,
  "service_count_icmp": 1,
  "service_count_tcp": 7,
  "service_count_udp": 1,
  "service_ports_products": [
    "bind"
  ],
  "service_ports_protocols": [
    "ssh"
  ],
  "service_ports_tcp": [
    22
  ],
  "service_ports_udp": [
    53
  ],
  "services": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "site_name": "Primary",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "Server",
  "updated_at": 1576300370
}
```

<h3 id="get-asset-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|asset details|[Asset](#schemaasset)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an asset

<a id="opIdremoveAsset"></a>

> Code samples

```bash
curl https://example.com/org/assets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /org/assets/{asset_id}`

<h3 id="remove-an-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|path|string(uuid)|true|UUID of the asset to remove|

<h3 id="remove-an-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|empty response|None|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update asset comments

<a id="opIdupdateAssetComments"></a>

> Code samples

```bash
curl https://example.com/org/assets/497f6eca-6276-4993-bfeb-53cbbbba6f08/comments \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comments": "Sales Laptop"
  }'
```

`PATCH /org/assets/{asset_id}/comments`

> Body parameter

```json
{
  "comments": "Sales Laptop"
}
```

<h3 id="update-asset-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|path|string(uuid)|true|UUID of the asset to update|
|body|body|[AssetComments](#schemaassetcomments)|true|comments to apply to the asset|
|» comments|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "addresses": [
    "192.168.0.1"
  ],
  "addresses_extra": [
    "192.168.100.1"
  ],
  "agent_name": "LAPTOP-F4P1R6",
  "alive": true,
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "comments": "File Server",
  "created_at": 1576300370,
  "credentials": {
    "property1": {
      "property1": true,
      "property2": true
    },
    "property2": {
      "property1": true,
      "property2": true
    }
  },
  "detected_by": "icmp",
  "domains": [
    "www"
  ],
  "first_seen": 1576300370,
  "hw": "Dell PowerEdge 2500",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_seen": 1576300370,
  "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "lowest_rtt": 1,
  "lowest_ttl": 0,
  "mac_vendors": [
    "Dell"
  ],
  "macs": [
    "11:22:33:44:55:66"
  ],
  "names": [
    "www"
  ],
  "newest_mac": "11:22:33:44:55:66",
  "newest_mac_age": 1304035200000000000,
  "newest_mac_vendor": "Intel Corporate",
  "org_name": "Test Labs",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "os": "Ubuntu Linux",
  "os_version": 18.04,
  "rtts": {},
  "service_count": 10,
  "service_count_arp": 1,
  "service_count_icmp": 1,
  "service_count_tcp": 7,
  "service_count_udp": 1,
  "service_ports_products": [
    "bind"
  ],
  "service_ports_protocols": [
    "ssh"
  ],
  "service_ports_tcp": [
    22
  ],
  "service_ports_udp": [
    53
  ],
  "services": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "site_name": "Primary",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "Server",
  "updated_at": 1576300370
}
```

<h3 id="update-asset-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|asset details|[Asset](#schemaasset)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update asset tags

<a id="opIdupdateAssetTags"></a>

> Code samples

```bash
curl https://example.com/org/assets/497f6eca-6276-4993-bfeb-53cbbbba6f08/tags \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tags": "ThisTag=Value -OldTag"
  }'
```

`PATCH /org/assets/{asset_id}/tags`

> Body parameter

```json
{
  "tags": "ThisTag=Value -OldTag"
}
```

<h3 id="update-asset-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|path|string(uuid)|true|UUID of the asset to update|
|body|body|[AssetTags](#schemaassettags)|true|tags to apply to the asset|
|» tags|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "addresses": [
    "192.168.0.1"
  ],
  "addresses_extra": [
    "192.168.100.1"
  ],
  "agent_name": "LAPTOP-F4P1R6",
  "alive": true,
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "comments": "File Server",
  "created_at": 1576300370,
  "credentials": {
    "property1": {
      "property1": true,
      "property2": true
    },
    "property2": {
      "property1": true,
      "property2": true
    }
  },
  "detected_by": "icmp",
  "domains": [
    "www"
  ],
  "first_seen": 1576300370,
  "hw": "Dell PowerEdge 2500",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_seen": 1576300370,
  "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "lowest_rtt": 1,
  "lowest_ttl": 0,
  "mac_vendors": [
    "Dell"
  ],
  "macs": [
    "11:22:33:44:55:66"
  ],
  "names": [
    "www"
  ],
  "newest_mac": "11:22:33:44:55:66",
  "newest_mac_age": 1304035200000000000,
  "newest_mac_vendor": "Intel Corporate",
  "org_name": "Test Labs",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "os": "Ubuntu Linux",
  "os_version": 18.04,
  "rtts": {},
  "service_count": 10,
  "service_count_arp": 1,
  "service_count_icmp": 1,
  "service_count_tcp": 7,
  "service_count_udp": 1,
  "service_ports_products": [
    "bind"
  ],
  "service_ports_protocols": [
    "ssh"
  ],
  "service_ports_tcp": [
    22
  ],
  "service_ports_udp": [
    53
  ],
  "services": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "site_name": "Primary",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "Server",
  "updated_at": 1576300370
}
```

<h3 id="update-asset-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|asset details|[Asset](#schemaasset)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get API key details

<a id="opIdgetKey"></a>

> Code samples

```bash
curl https://example.com/org/key \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/key`

> Example responses

> 200 Response

```json
{
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "comment": "API key used for Splunk integration",
  "counter": 1,
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "inactive": "tue",
  "last_used_at": 0,
  "last_used_ip": "127.0.0.1",
  "last_used_ua": "curl/7.44.1",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "token": "CTXXXXXXXXXXXXX",
  "type": "org",
  "usage_limit": 10000,
  "usage_today": 100
}
```

<h3 id="get-api-key-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|api key details|[APIKey](#schemaapikey)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove the current API key

<a id="opIdremoveKey"></a>

> Code samples

```bash
curl https://example.com/org/key \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /org/key`

<h3 id="remove-the-current-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|empty response|None|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Rotate the API key secret and return the updated key

<a id="opIdrotateKey"></a>

> Code samples

```bash
curl https://example.com/org/key/rotate \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /org/key/rotate`

> Example responses

> 200 Response

```json
{
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "comment": "API key used for Splunk integration",
  "counter": 1,
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "inactive": "tue",
  "last_used_at": 0,
  "last_used_ip": "127.0.0.1",
  "last_used_ua": "curl/7.44.1",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "token": "CTXXXXXXXXXXXXX",
  "type": "org",
  "usage_limit": 10000,
  "usage_today": 100
}
```

<h3 id="rotate-the-api-key-secret-and-return-the-updated-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|api key details|[APIKey](#schemaapikey)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all services

<a id="opIdgetServices"></a>

> Code samples

```bash
curl https://example.com/org/services \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/services`

<h3 id="get-all-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|

> Example responses

> 200 Response

```json
[
  {
    "addresses": [
      "192.168.0.1"
    ],
    "addresses_extra": [
      "192.168.100.1"
    ],
    "agent_name": "LAPTOP-F4P1R6",
    "alive": true,
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "comments": "File Server",
    "created_at": 1576300370,
    "credentials": {
      "property1": {
        "property1": true,
        "property2": true
      },
      "property2": {
        "property1": true,
        "property2": true
      }
    },
    "detected_by": "icmp",
    "domains": [
      "CORPNET"
    ],
    "first_seen": 1576300370,
    "hw": "Dell PowerEdge 2500",
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "last_seen": 1576300370,
    "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "lowest_rtt": 1,
    "lowest_ttl": 0,
    "mac_vendors": [
      "Dell"
    ],
    "macs": [
      "11:22:33:44:55:66"
    ],
    "names": [
      "www"
    ],
    "newest_mac": "11:22:33:44:55:66",
    "newest_mac_age": 1304035200000000000,
    "newest_mac_vendor": "Intel Corporate",
    "org_name": "Test Labs",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "os": "Ubuntu Linux",
    "os_version": 18.04,
    "rtts": {},
    "service_address": "192.168.0.1",
    "service_asset_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "service_count": 10,
    "service_count_arp": 1,
    "service_count_icmp": 1,
    "service_count_tcp": 7,
    "service_count_udp": 1,
    "service_created_at": 1576300370,
    "service_data": {
      "property1": "string",
      "property2": "string"
    },
    "service_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "service_link": "http://192.168.0.1:80/",
    "service_port": 80,
    "service_ports_products": [
      "bind"
    ],
    "service_ports_protocols": [
      "ssh"
    ],
    "service_ports_tcp": [
      22
    ],
    "service_ports_udp": [
      53
    ],
    "service_protocol": "http tls",
    "service_screenshot_link": "string",
    "service_summary": "Login Page",
    "service_transport": "tcp",
    "service_updated_at": 1576300370,
    "service_vhost": "www",
    "services": {
      "property1": {
        "property1": "string",
        "property2": "string"
      },
      "property2": {
        "property1": "string",
        "property2": "string"
      }
    },
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "site_name": "Primary",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "Server",
    "updated_at": 1576300370
  }
]
```

<h3 id="get-all-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|array of services|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="get-all-services-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Service](#schemaservice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get service details

<a id="opIdgetService"></a>

> Code samples

```bash
curl https://example.com/org/services/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/services/{service_id}`

<h3 id="get-service-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id|path|string(uuid)|true|UUID of the service to retrieve|

> Example responses

> 200 Response

```json
{
  "addresses": [
    "192.168.0.1"
  ],
  "addresses_extra": [
    "192.168.100.1"
  ],
  "agent_name": "LAPTOP-F4P1R6",
  "alive": true,
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "comments": "File Server",
  "created_at": 1576300370,
  "credentials": {
    "property1": {
      "property1": true,
      "property2": true
    },
    "property2": {
      "property1": true,
      "property2": true
    }
  },
  "detected_by": "icmp",
  "domains": [
    "CORPNET"
  ],
  "first_seen": 1576300370,
  "hw": "Dell PowerEdge 2500",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_seen": 1576300370,
  "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "lowest_rtt": 1,
  "lowest_ttl": 0,
  "mac_vendors": [
    "Dell"
  ],
  "macs": [
    "11:22:33:44:55:66"
  ],
  "names": [
    "www"
  ],
  "newest_mac": "11:22:33:44:55:66",
  "newest_mac_age": 1304035200000000000,
  "newest_mac_vendor": "Intel Corporate",
  "org_name": "Test Labs",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "os": "Ubuntu Linux",
  "os_version": 18.04,
  "rtts": {},
  "service_address": "192.168.0.1",
  "service_asset_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "service_count": 10,
  "service_count_arp": 1,
  "service_count_icmp": 1,
  "service_count_tcp": 7,
  "service_count_udp": 1,
  "service_created_at": 1576300370,
  "service_data": {
    "property1": "string",
    "property2": "string"
  },
  "service_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "service_link": "http://192.168.0.1:80/",
  "service_port": 80,
  "service_ports_products": [
    "bind"
  ],
  "service_ports_protocols": [
    "ssh"
  ],
  "service_ports_tcp": [
    22
  ],
  "service_ports_udp": [
    53
  ],
  "service_protocol": "http tls",
  "service_screenshot_link": "string",
  "service_summary": "Login Page",
  "service_transport": "tcp",
  "service_updated_at": 1576300370,
  "service_vhost": "www",
  "services": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "site_name": "Primary",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "Server",
  "updated_at": 1576300370
}
```

<h3 id="get-service-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|service details|[Service](#schemaservice)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove a service

<a id="opIdremoveService"></a>

> Code samples

```bash
curl https://example.com/org/services/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /org/services/{service_id}`

<h3 id="remove-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id|path|string(uuid)|true|UUID of the service to remove|

<h3 id="remove-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|empty response|None|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all sites

<a id="opIdgetSites"></a>

> Code samples

```bash
curl https://example.com/org/sites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/sites`

> Example responses

> 200 Response

```json
[
  {
    "created_at": 1576300370,
    "description": "Headquarters",
    "excludes": "192.168.0.5",
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "name": "Primary",
    "permanent": true,
    "scope": "192.168.0.0/24",
    "subnets": {},
    "updated_at": 1576300370
  }
]
```

<h3 id="get-all-sites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|array of sites|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="get-all-sites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Site](#schemasite)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new site

<a id="opIdcreateSite"></a>

> Code samples

```bash
curl https://example.com/org/sites \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "County Office",
    "excludes": "192.168.10.1",
    "name": "New Site",
    "scope": "192.168.10.0/24"
  }'
```

`PUT /org/sites`

> Body parameter

```json
{
  "description": "County Office",
  "excludes": "192.168.10.1",
  "name": "New Site",
  "scope": "192.168.10.0/24"
}
```

<h3 id="create-a-new-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SiteOptions](#schemasiteoptions)|true|site definition|
|» description|body|string|false|none|
|» excludes|body|string|false|none|
|» name|body|string|true|none|
|» scope|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_at": 1576300370,
  "description": "Headquarters",
  "excludes": "192.168.0.5",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "Primary",
  "permanent": true,
  "scope": "192.168.0.0/24",
  "subnets": {},
  "updated_at": 1576300370
}
```

<h3 id="create-a-new-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|site details|[Site](#schemasite)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get site details

<a id="opIdgetSite"></a>

> Code samples

```bash
curl https://example.com/org/sites/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/sites/{site_id}`

<h3 id="get-site-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string(uuid)|true|UUID or name of the site|

> Example responses

> 200 Response

```json
{
  "created_at": 1576300370,
  "description": "Headquarters",
  "excludes": "192.168.0.5",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "Primary",
  "permanent": true,
  "scope": "192.168.0.0/24",
  "subnets": {},
  "updated_at": 1576300370
}
```

<h3 id="get-site-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|site details|[Site](#schemasite)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove a site and associated assets

<a id="opIdremoveSite"></a>

> Code samples

```bash
curl https://example.com/org/sites/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /org/sites/{site_id}`

<h3 id="remove-a-site-and-associated-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string(uuid)|true|UUID or name of the site to remove|

<h3 id="remove-a-site-and-associated-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|empty response|None|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a site definition

<a id="opIdupdateSite"></a>

> Code samples

```bash
curl https://example.com/org/sites/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "County Office",
    "excludes": "192.168.10.1",
    "name": "New Site",
    "scope": "192.168.10.0/24"
  }'
```

`PATCH /org/sites/{site_id}`

> Body parameter

```json
{
  "description": "County Office",
  "excludes": "192.168.10.1",
  "name": "New Site",
  "scope": "192.168.10.0/24"
}
```

<h3 id="update-a-site-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string(uuid)|true|UUID or name of the site to update|
|body|body|[SiteOptions](#schemasiteoptions)|true|site object|
|» description|body|string|false|none|
|» excludes|body|string|false|none|
|» name|body|string|true|none|
|» scope|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "created_at": 1576300370,
  "description": "Headquarters",
  "excludes": "192.168.0.5",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "Primary",
  "permanent": true,
  "scope": "192.168.0.0/24",
  "subnets": {},
  "updated_at": 1576300370
}
```

<h3 id="update-a-site-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|site details|[Site](#schemasite)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Import a scan data file into a site

<a id="opIdimportScanData"></a>

> Code samples

```bash
curl https://example.com/org/sites/497f6eca-6276-4993-bfeb-53cbbbba6f08/import \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  --data-binary '@/path/to/file'
```

`PUT /org/sites/{site_id}/import`

<h3 id="import-a-scan-data-file-into-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string(uuid)|true|UUID or name of the site to import scan data into|
|body|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
{
  "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "description": "Scan the headquarters hourly",
  "error": "agent unavailable",
  "hidden": false,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "Hourly Scan",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur": false,
  "recur_frequency": "hour",
  "recur_last": 1576300370,
  "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur_next": 1576300370,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "start_time": 1576300370,
  "stats": {},
  "status": "processed",
  "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "type": "scan",
  "updated_at": 1576300370
}
```

<h3 id="import-a-scan-data-file-into-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|import task|[Task](#schematask)|
|401|Unauthorized|Access token is missing or invalid|None|
|403|Forbidden|License has expired|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Request could not be processed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Import a Nessus scan data file into a site

<a id="opIdimportNessusScanData"></a>

> Code samples

```bash
curl https://example.com/org/sites/497f6eca-6276-4993-bfeb-53cbbbba6f08/import/nessus \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  --data-binary '@/path/to/file'
```

`PUT /org/sites/{site_id}/import/nessus`

<h3 id="import-a-nessus-scan-data-file-into-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string(uuid)|true|UUID or name of the site to import Nessus scan data into|
|body|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
{
  "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "description": "Scan the headquarters hourly",
  "error": "agent unavailable",
  "hidden": false,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "Hourly Scan",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur": false,
  "recur_frequency": "hour",
  "recur_last": 1576300370,
  "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur_next": 1576300370,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "start_time": 1576300370,
  "stats": {},
  "status": "processed",
  "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "type": "scan",
  "updated_at": 1576300370
}
```

<h3 id="import-a-nessus-scan-data-file-into-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|import task|[Task](#schematask)|
|401|Unauthorized|Access token is missing or invalid|None|
|403|Forbidden|License has expired|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Request could not be processed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a scan task for a given site

<a id="opIdcreateScan"></a>

> Code samples

```bash
curl https://example.com/org/sites/497f6eca-6276-4993-bfeb-53cbbbba6f08/scan \
  -X PUT \
  -H 'Content-Type: text/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"agent":"e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8","excludes":"string","host-ping":"false","max-attempts":"3","max-group-size":"4096","max-host-rate":"100","max-sockets":"500","max-ttl":"255","nameservers":"8.8.8.8","passes":"3","probes":"arp,bacnet,connect,dns,echo,ike,ipmi,mdns,memcache,mssql,natpmp,netbios,pca,rdns,rpcbind,sip,snmp,ssdp,syn,ubnt,wlan-list,wsd","rate":"10000","scan-description":"Scan of Wireless","scan-frequency":"once","scan-grace-period":"4","scan-name":"My Scan","scan-start":"0","scan-tags":"owner=IT location=Texas","screenshots":"true","subnet-ping":"true","subnet-ping-net-size":"256","subnet-ping-sample-rate":"3","targets":"defaults","tcp-excludes":"9500","tcp-ports":"1-1000,5000-6000"}'
```

`PUT /org/sites/{site_id}/scan`

> Body parameter

```json
{
  "agent": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "excludes": "string",
  "host-ping": "false",
  "max-attempts": "3",
  "max-group-size": "4096",
  "max-host-rate": "100",
  "max-sockets": "500",
  "max-ttl": "255",
  "nameservers": "8.8.8.8",
  "passes": "3",
  "probes": "arp,bacnet,connect,dns,echo,ike,ipmi,mdns,memcache,mssql,natpmp,netbios,pca,rdns,rpcbind,sip,snmp,ssdp,syn,ubnt,wlan-list,wsd",
  "rate": "10000",
  "scan-description": "Scan of Wireless",
  "scan-frequency": "once",
  "scan-grace-period": "4",
  "scan-name": "My Scan",
  "scan-start": "0",
  "scan-tags": "owner=IT location=Texas",
  "screenshots": "true",
  "subnet-ping": "true",
  "subnet-ping-net-size": "256",
  "subnet-ping-sample-rate": "3",
  "targets": "defaults",
  "tcp-excludes": "9500",
  "tcp-ports": "1-1000,5000-6000"
}
```

<h3 id="create-a-scan-task-for-a-given-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string(uuid)|true|UUID or name of the site to scan|
|body|body|[ScanOptions](#schemascanoptions)|false|none|
|» agent|body|string(uuid)|false|none|
|» excludes|body|string|false|none|
|» host-ping|body|string|false|none|
|» max-attempts|body|string|false|none|
|» max-group-size|body|string|false|none|
|» max-host-rate|body|string|false|none|
|» max-sockets|body|string|false|none|
|» max-ttl|body|string|false|none|
|» nameservers|body|string|false|none|
|» passes|body|string|false|none|
|» probes|body|string|false|Optional probe list, otherwise all probes are used|
|» rate|body|string|false|none|
|» scan-description|body|string|false|none|
|» scan-frequency|body|string|false|none|
|» scan-grace-period|body|string|false|none|
|» scan-name|body|string|false|none|
|» scan-start|body|string(unixtime)|false|none|
|» scan-tags|body|string|false|none|
|» screenshots|body|string|false|none|
|» subnet-ping|body|string|false|none|
|» subnet-ping-net-size|body|string|false|none|
|» subnet-ping-sample-rate|body|string|false|none|
|» targets|body|string|true|none|
|» tcp-excludes|body|string|false|none|
|» tcp-ports|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scan-frequency|once|
|» scan-frequency|hourly|
|» scan-frequency|daily|
|» scan-frequency|weekly|
|» scan-frequency|monthly|
|» scan-frequency|continuous|

> Example responses

> 200 Response

```json
{
  "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "description": "Scan the headquarters hourly",
  "error": "agent unavailable",
  "hidden": false,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "Hourly Scan",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur": false,
  "recur_frequency": "hour",
  "recur_last": 1576300370,
  "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur_next": 1576300370,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "start_time": 1576300370,
  "stats": {},
  "status": "processed",
  "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "type": "scan",
  "updated_at": 1576300370
}
```

<h3 id="create-a-scan-task-for-a-given-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|a created scan task|[Task](#schematask)|
|401|Unauthorized|Access token is missing or invalid|None|
|403|Forbidden|License has expired|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Request could not be processed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all tasks (last 1000)

<a id="opIdgetTasks"></a>

> Code samples

```bash
curl https://example.com/org/tasks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/tasks`

<h3 id="get-all-tasks-last-1000-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|an optional status string for filtering results|
|search|query|string|false|an optional search string for filtering results|

> Example responses

> 200 Response

```json
[
  {
    "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "created_at": 1576300370,
    "created_by": "user@example.com",
    "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "description": "Scan the headquarters hourly",
    "error": "agent unavailable",
    "hidden": false,
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "name": "Hourly Scan",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "recur": false,
    "recur_frequency": "hour",
    "recur_last": 1576300370,
    "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "recur_next": 1576300370,
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "start_time": 1576300370,
    "stats": {},
    "status": "processed",
    "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "type": "scan",
    "updated_at": 1576300370
  }
]
```

<h3 id="get-all-tasks-last-1000-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|array of tasks|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="get-all-tasks-last-1000-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Task](#schematask)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get task details

<a id="opIdgetTask"></a>

> Code samples

```bash
curl https://example.com/org/tasks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/tasks/{task_id}`

<h3 id="get-task-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|task_id|path|string(uuid)|true|UUID of the task to retrieve|

> Example responses

> 200 Response

```json
{
  "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "description": "Scan the headquarters hourly",
  "error": "agent unavailable",
  "hidden": false,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "Hourly Scan",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur": false,
  "recur_frequency": "hour",
  "recur_last": 1576300370,
  "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur_next": 1576300370,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "start_time": 1576300370,
  "stats": {},
  "status": "processed",
  "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "type": "scan",
  "updated_at": 1576300370
}
```

<h3 id="get-task-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|task details|[Task](#schematask)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update task parameters

<a id="opIdupdateTask"></a>

> Code samples

```bash
curl https://example.com/org/tasks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "created_at": 1576300370,
    "created_by": "user@example.com",
    "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "description": "Scan the headquarters hourly",
    "error": "agent unavailable",
    "hidden": false,
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "name": "Hourly Scan",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "recur": false,
    "recur_frequency": "hour",
    "recur_last": 1576300370,
    "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "recur_next": 1576300370,
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "start_time": 1576300370,
    "stats": {},
    "status": "processed",
    "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "type": "scan",
    "updated_at": 1576300370
  }'
```

`PATCH /org/tasks/{task_id}`

> Body parameter

```json
{
  "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "description": "Scan the headquarters hourly",
  "error": "agent unavailable",
  "hidden": false,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "Hourly Scan",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur": false,
  "recur_frequency": "hour",
  "recur_last": 1576300370,
  "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur_next": 1576300370,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "start_time": 1576300370,
  "stats": {},
  "status": "processed",
  "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "type": "scan",
  "updated_at": 1576300370
}
```

<h3 id="update-task-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|task_id|path|string(uuid)|true|UUID of the task to update|
|body|body|[Task](#schematask)|true|task object|
|» agent_id|body|string(uuid)|false|none|
|» client_id|body|string(uuid)|false|none|
|» created_at|body|integer(int64)|false|none|
|» created_by|body|string(email)|false|none|
|» created_by_user_id|body|string(uuid)|false|none|
|» cruncher_id|body|string(uuid)|false|none|
|» description|body|string|false|none|
|» error|body|string|false|none|
|» hidden|body|boolean|false|none|
|» id|body|string(uuid)|true|none|
|» name|body|string|false|none|
|» organization_id|body|string(uuid)|false|none|
|» params|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» parent_id|body|string(uuid)|false|none|
|» recur|body|boolean|false|none|
|» recur_frequency|body|string|false|none|
|» recur_last|body|integer(int64)|false|none|
|» recur_last_task_id|body|string(uuid)|false|none|
|» recur_next|body|integer(int64)|false|none|
|» site_id|body|string(uuid)|false|none|
|» start_time|body|integer(int64)|false|none|
|» stats|body|object|false|none|
|» status|body|string|false|none|
|» template_id|body|string(uuid)|false|none|
|» type|body|string|false|none|
|» updated_at|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "description": "Scan the headquarters hourly",
  "error": "agent unavailable",
  "hidden": false,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "Hourly Scan",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur": false,
  "recur_frequency": "hour",
  "recur_last": 1576300370,
  "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur_next": 1576300370,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "start_time": 1576300370,
  "stats": {},
  "status": "processed",
  "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "type": "scan",
  "updated_at": 1576300370
}
```

<h3 id="update-task-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|task details|[Task](#schematask)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Returns a temporary task change report data url

<a id="opIdgetTaskChangeReport"></a>

> Code samples

```bash
curl https://example.com/org/tasks/497f6eca-6276-4993-bfeb-53cbbbba6f08/changes \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/tasks/{task_id}/changes`

<h3 id="returns-a-temporary-task-change-report-data-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|task_id|path|string(uuid)|true|UUID of the task|

<h3 id="returns-a-temporary-task-change-report-data-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[URL](#schemaurl)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Returns a temporary task scan data url

<a id="opIdgetTaskScanData"></a>

> Code samples

```bash
curl https://example.com/org/tasks/497f6eca-6276-4993-bfeb-53cbbbba6f08/data \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/tasks/{task_id}/data`

<h3 id="returns-a-temporary-task-scan-data-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|task_id|path|string(uuid)|true|UUID of the task|

<h3 id="returns-a-temporary-task-scan-data-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[URL](#schemaurl)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Signal that a completed task should be hidden

<a id="opIdhideTask"></a>

> Code samples

```bash
curl https://example.com/org/tasks/497f6eca-6276-4993-bfeb-53cbbbba6f08/hide \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /org/tasks/{task_id}/hide`

<h3 id="signal-that-a-completed-task-should-be-hidden-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|task_id|path|string(uuid)|true|UUID of the task to hide|

<h3 id="signal-that-a-completed-task-should-be-hidden-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[Task](#schematask)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Returns a temporary task log data url

<a id="opIdgetTaskLog"></a>

> Code samples

```bash
curl https://example.com/org/tasks/497f6eca-6276-4993-bfeb-53cbbbba6f08/log \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/tasks/{task_id}/log`

<h3 id="returns-a-temporary-task-log-data-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|task_id|path|string(uuid)|true|UUID of the task|

<h3 id="returns-a-temporary-task-log-data-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[URL](#schemaurl)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks

<a id="opIdstopTask"></a>

> Code samples

```bash
curl https://example.com/org/tasks/497f6eca-6276-4993-bfeb-53cbbbba6f08/stop \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /org/tasks/{task_id}/stop`

<h3 id="signal-that-a-task-should-be-stopped-or-canceledthis-will-also-remove-recurring-and-scheduled-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|task_id|path|string(uuid)|true|UUID of the task to stop|

<h3 id="signal-that-a-task-should-be-stopped-or-canceledthis-will-also-remove-recurring-and-scheduled-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[Task](#schematask)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all wireless LANs

<a id="opIdgetWirelessLANs"></a>

> Code samples

```bash
curl https://example.com/org/wireless \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/wireless`

<h3 id="get-all-wireless-lans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|

> Example responses

> 200 Response

```json
[
  {
    "agent_name": "LAPTOP-F4P1R6",
    "authentication": "wpa2-psk",
    "bssid": "11:22:33:44:55:66",
    "channels": "11, 158+1",
    "created_at": 1576300370,
    "data": {
      "property1": "string",
      "property2": "string"
    },
    "encryption": "aes",
    "essid": "Free WiFi",
    "family": 223344,
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "interface": "wlan0",
    "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "last_seen": 1576300370,
    "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "org_name": "Test Labs",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "signal": 99,
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "site_name": "Primary",
    "type": "infrastructure",
    "vendor": "Ubiquiti Networks"
  }
]
```

<h3 id="get-all-wireless-lans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|array of wireless LANs|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="get-all-wireless-lans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Wireless](#schemawireless)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get wireless LAN details

<a id="opIdgetWirelessLAN"></a>

> Code samples

```bash
curl https://example.com/org/wireless/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/wireless/{wireless_id}`

<h3 id="get-wireless-lan-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wireless_id|path|string(uuid)|true|UUID of the wireless LAN to retrieve|

> Example responses

> 200 Response

```json
{
  "agent_name": "LAPTOP-F4P1R6",
  "authentication": "wpa2-psk",
  "bssid": "11:22:33:44:55:66",
  "channels": "11, 158+1",
  "created_at": 1576300370,
  "data": {
    "property1": "string",
    "property2": "string"
  },
  "encryption": "aes",
  "essid": "Free WiFi",
  "family": 223344,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "interface": "wlan0",
  "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_seen": 1576300370,
  "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "org_name": "Test Labs",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "signal": 99,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "site_name": "Primary",
  "type": "infrastructure",
  "vendor": "Ubiquiti Networks"
}
```

<h3 id="get-wireless-lan-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|wireless details|[Wireless](#schemawireless)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove a wireless LAN

<a id="opIdremoveWirelessLAN"></a>

> Code samples

```bash
curl https://example.com/org/wireless/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /org/wireless/{wireless_id}`

<h3 id="remove-a-wireless-lan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wireless_id|path|string(uuid)|true|UUID of the wireless LAN to remove|

<h3 id="remove-a-wireless-lan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|empty response|None|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="rumble-api-deprecated-export">Export</h1>

Requires Export Token or Organization Key

## Asset inventory as CSV

<a id="opIdexportAssetsCSV"></a>

> Code samples

```bash
curl https://example.com/export/org/assets.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/assets.csv`

<h3 id="asset-inventory-as-csv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|

<h3 id="asset-inventory-as-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered asset results|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Exports the asset inventory

<a id="opIdexportAssetsJSON"></a>

> Code samples

```bash
curl https://example.com/export/org/assets.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/assets.json`

<h3 id="exports-the-asset-inventory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|
|fields|query|string|false|an optional list of fields to export, comma-separated|

> Example responses

> 200 Response

```json
[
  {
    "addresses": [
      "192.168.0.1"
    ],
    "addresses_extra": [
      "192.168.100.1"
    ],
    "agent_name": "LAPTOP-F4P1R6",
    "alive": true,
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "comments": "File Server",
    "created_at": 1576300370,
    "credentials": {
      "property1": {
        "property1": true,
        "property2": true
      },
      "property2": {
        "property1": true,
        "property2": true
      }
    },
    "detected_by": "icmp",
    "domains": [
      "www"
    ],
    "first_seen": 1576300370,
    "hw": "Dell PowerEdge 2500",
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "last_seen": 1576300370,
    "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "lowest_rtt": 1,
    "lowest_ttl": 0,
    "mac_vendors": [
      "Dell"
    ],
    "macs": [
      "11:22:33:44:55:66"
    ],
    "names": [
      "www"
    ],
    "newest_mac": "11:22:33:44:55:66",
    "newest_mac_age": 1304035200000000000,
    "newest_mac_vendor": "Intel Corporate",
    "org_name": "Test Labs",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "os": "Ubuntu Linux",
    "os_version": 18.04,
    "rtts": {},
    "service_count": 10,
    "service_count_arp": 1,
    "service_count_icmp": 1,
    "service_count_tcp": 7,
    "service_count_udp": 1,
    "service_ports_products": [
      "bind"
    ],
    "service_ports_protocols": [
      "ssh"
    ],
    "service_ports_tcp": [
      22
    ],
    "service_ports_udp": [
      53
    ],
    "services": {
      "property1": {
        "property1": "string",
        "property2": "string"
      },
      "property2": {
        "property1": "string",
        "property2": "string"
      }
    },
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "site_name": "Primary",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "Server",
    "updated_at": 1576300370
  }
]
```

<h3 id="exports-the-asset-inventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered asset results|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="exports-the-asset-inventory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Asset](#schemaasset)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Asset inventory as JSON line-delimited

<a id="opIdexportAssetsJSONL"></a>

> Code samples

```bash
curl https://example.com/export/org/assets.jsonl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/assets.jsonl`

<h3 id="asset-inventory-as-json-line-delimited-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|
|fields|query|string|false|an optional list of fields to export, comma-separated|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="asset-inventory-as-json-line-delimited-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered asset results|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Asset inventory as Nmap-style XML

<a id="opIdexportAssetsNmapXML"></a>

> Code samples

```bash
curl https://example.com/export/org/assets.nmap.xml \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/assets.nmap.xml`

<h3 id="asset-inventory-as-nmap-style-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|

<h3 id="asset-inventory-as-nmap-style-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered asset results|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Service inventory as CSV

<a id="opIdexportServicesCSV"></a>

> Code samples

```bash
curl https://example.com/export/org/services.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/services.csv`

<h3 id="service-inventory-as-csv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|

<h3 id="service-inventory-as-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered service results|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Service inventory as JSON

<a id="opIdexportServicesJSON"></a>

> Code samples

```bash
curl https://example.com/export/org/services.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/services.json`

<h3 id="service-inventory-as-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|
|fields|query|string|false|an optional list of fields to export, comma-separated|

> Example responses

> 200 Response

```json
[
  {
    "addresses": [
      "192.168.0.1"
    ],
    "addresses_extra": [
      "192.168.100.1"
    ],
    "agent_name": "LAPTOP-F4P1R6",
    "alive": true,
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "comments": "File Server",
    "created_at": 1576300370,
    "credentials": {
      "property1": {
        "property1": true,
        "property2": true
      },
      "property2": {
        "property1": true,
        "property2": true
      }
    },
    "detected_by": "icmp",
    "domains": [
      "CORPNET"
    ],
    "first_seen": 1576300370,
    "hw": "Dell PowerEdge 2500",
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "last_seen": 1576300370,
    "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "lowest_rtt": 1,
    "lowest_ttl": 0,
    "mac_vendors": [
      "Dell"
    ],
    "macs": [
      "11:22:33:44:55:66"
    ],
    "names": [
      "www"
    ],
    "newest_mac": "11:22:33:44:55:66",
    "newest_mac_age": 1304035200000000000,
    "newest_mac_vendor": "Intel Corporate",
    "org_name": "Test Labs",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "os": "Ubuntu Linux",
    "os_version": 18.04,
    "rtts": {},
    "service_address": "192.168.0.1",
    "service_asset_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "service_count": 10,
    "service_count_arp": 1,
    "service_count_icmp": 1,
    "service_count_tcp": 7,
    "service_count_udp": 1,
    "service_created_at": 1576300370,
    "service_data": {
      "property1": "string",
      "property2": "string"
    },
    "service_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "service_link": "http://192.168.0.1:80/",
    "service_port": 80,
    "service_ports_products": [
      "bind"
    ],
    "service_ports_protocols": [
      "ssh"
    ],
    "service_ports_tcp": [
      22
    ],
    "service_ports_udp": [
      53
    ],
    "service_protocol": "http tls",
    "service_screenshot_link": "string",
    "service_summary": "Login Page",
    "service_transport": "tcp",
    "service_updated_at": 1576300370,
    "service_vhost": "www",
    "services": {
      "property1": {
        "property1": "string",
        "property2": "string"
      },
      "property2": {
        "property1": "string",
        "property2": "string"
      }
    },
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "site_name": "Primary",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "Server",
    "updated_at": 1576300370
  }
]
```

<h3 id="service-inventory-as-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered service results|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="service-inventory-as-json-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Service](#schemaservice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Service inventory as JSON line-delimited

<a id="opIdexportServicesJSONL"></a>

> Code samples

```bash
curl https://example.com/export/org/services.jsonl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/services.jsonl`

<h3 id="service-inventory-as-json-line-delimited-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|
|fields|query|string|false|an optional list of fields to export, comma-separated|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="service-inventory-as-json-line-delimited-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered service results|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Site list as CSV

<a id="opIdexportSitesCSV"></a>

> Code samples

```bash
curl https://example.com/export/org/sites.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/sites.csv`

<h3 id="site-list-as-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|all sites|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Export all sites

<a id="opIdexportSitesJSON"></a>

> Code samples

```bash
curl https://example.com/export/org/sites.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/sites.json`

<h3 id="export-all-sites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|
|fields|query|string|false|an optional list of fields to export, comma-separated|

> Example responses

> 200 Response

```json
[
  {
    "created_at": 1576300370,
    "description": "Headquarters",
    "excludes": "192.168.0.5",
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "name": "Primary",
    "permanent": true,
    "scope": "192.168.0.0/24",
    "subnets": {},
    "updated_at": 1576300370
  }
]
```

<h3 id="export-all-sites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|all sites|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="export-all-sites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Site](#schemasite)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Site list as JSON line-delimited

<a id="opIdexportSitesJSONL"></a>

> Code samples

```bash
curl https://example.com/export/org/sites.jsonl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/sites.jsonl`

<h3 id="site-list-as-json-line-delimited-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|
|fields|query|string|false|an optional list of fields to export, comma-separated|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="site-list-as-json-line-delimited-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|all sites|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Wireless inventory as CSV

<a id="opIdexportWirelessCSV"></a>

> Code samples

```bash
curl https://example.com/export/org/wireless.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/wireless.csv`

<h3 id="wireless-inventory-as-csv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|

<h3 id="wireless-inventory-as-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered wireless results|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Wireless inventory as JSON

<a id="opIdexportWirelessJSON"></a>

> Code samples

```bash
curl https://example.com/export/org/wireless.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/wireless.json`

<h3 id="wireless-inventory-as-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|
|fields|query|string|false|an optional list of fields to export, comma-separated|

> Example responses

> 200 Response

```json
[
  {
    "agent_name": "LAPTOP-F4P1R6",
    "authentication": "wpa2-psk",
    "bssid": "11:22:33:44:55:66",
    "channels": "11, 158+1",
    "created_at": 1576300370,
    "data": {
      "property1": "string",
      "property2": "string"
    },
    "encryption": "aes",
    "essid": "Free WiFi",
    "family": 223344,
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "interface": "wlan0",
    "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "last_seen": 1576300370,
    "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "org_name": "Test Labs",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "signal": 99,
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "site_name": "Primary",
    "type": "infrastructure",
    "vendor": "Ubiquiti Networks"
  }
]
```

<h3 id="wireless-inventory-as-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered wireless results|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="wireless-inventory-as-json-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Wireless](#schemawireless)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Wireless inventory as JSON line-delimited

<a id="opIdexportWirelessJSONL"></a>

> Code samples

```bash
curl https://example.com/export/org/wireless.jsonl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/wireless.jsonl`

<h3 id="wireless-inventory-as-json-line-delimited-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|
|fields|query|string|false|an optional list of fields to export, comma-separated|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="wireless-inventory-as-json-line-delimited-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered wireless results|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Top asset hardware products as CSV

<a id="opIdexportAssetTopHWCSV"></a>

> Code samples

```bash
curl https://example.com/org/assets/top.hw.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/assets/top.hw.csv`

<h3 id="top-asset-hardware-products-as-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|top asset hardware platforms and counts as csv|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Top asset operating systems as CSV

<a id="opIdexportAssetTopOSCSV"></a>

> Code samples

```bash
curl https://example.com/org/assets/top.os.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/assets/top.os.csv`

<h3 id="top-asset-operating-systems-as-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|top operating systems and counts as csv|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Top asset tags as CSV

<a id="opIdexportAssetTopTagsCSV"></a>

> Code samples

```bash
curl https://example.com/org/assets/top.tags.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/assets/top.tags.csv`

<h3 id="top-asset-tags-as-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|top asset tags and counts as csv|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Top asset types as CSV

<a id="opIdexportAssetTopTypesCSV"></a>

> Code samples

```bash
curl https://example.com/org/assets/top.types.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/assets/top.types.csv`

<h3 id="top-asset-types-as-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|top asset types and counts as csv|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Subnet utilization statistics as as CSV

<a id="opIdexportSubnetUtilizationStatsCSV"></a>

> Code samples

```bash
curl https://example.com/org/services/subnet.stats.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/services/subnet.stats.csv`

<h3 id="subnet-utilization-statistics-as-as-csv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mask|query|string|false|an optional subnet mask size (ex:24)|

<h3 id="subnet-utilization-statistics-as-as-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|subnet utilization stats as csv|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Top service products as CSV

<a id="opIdexportServicesTopProductsCSV"></a>

> Code samples

```bash
curl https://example.com/org/services/top.products.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/services/top.products.csv`

<h3 id="top-service-products-as-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|top service products and counts as csv|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Top service protocols as CSV

<a id="opIdexportServicesTopProtocolsCSV"></a>

> Code samples

```bash
curl https://example.com/org/services/top.protocols.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/services/top.protocols.csv`

<h3 id="top-service-protocols-as-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|top service protocols and counts as csv|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Top TCP services as CSV

<a id="opIdexportServicesTopTCPCSV"></a>

> Code samples

```bash
curl https://example.com/org/services/top.tcp.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/services/top.tcp.csv`

<h3 id="top-tcp-services-as-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|top TCP services and counts as csv|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Top UDP services as CSV

<a id="opIdexportServicesTopUDPCSV"></a>

> Code samples

```bash
curl https://example.com/org/services/top.udp.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /org/services/top.udp.csv`

<h3 id="top-udp-services-as-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|top UDP services and counts as csv|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="rumble-api-deprecated-public">Public</h1>

Unauthenticated

## Returns latest agent version

<a id="opIdgetLatestAgentVersion"></a>

> Code samples

```bash
curl https://example.com/releases/agent/version \
  -H 'Accept: application/json'
```

`GET /releases/agent/version`

> Example responses

> 200 Response

```json
{
  "id": "agent",
  "version": "1.0.0"
}
```

<h3 id="returns-latest-agent-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|component version|[ComponentVersion](#schemacomponentversion)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns latest platform version

<a id="opIdgetLatestPlatformVersion"></a>

> Code samples

```bash
curl https://example.com/releases/platform/version \
  -H 'Accept: application/json'
```

`GET /releases/platform/version`

> Example responses

> 200 Response

```json
{
  "id": "agent",
  "version": "1.0.0"
}
```

<h3 id="returns-latest-platform-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|component version|[ComponentVersion](#schemacomponentversion)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns latest scanner version

<a id="opIdgetLatestScannerVersion"></a>

> Code samples

```bash
curl https://example.com/releases/scanner/version \
  -H 'Accept: application/json'
```

`GET /releases/scanner/version`

> Example responses

> 200 Response

```json
{
  "id": "agent",
  "version": "1.0.0"
}
```

<h3 id="returns-latest-scanner-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|component version|[ComponentVersion](#schemacomponentversion)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rumble-api-deprecated-account">Account</h1>

## Get all agents across all organizations

<a id="opIdgetAccountAgents"></a>

> Code samples

```bash
curl https://example.com/account/agents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/agents`

<h3 id="get-all-agents-across-all-organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|

> Example responses

> 200 Response

```json
[
  {
    "arch": "amd64",
    "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "connected": true,
    "created_at": 1576300370,
    "deactivated_at": 0,
    "external_ip": "1.1.1.1",
    "host_id": "6f9e6fe52271da70962e007183c5c9c9",
    "hub_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "inactive": false,
    "internal_ip": "192.168.0.1",
    "last_checkin": 1576300370,
    "name": "RUMBLE-AGENT",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "os": "Windows",
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "system_info": {},
    "updated_at": 1576300370,
    "version": "1.2.3 (build 20191219224016) [fc50c5eefdc3ff5c60533c3c345d14d336396272]"
  }
]
```

<h3 id="get-all-agents-across-all-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|array of tasks|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="get-all-agents-across-all-organizations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Agent](#schemaagent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all account credentials

<a id="opIdgetAccountCredentials"></a>

> Code samples

```bash
curl https://example.com/account/credentials \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/credentials`

<h3 id="get-all-account-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|

> Example responses

> 200 Response

```json
[
  {
    "acl": {
      "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
    },
    "cidrs": [
      "10.0.0.47/32",
      "192.168.1.0/24"
    ],
    "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "created_at": 1576300370,
    "created_by_email": "user@example.com",
    "created_by_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "global": false,
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "last_used_at": 1576300370,
    "last_used_by_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "name": "credentials_name",
    "type": "miradore_api_key_v1"
  }
]
```

<h3 id="get-all-account-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|array of credentials|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="get-all-account-credentials-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Credential](#schemacredential)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new credential

<a id="opIdcreateAccountCredential"></a>

> Code samples

```bash
curl https://example.com/account/credentials \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acl": {
      "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user",
      "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa9": "none"
    },
    "cidrs": "10.0.0.17/32, 192.168.1.0/24",
    "global": false,
    "name": "credentials_name",
    "secret": {
      "api_key": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "hostname": "yourcompanyinc.online.miradore.com"
    },
    "type": "miradore_api_key_v1"
  }'
```

`PUT /account/credentials`

> Body parameter

```json
{
  "acl": {
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user",
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa9": "none"
  },
  "cidrs": "10.0.0.17/32, 192.168.1.0/24",
  "global": false,
  "name": "credentials_name",
  "secret": {
    "api_key": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "hostname": "yourcompanyinc.online.miradore.com"
  },
  "type": "miradore_api_key_v1"
}
```

<h3 id="create-a-new-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CredentialOptions](#schemacredentialoptions)|true|credential parameters|
|» acl|body|object|false|none|
|» cidrs|body|string|false|none|
|» global|body|boolean|false|none|
|» name|body|string|false|none|
|» secret|body|[CredentialFields](#schemacredentialfields)|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|miradore_api_key_v1|
|» type|aws_access_secret|

> Example responses

> 200 Response

```json
{
  "acl": {
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
  },
  "cidrs": [
    "10.0.0.47/32",
    "192.168.1.0/24"
  ],
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by_email": "user@example.com",
  "created_by_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "global": false,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_used_at": 1576300370,
  "last_used_by_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "credentials_name",
  "type": "miradore_api_key_v1"
}
```

<h3 id="create-a-new-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|credential details|[Credential](#schemacredential)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get credential details

<a id="opIdgetAccountCredential"></a>

> Code samples

```bash
curl https://example.com/account/credentials/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/credentials/{credential_id}`

<h3 id="get-credential-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|credential_id|path|string(uuid)|true|UUID of the credential to retrieve|

> Example responses

> 200 Response

```json
{
  "acl": {
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
  },
  "cidrs": [
    "10.0.0.47/32",
    "192.168.1.0/24"
  ],
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by_email": "user@example.com",
  "created_by_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "global": false,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_used_at": 1576300370,
  "last_used_by_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "credentials_name",
  "type": "miradore_api_key_v1"
}
```

<h3 id="get-credential-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|credential details|[Credential](#schemacredential)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove this credential

<a id="opIdremoveAccountCredential"></a>

> Code samples

```bash
curl https://example.com/account/credentials/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/credentials/{credential_id}`

<h3 id="remove-this-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|credential_id|path|string(uuid)|true|UUID of the credential to delete|

<h3 id="remove-this-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|empty response|None|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## System event log as JSON

<a id="opIdexportEventsJSON"></a>

> Code samples

```bash
curl https://example.com/account/events.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/events.json`

<h3 id="system-event-log-as-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|
|fields|query|string|false|an optional list of fields to export, comma-separated|

> Example responses

> 200 Response

```json
[
  {
    "action": "login",
    "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "created_at": 1576300370,
    "details": {},
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "processed_at": 0,
    "processor_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "source_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "source_name": "SiteName",
    "source_type": "api",
    "state": "SiteName",
    "success": true,
    "target_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "target_name": "SiteName",
    "target_type": "api"
  }
]
```

<h3 id="system-event-log-as-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered event results|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="system-event-log-as-json-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Event](#schemaevent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## System event log as JSON line-delimited

<a id="opIdexportEventsJSONL"></a>

> Code samples

```bash
curl https://example.com/account/events.jsonl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/events.jsonl`

<h3 id="system-event-log-as-json-line-delimited-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|
|fields|query|string|false|an optional list of fields to export, comma-separated|

> Example responses

> 200 Response

```json
[
  {
    "action": "login",
    "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "created_at": 1576300370,
    "details": {},
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "processed_at": 0,
    "processor_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "source_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "source_name": "SiteName",
    "source_type": "api",
    "state": "SiteName",
    "success": true,
    "target_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "target_name": "SiteName",
    "target_type": "api"
  }
]
```

<h3 id="system-event-log-as-json-line-delimited-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered event results|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="system-event-log-as-json-line-delimited-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Event](#schemaevent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all groups

<a id="opIdgetAccountGroups"></a>

> Code samples

```bash
curl https://example.com/account/groups \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/groups`

<h3 id="get-all-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[Group](#schemagroup)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing group

<a id="opIdupdateAccountGroup"></a>

> Code samples

```bash
curl https://example.com/account/groups \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "Viewers Group",
    "expires_at": 1576300370,
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "name": "Viewers",
    "org_default_role": "admin",
    "org_roles": {
      "1a5e612e-4d64-45fe-aa3e-afba5cf3b9bf": "viewer",
      "fd6d6662-732b-4c4b-8331-051178994384": "admin"
    }
  }'
```

`PUT /account/groups`

> Body parameter

```json
{
  "description": "Viewers Group",
  "expires_at": 1576300370,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "Viewers",
  "org_default_role": "admin",
  "org_roles": {
    "1a5e612e-4d64-45fe-aa3e-afba5cf3b9bf": "viewer",
    "fd6d6662-732b-4c4b-8331-051178994384": "admin"
  }
}
```

<h3 id="update-an-existing-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GroupPut](#schemagroupput)|true|none|
|» description|body|string|false|none|
|» expires_at|body|integer(int64)|false|none|
|» id|body|string(uuid)|false|none|
|» name|body|string|false|none|
|» org_default_role|body|string|false|none|
|» org_roles|body|object|false|none|

<h3 id="update-an-existing-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[Group](#schemagroup)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new group

<a id="opIdcreateAccountGroup"></a>

> Code samples

```bash
curl https://example.com/account/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "Viewers Group",
    "expires_at": 1576300370,
    "name": "Viewers",
    "org_default_role": "admin",
    "org_roles": {
      "1a5e612e-4d64-45fe-aa3e-afba5cf3b9bf": "viewer",
      "fd6d6662-732b-4c4b-8331-051178994384": "admin"
    }
  }'
```

`POST /account/groups`

> Body parameter

```json
{
  "description": "Viewers Group",
  "expires_at": 1576300370,
  "name": "Viewers",
  "org_default_role": "admin",
  "org_roles": {
    "1a5e612e-4d64-45fe-aa3e-afba5cf3b9bf": "viewer",
    "fd6d6662-732b-4c4b-8331-051178994384": "admin"
  }
}
```

<h3 id="create-a-new-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GroupPost](#schemagrouppost)|true|none|
|» description|body|string|false|none|
|» expires_at|body|integer(int64)|false|none|
|» name|body|string|false|none|
|» org_default_role|body|string|false|none|
|» org_roles|body|object|false|none|

<h3 id="create-a-new-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[Group](#schemagroup)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get group details

<a id="opIdgetAccountGroup"></a>

> Code samples

```bash
curl https://example.com/account/groups/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/groups/{group_id}`

<h3 id="get-group-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string(uuid)|true|UUID of the group|

<h3 id="get-group-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[Group](#schemagroup)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove this group

<a id="opIdremoveAccountGroup"></a>

> Code samples

```bash
curl https://example.com/account/groups/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/groups/{group_id}`

<h3 id="remove-this-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string(uuid)|true|UUID of the group|

<h3 id="remove-this-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|empty response|None|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all active API keys

<a id="opIdgetAccountKeys"></a>

> Code samples

```bash
curl https://example.com/account/keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/keys`

> Example responses

> 200 Response

```json
[
  {
    "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "comment": "API key used for Splunk integration",
    "counter": 1,
    "created_at": 1576300370,
    "created_by": "user@example.com",
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "inactive": "tue",
    "last_used_at": 0,
    "last_used_ip": "127.0.0.1",
    "last_used_ua": "curl/7.44.1",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "token": "CTXXXXXXXXXXXXX",
    "type": "org",
    "usage_limit": 10000,
    "usage_today": 100
  }
]
```

<h3 id="get-all-active-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|array of keys|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="get-all-active-api-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[APIKey](#schemaapikey)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new key

<a id="opIdcreateAccountKey"></a>

> Code samples

```bash
curl https://example.com/account/keys \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "Splunk integration key",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"
  }'
```

`PUT /account/keys`

> Body parameter

```json
{
  "comment": "Splunk integration key",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"
}
```

<h3 id="create-a-new-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[APIKeyOptions](#schemaapikeyoptions)|true|key parameters|
|» comment|body|string|false|none|
|» organization_id|body|string(uuid)|false|none|

> Example responses

> 200 Response

```json
{
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "comment": "API key used for Splunk integration",
  "counter": 1,
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "inactive": "tue",
  "last_used_at": 0,
  "last_used_ip": "127.0.0.1",
  "last_used_ua": "curl/7.44.1",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "token": "CTXXXXXXXXXXXXX",
  "type": "org",
  "usage_limit": 10000,
  "usage_today": 100
}
```

<h3 id="create-a-new-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|key details|[APIKey](#schemaapikey)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get key details

<a id="opIdgetAccountKey"></a>

> Code samples

```bash
curl https://example.com/account/keys/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/keys/{key_id}`

<h3 id="get-key-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key_id|path|string(uuid)|true|UUID of the key to retrieve|

<h3 id="get-key-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[APIKey](#schemaapikey)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove this key

<a id="opIdremoveAccountKey"></a>

> Code samples

```bash
curl https://example.com/account/keys/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/keys/{key_id}`

<h3 id="remove-this-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key_id|path|string(uuid)|true|UUID of the key to retrieve|

<h3 id="remove-this-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|empty response|None|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Rotates the key secret

<a id="opIdrotateAccountKey"></a>

> Code samples

```bash
curl https://example.com/account/keys/497f6eca-6276-4993-bfeb-53cbbbba6f08/rotate \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /account/keys/{key_id}/rotate`

<h3 id="rotates-the-key-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key_id|path|string(uuid)|true|UUID of the key to retrieve|

> Example responses

> 200 Response

```json
{
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "comment": "API key used for Splunk integration",
  "counter": 1,
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "inactive": "tue",
  "last_used_at": 0,
  "last_used_ip": "127.0.0.1",
  "last_used_ua": "curl/7.44.1",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "token": "CTXXXXXXXXXXXXX",
  "type": "org",
  "usage_limit": 10000,
  "usage_today": 100
}
```

<h3 id="rotates-the-key-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|key details|[APIKey](#schemaapikey)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get license details

<a id="opIdgetAccountLicense"></a>

> Code samples

```bash
curl https://example.com/account/license \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/license`

<h3 id="get-license-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[License](#schemalicense)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all organization details

<a id="opIdgetAccountOrganizations"></a>

> Code samples

```bash
curl https://example.com/account/orgs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/orgs`

<h3 id="get-all-organization-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|

> Example responses

> 200 Response

```json
[
  {
    "asset_count": 100,
    "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "created_at": 1576300370,
    "deactivated_at": 0,
    "description": "All subdivisions of my company",
    "download_token": "DT11226D9EEEA2B035D42569585900",
    "download_token_created_at": 1576300370,
    "expiration_assets_offline": 365,
    "expiration_assets_stale": 365,
    "expiration_scans": 365,
    "export_token": "ET11226D9EEEA2B035D42569585900",
    "export_token_counter": 0,
    "export_token_created_at": 1576300370,
    "export_token_last_used_at": 0,
    "export_token_last_used_by": "127.0.0.1",
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "inactive": false,
    "name": "My Company",
    "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "permanent": true,
    "project": false,
    "service_count": 10,
    "service_count_arp": 1,
    "service_count_icmp": 1,
    "service_count_tcp": 7,
    "service_count_udp": 1,
    "updated_at": 1576300370
  }
]
```

<h3 id="get-all-organization-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|array of organizations|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="get-all-organization-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Organization](#schemaorganization)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new organization

<a id="opIdcreateAccountOrganization"></a>

> Code samples

```bash
curl https://example.com/account/orgs \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "Wobbly Widgets, Inc.",
    "expiration_assets_offline": "365",
    "expiration_assets_stale": "365",
    "expiration_scans": "365",
    "export_token": "ETXXXXXXXXXXXXXXXX",
    "name": "My Organization",
    "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "project": false
  }'
```

`PUT /account/orgs`

> Body parameter

```json
{
  "description": "Wobbly Widgets, Inc.",
  "expiration_assets_offline": "365",
  "expiration_assets_stale": "365",
  "expiration_scans": "365",
  "export_token": "ETXXXXXXXXXXXXXXXX",
  "name": "My Organization",
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "project": false
}
```

<h3 id="create-a-new-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OrgOptions](#schemaorgoptions)|true|organization definition|
|» description|body|string|false|none|
|» expiration_assets_offline|body|string(number)|false|none|
|» expiration_assets_stale|body|string(number)|false|none|
|» expiration_scans|body|string(number)|false|none|
|» export_token|body|string|false|none|
|» name|body|string|false|none|
|» parent_id|body|string(uuid)|false|none|
|» project|body|string(boolean)|false|none|

> Example responses

> 200 Response

```json
{
  "asset_count": 100,
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "deactivated_at": 0,
  "description": "All subdivisions of my company",
  "download_token": "DT11226D9EEEA2B035D42569585900",
  "download_token_created_at": 1576300370,
  "expiration_assets_offline": 365,
  "expiration_assets_stale": 365,
  "expiration_scans": 365,
  "export_token": "ET11226D9EEEA2B035D42569585900",
  "export_token_counter": 0,
  "export_token_created_at": 1576300370,
  "export_token_last_used_at": 0,
  "export_token_last_used_by": "127.0.0.1",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "inactive": false,
  "name": "My Company",
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "permanent": true,
  "project": false,
  "service_count": 10,
  "service_count_arp": 1,
  "service_count_icmp": 1,
  "service_count_tcp": 7,
  "service_count_udp": 1,
  "updated_at": 1576300370
}
```

<h3 id="create-a-new-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|organization details|[Organization](#schemaorganization)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get organization details

<a id="opIdgetAccountOrganization"></a>

> Code samples

```bash
curl https://example.com/account/orgs/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/orgs/{org_id}`

<h3 id="get-organization-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string(uuid)|true|UUID of the organization to retrieve|

<h3 id="get-organization-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[Organization](#schemaorganization)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove this organization

<a id="opIdremoveAccountOrganization"></a>

> Code samples

```bash
curl https://example.com/account/orgs/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/orgs/{org_id}`

<h3 id="remove-this-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string(uuid)|true|UUID of the organization to retrieve|

<h3 id="remove-this-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|empty response|None|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update organization details

<a id="opIdupdateAccountOrganization"></a>

> Code samples

```bash
curl https://example.com/account/orgs/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "Wobbly Widgets, Inc.",
    "expiration_assets_offline": "365",
    "expiration_assets_stale": "365",
    "expiration_scans": "365",
    "export_token": "ETXXXXXXXXXXXXXXXX",
    "name": "My Organization",
    "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "project": false
  }'
```

`PATCH /account/orgs/{org_id}`

> Body parameter

```json
{
  "description": "Wobbly Widgets, Inc.",
  "expiration_assets_offline": "365",
  "expiration_assets_stale": "365",
  "expiration_scans": "365",
  "export_token": "ETXXXXXXXXXXXXXXXX",
  "name": "My Organization",
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "project": false
}
```

<h3 id="update-organization-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string(uuid)|true|UUID of the organization to retrieve|
|body|body|[OrgOptions](#schemaorgoptions)|true|organization options|
|» description|body|string|false|none|
|» expiration_assets_offline|body|string(number)|false|none|
|» expiration_assets_stale|body|string(number)|false|none|
|» expiration_scans|body|string(number)|false|none|
|» export_token|body|string|false|none|
|» name|body|string|false|none|
|» parent_id|body|string(uuid)|false|none|
|» project|body|string(boolean)|false|none|

> Example responses

> 200 Response

```json
{
  "asset_count": 100,
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "deactivated_at": 0,
  "description": "All subdivisions of my company",
  "download_token": "DT11226D9EEEA2B035D42569585900",
  "download_token_created_at": 1576300370,
  "expiration_assets_offline": 365,
  "expiration_assets_stale": 365,
  "expiration_scans": 365,
  "export_token": "ET11226D9EEEA2B035D42569585900",
  "export_token_counter": 0,
  "export_token_created_at": 1576300370,
  "export_token_last_used_at": 0,
  "export_token_last_used_by": "127.0.0.1",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "inactive": false,
  "name": "My Company",
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "permanent": true,
  "project": false,
  "service_count": 10,
  "service_count_arp": 1,
  "service_count_icmp": 1,
  "service_count_tcp": 7,
  "service_count_udp": 1,
  "updated_at": 1576300370
}
```

<h3 id="update-organization-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|organization details|[Organization](#schemaorganization)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Removes the export token from the specified organization

<a id="opIddeleteAccountOrganizationExportToken"></a>

> Code samples

```bash
curl https://example.com/account/orgs/497f6eca-6276-4993-bfeb-53cbbbba6f08/exportToken \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/orgs/{org_id}/exportToken`

<h3 id="removes-the-export-token-from-the-specified-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string(uuid)|true|UUID of the organization to retrieve|

<h3 id="removes-the-export-token-from-the-specified-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|empty response|None|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Rotates the organization export token and returns the updated organization

<a id="opIdrotateAccountOrganizationExportToken"></a>

> Code samples

```bash
curl https://example.com/account/orgs/497f6eca-6276-4993-bfeb-53cbbbba6f08/exportToken/rotate \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /account/orgs/{org_id}/exportToken/rotate`

<h3 id="rotates-the-organization-export-token-and-returns-the-updated-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string(uuid)|true|UUID of the organization to retrieve|

> Example responses

> 200 Response

```json
{
  "asset_count": 100,
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "deactivated_at": 0,
  "description": "All subdivisions of my company",
  "download_token": "DT11226D9EEEA2B035D42569585900",
  "download_token_created_at": 1576300370,
  "expiration_assets_offline": 365,
  "expiration_assets_stale": 365,
  "expiration_scans": 365,
  "export_token": "ET11226D9EEEA2B035D42569585900",
  "export_token_counter": 0,
  "export_token_created_at": 1576300370,
  "export_token_last_used_at": 0,
  "export_token_last_used_by": "127.0.0.1",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "inactive": false,
  "name": "My Company",
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "permanent": true,
  "project": false,
  "service_count": 10,
  "service_count_arp": 1,
  "service_count_icmp": 1,
  "service_count_tcp": 7,
  "service_count_udp": 1,
  "updated_at": 1576300370
}
```

<h3 id="rotates-the-organization-export-token-and-returns-the-updated-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|organization details|[Organization](#schemaorganization)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all sites details across all organizations

<a id="opIdgetAccountSites"></a>

> Code samples

```bash
curl https://example.com/account/sites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/sites`

<h3 id="get-all-sites-details-across-all-organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|

> Example responses

> 200 Response

```json
[
  {
    "created_at": 1576300370,
    "description": "Headquarters",
    "excludes": "192.168.0.5",
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "name": "Primary",
    "permanent": true,
    "scope": "192.168.0.0/24",
    "subnets": {},
    "updated_at": 1576300370
  }
]
```

<h3 id="get-all-sites-details-across-all-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|array of sites|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="get-all-sites-details-across-all-organizations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Site](#schemasite)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all SSO group mappings

<a id="opIdgetAccountGroupMappings"></a>

> Code samples

```bash
curl https://example.com/account/sso/groups \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/sso/groups`

<h3 id="get-all-sso-group-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[GroupMapping](#schemagroupmapping)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing SSO group mapping

<a id="opIdupdateAccountGroupMapping"></a>

> Code samples

```bash
curl https://example.com/account/sso/groups \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "created_at": 1576300370,
    "created_by_email": "jsmith@example.com",
    "description": "Maps basic-attribute to Viewers Group",
    "group_id": "2b096711-4d28-4417-8635-64af4f62c1ae",
    "group_name": "Viewers Group",
    "id": "f6cfb91a-52ea-4a86-bf9a-5a891a26f52b",
    "sso_attribute": "basic-attribute",
    "sso_value": "basic-attribute-value",
    "updated_at": 1576300370
  }'
```

`PUT /account/sso/groups`

> Body parameter

```json
{
  "created_at": 1576300370,
  "created_by_email": "jsmith@example.com",
  "description": "Maps basic-attribute to Viewers Group",
  "group_id": "2b096711-4d28-4417-8635-64af4f62c1ae",
  "group_name": "Viewers Group",
  "id": "f6cfb91a-52ea-4a86-bf9a-5a891a26f52b",
  "sso_attribute": "basic-attribute",
  "sso_value": "basic-attribute-value",
  "updated_at": 1576300370
}
```

<h3 id="update-an-existing-sso-group-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GroupMapping](#schemagroupmapping)|true|none|
|» created_at|body|integer(int64)|false|none|
|» created_by_email|body|string|false|none|
|» description|body|string|false|none|
|» group_id|body|string(uuid)|true|none|
|» group_name|body|string|false|none|
|» id|body|string(uuid)|true|none|
|» sso_attribute|body|string|true|none|
|» sso_value|body|string|true|none|
|» updated_at|body|integer(int64)|false|none|

<h3 id="update-an-existing-sso-group-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[GroupMapping](#schemagroupmapping)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new SSO group mapping

<a id="opIdcreateAccountGroupMapping"></a>

> Code samples

```bash
curl https://example.com/account/sso/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "created_at": 1576300370,
    "created_by_email": "jsmith@example.com",
    "description": "Maps basic-attribute to Viewers Group",
    "group_id": "2b096711-4d28-4417-8635-64af4f62c1ae",
    "group_name": "Viewers Group",
    "id": "f6cfb91a-52ea-4a86-bf9a-5a891a26f52b",
    "sso_attribute": "basic-attribute",
    "sso_value": "basic-attribute-value",
    "updated_at": 1576300370
  }'
```

`POST /account/sso/groups`

> Body parameter

```json
{
  "created_at": 1576300370,
  "created_by_email": "jsmith@example.com",
  "description": "Maps basic-attribute to Viewers Group",
  "group_id": "2b096711-4d28-4417-8635-64af4f62c1ae",
  "group_name": "Viewers Group",
  "id": "f6cfb91a-52ea-4a86-bf9a-5a891a26f52b",
  "sso_attribute": "basic-attribute",
  "sso_value": "basic-attribute-value",
  "updated_at": 1576300370
}
```

<h3 id="create-a-new-sso-group-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GroupMapping](#schemagroupmapping)|true|none|
|» created_at|body|integer(int64)|false|none|
|» created_by_email|body|string|false|none|
|» description|body|string|false|none|
|» group_id|body|string(uuid)|true|none|
|» group_name|body|string|false|none|
|» id|body|string(uuid)|true|none|
|» sso_attribute|body|string|true|none|
|» sso_value|body|string|true|none|
|» updated_at|body|integer(int64)|false|none|

<h3 id="create-a-new-sso-group-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[GroupMapping](#schemagroupmapping)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get SSO group mapping details

<a id="opIdgetAccountGroupMapping"></a>

> Code samples

```bash
curl https://example.com/account/sso/groups/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/sso/groups/{group_mapping_id}`

<h3 id="get-sso-group-mapping-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_mapping_id|path|string(uuid)|true|UUID of the SSO group mapping|

<h3 id="get-sso-group-mapping-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[GroupMapping](#schemagroupmapping)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove this SSO group mapping

<a id="opIdremoveAccountGroupMapping"></a>

> Code samples

```bash
curl https://example.com/account/sso/groups/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/sso/groups/{group_mapping_id}`

<h3 id="remove-this-sso-group-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_mapping_id|path|string(uuid)|true|UUID of the SSO group mapping|

<h3 id="remove-this-sso-group-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|empty response|None|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all task details across all organizations (up to 1000)

<a id="opIdgetAccountTasks"></a>

> Code samples

```bash
curl https://example.com/account/tasks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/tasks`

<h3 id="get-all-task-details-across-all-organizations-up-to-1000-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|

> Example responses

> 200 Response

```json
[
  {
    "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "created_at": 1576300370,
    "created_by": "user@example.com",
    "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "description": "Scan the headquarters hourly",
    "error": "agent unavailable",
    "hidden": false,
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "name": "Hourly Scan",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "recur": false,
    "recur_frequency": "hour",
    "recur_last": 1576300370,
    "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "recur_next": 1576300370,
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "start_time": 1576300370,
    "stats": {},
    "status": "processed",
    "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "type": "scan",
    "updated_at": 1576300370
  }
]
```

<h3 id="get-all-task-details-across-all-organizations-up-to-1000-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|array of tasks|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="get-all-task-details-across-all-organizations-up-to-1000-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Task](#schematask)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all scan templates across all organizations (up to 1000)

<a id="opIdgetAccountScanTemplates"></a>

> Code samples

```bash
curl https://example.com/account/tasks/templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/tasks/templates`

<h3 id="get-all-scan-templates-across-all-organizations-up-to-1000-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|

> Example responses

> 200 Response

```json
[
  {
    "acl": {
      "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
    },
    "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "created_at": 1576300370,
    "created_by": "user@example.com",
    "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "description": "My Scan Template",
    "error": "agent unavailable",
    "global": false,
    "grace_period": "4",
    "hidden": false,
    "hosted_zone_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "linked_task_count": 1,
    "name": "My Scan Template",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "recur": false,
    "recur_frequency": "hour",
    "recur_last": 1576300370,
    "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "recur_next": 1576300370,
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "size_data": 0,
    "size_results": 0,
    "size_site": 0,
    "source_id": "1",
    "start_time": 1576300370,
    "stats": {},
    "status": "processed",
    "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "type": "scan",
    "updated_at": 1576300370
  }
]
```

<h3 id="get-all-scan-templates-across-all-organizations-up-to-1000-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|array of scan templates|Inline|
|401|Unauthorized|Access token is missing or invalid|None|
|422|Unprocessable Entity|failed to parse search string|None|

<h3 id="get-all-scan-templates-across-all-organizations-up-to-1000-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScanTemplate](#schemascantemplate)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update scan template

<a id="opIdupdateAccountScanTemplate"></a>

> Code samples

```bash
curl https://example.com/account/tasks/templates \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acl": {
      "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
    },
    "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "created_at": 1576300370,
    "created_by": "user@example.com",
    "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "description": "My Scan Template",
    "error": "agent unavailable",
    "global": false,
    "grace_period": "4",
    "hidden": false,
    "hosted_zone_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "linked_task_count": 1,
    "name": "My Scan Template",
    "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "recur": false,
    "recur_frequency": "hour",
    "recur_last": 1576300370,
    "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "recur_next": 1576300370,
    "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "size_data": 0,
    "size_results": 0,
    "size_site": 0,
    "source_id": "1",
    "start_time": 1576300370,
    "stats": {},
    "status": "processed",
    "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "type": "scan",
    "updated_at": 1576300370
  }'
```

`PUT /account/tasks/templates`

> Body parameter

```json
{
  "acl": {
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
  },
  "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "description": "My Scan Template",
  "error": "agent unavailable",
  "global": false,
  "grace_period": "4",
  "hidden": false,
  "hosted_zone_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "linked_task_count": 1,
  "name": "My Scan Template",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur": false,
  "recur_frequency": "hour",
  "recur_last": 1576300370,
  "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur_next": 1576300370,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "size_data": 0,
  "size_results": 0,
  "size_site": 0,
  "source_id": "1",
  "start_time": 1576300370,
  "stats": {},
  "status": "processed",
  "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "type": "scan",
  "updated_at": 1576300370
}
```

<h3 id="update-scan-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ScanTemplate](#schemascantemplate)|true|none|
|» acl|body|object|true|none|
|» agent_id|body|string(uuid)|false|none|
|» client_id|body|string(uuid)|false|none|
|» created_at|body|integer(int64)|false|none|
|» created_by|body|string(email)|false|none|
|» created_by_user_id|body|string(uuid)|false|none|
|» cruncher_id|body|string(uuid)|false|none|
|» description|body|string|false|none|
|» error|body|string|false|none|
|» global|body|boolean|true|none|
|» grace_period|body|string|false|none|
|» hidden|body|boolean|false|none|
|» hosted_zone_id|body|string(uuid)|false|none|
|» id|body|string(uuid)|true|none|
|» linked_task_count|body|integer(int32)|false|none|
|» name|body|string|false|none|
|» organization_id|body|string(uuid)|false|none|
|» params|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» parent_id|body|string(uuid)|false|none|
|» recur|body|boolean|false|none|
|» recur_frequency|body|string|false|none|
|» recur_last|body|integer(int64)|false|none|
|» recur_last_task_id|body|string(uuid)|false|none|
|» recur_next|body|integer(int64)|false|none|
|» site_id|body|string(uuid)|false|none|
|» size_data|body|integer(int64)|false|none|
|» size_results|body|integer(int64)|false|none|
|» size_site|body|integer(int64)|false|none|
|» source_id|body|string|false|none|
|» start_time|body|integer(int64)|false|none|
|» stats|body|object|false|none|
|» status|body|string|false|none|
|» template_id|body|string(uuid)|false|none|
|» type|body|string|false|none|
|» updated_at|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "acl": {
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
  },
  "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "description": "My Scan Template",
  "error": "agent unavailable",
  "global": false,
  "grace_period": "4",
  "hidden": false,
  "hosted_zone_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "linked_task_count": 1,
  "name": "My Scan Template",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur": false,
  "recur_frequency": "hour",
  "recur_last": 1576300370,
  "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur_next": 1576300370,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "size_data": 0,
  "size_results": 0,
  "size_site": 0,
  "source_id": "1",
  "start_time": 1576300370,
  "stats": {},
  "status": "processed",
  "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "type": "scan",
  "updated_at": 1576300370
}
```

<h3 id="update-scan-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|scan template|[ScanTemplate](#schemascantemplate)|
|400|Bad Request|invalid request body|None|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|scan template or permissions not found|None|
|422|Unprocessable Entity|invalid request body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new scan template

<a id="opIdcreateAccountScanTemplate"></a>

> Code samples

```bash
curl https://example.com/account/tasks/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acl": {
      "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
    },
    "description": "My Scan Template",
    "global": false,
    "name": "My Scan Template",
    "params": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /account/tasks/templates`

> Body parameter

```json
{
  "acl": {
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
  },
  "description": "My Scan Template",
  "global": false,
  "name": "My Scan Template",
  "params": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="create-a-new-scan-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ScanTemplateOptions](#schemascantemplateoptions)|true|none|
|» acl|body|object|true|none|
|» description|body|string|false|none|
|» global|body|boolean|true|none|
|» name|body|string|true|none|
|» params|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "acl": {
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
  },
  "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "description": "My Scan Template",
  "error": "agent unavailable",
  "global": false,
  "grace_period": "4",
  "hidden": false,
  "hosted_zone_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "linked_task_count": 1,
  "name": "My Scan Template",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur": false,
  "recur_frequency": "hour",
  "recur_last": 1576300370,
  "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur_next": 1576300370,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "size_data": 0,
  "size_results": 0,
  "size_site": 0,
  "source_id": "1",
  "start_time": 1576300370,
  "stats": {},
  "status": "processed",
  "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "type": "scan",
  "updated_at": 1576300370
}
```

<h3 id="create-a-new-scan-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|scan template|[ScanTemplate](#schemascantemplate)|
|400|Bad Request|invalid request body|None|
|401|Unauthorized|Access token is missing or invalid|None|
|422|Unprocessable Entity|invalid request body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get scan template details

<a id="opIdgetAccountScanTemplate"></a>

> Code samples

```bash
curl https://example.com/account/tasks/templates/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/tasks/templates/{scan_template_id}`

<h3 id="get-scan-template-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scan_template_id|path|string(uuid)|true|UUID of the scan template to retrieve|

> Example responses

> 200 Response

```json
{
  "acl": {
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
  },
  "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "description": "My Scan Template",
  "error": "agent unavailable",
  "global": false,
  "grace_period": "4",
  "hidden": false,
  "hosted_zone_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "linked_task_count": 1,
  "name": "My Scan Template",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur": false,
  "recur_frequency": "hour",
  "recur_last": 1576300370,
  "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur_next": 1576300370,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "size_data": 0,
  "size_results": 0,
  "size_site": 0,
  "source_id": "1",
  "start_time": 1576300370,
  "stats": {},
  "status": "processed",
  "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "type": "scan",
  "updated_at": 1576300370
}
```

<h3 id="get-scan-template-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|scan template|[ScanTemplate](#schemascantemplate)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|scan template not found|None|
|422|Unprocessable Entity|invalid scan template id|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove scan template

<a id="opIdremoveAccountScanTemplate"></a>

> Code samples

```bash
curl https://example.com/account/tasks/templates/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/tasks/templates/{scan_template_id}`

<h3 id="remove-scan-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scan_template_id|path|string(uuid)|true|UUID of the scan template to remove|

> Example responses

> 200 Response

```json
{
  "acl": {
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
  },
  "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "description": "My Scan Template",
  "error": "agent unavailable",
  "global": false,
  "grace_period": "4",
  "hidden": false,
  "hosted_zone_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "linked_task_count": 1,
  "name": "My Scan Template",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur": false,
  "recur_frequency": "hour",
  "recur_last": 1576300370,
  "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur_next": 1576300370,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "size_data": 0,
  "size_results": 0,
  "size_site": 0,
  "source_id": "1",
  "start_time": 1576300370,
  "stats": {},
  "status": "processed",
  "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "type": "scan",
  "updated_at": 1576300370
}
```

<h3 id="remove-scan-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|scan template|[ScanTemplate](#schemascantemplate)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|scan template not found|None|
|422|Unprocessable Entity|invalid request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get all users

<a id="opIdgetAccountUsers"></a>

> Code samples

```bash
curl https://example.com/account/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/users`

> Example responses

> 200 Response

```json
[
  {
    "client_admin": true,
    "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "created_at": 1576300370,
    "email": "jsmith@example.com",
    "first_name": "James",
    "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "invite_token_expiration": 1576300370,
    "last_login_at": 1576300370,
    "last_login_ip": "192.168.0.1",
    "last_login_ua": "curl/1.0",
    "last_name": "Smith",
    "login_failures": 0,
    "org_default_role": "admin",
    "org_roles": {},
    "reset_token_expiration": 1576300370,
    "sso_only": false,
    "updated_at": 1576300370
  }
]
```

<h3 id="get-all-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|array of users|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="get-all-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[User](#schemauser)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new user account

<a id="opIdcreateAccountUser"></a>

> Code samples

```bash
curl https://example.com/account/users \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "client_admin": true,
    "email": "jsmith@example.com",
    "first_name": "James",
    "last_name": "Smith",
    "org_default_role": "admin",
    "org_roles": {}
  }'
```

`PUT /account/users`

> Body parameter

```json
{
  "client_admin": true,
  "email": "jsmith@example.com",
  "first_name": "James",
  "last_name": "Smith",
  "org_default_role": "admin",
  "org_roles": {}
}
```

<h3 id="create-a-new-user-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserOptions](#schemauseroptions)|true|user parameters|
|» client_admin|body|boolean|false|none|
|» email|body|string|false|none|
|» first_name|body|string|false|none|
|» last_name|body|string|false|none|
|» org_default_role|body|string|false|none|
|» org_roles|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "client_admin": true,
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "email": "jsmith@example.com",
  "first_name": "James",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "invite_token_expiration": 1576300370,
  "last_login_at": 1576300370,
  "last_login_ip": "192.168.0.1",
  "last_login_ua": "curl/1.0",
  "last_name": "Smith",
  "login_failures": 0,
  "org_default_role": "admin",
  "org_roles": {},
  "reset_token_expiration": 1576300370,
  "sso_only": false,
  "updated_at": 1576300370
}
```

<h3 id="create-a-new-user-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|key details|[User](#schemauser)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new user account and send an email invite

<a id="opIdcreateAccountUserInvite"></a>

> Code samples

```bash
curl https://example.com/account/users/invite \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "client_admin": true,
    "email": "jsmith@example.com",
    "first_name": "James",
    "last_name": "Smith",
    "message": "You have been invited to the Rumble Network Discovery platform",
    "org_default_role": "admin",
    "org_roles": {},
    "subject": "Welcome to Rumble"
  }'
```

`PUT /account/users/invite`

> Body parameter

```json
{
  "client_admin": true,
  "email": "jsmith@example.com",
  "first_name": "James",
  "last_name": "Smith",
  "message": "You have been invited to the Rumble Network Discovery platform",
  "org_default_role": "admin",
  "org_roles": {},
  "subject": "Welcome to Rumble"
}
```

<h3 id="create-a-new-user-account-and-send-an-email-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserInviteOptions](#schemauserinviteoptions)|true|user invite parameters|
|» client_admin|body|boolean|false|none|
|» email|body|string|false|none|
|» first_name|body|string|false|none|
|» last_name|body|string|false|none|
|» message|body|string|false|none|
|» org_default_role|body|string|false|none|
|» org_roles|body|object|false|none|
|» subject|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "client_admin": true,
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "email": "jsmith@example.com",
  "first_name": "James",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "invite_token_expiration": 1576300370,
  "last_login_at": 1576300370,
  "last_login_ip": "192.168.0.1",
  "last_login_ua": "curl/1.0",
  "last_name": "Smith",
  "login_failures": 0,
  "org_default_role": "admin",
  "org_roles": {},
  "reset_token_expiration": 1576300370,
  "sso_only": false,
  "updated_at": 1576300370
}
```

<h3 id="create-a-new-user-account-and-send-an-email-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|key details|[User](#schemauser)|
|401|Unauthorized|Access token is missing or invalid|None|
|404|Not Found|Resource not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get user details

<a id="opIdgetAccountUser"></a>

> Code samples

```bash
curl https://example.com/account/users/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/users/{user_id}`

<h3 id="get-user-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string(uuid)|true|UUID of the user to retrieve|

<h3 id="get-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[User](#schemauser)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove this user

<a id="opIdremoveAccountUser"></a>

> Code samples

```bash
curl https://example.com/account/users/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/users/{user_id}`

<h3 id="remove-this-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string(uuid)|true|UUID of the user to delete|

<h3 id="remove-this-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|empty response|None|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a user's details

<a id="opIdupdateAccountUser"></a>

> Code samples

```bash
curl https://example.com/account/users/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "client_admin": true,
    "email": "jsmith@example.com",
    "first_name": "James",
    "last_name": "Smith",
    "org_default_role": "admin",
    "org_roles": {}
  }'
```

`PATCH /account/users/{user_id}`

> Body parameter

```json
{
  "client_admin": true,
  "email": "jsmith@example.com",
  "first_name": "James",
  "last_name": "Smith",
  "org_default_role": "admin",
  "org_roles": {}
}
```

<h3 id="update-a-users-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string(uuid)|true|UUID of the user to retrieve|
|body|body|[UserOptions](#schemauseroptions)|true|user parameters|
|» client_admin|body|boolean|false|none|
|» email|body|string|false|none|
|» first_name|body|string|false|none|
|» last_name|body|string|false|none|
|» org_default_role|body|string|false|none|
|» org_roles|body|object|false|none|

<h3 id="update-a-users-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[User](#schemauser)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Resets the user's lockout status

<a id="opIdresetAccountUserLockout"></a>

> Code samples

```bash
curl https://example.com/account/users/497f6eca-6276-4993-bfeb-53cbbbba6f08/resetLockout \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /account/users/{user_id}/resetLockout`

<h3 id="resets-the-users-lockout-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string(uuid)|true|UUID of the user to retrieve|

<h3 id="resets-the-users-lockout-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[User](#schemauser)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Resets the user's MFA tokens

<a id="opIdresetAccountUserMFA"></a>

> Code samples

```bash
curl https://example.com/account/users/497f6eca-6276-4993-bfeb-53cbbbba6f08/resetMFA \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /account/users/{user_id}/resetMFA`

<h3 id="resets-the-users-mfa-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string(uuid)|true|UUID of the user to retrieve|

<h3 id="resets-the-users-mfa-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[User](#schemauser)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Sends the user a password reset email

<a id="opIdresetAccountUserPassword"></a>

> Code samples

```bash
curl https://example.com/account/users/497f6eca-6276-4993-bfeb-53cbbbba6f08/resetPassword \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /account/users/{user_id}/resetPassword`

<h3 id="sends-the-user-a-password-reset-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string(uuid)|true|UUID of the user to retrieve|

<h3 id="sends-the-user-a-password-reset-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[User](#schemauser)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="rumble-api-deprecated-cisco-sntc">Cisco SNTC</h1>

## Cisco serial number and model name export for Cisco Smart Net Total Care Service.

<a id="opIdexportAssetsCiscoCSV"></a>

> Code samples

```bash
curl https://example.com/export/org/assets.cisco.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/assets.cisco.csv`

<h3 id="cisco-serial-number-and-model-name-export-for-cisco-smart-net-total-care-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|

<h3 id="cisco-serial-number-and-model-name-export-for-cisco-smart-net-total-care-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered asset results|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="rumble-api-deprecated-servicenow">ServiceNow</h1>

## Export an asset inventory as CSV for ServiceNow integration

<a id="opIdsnowExportAssetsCSV"></a>

> Code samples

```bash
curl https://example.com/export/org/assets.servicenow.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/assets.servicenow.csv`

<h3 id="export-an-asset-inventory-as-csv-for-servicenow-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|asset export|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Exports the asset inventory as JSON

<a id="opIdsnowExportAssetsJSON"></a>

> Code samples

```bash
curl https://example.com/export/org/assets.servicenow.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/assets.servicenow.json`

> Example responses

> 200 Response

```json
[
  {
    "addresses_extra": "192.168.0.5;192.168.0.3",
    "addresses_scope": "192.168.100.1;192.168.100.2",
    "alive": true,
    "asset_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "comments": "File Server",
    "detected_by": "icmp",
    "domains": "rumble.run;rumble.local.lan",
    "first_discovered": "2006-01-02 15:04:05",
    "hw_product": "PowerEdge",
    "hw_vendor": "Dell",
    "hw_version": 2,
    "ip_address": "192.168.0.1",
    "last_discovered": "2006-01-02 15:04:05",
    "last_updated": "2006-01-02 15:04:05",
    "lowest_rtt": 1,
    "lowest_ttl": 0,
    "mac_address": "11:22:33:44:55:66",
    "mac_manufacturer": "Dell",
    "mac_vendors": "Dell",
    "macs": "11:22:33:44:55:66",
    "name": "www;server",
    "newest_mac_age": "2020-01-01",
    "organization": "Headquarters",
    "os_product": "Windows 10",
    "os_vendor": "Microsoft",
    "os_version": 1903,
    "service_count": 10,
    "service_count_arp": 1,
    "service_count_icmp": 1,
    "service_count_tcp": 7,
    "service_count_udp": 1,
    "site": "Primary",
    "sys_class_name": "cmdb_ci_iot",
    "tags": "owner=IT;location=Austin",
    "type": "Server"
  }
]
```

<h3 id="exports-the-asset-inventory-as-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered asset results|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<h3 id="exports-the-asset-inventory-as-json-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssetServiceNow](#schemaassetservicenow)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Export a service inventory as CSV for ServiceNow integration

<a id="opIdsnowExportServicesCSV"></a>

> Code samples

```bash
curl https://example.com/export/org/services.servicenow.csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/services.servicenow.csv`

<h3 id="export-a-service-inventory-as-csv-for-servicenow-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|services export|Inline|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="rumble-api-deprecated-splunk">Splunk</h1>

## Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.

<a id="opIdsplunkAssetSyncCreatedJSON"></a>

> Code samples

```bash
curl https://example.com/export/org/assets/sync/created/assets.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/assets/sync/created/assets.json`

<h3 id="exports-the-asset-inventory-in-a-sync-friendly-manner-using-createdat-as-a-checkpoint-requires-the-splunk-entitlement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|
|fields|query|string|false|an optional list of fields to export, comma-separated|
|since|query|integer(int64)|false|an optional unix timestamp to use as a checkpoint|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "addresses": [
        "192.168.0.1"
      ],
      "addresses_extra": [
        "192.168.100.1"
      ],
      "agent_name": "LAPTOP-F4P1R6",
      "alive": true,
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "comments": "File Server",
      "created_at": 1576300370,
      "credentials": {
        "property1": {
          "property1": true,
          "property2": true
        },
        "property2": {
          "property1": true,
          "property2": true
        }
      },
      "detected_by": "icmp",
      "domains": [
        "www"
      ],
      "first_seen": 1576300370,
      "hw": "Dell PowerEdge 2500",
      "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "last_seen": 1576300370,
      "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "lowest_rtt": 1,
      "lowest_ttl": 0,
      "mac_vendors": [
        "Dell"
      ],
      "macs": [
        "11:22:33:44:55:66"
      ],
      "names": [
        "www"
      ],
      "newest_mac": "11:22:33:44:55:66",
      "newest_mac_age": 1304035200000000000,
      "newest_mac_vendor": "Intel Corporate",
      "org_name": "Test Labs",
      "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "os": "Ubuntu Linux",
      "os_version": 18.04,
      "rtts": {},
      "service_count": 10,
      "service_count_arp": 1,
      "service_count_icmp": 1,
      "service_count_tcp": 7,
      "service_count_udp": 1,
      "service_ports_products": [
        "bind"
      ],
      "service_ports_protocols": [
        "ssh"
      ],
      "service_ports_tcp": [
        22
      ],
      "service_ports_udp": [
        53
      ],
      "services": {
        "property1": {
          "property1": "string",
          "property2": "string"
        },
        "property2": {
          "property1": "string",
          "property2": "string"
        }
      },
      "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "site_name": "Primary",
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "type": "Server",
      "updated_at": 1576300370
    }
  ],
  "since": 1576300370
}
```

<h3 id="exports-the-asset-inventory-in-a-sync-friendly-manner-using-createdat-as-a-checkpoint-requires-the-splunk-entitlement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered asset results with a checkpoint wrapper|[AssetsWithCheckpoint](#schemaassetswithcheckpoint)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.

<a id="opIdsplunkAssetSyncUpdatedJSON"></a>

> Code samples

```bash
curl https://example.com/export/org/assets/sync/updated/assets.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /export/org/assets/sync/updated/assets.json`

<h3 id="exports-the-asset-inventory-in-a-sync-friendly-manner-using-updatedat-as-a-checkpoint-requires-the-splunk-entitlement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|an optional search string for filtering results|
|fields|query|string|false|an optional list of fields to export, comma-separated|
|since|query|integer(int64)|false|an optional unix timestamp to use as a checkpoint|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "addresses": [
        "192.168.0.1"
      ],
      "addresses_extra": [
        "192.168.100.1"
      ],
      "agent_name": "LAPTOP-F4P1R6",
      "alive": true,
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "comments": "File Server",
      "created_at": 1576300370,
      "credentials": {
        "property1": {
          "property1": true,
          "property2": true
        },
        "property2": {
          "property1": true,
          "property2": true
        }
      },
      "detected_by": "icmp",
      "domains": [
        "www"
      ],
      "first_seen": 1576300370,
      "hw": "Dell PowerEdge 2500",
      "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "last_seen": 1576300370,
      "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "lowest_rtt": 1,
      "lowest_ttl": 0,
      "mac_vendors": [
        "Dell"
      ],
      "macs": [
        "11:22:33:44:55:66"
      ],
      "names": [
        "www"
      ],
      "newest_mac": "11:22:33:44:55:66",
      "newest_mac_age": 1304035200000000000,
      "newest_mac_vendor": "Intel Corporate",
      "org_name": "Test Labs",
      "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "os": "Ubuntu Linux",
      "os_version": 18.04,
      "rtts": {},
      "service_count": 10,
      "service_count_arp": 1,
      "service_count_icmp": 1,
      "service_count_tcp": 7,
      "service_count_udp": 1,
      "service_ports_products": [
        "bind"
      ],
      "service_ports_protocols": [
        "ssh"
      ],
      "service_ports_tcp": [
        22
      ],
      "service_ports_udp": [
        53
      ],
      "services": {
        "property1": {
          "property1": "string",
          "property2": "string"
        },
        "property2": {
          "property1": "string",
          "property2": "string"
        }
      },
      "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "site_name": "Primary",
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "type": "Server",
      "updated_at": 1576300370
    }
  ],
  "since": 1576300370
}
```

<h3 id="exports-the-asset-inventory-in-a-sync-friendly-manner-using-updatedat-as-a-checkpoint-requires-the-splunk-entitlement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filtered asset results with a checkpoint wrapper|[AssetsWithCheckpoint](#schemaassetswithcheckpoint)|
|401|Unauthorized|Access token is missing or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
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
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "comment": "API key used for Splunk integration",
  "counter": 1,
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "inactive": "tue",
  "last_used_at": 0,
  "last_used_ip": "127.0.0.1",
  "last_used_ua": "curl/7.44.1",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "token": "CTXXXXXXXXXXXXX",
  "type": "org",
  "usage_limit": 10000,
  "usage_today": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string(uuid)|false|none|none|
|comment|string|false|none|none|
|counter|integer(int64)|false|none|none|
|created_at|integer(int64)|false|none|none|
|created_by|string(email)|false|none|none|
|id|string(uuid)|true|none|none|
|inactive|boolean|false|none|none|
|last_used_at|integer(int64)|false|none|none|
|last_used_ip|string|false|none|none|
|last_used_ua|string|false|none|none|
|organization_id|string(uuid)|false|none|none|
|token|string|false|none|none|
|type|string|false|none|none|
|usage_limit|integer(int64)|false|none|none|
|usage_today|integer(int64)|false|none|none|

<h2 id="tocS_APIKeyOptions">APIKeyOptions</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyoptions"></a>
<a id="schema_APIKeyOptions"></a>
<a id="tocSapikeyoptions"></a>
<a id="tocsapikeyoptions"></a>

```json
{
  "comment": "Splunk integration key",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|none|
|organization_id|string(uuid)|false|none|none|

<h2 id="tocS_AWSCredentialFields">AWSCredentialFields</h2>
<!-- backwards compatibility -->
<a id="schemaawscredentialfields"></a>
<a id="schema_AWSCredentialFields"></a>
<a id="tocSawscredentialfields"></a>
<a id="tocsawscredentialfields"></a>

```json
{
  "access_key": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "regions": "us-west-1, us-east-2",
  "role": "rumble-role",
  "secret_access_key": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "use_cross_account_org": "true"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_key|string(string)|true|none|none|
|regions|string(string)|false|none|none|
|role|string(string)|false|none|none|
|secret_access_key|string(string)|true|none|none|
|use_cross_account_org|string(string)|false|none|none|

<h2 id="tocS_Agent">Agent</h2>
<!-- backwards compatibility -->
<a id="schemaagent"></a>
<a id="schema_Agent"></a>
<a id="tocSagent"></a>
<a id="tocsagent"></a>

```json
{
  "arch": "amd64",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "connected": true,
  "created_at": 1576300370,
  "deactivated_at": 0,
  "external_ip": "1.1.1.1",
  "host_id": "6f9e6fe52271da70962e007183c5c9c9",
  "hub_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "inactive": false,
  "internal_ip": "192.168.0.1",
  "last_checkin": 1576300370,
  "name": "RUMBLE-AGENT",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "os": "Windows",
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "system_info": {},
  "updated_at": 1576300370,
  "version": "1.2.3 (build 20191219224016) [fc50c5eefdc3ff5c60533c3c345d14d336396272]"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arch|string|false|none|none|
|client_id|string(uuid)|false|none|none|
|connected|boolean|false|none|none|
|created_at|integer(int64)|false|none|none|
|deactivated_at|integer(int64)|false|none|none|
|external_ip|string|false|none|none|
|host_id|string|false|none|none|
|hub_id|string(uuid)|false|none|none|
|id|string(uuid)|true|none|none|
|inactive|boolean|false|none|none|
|internal_ip|string|false|none|none|
|last_checkin|integer(int64)|false|none|none|
|name|string(hostname)|false|none|none|
|organization_id|string(uuid)|false|none|none|
|os|string|false|none|none|
|site_id|string(uuid)|false|none|none|
|system_info|object|false|none|none|
|updated_at|integer(int64)|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_AgentSiteID">AgentSiteID</h2>
<!-- backwards compatibility -->
<a id="schemaagentsiteid"></a>
<a id="schema_AgentSiteID"></a>
<a id="tocSagentsiteid"></a>
<a id="tocsagentsiteid"></a>

```json
{
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|site_id|string(uuid)|true|none|none|

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "addresses": [
    "192.168.0.1"
  ],
  "addresses_extra": [
    "192.168.100.1"
  ],
  "agent_name": "LAPTOP-F4P1R6",
  "alive": true,
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "comments": "File Server",
  "created_at": 1576300370,
  "credentials": {
    "property1": {
      "property1": true,
      "property2": true
    },
    "property2": {
      "property1": true,
      "property2": true
    }
  },
  "detected_by": "icmp",
  "domains": [
    "www"
  ],
  "first_seen": 1576300370,
  "hw": "Dell PowerEdge 2500",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_seen": 1576300370,
  "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "lowest_rtt": 1,
  "lowest_ttl": 0,
  "mac_vendors": [
    "Dell"
  ],
  "macs": [
    "11:22:33:44:55:66"
  ],
  "names": [
    "www"
  ],
  "newest_mac": "11:22:33:44:55:66",
  "newest_mac_age": 1304035200000000000,
  "newest_mac_vendor": "Intel Corporate",
  "org_name": "Test Labs",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "os": "Ubuntu Linux",
  "os_version": 18.04,
  "rtts": {},
  "service_count": 10,
  "service_count_arp": 1,
  "service_count_icmp": 1,
  "service_count_tcp": 7,
  "service_count_udp": 1,
  "service_ports_products": [
    "bind"
  ],
  "service_ports_protocols": [
    "ssh"
  ],
  "service_ports_tcp": [
    22
  ],
  "service_ports_udp": [
    53
  ],
  "services": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "site_name": "Primary",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "Server",
  "updated_at": 1576300370
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[string]|false|none|none|
|addresses_extra|[string]|false|none|none|
|agent_name|string|false|none|none|
|alive|boolean(boolean)|false|none|none|
|attributes|object|false|none|none|
|comments|string|false|none|none|
|created_at|integer(int64)|false|none|none|
|credentials|object|false|none|none|
|detected_by|string|false|none|none|
|domains|[string]|false|none|none|
|first_seen|integer(int64)|false|none|none|
|hw|string|false|none|none|
|id|string(uuid)|true|none|none|
|last_agent_id|string(uuid)|false|none|none|
|last_seen|integer(int64)|false|none|none|
|last_task_id|string(uuid)|false|none|none|
|lowest_rtt|integer(int64)|false|none|none|
|lowest_ttl|integer(int64)|false|none|none|
|mac_vendors|[string]|false|none|none|
|macs|[string(mac)]|false|none|none|
|names|[string]|false|none|none|
|newest_mac|string(mac)|false|none|none|
|newest_mac_age|integer(int64)|false|none|none|
|newest_mac_vendor|string|false|none|none|
|org_name|string|false|none|none|
|organization_id|string(uuid)|false|none|none|
|os|string|false|none|none|
|os_version|string|false|none|none|
|rtts|object|false|none|none|
|service_count|integer(int64)|false|none|none|
|service_count_arp|integer(int64)|false|none|none|
|service_count_icmp|integer(int64)|false|none|none|
|service_count_tcp|integer(int64)|false|none|none|
|service_count_udp|integer(int64)|false|none|none|
|service_ports_products|[string]|false|none|none|
|service_ports_protocols|[string]|false|none|none|
|service_ports_tcp|[string(port)]|false|none|none|
|service_ports_udp|[string(port)]|false|none|none|
|services|object|false|none|none|
|site_id|string(uuid)|false|none|none|
|site_name|string|false|none|none|
|tags|object|false|none|none|
|type|string|false|none|none|
|updated_at|integer(int64)|false|none|none|

<h2 id="tocS_AssetComments">AssetComments</h2>
<!-- backwards compatibility -->
<a id="schemaassetcomments"></a>
<a id="schema_AssetComments"></a>
<a id="tocSassetcomments"></a>
<a id="tocsassetcomments"></a>

```json
{
  "comments": "Sales Laptop"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|true|none|none|

<h2 id="tocS_AssetServiceNow">AssetServiceNow</h2>
<!-- backwards compatibility -->
<a id="schemaassetservicenow"></a>
<a id="schema_AssetServiceNow"></a>
<a id="tocSassetservicenow"></a>
<a id="tocsassetservicenow"></a>

```json
{
  "addresses_extra": "192.168.0.5;192.168.0.3",
  "addresses_scope": "192.168.100.1;192.168.100.2",
  "alive": true,
  "asset_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "comments": "File Server",
  "detected_by": "icmp",
  "domains": "rumble.run;rumble.local.lan",
  "first_discovered": "2006-01-02 15:04:05",
  "hw_product": "PowerEdge",
  "hw_vendor": "Dell",
  "hw_version": 2,
  "ip_address": "192.168.0.1",
  "last_discovered": "2006-01-02 15:04:05",
  "last_updated": "2006-01-02 15:04:05",
  "lowest_rtt": 1,
  "lowest_ttl": 0,
  "mac_address": "11:22:33:44:55:66",
  "mac_manufacturer": "Dell",
  "mac_vendors": "Dell",
  "macs": "11:22:33:44:55:66",
  "name": "www;server",
  "newest_mac_age": "2020-01-01",
  "organization": "Headquarters",
  "os_product": "Windows 10",
  "os_vendor": "Microsoft",
  "os_version": 1903,
  "service_count": 10,
  "service_count_arp": 1,
  "service_count_icmp": 1,
  "service_count_tcp": 7,
  "service_count_udp": 1,
  "site": "Primary",
  "sys_class_name": "cmdb_ci_iot",
  "tags": "owner=IT;location=Austin",
  "type": "Server"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses_extra|string|false|none|none|
|addresses_scope|string|false|none|none|
|alive|boolean(boolean)|false|none|none|
|asset_id|string(uuid)|true|none|none|
|comments|string|false|none|none|
|detected_by|string|false|none|none|
|domains|string|false|none|none|
|first_discovered|string|false|none|none|
|hw_product|string|false|none|none|
|hw_vendor|string|false|none|none|
|hw_version|string|false|none|none|
|ip_address|string|false|none|none|
|last_discovered|string|false|none|none|
|last_updated|string|false|none|none|
|lowest_rtt|integer(int64)|false|none|none|
|lowest_ttl|integer(int64)|false|none|none|
|mac_address|string(mac)|false|none|none|
|mac_manufacturer|string|false|none|none|
|mac_vendors|string|false|none|none|
|macs|string(mac)|false|none|none|
|name|string|false|none|none|
|newest_mac_age|string|false|none|none|
|organization|string|false|none|none|
|os_product|string|false|none|none|
|os_vendor|string|false|none|none|
|os_version|string|false|none|none|
|service_count|integer(int64)|false|none|none|
|service_count_arp|integer(int64)|false|none|none|
|service_count_icmp|integer(int64)|false|none|none|
|service_count_tcp|integer(int64)|false|none|none|
|service_count_udp|integer(int64)|false|none|none|
|site|string|false|none|none|
|sys_class_name|string|false|none|none|
|tags|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_AssetTags">AssetTags</h2>
<!-- backwards compatibility -->
<a id="schemaassettags"></a>
<a id="schema_AssetTags"></a>
<a id="tocSassettags"></a>
<a id="tocsassettags"></a>

```json
{
  "tags": "ThisTag=Value -OldTag"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|string|true|none|none|

<h2 id="tocS_AssetTagsWithSearch">AssetTagsWithSearch</h2>
<!-- backwards compatibility -->
<a id="schemaassettagswithsearch"></a>
<a id="schema_AssetTagsWithSearch"></a>
<a id="tocSassettagswithsearch"></a>
<a id="tocsassettagswithsearch"></a>

```json
{
  "search": "alive:true and os:windows",
  "tags": "ThisTag=Value -OldTag"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|search|string|true|none|none|
|tags|string|true|none|none|

<h2 id="tocS_AssetsWithCheckpoint">AssetsWithCheckpoint</h2>
<!-- backwards compatibility -->
<a id="schemaassetswithcheckpoint"></a>
<a id="schema_AssetsWithCheckpoint"></a>
<a id="tocSassetswithcheckpoint"></a>
<a id="tocsassetswithcheckpoint"></a>

```json
{
  "assets": [
    {
      "addresses": [
        "192.168.0.1"
      ],
      "addresses_extra": [
        "192.168.100.1"
      ],
      "agent_name": "LAPTOP-F4P1R6",
      "alive": true,
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "comments": "File Server",
      "created_at": 1576300370,
      "credentials": {
        "property1": {
          "property1": true,
          "property2": true
        },
        "property2": {
          "property1": true,
          "property2": true
        }
      },
      "detected_by": "icmp",
      "domains": [
        "www"
      ],
      "first_seen": 1576300370,
      "hw": "Dell PowerEdge 2500",
      "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "last_seen": 1576300370,
      "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "lowest_rtt": 1,
      "lowest_ttl": 0,
      "mac_vendors": [
        "Dell"
      ],
      "macs": [
        "11:22:33:44:55:66"
      ],
      "names": [
        "www"
      ],
      "newest_mac": "11:22:33:44:55:66",
      "newest_mac_age": 1304035200000000000,
      "newest_mac_vendor": "Intel Corporate",
      "org_name": "Test Labs",
      "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "os": "Ubuntu Linux",
      "os_version": 18.04,
      "rtts": {},
      "service_count": 10,
      "service_count_arp": 1,
      "service_count_icmp": 1,
      "service_count_tcp": 7,
      "service_count_udp": 1,
      "service_ports_products": [
        "bind"
      ],
      "service_ports_protocols": [
        "ssh"
      ],
      "service_ports_tcp": [
        22
      ],
      "service_ports_udp": [
        53
      ],
      "services": {
        "property1": {
          "property1": "string",
          "property2": "string"
        },
        "property2": {
          "property1": "string",
          "property2": "string"
        }
      },
      "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
      "site_name": "Primary",
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "type": "Server",
      "updated_at": 1576300370
    }
  ],
  "since": 1576300370
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[[Asset](#schemaasset)]|true|none|none|
|since|integer(int64)|true|none|none|

<h2 id="tocS_AzureClientSecretCredentialFields">AzureClientSecretCredentialFields</h2>
<!-- backwards compatibility -->
<a id="schemaazureclientsecretcredentialfields"></a>
<a id="schema_AzureClientSecretCredentialFields"></a>
<a id="tocSazureclientsecretcredentialfields"></a>
<a id="tocsazureclientsecretcredentialfields"></a>

```json
{
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_secret": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "multi_subscription": "true",
  "subscription_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "tenant_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string(string)|true|none|none|
|client_secret|string(string)|true|none|none|
|multi_subscription|string(string)|false|none|none|
|subscription_id|string(string)|false|none|none|
|tenant_id|string(string)|true|none|none|

<h2 id="tocS_AzureUsernamePasswordCredentialFields">AzureUsernamePasswordCredentialFields</h2>
<!-- backwards compatibility -->
<a id="schemaazureusernamepasswordcredentialfields"></a>
<a id="schema_AzureUsernamePasswordCredentialFields"></a>
<a id="tocSazureusernamepasswordcredentialfields"></a>
<a id="tocsazureusernamepasswordcredentialfields"></a>

```json
{
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "password": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "tenant_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "username": "user@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string(string)|true|none|none|
|password|string(string)|true|none|none|
|tenant_id|string(string)|true|none|none|
|username|string(string)|true|none|none|

<h2 id="tocS_CensysCredentialFields">CensysCredentialFields</h2>
<!-- backwards compatibility -->
<a id="schemacensyscredentialfields"></a>
<a id="schema_CensysCredentialFields"></a>
<a id="tocScensyscredentialfields"></a>
<a id="tocscensyscredentialfields"></a>

```json
{
  "api_url": "https://search.censys.io",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_secret": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_url|string(string)|false|none|none|
|client_id|string(string)|true|none|none|
|client_secret|string(string)|true|none|none|

<h2 id="tocS_ComponentVersion">ComponentVersion</h2>
<!-- backwards compatibility -->
<a id="schemacomponentversion"></a>
<a id="schema_ComponentVersion"></a>
<a id="tocScomponentversion"></a>
<a id="tocscomponentversion"></a>

```json
{
  "id": "agent",
  "version": "1.0.0"
}
```

A component ID and version

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(string)|true|none|none|
|version|string(string)|true|none|none|

<h2 id="tocS_Credential">Credential</h2>
<!-- backwards compatibility -->
<a id="schemacredential"></a>
<a id="schema_Credential"></a>
<a id="tocScredential"></a>
<a id="tocscredential"></a>

```json
{
  "acl": {
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
  },
  "cidrs": [
    "10.0.0.47/32",
    "192.168.1.0/24"
  ],
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by_email": "user@example.com",
  "created_by_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "global": false,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_used_at": 1576300370,
  "last_used_by_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "credentials_name",
  "type": "miradore_api_key_v1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acl|object|false|none|none|
|cidrs|[string]|false|none|none|
|client_id|string(uuid)|false|none|none|
|created_at|integer(int64)|false|none|none|
|created_by_email|string(email)|false|none|none|
|created_by_id|string(uuid)|false|none|none|
|global|boolean|false|none|none|
|id|string(uuid)|true|none|none|
|last_used_at|integer(int64)|false|none|none|
|last_used_by_id|string(uuid)|false|none|none|
|name|string|false|none|none|
|type|string|false|none|The service the credentials are for.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|miradore_api_key_v1|
|type|aws_access_secret|
|type|crowdstrike_api_key|
|type|azure_client_secret|
|type|azure_username_password|
|type|censys_search_api_key|
|type|snmpv2_community|
|type|snmpv3_credential|
|type|vmware_username_password|

<h2 id="tocS_CredentialFields">CredentialFields</h2>
<!-- backwards compatibility -->
<a id="schemacredentialfields"></a>
<a id="schema_CredentialFields"></a>
<a id="tocScredentialfields"></a>
<a id="tocscredentialfields"></a>

```json
{
  "api_key": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "hostname": "yourcompanyinc.online.miradore.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[MiradoreCredentialFields](#schemamiradorecredentialfields)|false|none|none|
|*oneOf*|[AWSCredentialFields](#schemaawscredentialfields)|false|none|none|
|*oneOf*|[AzureClientSecretCredentialFields](#schemaazureclientsecretcredentialfields)|false|none|none|
|*oneOf*|[AzureUsernamePasswordCredentialFields](#schemaazureusernamepasswordcredentialfields)|false|none|none|
|*oneOf*|[CrowdstrikeCredentialFields](#schemacrowdstrikecredentialfields)|false|none|none|
|*oneOf*|[CensysCredentialFields](#schemacensyscredentialfields)|false|none|none|
|*oneOf*|[SNMPv2CommunitiesCredentialFields](#schemasnmpv2communitiescredentialfields)|false|none|none|
|*oneOf*|[SNMPv3CredentialFields](#schemasnmpv3credentialfields)|false|none|none|
|*oneOf*|[VMwareCredentialFields](#schemavmwarecredentialfields)|false|none|none|

<h2 id="tocS_CredentialOptions">CredentialOptions</h2>
<!-- backwards compatibility -->
<a id="schemacredentialoptions"></a>
<a id="schema_CredentialOptions"></a>
<a id="tocScredentialoptions"></a>
<a id="tocscredentialoptions"></a>

```json
{
  "acl": {
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user",
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa9": "none"
  },
  "cidrs": "10.0.0.17/32, 192.168.1.0/24",
  "global": false,
  "name": "credentials_name",
  "secret": {
    "api_key": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
    "hostname": "yourcompanyinc.online.miradore.com"
  },
  "type": "miradore_api_key_v1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acl|object|false|none|none|
|cidrs|string|false|none|none|
|global|boolean|false|none|none|
|name|string|false|none|none|
|secret|[CredentialFields](#schemacredentialfields)|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|miradore_api_key_v1|
|type|aws_access_secret|

<h2 id="tocS_CrowdstrikeCredentialFields">CrowdstrikeCredentialFields</h2>
<!-- backwards compatibility -->
<a id="schemacrowdstrikecredentialfields"></a>
<a id="schema_CrowdstrikeCredentialFields"></a>
<a id="tocScrowdstrikecredentialfields"></a>
<a id="tocscrowdstrikecredentialfields"></a>

```json
{
  "api_url": "example.crowdstrike.com",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_secret": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_url|string(string)|true|none|none|
|client_id|string(string)|true|none|none|
|client_secret|string(string)|true|none|none|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "action": "login",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "details": {},
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "processed_at": 0,
  "processor_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "source_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "source_name": "SiteName",
  "source_type": "api",
  "state": "SiteName",
  "success": true,
  "target_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "target_name": "SiteName",
  "target_type": "api"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|none|
|client_id|string(uuid)|false|none|none|
|created_at|integer(int64)|false|none|none|
|details|object|false|none|none|
|id|string(uuid)|false|none|none|
|organization_id|string(uuid)|false|none|none|
|processed_at|integer(int64)|false|none|none|
|processor_id|string(uuid)|false|none|none|
|site_id|string(uuid)|false|none|none|
|source_id|string(uuid)|false|none|none|
|source_name|string|false|none|none|
|source_type|string|false|none|none|
|state|string|false|none|none|
|success|boolean|false|none|none|
|target_id|string(uuid)|false|none|none|
|target_name|string|false|none|none|
|target_type|string|false|none|none|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "created_at": 1576300370,
  "created_by_email": "jsmith@example.com",
  "description": "Viewers Group",
  "expires_at": 1576300370,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "Viewers",
  "org_default_role": "admin",
  "org_roles": {},
  "role_summary": "all:viewer",
  "updated_at": 1576300370,
  "user_count": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer(int64)|false|none|none|
|created_by_email|string|false|none|none|
|description|string|false|none|none|
|expires_at|integer(int64)|false|none|none|
|id|string(uuid)|true|none|none|
|name|string|false|none|none|
|org_default_role|string|false|none|none|
|org_roles|object|false|none|none|
|role_summary|string|false|none|none|
|updated_at|integer(int64)|false|none|none|
|user_count|integer(int64)|false|none|none|

<h2 id="tocS_GroupMapping">GroupMapping</h2>
<!-- backwards compatibility -->
<a id="schemagroupmapping"></a>
<a id="schema_GroupMapping"></a>
<a id="tocSgroupmapping"></a>
<a id="tocsgroupmapping"></a>

```json
{
  "created_at": 1576300370,
  "created_by_email": "jsmith@example.com",
  "description": "Maps basic-attribute to Viewers Group",
  "group_id": "2b096711-4d28-4417-8635-64af4f62c1ae",
  "group_name": "Viewers Group",
  "id": "f6cfb91a-52ea-4a86-bf9a-5a891a26f52b",
  "sso_attribute": "basic-attribute",
  "sso_value": "basic-attribute-value",
  "updated_at": 1576300370
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer(int64)|false|none|none|
|created_by_email|string|false|none|none|
|description|string|false|none|none|
|group_id|string(uuid)|true|none|none|
|group_name|string|false|none|none|
|id|string(uuid)|true|none|none|
|sso_attribute|string|true|none|none|
|sso_value|string|true|none|none|
|updated_at|integer(int64)|false|none|none|

<h2 id="tocS_GroupPost">GroupPost</h2>
<!-- backwards compatibility -->
<a id="schemagrouppost"></a>
<a id="schema_GroupPost"></a>
<a id="tocSgrouppost"></a>
<a id="tocsgrouppost"></a>

```json
{
  "description": "Viewers Group",
  "expires_at": 1576300370,
  "name": "Viewers",
  "org_default_role": "admin",
  "org_roles": {
    "1a5e612e-4d64-45fe-aa3e-afba5cf3b9bf": "viewer",
    "fd6d6662-732b-4c4b-8331-051178994384": "admin"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|expires_at|integer(int64)|false|none|none|
|name|string|false|none|none|
|org_default_role|string|false|none|none|
|org_roles|object|false|none|none|

<h2 id="tocS_GroupPut">GroupPut</h2>
<!-- backwards compatibility -->
<a id="schemagroupput"></a>
<a id="schema_GroupPut"></a>
<a id="tocSgroupput"></a>
<a id="tocsgroupput"></a>

```json
{
  "description": "Viewers Group",
  "expires_at": 1576300370,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "Viewers",
  "org_default_role": "admin",
  "org_roles": {
    "1a5e612e-4d64-45fe-aa3e-afba5cf3b9bf": "viewer",
    "fd6d6662-732b-4c4b-8331-051178994384": "admin"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|expires_at|integer(int64)|false|none|none|
|id|string(uuid)|false|none|none|
|name|string|false|none|none|
|org_default_role|string|false|none|none|
|org_roles|object|false|none|none|

<h2 id="tocS_License">License</h2>
<!-- backwards compatibility -->
<a id="schemalicense"></a>
<a id="schema_License"></a>
<a id="tocSlicense"></a>
<a id="tocslicense"></a>

```json
{
  "activated_at": 1576300370,
  "address_city": "Austin",
  "address_country": "US",
  "address_postal": 78700,
  "address_region": "Texas",
  "address_street": "1111 Main St",
  "created_at": 1576300370,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "license_expiration": 1576300370,
  "license_live_asset_count": 1000,
  "license_max_assets": 1000000,
  "license_project_asset_count": 5000,
  "license_type": "platform",
  "name": "My Company",
  "partner": "Rumble",
  "phone": "512-555-5555",
  "settings": {},
  "sso_default_role": "viewer",
  "sso_domain": "rumble.run",
  "sso_login_issuer_url": "https://accounts.google.com/o/saml2?idpid=issuer",
  "sso_login_login_url": "https://accounts.google.com/o/saml2?idpid=login",
  "sso_login_logout_url": "https://accounts.google.com/o/saml2?idpid=logout",
  "sso_login_message": "Hello",
  "sso_mode": "required",
  "sso_type": "saml20",
  "subscription_cancel_at": 1576300370,
  "subscription_canceled_at": 1576300370,
  "subscription_period_end": 1576300370,
  "subscription_period_start": 1576300370,
  "updated_at": 1576300370,
  "via_reseller": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activated_at|integer(int64)|false|none|none|
|address_city|string|false|none|none|
|address_country|string|false|none|none|
|address_postal|string|false|none|none|
|address_region|string|false|none|none|
|address_street|string|false|none|none|
|created_at|integer(int64)|false|none|none|
|id|string(uuid)|false|none|none|
|license_expiration|integer(int64)|false|none|none|
|license_live_asset_count|integer(int64)|false|none|none|
|license_max_assets|integer(int64)|false|none|none|
|license_project_asset_count|integer(int64)|false|none|none|
|license_type|string|false|none|none|
|name|string|false|none|none|
|partner|string|false|none|none|
|phone|string|false|none|none|
|settings|object|false|none|none|
|sso_default_role|string|false|none|none|
|sso_domain|string|false|none|none|
|sso_login_issuer_url|string|false|none|none|
|sso_login_login_url|string|false|none|none|
|sso_login_logout_url|string|false|none|none|
|sso_login_message|string|false|none|none|
|sso_mode|string|false|none|none|
|sso_type|string|false|none|none|
|subscription_cancel_at|integer(int64)|false|none|none|
|subscription_canceled_at|integer(int64)|false|none|none|
|subscription_period_end|integer(int64)|false|none|none|
|subscription_period_start|integer(int64)|false|none|none|
|updated_at|integer(int64)|false|none|none|
|via_reseller|boolean|false|none|none|

<h2 id="tocS_MiradoreCredentialFields">MiradoreCredentialFields</h2>
<!-- backwards compatibility -->
<a id="schemamiradorecredentialfields"></a>
<a id="schema_MiradoreCredentialFields"></a>
<a id="tocSmiradorecredentialfields"></a>
<a id="tocsmiradorecredentialfields"></a>

```json
{
  "api_key": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "hostname": "yourcompanyinc.online.miradore.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string(string)|true|none|none|
|hostname|string(string)|true|none|none|

<h2 id="tocS_OrgOptions">OrgOptions</h2>
<!-- backwards compatibility -->
<a id="schemaorgoptions"></a>
<a id="schema_OrgOptions"></a>
<a id="tocSorgoptions"></a>
<a id="tocsorgoptions"></a>

```json
{
  "description": "Wobbly Widgets, Inc.",
  "expiration_assets_offline": "365",
  "expiration_assets_stale": "365",
  "expiration_scans": "365",
  "export_token": "ETXXXXXXXXXXXXXXXX",
  "name": "My Organization",
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "project": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|expiration_assets_offline|string(number)|false|none|none|
|expiration_assets_stale|string(number)|false|none|none|
|expiration_scans|string(number)|false|none|none|
|export_token|string|false|none|none|
|name|string|false|none|none|
|parent_id|string(uuid)|false|none|none|
|project|string(boolean)|false|none|none|

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "asset_count": 100,
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "deactivated_at": 0,
  "description": "All subdivisions of my company",
  "download_token": "DT11226D9EEEA2B035D42569585900",
  "download_token_created_at": 1576300370,
  "expiration_assets_offline": 365,
  "expiration_assets_stale": 365,
  "expiration_scans": 365,
  "export_token": "ET11226D9EEEA2B035D42569585900",
  "export_token_counter": 0,
  "export_token_created_at": 1576300370,
  "export_token_last_used_at": 0,
  "export_token_last_used_by": "127.0.0.1",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "inactive": false,
  "name": "My Company",
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "permanent": true,
  "project": false,
  "service_count": 10,
  "service_count_arp": 1,
  "service_count_icmp": 1,
  "service_count_tcp": 7,
  "service_count_udp": 1,
  "updated_at": 1576300370
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_count|integer(int64)|false|none|none|
|client_id|string(uuid)|false|none|none|
|created_at|integer(int64)|false|none|none|
|deactivated_at|integer(int64)|false|none|none|
|description|string|false|none|none|
|download_token|string|false|none|none|
|download_token_created_at|integer(int64)|false|none|none|
|expiration_assets_offline|integer(int64)|false|none|none|
|expiration_assets_stale|integer(int64)|false|none|none|
|expiration_scans|integer(int64)|false|none|none|
|export_token|string|false|none|none|
|export_token_counter|integer(int64)|false|none|none|
|export_token_created_at|integer(int64)|false|none|none|
|export_token_last_used_at|integer(int64)|false|none|none|
|export_token_last_used_by|string|false|none|none|
|id|string(uuid)|true|none|none|
|inactive|boolean|false|none|none|
|name|string|true|none|none|
|parent_id|string(uuid)|false|none|none|
|permanent|boolean|false|none|none|
|project|boolean|false|none|none|
|service_count|integer(int64)|false|none|none|
|service_count_arp|integer(int64)|false|none|none|
|service_count_icmp|integer(int64)|false|none|none|
|service_count_tcp|integer(int64)|false|none|none|
|service_count_udp|integer(int64)|false|none|none|
|updated_at|integer(int64)|false|none|none|

<h2 id="tocS_SNMPv2CommunitiesCredentialFields">SNMPv2CommunitiesCredentialFields</h2>
<!-- backwards compatibility -->
<a id="schemasnmpv2communitiescredentialfields"></a>
<a id="schema_SNMPv2CommunitiesCredentialFields"></a>
<a id="tocSsnmpv2communitiescredentialfields"></a>
<a id="tocssnmpv2communitiescredentialfields"></a>

```json
{
  "community": "public,private"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|community|string(string)|true|none|none|

<h2 id="tocS_SNMPv3CredentialFields">SNMPv3CredentialFields</h2>
<!-- backwards compatibility -->
<a id="schemasnmpv3credentialfields"></a>
<a id="schema_SNMPv3CredentialFields"></a>
<a id="tocSsnmpv3credentialfields"></a>
<a id="tocssnmpv3credentialfields"></a>

```json
{
  "auth-passphrase": "authpass",
  "auth-protocol": "sha",
  "context": "vlan-32",
  "privacy-passphrase": "privpass",
  "privacy-protocol": "aes",
  "username": "user"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth-passphrase|string(string)|false|none|none|
|auth-protocol|string(string)|false|none|none|
|context|string(string)|false|none|none|
|privacy-passphrase|string(string)|false|none|none|
|privacy-protocol|string(string)|false|none|none|
|username|string(string)|true|none|none|

<h2 id="tocS_ScanOptions">ScanOptions</h2>
<!-- backwards compatibility -->
<a id="schemascanoptions"></a>
<a id="schema_ScanOptions"></a>
<a id="tocSscanoptions"></a>
<a id="tocsscanoptions"></a>

```json
{
  "agent": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "excludes": "string",
  "host-ping": "false",
  "max-attempts": "3",
  "max-group-size": "4096",
  "max-host-rate": "100",
  "max-sockets": "500",
  "max-ttl": "255",
  "nameservers": "8.8.8.8",
  "passes": "3",
  "probes": "arp,bacnet,connect,dns,echo,ike,ipmi,mdns,memcache,mssql,natpmp,netbios,pca,rdns,rpcbind,sip,snmp,ssdp,syn,ubnt,wlan-list,wsd",
  "rate": "10000",
  "scan-description": "Scan of Wireless",
  "scan-frequency": "once",
  "scan-grace-period": "4",
  "scan-name": "My Scan",
  "scan-start": "0",
  "scan-tags": "owner=IT location=Texas",
  "screenshots": "true",
  "subnet-ping": "true",
  "subnet-ping-net-size": "256",
  "subnet-ping-sample-rate": "3",
  "targets": "defaults",
  "tcp-excludes": "9500",
  "tcp-ports": "1-1000,5000-6000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent|string(uuid)|false|none|none|
|excludes|string|false|none|none|
|host-ping|string|false|none|none|
|max-attempts|string|false|none|none|
|max-group-size|string|false|none|none|
|max-host-rate|string|false|none|none|
|max-sockets|string|false|none|none|
|max-ttl|string|false|none|none|
|nameservers|string|false|none|none|
|passes|string|false|none|none|
|probes|string|false|none|Optional probe list, otherwise all probes are used|
|rate|string|false|none|none|
|scan-description|string|false|none|none|
|scan-frequency|string|false|none|none|
|scan-grace-period|string|false|none|none|
|scan-name|string|false|none|none|
|scan-start|string(unixtime)|false|none|none|
|scan-tags|string|false|none|none|
|screenshots|string|false|none|none|
|subnet-ping|string|false|none|none|
|subnet-ping-net-size|string|false|none|none|
|subnet-ping-sample-rate|string|false|none|none|
|targets|string|true|none|none|
|tcp-excludes|string|false|none|none|
|tcp-ports|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scan-frequency|once|
|scan-frequency|hourly|
|scan-frequency|daily|
|scan-frequency|weekly|
|scan-frequency|monthly|
|scan-frequency|continuous|

<h2 id="tocS_ScanTemplate">ScanTemplate</h2>
<!-- backwards compatibility -->
<a id="schemascantemplate"></a>
<a id="schema_ScanTemplate"></a>
<a id="tocSscantemplate"></a>
<a id="tocsscantemplate"></a>

```json
{
  "acl": {
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
  },
  "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "description": "My Scan Template",
  "error": "agent unavailable",
  "global": false,
  "grace_period": "4",
  "hidden": false,
  "hosted_zone_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "linked_task_count": 1,
  "name": "My Scan Template",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur": false,
  "recur_frequency": "hour",
  "recur_last": 1576300370,
  "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur_next": 1576300370,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "size_data": 0,
  "size_results": 0,
  "size_site": 0,
  "source_id": "1",
  "start_time": 1576300370,
  "stats": {},
  "status": "processed",
  "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "type": "scan",
  "updated_at": 1576300370
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acl|object|true|none|none|
|agent_id|string(uuid)|false|none|none|
|client_id|string(uuid)|false|none|none|
|created_at|integer(int64)|false|none|none|
|created_by|string(email)|false|none|none|
|created_by_user_id|string(uuid)|false|none|none|
|cruncher_id|string(uuid)|false|none|none|
|description|string|false|none|none|
|error|string|false|none|none|
|global|boolean|true|none|none|
|grace_period|string|false|none|none|
|hidden|boolean|false|none|none|
|hosted_zone_id|string(uuid)|false|none|none|
|id|string(uuid)|true|none|none|
|linked_task_count|integer(int32)|false|none|none|
|name|string|false|none|none|
|organization_id|string(uuid)|false|none|none|
|params|object|false|none|none|
|parent_id|string(uuid)|false|none|none|
|recur|boolean|false|none|none|
|recur_frequency|string|false|none|none|
|recur_last|integer(int64)|false|none|none|
|recur_last_task_id|string(uuid)|false|none|none|
|recur_next|integer(int64)|false|none|none|
|site_id|string(uuid)|false|none|none|
|size_data|integer(int64)|false|none|none|
|size_results|integer(int64)|false|none|none|
|size_site|integer(int64)|false|none|none|
|source_id|string|false|none|none|
|start_time|integer(int64)|false|none|none|
|stats|object|false|none|none|
|status|string|false|none|none|
|template_id|string(uuid)|false|none|none|
|type|string|false|none|none|
|updated_at|integer(int64)|false|none|none|

<h2 id="tocS_ScanTemplateOptions">ScanTemplateOptions</h2>
<!-- backwards compatibility -->
<a id="schemascantemplateoptions"></a>
<a id="schema_ScanTemplateOptions"></a>
<a id="tocSscantemplateoptions"></a>
<a id="tocsscantemplateoptions"></a>

```json
{
  "acl": {
    "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8": "user"
  },
  "description": "My Scan Template",
  "global": false,
  "name": "My Scan Template",
  "params": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acl|object|true|none|none|
|description|string|false|none|none|
|global|boolean|true|none|none|
|name|string|true|none|none|
|params|object|false|none|none|

<h2 id="tocS_Search">Search</h2>
<!-- backwards compatibility -->
<a id="schemasearch"></a>
<a id="schema_Search"></a>
<a id="tocSsearch"></a>
<a id="tocssearch"></a>

```json
{
  "search": "alive:true and os:windows"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|search|string|true|none|none|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "addresses": [
    "192.168.0.1"
  ],
  "addresses_extra": [
    "192.168.100.1"
  ],
  "agent_name": "LAPTOP-F4P1R6",
  "alive": true,
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "comments": "File Server",
  "created_at": 1576300370,
  "credentials": {
    "property1": {
      "property1": true,
      "property2": true
    },
    "property2": {
      "property1": true,
      "property2": true
    }
  },
  "detected_by": "icmp",
  "domains": [
    "CORPNET"
  ],
  "first_seen": 1576300370,
  "hw": "Dell PowerEdge 2500",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_seen": 1576300370,
  "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "lowest_rtt": 1,
  "lowest_ttl": 0,
  "mac_vendors": [
    "Dell"
  ],
  "macs": [
    "11:22:33:44:55:66"
  ],
  "names": [
    "www"
  ],
  "newest_mac": "11:22:33:44:55:66",
  "newest_mac_age": 1304035200000000000,
  "newest_mac_vendor": "Intel Corporate",
  "org_name": "Test Labs",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "os": "Ubuntu Linux",
  "os_version": 18.04,
  "rtts": {},
  "service_address": "192.168.0.1",
  "service_asset_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "service_count": 10,
  "service_count_arp": 1,
  "service_count_icmp": 1,
  "service_count_tcp": 7,
  "service_count_udp": 1,
  "service_created_at": 1576300370,
  "service_data": {
    "property1": "string",
    "property2": "string"
  },
  "service_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "service_link": "http://192.168.0.1:80/",
  "service_port": 80,
  "service_ports_products": [
    "bind"
  ],
  "service_ports_protocols": [
    "ssh"
  ],
  "service_ports_tcp": [
    22
  ],
  "service_ports_udp": [
    53
  ],
  "service_protocol": "http tls",
  "service_screenshot_link": "string",
  "service_summary": "Login Page",
  "service_transport": "tcp",
  "service_updated_at": 1576300370,
  "service_vhost": "www",
  "services": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "site_name": "Primary",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "Server",
  "updated_at": 1576300370
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[string]|false|none|none|
|addresses_extra|[string]|false|none|none|
|agent_name|string|false|none|none|
|alive|boolean(boolean)|false|none|none|
|attributes|object|false|none|none|
|comments|string|false|none|none|
|created_at|integer(int64)|false|none|none|
|credentials|object|false|none|none|
|detected_by|string|false|none|none|
|domains|[string]|false|none|none|
|first_seen|integer(int64)|false|none|none|
|hw|string|false|none|none|
|id|string(uuid)|true|none|none|
|last_agent_id|string(uuid)|false|none|none|
|last_seen|integer(int64)|false|none|none|
|last_task_id|string(uuid)|false|none|none|
|lowest_rtt|integer(int64)|false|none|none|
|lowest_ttl|integer(int64)|false|none|none|
|mac_vendors|[string]|false|none|none|
|macs|[string(mac)]|false|none|none|
|names|[string]|false|none|none|
|newest_mac|string(mac)|false|none|none|
|newest_mac_age|integer(int64)|false|none|none|
|newest_mac_vendor|string|false|none|none|
|org_name|string|false|none|none|
|organization_id|string(uuid)|false|none|none|
|os|string|false|none|none|
|os_version|string|false|none|none|
|rtts|object|false|none|none|
|service_address|string|false|none|none|
|service_asset_id|string(uuid)|false|none|none|
|service_count|integer(int64)|false|none|none|
|service_count_arp|integer(int64)|false|none|none|
|service_count_icmp|integer(int64)|false|none|none|
|service_count_tcp|integer(int64)|false|none|none|
|service_count_udp|integer(int64)|false|none|none|
|service_created_at|integer(int64)|false|none|none|
|service_data|object|false|none|none|
|service_id|string(uuid)|true|none|none|
|service_link|string|false|none|none|
|service_port|string(port)|false|none|none|
|service_ports_products|[string]|false|none|none|
|service_ports_protocols|[string]|false|none|none|
|service_ports_tcp|[string(port)]|false|none|none|
|service_ports_udp|[string(port)]|false|none|none|
|service_protocol|string|false|none|none|
|service_screenshot_link|string|false|none|none|
|service_summary|string|false|none|none|
|service_transport|string|false|none|none|
|service_updated_at|integer(int64)|false|none|none|
|service_vhost|string|false|none|none|
|services|object|false|none|none|
|site_id|string(uuid)|false|none|none|
|site_name|string|false|none|none|
|tags|object|false|none|none|
|type|string|false|none|none|
|updated_at|integer(int64)|false|none|none|

<h2 id="tocS_Site">Site</h2>
<!-- backwards compatibility -->
<a id="schemasite"></a>
<a id="schema_Site"></a>
<a id="tocSsite"></a>
<a id="tocssite"></a>

```json
{
  "created_at": 1576300370,
  "description": "Headquarters",
  "excludes": "192.168.0.5",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "Primary",
  "permanent": true,
  "scope": "192.168.0.0/24",
  "subnets": {},
  "updated_at": 1576300370
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer(int64)|false|none|none|
|description|string|false|none|none|
|excludes|string|false|none|none|
|id|string(uuid)|true|none|none|
|name|string|true|none|none|
|permanent|boolean|false|none|none|
|scope|string|false|none|none|
|subnets|object|false|none|none|
|updated_at|integer(int64)|false|none|none|

<h2 id="tocS_SiteOptions">SiteOptions</h2>
<!-- backwards compatibility -->
<a id="schemasiteoptions"></a>
<a id="schema_SiteOptions"></a>
<a id="tocSsiteoptions"></a>
<a id="tocssiteoptions"></a>

```json
{
  "description": "County Office",
  "excludes": "192.168.10.1",
  "name": "New Site",
  "scope": "192.168.10.0/24"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|excludes|string|false|none|none|
|name|string|true|none|none|
|scope|string|false|none|none|

<h2 id="tocS_StatusMessage">StatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemastatusmessage"></a>
<a id="schema_StatusMessage"></a>
<a id="tocSstatusmessage"></a>
<a id="tocsstatusmessage"></a>

```json
{}
```

<h2 id="tocS_Task">Task</h2>
<!-- backwards compatibility -->
<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "created_by": "user@example.com",
  "created_by_user_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "cruncher_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "description": "Scan the headquarters hourly",
  "error": "agent unavailable",
  "hidden": false,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "name": "Hourly Scan",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "parent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur": false,
  "recur_frequency": "hour",
  "recur_last": 1576300370,
  "recur_last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "recur_next": 1576300370,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "start_time": 1576300370,
  "stats": {},
  "status": "processed",
  "template_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "type": "scan",
  "updated_at": 1576300370
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent_id|string(uuid)|false|none|none|
|client_id|string(uuid)|false|none|none|
|created_at|integer(int64)|false|none|none|
|created_by|string(email)|false|none|none|
|created_by_user_id|string(uuid)|false|none|none|
|cruncher_id|string(uuid)|false|none|none|
|description|string|false|none|none|
|error|string|false|none|none|
|hidden|boolean|false|none|none|
|id|string(uuid)|true|none|none|
|name|string|false|none|none|
|organization_id|string(uuid)|false|none|none|
|params|object|false|none|none|
|parent_id|string(uuid)|false|none|none|
|recur|boolean|false|none|none|
|recur_frequency|string|false|none|none|
|recur_last|integer(int64)|false|none|none|
|recur_last_task_id|string(uuid)|false|none|none|
|recur_next|integer(int64)|false|none|none|
|site_id|string(uuid)|false|none|none|
|start_time|integer(int64)|false|none|none|
|stats|object|false|none|none|
|status|string|false|none|none|
|template_id|string(uuid)|false|none|none|
|type|string|false|none|none|
|updated_at|integer(int64)|false|none|none|

<h2 id="tocS_URL">URL</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_URL"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
{
  "id": "https://www.rumble.run/docs/"
}
```

A URL to a resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(url)|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "client_admin": true,
  "client_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "created_at": 1576300370,
  "email": "jsmith@example.com",
  "first_name": "James",
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "invite_token_expiration": 1576300370,
  "last_login_at": 1576300370,
  "last_login_ip": "192.168.0.1",
  "last_login_ua": "curl/1.0",
  "last_name": "Smith",
  "login_failures": 0,
  "org_default_role": "admin",
  "org_roles": {},
  "reset_token_expiration": 1576300370,
  "sso_only": false,
  "updated_at": 1576300370
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_admin|boolean|false|none|none|
|client_id|string(uuid)|false|none|none|
|created_at|integer(int64)|false|none|none|
|email|string|false|none|none|
|first_name|string|false|none|none|
|id|string(uuid)|true|none|none|
|invite_token_expiration|integer(int64)|false|none|none|
|last_login_at|integer(int64)|false|none|none|
|last_login_ip|string|false|none|none|
|last_login_ua|string|false|none|none|
|last_name|string|false|none|none|
|login_failures|integer(int64)|false|none|none|
|org_default_role|string|false|none|none|
|org_roles|object|false|none|none|
|reset_token_expiration|integer(int64)|false|none|none|
|sso_only|boolean|false|none|none|
|updated_at|integer(int64)|false|none|none|

<h2 id="tocS_UserInviteOptions">UserInviteOptions</h2>
<!-- backwards compatibility -->
<a id="schemauserinviteoptions"></a>
<a id="schema_UserInviteOptions"></a>
<a id="tocSuserinviteoptions"></a>
<a id="tocsuserinviteoptions"></a>

```json
{
  "client_admin": true,
  "email": "jsmith@example.com",
  "first_name": "James",
  "last_name": "Smith",
  "message": "You have been invited to the Rumble Network Discovery platform",
  "org_default_role": "admin",
  "org_roles": {},
  "subject": "Welcome to Rumble"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_admin|boolean|false|none|none|
|email|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|message|string|false|none|none|
|org_default_role|string|false|none|none|
|org_roles|object|false|none|none|
|subject|string|false|none|none|

<h2 id="tocS_UserOptions">UserOptions</h2>
<!-- backwards compatibility -->
<a id="schemauseroptions"></a>
<a id="schema_UserOptions"></a>
<a id="tocSuseroptions"></a>
<a id="tocsuseroptions"></a>

```json
{
  "client_admin": true,
  "email": "jsmith@example.com",
  "first_name": "James",
  "last_name": "Smith",
  "org_default_role": "admin",
  "org_roles": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_admin|boolean|false|none|none|
|email|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|org_default_role|string|false|none|none|
|org_roles|object|false|none|none|

<h2 id="tocS_VMwareCredentialFields">VMwareCredentialFields</h2>
<!-- backwards compatibility -->
<a id="schemavmwarecredentialfields"></a>
<a id="schema_VMwareCredentialFields"></a>
<a id="tocSvmwarecredentialfields"></a>
<a id="tocsvmwarecredentialfields"></a>

```json
{
  "insecure": "true",
  "password": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "thumbprints": "IP=SHA256:B64HASH",
  "username": "user"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|insecure|string(string)|false|none|none|
|password|string(string)|true|none|none|
|thumbprints|string(string)|false|none|none|
|username|string(string)|true|none|none|

<h2 id="tocS_Wireless">Wireless</h2>
<!-- backwards compatibility -->
<a id="schemawireless"></a>
<a id="schema_Wireless"></a>
<a id="tocSwireless"></a>
<a id="tocswireless"></a>

```json
{
  "agent_name": "LAPTOP-F4P1R6",
  "authentication": "wpa2-psk",
  "bssid": "11:22:33:44:55:66",
  "channels": "11, 158+1",
  "created_at": 1576300370,
  "data": {
    "property1": "string",
    "property2": "string"
  },
  "encryption": "aes",
  "essid": "Free WiFi",
  "family": 223344,
  "id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "interface": "wlan0",
  "last_agent_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "last_seen": 1576300370,
  "last_task_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "org_name": "Test Labs",
  "organization_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "signal": 99,
  "site_id": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
  "site_name": "Primary",
  "type": "infrastructure",
  "vendor": "Ubiquiti Networks"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent_name|string|false|none|none|
|authentication|string|false|none|none|
|bssid|string(mac)|false|none|none|
|channels|string|false|none|none|
|created_at|integer(int64)|false|none|none|
|data|object|false|none|none|
|encryption|string|false|none|none|
|essid|string(uuid)|false|none|none|
|family|string|false|none|none|
|id|string(uuid)|true|none|none|
|interface|string|false|none|none|
|last_agent_id|string(uuid)|false|none|none|
|last_seen|integer(int64)|false|none|none|
|last_task_id|string(uuid)|false|none|none|
|org_name|string|false|none|none|
|organization_id|string(uuid)|false|none|none|
|signal|integer|false|none|none|
|site_id|string(uuid)|false|none|none|
|site_name|string|false|none|none|
|type|string|false|none|none|
|vendor|string|false|none|none|
