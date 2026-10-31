<h1 id="aws-importexport">AWS Import/Export v2010-06-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>AWS Import/Export Service</fullname> AWS Import/Export accelerates transferring large amounts of data between the AWS cloud and portable storage devices that you mail to us. AWS Import/Export transfers data directly onto and off of your storage devices using Amazon's high-speed internal network and bypassing the Internet. For large data sets, AWS Import/Export is often faster than Internet transfer and more cost effective than upgrading your connectivity.

Base URLs:

* <a href="http://importexport.amazonaws.com">http://importexport.amazonaws.com</a> - The general AWS Import/Export multi-region endpoint

* <a href="https://importexport.amazonaws.com">https://importexport.amazonaws.com</a> - The general AWS Import/Export multi-region endpoint

* <a href="http://importexport.cn-north-1.amazonaws.com.cn">http://importexport.cn-north-1.amazonaws.com.cn</a> - The AWS Import/Export endpoint for China (Beijing) and China (Ningxia)

* <a href="https://importexport.cn-north-1.amazonaws.com.cn">https://importexport.cn-north-1.amazonaws.com.cn</a> - The AWS Import/Export endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/importexport/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v2

<h1 id="aws-importexport-default">Default</h1>

## GET_CancelJob

<a id="opIdGET_CancelJob"></a>

> Code samples

```bash
curl 'https://importexport.us-east-1.amazonaws.com/#Operation=CancelJob&Action=CancelJob?JobId=string&Operation=CancelJob&Action=CancelJob&Version=2010-06-01&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Operation=CancelJob&Action=CancelJob`

This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.

<h3 id="getcanceljob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|JobId|query|string|true|none|
|APIVersion|query|string|false|none|
|Operation|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Operation|CancelJob|
|Action|CancelJob|
|Version|2010-06-01|

