<h1 id="orthanc-api">Orthanc API v1.11.3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the full documentation of the [REST API](https://book.orthanc-server.com/users/rest.html) of Orthanc.<p>This reference is automatically generated from the source code of Orthanc. A [shorter cheat sheet](https://book.orthanc-server.com/users/rest-cheatsheet.html) is part of the Orthanc Book.<p>An earlier, manually crafted version from August 2019, is [still available](2019-08-orthanc-openapi.html), but is not up-to-date anymore ([source](https://groups.google.com/g/orthanc-users/c/NUiJTEICSl8/m/xKeqMrbqAAAJ)).

Base URLs:

* <a href="https://demo.orthanc-server.com/">https://demo.orthanc-server.com/</a>

<h1 id="orthanc-api-tracking-changes">Tracking changes</h1>

## List changes

> Code samples

```bash
curl https://example.com/changes \
  -H 'Accept: application/json'
```

`GET /changes`

Whenever Orthanc receives a new DICOM instance, this event is recorded in the so-called _Changes Log_. This enables remote scripts to react to the arrival of new DICOM resources. A typical application is auto-routing, where an external script waits for a new DICOM instance to arrive into Orthanc, then forward this instance to another modality.

<h3 id="list-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|number|false|Limit the number of results|
|since|query|number|false|Show only the resources since the provided index|

> Example responses

> 200 Response

```json
{
  "Changes": [
    {
      "ChangeType": "NewInstance",
      "Date": "20180414T091510",
      "ID": "055bfbaf-2aae936c-82ed5a9a-9267f8b7-416a4000",
      "Path": "/instances/055bfbaf-2aae936c-82ed5a9a-9267f8b7-416a4000",
      "ResourceType": "Instance",
      "Seq": 1
    },
    {
      "ChangeType": "NewSeries",
      "Date": "20180414T091510",
      "ID": "318603c5-03e8cffc-a82b6ee1-3ccd3c1e-18d7e3bb",
      "Path": "/series/318603c5-03e8cffc-a82b6ee1-3ccd3c1e-18d7e3bb",
      "ResourceType": "Series",
      "Seq": 2
    }
  ],
  "Done": false,
  "Last": 2
}
```

<h3 id="list-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="list-changes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Changes|[object]|false|none|The individual changes|
|Done|boolean|false|none|Whether the last reported change is the last of the full history|
|Last|number|false|none|The index of the last reported change, can be used for the `since` argument in subsequent calls to this route|

<aside class="success">
This operation does not require authentication
</aside>

## Clear changes

> Code samples

```bash
curl https://example.com/changes \
  -X DELETE
```

`DELETE /changes`

Clear the full history stored in the changes log

<h3 id="clear-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## List exports

> Code samples

```bash
curl https://example.com/exports \
  -H 'Accept: application/json'
```

`GET /exports`

For medical traceability, Orthanc can be configured to store a log of all the resources that have been exported to remote modalities. In auto-routing scenarios, it is important to prevent this log to grow indefinitely as incoming instances are routed. You can either disable this logging by setting the option `LogExportedResources` to `false` in the configuration file, or periodically clear this log by `DELETE`-ing this URI. This route might be removed in future versions of Orthanc.

<h3 id="list-exports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|number|false|Limit the number of results|
|since|query|number|false|Show only the resources since the provided index|

> Example responses

> 200 Response

```json
null
```

<h3 id="list-exports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Clear exports

> Code samples

```bash
curl https://example.com/exports \
  -X DELETE
```

`DELETE /exports`

Clear the full history stored in the exports log

<h3 id="clear-exports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="orthanc-api-instances">Instances</h1>

## List the available instances

> Code samples

```bash
curl https://example.com/instances \
  -H 'Accept: application/json'
```

`GET /instances`

List the Orthanc identifiers of all the available DICOM instances

<h3 id="list-the-available-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|If present, retrieve detailed information about the individual instances|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|limit|query|number|false|Limit the number of results|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|since|query|number|false|Show only the resources since the provided index|

> Example responses

> 200 Response

```json
[
  "055bfbaf-2aae936c-82ed5a9a-9267f8b7-416a4000",
  "62dc1ec1-9fc2dd9d-aa66eae1-0db608b1-e17f8ce8"
]
```

<h3 id="list-the-available-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Upload DICOM instances

> Code samples

```bash
curl https://example.com/instances \
  -X POST \
  -H 'Content-Type: application/dicom' \
  -H 'Accept: application/json'
```

`POST /instances`

Upload DICOM instances

> Body parameter

```json
null
```

<h3 id="upload-dicom-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "ID": "19816330-cb02e1cf-df3a8fe8-bf510623-ccefe9f5",
  "ParentPatient": "ef9d77db-eb3b2bef-9b31fd3e-bf42ae46-dbdb0cc3",
  "ParentSeries": "3774320f-ccda46d8-69ee8641-9e791cbf-3ecbbcc6",
  "ParentStudy": "66c8e41e-ac3a9029-0b85e42a-8195ee0a-92c2e62e",
  "Path": "/instances/19816330-cb02e1cf-df3a8fe8-bf510623-ccefe9f5",
  "Status": "Success"
}
```

<h3 id="upload-dicom-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="upload-dicom-instances-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|Orthanc identifier of the new instance|
|ParentPatient|string|false|none|Orthanc identifier of the parent patient|
|ParentSeries|string|false|none|Orthanc identifier of the parent series|
|ParentStudy|string|false|none|Orthanc identifier of the parent study|
|Path|string|false|none|Path to the new instance in the REST API|
|Status|string|false|none|Can be `Success`, `AlreadyStored`, `Failure`, or `FilteredOut` (removed by some `NewInstanceFilter`)|

<aside class="success">
This operation does not require authentication
</aside>

## Get information about some instance

> Code samples

```bash
curl https://example.com/instances/string \
  -H 'Accept: application/json'
```

`GET /instances/{id}`

Get detailed information about the DICOM instance whose Orthanc identifier is provided in the URL

<h3 id="get-information-about-some-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the instance of interest|

> Example responses

> 200 Response

```json
{
  "FileSize": 526744,
  "FileUuid": "dc031d9e-ef02-4871-821f-ffe445deb7c2",
  "ID": "d94d9a03-3003b047-a4affc69-322313b2-680530a2",
  "IndexInSeries": 155,
  "MainDicomTags": {
    "AcquisitionNumber": "4",
    "ImageOrientationPatient": "1\\0\\0\\0\\1\\0",
    "ImagePositionPatient": "-249.51171875\\-458.51171875\\314",
    "InstanceCreationDate": "20151217",
    "InstanceCreationTime": "125204.215000",
    "InstanceNumber": "155",
    "SOPInstanceUID": "1.3.6.1.4.1.14519.5.2.1.2193.7172.168997935789297163075628247666"
  },
  "ParentSeries": "52f4cb90-29d1d1a2-2ca34edd-4b8851fc-8cb269f2",
  "Type": "Instance"
}
```

<h3 id="get-information-about-some-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete some instance

> Code samples

```bash
curl https://example.com/instances/string \
  -X DELETE
```

`DELETE /instances/{id}`

Delete the DICOM instance whose Orthanc identifier is provided in the URL

<h3 id="delete-some-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the instance of interest|

<h3 id="delete-some-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Anonymize instance

> Code samples

```bash
curl https://example.com/instances/string/anonymize \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "DicomVersion": "string",
    "Force": true,
    "Keep": [
      "string"
    ],
    "KeepPrivateTags": true,
    "KeepSource": true,
    "PrivateCreator": "string",
    "Remove": [
      "string"
    ],
    "Replace": {},
    "Transcode": "string"
  }'
```

`POST /instances/{id}/anonymize`

Download an anonymized version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#anonymization-of-a-single-instance

> Body parameter

```json
{
  "DicomVersion": "string",
  "Force": true,
  "Keep": [
    "string"
  ],
  "KeepPrivateTags": true,
  "KeepSource": true,
  "PrivateCreator": "string",
  "Remove": [
    "string"
  ],
  "Replace": {},
  "Transcode": "string"
}
```

<h3 id="anonymize-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the instance of interest|
|body|body|object|false|none|
|» DicomVersion|body|string|false|Version of the DICOM standard to be used for anonymization. Check out configuration option `DeidentifyLogsDicomVersion` for possible values.|
|» Force|body|boolean|false|Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world|
|» Keep|body|[string]|false|List of DICOM tags whose value must not be destroyed by the anonymization. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» KeepPrivateTags|body|boolean|false|Keep the private tags from the DICOM instances (defaults to `false`)|
|» KeepSource|body|boolean|false|If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.|
|» PrivateCreator|body|string|false|The private creator to be used for private tags in `Replace`|
|» Remove|body|[string]|false|List of additional tags to be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Replace|body|object|false|Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Transcode|body|string|false|Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

<h3 id="anonymize-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List attachments

> Code samples

```bash
curl https://example.com/instances/string/attachments \
  -H 'Accept: application/json'
```

`GET /instances/{id}/attachments`

Get the list of attachments that are associated with the given instance

<h3 id="list-attachments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|string|false|If present, retrieve the attachments list and their numerical ids|
|id|path|string|true|Orthanc identifier of the instance of interest|

> Example responses

> 200 Response

```json
[
  "dicom",
  "dicom-as-json"
]
```

<h3 id="list-attachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set attachment

> Code samples

```bash
curl https://example.com/instances/string/attachments/string \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json'
```

`PUT /instances/{id}/attachments/{name}`

Attach a file to the given DICOM instance. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).

> Body parameter

```json
null
```

<h3 id="set-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the attachment, if this is not the first time this attachment is set.|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="set-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete attachment

> Code samples

```bash
curl https://example.com/instances/string/attachments/string \
  -X DELETE
```

`DELETE /instances/{id}/attachments/{name}`

Delete an attachment associated with the given DICOM instance. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).

<h3 id="delete-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the attachment, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="delete-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Compress attachment

> Code samples

```bash
curl https://example.com/instances/string/attachments/string/compress \
  -X POST
```

`POST /instances/{id}/attachments/{name}/compress`

Change the compression scheme that is used to store an attachment.

<h3 id="compress-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="compress-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get attachment (no decompression)

> Code samples

```bash
curl https://example.com/instances/string/attachments/string/compressed-data
```

`GET /instances/{id}/attachments/{name}/compressed-data`

Get the (binary) content of one attachment associated with the given instance. The attachment will not be decompressed if `StorageCompression` is `true`.

<h3 id="get-attachment-no-decompression-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the metadata, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-attachment-no-decompression-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get MD5 of attachment on disk

> Code samples

```bash
curl https://example.com/instances/string/attachments/string/compressed-md5
```

`GET /instances/{id}/attachments/{name}/compressed-md5`

Get the MD5 hash of one attachment associated with the given instance, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.

<h3 id="get-md5-of-attachment-on-disk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-md5-of-attachment-on-disk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get size of attachment on disk

> Code samples

```bash
curl https://example.com/instances/string/attachments/string/compressed-size
```

`GET /instances/{id}/attachments/{name}/compressed-size`

Get the size of one attachment associated with the given instance, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.

<h3 id="get-size-of-attachment-on-disk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-size-of-attachment-on-disk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get attachment

> Code samples

```bash
curl https://example.com/instances/string/attachments/string/data
```

`GET /instances/{id}/attachments/{name}/data`

Get the (binary) content of one attachment associated with the given instance

<h3 id="get-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the metadata, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get info about the attachment

> Code samples

```bash
curl https://example.com/instances/string/attachments/string/info \
  -H 'Accept: application/json'
```

`GET /instances/{id}/attachments/{name}/info`

Get all the information about the attachment associated with the given instance

<h3 id="get-info-about-the-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

> Example responses

> 200 Response

```json
{
  "CompressedMD5": "26f3fad6ca0c355f02d57c7fa6770248",
  "CompressedSize": 526970,
  "ContentType": 1,
  "UncompressedMD5": "26f3fad6ca0c355f02d57c7fa6770248",
  "UncompressedSize": 526970,
  "Uuid": "b7c99eb7-229f-464e-8f46-6878c8e79e5c"
}
```

<h3 id="get-info-about-the-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Is attachment compressed?

> Code samples

```bash
curl https://example.com/instances/string/attachments/string/is-compressed
```

`GET /instances/{id}/attachments/{name}/is-compressed`

Test whether the attachment has been stored as a compressed file on the disk.

<h3 id="is-attachment-compressed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="is-attachment-compressed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get MD5 of attachment

> Code samples

```bash
curl https://example.com/instances/string/attachments/string/md5
```

`GET /instances/{id}/attachments/{name}/md5`

Get the MD5 hash of one attachment associated with the given instance

<h3 id="get-md5-of-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-md5-of-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get size of attachment

> Code samples

```bash
curl https://example.com/instances/string/attachments/string/size
```

`GET /instances/{id}/attachments/{name}/size`

Get the size of one attachment associated with the given instance

<h3 id="get-size-of-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-size-of-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Uncompress attachment

> Code samples

```bash
curl https://example.com/instances/string/attachments/string/uncompress \
  -X POST
```

`POST /instances/{id}/attachments/{name}/uncompress`

Change the compression scheme that is used to store an attachment.

<h3 id="uncompress-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="uncompress-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Verify attachment

> Code samples

```bash
curl https://example.com/instances/string/attachments/string/verify-md5 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /instances/{id}/attachments/{name}/verify-md5`

Verify that the attachment is not corrupted, by validating its MD5 hash

<h3 id="verify-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

> Example responses

> 200 Response

```json
null
```

<h3 id="verify-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get raw tag

> Code samples

```bash
curl 'https://example.com/instances/string/content?...=string'
```

`GET /instances/{id}/content`

Get the raw content of one DICOM tag in the hierarchy of DICOM dataset

<h3 id="get-raw-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|...|query|string|true|Path to the DICOM tag. This is the interleaving of one DICOM tag, possibly followed by an index for sequences. Sequences are accessible as, for instance, `/0008-1140/1/0008-1150`|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

<h3 id="get-raw-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Write DICOM onto filesystem

> Code samples

```bash
curl https://example.com/instances/string/export \
  -X POST \
  -H 'Content-Type: text/plain'
```

`POST /instances/{id}/export`

Write the DICOM file onto the filesystem where Orthanc is running

> Body parameter

```json
null
```

<h3 id="write-dicom-onto-filesystem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|
|body|body|object|false|none|

<h3 id="write-dicom-onto-filesystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Download DICOM

> Code samples

```bash
curl https://example.com/instances/string/file \
  -H 'Accept: application/dicom+json'
```

`GET /instances/{id}/file`

Download one DICOM instance

<h3 id="download-dicom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|false|This HTTP header can be set to retrieve the DICOM instance in DICOMweb format|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

> Example responses

> 200 Response

```json
null
```

<h3 id="download-dicom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List available frames

> Code samples

```bash
curl https://example.com/instances/string/frames \
  -H 'Accept: application/json'
```

`GET /instances/{id}/frames`

List the frames that are available in the DICOM instance of interest

<h3 id="list-available-frames-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="list-available-frames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Decode a frame (int16)

> Code samples

```bash
curl https://example.com/instances/string/frames/0/image-int16
```

`GET /instances/{id}/frames/{frame}/image-int16`

Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.

<h3 id="decode-a-frame-int16-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quality|query|number|false|Quality for JPEG images (between 1 and 100, defaults to 90)|
|returnUnsupportedImage|query|boolean|false|Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)|
|Accept|header|string|false|Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`|
|frame|path|number|true|Index of the frame (starts at `0`)|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

<h3 id="decode-a-frame-int16-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Decode a frame (uint16)

> Code samples

```bash
curl https://example.com/instances/string/frames/0/image-uint16
```

`GET /instances/{id}/frames/{frame}/image-uint16`

Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.

<h3 id="decode-a-frame-uint16-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quality|query|number|false|Quality for JPEG images (between 1 and 100, defaults to 90)|
|returnUnsupportedImage|query|boolean|false|Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)|
|Accept|header|string|false|Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`|
|frame|path|number|true|Index of the frame (starts at `0`)|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

<h3 id="decode-a-frame-uint16-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Decode a frame (uint8)

> Code samples

```bash
curl https://example.com/instances/string/frames/0/image-uint8
```

`GET /instances/{id}/frames/{frame}/image-uint8`

Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.

<h3 id="decode-a-frame-uint8-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quality|query|number|false|Quality for JPEG images (between 1 and 100, defaults to 90)|
|returnUnsupportedImage|query|boolean|false|Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)|
|Accept|header|string|false|Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`|
|frame|path|number|true|Index of the frame (starts at `0`)|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

<h3 id="decode-a-frame-uint8-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Decode frame for Matlab

> Code samples

```bash
curl https://example.com/instances/string/frames/0/matlab
```

`GET /instances/{id}/frames/{frame}/matlab`

Decode one frame of interest from the given DICOM instance, and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html

<h3 id="decode-frame-for-matlab-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|frame|path|number|true|Index of the frame (starts at `0`)|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

<h3 id="decode-frame-for-matlab-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Decode frame for numpy

> Code samples

```bash
curl https://example.com/instances/string/frames/0/numpy
```

`GET /instances/{id}/frames/{frame}/numpy`

Decode one frame of interest from the given DICOM instance, for use with numpy in Python. The numpy array has 3 dimensions: (height, width, color channel).

<h3 id="decode-frame-for-numpy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|compress|query|boolean|false|Compress the file as `.npz`|
|rescale|query|boolean|false|On grayscale images, apply the rescaling and return floating-point values|
|frame|path|number|true|Index of the frame (starts at `0`)|
|id|path|string|true|Orthanc identifier of the DICOM resource of interest|

<h3 id="decode-frame-for-numpy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Decode a frame (preview)

> Code samples

```bash
curl https://example.com/instances/string/frames/0/preview
```

`GET /instances/{id}/frames/{frame}/preview`

Decode one frame of interest from the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.

<h3 id="decode-a-frame-preview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quality|query|number|false|Quality for JPEG images (between 1 and 100, defaults to 90)|
|returnUnsupportedImage|query|boolean|false|Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)|
|Accept|header|string|false|Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`|
|frame|path|number|true|Index of the frame (starts at `0`)|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

<h3 id="decode-a-frame-preview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Access raw frame

> Code samples

```bash
curl https://example.com/instances/string/frames/0/raw
```

`GET /instances/{id}/frames/{frame}/raw`

Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes.

<h3 id="access-raw-frame-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|frame|path|number|true|Index of the frame (starts at `0`)|
|id|path|string|true|Orthanc identifier of the instance of interest|

<h3 id="access-raw-frame-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Access raw frame (compressed)

> Code samples

```bash
curl https://example.com/instances/string/frames/0/raw.gz
```

`GET /instances/{id}/frames/{frame}/raw.gz`

Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes. The image is compressed using gzip

<h3 id="access-raw-frame-compressed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|frame|path|number|true|Index of the frame (starts at `0`)|
|id|path|string|true|Orthanc identifier of the instance of interest|

<h3 id="access-raw-frame-compressed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Render a frame

> Code samples

```bash
curl https://example.com/instances/string/frames/0/rendered
```

`GET /instances/{id}/frames/{frame}/rendered`

Render one frame of interest from the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.

<h3 id="render-a-frame-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|height|query|number|false|Height of the resized image|
|quality|query|number|false|Quality for JPEG images (between 1 and 100, defaults to 90)|
|returnUnsupportedImage|query|boolean|false|Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)|
|smooth|query|boolean|false|Whether to smooth image on resize|
|width|query|number|false|Width of the resized image|
|window-center|query|number|false|Windowing center|
|window-width|query|number|false|Windowing width|
|Accept|header|string|false|Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`|
|frame|path|number|true|Index of the frame (starts at `0`)|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

<h3 id="render-a-frame-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get DICOM meta-header

> Code samples

```bash
curl https://example.com/instances/string/header \
  -H 'Accept: application/json'
```

`GET /instances/{id}/header`

Get the DICOM tags in the meta-header of the DICOM instance. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.

<h3 id="get-dicom-meta-header-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

> Example responses

> 200 Response

```json
{
  "0002,0000": {
    "Name": "FileMetaInformationGroupLength",
    "Type": "String",
    "Value": "202"
  },
  "0002,0002": {
    "Name": "MediaStorageSOPClassUID",
    "Type": "String",
    "Value": "1.2.840.10008.5.1.4.1.1.2"
  },
  "0002,0003": {
    "Name": "MediaStorageSOPInstanceUID",
    "Type": "String",
    "Value": "1.3.12.2.1107.5.1.4.54693.30000006100507010800000005269"
  },
  "0002,0010": {
    "Name": "TransferSyntaxUID",
    "Type": "String",
    "Value": "1.2.840.10008.1.2.1"
  },
  "0002,0012": {
    "Name": "ImplementationClassUID",
    "Type": "String",
    "Value": "1.3.6.1.4.1.19291.2.1"
  },
  "0002,0013": {
    "Name": "ImplementationVersionName",
    "Type": "String",
    "Value": "OSIRIX001"
  },
  "0002,0016": {
    "Name": "SourceApplicationEntityTitle",
    "Type": "String",
    "Value": "OSIRIX"
  }
}
```

<h3 id="get-dicom-meta-header-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Decode an image (int16)

> Code samples

```bash
curl https://example.com/instances/string/image-int16
```

`GET /instances/{id}/image-int16`

Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.

<h3 id="decode-an-image-int16-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quality|query|number|false|Quality for JPEG images (between 1 and 100, defaults to 90)|
|returnUnsupportedImage|query|boolean|false|Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)|
|Accept|header|string|false|Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

<h3 id="decode-an-image-int16-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Decode an image (uint16)

> Code samples

```bash
curl https://example.com/instances/string/image-uint16
```

`GET /instances/{id}/image-uint16`

Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.

<h3 id="decode-an-image-uint16-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quality|query|number|false|Quality for JPEG images (between 1 and 100, defaults to 90)|
|returnUnsupportedImage|query|boolean|false|Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)|
|Accept|header|string|false|Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

<h3 id="decode-an-image-uint16-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Decode an image (uint8)

> Code samples

```bash
curl https://example.com/instances/string/image-uint8
```

`GET /instances/{id}/image-uint8`

Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.

<h3 id="decode-an-image-uint8-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quality|query|number|false|Quality for JPEG images (between 1 and 100, defaults to 90)|
|returnUnsupportedImage|query|boolean|false|Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)|
|Accept|header|string|false|Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

<h3 id="decode-an-image-uint8-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Decode frame for Matlab

> Code samples

```bash
curl https://example.com/instances/string/matlab
```

`GET /instances/{id}/matlab`

Decode the first frame of the given DICOM instance., and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html

<h3 id="decode-frame-for-matlab-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

<h3 id="decode-frame-for-matlab-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List metadata

> Code samples

```bash
curl https://example.com/instances/string/metadata \
  -H 'Accept: application/json'
```

`GET /instances/{id}/metadata`

Get the list of metadata that are associated with the given instance

<h3 id="list-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|If present, also retrieve the value of the individual metadata|
|id|path|string|true|Orthanc identifier of the instance of interest|

> Example responses

> 200 Response

```json
[
  "IndexInSeries",
  "ReceptionDate",
  "RemoteAET",
  "Origin",
  "TransferSyntax",
  "SopClassUid",
  "RemoteIP",
  "HttpUsername"
]
```

<h3 id="list-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get metadata

> Code samples

```bash
curl https://example.com/instances/string/metadata/string
```

`GET /instances/{id}/metadata/{name}`

Get the value of a metadata that is associated with the given instance

<h3 id="get-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the metadata, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the metadata, or its index (cf. `UserMetadata` configuration option)|

<h3 id="get-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the metadata, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Set metadata

> Code samples

```bash
curl https://example.com/instances/string/metadata/string \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /instances/{id}/metadata/{name}`

Set the value of some metadata in the given DICOM instance. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).

> Body parameter

```json
null
```

<h3 id="set-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the metadata, if this is not the first time this metadata is set.|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the metadata, or its index (cf. `UserMetadata` configuration option)|
|body|body|object|false|none|

<h3 id="set-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete metadata

> Code samples

```bash
curl https://example.com/instances/string/metadata/string \
  -X DELETE
```

`DELETE /instances/{id}/metadata/{name}`

Delete some metadata associated with the given DICOM instance. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).

<h3 id="delete-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the metadata, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the metadata, or its index (cf. `UserMetadata` configuration option)|

<h3 id="delete-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Modify instance

> Code samples

```bash
curl https://example.com/instances/string/modify \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "Force": true,
    "Keep": [
      "string"
    ],
    "KeepSource": true,
    "PrivateCreator": "string",
    "Remove": [
      "string"
    ],
    "RemovePrivateTags": true,
    "Replace": {},
    "Transcode": "string"
  }'
```

`POST /instances/{id}/modify`

Download a modified version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#modification-of-a-single-instance

> Body parameter

```json
{
  "Force": true,
  "Keep": [
    "string"
  ],
  "KeepSource": true,
  "PrivateCreator": "string",
  "Remove": [
    "string"
  ],
  "RemovePrivateTags": true,
  "Replace": {},
  "Transcode": "string"
}
```

<h3 id="modify-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the instance of interest|
|body|body|object|false|none|
|» Force|body|boolean|false|Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world|
|» Keep|body|[string]|false|Keep the original value of the specified tags, to be chosen among the `StudyInstanceUID`, `SeriesInstanceUID` and `SOPInstanceUID` tags. Avoid this feature as much as possible, as this breaks the DICOM model of the real world.|
|» KeepSource|body|boolean|false|If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.|
|» PrivateCreator|body|string|false|The private creator to be used for private tags in `Replace`|
|» Remove|body|[string]|false|List of tags that must be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» RemovePrivateTags|body|boolean|false|Remove the private tags from the DICOM instances (defaults to `false`)|
|» Replace|body|object|false|Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Transcode|body|string|false|Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

