<h1 id="vrealize-network-insight-api-reference">vRealize Network Insight API Reference v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

vRealize Network Insight API Reference

Base URLs:

* <a href="http://vmware.local">http://vmware.local</a>

* <a href="https://vrni.example.com/api/ni">https://vrni.example.com/api/ni</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **Authorization**, in: header. API Key - NetworkInsight {token}

<h1 id="vrealize-network-insight-api-reference-authentication">Authentication</h1>

Authentication APIs

## Create an auth token

<a id="opIdcreate"></a>

> Code samples

```bash
curl https://example.com/auth/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "domain": {
      "domain_type": "LDAP",
      "value": "example.com"
    },
    "password": "password",
    "username": "admin@vrni.com"
  }'
```

`POST /auth/token`

<html><body> vRealize Network Insight supports token based authentication.Tokens are non-modifiable identifiers returned by the system when the user has successfully authenticated using valid credentials. Token expires after expiry time returned in the response. All API requests must provide the auth token in Authorization header in following format.<br> Authorization &#58; NetworkInsight {token} <br> If a token is invalid or expired, 401-Unauthorized error gets returned in the response of the API request. </body></html>

> Body parameter

```json
{
  "domain": {
    "domain_type": "LDAP",
    "value": "example.com"
  },
  "password": "password",
  "username": "admin@vrni.com"
}
```

<h3 id="create-an-auth-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserCredential](#schemausercredential)|true|User Credentials|
|» domain|body|[Domain](#schemadomain)|false|none|
|» password|body|string|false|none|
|» username|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "expiry": 0,
  "token": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="create-an-auth-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Token](#schematoken)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an auth token.

<a id="opIddelete"></a>

> Code samples

```bash
curl https://example.com/auth/token \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /auth/token`

Deletes the auth token provided in Authorization header.
Deleting an expired or invalid token will result in 401 Unauthorized error.

<h3 id="delete-an-auth-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="vrealize-network-insight-api-reference-data-sources">Data Sources</h1>

Data source APIs

## List arista switch data sources

<a id="opIdlistAristaSwitches"></a>

> Code samples

```bash
curl https://example.com/data-sources/arista-switches \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/arista-switches`

List arista switch data sources

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "CiscoSwitchDataSource"
    }
  ],
  "total_count": 1
}
```

<h3 id="list-arista-switch-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DataSourceListResponse](#schemadatasourcelistresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create an arista switch data source

<a id="opIdaddAristaSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/arista-switches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`POST /data-sources/arista-switches`

Add arista switch data source

> Body parameter

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="create-an-arista-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AristaSwitchDataSourceRequest](#schemaaristaswitchdatasourcerequest)|false|Add a cisco switch as datasource|
|» enabled|body|boolean|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|true|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|true|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

> Example responses

> 201 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="create-an-arista-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[AristaSwitchDataSource](#schemaaristaswitchdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show arista switch data source details

<a id="opIdgetAristaSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/arista-switches/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/arista-switches/{id}`

Show arista switch data source details

<h3 id="show-arista-switch-data-source-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="show-arista-switch-data-source-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AristaSwitchDataSource](#schemaaristaswitchdatasource)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update an arista switch data source

<a id="opIdupdateAristaSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/arista-switches/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "entity_id": "string",
    "entity_type": "CiscoSwitchDataSource",
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`PUT /data-sources/arista-switches/{id}`

Update an switch data source

> Body parameter

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="update-an-arista-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[AristaSwitchDataSource](#schemaaristaswitchdatasource)|false|none|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-an-arista-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AristaSwitchDataSource](#schemaaristaswitchdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete an arista switch data source

<a id="opIddeleteAristaSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/arista-switches/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /data-sources/arista-switches/{id}`

Delete an arista switch data source

<h3 id="delete-an-arista-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="delete-an-arista-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Disable an arista switch data source

<a id="opIddisableAristaSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/arista-switches/string/disable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/arista-switches/{id}/disable`

Disable an arista switch data source

<h3 id="disable-an-arista-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="disable-an-arista-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable an arista switch data source

<a id="opIdenableAristaSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/arista-switches/string/enable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/arista-switches/{id}/enable`

Enable an arista switch data source

<h3 id="enable-an-arista-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="enable-an-arista-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show snmp config for arista switch data source

<a id="opIdgetAristaSwitchSnmpConfig"></a>

> Code samples

```bash
curl https://example.com/data-sources/arista-switches/string/snmp-config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/arista-switches/{id}/snmp-config`

Show snmp config for arista switch data source

<h3 id="show-snmp-config-for-arista-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

<h3 id="show-snmp-config-for-arista-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SNMPConfig](#schemasnmpconfig)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update snmp config for arista switch data source

<a id="opIdupdateAristaSwitchSnmpConfig"></a>

> Code samples

```bash
curl https://example.com/data-sources/arista-switches/string/snmp-config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "config_snmp_2c": {
      "community_string": "string"
    },
    "config_snmp_3": {
      "authentication_password": "string",
      "authentication_type": "NO_AUTH",
      "context_name": "string",
      "privacy_password": "string",
      "privacy_type": "AES",
      "username": "string"
    },
    "snmp_enabled": false,
    "snmp_version": "v2c"
  }'
```

`PUT /data-sources/arista-switches/{id}/snmp-config`

Update snmp config for arista switch data source

> Body parameter

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

<h3 id="update-snmp-config-for-arista-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[SNMPConfig](#schemasnmpconfig)|false|none|
|» config_snmp_2c|body|[SNMP2cConfig](#schemasnmp2cconfig)|false|none|
|» config_snmp_3|body|[SNMP3Config](#schemasnmp3config)|false|none|
|» snmp_enabled|body|boolean|false|none|
|» snmp_version|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» snmp_version|v2c|
|» snmp_version|v3|

> Example responses

> 200 Response

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-snmp-config-for-arista-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SNMPConfig](#schemasnmpconfig)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List brocade switch data sources

<a id="opIdlistBrocadeSwitches"></a>

> Code samples

```bash
curl https://example.com/data-sources/brocade-switches \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/brocade-switches`

List brocade switch data sources

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "CiscoSwitchDataSource"
    }
  ],
  "total_count": 1
}
```

<h3 id="list-brocade-switch-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DataSourceListResponse](#schemadatasourcelistresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a brocade switch data source

<a id="opIdaddBrocadeSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/brocade-switches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`POST /data-sources/brocade-switches`

Add brocade switch as a data source

> Body parameter

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="create-a-brocade-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BrocadeSwitchDataSourceRequest](#schemabrocadeswitchdatasourcerequest)|false|none|
|» enabled|body|boolean|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|true|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|true|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

> Example responses

> 201 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="create-a-brocade-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[BrocadeSwitchDataSource](#schemabrocadeswitchdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show brocade switch data source details

<a id="opIdgetBrocadeSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/brocade-switches/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/brocade-switches/{id}`

Show brocade switch data source details

<h3 id="show-brocade-switch-data-source-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="show-brocade-switch-data-source-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BrocadeSwitchDataSource](#schemabrocadeswitchdatasource)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a brocade switch data source

<a id="opIdupdateBrocadeSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/brocade-switches/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "entity_id": "string",
    "entity_type": "CiscoSwitchDataSource",
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`PUT /data-sources/brocade-switches/{id}`

Update a brocade switch data source. Only credentials, nickname and notes can be updated.

> Body parameter

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="update-a-brocade-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[BrocadeSwitchDataSource](#schemabrocadeswitchdatasource)|false|none|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-a-brocade-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BrocadeSwitchDataSource](#schemabrocadeswitchdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a brocade switch data source

<a id="opIddeleteBrocadeSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/brocade-switches/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /data-sources/brocade-switches/{id}`

Delete a brocade switch data source

<h3 id="delete-a-brocade-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="delete-a-brocade-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Disable a brocade switch data source

<a id="opIddisableBrocadeSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/brocade-switches/string/disable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/brocade-switches/{id}/disable`

<h3 id="disable-a-brocade-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="disable-a-brocade-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable a brocade switch data source

<a id="opIdenableBrocadeSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/brocade-switches/string/enable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/brocade-switches/{id}/enable`

<h3 id="enable-a-brocade-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="enable-a-brocade-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show snmp config for brocade switch data source

<a id="opIdgetBrocadeSwitchSnmpConfig"></a>

> Code samples

```bash
curl https://example.com/data-sources/brocade-switches/string/snmp-config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/brocade-switches/{id}/snmp-config`

Show snmp config for brocade switch data source

<h3 id="show-snmp-config-for-brocade-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

<h3 id="show-snmp-config-for-brocade-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SNMPConfig](#schemasnmpconfig)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update snmp config for brocade switch data source

<a id="opIdupdateBrocadeSwitchSnmpConfig"></a>

> Code samples

```bash
curl https://example.com/data-sources/brocade-switches/string/snmp-config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "config_snmp_2c": {
      "community_string": "string"
    },
    "config_snmp_3": {
      "authentication_password": "string",
      "authentication_type": "NO_AUTH",
      "context_name": "string",
      "privacy_password": "string",
      "privacy_type": "AES",
      "username": "string"
    },
    "snmp_enabled": false,
    "snmp_version": "v2c"
  }'
```

`PUT /data-sources/brocade-switches/{id}/snmp-config`

Update snmp config for brocade switch data source

> Body parameter

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

<h3 id="update-snmp-config-for-brocade-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[SNMPConfig](#schemasnmpconfig)|false|none|
|» config_snmp_2c|body|[SNMP2cConfig](#schemasnmp2cconfig)|false|none|
|» config_snmp_3|body|[SNMP3Config](#schemasnmp3config)|false|none|
|» snmp_enabled|body|boolean|false|none|
|» snmp_version|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» snmp_version|v2c|
|» snmp_version|v3|

> Example responses

> 200 Response

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-snmp-config-for-brocade-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SNMPConfig](#schemasnmpconfig)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List checkpoint firewall data sources

<a id="opIdlistCheckpointFirewalls"></a>

> Code samples

```bash
curl https://example.com/data-sources/checkpoint-firewalls \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/checkpoint-firewalls`

List checkpoint firewall data sources

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "CiscoSwitchDataSource"
    }
  ],
  "total_count": 1
}
```

<h3 id="list-checkpoint-firewall-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DataSourceListResponse](#schemadatasourcelistresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a checkpoint firewall

<a id="opIdaddCheckpointFirewall"></a>

> Code samples

```bash
curl https://example.com/data-sources/checkpoint-firewalls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`POST /data-sources/checkpoint-firewalls`

Add checkpoint firewall as data source

> Body parameter

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="create-a-checkpoint-firewall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CheckpointFirewallDataSourceRequest](#schemacheckpointfirewalldatasourcerequest)|false|Add a vSec Checkpoint firewall as data source|
|» enabled|body|boolean|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|true|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|true|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

> Example responses

> 201 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="create-a-checkpoint-firewall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CheckpointFirewallDataSource](#schemacheckpointfirewalldatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show checkpoint firewall data source details

<a id="opIdgetCheckpointFirewall"></a>

> Code samples

```bash
curl https://example.com/data-sources/checkpoint-firewalls/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/checkpoint-firewalls/{id}`

Show checkpoint firewall data source details

<h3 id="show-checkpoint-firewall-data-source-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="show-checkpoint-firewall-data-source-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CheckpointFirewallDataSource](#schemacheckpointfirewalldatasource)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a checkpoint firewall data source

<a id="opIdupdateCheckpointFirewall"></a>

> Code samples

```bash
curl https://example.com/data-sources/checkpoint-firewalls/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "entity_id": "string",
    "entity_type": "CiscoSwitchDataSource",
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`PUT /data-sources/checkpoint-firewalls/{id}`

Update a checkpoint firewall data source

> Body parameter

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="update-a-checkpoint-firewall-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[CheckpointFirewallDataSource](#schemacheckpointfirewalldatasource)|false|none|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-a-checkpoint-firewall-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CheckpointFirewallDataSource](#schemacheckpointfirewalldatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a checkpoint firewall data source

<a id="opIddeleteCheckpointFirewall"></a>

> Code samples

```bash
curl https://example.com/data-sources/checkpoint-firewalls/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /data-sources/checkpoint-firewalls/{id}`

Delete a checkpoint firewall data source

<h3 id="delete-a-checkpoint-firewall-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="delete-a-checkpoint-firewall-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Disable a checkpoint firewall data source

<a id="opIddisableCheckpointFirewall"></a>

> Code samples

```bash
curl https://example.com/data-sources/checkpoint-firewalls/string/disable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/checkpoint-firewalls/{id}/disable`

Disable a checkpoint firewall data source

<h3 id="disable-a-checkpoint-firewall-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="disable-a-checkpoint-firewall-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable a checkpoint firewall data source

<a id="opIdenableCheckpointFirewall"></a>

> Code samples

```bash
curl https://example.com/data-sources/checkpoint-firewalls/string/enable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/checkpoint-firewalls/{id}/enable`

Enable a checkpoint firewall data source

<h3 id="enable-a-checkpoint-firewall-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="enable-a-checkpoint-firewall-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List cisco switch data sources

<a id="opIdlistCiscoSwitches"></a>

> Code samples

```bash
curl https://example.com/data-sources/cisco-switches \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/cisco-switches`

List cisco switch data sources

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "CiscoSwitchDataSource"
    }
  ],
  "total_count": 1
}
```

<h3 id="list-cisco-switch-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DataSourceListResponse](#schemadatasourcelistresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a cisco switch data source

<a id="opIdaddCiscoSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/cisco-switches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    },
    "switch_type": "CATALYST_3000"
  }'
```

`POST /data-sources/cisco-switches`

Add cisco switch as data source. User must provide one of ip or fqdn field in the request body.
Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.

> Body parameter

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "switch_type": "CATALYST_3000"
}
```

<h3 id="create-a-cisco-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CiscoSwitchDataSourceRequest](#schemaciscoswitchdatasourcerequest)|false|Add a cisco switch as datasource.|
|» enabled|body|boolean|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|true|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|true|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|
|» switch_type|body|[CiscoSwitchType](#schemaciscoswitchtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» switch_type|CATALYST_3000|
|» switch_type|CATALYST_4500|
|» switch_type|CATALYST_6500|
|» switch_type|NEXUS_5K|
|» switch_type|NEXUS_7K|
|» switch_type|NEXUS_9K|

> Example responses

> 201 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "switch_type": "CATALYST_3000"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="create-a-cisco-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CiscoSwitchDataSource](#schemaciscoswitchdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show cisco switch data source details

<a id="opIdgetCiscoSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/cisco-switches/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/cisco-switches/{id}`

Show cisco switch data source details

<h3 id="show-cisco-switch-data-source-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "switch_type": "CATALYST_3000"
}
```

<h3 id="show-cisco-switch-data-source-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CiscoSwitchDataSource](#schemaciscoswitchdatasource)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a cisco switch data source

<a id="opIdupdateCiscoSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/cisco-switches/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "entity_id": "string",
    "entity_type": "CiscoSwitchDataSource",
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    },
    "switch_type": "CATALYST_3000"
  }'
```

`PUT /data-sources/cisco-switches/{id}`

Update a cisco switch data source. Only credentials, nickname and notes can be updated.

> Body parameter

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "switch_type": "CATALYST_3000"
}
```

<h3 id="update-a-cisco-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[CiscoSwitchDataSource](#schemaciscoswitchdatasource)|false|none|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|
|» switch_type|body|[CiscoSwitchType](#schemaciscoswitchtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|
|» switch_type|CATALYST_3000|
|» switch_type|CATALYST_4500|
|» switch_type|CATALYST_6500|
|» switch_type|NEXUS_5K|
|» switch_type|NEXUS_7K|
|» switch_type|NEXUS_9K|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "switch_type": "CATALYST_3000"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-a-cisco-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CiscoSwitchDataSource](#schemaciscoswitchdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a cisco switch data source

<a id="opIddeleteCiscoSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/cisco-switches/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /data-sources/cisco-switches/{id}`

Delete a cisco switch data source

<h3 id="delete-a-cisco-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="delete-a-cisco-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Disable a cisco switch data source

<a id="opIddisableCiscoSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/cisco-switches/string/disable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/cisco-switches/{id}/disable`

Disable a cisco switch data source

<h3 id="disable-a-cisco-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="disable-a-cisco-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable a cisco switch data source

<a id="opIdenableCiscoSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/cisco-switches/string/enable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/cisco-switches/{id}/enable`

Enable a cisco switch data source

<h3 id="enable-a-cisco-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="enable-a-cisco-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show snmp config for cisco switch data source

<a id="opIdgetCiscoSwitchSnmpConfig"></a>

> Code samples

```bash
curl https://example.com/data-sources/cisco-switches/string/snmp-config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/cisco-switches/{id}/snmp-config`

Show snmp config for cisco switch data source

<h3 id="show-snmp-config-for-cisco-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

<h3 id="show-snmp-config-for-cisco-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SNMPConfig](#schemasnmpconfig)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update snmp config for cisco switch data source

<a id="opIdupdateCiscoSwitchSnmpConfig"></a>

> Code samples

```bash
curl https://example.com/data-sources/cisco-switches/string/snmp-config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "config_snmp_2c": {
      "community_string": "string"
    },
    "config_snmp_3": {
      "authentication_password": "string",
      "authentication_type": "NO_AUTH",
      "context_name": "string",
      "privacy_password": "string",
      "privacy_type": "AES",
      "username": "string"
    },
    "snmp_enabled": false,
    "snmp_version": "v2c"
  }'
```

`PUT /data-sources/cisco-switches/{id}/snmp-config`

Update snmp config for cisco switch data source

> Body parameter

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

<h3 id="update-snmp-config-for-cisco-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[SNMPConfig](#schemasnmpconfig)|false|none|
|» config_snmp_2c|body|[SNMP2cConfig](#schemasnmp2cconfig)|false|none|
|» config_snmp_3|body|[SNMP3Config](#schemasnmp3config)|false|none|
|» snmp_enabled|body|boolean|false|none|
|» snmp_version|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» snmp_version|v2c|
|» snmp_version|v3|

> Example responses

> 200 Response

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-snmp-config-for-cisco-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SNMPConfig](#schemasnmpconfig)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List dell switch data sources

<a id="opIdlistDellSwitches"></a>

> Code samples

```bash
curl https://example.com/data-sources/dell-switches \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/dell-switches`

List dell switch data sources

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "CiscoSwitchDataSource"
    }
  ],
  "total_count": 1
}
```

<h3 id="list-dell-switch-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DataSourceListResponse](#schemadatasourcelistresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a dell switch data source

<a id="opIdaddDellSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/dell-switches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    },
    "switch_type": "FORCE_10_MXL_10"
  }'
```

`POST /data-sources/dell-switches`

Add a dell switch as data source

> Body parameter

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "switch_type": "FORCE_10_MXL_10"
}
```

<h3 id="create-a-dell-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DellSwitchDataSourceRequest](#schemadellswitchdatasourcerequest)|false|none|
|» enabled|body|boolean|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|true|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|true|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|
|» switch_type|body|[DellSwitchType](#schemadellswitchtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» switch_type|FORCE_10_MXL_10|
|» switch_type|POWERCONNECT_8024|
|» switch_type|S4048|
|» switch_type|Z9100|
|» switch_type|S6000|

> Example responses

> 201 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "switch_type": "FORCE_10_MXL_10"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="create-a-dell-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[DellSwitchDataSource](#schemadellswitchdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show dell switch data source details

<a id="opIdgetDellSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/dell-switches/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/dell-switches/{id}`

Get a dell switch data source details

<h3 id="show-dell-switch-data-source-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "switch_type": "FORCE_10_MXL_10"
}
```

<h3 id="show-dell-switch-data-source-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DellSwitchDataSource](#schemadellswitchdatasource)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a dell switch data source

<a id="opIdupdateDellSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/dell-switches/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "entity_id": "string",
    "entity_type": "CiscoSwitchDataSource",
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    },
    "switch_type": "FORCE_10_MXL_10"
  }'
```

`PUT /data-sources/dell-switches/{id}`

Update a dell switch data source. Only credentials, nickname and notes can be updated

> Body parameter

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "switch_type": "FORCE_10_MXL_10"
}
```

<h3 id="update-a-dell-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[DellSwitchDataSource](#schemadellswitchdatasource)|false|none|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|
|» switch_type|body|[DellSwitchType](#schemadellswitchtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|
|» switch_type|FORCE_10_MXL_10|
|» switch_type|POWERCONNECT_8024|
|» switch_type|S4048|
|» switch_type|Z9100|
|» switch_type|S6000|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "switch_type": "FORCE_10_MXL_10"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-a-dell-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DellSwitchDataSource](#schemadellswitchdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a dell switch data source

<a id="opIddeleteDellSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/dell-switches/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /data-sources/dell-switches/{id}`

Delete a data source

<h3 id="delete-a-dell-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="delete-a-dell-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Disable a dell switch data source

<a id="opIddisableDellSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/dell-switches/string/disable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/dell-switches/{id}/disable`

