<h1 id="google-drive-api">Google Drive API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Google Drive API allows clients to access resources from Google Drive.

Base URLs:

* <a href="https://www.googleapis.com/drive/v3">https://www.googleapis.com/drive/v3</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/drive/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/drive|See, edit, create, and delete all of your Google Drive files|
|https://www.googleapis.com/auth/drive.appdata|See, create, and delete its own configuration data in your Google Drive|
|https://www.googleapis.com/auth/drive.apps.readonly|View your Google Drive apps|
|https://www.googleapis.com/auth/drive.file|See, edit, create, and delete only the specific Google Drive files you use with this app|
|https://www.googleapis.com/auth/drive.metadata|View and manage metadata of files in your Google Drive|
|https://www.googleapis.com/auth/drive.metadata.readonly|See information about your Google Drive files|
|https://www.googleapis.com/auth/drive.photos.readonly|View the photos, videos and albums in your Google Photos|
|https://www.googleapis.com/auth/drive.readonly|See and download all your Google Drive files|
|https://www.googleapis.com/auth/drive.scripts|Modify your Google Apps Script scripts' behavior|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/drive|See, edit, create, and delete all of your Google Drive files|
|https://www.googleapis.com/auth/drive.appdata|See, create, and delete its own configuration data in your Google Drive|
|https://www.googleapis.com/auth/drive.apps.readonly|View your Google Drive apps|
|https://www.googleapis.com/auth/drive.file|See, edit, create, and delete only the specific Google Drive files you use with this app|
|https://www.googleapis.com/auth/drive.metadata|View and manage metadata of files in your Google Drive|
|https://www.googleapis.com/auth/drive.metadata.readonly|See information about your Google Drive files|
|https://www.googleapis.com/auth/drive.photos.readonly|View the photos, videos and albums in your Google Photos|
|https://www.googleapis.com/auth/drive.readonly|See and download all your Google Drive files|
|https://www.googleapis.com/auth/drive.scripts|Modify your Google Apps Script scripts' behavior|

<h1 id="google-drive-api-about">about</h1>

## drive.about.get

<a id="opIddrive.about.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/about \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /about`

Gets information about the user, the user's Drive, and system capabilities.

<h3 id="driveaboutget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "appInstalled": true,
  "canCreateDrives": true,
  "canCreateTeamDrives": true,
  "driveThemes": [
    {
      "backgroundImageLink": "string",
      "colorRgb": "string",
      "id": "string"
    }
  ],
  "exportFormats": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "folderColorPalette": [
    "string"
  ],
  "importFormats": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "kind": "drive#about",
  "maxImportSizes": {
    "property1": "string",
    "property2": "string"
  },
  "maxUploadSize": "string",
  "storageQuota": {
    "limit": "string",
    "usage": "string",
    "usageInDrive": "string",
    "usageInDriveTrash": "string"
  },
  "teamDriveThemes": [
    {
      "backgroundImageLink": "string",
      "colorRgb": "string",
      "id": "string"
    }
  ],
  "user": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  }
}
```

<h3 id="driveaboutget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[About](#schemaabout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

<h1 id="google-drive-api-apps">apps</h1>

## drive.apps.list

<a id="opIddrive.apps.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/apps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps`

Lists a user's installed apps.

<h3 id="driveappslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appFilterExtensions|query|string|false|A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given file extensions are included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists.|
|appFilterMimeTypes|query|string|false|A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists.|
|languageCode|query|string|false|A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "defaultAppIds": [
    "string"
  ],
  "items": [
    {
      "authorized": true,
      "createInFolderTemplate": "string",
      "createUrl": "string",
      "hasDriveWideScope": true,
      "icons": [
        {
          "category": "string",
          "iconUrl": "string",
          "size": 0
        }
      ],
      "id": "string",
      "installed": true,
      "kind": "drive#app",
      "longDescription": "string",
      "name": "string",
      "objectType": "string",
      "openUrlTemplate": "string",
      "primaryFileExtensions": [
        "string"
      ],
      "primaryMimeTypes": [
        "string"
      ],
      "productId": "string",
      "productUrl": "string",
      "secondaryFileExtensions": [
        "string"
      ],
      "secondaryMimeTypes": [
        "string"
      ],
      "shortDescription": "string",
      "supportsCreate": true,
      "supportsImport": true,
      "supportsMultiOpen": true,
      "supportsOfflineCreate": true,
      "useByDefault": true
    }
  ],
  "kind": "drive#appList",
  "selfLink": "string"
}
```

<h3 id="driveappslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AppList](#schemaapplist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.apps.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.apps.readonly )
</aside>

## drive.apps.get

<a id="opIddrive.apps.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/apps/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps/{appId}`

Gets a specific app.

<h3 id="driveappsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The ID of the app.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "authorized": true,
  "createInFolderTemplate": "string",
  "createUrl": "string",
  "hasDriveWideScope": true,
  "icons": [
    {
      "category": "string",
      "iconUrl": "string",
      "size": 0
    }
  ],
  "id": "string",
  "installed": true,
  "kind": "drive#app",
  "longDescription": "string",
  "name": "string",
  "objectType": "string",
  "openUrlTemplate": "string",
  "primaryFileExtensions": [
    "string"
  ],
  "primaryMimeTypes": [
    "string"
  ],
  "productId": "string",
  "productUrl": "string",
  "secondaryFileExtensions": [
    "string"
  ],
  "secondaryMimeTypes": [
    "string"
  ],
  "shortDescription": "string",
  "supportsCreate": true,
  "supportsImport": true,
  "supportsMultiOpen": true,
  "supportsOfflineCreate": true,
  "useByDefault": true
}
```

<h3 id="driveappsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[App](#schemaapp)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.apps.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.apps.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

<h1 id="google-drive-api-changes">changes</h1>

## drive.changes.list

<a id="opIddrive.changes.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/drive/v3/changes?pageToken=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /changes`

Lists the changes for a user or shared drive.

<h3 id="drivechangeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageToken|query|string|true|The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.|
|driveId|query|string|false|The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.|
|includeCorpusRemovals|query|boolean|false|Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.|
|includeItemsFromAllDrives|query|boolean|false|Whether both My Drive and shared drive items should be included in results.|
|includeLabels|query|string|false|A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.|
|includePermissionsForView|query|string|false|Specifies which additional view's permissions to include in the response. Only 'published' is supported.|
|includeRemoved|query|boolean|false|Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.|
|includeTeamDriveItems|query|boolean|false|Deprecated: Use `includeItemsFromAllDrives` instead.|
|pageSize|query|integer|false|The maximum number of changes to return per page.|
|restrictToMyDrive|query|boolean|false|Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.|
|spaces|query|string|false|A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|teamDriveId|query|string|false|Deprecated: Use `driveId` instead.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "changes": [
    {
      "changeType": "string",
      "drive": {
        "backgroundImageFile": {
          "id": "string",
          "width": 0,
          "xCoordinate": 0,
          "yCoordinate": 0
        },
        "backgroundImageLink": "string",
        "capabilities": {
          "canAddChildren": true,
          "canChangeCopyRequiresWriterPermissionRestriction": true,
          "canChangeDomainUsersOnlyRestriction": true,
          "canChangeDriveBackground": true,
          "canChangeDriveMembersOnlyRestriction": true,
          "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
          "canComment": true,
          "canCopy": true,
          "canDeleteChildren": true,
          "canDeleteDrive": true,
          "canDownload": true,
          "canEdit": true,
          "canListChildren": true,
          "canManageMembers": true,
          "canReadRevisions": true,
          "canRename": true,
          "canRenameDrive": true,
          "canResetDriveRestrictions": true,
          "canShare": true,
          "canTrashChildren": true
        },
        "colorRgb": "string",
        "createdTime": "1970-01-01T00:00:00Z",
        "hidden": true,
        "id": "string",
        "kind": "drive#drive",
        "name": "string",
        "orgUnitId": "string",
        "restrictions": {
          "adminManagedRestrictions": true,
          "copyRequiresWriterPermission": true,
          "domainUsersOnly": true,
          "driveMembersOnly": true,
          "sharingFoldersRequiresOrganizerPermission": true
        },
        "themeId": "string"
      },
      "driveId": "string",
      "file": {
        "appProperties": {
          "property1": "string",
          "property2": "string"
        },
        "capabilities": {
          "canAcceptOwnership": true,
          "canAddChildren": true,
          "canAddFolderFromAnotherDrive": true,
          "canAddMyDriveParent": true,
          "canChangeCopyRequiresWriterPermission": true,
          "canChangeSecurityUpdateEnabled": true,
          "canChangeViewersCanCopyContent": true,
          "canComment": true,
          "canCopy": true,
          "canDelete": true,
          "canDeleteChildren": true,
          "canDownload": true,
          "canEdit": true,
          "canListChildren": true,
          "canModifyContent": true,
          "canModifyContentRestriction": true,
          "canModifyEditorContentRestriction": true,
          "canModifyLabels": true,
          "canModifyOwnerContentRestriction": true,
          "canMoveChildrenOutOfDrive": true,
          "canMoveChildrenOutOfTeamDrive": true,
          "canMoveChildrenWithinDrive": true,
          "canMoveChildrenWithinTeamDrive": true,
          "canMoveItemIntoTeamDrive": true,
          "canMoveItemOutOfDrive": true,
          "canMoveItemOutOfTeamDrive": true,
          "canMoveItemWithinDrive": true,
          "canMoveItemWithinTeamDrive": true,
          "canMoveTeamDriveItem": true,
          "canReadDrive": true,
          "canReadLabels": true,
          "canReadRevisions": true,
          "canReadTeamDrive": true,
          "canRemoveChildren": true,
          "canRemoveContentRestriction": true,
          "canRemoveMyDriveParent": true,
          "canRename": true,
          "canShare": true,
          "canTrash": true,
          "canTrashChildren": true,
          "canUntrash": true
        },
        "contentHints": {
          "indexableText": "string",
          "thumbnail": {
            "image": "string",
            "mimeType": "string"
          }
        },
        "contentRestrictions": [
          {
            "ownerRestricted": true,
            "readOnly": true,
            "reason": "string",
            "restrictingUser": {
              "displayName": "string",
              "emailAddress": "string",
              "kind": "drive#user",
              "me": true,
              "permissionId": "string",
              "photoLink": "string"
            },
            "restrictionTime": "1970-01-01T00:00:00Z",
            "systemRestricted": true,
            "type": "string"
          }
        ],
        "copyRequiresWriterPermission": true,
        "createdTime": "1970-01-01T00:00:00Z",
        "description": "string",
        "driveId": "string",
        "explicitlyTrashed": true,
        "exportLinks": {
          "property1": "string",
          "property2": "string"
        },
        "fileExtension": "string",
        "folderColorRgb": "string",
        "fullFileExtension": "string",
        "hasAugmentedPermissions": true,
        "hasThumbnail": true,
        "headRevisionId": "string",
        "iconLink": "string",
        "id": "string",
        "imageMediaMetadata": {
          "aperture": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "colorSpace": "string",
          "exposureBias": 0,
          "exposureMode": "string",
          "exposureTime": 0,
          "flashUsed": true,
          "focalLength": 0,
          "height": 0,
          "isoSpeed": 0,
          "lens": "string",
          "location": {
            "altitude": 0,
            "latitude": 0,
            "longitude": 0
          },
          "maxApertureValue": 0,
          "meteringMode": "string",
          "rotation": 0,
          "sensor": "string",
          "subjectDistance": 0,
          "time": "string",
          "whiteBalance": "string",
          "width": 0
        },
        "isAppAuthorized": true,
        "kind": "drive#file",
        "labelInfo": {
          "labels": [
            {
              "fields": {
                "property1": {
                  "dateString": [
                    "1970-01-01"
                  ],
                  "id": "string",
                  "integer": [
                    "string"
                  ],
                  "kind": "string",
                  "selection": [
                    "string"
                  ],
                  "text": [
                    "string"
                  ],
                  "user": [
                    {
                      "displayName": "string",
                      "emailAddress": "string",
                      "kind": "drive#user",
                      "me": true,
                      "permissionId": "string",
                      "photoLink": "string"
                    }
                  ],
                  "valueType": "string"
                },
                "property2": {
                  "dateString": [
                    "1970-01-01"
                  ],
                  "id": "string",
                  "integer": [
                    "string"
                  ],
                  "kind": "string",
                  "selection": [
                    "string"
                  ],
                  "text": [
                    "string"
                  ],
                  "user": [
                    {
                      "displayName": "string",
                      "emailAddress": "string",
                      "kind": "drive#user",
                      "me": true,
                      "permissionId": "string",
                      "photoLink": "string"
                    }
                  ],
                  "valueType": "string"
                }
              },
              "id": "string",
              "kind": "string",
              "revisionId": "string"
            }
          ]
        },
        "lastModifyingUser": {
          "displayName": "string",
          "emailAddress": "string",
          "kind": "drive#user",
          "me": true,
          "permissionId": "string",
          "photoLink": "string"
        },
        "linkShareMetadata": {
          "securityUpdateEligible": true,
          "securityUpdateEnabled": true
        },
        "md5Checksum": "string",
        "mimeType": "string",
        "modifiedByMe": true,
        "modifiedByMeTime": "1970-01-01T00:00:00Z",
        "modifiedTime": "1970-01-01T00:00:00Z",
        "name": "string",
        "originalFilename": "string",
        "ownedByMe": true,
        "owners": [
          {
            "displayName": "string",
            "emailAddress": "string",
            "kind": "drive#user",
            "me": true,
            "permissionId": "string",
            "photoLink": "string"
          }
        ],
        "parents": [
          "string"
        ],
        "permissionIds": [
          "string"
        ],
        "permissions": [
          {
            "allowFileDiscovery": true,
            "deleted": true,
            "displayName": "string",
            "domain": "string",
            "emailAddress": "string",
            "expirationTime": "1970-01-01T00:00:00Z",
            "id": "string",
            "kind": "drive#permission",
            "pendingOwner": true,
            "permissionDetails": [
              {
                "inherited": true,
                "inheritedFrom": "string",
                "permissionType": "string",
                "role": "string"
              }
            ],
            "photoLink": "string",
            "role": "string",
            "teamDrivePermissionDetails": [
              {
                "inherited": true,
                "inheritedFrom": "string",
                "role": "string",
                "teamDrivePermissionType": "string"
              }
            ],
            "type": "string",
            "view": "string"
          }
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "quotaBytesUsed": "string",
        "resourceKey": "string",
        "sha1Checksum": "string",
        "sha256Checksum": "string",
        "shared": true,
        "sharedWithMeTime": "1970-01-01T00:00:00Z",
        "sharingUser": {
          "displayName": "string",
          "emailAddress": "string",
          "kind": "drive#user",
          "me": true,
          "permissionId": "string",
          "photoLink": "string"
        },
        "shortcutDetails": {
          "targetId": "string",
          "targetMimeType": "string",
          "targetResourceKey": "string"
        },
        "size": "string",
        "spaces": [
          "string"
        ],
        "starred": true,
        "teamDriveId": "string",
        "thumbnailLink": "string",
        "thumbnailVersion": "string",
        "trashed": true,
        "trashedTime": "1970-01-01T00:00:00Z",
        "trashingUser": {
          "displayName": "string",
          "emailAddress": "string",
          "kind": "drive#user",
          "me": true,
          "permissionId": "string",
          "photoLink": "string"
        },
        "version": "string",
        "videoMediaMetadata": {
          "durationMillis": "string",
          "height": 0,
          "width": 0
        },
        "viewedByMe": true,
        "viewedByMeTime": "1970-01-01T00:00:00Z",
        "viewersCanCopyContent": true,
        "webContentLink": "string",
        "webViewLink": "string",
        "writersCanShare": true
      },
      "fileId": "string",
      "kind": "drive#change",
      "removed": true,
      "teamDrive": {
        "backgroundImageFile": {
          "id": "string",
          "width": 0,
          "xCoordinate": 0,
          "yCoordinate": 0
        },
        "backgroundImageLink": "string",
        "capabilities": {
          "canAddChildren": true,
          "canChangeCopyRequiresWriterPermissionRestriction": true,
          "canChangeDomainUsersOnlyRestriction": true,
          "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
          "canChangeTeamDriveBackground": true,
          "canChangeTeamMembersOnlyRestriction": true,
          "canComment": true,
          "canCopy": true,
          "canDeleteChildren": true,
          "canDeleteTeamDrive": true,
          "canDownload": true,
          "canEdit": true,
          "canListChildren": true,
          "canManageMembers": true,
          "canReadRevisions": true,
          "canRemoveChildren": true,
          "canRename": true,
          "canRenameTeamDrive": true,
          "canResetTeamDriveRestrictions": true,
          "canShare": true,
          "canTrashChildren": true
        },
        "colorRgb": "string",
        "createdTime": "1970-01-01T00:00:00Z",
        "id": "string",
        "kind": "drive#teamDrive",
        "name": "string",
        "orgUnitId": "string",
        "restrictions": {
          "adminManagedRestrictions": true,
          "copyRequiresWriterPermission": true,
          "domainUsersOnly": true,
          "sharingFoldersRequiresOrganizerPermission": true,
          "teamMembersOnly": true
        },
        "themeId": "string"
      },
      "teamDriveId": "string",
      "time": "1970-01-01T00:00:00Z",
      "type": "string"
    }
  ],
  "kind": "drive#changeList",
  "newStartPageToken": "string",
  "nextPageToken": "string"
}
```

<h3 id="drivechangeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ChangeList](#schemachangelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.changes.getStartPageToken

<a id="opIddrive.changes.getStartPageToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/changes/startPageToken \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /changes/startPageToken`

Gets the starting pageToken for listing future changes.

<h3 id="drivechangesgetstartpagetoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|driveId|query|string|false|The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|teamDriveId|query|string|false|Deprecated: Use `driveId` instead.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "kind": "drive#startPageToken",
  "startPageToken": "string"
}
```

<h3 id="drivechangesgetstartpagetoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StartPageToken](#schemastartpagetoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.changes.watch

<a id="opIddrive.changes.watch"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/drive/v3/changes/watch?pageToken=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "expiration": "string",
    "id": "string",
    "kind": "api#channel",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "payload": true,
    "resourceId": "string",
    "resourceUri": "string",
    "token": "string",
    "type": "string"
  }'
```

`POST /changes/watch`

Subscribes to changes for a user.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="drivechangeswatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageToken|query|string|true|The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.|
|driveId|query|string|false|The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.|
|includeCorpusRemovals|query|boolean|false|Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.|
|includeItemsFromAllDrives|query|boolean|false|Whether both My Drive and shared drive items should be included in results.|
|includeLabels|query|string|false|A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.|
|includePermissionsForView|query|string|false|Specifies which additional view's permissions to include in the response. Only 'published' is supported.|
|includeRemoved|query|boolean|false|Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.|
|includeTeamDriveItems|query|boolean|false|Deprecated: Use `includeItemsFromAllDrives` instead.|
|pageSize|query|integer|false|The maximum number of changes to return per page.|
|restrictToMyDrive|query|boolean|false|Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.|
|spaces|query|string|false|A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|teamDriveId|query|string|false|Deprecated: Use `driveId` instead.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|» » **additionalProperties**|body|string|false|none|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel. Valid values are "web_hook" or "webhook".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="drivechangeswatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

<h1 id="google-drive-api-channels">channels</h1>

## drive.channels.stop

<a id="opIddrive.channels.stop"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/channels/stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "expiration": "string",
    "id": "string",
    "kind": "api#channel",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "payload": true,
    "resourceId": "string",
    "resourceUri": "string",
    "token": "string",
    "type": "string"
  }'
```

`POST /channels/stop`

Stops watching resources through this channel.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="drivechannelsstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|» » **additionalProperties**|body|string|false|none|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel. Valid values are "web_hook" or "webhook".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="drivechannelsstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

<h1 id="google-drive-api-comments">comments</h1>

## drive.comments.list

<a id="opIddrive.comments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/{fileId}/comments`

Lists a file's comments.

<h3 id="drivecommentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|includeDeleted|query|boolean|false|Whether to include deleted comments. Deleted comments will not include their original content.|
|pageSize|query|integer|false|The maximum number of comments to return per page.|
|pageToken|query|string|false|The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.|
|startModifiedTime|query|string|false|The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "comments": [
    {
      "anchor": "string",
      "author": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "content": "string",
      "createdTime": "1970-01-01T00:00:00Z",
      "deleted": true,
      "htmlContent": "string",
      "id": "string",
      "kind": "drive#comment",
      "modifiedTime": "1970-01-01T00:00:00Z",
      "quotedFileContent": {
        "mimeType": "string",
        "value": "string"
      },
      "replies": [
        {
          "action": "string",
          "author": {
            "displayName": "string",
            "emailAddress": "string",
            "kind": "drive#user",
            "me": true,
            "permissionId": "string",
            "photoLink": "string"
          },
          "content": "string",
          "createdTime": "1970-01-01T00:00:00Z",
          "deleted": true,
          "htmlContent": "string",
          "id": "string",
          "kind": "drive#reply",
          "modifiedTime": "1970-01-01T00:00:00Z"
        }
      ],
      "resolved": true
    }
  ],
  "kind": "drive#commentList",
  "nextPageToken": "string"
}
```

<h3 id="drivecommentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CommentList](#schemacommentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.comments.create

<a id="opIddrive.comments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/comments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "anchor": "string",
    "author": {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    },
    "content": "string",
    "createdTime": "1970-01-01T00:00:00Z",
    "deleted": true,
    "htmlContent": "string",
    "id": "string",
    "kind": "drive#comment",
    "modifiedTime": "1970-01-01T00:00:00Z",
    "quotedFileContent": {
      "mimeType": "string",
      "value": "string"
    },
    "replies": [
      {
        "action": "string",
        "author": {
          "displayName": "string",
          "emailAddress": "string",
          "kind": "drive#user",
          "me": true,
          "permissionId": "string",
          "photoLink": "string"
        },
        "content": "string",
        "createdTime": "1970-01-01T00:00:00Z",
        "deleted": true,
        "htmlContent": "string",
        "id": "string",
        "kind": "drive#reply",
        "modifiedTime": "1970-01-01T00:00:00Z"
      }
    ],
    "resolved": true
  }'
```

`POST /files/{fileId}/comments`

Creates a comment on a file.

> Body parameter

```json
{
  "anchor": "string",
  "author": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "content": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "deleted": true,
  "htmlContent": "string",
  "id": "string",
  "kind": "drive#comment",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "quotedFileContent": {
    "mimeType": "string",
    "value": "string"
  },
  "replies": [
    {
      "action": "string",
      "author": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "content": "string",
      "createdTime": "1970-01-01T00:00:00Z",
      "deleted": true,
      "htmlContent": "string",
      "id": "string",
      "kind": "drive#reply",
      "modifiedTime": "1970-01-01T00:00:00Z"
    }
  ],
  "resolved": true
}
```

<h3 id="drivecommentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Comment](#schemacomment)|false|none|
|» anchor|body|string|false|A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/drive/api/v3/manage-comments).|
|» author|body|[User](#schemauser)|false|Output only. The author of the comment. The author's email address and permission ID will not be populated.|
|» content|body|string|false|The plain text content of the comment. This field is used for setting the content, while `htmlContent` should be displayed.|
|» createdTime|body|string(date-time)|false|The time at which the comment was created (RFC 3339 date-time).|
|» deleted|body|boolean|false|Output only. Whether the comment has been deleted. A deleted comment has no content.|
|» htmlContent|body|string|false|Output only. The content of the comment with HTML formatting.|
|» id|body|string|false|Output only. The ID of the comment.|
|» kind|body|string|false|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#comment"`.|
|» modifiedTime|body|string(date-time)|false|The last time the comment or any of its replies was modified (RFC 3339 date-time).|
|» quotedFileContent|body|object|false|The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.|
|» » mimeType|body|string|false|The MIME type of the quoted content.|
|» » value|body|string|false|The quoted content itself. This is interpreted as plain text if set through the API.|
|» replies|body|[[Reply](#schemareply)]|false|Output only. The full list of replies to the comment in chronological order.|
|» resolved|body|boolean|false|Output only. Whether the comment has been resolved by one of its replies.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "anchor": "string",
  "author": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "content": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "deleted": true,
  "htmlContent": "string",
  "id": "string",
  "kind": "drive#comment",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "quotedFileContent": {
    "mimeType": "string",
    "value": "string"
  },
  "replies": [
    {
      "action": "string",
      "author": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "content": "string",
      "createdTime": "1970-01-01T00:00:00Z",
      "deleted": true,
      "htmlContent": "string",
      "id": "string",
      "kind": "drive#reply",
      "modifiedTime": "1970-01-01T00:00:00Z"
    }
  ],
  "resolved": true
}
```

<h3 id="drivecommentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Comment](#schemacomment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file )
</aside>

## drive.comments.get

<a id="opIddrive.comments.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/comments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/{fileId}/comments/{commentId}`

Gets a comment by ID.

<h3 id="drivecommentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|commentId|path|string|true|The ID of the comment.|
|includeDeleted|query|boolean|false|Whether to return deleted comments. Deleted comments will not include their original content.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "anchor": "string",
  "author": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "content": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "deleted": true,
  "htmlContent": "string",
  "id": "string",
  "kind": "drive#comment",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "quotedFileContent": {
    "mimeType": "string",
    "value": "string"
  },
  "replies": [
    {
      "action": "string",
      "author": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "content": "string",
      "createdTime": "1970-01-01T00:00:00Z",
      "deleted": true,
      "htmlContent": "string",
      "id": "string",
      "kind": "drive#reply",
      "modifiedTime": "1970-01-01T00:00:00Z"
    }
  ],
  "resolved": true
}
```

<h3 id="drivecommentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Comment](#schemacomment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.comments.delete

<a id="opIddrive.comments.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/comments/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /files/{fileId}/comments/{commentId}`

Deletes a comment.

<h3 id="drivecommentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|commentId|path|string|true|The ID of the comment.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="drivecommentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file )
</aside>

## drive.comments.update

<a id="opIddrive.comments.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/comments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "anchor": "string",
    "author": {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    },
    "content": "string",
    "createdTime": "1970-01-01T00:00:00Z",
    "deleted": true,
    "htmlContent": "string",
    "id": "string",
    "kind": "drive#comment",
    "modifiedTime": "1970-01-01T00:00:00Z",
    "quotedFileContent": {
      "mimeType": "string",
      "value": "string"
    },
    "replies": [
      {
        "action": "string",
        "author": {
          "displayName": "string",
          "emailAddress": "string",
          "kind": "drive#user",
          "me": true,
          "permissionId": "string",
          "photoLink": "string"
        },
        "content": "string",
        "createdTime": "1970-01-01T00:00:00Z",
        "deleted": true,
        "htmlContent": "string",
        "id": "string",
        "kind": "drive#reply",
        "modifiedTime": "1970-01-01T00:00:00Z"
      }
    ],
    "resolved": true
  }'
```

`PATCH /files/{fileId}/comments/{commentId}`

Updates a comment with patch semantics.

> Body parameter

```json
{
  "anchor": "string",
  "author": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "content": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "deleted": true,
  "htmlContent": "string",
  "id": "string",
  "kind": "drive#comment",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "quotedFileContent": {
    "mimeType": "string",
    "value": "string"
  },
  "replies": [
    {
      "action": "string",
      "author": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "content": "string",
      "createdTime": "1970-01-01T00:00:00Z",
      "deleted": true,
      "htmlContent": "string",
      "id": "string",
      "kind": "drive#reply",
      "modifiedTime": "1970-01-01T00:00:00Z"
    }
  ],
  "resolved": true
}
```

<h3 id="drivecommentsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|commentId|path|string|true|The ID of the comment.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Comment](#schemacomment)|false|none|
|» anchor|body|string|false|A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/drive/api/v3/manage-comments).|
|» author|body|[User](#schemauser)|false|Output only. The author of the comment. The author's email address and permission ID will not be populated.|
|» content|body|string|false|The plain text content of the comment. This field is used for setting the content, while `htmlContent` should be displayed.|
|» createdTime|body|string(date-time)|false|The time at which the comment was created (RFC 3339 date-time).|
|» deleted|body|boolean|false|Output only. Whether the comment has been deleted. A deleted comment has no content.|
|» htmlContent|body|string|false|Output only. The content of the comment with HTML formatting.|
|» id|body|string|false|Output only. The ID of the comment.|
|» kind|body|string|false|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#comment"`.|
|» modifiedTime|body|string(date-time)|false|The last time the comment or any of its replies was modified (RFC 3339 date-time).|
|» quotedFileContent|body|object|false|The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.|
|» » mimeType|body|string|false|The MIME type of the quoted content.|
|» » value|body|string|false|The quoted content itself. This is interpreted as plain text if set through the API.|
|» replies|body|[[Reply](#schemareply)]|false|Output only. The full list of replies to the comment in chronological order.|
|» resolved|body|boolean|false|Output only. Whether the comment has been resolved by one of its replies.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "anchor": "string",
  "author": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "content": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "deleted": true,
  "htmlContent": "string",
  "id": "string",
  "kind": "drive#comment",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "quotedFileContent": {
    "mimeType": "string",
    "value": "string"
  },
  "replies": [
    {
      "action": "string",
      "author": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "content": "string",
      "createdTime": "1970-01-01T00:00:00Z",
      "deleted": true,
      "htmlContent": "string",
      "id": "string",
      "kind": "drive#reply",
      "modifiedTime": "1970-01-01T00:00:00Z"
    }
  ],
  "resolved": true
}
```

<h3 id="drivecommentsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Comment](#schemacomment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file )
</aside>

<h1 id="google-drive-api-drives">drives</h1>

## drive.drives.list

<a id="opIddrive.drives.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/drives \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /drives`

 Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](/drive/api/guides/search-shareddrives) guide.

<h3 id="drivedriveslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Maximum number of shared drives to return per page.|
|pageToken|query|string|false|Page token for shared drives.|
|q|query|string|false|Query string for searching shared drives.|
|useDomainAdminAccess|query|boolean|false|Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "drives": [
    {
      "backgroundImageFile": {
        "id": "string",
        "width": 0,
        "xCoordinate": 0,
        "yCoordinate": 0
      },
      "backgroundImageLink": "string",
      "capabilities": {
        "canAddChildren": true,
        "canChangeCopyRequiresWriterPermissionRestriction": true,
        "canChangeDomainUsersOnlyRestriction": true,
        "canChangeDriveBackground": true,
        "canChangeDriveMembersOnlyRestriction": true,
        "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
        "canComment": true,
        "canCopy": true,
        "canDeleteChildren": true,
        "canDeleteDrive": true,
        "canDownload": true,
        "canEdit": true,
        "canListChildren": true,
        "canManageMembers": true,
        "canReadRevisions": true,
        "canRename": true,
        "canRenameDrive": true,
        "canResetDriveRestrictions": true,
        "canShare": true,
        "canTrashChildren": true
      },
      "colorRgb": "string",
      "createdTime": "1970-01-01T00:00:00Z",
      "hidden": true,
      "id": "string",
      "kind": "drive#drive",
      "name": "string",
      "orgUnitId": "string",
      "restrictions": {
        "adminManagedRestrictions": true,
        "copyRequiresWriterPermission": true,
        "domainUsersOnly": true,
        "driveMembersOnly": true,
        "sharingFoldersRequiresOrganizerPermission": true
      },
      "themeId": "string"
    }
  ],
  "kind": "drive#driveList",
  "nextPageToken": "string"
}
```

<h3 id="drivedriveslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DriveList](#schemadrivelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.drives.create

<a id="opIddrive.drives.create"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/drive/v3/drives?requestId=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backgroundImageFile": {
      "id": "string",
      "width": 0,
      "xCoordinate": 0,
      "yCoordinate": 0
    },
    "backgroundImageLink": "string",
    "capabilities": {
      "canAddChildren": true,
      "canChangeCopyRequiresWriterPermissionRestriction": true,
      "canChangeDomainUsersOnlyRestriction": true,
      "canChangeDriveBackground": true,
      "canChangeDriveMembersOnlyRestriction": true,
      "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
      "canComment": true,
      "canCopy": true,
      "canDeleteChildren": true,
      "canDeleteDrive": true,
      "canDownload": true,
      "canEdit": true,
      "canListChildren": true,
      "canManageMembers": true,
      "canReadRevisions": true,
      "canRename": true,
      "canRenameDrive": true,
      "canResetDriveRestrictions": true,
      "canShare": true,
      "canTrashChildren": true
    },
    "colorRgb": "string",
    "createdTime": "1970-01-01T00:00:00Z",
    "hidden": true,
    "id": "string",
    "kind": "drive#drive",
    "name": "string",
    "orgUnitId": "string",
    "restrictions": {
      "adminManagedRestrictions": true,
      "copyRequiresWriterPermission": true,
      "domainUsersOnly": true,
      "driveMembersOnly": true,
      "sharingFoldersRequiresOrganizerPermission": true
    },
    "themeId": "string"
  }'
```

`POST /drives`

Creates a shared drive.

> Body parameter

```json
{
  "backgroundImageFile": {
    "id": "string",
    "width": 0,
    "xCoordinate": 0,
    "yCoordinate": 0
  },
  "backgroundImageLink": "string",
  "capabilities": {
    "canAddChildren": true,
    "canChangeCopyRequiresWriterPermissionRestriction": true,
    "canChangeDomainUsersOnlyRestriction": true,
    "canChangeDriveBackground": true,
    "canChangeDriveMembersOnlyRestriction": true,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
    "canComment": true,
    "canCopy": true,
    "canDeleteChildren": true,
    "canDeleteDrive": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canManageMembers": true,
    "canReadRevisions": true,
    "canRename": true,
    "canRenameDrive": true,
    "canResetDriveRestrictions": true,
    "canShare": true,
    "canTrashChildren": true
  },
  "colorRgb": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "hidden": true,
  "id": "string",
  "kind": "drive#drive",
  "name": "string",
  "orgUnitId": "string",
  "restrictions": {
    "adminManagedRestrictions": true,
    "copyRequiresWriterPermission": true,
    "domainUsersOnly": true,
    "driveMembersOnly": true,
    "sharingFoldersRequiresOrganizerPermission": true
  },
  "themeId": "string"
}
```