<h3 id="modify-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get instance module

> Code samples

```bash
curl https://example.com/instances/string/module \
  -H 'Accept: application/json'
```

`GET /instances/{id}/module`

Get the instance module of the DICOM instance whose Orthanc identifier is provided in the URL

<h3 id="get-instance-module-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignore-length|query|[string]|false|Also include the DICOM tags that are provided in this list, even if their associated value is long|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Orthanc identifier of the instance of interest|

> Example responses

> 200 Response

```json
{
  "0008,0005": {
    "Name": "SpecificCharacterSet",
    "Type": "String",
    "Value": "ISO_IR 192"
  },
  "0008,0012": {
    "Name": "InstanceCreationDate",
    "Type": "String",
    "Value": "20151217"
  },
  "0008,0013": {
    "Name": "InstanceCreationTime",
    "Type": "String",
    "Value": "125204.215000"
  },
  "0008,0016": {
    "Name": "SOPClassUID",
    "Type": "String",
    "Value": "1.2.840.10008.5.1.4.1.1.2"
  },
  "0008,0018": {
    "Name": "SOPInstanceUID",
    "Type": "String",
    "Value": "1.3.6.1.4.1.14519.5.2.1.2193.7172.168997935789297163075628247666"
  },
  "0020,0013": {
    "Name": "InstanceNumber",
    "Type": "String",
    "Value": "155"
  },
  "0028,0303": {
    "Name": "LongitudinalTemporalInformationModified",
    "Type": "String",
    "Value": "MODIFIED"
  }
}
```

<h3 id="get-instance-module-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Decode instance for numpy

> Code samples

```bash
curl https://example.com/instances/string/numpy
```

`GET /instances/{id}/numpy`

Decode the given DICOM instance, for use with numpy in Python. The numpy array has 4 dimensions: (frame, height, width, color channel).

<h3 id="decode-instance-for-numpy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|compress|query|boolean|false|Compress the file as `.npz`|
|rescale|query|boolean|false|On grayscale images, apply the rescaling and return floating-point values|
|id|path|string|true|Orthanc identifier of the DICOM resource of interest|

<h3 id="decode-instance-for-numpy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get parent patient

> Code samples

```bash
curl https://example.com/instances/string/patient \
  -H 'Accept: application/json'
```

`GET /instances/{id}/patient`

Get detailed information about the parent patient of the DICOM instance whose Orthanc identifier is provided in the URL

<h3 id="get-parent-patient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the instance of interest|

> Example responses

> 200 Response

```json
{
  "ID": "65ce8003-696b2eb6-03adeee7-6561ce8e-3e03f13a",
  "IsStable": true,
  "LastUpdate": "20200803T131236",
  "MainDicomTags": {
    "PatientBirthDate": "",
    "PatientID": "HN_P001",
    "PatientName": "HN_P001",
    "PatientSex": "M"
  },
  "Studies": [
    "1c379a23-9fd28bba-02b60e5b-850ff34e-4349f09b"
  ],
  "Type": "Patient"
}
```

<h3 id="get-parent-patient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get embedded PDF

> Code samples

```bash
curl https://example.com/instances/string/pdf
```

`GET /instances/{id}/pdf`

Get the PDF file that is embedded in one DICOM instance. If the DICOM instance doesn't contain the `EncapsulatedDocument` tag or if the `MIMETypeOfEncapsulatedDocument` tag doesn't correspond to the PDF type, a `404` HTTP error is raised.

<h3 id="get-embedded-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the instance interest|

<h3 id="get-embedded-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Decode an image (preview)

> Code samples

```bash
curl https://example.com/instances/string/preview
```

`GET /instances/{id}/preview`

Decode the first frame of the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.

<h3 id="decode-an-image-preview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quality|query|number|false|Quality for JPEG images (between 1 and 100, defaults to 90)|
|returnUnsupportedImage|query|boolean|false|Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)|
|Accept|header|string|false|Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

<h3 id="decode-an-image-preview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Reconstruct tags &amp; optionally files of instance

> Code samples

```bash
curl https://example.com/instances/string/reconstruct \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "ReconstructFiles": true
  }'
```

`POST /instances/{id}/reconstruct`

Reconstruct the main DICOM tags in DB of the instance whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.

> Body parameter

```json
{
  "ReconstructFiles": true
}
```

<h3 id="reconstruct-tags-optionally-files-of-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the instance of interest|
|body|body|object|false|none|
|» ReconstructFiles|body|boolean|false|Also reconstruct the files of the resources (e.g: apply IngestTranscoding, StorageCompression). 'false' by default. (New in Orthanc 1.11.0)|

<h3 id="reconstruct-tags-optionally-files-of-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Render an image

> Code samples

```bash
curl https://example.com/instances/string/rendered
```

`GET /instances/{id}/rendered`

Render the first frame of the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.

<h3 id="render-an-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|height|query|number|false|Height of the resized image|
|quality|query|number|false|Quality for JPEG images (between 1 and 100, defaults to 90)|
|returnUnsupportedImage|query|boolean|false|Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)|
|smooth|query|boolean|false|Whether to smooth image on resize|
|width|query|number|false|Width of the resized image|
|window-center|query|number|false|Windowing center|
|window-width|query|number|false|Windowing width|
|Accept|header|string|false|Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

<h3 id="render-an-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get parent series

> Code samples

```bash
curl https://example.com/instances/string/series \
  -H 'Accept: application/json'
```

`GET /instances/{id}/series`

Get detailed information about the parent series of the DICOM instance whose Orthanc identifier is provided in the URL

<h3 id="get-parent-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the instance of interest|

> Example responses

> 200 Response

```json
{
  "ExpectedNumberOfInstances": null,
  "ID": "52f4cb90-29d1d1a2-2ca34edd-4b8851fc-8cb269f2",
  "Instances": [
    "ccc7cee2-81566098-5531d590-57b3c148-1787d177",
    "af464afa-bf0c7970-02a3c666-337a8df8-1d955e27",
    "42616941-88cbd2a7-f30ceecb-3f53b658-c641372c",
    "1470f579-11b80cb9-ecf22279-041175d9-d8f3c3ef",
    "373622cf-43a0259b-ebf55c2a-02e5ef32-1a3115f0",
    "72b68848-9729ad79-e8762db4-50d97dd3-f3591322",
    "73e2f25f-aa47b7ba-5d1c6e7b-91b98261-a195316e",
    "c22831de-6ddaa06c-1f877da5-400a8f03-83668321",
    "0c322d30-98af6f31-0bd59c19-99e07f68-317aeb3b",
    "dd69d888-f3065dac-a47c947c-1aed47c8-fc181d11",
    "..."
  ],
  "IsStable": true,
  "LastUpdate": "20200803T131236",
  "MainDicomTags": {
    "BodyPartExamined": "CHEST",
    "ImageOrientationPatient": "1\\0\\0\\0\\1\\0",
    "Manufacturer": "SIEMENS",
    "Modality": "CT",
    "SeriesDate": "20091022",
    "SeriesDescription": "HEAD/NECK  2.0  B30s",
    "SeriesInstanceUID": "1.3.6.1.4.1.14519.5.2.1.2193.7172.215111709746721743805035350686",
    "SeriesNumber": "4",
    "SeriesTime": "173151.203000"
  },
  "ParentStudy": "1c379a23-9fd28bba-02b60e5b-850ff34e-4349f09b",
  "Status": "Unknown",
  "Type": "Series"
}
```

<h3 id="get-parent-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get human-readable tags

> Code samples

```bash
curl https://example.com/instances/string/simplified-tags \
  -H 'Accept: application/json'
```

`GET /instances/{id}/simplified-tags`

Get the DICOM tags in human-readable format (same as the `/instances/{id}/tags?simplify` route)

<h3 id="get-human-readable-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignore-length|query|[string]|false|Also include the DICOM tags that are provided in this list, even if their associated value is long|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

> Example responses

> 200 Response

```json
{
  "AccessionNumber": "0",
  "AcquisitionDate": "20061005",
  "AcquisitionNumber": "3",
  "AcquisitionTime": "101812.967223",
  "BitsAllocated": "16",
  "BitsStored": "12",
  "BodyPartExamined": "EXTREMITY",
  "Columns": "512",
  "ContentDate": "20061005",
  "ContentTime": "101812.967223",
  "{...}": "..."
}
```

<h3 id="get-human-readable-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get instance statistics

> Code samples

```bash
curl https://example.com/instances/string/statistics \
  -H 'Accept: application/json'
```

`GET /instances/{id}/statistics`

Get statistics about the given instance

<h3 id="get-instance-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the instance of interest|

> Example responses

> 200 Response

```json
{
  "DicomDiskSize": "526744",
  "DicomDiskSizeMB": 0,
  "DicomUncompressedSize": "526744",
  "DicomUncompressedSizeMB": 0,
  "DiskSize": "539420",
  "DiskSizeMB": 0,
  "UncompressedSize": "539420",
  "UncompressedSizeMB": 0
}
```

<h3 id="get-instance-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-instance-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DicomDiskSize|string|false|none|Size on the disk of the DICOM instances associated with the instance, expressed in bytes|
|DicomDiskSizeMB|number|false|none|Size on the disk of the DICOM instances associated with the instance, expressed in megabytes (MB)|
|DicomUncompressedSize|string|false|none|Size on the disk of the uncompressed DICOM instances associated with the instance, expressed in bytes|
|DicomUncompressedSizeMB|number|false|none|Size on the disk of the uncompressed DICOM instances associated with the instance, expressed in megabytes (MB)|
|DiskSize|string|false|none|Size of the instance on the disk in bytes, expressed as a string for 64bit compatibility with JSON|
|DiskSizeMB|number|false|none|Size of the instance on the disk, expressed in megabytes (MB)|
|UncompressedSize|string|false|none|Size of the instance after decompression in bytes, expressed as a string for 64bit compatibility with JSON|
|UncompressedSizeMB|number|false|none|Size of the instance after decompression, expressed in megabytes (MB). This is different from `DiskSizeMB` iff `StorageCompression` is `true`.|

<aside class="success">
This operation does not require authentication
</aside>

## Get parent study

> Code samples

```bash
curl https://example.com/instances/string/study \
  -H 'Accept: application/json'
```

`GET /instances/{id}/study`

Get detailed information about the parent study of the DICOM instance whose Orthanc identifier is provided in the URL

<h3 id="get-parent-study-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the instance of interest|

> Example responses

> 200 Response

```json
{
  "ID": "1c379a23-9fd28bba-02b60e5b-850ff34e-4349f09b",
  "IsStable": true,
  "LastUpdate": "20200803T131236",
  "MainDicomTags": {
    "AccessionNumber": "2819497684894126",
    "ReferringPhysicianName": "",
    "StudyDate": "20091022",
    "StudyDescription": "RT^HEAD_NECK (Adult)",
    "StudyID": "",
    "StudyInstanceUID": "1.3.6.1.4.1.14519.5.2.1.2193.7172.847236098565581057121195872945",
    "StudyTime": "172721.327000"
  },
  "ParentPatient": "65ce8003-696b2eb6-03adeee7-6561ce8e-3e03f13a",
  "PatientMainDicomTags": {
    "PatientBirthDate": "",
    "PatientID": "HN_P001",
    "PatientName": "HN_P001",
    "PatientSex": "M"
  },
  "Series": [
    "9c7031b2-97909802-c35563e6-168bf0af-5cfbdce4",
    "1d9c4560-6480f3d9-0a4d3654-65715f38-755ad2e0",
    "52f4cb90-29d1d1a2-2ca34edd-4b8851fc-8cb269f2"
  ],
  "Type": "Study"
}
```

<h3 id="get-parent-study-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get DICOM tags

> Code samples

```bash
curl https://example.com/instances/string/tags \
  -H 'Accept: application/json'
```

`GET /instances/{id}/tags`

Get the DICOM tags in the specified format. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.

<h3 id="get-dicom-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignore-length|query|[string]|false|Also include the DICOM tags that are provided in this list, even if their associated value is long|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Orthanc identifier of the DICOM instance of interest|

> Example responses

> 200 Response

```json
{
  "0008,0005": {
    "Name": "SpecificCharacterSet",
    "Type": "String",
    "Value": "ISO_IR 100"
  },
  "0008,0008": {
    "Name": "ImageType",
    "Type": "String",
    "Value": "ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI"
  },
  "0008,0016": {
    "Name": "SOPClassUID",
    "Type": "String",
    "Value": "1.2.840.10008.5.1.4.1.1.2"
  },
  "0008,0018": {
    "Name": "SOPInstanceUID",
    "Type": "String",
    "Value": "1.3.12.2.1107.5.1.4.54693.30000006100507010800000005269"
  },
  "0008,0020": {
    "Name": "StudyDate",
    "Type": "String",
    "Value": "20061005"
  },
  "0008,0021": {
    "Name": "SeriesDate",
    "Type": "String",
    "Value": "20061005"
  },
  "0008,0022": {
    "Name": "AcquisitionDate",
    "Type": "String",
    "Value": "20061005"
  },
  "0008,0023": {
    "Name": "ContentDate",
    "Type": "String",
    "Value": "20061005"
  },
  "0008,0030": {
    "Name": "StudyTime",
    "Type": "String",
    "Value": "101556.921000"
  },
  "0008,0031": {
    "Name": "SeriesTime",
    "Type": "String",
    "Value": "102051.046000"
  },
  "{...}": "..."
}
```

<h3 id="get-dicom-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="orthanc-api-other">Other</h1>

## List operations on attachments

> Code samples

```bash
curl https://example.com/instances/string/attachments/string \
  -H 'Accept: application/json'
```

`GET /instances/{id}/attachments/{name}`

Get the list of the operations that are available for attachments associated with the given instance

<h3 id="list-operations-on-attachments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the instance of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

> Example responses

> 200 Response

```json
[
  "compress",
  "compressed-data",
  "compressed-md5",
  "compressed-size",
  "data",
  "info",
  "is-compressed",
  "md5",
  "size",
  "uncompress",
  "verify-md5",
  "uuid"
]
```

<h3 id="list-operations-on-attachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## List operations

> Code samples

```bash
curl https://example.com/instances/string/frames/string \
  -H 'Accept: application/json'
```

`GET /instances/{id}/frames/{frame}`

List the available operations under URI `/instances/{id}/frames/{frame}/`

<h3 id="list-operations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|frame|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  "image-int16",
  "image-uint16",
  "image-uint8",
  "matlab",
  "numpy",
  "preview",
  "raw",
  "raw.gz",
  "rendered"
]
```

<h3 id="list-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List operations on attachments

> Code samples

```bash
curl https://example.com/patients/string/attachments/string \
  -H 'Accept: application/json'
```

`GET /patients/{id}/attachments/{name}`

Get the list of the operations that are available for attachments associated with the given patient

<h3 id="list-operations-on-attachments-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

> Example responses

> 200 Response

```json
[
  "compress",
  "compressed-data",
  "compressed-md5",
  "compressed-size",
  "data",
  "info",
  "is-compressed",
  "md5",
  "size",
  "uncompress",
  "verify-md5",
  "uuid"
]
```

<h3 id="list-operations-on-attachments-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## List operations on attachments

> Code samples

```bash
curl https://example.com/series/string/attachments/string \
  -H 'Accept: application/json'
```

`GET /series/{id}/attachments/{name}`

Get the list of the operations that are available for attachments associated with the given series

<h3 id="list-operations-on-attachments-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

> Example responses

> 200 Response

```json
[
  "compress",
  "compressed-data",
  "compressed-md5",
  "compressed-size",
  "data",
  "info",
  "is-compressed",
  "md5",
  "size",
  "uncompress",
  "verify-md5",
  "uuid"
]
```

<h3 id="list-operations-on-attachments-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## List operations on attachments

> Code samples

```bash
curl https://example.com/studies/string/attachments/string \
  -H 'Accept: application/json'
```

`GET /studies/{id}/attachments/{name}`

Get the list of the operations that are available for attachments associated with the given study

<h3 id="list-operations-on-attachments-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

> Example responses

> 200 Response

```json
[
  "compress",
  "compressed-data",
  "compressed-md5",
  "compressed-size",
  "data",
  "info",
  "is-compressed",
  "md5",
  "size",
  "uncompress",
  "verify-md5",
  "uuid"
]
```

<h3 id="list-operations-on-attachments-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## List operations

> Code samples

```bash
curl https://example.com/tools \
  -H 'Accept: application/json'
```

`GET /tools`

List the available operations under URI `/tools/`

> Example responses

> 200 Response

```json
[
  "accepted-transfer-syntaxes",
  "bulk-anonymize",
  "bulk-content",
  "bulk-delete",
  "bulk-modify",
  "create-archive",
  "create-dicom",
  "create-media",
  "create-media-extended",
  "default-encoding",
  "dicom-conformance",
  "dicom-echo",
  "execute-script",
  "find",
  "generate-uid",
  "invalidate-tags",
  "log-level",
  "log-level-dicom",
  "log-level-generic",
  "log-level-http",
  "log-level-jobs",
  "log-level-lua",
  "log-level-plugins",
  "log-level-sqlite",
  "lookup",
  "metrics",
  "metrics-prometheus",
  "now",
  "now-local",
  "reconstruct",
  "reset",
  "shutdown",
  "unknown-sop-class-accepted"
]
```

<h3 id="list-operations-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="orthanc-api-jobs">Jobs</h1>

## List jobs

> Code samples

```bash
curl https://example.com/jobs \
  -H 'Accept: application/json'
```

`GET /jobs`

List all the available jobs

<h3 id="list-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|If present, retrieve detailed information about the individual jobs|

> Example responses

> 200 Response

```json
[
  "088d9652-7ca3-4dfc-ba70-8da881f13e7e",
  "1461a56a-f046-47c3-bf2c-ad891dff319a",
  "4e22e7a9-467f-4957-8ab5-4a86834e66e6",
  "..."
]
```

<h3 id="list-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get job

> Code samples

```bash
curl https://example.com/jobs/string \
  -H 'Accept: application/json'
```

`GET /jobs/{id}`

Retrieve detailed information about the job whose identifier is provided in the URL: https://book.orthanc-server.com/users/advanced-rest.html#jobs

<h3 id="get-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the job of interest|

> Example responses

> 200 Response

```json
{
  "CompletionTime": "20201227T161842.520129",
  "Content": {
    "ArchiveSizeMB": 22,
    "Description": "REST API",
    "InstancesCount": 232,
    "UncompressedSizeMB": 64
  },
  "CreationTime": "20201227T161836.428311",
  "EffectiveRuntime": 6.081,
  "ErrorCode": 0,
  "ErrorDescription": "Success",
  "ID": "645ecb02-7c0e-4465-b767-df873222dcfb",
  "Priority": 0,
  "Progress": 100,
  "State": "Success",
  "Timestamp": "20201228T160340.253201",
  "Type": "Media"
}
```

<h3 id="get-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel job

> Code samples

```bash
curl https://example.com/jobs/string/cancel \
  -X POST \
  -H 'Accept: application/json'
```

`POST /jobs/{id}/cancel`

Cancel the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs

<h3 id="cancel-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the job of interest|

> Example responses

> 200 Response

```json
null
```

<h3 id="cancel-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Pause job

> Code samples

```bash
curl https://example.com/jobs/string/pause \
  -X POST \
  -H 'Accept: application/json'
```

`POST /jobs/{id}/pause`

Pause the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs

<h3 id="pause-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the job of interest|

> Example responses

> 200 Response

```json
null
```

<h3 id="pause-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Resubmit job

> Code samples

```bash
curl https://example.com/jobs/string/resubmit \
  -X POST \
  -H 'Accept: application/json'
```

`POST /jobs/{id}/resubmit`

Resubmit the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs

<h3 id="resubmit-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the job of interest|

> Example responses

> 200 Response

```json
null
```

<h3 id="resubmit-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Resume job

> Code samples

```bash
curl https://example.com/jobs/string/resume \
  -X POST \
  -H 'Accept: application/json'
```

`POST /jobs/{id}/resume`

Resume the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs

<h3 id="resume-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the job of interest|

> Example responses

> 200 Response

```json
null
```

<h3 id="resume-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get job output

> Code samples

```bash
curl https://example.com/jobs/string/string
```

`GET /jobs/{id}/{key}`

Retrieve some output produced by a job. As of Orthanc 1.8.2, only the jobs that generate a DICOMDIR media or a ZIP archive provide such an output (with `key` equals to `archive`).

<h3 id="get-job-output-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the job of interest|
|key|path|string|true|Name of the output of interest|

<h3 id="get-job-output-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="orthanc-api-networking">Networking</h1>

## List DICOM modalities

> Code samples

```bash
curl https://example.com/modalities \
  -H 'Accept: application/json'
```

`GET /modalities`

List all the DICOM modalities that are known to Orthanc. This corresponds either to the content of the `DicomModalities` configuration option, or to the information stored in the database if `DicomModalitiesInDatabase` is `true`.

<h3 id="list-dicom-modalities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|If present, retrieve detailed information about the individual DICOM modalities|

> Example responses

> 200 Response

```json
null
```

<h3 id="list-dicom-modalities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List operations on modality

> Code samples

```bash
curl https://example.com/modalities/string \
  -H 'Accept: application/json'
```

`GET /modalities/{id}`

List the operations that are available for a DICOM modality.

<h3 id="list-operations-on-modality-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the DICOM modality of interest|

> Example responses

> 200 Response

```json
null
```

<h3 id="list-operations-on-modality-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update DICOM modality

> Code samples

```bash
curl https://example.com/modalities/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "AET": "string",
    "AllowEcho": true,
    "AllowFind": true,
    "AllowFindWorklist": true,
    "AllowGet": true,
    "AllowMove": true,
    "AllowStorageCommitment": true,
    "AllowStore": true,
    "AllowTranscoding": true,
    "Host": "string",
    "Manufacturer": "string",
    "Port": 0,
    "UseDicomTls": true
  }'
```

`PUT /modalities/{id}`

Define a new DICOM modality, or update an existing one. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.

> Body parameter

```json
{
  "AET": "string",
  "AllowEcho": true,
  "AllowFind": true,
  "AllowFindWorklist": true,
  "AllowGet": true,
  "AllowMove": true,
  "AllowStorageCommitment": true,
  "AllowStore": true,
  "AllowTranscoding": true,
  "Host": "string",
  "Manufacturer": "string",
  "Port": 0,
  "UseDicomTls": true
}
```

<h3 id="update-dicom-modality-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the new/updated DICOM modality|
|body|body|object|false|none|
|» AET|body|string|false|AET of the remote DICOM modality|
|» AllowEcho|body|boolean|false|Whether to accept C-ECHO SCU commands issued by the remote modality|
|» AllowFind|body|boolean|false|Whether to accept C-FIND SCU commands issued by the remote modality|
|» AllowFindWorklist|body|boolean|false|Whether to accept C-FIND SCU commands for worklists issued by the remote modality|
|» AllowGet|body|boolean|false|Whether to accept C-GET SCU commands issued by the remote modality|
|» AllowMove|body|boolean|false|Whether to accept C-MOVE SCU commands issued by the remote modality|
|» AllowStorageCommitment|body|boolean|false|Whether to accept storage commitment requests issued by the remote modality|
|» AllowStore|body|boolean|false|Whether to accept C-STORE SCU commands issued by the remote modality|
|» AllowTranscoding|body|boolean|false|Whether to allow transcoding for operations initiated by this modality. This option applies to Orthanc C-GET SCP and to Orthanc C-STORE SCU. It only has an effect if the global option `EnableTranscoding` is set to `true`.|
|» Host|body|string|false|Host address of the remote DICOM modality (typically, an IP address)|
|» Manufacturer|body|string|false|Manufacturer of the remote DICOM modality (check configuration option `DicomModalities` for possible values|
|» Port|body|number|false|TCP port of the remote DICOM modality|
|» UseDicomTls|body|boolean|false|Whether to use DICOM TLS in the SCU connection initiated by Orthanc (new in Orthanc 1.9.0)|

<h3 id="update-dicom-modality-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete DICOM modality

> Code samples

```bash
curl https://example.com/modalities/string \
  -X DELETE
```

`DELETE /modalities/{id}`

Delete one DICOM modality. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.

<h3 id="delete-dicom-modality-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the DICOM modality of interest|

<h3 id="delete-dicom-modality-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get modality configuration

> Code samples

```bash
curl https://example.com/modalities/string/configuration \
  -H 'Accept: application/json'
```

`GET /modalities/{id}/configuration`

Get detailed information about the configuration of some DICOM modality

<h3 id="get-modality-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|

> Example responses

> 200 Response

```json
{
  "AET": "ORTHANCTEST",
  "AllowEcho": true,
  "AllowEventReport": true,
  "AllowFind": true,
  "AllowFindWorklist": true,
  "AllowGet": true,
  "AllowMove": true,
  "AllowNAction": true,
  "AllowStore": true,
  "AllowTranscoding": true,
  "Host": "127.0.1.1",
  "Manufacturer": "Generic",
  "Port": 5001
}
```

<h3 id="get-modality-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Trigger C-ECHO SCU

> Code samples

```bash
curl https://example.com/modalities/string/echo \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "CheckFind": true,
    "Timeout": 0
  }'
```

`POST /modalities/{id}/echo`

Trigger C-ECHO SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-c-echo

> Body parameter

```json
{
  "CheckFind": true,
  "Timeout": 0
}
```

<h3 id="trigger-c-echo-scu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|
|body|body|object|false|none|
|» CheckFind|body|boolean|false|Issue a dummy C-FIND command after the C-GET SCU, in order to check whether the remote modality knows about Orthanc. This field defaults to the value of the `DicomEchoChecksFind` configuration option. New in Orthanc 1.8.1.|
|» Timeout|body|number|false|Timeout for the C-ECHO command, in seconds|

<h3 id="trigger-c-echo-scu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Hierarchical C-FIND SCU

> Code samples

```bash
curl https://example.com/modalities/string/find \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /modalities/{id}/find`