Disable a dell switch data source

<h3 id="disable-a-dell-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="disable-a-dell-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable a dell switch data source

<a id="opIdenableDellSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/dell-switches/string/enable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/dell-switches/{id}/enable`

Enable a dell switch data source

<h3 id="enable-a-dell-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="enable-a-dell-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show snmp config for dell switch data source

<a id="opIdgetDellSwitchSnmpConfig"></a>

> Code samples

```bash
curl https://example.com/data-sources/dell-switches/string/snmp-config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/dell-switches/{id}/snmp-config`

Show snmp config for dell switch data source

<h3 id="show-snmp-config-for-dell-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

<h3 id="show-snmp-config-for-dell-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SNMPConfig](#schemasnmpconfig)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update snmp config for dell switch data source

<a id="opIdupdateDellSwitchSnmpConfig"></a>

> Code samples

```bash
curl https://example.com/data-sources/dell-switches/string/snmp-config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "config_snmp_2c": {
      "community_string": "string"
    },
    "config_snmp_3": {
      "authentication_password": "string",
      "authentication_type": "NO_AUTH",
      "context_name": "string",
      "privacy_password": "string",
      "privacy_type": "AES",
      "username": "string"
    },
    "snmp_enabled": false,
    "snmp_version": "v2c"
  }'
```

`PUT /data-sources/dell-switches/{id}/snmp-config`

Update snmp config for dell switch data source

> Body parameter

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

<h3 id="update-snmp-config-for-dell-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[SNMPConfig](#schemasnmpconfig)|false|none|
|» config_snmp_2c|body|[SNMP2cConfig](#schemasnmp2cconfig)|false|none|
|» config_snmp_3|body|[SNMP3Config](#schemasnmp3config)|false|none|
|» snmp_enabled|body|boolean|false|none|
|» snmp_version|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» snmp_version|v2c|
|» snmp_version|v3|

> Example responses

> 200 Response

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-snmp-config-for-dell-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SNMPConfig](#schemasnmpconfig)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List hp oneview manager data sources

<a id="opIdlistHpovManagers"></a>

> Code samples

```bash
curl https://example.com/data-sources/hpov-managers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/hpov-managers`

List hp oneview manager data sources

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "CiscoSwitchDataSource"
    }
  ],
  "total_count": 1
}
```

<h3 id="list-hp-oneview-manager-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DataSourceListResponse](#schemadatasourcelistresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a hp oneview manager data source

<a id="opIdaddHpovManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/hpov-managers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "entity_id": "string",
    "entity_type": "CiscoSwitchDataSource",
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`POST /data-sources/hpov-managers`

Add a hp oneview manager data source

> Body parameter

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="create-a-hp-oneview-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HPOneViewManagerDataSourceRequest](#schemahponeviewmanagerdatasourcerequest)|false|none|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|

> Example responses

> 201 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="create-a-hp-oneview-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[HPOneViewManagerDataSource](#schemahponeviewmanagerdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show hp oneview data source details

<a id="opIdgetHpovManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/hpov-managers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/hpov-managers/{id}`

Show hp oneview data source details

<h3 id="show-hp-oneview-data-source-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="show-hp-oneview-data-source-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HPOneViewManagerDataSource](#schemahponeviewmanagerdatasource)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a hp oneview data source

<a id="opIdupdateHpovManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/hpov-managers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "entity_id": "string",
    "entity_type": "CiscoSwitchDataSource",
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`PUT /data-sources/hpov-managers/{id}`

Update a hp oneview data source

> Body parameter

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="update-a-hp-oneview-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[HPOneViewManagerDataSource](#schemahponeviewmanagerdatasource)|false|none|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-a-hp-oneview-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HPOneViewManagerDataSource](#schemahponeviewmanagerdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a hp oneview data source

<a id="opIddeleteHpovManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/hpov-managers/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /data-sources/hpov-managers/{id}`

Delete a hp oneview data source

<h3 id="delete-a-hp-oneview-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="delete-a-hp-oneview-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Disable a hp oneview data source

<a id="opIddisableHpovManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/hpov-managers/string/disable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/hpov-managers/{id}/disable`

Disable a hp oneview data source

<h3 id="disable-a-hp-oneview-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="disable-a-hp-oneview-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable a hp oneview data source

<a id="opIdenableHpovManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/hpov-managers/string/enable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/hpov-managers/{id}/enable`

Enable a hp oneview data source

<h3 id="enable-a-hp-oneview-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="enable-a-hp-oneview-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List hpvc manager data sources

<a id="opIdlistHpvcManagers"></a>

> Code samples

```bash
curl https://example.com/data-sources/hpvc-managers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/hpvc-managers`

List hpvc manager data sources

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "CiscoSwitchDataSource"
    }
  ],
  "total_count": 1
}
```

<h3 id="list-hpvc-manager-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DataSourceListResponse](#schemadatasourcelistresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a hpvc manager data source

<a id="opIdaddHpvcManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/hpvc-managers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "entity_id": "string",
    "entity_type": "CiscoSwitchDataSource",
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`POST /data-sources/hpvc-managers`

Add hpvc manager data source

> Body parameter

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="create-a-hpvc-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HPVCManagerDataSourceRequest](#schemahpvcmanagerdatasourcerequest)|false|Add a switch as datasource|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|

> Example responses

> 201 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="create-a-hpvc-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[HPVCManagerDataSource](#schemahpvcmanagerdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show hpvc data source details

<a id="opIdgetHpvcManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/hpvc-managers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/hpvc-managers/{id}`

Show hpvc data source details

<h3 id="show-hpvc-data-source-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="show-hpvc-data-source-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HPVCManagerDataSource](#schemahpvcmanagerdatasource)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a hpvc manager data source

<a id="opIdupdateHpvcManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/hpvc-managers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "entity_id": "string",
    "entity_type": "CiscoSwitchDataSource",
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`PUT /data-sources/hpvc-managers/{id}`

Update a hpvc manager data source

> Body parameter

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="update-a-hpvc-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[HPVCManagerDataSource](#schemahpvcmanagerdatasource)|false|none|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-a-hpvc-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HPVCManagerDataSource](#schemahpvcmanagerdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a hpvc manager data source

<a id="opIddeleteHpvcManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/hpvc-managers/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /data-sources/hpvc-managers/{id}`

Delete a hpvc manager data source

<h3 id="delete-a-hpvc-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="delete-a-hpvc-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Disable a hpvc manager data source

<a id="opIddisableHpvcManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/hpvc-managers/string/disable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/hpvc-managers/{id}/disable`

Disable a hpvc manager data source

<h3 id="disable-a-hpvc-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="disable-a-hpvc-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable a hpvc manager data source

<a id="opIdenableHpvcManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/hpvc-managers/string/enable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/hpvc-managers/{id}/enable`

Enable a hpvc manager data source

<h3 id="enable-a-hpvc-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="enable-a-hpvc-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List juniper switch data sources

<a id="opIdlistJuniperSwitches"></a>

> Code samples

```bash
curl https://example.com/data-sources/juniper-switches \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/juniper-switches`

List juniper switch data sources

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "CiscoSwitchDataSource"
    }
  ],
  "total_count": 1
}
```

<h3 id="list-juniper-switch-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DataSourceListResponse](#schemadatasourcelistresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Add a juniper switch as data source

<a id="opIdaddJuniperSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/juniper-switches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`POST /data-sources/juniper-switches`

Add switch Datasource

> Body parameter

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="add-a-juniper-switch-as-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[JuniperSwitchDataSourceRequest](#schemajuniperswitchdatasourcerequest)|false|Add a cisco switch as datasource|
|» enabled|body|boolean|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|true|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|true|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

> Example responses

> 201 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="add-a-juniper-switch-as-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[JuniperSwitchDataSource](#schemajuniperswitchdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show juniper switch data source details

<a id="opIdgetJuniperSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/juniper-switches/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/juniper-switches/{id}`

Show juniper switch data source details

<h3 id="show-juniper-switch-data-source-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="show-juniper-switch-data-source-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[JuniperSwitchDataSource](#schemajuniperswitchdatasource)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a juniper switch data source

<a id="opIdupdateJuniperSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/juniper-switches/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "entity_id": "string",
    "entity_type": "CiscoSwitchDataSource",
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`PUT /data-sources/juniper-switches/{id}`

Update a juniper switch data source

> Body parameter

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="update-a-juniper-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[JuniperSwitchDataSource](#schemajuniperswitchdatasource)|false|none|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-a-juniper-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[JuniperSwitchDataSource](#schemajuniperswitchdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a juniper switch data source

<a id="opIddeleteJuniperSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/juniper-switches/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /data-sources/juniper-switches/{id}`

Delete a juniper switch data source

<h3 id="delete-a-juniper-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="delete-a-juniper-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Disable a juniper switch data source

<a id="opIddisableJuniperSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/juniper-switches/string/disable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/juniper-switches/{id}/disable`

Disable a juniper switch data source

<h3 id="disable-a-juniper-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="disable-a-juniper-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable a juniper switch data source

<a id="opIdenableJuniperSwitch"></a>

> Code samples

```bash
curl https://example.com/data-sources/juniper-switches/string/enable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/juniper-switches/{id}/enable`

Enable a juniper switch data source

<h3 id="enable-a-juniper-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="enable-a-juniper-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show snmp config for juniper switch data source

<a id="opIdgetJuniperSwitchSnmpConfig"></a>

> Code samples

```bash
curl https://example.com/data-sources/juniper-switches/string/snmp-config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/juniper-switches/{id}/snmp-config`

Show snmp config for juniper switch data source

<h3 id="show-snmp-config-for-juniper-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

<h3 id="show-snmp-config-for-juniper-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SNMPConfig](#schemasnmpconfig)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update snmp config for a juniper switch data source

<a id="opIdupdateJuniperSwitchSnmpConfig"></a>

> Code samples

```bash
curl https://example.com/data-sources/juniper-switches/string/snmp-config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "config_snmp_2c": {
      "community_string": "string"
    },
    "config_snmp_3": {
      "authentication_password": "string",
      "authentication_type": "NO_AUTH",
      "context_name": "string",
      "privacy_password": "string",
      "privacy_type": "AES",
      "username": "string"
    },
    "snmp_enabled": false,
    "snmp_version": "v2c"
  }'
```

`PUT /data-sources/juniper-switches/{id}/snmp-config`

Update snmp config for a juniper switch data source

> Body parameter

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

<h3 id="update-snmp-config-for-a-juniper-switch-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[SNMPConfig](#schemasnmpconfig)|false|none|
|» config_snmp_2c|body|[SNMP2cConfig](#schemasnmp2cconfig)|false|none|
|» config_snmp_3|body|[SNMP3Config](#schemasnmp3config)|false|none|
|» snmp_enabled|body|boolean|false|none|
|» snmp_version|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» snmp_version|v2c|
|» snmp_version|v3|

> Example responses

> 200 Response

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-snmp-config-for-a-juniper-switch-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SNMPConfig](#schemasnmpconfig)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List nsx-v manager data sources

<a id="opIdlistNsxvManagers"></a>

> Code samples

```bash
curl https://example.com/data-sources/nsxv-managers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/nsxv-managers`

List nsx-v manager data sources

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "CiscoSwitchDataSource"
    }
  ],
  "total_count": 1
}
```

<h3 id="list-nsx-v-manager-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DataSourceListResponse](#schemadatasourcelistresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a nsx-v manager data source

<a id="opIdaddNsxvManagerDatasource"></a>

> Code samples

```bash
curl https://example.com/data-sources/nsxv-managers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "central_cli_enabled": false,
    "credentials": {
      "password": "string",
      "username": "string"
    },
    "ipfix_enabled": false,
    "vcenter_id": "string"
  }'
```

`POST /data-sources/nsxv-managers`

Add a nsx-v manager data source

> Body parameter

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "central_cli_enabled": false,
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "ipfix_enabled": false,
  "vcenter_id": "string"
}
```

<h3 id="create-a-nsx-v-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NSXVManagerDataSourceRequest](#schemansxvmanagerdatasourcerequest)|false|none|
|» enabled|body|boolean|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|true|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|true|proxy vm which should register this vcenter|
|» central_cli_enabled|body|boolean|false|none|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|true|none|
|» ipfix_enabled|body|boolean|false|none|
|» vcenter_id|body|string|true|Associated vcenter data source entity Id|

> Example responses

> 201 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "central_cli_enabled": false,
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "ipfix_enabled": false,
  "vcenter_id": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="create-a-nsx-v-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[NSXVManagerDataSource](#schemansxvmanagerdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show nsx-v manager data source details

<a id="opIdgetNsxvManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/nsxv-managers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/nsxv-managers/{id}`

Show nsx-v manager data source details

<h3 id="show-nsx-v-manager-data-source-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "central_cli_enabled": false,
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "ipfix_enabled": false,
  "vcenter_id": "string"
}
```

<h3 id="show-nsx-v-manager-data-source-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NSXVManagerDataSource](#schemansxvmanagerdatasource)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a nsx-v manager data source

<a id="opIdupdateNsxvManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/nsxv-managers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "entity_id": "string",
    "entity_type": "CiscoSwitchDataSource",
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "central_cli_enabled": false,
    "credentials": {
      "password": "string",
      "username": "string"
    },
    "ipfix_enabled": false,
    "vcenter_id": "string"
  }'
```

`PUT /data-sources/nsxv-managers/{id}`

Update a nsx-v manager data source

> Body parameter

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "central_cli_enabled": false,
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "ipfix_enabled": false,
  "vcenter_id": "string"
}
```

<h3 id="update-a-nsx-v-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[NSXVManagerDataSource](#schemansxvmanagerdatasource)|false|none|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» central_cli_enabled|body|boolean|false|none|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|
|» ipfix_enabled|body|boolean|false|none|
|» vcenter_id|body|string|false|Associated vcenter data source entity Id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "central_cli_enabled": false,
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "ipfix_enabled": false,
  "vcenter_id": "string"
}
```

<h3 id="update-a-nsx-v-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NSXVManagerDataSource](#schemansxvmanagerdatasource)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a nsx-v manager data source

<a id="opIddeleteNsxvManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/nsxv-managers/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /data-sources/nsxv-managers/{id}`

Delete a nsx-v manager data source

<h3 id="delete-a-nsx-v-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="delete-a-nsx-v-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show nsx controller-cluster details

<a id="opIdgetNsxvControllerCluster"></a>

> Code samples

```bash
curl https://example.com/data-sources/nsxv-managers/string/controller-cluster \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/nsxv-managers/{id}/controller-cluster`

Show nsx controller-cluster details

<h3 id="show-nsx-controller-cluster-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "controller_password": "string",
  "enabled": false
}
```

<h3 id="show-nsx-controller-cluster-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NSXControllerDataCollection](#schemansxcontrollerdatacollection)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update nsx controller-cluster details

<a id="opIdupdateNsxvControllerCluster"></a>

> Code samples

```bash
curl https://example.com/data-sources/nsxv-managers/string/controller-cluster \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "controller_password": "string",
    "enabled": false
  }'
```

`PUT /data-sources/nsxv-managers/{id}/controller-cluster`

Update nsx controller-cluster details

> Body parameter

```json
{
  "controller_password": "string",
  "enabled": false
}
```

<h3 id="update-nsx-controller-cluster-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[NSXControllerDataCollection](#schemansxcontrollerdatacollection)|false|none|
|» controller_password|body|string|false|none|
|» enabled|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "controller_password": "string",
  "enabled": false
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-nsx-controller-cluster-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NSXControllerDataCollection](#schemansxcontrollerdatacollection)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Disable a nsx-v manager data source

<a id="opIddisableNsxvManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/nsxv-managers/string/disable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/nsxv-managers/{id}/disable`

Disable a nsx-v manager data source

<h3 id="disable-a-nsx-v-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="disable-a-nsx-v-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable a nsx-v manager data source

<a id="opIdenableNsxvManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/nsxv-managers/string/enable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/nsxv-managers/{id}/enable`

Enable a nsx-v manager data source

<h3 id="enable-a-nsx-v-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="enable-a-nsx-v-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List panorama firewall data sources

<a id="opIdlistPanoramaFirewalls"></a>

> Code samples

```bash
curl https://example.com/data-sources/panorama-firewalls \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/panorama-firewalls`

List panorama firewall data sources

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "CiscoSwitchDataSource"
    }
  ],
  "total_count": 1
}
```

<h3 id="list-panorama-firewall-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DataSourceListResponse](#schemadatasourcelistresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create panorama firewall data source

<a id="opIdaddPanoramaFirewall"></a>

> Code samples

```bash
curl https://example.com/data-sources/panorama-firewalls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`POST /data-sources/panorama-firewalls`

Add panorama firewall as data source

> Body parameter

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="create-panorama-firewall-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PanFirewallDataSourceRequest](#schemapanfirewalldatasourcerequest)|false|Add a panorama firewall as datasource|
|» enabled|body|boolean|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|true|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|true|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

> Example responses

> 201 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="create-panorama-firewall-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[PanFirewallDataSource](#schemapanfirewalldatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show panorama firewall data source details

<a id="opIdgetPanoramaFirewall"></a>

> Code samples

```bash
curl https://example.com/data-sources/panorama-firewalls/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/panorama-firewalls/{id}`

Show panorama firewall data source details

<h3 id="show-panorama-firewall-data-source-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="show-panorama-firewall-data-source-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PanFirewallDataSource](#schemapanfirewalldatasource)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a panorama firewall data source

<a id="opIdupdatePanoramaFirewall"></a>

> Code samples

```bash
curl https://example.com/data-sources/panorama-firewalls/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "entity_id": "string",
    "entity_type": "CiscoSwitchDataSource",
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`PUT /data-sources/panorama-firewalls/{id}`

Update a panorama firewall data source

> Body parameter

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="update-a-panorama-firewall-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[PanFirewallDataSource](#schemapanfirewalldatasource)|false|none|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-a-panorama-firewall-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PanFirewallDataSource](#schemapanfirewalldatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a panorama firewall data source

<a id="opIddeletePanoramaFirewall"></a>

> Code samples

```bash
curl https://example.com/data-sources/panorama-firewalls/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /data-sources/panorama-firewalls/{id}`

Delete a panorama firewall data source

<h3 id="delete-a-panorama-firewall-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="delete-a-panorama-firewall-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Disable a panorama firewall data source

<a id="opIddisablePanoramaFirewall"></a>

> Code samples

```bash
curl https://example.com/data-sources/panorama-firewalls/string/disable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/panorama-firewalls/{id}/disable`

Disable a panorama firewall data source

<h3 id="disable-a-panorama-firewall-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="disable-a-panorama-firewall-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable a panorama firewall data source

<a id="opIdenablePanoramaFirewall"></a>

> Code samples

```bash
curl https://example.com/data-sources/panorama-firewalls/string/enable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/panorama-firewalls/{id}/enable`

Enable a panorama firewall data source

<h3 id="enable-a-panorama-firewall-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="enable-a-panorama-firewall-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List ucs manager data sources

<a id="opIdlistUcsManagers"></a>

> Code samples

```bash
curl https://example.com/data-sources/ucs-managers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/ucs-managers`

List ucs manager data sources

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "CiscoSwitchDataSource"
    }
  ],
  "total_count": 1
}
```

<h3 id="list-ucs-manager-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DataSourceListResponse](#schemadatasourcelistresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create an ucs manager data source

<a id="opIdaddUcsManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/ucs-managers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "entity_id": "string",
    "entity_type": "CiscoSwitchDataSource",
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`POST /data-sources/ucs-managers`

Add an ucs manager as data source

> Body parameter

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="create-an-ucs-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UCSManagerDataSourceRequest](#schemaucsmanagerdatasourcerequest)|false|none|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|

> Example responses

> 201 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="create-an-ucs-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[UCSManagerDataSource](#schemaucsmanagerdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show ucs manager data source details

<a id="opIdgetUcsManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/ucs-managers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/ucs-managers/{id}`

Show ucs manager data source details

