<h1 id="aws-greengrass">AWS Greengrass v2017-06-07</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

AWS IoT Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS IoT Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS IoT Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.

Base URLs:

* <a href="http://greengrass.us-east-1.amazonaws.com">http://greengrass.us-east-1.amazonaws.com</a> - The AWS Greengrass multi-region endpoint

* <a href="https://greengrass.us-east-1.amazonaws.com">https://greengrass.us-east-1.amazonaws.com</a> - The AWS Greengrass multi-region endpoint

* <a href="http://greengrass.cn-north-1.amazonaws.com.cn">http://greengrass.cn-north-1.amazonaws.com.cn</a> - The AWS Greengrass endpoint for China (Beijing) and China (Ningxia)

* <a href="https://greengrass.cn-north-1.amazonaws.com.cn">https://greengrass.cn-north-1.amazonaws.com.cn</a> - The AWS Greengrass endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/greengrass/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-greengrass-default">Default</h1>

## GetAssociatedRole

<a id="opIdGetAssociatedRole"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/role \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/groups/{GroupId}/role`

Retrieves the role associated with a particular group.

<h3 id="getassociatedrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "AssociatedAt": {},
  "RoleArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getassociatedrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAssociatedRoleResponse](#schemagetassociatedroleresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateRoleToGroup

<a id="opIdAssociateRoleToGroup"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/role \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "RoleArn": "string"
  }'
```

`PUT /greengrass/groups/{GroupId}/role`

Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.

> Body parameter

```json
{
  "RoleArn": "string"
}
```

<h3 id="associateroletogroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» RoleArn|body|string|true|The ARN of the role you wish to associate with this group. The existence of the role is not validated.|

> Example responses

> 200 Response

```json
{
  "AssociatedAt": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="associateroletogroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateRoleToGroupResponse](#schemaassociateroletogroupresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateRoleFromGroup

<a id="opIdDisassociateRoleFromGroup"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/role \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /greengrass/groups/{GroupId}/role`

Disassociates the role from a group.

<h3 id="disassociaterolefromgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "DisassociatedAt": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="disassociaterolefromgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateRoleFromGroupResponse](#schemadisassociaterolefromgroupresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServiceRoleForAccount

<a id="opIdGetServiceRoleForAccount"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/servicerole \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/servicerole`

Retrieves the service role that is attached to your account.

<h3 id="getserviceroleforaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "AssociatedAt": {},
  "RoleArn": {}
}
```

> 480 Response

```json
null
```

<h3 id="getserviceroleforaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceRoleForAccountResponse](#schemagetserviceroleforaccountresponse)|
|480|480|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateServiceRoleToAccount

<a id="opIdAssociateServiceRoleToAccount"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/servicerole \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "RoleArn": "string"
  }'
```

`PUT /greengrass/servicerole`

Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.

> Body parameter

```json
{
  "RoleArn": "string"
}
```

<h3 id="associateserviceroletoaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» RoleArn|body|string|true|The ARN of the service role you wish to associate with your account.|

> Example responses

> 200 Response

```json
{
  "AssociatedAt": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="associateserviceroletoaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateServiceRoleToAccountResponse](#schemaassociateserviceroletoaccountresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateServiceRoleFromAccount

<a id="opIdDisassociateServiceRoleFromAccount"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/servicerole \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /greengrass/servicerole`

Disassociates the service role from your account. Without a service role, deployments will not work.

<h3 id="disassociateservicerolefromaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "DisassociatedAt": {}
}
```

> 480 Response

```json
null
```

<h3 id="disassociateservicerolefromaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateServiceRoleFromAccountResponse](#schemadisassociateservicerolefromaccountresponse)|
|480|480|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConnectorDefinitions

<a id="opIdListConnectorDefinitions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/connectors \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/connectors`

Retrieves a list of connector definitions.

<h3 id="listconnectordefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Definitions": {},
  "NextToken": {}
}
```

<h3 id="listconnectordefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConnectorDefinitionsResponse](#schemalistconnectordefinitionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConnectorDefinition

<a id="opIdCreateConnectorDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/connectors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InitialVersion": {
      "Connectors": {}
    },
    "Name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /greengrass/definition/connectors`

Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.

> Body parameter

```json
{
  "InitialVersion": {
    "Connectors": {}
  },
  "Name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createconnectordefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InitialVersion|body|object|false|Information about the connector definition version, which is a container for connectors.|
|» » Connectors|body|object|false|none|
|» Name|body|string|false|The name of the connector definition.|
|» tags|body|object|false|The key-value pair for the resource tag.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

> 480 Response

```json
null
```

<h3 id="createconnectordefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConnectorDefinitionResponse](#schemacreateconnectordefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConnectorDefinitionVersions

<a id="opIdListConnectorDefinitionVersions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/connectors/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/connectors/{ConnectorDefinitionId}/versions`

Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.

<h3 id="listconnectordefinitionversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConnectorDefinitionId|path|string|true|The ID of the connector definition.|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Versions": {}
}
```

> 480 Response

```json
null
```

<h3 id="listconnectordefinitionversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConnectorDefinitionVersionsResponse](#schemalistconnectordefinitionversionsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConnectorDefinitionVersion

<a id="opIdCreateConnectorDefinitionVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/connectors/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Connectors": [
      {
        "ConnectorArn": {},
        "Id": {},
        "Parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }'
```

`POST /greengrass/definition/connectors/{ConnectorDefinitionId}/versions`

Creates a version of a connector definition which has already been defined.

> Body parameter

```json
{
  "Connectors": [
    {
      "ConnectorArn": {},
      "Id": {},
      "Parameters": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

<h3 id="createconnectordefinitionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|ConnectorDefinitionId|path|string|true|The ID of the connector definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Connectors|body|[[Connector](#schemaconnector)]|false|A list of references to connectors in this version, with their corresponding configuration settings.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="createconnectordefinitionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConnectorDefinitionVersionResponse](#schemacreateconnectordefinitionversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCoreDefinitions

<a id="opIdListCoreDefinitions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/cores \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/cores`

Retrieves a list of core definitions.

<h3 id="listcoredefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Definitions": {},
  "NextToken": {}
}
```

<h3 id="listcoredefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCoreDefinitionsResponse](#schemalistcoredefinitionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCoreDefinition

<a id="opIdCreateCoreDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/cores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InitialVersion": {
      "Cores": {}
    },
    "Name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /greengrass/definition/cores`

Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.

> Body parameter

```json
{
  "InitialVersion": {
    "Cores": {}
  },
  "Name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createcoredefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InitialVersion|body|object|false|Information about a core definition version.|
|» » Cores|body|object|false|none|
|» Name|body|string|false|The name of the core definition.|
|» tags|body|object|false|The key-value pair for the resource tag.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

> 480 Response

```json
null
```

<h3 id="createcoredefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCoreDefinitionResponse](#schemacreatecoredefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCoreDefinitionVersions

<a id="opIdListCoreDefinitionVersions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/cores/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/cores/{CoreDefinitionId}/versions`

Lists the versions of a core definition.

<h3 id="listcoredefinitionversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CoreDefinitionId|path|string|true|The ID of the core definition.|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Versions": {}
}
```

> 480 Response

```json
null
```

<h3 id="listcoredefinitionversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCoreDefinitionVersionsResponse](#schemalistcoredefinitionversionsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCoreDefinitionVersion

<a id="opIdCreateCoreDefinitionVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/cores/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Cores": [
      {
        "CertificateArn": {},
        "Id": {},
        "SyncShadow": {},
        "ThingArn": {}
      }
    ]
  }'
```

`POST /greengrass/definition/cores/{CoreDefinitionId}/versions`

Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.

> Body parameter

```json
{
  "Cores": [
    {
      "CertificateArn": {},
      "Id": {},
      "SyncShadow": {},
      "ThingArn": {}
    }
  ]
}
```

<h3 id="createcoredefinitionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|CoreDefinitionId|path|string|true|The ID of the core definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Cores|body|[[Core](#schemacore)]|false|A list of cores in the core definition version.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="createcoredefinitionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCoreDefinitionVersionResponse](#schemacreatecoredefinitionversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeployments

<a id="opIdListDeployments"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/deployments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/groups/{GroupId}/deployments`

Returns a history of deployments for the group.

<h3 id="listdeployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|The ID of the Greengrass group.|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Deployments": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listdeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeploymentsResponse](#schemalistdeploymentsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDeployment

<a id="opIdCreateDeployment"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/deployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DeploymentId": "string",
    "DeploymentType": "NewDeployment",
    "GroupVersionId": "string"
  }'
```

`POST /greengrass/groups/{GroupId}/deployments`

Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.

> Body parameter

```json
{
  "DeploymentId": "string",
  "DeploymentType": "NewDeployment",
  "GroupVersionId": "string"
}
```

<h3 id="createdeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DeploymentId|body|string|false|The ID of the deployment if you wish to redeploy a previous deployment.|
|» DeploymentType|body|string|true|The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.|
|» GroupVersionId|body|string|false|The ID of the group version to be deployed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» DeploymentType|NewDeployment|
|» DeploymentType|Redeployment|
|» DeploymentType|ResetDeployment|
|» DeploymentType|ForceResetDeployment|

> Example responses

> 200 Response

```json
{
  "DeploymentArn": {},
  "DeploymentId": {}
}
```

> 480 Response

```json
null
```

<h3 id="createdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDeploymentResponse](#schemacreatedeploymentresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeviceDefinitions

<a id="opIdListDeviceDefinitions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/devices \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/devices`

Retrieves a list of device definitions.

<h3 id="listdevicedefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Definitions": {},
  "NextToken": {}
}
```

<h3 id="listdevicedefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeviceDefinitionsResponse](#schemalistdevicedefinitionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDeviceDefinition

<a id="opIdCreateDeviceDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/devices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InitialVersion": {
      "Devices": {}
    },
    "Name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /greengrass/definition/devices`

Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.

> Body parameter

```json
{
  "InitialVersion": {
    "Devices": {}
  },
  "Name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createdevicedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InitialVersion|body|object|false|Information about a device definition version.|
|» » Devices|body|object|false|none|
|» Name|body|string|false|The name of the device definition.|
|» tags|body|object|false|The key-value pair for the resource tag.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

> 480 Response

```json
null
```

<h3 id="createdevicedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDeviceDefinitionResponse](#schemacreatedevicedefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeviceDefinitionVersions

<a id="opIdListDeviceDefinitionVersions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/devices/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/devices/{DeviceDefinitionId}/versions`

Lists the versions of a device definition.

<h3 id="listdevicedefinitionversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DeviceDefinitionId|path|string|true|The ID of the device definition.|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Versions": {}
}
```

> 480 Response

```json
null
```

<h3 id="listdevicedefinitionversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeviceDefinitionVersionsResponse](#schemalistdevicedefinitionversionsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDeviceDefinitionVersion

<a id="opIdCreateDeviceDefinitionVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/devices/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Devices": [
      {
        "CertificateArn": {},
        "Id": {},
        "SyncShadow": {},
        "ThingArn": {}
      }
    ]
  }'
```

`POST /greengrass/definition/devices/{DeviceDefinitionId}/versions`

Creates a version of a device definition that has already been defined.

> Body parameter

```json
{
  "Devices": [
    {
      "CertificateArn": {},
      "Id": {},
      "SyncShadow": {},
      "ThingArn": {}
    }
  ]
}
```

<h3 id="createdevicedefinitionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|DeviceDefinitionId|path|string|true|The ID of the device definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Devices|body|[[Device](#schemadevice)]|false|A list of devices in the definition version.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="createdevicedefinitionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDeviceDefinitionVersionResponse](#schemacreatedevicedefinitionversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFunctionDefinitions

<a id="opIdListFunctionDefinitions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/functions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/functions`

Retrieves a list of Lambda function definitions.

<h3 id="listfunctiondefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Definitions": {},
  "NextToken": {}
}
```

<h3 id="listfunctiondefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFunctionDefinitionsResponse](#schemalistfunctiondefinitionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFunctionDefinition

<a id="opIdCreateFunctionDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/functions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InitialVersion": {
      "DefaultConfig": {
        "Execution": {
          "IsolationMode": "GreengrassContainer",
          "RunAs": {
            "Gid": {},
            "Uid": {}
          }
        }
      },
      "Functions": {}
    },
    "Name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /greengrass/definition/functions`

Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.

> Body parameter

```json
{
  "InitialVersion": {
    "DefaultConfig": {
      "Execution": {
        "IsolationMode": "GreengrassContainer",
        "RunAs": {
          "Gid": {},
          "Uid": {}
        }
      }
    },
    "Functions": {}
  },
  "Name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createfunctiondefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InitialVersion|body|object|false|Information about a function definition version.|
|» » DefaultConfig|body|object|false|none|
|» » » Execution|body|[FunctionDefaultExecutionConfig](#schemafunctiondefaultexecutionconfig)|false|Configuration information that specifies how a Lambda function runs. |
|» » Functions|body|object|false|none|
|» Name|body|string|false|The name of the function definition.|
|» tags|body|object|false|The key-value pair for the resource tag.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

> 480 Response

```json
null
```

<h3 id="createfunctiondefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFunctionDefinitionResponse](#schemacreatefunctiondefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFunctionDefinitionVersions

<a id="opIdListFunctionDefinitionVersions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/functions/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/functions/{FunctionDefinitionId}/versions`

Lists the versions of a Lambda function definition.

<h3 id="listfunctiondefinitionversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionDefinitionId|path|string|true|The ID of the Lambda function definition.|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Versions": {}
}
```

> 480 Response

```json
null
```

<h3 id="listfunctiondefinitionversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFunctionDefinitionVersionsResponse](#schemalistfunctiondefinitionversionsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFunctionDefinitionVersion

<a id="opIdCreateFunctionDefinitionVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/functions/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DefaultConfig": {
      "Execution": {
        "IsolationMode": "GreengrassContainer",
        "RunAs": {
          "Gid": {},
          "Uid": {}
        }
      }
    },
    "Functions": [
      {
        "FunctionArn": {},
        "FunctionConfiguration": {
          "EncodingType": {},
          "Environment": {
            "AccessSysfs": {},
            "Execution": {
              "IsolationMode": "GreengrassContainer",
              "RunAs": {
                "Gid": {},
                "Uid": {}
              }
            },
            "ResourceAccessPolicies": {},
            "Variables": {
              "property1": "string",
              "property2": "string"
            }
          },
          "ExecArgs": {},
          "Executable": {},
          "MemorySize": {},
          "Pinned": {},
          "Timeout": {},
          "FunctionRuntimeOverride": {}
        },
        "Id": {}
      }
    ]
  }'
```

`POST /greengrass/definition/functions/{FunctionDefinitionId}/versions`

Creates a version of a Lambda function definition that has already been defined.

> Body parameter

```json
{
  "DefaultConfig": {
    "Execution": {
      "IsolationMode": "GreengrassContainer",
      "RunAs": {
        "Gid": {},
        "Uid": {}
      }
    }
  },
  "Functions": [
    {
      "FunctionArn": {},
      "FunctionConfiguration": {
        "EncodingType": {},
        "Environment": {
          "AccessSysfs": {},
          "Execution": {
            "IsolationMode": "GreengrassContainer",
            "RunAs": {
              "Gid": {},
              "Uid": {}
            }
          },
          "ResourceAccessPolicies": {},
          "Variables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "ExecArgs": {},
        "Executable": {},
        "MemorySize": {},
        "Pinned": {},
        "Timeout": {},
        "FunctionRuntimeOverride": {}
      },
      "Id": {}
    }
  ]
}
```

<h3 id="createfunctiondefinitionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|FunctionDefinitionId|path|string|true|The ID of the Lambda function definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DefaultConfig|body|object|false|The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.|
|» » Execution|body|[FunctionDefaultExecutionConfig](#schemafunctiondefaultexecutionconfig)|false|Configuration information that specifies how a Lambda function runs. |
|» Functions|body|[[Function](#schemafunction)]|false|A list of Lambda functions in this function definition version.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="createfunctiondefinitionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFunctionDefinitionVersionResponse](#schemacreatefunctiondefinitionversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroups

<a id="opIdListGroups"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/groups`

Retrieves a list of groups.

<h3 id="listgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Groups": {},
  "NextToken": {}
}
```

<h3 id="listgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroupsResponse](#schemalistgroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGroup

<a id="opIdCreateGroup"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InitialVersion": {
      "ConnectorDefinitionVersionArn": {},
      "CoreDefinitionVersionArn": {},
      "DeviceDefinitionVersionArn": {},
      "FunctionDefinitionVersionArn": {},
      "LoggerDefinitionVersionArn": {},
      "ResourceDefinitionVersionArn": {},
      "SubscriptionDefinitionVersionArn": {}
    },
    "Name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /greengrass/groups`

Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.

> Body parameter

```json
{
  "InitialVersion": {
    "ConnectorDefinitionVersionArn": {},
    "CoreDefinitionVersionArn": {},
    "DeviceDefinitionVersionArn": {},
    "FunctionDefinitionVersionArn": {},
    "LoggerDefinitionVersionArn": {},
    "ResourceDefinitionVersionArn": {},
    "SubscriptionDefinitionVersionArn": {}
  },
  "Name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="creategroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InitialVersion|body|object|false|Information about a group version.|
|» » ConnectorDefinitionVersionArn|body|object|false|none|
|» » CoreDefinitionVersionArn|body|object|false|none|
|» » DeviceDefinitionVersionArn|body|object|false|none|
|» » FunctionDefinitionVersionArn|body|object|false|none|
|» » LoggerDefinitionVersionArn|body|object|false|none|
|» » ResourceDefinitionVersionArn|body|object|false|none|
|» » SubscriptionDefinitionVersionArn|body|object|false|none|
|» Name|body|string|true|The name of the group.|
|» tags|body|object|false|The key-value pair for the resource tag.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

> 480 Response

```json
null
```

<h3 id="creategroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGroupResponse](#schemacreategroupresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroupCertificateAuthorities

<a id="opIdListGroupCertificateAuthorities"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/certificateauthorities \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/groups/{GroupId}/certificateauthorities`

Retrieves the current CAs for a group.

<h3 id="listgroupcertificateauthorities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "GroupCertificateAuthorities": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listgroupcertificateauthorities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroupCertificateAuthoritiesResponse](#schemalistgroupcertificateauthoritiesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGroupCertificateAuthority

<a id="opIdCreateGroupCertificateAuthority"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/certificateauthorities \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /greengrass/groups/{GroupId}/certificateauthorities`

Creates a CA for the group. If a CA already exists, it will rotate the existing CA.

<h3 id="creategroupcertificateauthority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "GroupCertificateAuthorityArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="creategroupcertificateauthority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGroupCertificateAuthorityResponse](#schemacreategroupcertificateauthorityresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroupVersions

<a id="opIdListGroupVersions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/groups/{GroupId}/versions`

Lists the versions of a group.

<h3 id="listgroupversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|The ID of the Greengrass group.|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Versions": {}
}
```

> 480 Response

```json
null
```

<h3 id="listgroupversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroupVersionsResponse](#schemalistgroupversionsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGroupVersion

<a id="opIdCreateGroupVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ConnectorDefinitionVersionArn": "string",
    "CoreDefinitionVersionArn": "string",
    "DeviceDefinitionVersionArn": "string",
    "FunctionDefinitionVersionArn": "string",
    "LoggerDefinitionVersionArn": "string",
    "ResourceDefinitionVersionArn": "string",
    "SubscriptionDefinitionVersionArn": "string"
  }'
```

`POST /greengrass/groups/{GroupId}/versions`

Creates a version of a group which has already been defined.

> Body parameter

```json
{
  "ConnectorDefinitionVersionArn": "string",
  "CoreDefinitionVersionArn": "string",
  "DeviceDefinitionVersionArn": "string",
  "FunctionDefinitionVersionArn": "string",
  "LoggerDefinitionVersionArn": "string",
  "ResourceDefinitionVersionArn": "string",
  "SubscriptionDefinitionVersionArn": "string"
}
```

<h3 id="creategroupversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ConnectorDefinitionVersionArn|body|string|false|The ARN of the connector definition version for this group.|
|» CoreDefinitionVersionArn|body|string|false|The ARN of the core definition version for this group.|
|» DeviceDefinitionVersionArn|body|string|false|The ARN of the device definition version for this group.|
|» FunctionDefinitionVersionArn|body|string|false|The ARN of the function definition version for this group.|
|» LoggerDefinitionVersionArn|body|string|false|The ARN of the logger definition version for this group.|
|» ResourceDefinitionVersionArn|body|string|false|The ARN of the resource definition version for this group.|
|» SubscriptionDefinitionVersionArn|body|string|false|The ARN of the subscription definition version for this group.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="creategroupversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGroupVersionResponse](#schemacreategroupversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLoggerDefinitions

<a id="opIdListLoggerDefinitions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/loggers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/loggers`

Retrieves a list of logger definitions.

<h3 id="listloggerdefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Definitions": {},
  "NextToken": {}
}
```

<h3 id="listloggerdefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLoggerDefinitionsResponse](#schemalistloggerdefinitionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLoggerDefinition

<a id="opIdCreateLoggerDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/loggers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InitialVersion": {
      "Loggers": {}
    },
    "Name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /greengrass/definition/loggers`

Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.