<aside class="warning">
This operation is deprecated
</aside>

Trigger a sequence of C-FIND SCU commands against the DICOM modality whose identifier is provided in URL, in order to discover a hierarchy of matching patients/studies/series. Deprecated in favor of `/modalities/{id}/query`.

> Body parameter

```json
null
```

<h3 id="hierarchical-c-find-scu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="hierarchical-c-find-scu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## C-FIND SCU for instances

> Code samples

```bash
curl https://example.com/modalities/string/find-instance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /modalities/{id}/find-instance`

<aside class="warning">
This operation is deprecated
</aside>

Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find an instance. Deprecated in favor of `/modalities/{id}/query`.

> Body parameter

```json
null
```

<h3 id="c-find-scu-for-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="c-find-scu-for-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## C-FIND SCU for patients

> Code samples

```bash
curl https://example.com/modalities/string/find-patient \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /modalities/{id}/find-patient`

<aside class="warning">
This operation is deprecated
</aside>

Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a patient. Deprecated in favor of `/modalities/{id}/query`.

> Body parameter

```json
null
```

<h3 id="c-find-scu-for-patients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="c-find-scu-for-patients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## C-FIND SCU for series

> Code samples

```bash
curl https://example.com/modalities/string/find-series \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /modalities/{id}/find-series`

<aside class="warning">
This operation is deprecated
</aside>

Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a series. Deprecated in favor of `/modalities/{id}/query`.

> Body parameter

```json
null
```

<h3 id="c-find-scu-for-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="c-find-scu-for-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## C-FIND SCU for studies

> Code samples

```bash
curl https://example.com/modalities/string/find-study \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /modalities/{id}/find-study`

<aside class="warning">
This operation is deprecated
</aside>

Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a study. Deprecated in favor of `/modalities/{id}/query`.

> Body parameter

```json
null
```

<h3 id="c-find-scu-for-studies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="c-find-scu-for-studies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## C-FIND SCU for worklist

> Code samples

```bash
curl https://example.com/modalities/string/find-worklist \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Full": true,
    "Query": {},
    "Short": true
  }'
```

`POST /modalities/{id}/find-worklist`

Trigger C-FIND SCU command against the remote worklists of the DICOM modality whose identifier is provided in URL

> Body parameter

```json
{
  "Full": true,
  "Query": {},
  "Short": true
}
```

<h3 id="c-find-scu-for-worklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|
|body|body|object|false|none|
|» Full|body|boolean|false|If set to `true`, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|» Query|body|object|false|Associative array containing the filter on the values of the DICOM tags|
|» Short|body|boolean|false|If set to `true`, report the DICOM tags in hexadecimal format|

> Example responses

> 200 Response

```json
null
```

<h3 id="c-find-scu-for-worklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Trigger C-MOVE SCU

> Code samples

```bash
curl https://example.com/modalities/string/move \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Level": "string",
    "LocalAet": "string",
    "Permissive": true,
    "Priority": 0,
    "Resources": [
      {}
    ],
    "Synchronous": true,
    "TargetAet": "string",
    "Timeout": 0
  }'
```

`POST /modalities/{id}/move`

Start a C-MOVE SCU command as a job, in order to drive the execution of a sequence of C-STORE commands by some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-c-move

> Body parameter

```json
{
  "Asynchronous": true,
  "Level": "string",
  "LocalAet": "string",
  "Permissive": true,
  "Priority": 0,
  "Resources": [
    {}
  ],
  "Synchronous": true,
  "TargetAet": "string",
  "Timeout": 0
}
```

<h3 id="trigger-c-move-scu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» Level|body|string|false|Level of the query (`Patient`, `Study`, `Series` or `Instance`)|
|» LocalAet|body|string|false|Local AET that is used for this commands, defaults to `DicomAet` configuration option. Ignored if `DicomModalities` already sets `LocalAet` for this modality.|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Resources|body|[object]|false|List of queries identifying all the DICOM resources to be sent|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|
|» TargetAet|body|string|false|Target AET that will be used by the remote DICOM modality as a target for its C-STORE SCU commands, defaults to `DicomAet` configuration option in order to do a simple query/retrieve|
|» Timeout|body|number|false|Timeout for the C-MOVE command, in seconds|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="trigger-c-move-scu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="trigger-c-move-scu-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Trigger C-FIND SCU

> Code samples

```bash
curl https://example.com/modalities/string/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Level": "string",
    "LocalAet": "string",
    "Normalize": true,
    "Query": {},
    "Timeout": 0
  }'
```

`POST /modalities/{id}/query`

Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest

> Body parameter

```json
{
  "Level": "string",
  "LocalAet": "string",
  "Normalize": true,
  "Query": {},
  "Timeout": 0
}
```

<h3 id="trigger-c-find-scu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|
|body|body|object|false|none|
|» Level|body|string|false|Level of the query (`Patient`, `Study`, `Series` or `Instance`)|
|» LocalAet|body|string|false|Local AET that is used for this commands, defaults to `DicomAet` configuration option. Ignored if `DicomModalities` already sets `LocalAet` for this modality.|
|» Normalize|body|boolean|false|Whether to normalize the query, i.e. whether to wipe out from the query, the DICOM tags that are not applicable for the query-retrieve level of interest|
|» Query|body|object|false|Associative array containing the filter on the values of the DICOM tags|
|» Timeout|body|number|false|Timeout for the C-FIND command and subsequent C-MOVE retrievals, in seconds (new in Orthanc 1.9.1)|

> Example responses

> 200 Response

```json
{
  "ID": {},
  "Path": {}
}
```

<h3 id="trigger-c-find-scu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="trigger-c-find-scu-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|object|false|none|Identifier of the query, to be used with `/queries/{id}`|
|Path|object|false|none|Root path to the query in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Trigger storage commitment request

> Code samples

```bash
curl https://example.com/modalities/string/storage-commitment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "DicomInstances": [
      {}
    ],
    "Resources": [
      "string"
    ],
    "Timeout": 0
  }'
```

`POST /modalities/{id}/storage-commitment`

Trigger a storage commitment request to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu

> Body parameter

```json
{
  "DicomInstances": [
    {}
  ],
  "Resources": [
    "string"
  ],
  "Timeout": 0
}
```

<h3 id="trigger-storage-commitment-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|
|body|body|object|false|none|
|» DicomInstances|body|[object]|false|List of DICOM resources that are not necessarily stored within Orthanc, but that must be checked by storage commitment. This is a list of JSON objects that must contain the `SOPClassUID` and `SOPInstanceUID` fields.|
|» Resources|body|[string]|false|List of the Orthanc identifiers of the DICOM resources to be checked by storage commitment|
|» Timeout|body|number|false|Timeout for the storage commitment command (new in Orthanc 1.9.1)|

> Example responses

> 200 Response

```json
{
  "ID": {},
  "Path": {}
}
```

<h3 id="trigger-storage-commitment-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="trigger-storage-commitment-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|object|false|none|Identifier of the storage commitment report, to be used with `/storage-commitment/{id}`|
|Path|object|false|none|Root path to the storage commitment report in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Trigger C-STORE SCU

> Code samples

```bash
curl https://example.com/modalities/string/store \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "CalledAet": "string",
    "Host": "string",
    "LocalAet": "string",
    "MoveOriginatorAet": "string",
    "MoveOriginatorID": 0,
    "Permissive": true,
    "Port": 0,
    "Priority": 0,
    "Resources": [
      "string"
    ],
    "StorageCommitment": true,
    "Synchronous": true,
    "Timeout": 0
  }'
```

`POST /modalities/{id}/store`

Start a C-STORE SCU command as a job, in order to send DICOM resources stored locally to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#rest-store-scu

> Body parameter

```json
{
  "Asynchronous": true,
  "CalledAet": "string",
  "Host": "string",
  "LocalAet": "string",
  "MoveOriginatorAet": "string",
  "MoveOriginatorID": 0,
  "Permissive": true,
  "Port": 0,
  "Priority": 0,
  "Resources": [
    "string"
  ],
  "StorageCommitment": true,
  "Synchronous": true,
  "Timeout": 0
}
```

<h3 id="trigger-c-store-scu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» CalledAet|body|string|false|Called AET that is used for this commands, defaults to `AET` configuration option. Allows you to overwrite the destination AET for a specific operation.|
|» Host|body|string|false|Host that is used for this commands, defaults to `Host` configuration option. Allows you to overwrite the destination host for a specific operation.|
|» LocalAet|body|string|false|Local AET that is used for this commands, defaults to `DicomAet` configuration option. Ignored if `DicomModalities` already sets `LocalAet` for this modality.|
|» MoveOriginatorAet|body|string|false|Move originator AET that is used for this commands, in order to fake a C-MOVE SCU|
|» MoveOriginatorID|body|number|false|Move originator ID that is used for this commands, in order to fake a C-MOVE SCU|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Port|body|number|false|Port that is used for this commands, defaults to `Port` configuration option. Allows you to overwrite the destination port for a specific operation.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Resources|body|[string]|false|List of the Orthanc identifiers of all the DICOM resources to be sent|
|» StorageCommitment|body|boolean|false|Whether to chain C-STORE with DICOM storage commitment to validate the success of the transmission: https://book.orthanc-server.com/users/storage-commitment.html#chaining-c-store-with-storage-commitment|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|
|» Timeout|body|number|false|Timeout for the C-STORE command, in seconds|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="trigger-c-store-scu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="trigger-c-store-scu-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Straight C-STORE SCU

> Code samples

```bash
curl https://example.com/modalities/string/store-straight \
  -X POST \
  -H 'Content-Type: application/dicom' \
  -H 'Accept: application/json'
```

`POST /modalities/{id}/store-straight`

Synchronously send the DICOM instance in the POST body to the remote DICOM modality whose identifier is provided in URL, without having to first store it locally within Orthanc. This is an alternative to command-line tools such as `storescu` from DCMTK or dcm4che.

> Body parameter

```json
null
```

<h3 id="straight-c-store-scu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "SOPClassUID": "string",
  "SOPInstanceUID": "string"
}
```

<h3 id="straight-c-store-scu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="straight-c-store-scu-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SOPClassUID|string|false|none|SOP class UID of the DICOM instance, if the C-STORE SCU has succeeded|
|SOPInstanceUID|string|false|none|SOP instance UID of the DICOM instance, if the C-STORE SCU has succeeded|

<aside class="success">
This operation does not require authentication
</aside>

## List Orthanc peers

> Code samples

```bash
curl https://example.com/peers \
  -H 'Accept: application/json'
```

`GET /peers`

List all the Orthanc peers that are known to Orthanc. This corresponds either to the content of the `OrthancPeers` configuration option, or to the information stored in the database if `OrthancPeersInDatabase` is `true`.

<h3 id="list-orthanc-peers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|If present, retrieve detailed information about the individual Orthanc peers|

> Example responses

> 200 Response

```json
null
```

<h3 id="list-orthanc-peers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List operations on peer

> Code samples

```bash
curl https://example.com/peers/string \
  -H 'Accept: application/json'
```

`GET /peers/{id}`

List the operations that are available for an Orthanc peer.

<h3 id="list-operations-on-peer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the peer of interest|

> Example responses

> 200 Response

```json
null
```

<h3 id="list-operations-on-peer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update Orthanc peer

> Code samples

```bash
curl https://example.com/peers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "CertificateFile": "string",
    "CertificateKeyFile": "string",
    "CertificateKeyPassword": "string",
    "HttpHeaders": {},
    "Password": "string",
    "URL": "string",
    "Username": "string"
  }'
```

`PUT /peers/{id}`

Define a new Orthanc peer, or update an existing one. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.

> Body parameter

```json
{
  "CertificateFile": "string",
  "CertificateKeyFile": "string",
  "CertificateKeyPassword": "string",
  "HttpHeaders": {},
  "Password": "string",
  "URL": "string",
  "Username": "string"
}
```

<h3 id="update-orthanc-peer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the new/updated Orthanc peer|
|body|body|object|false|none|
|» CertificateFile|body|string|false|SSL certificate for the HTTPS connections|
|» CertificateKeyFile|body|string|false|Key file for the SSL certificate for the HTTPS connections|
|» CertificateKeyPassword|body|string|false|Key password for the SSL certificate for the HTTPS connections|
|» HttpHeaders|body|object|false|HTTP headers to be used for the connections to the remote peer|
|» Password|body|string|false|Password for the credentials|
|» URL|body|string|false|URL of the root of the REST API of the remote Orthanc peer, for instance `http://localhost:8042/`|
|» Username|body|string|false|Username for the credentials|

<h3 id="update-orthanc-peer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Orthanc peer

> Code samples

```bash
curl https://example.com/peers/string \
  -X DELETE
```

`DELETE /peers/{id}`

Delete one Orthanc peer. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.

<h3 id="delete-orthanc-peer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the Orthanc peer of interest|

<h3 id="delete-orthanc-peer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get peer configuration

> Code samples

```bash
curl https://example.com/peers/string/configuration \
  -H 'Accept: application/json'
```

`GET /peers/{id}/configuration`

Get detailed information about the configuration of some Orthanc peer

<h3 id="get-peer-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the peer of interest|

> Example responses

> 200 Response

```json
{
  "HttpHeaders": {},
  "Password": null,
  "Pkcs11": false,
  "Url": "http://127.0.1.1:5000/",
  "Username": "alice"
}
```

<h3 id="get-peer-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Send to Orthanc peer

> Code samples

```bash
curl https://example.com/peers/string/store \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Compress": true,
    "Permissive": true,
    "Priority": 0,
    "Resources": [
      "string"
    ],
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /peers/{id}/store`

Send DICOM resources stored locally to some remote Orthanc peer whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#sending-one-resource

> Body parameter

```json
{
  "Asynchronous": true,
  "Compress": true,
  "Permissive": true,
  "Priority": 0,
  "Resources": [
    "string"
  ],
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="send-to-orthanc-peer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» Compress|body|boolean|false|Whether to compress the DICOM instances using gzip before the actual sending|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Resources|body|[string]|false|List of the Orthanc identifiers of all the DICOM resources to be sent|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|
|» Transcode|body|string|false|Transcode to the provided DICOM transfer syntax before the actual sending|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="send-to-orthanc-peer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="send-to-orthanc-peer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Straight store to peer

> Code samples

```bash
curl https://example.com/peers/string/store-straight \
  -X POST \
  -H 'Content-Type: application/dicom' \
  -H 'Accept: application/json'
```

`POST /peers/{id}/store-straight`

Synchronously send the DICOM instance in the POST body to the Orthanc peer whose identifier is provided in URL, without having to first store it locally within Orthanc. This is an alternative to command-line tools such as `curl`.

> Body parameter

```json
null
```

<h3 id="straight-store-to-peer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the modality of interest|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "ParentPatient": "string",
  "ParentSeries": "string",
  "ParentStudy": "string",
  "Path": "string",
  "Status": "string"
}
```

<h3 id="straight-store-to-peer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="straight-store-to-peer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|Orthanc identifier of the DICOM instance in the remote Orthanc peer|
|ParentPatient|string|false|none|Orthanc identifier of the parent patient in the remote Orthanc peer|
|ParentSeries|string|false|none|Orthanc identifier of the parent series in the remote Orthanc peer|
|ParentStudy|string|false|none|Orthanc identifier of the parent study in the remote Orthanc peer|
|Path|string|false|none|Path to the DICOM instance in the remote Orthanc server|
|Status|string|false|none|Status of the store operation|

<aside class="success">
This operation does not require authentication
</aside>

## Get peer system information

> Code samples

```bash
curl https://example.com/peers/string/system \
  -H 'Accept: application/json'
```

`GET /peers/{id}/system`

Get system information about some Orthanc peer. This corresponds to doing a `GET` request against the `/system` URI of the remote peer. This route can be used to test connectivity.

<h3 id="get-peer-system-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the peer of interest|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-peer-system-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List query/retrieve operations

> Code samples

```bash
curl https://example.com/queries \
  -H 'Accept: application/json'
```

`GET /queries`

List the identifiers of all the query/retrieve operations on DICOM modalities, as initiated by calls to `/modalities/{id}/query`. The length of this list is bounded by the `QueryRetrieveSize` configuration option of Orthanc. https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest

> Example responses

> 200 Response

```json
null
```

<h3 id="list-queryretrieve-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List operations on a query

> Code samples

```bash
curl https://example.com/queries/string \
  -H 'Accept: application/json'
```

`GET /queries/{id}`

List the available operations for the query/retrieve operation whose identifier is provided in the URL

<h3 id="list-operations-on-a-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the query of interest|

> Example responses

> 200 Response

```json
null
```

<h3 id="list-operations-on-a-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a query

> Code samples

```bash
curl https://example.com/queries/string \
  -X DELETE
```

`DELETE /queries/{id}`

Delete the query/retrieve operation whose identifier is provided in the URL

<h3 id="delete-a-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the query of interest|

<h3 id="delete-a-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## List answers to a query

> Code samples

```bash
curl https://example.com/queries/string/answers \
  -H 'Accept: application/json'
```

`GET /queries/{id}/answers`

List the indices of all the available answers resulting from a query/retrieve operation on some DICOM modality, whose identifier is provided in the URL

<h3 id="list-answers-to-a-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|If present, retrieve detailed information about the individual answers|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Identifier of the query of interest|

> Example responses

> 200 Response

```json
null
```

<h3 id="list-answers-to-a-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List operations on an answer

> Code samples

```bash
curl https://example.com/queries/string/answers/string \
  -H 'Accept: application/json'
```

`GET /queries/{id}/answers/{index}`

List the available operations on an answer associated with the query/retrieve operation whose identifier is provided in the URL

<h3 id="list-operations-on-an-answer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the query of interest|
|index|path|string|true|Index of the answer|

> Example responses

> 200 Response

```json
null
```

<h3 id="list-operations-on-an-answer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get one answer

> Code samples

```bash
curl https://example.com/queries/string/answers/string/content \
  -H 'Accept: application/json'
```

`GET /queries/{id}/answers/{index}/content`

Get the content (DICOM tags) of one answer associated with the query/retrieve operation whose identifier is provided in the URL

<h3 id="get-one-answer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Identifier of the query of interest|
|index|path|string|true|Index of the answer|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-one-answer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Query the child instances of an answer

> Code samples

```bash
curl https://example.com/queries/string/answers/string/query-instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Query": {},
    "Timeout": 0
  }'
```

`POST /queries/{id}/answers/{index}/query-instances`

Issue a second DICOM C-FIND operation, in order to query the child instances associated with one answer to some query/retrieve operation whose identifiers are provided in the URL

> Body parameter

```json
{
  "Query": {},
  "Timeout": 0
}
```

<h3 id="query-the-child-instances-of-an-answer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the query of interest|
|index|path|string|true|Index of the answer|
|body|body|object|false|none|
|» Query|body|object|false|Associative array containing the filter on the values of the DICOM tags|
|» Timeout|body|number|false|Timeout for the C-FIND command, in seconds (new in Orthanc 1.9.1)|

> Example responses

> 200 Response

```json
{
  "ID": {},
  "Path": {}
}
```

<h3 id="query-the-child-instances-of-an-answer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="query-the-child-instances-of-an-answer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|object|false|none|Identifier of the query, to be used with `/queries/{id}`|
|Path|object|false|none|Root path to the query in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Query the child series of an answer

> Code samples

```bash
curl https://example.com/queries/string/answers/string/query-series \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Query": {},
    "Timeout": 0
  }'
```

`POST /queries/{id}/answers/{index}/query-series`

Issue a second DICOM C-FIND operation, in order to query the child series associated with one answer to some query/retrieve operation whose identifiers are provided in the URL

> Body parameter

```json
{
  "Query": {},
  "Timeout": 0
}
```

<h3 id="query-the-child-series-of-an-answer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the query of interest|
|index|path|string|true|Index of the answer|
|body|body|object|false|none|
|» Query|body|object|false|Associative array containing the filter on the values of the DICOM tags|
|» Timeout|body|number|false|Timeout for the C-FIND command, in seconds (new in Orthanc 1.9.1)|

> Example responses

> 200 Response

```json
{
  "ID": {},
  "Path": {}
}
```

<h3 id="query-the-child-series-of-an-answer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="query-the-child-series-of-an-answer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|object|false|none|Identifier of the query, to be used with `/queries/{id}`|
|Path|object|false|none|Root path to the query in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Query the child studies of an answer

> Code samples

```bash
curl https://example.com/queries/string/answers/string/query-studies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Query": {},
    "Timeout": 0
  }'
```

`POST /queries/{id}/answers/{index}/query-studies`

Issue a second DICOM C-FIND operation, in order to query the child studies associated with one answer to some query/retrieve operation whose identifiers are provided in the URL

> Body parameter

```json
{
  "Query": {},
  "Timeout": 0
}
```

<h3 id="query-the-child-studies-of-an-answer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the query of interest|
|index|path|string|true|Index of the answer|
|body|body|object|false|none|
|» Query|body|object|false|Associative array containing the filter on the values of the DICOM tags|
|» Timeout|body|number|false|Timeout for the C-FIND command, in seconds (new in Orthanc 1.9.1)|

> Example responses

> 200 Response

```json
{
  "ID": {},
  "Path": {}
}
```

<h3 id="query-the-child-studies-of-an-answer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="query-the-child-studies-of-an-answer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|object|false|none|Identifier of the query, to be used with `/queries/{id}`|
|Path|object|false|none|Root path to the query in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve one answer

> Code samples

```bash
curl https://example.com/queries/string/answers/string/retrieve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Full": true,
    "Permissive": true,
    "Priority": 0,
    "Simplify": true,
    "Synchronous": true,
    "TargetAet": "string",
    "Timeout": 0
  }'
```

`POST /queries/{id}/answers/{index}/retrieve`

Start a C-MOVE SCU command as a job, in order to retrieve one answer associated with the query/retrieve operation whose identifiers are provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move

> Body parameter

```json
{
  "Asynchronous": true,
  "Full": true,
  "Permissive": true,
  "Priority": 0,
  "Simplify": true,
  "Synchronous": true,
  "TargetAet": "string",
  "Timeout": 0
}
```

<h3 id="retrieve-one-answer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the query of interest|
|index|path|string|true|Index of the answer|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» Full|body|boolean|false|If set to `true`, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Simplify|body|boolean|false|If set to `true`, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|
|» TargetAet|body|string|false|AET of the target modality. By default, the AET of Orthanc is used, as defined in the `DicomAet` configuration option.|
|» Timeout|body|number|false|Timeout for the C-MOVE command, in seconds|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="retrieve-one-answer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="retrieve-one-answer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Get level of original query

> Code samples

```bash
curl https://example.com/queries/string/level
```

`GET /queries/{id}/level`

Get the query level (value of the `QueryRetrieveLevel` tag) of the query/retrieve operation whose identifier is provided in the URL

<h3 id="get-level-of-original-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the query of interest|

<h3 id="get-level-of-original-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get modality of original query

> Code samples

```bash
curl https://example.com/queries/string/modality
```

`GET /queries/{id}/modality`

Get the identifier of the DICOM modality that was targeted by the query/retrieve operation whose identifier is provided in the URL

<h3 id="get-modality-of-original-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the query of interest|

<h3 id="get-modality-of-original-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get original query arguments

> Code samples

```bash
curl https://example.com/queries/string/query \
  -H 'Accept: application/json'
```

`GET /queries/{id}/query`

Get the original DICOM filter associated with the query/retrieve operation whose identifier is provided in the URL

<h3 id="get-original-query-arguments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Identifier of the query of interest|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-original-query-arguments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve all answers

> Code samples

```bash
curl https://example.com/queries/string/retrieve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Full": true,
    "Permissive": true,
    "Priority": 0,
    "Simplify": true,
    "Synchronous": true,
    "TargetAet": "string",
    "Timeout": 0
  }'
```

`POST /queries/{id}/retrieve`

Start a C-MOVE SCU command as a job, in order to retrieve all the answers associated with the query/retrieve operation whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move

> Body parameter

```json
{
  "Asynchronous": true,
  "Full": true,
  "Permissive": true,
  "Priority": 0,
  "Simplify": true,
  "Synchronous": true,
  "TargetAet": "string",
  "Timeout": 0
}
```

<h3 id="retrieve-all-answers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the query of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» Full|body|boolean|false|If set to `true`, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Simplify|body|boolean|false|If set to `true`, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|
|» TargetAet|body|string|false|AET of the target modality. By default, the AET of Orthanc is used, as defined in the `DicomAet` configuration option.|
|» Timeout|body|number|false|Timeout for the C-MOVE command, in seconds|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="retrieve-all-answers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="retrieve-all-answers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Get storage commitment report

> Code samples

```bash
curl https://example.com/storage-commitment/string \
  -H 'Accept: application/json'
```

`GET /storage-commitment/{id}`

Get the storage commitment report whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu

<h3 id="get-storage-commitment-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the storage commitment report|

> Example responses

> 200 Response

```json
{
  "Failures": [
    {}
  ],
  "RemoteAET": "string",
  "Status": "string",
  "Success": [
    {}
  ]
}
```

<h3 id="get-storage-commitment-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-storage-commitment-report-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Failures|[object]|false|none|List of failures that have been encountered during the storage commitment request|
|RemoteAET|string|false|none|AET of the remote DICOM modality|
|Status|string|false|none|Can be `Success`, `Failure`, or `Pending` (the latter means that no report has been received yet)|
|Success|[object]|false|none|List of DICOM instances that have been acknowledged by the remote modality, each one is reported as a JSON object containing the `SOPClassUID` and `SOPInstanceUID` DICOM tags|