<h3 id="show-ucs-manager-data-source-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="show-ucs-manager-data-source-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UCSManagerDataSource](#schemaucsmanagerdatasource)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update an ucs manager data source

<a id="opIdupdateUcsManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/ucs-managers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "entity_id": "string",
    "entity_type": "CiscoSwitchDataSource",
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`PUT /data-sources/ucs-managers/{id}`

Update an ucs manager data source

> Body parameter

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="update-an-ucs-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[UCSManagerDataSource](#schemaucsmanagerdatasource)|false|none|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-an-ucs-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UCSManagerDataSource](#schemaucsmanagerdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete an ucs manager data source

<a id="opIddeleteUcsManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/ucs-managers/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /data-sources/ucs-managers/{id}`

Delete an ucs manager data source

<h3 id="delete-an-ucs-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="delete-an-ucs-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Disable an ucs manager data source

<a id="opIddisableUcsManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/ucs-managers/string/disable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/ucs-managers/{id}/disable`

Disable an ucs manager data source

<h3 id="disable-an-ucs-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="disable-an-ucs-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable an ucs manager data source

<a id="opIdenableUcsManager"></a>

> Code samples

```bash
curl https://example.com/data-sources/ucs-managers/string/enable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/ucs-managers/{id}/enable`

Enable an ucs manager data source

<h3 id="enable-an-ucs-manager-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="enable-an-ucs-manager-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show snmp config for ucs fabric interconnects

<a id="opIdgetUcsSnmpConfig"></a>

> Code samples

```bash
curl https://example.com/data-sources/ucs-managers/string/snmp-config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/ucs-managers/{id}/snmp-config`

Show snmp config for ucs fabric interconnects

<h3 id="show-snmp-config-for-ucs-fabric-interconnects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

<h3 id="show-snmp-config-for-ucs-fabric-interconnects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SNMPConfig](#schemasnmpconfig)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update snmp config for ucs fabric interconnects

<a id="opIdupdateUcsSnmpConfig"></a>

> Code samples

```bash
curl https://example.com/data-sources/ucs-managers/string/snmp-config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "config_snmp_2c": {
      "community_string": "string"
    },
    "config_snmp_3": {
      "authentication_password": "string",
      "authentication_type": "NO_AUTH",
      "context_name": "string",
      "privacy_password": "string",
      "privacy_type": "AES",
      "username": "string"
    },
    "snmp_enabled": false,
    "snmp_version": "v2c"
  }'
```

`PUT /data-sources/ucs-managers/{id}/snmp-config`

Update snmp config for ucs fabric interconnects

> Body parameter

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

<h3 id="update-snmp-config-for-ucs-fabric-interconnects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[SNMPConfig](#schemasnmpconfig)|false|none|
|» config_snmp_2c|body|[SNMP2cConfig](#schemasnmp2cconfig)|false|none|
|» config_snmp_3|body|[SNMP3Config](#schemasnmp3config)|false|none|
|» snmp_enabled|body|boolean|false|none|
|» snmp_version|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» snmp_version|v2c|
|» snmp_version|v3|

> Example responses

> 200 Response

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-snmp-config-for-ucs-fabric-interconnects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SNMPConfig](#schemasnmpconfig)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List vCenter data sources

<a id="opIdlistVcenters"></a>

> Code samples

```bash
curl https://example.com/data-sources/vcenters \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/vcenters`

List vCenter data sources

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "CiscoSwitchDataSource"
    }
  ],
  "total_count": 1
}
```

<h3 id="list-vcenter-data-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DataSourceListResponse](#schemadatasourcelistresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a vCenter data source

<a id="opIdaddVcenterDatasource"></a>

> Code samples

```bash
curl https://example.com/data-sources/vcenters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "fqdn": "your.domain.com",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "string",
    "proxy_id": "1000:104:12313412",
    "credentials": {
      "password": "string",
      "username": "string"
    }
  }'
```

`POST /data-sources/vcenters`

Add a vcenter data source. User must provide one of ip or fqdn field in the request body.
Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.

> Body parameter

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

<h3 id="create-a-vcenter-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VCenterDataSourceRequest](#schemavcenterdatasourcerequest)|true|VCenter Credentials|
|» enabled|body|boolean|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|true|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|true|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

> Example responses

> 201 Response

```json
{
  "credentials": {
    "password": "thePassword",
    "username": "admin@vsphere.local"
  },
  "enabled": true,
  "entity_type": "VCenterDataSource",
  "fqdn": "go.vc.org",
  "id": "1000:33:12890123",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "VC 1",
  "proxy_id": "1000:104:12313412"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="create-a-vcenter-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[VCenterDataSource](#schemavcenterdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show vCenter data source details

<a id="opIdgetVcenter"></a>

> Code samples

```bash
curl https://example.com/data-sources/vcenters/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data-sources/vcenters/{id}`

Show vCenter data source details

<h3 id="show-vcenter-data-source-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "credentials": {
    "password": "thePassword",
    "username": "admin@vsphere.local"
  },
  "enabled": true,
  "entity_type": "VCenterDataSource",
  "fqdn": "go.vc.org",
  "id": "1000:33:12890123",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "VC 1",
  "proxy_id": "1000:104:12313412"
}
```

<h3 id="show-vcenter-data-source-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VCenterDataSource](#schemavcenterdatasource)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a vCenter data source.

<a id="opIdupdateVcenter"></a>

> Code samples

```bash
curl https://example.com/data-sources/vcenters/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "credentials": {
      "password": "thePassword",
      "username": "admin@vsphere.local"
    },
    "enabled": true,
    "entity_type": "VCenterDataSource",
    "fqdn": "go.vc.org",
    "id": "1000:33:12890123",
    "ip": "192.168.10.1",
    "nickname": "vc1",
    "notes": "VC 1",
    "proxy_id": "1000:104:12313412"
  }'
```

`PUT /data-sources/vcenters/{id}`

Update a vcenter data source. Only nickname, notes and credentials can be updated.

> Body parameter

```json
{
  "credentials": {
    "password": "thePassword",
    "username": "admin@vsphere.local"
  },
  "enabled": true,
  "entity_type": "VCenterDataSource",
  "fqdn": "go.vc.org",
  "id": "1000:33:12890123",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "VC 1",
  "proxy_id": "1000:104:12313412"
}
```

<h3 id="update-a-vcenter-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[VCenterDataSource](#schemavcenterdatasource)|false|none|
|» enabled|body|boolean|false|none|
|» entity_id|body|string|false|none|
|» entity_type|body|[DataSourceType](#schemadatasourcetype)|false|none|
|» fqdn|body|string|false|none|
|» ip|body|string|false|none|
|» nickname|body|string|false|none|
|» notes|body|string|false|none|
|» proxy_id|body|string|false|proxy vm which should register this vcenter|
|» credentials|body|[PasswordCredentials](#schemapasswordcredentials)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|CiscoSwitchDataSource|
|» entity_type|DellSwitchDataSource|
|» entity_type|AristaSwitchDataSource|
|» entity_type|BrocadeSwitchDataSource|
|» entity_type|JuniperSwitchDataSource|
|» entity_type|VCenterDataSource|
|» entity_type|NSXVManagerDataSource|
|» entity_type|UCSManagerDataSource|
|» entity_type|HPVCManagerDataSource|
|» entity_type|HPOneViewDataSource|
|» entity_type|PanFirewallDataSource|
|» entity_type|CheckpointFirewallDataSource|

> Example responses

> 200 Response

```json
{
  "credentials": {
    "password": "thePassword",
    "username": "admin@vsphere.local"
  },
  "enabled": true,
  "entity_type": "VCenterDataSource",
  "fqdn": "go.vc.org",
  "id": "1000:33:12890123",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "VC 1",
  "proxy_id": "1000:104:12313412"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="update-a-vcenter-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VCenterDataSource](#schemavcenterdatasource)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a vCenter data source

<a id="opIddeleteVcenter"></a>

> Code samples

```bash
curl https://example.com/data-sources/vcenters/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /data-sources/vcenters/{id}`

Delete a data source

<h3 id="delete-a-vcenter-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="delete-a-vcenter-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Disable a vCenter data source

<a id="opIddisableVcenter"></a>

> Code samples

```bash
curl https://example.com/data-sources/vcenters/string/disable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/vcenters/{id}/disable`

Disable a vCenter data source

<h3 id="disable-a-vcenter-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="disable-a-vcenter-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable a vCenter data source

<a id="opIdenableVcenter"></a>

> Code samples

```bash
curl https://example.com/data-sources/vcenters/string/enable \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data-sources/vcenters/{id}/enable`

Enable a vCenter data source

<h3 id="enable-a-vcenter-data-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="enable-a-vcenter-data-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="vrealize-network-insight-api-reference-entities">Entities</h1>

Entities APIs

## List clusters

<a id="opIdlistClusters"></a>

> Code samples

```bash
curl https://example.com/entities/clusters \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/clusters`

List clusters

<h3 id="list-clusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-clusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show cluster details

<a id="opIdgetCluster"></a>

> Code samples

```bash
curl https://example.com/entities/clusters/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/clusters/{id}`

Show cluster details

<h3 id="show-cluster-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|time|query|integer(int64)|false|time in epoch seconds|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "nsx_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "num_cpu_cores": 0,
  "num_datastores": 0,
  "num_hosts": 0,
  "total_cpus": 0,
  "total_memory": 0,
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-cluster-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Cluster](#schemacluster)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List datastores

<a id="opIdlistDatastores"></a>

> Code samples

```bash
curl https://example.com/entities/datastores \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/datastores`

List datastores

<h3 id="list-datastores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-datastores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show datastore details

<a id="opIdgetDatastore"></a>

> Code samples

```bash
curl https://example.com/entities/datastores/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/datastores/{id}`

Show datastore details

<h3 id="show-datastore-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|time|query|integer(int64)|false|time in epoch seconds|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-datastore-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Datastore](#schemadatastore)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List distributed virtual portgroups

<a id="opIdlistDistributedVirtualPortgroups"></a>

> Code samples

```bash
curl https://example.com/entities/distributed-virtual-portgroups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/distributed-virtual-portgroups`

List distributed virtual portgroups

<h3 id="list-distributed-virtual-portgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-distributed-virtual-portgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show distributed virtual portgroup details

<a id="opIdgetDistributedVirtualPortgroup"></a>

> Code samples

```bash
curl https://example.com/entities/distributed-virtual-portgroups/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/distributed-virtual-portgroups/{id}`

Show distributed virtual portgroup details

<h3 id="show-distributed-virtual-portgroup-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "distributed_virtual_switch": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-distributed-virtual-portgroup-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DistributedVirtualPortgroup](#schemadistributedvirtualportgroup)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List distributed virtual switches

<a id="opIdlistDistributedVirtualSwitches"></a>

> Code samples

```bash
curl https://example.com/entities/distributed-virtual-switches \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/distributed-virtual-switches`

List distributed virtual switches

<h3 id="list-distributed-virtual-switches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-distributed-virtual-switches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show distributed virtual switch details

<a id="opIdgetDistributedVirtualSwitch"></a>

> Code samples

```bash
curl https://example.com/entities/distributed-virtual-switches/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/distributed-virtual-switches/{id}`

Show distributed virtual switch details

<h3 id="show-distributed-virtual-switch-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "hosts": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-distributed-virtual-switch-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DistributedVirtualSwitch](#schemadistributedvirtualswitch)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List firewall rules

<a id="opIdlistFirewallRules"></a>

> Code samples

```bash
curl https://example.com/entities/firewall-rules \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/firewall-rules`

List firewall rules

<h3 id="list-firewall-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-firewall-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show firewall rule details

<a id="opIdgetFirewallRule"></a>

> Code samples

```bash
curl https://example.com/entities/firewall-rules/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/firewall-rules/{id}`

Show firewall rule details

<h3 id="show-firewall-rule-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "action": "ALLOW",
  "destination_any": true,
  "destination_inversion": true,
  "destinations": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "disabled": true,
  "port_ranges": [
    {
      "display": "string",
      "end": 0,
      "iana_name": "string",
      "iana_port_display": "string",
      "start": 0
    }
  ],
  "rule_id": "string",
  "section_id": "string",
  "section_name": "string",
  "sequence_number": 0,
  "service_any": true,
  "services": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_any": true,
  "source_inversion": true,
  "sources": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-firewall-rule-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BaseFirewallRule](#schemabasefirewallrule)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List firewalls

<a id="opIdlistFirewalls"></a>

> Code samples

```bash
curl https://example.com/entities/firewalls \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/firewalls`

List firewalls

<h3 id="list-firewalls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-firewalls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show firewall details

<a id="opIdgetFirewall"></a>

> Code samples

```bash
curl https://example.com/entities/firewalls/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/firewalls/{id}`

Show firewall details

<h3 id="show-firewall-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "action": "ALLOW",
  "destination_any": true,
  "destination_inversion": true,
  "destinations": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "disabled": true,
  "port_ranges": [
    {
      "display": "string",
      "end": 0,
      "iana_name": "string",
      "iana_port_display": "string",
      "start": 0
    }
  ],
  "rule_id": "string",
  "section_id": "string",
  "section_name": "string",
  "sequence_number": 0,
  "service_any": true,
  "services": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_any": true,
  "source_inversion": true,
  "sources": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-firewall-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BaseFirewallRule](#schemabasefirewallrule)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List flows

<a id="opIdgetFlows"></a>

> Code samples

```bash
curl https://example.com/entities/flows \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/flows`

List flows

<h3 id="list-flows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-flows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show flow details

<a id="opIdgetFlow"></a>

> Code samples

```bash
curl https://example.com/entities/flows/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/flows/{id}`

Show flow details

<h3 id="show-flow-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "destination_cluster": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "destination_datacenter": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "destination_folders": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "destination_host": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "destination_ip": {
    "ip_address": "string",
    "netmask": "string",
    "network_address": "string"
  },
  "destination_ip_sets": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "destination_l2_network": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "destination_resource_pool": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "destination_security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "destination_security_tags": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "destination_vm": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "destination_vm_tags": [
    "string"
  ],
  "destination_vnic": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "destination_vpc": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "firewall_action": "ALLOW",
  "flow_tag": [
    "TAG_TRAFFIC_TYPE_UNKNOWN"
  ],
  "port": {
    "display": "string",
    "end": 0,
    "iana_name": "string",
    "iana_port_display": "string",
    "start": 0
  },
  "protocol": "TCP",
  "source_cluster": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "source_datacenter": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "source_folders": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_host": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "source_ip": {
    "ip_address": "string",
    "netmask": "string",
    "network_address": "string"
  },
  "source_ip_sets": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_l2_network": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "source_resource_pool": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "source_security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_security_tags": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_vm": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "source_vm_tags": [
    "string"
  ],
  "source_vnic": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "source_vpc": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "traffic_type": "INTERNET_TRAFFIC",
  "within_host": true
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-flow-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Flow](#schemaflow)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List folders

<a id="opIdlistFolders"></a>

> Code samples

```bash
curl https://example.com/entities/folders \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/folders`

List folders

<h3 id="list-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show folder details

<a id="opIdgetFolder"></a>

> Code samples

```bash
curl https://example.com/entities/folders/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/folders/{id}`

Show folder details

<h3 id="show-folder-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|time|query|integer(int64)|false|time in epoch seconds|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-folder-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Folder](#schemafolder)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List hosts

<a id="opIdlistHosts"></a>

> Code samples

```bash
curl https://example.com/entities/hosts \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/hosts`

List hosts

<h3 id="list-hosts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-hosts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show host details

<a id="opIdgetHost"></a>

> Code samples

```bash
curl https://example.com/entities/hosts/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/hosts/{id}`

Show host details

<h3 id="show-host-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|time|query|integer(int64)|false|time in epoch seconds|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "cluster": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "connection_state": "string",
  "datastores": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "maintenance_mode": "string",
  "nsx_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "service_tag": "string",
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string",
  "vm_count": 0,
  "vmknics": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-host-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Host](#schemahost)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List ip sets

<a id="opIdlistIPSets"></a>

> Code samples

```bash
curl https://example.com/entities/ip-sets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/ip-sets`

List ip sets

<h3 id="list-ip-sets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-ip-sets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show ip set details

<a id="opIdgetIPSet"></a>

> Code samples

```bash
curl https://example.com/entities/ip-sets/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/ip-sets/{id}`

Show ip set details

<h3 id="show-ip-set-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "direct_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "direct_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "indirect_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "indirect_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "ip_addresses": [
    {
      "ip_address": "string",
      "netmask": "string",
      "network_address": "string"
    }
  ],
  "ip_numeric_ranges": [
    {
      "end": 0,
      "start": 0
    }
  ],
  "ip_ranges": [
    {
      "end_ip": "string",
      "start_ip": "string"
    }
  ],
  "parent_security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "translated_vm_count": 0,
  "vendor": "string",
  "vendor_id": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-ip-set-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BaseIPSet](#schemabaseipset)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List layer2 networks

<a id="opIdlistLayer2Networks"></a>

> Code samples

```bash
curl https://example.com/entities/layer2-networks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/layer2-networks`

List layer2 networks

<h3 id="list-layer2-networks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-layer2-networks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show layer2 network details

<a id="opIdgetLayer2Network"></a>

> Code samples

```bash
curl https://example.com/entities/layer2-networks/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/layer2-networks/{id}`

Show layer2 network details

<h3 id="show-layer2-network-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "gateways": [
    "string"
  ],
  "network_addresses": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-layer2-network-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BaseL2Network](#schemabasel2network)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get names for entities

<a id="opIdgetNames"></a>

> Code samples

```bash
curl https://example.com/entities/names \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "entities": [
      {
        "entity_id": "string",
        "time": 0
      }
    ]
  }'
```

`POST /entities/names`

Get names for entities.Limit of 1000 entities in a single request.

> Body parameter

```json
{
  "entities": [
    {
      "entity_id": "string",
      "time": 0
    }
  ]
}
```

<h3 id="get-names-for-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NamesRequest](#schemanamesrequest)|true|Names Request|
|» entities|body|[[NameRequestParam](#schemanamerequestparam)]|false|none|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0,
      "name": "string"
    }
  ]
}
```

<h3 id="get-names-for-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NamesResponse](#schemanamesresponse)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get name of an entity

<a id="opIdgetName"></a>

> Code samples

```bash
curl https://example.com/entities/names/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/names/{id}`

Get name of an entity

<h3 id="get-name-of-an-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "time": 0,
  "name": "string"
}
```

<h3 id="get-name-of-an-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EntityName](#schemaentityname)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List nsx managers

<a id="opIdlistNSXManagers"></a>

> Code samples

```bash
curl https://example.com/entities/nsx-managers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/nsx-managers`

List nsx managers

<h3 id="list-nsx-managers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-nsx-managers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show nsx manager details

<a id="opIdgetNSXManager"></a>

> Code samples

```bash
curl https://example.com/entities/nsx-managers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/nsx-managers/{id}`

Show nsx manager details

<h3 id="show-nsx-manager-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-nsx-manager-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BaseNSXManager](#schemabasensxmanager)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List problems

<a id="opIdlistProblemEvents"></a>

> Code samples

```bash
curl https://example.com/entities/problems \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/problems`

List problem events.

<h3 id="list-problems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-problems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show problem details

<a id="opIdgetProblemEvent"></a>

> Code samples

```bash
curl https://example.com/entities/problems/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/problems/{id}`

Show problem event details.