<h3 id="drivedrivescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestId|query|string|true|Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Drive](#schemadrive)|false|none|
|» backgroundImageFile|body|object|false|An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.|
|» » id|body|string|false|The ID of an image file in Google Drive to use for the background image.|
|» » width|body|number(float)|false|The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.|
|» » xCoordinate|body|number(float)|false|The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.|
|» » yCoordinate|body|number(float)|false|The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.|
|» backgroundImageLink|body|string|false|Output only. A short-lived link to this shared drive's background image.|
|» capabilities|body|object|false|Output only. Capabilities the current user has on this shared drive.|
|» » canAddChildren|body|boolean|false|Output only. Whether the current user can add children to folders in this shared drive.|
|» » canChangeCopyRequiresWriterPermissionRestriction|body|boolean|false|Output only. Whether the current user can change the `copyRequiresWriterPermission` restriction of this shared drive.|
|» » canChangeDomainUsersOnlyRestriction|body|boolean|false|Output only. Whether the current user can change the `domainUsersOnly` restriction of this shared drive.|
|» » canChangeDriveBackground|body|boolean|false|Output only. Whether the current user can change the background of this shared drive.|
|» » canChangeDriveMembersOnlyRestriction|body|boolean|false|Output only. Whether the current user can change the `driveMembersOnly` restriction of this shared drive.|
|» » canChangeSharingFoldersRequiresOrganizerPermissionRestriction|body|boolean|false|Output only. Whether the current user can change the `sharingFoldersRequiresOrganizerPermission` restriction of this shared drive.|
|» » canComment|body|boolean|false|Output only. Whether the current user can comment on files in this shared drive.|
|» » canCopy|body|boolean|false|Output only. Whether the current user can copy files in this shared drive.|
|» » canDeleteChildren|body|boolean|false|Output only. Whether the current user can delete children from folders in this shared drive.|
|» » canDeleteDrive|body|boolean|false|Output only. Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive.|
|» » canDownload|body|boolean|false|Output only. Whether the current user can download files in this shared drive.|
|» » canEdit|body|boolean|false|Output only. Whether the current user can edit files in this shared drive|
|» » canListChildren|body|boolean|false|Output only. Whether the current user can list the children of folders in this shared drive.|
|» » canManageMembers|body|boolean|false|Output only. Whether the current user can add members to this shared drive or remove them or change their role.|
|» » canReadRevisions|body|boolean|false|Output only. Whether the current user can read the revisions resource of files in this shared drive.|
|» » canRename|body|boolean|false|Output only. Whether the current user can rename files or folders in this shared drive.|
|» » canRenameDrive|body|boolean|false|Output only. Whether the current user can rename this shared drive.|
|» » canResetDriveRestrictions|body|boolean|false|Output only. Whether the current user can reset the shared drive restrictions to defaults.|
|» » canShare|body|boolean|false|Output only. Whether the current user can share files or folders in this shared drive.|
|» » canTrashChildren|body|boolean|false|Output only. Whether the current user can trash children from folders in this shared drive.|
|» colorRgb|body|string|false|The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`.|
|» createdTime|body|string(date-time)|false|The time at which the shared drive was created (RFC 3339 date-time).|
|» hidden|body|boolean|false|Whether the shared drive is hidden from default view.|
|» id|body|string|false|Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive.|
|» kind|body|string|false|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#drive"`.|
|» name|body|string|false|The name of this shared drive.|
|» orgUnitId|body|string|false|Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.|
|» restrictions|body|object|false|A set of restrictions that apply to this shared drive or items inside this shared drive. Note that restrictions can't be set when creating a shared drive. To add a restriction, first create a shared drive and then use `drives.update` to add restrictions.|
|» » adminManagedRestrictions|body|boolean|false|Whether administrative privileges on this shared drive are required to modify restrictions.|
|» » copyRequiresWriterPermission|body|boolean|false|Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to `true`, it will override the similarly named field to `true` for any file inside this shared drive.|
|» » domainUsersOnly|body|boolean|false|Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive.|
|» » driveMembersOnly|body|boolean|false|Whether access to items inside this shared drive is restricted to its members.|
|» » sharingFoldersRequiresOrganizerPermission|body|boolean|false|If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders.|
|» themeId|body|string|false|The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "backgroundImageFile": {
    "id": "string",
    "width": 0,
    "xCoordinate": 0,
    "yCoordinate": 0
  },
  "backgroundImageLink": "string",
  "capabilities": {
    "canAddChildren": true,
    "canChangeCopyRequiresWriterPermissionRestriction": true,
    "canChangeDomainUsersOnlyRestriction": true,
    "canChangeDriveBackground": true,
    "canChangeDriveMembersOnlyRestriction": true,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
    "canComment": true,
    "canCopy": true,
    "canDeleteChildren": true,
    "canDeleteDrive": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canManageMembers": true,
    "canReadRevisions": true,
    "canRename": true,
    "canRenameDrive": true,
    "canResetDriveRestrictions": true,
    "canShare": true,
    "canTrashChildren": true
  },
  "colorRgb": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "hidden": true,
  "id": "string",
  "kind": "drive#drive",
  "name": "string",
  "orgUnitId": "string",
  "restrictions": {
    "adminManagedRestrictions": true,
    "copyRequiresWriterPermission": true,
    "domainUsersOnly": true,
    "driveMembersOnly": true,
    "sharingFoldersRequiresOrganizerPermission": true
  },
  "themeId": "string"
}
```

<h3 id="drivedrivescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Drive](#schemadrive)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive )
</aside>

## drive.drives.get

<a id="opIddrive.drives.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/drives/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /drives/{driveId}`

Gets a shared drive's metadata by ID.

<h3 id="drivedrivesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|driveId|path|string|true|The ID of the shared drive.|
|useDomainAdminAccess|query|boolean|false|Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "backgroundImageFile": {
    "id": "string",
    "width": 0,
    "xCoordinate": 0,
    "yCoordinate": 0
  },
  "backgroundImageLink": "string",
  "capabilities": {
    "canAddChildren": true,
    "canChangeCopyRequiresWriterPermissionRestriction": true,
    "canChangeDomainUsersOnlyRestriction": true,
    "canChangeDriveBackground": true,
    "canChangeDriveMembersOnlyRestriction": true,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
    "canComment": true,
    "canCopy": true,
    "canDeleteChildren": true,
    "canDeleteDrive": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canManageMembers": true,
    "canReadRevisions": true,
    "canRename": true,
    "canRenameDrive": true,
    "canResetDriveRestrictions": true,
    "canShare": true,
    "canTrashChildren": true
  },
  "colorRgb": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "hidden": true,
  "id": "string",
  "kind": "drive#drive",
  "name": "string",
  "orgUnitId": "string",
  "restrictions": {
    "adminManagedRestrictions": true,
    "copyRequiresWriterPermission": true,
    "domainUsersOnly": true,
    "driveMembersOnly": true,
    "sharingFoldersRequiresOrganizerPermission": true
  },
  "themeId": "string"
}
```

<h3 id="drivedrivesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Drive](#schemadrive)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.drives.delete

<a id="opIddrive.drives.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/drives/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /drives/{driveId}`

Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items.

<h3 id="drivedrivesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|driveId|path|string|true|The ID of the shared drive.|
|allowItemDeletion|query|boolean|false|Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`.|
|useDomainAdminAccess|query|boolean|false|Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="drivedrivesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive )
</aside>

## drive.drives.update

<a id="opIddrive.drives.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/drives/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backgroundImageFile": {
      "id": "string",
      "width": 0,
      "xCoordinate": 0,
      "yCoordinate": 0
    },
    "backgroundImageLink": "string",
    "capabilities": {
      "canAddChildren": true,
      "canChangeCopyRequiresWriterPermissionRestriction": true,
      "canChangeDomainUsersOnlyRestriction": true,
      "canChangeDriveBackground": true,
      "canChangeDriveMembersOnlyRestriction": true,
      "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
      "canComment": true,
      "canCopy": true,
      "canDeleteChildren": true,
      "canDeleteDrive": true,
      "canDownload": true,
      "canEdit": true,
      "canListChildren": true,
      "canManageMembers": true,
      "canReadRevisions": true,
      "canRename": true,
      "canRenameDrive": true,
      "canResetDriveRestrictions": true,
      "canShare": true,
      "canTrashChildren": true
    },
    "colorRgb": "string",
    "createdTime": "1970-01-01T00:00:00Z",
    "hidden": true,
    "id": "string",
    "kind": "drive#drive",
    "name": "string",
    "orgUnitId": "string",
    "restrictions": {
      "adminManagedRestrictions": true,
      "copyRequiresWriterPermission": true,
      "domainUsersOnly": true,
      "driveMembersOnly": true,
      "sharingFoldersRequiresOrganizerPermission": true
    },
    "themeId": "string"
  }'
```

`PATCH /drives/{driveId}`

Updates the metadate for a shared drive.

> Body parameter

```json
{
  "backgroundImageFile": {
    "id": "string",
    "width": 0,
    "xCoordinate": 0,
    "yCoordinate": 0
  },
  "backgroundImageLink": "string",
  "capabilities": {
    "canAddChildren": true,
    "canChangeCopyRequiresWriterPermissionRestriction": true,
    "canChangeDomainUsersOnlyRestriction": true,
    "canChangeDriveBackground": true,
    "canChangeDriveMembersOnlyRestriction": true,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
    "canComment": true,
    "canCopy": true,
    "canDeleteChildren": true,
    "canDeleteDrive": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canManageMembers": true,
    "canReadRevisions": true,
    "canRename": true,
    "canRenameDrive": true,
    "canResetDriveRestrictions": true,
    "canShare": true,
    "canTrashChildren": true
  },
  "colorRgb": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "hidden": true,
  "id": "string",
  "kind": "drive#drive",
  "name": "string",
  "orgUnitId": "string",
  "restrictions": {
    "adminManagedRestrictions": true,
    "copyRequiresWriterPermission": true,
    "domainUsersOnly": true,
    "driveMembersOnly": true,
    "sharingFoldersRequiresOrganizerPermission": true
  },
  "themeId": "string"
}
```

<h3 id="drivedrivesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|driveId|path|string|true|The ID of the shared drive.|
|useDomainAdminAccess|query|boolean|false|Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Drive](#schemadrive)|false|none|
|» backgroundImageFile|body|object|false|An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.|
|» » id|body|string|false|The ID of an image file in Google Drive to use for the background image.|
|» » width|body|number(float)|false|The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.|
|» » xCoordinate|body|number(float)|false|The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.|
|» » yCoordinate|body|number(float)|false|The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.|
|» backgroundImageLink|body|string|false|Output only. A short-lived link to this shared drive's background image.|
|» capabilities|body|object|false|Output only. Capabilities the current user has on this shared drive.|
|» » canAddChildren|body|boolean|false|Output only. Whether the current user can add children to folders in this shared drive.|
|» » canChangeCopyRequiresWriterPermissionRestriction|body|boolean|false|Output only. Whether the current user can change the `copyRequiresWriterPermission` restriction of this shared drive.|
|» » canChangeDomainUsersOnlyRestriction|body|boolean|false|Output only. Whether the current user can change the `domainUsersOnly` restriction of this shared drive.|
|» » canChangeDriveBackground|body|boolean|false|Output only. Whether the current user can change the background of this shared drive.|
|» » canChangeDriveMembersOnlyRestriction|body|boolean|false|Output only. Whether the current user can change the `driveMembersOnly` restriction of this shared drive.|
|» » canChangeSharingFoldersRequiresOrganizerPermissionRestriction|body|boolean|false|Output only. Whether the current user can change the `sharingFoldersRequiresOrganizerPermission` restriction of this shared drive.|
|» » canComment|body|boolean|false|Output only. Whether the current user can comment on files in this shared drive.|
|» » canCopy|body|boolean|false|Output only. Whether the current user can copy files in this shared drive.|
|» » canDeleteChildren|body|boolean|false|Output only. Whether the current user can delete children from folders in this shared drive.|
|» » canDeleteDrive|body|boolean|false|Output only. Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive.|
|» » canDownload|body|boolean|false|Output only. Whether the current user can download files in this shared drive.|
|» » canEdit|body|boolean|false|Output only. Whether the current user can edit files in this shared drive|
|» » canListChildren|body|boolean|false|Output only. Whether the current user can list the children of folders in this shared drive.|
|» » canManageMembers|body|boolean|false|Output only. Whether the current user can add members to this shared drive or remove them or change their role.|
|» » canReadRevisions|body|boolean|false|Output only. Whether the current user can read the revisions resource of files in this shared drive.|
|» » canRename|body|boolean|false|Output only. Whether the current user can rename files or folders in this shared drive.|
|» » canRenameDrive|body|boolean|false|Output only. Whether the current user can rename this shared drive.|
|» » canResetDriveRestrictions|body|boolean|false|Output only. Whether the current user can reset the shared drive restrictions to defaults.|
|» » canShare|body|boolean|false|Output only. Whether the current user can share files or folders in this shared drive.|
|» » canTrashChildren|body|boolean|false|Output only. Whether the current user can trash children from folders in this shared drive.|
|» colorRgb|body|string|false|The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`.|
|» createdTime|body|string(date-time)|false|The time at which the shared drive was created (RFC 3339 date-time).|
|» hidden|body|boolean|false|Whether the shared drive is hidden from default view.|
|» id|body|string|false|Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive.|
|» kind|body|string|false|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#drive"`.|
|» name|body|string|false|The name of this shared drive.|
|» orgUnitId|body|string|false|Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.|
|» restrictions|body|object|false|A set of restrictions that apply to this shared drive or items inside this shared drive. Note that restrictions can't be set when creating a shared drive. To add a restriction, first create a shared drive and then use `drives.update` to add restrictions.|
|» » adminManagedRestrictions|body|boolean|false|Whether administrative privileges on this shared drive are required to modify restrictions.|
|» » copyRequiresWriterPermission|body|boolean|false|Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to `true`, it will override the similarly named field to `true` for any file inside this shared drive.|
|» » domainUsersOnly|body|boolean|false|Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive.|
|» » driveMembersOnly|body|boolean|false|Whether access to items inside this shared drive is restricted to its members.|
|» » sharingFoldersRequiresOrganizerPermission|body|boolean|false|If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders.|
|» themeId|body|string|false|The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "backgroundImageFile": {
    "id": "string",
    "width": 0,
    "xCoordinate": 0,
    "yCoordinate": 0
  },
  "backgroundImageLink": "string",
  "capabilities": {
    "canAddChildren": true,
    "canChangeCopyRequiresWriterPermissionRestriction": true,
    "canChangeDomainUsersOnlyRestriction": true,
    "canChangeDriveBackground": true,
    "canChangeDriveMembersOnlyRestriction": true,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
    "canComment": true,
    "canCopy": true,
    "canDeleteChildren": true,
    "canDeleteDrive": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canManageMembers": true,
    "canReadRevisions": true,
    "canRename": true,
    "canRenameDrive": true,
    "canResetDriveRestrictions": true,
    "canShare": true,
    "canTrashChildren": true
  },
  "colorRgb": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "hidden": true,
  "id": "string",
  "kind": "drive#drive",
  "name": "string",
  "orgUnitId": "string",
  "restrictions": {
    "adminManagedRestrictions": true,
    "copyRequiresWriterPermission": true,
    "domainUsersOnly": true,
    "driveMembersOnly": true,
    "sharingFoldersRequiresOrganizerPermission": true
  },
  "themeId": "string"
}
```

<h3 id="drivedrivesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Drive](#schemadrive)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive )
</aside>

## drive.drives.hide

<a id="opIddrive.drives.hide"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/drives/string/hide \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /drives/{driveId}/hide`

Hides a shared drive from the default view.

<h3 id="drivedriveshide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|driveId|path|string|true|The ID of the shared drive.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "backgroundImageFile": {
    "id": "string",
    "width": 0,
    "xCoordinate": 0,
    "yCoordinate": 0
  },
  "backgroundImageLink": "string",
  "capabilities": {
    "canAddChildren": true,
    "canChangeCopyRequiresWriterPermissionRestriction": true,
    "canChangeDomainUsersOnlyRestriction": true,
    "canChangeDriveBackground": true,
    "canChangeDriveMembersOnlyRestriction": true,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
    "canComment": true,
    "canCopy": true,
    "canDeleteChildren": true,
    "canDeleteDrive": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canManageMembers": true,
    "canReadRevisions": true,
    "canRename": true,
    "canRenameDrive": true,
    "canResetDriveRestrictions": true,
    "canShare": true,
    "canTrashChildren": true
  },
  "colorRgb": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "hidden": true,
  "id": "string",
  "kind": "drive#drive",
  "name": "string",
  "orgUnitId": "string",
  "restrictions": {
    "adminManagedRestrictions": true,
    "copyRequiresWriterPermission": true,
    "domainUsersOnly": true,
    "driveMembersOnly": true,
    "sharingFoldersRequiresOrganizerPermission": true
  },
  "themeId": "string"
}
```

<h3 id="drivedriveshide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Drive](#schemadrive)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive )
</aside>

## drive.drives.unhide

<a id="opIddrive.drives.unhide"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/drives/string/unhide \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /drives/{driveId}/unhide`

Restores a shared drive to the default view.

<h3 id="drivedrivesunhide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|driveId|path|string|true|The ID of the shared drive.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "backgroundImageFile": {
    "id": "string",
    "width": 0,
    "xCoordinate": 0,
    "yCoordinate": 0
  },
  "backgroundImageLink": "string",
  "capabilities": {
    "canAddChildren": true,
    "canChangeCopyRequiresWriterPermissionRestriction": true,
    "canChangeDomainUsersOnlyRestriction": true,
    "canChangeDriveBackground": true,
    "canChangeDriveMembersOnlyRestriction": true,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
    "canComment": true,
    "canCopy": true,
    "canDeleteChildren": true,
    "canDeleteDrive": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canManageMembers": true,
    "canReadRevisions": true,
    "canRename": true,
    "canRenameDrive": true,
    "canResetDriveRestrictions": true,
    "canShare": true,
    "canTrashChildren": true
  },
  "colorRgb": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "hidden": true,
  "id": "string",
  "kind": "drive#drive",
  "name": "string",
  "orgUnitId": "string",
  "restrictions": {
    "adminManagedRestrictions": true,
    "copyRequiresWriterPermission": true,
    "domainUsersOnly": true,
    "driveMembersOnly": true,
    "sharingFoldersRequiresOrganizerPermission": true
  },
  "themeId": "string"
}
```

<h3 id="drivedrivesunhide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Drive](#schemadrive)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive )
</aside>

<h1 id="google-drive-api-files">files</h1>

## drive.files.list

<a id="opIddrive.files.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files`

 Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.

<h3 id="drivefileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|corpora|query|string|false|Bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'drive', and 'allDrives'. Prefer 'user' or 'drive' to 'allDrives' for efficiency. By default, corpora is set to 'user'. However, this can change depending on the filter set through the 'q' parameter.|
|corpus|query|string|false|Deprecated: The source of files to list. Use 'corpora' instead.|
|driveId|query|string|false|ID of the shared drive to search.|
|includeItemsFromAllDrives|query|boolean|false|Whether both My Drive and shared drive items should be included in results.|
|includeLabels|query|string|false|A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.|
|includePermissionsForView|query|string|false|Specifies which additional view's permissions to include in the response. Only 'published' is supported.|
|includeTeamDriveItems|query|boolean|false|Deprecated: Use `includeItemsFromAllDrives` instead.|
|orderBy|query|string|false|A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name.|
|pageSize|query|integer|false|The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.|
|pageToken|query|string|false|The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.|
|q|query|string|false|A query for filtering the file results. See the "Search for files & folders" guide for supported syntax.|
|spaces|query|string|false|A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|teamDriveId|query|string|false|Deprecated: Use `driveId` instead.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|corpus|domain|
|corpus|user|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "files": [
    {
      "appProperties": {
        "property1": "string",
        "property2": "string"
      },
      "capabilities": {
        "canAcceptOwnership": true,
        "canAddChildren": true,
        "canAddFolderFromAnotherDrive": true,
        "canAddMyDriveParent": true,
        "canChangeCopyRequiresWriterPermission": true,
        "canChangeSecurityUpdateEnabled": true,
        "canChangeViewersCanCopyContent": true,
        "canComment": true,
        "canCopy": true,
        "canDelete": true,
        "canDeleteChildren": true,
        "canDownload": true,
        "canEdit": true,
        "canListChildren": true,
        "canModifyContent": true,
        "canModifyContentRestriction": true,
        "canModifyEditorContentRestriction": true,
        "canModifyLabels": true,
        "canModifyOwnerContentRestriction": true,
        "canMoveChildrenOutOfDrive": true,
        "canMoveChildrenOutOfTeamDrive": true,
        "canMoveChildrenWithinDrive": true,
        "canMoveChildrenWithinTeamDrive": true,
        "canMoveItemIntoTeamDrive": true,
        "canMoveItemOutOfDrive": true,
        "canMoveItemOutOfTeamDrive": true,
        "canMoveItemWithinDrive": true,
        "canMoveItemWithinTeamDrive": true,
        "canMoveTeamDriveItem": true,
        "canReadDrive": true,
        "canReadLabels": true,
        "canReadRevisions": true,
        "canReadTeamDrive": true,
        "canRemoveChildren": true,
        "canRemoveContentRestriction": true,
        "canRemoveMyDriveParent": true,
        "canRename": true,
        "canShare": true,
        "canTrash": true,
        "canTrashChildren": true,
        "canUntrash": true
      },
      "contentHints": {
        "indexableText": "string",
        "thumbnail": {
          "image": "string",
          "mimeType": "string"
        }
      },
      "contentRestrictions": [
        {
          "ownerRestricted": true,
          "readOnly": true,
          "reason": "string",
          "restrictingUser": {
            "displayName": "string",
            "emailAddress": "string",
            "kind": "drive#user",
            "me": true,
            "permissionId": "string",
            "photoLink": "string"
          },
          "restrictionTime": "1970-01-01T00:00:00Z",
          "systemRestricted": true,
          "type": "string"
        }
      ],
      "copyRequiresWriterPermission": true,
      "createdTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "driveId": "string",
      "explicitlyTrashed": true,
      "exportLinks": {
        "property1": "string",
        "property2": "string"
      },
      "fileExtension": "string",
      "folderColorRgb": "string",
      "fullFileExtension": "string",
      "hasAugmentedPermissions": true,
      "hasThumbnail": true,
      "headRevisionId": "string",
      "iconLink": "string",
      "id": "string",
      "imageMediaMetadata": {
        "aperture": 0,
        "cameraMake": "string",
        "cameraModel": "string",
        "colorSpace": "string",
        "exposureBias": 0,
        "exposureMode": "string",
        "exposureTime": 0,
        "flashUsed": true,
        "focalLength": 0,
        "height": 0,
        "isoSpeed": 0,
        "lens": "string",
        "location": {
          "altitude": 0,
          "latitude": 0,
          "longitude": 0
        },
        "maxApertureValue": 0,
        "meteringMode": "string",
        "rotation": 0,
        "sensor": "string",
        "subjectDistance": 0,
        "time": "string",
        "whiteBalance": "string",
        "width": 0
      },
      "isAppAuthorized": true,
      "kind": "drive#file",
      "labelInfo": {
        "labels": [
          {
            "fields": {
              "property1": {
                "dateString": [
                  "1970-01-01"
                ],
                "id": "string",
                "integer": [
                  "string"
                ],
                "kind": "string",
                "selection": [
                  "string"
                ],
                "text": [
                  "string"
                ],
                "user": [
                  {
                    "displayName": "string",
                    "emailAddress": "string",
                    "kind": "drive#user",
                    "me": true,
                    "permissionId": "string",
                    "photoLink": "string"
                  }
                ],
                "valueType": "string"
              },
              "property2": {
                "dateString": [
                  "1970-01-01"
                ],
                "id": "string",
                "integer": [
                  "string"
                ],
                "kind": "string",
                "selection": [
                  "string"
                ],
                "text": [
                  "string"
                ],
                "user": [
                  {
                    "displayName": "string",
                    "emailAddress": "string",
                    "kind": "drive#user",
                    "me": true,
                    "permissionId": "string",
                    "photoLink": "string"
                  }
                ],
                "valueType": "string"
              }
            },
            "id": "string",
            "kind": "string",
            "revisionId": "string"
          }
        ]
      },
      "lastModifyingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "linkShareMetadata": {
        "securityUpdateEligible": true,
        "securityUpdateEnabled": true
      },
      "md5Checksum": "string",
      "mimeType": "string",
      "modifiedByMe": true,
      "modifiedByMeTime": "1970-01-01T00:00:00Z",
      "modifiedTime": "1970-01-01T00:00:00Z",
      "name": "string",
      "originalFilename": "string",
      "ownedByMe": true,
      "owners": [
        {
          "displayName": "string",
          "emailAddress": "string",
          "kind": "drive#user",
          "me": true,
          "permissionId": "string",
          "photoLink": "string"
        }
      ],
      "parents": [
        "string"
      ],
      "permissionIds": [
        "string"
      ],
      "permissions": [
        {
          "allowFileDiscovery": true,
          "deleted": true,
          "displayName": "string",
          "domain": "string",
          "emailAddress": "string",
          "expirationTime": "1970-01-01T00:00:00Z",
          "id": "string",
          "kind": "drive#permission",
          "pendingOwner": true,
          "permissionDetails": [
            {
              "inherited": true,
              "inheritedFrom": "string",
              "permissionType": "string",
              "role": "string"
            }
          ],
          "photoLink": "string",
          "role": "string",
          "teamDrivePermissionDetails": [
            {
              "inherited": true,
              "inheritedFrom": "string",
              "role": "string",
              "teamDrivePermissionType": "string"
            }
          ],
          "type": "string",
          "view": "string"
        }
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "quotaBytesUsed": "string",
      "resourceKey": "string",
      "sha1Checksum": "string",
      "sha256Checksum": "string",
      "shared": true,
      "sharedWithMeTime": "1970-01-01T00:00:00Z",
      "sharingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "shortcutDetails": {
        "targetId": "string",
        "targetMimeType": "string",
        "targetResourceKey": "string"
      },
      "size": "string",
      "spaces": [
        "string"
      ],
      "starred": true,
      "teamDriveId": "string",
      "thumbnailLink": "string",
      "thumbnailVersion": "string",
      "trashed": true,
      "trashedTime": "1970-01-01T00:00:00Z",
      "trashingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "version": "string",
      "videoMediaMetadata": {
        "durationMillis": "string",
        "height": 0,
        "width": 0
      },
      "viewedByMe": true,
      "viewedByMeTime": "1970-01-01T00:00:00Z",
      "viewersCanCopyContent": true,
      "webContentLink": "string",
      "webViewLink": "string",
      "writersCanShare": true
    }
  ],
  "incompleteSearch": true,
  "kind": "drive#fileList",
  "nextPageToken": "string"
}
```

<h3 id="drivefileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FileList](#schemafilelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.files.create

<a id="opIddrive.files.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"appProperties":{"property1":"string","property2":"string"},"capabilities":{"canAcceptOwnership":true,"canAddChildren":true,"canAddFolderFromAnotherDrive":true,"canAddMyDriveParent":true,"canChangeCopyRequiresWriterPermission":true,"canChangeSecurityUpdateEnabled":true,"canChangeViewersCanCopyContent":true,"canComment":true,"canCopy":true,"canDelete":true,"canDeleteChildren":true,"canDownload":true,"canEdit":true,"canListChildren":true,"canModifyContent":true,"canModifyContentRestriction":true,"canModifyEditorContentRestriction":true,"canModifyLabels":true,"canModifyOwnerContentRestriction":true,"canMoveChildrenOutOfDrive":true,"canMoveChildrenOutOfTeamDrive":true,"canMoveChildrenWithinDrive":true,"canMoveChildrenWithinTeamDrive":true,"canMoveItemIntoTeamDrive":true,"canMoveItemOutOfDrive":true,"canMoveItemOutOfTeamDrive":true,"canMoveItemWithinDrive":true,"canMoveItemWithinTeamDrive":true,"canMoveTeamDriveItem":true,"canReadDrive":true,"canReadLabels":true,"canReadRevisions":true,"canReadTeamDrive":true,"canRemoveChildren":true,"canRemoveContentRestriction":true,"canRemoveMyDriveParent":true,"canRename":true,"canShare":true,"canTrash":true,"canTrashChildren":true,"canUntrash":true},"contentHints":{"indexableText":"string","thumbnail":{"image":"string","mimeType":"string"}},"contentRestrictions":[{"ownerRestricted":true,"readOnly":true,"reason":"string","restrictingUser":{"displayName":"string","emailAddress":"string","kind":"drive#user","me":true,"permissionId":"string","photoLink":"string"},"restrictionTime":"1970-01-01T00:00:00Z","systemRestricted":true,"type":"string"}],"copyRequiresWriterPermission":true,"createdTime":"1970-01-01T00:00:00Z","description":"string","driveId":"string","explicitlyTrashed":true,"fileExtension":"string","folderColorRgb":"string","fullFileExtension":"string","hasAugmentedPermissions":true,"hasThumbnail":true,"headRevisionId":"string","iconLink":"string","id":"string","imageMediaMetadata":{"aperture":0,"cameraMake":"string","cameraModel":"string","colorSpace":"string","exposureBias":0,"exposureMode":"string","exposureTime":0,"flashUsed":true,"focalLength":0,"height":0,"isoSpeed":0,"lens":"string","location":{"altitude":0,"latitude":0,"longitude":0},"maxApertureValue":0,"meteringMode":"string","rotation":0,"sensor":"string","subjectDistance":0,"time":"string","whiteBalance":"string","width":0},"isAppAuthorized":true,"kind":"drive#file","labelInfo":{"labels":[{"fields":{"property1":{"dateString":["1970-01-01"],"id":"string","integer":["string"],"kind":"string","selection":["string"],"text":["string"],"user":[{"displayName":"string","emailAddress":"string","kind":"drive#user","me":true,"permissionId":"string","photoLink":"string"}],"valueType":"string"},"property2":{"dateString":["1970-01-01"],"id":"string","integer":["string"],"kind":"string","selection":["string"],"text":["string"],"user":[{"displayName":"string","emailAddress":"string","kind":"drive#user","me":true,"permissionId":"string","photoLink":"string"}],"valueType":"string"}},"id":"string","kind":"string","revisionId":"string"}]},"lastModifyingUser":{"displayName":"string","emailAddress":"string","kind":"drive#user","me":true,"permissionId":"string","photoLink":"string"},"linkShareMetadata":{"securityUpdateEligible":true,"securityUpdateEnabled":true},"md5Checksum":"string","mimeType":"string","modifiedByMe":true,"modifiedByMeTime":"1970-01-01T00:00:00Z","modifiedTime":"1970-01-01T00:00:00Z","name":"string","originalFilename":"string","ownedByMe":true,"owners":[{"displayName":"string","emailAddress":"string","kind":"drive#user","me":true,"permissionId":"string","photoLink":"string"}],"parents":["string"],"permissionIds":["string"],"permissions":[{"allowFileDiscovery":true,"deleted":true,"displayName":"string","domain":"string","emailAddress":"string","expirationTime":"1970-01-01T00:00:00Z","id":"string","kind":"drive#permission","pendingOwner":true,"photoLink":"string","role":"string","type":"string","view":"string"}],"properties":{"property1":"string","property2":"string"},"quotaBytesUsed":"string","resourceKey":"string","sha1Checksum":"string","sha256Checksum":"string","shared":true,"sharedWithMeTime":"1970-01-01T00:00:00Z","sharingUser":{"displayName":"string","emailAddress":"string","kind":"drive#user","me":true,"permissionId":"string","photoLink":"string"},"shortcutDetails":{"targetId":"string","targetMimeType":"string","targetResourceKey":"string"},"size":"string","spaces":["string"],"starred":true,"teamDriveId":"string","thumbnailLink":"string","thumbnailVersion":"string","trashed":true,"trashedTime":"1970-01-01T00:00:00Z","trashingUser":{"displayName":"string","emailAddress":"string","kind":"drive#user","me":true,"permissionId":"string","photoLink":"string"},"version":"string","videoMediaMetadata":{"durationMillis":"string","height":0,"width":0},"viewedByMe":true,"viewedByMeTime":"1970-01-01T00:00:00Z","viewersCanCopyContent":true,"webContentLink":"string","webViewLink":"string","writersCanShare":true}'
```