<aside class="success">
This operation does not require authentication
</aside>

## Remove after storage commitment

> Code samples

```bash
curl https://example.com/storage-commitment/string/remove \
  -X POST
```

`POST /storage-commitment/{id}/remove`

Remove out of Orthanc, the DICOM instances that have been reported to have been properly received the storage commitment report whose identifier is provided in the URL. This is only possible if the `Status` of the storage commitment report is `Success`. https://book.orthanc-server.com/users/storage-commitment.html#removing-the-instances

<h3 id="remove-after-storage-commitment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the storage commitment report|

<h3 id="remove-after-storage-commitment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="orthanc-api-patients">Patients</h1>

## List the available patients

> Code samples

```bash
curl https://example.com/patients \
  -H 'Accept: application/json'
```

`GET /patients`

List the Orthanc identifiers of all the available DICOM patients

<h3 id="list-the-available-patients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|If present, retrieve detailed information about the individual patients|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|limit|query|number|false|Limit the number of results|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|since|query|number|false|Show only the resources since the provided index|

> Example responses

> 200 Response

```json
[
  "0946fcb6-cf12ab43-bad958c1-bf057ad5-0fc6f54c",
  "da39a3ee-5e6b4b0d-3255bfef-95601890-afd80709"
]
```

<h3 id="list-the-available-patients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get information about some patient

> Code samples

```bash
curl https://example.com/patients/string \
  -H 'Accept: application/json'
```

`GET /patients/{id}`

Get detailed information about the DICOM patient whose Orthanc identifier is provided in the URL

<h3 id="get-information-about-some-patient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the patient of interest|

> Example responses

> 200 Response

```json
{
  "ID": "46e6332c-677825b6-202fcf7c-f787bc5f-7b07c382",
  "IsStable": true,
  "LastUpdate": "20180414T091542",
  "MainDicomTags": {
    "PatientID": "SOtNwu",
    "PatientName": "INCISIX"
  },
  "Studies": [
    "e98b9ac7-dd31ac40-ff046cb2-f0400d30-12f81d85"
  ],
  "Type": "Patient"
}
```

<h3 id="get-information-about-some-patient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete some patient

> Code samples

```bash
curl https://example.com/patients/string \
  -X DELETE
```

`DELETE /patients/{id}`

Delete the DICOM patient whose Orthanc identifier is provided in the URL

<h3 id="delete-some-patient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the patient of interest|

<h3 id="delete-some-patient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Anonymize patient

> Code samples

```bash
curl https://example.com/patients/string/anonymize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "DicomVersion": "string",
    "Force": true,
    "Keep": [
      "string"
    ],
    "KeepPrivateTags": true,
    "KeepSource": true,
    "Permissive": true,
    "Priority": 0,
    "PrivateCreator": "string",
    "Remove": [
      "string"
    ],
    "Replace": {},
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /patients/{id}/anonymize`

Start a job that will anonymize all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series

> Body parameter

```json
{
  "Asynchronous": true,
  "DicomVersion": "string",
  "Force": true,
  "Keep": [
    "string"
  ],
  "KeepPrivateTags": true,
  "KeepSource": true,
  "Permissive": true,
  "Priority": 0,
  "PrivateCreator": "string",
  "Remove": [
    "string"
  ],
  "Replace": {},
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="anonymize-patient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the patient of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» DicomVersion|body|string|false|Version of the DICOM standard to be used for anonymization. Check out configuration option `DeidentifyLogsDicomVersion` for possible values.|
|» Force|body|boolean|false|Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world|
|» Keep|body|[string]|false|List of DICOM tags whose value must not be destroyed by the anonymization. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» KeepPrivateTags|body|boolean|false|Keep the private tags from the DICOM instances (defaults to `false`)|
|» KeepSource|body|boolean|false|If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» PrivateCreator|body|string|false|The private creator to be used for private tags in `Replace`|
|» Remove|body|[string]|false|List of additional tags to be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Replace|body|object|false|Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|
|» Transcode|body|string|false|Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="anonymize-patient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="anonymize-patient-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Create ZIP archive

> Code samples

```bash
curl https://example.com/patients/string/archive
```

`GET /patients/{id}/archive`

Synchronously create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.

<h3 id="create-zip-archive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|query|string|false|Filename to set in the "Content-Disposition" HTTP header (including file extension)|
|transcode|query|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|
|id|path|string|true|Orthanc identifier of the patient of interest|

<h3 id="create-zip-archive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create ZIP archive

> Code samples

```bash
curl https://example.com/patients/string/archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Priority": 0,
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /patients/{id}/archive`

Create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL

> Body parameter

```json
{
  "Asynchronous": true,
  "Priority": 0,
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="create-zip-archive-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the patient of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Synchronous|body|boolean|false|If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.|
|» Transcode|body|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="create-zip-archive-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="create-zip-archive-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|Identifier of the job|
|Path|string|false|none|Path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## List attachments

> Code samples

```bash
curl https://example.com/patients/string/attachments \
  -H 'Accept: application/json'
```

`GET /patients/{id}/attachments`

Get the list of attachments that are associated with the given patient

<h3 id="list-attachments-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|string|false|If present, retrieve the attachments list and their numerical ids|
|id|path|string|true|Orthanc identifier of the patient of interest|

> Example responses

> 200 Response

```json
[]
```

<h3 id="list-attachments-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set attachment

> Code samples

```bash
curl https://example.com/patients/string/attachments/string \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json'
```

`PUT /patients/{id}/attachments/{name}`

Attach a file to the given DICOM patient. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).

> Body parameter

```json
null
```

<h3 id="set-attachment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the attachment, if this is not the first time this attachment is set.|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="set-attachment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete attachment

> Code samples

```bash
curl https://example.com/patients/string/attachments/string \
  -X DELETE
```

`DELETE /patients/{id}/attachments/{name}`

Delete an attachment associated with the given DICOM patient. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).

<h3 id="delete-attachment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the attachment, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="delete-attachment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Compress attachment

> Code samples

```bash
curl https://example.com/patients/string/attachments/string/compress \
  -X POST
```

`POST /patients/{id}/attachments/{name}/compress`

Change the compression scheme that is used to store an attachment.

<h3 id="compress-attachment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="compress-attachment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get attachment (no decompression)

> Code samples

```bash
curl https://example.com/patients/string/attachments/string/compressed-data
```

`GET /patients/{id}/attachments/{name}/compressed-data`

Get the (binary) content of one attachment associated with the given patient. The attachment will not be decompressed if `StorageCompression` is `true`.

<h3 id="get-attachment-no-decompression-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the metadata, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-attachment-no-decompression-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get MD5 of attachment on disk

> Code samples

```bash
curl https://example.com/patients/string/attachments/string/compressed-md5
```

`GET /patients/{id}/attachments/{name}/compressed-md5`

Get the MD5 hash of one attachment associated with the given patient, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.

<h3 id="get-md5-of-attachment-on-disk-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-md5-of-attachment-on-disk-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get size of attachment on disk

> Code samples

```bash
curl https://example.com/patients/string/attachments/string/compressed-size
```

`GET /patients/{id}/attachments/{name}/compressed-size`

Get the size of one attachment associated with the given patient, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.

<h3 id="get-size-of-attachment-on-disk-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-size-of-attachment-on-disk-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get attachment

> Code samples

```bash
curl https://example.com/patients/string/attachments/string/data
```

`GET /patients/{id}/attachments/{name}/data`

Get the (binary) content of one attachment associated with the given patient

<h3 id="get-attachment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the metadata, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-attachment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get info about the attachment

> Code samples

```bash
curl https://example.com/patients/string/attachments/string/info \
  -H 'Accept: application/json'
```

`GET /patients/{id}/attachments/{name}/info`

Get all the information about the attachment associated with the given patient

<h3 id="get-info-about-the-attachment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

> Example responses

> 200 Response

```json
{
  "CompressedMD5": "26f3fad6ca0c355f02d57c7fa6770248",
  "CompressedSize": 526970,
  "ContentType": 1,
  "UncompressedMD5": "26f3fad6ca0c355f02d57c7fa6770248",
  "UncompressedSize": 526970,
  "Uuid": "b7c99eb7-229f-464e-8f46-6878c8e79e5c"
}
```

<h3 id="get-info-about-the-attachment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Is attachment compressed?

> Code samples

```bash
curl https://example.com/patients/string/attachments/string/is-compressed
```

`GET /patients/{id}/attachments/{name}/is-compressed`

Test whether the attachment has been stored as a compressed file on the disk.

<h3 id="is-attachment-compressed-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="is-attachment-compressed-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get MD5 of attachment

> Code samples

```bash
curl https://example.com/patients/string/attachments/string/md5
```

`GET /patients/{id}/attachments/{name}/md5`

Get the MD5 hash of one attachment associated with the given patient

<h3 id="get-md5-of-attachment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-md5-of-attachment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get size of attachment

> Code samples

```bash
curl https://example.com/patients/string/attachments/string/size
```

`GET /patients/{id}/attachments/{name}/size`

Get the size of one attachment associated with the given patient

<h3 id="get-size-of-attachment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-size-of-attachment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Uncompress attachment

> Code samples

```bash
curl https://example.com/patients/string/attachments/string/uncompress \
  -X POST
```

`POST /patients/{id}/attachments/{name}/uncompress`

Change the compression scheme that is used to store an attachment.

<h3 id="uncompress-attachment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="uncompress-attachment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Verify attachment

> Code samples

```bash
curl https://example.com/patients/string/attachments/string/verify-md5 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /patients/{id}/attachments/{name}/verify-md5`

Verify that the attachment is not corrupted, by validating its MD5 hash

<h3 id="verify-attachment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

> Example responses

> 200 Response

```json
null
```

<h3 id="verify-attachment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get child instances

> Code samples

```bash
curl https://example.com/patients/string/instances \
  -H 'Accept: application/json'
```

`GET /patients/{id}/instances`

Get detailed information about the child instances of the DICOM patient whose Orthanc identifier is provided in the URL

<h3 id="get-child-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the patient of interest|

> Example responses

> 200 Response

```json
[
  {
    "FileSize": 526866,
    "FileUuid": "c14b2b87-53e2-420b-baf9-020cae34fedf",
    "ID": "e3dfd688-80e4743a-29c45f90-371ec4a4-04d18ae5",
    "IndexInSeries": 137,
    "MainDicomTags": {
      "AcquisitionNumber": "3",
      "ImagePositionPatient": "-96.3193359375\\-249.3193359375\\62",
      "InstanceNumber": "137",
      "SOPInstanceUID": "1.3.12.2.1107.5.1.4.54693.30000006053107175587500014881"
    },
    "{...}": "..."
  },
  {
    "FileSize": 526870,
    "FileUuid": "27cdb02f-500f-4b37-9ca1-058d8d4f649a",
    "ID": "4fecddf1-518346e4-4f30176b-c453b3d8-65899230",
    "IndexInSeries": 114,
    "MainDicomTags": {
      "AcquisitionNumber": "3",
      "ImagePositionPatient": "-96.3193359375\\-249.3193359375\\73.5",
      "InstanceNumber": "114",
      "SOPInstanceUID": "1.3.12.2.1107.5.1.4.54693.30000006053107175587500014858"
    },
    "{...}": "..."
  },
  {
    "FileSize": 526868,
    "FileUuid": "5a6334a8-e050-47e5-8832-531ee62aa9a7",
    "ID": "c9a55bc1-9e98ba4b-bc455dc3-24c4c525-1b171b6c",
    "IndexInSeries": 66,
    "MainDicomTags": {
      "AcquisitionNumber": "3",
      "ImagePositionPatient": "-96.3193359375\\-249.3193359375\\97.5",
      "InstanceNumber": "66",
      "SOPInstanceUID": "1.3.12.2.1107.5.1.4.54693.30000006053107175587500014810"
    },
    "{...}": "..."
  },
  {
    "FileSize": 526866,
    "FileUuid": "e6c09e08-8284-4416-a90f-67a7dc9f68f0",
    "ID": "135cca6f-4c099fdd-afc99251-f58a819b-5a0222eb",
    "IndexInSeries": 161,
    "MainDicomTags": {
      "AcquisitionNumber": "3",
      "ImagePositionPatient": "-96.3193359375\\-249.3193359375\\50",
      "InstanceNumber": "161",
      "SOPInstanceUID": "1.3.12.2.1107.5.1.4.54693.30000006053107175587500014905"
    },
    "{...}": "..."
  },
  {
    "FileSize": 526866,
    "FileUuid": "9eb33412-d1e9-4bb0-879b-5501db81d574",
    "ID": "719d58b1-2a259486-7cc5919d-68a2bd30-da2cd290",
    "IndexInSeries": 61,
    "MainDicomTags": {
      "AcquisitionNumber": "3",
      "ImagePositionPatient": "-96.3193359375\\-249.3193359375\\100",
      "InstanceNumber": "61",
      "SOPInstanceUID": "1.3.12.2.1107.5.1.4.54693.30000006053107175587500014805"
    },
    "{...}": "..."
  },
  "..."
]
```

<h3 id="get-child-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get tags of instances

> Code samples

```bash
curl https://example.com/patients/string/instances-tags \
  -H 'Accept: application/json'
```

`GET /patients/{id}/instances-tags`

Get the tags of all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL

<h3 id="get-tags-of-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignore-length|query|[string]|false|Also include the DICOM tags that are provided in this list, even if their associated value is long|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Orthanc identifier of the patient of interest|

> Example responses

> 200 Response

```json
{
  "011ead8d-f2508edd-da315604-80b002df-e678b796": {
    "0008,0005": {
      "Name": "SpecificCharacterSet",
      "Type": "String",
      "Value": "ISO_IR 100"
    },
    "0008,0008": {
      "Name": "ImageType",
      "Type": "String",
      "Value": "ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI"
    },
    "0008,0016": {
      "Name": "SOPClassUID",
      "Type": "String",
      "Value": "1.2.840.10008.5.1.4.1.1.2"
    },
    "0008,0018": {
      "Name": "SOPInstanceUID",
      "Type": "String",
      "Value": "1.3.12.2.1107.5.1.4.54693.30000006053107175587500014840"
    },
    "0008,0020": {
      "Name": "StudyDate",
      "Type": "String",
      "Value": "20060531"
    },
    "{...}": "..."
  },
  "01252811-30d1c47b-a8c03da5-73177742-48495192": {
    "0008,0005": {
      "Name": "SpecificCharacterSet",
      "Type": "String",
      "Value": "ISO_IR 100"
    },
    "0008,0008": {
      "Name": "ImageType",
      "Type": "String",
      "Value": "ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI"
    },
    "0008,0016": {
      "Name": "SOPClassUID",
      "Type": "String",
      "Value": "1.2.840.10008.5.1.4.1.1.2"
    },
    "0008,0018": {
      "Name": "SOPInstanceUID",
      "Type": "String",
      "Value": "1.3.12.2.1107.5.1.4.54693.30000006053107175587500014790"
    },
    "0008,0020": {
      "Name": "StudyDate",
      "Type": "String",
      "Value": "20060531"
    },
    "{...}": "..."
  },
  "04a30982-835a4b0a-3082b997-060f01f5-071a0f8d": {
    "0008,0005": {
      "Name": "SpecificCharacterSet",
      "Type": "String",
      "Value": "ISO_IR 100"
    },
    "0008,0008": {
      "Name": "ImageType",
      "Type": "String",
      "Value": "ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI"
    },
    "0008,0016": {
      "Name": "SOPClassUID",
      "Type": "String",
      "Value": "1.2.840.10008.5.1.4.1.1.2"
    },
    "0008,0018": {
      "Name": "SOPInstanceUID",
      "Type": "String",
      "Value": "1.3.12.2.1107.5.1.4.54693.30000006053107175587500014760"
    },
    "0008,0020": {
      "Name": "StudyDate",
      "Type": "String",
      "Value": "20060531"
    },
    "{...}": "..."
  },
  "04efd8b9-2ae1f3db-deb0f226-e3267002-6cd8fa3c": {
    "0008,0005": {
      "Name": "SpecificCharacterSet",
      "Type": "String",
      "Value": "ISO_IR 100"
    },
    "0008,0008": {
      "Name": "ImageType",
      "Type": "String",
      "Value": "ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI"
    },
    "0008,0016": {
      "Name": "SOPClassUID",
      "Type": "String",
      "Value": "1.2.840.10008.5.1.4.1.1.2"
    },
    "0008,0018": {
      "Name": "SOPInstanceUID",
      "Type": "String",
      "Value": "1.3.12.2.1107.5.1.4.54693.30000006053107175587500014832"
    },
    "0008,0020": {
      "Name": "StudyDate",
      "Type": "String",
      "Value": "20060531"
    },
    "{...}": "..."
  },
  "0df992f4-0a841d5c-aeb8cdda-9c1a0573-dbd49c3f": {
    "0008,0005": {
      "Name": "SpecificCharacterSet",
      "Type": "String",
      "Value": "ISO_IR 100"
    },
    "0008,0008": {
      "Name": "ImageType",
      "Type": "String",
      "Value": "ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI"
    },
    "0008,0016": {
      "Name": "SOPClassUID",
      "Type": "String",
      "Value": "1.2.840.10008.5.1.4.1.1.2"
    },
    "0008,0018": {
      "Name": "SOPInstanceUID",
      "Type": "String",
      "Value": "1.3.12.2.1107.5.1.4.54693.30000006053107175587500014882"
    },
    "0008,0020": {
      "Name": "StudyDate",
      "Type": "String",
      "Value": "20060531"
    },
    "{...}": "..."
  },
  "{...}": "..."
}
```

<h3 id="get-tags-of-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create DICOMDIR media

> Code samples

```bash
curl https://example.com/patients/string/media
```

`GET /patients/{id}/media`

Synchronously create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.

<h3 id="create-dicomdir-media-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|extended|query|string|false|If present, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*|
|filename|query|string|false|Filename to set in the "Content-Disposition" HTTP header (including file extension)|
|transcode|query|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|
|id|path|string|true|Orthanc identifier of the patient of interest|

<h3 id="create-dicomdir-media-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create DICOMDIR media

> Code samples

```bash
curl https://example.com/patients/string/media \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Extended": true,
    "Priority": 0,
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /patients/{id}/media`

Create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL

> Body parameter

```json
{
  "Asynchronous": true,
  "Extended": true,
  "Priority": 0,
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="create-dicomdir-media-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the patient of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.|
|» Extended|body|boolean|false|If `true`, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*. Default value is `false`.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Synchronous|body|boolean|false|If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.|
|» Transcode|body|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="create-dicomdir-media-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="create-dicomdir-media-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|Identifier of the job|
|Path|string|false|none|Path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## List metadata

> Code samples

```bash
curl https://example.com/patients/string/metadata \
  -H 'Accept: application/json'
```

`GET /patients/{id}/metadata`

Get the list of metadata that are associated with the given patient

<h3 id="list-metadata-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|If present, also retrieve the value of the individual metadata|
|id|path|string|true|Orthanc identifier of the patient of interest|

> Example responses

> 200 Response

```json
[
  "LastUpdate"
]
```

<h3 id="list-metadata-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get metadata

> Code samples

```bash
curl https://example.com/patients/string/metadata/string
```

`GET /patients/{id}/metadata/{name}`

Get the value of a metadata that is associated with the given patient

<h3 id="get-metadata-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the metadata, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the metadata, or its index (cf. `UserMetadata` configuration option)|

<h3 id="get-metadata-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the metadata, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Set metadata

> Code samples

```bash
curl https://example.com/patients/string/metadata/string \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /patients/{id}/metadata/{name}`

Set the value of some metadata in the given DICOM patient. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).

> Body parameter

```json
null
```

<h3 id="set-metadata-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the metadata, if this is not the first time this metadata is set.|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the metadata, or its index (cf. `UserMetadata` configuration option)|
|body|body|object|false|none|

<h3 id="set-metadata-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete metadata

> Code samples

```bash
curl https://example.com/patients/string/metadata/string \
  -X DELETE
```

`DELETE /patients/{id}/metadata/{name}`

Delete some metadata associated with the given DICOM patient. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).

<h3 id="delete-metadata-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the metadata, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.|
|id|path|string|true|Orthanc identifier of the patient of interest|
|name|path|string|true|The name of the metadata, or its index (cf. `UserMetadata` configuration option)|

<h3 id="delete-metadata-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Modify patient

> Code samples

```bash
curl https://example.com/patients/string/modify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Force": true,
    "Keep": [
      "string"
    ],
    "KeepSource": true,
    "Permissive": true,
    "Priority": 0,
    "PrivateCreator": "string",
    "Remove": [
      "string"
    ],
    "RemovePrivateTags": true,
    "Replace": {},
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /patients/{id}/modify`

Start a job that will modify all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series

> Body parameter

```json
{
  "Asynchronous": true,
  "Force": true,
  "Keep": [
    "string"
  ],
  "KeepSource": true,
  "Permissive": true,
  "Priority": 0,
  "PrivateCreator": "string",
  "Remove": [
    "string"
  ],
  "RemovePrivateTags": true,
  "Replace": {},
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="modify-patient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the patient of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» Force|body|boolean|false|Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world|
|» Keep|body|[string]|false|Keep the original value of the specified tags, to be chosen among the `StudyInstanceUID`, `SeriesInstanceUID` and `SOPInstanceUID` tags. Avoid this feature as much as possible, as this breaks the DICOM model of the real world.|
|» KeepSource|body|boolean|false|If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» PrivateCreator|body|string|false|The private creator to be used for private tags in `Replace`|
|» Remove|body|[string]|false|List of tags that must be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» RemovePrivateTags|body|boolean|false|Remove the private tags from the DICOM instances (defaults to `false`)|
|» Replace|body|object|false|Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|
|» Transcode|body|string|false|Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="modify-patient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="modify-patient-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Get patient module

> Code samples

```bash
curl https://example.com/patients/string/module \
  -H 'Accept: application/json'
```

`GET /patients/{id}/module`

Get the patient module of the DICOM patient whose Orthanc identifier is provided in the URL

<h3 id="get-patient-module-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignore-length|query|[string]|false|Also include the DICOM tags that are provided in this list, even if their associated value is long|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Orthanc identifier of the patient of interest|

> Example responses

> 200 Response

```json
{
  "0010,0010": {
    "Name": "PatientName",
    "Type": "String",
    "Value": "INCISIX"
  },
  "0010,0020": {
    "Name": "PatientID",
    "Type": "String",
    "Value": "SOtNwu"
  }
}
```

<h3 id="get-patient-module-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Is the patient protected against recycling?

> Code samples

```bash
curl https://example.com/patients/string/protected
```

`GET /patients/{id}/protected`

Is the patient protected against recycling?

<h3 id="is-the-patient-protected-against-recycling-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the patient of interest|

<h3 id="is-the-patient-protected-against-recycling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Protect one patient against recycling

> Code samples

```bash
curl https://example.com/patients/string/protected \
  -X PUT
```

`PUT /patients/{id}/protected`

Check out configuration options `MaximumStorageSize` and `MaximumPatientCount`

<h3 id="protect-one-patient-against-recycling-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the patient of interest|

<h3 id="protect-one-patient-against-recycling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reconstruct tags &amp; optionally files of patient

> Code samples

```bash
curl https://example.com/patients/string/reconstruct \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "ReconstructFiles": true
  }'
```

`POST /patients/{id}/reconstruct`

Reconstruct the main DICOM tags in DB of the patient whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.

> Body parameter

```json
{
  "ReconstructFiles": true
}
```

<h3 id="reconstruct-tags-optionally-files-of-patient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the patient of interest|
|body|body|object|false|none|
|» ReconstructFiles|body|boolean|false|Also reconstruct the files of the resources (e.g: apply IngestTranscoding, StorageCompression). 'false' by default. (New in Orthanc 1.11.0)|

<h3 id="reconstruct-tags-optionally-files-of-patient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get child series

> Code samples

```bash
curl https://example.com/patients/string/series \
  -H 'Accept: application/json'
```

`GET /patients/{id}/series`

Get detailed information about the child series of the DICOM patient whose Orthanc identifier is provided in the URL

<h3 id="get-child-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the patient of interest|

> Example responses

> 200 Response

```json
[
  {
    "ExpectedNumberOfInstances": null,
    "ID": "52cc572c-3ee31930-c4b6d5e7-16c786dc-97bc209b",
    "Instances": [
      "e3dfd688-80e4743a-29c45f90-371ec4a4-04d18ae5",
      "4fecddf1-518346e4-4f30176b-c453b3d8-65899230",
      "c9a55bc1-9e98ba4b-bc455dc3-24c4c525-1b171b6c",
      "135cca6f-4c099fdd-afc99251-f58a819b-5a0222eb",
      "719d58b1-2a259486-7cc5919d-68a2bd30-da2cd290",
      "..."
    ],
    "IsStable": true,
    "LastUpdate": "20180414T091542",
    "{...}": "..."
  }
]
```

<h3 id="get-child-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get shared tags

> Code samples

```bash
curl https://example.com/patients/string/shared-tags \
  -H 'Accept: application/json'
```

`GET /patients/{id}/shared-tags`

Extract the DICOM tags whose value is constant across all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL

<h3 id="get-shared-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Orthanc identifier of the patient of interest|

> Example responses

> 200 Response

```json
{
  "0008,0005": {
    "Name": "SpecificCharacterSet",
    "Type": "String",
    "Value": "ISO_IR 100"
  },
  "0008,0008": {
    "Name": "ImageType",
    "Type": "String",
    "Value": "ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI"
  },
  "0008,0016": {
    "Name": "SOPClassUID",
    "Type": "String",
    "Value": "1.2.840.10008.5.1.4.1.1.2"
  },
  "0008,0020": {
    "Name": "StudyDate",
    "Type": "String",
    "Value": "20060531"
  },
  "0008,0021": {
    "Name": "SeriesDate",
    "Type": "String",
    "Value": "20060531"
  },
  "{...}": "..."
}
```

<h3 id="get-shared-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get patient statistics

> Code samples

```bash
curl https://example.com/patients/string/statistics \
  -H 'Accept: application/json'