<h3 id="show-problem-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "admin_state": "ENABLED",
  "anchor_entities": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "archived": true,
  "event_tags": [
    "string"
  ],
  "event_time_epoch_ms": 0,
  "message": "string",
  "related_entities": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "event_close_time_epoch_ms": 0,
  "severity": "CRITICAL"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-problem-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ProblemEvent](#schemaproblemevent)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List security groups

<a id="opIdlistSecurityGroups"></a>

> Code samples

```bash
curl https://example.com/entities/security-groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/security-groups`

List security groups

<h3 id="list-security-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-security-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show security group details

<a id="opIdgetSecurityGroup"></a>

> Code samples

```bash
curl https://example.com/entities/security-groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/security-groups/{id}`

Show security group details

<h3 id="show-security-group-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "direct_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "direct_members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "direct_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "excluded_members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "indirect_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "indirect_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "parents": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "translated_vm_count": 0,
  "vendor_id": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-security-group-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BaseSecurityGroup](#schemabasesecuritygroup)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List security tags

<a id="opIdlistSecurityTags"></a>

> Code samples

```bash
curl https://example.com/entities/security-tags \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/security-tags`

List security tags

<h3 id="list-security-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-security-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show security tag details

<a id="opIdgetSecurityTag"></a>

> Code samples

```bash
curl https://example.com/entities/security-tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/security-tags/{id}`

Show security tag details

<h3 id="show-security-tag-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "description": "string",
  "direct_security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "nsx_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "vendor_id": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-security-tag-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SecurityTag](#schemasecuritytag)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List service groups

<a id="opIdlistServiceGroups"></a>

> Code samples

```bash
curl https://example.com/entities/service-groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/service-groups`

List service groups

<h3 id="list-service-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-service-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show service group details

<a id="opIdgetServiceGroup"></a>

> Code samples

```bash
curl https://example.com/entities/service-groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/service-groups/{id}`

Show service group details

<h3 id="show-service-group-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-service-group-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BaseServiceGroup](#schemabaseservicegroup)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List services

<a id="opIdlistServices"></a>

> Code samples

```bash
curl https://example.com/entities/services \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/services`

List services

<h3 id="list-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show service details

<a id="opIdgetService"></a>

> Code samples

```bash
curl https://example.com/entities/services/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/services/{id}`

Show service details

<h3 id="show-service-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "port_ranges": [
    {
      "display": "string",
      "end": 0,
      "iana_name": "string",
      "iana_port_display": "string",
      "start": 0
    }
  ],
  "protocol": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-service-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BaseService](#schemabaseservice)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List vCenter datacenters

<a id="opIdlistDatacenters"></a>

> Code samples

```bash
curl https://example.com/entities/vc-datacenters \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/vc-datacenters`

List vCenter datacenters

<h3 id="list-vcenter-datacenters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-vcenter-datacenters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show vCenter datacenter details

<a id="opIdgetDatacenter"></a>

> Code samples

```bash
curl https://example.com/entities/vc-datacenters/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/vc-datacenters/{id}`

Show vCenter datacenter details

<h3 id="show-vcenter-datacenter-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|time|query|integer(int64)|false|time in epoch seconds|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-vcenter-datacenter-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VCDatacenter](#schemavcdatacenter)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List vCenter managers

<a id="opIdlistVcenterManagers"></a>

> Code samples

```bash
curl https://example.com/entities/vcenter-managers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/vcenter-managers`

List vCenter managers

<h3 id="list-vcenter-managers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-vcenter-managers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show vCenter manager details

<a id="opIdgetVcenterManager"></a>

> Code samples

```bash
curl https://example.com/entities/vcenter-managers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/vcenter-managers/{id}`

Show vCenter manager details

<h3 id="show-vcenter-manager-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "fqdn": "string",
  "ip_address": {
    "ip_address": "string",
    "netmask": "string",
    "network_address": "string"
  },
  "nsx_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vm": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-vcenter-manager-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VCenterManager](#schemavcentermanager)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List vmknics

<a id="opIdlistVmknics"></a>

> Code samples

```bash
curl https://example.com/entities/vmknics \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/vmknics`

List vmknics

<h3 id="list-vmknics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-vmknics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show vmknic details

<a id="opIdgetVmknic"></a>

> Code samples

```bash
curl https://example.com/entities/vmknics/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/vmknics/{id}`

Show vmknic details

<h3 id="show-vmknic-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "host": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "ip_addresses": [
    {
      "ip_address": "string",
      "netmask": "string",
      "network_address": "string"
    }
  ],
  "layer2_network": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vlan": {
    "begin": 0,
    "end": 0
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-vmknic-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Vmknic](#schemavmknic)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List vms

<a id="opIdlistVms"></a>

> Code samples

```bash
curl https://example.com/entities/vms \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/vms`

List vms

<h3 id="list-vms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-vms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show vm details

<a id="opIdgetVm"></a>

> Code samples

```bash
curl https://example.com/entities/vms/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/vms/{id}`

Show vm details

<h3 id="show-vm-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "default_gateway": "string",
  "destination_firewall_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "ip_addresses": [
    {
      "ip_address": "string",
      "netmask": "string",
      "network_address": "string"
    }
  ],
  "ip_sets": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_firewall_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "vnics": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-vm-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BaseVirtualMachine](#schemabasevirtualmachine)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List vnics

<a id="opIdlistVnics"></a>

> Code samples

```bash
curl https://example.com/entities/vnics \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/vnics`

List vnics

<h3 id="list-vnics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="list-vnics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show vnic details

<a id="opIdgetVnic"></a>

> Code samples

```bash
curl https://example.com/entities/vnics/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /entities/vnics/{id}`

Show vnic details

<h3 id="show-vnic-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|time|query|integer(int64)|false|time in epoch seconds|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "ip_addresses": [
    {
      "ip_address": "string",
      "netmask": "string",
      "network_address": "string"
    }
  ],
  "layer2_network": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vlan": {
    "begin": 0,
    "end": 0
  },
  "vm": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="show-vnic-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BaseVnic](#schemabasevnic)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="vrealize-network-insight-api-reference-search">Search</h1>

Search APIs

## Search entities

<a id="opIdsearchEntities"></a>

> Code samples

```bash
curl https://example.com/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cursor": "string",
    "entity_type": "Group",
    "filter": "string",
    "size": 0,
    "sort_by": {
      "field": "string",
      "order": "ASC"
    },
    "time_range": {
      "end_time": 0,
      "start_time": 0
    }
  }'
```

`POST /search`

Using search API you can search vRealize Network Insight entities by specifying entity type and filter expression.
A filter expression is a predicate expression (similar to SQL where clause) used to define the search criteria.
Please refer to API Guide on details of how to construct filter expression. A successful search request will return a
list of entity ids that matches the search criteria.

> Body parameter

```json
{
  "cursor": "string",
  "entity_type": "Group",
  "filter": "string",
  "size": 0,
  "sort_by": {
    "field": "string",
    "order": "ASC"
  },
  "time_range": {
    "end_time": 0,
    "start_time": 0
  }
}
```

<h3 id="search-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchRequest](#schemasearchrequest)|false|Search Request|
|» cursor|body|string|false|none|
|» entity_type|body|[AllEntityType](#schemaallentitytype)|false|none|
|» filter|body|string|false|query filter|
|» size|body|integer(int32)|false|none|
|» sort_by|body|[SortByClause](#schemasortbyclause)|false|none|
|» time_range|body|[TimeRange](#schematimerange)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entity_type|Group|
|» entity_type|BaseSecurityGroup|
|» entity_type|BaseEvent|
|» entity_type|BaseVirtualMachine|
|» entity_type|BaseFirewallRule|
|» entity_type|BaseIPSet|
|» entity_type|BaseL2Network|
|» entity_type|BaseFirewall|
|» entity_type|BaseService|
|» entity_type|BaseServiceGroup|
|» entity_type|BaseVnic|
|» entity_type|VirtualMachine|
|» entity_type|EC2Instance|
|» entity_type|Host|
|» entity_type|Vnic|
|» entity_type|Vmknic|
|» entity_type|VxlanLayer2Network|
|» entity_type|VlanL2Network|
|» entity_type|Cluster|
|» entity_type|SecurityTag|
|» entity_type|ResourcePool|
|» entity_type|NSXIPSet|
|» entity_type|EC2IPSet|
|» entity_type|NSXSecurityGroup|
|» entity_type|EC2SecurityGroup|
|» entity_type|Flow|
|» entity_type|ProblemEvent|
|» entity_type|Application|
|» entity_type|Tier|
|» entity_type|NSXFirewallRule|
|» entity_type|EC2SGFirewallRule|
|» entity_type|NSXRedirectRule|
|» entity_type|VCenterManager|
|» entity_type|NSXVManager|
|» entity_type|BaseManager|
|» entity_type|BaseNSXManager|
|» entity_type|NSXService|
|» entity_type|EC2Service|
|» entity_type|VPC|
|» entity_type|NSXDistributedFirewall|
|» entity_type|EC2Firewall|
|» entity_type|NSXServiceGroup|
|» entity_type|DistributedVirtualSwitch|
|» entity_type|DistributedVirtualPortgroup|
|» entity_type|VCDatacenter|
|» entity_type|Datastore|
|» entity_type|Folder|

> Example responses

> 200 Response

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="search-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PagedListResponseWithTime](#schemapagedlistresponsewithtime)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="vrealize-network-insight-api-reference-infrastructure">Infrastructure</h1>

Infra APIs

## List nodes

<a id="opIdlistNodes"></a>

> Code samples

```bash
curl https://example.com/infra/nodes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /infra/nodes`

Get list of infrastructure nodes. Only admin users can retrieve this information.

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "entity_type": "Node",
      "id": "1000:104:12213212"
    }
  ],
  "total_count": 1
}
```

<h3 id="list-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NodeListResult](#schemanodelistresult)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show node details

<a id="opIdgetNode"></a>

> Code samples

```bash
curl https://example.com/infra/nodes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /infra/nodes/{id}`

Get details of infrastructure nodes. Only admin users can get this information. The proxy id is
required for adding a data source for selecting appropriate proxy node to add the data source.

<h3 id="show-node-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "entity_type": "Node",
  "id": "string",
  "ip_address": "string",
  "name": "string",
  "node_id": "string",
  "node_type": "PROXY_VM"
}
```

<h3 id="show-node-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Node](#schemanode)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="vrealize-network-insight-api-reference-applications">Applications</h1>

Applications APIs

## List applications

<a id="opIdlistApplications"></a>

> Code samples

```bash
curl https://example.com/groups/applications \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /groups/applications`

List applications

<h3 id="list-applications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|number|false|page size of results|
|cursor|query|string|false|cursor from previous response|
|start_time|query|number|false|start time for query in epoch seconds|
|end_time|query|number|false|end time for query in epoch seconds|

> Example responses

> 200 Response

```json
{
  "cursor": "string",
  "end_time": 0,
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "VirtualMachine"
    }
  ],
  "start_time": 0,
  "total_count": 0
}
```

<h3 id="list-applications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagedListResponse](#schemapagedlistresponse)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create an application

<a id="opIdaddApplication"></a>

> Code samples

```bash
curl https://example.com/groups/applications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`POST /groups/applications`

Application is a group of tiers. A tier is a group of virtual machines based on membership criteria. Tiers are bound to single
application. An application name is unique and should not conflict with another application name.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="create-an-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApplicationRequest](#schemaapplicationrequest)|true|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "create_time": 0,
  "created_by": "string",
  "last_modified_by": "string",
  "last_modified_time": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="create-an-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[Application](#schemaapplication)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show application details

<a id="opIdgetApplication"></a>

> Code samples

```bash
curl https://example.com/groups/applications/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /groups/applications/{id}`

Show application details

<h3 id="show-application-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "create_time": 0,
  "created_by": "string",
  "last_modified_by": "string",
  "last_modified_time": 0
}
```

<h3 id="show-application-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Application](#schemaapplication)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete an application

<a id="opIddeleteApplication"></a>

> Code samples

```bash
curl https://example.com/groups/applications/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /groups/applications/{id}`

Deleting an application deletes all the tiers of the application along with the application

<h3 id="delete-an-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

<h3 id="delete-an-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List tiers of an application

<a id="opIdlistApplicationTiers"></a>

> Code samples

```bash
curl https://example.com/groups/applications/string/tiers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /groups/applications/{id}/tiers`

List tiers of an application

<h3 id="list-tiers-of-an-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "name": "string",
      "application": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "group_membership_criteria": [
        {
          "ip_address_membership_criteria": {
            "ip_addresses": [
              "string"
            ]
          },
          "membership_type": "SearchMembershipCriteria",
          "search_membership_criteria": {
            "entity_type": "Group",
            "filter": "string"
          }
        }
      ]
    }
  ]
}
```

<h3 id="list-tiers-of-an-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TierListResponse](#schematierlistresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create tier in application

<a id="opIdaddTier"></a>

> Code samples

```bash
curl https://example.com/groups/applications/string/tiers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "group_membership_criteria": [
      {
        "membership_type": "SearchMembershipCriteria",
        "search_membership_criteria": {
          "entity_type": "VirtualMachine",
          "filter": "security_groups.entity_id = '\''18230:82:604573173'\''"
        }
      }
    ],
    "name": "tier-1"
  }'
```

`POST /groups/applications/{id}/tiers`

Create a tier of an application by with specified membership criteria. The membership criteria id defined in terms of
virtual machines or ip addresses/subnet. Please refer to API Guide on how to construct membership criteria.

> Body parameter

```json
{
  "group_membership_criteria": [
    {
      "membership_type": "SearchMembershipCriteria",
      "search_membership_criteria": {
        "entity_type": "VirtualMachine",
        "filter": "security_groups.entity_id = '18230:82:604573173'"
      }
    }
  ],
  "name": "tier-1"
}
```

<h3 id="create-tier-in-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|body|body|[TierRequest](#schematierrequest)|true|none|
|» group_membership_criteria|body|[[GroupMembershipCriteria](#schemagroupmembershipcriteria)]|false|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "application": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "group_membership_criteria": [
    {
      "ip_address_membership_criteria": {
        "ip_addresses": [
          "string"
        ]
      },
      "membership_type": "SearchMembershipCriteria",
      "search_membership_criteria": {
        "entity_type": "Group",
        "filter": "string"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="create-tier-in-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[Tier](#schematier)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show tier details

<a id="opIdgetApplicationTier"></a>

> Code samples

```bash
curl https://example.com/groups/applications/string/tiers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /groups/applications/{id}/tiers/{tier-id}`

Show tier details

<h3 id="show-tier-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|tier-id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "application": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "group_membership_criteria": [
    {
      "ip_address_membership_criteria": {
        "ip_addresses": [
          "string"
        ]
      },
      "membership_type": "SearchMembershipCriteria",
      "search_membership_criteria": {
        "entity_type": "Group",
        "filter": "string"
      }
    }
  ]
}
```

<h3 id="show-tier-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tier](#schematier)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete tier

<a id="opIddeleteTier"></a>

> Code samples

```bash
curl https://example.com/groups/applications/string/tiers/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /groups/applications/{id}/tiers/{tier-id}`

Delete tier of an application

<h3 id="delete-tier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|entity id|
|tier-id|path|string|true|none|

<h3 id="delete-tier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Show tier details

<a id="opIdgetTier"></a>

> Code samples

```bash
curl https://example.com/groups/tiers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /groups/tiers/{tier-id}`

Show tier details

<h3 id="show-tier-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tier-id|path|string|true|none|
|Authorization|header|string(NetworkInsight <token>)|true|Authorization Header|

> Example responses

> 200 Response

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "application": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "group_membership_criteria": [
    {
      "ip_address_membership_criteria": {
        "ip_addresses": [
          "string"
        ]
      },
      "membership_type": "SearchMembershipCriteria",
      "search_membership_criteria": {
        "entity_type": "Group",
        "filter": "string"
      }
    }
  ]
}
```

<h3 id="show-tier-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tier](#schematier)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="vrealize-network-insight-api-reference-microsegmentation">Microsegmentation</h1>

Micro-segmentation APIs

## Get logical recommended rules

<a id="opIdlistRecommendedRules"></a>

> Code samples

```bash
curl https://example.com/micro-seg/recommended-rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "group_1": {
      "entity": {
        "entity_id": "10000:562:1904698621",
        "entity_type": "Tier"
      }
    },
    "group_2": {
      "entity": {
        "entity_id": "10000:562:1780351215",
        "entity_type": "Tier"
      }
    }
  }'
```

`POST /micro-seg/recommended-rules`

Get recommended firewall rules based on the flow data gathered by vRealize Network Insight.
This API provides service to retrieve recommended rules based on flow traffic that is observed between
two groups OR for a single group based on all the inbound and outboud traffic for that group.
In case two groups are provided, both the groups should be of same type.
Currently supported groups are Application, Tier, NSXSecurityGroup, EC2SecurityGroup.

> Body parameter

```json
{
  "group_1": {
    "entity": {
      "entity_id": "10000:562:1904698621",
      "entity_type": "Tier"
    }
  },
  "group_2": {
    "entity": {
      "entity_id": "10000:562:1780351215",
      "entity_type": "Tier"
    }
  }
}
```

<h3 id="get-logical-recommended-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RecommendedRulesRequest](#schemarecommendedrulesrequest)|false|Recommended Rules Request|
|» group_1|body|[MicroSecGroup](#schemamicrosecgroup)|false|none|
|» group_2|body|[MicroSecGroup](#schemamicrosecgroup)|false|none|
|» time_range|body|[TimeRange](#schematimerange)|false|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "action": "ALLOW",
      "destinations": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ],
      "port_ranges": [
        {
          "end": 0,
          "start": 0
        }
      ],
      "protocols": [
        "string"
      ],
      "sources": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "time_range": {
    "end_time": 0,
    "start_time": 0
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

<h3 id="get-logical-recommended-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RecommendedRules](#schemarecommendedrules)|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Export recommended rules for NSX-V

<a id="opIdexportNsxRecommendedRules"></a>

> Code samples

```bash
curl https://example.com/micro-seg/recommended-rules/nsx \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "group_1": {
      "entity": {
        "entity_id": "10000:562:1904698621",
        "entity_type": "Tier"
      }
    },
    "group_2": {
      "entity": {
        "entity_id": "10000:562:1780351215",
        "entity_type": "Tier"
      }
    }
  }'
```

`POST /micro-seg/recommended-rules/nsx`

Export recommended firewall rules based on the flow data gathered by vRealize Network Insight in NSX-V compatible
format

> Body parameter

```json
{
  "group_1": {
    "entity": {
      "entity_id": "10000:562:1904698621",
      "entity_type": "Tier"
    }
  },
  "group_2": {
    "entity": {
      "entity_id": "10000:562:1780351215",
      "entity_type": "Tier"
    }
  }
}
```

<h3 id="export-recommended-rules-for-nsx-v-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RecommendedRulesRequest](#schemarecommendedrulesrequest)|false|NSX Recommended Rules Request|
|» group_1|body|[MicroSecGroup](#schemamicrosecgroup)|false|none|
|» group_2|body|[MicroSecGroup](#schemamicrosecgroup)|false|none|
|» time_range|body|[TimeRange](#schematimerange)|false|none|

<h3 id="export-recommended-rules-for-nsx-v-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="vrealize-network-insight-api-reference-info">Info</h1>

Info APIs

## Show version info

<a id="opIdgetVersion"></a>

> Code samples

```bash
curl https://example.com/info/version \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /info/version`

Show version info

> Example responses

> 200 Response

```json
{
  "api_version": "string"
}
```

<h3 id="show-version-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VersionResponse](#schemaversionresponse)|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_AllEntityType">AllEntityType</h2>
<!-- backwards compatibility -->
<a id="schemaallentitytype"></a>
<a id="schema_AllEntityType"></a>
<a id="tocSallentitytype"></a>
<a id="tocsallentitytype"></a>

```json
"Group"
```

<h2 id="tocS_ApiError">ApiError</h2>
<!-- backwards compatibility -->
<a id="schemaapierror"></a>
<a id="schema_ApiError"></a>
<a id="tocSapierror"></a>
<a id="tocsapierror"></a>