> Body parameter

```json
{
  "InitialVersion": {
    "Loggers": {}
  },
  "Name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createloggerdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InitialVersion|body|object|false|Information about a logger definition version.|
|» » Loggers|body|object|false|none|
|» Name|body|string|false|The name of the logger definition.|
|» tags|body|object|false|The key-value pair for the resource tag.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

> 480 Response

```json
null
```

<h3 id="createloggerdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLoggerDefinitionResponse](#schemacreateloggerdefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLoggerDefinitionVersions

<a id="opIdListLoggerDefinitionVersions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/loggers/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/loggers/{LoggerDefinitionId}/versions`

Lists the versions of a logger definition.

<h3 id="listloggerdefinitionversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoggerDefinitionId|path|string|true|The ID of the logger definition.|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Versions": {}
}
```

> 480 Response

```json
null
```

<h3 id="listloggerdefinitionversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLoggerDefinitionVersionsResponse](#schemalistloggerdefinitionversionsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLoggerDefinitionVersion

<a id="opIdCreateLoggerDefinitionVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/loggers/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Loggers": [
      {
        "Component": {},
        "Id": {},
        "Level": {},
        "Space": {},
        "Type": {}
      }
    ]
  }'
```

`POST /greengrass/definition/loggers/{LoggerDefinitionId}/versions`

Creates a version of a logger definition that has already been defined.

> Body parameter

```json
{
  "Loggers": [
    {
      "Component": {},
      "Id": {},
      "Level": {},
      "Space": {},
      "Type": {}
    }
  ]
}
```

<h3 id="createloggerdefinitionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|LoggerDefinitionId|path|string|true|The ID of the logger definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Loggers|body|[[Logger](#schemalogger)]|false|A list of loggers.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="createloggerdefinitionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLoggerDefinitionVersionResponse](#schemacreateloggerdefinitionversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceDefinitions

<a id="opIdListResourceDefinitions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/resources \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/resources`

Retrieves a list of resource definitions.

<h3 id="listresourcedefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Definitions": {},
  "NextToken": {}
}
```

<h3 id="listresourcedefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceDefinitionsResponse](#schemalistresourcedefinitionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateResourceDefinition

<a id="opIdCreateResourceDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/resources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InitialVersion": {
      "Resources": {}
    },
    "Name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /greengrass/definition/resources`

Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.

> Body parameter

```json
{
  "InitialVersion": {
    "Resources": {}
  },
  "Name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createresourcedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InitialVersion|body|object|false|Information about a resource definition version.|
|» » Resources|body|object|false|none|
|» Name|body|string|false|The name of the resource definition.|
|» tags|body|object|false|The key-value pair for the resource tag.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

> 480 Response

```json
null
```

<h3 id="createresourcedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateResourceDefinitionResponse](#schemacreateresourcedefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceDefinitionVersions

<a id="opIdListResourceDefinitionVersions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/resources/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/resources/{ResourceDefinitionId}/versions`

Lists the versions of a resource definition.

<h3 id="listresourcedefinitionversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|ResourceDefinitionId|path|string|true|The ID of the resource definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Versions": {}
}
```

> 480 Response

```json
null
```

<h3 id="listresourcedefinitionversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceDefinitionVersionsResponse](#schemalistresourcedefinitionversionsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateResourceDefinitionVersion

<a id="opIdCreateResourceDefinitionVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/resources/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Resources": [
      {
        "Id": {},
        "Name": {},
        "ResourceDataContainer": {
          "LocalDeviceResourceData": {
            "GroupOwnerSetting": {
              "AutoAddGroupOwner": {},
              "GroupOwner": {}
            },
            "SourcePath": {}
          },
          "LocalVolumeResourceData": {
            "DestinationPath": {},
            "GroupOwnerSetting": {
              "AutoAddGroupOwner": {},
              "GroupOwner": {}
            },
            "SourcePath": {}
          },
          "S3MachineLearningModelResourceData": {
            "DestinationPath": {},
            "OwnerSetting": {
              "GroupOwner": {},
              "GroupPermission": {}
            },
            "S3Uri": {}
          },
          "SageMakerMachineLearningModelResourceData": {
            "DestinationPath": {},
            "OwnerSetting": {
              "GroupOwner": {},
              "GroupPermission": {}
            },
            "SageMakerJobArn": {}
          },
          "SecretsManagerSecretResourceData": {
            "ARN": {},
            "AdditionalStagingLabelsToDownload": {}
          }
        }
      }
    ]
  }'
```

`POST /greengrass/definition/resources/{ResourceDefinitionId}/versions`

Creates a version of a resource definition that has already been defined.

> Body parameter

```json
{
  "Resources": [
    {
      "Id": {},
      "Name": {},
      "ResourceDataContainer": {
        "LocalDeviceResourceData": {
          "GroupOwnerSetting": {
            "AutoAddGroupOwner": {},
            "GroupOwner": {}
          },
          "SourcePath": {}
        },
        "LocalVolumeResourceData": {
          "DestinationPath": {},
          "GroupOwnerSetting": {
            "AutoAddGroupOwner": {},
            "GroupOwner": {}
          },
          "SourcePath": {}
        },
        "S3MachineLearningModelResourceData": {
          "DestinationPath": {},
          "OwnerSetting": {
            "GroupOwner": {},
            "GroupPermission": {}
          },
          "S3Uri": {}
        },
        "SageMakerMachineLearningModelResourceData": {
          "DestinationPath": {},
          "OwnerSetting": {
            "GroupOwner": {},
            "GroupPermission": {}
          },
          "SageMakerJobArn": {}
        },
        "SecretsManagerSecretResourceData": {
          "ARN": {},
          "AdditionalStagingLabelsToDownload": {}
        }
      }
    }
  ]
}
```

<h3 id="createresourcedefinitionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|ResourceDefinitionId|path|string|true|The ID of the resource definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Resources|body|[[Resource](#schemaresource)]|false|A list of resources.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="createresourcedefinitionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateResourceDefinitionVersionResponse](#schemacreateresourcedefinitionversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSoftwareUpdateJob

<a id="opIdCreateSoftwareUpdateJob"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/updates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "S3UrlSignerRole": "string",
    "SoftwareToUpdate": "core",
    "UpdateAgentLogLevel": "NONE",
    "UpdateTargets": [
      "string"
    ],
    "UpdateTargetsArchitecture": "armv6l",
    "UpdateTargetsOperatingSystem": "ubuntu"
  }'
```

`POST /greengrass/updates`

Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.

> Body parameter

```json
{
  "S3UrlSignerRole": "string",
  "SoftwareToUpdate": "core",
  "UpdateAgentLogLevel": "NONE",
  "UpdateTargets": [
    "string"
  ],
  "UpdateTargetsArchitecture": "armv6l",
  "UpdateTargetsOperatingSystem": "ubuntu"
}
```

<h3 id="createsoftwareupdatejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» S3UrlSignerRole|body|string|true|The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.|
|» SoftwareToUpdate|body|string|true|The piece of software on the Greengrass core that will be updated.|
|» UpdateAgentLogLevel|body|string|false|The minimum level of log statements that should be logged by the OTA Agent during an update.|
|» UpdateTargets|body|[[__string](#schema__string)]|true|The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.|
|» UpdateTargetsArchitecture|body|string|true|The architecture of the cores which are the targets of an update.|
|» UpdateTargetsOperatingSystem|body|string|true|The operating system of the cores which are the targets of an update.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» SoftwareToUpdate|core|
|» SoftwareToUpdate|ota_agent|
|» UpdateAgentLogLevel|NONE|
|» UpdateAgentLogLevel|TRACE|
|» UpdateAgentLogLevel|DEBUG|
|» UpdateAgentLogLevel|VERBOSE|
|» UpdateAgentLogLevel|INFO|
|» UpdateAgentLogLevel|WARN|
|» UpdateAgentLogLevel|ERROR|
|» UpdateAgentLogLevel|FATAL|
|» UpdateTargetsArchitecture|armv6l|
|» UpdateTargetsArchitecture|armv7l|
|» UpdateTargetsArchitecture|x86_64|
|» UpdateTargetsArchitecture|aarch64|
|» UpdateTargetsOperatingSystem|ubuntu|
|» UpdateTargetsOperatingSystem|raspbian|
|» UpdateTargetsOperatingSystem|amazon_linux|
|» UpdateTargetsOperatingSystem|openwrt|

> Example responses

> 200 Response

```json
{
  "IotJobArn": {},
  "IotJobId": {},
  "PlatformSoftwareVersion": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createsoftwareupdatejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSoftwareUpdateJobResponse](#schemacreatesoftwareupdatejobresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSubscriptionDefinitions

<a id="opIdListSubscriptionDefinitions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/subscriptions`

Retrieves a list of subscription definitions.

<h3 id="listsubscriptiondefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Definitions": {},
  "NextToken": {}
}
```

<h3 id="listsubscriptiondefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSubscriptionDefinitionsResponse](#schemalistsubscriptiondefinitionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSubscriptionDefinition

<a id="opIdCreateSubscriptionDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InitialVersion": {
      "Subscriptions": {}
    },
    "Name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /greengrass/definition/subscriptions`

Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.

> Body parameter

```json
{
  "InitialVersion": {
    "Subscriptions": {}
  },
  "Name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createsubscriptiondefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InitialVersion|body|object|false|Information about a subscription definition version.|
|» » Subscriptions|body|object|false|none|
|» Name|body|string|false|The name of the subscription definition.|
|» tags|body|object|false|The key-value pair for the resource tag.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

> 480 Response

```json
null
```

<h3 id="createsubscriptiondefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSubscriptionDefinitionResponse](#schemacreatesubscriptiondefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSubscriptionDefinitionVersions

<a id="opIdListSubscriptionDefinitionVersions"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/subscriptions/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions`

Lists the versions of a subscription definition.

<h3 id="listsubscriptiondefinitionversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|SubscriptionDefinitionId|path|string|true|The ID of the subscription definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Versions": {}
}
```

> 480 Response

```json
null
```

<h3 id="listsubscriptiondefinitionversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSubscriptionDefinitionVersionsResponse](#schemalistsubscriptiondefinitionversionsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSubscriptionDefinitionVersion

<a id="opIdCreateSubscriptionDefinitionVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/subscriptions/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Subscriptions": [
      {
        "Id": {},
        "Source": {},
        "Subject": {},
        "Target": {}
      }
    ]
  }'
```

`POST /greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions`

Creates a version of a subscription definition which has already been defined.

> Body parameter

```json
{
  "Subscriptions": [
    {
      "Id": {},
      "Source": {},
      "Subject": {},
      "Target": {}
    }
  ]
}
```

<h3 id="createsubscriptiondefinitionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|SubscriptionDefinitionId|path|string|true|The ID of the subscription definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Subscriptions|body|[[Subscription](#schemasubscription)]|false|A list of subscriptions.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="createsubscriptiondefinitionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSubscriptionDefinitionVersionResponse](#schemacreatesubscriptiondefinitionversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConnectorDefinition

<a id="opIdGetConnectorDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/connectors/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/connectors/{ConnectorDefinitionId}`

Retrieves information about a connector definition.

<h3 id="getconnectordefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConnectorDefinitionId|path|string|true|The ID of the connector definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

<h3 id="getconnectordefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConnectorDefinitionResponse](#schemagetconnectordefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConnectorDefinition

<a id="opIdUpdateConnectorDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/connectors/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string"
  }'
```

`PUT /greengrass/definition/connectors/{ConnectorDefinitionId}`

Updates a connector definition.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="updateconnectordefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConnectorDefinitionId|path|string|true|The ID of the connector definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the definition.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="updateconnectordefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConnectorDefinitionResponse](#schemaupdateconnectordefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConnectorDefinition

<a id="opIdDeleteConnectorDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/connectors/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /greengrass/definition/connectors/{ConnectorDefinitionId}`

Deletes a connector definition.

<h3 id="deleteconnectordefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConnectorDefinitionId|path|string|true|The ID of the connector definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deleteconnectordefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConnectorDefinitionResponse](#schemadeleteconnectordefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCoreDefinition

<a id="opIdGetCoreDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/cores/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/cores/{CoreDefinitionId}`

Retrieves information about a core definition version.

<h3 id="getcoredefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CoreDefinitionId|path|string|true|The ID of the core definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

<h3 id="getcoredefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCoreDefinitionResponse](#schemagetcoredefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCoreDefinition

<a id="opIdUpdateCoreDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/cores/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string"
  }'
```

`PUT /greengrass/definition/cores/{CoreDefinitionId}`

Updates a core definition.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="updatecoredefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CoreDefinitionId|path|string|true|The ID of the core definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the definition.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="updatecoredefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCoreDefinitionResponse](#schemaupdatecoredefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCoreDefinition

<a id="opIdDeleteCoreDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/cores/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /greengrass/definition/cores/{CoreDefinitionId}`

Deletes a core definition.

<h3 id="deletecoredefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CoreDefinitionId|path|string|true|The ID of the core definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deletecoredefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCoreDefinitionResponse](#schemadeletecoredefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeviceDefinition

<a id="opIdGetDeviceDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/devices/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/devices/{DeviceDefinitionId}`

Retrieves information about a device definition.

<h3 id="getdevicedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DeviceDefinitionId|path|string|true|The ID of the device definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

<h3 id="getdevicedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeviceDefinitionResponse](#schemagetdevicedefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDeviceDefinition

<a id="opIdUpdateDeviceDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/devices/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string"
  }'
```

`PUT /greengrass/definition/devices/{DeviceDefinitionId}`

Updates a device definition.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="updatedevicedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DeviceDefinitionId|path|string|true|The ID of the device definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the definition.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="updatedevicedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDeviceDefinitionResponse](#schemaupdatedevicedefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDeviceDefinition

<a id="opIdDeleteDeviceDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/devices/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /greengrass/definition/devices/{DeviceDefinitionId}`

Deletes a device definition.

<h3 id="deletedevicedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DeviceDefinitionId|path|string|true|The ID of the device definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deletedevicedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDeviceDefinitionResponse](#schemadeletedevicedefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFunctionDefinition

<a id="opIdGetFunctionDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/functions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/functions/{FunctionDefinitionId}`

Retrieves information about a Lambda function definition, including its creation time and latest version.

<h3 id="getfunctiondefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionDefinitionId|path|string|true|The ID of the Lambda function definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

<h3 id="getfunctiondefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFunctionDefinitionResponse](#schemagetfunctiondefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFunctionDefinition

<a id="opIdUpdateFunctionDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/functions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string"
  }'
```

`PUT /greengrass/definition/functions/{FunctionDefinitionId}`

Updates a Lambda function definition.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="updatefunctiondefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionDefinitionId|path|string|true|The ID of the Lambda function definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the definition.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="updatefunctiondefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFunctionDefinitionResponse](#schemaupdatefunctiondefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFunctionDefinition

<a id="opIdDeleteFunctionDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/functions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /greengrass/definition/functions/{FunctionDefinitionId}`

Deletes a Lambda function definition.

<h3 id="deletefunctiondefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionDefinitionId|path|string|true|The ID of the Lambda function definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deletefunctiondefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFunctionDefinitionResponse](#schemadeletefunctiondefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGroup

<a id="opIdGetGroup"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/groups/{GroupId}`

Retrieves information about a group.

<h3 id="getgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

<h3 id="getgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGroupResponse](#schemagetgroupresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGroup

<a id="opIdUpdateGroup"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string"
  }'
```

`PUT /greengrass/groups/{GroupId}`

Updates a group.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="updategroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the definition.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="updategroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGroupResponse](#schemaupdategroupresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGroup

<a id="opIdDeleteGroup"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /greengrass/groups/{GroupId}`

Deletes a group.

<h3 id="deletegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deletegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGroupResponse](#schemadeletegroupresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLoggerDefinition

<a id="opIdGetLoggerDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/loggers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/loggers/{LoggerDefinitionId}`

Retrieves information about a logger definition.

<h3 id="getloggerdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoggerDefinitionId|path|string|true|The ID of the logger definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

<h3 id="getloggerdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLoggerDefinitionResponse](#schemagetloggerdefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLoggerDefinition

<a id="opIdUpdateLoggerDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/loggers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string"
  }'
```

`PUT /greengrass/definition/loggers/{LoggerDefinitionId}`

Updates a logger definition.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="updateloggerdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoggerDefinitionId|path|string|true|The ID of the logger definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the definition.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="updateloggerdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLoggerDefinitionResponse](#schemaupdateloggerdefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLoggerDefinition

<a id="opIdDeleteLoggerDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/loggers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /greengrass/definition/loggers/{LoggerDefinitionId}`

Deletes a logger definition.

<h3 id="deleteloggerdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoggerDefinitionId|path|string|true|The ID of the logger definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deleteloggerdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLoggerDefinitionResponse](#schemadeleteloggerdefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceDefinition

<a id="opIdGetResourceDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/resources/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/resources/{ResourceDefinitionId}`

Retrieves information about a resource definition, including its creation time and latest version.

<h3 id="getresourcedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceDefinitionId|path|string|true|The ID of the resource definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

<h3 id="getresourcedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceDefinitionResponse](#schemagetresourcedefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResourceDefinition

<a id="opIdUpdateResourceDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/resources/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string"
  }'
```

`PUT /greengrass/definition/resources/{ResourceDefinitionId}`

Updates a resource definition.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="updateresourcedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceDefinitionId|path|string|true|The ID of the resource definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the definition.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="updateresourcedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResourceDefinitionResponse](#schemaupdateresourcedefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourceDefinition

<a id="opIdDeleteResourceDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/resources/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /greengrass/definition/resources/{ResourceDefinitionId}`

Deletes a resource definition.

<h3 id="deleteresourcedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceDefinitionId|path|string|true|The ID of the resource definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deleteresourcedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResourceDefinitionResponse](#schemadeleteresourcedefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSubscriptionDefinition

<a id="opIdGetSubscriptionDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/subscriptions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/subscriptions/{SubscriptionDefinitionId}`

Retrieves information about a subscription definition.

<h3 id="getsubscriptiondefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionDefinitionId|path|string|true|The ID of the subscription definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

<h3 id="getsubscriptiondefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSubscriptionDefinitionResponse](#schemagetsubscriptiondefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSubscriptionDefinition

<a id="opIdUpdateSubscriptionDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/subscriptions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string"
  }'
```

`PUT /greengrass/definition/subscriptions/{SubscriptionDefinitionId}`

Updates a subscription definition.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="updatesubscriptiondefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionDefinitionId|path|string|true|The ID of the subscription definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the definition.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="updatesubscriptiondefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSubscriptionDefinitionResponse](#schemaupdatesubscriptiondefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSubscriptionDefinition

<a id="opIdDeleteSubscriptionDefinition"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/subscriptions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /greengrass/definition/subscriptions/{SubscriptionDefinitionId}`

Deletes a subscription definition.

<h3 id="deletesubscriptiondefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionDefinitionId|path|string|true|The ID of the subscription definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deletesubscriptiondefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSubscriptionDefinitionResponse](#schemadeletesubscriptiondefinitionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBulkDeploymentStatus

<a id="opIdGetBulkDeploymentStatus"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/bulk/deployments/string/status \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/bulk/deployments/{BulkDeploymentId}/status`

Returns the status of a bulk deployment.

<h3 id="getbulkdeploymentstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|BulkDeploymentId|path|string|true|The ID of the bulk deployment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "BulkDeploymentMetrics": {
    "InvalidInputRecords": {},
    "RecordsProcessed": {},
    "RetryAttempts": {}
  },
  "BulkDeploymentStatus": {},
  "CreatedAt": {},
  "ErrorDetails": {},
  "ErrorMessage": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

<h3 id="getbulkdeploymentstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBulkDeploymentStatusResponse](#schemagetbulkdeploymentstatusresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConnectivityInfo

<a id="opIdGetConnectivityInfo"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/things/string/connectivityInfo \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/things/{ThingName}/connectivityInfo`

Retrieves the connectivity information for a core.

<h3 id="getconnectivityinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ThingName|path|string|true|The thing name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "ConnectivityInfo": {},
  "Message": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getconnectivityinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConnectivityInfoResponse](#schemagetconnectivityinforesponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConnectivityInfo

<a id="opIdUpdateConnectivityInfo"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/things/string/connectivityInfo \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ConnectivityInfo": [
      {
        "HostAddress": {},
        "Id": {},
        "Metadata": {},
        "PortNumber": {}
      }
    ]
  }'
```

`PUT /greengrass/things/{ThingName}/connectivityInfo`

Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.

> Body parameter

```json
{
  "ConnectivityInfo": [
    {
      "HostAddress": {},
      "Id": {},
      "Metadata": {},
      "PortNumber": {}
    }
  ]
}
```

<h3 id="updateconnectivityinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ThingName|path|string|true|The thing name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ConnectivityInfo|body|[[ConnectivityInfo](#schemaconnectivityinfo)]|false|A list of connectivity info.|

> Example responses

> 200 Response

```json
{
  "Message": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updateconnectivityinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConnectivityInfoResponse](#schemaupdateconnectivityinforesponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConnectorDefinitionVersion

<a id="opIdGetConnectorDefinitionVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/connectors/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/connectors/{ConnectorDefinitionId}/versions/{ConnectorDefinitionVersionId}`

Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.

<h3 id="getconnectordefinitionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConnectorDefinitionId|path|string|true|The ID of the connector definition.|
|ConnectorDefinitionVersionId|path|string|true|The ID of the connector definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListConnectorDefinitionVersions'' requests. If the version is the last one that was associated with a connector definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "Connectors": {}
  },
  "Id": {},
  "NextToken": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="getconnectordefinitionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConnectorDefinitionVersionResponse](#schemagetconnectordefinitionversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCoreDefinitionVersion

<a id="opIdGetCoreDefinitionVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/cores/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}`

Retrieves information about a core definition version.

<h3 id="getcoredefinitionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CoreDefinitionId|path|string|true|The ID of the core definition.|
|CoreDefinitionVersionId|path|string|true|The ID of the core definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListCoreDefinitionVersions'' requests. If the version is the last one that was associated with a core definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "Cores": {}
  },
  "Id": {},
  "NextToken": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="getcoredefinitionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCoreDefinitionVersionResponse](#schemagetcoredefinitionversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeploymentStatus

<a id="opIdGetDeploymentStatus"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/deployments/string/status \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/groups/{GroupId}/deployments/{DeploymentId}/status`

Returns the status of a deployment.

<h3 id="getdeploymentstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DeploymentId|path|string|true|The ID of the deployment.|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "DeploymentStatus": {},
  "DeploymentType": {},
  "ErrorDetails": {},
  "ErrorMessage": {},
  "UpdatedAt": {}
}
```

> 480 Response

```json
null
```

<h3 id="getdeploymentstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeploymentStatusResponse](#schemagetdeploymentstatusresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeviceDefinitionVersion

<a id="opIdGetDeviceDefinitionVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/devices/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}`

Retrieves information about a device definition version.

<h3 id="getdevicedefinitionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DeviceDefinitionId|path|string|true|The ID of the device definition.|
|DeviceDefinitionVersionId|path|string|true|The ID of the device definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListDeviceDefinitionVersions'' requests. If the version is the last one that was associated with a device definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "Devices": {}
  },
  "Id": {},
  "NextToken": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="getdevicedefinitionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeviceDefinitionVersionResponse](#schemagetdevicedefinitionversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFunctionDefinitionVersion

<a id="opIdGetFunctionDefinitionVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/functions/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}`

Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.

<h3 id="getfunctiondefinitionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FunctionDefinitionId|path|string|true|The ID of the Lambda function definition.|
|FunctionDefinitionVersionId|path|string|true|The ID of the function definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListFunctionDefinitionVersions'' requests. If the version is the last one that was associated with a function definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "DefaultConfig": {
      "Execution": {
        "IsolationMode": "GreengrassContainer",
        "RunAs": {
          "Gid": {},
          "Uid": {}
        }
      }
    },
    "Functions": {}
  },
  "Id": {},
  "NextToken": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="getfunctiondefinitionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFunctionDefinitionVersionResponse](#schemagetfunctiondefinitionversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGroupCertificateAuthority

<a id="opIdGetGroupCertificateAuthority"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/certificateauthorities/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}`

Retreives the CA associated with a group. Returns the public key of the CA.

<h3 id="getgroupcertificateauthority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CertificateAuthorityId|path|string|true|The ID of the certificate authority.|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "GroupCertificateAuthorityArn": {},
  "GroupCertificateAuthorityId": {},
  "PemEncodedCertificate": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getgroupcertificateauthority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGroupCertificateAuthorityResponse](#schemagetgroupcertificateauthorityresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGroupCertificateConfiguration

<a id="opIdGetGroupCertificateConfiguration"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/certificateauthorities/configuration/expiry \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry`

Retrieves the current configuration for the CA used by the group.

<h3 id="getgroupcertificateconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "CertificateAuthorityExpiryInMilliseconds": {},
  "CertificateExpiryInMilliseconds": {},
  "GroupId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getgroupcertificateconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGroupCertificateConfigurationResponse](#schemagetgroupcertificateconfigurationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGroupCertificateConfiguration

<a id="opIdUpdateGroupCertificateConfiguration"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/certificateauthorities/configuration/expiry \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CertificateExpiryInMilliseconds": "string"
  }'
```

`PUT /greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry`

Updates the Certificate expiry time for a group.

> Body parameter

```json
{
  "CertificateExpiryInMilliseconds": "string"
}
```

<h3 id="updategroupcertificateconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CertificateExpiryInMilliseconds|body|string|false|The amount of time remaining before the certificate expires, in milliseconds.|

> Example responses

> 200 Response

```json
{
  "CertificateAuthorityExpiryInMilliseconds": {},
  "CertificateExpiryInMilliseconds": {},
  "GroupId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updategroupcertificateconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGroupCertificateConfigurationResponse](#schemaupdategroupcertificateconfigurationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGroupVersion

<a id="opIdGetGroupVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/groups/{GroupId}/versions/{GroupVersionId}`

Retrieves information about a group version.

<h3 id="getgroupversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|The ID of the Greengrass group.|
|GroupVersionId|path|string|true|The ID of the group version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListGroupVersions'' requests. If the version is the last one that was associated with a group, the value also maps to the ''LatestVersion'' property of the corresponding ''GroupInformation'' object.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "ConnectorDefinitionVersionArn": {},
    "CoreDefinitionVersionArn": {},
    "DeviceDefinitionVersionArn": {},
    "FunctionDefinitionVersionArn": {},
    "LoggerDefinitionVersionArn": {},
    "ResourceDefinitionVersionArn": {},
    "SubscriptionDefinitionVersionArn": {}
  },
  "Id": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="getgroupversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGroupVersionResponse](#schemagetgroupversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLoggerDefinitionVersion

<a id="opIdGetLoggerDefinitionVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/loggers/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}`

Retrieves information about a logger definition version.

<h3 id="getloggerdefinitionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoggerDefinitionId|path|string|true|The ID of the logger definition.|
|LoggerDefinitionVersionId|path|string|true|The ID of the logger definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListLoggerDefinitionVersions'' requests. If the version is the last one that was associated with a logger definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "Loggers": {}
  },
  "Id": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="getloggerdefinitionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLoggerDefinitionVersionResponse](#schemagetloggerdefinitionversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceDefinitionVersion

<a id="opIdGetResourceDefinitionVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/resources/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}`

Retrieves information about a resource definition version, including which resources are included in the version.

<h3 id="getresourcedefinitionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceDefinitionId|path|string|true|The ID of the resource definition.|
|ResourceDefinitionVersionId|path|string|true|The ID of the resource definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListResourceDefinitionVersions'' requests. If the version is the last one that was associated with a resource definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "Resources": {}
  },
  "Id": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="getresourcedefinitionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceDefinitionVersionResponse](#schemagetresourcedefinitionversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSubscriptionDefinitionVersion

<a id="opIdGetSubscriptionDefinitionVersion"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/definition/subscriptions/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}`

Retrieves information about a subscription definition version.

<h3 id="getsubscriptiondefinitionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|SubscriptionDefinitionId|path|string|true|The ID of the subscription definition.|
|SubscriptionDefinitionVersionId|path|string|true|The ID of the subscription definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListSubscriptionDefinitionVersions'' requests. If the version is the last one that was associated with a subscription definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "Subscriptions": {}
  },
  "Id": {},
  "NextToken": {},
  "Version": {}
}
```

> 480 Response

```json
null
```

<h3 id="getsubscriptiondefinitionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSubscriptionDefinitionVersionResponse](#schemagetsubscriptiondefinitionversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetThingRuntimeConfiguration

<a id="opIdGetThingRuntimeConfiguration"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/things/string/runtimeconfig \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/things/{ThingName}/runtimeconfig`

Get the runtime configuration of a thing.

<h3 id="getthingruntimeconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ThingName|path|string|true|The thing name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "RuntimeConfiguration": {
    "TelemetryConfiguration": {
      "ConfigurationSyncStatus": {},
      "Telemetry": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getthingruntimeconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetThingRuntimeConfigurationResponse](#schemagetthingruntimeconfigurationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateThingRuntimeConfiguration

<a id="opIdUpdateThingRuntimeConfiguration"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/things/string/runtimeconfig \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TelemetryConfiguration": {
      "Telemetry": {}
    }
  }'
```

`PUT /greengrass/things/{ThingName}/runtimeconfig`

Updates the runtime configuration of a thing.

> Body parameter

```json
{
  "TelemetryConfiguration": {
    "Telemetry": {}
  }
}
```

