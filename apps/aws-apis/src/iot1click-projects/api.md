<h1 id="aws-iot-1-click-projects-service">AWS IoT 1-Click Projects Service v2018-05-14</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The AWS IoT 1-Click Projects API Reference

Base URLs:

* <a href="http://projects.iot1click.us-east-1.amazonaws.com">http://projects.iot1click.us-east-1.amazonaws.com</a> - The AWS IoT 1-Click Projects multi-region endpoint

* <a href="https://projects.iot1click.us-east-1.amazonaws.com">https://projects.iot1click.us-east-1.amazonaws.com</a> - The AWS IoT 1-Click Projects multi-region endpoint

* <a href="http://projects.iot1click.cn-north-1.amazonaws.com.cn">http://projects.iot1click.cn-north-1.amazonaws.com.cn</a> - The AWS IoT 1-Click Projects endpoint for China (Beijing) and China (Ningxia)

* <a href="https://projects.iot1click.cn-north-1.amazonaws.com.cn">https://projects.iot1click.cn-north-1.amazonaws.com.cn</a> - The AWS IoT 1-Click Projects endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/iot1click/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-iot-1-click-projects-service-default">Default</h1>

## AssociateDeviceWithPlacement

<a id="opIdAssociateDeviceWithPlacement"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/projects/string/placements/string/devices/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "deviceId": "string"
  }'
```

`PUT /projects/{projectName}/placements/{placementName}/devices/{deviceTemplateName}`

Associates a physical device with a placement.

> Body parameter

```json
{
  "deviceId": "string"
}
```

<h3 id="associatedevicewithplacement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project containing the placement in which to associate the device.|
|placementName|path|string|true|The name of the placement in which to associate the device.|
|deviceTemplateName|path|string|true|The device template name to associate with the device ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» deviceId|body|string|true|The ID of the physical device to be associated with the given placement in the project. Note that a mandatory 4 character prefix is required for all <code>deviceId</code> values.|

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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="associatedevicewithplacement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateDeviceWithPlacementResponse](#schemaassociatedevicewithplacementresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateDeviceFromPlacement

<a id="opIdDisassociateDeviceFromPlacement"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/projects/string/placements/string/devices/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /projects/{projectName}/placements/{placementName}/devices/{deviceTemplateName}`

Removes a physical device from a placement.

<h3 id="disassociatedevicefromplacement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project that contains the placement.|
|placementName|path|string|true|The name of the placement that the device should be removed from.|
|deviceTemplateName|path|string|true|The device ID that should be removed from the placement.|
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

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="disassociatedevicefromplacement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateDeviceFromPlacementResponse](#schemadisassociatedevicefromplacementresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPlacements

<a id="opIdListPlacements"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/projects/string/placements \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects/{projectName}/placements`

Lists the placement(s) of a project.

<h3 id="listplacements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The project containing the placements to be listed.|
|nextToken|query|string|false|The token to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per request. If not set, a default value of 100 is used.|
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
  "placements": {},
  "nextToken": {}
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

> 482 Response

```json
null
```

<h3 id="listplacements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPlacementsResponse](#schemalistplacementsresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePlacement

<a id="opIdCreatePlacement"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/projects/string/placements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "placementName": "string",
    "attributes": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /projects/{projectName}/placements`

Creates an empty placement.

> Body parameter

```json
{
  "placementName": "string",
  "attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createplacement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project in which to create the placement.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» placementName|body|string|true|The name of the placement to be created.|
|» attributes|body|object|false|Optional user-defined key/value pairs providing contextual data (such as location or function) for the placement.|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|none|

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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createplacement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePlacementResponse](#schemacreateplacementresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProjects

<a id="opIdListProjects"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/projects \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects`

Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.

<h3 id="listprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per request. If not set, a default value of 100 is used.|
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
  "projects": {},
  "nextToken": {}
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

<h3 id="listprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProjectsResponse](#schemalistprojectsresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProject

<a id="opIdCreateProject"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "projectName": "string",
    "description": "string",
    "placementTemplate": {
      "defaultAttributes": {
        "property1": "string",
        "property2": "string"
      },
      "deviceTemplates": {
        "property1": {
          "deviceType": {},
          "callbackOverrides": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "deviceType": {},
          "callbackOverrides": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /projects`

Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.

> Body parameter

```json
{
  "projectName": "string",
  "description": "string",
  "placementTemplate": {
    "defaultAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "deviceTemplates": {
      "property1": {
        "deviceType": {},
        "callbackOverrides": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "deviceType": {},
        "callbackOverrides": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createproject-parameters">Parameters</h3>

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
|» projectName|body|string|true|The name of the project to create.|
|» description|body|string|false|An optional description for the project.|
|» placementTemplate|body|object|false|An object defining the template for a placement.|
|» » defaultAttributes|body|object|false|none|
|» » » **additionalProperties**|body|[AttributeDefaultValue](#schemaattributedefaultvalue)|false|none|
|» » deviceTemplates|body|object|false|none|
|» » » **additionalProperties**|body|[DeviceTemplate](#schemadevicetemplate)|false|An object representing a device for a placement template (see <a>PlacementTemplate</a>).|
|» tags|body|object|false|Optional tags (metadata key/value pairs) to be associated with the project. For example, <code>{ {"key1": "value1", "key2": "value2"} }</code>. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

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

> 482 Response

```json
null
```

<h3 id="createproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProjectResponse](#schemacreateprojectresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePlacement

<a id="opIdDescribePlacement"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/projects/string/placements/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects/{projectName}/placements/{placementName}`

Describes a placement in a project.

<h3 id="describeplacement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|placementName|path|string|true|The name of the placement within a project.|
|projectName|path|string|true|The project containing the placement to be described.|
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
  "placement": {
    "projectName": {},
    "placementName": {},
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "createdDate": {},
    "updatedDate": {}
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

> 482 Response

```json
null
```

<h3 id="describeplacement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePlacementResponse](#schemadescribeplacementresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePlacement

<a id="opIdUpdatePlacement"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/projects/string/placements/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "attributes": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /projects/{projectName}/placements/{placementName}`

Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., "").

> Body parameter

```json
{
  "attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updateplacement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|placementName|path|string|true|The name of the placement to update.|
|projectName|path|string|true|The name of the project containing the placement to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» attributes|body|object|false|The user-defined object of attributes used to update the placement. The maximum number of key/value pairs is 50.|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|none|

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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="updateplacement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePlacementResponse](#schemaupdateplacementresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePlacement

<a id="opIdDeletePlacement"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/projects/string/placements/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /projects/{projectName}/placements/{placementName}`

<p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>

<h3 id="deleteplacement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|placementName|path|string|true|The name of the empty placement to delete.|
|projectName|path|string|true|The project containing the empty placement to delete.|
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

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="deleteplacement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePlacementResponse](#schemadeleteplacementresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProject

<a id="opIdDescribeProject"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/projects/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects/{projectName}`

Returns an object describing a project.

<h3 id="describeproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project to be described.|
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
  "project": {
    "arn": {},
    "projectName": {},
    "description": {},
    "createdDate": {},
    "updatedDate": {},
    "placementTemplate": {
      "defaultAttributes": {
        "property1": "string",
        "property2": "string"
      },
      "deviceTemplates": {
        "property1": {
          "deviceType": {},
          "callbackOverrides": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "deviceType": {},
          "callbackOverrides": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
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

> 482 Response

```json
null
```

<h3 id="describeproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProjectResponse](#schemadescribeprojectresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProject

<a id="opIdUpdateProject"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/projects/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "placementTemplate": {
      "defaultAttributes": {
        "property1": "string",
        "property2": "string"
      },
      "deviceTemplates": {
        "property1": {
          "deviceType": {},
          "callbackOverrides": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "deviceType": {},
          "callbackOverrides": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  }'
```

`PUT /projects/{projectName}`

Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>""</code>).

> Body parameter

```json
{
  "description": "string",
  "placementTemplate": {
    "defaultAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "deviceTemplates": {
      "property1": {
        "deviceType": {},
        "callbackOverrides": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "deviceType": {},
        "callbackOverrides": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  }
}
```

<h3 id="updateproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|An optional user-defined description for the project.|
|» placementTemplate|body|object|false|An object defining the template for a placement.|
|» » defaultAttributes|body|object|false|none|
|» » » **additionalProperties**|body|[AttributeDefaultValue](#schemaattributedefaultvalue)|false|none|
|» » deviceTemplates|body|object|false|none|
|» » » **additionalProperties**|body|[DeviceTemplate](#schemadevicetemplate)|false|An object representing a device for a placement template (see <a>PlacementTemplate</a>).|

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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="updateproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProjectResponse](#schemaupdateprojectresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProject

<a id="opIdDeleteProject"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/projects/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /projects/{projectName}`

<p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>

<h3 id="deleteproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the empty project to delete.|
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

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="deleteproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProjectResponse](#schemadeleteprojectresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDevicesInPlacement

<a id="opIdGetDevicesInPlacement"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/projects/string/placements/string/devices \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects/{projectName}/placements/{placementName}/devices`

Returns an object enumerating the devices in a placement.

<h3 id="getdevicesinplacement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project containing the placement.|
|placementName|path|string|true|The name of the placement to get the devices from.|
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
  "devices": {
    "property1": "string",
    "property2": "string"
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

> 482 Response

```json
null
```

<h3 id="getdevicesinplacement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDevicesInPlacementResponse](#schemagetdevicesinplacementresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Lists the tags (metadata key/value pairs) which you have assigned to the resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the resource whose tags you want to list.|
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

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://iot1click-projects.us-east-1.amazonaws.com/tags/string \
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

`POST /tags/{resourceArn}`

Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.

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
|resourceArn|path|string|true|The ARN of the resouce for which tag(s) should be added or modified.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The new or modifying tag(s) for the resource. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

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

> 482 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://iot1click-projects.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes one or more tags (metadata key/value pairs) from a resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the resource whose tag you want to remove.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The keys of those tags which you want to remove.|
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

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateDeviceWithPlacementResponse">AssociateDeviceWithPlacementResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedevicewithplacementresponse"></a>
<a id="schema_AssociateDeviceWithPlacementResponse"></a>
<a id="tocSassociatedevicewithplacementresponse"></a>
<a id="tocsassociatedevicewithplacementresponse"></a>

```json
{}
```

<h2 id="tocS_InternalFailureException">InternalFailureException</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailureexception"></a>
<a id="schema_InternalFailureException"></a>
<a id="tocSinternalfailureexception"></a>
<a id="tocsinternalfailureexception"></a>

```json
null
```

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_ResourceConflictException">ResourceConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceconflictexception"></a>
<a id="schema_ResourceConflictException"></a>
<a id="tocSresourceconflictexception"></a>
<a id="tocsresourceconflictexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_CreatePlacementResponse">CreatePlacementResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateplacementresponse"></a>
<a id="schema_CreatePlacementResponse"></a>
<a id="tocScreateplacementresponse"></a>
<a id="tocscreateplacementresponse"></a>

```json
{}
```

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
"string"
```

<h2 id="tocS_CreateProjectResponse">CreateProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectresponse"></a>
<a id="schema_CreateProjectResponse"></a>
<a id="tocScreateprojectresponse"></a>
<a id="tocscreateprojectresponse"></a>

```json
{}
```

<h2 id="tocS_DefaultPlacementAttributeMap">DefaultPlacementAttributeMap</h2>
<!-- backwards compatibility -->
<a id="schemadefaultplacementattributemap"></a>
<a id="schema_DefaultPlacementAttributeMap"></a>
<a id="tocSdefaultplacementattributemap"></a>
<a id="tocsdefaultplacementattributemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeDefaultValue](#schemaattributedefaultvalue)|false|none|none|

<h2 id="tocS_DeviceTemplateMap">DeviceTemplateMap</h2>
<!-- backwards compatibility -->
<a id="schemadevicetemplatemap"></a>
<a id="schema_DeviceTemplateMap"></a>
<a id="tocSdevicetemplatemap"></a>
<a id="tocsdevicetemplatemap"></a>

```json
{
  "property1": {
    "deviceType": {},
    "callbackOverrides": {
      "property1": "string",
      "property2": "string"
    }
  },
  "property2": {
    "deviceType": {},
    "callbackOverrides": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DeviceTemplate](#schemadevicetemplate)|false|none|An object representing a device for a placement template (see <a>PlacementTemplate</a>).|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_DeletePlacementResponse">DeletePlacementResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteplacementresponse"></a>
<a id="schema_DeletePlacementResponse"></a>
<a id="tocSdeleteplacementresponse"></a>
<a id="tocsdeleteplacementresponse"></a>

```json
{}
```

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_DeleteProjectResponse">DeleteProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectresponse"></a>
<a id="schema_DeleteProjectResponse"></a>
<a id="tocSdeleteprojectresponse"></a>
<a id="tocsdeleteprojectresponse"></a>

```json
{}
```

<h2 id="tocS_DescribePlacementResponse">DescribePlacementResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeplacementresponse"></a>
<a id="schema_DescribePlacementResponse"></a>
<a id="tocSdescribeplacementresponse"></a>
<a id="tocsdescribeplacementresponse"></a>

```json
{
  "placement": {
    "projectName": {},
    "placementName": {},
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "createdDate": {},
    "updatedDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placement|object|true|none|none|

<h2 id="tocS_DescribeProjectResponse">DescribeProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprojectresponse"></a>
<a id="schema_DescribeProjectResponse"></a>
<a id="tocSdescribeprojectresponse"></a>
<a id="tocsdescribeprojectresponse"></a>

```json
{
  "project": {
    "arn": {},
    "projectName": {},
    "description": {},
    "createdDate": {},
    "updatedDate": {},
    "placementTemplate": {
      "defaultAttributes": {
        "property1": "string",
        "property2": "string"
      },
      "deviceTemplates": {
        "property1": {
          "deviceType": {},
          "callbackOverrides": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "deviceType": {},
          "callbackOverrides": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|object|true|none|none|

<h2 id="tocS_DisassociateDeviceFromPlacementResponse">DisassociateDeviceFromPlacementResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatedevicefromplacementresponse"></a>
<a id="schema_DisassociateDeviceFromPlacementResponse"></a>
<a id="tocSdisassociatedevicefromplacementresponse"></a>
<a id="tocsdisassociatedevicefromplacementresponse"></a>

```json
{}
```

<h2 id="tocS_GetDevicesInPlacementResponse">GetDevicesInPlacementResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicesinplacementresponse"></a>
<a id="schema_GetDevicesInPlacementResponse"></a>
<a id="tocSgetdevicesinplacementresponse"></a>
<a id="tocsgetdevicesinplacementresponse"></a>

```json
{
  "devices": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|object|true|none|none|

<h2 id="tocS_ListPlacementsResponse">ListPlacementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistplacementsresponse"></a>
<a id="schema_ListPlacementsResponse"></a>
<a id="tocSlistplacementsresponse"></a>
<a id="tocslistplacementsresponse"></a>

```json
{
  "placements": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placements|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListProjectsResponse">ListProjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsresponse"></a>
<a id="schema_ListProjectsResponse"></a>
<a id="tocSlistprojectsresponse"></a>
<a id="tocslistprojectsresponse"></a>

```json
{
  "projects": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects|object|true|none|none|
|nextToken|object|false|none|none|

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
|tags|object|false|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdatePlacementResponse">UpdatePlacementResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateplacementresponse"></a>
<a id="schema_UpdatePlacementResponse"></a>
<a id="tocSupdateplacementresponse"></a>
<a id="tocsupdateplacementresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateProjectResponse">UpdateProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectresponse"></a>
<a id="schema_UpdateProjectResponse"></a>
<a id="tocSupdateprojectresponse"></a>
<a id="tocsupdateprojectresponse"></a>

```json
{}
```

<h2 id="tocS_ProjectName">ProjectName</h2>
<!-- backwards compatibility -->
<a id="schemaprojectname"></a>
<a id="schema_ProjectName"></a>
<a id="tocSprojectname"></a>
<a id="tocsprojectname"></a>

```json
"string"
```

<h2 id="tocS_PlacementName">PlacementName</h2>
<!-- backwards compatibility -->
<a id="schemaplacementname"></a>
<a id="schema_PlacementName"></a>
<a id="tocSplacementname"></a>
<a id="tocsplacementname"></a>

```json
"string"
```

<h2 id="tocS_DeviceId">DeviceId</h2>
<!-- backwards compatibility -->
<a id="schemadeviceid"></a>
<a id="schema_DeviceId"></a>
<a id="tocSdeviceid"></a>
<a id="tocsdeviceid"></a>

```json
"string"
```

<h2 id="tocS_DeviceTemplateName">DeviceTemplateName</h2>
<!-- backwards compatibility -->
<a id="schemadevicetemplatename"></a>
<a id="schema_DeviceTemplateName"></a>
<a id="tocSdevicetemplatename"></a>
<a id="tocsdevicetemplatename"></a>

```json
"string"
```

<h2 id="tocS_AssociateDeviceWithPlacementRequest">AssociateDeviceWithPlacementRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedevicewithplacementrequest"></a>
<a id="schema_AssociateDeviceWithPlacementRequest"></a>
<a id="tocSassociatedevicewithplacementrequest"></a>
<a id="tocsassociatedevicewithplacementrequest"></a>

```json
{
  "deviceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|object|true|none|none|

<h2 id="tocS_AttributeDefaultValue">AttributeDefaultValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributedefaultvalue"></a>
<a id="schema_AttributeDefaultValue"></a>
<a id="tocSattributedefaultvalue"></a>
<a id="tocsattributedefaultvalue"></a>

```json
"string"
```

<h2 id="tocS_AttributeName">AttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaattributename"></a>
<a id="schema_AttributeName"></a>
<a id="tocSattributename"></a>
<a id="tocsattributename"></a>

```json
"string"
```

<h2 id="tocS_PlacementAttributeMap">PlacementAttributeMap</h2>
<!-- backwards compatibility -->
<a id="schemaplacementattributemap"></a>
<a id="schema_PlacementAttributeMap"></a>
<a id="tocSplacementattributemap"></a>
<a id="tocsplacementattributemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeValue](#schemaattributevalue)|false|none|none|

<h2 id="tocS_CreatePlacementRequest">CreatePlacementRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateplacementrequest"></a>
<a id="schema_CreatePlacementRequest"></a>
<a id="tocScreateplacementrequest"></a>
<a id="tocscreateplacementrequest"></a>

```json
{
  "placementName": {},
  "attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placementName|object|true|none|none|
|attributes|object|false|none|none|

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_PlacementTemplate">PlacementTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaplacementtemplate"></a>
<a id="schema_PlacementTemplate"></a>
<a id="tocSplacementtemplate"></a>
<a id="tocsplacementtemplate"></a>

```json
{
  "defaultAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "deviceTemplates": {
    "property1": {
      "deviceType": {},
      "callbackOverrides": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "deviceType": {},
      "callbackOverrides": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

An object defining the template for a placement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultAttributes|object|false|none|none|
|deviceTemplates|object|false|none|none|

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_CreateProjectRequest">CreateProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectrequest"></a>
<a id="schema_CreateProjectRequest"></a>
<a id="tocScreateprojectrequest"></a>
<a id="tocscreateprojectrequest"></a>

```json
{
  "projectName": {},
  "description": {},
  "placementTemplate": {
    "defaultAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "deviceTemplates": {
      "property1": {
        "deviceType": {},
        "callbackOverrides": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "deviceType": {},
        "callbackOverrides": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectName|object|true|none|none|
|description|object|false|none|none|
|placementTemplate|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeletePlacementRequest">DeletePlacementRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteplacementrequest"></a>
<a id="schema_DeletePlacementRequest"></a>
<a id="tocSdeleteplacementrequest"></a>
<a id="tocsdeleteplacementrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteProjectRequest">DeleteProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectrequest"></a>
<a id="schema_DeleteProjectRequest"></a>
<a id="tocSdeleteprojectrequest"></a>
<a id="tocsdeleteprojectrequest"></a>

```json
{}
```

<h2 id="tocS_DescribePlacementRequest">DescribePlacementRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeplacementrequest"></a>
<a id="schema_DescribePlacementRequest"></a>
<a id="tocSdescribeplacementrequest"></a>
<a id="tocsdescribeplacementrequest"></a>

```json
{}
```

<h2 id="tocS_PlacementDescription">PlacementDescription</h2>
<!-- backwards compatibility -->
<a id="schemaplacementdescription"></a>
<a id="schema_PlacementDescription"></a>
<a id="tocSplacementdescription"></a>
<a id="tocsplacementdescription"></a>

```json
{
  "projectName": {},
  "placementName": {},
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "createdDate": {},
  "updatedDate": {}
}
```

An object describing a project's placement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectName|object|true|none|none|
|placementName|object|true|none|none|
|attributes|object|true|none|none|
|createdDate|object|true|none|none|
|updatedDate|object|true|none|none|

<h2 id="tocS_DescribeProjectRequest">DescribeProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprojectrequest"></a>
<a id="schema_DescribeProjectRequest"></a>
<a id="tocSdescribeprojectrequest"></a>
<a id="tocsdescribeprojectrequest"></a>

```json
{}
```

<h2 id="tocS_ProjectDescription">ProjectDescription</h2>
<!-- backwards compatibility -->
<a id="schemaprojectdescription"></a>
<a id="schema_ProjectDescription"></a>
<a id="tocSprojectdescription"></a>
<a id="tocsprojectdescription"></a>

```json
{
  "arn": {},
  "projectName": {},
  "description": {},
  "createdDate": {},
  "updatedDate": {},
  "placementTemplate": {
    "defaultAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "deviceTemplates": {
      "property1": {
        "deviceType": {},
        "callbackOverrides": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "deviceType": {},
        "callbackOverrides": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

An object providing detailed information for a particular project associated with an AWS account and region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|projectName|object|true|none|none|
|description|object|false|none|none|
|createdDate|object|true|none|none|
|updatedDate|object|true|none|none|
|placementTemplate|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeviceCallbackKey">DeviceCallbackKey</h2>
<!-- backwards compatibility -->
<a id="schemadevicecallbackkey"></a>
<a id="schema_DeviceCallbackKey"></a>
<a id="tocSdevicecallbackkey"></a>
<a id="tocsdevicecallbackkey"></a>

```json
"string"
```

<h2 id="tocS_DeviceCallbackValue">DeviceCallbackValue</h2>
<!-- backwards compatibility -->
<a id="schemadevicecallbackvalue"></a>
<a id="schema_DeviceCallbackValue"></a>
<a id="tocSdevicecallbackvalue"></a>
<a id="tocsdevicecallbackvalue"></a>

```json
"string"
```

<h2 id="tocS_DeviceCallbackOverrideMap">DeviceCallbackOverrideMap</h2>
<!-- backwards compatibility -->
<a id="schemadevicecallbackoverridemap"></a>
<a id="schema_DeviceCallbackOverrideMap"></a>
<a id="tocSdevicecallbackoverridemap"></a>
<a id="tocsdevicecallbackoverridemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DeviceCallbackValue](#schemadevicecallbackvalue)|false|none|none|

<h2 id="tocS_DeviceMap">DeviceMap</h2>
<!-- backwards compatibility -->
<a id="schemadevicemap"></a>
<a id="schema_DeviceMap"></a>
<a id="tocSdevicemap"></a>
<a id="tocsdevicemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DeviceId](#schemadeviceid)|false|none|none|

<h2 id="tocS_DeviceType">DeviceType</h2>
<!-- backwards compatibility -->
<a id="schemadevicetype"></a>
<a id="schema_DeviceType"></a>
<a id="tocSdevicetype"></a>
<a id="tocsdevicetype"></a>

```json
"string"
```

<h2 id="tocS_DeviceTemplate">DeviceTemplate</h2>
<!-- backwards compatibility -->
<a id="schemadevicetemplate"></a>
<a id="schema_DeviceTemplate"></a>
<a id="tocSdevicetemplate"></a>
<a id="tocsdevicetemplate"></a>

```json
{
  "deviceType": {},
  "callbackOverrides": {
    "property1": "string",
    "property2": "string"
  }
}
```

An object representing a device for a placement template (see <a>PlacementTemplate</a>).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceType|object|false|none|none|
|callbackOverrides|object|false|none|none|

<h2 id="tocS_DisassociateDeviceFromPlacementRequest">DisassociateDeviceFromPlacementRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatedevicefromplacementrequest"></a>
<a id="schema_DisassociateDeviceFromPlacementRequest"></a>
<a id="tocSdisassociatedevicefromplacementrequest"></a>
<a id="tocsdisassociatedevicefromplacementrequest"></a>

```json
{}
```

<h2 id="tocS_GetDevicesInPlacementRequest">GetDevicesInPlacementRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicesinplacementrequest"></a>
<a id="schema_GetDevicesInPlacementRequest"></a>
<a id="tocSgetdevicesinplacementrequest"></a>
<a id="tocsgetdevicesinplacementrequest"></a>

```json
{}
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListPlacementsRequest">ListPlacementsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistplacementsrequest"></a>
<a id="schema_ListPlacementsRequest"></a>
<a id="tocSlistplacementsrequest"></a>
<a id="tocslistplacementsrequest"></a>

```json
{}
```

<h2 id="tocS_PlacementSummaryList">PlacementSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaplacementsummarylist"></a>
<a id="schema_PlacementSummaryList"></a>
<a id="tocSplacementsummarylist"></a>
<a id="tocsplacementsummarylist"></a>

```json
[
  {
    "projectName": {},
    "placementName": {},
    "createdDate": {},
    "updatedDate": {}
  }
]
```

<h2 id="tocS_ListProjectsRequest">ListProjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsrequest"></a>
<a id="schema_ListProjectsRequest"></a>
<a id="tocSlistprojectsrequest"></a>
<a id="tocslistprojectsrequest"></a>

```json
{}
```

<h2 id="tocS_ProjectSummaryList">ProjectSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsummarylist"></a>
<a id="schema_ProjectSummaryList"></a>
<a id="tocSprojectsummarylist"></a>
<a id="tocsprojectsummarylist"></a>

```json
[
  {
    "arn": {},
    "projectName": {},
    "createdDate": {},
    "updatedDate": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ProjectArn">ProjectArn</h2>
<!-- backwards compatibility -->
<a id="schemaprojectarn"></a>
<a id="schema_ProjectArn"></a>
<a id="tocSprojectarn"></a>
<a id="tocsprojectarn"></a>

```json
"string"
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

<h2 id="tocS_Time">Time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_PlacementSummary">PlacementSummary</h2>
<!-- backwards compatibility -->
<a id="schemaplacementsummary"></a>
<a id="schema_PlacementSummary"></a>
<a id="tocSplacementsummary"></a>
<a id="tocsplacementsummary"></a>

```json
{
  "projectName": {},
  "placementName": {},
  "createdDate": {},
  "updatedDate": {}
}
```

An object providing summary information for a particular placement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectName|object|true|none|none|
|placementName|object|true|none|none|
|createdDate|object|true|none|none|
|updatedDate|object|true|none|none|

<h2 id="tocS_ProjectSummary">ProjectSummary</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsummary"></a>
<a id="schema_ProjectSummary"></a>
<a id="tocSprojectsummary"></a>
<a id="tocsprojectsummary"></a>

```json
{
  "arn": {},
  "projectName": {},
  "createdDate": {},
  "updatedDate": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

An object providing summary information for a particular project for an associated AWS account and region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|projectName|object|true|none|none|
|createdDate|object|true|none|none|
|updatedDate|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdatePlacementRequest">UpdatePlacementRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateplacementrequest"></a>
<a id="schema_UpdatePlacementRequest"></a>
<a id="tocSupdateplacementrequest"></a>
<a id="tocsupdateplacementrequest"></a>

```json
{
  "attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|

<h2 id="tocS_UpdateProjectRequest">UpdateProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectrequest"></a>
<a id="schema_UpdateProjectRequest"></a>
<a id="tocSupdateprojectrequest"></a>
<a id="tocsupdateprojectrequest"></a>

```json
{
  "description": {},
  "placementTemplate": {
    "defaultAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "deviceTemplates": {
      "property1": {
        "deviceType": {},
        "callbackOverrides": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "deviceType": {},
        "callbackOverrides": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|placementTemplate|object|false|none|none|
