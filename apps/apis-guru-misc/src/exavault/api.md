<h1 id="exavault">ExaVault v2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

ExaVaults API allows you to incorporate ExaVaults suite of file transfer and user management tools into your own application.\nExaVault supports both POST (recommended when requesting large data sets) and GET operations, and requires an API key in order to use.

Base URLs:

* <a href="https://accountname.exavault.com/api/v2">https://accountname.exavault.com/api/v2</a> - Replace accountname with your account name

Email: <a href="mailto:support@exavault.com">ExaVault Support</a> 

<a href="https://www.exavault.com/developer/">External documentation</a>

<h1 id="exavault-resources">Resources</h1>

The file and folder management APIs allow you to work with the core of your account. You can upload or download files and create, move and delete files & folders, to name a few options.

## Get Resource Properties

<a id="opIdgetResourceInfo"></a>

> Code samples

```bash
curl 'https://example.com/resources?resource=string' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /resources`

Returns details for specified file/folder id or hash, including upload date, size and type. For the full list of returned properties, see the response syntax, below.

**Notes:**
- Authenticated user should have list permission.


<h3 id="get-resource-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|resource|query|string|true|Resource identifier of the file or folder to get metadata for.|
|include|query|string|false|Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "accessedAt": "2020-07-29T09:53:36-07:00",
      "createdAt": "2020-07-28T15:59:23-07:00",
      "createdBy": "exavaultuser",
      "extension": "",
      "fileCount": 2,
      "hash": "7a2abd9f90ce196hf3f650c612372c0b",
      "name": "Test",
      "path": "/Test",
      "previewable": false,
      "size": 33415,
      "type": "dir",
      "updatedAt": "2020-07-29T09:52:47-07:00",
      "uploadDate": "2020-07-28T15:59:23-07:00"
    },
    "id": 2554051,
    "relationships": {
      "directFile": {
        "data": {
          "id": 101,
          "type": "directFile"
        }
      },
      "notifications": [
        {
          "data": {
            "id": 1117,
            "type": "notification"
          }
        }
      ],
      "ownerAccount": {
        "data": {
          "id": 7,
          "type": "account"
        }
      },
      "ownerUser": {
        "data": {
          "id": 124437,
          "type": "user"
        }
      },
      "parentResource": {
        "data": {
          "id": 103,
          "type": "resource"
        }
      },
      "share": {
        "data": {
          "id": 1499,
          "type": "share"
        }
      }
    },
    "type": "resource"
  },
  "included": [
    {
      "attributes": {
        "accessDescription": "Download only",
        "accessMode": {
          "delete": false,
          "download": true,
          "modify": false,
          "upload": false
        },
        "assets": [
          "Test"
        ],
        "created": "2020-07-29T08:51:39-07:00",
        "embed": false,
        "expiration": null,
        "expired": false,
        "fileDropCreateFolders": false,
        "formId": null,
        "hasNotification": false,
        "hasPassword": false,
        "hash": "17t-eojdhh1j",
        "inherited": null,
        "messages": [],
        "modified": "2020-07-29T09:53:36-07:00",
        "name": "Test",
        "ownerHash": "17t-eojowf1j-sfh242uj",
        "paths": [
          "/Test"
        ],
        "public": true,
        "recipients": [],
        "requireEmail": false,
        "resent": null,
        "status": 1,
        "trackingStatus": null,
        "type": "shared_folder"
      },
      "id": 1499,
      "type": "share"
    },
    {
      "attributes": {
        "accountId": 7,
        "blockUntil": "-001-11-29T16:07:02-07:52",
        "created": "2020-07-29T09:53:12-07:00",
        "isEnabled": true,
        "isIndexEnabled": true,
        "modified": "2020-07-29T09:53:12-07:00",
        "path": "/Test"
      },
      "id": 101,
      "type": "directFile"
    },
    {
      "attributes": {
        "action": "upload",
        "created": "2020-07-29T20:15:09-07:00",
        "message": null,
        "modified": "2020-07-29T20:15:09-07:00",
        "name": "/Test",
        "path": "/Test",
        "readableDescription": "anybody uploads to '/Test'",
        "readableDescriptionWithoutPath": "anybody uploads to this folder",
        "recipientEmails": [
          "exavault@example.com",
          "exavault+1@example.com"
        ],
        "recipients": [
          {
            "created": "2020-07-29T20:15:09-07:00",
            "email": "exavault@example.com",
            "id": 81,
            "modified": "2020-07-29T20:15:09-07:00",
            "notificationId": 1143
          },
          {
            "created": "2020-07-29T20:15:09-07:00",
            "email": "exavault+1@example.com",
            "id": 83,
            "modified": "2020-07-29T20:15:09-07:00",
            "notificationId": 1143
          }
        ],
        "sendEmail": false,
        "type": "folder",
        "usernames": [
          "exavaultuser"
        ]
      },
      "id": 1143,
      "relationships": {
        "ownerUser": {
          "data": {
            "id": 124437,
            "type": "user"
          }
        },
        "resource": {
          "data": {
            "id": 2554051,
            "type": "resource"
          }
        }
      },
      "type": "notification"
    },
    {
      "attributes": {
        "accessTimestamp": "2020-07-27 19:32:45",
        "accountName": "exavault",
        "created": "2020-07-24T07:51:12-07:00",
        "email": "test@example.com",
        "expiration": null,
        "firstLogin": false,
        "homeDir": "/",
        "modified": "2020-07-24T07:51:13-07:00",
        "nickname": "exavaultnickname",
        "onboarding": true,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "master",
        "status": 1,
        "timeZone": "America/Los_Angeles",
        "username": "exavaultuser"
      },
      "id": 124419,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 2536831,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 251,
            "type": "account"
          }
        }
      },
      "type": "user"
    },
    {
      "attributes": {
        "accountName": "exampleaccount",
        "accountOnboarding": true,
        "allowedIp": null,
        "branding": true,
        "clientId": 1,
        "complexPasswords": false,
        "created": "2019-05-30T20:48:57Z",
        "customDomain": false,
        "customSignature": null,
        "externalDomains": null,
        "maxUsers": 5,
        "modified": "2019-08-27T01:03:41Z",
        "quota": {
          "diskLimit": 37580963840,
          "diskUsed": 24938382543,
          "noticeEnabled": true,
          "noticeThreshold": 90
        },
        "secureOnly": false,
        "showReferralLinks": true,
        "status": 1,
        "userCount": 4,
        "welcomeEmailContent": "\"Great news, your new account is ready!\\n\\nFor your records, we've listed information you'll use to log in below:\\n\\nFTP Server: [[ftpserver]]\\n\\nUsername (Web and FTP access): [[username]]\\n\\n[[setpassword]]\"\n",
        "welcomeEmailSubject": "ExaVault File Sharing Account"
      },
      "id": 7,
      "relationships": {
        "masterUser": {
          "data": {
            "id": 1,
            "type": "user"
          }
        }
      },
      "type": "account"
    },
    {
      "attributes": {
        "accessedAt": "2011-03-21T00:18:56-07:00",
        "createdAt": "2011-03-21T00:18:56-07:00",
        "createdBy": "exampleuser",
        "extension": "dir",
        "fileCount": 3,
        "hash": "ec4aa9a91be282666a165899a14f29b1",
        "name": "examplefolder",
        "path": "/examplefolder",
        "previewable": false,
        "size": 12321321,
        "updatedAt": "2011-03-21T00:18:56-07:00",
        "uploadDate": "2011-03-21T00:18:56-07:00"
      },
      "id": 2,
      "relationships": {
        "directFile": {
          "data": {
            "id": 101,
            "type": "directFile"
          }
        },
        "notifications": [
          {
            "data": {
              "id": 1117,
              "type": "notification"
            }
          }
        ],
        "ownerAccount": {
          "data": {
            "id": 7,
            "type": "account"
          }
        },
        "ownerUser": {
          "data": {
            "id": 124437,
            "type": "user"
          }
        },
        "parentResource": {
          "data": {
            "id": 103,
            "type": "resource"
          }
        },
        "share": {
          "data": {
            "id": 1499,
            "type": "share"
          }
        }
      },
      "type": "resource"
    }
  ],
  "responseStatus": 200
}
```

<h3 id="get-resource-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[ResourceResponse](#schemaresourceresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a folder

<a id="opIdaddFolder"></a>

> Code samples

```bash
curl https://example.com/resources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "path": "/exavault/exampleFile.txt"
  }'
```

`POST /resources`

Create a new empty folder at the specified path. New files can be uploaded via the [/resources/upload](#operation/uploadFile) endpoint.

**Notes:**
- Authenticated user should have modify permission.


> Body parameter

```json
{
  "path": "/exavault/exampleFile.txt"
}
```

<h3 id="create-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|body|body|object|false|none|
|» name|body|string|false|Name of the folder to create. Required if **path** is not used|
|» parentResource|body|string|false|Resource identifier where to create a folder. Required if **path** is not used|
|» path|body|string|false|Fully-qualified path to the new folder including folder's name|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "accessedAt": "2020-07-29T09:53:36-07:00",
      "createdAt": "2020-07-28T15:59:23-07:00",
      "createdBy": "exavaultuser",
      "extension": "",
      "fileCount": 2,
      "hash": "7a2hhf9f90ce196de3f650c612372c0b",
      "name": "Test Folder",
      "path": "/Test Folder",
      "previewable": false,
      "size": 33415,
      "type": "dir",
      "updatedAt": "2020-07-29T10:27:08-07:00",
      "uploadDate": "2020-07-28T15:59:23-07:00"
    },
    "id": 2554051,
    "relationships": {
      "directFile": {
        "data": {
          "id": 101,
          "type": "directFile"
        }
      },
      "notifications": [
        {
          "data": {
            "id": 1117,
            "type": "notification"
          }
        }
      ],
      "ownerAccount": {
        "data": {
          "id": 7,
          "type": "account"
        }
      },
      "ownerUser": {
        "data": {
          "id": 124437,
          "type": "user"
        }
      },
      "parentResource": {
        "data": {
          "id": 103,
          "type": "resource"
        }
      },
      "share": {
        "data": {
          "id": 1499,
          "type": "share"
        }
      }
    },
    "type": "resource"
  },
  "included": [],
  "responseStatus": 200
}
```

<h3 id="create-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Operation|[ResourceResponse](#schemaresourceresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Resources

<a id="opIddeleteResources"></a>

> Code samples

```bash
curl https://example.com/resources \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1' \
  -d '{
    "resources": [
      "exampleFile1.txt",
      "exampleFile2.txt"
    ]
  }'
```

`DELETE /resources`

Delete multiple file or folder resourcess. Deleting a folder resource will also delete any resources in that folder.

**Notes:**
- Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
- It is not possible to un-delete a deleted resource.


> Body parameter

```json
{
  "resources": [
    "exampleFile1.txt",
    "exampleFile2.txt"
  ]
}
```

<h3 id="delete-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key|
|ev-access-token|header|string|true|Access Token|
|body|body|object|false|none|
|» resources|body|[string]|true|Resource identifiers of items to delete.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "responseStatus": 200
}
```

> 207 Response

```json
{
  "responses": [
    {
      "data": {
        "id": 2,
        "meta": {
          "path": "/deletefolder"
        },
        "type": "resource"
      },
      "responseStatus": 200
    },
    {
      "errors": [
        {
          "code": null,
          "detail": null,
          "meta": {
            "path": "/deletefolder2"
          },
          "title": null
        }
      ],
      "responseStatus": 404
    }
  ]
}
```

<h3 id="delete-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[EmptyResponse](#schemaemptyresponse)|
|207|Multi-Status|Multi Response|[ResourceMultiResponse](#schemaresourcemultiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Compress resources

<a id="opIdcompressFiles"></a>

> Code samples

```bash
curl https://example.com/resources/compress \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "archiveName": "exampleFiles.zip",
    "parentResource": "/exavault",
    "resources": [
      "exampleFile1.txt",
      "exampleFile2.txt",
      "id:234222"
    ]
  }'
```

`POST /resources/compress`

Create a zip archive containing the files from given set of paths. Note that this can be a very slow operation if you have indicated many files should be included in the archive.

**Notes:**
- Authenticated user should have modify permission.


> Body parameter

```json
{
  "archiveName": "exampleFiles.zip",
  "parentResource": "/exavault",
  "resources": [
    "exampleFile1.txt",
    "exampleFile2.txt",
    "id:234222"
  ]
}
```

<h3 id="compress-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|body|body|object|false|none|
|» archiveName|body|string|false|Name of the zip archive to create. If left blank, current date will be used.|
|» parentResource|body|string|false|Resource identifier of the folder where zip archive should be created.|
|» resources|body|[string]|true|Resource identifiers for file(s)/folder(s) to include in new zip file|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "accessedAt": "2020-07-29T19:04:09-07:00",
      "createdAt": "2020-07-29T19:04:09-07:00",
      "createdBy": "exavault",
      "extension": "zip",
      "fileCount": null,
      "hash": "b2d987d4ed9dhh28e3a18adafe59107c",
      "name": "Compress test.zip",
      "path": "/Test/Compress test.zip",
      "previewable": false,
      "size": 33434,
      "type": "file",
      "updatedAt": "2020-07-29T19:04:09-07:00",
      "uploadDate": "2020-07-29T19:04:09-07:00"
    },
    "id": 2566609,
    "relationships": {
      "ownerAccount": {
        "data": {
          "id": 7,
          "type": "account"
        }
      },
      "ownerUser": {
        "data": {
          "id": 124437,
          "type": "user"
        }
      },
      "parentResource": {
        "data": {
          "id": 2554051,
          "type": "resource"
        }
      }
    },
    "type": "resource"
  },
  "responseStatus": 201
}
```

<h3 id="compress-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Operation|[ResourceResponse](#schemaresourceresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Copy resources

<a id="opIdcopyResources"></a>

> Code samples

```bash
curl https://example.com/resources/copy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "parentResource": "/exavault/exampleFileFolder",
    "resources": [
      "/exavault/exampleFile.txt",
      "/exavault/otherFile.txt",
      "id:28282828"
    ]
  }'
```

`POST /resources/copy`

Copies a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account.
In the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be copied to the 
root of the `parentResource`.

**Notes:**
- Authenticated user should have modify permission.


> Body parameter

```json
{
  "parentResource": "/exavault/exampleFileFolder",
  "resources": [
    "/exavault/exampleFile.txt",
    "/exavault/otherFile.txt",
    "id:28282828"
  ]
}
```

<h3 id="copy-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|body|body|object|false|none|
|» parentResource|body|string|true|Resource identifier for folder where items will be copied to.|
|» resources|body|[string]|true|Resource identifier(s) of items to be copied to a new location|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "accessedAt": "2011-03-21T00:18:56-07:00",
      "accessedTime": 0,
      "createdAt": "2011-03-21T00:18:56-07:00",
      "createdBy": "exampleuser",
      "createdTime": 0,
      "extension": "string",
      "fileCount": 0,
      "hash": "ec4aa9a91be282666a165899a14f29b1",
      "name": "examplefolder",
      "path": "/examplefolder",
      "previewable": true,
      "size": 0,
      "type": "file",
      "updatedAt": "2011-03-21T00:18:56-07:00",
      "updatedTime": 0,
      "uploadDate": "2011-03-21T00:18:56-07:00"
    },
    "id": 1,
    "relationships": {
      "directFile": {
        "data": {
          "id": 2,
          "type": "directFile"
        }
      },
      "notifications": [
        {
          "data": {
            "id": 2,
            "type": "notification"
          }
        }
      ],
      "parentResource": {
        "data": {
          "id": 2,
          "type": "resource"
        }
      },
      "share": {
        "data": {
          "id": 2345,
          "type": "share"
        }
      }
    },
    "type": "resource"
  },
  "meta": {
    "id": 2321
  }
}
```

> 207 Response

```json
{
  "responses": [
    {
      "data": {
        "attributes": {
          "accessedAt": "2020-07-29T12:53:26-07:00",
          "createdAt": "2020-07-29T12:53:26-07:00",
          "createdBy": "exavault",
          "extension": "jpg",
          "fileCount": null,
          "hash": "f573b417707095b017a26d4e5a2e6dd0",
          "name": "test.jpg",
          "path": "/HomeTest/test.jpg",
          "previewable": false,
          "size": 33415,
          "type": "file",
          "updatedAt": "2020-07-29T12:53:26-07:00",
          "uploadDate": "2020-07-29T12:53:26-07:00"
        },
        "id": 2563533,
        "type": "resource"
      },
      "meta": {
        "destinationPath": "/HomeTest",
        "path": "/Test/test.jpg"
      },
      "responseStatus": 200
    },
    {
      "errors": [
        {
          "code": null,
          "detail": null,
          "meta": {
            "destinationPath": "/HomeTest",
            "path": "/Test/test2.jpg"
          },
          "title": null
        }
      ],
      "responseStatus": 404
    }
  ]
}
```

<h3 id="copy-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[ResourceCopyMove](#schemaresourcecopymove)|
|207|Multi-Status|Multi Response|[ResourceMultiResponse](#schemaresourcemultiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Download a file

<a id="opIddownload"></a>

> Code samples

```bash
curl 'https://example.com/resources/download?resources%5B%5D=string' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /resources/download`

Downloads a file from the server. Whenever more than one file is being downloaded, the file are first zipped into  a single file before the download starts, and the resulting zip file is named to match the `downloadArchiveName` parameter.

**NOTE**: Downloading many files at once  may result in a long delay before the API will return a response. You may need to override default timeout values in your API client, or download files individually.

<h3 id="download-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|resources[]|query|[string]|true|Path of file or folder to be downloaded, starting from the root. Can also be an array of paths.|
|downloadArchiveName|query|string|false|When downloading multiple files, this will be used as the name of the zip file that is created.|

<h3 id="download-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of the file|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Extract resources

<a id="opIdextractFiles"></a>

> Code samples

```bash
curl https://example.com/resources/extract \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "parentResource": "/extractFolder",
    "resource": "/exavault/exampleFiles.zip"
  }'
```

`POST /resources/extract`

Extract the contents of a zip archive to a specified directory. Note that this can be a very slow operation.

**Notes:**
- You must have  [modify permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to do this.


> Body parameter

```json
{
  "parentResource": "/extractFolder",
  "resource": "/exavault/exampleFiles.zip"
}
```

<h3 id="extract-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|body|body|object|false|none|
|» parentResource|body|string|true|Resource identifier for folder files should be extracted to.|
|» resource|body|string|true|Resource identifier of zip archive to be extracted.|

> Example responses

> 201 Response

```json
{
  "data": [
    {
      "attributes": {
        "accessedAt": "2020-07-29T12:50:38-07:00",
        "accessedTime": 1596052238,
        "createdAt": "2020-07-29T09:52:47-07:00",
        "createdBy": "exavaultuser",
        "createdTime": 1596041567,
        "extension": "jpg",
        "fileCount": null,
        "hash": "f836b417707583b017a26d4e5a2e6dd0",
        "name": "test.jpg",
        "path": "/exavault/test.jpg",
        "previewable": false,
        "size": 33415,
        "type": "file",
        "updatedAt": "2020-07-29T19:27:31-07:00",
        "updatedTime": 1596076051,
        "uploadDate": "2020-07-29T09:52:47-07:00"
      },
      "id": 2559471,
      "relationships": {
        "ownerAccount": {
          "data": {
            "id": 7,
            "type": "account"
          }
        },
        "ownerUser": {
          "data": {
            "id": 124437,
            "type": "user"
          }
        },
        "parentResource": {
          "data": {
            "id": 2554051,
            "type": "resource"
          }
        }
      },
      "type": "resource"
    }
  ],
  "responseStatus": 201,
  "returnedResults": 1,
  "totalResults": 1
}
```

<h3 id="extract-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Operation|[ResourceCollectionResponse](#schemaresourcecollectionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of all resources

<a id="opIdlistResources"></a>

> Code samples

```bash
curl 'https://example.com/resources/list?resource=string' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /resources/list`

Returns a list of files and folders in the account. Use the `resource` query parameter to indicate the folder you wish to search in (which can be /). 

**Searching for Files and Folders**

Using the `name` parameter triggers search mode, which will search the entire directory structure under the provided `resource` for files or folders with names matching the provided `name`. This supports wildcard matching such as:

- \*Report\* would find any files or folders with "Report" in the name.
- Data\_202?-09-30.xlsx would match items such as "Data\_2020-09-30.xlsx", "DATA\_2021-09-30.xlsx", "data\_2022-09-30.xlsx" etc.
- sales\* would find any files or folders starting with the word "Sales"
- \*.csv would locate any files ending in ".csv"
- \* matches everything within the directory tree starting at your given `resource`

The search is not case-sensitive. Searching for Clients\* or clients\* or CLIENTS\*, etc. will provide identical results

If you are using the `name` parameter to run a search, the `type` parameter will be ignored by the server.

<h3 id="get-a-list-of-all-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|resource|query|string|true|Resource identifier to get resources for. Can be path/id/name.|
|sort|query|string|false|Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.|
|offset|query|integer(int32)|false|Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list. e.g, setting `offset=200` would trigger the server to skip the first 200 matching entries when returning the results.|
|limit|query|integer(int32)|false|The number of files to limit the result. If you have more files in your directory than this limit, make multiple calls, incrementing the `offset` parameter, above.|
|type|query|string|false|Limit types of resources returned to "file" or "dir" only. This is ignored if you are using the `name` parameter to trigger a search.|
|name|query|string|false|Text to match resource names. This allows you to filter the results returned. For example, to locate only zip archive files, you can enter `*zip` and only resources ending in "zip" will be included in the list of results.|
|include|query|string|false|Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "accessedAt": "2011-03-21T00:18:56-07:00",
        "createdAt": "2011-03-21T00:18:56-07:00",
        "createdBy": "exampleuser",
        "extension": "dir",
        "fileCount": 3,
        "hash": "ec4aa9a91be282666a165899a14f29b1",
        "name": "examplefolder",
        "path": "/examplefolder",
        "previewable": false,
        "size": 12321321,
        "updatedAt": "2011-03-21T00:18:56-07:00",
        "uploadDate": "2011-03-21T00:18:56-07:00"
      },
      "id": 2,
      "relationships": {
        "directFile": {
          "data": {
            "id": 101,
            "type": "directFile"
          }
        },
        "notifications": [
          {
            "data": {
              "id": 1117,
              "type": "notification"
            }
          }
        ],
        "ownerAccount": {
          "data": {
            "id": 7,
            "type": "account"
          }
        },
        "ownerUser": {
          "data": {
            "id": 124437,
            "type": "user"
          }
        },
        "parentResource": {
          "data": {
            "id": 103,
            "type": "resource"
          }
        },
        "share": {
          "data": {
            "id": 1499,
            "type": "share"
          }
        }
      },
      "type": "resource"
    }
  ],
  "included": [
    {
      "attributes": {
        "accessDescription": "Download only",
        "accessMode": {
          "delete": false,
          "download": true,
          "modify": false,
          "upload": false
        },
        "assets": [
          "Test"
        ],
        "created": "2020-07-29T08:51:39-07:00",
        "embed": false,
        "expiration": null,
        "expired": false,
        "fileDropCreateFolders": false,
        "formId": null,
        "hasNotification": false,
        "hasPassword": false,
        "hash": "17t-eojdhh1j",
        "inherited": null,
        "messages": [],
        "modified": "2020-07-29T09:53:36-07:00",
        "name": "Test",
        "ownerHash": "17t-eojowf1j-sfh242uj",
        "paths": [
          "/Test"
        ],
        "public": true,
        "recipients": [],
        "requireEmail": false,
        "resent": null,
        "status": 1,
        "trackingStatus": null,
        "type": "shared_folder"
      },
      "id": 1499,
      "type": "share"
    },
    {
      "attributes": {
        "accountId": 7,
        "blockUntil": "-001-11-29T16:07:02-07:52",
        "created": "2020-07-29T09:53:12-07:00",
        "isEnabled": true,
        "isIndexEnabled": true,
        "modified": "2020-07-29T09:53:12-07:00",
        "path": "/Test"
      },
      "id": 101,
      "type": "directFile"
    },
    {
      "attributes": {
        "action": "upload",
        "created": "2020-07-29T20:15:09-07:00",
        "message": null,
        "modified": "2020-07-29T20:15:09-07:00",
        "name": "/Test",
        "path": "/Test",
        "readableDescription": "anybody uploads to '/Test'",
        "readableDescriptionWithoutPath": "anybody uploads to this folder",
        "recipientEmails": [
          "exavault@example.com",
          "exavault+1@example.com"
        ],
        "recipients": [
          {
            "created": "2020-07-29T20:15:09-07:00",
            "email": "exavault@example.com",
            "id": 81,
            "modified": "2020-07-29T20:15:09-07:00",
            "notificationId": 1143
          },
          {
            "created": "2020-07-29T20:15:09-07:00",
            "email": "exavault+1@example.com",
            "id": 83,
            "modified": "2020-07-29T20:15:09-07:00",
            "notificationId": 1143
          }
        ],
        "sendEmail": false,
        "type": "folder",
        "usernames": [
          "exavaultuser"
        ]
      },
      "id": 1143,
      "relationships": {
        "ownerUser": {
          "data": {
            "id": 124437,
            "type": "user"
          }
        },
        "resource": {
          "data": {
            "id": 2554051,
            "type": "resource"
          }
        }
      },
      "type": "notification"
    },
    {
      "attributes": {
        "accessTimestamp": "2020-07-27 19:32:45",
        "accountName": "exavault",
        "created": "2020-07-24T07:51:12-07:00",
        "email": "test@example.com",
        "expiration": null,
        "firstLogin": false,
        "homeDir": "/",
        "modified": "2020-07-24T07:51:13-07:00",
        "nickname": "exavaultnickname",
        "onboarding": true,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "master",
        "status": 1,
        "timeZone": "America/Los_Angeles",
        "username": "exavaultuser"
      },
      "id": 124419,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 2536831,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 251,
            "type": "account"
          }
        }
      },
      "type": "user"
    },
    {
      "attributes": {
        "accountName": "exampleaccount",
        "accountOnboarding": true,
        "allowedIp": null,
        "branding": true,
        "clientId": 1,
        "complexPasswords": false,
        "created": "2019-05-30T20:48:57Z",
        "customDomain": false,
        "customSignature": null,
        "externalDomains": null,
        "maxUsers": 5,
        "modified": "2019-08-27T01:03:41Z",
        "quota": {
          "diskLimit": 37580963840,
          "diskUsed": 24938382543,
          "noticeEnabled": true,
          "noticeThreshold": 90
        },
        "secureOnly": false,
        "showReferralLinks": true,
        "status": 1,
        "userCount": 4,
        "welcomeEmailContent": "\"Great news, your new account is ready!\\n\\nFor your records, we've listed information you'll use to log in below:\\n\\nFTP Server: [[ftpserver]]\\n\\nUsername (Web and FTP access): [[username]]\\n\\n[[setpassword]]\"\n",
        "welcomeEmailSubject": "ExaVault File Sharing Account"
      },
      "id": 7,
      "relationships": {
        "masterUser": {
          "data": {
            "id": 1,
            "type": "user"
          }
        }
      },
      "type": "account"
    },
    {
      "attributes": {
        "accessedAt": "2011-03-21T00:18:56-07:00",
        "createdAt": "2011-03-21T00:18:56-07:00",
        "createdBy": "exampleuser",
        "extension": "dir",
        "fileCount": 3,
        "hash": "ec4aa9a91be282666a165899a14f29b1",
        "name": "examplefolder",
        "path": "/examplefolder",
        "previewable": false,
        "size": 12321321,
        "updatedAt": "2011-03-21T00:18:56-07:00",
        "uploadDate": "2011-03-21T00:18:56-07:00"
      },
      "id": 2,
      "relationships": {
        "directFile": {
          "data": {
            "id": 101,
            "type": "directFile"
          }
        },
        "notifications": [
          {
            "data": {
              "id": 1117,
              "type": "notification"
            }
          }
        ],
        "ownerAccount": {
          "data": {
            "id": 7,
            "type": "account"
          }
        },
        "ownerUser": {
          "data": {
            "id": 124437,
            "type": "user"
          }
        },
        "parentResource": {
          "data": {
            "id": 103,
            "type": "resource"
          }
        },
        "share": {
          "data": {
            "id": 1499,
            "type": "share"
          }
        }
      },
      "type": "resource"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 50
}
```

<h3 id="get-a-list-of-all-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[ResourceCollectionResponse](#schemaresourcecollectionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List contents of folder

<a id="opIdlistResourceContents"></a>

> Code samples

```bash
curl https://example.com/resources/list/0 \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /resources/list/{id}`

Returns a list of files/folders for the parent resource ID. 

You can use this API call to get information about all files and folders at a specified path. By default, the API returns basic metadata on each file/folder. An optional `include` parameter forces the return of additional metadata. As with all API calls, the path should be the full path relative to the user's home directory (e.g. **/myfiles/some_folder**).

**Notes:**
- Authenticated user should have list permission.


<h3 id="list-contents-of-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call. |
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer(int64)|true|ID of the parent resource to get a list of resources for.|
|sort|query|string|false|Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.|
|offset|query|integer(int32)|false|Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list.|
|limit|query|integer(int32)|false|The number of files to limit the result. Cannot be set higher than 100. If you have more than one hundred files in your directory, make multiple calls, incrementing the `offset parameter, above.|
|type|query|string|false|Limit types of resources returned to "file" or "dir" only.|
|include|query|string|false|Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "accessedAt": "2011-03-21T00:18:56-07:00",
        "createdAt": "2011-03-21T00:18:56-07:00",
        "createdBy": "exampleuser",
        "extension": "dir",
        "fileCount": 3,
        "hash": "ec4aa9a91be282666a165899a14f29b1",
        "name": "examplefolder",
        "path": "/examplefolder",
        "previewable": false,
        "size": 12321321,
        "updatedAt": "2011-03-21T00:18:56-07:00",
        "uploadDate": "2011-03-21T00:18:56-07:00"
      },
      "id": 2,
      "relationships": {
        "directFile": {
          "data": {
            "id": 101,
            "type": "directFile"
          }
        },
        "notifications": [
          {
            "data": {
              "id": 1117,
              "type": "notification"
            }
          }
        ],
        "ownerAccount": {
          "data": {
            "id": 7,
            "type": "account"
          }
        },
        "ownerUser": {
          "data": {
            "id": 124437,
            "type": "user"
          }
        },
        "parentResource": {
          "data": {
            "id": 103,
            "type": "resource"
          }
        },
        "share": {
          "data": {
            "id": 1499,
            "type": "share"
          }
        }
      },
      "type": "resource"
    }
  ],
  "included": [
    {
      "attributes": {
        "accessDescription": "Download only",
        "accessMode": {
          "delete": false,
          "download": true,
          "modify": false,
          "upload": false
        },
        "assets": [
          "Test"
        ],
        "created": "2020-07-29T08:51:39-07:00",
        "embed": false,
        "expiration": null,
        "expired": false,
        "fileDropCreateFolders": false,
        "formId": null,
        "hasNotification": false,
        "hasPassword": false,
        "hash": "17t-eojdhh1j",
        "inherited": null,
        "messages": [],
        "modified": "2020-07-29T09:53:36-07:00",
        "name": "Test",
        "ownerHash": "17t-eojowf1j-sfh242uj",
        "paths": [
          "/Test"
        ],
        "public": true,
        "recipients": [],
        "requireEmail": false,
        "resent": null,
        "status": 1,
        "trackingStatus": null,
        "type": "shared_folder"
      },
      "id": 1499,
      "type": "share"
    },
    {
      "attributes": {
        "accountId": 7,
        "blockUntil": "-001-11-29T16:07:02-07:52",
        "created": "2020-07-29T09:53:12-07:00",
        "isEnabled": true,
        "isIndexEnabled": true,
        "modified": "2020-07-29T09:53:12-07:00",
        "path": "/Test"
      },
      "id": 101,
      "type": "directFile"
    },
    {
      "attributes": {
        "action": "upload",
        "created": "2020-07-29T20:15:09-07:00",
        "message": null,
        "modified": "2020-07-29T20:15:09-07:00",
        "name": "/Test",
        "path": "/Test",
        "readableDescription": "anybody uploads to '/Test'",
        "readableDescriptionWithoutPath": "anybody uploads to this folder",
        "recipientEmails": [
          "exavault@example.com",
          "exavault+1@example.com"
        ],
        "recipients": [
          {
            "created": "2020-07-29T20:15:09-07:00",
            "email": "exavault@example.com",
            "id": 81,
            "modified": "2020-07-29T20:15:09-07:00",
            "notificationId": 1143
          },
          {
            "created": "2020-07-29T20:15:09-07:00",
            "email": "exavault+1@example.com",
            "id": 83,
            "modified": "2020-07-29T20:15:09-07:00",
            "notificationId": 1143
          }
        ],
        "sendEmail": false,
        "type": "folder",
        "usernames": [
          "exavaultuser"
        ]
      },
      "id": 1143,
      "relationships": {
        "ownerUser": {
          "data": {
            "id": 124437,
            "type": "user"
          }
        },
        "resource": {
          "data": {
            "id": 2554051,
            "type": "resource"
          }
        }
      },
      "type": "notification"
    },
    {
      "attributes": {
        "accessTimestamp": "2020-07-27 19:32:45",
        "accountName": "exavault",
        "created": "2020-07-24T07:51:12-07:00",
        "email": "test@example.com",
        "expiration": null,
        "firstLogin": false,
        "homeDir": "/",
        "modified": "2020-07-24T07:51:13-07:00",
        "nickname": "exavaultnickname",
        "onboarding": true,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "master",
        "status": 1,
        "timeZone": "America/Los_Angeles",
        "username": "exavaultuser"
      },
      "id": 124419,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 2536831,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 251,
            "type": "account"
          }
        }
      },
      "type": "user"
    },
    {
      "attributes": {
        "accountName": "exampleaccount",
        "accountOnboarding": true,
        "allowedIp": null,
        "branding": true,
        "clientId": 1,
        "complexPasswords": false,
        "created": "2019-05-30T20:48:57Z",
        "customDomain": false,
        "customSignature": null,
        "externalDomains": null,
        "maxUsers": 5,
        "modified": "2019-08-27T01:03:41Z",
        "quota": {
          "diskLimit": 37580963840,
          "diskUsed": 24938382543,
          "noticeEnabled": true,
          "noticeThreshold": 90
        },
        "secureOnly": false,
        "showReferralLinks": true,
        "status": 1,
        "userCount": 4,
        "welcomeEmailContent": "\"Great news, your new account is ready!\\n\\nFor your records, we've listed information you'll use to log in below:\\n\\nFTP Server: [[ftpserver]]\\n\\nUsername (Web and FTP access): [[username]]\\n\\n[[setpassword]]\"\n",
        "welcomeEmailSubject": "ExaVault File Sharing Account"
      },
      "id": 7,
      "relationships": {
        "masterUser": {
          "data": {
            "id": 1,
            "type": "user"
          }
        }
      },
      "type": "account"
    },
    {
      "attributes": {
        "accessedAt": "2011-03-21T00:18:56-07:00",
        "createdAt": "2011-03-21T00:18:56-07:00",
        "createdBy": "exampleuser",
        "extension": "dir",
        "fileCount": 3,
        "hash": "ec4aa9a91be282666a165899a14f29b1",
        "name": "examplefolder",
        "path": "/examplefolder",
        "previewable": false,
        "size": 12321321,
        "updatedAt": "2011-03-21T00:18:56-07:00",
        "uploadDate": "2011-03-21T00:18:56-07:00"
      },
      "id": 2,
      "relationships": {
        "directFile": {
          "data": {
            "id": 101,
            "type": "directFile"
          }
        },
        "notifications": [
          {
            "data": {
              "id": 1117,
              "type": "notification"
            }
          }
        ],
        "ownerAccount": {
          "data": {
            "id": 7,
            "type": "account"
          }
        },
        "ownerUser": {
          "data": {
            "id": 124437,
            "type": "user"
          }
        },
        "parentResource": {
          "data": {
            "id": 103,
            "type": "resource"
          }
        },
        "share": {
          "data": {
            "id": 1499,
            "type": "share"
          }
        }
      },
      "type": "resource"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 50
}
```