```

`GET /patients/{id}/statistics`

Get statistics about the given patient

<h3 id="get-patient-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the patient of interest|

> Example responses

> 200 Response

```json
{
  "CountInstances": 166,
  "CountSeries": 1,
  "CountStudies": 1,
  "DicomDiskSize": "87460012",
  "DicomDiskSizeMB": 83,
  "DicomUncompressedSize": "87460012",
  "DicomUncompressedSizeMB": 83,
  "DiskSize": "89640436",
  "DiskSizeMB": 85,
  "UncompressedSize": "89640436",
  "UncompressedSizeMB": 85
}
```

<h3 id="get-patient-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-patient-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CountInstances|number|false|none|Number of child instances within this patient|
|CountSeries|number|false|none|Number of child series within this patient|
|CountStudies|number|false|none|Number of child studies within this patient|
|DicomDiskSize|string|false|none|Size on the disk of the DICOM instances associated with the patient, expressed in bytes|
|DicomDiskSizeMB|number|false|none|Size on the disk of the DICOM instances associated with the patient, expressed in megabytes (MB)|
|DicomUncompressedSize|string|false|none|Size on the disk of the uncompressed DICOM instances associated with the patient, expressed in bytes|
|DicomUncompressedSizeMB|number|false|none|Size on the disk of the uncompressed DICOM instances associated with the patient, expressed in megabytes (MB)|
|DiskSize|string|false|none|Size of the patient on the disk in bytes, expressed as a string for 64bit compatibility with JSON|
|DiskSizeMB|number|false|none|Size of the patient on the disk, expressed in megabytes (MB)|
|UncompressedSize|string|false|none|Size of the patient after decompression in bytes, expressed as a string for 64bit compatibility with JSON|
|UncompressedSizeMB|number|false|none|Size of the patient after decompression, expressed in megabytes (MB). This is different from `DiskSizeMB` iff `StorageCompression` is `true`.|

<aside class="success">
This operation does not require authentication
</aside>

## Get child studies

> Code samples

```bash
curl https://example.com/patients/string/studies \
  -H 'Accept: application/json'
```

`GET /patients/{id}/studies`

Get detailed information about the child studies of the DICOM patient whose Orthanc identifier is provided in the URL

<h3 id="get-child-studies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the patient of interest|

> Example responses

> 200 Response

```json
[
  {
    "ID": "e98b9ac7-dd31ac40-ff046cb2-f0400d30-12f81d85",
    "IsStable": true,
    "LastUpdate": "20180414T091542",
    "MainDicomTags": {
      "AccessionNumber": "0",
      "InstitutionName": "dPJ",
      "ReferringPhysicianName": "YzTEkpkak0p0Tk5",
      "RequestedProcedureDescription": "CT2 tête, face, sinus",
      "StudyDate": "20060531",
      "{...}": "..."
    },
    "ParentPatient": "46e6332c-677825b6-202fcf7c-f787bc5f-7b07c382",
    "{...}": "..."
  }
]
```

<h3 id="get-child-studies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="orthanc-api-system">System</h1>

## List plugins

> Code samples

```bash
curl https://example.com/plugins \
  -H 'Accept: application/json'
```

`GET /plugins`

List all the installed plugins

> Example responses

> 200 Response

```json
[
  "explorer.js",
  "authorization",
  "connectivity-checks",
  "dicom-web",
  "gdcm",
  "indexer",
  "mysql-index",
  "mysql-storage",
  "neuro",
  "odbc-index",
  "odbc-storage",
  "postgresql-index",
  "postgresql-storage",
  "serve-folders",
  "stone-rtviewer",
  "stone-webviewer",
  "tcia",
  "transfers",
  "web-viewer",
  "worklists",
  "wsi"
]
```

<h3 id="list-plugins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## JavaScript extensions to Orthanc Explorer

> Code samples

```bash
curl https://example.com/plugins/explorer.js
```

`GET /plugins/explorer.js`

Get the JavaScript extensions that are installed by all the plugins using the `OrthancPluginExtendOrthancExplorer()` function of the plugin SDK. This route is for internal use of Orthanc Explorer.

<h3 id="javascript-extensions-to-orthanc-explorer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get plugin

> Code samples

```bash
curl https://example.com/plugins/string \
  -H 'Accept: application/json'
```

`GET /plugins/{id}`

Get system information about the plugin whose identifier is provided in the URL

<h3 id="get-plugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of the job of interest|

> Example responses

> 200 Response

```json
{
  "Description": "Implementation of DICOMweb (QIDO-RS, STOW-RS and WADO-RS) and WADO-URI.",
  "ExtendsOrthancExplorer": true,
  "ID": "dicom-web",
  "RootUri": "../dicom-web/app/client/index.html",
  "Version": "1.7"
}
```

<h3 id="get-plugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get database statistics

> Code samples

```bash
curl https://example.com/statistics \
  -H 'Accept: application/json'
```

`GET /statistics`

Get statistics related to the database of Orthanc

> Example responses

> 200 Response

```json
{
  "CountInstances": 2552,
  "CountPatients": 8,
  "CountSeries": 26,
  "CountStudies": 8,
  "TotalDiskSize": "1068132148",
  "TotalDiskSizeMB": 1018,
  "TotalUncompressedSize": "1068132148",
  "TotalUncompressedSizeMB": 1018
}
```

<h3 id="get-database-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-database-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CountInstances|number|false|none|Number of DICOM instances stored in Orthanc|
|CountPatients|number|false|none|Number of patients stored in Orthanc|
|CountSeries|number|false|none|Number of DICOM series stored in Orthanc|
|CountStudies|number|false|none|Number of DICOM studies stored in Orthanc|
|TotalDiskSize|string|false|none|Size of the storage area (in bytes)|
|TotalDiskSizeMB|number|false|none|Size of the storage area (in megabytes)|
|TotalUncompressedSize|string|false|none|Total size of all the files once uncompressed (in bytes). This corresponds to `TotalDiskSize` if no compression is enabled, cf. `StorageCompression` configuration option|
|TotalUncompressedSizeMB|number|false|none|Total size of all the files once uncompressed (in megabytes)|

<aside class="success">
This operation does not require authentication
</aside>

## Get system information

> Code samples

```bash
curl https://example.com/system \
  -H 'Accept: application/json'
```

`GET /system`

Get system information about Orthanc

> Example responses

> 200 Response

```json
{
  "ApiVersion": 16,
  "CheckRevisions": false,
  "DatabaseBackendPlugin": null,
  "DatabaseVersion": 6,
  "DicomAet": "ORTHANC",
  "DicomPort": 4242,
  "HttpPort": 8042,
  "IsHttpServerSecure": false,
  "Name": "Orthanc Demo",
  "PluginsEnabled": true,
  "StorageAreaPlugin": null,
  "Version": "1.10.1"
}
```

<h3 id="get-system-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-system-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiVersion|number|false|none|Version of the REST API|
|CheckRevisions|boolean|false|none|Whether Orthanc handle revisions of metadata and attachments to deal with multiple writers (new in Orthanc 1.9.2)|
|DatabaseBackendPlugin|string|false|none|Information about the installed database index plugin (`null` if no such plugin is installed)|
|DatabaseServerIdentifier|string|false|none|ID of the server in the database (when running multiple Orthanc on the same DB)|
|DatabaseVersion|number|false|none|Version of the database: https://book.orthanc-server.com/developers/db-versioning.html|
|DicomAet|string|false|none|The DICOM AET of Orthanc|
|DicomPort|number|false|none|The port to the DICOM server of Orthanc|
|HttpPort|number|false|none|The port to the HTTP server of Orthanc|
|IngestTranscoding|string|false|none|Whether instances are transcoded when ingested into Orthanc (`` if no transcoding is performed) (new in Orthanc 1.11.0)|
|IsHttpServerSecure|boolean|false|none|Whether the REST API is properly secured (assuming no reverse proxy is in use): https://book.orthanc-server.com/faq/security.html#securing-the-http-server|
|MainDicomTags|object|false|none|The list of MainDicomTags saved in DB for each resource level (new in Orthanc 1.11.0)|
|MaximumStorageMode|string|false|none|The configured MaximumStorageMode (new in Orthanc 1.11.3)|
|MaximumStorageSize|number|false|none|The configured MaximumStorageSize in MB (new in Orthanc 1.11.3)|
|Name|string|false|none|The name of the Orthanc server, cf. the `Name` configuration option|
|OverwriteInstances|boolean|false|none|Whether instances are overwritten when re-ingested (new in Orthanc 1.11.0)|
|PluginsEnabled|boolean|false|none|Whether Orthanc was built with support for plugins|
|StorageAreaPlugin|string|false|none|Information about the installed storage area plugin (`null` if no such plugin is installed)|
|StorageCompression|boolean|false|none|Whether storage compression is enabled (new in Orthanc 1.11.0)|
|Version|string|false|none|Version of Orthanc|

<aside class="success">
This operation does not require authentication
</aside>

## Get accepted transfer syntaxes

> Code samples

```bash
curl https://example.com/tools/accepted-transfer-syntaxes \
  -H 'Accept: application/json'
```

`GET /tools/accepted-transfer-syntaxes`

Get the list of UIDs of the DICOM transfer syntaxes that are accepted by Orthanc C-STORE SCP. This corresponds to the configuration options `AcceptedTransferSyntaxes` and `XXXTransferSyntaxAccepted`.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-accepted-transfer-syntaxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set accepted transfer syntaxes

> Code samples

```bash
curl https://example.com/tools/accepted-transfer-syntaxes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PUT /tools/accepted-transfer-syntaxes`

Set the DICOM transfer syntaxes that accepted by Orthanc C-STORE SCP

> Body parameter

```json
null
```

<h3 id="set-accepted-transfer-syntaxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="set-accepted-transfer-syntaxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Anonymize a set of resources

> Code samples

```bash
curl https://example.com/tools/bulk-anonymize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "DicomVersion": "string",
    "Force": true,
    "Keep": [
      "string"
    ],
    "KeepPrivateTags": true,
    "KeepSource": true,
    "Permissive": true,
    "Priority": 0,
    "PrivateCreator": "string",
    "Remove": [
      "string"
    ],
    "Replace": {},
    "Resources": [
      "string"
    ],
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /tools/bulk-anonymize`

Start a job that will anonymize all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.

> Body parameter

```json
{
  "Asynchronous": true,
  "DicomVersion": "string",
  "Force": true,
  "Keep": [
    "string"
  ],
  "KeepPrivateTags": true,
  "KeepSource": true,
  "Permissive": true,
  "Priority": 0,
  "PrivateCreator": "string",
  "Remove": [
    "string"
  ],
  "Replace": {},
  "Resources": [
    "string"
  ],
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="anonymize-a-set-of-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» DicomVersion|body|string|false|Version of the DICOM standard to be used for anonymization. Check out configuration option `DeidentifyLogsDicomVersion` for possible values.|
|» Force|body|boolean|false|Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world|
|» Keep|body|[string]|false|List of DICOM tags whose value must not be destroyed by the anonymization. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» KeepPrivateTags|body|boolean|false|Keep the private tags from the DICOM instances (defaults to `false`)|
|» KeepSource|body|boolean|false|If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» PrivateCreator|body|string|false|The private creator to be used for private tags in `Replace`|
|» Remove|body|[string]|false|List of additional tags to be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Replace|body|object|false|Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Resources|body|[string]|false|List of the Orthanc identifiers of the patients/studies/series/instances of interest.|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|
|» Transcode|body|string|false|Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="anonymize-a-set-of-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="anonymize-a-set-of-resources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Describe a set of resources

> Code samples

```bash
curl https://example.com/tools/bulk-content \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "Full": true,
    "Level": "string",
    "Metadata": true,
    "Resources": [
      "string"
    ],
    "Short": true
  }'
```

`POST /tools/bulk-content`

Get the content all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field, in one single call.

> Body parameter

```json
{
  "Full": true,
  "Level": "string",
  "Metadata": true,
  "Resources": [
    "string"
  ],
  "Short": true
}
```

<h3 id="describe-a-set-of-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» Full|body|boolean|false|If set to `true`, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|» Level|body|string|false|This optional argument specifies the level of interest (can be `Patient`, `Study`, `Series` or `Instance`). Orthanc will loop over the items inside `Resources`, and explore upward or downward in the DICOM hierarchy in order to find the level of interest.|
|» Metadata|body|boolean|false|If set to `true` (default value), the metadata associated with the resources will also be retrieved.|
|» Resources|body|[string]|false|List of the Orthanc identifiers of the patients/studies/series/instances of interest.|
|» Short|body|boolean|false|If set to `true`, report the DICOM tags in hexadecimal format|

<h3 id="describe-a-set-of-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a set of resources

> Code samples

```bash
curl https://example.com/tools/bulk-delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "Resources": [
      "string"
    ]
  }'
```

`POST /tools/bulk-delete`

Delete all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.

> Body parameter

```json
{
  "Resources": [
    "string"
  ]
}
```

<h3 id="delete-a-set-of-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» Resources|body|[string]|false|List of the Orthanc identifiers of the patients/studies/series/instances of interest.|

<h3 id="delete-a-set-of-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Modify a set of resources

> Code samples

```bash
curl https://example.com/tools/bulk-modify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Force": true,
    "Keep": [
      "string"
    ],
    "KeepSource": true,
    "Level": "string",
    "Permissive": true,
    "Priority": 0,
    "PrivateCreator": "string",
    "Remove": [
      "string"
    ],
    "RemovePrivateTags": true,
    "Replace": {},
    "Resources": [
      "string"
    ],
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /tools/bulk-modify`

Start a job that will modify all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.

> Body parameter

```json
{
  "Asynchronous": true,
  "Force": true,
  "Keep": [
    "string"
  ],
  "KeepSource": true,
  "Level": "string",
  "Permissive": true,
  "Priority": 0,
  "PrivateCreator": "string",
  "Remove": [
    "string"
  ],
  "RemovePrivateTags": true,
  "Replace": {},
  "Resources": [
    "string"
  ],
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="modify-a-set-of-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» Force|body|boolean|false|Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world|
|» Keep|body|[string]|false|Keep the original value of the specified tags, to be chosen among the `StudyInstanceUID`, `SeriesInstanceUID` and `SOPInstanceUID` tags. Avoid this feature as much as possible, as this breaks the DICOM model of the real world.|
|» KeepSource|body|boolean|false|If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.|
|» Level|body|string|false|Level of the modification (`Patient`, `Study`, `Series` or `Instance`). If absent, the level defaults to `Instance`, but is set to `Patient` if `PatientID` is modified, to `Study` if `StudyInstanceUID` is modified, or to `Series` if `SeriesInstancesUID` is modified. (new in Orthanc 1.9.7)|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» PrivateCreator|body|string|false|The private creator to be used for private tags in `Replace`|
|» Remove|body|[string]|false|List of tags that must be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» RemovePrivateTags|body|boolean|false|Remove the private tags from the DICOM instances (defaults to `false`)|
|» Replace|body|object|false|Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Resources|body|[string]|false|List of the Orthanc identifiers of the patients/studies/series/instances of interest.|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|
|» Transcode|body|string|false|Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="modify-a-set-of-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="modify-a-set-of-resources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Create ZIP archive

> Code samples

```bash
curl https://example.com/tools/create-archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Priority": 0,
    "Resources": [
      "string"
    ],
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /tools/create-archive`

Create a ZIP archive containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body

> Body parameter

```json
{
  "Asynchronous": true,
  "Priority": 0,
  "Resources": [
    "string"
  ],
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="create-zip-archive-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Resources|body|[string]|false|The list of Orthanc identifiers of interest.|
|» Synchronous|body|boolean|false|If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.|
|» Transcode|body|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="create-zip-archive-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="create-zip-archive-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|Identifier of the job|
|Path|string|false|none|Path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Create one DICOM instance

> Code samples

```bash
curl https://example.com/tools/create-dicom \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Content": "string",
    "Force": true,
    "InterpretBinaryTags": true,
    "Parent": "string",
    "PrivateCreator": "string",
    "Tags": {}
  }'
