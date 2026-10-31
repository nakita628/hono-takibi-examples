<h1 id="amazon-importexport-snowball">Amazon Import/Export Snowball v2016-06-30</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Amazon Web Services Snow Family provides a petabyte-scale data transport solution that uses secure devices to transfer large amounts of data between your on-premises data centers and Amazon Simple Storage Service (Amazon S3). The Snow Family commands described here provide access to the same functionality that is available in the Amazon Web Services Snow Family Management Console, which enables you to create and manage jobs for a Snow Family device. To transfer data locally with a Snow Family device, you'll need to use the Snowball Edge client or the Amazon S3 API Interface for Snowball or OpsHub for Snow Family. For more information, see the <a href="https://docs.aws.amazon.com/AWSImportExport/latest/ug/api-reference.html">User Guide</a>.

Base URLs:

* <a href="http://snowball.us-east-1.amazonaws.com">http://snowball.us-east-1.amazonaws.com</a> - The Amazon Snowball multi-region endpoint

* <a href="https://snowball.us-east-1.amazonaws.com">https://snowball.us-east-1.amazonaws.com</a> - The Amazon Snowball multi-region endpoint

* <a href="http://snowball.cn-north-1.amazonaws.com.cn">http://snowball.cn-north-1.amazonaws.com.cn</a> - The Amazon Snowball endpoint for China (Beijing) and China (Ningxia)

* <a href="https://snowball.cn-north-1.amazonaws.com.cn">https://snowball.cn-north-1.amazonaws.com.cn</a> - The Amazon Snowball endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/snowball/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-importexport-snowball-default">Default</h1>

## CancelCluster