<h3 id="list-contents-of-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[ResourceCollectionResponse](#schemaresourcecollectionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Move resources

<a id="opIdmoveResources"></a>

> Code samples

```bash
curl https://example.com/resources/move \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "parentResource": "/copyhere",
    "resources": [
      "/testone.jpg",
      "/folder"
    ]
  }'
```

`POST /resources/move`

Moves a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account.
In the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be moved to the root of the `parentResource`.

**Notes:**
- Authenticated user should have modify permission.


> Body parameter

```json
{
  "parentResource": "/copyhere",
  "resources": [
    "/testone.jpg",
    "/folder"
  ]
}
```

<h3 id="move-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|body|body|object|false|none|
|» parentResource|body|string|true|Resource identifier of folder to move files/folders to.|
|» resources|body|[string]|true|Array containing file/folder paths to move.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "accessedAt": "2011-03-21T00:18:56-07:00",
      "accessedTime": 0,
      "createdAt": "2011-03-21T00:18:56-07:00",
      "createdBy": "exampleuser",
      "createdTime": 0,
      "extension": "string",
      "fileCount": 0,
      "hash": "ec4aa9a91be282666a165899a14f29b1",
      "name": "examplefolder",
      "path": "/examplefolder",
      "previewable": true,
      "size": 0,
      "type": "file",
      "updatedAt": "2011-03-21T00:18:56-07:00",
      "updatedTime": 0,
      "uploadDate": "2011-03-21T00:18:56-07:00"
    },
    "id": 1,
    "relationships": {
      "directFile": {
        "data": {
          "id": 2,
          "type": "directFile"
        }
      },
      "notifications": [
        {
          "data": {
            "id": 2,
            "type": "notification"
          }
        }
      ],
      "parentResource": {
        "data": {
          "id": 2,
          "type": "resource"
        }
      },
      "share": {
        "data": {
          "id": 2345,
          "type": "share"
        }
      }
    },
    "type": "resource"
  },
  "meta": {
    "id": 2321
  }
}
```

> 207 Response

```json
{
  "responses": [
    {
      "data": {
        "attributes": {
          "accessedAt": "2020-07-29T12:53:26-07:00",
          "createdAt": "2020-07-29T12:53:26-07:00",
          "createdBy": "exavault",
          "extension": "jpg",
          "fileCount": null,
          "hash": "f573b417707095b017a26d4e5a2e6dd0",
          "name": "test.jpg",
          "path": "/HomeTest/test.jpg",
          "previewable": false,
          "size": 33415,
          "type": "file",
          "updatedAt": "2020-07-29T12:53:26-07:00",
          "uploadDate": "2020-07-29T12:53:26-07:00"
        },
        "id": 2563533,
        "type": "resource"
      },
      "meta": {
        "destinationPath": "/HomeTest",
        "path": "/Test/test.jpg"
      },
      "responseStatus": 200
    },
    {
      "errors": [
        {
          "code": null,
          "detail": null,
          "meta": {
            "destinationPath": "/HomeTest",
            "path": "/Test/test2.jpg"
          },
          "title": null
        }
      ],
      "responseStatus": 404
    }
  ]
}
```

<h3 id="move-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[ResourceCopyMove](#schemaresourcecopymove)|
|207|Multi-Status|Multi Response|[ResourceMultiResponse](#schemaresourcemultiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Preview a file

<a id="opIdgetPreviewImage"></a>

> Code samples

```bash
curl 'https://example.com/resources/preview?resource=string&size=small' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1'
```

`GET /resources/preview`

Returns a resized image of the specified document for supported file types.

Image data returned is encoded in base64 format and can be viewed using the `<img>` element. 

```<img src='data:image/jpeg;base64' + meta.image/>```

**Notes:**
- Supported files types are `'jpg'`, `'jpeg'`, `'gif'`, `'png'`, `'bmp'`, `'pdf'`, `'psd'`, `'doc'`


<h3 id="preview-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key|
|ev-access-token|header|string|true|Access Token|
|resource|query|string|true|Resource identifier for the image file.|
|size|query|string|true|The size of the image.|
|width|query|integer(int32)|false|Overrides sizes. Sets to a specific width.|
|height|query|integer(int32)|false|Overrides sizes. Sets to a specific height.|
|page|query|integer(int32)|false|Page number to extract from a multi-page document (0 is the first page). Vaild for **.pdf** or **.doc** files.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|size|small|
|size|medium|
|size|large|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 2554101,
    "type": "resource"
  },
  "meta": {
    "image": "exampleimagebinary",
    "imageHash": "007e01062d91f9787f87c0cf78472d61",
    "size": 13941
  },
  "responseStatus": 200
}
```

<h3 id="preview-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[PreviewFileResponse](#schemapreviewfileresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Upload a file

<a id="opIduploadFile"></a>

> Code samples

```bash
curl 'https://example.com/resources/upload?path=string&fileSize=2935' \
  -X POST \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -F 'file=@/path/to/file'
```

`POST /resources/upload`

Uploads a file to a specified path, with optional support for resuming a partially uploaded existing file.


> Body parameter

```yaml
file: string
```

<h3 id="upload-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|offsetBytes|header|integer|false|Allows a file upload to resume at a certain number of bytes.|
|path|query|string|true|Destination path for the file being uploaded, including the file name.|
|fileSize|query|integer|true|File size, in bits, of the file being uploaded.|
|resume|query|boolean|false|True if upload resume is supported, false if it isn't.<br>|
|allowOverwrite|query|boolean|false|True if a file with the same name is found in the designated path, should be overwritten. False if different file names should be generated. |
|body|body|object|false|none|
|» file|body|string(binary)|false|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "accessedAt": "2020-07-29T12:50:38-07:00",
      "accessedTime": 1596052238,
      "createdAt": "2020-07-29T09:52:47-07:00",
      "createdBy": "exavaultuser",
      "createdTime": 1596041567,
      "extension": "jpg",
      "fileCount": null,
      "hash": "f836b417707583b017a26d4e5a2e6dd0",
      "name": "test.jpg",
      "path": "/exavault/test.jpg",
      "previewable": false,
      "size": 33415,
      "type": "file",
      "updatedAt": "2020-07-29T19:27:31-07:00",
      "updatedTime": 1596076051,
      "uploadDate": "2020-07-29T09:52:47-07:00"
    },
    "id": 2559471,
    "relationships": {
      "ownerAccount": {
        "data": {
          "id": 7,
          "type": "account"
        }
      },
      "ownerUser": {
        "data": {
          "id": 124437,
          "type": "user"
        }
      },
      "parentResource": {
        "data": {
          "id": 2554051,
          "type": "resource"
        }
      }
    },
    "type": "resource"
  },
  "included": [],
  "responseStatus": 201
}
```

<h3 id="upload-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Operation|[ResourceResponse](#schemaresourceresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get resource metadata

<a id="opIdgetResourceInfoById"></a>

> Code samples

```bash
curl https://example.com/resources/0 \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /resources/{id}`

Returns metadata for specified file/folder path, including upload date, size and type. For the full list of returned properties, see the response syntax, below.

**Notes:**
- Authenticated user should have list permission.


<h3 id="get-resource-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|include|query|string|false|Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**.|
|id|path|integer(int64)|true|ID number of the resource|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "accessedAt": "2020-07-29T09:53:36-07:00",
      "createdAt": "2020-07-28T15:59:23-07:00",
      "createdBy": "exavaultuser",
      "extension": "",
      "fileCount": 2,
      "hash": "7a2abd9f90ce196hf3f650c612372c0b",
      "name": "Test",
      "path": "/Test",
      "previewable": false,
      "size": 33415,
      "type": "dir",
      "updatedAt": "2020-07-29T09:52:47-07:00",
      "uploadDate": "2020-07-28T15:59:23-07:00"
    },
    "id": 2554051,
    "relationships": {
      "directFile": {
        "data": {
          "id": 101,
          "type": "directFile"
        }
      },
      "notifications": [
        {
          "data": {
            "id": 1117,
            "type": "notification"
          }
        }
      ],
      "ownerAccount": {
        "data": {
          "id": 7,
          "type": "account"
        }
      },
      "ownerUser": {
        "data": {
          "id": 124437,
          "type": "user"
        }
      },
      "parentResource": {
        "data": {
          "id": 103,
          "type": "resource"
        }
      },
      "share": {
        "data": {
          "id": 1499,
          "type": "share"
        }
      }
    },
    "type": "resource"
  },
  "included": [
    {
      "attributes": {
        "accessDescription": "Download only",
        "accessMode": {
          "delete": false,
          "download": true,
          "modify": false,
          "upload": false
        },
        "assets": [
          "Test"
        ],
        "created": "2020-07-29T08:51:39-07:00",
        "embed": false,
        "expiration": null,
        "expired": false,
        "fileDropCreateFolders": false,
        "formId": null,
        "hasNotification": false,
        "hasPassword": false,
        "hash": "17t-eojdhh1j",
        "inherited": null,
        "messages": [],
        "modified": "2020-07-29T09:53:36-07:00",
        "name": "Test",
        "ownerHash": "17t-eojowf1j-sfh242uj",
        "paths": [
          "/Test"
        ],
        "public": true,
        "recipients": [],
        "requireEmail": false,
        "resent": null,
        "status": 1,
        "trackingStatus": null,
        "type": "shared_folder"
      },
      "id": 1499,
      "type": "share"
    },
    {
      "attributes": {
        "accountId": 7,
        "blockUntil": "-001-11-29T16:07:02-07:52",
        "created": "2020-07-29T09:53:12-07:00",
        "isEnabled": true,
        "isIndexEnabled": true,
        "modified": "2020-07-29T09:53:12-07:00",
        "path": "/Test"
      },
      "id": 101,
      "type": "directFile"
    },
    {
      "attributes": {
        "action": "upload",
        "created": "2020-07-29T20:15:09-07:00",
        "message": null,
        "modified": "2020-07-29T20:15:09-07:00",
        "name": "/Test",
        "path": "/Test",
        "readableDescription": "anybody uploads to '/Test'",
        "readableDescriptionWithoutPath": "anybody uploads to this folder",
        "recipientEmails": [
          "exavault@example.com",
          "exavault+1@example.com"
        ],
        "recipients": [
          {
            "created": "2020-07-29T20:15:09-07:00",
            "email": "exavault@example.com",
            "id": 81,
            "modified": "2020-07-29T20:15:09-07:00",
            "notificationId": 1143
          },
          {
            "created": "2020-07-29T20:15:09-07:00",
            "email": "exavault+1@example.com",
            "id": 83,
            "modified": "2020-07-29T20:15:09-07:00",
            "notificationId": 1143
          }
        ],
        "sendEmail": false,
        "type": "folder",
        "usernames": [
          "exavaultuser"
        ]
      },
      "id": 1143,
      "relationships": {
        "ownerUser": {
          "data": {
            "id": 124437,
            "type": "user"
          }
        },
        "resource": {
          "data": {
            "id": 2554051,
            "type": "resource"
          }
        }
      },
      "type": "notification"
    },
    {
      "attributes": {
        "accessTimestamp": "2020-07-27 19:32:45",
        "accountName": "exavault",
        "created": "2020-07-24T07:51:12-07:00",
        "email": "test@example.com",
        "expiration": null,
        "firstLogin": false,
        "homeDir": "/",
        "modified": "2020-07-24T07:51:13-07:00",
        "nickname": "exavaultnickname",
        "onboarding": true,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "master",
        "status": 1,
        "timeZone": "America/Los_Angeles",
        "username": "exavaultuser"
      },
      "id": 124419,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 2536831,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 251,
            "type": "account"
          }
        }
      },
      "type": "user"
    },
    {
      "attributes": {
        "accountName": "exampleaccount",
        "accountOnboarding": true,
        "allowedIp": null,
        "branding": true,
        "clientId": 1,
        "complexPasswords": false,
        "created": "2019-05-30T20:48:57Z",
        "customDomain": false,
        "customSignature": null,
        "externalDomains": null,
        "maxUsers": 5,
        "modified": "2019-08-27T01:03:41Z",
        "quota": {
          "diskLimit": 37580963840,
          "diskUsed": 24938382543,
          "noticeEnabled": true,
          "noticeThreshold": 90
        },
        "secureOnly": false,
        "showReferralLinks": true,
        "status": 1,
        "userCount": 4,
        "welcomeEmailContent": "\"Great news, your new account is ready!\\n\\nFor your records, we've listed information you'll use to log in below:\\n\\nFTP Server: [[ftpserver]]\\n\\nUsername (Web and FTP access): [[username]]\\n\\n[[setpassword]]\"\n",
        "welcomeEmailSubject": "ExaVault File Sharing Account"
      },
      "id": 7,
      "relationships": {
        "masterUser": {
          "data": {
            "id": 1,
            "type": "user"
          }
        }
      },
      "type": "account"
    },
    {
      "attributes": {
        "accessedAt": "2011-03-21T00:18:56-07:00",
        "createdAt": "2011-03-21T00:18:56-07:00",
        "createdBy": "exampleuser",
        "extension": "dir",
        "fileCount": 3,
        "hash": "ec4aa9a91be282666a165899a14f29b1",
        "name": "examplefolder",
        "path": "/examplefolder",
        "previewable": false,
        "size": 12321321,
        "updatedAt": "2011-03-21T00:18:56-07:00",
        "uploadDate": "2011-03-21T00:18:56-07:00"
      },
      "id": 2,
      "relationships": {
        "directFile": {
          "data": {
            "id": 101,
            "type": "directFile"
          }
        },
        "notifications": [
          {
            "data": {
              "id": 1117,
              "type": "notification"
            }
          }
        ],
        "ownerAccount": {
          "data": {
            "id": 7,
            "type": "account"
          }
        },
        "ownerUser": {
          "data": {
            "id": 124437,
            "type": "user"
          }
        },
        "parentResource": {
          "data": {
            "id": 103,
            "type": "resource"
          }
        },
        "share": {
          "data": {
            "id": 1499,
            "type": "share"
          }
        }
      },
      "type": "resource"
    }
  ],
  "responseStatus": 200
}
```

<h3 id="get-resource-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[ResourceResponse](#schemaresourceresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Resource

<a id="opIddeleteResourceById"></a>

> Code samples

```bash
curl https://example.com/resources/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`DELETE /resources/{id}`

Delete a single file or folder resource. Deleting a folder will also delete all of the contents.

**Notes:**
- Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
- There is no way to un-delete a deleted resource.


<h3 id="delete-a-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer(int64)|true|ID number of the resource|

> Example responses

> 200 Response

```json
{
  "data": [],
  "responseStatus": 200
}
```

<h3 id="delete-a-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[EmptyResponse](#schemaemptyresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Rename a resource.

<a id="opIdupdateResourceById"></a>

> Code samples

```bash
curl https://example.com/resources/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -H 'ev-api-key: string' \
  -d '{
    "name": "my-renamed-file.txt"
  }'
```

`PATCH /resources/{id}`

Update the specified file or folder resource record's "name" parameter. The resource is identified by the numeric resource ID that is passed in as the last segment of the URI.


> Body parameter

```json
{
  "name": "my-renamed-file.txt"
}
```

<h3 id="rename-a-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-access-token|header|string|true|Access token required to make the API call.|
|ev-api-key|header|string|true|API key required to make the API call.|
|id|path|integer(int64)|true|ID number of the resource|
|body|body|object|false|none|
|» name|body|string|false|The new name for the resource (file or folder).|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "accessedAt": "2020-07-29T09:53:36-07:00",
      "createdAt": "2020-07-28T15:59:23-07:00",
      "createdBy": "exavaultuser",
      "extension": "",
      "fileCount": 2,
      "hash": "7a2hhf9f90ce196de3f650c612372c0b",
      "name": "Test Folder",
      "path": "/Test Folder",
      "previewable": false,
      "size": 33415,
      "type": "dir",
      "updatedAt": "2020-07-29T10:27:08-07:00",
      "uploadDate": "2020-07-28T15:59:23-07:00"
    },
    "id": 2554051,
    "relationships": {
      "directFile": {
        "data": {
          "id": 101,
          "type": "directFile"
        }
      },
      "notifications": [
        {
          "data": {
            "id": 1117,
            "type": "notification"
          }
        }
      ],
      "ownerAccount": {
        "data": {
          "id": 7,
          "type": "account"
        }
      },
      "ownerUser": {
        "data": {
          "id": 124437,
          "type": "user"
        }
      },
      "parentResource": {
        "data": {
          "id": 103,
          "type": "resource"
        }
      },
      "share": {
        "data": {
          "id": 1499,
          "type": "share"
        }
      }
    },
    "type": "resource"
  },
  "included": [],
  "responseStatus": 200
}
```

<h3 id="rename-a-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ResourceResponse](#schemaresourceresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="exavault-activity">Activity</h1>

The activity APIs allow you to get logs from your account. We track multiple types of under the umbrellas; __Activity Logs__ that show an action a user performed or initiated on a file, folder or the account. __Webhooks Logs__ that show records of all outbound webhook calls made by ExaVault. Both can be optionally filtered to only return specific data you’re looking for.

## Get activity logs

<a id="opIdgetSessionLogs"></a>

> Code samples

```bash
curl https://example.com/activity/session \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1'
```

`GET /activity/session`

Returns the detailed activity logs for your account. Optional query paramaters will filter the returned results based on a number of options including usernames, activity types, or date ranges. 

**NOTE:** Total Results will always return as 0 to avoid quering data you're not using and stay as performant as possible. 
  
**Operation Types**
Session activity is logged with an operation type that is different from what is visible through the [activity log interface in the web file manager](/docs/account/10-activity-logs/00-activity-logs). Consult the table below to compare the two:

| File Manager Value | API Value | Notes |
|-----|----|---|
| Connect | PASS | |
| Disconnect | EXIT | |
| Upload | STOR | |
| Download | RETR | |
| Delete | DELE | |
| Create Folder | MKD | |
| Rename | RNTO | |
| Move | MOVE | |
| Copy | COPY | |
| Compress | COMPR | |
| Extract | EXTRACT | |
| Shared Folders | SHARE | |
| Send Files | SEND | |
| Receive Files | RECV | |
| _N/A_ | EDIT\_SEND | Update send. Not shown in file manager |
| Update Share | EDIT\_SHARE| | 
| Update Receive | EDIT\_RECV | |
| Delete Send | DELE\_SEND | |
| Delete Receive | DELE\_RECV | |
| Delete Share | DELE\_SHARE | |
| Create Notification | NOTIFY | |
| Update Notification | EDIT\_NTFY| |
| Delete Notification | DELE\_NTFY | |
| Create User | USER | |
| Update User | EDIT\_USER | |
| Delete User | DELE\_USER | |
| _N/A_ | DFA | Create direct link. Not shown in file manager |
| _N/A_ | EDIT\_DFA | Update direct link options. Not shown in file manager |
| _N/A_ | DELE\_DFA | Deactivate direct link. Not shown in file manager|


<h3 id="get-activity-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key|
|ev-access-token|header|string|true|Access Token|
|startDate|query|string(date-time)|false|Start date of the filter data range|
|endDate|query|string(date-time)|false|End date of the filter data range|
|ipAddress|query|string|false|Used to filter session logs by ip address.|
|username|query|string|false|Username used for filtering a list|
|path|query|string|false|Path used to filter records|
|type|query|string|false|Filter session logs for operation type (see table above for acceptable values)|
|offset|query|integer|false|Offset of the records list|
|limit|query|integer|false|Limit of the records list|
|sort|query|string|false|Comma separated list sort params|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "bytesTransferred": 10815676,
        "created": "2019-10-18T06:48:40Z",
        "duration": 5,
        "fileName": "/test2/Cassandra2020The20Definitive20Guide.2030947496.pdf",
        "fileSource": "",
        "ipAddress": "185.223.113.224",
        "operation": "PASS",
        "protocol": "web",
        "sessionId": "5da9b4a8bd961dfa0a56fa0dc15aaffe57069271b389e",
        "status": "-",
        "username": "exavault"
      },
      "id": 12345,
      "type": "sessionActivity"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 2
}
```

<h3 id="get-activity-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SessionActivityResponse](#schemasessionactivityresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get webhook logs

<a id="opIdgetWebhookLogs"></a>

> Code samples

```bash
curl https://example.com/activity/webhooks \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1'
```

`GET /activity/webhooks`

Returns the webhook logs for your account. Use the available query parameters to filter the listing of activity that is returned.

**NOTE:** Total Results will always return as 0 to avoid querying data you're not using and stay as performant as possible. 

**Event Types**

Webhooks are triggered by enabled event types for your account, which are configured on the [developer settings page](/docs/account/09-settings/06-developer-settings). Not all event types may be allowed for your account type. These are the valid options for event types:

- resources.upload
- resources.download
- resources.delete
- resources.createFolder
- resources.rename
- resources.move
- resources.copy
- resources.compress
- resources.extract
- shares.formSubmit


<h3 id="get-webhook-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key|
|ev-access-token|header|string|true|Access Token|
|startDate|query|string(date-time)|false|Earliest date of entries to include in list|
|endDate|query|string(date-time)|false|Latest date of entries to include in list|
|endpointUrl|query|string(uri)|false|Webhook listener endpoint|
|event|query|string|false|Type of activity that triggered the webhook attempt|
|statusCode|query|integer|false|Response code from the webhook endpoint|
|resourcePath|query|string|false|Path of the resource that triggered the webhook attempt|
|username|query|string|false|Filter by triggering username.|
|offset|query|integer|false|Records to skip before returning results.|
|limit|query|integer|false|Limit of the records list|
|sort|query|string|false|Comma separated list sort params|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "attempt": 1,
        "created": "2020-07-30T03:40:35-07:00",
        "endpointUrl": "https://example.com/api/webhook",
        "event": "Upload",
        "response": "",
        "responseSize": 0,
        "status": 200
      },
      "id": 2602725,
      "type": "webhookActivity"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 1,
  "totalResults": 1469
}
```

<h3 id="get-webhook-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[WebhookActivityResponse](#schemawebhookactivityresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="exavault-users">Users</h1>

The user APIs allow you to create, update and delete users from your account. Users can be assigned unique permissions, set to expire after a certain time period, and more.

## Get a list of users

<a id="opIdlistUsers"></a>

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /users`

Get a list of the users in your account. There are three main types of searches you can do with this method:

1. Search for a user by username. If you provide the `username` parameter in your call, then only the user who exactly matches that username will be in the list of matches. Any other parameters are ignored.
1. Search for a user by individual filter fields (`nickname`,`email`,`role`,`status`,`homeDir`). Users in the list will be ones who match all of the filters you choose to search by. For example, you could look for users with the "admin" `role` AND `email` addresses ending in "*@acme.com". 
1. Search for a user by search string. If you provide the `search` parameter, users whose nickname OR email OR role OR homeDir match value your provide.

**Notes:**

- You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.
- The homeDir is the full path to the user's home directory, not a resource ID or hash.

<h3 id="get-a-list-of-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|username|query|string|false|The username of the user you are looking for. Only entries with the same username as this will be in the list of results. Does not support wildcard searches.|
|homeResource|query|string|false|Resource identifier for user's home directory. Does not support wildcard searches.|
|nickname|query|string|false|Nickname to search for. Ignored if `username` is provided. Supports wildcard searches.|
|email|query|string|false|Email to search for. Ignored if `username` is provided. Supports wildcard searches|
|role|query|string|false|Types of users to include the list. Ignored if `username` is provided. Valid options are **admin**, **master** and **user**|
|status|query|integer|false|Whether a user is locked. Ignored if `username` is provided. **0** means user is locked, **1** means user is not locked. |
|search|query|string|false|Searches the nickname, email, role and homeDir fields for the provided value. Ignored if `username` is provided. Supports wildcard searches.|
|offset|query|integer(int32)|false|Starting user record in the result set. Can be used for pagination.|
|sort|query|string|false|Sort order or matching users. You can sort by multiple columns by separating sort options with a comma; the sort will be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.<br><br>Valid sort fields are: **nickname**, **username**, **email**, **homeDir** and **modified**|
|limit|query|integer(int32)|false|Number of users to return. Can be used for pagination.|
|include|query|string|false|Comma separated list of relationships to include in response. Valid options are **homeResource** and **ownerAccount**.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "accessTimestamp": "2020-07-24 23:37:39",
        "accountName": "exavault",
        "created": "2020-07-24T08:03:57-07:00",
        "email": "test@example.com",
        "expiration": null,
        "firstLogin": false,
        "homeDir": "/",
        "modified": "2020-07-24T15:53:02-07:00",
        "nickname": "exavaultnickname",
        "onboarding": true,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "admin",
        "status": 1,
        "timeZone": "America/Los_Angeles",
        "username": "exavaultuser"
      },
      "id": 124421,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 2536831,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 251,
            "type": "account"
          }
        }
      },
      "type": "user"
    },
    {
      "attributes": {
        "accessTimestamp": "0000-00-00 00:00:00",
        "accountName": "exavault",
        "created": "2020-07-24T08:08:51-07:00",
        "email": "test@example.com",
        "expiration": null,
        "firstLogin": true,
        "homeDir": "/",
        "modified": "2020-07-24T08:08:51-07:00",
        "nickname": "exavaultnickname",
        "onboarding": true,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Los_Angeles",
        "username": "exavaultuser"
      },
      "id": 124423,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 2536831,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 251,
            "type": "account"
          }
        }
      },
      "type": "user"
    },
    {
      "attributes": {
        "accessTimestamp": "0000-00-00 00:00:00",
        "accountName": "exavault",
        "created": "2020-07-27T02:04:11-07:00",
        "email": "test+4@example.com",
        "expiration": null,
        "firstLogin": false,
        "homeDir": "/Sample Files and Folders",
        "modified": "2020-07-27T02:04:11-07:00",
        "nickname": "exavaultnickname",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": false,
          "download": true,
          "list": true,
          "modify": true,
          "notification": false,
          "share": true,
          "upload": true,
          "viewFormData": false
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Los_Angeles",
        "username": "exavaultuser"
      },
      "id": 124439,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 2536835,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 251,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "included": [],
  "responseStatus": 200,
  "returnedResults": 3,
  "totalResults": 3
}
```

<h3 id="get-a-list-of-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[UserCollectionResponse](#schemausercollectionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a user

<a id="opIdaddUser"></a>

> Code samples

```bash
curl https://example.com/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "email": "testuser@example.com",
    "expiration": "2011-03-21 00:18:56",
    "homeResource": "/",
    "locked": true,
    "nickname": "testnickname",
    "onboarding": true,
    "password": "string",
    "permissions": {
      "changePassword": true,
      "delete": true,
      "deleteFormData": true,
      "download": true,
      "list": true,
      "modify": true,
      "notification": true,
      "share": true,
      "upload": true,
      "viewFormData": true
    },
    "role": "user",
    "timeZone": "America/Los_Angeles",
    "username": "testuser",
    "welcomeEmail": true
  }'
```

`POST /users`

Adds a new user to the account. The user may be configured as an admin or standard user, and (if a standard user) may be assigned a restricted [home directory](/docs/account/04-users/00-introduction#setting-the-user-s-home-directory) and restricted [permissions](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). 

**Notes:**

- You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.

> Body parameter

```json
{
  "email": "testuser@example.com",
  "expiration": "2011-03-21 00:18:56",
  "homeResource": "/",
  "locked": true,
  "nickname": "testnickname",
  "onboarding": true,
  "password": "string",
  "permissions": {
    "changePassword": true,
    "delete": true,
    "deleteFormData": true,
    "download": true,
    "list": true,
    "modify": true,
    "notification": true,
    "share": true,
    "upload": true,
    "viewFormData": true
  },
  "role": "user",
  "timeZone": "America/Los_Angeles",
  "username": "testuser",
  "welcomeEmail": true
}
```

<h3 id="create-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call|
|ev-access-token|header|string|true|Access token required to make the API call.|
|body|body|object|false|none|
|» email|body|string(email)|true|Email address for the user|
|» expiration|body|string|false|Optional timestamp when the user should expire, formatted in date-time.|
|» homeResource|body|string|true|Resource identifier for the user's home folder. See details on [how to specify resources](#section/Identifying-Resources) above.<br><br>The user will be locked to this directory and unable to move 'up' in the account. If the folder does not exist in the account, it will be created when the user is created. <br><br>Users with the `role` **admin** should have their homeResource set to '/'|
|» locked|body|boolean|false|If true, the user will not be able to log in|
|» nickname|body|string|false|An optional nickname (e.g. 'David from Sales').|
|» onboarding|body|boolean|false|Set this to **true** to enable extra help popups in the web file manager for this user.|
|» password|body|string|true|Password for the user|
|» permissions|body|object|true|An object containing name/value pairs for each permission. Any permission that is not passed will be set to `false` by default. Note that users will be unable to see any files in the account unless you include `list` permission.<br>When creating a user with the `role` **admin**, you should set all of the permissions to `true`|
|» » changePassword|body|boolean|false|none|
|» » delete|body|boolean|false|none|
|» » deleteFormData|body|boolean|false|none|
|» » download|body|boolean|false|none|
|» » list|body|boolean|false|none|
|» » modify|body|boolean|false|none|
|» » notification|body|boolean|false|none|
|» » share|body|boolean|false|none|
|» » upload|body|boolean|false|none|
|» » viewFormData|body|boolean|false|none|
|» role|body|string|true|The type of user to create, either **user** or **admin**.|
|» timeZone|body|string|true|Time zone, used for accurate time display within the application. See <a href='https://php.net/manual/en/timezones.php' target='blank'>this page</a> for allowed values.<br>|
|» username|body|string|true|Username of the user to create. This should follow standard username conventions - spaces are not allowed, etc. We do allow email addresses as usernames.<br><br>**Note** Usernames must be unique across all ExaVault accounts.|
|» welcomeEmail|body|boolean|false|If **true**, send this new user a welcome email upon creation. The content of the welcome email can be configured with the [PATCH /accounts](#operation/updateAccount) method.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|user|
|» role|admin|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "accessTimestamp": null,
      "accountName": "exavault",
      "created": "2020-07-27T14:58:01-07:00",
      "email": "test@example.com",
      "expiration": "2020-07-31T17:00:00-07:00",
      "firstLogin": false,
      "homePath": "/",
      "modified": "2020-07-27T14:58:01-07:00",
      "nickname": "exavaultnickname",
      "onboarding": false,
      "permissions": {
        "changePassword": false,
        "delete": false,
        "deleteFormData": false,
        "download": true,
        "list": false,
        "modify": false,
        "notification": false,
        "share": false,
        "upload": true,
        "viewFormData": false
      },
      "role": "user",
      "status": 1,
      "timeZone": "America/Los_Angeles",
      "username": "exavaultuser"
    },
    "id": 124449,
    "relationships": {
      "homeResource": {
        "data": {
          "id": 2536831,
          "type": "resource"
        }
      },
      "ownerAccount": {
        "data": {
          "id": 251,
          "type": "account"
        }
      }
    },
    "type": "user"
  },
  "included": [],
  "responseStatus": 201
}
```

<h3 id="create-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Operation|[UserResponse](#schemauserresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get info for a user

<a id="opIdgetUserById"></a>

> Code samples

```bash
curl https://example.com/users/2224 \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /users/{id}`

Get the details for a specific user. You can use the `include` parameter to also get the details of related records, such as the account or the home directory.

**Notes:**

- You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to use this.

<h3 id="get-info-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key|
|ev-access-token|header|string|true|Access token required to make the API call.|
|include|query|string|false|Comma-separated list of relationships to include in response. Possible values include **homeResource** and **ownerAccount**.|
|id|path|integer(int32)|true|The user's ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "accessTimestamp": "2020-07-27 19:32:45",
      "accountName": "exavault",
      "created": "2020-07-24T07:51:12-07:00",
      "email": "test@example.com",
      "expiration": null,
      "firstLogin": false,
      "homeDir": "/",
      "modified": "2020-07-24T07:51:13-07:00",
      "nickname": "exavaultnickname",
      "onboarding": true,
      "permissions": {
        "changePassword": true,
        "delete": true,
        "deleteFormData": true,
        "download": true,
        "list": true,
        "modify": true,
        "notification": true,
        "share": true,
        "upload": true,
        "viewFormData": true
      },
      "role": "master",
      "status": 1,
      "timeZone": "America/Los_Angeles",
      "username": "exavaultuser"
    },
    "id": 124419,
    "relationships": {
      "homeResource": {
        "data": {
          "id": 2536831,
          "type": "resource"
        }
      },
      "ownerAccount": {
        "data": {
          "id": 251,
          "type": "account"
        }
      }
    },
    "type": "user"
  },
  "included": [],
  "responseStatus": 200
}
```

<h3 id="get-info-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[UserResponse](#schemauserresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a user

<a id="opIddeleteUser"></a>

> Code samples

```bash
curl https://example.com/users/2224 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`DELETE /users/{id}`

Delete a user from the account. Deleting a user does **NOT** delete any files from the account; it merely removes a user's access. Aternatively, locking a user via the [PATCH /users/{id}](#operation/updateUser) will keep the user in your account, but make it unable to log in. 

Resources and shares owned by the deleted user will be owned by the master user after the deletion.

**Notes:**
 
- You must have [admin-level access](/docs/account/04-users/01-admin-users) to delete a user.
- The primary owner of the account cannot be deleted.


<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer(int32)|true|The user's ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "responseStatus": 200
}
```

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[EmptyResponse](#schemaemptyresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a user

<a id="opIdupdateUser"></a>

> Code samples

```bash
curl https://example.com/users/2224 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "email": "testuser@example.com",
    "expiration": "2011-03-21 00:18:56",
    "homeResource": "/",
    "locked": true,
    "nickname": "testnickname",
    "onboarding": true,
    "password": "string",
    "permissions": {
      "changePassword": true,
      "delete": true,
      "deleteFormData": true,
      "download": true,
      "list": true,
      "modify": true,
      "notification": true,
      "share": true,
      "upload": true,
      "viewFormData": true
    },
    "role": "user",
    "timeZone": "America/Los_Angeles",
    "username": "testuser"
  }'
