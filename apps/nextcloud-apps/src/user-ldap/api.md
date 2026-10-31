<h1 id="userldap">user_ldap v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This application enables administrators to connect Nextcloud to an LDAP-based user directory.

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="userldap-configapi">configapi</h1>

## Create a new (empty) configuration and return the resulting prefix

<a id="opIdconfigapi-create"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/user_ldap/api/v1/config \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/apps/user_ldap/api/v1/config`

This endpoint requires admin access

<h3 id="create-a-new-empty-configuration-and-return-the-resulting-prefix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "configID": "string"
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="create-a-new-empty-configuration-and-return-the-resulting-prefix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Config created successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="create-a-new-empty-configuration-and-return-the-resulting-prefix-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » configID|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a configuration

<a id="opIdconfigapi-show"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/user_ldap/api/v1/config/{configID}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/user_ldap/api/v1/config/{configID}`

Output can look like this: <?xml version="1.0"?> <ocs> <meta> <status>ok</status> <statuscode>200</statuscode> <message>OK</message> </meta> <data> <ldapHost>ldaps://my.ldap.server</ldapHost> <ldapPort>7770</ldapPort> <ldapBackupHost></ldapBackupHost> <ldapBackupPort></ldapBackupPort> <ldapBase>ou=small,dc=my,dc=ldap,dc=server</ldapBase> <ldapBaseUsers>ou=users,ou=small,dc=my,dc=ldap,dc=server</ldapBaseUsers> <ldapBaseGroups>ou=small,dc=my,dc=ldap,dc=server</ldapBaseGroups> <ldapAgentName>cn=root,dc=my,dc=ldap,dc=server</ldapAgentName> <ldapAgentPassword>clearTextWithShowPassword=1</ldapAgentPassword> <ldapTLS>1</ldapTLS> <turnOffCertCheck>0</turnOffCertCheck> <ldapIgnoreNamingRules/> <ldapUserActiveState>active</ldapUserActiveState> <ldapUserDisplayName>displayname</ldapUserDisplayName> <ldapUserDisplayName2>uid</ldapUserDisplayName2> <ldapUserFilterObjectclass>inetOrgPerson</ldapUserFilterObjectclass> <ldapUserFilterGroups></ldapUserFilterGroups> <ldapUserFilter>(&amp;(objectclass=nextcloudUser)(nextcloudEnabled=TRUE))</ldapUserFilter> <ldapUserFilterMode>1</ldapUserFilterMode> <ldapGroupFilter>(&amp;(|(objectclass=nextcloudGroup)))</ldapGroupFilter> <ldapGroupFilterMode>0</ldapGroupFilterMode> <ldapGroupFilterObjectclass>nextcloudGroup</ldapGroupFilterObjectclass> <ldapGroupFilterGroups></ldapGroupFilterGroups> <ldapGroupDisplayName>cn</ldapGroupDisplayName> <ldapGroupMemberAssocAttr>memberUid</ldapGroupMemberAssocAttr> <ldapLoginFilter>(&amp;(|(objectclass=inetOrgPerson))(uid=%uid))</ldapLoginFilter> <ldapLoginFilterMode>0</ldapLoginFilterMode> <ldapLoginFilterEmail>0</ldapLoginFilterEmail> <ldapLoginFilterUsername>1</ldapLoginFilterUsername> <ldapLoginFilterAttributes></ldapLoginFilterAttributes> <ldapQuotaAttribute></ldapQuotaAttribute> <ldapQuotaDefault></ldapQuotaDefault> <ldapEmailAttribute>mail</ldapEmailAttribute> <ldapCacheTTL>20</ldapCacheTTL> <ldapUuidUserAttribute>auto</ldapUuidUserAttribute> <ldapUuidGroupAttribute>auto</ldapUuidGroupAttribute> <ldapOverrideMainServer></ldapOverrideMainServer> <ldapConfigurationActive>1</ldapConfigurationActive> <ldapAttributesForUserSearch>uid;sn;givenname</ldapAttributesForUserSearch> <ldapAttributesForGroupSearch></ldapAttributesForGroupSearch> <ldapExperiencedAdmin>0</ldapExperiencedAdmin> <homeFolderNamingRule></homeFolderNamingRule> <hasMemberOfFilterSupport></hasMemberOfFilterSupport> <useMemberOfToDetectMembership>1</useMemberOfToDetectMembership> <ldapExpertUsernameAttr>uid</ldapExpertUsernameAttr> <ldapExpertUUIDUserAttr>uid</ldapExpertUUIDUserAttr> <ldapExpertUUIDGroupAttr></ldapExpertUUIDGroupAttr> <lastJpegPhotoLookup>0</lastJpegPhotoLookup> <ldapNestedGroups>0</ldapNestedGroups> <ldapPagingSize>500</ldapPagingSize> <turnOnPasswordChange>1</turnOnPasswordChange> <ldapDynamicGroupMemberURL></ldapDynamicGroupMemberURL> </data> </ocs>
This endpoint requires admin access