```

`POST /tools/create-dicom`

Create one DICOM instance, and store it into Orthanc

> Body parameter

```json
{
  "Content": "string",
  "Force": true,
  "InterpretBinaryTags": true,
  "Parent": "string",
  "PrivateCreator": "string",
  "Tags": {}
}
```

<h3 id="create-one-dicom-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» Content|body|string|false|This field can be used to embed an image (pixel data) or a PDF inside the created DICOM instance. The PNG image, the JPEG image or the PDF file must be provided using their [data URI scheme encoding](https://en.wikipedia.org/wiki/Data_URI_scheme). This field can possibly contain a JSON array, in which case a DICOM series is created containing one DICOM instance for each item in the `Content` field.|
|» Force|body|boolean|false|Avoid the consistency checks for the DICOM tags that enforce the DICOM model of the real-world. You can notably use this flag if you need to manually set the tags `StudyInstanceUID`, `SeriesInstanceUID`, or `SOPInstanceUID`. Be careful with this feature.|
|» InterpretBinaryTags|body|boolean|false|If some value in the `Tags` associative array is formatted according to some [data URI scheme encoding](https://en.wikipedia.org/wiki/Data_URI_scheme), whether this value is decoded to a binary value or kept as such (`true` by default)|
|» Parent|body|string|false|If present, the newly created instance will be attached to the parent DICOM resource whose Orthanc identifier is contained in this field. The DICOM tags of the parent modules in the DICOM hierarchy will be automatically copied to the newly created instance.|
|» PrivateCreator|body|string|false|The private creator to be used for private tags in `Tags`|
|» Tags|body|object|false|Associative array containing the tags of the new instance to be created|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="create-one-dicom-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="create-one-dicom-instance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|Orthanc identifier of the newly created instance|
|Path|string|false|none|Path to access the instance in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Create DICOMDIR media

> Code samples

```bash
curl https://example.com/tools/create-media \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Extended": true,
    "Priority": 0,
    "Resources": [
      "string"
    ],
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /tools/create-media`

Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body

> Body parameter

```json
{
  "Asynchronous": true,
  "Extended": true,
  "Priority": 0,
  "Resources": [
    "string"
  ],
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="create-dicomdir-media-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.|
|» Extended|body|boolean|false|If `true`, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*. Default value is `false`.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Resources|body|[string]|false|The list of Orthanc identifiers of interest.|
|» Synchronous|body|boolean|false|If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.|
|» Transcode|body|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="create-dicomdir-media-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="create-dicomdir-media-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|Identifier of the job|
|Path|string|false|none|Path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Create DICOMDIR media

> Code samples

```bash
curl https://example.com/tools/create-media-extended \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Extended": true,
    "Priority": 0,
    "Resources": [
      "string"
    ],
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /tools/create-media-extended`

Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body

> Body parameter

```json
{
  "Asynchronous": true,
  "Extended": true,
  "Priority": 0,
  "Resources": [
    "string"
  ],
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="create-dicomdir-media-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.|
|» Extended|body|boolean|false|If `true`, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*. Default value is `true`.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Resources|body|[string]|false|The list of Orthanc identifiers of interest.|
|» Synchronous|body|boolean|false|If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.|
|» Transcode|body|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="create-dicomdir-media-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="create-dicomdir-media-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|Identifier of the job|
|Path|string|false|none|Path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Get default encoding

> Code samples

```bash
curl https://example.com/tools/default-encoding
```

`GET /tools/default-encoding`

Get the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.

<h3 id="get-default-encoding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set default encoding

> Code samples

```bash
curl https://example.com/tools/default-encoding \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /tools/default-encoding`

Change the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.

> Body parameter

```json
null
```

<h3 id="set-default-encoding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="set-default-encoding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get DICOM conformance

> Code samples

```bash
curl https://example.com/tools/dicom-conformance
```

`GET /tools/dicom-conformance`

Get the DICOM conformance statement of Orthanc

<h3 id="get-dicom-conformance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Trigger C-ECHO SCU

> Code samples

```bash
curl https://example.com/tools/dicom-echo \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "AET": "string",
    "CheckFind": true,
    "Host": "string",
    "Manufacturer": "string",
    "Port": 0,
    "Timeout": 0,
    "UseDicomTls": true
  }'
```

`POST /tools/dicom-echo`

Trigger C-ECHO SCU command against a DICOM modality described in the POST body, without having to register the modality in some `/modalities/{id}` (new in Orthanc 1.8.1)

> Body parameter

```json
{
  "AET": "string",
  "CheckFind": true,
  "Host": "string",
  "Manufacturer": "string",
  "Port": 0,
  "Timeout": 0,
  "UseDicomTls": true
}
```

<h3 id="trigger-c-echo-scu-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» AET|body|string|false|AET of the remote DICOM modality|
|» CheckFind|body|boolean|false|Issue a dummy C-FIND command after the C-GET SCU, in order to check whether the remote modality knows about Orthanc. This field defaults to the value of the `DicomEchoChecksFind` configuration option. New in Orthanc 1.8.1.|
|» Host|body|string|false|Host address of the remote DICOM modality (typically, an IP address)|
|» Manufacturer|body|string|false|Manufacturer of the remote DICOM modality (check configuration option `DicomModalities` for possible values|
|» Port|body|number|false|TCP port of the remote DICOM modality|
|» Timeout|body|number|false|Timeout for the C-ECHO command, in seconds|
|» UseDicomTls|body|boolean|false|Whether to use DICOM TLS in the SCU connection initiated by Orthanc (new in Orthanc 1.9.0)|

<h3 id="trigger-c-echo-scu-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Execute Lua script

> Code samples

```bash
curl https://example.com/tools/execute-script \
  -X POST \
  -H 'Content-Type: text/plain'
```

`POST /tools/execute-script`

Execute the provided Lua script by the Orthanc server. This is very insecure for Orthanc servers that are remotely accessible, cf. configuration option `ExecuteLuaEnabled`

> Body parameter

```json
null
```

<h3 id="execute-lua-script-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="execute-lua-script-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Look for local resources

> Code samples

```bash
curl https://example.com/tools/find \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "CaseSensitive": true,
    "Expand": true,
    "Full": true,
    "Level": "string",
    "Limit": 0,
    "Query": {},
    "RequestedTags": [
      "string"
    ],
    "Short": true,
    "Since": 0
  }'
```

`POST /tools/find`

This URI can be used to perform a search on the content of the local Orthanc server, in a way that is similar to querying remote DICOM modalities using C-FIND SCU: https://book.orthanc-server.com/users/rest.html#performing-finds-within-orthanc

> Body parameter

```json
{
  "CaseSensitive": true,
  "Expand": true,
  "Full": true,
  "Level": "string",
  "Limit": 0,
  "Query": {},
  "RequestedTags": [
    "string"
  ],
  "Short": true,
  "Since": 0
}
```

<h3 id="look-for-local-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» CaseSensitive|body|boolean|false|Enable case-sensitive search for PN value representations (defaults to configuration option `CaseSensitivePN`)|
|» Expand|body|boolean|false|Also retrieve the content of the matching resources, not only their Orthanc identifiers|
|» Full|body|boolean|false|If set to `true`, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|» Level|body|string|false|Level of the query (`Patient`, `Study`, `Series` or `Instance`)|
|» Limit|body|number|false|Limit the number of reported resources|
|» Query|body|object|false|Associative array containing the filter on the values of the DICOM tags|
|» RequestedTags|body|[string]|false|A list of DICOM tags to include in the response (applicable only if "Expand" is set to true).  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return all Main Dicom Tags to keep backward compatibility with Orthanc prior to 1.11.0.|
|» Short|body|boolean|false|If set to `true`, report the DICOM tags in hexadecimal format|
|» Since|body|number|false|Show only the resources since the provided index (in conjunction with `Limit`)|

> Example responses

> 200 Response

```json
null
```

<h3 id="look-for-local-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Generate an identifier

> Code samples

```bash
curl 'https://example.com/tools/generate-uid?level=string'
```

`GET /tools/generate-uid`

Generate a random DICOM identifier

<h3 id="generate-an-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|level|query|string|true|Type of DICOM resource among: `patient`, `study`, `series` or `instance`|

<h3 id="generate-an-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Invalidate DICOM-as-JSON summaries

> Code samples

```bash
curl https://example.com/tools/invalidate-tags \
  -X POST
```

`POST /tools/invalidate-tags`

Remove all the attachments of the type "DICOM-as-JSON" that are associated will all the DICOM instances stored in Orthanc. These summaries will be automatically re-created on the next access. This is notably useful after changes to the `Dictionary` configuration option. https://book.orthanc-server.com/faq/orthanc-storage.html#storage-area

<h3 id="invalidate-dicom-as-json-summaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Look for DICOM identifiers

> Code samples

```bash
curl https://example.com/tools/lookup \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json'
```

`POST /tools/lookup`

This URI can be used to convert one DICOM identifier to a list of matching Orthanc resources

> Body parameter

```json
null
```

<h3 id="look-for-dicom-identifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="look-for-dicom-identifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Are metrics collected?

> Code samples

```bash
curl https://example.com/tools/metrics
```

`GET /tools/metrics`

Returns a Boolean specifying whether Prometheus metrics are collected and exposed at `/tools/metrics-prometheus`

<h3 id="are-metrics-collected-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Enable collection of metrics

> Code samples

```bash
curl https://example.com/tools/metrics \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /tools/metrics`

Enable or disable the collection and publication of metrics at `/tools/metrics-prometheus`

> Body parameter

```json
null
```

<h3 id="enable-collection-of-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="enable-collection-of-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get usage metrics

> Code samples

```bash
curl https://example.com/tools/metrics-prometheus
```

`GET /tools/metrics-prometheus`

Get usage metrics of Orthanc in the Prometheus file format (OpenMetrics): https://book.orthanc-server.com/users/advanced-rest.html#instrumentation-with-prometheus

> Example responses

> 200 Response

```text
orthanc_count_instances 2552 1675430423655
orthanc_count_patients 8 1675430423655
orthanc_count_series 26 1675430423655
orthanc_count_studies 8 1675430423655
orthanc_dicom_cache_count 285 1675420129748
orthanc_dicom_cache_size 127.721069 1675420129748
orthanc_disk_size_mb 1018.65021 1675430423655
orthanc_jobs_completed 10 1675430423655
orthanc_jobs_failed 0 1675430423655
orthanc_jobs_pending 0 1675430423655
orthanc_jobs_running 0 1675430423655
orthanc_jobs_success 10 1675430423655
orthanc_rest_api_active_requests 1 1675430423654
orthanc_rest_api_duration_ms 415 1675430412272
orthanc_storage_read_duration_ms 0 1675430411860
orthanc_uncompressed_size_mb 1018.65021 1675430423655

```

<h3 id="get-usage-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get UTC time

> Code samples

```bash
curl https://example.com/tools/now
```

`GET /tools/now`

Get UTC time

> Example responses

> 200 Response

```text
20230203T132024
```

<h3 id="get-utc-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get local time

> Code samples

```bash
curl https://example.com/tools/now-local
```

`GET /tools/now-local`

Get local time

> Example responses

> 200 Response

```text
20230203T132025
```

<h3 id="get-local-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Reconstruct all the index

> Code samples

```bash
curl https://example.com/tools/reconstruct \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "ReconstructFiles": true
  }'
```

`POST /tools/reconstruct`

Reconstruct the index of all the tags of all the DICOM instances that are stored in Orthanc. This is notably useful after the deletion of resources whose children resources have inconsistent values with their sibling resources. Beware that this is a highly time-consuming operation, as all the DICOM instances will be parsed again, and as all the Orthanc index will be regenerated. If you have a large database to process, it is advised to use the Housekeeper plugin to perform this action resource by resource

> Body parameter

```json
{
  "ReconstructFiles": true
}
```

<h3 id="reconstruct-all-the-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» ReconstructFiles|body|boolean|false|Also reconstruct the files of the resources (e.g: apply IngestTranscoding, StorageCompression). 'false' by default. (New in Orthanc 1.11.0)|

<h3 id="reconstruct-all-the-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Restart Orthanc

> Code samples

```bash
curl https://example.com/tools/reset \
  -X POST
```

`POST /tools/reset`

Restart Orthanc

<h3 id="restart-orthanc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Shutdown Orthanc

> Code samples

```bash
curl https://example.com/tools/shutdown \
  -X POST
```

`POST /tools/shutdown`

Shutdown Orthanc

<h3 id="shutdown-orthanc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Is unknown SOP class accepted?

> Code samples

```bash
curl https://example.com/tools/unknown-sop-class-accepted
```

`GET /tools/unknown-sop-class-accepted`

Shall Orthanc C-STORE SCP accept DICOM instances with an unknown SOP class UID?

<h3 id="is-unknown-sop-class-accepted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set unknown SOP class accepted

> Code samples

```bash
curl https://example.com/tools/unknown-sop-class-accepted \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /tools/unknown-sop-class-accepted`

Set whether Orthanc C-STORE SCP should accept DICOM instances with an unknown SOP class UID

> Body parameter

```json
null
```

<h3 id="set-unknown-sop-class-accepted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="set-unknown-sop-class-accepted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="orthanc-api-series">Series</h1>

## List the available series

> Code samples

```bash
curl https://example.com/series \
  -H 'Accept: application/json'
```

`GET /series`

List the Orthanc identifiers of all the available DICOM series

<h3 id="list-the-available-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|If present, retrieve detailed information about the individual series|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|limit|query|number|false|Limit the number of results|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|since|query|number|false|Show only the resources since the provided index|

> Example responses

> 200 Response

```json
[
  "318603c5-03e8cffc-a82b6ee1-3ccd3c1e-18d7e3bb",
  "7124dba7-09803f33-98b73826-33f14632-ea842d29"
]
```

<h3 id="list-the-available-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get information about some series

> Code samples

```bash
curl https://example.com/series/string \
  -H 'Accept: application/json'
```

`GET /series/{id}`

Get detailed information about the DICOM series whose Orthanc identifier is provided in the URL

<h3 id="get-information-about-some-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the series of interest|

> Example responses

> 200 Response

```json
{
  "ExpectedNumberOfInstances": null,
  "ID": "37836232-d13a2350-fa1dedc5-962b31aa-010f8e52",
  "Instances": [
    "6582b1c0-292ad5ab-ba0f088f-f7a1766f-9a29a54f"
  ],
  "IsStable": true,
  "LastUpdate": "20180414T091542",
  "MainDicomTags": {
    "ImageOrientationPatient": "0\\1\\0\\0\\0\\-1",
    "Manufacturer": "Philips",
    "Modality": "CT",
    "PerformedProcedureStepDescription": "CT2 tête, face, sinus",
    "ProtocolName": "COU 2 mm/Neck/Sv",
    "SeriesInstanceUID": "1.2.840.113704.1.111.5692.1127828999.2",
    "SeriesNumber": "2276",
    "StationName": "ctrad"
  },
  "ParentStudy": "49974143-ec23cb52-6b2a1c46-14d5daa0-0822ce1a",
  "Status": "Unknown",
  "Type": "Series"
}
```

<h3 id="get-information-about-some-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete some series

> Code samples

```bash
curl https://example.com/series/string \
  -X DELETE
```

`DELETE /series/{id}`

Delete the DICOM series whose Orthanc identifier is provided in the URL

<h3 id="delete-some-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the series of interest|

<h3 id="delete-some-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Anonymize series

> Code samples

```bash
curl https://example.com/series/string/anonymize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "DicomVersion": "string",
    "Force": true,
    "Keep": [
      "string"
    ],
    "KeepPrivateTags": true,
    "KeepSource": true,
    "Permissive": true,
    "Priority": 0,
    "PrivateCreator": "string",
    "Remove": [
      "string"
    ],
    "Replace": {},
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /series/{id}/anonymize`

Start a job that will anonymize all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series

> Body parameter

```json
{
  "Asynchronous": true,
  "DicomVersion": "string",
  "Force": true,
  "Keep": [
    "string"
  ],
  "KeepPrivateTags": true,
  "KeepSource": true,
  "Permissive": true,
  "Priority": 0,
  "PrivateCreator": "string",
  "Remove": [
    "string"
  ],
  "Replace": {},
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="anonymize-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the series of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» DicomVersion|body|string|false|Version of the DICOM standard to be used for anonymization. Check out configuration option `DeidentifyLogsDicomVersion` for possible values.|
|» Force|body|boolean|false|Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world|
|» Keep|body|[string]|false|List of DICOM tags whose value must not be destroyed by the anonymization. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» KeepPrivateTags|body|boolean|false|Keep the private tags from the DICOM instances (defaults to `false`)|
|» KeepSource|body|boolean|false|If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» PrivateCreator|body|string|false|The private creator to be used for private tags in `Replace`|
|» Remove|body|[string]|false|List of additional tags to be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Replace|body|object|false|Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|
|» Transcode|body|string|false|Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="anonymize-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="anonymize-series-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Create ZIP archive

> Code samples

```bash
curl https://example.com/series/string/archive
```

`GET /series/{id}/archive`

Synchronously create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.

<h3 id="create-zip-archive-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|query|string|false|Filename to set in the "Content-Disposition" HTTP header (including file extension)|
|transcode|query|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|
|id|path|string|true|Orthanc identifier of the series of interest|

<h3 id="create-zip-archive-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create ZIP archive

> Code samples

```bash
curl https://example.com/series/string/archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Priority": 0,
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /series/{id}/archive`

Create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL

> Body parameter

```json
{
  "Asynchronous": true,
  "Priority": 0,
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="create-zip-archive-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the series of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Synchronous|body|boolean|false|If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.|
|» Transcode|body|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="create-zip-archive-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="create-zip-archive-4-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|Identifier of the job|
|Path|string|false|none|Path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## List attachments

> Code samples

```bash
curl https://example.com/series/string/attachments \
  -H 'Accept: application/json'
```

`GET /series/{id}/attachments`

Get the list of attachments that are associated with the given series

<h3 id="list-attachments-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|string|false|If present, retrieve the attachments list and their numerical ids|
|id|path|string|true|Orthanc identifier of the series of interest|

> Example responses

> 200 Response

```json
[]
```

<h3 id="list-attachments-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set attachment

> Code samples

```bash
curl https://example.com/series/string/attachments/string \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json'
```

`PUT /series/{id}/attachments/{name}`

Attach a file to the given DICOM series. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).

> Body parameter

```json
null
```

<h3 id="set-attachment-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the attachment, if this is not the first time this attachment is set.|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="set-attachment-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete attachment

> Code samples

```bash
curl https://example.com/series/string/attachments/string \
  -X DELETE
```

`DELETE /series/{id}/attachments/{name}`

Delete an attachment associated with the given DICOM series. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).

<h3 id="delete-attachment-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the attachment, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="delete-attachment-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Compress attachment

> Code samples

```bash
curl https://example.com/series/string/attachments/string/compress \
  -X POST
```

`POST /series/{id}/attachments/{name}/compress`

Change the compression scheme that is used to store an attachment.

<h3 id="compress-attachment-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="compress-attachment-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get attachment (no decompression)

> Code samples

```bash
curl https://example.com/series/string/attachments/string/compressed-data
```

`GET /series/{id}/attachments/{name}/compressed-data`

Get the (binary) content of one attachment associated with the given series. The attachment will not be decompressed if `StorageCompression` is `true`.

<h3 id="get-attachment-no-decompression-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the metadata, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-attachment-no-decompression-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get MD5 of attachment on disk

> Code samples

```bash
curl https://example.com/series/string/attachments/string/compressed-md5
```

`GET /series/{id}/attachments/{name}/compressed-md5`

Get the MD5 hash of one attachment associated with the given series, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.

<h3 id="get-md5-of-attachment-on-disk-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-md5-of-attachment-on-disk-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get size of attachment on disk

> Code samples

```bash
curl https://example.com/series/string/attachments/string/compressed-size
```

`GET /series/{id}/attachments/{name}/compressed-size`

Get the size of one attachment associated with the given series, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.

<h3 id="get-size-of-attachment-on-disk-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-size-of-attachment-on-disk-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get attachment

> Code samples

```bash
curl https://example.com/series/string/attachments/string/data
```

`GET /series/{id}/attachments/{name}/data`

Get the (binary) content of one attachment associated with the given series

<h3 id="get-attachment-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the metadata, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-attachment-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get info about the attachment

> Code samples

```bash
curl https://example.com/series/string/attachments/string/info \
  -H 'Accept: application/json'
```

`GET /series/{id}/attachments/{name}/info`

Get all the information about the attachment associated with the given series

<h3 id="get-info-about-the-attachment-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

> Example responses

> 200 Response

```json
{
  "CompressedMD5": "26f3fad6ca0c355f02d57c7fa6770248",
  "CompressedSize": 526970,
  "ContentType": 1,
  "UncompressedMD5": "26f3fad6ca0c355f02d57c7fa6770248",
  "UncompressedSize": 526970,
  "Uuid": "b7c99eb7-229f-464e-8f46-6878c8e79e5c"
}
```

<h3 id="get-info-about-the-attachment-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Is attachment compressed?

> Code samples

```bash
curl https://example.com/series/string/attachments/string/is-compressed
```

`GET /series/{id}/attachments/{name}/is-compressed`

Test whether the attachment has been stored as a compressed file on the disk.

<h3 id="is-attachment-compressed-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="is-attachment-compressed-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get MD5 of attachment

> Code samples

```bash
curl https://example.com/series/string/attachments/string/md5
```

`GET /series/{id}/attachments/{name}/md5`

Get the MD5 hash of one attachment associated with the given series

<h3 id="get-md5-of-attachment-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-md5-of-attachment-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get size of attachment

> Code samples

```bash
curl https://example.com/series/string/attachments/string/size
```

`GET /series/{id}/attachments/{name}/size`

Get the size of one attachment associated with the given series

<h3 id="get-size-of-attachment-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-size-of-attachment-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Uncompress attachment

> Code samples

```bash
curl https://example.com/series/string/attachments/string/uncompress \
  -X POST
```

`POST /series/{id}/attachments/{name}/uncompress`

Change the compression scheme that is used to store an attachment.

<h3 id="uncompress-attachment-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="uncompress-attachment-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Verify attachment

> Code samples

```bash
curl https://example.com/series/string/attachments/string/verify-md5 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /series/{id}/attachments/{name}/verify-md5`

Verify that the attachment is not corrupted, by validating its MD5 hash

<h3 id="verify-attachment-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

> Example responses

> 200 Response

```json
null
```

<h3 id="verify-attachment-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get child instances

> Code samples

```bash
curl https://example.com/series/string/instances \
  -H 'Accept: application/json'
```

`GET /series/{id}/instances`

Get detailed information about the child instances of the DICOM series whose Orthanc identifier is provided in the URL

<h3 id="get-child-instances-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the series of interest|

> Example responses

> 200 Response

```json
[
  {
    "FileSize": 368852,
    "FileUuid": "9016272a-ee8c-41b2-afc6-dcfe06dd3be8",
    "ID": "6582b1c0-292ad5ab-ba0f088f-f7a1766f-9a29a54f",
    "IndexInSeries": 1,
    "MainDicomTags": {
      "ImagePositionPatient": "0\\-159\\-425.915649",
      "InstanceCreationDate": "20050927",
      "InstanceCreationTime": "155030.000000",
      "InstanceNumber": "1",
      "SOPInstanceUID": "1.2.840.113704.7.1.1.6632.1127829031.2"
    },
    "{...}": "..."
  }
]
```

<h3 id="get-child-instances-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get tags of instances

> Code samples

```bash
curl https://example.com/series/string/instances-tags \
  -H 'Accept: application/json'
```

`GET /series/{id}/instances-tags`

Get the tags of all the child instances of the DICOM series whose Orthanc identifier is provided in the URL

<h3 id="get-tags-of-instances-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignore-length|query|[string]|false|Also include the DICOM tags that are provided in this list, even if their associated value is long|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Orthanc identifier of the series of interest|

> Example responses

> 200 Response

```json
{
  "6582b1c0-292ad5ab-ba0f088f-f7a1766f-9a29a54f": {
    "0008,0005": {
      "Name": "SpecificCharacterSet",
      "Type": "String",
      "Value": "ISO_IR 100"
    },
    "0008,0008": {
      "Name": "ImageType",
      "Type": "String",
      "Value": "ORIGINAL\\PRIMARY\\LOCALIZER\\ES"
    },
    "0008,0012": {
      "Name": "InstanceCreationDate",
      "Type": "String",
      "Value": "20050927"
    },
    "0008,0013": {
      "Name": "InstanceCreationTime",
      "Type": "String",
      "Value": "155030.000000"
    },
    "0008,0016": {
      "Name": "SOPClassUID",
      "Type": "String",
      "Value": "1.2.840.10008.5.1.4.1.1.2"
    },
    "{...}": "..."
  }
}
```

<h3 id="get-tags-of-instances-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create DICOMDIR media

> Code samples

```bash
curl https://example.com/series/string/media
```

`GET /series/{id}/media`

Synchronously create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.

<h3 id="create-dicomdir-media-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|extended|query|string|false|If present, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*|
|filename|query|string|false|Filename to set in the "Content-Disposition" HTTP header (including file extension)|
|transcode|query|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|
|id|path|string|true|Orthanc identifier of the series of interest|

<h3 id="create-dicomdir-media-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create DICOMDIR media

> Code samples

```bash
curl https://example.com/series/string/media \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Extended": true,
    "Priority": 0,
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /series/{id}/media`

Create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL

> Body parameter

```json
{
  "Asynchronous": true,
  "Extended": true,
  "Priority": 0,
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="create-dicomdir-media-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the series of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.|
|» Extended|body|boolean|false|If `true`, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*. Default value is `false`.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Synchronous|body|boolean|false|If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.|
|» Transcode|body|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="create-dicomdir-media-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="create-dicomdir-media-5-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|Identifier of the job|
|Path|string|false|none|Path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## List metadata

> Code samples

```bash
curl https://example.com/series/string/metadata \
  -H 'Accept: application/json'
```

`GET /series/{id}/metadata`

Get the list of metadata that are associated with the given series

<h3 id="list-metadata-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|If present, also retrieve the value of the individual metadata|
|id|path|string|true|Orthanc identifier of the series of interest|

> Example responses

> 200 Response

```json
[
  "LastUpdate"
]
```

<h3 id="list-metadata-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get metadata

> Code samples

```bash
curl https://example.com/series/string/metadata/string
```

`GET /series/{id}/metadata/{name}`

Get the value of a metadata that is associated with the given series

<h3 id="get-metadata-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the metadata, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the metadata, or its index (cf. `UserMetadata` configuration option)|

<h3 id="get-metadata-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the metadata, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Set metadata

> Code samples

```bash
curl https://example.com/series/string/metadata/string \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /series/{id}/metadata/{name}`

Set the value of some metadata in the given DICOM series. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).

> Body parameter

```json
null
```

<h3 id="set-metadata-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the metadata, if this is not the first time this metadata is set.|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the metadata, or its index (cf. `UserMetadata` configuration option)|
|body|body|object|false|none|

<h3 id="set-metadata-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete metadata

> Code samples

```bash
curl https://example.com/series/string/metadata/string \
  -X DELETE
```

`DELETE /series/{id}/metadata/{name}`

Delete some metadata associated with the given DICOM series. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).

<h3 id="delete-metadata-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the metadata, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.|
|id|path|string|true|Orthanc identifier of the series of interest|
|name|path|string|true|The name of the metadata, or its index (cf. `UserMetadata` configuration option)|

<h3 id="delete-metadata-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Modify series

> Code samples

```bash
curl https://example.com/series/string/modify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Force": true,
    "Keep": [
      "string"
    ],
    "KeepSource": true,
    "Permissive": true,
    "Priority": 0,
    "PrivateCreator": "string",
    "Remove": [
      "string"
    ],
    "RemovePrivateTags": true,
    "Replace": {},
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /series/{id}/modify`

Start a job that will modify all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series

> Body parameter

```json
{
  "Asynchronous": true,
  "Force": true,
  "Keep": [
    "string"
  ],
  "KeepSource": true,
  "Permissive": true,
  "Priority": 0,
  "PrivateCreator": "string",
  "Remove": [
    "string"
  ],
  "RemovePrivateTags": true,
  "Replace": {},
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="modify-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the series of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» Force|body|boolean|false|Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world|
|» Keep|body|[string]|false|Keep the original value of the specified tags, to be chosen among the `StudyInstanceUID`, `SeriesInstanceUID` and `SOPInstanceUID` tags. Avoid this feature as much as possible, as this breaks the DICOM model of the real world.|
|» KeepSource|body|boolean|false|If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» PrivateCreator|body|string|false|The private creator to be used for private tags in `Replace`|
|» Remove|body|[string]|false|List of tags that must be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» RemovePrivateTags|body|boolean|false|Remove the private tags from the DICOM instances (defaults to `false`)|
|» Replace|body|object|false|Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|
|» Transcode|body|string|false|Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="modify-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="modify-series-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Get series module

> Code samples

```bash
curl https://example.com/series/string/module \
  -H 'Accept: application/json'
```

`GET /series/{id}/module`

Get the series module of the DICOM series whose Orthanc identifier is provided in the URL

<h3 id="get-series-module-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignore-length|query|[string]|false|Also include the DICOM tags that are provided in this list, even if their associated value is long|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Orthanc identifier of the series of interest|

> Example responses

> 200 Response

```json
{
  "0008,0060": {
    "Name": "Modality",
    "Type": "String",
    "Value": "CT"
  },
  "0008,1111": {
    "Name": "ReferencedPerformedProcedureStepSequence",
    "Type": "Sequence",
    "Value": [
      {
        "0008,1150": {
          "Name": "ReferencedSOPClassUID",
          "Type": "String",
          "Value": "1.2.840.10008.3.1.2.3.3"
        },
        "0008,1155": {
          "Name": "ReferencedSOPInstanceUID",
          "Type": "String",
          "Value": "1.2.840.113704.1.111.4496.1127828841.54"
        }
      }
    ]
  },
  "0018,1030": {
    "Name": "ProtocolName",
    "Type": "String",
    "Value": "COU 2 mm/Neck/Sv"
  },
  "0018,5100": {
    "Name": "PatientPosition",
    "Type": "String",
    "Value": "HFS"
  },
  "0020,000e": {
    "Name": "SeriesInstanceUID",
    "Type": "String",
    "Value": "1.2.840.113704.1.111.5692.1127828999.2"
  },
  "0020,0011": {
    "Name": "SeriesNumber",
    "Type": "String",
    "Value": "2276"
  },
  "0040,0253": {
    "Name": "PerformedProcedureStepID",
    "Type": "String",
    "Value": "A10011234815"
  },
  "0040,0254": {
    "Name": "PerformedProcedureStepDescription",
    "Type": "String",
    "Value": "CT2 tête, face, sinus"
  },
  "0040,0260": {
    "Name": "PerformedProtocolCodeSequence",
    "Type": "Sequence",
    "Value": [
      {
        "0008,0100": {
          "Name": "CodeValue",
          "Type": "String",
          "Value": "CTTETE"
        },
        "0008,0102": {
          "Name": "CodingSchemeDesignator",
          "Type": "String",
          "Value": "XPLORE"
        },
        "0008,0104": {
          "Name": "CodeMeaning",
          "Type": "String",
          "Value": "CT2 tête, face, sinus"
        }
      }
    ]
  },
  "0040,0275": {
    "Name": "RequestAttributesSequence",
    "Type": "Sequence",
    "Value": [
      {
        "0040,0007": {
          "Name": "ScheduledProcedureStepDescription",
          "Type": "String",
          "Value": "CT2 tête, face, sinus"
        },
        "0040,0008": {
          "Name": "ScheduledProtocolCodeSequence",
          "Type": "Sequence",
          "Value": [
            {
              "0008,0100": {
                "Name": "CodeValue",
                "Type": "String",
                "Value": "CTTETE"
              },
              "0008,0102": {
                "Name": "CodingSchemeDesignator",
                "Type": "String",
                "Value": "XPLORE"
              },
              "0008,0104": {
                "Name": "CodeMeaning",
                "Type": "String",
                "Value": "CT2 TÊTE, FACE, SINUS"
              }
            }
          ]
        },
        "0040,0009": {
          "Name": "ScheduledProcedureStepID",
          "Type": "String",
          "Value": "A10011234815"
        },
        "0040,1001": {
          "Name": "RequestedProcedureID",
          "Type": "String",
          "Value": "A10011234814"
        }
      }
    ]
  }
}
```

<h3 id="get-series-module-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Decode series for numpy

> Code samples

```bash
curl https://example.com/series/string/numpy
```

`GET /series/{id}/numpy`

Decode the given DICOM series, for use with numpy in Python. The numpy array has 4 dimensions: (frame, height, width, color channel).

<h3 id="decode-series-for-numpy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|compress|query|boolean|false|Compress the file as `.npz`|
|rescale|query|boolean|false|On grayscale images, apply the rescaling and return floating-point values|
|id|path|string|true|Orthanc identifier of the DICOM resource of interest|

<h3 id="decode-series-for-numpy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Order the slices

> Code samples

```bash
curl https://example.com/series/string/ordered-slices \
  -H 'Accept: application/json'