```

`PATCH /users/{id}`

Updates the settings for the user. Note that the unique key for this API call is our internal ID, and _not_ the username, as the username can be changed.

In the request body, you should only send the parameters for values that you wish to change for the user.

**Notes:**

- You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to edit other users. If you have user-level access, you can only update your own user settings.
- You cannot edit a master user with this method.

> Body parameter

```json
{
  "email": "testuser@example.com",
  "expiration": "2011-03-21 00:18:56",
  "homeResource": "/",
  "locked": true,
  "nickname": "testnickname",
  "onboarding": true,
  "password": "string",
  "permissions": {
    "changePassword": true,
    "delete": true,
    "deleteFormData": true,
    "download": true,
    "list": true,
    "modify": true,
    "notification": true,
    "share": true,
    "upload": true,
    "viewFormData": true
  },
  "role": "user",
  "timeZone": "America/Los_Angeles",
  "username": "testuser"
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer(int32)|true|The user's ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method.|
|body|body|object|false|none|
|» email|body|string(email)|false|Email address for the user|
|» expiration|body|string|false|Optional timestamp when the user should expire.|
|» homeResource|body|string|false|Resource identifier for the user's home folder. See details on [how to specify resources](#section/Identifying-Resources) above.<br><br>The user will be locked to this directory and unable to move 'up' in the account. If the folder does not exist in the account, it will be created when the user logs in.<br><br>This setting is ignored for users with the `role` **admin**.|
|» locked|body|boolean|false|If true, the user will be prevented from logging in|
|» nickname|body|string|false|An optional nickname (e.g. 'David from Sales').|
|» onboarding|body|boolean|false|Set this to **true** to enable extra help popups in the web file manager for this user.|
|» password|body|string|false|New password for the user|
|» permissions|body|[UserPermissions](#schemauserpermissions)|false|none|
|» role|body|string|false|The type of user (**admin** or **user**). Note that admin users cannot have a `homeResource` other than '/', and will have full permissions, but you must provide at least "download,upload,list,delete" in the `permissions` parameter.|
|» timeZone|body|string|false|Time zone, used for accurate time display within the application. See <a href='https://php.net/manual/en/timezones.php' target='blank'>this page</a> for allowed values.<br>|
|» username|body|string|false|New username for the user. This should follow standard username conventions - spaces are not allowed, etc. We do allow email addresses as usernames.<br><br>**Note** Usernames must be unique across all ExaVault accounts.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|user|
|» role|admin|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "accessTimestamp": "0000-00-00 00:00:00",
      "accountName": "exavault",
      "created": "2020-07-27T14:50:39-07:00",
      "email": "test@example.com",
      "expiration": "2020-08-29T17:00:00-07:00",
      "firstLogin": false,
      "homeDir": "/",
      "modified": "2020-07-27T14:50:39-07:00",
      "nickname": "exavaultnickname",
      "onboarding": false,
      "permissions": {
        "changePassword": false,
        "delete": false,
        "deleteFormData": false,
        "download": true,
        "list": false,
        "modify": false,
        "notification": false,
        "share": false,
        "upload": true,
        "viewFormData": false
      },
      "role": "user",
      "status": 1,
      "timeZone": "America/Los_Angeles",
      "username": "exavaultuser"
    },
    "id": 124447,
    "relationships": {
      "homeResource": {
        "data": {
          "id": 2536831,
          "type": "resource"
        }
      },
      "ownerAccount": {
        "data": {
          "id": 251,
          "type": "account"
        }
      }
    },
    "type": "user"
  },
  "included": [],
  "responseStatus": 200
}
```

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[UserResponse](#schemauserresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="exavault-shares">Shares</h1>

The sharing APIs allow you create and manage shares. Shares can be used to send a single file, share a folder, or set up a receive folder and its input form.

## Get a list of shares

<a id="opIdlistShares"></a>

> Code samples

```bash
curl https://example.com/shares \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /shares`

Get a list of shares that you would have access to view through the web interface. You can limit which results are returned by specifying specific types of shares you wish to view, finding things shared with a specific email address, as well as finding shares for specific folder names.


**Notes:**

- Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
- To get share objects with type send, authenticated user's role must be admin or master.

<h3 id="get-a-list-of-shares-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|offset|query|integer|false|Current offset of records (for pagination)|
|limit|query|integer|false|Limit of records to be returned (for pagination)|
|scope|query|string|false|Set of shares to return. (**all**=all of them, **active**=shares that are currently active, **curentUser**=shares created by you)|
|sort|query|string|false|What order the list of matches should be in.|
|type|query|string|false|Limit the list of matches to only certain types of shares.|
|include|query|string|false|Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**.|
|name|query|string|false|When provided, only shares whose names include this value will be in the list. Supports wildcards, such as **send\*** to return everything starting with "send".<br><br>Use this parameter if you are searching for shares or receives for a specific folder name. For example **/Clients/ACME/To Be Processed**.|
|recipient|query|string|false|Filter the results to include only shares that invited a certain email address. Supports wildcard matching so that **\*@example.com** will give back entries shared with addresses ending in "@example.com". |
|message|query|string|false|When provided, only shares with a message that contains the text will be included in the list of matches. Both the subject and the body of all messages will be checked for matches. This will always be a wildcard match, so that searching for **taxes** will return any shares with a message that contains the word "taxes".|
|username|query|string|false|When provided, only shares created by the user with that `username` will be included in the list. Does not support wildcard searching.|
|search|query|string|false|Searches the share name, username, recipients, share messages fields for the provided value. Supports wildcard searches.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|all|
|scope|active|
|scope|currentUser|
|sort|created|
|sort|-created|
|type|receive|
|type|shared_folder|
|type|send|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "accessDescription": "Receive folder",
        "accessMode": {
          "delete": false,
          "download": false,
          "modify": false,
          "upload": true
        },
        "assets": [
          "Receive test"
        ],
        "created": "2020-07-27T23:34:49-07:00",
        "embed": true,
        "expiration": null,
        "expired": false,
        "fileDropCreateFolders": false,
        "formId": 413,
        "hasNotification": true,
        "hasPassword": false,
        "hash": "153-3n9ycimh",
        "inherited": null,
        "messages": [],
        "modified": "2020-07-28T09:33:11-07:00",
        "name": "Receive test",
        "ownerHash": "153-3n9ycimh-99dm0ome",
        "paths": [
          "/YK tests1/Receive test"
        ],
        "public": true,
        "recipients": [],
        "requireEmail": false,
        "resent": null,
        "status": 1,
        "trackingStatus": null,
        "type": "receive"
      },
      "id": 1403,
      "relationships": {
        "activity": [
          {
            "data": {
              "id": 1719,
              "type": "shareActivity"
            }
          }
        ],
        "notifications": [
          {
            "data": {
              "id": 1045,
              "type": "notification"
            }
          }
        ],
        "owner": {
          "data": {
            "id": 7,
            "type": "user"
          }
        },
        "resources": [
          {
            "data": {
              "id": 2497089,
              "type": "resource"
            }
          }
        ]
      },
      "type": "share"
    },
    {
      "attributes": {
        "accessDescription": "Download only",
        "accessMode": {
          "delete": false,
          "download": true,
          "modify": false,
          "upload": false
        },
        "assets": [
          "Logos"
        ],
        "created": "2020-07-27T20:57:33-07:00",
        "embed": false,
        "expiration": null,
        "expired": false,
        "fileDropCreateFolders": false,
        "formId": null,
        "hasNotification": null,
        "hasPassword": false,
        "hash": "14y-69359sgr",
        "inherited": null,
        "messages": [],
        "modified": "2020-07-28T09:33:11-07:00",
        "name": "Logos",
        "ownerHash": "14y-69359sgr-7tsf6cxx",
        "paths": [
          "/STest071520/Logos"
        ],
        "public": true,
        "recipients": [],
        "requireEmail": false,
        "resent": null,
        "status": 1,
        "trackingStatus": null,
        "type": "shared_folder"
      },
      "id": 1399,
      "relationships": {
        "owner": {
          "data": {
            "id": 7,
            "type": "user"
          }
        },
        "resources": [
          {
            "data": {
              "id": 2547033,
              "type": null
            }
          }
        ]
      },
      "type": "share"
    }
  ],
  "included": [],
  "responseStatus": 200,
  "returnedResults": 27,
  "totalResults": 98
}
```

<h3 id="get-a-list-of-shares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ShareCollectionResponse](#schemasharecollectionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a share

<a id="opIdaddShare"></a>

> Code samples

```bash
curl https://example.com/shares \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "accessMode": {
      "delete": true,
      "download": true,
      "modify": true,
      "upload": true
    },
    "embed": false,
    "expiration": "2017-09-25T14:12:10Z",
    "fileDropCreateFolders": false,
    "hasNotification": false,
    "isPublic": true,
    "messageBody": null,
    "messageSubject": "Invitation to a shared folder",
    "name": "Shared Folder",
    "notificationEmails": [
      "notify@example.com",
      "notify2@example.com"
    ],
    "password": null,
    "recipients": [
      {
        "email": "user@example.com",
        "type": "string"
      }
    ],
    "requireEmail": false,
    "resources": [
      "/testfolder"
    ],
    "sendingLocalFiles": true,
    "type": "shared_folder"
  }'
```

`POST /shares`

Creates a new share object for the given path in your account. We support three types of shares:

  - A **shared folder** allows you to let outside parties access a folder in your account (including any files and nested subfolders) using just a link. Shared folders can be restricted; e.g. with an expiration date, password, download-only, etc. Shared folders are 'live'; if someone makes a change to a file in your shared folder, it will be immediately reflected in your account, and vice-versa.
  - A file **send** lets you send one or more files via an easy download link. File sends are different than shared folders because file sends are 'point in time' -- the recipient will get the files as you sent them. If you later make a change to the source file, it will not be updated for the recipient.
  - A **receive** folder lets you receive files into your account. You can either send users a link, or optionally [embed a customized form](/docs/account/05-file-sharing/05-upload-widget) on your website.
  
**How to send files from your computer using the API**:

In order to use the API to send files which are not already stored in your account, you'll need to follow a three-step process:

1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the `accessMode` and set the `sendingLocalFiles` parameter to **true**. The response that is returned will include a "meta" attribute, which contains an **accessToken** attribute. This new access token is valid only for the send.
2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you've created. The "/" path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the `ev-access-token` header**
3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the `ev-access-token` header, not the temporary access token**

**Setting the Share Permissions**

Only 5 different combinations of permissions are valid for the `accessMode` object:

- **Upload Only**: This allows share visitors to upload to a share but do nothing else to the contained files. To use this mode, set `upload` to **true** and all other permissions to **false**
- **Download Only**: This allows share visitors to download files from a share but do nothing else to the contained files. To use this mode, set `download` to **true** and all other permissions to **false**
- **Upload and Download**: This allows share visitors to upload new files to the share or download files within the share, but not make any other changes to the share contents. To use this mode, set `upload` and `download` to **true** and set both `modify` and `delete` to **false**
- **All but Delete**: This allows share visitors to make any changes to the contents of a share except deleting files. To use this mode, set `upload`, `download`, and `modify` to **true** and set `delete` to **false**
- **Full Access**: This allows share visitors to make any changes to the contents of a share. To use this mode, set all 4 permissions `upload`, `download`, `modify`, and `delete` to **true**

Any other combination of permissions provided as the `accessMode` will be rejected as a bad request.

**Notes:**

Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).

> Body parameter

```json
{
  "accessMode": {
    "delete": true,
    "download": true,
    "modify": true,
    "upload": true
  },
  "embed": false,
  "expiration": "2017-09-25T14:12:10Z",
  "fileDropCreateFolders": false,
  "hasNotification": false,
  "isPublic": true,
  "messageBody": null,
  "messageSubject": "Invitation to a shared folder",
  "name": "Shared Folder",
  "notificationEmails": [
    "notify@example.com",
    "notify2@example.com"
  ],
  "password": null,
  "recipients": [
    {
      "email": "user@example.com",
      "type": "string"
    }
  ],
  "requireEmail": false,
  "resources": [
    "/testfolder"
  ],
  "sendingLocalFiles": true,
  "type": "shared_folder"
}
```

<h3 id="creates-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|body|body|object|false|none|
|» accessMode|body|[AccessMode](#schemaaccessmode)|false|An object defining what a not-logged-in visitor can do with the share contents|
|» embed|body|boolean|false|Whether this share can be embedded within a web page.|
|» expiration|body|string(date-time)|false|Expiration date for the share. If someone attempts to use the share after this date, they will receive an error that the share is not available.|
|» fileDropCreateFolders|body|boolean|false|Only used for **receive** shares. If true, uploads will be automatically placed into sub-folders of the folder, named after the chosen field on your form. |
|» hasNotification|body|boolean|false|Whether delivery receipts should be sent.|
|» isPublic|body|boolean|false|Whether someone can visit the share without following a personalized recipient link.|
|» messageBody|body|string|false|The message to be included in email invitations for your recipients. Ignored if you have not also provided `recipients` and `messageSubject`|
|» messageSubject|body|string|false|Subject to use on emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `messageBody`|
|» name|body|string|true|A name for the share. This will be visible on the page that recipients visit. |
|» notificationEmails|body|[string(email)]|false|Emails that will receive delivery receipts for this share. `hasNotification` must be **true** for delivery receipts will be sent.|
|» password|body|string|false|Set a password for recipients to access the share. All recipients will use the same password.|
|» recipients|body|[object]|false|People you want to invite to the share. **Note**: unless you also set the `messageSubject` and `messageBody` for the new share, invitation emails will not be sent to these recipients.|
|» » email|body|string(email)|false|Email address of person you are inviting to the share|
|» » type|body|string|false|What kind of email should be sent to this recipient. Valid choices are **direct** and **cc**|
|» requireEmail|body|boolean|false|True if recipients must provide their email to view the share.|
|» resources|body|[string]|false|Array of resources for this share. See details on [how to specify resources](#section/Identifying-Resources) above.<br><br>**shared_folder** and **receive** shares must have only one `resource`, which is a directory that does not have a current share attached.<br><br>**send** shares may have multiple `resource` parameters. You can also leave this parameter null if you are planning to upload files to the send. If you are planning to upload files to the send that are not yet in your account, you will also need to call the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to finish the send operation.<br>|
|» sendingLocalFiles|body|boolean|false|Use this only for **send** shares. Flag to indicate that you are going to upload additional files from your computer to the share. If this is **true**, you will also need to use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) call to finish setting up your share after the files are uploaded.|
|» type|body|string|true|The type of share to create. See above for a description of each.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|shared_folder|
|» type|receive|
|» type|send|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "accessDescription": "Upload only",
      "accessMode": {
        "delete": false,
        "download": false,
        "modify": false,
        "upload": true
      },
      "created": "2017-04-21T10:53:47Z",
      "embed": true,
      "expiration": null,
      "expired": false,
      "fileDropCreateFolders": false,
      "hasNotification": true,
      "hasPassword": false,
      "hash": "wgf1-352",
      "inherited": false,
      "messages": [
        {
          "body": "You have files available for download.",
          "created": "2017-04-21T10:53:47Z",
          "id": 23,
          "modified": "2017-04-21T10:53:47Z",
          "subject": "Message subject."
        }
      ],
      "modified": "2017-04-21T10:53:47Z",
      "name": "Example Share",
      "ownerHash": "hd1e-3erufo72-fwggk999",
      "paths": [
        "/example share"
      ],
      "public": true,
      "recipients": [
        {
          "created": "2017-04-21T10:53:47Z",
          "email": "recipient@example.com",
          "hash": "fsesghan",
          "id": 11,
          "received": false,
          "sent": true,
          "type": "direct"
        }
      ],
      "requireEmail": false,
      "resent": null,
      "status": 1,
      "type": "shared_folder"
    },
    "id": 10,
    "relationships": {
      "notifications": [
        {
          "data": {
            "id": 14,
            "type": "notification"
          }
        },
        {
          "data": {
            "id": 15,
            "type": "notification"
          }
        }
      ],
      "owner": {
        "data": {
          "id": 12,
          "type": "user"
        }
      },
      "resource": [
        {
          "data": null,
          "id": 13,
          "type": "resource"
        }
      ]
    },
    "type": "share"
  },
  "responseStatus": 200
}
```

<h3 id="creates-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|[ShareResponse](#schemashareresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Complete send files

<a id="opIdcompleteDirectSend"></a>

> Code samples

```bash
curl https://example.com/shares/complete-send/0 \
  -X POST \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1'
```

`POST /shares/complete-send/{id}`

After uploading the file(s) to be sent, this method will trigger invitation emails and finish the send files setup. If you are not sending files from your own computer in a send, you will not need this step.
  
**How to send files from your computer using the API**:

In order to use the API to send files which are not already stored in your account, you'll need to follow a three-step process:

1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the `accessMode` and set the `sendingLocalFiles` paramter to **true**. The response that is returned will include a "meta" attribute, which contains an **accessToken** attribute. This new access token is valid only for the send.
2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you've created. The "/" path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the `ev-access-token` header**
3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the `ev-access-token` header, not the temporary access token**


<h3 id="complete-send-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key|
|ev-access-token|header|string|true|Access Token|
|id|path|integer|true|ID of the share to trigger invitations for.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "accessDescription": "Download only",
      "accessMode": {
        "delete": true,
        "download": true,
        "modify": true,
        "upload": true
      },
      "created": "2017-01-28T13:10:47Z",
      "embed": false,
      "expiration": null,
      "expired": false,
      "fileDropCreateFolders": false,
      "formId": 0,
      "hasNotification": false,
      "hasPassword": false,
      "hash": "hd1e-3erufo72",
      "inherited": false,
      "messages": [
        {
          "body": "You have files available for download.",
          "created": "2017-01-26T18:10:47Z",
          "id": 397584,
          "modified": "2017-01-28T13:10:47Z",
          "shareId": 3544253,
          "subject": "Files available for download",
          "userId": 119394
        }
      ],
      "modified": null,
      "name": "Example Folder",
      "ownerHash": "hd1e-3erufo72-fsxak999",
      "paths": [
        "/Example Folder"
      ],
      "public": true,
      "recipients": [
        {
          "created": "2017-04-21T10:53:47Z",
          "email": "recipient@example.com",
          "hash": "fseowxan",
          "id": 2,
          "received": false,
          "sent": true,
          "shareId": 23,
          "type": "direct"
        }
      ],
      "requireEmail": true,
      "resent": null,
      "status": 1,
      "trackingStatus": "complete",
      "type": "shared_folder"
    },
    "id": 655621,
    "relationships": {
      "messages": [
        {
          "data": {
            "id": 21,
            "type": "message"
          }
        }
      ],
      "notifications": [
        {
          "data": {
            "id": 9,
            "type": "notification"
          }
        }
      ],
      "owner": {
        "data": {
          "id": 12345,
          "type": "string"
        }
      },
      "resources": [
        {
          "data": {
            "id": 12345,
            "type": "resource"
          }
        }
      ]
    },
    "type": "share"
  },
  "included": [
    {
      "attributes": {
        "accessTimestamp": "2011-03-21T00:18:56-07:00",
        "accountName": "exampleaccount",
        "created": "2018-07-27T15:43:55-07:00",
        "email": "example@exavault.mail",
        "expiration": "2020-06-30T13:33:30-07:00",
        "firstLogin": false,
        "homePath": "/",
        "locked": false,
        "modified": "2018-07-29T15:43:55-07:00",
        "nickname": "exampleuser",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Chicago",
        "username": "exampleuser"
      },
      "id": 655621,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 0,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 0,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "responseStatus": 200
}
```

<h3 id="complete-send-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ShareResponse](#schemashareresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a share

<a id="opIdgetShareById"></a>

> Code samples

```bash
curl https://example.com/shares/23241 \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1'
```

`GET /shares/{id}`

Get the details for a specific share entry. You can use the `include` parameter to also get the details of related records, such as the owning user or the resources involved in the share.

**Notes:**

- Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
- To get share objects with type send, authenticated user's role must be admin or master.

<h3 id="get-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key|
|ev-access-token|header|string|true|Access Token|
|include|query|string|false|Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**.|
|id|path|integer(int32)|true|ID of the share entry|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "accessDescription": "Upload only",
      "accessMode": {
        "delete": false,
        "download": false,
        "modify": false,
        "upload": true
      },
      "created": "2017-04-21T10:53:47Z",
      "embed": true,
      "expiration": null,
      "expired": false,
      "fileDropCreateFolders": false,
      "hasNotification": true,
      "hasPassword": false,
      "hash": "wef1-352",
      "inherited": false,
      "messages": [
        {
          "body": "You have files available for download.",
          "created": "2017-04-21T10:53:47Z",
          "id": 23,
          "modified": "2017-04-21T10:53:47Z",
          "subject": "Message subject."
        }
      ],
      "modified": "2017-04-21T10:53:47Z",
      "name": "Example Share",
      "ownerHash": "hd1e-3eerg72-fsxak999",
      "paths": [
        "/example share"
      ],
      "public": true,
      "recipients": [
        {
          "created": "2017-04-21T10:53:47Z",
          "email": "recipient@example.com",
          "hash": "fethwxan",
          "id": 11,
          "received": false,
          "sent": true,
          "type": "direct"
        }
      ],
      "requireEmail": false,
      "resent": null,
      "status": 1,
      "type": "shared_folder"
    },
    "id": 10,
    "relationships": {
      "notifications": [
        {
          "data": {
            "id": 14,
            "type": "notification"
          }
        },
        {
          "data": {
            "id": 15,
            "type": "notification"
          }
        }
      ],
      "owner": {
        "data": {
          "id": 12,
          "type": "user"
        }
      },
      "resources": [
        {
          "data": {
            "id": 13,
            "type": "resource"
          }
        }
      ]
    },
    "type": "share"
  },
  "included": [
    {
      "attributes": {
        "accessTimestamp": "2019-09-06T11:40:29Z",
        "created": "2019-05-29T20:48:57Z",
        "email": "user@example.com",
        "expiration": "2020-04-21T10:53:47Z",
        "firstLogin": false,
        "homeDir": "/",
        "modified": "2019-07-27T01:03:41Z",
        "nickname": "examplenickname",
        "onboarding": true,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "master",
        "status": 0,
        "timeZone": "UTC",
        "username": "exampleuser"
      },
      "id": 12,
      "type": "user"
    },
    {
      "attributes": {
        "accessedAt": "2019-05-29T20:48:57Z",
        "createdAt": "2019-05-29T20:48:57Z",
        "extension": null,
        "fileCount": 1,
        "hash": "ec4aa9a91er282666a165899a14f29b1",
        "name": "Shared Folder",
        "path": "/Shared Folder",
        "previewable": false,
        "size": 987,
        "type": "folder",
        "updatedAt": "2019-05-29T20:48:57Z",
        "uploadDate": "2019-05-29T20:48:57Z"
      },
      "id": 13,
      "type": "resource"
    },
    {
      "attributes": {
        "action": "upload",
        "created": "2019-05-29T20:48:57Z",
        "message": null,
        "name": "Shared Folder",
        "path": "/Shared Folder",
        "readableDescription": null,
        "readableDescriptionWithoutPath": null,
        "recipientEmails": [
          "recipient@example.com"
        ],
        "recipients": [
          {
            "created": "2019-05-29T20:48:57Z",
            "email": "recipient@example.com",
            "id": 18,
            "modified": "2019-05-29T20:48:57Z",
            "notificationId": 14
          }
        ],
        "sendEmail": 1,
        "type": "shared_folder",
        "updated": "2019-05-29T20:48:57Z",
        "usernames": [
          "notice_user_all"
        ]
      },
      "id": 14,
      "type": "notification"
    },
    {
      "attributes": {
        "action": "upload",
        "created": "2019-05-29T20:48:57Z",
        "message": null,
        "name": "Shared Folder2",
        "path": "/Shared Folder2",
        "readableDescription": null,
        "readableDescriptionWithoutPath": null,
        "recipientEmails": [
          "recipient@example.com"
        ],
        "recipients": [
          {
            "created": "2019-05-29T20:48:57Z",
            "email": "recipient@example.com",
            "id": 18,
            "modified": "2019-05-29T20:48:57Z",
            "notificationId": 14
          }
        ],
        "sendEmail": 1,
        "type": "shared_folder",
        "updated": "2019-05-29T20:48:57Z",
        "usernames": [
          "notice_user_all"
        ]
      },
      "id": 15,
      "type": "notification"
    }
  ],
  "responseStatus": 200
}
```

<h3 id="get-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ShareResponse](#schemashareresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Deactivate a share

<a id="opIddeleteShareById"></a>

> Code samples

```bash
curl https://example.com/shares/23241 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`DELETE /shares/{id}`

Deactivate a share. Deactivating a share does not remove the underlying files for **shared_folder** and **receive** share types; it merely removes the access URL. Deleting a **send** share type does remove the associated files, as files that have been sent are only associated with the share, and aren't stored anywhere else in the account.

**Notes:**

- You must have [sharing permissons](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.
- You must have [admin-level access](/docs/account/04-users/01-admin-users), or you must be the owner of the specified share you wish to delete.

<h3 id="deactivate-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer(int32)|true|ID of the share entry|

> Example responses

> 200 Response

```json
{
  "data": [],
  "responseStatus": 200
}
```

<h3 id="deactivate-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[EmptyResponse](#schemaemptyresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a share

<a id="opIdupdateShareById"></a>

> Code samples

```bash
curl https://example.com/shares/23241 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1' \
  -d '{
    "accessMode": {
      "delete": true,
      "download": true,
      "modify": true,
      "upload": true
    },
    "embed": false,
    "expiration": "2017-09-25T14:12:10Z",
    "fileDropCreateFolders": false,
    "hasNotification": false,
    "isPublic": true,
    "messageBody": null,
    "messageSubject": "Invitation to a shared folder",
    "name": "Shared Folder",
    "notificationEmails": [
      "notify@example.com",
      "notify2@example.com"
    ],
    "password": null,
    "recipients": [
      {
        "email": "user@example.com",
        "type": "string"
      }
    ],
    "requireEmail": false,
    "resources": [
      "/testfolder"
    ],
    "status": 0
  }'
```

`PATCH /shares/{id}`

Change the settings on an active share. Any changes made will affect all users that have access to the share. 

When updating invitees, pass the `recipients` body paramater with the full list of people who should be included on the share. If you resend the list without an existing recipient, they will be removed from the share.

**Setting the Share Permissions**

Only 5 different combinations of permissions are valid for the `accessMode` object:

- **Upload Only**: This allows share visitors to upload to a share but do nothing else to the contained files. To use this mode, set `upload` to **true** and all other permissions to **false**
- **Download Only**: This allows share visitors to download files from a share but do nothing else to the contained files. To use this mode, set `download` to **true** and all other permissions to **false**
- **Upload and Download**: This allows share visitors to upload new files to the share or download files within the share, but not make any other changes to the share contents. To use this mode, set `upload` and `download` to **true** and set both `modify` and `delete` to **false**
- **All but Delete**: This allows share visitors to make any changes to the contents of a share except deleting files. To use this mode, set `upload`, `download`, and `modify` to **true** and set `delete` to **false**
- **Full Access**: This allows share visitors to make any changes to the contents of a share. To use this mode, set all 4 permissions `upload`, `download`, `modify`, and `delete` to **true**

Any other combination of permissions provided as the `accessMode` will be rejected as a bad request.

**Notes:**

  - Authenticated user should be the owner of the specified share.

> Body parameter

```json
{
  "accessMode": {
    "delete": true,
    "download": true,
    "modify": true,
    "upload": true
  },
  "embed": false,
  "expiration": "2017-09-25T14:12:10Z",
  "fileDropCreateFolders": false,
  "hasNotification": false,
  "isPublic": true,
  "messageBody": null,
  "messageSubject": "Invitation to a shared folder",
  "name": "Shared Folder",
  "notificationEmails": [
    "notify@example.com",
    "notify2@example.com"
  ],
  "password": null,
  "recipients": [
    {
      "email": "user@example.com",
      "type": "string"
    }
  ],
  "requireEmail": false,
  "resources": [
    "/testfolder"
  ],
  "status": 0
}
```

<h3 id="update-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key|
|ev-access-token|header|string|true|Access Token|
|id|path|integer(int32)|true|ID of the share entry|
|body|body|object|true|none|
|» accessMode|body|[AccessMode](#schemaaccessmode)|false|An object defining what a not-logged-in visitor can do with the share contents|
|» embed|body|boolean|false|Whether the share can be embedded in another web page.|
|» expiration|body|string(date-time)|false|New expiration date and time for the share|
|» fileDropCreateFolders|body|boolean|false|Whether uploads to a receive folder should be automatically placed into subfolders. See our [receive folder documentation](/docs/account/05-file-sharing/05-form-builder#advanced-form-settings)|
|» hasNotification|body|boolean|false|Whether delivery receipts should be sent for this share.|
|» isPublic|body|boolean|false|Whether people can visit the share without following a link from an invitation email|
|» messageBody|body|string|false|Message content to use for emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `subject`|
|» messageSubject|body|string|false|Subject to use on emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `message`|
|» name|body|string|false|Name of the share.|
|» notificationEmails|body|[string(email)]|false|List of email addresses to send delivery receipts to. Ignored if `hasNotification` is false. |
|» password|body|string|false|New password for the share. To leave the password unchanged, do not send this parameter.|
|» recipients|body|[object]|false|People you want to invite to the share. <br><br>**Note**: unless you also set the `subject` and `message` for the new share, invitation emails will not be sent to these recipients.<br><br>**Note**: Recipients in this list will **REPLACE** the recipients already assigned to this share. |
|» » email|body|string(email)|false|Email address of person you are inviting to the share|
|» » type|body|string|false|What kind of email should be sent to this recipient. Valid choices are **direct** and **cc**|
|» requireEmail|body|boolean|false|Whether visitors to the share will be required to enter their email in order to access the share.|
|» resources|body|[string]|false|Array of resources for this share. See details on [how to specify resources](#section/Identifying-Resources) above.<br><br>**shared_folder** and **receive** shares must have only one `resource`, which is a directory that does not have a current share attached.<br><br>**send** shares may have multiple `resource` parameters. <br><br>**NOTE**: Sending this parameter will **REPLACE** the existing resources with the resources included in this request.|
|» status|body|integer|false|New status for the share. You can set an active share to inactive by setting the status to **0**|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "accessDescription": "Upload only",
      "accessMode": {
        "delete": false,
        "download": false,
        "modify": false,
        "upload": true
      },
      "created": "2017-04-21T10:53:47Z",
      "embed": true,
      "expiration": null,
      "expired": false,
      "fileDropCreateFolders": false,
      "hasNotification": true,
      "hasPassword": false,
      "hash": "wgf1-352",
      "inherited": false,
      "messages": [
        {
          "body": "You have files available for download.",
          "created": "2017-04-21T10:53:47Z",
          "id": 23,
          "modified": "2017-04-21T10:53:47Z",
          "subject": "Message subject."
        }
      ],
      "modified": "2017-04-21T10:53:47Z",
      "name": "Example Share",
      "ownerHash": "hd1e-3erufo72-fwggk999",
      "paths": [
        "/example share"
      ],
      "public": true,
      "recipients": [
        {
          "created": "2017-04-21T10:53:47Z",
          "email": "recipient@example.com",
          "hash": "fsesghan",
          "id": 11,
          "received": false,
          "sent": true,
          "type": "direct"
        }
      ],
      "requireEmail": false,
      "resent": null,
      "status": 1,
      "type": "shared_folder"
    },
    "id": 10,
    "relationships": {
      "notifications": [
        {
          "data": {
            "id": 14,
            "type": "notification"
          }
        },
        {
          "data": {
            "id": 15,
            "type": "notification"
          }
        }
      ],
      "owner": {
        "data": {
          "id": 12,
          "type": "user"
        }
      },
      "resources": [
        {
          "data": {
            "id": 13,
            "type": "resource"
          }
        }
      ]
    },
    "type": "share"
  },
  "responseStatus": 200
}
```

<h3 id="update-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ShareResponse](#schemashareresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="exavault-notifications">Notifications</h1>

The notifications APIs allow you to set up and manage notifications in your account. When an action is taken on a file folder, you can be notified via email or webhook.

## Get a list of notifications

<a id="opIdlistNotifications"></a>

> Code samples

```bash
curl https://example.com/notifications \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /notifications`

Get a list of all the [notifications](/docs/account/06-notifications) you have access to. You can use sorting and filtering to limit the returned list.

**Notes:**
  - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)

<h3 id="get-a-list-of-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call. |
|ev-access-token|header|string|true|Access token required to make the API call.|
|type|query|string|false|Type of notification include in the list. Valid options are **file**, **folder**, **send_receipt**, **share_receipt**, **file_drop**<br><br>If this parameter is not used, only **file** and **folder** type notifications are included in the list.|
|offset|query|integer(int32)|false|Starting notification record in the result set. Can be used for pagination.|
|sort|query|string|false|What order the list of matches should be in. Valid sort fields are **resourcename**, **date**, **action** and **type**. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.<br><br>You can chose multiple options for the sort by separating them with commmas, such as "type,-date" to sort by type, then most recent.|
|limit|query|integer(int32)|false|Number of notification records to return. Can be used for pagination.|
|include|query|string|false|Related records to include in the response. Valid options are **ownerUser**, **resource**, **share**|
|action|query|string|false|The kind of action which triggers the notification. Valid choices are **connect** (only for delivery receipts), **download**, **upload**, **delete**, or **all** <br><br>**Note** The **all** action matches notifications set to "all", not all notifications. For example, notifications set to trigger only on delete are not included if you filter for action=all|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|file|
|type|folder|
|type|shared_folder|
|type|send_receipt|
|type|share_receipt|
|type|file_drop|
|include|resource|
|include|share|
|include|user|
|action|connect|
|action|download|
|action|upload|
|action|delete|
|action|all|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "action": "all",
        "created": "2020-07-29T09:53:17-07:00",
        "message": null,
        "modified": "2020-07-29T09:53:17-07:00",
        "name": "/Test",
        "path": "/Test",
        "readableDescription": "anybody uploads to, downloads from or deletes from '/Test'",
        "readableDescriptionWithoutPath": "anybody uploads to or downloads from this folder",
        "recipientEmails": [
          "exavault@example.com"
        ],
        "recipients": [
          {
            "created": "2020-07-29T19:51:21-07:00",
            "email": "exavault@example.com",
            "id": null,
            "modified": "2020-07-29T19:51:21-07:00",
            "notificationId": null
          }
        ],
        "sendEmail": true,
        "type": "folder",
        "usernames": [
          "exavaultuser"
        ]
      },
      "id": 1117,
      "relationships": {
        "ownerUser": {
          "data": {
            "id": 124437,
            "type": "user"
          }
        },
        "resource": {
          "data": {
            "id": 2554051,
            "type": "resource"
          }
        }
      },
      "type": "notification"
    }
  ],
  "included": [],
  "responseStatus": 200,
  "returnedResults": 1,
  "totalResults": 1
}
```

<h3 id="get-a-list-of-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[NotificationCollectionResponse](#schemanotificationcollectionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new notification

<a id="opIdaddNotification"></a>

> Code samples

```bash
curl https://example.com/notifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "action": "upload",
    "message": "hello world",
    "recipients": [
      "myemail@example.com"
    ],
    "resource": "examplefile.txt",
    "sendEmail": true,
    "type": "file",
    "usernames": [
      "exavault",
      "exavalut2"
    ]
  }'