```json
{
  "code": 0,
  "details": [
    {
      "code": 0,
      "message": "string",
      "target": [
        "string"
      ]
    }
  ],
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|details|[[ErrorDetail](#schemaerrordetail)]|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_Application">Application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "create_time": 0,
  "created_by": "string",
  "last_modified_by": "string",
  "last_modified_time": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|create_time|integer(int64)|false|none|none|
|created_by|string|false|none|none|
|last_modified_by|string|false|none|none|
|last_modified_time|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_ApplicationRequest">ApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationrequest"></a>
<a id="schema_ApplicationRequest"></a>
<a id="tocSapplicationrequest"></a>
<a id="tocsapplicationrequest"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_AristaSwitchDataSource">AristaSwitchDataSource</h2>
<!-- backwards compatibility -->
<a id="schemaaristaswitchdatasource"></a>
<a id="schema_AristaSwitchDataSource"></a>
<a id="tocSaristaswitchdatasource"></a>
<a id="tocsaristaswitchdatasource"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_AristaSwitchDataSourceRequest">AristaSwitchDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaristaswitchdatasourcerequest"></a>
<a id="schema_AristaSwitchDataSourceRequest"></a>
<a id="tocSaristaswitchdatasourcerequest"></a>
<a id="tocsaristaswitchdatasourcerequest"></a>

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|true|none|none|
|notes|string|false|none|none|
|proxy_id|string|true|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

<h2 id="tocS_BaseDataSource">BaseDataSource</h2>
<!-- backwards compatibility -->
<a id="schemabasedatasource"></a>
<a id="schema_BaseDataSource"></a>
<a id="tocSbasedatasource"></a>
<a id="tocsbasedatasource"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_BaseDataSourceRequest">BaseDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemabasedatasourcerequest"></a>
<a id="schema_BaseDataSourceRequest"></a>
<a id="tocSbasedatasourcerequest"></a>
<a id="tocsbasedatasourcerequest"></a>

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|true|none|none|
|notes|string|false|none|none|
|proxy_id|string|true|none|proxy vm which should register this vcenter|

<h2 id="tocS_BaseEntity">BaseEntity</h2>
<!-- backwards compatibility -->
<a id="schemabaseentity"></a>
<a id="schema_BaseEntity"></a>
<a id="tocSbaseentity"></a>
<a id="tocsbaseentity"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_BaseEvent">BaseEvent</h2>
<!-- backwards compatibility -->
<a id="schemabaseevent"></a>
<a id="schema_BaseEvent"></a>
<a id="tocSbaseevent"></a>
<a id="tocsbaseevent"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "admin_state": "ENABLED",
  "anchor_entities": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "archived": true,
  "event_tags": [
    "string"
  ],
  "event_time_epoch_ms": 0,
  "message": "string",
  "related_entities": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|admin_state|string|false|none|none|
|anchor_entities|[[Reference](#schemareference)]|false|none|none|
|archived|boolean|false|none|none|
|event_tags|[string]|false|none|none|
|event_time_epoch_ms|integer(int64)|false|none|none|
|message|string|false|none|none|
|related_entities|[[Reference](#schemareference)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|
|admin_state|ENABLED|
|admin_state|DISABLED|

<h2 id="tocS_BaseFirewall">BaseFirewall</h2>
<!-- backwards compatibility -->
<a id="schemabasefirewall"></a>
<a id="schema_BaseFirewall"></a>
<a id="tocSbasefirewall"></a>
<a id="tocsbasefirewall"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "exclusions": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "firewall_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|exclusions|[[Reference](#schemareference)]|false|none|none|
|firewall_rules|[[RuleSet](#schemaruleset)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_BaseFirewallRule">BaseFirewallRule</h2>
<!-- backwards compatibility -->
<a id="schemabasefirewallrule"></a>
<a id="schema_BaseFirewallRule"></a>
<a id="tocSbasefirewallrule"></a>
<a id="tocsbasefirewallrule"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "action": "ALLOW",
  "destination_any": true,
  "destination_inversion": true,
  "destinations": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "disabled": true,
  "port_ranges": [
    {
      "display": "string",
      "end": 0,
      "iana_name": "string",
      "iana_port_display": "string",
      "start": 0
    }
  ],
  "rule_id": "string",
  "section_id": "string",
  "section_name": "string",
  "sequence_number": 0,
  "service_any": true,
  "services": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_any": true,
  "source_inversion": true,
  "sources": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|action|[FirewallAction](#schemafirewallaction)|false|none|none|
|destination_any|boolean|false|none|none|
|destination_inversion|boolean|false|none|none|
|destinations|[[Reference](#schemareference)]|false|none|none|
|disabled|boolean|false|none|none|
|port_ranges|[[PortRange](#schemaportrange)]|false|none|none|
|rule_id|string|false|none|none|
|section_id|string|false|none|none|
|section_name|string|false|none|none|
|sequence_number|integer|false|none|none|
|service_any|boolean|false|none|none|
|services|[[Reference](#schemareference)]|false|none|none|
|source_any|boolean|false|none|none|
|source_inversion|boolean|false|none|none|
|sources|[[Reference](#schemareference)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|
|action|ALLOW|
|action|ACCEPT|
|action|DENY|
|action|DROP|
|action|REJECT|
|action|REDIRECT|
|action|DO_NOT_REDIRECT|

<h2 id="tocS_BaseIPSet">BaseIPSet</h2>
<!-- backwards compatibility -->
<a id="schemabaseipset"></a>
<a id="schema_BaseIPSet"></a>
<a id="tocSbaseipset"></a>
<a id="tocsbaseipset"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "direct_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "direct_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "indirect_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "indirect_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "ip_addresses": [
    {
      "ip_address": "string",
      "netmask": "string",
      "network_address": "string"
    }
  ],
  "ip_numeric_ranges": [
    {
      "end": 0,
      "start": 0
    }
  ],
  "ip_ranges": [
    {
      "end_ip": "string",
      "start_ip": "string"
    }
  ],
  "parent_security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "translated_vm_count": 0,
  "vendor": "string",
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|direct_destination_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|direct_source_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|indirect_destination_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|indirect_source_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|ip_addresses|[[IpV4Address](#schemaipv4address)]|false|none|none|
|ip_numeric_ranges|[[IpNumericRange](#schemaipnumericrange)]|false|none|none|
|ip_ranges|[[IpAddressRange](#schemaipaddressrange)]|false|none|none|
|parent_security_groups|[[Reference](#schemareference)]|false|none|none|
|translated_vm_count|integer(int32)|false|none|none|
|vendor|string|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_BaseL2Network">BaseL2Network</h2>
<!-- backwards compatibility -->
<a id="schemabasel2network"></a>
<a id="schema_BaseL2Network"></a>
<a id="tocSbasel2network"></a>
<a id="tocsbasel2network"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "gateways": [
    "string"
  ],
  "network_addresses": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|gateways|[string]|false|none|none|
|network_addresses|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_BaseManager">BaseManager</h2>
<!-- backwards compatibility -->
<a id="schemabasemanager"></a>
<a id="schema_BaseManager"></a>
<a id="tocSbasemanager"></a>
<a id="tocsbasemanager"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_BaseNSXManager">BaseNSXManager</h2>
<!-- backwards compatibility -->
<a id="schemabasensxmanager"></a>
<a id="schema_BaseNSXManager"></a>
<a id="tocSbasensxmanager"></a>
<a id="tocsbasensxmanager"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_BaseSecurityGroup">BaseSecurityGroup</h2>
<!-- backwards compatibility -->
<a id="schemabasesecuritygroup"></a>
<a id="schema_BaseSecurityGroup"></a>
<a id="tocSbasesecuritygroup"></a>
<a id="tocsbasesecuritygroup"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "direct_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "direct_members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "direct_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "excluded_members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "indirect_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "indirect_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "parents": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "translated_vm_count": 0,
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|members|[[Reference](#schemareference)]|false|none|none|
|direct_destination_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|direct_members|[[Reference](#schemareference)]|false|none|none|
|direct_source_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|excluded_members|[[Reference](#schemareference)]|false|none|none|
|indirect_destination_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|indirect_source_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|members|[[Reference](#schemareference)]|false|none|none|
|parents|[[Reference](#schemareference)]|false|none|none|
|translated_vm_count|integer|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_BaseService">BaseService</h2>
<!-- backwards compatibility -->
<a id="schemabaseservice"></a>
<a id="schema_BaseService"></a>
<a id="tocSbaseservice"></a>
<a id="tocsbaseservice"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "port_ranges": [
    {
      "display": "string",
      "end": 0,
      "iana_name": "string",
      "iana_port_display": "string",
      "start": 0
    }
  ],
  "protocol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|port_ranges|[[PortRange](#schemaportrange)]|false|none|none|
|protocol|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_BaseServiceGroup">BaseServiceGroup</h2>
<!-- backwards compatibility -->
<a id="schemabaseservicegroup"></a>
<a id="schema_BaseServiceGroup"></a>
<a id="tocSbaseservicegroup"></a>
<a id="tocsbaseservicegroup"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|members|[[Reference](#schemareference)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_BaseVirtualMachine">BaseVirtualMachine</h2>
<!-- backwards compatibility -->
<a id="schemabasevirtualmachine"></a>
<a id="schema_BaseVirtualMachine"></a>
<a id="tocSbasevirtualmachine"></a>
<a id="tocsbasevirtualmachine"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "default_gateway": "string",
  "destination_firewall_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "ip_addresses": [
    {
      "ip_address": "string",
      "netmask": "string",
      "network_address": "string"
    }
  ],
  "ip_sets": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_firewall_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "vnics": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|default_gateway|string|false|none|none|
|destination_firewall_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|ip_addresses|[[IpV4Address](#schemaipv4address)]|false|none|none|
|ip_sets|[[Reference](#schemareference)]|false|none|none|
|security_groups|[[Reference](#schemareference)]|false|none|none|
|source_firewall_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|vnics|[[Reference](#schemareference)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_BaseVnic">BaseVnic</h2>
<!-- backwards compatibility -->
<a id="schemabasevnic"></a>
<a id="schema_BaseVnic"></a>
<a id="tocSbasevnic"></a>
<a id="tocsbasevnic"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "ip_addresses": [
    {
      "ip_address": "string",
      "netmask": "string",
      "network_address": "string"
    }
  ],
  "layer2_network": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vlan": {
    "begin": 0,
    "end": 0
  },
  "vm": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|ip_addresses|[[IpV4Address](#schemaipv4address)]|false|none|none|
|layer2_network|[Reference](#schemareference)|false|none|none|
|vlan|[Vlan](#schemavlan)|false|none|none|
|vm|[Reference](#schemareference)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_BrocadeSwitchDataSource">BrocadeSwitchDataSource</h2>
<!-- backwards compatibility -->
<a id="schemabrocadeswitchdatasource"></a>
<a id="schema_BrocadeSwitchDataSource"></a>
<a id="tocSbrocadeswitchdatasource"></a>
<a id="tocsbrocadeswitchdatasource"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_BrocadeSwitchDataSourceRequest">BrocadeSwitchDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemabrocadeswitchdatasourcerequest"></a>
<a id="schema_BrocadeSwitchDataSourceRequest"></a>
<a id="tocSbrocadeswitchdatasourcerequest"></a>
<a id="tocsbrocadeswitchdatasourcerequest"></a>

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|true|none|none|
|notes|string|false|none|none|
|proxy_id|string|true|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

<h2 id="tocS_CheckpointFirewallDataSource">CheckpointFirewallDataSource</h2>
<!-- backwards compatibility -->
<a id="schemacheckpointfirewalldatasource"></a>
<a id="schema_CheckpointFirewallDataSource"></a>
<a id="tocScheckpointfirewalldatasource"></a>
<a id="tocscheckpointfirewalldatasource"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_CheckpointFirewallDataSourceRequest">CheckpointFirewallDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckpointfirewalldatasourcerequest"></a>
<a id="schema_CheckpointFirewallDataSourceRequest"></a>
<a id="tocScheckpointfirewalldatasourcerequest"></a>
<a id="tocscheckpointfirewalldatasourcerequest"></a>

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|true|none|none|
|notes|string|false|none|none|
|proxy_id|string|true|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

<h2 id="tocS_CiscoSwitchDataSource">CiscoSwitchDataSource</h2>
<!-- backwards compatibility -->
<a id="schemaciscoswitchdatasource"></a>
<a id="schema_CiscoSwitchDataSource"></a>
<a id="tocSciscoswitchdatasource"></a>
<a id="tocsciscoswitchdatasource"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "switch_type": "CATALYST_3000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|
|switch_type|[CiscoSwitchType](#schemaciscoswitchtype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|
|switch_type|CATALYST_3000|
|switch_type|CATALYST_4500|
|switch_type|CATALYST_6500|
|switch_type|NEXUS_5K|
|switch_type|NEXUS_7K|
|switch_type|NEXUS_9K|

<h2 id="tocS_CiscoSwitchDataSourceRequest">CiscoSwitchDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaciscoswitchdatasourcerequest"></a>
<a id="schema_CiscoSwitchDataSourceRequest"></a>
<a id="tocSciscoswitchdatasourcerequest"></a>
<a id="tocsciscoswitchdatasourcerequest"></a>

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "switch_type": "CATALYST_3000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|true|none|none|
|notes|string|false|none|none|
|proxy_id|string|true|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|
|switch_type|[CiscoSwitchType](#schemaciscoswitchtype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|switch_type|CATALYST_3000|
|switch_type|CATALYST_4500|
|switch_type|CATALYST_6500|
|switch_type|NEXUS_5K|
|switch_type|NEXUS_7K|
|switch_type|NEXUS_9K|

<h2 id="tocS_CiscoSwitchType">CiscoSwitchType</h2>
<!-- backwards compatibility -->
<a id="schemaciscoswitchtype"></a>
<a id="schema_CiscoSwitchType"></a>
<a id="tocSciscoswitchtype"></a>
<a id="tocsciscoswitchtype"></a>

```json
"CATALYST_3000"
```

<h2 id="tocS_Cluster">Cluster</h2>
<!-- backwards compatibility -->
<a id="schemacluster"></a>
<a id="schema_Cluster"></a>
<a id="tocScluster"></a>
<a id="tocscluster"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "nsx_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "num_cpu_cores": 0,
  "num_datastores": 0,
  "num_hosts": 0,
  "total_cpus": 0,
  "total_memory": 0,
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|nsx_manager|[Reference](#schemareference)|false|none|none|
|num_cpu_cores|integer(int32)|false|none|none|
|num_datastores|integer(int32)|false|none|none|
|num_hosts|integer(int32)|false|none|none|
|total_cpus|integer(int32)|false|none|none|
|total_memory|integer(int64)|false|none|none|
|vcenter_manager|[Reference](#schemareference)|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_DataSourceEntityId">DataSourceEntityId</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceentityid"></a>
<a id="schema_DataSourceEntityId"></a>
<a id="tocSdatasourceentityid"></a>
<a id="tocsdatasourceentityid"></a>

```json
{
  "entity_id": "1000:104:12213212",
  "entity_type": "CiscoSwitchDataSource"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|Entity Identifier|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_DataSourceListResponse">DataSourceListResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcelistresponse"></a>
<a id="schema_DataSourceListResponse"></a>
<a id="tocSdatasourcelistresponse"></a>
<a id="tocsdatasourcelistresponse"></a>

```json
{
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "CiscoSwitchDataSource"
    }
  ],
  "total_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[DataSourceEntityId](#schemadatasourceentityid)]|false|none|none|
|total_count|integer|false|none|none|

<h2 id="tocS_DataSourceType">DataSourceType</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcetype"></a>
<a id="schema_DataSourceType"></a>
<a id="tocSdatasourcetype"></a>
<a id="tocsdatasourcetype"></a>

```json
"CiscoSwitchDataSource"
```

<h2 id="tocS_DatasourceHealth">DatasourceHealth</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcehealth"></a>
<a id="schema_DatasourceHealth"></a>
<a id="tocSdatasourcehealth"></a>
<a id="tocsdatasourcehealth"></a>

```json
{
  "health_error_code": "string",
  "health_message": "string",
  "health_status": "HEALTHY"
}
```

Datasource Health state

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|health_error_code|string|false|none|none|
|health_message|string|false|none|none|
|health_status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|health_status|HEALTHY|
|health_status|HEALTHY_WITH_WARNINGS|
|health_status|UNHEALTHY|

<h2 id="tocS_Datastore">Datastore</h2>
<!-- backwards compatibility -->
<a id="schemadatastore"></a>
<a id="schema_Datastore"></a>
<a id="tocSdatastore"></a>
<a id="tocsdatastore"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|vcenter_manager|[Reference](#schemareference)|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_DellSwitchDataSource">DellSwitchDataSource</h2>
<!-- backwards compatibility -->
<a id="schemadellswitchdatasource"></a>
<a id="schema_DellSwitchDataSource"></a>
<a id="tocSdellswitchdatasource"></a>
<a id="tocsdellswitchdatasource"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "switch_type": "FORCE_10_MXL_10"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|
|switch_type|[DellSwitchType](#schemadellswitchtype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|
|switch_type|FORCE_10_MXL_10|
|switch_type|POWERCONNECT_8024|
|switch_type|S4048|
|switch_type|Z9100|
|switch_type|S6000|

<h2 id="tocS_DellSwitchDataSourceRequest">DellSwitchDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadellswitchdatasourcerequest"></a>
<a id="schema_DellSwitchDataSourceRequest"></a>
<a id="tocSdellswitchdatasourcerequest"></a>
<a id="tocsdellswitchdatasourcerequest"></a>

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "switch_type": "FORCE_10_MXL_10"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|true|none|none|
|notes|string|false|none|none|
|proxy_id|string|true|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|
|switch_type|[DellSwitchType](#schemadellswitchtype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|switch_type|FORCE_10_MXL_10|
|switch_type|POWERCONNECT_8024|
|switch_type|S4048|
|switch_type|Z9100|
|switch_type|S6000|

<h2 id="tocS_DellSwitchType">DellSwitchType</h2>
<!-- backwards compatibility -->
<a id="schemadellswitchtype"></a>
<a id="schema_DellSwitchType"></a>
<a id="tocSdellswitchtype"></a>
<a id="tocsdellswitchtype"></a>

```json
"FORCE_10_MXL_10"
```

<h2 id="tocS_DistributedVirtualPortgroup">DistributedVirtualPortgroup</h2>
<!-- backwards compatibility -->
<a id="schemadistributedvirtualportgroup"></a>
<a id="schema_DistributedVirtualPortgroup"></a>
<a id="tocSdistributedvirtualportgroup"></a>
<a id="tocsdistributedvirtualportgroup"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "distributed_virtual_switch": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|distributed_virtual_switch|[Reference](#schemareference)|false|none|none|
|vcenter_manager|[Reference](#schemareference)|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_DistributedVirtualSwitch">DistributedVirtualSwitch</h2>
<!-- backwards compatibility -->
<a id="schemadistributedvirtualswitch"></a>
<a id="schema_DistributedVirtualSwitch"></a>
<a id="tocSdistributedvirtualswitch"></a>
<a id="tocsdistributedvirtualswitch"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "hosts": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|hosts|[[Reference](#schemareference)]|false|none|none|
|vcenter_manager|[Reference](#schemareference)|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "domain_type": "LDAP",
  "value": "example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain_type|string|false|none|none|
|value|string|false|none|domain value, not required for LOCAL domain|

#### Enumerated Values

|Property|Value|
|---|---|
|domain_type|LDAP|
|domain_type|LOCAL|

<h2 id="tocS_EC2Firewall">EC2Firewall</h2>
<!-- backwards compatibility -->
<a id="schemaec2firewall"></a>
<a id="schema_EC2Firewall"></a>
<a id="tocSec2firewall"></a>
<a id="tocsec2firewall"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "exclusions": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "firewall_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|exclusions|[[Reference](#schemareference)]|false|none|none|
|firewall_rules|[[RuleSet](#schemaruleset)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_EC2FirewallDirection">EC2FirewallDirection</h2>
<!-- backwards compatibility -->
<a id="schemaec2firewalldirection"></a>
<a id="schema_EC2FirewallDirection"></a>
<a id="tocSec2firewalldirection"></a>
<a id="tocsec2firewalldirection"></a>

```json
"INBOUND"
```

<h2 id="tocS_EC2IPSet">EC2IPSet</h2>
<!-- backwards compatibility -->
<a id="schemaec2ipset"></a>
<a id="schema_EC2IPSet"></a>
<a id="tocSec2ipset"></a>
<a id="tocsec2ipset"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "direct_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "direct_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "indirect_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "indirect_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "ip_addresses": [
    {
      "ip_address": "string",
      "netmask": "string",
      "network_address": "string"
    }
  ],
  "ip_numeric_ranges": [
    {
      "end": 0,
      "start": 0
    }
  ],
  "ip_ranges": [
    {
      "end_ip": "string",
      "start_ip": "string"
    }
  ],
  "parent_security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "translated_vm_count": 0,
  "vendor": "string",
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|direct_destination_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|direct_source_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|indirect_destination_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|indirect_source_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|ip_addresses|[[IpV4Address](#schemaipv4address)]|false|none|none|
|ip_numeric_ranges|[[IpNumericRange](#schemaipnumericrange)]|false|none|none|
|ip_ranges|[[IpAddressRange](#schemaipaddressrange)]|false|none|none|
|parent_security_groups|[[Reference](#schemareference)]|false|none|none|
|translated_vm_count|integer(int32)|false|none|none|
|vendor|string|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_EC2Instance">EC2Instance</h2>
<!-- backwards compatibility -->
<a id="schemaec2instance"></a>
<a id="schema_EC2Instance"></a>
<a id="tocSec2instance"></a>
<a id="tocsec2instance"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "default_gateway": "string",
  "destination_firewall_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "ip_addresses": [
    {
      "ip_address": "string",
      "netmask": "string",
      "network_address": "string"
    }
  ],
  "ip_sets": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_firewall_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "vnics": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "region": "string",
  "vpc": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|default_gateway|string|false|none|none|
|destination_firewall_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|ip_addresses|[[IpV4Address](#schemaipv4address)]|false|none|none|
|ip_sets|[[Reference](#schemareference)]|false|none|none|
|security_groups|[[Reference](#schemareference)]|false|none|none|
|source_firewall_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|vnics|[[Reference](#schemareference)]|false|none|none|
|region|string|false|none|none|
|vpc|[Reference](#schemareference)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_EC2NetworkInterface">EC2NetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemaec2networkinterface"></a>
<a id="schema_EC2NetworkInterface"></a>
<a id="tocSec2networkinterface"></a>
<a id="tocsec2networkinterface"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "ip_addresses": [
    {
      "ip_address": "string",
      "netmask": "string",
      "network_address": "string"
    }
  ],
  "layer2_network": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vlan": {
    "begin": 0,
    "end": 0
  },
  "vm": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|ip_addresses|[[IpV4Address](#schemaipv4address)]|false|none|none|
|layer2_network|[Reference](#schemareference)|false|none|none|
|vlan|[Vlan](#schemavlan)|false|none|none|
|vm|[Reference](#schemareference)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_EC2SGFirewallRule">EC2SGFirewallRule</h2>
<!-- backwards compatibility -->
<a id="schemaec2sgfirewallrule"></a>
<a id="schema_EC2SGFirewallRule"></a>
<a id="tocSec2sgfirewallrule"></a>
<a id="tocsec2sgfirewallrule"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "action": "ALLOW",
  "destination_any": true,
  "destination_inversion": true,
  "destinations": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "disabled": true,
  "port_ranges": [
    {
      "display": "string",
      "end": 0,
      "iana_name": "string",
      "iana_port_display": "string",
      "start": 0
    }
  ],
  "rule_id": "string",
  "section_id": "string",
  "section_name": "string",
  "sequence_number": 0,
  "service_any": true,
  "services": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_any": true,
  "source_inversion": true,
  "sources": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "direction": "INBOUND",
  "owner_security_group": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vpc": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|action|[FirewallAction](#schemafirewallaction)|false|none|none|
|destination_any|boolean|false|none|none|
|destination_inversion|boolean|false|none|none|
|destinations|[[Reference](#schemareference)]|false|none|none|
|disabled|boolean|false|none|none|
|port_ranges|[[PortRange](#schemaportrange)]|false|none|none|
|rule_id|string|false|none|none|
|section_id|string|false|none|none|
|section_name|string|false|none|none|
|sequence_number|integer|false|none|none|
|service_any|boolean|false|none|none|
|services|[[Reference](#schemareference)]|false|none|none|
|source_any|boolean|false|none|none|
|source_inversion|boolean|false|none|none|
|sources|[[Reference](#schemareference)]|false|none|none|
|direction|[EC2FirewallDirection](#schemaec2firewalldirection)|false|none|none|
|owner_security_group|[Reference](#schemareference)|false|none|none|
|vpc|[Reference](#schemareference)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|
|action|ALLOW|
|action|ACCEPT|
|action|DENY|
|action|DROP|
|action|REJECT|
|action|REDIRECT|
|action|DO_NOT_REDIRECT|
|direction|INBOUND|
|direction|OUTBOUND|

<h2 id="tocS_EC2SecurityGroup">EC2SecurityGroup</h2>
<!-- backwards compatibility -->
<a id="schemaec2securitygroup"></a>
<a id="schema_EC2SecurityGroup"></a>
<a id="tocSec2securitygroup"></a>
<a id="tocsec2securitygroup"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "direct_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "direct_members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "direct_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "excluded_members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "indirect_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "indirect_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "parents": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "translated_vm_count": 0,
  "vendor_id": "string",
  "region": "string",
  "vpc": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|members|[[Reference](#schemareference)]|false|none|none|
|direct_destination_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|direct_members|[[Reference](#schemareference)]|false|none|none|
|direct_source_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|excluded_members|[[Reference](#schemareference)]|false|none|none|
|indirect_destination_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|indirect_source_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|members|[[Reference](#schemareference)]|false|none|none|
|parents|[[Reference](#schemareference)]|false|none|none|
|translated_vm_count|integer|false|none|none|
|vendor_id|string|false|none|none|
|region|string|false|none|none|
|vpc|[Reference](#schemareference)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_EC2Service">EC2Service</h2>
<!-- backwards compatibility -->
<a id="schemaec2service"></a>
<a id="schema_EC2Service"></a>
<a id="tocSec2service"></a>
<a id="tocsec2service"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "port_ranges": [
    {
      "display": "string",
      "end": 0,
      "iana_name": "string",
      "iana_port_display": "string",
      "start": 0
    }
  ],
  "protocol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|port_ranges|[[PortRange](#schemaportrange)]|false|none|none|
|protocol|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_EntityId">EntityId</h2>
<!-- backwards compatibility -->
<a id="schemaentityid"></a>
<a id="schema_EntityId"></a>
<a id="tocSentityid"></a>
<a id="tocsentityid"></a>

```json
{
  "entity_id": "1000:104:12213212",
  "entity_type": "VirtualMachine"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|Entity Identifier|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_EntityIdWithTime">EntityIdWithTime</h2>
<!-- backwards compatibility -->
<a id="schemaentityidwithtime"></a>
<a id="schema_EntityIdWithTime"></a>
<a id="tocSentityidwithtime"></a>
<a id="tocsentityidwithtime"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "time": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|Entity Identifier|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|time|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_EntityName">EntityName</h2>
<!-- backwards compatibility -->
<a id="schemaentityname"></a>
<a id="schema_EntityName"></a>
<a id="tocSentityname"></a>
<a id="tocsentityname"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "time": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|Entity Identifier|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|time|integer(int64)|false|none|none|
|name|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_EntityType">EntityType</h2>
<!-- backwards compatibility -->
<a id="schemaentitytype"></a>
<a id="schema_EntityType"></a>
<a id="tocSentitytype"></a>
<a id="tocsentitytype"></a>

```json
"VirtualMachine"
```

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
{
  "code": 0,
  "message": "string",
  "target": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|message|string|false|none|none|
|target|[string]|false|none|none|

<h2 id="tocS_FirewallAction">FirewallAction</h2>
<!-- backwards compatibility -->
<a id="schemafirewallaction"></a>
<a id="schema_FirewallAction"></a>
<a id="tocSfirewallaction"></a>
<a id="tocsfirewallaction"></a>

```json
"ALLOW"
```

<h2 id="tocS_FirewallDirection">FirewallDirection</h2>
<!-- backwards compatibility -->
<a id="schemafirewalldirection"></a>
<a id="schema_FirewallDirection"></a>
<a id="tocSfirewalldirection"></a>
<a id="tocsfirewalldirection"></a>

```json
"IN"
```

<h2 id="tocS_Flow">Flow</h2>
<!-- backwards compatibility -->
<a id="schemaflow"></a>
<a id="schema_Flow"></a>
<a id="tocSflow"></a>
<a id="tocsflow"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "destination_cluster": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "destination_datacenter": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "destination_folders": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "destination_host": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "destination_ip": {
    "ip_address": "string",
    "netmask": "string",
    "network_address": "string"
  },
  "destination_ip_sets": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "destination_l2_network": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "destination_resource_pool": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "destination_security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "destination_security_tags": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "destination_vm": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "destination_vm_tags": [
    "string"
  ],
  "destination_vnic": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "destination_vpc": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "firewall_action": "ALLOW",
  "flow_tag": [
    "TAG_TRAFFIC_TYPE_UNKNOWN"
  ],
  "port": {
    "display": "string",
    "end": 0,
    "iana_name": "string",
    "iana_port_display": "string",
    "start": 0
  },
  "protocol": "TCP",
  "source_cluster": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "source_datacenter": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "source_folders": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_host": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "source_ip": {
    "ip_address": "string",
    "netmask": "string",
    "network_address": "string"
  },
  "source_ip_sets": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_l2_network": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "source_resource_pool": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "source_security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_security_tags": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_vm": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "source_vm_tags": [
    "string"
  ],
  "source_vnic": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "source_vpc": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "traffic_type": "INTERNET_TRAFFIC",
  "within_host": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|destination_cluster|[Reference](#schemareference)|false|none|none|
|destination_datacenter|[Reference](#schemareference)|false|none|none|
|destination_folders|[[Reference](#schemareference)]|false|none|none|
|destination_host|[Reference](#schemareference)|false|none|none|
|destination_ip|[IpV4Address](#schemaipv4address)|false|none|none|
|destination_ip_sets|[[Reference](#schemareference)]|false|none|none|
|destination_l2_network|[Reference](#schemareference)|false|none|none|
|destination_resource_pool|[Reference](#schemareference)|false|none|none|
|destination_security_groups|[[Reference](#schemareference)]|false|none|none|
|destination_security_tags|[[Reference](#schemareference)]|false|none|none|
|destination_vm|[Reference](#schemareference)|false|none|none|
|destination_vm_tags|[string]|false|none|none|
|destination_vnic|[Reference](#schemareference)|false|none|none|
|destination_vpc|[Reference](#schemareference)|false|none|none|
|firewall_action|[FirewallAction](#schemafirewallaction)|false|none|none|
|flow_tag|[[FlowTag](#schemaflowtag)]|false|none|none|
|port|[PortRange](#schemaportrange)|false|none|none|
|protocol|[Protocol](#schemaprotocol)|false|none|none|
|source_cluster|[Reference](#schemareference)|false|none|none|
|source_datacenter|[Reference](#schemareference)|false|none|none|
|source_folders|[[Reference](#schemareference)]|false|none|none|
|source_host|[Reference](#schemareference)|false|none|none|
|source_ip|[IpV4Address](#schemaipv4address)|false|none|none|
|source_ip_sets|[[Reference](#schemareference)]|false|none|none|
|source_l2_network|[Reference](#schemareference)|false|none|none|
|source_resource_pool|[Reference](#schemareference)|false|none|none|
|source_security_groups|[[Reference](#schemareference)]|false|none|none|
|source_security_tags|[[Reference](#schemareference)]|false|none|none|
|source_vm|[Reference](#schemareference)|false|none|none|
|source_vm_tags|[string]|false|none|none|
|source_vnic|[Reference](#schemareference)|false|none|none|
|source_vpc|[Reference](#schemareference)|false|none|none|
|traffic_type|[FlowTrafficType](#schemaflowtraffictype)|false|none|none|
|within_host|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|
|firewall_action|ALLOW|
|firewall_action|ACCEPT|
|firewall_action|DENY|
|firewall_action|DROP|
|firewall_action|REJECT|
|firewall_action|REDIRECT|
|firewall_action|DO_NOT_REDIRECT|
|flow_tag|TAG_TRAFFIC_TYPE_UNKNOWN|
|flow_tag|TAG_INTERNET_TRAFFIC|
|flow_tag|TAG_EAST_WEST_TRAFFIC|
|flow_tag|TAG_VM_VM_TRAFFIC|
|flow_tag|TAG_VM_PHY_TRAFFIC|
|flow_tag|TAG_PHY_PHY_TRAFFIC|
|flow_tag|TAG_SRC_IP_VMKNIC|
|flow_tag|TAG_DST_IP_VMKNIC|
|flow_tag|TAG_SRC_IP_VM|
|flow_tag|TAG_DST_IP_VM|
|flow_tag|TAG_SRC_IP_INTERNET|
|flow_tag|TAG_DST_IP_INTERNET|
|flow_tag|TAG_SRC_IP_PHYSICAL|
|flow_tag|TAG_DST_IP_PHYSICAL|
|flow_tag|TAG_SAME_HOST|
|flow_tag|TAG_DIFF_HOST|
|flow_tag|TAG_SHARED_SERVICE|
|flow_tag|TAG_NOT_SHARED_SERVICE|
|flow_tag|TAG_NETWORK_SWITCHED|
|flow_tag|TAG_NETWORK_ROUTED|
|flow_tag|TAG_NETWORK_UNKNOWN|
|flow_tag|TAG_SRC_IP_VTEP|
|flow_tag|TAG_DST_IP_VTEP|
|flow_tag|TAG_UNICAST|
|flow_tag|TAG_BROADCAST|
|flow_tag|TAG_MULTICAST|
|flow_tag|TAG_SRC_IP_LINK_LOCAL|
|flow_tag|TAG_DST_IP_LINK_LOCAL|
|flow_tag|TAG_SRC_IP_CLASS_E|
|flow_tag|TAG_DST_IP_CLASS_E|
|flow_tag|TAG_SRC_IP_CLASS_A_RESERVED|
|flow_tag|TAG_DST_IP_CLASS_A_RESERVED|
|flow_tag|TAG_INVALID_IP_PACKETS|
|flow_tag|TAG_NOT_ANALYZED|
|flow_tag|TAG_GENERIC_INTERNET_SRC_IP|
|flow_tag|TAG_SNAT_DNAT_FLOW|
|flow_tag|TAG_MULTINICS|
|flow_tag|TAG_SRC_VC|
|flow_tag|TAG_DST_VC|
|flow_tag|TAG_SRC_AWS|
|flow_tag|TAG_DST_AWS|
|flow_tag|TAG_WITHIN_DC|
|flow_tag|TAG_DIFF_DC|
|flow_tag|TAG_WITHIN_VPC|
|flow_tag|TAG_DIFF_VPC|
|protocol|TCP|
|protocol|UDP|
|protocol|OTHER|
|traffic_type|INTERNET_TRAFFIC|
|traffic_type|EAST_WEST_TRAFFIC|

<h2 id="tocS_FlowTag">FlowTag</h2>
<!-- backwards compatibility -->
<a id="schemaflowtag"></a>
<a id="schema_FlowTag"></a>
<a id="tocSflowtag"></a>
<a id="tocsflowtag"></a>

```json
"TAG_TRAFFIC_TYPE_UNKNOWN"
```

<h2 id="tocS_FlowTrafficType">FlowTrafficType</h2>
<!-- backwards compatibility -->
<a id="schemaflowtraffictype"></a>
<a id="schema_FlowTrafficType"></a>
<a id="tocSflowtraffictype"></a>
<a id="tocsflowtraffictype"></a>

```json
"INTERNET_TRAFFIC"
```

<h2 id="tocS_Folder">Folder</h2>
<!-- backwards compatibility -->
<a id="schemafolder"></a>
<a id="schema_Folder"></a>
<a id="tocSfolder"></a>
<a id="tocsfolder"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|vcenter_manager|[Reference](#schemareference)|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|members|[[Reference](#schemareference)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_GroupMembershipCriteria">GroupMembershipCriteria</h2>
<!-- backwards compatibility -->
<a id="schemagroupmembershipcriteria"></a>
<a id="schema_GroupMembershipCriteria"></a>
<a id="tocSgroupmembershipcriteria"></a>
<a id="tocsgroupmembershipcriteria"></a>

```json
{
  "ip_address_membership_criteria": {
    "ip_addresses": [
      "string"
    ]
  },
  "membership_type": "SearchMembershipCriteria",
  "search_membership_criteria": {
    "entity_type": "Group",
    "filter": "string"
  }
}
```

EntityType currently restricted to VirtualMachine

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip_address_membership_criteria|[IpAddressMembershipCriteria](#schemaipaddressmembershipcriteria)|false|none|Ip Address membership definition|
|membership_type|string|false|none|none|
|search_membership_criteria|[SearchMembershipCriteria](#schemasearchmembershipcriteria)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|membership_type|SearchMembershipCriteria|
|membership_type|IPAddressMembershipCriteria|

<h2 id="tocS_HPOneViewManagerDataSource">HPOneViewManagerDataSource</h2>
<!-- backwards compatibility -->
<a id="schemahponeviewmanagerdatasource"></a>
<a id="schema_HPOneViewManagerDataSource"></a>
<a id="tocShponeviewmanagerdatasource"></a>
<a id="tocshponeviewmanagerdatasource"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_HPOneViewManagerDataSourceRequest">HPOneViewManagerDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemahponeviewmanagerdatasourcerequest"></a>
<a id="schema_HPOneViewManagerDataSourceRequest"></a>
<a id="tocShponeviewmanagerdatasourcerequest"></a>
<a id="tocshponeviewmanagerdatasourcerequest"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_HPVCManagerDataSource">HPVCManagerDataSource</h2>
<!-- backwards compatibility -->
<a id="schemahpvcmanagerdatasource"></a>
<a id="schema_HPVCManagerDataSource"></a>
<a id="tocShpvcmanagerdatasource"></a>
<a id="tocshpvcmanagerdatasource"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_HPVCManagerDataSourceRequest">HPVCManagerDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemahpvcmanagerdatasourcerequest"></a>
<a id="schema_HPVCManagerDataSourceRequest"></a>
<a id="tocShpvcmanagerdatasourcerequest"></a>
<a id="tocshpvcmanagerdatasourcerequest"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_Host">Host</h2>
<!-- backwards compatibility -->
<a id="schemahost"></a>
<a id="schema_Host"></a>
<a id="tocShost"></a>
<a id="tocshost"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "cluster": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "connection_state": "string",
  "datastores": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "maintenance_mode": "string",
  "nsx_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "service_tag": "string",
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string",
  "vm_count": 0,
  "vmknics": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|cluster|[Reference](#schemareference)|false|none|none|
|connection_state|string|false|none|none|
|datastores|[[Reference](#schemareference)]|false|none|none|
|maintenance_mode|string|false|none|none|
|nsx_manager|[Reference](#schemareference)|false|none|none|
|service_tag|string|false|none|none|
|vcenter_manager|[Reference](#schemareference)|false|none|none|
|vendor_id|string|false|none|none|
|vm_count|integer(int32)|false|none|none|
|vmknics|[[Reference](#schemareference)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_IpAddressMembershipCriteria">IpAddressMembershipCriteria</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressmembershipcriteria"></a>
<a id="schema_IpAddressMembershipCriteria"></a>
<a id="tocSipaddressmembershipcriteria"></a>
<a id="tocsipaddressmembershipcriteria"></a>

```json
{
  "ip_addresses": [
    "string"
  ]
}
```

Ip Address membership definition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip_addresses|[string]|false|none|none|

<h2 id="tocS_IpAddressRange">IpAddressRange</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressrange"></a>
<a id="schema_IpAddressRange"></a>
<a id="tocSipaddressrange"></a>
<a id="tocsipaddressrange"></a>

```json
{
  "end_ip": "string",
  "start_ip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_ip|string|false|none|none|
|start_ip|string|false|none|none|

<h2 id="tocS_IpNumericRange">IpNumericRange</h2>
<!-- backwards compatibility -->
<a id="schemaipnumericrange"></a>
<a id="schema_IpNumericRange"></a>
<a id="tocSipnumericrange"></a>
<a id="tocsipnumericrange"></a>

```json
{
  "end": 0,
  "start": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer(int64)|false|none|none|
|start|integer(int64)|false|none|none|

<h2 id="tocS_IpV4Address">IpV4Address</h2>
<!-- backwards compatibility -->
<a id="schemaipv4address"></a>
<a id="schema_IpV4Address"></a>
<a id="tocSipv4address"></a>
<a id="tocsipv4address"></a>

```json
{
  "ip_address": "string",
  "netmask": "string",
  "network_address": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip_address|string|false|none|none|
|netmask|string|false|none|none|
|network_address|string|false|none|none|

<h2 id="tocS_JuniperSwitchDataSource">JuniperSwitchDataSource</h2>
<!-- backwards compatibility -->
<a id="schemajuniperswitchdatasource"></a>
<a id="schema_JuniperSwitchDataSource"></a>
<a id="tocSjuniperswitchdatasource"></a>
<a id="tocsjuniperswitchdatasource"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_JuniperSwitchDataSourceRequest">JuniperSwitchDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemajuniperswitchdatasourcerequest"></a>
<a id="schema_JuniperSwitchDataSourceRequest"></a>
<a id="tocSjuniperswitchdatasourcerequest"></a>
<a id="tocsjuniperswitchdatasourcerequest"></a>

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|true|none|none|
|notes|string|false|none|none|
|proxy_id|string|true|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

<h2 id="tocS_MetaEntityType">MetaEntityType</h2>
<!-- backwards compatibility -->
<a id="schemametaentitytype"></a>
<a id="schema_MetaEntityType"></a>
<a id="tocSmetaentitytype"></a>
<a id="tocsmetaentitytype"></a>

```json
"Group"
```

<h2 id="tocS_MicroSecGroup">MicroSecGroup</h2>
<!-- backwards compatibility -->
<a id="schemamicrosecgroup"></a>
<a id="schema_MicroSecGroup"></a>
<a id="tocSmicrosecgroup"></a>
<a id="tocsmicrosecgroup"></a>

```json
{
  "entity": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|[Reference](#schemareference)|false|none|none|

<h2 id="tocS_NSXControllerDataCollection">NSXControllerDataCollection</h2>
<!-- backwards compatibility -->
<a id="schemansxcontrollerdatacollection"></a>
<a id="schema_NSXControllerDataCollection"></a>
<a id="tocSnsxcontrollerdatacollection"></a>
<a id="tocsnsxcontrollerdatacollection"></a>

```json
{
  "controller_password": "string",
  "enabled": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controller_password|string|false|none|none|
|enabled|boolean|false|none|none|

<h2 id="tocS_NSXDistributedFirewall">NSXDistributedFirewall</h2>
<!-- backwards compatibility -->
<a id="schemansxdistributedfirewall"></a>
<a id="schema_NSXDistributedFirewall"></a>
<a id="tocSnsxdistributedfirewall"></a>
<a id="tocsnsxdistributedfirewall"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "exclusions": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "firewall_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|exclusions|[[Reference](#schemareference)]|false|none|none|
|firewall_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_NSXFirewallRule">NSXFirewallRule</h2>
<!-- backwards compatibility -->
<a id="schemansxfirewallrule"></a>
<a id="schema_NSXFirewallRule"></a>
<a id="tocSnsxfirewallrule"></a>
<a id="tocsnsxfirewallrule"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "action": "ALLOW",
  "destination_any": true,
  "destination_inversion": true,
  "destinations": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "disabled": true,
  "port_ranges": [
    {
      "display": "string",
      "end": 0,
      "iana_name": "string",
      "iana_port_display": "string",
      "start": 0
    }
  ],
  "rule_id": "string",
  "section_id": "string",
  "section_name": "string",
  "sequence_number": 0,
  "service_any": true,
  "services": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_any": true,
  "source_inversion": true,
  "sources": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "direction": "IN",
  "logging_enabled": true,
  "nsx_managers": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "scope": "UNIVERSAL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|action|[FirewallAction](#schemafirewallaction)|false|none|none|
|destination_any|boolean|false|none|none|
|destination_inversion|boolean|false|none|none|
|destinations|[[Reference](#schemareference)]|false|none|none|
|disabled|boolean|false|none|none|
|port_ranges|[[PortRange](#schemaportrange)]|false|none|none|
|rule_id|string|false|none|none|
|section_id|string|false|none|none|
|section_name|string|false|none|none|
|sequence_number|integer|false|none|none|
|service_any|boolean|false|none|none|
|services|[[Reference](#schemareference)]|false|none|none|
|source_any|boolean|false|none|none|
|source_inversion|boolean|false|none|none|
|sources|[[Reference](#schemareference)]|false|none|none|
|direction|[FirewallDirection](#schemafirewalldirection)|false|none|none|
|logging_enabled|boolean|false|none|none|
|nsx_managers|[[Reference](#schemareference)]|false|none|none|
|scope|[ScopeEnum](#schemascopeenum)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|
|action|ALLOW|
|action|ACCEPT|
|action|DENY|
|action|DROP|
|action|REJECT|
|action|REDIRECT|
|action|DO_NOT_REDIRECT|
|direction|IN|
|direction|OUT|
|direction|INOUT|
|scope|UNIVERSAL|
|scope|GLOBAL|

<h2 id="tocS_NSXIPSet">NSXIPSet</h2>
<!-- backwards compatibility -->
<a id="schemansxipset"></a>
<a id="schema_NSXIPSet"></a>
<a id="tocSnsxipset"></a>
<a id="tocsnsxipset"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "direct_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "direct_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "indirect_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "indirect_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "ip_addresses": [
    {
      "ip_address": "string",
      "netmask": "string",
      "network_address": "string"
    }
  ],
  "ip_numeric_ranges": [
    {
      "end": 0,
      "start": 0
    }
  ],
  "ip_ranges": [
    {
      "end_ip": "string",
      "start_ip": "string"
    }
  ],
  "parent_security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "translated_vm_count": 0,
  "vendor": "string",
  "vendor_id": "string",
  "nsx_managers": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "scope": "UNIVERSAL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|direct_destination_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|direct_source_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|indirect_destination_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|indirect_source_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|ip_addresses|[[IpV4Address](#schemaipv4address)]|false|none|none|
|ip_numeric_ranges|[[IpNumericRange](#schemaipnumericrange)]|false|none|none|
|ip_ranges|[[IpAddressRange](#schemaipaddressrange)]|false|none|none|
|parent_security_groups|[[Reference](#schemareference)]|false|none|none|
|translated_vm_count|integer(int32)|false|none|none|
|vendor|string|false|none|none|
|vendor_id|string|false|none|none|
|nsx_managers|[[Reference](#schemareference)]|false|none|none|
|scope|[ScopeEnum](#schemascopeenum)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|
|scope|UNIVERSAL|
|scope|GLOBAL|

<h2 id="tocS_NSXRedirectRule">NSXRedirectRule</h2>
<!-- backwards compatibility -->
<a id="schemansxredirectrule"></a>
<a id="schema_NSXRedirectRule"></a>
<a id="tocSnsxredirectrule"></a>
<a id="tocsnsxredirectrule"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "action": "ALLOW",
  "destination_any": true,
  "destination_inversion": true,
  "destinations": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "disabled": true,
  "port_ranges": [
    {
      "display": "string",
      "end": 0,
      "iana_name": "string",
      "iana_port_display": "string",
      "start": 0
    }
  ],
  "rule_id": "string",
  "section_id": "string",
  "section_name": "string",
  "sequence_number": 0,
  "service_any": true,
  "services": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_any": true,
  "source_inversion": true,
  "sources": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "direction": "IN",
  "logging_enabled": true,
  "service_profile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|action|[FirewallAction](#schemafirewallaction)|false|none|none|
|destination_any|boolean|false|none|none|
|destination_inversion|boolean|false|none|none|
|destinations|[[Reference](#schemareference)]|false|none|none|
|disabled|boolean|false|none|none|
|port_ranges|[[PortRange](#schemaportrange)]|false|none|none|
|rule_id|string|false|none|none|
|section_id|string|false|none|none|
|section_name|string|false|none|none|
|sequence_number|integer|false|none|none|
|service_any|boolean|false|none|none|
|services|[[Reference](#schemareference)]|false|none|none|
|source_any|boolean|false|none|none|
|source_inversion|boolean|false|none|none|
|sources|[[Reference](#schemareference)]|false|none|none|
|direction|[FirewallDirection](#schemafirewalldirection)|false|none|none|
|logging_enabled|boolean|false|none|none|
|service_profile|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|
|action|ALLOW|
|action|ACCEPT|
|action|DENY|
|action|DROP|
|action|REJECT|
|action|REDIRECT|
|action|DO_NOT_REDIRECT|
|direction|IN|
|direction|OUT|
|direction|INOUT|

<h2 id="tocS_NSXSecurityGroup">NSXSecurityGroup</h2>
<!-- backwards compatibility -->
<a id="schemansxsecuritygroup"></a>
<a id="schema_NSXSecurityGroup"></a>
<a id="tocSnsxsecuritygroup"></a>
<a id="tocsnsxsecuritygroup"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "direct_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "direct_members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "direct_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "excluded_members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "indirect_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "indirect_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "parents": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "translated_vm_count": 0,
  "vendor_id": "string",
  "ip_sets": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "nsx_managers": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "scope": "UNIVERSAL",
  "security_tags": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|members|[[Reference](#schemareference)]|false|none|none|
|direct_destination_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|direct_members|[[Reference](#schemareference)]|false|none|none|
|direct_source_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|excluded_members|[[Reference](#schemareference)]|false|none|none|
|indirect_destination_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|indirect_source_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|members|[[Reference](#schemareference)]|false|none|none|
|parents|[[Reference](#schemareference)]|false|none|none|
|translated_vm_count|integer|false|none|none|
|vendor_id|string|false|none|none|
|ip_sets|[[Reference](#schemareference)]|false|none|none|
|nsx_managers|[[Reference](#schemareference)]|false|none|none|
|scope|[ScopeEnum](#schemascopeenum)|false|none|none|
|security_tags|[[Reference](#schemareference)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|
|scope|UNIVERSAL|
|scope|GLOBAL|

<h2 id="tocS_NSXService">NSXService</h2>
<!-- backwards compatibility -->
<a id="schemansxservice"></a>
<a id="schema_NSXService"></a>
<a id="tocSnsxservice"></a>
<a id="tocsnsxservice"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "port_ranges": [
    {
      "display": "string",
      "end": 0,
      "iana_name": "string",
      "iana_port_display": "string",
      "start": 0
    }
  ],
  "protocol": "string",
  "nsx_managers": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "scope": "UNIVERSAL",
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|port_ranges|[[PortRange](#schemaportrange)]|false|none|none|
|protocol|string|false|none|none|
|nsx_managers|[[Reference](#schemareference)]|false|none|none|
|scope|[ScopeEnum](#schemascopeenum)|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|
|scope|UNIVERSAL|
|scope|GLOBAL|

<h2 id="tocS_NSXServiceGroup">NSXServiceGroup</h2>
<!-- backwards compatibility -->
<a id="schemansxservicegroup"></a>
<a id="schema_NSXServiceGroup"></a>
<a id="tocSnsxservicegroup"></a>
<a id="tocsnsxservicegroup"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "members": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "nsx_managers": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "scope": "UNIVERSAL",
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|members|[[Reference](#schemareference)]|false|none|none|
|nsx_managers|[[Reference](#schemareference)]|false|none|none|
|scope|[ScopeEnum](#schemascopeenum)|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|
|scope|UNIVERSAL|
|scope|GLOBAL|

<h2 id="tocS_NSXVManager">NSXVManager</h2>
<!-- backwards compatibility -->
<a id="schemansxvmanager"></a>
<a id="schema_NSXVManager"></a>
<a id="tocSnsxvmanager"></a>
<a id="tocsnsxvmanager"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "fqdn": "string",
  "ip_address": {
    "ip_address": "string",
    "netmask": "string",
    "network_address": "string"
  },
  "primary_nsx_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "role": "string",
  "version": "string",
  "vm": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|fqdn|string|false|none|none|
|ip_address|[IpV4Address](#schemaipv4address)|false|none|none|
|primary_nsx_manager|[Reference](#schemareference)|false|none|none|
|role|string|false|none|none|
|version|string|false|none|none|
|vm|[Reference](#schemareference)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_NSXVManagerDataSource">NSXVManagerDataSource</h2>
<!-- backwards compatibility -->
<a id="schemansxvmanagerdatasource"></a>
<a id="schema_NSXVManagerDataSource"></a>
<a id="tocSnsxvmanagerdatasource"></a>
<a id="tocsnsxvmanagerdatasource"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "central_cli_enabled": false,
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "ipfix_enabled": false,
  "vcenter_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|central_cli_enabled|boolean|false|none|none|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|
|ipfix_enabled|boolean|false|none|none|
|vcenter_id|string|false|none|Associated vcenter data source entity Id|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_NSXVManagerDataSourceRequest">NSXVManagerDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemansxvmanagerdatasourcerequest"></a>
<a id="schema_NSXVManagerDataSourceRequest"></a>
<a id="tocSnsxvmanagerdatasourcerequest"></a>
<a id="tocsnsxvmanagerdatasourcerequest"></a>

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "central_cli_enabled": false,
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "ipfix_enabled": false,
  "vcenter_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|true|none|none|
|notes|string|false|none|none|
|proxy_id|string|true|none|proxy vm which should register this vcenter|
|central_cli_enabled|boolean|false|none|none|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|true|none|none|
|ipfix_enabled|boolean|false|none|none|
|vcenter_id|string|true|none|Associated vcenter data source entity Id|

<h2 id="tocS_NameRequestParam">NameRequestParam</h2>
<!-- backwards compatibility -->
<a id="schemanamerequestparam"></a>
<a id="schema_NameRequestParam"></a>
<a id="tocSnamerequestparam"></a>
<a id="tocsnamerequestparam"></a>

```json
{
  "entity_id": "string",
  "time": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|time|integer(int64)|false|none|none|

<h2 id="tocS_NamesRequest">NamesRequest</h2>
<!-- backwards compatibility -->
<a id="schemanamesrequest"></a>
<a id="schema_NamesRequest"></a>
<a id="tocSnamesrequest"></a>
<a id="tocsnamesrequest"></a>

```json
{
  "entities": [
    {
      "entity_id": "string",
      "time": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[NameRequestParam](#schemanamerequestparam)]|false|none|none|

<h2 id="tocS_NamesResponse">NamesResponse</h2>
<!-- backwards compatibility -->
<a id="schemanamesresponse"></a>
<a id="schema_NamesResponse"></a>
<a id="tocSnamesresponse"></a>
<a id="tocsnamesresponse"></a>

```json
{
  "entities": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0,
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[EntityName](#schemaentityname)]|false|none|none|

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{
  "entity_type": "Node",
  "id": "string",
  "ip_address": "string",
  "name": "string",
  "node_id": "string",
  "node_type": "PROXY_VM"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_type|[NodeType](#schemanodetype)|false|none|none|
|id|string|false|none|none|
|ip_address|string|false|none|none|
|name|string|false|none|none|
|node_id|string|false|none|none|
|node_type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|Node|
|node_type|PROXY_VM|
|node_type|PLATFORM_VM|

<h2 id="tocS_NodeId">NodeId</h2>
<!-- backwards compatibility -->
<a id="schemanodeid"></a>
<a id="schema_NodeId"></a>
<a id="tocSnodeid"></a>
<a id="tocsnodeid"></a>

```json
{
  "entity_type": "Node",
  "id": "1000:104:12213212"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_type|[NodeType](#schemanodetype)|false|none|none|
|id|string|false|none|Entity Identifier|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|Node|

<h2 id="tocS_NodeListResult">NodeListResult</h2>
<!-- backwards compatibility -->
<a id="schemanodelistresult"></a>
<a id="schema_NodeListResult"></a>
<a id="tocSnodelistresult"></a>
<a id="tocsnodelistresult"></a>

```json
{
  "results": [
    {
      "entity_type": "Node",
      "id": "1000:104:12213212"
    }
  ],
  "total_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[NodeId](#schemanodeid)]|false|none|none|
|total_count|integer|false|none|none|

<h2 id="tocS_NodeType">NodeType</h2>
<!-- backwards compatibility -->
<a id="schemanodetype"></a>
<a id="schema_NodeType"></a>
<a id="tocSnodetype"></a>
<a id="tocsnodetype"></a>

```json
"Node"
```

<h2 id="tocS_PagedListResponse">PagedListResponse</h2>
<!-- backwards compatibility -->
<a id="schemapagedlistresponse"></a>
<a id="schema_PagedListResponse"></a>
<a id="tocSpagedlistresponse"></a>
<a id="tocspagedlistresponse"></a>

```json
{
  "cursor": "string",
  "end_time": 0,
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "VirtualMachine"
    }
  ],
  "start_time": 0,
  "total_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string|false|none|none|
|end_time|integer(int64)|false|none|none|
|results|[[EntityId](#schemaentityid)]|false|none|none|
|start_time|integer(int64)|false|none|none|
|total_count|integer|false|none|none|

<h2 id="tocS_PagedListResponseWithTime">PagedListResponseWithTime</h2>
<!-- backwards compatibility -->
<a id="schemapagedlistresponsewithtime"></a>
<a id="schema_PagedListResponseWithTime"></a>
<a id="tocSpagedlistresponsewithtime"></a>
<a id="tocspagedlistresponsewithtime"></a>

```json
{
  "cursor": "ML12eu02==",
  "end_time": 1504739809,
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "time": 0
    }
  ],
  "start_time": 1504739809,
  "total_count": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string|false|none|none|
|end_time|integer(int64)|false|none|none|
|results|[[EntityIdWithTime](#schemaentityidwithtime)]|false|none|none|
|start_time|integer(int64)|false|none|none|
|total_count|integer|false|none|none|

<h2 id="tocS_PanFirewallDataSource">PanFirewallDataSource</h2>
<!-- backwards compatibility -->
<a id="schemapanfirewalldatasource"></a>
<a id="schema_PanFirewallDataSource"></a>
<a id="tocSpanfirewalldatasource"></a>
<a id="tocspanfirewalldatasource"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_PanFirewallDataSourceRequest">PanFirewallDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemapanfirewalldatasourcerequest"></a>
<a id="schema_PanFirewallDataSourceRequest"></a>
<a id="tocSpanfirewalldatasourcerequest"></a>
<a id="tocspanfirewalldatasourcerequest"></a>

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|true|none|none|
|notes|string|false|none|none|
|proxy_id|string|true|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

<h2 id="tocS_PasswordCredentials">PasswordCredentials</h2>
<!-- backwards compatibility -->
<a id="schemapasswordcredentials"></a>
<a id="schema_PasswordCredentials"></a>
<a id="tocSpasswordcredentials"></a>
<a id="tocspasswordcredentials"></a>

```json
{
  "password": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|none|
|username|string|true|none|none|

<h2 id="tocS_PortRange">PortRange</h2>
<!-- backwards compatibility -->
<a id="schemaportrange"></a>
<a id="schema_PortRange"></a>
<a id="tocSportrange"></a>
<a id="tocsportrange"></a>

```json
{
  "display": "string",
  "end": 0,
  "iana_name": "string",
  "iana_port_display": "string",
  "start": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display|string|false|none|none|
|end|integer(int32)|false|none|none|
|iana_name|string|false|none|none|
|iana_port_display|string|false|none|none|
|start|integer(int32)|false|none|none|

<h2 id="tocS_ProblemEvent">ProblemEvent</h2>
<!-- backwards compatibility -->
<a id="schemaproblemevent"></a>
<a id="schema_ProblemEvent"></a>
<a id="tocSproblemevent"></a>
<a id="tocsproblemevent"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "admin_state": "ENABLED",
  "anchor_entities": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "archived": true,
  "event_tags": [
    "string"
  ],
  "event_time_epoch_ms": 0,
  "message": "string",
  "related_entities": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "event_close_time_epoch_ms": 0,
  "severity": "CRITICAL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|admin_state|string|false|none|none|
|anchor_entities|[[Reference](#schemareference)]|false|none|none|
|archived|boolean|false|none|none|
|event_tags|[string]|false|none|none|
|event_time_epoch_ms|integer(int64)|false|none|none|
|message|string|false|none|none|
|related_entities|[[Reference](#schemareference)]|false|none|none|
|event_close_time_epoch_ms|integer(int64)|false|none|none|
|severity|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|
|admin_state|ENABLED|
|admin_state|DISABLED|
|severity|CRITICAL|
|severity|MODERATE|
|severity|WARNING|
|severity|INFO|

<h2 id="tocS_Protocol">Protocol</h2>
<!-- backwards compatibility -->
<a id="schemaprotocol"></a>
<a id="schema_Protocol"></a>
<a id="tocSprotocol"></a>
<a id="tocsprotocol"></a>

```json
"TCP"
```

<h2 id="tocS_RecommendedRule">RecommendedRule</h2>
<!-- backwards compatibility -->
<a id="schemarecommendedrule"></a>
<a id="schema_RecommendedRule"></a>
<a id="tocSrecommendedrule"></a>
<a id="tocsrecommendedrule"></a>

```json
{
  "action": "ALLOW",
  "destinations": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "port_ranges": [
    {
      "end": 0,
      "start": 0
    }
  ],
  "protocols": [
    "string"
  ],
  "sources": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|none|
|destinations|[[Reference](#schemareference)]|false|none|none|
|port_ranges|[[SimplePortRange](#schemasimpleportrange)]|false|none|none|
|protocols|[string]|false|none|none|
|sources|[[Reference](#schemareference)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ALLOW|
|action|DROP|

<h2 id="tocS_RecommendedRules">RecommendedRules</h2>
<!-- backwards compatibility -->
<a id="schemarecommendedrules"></a>
<a id="schema_RecommendedRules"></a>
<a id="tocSrecommendedrules"></a>
<a id="tocsrecommendedrules"></a>

```json
{
  "results": [
    {
      "action": "ALLOW",
      "destinations": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ],
      "port_ranges": [
        {
          "end": 0,
          "start": 0
        }
      ],
      "protocols": [
        "string"
      ],
      "sources": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "time_range": {
    "end_time": 0,
    "start_time": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[RecommendedRule](#schemarecommendedrule)]|false|none|none|
|time_range|[TimeRange](#schematimerange)|false|none|none|

<h2 id="tocS_RecommendedRulesRequest">RecommendedRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemarecommendedrulesrequest"></a>
<a id="schema_RecommendedRulesRequest"></a>
<a id="tocSrecommendedrulesrequest"></a>
<a id="tocsrecommendedrulesrequest"></a>

```json
{
  "group_1": {
    "entity": {
      "entity_id": "10000:562:1904698621",
      "entity_type": "Tier"
    }
  },
  "group_2": {
    "entity": {
      "entity_id": "10000:562:1780351215",
      "entity_type": "Tier"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_1|[MicroSecGroup](#schemamicrosecgroup)|false|none|none|
|group_2|[MicroSecGroup](#schemamicrosecgroup)|false|none|none|
|time_range|[TimeRange](#schematimerange)|false|none|none|

<h2 id="tocS_Reference">Reference</h2>
<!-- backwards compatibility -->
<a id="schemareference"></a>
<a id="schema_Reference"></a>
<a id="tocSreference"></a>
<a id="tocsreference"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_ResourcePool">ResourcePool</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepool"></a>
<a id="schema_ResourcePool"></a>
<a id="tocSresourcepool"></a>
<a id="tocsresourcepool"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|vcenter_manager|[Reference](#schemareference)|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_RuleSet">RuleSet</h2>
<!-- backwards compatibility -->
<a id="schemaruleset"></a>
<a id="schema_RuleSet"></a>
<a id="tocSruleset"></a>
<a id="tocsruleset"></a>

```json
{
  "firewall": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "rule_set_type": "NSX_STANDARD",
  "rules": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firewall|[Reference](#schemareference)|false|none|none|
|rule_set_type|string|false|none|none|
|rules|[[Reference](#schemareference)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|rule_set_type|NSX_STANDARD|
|rule_set_type|NSX_REDIRECT|
|rule_set_type|AWS_STANDARD|

<h2 id="tocS_SNMP2cConfig">SNMP2cConfig</h2>
<!-- backwards compatibility -->
<a id="schemasnmp2cconfig"></a>
<a id="schema_SNMP2cConfig"></a>
<a id="tocSsnmp2cconfig"></a>
<a id="tocssnmp2cconfig"></a>

```json
{
  "community_string": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|community_string|string|false|none|none|

<h2 id="tocS_SNMP3Config">SNMP3Config</h2>
<!-- backwards compatibility -->
<a id="schemasnmp3config"></a>
<a id="schema_SNMP3Config"></a>
<a id="tocSsnmp3config"></a>
<a id="tocssnmp3config"></a>

```json
{
  "authentication_password": "string",
  "authentication_type": "NO_AUTH",
  "context_name": "string",
  "privacy_password": "string",
  "privacy_type": "AES",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authentication_password|string|false|none|none|
|authentication_type|string|false|none|none|
|context_name|string|false|none|none|
|privacy_password|string|false|none|none|
|privacy_type|string|false|none|none|
|username|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authentication_type|NO_AUTH|
|authentication_type|MD5|
|authentication_type|SHA|
|privacy_type|AES|
|privacy_type|DES|
|privacy_type|AES128|
|privacy_type|AES192|
|privacy_type|AES256|
|privacy_type|3DES|
|privacy_type|NO_PRIV|

<h2 id="tocS_SNMPConfig">SNMPConfig</h2>
<!-- backwards compatibility -->
<a id="schemasnmpconfig"></a>
<a id="schema_SNMPConfig"></a>
<a id="tocSsnmpconfig"></a>
<a id="tocssnmpconfig"></a>

```json
{
  "config_snmp_2c": {
    "community_string": "string"
  },
  "config_snmp_3": {
    "authentication_password": "string",
    "authentication_type": "NO_AUTH",
    "context_name": "string",
    "privacy_password": "string",
    "privacy_type": "AES",
    "username": "string"
  },
  "snmp_enabled": false,
  "snmp_version": "v2c"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config_snmp_2c|[SNMP2cConfig](#schemasnmp2cconfig)|false|none|none|
|config_snmp_3|[SNMP3Config](#schemasnmp3config)|false|none|none|
|snmp_enabled|boolean|false|none|none|
|snmp_version|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|snmp_version|v2c|
|snmp_version|v3|

<h2 id="tocS_ScopeEnum">ScopeEnum</h2>
<!-- backwards compatibility -->
<a id="schemascopeenum"></a>
<a id="schema_ScopeEnum"></a>
<a id="tocSscopeenum"></a>
<a id="tocsscopeenum"></a>

```json
"UNIVERSAL"
```

<h2 id="tocS_SearchMembershipCriteria">SearchMembershipCriteria</h2>
<!-- backwards compatibility -->
<a id="schemasearchmembershipcriteria"></a>
<a id="schema_SearchMembershipCriteria"></a>
<a id="tocSsearchmembershipcriteria"></a>
<a id="tocssearchmembershipcriteria"></a>

```json
{
  "entity_type": "Group",
  "filter": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_type|[AllEntityType](#schemaallentitytype)|false|none|none|
|filter|string|false|none|As defined in search end point|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|Group|
|entity_type|BaseSecurityGroup|
|entity_type|BaseEvent|
|entity_type|BaseVirtualMachine|
|entity_type|BaseFirewallRule|
|entity_type|BaseIPSet|
|entity_type|BaseL2Network|
|entity_type|BaseFirewall|
|entity_type|BaseService|
|entity_type|BaseServiceGroup|
|entity_type|BaseVnic|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|BaseManager|
|entity_type|BaseNSXManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_SearchRequest">SearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchrequest"></a>
<a id="schema_SearchRequest"></a>
<a id="tocSsearchrequest"></a>
<a id="tocssearchrequest"></a>

```json
{
  "cursor": "string",
  "entity_type": "Group",
  "filter": "string",
  "size": 0,
  "sort_by": {
    "field": "string",
    "order": "ASC"
  },
  "time_range": {
    "end_time": 0,
    "start_time": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string|false|none|none|
|entity_type|[AllEntityType](#schemaallentitytype)|false|none|none|
|filter|string|false|none|query filter|
|size|integer(int32)|false|none|none|
|sort_by|[SortByClause](#schemasortbyclause)|false|none|none|
|time_range|[TimeRange](#schematimerange)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|Group|
|entity_type|BaseSecurityGroup|
|entity_type|BaseEvent|
|entity_type|BaseVirtualMachine|
|entity_type|BaseFirewallRule|
|entity_type|BaseIPSet|
|entity_type|BaseL2Network|
|entity_type|BaseFirewall|
|entity_type|BaseService|
|entity_type|BaseServiceGroup|
|entity_type|BaseVnic|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|BaseManager|
|entity_type|BaseNSXManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_SecurityTag">SecurityTag</h2>
<!-- backwards compatibility -->
<a id="schemasecuritytag"></a>
<a id="schema_SecurityTag"></a>
<a id="tocSsecuritytag"></a>
<a id="tocssecuritytag"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "description": "string",
  "direct_security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "nsx_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|direct_security_groups|[[Reference](#schemareference)]|false|none|none|
|nsx_manager|[Reference](#schemareference)|false|none|none|
|security_groups|[[Reference](#schemareference)]|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_SimpleListResponse">SimpleListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasimplelistresponse"></a>
<a id="schema_SimpleListResponse"></a>
<a id="tocSsimplelistresponse"></a>
<a id="tocssimplelistresponse"></a>

```json
{
  "results": [
    {
      "entity_id": "1000:104:12213212",
      "entity_type": "VirtualMachine"
    }
  ],
  "total_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[EntityId](#schemaentityid)]|false|none|none|
|total_count|integer|false|none|none|

<h2 id="tocS_SimplePortRange">SimplePortRange</h2>
<!-- backwards compatibility -->
<a id="schemasimpleportrange"></a>
<a id="schema_SimplePortRange"></a>
<a id="tocSsimpleportrange"></a>
<a id="tocssimpleportrange"></a>

```json
{
  "end": 0,
  "start": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer(int32)|false|none|none|
|start|integer(int32)|false|none|none|

<h2 id="tocS_SortByClause">SortByClause</h2>
<!-- backwards compatibility -->
<a id="schemasortbyclause"></a>
<a id="schema_SortByClause"></a>
<a id="tocSsortbyclause"></a>
<a id="tocssortbyclause"></a>

```json
{
  "field": "string",
  "order": "ASC"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|none|
|order|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|order|ASC|
|order|DESC|

<h2 id="tocS_SwitchDataSource">SwitchDataSource</h2>
<!-- backwards compatibility -->
<a id="schemaswitchdatasource"></a>
<a id="schema_SwitchDataSource"></a>
<a id="tocSswitchdatasource"></a>
<a id="tocsswitchdatasource"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_SwitchDataSourceRequest">SwitchDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaswitchdatasourcerequest"></a>
<a id="schema_SwitchDataSourceRequest"></a>
<a id="tocSswitchdatasourcerequest"></a>
<a id="tocsswitchdatasourcerequest"></a>

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|true|none|none|
|notes|string|false|none|none|
|proxy_id|string|true|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

<h2 id="tocS_Tier">Tier</h2>
<!-- backwards compatibility -->
<a id="schematier"></a>
<a id="schema_Tier"></a>
<a id="tocStier"></a>
<a id="tocstier"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "application": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "group_membership_criteria": [
    {
      "ip_address_membership_criteria": {
        "ip_addresses": [
          "string"
        ]
      },
      "membership_type": "SearchMembershipCriteria",
      "search_membership_criteria": {
        "entity_type": "Group",
        "filter": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|application|[Reference](#schemareference)|false|none|none|
|group_membership_criteria|[[GroupMembershipCriteria](#schemagroupmembershipcriteria)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_TierListResponse">TierListResponse</h2>
<!-- backwards compatibility -->
<a id="schematierlistresponse"></a>
<a id="schema_TierListResponse"></a>
<a id="tocStierlistresponse"></a>
<a id="tocstierlistresponse"></a>

```json
{
  "results": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine",
      "name": "string",
      "application": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "group_membership_criteria": [
        {
          "ip_address_membership_criteria": {
            "ip_addresses": [
              "string"
            ]
          },
          "membership_type": "SearchMembershipCriteria",
          "search_membership_criteria": {
            "entity_type": "Group",
            "filter": "string"
          }
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Tier](#schematier)]|false|none|none|

<h2 id="tocS_TierRequest">TierRequest</h2>
<!-- backwards compatibility -->
<a id="schematierrequest"></a>
<a id="schema_TierRequest"></a>
<a id="tocStierrequest"></a>
<a id="tocstierrequest"></a>

```json
{
  "group_membership_criteria": [
    {
      "membership_type": "SearchMembershipCriteria",
      "search_membership_criteria": {
        "entity_type": "VirtualMachine",
        "filter": "security_groups.entity_id = '18230:82:604573173'"
      }
    }
  ],
  "name": "tier-1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_membership_criteria|[[GroupMembershipCriteria](#schemagroupmembershipcriteria)]|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_TimeRange">TimeRange</h2>
<!-- backwards compatibility -->
<a id="schematimerange"></a>
<a id="schema_TimeRange"></a>
<a id="tocStimerange"></a>
<a id="tocstimerange"></a>

```json
{
  "end_time": 0,
  "start_time": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_time|integer(int64)|false|none|none|
|start_time|integer(int64)|false|none|none|

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "expiry": 0,
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiry|integer(int64)|false|none|expiry epoch time in secs.|
|token|string|false|none|none|

<h2 id="tocS_UCSManagerDataSource">UCSManagerDataSource</h2>
<!-- backwards compatibility -->
<a id="schemaucsmanagerdatasource"></a>
<a id="schema_UCSManagerDataSource"></a>
<a id="tocSucsmanagerdatasource"></a>
<a id="tocsucsmanagerdatasource"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_UCSManagerDataSourceRequest">UCSManagerDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaucsmanagerdatasourcerequest"></a>
<a id="schema_UCSManagerDataSourceRequest"></a>
<a id="tocSucsmanagerdatasourcerequest"></a>
<a id="tocsucsmanagerdatasourcerequest"></a>

```json
{
  "enabled": true,
  "entity_id": "string",
  "entity_type": "CiscoSwitchDataSource",
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_UserCredential">UserCredential</h2>
<!-- backwards compatibility -->
<a id="schemausercredential"></a>
<a id="schema_UserCredential"></a>
<a id="tocSusercredential"></a>
<a id="tocsusercredential"></a>

```json
{
  "domain": {
    "domain_type": "LDAP",
    "value": "example.com"
  },
  "password": "password",
  "username": "admin@vrni.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|[Domain](#schemadomain)|false|none|none|
|password|string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_VCDatacenter">VCDatacenter</h2>
<!-- backwards compatibility -->
<a id="schemavcdatacenter"></a>
<a id="schema_VCDatacenter"></a>
<a id="tocSvcdatacenter"></a>
<a id="tocsvcdatacenter"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|vcenter_manager|[Reference](#schemareference)|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_VCenterDataSource">VCenterDataSource</h2>
<!-- backwards compatibility -->
<a id="schemavcenterdatasource"></a>
<a id="schema_VCenterDataSource"></a>
<a id="tocSvcenterdatasource"></a>
<a id="tocsvcenterdatasource"></a>

```json
{
  "credentials": {
    "password": "thePassword",
    "username": "admin@vsphere.local"
  },
  "enabled": true,
  "entity_type": "VCenterDataSource",
  "fqdn": "go.vc.org",
  "id": "1000:33:12890123",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "VC 1",
  "proxy_id": "1000:104:12313412"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|entity_id|string|false|none|none|
|entity_type|[DataSourceType](#schemadatasourcetype)|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|false|none|none|
|notes|string|false|none|none|
|proxy_id|string|false|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|CiscoSwitchDataSource|
|entity_type|DellSwitchDataSource|
|entity_type|AristaSwitchDataSource|
|entity_type|BrocadeSwitchDataSource|
|entity_type|JuniperSwitchDataSource|
|entity_type|VCenterDataSource|
|entity_type|NSXVManagerDataSource|
|entity_type|UCSManagerDataSource|
|entity_type|HPVCManagerDataSource|
|entity_type|HPOneViewDataSource|
|entity_type|PanFirewallDataSource|
|entity_type|CheckpointFirewallDataSource|

<h2 id="tocS_VCenterDataSourceRequest">VCenterDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemavcenterdatasourcerequest"></a>
<a id="schema_VCenterDataSourceRequest"></a>
<a id="tocSvcenterdatasourcerequest"></a>
<a id="tocsvcenterdatasourcerequest"></a>

```json
{
  "enabled": true,
  "fqdn": "your.domain.com",
  "ip": "192.168.10.1",
  "nickname": "vc1",
  "notes": "string",
  "proxy_id": "1000:104:12313412",
  "credentials": {
    "password": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|fqdn|string|false|none|none|
|ip|string|false|none|none|
|nickname|string|true|none|none|
|notes|string|false|none|none|
|proxy_id|string|true|none|proxy vm which should register this vcenter|
|credentials|[PasswordCredentials](#schemapasswordcredentials)|false|none|none|

<h2 id="tocS_VCenterManager">VCenterManager</h2>
<!-- backwards compatibility -->
<a id="schemavcentermanager"></a>
<a id="schema_VCenterManager"></a>
<a id="tocSvcentermanager"></a>
<a id="tocsvcentermanager"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "fqdn": "string",
  "ip_address": {
    "ip_address": "string",
    "netmask": "string",
    "network_address": "string"
  },
  "nsx_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vm": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|fqdn|string|false|none|none|
|ip_address|[IpV4Address](#schemaipv4address)|false|none|none|
|nsx_manager|[Reference](#schemareference)|false|none|none|
|vm|[Reference](#schemareference)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_VPC">VPC</h2>
<!-- backwards compatibility -->
<a id="schemavpc"></a>
<a id="schema_VPC"></a>
<a id="tocSvpc"></a>
<a id="tocsvpc"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "cidr_block": {
    "ip_address": "string",
    "netmask": "string",
    "network_address": "string"
  },
  "default_vpc": true,
  "last_synched_time": 0,
  "region": "string",
  "state": "string",
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|cidr_block|[IpV4Address](#schemaipv4address)|false|none|none|
|default_vpc|boolean|false|none|none|
|last_synched_time|integer(int64)|false|none|none|
|region|string|false|none|none|
|state|string|false|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_VersionResponse">VersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaversionresponse"></a>
<a id="schema_VersionResponse"></a>
<a id="tocSversionresponse"></a>
<a id="tocsversionresponse"></a>

```json
{
  "api_version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_version|string|false|none|none|

<h2 id="tocS_VirtualMachine">VirtualMachine</h2>
<!-- backwards compatibility -->
<a id="schemavirtualmachine"></a>
<a id="schema_VirtualMachine"></a>
<a id="tocSvirtualmachine"></a>
<a id="tocsvirtualmachine"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "default_gateway": "string",
  "destination_firewall_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "ip_addresses": [
    {
      "ip_address": "string",
      "netmask": "string",
      "network_address": "string"
    }
  ],
  "ip_sets": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "security_groups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_firewall_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "vnics": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "applied_to_destination_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "applied_to_source_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "cluster": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "datacenter": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "datastores": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "destination_inversion_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "folders": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "host": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "layer2_networks": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "nsx_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "resource_pool": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "security_tags": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "source_inversion_rules": [
    {
      "firewall": {
        "entity_id": "string",
        "entity_type": "VirtualMachine"
      },
      "rule_set_type": "NSX_STANDARD",
      "rules": [
        {
          "entity_id": "string",
          "entity_type": "VirtualMachine"
        }
      ]
    }
  ],
  "vcenter_manager": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vendor_id": "string",
  "vlans": [
    {
      "begin": 0,
      "end": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|default_gateway|string|false|none|none|
|destination_firewall_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|ip_addresses|[[IpV4Address](#schemaipv4address)]|false|none|none|
|ip_sets|[[Reference](#schemareference)]|false|none|none|
|security_groups|[[Reference](#schemareference)]|false|none|none|
|source_firewall_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|vnics|[[Reference](#schemareference)]|false|none|none|
|applied_to_destination_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|applied_to_source_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|cluster|[Reference](#schemareference)|false|none|none|
|datacenter|[Reference](#schemareference)|false|none|none|
|datastores|[[Reference](#schemareference)]|false|none|none|
|destination_inversion_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|folders|[[Reference](#schemareference)]|false|none|none|
|host|[Reference](#schemareference)|false|none|none|
|layer2_networks|[[Reference](#schemareference)]|false|none|none|
|nsx_manager|[Reference](#schemareference)|false|none|none|
|resource_pool|[Reference](#schemareference)|false|none|none|
|security_tags|[[Reference](#schemareference)]|false|none|none|
|source_inversion_rules|[[RuleSet](#schemaruleset)]|false|none|none|
|vcenter_manager|[Reference](#schemareference)|false|none|none|
|vendor_id|string|false|none|none|
|vlans|[[Vlan](#schemavlan)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_Vlan">Vlan</h2>
<!-- backwards compatibility -->
<a id="schemavlan"></a>
<a id="schema_Vlan"></a>
<a id="tocSvlan"></a>
<a id="tocsvlan"></a>

```json
{
  "begin": 0,
  "end": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|begin|integer|false|none|none|
|end|integer|false|none|none|

<h2 id="tocS_VlanL2Network">VlanL2Network</h2>
<!-- backwards compatibility -->
<a id="schemavlanl2network"></a>
<a id="schema_VlanL2Network"></a>
<a id="tocSvlanl2network"></a>
<a id="tocsvlanl2network"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "gateways": [
    "string"
  ],
  "network_addresses": [
    "string"
  ],
  "distributed_virtual_portgroups": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "distributed_virtual_switches": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "vlan_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|gateways|[string]|false|none|none|
|network_addresses|[string]|false|none|none|
|distributed_virtual_portgroups|[[Reference](#schemareference)]|false|none|none|
|distributed_virtual_switches|[[Reference](#schemareference)]|false|none|none|
|vlan_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_Vmknic">Vmknic</h2>
<!-- backwards compatibility -->
<a id="schemavmknic"></a>
<a id="schema_Vmknic"></a>
<a id="tocSvmknic"></a>
<a id="tocsvmknic"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "host": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "ip_addresses": [
    {
      "ip_address": "string",
      "netmask": "string",
      "network_address": "string"
    }
  ],
  "layer2_network": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vlan": {
    "begin": 0,
    "end": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|host|[Reference](#schemareference)|false|none|none|
|ip_addresses|[[IpV4Address](#schemaipv4address)]|false|none|none|
|layer2_network|[Reference](#schemareference)|false|none|none|
|vlan|[Vlan](#schemavlan)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_Vnic">Vnic</h2>
<!-- backwards compatibility -->
<a id="schemavnic"></a>
<a id="schema_Vnic"></a>
<a id="tocSvnic"></a>
<a id="tocsvnic"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "ip_addresses": [
    {
      "ip_address": "string",
      "netmask": "string",
      "network_address": "string"
    }
  ],
  "layer2_network": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  },
  "vlan": {
    "begin": 0,
    "end": 0
  },
  "vm": {
    "entity_id": "string",
    "entity_type": "VirtualMachine"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|ip_addresses|[[IpV4Address](#schemaipv4address)]|false|none|none|
|layer2_network|[Reference](#schemareference)|false|none|none|
|vlan|[Vlan](#schemavlan)|false|none|none|
|vm|[Reference](#schemareference)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|

<h2 id="tocS_VxlanLayer2Network">VxlanLayer2Network</h2>
<!-- backwards compatibility -->
<a id="schemavxlanlayer2network"></a>
<a id="schema_VxlanLayer2Network"></a>
<a id="tocSvxlanlayer2network"></a>
<a id="tocsvxlanlayer2network"></a>

```json
{
  "entity_id": "string",
  "entity_type": "VirtualMachine",
  "name": "string",
  "gateways": [
    "string"
  ],
  "network_addresses": [
    "string"
  ],
  "nsx_managers": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ],
  "scope": "UNIVERSAL",
  "segment_id": 0,
  "vteps": [
    {
      "entity_id": "string",
      "entity_type": "VirtualMachine"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|none|
|entity_type|[EntityType](#schemaentitytype)|false|none|none|
|name|string|false|none|none|
|gateways|[string]|false|none|none|
|network_addresses|[string]|false|none|none|
|nsx_managers|[[Reference](#schemareference)]|false|none|none|
|scope|[ScopeEnum](#schemascopeenum)|false|none|none|
|segment_id|integer(int32)|false|none|none|
|vteps|[[Reference](#schemareference)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity_type|VirtualMachine|
|entity_type|EC2Instance|
|entity_type|Host|
|entity_type|Vnic|
|entity_type|Vmknic|
|entity_type|VxlanLayer2Network|
|entity_type|VlanL2Network|
|entity_type|Cluster|
|entity_type|SecurityTag|
|entity_type|ResourcePool|
|entity_type|NSXIPSet|
|entity_type|EC2IPSet|
|entity_type|NSXSecurityGroup|
|entity_type|EC2SecurityGroup|
|entity_type|Flow|
|entity_type|ProblemEvent|
|entity_type|Application|
|entity_type|Tier|
|entity_type|NSXFirewallRule|
|entity_type|EC2SGFirewallRule|
|entity_type|NSXRedirectRule|
|entity_type|VCenterManager|
|entity_type|NSXVManager|
|entity_type|NSXService|
|entity_type|EC2Service|
|entity_type|VPC|
|entity_type|NSXDistributedFirewall|
|entity_type|EC2Firewall|
|entity_type|NSXServiceGroup|
|entity_type|DistributedVirtualSwitch|
|entity_type|DistributedVirtualPortgroup|
|entity_type|VCDatacenter|
|entity_type|Datastore|
|entity_type|Folder|
|scope|UNIVERSAL|
|scope|GLOBAL|