```

`GET /series/{id}/ordered-slices`

<aside class="warning">
This operation is deprecated
</aside>

Sort the instances and frames (slices) of the DICOM series whose Orthanc identifier is provided in the URL. This URI is essentially used by the Orthanc Web viewer and by the Osimis Web viewer.

<h3 id="order-the-slices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the series of interest|

> Example responses

> 200 Response

```json
{
  "Dicom": [
    "/instances/fa1fc64f-e7a051a7-c1233b31-e19bca08-54629531/file",
    "/instances/f5701efb-98170697-404d15f6-59baf69e-4e8ddfae/file",
    "/instances/3b2a215c-2560d4b0-e3730c07-87d3fa7d-3fef44ed/file",
    "/instances/6059d07c-02ae8c74-9436dc7c-007b4d5d-4c770a30/file",
    "/instances/99264275-213c3190-73251bdc-97ccfdb4-1f9656d9/file",
    "/instances/40df6ac1-5ec86316-035ff3c1-07e5c8a8-f6cbd37c/file",
    "/instances/08ff3a1a-c8fb57d9-4e24d9cb-2ed22b80-0ff7461e/file",
    "/instances/6fe353dd-544ce7af-58ce22dd-ab67370c-873330fc/file",
    "/instances/3ad70bbe-bc51faff-860461d2-44745ccf-0ebbbbc8/file",
    "/instances/9058e01a-31a7d982-1691e575-a8607d94-29a9aaca/file",
    "..."
  ],
  "Slices": [
    "/instances/fa1fc64f-e7a051a7-c1233b31-e19bca08-54629531/frames/0",
    "/instances/f5701efb-98170697-404d15f6-59baf69e-4e8ddfae/frames/0",
    "/instances/3b2a215c-2560d4b0-e3730c07-87d3fa7d-3fef44ed/frames/0",
    "/instances/6059d07c-02ae8c74-9436dc7c-007b4d5d-4c770a30/frames/0",
    "/instances/99264275-213c3190-73251bdc-97ccfdb4-1f9656d9/frames/0",
    "/instances/40df6ac1-5ec86316-035ff3c1-07e5c8a8-f6cbd37c/frames/0",
    "/instances/08ff3a1a-c8fb57d9-4e24d9cb-2ed22b80-0ff7461e/frames/0",
    "/instances/6fe353dd-544ce7af-58ce22dd-ab67370c-873330fc/frames/0",
    "/instances/3ad70bbe-bc51faff-860461d2-44745ccf-0ebbbbc8/frames/0",
    "/instances/9058e01a-31a7d982-1691e575-a8607d94-29a9aaca/frames/0",
    "..."
  ],
  "SlicesShort": [
    [
      "fa1fc64f-e7a051a7-c1233b31-e19bca08-54629531",
      0,
      1
    ],
    [
      "f5701efb-98170697-404d15f6-59baf69e-4e8ddfae",
      0,
      1
    ],
    [
      "3b2a215c-2560d4b0-e3730c07-87d3fa7d-3fef44ed",
      0,
      1
    ],
    [
      "6059d07c-02ae8c74-9436dc7c-007b4d5d-4c770a30",
      0,
      1
    ],
    [
      "99264275-213c3190-73251bdc-97ccfdb4-1f9656d9",
      0,
      1
    ],
    [
      "40df6ac1-5ec86316-035ff3c1-07e5c8a8-f6cbd37c",
      0,
      1
    ],
    [
      "08ff3a1a-c8fb57d9-4e24d9cb-2ed22b80-0ff7461e",
      0,
      1
    ],
    [
      "6fe353dd-544ce7af-58ce22dd-ab67370c-873330fc",
      0,
      1
    ],
    [
      "3ad70bbe-bc51faff-860461d2-44745ccf-0ebbbbc8",
      0,
      1
    ],
    [
      "9058e01a-31a7d982-1691e575-a8607d94-29a9aaca",
      0,
      1
    ],
    "..."
  ],
  "Type": "Volume"
}
```

<h3 id="order-the-slices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="order-the-slices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dicom|[string]|false|none|Ordered list of paths to DICOM instances|
|Slices|[string]|false|none|Ordered list of paths to frames. It is recommended to use this field, as it is also valid in the case of multiframe images.|
|SlicesShort|[object]|false|none|Same information as the `Slices` field, but in a compact form|
|Type|string|false|none|Can be `Volume` (for 3D volumes) or `Sequence` (notably for cine images)|

<aside class="success">
This operation does not require authentication
</aside>

## Get parent patient

> Code samples

```bash
curl https://example.com/series/string/patient \
  -H 'Accept: application/json'
```

`GET /series/{id}/patient`

Get detailed information about the parent patient of the DICOM series whose Orthanc identifier is provided in the URL

<h3 id="get-parent-patient-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the series of interest|

> Example responses

> 200 Response

```json
{
  "ID": "2f74083e-9b042648-10edac14-b26950f8-f82ec3a0",
  "IsStable": true,
  "LastUpdate": "20180414T091601",
  "MainDicomTags": {
    "PatientBirthDate": "19910101",
    "PatientID": "Vafk,T,6",
    "PatientName": "PHENIX",
    "PatientSex": ""
  },
  "Studies": [
    "49974143-ec23cb52-6b2a1c46-14d5daa0-0822ce1a"
  ],
  "Type": "Patient"
}
```

<h3 id="get-parent-patient-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Reconstruct tags &amp; optionally files of series

> Code samples

```bash
curl https://example.com/series/string/reconstruct \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "ReconstructFiles": true
  }'
```

`POST /series/{id}/reconstruct`

Reconstruct the main DICOM tags in DB of the series whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.

> Body parameter

```json
{
  "ReconstructFiles": true
}
```

<h3 id="reconstruct-tags-optionally-files-of-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the series of interest|
|body|body|object|false|none|
|» ReconstructFiles|body|boolean|false|Also reconstruct the files of the resources (e.g: apply IngestTranscoding, StorageCompression). 'false' by default. (New in Orthanc 1.11.0)|

<h3 id="reconstruct-tags-optionally-files-of-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get shared tags

> Code samples

```bash
curl https://example.com/series/string/shared-tags \
  -H 'Accept: application/json'
```

`GET /series/{id}/shared-tags`

Extract the DICOM tags whose value is constant across all the child instances of the DICOM series whose Orthanc identifier is provided in the URL

<h3 id="get-shared-tags-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Orthanc identifier of the series of interest|

> Example responses

> 200 Response

```json
{
  "0008,0005": {
    "Name": "SpecificCharacterSet",
    "Type": "String",
    "Value": "ISO_IR 100"
  },
  "0008,0008": {
    "Name": "ImageType",
    "Type": "String",
    "Value": "ORIGINAL\\PRIMARY\\LOCALIZER\\ES"
  },
  "0008,0012": {
    "Name": "InstanceCreationDate",
    "Type": "String",
    "Value": "20050927"
  },
  "0008,0013": {
    "Name": "InstanceCreationTime",
    "Type": "String",
    "Value": "155030.000000"
  },
  "0008,0016": {
    "Name": "SOPClassUID",
    "Type": "String",
    "Value": "1.2.840.10008.5.1.4.1.1.2"
  },
  "{...}": "..."
}
```

<h3 id="get-shared-tags-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get series statistics

> Code samples

```bash
curl https://example.com/series/string/statistics \
  -H 'Accept: application/json'
```

`GET /series/{id}/statistics`

Get statistics about the given series

<h3 id="get-series-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the series of interest|

> Example responses

> 200 Response

```json
{
  "CountInstances": 1,
  "DicomDiskSize": "368852",
  "DicomDiskSizeMB": 0,
  "DicomUncompressedSize": "368852",
  "DicomUncompressedSizeMB": 0,
  "DiskSize": "381000",
  "DiskSizeMB": 0,
  "UncompressedSize": "381000",
  "UncompressedSizeMB": 0
}
```

<h3 id="get-series-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-series-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CountInstances|number|false|none|Number of child instances within this series|
|DicomDiskSize|string|false|none|Size on the disk of the DICOM instances associated with the series, expressed in bytes|
|DicomDiskSizeMB|number|false|none|Size on the disk of the DICOM instances associated with the series, expressed in megabytes (MB)|
|DicomUncompressedSize|string|false|none|Size on the disk of the uncompressed DICOM instances associated with the series, expressed in bytes|
|DicomUncompressedSizeMB|number|false|none|Size on the disk of the uncompressed DICOM instances associated with the series, expressed in megabytes (MB)|
|DiskSize|string|false|none|Size of the series on the disk in bytes, expressed as a string for 64bit compatibility with JSON|
|DiskSizeMB|number|false|none|Size of the series on the disk, expressed in megabytes (MB)|
|UncompressedSize|string|false|none|Size of the series after decompression in bytes, expressed as a string for 64bit compatibility with JSON|
|UncompressedSizeMB|number|false|none|Size of the series after decompression, expressed in megabytes (MB). This is different from `DiskSizeMB` iff `StorageCompression` is `true`.|

<aside class="success">
This operation does not require authentication
</aside>

## Get parent study

> Code samples

```bash
curl https://example.com/series/string/study \
  -H 'Accept: application/json'
```

`GET /series/{id}/study`

Get detailed information about the parent study of the DICOM series whose Orthanc identifier is provided in the URL

<h3 id="get-parent-study-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the series of interest|

> Example responses

> 200 Response

```json
{
  "ID": "49974143-ec23cb52-6b2a1c46-14d5daa0-0822ce1a",
  "IsStable": true,
  "LastUpdate": "20180414T091601",
  "MainDicomTags": {
    "AccessionNumber": "A10011234814",
    "InstitutionName": "HUG",
    "ReferringPhysicianName": "CHIR-PED^CHIR-PE",
    "RequestedProcedureDescription": "CT2 TÊTE, FACE, SINUS",
    "RequestingPhysician": "KOHLER^Romain",
    "StudyDate": "20050927",
    "StudyDescription": "CT2 tête, face, sinus",
    "StudyID": "1361",
    "StudyInstanceUID": "2.16.840.1.113669.632.20.1211.10000098591",
    "StudyTime": "154952.000000"
  },
  "ParentPatient": "2f74083e-9b042648-10edac14-b26950f8-f82ec3a0",
  "PatientMainDicomTags": {
    "PatientBirthDate": "19910101",
    "PatientID": "Vafk,T,6",
    "PatientName": "PHENIX",
    "PatientSex": ""
  },
  "Series": [
    "37836232-d13a2350-fa1dedc5-962b31aa-010f8e52",
    "7696013f-4c89c563-2b071693-5d1f97f6-f8ab232d",
    "17cc7e52-4f1a3e4d-9182f727-56e9cc71-c037892f"
  ],
  "Type": "Study"
}
```

<h3 id="get-parent-study-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="orthanc-api-studies">Studies</h1>

## List the available studies

> Code samples

```bash
curl https://example.com/studies \
  -H 'Accept: application/json'
```

`GET /studies`

List the Orthanc identifiers of all the available DICOM studies

<h3 id="list-the-available-studies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|If present, retrieve detailed information about the individual studies|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|limit|query|number|false|Limit the number of results|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|since|query|number|false|Show only the resources since the provided index|

> Example responses

> 200 Response

```json
[
  "6c65289b-db2fcb71-7eaf73f4-8e12470c-a4d6d7cf",
  "6b9e19d9-62094390-5f9ddb01-4a191ae7-9766b715"
]
```

<h3 id="list-the-available-studies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get information about some study

> Code samples

```bash
curl https://example.com/studies/string \
  -H 'Accept: application/json'
```

`GET /studies/{id}`

Get detailed information about the DICOM study whose Orthanc identifier is provided in the URL

<h3 id="get-information-about-some-study-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the study of interest|

> Example responses

> 200 Response

```json
{
  "ID": "27f7126f-4f66fb14-03f4081b-f9341db2-53925988",
  "IsStable": true,
  "LastUpdate": "20180414T091532",
  "MainDicomTags": {
    "AccessionNumber": "0",
    "InstitutionName": "7GEFF0GbzqCNo43Yd0,Ibu,zQSSX",
    "ReferringPhysicianName": "dAEvNTxZJO0E",
    "RequestedProcedureDescription": "IRM cérébrale, neuro-crâne",
    "StudyDate": "20061201",
    "StudyDescription": "IRM cérébrale, neuro-crâne",
    "StudyID": "218211405",
    "StudyInstanceUID": "2.16.840.1.113669.632.20.1211.10000357775",
    "StudyTime": "141645.000000"
  },
  "ParentPatient": "16738bc3-e47ed42a-43ce044c-a3414a45-cb069bd0",
  "PatientMainDicomTags": {
    "PatientBirthDate": "19490301",
    "PatientID": "5Yp0E",
    "PatientName": "BRAINIX",
    "PatientSex": "0000"
  },
  "Series": [
    "635faa23-fd8378ee-d03bce29-ee47c2fb-a65c5509",
    "dc0216d2-a406a5ad-31ef7a78-113ae9d9-29939f9e",
    "1e2c125c-411b8e86-3f4fe68e-a7584dd3-c6da78f0",
    "4baa97c7-d53d3d82-a5eb9403-17ef5a77-4e0efb55",
    "2ac1316d-3e432022-62eabff2-c59f5475-9b1ac3f8",
    "ae164c84-e5bd0366-ba937a6d-65414092-f294d6b6",
    "3ca69615-fcd4a4fb-e5f2cc9d-9c7a49a5-add98bbf"
  ],
  "Type": "Study"
}
```

<h3 id="get-information-about-some-study-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete some study

> Code samples

```bash
curl https://example.com/studies/string \
  -X DELETE
```

`DELETE /studies/{id}`

Delete the DICOM study whose Orthanc identifier is provided in the URL

<h3 id="delete-some-study-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the study of interest|

<h3 id="delete-some-study-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Anonymize study

> Code samples

```bash
curl https://example.com/studies/string/anonymize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "DicomVersion": "string",
    "Force": true,
    "Keep": [
      "string"
    ],
    "KeepPrivateTags": true,
    "KeepSource": true,
    "Permissive": true,
    "Priority": 0,
    "PrivateCreator": "string",
    "Remove": [
      "string"
    ],
    "Replace": {},
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /studies/{id}/anonymize`

Start a job that will anonymize all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series

> Body parameter

```json
{
  "Asynchronous": true,
  "DicomVersion": "string",
  "Force": true,
  "Keep": [
    "string"
  ],
  "KeepPrivateTags": true,
  "KeepSource": true,
  "Permissive": true,
  "Priority": 0,
  "PrivateCreator": "string",
  "Remove": [
    "string"
  ],
  "Replace": {},
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="anonymize-study-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the study of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» DicomVersion|body|string|false|Version of the DICOM standard to be used for anonymization. Check out configuration option `DeidentifyLogsDicomVersion` for possible values.|
|» Force|body|boolean|false|Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world|
|» Keep|body|[string]|false|List of DICOM tags whose value must not be destroyed by the anonymization. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» KeepPrivateTags|body|boolean|false|Keep the private tags from the DICOM instances (defaults to `false`)|
|» KeepSource|body|boolean|false|If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» PrivateCreator|body|string|false|The private creator to be used for private tags in `Replace`|
|» Remove|body|[string]|false|List of additional tags to be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Replace|body|object|false|Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|
|» Transcode|body|string|false|Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="anonymize-study-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="anonymize-study-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Create ZIP archive

> Code samples

```bash
curl https://example.com/studies/string/archive
```

`GET /studies/{id}/archive`

Synchronously create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.

<h3 id="create-zip-archive-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|query|string|false|Filename to set in the "Content-Disposition" HTTP header (including file extension)|
|transcode|query|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|
|id|path|string|true|Orthanc identifier of the study of interest|

<h3 id="create-zip-archive-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create ZIP archive

> Code samples

```bash
curl https://example.com/studies/string/archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Priority": 0,
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /studies/{id}/archive`

Create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL

> Body parameter

```json
{
  "Asynchronous": true,
  "Priority": 0,
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="create-zip-archive-6-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the study of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Synchronous|body|boolean|false|If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.|
|» Transcode|body|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="create-zip-archive-6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="create-zip-archive-6-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|Identifier of the job|
|Path|string|false|none|Path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## List attachments

> Code samples

```bash
curl https://example.com/studies/string/attachments \
  -H 'Accept: application/json'
```

`GET /studies/{id}/attachments`

Get the list of attachments that are associated with the given study

<h3 id="list-attachments-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|string|false|If present, retrieve the attachments list and their numerical ids|
|id|path|string|true|Orthanc identifier of the study of interest|

> Example responses

> 200 Response

```json
[]
```

<h3 id="list-attachments-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set attachment

> Code samples

```bash
curl https://example.com/studies/string/attachments/string \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json'
```

`PUT /studies/{id}/attachments/{name}`

Attach a file to the given DICOM study. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).

> Body parameter

```json
null
```

<h3 id="set-attachment-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the attachment, if this is not the first time this attachment is set.|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="set-attachment-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete attachment

> Code samples

```bash
curl https://example.com/studies/string/attachments/string \
  -X DELETE
```

`DELETE /studies/{id}/attachments/{name}`

Delete an attachment associated with the given DICOM study. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).

<h3 id="delete-attachment-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the attachment, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="delete-attachment-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Compress attachment

> Code samples

```bash
curl https://example.com/studies/string/attachments/string/compress \
  -X POST
```

`POST /studies/{id}/attachments/{name}/compress`

Change the compression scheme that is used to store an attachment.

<h3 id="compress-attachment-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="compress-attachment-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get attachment (no decompression)

> Code samples

```bash
curl https://example.com/studies/string/attachments/string/compressed-data
```

`GET /studies/{id}/attachments/{name}/compressed-data`

Get the (binary) content of one attachment associated with the given study. The attachment will not be decompressed if `StorageCompression` is `true`.

<h3 id="get-attachment-no-decompression-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the metadata, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-attachment-no-decompression-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get MD5 of attachment on disk

> Code samples

```bash
curl https://example.com/studies/string/attachments/string/compressed-md5
```

`GET /studies/{id}/attachments/{name}/compressed-md5`

Get the MD5 hash of one attachment associated with the given study, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.

<h3 id="get-md5-of-attachment-on-disk-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-md5-of-attachment-on-disk-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get size of attachment on disk

> Code samples

```bash
curl https://example.com/studies/string/attachments/string/compressed-size
```

`GET /studies/{id}/attachments/{name}/compressed-size`

Get the size of one attachment associated with the given study, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.

<h3 id="get-size-of-attachment-on-disk-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-size-of-attachment-on-disk-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get attachment

> Code samples

```bash
curl https://example.com/studies/string/attachments/string/data
```

`GET /studies/{id}/attachments/{name}/data`

Get the (binary) content of one attachment associated with the given study

<h3 id="get-attachment-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the metadata, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-attachment-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get info about the attachment

> Code samples

```bash
curl https://example.com/studies/string/attachments/string/info \
  -H 'Accept: application/json'
```

`GET /studies/{id}/attachments/{name}/info`

Get all the information about the attachment associated with the given study

<h3 id="get-info-about-the-attachment-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

> Example responses

> 200 Response

```json
{
  "CompressedMD5": "26f3fad6ca0c355f02d57c7fa6770248",
  "CompressedSize": 526970,
  "ContentType": 1,
  "UncompressedMD5": "26f3fad6ca0c355f02d57c7fa6770248",
  "UncompressedSize": 526970,
  "Uuid": "b7c99eb7-229f-464e-8f46-6878c8e79e5c"
}
```

<h3 id="get-info-about-the-attachment-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Is attachment compressed?

> Code samples

```bash
curl https://example.com/studies/string/attachments/string/is-compressed
```

`GET /studies/{id}/attachments/{name}/is-compressed`

Test whether the attachment has been stored as a compressed file on the disk.

<h3 id="is-attachment-compressed-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="is-attachment-compressed-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get MD5 of attachment

> Code samples

```bash
curl https://example.com/studies/string/attachments/string/md5
```

`GET /studies/{id}/attachments/{name}/md5`

Get the MD5 hash of one attachment associated with the given study

<h3 id="get-md5-of-attachment-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-md5-of-attachment-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Get size of attachment

> Code samples

```bash
curl https://example.com/studies/string/attachments/string/size
```

`GET /studies/{id}/attachments/{name}/size`

Get the size of one attachment associated with the given study

<h3 id="get-size-of-attachment-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the attachment, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="get-size-of-attachment-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the attachment, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Uncompress attachment

> Code samples

```bash
curl https://example.com/studies/string/attachments/string/uncompress \
  -X POST
```

`POST /studies/{id}/attachments/{name}/uncompress`

Change the compression scheme that is used to store an attachment.

<h3 id="uncompress-attachment-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

<h3 id="uncompress-attachment-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Verify attachment

> Code samples

```bash
curl https://example.com/studies/string/attachments/string/verify-md5 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /studies/{id}/attachments/{name}/verify-md5`

Verify that the attachment is not corrupted, by validating its MD5 hash

<h3 id="verify-attachment-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the attachment, or its index (cf. `UserContentType` configuration option)|

> Example responses

> 200 Response

```json
null
```

<h3 id="verify-attachment-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get child instances

> Code samples

```bash
curl https://example.com/studies/string/instances \
  -H 'Accept: application/json'
```

`GET /studies/{id}/instances`

Get detailed information about the child instances of the DICOM study whose Orthanc identifier is provided in the URL

<h3 id="get-child-instances-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the study of interest|

> Example responses

> 200 Response

```json
[
  {
    "FileSize": 527858,
    "FileUuid": "42607af0-e2ca-402a-9cb4-8819a0485dbd",
    "ID": "82cc1a6b-7b05d34e-cd74474b-594f0d43-94f609d8",
    "IndexInSeries": 3,
    "MainDicomTags": {
      "AcquisitionNumber": "3",
      "ImagePositionPatient": "-118.20798927708\\-118.00763136239\\71.7517339810729",
      "InstanceCreationDate": "20061201",
      "InstanceCreationTime": "145313.000000",
      "InstanceNumber": "3",
      "{...}": "..."
    },
    "{...}": "..."
  },
  {
    "FileSize": 527858,
    "FileUuid": "f986a0de-cf3b-4acc-a2ca-ce6a5844ec63",
    "ID": "2fbd6d5f-802f6561-b9d8da32-c54ead16-18a208bd",
    "IndexInSeries": 13,
    "MainDicomTags": {
      "AcquisitionNumber": "3",
      "ImagePositionPatient": "-116.77244740887\\-113.68593889565\\11.9247972592711",
      "InstanceCreationDate": "20061201",
      "InstanceCreationTime": "145313.000000",
      "InstanceNumber": "13",
      "{...}": "..."
    },
    "{...}": "..."
  },
  {
    "FileSize": 527858,
    "FileUuid": "64cc6dae-228d-4e60-82ea-34c540a09cfb",
    "ID": "4dbca7c1-f6e1a582-b3196370-0151cac8-19caac8e",
    "IndexInSeries": 17,
    "MainDicomTags": {
      "AcquisitionNumber": "3",
      "ImagePositionPatient": "-116.19823080464\\-111.95726186127\\-12.005976177752",
      "InstanceCreationDate": "20061201",
      "InstanceCreationTime": "145313.000000",
      "InstanceNumber": "17",
      "{...}": "..."
    },
    "{...}": "..."
  },
  {
    "FileSize": 527858,
    "FileUuid": "06823b17-6217-4534-b318-4de5c9157c74",
    "ID": "98c6f0c7-e6f9812b-d0a9df8a-97eeaa41-fa891d8e",
    "IndexInSeries": 6,
    "MainDicomTags": {
      "AcquisitionNumber": "3",
      "ImagePositionPatient": "-117.77732664509\\-116.71112352700\\53.8036520108580",
      "InstanceCreationDate": "20061201",
      "InstanceCreationTime": "145313.000000",
      "InstanceNumber": "6",
      "{...}": "..."
    },
    "{...}": "..."
  },
  {
    "FileSize": 527858,
    "FileUuid": "7012f4ad-e1f7-49a8-95e0-5050227b4090",
    "ID": "c25f4e48-8f7d737e-3dbeafb5-f1563a30-eddf816c",
    "IndexInSeries": 20,
    "MainDicomTags": {
      "AcquisitionNumber": "3",
      "ImagePositionPatient": "-115.76756829186\\-110.66075450272\\-29.954057492315",
      "InstanceCreationDate": "20061201",
      "InstanceCreationTime": "145313.000000",
      "InstanceNumber": "20",
      "{...}": "..."
    },
    "{...}": "..."
  },
  "..."
]
```

<h3 id="get-child-instances-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get tags of instances

> Code samples

```bash
curl https://example.com/studies/string/instances-tags \
  -H 'Accept: application/json'
```

`GET /studies/{id}/instances-tags`

Get the tags of all the child instances of the DICOM study whose Orthanc identifier is provided in the URL

<h3 id="get-tags-of-instances-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignore-length|query|[string]|false|Also include the DICOM tags that are provided in this list, even if their associated value is long|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Orthanc identifier of the study of interest|

> Example responses

> 200 Response

```json
{
  "00330d0f-911e5e8d-1e305bae-e5c53b73-d2a49298": {
    "0008,0005": {
      "Name": "SpecificCharacterSet",
      "Type": "String",
      "Value": "ISO_IR 100"
    },
    "0008,0008": {
      "Name": "ImageType",
      "Type": "String",
      "Value": "ORIGINAL\\PRIMARY\\M_SE\\M\\SE"
    },
    "0008,0012": {
      "Name": "InstanceCreationDate",
      "Type": "String",
      "Value": "20061201"
    },
    "0008,0013": {
      "Name": "InstanceCreationTime",
      "Type": "String",
      "Value": "145331.000000"
    },
    "0008,0014": {
      "Name": "InstanceCreatorUID",
      "Type": "String",
      "Value": "1.3.46.670589.11.8743.5"
    },
    "{...}": "..."
  },
  "00402ce7-ac05c687-4d0839bc-cecd4fad-3d1b7eed": {
    "0008,0005": {
      "Name": "SpecificCharacterSet",
      "Type": "String",
      "Value": "ISO_IR 100"
    },
    "0008,0008": {
      "Name": "ImageType",
      "Type": "String",
      "Value": "ORIGINAL\\PRIMARY\\M_FFE\\M\\FFE"
    },
    "0008,0012": {
      "Name": "InstanceCreationDate",
      "Type": "String",
      "Value": "20061201"
    },
    "0008,0013": {
      "Name": "InstanceCreationTime",
      "Type": "String",
      "Value": "145326.000000"
    },
    "0008,0014": {
      "Name": "InstanceCreatorUID",
      "Type": "String",
      "Value": "1.3.46.670589.11.8743.5"
    },
    "{...}": "..."
  },
  "00ffd506-6460663a-cda9bddc-a0090c47-145ba829": {
    "0008,0005": {
      "Name": "SpecificCharacterSet",
      "Type": "String",
      "Value": "ISO_IR 100"
    },
    "0008,0008": {
      "Name": "ImageType",
      "Type": "String",
      "Value": "ORIGINAL\\PRIMARY\\M_FFE\\M\\FFE"
    },
    "0008,0012": {
      "Name": "InstanceCreationDate",
      "Type": "String",
      "Value": "20061201"
    },
    "0008,0013": {
      "Name": "InstanceCreationTime",
      "Type": "String",
      "Value": "145346.000000"
    },
    "0008,0014": {
      "Name": "InstanceCreatorUID",
      "Type": "String",
      "Value": "1.3.46.670589.11.8743.5"
    },
    "{...}": "..."
  },
  "01a6ffdc-335f82a7-c79360c2-2e6bbc35-d24ca33d": {
    "0008,0005": {
      "Name": "SpecificCharacterSet",
      "Type": "String",
      "Value": "ISO_IR 100"
    },
    "0008,0008": {
      "Name": "ImageType",
      "Type": "String",
      "Value": "ORIGINAL\\PRIMARY\\M_SE\\M\\SE"
    },
    "0008,0012": {
      "Name": "InstanceCreationDate",
      "Type": "String",
      "Value": "20061201"
    },
    "0008,0013": {
      "Name": "InstanceCreationTime",
      "Type": "String",
      "Value": "145313.000000"
    },
    "0008,0014": {
      "Name": "InstanceCreatorUID",
      "Type": "String",
      "Value": "1.3.46.670589.11.8743.5"
    },
    "{...}": "..."
  },
  "0577c66f-25d7cc30-bb763c60-53bb7ba0-72c8b018": {
    "0008,0005": {
      "Name": "SpecificCharacterSet",
      "Type": "String",
      "Value": "ISO_IR 100"
    },
    "0008,0008": {
      "Name": "ImageType",
      "Type": "String",
      "Value": "ORIGINAL\\PRIMARY\\M_FFE\\M\\FFE"
    },
    "0008,0012": {
      "Name": "InstanceCreationDate",
      "Type": "String",
      "Value": "20061201"
    },
    "0008,0013": {
      "Name": "InstanceCreationTime",
      "Type": "String",
      "Value": "145346.000000"
    },
    "0008,0014": {
      "Name": "InstanceCreatorUID",
      "Type": "String",
      "Value": "1.3.46.670589.11.8743.5"
    },
    "{...}": "..."
  },
  "{...}": "..."
}
```

<h3 id="get-tags-of-instances-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create DICOMDIR media

> Code samples

```bash
curl https://example.com/studies/string/media
```

`GET /studies/{id}/media`

Synchronously create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.

<h3 id="create-dicomdir-media-6-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|extended|query|string|false|If present, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*|
|filename|query|string|false|Filename to set in the "Content-Disposition" HTTP header (including file extension)|
|transcode|query|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|
|id|path|string|true|Orthanc identifier of the study of interest|

<h3 id="create-dicomdir-media-6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create DICOMDIR media

> Code samples

```bash
curl https://example.com/studies/string/media \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Extended": true,
    "Priority": 0,
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /studies/{id}/media`

Create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL

> Body parameter

```json
{
  "Asynchronous": true,
  "Extended": true,
  "Priority": 0,
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="create-dicomdir-media-7-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the study of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.|
|» Extended|body|boolean|false|If `true`, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*. Default value is `false`.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Synchronous|body|boolean|false|If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option "SynchronousZipStream" is set to "false", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.|
|» Transcode|body|string|false|If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="create-dicomdir-media-7-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="create-dicomdir-media-7-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|Identifier of the job|
|Path|string|false|none|Path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Merge study

> Code samples

```bash
curl https://example.com/studies/string/merge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "KeepSource": true,
    "Permissive": true,
    "Priority": 0,
    "Resources": [
      "string"
    ],
    "Synchronous": true
  }'