```

`POST /notifications`

Create a new notification for a [resource](#section/Identifying-Resources) in your account. Notifications can be sent via email or webhook;

- To enable email, pass an array of email addresses to the `recipients` parameter of this call. 
- To enable webhooks, setup the webhook callback URL in your account settings via [PATCH /account](#operation/updateAccount). 

**Notes:**
  - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)


> Body parameter

```json
{
  "action": "upload",
  "message": "hello world",
  "recipients": [
    "myemail@example.com"
  ],
  "resource": "examplefile.txt",
  "sendEmail": true,
  "type": "file",
  "usernames": [
    "exavault",
    "exavalut2"
  ]
}
```

<h3 id="create-a-new-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make API call. |
|ev-access-token|header|string|true|Access token required to make the API call.|
|body|body|object|false|none|
|» action|body|string|true|Type of action be notified about. Notifications will only be fired for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete)|
|» message|body|string|false|Custom message to include in notification emails.|
|» recipients|body|[string(email)]|false|Email addresses to send notification emails to. If not specified, sends to the current user's email address.|
|» resource|body|string|true|Resources for this notification. See details on [how to specify resources](#section/Identifying-Resources) above.|
|» sendEmail|body|boolean|true|Set to true if the user should be notified by email when the notification is triggered.|
|» type|body|string|true|What kind of notification you're making. Valid choices are:<br><br>- **file** to monitor activity for a file resource<br>- **folder** to monitor activity for a folder resource|
|» usernames|body|[string]|true|Determines which users' actions should trigger the notification. <br><br>Rather than listing  individual users, you can also use 3 special options:<br><br>- **notice\_user\_all** for activity by any user or share recipient<br>- **notice\_user\_all\_users** for activity only by user accounts<br>- **notice\_user\_all\_recipient** for activity only by share recipients|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|upload|
|» action|download|
|» action|delete|
|» action|all|
|» type|file|
|» type|folder|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "action": "upload",
      "created": "2020-07-29T20:15:09-07:00",
      "message": null,
      "modified": "2020-07-29T20:15:09-07:00",
      "name": "/Test",
      "path": "/Test",
      "readableDescription": "anybody uploads to '/Test'",
      "readableDescriptionWithoutPath": "anybody uploads to this folder",
      "recipients": [
        {
          "created": "2020-07-29T20:15:09-07:00",
          "email": "exavault@example.com",
          "id": 81,
          "modified": "2020-07-29T20:15:09-07:00",
          "notificationId": 1143
        },
        {
          "created": "2020-07-29T20:15:09-07:00",
          "email": "exavault@example.com",
          "id": 83,
          "modified": "2020-07-29T20:15:09-07:00",
          "notificationId": 1143
        }
      ],
      "sendEmail": false,
      "type": "folder",
      "usernames": [
        "exavaultuser"
      ]
    },
    "id": 1143,
    "relationships": {
      "ownerUser": {
        "data": {
          "id": 124437,
          "type": "user"
        }
      },
      "resource": {
        "data": {
          "id": 2554051,
          "type": "resource"
        }
      }
    },
    "type": "notification"
  },
  "responseStatus": 201
}
```

<h3 id="create-a-new-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Operation|[NotificationResponse](#schemanotificationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get notification details

<a id="opIdgetNotificationById"></a>

> Code samples

```bash
curl https://example.com/notifications/3 \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /notifications/{id}`

Get the details for a notification with a specific ID number. You'll be able to review its path, triggers and who's getting the notification. 

**Notes**

- You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to view the detail for a notification.
- You can only retrieve notifications owned by your user account.

<h3 id="get-notification-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer|true|ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.|
|include|query|string|false|Related record types to include in the response. You can include multiple types by separating them with commas. Valid options are **ownerUser**, **resource**, and **share**.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "action": "upload",
      "created": "2020-07-29T20:15:09-07:00",
      "message": null,
      "modified": "2020-07-29T20:15:09-07:00",
      "name": "/Test",
      "path": "/Test",
      "readableDescription": "anybody uploads to '/Test'",
      "readableDescriptionWithoutPath": "anybody uploads to this folder",
      "recipients": [
        {
          "created": "2020-07-29T20:15:09-07:00",
          "email": "exavault@example.com",
          "id": 81,
          "modified": "2020-07-29T20:15:09-07:00",
          "notificationId": 1143
        },
        {
          "created": "2020-07-29T20:15:09-07:00",
          "email": "exavault+1@example.com",
          "id": 83,
          "modified": "2020-07-29T20:15:09-07:00",
          "notificationId": 1143
        }
      ],
      "sendEmail": false,
      "type": "folder",
      "usernames": [
        "exavaultuser"
      ]
    },
    "id": 1143,
    "relationships": {
      "ownerUser": {
        "data": {
          "id": 124437,
          "type": "user"
        }
      },
      "resource": {
        "data": {
          "id": 2554051,
          "type": "resource"
        }
      }
    },
    "type": "notification"
  },
  "included": [],
  "responseStatus": 200
}
```

<h3 id="get-notification-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[NotificationResponse](#schemanotificationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a notification

<a id="opIddeleteNotificationById"></a>

> Code samples

```bash
curl https://example.com/notifications/3 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`DELETE /notifications/{id}`

Deletes a notification. Note that deleting a notification _only_ deletes the notification &ndash; it does not delete any underlying files or folders.

**Notes:**

- You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.
- You can only delete notifications owned by your user account.

<h3 id="delete-a-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer(int32)|true|ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "responseStatus": 200
}
```

<h3 id="delete-a-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[EmptyResponse](#schemaemptyresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a notification

<a id="opIdupdateNotificationById"></a>

> Code samples

```bash
curl https://example.com/notifications/3 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "action": "upload",
    "emails": [
      "exavault@example.com",
      "exavault+1@example.com"
    ],
    "sendEmail": "true",
    "usernames": [
      "notice_user_all_recipients"
    ]
  }'
```

`PATCH /notifications/{id}`

Update an existing notification. You can add additional emails or change the action or users that cause a notification to trigger. 

When updating recipient emails, make sure your `recipients` parameter contains the full list of people who should be included on the notification. If you resend the list without an existing recipient, they will be deleted from the notification emails. 

**Notes:**

- You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.
- You can only change notifications owned by your user account.

> Body parameter

```json
{
  "action": "upload",
  "emails": [
    "exavault@example.com",
    "exavault+1@example.com"
  ],
  "sendEmail": "true",
  "usernames": [
    "notice_user_all_recipients"
  ]
}
```

<h3 id="update-a-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer|true|ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.|
|body|body|object|false|none|
|» action|body|string|false|Type of action be notified about. Notifications will only be sent for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete)|
|» message|body|string|false|Custom message to insert into the notification emails, along with the matching activity.|
|» recipients|body|[string(email)]|false|Email addresses to send notification emails to. If empty, sends to the current user's email address.|
|» sendEmail|body|boolean|false|Whether an email should be sent to the recipients when matching activity happens.|
|» usernames|body|[string]|false|Determines which users' actions should trigger the notification. <br><br>Rather than listing  individual users, you can also use 3 special options:<br><br>- **notice\_user\_all** for activity by any user or share recipient<br>- **notice\_user\_all\_users** for activity only by user accounts<br>- **notice\_user\_all\_recipients** for activity only by share recipients|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|upload|
|» action|download|
|» action|delete|
|» action|all|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "action": "all",
      "created": "2020-07-29T20:15:09-07:00",
      "message": null,
      "modified": "2020-07-29T20:15:09-07:00",
      "name": "/Test",
      "path": "/Test",
      "readableDescription": "anybody uploads to, downloads from or deletes from '/Test'",
      "readableDescriptionWithoutPath": "anybody uploads to or downloads from this folder",
      "recipients": [
        {
          "created": "2020-07-30T06:01:09-07:00",
          "email": "exavault@example.com",
          "id": 85,
          "modified": "2020-07-30T06:01:09-07:00",
          "notificationId": 1143
        },
        {
          "created": "2020-07-30T06:01:09-07:00",
          "email": "exavault+1@example.com",
          "id": 87,
          "modified": "2020-07-30T06:01:09-07:00",
          "notificationId": 1143
        }
      ],
      "sendEmail": false,
      "type": "folder",
      "usernames": [
        "exavalutuser"
      ]
    },
    "id": 1143,
    "relationships": {
      "ownerUser": {
        "data": {
          "id": 124437,
          "type": "user"
        }
      },
      "resource": {
        "data": {
          "id": 2554051,
          "type": "resource"
        }
      }
    },
    "type": "notification"
  },
  "included": [],
  "responseStatus": 200
}
```

<h3 id="update-a-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[NotificationResponse](#schemanotificationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="exavault-email-lists">Email Lists</h1>

The email lists APIs allow you to manage email lists that can be used for speeding up actions within the ExaVault File Manager such as adding your marketing team, Tom, Jane, and Harry, to a shared folder in a single action instead of three.

## Get all email groups

<a id="opIdgetEmailLists"></a>

> Code samples

```bash
curl https://example.com/email-lists \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /email-lists`

List all email groups for authenticated user

<h3 id="get-all-email-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|include|query|string|false|Related record types to include in the response. Valid option is `ownerUser`|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "created": "2020-07-30T10:09:05-07:00",
        "emails": [
          "exavault@example.com",
          "exavault+1@example.com"
        ],
        "modified": "2020-07-30T10:09:05-07:00",
        "name": "ExaVault Test"
      },
      "id": 27,
      "relationships": {
        "ownerUser": {
          "data": {
            "id": 124437,
            "type": "user"
          }
        }
      },
      "type": "emailList"
    }
  ],
  "included": [
    {
      "attributes": {
        "accessTimestamp": "0000-00-00T00:00:00+00:00",
        "accountName": "example-acct",
        "created": "2020-09-02T18:54:14-07:00",
        "email": "example@exavault-example.com",
        "expiration": "2021-12-31 11:59:59",
        "firstLogin": null,
        "homeDir": "/",
        "modified": "2020-09-02T18:54:14-07:00",
        "nickname": "example-user",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "admin",
        "status": 1,
        "timeZone": "America/Los_Angeles",
        "username": "example-user"
      },
      "id": 124437,
      "type": "user"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 1,
  "totalResults": 1
}
```

<h3 id="get-all-email-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[EmailListCollectionResponse](#schemaemaillistcollectionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create new email list

<a id="opIdaddEmailList"></a>

> Code samples

```bash
curl https://example.com/email-lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "value": {
      "emails": [
        "exavault@example.com",
        "exavault+1@example.com"
      ],
      "name": "ExaVault Test"
    }
  }'
```

`POST /email-lists`

Create a new email list. Among other things, email lists can be used to send files or share folders with a group of email addresses at once.

> Body parameter

```json
{
  "value": {
    "emails": [
      "exavault@example.com",
      "exavault+1@example.com"
    ],
    "name": "ExaVault Test"
  }
}
```

<h3 id="create-new-email-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|body|body|object|false|none|
|» emails|body|[string]|true|Array of email addresses to include in the email list. |
|» name|body|string|true|Name of the email list. |

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "created": "2020-07-30T10:09:05-07:00",
      "emails": [
        "exavault@example.com",
        "exavault+1@example.com"
      ],
      "modified": "2020-07-30T10:09:05-07:00",
      "name": "ExaVault Test"
    },
    "id": 27,
    "relationships": {
      "ownerUser": {
        "data": {
          "id": 124437,
          "type": "user"
        }
      }
    },
    "type": "emailList"
  },
  "included": [],
  "responseStatus": 201
}
```

<h3 id="create-new-email-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|[EmailListResponse](#schemaemaillistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get individual email group

<a id="opIdgetEmailListById"></a>

> Code samples

```bash
curl https://example.com/email-lists/0 \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /email-lists/{id}`

Retrieve all the details of a specific email list including it's name, when it was created and all the email addresses that belong to the group.

<h3 id="get-individual-email-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer|true|ID of the email list to return.|
|include|query|string|false|Related record types to include in the response. Valid option is `ownerUser`|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "created": "2019-09-02T18:58:07-07:00",
      "emails": [
        "test1@example.com",
        "test2@example.com"
      ],
      "name": "My Test List"
    },
    "id": 29,
    "relationships": {
      "ownerUser": {
        "data": {
          "id": 125391,
          "type": "user"
        }
      }
    },
    "type": "emailList"
  },
  "included": [
    {
      "attributes": {
        "accessTimestamp": "0000-00-00T00:00:00+00:00",
        "accountName": "example-acct",
        "created": "2020-09-02T18:54:14-07:00",
        "email": "admin@exavault-example.com",
        "expiration": null,
        "firstLogin": null,
        "homeDir": "/",
        "modified": "2020-09-02T18:54:14-07:00",
        "nickname": "example-admin",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "admin",
        "status": 1,
        "timeZone": "America/Los_Angeles",
        "username": "example-admin"
      },
      "id": 125391,
      "type": "user"
    }
  ],
  "responseStatus": 200
}
```

<h3 id="get-individual-email-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[EmailListResponse](#schemaemaillistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an email group with given id

<a id="opIddeleteEmailListById"></a>

> Code samples

```bash
curl https://example.com/email-lists/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`DELETE /email-lists/{id}`

Permanently delete an email group. This action is not reversible. We recommend making a user confirm this action before sending the API call. 

<h3 id="delete-an-email-group-with-given-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer|true|ID of the email list to delete|

> Example responses

> 200 Response

```json
{
  "data": [],
  "responseStatus": 200
}
```

<h3 id="delete-an-email-group-with-given-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[EmptyResponse](#schemaemptyresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an email group

<a id="opIdupdateEmailListById"></a>

> Code samples

```bash
curl https://example.com/email-lists/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "emails": [
      "test@example.com",
      "test+1@example.com",
      "newaddress@example.com"
    ],
    "name": "Renamed Test Email List"
  }'
```

`PATCH /email-lists/{id}`

Add or remove emails from an email list that can be used to send and share files with groups. 

**Notes**

*This call will **replace** your current email list in its entirety.* If you want to keep any existing emails on the list, be sure to submit the call with any current emails you want to keep on the list.  

> Body parameter

```json
{
  "emails": [
    "test@example.com",
    "test+1@example.com",
    "newaddress@example.com"
  ],
  "name": "Renamed Test Email List"
}
```

<h3 id="update-an-email-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer|true|ID of the email list to update.|
|body|body|object|false|none|
|» emails|body|[string]|false|Email addresses that replace existing list.|
|» name|body|string|false|Name of the email list.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "created": "2020-09-03T11:10:55-07:00",
      "emails": [
        "test@example.com",
        "test+1@example.com",
        "newaddress@example.com"
      ],
      "modified": "2020-09-03T11:36:05-07:00",
      "name": "Renamed Test Email List"
    },
    "id": 33,
    "relationships": {
      "ownerUser": {
        "data": {
          "id": 125391,
          "type": "user"
        }
      }
    },
    "type": "emailList"
  },
  "included": [],
  "responseStatus": 200
}
```

<h3 id="update-an-email-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[EmailListResponse](#schemaemaillistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="exavault-account">Account</h1>

The account APIs allow you review and change account settings. Many account settings will have immediate effects on all current and future users, so consider adding a user facing confirmation step before sending an update call.

## Get account settings

<a id="opIdgetAccount"></a>

> Code samples

```bash
curl https://example.com/account \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1'
```

`GET /account`

Get settings for your account, such as current space usage, webhooks settings, welcome email content and IP address restrictions.

<h3 id="get-account-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required for the request|
|ev-access-token|header|string|true|Access Token for the request|
|include|query|string|false|Related records to include in the response. Valid option is **masterUser**|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "accountName": "exampleaccount",
      "accountOnboarding": true,
      "allowedIp": null,
      "branding": true,
      "clientId": 1,
      "complexPasswords": false,
      "created": "2019-05-30T20:48:57Z",
      "customDomain": false,
      "customSignature": null,
      "externalDomains": null,
      "maxUsers": 5,
      "modified": "2019-08-27T01:03:41Z",
      "quota": {
        "bandwidthLimit": 9223372036854776000,
        "bandwidthUsed": 0,
        "diskLimit": 107374182400,
        "diskUsed": 4770252339,
        "noticeEnabled": false,
        "noticeThreshold": 90,
        "transactionsLimit": 120000,
        "transactionsNoticeEnabled": false,
        "transactionsNoticeThreshold": 90
      },
      "secureOnly": false,
      "showReferralLinks": true,
      "status": 1,
      "userCount": 4,
      "welcomeEmailContent": "\"Great news, your new account is ready!\\n\\nFor your records, we've listed information you'll use to log in below:\\n\\nFTP Server: [[ftpserver]]\\n\\nUsername (Web and FTP access): [[username]]\\n\\n[[setpassword]]\"\n",
      "welcomeEmailSubject": "ExaVault File Sharing Account"
    },
    "id": 7,
    "included": [
      {
        "attributes": {
          "accessTimestamp": "2019-09-06T11:40:29Z",
          "accountId": 2,
          "accountName": "examplemasteraccount",
          "created": "2019-05-29T20:48:57Z",
          "email": "user@example.com",
          "expiration": null,
          "firstLogin": false,
          "homeDir": "/",
          "modified": "2019-07-27T01:03:41Z",
          "nickname": "examplenickname",
          "onboarding": true,
          "permissions": {
            "changePassword": true,
            "delete": true,
            "deleteFormData": true,
            "download": true,
            "list": true,
            "modify": true,
            "notification": true,
            "share": true,
            "upload": true,
            "viewFormData": true
          },
          "role": "master",
          "status": 1,
          "timeZone": "UTC",
          "username": "examplemasteruser"
        },
        "id": 1,
        "relationships": {
          "homeResource": {
            "data": {
              "id": 2554051,
              "type": "resource"
            }
          },
          "ownerAccount": {
            "data": {
              "id": 124437,
              "type": "account"
            }
          }
        },
        "type": "user"
      }
    ],
    "relationships": {
      "masterUser": {
        "data": {
          "id": 1,
          "type": "user"
        }
      }
    },
    "type": "account"
  },
  "responseStatus": 200
}
```

<h3 id="get-account-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[AccountResponse](#schemaaccountresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Update account settings

<a id="opIdupdateAccount"></a>

> Code samples

```bash
curl https://example.com/account \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1' \
  -d '{
    "accountOnboarding": true,
    "allowedIpRanges": [
      {
        "ipEnd": "67.208.64.254",
        "ipStart": "67.208.64.228"
      }
    ],
    "brandingSettings": {
      "companyName": "Example File Transfer",
      "theme": "light"
    },
    "complexPasswords": true,
    "customSignature": "Please consider the planet before printing this email",
    "emailContent": "Greetings, ExampleUser!  Your account is ready for you to start transferring files right now. Here'\''s your link to set up your account [[setpassword]]  Henceforth, you shall be known as [[username]]",
    "emailSubject": "Welcome to the Example Account",
    "externalDomain": "https://example.com/files",
    "quota": {
      "noticeEnabled": true,
      "noticeThreshold": 90,
      "transactionsNoticeEnabled": true,
      "transactionsNoticeThreshold": 80
    },
    "secureOnly": true,
    "showReferralLinks": false
  }'
```

`PATCH /account`

Update account settings, such as welcome email content, IP address restrictions, webhooks settings and secure password requirements.

**Notes**

- You must have [admin-level access](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to change account settings.

> Body parameter

```json
{
  "accountOnboarding": true,
  "allowedIpRanges": [
    {
      "ipEnd": "67.208.64.254",
      "ipStart": "67.208.64.228"
    }
  ],
  "brandingSettings": {
    "companyName": "Example File Transfer",
    "theme": "light"
  },
  "complexPasswords": true,
  "customSignature": "Please consider the planet before printing this email",
  "emailContent": "Greetings, ExampleUser!  Your account is ready for you to start transferring files right now. Here's your link to set up your account [[setpassword]]  Henceforth, you shall be known as [[username]]",
  "emailSubject": "Welcome to the Example Account",
  "externalDomain": "https://example.com/files",
  "quota": {
    "noticeEnabled": true,
    "noticeThreshold": 90,
    "transactionsNoticeEnabled": true,
    "transactionsNoticeThreshold": 80
  },
  "secureOnly": true,
  "showReferralLinks": false
}
```

<h3 id="update-account-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|body|body|object|false|Update Account Settings|
|» accountOnboarding|body|boolean|false|Whether extra help popups can be enabled for users in the web file manager.|
|» allowedIpRanges|body|[object]|false|IP Address Ranges for restricting account access|
|» » ipEnd|body|string(ipv4)|false|none|
|» » ipStart|body|string(ipv4)|false|none|
|» brandingSettings|body|object|false|none|
|» » companyName|body|string|false|Custom company name to include in copyright and title bar.|
|» » customEmail|body|string(email)|false|Address to use as sender of email messages generated by ExaVault|
|» » theme|body|string|false|Color scheme for web file manager. Valid options are **default**, **light** and **dark**|
|» complexPasswords|body|boolean|false|Whether to require complex passwords for all passwords.|
|» customSignature|body|string|false|Signature to be automatically added to the bottom of emails generated by the account.|
|» emailContent|body|string|false|Content of welcome email template.|
|» emailSubject|body|string|false|Subject line for welcome emails|
|» externalDomain|body|string|false|Custom address used for web file manager. Not available for all account types.|
|» quota|body|object|false|none|
|» » noticeEnabled|body|boolean|false|Whether the system should email the account owner if the account storage exceeds the noticeThreshold value. Storage notice emails are sent no mo once per day.|
|» » noticeThreshold|body|integer|false|Percent of account storage that would trigger a notice email. Must be a whole number between 70 and 100 (inclusive).|
|» » transactionsNoticeEnabled|body|boolean|false|Whether the system should email the account owner if the daily transaction usage exceeds the transactionsNoticeThreshold value. Transaction notice emails are sent no more than once per day.|
|» » transactionsNoticeThreshold|body|integer|false|Percent of daily transaction usage that would trigger a notice email. Must be a whole number between 70 and 100 (inclusive).|
|» secureOnly|body|boolean|false|Whether unencrypted FTP connections should be denied for the account.|
|» showReferralLinks|body|boolean|false|Whether to display links for others to sign up on share views and invitation emails|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "accountName": "exampleaccount",
      "accountOnboarding": true,
      "allowedIp": [],
      "branding": true,
      "brandingSettings": {
        "accountName": "exampleaccount",
        "companyName": "Example Company",
        "created": "2021-01-14T11:06:52-08:00",
        "customEmail": "custom@example.com",
        "logo": "examplelogo.png",
        "logoExt": "png",
        "modified": "2021-02-08T10:35:15-08:00",
        "theme": "default",
        "verifiedDomain": null,
        "verifiedDomainId": null,
        "verifiedDomainValid": false
      },
      "clientId": 1,
      "complexPasswords": false,
      "created": "2019-05-30T20:48:57Z",
      "customDomain": false,
      "customSignature": null,
      "externalDomains": null,
      "maxUsers": 5,
      "modified": "2019-08-27T01:03:41Z",
      "quota": {
        "bandwidthLimit": 9223372036854776000,
        "bandwidthUsed": 0,
        "diskLimit": 107374182400,
        "diskUsed": 4770252339,
        "noticeEnabled": true,
        "noticeThreshold": 90,
        "transactionsLimit": 120000,
        "transactionsNoticeEnabled": true,
        "transactionsNoticeThreshold": 80
      },
      "secureOnly": false,
      "showReferralLinks": true,
      "status": 1,
      "userCount": 4,
      "welcomeEmailContent": "\"Great news, your new account is ready!\\n\\nFor your records, we've listed information you'll use to log in below:\\n\\nFTP Server: [[ftpserver]]\\n\\nUsername (Web and FTP access): [[username]]\\n\\n[[setpassword]]\"\n",
      "welcomeEmailSubject": "ExaVault File Sharing Account"
    },
    "id": 6,
    "relationships": {
      "masterUser": {
        "data": {
          "id": 1,
          "type": "user"
        }
      }
    },
    "type": "account"
  },
  "included": [],
  "responseStatus": 200
}
```

<h3 id="update-account-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[AccountResponse](#schemaaccountresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="exavault-ssh-keys">SSH Keys</h1>

THe SSH Keys APIs allow you to manage SSH keys for users in your account. You can upload the contents of a public key for a user, get information for keys which are already defined, and remove a key from a user.

## Get metadata for a list of SSH Keys

<a id="opIdgetSSHKeysList"></a>

> Code samples

```bash
curl https://example.com/ssh-keys \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /ssh-keys`

Returns a list of SSH Keys within the account. Can be filtered for a single user.

<h3 id="get-metadata-for-a-list-of-ssh-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|userId|query|string|false| Only return results for the given user ID. This is not the username, but the numeric ID of the user.|
|limit|query|integer|false| Limits the results by the given number. Cannot be set higher than 100.|
|offset|query|integer|false| Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "created": "1970-01-01T00:00:00Z",
        "fingerprint": "string",
        "lastLogin": "1970-01-01T00:00:00Z"
      },
      "id": 655621,
      "relationships": {
        "ownerUser": {
          "data": {
            "id": 0,
            "type": "string"
          }
        }
      },
      "type": "sshKey"
    }
  ],
  "included": [
    {
      "attributes": {
        "accessTimestamp": "2011-03-21T00:18:56-07:00",
        "accountName": "exampleaccount",
        "created": "2018-07-27T15:43:55-07:00",
        "email": "example@exavault.mail",
        "expiration": "2020-06-30T13:33:30-07:00",
        "firstLogin": false,
        "homePath": "/",
        "locked": false,
        "modified": "2018-07-29T15:43:55-07:00",
        "nickname": "exampleuser",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Chicago",
        "username": "exampleuser"
      },
      "id": 655621,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 0,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 0,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 2
}
```

<h3 id="get-metadata-for-a-list-of-ssh-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[SSHKeyCollectionResponse](#schemasshkeycollectionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new SSH Key

<a id="opIdaddSSHKey"></a>

> Code samples

```bash
curl https://example.com/ssh-keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "publicKey": "string",
    "userId": 0
  }'
```

`POST /ssh-keys`

Create a new SSH Key for a user. Provide the Public Key as formatted from the ssh-keygen command (openssh format or RFC-4716 format).

If you'd prefer to let us generate your key automatically, you can log in to your account via the web portal and set up new keys via the SSH Keys page. 

> Body parameter

```json
{
  "publicKey": "string",
  "userId": 0
}
```

<h3 id="create-a-new-ssh-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|body|body|object|false|none|
|» publicKey|body|string|true|Public Key to provide ExaVault. You can provide the Public Key as formatted from the ssh-keygen command or a standard rfc-4716 format. |
|» userId|body|integer|true|ID of the user to assign the new key to. |

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "created": "1970-01-01T00:00:00Z",
      "fingerprint": "string",
      "lastLogin": "1970-01-01T00:00:00Z"
    },
    "id": 655621,
    "relationships": {
      "ownerUser": {
        "data": {
          "id": 0,
          "type": "string"
        }
      }
    },
    "type": "sshKey"
  },
  "included": [
    {
      "attributes": {
        "accessTimestamp": "2011-03-21T00:18:56-07:00",
        "accountName": "exampleaccount",
        "created": "2018-07-27T15:43:55-07:00",
        "email": "example@exavault.mail",
        "expiration": "2020-06-30T13:33:30-07:00",
        "firstLogin": false,
        "homePath": "/",
        "locked": false,
        "modified": "2018-07-29T15:43:55-07:00",
        "nickname": "exampleuser",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Chicago",
        "username": "exampleuser"
      },
      "id": 655621,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 0,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 0,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "responseStatus": 0
}
```

<h3 id="create-a-new-ssh-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[SSHKeyResponse](#schemasshkeyresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get metadata for an SSH Key

<a id="opIdgetSSHKey"></a>

> Code samples

```bash
curl https://example.com/ssh-keys/string \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /ssh-keys/{id}`

Return the information for a single SSH Key

<h3 id="get-metadata-for-an-ssh-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "created": "1970-01-01T00:00:00Z",
      "fingerprint": "string",
      "lastLogin": "1970-01-01T00:00:00Z"
    },
    "id": 655621,
    "relationships": {
      "ownerUser": {
        "data": {
          "id": 0,
          "type": "string"
        }
      }
    },
    "type": "sshKey"
  },
  "included": [
    {
      "attributes": {
        "accessTimestamp": "2011-03-21T00:18:56-07:00",
        "accountName": "exampleaccount",
        "created": "2018-07-27T15:43:55-07:00",
        "email": "example@exavault.mail",
        "expiration": "2020-06-30T13:33:30-07:00",
        "firstLogin": false,
        "homePath": "/",
        "locked": false,
        "modified": "2018-07-29T15:43:55-07:00",
        "nickname": "exampleuser",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Chicago",
        "username": "exampleuser"
      },
      "id": 655621,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 0,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 0,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "responseStatus": 0
}
```

<h3 id="get-metadata-for-an-ssh-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[SSHKeyResponse](#schemasshkeyresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an SSH Key

<a id="opIddeleteSSHKey"></a>

> Code samples

```bash
curl https://example.com/ssh-keys/string \
  -X DELETE \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`DELETE /ssh-keys/{id}`

Delete the specified SSH key. This will not delete or deactivate the user tied to the key.

<h3 id="delete-an-ssh-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|string|true|none|

<h3 id="delete-an-ssh-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="exavault-form">Form</h1>

The forms APIs allow you to manage the inputs and data submitted through receive folder forms.

## Get receive folder form settings

<a id="opIdgetFormByShareHash"></a>

> Code samples

```bash
curl 'https://example.com/forms?shareHash=string' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: string'
```

`GET /forms`

Get the information for the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders) by its shareHash. The form details will return all the input field settings and the CSS for the form.

Use the `include` parameter (with the value **share**) to also get the details of the associated receive folder.

**Note**

- If you prefer to find a form by its ID, you can use the [GET /forms/{id}](#operation/getFormById) endpoint instead. 


<h3 id="get-receive-folder-form-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access Token required to make the API call.|
|shareHash|query|string|true|Share hash to retrieve the form for.|
|include|query|string|false|Related record types to include in the response. Valid option is **share**|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|share|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "cssStyles": "#ev-widget-form {\n  /*Change this to change the font. Remove to use your website font*/\n  font-family: Helvetica Neue, sans-serif;\n  /*Makes the form the same width as your website */\n  margin: 0 -2%;\n}\n#ev-widget-form label{\n  width: 100%;\n}\n#ev-widget-form input,\n#ev-widget-form textarea {\n  /*Changes color and thickness of borders on form elements */\n  border: 2px solid #ccc;\n  /*Changes spacing inside the form elements (top/bottom and left/right */\n  padding: 5px 5px;\n  /* Changes how far away the inputs are from their label */\n  margin-top: 2px;\n}\n\n#ev-widget-form input:focus,\n#ev-widget-form textarea:focus {\n  /*Changes the color of the form elements when they are clicked in to */\n  border: 2px solid #b2cf88;\n  /*Removes glow effect from form elements that are clicked in to */\n  outline: none;\n}\n\n#ev-widget-form label {\n  font-size: 14px;\n  font-weight: bold;\n  /*Changes color of labels */\n  color: #232323\n}\n\n#ev-widget-form .ev-form-element-description {\n  /*Changes size of descriptions */\n  font-size: 12px;\n  /*Changes color of descriptions */\n  color: #777;\n  /* Changes how far away the descriptions are from their input */\n  margin-top: 2px;\n}\n\n#ev-widget-form textarea {\n  /* Makes textareas (multiline inputs) a taller. */\n  min-height: 90px;\n}",
      "elements": [
        {
          "id": 2329,
          "name": "Your Name",
          "order": 0,
          "settings": {
            "description": null,
            "isRequired": false,
            "senderEmail": false,
            "useAsFolderName": false,
            "width": 1
          },
          "type": "name"
        },
        {
          "id": 2331,
          "name": "Email Address",
          "order": 1,
          "settings": {
            "description": null,
            "isRequired": true,
            "senderEmail": false,
            "useAsFolderName": true,
            "width": 1
          },
          "type": "email"
        },
        {
          "id": 2333,
          "name": "Subject",
          "order": 2,
          "settings": {
            "description": null,
            "isRequired": true,
            "senderEmail": false,
            "useAsFolderName": false,
            "width": 1
          },
          "type": "text"
        },
        {
          "id": 2335,
          "name": "Message",
          "order": 3,
          "settings": {
            "description": null,
            "isRequired": false,
            "senderEmail": false,
            "useAsFolderName": false,
            "width": 1
          },
          "type": "textarea"
        },
        {
          "id": 2337,
          "name": "Upload Area",
          "order": 4,
          "settings": {
            "description": null,
            "isRequired": false,
            "senderEmail": false,
            "useAsFolderName": false,
            "width": 1
          },
          "type": "upload_area"
        }
      ],
      "formDescription": null,
      "submitButtonText": "Send Files",
      "successMessage": "Your files were uploaded"
    },
    "id": 459,
    "relationships": {
      "share": {
        "data": {
          "id": 1581,
          "type": "share"
        }
      }
    },
    "type": "form"
  },
  "included": [
    {
      "attributes": {
        "accessDescription": "Receive folder",
        "accessMode": {
          "delete": false,
          "download": false,
          "modify": false,
          "upload": true
        },
        "assets": [
          "HomeTest"
        ],
        "created": "2020-07-30T06:24:33-07:00",
        "embed": false,
        "expiration": null,
        "expired": false,
        "fileDropCreateFolders": false,
        "formId": 459,
        "hasNotification": true,
        "hasPassword": false,
        "hash": "1a6-eel4wett",
        "inherited": null,
        "messages": [],
        "modified": "2020-07-30T06:27:12-07:00",
        "name": "HomeTest",
        "ownerHash": "1a6-eel4wegt-9t0xc3jb",
        "paths": [
          "/HomeTest"
        ],
        "public": true,
        "recipients": [],
        "requireEmail": false,
        "resent": null,
        "status": 1,
        "trackingStatus": null,
        "type": "receive"
      },
      "id": 1581,
      "type": "share"
    }
  ],
  "responseStatus": 200
}
```

<h3 id="get-receive-folder-form-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FormResponse](#schemaformresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get form data entries for a receive

<a id="opIdgetFormEntries"></a>

> Code samples

```bash
curl https://example.com/forms/entries/0 \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /forms/entries/{id}`

Returns the form data entries for a specific form for a receive. Optional parameters can be included in the call to manage larger data sets.


<h3 id="get-form-data-entries-for-a-receive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call. |
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer|true|ID of the form to retrieve entries for.|
|limit|query|integer|false|Limit of records to be returned (for pagination)|
|offset|query|integer|false|Current offset of records (for pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "created": "2020-09-15T05:36:41-07:00",
        "fields": [
          {
            "name": "Email Address",
            "order": 1,
            "value": "test451@example.com"
          }
        ],
        "modified": "2020-09-16T05:36:44-07:00",
        "paths": [
          "/example/test451@example.com/1.csv",
          "/example/test451@example.com/2.csv"
        ],
        "status": "completed"
      },
      "id": 320721,
      "type": "formEntry"
    },
    {
      "attributes": {
        "created": "2020-09-16T05:36:41-07:00",
        "fields": [
          {
            "name": "Email Address",
            "order": 1,
            "value": "test455@example.com"
          }
        ],
        "modified": "2020-09-17T05:36:44-07:00",
        "paths": [
          "/example/test455@example.com/1.csv",
          "/example/test455@example.com/2.csv"
        ],
        "status": "completed"
      },
      "id": 32021,
      "type": "formEntry"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 2
}
```

<h3 id="get-form-data-entries-for-a-receive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[FormEntryResponse](#schemaformentryresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a receive form submission

<a id="opIddeleteFormMessageById"></a>

> Code samples

```bash
curl https://example.com/forms/entries/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`DELETE /forms/entries/{id}`

Deletes a form submission entry, which represents one time that a visitor filled out the form and uploaded files. This deletes only the record of the submission (the date, the values entered in the form and the names of the files uploaded by the visitor).The share and any associated file resources will not be deleted by this. 

**Notes**:

- Use the [GET /form/entries/{formId}](#operation/getFormMessageById) to list the submissions and obtain the ID of the entry you want to delete
- You must have the [DeleteFormData permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) in order to use this operation
- It is not possible to un-delete data that is removed in this way


<h3 id="delete-a-receive-form-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call. |
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer(int64)|true|ID of the entry to be deleted data for|

> Example responses

> 200 Response

```json
{
  "data": [],
  "responseStatus": 200
}
```

<h3 id="delete-a-receive-form-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[EmptyResponse](#schemaemptyresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get receive folder form by Id

<a id="opIdgetFormById"></a>

> Code samples

```bash
curl https://example.com/forms/0 \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: string'
```

`GET /forms/{id}`

Returns the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders). The form details will return all the input fields and their settings. 

Use the `include` parameter (with the value **share**) to also retrieve the details of the associated receive folder. 