<h3 id="get-a-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configID|path|string|true|ID of the config|
|showPassword|query|boolean|false|Whether to show the password|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "property1": {},
      "property2": {}
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Config returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Config not found|Inline|

<h3 id="get-a-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » **additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Modify a configuration

<a id="opIdconfigapi-modify"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/user_ldap/api/v1/config/{configID}' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "configData": {
      "property1": {},
      "property2": {}
    }
  }'
```

`PUT /ocs/v2.php/apps/user_ldap/api/v1/config/{configID}`

This endpoint requires admin access

> Body parameter

```json
{
  "configData": {
    "property1": {},
    "property2": {}
  }
}
```

<h3 id="modify-a-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configID|path|string|true|ID of the config|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» configData|body|object|true|New config|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "property1": {},
      "property2": {}
    }
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="modify-a-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Config returned|Inline|
|400|Bad Request|Modifying config is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Config not found|Inline|

<h3 id="modify-a-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » **additionalProperties**|object|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete a LDAP configuration

<a id="opIdconfigapi-delete"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/user_ldap/api/v1/config/{configID}' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/user_ldap/api/v1/config/{configID}`

This endpoint requires admin access

<h3 id="delete-a-ldap-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configID|path|string|true|ID of the config|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="delete-a-ldap-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Config deleted successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Config not found|Inline|

<h3 id="delete-a-ldap-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Test a configuration

<a id="opIdconfigapi-test-configuration"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/user_ldap/api/v1/config/{configID}/test' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/apps/user_ldap/api/v1/config/{configID}/test`

This endpoint requires admin access

<h3 id="test-a-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configID|path|string|true|ID of the LDAP config|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "success": true,
      "message": "string"
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="test-a-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Test was run and results are returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Config not found|Inline|

<h3 id="test-a-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » success|boolean|true|none|none|
|» » message|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Copy a configuration

<a id="opIdconfigapi-copy-configuration"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/user_ldap/api/v1/config/{configID}/copy' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/apps/user_ldap/api/v1/config/{configID}/copy`

This endpoint requires admin access

<h3 id="copy-a-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configID|path|string|true|ID of the LDAP config|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "configID": "string"
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="copy-a-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Config was copied, new configID was returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Config not found|Inline|

<h3 id="copy-a-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » configID|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="userldap-wizard">wizard</h1>

## Run a wizard action and returns the result

<a id="opIdwizard-action"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/user_ldap/api/v1/wizard/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "loginName": null
  }'
```

`POST /ocs/v2.php/apps/user_ldap/api/v1/wizard/{configID}/{wizardAction}`

This endpoint requires admin access

> Body parameter

```json
{
  "loginName": null
}
```

<h3 id="run-a-wizard-action-and-returns-the-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configID|path|string|true|ID of the LDAP configuration|
|wizardAction|path|string|true|Wizard action to run|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» loginName|body|string \| null|false|Login name to test for testLoginName action|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "changes": {
        "property1": 0,
        "property2": 0
      },
      "options": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="run-a-wizard-action-and-returns-the-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Wizard action result|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="run-a-wizard-action-and-returns-the-result-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » changes|object|true|none|none|
|» » » **additionalProperties**|integer(int64) \| string \| [integer(int64)] \| [string]|false|none|none|
|» » » » *anyOf*|integer(int64)|false|none|none|
|» » » » *anyOf*|string|false|none|none|
|» » » » *anyOf*|[integer(int64)]|false|none|none|
|*anonymous*|[integer(int64)]|false|none|none|
|» » » » *anyOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|
|» » options|object|false|none|none|
|» » » **additionalProperties**|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Clear user or group mappings

<a id="opIdwizard-clear-mappings"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/user_ldap/api/v1/wizard/clearMappings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "subject": "user"
  }'
```

`POST /ocs/v2.php/apps/user_ldap/api/v1/wizard/clearMappings`

This endpoint requires admin access

> Body parameter

```json
{
  "subject": "user"
}
```

<h3 id="clear-user-or-group-mappings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» subject|body|string|true|Whether to clear group or user mappings|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subject|user|
|» subject|group|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="clear-user-or-group-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Clearing was done successfuly|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="clear-user-or-group-mappings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

# Schemas

<h2 id="tocS_OCSMeta">OCSMeta</h2>
<!-- backwards compatibility -->
<a id="schemaocsmeta"></a>
<a id="schema_OCSMeta"></a>
<a id="tocSocsmeta"></a>
<a id="tocsocsmeta"></a>

```json
{
  "status": "string",
  "statuscode": 0,
  "message": "string",
  "totalitems": "string",
  "itemsperpage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|statuscode|integer|true|none|none|
|message|string|false|none|none|
|totalitems|string|false|none|none|
|itemsperpage|string|false|none|none|
