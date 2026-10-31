<h1 id="aws-cloudhsm-v2">AWS CloudHSM V2 v2017-04-28</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

For more information about AWS CloudHSM, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a> and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>.

Base URLs:

* <a href="http://cloudhsmv2.us-east-1.amazonaws.com">http://cloudhsmv2.us-east-1.amazonaws.com</a> - The CloudHSM V2 multi-region endpoint

* <a href="https://cloudhsmv2.us-east-1.amazonaws.com">https://cloudhsmv2.us-east-1.amazonaws.com</a> - The CloudHSM V2 multi-region endpoint

* <a href="http://cloudhsmv2.cn-north-1.amazonaws.com.cn">http://cloudhsmv2.cn-north-1.amazonaws.com.cn</a> - The CloudHSM V2 endpoint for China (Beijing) and China (Ningxia)

* <a href="https://cloudhsmv2.cn-north-1.amazonaws.com.cn">https://cloudhsmv2.cn-north-1.amazonaws.com.cn</a> - The CloudHSM V2 endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/cloudhsmv2/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-cloudhsm-v2-default">Default</h1>

## CopyBackupToRegion

<a id="opIdCopyBackupToRegion"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.CopyBackupToRegion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.CopyBackupToRegion' \
  -d '{
    "DestinationRegion": {},
    "BackupId": {},
    "TagList": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.CopyBackupToRegion`

Copy an AWS CloudHSM cluster backup to a different region.

> Body parameter

```json
{
  "DestinationRegion": {},
  "BackupId": {},
  "TagList": {}
}
```

<h3 id="copybackuptoregion-parameters">Parameters</h3>

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
|body|body|[CopyBackupToRegionRequest](#schemacopybackuptoregionrequest)|true|none|
|» DestinationRegion|body|object|true|none|
|» BackupId|body|object|true|none|
|» TagList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.CopyBackupToRegion|

> Example responses

> 200 Response

```json
{
  "DestinationBackup": {
    "CreateTimestamp": {},
    "SourceRegion": {},
    "SourceBackup": {},
    "SourceCluster": {}
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

<h3 id="copybackuptoregion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopyBackupToRegionResponse](#schemacopybackuptoregionresponse)|
|480|480|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|
|481|481|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|482|482|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|483|483|CloudHsmResourceNotFoundException|[CloudHsmResourceNotFoundException](#schemacloudhsmresourcenotfoundexception)|
|484|484|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|485|485|CloudHsmTagException|[CloudHsmTagException](#schemacloudhsmtagexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCluster

<a id="opIdCreateCluster"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.CreateCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.CreateCluster' \
  -d '{
    "BackupRetentionPolicy": {
      "Type": {},
      "Value": {}
    },
    "HsmType": {},
    "SourceBackupId": {},
    "SubnetIds": {},
    "TagList": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.CreateCluster`

Creates a new AWS CloudHSM cluster.

> Body parameter

```json
{
  "BackupRetentionPolicy": {
    "Type": {},
    "Value": {}
  },
  "HsmType": {},
  "SourceBackupId": {},
  "SubnetIds": {},
  "TagList": {}
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
|» BackupRetentionPolicy|body|object|false|none|
|» » Type|body|object|false|none|
|» » Value|body|object|false|none|
|» HsmType|body|object|true|none|
|» SourceBackupId|body|object|false|none|
|» SubnetIds|body|object|true|none|
|» TagList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.CreateCluster|

> Example responses

> 200 Response

```json
{
  "Cluster": {
    "BackupPolicy": {},
    "BackupRetentionPolicy": {
      "Type": {},
      "Value": {}
    },
    "ClusterId": {},
    "CreateTimestamp": {},
    "Hsms": {},
    "HsmType": {},
    "PreCoPassword": {},
    "SecurityGroup": {},
    "SourceBackupId": {},
    "State": {},
    "StateMessage": {},
    "SubnetMapping": {
      "property1": "string",
      "property2": "string"
    },
    "VpcId": {},
    "Certificates": {
      "ClusterCsr": {},
      "HsmCertificate": {},
      "AwsHardwareCertificate": {},
      "ManufacturerHardwareCertificate": {},
      "ClusterCertificate": {}
    },
    "TagList": {}
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

<h3 id="createcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateClusterResponse](#schemacreateclusterresponse)|
|480|480|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|
|481|481|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|482|482|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|483|483|CloudHsmResourceNotFoundException|[CloudHsmResourceNotFoundException](#schemacloudhsmresourcenotfoundexception)|
|484|484|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|485|485|CloudHsmTagException|[CloudHsmTagException](#schemacloudhsmtagexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateHsm

<a id="opIdCreateHsm"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.CreateHsm' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.CreateHsm' \
  -d '{
    "ClusterId": {},
    "AvailabilityZone": {},
    "IpAddress": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.CreateHsm`

Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.

> Body parameter

```json
{
  "ClusterId": {},
  "AvailabilityZone": {},
  "IpAddress": {}
}
```

<h3 id="createhsm-parameters">Parameters</h3>

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
|body|body|[CreateHsmRequest](#schemacreatehsmrequest)|true|none|
|» ClusterId|body|object|true|none|
|» AvailabilityZone|body|object|true|none|
|» IpAddress|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.CreateHsm|

> Example responses

> 200 Response

```json
{
  "Hsm": {
    "AvailabilityZone": {},
    "ClusterId": {},
    "SubnetId": {},
    "EniId": {},
    "EniIp": {},
    "HsmId": {},
    "State": {},
    "StateMessage": {}
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createhsm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateHsmResponse](#schemacreatehsmresponse)|
|480|480|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|481|481|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|482|482|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|483|483|CloudHsmResourceNotFoundException|[CloudHsmResourceNotFoundException](#schemacloudhsmresourcenotfoundexception)|
|484|484|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackup

<a id="opIdDeleteBackup"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.DeleteBackup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.DeleteBackup' \
  -d '{
    "BackupId": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.DeleteBackup`

Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see <a>RestoreBackup</a>.

> Body parameter

```json
{
  "BackupId": {}
}
```

<h3 id="deletebackup-parameters">Parameters</h3>

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
|body|body|[DeleteBackupRequest](#schemadeletebackuprequest)|true|none|
|» BackupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.DeleteBackup|

> Example responses

> 200 Response

```json
{
  "Backup": {
    "BackupId": {},
    "BackupState": {},
    "ClusterId": {},
    "CreateTimestamp": {},
    "CopyTimestamp": {},
    "NeverExpires": {},
    "SourceRegion": {},
    "SourceBackup": {},
    "SourceCluster": {},
    "DeleteTimestamp": {},
    "TagList": {}
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletebackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBackupResponse](#schemadeletebackupresponse)|
|480|480|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|
|481|481|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|482|482|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|483|483|CloudHsmResourceNotFoundException|[CloudHsmResourceNotFoundException](#schemacloudhsmresourcenotfoundexception)|
|484|484|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCluster

<a id="opIdDeleteCluster"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.DeleteCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.DeleteCluster' \
  -d '{
    "ClusterId": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.DeleteCluster`

Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.

> Body parameter

```json
{
  "ClusterId": {}
}
```

<h3 id="deletecluster-parameters">Parameters</h3>

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
|body|body|[DeleteClusterRequest](#schemadeleteclusterrequest)|true|none|
|» ClusterId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.DeleteCluster|

> Example responses

> 200 Response

```json
{
  "Cluster": {
    "BackupPolicy": {},
    "BackupRetentionPolicy": {
      "Type": {},
      "Value": {}
    },
    "ClusterId": {},
    "CreateTimestamp": {},
    "Hsms": {},
    "HsmType": {},
    "PreCoPassword": {},
    "SecurityGroup": {},
    "SourceBackupId": {},
    "State": {},
    "StateMessage": {},
    "SubnetMapping": {
      "property1": "string",
      "property2": "string"
    },
    "VpcId": {},
    "Certificates": {
      "ClusterCsr": {},
      "HsmCertificate": {},
      "AwsHardwareCertificate": {},
      "ManufacturerHardwareCertificate": {},
      "ClusterCertificate": {}
    },
    "TagList": {}
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

<h3 id="deletecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteClusterResponse](#schemadeleteclusterresponse)|
|480|480|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|
|481|481|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|482|482|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|483|483|CloudHsmResourceNotFoundException|[CloudHsmResourceNotFoundException](#schemacloudhsmresourcenotfoundexception)|
|484|484|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|485|485|CloudHsmTagException|[CloudHsmTagException](#schemacloudhsmtagexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteHsm

<a id="opIdDeleteHsm"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.DeleteHsm' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.DeleteHsm' \
  -d '{
    "ClusterId": {},
    "HsmId": {},
    "EniId": {},
    "EniIp": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.DeleteHsm`

Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.

> Body parameter

```json
{
  "ClusterId": {},
  "HsmId": {},
  "EniId": {},
  "EniIp": {}
}
```

<h3 id="deletehsm-parameters">Parameters</h3>

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
|body|body|[DeleteHsmRequest](#schemadeletehsmrequest)|true|none|
|» ClusterId|body|object|true|none|
|» HsmId|body|object|false|none|
|» EniId|body|object|false|none|
|» EniIp|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.DeleteHsm|

> Example responses

> 200 Response

```json
{
  "HsmId": {}
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

<h3 id="deletehsm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteHsmResponse](#schemadeletehsmresponse)|
|480|480|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|481|481|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|482|482|CloudHsmResourceNotFoundException|[CloudHsmResourceNotFoundException](#schemacloudhsmresourcenotfoundexception)|
|483|483|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|484|484|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBackups

<a id="opIdDescribeBackups"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.DescribeBackups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.DescribeBackups' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "SortAscending": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.DescribeBackups`

<p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "SortAscending": {}
}
```

<h3 id="describebackups-parameters">Parameters</h3>

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
|body|body|[DescribeBackupsRequest](#schemadescribebackupsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|
|» » **additionalProperties**|body|[Strings](#schemastrings)|false|none|
|» SortAscending|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.DescribeBackups|

> Example responses

> 200 Response

```json
{
  "Backups": {},
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

<h3 id="describebackups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBackupsResponse](#schemadescribebackupsresponse)|
|480|480|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|
|481|481|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|482|482|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|483|483|CloudHsmResourceNotFoundException|[CloudHsmResourceNotFoundException](#schemacloudhsmresourcenotfoundexception)|
|484|484|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|485|485|CloudHsmTagException|[CloudHsmTagException](#schemacloudhsmtagexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeClusters

<a id="opIdDescribeClusters"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.DescribeClusters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.DescribeClusters' \
  -d '{
    "Filters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.DescribeClusters`

<p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>

> Body parameter

```json
{
  "Filters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeclusters-parameters">Parameters</h3>

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
|body|body|[DescribeClustersRequest](#schemadescribeclustersrequest)|true|none|
|» Filters|body|object|false|none|
|» » **additionalProperties**|body|[Strings](#schemastrings)|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.DescribeClusters|

> Example responses

> 200 Response

```json
{
  "Clusters": {},
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

<h3 id="describeclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeClustersResponse](#schemadescribeclustersresponse)|
|480|480|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|
|481|481|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|482|482|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|483|483|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|484|484|CloudHsmTagException|[CloudHsmTagException](#schemacloudhsmtagexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InitializeCluster

<a id="opIdInitializeCluster"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.InitializeCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.InitializeCluster' \
  -d '{
    "ClusterId": {},
    "SignedCert": {},
    "TrustAnchor": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.InitializeCluster`

Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.

> Body parameter

```json
{
  "ClusterId": {},
  "SignedCert": {},
  "TrustAnchor": {}
}
```

<h3 id="initializecluster-parameters">Parameters</h3>

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
|body|body|[InitializeClusterRequest](#schemainitializeclusterrequest)|true|none|
|» ClusterId|body|object|true|none|
|» SignedCert|body|object|true|none|
|» TrustAnchor|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.InitializeCluster|

> Example responses

> 200 Response

```json
{
  "State": {},
  "StateMessage": {}
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

<h3 id="initializecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InitializeClusterResponse](#schemainitializeclusterresponse)|
|480|480|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|
|481|481|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|482|482|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|483|483|CloudHsmResourceNotFoundException|[CloudHsmResourceNotFoundException](#schemacloudhsmresourcenotfoundexception)|
|484|484|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTags

<a id="opIdListTags"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.ListTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.ListTags' \
  -d '{
    "ResourceId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.ListTags`

<p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>

> Body parameter

```json
{
  "ResourceId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listtags-parameters">Parameters</h3>

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
|body|body|[ListTagsRequest](#schemalisttagsrequest)|true|none|
|» ResourceId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.ListTags|

> Example responses

> 200 Response

```json
{
  "TagList": {},
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

<h3 id="listtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsResponse](#schemalisttagsresponse)|
|480|480|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|
|481|481|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|482|482|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|483|483|CloudHsmResourceNotFoundException|[CloudHsmResourceNotFoundException](#schemacloudhsmresourcenotfoundexception)|
|484|484|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|485|485|CloudHsmTagException|[CloudHsmTagException](#schemacloudhsmtagexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyBackupAttributes

<a id="opIdModifyBackupAttributes"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.ModifyBackupAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.ModifyBackupAttributes' \
  -d '{
    "BackupId": {},
    "NeverExpires": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.ModifyBackupAttributes`

Modifies attributes for AWS CloudHSM backup.

> Body parameter

```json
{
  "BackupId": {},
  "NeverExpires": {}
}
```

<h3 id="modifybackupattributes-parameters">Parameters</h3>

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
|body|body|[ModifyBackupAttributesRequest](#schemamodifybackupattributesrequest)|true|none|
|» BackupId|body|object|true|none|
|» NeverExpires|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.ModifyBackupAttributes|

> Example responses

> 200 Response

```json
{
  "Backup": {
    "BackupId": {},
    "BackupState": {},
    "ClusterId": {},
    "CreateTimestamp": {},
    "CopyTimestamp": {},
    "NeverExpires": {},
    "SourceRegion": {},
    "SourceBackup": {},
    "SourceCluster": {},
    "DeleteTimestamp": {},
    "TagList": {}
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="modifybackupattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyBackupAttributesResponse](#schemamodifybackupattributesresponse)|
|480|480|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|
|481|481|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|482|482|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|483|483|CloudHsmResourceNotFoundException|[CloudHsmResourceNotFoundException](#schemacloudhsmresourcenotfoundexception)|
|484|484|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyCluster

<a id="opIdModifyCluster"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.ModifyCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.ModifyCluster' \
  -d '{
    "BackupRetentionPolicy": {
      "Type": {},
      "Value": {}
    },
    "ClusterId": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.ModifyCluster`

Modifies AWS CloudHSM cluster.

> Body parameter

```json
{
  "BackupRetentionPolicy": {
    "Type": {},
    "Value": {}
  },
  "ClusterId": {}
}
```

<h3 id="modifycluster-parameters">Parameters</h3>

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
|body|body|[ModifyClusterRequest](#schemamodifyclusterrequest)|true|none|
|» BackupRetentionPolicy|body|object|true|none|
|» » Type|body|object|false|none|
|» » Value|body|object|false|none|
|» ClusterId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.ModifyCluster|

> Example responses

> 200 Response

```json
{
  "Cluster": {
    "BackupPolicy": {},
    "BackupRetentionPolicy": {
      "Type": {},
      "Value": {}
    },
    "ClusterId": {},
    "CreateTimestamp": {},
    "Hsms": {},
    "HsmType": {},
    "PreCoPassword": {},
    "SecurityGroup": {},
    "SourceBackupId": {},
    "State": {},
    "StateMessage": {},
    "SubnetMapping": {
      "property1": "string",
      "property2": "string"
    },
    "VpcId": {},
    "Certificates": {
      "ClusterCsr": {},
      "HsmCertificate": {},
      "AwsHardwareCertificate": {},
      "ManufacturerHardwareCertificate": {},
      "ClusterCertificate": {}
    },
    "TagList": {}
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="modifycluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyClusterResponse](#schemamodifyclusterresponse)|
|480|480|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|
|481|481|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|482|482|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|483|483|CloudHsmResourceNotFoundException|[CloudHsmResourceNotFoundException](#schemacloudhsmresourcenotfoundexception)|
|484|484|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestoreBackup

<a id="opIdRestoreBackup"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.RestoreBackup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.RestoreBackup' \
  -d '{
    "BackupId": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.RestoreBackup`

Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see <a>DeleteBackup</a>.

> Body parameter

```json
{
  "BackupId": {}
}
```

<h3 id="restorebackup-parameters">Parameters</h3>

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
|body|body|[RestoreBackupRequest](#schemarestorebackuprequest)|true|none|
|» BackupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.RestoreBackup|

> Example responses

> 200 Response

```json
{
  "Backup": {
    "BackupId": {},
    "BackupState": {},
    "ClusterId": {},
    "CreateTimestamp": {},
    "CopyTimestamp": {},
    "NeverExpires": {},
    "SourceRegion": {},
    "SourceBackup": {},
    "SourceCluster": {},
    "DeleteTimestamp": {},
    "TagList": {}
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="restorebackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreBackupResponse](#schemarestorebackupresponse)|
|480|480|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|
|481|481|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|482|482|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|483|483|CloudHsmResourceNotFoundException|[CloudHsmResourceNotFoundException](#schemacloudhsmresourcenotfoundexception)|
|484|484|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.TagResource' \
  -d '{
    "ResourceId": {},
    "TagList": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.TagResource`

Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.

> Body parameter

```json
{
  "ResourceId": {},
  "TagList": {}
}
```

<h3 id="tagresource-parameters">Parameters</h3>

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
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» ResourceId|body|object|true|none|
|» TagList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|
|481|481|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|482|482|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|483|483|CloudHsmResourceNotFoundException|[CloudHsmResourceNotFoundException](#schemacloudhsmresourcenotfoundexception)|
|484|484|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|485|485|CloudHsmTagException|[CloudHsmTagException](#schemacloudhsmtagexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://cloudhsmv2.us-east-1.amazonaws.com/#X-Amz-Target=BaldrApiService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: BaldrApiService.UntagResource' \
  -d '{
    "ResourceId": {},
    "TagKeyList": {}
  }'
```

`POST /#X-Amz-Target=BaldrApiService.UntagResource`

Removes the specified tag or tags from the specified AWS CloudHSM cluster.

> Body parameter

```json
{
  "ResourceId": {},
  "TagKeyList": {}
}
```

<h3 id="untagresource-parameters">Parameters</h3>

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
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» ResourceId|body|object|true|none|
|» TagKeyList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|BaldrApiService.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|CloudHsmAccessDeniedException|[CloudHsmAccessDeniedException](#schemacloudhsmaccessdeniedexception)|
|481|481|CloudHsmInternalFailureException|[CloudHsmInternalFailureException](#schemacloudhsminternalfailureexception)|
|482|482|CloudHsmInvalidRequestException|[CloudHsmInvalidRequestException](#schemacloudhsminvalidrequestexception)|
|483|483|CloudHsmResourceNotFoundException|[CloudHsmResourceNotFoundException](#schemacloudhsmresourcenotfoundexception)|
|484|484|CloudHsmServiceException|[CloudHsmServiceException](#schemacloudhsmserviceexception)|
|485|485|CloudHsmTagException|[CloudHsmTagException](#schemacloudhsmtagexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CopyBackupToRegionResponse">CopyBackupToRegionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacopybackuptoregionresponse"></a>
<a id="schema_CopyBackupToRegionResponse"></a>
<a id="tocScopybackuptoregionresponse"></a>
<a id="tocscopybackuptoregionresponse"></a>

```json
{
  "DestinationBackup": {
    "CreateTimestamp": {},
    "SourceRegion": {},
    "SourceBackup": {},
    "SourceCluster": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationBackup|object|false|none|none|

<h2 id="tocS_CopyBackupToRegionRequest">CopyBackupToRegionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacopybackuptoregionrequest"></a>
<a id="schema_CopyBackupToRegionRequest"></a>
<a id="tocScopybackuptoregionrequest"></a>
<a id="tocscopybackuptoregionrequest"></a>

```json
{
  "DestinationRegion": {},
  "BackupId": {},
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationRegion|object|true|none|none|
|BackupId|object|true|none|none|
|TagList|object|false|none|none|

<h2 id="tocS_CloudHsmAccessDeniedException">CloudHsmAccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsmaccessdeniedexception"></a>
<a id="schema_CloudHsmAccessDeniedException"></a>
<a id="tocScloudhsmaccessdeniedexception"></a>
<a id="tocscloudhsmaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_CloudHsmInternalFailureException">CloudHsmInternalFailureException</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsminternalfailureexception"></a>
<a id="schema_CloudHsmInternalFailureException"></a>
<a id="tocScloudhsminternalfailureexception"></a>
<a id="tocscloudhsminternalfailureexception"></a>

```json
null
```

<h2 id="tocS_CloudHsmInvalidRequestException">CloudHsmInvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsminvalidrequestexception"></a>
<a id="schema_CloudHsmInvalidRequestException"></a>
<a id="tocScloudhsminvalidrequestexception"></a>
<a id="tocscloudhsminvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_CloudHsmResourceNotFoundException">CloudHsmResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsmresourcenotfoundexception"></a>
<a id="schema_CloudHsmResourceNotFoundException"></a>
<a id="tocScloudhsmresourcenotfoundexception"></a>
<a id="tocscloudhsmresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_CloudHsmServiceException">CloudHsmServiceException</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsmserviceexception"></a>
<a id="schema_CloudHsmServiceException"></a>
<a id="tocScloudhsmserviceexception"></a>
<a id="tocscloudhsmserviceexception"></a>

```json
null
```

<h2 id="tocS_CloudHsmTagException">CloudHsmTagException</h2>
<!-- backwards compatibility -->
<a id="schemacloudhsmtagexception"></a>
<a id="schema_CloudHsmTagException"></a>
<a id="tocScloudhsmtagexception"></a>
<a id="tocscloudhsmtagexception"></a>

```json
null
```

<h2 id="tocS_CreateClusterResponse">CreateClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterresponse"></a>
<a id="schema_CreateClusterResponse"></a>
<a id="tocScreateclusterresponse"></a>
<a id="tocscreateclusterresponse"></a>

```json
{
  "Cluster": {
    "BackupPolicy": {},
    "BackupRetentionPolicy": {
      "Type": {},
      "Value": {}
    },
    "ClusterId": {},
    "CreateTimestamp": {},
    "Hsms": {},
    "HsmType": {},
    "PreCoPassword": {},
    "SecurityGroup": {},
    "SourceBackupId": {},
    "State": {},
    "StateMessage": {},
    "SubnetMapping": {
      "property1": "string",
      "property2": "string"
    },
    "VpcId": {},
    "Certificates": {
      "ClusterCsr": {},
      "HsmCertificate": {},
      "AwsHardwareCertificate": {},
      "ManufacturerHardwareCertificate": {},
      "ClusterCertificate": {}
    },
    "TagList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cluster|object|false|none|none|

<h2 id="tocS_CreateClusterRequest">CreateClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterrequest"></a>
<a id="schema_CreateClusterRequest"></a>
<a id="tocScreateclusterrequest"></a>
<a id="tocscreateclusterrequest"></a>

```json
{
  "BackupRetentionPolicy": {
    "Type": {},
    "Value": {}
  },
  "HsmType": {},
  "SourceBackupId": {},
  "SubnetIds": {},
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupRetentionPolicy|object|false|none|none|
|HsmType|object|true|none|none|
|SourceBackupId|object|false|none|none|
|SubnetIds|object|true|none|none|
|TagList|object|false|none|none|

<h2 id="tocS_CreateHsmResponse">CreateHsmResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatehsmresponse"></a>
<a id="schema_CreateHsmResponse"></a>
<a id="tocScreatehsmresponse"></a>
<a id="tocscreatehsmresponse"></a>

```json
{
  "Hsm": {
    "AvailabilityZone": {},
    "ClusterId": {},
    "SubnetId": {},
    "EniId": {},
    "EniIp": {},
    "HsmId": {},
    "State": {},
    "StateMessage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Hsm|object|false|none|none|

<h2 id="tocS_CreateHsmRequest">CreateHsmRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehsmrequest"></a>
<a id="schema_CreateHsmRequest"></a>
<a id="tocScreatehsmrequest"></a>
<a id="tocscreatehsmrequest"></a>

```json
{
  "ClusterId": {},
  "AvailabilityZone": {},
  "IpAddress": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|AvailabilityZone|object|true|none|none|
|IpAddress|object|false|none|none|

<h2 id="tocS_DeleteBackupResponse">DeleteBackupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackupresponse"></a>
<a id="schema_DeleteBackupResponse"></a>
<a id="tocSdeletebackupresponse"></a>
<a id="tocsdeletebackupresponse"></a>

```json
{
  "Backup": {
    "BackupId": {},
    "BackupState": {},
    "ClusterId": {},
    "CreateTimestamp": {},
    "CopyTimestamp": {},
    "NeverExpires": {},
    "SourceRegion": {},
    "SourceBackup": {},
    "SourceCluster": {},
    "DeleteTimestamp": {},
    "TagList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Backup|object|false|none|none|

<h2 id="tocS_DeleteBackupRequest">DeleteBackupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackuprequest"></a>
<a id="schema_DeleteBackupRequest"></a>
<a id="tocSdeletebackuprequest"></a>
<a id="tocsdeletebackuprequest"></a>

```json
{
  "BackupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupId|object|true|none|none|

<h2 id="tocS_DeleteClusterResponse">DeleteClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclusterresponse"></a>
<a id="schema_DeleteClusterResponse"></a>
<a id="tocSdeleteclusterresponse"></a>
<a id="tocsdeleteclusterresponse"></a>

```json
{
  "Cluster": {
    "BackupPolicy": {},
    "BackupRetentionPolicy": {
      "Type": {},
      "Value": {}
    },
    "ClusterId": {},
    "CreateTimestamp": {},
    "Hsms": {},
    "HsmType": {},
    "PreCoPassword": {},
    "SecurityGroup": {},
    "SourceBackupId": {},
    "State": {},
    "StateMessage": {},
    "SubnetMapping": {
      "property1": "string",
      "property2": "string"
    },
    "VpcId": {},
    "Certificates": {
      "ClusterCsr": {},
      "HsmCertificate": {},
      "AwsHardwareCertificate": {},
      "ManufacturerHardwareCertificate": {},
      "ClusterCertificate": {}
    },
    "TagList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cluster|object|false|none|none|

<h2 id="tocS_DeleteClusterRequest">DeleteClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclusterrequest"></a>
<a id="schema_DeleteClusterRequest"></a>
<a id="tocSdeleteclusterrequest"></a>
<a id="tocsdeleteclusterrequest"></a>

```json
{
  "ClusterId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|

<h2 id="tocS_DeleteHsmResponse">DeleteHsmResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletehsmresponse"></a>
<a id="schema_DeleteHsmResponse"></a>
<a id="tocSdeletehsmresponse"></a>
<a id="tocsdeletehsmresponse"></a>

```json
{
  "HsmId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HsmId|object|false|none|none|

<h2 id="tocS_DeleteHsmRequest">DeleteHsmRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletehsmrequest"></a>
<a id="schema_DeleteHsmRequest"></a>
<a id="tocSdeletehsmrequest"></a>
<a id="tocsdeletehsmrequest"></a>

```json
{
  "ClusterId": {},
  "HsmId": {},
  "EniId": {},
  "EniIp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|HsmId|object|false|none|none|
|EniId|object|false|none|none|
|EniIp|object|false|none|none|

<h2 id="tocS_DescribeBackupsResponse">DescribeBackupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebackupsresponse"></a>
<a id="schema_DescribeBackupsResponse"></a>
<a id="tocSdescribebackupsresponse"></a>
<a id="tocsdescribebackupsresponse"></a>

```json
{
  "Backups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Backups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeBackupsRequest">DescribeBackupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebackupsrequest"></a>
<a id="schema_DescribeBackupsRequest"></a>
<a id="tocSdescribebackupsrequest"></a>
<a id="tocsdescribebackupsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "SortAscending": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|
|SortAscending|object|false|none|none|

<h2 id="tocS_DescribeClustersResponse">DescribeClustersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclustersresponse"></a>
<a id="schema_DescribeClustersResponse"></a>
<a id="tocSdescribeclustersresponse"></a>
<a id="tocsdescribeclustersresponse"></a>

```json
{
  "Clusters": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Clusters|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeClustersRequest">DescribeClustersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclustersrequest"></a>
<a id="schema_DescribeClustersRequest"></a>
<a id="tocSdescribeclustersrequest"></a>
<a id="tocsdescribeclustersrequest"></a>

```json
{
  "Filters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_InitializeClusterResponse">InitializeClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemainitializeclusterresponse"></a>
<a id="schema_InitializeClusterResponse"></a>
<a id="tocSinitializeclusterresponse"></a>
<a id="tocsinitializeclusterresponse"></a>

```json
{
  "State": {},
  "StateMessage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|
|StateMessage|object|false|none|none|

<h2 id="tocS_InitializeClusterRequest">InitializeClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemainitializeclusterrequest"></a>
<a id="schema_InitializeClusterRequest"></a>
<a id="tocSinitializeclusterrequest"></a>
<a id="tocsinitializeclusterrequest"></a>

```json
{
  "ClusterId": {},
  "SignedCert": {},
  "TrustAnchor": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|SignedCert|object|true|none|none|
|TrustAnchor|object|true|none|none|

<h2 id="tocS_ListTagsResponse">ListTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsresponse"></a>
<a id="schema_ListTagsResponse"></a>
<a id="tocSlisttagsresponse"></a>
<a id="tocslisttagsresponse"></a>

```json
{
  "TagList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsRequest">ListTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsrequest"></a>
<a id="schema_ListTagsRequest"></a>
<a id="tocSlisttagsrequest"></a>
<a id="tocslisttagsrequest"></a>

```json
{
  "ResourceId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ModifyBackupAttributesResponse">ModifyBackupAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifybackupattributesresponse"></a>
<a id="schema_ModifyBackupAttributesResponse"></a>
<a id="tocSmodifybackupattributesresponse"></a>
<a id="tocsmodifybackupattributesresponse"></a>

```json
{
  "Backup": {
    "BackupId": {},
    "BackupState": {},
    "ClusterId": {},
    "CreateTimestamp": {},
    "CopyTimestamp": {},
    "NeverExpires": {},
    "SourceRegion": {},
    "SourceBackup": {},
    "SourceCluster": {},
    "DeleteTimestamp": {},
    "TagList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Backup|[Backup](#schemabackup)|false|none|Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>, <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is pending deletion will include the <code>DeleteTimestamp</code> parameter.|

<h2 id="tocS_ModifyBackupAttributesRequest">ModifyBackupAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifybackupattributesrequest"></a>
<a id="schema_ModifyBackupAttributesRequest"></a>
<a id="tocSmodifybackupattributesrequest"></a>
<a id="tocsmodifybackupattributesrequest"></a>

```json
{
  "BackupId": {},
  "NeverExpires": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupId|object|true|none|none|
|NeverExpires|object|true|none|none|

<h2 id="tocS_ModifyClusterResponse">ModifyClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifyclusterresponse"></a>
<a id="schema_ModifyClusterResponse"></a>
<a id="tocSmodifyclusterresponse"></a>
<a id="tocsmodifyclusterresponse"></a>

```json
{
  "Cluster": {
    "BackupPolicy": {},
    "BackupRetentionPolicy": {
      "Type": {},
      "Value": {}
    },
    "ClusterId": {},
    "CreateTimestamp": {},
    "Hsms": {},
    "HsmType": {},
    "PreCoPassword": {},
    "SecurityGroup": {},
    "SourceBackupId": {},
    "State": {},
    "StateMessage": {},
    "SubnetMapping": {
      "property1": "string",
      "property2": "string"
    },
    "VpcId": {},
    "Certificates": {
      "ClusterCsr": {},
      "HsmCertificate": {},
      "AwsHardwareCertificate": {},
      "ManufacturerHardwareCertificate": {},
      "ClusterCertificate": {}
    },
    "TagList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cluster|[Cluster](#schemacluster)|false|none|Contains information about an AWS CloudHSM cluster.|

<h2 id="tocS_ModifyClusterRequest">ModifyClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifyclusterrequest"></a>
<a id="schema_ModifyClusterRequest"></a>
<a id="tocSmodifyclusterrequest"></a>
<a id="tocsmodifyclusterrequest"></a>

```json
{
  "BackupRetentionPolicy": {
    "Type": {},
    "Value": {}
  },
  "ClusterId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupRetentionPolicy|object|true|none|none|
|ClusterId|object|true|none|none|

<h2 id="tocS_RestoreBackupResponse">RestoreBackupResponse</h2>
<!-- backwards compatibility -->
<a id="schemarestorebackupresponse"></a>
<a id="schema_RestoreBackupResponse"></a>
<a id="tocSrestorebackupresponse"></a>
<a id="tocsrestorebackupresponse"></a>

```json
{
  "Backup": {
    "BackupId": {},
    "BackupState": {},
    "ClusterId": {},
    "CreateTimestamp": {},
    "CopyTimestamp": {},
    "NeverExpires": {},
    "SourceRegion": {},
    "SourceBackup": {},
    "SourceCluster": {},
    "DeleteTimestamp": {},
    "TagList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Backup|object|false|none|none|

<h2 id="tocS_RestoreBackupRequest">RestoreBackupRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestorebackuprequest"></a>
<a id="schema_RestoreBackupRequest"></a>
<a id="tocSrestorebackuprequest"></a>
<a id="tocsrestorebackuprequest"></a>

```json
{
  "BackupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupId|object|true|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

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
  "ResourceId": {},
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|TagList|object|true|none|none|

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "ResourceId": {},
  "TagKeyList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|TagKeyList|object|true|none|none|

<h2 id="tocS_BackupId">BackupId</h2>
<!-- backwards compatibility -->
<a id="schemabackupid"></a>
<a id="schema_BackupId"></a>
<a id="tocSbackupid"></a>
<a id="tocsbackupid"></a>

```json
"string"
```

<h2 id="tocS_BackupState">BackupState</h2>
<!-- backwards compatibility -->
<a id="schemabackupstate"></a>
<a id="schema_BackupState"></a>
<a id="tocSbackupstate"></a>
<a id="tocsbackupstate"></a>

```json
"CREATE_IN_PROGRESS"
```

<h2 id="tocS_ClusterId">ClusterId</h2>
<!-- backwards compatibility -->
<a id="schemaclusterid"></a>
<a id="schema_ClusterId"></a>
<a id="tocSclusterid"></a>
<a id="tocsclusterid"></a>

```json
"string"
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

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
"string"
```

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_Backup">Backup</h2>
<!-- backwards compatibility -->
<a id="schemabackup"></a>
<a id="schema_Backup"></a>
<a id="tocSbackup"></a>
<a id="tocsbackup"></a>

```json
{
  "BackupId": {},
  "BackupState": {},
  "ClusterId": {},
  "CreateTimestamp": {},
  "CopyTimestamp": {},
  "NeverExpires": {},
  "SourceRegion": {},
  "SourceBackup": {},
  "SourceCluster": {},
  "DeleteTimestamp": {},
  "TagList": {}
}
```

Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>, <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is pending deletion will include the <code>DeleteTimestamp</code> parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupId|object|true|none|none|
|BackupState|object|false|none|none|
|ClusterId|object|false|none|none|
|CreateTimestamp|object|false|none|none|
|CopyTimestamp|object|false|none|none|
|NeverExpires|object|false|none|none|
|SourceRegion|object|false|none|none|
|SourceBackup|object|false|none|none|
|SourceCluster|object|false|none|none|
|DeleteTimestamp|object|false|none|none|
|TagList|object|false|none|none|

<h2 id="tocS_BackupPolicy">BackupPolicy</h2>
<!-- backwards compatibility -->
<a id="schemabackuppolicy"></a>
<a id="schema_BackupPolicy"></a>
<a id="tocSbackuppolicy"></a>
<a id="tocsbackuppolicy"></a>

```json
"DEFAULT"
```

<h2 id="tocS_BackupRetentionType">BackupRetentionType</h2>
<!-- backwards compatibility -->
<a id="schemabackupretentiontype"></a>
<a id="schema_BackupRetentionType"></a>
<a id="tocSbackupretentiontype"></a>
<a id="tocsbackupretentiontype"></a>

```json
"DAYS"
```

<h2 id="tocS_BackupRetentionValue">BackupRetentionValue</h2>
<!-- backwards compatibility -->
<a id="schemabackupretentionvalue"></a>
<a id="schema_BackupRetentionValue"></a>
<a id="tocSbackupretentionvalue"></a>
<a id="tocsbackupretentionvalue"></a>

```json
"str"
```

<h2 id="tocS_BackupRetentionPolicy">BackupRetentionPolicy</h2>
<!-- backwards compatibility -->
<a id="schemabackupretentionpolicy"></a>
<a id="schema_BackupRetentionPolicy"></a>
<a id="tocSbackupretentionpolicy"></a>
<a id="tocsbackupretentionpolicy"></a>

```json
{
  "Type": {},
  "Value": {}
}
```

A policy that defines the number of days to retain backups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_Backups">Backups</h2>
<!-- backwards compatibility -->
<a id="schemabackups"></a>
<a id="schema_Backups"></a>
<a id="tocSbackups"></a>
<a id="tocsbackups"></a>

```json
[
  {
    "BackupId": {},
    "BackupState": {},
    "ClusterId": {},
    "CreateTimestamp": {},
    "CopyTimestamp": {},
    "NeverExpires": {},
    "SourceRegion": {},
    "SourceBackup": {},
    "SourceCluster": {},
    "DeleteTimestamp": {},
    "TagList": {}
  }
]
```

<h2 id="tocS_BackupsMaxSize">BackupsMaxSize</h2>
<!-- backwards compatibility -->
<a id="schemabackupsmaxsize"></a>
<a id="schema_BackupsMaxSize"></a>
<a id="tocSbackupsmaxsize"></a>
<a id="tocsbackupsmaxsize"></a>

```json
1
```

<h2 id="tocS_Cert">Cert</h2>
<!-- backwards compatibility -->
<a id="schemacert"></a>
<a id="schema_Cert"></a>
<a id="tocScert"></a>
<a id="tocscert"></a>

```json
"string"
```

<h2 id="tocS_Certificates">Certificates</h2>
<!-- backwards compatibility -->
<a id="schemacertificates"></a>
<a id="schema_Certificates"></a>
<a id="tocScertificates"></a>
<a id="tocscertificates"></a>

```json
{
  "ClusterCsr": {},
  "HsmCertificate": {},
  "AwsHardwareCertificate": {},
  "ManufacturerHardwareCertificate": {},
  "ClusterCertificate": {}
}
```

Contains one or more certificates or a certificate signing request (CSR).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterCsr|object|false|none|none|
|HsmCertificate|object|false|none|none|
|AwsHardwareCertificate|object|false|none|none|
|ManufacturerHardwareCertificate|object|false|none|none|
|ClusterCertificate|object|false|none|none|

<h2 id="tocS_Hsms">Hsms</h2>
<!-- backwards compatibility -->
<a id="schemahsms"></a>
<a id="schema_Hsms"></a>
<a id="tocShsms"></a>
<a id="tocshsms"></a>

```json
[
  {
    "AvailabilityZone": {},
    "ClusterId": {},
    "SubnetId": {},
    "EniId": {},
    "EniIp": {},
    "HsmId": {},
    "State": {},
    "StateMessage": {}
  }
]
```

<h2 id="tocS_HsmType">HsmType</h2>
<!-- backwards compatibility -->
<a id="schemahsmtype"></a>
<a id="schema_HsmType"></a>
<a id="tocShsmtype"></a>
<a id="tocshsmtype"></a>

```json
"string"
```

<h2 id="tocS_PreCoPassword">PreCoPassword</h2>
<!-- backwards compatibility -->
<a id="schemaprecopassword"></a>
<a id="schema_PreCoPassword"></a>
<a id="tocSprecopassword"></a>
<a id="tocsprecopassword"></a>

```json
"strings"
```

<h2 id="tocS_SecurityGroup">SecurityGroup</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroup"></a>
<a id="schema_SecurityGroup"></a>
<a id="tocSsecuritygroup"></a>
<a id="tocssecuritygroup"></a>

```json
"string"
```

<h2 id="tocS_ClusterState">ClusterState</h2>
<!-- backwards compatibility -->
<a id="schemaclusterstate"></a>
<a id="schema_ClusterState"></a>
<a id="tocSclusterstate"></a>
<a id="tocsclusterstate"></a>

```json
"CREATE_IN_PROGRESS"
```

<h2 id="tocS_StateMessage">StateMessage</h2>
<!-- backwards compatibility -->
<a id="schemastatemessage"></a>
<a id="schema_StateMessage"></a>
<a id="tocSstatemessage"></a>
<a id="tocsstatemessage"></a>

```json
"string"
```

<h2 id="tocS_ExternalSubnetMapping">ExternalSubnetMapping</h2>
<!-- backwards compatibility -->
<a id="schemaexternalsubnetmapping"></a>
<a id="schema_ExternalSubnetMapping"></a>
<a id="tocSexternalsubnetmapping"></a>
<a id="tocsexternalsubnetmapping"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SubnetId](#schemasubnetid)|false|none|none|

<h2 id="tocS_VpcId">VpcId</h2>
<!-- backwards compatibility -->
<a id="schemavpcid"></a>
<a id="schema_VpcId"></a>
<a id="tocSvpcid"></a>
<a id="tocsvpcid"></a>

```json
"string"
```

<h2 id="tocS_Cluster">Cluster</h2>
<!-- backwards compatibility -->
<a id="schemacluster"></a>
<a id="schema_Cluster"></a>
<a id="tocScluster"></a>
<a id="tocscluster"></a>

```json
{
  "BackupPolicy": {},
  "BackupRetentionPolicy": {
    "Type": {},
    "Value": {}
  },
  "ClusterId": {},
  "CreateTimestamp": {},
  "Hsms": {},
  "HsmType": {},
  "PreCoPassword": {},
  "SecurityGroup": {},
  "SourceBackupId": {},
  "State": {},
  "StateMessage": {},
  "SubnetMapping": {
    "property1": "string",
    "property2": "string"
  },
  "VpcId": {},
  "Certificates": {
    "ClusterCsr": {},
    "HsmCertificate": {},
    "AwsHardwareCertificate": {},
    "ManufacturerHardwareCertificate": {},
    "ClusterCertificate": {}
  },
  "TagList": {}
}
```

Contains information about an AWS CloudHSM cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPolicy|object|false|none|none|
|BackupRetentionPolicy|object|false|none|none|
|ClusterId|object|false|none|none|
|CreateTimestamp|object|false|none|none|
|Hsms|object|false|none|none|
|HsmType|object|false|none|none|
|PreCoPassword|object|false|none|none|
|SecurityGroup|object|false|none|none|
|SourceBackupId|object|false|none|none|
|State|object|false|none|none|
|StateMessage|object|false|none|none|
|SubnetMapping|object|false|none|none|
|VpcId|object|false|none|none|
|Certificates|object|false|none|none|
|TagList|object|false|none|none|

<h2 id="tocS_Clusters">Clusters</h2>
<!-- backwards compatibility -->
<a id="schemaclusters"></a>
<a id="schema_Clusters"></a>
<a id="tocSclusters"></a>
<a id="tocsclusters"></a>

```json
[
  {
    "BackupPolicy": {},
    "BackupRetentionPolicy": {
      "Type": {},
      "Value": {}
    },
    "ClusterId": {},
    "CreateTimestamp": {},
    "Hsms": {},
    "HsmType": {},
    "PreCoPassword": {},
    "SecurityGroup": {},
    "SourceBackupId": {},
    "State": {},
    "StateMessage": {},
    "SubnetMapping": {
      "property1": "string",
      "property2": "string"
    },
    "VpcId": {},
    "Certificates": {
      "ClusterCsr": {},
      "HsmCertificate": {},
      "AwsHardwareCertificate": {},
      "ManufacturerHardwareCertificate": {},
      "ClusterCertificate": {}
    },
    "TagList": {}
  }
]
```

<h2 id="tocS_ClustersMaxSize">ClustersMaxSize</h2>
<!-- backwards compatibility -->
<a id="schemaclustersmaxsize"></a>
<a id="schema_ClustersMaxSize"></a>
<a id="tocSclustersmaxsize"></a>
<a id="tocsclustersmaxsize"></a>

```json
1
```

<h2 id="tocS_DestinationBackup">DestinationBackup</h2>
<!-- backwards compatibility -->
<a id="schemadestinationbackup"></a>
<a id="schema_DestinationBackup"></a>
<a id="tocSdestinationbackup"></a>
<a id="tocsdestinationbackup"></a>

```json
{
  "CreateTimestamp": {},
  "SourceRegion": {},
  "SourceBackup": {},
  "SourceCluster": {}
}
```

Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTimestamp|object|false|none|none|
|SourceRegion|object|false|none|none|
|SourceBackup|object|false|none|none|
|SourceCluster|object|false|none|none|

<h2 id="tocS_SubnetIds">SubnetIds</h2>
<!-- backwards compatibility -->
<a id="schemasubnetids"></a>
<a id="schema_SubnetIds"></a>
<a id="tocSsubnetids"></a>
<a id="tocssubnetids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ExternalAz">ExternalAz</h2>
<!-- backwards compatibility -->
<a id="schemaexternalaz"></a>
<a id="schema_ExternalAz"></a>
<a id="tocSexternalaz"></a>
<a id="tocsexternalaz"></a>

```json
"string"
```

<h2 id="tocS_IpAddress">IpAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IpAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
"string"
```

<h2 id="tocS_Hsm">Hsm</h2>
<!-- backwards compatibility -->
<a id="schemahsm"></a>
<a id="schema_Hsm"></a>
<a id="tocShsm"></a>
<a id="tocshsm"></a>

```json
{
  "AvailabilityZone": {},
  "ClusterId": {},
  "SubnetId": {},
  "EniId": {},
  "EniIp": {},
  "HsmId": {},
  "State": {},
  "StateMessage": {}
}
```

Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZone|object|false|none|none|
|ClusterId|object|false|none|none|
|SubnetId|object|false|none|none|
|EniId|object|false|none|none|
|EniIp|object|false|none|none|
|HsmId|object|true|none|none|
|State|object|false|none|none|
|StateMessage|object|false|none|none|

<h2 id="tocS_HsmId">HsmId</h2>
<!-- backwards compatibility -->
<a id="schemahsmid"></a>
<a id="schema_HsmId"></a>
<a id="tocShsmid"></a>
<a id="tocshsmid"></a>

```json
"string"
```

<h2 id="tocS_EniId">EniId</h2>
<!-- backwards compatibility -->
<a id="schemaeniid"></a>
<a id="schema_EniId"></a>
<a id="tocSeniid"></a>
<a id="tocseniid"></a>

```json
"string"
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

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Strings](#schemastrings)|false|none|none|

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"string"
```

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
"string"
```

<h2 id="tocS_Strings">Strings</h2>
<!-- backwards compatibility -->
<a id="schemastrings"></a>
<a id="schema_Strings"></a>
<a id="tocSstrings"></a>
<a id="tocsstrings"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HsmState">HsmState</h2>
<!-- backwards compatibility -->
<a id="schemahsmstate"></a>
<a id="schema_HsmState"></a>
<a id="tocShsmstate"></a>
<a id="tocshsmstate"></a>

```json
"CREATE_IN_PROGRESS"
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

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"string"
```

<h2 id="tocS_MaxSize">MaxSize</h2>
<!-- backwards compatibility -->
<a id="schemamaxsize"></a>
<a id="schema_MaxSize"></a>
<a id="tocSmaxsize"></a>
<a id="tocsmaxsize"></a>

```json
1
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

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Contains a tag. A tag is a key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

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