<h3 id="updatethingruntimeconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ThingName|path|string|true|The thing name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TelemetryConfiguration|body|object|false|Configuration settings for running telemetry.|
|» » Telemetry|body|object|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updatethingruntimeconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateThingRuntimeConfigurationResponse](#schemaupdatethingruntimeconfigurationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBulkDeploymentDetailedReports

<a id="opIdListBulkDeploymentDetailedReports"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/bulk/deployments/string/detailed-reports \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports`

Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.

<h3 id="listbulkdeploymentdetailedreports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|BulkDeploymentId|path|string|true|The ID of the bulk deployment.|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Deployments": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listbulkdeploymentdetailedreports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBulkDeploymentDetailedReportsResponse](#schemalistbulkdeploymentdetailedreportsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBulkDeployments

<a id="opIdListBulkDeployments"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/bulk/deployments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/bulk/deployments`

Returns a list of bulk deployments.

<h3 id="listbulkdeployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|The maximum number of results to be returned per request.|
|NextToken|query|string|false|The token for the next set of results, or ''null'' if there are no additional results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "BulkDeployments": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listbulkdeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBulkDeploymentsResponse](#schemalistbulkdeploymentsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartBulkDeployment

<a id="opIdStartBulkDeployment"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/greengrass/bulk/deployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ExecutionRoleArn": "string",
    "InputFileUri": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /greengrass/bulk/deployments`

Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.

> Body parameter

```json
{
  "ExecutionRoleArn": "string",
  "InputFileUri": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="startbulkdeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ExecutionRoleArn|body|string|true|The ARN of the execution role to associate with the bulk deployment operation. This IAM role must allow the ''greengrass:CreateDeployment'' action for all group versions that are listed in the input file. This IAM role must have access to the S3 bucket containing the input file.|
|» InputFileUri|body|string|true|The URI of the input file contained in the S3 bucket. The execution role must have ''getObject'' permissions on this bucket to access the input file. The input file is a JSON-serialized, line delimited file with UTF-8 encoding that provides a list of group and version IDs and the deployment type. This file must be less than 100 MB. Currently, AWS IoT Greengrass supports only ''NewDeployment'' deployment types.|
|» tags|body|object|false|The key-value pair for the resource tag.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "BulkDeploymentArn": {},
  "BulkDeploymentId": {}
}
```

> 480 Response

```json
null
```

<h3 id="startbulkdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartBulkDeploymentResponse](#schemastartbulkdeploymentresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resource-arn}`

Retrieves a list of resource tags for a resource arn.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://greengrass.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{resource-arn}`

Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|false|The key-value pair for the resource tag.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 480 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResetDeployments

<a id="opIdResetDeployments"></a>

> Code samples

```bash
curl 'https://greengrass.us-east-1.amazonaws.com/greengrass/groups/string/deployments/$reset' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Force": true
  }'
```

`POST /greengrass/groups/{GroupId}/deployments/$reset`

Resets a group's deployments.

> Body parameter

```json
{
  "Force": true
}
```

<h3 id="resetdeployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|A client token used to correlate requests and responses.|
|GroupId|path|string|true|The ID of the Greengrass group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Force|body|boolean|false|If true, performs a best-effort only core reset.|

> Example responses

> 200 Response

```json
{
  "DeploymentArn": {},
  "DeploymentId": {}
}
```

> 480 Response

```json
null
```

<h3 id="resetdeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResetDeploymentsResponse](#schemaresetdeploymentsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopBulkDeployment

<a id="opIdStopBulkDeployment"></a>

> Code samples

```bash
curl 'https://greengrass.us-east-1.amazonaws.com/greengrass/bulk/deployments/string/$stop' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /greengrass/bulk/deployments/{BulkDeploymentId}/$stop`

Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.

<h3 id="stopbulkdeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|BulkDeploymentId|path|string|true|The ID of the bulk deployment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="stopbulkdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopBulkDeploymentResponse](#schemastopbulkdeploymentresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://greengrass.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resource-arn}#tagKeys`

Remove resource tags from a Greengrass Resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|tagKeys|query|[[__string](#schema__string)]|true|An array of tag keys to delete|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateRoleToGroupResponse">AssociateRoleToGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateroletogroupresponse"></a>
<a id="schema_AssociateRoleToGroupResponse"></a>
<a id="tocSassociateroletogroupresponse"></a>
<a id="tocsassociateroletogroupresponse"></a>

```json
{
  "AssociatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociatedAt|object|false|none|none|

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_InternalServerErrorException">InternalServerErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererrorexception"></a>
<a id="schema_InternalServerErrorException"></a>
<a id="tocSinternalservererrorexception"></a>
<a id="tocsinternalservererrorexception"></a>

```json
null
```

<h2 id="tocS_AssociateServiceRoleToAccountResponse">AssociateServiceRoleToAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateserviceroletoaccountresponse"></a>
<a id="schema_AssociateServiceRoleToAccountResponse"></a>
<a id="tocSassociateserviceroletoaccountresponse"></a>
<a id="tocsassociateserviceroletoaccountresponse"></a>

```json
{
  "AssociatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociatedAt|object|false|none|none|

<h2 id="tocS_CreateConnectorDefinitionResponse">CreateConnectorDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectordefinitionresponse"></a>
<a id="schema_CreateConnectorDefinitionResponse"></a>
<a id="tocScreateconnectordefinitionresponse"></a>
<a id="tocscreateconnectordefinitionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS___listOfConnector">__listOfConnector</h2>
<!-- backwards compatibility -->
<a id="schema__listofconnector"></a>
<a id="schema___listOfConnector"></a>
<a id="tocS__listofconnector"></a>
<a id="tocs__listofconnector"></a>

```json
[
  {
    "ConnectorArn": {},
    "Id": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
```

<h2 id="tocS_CreateConnectorDefinitionVersionResponse">CreateConnectorDefinitionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectordefinitionversionresponse"></a>
<a id="schema_CreateConnectorDefinitionVersionResponse"></a>
<a id="tocScreateconnectordefinitionversionresponse"></a>
<a id="tocscreateconnectordefinitionversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_Connector">Connector</h2>
<!-- backwards compatibility -->
<a id="schemaconnector"></a>
<a id="schema_Connector"></a>
<a id="tocSconnector"></a>
<a id="tocsconnector"></a>

```json
{
  "ConnectorArn": {},
  "Id": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorArn|object|true|none|none|
|Id|object|true|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_CreateCoreDefinitionResponse">CreateCoreDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecoredefinitionresponse"></a>
<a id="schema_CreateCoreDefinitionResponse"></a>
<a id="tocScreatecoredefinitionresponse"></a>
<a id="tocscreatecoredefinitionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS___listOfCore">__listOfCore</h2>
<!-- backwards compatibility -->
<a id="schema__listofcore"></a>
<a id="schema___listOfCore"></a>
<a id="tocS__listofcore"></a>
<a id="tocs__listofcore"></a>

```json
[
  {
    "CertificateArn": {},
    "Id": {},
    "SyncShadow": {},
    "ThingArn": {}
  }
]
```

<h2 id="tocS_CreateCoreDefinitionVersionResponse">CreateCoreDefinitionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecoredefinitionversionresponse"></a>
<a id="schema_CreateCoreDefinitionVersionResponse"></a>
<a id="tocScreatecoredefinitionversionresponse"></a>
<a id="tocscreatecoredefinitionversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_Core">Core</h2>
<!-- backwards compatibility -->
<a id="schemacore"></a>
<a id="schema_Core"></a>
<a id="tocScore"></a>
<a id="tocscore"></a>

```json
{
  "CertificateArn": {},
  "Id": {},
  "SyncShadow": {},
  "ThingArn": {}
}
```

Information about a core.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|true|none|none|
|Id|object|true|none|none|
|SyncShadow|object|false|none|none|
|ThingArn|object|true|none|none|

<h2 id="tocS_CreateDeploymentResponse">CreateDeploymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentresponse"></a>
<a id="schema_CreateDeploymentResponse"></a>
<a id="tocScreatedeploymentresponse"></a>
<a id="tocscreatedeploymentresponse"></a>

```json
{
  "DeploymentArn": {},
  "DeploymentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeploymentArn|object|false|none|none|
|DeploymentId|object|false|none|none|

<h2 id="tocS_CreateDeviceDefinitionResponse">CreateDeviceDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedevicedefinitionresponse"></a>
<a id="schema_CreateDeviceDefinitionResponse"></a>
<a id="tocScreatedevicedefinitionresponse"></a>
<a id="tocscreatedevicedefinitionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS___listOfDevice">__listOfDevice</h2>
<!-- backwards compatibility -->
<a id="schema__listofdevice"></a>
<a id="schema___listOfDevice"></a>
<a id="tocS__listofdevice"></a>
<a id="tocs__listofdevice"></a>

```json
[
  {
    "CertificateArn": {},
    "Id": {},
    "SyncShadow": {},
    "ThingArn": {}
  }
]
```

<h2 id="tocS_CreateDeviceDefinitionVersionResponse">CreateDeviceDefinitionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedevicedefinitionversionresponse"></a>
<a id="schema_CreateDeviceDefinitionVersionResponse"></a>
<a id="tocScreatedevicedefinitionversionresponse"></a>
<a id="tocscreatedevicedefinitionversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "CertificateArn": {},
  "Id": {},
  "SyncShadow": {},
  "ThingArn": {}
}
```

Information about a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|true|none|none|
|Id|object|true|none|none|
|SyncShadow|object|false|none|none|
|ThingArn|object|true|none|none|

<h2 id="tocS_CreateFunctionDefinitionResponse">CreateFunctionDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefunctiondefinitionresponse"></a>
<a id="schema_CreateFunctionDefinitionResponse"></a>
<a id="tocScreatefunctiondefinitionresponse"></a>
<a id="tocscreatefunctiondefinitionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_FunctionDefaultConfig">FunctionDefaultConfig</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondefaultconfig"></a>
<a id="schema_FunctionDefaultConfig"></a>
<a id="tocSfunctiondefaultconfig"></a>
<a id="tocsfunctiondefaultconfig"></a>

```json
{
  "Execution": {
    "IsolationMode": "GreengrassContainer",
    "RunAs": {
      "Gid": {},
      "Uid": {}
    }
  }
}
```

The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Execution|[FunctionDefaultExecutionConfig](#schemafunctiondefaultexecutionconfig)|false|none|Configuration information that specifies how a Lambda function runs. |

<h2 id="tocS___listOfFunction">__listOfFunction</h2>
<!-- backwards compatibility -->
<a id="schema__listoffunction"></a>
<a id="schema___listOfFunction"></a>
<a id="tocS__listoffunction"></a>
<a id="tocs__listoffunction"></a>

```json
[
  {
    "FunctionArn": {},
    "FunctionConfiguration": {
      "EncodingType": {},
      "Environment": {
        "AccessSysfs": {},
        "Execution": {
          "IsolationMode": "GreengrassContainer",
          "RunAs": {
            "Gid": {},
            "Uid": {}
          }
        },
        "ResourceAccessPolicies": {},
        "Variables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "ExecArgs": {},
      "Executable": {},
      "MemorySize": {},
      "Pinned": {},
      "Timeout": {},
      "FunctionRuntimeOverride": {}
    },
    "Id": {}
  }
]
```

<h2 id="tocS_CreateFunctionDefinitionVersionResponse">CreateFunctionDefinitionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefunctiondefinitionversionresponse"></a>
<a id="schema_CreateFunctionDefinitionVersionResponse"></a>
<a id="tocScreatefunctiondefinitionversionresponse"></a>
<a id="tocscreatefunctiondefinitionversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_FunctionDefaultExecutionConfig">FunctionDefaultExecutionConfig</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondefaultexecutionconfig"></a>
<a id="schema_FunctionDefaultExecutionConfig"></a>
<a id="tocSfunctiondefaultexecutionconfig"></a>
<a id="tocsfunctiondefaultexecutionconfig"></a>

```json
{
  "IsolationMode": "GreengrassContainer",
  "RunAs": {
    "Gid": {},
    "Uid": {}
  }
}
```

Configuration information that specifies how a Lambda function runs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsolationMode|[FunctionIsolationMode](#schemafunctionisolationmode)|false|none|Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.|
|RunAs|[FunctionRunAsConfig](#schemafunctionrunasconfig)|false|none|Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.|

#### Enumerated Values

|Property|Value|
|---|---|
|IsolationMode|GreengrassContainer|
|IsolationMode|NoContainer|

<h2 id="tocS_Function">Function</h2>
<!-- backwards compatibility -->
<a id="schemafunction"></a>
<a id="schema_Function"></a>
<a id="tocSfunction"></a>
<a id="tocsfunction"></a>

```json
{
  "FunctionArn": {},
  "FunctionConfiguration": {
    "EncodingType": {},
    "Environment": {
      "AccessSysfs": {},
      "Execution": {
        "IsolationMode": "GreengrassContainer",
        "RunAs": {
          "Gid": {},
          "Uid": {}
        }
      },
      "ResourceAccessPolicies": {},
      "Variables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "ExecArgs": {},
    "Executable": {},
    "MemorySize": {},
    "Pinned": {},
    "Timeout": {},
    "FunctionRuntimeOverride": {}
  },
  "Id": {}
}
```

Information about a Lambda function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionArn|object|false|none|none|
|FunctionConfiguration|object|false|none|none|
|Id|object|true|none|none|

<h2 id="tocS_CreateGroupResponse">CreateGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupresponse"></a>
<a id="schema_CreateGroupResponse"></a>
<a id="tocScreategroupresponse"></a>
<a id="tocscreategroupresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_CreateGroupCertificateAuthorityResponse">CreateGroupCertificateAuthorityResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupcertificateauthorityresponse"></a>
<a id="schema_CreateGroupCertificateAuthorityResponse"></a>
<a id="tocScreategroupcertificateauthorityresponse"></a>
<a id="tocscreategroupcertificateauthorityresponse"></a>

```json
{
  "GroupCertificateAuthorityArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupCertificateAuthorityArn|object|false|none|none|

<h2 id="tocS_CreateGroupVersionResponse">CreateGroupVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupversionresponse"></a>
<a id="schema_CreateGroupVersionResponse"></a>
<a id="tocScreategroupversionresponse"></a>
<a id="tocscreategroupversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_CreateLoggerDefinitionResponse">CreateLoggerDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateloggerdefinitionresponse"></a>
<a id="schema_CreateLoggerDefinitionResponse"></a>
<a id="tocScreateloggerdefinitionresponse"></a>
<a id="tocscreateloggerdefinitionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS___listOfLogger">__listOfLogger</h2>
<!-- backwards compatibility -->
<a id="schema__listoflogger"></a>
<a id="schema___listOfLogger"></a>
<a id="tocS__listoflogger"></a>
<a id="tocs__listoflogger"></a>

```json
[
  {
    "Component": {},
    "Id": {},
    "Level": {},
    "Space": {},
    "Type": {}
  }
]
```

<h2 id="tocS_CreateLoggerDefinitionVersionResponse">CreateLoggerDefinitionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateloggerdefinitionversionresponse"></a>
<a id="schema_CreateLoggerDefinitionVersionResponse"></a>
<a id="tocScreateloggerdefinitionversionresponse"></a>
<a id="tocscreateloggerdefinitionversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_Logger">Logger</h2>
<!-- backwards compatibility -->
<a id="schemalogger"></a>
<a id="schema_Logger"></a>
<a id="tocSlogger"></a>
<a id="tocslogger"></a>

```json
{
  "Component": {},
  "Id": {},
  "Level": {},
  "Space": {},
  "Type": {}
}
```

Information about a logger

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Component|object|true|none|none|
|Id|object|true|none|none|
|Level|object|true|none|none|
|Space|object|false|none|none|
|Type|object|true|none|none|

<h2 id="tocS_CreateResourceDefinitionResponse">CreateResourceDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateresourcedefinitionresponse"></a>
<a id="schema_CreateResourceDefinitionResponse"></a>
<a id="tocScreateresourcedefinitionresponse"></a>
<a id="tocscreateresourcedefinitionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS___listOfResource">__listOfResource</h2>
<!-- backwards compatibility -->
<a id="schema__listofresource"></a>
<a id="schema___listOfResource"></a>
<a id="tocS__listofresource"></a>
<a id="tocs__listofresource"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "ResourceDataContainer": {
      "LocalDeviceResourceData": {
        "GroupOwnerSetting": {
          "AutoAddGroupOwner": {},
          "GroupOwner": {}
        },
        "SourcePath": {}
      },
      "LocalVolumeResourceData": {
        "DestinationPath": {},
        "GroupOwnerSetting": {
          "AutoAddGroupOwner": {},
          "GroupOwner": {}
        },
        "SourcePath": {}
      },
      "S3MachineLearningModelResourceData": {
        "DestinationPath": {},
        "OwnerSetting": {
          "GroupOwner": {},
          "GroupPermission": {}
        },
        "S3Uri": {}
      },
      "SageMakerMachineLearningModelResourceData": {
        "DestinationPath": {},
        "OwnerSetting": {
          "GroupOwner": {},
          "GroupPermission": {}
        },
        "SageMakerJobArn": {}
      },
      "SecretsManagerSecretResourceData": {
        "ARN": {},
        "AdditionalStagingLabelsToDownload": {}
      }
    }
  }
]
```

<h2 id="tocS_CreateResourceDefinitionVersionResponse">CreateResourceDefinitionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateresourcedefinitionversionresponse"></a>
<a id="schema_CreateResourceDefinitionVersionResponse"></a>
<a id="tocScreateresourcedefinitionversionresponse"></a>
<a id="tocscreateresourcedefinitionversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "Id": {},
  "Name": {},
  "ResourceDataContainer": {
    "LocalDeviceResourceData": {
      "GroupOwnerSetting": {
        "AutoAddGroupOwner": {},
        "GroupOwner": {}
      },
      "SourcePath": {}
    },
    "LocalVolumeResourceData": {
      "DestinationPath": {},
      "GroupOwnerSetting": {
        "AutoAddGroupOwner": {},
        "GroupOwner": {}
      },
      "SourcePath": {}
    },
    "S3MachineLearningModelResourceData": {
      "DestinationPath": {},
      "OwnerSetting": {
        "GroupOwner": {},
        "GroupPermission": {}
      },
      "S3Uri": {}
    },
    "SageMakerMachineLearningModelResourceData": {
      "DestinationPath": {},
      "OwnerSetting": {
        "GroupOwner": {},
        "GroupPermission": {}
      },
      "SageMakerJobArn": {}
    },
    "SecretsManagerSecretResourceData": {
      "ARN": {},
      "AdditionalStagingLabelsToDownload": {}
    }
  }
}
```

Information about a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Name|object|true|none|none|
|ResourceDataContainer|object|true|none|none|

<h2 id="tocS_CreateSoftwareUpdateJobResponse">CreateSoftwareUpdateJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesoftwareupdatejobresponse"></a>
<a id="schema_CreateSoftwareUpdateJobResponse"></a>
<a id="tocScreatesoftwareupdatejobresponse"></a>
<a id="tocscreatesoftwareupdatejobresponse"></a>

```json
{
  "IotJobArn": {},
  "IotJobId": {},
  "PlatformSoftwareVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IotJobArn|object|false|none|none|
|IotJobId|object|false|none|none|
|PlatformSoftwareVersion|object|false|none|none|

<h2 id="tocS_CreateSubscriptionDefinitionResponse">CreateSubscriptionDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesubscriptiondefinitionresponse"></a>
<a id="schema_CreateSubscriptionDefinitionResponse"></a>
<a id="tocScreatesubscriptiondefinitionresponse"></a>
<a id="tocscreatesubscriptiondefinitionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS___listOfSubscription">__listOfSubscription</h2>
<!-- backwards compatibility -->
<a id="schema__listofsubscription"></a>
<a id="schema___listOfSubscription"></a>
<a id="tocS__listofsubscription"></a>
<a id="tocs__listofsubscription"></a>

```json
[
  {
    "Id": {},
    "Source": {},
    "Subject": {},
    "Target": {}
  }
]
```

<h2 id="tocS_CreateSubscriptionDefinitionVersionResponse">CreateSubscriptionDefinitionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesubscriptiondefinitionversionresponse"></a>
<a id="schema_CreateSubscriptionDefinitionVersionResponse"></a>
<a id="tocScreatesubscriptiondefinitionversionresponse"></a>
<a id="tocscreatesubscriptiondefinitionversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "Id": {},
  "Source": {},
  "Subject": {},
  "Target": {}
}
```

Information about a subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Source|object|true|none|none|
|Subject|object|true|none|none|
|Target|object|true|none|none|

<h2 id="tocS_DeleteConnectorDefinitionResponse">DeleteConnectorDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectordefinitionresponse"></a>
<a id="schema_DeleteConnectorDefinitionResponse"></a>
<a id="tocSdeleteconnectordefinitionresponse"></a>
<a id="tocsdeleteconnectordefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteCoreDefinitionResponse">DeleteCoreDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecoredefinitionresponse"></a>
<a id="schema_DeleteCoreDefinitionResponse"></a>
<a id="tocSdeletecoredefinitionresponse"></a>
<a id="tocsdeletecoredefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteDeviceDefinitionResponse">DeleteDeviceDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedevicedefinitionresponse"></a>
<a id="schema_DeleteDeviceDefinitionResponse"></a>
<a id="tocSdeletedevicedefinitionresponse"></a>
<a id="tocsdeletedevicedefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteFunctionDefinitionResponse">DeleteFunctionDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefunctiondefinitionresponse"></a>
<a id="schema_DeleteFunctionDefinitionResponse"></a>
<a id="tocSdeletefunctiondefinitionresponse"></a>
<a id="tocsdeletefunctiondefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteGroupResponse">DeleteGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletegroupresponse"></a>
<a id="schema_DeleteGroupResponse"></a>
<a id="tocSdeletegroupresponse"></a>
<a id="tocsdeletegroupresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteLoggerDefinitionResponse">DeleteLoggerDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloggerdefinitionresponse"></a>
<a id="schema_DeleteLoggerDefinitionResponse"></a>
<a id="tocSdeleteloggerdefinitionresponse"></a>
<a id="tocsdeleteloggerdefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteResourceDefinitionResponse">DeleteResourceDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcedefinitionresponse"></a>
<a id="schema_DeleteResourceDefinitionResponse"></a>
<a id="tocSdeleteresourcedefinitionresponse"></a>
<a id="tocsdeleteresourcedefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteSubscriptionDefinitionResponse">DeleteSubscriptionDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesubscriptiondefinitionresponse"></a>
<a id="schema_DeleteSubscriptionDefinitionResponse"></a>
<a id="tocSdeletesubscriptiondefinitionresponse"></a>
<a id="tocsdeletesubscriptiondefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateRoleFromGroupResponse">DisassociateRoleFromGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociaterolefromgroupresponse"></a>
<a id="schema_DisassociateRoleFromGroupResponse"></a>
<a id="tocSdisassociaterolefromgroupresponse"></a>
<a id="tocsdisassociaterolefromgroupresponse"></a>

```json
{
  "DisassociatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisassociatedAt|object|false|none|none|

<h2 id="tocS_DisassociateServiceRoleFromAccountResponse">DisassociateServiceRoleFromAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateservicerolefromaccountresponse"></a>
<a id="schema_DisassociateServiceRoleFromAccountResponse"></a>
<a id="tocSdisassociateservicerolefromaccountresponse"></a>
<a id="tocsdisassociateservicerolefromaccountresponse"></a>

```json
{
  "DisassociatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisassociatedAt|object|false|none|none|

<h2 id="tocS_GetAssociatedRoleResponse">GetAssociatedRoleResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetassociatedroleresponse"></a>
<a id="schema_GetAssociatedRoleResponse"></a>
<a id="tocSgetassociatedroleresponse"></a>
<a id="tocsgetassociatedroleresponse"></a>

```json
{
  "AssociatedAt": {},
  "RoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociatedAt|object|false|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_GetBulkDeploymentStatusResponse">GetBulkDeploymentStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbulkdeploymentstatusresponse"></a>
<a id="schema_GetBulkDeploymentStatusResponse"></a>
<a id="tocSgetbulkdeploymentstatusresponse"></a>
<a id="tocsgetbulkdeploymentstatusresponse"></a>

```json
{
  "BulkDeploymentMetrics": {
    "InvalidInputRecords": {},
    "RecordsProcessed": {},
    "RetryAttempts": {}
  },
  "BulkDeploymentStatus": {},
  "CreatedAt": {},
  "ErrorDetails": {},
  "ErrorMessage": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BulkDeploymentMetrics|object|false|none|none|
|BulkDeploymentStatus|object|false|none|none|
|CreatedAt|object|false|none|none|
|ErrorDetails|object|false|none|none|
|ErrorMessage|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetConnectivityInfoResponse">GetConnectivityInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectivityinforesponse"></a>
<a id="schema_GetConnectivityInfoResponse"></a>
<a id="tocSgetconnectivityinforesponse"></a>
<a id="tocsgetconnectivityinforesponse"></a>

```json
{
  "ConnectivityInfo": {},
  "Message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectivityInfo|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_GetConnectorDefinitionResponse">GetConnectorDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectordefinitionresponse"></a>
<a id="schema_GetConnectorDefinitionResponse"></a>
<a id="tocSgetconnectordefinitionresponse"></a>
<a id="tocsgetconnectordefinitionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetConnectorDefinitionVersionResponse">GetConnectorDefinitionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectordefinitionversionresponse"></a>
<a id="schema_GetConnectorDefinitionVersionResponse"></a>
<a id="tocSgetconnectordefinitionversionresponse"></a>
<a id="tocsgetconnectordefinitionversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "Connectors": {}
  },
  "Id": {},
  "NextToken": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Definition|object|false|none|none|
|Id|object|false|none|none|
|NextToken|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_GetCoreDefinitionResponse">GetCoreDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcoredefinitionresponse"></a>
<a id="schema_GetCoreDefinitionResponse"></a>
<a id="tocSgetcoredefinitionresponse"></a>
<a id="tocsgetcoredefinitionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetCoreDefinitionVersionResponse">GetCoreDefinitionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcoredefinitionversionresponse"></a>
<a id="schema_GetCoreDefinitionVersionResponse"></a>
<a id="tocSgetcoredefinitionversionresponse"></a>
<a id="tocsgetcoredefinitionversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "Cores": {}
  },
  "Id": {},
  "NextToken": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Definition|object|false|none|none|
|Id|object|false|none|none|
|NextToken|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_GetDeploymentStatusResponse">GetDeploymentStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentstatusresponse"></a>
<a id="schema_GetDeploymentStatusResponse"></a>
<a id="tocSgetdeploymentstatusresponse"></a>
<a id="tocsgetdeploymentstatusresponse"></a>

```json
{
  "DeploymentStatus": {},
  "DeploymentType": {},
  "ErrorDetails": {},
  "ErrorMessage": {},
  "UpdatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeploymentStatus|object|false|none|none|
|DeploymentType|object|false|none|none|
|ErrorDetails|object|false|none|none|
|ErrorMessage|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_GetDeviceDefinitionResponse">GetDeviceDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicedefinitionresponse"></a>
<a id="schema_GetDeviceDefinitionResponse"></a>
<a id="tocSgetdevicedefinitionresponse"></a>
<a id="tocsgetdevicedefinitionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetDeviceDefinitionVersionResponse">GetDeviceDefinitionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicedefinitionversionresponse"></a>
<a id="schema_GetDeviceDefinitionVersionResponse"></a>
<a id="tocSgetdevicedefinitionversionresponse"></a>
<a id="tocsgetdevicedefinitionversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "Devices": {}
  },
  "Id": {},
  "NextToken": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Definition|object|false|none|none|
|Id|object|false|none|none|
|NextToken|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_GetFunctionDefinitionResponse">GetFunctionDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctiondefinitionresponse"></a>
<a id="schema_GetFunctionDefinitionResponse"></a>
<a id="tocSgetfunctiondefinitionresponse"></a>
<a id="tocsgetfunctiondefinitionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetFunctionDefinitionVersionResponse">GetFunctionDefinitionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctiondefinitionversionresponse"></a>
<a id="schema_GetFunctionDefinitionVersionResponse"></a>
<a id="tocSgetfunctiondefinitionversionresponse"></a>
<a id="tocsgetfunctiondefinitionversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "DefaultConfig": {
      "Execution": {
        "IsolationMode": "GreengrassContainer",
        "RunAs": {
          "Gid": {},
          "Uid": {}
        }
      }
    },
    "Functions": {}
  },
  "Id": {},
  "NextToken": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Definition|object|false|none|none|
|Id|object|false|none|none|
|NextToken|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_GetGroupResponse">GetGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupresponse"></a>
<a id="schema_GetGroupResponse"></a>
<a id="tocSgetgroupresponse"></a>
<a id="tocsgetgroupresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetGroupCertificateAuthorityResponse">GetGroupCertificateAuthorityResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupcertificateauthorityresponse"></a>
<a id="schema_GetGroupCertificateAuthorityResponse"></a>
<a id="tocSgetgroupcertificateauthorityresponse"></a>
<a id="tocsgetgroupcertificateauthorityresponse"></a>

```json
{
  "GroupCertificateAuthorityArn": {},
  "GroupCertificateAuthorityId": {},
  "PemEncodedCertificate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupCertificateAuthorityArn|object|false|none|none|
|GroupCertificateAuthorityId|object|false|none|none|
|PemEncodedCertificate|object|false|none|none|

<h2 id="tocS_GetGroupCertificateConfigurationResponse">GetGroupCertificateConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupcertificateconfigurationresponse"></a>
<a id="schema_GetGroupCertificateConfigurationResponse"></a>
<a id="tocSgetgroupcertificateconfigurationresponse"></a>
<a id="tocsgetgroupcertificateconfigurationresponse"></a>

```json
{
  "CertificateAuthorityExpiryInMilliseconds": {},
  "CertificateExpiryInMilliseconds": {},
  "GroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityExpiryInMilliseconds|object|false|none|none|
|CertificateExpiryInMilliseconds|object|false|none|none|
|GroupId|object|false|none|none|

<h2 id="tocS_GetGroupVersionResponse">GetGroupVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupversionresponse"></a>
<a id="schema_GetGroupVersionResponse"></a>
<a id="tocSgetgroupversionresponse"></a>
<a id="tocsgetgroupversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "ConnectorDefinitionVersionArn": {},
    "CoreDefinitionVersionArn": {},
    "DeviceDefinitionVersionArn": {},
    "FunctionDefinitionVersionArn": {},
    "LoggerDefinitionVersionArn": {},
    "ResourceDefinitionVersionArn": {},
    "SubscriptionDefinitionVersionArn": {}
  },
  "Id": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Definition|object|false|none|none|
|Id|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_GetLoggerDefinitionResponse">GetLoggerDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetloggerdefinitionresponse"></a>
<a id="schema_GetLoggerDefinitionResponse"></a>
<a id="tocSgetloggerdefinitionresponse"></a>
<a id="tocsgetloggerdefinitionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetLoggerDefinitionVersionResponse">GetLoggerDefinitionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetloggerdefinitionversionresponse"></a>
<a id="schema_GetLoggerDefinitionVersionResponse"></a>
<a id="tocSgetloggerdefinitionversionresponse"></a>
<a id="tocsgetloggerdefinitionversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "Loggers": {}
  },
  "Id": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Definition|object|false|none|none|
|Id|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_GetResourceDefinitionResponse">GetResourceDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcedefinitionresponse"></a>
<a id="schema_GetResourceDefinitionResponse"></a>
<a id="tocSgetresourcedefinitionresponse"></a>
<a id="tocsgetresourcedefinitionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetResourceDefinitionVersionResponse">GetResourceDefinitionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcedefinitionversionresponse"></a>
<a id="schema_GetResourceDefinitionVersionResponse"></a>
<a id="tocSgetresourcedefinitionversionresponse"></a>
<a id="tocsgetresourcedefinitionversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "Resources": {}
  },
  "Id": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Definition|object|false|none|none|
|Id|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_GetServiceRoleForAccountResponse">GetServiceRoleForAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceroleforaccountresponse"></a>
<a id="schema_GetServiceRoleForAccountResponse"></a>
<a id="tocSgetserviceroleforaccountresponse"></a>
<a id="tocsgetserviceroleforaccountresponse"></a>

```json
{
  "AssociatedAt": {},
  "RoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociatedAt|object|false|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_GetSubscriptionDefinitionResponse">GetSubscriptionDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsubscriptiondefinitionresponse"></a>
<a id="schema_GetSubscriptionDefinitionResponse"></a>
<a id="tocSgetsubscriptiondefinitionresponse"></a>
<a id="tocsgetsubscriptiondefinitionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetSubscriptionDefinitionVersionResponse">GetSubscriptionDefinitionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsubscriptiondefinitionversionresponse"></a>
<a id="schema_GetSubscriptionDefinitionVersionResponse"></a>
<a id="tocSgetsubscriptiondefinitionversionresponse"></a>
<a id="tocsgetsubscriptiondefinitionversionresponse"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Definition": {
    "Subscriptions": {}
  },
  "Id": {},
  "NextToken": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Definition|object|false|none|none|
|Id|object|false|none|none|
|NextToken|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_GetThingRuntimeConfigurationResponse">GetThingRuntimeConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetthingruntimeconfigurationresponse"></a>
<a id="schema_GetThingRuntimeConfigurationResponse"></a>
<a id="tocSgetthingruntimeconfigurationresponse"></a>
<a id="tocsgetthingruntimeconfigurationresponse"></a>

```json
{
  "RuntimeConfiguration": {
    "TelemetryConfiguration": {
      "ConfigurationSyncStatus": {},
      "Telemetry": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuntimeConfiguration|object|false|none|none|

<h2 id="tocS_ListBulkDeploymentDetailedReportsResponse">ListBulkDeploymentDetailedReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbulkdeploymentdetailedreportsresponse"></a>
<a id="schema_ListBulkDeploymentDetailedReportsResponse"></a>
<a id="tocSlistbulkdeploymentdetailedreportsresponse"></a>
<a id="tocslistbulkdeploymentdetailedreportsresponse"></a>

```json
{
  "Deployments": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Deployments|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListBulkDeploymentsResponse">ListBulkDeploymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbulkdeploymentsresponse"></a>
<a id="schema_ListBulkDeploymentsResponse"></a>
<a id="tocSlistbulkdeploymentsresponse"></a>
<a id="tocslistbulkdeploymentsresponse"></a>

```json
{
  "BulkDeployments": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BulkDeployments|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListConnectorDefinitionVersionsResponse">ListConnectorDefinitionVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectordefinitionversionsresponse"></a>
<a id="schema_ListConnectorDefinitionVersionsResponse"></a>
<a id="tocSlistconnectordefinitionversionsresponse"></a>
<a id="tocslistconnectordefinitionversionsresponse"></a>

```json
{
  "NextToken": {},
  "Versions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Versions|object|false|none|none|

<h2 id="tocS_ListConnectorDefinitionsResponse">ListConnectorDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectordefinitionsresponse"></a>
<a id="schema_ListConnectorDefinitionsResponse"></a>
<a id="tocSlistconnectordefinitionsresponse"></a>
<a id="tocslistconnectordefinitionsresponse"></a>

```json
{
  "Definitions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Definitions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCoreDefinitionVersionsResponse">ListCoreDefinitionVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcoredefinitionversionsresponse"></a>
<a id="schema_ListCoreDefinitionVersionsResponse"></a>
<a id="tocSlistcoredefinitionversionsresponse"></a>
<a id="tocslistcoredefinitionversionsresponse"></a>

```json
{
  "NextToken": {},
  "Versions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Versions|object|false|none|none|

<h2 id="tocS_ListCoreDefinitionsResponse">ListCoreDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcoredefinitionsresponse"></a>
<a id="schema_ListCoreDefinitionsResponse"></a>
<a id="tocSlistcoredefinitionsresponse"></a>
<a id="tocslistcoredefinitionsresponse"></a>

```json
{
  "Definitions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Definitions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDeploymentsResponse">ListDeploymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentsresponse"></a>
<a id="schema_ListDeploymentsResponse"></a>
<a id="tocSlistdeploymentsresponse"></a>
<a id="tocslistdeploymentsresponse"></a>

```json
{
  "Deployments": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Deployments|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDeviceDefinitionVersionsResponse">ListDeviceDefinitionVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicedefinitionversionsresponse"></a>
<a id="schema_ListDeviceDefinitionVersionsResponse"></a>
<a id="tocSlistdevicedefinitionversionsresponse"></a>
<a id="tocslistdevicedefinitionversionsresponse"></a>

```json
{
  "NextToken": {},
  "Versions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Versions|object|false|none|none|

<h2 id="tocS_ListDeviceDefinitionsResponse">ListDeviceDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicedefinitionsresponse"></a>
<a id="schema_ListDeviceDefinitionsResponse"></a>
<a id="tocSlistdevicedefinitionsresponse"></a>
<a id="tocslistdevicedefinitionsresponse"></a>

```json
{
  "Definitions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Definitions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFunctionDefinitionVersionsResponse">ListFunctionDefinitionVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctiondefinitionversionsresponse"></a>
<a id="schema_ListFunctionDefinitionVersionsResponse"></a>
<a id="tocSlistfunctiondefinitionversionsresponse"></a>
<a id="tocslistfunctiondefinitionversionsresponse"></a>

```json
{
  "NextToken": {},
  "Versions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Versions|object|false|none|none|

<h2 id="tocS_ListFunctionDefinitionsResponse">ListFunctionDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctiondefinitionsresponse"></a>
<a id="schema_ListFunctionDefinitionsResponse"></a>
<a id="tocSlistfunctiondefinitionsresponse"></a>
<a id="tocslistfunctiondefinitionsresponse"></a>

```json
{
  "Definitions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Definitions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGroupCertificateAuthoritiesResponse">ListGroupCertificateAuthoritiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupcertificateauthoritiesresponse"></a>
<a id="schema_ListGroupCertificateAuthoritiesResponse"></a>
<a id="tocSlistgroupcertificateauthoritiesresponse"></a>
<a id="tocslistgroupcertificateauthoritiesresponse"></a>

```json
{
  "GroupCertificateAuthorities": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupCertificateAuthorities|object|false|none|none|

<h2 id="tocS_ListGroupVersionsResponse">ListGroupVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupversionsresponse"></a>
<a id="schema_ListGroupVersionsResponse"></a>
<a id="tocSlistgroupversionsresponse"></a>
<a id="tocslistgroupversionsresponse"></a>

```json
{
  "NextToken": {},
  "Versions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Versions|object|false|none|none|

<h2 id="tocS_ListGroupsResponse">ListGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsresponse"></a>
<a id="schema_ListGroupsResponse"></a>
<a id="tocSlistgroupsresponse"></a>
<a id="tocslistgroupsresponse"></a>

```json
{
  "Groups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Groups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLoggerDefinitionVersionsResponse">ListLoggerDefinitionVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistloggerdefinitionversionsresponse"></a>
<a id="schema_ListLoggerDefinitionVersionsResponse"></a>
<a id="tocSlistloggerdefinitionversionsresponse"></a>
<a id="tocslistloggerdefinitionversionsresponse"></a>

```json
{
  "NextToken": {},
  "Versions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Versions|object|false|none|none|

<h2 id="tocS_ListLoggerDefinitionsResponse">ListLoggerDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistloggerdefinitionsresponse"></a>
<a id="schema_ListLoggerDefinitionsResponse"></a>
<a id="tocSlistloggerdefinitionsresponse"></a>
<a id="tocslistloggerdefinitionsresponse"></a>

```json
{
  "Definitions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Definitions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourceDefinitionVersionsResponse">ListResourceDefinitionVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcedefinitionversionsresponse"></a>
<a id="schema_ListResourceDefinitionVersionsResponse"></a>
<a id="tocSlistresourcedefinitionversionsresponse"></a>
<a id="tocslistresourcedefinitionversionsresponse"></a>

```json
{
  "NextToken": {},
  "Versions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Versions|object|false|none|none|

<h2 id="tocS_ListResourceDefinitionsResponse">ListResourceDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcedefinitionsresponse"></a>
<a id="schema_ListResourceDefinitionsResponse"></a>
<a id="tocSlistresourcedefinitionsresponse"></a>
<a id="tocslistresourcedefinitionsresponse"></a>

```json
{
  "Definitions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Definitions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSubscriptionDefinitionVersionsResponse">ListSubscriptionDefinitionVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscriptiondefinitionversionsresponse"></a>
<a id="schema_ListSubscriptionDefinitionVersionsResponse"></a>
<a id="tocSlistsubscriptiondefinitionversionsresponse"></a>
<a id="tocslistsubscriptiondefinitionversionsresponse"></a>

```json
{
  "NextToken": {},
  "Versions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Versions|object|false|none|none|

<h2 id="tocS_ListSubscriptionDefinitionsResponse">ListSubscriptionDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscriptiondefinitionsresponse"></a>
<a id="schema_ListSubscriptionDefinitionsResponse"></a>
<a id="tocSlistsubscriptiondefinitionsresponse"></a>
<a id="tocslistsubscriptiondefinitionsresponse"></a>

```json
{
  "Definitions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Definitions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[Tags](#schematags)|false|none|The key-value pair for the resource tag.|

<h2 id="tocS_ResetDeploymentsResponse">ResetDeploymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresetdeploymentsresponse"></a>
<a id="schema_ResetDeploymentsResponse"></a>
<a id="tocSresetdeploymentsresponse"></a>
<a id="tocsresetdeploymentsresponse"></a>

```json
{
  "DeploymentArn": {},
  "DeploymentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeploymentArn|object|false|none|none|
|DeploymentId|object|false|none|none|

<h2 id="tocS_StartBulkDeploymentResponse">StartBulkDeploymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartbulkdeploymentresponse"></a>
<a id="schema_StartBulkDeploymentResponse"></a>
<a id="tocSstartbulkdeploymentresponse"></a>
<a id="tocsstartbulkdeploymentresponse"></a>

```json
{
  "BulkDeploymentArn": {},
  "BulkDeploymentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BulkDeploymentArn|object|false|none|none|
|BulkDeploymentId|object|false|none|none|

<h2 id="tocS_StopBulkDeploymentResponse">StopBulkDeploymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopbulkdeploymentresponse"></a>
<a id="schema_StopBulkDeploymentResponse"></a>
<a id="tocSstopbulkdeploymentresponse"></a>
<a id="tocsstopbulkdeploymentresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateConnectivityInfoResponse">UpdateConnectivityInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectivityinforesponse"></a>
<a id="schema_UpdateConnectivityInfoResponse"></a>
<a id="tocSupdateconnectivityinforesponse"></a>
<a id="tocsupdateconnectivityinforesponse"></a>

```json
{
  "Message": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_ConnectivityInfo">ConnectivityInfo</h2>
<!-- backwards compatibility -->
<a id="schemaconnectivityinfo"></a>
<a id="schema_ConnectivityInfo"></a>
<a id="tocSconnectivityinfo"></a>
<a id="tocsconnectivityinfo"></a>

```json
{
  "HostAddress": {},
  "Id": {},
  "Metadata": {},
  "PortNumber": {}
}
```

Information about a Greengrass core's connectivity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostAddress|object|false|none|none|
|Id|object|false|none|none|
|Metadata|object|false|none|none|
|PortNumber|object|false|none|none|

<h2 id="tocS_UpdateConnectorDefinitionResponse">UpdateConnectorDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectordefinitionresponse"></a>
<a id="schema_UpdateConnectorDefinitionResponse"></a>
<a id="tocSupdateconnectordefinitionresponse"></a>
<a id="tocsupdateconnectordefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateCoreDefinitionResponse">UpdateCoreDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecoredefinitionresponse"></a>
<a id="schema_UpdateCoreDefinitionResponse"></a>
<a id="tocSupdatecoredefinitionresponse"></a>
<a id="tocsupdatecoredefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateDeviceDefinitionResponse">UpdateDeviceDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedevicedefinitionresponse"></a>
<a id="schema_UpdateDeviceDefinitionResponse"></a>
<a id="tocSupdatedevicedefinitionresponse"></a>
<a id="tocsupdatedevicedefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateFunctionDefinitionResponse">UpdateFunctionDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefunctiondefinitionresponse"></a>
<a id="schema_UpdateFunctionDefinitionResponse"></a>
<a id="tocSupdatefunctiondefinitionresponse"></a>
<a id="tocsupdatefunctiondefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateGroupResponse">UpdateGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdategroupresponse"></a>
<a id="schema_UpdateGroupResponse"></a>
<a id="tocSupdategroupresponse"></a>
<a id="tocsupdategroupresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateGroupCertificateConfigurationResponse">UpdateGroupCertificateConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdategroupcertificateconfigurationresponse"></a>
<a id="schema_UpdateGroupCertificateConfigurationResponse"></a>
<a id="tocSupdategroupcertificateconfigurationresponse"></a>
<a id="tocsupdategroupcertificateconfigurationresponse"></a>

```json
{
  "CertificateAuthorityExpiryInMilliseconds": {},
  "CertificateExpiryInMilliseconds": {},
  "GroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityExpiryInMilliseconds|object|false|none|none|
|CertificateExpiryInMilliseconds|object|false|none|none|
|GroupId|object|false|none|none|

<h2 id="tocS_UpdateLoggerDefinitionResponse">UpdateLoggerDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloggerdefinitionresponse"></a>
<a id="schema_UpdateLoggerDefinitionResponse"></a>
<a id="tocSupdateloggerdefinitionresponse"></a>
<a id="tocsupdateloggerdefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateResourceDefinitionResponse">UpdateResourceDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourcedefinitionresponse"></a>
<a id="schema_UpdateResourceDefinitionResponse"></a>
<a id="tocSupdateresourcedefinitionresponse"></a>
<a id="tocsupdateresourcedefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateSubscriptionDefinitionResponse">UpdateSubscriptionDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubscriptiondefinitionresponse"></a>
<a id="schema_UpdateSubscriptionDefinitionResponse"></a>
<a id="tocSupdatesubscriptiondefinitionresponse"></a>
<a id="tocsupdatesubscriptiondefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateThingRuntimeConfigurationResponse">UpdateThingRuntimeConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatethingruntimeconfigurationresponse"></a>
<a id="schema_UpdateThingRuntimeConfigurationResponse"></a>
<a id="tocSupdatethingruntimeconfigurationresponse"></a>
<a id="tocsupdatethingruntimeconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_Telemetry">Telemetry</h2>
<!-- backwards compatibility -->
<a id="schematelemetry"></a>
<a id="schema_Telemetry"></a>
<a id="tocStelemetry"></a>
<a id="tocstelemetry"></a>

```json
"On"
```

<h2 id="tocS_AssociateRoleToGroupRequest">AssociateRoleToGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateroletogrouprequest"></a>
<a id="schema_AssociateRoleToGroupRequest"></a>
<a id="tocSassociateroletogrouprequest"></a>
<a id="tocsassociateroletogrouprequest"></a>

```json
{
  "RoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|true|none|none|

<h2 id="tocS_AssociateServiceRoleToAccountRequest">AssociateServiceRoleToAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateserviceroletoaccountrequest"></a>
<a id="schema_AssociateServiceRoleToAccountRequest"></a>
<a id="tocSassociateserviceroletoaccountrequest"></a>
<a id="tocsassociateserviceroletoaccountrequest"></a>

```json
{
  "RoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|true|none|none|

<h2 id="tocS_BulkDeployment">BulkDeployment</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeployment"></a>
<a id="schema_BulkDeployment"></a>
<a id="tocSbulkdeployment"></a>
<a id="tocsbulkdeployment"></a>

```json
{
  "BulkDeploymentArn": {},
  "BulkDeploymentId": {},
  "CreatedAt": {}
}
```

Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BulkDeploymentArn|object|false|none|none|
|BulkDeploymentId|object|false|none|none|
|CreatedAt|object|false|none|none|

<h2 id="tocS___integer">__integer</h2>
<!-- backwards compatibility -->
<a id="schema__integer"></a>
<a id="schema___integer"></a>
<a id="tocS__integer"></a>
<a id="tocs__integer"></a>

```json
0
```

<h2 id="tocS_BulkDeploymentMetrics">BulkDeploymentMetrics</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeploymentmetrics"></a>
<a id="schema_BulkDeploymentMetrics"></a>
<a id="tocSbulkdeploymentmetrics"></a>
<a id="tocsbulkdeploymentmetrics"></a>

```json
{
  "InvalidInputRecords": {},
  "RecordsProcessed": {},
  "RetryAttempts": {}
}
```

Relevant metrics on input records processed during bulk deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InvalidInputRecords|object|false|none|none|
|RecordsProcessed|object|false|none|none|
|RetryAttempts|object|false|none|none|

<h2 id="tocS_DeploymentType">DeploymentType</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttype"></a>
<a id="schema_DeploymentType"></a>
<a id="tocSdeploymenttype"></a>
<a id="tocsdeploymenttype"></a>

```json
"NewDeployment"
```

The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.

<h2 id="tocS_ErrorDetails">ErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetails"></a>
<a id="schema_ErrorDetails"></a>
<a id="tocSerrordetails"></a>
<a id="tocserrordetails"></a>

```json
[
  {
    "DetailedErrorCode": {},
    "DetailedErrorMessage": {}
  }
]
```

A list of error details.

<h2 id="tocS_BulkDeploymentResult">BulkDeploymentResult</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeploymentresult"></a>
<a id="schema_BulkDeploymentResult"></a>
<a id="tocSbulkdeploymentresult"></a>
<a id="tocsbulkdeploymentresult"></a>

```json
{
  "CreatedAt": {},
  "DeploymentArn": {},
  "DeploymentId": {},
  "DeploymentStatus": {},
  "DeploymentType": {},
  "ErrorDetails": {},
  "ErrorMessage": {},
  "GroupArn": {}
}
```

Information about an individual group deployment in a bulk deployment operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedAt|object|false|none|none|
|DeploymentArn|object|false|none|none|
|DeploymentId|object|false|none|none|
|DeploymentStatus|object|false|none|none|
|DeploymentType|object|false|none|none|
|ErrorDetails|object|false|none|none|
|ErrorMessage|object|false|none|none|
|GroupArn|object|false|none|none|

<h2 id="tocS_BulkDeploymentResults">BulkDeploymentResults</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeploymentresults"></a>
<a id="schema_BulkDeploymentResults"></a>
<a id="tocSbulkdeploymentresults"></a>
<a id="tocsbulkdeploymentresults"></a>

```json
[
  {
    "CreatedAt": {},
    "DeploymentArn": {},
    "DeploymentId": {},
    "DeploymentStatus": {},
    "DeploymentType": {},
    "ErrorDetails": {},
    "ErrorMessage": {},
    "GroupArn": {}
  }
]
```

<h2 id="tocS_BulkDeploymentStatus">BulkDeploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeploymentstatus"></a>
<a id="schema_BulkDeploymentStatus"></a>
<a id="tocSbulkdeploymentstatus"></a>
<a id="tocsbulkdeploymentstatus"></a>

```json
"Initializing"
```

The current status of the bulk deployment.

<h2 id="tocS_BulkDeployments">BulkDeployments</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeployments"></a>
<a id="schema_BulkDeployments"></a>
<a id="tocSbulkdeployments"></a>
<a id="tocsbulkdeployments"></a>

```json
[
  {
    "BulkDeploymentArn": {},
    "BulkDeploymentId": {},
    "CreatedAt": {}
  }
]
```

<h2 id="tocS_ConfigurationSyncStatus">ConfigurationSyncStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsyncstatus"></a>
<a id="schema_ConfigurationSyncStatus"></a>
<a id="tocSconfigurationsyncstatus"></a>
<a id="tocsconfigurationsyncstatus"></a>

```json
"InSync"
```

<h2 id="tocS___mapOf__string">__mapOf__string</h2>
<!-- backwards compatibility -->
<a id="schema__mapof__string"></a>
<a id="schema___mapOf__string"></a>
<a id="tocS__mapof__string"></a>
<a id="tocs__mapof__string"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__string](#schema__string)|false|none|none|

<h2 id="tocS_ConnectorDefinitionVersion">ConnectorDefinitionVersion</h2>
<!-- backwards compatibility -->
<a id="schemaconnectordefinitionversion"></a>
<a id="schema_ConnectorDefinitionVersion"></a>
<a id="tocSconnectordefinitionversion"></a>
<a id="tocsconnectordefinitionversion"></a>

```json
{
  "Connectors": {}
}
```

Information about the connector definition version, which is a container for connectors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connectors|object|false|none|none|

<h2 id="tocS___boolean">__boolean</h2>
<!-- backwards compatibility -->
<a id="schema__boolean"></a>
<a id="schema___boolean"></a>
<a id="tocS__boolean"></a>
<a id="tocs__boolean"></a>

```json
true
```

<h2 id="tocS_CoreDefinitionVersion">CoreDefinitionVersion</h2>
<!-- backwards compatibility -->
<a id="schemacoredefinitionversion"></a>
<a id="schema_CoreDefinitionVersion"></a>
<a id="tocScoredefinitionversion"></a>
<a id="tocscoredefinitionversion"></a>

```json
{
  "Cores": {}
}
```

Information about a core definition version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cores|object|false|none|none|

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

The key-value pair for the resource tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__string](#schema__string)|false|none|none|

<h2 id="tocS_CreateConnectorDefinitionRequest">CreateConnectorDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectordefinitionrequest"></a>
<a id="schema_CreateConnectorDefinitionRequest"></a>
<a id="tocScreateconnectordefinitionrequest"></a>
<a id="tocscreateconnectordefinitionrequest"></a>

```json
{
  "InitialVersion": {
    "Connectors": {}
  },
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InitialVersion|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateConnectorDefinitionVersionRequest">CreateConnectorDefinitionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectordefinitionversionrequest"></a>
<a id="schema_CreateConnectorDefinitionVersionRequest"></a>
<a id="tocScreateconnectordefinitionversionrequest"></a>
<a id="tocscreateconnectordefinitionversionrequest"></a>

```json
{
  "Connectors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connectors|object|false|none|none|

<h2 id="tocS_CreateCoreDefinitionRequest">CreateCoreDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecoredefinitionrequest"></a>
<a id="schema_CreateCoreDefinitionRequest"></a>
<a id="tocScreatecoredefinitionrequest"></a>
<a id="tocscreatecoredefinitionrequest"></a>

```json
{
  "InitialVersion": {
    "Cores": {}
  },
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information needed to create a core definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InitialVersion|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateCoreDefinitionVersionRequest">CreateCoreDefinitionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecoredefinitionversionrequest"></a>
<a id="schema_CreateCoreDefinitionVersionRequest"></a>
<a id="tocScreatecoredefinitionversionrequest"></a>
<a id="tocscreatecoredefinitionversionrequest"></a>

```json
{
  "Cores": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cores|object|false|none|none|

<h2 id="tocS_CreateDeploymentRequest">CreateDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentrequest"></a>
<a id="schema_CreateDeploymentRequest"></a>
<a id="tocScreatedeploymentrequest"></a>
<a id="tocscreatedeploymentrequest"></a>

```json
{
  "DeploymentId": {},
  "DeploymentType": {},
  "GroupVersionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeploymentId|object|false|none|none|
|DeploymentType|object|true|none|none|
|GroupVersionId|object|false|none|none|

<h2 id="tocS_DeviceDefinitionVersion">DeviceDefinitionVersion</h2>
<!-- backwards compatibility -->
<a id="schemadevicedefinitionversion"></a>
<a id="schema_DeviceDefinitionVersion"></a>
<a id="tocSdevicedefinitionversion"></a>
<a id="tocsdevicedefinitionversion"></a>

```json
{
  "Devices": {}
}
```

Information about a device definition version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Devices|object|false|none|none|

<h2 id="tocS_CreateDeviceDefinitionRequest">CreateDeviceDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedevicedefinitionrequest"></a>
<a id="schema_CreateDeviceDefinitionRequest"></a>
<a id="tocScreatedevicedefinitionrequest"></a>
<a id="tocscreatedevicedefinitionrequest"></a>

```json
{
  "InitialVersion": {
    "Devices": {}
  },
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InitialVersion|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateDeviceDefinitionVersionRequest">CreateDeviceDefinitionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedevicedefinitionversionrequest"></a>
<a id="schema_CreateDeviceDefinitionVersionRequest"></a>
<a id="tocScreatedevicedefinitionversionrequest"></a>
<a id="tocscreatedevicedefinitionversionrequest"></a>

```json
{
  "Devices": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Devices|object|false|none|none|

<h2 id="tocS_FunctionDefinitionVersion">FunctionDefinitionVersion</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondefinitionversion"></a>
<a id="schema_FunctionDefinitionVersion"></a>
<a id="tocSfunctiondefinitionversion"></a>
<a id="tocsfunctiondefinitionversion"></a>

```json
{
  "DefaultConfig": {
    "Execution": {
      "IsolationMode": "GreengrassContainer",
      "RunAs": {
        "Gid": {},
        "Uid": {}
      }
    }
  },
  "Functions": {}
}
```

Information about a function definition version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultConfig|object|false|none|none|
|Functions|object|false|none|none|

<h2 id="tocS_CreateFunctionDefinitionRequest">CreateFunctionDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefunctiondefinitionrequest"></a>
<a id="schema_CreateFunctionDefinitionRequest"></a>
<a id="tocScreatefunctiondefinitionrequest"></a>
<a id="tocscreatefunctiondefinitionrequest"></a>

```json
{
  "InitialVersion": {
    "DefaultConfig": {
      "Execution": {
        "IsolationMode": "GreengrassContainer",
        "RunAs": {
          "Gid": {},
          "Uid": {}
        }
      }
    },
    "Functions": {}
  },
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InitialVersion|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateFunctionDefinitionVersionRequest">CreateFunctionDefinitionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefunctiondefinitionversionrequest"></a>
<a id="schema_CreateFunctionDefinitionVersionRequest"></a>
<a id="tocScreatefunctiondefinitionversionrequest"></a>
<a id="tocscreatefunctiondefinitionversionrequest"></a>

```json
{
  "DefaultConfig": {
    "Execution": {
      "IsolationMode": "GreengrassContainer",
      "RunAs": {
        "Gid": {},
        "Uid": {}
      }
    }
  },
  "Functions": {}
}
```

Information needed to create a function definition version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultConfig|object|false|none|none|
|Functions|object|false|none|none|

<h2 id="tocS_CreateGroupCertificateAuthorityRequest">CreateGroupCertificateAuthorityRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupcertificateauthorityrequest"></a>
<a id="schema_CreateGroupCertificateAuthorityRequest"></a>
<a id="tocScreategroupcertificateauthorityrequest"></a>
<a id="tocscreategroupcertificateauthorityrequest"></a>

```json
{}
```

<h2 id="tocS_GroupVersion">GroupVersion</h2>
<!-- backwards compatibility -->
<a id="schemagroupversion"></a>
<a id="schema_GroupVersion"></a>
<a id="tocSgroupversion"></a>
<a id="tocsgroupversion"></a>

```json
{
  "ConnectorDefinitionVersionArn": {},
  "CoreDefinitionVersionArn": {},
  "DeviceDefinitionVersionArn": {},
  "FunctionDefinitionVersionArn": {},
  "LoggerDefinitionVersionArn": {},
  "ResourceDefinitionVersionArn": {},
  "SubscriptionDefinitionVersionArn": {}
}
```

Information about a group version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorDefinitionVersionArn|object|false|none|none|
|CoreDefinitionVersionArn|object|false|none|none|
|DeviceDefinitionVersionArn|object|false|none|none|
|FunctionDefinitionVersionArn|object|false|none|none|
|LoggerDefinitionVersionArn|object|false|none|none|
|ResourceDefinitionVersionArn|object|false|none|none|
|SubscriptionDefinitionVersionArn|object|false|none|none|

<h2 id="tocS_CreateGroupRequest">CreateGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategrouprequest"></a>
<a id="schema_CreateGroupRequest"></a>
<a id="tocScreategrouprequest"></a>
<a id="tocscreategrouprequest"></a>

```json
{
  "InitialVersion": {
    "ConnectorDefinitionVersionArn": {},
    "CoreDefinitionVersionArn": {},
    "DeviceDefinitionVersionArn": {},
    "FunctionDefinitionVersionArn": {},
    "LoggerDefinitionVersionArn": {},
    "ResourceDefinitionVersionArn": {},
    "SubscriptionDefinitionVersionArn": {}
  },
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InitialVersion|object|false|none|none|
|Name|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateGroupVersionRequest">CreateGroupVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupversionrequest"></a>
<a id="schema_CreateGroupVersionRequest"></a>
<a id="tocScreategroupversionrequest"></a>
<a id="tocscreategroupversionrequest"></a>

```json
{
  "ConnectorDefinitionVersionArn": {},
  "CoreDefinitionVersionArn": {},
  "DeviceDefinitionVersionArn": {},
  "FunctionDefinitionVersionArn": {},
  "LoggerDefinitionVersionArn": {},
  "ResourceDefinitionVersionArn": {},
  "SubscriptionDefinitionVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorDefinitionVersionArn|object|false|none|none|
|CoreDefinitionVersionArn|object|false|none|none|
|DeviceDefinitionVersionArn|object|false|none|none|
|FunctionDefinitionVersionArn|object|false|none|none|
|LoggerDefinitionVersionArn|object|false|none|none|
|ResourceDefinitionVersionArn|object|false|none|none|
|SubscriptionDefinitionVersionArn|object|false|none|none|

<h2 id="tocS_LoggerDefinitionVersion">LoggerDefinitionVersion</h2>
<!-- backwards compatibility -->
<a id="schemaloggerdefinitionversion"></a>
<a id="schema_LoggerDefinitionVersion"></a>
<a id="tocSloggerdefinitionversion"></a>
<a id="tocsloggerdefinitionversion"></a>

```json
{
  "Loggers": {}
}
```

Information about a logger definition version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Loggers|object|false|none|none|

<h2 id="tocS_CreateLoggerDefinitionRequest">CreateLoggerDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateloggerdefinitionrequest"></a>
<a id="schema_CreateLoggerDefinitionRequest"></a>
<a id="tocScreateloggerdefinitionrequest"></a>
<a id="tocscreateloggerdefinitionrequest"></a>

```json
{
  "InitialVersion": {
    "Loggers": {}
  },
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InitialVersion|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateLoggerDefinitionVersionRequest">CreateLoggerDefinitionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateloggerdefinitionversionrequest"></a>
<a id="schema_CreateLoggerDefinitionVersionRequest"></a>
<a id="tocScreateloggerdefinitionversionrequest"></a>
<a id="tocscreateloggerdefinitionversionrequest"></a>

```json
{
  "Loggers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Loggers|object|false|none|none|

<h2 id="tocS_ResourceDefinitionVersion">ResourceDefinitionVersion</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedefinitionversion"></a>
<a id="schema_ResourceDefinitionVersion"></a>
<a id="tocSresourcedefinitionversion"></a>
<a id="tocsresourcedefinitionversion"></a>

```json
{
  "Resources": {}
}
```

Information about a resource definition version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Resources|object|false|none|none|

<h2 id="tocS_CreateResourceDefinitionRequest">CreateResourceDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateresourcedefinitionrequest"></a>
<a id="schema_CreateResourceDefinitionRequest"></a>
<a id="tocScreateresourcedefinitionrequest"></a>
<a id="tocscreateresourcedefinitionrequest"></a>

```json
{
  "InitialVersion": {
    "Resources": {}
  },
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InitialVersion|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateResourceDefinitionVersionRequest">CreateResourceDefinitionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateresourcedefinitionversionrequest"></a>
<a id="schema_CreateResourceDefinitionVersionRequest"></a>
<a id="tocScreateresourcedefinitionversionrequest"></a>
<a id="tocscreateresourcedefinitionversionrequest"></a>

```json
{
  "Resources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Resources|object|false|none|none|

<h2 id="tocS_S3UrlSignerRole">S3UrlSignerRole</h2>
<!-- backwards compatibility -->
<a id="schemas3urlsignerrole"></a>
<a id="schema_S3UrlSignerRole"></a>
<a id="tocSs3urlsignerrole"></a>
<a id="tocss3urlsignerrole"></a>

```json
"string"
```

The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.

<h2 id="tocS_SoftwareToUpdate">SoftwareToUpdate</h2>
<!-- backwards compatibility -->
<a id="schemasoftwaretoupdate"></a>
<a id="schema_SoftwareToUpdate"></a>
<a id="tocSsoftwaretoupdate"></a>
<a id="tocssoftwaretoupdate"></a>

```json
"core"
```

The piece of software on the Greengrass core that will be updated.

<h2 id="tocS_UpdateAgentLogLevel">UpdateAgentLogLevel</h2>
<!-- backwards compatibility -->
<a id="schemaupdateagentloglevel"></a>
<a id="schema_UpdateAgentLogLevel"></a>
<a id="tocSupdateagentloglevel"></a>
<a id="tocsupdateagentloglevel"></a>

```json
"NONE"
```

The minimum level of log statements that should be logged by the OTA Agent during an update.

<h2 id="tocS_UpdateTargets">UpdateTargets</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetargets"></a>
<a id="schema_UpdateTargets"></a>
<a id="tocSupdatetargets"></a>
<a id="tocsupdatetargets"></a>

```json
[
  "string"
]
```

The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.

<h2 id="tocS_UpdateTargetsArchitecture">UpdateTargetsArchitecture</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetargetsarchitecture"></a>
<a id="schema_UpdateTargetsArchitecture"></a>
<a id="tocSupdatetargetsarchitecture"></a>
<a id="tocsupdatetargetsarchitecture"></a>

```json
"armv6l"
```

The architecture of the cores which are the targets of an update.

<h2 id="tocS_UpdateTargetsOperatingSystem">UpdateTargetsOperatingSystem</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetargetsoperatingsystem"></a>
<a id="schema_UpdateTargetsOperatingSystem"></a>
<a id="tocSupdatetargetsoperatingsystem"></a>
<a id="tocsupdatetargetsoperatingsystem"></a>

```json
"ubuntu"
```

The operating system of the cores which are the targets of an update.

<h2 id="tocS_CreateSoftwareUpdateJobRequest">CreateSoftwareUpdateJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesoftwareupdatejobrequest"></a>
<a id="schema_CreateSoftwareUpdateJobRequest"></a>
<a id="tocScreatesoftwareupdatejobrequest"></a>
<a id="tocscreatesoftwareupdatejobrequest"></a>

```json
{
  "S3UrlSignerRole": "string",
  "SoftwareToUpdate": "core",
  "UpdateAgentLogLevel": "NONE",
  "UpdateTargets": [
    "string"
  ],
  "UpdateTargetsArchitecture": "armv6l",
  "UpdateTargetsOperatingSystem": "ubuntu"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3UrlSignerRole|[S3UrlSignerRole](#schemas3urlsignerrole)|true|none|The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.|
|SoftwareToUpdate|[SoftwareToUpdate](#schemasoftwaretoupdate)|true|none|The piece of software on the Greengrass core that will be updated.|
|UpdateAgentLogLevel|[UpdateAgentLogLevel](#schemaupdateagentloglevel)|false|none|The minimum level of log statements that should be logged by the OTA Agent during an update.|
|UpdateTargets|[UpdateTargets](#schemaupdatetargets)|true|none|The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.|
|UpdateTargetsArchitecture|[UpdateTargetsArchitecture](#schemaupdatetargetsarchitecture)|true|none|The architecture of the cores which are the targets of an update.|
|UpdateTargetsOperatingSystem|[UpdateTargetsOperatingSystem](#schemaupdatetargetsoperatingsystem)|true|none|The operating system of the cores which are the targets of an update.|

#### Enumerated Values

|Property|Value|
|---|---|
|SoftwareToUpdate|core|
|SoftwareToUpdate|ota_agent|
|UpdateAgentLogLevel|NONE|
|UpdateAgentLogLevel|TRACE|
|UpdateAgentLogLevel|DEBUG|
|UpdateAgentLogLevel|VERBOSE|
|UpdateAgentLogLevel|INFO|
|UpdateAgentLogLevel|WARN|
|UpdateAgentLogLevel|ERROR|
|UpdateAgentLogLevel|FATAL|
|UpdateTargetsArchitecture|armv6l|
|UpdateTargetsArchitecture|armv7l|
|UpdateTargetsArchitecture|x86_64|
|UpdateTargetsArchitecture|aarch64|
|UpdateTargetsOperatingSystem|ubuntu|
|UpdateTargetsOperatingSystem|raspbian|
|UpdateTargetsOperatingSystem|amazon_linux|
|UpdateTargetsOperatingSystem|openwrt|

<h2 id="tocS_SubscriptionDefinitionVersion">SubscriptionDefinitionVersion</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptiondefinitionversion"></a>
<a id="schema_SubscriptionDefinitionVersion"></a>
<a id="tocSsubscriptiondefinitionversion"></a>
<a id="tocssubscriptiondefinitionversion"></a>

```json
{
  "Subscriptions": {}
}
```

Information about a subscription definition version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subscriptions|object|false|none|none|

<h2 id="tocS_CreateSubscriptionDefinitionRequest">CreateSubscriptionDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesubscriptiondefinitionrequest"></a>
<a id="schema_CreateSubscriptionDefinitionRequest"></a>
<a id="tocScreatesubscriptiondefinitionrequest"></a>
<a id="tocscreatesubscriptiondefinitionrequest"></a>

```json
{
  "InitialVersion": {
    "Subscriptions": {}
  },
  "Name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InitialVersion|object|false|none|none|
|Name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateSubscriptionDefinitionVersionRequest">CreateSubscriptionDefinitionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesubscriptiondefinitionversionrequest"></a>
<a id="schema_CreateSubscriptionDefinitionVersionRequest"></a>
<a id="tocScreatesubscriptiondefinitionversionrequest"></a>
<a id="tocscreatesubscriptiondefinitionversionrequest"></a>

```json
{
  "Subscriptions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subscriptions|object|false|none|none|

<h2 id="tocS_DefinitionInformation">DefinitionInformation</h2>
<!-- backwards compatibility -->
<a id="schemadefinitioninformation"></a>
<a id="schema_DefinitionInformation"></a>
<a id="tocSdefinitioninformation"></a>
<a id="tocsdefinitioninformation"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information about a definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DeleteConnectorDefinitionRequest">DeleteConnectorDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectordefinitionrequest"></a>
<a id="schema_DeleteConnectorDefinitionRequest"></a>
<a id="tocSdeleteconnectordefinitionrequest"></a>
<a id="tocsdeleteconnectordefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteCoreDefinitionRequest">DeleteCoreDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecoredefinitionrequest"></a>
<a id="schema_DeleteCoreDefinitionRequest"></a>
<a id="tocSdeletecoredefinitionrequest"></a>
<a id="tocsdeletecoredefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDeviceDefinitionRequest">DeleteDeviceDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedevicedefinitionrequest"></a>
<a id="schema_DeleteDeviceDefinitionRequest"></a>
<a id="tocSdeletedevicedefinitionrequest"></a>
<a id="tocsdeletedevicedefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFunctionDefinitionRequest">DeleteFunctionDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefunctiondefinitionrequest"></a>
<a id="schema_DeleteFunctionDefinitionRequest"></a>
<a id="tocSdeletefunctiondefinitionrequest"></a>
<a id="tocsdeletefunctiondefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteGroupRequest">DeleteGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegrouprequest"></a>
<a id="schema_DeleteGroupRequest"></a>
<a id="tocSdeletegrouprequest"></a>
<a id="tocsdeletegrouprequest"></a>

```json
{}
```

<h2 id="tocS_DeleteLoggerDefinitionRequest">DeleteLoggerDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloggerdefinitionrequest"></a>
<a id="schema_DeleteLoggerDefinitionRequest"></a>
<a id="tocSdeleteloggerdefinitionrequest"></a>
<a id="tocsdeleteloggerdefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteResourceDefinitionRequest">DeleteResourceDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcedefinitionrequest"></a>
<a id="schema_DeleteResourceDefinitionRequest"></a>
<a id="tocSdeleteresourcedefinitionrequest"></a>
<a id="tocsdeleteresourcedefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteSubscriptionDefinitionRequest">DeleteSubscriptionDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesubscriptiondefinitionrequest"></a>
<a id="schema_DeleteSubscriptionDefinitionRequest"></a>
<a id="tocSdeletesubscriptiondefinitionrequest"></a>
<a id="tocsdeletesubscriptiondefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_Deployment">Deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_Deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "CreatedAt": {},
  "DeploymentArn": {},
  "DeploymentId": {},
  "DeploymentType": {},
  "GroupArn": {}
}
```

Information about a deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedAt|object|false|none|none|
|DeploymentArn|object|false|none|none|
|DeploymentId|object|false|none|none|
|DeploymentType|object|false|none|none|
|GroupArn|object|false|none|none|

<h2 id="tocS_Deployments">Deployments</h2>
<!-- backwards compatibility -->
<a id="schemadeployments"></a>
<a id="schema_Deployments"></a>
<a id="tocSdeployments"></a>
<a id="tocsdeployments"></a>

```json
[
  {
    "CreatedAt": {},
    "DeploymentArn": {},
    "DeploymentId": {},
    "DeploymentType": {},
    "GroupArn": {}
  }
]
```

<h2 id="tocS_DisassociateRoleFromGroupRequest">DisassociateRoleFromGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociaterolefromgrouprequest"></a>
<a id="schema_DisassociateRoleFromGroupRequest"></a>
<a id="tocSdisassociaterolefromgrouprequest"></a>
<a id="tocsdisassociaterolefromgrouprequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateServiceRoleFromAccountRequest">DisassociateServiceRoleFromAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateservicerolefromaccountrequest"></a>
<a id="schema_DisassociateServiceRoleFromAccountRequest"></a>
<a id="tocSdisassociateservicerolefromaccountrequest"></a>
<a id="tocsdisassociateservicerolefromaccountrequest"></a>

```json
{}
```

<h2 id="tocS_EncodingType">EncodingType</h2>
<!-- backwards compatibility -->
<a id="schemaencodingtype"></a>
<a id="schema_EncodingType"></a>
<a id="tocSencodingtype"></a>
<a id="tocsencodingtype"></a>

```json
"binary"
```

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
{
  "DetailedErrorCode": {},
  "DetailedErrorMessage": {}
}
```

Details about the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DetailedErrorCode|object|false|none|none|
|DetailedErrorMessage|object|false|none|none|

<h2 id="tocS_FunctionConfiguration">FunctionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafunctionconfiguration"></a>
<a id="schema_FunctionConfiguration"></a>
<a id="tocSfunctionconfiguration"></a>
<a id="tocsfunctionconfiguration"></a>

```json
{
  "EncodingType": {},
  "Environment": {
    "AccessSysfs": {},
    "Execution": {
      "IsolationMode": "GreengrassContainer",
      "RunAs": {
        "Gid": {},
        "Uid": {}
      }
    },
    "ResourceAccessPolicies": {},
    "Variables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "ExecArgs": {},
  "Executable": {},
  "MemorySize": {},
  "Pinned": {},
  "Timeout": {},
  "FunctionRuntimeOverride": {}
}
```

The configuration of the Lambda function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncodingType|object|false|none|none|
|Environment|object|false|none|none|
|ExecArgs|object|false|none|none|
|Executable|object|false|none|none|
|MemorySize|object|false|none|none|
|Pinned|object|false|none|none|
|Timeout|object|false|none|none|
|FunctionRuntimeOverride|object|false|none|none|

<h2 id="tocS_FunctionConfigurationEnvironment">FunctionConfigurationEnvironment</h2>
<!-- backwards compatibility -->
<a id="schemafunctionconfigurationenvironment"></a>
<a id="schema_FunctionConfigurationEnvironment"></a>
<a id="tocSfunctionconfigurationenvironment"></a>
<a id="tocsfunctionconfigurationenvironment"></a>

```json
{
  "AccessSysfs": {},
  "Execution": {
    "IsolationMode": "GreengrassContainer",
    "RunAs": {
      "Gid": {},
      "Uid": {}
    }
  },
  "ResourceAccessPolicies": {},
  "Variables": {
    "property1": "string",
    "property2": "string"
  }
}
```

The environment configuration of the function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessSysfs|object|false|none|none|
|Execution|object|false|none|none|
|ResourceAccessPolicies|object|false|none|none|
|Variables|object|false|none|none|

<h2 id="tocS_FunctionExecutionConfig">FunctionExecutionConfig</h2>
<!-- backwards compatibility -->
<a id="schemafunctionexecutionconfig"></a>
<a id="schema_FunctionExecutionConfig"></a>
<a id="tocSfunctionexecutionconfig"></a>
<a id="tocsfunctionexecutionconfig"></a>

```json
{
  "IsolationMode": "GreengrassContainer",
  "RunAs": {
    "Gid": {},
    "Uid": {}
  }
}
```

Configuration information that specifies how a Lambda function runs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsolationMode|[FunctionIsolationMode](#schemafunctionisolationmode)|false|none|Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.|
|RunAs|[FunctionRunAsConfig](#schemafunctionrunasconfig)|false|none|Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.|

#### Enumerated Values

|Property|Value|
|---|---|
|IsolationMode|GreengrassContainer|
|IsolationMode|NoContainer|

<h2 id="tocS___listOfResourceAccessPolicy">__listOfResourceAccessPolicy</h2>
<!-- backwards compatibility -->
<a id="schema__listofresourceaccesspolicy"></a>
<a id="schema___listOfResourceAccessPolicy"></a>
<a id="tocS__listofresourceaccesspolicy"></a>
<a id="tocs__listofresourceaccesspolicy"></a>

```json
[
  {
    "Permission": {},
    "ResourceId": {}
  }
]
```

<h2 id="tocS_FunctionIsolationMode">FunctionIsolationMode</h2>
<!-- backwards compatibility -->
<a id="schemafunctionisolationmode"></a>
<a id="schema_FunctionIsolationMode"></a>
<a id="tocSfunctionisolationmode"></a>
<a id="tocsfunctionisolationmode"></a>

```json
"GreengrassContainer"
```

Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.

<h2 id="tocS_FunctionRunAsConfig">FunctionRunAsConfig</h2>
<!-- backwards compatibility -->
<a id="schemafunctionrunasconfig"></a>
<a id="schema_FunctionRunAsConfig"></a>
<a id="tocSfunctionrunasconfig"></a>
<a id="tocsfunctionrunasconfig"></a>

```json
{
  "Gid": {},
  "Uid": {}
}
```

Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Gid|object|false|none|none|
|Uid|object|false|none|none|

<h2 id="tocS_GetAssociatedRoleRequest">GetAssociatedRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetassociatedrolerequest"></a>
<a id="schema_GetAssociatedRoleRequest"></a>
<a id="tocSgetassociatedrolerequest"></a>
<a id="tocsgetassociatedrolerequest"></a>

```json
{}
```

<h2 id="tocS_GetBulkDeploymentStatusRequest">GetBulkDeploymentStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbulkdeploymentstatusrequest"></a>
<a id="schema_GetBulkDeploymentStatusRequest"></a>
<a id="tocSgetbulkdeploymentstatusrequest"></a>
<a id="tocsgetbulkdeploymentstatusrequest"></a>

```json
{}
```

<h2 id="tocS_GetConnectivityInfoRequest">GetConnectivityInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectivityinforequest"></a>
<a id="schema_GetConnectivityInfoRequest"></a>
<a id="tocSgetconnectivityinforequest"></a>
<a id="tocsgetconnectivityinforequest"></a>

```json
{}
```

<h2 id="tocS___listOfConnectivityInfo">__listOfConnectivityInfo</h2>
<!-- backwards compatibility -->
<a id="schema__listofconnectivityinfo"></a>
<a id="schema___listOfConnectivityInfo"></a>
<a id="tocS__listofconnectivityinfo"></a>
<a id="tocs__listofconnectivityinfo"></a>

```json
[
  {
    "HostAddress": {},
    "Id": {},
    "Metadata": {},
    "PortNumber": {}
  }
]
```

<h2 id="tocS_GetConnectorDefinitionRequest">GetConnectorDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectordefinitionrequest"></a>
<a id="schema_GetConnectorDefinitionRequest"></a>
<a id="tocSgetconnectordefinitionrequest"></a>
<a id="tocsgetconnectordefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_GetConnectorDefinitionVersionRequest">GetConnectorDefinitionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectordefinitionversionrequest"></a>
<a id="schema_GetConnectorDefinitionVersionRequest"></a>
<a id="tocSgetconnectordefinitionversionrequest"></a>
<a id="tocsgetconnectordefinitionversionrequest"></a>

```json
{}
```

<h2 id="tocS_GetCoreDefinitionRequest">GetCoreDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcoredefinitionrequest"></a>
<a id="schema_GetCoreDefinitionRequest"></a>
<a id="tocSgetcoredefinitionrequest"></a>
<a id="tocsgetcoredefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_GetCoreDefinitionVersionRequest">GetCoreDefinitionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcoredefinitionversionrequest"></a>
<a id="schema_GetCoreDefinitionVersionRequest"></a>
<a id="tocSgetcoredefinitionversionrequest"></a>
<a id="tocsgetcoredefinitionversionrequest"></a>

```json
{}
```

<h2 id="tocS_GetDeploymentStatusRequest">GetDeploymentStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentstatusrequest"></a>
<a id="schema_GetDeploymentStatusRequest"></a>
<a id="tocSgetdeploymentstatusrequest"></a>
<a id="tocsgetdeploymentstatusrequest"></a>

```json
{}
```

<h2 id="tocS_GetDeviceDefinitionRequest">GetDeviceDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicedefinitionrequest"></a>
<a id="schema_GetDeviceDefinitionRequest"></a>
<a id="tocSgetdevicedefinitionrequest"></a>
<a id="tocsgetdevicedefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_GetDeviceDefinitionVersionRequest">GetDeviceDefinitionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicedefinitionversionrequest"></a>
<a id="schema_GetDeviceDefinitionVersionRequest"></a>
<a id="tocSgetdevicedefinitionversionrequest"></a>
<a id="tocsgetdevicedefinitionversionrequest"></a>

```json
{}
```

<h2 id="tocS_GetFunctionDefinitionRequest">GetFunctionDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctiondefinitionrequest"></a>
<a id="schema_GetFunctionDefinitionRequest"></a>
<a id="tocSgetfunctiondefinitionrequest"></a>
<a id="tocsgetfunctiondefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_GetFunctionDefinitionVersionRequest">GetFunctionDefinitionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctiondefinitionversionrequest"></a>
<a id="schema_GetFunctionDefinitionVersionRequest"></a>
<a id="tocSgetfunctiondefinitionversionrequest"></a>
<a id="tocsgetfunctiondefinitionversionrequest"></a>

```json
{}
```

<h2 id="tocS_GetGroupCertificateAuthorityRequest">GetGroupCertificateAuthorityRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupcertificateauthorityrequest"></a>
<a id="schema_GetGroupCertificateAuthorityRequest"></a>
<a id="tocSgetgroupcertificateauthorityrequest"></a>
<a id="tocsgetgroupcertificateauthorityrequest"></a>

```json
{}
```

<h2 id="tocS_GetGroupCertificateConfigurationRequest">GetGroupCertificateConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupcertificateconfigurationrequest"></a>
<a id="schema_GetGroupCertificateConfigurationRequest"></a>
<a id="tocSgetgroupcertificateconfigurationrequest"></a>
<a id="tocsgetgroupcertificateconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetGroupRequest">GetGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgrouprequest"></a>
<a id="schema_GetGroupRequest"></a>
<a id="tocSgetgrouprequest"></a>
<a id="tocsgetgrouprequest"></a>

```json
{}
```

<h2 id="tocS_GetGroupVersionRequest">GetGroupVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupversionrequest"></a>
<a id="schema_GetGroupVersionRequest"></a>
<a id="tocSgetgroupversionrequest"></a>
<a id="tocsgetgroupversionrequest"></a>

```json
{}
```

<h2 id="tocS_GetLoggerDefinitionRequest">GetLoggerDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetloggerdefinitionrequest"></a>
<a id="schema_GetLoggerDefinitionRequest"></a>
<a id="tocSgetloggerdefinitionrequest"></a>
<a id="tocsgetloggerdefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_GetLoggerDefinitionVersionRequest">GetLoggerDefinitionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetloggerdefinitionversionrequest"></a>
<a id="schema_GetLoggerDefinitionVersionRequest"></a>
<a id="tocSgetloggerdefinitionversionrequest"></a>
<a id="tocsgetloggerdefinitionversionrequest"></a>

```json
{}
```

<h2 id="tocS_GetResourceDefinitionRequest">GetResourceDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcedefinitionrequest"></a>
<a id="schema_GetResourceDefinitionRequest"></a>
<a id="tocSgetresourcedefinitionrequest"></a>
<a id="tocsgetresourcedefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_GetResourceDefinitionVersionRequest">GetResourceDefinitionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcedefinitionversionrequest"></a>
<a id="schema_GetResourceDefinitionVersionRequest"></a>
<a id="tocSgetresourcedefinitionversionrequest"></a>
<a id="tocsgetresourcedefinitionversionrequest"></a>

```json
{}
```

<h2 id="tocS_GetServiceRoleForAccountRequest">GetServiceRoleForAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceroleforaccountrequest"></a>
<a id="schema_GetServiceRoleForAccountRequest"></a>
<a id="tocSgetserviceroleforaccountrequest"></a>
<a id="tocsgetserviceroleforaccountrequest"></a>

```json
{}
```

<h2 id="tocS_GetSubscriptionDefinitionRequest">GetSubscriptionDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsubscriptiondefinitionrequest"></a>
<a id="schema_GetSubscriptionDefinitionRequest"></a>
<a id="tocSgetsubscriptiondefinitionrequest"></a>
<a id="tocsgetsubscriptiondefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_GetSubscriptionDefinitionVersionRequest">GetSubscriptionDefinitionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsubscriptiondefinitionversionrequest"></a>
<a id="schema_GetSubscriptionDefinitionVersionRequest"></a>
<a id="tocSgetsubscriptiondefinitionversionrequest"></a>
<a id="tocsgetsubscriptiondefinitionversionrequest"></a>

```json
{}
```

<h2 id="tocS_GetThingRuntimeConfigurationRequest">GetThingRuntimeConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetthingruntimeconfigurationrequest"></a>
<a id="schema_GetThingRuntimeConfigurationRequest"></a>
<a id="tocSgetthingruntimeconfigurationrequest"></a>
<a id="tocsgetthingruntimeconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_RuntimeConfiguration">RuntimeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeconfiguration"></a>
<a id="schema_RuntimeConfiguration"></a>
<a id="tocSruntimeconfiguration"></a>
<a id="tocsruntimeconfiguration"></a>

```json
{
  "TelemetryConfiguration": {
    "ConfigurationSyncStatus": {},
    "Telemetry": {}
  }
}
```

Runtime configuration for a thing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TelemetryConfiguration|object|false|none|none|

<h2 id="tocS_GroupCertificateAuthorityProperties">GroupCertificateAuthorityProperties</h2>
<!-- backwards compatibility -->
<a id="schemagroupcertificateauthorityproperties"></a>
<a id="schema_GroupCertificateAuthorityProperties"></a>
<a id="tocSgroupcertificateauthorityproperties"></a>
<a id="tocsgroupcertificateauthorityproperties"></a>

```json
{
  "GroupCertificateAuthorityArn": {},
  "GroupCertificateAuthorityId": {}
}
```

Information about a certificate authority for a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupCertificateAuthorityArn|object|false|none|none|
|GroupCertificateAuthorityId|object|false|none|none|

<h2 id="tocS_GroupInformation">GroupInformation</h2>
<!-- backwards compatibility -->
<a id="schemagroupinformation"></a>
<a id="schema_GroupInformation"></a>
<a id="tocSgroupinformation"></a>
<a id="tocsgroupinformation"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "LastUpdatedTimestamp": {},
  "LatestVersion": {},
  "LatestVersionArn": {},
  "Name": {}
}
```

Information about a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LatestVersion|object|false|none|none|
|LatestVersionArn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_GroupOwnerSetting">GroupOwnerSetting</h2>
<!-- backwards compatibility -->
<a id="schemagroupownersetting"></a>
<a id="schema_GroupOwnerSetting"></a>
<a id="tocSgroupownersetting"></a>
<a id="tocsgroupownersetting"></a>

```json
{
  "AutoAddGroupOwner": {},
  "GroupOwner": {}
}
```

Group owner related settings for local resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoAddGroupOwner|object|false|none|none|
|GroupOwner|object|false|none|none|

<h2 id="tocS_ListBulkDeploymentDetailedReportsRequest">ListBulkDeploymentDetailedReportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbulkdeploymentdetailedreportsrequest"></a>
<a id="schema_ListBulkDeploymentDetailedReportsRequest"></a>
<a id="tocSlistbulkdeploymentdetailedreportsrequest"></a>
<a id="tocslistbulkdeploymentdetailedreportsrequest"></a>

```json
{}
```

<h2 id="tocS_ListBulkDeploymentsRequest">ListBulkDeploymentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbulkdeploymentsrequest"></a>
<a id="schema_ListBulkDeploymentsRequest"></a>
<a id="tocSlistbulkdeploymentsrequest"></a>
<a id="tocslistbulkdeploymentsrequest"></a>

```json
{}
```

<h2 id="tocS_ListConnectorDefinitionVersionsRequest">ListConnectorDefinitionVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectordefinitionversionsrequest"></a>
<a id="schema_ListConnectorDefinitionVersionsRequest"></a>
<a id="tocSlistconnectordefinitionversionsrequest"></a>
<a id="tocslistconnectordefinitionversionsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfVersionInformation">__listOfVersionInformation</h2>
<!-- backwards compatibility -->
<a id="schema__listofversioninformation"></a>
<a id="schema___listOfVersionInformation"></a>
<a id="tocS__listofversioninformation"></a>
<a id="tocs__listofversioninformation"></a>

```json
[
  {
    "Arn": {},
    "CreationTimestamp": {},
    "Id": {},
    "Version": {}
  }
]
```

<h2 id="tocS_ListConnectorDefinitionsRequest">ListConnectorDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectordefinitionsrequest"></a>
<a id="schema_ListConnectorDefinitionsRequest"></a>
<a id="tocSlistconnectordefinitionsrequest"></a>
<a id="tocslistconnectordefinitionsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfDefinitionInformation">__listOfDefinitionInformation</h2>
<!-- backwards compatibility -->
<a id="schema__listofdefinitioninformation"></a>
<a id="schema___listOfDefinitionInformation"></a>
<a id="tocS__listofdefinitioninformation"></a>
<a id="tocs__listofdefinitioninformation"></a>

```json
[
  {
    "Arn": {},
    "CreationTimestamp": {},
    "Id": {},
    "LastUpdatedTimestamp": {},
    "LatestVersion": {},
    "LatestVersionArn": {},
    "Name": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ListCoreDefinitionVersionsRequest">ListCoreDefinitionVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcoredefinitionversionsrequest"></a>
<a id="schema_ListCoreDefinitionVersionsRequest"></a>
<a id="tocSlistcoredefinitionversionsrequest"></a>
<a id="tocslistcoredefinitionversionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListCoreDefinitionsRequest">ListCoreDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcoredefinitionsrequest"></a>
<a id="schema_ListCoreDefinitionsRequest"></a>
<a id="tocSlistcoredefinitionsrequest"></a>
<a id="tocslistcoredefinitionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListDeploymentsRequest">ListDeploymentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentsrequest"></a>
<a id="schema_ListDeploymentsRequest"></a>
<a id="tocSlistdeploymentsrequest"></a>
<a id="tocslistdeploymentsrequest"></a>

```json
{}
```

<h2 id="tocS_ListDeviceDefinitionVersionsRequest">ListDeviceDefinitionVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicedefinitionversionsrequest"></a>
<a id="schema_ListDeviceDefinitionVersionsRequest"></a>
<a id="tocSlistdevicedefinitionversionsrequest"></a>
<a id="tocslistdevicedefinitionversionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListDeviceDefinitionsRequest">ListDeviceDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicedefinitionsrequest"></a>
<a id="schema_ListDeviceDefinitionsRequest"></a>
<a id="tocSlistdevicedefinitionsrequest"></a>
<a id="tocslistdevicedefinitionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListFunctionDefinitionVersionsRequest">ListFunctionDefinitionVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctiondefinitionversionsrequest"></a>
<a id="schema_ListFunctionDefinitionVersionsRequest"></a>
<a id="tocSlistfunctiondefinitionversionsrequest"></a>
<a id="tocslistfunctiondefinitionversionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListFunctionDefinitionsRequest">ListFunctionDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctiondefinitionsrequest"></a>
<a id="schema_ListFunctionDefinitionsRequest"></a>
<a id="tocSlistfunctiondefinitionsrequest"></a>
<a id="tocslistfunctiondefinitionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListGroupCertificateAuthoritiesRequest">ListGroupCertificateAuthoritiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupcertificateauthoritiesrequest"></a>
<a id="schema_ListGroupCertificateAuthoritiesRequest"></a>
<a id="tocSlistgroupcertificateauthoritiesrequest"></a>
<a id="tocslistgroupcertificateauthoritiesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfGroupCertificateAuthorityProperties">__listOfGroupCertificateAuthorityProperties</h2>
<!-- backwards compatibility -->
<a id="schema__listofgroupcertificateauthorityproperties"></a>
<a id="schema___listOfGroupCertificateAuthorityProperties"></a>
<a id="tocS__listofgroupcertificateauthorityproperties"></a>
<a id="tocs__listofgroupcertificateauthorityproperties"></a>

```json
[
  {
    "GroupCertificateAuthorityArn": {},
    "GroupCertificateAuthorityId": {}
  }
]
```

<h2 id="tocS_ListGroupVersionsRequest">ListGroupVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupversionsrequest"></a>
<a id="schema_ListGroupVersionsRequest"></a>
<a id="tocSlistgroupversionsrequest"></a>
<a id="tocslistgroupversionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListGroupsRequest">ListGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsrequest"></a>
<a id="schema_ListGroupsRequest"></a>
<a id="tocSlistgroupsrequest"></a>
<a id="tocslistgroupsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfGroupInformation">__listOfGroupInformation</h2>
<!-- backwards compatibility -->
<a id="schema__listofgroupinformation"></a>
<a id="schema___listOfGroupInformation"></a>
<a id="tocS__listofgroupinformation"></a>
<a id="tocs__listofgroupinformation"></a>

```json
[
  {
    "Arn": {},
    "CreationTimestamp": {},
    "Id": {},
    "LastUpdatedTimestamp": {},
    "LatestVersion": {},
    "LatestVersionArn": {},
    "Name": {}
  }
]
```

<h2 id="tocS_ListLoggerDefinitionVersionsRequest">ListLoggerDefinitionVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistloggerdefinitionversionsrequest"></a>
<a id="schema_ListLoggerDefinitionVersionsRequest"></a>
<a id="tocSlistloggerdefinitionversionsrequest"></a>
<a id="tocslistloggerdefinitionversionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListLoggerDefinitionsRequest">ListLoggerDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistloggerdefinitionsrequest"></a>
<a id="schema_ListLoggerDefinitionsRequest"></a>
<a id="tocSlistloggerdefinitionsrequest"></a>
<a id="tocslistloggerdefinitionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListResourceDefinitionVersionsRequest">ListResourceDefinitionVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcedefinitionversionsrequest"></a>
<a id="schema_ListResourceDefinitionVersionsRequest"></a>
<a id="tocSlistresourcedefinitionversionsrequest"></a>
<a id="tocslistresourcedefinitionversionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListResourceDefinitionsRequest">ListResourceDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcedefinitionsrequest"></a>
<a id="schema_ListResourceDefinitionsRequest"></a>
<a id="tocSlistresourcedefinitionsrequest"></a>
<a id="tocslistresourcedefinitionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListSubscriptionDefinitionVersionsRequest">ListSubscriptionDefinitionVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscriptiondefinitionversionsrequest"></a>
<a id="schema_ListSubscriptionDefinitionVersionsRequest"></a>
<a id="tocSlistsubscriptiondefinitionversionsrequest"></a>
<a id="tocslistsubscriptiondefinitionversionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListSubscriptionDefinitionsRequest">ListSubscriptionDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscriptiondefinitionsrequest"></a>
<a id="schema_ListSubscriptionDefinitionsRequest"></a>
<a id="tocSlistsubscriptiondefinitionsrequest"></a>
<a id="tocslistsubscriptiondefinitionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_LocalDeviceResourceData">LocalDeviceResourceData</h2>
<!-- backwards compatibility -->
<a id="schemalocaldeviceresourcedata"></a>
<a id="schema_LocalDeviceResourceData"></a>
<a id="tocSlocaldeviceresourcedata"></a>
<a id="tocslocaldeviceresourcedata"></a>

```json
{
  "GroupOwnerSetting": {
    "AutoAddGroupOwner": {},
    "GroupOwner": {}
  },
  "SourcePath": {}
}
```

Attributes that define a local device resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupOwnerSetting|object|false|none|none|
|SourcePath|object|false|none|none|

<h2 id="tocS_LocalVolumeResourceData">LocalVolumeResourceData</h2>
<!-- backwards compatibility -->
<a id="schemalocalvolumeresourcedata"></a>
<a id="schema_LocalVolumeResourceData"></a>
<a id="tocSlocalvolumeresourcedata"></a>
<a id="tocslocalvolumeresourcedata"></a>

```json
{
  "DestinationPath": {},
  "GroupOwnerSetting": {
    "AutoAddGroupOwner": {},
    "GroupOwner": {}
  },
  "SourcePath": {}
}
```

Attributes that define a local volume resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationPath|object|false|none|none|
|GroupOwnerSetting|object|false|none|none|
|SourcePath|object|false|none|none|

<h2 id="tocS_LoggerComponent">LoggerComponent</h2>
<!-- backwards compatibility -->
<a id="schemaloggercomponent"></a>
<a id="schema_LoggerComponent"></a>
<a id="tocSloggercomponent"></a>
<a id="tocsloggercomponent"></a>

```json
"GreengrassSystem"
```

<h2 id="tocS_LoggerLevel">LoggerLevel</h2>
<!-- backwards compatibility -->
<a id="schemaloggerlevel"></a>
<a id="schema_LoggerLevel"></a>
<a id="tocSloggerlevel"></a>
<a id="tocsloggerlevel"></a>

```json
"DEBUG"
```

<h2 id="tocS_LoggerType">LoggerType</h2>
<!-- backwards compatibility -->
<a id="schemaloggertype"></a>
<a id="schema_LoggerType"></a>
<a id="tocSloggertype"></a>
<a id="tocsloggertype"></a>

```json
"FileSystem"
```

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
"ro"
```

The type of permission a function has to access a resource.

<h2 id="tocS_ResetDeploymentsRequest">ResetDeploymentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetdeploymentsrequest"></a>
<a id="schema_ResetDeploymentsRequest"></a>
<a id="tocSresetdeploymentsrequest"></a>
<a id="tocsresetdeploymentsrequest"></a>

```json
{
  "Force": {}
}
```

Information needed to reset deployments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Force|object|false|none|none|

<h2 id="tocS_ResourceDataContainer">ResourceDataContainer</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatacontainer"></a>
<a id="schema_ResourceDataContainer"></a>
<a id="tocSresourcedatacontainer"></a>
<a id="tocsresourcedatacontainer"></a>

```json
{
  "LocalDeviceResourceData": {
    "GroupOwnerSetting": {
      "AutoAddGroupOwner": {},
      "GroupOwner": {}
    },
    "SourcePath": {}
  },
  "LocalVolumeResourceData": {
    "DestinationPath": {},
    "GroupOwnerSetting": {
      "AutoAddGroupOwner": {},
      "GroupOwner": {}
    },
    "SourcePath": {}
  },
  "S3MachineLearningModelResourceData": {
    "DestinationPath": {},
    "OwnerSetting": {
      "GroupOwner": {},
      "GroupPermission": {}
    },
    "S3Uri": {}
  },
  "SageMakerMachineLearningModelResourceData": {
    "DestinationPath": {},
    "OwnerSetting": {
      "GroupOwner": {},
      "GroupPermission": {}
    },
    "SageMakerJobArn": {}
  },
  "SecretsManagerSecretResourceData": {
    "ARN": {},
    "AdditionalStagingLabelsToDownload": {}
  }
}
```

A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocalDeviceResourceData|object|false|none|none|
|LocalVolumeResourceData|object|false|none|none|
|S3MachineLearningModelResourceData|object|false|none|none|
|SageMakerMachineLearningModelResourceData|object|false|none|none|
|SecretsManagerSecretResourceData|object|false|none|none|

<h2 id="tocS_ResourceAccessPolicy">ResourceAccessPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaresourceaccesspolicy"></a>
<a id="schema_ResourceAccessPolicy"></a>
<a id="tocSresourceaccesspolicy"></a>
<a id="tocsresourceaccesspolicy"></a>

```json
{
  "Permission": {},
  "ResourceId": {}
}
```

A policy used by the function to access a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Permission|object|false|none|none|
|ResourceId|object|true|none|none|

<h2 id="tocS_S3MachineLearningModelResourceData">S3MachineLearningModelResourceData</h2>
<!-- backwards compatibility -->
<a id="schemas3machinelearningmodelresourcedata"></a>
<a id="schema_S3MachineLearningModelResourceData"></a>
<a id="tocSs3machinelearningmodelresourcedata"></a>
<a id="tocss3machinelearningmodelresourcedata"></a>

```json
{
  "DestinationPath": {},
  "OwnerSetting": {
    "GroupOwner": {},
    "GroupPermission": {}
  },
  "S3Uri": {}
}
```

Attributes that define an Amazon S3 machine learning resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationPath|object|false|none|none|
|OwnerSetting|[ResourceDownloadOwnerSetting](#schemaresourcedownloadownersetting)|false|none|The owner setting for downloaded machine learning resources.|
|S3Uri|object|false|none|none|

<h2 id="tocS_SageMakerMachineLearningModelResourceData">SageMakerMachineLearningModelResourceData</h2>
<!-- backwards compatibility -->
<a id="schemasagemakermachinelearningmodelresourcedata"></a>
<a id="schema_SageMakerMachineLearningModelResourceData"></a>
<a id="tocSsagemakermachinelearningmodelresourcedata"></a>
<a id="tocssagemakermachinelearningmodelresourcedata"></a>

```json
{
  "DestinationPath": {},
  "OwnerSetting": {
    "GroupOwner": {},
    "GroupPermission": {}
  },
  "SageMakerJobArn": {}
}
```

Attributes that define an Amazon SageMaker machine learning resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationPath|object|false|none|none|
|OwnerSetting|[ResourceDownloadOwnerSetting](#schemaresourcedownloadownersetting)|false|none|The owner setting for downloaded machine learning resources.|
|SageMakerJobArn|object|false|none|none|

<h2 id="tocS_SecretsManagerSecretResourceData">SecretsManagerSecretResourceData</h2>
<!-- backwards compatibility -->
<a id="schemasecretsmanagersecretresourcedata"></a>
<a id="schema_SecretsManagerSecretResourceData"></a>
<a id="tocSsecretsmanagersecretresourcedata"></a>
<a id="tocssecretsmanagersecretresourcedata"></a>

```json
{
  "ARN": {},
  "AdditionalStagingLabelsToDownload": {}
}
```

Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|AdditionalStagingLabelsToDownload|object|false|none|none|

<h2 id="tocS_ResourceDownloadOwnerSetting">ResourceDownloadOwnerSetting</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedownloadownersetting"></a>
<a id="schema_ResourceDownloadOwnerSetting"></a>
<a id="tocSresourcedownloadownersetting"></a>
<a id="tocsresourcedownloadownersetting"></a>

```json
{
  "GroupOwner": {},
  "GroupPermission": {}
}
```

The owner setting for downloaded machine learning resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupOwner|object|true|none|none|
|GroupPermission|object|true|none|none|

<h2 id="tocS_TelemetryConfiguration">TelemetryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematelemetryconfiguration"></a>
<a id="schema_TelemetryConfiguration"></a>
<a id="tocStelemetryconfiguration"></a>
<a id="tocstelemetryconfiguration"></a>

```json
{
  "ConfigurationSyncStatus": {},
  "Telemetry": {}
}
```

Configuration settings for running telemetry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSyncStatus|object|false|none|none|
|Telemetry|object|true|none|none|

<h2 id="tocS___listOf__string">__listOf__string</h2>
<!-- backwards compatibility -->
<a id="schema__listof__string"></a>
<a id="schema___listOf__string"></a>
<a id="tocS__listof__string"></a>
<a id="tocs__listof__string"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StartBulkDeploymentRequest">StartBulkDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartbulkdeploymentrequest"></a>
<a id="schema_StartBulkDeploymentRequest"></a>
<a id="tocSstartbulkdeploymentrequest"></a>
<a id="tocsstartbulkdeploymentrequest"></a>

```json
{
  "ExecutionRoleArn": {},
  "InputFileUri": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExecutionRoleArn|object|true|none|none|
|InputFileUri|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_StopBulkDeploymentRequest">StopBulkDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopbulkdeploymentrequest"></a>
<a id="schema_StopBulkDeploymentRequest"></a>
<a id="tocSstopbulkdeploymentrequest"></a>
<a id="tocsstopbulkdeploymentrequest"></a>

```json
{}
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A map of the key-value pairs for the resource tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[Tags](#schematags)|false|none|The key-value pair for the resource tag.|

<h2 id="tocS_TelemetryConfigurationUpdate">TelemetryConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schematelemetryconfigurationupdate"></a>
<a id="schema_TelemetryConfigurationUpdate"></a>
<a id="tocStelemetryconfigurationupdate"></a>
<a id="tocstelemetryconfigurationupdate"></a>

```json
{
  "Telemetry": {}
}
```

Configuration settings for running telemetry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Telemetry|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateConnectivityInfoRequest">UpdateConnectivityInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectivityinforequest"></a>
<a id="schema_UpdateConnectivityInfoRequest"></a>
<a id="tocSupdateconnectivityinforequest"></a>
<a id="tocsupdateconnectivityinforequest"></a>

```json
{
  "ConnectivityInfo": {}
}
```

Connectivity information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectivityInfo|object|false|none|none|

<h2 id="tocS_UpdateConnectorDefinitionRequest">UpdateConnectorDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectordefinitionrequest"></a>
<a id="schema_UpdateConnectorDefinitionRequest"></a>
<a id="tocSupdateconnectordefinitionrequest"></a>
<a id="tocsupdateconnectordefinitionrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_UpdateCoreDefinitionRequest">UpdateCoreDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecoredefinitionrequest"></a>
<a id="schema_UpdateCoreDefinitionRequest"></a>
<a id="tocSupdatecoredefinitionrequest"></a>
<a id="tocsupdatecoredefinitionrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_UpdateDeviceDefinitionRequest">UpdateDeviceDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedevicedefinitionrequest"></a>
<a id="schema_UpdateDeviceDefinitionRequest"></a>
<a id="tocSupdatedevicedefinitionrequest"></a>
<a id="tocsupdatedevicedefinitionrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_UpdateFunctionDefinitionRequest">UpdateFunctionDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefunctiondefinitionrequest"></a>
<a id="schema_UpdateFunctionDefinitionRequest"></a>
<a id="tocSupdatefunctiondefinitionrequest"></a>
<a id="tocsupdatefunctiondefinitionrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_UpdateGroupCertificateConfigurationRequest">UpdateGroupCertificateConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategroupcertificateconfigurationrequest"></a>
<a id="schema_UpdateGroupCertificateConfigurationRequest"></a>
<a id="tocSupdategroupcertificateconfigurationrequest"></a>
<a id="tocsupdategroupcertificateconfigurationrequest"></a>

```json
{
  "CertificateExpiryInMilliseconds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateExpiryInMilliseconds|object|false|none|none|

<h2 id="tocS_UpdateGroupRequest">UpdateGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategrouprequest"></a>
<a id="schema_UpdateGroupRequest"></a>
<a id="tocSupdategrouprequest"></a>
<a id="tocsupdategrouprequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_UpdateLoggerDefinitionRequest">UpdateLoggerDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloggerdefinitionrequest"></a>
<a id="schema_UpdateLoggerDefinitionRequest"></a>
<a id="tocSupdateloggerdefinitionrequest"></a>
<a id="tocsupdateloggerdefinitionrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_UpdateResourceDefinitionRequest">UpdateResourceDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourcedefinitionrequest"></a>
<a id="schema_UpdateResourceDefinitionRequest"></a>
<a id="tocSupdateresourcedefinitionrequest"></a>
<a id="tocsupdateresourcedefinitionrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_UpdateSubscriptionDefinitionRequest">UpdateSubscriptionDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubscriptiondefinitionrequest"></a>
<a id="schema_UpdateSubscriptionDefinitionRequest"></a>
<a id="tocSupdatesubscriptiondefinitionrequest"></a>
<a id="tocsupdatesubscriptiondefinitionrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_UpdateThingRuntimeConfigurationRequest">UpdateThingRuntimeConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatethingruntimeconfigurationrequest"></a>
<a id="schema_UpdateThingRuntimeConfigurationRequest"></a>
<a id="tocSupdatethingruntimeconfigurationrequest"></a>
<a id="tocsupdatethingruntimeconfigurationrequest"></a>

```json
{
  "TelemetryConfiguration": {
    "Telemetry": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TelemetryConfiguration|object|false|none|none|

<h2 id="tocS_VersionInformation">VersionInformation</h2>
<!-- backwards compatibility -->
<a id="schemaversioninformation"></a>
<a id="schema_VersionInformation"></a>
<a id="tocSversioninformation"></a>
<a id="tocsversioninformation"></a>

```json
{
  "Arn": {},
  "CreationTimestamp": {},
  "Id": {},
  "Version": {}
}
```

Information about a version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Id|object|false|none|none|
|Version|object|false|none|none|
