<h1 id="aws-ground-station">AWS Ground Station v2019-05-23</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to the AWS Ground Station API Reference. AWS Ground Station is a fully managed service that enables you to control satellite communications, downlink and process satellite data, and scale your satellite operations efficiently and cost-effectively without having to build or manage your own ground station infrastructure.

Base URLs:

* <a href="http://groundstation.us-east-1.amazonaws.com">http://groundstation.us-east-1.amazonaws.com</a> - The AWS Ground Station multi-region endpoint

* <a href="https://groundstation.us-east-1.amazonaws.com">https://groundstation.us-east-1.amazonaws.com</a> - The AWS Ground Station multi-region endpoint

* <a href="http://groundstation.cn-north-1.amazonaws.com.cn">http://groundstation.cn-north-1.amazonaws.com.cn</a> - The AWS Ground Station endpoint for China (Beijing) and China (Ningxia)

* <a href="https://groundstation.cn-north-1.amazonaws.com.cn">https://groundstation.cn-north-1.amazonaws.com.cn</a> - The AWS Ground Station endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/groundstation/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-ground-station-default">Default</h1>

## DescribeContact

<a id="opIdDescribeContact"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/contact/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /contact/{contactId}`

Describes an existing contact.

<h3 id="describecontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contactId|path|string|true|UUID of a contact.|
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
  "contactId": {},
  "contactStatus": {},
  "dataflowList": {},
  "endTime": {},
  "errorMessage": {},
  "groundStation": {},
  "maximumElevation": {
    "unit": {},
    "value": {}
  },
  "missionProfileArn": {},
  "postPassEndTime": {},
  "prePassStartTime": {},
  "region": {},
  "satelliteArn": {},
  "startTime": {},
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

<h3 id="describecontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeContactResponse](#schemadescribecontactresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelContact

<a id="opIdCancelContact"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/contact/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /contact/{contactId}`

Cancels a contact with a specified contact ID.

<h3 id="cancelcontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contactId|path|string|true|UUID of a contact.|
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
  "contactId": {}
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

<h3 id="cancelcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactIdResponse](#schemacontactidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConfigs

<a id="opIdListConfigs"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /config`

Returns a list of <code>Config</code> objects.

<h3 id="listconfigs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Maximum number of <code>Configs</code> returned.|
|nextToken|query|string|false|Next token returned in the request of a previous <code>ListConfigs</code> call. Used to get the next page of results.|
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
  "configList": {},
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

<h3 id="listconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConfigsResponse](#schemalistconfigsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConfig

<a id="opIdCreateConfig"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "configData": {
      "antennaDownlinkConfig": {
        "spectrumConfig": {
          "bandwidth": {
            "units": {},
            "value": {}
          },
          "centerFrequency": {
            "units": {},
            "value": {}
          },
          "polarization": {}
        }
      },
      "antennaDownlinkDemodDecodeConfig": {
        "decodeConfig": {
          "unvalidatedJSON": {}
        },
        "demodulationConfig": {
          "unvalidatedJSON": {}
        },
        "spectrumConfig": {
          "bandwidth": {
            "units": {},
            "value": {}
          },
          "centerFrequency": {
            "units": {},
            "value": {}
          },
          "polarization": {}
        }
      },
      "antennaUplinkConfig": {
        "spectrumConfig": {
          "centerFrequency": {
            "units": {},
            "value": {}
          },
          "polarization": {}
        },
        "targetEirp": {
          "units": {},
          "value": {}
        },
        "transmitDisabled": {}
      },
      "dataflowEndpointConfig": {
        "dataflowEndpointName": {},
        "dataflowEndpointRegion": {}
      },
      "s3RecordingConfig": {
        "bucketArn": {},
        "prefix": {},
        "roleArn": {}
      },
      "trackingConfig": {
        "autotrack": {}
      },
      "uplinkEchoConfig": {
        "antennaUplinkConfigArn": {},
        "enabled": {}
      }
    },
    "name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /config`

<p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>

> Body parameter