<h3 id="getcanceljob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelJobOutput](#schemacanceljoboutput)|
|480|480|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|481|481|ExpiredJobIdException|[ExpiredJobIdException](#schemaexpiredjobidexception)|
|482|482|CanceledJobIdException|[CanceledJobIdException](#schemacanceledjobidexception)|
|483|483|UnableToCancelJobIdException|[UnableToCancelJobIdException](#schemaunabletocanceljobidexception)|
|484|484|InvalidAccessKeyIdException|[InvalidAccessKeyIdException](#schemainvalidaccesskeyidexception)|
|485|485|InvalidVersionException|[InvalidVersionException](#schemainvalidversionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CancelJob

<a id="opIdPOST_CancelJob"></a>

> Code samples

```bash
curl 'https://importexport.us-east-1.amazonaws.com/#Operation=CancelJob&Action=CancelJob?Operation=CancelJob&Action=CancelJob&Version=2010-06-01&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"JobId":"string","APIVersion":"string"}'
```

`POST /#Operation=CancelJob&Action=CancelJob`

This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.

> Body parameter

```json
{
  "JobId": "string",
  "APIVersion": "string"
}
```

<h3 id="postcanceljob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Operation|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[CancelJobInput](#schemacanceljobinput)|false|none|
|» JobId|body|[JobId](#schemajobid)|true|A unique identifier which refers to a particular job.|
|» APIVersion|body|[APIVersion](#schemaapiversion)|false|Specifies the version of the client tool.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Operation|CancelJob|
|Action|CancelJob|
|Version|2010-06-01|

<h3 id="postcanceljob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelJobOutput](#schemacanceljoboutput)|
|480|480|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|481|481|ExpiredJobIdException|[ExpiredJobIdException](#schemaexpiredjobidexception)|
|482|482|CanceledJobIdException|[CanceledJobIdException](#schemacanceledjobidexception)|
|483|483|UnableToCancelJobIdException|[UnableToCancelJobIdException](#schemaunabletocanceljobidexception)|
|484|484|InvalidAccessKeyIdException|[InvalidAccessKeyIdException](#schemainvalidaccesskeyidexception)|
|485|485|InvalidVersionException|[InvalidVersionException](#schemainvalidversionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateJob

<a id="opIdGET_CreateJob"></a>

> Code samples

```bash
curl 'https://importexport.us-east-1.amazonaws.com/#Operation=CreateJob&Action=CreateJob?JobType=Import&Manifest=string&ValidateOnly=true&Operation=CreateJob&Action=CreateJob&Version=2010-06-01&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Operation=CreateJob&Action=CreateJob`

This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.

<h3 id="getcreatejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|JobType|query|string|true|none|
|Manifest|query|string|true|none|
|ManifestAddendum|query|string|false|none|
|ValidateOnly|query|boolean|true|none|
|APIVersion|query|string|false|none|
|Operation|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|JobType|Import|
|JobType|Export|
|Operation|CreateJob|
|Action|CreateJob|
|Version|2010-06-01|

<h3 id="getcreatejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateJobOutput](#schemacreatejoboutput)|
|480|480|MissingParameterException|[MissingParameterException](#schemamissingparameterexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidAccessKeyIdException|[InvalidAccessKeyIdException](#schemainvalidaccesskeyidexception)|
|483|483|InvalidAddressException|[InvalidAddressException](#schemainvalidaddressexception)|
|484|484|InvalidManifestFieldException|[InvalidManifestFieldException](#schemainvalidmanifestfieldexception)|
|485|485|MissingManifestFieldException|[MissingManifestFieldException](#schemamissingmanifestfieldexception)|
|486|486|NoSuchBucketException|[NoSuchBucketException](#schemanosuchbucketexception)|
|487|487|MissingCustomsException|[MissingCustomsException](#schemamissingcustomsexception)|
|488|488|InvalidCustomsException|[InvalidCustomsException](#schemainvalidcustomsexception)|
|489|489|InvalidFileSystemException|[InvalidFileSystemException](#schemainvalidfilesystemexception)|
|490|490|MultipleRegionsException|[MultipleRegionsException](#schemamultipleregionsexception)|
|491|491|BucketPermissionException|[BucketPermissionException](#schemabucketpermissionexception)|
|492|492|MalformedManifestException|[MalformedManifestException](#schemamalformedmanifestexception)|
|493|493|CreateJobQuotaExceededException|[CreateJobQuotaExceededException](#schemacreatejobquotaexceededexception)|
|494|494|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|495|495|InvalidVersionException|[InvalidVersionException](#schemainvalidversionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateJob

<a id="opIdPOST_CreateJob"></a>

> Code samples

```bash
curl 'https://importexport.us-east-1.amazonaws.com/#Operation=CreateJob&Action=CreateJob?Operation=CreateJob&Action=CreateJob&Version=2010-06-01&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"JobType":"Import","Manifest":"string","ManifestAddendum":"string","ValidateOnly":true,"APIVersion":"string"}'
```

`POST /#Operation=CreateJob&Action=CreateJob`

This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.

> Body parameter

```json
{
  "JobType": "Import",
  "Manifest": "string",
  "ManifestAddendum": "string",
  "ValidateOnly": true,
  "APIVersion": "string"
}
```

<h3 id="postcreatejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Operation|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[CreateJobInput](#schemacreatejobinput)|false|none|
|» JobType|body|[JobType](#schemajobtype)|true|Specifies whether the job to initiate is an import or export job.|
|» Manifest|body|[Manifest](#schemamanifest)|true|The UTF-8 encoded text of the manifest file.|
|» ManifestAddendum|body|[ManifestAddendum](#schemamanifestaddendum)|false|For internal use only.|
|» ValidateOnly|body|[ValidateOnly](#schemavalidateonly)|true|Validate the manifest and parameter values in the request but do not actually create a job.|
|» APIVersion|body|[APIVersion](#schemaapiversion)|false|Specifies the version of the client tool.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Operation|CreateJob|
|Action|CreateJob|
|Version|2010-06-01|
|» JobType|Import|
|» JobType|Export|

<h3 id="postcreatejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateJobOutput](#schemacreatejoboutput)|
|480|480|MissingParameterException|[MissingParameterException](#schemamissingparameterexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidAccessKeyIdException|[InvalidAccessKeyIdException](#schemainvalidaccesskeyidexception)|
|483|483|InvalidAddressException|[InvalidAddressException](#schemainvalidaddressexception)|
|484|484|InvalidManifestFieldException|[InvalidManifestFieldException](#schemainvalidmanifestfieldexception)|
|485|485|MissingManifestFieldException|[MissingManifestFieldException](#schemamissingmanifestfieldexception)|
|486|486|NoSuchBucketException|[NoSuchBucketException](#schemanosuchbucketexception)|
|487|487|MissingCustomsException|[MissingCustomsException](#schemamissingcustomsexception)|
|488|488|InvalidCustomsException|[InvalidCustomsException](#schemainvalidcustomsexception)|
|489|489|InvalidFileSystemException|[InvalidFileSystemException](#schemainvalidfilesystemexception)|
|490|490|MultipleRegionsException|[MultipleRegionsException](#schemamultipleregionsexception)|
|491|491|BucketPermissionException|[BucketPermissionException](#schemabucketpermissionexception)|
|492|492|MalformedManifestException|[MalformedManifestException](#schemamalformedmanifestexception)|
|493|493|CreateJobQuotaExceededException|[CreateJobQuotaExceededException](#schemacreatejobquotaexceededexception)|
|494|494|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|495|495|InvalidVersionException|[InvalidVersionException](#schemainvalidversionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetShippingLabel

<a id="opIdGET_GetShippingLabel"></a>

> Code samples

```bash
curl 'https://importexport.us-east-1.amazonaws.com/#Operation=GetShippingLabel&Action=GetShippingLabel?jobIds=string&Operation=GetShippingLabel&Action=GetShippingLabel&Version=2010-06-01&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Operation=GetShippingLabel&Action=GetShippingLabel`

This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.

<h3 id="getgetshippinglabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobIds|query|[[GenericString](#schemagenericstring)]|true|none|
|name|query|string|false|none|
|company|query|string|false|none|
|phoneNumber|query|string|false|none|
|country|query|string|false|none|
|stateOrProvince|query|string|false|none|
|city|query|string|false|none|
|postalCode|query|string|false|none|
|street1|query|string|false|none|
|street2|query|string|false|none|
|street3|query|string|false|none|
|APIVersion|query|string|false|none|
|Operation|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Operation|GetShippingLabel|
|Action|GetShippingLabel|
|Version|2010-06-01|

<h3 id="getgetshippinglabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetShippingLabelOutput](#schemagetshippinglabeloutput)|
|480|480|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|481|481|ExpiredJobIdException|[ExpiredJobIdException](#schemaexpiredjobidexception)|
|482|482|CanceledJobIdException|[CanceledJobIdException](#schemacanceledjobidexception)|
|483|483|InvalidAccessKeyIdException|[InvalidAccessKeyIdException](#schemainvalidaccesskeyidexception)|
|484|484|InvalidAddressException|[InvalidAddressException](#schemainvalidaddressexception)|
|485|485|InvalidVersionException|[InvalidVersionException](#schemainvalidversionexception)|
|486|486|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetShippingLabel

<a id="opIdPOST_GetShippingLabel"></a>

> Code samples

```bash
curl 'https://importexport.us-east-1.amazonaws.com/#Operation=GetShippingLabel&Action=GetShippingLabel?Operation=GetShippingLabel&Action=GetShippingLabel&Version=2010-06-01&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"jobIds":["string"],"name":"string","company":"string","phoneNumber":"string","country":"string","stateOrProvince":"string","city":"string","postalCode":"string","street1":"string","street2":"string","street3":"string","APIVersion":"string"}'
```

`POST /#Operation=GetShippingLabel&Action=GetShippingLabel`

This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.

> Body parameter

```json
{
  "jobIds": [
    "string"
  ],
  "name": "string",
  "company": "string",
  "phoneNumber": "string",
  "country": "string",
  "stateOrProvince": "string",
  "city": "string",
  "postalCode": "string",
  "street1": "string",
  "street2": "string",
  "street3": "string",
  "APIVersion": "string"
}
```

<h3 id="postgetshippinglabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Operation|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[GetShippingLabelInput](#schemagetshippinglabelinput)|false|none|
|» jobIds|body|[JobIdList](#schemajobidlist)|true|none|
|» name|body|[name](#schemaname)|false|Specifies the name of the person responsible for shipping this package.|
|» company|body|[company](#schemacompany)|false|Specifies the name of the company that will ship this package.|
|» phoneNumber|body|[phoneNumber](#schemaphonenumber)|false|Specifies the phone number of the person responsible for shipping this package.|
|» country|body|[country](#schemacountry)|false|Specifies the name of your country for the return address.|
|» stateOrProvince|body|[stateOrProvince](#schemastateorprovince)|false|Specifies the name of your state or your province for the return address.|
|» city|body|[city](#schemacity)|false|Specifies the name of your city for the return address.|
|» postalCode|body|[postalCode](#schemapostalcode)|false|Specifies the postal code for the return address.|
|» street1|body|[street1](#schemastreet1)|false|Specifies the first part of the street address for the return address, for example 1234 Main Street.|
|» street2|body|[street2](#schemastreet2)|false|Specifies the optional second part of the street address for the return address, for example Suite 100.|
|» street3|body|[street3](#schemastreet3)|false|Specifies the optional third part of the street address for the return address, for example c/o Jane Doe.|
|» APIVersion|body|[APIVersion](#schemaapiversion)|false|Specifies the version of the client tool.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Operation|GetShippingLabel|
|Action|GetShippingLabel|
|Version|2010-06-01|

<h3 id="postgetshippinglabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetShippingLabelOutput](#schemagetshippinglabeloutput)|
|480|480|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|481|481|ExpiredJobIdException|[ExpiredJobIdException](#schemaexpiredjobidexception)|
|482|482|CanceledJobIdException|[CanceledJobIdException](#schemacanceledjobidexception)|
|483|483|InvalidAccessKeyIdException|[InvalidAccessKeyIdException](#schemainvalidaccesskeyidexception)|
|484|484|InvalidAddressException|[InvalidAddressException](#schemainvalidaddressexception)|
|485|485|InvalidVersionException|[InvalidVersionException](#schemainvalidversionexception)|
|486|486|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetStatus

<a id="opIdGET_GetStatus"></a>

> Code samples

```bash
curl 'https://importexport.us-east-1.amazonaws.com/#Operation=GetStatus&Action=GetStatus?JobId=string&Operation=GetStatus&Action=GetStatus&Version=2010-06-01&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Operation=GetStatus&Action=GetStatus`

This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.

<h3 id="getgetstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|JobId|query|string|true|none|
|APIVersion|query|string|false|none|
|Operation|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Operation|GetStatus|
|Action|GetStatus|
|Version|2010-06-01|

<h3 id="getgetstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStatusOutput](#schemagetstatusoutput)|
|480|480|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|481|481|ExpiredJobIdException|[ExpiredJobIdException](#schemaexpiredjobidexception)|
|482|482|CanceledJobIdException|[CanceledJobIdException](#schemacanceledjobidexception)|
|483|483|InvalidAccessKeyIdException|[InvalidAccessKeyIdException](#schemainvalidaccesskeyidexception)|
|484|484|InvalidVersionException|[InvalidVersionException](#schemainvalidversionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetStatus

<a id="opIdPOST_GetStatus"></a>

> Code samples

```bash
curl 'https://importexport.us-east-1.amazonaws.com/#Operation=GetStatus&Action=GetStatus?Operation=GetStatus&Action=GetStatus&Version=2010-06-01&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"JobId":"string","APIVersion":"string"}'
```

`POST /#Operation=GetStatus&Action=GetStatus`

This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.

> Body parameter

```json
{
  "JobId": "string",
  "APIVersion": "string"
}
```

<h3 id="postgetstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Operation|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[GetStatusInput](#schemagetstatusinput)|false|none|
|» JobId|body|[JobId](#schemajobid)|true|A unique identifier which refers to a particular job.|
|» APIVersion|body|[APIVersion](#schemaapiversion)|false|Specifies the version of the client tool.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Operation|GetStatus|
|Action|GetStatus|
|Version|2010-06-01|

<h3 id="postgetstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStatusOutput](#schemagetstatusoutput)|
|480|480|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|481|481|ExpiredJobIdException|[ExpiredJobIdException](#schemaexpiredjobidexception)|
|482|482|CanceledJobIdException|[CanceledJobIdException](#schemacanceledjobidexception)|
|483|483|InvalidAccessKeyIdException|[InvalidAccessKeyIdException](#schemainvalidaccesskeyidexception)|
|484|484|InvalidVersionException|[InvalidVersionException](#schemainvalidversionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListJobs

<a id="opIdGET_ListJobs"></a>

> Code samples

```bash
curl 'https://importexport.us-east-1.amazonaws.com/#Operation=ListJobs&Action=ListJobs?Operation=ListJobs&Action=ListJobs&Version=2010-06-01&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Operation=ListJobs&Action=ListJobs`

This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.

<h3 id="getlistjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxJobs|query|integer|false|none|
|Marker|query|string|false|none|
|APIVersion|query|string|false|none|
|Operation|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Operation|ListJobs|
|Action|ListJobs|
|Version|2010-06-01|

<h3 id="getlistjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobsOutput](#schemalistjobsoutput)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidAccessKeyIdException|[InvalidAccessKeyIdException](#schemainvalidaccesskeyidexception)|
|482|482|InvalidVersionException|[InvalidVersionException](#schemainvalidversionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListJobs

<a id="opIdPOST_ListJobs"></a>

> Code samples

```bash
curl 'https://importexport.us-east-1.amazonaws.com/#Operation=ListJobs&Action=ListJobs?Operation=ListJobs&Action=ListJobs&Version=2010-06-01&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"MaxJobs":0,"Marker":"string","APIVersion":"string"}'
```

`POST /#Operation=ListJobs&Action=ListJobs`

This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.

> Body parameter

```json
{
  "MaxJobs": 0,
  "Marker": "string",
  "APIVersion": "string"
}
```

<h3 id="postlistjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxJobs|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|Operation|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[ListJobsInput](#schemalistjobsinput)|false|none|
|» MaxJobs|body|[MaxJobs](#schemamaxjobs)|false|Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains &lt;IsTruncated&gt;true&lt;/IsTruncated&gt;. To return the additional jobs, see Marker.|
|» Marker|body|[Marker](#schemamarker)|false|Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs.|
|» APIVersion|body|[APIVersion](#schemaapiversion)|false|Specifies the version of the client tool.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Operation|ListJobs|
|Action|ListJobs|
|Version|2010-06-01|

<h3 id="postlistjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobsOutput](#schemalistjobsoutput)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidAccessKeyIdException|[InvalidAccessKeyIdException](#schemainvalidaccesskeyidexception)|
|482|482|InvalidVersionException|[InvalidVersionException](#schemainvalidversionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateJob

<a id="opIdGET_UpdateJob"></a>

> Code samples

```bash
curl 'https://importexport.us-east-1.amazonaws.com/#Operation=UpdateJob&Action=UpdateJob?JobId=string&Manifest=string&JobType=Import&ValidateOnly=true&Operation=UpdateJob&Action=UpdateJob&Version=2010-06-01&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Operation=UpdateJob&Action=UpdateJob`

You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.

<h3 id="getupdatejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|JobId|query|string|true|none|
|Manifest|query|string|true|none|
|JobType|query|string|true|none|
|ValidateOnly|query|boolean|true|none|
|APIVersion|query|string|false|none|
|Operation|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|JobType|Import|
|JobType|Export|
|Operation|UpdateJob|
|Action|UpdateJob|
|Version|2010-06-01|

<h3 id="getupdatejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateJobOutput](#schemaupdatejoboutput)|
|480|480|MissingParameterException|[MissingParameterException](#schemamissingparameterexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidAccessKeyIdException|[InvalidAccessKeyIdException](#schemainvalidaccesskeyidexception)|
|483|483|InvalidAddressException|[InvalidAddressException](#schemainvalidaddressexception)|
|484|484|InvalidManifestFieldException|[InvalidManifestFieldException](#schemainvalidmanifestfieldexception)|
|485|485|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|486|486|MissingManifestFieldException|[MissingManifestFieldException](#schemamissingmanifestfieldexception)|
|487|487|NoSuchBucketException|[NoSuchBucketException](#schemanosuchbucketexception)|
|488|488|ExpiredJobIdException|[ExpiredJobIdException](#schemaexpiredjobidexception)|
|489|489|CanceledJobIdException|[CanceledJobIdException](#schemacanceledjobidexception)|
|490|490|MissingCustomsException|[MissingCustomsException](#schemamissingcustomsexception)|
|491|491|InvalidCustomsException|[InvalidCustomsException](#schemainvalidcustomsexception)|
|492|492|InvalidFileSystemException|[InvalidFileSystemException](#schemainvalidfilesystemexception)|
|493|493|MultipleRegionsException|[MultipleRegionsException](#schemamultipleregionsexception)|
|494|494|BucketPermissionException|[BucketPermissionException](#schemabucketpermissionexception)|
|495|495|MalformedManifestException|[MalformedManifestException](#schemamalformedmanifestexception)|
|496|496|UnableToUpdateJobIdException|[UnableToUpdateJobIdException](#schemaunabletoupdatejobidexception)|
|497|497|InvalidVersionException|[InvalidVersionException](#schemainvalidversionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateJob

<a id="opIdPOST_UpdateJob"></a>

> Code samples

```bash
curl 'https://importexport.us-east-1.amazonaws.com/#Operation=UpdateJob&Action=UpdateJob?Operation=UpdateJob&Action=UpdateJob&Version=2010-06-01&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"JobId":"string","Manifest":"string","JobType":"Import","ValidateOnly":true,"APIVersion":"string"}'
```

`POST /#Operation=UpdateJob&Action=UpdateJob`

You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.

> Body parameter

```json
{
  "JobId": "string",
  "Manifest": "string",
  "JobType": "Import",
  "ValidateOnly": true,
  "APIVersion": "string"
}
```

<h3 id="postupdatejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Operation|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[UpdateJobInput](#schemaupdatejobinput)|false|none|
|» JobId|body|[JobId](#schemajobid)|true|A unique identifier which refers to a particular job.|
|» Manifest|body|[Manifest](#schemamanifest)|true|The UTF-8 encoded text of the manifest file.|
|» JobType|body|[JobType](#schemajobtype)|true|Specifies whether the job to initiate is an import or export job.|
|» ValidateOnly|body|[ValidateOnly](#schemavalidateonly)|true|Validate the manifest and parameter values in the request but do not actually create a job.|
|» APIVersion|body|[APIVersion](#schemaapiversion)|false|Specifies the version of the client tool.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Operation|UpdateJob|
|Action|UpdateJob|
|Version|2010-06-01|
|» JobType|Import|
|» JobType|Export|

<h3 id="postupdatejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateJobOutput](#schemaupdatejoboutput)|
|480|480|MissingParameterException|[MissingParameterException](#schemamissingparameterexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidAccessKeyIdException|[InvalidAccessKeyIdException](#schemainvalidaccesskeyidexception)|
|483|483|InvalidAddressException|[InvalidAddressException](#schemainvalidaddressexception)|
|484|484|InvalidManifestFieldException|[InvalidManifestFieldException](#schemainvalidmanifestfieldexception)|
|485|485|InvalidJobIdException|[InvalidJobIdException](#schemainvalidjobidexception)|
|486|486|MissingManifestFieldException|[MissingManifestFieldException](#schemamissingmanifestfieldexception)|
|487|487|NoSuchBucketException|[NoSuchBucketException](#schemanosuchbucketexception)|
|488|488|ExpiredJobIdException|[ExpiredJobIdException](#schemaexpiredjobidexception)|
|489|489|CanceledJobIdException|[CanceledJobIdException](#schemacanceledjobidexception)|
|490|490|MissingCustomsException|[MissingCustomsException](#schemamissingcustomsexception)|
|491|491|InvalidCustomsException|[InvalidCustomsException](#schemainvalidcustomsexception)|
|492|492|InvalidFileSystemException|[InvalidFileSystemException](#schemainvalidfilesystemexception)|
|493|493|MultipleRegionsException|[MultipleRegionsException](#schemamultipleregionsexception)|
|494|494|BucketPermissionException|[BucketPermissionException](#schemabucketpermissionexception)|
|495|495|MalformedManifestException|[MalformedManifestException](#schemamalformedmanifestexception)|
|496|496|UnableToUpdateJobIdException|[UnableToUpdateJobIdException](#schemaunabletoupdatejobidexception)|
|497|497|InvalidVersionException|[InvalidVersionException](#schemainvalidversionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelJobOutput">CancelJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemacanceljoboutput"></a>
<a id="schema_CancelJobOutput"></a>
<a id="tocScanceljoboutput"></a>
<a id="tocscanceljoboutput"></a>

```json
{
  "Success": true
}
```

Output structure for the CancelJob operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Success|[Success](#schemasuccess)|false|none|Specifies whether (true) or not (false) AWS Import/Export updated your job.|

<h2 id="tocS_InvalidJobIdException">InvalidJobIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidjobidexception"></a>
<a id="schema_InvalidJobIdException"></a>
<a id="tocSinvalidjobidexception"></a>
<a id="tocsinvalidjobidexception"></a>

```json
{
  "message": "string"
}
```

The JOBID was missing, not found, or not associated with the AWS account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_ExpiredJobIdException">ExpiredJobIdException</h2>
<!-- backwards compatibility -->
<a id="schemaexpiredjobidexception"></a>
<a id="schema_ExpiredJobIdException"></a>
<a id="tocSexpiredjobidexception"></a>
<a id="tocsexpiredjobidexception"></a>

```json
{
  "message": "string"
}
```

Indicates that the specified job has expired out of the system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_CanceledJobIdException">CanceledJobIdException</h2>
<!-- backwards compatibility -->
<a id="schemacanceledjobidexception"></a>
<a id="schema_CanceledJobIdException"></a>
<a id="tocScanceledjobidexception"></a>
<a id="tocscanceledjobidexception"></a>

```json
{
  "message": "string"
}
```

The specified job ID has been canceled and is no longer valid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_UnableToCancelJobIdException">UnableToCancelJobIdException</h2>
<!-- backwards compatibility -->
<a id="schemaunabletocanceljobidexception"></a>
<a id="schema_UnableToCancelJobIdException"></a>
<a id="tocSunabletocanceljobidexception"></a>
<a id="tocsunabletocanceljobidexception"></a>

```json
{
  "message": "string"
}
```

AWS Import/Export cannot cancel the job

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_InvalidAccessKeyIdException">InvalidAccessKeyIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidaccesskeyidexception"></a>
<a id="schema_InvalidAccessKeyIdException"></a>
<a id="tocSinvalidaccesskeyidexception"></a>
<a id="tocsinvalidaccesskeyidexception"></a>

```json
{
  "message": "string"
}
```

The AWS Access Key ID specified in the request did not match the manifest's accessKeyId value. The manifest and the request authentication must use the same AWS Access Key ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_InvalidVersionException">InvalidVersionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidversionexception"></a>
<a id="schema_InvalidVersionException"></a>
<a id="tocSinvalidversionexception"></a>
<a id="tocsinvalidversionexception"></a>

```json
{
  "message": "string"
}
```

The client tool version is invalid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_CreateJobOutput">CreateJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatejoboutput"></a>
<a id="schema_CreateJobOutput"></a>
<a id="tocScreatejoboutput"></a>
<a id="tocscreatejoboutput"></a>

```json
{
  "JobId": "string",
  "JobType": "Import",
  "Signature": "string",
  "SignatureFileContents": "string",
  "WarningMessage": "string",
  "ArtifactList": [
    {
      "Description": "string",
      "URL": "string"
    }
  ]
}
```

Output structure for the CreateJob operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|[JobId](#schemajobid)|false|none|A unique identifier which refers to a particular job.|
|JobType|[JobType](#schemajobtype)|false|none|Specifies whether the job to initiate is an import or export job.|
|Signature|[Signature](#schemasignature)|false|none|An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value.|
|SignatureFileContents|[SignatureFileContents](#schemasignaturefilecontents)|false|none|The actual text of the SIGNATURE file to be written to disk.|
|WarningMessage|[WarningMessage](#schemawarningmessage)|false|none|An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name.|
|ArtifactList|[ArtifactList](#schemaartifactlist)|false|none|A collection of artifacts.|

#### Enumerated Values

|Property|Value|
|---|---|
|JobType|Import|
|JobType|Export|

<h2 id="tocS_MissingParameterException">MissingParameterException</h2>
<!-- backwards compatibility -->
<a id="schemamissingparameterexception"></a>
<a id="schema_MissingParameterException"></a>
<a id="tocSmissingparameterexception"></a>
<a id="tocsmissingparameterexception"></a>

```json
{
  "message": "string"
}
```

One or more required parameters was missing from the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
{
  "message": "string"
}
```

One or more parameters had an invalid value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_InvalidAddressException">InvalidAddressException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidaddressexception"></a>
<a id="schema_InvalidAddressException"></a>
<a id="tocSinvalidaddressexception"></a>
<a id="tocsinvalidaddressexception"></a>

```json
{
  "message": "string"
}
```

The address specified in the manifest is invalid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_InvalidManifestFieldException">InvalidManifestFieldException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidmanifestfieldexception"></a>
<a id="schema_InvalidManifestFieldException"></a>
<a id="tocSinvalidmanifestfieldexception"></a>
<a id="tocsinvalidmanifestfieldexception"></a>

```json
{
  "message": "string"
}
```

One or more manifest fields was invalid. Please correct and resubmit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_MissingManifestFieldException">MissingManifestFieldException</h2>
<!-- backwards compatibility -->
<a id="schemamissingmanifestfieldexception"></a>
<a id="schema_MissingManifestFieldException"></a>
<a id="tocSmissingmanifestfieldexception"></a>
<a id="tocsmissingmanifestfieldexception"></a>

```json
{
  "message": "string"
}
```

One or more required fields were missing from the manifest file. Please correct and resubmit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_NoSuchBucketException">NoSuchBucketException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchbucketexception"></a>
<a id="schema_NoSuchBucketException"></a>
<a id="tocSnosuchbucketexception"></a>
<a id="tocsnosuchbucketexception"></a>

```json
{
  "message": "string"
}
```

The specified bucket does not exist. Create the specified bucket or change the manifest's bucket, exportBucket, or logBucket field to a bucket that the account, as specified by the manifest's Access Key ID, has write permissions to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_MissingCustomsException">MissingCustomsException</h2>
<!-- backwards compatibility -->
<a id="schemamissingcustomsexception"></a>
<a id="schema_MissingCustomsException"></a>
<a id="tocSmissingcustomsexception"></a>
<a id="tocsmissingcustomsexception"></a>

```json
{
  "message": "string"
}
```

One or more required customs parameters was missing from the manifest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_InvalidCustomsException">InvalidCustomsException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcustomsexception"></a>
<a id="schema_InvalidCustomsException"></a>
<a id="tocSinvalidcustomsexception"></a>
<a id="tocsinvalidcustomsexception"></a>

```json
{
  "message": "string"
}
```

One or more customs parameters was invalid. Please correct and resubmit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_InvalidFileSystemException">InvalidFileSystemException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfilesystemexception"></a>
<a id="schema_InvalidFileSystemException"></a>
<a id="tocSinvalidfilesystemexception"></a>
<a id="tocsinvalidfilesystemexception"></a>

```json
{
  "message": "string"
}
```

File system specified in export manifest is invalid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_MultipleRegionsException">MultipleRegionsException</h2>
<!-- backwards compatibility -->
<a id="schemamultipleregionsexception"></a>
<a id="schema_MultipleRegionsException"></a>
<a id="tocSmultipleregionsexception"></a>
<a id="tocsmultipleregionsexception"></a>

```json
{
  "message": "string"
}
```

Your manifest file contained buckets from multiple regions. A job is restricted to buckets from one region. Please correct and resubmit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_BucketPermissionException">BucketPermissionException</h2>
<!-- backwards compatibility -->
<a id="schemabucketpermissionexception"></a>
<a id="schema_BucketPermissionException"></a>
<a id="tocSbucketpermissionexception"></a>
<a id="tocsbucketpermissionexception"></a>

```json
{
  "message": "string"
}
```

The account specified does not have the appropriate bucket permissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_MalformedManifestException">MalformedManifestException</h2>
<!-- backwards compatibility -->
<a id="schemamalformedmanifestexception"></a>
<a id="schema_MalformedManifestException"></a>
<a id="tocSmalformedmanifestexception"></a>
<a id="tocsmalformedmanifestexception"></a>

```json
{
  "message": "string"
}
```

Your manifest is not well-formed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_CreateJobQuotaExceededException">CreateJobQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobquotaexceededexception"></a>
<a id="schema_CreateJobQuotaExceededException"></a>
<a id="tocScreatejobquotaexceededexception"></a>
<a id="tocscreatejobquotaexceededexception"></a>

```json
{
  "message": "string"
}
```

Each account can create only a certain number of jobs per day. If you need to create more than this, please contact awsimportexport@amazon.com to explain your particular use case.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_GetShippingLabelOutput">GetShippingLabelOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetshippinglabeloutput"></a>
<a id="schema_GetShippingLabelOutput"></a>
<a id="tocSgetshippinglabeloutput"></a>
<a id="tocsgetshippinglabeloutput"></a>

```json
{
  "ShippingLabelURL": "string",
  "Warning": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShippingLabelURL|[GenericString](#schemagenericstring)|false|none|none|
|Warning|[GenericString](#schemagenericstring)|false|none|none|

<h2 id="tocS_GenericString">GenericString</h2>
<!-- backwards compatibility -->
<a id="schemagenericstring"></a>
<a id="schema_GenericString"></a>
<a id="tocSgenericstring"></a>
<a id="tocsgenericstring"></a>

```json
"string"
```

<h2 id="tocS_GetStatusOutput">GetStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetstatusoutput"></a>
<a id="schema_GetStatusOutput"></a>
<a id="tocSgetstatusoutput"></a>
<a id="tocsgetstatusoutput"></a>

```json
{
  "JobId": "string",
  "JobType": "Import",
  "LocationCode": "string",
  "LocationMessage": "string",
  "ProgressCode": "string",
  "ProgressMessage": "string",
  "Carrier": "string",
  "TrackingNumber": "string",
  "LogBucket": "string",
  "LogKey": "string",
  "ErrorCount": 0,
  "Signature": "string",
  "SignatureFileContents": "string",
  "CurrentManifest": "string",
  "CreationDate": "1970-01-01T00:00:00Z",
  "ArtifactList": [
    {
      "Description": "string",
      "URL": "string"
    }
  ]
}
```

Output structure for the GetStatus operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|[JobId](#schemajobid)|false|none|A unique identifier which refers to a particular job.|
|JobType|[JobType](#schemajobtype)|false|none|Specifies whether the job to initiate is an import or export job.|
|LocationCode|[LocationCode](#schemalocationcode)|false|none|A token representing the location of the storage device, such as "AtAWS".|
|LocationMessage|[LocationMessage](#schemalocationmessage)|false|none|A more human readable form of the physical location of the storage device.|
|ProgressCode|[ProgressCode](#schemaprogresscode)|false|none|A token representing the state of the job, such as "Started".|
|ProgressMessage|[ProgressMessage](#schemaprogressmessage)|false|none|A more human readable form of the job status.|
|Carrier|[Carrier](#schemacarrier)|false|none|Name of the shipping company. This value is included when the LocationCode is "Returned".|
|TrackingNumber|[TrackingNumber](#schematrackingnumber)|false|none|The shipping tracking number assigned by AWS Import/Export to the storage device when it's returned to you. We return this value when the LocationCode is "Returned".|
|LogBucket|[LogBucket](#schemalogbucket)|false|none|Amazon S3 bucket for user logs.|
|LogKey|[LogKey](#schemalogkey)|false|none|The key where the user logs were stored.|
|ErrorCount|[ErrorCount](#schemaerrorcount)|false|none|Number of errors. We return this value when the ProgressCode is Success or SuccessWithErrors.|
|Signature|[Signature](#schemasignature)|false|none|An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value.|
|SignatureFileContents|[Signature](#schemasignature)|false|none|An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value.|
|CurrentManifest|[CurrentManifest](#schemacurrentmanifest)|false|none|The last manifest submitted, which will be used to process the job.|
|CreationDate|[CreationDate](#schemacreationdate)|false|none|Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z".|
|ArtifactList|[ArtifactList](#schemaartifactlist)|false|none|A collection of artifacts.|

#### Enumerated Values

|Property|Value|
|---|---|
|JobType|Import|
|JobType|Export|

<h2 id="tocS_ListJobsOutput">ListJobsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsoutput"></a>
<a id="schema_ListJobsOutput"></a>
<a id="tocSlistjobsoutput"></a>
<a id="tocslistjobsoutput"></a>

```json
{
  "Jobs": [
    {
      "JobId": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "IsCanceled": true,
      "JobType": "Import"
    }
  ],
  "IsTruncated": true
}
```

Output structure for the ListJobs operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Jobs|[JobsList](#schemajobslist)|false|none|A list container for Jobs returned by the ListJobs operation.|
|IsTruncated|[IsTruncated](#schemaistruncated)|false|none|Indicates whether the list of jobs was truncated. If true, then call ListJobs again using the last JobId element as the marker.|

<h2 id="tocS_UpdateJobOutput">UpdateJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejoboutput"></a>
<a id="schema_UpdateJobOutput"></a>
<a id="tocSupdatejoboutput"></a>
<a id="tocsupdatejoboutput"></a>

```json
{
  "Success": true,
  "WarningMessage": "string",
  "ArtifactList": [
    {
      "Description": "string",
      "URL": "string"
    }
  ]
}
```

Output structure for the UpateJob operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Success|[Success](#schemasuccess)|false|none|Specifies whether (true) or not (false) AWS Import/Export updated your job.|
|WarningMessage|[WarningMessage](#schemawarningmessage)|false|none|An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name.|
|ArtifactList|[ArtifactList](#schemaartifactlist)|false|none|A collection of artifacts.|

<h2 id="tocS_UnableToUpdateJobIdException">UnableToUpdateJobIdException</h2>
<!-- backwards compatibility -->
<a id="schemaunabletoupdatejobidexception"></a>
<a id="schema_UnableToUpdateJobIdException"></a>
<a id="tocSunabletoupdatejobidexception"></a>
<a id="tocsunabletoupdatejobidexception"></a>

```json
{
  "message": "string"
}
```

AWS Import/Export cannot update the job

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|The human-readable description of a particular error.|

<h2 id="tocS_APIVersion">APIVersion</h2>
<!-- backwards compatibility -->
<a id="schemaapiversion"></a>
<a id="schema_APIVersion"></a>
<a id="tocSapiversion"></a>
<a id="tocsapiversion"></a>

```json
"string"
```

Specifies the version of the client tool.

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

The associated description for this object.

<h2 id="tocS_URL">URL</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_URL"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"string"
```

The URL for a given Artifact.

<h2 id="tocS_Artifact">Artifact</h2>
<!-- backwards compatibility -->
<a id="schemaartifact"></a>
<a id="schema_Artifact"></a>
<a id="tocSartifact"></a>
<a id="tocsartifact"></a>

```json
{
  "Description": "string",
  "URL": "string"
}
```

A discrete item that contains the description and URL of an artifact (such as a PDF).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|[Description](#schemadescription)|false|none|The associated description for this object.|
|URL|[URL](#schemaurl)|false|none|The URL for a given Artifact.|

<h2 id="tocS_ArtifactList">ArtifactList</h2>
<!-- backwards compatibility -->
<a id="schemaartifactlist"></a>
<a id="schema_ArtifactList"></a>
<a id="tocSartifactlist"></a>
<a id="tocsartifactlist"></a>

```json
[
  {
    "Description": "string",
    "URL": "string"
  }
]
```

A collection of artifacts.

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

The human-readable description of a particular error.

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"string"
```

A unique identifier which refers to a particular job.

<h2 id="tocS_CancelJobInput">CancelJobInput</h2>
<!-- backwards compatibility -->
<a id="schemacanceljobinput"></a>
<a id="schema_CancelJobInput"></a>
<a id="tocScanceljobinput"></a>
<a id="tocscanceljobinput"></a>

```json
{
  "JobId": "string",
  "APIVersion": "string"
}
```

Input structure for the CancelJob operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|[JobId](#schemajobid)|true|none|A unique identifier which refers to a particular job.|
|APIVersion|[APIVersion](#schemaapiversion)|false|none|Specifies the version of the client tool.|

<h2 id="tocS_Success">Success</h2>
<!-- backwards compatibility -->
<a id="schemasuccess"></a>
<a id="schema_Success"></a>
<a id="tocSsuccess"></a>
<a id="tocssuccess"></a>

```json
true
```

Specifies whether (true) or not (false) AWS Import/Export updated your job.

<h2 id="tocS_Carrier">Carrier</h2>
<!-- backwards compatibility -->
<a id="schemacarrier"></a>
<a id="schema_Carrier"></a>
<a id="tocScarrier"></a>
<a id="tocscarrier"></a>

```json
"string"
```

Name of the shipping company. This value is included when the LocationCode is "Returned".

<h2 id="tocS_JobType">JobType</h2>
<!-- backwards compatibility -->
<a id="schemajobtype"></a>
<a id="schema_JobType"></a>
<a id="tocSjobtype"></a>
<a id="tocsjobtype"></a>

```json
"Import"
```

Specifies whether the job to initiate is an import or export job.

<h2 id="tocS_Manifest">Manifest</h2>
<!-- backwards compatibility -->
<a id="schemamanifest"></a>
<a id="schema_Manifest"></a>
<a id="tocSmanifest"></a>
<a id="tocsmanifest"></a>

```json
"string"
```

The UTF-8 encoded text of the manifest file.

<h2 id="tocS_ManifestAddendum">ManifestAddendum</h2>
<!-- backwards compatibility -->
<a id="schemamanifestaddendum"></a>
<a id="schema_ManifestAddendum"></a>
<a id="tocSmanifestaddendum"></a>
<a id="tocsmanifestaddendum"></a>

```json
"string"
```

For internal use only.

<h2 id="tocS_ValidateOnly">ValidateOnly</h2>
<!-- backwards compatibility -->
<a id="schemavalidateonly"></a>
<a id="schema_ValidateOnly"></a>
<a id="tocSvalidateonly"></a>
<a id="tocsvalidateonly"></a>

```json
true
```

Validate the manifest and parameter values in the request but do not actually create a job.

<h2 id="tocS_CreateJobInput">CreateJobInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobinput"></a>
<a id="schema_CreateJobInput"></a>
<a id="tocScreatejobinput"></a>
<a id="tocscreatejobinput"></a>

```json
{
  "JobType": "Import",
  "Manifest": "string",
  "ManifestAddendum": "string",
  "ValidateOnly": true,
  "APIVersion": "string"
}
```

Input structure for the CreateJob operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobType|[JobType](#schemajobtype)|true|none|Specifies whether the job to initiate is an import or export job.|
|Manifest|[Manifest](#schemamanifest)|true|none|The UTF-8 encoded text of the manifest file.|
|ManifestAddendum|[ManifestAddendum](#schemamanifestaddendum)|false|none|For internal use only.|
|ValidateOnly|[ValidateOnly](#schemavalidateonly)|true|none|Validate the manifest and parameter values in the request but do not actually create a job.|
|APIVersion|[APIVersion](#schemaapiversion)|false|none|Specifies the version of the client tool.|

#### Enumerated Values

|Property|Value|
|---|---|
|JobType|Import|
|JobType|Export|

<h2 id="tocS_Signature">Signature</h2>
<!-- backwards compatibility -->
<a id="schemasignature"></a>
<a id="schema_Signature"></a>
<a id="tocSsignature"></a>
<a id="tocssignature"></a>

```json
"string"
```

An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value.

<h2 id="tocS_SignatureFileContents">SignatureFileContents</h2>
<!-- backwards compatibility -->
<a id="schemasignaturefilecontents"></a>
<a id="schema_SignatureFileContents"></a>
<a id="tocSsignaturefilecontents"></a>
<a id="tocssignaturefilecontents"></a>

```json
"string"
```

The actual text of the SIGNATURE file to be written to disk.

<h2 id="tocS_WarningMessage">WarningMessage</h2>
<!-- backwards compatibility -->
<a id="schemawarningmessage"></a>
<a id="schema_WarningMessage"></a>
<a id="tocSwarningmessage"></a>
<a id="tocswarningmessage"></a>

```json
"string"
```

An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name.

<h2 id="tocS_CreationDate">CreationDate</h2>
<!-- backwards compatibility -->
<a id="schemacreationdate"></a>
<a id="schema_CreationDate"></a>
<a id="tocScreationdate"></a>
<a id="tocscreationdate"></a>

```json
"1970-01-01T00:00:00Z"
```

Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z".

<h2 id="tocS_CurrentManifest">CurrentManifest</h2>
<!-- backwards compatibility -->
<a id="schemacurrentmanifest"></a>
<a id="schema_CurrentManifest"></a>
<a id="tocScurrentmanifest"></a>
<a id="tocscurrentmanifest"></a>

```json
"string"
```

The last manifest submitted, which will be used to process the job.

<h2 id="tocS_ErrorCount">ErrorCount</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcount"></a>
<a id="schema_ErrorCount"></a>
<a id="tocSerrorcount"></a>
<a id="tocserrorcount"></a>

```json
0
```

Number of errors. We return this value when the ProgressCode is Success or SuccessWithErrors.

<h2 id="tocS_JobIdList">JobIdList</h2>
<!-- backwards compatibility -->
<a id="schemajobidlist"></a>
<a id="schema_JobIdList"></a>
<a id="tocSjobidlist"></a>
<a id="tocsjobidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_name">name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

Specifies the name of the person responsible for shipping this package.

<h2 id="tocS_company">company</h2>
<!-- backwards compatibility -->
<a id="schemacompany"></a>
<a id="schema_company"></a>
<a id="tocScompany"></a>
<a id="tocscompany"></a>

```json
"string"
```

Specifies the name of the company that will ship this package.

<h2 id="tocS_phoneNumber">phoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_phoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
"string"
```

Specifies the phone number of the person responsible for shipping this package.

<h2 id="tocS_country">country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
"string"
```

Specifies the name of your country for the return address.

<h2 id="tocS_stateOrProvince">stateOrProvince</h2>
<!-- backwards compatibility -->
<a id="schemastateorprovince"></a>
<a id="schema_stateOrProvince"></a>
<a id="tocSstateorprovince"></a>
<a id="tocsstateorprovince"></a>

```json
"string"
```

Specifies the name of your state or your province for the return address.

<h2 id="tocS_city">city</h2>
<!-- backwards compatibility -->
<a id="schemacity"></a>
<a id="schema_city"></a>
<a id="tocScity"></a>
<a id="tocscity"></a>

```json
"string"
```

Specifies the name of your city for the return address.

<h2 id="tocS_postalCode">postalCode</h2>
<!-- backwards compatibility -->
<a id="schemapostalcode"></a>
<a id="schema_postalCode"></a>
<a id="tocSpostalcode"></a>
<a id="tocspostalcode"></a>

```json
"string"
```

Specifies the postal code for the return address.

<h2 id="tocS_street1">street1</h2>
<!-- backwards compatibility -->
<a id="schemastreet1"></a>
<a id="schema_street1"></a>
<a id="tocSstreet1"></a>
<a id="tocsstreet1"></a>

```json
"string"
```

Specifies the first part of the street address for the return address, for example 1234 Main Street.

<h2 id="tocS_street2">street2</h2>
<!-- backwards compatibility -->
<a id="schemastreet2"></a>
<a id="schema_street2"></a>
<a id="tocSstreet2"></a>
<a id="tocsstreet2"></a>

```json
"string"
```

Specifies the optional second part of the street address for the return address, for example Suite 100.

<h2 id="tocS_street3">street3</h2>
<!-- backwards compatibility -->
<a id="schemastreet3"></a>
<a id="schema_street3"></a>
<a id="tocSstreet3"></a>
<a id="tocsstreet3"></a>

```json
"string"
```

Specifies the optional third part of the street address for the return address, for example c/o Jane Doe.

<h2 id="tocS_GetShippingLabelInput">GetShippingLabelInput</h2>
<!-- backwards compatibility -->
<a id="schemagetshippinglabelinput"></a>
<a id="schema_GetShippingLabelInput"></a>
<a id="tocSgetshippinglabelinput"></a>
<a id="tocsgetshippinglabelinput"></a>

```json
{
  "jobIds": [
    "string"
  ],
  "name": "string",
  "company": "string",
  "phoneNumber": "string",
  "country": "string",
  "stateOrProvince": "string",
  "city": "string",
  "postalCode": "string",
  "street1": "string",
  "street2": "string",
  "street3": "string",
  "APIVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobIds|[JobIdList](#schemajobidlist)|true|none|none|
|name|[name](#schemaname)|false|none|Specifies the name of the person responsible for shipping this package.|
|company|[company](#schemacompany)|false|none|Specifies the name of the company that will ship this package.|
|phoneNumber|[phoneNumber](#schemaphonenumber)|false|none|Specifies the phone number of the person responsible for shipping this package.|
|country|[country](#schemacountry)|false|none|Specifies the name of your country for the return address.|
|stateOrProvince|[stateOrProvince](#schemastateorprovince)|false|none|Specifies the name of your state or your province for the return address.|
|city|[city](#schemacity)|false|none|Specifies the name of your city for the return address.|
|postalCode|[postalCode](#schemapostalcode)|false|none|Specifies the postal code for the return address.|
|street1|[street1](#schemastreet1)|false|none|Specifies the first part of the street address for the return address, for example 1234 Main Street.|
|street2|[street2](#schemastreet2)|false|none|Specifies the optional second part of the street address for the return address, for example Suite 100.|
|street3|[street3](#schemastreet3)|false|none|Specifies the optional third part of the street address for the return address, for example c/o Jane Doe.|
|APIVersion|[APIVersion](#schemaapiversion)|false|none|Specifies the version of the client tool.|

<h2 id="tocS_GetStatusInput">GetStatusInput</h2>
<!-- backwards compatibility -->
<a id="schemagetstatusinput"></a>
<a id="schema_GetStatusInput"></a>
<a id="tocSgetstatusinput"></a>
<a id="tocsgetstatusinput"></a>

```json
{
  "JobId": "string",
  "APIVersion": "string"
}
```

Input structure for the GetStatus operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|[JobId](#schemajobid)|true|none|A unique identifier which refers to a particular job.|
|APIVersion|[APIVersion](#schemaapiversion)|false|none|Specifies the version of the client tool.|

<h2 id="tocS_LocationCode">LocationCode</h2>
<!-- backwards compatibility -->
<a id="schemalocationcode"></a>
<a id="schema_LocationCode"></a>
<a id="tocSlocationcode"></a>
<a id="tocslocationcode"></a>

```json
"string"
```

A token representing the location of the storage device, such as "AtAWS".

<h2 id="tocS_LocationMessage">LocationMessage</h2>
<!-- backwards compatibility -->
<a id="schemalocationmessage"></a>
<a id="schema_LocationMessage"></a>
<a id="tocSlocationmessage"></a>
<a id="tocslocationmessage"></a>

```json
"string"
```

A more human readable form of the physical location of the storage device.

<h2 id="tocS_ProgressCode">ProgressCode</h2>
<!-- backwards compatibility -->
<a id="schemaprogresscode"></a>
<a id="schema_ProgressCode"></a>
<a id="tocSprogresscode"></a>
<a id="tocsprogresscode"></a>

```json
"string"
```

A token representing the state of the job, such as "Started".

<h2 id="tocS_ProgressMessage">ProgressMessage</h2>
<!-- backwards compatibility -->
<a id="schemaprogressmessage"></a>
<a id="schema_ProgressMessage"></a>
<a id="tocSprogressmessage"></a>
<a id="tocsprogressmessage"></a>

```json
"string"
```

A more human readable form of the job status.

<h2 id="tocS_TrackingNumber">TrackingNumber</h2>
<!-- backwards compatibility -->
<a id="schematrackingnumber"></a>
<a id="schema_TrackingNumber"></a>
<a id="tocStrackingnumber"></a>
<a id="tocstrackingnumber"></a>

```json
"string"
```

The shipping tracking number assigned by AWS Import/Export to the storage device when it's returned to you. We return this value when the LocationCode is "Returned".

<h2 id="tocS_LogBucket">LogBucket</h2>
<!-- backwards compatibility -->
<a id="schemalogbucket"></a>
<a id="schema_LogBucket"></a>
<a id="tocSlogbucket"></a>
<a id="tocslogbucket"></a>

```json
"string"
```

Amazon S3 bucket for user logs.

<h2 id="tocS_LogKey">LogKey</h2>
<!-- backwards compatibility -->
<a id="schemalogkey"></a>
<a id="schema_LogKey"></a>
<a id="tocSlogkey"></a>
<a id="tocslogkey"></a>

```json
"string"
```

The key where the user logs were stored.

<h2 id="tocS_IsCanceled">IsCanceled</h2>
<!-- backwards compatibility -->
<a id="schemaiscanceled"></a>
<a id="schema_IsCanceled"></a>
<a id="tocSiscanceled"></a>
<a id="tocsiscanceled"></a>

```json
true
```

Indicates whether the job was canceled.

<h2 id="tocS_IsTruncated">IsTruncated</h2>
<!-- backwards compatibility -->
<a id="schemaistruncated"></a>
<a id="schema_IsTruncated"></a>
<a id="tocSistruncated"></a>
<a id="tocsistruncated"></a>

```json
true
```

Indicates whether the list of jobs was truncated. If true, then call ListJobs again using the last JobId element as the marker.

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "JobId": "string",
  "CreationDate": "1970-01-01T00:00:00Z",
  "IsCanceled": true,
  "JobType": "Import"
}
```

Representation of a job returned by the ListJobs operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|[JobId](#schemajobid)|false|none|A unique identifier which refers to a particular job.|
|CreationDate|[CreationDate](#schemacreationdate)|false|none|Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z".|
|IsCanceled|[IsCanceled](#schemaiscanceled)|false|none|Indicates whether the job was canceled.|
|JobType|[JobType](#schemajobtype)|false|none|Specifies whether the job to initiate is an import or export job.|

#### Enumerated Values

|Property|Value|
|---|---|
|JobType|Import|
|JobType|Export|

<h2 id="tocS_JobsList">JobsList</h2>
<!-- backwards compatibility -->
<a id="schemajobslist"></a>
<a id="schema_JobsList"></a>
<a id="tocSjobslist"></a>
<a id="tocsjobslist"></a>

```json
[
  {
    "JobId": "string",
    "CreationDate": "1970-01-01T00:00:00Z",
    "IsCanceled": true,
    "JobType": "Import"
  }
]
```

A list container for Jobs returned by the ListJobs operation.

<h2 id="tocS_MaxJobs">MaxJobs</h2>
<!-- backwards compatibility -->
<a id="schemamaxjobs"></a>
<a id="schema_MaxJobs"></a>
<a id="tocSmaxjobs"></a>
<a id="tocsmaxjobs"></a>

```json
0
```

Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains &lt;IsTruncated&gt;true&lt;/IsTruncated&gt;. To return the additional jobs, see Marker.

<h2 id="tocS_Marker">Marker</h2>
<!-- backwards compatibility -->
<a id="schemamarker"></a>
<a id="schema_Marker"></a>
<a id="tocSmarker"></a>
<a id="tocsmarker"></a>

```json
"string"
```

Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs.

<h2 id="tocS_ListJobsInput">ListJobsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsinput"></a>
<a id="schema_ListJobsInput"></a>
<a id="tocSlistjobsinput"></a>
<a id="tocslistjobsinput"></a>

```json
{
  "MaxJobs": 0,
  "Marker": "string",
  "APIVersion": "string"
}
```

Input structure for the ListJobs operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxJobs|[MaxJobs](#schemamaxjobs)|false|none|Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains &lt;IsTruncated&gt;true&lt;/IsTruncated&gt;. To return the additional jobs, see Marker.|
|Marker|[Marker](#schemamarker)|false|none|Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs.|
|APIVersion|[APIVersion](#schemaapiversion)|false|none|Specifies the version of the client tool.|

<h2 id="tocS_UpdateJobInput">UpdateJobInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobinput"></a>
<a id="schema_UpdateJobInput"></a>
<a id="tocSupdatejobinput"></a>
<a id="tocsupdatejobinput"></a>

```json
{
  "JobId": "string",
  "Manifest": "string",
  "JobType": "Import",
  "ValidateOnly": true,
  "APIVersion": "string"
}
```

Input structure for the UpateJob operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|[JobId](#schemajobid)|true|none|A unique identifier which refers to a particular job.|
|Manifest|[Manifest](#schemamanifest)|true|none|The UTF-8 encoded text of the manifest file.|
|JobType|[JobType](#schemajobtype)|true|none|Specifies whether the job to initiate is an import or export job.|
|ValidateOnly|[ValidateOnly](#schemavalidateonly)|true|none|Validate the manifest and parameter values in the request but do not actually create a job.|
|APIVersion|[APIVersion](#schemaapiversion)|false|none|Specifies the version of the client tool.|

#### Enumerated Values

|Property|Value|
|---|---|
|JobType|Import|
|JobType|Export|