`POST /files`

 Creates a new file. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.create` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"name": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.

> Body parameter

```json
{
  "appProperties": {
    "property1": "string",
    "property2": "string"
  },
  "capabilities": {
    "canAcceptOwnership": true,
    "canAddChildren": true,
    "canAddFolderFromAnotherDrive": true,
    "canAddMyDriveParent": true,
    "canChangeCopyRequiresWriterPermission": true,
    "canChangeSecurityUpdateEnabled": true,
    "canChangeViewersCanCopyContent": true,
    "canComment": true,
    "canCopy": true,
    "canDelete": true,
    "canDeleteChildren": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canModifyContent": true,
    "canModifyContentRestriction": true,
    "canModifyEditorContentRestriction": true,
    "canModifyLabels": true,
    "canModifyOwnerContentRestriction": true,
    "canMoveChildrenOutOfDrive": true,
    "canMoveChildrenOutOfTeamDrive": true,
    "canMoveChildrenWithinDrive": true,
    "canMoveChildrenWithinTeamDrive": true,
    "canMoveItemIntoTeamDrive": true,
    "canMoveItemOutOfDrive": true,
    "canMoveItemOutOfTeamDrive": true,
    "canMoveItemWithinDrive": true,
    "canMoveItemWithinTeamDrive": true,
    "canMoveTeamDriveItem": true,
    "canReadDrive": true,
    "canReadLabels": true,
    "canReadRevisions": true,
    "canReadTeamDrive": true,
    "canRemoveChildren": true,
    "canRemoveContentRestriction": true,
    "canRemoveMyDriveParent": true,
    "canRename": true,
    "canShare": true,
    "canTrash": true,
    "canTrashChildren": true,
    "canUntrash": true
  },
  "contentHints": {
    "indexableText": "string",
    "thumbnail": {
      "image": "string",
      "mimeType": "string"
    }
  },
  "contentRestrictions": [
    {
      "ownerRestricted": true,
      "readOnly": true,
      "reason": "string",
      "restrictingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "restrictionTime": "1970-01-01T00:00:00Z",
      "systemRestricted": true,
      "type": "string"
    }
  ],
  "copyRequiresWriterPermission": true,
  "createdTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "driveId": "string",
  "explicitlyTrashed": true,
  "fileExtension": "string",
  "folderColorRgb": "string",
  "fullFileExtension": "string",
  "hasAugmentedPermissions": true,
  "hasThumbnail": true,
  "headRevisionId": "string",
  "iconLink": "string",
  "id": "string",
  "imageMediaMetadata": {
    "aperture": 0,
    "cameraMake": "string",
    "cameraModel": "string",
    "colorSpace": "string",
    "exposureBias": 0,
    "exposureMode": "string",
    "exposureTime": 0,
    "flashUsed": true,
    "focalLength": 0,
    "height": 0,
    "isoSpeed": 0,
    "lens": "string",
    "location": {
      "altitude": 0,
      "latitude": 0,
      "longitude": 0
    },
    "maxApertureValue": 0,
    "meteringMode": "string",
    "rotation": 0,
    "sensor": "string",
    "subjectDistance": 0,
    "time": "string",
    "whiteBalance": "string",
    "width": 0
  },
  "isAppAuthorized": true,
  "kind": "drive#file",
  "labelInfo": {
    "labels": [
      {
        "fields": {
          "property1": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          },
          "property2": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          }
        },
        "id": "string",
        "kind": "string",
        "revisionId": "string"
      }
    ]
  },
  "lastModifyingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "linkShareMetadata": {
    "securityUpdateEligible": true,
    "securityUpdateEnabled": true
  },
  "md5Checksum": "string",
  "mimeType": "string",
  "modifiedByMe": true,
  "modifiedByMeTime": "1970-01-01T00:00:00Z",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "name": "string",
  "originalFilename": "string",
  "ownedByMe": true,
  "owners": [
    {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    }
  ],
  "parents": [
    "string"
  ],
  "permissionIds": [
    "string"
  ],
  "permissions": [
    {
      "allowFileDiscovery": true,
      "deleted": true,
      "displayName": "string",
      "domain": "string",
      "emailAddress": "string",
      "expirationTime": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "drive#permission",
      "pendingOwner": true,
      "photoLink": "string",
      "role": "string",
      "type": "string",
      "view": "string"
    }
  ],
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "quotaBytesUsed": "string",
  "resourceKey": "string",
  "sha1Checksum": "string",
  "sha256Checksum": "string",
  "shared": true,
  "sharedWithMeTime": "1970-01-01T00:00:00Z",
  "sharingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "shortcutDetails": {
    "targetId": "string",
    "targetMimeType": "string",
    "targetResourceKey": "string"
  },
  "size": "string",
  "spaces": [
    "string"
  ],
  "starred": true,
  "teamDriveId": "string",
  "thumbnailLink": "string",
  "thumbnailVersion": "string",
  "trashed": true,
  "trashedTime": "1970-01-01T00:00:00Z",
  "trashingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "version": "string",
  "videoMediaMetadata": {
    "durationMillis": "string",
    "height": 0,
    "width": 0
  },
  "viewedByMe": true,
  "viewedByMeTime": "1970-01-01T00:00:00Z",
  "viewersCanCopyContent": true,
  "webContentLink": "string",
  "webViewLink": "string",
  "writersCanShare": true
}
```

<h3 id="drivefilescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enforceSingleParent|query|boolean|false|Deprecated. Creating files in multiple folders is no longer supported.|
|ignoreDefaultVisibility|query|boolean|false|Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.|
|includeLabels|query|string|false|A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.|
|includePermissionsForView|query|string|false|Specifies which additional view's permissions to include in the response. Only 'published' is supported.|
|keepRevisionForever|query|boolean|false|Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.|
|ocrLanguage|query|string|false|A language hint for OCR processing during image import (ISO 639-1 code).|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|useContentAsIndexableText|query|boolean|false|Whether to use the uploaded content as indexable text.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[File](#schemafile)|false|none|
|» appProperties|body|object|false|A collection of arbitrary key-value pairs which are private to the requesting app.<br>Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.|
|» » **additionalProperties**|body|string|false|none|
|» capabilities|body|object|false|Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.|
|» » canAcceptOwnership|body|boolean|false|Output only. Whether the current user is the pending owner of the file. Not populated for shared drive files.|
|» » canAddChildren|body|boolean|false|Output only. Whether the current user can add children to this folder. This is always false when the item is not a folder.|
|» » canAddFolderFromAnotherDrive|body|boolean|false|Output only. Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives.|
|» » canAddMyDriveParent|body|boolean|false|Output only. Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files.|
|» » canChangeCopyRequiresWriterPermission|body|boolean|false|Output only. Whether the current user can change the `copyRequiresWriterPermission` restriction of this file.|
|» » canChangeSecurityUpdateEnabled|body|boolean|false|Output only. Whether the current user can change the securityUpdateEnabled field on link share metadata.|
|» » canChangeViewersCanCopyContent|body|boolean|false|**Deprecated.** Deprecated: Output only.|
|» » canComment|body|boolean|false|Output only. Whether the current user can comment on this file.|
|» » canCopy|body|boolean|false|Output only. Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.|
|» » canDelete|body|boolean|false|Output only. Whether the current user can delete this file.|
|» » canDeleteChildren|body|boolean|false|Output only. Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.|
|» » canDownload|body|boolean|false|Output only. Whether the current user can download this file.|
|» » canEdit|body|boolean|false|Output only. Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see `canChangeCopyRequiresWriterPermission` or `canModifyContent`.|
|» » canListChildren|body|boolean|false|Output only. Whether the current user can list the children of this folder. This is always false when the item is not a folder.|
|» » canModifyContent|body|boolean|false|Output only. Whether the current user can modify the content of this file.|
|» » canModifyContentRestriction|body|boolean|false|**Deprecated.** Deprecated: Output only. Use one of `canModifyEditorContentRestriction`, `canModifyOwnerContentRestriction` or `canRemoveContentRestriction`.|
|» » canModifyEditorContentRestriction|body|boolean|false|Output only. Whether the current user can add or modify content restrictions on the file which are editor restricted.|
|» » canModifyLabels|body|boolean|false|Output only. Whether the current user can modify the labels on the file.|
|» » canModifyOwnerContentRestriction|body|boolean|false|Output only. Whether the current user can add or modify content restrictions which are owner restricted.|
|» » canMoveChildrenOutOfDrive|body|boolean|false|Output only. Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives.|
|» » canMoveChildrenOutOfTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveChildrenOutOfDrive` instead.|
|» » canMoveChildrenWithinDrive|body|boolean|false|Output only. Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder.|
|» » canMoveChildrenWithinTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveChildrenWithinDrive` instead.|
|» » canMoveItemIntoTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveItemOutOfDrive` instead.|
|» » canMoveItemOutOfDrive|body|boolean|false|Output only. Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added.|
|» » canMoveItemOutOfTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveItemOutOfDrive` instead.|
|» » canMoveItemWithinDrive|body|boolean|false|Output only. Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed.|
|» » canMoveItemWithinTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveItemWithinDrive` instead.|
|» » canMoveTeamDriveItem|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveItemWithinDrive` or `canMoveItemOutOfDrive` instead.|
|» » canReadDrive|body|boolean|false|Output only. Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.|
|» » canReadLabels|body|boolean|false|Output only. Whether the current user can read the labels on the file.|
|» » canReadRevisions|body|boolean|false|Output only. Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.|
|» » canReadTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canReadDrive` instead.|
|» » canRemoveChildren|body|boolean|false|Output only. Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use `canDeleteChildren` or `canTrashChildren` instead.|
|» » canRemoveContentRestriction|body|boolean|false|Output only. Whether there is a content restriction on the file that can be removed by the current user.|
|» » canRemoveMyDriveParent|body|boolean|false|Output only. Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.|
|» » canRename|body|boolean|false|Output only. Whether the current user can rename this file.|
|» » canShare|body|boolean|false|Output only. Whether the current user can modify the sharing settings for this file.|
|» » canTrash|body|boolean|false|Output only. Whether the current user can move this file to trash.|
|» » canTrashChildren|body|boolean|false|Output only. Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.|
|» » canUntrash|body|boolean|false|Output only. Whether the current user can restore this file from trash.|
|» contentHints|body|object|false|Additional information about the content of the file. These fields are never populated in responses.|
|» » indexableText|body|string|false|Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements.|
|» » thumbnail|body|object|false|A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.|
|» » » image|body|string(byte)|false|The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5).|
|» » » mimeType|body|string|false|The MIME type of the thumbnail.|
|» contentRestrictions|body|[[ContentRestriction](#schemacontentrestriction)]|false|Restrictions for accessing the content of the file. Only populated if such a restriction exists.|
|» copyRequiresWriterPermission|body|boolean|false|Whether the options to copy, print, or download this file, should be disabled for readers and commenters.|
|» createdTime|body|string(date-time)|false|The time at which the file was created (RFC 3339 date-time).|
|» description|body|string|false|A short description of the file.|
|» driveId|body|string|false|Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.|
|» explicitlyTrashed|body|boolean|false|Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.|
|» fileExtension|body|string|false|Output only. The final component of `fullFileExtension`. This is only available for files with binary content in Google Drive.|
|» folderColorRgb|body|string|false|The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the `folderColorPalette` field of the About resource. If an unsupported color is specified, the closest color in the palette is used instead.|
|» fullFileExtension|body|string|false|Output only. The full file extension extracted from the `name` field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the `name` field changes, however it is not cleared if the new name does not contain a valid extension.|
|» hasAugmentedPermissions|body|boolean|false|Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.|
|» hasThumbnail|body|boolean|false|Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.|
|» headRevisionId|body|string|false|Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.|
|» iconLink|body|string|false|Output only. A static, unauthenticated link to the file's icon.|
|» id|body|string|false|The ID of the file.|
|» imageMediaMetadata|body|object|false|Output only. Additional metadata about image media, if available.|
|» » aperture|body|number(float)|false|Output only. The aperture used to create the photo (f-number).|
|» » cameraMake|body|string|false|Output only. The make of the camera used to create the photo.|
|» » cameraModel|body|string|false|Output only. The model of the camera used to create the photo.|
|» » colorSpace|body|string|false|Output only. The color space of the photo.|
|» » exposureBias|body|number(float)|false|Output only. The exposure bias of the photo (APEX value).|
|» » exposureMode|body|string|false|Output only. The exposure mode used to create the photo.|
|» » exposureTime|body|number(float)|false|Output only. The length of the exposure, in seconds.|
|» » flashUsed|body|boolean|false|Output only. Whether a flash was used to create the photo.|
|» » focalLength|body|number(float)|false|Output only. The focal length used to create the photo, in millimeters.|
|» » height|body|integer(int32)|false|Output only. The height of the image in pixels.|
|» » isoSpeed|body|integer(int32)|false|Output only. The ISO speed used to create the photo.|
|» » lens|body|string|false|Output only. The lens used to create the photo.|
|» » location|body|object|false|Output only. Geographic location information stored in the image.|
|» » » altitude|body|number(double)|false|Output only. The altitude stored in the image.|
|» » » latitude|body|number(double)|false|Output only. The latitude stored in the image.|
|» » » longitude|body|number(double)|false|Output only. The longitude stored in the image.|
|» » maxApertureValue|body|number(float)|false|Output only. The smallest f-number of the lens at the focal length used to create the photo (APEX value).|
|» » meteringMode|body|string|false|Output only. The metering mode used to create the photo.|
|» » rotation|body|integer(int32)|false|Output only. The number of clockwise 90 degree rotations applied from the image's original orientation.|
|» » sensor|body|string|false|Output only. The type of sensor used to create the photo.|
|» » subjectDistance|body|integer(int32)|false|Output only. The distance to the subject of the photo, in meters.|
|» » time|body|string|false|Output only. The date and time the photo was taken (EXIF DateTime).|
|» » whiteBalance|body|string|false|Output only. The white balance mode used to create the photo.|
|» » width|body|integer(int32)|false|Output only. The width of the image in pixels.|
|» isAppAuthorized|body|boolean|false|Output only. Whether the file was created or opened by the requesting app.|
|» kind|body|string|false|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#file"`.|
|» labelInfo|body|object|false|Output only. An overview of the labels on the file.|
|» » labels|body|[[Label](#schemalabel)]|false|Output only. The set of labels on the file as requested by the label IDs in the `includeLabels` parameter. By default, no labels are returned.|
|» lastModifyingUser|body|[User](#schemauser)|false|Output only. The last user to modify the file.|
|» linkShareMetadata|body|object|false|Contains details about the link URLs that clients are using to refer to this item.|
|» » securityUpdateEligible|body|boolean|false|Output only. Whether the file is eligible for security update.|
|» » securityUpdateEnabled|body|boolean|false|Output only. Whether the security update is enabled for this file.|
|» md5Checksum|body|string|false|Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.|
|» mimeType|body|string|false|The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the About resource.|
|» modifiedByMe|body|boolean|false|Output only. Whether the file has been modified by this user.|
|» modifiedByMeTime|body|string(date-time)|false|The last time the file was modified by the user (RFC 3339 date-time).|
|» modifiedTime|body|string(date-time)|false|he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.|
|» name|body|string|false|The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.|
|» originalFilename|body|string|false|The original filename of the uploaded content if available, or else the original value of the `name` field. This is only available for files with binary content in Google Drive.|
|» ownedByMe|body|boolean|false|Output only. Whether the user owns the file. Not populated for items in shared drives.|
|» owners|body|[[User](#schemauser)]|false|Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.|
|» parents|body|[string]|false|The IDs of the parent folders which contain the file. If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parents of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.|
|» permissionIds|body|[string]|false|Output only. List of permission IDs for users with access to this file.|
|» permissions|body|[[Permission](#schemapermission)]|false|Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.|
|» properties|body|object|false|A collection of arbitrary key-value pairs which are visible to all apps.<br>Entries with null values are cleared in update and copy requests.|
|» » **additionalProperties**|body|string|false|none|
|» quotaBytesUsed|body|string(int64)|false|Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with `keepForever` enabled.|
|» resourceKey|body|string|false|Output only. A key needed to access the item via a shared link.|
|» sha1Checksum|body|string|false|Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.|
|» sha256Checksum|body|string|false|Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.|
|» shared|body|boolean|false|Output only. Whether the file has been shared. Not populated for items in shared drives.|
|» sharedWithMeTime|body|string(date-time)|false|The time at which the file was shared with the user, if applicable (RFC 3339 date-time).|
|» sharingUser|body|[User](#schemauser)|false|Output only. The user who shared the file with the requesting user, if applicable.|
|» shortcutDetails|body|object|false|Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`.|
|» » targetId|body|string|false|The ID of the file that this shortcut points to.|
|» » targetMimeType|body|string|false|Output only. The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created.|
|» » targetResourceKey|body|string|false|Output only. The ResourceKey for the target file.|
|» size|body|string(int64)|false|Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.|
|» spaces|body|[string]|false|Output only. The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.|
|» starred|body|boolean|false|Whether the user has starred the file.|
|» teamDriveId|body|string|false|**Deprecated.** Deprecated: Output only. Use `driveId` instead.|
|» thumbnailLink|body|string|false|Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request.|
|» thumbnailVersion|body|string(int64)|false|Output only. The thumbnail version for use in thumbnail cache invalidation.|
|» trashed|body|boolean|false|Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash.|
|» trashedTime|body|string(date-time)|false|The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.|
|» trashingUser|body|[User](#schemauser)|false|Output only. If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives.|
|» version|body|string(int64)|false|Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.|
|» videoMediaMetadata|body|object|false|Output only. Additional metadata about video media. This may not be available immediately upon upload.|
|» » durationMillis|body|string(int64)|false|Output only. The duration of the video in milliseconds.|
|» » height|body|integer(int32)|false|Output only. The height of the video in pixels.|
|» » width|body|integer(int32)|false|Output only. The width of the video in pixels.|
|» viewedByMe|body|boolean|false|Output only. Whether the file has been viewed by this user.|
|» viewedByMeTime|body|string(date-time)|false|The last time the file was viewed by the user (RFC 3339 date-time).|
|» viewersCanCopyContent|body|boolean|false|**Deprecated.** Deprecated: Use `copyRequiresWriterPermission` instead.|
|» webContentLink|body|string|false|Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.|
|» webViewLink|body|string|false|Output only. A link for opening the file in a relevant Google editor or viewer in a browser.|
|» writersCanShare|body|boolean|false|Whether users with only `writer` permission can modify the file's permissions. Not populated for items in shared drives.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "appProperties": {
    "property1": "string",
    "property2": "string"
  },
  "capabilities": {
    "canAcceptOwnership": true,
    "canAddChildren": true,
    "canAddFolderFromAnotherDrive": true,
    "canAddMyDriveParent": true,
    "canChangeCopyRequiresWriterPermission": true,
    "canChangeSecurityUpdateEnabled": true,
    "canChangeViewersCanCopyContent": true,
    "canComment": true,
    "canCopy": true,
    "canDelete": true,
    "canDeleteChildren": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canModifyContent": true,
    "canModifyContentRestriction": true,
    "canModifyEditorContentRestriction": true,
    "canModifyLabels": true,
    "canModifyOwnerContentRestriction": true,
    "canMoveChildrenOutOfDrive": true,
    "canMoveChildrenOutOfTeamDrive": true,
    "canMoveChildrenWithinDrive": true,
    "canMoveChildrenWithinTeamDrive": true,
    "canMoveItemIntoTeamDrive": true,
    "canMoveItemOutOfDrive": true,
    "canMoveItemOutOfTeamDrive": true,
    "canMoveItemWithinDrive": true,
    "canMoveItemWithinTeamDrive": true,
    "canMoveTeamDriveItem": true,
    "canReadDrive": true,
    "canReadLabels": true,
    "canReadRevisions": true,
    "canReadTeamDrive": true,
    "canRemoveChildren": true,
    "canRemoveContentRestriction": true,
    "canRemoveMyDriveParent": true,
    "canRename": true,
    "canShare": true,
    "canTrash": true,
    "canTrashChildren": true,
    "canUntrash": true
  },
  "contentHints": {
    "indexableText": "string",
    "thumbnail": {
      "image": "string",
      "mimeType": "string"
    }
  },
  "contentRestrictions": [
    {
      "ownerRestricted": true,
      "readOnly": true,
      "reason": "string",
      "restrictingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "restrictionTime": "1970-01-01T00:00:00Z",
      "systemRestricted": true,
      "type": "string"
    }
  ],
  "copyRequiresWriterPermission": true,
  "createdTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "driveId": "string",
  "explicitlyTrashed": true,
  "exportLinks": {
    "property1": "string",
    "property2": "string"
  },
  "fileExtension": "string",
  "folderColorRgb": "string",
  "fullFileExtension": "string",
  "hasAugmentedPermissions": true,
  "hasThumbnail": true,
  "headRevisionId": "string",
  "iconLink": "string",
  "id": "string",
  "imageMediaMetadata": {
    "aperture": 0,
    "cameraMake": "string",
    "cameraModel": "string",
    "colorSpace": "string",
    "exposureBias": 0,
    "exposureMode": "string",
    "exposureTime": 0,
    "flashUsed": true,
    "focalLength": 0,
    "height": 0,
    "isoSpeed": 0,
    "lens": "string",
    "location": {
      "altitude": 0,
      "latitude": 0,
      "longitude": 0
    },
    "maxApertureValue": 0,
    "meteringMode": "string",
    "rotation": 0,
    "sensor": "string",
    "subjectDistance": 0,
    "time": "string",
    "whiteBalance": "string",
    "width": 0
  },
  "isAppAuthorized": true,
  "kind": "drive#file",
  "labelInfo": {
    "labels": [
      {
        "fields": {
          "property1": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          },
          "property2": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          }
        },
        "id": "string",
        "kind": "string",
        "revisionId": "string"
      }
    ]
  },
  "lastModifyingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "linkShareMetadata": {
    "securityUpdateEligible": true,
    "securityUpdateEnabled": true
  },
  "md5Checksum": "string",
  "mimeType": "string",
  "modifiedByMe": true,
  "modifiedByMeTime": "1970-01-01T00:00:00Z",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "name": "string",
  "originalFilename": "string",
  "ownedByMe": true,
  "owners": [
    {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    }
  ],
  "parents": [
    "string"
  ],
  "permissionIds": [
    "string"
  ],
  "permissions": [
    {
      "allowFileDiscovery": true,
      "deleted": true,
      "displayName": "string",
      "domain": "string",
      "emailAddress": "string",
      "expirationTime": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "drive#permission",
      "pendingOwner": true,
      "permissionDetails": [
        {
          "inherited": true,
          "inheritedFrom": "string",
          "permissionType": "string",
          "role": "string"
        }
      ],
      "photoLink": "string",
      "role": "string",
      "teamDrivePermissionDetails": [
        {
          "inherited": true,
          "inheritedFrom": "string",
          "role": "string",
          "teamDrivePermissionType": "string"
        }
      ],
      "type": "string",
      "view": "string"
    }
  ],
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "quotaBytesUsed": "string",
  "resourceKey": "string",
  "sha1Checksum": "string",
  "sha256Checksum": "string",
  "shared": true,
  "sharedWithMeTime": "1970-01-01T00:00:00Z",
  "sharingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "shortcutDetails": {
    "targetId": "string",
    "targetMimeType": "string",
    "targetResourceKey": "string"
  },
  "size": "string",
  "spaces": [
    "string"
  ],
  "starred": true,
  "teamDriveId": "string",
  "thumbnailLink": "string",
  "thumbnailVersion": "string",
  "trashed": true,
  "trashedTime": "1970-01-01T00:00:00Z",
  "trashingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "version": "string",
  "videoMediaMetadata": {
    "durationMillis": "string",
    "height": 0,
    "width": 0
  },
  "viewedByMe": true,
  "viewedByMeTime": "1970-01-01T00:00:00Z",
  "viewersCanCopyContent": true,
  "webContentLink": "string",
  "webViewLink": "string",
  "writersCanShare": true
}
```

<h3 id="drivefilescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[File](#schemafile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file )
</aside>

## drive.files.generateIds

<a id="opIddrive.files.generateIds"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/generateIds \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/generateIds`

Generates a set of file IDs which can be provided in create or copy requests.

<h3 id="drivefilesgenerateids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of IDs to return.|
|space|query|string|false|The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'. (Default: 'drive')|
|type|query|string|false|The type of items which the IDs can be used for. Supported values are 'files' and 'shortcuts'. Note that 'shortcuts' are only supported in the `drive` 'space'. (Default: 'files')|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "ids": [
    "string"
  ],
  "kind": "drive#generatedIds",
  "space": "string"
}
```

<h3 id="drivefilesgenerateids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GeneratedIds](#schemageneratedids)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file )
</aside>

## drive.files.emptyTrash

<a id="opIddrive.files.emptyTrash"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/trash \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /files/trash`

Permanently deletes all of the user's trashed files.

<h3 id="drivefilesemptytrash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|driveId|query|string|false|If set, empties the trash of the provided shared drive.|
|enforceSingleParent|query|boolean|false|Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="drivefilesemptytrash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive )
</aside>

## drive.files.get

<a id="opIddrive.files.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/{fileId}`

 Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download & export files](/drive/api/guides/manage-downloads).

<h3 id="drivefilesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|acknowledgeAbuse|query|boolean|false|Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.|
|includeLabels|query|string|false|A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.|
|includePermissionsForView|query|string|false|Specifies which additional view's permissions to include in the response. Only 'published' is supported.|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "appProperties": {
    "property1": "string",
    "property2": "string"
  },
  "capabilities": {
    "canAcceptOwnership": true,
    "canAddChildren": true,
    "canAddFolderFromAnotherDrive": true,
    "canAddMyDriveParent": true,
    "canChangeCopyRequiresWriterPermission": true,
    "canChangeSecurityUpdateEnabled": true,
    "canChangeViewersCanCopyContent": true,
    "canComment": true,
    "canCopy": true,
    "canDelete": true,
    "canDeleteChildren": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canModifyContent": true,
    "canModifyContentRestriction": true,
    "canModifyEditorContentRestriction": true,
    "canModifyLabels": true,
    "canModifyOwnerContentRestriction": true,
    "canMoveChildrenOutOfDrive": true,
    "canMoveChildrenOutOfTeamDrive": true,
    "canMoveChildrenWithinDrive": true,
    "canMoveChildrenWithinTeamDrive": true,
    "canMoveItemIntoTeamDrive": true,
    "canMoveItemOutOfDrive": true,
    "canMoveItemOutOfTeamDrive": true,
    "canMoveItemWithinDrive": true,
    "canMoveItemWithinTeamDrive": true,
    "canMoveTeamDriveItem": true,
    "canReadDrive": true,
    "canReadLabels": true,
    "canReadRevisions": true,
    "canReadTeamDrive": true,
    "canRemoveChildren": true,
    "canRemoveContentRestriction": true,
    "canRemoveMyDriveParent": true,
    "canRename": true,
    "canShare": true,
    "canTrash": true,
    "canTrashChildren": true,
    "canUntrash": true
  },
  "contentHints": {
    "indexableText": "string",
    "thumbnail": {
      "image": "string",
      "mimeType": "string"
    }
  },
  "contentRestrictions": [
    {
      "ownerRestricted": true,
      "readOnly": true,
      "reason": "string",
      "restrictingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "restrictionTime": "1970-01-01T00:00:00Z",
      "systemRestricted": true,
      "type": "string"
    }
  ],
  "copyRequiresWriterPermission": true,
  "createdTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "driveId": "string",
  "explicitlyTrashed": true,
  "exportLinks": {
    "property1": "string",
    "property2": "string"
  },
  "fileExtension": "string",
  "folderColorRgb": "string",
  "fullFileExtension": "string",
  "hasAugmentedPermissions": true,
  "hasThumbnail": true,
  "headRevisionId": "string",
  "iconLink": "string",
  "id": "string",
  "imageMediaMetadata": {
    "aperture": 0,
    "cameraMake": "string",
    "cameraModel": "string",
    "colorSpace": "string",
    "exposureBias": 0,
    "exposureMode": "string",
    "exposureTime": 0,
    "flashUsed": true,
    "focalLength": 0,
    "height": 0,
    "isoSpeed": 0,
    "lens": "string",
    "location": {
      "altitude": 0,
      "latitude": 0,
      "longitude": 0
    },
    "maxApertureValue": 0,
    "meteringMode": "string",
    "rotation": 0,
    "sensor": "string",
    "subjectDistance": 0,
    "time": "string",
    "whiteBalance": "string",
    "width": 0
  },
  "isAppAuthorized": true,
  "kind": "drive#file",
  "labelInfo": {
    "labels": [
      {
        "fields": {
          "property1": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          },
          "property2": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          }
        },
        "id": "string",
        "kind": "string",
        "revisionId": "string"
      }
    ]
  },
  "lastModifyingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "linkShareMetadata": {
    "securityUpdateEligible": true,
    "securityUpdateEnabled": true
  },
  "md5Checksum": "string",
  "mimeType": "string",
  "modifiedByMe": true,
  "modifiedByMeTime": "1970-01-01T00:00:00Z",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "name": "string",
  "originalFilename": "string",
  "ownedByMe": true,
  "owners": [
    {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    }
  ],
  "parents": [
    "string"
  ],
  "permissionIds": [
    "string"
  ],
  "permissions": [
    {
      "allowFileDiscovery": true,
      "deleted": true,
      "displayName": "string",
      "domain": "string",
      "emailAddress": "string",
      "expirationTime": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "drive#permission",
      "pendingOwner": true,
      "permissionDetails": [
        {
          "inherited": true,
          "inheritedFrom": "string",
          "permissionType": "string",
          "role": "string"
        }
      ],
      "photoLink": "string",
      "role": "string",
      "teamDrivePermissionDetails": [
        {
          "inherited": true,
          "inheritedFrom": "string",
          "role": "string",
          "teamDrivePermissionType": "string"
        }
      ],
      "type": "string",
      "view": "string"
    }
  ],
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "quotaBytesUsed": "string",
  "resourceKey": "string",
  "sha1Checksum": "string",
  "sha256Checksum": "string",
  "shared": true,
  "sharedWithMeTime": "1970-01-01T00:00:00Z",
  "sharingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "shortcutDetails": {
    "targetId": "string",
    "targetMimeType": "string",
    "targetResourceKey": "string"
  },
  "size": "string",
  "spaces": [
    "string"
  ],
  "starred": true,
  "teamDriveId": "string",
  "thumbnailLink": "string",
  "thumbnailVersion": "string",
  "trashed": true,
  "trashedTime": "1970-01-01T00:00:00Z",
  "trashingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "version": "string",
  "videoMediaMetadata": {
    "durationMillis": "string",
    "height": 0,
    "width": 0
  },
  "viewedByMe": true,
  "viewedByMeTime": "1970-01-01T00:00:00Z",
  "viewersCanCopyContent": true,
  "webContentLink": "string",
  "webViewLink": "string",
  "writersCanShare": true
}
```

<h3 id="drivefilesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[File](#schemafile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.files.delete

<a id="opIddrive.files.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /files/{fileId}`

Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.

<h3 id="drivefilesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|enforceSingleParent|query|boolean|false|Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="drivefilesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file )
</aside>

## drive.files.update

<a id="opIddrive.files.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string \
  -X PATCH \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"appProperties":{"property1":"string","property2":"string"},"capabilities":{"canAcceptOwnership":true,"canAddChildren":true,"canAddFolderFromAnotherDrive":true,"canAddMyDriveParent":true,"canChangeCopyRequiresWriterPermission":true,"canChangeSecurityUpdateEnabled":true,"canChangeViewersCanCopyContent":true,"canComment":true,"canCopy":true,"canDelete":true,"canDeleteChildren":true,"canDownload":true,"canEdit":true,"canListChildren":true,"canModifyContent":true,"canModifyContentRestriction":true,"canModifyEditorContentRestriction":true,"canModifyLabels":true,"canModifyOwnerContentRestriction":true,"canMoveChildrenOutOfDrive":true,"canMoveChildrenOutOfTeamDrive":true,"canMoveChildrenWithinDrive":true,"canMoveChildrenWithinTeamDrive":true,"canMoveItemIntoTeamDrive":true,"canMoveItemOutOfDrive":true,"canMoveItemOutOfTeamDrive":true,"canMoveItemWithinDrive":true,"canMoveItemWithinTeamDrive":true,"canMoveTeamDriveItem":true,"canReadDrive":true,"canReadLabels":true,"canReadRevisions":true,"canReadTeamDrive":true,"canRemoveChildren":true,"canRemoveContentRestriction":true,"canRemoveMyDriveParent":true,"canRename":true,"canShare":true,"canTrash":true,"canTrashChildren":true,"canUntrash":true},"contentHints":{"indexableText":"string","thumbnail":{"image":"string","mimeType":"string"}},"contentRestrictions":[{"ownerRestricted":true,"readOnly":true,"reason":"string","restrictingUser":{"displayName":"string","emailAddress":"string","kind":"drive#user","me":true,"permissionId":"string","photoLink":"string"},"restrictionTime":"1970-01-01T00:00:00Z","systemRestricted":true,"type":"string"}],"copyRequiresWriterPermission":true,"createdTime":"1970-01-01T00:00:00Z","description":"string","driveId":"string","explicitlyTrashed":true,"fileExtension":"string","folderColorRgb":"string","fullFileExtension":"string","hasAugmentedPermissions":true,"hasThumbnail":true,"headRevisionId":"string","iconLink":"string","id":"string","imageMediaMetadata":{"aperture":0,"cameraMake":"string","cameraModel":"string","colorSpace":"string","exposureBias":0,"exposureMode":"string","exposureTime":0,"flashUsed":true,"focalLength":0,"height":0,"isoSpeed":0,"lens":"string","location":{"altitude":0,"latitude":0,"longitude":0},"maxApertureValue":0,"meteringMode":"string","rotation":0,"sensor":"string","subjectDistance":0,"time":"string","whiteBalance":"string","width":0},"isAppAuthorized":true,"kind":"drive#file","labelInfo":{"labels":[{"fields":{"property1":{"dateString":["1970-01-01"],"id":"string","integer":["string"],"kind":"string","selection":["string"],"text":["string"],"user":[{"displayName":"string","emailAddress":"string","kind":"drive#user","me":true,"permissionId":"string","photoLink":"string"}],"valueType":"string"},"property2":{"dateString":["1970-01-01"],"id":"string","integer":["string"],"kind":"string","selection":["string"],"text":["string"],"user":[{"displayName":"string","emailAddress":"string","kind":"drive#user","me":true,"permissionId":"string","photoLink":"string"}],"valueType":"string"}},"id":"string","kind":"string","revisionId":"string"}]},"lastModifyingUser":{"displayName":"string","emailAddress":"string","kind":"drive#user","me":true,"permissionId":"string","photoLink":"string"},"linkShareMetadata":{"securityUpdateEligible":true,"securityUpdateEnabled":true},"md5Checksum":"string","mimeType":"string","modifiedByMe":true,"modifiedByMeTime":"1970-01-01T00:00:00Z","modifiedTime":"1970-01-01T00:00:00Z","name":"string","originalFilename":"string","ownedByMe":true,"owners":[{"displayName":"string","emailAddress":"string","kind":"drive#user","me":true,"permissionId":"string","photoLink":"string"}],"parents":["string"],"permissionIds":["string"],"permissions":[{"allowFileDiscovery":true,"deleted":true,"displayName":"string","domain":"string","emailAddress":"string","expirationTime":"1970-01-01T00:00:00Z","id":"string","kind":"drive#permission","pendingOwner":true,"photoLink":"string","role":"string","type":"string","view":"string"}],"properties":{"property1":"string","property2":"string"},"quotaBytesUsed":"string","resourceKey":"string","sha1Checksum":"string","sha256Checksum":"string","shared":true,"sharedWithMeTime":"1970-01-01T00:00:00Z","sharingUser":{"displayName":"string","emailAddress":"string","kind":"drive#user","me":true,"permissionId":"string","photoLink":"string"},"shortcutDetails":{"targetId":"string","targetMimeType":"string","targetResourceKey":"string"},"size":"string","spaces":["string"],"starred":true,"teamDriveId":"string","thumbnailLink":"string","thumbnailVersion":"string","trashed":true,"trashedTime":"1970-01-01T00:00:00Z","trashingUser":{"displayName":"string","emailAddress":"string","kind":"drive#user","me":true,"permissionId":"string","photoLink":"string"},"version":"string","videoMediaMetadata":{"durationMillis":"string","height":0,"width":0},"viewedByMe":true,"viewedByMeTime":"1970-01-01T00:00:00Z","viewersCanCopyContent":true,"webContentLink":"string","webViewLink":"string","writersCanShare":true}'
```

`PATCH /files/{fileId}`

 Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/drive/api/guides/manage-uploads).

> Body parameter

```json
{
  "appProperties": {
    "property1": "string",
    "property2": "string"
  },
  "capabilities": {
    "canAcceptOwnership": true,
    "canAddChildren": true,
    "canAddFolderFromAnotherDrive": true,
    "canAddMyDriveParent": true,
    "canChangeCopyRequiresWriterPermission": true,
    "canChangeSecurityUpdateEnabled": true,
    "canChangeViewersCanCopyContent": true,
    "canComment": true,
    "canCopy": true,
    "canDelete": true,
    "canDeleteChildren": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canModifyContent": true,
    "canModifyContentRestriction": true,
    "canModifyEditorContentRestriction": true,
    "canModifyLabels": true,
    "canModifyOwnerContentRestriction": true,
    "canMoveChildrenOutOfDrive": true,
    "canMoveChildrenOutOfTeamDrive": true,
    "canMoveChildrenWithinDrive": true,
    "canMoveChildrenWithinTeamDrive": true,
    "canMoveItemIntoTeamDrive": true,
    "canMoveItemOutOfDrive": true,
    "canMoveItemOutOfTeamDrive": true,
    "canMoveItemWithinDrive": true,
    "canMoveItemWithinTeamDrive": true,
    "canMoveTeamDriveItem": true,
    "canReadDrive": true,
    "canReadLabels": true,
    "canReadRevisions": true,
    "canReadTeamDrive": true,
    "canRemoveChildren": true,
    "canRemoveContentRestriction": true,
    "canRemoveMyDriveParent": true,
    "canRename": true,
    "canShare": true,
    "canTrash": true,
    "canTrashChildren": true,
    "canUntrash": true
  },
  "contentHints": {
    "indexableText": "string",
    "thumbnail": {
      "image": "string",
      "mimeType": "string"
    }
  },
  "contentRestrictions": [
    {
      "ownerRestricted": true,
      "readOnly": true,
      "reason": "string",
      "restrictingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "restrictionTime": "1970-01-01T00:00:00Z",
      "systemRestricted": true,
      "type": "string"
    }
  ],
  "copyRequiresWriterPermission": true,
  "createdTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "driveId": "string",
  "explicitlyTrashed": true,
  "fileExtension": "string",
  "folderColorRgb": "string",
  "fullFileExtension": "string",
  "hasAugmentedPermissions": true,
  "hasThumbnail": true,
  "headRevisionId": "string",
  "iconLink": "string",
  "id": "string",
  "imageMediaMetadata": {
    "aperture": 0,
    "cameraMake": "string",
    "cameraModel": "string",
    "colorSpace": "string",
    "exposureBias": 0,
    "exposureMode": "string",
    "exposureTime": 0,
    "flashUsed": true,
    "focalLength": 0,
    "height": 0,
    "isoSpeed": 0,
    "lens": "string",
    "location": {
      "altitude": 0,
      "latitude": 0,
      "longitude": 0
    },
    "maxApertureValue": 0,
    "meteringMode": "string",
    "rotation": 0,
    "sensor": "string",
    "subjectDistance": 0,
    "time": "string",
    "whiteBalance": "string",
    "width": 0
  },
  "isAppAuthorized": true,
  "kind": "drive#file",
  "labelInfo": {
    "labels": [
      {
        "fields": {
          "property1": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          },
          "property2": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          }
        },
        "id": "string",
        "kind": "string",
        "revisionId": "string"
      }
    ]
  },
  "lastModifyingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "linkShareMetadata": {
    "securityUpdateEligible": true,
    "securityUpdateEnabled": true
  },
  "md5Checksum": "string",
  "mimeType": "string",
  "modifiedByMe": true,
  "modifiedByMeTime": "1970-01-01T00:00:00Z",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "name": "string",
  "originalFilename": "string",
  "ownedByMe": true,
  "owners": [
    {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    }
  ],
  "parents": [
    "string"
  ],
  "permissionIds": [
    "string"
  ],
  "permissions": [
    {
      "allowFileDiscovery": true,
      "deleted": true,
      "displayName": "string",
      "domain": "string",
      "emailAddress": "string",
      "expirationTime": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "drive#permission",
      "pendingOwner": true,
      "photoLink": "string",
      "role": "string",
      "type": "string",
      "view": "string"
    }
  ],
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "quotaBytesUsed": "string",
  "resourceKey": "string",
  "sha1Checksum": "string",
  "sha256Checksum": "string",
  "shared": true,
  "sharedWithMeTime": "1970-01-01T00:00:00Z",
  "sharingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "shortcutDetails": {
    "targetId": "string",
    "targetMimeType": "string",
    "targetResourceKey": "string"
  },
  "size": "string",
  "spaces": [
    "string"
  ],
  "starred": true,
  "teamDriveId": "string",
  "thumbnailLink": "string",
  "thumbnailVersion": "string",
  "trashed": true,
  "trashedTime": "1970-01-01T00:00:00Z",
  "trashingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "version": "string",
  "videoMediaMetadata": {
    "durationMillis": "string",
    "height": 0,
    "width": 0
  },
  "viewedByMe": true,
  "viewedByMeTime": "1970-01-01T00:00:00Z",
  "viewersCanCopyContent": true,
  "webContentLink": "string",
  "webViewLink": "string",
  "writersCanShare": true
}
```

<h3 id="drivefilesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|addParents|query|string|false|A comma-separated list of parent IDs to add.|
|enforceSingleParent|query|boolean|false|Deprecated: Adding files to multiple folders is no longer supported. Use shortcuts instead.|
|includeLabels|query|string|false|A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.|
|includePermissionsForView|query|string|false|Specifies which additional view's permissions to include in the response. Only 'published' is supported.|
|keepRevisionForever|query|boolean|false|Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.|
|ocrLanguage|query|string|false|A language hint for OCR processing during image import (ISO 639-1 code).|
|removeParents|query|string|false|A comma-separated list of parent IDs to remove.|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|useContentAsIndexableText|query|boolean|false|Whether to use the uploaded content as indexable text.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[File](#schemafile)|false|none|
|» appProperties|body|object|false|A collection of arbitrary key-value pairs which are private to the requesting app.<br>Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.|
|» » **additionalProperties**|body|string|false|none|
|» capabilities|body|object|false|Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.|
|» » canAcceptOwnership|body|boolean|false|Output only. Whether the current user is the pending owner of the file. Not populated for shared drive files.|
|» » canAddChildren|body|boolean|false|Output only. Whether the current user can add children to this folder. This is always false when the item is not a folder.|
|» » canAddFolderFromAnotherDrive|body|boolean|false|Output only. Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives.|
|» » canAddMyDriveParent|body|boolean|false|Output only. Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files.|
|» » canChangeCopyRequiresWriterPermission|body|boolean|false|Output only. Whether the current user can change the `copyRequiresWriterPermission` restriction of this file.|
|» » canChangeSecurityUpdateEnabled|body|boolean|false|Output only. Whether the current user can change the securityUpdateEnabled field on link share metadata.|
|» » canChangeViewersCanCopyContent|body|boolean|false|**Deprecated.** Deprecated: Output only.|
|» » canComment|body|boolean|false|Output only. Whether the current user can comment on this file.|
|» » canCopy|body|boolean|false|Output only. Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.|
|» » canDelete|body|boolean|false|Output only. Whether the current user can delete this file.|
|» » canDeleteChildren|body|boolean|false|Output only. Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.|
|» » canDownload|body|boolean|false|Output only. Whether the current user can download this file.|
|» » canEdit|body|boolean|false|Output only. Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see `canChangeCopyRequiresWriterPermission` or `canModifyContent`.|
|» » canListChildren|body|boolean|false|Output only. Whether the current user can list the children of this folder. This is always false when the item is not a folder.|
|» » canModifyContent|body|boolean|false|Output only. Whether the current user can modify the content of this file.|
|» » canModifyContentRestriction|body|boolean|false|**Deprecated.** Deprecated: Output only. Use one of `canModifyEditorContentRestriction`, `canModifyOwnerContentRestriction` or `canRemoveContentRestriction`.|
|» » canModifyEditorContentRestriction|body|boolean|false|Output only. Whether the current user can add or modify content restrictions on the file which are editor restricted.|
|» » canModifyLabels|body|boolean|false|Output only. Whether the current user can modify the labels on the file.|
|» » canModifyOwnerContentRestriction|body|boolean|false|Output only. Whether the current user can add or modify content restrictions which are owner restricted.|
|» » canMoveChildrenOutOfDrive|body|boolean|false|Output only. Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives.|
|» » canMoveChildrenOutOfTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveChildrenOutOfDrive` instead.|
|» » canMoveChildrenWithinDrive|body|boolean|false|Output only. Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder.|
|» » canMoveChildrenWithinTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveChildrenWithinDrive` instead.|
|» » canMoveItemIntoTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveItemOutOfDrive` instead.|
|» » canMoveItemOutOfDrive|body|boolean|false|Output only. Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added.|
|» » canMoveItemOutOfTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveItemOutOfDrive` instead.|
|» » canMoveItemWithinDrive|body|boolean|false|Output only. Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed.|
|» » canMoveItemWithinTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveItemWithinDrive` instead.|
|» » canMoveTeamDriveItem|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveItemWithinDrive` or `canMoveItemOutOfDrive` instead.|
|» » canReadDrive|body|boolean|false|Output only. Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.|
|» » canReadLabels|body|boolean|false|Output only. Whether the current user can read the labels on the file.|
|» » canReadRevisions|body|boolean|false|Output only. Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.|
|» » canReadTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canReadDrive` instead.|
|» » canRemoveChildren|body|boolean|false|Output only. Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use `canDeleteChildren` or `canTrashChildren` instead.|
|» » canRemoveContentRestriction|body|boolean|false|Output only. Whether there is a content restriction on the file that can be removed by the current user.|
|» » canRemoveMyDriveParent|body|boolean|false|Output only. Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.|
|» » canRename|body|boolean|false|Output only. Whether the current user can rename this file.|
|» » canShare|body|boolean|false|Output only. Whether the current user can modify the sharing settings for this file.|
|» » canTrash|body|boolean|false|Output only. Whether the current user can move this file to trash.|
|» » canTrashChildren|body|boolean|false|Output only. Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.|
|» » canUntrash|body|boolean|false|Output only. Whether the current user can restore this file from trash.|
|» contentHints|body|object|false|Additional information about the content of the file. These fields are never populated in responses.|
|» » indexableText|body|string|false|Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements.|
|» » thumbnail|body|object|false|A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.|
|» » » image|body|string(byte)|false|The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5).|
|» » » mimeType|body|string|false|The MIME type of the thumbnail.|
|» contentRestrictions|body|[[ContentRestriction](#schemacontentrestriction)]|false|Restrictions for accessing the content of the file. Only populated if such a restriction exists.|
|» copyRequiresWriterPermission|body|boolean|false|Whether the options to copy, print, or download this file, should be disabled for readers and commenters.|
|» createdTime|body|string(date-time)|false|The time at which the file was created (RFC 3339 date-time).|
|» description|body|string|false|A short description of the file.|
|» driveId|body|string|false|Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.|
|» explicitlyTrashed|body|boolean|false|Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.|
|» fileExtension|body|string|false|Output only. The final component of `fullFileExtension`. This is only available for files with binary content in Google Drive.|
|» folderColorRgb|body|string|false|The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the `folderColorPalette` field of the About resource. If an unsupported color is specified, the closest color in the palette is used instead.|
|» fullFileExtension|body|string|false|Output only. The full file extension extracted from the `name` field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the `name` field changes, however it is not cleared if the new name does not contain a valid extension.|
|» hasAugmentedPermissions|body|boolean|false|Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.|
|» hasThumbnail|body|boolean|false|Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.|
|» headRevisionId|body|string|false|Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.|
|» iconLink|body|string|false|Output only. A static, unauthenticated link to the file's icon.|
|» id|body|string|false|The ID of the file.|
|» imageMediaMetadata|body|object|false|Output only. Additional metadata about image media, if available.|
|» » aperture|body|number(float)|false|Output only. The aperture used to create the photo (f-number).|
|» » cameraMake|body|string|false|Output only. The make of the camera used to create the photo.|
|» » cameraModel|body|string|false|Output only. The model of the camera used to create the photo.|
|» » colorSpace|body|string|false|Output only. The color space of the photo.|
|» » exposureBias|body|number(float)|false|Output only. The exposure bias of the photo (APEX value).|
|» » exposureMode|body|string|false|Output only. The exposure mode used to create the photo.|
|» » exposureTime|body|number(float)|false|Output only. The length of the exposure, in seconds.|
|» » flashUsed|body|boolean|false|Output only. Whether a flash was used to create the photo.|
|» » focalLength|body|number(float)|false|Output only. The focal length used to create the photo, in millimeters.|
|» » height|body|integer(int32)|false|Output only. The height of the image in pixels.|
|» » isoSpeed|body|integer(int32)|false|Output only. The ISO speed used to create the photo.|
|» » lens|body|string|false|Output only. The lens used to create the photo.|
|» » location|body|object|false|Output only. Geographic location information stored in the image.|
|» » » altitude|body|number(double)|false|Output only. The altitude stored in the image.|
|» » » latitude|body|number(double)|false|Output only. The latitude stored in the image.|
|» » » longitude|body|number(double)|false|Output only. The longitude stored in the image.|
|» » maxApertureValue|body|number(float)|false|Output only. The smallest f-number of the lens at the focal length used to create the photo (APEX value).|
|» » meteringMode|body|string|false|Output only. The metering mode used to create the photo.|
|» » rotation|body|integer(int32)|false|Output only. The number of clockwise 90 degree rotations applied from the image's original orientation.|
|» » sensor|body|string|false|Output only. The type of sensor used to create the photo.|
|» » subjectDistance|body|integer(int32)|false|Output only. The distance to the subject of the photo, in meters.|
|» » time|body|string|false|Output only. The date and time the photo was taken (EXIF DateTime).|
|» » whiteBalance|body|string|false|Output only. The white balance mode used to create the photo.|
|» » width|body|integer(int32)|false|Output only. The width of the image in pixels.|
|» isAppAuthorized|body|boolean|false|Output only. Whether the file was created or opened by the requesting app.|
|» kind|body|string|false|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#file"`.|
|» labelInfo|body|object|false|Output only. An overview of the labels on the file.|
|» » labels|body|[[Label](#schemalabel)]|false|Output only. The set of labels on the file as requested by the label IDs in the `includeLabels` parameter. By default, no labels are returned.|
|» lastModifyingUser|body|[User](#schemauser)|false|Output only. The last user to modify the file.|
|» linkShareMetadata|body|object|false|Contains details about the link URLs that clients are using to refer to this item.|
|» » securityUpdateEligible|body|boolean|false|Output only. Whether the file is eligible for security update.|
|» » securityUpdateEnabled|body|boolean|false|Output only. Whether the security update is enabled for this file.|
|» md5Checksum|body|string|false|Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.|
|» mimeType|body|string|false|The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the About resource.|
|» modifiedByMe|body|boolean|false|Output only. Whether the file has been modified by this user.|
|» modifiedByMeTime|body|string(date-time)|false|The last time the file was modified by the user (RFC 3339 date-time).|
|» modifiedTime|body|string(date-time)|false|he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.|
|» name|body|string|false|The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.|
|» originalFilename|body|string|false|The original filename of the uploaded content if available, or else the original value of the `name` field. This is only available for files with binary content in Google Drive.|
|» ownedByMe|body|boolean|false|Output only. Whether the user owns the file. Not populated for items in shared drives.|
|» owners|body|[[User](#schemauser)]|false|Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.|
|» parents|body|[string]|false|The IDs of the parent folders which contain the file. If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parents of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.|
|» permissionIds|body|[string]|false|Output only. List of permission IDs for users with access to this file.|
|» permissions|body|[[Permission](#schemapermission)]|false|Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.|
|» properties|body|object|false|A collection of arbitrary key-value pairs which are visible to all apps.<br>Entries with null values are cleared in update and copy requests.|
|» » **additionalProperties**|body|string|false|none|
|» quotaBytesUsed|body|string(int64)|false|Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with `keepForever` enabled.|
|» resourceKey|body|string|false|Output only. A key needed to access the item via a shared link.|
|» sha1Checksum|body|string|false|Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.|
|» sha256Checksum|body|string|false|Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.|
|» shared|body|boolean|false|Output only. Whether the file has been shared. Not populated for items in shared drives.|
|» sharedWithMeTime|body|string(date-time)|false|The time at which the file was shared with the user, if applicable (RFC 3339 date-time).|
|» sharingUser|body|[User](#schemauser)|false|Output only. The user who shared the file with the requesting user, if applicable.|
|» shortcutDetails|body|object|false|Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`.|
|» » targetId|body|string|false|The ID of the file that this shortcut points to.|
|» » targetMimeType|body|string|false|Output only. The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created.|
|» » targetResourceKey|body|string|false|Output only. The ResourceKey for the target file.|
|» size|body|string(int64)|false|Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.|
|» spaces|body|[string]|false|Output only. The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.|
|» starred|body|boolean|false|Whether the user has starred the file.|
|» teamDriveId|body|string|false|**Deprecated.** Deprecated: Output only. Use `driveId` instead.|
|» thumbnailLink|body|string|false|Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request.|
|» thumbnailVersion|body|string(int64)|false|Output only. The thumbnail version for use in thumbnail cache invalidation.|
|» trashed|body|boolean|false|Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash.|
|» trashedTime|body|string(date-time)|false|The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.|
|» trashingUser|body|[User](#schemauser)|false|Output only. If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives.|
|» version|body|string(int64)|false|Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.|
|» videoMediaMetadata|body|object|false|Output only. Additional metadata about video media. This may not be available immediately upon upload.|
|» » durationMillis|body|string(int64)|false|Output only. The duration of the video in milliseconds.|
|» » height|body|integer(int32)|false|Output only. The height of the video in pixels.|
|» » width|body|integer(int32)|false|Output only. The width of the video in pixels.|
|» viewedByMe|body|boolean|false|Output only. Whether the file has been viewed by this user.|
|» viewedByMeTime|body|string(date-time)|false|The last time the file was viewed by the user (RFC 3339 date-time).|
|» viewersCanCopyContent|body|boolean|false|**Deprecated.** Deprecated: Use `copyRequiresWriterPermission` instead.|
|» webContentLink|body|string|false|Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.|
|» webViewLink|body|string|false|Output only. A link for opening the file in a relevant Google editor or viewer in a browser.|
|» writersCanShare|body|boolean|false|Whether users with only `writer` permission can modify the file's permissions. Not populated for items in shared drives.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "appProperties": {
    "property1": "string",
    "property2": "string"
  },
  "capabilities": {
    "canAcceptOwnership": true,
    "canAddChildren": true,
    "canAddFolderFromAnotherDrive": true,
    "canAddMyDriveParent": true,
    "canChangeCopyRequiresWriterPermission": true,
    "canChangeSecurityUpdateEnabled": true,
    "canChangeViewersCanCopyContent": true,
    "canComment": true,
    "canCopy": true,
    "canDelete": true,
    "canDeleteChildren": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canModifyContent": true,
    "canModifyContentRestriction": true,
    "canModifyEditorContentRestriction": true,
    "canModifyLabels": true,
    "canModifyOwnerContentRestriction": true,
    "canMoveChildrenOutOfDrive": true,
    "canMoveChildrenOutOfTeamDrive": true,
    "canMoveChildrenWithinDrive": true,
    "canMoveChildrenWithinTeamDrive": true,
    "canMoveItemIntoTeamDrive": true,
    "canMoveItemOutOfDrive": true,
    "canMoveItemOutOfTeamDrive": true,
    "canMoveItemWithinDrive": true,
    "canMoveItemWithinTeamDrive": true,
    "canMoveTeamDriveItem": true,
    "canReadDrive": true,
    "canReadLabels": true,
    "canReadRevisions": true,
    "canReadTeamDrive": true,
    "canRemoveChildren": true,
    "canRemoveContentRestriction": true,
    "canRemoveMyDriveParent": true,
    "canRename": true,
    "canShare": true,
    "canTrash": true,
    "canTrashChildren": true,
    "canUntrash": true
  },
  "contentHints": {
    "indexableText": "string",
    "thumbnail": {
      "image": "string",
      "mimeType": "string"
    }
  },
  "contentRestrictions": [
    {
      "ownerRestricted": true,
      "readOnly": true,
      "reason": "string",
      "restrictingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "restrictionTime": "1970-01-01T00:00:00Z",
      "systemRestricted": true,
      "type": "string"
    }
  ],
  "copyRequiresWriterPermission": true,
  "createdTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "driveId": "string",
  "explicitlyTrashed": true,
  "exportLinks": {
    "property1": "string",
    "property2": "string"
  },
  "fileExtension": "string",
  "folderColorRgb": "string",
  "fullFileExtension": "string",
  "hasAugmentedPermissions": true,
  "hasThumbnail": true,
  "headRevisionId": "string",
  "iconLink": "string",
  "id": "string",
  "imageMediaMetadata": {
    "aperture": 0,
    "cameraMake": "string",
    "cameraModel": "string",
    "colorSpace": "string",
    "exposureBias": 0,
    "exposureMode": "string",
    "exposureTime": 0,
    "flashUsed": true,
    "focalLength": 0,
    "height": 0,
    "isoSpeed": 0,
    "lens": "string",
    "location": {
      "altitude": 0,
      "latitude": 0,
      "longitude": 0
    },
    "maxApertureValue": 0,
    "meteringMode": "string",
    "rotation": 0,
    "sensor": "string",
    "subjectDistance": 0,
    "time": "string",
    "whiteBalance": "string",
    "width": 0
  },
  "isAppAuthorized": true,
  "kind": "drive#file",
  "labelInfo": {
    "labels": [
      {
        "fields": {
          "property1": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          },
          "property2": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          }
        },
        "id": "string",
        "kind": "string",
        "revisionId": "string"
      }
    ]
  },
  "lastModifyingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "linkShareMetadata": {
    "securityUpdateEligible": true,
    "securityUpdateEnabled": true
  },
  "md5Checksum": "string",
  "mimeType": "string",
  "modifiedByMe": true,
  "modifiedByMeTime": "1970-01-01T00:00:00Z",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "name": "string",
  "originalFilename": "string",
  "ownedByMe": true,
  "owners": [
    {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    }
  ],
  "parents": [
    "string"
  ],
  "permissionIds": [
    "string"
  ],
  "permissions": [
    {
      "allowFileDiscovery": true,
      "deleted": true,
      "displayName": "string",
      "domain": "string",
      "emailAddress": "string",
      "expirationTime": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "drive#permission",
      "pendingOwner": true,
      "permissionDetails": [
        {
          "inherited": true,
          "inheritedFrom": "string",
          "permissionType": "string",
          "role": "string"
        }
      ],
      "photoLink": "string",
      "role": "string",
      "teamDrivePermissionDetails": [
        {
          "inherited": true,
          "inheritedFrom": "string",
          "role": "string",
          "teamDrivePermissionType": "string"
        }
      ],
      "type": "string",
      "view": "string"
    }
  ],
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "quotaBytesUsed": "string",
  "resourceKey": "string",
  "sha1Checksum": "string",
  "sha256Checksum": "string",
  "shared": true,
  "sharedWithMeTime": "1970-01-01T00:00:00Z",
  "sharingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "shortcutDetails": {
    "targetId": "string",
    "targetMimeType": "string",
    "targetResourceKey": "string"
  },
  "size": "string",
  "spaces": [
    "string"
  ],
  "starred": true,
  "teamDriveId": "string",
  "thumbnailLink": "string",
  "thumbnailVersion": "string",
  "trashed": true,
  "trashedTime": "1970-01-01T00:00:00Z",
  "trashingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "version": "string",
  "videoMediaMetadata": {
    "durationMillis": "string",
    "height": 0,
    "width": 0
  },
  "viewedByMe": true,
  "viewedByMeTime": "1970-01-01T00:00:00Z",
  "viewersCanCopyContent": true,
  "webContentLink": "string",
  "webViewLink": "string",
  "writersCanShare": true
}
```

<h3 id="drivefilesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[File](#schemafile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.scripts ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.scripts )
</aside>

## drive.files.copy

<a id="opIddrive.files.copy"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/copy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appProperties": {
      "property1": "string",
      "property2": "string"
    },
    "capabilities": {
      "canAcceptOwnership": true,
      "canAddChildren": true,
      "canAddFolderFromAnotherDrive": true,
      "canAddMyDriveParent": true,
      "canChangeCopyRequiresWriterPermission": true,
      "canChangeSecurityUpdateEnabled": true,
      "canChangeViewersCanCopyContent": true,
      "canComment": true,
      "canCopy": true,
      "canDelete": true,
      "canDeleteChildren": true,
      "canDownload": true,
      "canEdit": true,
      "canListChildren": true,
      "canModifyContent": true,
      "canModifyContentRestriction": true,
      "canModifyEditorContentRestriction": true,
      "canModifyLabels": true,
      "canModifyOwnerContentRestriction": true,
      "canMoveChildrenOutOfDrive": true,
      "canMoveChildrenOutOfTeamDrive": true,
      "canMoveChildrenWithinDrive": true,
      "canMoveChildrenWithinTeamDrive": true,
      "canMoveItemIntoTeamDrive": true,
      "canMoveItemOutOfDrive": true,
      "canMoveItemOutOfTeamDrive": true,
      "canMoveItemWithinDrive": true,
      "canMoveItemWithinTeamDrive": true,
      "canMoveTeamDriveItem": true,
      "canReadDrive": true,
      "canReadLabels": true,
      "canReadRevisions": true,
      "canReadTeamDrive": true,
      "canRemoveChildren": true,
      "canRemoveContentRestriction": true,
      "canRemoveMyDriveParent": true,
      "canRename": true,
      "canShare": true,
      "canTrash": true,
      "canTrashChildren": true,
      "canUntrash": true
    },
    "contentHints": {
      "indexableText": "string",
      "thumbnail": {
        "image": "string",
        "mimeType": "string"
      }
    },
    "contentRestrictions": [
      {
        "ownerRestricted": true,
        "readOnly": true,
        "reason": "string",
        "restrictingUser": {
          "displayName": "string",
          "emailAddress": "string",
          "kind": "drive#user",
          "me": true,
          "permissionId": "string",
          "photoLink": "string"
        },
        "restrictionTime": "1970-01-01T00:00:00Z",
        "systemRestricted": true,
        "type": "string"
      }
    ],
    "copyRequiresWriterPermission": true,
    "createdTime": "1970-01-01T00:00:00Z",
    "description": "string",
    "driveId": "string",
    "explicitlyTrashed": true,
    "fileExtension": "string",
    "folderColorRgb": "string",
    "fullFileExtension": "string",
    "hasAugmentedPermissions": true,
    "hasThumbnail": true,
    "headRevisionId": "string",
    "iconLink": "string",
    "id": "string",
    "imageMediaMetadata": {
      "aperture": 0,
      "cameraMake": "string",
      "cameraModel": "string",
      "colorSpace": "string",
      "exposureBias": 0,
      "exposureMode": "string",
      "exposureTime": 0,
      "flashUsed": true,
      "focalLength": 0,
      "height": 0,
      "isoSpeed": 0,
      "lens": "string",
      "location": {
        "altitude": 0,
        "latitude": 0,
        "longitude": 0
      },
      "maxApertureValue": 0,
      "meteringMode": "string",
      "rotation": 0,
      "sensor": "string",
      "subjectDistance": 0,
      "time": "string",
      "whiteBalance": "string",
      "width": 0
    },
    "isAppAuthorized": true,
    "kind": "drive#file",
    "labelInfo": {
      "labels": [
        {
          "fields": {
            "property1": {
              "dateString": [
                "1970-01-01"
              ],
              "id": "string",
              "integer": [
                "string"
              ],
              "kind": "string",
              "selection": [
                "string"
              ],
              "text": [
                "string"
              ],
              "user": [
                {
                  "displayName": "string",
                  "emailAddress": "string",
                  "kind": "drive#user",
                  "me": true,
                  "permissionId": "string",
                  "photoLink": "string"
                }
              ],
              "valueType": "string"
            },
            "property2": {
              "dateString": [
                "1970-01-01"
              ],
              "id": "string",
              "integer": [
                "string"
              ],
              "kind": "string",
              "selection": [
                "string"
              ],
              "text": [
                "string"
              ],
              "user": [
                {
                  "displayName": "string",
                  "emailAddress": "string",
                  "kind": "drive#user",
                  "me": true,
                  "permissionId": "string",
                  "photoLink": "string"
                }
              ],
              "valueType": "string"
            }
          },
          "id": "string",
          "kind": "string",
          "revisionId": "string"
        }
      ]
    },
    "lastModifyingUser": {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    },
    "linkShareMetadata": {
      "securityUpdateEligible": true,
      "securityUpdateEnabled": true
    },
    "md5Checksum": "string",
    "mimeType": "string",
    "modifiedByMe": true,
    "modifiedByMeTime": "1970-01-01T00:00:00Z",
    "modifiedTime": "1970-01-01T00:00:00Z",
    "name": "string",
    "originalFilename": "string",
    "ownedByMe": true,
    "owners": [
      {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      }
    ],
    "parents": [
      "string"
    ],
    "permissionIds": [
      "string"
    ],
    "permissions": [
      {
        "allowFileDiscovery": true,
        "deleted": true,
        "displayName": "string",
        "domain": "string",
        "emailAddress": "string",
        "expirationTime": "1970-01-01T00:00:00Z",
        "id": "string",
        "kind": "drive#permission",
        "pendingOwner": true,
        "photoLink": "string",
        "role": "string",
        "type": "string",
        "view": "string"
      }
    ],
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "quotaBytesUsed": "string",
    "resourceKey": "string",
    "sha1Checksum": "string",
    "sha256Checksum": "string",
    "shared": true,
    "sharedWithMeTime": "1970-01-01T00:00:00Z",
    "sharingUser": {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    },
    "shortcutDetails": {
      "targetId": "string",
      "targetMimeType": "string",
      "targetResourceKey": "string"
    },
    "size": "string",
    "spaces": [
      "string"
    ],
    "starred": true,
    "teamDriveId": "string",
    "thumbnailLink": "string",
    "thumbnailVersion": "string",
    "trashed": true,
    "trashedTime": "1970-01-01T00:00:00Z",
    "trashingUser": {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    },
    "version": "string",
    "videoMediaMetadata": {
      "durationMillis": "string",
      "height": 0,
      "width": 0
    },
    "viewedByMe": true,
    "viewedByMeTime": "1970-01-01T00:00:00Z",
    "viewersCanCopyContent": true,
    "webContentLink": "string",
    "webViewLink": "string",
    "writersCanShare": true
  }'
```

`POST /files/{fileId}/copy`

Creates a copy of a file and applies any requested updates with patch semantics.

> Body parameter

```json
{
  "appProperties": {
    "property1": "string",
    "property2": "string"
  },
  "capabilities": {
    "canAcceptOwnership": true,
    "canAddChildren": true,
    "canAddFolderFromAnotherDrive": true,
    "canAddMyDriveParent": true,
    "canChangeCopyRequiresWriterPermission": true,
    "canChangeSecurityUpdateEnabled": true,
    "canChangeViewersCanCopyContent": true,
    "canComment": true,
    "canCopy": true,
    "canDelete": true,
    "canDeleteChildren": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canModifyContent": true,
    "canModifyContentRestriction": true,
    "canModifyEditorContentRestriction": true,
    "canModifyLabels": true,
    "canModifyOwnerContentRestriction": true,
    "canMoveChildrenOutOfDrive": true,
    "canMoveChildrenOutOfTeamDrive": true,
    "canMoveChildrenWithinDrive": true,
    "canMoveChildrenWithinTeamDrive": true,
    "canMoveItemIntoTeamDrive": true,
    "canMoveItemOutOfDrive": true,
    "canMoveItemOutOfTeamDrive": true,
    "canMoveItemWithinDrive": true,
    "canMoveItemWithinTeamDrive": true,
    "canMoveTeamDriveItem": true,
    "canReadDrive": true,
    "canReadLabels": true,
    "canReadRevisions": true,
    "canReadTeamDrive": true,
    "canRemoveChildren": true,
    "canRemoveContentRestriction": true,
    "canRemoveMyDriveParent": true,
    "canRename": true,
    "canShare": true,
    "canTrash": true,
    "canTrashChildren": true,
    "canUntrash": true
  },
  "contentHints": {
    "indexableText": "string",
    "thumbnail": {
      "image": "string",
      "mimeType": "string"
    }
  },
  "contentRestrictions": [
    {
      "ownerRestricted": true,
      "readOnly": true,
      "reason": "string",
      "restrictingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "restrictionTime": "1970-01-01T00:00:00Z",
      "systemRestricted": true,
      "type": "string"
    }
  ],
  "copyRequiresWriterPermission": true,
  "createdTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "driveId": "string",
  "explicitlyTrashed": true,
  "fileExtension": "string",
  "folderColorRgb": "string",
  "fullFileExtension": "string",
  "hasAugmentedPermissions": true,
  "hasThumbnail": true,
  "headRevisionId": "string",
  "iconLink": "string",
  "id": "string",
  "imageMediaMetadata": {
    "aperture": 0,
    "cameraMake": "string",
    "cameraModel": "string",
    "colorSpace": "string",
    "exposureBias": 0,
    "exposureMode": "string",
    "exposureTime": 0,
    "flashUsed": true,
    "focalLength": 0,
    "height": 0,
    "isoSpeed": 0,
    "lens": "string",
    "location": {
      "altitude": 0,
      "latitude": 0,
      "longitude": 0
    },
    "maxApertureValue": 0,
    "meteringMode": "string",
    "rotation": 0,
    "sensor": "string",
    "subjectDistance": 0,
    "time": "string",
    "whiteBalance": "string",
    "width": 0
  },
  "isAppAuthorized": true,
  "kind": "drive#file",
  "labelInfo": {
    "labels": [
      {
        "fields": {
          "property1": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          },
          "property2": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          }
        },
        "id": "string",
        "kind": "string",
        "revisionId": "string"
      }
    ]
  },
  "lastModifyingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "linkShareMetadata": {
    "securityUpdateEligible": true,
    "securityUpdateEnabled": true
  },
  "md5Checksum": "string",
  "mimeType": "string",
  "modifiedByMe": true,
  "modifiedByMeTime": "1970-01-01T00:00:00Z",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "name": "string",
  "originalFilename": "string",
  "ownedByMe": true,
  "owners": [
    {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    }
  ],
  "parents": [
    "string"
  ],
  "permissionIds": [
    "string"
  ],
  "permissions": [
    {
      "allowFileDiscovery": true,
      "deleted": true,
      "displayName": "string",
      "domain": "string",
      "emailAddress": "string",
      "expirationTime": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "drive#permission",
      "pendingOwner": true,
      "photoLink": "string",
      "role": "string",
      "type": "string",
      "view": "string"
    }
  ],
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "quotaBytesUsed": "string",
  "resourceKey": "string",
  "sha1Checksum": "string",
  "sha256Checksum": "string",
  "shared": true,
  "sharedWithMeTime": "1970-01-01T00:00:00Z",
  "sharingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "shortcutDetails": {
    "targetId": "string",
    "targetMimeType": "string",
    "targetResourceKey": "string"
  },
  "size": "string",
  "spaces": [
    "string"
  ],
  "starred": true,
  "teamDriveId": "string",
  "thumbnailLink": "string",
  "thumbnailVersion": "string",
  "trashed": true,
  "trashedTime": "1970-01-01T00:00:00Z",
  "trashingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "version": "string",
  "videoMediaMetadata": {
    "durationMillis": "string",
    "height": 0,
    "width": 0
  },
  "viewedByMe": true,
  "viewedByMeTime": "1970-01-01T00:00:00Z",
  "viewersCanCopyContent": true,
  "webContentLink": "string",
  "webViewLink": "string",
  "writersCanShare": true
}
```

<h3 id="drivefilescopy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|enforceSingleParent|query|boolean|false|Deprecated. Copying files into multiple folders is no longer supported. Use shortcuts instead.|
|ignoreDefaultVisibility|query|boolean|false|Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.|
|includeLabels|query|string|false|A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.|
|includePermissionsForView|query|string|false|Specifies which additional view's permissions to include in the response. Only 'published' is supported.|
|keepRevisionForever|query|boolean|false|Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.|
|ocrLanguage|query|string|false|A language hint for OCR processing during image import (ISO 639-1 code).|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[File](#schemafile)|false|none|
|» appProperties|body|object|false|A collection of arbitrary key-value pairs which are private to the requesting app.<br>Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.|
|» » **additionalProperties**|body|string|false|none|
|» capabilities|body|object|false|Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.|
|» » canAcceptOwnership|body|boolean|false|Output only. Whether the current user is the pending owner of the file. Not populated for shared drive files.|
|» » canAddChildren|body|boolean|false|Output only. Whether the current user can add children to this folder. This is always false when the item is not a folder.|
|» » canAddFolderFromAnotherDrive|body|boolean|false|Output only. Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives.|
|» » canAddMyDriveParent|body|boolean|false|Output only. Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files.|
|» » canChangeCopyRequiresWriterPermission|body|boolean|false|Output only. Whether the current user can change the `copyRequiresWriterPermission` restriction of this file.|
|» » canChangeSecurityUpdateEnabled|body|boolean|false|Output only. Whether the current user can change the securityUpdateEnabled field on link share metadata.|
|» » canChangeViewersCanCopyContent|body|boolean|false|**Deprecated.** Deprecated: Output only.|
|» » canComment|body|boolean|false|Output only. Whether the current user can comment on this file.|
|» » canCopy|body|boolean|false|Output only. Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.|
|» » canDelete|body|boolean|false|Output only. Whether the current user can delete this file.|
|» » canDeleteChildren|body|boolean|false|Output only. Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.|
|» » canDownload|body|boolean|false|Output only. Whether the current user can download this file.|
|» » canEdit|body|boolean|false|Output only. Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see `canChangeCopyRequiresWriterPermission` or `canModifyContent`.|
|» » canListChildren|body|boolean|false|Output only. Whether the current user can list the children of this folder. This is always false when the item is not a folder.|
|» » canModifyContent|body|boolean|false|Output only. Whether the current user can modify the content of this file.|
|» » canModifyContentRestriction|body|boolean|false|**Deprecated.** Deprecated: Output only. Use one of `canModifyEditorContentRestriction`, `canModifyOwnerContentRestriction` or `canRemoveContentRestriction`.|
|» » canModifyEditorContentRestriction|body|boolean|false|Output only. Whether the current user can add or modify content restrictions on the file which are editor restricted.|
|» » canModifyLabels|body|boolean|false|Output only. Whether the current user can modify the labels on the file.|
|» » canModifyOwnerContentRestriction|body|boolean|false|Output only. Whether the current user can add or modify content restrictions which are owner restricted.|
|» » canMoveChildrenOutOfDrive|body|boolean|false|Output only. Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives.|
|» » canMoveChildrenOutOfTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveChildrenOutOfDrive` instead.|
|» » canMoveChildrenWithinDrive|body|boolean|false|Output only. Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder.|
|» » canMoveChildrenWithinTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveChildrenWithinDrive` instead.|
|» » canMoveItemIntoTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveItemOutOfDrive` instead.|
|» » canMoveItemOutOfDrive|body|boolean|false|Output only. Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added.|
|» » canMoveItemOutOfTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveItemOutOfDrive` instead.|
|» » canMoveItemWithinDrive|body|boolean|false|Output only. Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed.|
|» » canMoveItemWithinTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveItemWithinDrive` instead.|
|» » canMoveTeamDriveItem|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canMoveItemWithinDrive` or `canMoveItemOutOfDrive` instead.|
|» » canReadDrive|body|boolean|false|Output only. Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.|
|» » canReadLabels|body|boolean|false|Output only. Whether the current user can read the labels on the file.|
|» » canReadRevisions|body|boolean|false|Output only. Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.|
|» » canReadTeamDrive|body|boolean|false|**Deprecated.** Deprecated: Output only. Use `canReadDrive` instead.|
|» » canRemoveChildren|body|boolean|false|Output only. Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use `canDeleteChildren` or `canTrashChildren` instead.|
|» » canRemoveContentRestriction|body|boolean|false|Output only. Whether there is a content restriction on the file that can be removed by the current user.|
|» » canRemoveMyDriveParent|body|boolean|false|Output only. Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.|
|» » canRename|body|boolean|false|Output only. Whether the current user can rename this file.|
|» » canShare|body|boolean|false|Output only. Whether the current user can modify the sharing settings for this file.|
|» » canTrash|body|boolean|false|Output only. Whether the current user can move this file to trash.|
|» » canTrashChildren|body|boolean|false|Output only. Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.|
|» » canUntrash|body|boolean|false|Output only. Whether the current user can restore this file from trash.|
|» contentHints|body|object|false|Additional information about the content of the file. These fields are never populated in responses.|
|» » indexableText|body|string|false|Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements.|
|» » thumbnail|body|object|false|A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.|
|» » » image|body|string(byte)|false|The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5).|
|» » » mimeType|body|string|false|The MIME type of the thumbnail.|
|» contentRestrictions|body|[[ContentRestriction](#schemacontentrestriction)]|false|Restrictions for accessing the content of the file. Only populated if such a restriction exists.|
|» copyRequiresWriterPermission|body|boolean|false|Whether the options to copy, print, or download this file, should be disabled for readers and commenters.|
|» createdTime|body|string(date-time)|false|The time at which the file was created (RFC 3339 date-time).|
|» description|body|string|false|A short description of the file.|
|» driveId|body|string|false|Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.|
|» explicitlyTrashed|body|boolean|false|Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.|
|» fileExtension|body|string|false|Output only. The final component of `fullFileExtension`. This is only available for files with binary content in Google Drive.|
|» folderColorRgb|body|string|false|The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the `folderColorPalette` field of the About resource. If an unsupported color is specified, the closest color in the palette is used instead.|
|» fullFileExtension|body|string|false|Output only. The full file extension extracted from the `name` field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the `name` field changes, however it is not cleared if the new name does not contain a valid extension.|
|» hasAugmentedPermissions|body|boolean|false|Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.|
|» hasThumbnail|body|boolean|false|Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.|
|» headRevisionId|body|string|false|Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.|
|» iconLink|body|string|false|Output only. A static, unauthenticated link to the file's icon.|
|» id|body|string|false|The ID of the file.|
|» imageMediaMetadata|body|object|false|Output only. Additional metadata about image media, if available.|
|» » aperture|body|number(float)|false|Output only. The aperture used to create the photo (f-number).|
|» » cameraMake|body|string|false|Output only. The make of the camera used to create the photo.|
|» » cameraModel|body|string|false|Output only. The model of the camera used to create the photo.|
|» » colorSpace|body|string|false|Output only. The color space of the photo.|
|» » exposureBias|body|number(float)|false|Output only. The exposure bias of the photo (APEX value).|
|» » exposureMode|body|string|false|Output only. The exposure mode used to create the photo.|
|» » exposureTime|body|number(float)|false|Output only. The length of the exposure, in seconds.|
|» » flashUsed|body|boolean|false|Output only. Whether a flash was used to create the photo.|
|» » focalLength|body|number(float)|false|Output only. The focal length used to create the photo, in millimeters.|
|» » height|body|integer(int32)|false|Output only. The height of the image in pixels.|
|» » isoSpeed|body|integer(int32)|false|Output only. The ISO speed used to create the photo.|
|» » lens|body|string|false|Output only. The lens used to create the photo.|
|» » location|body|object|false|Output only. Geographic location information stored in the image.|
|» » » altitude|body|number(double)|false|Output only. The altitude stored in the image.|
|» » » latitude|body|number(double)|false|Output only. The latitude stored in the image.|
|» » » longitude|body|number(double)|false|Output only. The longitude stored in the image.|
|» » maxApertureValue|body|number(float)|false|Output only. The smallest f-number of the lens at the focal length used to create the photo (APEX value).|
|» » meteringMode|body|string|false|Output only. The metering mode used to create the photo.|
|» » rotation|body|integer(int32)|false|Output only. The number of clockwise 90 degree rotations applied from the image's original orientation.|
|» » sensor|body|string|false|Output only. The type of sensor used to create the photo.|
|» » subjectDistance|body|integer(int32)|false|Output only. The distance to the subject of the photo, in meters.|
|» » time|body|string|false|Output only. The date and time the photo was taken (EXIF DateTime).|
|» » whiteBalance|body|string|false|Output only. The white balance mode used to create the photo.|
|» » width|body|integer(int32)|false|Output only. The width of the image in pixels.|
|» isAppAuthorized|body|boolean|false|Output only. Whether the file was created or opened by the requesting app.|
|» kind|body|string|false|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#file"`.|
|» labelInfo|body|object|false|Output only. An overview of the labels on the file.|
|» » labels|body|[[Label](#schemalabel)]|false|Output only. The set of labels on the file as requested by the label IDs in the `includeLabels` parameter. By default, no labels are returned.|
|» lastModifyingUser|body|[User](#schemauser)|false|Output only. The last user to modify the file.|
|» linkShareMetadata|body|object|false|Contains details about the link URLs that clients are using to refer to this item.|
|» » securityUpdateEligible|body|boolean|false|Output only. Whether the file is eligible for security update.|
|» » securityUpdateEnabled|body|boolean|false|Output only. Whether the security update is enabled for this file.|
|» md5Checksum|body|string|false|Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.|
|» mimeType|body|string|false|The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the About resource.|
|» modifiedByMe|body|boolean|false|Output only. Whether the file has been modified by this user.|
|» modifiedByMeTime|body|string(date-time)|false|The last time the file was modified by the user (RFC 3339 date-time).|
|» modifiedTime|body|string(date-time)|false|he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.|
|» name|body|string|false|The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.|
|» originalFilename|body|string|false|The original filename of the uploaded content if available, or else the original value of the `name` field. This is only available for files with binary content in Google Drive.|
|» ownedByMe|body|boolean|false|Output only. Whether the user owns the file. Not populated for items in shared drives.|
|» owners|body|[[User](#schemauser)]|false|Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.|
|» parents|body|[string]|false|The IDs of the parent folders which contain the file. If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parents of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.|
|» permissionIds|body|[string]|false|Output only. List of permission IDs for users with access to this file.|
|» permissions|body|[[Permission](#schemapermission)]|false|Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.|
|» properties|body|object|false|A collection of arbitrary key-value pairs which are visible to all apps.<br>Entries with null values are cleared in update and copy requests.|
|» » **additionalProperties**|body|string|false|none|
|» quotaBytesUsed|body|string(int64)|false|Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with `keepForever` enabled.|
|» resourceKey|body|string|false|Output only. A key needed to access the item via a shared link.|
|» sha1Checksum|body|string|false|Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.|
|» sha256Checksum|body|string|false|Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.|
|» shared|body|boolean|false|Output only. Whether the file has been shared. Not populated for items in shared drives.|
|» sharedWithMeTime|body|string(date-time)|false|The time at which the file was shared with the user, if applicable (RFC 3339 date-time).|
|» sharingUser|body|[User](#schemauser)|false|Output only. The user who shared the file with the requesting user, if applicable.|
|» shortcutDetails|body|object|false|Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`.|
|» » targetId|body|string|false|The ID of the file that this shortcut points to.|
|» » targetMimeType|body|string|false|Output only. The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created.|
|» » targetResourceKey|body|string|false|Output only. The ResourceKey for the target file.|
|» size|body|string(int64)|false|Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.|
|» spaces|body|[string]|false|Output only. The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.|
|» starred|body|boolean|false|Whether the user has starred the file.|
|» teamDriveId|body|string|false|**Deprecated.** Deprecated: Output only. Use `driveId` instead.|
|» thumbnailLink|body|string|false|Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request.|
|» thumbnailVersion|body|string(int64)|false|Output only. The thumbnail version for use in thumbnail cache invalidation.|
|» trashed|body|boolean|false|Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash.|
|» trashedTime|body|string(date-time)|false|The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.|
|» trashingUser|body|[User](#schemauser)|false|Output only. If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives.|
|» version|body|string(int64)|false|Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.|
|» videoMediaMetadata|body|object|false|Output only. Additional metadata about video media. This may not be available immediately upon upload.|
|» » durationMillis|body|string(int64)|false|Output only. The duration of the video in milliseconds.|
|» » height|body|integer(int32)|false|Output only. The height of the video in pixels.|
|» » width|body|integer(int32)|false|Output only. The width of the video in pixels.|
|» viewedByMe|body|boolean|false|Output only. Whether the file has been viewed by this user.|
|» viewedByMeTime|body|string(date-time)|false|The last time the file was viewed by the user (RFC 3339 date-time).|
|» viewersCanCopyContent|body|boolean|false|**Deprecated.** Deprecated: Use `copyRequiresWriterPermission` instead.|
|» webContentLink|body|string|false|Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.|
|» webViewLink|body|string|false|Output only. A link for opening the file in a relevant Google editor or viewer in a browser.|
|» writersCanShare|body|boolean|false|Whether users with only `writer` permission can modify the file's permissions. Not populated for items in shared drives.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "appProperties": {
    "property1": "string",
    "property2": "string"
  },
  "capabilities": {
    "canAcceptOwnership": true,
    "canAddChildren": true,
    "canAddFolderFromAnotherDrive": true,
    "canAddMyDriveParent": true,
    "canChangeCopyRequiresWriterPermission": true,
    "canChangeSecurityUpdateEnabled": true,
    "canChangeViewersCanCopyContent": true,
    "canComment": true,
    "canCopy": true,
    "canDelete": true,
    "canDeleteChildren": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canModifyContent": true,
    "canModifyContentRestriction": true,
    "canModifyEditorContentRestriction": true,
    "canModifyLabels": true,
    "canModifyOwnerContentRestriction": true,
    "canMoveChildrenOutOfDrive": true,
    "canMoveChildrenOutOfTeamDrive": true,
    "canMoveChildrenWithinDrive": true,
    "canMoveChildrenWithinTeamDrive": true,
    "canMoveItemIntoTeamDrive": true,
    "canMoveItemOutOfDrive": true,
    "canMoveItemOutOfTeamDrive": true,
    "canMoveItemWithinDrive": true,
    "canMoveItemWithinTeamDrive": true,
    "canMoveTeamDriveItem": true,
    "canReadDrive": true,
    "canReadLabels": true,
    "canReadRevisions": true,
    "canReadTeamDrive": true,
    "canRemoveChildren": true,
    "canRemoveContentRestriction": true,
    "canRemoveMyDriveParent": true,
    "canRename": true,
    "canShare": true,
    "canTrash": true,
    "canTrashChildren": true,
    "canUntrash": true
  },
  "contentHints": {
    "indexableText": "string",
    "thumbnail": {
      "image": "string",
      "mimeType": "string"
    }
  },
  "contentRestrictions": [
    {
      "ownerRestricted": true,
      "readOnly": true,
      "reason": "string",
      "restrictingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "restrictionTime": "1970-01-01T00:00:00Z",
      "systemRestricted": true,
      "type": "string"
    }
  ],
  "copyRequiresWriterPermission": true,
  "createdTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "driveId": "string",
  "explicitlyTrashed": true,
  "exportLinks": {
    "property1": "string",
    "property2": "string"
  },
  "fileExtension": "string",
  "folderColorRgb": "string",
  "fullFileExtension": "string",
  "hasAugmentedPermissions": true,
  "hasThumbnail": true,
  "headRevisionId": "string",
  "iconLink": "string",
  "id": "string",
  "imageMediaMetadata": {
    "aperture": 0,
    "cameraMake": "string",
    "cameraModel": "string",
    "colorSpace": "string",
    "exposureBias": 0,
    "exposureMode": "string",
    "exposureTime": 0,
    "flashUsed": true,
    "focalLength": 0,
    "height": 0,
    "isoSpeed": 0,
    "lens": "string",
    "location": {
      "altitude": 0,
      "latitude": 0,
      "longitude": 0
    },
    "maxApertureValue": 0,
    "meteringMode": "string",
    "rotation": 0,
    "sensor": "string",
    "subjectDistance": 0,
    "time": "string",
    "whiteBalance": "string",
    "width": 0
  },
  "isAppAuthorized": true,
  "kind": "drive#file",
  "labelInfo": {
    "labels": [
      {
        "fields": {
          "property1": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          },
          "property2": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          }
        },
        "id": "string",
        "kind": "string",
        "revisionId": "string"
      }
    ]
  },
  "lastModifyingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "linkShareMetadata": {
    "securityUpdateEligible": true,
    "securityUpdateEnabled": true
  },
  "md5Checksum": "string",
  "mimeType": "string",
  "modifiedByMe": true,
  "modifiedByMeTime": "1970-01-01T00:00:00Z",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "name": "string",
  "originalFilename": "string",
  "ownedByMe": true,
  "owners": [
    {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    }
  ],
  "parents": [
    "string"
  ],
  "permissionIds": [
    "string"
  ],
  "permissions": [
    {
      "allowFileDiscovery": true,
      "deleted": true,
      "displayName": "string",
      "domain": "string",
      "emailAddress": "string",
      "expirationTime": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "drive#permission",
      "pendingOwner": true,
      "permissionDetails": [
        {
          "inherited": true,
          "inheritedFrom": "string",
          "permissionType": "string",
          "role": "string"
        }
      ],
      "photoLink": "string",
      "role": "string",
      "teamDrivePermissionDetails": [
        {
          "inherited": true,
          "inheritedFrom": "string",
          "role": "string",
          "teamDrivePermissionType": "string"
        }
      ],
      "type": "string",
      "view": "string"
    }
  ],
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "quotaBytesUsed": "string",
  "resourceKey": "string",
  "sha1Checksum": "string",
  "sha256Checksum": "string",
  "shared": true,
  "sharedWithMeTime": "1970-01-01T00:00:00Z",
  "sharingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "shortcutDetails": {
    "targetId": "string",
    "targetMimeType": "string",
    "targetResourceKey": "string"
  },
  "size": "string",
  "spaces": [
    "string"
  ],
  "starred": true,
  "teamDriveId": "string",
  "thumbnailLink": "string",
  "thumbnailVersion": "string",
  "trashed": true,
  "trashedTime": "1970-01-01T00:00:00Z",
  "trashingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "version": "string",
  "videoMediaMetadata": {
    "durationMillis": "string",
    "height": 0,
    "width": 0
  },
  "viewedByMe": true,
  "viewedByMeTime": "1970-01-01T00:00:00Z",
  "viewersCanCopyContent": true,
  "webContentLink": "string",
  "webViewLink": "string",
  "writersCanShare": true
}
```

<h3 id="drivefilescopy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[File](#schemafile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly )
</aside>

## drive.files.export

<a id="opIddrive.files.export"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/drive/v3/files/string/export?mimeType=string' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/{fileId}/export`

Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.

<h3 id="drivefilesexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|mimeType|query|string|true|Required. The MIME type of the format requested for this export.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="drivefilesexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.files.listLabels

<a id="opIddrive.files.listLabels"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/listLabels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/{fileId}/listLabels`

Lists the labels on a file.

<h3 id="drivefileslistlabels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID for the file.|
|maxResults|query|integer|false|The maximum number of labels to return per page. When not set, defaults to 100.|
|pageToken|query|string|false|The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "kind": "string",
  "labels": [
    {
      "fields": {
        "property1": {
          "dateString": [
            "1970-01-01"
          ],
          "id": "string",
          "integer": [
            "string"
          ],
          "kind": "string",
          "selection": [
            "string"
          ],
          "text": [
            "string"
          ],
          "user": [
            {
              "displayName": "string",
              "emailAddress": "string",
              "kind": "drive#user",
              "me": true,
              "permissionId": "string",
              "photoLink": "string"
            }
          ],
          "valueType": "string"
        },
        "property2": {
          "dateString": [
            "1970-01-01"
          ],
          "id": "string",
          "integer": [
            "string"
          ],
          "kind": "string",
          "selection": [
            "string"
          ],
          "text": [
            "string"
          ],
          "user": [
            {
              "displayName": "string",
              "emailAddress": "string",
              "kind": "drive#user",
              "me": true,
              "permissionId": "string",
              "photoLink": "string"
            }
          ],
          "valueType": "string"
        }
      },
      "id": "string",
      "kind": "string",
      "revisionId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="drivefileslistlabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LabelList](#schemalabellist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.files.modifyLabels

<a id="opIddrive.files.modifyLabels"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/modifyLabels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "kind": "string",
    "labelModifications": [
      {
        "fieldModifications": [
          {
            "fieldId": "string",
            "kind": "string",
            "setDateValues": [
              "1970-01-01"
            ],
            "setIntegerValues": [
              "string"
            ],
            "setSelectionValues": [
              "string"
            ],
            "setTextValues": [
              "string"
            ],
            "setUserValues": [
              "string"
            ],
            "unsetValues": true
          }
        ],
        "kind": "string",
        "labelId": "string",
        "removeLabel": true
      }
    ]
  }'
```

`POST /files/{fileId}/modifyLabels`

Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.

> Body parameter

```json
{
  "kind": "string",
  "labelModifications": [
    {
      "fieldModifications": [
        {
          "fieldId": "string",
          "kind": "string",
          "setDateValues": [
            "1970-01-01"
          ],
          "setIntegerValues": [
            "string"
          ],
          "setSelectionValues": [
            "string"
          ],
          "setTextValues": [
            "string"
          ],
          "setUserValues": [
            "string"
          ],
          "unsetValues": true
        }
      ],
      "kind": "string",
      "labelId": "string",
      "removeLabel": true
    }
  ]
}
```

<h3 id="drivefilesmodifylabels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file to which the labels belong.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ModifyLabelsRequest](#schemamodifylabelsrequest)|false|none|
|» kind|body|string|false|This is always drive#modifyLabelsRequest.|
|» labelModifications|body|[[LabelModification](#schemalabelmodification)]|false|The list of modifications to apply to the labels on the file.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "kind": "string",
  "modifiedLabels": [
    {
      "fields": {
        "property1": {
          "dateString": [
            "1970-01-01"
          ],
          "id": "string",
          "integer": [
            "string"
          ],
          "kind": "string",
          "selection": [
            "string"
          ],
          "text": [
            "string"
          ],
          "user": [
            {
              "displayName": "string",
              "emailAddress": "string",
              "kind": "drive#user",
              "me": true,
              "permissionId": "string",
              "photoLink": "string"
            }
          ],
          "valueType": "string"
        },
        "property2": {
          "dateString": [
            "1970-01-01"
          ],
          "id": "string",
          "integer": [
            "string"
          ],
          "kind": "string",
          "selection": [
            "string"
          ],
          "text": [
            "string"
          ],
          "user": [
            {
              "displayName": "string",
              "emailAddress": "string",
              "kind": "drive#user",
              "me": true,
              "permissionId": "string",
              "photoLink": "string"
            }
          ],
          "valueType": "string"
        }
      },
      "id": "string",
      "kind": "string",
      "revisionId": "string"
    }
  ]
}
```

<h3 id="drivefilesmodifylabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ModifyLabelsResponse](#schemamodifylabelsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata )
</aside>

## drive.files.watch

<a id="opIddrive.files.watch"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/watch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "expiration": "string",
    "id": "string",
    "kind": "api#channel",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "payload": true,
    "resourceId": "string",
    "resourceUri": "string",
    "token": "string",
    "type": "string"
  }'
```

`POST /files/{fileId}/watch`

Subscribes to changes to a file.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="drivefileswatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|acknowledgeAbuse|query|boolean|false|Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.|
|includeLabels|query|string|false|A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.|
|includePermissionsForView|query|string|false|Specifies which additional view's permissions to include in the response. Only 'published' is supported.|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|» » **additionalProperties**|body|string|false|none|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel. Valid values are "web_hook" or "webhook".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="drivefileswatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

<h1 id="google-drive-api-permissions">permissions</h1>

## drive.permissions.list

<a id="opIddrive.permissions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/{fileId}/permissions`

Lists a file's or shared drive's permissions.

<h3 id="drivepermissionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file or shared drive.|
|includePermissionsForView|query|string|false|Specifies which additional view's permissions to include in the response. Only 'published' is supported.|
|pageSize|query|integer|false|The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.|
|pageToken|query|string|false|The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|useDomainAdminAccess|query|boolean|false|Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "kind": "drive#permissionList",
  "nextPageToken": "string",
  "permissions": [
    {
      "allowFileDiscovery": true,
      "deleted": true,
      "displayName": "string",
      "domain": "string",
      "emailAddress": "string",
      "expirationTime": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "drive#permission",
      "pendingOwner": true,
      "permissionDetails": [
        {
          "inherited": true,
          "inheritedFrom": "string",
          "permissionType": "string",
          "role": "string"
        }
      ],
      "photoLink": "string",
      "role": "string",
      "teamDrivePermissionDetails": [
        {
          "inherited": true,
          "inheritedFrom": "string",
          "role": "string",
          "teamDrivePermissionType": "string"
        }
      ],
      "type": "string",
      "view": "string"
    }
  ]
}
```

<h3 id="drivepermissionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PermissionList](#schemapermissionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.permissions.create

<a id="opIddrive.permissions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/permissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowFileDiscovery": true,
    "deleted": true,
    "displayName": "string",
    "domain": "string",
    "emailAddress": "string",
    "expirationTime": "1970-01-01T00:00:00Z",
    "id": "string",
    "kind": "drive#permission",
    "pendingOwner": true,
    "photoLink": "string",
    "role": "string",
    "type": "string",
    "view": "string"
  }'
```

`POST /files/{fileId}/permissions`

Creates a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

> Body parameter

```json
{
  "allowFileDiscovery": true,
  "deleted": true,
  "displayName": "string",
  "domain": "string",
  "emailAddress": "string",
  "expirationTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "kind": "drive#permission",
  "pendingOwner": true,
  "photoLink": "string",
  "role": "string",
  "type": "string",
  "view": "string"
}
```

<h3 id="drivepermissionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file or shared drive.|
|emailMessage|query|string|false|A plain text custom message to include in the notification email.|
|enforceSingleParent|query|boolean|false|Deprecated: See `moveToNewOwnersRoot` for details.|
|moveToNewOwnersRoot|query|boolean|false|This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed.|
|sendNotificationEmail|query|boolean|false|Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|transferOwnership|query|boolean|false|Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.|
|useDomainAdminAccess|query|boolean|false|Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Permission](#schemapermission)|false|none|
|» allowFileDiscovery|body|boolean|false|Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type `domain` or `anyone`.|
|» deleted|body|boolean|false|Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.|
|» displayName|body|string|false|Output only. The "pretty" name of the value of the permission. The following is a list of examples for each type of permission: * `user` - User's full name, as defined for their Google account, such as "Joe Smith." * `group` - Name of the Google Group, such as "The Company Administrators." * `domain` - String domain name, such as "thecompany.com." * `anyone` - No `displayName` is present.|
|» domain|body|string|false|The domain to which this permission refers.|
|» emailAddress|body|string|false|The email address of the user or group to which this permission refers.|
|» expirationTime|body|string(date-time)|false|The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future|
|» id|body|string|false|Output only. The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as `permissionId`. IDs should be treated as opaque values.|
|» kind|body|string|false|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#permission"`.|
|» pendingOwner|body|boolean|false|Whether the account associated with this permission is a pending owner. Only populated for `user` type permissions for files that are not in a shared drive.|
|» photoLink|body|string|false|Output only. A link to the user's profile photo, if available.|
|» role|body|string|false|The role granted by this permission. While new values may be supported in the future, the following are currently allowed: * `owner` * `organizer` * `fileOrganizer` * `writer` * `commenter` * `reader`|
|» type|body|string|false|The type of the grantee. Valid values are: * `user` * `group` * `domain` * `anyone` When creating a permission, if `type` is `user` or `group`, you must provide an `emailAddress` for the user or group. When `type` is `domain`, you must provide a `domain`. There isn't extra information required for an `anyone` type.|
|» view|body|string|false|Indicates the view for this permission. Only populated for permissions that belong to a view. 'published' is the only supported value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "allowFileDiscovery": true,
  "deleted": true,
  "displayName": "string",
  "domain": "string",
  "emailAddress": "string",
  "expirationTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "kind": "drive#permission",
  "pendingOwner": true,
  "permissionDetails": [
    {
      "inherited": true,
      "inheritedFrom": "string",
      "permissionType": "string",
      "role": "string"
    }
  ],
  "photoLink": "string",
  "role": "string",
  "teamDrivePermissionDetails": [
    {
      "inherited": true,
      "inheritedFrom": "string",
      "role": "string",
      "teamDrivePermissionType": "string"
    }
  ],
  "type": "string",
  "view": "string"
}
```

<h3 id="drivepermissionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Permission](#schemapermission)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file )
</aside>

## drive.permissions.get

<a id="opIddrive.permissions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/permissions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/{fileId}/permissions/{permissionId}`

Gets a permission by ID.

<h3 id="drivepermissionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|permissionId|path|string|true|The ID of the permission.|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|useDomainAdminAccess|query|boolean|false|Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "allowFileDiscovery": true,
  "deleted": true,
  "displayName": "string",
  "domain": "string",
  "emailAddress": "string",
  "expirationTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "kind": "drive#permission",
  "pendingOwner": true,
  "permissionDetails": [
    {
      "inherited": true,
      "inheritedFrom": "string",
      "permissionType": "string",
      "role": "string"
    }
  ],
  "photoLink": "string",
  "role": "string",
  "teamDrivePermissionDetails": [
    {
      "inherited": true,
      "inheritedFrom": "string",
      "role": "string",
      "teamDrivePermissionType": "string"
    }
  ],
  "type": "string",
  "view": "string"
}
```

<h3 id="drivepermissionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Permission](#schemapermission)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.permissions.delete

<a id="opIddrive.permissions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/permissions/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /files/{fileId}/permissions/{permissionId}`

Deletes a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

<h3 id="drivepermissionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file or shared drive.|
|permissionId|path|string|true|The ID of the permission.|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|useDomainAdminAccess|query|boolean|false|Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="drivepermissionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file )
</aside>

## drive.permissions.update

<a id="opIddrive.permissions.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/permissions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowFileDiscovery": true,
    "deleted": true,
    "displayName": "string",
    "domain": "string",
    "emailAddress": "string",
    "expirationTime": "1970-01-01T00:00:00Z",
    "id": "string",
    "kind": "drive#permission",
    "pendingOwner": true,
    "photoLink": "string",
    "role": "string",
    "type": "string",
    "view": "string"
  }'
```

`PATCH /files/{fileId}/permissions/{permissionId}`

Updates a permission with patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

> Body parameter

```json
{
  "allowFileDiscovery": true,
  "deleted": true,
  "displayName": "string",
  "domain": "string",
  "emailAddress": "string",
  "expirationTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "kind": "drive#permission",
  "pendingOwner": true,
  "photoLink": "string",
  "role": "string",
  "type": "string",
  "view": "string"
}
```

<h3 id="drivepermissionsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file or shared drive.|
|permissionId|path|string|true|The ID of the permission.|
|removeExpiration|query|boolean|false|Whether to remove the expiration date.|
|supportsAllDrives|query|boolean|false|Whether the requesting application supports both My Drives and shared drives.|
|supportsTeamDrives|query|boolean|false|Deprecated: Use `supportsAllDrives` instead.|
|transferOwnership|query|boolean|false|Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.|
|useDomainAdminAccess|query|boolean|false|Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Permission](#schemapermission)|false|none|
|» allowFileDiscovery|body|boolean|false|Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type `domain` or `anyone`.|
|» deleted|body|boolean|false|Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.|
|» displayName|body|string|false|Output only. The "pretty" name of the value of the permission. The following is a list of examples for each type of permission: * `user` - User's full name, as defined for their Google account, such as "Joe Smith." * `group` - Name of the Google Group, such as "The Company Administrators." * `domain` - String domain name, such as "thecompany.com." * `anyone` - No `displayName` is present.|
|» domain|body|string|false|The domain to which this permission refers.|
|» emailAddress|body|string|false|The email address of the user or group to which this permission refers.|
|» expirationTime|body|string(date-time)|false|The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future|
|» id|body|string|false|Output only. The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as `permissionId`. IDs should be treated as opaque values.|
|» kind|body|string|false|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#permission"`.|
|» pendingOwner|body|boolean|false|Whether the account associated with this permission is a pending owner. Only populated for `user` type permissions for files that are not in a shared drive.|
|» photoLink|body|string|false|Output only. A link to the user's profile photo, if available.|
|» role|body|string|false|The role granted by this permission. While new values may be supported in the future, the following are currently allowed: * `owner` * `organizer` * `fileOrganizer` * `writer` * `commenter` * `reader`|
|» type|body|string|false|The type of the grantee. Valid values are: * `user` * `group` * `domain` * `anyone` When creating a permission, if `type` is `user` or `group`, you must provide an `emailAddress` for the user or group. When `type` is `domain`, you must provide a `domain`. There isn't extra information required for an `anyone` type.|
|» view|body|string|false|Indicates the view for this permission. Only populated for permissions that belong to a view. 'published' is the only supported value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "allowFileDiscovery": true,
  "deleted": true,
  "displayName": "string",
  "domain": "string",
  "emailAddress": "string",
  "expirationTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "kind": "drive#permission",
  "pendingOwner": true,
  "permissionDetails": [
    {
      "inherited": true,
      "inheritedFrom": "string",
      "permissionType": "string",
      "role": "string"
    }
  ],
  "photoLink": "string",
  "role": "string",
  "teamDrivePermissionDetails": [
    {
      "inherited": true,
      "inheritedFrom": "string",
      "role": "string",
      "teamDrivePermissionType": "string"
    }
  ],
  "type": "string",
  "view": "string"
}
```

<h3 id="drivepermissionsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Permission](#schemapermission)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file )
</aside>

<h1 id="google-drive-api-replies">replies</h1>

## drive.replies.list

<a id="opIddrive.replies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/comments/string/replies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/{fileId}/comments/{commentId}/replies`

Lists a comment's replies.

<h3 id="drivereplieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|commentId|path|string|true|The ID of the comment.|
|includeDeleted|query|boolean|false|Whether to include deleted replies. Deleted replies will not include their original content.|
|pageSize|query|integer|false|The maximum number of replies to return per page.|
|pageToken|query|string|false|The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "kind": "drive#replyList",
  "nextPageToken": "string",
  "replies": [
    {
      "action": "string",
      "author": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "content": "string",
      "createdTime": "1970-01-01T00:00:00Z",
      "deleted": true,
      "htmlContent": "string",
      "id": "string",
      "kind": "drive#reply",
      "modifiedTime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="drivereplieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReplyList](#schemareplylist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.replies.create

<a id="opIddrive.replies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/comments/string/replies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "string",
    "author": {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    },
    "content": "string",
    "createdTime": "1970-01-01T00:00:00Z",
    "deleted": true,
    "htmlContent": "string",
    "id": "string",
    "kind": "drive#reply",
    "modifiedTime": "1970-01-01T00:00:00Z"
  }'
```

`POST /files/{fileId}/comments/{commentId}/replies`

Creates a reply to a comment.

> Body parameter

```json
{
  "action": "string",
  "author": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "content": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "deleted": true,
  "htmlContent": "string",
  "id": "string",
  "kind": "drive#reply",
  "modifiedTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="driverepliescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|commentId|path|string|true|The ID of the comment.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Reply](#schemareply)|false|none|
|» action|body|string|false|The action the reply performed to the parent comment. Valid values are: * `resolve` * `reopen`|
|» author|body|[User](#schemauser)|false|Output only. The author of the reply. The author's email address and permission ID will not be populated.|
|» content|body|string|false|The plain text content of the reply. This field is used for setting the content, while `htmlContent` should be displayed. This is required on creates if no `action` is specified.|
|» createdTime|body|string(date-time)|false|The time at which the reply was created (RFC 3339 date-time).|
|» deleted|body|boolean|false|Output only. Whether the reply has been deleted. A deleted reply has no content.|
|» htmlContent|body|string|false|Output only. The content of the reply with HTML formatting.|
|» id|body|string|false|Output only. The ID of the reply.|
|» kind|body|string|false|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#reply"`.|
|» modifiedTime|body|string(date-time)|false|The last time the reply was modified (RFC 3339 date-time).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "action": "string",
  "author": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "content": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "deleted": true,
  "htmlContent": "string",
  "id": "string",
  "kind": "drive#reply",
  "modifiedTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="driverepliescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Reply](#schemareply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file )
</aside>

## drive.replies.get

<a id="opIddrive.replies.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/comments/string/replies/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/{fileId}/comments/{commentId}/replies/{replyId}`

Gets a reply by ID.

<h3 id="driverepliesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|commentId|path|string|true|The ID of the comment.|
|replyId|path|string|true|The ID of the reply.|
|includeDeleted|query|boolean|false|Whether to return deleted replies. Deleted replies will not include their original content.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "action": "string",
  "author": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "content": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "deleted": true,
  "htmlContent": "string",
  "id": "string",
  "kind": "drive#reply",
  "modifiedTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="driverepliesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Reply](#schemareply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.replies.delete

<a id="opIddrive.replies.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/comments/string/replies/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /files/{fileId}/comments/{commentId}/replies/{replyId}`

Deletes a reply.

<h3 id="driverepliesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|commentId|path|string|true|The ID of the comment.|
|replyId|path|string|true|The ID of the reply.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="driverepliesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file )
</aside>

## drive.replies.update

<a id="opIddrive.replies.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/comments/string/replies/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "string",
    "author": {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    },
    "content": "string",
    "createdTime": "1970-01-01T00:00:00Z",
    "deleted": true,
    "htmlContent": "string",
    "id": "string",
    "kind": "drive#reply",
    "modifiedTime": "1970-01-01T00:00:00Z"
  }'
```

`PATCH /files/{fileId}/comments/{commentId}/replies/{replyId}`

Updates a reply with patch semantics.

> Body parameter

```json
{
  "action": "string",
  "author": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "content": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "deleted": true,
  "htmlContent": "string",
  "id": "string",
  "kind": "drive#reply",
  "modifiedTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="driverepliesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|commentId|path|string|true|The ID of the comment.|
|replyId|path|string|true|The ID of the reply.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Reply](#schemareply)|false|none|
|» action|body|string|false|The action the reply performed to the parent comment. Valid values are: * `resolve` * `reopen`|
|» author|body|[User](#schemauser)|false|Output only. The author of the reply. The author's email address and permission ID will not be populated.|
|» content|body|string|false|The plain text content of the reply. This field is used for setting the content, while `htmlContent` should be displayed. This is required on creates if no `action` is specified.|
|» createdTime|body|string(date-time)|false|The time at which the reply was created (RFC 3339 date-time).|
|» deleted|body|boolean|false|Output only. Whether the reply has been deleted. A deleted reply has no content.|
|» htmlContent|body|string|false|Output only. The content of the reply with HTML formatting.|
|» id|body|string|false|Output only. The ID of the reply.|
|» kind|body|string|false|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#reply"`.|
|» modifiedTime|body|string(date-time)|false|The last time the reply was modified (RFC 3339 date-time).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "action": "string",
  "author": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "content": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "deleted": true,
  "htmlContent": "string",
  "id": "string",
  "kind": "drive#reply",
  "modifiedTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="driverepliesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Reply](#schemareply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file )
</aside>

<h1 id="google-drive-api-revisions">revisions</h1>

## drive.revisions.list

<a id="opIddrive.revisions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/revisions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/{fileId}/revisions`

Lists a file's revisions.

<h3 id="driverevisionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|pageSize|query|integer|false|The maximum number of revisions to return per page.|
|pageToken|query|string|false|The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "kind": "drive#revisionList",
  "nextPageToken": "string",
  "revisions": [
    {
      "exportLinks": {
        "property1": "string",
        "property2": "string"
      },
      "id": "string",
      "keepForever": true,
      "kind": "drive#revision",
      "lastModifyingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "md5Checksum": "string",
      "mimeType": "string",
      "modifiedTime": "1970-01-01T00:00:00Z",
      "originalFilename": "string",
      "publishAuto": true,
      "published": true,
      "publishedLink": "string",
      "publishedOutsideDomain": true,
      "size": "string"
    }
  ]
}
```

<h3 id="driverevisionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RevisionList](#schemarevisionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.revisions.get

<a id="opIddrive.revisions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/revisions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/{fileId}/revisions/{revisionId}`

Gets a revision's metadata or content by ID.

<h3 id="driverevisionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|revisionId|path|string|true|The ID of the revision.|
|acknowledgeAbuse|query|boolean|false|Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "exportLinks": {
    "property1": "string",
    "property2": "string"
  },
  "id": "string",
  "keepForever": true,
  "kind": "drive#revision",
  "lastModifyingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "md5Checksum": "string",
  "mimeType": "string",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "originalFilename": "string",
  "publishAuto": true,
  "published": true,
  "publishedLink": "string",
  "publishedOutsideDomain": true,
  "size": "string"
}
```

<h3 id="driverevisionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Revision](#schemarevision)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.metadata.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.photos.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.revisions.delete

<a id="opIddrive.revisions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/revisions/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /files/{fileId}/revisions/{revisionId}`

Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.

<h3 id="driverevisionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|revisionId|path|string|true|The ID of the revision.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="driverevisionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file )
</aside>

## drive.revisions.update

<a id="opIddrive.revisions.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/files/string/revisions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "exportLinks": {
      "property1": "string",
      "property2": "string"
    },
    "id": "string",
    "keepForever": true,
    "kind": "drive#revision",
    "lastModifyingUser": {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    },
    "md5Checksum": "string",
    "mimeType": "string",
    "modifiedTime": "1970-01-01T00:00:00Z",
    "originalFilename": "string",
    "publishAuto": true,
    "published": true,
    "publishedLink": "string",
    "publishedOutsideDomain": true,
    "size": "string"
  }'
```

`PATCH /files/{fileId}/revisions/{revisionId}`

Updates a revision with patch semantics.

> Body parameter

```json
{
  "exportLinks": {
    "property1": "string",
    "property2": "string"
  },
  "id": "string",
  "keepForever": true,
  "kind": "drive#revision",
  "lastModifyingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "md5Checksum": "string",
  "mimeType": "string",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "originalFilename": "string",
  "publishAuto": true,
  "published": true,
  "publishedLink": "string",
  "publishedOutsideDomain": true,
  "size": "string"
}
```

<h3 id="driverevisionsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file.|
|revisionId|path|string|true|The ID of the revision.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Revision](#schemarevision)|false|none|
|» exportLinks|body|object|false|Output only. Links for exporting Docs Editors files to specific formats.|
|» » **additionalProperties**|body|string|false|none|
|» id|body|string|false|Output only. The ID of the revision.|
|» keepForever|body|boolean|false|Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file. This field is only applicable to files with binary content in Drive.|
|» kind|body|string|false|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#revision"`.|
|» lastModifyingUser|body|[User](#schemauser)|false|Output only. The last user to modify this revision.|
|» md5Checksum|body|string|false|Output only. The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive.|
|» mimeType|body|string|false|Output only. The MIME type of the revision.|
|» modifiedTime|body|string(date-time)|false|The last time the revision was modified (RFC 3339 date-time).|
|» originalFilename|body|string|false|Output only. The original filename used to create this revision. This is only applicable to files with binary content in Drive.|
|» publishAuto|body|boolean|false|Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files.|
|» published|body|boolean|false|Whether this revision is published. This is only applicable to Docs Editors files.|
|» publishedLink|body|string|false|Output only. A link to the published revision. This is only populated for Google Sites files.|
|» publishedOutsideDomain|body|boolean|false|Whether this revision is published outside the domain. This is only applicable to Docs Editors files.|
|» size|body|string(int64)|false|Output only. The size of the revision's content in bytes. This is only applicable to files with binary content in Drive.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "exportLinks": {
    "property1": "string",
    "property2": "string"
  },
  "id": "string",
  "keepForever": true,
  "kind": "drive#revision",
  "lastModifyingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "md5Checksum": "string",
  "mimeType": "string",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "originalFilename": "string",
  "publishAuto": true,
  "published": true,
  "publishedLink": "string",
  "publishedOutsideDomain": true,
  "size": "string"
}
```

<h3 id="driverevisionsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Revision](#schemarevision)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file )
</aside>

<h1 id="google-drive-api-teamdrives">teamdrives</h1>

## drive.teamdrives.list

<a id="opIddrive.teamdrives.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/teamdrives \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teamdrives`

Deprecated: Use `drives.list` instead.

<h3 id="driveteamdriveslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Maximum number of Team Drives to return.|
|pageToken|query|string|false|Page token for Team Drives.|
|q|query|string|false|Query string for searching Team Drives.|
|useDomainAdminAccess|query|boolean|false|Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "kind": "drive#teamDriveList",
  "nextPageToken": "string",
  "teamDrives": [
    {
      "backgroundImageFile": {
        "id": "string",
        "width": 0,
        "xCoordinate": 0,
        "yCoordinate": 0
      },
      "backgroundImageLink": "string",
      "capabilities": {
        "canAddChildren": true,
        "canChangeCopyRequiresWriterPermissionRestriction": true,
        "canChangeDomainUsersOnlyRestriction": true,
        "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
        "canChangeTeamDriveBackground": true,
        "canChangeTeamMembersOnlyRestriction": true,
        "canComment": true,
        "canCopy": true,
        "canDeleteChildren": true,
        "canDeleteTeamDrive": true,
        "canDownload": true,
        "canEdit": true,
        "canListChildren": true,
        "canManageMembers": true,
        "canReadRevisions": true,
        "canRemoveChildren": true,
        "canRename": true,
        "canRenameTeamDrive": true,
        "canResetTeamDriveRestrictions": true,
        "canShare": true,
        "canTrashChildren": true
      },
      "colorRgb": "string",
      "createdTime": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "drive#teamDrive",
      "name": "string",
      "orgUnitId": "string",
      "restrictions": {
        "adminManagedRestrictions": true,
        "copyRequiresWriterPermission": true,
        "domainUsersOnly": true,
        "sharingFoldersRequiresOrganizerPermission": true,
        "teamMembersOnly": true
      },
      "themeId": "string"
    }
  ]
}
```

<h3 id="driveteamdriveslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TeamDriveList](#schemateamdrivelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.teamdrives.create

<a id="opIddrive.teamdrives.create"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/drive/v3/teamdrives?requestId=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backgroundImageFile": {
      "id": "string",
      "width": 0,
      "xCoordinate": 0,
      "yCoordinate": 0
    },
    "backgroundImageLink": "string",
    "capabilities": {
      "canAddChildren": true,
      "canChangeCopyRequiresWriterPermissionRestriction": true,
      "canChangeDomainUsersOnlyRestriction": true,
      "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
      "canChangeTeamDriveBackground": true,
      "canChangeTeamMembersOnlyRestriction": true,
      "canComment": true,
      "canCopy": true,
      "canDeleteChildren": true,
      "canDeleteTeamDrive": true,
      "canDownload": true,
      "canEdit": true,
      "canListChildren": true,
      "canManageMembers": true,
      "canReadRevisions": true,
      "canRemoveChildren": true,
      "canRename": true,
      "canRenameTeamDrive": true,
      "canResetTeamDriveRestrictions": true,
      "canShare": true,
      "canTrashChildren": true
    },
    "colorRgb": "string",
    "createdTime": "1970-01-01T00:00:00Z",
    "id": "string",
    "kind": "drive#teamDrive",
    "name": "string",
    "orgUnitId": "string",
    "restrictions": {
      "adminManagedRestrictions": true,
      "copyRequiresWriterPermission": true,
      "domainUsersOnly": true,
      "sharingFoldersRequiresOrganizerPermission": true,
      "teamMembersOnly": true
    },
    "themeId": "string"
  }'
```

`POST /teamdrives`

Deprecated: Use `drives.create` instead.

> Body parameter

```json
{
  "backgroundImageFile": {
    "id": "string",
    "width": 0,
    "xCoordinate": 0,
    "yCoordinate": 0
  },
  "backgroundImageLink": "string",
  "capabilities": {
    "canAddChildren": true,
    "canChangeCopyRequiresWriterPermissionRestriction": true,
    "canChangeDomainUsersOnlyRestriction": true,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
    "canChangeTeamDriveBackground": true,
    "canChangeTeamMembersOnlyRestriction": true,
    "canComment": true,
    "canCopy": true,
    "canDeleteChildren": true,
    "canDeleteTeamDrive": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canManageMembers": true,
    "canReadRevisions": true,
    "canRemoveChildren": true,
    "canRename": true,
    "canRenameTeamDrive": true,
    "canResetTeamDriveRestrictions": true,
    "canShare": true,
    "canTrashChildren": true
  },
  "colorRgb": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "kind": "drive#teamDrive",
  "name": "string",
  "orgUnitId": "string",
  "restrictions": {
    "adminManagedRestrictions": true,
    "copyRequiresWriterPermission": true,
    "domainUsersOnly": true,
    "sharingFoldersRequiresOrganizerPermission": true,
    "teamMembersOnly": true
  },
  "themeId": "string"
}
```

<h3 id="driveteamdrivescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestId|query|string|true|Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[TeamDrive](#schemateamdrive)|false|none|
|» backgroundImageFile|body|object|false|An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on `drive.teamdrives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.|
|» » id|body|string|false|The ID of an image file in Drive to use for the background image.|
|» » width|body|number(float)|false|The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.|
|» » xCoordinate|body|number(float)|false|The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.|
|» » yCoordinate|body|number(float)|false|The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.|
|» backgroundImageLink|body|string|false|A short-lived link to this Team Drive's background image.|
|» capabilities|body|object|false|Capabilities the current user has on this Team Drive.|
|» » canAddChildren|body|boolean|false|Whether the current user can add children to folders in this Team Drive.|
|» » canChangeCopyRequiresWriterPermissionRestriction|body|boolean|false|Whether the current user can change the `copyRequiresWriterPermission` restriction of this Team Drive.|
|» » canChangeDomainUsersOnlyRestriction|body|boolean|false|Whether the current user can change the `domainUsersOnly` restriction of this Team Drive.|
|» » canChangeSharingFoldersRequiresOrganizerPermissionRestriction|body|boolean|false|Whether the current user can change the `sharingFoldersRequiresOrganizerPermission` restriction of this Team Drive.|
|» » canChangeTeamDriveBackground|body|boolean|false|Whether the current user can change the background of this Team Drive.|
|» » canChangeTeamMembersOnlyRestriction|body|boolean|false|Whether the current user can change the `teamMembersOnly` restriction of this Team Drive.|
|» » canComment|body|boolean|false|Whether the current user can comment on files in this Team Drive.|
|» » canCopy|body|boolean|false|Whether the current user can copy files in this Team Drive.|
|» » canDeleteChildren|body|boolean|false|Whether the current user can delete children from folders in this Team Drive.|
|» » canDeleteTeamDrive|body|boolean|false|Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive.|
|» » canDownload|body|boolean|false|Whether the current user can download files in this Team Drive.|
|» » canEdit|body|boolean|false|Whether the current user can edit files in this Team Drive|
|» » canListChildren|body|boolean|false|Whether the current user can list the children of folders in this Team Drive.|
|» » canManageMembers|body|boolean|false|Whether the current user can add members to this Team Drive or remove them or change their role.|
|» » canReadRevisions|body|boolean|false|Whether the current user can read the revisions resource of files in this Team Drive.|
|» » canRemoveChildren|body|boolean|false|**Deprecated.** Deprecated: Use `canDeleteChildren` or `canTrashChildren` instead.|
|» » canRename|body|boolean|false|Whether the current user can rename files or folders in this Team Drive.|
|» » canRenameTeamDrive|body|boolean|false|Whether the current user can rename this Team Drive.|
|» » canResetTeamDriveRestrictions|body|boolean|false|Whether the current user can reset the Team Drive restrictions to defaults.|
|» » canShare|body|boolean|false|Whether the current user can share files or folders in this Team Drive.|
|» » canTrashChildren|body|boolean|false|Whether the current user can trash children from folders in this Team Drive.|
|» colorRgb|body|string|false|The color of this Team Drive as an RGB hex string. It can only be set on a `drive.teamdrives.update` request that does not set `themeId`.|
|» createdTime|body|string(date-time)|false|The time at which the Team Drive was created (RFC 3339 date-time).|
|» id|body|string|false|The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string `"drive#teamDrive"`.|
|» name|body|string|false|The name of this Team Drive.|
|» orgUnitId|body|string|false|The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.|
|» restrictions|body|object|false|A set of restrictions that apply to this Team Drive or items inside this Team Drive.|
|» » adminManagedRestrictions|body|boolean|false|Whether administrative privileges on this Team Drive are required to modify restrictions.|
|» » copyRequiresWriterPermission|body|boolean|false|Whether the options to copy, print, or download files inside this Team Drive, should be disabled for readers and commenters. When this restriction is set to `true`, it will override the similarly named field to `true` for any file inside this Team Drive.|
|» » domainUsersOnly|body|boolean|false|Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this Team Drive belongs. This restriction may be overridden by other sharing policies controlled outside of this Team Drive.|
|» » sharingFoldersRequiresOrganizerPermission|body|boolean|false|If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders.|
|» » teamMembersOnly|body|boolean|false|Whether access to items inside this Team Drive is restricted to members of this Team Drive.|
|» themeId|body|string|false|The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "backgroundImageFile": {
    "id": "string",
    "width": 0,
    "xCoordinate": 0,
    "yCoordinate": 0
  },
  "backgroundImageLink": "string",
  "capabilities": {
    "canAddChildren": true,
    "canChangeCopyRequiresWriterPermissionRestriction": true,
    "canChangeDomainUsersOnlyRestriction": true,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
    "canChangeTeamDriveBackground": true,
    "canChangeTeamMembersOnlyRestriction": true,
    "canComment": true,
    "canCopy": true,
    "canDeleteChildren": true,
    "canDeleteTeamDrive": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canManageMembers": true,
    "canReadRevisions": true,
    "canRemoveChildren": true,
    "canRename": true,
    "canRenameTeamDrive": true,
    "canResetTeamDriveRestrictions": true,
    "canShare": true,
    "canTrashChildren": true
  },
  "colorRgb": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "kind": "drive#teamDrive",
  "name": "string",
  "orgUnitId": "string",
  "restrictions": {
    "adminManagedRestrictions": true,
    "copyRequiresWriterPermission": true,
    "domainUsersOnly": true,
    "sharingFoldersRequiresOrganizerPermission": true,
    "teamMembersOnly": true
  },
  "themeId": "string"
}
```

<h3 id="driveteamdrivescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TeamDrive](#schemateamdrive)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive )
</aside>

## drive.teamdrives.get

<a id="opIddrive.teamdrives.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/teamdrives/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teamdrives/{teamDriveId}`

Deprecated: Use `drives.get` instead.

<h3 id="driveteamdrivesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamDriveId|path|string|true|The ID of the Team Drive|
|useDomainAdminAccess|query|boolean|false|Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "backgroundImageFile": {
    "id": "string",
    "width": 0,
    "xCoordinate": 0,
    "yCoordinate": 0
  },
  "backgroundImageLink": "string",
  "capabilities": {
    "canAddChildren": true,
    "canChangeCopyRequiresWriterPermissionRestriction": true,
    "canChangeDomainUsersOnlyRestriction": true,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
    "canChangeTeamDriveBackground": true,
    "canChangeTeamMembersOnlyRestriction": true,
    "canComment": true,
    "canCopy": true,
    "canDeleteChildren": true,
    "canDeleteTeamDrive": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canManageMembers": true,
    "canReadRevisions": true,
    "canRemoveChildren": true,
    "canRename": true,
    "canRenameTeamDrive": true,
    "canResetTeamDriveRestrictions": true,
    "canShare": true,
    "canTrashChildren": true
  },
  "colorRgb": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "kind": "drive#teamDrive",
  "name": "string",
  "orgUnitId": "string",
  "restrictions": {
    "adminManagedRestrictions": true,
    "copyRequiresWriterPermission": true,
    "domainUsersOnly": true,
    "sharingFoldersRequiresOrganizerPermission": true,
    "teamMembersOnly": true
  },
  "themeId": "string"
}
```

<h3 id="driveteamdrivesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TeamDrive](#schemateamdrive)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly )
</aside>

## drive.teamdrives.delete

<a id="opIddrive.teamdrives.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/teamdrives/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /teamdrives/{teamDriveId}`

Deprecated: Use `drives.delete` instead.

<h3 id="driveteamdrivesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamDriveId|path|string|true|The ID of the Team Drive|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="driveteamdrivesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive )
</aside>

## drive.teamdrives.update

<a id="opIddrive.teamdrives.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/drive/v3/teamdrives/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backgroundImageFile": {
      "id": "string",
      "width": 0,
      "xCoordinate": 0,
      "yCoordinate": 0
    },
    "backgroundImageLink": "string",
    "capabilities": {
      "canAddChildren": true,
      "canChangeCopyRequiresWriterPermissionRestriction": true,
      "canChangeDomainUsersOnlyRestriction": true,
      "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
      "canChangeTeamDriveBackground": true,
      "canChangeTeamMembersOnlyRestriction": true,
      "canComment": true,
      "canCopy": true,
      "canDeleteChildren": true,
      "canDeleteTeamDrive": true,
      "canDownload": true,
      "canEdit": true,
      "canListChildren": true,
      "canManageMembers": true,
      "canReadRevisions": true,
      "canRemoveChildren": true,
      "canRename": true,
      "canRenameTeamDrive": true,
      "canResetTeamDriveRestrictions": true,
      "canShare": true,
      "canTrashChildren": true
    },
    "colorRgb": "string",
    "createdTime": "1970-01-01T00:00:00Z",
    "id": "string",
    "kind": "drive#teamDrive",
    "name": "string",
    "orgUnitId": "string",
    "restrictions": {
      "adminManagedRestrictions": true,
      "copyRequiresWriterPermission": true,
      "domainUsersOnly": true,
      "sharingFoldersRequiresOrganizerPermission": true,
      "teamMembersOnly": true
    },
    "themeId": "string"
  }'
```

`PATCH /teamdrives/{teamDriveId}`

Deprecated: Use `drives.update` instead.

> Body parameter

```json
{
  "backgroundImageFile": {
    "id": "string",
    "width": 0,
    "xCoordinate": 0,
    "yCoordinate": 0
  },
  "backgroundImageLink": "string",
  "capabilities": {
    "canAddChildren": true,
    "canChangeCopyRequiresWriterPermissionRestriction": true,
    "canChangeDomainUsersOnlyRestriction": true,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
    "canChangeTeamDriveBackground": true,
    "canChangeTeamMembersOnlyRestriction": true,
    "canComment": true,
    "canCopy": true,
    "canDeleteChildren": true,
    "canDeleteTeamDrive": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canManageMembers": true,
    "canReadRevisions": true,
    "canRemoveChildren": true,
    "canRename": true,
    "canRenameTeamDrive": true,
    "canResetTeamDriveRestrictions": true,
    "canShare": true,
    "canTrashChildren": true
  },
  "colorRgb": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "kind": "drive#teamDrive",
  "name": "string",
  "orgUnitId": "string",
  "restrictions": {
    "adminManagedRestrictions": true,
    "copyRequiresWriterPermission": true,
    "domainUsersOnly": true,
    "sharingFoldersRequiresOrganizerPermission": true,
    "teamMembersOnly": true
  },
  "themeId": "string"
}
```

<h3 id="driveteamdrivesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamDriveId|path|string|true|The ID of the Team Drive|
|useDomainAdminAccess|query|boolean|false|Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[TeamDrive](#schemateamdrive)|false|none|
|» backgroundImageFile|body|object|false|An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on `drive.teamdrives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.|
|» » id|body|string|false|The ID of an image file in Drive to use for the background image.|
|» » width|body|number(float)|false|The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.|
|» » xCoordinate|body|number(float)|false|The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.|
|» » yCoordinate|body|number(float)|false|The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.|
|» backgroundImageLink|body|string|false|A short-lived link to this Team Drive's background image.|
|» capabilities|body|object|false|Capabilities the current user has on this Team Drive.|
|» » canAddChildren|body|boolean|false|Whether the current user can add children to folders in this Team Drive.|
|» » canChangeCopyRequiresWriterPermissionRestriction|body|boolean|false|Whether the current user can change the `copyRequiresWriterPermission` restriction of this Team Drive.|
|» » canChangeDomainUsersOnlyRestriction|body|boolean|false|Whether the current user can change the `domainUsersOnly` restriction of this Team Drive.|
|» » canChangeSharingFoldersRequiresOrganizerPermissionRestriction|body|boolean|false|Whether the current user can change the `sharingFoldersRequiresOrganizerPermission` restriction of this Team Drive.|
|» » canChangeTeamDriveBackground|body|boolean|false|Whether the current user can change the background of this Team Drive.|
|» » canChangeTeamMembersOnlyRestriction|body|boolean|false|Whether the current user can change the `teamMembersOnly` restriction of this Team Drive.|
|» » canComment|body|boolean|false|Whether the current user can comment on files in this Team Drive.|
|» » canCopy|body|boolean|false|Whether the current user can copy files in this Team Drive.|
|» » canDeleteChildren|body|boolean|false|Whether the current user can delete children from folders in this Team Drive.|
|» » canDeleteTeamDrive|body|boolean|false|Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive.|
|» » canDownload|body|boolean|false|Whether the current user can download files in this Team Drive.|
|» » canEdit|body|boolean|false|Whether the current user can edit files in this Team Drive|
|» » canListChildren|body|boolean|false|Whether the current user can list the children of folders in this Team Drive.|
|» » canManageMembers|body|boolean|false|Whether the current user can add members to this Team Drive or remove them or change their role.|
|» » canReadRevisions|body|boolean|false|Whether the current user can read the revisions resource of files in this Team Drive.|
|» » canRemoveChildren|body|boolean|false|**Deprecated.** Deprecated: Use `canDeleteChildren` or `canTrashChildren` instead.|
|» » canRename|body|boolean|false|Whether the current user can rename files or folders in this Team Drive.|
|» » canRenameTeamDrive|body|boolean|false|Whether the current user can rename this Team Drive.|
|» » canResetTeamDriveRestrictions|body|boolean|false|Whether the current user can reset the Team Drive restrictions to defaults.|
|» » canShare|body|boolean|false|Whether the current user can share files or folders in this Team Drive.|
|» » canTrashChildren|body|boolean|false|Whether the current user can trash children from folders in this Team Drive.|
|» colorRgb|body|string|false|The color of this Team Drive as an RGB hex string. It can only be set on a `drive.teamdrives.update` request that does not set `themeId`.|
|» createdTime|body|string(date-time)|false|The time at which the Team Drive was created (RFC 3339 date-time).|
|» id|body|string|false|The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string `"drive#teamDrive"`.|
|» name|body|string|false|The name of this Team Drive.|
|» orgUnitId|body|string|false|The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.|
|» restrictions|body|object|false|A set of restrictions that apply to this Team Drive or items inside this Team Drive.|
|» » adminManagedRestrictions|body|boolean|false|Whether administrative privileges on this Team Drive are required to modify restrictions.|
|» » copyRequiresWriterPermission|body|boolean|false|Whether the options to copy, print, or download files inside this Team Drive, should be disabled for readers and commenters. When this restriction is set to `true`, it will override the similarly named field to `true` for any file inside this Team Drive.|
|» » domainUsersOnly|body|boolean|false|Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this Team Drive belongs. This restriction may be overridden by other sharing policies controlled outside of this Team Drive.|
|» » sharingFoldersRequiresOrganizerPermission|body|boolean|false|If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders.|
|» » teamMembersOnly|body|boolean|false|Whether access to items inside this Team Drive is restricted to members of this Team Drive.|
|» themeId|body|string|false|The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "backgroundImageFile": {
    "id": "string",
    "width": 0,
    "xCoordinate": 0,
    "yCoordinate": 0
  },
  "backgroundImageLink": "string",
  "capabilities": {
    "canAddChildren": true,
    "canChangeCopyRequiresWriterPermissionRestriction": true,
    "canChangeDomainUsersOnlyRestriction": true,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
    "canChangeTeamDriveBackground": true,
    "canChangeTeamMembersOnlyRestriction": true,
    "canComment": true,
    "canCopy": true,
    "canDeleteChildren": true,
    "canDeleteTeamDrive": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canManageMembers": true,
    "canReadRevisions": true,
    "canRemoveChildren": true,
    "canRename": true,
    "canRenameTeamDrive": true,
    "canResetTeamDriveRestrictions": true,
    "canShare": true,
    "canTrashChildren": true
  },
  "colorRgb": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "kind": "drive#teamDrive",
  "name": "string",
  "orgUnitId": "string",
  "restrictions": {
    "adminManagedRestrictions": true,
    "copyRequiresWriterPermission": true,
    "domainUsersOnly": true,
    "sharingFoldersRequiresOrganizerPermission": true,
    "teamMembersOnly": true
  },
  "themeId": "string"
}
```

<h3 id="driveteamdrivesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TeamDrive](#schemateamdrive)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive )
</aside>

# Schemas

<h2 id="tocS_About">About</h2>
<!-- backwards compatibility -->
<a id="schemaabout"></a>
<a id="schema_About"></a>
<a id="tocSabout"></a>
<a id="tocsabout"></a>

```json
{
  "appInstalled": true,
  "canCreateDrives": true,
  "canCreateTeamDrives": true,
  "driveThemes": [
    {
      "backgroundImageLink": "string",
      "colorRgb": "string",
      "id": "string"
    }
  ],
  "exportFormats": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "folderColorPalette": [
    "string"
  ],
  "importFormats": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "kind": "drive#about",
  "maxImportSizes": {
    "property1": "string",
    "property2": "string"
  },
  "maxUploadSize": "string",
  "storageQuota": {
    "limit": "string",
    "usage": "string",
    "usageInDrive": "string",
    "usageInDriveTrash": "string"
  },
  "teamDriveThemes": [
    {
      "backgroundImageLink": "string",
      "colorRgb": "string",
      "id": "string"
    }
  ],
  "user": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  }
}
```

Information about the user, the user's Drive, and system capabilities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appInstalled|boolean|false|none|Whether the user has installed the requesting app.|
|canCreateDrives|boolean|false|none|Whether the user can create shared drives.|
|canCreateTeamDrives|boolean|false|none|**Deprecated.** Deprecated: Use `canCreateDrives` instead.|
|driveThemes|[object]|false|none|A list of themes that are supported for shared drives.|
|exportFormats|object|false|none|A map of source MIME type to possible targets for all supported exports.|
|folderColorPalette|[string]|false|none|The currently supported folder colors as RGB hex strings.|
|importFormats|object|false|none|A map of source MIME type to possible targets for all supported imports.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"drive#about"`.|
|maxImportSizes|object|false|none|A map of maximum import sizes by MIME type, in bytes.|
|maxUploadSize|string(int64)|false|none|The maximum upload size in bytes.|
|storageQuota|object|false|none|The user's storage quota limits and usage. All fields are measured in bytes.|
|teamDriveThemes|[object]|false|none|**Deprecated.** Deprecated: Use `driveThemes` instead.|
|user|[User](#schemauser)|false|none|The authenticated user.|

<h2 id="tocS_App">App</h2>
<!-- backwards compatibility -->
<a id="schemaapp"></a>
<a id="schema_App"></a>
<a id="tocSapp"></a>
<a id="tocsapp"></a>

```json
{
  "authorized": true,
  "createInFolderTemplate": "string",
  "createUrl": "string",
  "hasDriveWideScope": true,
  "icons": [
    {
      "category": "string",
      "iconUrl": "string",
      "size": 0
    }
  ],
  "id": "string",
  "installed": true,
  "kind": "drive#app",
  "longDescription": "string",
  "name": "string",
  "objectType": "string",
  "openUrlTemplate": "string",
  "primaryFileExtensions": [
    "string"
  ],
  "primaryMimeTypes": [
    "string"
  ],
  "productId": "string",
  "productUrl": "string",
  "secondaryFileExtensions": [
    "string"
  ],
  "secondaryMimeTypes": [
    "string"
  ],
  "shortDescription": "string",
  "supportsCreate": true,
  "supportsImport": true,
  "supportsMultiOpen": true,
  "supportsOfflineCreate": true,
  "useByDefault": true
}
```

The `apps` resource provides a list of apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details. Some resource methods (such as `apps.get`) require an `appId`. Use the `apps.list` method to retrieve the ID for an installed application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorized|boolean|false|none|Whether the app is authorized to access data on the user's Drive.|
|createInFolderTemplate|string|false|none|The template URL to create a file with this app in a given folder. The template contains the {folderId} to be replaced by the folder ID house the new file.|
|createUrl|string|false|none|The URL to create a file with this app.|
|hasDriveWideScope|boolean|false|none|Whether the app has Drive-wide scope. An app with Drive-wide scope can access all files in the user's Drive.|
|icons|[[AppIcons](#schemaappicons)]|false|none|The various icons for the app.|
|id|string|false|none|The ID of the app.|
|installed|boolean|false|none|Whether the app is installed.|
|kind|string|false|none|Output only. Identifies what kind of resource this is. Value: the fixed string "drive#app".|
|longDescription|string|false|none|A long description of the app.|
|name|string|false|none|The name of the app.|
|objectType|string|false|none|The type of object this app creates such as a Chart. If empty, the app name should be used instead.|
|openUrlTemplate|string|false|none|The template URL for opening files with this app. The template contains {ids} or {exportIds} to be replaced by the actual file IDs. For more information, see Open Files for the full documentation.|
|primaryFileExtensions|[string]|false|none|The list of primary file extensions.|
|primaryMimeTypes|[string]|false|none|The list of primary MIME types.|
|productId|string|false|none|The ID of the product listing for this app.|
|productUrl|string|false|none|A link to the product listing for this app.|
|secondaryFileExtensions|[string]|false|none|The list of secondary file extensions.|
|secondaryMimeTypes|[string]|false|none|The list of secondary MIME types.|
|shortDescription|string|false|none|A short description of the app.|
|supportsCreate|boolean|false|none|Whether this app supports creating objects.|
|supportsImport|boolean|false|none|Whether this app supports importing from Google Docs.|
|supportsMultiOpen|boolean|false|none|Whether this app supports opening more than one file.|
|supportsOfflineCreate|boolean|false|none|Whether this app supports creating files when offline.|
|useByDefault|boolean|false|none|Whether the app is selected as the default handler for the types it supports.|

<h2 id="tocS_AppIcons">AppIcons</h2>
<!-- backwards compatibility -->
<a id="schemaappicons"></a>
<a id="schema_AppIcons"></a>
<a id="tocSappicons"></a>
<a id="tocsappicons"></a>

```json
{
  "category": "string",
  "iconUrl": "string",
  "size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Category of the icon. Allowed values are: * `application` - The icon for the application. * `document` - The icon for a file associated with the app. * `documentShared` - The icon for a shared file associated with the app.|
|iconUrl|string|false|none|URL for the icon.|
|size|integer(int32)|false|none|Size of the icon. Represented as the maximum of the width and height.|

<h2 id="tocS_AppList">AppList</h2>
<!-- backwards compatibility -->
<a id="schemaapplist"></a>
<a id="schema_AppList"></a>
<a id="tocSapplist"></a>
<a id="tocsapplist"></a>

```json
{
  "defaultAppIds": [
    "string"
  ],
  "items": [
    {
      "authorized": true,
      "createInFolderTemplate": "string",
      "createUrl": "string",
      "hasDriveWideScope": true,
      "icons": [
        {
          "category": "string",
          "iconUrl": "string",
          "size": 0
        }
      ],
      "id": "string",
      "installed": true,
      "kind": "drive#app",
      "longDescription": "string",
      "name": "string",
      "objectType": "string",
      "openUrlTemplate": "string",
      "primaryFileExtensions": [
        "string"
      ],
      "primaryMimeTypes": [
        "string"
      ],
      "productId": "string",
      "productUrl": "string",
      "secondaryFileExtensions": [
        "string"
      ],
      "secondaryMimeTypes": [
        "string"
      ],
      "shortDescription": "string",
      "supportsCreate": true,
      "supportsImport": true,
      "supportsMultiOpen": true,
      "supportsOfflineCreate": true,
      "useByDefault": true
    }
  ],
  "kind": "drive#appList",
  "selfLink": "string"
}
```

A list of third-party applications which the user has installed or given access to Google Drive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultAppIds|[string]|false|none|The list of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest).|
|items|[[App](#schemaapp)]|false|none|The list of apps.|
|kind|string|false|none|Output only. Identifies what kind of resource this is. Value: the fixed string "drive#appList".|
|selfLink|string|false|none|A link back to this list.|

<h2 id="tocS_Change">Change</h2>
<!-- backwards compatibility -->
<a id="schemachange"></a>
<a id="schema_Change"></a>
<a id="tocSchange"></a>
<a id="tocschange"></a>

```json
{
  "changeType": "string",
  "drive": {
    "backgroundImageFile": {
      "id": "string",
      "width": 0,
      "xCoordinate": 0,
      "yCoordinate": 0
    },
    "backgroundImageLink": "string",
    "capabilities": {
      "canAddChildren": true,
      "canChangeCopyRequiresWriterPermissionRestriction": true,
      "canChangeDomainUsersOnlyRestriction": true,
      "canChangeDriveBackground": true,
      "canChangeDriveMembersOnlyRestriction": true,
      "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
      "canComment": true,
      "canCopy": true,
      "canDeleteChildren": true,
      "canDeleteDrive": true,
      "canDownload": true,
      "canEdit": true,
      "canListChildren": true,
      "canManageMembers": true,
      "canReadRevisions": true,
      "canRename": true,
      "canRenameDrive": true,
      "canResetDriveRestrictions": true,
      "canShare": true,
      "canTrashChildren": true
    },
    "colorRgb": "string",
    "createdTime": "1970-01-01T00:00:00Z",
    "hidden": true,
    "id": "string",
    "kind": "drive#drive",
    "name": "string",
    "orgUnitId": "string",
    "restrictions": {
      "adminManagedRestrictions": true,
      "copyRequiresWriterPermission": true,
      "domainUsersOnly": true,
      "driveMembersOnly": true,
      "sharingFoldersRequiresOrganizerPermission": true
    },
    "themeId": "string"
  },
  "driveId": "string",
  "file": {
    "appProperties": {
      "property1": "string",
      "property2": "string"
    },
    "capabilities": {
      "canAcceptOwnership": true,
      "canAddChildren": true,
      "canAddFolderFromAnotherDrive": true,
      "canAddMyDriveParent": true,
      "canChangeCopyRequiresWriterPermission": true,
      "canChangeSecurityUpdateEnabled": true,
      "canChangeViewersCanCopyContent": true,
      "canComment": true,
      "canCopy": true,
      "canDelete": true,
      "canDeleteChildren": true,
      "canDownload": true,
      "canEdit": true,
      "canListChildren": true,
      "canModifyContent": true,
      "canModifyContentRestriction": true,
      "canModifyEditorContentRestriction": true,
      "canModifyLabels": true,
      "canModifyOwnerContentRestriction": true,
      "canMoveChildrenOutOfDrive": true,
      "canMoveChildrenOutOfTeamDrive": true,
      "canMoveChildrenWithinDrive": true,
      "canMoveChildrenWithinTeamDrive": true,
      "canMoveItemIntoTeamDrive": true,
      "canMoveItemOutOfDrive": true,
      "canMoveItemOutOfTeamDrive": true,
      "canMoveItemWithinDrive": true,
      "canMoveItemWithinTeamDrive": true,
      "canMoveTeamDriveItem": true,
      "canReadDrive": true,
      "canReadLabels": true,
      "canReadRevisions": true,
      "canReadTeamDrive": true,
      "canRemoveChildren": true,
      "canRemoveContentRestriction": true,
      "canRemoveMyDriveParent": true,
      "canRename": true,
      "canShare": true,
      "canTrash": true,
      "canTrashChildren": true,
      "canUntrash": true
    },
    "contentHints": {
      "indexableText": "string",
      "thumbnail": {
        "image": "string",
        "mimeType": "string"
      }
    },
    "contentRestrictions": [
      {
        "ownerRestricted": true,
        "readOnly": true,
        "reason": "string",
        "restrictingUser": {
          "displayName": "string",
          "emailAddress": "string",
          "kind": "drive#user",
          "me": true,
          "permissionId": "string",
          "photoLink": "string"
        },
        "restrictionTime": "1970-01-01T00:00:00Z",
        "systemRestricted": true,
        "type": "string"
      }
    ],
    "copyRequiresWriterPermission": true,
    "createdTime": "1970-01-01T00:00:00Z",
    "description": "string",
    "driveId": "string",
    "explicitlyTrashed": true,
    "exportLinks": {
      "property1": "string",
      "property2": "string"
    },
    "fileExtension": "string",
    "folderColorRgb": "string",
    "fullFileExtension": "string",
    "hasAugmentedPermissions": true,
    "hasThumbnail": true,
    "headRevisionId": "string",
    "iconLink": "string",
    "id": "string",
    "imageMediaMetadata": {
      "aperture": 0,
      "cameraMake": "string",
      "cameraModel": "string",
      "colorSpace": "string",
      "exposureBias": 0,
      "exposureMode": "string",
      "exposureTime": 0,
      "flashUsed": true,
      "focalLength": 0,
      "height": 0,
      "isoSpeed": 0,
      "lens": "string",
      "location": {
        "altitude": 0,
        "latitude": 0,
        "longitude": 0
      },
      "maxApertureValue": 0,
      "meteringMode": "string",
      "rotation": 0,
      "sensor": "string",
      "subjectDistance": 0,
      "time": "string",
      "whiteBalance": "string",
      "width": 0
    },
    "isAppAuthorized": true,
    "kind": "drive#file",
    "labelInfo": {
      "labels": [
        {
          "fields": {
            "property1": {
              "dateString": [
                "1970-01-01"
              ],
              "id": "string",
              "integer": [
                "string"
              ],
              "kind": "string",
              "selection": [
                "string"
              ],
              "text": [
                "string"
              ],
              "user": [
                {
                  "displayName": "string",
                  "emailAddress": "string",
                  "kind": "drive#user",
                  "me": true,
                  "permissionId": "string",
                  "photoLink": "string"
                }
              ],
              "valueType": "string"
            },
            "property2": {
              "dateString": [
                "1970-01-01"
              ],
              "id": "string",
              "integer": [
                "string"
              ],
              "kind": "string",
              "selection": [
                "string"
              ],
              "text": [
                "string"
              ],
              "user": [
                {
                  "displayName": "string",
                  "emailAddress": "string",
                  "kind": "drive#user",
                  "me": true,
                  "permissionId": "string",
                  "photoLink": "string"
                }
              ],
              "valueType": "string"
            }
          },
          "id": "string",
          "kind": "string",
          "revisionId": "string"
        }
      ]
    },
    "lastModifyingUser": {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    },
    "linkShareMetadata": {
      "securityUpdateEligible": true,
      "securityUpdateEnabled": true
    },
    "md5Checksum": "string",
    "mimeType": "string",
    "modifiedByMe": true,
    "modifiedByMeTime": "1970-01-01T00:00:00Z",
    "modifiedTime": "1970-01-01T00:00:00Z",
    "name": "string",
    "originalFilename": "string",
    "ownedByMe": true,
    "owners": [
      {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      }
    ],
    "parents": [
      "string"
    ],
    "permissionIds": [
      "string"
    ],
    "permissions": [
      {
        "allowFileDiscovery": true,
        "deleted": true,
        "displayName": "string",
        "domain": "string",
        "emailAddress": "string",
        "expirationTime": "1970-01-01T00:00:00Z",
        "id": "string",
        "kind": "drive#permission",
        "pendingOwner": true,
        "permissionDetails": [
          {
            "inherited": true,
            "inheritedFrom": "string",
            "permissionType": "string",
            "role": "string"
          }
        ],
        "photoLink": "string",
        "role": "string",
        "teamDrivePermissionDetails": [
          {
            "inherited": true,
            "inheritedFrom": "string",
            "role": "string",
            "teamDrivePermissionType": "string"
          }
        ],
        "type": "string",
        "view": "string"
      }
    ],
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "quotaBytesUsed": "string",
    "resourceKey": "string",
    "sha1Checksum": "string",
    "sha256Checksum": "string",
    "shared": true,
    "sharedWithMeTime": "1970-01-01T00:00:00Z",
    "sharingUser": {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    },
    "shortcutDetails": {
      "targetId": "string",
      "targetMimeType": "string",
      "targetResourceKey": "string"
    },
    "size": "string",
    "spaces": [
      "string"
    ],
    "starred": true,
    "teamDriveId": "string",
    "thumbnailLink": "string",
    "thumbnailVersion": "string",
    "trashed": true,
    "trashedTime": "1970-01-01T00:00:00Z",
    "trashingUser": {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    },
    "version": "string",
    "videoMediaMetadata": {
      "durationMillis": "string",
      "height": 0,
      "width": 0
    },
    "viewedByMe": true,
    "viewedByMeTime": "1970-01-01T00:00:00Z",
    "viewersCanCopyContent": true,
    "webContentLink": "string",
    "webViewLink": "string",
    "writersCanShare": true
  },
  "fileId": "string",
  "kind": "drive#change",
  "removed": true,
  "teamDrive": {
    "backgroundImageFile": {
      "id": "string",
      "width": 0,
      "xCoordinate": 0,
      "yCoordinate": 0
    },
    "backgroundImageLink": "string",
    "capabilities": {
      "canAddChildren": true,
      "canChangeCopyRequiresWriterPermissionRestriction": true,
      "canChangeDomainUsersOnlyRestriction": true,
      "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
      "canChangeTeamDriveBackground": true,
      "canChangeTeamMembersOnlyRestriction": true,
      "canComment": true,
      "canCopy": true,
      "canDeleteChildren": true,
      "canDeleteTeamDrive": true,
      "canDownload": true,
      "canEdit": true,
      "canListChildren": true,
      "canManageMembers": true,
      "canReadRevisions": true,
      "canRemoveChildren": true,
      "canRename": true,
      "canRenameTeamDrive": true,
      "canResetTeamDriveRestrictions": true,
      "canShare": true,
      "canTrashChildren": true
    },
    "colorRgb": "string",
    "createdTime": "1970-01-01T00:00:00Z",
    "id": "string",
    "kind": "drive#teamDrive",
    "name": "string",
    "orgUnitId": "string",
    "restrictions": {
      "adminManagedRestrictions": true,
      "copyRequiresWriterPermission": true,
      "domainUsersOnly": true,
      "sharingFoldersRequiresOrganizerPermission": true,
      "teamMembersOnly": true
    },
    "themeId": "string"
  },
  "teamDriveId": "string",
  "time": "1970-01-01T00:00:00Z",
  "type": "string"
}
```

A change to a file or shared drive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changeType|string|false|none|The type of the change. Possible values are `file` and `drive`.|
|drive|[Drive](#schemadrive)|false|none|The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted.|
|driveId|string|false|none|The ID of the shared drive associated with this change.|
|file|[File](#schemafile)|false|none|The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.|
|fileId|string|false|none|The ID of the file which has changed.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"drive#change"`.|
|removed|boolean|false|none|Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.|
|teamDrive|[TeamDrive](#schemateamdrive)|false|none|**Deprecated.** Deprecated: Use `drive` instead.|
|teamDriveId|string|false|none|**Deprecated.** Deprecated: Use `driveId` instead.|
|time|string(date-time)|false|none|The time of this change (RFC 3339 date-time).|
|type|string|false|none|**Deprecated.** Deprecated: Use `changeType` instead.|

<h2 id="tocS_ChangeList">ChangeList</h2>
<!-- backwards compatibility -->
<a id="schemachangelist"></a>
<a id="schema_ChangeList"></a>
<a id="tocSchangelist"></a>
<a id="tocschangelist"></a>

```json
{
  "changes": [
    {
      "changeType": "string",
      "drive": {
        "backgroundImageFile": {
          "id": "string",
          "width": 0,
          "xCoordinate": 0,
          "yCoordinate": 0
        },
        "backgroundImageLink": "string",
        "capabilities": {
          "canAddChildren": true,
          "canChangeCopyRequiresWriterPermissionRestriction": true,
          "canChangeDomainUsersOnlyRestriction": true,
          "canChangeDriveBackground": true,
          "canChangeDriveMembersOnlyRestriction": true,
          "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
          "canComment": true,
          "canCopy": true,
          "canDeleteChildren": true,
          "canDeleteDrive": true,
          "canDownload": true,
          "canEdit": true,
          "canListChildren": true,
          "canManageMembers": true,
          "canReadRevisions": true,
          "canRename": true,
          "canRenameDrive": true,
          "canResetDriveRestrictions": true,
          "canShare": true,
          "canTrashChildren": true
        },
        "colorRgb": "string",
        "createdTime": "1970-01-01T00:00:00Z",
        "hidden": true,
        "id": "string",
        "kind": "drive#drive",
        "name": "string",
        "orgUnitId": "string",
        "restrictions": {
          "adminManagedRestrictions": true,
          "copyRequiresWriterPermission": true,
          "domainUsersOnly": true,
          "driveMembersOnly": true,
          "sharingFoldersRequiresOrganizerPermission": true
        },
        "themeId": "string"
      },
      "driveId": "string",
      "file": {
        "appProperties": {
          "property1": "string",
          "property2": "string"
        },
        "capabilities": {
          "canAcceptOwnership": true,
          "canAddChildren": true,
          "canAddFolderFromAnotherDrive": true,
          "canAddMyDriveParent": true,
          "canChangeCopyRequiresWriterPermission": true,
          "canChangeSecurityUpdateEnabled": true,
          "canChangeViewersCanCopyContent": true,
          "canComment": true,
          "canCopy": true,
          "canDelete": true,
          "canDeleteChildren": true,
          "canDownload": true,
          "canEdit": true,
          "canListChildren": true,
          "canModifyContent": true,
          "canModifyContentRestriction": true,
          "canModifyEditorContentRestriction": true,
          "canModifyLabels": true,
          "canModifyOwnerContentRestriction": true,
          "canMoveChildrenOutOfDrive": true,
          "canMoveChildrenOutOfTeamDrive": true,
          "canMoveChildrenWithinDrive": true,
          "canMoveChildrenWithinTeamDrive": true,
          "canMoveItemIntoTeamDrive": true,
          "canMoveItemOutOfDrive": true,
          "canMoveItemOutOfTeamDrive": true,
          "canMoveItemWithinDrive": true,
          "canMoveItemWithinTeamDrive": true,
          "canMoveTeamDriveItem": true,
          "canReadDrive": true,
          "canReadLabels": true,
          "canReadRevisions": true,
          "canReadTeamDrive": true,
          "canRemoveChildren": true,
          "canRemoveContentRestriction": true,
          "canRemoveMyDriveParent": true,
          "canRename": true,
          "canShare": true,
          "canTrash": true,
          "canTrashChildren": true,
          "canUntrash": true
        },
        "contentHints": {
          "indexableText": "string",
          "thumbnail": {
            "image": "string",
            "mimeType": "string"
          }
        },
        "contentRestrictions": [
          {
            "ownerRestricted": true,
            "readOnly": true,
            "reason": "string",
            "restrictingUser": {
              "displayName": "string",
              "emailAddress": "string",
              "kind": "drive#user",
              "me": true,
              "permissionId": "string",
              "photoLink": "string"
            },
            "restrictionTime": "1970-01-01T00:00:00Z",
            "systemRestricted": true,
            "type": "string"
          }
        ],
        "copyRequiresWriterPermission": true,
        "createdTime": "1970-01-01T00:00:00Z",
        "description": "string",
        "driveId": "string",
        "explicitlyTrashed": true,
        "exportLinks": {
          "property1": "string",
          "property2": "string"
        },
        "fileExtension": "string",
        "folderColorRgb": "string",
        "fullFileExtension": "string",
        "hasAugmentedPermissions": true,
        "hasThumbnail": true,
        "headRevisionId": "string",
        "iconLink": "string",
        "id": "string",
        "imageMediaMetadata": {
          "aperture": 0,
          "cameraMake": "string",
          "cameraModel": "string",
          "colorSpace": "string",
          "exposureBias": 0,
          "exposureMode": "string",
          "exposureTime": 0,
          "flashUsed": true,
          "focalLength": 0,
          "height": 0,
          "isoSpeed": 0,
          "lens": "string",
          "location": {
            "altitude": 0,
            "latitude": 0,
            "longitude": 0
          },
          "maxApertureValue": 0,
          "meteringMode": "string",
          "rotation": 0,
          "sensor": "string",
          "subjectDistance": 0,
          "time": "string",
          "whiteBalance": "string",
          "width": 0
        },
        "isAppAuthorized": true,
        "kind": "drive#file",
        "labelInfo": {
          "labels": [
            {
              "fields": {
                "property1": {
                  "dateString": [
                    "1970-01-01"
                  ],
                  "id": "string",
                  "integer": [
                    "string"
                  ],
                  "kind": "string",
                  "selection": [
                    "string"
                  ],
                  "text": [
                    "string"
                  ],
                  "user": [
                    {
                      "displayName": "string",
                      "emailAddress": "string",
                      "kind": "drive#user",
                      "me": true,
                      "permissionId": "string",
                      "photoLink": "string"
                    }
                  ],
                  "valueType": "string"
                },
                "property2": {
                  "dateString": [
                    "1970-01-01"
                  ],
                  "id": "string",
                  "integer": [
                    "string"
                  ],
                  "kind": "string",
                  "selection": [
                    "string"
                  ],
                  "text": [
                    "string"
                  ],
                  "user": [
                    {
                      "displayName": "string",
                      "emailAddress": "string",
                      "kind": "drive#user",
                      "me": true,
                      "permissionId": "string",
                      "photoLink": "string"
                    }
                  ],
                  "valueType": "string"
                }
              },
              "id": "string",
              "kind": "string",
              "revisionId": "string"
            }
          ]
        },
        "lastModifyingUser": {
          "displayName": "string",
          "emailAddress": "string",
          "kind": "drive#user",
          "me": true,
          "permissionId": "string",
          "photoLink": "string"
        },
        "linkShareMetadata": {
          "securityUpdateEligible": true,
          "securityUpdateEnabled": true
        },
        "md5Checksum": "string",
        "mimeType": "string",
        "modifiedByMe": true,
        "modifiedByMeTime": "1970-01-01T00:00:00Z",
        "modifiedTime": "1970-01-01T00:00:00Z",
        "name": "string",
        "originalFilename": "string",
        "ownedByMe": true,
        "owners": [
          {
            "displayName": "string",
            "emailAddress": "string",
            "kind": "drive#user",
            "me": true,
            "permissionId": "string",
            "photoLink": "string"
          }
        ],
        "parents": [
          "string"
        ],
        "permissionIds": [
          "string"
        ],
        "permissions": [
          {
            "allowFileDiscovery": true,
            "deleted": true,
            "displayName": "string",
            "domain": "string",
            "emailAddress": "string",
            "expirationTime": "1970-01-01T00:00:00Z",
            "id": "string",
            "kind": "drive#permission",
            "pendingOwner": true,
            "permissionDetails": [
              {
                "inherited": true,
                "inheritedFrom": "string",
                "permissionType": "string",
                "role": "string"
              }
            ],
            "photoLink": "string",
            "role": "string",
            "teamDrivePermissionDetails": [
              {
                "inherited": true,
                "inheritedFrom": "string",
                "role": "string",
                "teamDrivePermissionType": "string"
              }
            ],
            "type": "string",
            "view": "string"
          }
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "quotaBytesUsed": "string",
        "resourceKey": "string",
        "sha1Checksum": "string",
        "sha256Checksum": "string",
        "shared": true,
        "sharedWithMeTime": "1970-01-01T00:00:00Z",
        "sharingUser": {
          "displayName": "string",
          "emailAddress": "string",
          "kind": "drive#user",
          "me": true,
          "permissionId": "string",
          "photoLink": "string"
        },
        "shortcutDetails": {
          "targetId": "string",
          "targetMimeType": "string",
          "targetResourceKey": "string"
        },
        "size": "string",
        "spaces": [
          "string"
        ],
        "starred": true,
        "teamDriveId": "string",
        "thumbnailLink": "string",
        "thumbnailVersion": "string",
        "trashed": true,
        "trashedTime": "1970-01-01T00:00:00Z",
        "trashingUser": {
          "displayName": "string",
          "emailAddress": "string",
          "kind": "drive#user",
          "me": true,
          "permissionId": "string",
          "photoLink": "string"
        },
        "version": "string",
        "videoMediaMetadata": {
          "durationMillis": "string",
          "height": 0,
          "width": 0
        },
        "viewedByMe": true,
        "viewedByMeTime": "1970-01-01T00:00:00Z",
        "viewersCanCopyContent": true,
        "webContentLink": "string",
        "webViewLink": "string",
        "writersCanShare": true
      },
      "fileId": "string",
      "kind": "drive#change",
      "removed": true,
      "teamDrive": {
        "backgroundImageFile": {
          "id": "string",
          "width": 0,
          "xCoordinate": 0,
          "yCoordinate": 0
        },
        "backgroundImageLink": "string",
        "capabilities": {
          "canAddChildren": true,
          "canChangeCopyRequiresWriterPermissionRestriction": true,
          "canChangeDomainUsersOnlyRestriction": true,
          "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
          "canChangeTeamDriveBackground": true,
          "canChangeTeamMembersOnlyRestriction": true,
          "canComment": true,
          "canCopy": true,
          "canDeleteChildren": true,
          "canDeleteTeamDrive": true,
          "canDownload": true,
          "canEdit": true,
          "canListChildren": true,
          "canManageMembers": true,
          "canReadRevisions": true,
          "canRemoveChildren": true,
          "canRename": true,
          "canRenameTeamDrive": true,
          "canResetTeamDriveRestrictions": true,
          "canShare": true,
          "canTrashChildren": true
        },
        "colorRgb": "string",
        "createdTime": "1970-01-01T00:00:00Z",
        "id": "string",
        "kind": "drive#teamDrive",
        "name": "string",
        "orgUnitId": "string",
        "restrictions": {
          "adminManagedRestrictions": true,
          "copyRequiresWriterPermission": true,
          "domainUsersOnly": true,
          "sharingFoldersRequiresOrganizerPermission": true,
          "teamMembersOnly": true
        },
        "themeId": "string"
      },
      "teamDriveId": "string",
      "time": "1970-01-01T00:00:00Z",
      "type": "string"
    }
  ],
  "kind": "drive#changeList",
  "newStartPageToken": "string",
  "nextPageToken": "string"
}
```

A list of changes for a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changes|[[Change](#schemachange)]|false|none|The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"drive#changeList"`.|
|newStartPageToken|string|false|none|The starting page token for future changes. This will be present only if the end of the current changes list has been reached. The page token doesn't expire.|
|nextPageToken|string|false|none|The page token for the next page of changes. This will be absent if the end of the changes list has been reached. The page token doesn't expire.|

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

A notification channel used to watch for resource changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|The address where notifications are delivered for this channel.|
|expiration|string(int64)|false|none|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|id|string|false|none|A UUID or similar unique string that identifies this channel.|
|kind|string|false|none|Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.|
|params|object|false|none|Additional parameters controlling delivery channel behavior. Optional.|
|payload|boolean|false|none|A Boolean value to indicate whether payload is wanted. Optional.|
|resourceId|string|false|none|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|resourceUri|string|false|none|A version-specific identifier for the watched resource.|
|token|string|false|none|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|type|string|false|none|The type of delivery mechanism used for this channel. Valid values are "web_hook" or "webhook".|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "anchor": "string",
  "author": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "content": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "deleted": true,
  "htmlContent": "string",
  "id": "string",
  "kind": "drive#comment",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "quotedFileContent": {
    "mimeType": "string",
    "value": "string"
  },
  "replies": [
    {
      "action": "string",
      "author": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "content": "string",
      "createdTime": "1970-01-01T00:00:00Z",
      "deleted": true,
      "htmlContent": "string",
      "id": "string",
      "kind": "drive#reply",
      "modifiedTime": "1970-01-01T00:00:00Z"
    }
  ],
  "resolved": true
}
```

A comment on a file. Some resource methods (such as `comments.update`) require a `commentId`. Use the `comments.list` method to retrieve the ID for a comment in a file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anchor|string|false|none|A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/drive/api/v3/manage-comments).|
|author|[User](#schemauser)|false|none|Output only. The author of the comment. The author's email address and permission ID will not be populated.|
|content|string|false|none|The plain text content of the comment. This field is used for setting the content, while `htmlContent` should be displayed.|
|createdTime|string(date-time)|false|none|The time at which the comment was created (RFC 3339 date-time).|
|deleted|boolean|false|none|Output only. Whether the comment has been deleted. A deleted comment has no content.|
|htmlContent|string|false|none|Output only. The content of the comment with HTML formatting.|
|id|string|false|none|Output only. The ID of the comment.|
|kind|string|false|none|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#comment"`.|
|modifiedTime|string(date-time)|false|none|The last time the comment or any of its replies was modified (RFC 3339 date-time).|
|quotedFileContent|object|false|none|The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.|
|replies|[[Reply](#schemareply)]|false|none|Output only. The full list of replies to the comment in chronological order.|
|resolved|boolean|false|none|Output only. Whether the comment has been resolved by one of its replies.|

<h2 id="tocS_CommentList">CommentList</h2>
<!-- backwards compatibility -->
<a id="schemacommentlist"></a>
<a id="schema_CommentList"></a>
<a id="tocScommentlist"></a>
<a id="tocscommentlist"></a>

```json
{
  "comments": [
    {
      "anchor": "string",
      "author": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "content": "string",
      "createdTime": "1970-01-01T00:00:00Z",
      "deleted": true,
      "htmlContent": "string",
      "id": "string",
      "kind": "drive#comment",
      "modifiedTime": "1970-01-01T00:00:00Z",
      "quotedFileContent": {
        "mimeType": "string",
        "value": "string"
      },
      "replies": [
        {
          "action": "string",
          "author": {
            "displayName": "string",
            "emailAddress": "string",
            "kind": "drive#user",
            "me": true,
            "permissionId": "string",
            "photoLink": "string"
          },
          "content": "string",
          "createdTime": "1970-01-01T00:00:00Z",
          "deleted": true,
          "htmlContent": "string",
          "id": "string",
          "kind": "drive#reply",
          "modifiedTime": "1970-01-01T00:00:00Z"
        }
      ],
      "resolved": true
    }
  ],
  "kind": "drive#commentList",
  "nextPageToken": "string"
}
```

A list of comments on a file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|[[Comment](#schemacomment)]|false|none|The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"drive#commentList"`.|
|nextPageToken|string|false|none|The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.|

<h2 id="tocS_ContentRestriction">ContentRestriction</h2>
<!-- backwards compatibility -->
<a id="schemacontentrestriction"></a>
<a id="schema_ContentRestriction"></a>
<a id="tocScontentrestriction"></a>
<a id="tocscontentrestriction"></a>

```json
{
  "ownerRestricted": true,
  "readOnly": true,
  "reason": "string",
  "restrictingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "restrictionTime": "1970-01-01T00:00:00Z",
  "systemRestricted": true,
  "type": "string"
}
```

A restriction for accessing the content of the file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerRestricted|boolean|false|none|Whether the content restriction can only be modified or removed by a user who owns the file. For files in shared drives, any user with `organizer` capabilities can modify or remove this content restriction.|
|readOnly|boolean|false|none|Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified.|
|reason|string|false|none|Reason for why the content of the file is restricted. This is only mutable on requests that also set `readOnly=true`.|
|restrictingUser|[User](#schemauser)|false|none|Output only. The user who set the content restriction. Only populated if `readOnly` is true.|
|restrictionTime|string(date-time)|false|none|The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true.|
|systemRestricted|boolean|false|none|Output only. Whether the content restriction was applied by the system, for example due to an esignature. Users cannot modify or remove system restricted content restrictions.|
|type|string|false|none|Output only. The type of the content restriction. Currently the only possible value is `globalContentRestriction`.|

<h2 id="tocS_Drive">Drive</h2>
<!-- backwards compatibility -->
<a id="schemadrive"></a>
<a id="schema_Drive"></a>
<a id="tocSdrive"></a>
<a id="tocsdrive"></a>

```json
{
  "backgroundImageFile": {
    "id": "string",
    "width": 0,
    "xCoordinate": 0,
    "yCoordinate": 0
  },
  "backgroundImageLink": "string",
  "capabilities": {
    "canAddChildren": true,
    "canChangeCopyRequiresWriterPermissionRestriction": true,
    "canChangeDomainUsersOnlyRestriction": true,
    "canChangeDriveBackground": true,
    "canChangeDriveMembersOnlyRestriction": true,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
    "canComment": true,
    "canCopy": true,
    "canDeleteChildren": true,
    "canDeleteDrive": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canManageMembers": true,
    "canReadRevisions": true,
    "canRename": true,
    "canRenameDrive": true,
    "canResetDriveRestrictions": true,
    "canShare": true,
    "canTrashChildren": true
  },
  "colorRgb": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "hidden": true,
  "id": "string",
  "kind": "drive#drive",
  "name": "string",
  "orgUnitId": "string",
  "restrictions": {
    "adminManagedRestrictions": true,
    "copyRequiresWriterPermission": true,
    "domainUsersOnly": true,
    "driveMembersOnly": true,
    "sharingFoldersRequiresOrganizerPermission": true
  },
  "themeId": "string"
}
```

Representation of a shared drive. Some resource methods (such as `drives.update`) require a `driveId`. Use the `drives.list` method to retrieve the ID for a shared drive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundImageFile|object|false|none|An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.|
|backgroundImageLink|string|false|none|Output only. A short-lived link to this shared drive's background image.|
|capabilities|object|false|none|Output only. Capabilities the current user has on this shared drive.|
|colorRgb|string|false|none|The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`.|
|createdTime|string(date-time)|false|none|The time at which the shared drive was created (RFC 3339 date-time).|
|hidden|boolean|false|none|Whether the shared drive is hidden from default view.|
|id|string|false|none|Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive.|
|kind|string|false|none|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#drive"`.|
|name|string|false|none|The name of this shared drive.|
|orgUnitId|string|false|none|Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.|
|restrictions|object|false|none|A set of restrictions that apply to this shared drive or items inside this shared drive. Note that restrictions can't be set when creating a shared drive. To add a restriction, first create a shared drive and then use `drives.update` to add restrictions.|
|themeId|string|false|none|The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.|

<h2 id="tocS_DriveList">DriveList</h2>
<!-- backwards compatibility -->
<a id="schemadrivelist"></a>
<a id="schema_DriveList"></a>
<a id="tocSdrivelist"></a>
<a id="tocsdrivelist"></a>

```json
{
  "drives": [
    {
      "backgroundImageFile": {
        "id": "string",
        "width": 0,
        "xCoordinate": 0,
        "yCoordinate": 0
      },
      "backgroundImageLink": "string",
      "capabilities": {
        "canAddChildren": true,
        "canChangeCopyRequiresWriterPermissionRestriction": true,
        "canChangeDomainUsersOnlyRestriction": true,
        "canChangeDriveBackground": true,
        "canChangeDriveMembersOnlyRestriction": true,
        "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
        "canComment": true,
        "canCopy": true,
        "canDeleteChildren": true,
        "canDeleteDrive": true,
        "canDownload": true,
        "canEdit": true,
        "canListChildren": true,
        "canManageMembers": true,
        "canReadRevisions": true,
        "canRename": true,
        "canRenameDrive": true,
        "canResetDriveRestrictions": true,
        "canShare": true,
        "canTrashChildren": true
      },
      "colorRgb": "string",
      "createdTime": "1970-01-01T00:00:00Z",
      "hidden": true,
      "id": "string",
      "kind": "drive#drive",
      "name": "string",
      "orgUnitId": "string",
      "restrictions": {
        "adminManagedRestrictions": true,
        "copyRequiresWriterPermission": true,
        "domainUsersOnly": true,
        "driveMembersOnly": true,
        "sharingFoldersRequiresOrganizerPermission": true
      },
      "themeId": "string"
    }
  ],
  "kind": "drive#driveList",
  "nextPageToken": "string"
}
```

A list of shared drives.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|drives|[[Drive](#schemadrive)]|false|none|The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"drive#driveList"`.|
|nextPageToken|string|false|none|The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "appProperties": {
    "property1": "string",
    "property2": "string"
  },
  "capabilities": {
    "canAcceptOwnership": true,
    "canAddChildren": true,
    "canAddFolderFromAnotherDrive": true,
    "canAddMyDriveParent": true,
    "canChangeCopyRequiresWriterPermission": true,
    "canChangeSecurityUpdateEnabled": true,
    "canChangeViewersCanCopyContent": true,
    "canComment": true,
    "canCopy": true,
    "canDelete": true,
    "canDeleteChildren": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canModifyContent": true,
    "canModifyContentRestriction": true,
    "canModifyEditorContentRestriction": true,
    "canModifyLabels": true,
    "canModifyOwnerContentRestriction": true,
    "canMoveChildrenOutOfDrive": true,
    "canMoveChildrenOutOfTeamDrive": true,
    "canMoveChildrenWithinDrive": true,
    "canMoveChildrenWithinTeamDrive": true,
    "canMoveItemIntoTeamDrive": true,
    "canMoveItemOutOfDrive": true,
    "canMoveItemOutOfTeamDrive": true,
    "canMoveItemWithinDrive": true,
    "canMoveItemWithinTeamDrive": true,
    "canMoveTeamDriveItem": true,
    "canReadDrive": true,
    "canReadLabels": true,
    "canReadRevisions": true,
    "canReadTeamDrive": true,
    "canRemoveChildren": true,
    "canRemoveContentRestriction": true,
    "canRemoveMyDriveParent": true,
    "canRename": true,
    "canShare": true,
    "canTrash": true,
    "canTrashChildren": true,
    "canUntrash": true
  },
  "contentHints": {
    "indexableText": "string",
    "thumbnail": {
      "image": "string",
      "mimeType": "string"
    }
  },
  "contentRestrictions": [
    {
      "ownerRestricted": true,
      "readOnly": true,
      "reason": "string",
      "restrictingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "restrictionTime": "1970-01-01T00:00:00Z",
      "systemRestricted": true,
      "type": "string"
    }
  ],
  "copyRequiresWriterPermission": true,
  "createdTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "driveId": "string",
  "explicitlyTrashed": true,
  "exportLinks": {
    "property1": "string",
    "property2": "string"
  },
  "fileExtension": "string",
  "folderColorRgb": "string",
  "fullFileExtension": "string",
  "hasAugmentedPermissions": true,
  "hasThumbnail": true,
  "headRevisionId": "string",
  "iconLink": "string",
  "id": "string",
  "imageMediaMetadata": {
    "aperture": 0,
    "cameraMake": "string",
    "cameraModel": "string",
    "colorSpace": "string",
    "exposureBias": 0,
    "exposureMode": "string",
    "exposureTime": 0,
    "flashUsed": true,
    "focalLength": 0,
    "height": 0,
    "isoSpeed": 0,
    "lens": "string",
    "location": {
      "altitude": 0,
      "latitude": 0,
      "longitude": 0
    },
    "maxApertureValue": 0,
    "meteringMode": "string",
    "rotation": 0,
    "sensor": "string",
    "subjectDistance": 0,
    "time": "string",
    "whiteBalance": "string",
    "width": 0
  },
  "isAppAuthorized": true,
  "kind": "drive#file",
  "labelInfo": {
    "labels": [
      {
        "fields": {
          "property1": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          },
          "property2": {
            "dateString": [
              "1970-01-01"
            ],
            "id": "string",
            "integer": [
              "string"
            ],
            "kind": "string",
            "selection": [
              "string"
            ],
            "text": [
              "string"
            ],
            "user": [
              {
                "displayName": "string",
                "emailAddress": "string",
                "kind": "drive#user",
                "me": true,
                "permissionId": "string",
                "photoLink": "string"
              }
            ],
            "valueType": "string"
          }
        },
        "id": "string",
        "kind": "string",
        "revisionId": "string"
      }
    ]
  },
  "lastModifyingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "linkShareMetadata": {
    "securityUpdateEligible": true,
    "securityUpdateEnabled": true
  },
  "md5Checksum": "string",
  "mimeType": "string",
  "modifiedByMe": true,
  "modifiedByMeTime": "1970-01-01T00:00:00Z",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "name": "string",
  "originalFilename": "string",
  "ownedByMe": true,
  "owners": [
    {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    }
  ],
  "parents": [
    "string"
  ],
  "permissionIds": [
    "string"
  ],
  "permissions": [
    {
      "allowFileDiscovery": true,
      "deleted": true,
      "displayName": "string",
      "domain": "string",
      "emailAddress": "string",
      "expirationTime": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "drive#permission",
      "pendingOwner": true,
      "permissionDetails": [
        {
          "inherited": true,
          "inheritedFrom": "string",
          "permissionType": "string",
          "role": "string"
        }
      ],
      "photoLink": "string",
      "role": "string",
      "teamDrivePermissionDetails": [
        {
          "inherited": true,
          "inheritedFrom": "string",
          "role": "string",
          "teamDrivePermissionType": "string"
        }
      ],
      "type": "string",
      "view": "string"
    }
  ],
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "quotaBytesUsed": "string",
  "resourceKey": "string",
  "sha1Checksum": "string",
  "sha256Checksum": "string",
  "shared": true,
  "sharedWithMeTime": "1970-01-01T00:00:00Z",
  "sharingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "shortcutDetails": {
    "targetId": "string",
    "targetMimeType": "string",
    "targetResourceKey": "string"
  },
  "size": "string",
  "spaces": [
    "string"
  ],
  "starred": true,
  "teamDriveId": "string",
  "thumbnailLink": "string",
  "thumbnailVersion": "string",
  "trashed": true,
  "trashedTime": "1970-01-01T00:00:00Z",
  "trashingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "version": "string",
  "videoMediaMetadata": {
    "durationMillis": "string",
    "height": 0,
    "width": 0
  },
  "viewedByMe": true,
  "viewedByMeTime": "1970-01-01T00:00:00Z",
  "viewersCanCopyContent": true,
  "webContentLink": "string",
  "webViewLink": "string",
  "writersCanShare": true
}
```

The metadata for a file. Some resource methods (such as `files.update`) require a `fileId`. Use the `files.list` method to retrieve the ID for a file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appProperties|object|false|none|A collection of arbitrary key-value pairs which are private to the requesting app.<br>Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.|
|capabilities|object|false|none|Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.|
|contentHints|object|false|none|Additional information about the content of the file. These fields are never populated in responses.|
|contentRestrictions|[[ContentRestriction](#schemacontentrestriction)]|false|none|Restrictions for accessing the content of the file. Only populated if such a restriction exists.|
|copyRequiresWriterPermission|boolean|false|none|Whether the options to copy, print, or download this file, should be disabled for readers and commenters.|
|createdTime|string(date-time)|false|none|The time at which the file was created (RFC 3339 date-time).|
|description|string|false|none|A short description of the file.|
|driveId|string|false|none|Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.|
|explicitlyTrashed|boolean|false|none|Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.|
|exportLinks|object|false|read-only|Output only. Links for exporting Docs Editors files to specific formats.|
|fileExtension|string|false|none|Output only. The final component of `fullFileExtension`. This is only available for files with binary content in Google Drive.|
|folderColorRgb|string|false|none|The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the `folderColorPalette` field of the About resource. If an unsupported color is specified, the closest color in the palette is used instead.|
|fullFileExtension|string|false|none|Output only. The full file extension extracted from the `name` field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the `name` field changes, however it is not cleared if the new name does not contain a valid extension.|
|hasAugmentedPermissions|boolean|false|none|Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.|
|hasThumbnail|boolean|false|none|Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.|
|headRevisionId|string|false|none|Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.|
|iconLink|string|false|none|Output only. A static, unauthenticated link to the file's icon.|
|id|string|false|none|The ID of the file.|
|imageMediaMetadata|object|false|none|Output only. Additional metadata about image media, if available.|
|isAppAuthorized|boolean|false|none|Output only. Whether the file was created or opened by the requesting app.|
|kind|string|false|none|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#file"`.|
|labelInfo|object|false|none|Output only. An overview of the labels on the file.|
|lastModifyingUser|[User](#schemauser)|false|none|Output only. The last user to modify the file.|
|linkShareMetadata|object|false|none|Contains details about the link URLs that clients are using to refer to this item.|
|md5Checksum|string|false|none|Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.|
|mimeType|string|false|none|The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the About resource.|
|modifiedByMe|boolean|false|none|Output only. Whether the file has been modified by this user.|
|modifiedByMeTime|string(date-time)|false|none|The last time the file was modified by the user (RFC 3339 date-time).|
|modifiedTime|string(date-time)|false|none|he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.|
|name|string|false|none|The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.|
|originalFilename|string|false|none|The original filename of the uploaded content if available, or else the original value of the `name` field. This is only available for files with binary content in Google Drive.|
|ownedByMe|boolean|false|none|Output only. Whether the user owns the file. Not populated for items in shared drives.|
|owners|[[User](#schemauser)]|false|none|Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.|
|parents|[string]|false|none|The IDs of the parent folders which contain the file. If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parents of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.|
|permissionIds|[string]|false|none|Output only. List of permission IDs for users with access to this file.|
|permissions|[[Permission](#schemapermission)]|false|none|Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.|
|properties|object|false|none|A collection of arbitrary key-value pairs which are visible to all apps.<br>Entries with null values are cleared in update and copy requests.|
|quotaBytesUsed|string(int64)|false|none|Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with `keepForever` enabled.|
|resourceKey|string|false|none|Output only. A key needed to access the item via a shared link.|
|sha1Checksum|string|false|none|Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.|
|sha256Checksum|string|false|none|Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.|
|shared|boolean|false|none|Output only. Whether the file has been shared. Not populated for items in shared drives.|
|sharedWithMeTime|string(date-time)|false|none|The time at which the file was shared with the user, if applicable (RFC 3339 date-time).|
|sharingUser|[User](#schemauser)|false|none|Output only. The user who shared the file with the requesting user, if applicable.|
|shortcutDetails|object|false|none|Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`.|
|size|string(int64)|false|none|Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.|
|spaces|[string]|false|none|Output only. The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.|
|starred|boolean|false|none|Whether the user has starred the file.|
|teamDriveId|string|false|none|**Deprecated.** Deprecated: Output only. Use `driveId` instead.|
|thumbnailLink|string|false|none|Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request.|
|thumbnailVersion|string(int64)|false|none|Output only. The thumbnail version for use in thumbnail cache invalidation.|
|trashed|boolean|false|none|Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash.|
|trashedTime|string(date-time)|false|none|The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.|
|trashingUser|[User](#schemauser)|false|none|Output only. If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives.|
|version|string(int64)|false|none|Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.|
|videoMediaMetadata|object|false|none|Output only. Additional metadata about video media. This may not be available immediately upon upload.|
|viewedByMe|boolean|false|none|Output only. Whether the file has been viewed by this user.|
|viewedByMeTime|string(date-time)|false|none|The last time the file was viewed by the user (RFC 3339 date-time).|
|viewersCanCopyContent|boolean|false|none|**Deprecated.** Deprecated: Use `copyRequiresWriterPermission` instead.|
|webContentLink|string|false|none|Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.|
|webViewLink|string|false|none|Output only. A link for opening the file in a relevant Google editor or viewer in a browser.|
|writersCanShare|boolean|false|none|Whether users with only `writer` permission can modify the file's permissions. Not populated for items in shared drives.|

<h2 id="tocS_FileList">FileList</h2>
<!-- backwards compatibility -->
<a id="schemafilelist"></a>
<a id="schema_FileList"></a>
<a id="tocSfilelist"></a>
<a id="tocsfilelist"></a>

```json
{
  "files": [
    {
      "appProperties": {
        "property1": "string",
        "property2": "string"
      },
      "capabilities": {
        "canAcceptOwnership": true,
        "canAddChildren": true,
        "canAddFolderFromAnotherDrive": true,
        "canAddMyDriveParent": true,
        "canChangeCopyRequiresWriterPermission": true,
        "canChangeSecurityUpdateEnabled": true,
        "canChangeViewersCanCopyContent": true,
        "canComment": true,
        "canCopy": true,
        "canDelete": true,
        "canDeleteChildren": true,
        "canDownload": true,
        "canEdit": true,
        "canListChildren": true,
        "canModifyContent": true,
        "canModifyContentRestriction": true,
        "canModifyEditorContentRestriction": true,
        "canModifyLabels": true,
        "canModifyOwnerContentRestriction": true,
        "canMoveChildrenOutOfDrive": true,
        "canMoveChildrenOutOfTeamDrive": true,
        "canMoveChildrenWithinDrive": true,
        "canMoveChildrenWithinTeamDrive": true,
        "canMoveItemIntoTeamDrive": true,
        "canMoveItemOutOfDrive": true,
        "canMoveItemOutOfTeamDrive": true,
        "canMoveItemWithinDrive": true,
        "canMoveItemWithinTeamDrive": true,
        "canMoveTeamDriveItem": true,
        "canReadDrive": true,
        "canReadLabels": true,
        "canReadRevisions": true,
        "canReadTeamDrive": true,
        "canRemoveChildren": true,
        "canRemoveContentRestriction": true,
        "canRemoveMyDriveParent": true,
        "canRename": true,
        "canShare": true,
        "canTrash": true,
        "canTrashChildren": true,
        "canUntrash": true
      },
      "contentHints": {
        "indexableText": "string",
        "thumbnail": {
          "image": "string",
          "mimeType": "string"
        }
      },
      "contentRestrictions": [
        {
          "ownerRestricted": true,
          "readOnly": true,
          "reason": "string",
          "restrictingUser": {
            "displayName": "string",
            "emailAddress": "string",
            "kind": "drive#user",
            "me": true,
            "permissionId": "string",
            "photoLink": "string"
          },
          "restrictionTime": "1970-01-01T00:00:00Z",
          "systemRestricted": true,
          "type": "string"
        }
      ],
      "copyRequiresWriterPermission": true,
      "createdTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "driveId": "string",
      "explicitlyTrashed": true,
      "exportLinks": {
        "property1": "string",
        "property2": "string"
      },
      "fileExtension": "string",
      "folderColorRgb": "string",
      "fullFileExtension": "string",
      "hasAugmentedPermissions": true,
      "hasThumbnail": true,
      "headRevisionId": "string",
      "iconLink": "string",
      "id": "string",
      "imageMediaMetadata": {
        "aperture": 0,
        "cameraMake": "string",
        "cameraModel": "string",
        "colorSpace": "string",
        "exposureBias": 0,
        "exposureMode": "string",
        "exposureTime": 0,
        "flashUsed": true,
        "focalLength": 0,
        "height": 0,
        "isoSpeed": 0,
        "lens": "string",
        "location": {
          "altitude": 0,
          "latitude": 0,
          "longitude": 0
        },
        "maxApertureValue": 0,
        "meteringMode": "string",
        "rotation": 0,
        "sensor": "string",
        "subjectDistance": 0,
        "time": "string",
        "whiteBalance": "string",
        "width": 0
      },
      "isAppAuthorized": true,
      "kind": "drive#file",
      "labelInfo": {
        "labels": [
          {
            "fields": {
              "property1": {
                "dateString": [
                  "1970-01-01"
                ],
                "id": "string",
                "integer": [
                  "string"
                ],
                "kind": "string",
                "selection": [
                  "string"
                ],
                "text": [
                  "string"
                ],
                "user": [
                  {
                    "displayName": "string",
                    "emailAddress": "string",
                    "kind": "drive#user",
                    "me": true,
                    "permissionId": "string",
                    "photoLink": "string"
                  }
                ],
                "valueType": "string"
              },
              "property2": {
                "dateString": [
                  "1970-01-01"
                ],
                "id": "string",
                "integer": [
                  "string"
                ],
                "kind": "string",
                "selection": [
                  "string"
                ],
                "text": [
                  "string"
                ],
                "user": [
                  {
                    "displayName": "string",
                    "emailAddress": "string",
                    "kind": "drive#user",
                    "me": true,
                    "permissionId": "string",
                    "photoLink": "string"
                  }
                ],
                "valueType": "string"
              }
            },
            "id": "string",
            "kind": "string",
            "revisionId": "string"
          }
        ]
      },
      "lastModifyingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "linkShareMetadata": {
        "securityUpdateEligible": true,
        "securityUpdateEnabled": true
      },
      "md5Checksum": "string",
      "mimeType": "string",
      "modifiedByMe": true,
      "modifiedByMeTime": "1970-01-01T00:00:00Z",
      "modifiedTime": "1970-01-01T00:00:00Z",
      "name": "string",
      "originalFilename": "string",
      "ownedByMe": true,
      "owners": [
        {
          "displayName": "string",
          "emailAddress": "string",
          "kind": "drive#user",
          "me": true,
          "permissionId": "string",
          "photoLink": "string"
        }
      ],
      "parents": [
        "string"
      ],
      "permissionIds": [
        "string"
      ],
      "permissions": [
        {
          "allowFileDiscovery": true,
          "deleted": true,
          "displayName": "string",
          "domain": "string",
          "emailAddress": "string",
          "expirationTime": "1970-01-01T00:00:00Z",
          "id": "string",
          "kind": "drive#permission",
          "pendingOwner": true,
          "permissionDetails": [
            {
              "inherited": true,
              "inheritedFrom": "string",
              "permissionType": "string",
              "role": "string"
            }
          ],
          "photoLink": "string",
          "role": "string",
          "teamDrivePermissionDetails": [
            {
              "inherited": true,
              "inheritedFrom": "string",
              "role": "string",
              "teamDrivePermissionType": "string"
            }
          ],
          "type": "string",
          "view": "string"
        }
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "quotaBytesUsed": "string",
      "resourceKey": "string",
      "sha1Checksum": "string",
      "sha256Checksum": "string",
      "shared": true,
      "sharedWithMeTime": "1970-01-01T00:00:00Z",
      "sharingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "shortcutDetails": {
        "targetId": "string",
        "targetMimeType": "string",
        "targetResourceKey": "string"
      },
      "size": "string",
      "spaces": [
        "string"
      ],
      "starred": true,
      "teamDriveId": "string",
      "thumbnailLink": "string",
      "thumbnailVersion": "string",
      "trashed": true,
      "trashedTime": "1970-01-01T00:00:00Z",
      "trashingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "version": "string",
      "videoMediaMetadata": {
        "durationMillis": "string",
        "height": 0,
        "width": 0
      },
      "viewedByMe": true,
      "viewedByMeTime": "1970-01-01T00:00:00Z",
      "viewersCanCopyContent": true,
      "webContentLink": "string",
      "webViewLink": "string",
      "writersCanShare": true
    }
  ],
  "incompleteSearch": true,
  "kind": "drive#fileList",
  "nextPageToken": "string"
}
```

A list of files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[[File](#schemafile)]|false|none|The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.|
|incompleteSearch|boolean|false|none|Whether the search process was incomplete. If true, then some search results might be missing, since all documents were not searched. This can occur when searching multiple drives with the 'allDrives' corpora, but all corpora couldn't be searched. When this happens, it's suggested that clients narrow their query by choosing a different corpus such as 'user' or 'drive'.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"drive#fileList"`.|
|nextPageToken|string|false|none|The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.|

<h2 id="tocS_GeneratedIds">GeneratedIds</h2>
<!-- backwards compatibility -->
<a id="schemageneratedids"></a>
<a id="schema_GeneratedIds"></a>
<a id="tocSgeneratedids"></a>
<a id="tocsgeneratedids"></a>

```json
{
  "ids": [
    "string"
  ],
  "kind": "drive#generatedIds",
  "space": "string"
}
```

A list of generated file IDs which can be provided in create requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|false|none|The IDs generated for the requesting user in the specified space.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"drive#generatedIds"`.|
|space|string|false|none|The type of file that can be created with these IDs.|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "fields": {
    "property1": {
      "dateString": [
        "1970-01-01"
      ],
      "id": "string",
      "integer": [
        "string"
      ],
      "kind": "string",
      "selection": [
        "string"
      ],
      "text": [
        "string"
      ],
      "user": [
        {
          "displayName": "string",
          "emailAddress": "string",
          "kind": "drive#user",
          "me": true,
          "permissionId": "string",
          "photoLink": "string"
        }
      ],
      "valueType": "string"
    },
    "property2": {
      "dateString": [
        "1970-01-01"
      ],
      "id": "string",
      "integer": [
        "string"
      ],
      "kind": "string",
      "selection": [
        "string"
      ],
      "text": [
        "string"
      ],
      "user": [
        {
          "displayName": "string",
          "emailAddress": "string",
          "kind": "drive#user",
          "me": true,
          "permissionId": "string",
          "photoLink": "string"
        }
      ],
      "valueType": "string"
    }
  },
  "id": "string",
  "kind": "string",
  "revisionId": "string"
}
```

Representation of label and label fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|object|false|none|A map of the fields on the label, keyed by the field's ID.|
|id|string|false|none|The ID of the label.|
|kind|string|false|none|This is always drive#label|
|revisionId|string|false|none|The revision ID of the label.|

<h2 id="tocS_LabelField">LabelField</h2>
<!-- backwards compatibility -->
<a id="schemalabelfield"></a>
<a id="schema_LabelField"></a>
<a id="tocSlabelfield"></a>
<a id="tocslabelfield"></a>

```json
{
  "dateString": [
    "1970-01-01"
  ],
  "id": "string",
  "integer": [
    "string"
  ],
  "kind": "string",
  "selection": [
    "string"
  ],
  "text": [
    "string"
  ],
  "user": [
    {
      "displayName": "string",
      "emailAddress": "string",
      "kind": "drive#user",
      "me": true,
      "permissionId": "string",
      "photoLink": "string"
    }
  ],
  "valueType": "string"
}
```

Representation of field, which is a typed key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateString|[string(date)]|false|none|Only present if valueType is dateString. RFC 3339 formatted date: YYYY-MM-DD.|
|id|string|false|none|The identifier of this label field.|
|integer|[string(int64)]|false|none|Only present if `valueType` is `integer`.|
|kind|string|false|none|This is always drive#labelField.|
|selection|[string]|false|none|Only present if `valueType` is `selection`|
|text|[string]|false|none|Only present if `valueType` is `text`.|
|user|[[User](#schemauser)]|false|none|Only present if `valueType` is `user`.|
|valueType|string|false|none|The field type. While new values may be supported in the future, the following are currently allowed: * `dateString` * `integer` * `selection` * `text` * `user`|

<h2 id="tocS_LabelFieldModification">LabelFieldModification</h2>
<!-- backwards compatibility -->
<a id="schemalabelfieldmodification"></a>
<a id="schema_LabelFieldModification"></a>
<a id="tocSlabelfieldmodification"></a>
<a id="tocslabelfieldmodification"></a>

```json
{
  "fieldId": "string",
  "kind": "string",
  "setDateValues": [
    "1970-01-01"
  ],
  "setIntegerValues": [
    "string"
  ],
  "setSelectionValues": [
    "string"
  ],
  "setTextValues": [
    "string"
  ],
  "setUserValues": [
    "string"
  ],
  "unsetValues": true
}
```

A modification to a label's field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldId|string|false|none|The ID of the field to be modified.|
|kind|string|false|none|This is always drive#labelFieldModification.|
|setDateValues|[string(date)]|false|none|Replaces the value of a dateString Field with these new values. The string must be in the RFC 3339 full-date format: YYYY-MM-DD.|
|setIntegerValues|[string(int64)]|false|none|Replaces the value of an `integer` field with these new values.|
|setSelectionValues|[string]|false|none|Replaces a `selection` field with these new values.|
|setTextValues|[string]|false|none|Sets the value of a `text` field.|
|setUserValues|[string]|false|none|Replaces a `user` field with these new values. The values must be valid email addresses.|
|unsetValues|boolean|false|none|Unsets the values for this field.|

<h2 id="tocS_LabelList">LabelList</h2>
<!-- backwards compatibility -->
<a id="schemalabellist"></a>
<a id="schema_LabelList"></a>
<a id="tocSlabellist"></a>
<a id="tocslabellist"></a>

```json
{
  "kind": "string",
  "labels": [
    {
      "fields": {
        "property1": {
          "dateString": [
            "1970-01-01"
          ],
          "id": "string",
          "integer": [
            "string"
          ],
          "kind": "string",
          "selection": [
            "string"
          ],
          "text": [
            "string"
          ],
          "user": [
            {
              "displayName": "string",
              "emailAddress": "string",
              "kind": "drive#user",
              "me": true,
              "permissionId": "string",
              "photoLink": "string"
            }
          ],
          "valueType": "string"
        },
        "property2": {
          "dateString": [
            "1970-01-01"
          ],
          "id": "string",
          "integer": [
            "string"
          ],
          "kind": "string",
          "selection": [
            "string"
          ],
          "text": [
            "string"
          ],
          "user": [
            {
              "displayName": "string",
              "emailAddress": "string",
              "kind": "drive#user",
              "me": true,
              "permissionId": "string",
              "photoLink": "string"
            }
          ],
          "valueType": "string"
        }
      },
      "id": "string",
      "kind": "string",
      "revisionId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

A list of labels applied to a file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|This is always drive#labelList|
|labels|[[Label](#schemalabel)]|false|none|The list of labels.|
|nextPageToken|string|false|none|The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.|

<h2 id="tocS_LabelModification">LabelModification</h2>
<!-- backwards compatibility -->
<a id="schemalabelmodification"></a>
<a id="schema_LabelModification"></a>
<a id="tocSlabelmodification"></a>
<a id="tocslabelmodification"></a>

```json
{
  "fieldModifications": [
    {
      "fieldId": "string",
      "kind": "string",
      "setDateValues": [
        "1970-01-01"
      ],
      "setIntegerValues": [
        "string"
      ],
      "setSelectionValues": [
        "string"
      ],
      "setTextValues": [
        "string"
      ],
      "setUserValues": [
        "string"
      ],
      "unsetValues": true
    }
  ],
  "kind": "string",
  "labelId": "string",
  "removeLabel": true
}
```

A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldModifications|[[LabelFieldModification](#schemalabelfieldmodification)]|false|none|The list of modifications to this label's fields.|
|kind|string|false|none|This is always drive#labelModification.|
|labelId|string|false|none|The ID of the label to modify.|
|removeLabel|boolean|false|none|If true, the label will be removed from the file.|

<h2 id="tocS_ModifyLabelsRequest">ModifyLabelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifylabelsrequest"></a>
<a id="schema_ModifyLabelsRequest"></a>
<a id="tocSmodifylabelsrequest"></a>
<a id="tocsmodifylabelsrequest"></a>

```json
{
  "kind": "string",
  "labelModifications": [
    {
      "fieldModifications": [
        {
          "fieldId": "string",
          "kind": "string",
          "setDateValues": [
            "1970-01-01"
          ],
          "setIntegerValues": [
            "string"
          ],
          "setSelectionValues": [
            "string"
          ],
          "setTextValues": [
            "string"
          ],
          "setUserValues": [
            "string"
          ],
          "unsetValues": true
        }
      ],
      "kind": "string",
      "labelId": "string",
      "removeLabel": true
    }
  ]
}
```

A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail atomically.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|This is always drive#modifyLabelsRequest.|
|labelModifications|[[LabelModification](#schemalabelmodification)]|false|none|The list of modifications to apply to the labels on the file.|

<h2 id="tocS_ModifyLabelsResponse">ModifyLabelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifylabelsresponse"></a>
<a id="schema_ModifyLabelsResponse"></a>
<a id="tocSmodifylabelsresponse"></a>
<a id="tocsmodifylabelsresponse"></a>

```json
{
  "kind": "string",
  "modifiedLabels": [
    {
      "fields": {
        "property1": {
          "dateString": [
            "1970-01-01"
          ],
          "id": "string",
          "integer": [
            "string"
          ],
          "kind": "string",
          "selection": [
            "string"
          ],
          "text": [
            "string"
          ],
          "user": [
            {
              "displayName": "string",
              "emailAddress": "string",
              "kind": "drive#user",
              "me": true,
              "permissionId": "string",
              "photoLink": "string"
            }
          ],
          "valueType": "string"
        },
        "property2": {
          "dateString": [
            "1970-01-01"
          ],
          "id": "string",
          "integer": [
            "string"
          ],
          "kind": "string",
          "selection": [
            "string"
          ],
          "text": [
            "string"
          ],
          "user": [
            {
              "displayName": "string",
              "emailAddress": "string",
              "kind": "drive#user",
              "me": true,
              "permissionId": "string",
              "photoLink": "string"
            }
          ],
          "valueType": "string"
        }
      },
      "id": "string",
      "kind": "string",
      "revisionId": "string"
    }
  ]
}
```

Response to a ModifyLabels request. This contains only those labels which were added or updated by the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|This is always drive#modifyLabelsResponse|
|modifiedLabels|[[Label](#schemalabel)]|false|none|The list of labels which were added or updated by the request.|

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "allowFileDiscovery": true,
  "deleted": true,
  "displayName": "string",
  "domain": "string",
  "emailAddress": "string",
  "expirationTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "kind": "drive#permission",
  "pendingOwner": true,
  "permissionDetails": [
    {
      "inherited": true,
      "inheritedFrom": "string",
      "permissionType": "string",
      "role": "string"
    }
  ],
  "photoLink": "string",
  "role": "string",
  "teamDrivePermissionDetails": [
    {
      "inherited": true,
      "inheritedFrom": "string",
      "role": "string",
      "teamDrivePermissionType": "string"
    }
  ],
  "type": "string",
  "view": "string"
}
```

A permission for a file. A permission grants a user, group, domain, or the world access to a file or a folder hierarchy. Some resource methods (such as `permissions.update`) require a `permissionId`. Use the `permissions.list` method to retrieve the ID for a file, folder, or shared drive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowFileDiscovery|boolean|false|none|Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type `domain` or `anyone`.|
|deleted|boolean|false|none|Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.|
|displayName|string|false|none|Output only. The "pretty" name of the value of the permission. The following is a list of examples for each type of permission: * `user` - User's full name, as defined for their Google account, such as "Joe Smith." * `group` - Name of the Google Group, such as "The Company Administrators." * `domain` - String domain name, such as "thecompany.com." * `anyone` - No `displayName` is present.|
|domain|string|false|none|The domain to which this permission refers.|
|emailAddress|string|false|none|The email address of the user or group to which this permission refers.|
|expirationTime|string(date-time)|false|none|The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future|
|id|string|false|none|Output only. The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as `permissionId`. IDs should be treated as opaque values.|
|kind|string|false|none|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#permission"`.|
|pendingOwner|boolean|false|none|Whether the account associated with this permission is a pending owner. Only populated for `user` type permissions for files that are not in a shared drive.|
|permissionDetails|[object]|false|read-only|Output only. Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.|
|photoLink|string|false|none|Output only. A link to the user's profile photo, if available.|
|role|string|false|none|The role granted by this permission. While new values may be supported in the future, the following are currently allowed: * `owner` * `organizer` * `fileOrganizer` * `writer` * `commenter` * `reader`|
|teamDrivePermissionDetails|[object]|false|read-only|**Deprecated.** Output only. Deprecated: Output only. Use `permissionDetails` instead.|
|type|string|false|none|The type of the grantee. Valid values are: * `user` * `group` * `domain` * `anyone` When creating a permission, if `type` is `user` or `group`, you must provide an `emailAddress` for the user or group. When `type` is `domain`, you must provide a `domain`. There isn't extra information required for an `anyone` type.|
|view|string|false|none|Indicates the view for this permission. Only populated for permissions that belong to a view. 'published' is the only supported value.|

<h2 id="tocS_PermissionList">PermissionList</h2>
<!-- backwards compatibility -->
<a id="schemapermissionlist"></a>
<a id="schema_PermissionList"></a>
<a id="tocSpermissionlist"></a>
<a id="tocspermissionlist"></a>

```json
{
  "kind": "drive#permissionList",
  "nextPageToken": "string",
  "permissions": [
    {
      "allowFileDiscovery": true,
      "deleted": true,
      "displayName": "string",
      "domain": "string",
      "emailAddress": "string",
      "expirationTime": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "drive#permission",
      "pendingOwner": true,
      "permissionDetails": [
        {
          "inherited": true,
          "inheritedFrom": "string",
          "permissionType": "string",
          "role": "string"
        }
      ],
      "photoLink": "string",
      "role": "string",
      "teamDrivePermissionDetails": [
        {
          "inherited": true,
          "inheritedFrom": "string",
          "role": "string",
          "teamDrivePermissionType": "string"
        }
      ],
      "type": "string",
      "view": "string"
    }
  ]
}
```

A list of permissions for a file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"drive#permissionList"`.|
|nextPageToken|string|false|none|The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.|
|permissions|[[Permission](#schemapermission)]|false|none|The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.|

<h2 id="tocS_Reply">Reply</h2>
<!-- backwards compatibility -->
<a id="schemareply"></a>
<a id="schema_Reply"></a>
<a id="tocSreply"></a>
<a id="tocsreply"></a>

```json
{
  "action": "string",
  "author": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "content": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "deleted": true,
  "htmlContent": "string",
  "id": "string",
  "kind": "drive#reply",
  "modifiedTime": "1970-01-01T00:00:00Z"
}
```

A reply to a comment on a file. Some resource methods (such as `replies.update`) require a `replyId`. Use the `replies.list` method to retrieve the ID for a reply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|The action the reply performed to the parent comment. Valid values are: * `resolve` * `reopen`|
|author|[User](#schemauser)|false|none|Output only. The author of the reply. The author's email address and permission ID will not be populated.|
|content|string|false|none|The plain text content of the reply. This field is used for setting the content, while `htmlContent` should be displayed. This is required on creates if no `action` is specified.|
|createdTime|string(date-time)|false|none|The time at which the reply was created (RFC 3339 date-time).|
|deleted|boolean|false|none|Output only. Whether the reply has been deleted. A deleted reply has no content.|
|htmlContent|string|false|none|Output only. The content of the reply with HTML formatting.|
|id|string|false|none|Output only. The ID of the reply.|
|kind|string|false|none|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#reply"`.|
|modifiedTime|string(date-time)|false|none|The last time the reply was modified (RFC 3339 date-time).|

<h2 id="tocS_ReplyList">ReplyList</h2>
<!-- backwards compatibility -->
<a id="schemareplylist"></a>
<a id="schema_ReplyList"></a>
<a id="tocSreplylist"></a>
<a id="tocsreplylist"></a>

```json
{
  "kind": "drive#replyList",
  "nextPageToken": "string",
  "replies": [
    {
      "action": "string",
      "author": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "content": "string",
      "createdTime": "1970-01-01T00:00:00Z",
      "deleted": true,
      "htmlContent": "string",
      "id": "string",
      "kind": "drive#reply",
      "modifiedTime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

A list of replies to a comment on a file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"drive#replyList"`.|
|nextPageToken|string|false|none|The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.|
|replies|[[Reply](#schemareply)]|false|none|The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.|

<h2 id="tocS_Revision">Revision</h2>
<!-- backwards compatibility -->
<a id="schemarevision"></a>
<a id="schema_Revision"></a>
<a id="tocSrevision"></a>
<a id="tocsrevision"></a>

```json
{
  "exportLinks": {
    "property1": "string",
    "property2": "string"
  },
  "id": "string",
  "keepForever": true,
  "kind": "drive#revision",
  "lastModifyingUser": {
    "displayName": "string",
    "emailAddress": "string",
    "kind": "drive#user",
    "me": true,
    "permissionId": "string",
    "photoLink": "string"
  },
  "md5Checksum": "string",
  "mimeType": "string",
  "modifiedTime": "1970-01-01T00:00:00Z",
  "originalFilename": "string",
  "publishAuto": true,
  "published": true,
  "publishedLink": "string",
  "publishedOutsideDomain": true,
  "size": "string"
}
```

The metadata for a revision to a file. Some resource methods (such as `revisions.update`) require a `revisionId`. Use the `revisions.list` method to retrieve the ID for a revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportLinks|object|false|none|Output only. Links for exporting Docs Editors files to specific formats.|
|id|string|false|none|Output only. The ID of the revision.|
|keepForever|boolean|false|none|Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file. This field is only applicable to files with binary content in Drive.|
|kind|string|false|none|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#revision"`.|
|lastModifyingUser|[User](#schemauser)|false|none|Output only. The last user to modify this revision.|
|md5Checksum|string|false|none|Output only. The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive.|
|mimeType|string|false|none|Output only. The MIME type of the revision.|
|modifiedTime|string(date-time)|false|none|The last time the revision was modified (RFC 3339 date-time).|
|originalFilename|string|false|none|Output only. The original filename used to create this revision. This is only applicable to files with binary content in Drive.|
|publishAuto|boolean|false|none|Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files.|
|published|boolean|false|none|Whether this revision is published. This is only applicable to Docs Editors files.|
|publishedLink|string|false|none|Output only. A link to the published revision. This is only populated for Google Sites files.|
|publishedOutsideDomain|boolean|false|none|Whether this revision is published outside the domain. This is only applicable to Docs Editors files.|
|size|string(int64)|false|none|Output only. The size of the revision's content in bytes. This is only applicable to files with binary content in Drive.|

<h2 id="tocS_RevisionList">RevisionList</h2>
<!-- backwards compatibility -->
<a id="schemarevisionlist"></a>
<a id="schema_RevisionList"></a>
<a id="tocSrevisionlist"></a>
<a id="tocsrevisionlist"></a>

```json
{
  "kind": "drive#revisionList",
  "nextPageToken": "string",
  "revisions": [
    {
      "exportLinks": {
        "property1": "string",
        "property2": "string"
      },
      "id": "string",
      "keepForever": true,
      "kind": "drive#revision",
      "lastModifyingUser": {
        "displayName": "string",
        "emailAddress": "string",
        "kind": "drive#user",
        "me": true,
        "permissionId": "string",
        "photoLink": "string"
      },
      "md5Checksum": "string",
      "mimeType": "string",
      "modifiedTime": "1970-01-01T00:00:00Z",
      "originalFilename": "string",
      "publishAuto": true,
      "published": true,
      "publishedLink": "string",
      "publishedOutsideDomain": true,
      "size": "string"
    }
  ]
}
```

A list of revisions of a file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"drive#revisionList"`.|
|nextPageToken|string|false|none|The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.|
|revisions|[[Revision](#schemarevision)]|false|none|The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.|

<h2 id="tocS_StartPageToken">StartPageToken</h2>
<!-- backwards compatibility -->
<a id="schemastartpagetoken"></a>
<a id="schema_StartPageToken"></a>
<a id="tocSstartpagetoken"></a>
<a id="tocsstartpagetoken"></a>

```json
{
  "kind": "drive#startPageToken",
  "startPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"drive#startPageToken"`.|
|startPageToken|string|false|none|The starting page token for listing future changes. The page token doesn't expire.|

<h2 id="tocS_TeamDrive">TeamDrive</h2>
<!-- backwards compatibility -->
<a id="schemateamdrive"></a>
<a id="schema_TeamDrive"></a>
<a id="tocSteamdrive"></a>
<a id="tocsteamdrive"></a>

```json
{
  "backgroundImageFile": {
    "id": "string",
    "width": 0,
    "xCoordinate": 0,
    "yCoordinate": 0
  },
  "backgroundImageLink": "string",
  "capabilities": {
    "canAddChildren": true,
    "canChangeCopyRequiresWriterPermissionRestriction": true,
    "canChangeDomainUsersOnlyRestriction": true,
    "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
    "canChangeTeamDriveBackground": true,
    "canChangeTeamMembersOnlyRestriction": true,
    "canComment": true,
    "canCopy": true,
    "canDeleteChildren": true,
    "canDeleteTeamDrive": true,
    "canDownload": true,
    "canEdit": true,
    "canListChildren": true,
    "canManageMembers": true,
    "canReadRevisions": true,
    "canRemoveChildren": true,
    "canRename": true,
    "canRenameTeamDrive": true,
    "canResetTeamDriveRestrictions": true,
    "canShare": true,
    "canTrashChildren": true
  },
  "colorRgb": "string",
  "createdTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "kind": "drive#teamDrive",
  "name": "string",
  "orgUnitId": "string",
  "restrictions": {
    "adminManagedRestrictions": true,
    "copyRequiresWriterPermission": true,
    "domainUsersOnly": true,
    "sharingFoldersRequiresOrganizerPermission": true,
    "teamMembersOnly": true
  },
  "themeId": "string"
}
```

Deprecated: use the drive collection instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundImageFile|object|false|none|An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on `drive.teamdrives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.|
|backgroundImageLink|string|false|none|A short-lived link to this Team Drive's background image.|
|capabilities|object|false|none|Capabilities the current user has on this Team Drive.|
|colorRgb|string|false|none|The color of this Team Drive as an RGB hex string. It can only be set on a `drive.teamdrives.update` request that does not set `themeId`.|
|createdTime|string(date-time)|false|none|The time at which the Team Drive was created (RFC 3339 date-time).|
|id|string|false|none|The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"drive#teamDrive"`.|
|name|string|false|none|The name of this Team Drive.|
|orgUnitId|string|false|none|The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.|
|restrictions|object|false|none|A set of restrictions that apply to this Team Drive or items inside this Team Drive.|
|themeId|string|false|none|The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.|

<h2 id="tocS_TeamDriveList">TeamDriveList</h2>
<!-- backwards compatibility -->
<a id="schemateamdrivelist"></a>
<a id="schema_TeamDriveList"></a>
<a id="tocSteamdrivelist"></a>
<a id="tocsteamdrivelist"></a>

```json
{
  "kind": "drive#teamDriveList",
  "nextPageToken": "string",
  "teamDrives": [
    {
      "backgroundImageFile": {
        "id": "string",
        "width": 0,
        "xCoordinate": 0,
        "yCoordinate": 0
      },
      "backgroundImageLink": "string",
      "capabilities": {
        "canAddChildren": true,
        "canChangeCopyRequiresWriterPermissionRestriction": true,
        "canChangeDomainUsersOnlyRestriction": true,
        "canChangeSharingFoldersRequiresOrganizerPermissionRestriction": true,
        "canChangeTeamDriveBackground": true,
        "canChangeTeamMembersOnlyRestriction": true,
        "canComment": true,
        "canCopy": true,
        "canDeleteChildren": true,
        "canDeleteTeamDrive": true,
        "canDownload": true,
        "canEdit": true,
        "canListChildren": true,
        "canManageMembers": true,
        "canReadRevisions": true,
        "canRemoveChildren": true,
        "canRename": true,
        "canRenameTeamDrive": true,
        "canResetTeamDriveRestrictions": true,
        "canShare": true,
        "canTrashChildren": true
      },
      "colorRgb": "string",
      "createdTime": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "drive#teamDrive",
      "name": "string",
      "orgUnitId": "string",
      "restrictions": {
        "adminManagedRestrictions": true,
        "copyRequiresWriterPermission": true,
        "domainUsersOnly": true,
        "sharingFoldersRequiresOrganizerPermission": true,
        "teamMembersOnly": true
      },
      "themeId": "string"
    }
  ]
}
```

A list of Team Drives.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"drive#teamDriveList"`.|
|nextPageToken|string|false|none|The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.|
|teamDrives|[[TeamDrive](#schemateamdrive)]|false|none|The list of Team Drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "displayName": "string",
  "emailAddress": "string",
  "kind": "drive#user",
  "me": true,
  "permissionId": "string",
  "photoLink": "string"
}
```

Information about a Drive user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Output only. A plain text displayable name for this user.|
|emailAddress|string|false|none|Output only. The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.|
|kind|string|false|none|Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#user"`.|
|me|boolean|false|none|Output only. Whether this user is the requesting user.|
|permissionId|string|false|none|Output only. The user's ID as visible in Permission resources.|
|photoLink|string|false|none|Output only. A link to the user's profile photo, if available.|