**Note**

If you prefer to find a form by its shareHash, you can use the [GET /forms](#operation/getFormByShareHash) endpoint instead. 


<h3 id="get-receive-folder-form-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access Token required to make the API call.|
|include|query|string|false|Enter "**share**" to get information about associated receive folder.|
|id|path|integer(int32)|true|Form unique ID number.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "cssStyles": "#ev-widget-form {\n  /*Change this to change the font. Remove to use your website font*/\n  font-family: Helvetica Neue, sans-serif;\n  /*Makes the form the same width as your website */\n  margin: 0 -2%;\n}\n#ev-widget-form label{\n  width: 100%;\n}\n#ev-widget-form input,\n#ev-widget-form textarea {\n  /*Changes color and thickness of borders on form elements */\n  border: 2px solid #ccc;\n  /*Changes spacing inside the form elements (top/bottom and left/right */\n  padding: 5px 5px;\n  /* Changes how far away the inputs are from their label */\n  margin-top: 2px;\n}\n\n#ev-widget-form input:focus,\n#ev-widget-form textarea:focus {\n  /*Changes the color of the form elements when they are clicked in to */\n  border: 2px solid #b2cf88;\n  /*Removes glow effect from form elements that are clicked in to */\n  outline: none;\n}\n\n#ev-widget-form label {\n  font-size: 14px;\n  font-weight: bold;\n  /*Changes color of labels */\n  color: #232323\n}\n\n#ev-widget-form .ev-form-element-description {\n  /*Changes size of descriptions */\n  font-size: 12px;\n  /*Changes color of descriptions */\n  color: #777;\n  /* Changes how far away the descriptions are from their input */\n  margin-top: 2px;\n}\n\n#ev-widget-form textarea {\n  /* Makes textareas (multiline inputs) a taller. */\n  min-height: 90px;\n}",
      "elements": [
        {
          "id": 2329,
          "name": "Your Name",
          "order": 0,
          "settings": {
            "description": null,
            "isRequired": false,
            "senderEmail": false,
            "useAsFolderName": false,
            "width": 1
          },
          "type": "name"
        },
        {
          "id": 2331,
          "name": "Email Address",
          "order": 1,
          "settings": {
            "description": null,
            "isRequired": true,
            "senderEmail": false,
            "useAsFolderName": true,
            "width": 1
          },
          "type": "email"
        },
        {
          "id": 2333,
          "name": "Subject",
          "order": 2,
          "settings": {
            "description": null,
            "isRequired": true,
            "senderEmail": false,
            "useAsFolderName": false,
            "width": 1
          },
          "type": "text"
        },
        {
          "id": 2335,
          "name": "Message",
          "order": 3,
          "settings": {
            "description": null,
            "isRequired": false,
            "senderEmail": false,
            "useAsFolderName": false,
            "width": 1
          },
          "type": "textarea"
        },
        {
          "id": 2337,
          "name": "Upload Area",
          "order": 4,
          "settings": {
            "description": null,
            "isRequired": false,
            "senderEmail": false,
            "useAsFolderName": false,
            "width": 1
          },
          "type": "upload_area"
        }
      ],
      "formDescription": "test test",
      "submitButtonText": "Send Files",
      "successMessage": "Your files were uploaded"
    },
    "id": 459,
    "relationships": {
      "share": {
        "data": {
          "id": 1581,
          "type": "share"
        }
      }
    },
    "type": "form"
  },
  "included": [
    {
      "attributes": {
        "accessDescription": "Receive folder",
        "accessMode": {
          "delete": false,
          "download": false,
          "modify": false,
          "upload": true
        },
        "assets": [
          "HomeTest"
        ],
        "created": "2020-07-30T06:24:33-07:00",
        "embed": false,
        "expiration": null,
        "expired": false,
        "fileDropCreateFolders": false,
        "formId": 459,
        "hasNotification": true,
        "hasPassword": false,
        "hash": "1a6-eel4nxrt",
        "inherited": null,
        "messages": [],
        "modified": "2020-07-30T07:39:42-07:00",
        "name": "HomeTest",
        "ownerHash": "1a6-eel4nxrt-9t0xc3jb",
        "paths": [
          "/HomeTest"
        ],
        "public": true,
        "recipients": [],
        "requireEmail": false,
        "resent": null,
        "status": 1,
        "trackingStatus": null,
        "type": "receive"
      },
      "id": 1581,
      "type": "share"
    }
  ],
  "responseStatus": 200
}
```

<h3 id="get-receive-folder-form-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FormResponse](#schemaformresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates a form with given parameters

<a id="opIdupdateFormById"></a>

> Code samples

```bash
curl https://example.com/forms/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "elements": [
      {
        "name": "Name",
        "order": 0,
        "settings": {
          "description": "this is a description test",
          "isRequired": true,
          "senderEmail": false,
          "useAsFolderName": false,
          "width": 1
        },
        "type": "name"
      },
      {
        "id": 2331,
        "name": "Email Address",
        "order": 1,
        "settings": {
          "description": null,
          "isRequired": true,
          "senderEmail": false,
          "useAsFolderName": false,
          "width": 1
        },
        "type": "email"
      },
      {
        "id": 2333,
        "name": "Subject",
        "order": 2,
        "settings": {
          "description": null,
          "isRequired": true,
          "senderEmail": false,
          "useAsFolderName": false,
          "width": 1
        },
        "type": "text"
      },
      {
        "id": 2335,
        "name": "Message",
        "order": 3,
        "settings": {
          "description": null,
          "isRequired": false,
          "senderEmail": false,
          "useAsFolderName": false,
          "width": 1
        },
        "type": "textarea"
      },
      {
        "id": 2337,
        "name": "Upload Area",
        "order": 4,
        "settings": {
          "description": null,
          "isRequired": false,
          "senderEmail": false,
          "useAsFolderName": false,
          "width": 1
        },
        "type": "upload_area"
      }
    ],
    "formDescription": "hello world",
    "submitButtonText": "goodbye world",
    "successMessage": "thank you"
  }'
```

`PATCH /forms/{id}`

Add, update, or delete a form's parameters. This will alter how your users/customers will see and interact with the form when sending you files. 

**Notes**

*This call will **replace** your current form in its entirety.* If you want to keep any existing elements unchanged, be sure to submit the call with an element's current settings to preserve them.                          

> Body parameter

```json
{
  "elements": [
    {
      "name": "Name",
      "order": 0,
      "settings": {
        "description": "this is a description test",
        "isRequired": true,
        "senderEmail": false,
        "useAsFolderName": false,
        "width": 1
      },
      "type": "name"
    },
    {
      "id": 2331,
      "name": "Email Address",
      "order": 1,
      "settings": {
        "description": null,
        "isRequired": true,
        "senderEmail": false,
        "useAsFolderName": false,
        "width": 1
      },
      "type": "email"
    },
    {
      "id": 2333,
      "name": "Subject",
      "order": 2,
      "settings": {
        "description": null,
        "isRequired": true,
        "senderEmail": false,
        "useAsFolderName": false,
        "width": 1
      },
      "type": "text"
    },
    {
      "id": 2335,
      "name": "Message",
      "order": 3,
      "settings": {
        "description": null,
        "isRequired": false,
        "senderEmail": false,
        "useAsFolderName": false,
        "width": 1
      },
      "type": "textarea"
    },
    {
      "id": 2337,
      "name": "Upload Area",
      "order": 4,
      "settings": {
        "description": null,
        "isRequired": false,
        "senderEmail": false,
        "useAsFolderName": false,
        "width": 1
      },
      "type": "upload_area"
    }
  ],
  "formDescription": "hello world",
  "submitButtonText": "goodbye world",
  "successMessage": "thank you"
}
```

<h3 id="updates-a-form-with-given-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer(int32)|true|Form unique ID number.|
|body|body|object|false|none|
|» cssStyles|body|string|false|none|
|» elements|body|[object]|false|none|
|» » id|body|integer|false|ID of the form element. If you're adding a new element to the form, do not include this field.|
|» » name|body|string|false|Name of the form element.|
|» » order|body|integer|false|The order the fields will be displayed to the recipient. Starts at 0. |
|» » settings|body|object|false|none|
|» » » isRequired|body|boolean|false|True is the form element is required for submission. |
|» » » senderEmail|body|boolean|false|none|
|» » » useAsFolderName|body|boolean|false|True if the submitted response should be used as the name for the new folder. |
|» » type|body|string|false|Type of form field to use.|
|» formDescription|body|string|false|Set a description for the form that will be visible to recipients. |
|» submitButtonText|body|string|false|Text to be displayed on the submission button.|
|» successMessage|body|string|false|Text to be displayed when a recipient has submitted the form. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|name|
|» » type|email|
|» » type|text|
|» » type|textarea|
|» » type|upload_area|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "cssStyles": null,
      "elements": [
        {
          "id": 2351,
          "name": "rename test",
          "order": 0,
          "settings": {
            "description": "this is a description test",
            "isRequired": "true",
            "senderEmail": false,
            "useAsFolderName": "false",
            "width": "1"
          },
          "type": "name"
        },
        {
          "id": 2331,
          "name": "Email Address",
          "order": 1,
          "settings": {
            "description": null,
            "isRequired": true,
            "senderEmail": false,
            "useAsFolderName": false,
            "width": 1
          },
          "type": "email"
        },
        {
          "id": 2333,
          "name": "Subject",
          "order": 2,
          "settings": {
            "description": null,
            "isRequired": true,
            "senderEmail": false,
            "useAsFolderName": false,
            "width": 1
          },
          "type": "text"
        },
        {
          "id": 2335,
          "name": "Message",
          "order": 3,
          "settings": {
            "description": null,
            "isRequired": false,
            "senderEmail": false,
            "useAsFolderName": false,
            "width": 1
          },
          "type": "textarea"
        },
        {
          "id": 2337,
          "name": "Upload Area",
          "order": 4,
          "settings": {
            "description": null,
            "isRequired": false,
            "senderEmail": false,
            "useAsFolderName": false,
            "width": 1
          },
          "type": "upload_area"
        }
      ],
      "formDescription": "hello world",
      "submitButtonText": "goodbye world",
      "successMessage": "thank you"
    },
    "id": 459,
    "relationships": {
      "share": {
        "data": {
          "id": 1581,
          "type": "share"
        }
      }
    },
    "type": "form"
  },
  "included": [],
  "responseStatus": 200
}
```

<h3 id="updates-a-form-with-given-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[FormResponse](#schemaformresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="exavault-recipients">Recipients</h1>

The recipients APIs allow to retrieve, delete, or resend invitations for recipients of shared folders.

## Resend invitations to share recipients

<a id="opIdresendInvitationsForShare"></a>

> Code samples

```bash
curl https://example.com/recipients/shares/invites/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "recipientId": 0
  }'
```

`POST /recipients/shares/invites/{shareId}`

Resend invitations to one or all recipients attached to specified share. The most recent message that was sent for the share will be re-used for this email.

You can use [GET /shares/{id}](#operation/getShareById) to view the recipient list and message history for a share. Use [PATCH /shares/{id}](#operation/updateShareById) to add or remove recipients.

> Body parameter

```json
{
  "recipientId": 0
}
```

<h3 id="resend-invitations-to-share-recipients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|shareId|path|integer|true|ID of the share to resend invites for.|
|body|body|object|false|none|
|» recipientId|body|integer(int32)|false|ID number of recipient to send a new invitation to.|

> Example responses

> 201 Response

```json
{
  "data": [
    "test+3@example.com",
    "test+4@example.com",
    "test+5@example.com"
  ],
  "responseStatus": 201
}
```

<h3 id="resend-invitations-to-share-recipients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|[ShareRecipientsResponse](#schemasharerecipientsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="exavault-email">Email</h1>

The emails APIs allow you to generate welcome emails for account users and referral emails.

## Send referral email to a given address

<a id="opIdsendReferralEmail"></a>

> Code samples

```bash
curl https://example.com/email/referral \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "emails": [
      "user@example.com"
    ],
    "message": "I use ExaVault for secure file sending, and so should you. Follow my link to sign up for a trial."
  }'
```

`POST /email/referral`

Invite a friend to sign up for a free trial of ExaVault. Send a [referral](/lp/referafriend/) email to an email address. If the recipient signs up for ExaVault, we'll apply a credit to your account for the referral. 

> Body parameter

```json
{
  "emails": [
    "user@example.com"
  ],
  "message": "I use ExaVault for secure file sending, and so should you. Follow my link to sign up for a trial."
}
```

<h3 id="send-referral-email-to-a-given-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|body|body|object|false|none|
|» emails|body|[string(email)]|true|none|
|» message|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "data": [],
  "responseStatus": 201
}
```

<h3 id="send-referral-email-to-a-given-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Operation|[EmptyResponse](#schemaemptyresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Resend welcome email to specific user

<a id="opIdsendWelcomeEmail"></a>

> Code samples

```bash
curl https://example.com/email/welcome/exampleuser \
  -X POST \
  -H 'Accept: application/json' \
  -H 'ev-api-key: exampleaccount-zwSuWUZ8S38h33qPS8v0s' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`POST /email/welcome/{username}`

Send a welcome email to a user. The contents of the welcome email can be set by [PATCH /accounts](#operation/updateAccount).

<h3 id="resend-welcome-email-to-specific-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API Key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|username|path|string|true|A username to send the welcome email to.|

> Example responses

> 201 Response

```json
{
  "data": [],
  "responseStatus": 201
}
```

<h3 id="resend-welcome-email-to-specific-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|[EmptyResponse](#schemaemptyresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="exavault-webhooks">Webhooks</h1>

## Get Webhooks List

<a id="opIdgetWehooksList"></a>

> Code samples

```bash
curl https://example.com/webhooks \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /webhooks`

Returns a list of Webhooks. By default, this will return metadata on all Webhooks within the account. 

<h3 id="get-webhooks-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|include|query|string|false|List of related record types to include. Valid options are `owningAccount` and `resource`|
|offset|query|integer|false|Records to skip before returning results.|
|limit|query|integer|false|Limit of the records list|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "created": "2021-03-04T22:22:00-08:00",
        "endpointUrl": "https://example.com/webhook",
        "failed": true,
        "modified": "2021-03-04T22:23:03-08:00",
        "responseVersion": "v2",
        "triggers": {
          "resources": {
            "compress": true,
            "copy": true,
            "createFolder": true,
            "delete": true,
            "download": true,
            "extract": true,
            "move": true,
            "rename": true,
            "upload": true
          },
          "shares": {
            "formSubmit": true
          }
        },
        "verificationToken": "8df8200f7dee90ba4a41abe39c858c6c"
      },
      "id": 0,
      "relationships": {
        "ownerAccount": {
          "data": {
            "id": 23422,
            "type": "account"
          }
        },
        "resource": {
          "data": {
            "id": 134122,
            "type": "resource"
          }
        }
      },
      "type": "webhook"
    }
  ],
  "included": [
    {
      "attributes": {
        "accountName": "string",
        "accountOnboarding": false,
        "allowedIp": [
          {
            "ipEnd": "192.30.24.5",
            "ipStart": "192.30.23.2"
          }
        ],
        "branding": true,
        "brandingSettings": {
          "companyName": null,
          "customEmail": "custom@example.com",
          "logo": "examplelogo.png",
          "logoExt": "png",
          "theme": "default",
          "verifiedDomain": "string",
          "verifiedDomainId": "string",
          "verifiedDomainValid": true
        },
        "clientId": 1,
        "complexPasswords": false,
        "created": "2017-01-12T09:06:21Z",
        "customDomain": true,
        "customSignature": null,
        "externalDomains": [],
        "maxUsers": 1000,
        "modified": "2017-06-03T20:42:05Z",
        "planDetails": {
          "apiKeys": 0,
          "apiTokens": 0,
          "colorSchema": true,
          "customDomain": true,
          "customName": true,
          "directLinks": true,
          "ipWhitelist": true,
          "sharingOptions": [
            "string"
          ],
          "sshKeys": 0,
          "storageAddOn": 0,
          "unlimitedUsers": true,
          "userExpiration": true,
          "userImport": true,
          "webhookOptions": {
            "amount": 0,
            "includeTriggers": "string",
            "restrictionTypes": [
              "string"
            ]
          }
        },
        "quota": {
          "bandwidthLimit": 0,
          "bandwidthUsed": 0,
          "diskLimit": 375809638400,
          "diskUsed": 1225352192,
          "noticeEnabled": true,
          "noticeThreshold": 80,
          "transactionsLimit": 0,
          "transactionsNoticeEnabled": true,
          "transactionsNoticeThreshold": 0
        },
        "secureOnly": false,
        "showReferralLinks": true,
        "status": 1,
        "userCount": 3,
        "welcomeEmailContent": "Welcome to your new account!",
        "welcomeEmailSubject": "ExaVault File Sharing Account"
      },
      "id": 13758,
      "relationships": {
        "masterUser": {
          "data": {
            "id": 0,
            "type": "user"
          }
        }
      },
      "type": "account"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 2
}
```

<h3 id="get-webhooks-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[WebhookCollectionResponse](#schemawebhookcollectionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Add A New Webhook

<a id="opIdaddWebhook"></a>

> Code samples

```bash
curl https://example.com/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "endpointUrl": "https://example.com/webhook",
    "resource": "/uploads-folder",
    "responseVersion": "v2",
    "triggers": {
      "resources": {
        "compress": true,
        "copy": true,
        "createFolder": true,
        "delete": true,
        "download": true,
        "extract": true,
        "move": true,
        "rename": true,
        "upload": true
      },
      "shares": {
        "formSubmit": true
      }
    }
  }'
```

`POST /webhooks`

Create a new Webhook on your account. Creating a Webhook will require an endpoint URL, a path, what events should trigger a webhook, and what request version to use. 

> Body parameter

```json
{
  "endpointUrl": "https://example.com/webhook",
  "resource": "/uploads-folder",
  "responseVersion": "v2",
  "triggers": {
    "resources": {
      "compress": true,
      "copy": true,
      "createFolder": true,
      "delete": true,
      "download": true,
      "extract": true,
      "move": true,
      "rename": true,
      "upload": true
    },
    "shares": {
      "formSubmit": true
    }
  }
}
```

<h3 id="add-a-new-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|body|body|object|false|none|
|» endpointUrl|body|string(uri)|true|The endpoint is where the webhook request will be sent.|
|» resource|body|string|false|Resource identifier for the top folder this webhook is associated with|
|» responseVersion|body|string|false|What version of webhook request should be sent to the endpoint URL when messages are sent|
|» triggers|body|[WebhookTriggers](#schemawebhooktriggers)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» responseVersion|v1|
|» responseVersion|v2|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "created": "2021-03-04T22:22:00-08:00",
      "endpointUrl": "https://example.com/webhook",
      "failed": true,
      "modified": "2021-03-04T22:23:03-08:00",
      "responseVersion": "v2",
      "triggers": {
        "resources": {
          "compress": true,
          "copy": true,
          "createFolder": true,
          "delete": true,
          "download": true,
          "extract": true,
          "move": true,
          "rename": true,
          "upload": true
        },
        "shares": {
          "formSubmit": true
        }
      },
      "verificationToken": "8df8200f7dee90ba4a41abe39c858c6c"
    },
    "id": 0,
    "relationships": {
      "ownerAccount": {
        "data": {
          "id": 5,
          "type": "account"
        }
      },
      "resource": {
        "data": {
          "id": 234232,
          "type": "resource"
        }
      }
    },
    "type": "webhook"
  },
  "included": [],
  "responseStatus": 201
}
```

<h3 id="add-a-new-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[WebhookResponse](#schemawebhookresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Regenerate security token

<a id="opIdregenerateWebhookToken"></a>

> Code samples

```bash
curl https://example.com/webhooks/regenerate-token/string \
  -X POST \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`POST /webhooks/regenerate-token/{id}`

This endpoint will allow you to regenerate the security token for a webhook if you believe it’s been compromised in any way. 

<h3 id="regenerate-security-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|string|true|Webhook ID|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "created": "2021-03-04T22:22:00-08:00",
      "endpointUrl": "https://example.com/webhook",
      "failed": true,
      "modified": "2021-03-04T22:23:03-08:00",
      "responseVersion": "v2",
      "triggers": {
        "resources": {
          "compress": true,
          "copy": true,
          "createFolder": true,
          "delete": true,
          "download": true,
          "extract": true,
          "move": true,
          "rename": true,
          "upload": true
        },
        "shares": {
          "formSubmit": true
        }
      },
      "verificationToken": "771820badeefa22a4a41abe39c858c6c"
    },
    "id": 0,
    "relationships": {
      "ownerAccount": {
        "data": {
          "id": 23422,
          "type": "account"
        }
      },
      "resource": {
        "data": {
          "id": 134122,
          "type": "resource"
        }
      }
    },
    "type": "webhook"
  },
  "included": [],
  "responseStatus": 200
}
```

<h3 id="regenerate-security-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[WebhookResponse](#schemawebhookresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Resend a webhook message

<a id="opIdresendWebhookActivityEntry"></a>

> Code samples

```bash
curl https://example.com/webhooks/resend/string \
  -X POST \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`POST /webhooks/resend/{activityId}`

This endpoint will allow you to resend a webhook that was previously sent. Resent webhooks will send exactly the same as the original webhook with the exception of the “sent” timestamp. Activity IDs can be retrieve from the webhook logs in your account or via GET /activity/webhooks

<h3 id="resend-a-webhook-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|activityId|path|string|true|Webhooks activity entry ID|

> Example responses

> 200 Response

```json
{
  "data": [],
  "responseStatus": 200
}
```

<h3 id="resend-a-webhook-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[EmptyResponse](#schemaemptyresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get info for a webhook

<a id="opIdgetWebhookById"></a>

> Code samples

```bash
curl https://example.com/webhooks/0 \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`GET /webhooks/{id}`

Returns the metadata for a specific webhook. Webhook IDs can be retrieve from GET /webhooks

<h3 id="get-info-for-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|include|query|string|false| Include metadata for related items; `ownerAccount` and/or `resource` |
|id|path|integer|true|Webhook endpoint ID|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "created": "2021-03-04T22:22:00-08:00",
        "endpointUrl": "https://example.com/webhook",
        "failed": true,
        "modified": "2021-03-04T22:23:03-08:00",
        "responseVersion": "v2",
        "triggers": {
          "resources": {
            "compress": true,
            "copy": true,
            "createFolder": true,
            "delete": true,
            "download": true,
            "extract": true,
            "move": true,
            "rename": true,
            "upload": true
          },
          "shares": {
            "formSubmit": true
          }
        },
        "verificationToken": "8df8200f7dee90ba4a41abe39c858c6c"
      },
      "id": 0,
      "relationships": {
        "ownerAccount": {
          "data": {
            "id": 23422,
            "type": "account"
          }
        },
        "resource": {
          "data": {
            "id": 134122,
            "type": "resource"
          }
        }
      },
      "type": "webhook"
    }
  ],
  "included": [
    {
      "attributes": {
        "accountName": "string",
        "accountOnboarding": false,
        "allowedIp": [
          {
            "ipEnd": "192.30.24.5",
            "ipStart": "192.30.23.2"
          }
        ],
        "branding": true,
        "brandingSettings": {
          "companyName": null,
          "customEmail": "custom@example.com",
          "logo": "examplelogo.png",
          "logoExt": "png",
          "theme": "default",
          "verifiedDomain": "string",
          "verifiedDomainId": "string",
          "verifiedDomainValid": true
        },
        "clientId": 1,
        "complexPasswords": false,
        "created": "2017-01-12T09:06:21Z",
        "customDomain": true,
        "customSignature": null,
        "externalDomains": [],
        "maxUsers": 1000,
        "modified": "2017-06-03T20:42:05Z",
        "planDetails": {
          "apiKeys": 0,
          "apiTokens": 0,
          "colorSchema": true,
          "customDomain": true,
          "customName": true,
          "directLinks": true,
          "ipWhitelist": true,
          "sharingOptions": [
            "string"
          ],
          "sshKeys": 0,
          "storageAddOn": 0,
          "unlimitedUsers": true,
          "userExpiration": true,
          "userImport": true,
          "webhookOptions": {
            "amount": 0,
            "includeTriggers": "string",
            "restrictionTypes": [
              "string"
            ]
          }
        },
        "quota": {
          "bandwidthLimit": 0,
          "bandwidthUsed": 0,
          "diskLimit": 375809638400,
          "diskUsed": 1225352192,
          "noticeEnabled": true,
          "noticeThreshold": 80,
          "transactionsLimit": 0,
          "transactionsNoticeEnabled": true,
          "transactionsNoticeThreshold": 0
        },
        "secureOnly": false,
        "showReferralLinks": true,
        "status": 1,
        "userCount": 3,
        "welcomeEmailContent": "Welcome to your new account!",
        "welcomeEmailSubject": "ExaVault File Sharing Account"
      },
      "id": 13758,
      "relationships": {
        "masterUser": {
          "data": {
            "id": 0,
            "type": "user"
          }
        }
      },
      "type": "account"
    }
  ],
  "responseStatus": 200
}
```

<h3 id="get-info-for-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[WebhookResponse](#schemawebhookresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a webhook

<a id="opIddeleteWebhook"></a>

> Code samples

```bash
curl https://example.com/webhooks/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808'
```

`DELETE /webhooks/{id}`

Deleted the specified webhook. This will not affect logs or any resources the webhook is connected to. 

<h3 id="delete-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer|true|Webhook endpoint ID|

> Example responses

> 200 Response

```json
{
  "data": [],
  "responseStatus": 200
}
```

<h3 id="delete-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sucessful operation|[EmptyResponse](#schemaemptyresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a webhook

<a id="opIdupdateWebhook"></a>

> Code samples

```bash
curl https://example.com/webhooks/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'ev-api-key: string' \
  -H 'ev-access-token: 5dc97cc607985eb8da033220e7447647e7915fbf73808' \
  -d '{
    "endpointUrl": "https://example.com/new-endpoint",
    "resource": "/newfolder",
    "responseVersion": "v1",
    "triggers": {
      "resources": {
        "compress": true,
        "copy": true,
        "createFolder": true,
        "delete": true,
        "download": true,
        "extract": true,
        "move": true,
        "rename": true,
        "upload": true
      },
      "shares": {
        "formSubmit": true
      }
    }
  }'
```

`PATCH /webhooks/{id}`

Update the specified webhook. Updated webhooks will take effect immediately and could impact active workflows. Please be certain the webhook is not currently in use prior to updating. 

You only need to send the portions of the webhook configuration you wish to change, rather than the entire webhook object.

> Body parameter

```json
{
  "endpointUrl": "https://example.com/new-endpoint",
  "resource": "/newfolder",
  "responseVersion": "v1",
  "triggers": {
    "resources": {
      "compress": true,
      "copy": true,
      "createFolder": true,
      "delete": true,
      "download": true,
      "extract": true,
      "move": true,
      "rename": true,
      "upload": true
    },
    "shares": {
      "formSubmit": true
    }
  }
}
```

<h3 id="update-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ev-api-key|header|string|true|API key required to make the API call.|
|ev-access-token|header|string|true|Access token required to make the API call.|
|id|path|integer|true|Webhook endpoint ID|
|body|body|object|false|none|
|» endpointUrl|body|string(uri)|false|New endpoint URL to use for the webhook configuration|
|» resource|body|string|false|Resource identifier of the top folder watched by this webhook.|
|» responseVersion|body|string|false|Version of the webhooks message to send to the endpoint|
|» triggers|body|[WebhookTriggers](#schemawebhooktriggers)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» responseVersion|v2|
|» responseVersion|v1|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "created": "2021-03-04T22:22:00-08:00",
      "endpointUrl": "https://example.com/new-endpoint",
      "failed": true,
      "modified": "2021-03-04T22:23:03-08:00",
      "responseVersion": "v1",
      "triggers": {
        "resources": {
          "compress": true,
          "copy": true,
          "createFolder": true,
          "delete": true,
          "download": true,
          "extract": true,
          "move": true,
          "rename": true,
          "upload": true
        },
        "shares": {
          "formSubmit": true
        }
      },
      "verificationToken": "8df822322dee90ba4a41abe39c858c11"
    },
    "id": 0,
    "relationships": {
      "ownerAccount": {
        "data": {
          "id": 23422,
          "type": "account"
        }
      },
      "resource": {
        "data": {
          "id": 433,
          "type": "resource"
        }
      }
    },
    "type": "webhook"
  },
  "included": [],
  "responseStatus": 200
}
```

<h3 id="update-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|[WebhookResponse](#schemawebhookresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccessMode">AccessMode</h2>
<!-- backwards compatibility -->
<a id="schemaaccessmode"></a>
<a id="schema_AccessMode"></a>
<a id="tocSaccessmode"></a>
<a id="tocsaccessmode"></a>

```json
{
  "delete": true,
  "download": true,
  "modify": true,
  "upload": true
}
```