```json
{
  "configData": {
    "antennaDownlinkConfig": {
      "spectrumConfig": {
        "bandwidth": {
          "units": {},
          "value": {}
        },
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      }
    },
    "antennaDownlinkDemodDecodeConfig": {
      "decodeConfig": {
        "unvalidatedJSON": {}
      },
      "demodulationConfig": {
        "unvalidatedJSON": {}
      },
      "spectrumConfig": {
        "bandwidth": {
          "units": {},
          "value": {}
        },
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      }
    },
    "antennaUplinkConfig": {
      "spectrumConfig": {
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      },
      "targetEirp": {
        "units": {},
        "value": {}
      },
      "transmitDisabled": {}
    },
    "dataflowEndpointConfig": {
      "dataflowEndpointName": {},
      "dataflowEndpointRegion": {}
    },
    "s3RecordingConfig": {
      "bucketArn": {},
      "prefix": {},
      "roleArn": {}
    },
    "trackingConfig": {
      "autotrack": {}
    },
    "uplinkEchoConfig": {
      "antennaUplinkConfigArn": {},
      "enabled": {}
    }
  },
  "name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createconfig-parameters">Parameters</h3>

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
|» configData|body|object|true|<p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>|
|» » antennaDownlinkConfig|body|object|false|none|
|» » » spectrumConfig|body|object|true|none|
|» » » » bandwidth|body|object|true|none|
|» » » » » units|body|object|true|none|
|» » » » » value|body|object|true|none|
|» » » » centerFrequency|body|object|true|none|
|» » » » » units|body|object|true|none|
|» » » » » value|body|object|true|none|
|» » » » polarization|body|object|false|none|
|» » antennaDownlinkDemodDecodeConfig|body|object|false|none|
|» » » decodeConfig|body|object|true|none|
|» » » » unvalidatedJSON|body|object|true|none|
|» » » demodulationConfig|body|object|true|none|
|» » » » unvalidatedJSON|body|object|true|none|
|» » » spectrumConfig|body|object|true|none|
|» » » » bandwidth|body|object|true|none|
|» » » » » units|body|object|true|none|
|» » » » » value|body|object|true|none|
|» » » » centerFrequency|body|object|true|none|
|» » » » » units|body|object|true|none|
|» » » » » value|body|object|true|none|
|» » » » polarization|body|object|false|none|
|» » antennaUplinkConfig|body|object|false|none|
|» » » spectrumConfig|body|object|true|none|
|» » » » centerFrequency|body|object|true|none|
|» » » » » units|body|object|true|none|
|» » » » » value|body|object|true|none|
|» » » » polarization|body|object|false|none|
|» » » targetEirp|body|object|true|none|
|» » » » units|body|object|true|none|
|» » » » value|body|object|true|none|
|» » » transmitDisabled|body|object|false|none|
|» » dataflowEndpointConfig|body|object|false|none|
|» » » dataflowEndpointName|body|object|true|none|
|» » » dataflowEndpointRegion|body|object|false|none|
|» » s3RecordingConfig|body|object|false|none|
|» » » bucketArn|body|object|true|none|
|» » » prefix|body|object|false|none|
|» » » roleArn|body|object|true|none|
|» » trackingConfig|body|object|false|none|
|» » » autotrack|body|object|true|none|
|» » uplinkEchoConfig|body|object|false|none|
|» » » antennaUplinkConfigArn|body|object|true|none|
|» » » enabled|body|object|true|none|
|» name|body|string|true|Name of a <code>Config</code>.|
|» tags|body|object|false|Tags assigned to a <code>Config</code>.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 200 Response

```json
{
  "configArn": {},
  "configId": {},
  "configType": {}
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

> 483 Response

```json
null
```

<h3 id="createconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigIdResponse](#schemaconfigidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDataflowEndpointGroups

<a id="opIdListDataflowEndpointGroups"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/dataflowEndpointGroup \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dataflowEndpointGroup`

Returns a list of <code>DataflowEndpoint</code> groups.

<h3 id="listdataflowendpointgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Maximum number of dataflow endpoint groups returned.|
|nextToken|query|string|false|Next token returned in the request of a previous <code>ListDataflowEndpointGroups</code> call. Used to get the next page of results.|
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
  "dataflowEndpointGroupList": {},
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

<h3 id="listdataflowendpointgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDataflowEndpointGroupsResponse](#schemalistdataflowendpointgroupsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataflowEndpointGroup

<a id="opIdCreateDataflowEndpointGroup"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/dataflowEndpointGroup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "contactPostPassDurationSeconds": 120,
    "contactPrePassDurationSeconds": 120,
    "endpointDetails": [
      {
        "awsGroundStationAgentEndpoint": {
          "agentStatus": {},
          "auditResults": {},
          "egressAddress": {
            "mtu": {},
            "socketAddress": {
              "name": {},
              "port": {}
            }
          },
          "ingressAddress": {
            "mtu": {},
            "socketAddress": {
              "name": {},
              "portRange": {
                "maximum": {},
                "minimum": {}
              }
            }
          },
          "name": {}
        },
        "endpoint": {
          "address": {
            "name": {},
            "port": {}
          },
          "mtu": {},
          "name": {},
          "status": {}
        },
        "healthReasons": {},
        "healthStatus": {},
        "securityDetails": {
          "roleArn": {},
          "securityGroupIds": {},
          "subnetIds": {}
        }
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /dataflowEndpointGroup`

<p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>

> Body parameter

```json
{
  "contactPostPassDurationSeconds": 120,
  "contactPrePassDurationSeconds": 120,
  "endpointDetails": [
    {
      "awsGroundStationAgentEndpoint": {
        "agentStatus": {},
        "auditResults": {},
        "egressAddress": {
          "mtu": {},
          "socketAddress": {
            "name": {},
            "port": {}
          }
        },
        "ingressAddress": {
          "mtu": {},
          "socketAddress": {
            "name": {},
            "portRange": {
              "maximum": {},
              "minimum": {}
            }
          }
        },
        "name": {}
      },
      "endpoint": {
        "address": {
          "name": {},
          "port": {}
        },
        "mtu": {},
        "name": {},
        "status": {}
      },
      "healthReasons": {},
      "healthStatus": {},
      "securityDetails": {
        "roleArn": {},
        "securityGroupIds": {},
        "subnetIds": {}
      }
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createdataflowendpointgroup-parameters">Parameters</h3>

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
|» contactPostPassDurationSeconds|body|integer|false|Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a <code>POSTPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>POSTPASS</code> state.|
|» contactPrePassDurationSeconds|body|integer|false|Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a <code>PREPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>PREPASS</code> state.|
|» endpointDetails|body|[[EndpointDetails](#schemaendpointdetails)]|true|Endpoint details of each endpoint in the dataflow endpoint group.|
|» tags|body|object|false|Tags of a dataflow endpoint group.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 200 Response

```json
{
  "dataflowEndpointGroupId": {}
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

<h3 id="createdataflowendpointgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DataflowEndpointGroupIdResponse](#schemadataflowendpointgroupidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEphemeris

<a id="opIdCreateEphemeris"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/ephemeris \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "ephemeris": {
      "oem": {
        "oemData": {},
        "s3Object": {
          "bucket": {},
          "key": {},
          "version": {}
        }
      },
      "tle": {
        "s3Object": {
          "bucket": {},
          "key": {},
          "version": {}
        },
        "tleData": {}
      }
    },
    "expirationTime": "1970-01-01T00:00:00Z",
    "kmsKeyArn": "string",
    "name": "string",
    "priority": 1,
    "satelliteId": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /ephemeris`

Creates an Ephemeris with the specified <code>EphemerisData</code>.

> Body parameter

```json
{
  "enabled": true,
  "ephemeris": {
    "oem": {
      "oemData": {},
      "s3Object": {
        "bucket": {},
        "key": {},
        "version": {}
      }
    },
    "tle": {
      "s3Object": {
        "bucket": {},
        "key": {},
        "version": {}
      },
      "tleData": {}
    }
  },
  "expirationTime": "1970-01-01T00:00:00Z",
  "kmsKeyArn": "string",
  "name": "string",
  "priority": 1,
  "satelliteId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createephemeris-parameters">Parameters</h3>

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
|» enabled|body|boolean|false|<p>Whether to set the ephemeris status to <code>ENABLED</code> after validation.</p> <p>Setting this to false will set the ephemeris status to <code>DISABLED</code> after validation.</p>|
|» ephemeris|body|object|false|Ephemeris data.|
|» » oem|body|[OEMEphemeris](#schemaoemephemeris)|false|Ephemeris data in Orbit Ephemeris Message (OEM) format.|
|» » tle|body|[TLEEphemeris](#schematleephemeris)|false|Two-line element set (TLE) ephemeris.|
|» expirationTime|body|string(date-time)|false|An overall expiration time for the ephemeris in UTC, after which it will become <code>EXPIRED</code>.|
|» kmsKeyArn|body|string|false|The ARN of a KMS key used to encrypt the ephemeris in Ground Station.|
|» name|body|string|true|A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.|
|» priority|body|integer|false|<p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p> <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p> <p>Priority must be 1 or greater</p>|
|» satelliteId|body|string|true|AWS Ground Station satellite ID for this ephemeris.|
|» tags|body|object|false|Tags assigned to an ephemeris.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 200 Response

```json
{
  "ephemerisId": {}
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

<h3 id="createephemeris-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EphemerisIdResponse](#schemaephemerisidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMissionProfiles

<a id="opIdListMissionProfiles"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/missionprofile \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /missionprofile`

Returns a list of mission profiles.

<h3 id="listmissionprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Maximum number of mission profiles returned.|
|nextToken|query|string|false|Next token returned in the request of a previous <code>ListMissionProfiles</code> call. Used to get the next page of results.|
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
  "missionProfileList": {},
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

<h3 id="listmissionprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMissionProfilesResponse](#schemalistmissionprofilesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMissionProfile

<a id="opIdCreateMissionProfile"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/missionprofile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "contactPostPassDurationSeconds": 0,
    "contactPrePassDurationSeconds": 0,
    "dataflowEdges": [
      [
        "string",
        "string"
      ]
    ],
    "minimumViableContactDurationSeconds": 1,
    "name": "string",
    "streamsKmsKey": {
      "kmsAliasArn": {},
      "kmsKeyArn": {}
    },
    "streamsKmsRole": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "trackingConfigArn": "string"
  }'
```

`POST /missionprofile`

<p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>

> Body parameter

```json
{
  "contactPostPassDurationSeconds": 0,
  "contactPrePassDurationSeconds": 0,
  "dataflowEdges": [
    [
      "string",
      "string"
    ]
  ],
  "minimumViableContactDurationSeconds": 1,
  "name": "string",
  "streamsKmsKey": {
    "kmsAliasArn": {},
    "kmsKeyArn": {}
  },
  "streamsKmsRole": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "trackingConfigArn": "string"
}
```

<h3 id="createmissionprofile-parameters">Parameters</h3>

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
|» contactPostPassDurationSeconds|body|integer|false|Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.|
|» contactPrePassDurationSeconds|body|integer|false|Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.|
|» dataflowEdges|body|[[DataflowEdge](#schemadataflowedge)]|true|A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.|
|» minimumViableContactDurationSeconds|body|integer|true|Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.|
|» name|body|string|true|Name of a mission profile.|
|» streamsKmsKey|body|object|false|AWS Key Management Service (KMS) Key.|
|» » kmsAliasArn|body|object|false|none|
|» » kmsKeyArn|body|object|false|none|
|» streamsKmsRole|body|string|false|Role to use for encrypting streams with KMS key.|
|» tags|body|object|false|Tags assigned to a mission profile.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» trackingConfigArn|body|string|true|ARN of a tracking <code>Config</code>.|

> Example responses

> 200 Response

```json
{
  "missionProfileId": {}
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

<h3 id="createmissionprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MissionProfileIdResponse](#schemamissionprofileidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConfig

<a id="opIdGetConfig"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/config/antenna-downlink/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /config/{configType}/{configId}`

<p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>

<h3 id="getconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|path|string|true|UUID of a <code>Config</code>.|
|configType|path|string|true|Type of a <code>Config</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|configType|antenna-downlink|
|configType|antenna-downlink-demod-decode|
|configType|antenna-uplink|
|configType|dataflow-endpoint|
|configType|tracking|
|configType|uplink-echo|
|configType|s3-recording|

> Example responses

> 200 Response

```json
{
  "configArn": {},
  "configData": {
    "antennaDownlinkConfig": {
      "spectrumConfig": {
        "bandwidth": {
          "units": {},
          "value": {}
        },
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      }
    },
    "antennaDownlinkDemodDecodeConfig": {
      "decodeConfig": {
        "unvalidatedJSON": {}
      },
      "demodulationConfig": {
        "unvalidatedJSON": {}
      },
      "spectrumConfig": {
        "bandwidth": {
          "units": {},
          "value": {}
        },
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      }
    },
    "antennaUplinkConfig": {
      "spectrumConfig": {
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      },
      "targetEirp": {
        "units": {},
        "value": {}
      },
      "transmitDisabled": {}
    },
    "dataflowEndpointConfig": {
      "dataflowEndpointName": {},
      "dataflowEndpointRegion": {}
    },
    "s3RecordingConfig": {
      "bucketArn": {},
      "prefix": {},
      "roleArn": {}
    },
    "trackingConfig": {
      "autotrack": {}
    },
    "uplinkEchoConfig": {
      "antennaUplinkConfigArn": {},
      "enabled": {}
    }
  },
  "configId": {},
  "configType": {},
  "name": {},
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

<h3 id="getconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConfigResponse](#schemagetconfigresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConfig

<a id="opIdUpdateConfig"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/config/antenna-downlink/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "configData": {
      "antennaDownlinkConfig": {
        "spectrumConfig": {
          "bandwidth": {
            "units": {},
            "value": {}
          },
          "centerFrequency": {
            "units": {},
            "value": {}
          },
          "polarization": {}
        }
      },
      "antennaDownlinkDemodDecodeConfig": {
        "decodeConfig": {
          "unvalidatedJSON": {}
        },
        "demodulationConfig": {
          "unvalidatedJSON": {}
        },
        "spectrumConfig": {
          "bandwidth": {
            "units": {},
            "value": {}
          },
          "centerFrequency": {
            "units": {},
            "value": {}
          },
          "polarization": {}
        }
      },
      "antennaUplinkConfig": {
        "spectrumConfig": {
          "centerFrequency": {
            "units": {},
            "value": {}
          },
          "polarization": {}
        },
        "targetEirp": {
          "units": {},
          "value": {}
        },
        "transmitDisabled": {}
      },
      "dataflowEndpointConfig": {
        "dataflowEndpointName": {},
        "dataflowEndpointRegion": {}
      },
      "s3RecordingConfig": {
        "bucketArn": {},
        "prefix": {},
        "roleArn": {}
      },
      "trackingConfig": {
        "autotrack": {}
      },
      "uplinkEchoConfig": {
        "antennaUplinkConfigArn": {},
        "enabled": {}
      }
    },
    "name": "string"
  }'
```

`PUT /config/{configType}/{configId}`

<p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>

> Body parameter

```json
{
  "configData": {
    "antennaDownlinkConfig": {
      "spectrumConfig": {
        "bandwidth": {
          "units": {},
          "value": {}
        },
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      }
    },
    "antennaDownlinkDemodDecodeConfig": {
      "decodeConfig": {
        "unvalidatedJSON": {}
      },
      "demodulationConfig": {
        "unvalidatedJSON": {}
      },
      "spectrumConfig": {
        "bandwidth": {
          "units": {},
          "value": {}
        },
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      }
    },
    "antennaUplinkConfig": {
      "spectrumConfig": {
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      },
      "targetEirp": {
        "units": {},
        "value": {}
      },
      "transmitDisabled": {}
    },
    "dataflowEndpointConfig": {
      "dataflowEndpointName": {},
      "dataflowEndpointRegion": {}
    },
    "s3RecordingConfig": {
      "bucketArn": {},
      "prefix": {},
      "roleArn": {}
    },
    "trackingConfig": {
      "autotrack": {}
    },
    "uplinkEchoConfig": {
      "antennaUplinkConfigArn": {},
      "enabled": {}
    }
  },
  "name": "string"
}
```

<h3 id="updateconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|path|string|true|UUID of a <code>Config</code>.|
|configType|path|string|true|Type of a <code>Config</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» configData|body|object|true|<p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>|
|» » antennaDownlinkConfig|body|object|false|none|
|» » » spectrumConfig|body|object|true|none|
|» » » » bandwidth|body|object|true|none|
|» » » » » units|body|object|true|none|
|» » » » » value|body|object|true|none|
|» » » » centerFrequency|body|object|true|none|
|» » » » » units|body|object|true|none|
|» » » » » value|body|object|true|none|
|» » » » polarization|body|object|false|none|
|» » antennaDownlinkDemodDecodeConfig|body|object|false|none|
|» » » decodeConfig|body|object|true|none|
|» » » » unvalidatedJSON|body|object|true|none|
|» » » demodulationConfig|body|object|true|none|
|» » » » unvalidatedJSON|body|object|true|none|
|» » » spectrumConfig|body|object|true|none|
|» » » » bandwidth|body|object|true|none|
|» » » » » units|body|object|true|none|
|» » » » » value|body|object|true|none|
|» » » » centerFrequency|body|object|true|none|
|» » » » » units|body|object|true|none|
|» » » » » value|body|object|true|none|
|» » » » polarization|body|object|false|none|
|» » antennaUplinkConfig|body|object|false|none|
|» » » spectrumConfig|body|object|true|none|
|» » » » centerFrequency|body|object|true|none|
|» » » » » units|body|object|true|none|
|» » » » » value|body|object|true|none|
|» » » » polarization|body|object|false|none|
|» » » targetEirp|body|object|true|none|
|» » » » units|body|object|true|none|
|» » » » value|body|object|true|none|
|» » » transmitDisabled|body|object|false|none|
|» » dataflowEndpointConfig|body|object|false|none|
|» » » dataflowEndpointName|body|object|true|none|
|» » » dataflowEndpointRegion|body|object|false|none|
|» » s3RecordingConfig|body|object|false|none|
|» » » bucketArn|body|object|true|none|
|» » » prefix|body|object|false|none|
|» » » roleArn|body|object|true|none|
|» » trackingConfig|body|object|false|none|
|» » » autotrack|body|object|true|none|
|» » uplinkEchoConfig|body|object|false|none|
|» » » antennaUplinkConfigArn|body|object|true|none|
|» » » enabled|body|object|true|none|
|» name|body|string|true|Name of a <code>Config</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|configType|antenna-downlink|
|configType|antenna-downlink-demod-decode|
|configType|antenna-uplink|
|configType|dataflow-endpoint|
|configType|tracking|
|configType|uplink-echo|
|configType|s3-recording|

> Example responses

> 200 Response

```json
{
  "configArn": {},
  "configId": {},
  "configType": {}
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

<h3 id="updateconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigIdResponse](#schemaconfigidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConfig

<a id="opIdDeleteConfig"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/config/antenna-downlink/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /config/{configType}/{configId}`

Deletes a <code>Config</code>.

<h3 id="deleteconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|path|string|true|UUID of a <code>Config</code>.|
|configType|path|string|true|Type of a <code>Config</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|configType|antenna-downlink|
|configType|antenna-downlink-demod-decode|
|configType|antenna-uplink|
|configType|dataflow-endpoint|
|configType|tracking|
|configType|uplink-echo|
|configType|s3-recording|

> Example responses

> 200 Response

```json
{
  "configArn": {},
  "configId": {},
  "configType": {}
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

<h3 id="deleteconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigIdResponse](#schemaconfigidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDataflowEndpointGroup

<a id="opIdGetDataflowEndpointGroup"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/dataflowEndpointGroup/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dataflowEndpointGroup/{dataflowEndpointGroupId}`

Returns the dataflow endpoint group.

<h3 id="getdataflowendpointgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataflowEndpointGroupId|path|string|true|UUID of a dataflow endpoint group.|
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
  "contactPostPassDurationSeconds": {},
  "contactPrePassDurationSeconds": {},
  "dataflowEndpointGroupArn": {},
  "dataflowEndpointGroupId": {},
  "endpointsDetails": {},
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

<h3 id="getdataflowendpointgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataflowEndpointGroupResponse](#schemagetdataflowendpointgroupresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataflowEndpointGroup

<a id="opIdDeleteDataflowEndpointGroup"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/dataflowEndpointGroup/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dataflowEndpointGroup/{dataflowEndpointGroupId}`

Deletes a dataflow endpoint group.

<h3 id="deletedataflowendpointgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataflowEndpointGroupId|path|string|true|UUID of a dataflow endpoint group.|
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
  "dataflowEndpointGroupId": {}
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

<h3 id="deletedataflowendpointgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DataflowEndpointGroupIdResponse](#schemadataflowendpointgroupidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEphemeris

<a id="opIdDescribeEphemeris"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/ephemeris/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ephemeris/{ephemerisId}`

Describes an existing ephemeris.

<h3 id="describeephemeris-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ephemerisId|path|string|true|The AWS Ground Station ephemeris ID.|
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
  "creationTime": {},
  "enabled": {},
  "ephemerisId": {},
  "invalidReason": {},
  "name": {},
  "priority": {},
  "satelliteId": {},
  "status": {},
  "suppliedData": {
    "oem": {
      "ephemerisData": {},
      "sourceS3Object": {
        "bucket": {},
        "key": {},
        "version": {}
      }
    },
    "tle": {
      "ephemerisData": {},
      "sourceS3Object": {
        "bucket": {},
        "key": {},
        "version": {}
      }
    }
  },
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

<h3 id="describeephemeris-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEphemerisResponse](#schemadescribeephemerisresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEphemeris

<a id="opIdUpdateEphemeris"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/ephemeris/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true,
    "name": "string",
    "priority": 0
  }'
```

`PUT /ephemeris/{ephemerisId}`

Updates an existing ephemeris

> Body parameter

```json
{
  "enabled": true,
  "name": "string",
  "priority": 0
}
```

<h3 id="updateephemeris-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ephemerisId|path|string|true|The AWS Ground Station ephemeris ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» enabled|body|boolean|true|Whether the ephemeris is enabled or not. Changing this value will not require the ephemeris to be re-validated.|
|» name|body|string|false|A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.|
|» priority|body|integer|false|<p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p> <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p> <p>Priority must be 1 or greater</p>|

> Example responses

> 200 Response

```json
{
  "ephemerisId": {}
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

<h3 id="updateephemeris-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EphemerisIdResponse](#schemaephemerisidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEphemeris

<a id="opIdDeleteEphemeris"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/ephemeris/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /ephemeris/{ephemerisId}`

Deletes an ephemeris

<h3 id="deleteephemeris-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ephemerisId|path|string|true|The AWS Ground Station ephemeris ID.|
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
  "ephemerisId": {}
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

<h3 id="deleteephemeris-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EphemerisIdResponse](#schemaephemerisidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMissionProfile

<a id="opIdGetMissionProfile"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/missionprofile/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /missionprofile/{missionProfileId}`

Returns a mission profile.

<h3 id="getmissionprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|missionProfileId|path|string|true|UUID of a mission profile.|
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
  "contactPostPassDurationSeconds": {},
  "contactPrePassDurationSeconds": {},
  "dataflowEdges": {},
  "minimumViableContactDurationSeconds": {},
  "missionProfileArn": {},
  "missionProfileId": {},
  "name": {},
  "region": {},
  "streamsKmsKey": {
    "kmsAliasArn": {},
    "kmsKeyArn": {}
  },
  "streamsKmsRole": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "trackingConfigArn": {}
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

<h3 id="getmissionprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMissionProfileResponse](#schemagetmissionprofileresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMissionProfile

<a id="opIdUpdateMissionProfile"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/missionprofile/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "contactPostPassDurationSeconds": 0,
    "contactPrePassDurationSeconds": 0,
    "dataflowEdges": [
      [
        "string",
        "string"
      ]
    ],
    "minimumViableContactDurationSeconds": 1,
    "name": "string",
    "streamsKmsKey": {
      "kmsAliasArn": {},
      "kmsKeyArn": {}
    },
    "streamsKmsRole": "string",
    "trackingConfigArn": "string"
  }'
```

`PUT /missionprofile/{missionProfileId}`

<p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>

> Body parameter

```json
{
  "contactPostPassDurationSeconds": 0,
  "contactPrePassDurationSeconds": 0,
  "dataflowEdges": [
    [
      "string",
      "string"
    ]
  ],
  "minimumViableContactDurationSeconds": 1,
  "name": "string",
  "streamsKmsKey": {
    "kmsAliasArn": {},
    "kmsKeyArn": {}
  },
  "streamsKmsRole": "string",
  "trackingConfigArn": "string"
}
```

<h3 id="updatemissionprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|missionProfileId|path|string|true|UUID of a mission profile.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» contactPostPassDurationSeconds|body|integer|false|Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.|
|» contactPrePassDurationSeconds|body|integer|false|Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.|
|» dataflowEdges|body|[[DataflowEdge](#schemadataflowedge)]|false|A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.|
|» minimumViableContactDurationSeconds|body|integer|false|Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.|
|» name|body|string|false|Name of a mission profile.|
|» streamsKmsKey|body|object|false|AWS Key Management Service (KMS) Key.|
|» » kmsAliasArn|body|object|false|none|
|» » kmsKeyArn|body|object|false|none|
|» streamsKmsRole|body|string|false|Role to use for encrypting streams with KMS key.|
|» trackingConfigArn|body|string|false|ARN of a tracking <code>Config</code>.|

> Example responses

> 200 Response

```json
{
  "missionProfileId": {}
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

<h3 id="updatemissionprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MissionProfileIdResponse](#schemamissionprofileidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMissionProfile

<a id="opIdDeleteMissionProfile"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/missionprofile/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /missionprofile/{missionProfileId}`

Deletes a mission profile.

<h3 id="deletemissionprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|missionProfileId|path|string|true|UUID of a mission profile.|
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
  "missionProfileId": {}
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

<h3 id="deletemissionprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MissionProfileIdResponse](#schemamissionprofileidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAgentConfiguration

<a id="opIdGetAgentConfiguration"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/agent/string/configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /agent/{agentId}/configuration`

<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Gets the latest configuration information for a registered agent.</p>

<h3 id="getagentconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentId|path|string|true|UUID of agent to get configuration information for.|
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
  "agentId": {},
  "taskingDocument": {}
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

<h3 id="getagentconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAgentConfigurationResponse](#schemagetagentconfigurationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMinuteUsage

<a id="opIdGetMinuteUsage"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/minute-usage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "month": 1,
    "year": 2018
  }'
```

`POST /minute-usage`

Returns the number of minutes used by account.

> Body parameter

```json
{
  "month": 1,
  "year": 2018
}
```

<h3 id="getminuteusage-parameters">Parameters</h3>

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
|» month|body|integer|true|The month being requested, with a value of 1-12.|
|» year|body|integer|true|The year being requested, in the format of YYYY.|

> Example responses

> 200 Response

```json
{
  "estimatedMinutesRemaining": {},
  "isReservedMinutesCustomer": {},
  "totalReservedMinuteAllocation": {},
  "totalScheduledMinutes": {},
  "upcomingMinutesScheduled": {}
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

<h3 id="getminuteusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMinuteUsageResponse](#schemagetminuteusageresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSatellite

<a id="opIdGetSatellite"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/satellite/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /satellite/{satelliteId}`

Returns a satellite.

<h3 id="getsatellite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|satelliteId|path|string|true|UUID of a satellite.|
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
  "currentEphemeris": {
    "ephemerisId": {},
    "epoch": {},
    "name": {},
    "source": {}
  },
  "groundStations": {},
  "noradSatelliteID": {},
  "satelliteArn": {},
  "satelliteId": {}
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

<h3 id="getsatellite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSatelliteResponse](#schemagetsatelliteresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListContacts

<a id="opIdListContacts"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/contacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "endTime": "1970-01-01T00:00:00Z",
    "groundStation": "string",
    "maxResults": 0,
    "missionProfileArn": "string",
    "nextToken": "string",
    "satelliteArn": "string",
    "startTime": "1970-01-01T00:00:00Z",
    "statusList": [
      "AVAILABLE"
    ]
  }'
```

`POST /contacts`

<p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>

> Body parameter

```json
{
  "endTime": "1970-01-01T00:00:00Z",
  "groundStation": "string",
  "maxResults": 0,
  "missionProfileArn": "string",
  "nextToken": "string",
  "satelliteArn": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "statusList": [
    "AVAILABLE"
  ]
}
```

<h3 id="listcontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» endTime|body|string(date-time)|true|End time of a contact in UTC.|
|» groundStation|body|string|false|Name of a ground station.|
|» maxResults|body|integer|false|Maximum number of contacts returned.|
|» missionProfileArn|body|string|false|ARN of a mission profile.|
|» nextToken|body|string|false|Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results.|
|» satelliteArn|body|string|false|ARN of a satellite.|
|» startTime|body|string(date-time)|true|Start time of a contact in UTC.|
|» statusList|body|[[ContactStatus](#schemacontactstatus)]|true|Status of a contact reservation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» statusList|AVAILABLE|
|» statusList|AWS_CANCELLED|
|» statusList|AWS_FAILED|
|» statusList|CANCELLED|
|» statusList|CANCELLING|
|» statusList|COMPLETED|
|» statusList|FAILED|
|» statusList|FAILED_TO_SCHEDULE|
|» statusList|PASS|
|» statusList|POSTPASS|
|» statusList|PREPASS|
|» statusList|SCHEDULED|
|» statusList|SCHEDULING|

> Example responses

> 200 Response

```json
{
  "contactList": {},
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

<h3 id="listcontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListContactsResponse](#schemalistcontactsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEphemerides

<a id="opIdListEphemerides"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/ephemerides \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "endTime": "1970-01-01T00:00:00Z",
    "satelliteId": "string",
    "startTime": "1970-01-01T00:00:00Z",
    "statusList": [
      "VALIDATING"
    ]
  }'
```

`POST /ephemerides`

List existing ephemerides.

> Body parameter

```json
{
  "endTime": "1970-01-01T00:00:00Z",
  "satelliteId": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "statusList": [
    "VALIDATING"
  ]
}
```

<h3 id="listephemerides-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Maximum number of ephemerides to return.|
|nextToken|query|string|false|Pagination token.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» endTime|body|string(date-time)|true|The end time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.|
|» satelliteId|body|string|true|The AWS Ground Station satellite ID to list ephemeris for.|
|» startTime|body|string(date-time)|true|The start time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.|
|» statusList|body|[[EphemerisStatus](#schemaephemerisstatus)]|false|The list of ephemeris status to return.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» statusList|VALIDATING|
|» statusList|INVALID|
|» statusList|ERROR|
|» statusList|ENABLED|
|» statusList|DISABLED|
|» statusList|EXPIRED|

> Example responses

> 200 Response

```json
{
  "ephemerides": {},
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

<h3 id="listephemerides-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEphemeridesResponse](#schemalistephemeridesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroundStations

<a id="opIdListGroundStations"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/groundstation \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /groundstation`

Returns a list of ground stations. 

<h3 id="listgroundstations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Maximum number of ground stations returned.|
|nextToken|query|string|false|Next token that can be supplied in the next call to get the next page of ground stations.|
|satelliteId|query|string|false|Satellite ID to retrieve on-boarded ground stations.|
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
  "groundStationList": {},
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

<h3 id="listgroundstations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroundStationsResponse](#schemalistgroundstationsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSatellites

<a id="opIdListSatellites"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/satellite \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /satellite`

Returns a list of satellites.

<h3 id="listsatellites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Maximum number of satellites returned.|
|nextToken|query|string|false|Next token that can be supplied in the next call to get the next page of satellites.|
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
  "nextToken": {},
  "satellites": {}
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

<h3 id="listsatellites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSatellitesResponse](#schemalistsatellitesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Returns a list of tags for a specified resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|ARN of a resource.|
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
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/tags/string \
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

Assigns a tag to a resource.

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
|resourceArn|path|string|true|ARN of a resource tag.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|Tags assigned to a resource.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

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
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterAgent

<a id="opIdRegisterAgent"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/agent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "agentDetails": {
      "agentCpuCores": {},
      "agentVersion": {},
      "componentVersions": {},
      "instanceId": {},
      "instanceType": {},
      "reservedCpuCores": {}
    },
    "discoveryData": {
      "capabilityArns": {},
      "privateIpAddresses": {},
      "publicIpAddresses": {}
    }
  }'
```

`POST /agent`

<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p> Registers a new agent with AWS Ground Station. </p>

> Body parameter

```json
{
  "agentDetails": {
    "agentCpuCores": {},
    "agentVersion": {},
    "componentVersions": {},
    "instanceId": {},
    "instanceType": {},
    "reservedCpuCores": {}
  },
  "discoveryData": {
    "capabilityArns": {},
    "privateIpAddresses": {},
    "publicIpAddresses": {}
  }
}
```

<h3 id="registeragent-parameters">Parameters</h3>

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
|» agentDetails|body|object|true|Detailed information about the agent.|
|» » agentCpuCores|body|object|false|none|
|» » agentVersion|body|object|false|none|
|» » componentVersions|body|object|false|none|
|» » instanceId|body|object|false|none|
|» » instanceType|body|object|false|none|
|» » reservedCpuCores|body|object|false|none|
|» discoveryData|body|object|true|Data for agent discovery.|
|» » capabilityArns|body|object|false|none|
|» » privateIpAddresses|body|object|false|none|
|» » publicIpAddresses|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "agentId": {}
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

<h3 id="registeragent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterAgentResponse](#schemaregisteragentresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReserveContact

<a id="opIdReserveContact"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/contact \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "endTime": "1970-01-01T00:00:00Z",
    "groundStation": "string",
    "missionProfileArn": "string",
    "satelliteArn": "string",
    "startTime": "1970-01-01T00:00:00Z",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /contact`

Reserves a contact using specified parameters.

> Body parameter

```json
{
  "endTime": "1970-01-01T00:00:00Z",
  "groundStation": "string",
  "missionProfileArn": "string",
  "satelliteArn": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="reservecontact-parameters">Parameters</h3>

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
|» endTime|body|string(date-time)|true|End time of a contact in UTC.|
|» groundStation|body|string|true|Name of a ground station.|
|» missionProfileArn|body|string|true|ARN of a mission profile.|
|» satelliteArn|body|string|true|ARN of a satellite|
|» startTime|body|string(date-time)|true|Start time of a contact in UTC.|
|» tags|body|object|false|Tags assigned to a contact.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 200 Response

```json
{
  "contactId": {}
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

<h3 id="reservecontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactIdResponse](#schemacontactidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://groundstation.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Deassigns a resource tag.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|ARN of a resource.|
|tagKeys|query|[[UnboundedString](#schemaunboundedstring)]|true|Keys of a resource tag.|
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
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAgentStatus

<a id="opIdUpdateAgentStatus"></a>

> Code samples

```bash
curl https://groundstation.us-east-1.amazonaws.com/agent/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "aggregateStatus": {
      "signatureMap": {
        "property1": true,
        "property2": true
      },
      "status": {}
    },
    "componentStatuses": [
      {
        "bytesReceived": {},
        "bytesSent": {},
        "capabilityArn": {},
        "componentType": {},
        "dataflowId": {},
        "packetsDropped": {},
        "status": {}
      }
    ],
    "taskId": "string"
  }'
```

`PUT /agent/{agentId}`

<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Update the status of the agent.</p>

> Body parameter

```json
{
  "aggregateStatus": {
    "signatureMap": {
      "property1": true,
      "property2": true
    },
    "status": {}
  },
  "componentStatuses": [
    {
      "bytesReceived": {},
      "bytesSent": {},
      "capabilityArn": {},
      "componentType": {},
      "dataflowId": {},
      "packetsDropped": {},
      "status": {}
    }
  ],
  "taskId": "string"
}
```

<h3 id="updateagentstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentId|path|string|true|UUID of agent to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» aggregateStatus|body|object|true|Aggregate status of Agent components.|
|» » signatureMap|body|object|false|none|
|» » » **additionalProperties**|body|[Boolean](#schemaboolean)|false|none|
|» » status|body|object|false|none|
|» componentStatuses|body|[[ComponentStatusData](#schemacomponentstatusdata)]|true|List of component statuses for agent.|
|» taskId|body|string|true|GUID of agent task.|

> Example responses

> 200 Response

```json
{
  "agentId": {}
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

<h3 id="updateagentstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAgentStatusResponse](#schemaupdateagentstatusresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DependencyException|[DependencyException](#schemadependencyexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ContactIdResponse">ContactIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontactidresponse"></a>
<a id="schema_ContactIdResponse"></a>
<a id="tocScontactidresponse"></a>
<a id="tocscontactidresponse"></a>

```json
{
  "contactId": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactId|object|false|none|none|

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_DependencyException">DependencyException</h2>
<!-- backwards compatibility -->
<a id="schemadependencyexception"></a>
<a id="schema_DependencyException"></a>
<a id="tocSdependencyexception"></a>
<a id="tocsdependencyexception"></a>

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

<h2 id="tocS_ConfigIdResponse">ConfigIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfigidresponse"></a>
<a id="schema_ConfigIdResponse"></a>
<a id="tocSconfigidresponse"></a>
<a id="tocsconfigidresponse"></a>

```json
{
  "configArn": {},
  "configId": {},
  "configType": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configArn|object|false|none|none|
|configId|object|false|none|none|
|configType|object|false|none|none|

<h2 id="tocS_AntennaDownlinkConfig">AntennaDownlinkConfig</h2>
<!-- backwards compatibility -->
<a id="schemaantennadownlinkconfig"></a>
<a id="schema_AntennaDownlinkConfig"></a>
<a id="tocSantennadownlinkconfig"></a>
<a id="tocsantennadownlinkconfig"></a>

```json
{
  "spectrumConfig": {
    "bandwidth": {
      "units": {},
      "value": {}
    },
    "centerFrequency": {
      "units": {},
      "value": {}
    },
    "polarization": {}
  }
}
```

Information about how AWS Ground Station should configure an antenna for downlink during a contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spectrumConfig|object|true|none|none|

<h2 id="tocS_AntennaDownlinkDemodDecodeConfig">AntennaDownlinkDemodDecodeConfig</h2>
<!-- backwards compatibility -->
<a id="schemaantennadownlinkdemoddecodeconfig"></a>
<a id="schema_AntennaDownlinkDemodDecodeConfig"></a>
<a id="tocSantennadownlinkdemoddecodeconfig"></a>
<a id="tocsantennadownlinkdemoddecodeconfig"></a>

```json
{
  "decodeConfig": {
    "unvalidatedJSON": {}
  },
  "demodulationConfig": {
    "unvalidatedJSON": {}
  },
  "spectrumConfig": {
    "bandwidth": {
      "units": {},
      "value": {}
    },
    "centerFrequency": {
      "units": {},
      "value": {}
    },
    "polarization": {}
  }
}
```

Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decodeConfig|object|true|none|none|
|demodulationConfig|object|true|none|none|
|spectrumConfig|object|true|none|none|

<h2 id="tocS_AntennaUplinkConfig">AntennaUplinkConfig</h2>
<!-- backwards compatibility -->
<a id="schemaantennauplinkconfig"></a>
<a id="schema_AntennaUplinkConfig"></a>
<a id="tocSantennauplinkconfig"></a>
<a id="tocsantennauplinkconfig"></a>

```json
{
  "spectrumConfig": {
    "centerFrequency": {
      "units": {},
      "value": {}
    },
    "polarization": {}
  },
  "targetEirp": {
    "units": {},
    "value": {}
  },
  "transmitDisabled": {}
}
```

Information about the uplink <code>Config</code> of an antenna.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spectrumConfig|object|true|none|none|
|targetEirp|object|true|none|none|
|transmitDisabled|object|false|none|none|

<h2 id="tocS_DataflowEndpointConfig">DataflowEndpointConfig</h2>
<!-- backwards compatibility -->
<a id="schemadataflowendpointconfig"></a>
<a id="schema_DataflowEndpointConfig"></a>
<a id="tocSdataflowendpointconfig"></a>
<a id="tocsdataflowendpointconfig"></a>

```json
{
  "dataflowEndpointName": {},
  "dataflowEndpointRegion": {}
}
```

Information about the dataflow endpoint <code>Config</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataflowEndpointName|object|true|none|none|
|dataflowEndpointRegion|object|false|none|none|

<h2 id="tocS_S3RecordingConfig">S3RecordingConfig</h2>
<!-- backwards compatibility -->
<a id="schemas3recordingconfig"></a>
<a id="schema_S3RecordingConfig"></a>
<a id="tocSs3recordingconfig"></a>
<a id="tocss3recordingconfig"></a>

```json
{
  "bucketArn": {},
  "prefix": {},
  "roleArn": {}
}
```

Information about an S3 recording <code>Config</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketArn|object|true|none|none|
|prefix|object|false|none|none|
|roleArn|object|true|none|none|

<h2 id="tocS_TrackingConfig">TrackingConfig</h2>
<!-- backwards compatibility -->
<a id="schematrackingconfig"></a>
<a id="schema_TrackingConfig"></a>
<a id="tocStrackingconfig"></a>
<a id="tocstrackingconfig"></a>

```json
{
  "autotrack": {}
}
```

Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autotrack|object|true|none|none|

<h2 id="tocS_UplinkEchoConfig">UplinkEchoConfig</h2>
<!-- backwards compatibility -->
<a id="schemauplinkechoconfig"></a>
<a id="schema_UplinkEchoConfig"></a>
<a id="tocSuplinkechoconfig"></a>
<a id="tocsuplinkechoconfig"></a>

```json
{
  "antennaUplinkConfigArn": {},
  "enabled": {}
}
```

<p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|antennaUplinkConfigArn|object|true|none|none|
|enabled|object|true|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_ResourceLimitExceededException">ResourceLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelimitexceededexception"></a>
<a id="schema_ResourceLimitExceededException"></a>
<a id="tocSresourcelimitexceededexception"></a>
<a id="tocsresourcelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_DataflowEndpointGroupIdResponse">DataflowEndpointGroupIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemadataflowendpointgroupidresponse"></a>
<a id="schema_DataflowEndpointGroupIdResponse"></a>
<a id="tocSdataflowendpointgroupidresponse"></a>
<a id="tocsdataflowendpointgroupidresponse"></a>

```json
{
  "dataflowEndpointGroupId": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataflowEndpointGroupId|object|false|none|none|

<h2 id="tocS_EndpointDetails">EndpointDetails</h2>
<!-- backwards compatibility -->
<a id="schemaendpointdetails"></a>
<a id="schema_EndpointDetails"></a>
<a id="tocSendpointdetails"></a>
<a id="tocsendpointdetails"></a>

```json
{
  "awsGroundStationAgentEndpoint": {
    "agentStatus": {},
    "auditResults": {},
    "egressAddress": {
      "mtu": {},
      "socketAddress": {
        "name": {},
        "port": {}
      }
    },
    "ingressAddress": {
      "mtu": {},
      "socketAddress": {
        "name": {},
        "portRange": {
          "maximum": {},
          "minimum": {}
        }
      }
    },
    "name": {}
  },
  "endpoint": {
    "address": {
      "name": {},
      "port": {}
    },
    "mtu": {},
    "name": {},
    "status": {}
  },
  "healthReasons": {},
  "healthStatus": {},
  "securityDetails": {
    "roleArn": {},
    "securityGroupIds": {},
    "subnetIds": {}
  }
}
```

Information about the endpoint details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsGroundStationAgentEndpoint|object|false|none|none|
|endpoint|object|false|none|none|
|healthReasons|object|false|none|none|
|healthStatus|object|false|none|none|
|securityDetails|object|false|none|none|

<h2 id="tocS_EphemerisIdResponse">EphemerisIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemaephemerisidresponse"></a>
<a id="schema_EphemerisIdResponse"></a>
<a id="tocSephemerisidresponse"></a>
<a id="tocsephemerisidresponse"></a>

```json
{
  "ephemerisId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ephemerisId|object|false|none|none|

<h2 id="tocS_OEMEphemeris">OEMEphemeris</h2>
<!-- backwards compatibility -->
<a id="schemaoemephemeris"></a>
<a id="schema_OEMEphemeris"></a>
<a id="tocSoemephemeris"></a>
<a id="tocsoemephemeris"></a>

```json
{
  "oemData": {},
  "s3Object": {
    "bucket": {},
    "key": {},
    "version": {}
  }
}
```

Ephemeris data in Orbit Ephemeris Message (OEM) format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oemData|object|false|none|none|
|s3Object|object|false|none|none|

<h2 id="tocS_TLEEphemeris">TLEEphemeris</h2>
<!-- backwards compatibility -->
<a id="schematleephemeris"></a>
<a id="schema_TLEEphemeris"></a>
<a id="tocStleephemeris"></a>
<a id="tocstleephemeris"></a>

```json
{
  "s3Object": {
    "bucket": {},
    "key": {},
    "version": {}
  },
  "tleData": {}
}
```

Two-line element set (TLE) ephemeris.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Object|object|false|none|none|
|tleData|object|false|none|none|

<h2 id="tocS_MissionProfileIdResponse">MissionProfileIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemamissionprofileidresponse"></a>
<a id="schema_MissionProfileIdResponse"></a>
<a id="tocSmissionprofileidresponse"></a>
<a id="tocsmissionprofileidresponse"></a>

```json
{
  "missionProfileId": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|missionProfileId|object|false|none|none|

<h2 id="tocS_DataflowEdge">DataflowEdge</h2>
<!-- backwards compatibility -->
<a id="schemadataflowedge"></a>
<a id="schema_DataflowEdge"></a>
<a id="tocSdataflowedge"></a>
<a id="tocsdataflowedge"></a>

```json
[
  "string",
  "string"
]
```

<h2 id="tocS_KeyAliasArn">KeyAliasArn</h2>
<!-- backwards compatibility -->
<a id="schemakeyaliasarn"></a>
<a id="schema_KeyAliasArn"></a>
<a id="tocSkeyaliasarn"></a>
<a id="tocskeyaliasarn"></a>

```json
"string"
```

<h2 id="tocS_KeyArn">KeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakeyarn"></a>
<a id="schema_KeyArn"></a>
<a id="tocSkeyarn"></a>
<a id="tocskeyarn"></a>

```json
"string"
```

<h2 id="tocS_DescribeContactResponse">DescribeContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontactresponse"></a>
<a id="schema_DescribeContactResponse"></a>
<a id="tocSdescribecontactresponse"></a>
<a id="tocsdescribecontactresponse"></a>

```json
{
  "contactId": {},
  "contactStatus": {},
  "dataflowList": {},
  "endTime": {},
  "errorMessage": {},
  "groundStation": {},
  "maximumElevation": {
    "unit": {},
    "value": {}
  },
  "missionProfileArn": {},
  "postPassEndTime": {},
  "prePassStartTime": {},
  "region": {},
  "satelliteArn": {},
  "startTime": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactId|object|false|none|none|
|contactStatus|object|false|none|none|
|dataflowList|object|false|none|none|
|endTime|object|false|none|none|
|errorMessage|object|false|none|none|
|groundStation|object|false|none|none|
|maximumElevation|object|false|none|none|
|missionProfileArn|object|false|none|none|
|postPassEndTime|object|false|none|none|
|prePassStartTime|object|false|none|none|
|region|object|false|none|none|
|satelliteArn|object|false|none|none|
|startTime|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DescribeEphemerisResponse">DescribeEphemerisResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeephemerisresponse"></a>
<a id="schema_DescribeEphemerisResponse"></a>
<a id="tocSdescribeephemerisresponse"></a>
<a id="tocsdescribeephemerisresponse"></a>

```json
{
  "creationTime": {},
  "enabled": {},
  "ephemerisId": {},
  "invalidReason": {},
  "name": {},
  "priority": {},
  "satelliteId": {},
  "status": {},
  "suppliedData": {
    "oem": {
      "ephemerisData": {},
      "sourceS3Object": {
        "bucket": {},
        "key": {},
        "version": {}
      }
    },
    "tle": {
      "ephemerisData": {},
      "sourceS3Object": {
        "bucket": {},
        "key": {},
        "version": {}
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
|creationTime|object|false|none|none|
|enabled|object|false|none|none|
|ephemerisId|object|false|none|none|
|invalidReason|object|false|none|none|
|name|object|false|none|none|
|priority|object|false|none|none|
|satelliteId|object|false|none|none|
|status|object|false|none|none|
|suppliedData|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetAgentConfigurationResponse">GetAgentConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetagentconfigurationresponse"></a>
<a id="schema_GetAgentConfigurationResponse"></a>
<a id="tocSgetagentconfigurationresponse"></a>
<a id="tocsgetagentconfigurationresponse"></a>

```json
{
  "agentId": {},
  "taskingDocument": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|object|false|none|none|
|taskingDocument|object|false|none|none|

<h2 id="tocS_GetConfigResponse">GetConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconfigresponse"></a>
<a id="schema_GetConfigResponse"></a>
<a id="tocSgetconfigresponse"></a>
<a id="tocsgetconfigresponse"></a>

```json
{
  "configArn": {},
  "configData": {
    "antennaDownlinkConfig": {
      "spectrumConfig": {
        "bandwidth": {
          "units": {},
          "value": {}
        },
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      }
    },
    "antennaDownlinkDemodDecodeConfig": {
      "decodeConfig": {
        "unvalidatedJSON": {}
      },
      "demodulationConfig": {
        "unvalidatedJSON": {}
      },
      "spectrumConfig": {
        "bandwidth": {
          "units": {},
          "value": {}
        },
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      }
    },
    "antennaUplinkConfig": {
      "spectrumConfig": {
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      },
      "targetEirp": {
        "units": {},
        "value": {}
      },
      "transmitDisabled": {}
    },
    "dataflowEndpointConfig": {
      "dataflowEndpointName": {},
      "dataflowEndpointRegion": {}
    },
    "s3RecordingConfig": {
      "bucketArn": {},
      "prefix": {},
      "roleArn": {}
    },
    "trackingConfig": {
      "autotrack": {}
    },
    "uplinkEchoConfig": {
      "antennaUplinkConfigArn": {},
      "enabled": {}
    }
  },
  "configId": {},
  "configType": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configArn|object|true|none|none|
|configData|object|true|none|none|
|configId|object|true|none|none|
|configType|object|false|none|none|
|name|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetDataflowEndpointGroupResponse">GetDataflowEndpointGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdataflowendpointgroupresponse"></a>
<a id="schema_GetDataflowEndpointGroupResponse"></a>
<a id="tocSgetdataflowendpointgroupresponse"></a>
<a id="tocsgetdataflowendpointgroupresponse"></a>

```json
{
  "contactPostPassDurationSeconds": {},
  "contactPrePassDurationSeconds": {},
  "dataflowEndpointGroupArn": {},
  "dataflowEndpointGroupId": {},
  "endpointsDetails": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactPostPassDurationSeconds|object|false|none|none|
|contactPrePassDurationSeconds|object|false|none|none|
|dataflowEndpointGroupArn|object|false|none|none|
|dataflowEndpointGroupId|object|false|none|none|
|endpointsDetails|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetMinuteUsageResponse">GetMinuteUsageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetminuteusageresponse"></a>
<a id="schema_GetMinuteUsageResponse"></a>
<a id="tocSgetminuteusageresponse"></a>
<a id="tocsgetminuteusageresponse"></a>

```json
{
  "estimatedMinutesRemaining": {},
  "isReservedMinutesCustomer": {},
  "totalReservedMinuteAllocation": {},
  "totalScheduledMinutes": {},
  "upcomingMinutesScheduled": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimatedMinutesRemaining|object|false|none|none|
|isReservedMinutesCustomer|object|false|none|none|
|totalReservedMinuteAllocation|object|false|none|none|
|totalScheduledMinutes|object|false|none|none|
|upcomingMinutesScheduled|object|false|none|none|

<h2 id="tocS_GetMissionProfileResponse">GetMissionProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmissionprofileresponse"></a>
<a id="schema_GetMissionProfileResponse"></a>
<a id="tocSgetmissionprofileresponse"></a>
<a id="tocsgetmissionprofileresponse"></a>

```json
{
  "contactPostPassDurationSeconds": {},
  "contactPrePassDurationSeconds": {},
  "dataflowEdges": {},
  "minimumViableContactDurationSeconds": {},
  "missionProfileArn": {},
  "missionProfileId": {},
  "name": {},
  "region": {},
  "streamsKmsKey": {
    "kmsAliasArn": {},
    "kmsKeyArn": {}
  },
  "streamsKmsRole": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "trackingConfigArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactPostPassDurationSeconds|object|false|none|none|
|contactPrePassDurationSeconds|object|false|none|none|
|dataflowEdges|object|false|none|none|
|minimumViableContactDurationSeconds|object|false|none|none|
|missionProfileArn|object|false|none|none|
|missionProfileId|object|false|none|none|
|name|object|false|none|none|
|region|object|false|none|none|
|streamsKmsKey|object|false|none|none|
|streamsKmsRole|object|false|none|none|
|tags|object|false|none|none|
|trackingConfigArn|object|false|none|none|

<h2 id="tocS_GetSatelliteResponse">GetSatelliteResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsatelliteresponse"></a>
<a id="schema_GetSatelliteResponse"></a>
<a id="tocSgetsatelliteresponse"></a>
<a id="tocsgetsatelliteresponse"></a>

```json
{
  "currentEphemeris": {
    "ephemerisId": {},
    "epoch": {},
    "name": {},
    "source": {}
  },
  "groundStations": {},
  "noradSatelliteID": {},
  "satelliteArn": {},
  "satelliteId": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentEphemeris|object|false|none|none|
|groundStations|object|false|none|none|
|noradSatelliteID|object|false|none|none|
|satelliteArn|object|false|none|none|
|satelliteId|object|false|none|none|

<h2 id="tocS_ListConfigsResponse">ListConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigsresponse"></a>
<a id="schema_ListConfigsResponse"></a>
<a id="tocSlistconfigsresponse"></a>
<a id="tocslistconfigsresponse"></a>

```json
{
  "configList": {},
  "nextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListContactsResponse">ListContactsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactsresponse"></a>
<a id="schema_ListContactsResponse"></a>
<a id="tocSlistcontactsresponse"></a>
<a id="tocslistcontactsresponse"></a>

```json
{
  "contactList": {},
  "nextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ContactStatus">ContactStatus</h2>
<!-- backwards compatibility -->
<a id="schemacontactstatus"></a>
<a id="schema_ContactStatus"></a>
<a id="tocScontactstatus"></a>
<a id="tocscontactstatus"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_ListDataflowEndpointGroupsResponse">ListDataflowEndpointGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdataflowendpointgroupsresponse"></a>
<a id="schema_ListDataflowEndpointGroupsResponse"></a>
<a id="tocSlistdataflowendpointgroupsresponse"></a>
<a id="tocslistdataflowendpointgroupsresponse"></a>

```json
{
  "dataflowEndpointGroupList": {},
  "nextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataflowEndpointGroupList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListEphemeridesResponse">ListEphemeridesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistephemeridesresponse"></a>
<a id="schema_ListEphemeridesResponse"></a>
<a id="tocSlistephemeridesresponse"></a>
<a id="tocslistephemeridesresponse"></a>

```json
{
  "ephemerides": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ephemerides|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_EphemerisStatus">EphemerisStatus</h2>
<!-- backwards compatibility -->
<a id="schemaephemerisstatus"></a>
<a id="schema_EphemerisStatus"></a>
<a id="tocSephemerisstatus"></a>
<a id="tocsephemerisstatus"></a>

```json
"VALIDATING"
```

<h2 id="tocS_ListGroundStationsResponse">ListGroundStationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroundstationsresponse"></a>
<a id="schema_ListGroundStationsResponse"></a>
<a id="tocSlistgroundstationsresponse"></a>
<a id="tocslistgroundstationsresponse"></a>

```json
{
  "groundStationList": {},
  "nextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groundStationList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListMissionProfilesResponse">ListMissionProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmissionprofilesresponse"></a>
<a id="schema_ListMissionProfilesResponse"></a>
<a id="tocSlistmissionprofilesresponse"></a>
<a id="tocslistmissionprofilesresponse"></a>

```json
{
  "missionProfileList": {},
  "nextToken": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|missionProfileList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSatellitesResponse">ListSatellitesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsatellitesresponse"></a>
<a id="schema_ListSatellitesResponse"></a>
<a id="tocSlistsatellitesresponse"></a>
<a id="tocslistsatellitesresponse"></a>

```json
{
  "nextToken": {},
  "satellites": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|satellites|object|false|none|none|

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

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_RegisterAgentResponse">RegisterAgentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisteragentresponse"></a>
<a id="schema_RegisterAgentResponse"></a>
<a id="tocSregisteragentresponse"></a>
<a id="tocsregisteragentresponse"></a>

```json
{
  "agentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|object|false|none|none|

<h2 id="tocS_AgentCpuCoresList">AgentCpuCoresList</h2>
<!-- backwards compatibility -->
<a id="schemaagentcpucoreslist"></a>
<a id="schema_AgentCpuCoresList"></a>
<a id="tocSagentcpucoreslist"></a>
<a id="tocsagentcpucoreslist"></a>

```json
[
  0
]
```

<h2 id="tocS_VersionString">VersionString</h2>
<!-- backwards compatibility -->
<a id="schemaversionstring"></a>
<a id="schema_VersionString"></a>
<a id="tocSversionstring"></a>
<a id="tocsversionstring"></a>

```json
"string"
```

<h2 id="tocS_ComponentVersionList">ComponentVersionList</h2>
<!-- backwards compatibility -->
<a id="schemacomponentversionlist"></a>
<a id="schema_ComponentVersionList"></a>
<a id="tocScomponentversionlist"></a>
<a id="tocscomponentversionlist"></a>

```json
[
  {
    "componentType": {},
    "versions": {}
  }
]
```

<h2 id="tocS_InstanceId">InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemainstanceid"></a>
<a id="schema_InstanceId"></a>
<a id="tocSinstanceid"></a>
<a id="tocsinstanceid"></a>

```json
"stringstri"
```

<h2 id="tocS_InstanceType">InstanceType</h2>
<!-- backwards compatibility -->
<a id="schemainstancetype"></a>
<a id="schema_InstanceType"></a>
<a id="tocSinstancetype"></a>
<a id="tocsinstancetype"></a>

```json
"string"
```

<h2 id="tocS_CapabilityArnList">CapabilityArnList</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityarnlist"></a>
<a id="schema_CapabilityArnList"></a>
<a id="tocScapabilityarnlist"></a>
<a id="tocscapabilityarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IpAddressList">IpAddressList</h2>
<!-- backwards compatibility -->
<a id="schemaipaddresslist"></a>
<a id="schema_IpAddressList"></a>
<a id="tocSipaddresslist"></a>
<a id="tocsipaddresslist"></a>

```json
[
  "strings"
]
```

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<p/>

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<p/>

<h2 id="tocS_UnboundedString">UnboundedString</h2>
<!-- backwards compatibility -->
<a id="schemaunboundedstring"></a>
<a id="schema_UnboundedString"></a>
<a id="tocSunboundedstring"></a>
<a id="tocsunboundedstring"></a>

```json
"string"
```

<h2 id="tocS_UpdateAgentStatusResponse">UpdateAgentStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateagentstatusresponse"></a>
<a id="schema_UpdateAgentStatusResponse"></a>
<a id="tocSupdateagentstatusresponse"></a>
<a id="tocsupdateagentstatusresponse"></a>

```json
{
  "agentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|object|true|none|none|

<h2 id="tocS_SignatureMap">SignatureMap</h2>
<!-- backwards compatibility -->
<a id="schemasignaturemap"></a>
<a id="schema_SignatureMap"></a>
<a id="tocSsignaturemap"></a>
<a id="tocssignaturemap"></a>

```json
{
  "property1": true,
  "property2": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Boolean](#schemaboolean)|false|none|none|

<h2 id="tocS_AgentStatus">AgentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaagentstatus"></a>
<a id="schema_AgentStatus"></a>
<a id="tocSagentstatus"></a>
<a id="tocsagentstatus"></a>

```json
"SUCCESS"
```

<h2 id="tocS_ComponentStatusData">ComponentStatusData</h2>
<!-- backwards compatibility -->
<a id="schemacomponentstatusdata"></a>
<a id="schema_ComponentStatusData"></a>
<a id="tocScomponentstatusdata"></a>
<a id="tocscomponentstatusdata"></a>

```json
{
  "bytesReceived": {},
  "bytesSent": {},
  "capabilityArn": {},
  "componentType": {},
  "dataflowId": {},
  "packetsDropped": {},
  "status": {}
}
```

Data on the status of agent components.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytesReceived|object|false|none|none|
|bytesSent|object|false|none|none|
|capabilityArn|object|true|none|none|
|componentType|object|true|none|none|
|dataflowId|object|true|none|none|
|packetsDropped|object|false|none|none|
|status|object|true|none|none|

<h2 id="tocS_AWSRegion">AWSRegion</h2>
<!-- backwards compatibility -->
<a id="schemaawsregion"></a>
<a id="schema_AWSRegion"></a>
<a id="tocSawsregion"></a>
<a id="tocsawsregion"></a>

```json
"string"
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_AgentDetails">AgentDetails</h2>
<!-- backwards compatibility -->
<a id="schemaagentdetails"></a>
<a id="schema_AgentDetails"></a>
<a id="tocSagentdetails"></a>
<a id="tocsagentdetails"></a>

```json
{
  "agentCpuCores": {},
  "agentVersion": {},
  "componentVersions": {},
  "instanceId": {},
  "instanceType": {},
  "reservedCpuCores": {}
}
```

Detailed information about the agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentCpuCores|object|false|none|none|
|agentVersion|object|true|none|none|
|componentVersions|object|true|none|none|
|instanceId|object|true|none|none|
|instanceType|object|true|none|none|
|reservedCpuCores|object|false|none|none|

<h2 id="tocS_AggregateStatus">AggregateStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatestatus"></a>
<a id="schema_AggregateStatus"></a>
<a id="tocSaggregatestatus"></a>
<a id="tocsaggregatestatus"></a>

```json
{
  "signatureMap": {
    "property1": true,
    "property2": true
  },
  "status": {}
}
```

Aggregate status of Agent components.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signatureMap|object|false|none|none|
|status|object|true|none|none|

<h2 id="tocS_AngleUnits">AngleUnits</h2>
<!-- backwards compatibility -->
<a id="schemaangleunits"></a>
<a id="schema_AngleUnits"></a>
<a id="tocSangleunits"></a>
<a id="tocsangleunits"></a>

```json
"DEGREE_ANGLE"
```

<h2 id="tocS_AntennaDemodDecodeDetails">AntennaDemodDecodeDetails</h2>
<!-- backwards compatibility -->
<a id="schemaantennademoddecodedetails"></a>
<a id="schema_AntennaDemodDecodeDetails"></a>
<a id="tocSantennademoddecodedetails"></a>
<a id="tocsantennademoddecodedetails"></a>

```json
{
  "outputNode": {}
}
```

Details about an antenna demod decode <code>Config</code> used in a contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputNode|object|false|none|none|

<h2 id="tocS_SpectrumConfig">SpectrumConfig</h2>
<!-- backwards compatibility -->
<a id="schemaspectrumconfig"></a>
<a id="schema_SpectrumConfig"></a>
<a id="tocSspectrumconfig"></a>
<a id="tocsspectrumconfig"></a>

```json
{
  "bandwidth": {
    "units": {},
    "value": {}
  },
  "centerFrequency": {
    "units": {},
    "value": {}
  },
  "polarization": {}
}
```

Object that describes a spectral <code>Config</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth|object|true|none|none|
|centerFrequency|object|true|none|none|
|polarization|object|false|none|none|

<h2 id="tocS_DecodeConfig">DecodeConfig</h2>
<!-- backwards compatibility -->
<a id="schemadecodeconfig"></a>
<a id="schema_DecodeConfig"></a>
<a id="tocSdecodeconfig"></a>
<a id="tocsdecodeconfig"></a>

```json
{
  "unvalidatedJSON": {}
}
```

Information about the decode <code>Config</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unvalidatedJSON|object|true|none|none|

<h2 id="tocS_DemodulationConfig">DemodulationConfig</h2>
<!-- backwards compatibility -->
<a id="schemademodulationconfig"></a>
<a id="schema_DemodulationConfig"></a>
<a id="tocSdemodulationconfig"></a>
<a id="tocsdemodulationconfig"></a>

```json
{
  "unvalidatedJSON": {}
}
```

Information about the demodulation <code>Config</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unvalidatedJSON|object|true|none|none|

<h2 id="tocS_UplinkSpectrumConfig">UplinkSpectrumConfig</h2>
<!-- backwards compatibility -->
<a id="schemauplinkspectrumconfig"></a>
<a id="schema_UplinkSpectrumConfig"></a>
<a id="tocSuplinkspectrumconfig"></a>
<a id="tocsuplinkspectrumconfig"></a>

```json
{
  "centerFrequency": {
    "units": {},
    "value": {}
  },
  "polarization": {}
}
```

Information about the uplink spectral <code>Config</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|centerFrequency|object|true|none|none|
|polarization|object|false|none|none|

<h2 id="tocS_Eirp">Eirp</h2>
<!-- backwards compatibility -->
<a id="schemaeirp"></a>
<a id="schema_Eirp"></a>
<a id="tocSeirp"></a>
<a id="tocseirp"></a>

```json
{
  "units": {},
  "value": {}
}
```

Object that represents EIRP.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|units|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_AnyArn">AnyArn</h2>
<!-- backwards compatibility -->
<a id="schemaanyarn"></a>
<a id="schema_AnyArn"></a>
<a id="tocSanyarn"></a>
<a id="tocsanyarn"></a>

```json
"string"
```

<h2 id="tocS_AuditResults">AuditResults</h2>
<!-- backwards compatibility -->
<a id="schemaauditresults"></a>
<a id="schema_AuditResults"></a>
<a id="tocSauditresults"></a>
<a id="tocsauditresults"></a>

```json
"HEALTHY"
```

<h2 id="tocS_ConnectionDetails">ConnectionDetails</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiondetails"></a>
<a id="schema_ConnectionDetails"></a>
<a id="tocSconnectiondetails"></a>
<a id="tocsconnectiondetails"></a>

```json
{
  "mtu": {},
  "socketAddress": {
    "name": {},
    "port": {}
  }
}
```

Egress address of AgentEndpoint with an optional mtu.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mtu|object|false|none|none|
|socketAddress|object|true|none|none|

<h2 id="tocS_RangedConnectionDetails">RangedConnectionDetails</h2>
<!-- backwards compatibility -->
<a id="schemarangedconnectiondetails"></a>
<a id="schema_RangedConnectionDetails"></a>
<a id="tocSrangedconnectiondetails"></a>
<a id="tocsrangedconnectiondetails"></a>

```json
{
  "mtu": {},
  "socketAddress": {
    "name": {},
    "portRange": {
      "maximum": {},
      "minimum": {}
    }
  }
}
```

Ingress address of AgentEndpoint with a port range and an optional mtu.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mtu|object|false|none|none|
|socketAddress|object|true|none|none|

<h2 id="tocS_SafeName">SafeName</h2>
<!-- backwards compatibility -->
<a id="schemasafename"></a>
<a id="schema_SafeName"></a>
<a id="tocSsafename"></a>
<a id="tocssafename"></a>

```json
"string"
```

<h2 id="tocS_AwsGroundStationAgentEndpoint">AwsGroundStationAgentEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaawsgroundstationagentendpoint"></a>
<a id="schema_AwsGroundStationAgentEndpoint"></a>
<a id="tocSawsgroundstationagentendpoint"></a>
<a id="tocsawsgroundstationagentendpoint"></a>

```json
{
  "agentStatus": {},
  "auditResults": {},
  "egressAddress": {
    "mtu": {},
    "socketAddress": {
      "name": {},
      "port": {}
    }
  },
  "ingressAddress": {
    "mtu": {},
    "socketAddress": {
      "name": {},
      "portRange": {
        "maximum": {},
        "minimum": {}
      }
    }
  },
  "name": {}
}
```

Information about AwsGroundStationAgentEndpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentStatus|object|false|none|none|
|auditResults|object|false|none|none|
|egressAddress|object|true|none|none|
|ingressAddress|object|true|none|none|
|name|object|true|none|none|

<h2 id="tocS_BandwidthUnits">BandwidthUnits</h2>
<!-- backwards compatibility -->
<a id="schemabandwidthunits"></a>
<a id="schema_BandwidthUnits"></a>
<a id="tocSbandwidthunits"></a>
<a id="tocsbandwidthunits"></a>

```json
"GHz"
```

<h2 id="tocS_BucketArn">BucketArn</h2>
<!-- backwards compatibility -->
<a id="schemabucketarn"></a>
<a id="schema_BucketArn"></a>
<a id="tocSbucketarn"></a>
<a id="tocsbucketarn"></a>

```json
"string"
```

<h2 id="tocS_Uuid">Uuid</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_Uuid"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"string"
```

<h2 id="tocS_CancelContactRequest">CancelContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelcontactrequest"></a>
<a id="schema_CancelContactRequest"></a>
<a id="tocScancelcontactrequest"></a>
<a id="tocscancelcontactrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_CapabilityArn">CapabilityArn</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityarn"></a>
<a id="schema_CapabilityArn"></a>
<a id="tocScapabilityarn"></a>
<a id="tocscapabilityarn"></a>

```json
"string"
```

<h2 id="tocS_CapabilityHealth">CapabilityHealth</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityhealth"></a>
<a id="schema_CapabilityHealth"></a>
<a id="tocScapabilityhealth"></a>
<a id="tocscapabilityhealth"></a>

```json
"UNHEALTHY"
```

<h2 id="tocS_CapabilityHealthReason">CapabilityHealthReason</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityhealthreason"></a>
<a id="schema_CapabilityHealthReason"></a>
<a id="tocScapabilityhealthreason"></a>
<a id="tocscapabilityhealthreason"></a>

```json
"NO_REGISTERED_AGENT"
```

<h2 id="tocS_CapabilityHealthReasonList">CapabilityHealthReasonList</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityhealthreasonlist"></a>
<a id="schema_CapabilityHealthReasonList"></a>
<a id="tocScapabilityhealthreasonlist"></a>
<a id="tocscapabilityhealthreasonlist"></a>

```json
[
  "NO_REGISTERED_AGENT"
]
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_ComponentTypeString">ComponentTypeString</h2>
<!-- backwards compatibility -->
<a id="schemacomponenttypestring"></a>
<a id="schema_ComponentTypeString"></a>
<a id="tocScomponenttypestring"></a>
<a id="tocscomponenttypestring"></a>

```json
"string"
```

<h2 id="tocS_ComponentStatusList">ComponentStatusList</h2>
<!-- backwards compatibility -->
<a id="schemacomponentstatuslist"></a>
<a id="schema_ComponentStatusList"></a>
<a id="tocScomponentstatuslist"></a>
<a id="tocscomponentstatuslist"></a>

```json
[
  {
    "bytesReceived": {},
    "bytesSent": {},
    "capabilityArn": {},
    "componentType": {},
    "dataflowId": {},
    "packetsDropped": {},
    "status": {}
  }
]
```

<h2 id="tocS_VersionStringList">VersionStringList</h2>
<!-- backwards compatibility -->
<a id="schemaversionstringlist"></a>
<a id="schema_VersionStringList"></a>
<a id="tocSversionstringlist"></a>
<a id="tocsversionstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ComponentVersion">ComponentVersion</h2>
<!-- backwards compatibility -->
<a id="schemacomponentversion"></a>
<a id="schema_ComponentVersion"></a>
<a id="tocScomponentversion"></a>
<a id="tocscomponentversion"></a>

```json
{
  "componentType": {},
  "versions": {}
}
```

Version information for agent components.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentType|object|true|none|none|
|versions|object|true|none|none|

<h2 id="tocS_ConfigArn">ConfigArn</h2>
<!-- backwards compatibility -->
<a id="schemaconfigarn"></a>
<a id="schema_ConfigArn"></a>
<a id="tocSconfigarn"></a>
<a id="tocsconfigarn"></a>

```json
"string"
```

<h2 id="tocS_ConfigCapabilityType">ConfigCapabilityType</h2>
<!-- backwards compatibility -->
<a id="schemaconfigcapabilitytype"></a>
<a id="schema_ConfigCapabilityType"></a>
<a id="tocSconfigcapabilitytype"></a>
<a id="tocsconfigcapabilitytype"></a>

```json
"antenna-downlink"
```

<h2 id="tocS_S3RecordingDetails">S3RecordingDetails</h2>
<!-- backwards compatibility -->
<a id="schemas3recordingdetails"></a>
<a id="schema_S3RecordingDetails"></a>
<a id="tocSs3recordingdetails"></a>
<a id="tocss3recordingdetails"></a>

```json
{
  "bucketArn": {},
  "keyTemplate": {}
}
```

Details about an S3 recording <code>Config</code> used in a contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketArn|object|false|none|none|
|keyTemplate|object|false|none|none|

<h2 id="tocS_ConfigDetails">ConfigDetails</h2>
<!-- backwards compatibility -->
<a id="schemaconfigdetails"></a>
<a id="schema_ConfigDetails"></a>
<a id="tocSconfigdetails"></a>
<a id="tocsconfigdetails"></a>

```json
{
  "antennaDemodDecodeDetails": {
    "outputNode": {}
  },
  "endpointDetails": {
    "awsGroundStationAgentEndpoint": {
      "agentStatus": {},
      "auditResults": {},
      "egressAddress": {
        "mtu": {},
        "socketAddress": {
          "name": {},
          "port": {}
        }
      },
      "ingressAddress": {
        "mtu": {},
        "socketAddress": {
          "name": {},
          "portRange": {
            "maximum": {},
            "minimum": {}
          }
        }
      },
      "name": {}
    },
    "endpoint": {
      "address": {
        "name": {},
        "port": {}
      },
      "mtu": {},
      "name": {},
      "status": {}
    },
    "healthReasons": {},
    "healthStatus": {},
    "securityDetails": {
      "roleArn": {},
      "securityGroupIds": {},
      "subnetIds": {}
    }
  },
  "s3RecordingDetails": {
    "bucketArn": {},
    "keyTemplate": {}
  }
}
```

Details for certain <code>Config</code> object types in a contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|antennaDemodDecodeDetails|object|false|none|none|
|endpointDetails|[EndpointDetails](#schemaendpointdetails)|false|none|Information about the endpoint details.|
|s3RecordingDetails|object|false|none|none|

<h2 id="tocS_ConfigListItem">ConfigListItem</h2>
<!-- backwards compatibility -->
<a id="schemaconfiglistitem"></a>
<a id="schema_ConfigListItem"></a>
<a id="tocSconfiglistitem"></a>
<a id="tocsconfiglistitem"></a>

```json
{
  "configArn": {},
  "configId": {},
  "configType": {},
  "name": {}
}
```

An item in a list of <code>Config</code> objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configArn|object|false|none|none|
|configId|object|false|none|none|
|configType|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_ConfigList">ConfigList</h2>
<!-- backwards compatibility -->
<a id="schemaconfiglist"></a>
<a id="schema_ConfigList"></a>
<a id="tocSconfiglist"></a>
<a id="tocsconfiglist"></a>

```json
[
  {
    "configArn": {},
    "configId": {},
    "configType": {},
    "name": {}
  }
]
```

<h2 id="tocS_ConfigTypeData">ConfigTypeData</h2>
<!-- backwards compatibility -->
<a id="schemaconfigtypedata"></a>
<a id="schema_ConfigTypeData"></a>
<a id="tocSconfigtypedata"></a>
<a id="tocsconfigtypedata"></a>

```json
{
  "antennaDownlinkConfig": {
    "spectrumConfig": {
      "bandwidth": {
        "units": {},
        "value": {}
      },
      "centerFrequency": {
        "units": {},
        "value": {}
      },
      "polarization": {}
    }
  },
  "antennaDownlinkDemodDecodeConfig": {
    "decodeConfig": {
      "unvalidatedJSON": {}
    },
    "demodulationConfig": {
      "unvalidatedJSON": {}
    },
    "spectrumConfig": {
      "bandwidth": {
        "units": {},
        "value": {}
      },
      "centerFrequency": {
        "units": {},
        "value": {}
      },
      "polarization": {}
    }
  },
  "antennaUplinkConfig": {
    "spectrumConfig": {
      "centerFrequency": {
        "units": {},
        "value": {}
      },
      "polarization": {}
    },
    "targetEirp": {
      "units": {},
      "value": {}
    },
    "transmitDisabled": {}
  },
  "dataflowEndpointConfig": {
    "dataflowEndpointName": {},
    "dataflowEndpointRegion": {}
  },
  "s3RecordingConfig": {
    "bucketArn": {},
    "prefix": {},
    "roleArn": {}
  },
  "trackingConfig": {
    "autotrack": {}
  },
  "uplinkEchoConfig": {
    "antennaUplinkConfigArn": {},
    "enabled": {}
  }
}
```

<p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|antennaDownlinkConfig|object|false|none|none|
|antennaDownlinkDemodDecodeConfig|object|false|none|none|
|antennaUplinkConfig|object|false|none|none|
|dataflowEndpointConfig|object|false|none|none|
|s3RecordingConfig|object|false|none|none|
|trackingConfig|object|false|none|none|
|uplinkEchoConfig|object|false|none|none|

<h2 id="tocS_SocketAddress">SocketAddress</h2>
<!-- backwards compatibility -->
<a id="schemasocketaddress"></a>
<a id="schema_SocketAddress"></a>
<a id="tocSsocketaddress"></a>
<a id="tocssocketaddress"></a>

```json
{
  "name": {},
  "port": {}
}
```

Information about the socket address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|port|object|true|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Elevation">Elevation</h2>
<!-- backwards compatibility -->
<a id="schemaelevation"></a>
<a id="schema_Elevation"></a>
<a id="tocSelevation"></a>
<a id="tocselevation"></a>

```json
{
  "unit": {},
  "value": {}
}
```

Elevation angle of the satellite in the sky during a contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unit|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_MissionProfileArn">MissionProfileArn</h2>
<!-- backwards compatibility -->
<a id="schemamissionprofilearn"></a>
<a id="schema_MissionProfileArn"></a>
<a id="tocSmissionprofilearn"></a>
<a id="tocsmissionprofilearn"></a>

```json
"string"
```

<h2 id="tocS_satelliteArn">satelliteArn</h2>
<!-- backwards compatibility -->
<a id="schemasatellitearn"></a>
<a id="schema_satelliteArn"></a>
<a id="tocSsatellitearn"></a>
<a id="tocssatellitearn"></a>

```json
"string"
```

<h2 id="tocS_TagsMap">TagsMap</h2>
<!-- backwards compatibility -->
<a id="schematagsmap"></a>
<a id="schema_TagsMap"></a>
<a id="tocStagsmap"></a>
<a id="tocstagsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_ContactData">ContactData</h2>
<!-- backwards compatibility -->
<a id="schemacontactdata"></a>
<a id="schema_ContactData"></a>
<a id="tocScontactdata"></a>
<a id="tocscontactdata"></a>

```json
{
  "contactId": {},
  "contactStatus": {},
  "endTime": {},
  "errorMessage": {},
  "groundStation": {},
  "maximumElevation": {
    "unit": {},
    "value": {}
  },
  "missionProfileArn": {},
  "postPassEndTime": {},
  "prePassStartTime": {},
  "region": {},
  "satelliteArn": {},
  "startTime": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Data describing a contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactId|object|false|none|none|
|contactStatus|object|false|none|none|
|endTime|object|false|none|none|
|errorMessage|object|false|none|none|
|groundStation|object|false|none|none|
|maximumElevation|object|false|none|none|
|missionProfileArn|object|false|none|none|
|postPassEndTime|object|false|none|none|
|prePassStartTime|object|false|none|none|
|region|object|false|none|none|
|satelliteArn|object|false|none|none|
|startTime|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ContactList">ContactList</h2>
<!-- backwards compatibility -->
<a id="schemacontactlist"></a>
<a id="schema_ContactList"></a>
<a id="tocScontactlist"></a>
<a id="tocscontactlist"></a>

```json
[
  {
    "contactId": {},
    "contactStatus": {},
    "endTime": {},
    "errorMessage": {},
    "groundStation": {},
    "maximumElevation": {
      "unit": {},
      "value": {}
    },
    "missionProfileArn": {},
    "postPassEndTime": {},
    "prePassStartTime": {},
    "region": {},
    "satelliteArn": {},
    "startTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_CreateConfigRequest">CreateConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigrequest"></a>
<a id="schema_CreateConfigRequest"></a>
<a id="tocScreateconfigrequest"></a>
<a id="tocscreateconfigrequest"></a>

```json
{
  "configData": {
    "antennaDownlinkConfig": {
      "spectrumConfig": {
        "bandwidth": {
          "units": {},
          "value": {}
        },
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      }
    },
    "antennaDownlinkDemodDecodeConfig": {
      "decodeConfig": {
        "unvalidatedJSON": {}
      },
      "demodulationConfig": {
        "unvalidatedJSON": {}
      },
      "spectrumConfig": {
        "bandwidth": {
          "units": {},
          "value": {}
        },
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      }
    },
    "antennaUplinkConfig": {
      "spectrumConfig": {
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      },
      "targetEirp": {
        "units": {},
        "value": {}
      },
      "transmitDisabled": {}
    },
    "dataflowEndpointConfig": {
      "dataflowEndpointName": {},
      "dataflowEndpointRegion": {}
    },
    "s3RecordingConfig": {
      "bucketArn": {},
      "prefix": {},
      "roleArn": {}
    },
    "trackingConfig": {
      "autotrack": {}
    },
    "uplinkEchoConfig": {
      "antennaUplinkConfigArn": {},
      "enabled": {}
    }
  },
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configData|object|true|none|none|
|name|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DataflowEndpointGroupDurationInSeconds">DataflowEndpointGroupDurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemadataflowendpointgroupdurationinseconds"></a>
<a id="schema_DataflowEndpointGroupDurationInSeconds"></a>
<a id="tocSdataflowendpointgroupdurationinseconds"></a>
<a id="tocsdataflowendpointgroupdurationinseconds"></a>

```json
120
```

<h2 id="tocS_EndpointDetailsList">EndpointDetailsList</h2>
<!-- backwards compatibility -->
<a id="schemaendpointdetailslist"></a>
<a id="schema_EndpointDetailsList"></a>
<a id="tocSendpointdetailslist"></a>
<a id="tocsendpointdetailslist"></a>

```json
[
  {
    "awsGroundStationAgentEndpoint": {
      "agentStatus": {},
      "auditResults": {},
      "egressAddress": {
        "mtu": {},
        "socketAddress": {
          "name": {},
          "port": {}
        }
      },
      "ingressAddress": {
        "mtu": {},
        "socketAddress": {
          "name": {},
          "portRange": {
            "maximum": {},
            "minimum": {}
          }
        }
      },
      "name": {}
    },
    "endpoint": {
      "address": {
        "name": {},
        "port": {}
      },
      "mtu": {},
      "name": {},
      "status": {}
    },
    "healthReasons": {},
    "healthStatus": {},
    "securityDetails": {
      "roleArn": {},
      "securityGroupIds": {},
      "subnetIds": {}
    }
  }
]
```

<h2 id="tocS_CreateDataflowEndpointGroupRequest">CreateDataflowEndpointGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedataflowendpointgrouprequest"></a>
<a id="schema_CreateDataflowEndpointGroupRequest"></a>
<a id="tocScreatedataflowendpointgrouprequest"></a>
<a id="tocscreatedataflowendpointgrouprequest"></a>

```json
{
  "contactPostPassDurationSeconds": {},
  "contactPrePassDurationSeconds": {},
  "endpointDetails": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactPostPassDurationSeconds|object|false|none|none|
|contactPrePassDurationSeconds|object|false|none|none|
|endpointDetails|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_EphemerisData">EphemerisData</h2>
<!-- backwards compatibility -->
<a id="schemaephemerisdata"></a>
<a id="schema_EphemerisData"></a>
<a id="tocSephemerisdata"></a>
<a id="tocsephemerisdata"></a>

```json
{
  "oem": {
    "oemData": {},
    "s3Object": {
      "bucket": {},
      "key": {},
      "version": {}
    }
  },
  "tle": {
    "s3Object": {
      "bucket": {},
      "key": {},
      "version": {}
    },
    "tleData": {}
  }
}
```

Ephemeris data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oem|[OEMEphemeris](#schemaoemephemeris)|false|none|Ephemeris data in Orbit Ephemeris Message (OEM) format.|
|tle|[TLEEphemeris](#schematleephemeris)|false|none|Two-line element set (TLE) ephemeris.|

<h2 id="tocS_CustomerEphemerisPriority">CustomerEphemerisPriority</h2>
<!-- backwards compatibility -->
<a id="schemacustomerephemerispriority"></a>
<a id="schema_CustomerEphemerisPriority"></a>
<a id="tocScustomerephemerispriority"></a>
<a id="tocscustomerephemerispriority"></a>

```json
1
```

<h2 id="tocS_CreateEphemerisRequest">CreateEphemerisRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateephemerisrequest"></a>
<a id="schema_CreateEphemerisRequest"></a>
<a id="tocScreateephemerisrequest"></a>
<a id="tocscreateephemerisrequest"></a>

```json
{
  "enabled": {},
  "ephemeris": {
    "oem": {
      "oemData": {},
      "s3Object": {
        "bucket": {},
        "key": {},
        "version": {}
      }
    },
    "tle": {
      "s3Object": {
        "bucket": {},
        "key": {},
        "version": {}
      },
      "tleData": {}
    }
  },
  "expirationTime": {},
  "kmsKeyArn": {},
  "name": {},
  "priority": {},
  "satelliteId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|object|false|none|none|
|ephemeris|object|false|none|none|
|expirationTime|object|false|none|none|
|kmsKeyArn|object|false|none|none|
|name|object|true|none|none|
|priority|object|false|none|none|
|satelliteId|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DurationInSeconds">DurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemadurationinseconds"></a>
<a id="schema_DurationInSeconds"></a>
<a id="tocSdurationinseconds"></a>
<a id="tocsdurationinseconds"></a>

```json
0
```

<h2 id="tocS_DataflowEdgeList">DataflowEdgeList</h2>
<!-- backwards compatibility -->
<a id="schemadataflowedgelist"></a>
<a id="schema_DataflowEdgeList"></a>
<a id="tocSdataflowedgelist"></a>
<a id="tocsdataflowedgelist"></a>

```json
[
  [
    "string",
    "string"
  ]
]
```

<h2 id="tocS_PositiveDurationInSeconds">PositiveDurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemapositivedurationinseconds"></a>
<a id="schema_PositiveDurationInSeconds"></a>
<a id="tocSpositivedurationinseconds"></a>
<a id="tocspositivedurationinseconds"></a>

```json
1
```

<h2 id="tocS_KmsKey">KmsKey</h2>
<!-- backwards compatibility -->
<a id="schemakmskey"></a>
<a id="schema_KmsKey"></a>
<a id="tocSkmskey"></a>
<a id="tocskmskey"></a>

```json
{
  "kmsAliasArn": {},
  "kmsKeyArn": {}
}
```

AWS Key Management Service (KMS) Key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsAliasArn|object|false|none|none|
|kmsKeyArn|object|false|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_CreateMissionProfileRequest">CreateMissionProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemissionprofilerequest"></a>
<a id="schema_CreateMissionProfileRequest"></a>
<a id="tocScreatemissionprofilerequest"></a>
<a id="tocscreatemissionprofilerequest"></a>

```json
{
  "contactPostPassDurationSeconds": {},
  "contactPrePassDurationSeconds": {},
  "dataflowEdges": {},
  "minimumViableContactDurationSeconds": {},
  "name": {},
  "streamsKmsKey": {
    "kmsAliasArn": {},
    "kmsKeyArn": {}
  },
  "streamsKmsRole": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "trackingConfigArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactPostPassDurationSeconds|object|false|none|none|
|contactPrePassDurationSeconds|object|false|none|none|
|dataflowEdges|object|true|none|none|
|minimumViableContactDurationSeconds|object|true|none|none|
|name|object|true|none|none|
|streamsKmsKey|object|false|none|none|
|streamsKmsRole|object|false|none|none|
|tags|object|false|none|none|
|trackingConfigArn|object|true|none|none|

<h2 id="tocS_Criticality">Criticality</h2>
<!-- backwards compatibility -->
<a id="schemacriticality"></a>
<a id="schema_Criticality"></a>
<a id="tocScriticality"></a>
<a id="tocscriticality"></a>

```json
"PREFERRED"
```

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "configDetails": {
    "antennaDemodDecodeDetails": {
      "outputNode": {}
    },
    "endpointDetails": {
      "awsGroundStationAgentEndpoint": {
        "agentStatus": {},
        "auditResults": {},
        "egressAddress": {
          "mtu": {},
          "socketAddress": {
            "name": {},
            "port": {}
          }
        },
        "ingressAddress": {
          "mtu": {},
          "socketAddress": {
            "name": {},
            "portRange": {
              "maximum": {},
              "minimum": {}
            }
          }
        },
        "name": {}
      },
      "endpoint": {
        "address": {
          "name": {},
          "port": {}
        },
        "mtu": {},
        "name": {},
        "status": {}
      },
      "healthReasons": {},
      "healthStatus": {},
      "securityDetails": {
        "roleArn": {},
        "securityGroupIds": {},
        "subnetIds": {}
      }
    },
    "s3RecordingDetails": {
      "bucketArn": {},
      "keyTemplate": {}
    }
  },
  "configId": {},
  "configType": {},
  "dataflowDestinationRegion": {}
}
```

Dataflow details for the destination side.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configDetails|object|false|none|none|
|configId|object|false|none|none|
|configType|object|false|none|none|
|dataflowDestinationRegion|object|false|none|none|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "configDetails": {
    "antennaDemodDecodeDetails": {
      "outputNode": {}
    },
    "endpointDetails": {
      "awsGroundStationAgentEndpoint": {
        "agentStatus": {},
        "auditResults": {},
        "egressAddress": {
          "mtu": {},
          "socketAddress": {
            "name": {},
            "port": {}
          }
        },
        "ingressAddress": {
          "mtu": {},
          "socketAddress": {
            "name": {},
            "portRange": {
              "maximum": {},
              "minimum": {}
            }
          }
        },
        "name": {}
      },
      "endpoint": {
        "address": {
          "name": {},
          "port": {}
        },
        "mtu": {},
        "name": {},
        "status": {}
      },
      "healthReasons": {},
      "healthStatus": {},
      "securityDetails": {
        "roleArn": {},
        "securityGroupIds": {},
        "subnetIds": {}
      }
    },
    "s3RecordingDetails": {
      "bucketArn": {},
      "keyTemplate": {}
    }
  },
  "configId": {},
  "configType": {},
  "dataflowSourceRegion": {}
}
```

Dataflow details for the source side.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configDetails|object|false|none|none|
|configId|object|false|none|none|
|configType|object|false|none|none|
|dataflowSourceRegion|object|false|none|none|

<h2 id="tocS_DataflowDetail">DataflowDetail</h2>
<!-- backwards compatibility -->
<a id="schemadataflowdetail"></a>
<a id="schema_DataflowDetail"></a>
<a id="tocSdataflowdetail"></a>
<a id="tocsdataflowdetail"></a>

```json
{
  "destination": {
    "configDetails": {
      "antennaDemodDecodeDetails": {
        "outputNode": {}
      },
      "endpointDetails": {
        "awsGroundStationAgentEndpoint": {
          "agentStatus": {},
          "auditResults": {},
          "egressAddress": {
            "mtu": {},
            "socketAddress": {
              "name": {},
              "port": {}
            }
          },
          "ingressAddress": {
            "mtu": {},
            "socketAddress": {
              "name": {},
              "portRange": {
                "maximum": {},
                "minimum": {}
              }
            }
          },
          "name": {}
        },
        "endpoint": {
          "address": {
            "name": {},
            "port": {}
          },
          "mtu": {},
          "name": {},
          "status": {}
        },
        "healthReasons": {},
        "healthStatus": {},
        "securityDetails": {
          "roleArn": {},
          "securityGroupIds": {},
          "subnetIds": {}
        }
      },
      "s3RecordingDetails": {
        "bucketArn": {},
        "keyTemplate": {}
      }
    },
    "configId": {},
    "configType": {},
    "dataflowDestinationRegion": {}
  },
  "errorMessage": {},
  "source": {
    "configDetails": {
      "antennaDemodDecodeDetails": {
        "outputNode": {}
      },
      "endpointDetails": {
        "awsGroundStationAgentEndpoint": {
          "agentStatus": {},
          "auditResults": {},
          "egressAddress": {
            "mtu": {},
            "socketAddress": {
              "name": {},
              "port": {}
            }
          },
          "ingressAddress": {
            "mtu": {},
            "socketAddress": {
              "name": {},
              "portRange": {
                "maximum": {},
                "minimum": {}
              }
            }
          },
          "name": {}
        },
        "endpoint": {
          "address": {
            "name": {},
            "port": {}
          },
          "mtu": {},
          "name": {},
          "status": {}
        },
        "healthReasons": {},
        "healthStatus": {},
        "securityDetails": {
          "roleArn": {},
          "securityGroupIds": {},
          "subnetIds": {}
        }
      },
      "s3RecordingDetails": {
        "bucketArn": {},
        "keyTemplate": {}
      }
    },
    "configId": {},
    "configType": {},
    "dataflowSourceRegion": {}
  }
}
```

Information about a dataflow edge used in a contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|[Destination](#schemadestination)|false|none|Dataflow details for the destination side.|
|errorMessage|object|false|none|none|
|source|[Source](#schemasource)|false|none|Dataflow details for the source side.|

<h2 id="tocS_DataflowEndpointMtuInteger">DataflowEndpointMtuInteger</h2>
<!-- backwards compatibility -->
<a id="schemadataflowendpointmtuinteger"></a>
<a id="schema_DataflowEndpointMtuInteger"></a>
<a id="tocSdataflowendpointmtuinteger"></a>
<a id="tocsdataflowendpointmtuinteger"></a>

```json
1400
```

<h2 id="tocS_EndpointStatus">EndpointStatus</h2>
<!-- backwards compatibility -->
<a id="schemaendpointstatus"></a>
<a id="schema_EndpointStatus"></a>
<a id="tocSendpointstatus"></a>
<a id="tocsendpointstatus"></a>

```json
"created"
```

<h2 id="tocS_DataflowEndpoint">DataflowEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemadataflowendpoint"></a>
<a id="schema_DataflowEndpoint"></a>
<a id="tocSdataflowendpoint"></a>
<a id="tocsdataflowendpoint"></a>

```json
{
  "address": {
    "name": {},
    "port": {}
  },
  "mtu": {},
  "name": {},
  "status": {}
}
```

Information about a dataflow endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|object|false|none|none|
|mtu|object|false|none|none|
|name|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_DataflowEndpointGroupArn">DataflowEndpointGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemadataflowendpointgrouparn"></a>
<a id="schema_DataflowEndpointGroupArn"></a>
<a id="tocSdataflowendpointgrouparn"></a>
<a id="tocsdataflowendpointgrouparn"></a>

```json
"string"
```

<h2 id="tocS_DataflowEndpointListItem">DataflowEndpointListItem</h2>
<!-- backwards compatibility -->
<a id="schemadataflowendpointlistitem"></a>
<a id="schema_DataflowEndpointListItem"></a>
<a id="tocSdataflowendpointlistitem"></a>
<a id="tocsdataflowendpointlistitem"></a>

```json
{
  "dataflowEndpointGroupArn": {},
  "dataflowEndpointGroupId": {}
}
```

Item in a list of <code>DataflowEndpoint</code> groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataflowEndpointGroupArn|object|false|none|none|
|dataflowEndpointGroupId|object|false|none|none|

<h2 id="tocS_DataflowEndpointGroupList">DataflowEndpointGroupList</h2>
<!-- backwards compatibility -->
<a id="schemadataflowendpointgrouplist"></a>
<a id="schema_DataflowEndpointGroupList"></a>
<a id="tocSdataflowendpointgrouplist"></a>
<a id="tocsdataflowendpointgrouplist"></a>

```json
[
  {
    "dataflowEndpointGroupArn": {},
    "dataflowEndpointGroupId": {}
  }
]
```

<h2 id="tocS_DataflowList">DataflowList</h2>
<!-- backwards compatibility -->
<a id="schemadataflowlist"></a>
<a id="schema_DataflowList"></a>
<a id="tocSdataflowlist"></a>
<a id="tocsdataflowlist"></a>

```json
[
  {
    "destination": {
      "configDetails": {
        "antennaDemodDecodeDetails": {
          "outputNode": {}
        },
        "endpointDetails": {
          "awsGroundStationAgentEndpoint": {
            "agentStatus": {},
            "auditResults": {},
            "egressAddress": {
              "mtu": {},
              "socketAddress": {
                "name": {},
                "port": {}
              }
            },
            "ingressAddress": {
              "mtu": {},
              "socketAddress": {
                "name": {},
                "portRange": {
                  "maximum": {},
                  "minimum": {}
                }
              }
            },
            "name": {}
          },
          "endpoint": {
            "address": {
              "name": {},
              "port": {}
            },
            "mtu": {},
            "name": {},
            "status": {}
          },
          "healthReasons": {},
          "healthStatus": {},
          "securityDetails": {
            "roleArn": {},
            "securityGroupIds": {},
            "subnetIds": {}
          }
        },
        "s3RecordingDetails": {
          "bucketArn": {},
          "keyTemplate": {}
        }
      },
      "configId": {},
      "configType": {},
      "dataflowDestinationRegion": {}
    },
    "errorMessage": {},
    "source": {
      "configDetails": {
        "antennaDemodDecodeDetails": {
          "outputNode": {}
        },
        "endpointDetails": {
          "awsGroundStationAgentEndpoint": {
            "agentStatus": {},
            "auditResults": {},
            "egressAddress": {
              "mtu": {},
              "socketAddress": {
                "name": {},
                "port": {}
              }
            },
            "ingressAddress": {
              "mtu": {},
              "socketAddress": {
                "name": {},
                "portRange": {
                  "maximum": {},
                  "minimum": {}
                }
              }
            },
            "name": {}
          },
          "endpoint": {
            "address": {
              "name": {},
              "port": {}
            },
            "mtu": {},
            "name": {},
            "status": {}
          },
          "healthReasons": {},
          "healthStatus": {},
          "securityDetails": {
            "roleArn": {},
            "securityGroupIds": {},
            "subnetIds": {}
          }
        },
        "s3RecordingDetails": {
          "bucketArn": {},
          "keyTemplate": {}
        }
      },
      "configId": {},
      "configType": {},
      "dataflowSourceRegion": {}
    }
  }
]
```

<h2 id="tocS_JsonString">JsonString</h2>
<!-- backwards compatibility -->
<a id="schemajsonstring"></a>
<a id="schema_JsonString"></a>
<a id="tocSjsonstring"></a>
<a id="tocsjsonstring"></a>

```json
"string"
```

<h2 id="tocS_DeleteConfigRequest">DeleteConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigrequest"></a>
<a id="schema_DeleteConfigRequest"></a>
<a id="tocSdeleteconfigrequest"></a>
<a id="tocsdeleteconfigrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_DeleteDataflowEndpointGroupRequest">DeleteDataflowEndpointGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedataflowendpointgrouprequest"></a>
<a id="schema_DeleteDataflowEndpointGroupRequest"></a>
<a id="tocSdeletedataflowendpointgrouprequest"></a>
<a id="tocsdeletedataflowendpointgrouprequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_DeleteEphemerisRequest">DeleteEphemerisRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteephemerisrequest"></a>
<a id="schema_DeleteEphemerisRequest"></a>
<a id="tocSdeleteephemerisrequest"></a>
<a id="tocsdeleteephemerisrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteMissionProfileRequest">DeleteMissionProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemissionprofilerequest"></a>
<a id="schema_DeleteMissionProfileRequest"></a>
<a id="tocSdeletemissionprofilerequest"></a>
<a id="tocsdeletemissionprofilerequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_DescribeContactRequest">DescribeContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontactrequest"></a>
<a id="schema_DescribeContactRequest"></a>
<a id="tocSdescribecontactrequest"></a>
<a id="tocsdescribecontactrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_DescribeEphemerisRequest">DescribeEphemerisRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeephemerisrequest"></a>
<a id="schema_DescribeEphemerisRequest"></a>
<a id="tocSdescribeephemerisrequest"></a>
<a id="tocsdescribeephemerisrequest"></a>

```json
{}
```

<h2 id="tocS_EphemerisInvalidReason">EphemerisInvalidReason</h2>
<!-- backwards compatibility -->
<a id="schemaephemerisinvalidreason"></a>
<a id="schema_EphemerisInvalidReason"></a>
<a id="tocSephemerisinvalidreason"></a>
<a id="tocsephemerisinvalidreason"></a>

```json
"METADATA_INVALID"
```

<h2 id="tocS_EphemerisPriority">EphemerisPriority</h2>
<!-- backwards compatibility -->
<a id="schemaephemerispriority"></a>
<a id="schema_EphemerisPriority"></a>
<a id="tocSephemerispriority"></a>
<a id="tocsephemerispriority"></a>

```json
0
```

<h2 id="tocS_EphemerisTypeDescription">EphemerisTypeDescription</h2>
<!-- backwards compatibility -->
<a id="schemaephemeristypedescription"></a>
<a id="schema_EphemerisTypeDescription"></a>
<a id="tocSephemeristypedescription"></a>
<a id="tocsephemeristypedescription"></a>

```json
{
  "oem": {
    "ephemerisData": {},
    "sourceS3Object": {
      "bucket": {},
      "key": {},
      "version": {}
    }
  },
  "tle": {
    "ephemerisData": {},
    "sourceS3Object": {
      "bucket": {},
      "key": {},
      "version": {}
    }
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oem|[EphemerisDescription](#schemaephemerisdescription)|false|none|Description of ephemeris.|
|tle|[EphemerisDescription](#schemaephemerisdescription)|false|none|Description of ephemeris.|

<h2 id="tocS_DiscoveryData">DiscoveryData</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverydata"></a>
<a id="schema_DiscoveryData"></a>
<a id="tocSdiscoverydata"></a>
<a id="tocsdiscoverydata"></a>

```json
{
  "capabilityArns": {},
  "privateIpAddresses": {},
  "publicIpAddresses": {}
}
```

Data for agent discovery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilityArns|object|true|none|none|
|privateIpAddresses|object|true|none|none|
|publicIpAddresses|object|true|none|none|

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_EirpUnits">EirpUnits</h2>
<!-- backwards compatibility -->
<a id="schemaeirpunits"></a>
<a id="schema_EirpUnits"></a>
<a id="tocSeirpunits"></a>
<a id="tocseirpunits"></a>

```json
"dBW"
```

<h2 id="tocS_SecurityDetails">SecurityDetails</h2>
<!-- backwards compatibility -->
<a id="schemasecuritydetails"></a>
<a id="schema_SecurityDetails"></a>
<a id="tocSsecuritydetails"></a>
<a id="tocssecuritydetails"></a>

```json
{
  "roleArn": {},
  "securityGroupIds": {},
  "subnetIds": {}
}
```

Information about endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roleArn|object|true|none|none|
|securityGroupIds|object|true|none|none|
|subnetIds|object|true|none|none|

<h2 id="tocS_EphemerisItem">EphemerisItem</h2>
<!-- backwards compatibility -->
<a id="schemaephemerisitem"></a>
<a id="schema_EphemerisItem"></a>
<a id="tocSephemerisitem"></a>
<a id="tocsephemerisitem"></a>

```json
{
  "creationTime": {},
  "enabled": {},
  "ephemerisId": {},
  "name": {},
  "priority": {},
  "sourceS3Object": {
    "bucket": {},
    "key": {},
    "version": {}
  },
  "status": {}
}
```

Ephemeris item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|object|false|none|none|
|enabled|object|false|none|none|
|ephemerisId|object|false|none|none|
|name|object|false|none|none|
|priority|object|false|none|none|
|sourceS3Object|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_EphemeridesList">EphemeridesList</h2>
<!-- backwards compatibility -->
<a id="schemaephemerideslist"></a>
<a id="schema_EphemeridesList"></a>
<a id="tocSephemerideslist"></a>
<a id="tocsephemerideslist"></a>

```json
[
  {
    "creationTime": {},
    "enabled": {},
    "ephemerisId": {},
    "name": {},
    "priority": {},
    "sourceS3Object": {
      "bucket": {},
      "key": {},
      "version": {}
    },
    "status": {}
  }
]
```

<h2 id="tocS_S3Object">S3Object</h2>
<!-- backwards compatibility -->
<a id="schemas3object"></a>
<a id="schema_S3Object"></a>
<a id="tocSs3object"></a>
<a id="tocss3object"></a>

```json
{
  "bucket": {},
  "key": {},
  "version": {}
}
```

Object stored in S3 containing ephemeris data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|false|none|none|
|key|object|false|none|none|
|version|object|false|none|none|

<h2 id="tocS_EphemerisDescription">EphemerisDescription</h2>
<!-- backwards compatibility -->
<a id="schemaephemerisdescription"></a>
<a id="schema_EphemerisDescription"></a>
<a id="tocSephemerisdescription"></a>
<a id="tocsephemerisdescription"></a>

```json
{
  "ephemerisData": {},
  "sourceS3Object": {
    "bucket": {},
    "key": {},
    "version": {}
  }
}
```

Description of ephemeris.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ephemerisData|object|false|none|none|
|sourceS3Object|object|false|none|none|

<h2 id="tocS_EphemerisSource">EphemerisSource</h2>
<!-- backwards compatibility -->
<a id="schemaephemerissource"></a>
<a id="schema_EphemerisSource"></a>
<a id="tocSephemerissource"></a>
<a id="tocsephemerissource"></a>

```json
"CUSTOMER_PROVIDED"
```

<h2 id="tocS_EphemerisMetaData">EphemerisMetaData</h2>
<!-- backwards compatibility -->
<a id="schemaephemerismetadata"></a>
<a id="schema_EphemerisMetaData"></a>
<a id="tocSephemerismetadata"></a>
<a id="tocsephemerismetadata"></a>

```json
{
  "ephemerisId": {},
  "epoch": {},
  "name": {},
  "source": {}
}
```

Metadata describing a particular ephemeris.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ephemerisId|object|false|none|none|
|epoch|object|false|none|none|
|name|object|false|none|none|
|source|object|true|none|none|

<h2 id="tocS_EphemerisStatusList">EphemerisStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaephemerisstatuslist"></a>
<a id="schema_EphemerisStatusList"></a>
<a id="tocSephemerisstatuslist"></a>
<a id="tocsephemerisstatuslist"></a>

```json
[
  "VALIDATING"
]
```

<h2 id="tocS_FrequencyUnits">FrequencyUnits</h2>
<!-- backwards compatibility -->
<a id="schemafrequencyunits"></a>
<a id="schema_FrequencyUnits"></a>
<a id="tocSfrequencyunits"></a>
<a id="tocsfrequencyunits"></a>

```json
"GHz"
```

<h2 id="tocS_Frequency">Frequency</h2>
<!-- backwards compatibility -->
<a id="schemafrequency"></a>
<a id="schema_Frequency"></a>
<a id="tocSfrequency"></a>
<a id="tocsfrequency"></a>

```json
{
  "units": {},
  "value": {}
}
```

Object that describes the frequency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|units|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_FrequencyBandwidth">FrequencyBandwidth</h2>
<!-- backwards compatibility -->
<a id="schemafrequencybandwidth"></a>
<a id="schema_FrequencyBandwidth"></a>
<a id="tocSfrequencybandwidth"></a>
<a id="tocsfrequencybandwidth"></a>

```json
{
  "units": {},
  "value": {}
}
```

Object that describes the frequency bandwidth.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|units|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_GetAgentConfigurationRequest">GetAgentConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetagentconfigurationrequest"></a>
<a id="schema_GetAgentConfigurationRequest"></a>
<a id="tocSgetagentconfigurationrequest"></a>
<a id="tocsgetagentconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetConfigRequest">GetConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconfigrequest"></a>
<a id="schema_GetConfigRequest"></a>
<a id="tocSgetconfigrequest"></a>
<a id="tocsgetconfigrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_GetDataflowEndpointGroupRequest">GetDataflowEndpointGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdataflowendpointgrouprequest"></a>
<a id="schema_GetDataflowEndpointGroupRequest"></a>
<a id="tocSgetdataflowendpointgrouprequest"></a>
<a id="tocsgetdataflowendpointgrouprequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_Month">Month</h2>
<!-- backwards compatibility -->
<a id="schemamonth"></a>
<a id="schema_Month"></a>
<a id="tocSmonth"></a>
<a id="tocsmonth"></a>

```json
1
```

<h2 id="tocS_Year">Year</h2>
<!-- backwards compatibility -->
<a id="schemayear"></a>
<a id="schema_Year"></a>
<a id="tocSyear"></a>
<a id="tocsyear"></a>

```json
2018
```

<h2 id="tocS_GetMinuteUsageRequest">GetMinuteUsageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetminuteusagerequest"></a>
<a id="schema_GetMinuteUsageRequest"></a>
<a id="tocSgetminuteusagerequest"></a>
<a id="tocsgetminuteusagerequest"></a>

```json
{
  "month": {},
  "year": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|month|object|true|none|none|
|year|object|true|none|none|

<h2 id="tocS_GetMissionProfileRequest">GetMissionProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmissionprofilerequest"></a>
<a id="schema_GetMissionProfileRequest"></a>
<a id="tocSgetmissionprofilerequest"></a>
<a id="tocsgetmissionprofilerequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_GetSatelliteRequest">GetSatelliteRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsatelliterequest"></a>
<a id="schema_GetSatelliteRequest"></a>
<a id="tocSgetsatelliterequest"></a>
<a id="tocsgetsatelliterequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_GroundStationIdList">GroundStationIdList</h2>
<!-- backwards compatibility -->
<a id="schemagroundstationidlist"></a>
<a id="schema_GroundStationIdList"></a>
<a id="tocSgroundstationidlist"></a>
<a id="tocsgroundstationidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_noradSatelliteID">noradSatelliteID</h2>
<!-- backwards compatibility -->
<a id="schemanoradsatelliteid"></a>
<a id="schema_noradSatelliteID"></a>
<a id="tocSnoradsatelliteid"></a>
<a id="tocsnoradsatelliteid"></a>

```json
0
```

<h2 id="tocS_GroundStationName">GroundStationName</h2>
<!-- backwards compatibility -->
<a id="schemagroundstationname"></a>
<a id="schema_GroundStationName"></a>
<a id="tocSgroundstationname"></a>
<a id="tocsgroundstationname"></a>

```json
"string"
```

<h2 id="tocS_GroundStationData">GroundStationData</h2>
<!-- backwards compatibility -->
<a id="schemagroundstationdata"></a>
<a id="schema_GroundStationData"></a>
<a id="tocSgroundstationdata"></a>
<a id="tocsgroundstationdata"></a>

```json
{
  "groundStationId": {},
  "groundStationName": {},
  "region": {}
}
```

Information about the ground station data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groundStationId|object|false|none|none|
|groundStationName|object|false|none|none|
|region|object|false|none|none|

<h2 id="tocS_GroundStationList">GroundStationList</h2>
<!-- backwards compatibility -->
<a id="schemagroundstationlist"></a>
<a id="schema_GroundStationList"></a>
<a id="tocSgroundstationlist"></a>
<a id="tocsgroundstationlist"></a>

```json
[
  {
    "groundStationId": {},
    "groundStationName": {},
    "region": {}
  }
]
```

<h2 id="tocS_IntegerRange">IntegerRange</h2>
<!-- backwards compatibility -->
<a id="schemaintegerrange"></a>
<a id="schema_IntegerRange"></a>
<a id="tocSintegerrange"></a>
<a id="tocsintegerrange"></a>

```json
{
  "maximum": {},
  "minimum": {}
}
```

An integer range that has a minimum and maximum value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maximum|object|true|none|none|
|minimum|object|true|none|none|

<h2 id="tocS_IpV4Address">IpV4Address</h2>
<!-- backwards compatibility -->
<a id="schemaipv4address"></a>
<a id="schema_IpV4Address"></a>
<a id="tocSipv4address"></a>
<a id="tocsipv4address"></a>

```json
"strings"
```

<h2 id="tocS_PaginationMaxResults">PaginationMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemapaginationmaxresults"></a>
<a id="schema_PaginationMaxResults"></a>
<a id="tocSpaginationmaxresults"></a>
<a id="tocspaginationmaxresults"></a>

```json
0
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_ListConfigsRequest">ListConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigsrequest"></a>
<a id="schema_ListConfigsRequest"></a>
<a id="tocSlistconfigsrequest"></a>
<a id="tocslistconfigsrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_StatusList">StatusList</h2>
<!-- backwards compatibility -->
<a id="schemastatuslist"></a>
<a id="schema_StatusList"></a>
<a id="tocSstatuslist"></a>
<a id="tocsstatuslist"></a>

```json
[
  "AVAILABLE"
]
```

<h2 id="tocS_ListContactsRequest">ListContactsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactsrequest"></a>
<a id="schema_ListContactsRequest"></a>
<a id="tocSlistcontactsrequest"></a>
<a id="tocslistcontactsrequest"></a>

```json
{
  "endTime": {},
  "groundStation": {},
  "maxResults": {},
  "missionProfileArn": {},
  "nextToken": {},
  "satelliteArn": {},
  "startTime": {},
  "statusList": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|object|true|none|none|
|groundStation|object|false|none|none|
|maxResults|object|false|none|none|
|missionProfileArn|object|false|none|none|
|nextToken|object|false|none|none|
|satelliteArn|object|false|none|none|
|startTime|object|true|none|none|
|statusList|object|true|none|none|

<h2 id="tocS_ListDataflowEndpointGroupsRequest">ListDataflowEndpointGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdataflowendpointgroupsrequest"></a>
<a id="schema_ListDataflowEndpointGroupsRequest"></a>
<a id="tocSlistdataflowendpointgroupsrequest"></a>
<a id="tocslistdataflowendpointgroupsrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_ListEphemeridesRequest">ListEphemeridesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistephemeridesrequest"></a>
<a id="schema_ListEphemeridesRequest"></a>
<a id="tocSlistephemeridesrequest"></a>
<a id="tocslistephemeridesrequest"></a>

```json
{
  "endTime": {},
  "satelliteId": {},
  "startTime": {},
  "statusList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|object|true|none|none|
|satelliteId|object|true|none|none|
|startTime|object|true|none|none|
|statusList|object|false|none|none|

<h2 id="tocS_ListGroundStationsRequest">ListGroundStationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgroundstationsrequest"></a>
<a id="schema_ListGroundStationsRequest"></a>
<a id="tocSlistgroundstationsrequest"></a>
<a id="tocslistgroundstationsrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_ListMissionProfilesRequest">ListMissionProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmissionprofilesrequest"></a>
<a id="schema_ListMissionProfilesRequest"></a>
<a id="tocSlistmissionprofilesrequest"></a>
<a id="tocslistmissionprofilesrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_MissionProfileList">MissionProfileList</h2>
<!-- backwards compatibility -->
<a id="schemamissionprofilelist"></a>
<a id="schema_MissionProfileList"></a>
<a id="tocSmissionprofilelist"></a>
<a id="tocsmissionprofilelist"></a>

```json
[
  {
    "missionProfileArn": {},
    "missionProfileId": {},
    "name": {},
    "region": {}
  }
]
```

<h2 id="tocS_ListSatellitesRequest">ListSatellitesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsatellitesrequest"></a>
<a id="schema_ListSatellitesRequest"></a>
<a id="tocSlistsatellitesrequest"></a>
<a id="tocslistsatellitesrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_SatelliteList">SatelliteList</h2>
<!-- backwards compatibility -->
<a id="schemasatellitelist"></a>
<a id="schema_SatelliteList"></a>
<a id="tocSsatellitelist"></a>
<a id="tocssatellitelist"></a>

```json
[
  {
    "currentEphemeris": {
      "ephemerisId": {},
      "epoch": {},
      "name": {},
      "source": {}
    },
    "groundStations": {},
    "noradSatelliteID": {},
    "satelliteArn": {},
    "satelliteId": {}
  }
]
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

<p/>

<h2 id="tocS_MissionProfileListItem">MissionProfileListItem</h2>
<!-- backwards compatibility -->
<a id="schemamissionprofilelistitem"></a>
<a id="schema_MissionProfileListItem"></a>
<a id="tocSmissionprofilelistitem"></a>
<a id="tocsmissionprofilelistitem"></a>

```json
{
  "missionProfileArn": {},
  "missionProfileId": {},
  "name": {},
  "region": {}
}
```

Item in a list of mission profiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|missionProfileArn|object|false|none|none|
|missionProfileId|object|false|none|none|
|name|object|false|none|none|
|region|object|false|none|none|

<h2 id="tocS_Polarization">Polarization</h2>
<!-- backwards compatibility -->
<a id="schemapolarization"></a>
<a id="schema_Polarization"></a>
<a id="tocSpolarization"></a>
<a id="tocspolarization"></a>

```json
"LEFT_HAND"
```

<h2 id="tocS_RangedConnectionDetailsMtuInteger">RangedConnectionDetailsMtuInteger</h2>
<!-- backwards compatibility -->
<a id="schemarangedconnectiondetailsmtuinteger"></a>
<a id="schema_RangedConnectionDetailsMtuInteger"></a>
<a id="tocSrangedconnectiondetailsmtuinteger"></a>
<a id="tocsrangedconnectiondetailsmtuinteger"></a>

```json
1400
```

<h2 id="tocS_RangedSocketAddress">RangedSocketAddress</h2>
<!-- backwards compatibility -->
<a id="schemarangedsocketaddress"></a>
<a id="schema_RangedSocketAddress"></a>
<a id="tocSrangedsocketaddress"></a>
<a id="tocsrangedsocketaddress"></a>

```json
{
  "name": {},
  "portRange": {
    "maximum": {},
    "minimum": {}
  }
}
```

A socket address with a port range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|portRange|object|true|none|none|

<h2 id="tocS_RegisterAgentRequest">RegisterAgentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisteragentrequest"></a>
<a id="schema_RegisterAgentRequest"></a>
<a id="tocSregisteragentrequest"></a>
<a id="tocsregisteragentrequest"></a>

```json
{
  "agentDetails": {
    "agentCpuCores": {},
    "agentVersion": {},
    "componentVersions": {},
    "instanceId": {},
    "instanceType": {},
    "reservedCpuCores": {}
  },
  "discoveryData": {
    "capabilityArns": {},
    "privateIpAddresses": {},
    "publicIpAddresses": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentDetails|object|true|none|none|
|discoveryData|object|true|none|none|

<h2 id="tocS_ReserveContactRequest">ReserveContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemareservecontactrequest"></a>
<a id="schema_ReserveContactRequest"></a>
<a id="tocSreservecontactrequest"></a>
<a id="tocsreservecontactrequest"></a>

```json
{
  "endTime": {},
  "groundStation": {},
  "missionProfileArn": {},
  "satelliteArn": {},
  "startTime": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|object|true|none|none|
|groundStation|object|true|none|none|
|missionProfileArn|object|true|none|none|
|satelliteArn|object|true|none|none|
|startTime|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

<h2 id="tocS_S3KeyPrefix">S3KeyPrefix</h2>
<!-- backwards compatibility -->
<a id="schemas3keyprefix"></a>
<a id="schema_S3KeyPrefix"></a>
<a id="tocSs3keyprefix"></a>
<a id="tocss3keyprefix"></a>

```json
"string"
```

<h2 id="tocS_S3ObjectKey">S3ObjectKey</h2>
<!-- backwards compatibility -->
<a id="schemas3objectkey"></a>
<a id="schema_S3ObjectKey"></a>
<a id="tocSs3objectkey"></a>
<a id="tocss3objectkey"></a>

```json
"string"
```

<h2 id="tocS_S3VersionId">S3VersionId</h2>
<!-- backwards compatibility -->
<a id="schemas3versionid"></a>
<a id="schema_S3VersionId"></a>
<a id="tocSs3versionid"></a>
<a id="tocss3versionid"></a>

```json
"string"
```

<h2 id="tocS_SatelliteListItem">SatelliteListItem</h2>
<!-- backwards compatibility -->
<a id="schemasatellitelistitem"></a>
<a id="schema_SatelliteListItem"></a>
<a id="tocSsatellitelistitem"></a>
<a id="tocssatellitelistitem"></a>

```json
{
  "currentEphemeris": {
    "ephemerisId": {},
    "epoch": {},
    "name": {},
    "source": {}
  },
  "groundStations": {},
  "noradSatelliteID": {},
  "satelliteArn": {},
  "satelliteId": {}
}
```

Item in a list of satellites.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentEphemeris|object|false|none|none|
|groundStations|object|false|none|none|
|noradSatelliteID|object|false|none|none|
|satelliteArn|object|false|none|none|
|satelliteId|object|false|none|none|

<h2 id="tocS_SecurityGroupIdList">SecurityGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupidlist"></a>
<a id="schema_SecurityGroupIdList"></a>
<a id="tocSsecuritygroupidlist"></a>
<a id="tocssecuritygroupidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SubnetList">SubnetList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetlist"></a>
<a id="schema_SubnetList"></a>
<a id="tocSsubnetlist"></a>
<a id="tocssubnetlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TleLineOne">TleLineOne</h2>
<!-- backwards compatibility -->
<a id="schematlelineone"></a>
<a id="schema_TleLineOne"></a>
<a id="tocStlelineone"></a>
<a id="tocstlelineone"></a>

```json
"stringstringstringstringstringstringstringstringstringstringstringstr"
```

<h2 id="tocS_TleLineTwo">TleLineTwo</h2>
<!-- backwards compatibility -->
<a id="schematlelinetwo"></a>
<a id="schema_TleLineTwo"></a>
<a id="tocStlelinetwo"></a>
<a id="tocstlelinetwo"></a>

```json
"stringstringstringstringstringstringstringstringstringstringstringstr"
```

<h2 id="tocS_TimeRange">TimeRange</h2>
<!-- backwards compatibility -->
<a id="schematimerange"></a>
<a id="schema_TimeRange"></a>
<a id="tocStimerange"></a>
<a id="tocstimerange"></a>

```json
{
  "endTime": {},
  "startTime": {}
}
```

A time range with a start and end time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|object|true|none|none|
|startTime|object|true|none|none|

<h2 id="tocS_TLEData">TLEData</h2>
<!-- backwards compatibility -->
<a id="schematledata"></a>
<a id="schema_TLEData"></a>
<a id="tocStledata"></a>
<a id="tocstledata"></a>

```json
{
  "tleLine1": {},
  "tleLine2": {},
  "validTimeRange": {
    "endTime": {},
    "startTime": {}
  }
}
```

Two-line element set (TLE) data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tleLine1|object|true|none|none|
|tleLine2|object|true|none|none|
|validTimeRange|object|true|none|none|

<h2 id="tocS_TLEDataList">TLEDataList</h2>
<!-- backwards compatibility -->
<a id="schematledatalist"></a>
<a id="schema_TLEDataList"></a>
<a id="tocStledatalist"></a>
<a id="tocstledatalist"></a>

```json
[
  {
    "tleLine1": {},
    "tleLine2": {},
    "validTimeRange": {
      "endTime": {},
      "startTime": {}
    }
  }
]
```

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

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

<p/>

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

<p/>

<h2 id="tocS_UpdateAgentStatusRequest">UpdateAgentStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateagentstatusrequest"></a>
<a id="schema_UpdateAgentStatusRequest"></a>
<a id="tocSupdateagentstatusrequest"></a>
<a id="tocsupdateagentstatusrequest"></a>

```json
{
  "aggregateStatus": {
    "signatureMap": {
      "property1": true,
      "property2": true
    },
    "status": {}
  },
  "componentStatuses": {},
  "taskId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregateStatus|object|true|none|none|
|componentStatuses|object|true|none|none|
|taskId|object|true|none|none|

<h2 id="tocS_UpdateConfigRequest">UpdateConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigrequest"></a>
<a id="schema_UpdateConfigRequest"></a>
<a id="tocSupdateconfigrequest"></a>
<a id="tocsupdateconfigrequest"></a>

```json
{
  "configData": {
    "antennaDownlinkConfig": {
      "spectrumConfig": {
        "bandwidth": {
          "units": {},
          "value": {}
        },
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      }
    },
    "antennaDownlinkDemodDecodeConfig": {
      "decodeConfig": {
        "unvalidatedJSON": {}
      },
      "demodulationConfig": {
        "unvalidatedJSON": {}
      },
      "spectrumConfig": {
        "bandwidth": {
          "units": {},
          "value": {}
        },
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      }
    },
    "antennaUplinkConfig": {
      "spectrumConfig": {
        "centerFrequency": {
          "units": {},
          "value": {}
        },
        "polarization": {}
      },
      "targetEirp": {
        "units": {},
        "value": {}
      },
      "transmitDisabled": {}
    },
    "dataflowEndpointConfig": {
      "dataflowEndpointName": {},
      "dataflowEndpointRegion": {}
    },
    "s3RecordingConfig": {
      "bucketArn": {},
      "prefix": {},
      "roleArn": {}
    },
    "trackingConfig": {
      "autotrack": {}
    },
    "uplinkEchoConfig": {
      "antennaUplinkConfigArn": {},
      "enabled": {}
    }
  },
  "name": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configData|object|true|none|none|
|name|object|true|none|none|

<h2 id="tocS_UpdateEphemerisRequest">UpdateEphemerisRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateephemerisrequest"></a>
<a id="schema_UpdateEphemerisRequest"></a>
<a id="tocSupdateephemerisrequest"></a>
<a id="tocsupdateephemerisrequest"></a>

```json
{
  "enabled": {},
  "name": {},
  "priority": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|object|true|none|none|
|name|object|false|none|none|
|priority|object|false|none|none|

<h2 id="tocS_UpdateMissionProfileRequest">UpdateMissionProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemissionprofilerequest"></a>
<a id="schema_UpdateMissionProfileRequest"></a>
<a id="tocSupdatemissionprofilerequest"></a>
<a id="tocsupdatemissionprofilerequest"></a>

```json
{
  "contactPostPassDurationSeconds": {},
  "contactPrePassDurationSeconds": {},
  "dataflowEdges": {},
  "minimumViableContactDurationSeconds": {},
  "name": {},
  "streamsKmsKey": {
    "kmsAliasArn": {},
    "kmsKeyArn": {}
  },
  "streamsKmsRole": {},
  "trackingConfigArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactPostPassDurationSeconds|object|false|none|none|
|contactPrePassDurationSeconds|object|false|none|none|
|dataflowEdges|object|false|none|none|
|minimumViableContactDurationSeconds|object|false|none|none|
|name|object|false|none|none|
|streamsKmsKey|object|false|none|none|
|streamsKmsRole|object|false|none|none|
|trackingConfigArn|object|false|none|none|