```

`POST /studies/{id}/merge`

Start a new job so as to move some DICOM resources into the DICOM study whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#merging

> Body parameter

```json
{
  "Asynchronous": true,
  "KeepSource": true,
  "Permissive": true,
  "Priority": 0,
  "Resources": [
    "string"
  ],
  "Synchronous": true
}
```

<h3 id="merge-study-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the study of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» KeepSource|body|boolean|false|If set to `true`, instructs Orthanc to keep a copy of the original resources in their source study. By default, the original resources are deleted from Orthanc.|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Resources|body|[string]|false|The list of DICOM resources (studies, series, and/or instances) to be merged into the study of interest (mandatory option)|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="merge-study-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="merge-study-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## List metadata

> Code samples

```bash
curl https://example.com/studies/string/metadata \
  -H 'Accept: application/json'
```

`GET /studies/{id}/metadata`

Get the list of metadata that are associated with the given study

<h3 id="list-metadata-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|If present, also retrieve the value of the individual metadata|
|id|path|string|true|Orthanc identifier of the study of interest|

> Example responses

> 200 Response

```json
[
  "LastUpdate"
]
```

<h3 id="list-metadata-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get metadata

> Code samples

```bash
curl https://example.com/studies/string/metadata/string
```

`GET /studies/{id}/metadata/{name}`

Get the value of a metadata that is associated with the given study

<h3 id="get-metadata-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Optional revision of the metadata, to check if its content has changed|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the metadata, or its index (cf. `UserMetadata` configuration option)|

<h3 id="get-metadata-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|ETag|string||Revision of the metadata, to be used in further `PUT` or `DELETE` operations|

<aside class="success">
This operation does not require authentication
</aside>

## Set metadata

> Code samples

```bash
curl https://example.com/studies/string/metadata/string \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /studies/{id}/metadata/{name}`

Set the value of some metadata in the given DICOM study. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).

> Body parameter

```json
null
```

<h3 id="set-metadata-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the metadata, if this is not the first time this metadata is set.|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the metadata, or its index (cf. `UserMetadata` configuration option)|
|body|body|object|false|none|

<h3 id="set-metadata-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete metadata

> Code samples

```bash
curl https://example.com/studies/string/metadata/string \
  -X DELETE
```

`DELETE /studies/{id}/metadata/{name}`

Delete some metadata associated with the given DICOM study. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).

<h3 id="delete-metadata-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|Revision of the metadata, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.|
|id|path|string|true|Orthanc identifier of the study of interest|
|name|path|string|true|The name of the metadata, or its index (cf. `UserMetadata` configuration option)|

<h3 id="delete-metadata-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Modify study

> Code samples

```bash
curl https://example.com/studies/string/modify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Force": true,
    "Keep": [
      "string"
    ],
    "KeepSource": true,
    "Permissive": true,
    "Priority": 0,
    "PrivateCreator": "string",
    "Remove": [
      "string"
    ],
    "RemovePrivateTags": true,
    "Replace": {},
    "Synchronous": true,
    "Transcode": "string"
  }'
```

`POST /studies/{id}/modify`

Start a job that will modify all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series

> Body parameter

```json
{
  "Asynchronous": true,
  "Force": true,
  "Keep": [
    "string"
  ],
  "KeepSource": true,
  "Permissive": true,
  "Priority": 0,
  "PrivateCreator": "string",
  "Remove": [
    "string"
  ],
  "RemovePrivateTags": true,
  "Replace": {},
  "Synchronous": true,
  "Transcode": "string"
}
```

<h3 id="modify-study-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the study of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» Force|body|boolean|false|Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world|
|» Keep|body|[string]|false|Keep the original value of the specified tags, to be chosen among the `StudyInstanceUID`, `SeriesInstanceUID` and `SOPInstanceUID` tags. Avoid this feature as much as possible, as this breaks the DICOM model of the real world.|
|» KeepSource|body|boolean|false|If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» PrivateCreator|body|string|false|The private creator to be used for private tags in `Replace`|
|» Remove|body|[string]|false|List of tags that must be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» RemovePrivateTags|body|boolean|false|Remove the private tags from the DICOM instances (defaults to `false`)|
|» Replace|body|object|false|Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|
|» Transcode|body|string|false|Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="modify-study-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="modify-study-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Get study module

> Code samples

```bash
curl https://example.com/studies/string/module \
  -H 'Accept: application/json'
```

`GET /studies/{id}/module`

Get the study module of the DICOM study whose Orthanc identifier is provided in the URL

<h3 id="get-study-module-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignore-length|query|[string]|false|Also include the DICOM tags that are provided in this list, even if their associated value is long|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Orthanc identifier of the study of interest|

> Example responses

> 200 Response

```json
{
  "0008,0020": {
    "Name": "StudyDate",
    "Type": "String",
    "Value": "20061201"
  },
  "0008,0030": {
    "Name": "StudyTime",
    "Type": "String",
    "Value": "141645.000000"
  },
  "0008,0050": {
    "Name": "AccessionNumber",
    "Type": "String",
    "Value": "0"
  },
  "0008,0090": {
    "Name": "ReferringPhysicianName",
    "Type": "String",
    "Value": "dAEvNTxZJO0E"
  },
  "0008,1030": {
    "Name": "StudyDescription",
    "Type": "String",
    "Value": "IRM cérébrale, neuro-crâne"
  },
  "0008,1032": {
    "Name": "ProcedureCodeSequence",
    "Type": "Sequence",
    "Value": [
      {
        "0008,0100": {
          "Name": "CodeValue",
          "Type": "String",
          "Value": "IRMCEREB"
        },
        "0008,0102": {
          "Name": "CodingSchemeDesignator",
          "Type": "String",
          "Value": "XPLORE"
        },
        "0008,0104": {
          "Name": "CodeMeaning",
          "Type": "String",
          "Value": "IRM cérébrale, neuro-crâne"
        },
        "0008,010b": {
          "Name": "ContextGroupExtensionFlag",
          "Type": "String",
          "Value": "N"
        }
      }
    ]
  },
  "0008,1110": {
    "Name": "ReferencedStudySequence",
    "Type": "Sequence",
    "Value": [
      {
        "0008,1150": {
          "Name": "ReferencedSOPClassUID",
          "Type": "String",
          "Value": "1.2.840.10008.3.1.2.3.1"
        },
        "0008,1155": {
          "Name": "ReferencedSOPInstanceUID",
          "Type": "String",
          "Value": "2.16.840.1.113669.632.20.1211.10000357775"
        }
      }
    ]
  },
  "0020,000d": {
    "Name": "StudyInstanceUID",
    "Type": "String",
    "Value": "2.16.840.1.113669.632.20.1211.10000357775"
  },
  "0020,0010": {
    "Name": "StudyID",
    "Type": "String",
    "Value": "218211405"
  }
}
```

<h3 id="get-study-module-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get patient module of study

> Code samples

```bash
curl https://example.com/studies/string/module-patient \
  -H 'Accept: application/json'
```

`GET /studies/{id}/module-patient`

Get the patient module of the DICOM study whose Orthanc identifier is provided in the URL

<h3 id="get-patient-module-of-study-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignore-length|query|[string]|false|Also include the DICOM tags that are provided in this list, even if their associated value is long|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Orthanc identifier of the study of interest|

> Example responses

> 200 Response

```json
{
  "0010,0010": {
    "Name": "PatientName",
    "Type": "String",
    "Value": "BRAINIX"
  },
  "0010,0020": {
    "Name": "PatientID",
    "Type": "String",
    "Value": "5Yp0E"
  },
  "0010,0030": {
    "Name": "PatientBirthDate",
    "Type": "String",
    "Value": "19490301"
  },
  "0010,0040": {
    "Name": "PatientSex",
    "Type": "String",
    "Value": "0000"
  }
}
```

<h3 id="get-patient-module-of-study-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get parent patient

> Code samples

```bash
curl https://example.com/studies/string/patient \
  -H 'Accept: application/json'
```

`GET /studies/{id}/patient`

Get detailed information about the parent patient of the DICOM study whose Orthanc identifier is provided in the URL

<h3 id="get-parent-patient-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the study of interest|

> Example responses

> 200 Response

```json
{
  "ID": "16738bc3-e47ed42a-43ce044c-a3414a45-cb069bd0",
  "IsStable": true,
  "LastUpdate": "20180414T091532",
  "MainDicomTags": {
    "PatientBirthDate": "19490301",
    "PatientID": "5Yp0E",
    "PatientName": "BRAINIX",
    "PatientSex": "0000"
  },
  "Studies": [
    "27f7126f-4f66fb14-03f4081b-f9341db2-53925988"
  ],
  "Type": "Patient"
}
```

<h3 id="get-parent-patient-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Reconstruct tags &amp; optionally files of study

> Code samples

```bash
curl https://example.com/studies/string/reconstruct \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "ReconstructFiles": true
  }'
```

`POST /studies/{id}/reconstruct`

Reconstruct the main DICOM tags in DB of the study whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.

> Body parameter

```json
{
  "ReconstructFiles": true
}
```

<h3 id="reconstruct-tags-optionally-files-of-study-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the study of interest|
|body|body|object|false|none|
|» ReconstructFiles|body|boolean|false|Also reconstruct the files of the resources (e.g: apply IngestTranscoding, StorageCompression). 'false' by default. (New in Orthanc 1.11.0)|

<h3 id="reconstruct-tags-optionally-files-of-study-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get child series

> Code samples

```bash
curl https://example.com/studies/string/series \
  -H 'Accept: application/json'
```

`GET /studies/{id}/series`

Get detailed information about the child series of the DICOM study whose Orthanc identifier is provided in the URL

<h3 id="get-child-series-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)|
|requestedTags|query|string|false|If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return |
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|id|path|string|true|Orthanc identifier of the study of interest|

> Example responses

> 200 Response

```json
[
  {
    "ExpectedNumberOfInstances": null,
    "ID": "635faa23-fd8378ee-d03bce29-ee47c2fb-a65c5509",
    "Instances": [
      "ed8aacd6-5d2cfad4-9e1a2f77-edf1cee5-8f3bdde0",
      "7a93b85e-5956dbf9-894c1f27-dc73112f-4cbcda70",
      "065baa49-a7b4e4a0-e7468f1d-e9b5bca8-56316fa2",
      "ca69bc1a-a4fcc0a8-9e6828b0-c816dbaa-240fdc45",
      "edd8ff85-9805d97a-2375f736-40662993-aef40418",
      "..."
    ],
    "IsStable": true,
    "LastUpdate": "20180414T091528",
    "{...}": "..."
  },
  {
    "ExpectedNumberOfInstances": null,
    "ID": "dc0216d2-a406a5ad-31ef7a78-113ae9d9-29939f9e",
    "Instances": [
      "2cd73574-190bb147-0a86bcca-68c75104-d22f09dd",
      "ff95b7c0-d14e3e42-d642eacd-281cb07c-4e0bbc8b",
      "22384bf2-0bbe7bdb-013f6ff2-f7834e9f-3d8754bf",
      "3e50a403-17c8ce10-6e0234e3-a8bed1bf-3dbc54ee",
      "3db0ed84-61a28da4-72a52d5a-3f7daa77-b81ddf17",
      "..."
    ],
    "IsStable": true,
    "LastUpdate": "20180414T091530",
    "{...}": "..."
  },
  {
    "ExpectedNumberOfInstances": null,
    "ID": "1e2c125c-411b8e86-3f4fe68e-a7584dd3-c6da78f0",
    "Instances": [
      "2db53a93-91179cd5-f2080c32-c9b156ec-b8f65fa7",
      "9058e01a-31a7d982-1691e575-a8607d94-29a9aaca",
      "40df6ac1-5ec86316-035ff3c1-07e5c8a8-f6cbd37c",
      "144ca294-6e759cfb-e14e3404-e78a0a29-1dd3273c",
      "3b2a215c-2560d4b0-e3730c07-87d3fa7d-3fef44ed",
      "..."
    ],
    "IsStable": true,
    "LastUpdate": "20180414T091530",
    "{...}": "..."
  },
  {
    "ExpectedNumberOfInstances": null,
    "ID": "4baa97c7-d53d3d82-a5eb9403-17ef5a77-4e0efb55",
    "Instances": [
      "9b41ef96-b4031ffc-b1b7ea5d-8a38d55d-fe804601",
      "8137542c-069dd229-d0226fba-f8c571cd-19c7b61a",
      "985681e7-99cd2ce5-f7d79f12-27bfc29f-0e5a4d72",
      "f0b9f0ab-110181f8-ce83a1a2-4d8eb2c9-0b682503",
      "ef13019a-9edf339d-395d8632-558518bf-b82b1b21",
      "..."
    ],
    "IsStable": true,
    "LastUpdate": "20180414T091531",
    "{...}": "..."
  },
  {
    "ExpectedNumberOfInstances": null,
    "ID": "2ac1316d-3e432022-62eabff2-c59f5475-9b1ac3f8",
    "Instances": [
      "61eeef27-cb5515a3-0860ab44-90125207-a56e6883",
      "18bc4146-4bb09c43-e4080c80-19bfc186-6b3d7272",
      "00402ce7-ac05c687-4d0839bc-cecd4fad-3d1b7eed",
      "ea902bf2-6dc22ee9-e962333a-7ce2c27f-d684977e",
      "8371936f-4141219a-ca7d69df-0d82697e-271eef91",
      "..."
    ],
    "IsStable": true,
    "LastUpdate": "20180414T091531",
    "{...}": "..."
  },
  "..."
]
```

<h3 id="get-child-series-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get shared tags

> Code samples

```bash
curl https://example.com/studies/string/shared-tags \
  -H 'Accept: application/json'
```

`GET /studies/{id}/shared-tags`

Extract the DICOM tags whose value is constant across all the child instances of the DICOM study whose Orthanc identifier is provided in the URL

<h3 id="get-shared-tags-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|short|query|boolean|false|If present, report the DICOM tags in hexadecimal format|
|simplify|query|boolean|false|If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)|
|id|path|string|true|Orthanc identifier of the study of interest|

> Example responses

> 200 Response

```json
{
  "0008,0005": {
    "Name": "SpecificCharacterSet",
    "Type": "String",
    "Value": "ISO_IR 100"
  },
  "0008,0012": {
    "Name": "InstanceCreationDate",
    "Type": "String",
    "Value": "20061201"
  },
  "0008,0014": {
    "Name": "InstanceCreatorUID",
    "Type": "String",
    "Value": "1.3.46.670589.11.8743.5"
  },
  "0008,0016": {
    "Name": "SOPClassUID",
    "Type": "String",
    "Value": "1.2.840.10008.5.1.4.1.1.4"
  },
  "0008,0020": {
    "Name": "StudyDate",
    "Type": "String",
    "Value": "20061201"
  },
  "{...}": "..."
}
```

<h3 id="get-shared-tags-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Split study

> Code samples

```bash
curl https://example.com/studies/string/split \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Asynchronous": true,
    "Instances": [
      "string"
    ],
    "KeepSource": true,
    "Permissive": true,
    "Priority": 0,
    "Remove": [
      "string"
    ],
    "Replace": {},
    "Series": [
      "string"
    ],
    "Synchronous": true
  }'
```

`POST /studies/{id}/split`

Start a new job so as to split the DICOM study whose Orthanc identifier is provided in the URL, by taking some of its children series or instances out of it and putting them into a brand new study (this new study is created by setting the `StudyInstanceUID` tag to a random identifier): https://book.orthanc-server.com/users/anonymization.html#splitting

> Body parameter

```json
{
  "Asynchronous": true,
  "Instances": [
    "string"
  ],
  "KeepSource": true,
  "Permissive": true,
  "Priority": 0,
  "Remove": [
    "string"
  ],
  "Replace": {},
  "Series": [
    "string"
  ],
  "Synchronous": true
}
```

<h3 id="split-study-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the study of interest|
|body|body|object|false|none|
|» Asynchronous|body|boolean|false|If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.|
|» Instances|body|[string]|false|The list of instances to be separated from the parent study. These instances must all be children of the same source study, that is specified in the URI.|
|» KeepSource|body|boolean|false|If set to `true`, instructs Orthanc to keep a copy of the original series/instances in the source study. By default, the original series/instances are deleted from Orthanc.|
|» Permissive|body|boolean|false|If `true`, ignore errors during the individual steps of the job.|
|» Priority|body|number|false|In asynchronous mode, the priority of the job. The lower the value, the higher the priority.|
|» Remove|body|[string]|false|List of tags that must be removed in the new study (from the same modules as in the `Replace` option)|
|» Replace|body|object|false|Associative array to change the value of some DICOM tags in the new study. These tags must be part of the "Patient Module Attributes" or the "General Study Module Attributes", as specified by the DICOM 2011 standard in Tables C.7-1 and C.7-3.|
|» Series|body|[string]|false|The list of series to be separated from the parent study. These series must all be children of the same source study, that is specified in the URI.|
|» Synchronous|body|boolean|false|If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Path": "string"
}
```

<h3 id="split-study-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="split-study-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|In asynchronous mode, identifier of the job|
|Path|string|false|none|In asynchronous mode, path to access the job in the REST API|

<aside class="success">
This operation does not require authentication
</aside>

## Get study statistics

> Code samples

```bash
curl https://example.com/studies/string/statistics \
  -H 'Accept: application/json'
```

`GET /studies/{id}/statistics`

Get statistics about the given study

<h3 id="get-study-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Orthanc identifier of the study of interest|

> Example responses

> 200 Response

```json
{
  "CountInstances": 232,
  "CountSeries": 7,
  "DicomDiskSize": "68153234",
  "DicomDiskSizeMB": 64,
  "DicomUncompressedSize": "68153234",
  "DicomUncompressedSizeMB": 64,
  "DiskSize": "72203548",
  "DiskSizeMB": 68,
  "UncompressedSize": "72203548",
  "UncompressedSizeMB": 68
}
```

<h3 id="get-study-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-study-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CountInstances|number|false|none|Number of child instances within this study|
|CountSeries|number|false|none|Number of child series within this study|
|DicomDiskSize|string|false|none|Size on the disk of the DICOM instances associated with the study, expressed in bytes|
|DicomDiskSizeMB|number|false|none|Size on the disk of the DICOM instances associated with the study, expressed in megabytes (MB)|
|DicomUncompressedSize|string|false|none|Size on the disk of the uncompressed DICOM instances associated with the study, expressed in bytes|
|DicomUncompressedSizeMB|number|false|none|Size on the disk of the uncompressed DICOM instances associated with the study, expressed in megabytes (MB)|
|DiskSize|string|false|none|Size of the study on the disk in bytes, expressed as a string for 64bit compatibility with JSON|
|DiskSizeMB|number|false|none|Size of the study on the disk, expressed in megabytes (MB)|
|UncompressedSize|string|false|none|Size of the study after decompression in bytes, expressed as a string for 64bit compatibility with JSON|
|UncompressedSizeMB|number|false|none|Size of the study after decompression, expressed in megabytes (MB). This is different from `DiskSizeMB` iff `StorageCompression` is `true`.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="orthanc-api-logs">Logs</h1>

## Get main log level

> Code samples

```bash
curl https://example.com/tools/log-level
```

`GET /tools/log-level`

Get the main log level of Orthanc

<h3 id="get-main-log-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set main log level

> Code samples

```bash
curl https://example.com/tools/log-level \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /tools/log-level`

Set the main log level of Orthanc

> Body parameter

```json
null
```

<h3 id="set-main-log-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="set-main-log-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get log level for `dicom`

> Code samples

```bash
curl https://example.com/tools/log-level-dicom
```

`GET /tools/log-level-dicom`

Get the log level of the log category `dicom`

<h3 id="get-log-level-for-dicom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set log level for `dicom`

> Code samples

```bash
curl https://example.com/tools/log-level-dicom \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /tools/log-level-dicom`

Set the log level of the log category `dicom`

> Body parameter

```json
null
```

<h3 id="set-log-level-for-dicom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="set-log-level-for-dicom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get log level for `generic`

> Code samples

```bash
curl https://example.com/tools/log-level-generic
```

`GET /tools/log-level-generic`

Get the log level of the log category `generic`

<h3 id="get-log-level-for-generic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set log level for `generic`

> Code samples

```bash
curl https://example.com/tools/log-level-generic \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /tools/log-level-generic`

Set the log level of the log category `generic`

> Body parameter

```json
null
```

<h3 id="set-log-level-for-generic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="set-log-level-for-generic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get log level for `http`

> Code samples

```bash
curl https://example.com/tools/log-level-http
```

`GET /tools/log-level-http`

Get the log level of the log category `http`

<h3 id="get-log-level-for-http-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set log level for `http`

> Code samples

```bash
curl https://example.com/tools/log-level-http \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /tools/log-level-http`

Set the log level of the log category `http`

> Body parameter

```json
null
```

<h3 id="set-log-level-for-http-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="set-log-level-for-http-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get log level for `jobs`

> Code samples

```bash
curl https://example.com/tools/log-level-jobs
```

`GET /tools/log-level-jobs`

Get the log level of the log category `jobs`

<h3 id="get-log-level-for-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set log level for `jobs`

> Code samples

```bash
curl https://example.com/tools/log-level-jobs \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /tools/log-level-jobs`

Set the log level of the log category `jobs`

> Body parameter

```json
null
```

<h3 id="set-log-level-for-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="set-log-level-for-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get log level for `lua`

> Code samples

```bash
curl https://example.com/tools/log-level-lua
```

`GET /tools/log-level-lua`

Get the log level of the log category `lua`

<h3 id="get-log-level-for-lua-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set log level for `lua`

> Code samples

```bash
curl https://example.com/tools/log-level-lua \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /tools/log-level-lua`

Set the log level of the log category `lua`

> Body parameter

```json
null
```

<h3 id="set-log-level-for-lua-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="set-log-level-for-lua-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get log level for `plugins`

> Code samples

```bash
curl https://example.com/tools/log-level-plugins
```

`GET /tools/log-level-plugins`

Get the log level of the log category `plugins`

<h3 id="get-log-level-for-plugins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set log level for `plugins`

> Code samples

```bash
curl https://example.com/tools/log-level-plugins \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /tools/log-level-plugins`

Set the log level of the log category `plugins`

> Body parameter

```json
null
```

<h3 id="set-log-level-for-plugins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="set-log-level-for-plugins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get log level for `sqlite`

> Code samples

```bash
curl https://example.com/tools/log-level-sqlite
```

`GET /tools/log-level-sqlite`

Get the log level of the log category `sqlite`

<h3 id="get-log-level-for-sqlite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set log level for `sqlite`

> Code samples

```bash
curl https://example.com/tools/log-level-sqlite \
  -X PUT \
  -H 'Content-Type: text/plain'
```

`PUT /tools/log-level-sqlite`

Set the log level of the log category `sqlite`

> Body parameter

```json
null
```

<h3 id="set-log-level-for-sqlite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="set-log-level-for-sqlite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>