An object defining what a not-logged-in visitor can do with the share contents

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delete|boolean|false|none|Whether share allows visitors to delete contents|
|download|boolean|false|none|Whether share allows visitors to download|
|modify|boolean|false|none|Whether share allows visitors to rename or move contents.|
|upload|boolean|false|none|Whether share allows visitors to upload|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "attributes": {
    "accountName": "string",
    "accountOnboarding": false,
    "allowedIp": [
      {
        "ipEnd": "192.30.24.5",
        "ipStart": "192.30.23.2"
      }
    ],
    "branding": true,
    "brandingSettings": {
      "companyName": null,
      "customEmail": "custom@example.com",
      "logo": "examplelogo.png",
      "logoExt": "png",
      "theme": "default",
      "verifiedDomain": "string",
      "verifiedDomainId": "string",
      "verifiedDomainValid": true
    },
    "clientId": 1,
    "complexPasswords": false,
    "created": "2017-01-12T09:06:21Z",
    "customDomain": true,
    "customSignature": null,
    "externalDomains": [],
    "maxUsers": 1000,
    "modified": "2017-06-03T20:42:05Z",
    "planDetails": {
      "apiKeys": 0,
      "apiTokens": 0,
      "colorSchema": true,
      "customDomain": true,
      "customName": true,
      "directLinks": true,
      "ipWhitelist": true,
      "sharingOptions": [
        "string"
      ],
      "sshKeys": 0,
      "storageAddOn": 0,
      "unlimitedUsers": true,
      "userExpiration": true,
      "userImport": true,
      "webhookOptions": {
        "amount": 0,
        "includeTriggers": "string",
        "restrictionTypes": [
          "string"
        ]
      }
    },
    "quota": {
      "bandwidthLimit": 0,
      "bandwidthUsed": 0,
      "diskLimit": 375809638400,
      "diskUsed": 1225352192,
      "noticeEnabled": true,
      "noticeThreshold": 80,
      "transactionsLimit": 0,
      "transactionsNoticeEnabled": true,
      "transactionsNoticeThreshold": 0
    },
    "secureOnly": false,
    "showReferralLinks": true,
    "status": 1,
    "userCount": 3,
    "welcomeEmailContent": "Welcome to your new account!",
    "welcomeEmailSubject": "ExaVault File Sharing Account"
  },
  "id": 13758,
  "relationships": {
    "masterUser": {
      "data": {
        "id": 0,
        "type": "user"
      }
    }
  },
  "type": "account"
}
```

Object contains all account properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[AccountAttributes](#schemaaccountattributes)|false|none|none|
|id|integer(int32)|false|none|Account ID|
|relationships|object|false|none|none|
|type|string|false|none|Type of item. "account"|

#### Enumerated Values

|Property|Value|
|---|---|
|type|account|

<h2 id="tocS_AccountAttributes">AccountAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaaccountattributes"></a>
<a id="schema_AccountAttributes"></a>
<a id="tocSaccountattributes"></a>
<a id="tocsaccountattributes"></a>

```json
{
  "accountName": "string",
  "accountOnboarding": false,
  "allowedIp": [
    {
      "ipEnd": "192.30.24.5",
      "ipStart": "192.30.23.2"
    }
  ],
  "branding": true,
  "brandingSettings": {
    "companyName": null,
    "customEmail": "custom@example.com",
    "logo": "examplelogo.png",
    "logoExt": "png",
    "theme": "default",
    "verifiedDomain": "string",
    "verifiedDomainId": "string",
    "verifiedDomainValid": true
  },
  "clientId": 1,
  "complexPasswords": false,
  "created": "2017-01-12T09:06:21Z",
  "customDomain": true,
  "customSignature": null,
  "externalDomains": [],
  "maxUsers": 1000,
  "modified": "2017-06-03T20:42:05Z",
  "planDetails": {
    "apiKeys": 0,
    "apiTokens": 0,
    "colorSchema": true,
    "customDomain": true,
    "customName": true,
    "directLinks": true,
    "ipWhitelist": true,
    "sharingOptions": [
      "string"
    ],
    "sshKeys": 0,
    "storageAddOn": 0,
    "unlimitedUsers": true,
    "userExpiration": true,
    "userImport": true,
    "webhookOptions": {
      "amount": 0,
      "includeTriggers": "string",
      "restrictionTypes": [
        "string"
      ]
    }
  },
  "quota": {
    "bandwidthLimit": 0,
    "bandwidthUsed": 0,
    "diskLimit": 375809638400,
    "diskUsed": 1225352192,
    "noticeEnabled": true,
    "noticeThreshold": 80,
    "transactionsLimit": 0,
    "transactionsNoticeEnabled": true,
    "transactionsNoticeThreshold": 0
  },
  "secureOnly": false,
  "showReferralLinks": true,
  "status": 1,
  "userCount": 3,
  "welcomeEmailContent": "Welcome to your new account!",
  "welcomeEmailSubject": "ExaVault File Sharing Account"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|Name of the account|
|accountOnboarding|boolean|false|none|Whether the web application onboarding help is enabled for new users in the account.|
|allowedIp|[object]|false|none|Range of IP addresses allowed to access this account.|
|branding|boolean|false|none|Branding flag. Set to `true` if the account has branding functionality enabled.|
|brandingSettings|[BrandingSettings](#schemabrandingsettings)|false|none|none|
|clientId|integer(int32)|false|none|(ExaVault Use Only) Internal ID of the account in CMS.|
|complexPasswords|boolean|false|none|Flag to indicate whether the account requires complex passwords. Set to `true` to require complex passwords on all users and shares.|
|created|string(date-time)|false|none|Timestamp of account creation.|
|customDomain|boolean|false|none|Custom domain flag. Set to `true` if account type allows custom domain functionality.|
|customSignature|string|false|none|Custom signature for all account emails users or recipients will receive.|
|externalDomains|[string]|false|none|Custom domain used to brand this account.|
|maxUsers|integer(int32)|false|none|Maximum number of users the account can have. This can be increased by contacting ExaVault Support.|
|modified|string(date-time)|false|none|Timestamp of account modification.|
|planDetails|[PlanDetails](#schemaplandetails)|false|none|none|
|quota|[Quota](#schemaquota)|false|none|none|
|secureOnly|boolean|false|none|Flag to indicate whether the account disables connections via insecure protocols (e.g. FTP). Set to `true` to disable all traffic over port 21.|
|showReferralLinks|boolean|false|none|Flag to indicate showing of referrals links in the account. Set to `true` to include marketing messages in share invitations.|
|status|integer(int32)|false|none|Account status flag. A one (1) means the account is active; zero (0) means it is suspended.|
|userCount|integer(int32)|false|none|Current number of users on the account.|
|welcomeEmailContent|string|false|none|Content of welcome email each new user will receive.|
|welcomeEmailSubject|string|false|none|Subject of welcome email each new user will receive.|

#### Enumerated Values

|Property|Value|
|---|---|
|branding|true|
|branding|false|
|customDomain|true|
|customDomain|false|
|status|1|
|status|0|

<h2 id="tocS_AccountResponse">AccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountresponse"></a>
<a id="schema_AccountResponse"></a>
<a id="tocSaccountresponse"></a>
<a id="tocsaccountresponse"></a>

```json
{
  "data": {
    "attributes": {
      "accountName": "string",
      "accountOnboarding": false,
      "allowedIp": [
        {
          "ipEnd": "192.30.24.5",
          "ipStart": "192.30.23.2"
        }
      ],
      "branding": true,
      "brandingSettings": {
        "companyName": null,
        "customEmail": "custom@example.com",
        "logo": "examplelogo.png",
        "logoExt": "png",
        "theme": "default",
        "verifiedDomain": "string",
        "verifiedDomainId": "string",
        "verifiedDomainValid": true
      },
      "clientId": 1,
      "complexPasswords": false,
      "created": "2017-01-12T09:06:21Z",
      "customDomain": true,
      "customSignature": null,
      "externalDomains": [],
      "maxUsers": 1000,
      "modified": "2017-06-03T20:42:05Z",
      "planDetails": {
        "apiKeys": 0,
        "apiTokens": 0,
        "colorSchema": true,
        "customDomain": true,
        "customName": true,
        "directLinks": true,
        "ipWhitelist": true,
        "sharingOptions": [
          "string"
        ],
        "sshKeys": 0,
        "storageAddOn": 0,
        "unlimitedUsers": true,
        "userExpiration": true,
        "userImport": true,
        "webhookOptions": {
          "amount": 0,
          "includeTriggers": "string",
          "restrictionTypes": [
            "string"
          ]
        }
      },
      "quota": {
        "bandwidthLimit": 0,
        "bandwidthUsed": 0,
        "diskLimit": 375809638400,
        "diskUsed": 1225352192,
        "noticeEnabled": true,
        "noticeThreshold": 80,
        "transactionsLimit": 0,
        "transactionsNoticeEnabled": true,
        "transactionsNoticeThreshold": 0
      },
      "secureOnly": false,
      "showReferralLinks": true,
      "status": 1,
      "userCount": 3,
      "welcomeEmailContent": "Welcome to your new account!",
      "welcomeEmailSubject": "ExaVault File Sharing Account"
    },
    "id": 13758,
    "relationships": {
      "masterUser": {
        "data": {
          "id": 0,
          "type": "user"
        }
      }
    },
    "type": "account"
  },
  "included": [
    {
      "attributes": {
        "accessTimestamp": "2011-03-21T00:18:56-07:00",
        "accountName": "exampleaccount",
        "created": "2018-07-27T15:43:55-07:00",
        "email": "example@exavault.mail",
        "expiration": "2020-06-30T13:33:30-07:00",
        "firstLogin": false,
        "homePath": "/",
        "locked": false,
        "modified": "2018-07-29T15:43:55-07:00",
        "nickname": "exampleuser",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Chicago",
        "username": "exampleuser"
      },
      "id": 655621,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 0,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 0,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "responseStatus": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Account](#schemaaccount)|false|none|Object contains all account properties.|
|included|[[User](#schemauser)]|false|none|Array can contain objects specified in include param of the get call e.g User object|
|responseStatus|integer|false|none|none|

<h2 id="tocS_BrandingSettings">BrandingSettings</h2>
<!-- backwards compatibility -->
<a id="schemabrandingsettings"></a>
<a id="schema_BrandingSettings"></a>
<a id="tocSbrandingsettings"></a>
<a id="tocsbrandingsettings"></a>

```json
{
  "companyName": null,
  "customEmail": "custom@example.com",
  "logo": "examplelogo.png",
  "logoExt": "png",
  "theme": "default",
  "verifiedDomain": "string",
  "verifiedDomainId": "string",
  "verifiedDomainValid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyName|string|false|none|none|
|customEmail|string(email)|false|none|none|
|logo|string|false|none|none|
|logoExt|string|false|none|none|
|theme|string|false|none|none|
|verifiedDomain|string|false|none|none|
|verifiedDomainId|string|false|none|none|
|verifiedDomainValid|boolean|false|none|none|

<h2 id="tocS_EmailList">EmailList</h2>
<!-- backwards compatibility -->
<a id="schemaemaillist"></a>
<a id="schema_EmailList"></a>
<a id="tocSemaillist"></a>
<a id="tocsemaillist"></a>

```json
{
  "attributes": {
    "created": "1970-01-01T00:00:00Z",
    "emails": [
      "string"
    ],
    "modified": "1970-01-01T00:00:00Z",
    "name": "string"
  },
  "id": 0,
  "relationships": {
    "ownerUser": {
      "data": {
        "id": 0,
        "type": "string"
      }
    }
  },
  "type": "string"
}
```

A single email group list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[EmailListAttributes](#schemaemaillistattributes)|false|none|Information for the email list, including its short title and recipient emails|
|id|integer|false|none|ID of the email list|
|relationships|[EmailListRelationships](#schemaemaillistrelationships)|false|none|Related record summary info|
|type|string|false|none|Type of record. "emailList"|

<h2 id="tocS_EmailListAttributes">EmailListAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaemaillistattributes"></a>
<a id="schema_EmailListAttributes"></a>
<a id="tocSemaillistattributes"></a>
<a id="tocsemaillistattributes"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "emails": [
    "string"
  ],
  "modified": "1970-01-01T00:00:00Z",
  "name": "string"
}
```

Information for the email list, including its short title and recipient emails

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|Created datetime|
|emails|[string]|false|none|Recipient emails in the email list|
|modified|string(date-time)|false|none|Modified datetime|
|name|string|false|none|Short title for email list|

<h2 id="tocS_EmailListCollectionResponse">EmailListCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemaillistcollectionresponse"></a>
<a id="schema_EmailListCollectionResponse"></a>
<a id="tocSemaillistcollectionresponse"></a>
<a id="tocsemaillistcollectionresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "created": "1970-01-01T00:00:00Z",
        "emails": [
          "string"
        ],
        "modified": "1970-01-01T00:00:00Z",
        "name": "string"
      },
      "id": 0,
      "relationships": {
        "ownerUser": {
          "data": {
            "id": 0,
            "type": "string"
          }
        }
      },
      "type": "string"
    }
  ],
  "included": [
    {
      "attributes": {
        "accessTimestamp": "2011-03-21T00:18:56-07:00",
        "accountName": "exampleaccount",
        "created": "2018-07-27T15:43:55-07:00",
        "email": "example@exavault.mail",
        "expiration": "2020-06-30T13:33:30-07:00",
        "firstLogin": false,
        "homePath": "/",
        "locked": false,
        "modified": "2018-07-29T15:43:55-07:00",
        "nickname": "exampleuser",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Chicago",
        "username": "exampleuser"
      },
      "id": 655621,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 0,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 0,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "responseStatus": 0,
  "returnedResults": 0,
  "totalResults": 0
}
```

Response object for list of email lists

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EmailList](#schemaemaillist)]|false|none|none|
|included|[[User](#schemauser)]|false|none|none|
|responseStatus|integer|false|none|Http status of response|
|returnedResults|integer|false|none|none|
|totalResults|integer|false|none|none|

<h2 id="tocS_EmailListOwnerUser">EmailListOwnerUser</h2>
<!-- backwards compatibility -->
<a id="schemaemaillistowneruser"></a>
<a id="schema_EmailListOwnerUser"></a>
<a id="tocSemaillistowneruser"></a>
<a id="tocsemaillistowneruser"></a>

```json
{
  "data": {
    "id": 0,
    "type": "string"
  }
}
```

Information for user who owns the email list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[RelationshipData](#schemarelationshipdata)|false|none|Identifying info for related record|

<h2 id="tocS_EmailListRelationships">EmailListRelationships</h2>
<!-- backwards compatibility -->
<a id="schemaemaillistrelationships"></a>
<a id="schema_EmailListRelationships"></a>
<a id="tocSemaillistrelationships"></a>
<a id="tocsemaillistrelationships"></a>

```json
{
  "ownerUser": {
    "data": {
      "id": 0,
      "type": "string"
    }
  }
}
```

Related record summary info

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerUser|[EmailListOwnerUser](#schemaemaillistowneruser)|false|none|Information for user who owns the email list|

<h2 id="tocS_EmailListResponse">EmailListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemaillistresponse"></a>
<a id="schema_EmailListResponse"></a>
<a id="tocSemaillistresponse"></a>
<a id="tocsemaillistresponse"></a>

```json
{
  "data": {
    "attributes": {
      "created": "1970-01-01T00:00:00Z",
      "emails": [
        "string"
      ],
      "modified": "1970-01-01T00:00:00Z",
      "name": "string"
    },
    "id": 0,
    "relationships": {
      "ownerUser": {
        "data": {
          "id": 0,
          "type": "string"
        }
      }
    },
    "type": "string"
  },
  "included": [
    {
      "attributes": {
        "accessTimestamp": "2011-03-21T00:18:56-07:00",
        "accountName": "exampleaccount",
        "created": "2018-07-27T15:43:55-07:00",
        "email": "example@exavault.mail",
        "expiration": "2020-06-30T13:33:30-07:00",
        "firstLogin": false,
        "homePath": "/",
        "locked": false,
        "modified": "2018-07-29T15:43:55-07:00",
        "nickname": "exampleuser",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Chicago",
        "username": "exampleuser"
      },
      "id": 655621,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 0,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 0,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "responseStatus": 200
}
```

Response object for a single email list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EmailList](#schemaemaillist)|false|none|A single email group list|
|included|[[User](#schemauser)]|false|none|none|
|responseStatus|integer(int32)|false|none|Http Status code|

<h2 id="tocS_EmptyResponse">EmptyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemptyresponse"></a>
<a id="schema_EmptyResponse"></a>
<a id="tocSemptyresponse"></a>
<a id="tocsemptyresponse"></a>

```json
{
  "data": [],
  "responseStatus": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response. |

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "<_ERROR_CODE>",
  "detail": "<_DETAIL>",
  "meta": "<_META_OBJECT>",
  "title": "<_TITLE>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Specific internal error string.|
|detail|string|false|none|human-readable explanation specific to this occurrence of the problem.|
|meta|object|false|none|Meta object containing non-standard meta-information about the error.|
|title|string|false|none|Human readable summary of the problem.|

<h2 id="tocS_Form">Form</h2>
<!-- backwards compatibility -->
<a id="schemaform"></a>
<a id="schema_Form"></a>
<a id="tocSform"></a>
<a id="tocsform"></a>

```json
{
  "attributes": {
    "cssStyles": "#ev-widget-form {\n  /*Change this to change the font. Remove to use your website font*/\n  font-family: Helvetica Neue, sans-serif;\n  /*Makes the form the same width as your website */\n  margin: 0 -2%;\n}\n#ev-widget-form label{\n  width: 100%;\n}\n#ev-widget-form input,\n#ev-widget-form textarea {\n  /*Changes color and thickness of borders on form elements */\n  border: 2px solid #ccc;\n  /*Changes spacing inside the form elements (top/bottom and left/right */\n  padding: 5px 5px;\n  /* Changes how far away the inputs are from their label */\n  margin-top: 2px;\n}\n\n#ev-widget-form input:focus,\n#ev-widget-form textarea:focus {\n  /*Changes the color of the form elements when they are clicked in to */\n  border: 2px solid #b2cf88;\n  /*Removes glow effect from form elements that are clicked in to */\n  outline: none;\n}\n\n#ev-widget-form label {\n  font-size: 14px;\n  font-weight: bold;\n  /*Changes color of labels */\n  color: #232323\n}\n\n#ev-widget-form .ev-form-element-description {\n  /*Changes size of descriptions */\n  font-size: 12px;\n  /*Changes color of descriptions */\n  color: #777;\n  /* Changes how far away the descriptions are from their input */\n  margin-top: 2px;\n}\n\n#ev-widget-form textarea {\n  /* Makes textareas (multiline inputs) a taller. */\n  min-height: 90px;\n}",
    "elements": [
      {
        "id": 234,
        "name": "Project ID",
        "order": 0,
        "settings": {
          "description": null,
          "isRequired": false,
          "useAsFolderName": false,
          "width": 1
        },
        "type": "name"
      },
      {
        "id": 235,
        "name": "Your Email",
        "order": 1,
        "setings": {
          "description": "Enter your email from the registration system",
          "isRequired": true,
          "senderEmail": true,
          "useAsFolderName": true,
          "width": 1
        },
        "type": "email"
      },
      {
        "id": 236,
        "name": "Upload Area",
        "order": 2,
        "settings": {
          "fileTypes": null
        },
        "type": "upload_area"
      }
    ],
    "formDescription": "Upload your photos to us",
    "submitButtonText": "Send Files",
    "successMessage": "Your files were uploaded"
  },
  "id": 823752,
  "relationships": {
    "share": {
      "data": {
        "id": 22,
        "type": "share"
      }
    }
  },
  "type": "form"
}
```

Regular form object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[FormAttributes](#schemaformattributes)|false|none|Attributes of the form including it's included fields and css styles|
|id|integer(int32)|false|none|ID of the form.|
|relationships|object|false|none|Share relationship data of the form. |
|type|string|false|none|Type is "form".|

<h2 id="tocS_FormAttributes">FormAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaformattributes"></a>
<a id="schema_FormAttributes"></a>
<a id="tocSformattributes"></a>
<a id="tocsformattributes"></a>

```json
{
  "cssStyles": "#ev-widget-form {\n  /*Change this to change the font. Remove to use your website font*/\n  font-family: Helvetica Neue, sans-serif;\n  /*Makes the form the same width as your website */\n  margin: 0 -2%;\n}\n#ev-widget-form label{\n  width: 100%;\n}\n#ev-widget-form input,\n#ev-widget-form textarea {\n  /*Changes color and thickness of borders on form elements */\n  border: 2px solid #ccc;\n  /*Changes spacing inside the form elements (top/bottom and left/right */\n  padding: 5px 5px;\n  /* Changes how far away the inputs are from their label */\n  margin-top: 2px;\n}\n\n#ev-widget-form input:focus,\n#ev-widget-form textarea:focus {\n  /*Changes the color of the form elements when they are clicked in to */\n  border: 2px solid #b2cf88;\n  /*Removes glow effect from form elements that are clicked in to */\n  outline: none;\n}\n\n#ev-widget-form label {\n  font-size: 14px;\n  font-weight: bold;\n  /*Changes color of labels */\n  color: #232323\n}\n\n#ev-widget-form .ev-form-element-description {\n  /*Changes size of descriptions */\n  font-size: 12px;\n  /*Changes color of descriptions */\n  color: #777;\n  /* Changes how far away the descriptions are from their input */\n  margin-top: 2px;\n}\n\n#ev-widget-form textarea {\n  /* Makes textareas (multiline inputs) a taller. */\n  min-height: 90px;\n}",
  "elements": [
    {
      "id": 234,
      "name": "Project ID",
      "order": 0,
      "settings": {
        "description": null,
        "isRequired": false,
        "useAsFolderName": false,
        "width": 1
      },
      "type": "name"
    },
    {
      "id": 235,
      "name": "Your Email",
      "order": 1,
      "setings": {
        "description": "Enter your email from the registration system",
        "isRequired": true,
        "senderEmail": true,
        "useAsFolderName": true,
        "width": 1
      },
      "type": "email"
    },
    {
      "id": 236,
      "name": "Upload Area",
      "order": 2,
      "settings": {
        "fileTypes": null
      },
      "type": "upload_area"
    }
  ],
  "formDescription": "Upload your photos to us",
  "submitButtonText": "Send Files",
  "successMessage": "Your files were uploaded"
}
```

Attributes of the form including it's included fields and css styles

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cssStyles|string|false|none|CSS Styles of the form.|
|elements|[[FormField](#schemaformfield)]|false|none|Array of form fields defined for the form|
|formDescription|string|false|none|Text that appears at the top of a receive form|
|submitButtonText|string|false|none|Text that appears on the submit button for the form|
|successMessage|string|false|none|Message displayed to submitter after files are uploaded|

<h2 id="tocS_FormEntry">FormEntry</h2>
<!-- backwards compatibility -->
<a id="schemaformentry"></a>
<a id="schema_FormEntry"></a>
<a id="tocSformentry"></a>
<a id="tocsformentry"></a>

```json
{
  "attributes": {
    "created": "2019-09-19T18:00:00Z",
    "fields": [
      {
        "name": "Email Adress",
        "order": 1,
        "value": "example@example.com"
      }
    ],
    "modified": "2019-09-20T18:00:00Z",
    "paths": [
      "/image1.jpg",
      "/image2.jpg",
      "/image3.jpg"
    ],
    "status": "completed"
  },
  "id": 12345,
  "type": "formEntry"
}
```

Contains the data submitted for a form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|id|integer(int64)|false|none|Form entry id|
|type|string|false|none|Type of item. "formEntry"|

<h2 id="tocS_FormEntryField">FormEntryField</h2>
<!-- backwards compatibility -->
<a id="schemaformentryfield"></a>
<a id="schema_FormEntryField"></a>
<a id="tocSformentryfield"></a>
<a id="tocsformentryfield"></a>

```json
{
  "name": "Email Adress",
  "order": 1,
  "value": "example@example.com"
}
```

Attributes of the form including its included fields and css styles

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Field name|
|order|integer(int32)|false|none|Field order in the form|
|value|string|false|none|Field value|

<h2 id="tocS_FormEntryResponse">FormEntryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaformentryresponse"></a>
<a id="schema_FormEntryResponse"></a>
<a id="tocSformentryresponse"></a>
<a id="tocsformentryresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "created": "2020-09-15T05:36:41-07:00",
        "fields": [
          {
            "name": "Email Address",
            "order": 1,
            "value": "test451@example.com"
          }
        ],
        "modified": "2020-09-16T05:36:44-07:00",
        "paths": [
          "/example/test451@example.com/1.csv",
          "/example/test451@example.com/2.csv"
        ],
        "status": "completed"
      },
      "id": 320721,
      "type": "formEntry"
    },
    {
      "attributes": {
        "created": "2020-09-16T05:36:41-07:00",
        "fields": [
          {
            "name": "Email Address",
            "order": 1,
            "value": "test455@example.com"
          }
        ],
        "modified": "2020-09-17T05:36:44-07:00",
        "paths": [
          "/example/test455@example.com/1.csv",
          "/example/test455@example.com/2.csv"
        ],
        "status": "completed"
      },
      "id": 32021,
      "type": "formEntry"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 2
}
```

Response object of the form data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[FormEntry](#schemaformentry)]|false|none|Object submissions data for form.|
|responseStatus|integer|false|none|Http status code of the response. |
|returnedResults|integer|false|none|Number of returned results. |
|totalResults|integer|false|none|Total results found. |

<h2 id="tocS_FormField">FormField</h2>
<!-- backwards compatibility -->
<a id="schemaformfield"></a>
<a id="schema_FormField"></a>
<a id="tocSformfield"></a>
<a id="tocsformfield"></a>

```json
{
  "id": 1185,
  "name": "Your Name",
  "order": 0,
  "settings": {
    "description": null,
    "isRequired": false,
    "senderEmail": true,
    "useAsFolderName": false,
    "width": 0.5
  },
  "type": "email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|ID of the form field. |
|name|string|false|none|Label of the field.|
|order|integer(int32)|false|none|Order that field appears on the form, starting from 0|
|settings|object|false|none|Advanced field settings|
|type|string|false|none|Field type|

#### Enumerated Values

|Property|Value|
|---|---|
|type|email|
|type|textarea|
|type|name|
|type|text|

<h2 id="tocS_FormFieldUploadArea">FormFieldUploadArea</h2>
<!-- backwards compatibility -->
<a id="schemaformfielduploadarea"></a>
<a id="schema_FormFieldUploadArea"></a>
<a id="tocSformfielduploadarea"></a>
<a id="tocsformfielduploadarea"></a>

```json
{
  "id": 1103,
  "name": "Upload Area",
  "order": 0,
  "settings": {
    "fileTypes": null
  },
  "type": "upload_area"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|ID of the form field. |
|name|string|false|none|Label of the field (not used).|
|order|integer(int32)|false|none|Order that field appears on the form, starting from 0|
|settings|object|false|none|Advanced field settings|
|type|string|false|none|Type is upload_area.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|upload_area|

<h2 id="tocS_FormResponse">FormResponse</h2>
<!-- backwards compatibility -->
<a id="schemaformresponse"></a>
<a id="schema_FormResponse"></a>
<a id="tocSformresponse"></a>
<a id="tocsformresponse"></a>

```json
{
  "data": {
    "attributes": {
      "cssStyles": "#ev-widget-form {\n  /*Change this to change the font. Remove to use your website font*/\n  font-family: Helvetica Neue, sans-serif;\n  /*Makes the form the same width as your website */\n  margin: 0 -2%;\n}\n#ev-widget-form label{\n  width: 100%;\n}\n#ev-widget-form input,\n#ev-widget-form textarea {\n  /*Changes color and thickness of borders on form elements */\n  border: 2px solid #ccc;\n  /*Changes spacing inside the form elements (top/bottom and left/right */\n  padding: 5px 5px;\n  /* Changes how far away the inputs are from their label */\n  margin-top: 2px;\n}\n\n#ev-widget-form input:focus,\n#ev-widget-form textarea:focus {\n  /*Changes the color of the form elements when they are clicked in to */\n  border: 2px solid #b2cf88;\n  /*Removes glow effect from form elements that are clicked in to */\n  outline: none;\n}\n\n#ev-widget-form label {\n  font-size: 14px;\n  font-weight: bold;\n  /*Changes color of labels */\n  color: #232323\n}\n\n#ev-widget-form .ev-form-element-description {\n  /*Changes size of descriptions */\n  font-size: 12px;\n  /*Changes color of descriptions */\n  color: #777;\n  /* Changes how far away the descriptions are from their input */\n  margin-top: 2px;\n}\n\n#ev-widget-form textarea {\n  /* Makes textareas (multiline inputs) a taller. */\n  min-height: 90px;\n}",
      "elements": [
        {
          "id": 234,
          "name": "Project ID",
          "order": 0,
          "settings": {
            "description": null,
            "isRequired": false,
            "useAsFolderName": false,
            "width": 1
          },
          "type": "name"
        },
        {
          "id": 235,
          "name": "Your Email",
          "order": 1,
          "setings": {
            "description": "Enter your email from the registration system",
            "isRequired": true,
            "senderEmail": true,
            "useAsFolderName": true,
            "width": 1
          },
          "type": "email"
        },
        {
          "id": 236,
          "name": "Upload Area",
          "order": 2,
          "settings": {
            "fileTypes": null
          },
          "type": "upload_area"
        }
      ],
      "formDescription": "Upload your photos to us",
      "submitButtonText": "Send Files",
      "successMessage": "Your files were uploaded"
    },
    "id": 823752,
    "relationships": {
      "share": {
        "data": {
          "id": 22,
          "type": "share"
        }
      }
    },
    "type": "form"
  },
  "included": [
    {
      "attributes": {
        "accessDescription": "Download only",
        "accessMode": {
          "delete": true,
          "download": true,
          "modify": true,
          "upload": true
        },
        "created": "2017-01-28T13:10:47Z",
        "embed": false,
        "expiration": null,
        "expired": false,
        "fileDropCreateFolders": false,
        "formId": 0,
        "hasNotification": false,
        "hasPassword": false,
        "hash": "hd1e-3erufo72",
        "inherited": false,
        "messages": [
          {
            "body": "You have files available for download.",
            "created": "2017-01-26T18:10:47Z",
            "id": 397584,
            "modified": "2017-01-28T13:10:47Z",
            "shareId": 3544253,
            "subject": "Files available for download",
            "userId": 119394
          }
        ],
        "modified": null,
        "name": "Example Folder",
        "ownerHash": "hd1e-3erufo72-fsxak999",
        "paths": [
          "/Example Folder"
        ],
        "public": true,
        "recipients": [
          {
            "created": "2017-04-21T10:53:47Z",
            "email": "recipient@example.com",
            "hash": "fseowxan",
            "id": 2,
            "received": false,
            "sent": true,
            "shareId": 23,
            "type": "direct"
          }
        ],
        "requireEmail": true,
        "resent": null,
        "status": 1,
        "trackingStatus": "complete",
        "type": "shared_folder"
      },
      "id": 655621,
      "relationships": {
        "messages": [
          {
            "data": {
              "id": 21,
              "type": "message"
            }
          }
        ],
        "notifications": [
          {
            "data": {
              "id": 9,
              "type": "notification"
            }
          }
        ],
        "owner": {
          "data": {
            "id": 12345,
            "type": "string"
          }
        },
        "resources": [
          {
            "data": {
              "id": 12345,
              "type": "resource"
            }
          }
        ]
      },
      "type": "share"
    }
  ],
  "responseStatus": 200
}
```

Response object for forms.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Form](#schemaform)|false|none|Regular form object.|
|included|[[Share](#schemashare)]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response. |

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "attributes": {
    "action": "all",
    "created": "2011-03-21T00:18:56Z",
    "message": null,
    "modified": "2011-03-21T00:18:56Z",
    "name": "examplefolder",
    "path": "/examplefolder",
    "readableDescription": "anybody changes, downloads or deletes '/examplefile.jpg'",
    "readableDescriptionWithoutPath": "anybody changes or downloads this file",
    "recipients": [
      {
        "created": "2011-03-21T00:18:56Z",
        "email": "exampleuser@example.com",
        "id": 2,
        "modified": "2011-03-21T00:18:56Z",
        "notificationId": 23
      }
    ],
    "sendEmail": true,
    "shareId": null,
    "type": "folder",
    "userId": 2,
    "usernames": [
      "notice_user_all"
    ]
  },
  "id": 1,
  "relationships": {
    "ownerUser": {
      "data": {
        "id": 12345,
        "type": "user"
      }
    },
    "resource": {
      "data": {
        "id": 2345,
        "type": "resource"
      }
    },
    "share": {
      "data": {
        "id": 2,
        "type": "share"
      }
    }
  },
  "type": "notification"
}
```

Object containing notification properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[NotificationAttributes](#schemanotificationattributes)|false|none|Attributes for the notification including the path, recipients, and share data. |
|id|integer(int32)|false|none|none|
|relationships|object|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_NotificationAttributes">NotificationAttributes</h2>
<!-- backwards compatibility -->
<a id="schemanotificationattributes"></a>
<a id="schema_NotificationAttributes"></a>
<a id="tocSnotificationattributes"></a>
<a id="tocsnotificationattributes"></a>

```json
{
  "action": "all",
  "created": "2011-03-21T00:18:56Z",
  "message": null,
  "modified": "2011-03-21T00:18:56Z",
  "name": "examplefolder",
  "path": "/examplefolder",
  "readableDescription": "anybody changes, downloads or deletes '/examplefile.jpg'",
  "readableDescriptionWithoutPath": "anybody changes or downloads this file",
  "recipients": [
    {
      "created": "2011-03-21T00:18:56Z",
      "email": "exampleuser@example.com",
      "id": 2,
      "modified": "2011-03-21T00:18:56Z",
      "notificationId": 23
    }
  ],
  "sendEmail": true,
  "shareId": null,
  "type": "folder",
  "userId": 2,
  "usernames": [
    "notice_user_all"
  ]
}
```

Attributes for the notification including the path, recipients, and share data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Action that triggers notification.|
|created|string(date-time)|false|none|Timestamp of notifiction creation.|
|message|string|false|none|Custom message that will be sent to the notification recipients.|
|modified|string(date-time)|false|none|Timestamp of notification modification.|
|name|string|false|none|Name of the item that the notification is set on.|
|path|string|false|none|Path to the item that the notification is set on.|
|readableDescription|string|false|none|Human readable description of the notification.|
|readableDescriptionWithoutPath|string|false|none|Human readable description of the notification without item path.|
|recipients|[[NotificationRecipient](#schemanotificationrecipient)]|false|none|Notification recipients.|
|sendEmail|boolean|false|none|Whether or not an email will send when the notification is triggered.|
|shareId|string|false|none|ID of the share that the notification belogns to.|
|type|string|false|none|Type of the resource the notification is attached to. |
|userId|string|false|none|ID of the user that the notification belongs to.|
|usernames|[string]|false|none|Detail on which users can trigger the notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|upload|
|action|download|
|action|delete|
|action|all|
|sendEmail|true|
|sendEmail|false|
|type|file|
|type|folder|
|type|shared_folder|
|type|send_receipt|
|type|share_receipt|
|type|file_drop|

<h2 id="tocS_NotificationCollectionResponse">NotificationCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotificationcollectionresponse"></a>
<a id="schema_NotificationCollectionResponse"></a>
<a id="tocSnotificationcollectionresponse"></a>
<a id="tocsnotificationcollectionresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "action": "all",
        "created": "2011-03-21T00:18:56Z",
        "message": null,
        "modified": "2011-03-21T00:18:56Z",
        "name": "examplefolder",
        "path": "/examplefolder",
        "readableDescription": "anybody changes, downloads or deletes '/examplefile.jpg'",
        "readableDescriptionWithoutPath": "anybody changes or downloads this file",
        "recipients": [
          {
            "created": "2011-03-21T00:18:56Z",
            "email": "exampleuser@example.com",
            "id": 2,
            "modified": "2011-03-21T00:18:56Z",
            "notificationId": 23
          }
        ],
        "sendEmail": true,
        "shareId": null,
        "type": "folder",
        "userId": 2,
        "usernames": [
          "notice_user_all"
        ]
      },
      "id": 1,
      "relationships": {
        "ownerUser": {
          "data": {
            "id": 12345,
            "type": "user"
          }
        },
        "resource": {
          "data": {
            "id": 2345,
            "type": "resource"
          }
        },
        "share": {
          "data": {
            "id": 2,
            "type": "share"
          }
        }
      },
      "type": "notification"
    }
  ],
  "included": [
    {
      "attributes": {
        "accessDescription": "Download only",
        "accessMode": {
          "delete": true,
          "download": true,
          "modify": true,
          "upload": true
        },
        "created": "2017-01-28T13:10:47Z",
        "embed": false,
        "expiration": null,
        "expired": false,
        "fileDropCreateFolders": false,
        "formId": 0,
        "hasNotification": false,
        "hasPassword": false,
        "hash": "hd1e-3erufo72",
        "inherited": false,
        "messages": [
          {
            "body": "You have files available for download.",
            "created": "2017-01-26T18:10:47Z",
            "id": 397584,
            "modified": "2017-01-28T13:10:47Z",
            "shareId": 3544253,
            "subject": "Files available for download",
            "userId": 119394
          }
        ],
        "modified": null,
        "name": "Example Folder",
        "ownerHash": "hd1e-3erufo72-fsxak999",
        "paths": [
          "/Example Folder"
        ],
        "public": true,
        "recipients": [
          {
            "created": "2017-04-21T10:53:47Z",
            "email": "recipient@example.com",
            "hash": "fseowxan",
            "id": 2,
            "received": false,
            "sent": true,
            "shareId": 23,
            "type": "direct"
          }
        ],
        "requireEmail": true,
        "resent": null,
        "status": 1,
        "trackingStatus": "complete",
        "type": "shared_folder"
      },
      "id": 655621,
      "relationships": {
        "messages": [
          {
            "data": {
              "id": 21,
              "type": "message"
            }
          }
        ],
        "notifications": [
          {
            "data": {
              "id": 9,
              "type": "notification"
            }
          }
        ],
        "owner": {
          "data": {
            "id": 12345,
            "type": "string"
          }
        },
        "resources": [
          {
            "data": {
              "id": 12345,
              "type": "resource"
            }
          }
        ]
      },
      "type": "share"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 2
}
```

Response object for notifications collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Notification](#schemanotification)]|false|none|none|
|included|[[Share](#schemashare) \| [User](#schemauser) \| [Resource](#schemaresource)]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response.|
|returnedResults|integer|false|none|Number of returned results.|
|totalResults|integer|false|none|Total results found. |

<h2 id="tocS_NotificationRecipient">NotificationRecipient</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrecipient"></a>
<a id="schema_NotificationRecipient"></a>
<a id="tocSnotificationrecipient"></a>
<a id="tocsnotificationrecipient"></a>

```json
{
  "created": "2011-03-21T00:18:56Z",
  "email": "exampleuser@example.com",
  "id": 2,
  "modified": "2011-03-21T00:18:56Z",
  "notificationId": 23
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|Timestamp of adding notification recipient.|
|email|string|false|none|Recipient email.|
|id|integer(int32)|false|none|ID of the recipient.|
|modified|string(date-time)|false|none|Timestamp of notification recipient modification.|
|notificationId|integer|false|none|ID of the notification that the recipient belongs to.|

<h2 id="tocS_NotificationResponse">NotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotificationresponse"></a>
<a id="schema_NotificationResponse"></a>
<a id="tocSnotificationresponse"></a>
<a id="tocsnotificationresponse"></a>

```json
{
  "data": {
    "attributes": {
      "action": "all",
      "created": "2011-03-21T00:18:56Z",
      "message": null,
      "modified": "2011-03-21T00:18:56Z",
      "name": "examplefolder",
      "path": "/examplefolder",
      "readableDescription": "anybody changes, downloads or deletes '/examplefile.jpg'",
      "readableDescriptionWithoutPath": "anybody changes or downloads this file",
      "recipients": [
        {
          "created": "2011-03-21T00:18:56Z",
          "email": "exampleuser@example.com",
          "id": 2,
          "modified": "2011-03-21T00:18:56Z",
          "notificationId": 23
        }
      ],
      "sendEmail": true,
      "shareId": null,
      "type": "folder",
      "userId": 2,
      "usernames": [
        "notice_user_all"
      ]
    },
    "id": 1,
    "relationships": {
      "ownerUser": {
        "data": {
          "id": 12345,
          "type": "user"
        }
      },
      "resource": {
        "data": {
          "id": 2345,
          "type": "resource"
        }
      },
      "share": {
        "data": {
          "id": 2,
          "type": "share"
        }
      }
    },
    "type": "notification"
  },
  "included": [
    {
      "attributes": {
        "accessDescription": "Download only",
        "accessMode": {
          "delete": true,
          "download": true,
          "modify": true,
          "upload": true
        },
        "created": "2017-01-28T13:10:47Z",
        "embed": false,
        "expiration": null,
        "expired": false,
        "fileDropCreateFolders": false,
        "formId": 0,
        "hasNotification": false,
        "hasPassword": false,
        "hash": "hd1e-3erufo72",
        "inherited": false,
        "messages": [
          {
            "body": "You have files available for download.",
            "created": "2017-01-26T18:10:47Z",
            "id": 397584,
            "modified": "2017-01-28T13:10:47Z",
            "shareId": 3544253,
            "subject": "Files available for download",
            "userId": 119394
          }
        ],
        "modified": null,
        "name": "Example Folder",
        "ownerHash": "hd1e-3erufo72-fsxak999",
        "paths": [
          "/Example Folder"
        ],
        "public": true,
        "recipients": [
          {
            "created": "2017-04-21T10:53:47Z",
            "email": "recipient@example.com",
            "hash": "fseowxan",
            "id": 2,
            "received": false,
            "sent": true,
            "shareId": 23,
            "type": "direct"
          }
        ],
        "requireEmail": true,
        "resent": null,
        "status": 1,
        "trackingStatus": "complete",
        "type": "shared_folder"
      },
      "id": 655621,
      "relationships": {
        "messages": [
          {
            "data": {
              "id": 21,
              "type": "message"
            }
          }
        ],
        "notifications": [
          {
            "data": {
              "id": 9,
              "type": "notification"
            }
          }
        ],
        "owner": {
          "data": {
            "id": 12345,
            "type": "string"
          }
        },
        "resources": [
          {
            "data": {
              "id": 12345,
              "type": "resource"
            }
          }
        ]
      },
      "type": "share"
    }
  ],
  "responseStatus": 200
}
```

Response object for notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Notification](#schemanotification)|false|none|Object containing notification properties.|
|included|[[Share](#schemashare) \| [User](#schemauser) \| [Resource](#schemaresource)]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response.|

<h2 id="tocS_PlanDetails">PlanDetails</h2>
<!-- backwards compatibility -->
<a id="schemaplandetails"></a>
<a id="schema_PlanDetails"></a>
<a id="tocSplandetails"></a>
<a id="tocsplandetails"></a>

```json
{
  "apiKeys": 0,
  "apiTokens": 0,
  "colorSchema": true,
  "customDomain": true,
  "customName": true,
  "directLinks": true,
  "ipWhitelist": true,
  "sharingOptions": [
    "string"
  ],
  "sshKeys": 0,
  "storageAddOn": 0,
  "unlimitedUsers": true,
  "userExpiration": true,
  "userImport": true,
  "webhookOptions": {
    "amount": 0,
    "includeTriggers": "string",
    "restrictionTypes": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKeys|integer|false|none|none|
|apiTokens|integer|false|none|none|
|colorSchema|boolean|false|none|none|
|customDomain|boolean|false|none|none|
|customName|boolean|false|none|none|
|directLinks|boolean|false|none|none|
|ipWhitelist|boolean|false|none|none|
|sharingOptions|[string]|false|none|none|
|sshKeys|integer|false|none|none|
|storageAddOn|integer|false|none|none|
|unlimitedUsers|boolean|false|none|none|
|userExpiration|boolean|false|none|none|
|userImport|boolean|false|none|none|
|webhookOptions|object|false|none|none|

<h2 id="tocS_PreviewFile">PreviewFile</h2>
<!-- backwards compatibility -->
<a id="schemapreviewfile"></a>
<a id="schema_PreviewFile"></a>
<a id="tocSpreviewfile"></a>
<a id="tocspreviewfile"></a>

```json
{
  "attributes": {
    "image": "iVBORw0KGgoAAAANSUhEUgAAACIAAAAoCAYAAACb3CikAAAABGdBTUEAALGPC",
    "imageHash": "6afaa3ef4056dc602ccfc69ab52d6f40",
    "pageCount": 10,
    "size": 2186
  },
  "id": 1,
  "type": "preview"
}
```

Object with preview image properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|id|integer(int64)|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_PreviewFileResponse">PreviewFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemapreviewfileresponse"></a>
<a id="schema_PreviewFileResponse"></a>
<a id="tocSpreviewfileresponse"></a>
<a id="tocspreviewfileresponse"></a>

```json
{
  "data": {
    "attributes": {
      "image": "iVBORw0KGgoAAAANSUhEUgAAACIAAAAoCAYAAACb3CikAAAABGdBTUEAALGPC",
      "imageHash": "6afaa3ef4056dc602ccfc69ab52d6f40",
      "pageCount": 10,
      "size": 2186
    },
    "id": 1,
    "type": "preview"
  },
  "responseStatus": 200
}
```

Response object for preview file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PreviewFile](#schemapreviewfile)|false|none|Object with preview image properties.|
|responseStatus|integer|false|none|HTTP Status Code|

<h2 id="tocS_Quota">Quota</h2>
<!-- backwards compatibility -->
<a id="schemaquota"></a>
<a id="schema_Quota"></a>
<a id="tocSquota"></a>
<a id="tocsquota"></a>

```json
{
  "bandwidthLimit": 0,
  "bandwidthUsed": 0,
  "diskLimit": 375809638400,
  "diskUsed": 1225352192,
  "noticeEnabled": true,
  "noticeThreshold": 80,
  "transactionsLimit": 0,
  "transactionsNoticeEnabled": true,
  "transactionsNoticeThreshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidthLimit|integer(int64)|false|none|Total number of bytes that can be transferred per month.|
|bandwidthUsed|integer(int64)|false|none|Number of bytes transferred this month.|
|diskLimit|integer(int64)|false|none|Amount of disk space that the account has available to it. This may be increased by upgrading to a larger plan.|
|diskUsed|integer(int64)|false|none|Amount of disk space currently in use.|
|noticeEnabled|boolean|false|none|Should a quota warning be sent to the account owner when a threshold level of space utilization is reached?|
|noticeThreshold|integer(int32)|false|none|Treshold that triggers a quota notification. This represents the "percent full" your account must be before the quota notification is generated.|
|transactionsLimit|integer(int32)|false|none|Total number of transactions allowed in a 24-hour period.|
|transactionsNoticeEnabled|boolean|false|none|Whether an email should be sent to the account owner up to once per day if transaction usage exceeds `transactionsNoticeThreshold` value.|
|transactionsNoticeThreshold|integer(int32)|false|none|Percent of daily transactions limit that will trigger an email if activity exceeds it.|

<h2 id="tocS_RelationshipData">RelationshipData</h2>
<!-- backwards compatibility -->
<a id="schemarelationshipdata"></a>
<a id="schema_RelationshipData"></a>
<a id="tocSrelationshipdata"></a>
<a id="tocsrelationshipdata"></a>

```json
{
  "id": 0,
  "type": "string"
}
```

Identifying info for related record

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|ID number of related record|
|type|string|false|none|Kind of record|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "attributes": {
    "accessedAt": "2011-03-21T00:18:56-07:00",
    "accessedTime": 0,
    "createdAt": "2011-03-21T00:18:56-07:00",
    "createdBy": "exampleuser",
    "createdTime": 0,
    "extension": "string",
    "fileCount": 0,
    "hash": "ec4aa9a91be282666a165899a14f29b1",
    "name": "examplefolder",
    "path": "/examplefolder",
    "previewable": true,
    "size": 0,
    "type": "file",
    "updatedAt": "2011-03-21T00:18:56-07:00",
    "updatedTime": 0,
    "uploadDate": "2011-03-21T00:18:56-07:00"
  },
  "id": 1,
  "relationships": {
    "directFile": {
      "data": {
        "id": 2,
        "type": "directFile"
      }
    },
    "notifications": [
      {
        "data": {
          "id": 2,
          "type": "notification"
        }
      }
    ],
    "parentResource": {
      "data": {
        "id": 2,
        "type": "resource"
      }
    },
    "share": {
      "data": {
        "id": 2345,
        "type": "share"
      }
    }
  },
  "type": "resource"
}
```

All properties of the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[ResourceAttributes](#schemaresourceattributes)|false|none|Attributes of resource|
|id|integer(int64)|false|none|none|
|relationships|object|false|none|none|
|type|string|false|none|Type of item. "resource"|

#### Enumerated Values

|Property|Value|
|---|---|
|type|resource|

<h2 id="tocS_ResourceAttributes">ResourceAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaresourceattributes"></a>
<a id="schema_ResourceAttributes"></a>
<a id="tocSresourceattributes"></a>
<a id="tocsresourceattributes"></a>

```json
{
  "accessedAt": "2011-03-21T00:18:56-07:00",
  "accessedTime": 0,
  "createdAt": "2011-03-21T00:18:56-07:00",
  "createdBy": "exampleuser",
  "createdTime": 0,
  "extension": "string",
  "fileCount": 0,
  "hash": "ec4aa9a91be282666a165899a14f29b1",
  "name": "examplefolder",
  "path": "/examplefolder",
  "previewable": true,
  "size": 0,
  "type": "file",
  "updatedAt": "2011-03-21T00:18:56-07:00",
  "updatedTime": 0,
  "uploadDate": "2011-03-21T00:18:56-07:00"
}
```

Attributes of resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessedAt|string(date-time)|false|none|Date-time of the time when resource was accessed.|
|accessedTime|integer(int32)|false|none|UNIX timestamp of last access|
|createdAt|string(date-time)|false|none|Date-time of resource creation.|
|createdBy|string|false|none|Username of the creator.|
|createdTime|integer(int32)|false|none|UNIX timestamp of resource creation|
|extension|string|false|none|Resource extension. Property exists only if resource `type` is file.|
|fileCount|integer|false|none|Number of files within folder. null if resource type is a file.|
|hash|string|false|none|Unique hash of the resource.|
|name|string|false|none|Resource name, e.g. the name of the file or folder.|
|path|string|false|none|Full path to the resource.|
|previewable|boolean|false|none|Can resource be previewed. Property equals `null` if resource `type` is dir.|
|size|integer(int64)|false|none|Resource size in bytes|
|type|string|false|none|Type of the resource.|
|updatedAt|string(date-time)|false|none|Date-time of resource modification.|
|updatedTime|integer(int32)|false|none|UNIX timestamp of resource modification|
|uploadDate|string(date-time)|false|none|Timestamp of resource upload.|

#### Enumerated Values

|Property|Value|
|---|---|
|previewable|true|
|previewable|false|
|type|file|
|type|dir|

<h2 id="tocS_ResourceCollectionResponse">ResourceCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecollectionresponse"></a>
<a id="schema_ResourceCollectionResponse"></a>
<a id="tocSresourcecollectionresponse"></a>
<a id="tocsresourcecollectionresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "accessedAt": "2011-03-21T00:18:56-07:00",
        "accessedTime": 0,
        "createdAt": "2011-03-21T00:18:56-07:00",
        "createdBy": "exampleuser",
        "createdTime": 0,
        "extension": "string",
        "fileCount": 0,
        "hash": "ec4aa9a91be282666a165899a14f29b1",
        "name": "examplefolder",
        "path": "/examplefolder",
        "previewable": true,
        "size": 0,
        "type": "file",
        "updatedAt": "2011-03-21T00:18:56-07:00",
        "updatedTime": 0,
        "uploadDate": "2011-03-21T00:18:56-07:00"
      },
      "id": 1,
      "relationships": {
        "directFile": {
          "data": {
            "id": 2,
            "type": "directFile"
          }
        },
        "notifications": [
          {
            "data": {
              "id": 2,
              "type": "notification"
            }
          }
        ],
        "parentResource": {
          "data": {
            "id": 2,
            "type": "resource"
          }
        },
        "share": {
          "data": {
            "id": 2345,
            "type": "share"
          }
        }
      },
      "type": "resource"
    }
  ],
  "included": [
    {
      "attributes": {
        "accessTimestamp": "2011-03-21T00:18:56-07:00",
        "accountName": "exampleaccount",
        "created": "2018-07-27T15:43:55-07:00",
        "email": "example@exavault.mail",
        "expiration": "2020-06-30T13:33:30-07:00",
        "firstLogin": false,
        "homePath": "/",
        "locked": false,
        "modified": "2018-07-29T15:43:55-07:00",
        "nickname": "exampleuser",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Chicago",
        "username": "exampleuser"
      },
      "id": 655621,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 0,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 0,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 2
}
```

Response object for collection of resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Resource](#schemaresource)]|false|none|none|
|included|[[User](#schemauser) \| [Account](#schemaaccount) \| [Resource](#schemaresource) \| [Notification](#schemanotification) \| [Share](#schemashare)]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response.|
|returnedResults|integer|false|none|Count of returned results.|
|totalResults|integer|false|none|Total count of results found.|

<h2 id="tocS_ResourceCopyMove">ResourceCopyMove</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecopymove"></a>
<a id="schema_ResourceCopyMove"></a>
<a id="tocSresourcecopymove"></a>
<a id="tocsresourcecopymove"></a>

```json
{
  "data": {
    "attributes": {
      "accessedAt": "2011-03-21T00:18:56-07:00",
      "accessedTime": 0,
      "createdAt": "2011-03-21T00:18:56-07:00",
      "createdBy": "exampleuser",
      "createdTime": 0,
      "extension": "string",
      "fileCount": 0,
      "hash": "ec4aa9a91be282666a165899a14f29b1",
      "name": "examplefolder",
      "path": "/examplefolder",
      "previewable": true,
      "size": 0,
      "type": "file",
      "updatedAt": "2011-03-21T00:18:56-07:00",
      "updatedTime": 0,
      "uploadDate": "2011-03-21T00:18:56-07:00"
    },
    "id": 1,
    "relationships": {
      "directFile": {
        "data": {
          "id": 2,
          "type": "directFile"
        }
      },
      "notifications": [
        {
          "data": {
            "id": 2,
            "type": "notification"
          }
        }
      ],
      "parentResource": {
        "data": {
          "id": 2,
          "type": "resource"
        }
      },
      "share": {
        "data": {
          "id": 2345,
          "type": "share"
        }
      }
    },
    "type": "resource"
  },
  "meta": {
    "id": 2321
  }
}
```

Resource which was successfully copied or moved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Resource](#schemaresource)|false|none|All properties of the resource.|
|meta|object|false|none|Meta object containing non-standard meta-information about the operation.|

<h2 id="tocS_ResourceDelete">ResourceDelete</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedelete"></a>
<a id="schema_ResourceDelete"></a>
<a id="tocSresourcedelete"></a>
<a id="tocsresourcedelete"></a>

```json
{
  "id": 1,
  "meta": {
    "id": 2321
  },
  "type": "resource"
}
```

All properties of the resource delete object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|meta|object|false|none|Meta object containing non-standard meta-information about the delete operation.|
|type|string|false|none|Type of item. "resource"|

#### Enumerated Values

|Property|Value|
|---|---|
|type|resource|

<h2 id="tocS_ResourceMultiResponse">ResourceMultiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresourcemultiresponse"></a>
<a id="schema_ResourceMultiResponse"></a>
<a id="tocSresourcemultiresponse"></a>
<a id="tocsresourcemultiresponse"></a>

```json
{
  "responses": [
    {
      "id": 1,
      "meta": {
        "id": 2321
      },
      "type": "resource"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[ResourceDelete](#schemaresourcedelete) \| [Error](#schemaerror)]|false|none|none|

<h2 id="tocS_ResourceResponse">ResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresourceresponse"></a>
<a id="schema_ResourceResponse"></a>
<a id="tocSresourceresponse"></a>
<a id="tocsresourceresponse"></a>

```json
{
  "data": {
    "attributes": {
      "accessedAt": "2011-03-21T00:18:56-07:00",
      "accessedTime": 0,
      "createdAt": "2011-03-21T00:18:56-07:00",
      "createdBy": "exampleuser",
      "createdTime": 0,
      "extension": "string",
      "fileCount": 0,
      "hash": "ec4aa9a91be282666a165899a14f29b1",
      "name": "examplefolder",
      "path": "/examplefolder",
      "previewable": true,
      "size": 0,
      "type": "file",
      "updatedAt": "2011-03-21T00:18:56-07:00",
      "updatedTime": 0,
      "uploadDate": "2011-03-21T00:18:56-07:00"
    },
    "id": 1,
    "relationships": {
      "directFile": {
        "data": {
          "id": 2,
          "type": "directFile"
        }
      },
      "notifications": [
        {
          "data": {
            "id": 2,
            "type": "notification"
          }
        }
      ],
      "parentResource": {
        "data": {
          "id": 2,
          "type": "resource"
        }
      },
      "share": {
        "data": {
          "id": 2345,
          "type": "share"
        }
      }
    },
    "type": "resource"
  },
  "included": [
    {
      "attributes": {
        "accessTimestamp": "2011-03-21T00:18:56-07:00",
        "accountName": "exampleaccount",
        "created": "2018-07-27T15:43:55-07:00",
        "email": "example@exavault.mail",
        "expiration": "2020-06-30T13:33:30-07:00",
        "firstLogin": false,
        "homePath": "/",
        "locked": false,
        "modified": "2018-07-29T15:43:55-07:00",
        "nickname": "exampleuser",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Chicago",
        "username": "exampleuser"
      },
      "id": 655621,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 0,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 0,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "responseStatus": 200
}
```

Response object for resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Resource](#schemaresource)|false|none|All properties of the resource.|
|included|[[User](#schemauser) \| [Account](#schemaaccount) \| [Resource](#schemaresource) \| [Notification](#schemanotification) \| [Share](#schemashare)]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response. |

<h2 id="tocS_SSHKey">SSHKey</h2>
<!-- backwards compatibility -->
<a id="schemasshkey"></a>
<a id="schema_SSHKey"></a>
<a id="tocSsshkey"></a>
<a id="tocssshkey"></a>

```json
{
  "attributes": {
    "created": "1970-01-01T00:00:00Z",
    "fingerprint": "string",
    "lastLogin": "1970-01-01T00:00:00Z"
  },
  "id": 655621,
  "relationships": {
    "ownerUser": {
      "data": {
        "id": 0,
        "type": "string"
      }
    }
  },
  "type": "sshKey"
}
```

Object representing an SSH Key associated with a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[SSHKeyAttributes](#schemasshkeyattributes)|false|none|none|
|id|integer(int32)|false|none|ID of the key.|
|relationships|object|false|none|none|
|type|string|false|none|Type of the object. |

#### Enumerated Values

|Property|Value|
|---|---|
|type|sshKey|

<h2 id="tocS_SSHKeyAttributes">SSHKeyAttributes</h2>
<!-- backwards compatibility -->
<a id="schemasshkeyattributes"></a>
<a id="schema_SSHKeyAttributes"></a>
<a id="tocSsshkeyattributes"></a>
<a id="tocssshkeyattributes"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "fingerprint": "string",
  "lastLogin": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|The date-time the SSH Key was created.|
|fingerprint|string|false|none|The Key Fingerprint. The fingerprint can be used to identify and keep track of the key without exposing the actual credential. |
|lastLogin|string(date-time)|false|none|The date-time the SSH Key was last used to access ExaVault. |

<h2 id="tocS_SSHKeyCollectionResponse">SSHKeyCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasshkeycollectionresponse"></a>
<a id="schema_SSHKeyCollectionResponse"></a>
<a id="tocSsshkeycollectionresponse"></a>
<a id="tocssshkeycollectionresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "created": "1970-01-01T00:00:00Z",
        "fingerprint": "string",
        "lastLogin": "1970-01-01T00:00:00Z"
      },
      "id": 655621,
      "relationships": {
        "ownerUser": {
          "data": {
            "id": 0,
            "type": "string"
          }
        }
      },
      "type": "sshKey"
    }
  ],
  "included": [
    {
      "attributes": {
        "accessTimestamp": "2011-03-21T00:18:56-07:00",
        "accountName": "exampleaccount",
        "created": "2018-07-27T15:43:55-07:00",
        "email": "example@exavault.mail",
        "expiration": "2020-06-30T13:33:30-07:00",
        "firstLogin": false,
        "homePath": "/",
        "locked": false,
        "modified": "2018-07-29T15:43:55-07:00",
        "nickname": "exampleuser",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Chicago",
        "username": "exampleuser"
      },
      "id": 655621,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 0,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 0,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SSHKey](#schemasshkey)]|false|none|none|
|included|[[User](#schemauser)]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response.|
|returnedResults|integer|false|none|Number of returned results.|
|totalResults|integer|false|none|Total results found. |

<h2 id="tocS_SSHKeyResponse">SSHKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemasshkeyresponse"></a>
<a id="schema_SSHKeyResponse"></a>
<a id="tocSsshkeyresponse"></a>
<a id="tocssshkeyresponse"></a>

```json
{
  "data": {
    "attributes": {
      "created": "1970-01-01T00:00:00Z",
      "fingerprint": "string",
      "lastLogin": "1970-01-01T00:00:00Z"
    },
    "id": 655621,
    "relationships": {
      "ownerUser": {
        "data": {
          "id": 0,
          "type": "string"
        }
      }
    },
    "type": "sshKey"
  },
  "included": [
    {
      "attributes": {
        "accessTimestamp": "2011-03-21T00:18:56-07:00",
        "accountName": "exampleaccount",
        "created": "2018-07-27T15:43:55-07:00",
        "email": "example@exavault.mail",
        "expiration": "2020-06-30T13:33:30-07:00",
        "firstLogin": false,
        "homePath": "/",
        "locked": false,
        "modified": "2018-07-29T15:43:55-07:00",
        "nickname": "exampleuser",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Chicago",
        "username": "exampleuser"
      },
      "id": 655621,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 0,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 0,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "responseStatus": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SSHKey](#schemasshkey)|false|none|Object representing an SSH Key associated with a user.|
|included|[[User](#schemauser)]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response.|

<h2 id="tocS_SessionActivityEntry">SessionActivityEntry</h2>
<!-- backwards compatibility -->
<a id="schemasessionactivityentry"></a>
<a id="schema_SessionActivityEntry"></a>
<a id="tocSsessionactivityentry"></a>
<a id="tocssessionactivityentry"></a>

```json
{
  "attributes": {
    "bytesTransferred": 10815676,
    "created": "2019-10-18T06:48:40Z",
    "duration": 5,
    "fileName": "/test2/Cassandra2020The20Definitive20Guide.2030947496.pdf",
    "fileSource": "",
    "ipAddress": "185.223.113.224",
    "operation": "PASS",
    "protocol": "web",
    "sessionId": "5da9b4a8bd961dfa0a56fa0dc15aaffe57069271b389e",
    "status": "-",
    "username": "ykravchuk"
  },
  "id": 12345,
  "type": "sessionActivity"
}
```

Single entry of session activity

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|id|integer(int64)|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sessionActivity|

<h2 id="tocS_SessionActivityResponse">SessionActivityResponse</h2>
<!-- backwards compatibility -->
<a id="schemasessionactivityresponse"></a>
<a id="schema_SessionActivityResponse"></a>
<a id="tocSsessionactivityresponse"></a>
<a id="tocssessionactivityresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "bytesTransferred": 10815676,
        "created": "2019-10-18T06:48:40Z",
        "duration": 5,
        "fileName": "/test2/Cassandra2020The20Definitive20Guide.2030947496.pdf",
        "fileSource": "",
        "ipAddress": "185.223.113.224",
        "operation": "PASS",
        "protocol": "web",
        "sessionId": "5da9b4a8bd961dfa0a56fa0dc15aaffe57069271b389e",
        "status": "-",
        "username": "ykravchuk"
      },
      "id": 12345,
      "type": "sessionActivity"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 2
}
```

Session activity list response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SessionActivityEntry](#schemasessionactivityentry)]|false|none|none|
|responseStatus|integer|false|none|none|
|returnedResults|integer|false|none|none|
|totalResults|integer|false|none|none|

<h2 id="tocS_Share">Share</h2>
<!-- backwards compatibility -->
<a id="schemashare"></a>
<a id="schema_Share"></a>
<a id="tocSshare"></a>
<a id="tocsshare"></a>

```json
{
  "attributes": {
    "accessDescription": "Download only",
    "accessMode": {
      "delete": true,
      "download": true,
      "modify": true,
      "upload": true
    },
    "created": "2017-01-28T13:10:47Z",
    "embed": false,
    "expiration": null,
    "expired": false,
    "fileDropCreateFolders": false,
    "formId": 0,
    "hasNotification": false,
    "hasPassword": false,
    "hash": "hd1e-3erufo72",
    "inherited": false,
    "messages": [
      {
        "body": "You have files available for download.",
        "created": "2017-01-26T18:10:47Z",
        "id": 397584,
        "modified": "2017-01-28T13:10:47Z",
        "shareId": 3544253,
        "subject": "Files available for download",
        "userId": 119394
      }
    ],
    "modified": null,
    "name": "Example Folder",
    "ownerHash": "hd1e-3erufo72-fsxak999",
    "paths": [
      "/Example Folder"
    ],
    "public": true,
    "recipients": [
      {
        "created": "2017-04-21T10:53:47Z",
        "email": "recipient@example.com",
        "hash": "fseowxan",
        "id": 2,
        "received": false,
        "sent": true,
        "shareId": 23,
        "type": "direct"
      }
    ],
    "requireEmail": true,
    "resent": null,
    "status": 1,
    "trackingStatus": "complete",
    "type": "shared_folder"
  },
  "id": 655621,
  "relationships": {
    "messages": [
      {
        "data": {
          "id": 21,
          "type": "message"
        }
      }
    ],
    "notifications": [
      {
        "data": {
          "id": 9,
          "type": "notification"
        }
      }
    ],
    "owner": {
      "data": {
        "id": 12345,
        "type": "string"
      }
    },
    "resources": [
      {
        "data": {
          "id": 12345,
          "type": "resource"
        }
      }
    ]
  },
  "type": "share"
}
```

Object contains share properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[ShareAttributes](#schemashareattributes)|false|none|Attributes of the share including the name, path and share recipients. |
|id|integer(int32)|false|none|ID of the share.|
|relationships|object|false|none|Message, owner, resource, and notification relationships of the share. |
|type|string|false|none|Type of the share. |

#### Enumerated Values

|Property|Value|
|---|---|
|type|share|

<h2 id="tocS_ShareAttributes">ShareAttributes</h2>
<!-- backwards compatibility -->
<a id="schemashareattributes"></a>
<a id="schema_ShareAttributes"></a>
<a id="tocSshareattributes"></a>
<a id="tocsshareattributes"></a>

```json
{
  "accessDescription": "Download only",
  "accessMode": {
    "delete": true,
    "download": true,
    "modify": true,
    "upload": true
  },
  "created": "2017-01-28T13:10:47Z",
  "embed": false,
  "expiration": null,
  "expired": false,
  "fileDropCreateFolders": false,
  "formId": 0,
  "hasNotification": false,
  "hasPassword": false,
  "hash": "hd1e-3erufo72",
  "inherited": false,
  "messages": [
    {
      "body": "You have files available for download.",
      "created": "2017-01-26T18:10:47Z",
      "id": 397584,
      "modified": "2017-01-28T13:10:47Z",
      "shareId": 3544253,
      "subject": "Files available for download",
      "userId": 119394
    }
  ],
  "modified": null,
  "name": "Example Folder",
  "ownerHash": "hd1e-3erufo72-fsxak999",
  "paths": [
    "/Example Folder"
  ],
  "public": true,
  "recipients": [
    {
      "created": "2017-04-21T10:53:47Z",
      "email": "recipient@example.com",
      "hash": "fseowxan",
      "id": 2,
      "received": false,
      "sent": true,
      "shareId": 23,
      "type": "direct"
    }
  ],
  "requireEmail": true,
  "resent": null,
  "status": 1,
  "trackingStatus": "complete",
  "type": "shared_folder"
}
```

Attributes of the share including the name, path and share recipients.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessDescription|string|false|none|Description of the share access rights.|
|accessMode|[AccessMode](#schemaaccessmode)|false|none|An object defining what a not-logged-in visitor can do with the share contents|
|created|string(date-time)|false|none|Timestamp of share creation.|
|embed|boolean|false|none|True if share can be embedded.|
|expiration|string|false|none|Expiration date of the share.|
|expired|boolean|false|none|True if the share has expired.|
|fileDropCreateFolders|boolean|false|none|Flag to show if separate folders should be created for each file upload to receive folder.|
|formId|integer|false|none|ID of the form.|
|hasNotification|boolean|false|none|True if share has notification.|
|hasPassword|boolean|false|none|True if the share has password.|
|hash|string|false|none|Share hash.|
|inherited|boolean|false|none|True if share inherited from parent folder.|
|messages|[[ShareMessage](#schemasharemessage)]|false|none|Array of invitation messages.|
|modified|string(date-time)|false|none|Timestamp of share modification. Can be `null` if it wasn't modified.|
|name|string|false|none|Share name.|
|ownerHash|string|false|none|Share owner's hash.|
|paths|[string]|false|none|Path to the shared resource in your account.|
|public|boolean|false|none|True if the share has a public url.|
|recipients|[[ShareRecipient](#schemasharerecipient)]|false|none|Array of recipients.|
|requireEmail|boolean|false|none|True if share requires email to access.|
|resent|string(date-time)|false|none|Invitations resent date. Can be `null` if resent never happened.|
|status|integer(int32)|false|none|Share activity status. Can be active (1) or deactivated (0).|
|trackingStatus|string|false|none|Checks recipient received status and returns whether it's been received (`complete`,) partial received (`incomplete`,) or not received yet (`pending`.)|
|type|string|false|none|Type of share.|

#### Enumerated Values

|Property|Value|
|---|---|
|expired|true|
|expired|false|
|fileDropCreateFolders|true|
|fileDropCreateFolders|false|
|hasNotification|true|
|hasNotification|false|
|hasPassword|true|
|hasPassword|false|
|inherited|true|
|inherited|false|
|public|true|
|public|false|
|status|0|
|status|1|
|trackingStatus|complete|
|trackingStatus|incomplete|
|trackingStatus|pending|
|type|shared_folder|
|type|send|
|type|receive|

<h2 id="tocS_ShareCollectionResponse">ShareCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasharecollectionresponse"></a>
<a id="schema_ShareCollectionResponse"></a>
<a id="tocSsharecollectionresponse"></a>
<a id="tocssharecollectionresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "accessDescription": "Download only",
        "accessMode": {
          "delete": true,
          "download": true,
          "modify": true,
          "upload": true
        },
        "created": "2017-01-28T13:10:47Z",
        "embed": false,
        "expiration": null,
        "expired": false,
        "fileDropCreateFolders": false,
        "formId": 0,
        "hasNotification": false,
        "hasPassword": false,
        "hash": "hd1e-3erufo72",
        "inherited": false,
        "messages": [
          {
            "body": "You have files available for download.",
            "created": "2017-01-26T18:10:47Z",
            "id": 397584,
            "modified": "2017-01-28T13:10:47Z",
            "shareId": 3544253,
            "subject": "Files available for download",
            "userId": 119394
          }
        ],
        "modified": null,
        "name": "Example Folder",
        "ownerHash": "hd1e-3erufo72-fsxak999",
        "paths": [
          "/Example Folder"
        ],
        "public": true,
        "recipients": [
          {
            "created": "2017-04-21T10:53:47Z",
            "email": "recipient@example.com",
            "hash": "fseowxan",
            "id": 2,
            "received": false,
            "sent": true,
            "shareId": 23,
            "type": "direct"
          }
        ],
        "requireEmail": true,
        "resent": null,
        "status": 1,
        "trackingStatus": "complete",
        "type": "shared_folder"
      },
      "id": 655621,
      "relationships": {
        "messages": [
          {
            "data": {
              "id": 21,
              "type": "message"
            }
          }
        ],
        "notifications": [
          {
            "data": {
              "id": 9,
              "type": "notification"
            }
          }
        ],
        "owner": {
          "data": {
            "id": 12345,
            "type": "string"
          }
        },
        "resources": [
          {
            "data": {
              "id": 12345,
              "type": "resource"
            }
          }
        ]
      },
      "type": "share"
    }
  ],
  "included": [
    {
      "attributes": {
        "accessTimestamp": "2011-03-21T00:18:56-07:00",
        "accountName": "exampleaccount",
        "created": "2018-07-27T15:43:55-07:00",
        "email": "example@exavault.mail",
        "expiration": "2020-06-30T13:33:30-07:00",
        "firstLogin": false,
        "homePath": "/",
        "locked": false,
        "modified": "2018-07-29T15:43:55-07:00",
        "nickname": "exampleuser",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Chicago",
        "username": "exampleuser"
      },
      "id": 655621,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 0,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 0,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Share](#schemashare)]|false|none|none|
|included|[[User](#schemauser) \| [Notification](#schemanotification) \| [Resource](#schemaresource)]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response.|
|returnedResults|integer|false|none|Number of returned results.|
|totalResults|integer|false|none|Total results found. |

<h2 id="tocS_ShareMessage">ShareMessage</h2>
<!-- backwards compatibility -->
<a id="schemasharemessage"></a>
<a id="schema_ShareMessage"></a>
<a id="tocSsharemessage"></a>
<a id="tocssharemessage"></a>

```json
{
  "body": "You have files available for download.",
  "created": "2017-01-26T18:10:47Z",
  "id": 397584,
  "modified": "2017-01-28T13:10:47Z",
  "shareId": 3544253,
  "subject": "Files available for download",
  "userId": 119394
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|Share invitation message text.|
|created|string(date-time)|false|none|Timestamp of message creation.|
|id|integer(int32)|false|none|Message id.|
|modified|string(date-time)|false|none|Timestamp of message modification.|
|shareId|integer(int32)|false|none|ID of associated share|
|subject|string|false|none|Share invitation message subject.|
|userId|integer(int32)|false|none|User ID who generated share invite|

<h2 id="tocS_ShareRecipient">ShareRecipient</h2>
<!-- backwards compatibility -->
<a id="schemasharerecipient"></a>
<a id="schema_ShareRecipient"></a>
<a id="tocSsharerecipient"></a>
<a id="tocssharerecipient"></a>

```json
{
  "created": "2017-01-26T18:10:47Z",
  "email": "recipient@example.com",
  "hash": "fseowxan",
  "id": 2,
  "received": false,
  "sent": true,
  "shareId": 23,
  "type": "owner"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|Timestamp of adding recipient to the share.|
|email|string|false|none|Recipient email address.|
|hash|string|false|none|Share hash.|
|id|integer(int32)|false|none|ID of the recipient.|
|received|boolean|false|none|Set to true if recipient has accessed the share. Note this is set to true when the recipient clicks the link to access the share; not when they download a file.|
|sent|boolean|false|none|Set to true if invite email was sent; false otherwise.|
|shareId|string|false|none|ID of the share that the recipoient belongs to.|
|type|string|false|none|Type of the recipient.|

#### Enumerated Values

|Property|Value|
|---|---|
|received|true|
|received|false|
|sent|true|
|sent|false|
|type|owner|
|type|direct|

<h2 id="tocS_ShareRecipientsResponse">ShareRecipientsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasharerecipientsresponse"></a>
<a id="schema_ShareRecipientsResponse"></a>
<a id="tocSsharerecipientsresponse"></a>
<a id="tocssharerecipientsresponse"></a>

```json
{
  "data": [
    "test+3@example.com",
    "test+4@example.com"
  ],
  "responseStatus": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string(email)]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response.|

<h2 id="tocS_ShareResponse">ShareResponse</h2>
<!-- backwards compatibility -->
<a id="schemashareresponse"></a>
<a id="schema_ShareResponse"></a>
<a id="tocSshareresponse"></a>
<a id="tocsshareresponse"></a>

```json
{
  "data": {
    "attributes": {
      "accessDescription": "Download only",
      "accessMode": {
        "delete": true,
        "download": true,
        "modify": true,
        "upload": true
      },
      "created": "2017-01-28T13:10:47Z",
      "embed": false,
      "expiration": null,
      "expired": false,
      "fileDropCreateFolders": false,
      "formId": 0,
      "hasNotification": false,
      "hasPassword": false,
      "hash": "hd1e-3erufo72",
      "inherited": false,
      "messages": [
        {
          "body": "You have files available for download.",
          "created": "2017-01-26T18:10:47Z",
          "id": 397584,
          "modified": "2017-01-28T13:10:47Z",
          "shareId": 3544253,
          "subject": "Files available for download",
          "userId": 119394
        }
      ],
      "modified": null,
      "name": "Example Folder",
      "ownerHash": "hd1e-3erufo72-fsxak999",
      "paths": [
        "/Example Folder"
      ],
      "public": true,
      "recipients": [
        {
          "created": "2017-04-21T10:53:47Z",
          "email": "recipient@example.com",
          "hash": "fseowxan",
          "id": 2,
          "received": false,
          "sent": true,
          "shareId": 23,
          "type": "direct"
        }
      ],
      "requireEmail": true,
      "resent": null,
      "status": 1,
      "trackingStatus": "complete",
      "type": "shared_folder"
    },
    "id": 655621,
    "relationships": {
      "messages": [
        {
          "data": {
            "id": 21,
            "type": "message"
          }
        }
      ],
      "notifications": [
        {
          "data": {
            "id": 9,
            "type": "notification"
          }
        }
      ],
      "owner": {
        "data": {
          "id": 12345,
          "type": "string"
        }
      },
      "resources": [
        {
          "data": {
            "id": 12345,
            "type": "resource"
          }
        }
      ]
    },
    "type": "share"
  },
  "included": [
    {
      "attributes": {
        "accessTimestamp": "2011-03-21T00:18:56-07:00",
        "accountName": "exampleaccount",
        "created": "2018-07-27T15:43:55-07:00",
        "email": "example@exavault.mail",
        "expiration": "2020-06-30T13:33:30-07:00",
        "firstLogin": false,
        "homePath": "/",
        "locked": false,
        "modified": "2018-07-29T15:43:55-07:00",
        "nickname": "exampleuser",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Chicago",
        "username": "exampleuser"
      },
      "id": 655621,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 0,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 0,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "responseStatus": 200
}
```

Response object for shares.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Share](#schemashare)|false|none|Object contains share properties.|
|included|[[User](#schemauser) \| [Notification](#schemanotification) \| [Resource](#schemaresource)]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "attributes": {
    "accessTimestamp": "2011-03-21T00:18:56-07:00",
    "accountName": "exampleaccount",
    "created": "2018-07-27T15:43:55-07:00",
    "email": "example@exavault.mail",
    "expiration": "2020-06-30T13:33:30-07:00",
    "firstLogin": false,
    "homePath": "/",
    "locked": false,
    "modified": "2018-07-29T15:43:55-07:00",
    "nickname": "exampleuser",
    "onboarding": false,
    "permissions": {
      "changePassword": true,
      "delete": true,
      "deleteFormData": true,
      "download": true,
      "list": true,
      "modify": true,
      "notification": true,
      "share": true,
      "upload": true,
      "viewFormData": true
    },
    "role": "user",
    "status": 1,
    "timeZone": "America/Chicago",
    "username": "exampleuser"
  },
  "id": 655621,
  "relationships": {
    "homeResource": {
      "data": {
        "id": 0,
        "type": "resource"
      }
    },
    "ownerAccount": {
      "data": {
        "id": 0,
        "type": "account"
      }
    }
  },
  "type": "user"
}
```

Object contains user properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[UserAttributes](#schemauserattributes)|false|none|Attributes of the user including expiration, home directory, and permissions. |
|id|integer(int32)|false|none|ID of the user.|
|relationships|object|false|none|Home resource and owner account relationship data for the user. |
|type|string|false|none|Type of object being returned. Always "user"|

<h2 id="tocS_UserAttributes">UserAttributes</h2>
<!-- backwards compatibility -->
<a id="schemauserattributes"></a>
<a id="schema_UserAttributes"></a>
<a id="tocSuserattributes"></a>
<a id="tocsuserattributes"></a>

```json
{
  "accessTimestamp": "2011-03-21T00:18:56-07:00",
  "accountName": "exampleaccount",
  "created": "2018-07-27T15:43:55-07:00",
  "email": "example@exavault.mail",
  "expiration": "2020-06-30T13:33:30-07:00",
  "firstLogin": false,
  "homePath": "/",
  "locked": false,
  "modified": "2018-07-29T15:43:55-07:00",
  "nickname": "exampleuser",
  "onboarding": false,
  "permissions": {
    "changePassword": true,
    "delete": true,
    "deleteFormData": true,
    "download": true,
    "list": true,
    "modify": true,
    "notification": true,
    "share": true,
    "upload": true,
    "viewFormData": true
  },
  "role": "user",
  "status": 1,
  "timeZone": "America/Chicago",
  "username": "exampleuser"
}
```

Attributes of the user including expiration, home directory, and permissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessTimestamp|string|false|none|Timestamp of most recent successful user login.|
|accountName|string|true|none|Name of the account this user belongs to.|
|created|string(date-time)|true|none|Timestamp of user creation.|
|email|string|false|none|Email address of the user.|
|expiration|string|false|none|Timestamp of user expiration.|
|firstLogin|boolean|false|none|`true` if the user has logged into the system.|
|homePath|string|false|none|Path to the user's home folder.|
|locked|boolean|false|none|`true` if the user is locked and cannot log in.|
|modified|string(date-time)|true|none|Timestamp of user modification.|
|nickname|string|true|none|Nickname of the user.|
|onboarding|boolean|true|none|Whether the onboarding help system is enabled for this user. `true` means that additional help popups are displayed in the web application for this user.|
|permissions|[UserPermissions](#schemauserpermissions)|true|none|none|
|role|string|true|none|User's access level|
|status|integer(int32)|true|none|Indicates user activity status. `0` means the user is locked and cannot log in. `1` means the user is active and can log in.|
|timeZone|string|true|none|User's timezone. See <a href='https://php.net/manual/en/timezones.php' target='blank'>this page</a> for allowed values.|
|username|string|true|none|Username of the user.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|user|
|role|admin|
|role|master|
|status|0|
|status|1|

<h2 id="tocS_UserCollectionResponse">UserCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemausercollectionresponse"></a>
<a id="schema_UserCollectionResponse"></a>
<a id="tocSusercollectionresponse"></a>
<a id="tocsusercollectionresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "accessTimestamp": "2011-03-21T00:18:56-07:00",
        "accountName": "exampleaccount",
        "created": "2018-07-27T15:43:55-07:00",
        "email": "example@exavault.mail",
        "expiration": "2020-06-30T13:33:30-07:00",
        "firstLogin": false,
        "homePath": "/",
        "locked": false,
        "modified": "2018-07-29T15:43:55-07:00",
        "nickname": "exampleuser",
        "onboarding": false,
        "permissions": {
          "changePassword": true,
          "delete": true,
          "deleteFormData": true,
          "download": true,
          "list": true,
          "modify": true,
          "notification": true,
          "share": true,
          "upload": true,
          "viewFormData": true
        },
        "role": "user",
        "status": 1,
        "timeZone": "America/Chicago",
        "username": "exampleuser"
      },
      "id": 655621,
      "relationships": {
        "homeResource": {
          "data": {
            "id": 0,
            "type": "resource"
          }
        },
        "ownerAccount": {
          "data": {
            "id": 0,
            "type": "account"
          }
        }
      },
      "type": "user"
    }
  ],
  "included": [
    {
      "attributes": {
        "accountName": "string",
        "accountOnboarding": false,
        "allowedIp": [
          {
            "ipEnd": "192.30.24.5",
            "ipStart": "192.30.23.2"
          }
        ],
        "branding": true,
        "brandingSettings": {
          "companyName": null,
          "customEmail": "custom@example.com",
          "logo": "examplelogo.png",
          "logoExt": "png",
          "theme": "default",
          "verifiedDomain": "string",
          "verifiedDomainId": "string",
          "verifiedDomainValid": true
        },
        "clientId": 1,
        "complexPasswords": false,
        "created": "2017-01-12T09:06:21Z",
        "customDomain": true,
        "customSignature": null,
        "externalDomains": [],
        "maxUsers": 1000,
        "modified": "2017-06-03T20:42:05Z",
        "planDetails": {
          "apiKeys": 0,
          "apiTokens": 0,
          "colorSchema": true,
          "customDomain": true,
          "customName": true,
          "directLinks": true,
          "ipWhitelist": true,
          "sharingOptions": [
            "string"
          ],
          "sshKeys": 0,
          "storageAddOn": 0,
          "unlimitedUsers": true,
          "userExpiration": true,
          "userImport": true,
          "webhookOptions": {
            "amount": 0,
            "includeTriggers": "string",
            "restrictionTypes": [
              "string"
            ]
          }
        },
        "quota": {
          "bandwidthLimit": 0,
          "bandwidthUsed": 0,
          "diskLimit": 375809638400,
          "diskUsed": 1225352192,
          "noticeEnabled": true,
          "noticeThreshold": 80,
          "transactionsLimit": 0,
          "transactionsNoticeEnabled": true,
          "transactionsNoticeThreshold": 0
        },
        "secureOnly": false,
        "showReferralLinks": true,
        "status": 1,
        "userCount": 3,
        "welcomeEmailContent": "Welcome to your new account!",
        "welcomeEmailSubject": "ExaVault File Sharing Account"
      },
      "id": 13758,
      "relationships": {
        "masterUser": {
          "data": {
            "id": 0,
            "type": "user"
          }
        }
      },
      "type": "account"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|included|[[Account](#schemaaccount) \| [Resource](#schemaresource)]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response. |
|returnedResults|integer|false|none|Number of results returned.|
|totalResults|integer|false|none|Total results found.|

<h2 id="tocS_UserPermissions">UserPermissions</h2>
<!-- backwards compatibility -->
<a id="schemauserpermissions"></a>
<a id="schema_UserPermissions"></a>
<a id="tocSuserpermissions"></a>
<a id="tocsuserpermissions"></a>

```json
{
  "changePassword": true,
  "delete": true,
  "deleteFormData": true,
  "download": true,
  "list": true,
  "modify": true,
  "notification": true,
  "share": true,
  "upload": true,
  "viewFormData": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changePassword|boolean|true|none|Change (own) password permission flag|
|delete|boolean|true|none|Delete permission flag|
|deleteFormData|boolean|true|none|Delete form data permission flag. If true, user can remove data that was submitted for a receive folder. This applies only to data submitted in the receive folder form, not the actual files uploaded.|
|download|boolean|true|none|Download permission flag|
|list|boolean|true|none|View folder contents permission flag|
|modify|boolean|true|none|Modify permission flag|
|notification|boolean|true|none|Notifications permission flag|
|share|boolean|true|none|Sharing permission flag|
|upload|boolean|true|none|Upload permission flag|
|viewFormData|boolean|true|none|Access Form Data permission flag. If true, user can view submissions that have been stored for a receive folder. This includes any data submitted in the receive folder form.|

<h2 id="tocS_UserResponse">UserResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserresponse"></a>
<a id="schema_UserResponse"></a>
<a id="tocSuserresponse"></a>
<a id="tocsuserresponse"></a>

```json
{
  "data": {
    "attributes": {
      "accessTimestamp": "2011-03-21T00:18:56-07:00",
      "accountName": "exampleaccount",
      "created": "2018-07-27T15:43:55-07:00",
      "email": "example@exavault.mail",
      "expiration": "2020-06-30T13:33:30-07:00",
      "firstLogin": false,
      "homePath": "/",
      "locked": false,
      "modified": "2018-07-29T15:43:55-07:00",
      "nickname": "exampleuser",
      "onboarding": false,
      "permissions": {
        "changePassword": true,
        "delete": true,
        "deleteFormData": true,
        "download": true,
        "list": true,
        "modify": true,
        "notification": true,
        "share": true,
        "upload": true,
        "viewFormData": true
      },
      "role": "user",
      "status": 1,
      "timeZone": "America/Chicago",
      "username": "exampleuser"
    },
    "id": 655621,
    "relationships": {
      "homeResource": {
        "data": {
          "id": 0,
          "type": "resource"
        }
      },
      "ownerAccount": {
        "data": {
          "id": 0,
          "type": "account"
        }
      }
    },
    "type": "user"
  },
  "included": [
    {
      "attributes": {
        "accountName": "string",
        "accountOnboarding": false,
        "allowedIp": [
          {
            "ipEnd": "192.30.24.5",
            "ipStart": "192.30.23.2"
          }
        ],
        "branding": true,
        "brandingSettings": {
          "companyName": null,
          "customEmail": "custom@example.com",
          "logo": "examplelogo.png",
          "logoExt": "png",
          "theme": "default",
          "verifiedDomain": "string",
          "verifiedDomainId": "string",
          "verifiedDomainValid": true
        },
        "clientId": 1,
        "complexPasswords": false,
        "created": "2017-01-12T09:06:21Z",
        "customDomain": true,
        "customSignature": null,
        "externalDomains": [],
        "maxUsers": 1000,
        "modified": "2017-06-03T20:42:05Z",
        "planDetails": {
          "apiKeys": 0,
          "apiTokens": 0,
          "colorSchema": true,
          "customDomain": true,
          "customName": true,
          "directLinks": true,
          "ipWhitelist": true,
          "sharingOptions": [
            "string"
          ],
          "sshKeys": 0,
          "storageAddOn": 0,
          "unlimitedUsers": true,
          "userExpiration": true,
          "userImport": true,
          "webhookOptions": {
            "amount": 0,
            "includeTriggers": "string",
            "restrictionTypes": [
              "string"
            ]
          }
        },
        "quota": {
          "bandwidthLimit": 0,
          "bandwidthUsed": 0,
          "diskLimit": 375809638400,
          "diskUsed": 1225352192,
          "noticeEnabled": true,
          "noticeThreshold": 80,
          "transactionsLimit": 0,
          "transactionsNoticeEnabled": true,
          "transactionsNoticeThreshold": 0
        },
        "secureOnly": false,
        "showReferralLinks": true,
        "status": 1,
        "userCount": 3,
        "welcomeEmailContent": "Welcome to your new account!",
        "welcomeEmailSubject": "ExaVault File Sharing Account"
      },
      "id": 13758,
      "relationships": {
        "masterUser": {
          "data": {
            "id": 0,
            "type": "user"
          }
        }
      },
      "type": "account"
    }
  ],
  "responseStatus": 200
}
```

Response object for users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[User](#schemauser)|false|none|Object contains user properties.|
|included|[[Account](#schemaaccount) \| [Resource](#schemaresource)]|false|none|none|
|responseStatus|integer|false|none|Http code for the response.|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "attributes": {
    "created": "2021-03-04T22:22:00-08:00",
    "endpointUrl": "https://example.com/webhook",
    "failed": true,
    "modified": "2021-03-04T22:23:03-08:00",
    "responseVersion": "v2",
    "triggers": {
      "resources": {
        "compress": true,
        "copy": true,
        "createFolder": true,
        "delete": true,
        "download": true,
        "extract": true,
        "move": true,
        "rename": true,
        "upload": true
      },
      "shares": {
        "formSubmit": true
      }
    },
    "verificationToken": "8df8200f7dee90ba4a41abe39c858c6c"
  },
  "id": 0,
  "relationships": {
    "ownerAccount": {
      "data": {
        "id": 23422,
        "type": "account"
      }
    },
    "resource": {
      "data": {
        "id": 134122,
        "type": "resource"
      }
    }
  },
  "type": "webhook"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[WebhookAttributes](#schemawebhookattributes)|false|none|none|
|id|integer|false|none|none|
|relationships|object|false|none|none|
|type|string|false|none|Type of thing it is. "webhook"|

<h2 id="tocS_WebhookActivityAttributesV1">WebhookActivityAttributesV1</h2>
<!-- backwards compatibility -->
<a id="schemawebhookactivityattributesv1"></a>
<a id="schema_WebhookActivityAttributesV1"></a>
<a id="tocSwebhookactivityattributesv1"></a>
<a id="tocswebhookactivityattributesv1"></a>

```json
{
  "accountId": "string",
  "attemptId": "string",
  "created": "string",
  "details": {
    "accountName": "string",
    "attempt": 0,
    "attemptId": "string",
    "event": "string",
    "protocol": "string",
    "username": "string"
  },
  "endpointUrl": "http://example.com",
  "event": "resources.upload",
  "ipAddress": "string",
  "resend": true,
  "resourcePath": "string",
  "response": "string",
  "status": 0,
  "username": "string",
  "webhookFormat": "string",
  "webhookId": 0,
  "webhookPath": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Unique ID of account|
|attemptId|string|false|none|Event - retry identifier|
|created|string|false|none|Date and time of webhook message being generated by system|
|details|object|false|none|none|
|endpointUrl|string(uri)|false|none|The URL the message was sent to|
|event|string|false|none|Event type|
|ipAddress|string|false|none|IP Address of related activity|
|resend|boolean|false|none|Whether this attempt was a re-send of a previous attempt|
|resourcePath|string|false|none|Path of resource that matched webhook|
|response|string|false|none|Body of web response returned by webhook listener|
|status|integer|false|none|HTTP Status Code returned by webhook listener|
|username|string|false|none|Username of related activity|
|webhookFormat|string|false|none|What version of webhook message is being sent `v1`|
|webhookId|integer|false|none|Unique ID of webhook configuration|
|webhookPath|string|false|none|Path that webhook is watching|

#### Enumerated Values

|Property|Value|
|---|---|
|event|resources.upload|
|event|resources.download|
|event|resources.delete|
|event|resources.rename|
|event|resources.copy|
|event|resources.move|
|event|resources.compress|
|event|resources.extract|
|event|resources.createFolder|
|event|shares.formSubmit|

<h2 id="tocS_WebhookActivityAttributesV2">WebhookActivityAttributesV2</h2>
<!-- backwards compatibility -->
<a id="schemawebhookactivityattributesv2"></a>
<a id="schema_WebhookActivityAttributesV2"></a>
<a id="tocSwebhookactivityattributesv2"></a>
<a id="tocswebhookactivityattributesv2"></a>

```json
{
  "accountId": "string",
  "attemptId": "string",
  "created": "string",
  "details": {
    "accountName": "string",
    "attemptId": "string",
    "event": "string",
    "eventData": {
      "formDetails": [
        {}
      ],
      "resources": [
        {
          "accessedAt": "1970-01-01T00:00:00Z",
          "createdAt": "1970-01-01T00:00:00Z",
          "createdBy": "string",
          "fileCount": 0,
          "hash": "string",
          "id": 0,
          "name": "string",
          "path": "string",
          "previewable": true,
          "size": 0,
          "type": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "uploadDate": "1970-01-01T00:00:00Z"
        }
      ],
      "share": [
        {
          "accessDescription": "string",
          "accessMode": {
            "delete": true,
            "download": true,
            "modify": true,
            "upload": true
          },
          "assets": [
            "string"
          ],
          "created": "1970-01-01T00:00:00Z",
          "embed": true,
          "expiration": "string",
          "expired": true,
          "fileDropCreateFolders": true,
          "formId": 0,
          "hasNotification": true,
          "hasPassword": true,
          "hash": "string",
          "id": 0,
          "inherited": true,
          "isPublic": true,
          "messages": [
            {
              "body": "You have files available for download.",
              "created": "2017-01-26T18:10:47Z",
              "id": 397584,
              "modified": "2017-01-28T13:10:47Z",
              "shareId": 3544253,
              "subject": "Files available for download",
              "userId": 119394
            }
          ],
          "modified": "1970-01-01T00:00:00Z",
          "name": "string",
          "ownerHash": "string",
          "paths": [
            "string"
          ],
          "recipients": [
            {
              "created": "2017-01-26T18:10:47Z",
              "email": "recipient@example.com",
              "hash": "fseowxan",
              "id": 2,
              "received": false,
              "sent": true,
              "shareId": 23,
              "type": "owner"
            }
          ],
          "requireEmail": true,
          "resent": true,
          "status": 0,
          "trackingStatus": "string",
          "type": "string"
        }
      ],
      "transferStatus": "string"
    },
    "eventTimestamp": "1970-01-01T00:00:00Z",
    "ipAddress": "string",
    "protocol": "string",
    "username": "string"
  },
  "endpointUrl": "http://example.com",
  "event": "resources.upload",
  "ipAddress": "string",
  "resend": true,
  "resourcePath": "string",
  "response": "string",
  "status": 0,
  "username": "string",
  "webhookFormat": "string",
  "webhookId": 0,
  "webhookPath": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Unique ID of account|
|attemptId|string|false|none|Event - retry identifier|
|created|string|false|none|Date and time of webhook message being generated by system|
|details|object|false|none|none|
|endpointUrl|string(uri)|false|none|The URL the message was sent to|
|event|string|false|none|Event type|
|ipAddress|string|false|none|IP Address of related activity|
|resend|boolean|false|none|Whether this attempt was a re-send of a previous attempt|
|resourcePath|string|false|none|Path of resource that matched webhook|
|response|string|false|none|Body of web response returned by webhook listener|
|status|integer|false|none|HTTP Status Code returned by webhook listener|
|username|string|false|none|Username of related activity|
|webhookFormat|string|false|none|What version of webhook message is being sent `v2`|
|webhookId|integer|false|none|Unique ID of webhook configuration|
|webhookPath|string|false|none|Path that webhook is watching|

#### Enumerated Values

|Property|Value|
|---|---|
|event|resources.upload|
|event|resources.download|
|event|resources.delete|
|event|resources.rename|
|event|resources.copy|
|event|resources.move|
|event|resources.compress|
|event|resources.extract|
|event|resources.createFolder|
|event|shares.formSubmit|

<h2 id="tocS_WebhookActivityEntry">WebhookActivityEntry</h2>
<!-- backwards compatibility -->
<a id="schemawebhookactivityentry"></a>
<a id="schema_WebhookActivityEntry"></a>
<a id="tocSwebhookactivityentry"></a>
<a id="tocswebhookactivityentry"></a>

```json
{
  "attributes": {
    "accountId": "string",
    "attemptId": "string",
    "created": "string",
    "details": {
      "accountName": "string",
      "attemptId": "string",
      "event": "string",
      "eventData": {
        "formDetails": [
          {}
        ],
        "resources": [
          {
            "accessedAt": "1970-01-01T00:00:00Z",
            "createdAt": "1970-01-01T00:00:00Z",
            "createdBy": "string",
            "fileCount": 0,
            "hash": "string",
            "id": 0,
            "name": "string",
            "path": "string",
            "previewable": true,
            "size": 0,
            "type": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "uploadDate": "1970-01-01T00:00:00Z"
          }
        ],
        "share": [
          {
            "accessDescription": "string",
            "accessMode": {
              "delete": true,
              "download": true,
              "modify": true,
              "upload": true
            },
            "assets": [
              "string"
            ],
            "created": "1970-01-01T00:00:00Z",
            "embed": true,
            "expiration": "string",
            "expired": true,
            "fileDropCreateFolders": true,
            "formId": 0,
            "hasNotification": true,
            "hasPassword": true,
            "hash": "string",
            "id": 0,
            "inherited": true,
            "isPublic": true,
            "messages": [
              {
                "body": "You have files available for download.",
                "created": "2017-01-26T18:10:47Z",
                "id": 397584,
                "modified": "2017-01-28T13:10:47Z",
                "shareId": 3544253,
                "subject": "Files available for download",
                "userId": 119394
              }
            ],
            "modified": "1970-01-01T00:00:00Z",
            "name": "string",
            "ownerHash": "string",
            "paths": [
              "string"
            ],
            "recipients": [
              {
                "created": "2017-01-26T18:10:47Z",
                "email": "recipient@example.com",
                "hash": "fseowxan",
                "id": 2,
                "received": false,
                "sent": true,
                "shareId": 23,
                "type": "owner"
              }
            ],
            "requireEmail": true,
            "resent": true,
            "status": 0,
            "trackingStatus": "string",
            "type": "string"
          }
        ],
        "transferStatus": "string"
      },
      "eventTimestamp": "1970-01-01T00:00:00Z",
      "ipAddress": "string",
      "protocol": "string",
      "username": "string"
    },
    "endpointUrl": "http://example.com",
    "event": "resources.upload",
    "ipAddress": "string",
    "resend": true,
    "resourcePath": "string",
    "response": "string",
    "status": 0,
    "username": "string",
    "webhookFormat": "string",
    "webhookId": 0,
    "webhookPath": "string"
  },
  "id": 12345,
  "type": "webhookActivity"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[WebhookActivityAttributesV2](#schemawebhookactivityattributesv2) \| [WebhookActivityAttributesV1](#schemawebhookactivityattributesv1)|false|none|none|
|id|integer(int64)|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|webhookActivity|

<h2 id="tocS_WebhookActivityResponse">WebhookActivityResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebhookactivityresponse"></a>
<a id="schema_WebhookActivityResponse"></a>
<a id="tocSwebhookactivityresponse"></a>
<a id="tocswebhookactivityresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "accountId": "string",
        "attemptId": "string",
        "created": "string",
        "details": {
          "accountName": "string",
          "attemptId": "string",
          "event": "string",
          "eventData": {
            "formDetails": [
              {}
            ],
            "resources": [
              {
                "accessedAt": "1970-01-01T00:00:00Z",
                "createdAt": "1970-01-01T00:00:00Z",
                "createdBy": "string",
                "fileCount": 0,
                "hash": "string",
                "id": 0,
                "name": "string",
                "path": "string",
                "previewable": true,
                "size": 0,
                "type": "string",
                "updatedAt": "1970-01-01T00:00:00Z",
                "uploadDate": "1970-01-01T00:00:00Z"
              }
            ],
            "share": [
              {
                "accessDescription": "string",
                "accessMode": {
                  "delete": true,
                  "download": true,
                  "modify": true,
                  "upload": true
                },
                "assets": [
                  "string"
                ],
                "created": "1970-01-01T00:00:00Z",
                "embed": true,
                "expiration": "string",
                "expired": true,
                "fileDropCreateFolders": true,
                "formId": 0,
                "hasNotification": true,
                "hasPassword": true,
                "hash": "string",
                "id": 0,
                "inherited": true,
                "isPublic": true,
                "messages": [
                  {
                    "body": "You have files available for download.",
                    "created": "2017-01-26T18:10:47Z",
                    "id": 397584,
                    "modified": "2017-01-28T13:10:47Z",
                    "shareId": 3544253,
                    "subject": "Files available for download",
                    "userId": 119394
                  }
                ],
                "modified": "1970-01-01T00:00:00Z",
                "name": "string",
                "ownerHash": "string",
                "paths": [
                  "string"
                ],
                "recipients": [
                  {
                    "created": "2017-01-26T18:10:47Z",
                    "email": "recipient@example.com",
                    "hash": "fseowxan",
                    "id": 2,
                    "received": false,
                    "sent": true,
                    "shareId": 23,
                    "type": "owner"
                  }
                ],
                "requireEmail": true,
                "resent": true,
                "status": 0,
                "trackingStatus": "string",
                "type": "string"
              }
            ],
            "transferStatus": "string"
          },
          "eventTimestamp": "1970-01-01T00:00:00Z",
          "ipAddress": "string",
          "protocol": "string",
          "username": "string"
        },
        "endpointUrl": "http://example.com",
        "event": "resources.upload",
        "ipAddress": "string",
        "resend": true,
        "resourcePath": "string",
        "response": "string",
        "status": 0,
        "username": "string",
        "webhookFormat": "string",
        "webhookId": 0,
        "webhookPath": "string"
      },
      "id": 12345,
      "type": "webhookActivity"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 2
}
```

Session activity list response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WebhookActivityEntry](#schemawebhookactivityentry)]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response.|
|returnedResults|integer|false|none|Number of results returned. |
|totalResults|integer|false|none|Total results found.|

<h2 id="tocS_WebhookAttributes">WebhookAttributes</h2>
<!-- backwards compatibility -->
<a id="schemawebhookattributes"></a>
<a id="schema_WebhookAttributes"></a>
<a id="tocSwebhookattributes"></a>
<a id="tocswebhookattributes"></a>

```json
{
  "created": "2021-03-04T22:22:00-08:00",
  "endpointUrl": "https://example.com/webhook",
  "failed": true,
  "modified": "2021-03-04T22:23:03-08:00",
  "responseVersion": "v2",
  "triggers": {
    "resources": {
      "compress": true,
      "copy": true,
      "createFolder": true,
      "delete": true,
      "download": true,
      "extract": true,
      "move": true,
      "rename": true,
      "upload": true
    },
    "shares": {
      "formSubmit": true
    }
  },
  "verificationToken": "8df8200f7dee90ba4a41abe39c858c6c"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|Timestamp when webhook configuration was added to system.|
|endpointUrl|string(uri)|false|none|The endpoint is where the webhook request will be sent.|
|failed|boolean|false|none|Whether webhook has been disabled for too many consecutive failures|
|modified|string(date-time)|false|none|Timestamp when webhook configuration was last modified|
|responseVersion|string|false|none|The version of webhook request to send to the endpoint URL|
|triggers|[WebhookTriggers](#schemawebhooktriggers)|false|none|none|
|verificationToken|string|false|none|Token for verifying sender is ExaVault|

#### Enumerated Values

|Property|Value|
|---|---|
|responseVersion|v1|
|responseVersion|v2|

<h2 id="tocS_WebhookCollectionResponse">WebhookCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebhookcollectionresponse"></a>
<a id="schema_WebhookCollectionResponse"></a>
<a id="tocSwebhookcollectionresponse"></a>
<a id="tocswebhookcollectionresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "created": "2021-03-04T22:22:00-08:00",
        "endpointUrl": "https://example.com/webhook",
        "failed": true,
        "modified": "2021-03-04T22:23:03-08:00",
        "responseVersion": "v2",
        "triggers": {
          "resources": {
            "compress": true,
            "copy": true,
            "createFolder": true,
            "delete": true,
            "download": true,
            "extract": true,
            "move": true,
            "rename": true,
            "upload": true
          },
          "shares": {
            "formSubmit": true
          }
        },
        "verificationToken": "8df8200f7dee90ba4a41abe39c858c6c"
      },
      "id": 0,
      "relationships": {
        "ownerAccount": {
          "data": {
            "id": 23422,
            "type": "account"
          }
        },
        "resource": {
          "data": {
            "id": 134122,
            "type": "resource"
          }
        }
      },
      "type": "webhook"
    }
  ],
  "included": [
    {
      "attributes": {
        "accountName": "string",
        "accountOnboarding": false,
        "allowedIp": [
          {
            "ipEnd": "192.30.24.5",
            "ipStart": "192.30.23.2"
          }
        ],
        "branding": true,
        "brandingSettings": {
          "companyName": null,
          "customEmail": "custom@example.com",
          "logo": "examplelogo.png",
          "logoExt": "png",
          "theme": "default",
          "verifiedDomain": "string",
          "verifiedDomainId": "string",
          "verifiedDomainValid": true
        },
        "clientId": 1,
        "complexPasswords": false,
        "created": "2017-01-12T09:06:21Z",
        "customDomain": true,
        "customSignature": null,
        "externalDomains": [],
        "maxUsers": 1000,
        "modified": "2017-06-03T20:42:05Z",
        "planDetails": {
          "apiKeys": 0,
          "apiTokens": 0,
          "colorSchema": true,
          "customDomain": true,
          "customName": true,
          "directLinks": true,
          "ipWhitelist": true,
          "sharingOptions": [
            "string"
          ],
          "sshKeys": 0,
          "storageAddOn": 0,
          "unlimitedUsers": true,
          "userExpiration": true,
          "userImport": true,
          "webhookOptions": {
            "amount": 0,
            "includeTriggers": "string",
            "restrictionTypes": [
              "string"
            ]
          }
        },
        "quota": {
          "bandwidthLimit": 0,
          "bandwidthUsed": 0,
          "diskLimit": 375809638400,
          "diskUsed": 1225352192,
          "noticeEnabled": true,
          "noticeThreshold": 80,
          "transactionsLimit": 0,
          "transactionsNoticeEnabled": true,
          "transactionsNoticeThreshold": 0
        },
        "secureOnly": false,
        "showReferralLinks": true,
        "status": 1,
        "userCount": 3,
        "welcomeEmailContent": "Welcome to your new account!",
        "welcomeEmailSubject": "ExaVault File Sharing Account"
      },
      "id": 13758,
      "relationships": {
        "masterUser": {
          "data": {
            "id": 0,
            "type": "user"
          }
        }
      },
      "type": "account"
    }
  ],
  "responseStatus": 200,
  "returnedResults": 2,
  "totalResults": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Webhook](#schemawebhook)]|false|none|none|
|included|[[Account](#schemaaccount) \| [Resource](#schemaresource)]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response. |
|returnedResults|integer|false|none|Number of results returned.|
|totalResults|integer|false|none|Total results found.|

<h2 id="tocS_WebhookResponse">WebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebhookresponse"></a>
<a id="schema_WebhookResponse"></a>
<a id="tocSwebhookresponse"></a>
<a id="tocswebhookresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "created": "2021-03-04T22:22:00-08:00",
        "endpointUrl": "https://example.com/webhook",
        "failed": true,
        "modified": "2021-03-04T22:23:03-08:00",
        "responseVersion": "v2",
        "triggers": {
          "resources": {
            "compress": true,
            "copy": true,
            "createFolder": true,
            "delete": true,
            "download": true,
            "extract": true,
            "move": true,
            "rename": true,
            "upload": true
          },
          "shares": {
            "formSubmit": true
          }
        },
        "verificationToken": "8df8200f7dee90ba4a41abe39c858c6c"
      },
      "id": 0,
      "relationships": {
        "ownerAccount": {
          "data": {
            "id": 23422,
            "type": "account"
          }
        },
        "resource": {
          "data": {
            "id": 134122,
            "type": "resource"
          }
        }
      },
      "type": "webhook"
    }
  ],
  "included": [
    {
      "attributes": {
        "accountName": "string",
        "accountOnboarding": false,
        "allowedIp": [
          {
            "ipEnd": "192.30.24.5",
            "ipStart": "192.30.23.2"
          }
        ],
        "branding": true,
        "brandingSettings": {
          "companyName": null,
          "customEmail": "custom@example.com",
          "logo": "examplelogo.png",
          "logoExt": "png",
          "theme": "default",
          "verifiedDomain": "string",
          "verifiedDomainId": "string",
          "verifiedDomainValid": true
        },
        "clientId": 1,
        "complexPasswords": false,
        "created": "2017-01-12T09:06:21Z",
        "customDomain": true,
        "customSignature": null,
        "externalDomains": [],
        "maxUsers": 1000,
        "modified": "2017-06-03T20:42:05Z",
        "planDetails": {
          "apiKeys": 0,
          "apiTokens": 0,
          "colorSchema": true,
          "customDomain": true,
          "customName": true,
          "directLinks": true,
          "ipWhitelist": true,
          "sharingOptions": [
            "string"
          ],
          "sshKeys": 0,
          "storageAddOn": 0,
          "unlimitedUsers": true,
          "userExpiration": true,
          "userImport": true,
          "webhookOptions": {
            "amount": 0,
            "includeTriggers": "string",
            "restrictionTypes": [
              "string"
            ]
          }
        },
        "quota": {
          "bandwidthLimit": 0,
          "bandwidthUsed": 0,
          "diskLimit": 375809638400,
          "diskUsed": 1225352192,
          "noticeEnabled": true,
          "noticeThreshold": 80,
          "transactionsLimit": 0,
          "transactionsNoticeEnabled": true,
          "transactionsNoticeThreshold": 0
        },
        "secureOnly": false,
        "showReferralLinks": true,
        "status": 1,
        "userCount": 3,
        "welcomeEmailContent": "Welcome to your new account!",
        "welcomeEmailSubject": "ExaVault File Sharing Account"
      },
      "id": 13758,
      "relationships": {
        "masterUser": {
          "data": {
            "id": 0,
            "type": "user"
          }
        }
      },
      "type": "account"
    }
  ],
  "responseStatus": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Webhook](#schemawebhook)]|false|none|none|
|included|[[Account](#schemaaccount) \| [Resource](#schemaresource)]|false|none|none|
|responseStatus|integer|false|none|Http status code of the response. |

<h2 id="tocS_WebhookTriggers">WebhookTriggers</h2>
<!-- backwards compatibility -->
<a id="schemawebhooktriggers"></a>
<a id="schema_WebhookTriggers"></a>
<a id="tocSwebhooktriggers"></a>
<a id="tocswebhooktriggers"></a>

```json
{
  "resources": {
    "compress": true,
    "copy": true,
    "createFolder": true,
    "delete": true,
    "download": true,
    "extract": true,
    "move": true,
    "rename": true,
    "upload": true
  },
  "shares": {
    "formSubmit": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resources|object|false|none|none|
|shares|object|false|none|none|