<a id="opIdCancelCluster"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.CancelCluster' \
  -d '{
    "ClusterId": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster`

Cancels a cluster job. You can only cancel a cluster job while it's in the <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster job to cancel it.

> Body parameter

```json
{
  "ClusterId": {}
}
```

<h3 id="cancelcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CancelClusterRequest](#schemacancelclusterrequest)|true|none|
|» ClusterId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.CancelCluster|

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

<h3 id="cancelcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelClusterResult](#schemacancelclusterresult)|
|480|480|KMSRequestFailedException|[KMSRequestFailedException](#schemakmsrequestfailedexception)|
|481|481|InvalidJobStateException|[InvalidJobStateException](#schemainvalidjobstateexception)|
|482|482|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelJob

<a id="opIdCancelJob"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.CancelJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob`

Cancels the specified job. You can only cancel a job before its <code>JobState</code> value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the response element data returned.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="canceljob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CancelJobRequest](#schemacanceljobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.CancelJob|

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

<h3 id="canceljob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelJobResult](#schemacanceljobresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|481|481|InvalidJobStateException|[InvalidJobStateException](#schemainvalidjobstateexception)|
|482|482|KMSRequestFailedException|[KMSRequestFailedException](#schemakmsrequestfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAddress

<a id="opIdCreateAddress"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.CreateAddress' \
  -d '{
    "Address": {
      "AddressId": {},
      "Name": {},
      "Company": {},
      "Street1": {},
      "Street2": {},
      "Street3": {},
      "City": {},
      "StateOrProvince": {},
      "PrefectureOrDistrict": {},
      "Landmark": {},
      "Country": {},
      "PostalCode": {},
      "PhoneNumber": {},
      "IsRestricted": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress`

Creates an address for a Snow device to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.

> Body parameter

```json
{
  "Address": {
    "AddressId": {},
    "Name": {},
    "Company": {},
    "Street1": {},
    "Street2": {},
    "Street3": {},
    "City": {},
    "StateOrProvince": {},
    "PrefectureOrDistrict": {},
    "Landmark": {},
    "Country": {},
    "PostalCode": {},
    "PhoneNumber": {},
    "IsRestricted": {}
  }
}
```

<h3 id="createaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateAddressRequest](#schemacreateaddressrequest)|true|none|
|» Address|body|object|true|none|
|» » AddressId|body|object|false|none|
|» » Name|body|object|false|none|
|» » Company|body|object|false|none|
|» » Street1|body|object|false|none|
|» » Street2|body|object|false|none|
|» » Street3|body|object|false|none|
|» » City|body|object|false|none|
|» » StateOrProvince|body|object|false|none|
|» » PrefectureOrDistrict|body|object|false|none|
|» » Landmark|body|object|false|none|
|» » Country|body|object|false|none|
|» » PostalCode|body|object|false|none|
|» » PhoneNumber|body|object|false|none|
|» » IsRestricted|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.CreateAddress|

> Example responses

> 200 Response

```json
{
  "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b"
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

<h3 id="createaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAddressResult](#schemacreateaddressresult)|
|480|480|InvalidAddressException|[InvalidAddressException](#schemainvalidaddressexception)|
|481|481|UnsupportedAddressException|[UnsupportedAddressException](#schemaunsupportedaddressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCluster

<a id="opIdCreateCluster"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.CreateCluster' \
  -d '{
    "JobType": {},
    "Resources": {
      "S3Resources": {},
      "LambdaResources": {},
      "Ec2AmiResources": {}
    },
    "OnDeviceServiceConfiguration": {
      "NFSOnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {}
      },
      "TGWOnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {}
      },
      "EKSOnDeviceService": {
        "KubernetesVersion": {},
        "EKSAnywhereVersion": {}
      },
      "S3OnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {},
        "ServiceSize": {},
        "FaultTolerance": {}
      }
    },
    "Description": {},
    "AddressId": {},
    "KmsKeyARN": {},
    "RoleARN": {},
    "SnowballType": {},
    "ShippingOption": {},
    "Notification": {
      "SnsTopicARN": {},
      "JobStatesToNotify": {},
      "NotifyAll": {}
    },
    "ForwardingAddressId": {},
    "TaxDocuments": {
      "IND": {
        "GSTIN": {}
      }
    },
    "RemoteManagement": {},
    "InitialClusterSize": {},
    "ForceCreateJobs": {},
    "LongTermPricingIds": {},
    "SnowballCapacityPreference": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster`

Creates an empty cluster. Each cluster supports five nodes. You use the <a>CreateJob</a> action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.

> Body parameter

```json
{
  "JobType": {},
  "Resources": {
    "S3Resources": {},
    "LambdaResources": {},
    "Ec2AmiResources": {}
  },
  "OnDeviceServiceConfiguration": {
    "NFSOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "TGWOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "EKSOnDeviceService": {
      "KubernetesVersion": {},
      "EKSAnywhereVersion": {}
    },
    "S3OnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {},
      "ServiceSize": {},
      "FaultTolerance": {}
    }
  },
  "Description": {},
  "AddressId": {},
  "KmsKeyARN": {},
  "RoleARN": {},
  "SnowballType": {},
  "ShippingOption": {},
  "Notification": {
    "SnsTopicARN": {},
    "JobStatesToNotify": {},
    "NotifyAll": {}
  },
  "ForwardingAddressId": {},
  "TaxDocuments": {
    "IND": {
      "GSTIN": {}
    }
  },
  "RemoteManagement": {},
  "InitialClusterSize": {},
  "ForceCreateJobs": {},
  "LongTermPricingIds": {},
  "SnowballCapacityPreference": {}
}
```

<h3 id="createcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateClusterRequest](#schemacreateclusterrequest)|true|none|
|» JobType|body|object|true|none|
|» Resources|body|object|false|none|
|» » S3Resources|body|object|false|none|
|» » LambdaResources|body|object|false|none|
|» » Ec2AmiResources|body|object|false|none|
|» OnDeviceServiceConfiguration|body|object|false|none|
|» » NFSOnDeviceService|body|object|false|none|
|» » » StorageLimit|body|object|false|none|
|» » » StorageUnit|body|object|false|none|
|» » TGWOnDeviceService|body|object|false|none|
|» » » StorageLimit|body|object|false|none|
|» » » StorageUnit|body|object|false|none|
|» » EKSOnDeviceService|body|object|false|none|
|» » » KubernetesVersion|body|object|false|none|
|» » » EKSAnywhereVersion|body|object|false|none|
|» » S3OnDeviceService|body|object|false|none|
|» » » StorageLimit|body|object|false|none|
|» » » StorageUnit|body|object|false|none|
|» » » ServiceSize|body|object|false|none|
|» » » FaultTolerance|body|object|false|none|
|» Description|body|object|false|none|
|» AddressId|body|object|true|none|
|» KmsKeyARN|body|object|false|none|
|» RoleARN|body|object|false|none|
|» SnowballType|body|object|true|none|
|» ShippingOption|body|object|true|none|
|» Notification|body|object|false|none|
|» » SnsTopicARN|body|object|false|none|
|» » JobStatesToNotify|body|object|false|none|
|» » NotifyAll|body|object|false|none|
|» ForwardingAddressId|body|object|false|none|
|» TaxDocuments|body|object|false|none|
|» » IND|body|[INDTaxDocuments](#schemaindtaxdocuments)|false|The tax documents required in Amazon Web Services Region in India.|
|» RemoteManagement|body|object|false|none|
|» InitialClusterSize|body|object|false|none|
|» ForceCreateJobs|body|object|false|none|
|» LongTermPricingIds|body|object|false|none|
|» SnowballCapacityPreference|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.CreateCluster|

> Example responses

> 200 Response

```json
{
  "ClusterId": "CID123e4567-e89b-12d3-a456-426655440000"
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

<h3 id="createcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateClusterResult](#schemacreateclusterresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|481|481|KMSRequestFailedException|[KMSRequestFailedException](#schemakmsrequestfailedexception)|
|482|482|InvalidInputCombinationException|[InvalidInputCombinationException](#schemainvalidinputcombinationexception)|
|483|483|Ec2RequestFailedException|[Ec2RequestFailedException](#schemaec2requestfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateJob

<a id="opIdCreateJob"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.CreateJob' \
  -d '{
    "JobType": {},
    "Resources": {
      "S3Resources": {},
      "LambdaResources": {},
      "Ec2AmiResources": {}
    },
    "OnDeviceServiceConfiguration": {
      "NFSOnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {}
      },
      "TGWOnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {}
      },
      "EKSOnDeviceService": {
        "KubernetesVersion": {},
        "EKSAnywhereVersion": {}
      },
      "S3OnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {},
        "ServiceSize": {},
        "FaultTolerance": {}
      }
    },
    "Description": {},
    "AddressId": {},
    "KmsKeyARN": {},
    "RoleARN": {},
    "SnowballCapacityPreference": {},
    "ShippingOption": {},
    "Notification": {
      "SnsTopicARN": {},
      "JobStatesToNotify": {},
      "NotifyAll": {}
    },
    "ClusterId": {},
    "SnowballType": {},
    "ForwardingAddressId": {},
    "TaxDocuments": {
      "IND": {
        "GSTIN": {}
      }
    },
    "DeviceConfiguration": {
      "SnowconeDeviceConfiguration": {
        "WirelessConnection": {
          "IsWifiEnabled": {}
        }
      }
    },
    "RemoteManagement": {},
    "LongTermPricingId": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob`

<p>Creates a job to import or export data between Amazon S3 and your on-premises data center. Your Amazon Web Services account must have the right trust policies and permissions in place to create a job for a Snow device. If you're creating a job for a node in a cluster, you only need to provide the <code>clusterId</code> value; the other job attributes are inherited from the cluster. </p> <note> <p>Only the Snowball; Edge device type is supported when ordering clustered jobs.</p> <p>The device capacity is optional.</p> <p>Availability of device types differ by Amazon Web Services Region. For more information about Region availability, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?p=ngi&amp;loc=4">Amazon Web Services Regional Services</a>.</p> </note> <p/> <p class="title"> <b>Snow Family devices and their capacities.</b> </p> <ul> <li> <p>Device type: <b>SNC1_SSD</b> </p> <ul> <li> <p>Capacity: T14</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>SNC1_HDD</b> </p> <ul> <li> <p>Capacity: T8</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_S</b> </p> <ul> <li> <p>Capacity: T98</p> </li> <li> <p>Description: Snowball Edge Storage Optimized for data transfer only </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_CG</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized with GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_C</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE</b> </p> <ul> <li> <p>Capacity: T100</p> </li> <li> <p>Description: Snowball Edge Storage Optimized with EC2 Compute</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T50</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T80</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region. </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>V3_5C</b> </p> <ul> <li> <p>Capacity: T32</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>V3_5S</b> </p> <ul> <li> <p>Capacity: T240</p> </li> <li> <p>Description: Snowball Edge Storage Optimized 210TB</p> </li> </ul> <p/> </li> </ul>

> Body parameter

```json
{
  "JobType": {},
  "Resources": {
    "S3Resources": {},
    "LambdaResources": {},
    "Ec2AmiResources": {}
  },
  "OnDeviceServiceConfiguration": {
    "NFSOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "TGWOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "EKSOnDeviceService": {
      "KubernetesVersion": {},
      "EKSAnywhereVersion": {}
    },
    "S3OnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {},
      "ServiceSize": {},
      "FaultTolerance": {}
    }
  },
  "Description": {},
  "AddressId": {},
  "KmsKeyARN": {},
  "RoleARN": {},
  "SnowballCapacityPreference": {},
  "ShippingOption": {},
  "Notification": {
    "SnsTopicARN": {},
    "JobStatesToNotify": {},
    "NotifyAll": {}
  },
  "ClusterId": {},
  "SnowballType": {},
  "ForwardingAddressId": {},
  "TaxDocuments": {
    "IND": {
      "GSTIN": {}
    }
  },
  "DeviceConfiguration": {
    "SnowconeDeviceConfiguration": {
      "WirelessConnection": {
        "IsWifiEnabled": {}
      }
    }
  },
  "RemoteManagement": {},
  "LongTermPricingId": {}
}
```

<h3 id="createjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateJobRequest](#schemacreatejobrequest)|true|none|
|» JobType|body|object|false|none|
|» Resources|body|object|false|none|
|» » S3Resources|body|object|false|none|
|» » LambdaResources|body|object|false|none|
|» » Ec2AmiResources|body|object|false|none|
|» OnDeviceServiceConfiguration|body|object|false|none|
|» » NFSOnDeviceService|body|object|false|none|
|» » » StorageLimit|body|object|false|none|
|» » » StorageUnit|body|object|false|none|
|» » TGWOnDeviceService|body|object|false|none|
|» » » StorageLimit|body|object|false|none|
|» » » StorageUnit|body|object|false|none|
|» » EKSOnDeviceService|body|object|false|none|
|» » » KubernetesVersion|body|object|false|none|
|» » » EKSAnywhereVersion|body|object|false|none|
|» » S3OnDeviceService|body|object|false|none|
|» » » StorageLimit|body|object|false|none|
|» » » StorageUnit|body|object|false|none|
|» » » ServiceSize|body|object|false|none|
|» » » FaultTolerance|body|object|false|none|
|» Description|body|object|false|none|
|» AddressId|body|object|false|none|
|» KmsKeyARN|body|object|false|none|
|» RoleARN|body|object|false|none|
|» SnowballCapacityPreference|body|object|false|none|
|» ShippingOption|body|object|false|none|
|» Notification|body|object|false|none|
|» » SnsTopicARN|body|object|false|none|
|» » JobStatesToNotify|body|object|false|none|
|» » NotifyAll|body|object|false|none|
|» ClusterId|body|object|false|none|
|» SnowballType|body|object|false|none|
|» ForwardingAddressId|body|object|false|none|
|» TaxDocuments|body|object|false|none|
|» » IND|body|[INDTaxDocuments](#schemaindtaxdocuments)|false|The tax documents required in Amazon Web Services Region in India.|
|» DeviceConfiguration|body|object|false|none|
|» » SnowconeDeviceConfiguration|body|object|false|none|
|» » » WirelessConnection|body|object|false|none|
|» » » » IsWifiEnabled|body|object|false|none|
|» RemoteManagement|body|object|false|none|
|» LongTermPricingId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.CreateJob|

> Example responses

> 200 Response

```json
{
  "JobId": "JID123e4567-e89b-12d3-a456-426655440000"
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

> 484 Response

```json
null
```

<h3 id="createjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateJobResult](#schemacreatejobresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|481|481|KMSRequestFailedException|[KMSRequestFailedException](#schemakmsrequestfailedexception)|
|482|482|InvalidInputCombinationException|[InvalidInputCombinationException](#schemainvalidinputcombinationexception)|
|483|483|ClusterLimitExceededException|[ClusterLimitExceededException](#schemaclusterlimitexceededexception)|
|484|484|Ec2RequestFailedException|[Ec2RequestFailedException](#schemaec2requestfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLongTermPricing

<a id="opIdCreateLongTermPricing"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.CreateLongTermPricing' \
  -d '{
    "LongTermPricingType": {},
    "IsLongTermPricingAutoRenew": {},
    "SnowballType": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing`

Creates a job with the long-term usage option for a device. The long-term usage is a 1-year or 3-year long-term pricing type for the device. You are billed upfront, and Amazon Web Services provides discounts for long-term pricing. 

> Body parameter

```json
{
  "LongTermPricingType": {},
  "IsLongTermPricingAutoRenew": {},
  "SnowballType": {}
}
```

<h3 id="createlongtermpricing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateLongTermPricingRequest](#schemacreatelongtermpricingrequest)|true|none|
|» LongTermPricingType|body|object|true|none|
|» IsLongTermPricingAutoRenew|body|object|false|none|
|» SnowballType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.CreateLongTermPricing|

> Example responses

> 200 Response

```json
{
  "LongTermPricingId": {}
}
```

> 480 Response

```json
null
```

<h3 id="createlongtermpricing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLongTermPricingResult](#schemacreatelongtermpricingresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateReturnShippingLabel

<a id="opIdCreateReturnShippingLabel"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.CreateReturnShippingLabel' \
  -d '{
    "JobId": {},
    "ShippingOption": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel`

Creates a shipping label that will be used to return the Snow device to Amazon Web Services.

> Body parameter

```json
{
  "JobId": {},
  "ShippingOption": {}
}
```

<h3 id="createreturnshippinglabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateReturnShippingLabelRequest](#schemacreatereturnshippinglabelrequest)|true|none|
|» JobId|body|object|true|none|
|» ShippingOption|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.CreateReturnShippingLabel|

> Example responses

> 200 Response

```json
{
  "Status": {}
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

> 484 Response

```json
null
```

<h3 id="createreturnshippinglabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReturnShippingLabelResult](#schemacreatereturnshippinglabelresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|481|481|InvalidJobStateException|[InvalidJobStateException](#schemainvalidjobstateexception)|
|482|482|InvalidInputCombinationException|[InvalidInputCombinationException](#schemainvalidinputcombinationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ReturnShippingLabelAlreadyExistsException|[ReturnShippingLabelAlreadyExistsException](#schemareturnshippinglabelalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAddress

<a id="opIdDescribeAddress"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.DescribeAddress' \
  -d '{
    "AddressId": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress`

Takes an <code>AddressId</code> and returns specific details about that address in the form of an <code>Address</code> object.

> Body parameter

```json
{
  "AddressId": {}
}
```

<h3 id="describeaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAddressRequest](#schemadescribeaddressrequest)|true|none|
|» AddressId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.DescribeAddress|

> Example responses

> 200 Response

```json
{
  "Address": {
    "AddressId": "ADID5643ec50-3eec-4eb3-9be6-9374c10eb51b",
    "City": "Seattle",
    "Company": "My Company",
    "Country": "US",
    "Name": "My Name",
    "PhoneNumber": "425-555-5555",
    "PostalCode": "98101",
    "StateOrProvince": "WA",
    "Street1": "123 Main Street"
  }
}
```

> 480 Response

```json
null
```

<h3 id="describeaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAddressResult](#schemadescribeaddressresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAddresses

<a id="opIdDescribeAddresses"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.DescribeAddresses' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses`

Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeaddresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAddressesRequest](#schemadescribeaddressesrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.DescribeAddresses|

> Example responses

> 200 Response

```json
{
  "Addresses": [
    {
      "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b",
      "City": "Seattle",
      "Company": "My Company",
      "Country": "US",
      "Name": "My Name",
      "PhoneNumber": "425-555-5555",
      "PostalCode": "98101",
      "StateOrProvince": "WA",
      "Street1": "123 Main Street"
    }
  ]
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

<h3 id="describeaddresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAddressesResult](#schemadescribeaddressesresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCluster

<a id="opIdDescribeCluster"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.DescribeCluster' \
  -d '{
    "ClusterId": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster`

Returns information about a specific cluster including shipping information, cluster status, and other important metadata.

> Body parameter

```json
{
  "ClusterId": {}
}
```

<h3 id="describecluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeClusterRequest](#schemadescribeclusterrequest)|true|none|
|» ClusterId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.DescribeCluster|

> Example responses

> 200 Response

```json
{
  "ClusterMetadata": {
    "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b",
    "ClusterId": "CID123e4567-e89b-12d3-a456-426655440000",
    "ClusterState": "Pending",
    "CreationDate": "1480475517.0",
    "Description": "MyCluster",
    "JobType": "LOCAL_USE",
    "KmsKeyARN": "arn:aws:kms:us-east-1:123456789012:key/abcd1234-12ab-34cd-56ef-123456123456",
    "Notification": {
      "JobStatesToNotify": [],
      "NotifyAll": false
    },
    "Resources": {
      "S3Resources": [
        {
          "BucketArn": "arn:aws:s3:::MyBucket",
          "KeyRange": {}
        }
      ]
    },
    "RoleARN": "arn:aws:iam::123456789012:role/snowball-import-S3-role",
    "ShippingOption": "SECOND_DAY"
  }
}
```

> 480 Response

```json
null
```

<h3 id="describecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeClusterResult](#schemadescribeclusterresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeJob

<a id="opIdDescribeJob"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.DescribeJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob`

Returns information about a specific job including shipping information, job status, and other important metadata. 

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeJobRequest](#schemadescribejobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.DescribeJob|

> Example responses

> 200 Response

```json
{
  "JobMetadata": {
    "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b",
    "CreationDate": "1475626164",
    "Description": "My Job",
    "JobId": "JID123e4567-e89b-12d3-a456-426655440000",
    "JobState": "New",
    "JobType": "IMPORT",
    "KmsKeyARN": "arn:aws:kms:us-east-1:123456789012:key/abcd1234-12ab-34cd-56ef-123456123456",
    "Notification": {
      "JobStatesToNotify": [],
      "NotifyAll": false
    },
    "Resources": {
      "S3Resources": [
        {
          "BucketArn": "arn:aws:s3:::MyBucket",
          "KeyRange": {}
        }
      ]
    },
    "RoleARN": "arn:aws:iam::123456789012:role/snowball-import-S3-role",
    "ShippingDetails": {
      "ShippingOption": "SECOND_DAY"
    },
    "SnowballCapacityPreference": "T80",
    "SnowballType": "STANDARD"
  }
}
```

> 480 Response

```json
null
```

<h3 id="describejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJobResult](#schemadescribejobresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReturnShippingLabel

<a id="opIdDescribeReturnShippingLabel"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.DescribeReturnShippingLabel' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel`

Information on the shipping label of a Snow device that is being returned to Amazon Web Services.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describereturnshippinglabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeReturnShippingLabelRequest](#schemadescribereturnshippinglabelrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.DescribeReturnShippingLabel|

> Example responses

> 200 Response

```json
{
  "Status": {},
  "ExpirationDate": {},
  "ReturnShippingLabelURI": {}
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

<h3 id="describereturnshippinglabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReturnShippingLabelResult](#schemadescribereturnshippinglabelresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|481|481|InvalidJobStateException|[InvalidJobStateException](#schemainvalidjobstateexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetJobManifest

<a id="opIdGetJobManifest"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.GetJobManifest' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest`

<p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the <code>GetJobManifest</code> action.</p> <p>The manifest is an encrypted file that you can download after your job enters the <code>WithCustomer</code> status. This is the only valid status for calling this API as the manifest and <code>UnlockCode</code> code value are used for securing your device and should only be used when you have the device. The manifest is decrypted by using the <code>UnlockCode</code> code value, when you pass both values to the Snow device through the Snowball client when the client is started for the first time. </p> <p>As a best practice, we recommend that you don't save a copy of an <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p> <p>The credentials of a given job, including its manifest file and unlock code, expire 360 days after the job is created.</p>

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="getjobmanifest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetJobManifestRequest](#schemagetjobmanifestrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.GetJobManifest|

> Example responses

> 200 Response

```json
{
  "ManifestURI": "https://awsie-frosty-manifests-prod.s3.amazonaws.com/JID123e4567-e89b-12d3-a456-426655440000_manifest.bin?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20161224T005115Z&X-Amz-SignedHeaders=..."
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

<h3 id="getjobmanifest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetJobManifestResult](#schemagetjobmanifestresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|481|481|InvalidJobStateException|[InvalidJobStateException](#schemainvalidjobstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetJobUnlockCode

<a id="opIdGetJobUnlockCode"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.GetJobUnlockCode' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode`

<p>Returns the <code>UnlockCode</code> code value for the specified job. A particular <code>UnlockCode</code> value can be accessed for up to 360 days after the associated job has been created.</p> <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snow device through the Snowball client when the client is started for the first time. The only valid status for calling this API is <code>WithCustomer</code> as the manifest and <code>Unlock</code> code values are used for securing your device and should only be used when you have the device.</p> <p>As a best practice, we recommend that you don't save a copy of the <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p>

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="getjobunlockcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetJobUnlockCodeRequest](#schemagetjobunlockcoderequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.GetJobUnlockCode|

> Example responses

> 200 Response

```json
{
  "UnlockCode": "12345-abcde-56789-fghij-01234"
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

<h3 id="getjobunlockcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetJobUnlockCodeResult](#schemagetjobunlockcoderesult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|481|481|InvalidJobStateException|[InvalidJobStateException](#schemainvalidjobstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSnowballUsage

<a id="opIdGetSnowballUsage"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.GetSnowballUsage' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage`

<p>Returns information about the Snow Family service limit for your account, and also the number of Snow devices your account has in use.</p> <p>The default service limit for the number of Snow devices that you can have at one time is 1. If you want to increase your service limit, contact Amazon Web Services Support.</p>

> Body parameter

```json
{}
```

<h3 id="getsnowballusage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetSnowballUsageRequest](#schemagetsnowballusagerequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.GetSnowballUsage|

> Example responses

> 200 Response

```json
{
  "SnowballLimit": 1,
  "SnowballsInUse": 0
}
```

<h3 id="getsnowballusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSnowballUsageResult](#schemagetsnowballusageresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSoftwareUpdates

<a id="opIdGetSoftwareUpdates"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.GetSoftwareUpdates' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates`

Returns an Amazon S3 presigned URL for an update file associated with a specified <code>JobId</code>.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="getsoftwareupdates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetSoftwareUpdatesRequest](#schemagetsoftwareupdatesrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.GetSoftwareUpdates|

> Example responses

> 200 Response

```json
{
  "UpdatesURI": {}
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

<h3 id="getsoftwareupdates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSoftwareUpdatesResult](#schemagetsoftwareupdatesresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|481|481|InvalidJobStateException|[InvalidJobStateException](#schemainvalidjobstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListClusterJobs

<a id="opIdListClusterJobs"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.ListClusterJobs' \
  -d '{
    "ClusterId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs`

Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.

> Body parameter

```json
{
  "ClusterId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listclusterjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListClusterJobsRequest](#schemalistclusterjobsrequest)|true|none|
|» ClusterId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.ListClusterJobs|

> Example responses

> 200 Response

```json
{
  "JobListEntries": [
    {
      "CreationDate": "1480475524.0",
      "Description": "MyClustrer-node-001",
      "IsMaster": false,
      "JobId": "JID123e4567-e89b-12d3-a456-426655440000",
      "JobState": "New",
      "JobType": "LOCAL_USE",
      "SnowballType": "EDGE"
    },
    {
      "CreationDate": "1480475525.0",
      "Description": "MyClustrer-node-002",
      "IsMaster": false,
      "JobId": "JID123e4567-e89b-12d3-a456-426655440001",
      "JobState": "New",
      "JobType": "LOCAL_USE",
      "SnowballType": "EDGE"
    },
    {
      "CreationDate": "1480475525.0",
      "Description": "MyClustrer-node-003",
      "IsMaster": false,
      "JobId": "JID123e4567-e89b-12d3-a456-426655440002",
      "JobState": "New",
      "JobType": "LOCAL_USE",
      "SnowballType": "EDGE"
    },
    {
      "CreationDate": "1480475525.0",
      "Description": "MyClustrer-node-004",
      "IsMaster": false,
      "JobId": "JID123e4567-e89b-12d3-a456-426655440003",
      "JobState": "New",
      "JobType": "LOCAL_USE",
      "SnowballType": "EDGE"
    },
    {
      "CreationDate": "1480475525.0",
      "Description": "MyClustrer-node-005",
      "IsMaster": false,
      "JobId": "JID123e4567-e89b-12d3-a456-426655440004",
      "JobState": "New",
      "JobType": "LOCAL_USE",
      "SnowballType": "EDGE"
    }
  ]
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

<h3 id="listclusterjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListClusterJobsResult](#schemalistclusterjobsresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListClusters

<a id="opIdListClusters"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.ListClusters' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters`

Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other important status information.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListClustersRequest](#schemalistclustersrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.ListClusters|

> Example responses

> 200 Response

```json
{
  "ClusterListEntries": [
    {
      "ClusterId": "CID123e4567-e89b-12d3-a456-426655440000",
      "ClusterState": "Pending",
      "CreationDate": "1480475517.0",
      "Description": "MyCluster"
    }
  ]
}
```

> 480 Response

```json
null
```

<h3 id="listclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListClustersResult](#schemalistclustersresult)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCompatibleImages

<a id="opIdListCompatibleImages"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.ListCompatibleImages' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages`

This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs) that are owned by your Amazon Web Services accountthat would be supported for use on a Snow device. Currently, supported AMIs are based on the Amazon Linux-2, Ubuntu 20.04 LTS - Focal, or Ubuntu 22.04 LTS - Jammy images, available on the Amazon Web Services Marketplace. Ubuntu 16.04 LTS - Xenial (HVM) images are no longer supported in the Market, but still supported for use on devices through Amazon EC2 VM Import/Export and running locally in AMIs.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listcompatibleimages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCompatibleImagesRequest](#schemalistcompatibleimagesrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.ListCompatibleImages|

> Example responses

> 200 Response

```json
{
  "CompatibleImages": {},
  "NextToken": {}
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

<h3 id="listcompatibleimages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCompatibleImagesResult](#schemalistcompatibleimagesresult)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|Ec2RequestFailedException|[Ec2RequestFailedException](#schemaec2requestfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJobs

<a id="opIdListJobs"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.ListJobs' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs`

Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListJobsRequest](#schemalistjobsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.ListJobs|

> Example responses

> 200 Response

```json
{
  "JobListEntries": [
    {
      "CreationDate": "1460678186.0",
      "Description": "MyJob",
      "IsMaster": false,
      "JobId": "JID123e4567-e89b-12d3-a456-426655440000",
      "JobState": "New",
      "JobType": "IMPORT",
      "SnowballType": "STANDARD"
    }
  ]
}
```

> 480 Response

```json
null
```

<h3 id="listjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobsResult](#schemalistjobsresult)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLongTermPricing

<a id="opIdListLongTermPricing"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.ListLongTermPricing' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing`

Lists all long-term pricing types.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listlongtermpricing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListLongTermPricingRequest](#schemalistlongtermpricingrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.ListLongTermPricing|

> Example responses

> 200 Response

```json
{
  "LongTermPricingEntries": {},
  "NextToken": {}
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

<h3 id="listlongtermpricing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLongTermPricingResult](#schemalistlongtermpricingresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServiceVersions

<a id="opIdListServiceVersions"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.ListServiceVersions' \
  -d '{
    "ServiceName": {},
    "DependentServices": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions`

Lists all supported versions for Snow on-device services. Returns an array of <code>ServiceVersion</code> object containing the supported versions for a particular service.

> Body parameter

```json
{
  "ServiceName": {},
  "DependentServices": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listserviceversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListServiceVersionsRequest](#schemalistserviceversionsrequest)|true|none|
|» ServiceName|body|object|true|none|
|» DependentServices|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.ListServiceVersions|

> Example responses

> 200 Response

```json
{
  "ServiceVersions": {},
  "ServiceName": {},
  "DependentServices": {},
  "NextToken": {}
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

<h3 id="listserviceversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServiceVersionsResult](#schemalistserviceversionsresult)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCluster

<a id="opIdUpdateCluster"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.UpdateCluster' \
  -d '{
    "ClusterId": {},
    "RoleARN": {},
    "Description": {},
    "Resources": {
      "S3Resources": {},
      "LambdaResources": {},
      "Ec2AmiResources": {}
    },
    "OnDeviceServiceConfiguration": {
      "NFSOnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {}
      },
      "TGWOnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {}
      },
      "EKSOnDeviceService": {
        "KubernetesVersion": {},
        "EKSAnywhereVersion": {}
      },
      "S3OnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {},
        "ServiceSize": {},
        "FaultTolerance": {}
      }
    },
    "AddressId": {},
    "ShippingOption": {},
    "Notification": {
      "SnsTopicARN": {},
      "JobStatesToNotify": {},
      "NotifyAll": {}
    },
    "ForwardingAddressId": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster`

While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code> state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.

> Body parameter

```json
{
  "ClusterId": {},
  "RoleARN": {},
  "Description": {},
  "Resources": {
    "S3Resources": {},
    "LambdaResources": {},
    "Ec2AmiResources": {}
  },
  "OnDeviceServiceConfiguration": {
    "NFSOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "TGWOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "EKSOnDeviceService": {
      "KubernetesVersion": {},
      "EKSAnywhereVersion": {}
    },
    "S3OnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {},
      "ServiceSize": {},
      "FaultTolerance": {}
    }
  },
  "AddressId": {},
  "ShippingOption": {},
  "Notification": {
    "SnsTopicARN": {},
    "JobStatesToNotify": {},
    "NotifyAll": {}
  },
  "ForwardingAddressId": {}
}
```

<h3 id="updatecluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateClusterRequest](#schemaupdateclusterrequest)|true|none|
|» ClusterId|body|object|true|none|
|» RoleARN|body|object|false|none|
|» Description|body|object|false|none|
|» Resources|body|object|false|none|
|» » S3Resources|body|object|false|none|
|» » LambdaResources|body|object|false|none|
|» » Ec2AmiResources|body|object|false|none|
|» OnDeviceServiceConfiguration|body|object|false|none|
|» » NFSOnDeviceService|body|object|false|none|
|» » » StorageLimit|body|object|false|none|
|» » » StorageUnit|body|object|false|none|
|» » TGWOnDeviceService|body|object|false|none|
|» » » StorageLimit|body|object|false|none|
|» » » StorageUnit|body|object|false|none|
|» » EKSOnDeviceService|body|object|false|none|
|» » » KubernetesVersion|body|object|false|none|
|» » » EKSAnywhereVersion|body|object|false|none|
|» » S3OnDeviceService|body|object|false|none|
|» » » StorageLimit|body|object|false|none|
|» » » StorageUnit|body|object|false|none|
|» » » ServiceSize|body|object|false|none|
|» » » FaultTolerance|body|object|false|none|
|» AddressId|body|object|false|none|
|» ShippingOption|body|object|false|none|
|» Notification|body|object|false|none|
|» » SnsTopicARN|body|object|false|none|
|» » JobStatesToNotify|body|object|false|none|
|» » NotifyAll|body|object|false|none|
|» ForwardingAddressId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.UpdateCluster|

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

> 484 Response

```json
null
```

<h3 id="updatecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateClusterResult](#schemaupdateclusterresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|481|481|InvalidJobStateException|[InvalidJobStateException](#schemainvalidjobstateexception)|
|482|482|KMSRequestFailedException|[KMSRequestFailedException](#schemakmsrequestfailedexception)|
|483|483|InvalidInputCombinationException|[InvalidInputCombinationException](#schemainvalidinputcombinationexception)|
|484|484|Ec2RequestFailedException|[Ec2RequestFailedException](#schemaec2requestfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateJob

<a id="opIdUpdateJob"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.UpdateJob' \
  -d '{
    "JobId": {},
    "RoleARN": {},
    "Notification": {
      "SnsTopicARN": {},
      "JobStatesToNotify": {},
      "NotifyAll": {}
    },
    "Resources": {
      "S3Resources": {},
      "LambdaResources": {},
      "Ec2AmiResources": {}
    },
    "OnDeviceServiceConfiguration": {
      "NFSOnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {}
      },
      "TGWOnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {}
      },
      "EKSOnDeviceService": {
        "KubernetesVersion": {},
        "EKSAnywhereVersion": {}
      },
      "S3OnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {},
        "ServiceSize": {},
        "FaultTolerance": {}
      }
    },
    "AddressId": {},
    "ShippingOption": {},
    "Description": {},
    "SnowballCapacityPreference": {},
    "ForwardingAddressId": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob`

While a job's <code>JobState</code> value is <code>New</code>, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.

> Body parameter

```json
{
  "JobId": {},
  "RoleARN": {},
  "Notification": {
    "SnsTopicARN": {},
    "JobStatesToNotify": {},
    "NotifyAll": {}
  },
  "Resources": {
    "S3Resources": {},
    "LambdaResources": {},
    "Ec2AmiResources": {}
  },
  "OnDeviceServiceConfiguration": {
    "NFSOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "TGWOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "EKSOnDeviceService": {
      "KubernetesVersion": {},
      "EKSAnywhereVersion": {}
    },
    "S3OnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {},
      "ServiceSize": {},
      "FaultTolerance": {}
    }
  },
  "AddressId": {},
  "ShippingOption": {},
  "Description": {},
  "SnowballCapacityPreference": {},
  "ForwardingAddressId": {}
}
```

<h3 id="updatejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateJobRequest](#schemaupdatejobrequest)|true|none|
|» JobId|body|object|true|none|
|» RoleARN|body|object|false|none|
|» Notification|body|object|false|none|
|» » SnsTopicARN|body|object|false|none|
|» » JobStatesToNotify|body|object|false|none|
|» » NotifyAll|body|object|false|none|
|» Resources|body|object|false|none|
|» » S3Resources|body|object|false|none|
|» » LambdaResources|body|object|false|none|
|» » Ec2AmiResources|body|object|false|none|
|» OnDeviceServiceConfiguration|body|object|false|none|
|» » NFSOnDeviceService|body|object|false|none|
|» » » StorageLimit|body|object|false|none|
|» » » StorageUnit|body|object|false|none|
|» » TGWOnDeviceService|body|object|false|none|
|» » » StorageLimit|body|object|false|none|
|» » » StorageUnit|body|object|false|none|
|» » EKSOnDeviceService|body|object|false|none|
|» » » KubernetesVersion|body|object|false|none|
|» » » EKSAnywhereVersion|body|object|false|none|
|» » S3OnDeviceService|body|object|false|none|
|» » » StorageLimit|body|object|false|none|
|» » » StorageUnit|body|object|false|none|
|» » » ServiceSize|body|object|false|none|
|» » » FaultTolerance|body|object|false|none|
|» AddressId|body|object|false|none|
|» ShippingOption|body|object|false|none|
|» Description|body|object|false|none|
|» SnowballCapacityPreference|body|object|false|none|
|» ForwardingAddressId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.UpdateJob|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateJobResult](#schemaupdatejobresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|481|481|InvalidJobStateException|[InvalidJobStateException](#schemainvalidjobstateexception)|
|482|482|KMSRequestFailedException|[KMSRequestFailedException](#schemakmsrequestfailedexception)|
|483|483|InvalidInputCombinationException|[InvalidInputCombinationException](#schemainvalidinputcombinationexception)|
|484|484|ClusterLimitExceededException|[ClusterLimitExceededException](#schemaclusterlimitexceededexception)|
|485|485|Ec2RequestFailedException|[Ec2RequestFailedException](#schemaec2requestfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateJobShipmentState

<a id="opIdUpdateJobShipmentState"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.UpdateJobShipmentState' \
  -d '{
    "JobId": {},
    "ShipmentState": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState`

Updates the state when a shipment state changes to a different state.

> Body parameter

```json
{
  "JobId": {},
  "ShipmentState": {}
}
```

<h3 id="updatejobshipmentstate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateJobShipmentStateRequest](#schemaupdatejobshipmentstaterequest)|true|none|
|» JobId|body|object|true|none|
|» ShipmentState|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.UpdateJobShipmentState|

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

<h3 id="updatejobshipmentstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateJobShipmentStateResult](#schemaupdatejobshipmentstateresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|481|481|InvalidJobStateException|[InvalidJobStateException](#schemainvalidjobstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLongTermPricing

<a id="opIdUpdateLongTermPricing"></a>

> Code samples

```bash
curl 'https://snowball.us-east-1.amazonaws.com/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIESnowballJobManagementService.UpdateLongTermPricing' \
  -d '{
    "LongTermPricingId": {},
    "ReplacementJob": {},
    "IsLongTermPricingAutoRenew": {}
  }'
```

`POST /#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing`

Updates the long-term pricing type.

> Body parameter

```json
{
  "LongTermPricingId": {},
  "ReplacementJob": {},
  "IsLongTermPricingAutoRenew": {}
}
```

<h3 id="updatelongtermpricing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateLongTermPricingRequest](#schemaupdatelongtermpricingrequest)|true|none|
|» LongTermPricingId|body|object|true|none|
|» ReplacementJob|body|object|false|none|
|» IsLongTermPricingAutoRenew|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIESnowballJobManagementService.UpdateLongTermPricing|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="updatelongtermpricing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLongTermPricingResult](#schemaupdatelongtermpricingresult)|
|480|480|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelClusterResult">CancelClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemacancelclusterresult"></a>
<a id="schema_CancelClusterResult"></a>
<a id="tocScancelclusterresult"></a>
<a id="tocscancelclusterresult"></a>

```json
{}
```

<h2 id="tocS_CancelClusterRequest">CancelClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelclusterrequest"></a>
<a id="schema_CancelClusterRequest"></a>
<a id="tocScancelclusterrequest"></a>
<a id="tocscancelclusterrequest"></a>

```json
{
  "ClusterId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|

<h2 id="tocS_KMSRequestFailedException">KMSRequestFailedException</h2>
<!-- backwards compatibility -->
<a id="schemakmsrequestfailedexception"></a>
<a id="schema_KMSRequestFailedException"></a>
<a id="tocSkmsrequestfailedexception"></a>
<a id="tocskmsrequestfailedexception"></a>

```json
null
```

<h2 id="tocS_InvalidJobStateException">InvalidJobStateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidjobstateexception"></a>
<a id="schema_InvalidJobStateException"></a>
<a id="tocSinvalidjobstateexception"></a>
<a id="tocsinvalidjobstateexception"></a>

```json
null
```

<h2 id="tocS_InvalidResourceException">InvalidResourceException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresourceexception"></a>
<a id="schema_InvalidResourceException"></a>
<a id="tocSinvalidresourceexception"></a>
<a id="tocsinvalidresourceexception"></a>

```json
null
```

<h2 id="tocS_CancelJobResult">CancelJobResult</h2>
<!-- backwards compatibility -->
<a id="schemacanceljobresult"></a>
<a id="schema_CancelJobResult"></a>
<a id="tocScanceljobresult"></a>
<a id="tocscanceljobresult"></a>

```json
{}
```

<h2 id="tocS_CancelJobRequest">CancelJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceljobrequest"></a>
<a id="schema_CancelJobRequest"></a>
<a id="tocScanceljobrequest"></a>
<a id="tocscanceljobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_CreateAddressResult">CreateAddressResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateaddressresult"></a>
<a id="schema_CreateAddressResult"></a>
<a id="tocScreateaddressresult"></a>
<a id="tocscreateaddressresult"></a>

```json
{
  "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressId|object|false|none|none|

<h2 id="tocS_CreateAddressRequest">CreateAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaddressrequest"></a>
<a id="schema_CreateAddressRequest"></a>
<a id="tocScreateaddressrequest"></a>
<a id="tocscreateaddressrequest"></a>

```json
{
  "Address": {
    "AddressId": {},
    "Name": {},
    "Company": {},
    "Street1": {},
    "Street2": {},
    "Street3": {},
    "City": {},
    "StateOrProvince": {},
    "PrefectureOrDistrict": {},
    "Landmark": {},
    "Country": {},
    "PostalCode": {},
    "PhoneNumber": {},
    "IsRestricted": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|object|true|none|none|

<h2 id="tocS_InvalidAddressException">InvalidAddressException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidaddressexception"></a>
<a id="schema_InvalidAddressException"></a>
<a id="tocSinvalidaddressexception"></a>
<a id="tocsinvalidaddressexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedAddressException">UnsupportedAddressException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedaddressexception"></a>
<a id="schema_UnsupportedAddressException"></a>
<a id="tocSunsupportedaddressexception"></a>
<a id="tocsunsupportedaddressexception"></a>

```json
null
```

<h2 id="tocS_CreateClusterResult">CreateClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterresult"></a>
<a id="schema_CreateClusterResult"></a>
<a id="tocScreateclusterresult"></a>
<a id="tocscreateclusterresult"></a>

```json
{
  "ClusterId": "CID123e4567-e89b-12d3-a456-426655440000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|false|none|none|
|JobListEntries|object|false|none|none|

<h2 id="tocS_CreateClusterRequest">CreateClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterrequest"></a>
<a id="schema_CreateClusterRequest"></a>
<a id="tocScreateclusterrequest"></a>
<a id="tocscreateclusterrequest"></a>

```json
{
  "JobType": {},
  "Resources": {
    "S3Resources": {},
    "LambdaResources": {},
    "Ec2AmiResources": {}
  },
  "OnDeviceServiceConfiguration": {
    "NFSOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "TGWOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "EKSOnDeviceService": {
      "KubernetesVersion": {},
      "EKSAnywhereVersion": {}
    },
    "S3OnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {},
      "ServiceSize": {},
      "FaultTolerance": {}
    }
  },
  "Description": {},
  "AddressId": {},
  "KmsKeyARN": {},
  "RoleARN": {},
  "SnowballType": {},
  "ShippingOption": {},
  "Notification": {
    "SnsTopicARN": {},
    "JobStatesToNotify": {},
    "NotifyAll": {}
  },
  "ForwardingAddressId": {},
  "TaxDocuments": {
    "IND": {
      "GSTIN": {}
    }
  },
  "RemoteManagement": {},
  "InitialClusterSize": {},
  "ForceCreateJobs": {},
  "LongTermPricingIds": {},
  "SnowballCapacityPreference": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobType|object|true|none|none|
|Resources|object|false|none|none|
|OnDeviceServiceConfiguration|object|false|none|none|
|Description|object|false|none|none|
|AddressId|object|true|none|none|
|KmsKeyARN|object|false|none|none|
|RoleARN|object|false|none|none|
|SnowballType|object|true|none|none|
|ShippingOption|object|true|none|none|
|Notification|object|false|none|none|
|ForwardingAddressId|object|false|none|none|
|TaxDocuments|object|false|none|none|
|RemoteManagement|object|false|none|none|
|InitialClusterSize|object|false|none|none|
|ForceCreateJobs|object|false|none|none|
|LongTermPricingIds|object|false|none|none|
|SnowballCapacityPreference|object|false|none|none|

<h2 id="tocS_InvalidInputCombinationException">InvalidInputCombinationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinputcombinationexception"></a>
<a id="schema_InvalidInputCombinationException"></a>
<a id="tocSinvalidinputcombinationexception"></a>
<a id="tocsinvalidinputcombinationexception"></a>

```json
null
```

<h2 id="tocS_Ec2RequestFailedException">Ec2RequestFailedException</h2>
<!-- backwards compatibility -->
<a id="schemaec2requestfailedexception"></a>
<a id="schema_Ec2RequestFailedException"></a>
<a id="tocSec2requestfailedexception"></a>
<a id="tocsec2requestfailedexception"></a>

```json
null
```

<h2 id="tocS_CreateJobResult">CreateJobResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobresult"></a>
<a id="schema_CreateJobResult"></a>
<a id="tocScreatejobresult"></a>
<a id="tocscreatejobresult"></a>

```json
{
  "JobId": "JID123e4567-e89b-12d3-a456-426655440000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_CreateJobRequest">CreateJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobrequest"></a>
<a id="schema_CreateJobRequest"></a>
<a id="tocScreatejobrequest"></a>
<a id="tocscreatejobrequest"></a>

```json
{
  "JobType": {},
  "Resources": {
    "S3Resources": {},
    "LambdaResources": {},
    "Ec2AmiResources": {}
  },
  "OnDeviceServiceConfiguration": {
    "NFSOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "TGWOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "EKSOnDeviceService": {
      "KubernetesVersion": {},
      "EKSAnywhereVersion": {}
    },
    "S3OnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {},
      "ServiceSize": {},
      "FaultTolerance": {}
    }
  },
  "Description": {},
  "AddressId": {},
  "KmsKeyARN": {},
  "RoleARN": {},
  "SnowballCapacityPreference": {},
  "ShippingOption": {},
  "Notification": {
    "SnsTopicARN": {},
    "JobStatesToNotify": {},
    "NotifyAll": {}
  },
  "ClusterId": {},
  "SnowballType": {},
  "ForwardingAddressId": {},
  "TaxDocuments": {
    "IND": {
      "GSTIN": {}
    }
  },
  "DeviceConfiguration": {
    "SnowconeDeviceConfiguration": {
      "WirelessConnection": {
        "IsWifiEnabled": {}
      }
    }
  },
  "RemoteManagement": {},
  "LongTermPricingId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobType|object|false|none|none|
|Resources|object|false|none|none|
|OnDeviceServiceConfiguration|object|false|none|none|
|Description|object|false|none|none|
|AddressId|object|false|none|none|
|KmsKeyARN|object|false|none|none|
|RoleARN|object|false|none|none|
|SnowballCapacityPreference|object|false|none|none|
|ShippingOption|object|false|none|none|
|Notification|object|false|none|none|
|ClusterId|object|false|none|none|
|SnowballType|object|false|none|none|
|ForwardingAddressId|object|false|none|none|
|TaxDocuments|object|false|none|none|
|DeviceConfiguration|object|false|none|none|
|RemoteManagement|object|false|none|none|
|LongTermPricingId|object|false|none|none|

<h2 id="tocS_ClusterLimitExceededException">ClusterLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaclusterlimitexceededexception"></a>
<a id="schema_ClusterLimitExceededException"></a>
<a id="tocSclusterlimitexceededexception"></a>
<a id="tocsclusterlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateLongTermPricingResult">CreateLongTermPricingResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatelongtermpricingresult"></a>
<a id="schema_CreateLongTermPricingResult"></a>
<a id="tocScreatelongtermpricingresult"></a>
<a id="tocscreatelongtermpricingresult"></a>

```json
{
  "LongTermPricingId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LongTermPricingId|object|false|none|none|

<h2 id="tocS_CreateLongTermPricingRequest">CreateLongTermPricingRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelongtermpricingrequest"></a>
<a id="schema_CreateLongTermPricingRequest"></a>
<a id="tocScreatelongtermpricingrequest"></a>
<a id="tocscreatelongtermpricingrequest"></a>

```json
{
  "LongTermPricingType": {},
  "IsLongTermPricingAutoRenew": {},
  "SnowballType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LongTermPricingType|object|true|none|none|
|IsLongTermPricingAutoRenew|object|false|none|none|
|SnowballType|object|false|none|none|

<h2 id="tocS_CreateReturnShippingLabelResult">CreateReturnShippingLabelResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatereturnshippinglabelresult"></a>
<a id="schema_CreateReturnShippingLabelResult"></a>
<a id="tocScreatereturnshippinglabelresult"></a>
<a id="tocscreatereturnshippinglabelresult"></a>

```json
{
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_CreateReturnShippingLabelRequest">CreateReturnShippingLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatereturnshippinglabelrequest"></a>
<a id="schema_CreateReturnShippingLabelRequest"></a>
<a id="tocScreatereturnshippinglabelrequest"></a>
<a id="tocscreatereturnshippinglabelrequest"></a>

```json
{
  "JobId": {},
  "ShippingOption": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|
|ShippingOption|object|false|none|none|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_ReturnShippingLabelAlreadyExistsException">ReturnShippingLabelAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemareturnshippinglabelalreadyexistsexception"></a>
<a id="schema_ReturnShippingLabelAlreadyExistsException"></a>
<a id="tocSreturnshippinglabelalreadyexistsexception"></a>
<a id="tocsreturnshippinglabelalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_DescribeAddressResult">DescribeAddressResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaddressresult"></a>
<a id="schema_DescribeAddressResult"></a>
<a id="tocSdescribeaddressresult"></a>
<a id="tocsdescribeaddressresult"></a>

```json
{
  "Address": {
    "AddressId": "ADID5643ec50-3eec-4eb3-9be6-9374c10eb51b",
    "City": "Seattle",
    "Company": "My Company",
    "Country": "US",
    "Name": "My Name",
    "PhoneNumber": "425-555-5555",
    "PostalCode": "98101",
    "StateOrProvince": "WA",
    "Street1": "123 Main Street"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|object|false|none|none|

<h2 id="tocS_DescribeAddressRequest">DescribeAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaddressrequest"></a>
<a id="schema_DescribeAddressRequest"></a>
<a id="tocSdescribeaddressrequest"></a>
<a id="tocsdescribeaddressrequest"></a>

```json
{
  "AddressId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressId|object|true|none|none|

<h2 id="tocS_DescribeAddressesResult">DescribeAddressesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaddressesresult"></a>
<a id="schema_DescribeAddressesResult"></a>
<a id="tocSdescribeaddressesresult"></a>
<a id="tocsdescribeaddressesresult"></a>

```json
{
  "Addresses": [
    {
      "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b",
      "City": "Seattle",
      "Company": "My Company",
      "Country": "US",
      "Name": "My Name",
      "PhoneNumber": "425-555-5555",
      "PostalCode": "98101",
      "StateOrProvince": "WA",
      "Street1": "123 Main Street"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Addresses|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAddressesRequest">DescribeAddressesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaddressesrequest"></a>
<a id="schema_DescribeAddressesRequest"></a>
<a id="tocSdescribeaddressesrequest"></a>
<a id="tocsdescribeaddressesrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_DescribeClusterResult">DescribeClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclusterresult"></a>
<a id="schema_DescribeClusterResult"></a>
<a id="tocSdescribeclusterresult"></a>
<a id="tocsdescribeclusterresult"></a>

```json
{
  "ClusterMetadata": {
    "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b",
    "ClusterId": "CID123e4567-e89b-12d3-a456-426655440000",
    "ClusterState": "Pending",
    "CreationDate": "1480475517.0",
    "Description": "MyCluster",
    "JobType": "LOCAL_USE",
    "KmsKeyARN": "arn:aws:kms:us-east-1:123456789012:key/abcd1234-12ab-34cd-56ef-123456123456",
    "Notification": {
      "JobStatesToNotify": [],
      "NotifyAll": false
    },
    "Resources": {
      "S3Resources": [
        {
          "BucketArn": "arn:aws:s3:::MyBucket",
          "KeyRange": {}
        }
      ]
    },
    "RoleARN": "arn:aws:iam::123456789012:role/snowball-import-S3-role",
    "ShippingOption": "SECOND_DAY"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterMetadata|object|false|none|none|

<h2 id="tocS_DescribeClusterRequest">DescribeClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclusterrequest"></a>
<a id="schema_DescribeClusterRequest"></a>
<a id="tocSdescribeclusterrequest"></a>
<a id="tocsdescribeclusterrequest"></a>

```json
{
  "ClusterId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|

<h2 id="tocS_DescribeJobResult">DescribeJobResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobresult"></a>
<a id="schema_DescribeJobResult"></a>
<a id="tocSdescribejobresult"></a>
<a id="tocsdescribejobresult"></a>

```json
{
  "JobMetadata": {
    "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b",
    "CreationDate": "1475626164",
    "Description": "My Job",
    "JobId": "JID123e4567-e89b-12d3-a456-426655440000",
    "JobState": "New",
    "JobType": "IMPORT",
    "KmsKeyARN": "arn:aws:kms:us-east-1:123456789012:key/abcd1234-12ab-34cd-56ef-123456123456",
    "Notification": {
      "JobStatesToNotify": [],
      "NotifyAll": false
    },
    "Resources": {
      "S3Resources": [
        {
          "BucketArn": "arn:aws:s3:::MyBucket",
          "KeyRange": {}
        }
      ]
    },
    "RoleARN": "arn:aws:iam::123456789012:role/snowball-import-S3-role",
    "ShippingDetails": {
      "ShippingOption": "SECOND_DAY"
    },
    "SnowballCapacityPreference": "T80",
    "SnowballType": "STANDARD"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobMetadata|object|false|none|none|
|SubJobMetadata|object|false|none|none|

<h2 id="tocS_DescribeJobRequest">DescribeJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobrequest"></a>
<a id="schema_DescribeJobRequest"></a>
<a id="tocSdescribejobrequest"></a>
<a id="tocsdescribejobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_DescribeReturnShippingLabelResult">DescribeReturnShippingLabelResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribereturnshippinglabelresult"></a>
<a id="schema_DescribeReturnShippingLabelResult"></a>
<a id="tocSdescribereturnshippinglabelresult"></a>
<a id="tocsdescribereturnshippinglabelresult"></a>

```json
{
  "Status": {},
  "ExpirationDate": {},
  "ReturnShippingLabelURI": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|ExpirationDate|object|false|none|none|
|ReturnShippingLabelURI|object|false|none|none|

<h2 id="tocS_DescribeReturnShippingLabelRequest">DescribeReturnShippingLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribereturnshippinglabelrequest"></a>
<a id="schema_DescribeReturnShippingLabelRequest"></a>
<a id="tocSdescribereturnshippinglabelrequest"></a>
<a id="tocsdescribereturnshippinglabelrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_GetJobManifestResult">GetJobManifestResult</h2>
<!-- backwards compatibility -->
<a id="schemagetjobmanifestresult"></a>
<a id="schema_GetJobManifestResult"></a>
<a id="tocSgetjobmanifestresult"></a>
<a id="tocsgetjobmanifestresult"></a>

```json
{
  "ManifestURI": "https://awsie-frosty-manifests-prod.s3.amazonaws.com/JID123e4567-e89b-12d3-a456-426655440000_manifest.bin?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20161224T005115Z&X-Amz-SignedHeaders=..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManifestURI|object|false|none|none|

<h2 id="tocS_GetJobManifestRequest">GetJobManifestRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetjobmanifestrequest"></a>
<a id="schema_GetJobManifestRequest"></a>
<a id="tocSgetjobmanifestrequest"></a>
<a id="tocsgetjobmanifestrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_GetJobUnlockCodeResult">GetJobUnlockCodeResult</h2>
<!-- backwards compatibility -->
<a id="schemagetjobunlockcoderesult"></a>
<a id="schema_GetJobUnlockCodeResult"></a>
<a id="tocSgetjobunlockcoderesult"></a>
<a id="tocsgetjobunlockcoderesult"></a>

```json
{
  "UnlockCode": "12345-abcde-56789-fghij-01234"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnlockCode|object|false|none|none|

<h2 id="tocS_GetJobUnlockCodeRequest">GetJobUnlockCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetjobunlockcoderequest"></a>
<a id="schema_GetJobUnlockCodeRequest"></a>
<a id="tocSgetjobunlockcoderequest"></a>
<a id="tocsgetjobunlockcoderequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_GetSnowballUsageResult">GetSnowballUsageResult</h2>
<!-- backwards compatibility -->
<a id="schemagetsnowballusageresult"></a>
<a id="schema_GetSnowballUsageResult"></a>
<a id="tocSgetsnowballusageresult"></a>
<a id="tocsgetsnowballusageresult"></a>

```json
{
  "SnowballLimit": 1,
  "SnowballsInUse": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnowballLimit|object|false|none|none|
|SnowballsInUse|object|false|none|none|

<h2 id="tocS_GetSnowballUsageRequest">GetSnowballUsageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsnowballusagerequest"></a>
<a id="schema_GetSnowballUsageRequest"></a>
<a id="tocSgetsnowballusagerequest"></a>
<a id="tocsgetsnowballusagerequest"></a>

```json
{}
```

<h2 id="tocS_GetSoftwareUpdatesResult">GetSoftwareUpdatesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetsoftwareupdatesresult"></a>
<a id="schema_GetSoftwareUpdatesResult"></a>
<a id="tocSgetsoftwareupdatesresult"></a>
<a id="tocsgetsoftwareupdatesresult"></a>

```json
{
  "UpdatesURI": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdatesURI|object|false|none|none|

<h2 id="tocS_GetSoftwareUpdatesRequest">GetSoftwareUpdatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsoftwareupdatesrequest"></a>
<a id="schema_GetSoftwareUpdatesRequest"></a>
<a id="tocSgetsoftwareupdatesrequest"></a>
<a id="tocsgetsoftwareupdatesrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_ListClusterJobsResult">ListClusterJobsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistclusterjobsresult"></a>
<a id="schema_ListClusterJobsResult"></a>
<a id="tocSlistclusterjobsresult"></a>
<a id="tocslistclusterjobsresult"></a>

```json
{
  "JobListEntries": [
    {
      "CreationDate": "1480475524.0",
      "Description": "MyClustrer-node-001",
      "IsMaster": false,
      "JobId": "JID123e4567-e89b-12d3-a456-426655440000",
      "JobState": "New",
      "JobType": "LOCAL_USE",
      "SnowballType": "EDGE"
    },
    {
      "CreationDate": "1480475525.0",
      "Description": "MyClustrer-node-002",
      "IsMaster": false,
      "JobId": "JID123e4567-e89b-12d3-a456-426655440001",
      "JobState": "New",
      "JobType": "LOCAL_USE",
      "SnowballType": "EDGE"
    },
    {
      "CreationDate": "1480475525.0",
      "Description": "MyClustrer-node-003",
      "IsMaster": false,
      "JobId": "JID123e4567-e89b-12d3-a456-426655440002",
      "JobState": "New",
      "JobType": "LOCAL_USE",
      "SnowballType": "EDGE"
    },
    {
      "CreationDate": "1480475525.0",
      "Description": "MyClustrer-node-004",
      "IsMaster": false,
      "JobId": "JID123e4567-e89b-12d3-a456-426655440003",
      "JobState": "New",
      "JobType": "LOCAL_USE",
      "SnowballType": "EDGE"
    },
    {
      "CreationDate": "1480475525.0",
      "Description": "MyClustrer-node-005",
      "IsMaster": false,
      "JobId": "JID123e4567-e89b-12d3-a456-426655440004",
      "JobState": "New",
      "JobType": "LOCAL_USE",
      "SnowballType": "EDGE"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobListEntries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListClusterJobsRequest">ListClusterJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistclusterjobsrequest"></a>
<a id="schema_ListClusterJobsRequest"></a>
<a id="tocSlistclusterjobsrequest"></a>
<a id="tocslistclusterjobsrequest"></a>

```json
{
  "ClusterId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListClustersResult">ListClustersResult</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersresult"></a>
<a id="schema_ListClustersResult"></a>
<a id="tocSlistclustersresult"></a>
<a id="tocslistclustersresult"></a>

```json
{
  "ClusterListEntries": [
    {
      "ClusterId": "CID123e4567-e89b-12d3-a456-426655440000",
      "ClusterState": "Pending",
      "CreationDate": "1480475517.0",
      "Description": "MyCluster"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterListEntries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListClustersRequest">ListClustersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersrequest"></a>
<a id="schema_ListClustersRequest"></a>
<a id="tocSlistclustersrequest"></a>
<a id="tocslistclustersrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCompatibleImagesResult">ListCompatibleImagesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistcompatibleimagesresult"></a>
<a id="schema_ListCompatibleImagesResult"></a>
<a id="tocSlistcompatibleimagesresult"></a>
<a id="tocslistcompatibleimagesresult"></a>

```json
{
  "CompatibleImages": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CompatibleImages|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCompatibleImagesRequest">ListCompatibleImagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcompatibleimagesrequest"></a>
<a id="schema_ListCompatibleImagesRequest"></a>
<a id="tocSlistcompatibleimagesrequest"></a>
<a id="tocslistcompatibleimagesrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListJobsResult">ListJobsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsresult"></a>
<a id="schema_ListJobsResult"></a>
<a id="tocSlistjobsresult"></a>
<a id="tocslistjobsresult"></a>

```json
{
  "JobListEntries": [
    {
      "CreationDate": "1460678186.0",
      "Description": "MyJob",
      "IsMaster": false,
      "JobId": "JID123e4567-e89b-12d3-a456-426655440000",
      "JobState": "New",
      "JobType": "IMPORT",
      "SnowballType": "STANDARD"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobListEntries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListJobsRequest">ListJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsrequest"></a>
<a id="schema_ListJobsRequest"></a>
<a id="tocSlistjobsrequest"></a>
<a id="tocslistjobsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLongTermPricingResult">ListLongTermPricingResult</h2>
<!-- backwards compatibility -->
<a id="schemalistlongtermpricingresult"></a>
<a id="schema_ListLongTermPricingResult"></a>
<a id="tocSlistlongtermpricingresult"></a>
<a id="tocslistlongtermpricingresult"></a>

```json
{
  "LongTermPricingEntries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LongTermPricingEntries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLongTermPricingRequest">ListLongTermPricingRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlongtermpricingrequest"></a>
<a id="schema_ListLongTermPricingRequest"></a>
<a id="tocSlistlongtermpricingrequest"></a>
<a id="tocslistlongtermpricingrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListServiceVersionsResult">ListServiceVersionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceversionsresult"></a>
<a id="schema_ListServiceVersionsResult"></a>
<a id="tocSlistserviceversionsresult"></a>
<a id="tocslistserviceversionsresult"></a>

```json
{
  "ServiceVersions": {},
  "ServiceName": {},
  "DependentServices": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceVersions|object|true|none|none|
|ServiceName|object|true|none|none|
|DependentServices|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListServiceVersionsRequest">ListServiceVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceversionsrequest"></a>
<a id="schema_ListServiceVersionsRequest"></a>
<a id="tocSlistserviceversionsrequest"></a>
<a id="tocslistserviceversionsrequest"></a>

```json
{
  "ServiceName": {},
  "DependentServices": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceName|object|true|none|none|
|DependentServices|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_UpdateClusterResult">UpdateClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterresult"></a>
<a id="schema_UpdateClusterResult"></a>
<a id="tocSupdateclusterresult"></a>
<a id="tocsupdateclusterresult"></a>

```json
{}
```

<h2 id="tocS_UpdateClusterRequest">UpdateClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterrequest"></a>
<a id="schema_UpdateClusterRequest"></a>
<a id="tocSupdateclusterrequest"></a>
<a id="tocsupdateclusterrequest"></a>

```json
{
  "ClusterId": {},
  "RoleARN": {},
  "Description": {},
  "Resources": {
    "S3Resources": {},
    "LambdaResources": {},
    "Ec2AmiResources": {}
  },
  "OnDeviceServiceConfiguration": {
    "NFSOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "TGWOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "EKSOnDeviceService": {
      "KubernetesVersion": {},
      "EKSAnywhereVersion": {}
    },
    "S3OnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {},
      "ServiceSize": {},
      "FaultTolerance": {}
    }
  },
  "AddressId": {},
  "ShippingOption": {},
  "Notification": {
    "SnsTopicARN": {},
    "JobStatesToNotify": {},
    "NotifyAll": {}
  },
  "ForwardingAddressId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|RoleARN|object|false|none|none|
|Description|object|false|none|none|
|Resources|object|false|none|none|
|OnDeviceServiceConfiguration|object|false|none|none|
|AddressId|object|false|none|none|
|ShippingOption|object|false|none|none|
|Notification|object|false|none|none|
|ForwardingAddressId|object|false|none|none|

<h2 id="tocS_UpdateJobResult">UpdateJobResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobresult"></a>
<a id="schema_UpdateJobResult"></a>
<a id="tocSupdatejobresult"></a>
<a id="tocsupdatejobresult"></a>

```json
{}
```

<h2 id="tocS_UpdateJobRequest">UpdateJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobrequest"></a>
<a id="schema_UpdateJobRequest"></a>
<a id="tocSupdatejobrequest"></a>
<a id="tocsupdatejobrequest"></a>

```json
{
  "JobId": {},
  "RoleARN": {},
  "Notification": {
    "SnsTopicARN": {},
    "JobStatesToNotify": {},
    "NotifyAll": {}
  },
  "Resources": {
    "S3Resources": {},
    "LambdaResources": {},
    "Ec2AmiResources": {}
  },
  "OnDeviceServiceConfiguration": {
    "NFSOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "TGWOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "EKSOnDeviceService": {
      "KubernetesVersion": {},
      "EKSAnywhereVersion": {}
    },
    "S3OnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {},
      "ServiceSize": {},
      "FaultTolerance": {}
    }
  },
  "AddressId": {},
  "ShippingOption": {},
  "Description": {},
  "SnowballCapacityPreference": {},
  "ForwardingAddressId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|
|RoleARN|object|false|none|none|
|Notification|object|false|none|none|
|Resources|object|false|none|none|
|OnDeviceServiceConfiguration|object|false|none|none|
|AddressId|object|false|none|none|
|ShippingOption|object|false|none|none|
|Description|object|false|none|none|
|SnowballCapacityPreference|object|false|none|none|
|ForwardingAddressId|object|false|none|none|

<h2 id="tocS_UpdateJobShipmentStateResult">UpdateJobShipmentStateResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobshipmentstateresult"></a>
<a id="schema_UpdateJobShipmentStateResult"></a>
<a id="tocSupdatejobshipmentstateresult"></a>
<a id="tocsupdatejobshipmentstateresult"></a>

```json
{}
```

<h2 id="tocS_UpdateJobShipmentStateRequest">UpdateJobShipmentStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobshipmentstaterequest"></a>
<a id="schema_UpdateJobShipmentStateRequest"></a>
<a id="tocSupdatejobshipmentstaterequest"></a>
<a id="tocsupdatejobshipmentstaterequest"></a>

```json
{
  "JobId": {},
  "ShipmentState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|
|ShipmentState|object|true|none|none|

<h2 id="tocS_UpdateLongTermPricingResult">UpdateLongTermPricingResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelongtermpricingresult"></a>
<a id="schema_UpdateLongTermPricingResult"></a>
<a id="tocSupdatelongtermpricingresult"></a>
<a id="tocsupdatelongtermpricingresult"></a>

```json
{}
```

<h2 id="tocS_UpdateLongTermPricingRequest">UpdateLongTermPricingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelongtermpricingrequest"></a>
<a id="schema_UpdateLongTermPricingRequest"></a>
<a id="tocSupdatelongtermpricingrequest"></a>
<a id="tocsupdatelongtermpricingrequest"></a>

```json
{
  "LongTermPricingId": {},
  "ReplacementJob": {},
  "IsLongTermPricingAutoRenew": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LongTermPricingId|object|true|none|none|
|ReplacementJob|object|false|none|none|
|IsLongTermPricingAutoRenew|object|false|none|none|

<h2 id="tocS_AddressId">AddressId</h2>
<!-- backwards compatibility -->
<a id="schemaaddressid"></a>
<a id="schema_AddressId"></a>
<a id="tocSaddressid"></a>
<a id="tocsaddressid"></a>

```json
"stringstringstringstringstringstringstri"
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "AddressId": {},
  "Name": {},
  "Company": {},
  "Street1": {},
  "Street2": {},
  "Street3": {},
  "City": {},
  "StateOrProvince": {},
  "PrefectureOrDistrict": {},
  "Landmark": {},
  "Country": {},
  "PostalCode": {},
  "PhoneNumber": {},
  "IsRestricted": {}
}
```

The address that you want the Snow device(s) associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressId|object|false|none|none|
|Name|object|false|none|none|
|Company|object|false|none|none|
|Street1|object|false|none|none|
|Street2|object|false|none|none|
|Street3|object|false|none|none|
|City|object|false|none|none|
|StateOrProvince|object|false|none|none|
|PrefectureOrDistrict|object|false|none|none|
|Landmark|object|false|none|none|
|Country|object|false|none|none|
|PostalCode|object|false|none|none|
|PhoneNumber|object|false|none|none|
|IsRestricted|object|false|none|none|

<h2 id="tocS_AddressList">AddressList</h2>
<!-- backwards compatibility -->
<a id="schemaaddresslist"></a>
<a id="schema_AddressList"></a>
<a id="tocSaddresslist"></a>
<a id="tocsaddresslist"></a>

```json
[
  {
    "AddressId": {},
    "Name": {},
    "Company": {},
    "Street1": {},
    "Street2": {},
    "Street3": {},
    "City": {},
    "StateOrProvince": {},
    "PrefectureOrDistrict": {},
    "Landmark": {},
    "Country": {},
    "PostalCode": {},
    "PhoneNumber": {},
    "IsRestricted": {}
  }
]
```

<h2 id="tocS_AmiId">AmiId</h2>
<!-- backwards compatibility -->
<a id="schemaamiid"></a>
<a id="schema_AmiId"></a>
<a id="tocSamiid"></a>
<a id="tocsamiid"></a>

```json
"stringstring"
```

<h2 id="tocS_ClusterId">ClusterId</h2>
<!-- backwards compatibility -->
<a id="schemaclusterid"></a>
<a id="schema_ClusterId"></a>
<a id="tocSclusterid"></a>
<a id="tocsclusterid"></a>

```json
"stringstringstringstringstringstringstr"
```

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"stringstringstringstringstringstringstr"
```

<h2 id="tocS_ClusterState">ClusterState</h2>
<!-- backwards compatibility -->
<a id="schemaclusterstate"></a>
<a id="schema_ClusterState"></a>
<a id="tocSclusterstate"></a>
<a id="tocsclusterstate"></a>

```json
"AwaitingQuorum"
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ClusterListEntry">ClusterListEntry</h2>
<!-- backwards compatibility -->
<a id="schemaclusterlistentry"></a>
<a id="schema_ClusterListEntry"></a>
<a id="tocSclusterlistentry"></a>
<a id="tocsclusterlistentry"></a>

```json
{
  "ClusterId": {},
  "ClusterState": {},
  "CreationDate": {},
  "Description": {}
}
```

Contains a cluster's state, a cluster's ID, and other important information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|false|none|none|
|ClusterState|object|false|none|none|
|CreationDate|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_ClusterListEntryList">ClusterListEntryList</h2>
<!-- backwards compatibility -->
<a id="schemaclusterlistentrylist"></a>
<a id="schema_ClusterListEntryList"></a>
<a id="tocSclusterlistentrylist"></a>
<a id="tocsclusterlistentrylist"></a>

```json
[
  {
    "ClusterId": {},
    "ClusterState": {},
    "CreationDate": {},
    "Description": {}
  }
]
```

<h2 id="tocS_KmsKeyARN">KmsKeyARN</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyarn"></a>
<a id="schema_KmsKeyARN"></a>
<a id="tocSkmskeyarn"></a>
<a id="tocskmskeyarn"></a>

```json
"string"
```

<h2 id="tocS_RoleARN">RoleARN</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleARN"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_JobType">JobType</h2>
<!-- backwards compatibility -->
<a id="schemajobtype"></a>
<a id="schema_JobType"></a>
<a id="tocSjobtype"></a>
<a id="tocsjobtype"></a>

```json
"IMPORT"
```

<h2 id="tocS_SnowballType">SnowballType</h2>
<!-- backwards compatibility -->
<a id="schemasnowballtype"></a>
<a id="schema_SnowballType"></a>
<a id="tocSsnowballtype"></a>
<a id="tocssnowballtype"></a>

```json
"STANDARD"
```

<h2 id="tocS_JobResource">JobResource</h2>
<!-- backwards compatibility -->
<a id="schemajobresource"></a>
<a id="schema_JobResource"></a>
<a id="tocSjobresource"></a>
<a id="tocsjobresource"></a>

```json
{
  "S3Resources": {},
  "LambdaResources": {},
  "Ec2AmiResources": {}
}
```

Contains an array of Amazon Web Services resource objects. Each object represents an Amazon S3 bucket, an Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Resources|object|false|none|none|
|LambdaResources|object|false|none|none|
|Ec2AmiResources|object|false|none|none|

<h2 id="tocS_ShippingOption">ShippingOption</h2>
<!-- backwards compatibility -->
<a id="schemashippingoption"></a>
<a id="schema_ShippingOption"></a>
<a id="tocSshippingoption"></a>
<a id="tocsshippingoption"></a>

```json
"SECOND_DAY"
```

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "SnsTopicARN": {},
  "JobStatesToNotify": {},
  "NotifyAll": {}
}
```

<p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnsTopicARN|object|false|none|none|
|JobStatesToNotify|object|false|none|none|
|NotifyAll|object|false|none|none|

<h2 id="tocS_TaxDocuments">TaxDocuments</h2>
<!-- backwards compatibility -->
<a id="schemataxdocuments"></a>
<a id="schema_TaxDocuments"></a>
<a id="tocStaxdocuments"></a>
<a id="tocstaxdocuments"></a>

```json
{
  "IND": {
    "GSTIN": {}
  }
}
```

The tax documents required in your Amazon Web Services Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IND|[INDTaxDocuments](#schemaindtaxdocuments)|false|none|The tax documents required in Amazon Web Services Region in India.|

<h2 id="tocS_OnDeviceServiceConfiguration">OnDeviceServiceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaondeviceserviceconfiguration"></a>
<a id="schema_OnDeviceServiceConfiguration"></a>
<a id="tocSondeviceserviceconfiguration"></a>
<a id="tocsondeviceserviceconfiguration"></a>

```json
{
  "NFSOnDeviceService": {
    "StorageLimit": {},
    "StorageUnit": {}
  },
  "TGWOnDeviceService": {
    "StorageLimit": {},
    "StorageUnit": {}
  },
  "EKSOnDeviceService": {
    "KubernetesVersion": {},
    "EKSAnywhereVersion": {}
  },
  "S3OnDeviceService": {
    "StorageLimit": {},
    "StorageUnit": {},
    "ServiceSize": {},
    "FaultTolerance": {}
  }
}
```

An object that represents the metadata and configuration settings for services on an Amazon Web Services Snow Family device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NFSOnDeviceService|object|false|none|none|
|TGWOnDeviceService|object|false|none|none|
|EKSOnDeviceService|object|false|none|none|
|S3OnDeviceService|object|false|none|none|

<h2 id="tocS_ClusterMetadata">ClusterMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaclustermetadata"></a>
<a id="schema_ClusterMetadata"></a>
<a id="tocSclustermetadata"></a>
<a id="tocsclustermetadata"></a>

```json
{
  "ClusterId": {},
  "Description": {},
  "KmsKeyARN": {},
  "RoleARN": {},
  "ClusterState": {},
  "JobType": {},
  "SnowballType": {},
  "CreationDate": {},
  "Resources": {
    "S3Resources": {},
    "LambdaResources": {},
    "Ec2AmiResources": {}
  },
  "AddressId": {},
  "ShippingOption": {},
  "Notification": {
    "SnsTopicARN": {},
    "JobStatesToNotify": {},
    "NotifyAll": {}
  },
  "ForwardingAddressId": {},
  "TaxDocuments": {
    "IND": {
      "GSTIN": {}
    }
  },
  "OnDeviceServiceConfiguration": {
    "NFSOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "TGWOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "EKSOnDeviceService": {
      "KubernetesVersion": {},
      "EKSAnywhereVersion": {}
    },
    "S3OnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {},
      "ServiceSize": {},
      "FaultTolerance": {}
    }
  }
}
```

Contains metadata about a specific cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|false|none|none|
|Description|object|false|none|none|
|KmsKeyARN|object|false|none|none|
|RoleARN|object|false|none|none|
|ClusterState|object|false|none|none|
|JobType|object|false|none|none|
|SnowballType|object|false|none|none|
|CreationDate|object|false|none|none|
|Resources|object|false|none|none|
|AddressId|object|false|none|none|
|ShippingOption|object|false|none|none|
|Notification|object|false|none|none|
|ForwardingAddressId|object|false|none|none|
|TaxDocuments|object|false|none|none|
|OnDeviceServiceConfiguration|object|false|none|none|

<h2 id="tocS_CompatibleImage">CompatibleImage</h2>
<!-- backwards compatibility -->
<a id="schemacompatibleimage"></a>
<a id="schema_CompatibleImage"></a>
<a id="tocScompatibleimage"></a>
<a id="tocscompatibleimage"></a>

```json
{
  "AmiId": {},
  "Name": {}
}
```

A JSON-formatted object that describes a compatible Amazon Machine Image (AMI), including the ID and name for a Snow device AMI. This AMI is compatible with the device's physical hardware requirements, and it should be able to be run in an SBE1 instance on the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmiId|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_CompatibleImageList">CompatibleImageList</h2>
<!-- backwards compatibility -->
<a id="schemacompatibleimagelist"></a>
<a id="schema_CompatibleImageList"></a>
<a id="tocScompatibleimagelist"></a>
<a id="tocscompatibleimagelist"></a>

```json
[
  {
    "AmiId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_RemoteManagement">RemoteManagement</h2>
<!-- backwards compatibility -->
<a id="schemaremotemanagement"></a>
<a id="schema_RemoteManagement"></a>
<a id="tocSremotemanagement"></a>
<a id="tocsremotemanagement"></a>

```json
"INSTALLED_ONLY"
```

<h2 id="tocS_InitialClusterSize">InitialClusterSize</h2>
<!-- backwards compatibility -->
<a id="schemainitialclustersize"></a>
<a id="schema_InitialClusterSize"></a>
<a id="tocSinitialclustersize"></a>
<a id="tocsinitialclustersize"></a>

```json
0
```

<h2 id="tocS_LongTermPricingIdList">LongTermPricingIdList</h2>
<!-- backwards compatibility -->
<a id="schemalongtermpricingidlist"></a>
<a id="schema_LongTermPricingIdList"></a>
<a id="tocSlongtermpricingidlist"></a>
<a id="tocslongtermpricingidlist"></a>

```json
[
  "stringstringstringstringstringstringstrin"
]
```

<h2 id="tocS_SnowballCapacity">SnowballCapacity</h2>
<!-- backwards compatibility -->
<a id="schemasnowballcapacity"></a>
<a id="schema_SnowballCapacity"></a>
<a id="tocSsnowballcapacity"></a>
<a id="tocssnowballcapacity"></a>

```json
"T50"
```

<h2 id="tocS_JobListEntryList">JobListEntryList</h2>
<!-- backwards compatibility -->
<a id="schemajoblistentrylist"></a>
<a id="schema_JobListEntryList"></a>
<a id="tocSjoblistentrylist"></a>
<a id="tocsjoblistentrylist"></a>

```json
[
  {
    "JobId": {},
    "JobState": {},
    "IsMaster": {},
    "JobType": {},
    "SnowballType": {},
    "CreationDate": {},
    "Description": {}
  }
]
```

<h2 id="tocS_DeviceConfiguration">DeviceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadeviceconfiguration"></a>
<a id="schema_DeviceConfiguration"></a>
<a id="tocSdeviceconfiguration"></a>
<a id="tocsdeviceconfiguration"></a>

```json
{
  "SnowconeDeviceConfiguration": {
    "WirelessConnection": {
      "IsWifiEnabled": {}
    }
  }
}
```

The container for <code>SnowconeDeviceConfiguration</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnowconeDeviceConfiguration|object|false|none|none|

<h2 id="tocS_LongTermPricingId">LongTermPricingId</h2>
<!-- backwards compatibility -->
<a id="schemalongtermpricingid"></a>
<a id="schema_LongTermPricingId"></a>
<a id="tocSlongtermpricingid"></a>
<a id="tocslongtermpricingid"></a>

```json
"stringstringstringstringstringstringstrin"
```

<h2 id="tocS_LongTermPricingType">LongTermPricingType</h2>
<!-- backwards compatibility -->
<a id="schemalongtermpricingtype"></a>
<a id="schema_LongTermPricingType"></a>
<a id="tocSlongtermpricingtype"></a>
<a id="tocslongtermpricingtype"></a>

```json
"OneYear"
```

<h2 id="tocS_JavaBoolean">JavaBoolean</h2>
<!-- backwards compatibility -->
<a id="schemajavaboolean"></a>
<a id="schema_JavaBoolean"></a>
<a id="tocSjavaboolean"></a>
<a id="tocsjavaboolean"></a>

```json
true
```

<h2 id="tocS_ShippingLabelStatus">ShippingLabelStatus</h2>
<!-- backwards compatibility -->
<a id="schemashippinglabelstatus"></a>
<a id="schema_ShippingLabelStatus"></a>
<a id="tocSshippinglabelstatus"></a>
<a id="tocsshippinglabelstatus"></a>

```json
"InProgress"
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

<h2 id="tocS_DataTransfer">DataTransfer</h2>
<!-- backwards compatibility -->
<a id="schemadatatransfer"></a>
<a id="schema_DataTransfer"></a>
<a id="tocSdatatransfer"></a>
<a id="tocsdatatransfer"></a>

```json
{
  "BytesTransferred": {},
  "ObjectsTransferred": {},
  "TotalBytes": {},
  "TotalObjects": {}
}
```

Defines the real-time status of a Snow device's data transfer while the device is at Amazon Web Services. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BytesTransferred|object|false|none|none|
|ObjectsTransferred|object|false|none|none|
|TotalBytes|object|false|none|none|
|TotalObjects|object|false|none|none|

<h2 id="tocS_ServiceName">ServiceName</h2>
<!-- backwards compatibility -->
<a id="schemaservicename"></a>
<a id="schema_ServiceName"></a>
<a id="tocSservicename"></a>
<a id="tocsservicename"></a>

```json
"KUBERNETES"
```

<h2 id="tocS_ServiceVersion">ServiceVersion</h2>
<!-- backwards compatibility -->
<a id="schemaserviceversion"></a>
<a id="schema_ServiceVersion"></a>
<a id="tocSserviceversion"></a>
<a id="tocsserviceversion"></a>

```json
{
  "Version": {}
}
```

The version of the requested service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Version|object|false|none|none|

<h2 id="tocS_DependentService">DependentService</h2>
<!-- backwards compatibility -->
<a id="schemadependentservice"></a>
<a id="schema_DependentService"></a>
<a id="tocSdependentservice"></a>
<a id="tocsdependentservice"></a>

```json
{
  "ServiceName": {},
  "ServiceVersion": {
    "Version": {}
  }
}
```

The name and version of the service dependant on the requested service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceName|object|false|none|none|
|ServiceVersion|object|false|none|none|

<h2 id="tocS_DependentServiceList">DependentServiceList</h2>
<!-- backwards compatibility -->
<a id="schemadependentservicelist"></a>
<a id="schema_DependentServiceList"></a>
<a id="tocSdependentservicelist"></a>
<a id="tocsdependentservicelist"></a>

```json
[
  {
    "ServiceName": {},
    "ServiceVersion": {
      "Version": {}
    }
  }
]
```

<h2 id="tocS_ListLimit">ListLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistlimit"></a>
<a id="schema_ListLimit"></a>
<a id="tocSlistlimit"></a>
<a id="tocslistlimit"></a>

```json
0
```

<h2 id="tocS_JobMetadata">JobMetadata</h2>
<!-- backwards compatibility -->
<a id="schemajobmetadata"></a>
<a id="schema_JobMetadata"></a>
<a id="tocSjobmetadata"></a>
<a id="tocsjobmetadata"></a>

```json
{
  "JobId": {},
  "JobState": {},
  "JobType": {},
  "SnowballType": {},
  "CreationDate": {},
  "Resources": {
    "S3Resources": {},
    "LambdaResources": {},
    "Ec2AmiResources": {}
  },
  "Description": {},
  "KmsKeyARN": {},
  "RoleARN": {},
  "AddressId": {},
  "ShippingDetails": {
    "ShippingOption": {},
    "InboundShipment": {
      "Status": {},
      "TrackingNumber": {}
    },
    "OutboundShipment": {
      "Status": {},
      "TrackingNumber": {}
    }
  },
  "SnowballCapacityPreference": {},
  "Notification": {
    "SnsTopicARN": {},
    "JobStatesToNotify": {},
    "NotifyAll": {}
  },
  "DataTransferProgress": {
    "BytesTransferred": {},
    "ObjectsTransferred": {},
    "TotalBytes": {},
    "TotalObjects": {}
  },
  "JobLogInfo": {
    "JobCompletionReportURI": {},
    "JobSuccessLogURI": {},
    "JobFailureLogURI": {}
  },
  "ClusterId": {},
  "ForwardingAddressId": {},
  "TaxDocuments": {
    "IND": {
      "GSTIN": {}
    }
  },
  "DeviceConfiguration": {
    "SnowconeDeviceConfiguration": {
      "WirelessConnection": {
        "IsWifiEnabled": {}
      }
    }
  },
  "RemoteManagement": {},
  "LongTermPricingId": {},
  "OnDeviceServiceConfiguration": {
    "NFSOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "TGWOnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {}
    },
    "EKSOnDeviceService": {
      "KubernetesVersion": {},
      "EKSAnywhereVersion": {}
    },
    "S3OnDeviceService": {
      "StorageLimit": {},
      "StorageUnit": {},
      "ServiceSize": {},
      "FaultTolerance": {}
    }
  }
}
```

Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobState|object|false|none|none|
|JobType|object|false|none|none|
|SnowballType|object|false|none|none|
|CreationDate|object|false|none|none|
|Resources|object|false|none|none|
|Description|object|false|none|none|
|KmsKeyARN|object|false|none|none|
|RoleARN|object|false|none|none|
|AddressId|object|false|none|none|
|ShippingDetails|object|false|none|none|
|SnowballCapacityPreference|object|false|none|none|
|Notification|object|false|none|none|
|DataTransferProgress|object|false|none|none|
|JobLogInfo|object|false|none|none|
|ClusterId|object|false|none|none|
|ForwardingAddressId|object|false|none|none|
|TaxDocuments|object|false|none|none|
|DeviceConfiguration|[DeviceConfiguration](#schemadeviceconfiguration)|false|none|The container for <code>SnowconeDeviceConfiguration</code>. |
|RemoteManagement|object|false|none|none|
|LongTermPricingId|object|false|none|none|
|OnDeviceServiceConfiguration|object|false|none|none|

<h2 id="tocS_JobMetadataList">JobMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemajobmetadatalist"></a>
<a id="schema_JobMetadataList"></a>
<a id="tocSjobmetadatalist"></a>
<a id="tocsjobmetadatalist"></a>

```json
[
  {
    "JobId": {},
    "JobState": {},
    "JobType": {},
    "SnowballType": {},
    "CreationDate": {},
    "Resources": {
      "S3Resources": {},
      "LambdaResources": {},
      "Ec2AmiResources": {}
    },
    "Description": {},
    "KmsKeyARN": {},
    "RoleARN": {},
    "AddressId": {},
    "ShippingDetails": {
      "ShippingOption": {},
      "InboundShipment": {
        "Status": {},
        "TrackingNumber": {}
      },
      "OutboundShipment": {
        "Status": {},
        "TrackingNumber": {}
      }
    },
    "SnowballCapacityPreference": {},
    "Notification": {
      "SnsTopicARN": {},
      "JobStatesToNotify": {},
      "NotifyAll": {}
    },
    "DataTransferProgress": {
      "BytesTransferred": {},
      "ObjectsTransferred": {},
      "TotalBytes": {},
      "TotalObjects": {}
    },
    "JobLogInfo": {
      "JobCompletionReportURI": {},
      "JobSuccessLogURI": {},
      "JobFailureLogURI": {}
    },
    "ClusterId": {},
    "ForwardingAddressId": {},
    "TaxDocuments": {
      "IND": {
        "GSTIN": {}
      }
    },
    "DeviceConfiguration": {
      "SnowconeDeviceConfiguration": {
        "WirelessConnection": {
          "IsWifiEnabled": {}
        }
      }
    },
    "RemoteManagement": {},
    "LongTermPricingId": {},
    "OnDeviceServiceConfiguration": {
      "NFSOnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {}
      },
      "TGWOnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {}
      },
      "EKSOnDeviceService": {
        "KubernetesVersion": {},
        "EKSAnywhereVersion": {}
      },
      "S3OnDeviceService": {
        "StorageLimit": {},
        "StorageUnit": {},
        "ServiceSize": {},
        "FaultTolerance": {}
      }
    }
  }
]
```

<h2 id="tocS_SnowconeDeviceConfiguration">SnowconeDeviceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasnowconedeviceconfiguration"></a>
<a id="schema_SnowconeDeviceConfiguration"></a>
<a id="tocSsnowconedeviceconfiguration"></a>
<a id="tocssnowconedeviceconfiguration"></a>

```json
{
  "WirelessConnection": {
    "IsWifiEnabled": {}
  }
}
```

Specifies the device configuration for an Snowcone job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WirelessConnection|object|false|none|none|

<h2 id="tocS_DeviceServiceName">DeviceServiceName</h2>
<!-- backwards compatibility -->
<a id="schemadeviceservicename"></a>
<a id="schema_DeviceServiceName"></a>
<a id="tocSdeviceservicename"></a>
<a id="tocsdeviceservicename"></a>

```json
"NFS_ON_DEVICE_SERVICE"
```

<h2 id="tocS_EKSOnDeviceServiceConfiguration">EKSOnDeviceServiceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaeksondeviceserviceconfiguration"></a>
<a id="schema_EKSOnDeviceServiceConfiguration"></a>
<a id="tocSeksondeviceserviceconfiguration"></a>
<a id="tocseksondeviceserviceconfiguration"></a>

```json
{
  "KubernetesVersion": {},
  "EKSAnywhereVersion": {}
}
```

An object representing the metadata and configuration settings of EKS Anywhere on the Snow Family device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KubernetesVersion|object|false|none|none|
|EKSAnywhereVersion|object|false|none|none|

<h2 id="tocS_Ec2AmiResource">Ec2AmiResource</h2>
<!-- backwards compatibility -->
<a id="schemaec2amiresource"></a>
<a id="schema_Ec2AmiResource"></a>
<a id="tocSec2amiresource"></a>
<a id="tocsec2amiresource"></a>

```json
{
  "AmiId": {},
  "SnowballAmiId": {}
}
```

A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2 AMI ID and the Snow device AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the Amazon Web Services Cloud and on the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmiId|object|true|none|none|
|SnowballAmiId|object|false|none|none|

<h2 id="tocS_Ec2AmiResourceList">Ec2AmiResourceList</h2>
<!-- backwards compatibility -->
<a id="schemaec2amiresourcelist"></a>
<a id="schema_Ec2AmiResourceList"></a>
<a id="tocSec2amiresourcelist"></a>
<a id="tocsec2amiresourcelist"></a>

```json
[
  {
    "AmiId": {},
    "SnowballAmiId": {}
  }
]
```

<h2 id="tocS_ResourceARN">ResourceARN</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceARN"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_EventTriggerDefinition">EventTriggerDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaeventtriggerdefinition"></a>
<a id="schema_EventTriggerDefinition"></a>
<a id="tocSeventtriggerdefinition"></a>
<a id="tocseventtriggerdefinition"></a>

```json
{
  "EventResourceARN": {}
}
```

The container for the <a>EventTriggerDefinition$EventResourceARN</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventResourceARN|object|false|none|none|

<h2 id="tocS_EventTriggerDefinitionList">EventTriggerDefinitionList</h2>
<!-- backwards compatibility -->
<a id="schemaeventtriggerdefinitionlist"></a>
<a id="schema_EventTriggerDefinitionList"></a>
<a id="tocSeventtriggerdefinitionlist"></a>
<a id="tocseventtriggerdefinitionlist"></a>

```json
[
  {
    "EventResourceARN": {}
  }
]
```

<h2 id="tocS_GSTIN">GSTIN</h2>
<!-- backwards compatibility -->
<a id="schemagstin"></a>
<a id="schema_GSTIN"></a>
<a id="tocSgstin"></a>
<a id="tocsgstin"></a>

```json
"stringstringstr"
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

<h2 id="tocS_INDTaxDocuments">INDTaxDocuments</h2>
<!-- backwards compatibility -->
<a id="schemaindtaxdocuments"></a>
<a id="schema_INDTaxDocuments"></a>
<a id="tocSindtaxdocuments"></a>
<a id="tocsindtaxdocuments"></a>

```json
{
  "GSTIN": {}
}
```

The tax documents required in Amazon Web Services Region in India.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GSTIN|object|false|none|none|

<h2 id="tocS_JobState">JobState</h2>
<!-- backwards compatibility -->
<a id="schemajobstate"></a>
<a id="schema_JobState"></a>
<a id="tocSjobstate"></a>
<a id="tocsjobstate"></a>

```json
"New"
```

<h2 id="tocS_JobListEntry">JobListEntry</h2>
<!-- backwards compatibility -->
<a id="schemajoblistentry"></a>
<a id="schema_JobListEntry"></a>
<a id="tocSjoblistentry"></a>
<a id="tocsjoblistentry"></a>

```json
{
  "JobId": {},
  "JobState": {},
  "IsMaster": {},
  "JobType": {},
  "SnowballType": {},
  "CreationDate": {},
  "Description": {}
}
```

Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobState|object|false|none|none|
|IsMaster|object|false|none|none|
|JobType|object|false|none|none|
|SnowballType|object|false|none|none|
|CreationDate|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_JobLogs">JobLogs</h2>
<!-- backwards compatibility -->
<a id="schemajoblogs"></a>
<a id="schema_JobLogs"></a>
<a id="tocSjoblogs"></a>
<a id="tocsjoblogs"></a>

```json
{
  "JobCompletionReportURI": {},
  "JobSuccessLogURI": {},
  "JobFailureLogURI": {}
}
```

<p>Contains job logs. Whenever a Snow device is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the <code>DescribeJob</code> action.</p> <p>For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snow device for your job part is being delivered to you.</p> <p>The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.</p> <p>For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobCompletionReportURI|object|false|none|none|
|JobSuccessLogURI|object|false|none|none|
|JobFailureLogURI|object|false|none|none|

<h2 id="tocS_ShippingDetails">ShippingDetails</h2>
<!-- backwards compatibility -->
<a id="schemashippingdetails"></a>
<a id="schema_ShippingDetails"></a>
<a id="tocSshippingdetails"></a>
<a id="tocsshippingdetails"></a>

```json
{
  "ShippingOption": {},
  "InboundShipment": {
    "Status": {},
    "TrackingNumber": {}
  },
  "OutboundShipment": {
    "Status": {},
    "TrackingNumber": {}
  }
}
```

A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShippingOption|object|false|none|none|
|InboundShipment|object|false|none|none|
|OutboundShipment|object|false|none|none|

<h2 id="tocS_S3ResourceList">S3ResourceList</h2>
<!-- backwards compatibility -->
<a id="schemas3resourcelist"></a>
<a id="schema_S3ResourceList"></a>
<a id="tocSs3resourcelist"></a>
<a id="tocss3resourcelist"></a>

```json
[
  {
    "BucketArn": {},
    "KeyRange": {
      "BeginMarker": {},
      "EndMarker": {}
    },
    "TargetOnDeviceServices": {}
  }
]
```

<h2 id="tocS_LambdaResourceList">LambdaResourceList</h2>
<!-- backwards compatibility -->
<a id="schemalambdaresourcelist"></a>
<a id="schema_LambdaResourceList"></a>
<a id="tocSlambdaresourcelist"></a>
<a id="tocslambdaresourcelist"></a>

```json
[
  {
    "LambdaArn": {},
    "EventTriggers": {}
  }
]
```

<h2 id="tocS_JobStateList">JobStateList</h2>
<!-- backwards compatibility -->
<a id="schemajobstatelist"></a>
<a id="schema_JobStateList"></a>
<a id="tocSjobstatelist"></a>
<a id="tocsjobstatelist"></a>

```json
[
  "New"
]
```

<h2 id="tocS_KeyRange">KeyRange</h2>
<!-- backwards compatibility -->
<a id="schemakeyrange"></a>
<a id="schema_KeyRange"></a>
<a id="tocSkeyrange"></a>
<a id="tocskeyrange"></a>

```json
{
  "BeginMarker": {},
  "EndMarker": {}
}
```

Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BeginMarker|object|false|none|none|
|EndMarker|object|false|none|none|

<h2 id="tocS_LambdaResource">LambdaResource</h2>
<!-- backwards compatibility -->
<a id="schemalambdaresource"></a>
<a id="schema_LambdaResource"></a>
<a id="tocSlambdaresource"></a>
<a id="tocslambdaresource"></a>

```json
{
  "LambdaArn": {},
  "EventTriggers": {}
}
```

Identifies

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LambdaArn|object|false|none|none|
|EventTriggers|object|false|none|none|

<h2 id="tocS_LongTermPricingEntryList">LongTermPricingEntryList</h2>
<!-- backwards compatibility -->
<a id="schemalongtermpricingentrylist"></a>
<a id="schema_LongTermPricingEntryList"></a>
<a id="tocSlongtermpricingentrylist"></a>
<a id="tocslongtermpricingentrylist"></a>

```json
[
  {
    "LongTermPricingId": {},
    "LongTermPricingEndDate": {},
    "LongTermPricingStartDate": {},
    "LongTermPricingType": {},
    "CurrentActiveJob": {},
    "ReplacementJob": {},
    "IsLongTermPricingAutoRenew": {},
    "LongTermPricingStatus": {},
    "SnowballType": {},
    "JobIds": {}
  }
]
```

<h2 id="tocS_ServiceVersionList">ServiceVersionList</h2>
<!-- backwards compatibility -->
<a id="schemaserviceversionlist"></a>
<a id="schema_ServiceVersionList"></a>
<a id="tocSserviceversionlist"></a>
<a id="tocsserviceversionlist"></a>

```json
[
  {
    "Version": {}
  }
]
```

<h2 id="tocS_LongTermPricingAssociatedJobIdList">LongTermPricingAssociatedJobIdList</h2>
<!-- backwards compatibility -->
<a id="schemalongtermpricingassociatedjobidlist"></a>
<a id="schema_LongTermPricingAssociatedJobIdList"></a>
<a id="tocSlongtermpricingassociatedjobidlist"></a>
<a id="tocslongtermpricingassociatedjobidlist"></a>

```json
[
  "stringstringstringstringstringstringstr"
]
```

<h2 id="tocS_LongTermPricingListEntry">LongTermPricingListEntry</h2>
<!-- backwards compatibility -->
<a id="schemalongtermpricinglistentry"></a>
<a id="schema_LongTermPricingListEntry"></a>
<a id="tocSlongtermpricinglistentry"></a>
<a id="tocslongtermpricinglistentry"></a>

```json
{
  "LongTermPricingId": {},
  "LongTermPricingEndDate": {},
  "LongTermPricingStartDate": {},
  "LongTermPricingType": {},
  "CurrentActiveJob": {},
  "ReplacementJob": {},
  "IsLongTermPricingAutoRenew": {},
  "LongTermPricingStatus": {},
  "SnowballType": {},
  "JobIds": {}
}
```

Each <code>LongTermPricingListEntry</code> object contains information about a long-term pricing type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LongTermPricingId|object|false|none|none|
|LongTermPricingEndDate|object|false|none|none|
|LongTermPricingStartDate|object|false|none|none|
|LongTermPricingType|object|false|none|none|
|CurrentActiveJob|object|false|none|none|
|ReplacementJob|object|false|none|none|
|IsLongTermPricingAutoRenew|object|false|none|none|
|LongTermPricingStatus|object|false|none|none|
|SnowballType|object|false|none|none|
|JobIds|object|false|none|none|

<h2 id="tocS_StorageLimit">StorageLimit</h2>
<!-- backwards compatibility -->
<a id="schemastoragelimit"></a>
<a id="schema_StorageLimit"></a>
<a id="tocSstoragelimit"></a>
<a id="tocsstoragelimit"></a>

```json
0
```

<h2 id="tocS_StorageUnit">StorageUnit</h2>
<!-- backwards compatibility -->
<a id="schemastorageunit"></a>
<a id="schema_StorageUnit"></a>
<a id="tocSstorageunit"></a>
<a id="tocsstorageunit"></a>

```json
"TB"
```

<h2 id="tocS_NFSOnDeviceServiceConfiguration">NFSOnDeviceServiceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanfsondeviceserviceconfiguration"></a>
<a id="schema_NFSOnDeviceServiceConfiguration"></a>
<a id="tocSnfsondeviceserviceconfiguration"></a>
<a id="tocsnfsondeviceserviceconfiguration"></a>

```json
{
  "StorageLimit": {},
  "StorageUnit": {}
}
```

An object that represents the metadata and configuration settings for the NFS (Network File System) service on an Amazon Web Services Snow Family device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageLimit|object|false|none|none|
|StorageUnit|object|false|none|none|

<h2 id="tocS_NodeFaultTolerance">NodeFaultTolerance</h2>
<!-- backwards compatibility -->
<a id="schemanodefaulttolerance"></a>
<a id="schema_NodeFaultTolerance"></a>
<a id="tocSnodefaulttolerance"></a>
<a id="tocsnodefaulttolerance"></a>

```json
1
```

<h2 id="tocS_SnsTopicARN">SnsTopicARN</h2>
<!-- backwards compatibility -->
<a id="schemasnstopicarn"></a>
<a id="schema_SnsTopicARN"></a>
<a id="tocSsnstopicarn"></a>
<a id="tocssnstopicarn"></a>

```json
"string"
```

<h2 id="tocS_TGWOnDeviceServiceConfiguration">TGWOnDeviceServiceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematgwondeviceserviceconfiguration"></a>
<a id="schema_TGWOnDeviceServiceConfiguration"></a>
<a id="tocStgwondeviceserviceconfiguration"></a>
<a id="tocstgwondeviceserviceconfiguration"></a>

```json
{
  "StorageLimit": {},
  "StorageUnit": {}
}
```

An object that represents the metadata and configuration settings for the Storage Gateway service Tape Gateway type on an Amazon Web Services Snow Family device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageLimit|object|false|none|none|
|StorageUnit|object|false|none|none|

<h2 id="tocS_S3OnDeviceServiceConfiguration">S3OnDeviceServiceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3ondeviceserviceconfiguration"></a>
<a id="schema_S3OnDeviceServiceConfiguration"></a>
<a id="tocSs3ondeviceserviceconfiguration"></a>
<a id="tocss3ondeviceserviceconfiguration"></a>

```json
{
  "StorageLimit": {},
  "StorageUnit": {},
  "ServiceSize": {},
  "FaultTolerance": {}
}
```

Amazon S3 compatible storage on Snow family devices configuration items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageLimit|object|false|none|none|
|StorageUnit|object|false|none|none|
|ServiceSize|object|false|none|none|
|FaultTolerance|object|false|none|none|

<h2 id="tocS_S3StorageLimit">S3StorageLimit</h2>
<!-- backwards compatibility -->
<a id="schemas3storagelimit"></a>
<a id="schema_S3StorageLimit"></a>
<a id="tocSs3storagelimit"></a>
<a id="tocss3storagelimit"></a>

```json
0
```

<h2 id="tocS_ServiceSize">ServiceSize</h2>
<!-- backwards compatibility -->
<a id="schemaservicesize"></a>
<a id="schema_ServiceSize"></a>
<a id="tocSservicesize"></a>
<a id="tocsservicesize"></a>

```json
3
```

<h2 id="tocS_TargetOnDeviceServiceList">TargetOnDeviceServiceList</h2>
<!-- backwards compatibility -->
<a id="schematargetondeviceservicelist"></a>
<a id="schema_TargetOnDeviceServiceList"></a>
<a id="tocStargetondeviceservicelist"></a>
<a id="tocstargetondeviceservicelist"></a>

```json
[
  {
    "ServiceName": {},
    "TransferOption": {}
  }
]
```

<h2 id="tocS_S3Resource">S3Resource</h2>
<!-- backwards compatibility -->
<a id="schemas3resource"></a>
<a id="schema_S3Resource"></a>
<a id="tocSs3resource"></a>
<a id="tocss3resource"></a>

```json
{
  "BucketArn": {},
  "KeyRange": {
    "BeginMarker": {},
    "EndMarker": {}
  },
  "TargetOnDeviceServices": {}
}
```

Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into. For export jobs, this object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketArn|object|false|none|none|
|KeyRange|object|false|none|none|
|TargetOnDeviceServices|object|false|none|none|

<h2 id="tocS_Shipment">Shipment</h2>
<!-- backwards compatibility -->
<a id="schemashipment"></a>
<a id="schema_Shipment"></a>
<a id="tocSshipment"></a>
<a id="tocsshipment"></a>

```json
{
  "Status": {},
  "TrackingNumber": {}
}
```

The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|TrackingNumber|object|false|none|none|

<h2 id="tocS_ShipmentState">ShipmentState</h2>
<!-- backwards compatibility -->
<a id="schemashipmentstate"></a>
<a id="schema_ShipmentState"></a>
<a id="tocSshipmentstate"></a>
<a id="tocsshipmentstate"></a>

```json
"RECEIVED"
```

<h2 id="tocS_WirelessConnection">WirelessConnection</h2>
<!-- backwards compatibility -->
<a id="schemawirelessconnection"></a>
<a id="schema_WirelessConnection"></a>
<a id="tocSwirelessconnection"></a>
<a id="tocswirelessconnection"></a>

```json
{
  "IsWifiEnabled": {}
}
```

Configures the wireless connection on an Snowcone device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsWifiEnabled|object|false|none|none|

<h2 id="tocS_TransferOption">TransferOption</h2>
<!-- backwards compatibility -->
<a id="schematransferoption"></a>
<a id="schema_TransferOption"></a>
<a id="tocStransferoption"></a>
<a id="tocstransferoption"></a>

```json
"IMPORT"
```

<h2 id="tocS_TargetOnDeviceService">TargetOnDeviceService</h2>
<!-- backwards compatibility -->
<a id="schematargetondeviceservice"></a>
<a id="schema_TargetOnDeviceService"></a>
<a id="tocStargetondeviceservice"></a>
<a id="tocstargetondeviceservice"></a>

```json
{
  "ServiceName": {},
  "TransferOption": {}
}
```

An object that represents the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File System).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceName|object|false|none|none|
|TransferOption|object|false|none|none|
